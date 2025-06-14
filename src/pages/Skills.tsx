import { useState } from 'react';
import { BookOpen, Target, Award, Clock, TrendingUp, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import AIProfileAnalysisModal from '@/components/AIProfileAnalysisModal';

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showAIAnalysis, setShowAIAnalysis] = useState(false);
  const navigate = useNavigate();

  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'tech', name: 'Công nghệ' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'design', name: 'Thiết kế' },
    { id: 'business', name: 'Kinh doanh' },
    { id: 'language', name: 'Ngoại ngữ' }
  ];

  const courses = [
    {
      id: 1,
      title: 'React JS từ cơ bản đến nâng cao',
      description: 'Học cách xây dựng ứng dụng web hiện đại với React',
      category: 'tech',
      level: 'Trung cấp',
      duration: '6 tuần',
      price: 'Miễn phí 3 ngày',
      rating: 4.8,
      students: 1250,
      skills: ['React', 'JavaScript', 'HTML/CSS'],
      instructor: 'AI Mentor UEB',
      type: 'ai-course'
    },
    {
      id: 2,
      title: 'Digital Marketing Master Class',
      description: 'Chiến lược marketing toàn diện cho thời đại digital',
      category: 'marketing',
      level: 'Cơ bản',
      duration: '4 tuần',
      price: 'Miễn phí 3 ngày',
      rating: 4.7,
      students: 890,
      skills: ['SEO', 'SEM', 'Social Media', 'Analytics'],
      instructor: 'AI Mentor UEB',
      type: 'ai-course'
    },
    {
      id: 3,
      title: 'UI/UX Design Professional',
      description: 'Thiết kế giao diện người dùng chuyên nghiệp',
      category: 'design',
      level: 'Nâng cao',
      duration: '8 tuần',
      price: 'Miễn phí 3 ngày',
      rating: 4.9,
      students: 650,
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      instructor: 'AI Mentor UEB',
      type: 'ai-course'
    },
    {
      id: 4,
      title: 'AWS Cloud Practitioner',
      description: 'Chứng chỉ AWS cơ bản về cloud computing',
      category: 'tech',
      level: 'Cơ bản',
      duration: '3 tuần',
      price: 'Liên hệ',
      rating: 4.6,
      students: 420,
      skills: ['AWS', 'Cloud Computing'],
      instructor: 'AWS Training Center',
      type: 'external',
      certificationAvailable: true
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const openCourseModal = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleFreeTrial = () => {
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 mb-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Phát triển kỹ năng với AI</h1>
            <p className="text-xl mb-6">
              AI sẽ phân tích hồ sơ của bạn, so sánh với yêu cầu công việc và đề xuất lộ trình học tập phù hợp
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowAIAnalysis(true)}
                className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Phân tích hồ sơ miễn phí
              </button>
              <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                Tìm hiểu thêm
              </button>
            </div>
          </div>
        </div>

        {/* AI Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Phân tích khoảng cách kỹ năng</h3>
            <p className="text-gray-600">AI so sánh hồ sơ của bạn với yêu cầu công việc để xác định kỹ năng cần bổ sung</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Lộ trình cá nhân hóa</h3>
            <p className="text-gray-600">Thiết kế lộ trình học tập riêng biệt phù hợp với mục tiêu và thời gian của bạn</p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Chứng chỉ công nhận</h3>
            <p className="text-gray-600">Nhận chứng chỉ sau khi hoàn thành khóa học và đề xuất nơi thi lấy bằng chuyên môn</p>
          </div>
        </div>

        {/* Course Categories */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Khóa học nâng cao kỹ năng</h2>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    course.type === 'ai-course' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {course.type === 'ai-course' ? 'AI Course' : 'Đối tác'}
                  </span>
                  <span className="text-sm text-gray-500">{course.level}</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.students} học viên</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {course.skills.slice(0, 3).map(skill => (
                    <span key={skill} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                  {course.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{course.skills.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-green-600">{course.price}</span>
                    {course.certificationAvailable && (
                      <div className="text-xs text-blue-600 mt-1">Có chứng chỉ</div>
                    )}
                  </div>
                  <button
                    onClick={() => openCourseModal(course)}
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Xem chi tiết
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng nâng cao kỹ năng?</h2>
          <p className="text-xl mb-6">
            Để AI phân tích hồ sơ và đề xuất lộ trình học tập phù hợp với bạn
          </p>
          <button 
            onClick={() => setShowAIAnalysis(true)}
            className="px-8 py-3 bg-white text-teal-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Bắt đầu ngay - Miễn phí 3 ngày
          </button>
        </div>
      </div>

      {/* Course Detail Modal */}
      {showModal && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-900">{selectedCourse.title}</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <p className="text-gray-600 mb-6">{selectedCourse.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-sm text-gray-500">Cấp độ:</span>
                  <p className="font-medium">{selectedCourse.level}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Thời gian:</span>
                  <p className="font-medium">{selectedCourse.duration}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Giảng viên:</span>
                  <p className="font-medium">{selectedCourse.instructor}</p>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Học viên:</span>
                  <p className="font-medium">{selectedCourse.students} người</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold mb-2">Kỹ năng bạn sẽ học:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedCourse.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {selectedCourse.type === 'ai-course' ? (
                  <button 
                    onClick={handleFreeTrial}
                    className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Dùng thử 3 ngày miễn phí
                  </button>
                ) : (
                  <button className="flex-1 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                    Liên hệ đăng ký
                  </button>
                )}
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Profile Analysis Modal */}
      <AIProfileAnalysisModal
        isOpen={showAIAnalysis}
        onClose={() => setShowAIAnalysis(false)}
      />
    </div>
  );
};

export default Skills;
