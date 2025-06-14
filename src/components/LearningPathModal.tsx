
import { useState } from 'react';
import { X, Play, Clock, Award, CheckCircle, Lock } from 'lucide-react';

interface LearningPathModalProps {
  isOpen: boolean;
  onClose: () => void;
  skillName: string;
}

const LearningPathModal = ({ isOpen, onClose, skillName }: LearningPathModalProps) => {
  const [activeWeek, setActiveWeek] = useState(1);
  const [isTrialStarted, setIsTrialStarted] = useState(false);

  const learningPath = {
    duration: '6 tuần',
    totalHours: '40 giờ',
    difficulty: 'Trung cấp',
    certification: true,
    weeks: [
      {
        week: 1,
        title: 'Cơ bản về React',
        lessons: [
          { name: 'Giới thiệu React và JSX', duration: '45 phút', completed: false },
          { name: 'Components và Props', duration: '60 phút', completed: false },
          { name: 'State và Event Handling', duration: '75 phút', completed: false },
        ],
        project: 'Xây dựng ứng dụng Todo đơn giản'
      },
      {
        week: 2,
        title: 'React Hooks',
        lessons: [
          { name: 'useState và useEffect', duration: '60 phút', completed: false },
          { name: 'useContext và useReducer', duration: '75 phút', completed: false },
          { name: 'Custom Hooks', duration: '45 phút', completed: false },
        ],
        project: 'Ứng dụng quản lý sản phẩm với Hooks'
      },
      {
        week: 3,
        title: 'React Router và API',
        lessons: [
          { name: 'React Router cơ bản', duration: '60 phút', completed: false },
          { name: 'Fetch API và Axios', duration: '75 phút', completed: false },
          { name: 'Loading States và Error Handling', duration: '45 phút', completed: false },
        ],
        project: 'Single Page Application với routing'
      }
    ]
  };

  const handleStartTrial = () => {
    setIsTrialStarted(true);
    console.log('Started 3-day trial for', skillName);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Lộ trình học {skillName}
              </h2>
              <p className="text-gray-600 mt-1">Được thiết kế bởi AI dành riêng cho bạn</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Thông tin khóa học */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Thời gian</div>
              <div className="font-semibold">{learningPath.duration}</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <Play className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Tổng giờ học</div>
              <div className="font-semibold">{learningPath.totalHours}</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <Award className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Cấp độ</div>
              <div className="font-semibold">{learningPath.difficulty}</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <CheckCircle className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <div className="text-sm text-gray-600">Chứng chỉ</div>
              <div className="font-semibold">Có</div>
            </div>
          </div>

          {/* Nội dung khóa học */}
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold">Nội dung khóa học</h3>
            {learningPath.weeks.map((week) => (
              <div key={week.week} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => setActiveWeek(activeWeek === week.week ? 0 : week.week)}
                  className="w-full px-4 py-3 flex justify-between items-center text-left hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                      {week.week}
                    </div>
                    <div>
                      <div className="font-medium">Tuần {week.week}: {week.title}</div>
                      <div className="text-sm text-gray-600">{week.lessons.length} bài học</div>
                    </div>
                  </div>
                  {week.week > 1 && !isTrialStarted && (
                    <Lock className="h-4 w-4 text-gray-400" />
                  )}
                </button>
                
                {activeWeek === week.week && (
                  <div className="px-4 pb-4 border-t border-gray-100">
                    <div className="space-y-3 mt-4">
                      {week.lessons.map((lesson, index) => (
                        <div key={index} className="flex items-center space-x-3 py-2">
                          <div className="w-4 h-4 border-2 border-gray-300 rounded flex-shrink-0"></div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">{lesson.name}</div>
                            <div className="text-xs text-gray-500">{lesson.duration}</div>
                          </div>
                          {week.week > 1 && !isTrialStarted && (
                            <Lock className="h-4 w-4 text-gray-400" />
                          )}
                        </div>
                      ))}
                      <div className="bg-blue-50 rounded-lg p-3 mt-4">
                        <div className="font-medium text-sm text-blue-900">Dự án thực hành</div>
                        <div className="text-sm text-blue-700">{week.project}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Trial và đăng ký */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-900">
              {!isTrialStarted ? 'Dùng thử 3 ngày miễn phí' : 'Đang trong thời gian dùng thử'}
            </h3>
            
            {!isTrialStarted ? (
              <div>
                <p className="text-gray-700 mb-4">
                  Trải nghiệm tuần đầu tiên hoàn toàn miễn phí. Sau đó chỉ 299,000₫/tháng để hoàn thành toàn bộ lộ trình.
                </p>
                <div className="flex space-x-4">
                  <button
                    onClick={handleStartTrial}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Bắt đầu dùng thử
                  </button>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Để sau
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-gray-700 mb-4">
                  Bạn có 2 ngày còn lại trong thời gian dùng thử. Nâng cấp để tiếp tục học và nhận chứng chỉ.
                </p>
                <div className="flex space-x-4">
                  <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                    Nâng cấp ngay
                  </button>
                  <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                    Tiếp tục học
                  </button>
                </div>
              </div>
            )}

            <div className="mt-4 p-4 bg-white rounded-lg">
              <h4 className="font-medium mb-2">Sau khi hoàn thành:</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Nhận chứng chỉ hoàn thành từ Job Buddy</li>
                <li>• Đề xuất nơi thi lấy bằng chứng chỉ chuyên môn (nếu có)</li>
                <li>• Hỗ trợ việc làm phù hợp với kỹ năng mới</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathModal;
