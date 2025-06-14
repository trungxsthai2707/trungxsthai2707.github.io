import { Link } from 'react-router-dom';
import { Search, FileText, BookOpen, Target, TrendingUp, Award, ChevronRight, Star, Users, Building2 } from 'lucide-react';
import Header from '@/components/Header';

const Index = () => {
  const features = [{
    icon: Search,
    title: 'Tìm việc thông minh',
    description: 'AI phân tích hồ sơ và đề xuất công việc phù hợp với kỹ năng của bạn',
    color: 'from-blue-500 to-blue-600'
  }, {
    icon: FileText,
    title: 'Tạo CV chuyên nghiệp',
    description: 'Hàng trăm mẫu CV được thiết kế theo từng ngành nghề cụ thể',
    color: 'from-green-500 to-green-600'
  }, {
    icon: BookOpen,
    title: 'Nâng cao kỹ năng',
    description: 'AI thiết kế lộ trình học tập cá nhân hóa để phát triển kỹ năng',
    color: 'from-purple-500 to-purple-600'
  }];
  const stats = [{
    number: '10,000+',
    label: 'Công việc có sẵn'
  }, {
    number: '5,000+',
    label: 'Ứng viên thành công'
  }, {
    number: '500+',
    label: 'Doanh nghiệp đối tác'
  }, {
    number: '95%',
    label: 'Tỷ lệ hài lòng'
  }];
  const testimonials = [{
    name: 'Nguyễn Mạnh Quân',
    role: 'Frontend Developer',
    company: 'TechCorp',
    content: 'Job Buddy đã giúp tôi tìm được công việc mơ ước chỉ trong 2 tuần. AI phân tích rất chính xác!',
    rating: 5
  }, {
    name: 'Trần Thị Bình',
    role: 'Marketing Manager',
    company: 'Digital Agency',
    content: 'Lộ trình học tập do AI đề xuất rất phù hợp. Tôi đã nâng cao được nhiều kỹ năng cần thiết.',
    rating: 5
  }, {
    name: 'Lê Hoàng Cường',
    role: 'Product Designer',
    company: 'StartupXYZ',
    content: 'Mẫu CV của Job Buddy thực sự ấn tượng. HR đã khen ngợi CV của tôi rất chuyên nghiệp.',
    rating: 5
  }];
  
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Tối ưu hóa{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                sự nghiệp
              </span>
              <br />
              với sức mạnh AI
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Job Buddy sử dụng AI để phân tích hồ sơ, đề xuất công việc phù hợp và thiết kế lộ trình phát triển kỹ năng cá nhân hóa cho bạn</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link to="/auth?mode=signup" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg">
                Bắt đầu miễn phí
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/jobs" className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Khám phá công việc
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>)}
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-10 blur-3xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tính năng nổi bật
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trải nghiệm tìm việc và phát triển sự nghiệp hoàn toàn mới với công nghệ AI tiên tiến
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
            const Icon = feature.icon;
            return <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>;
          })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cách thức hoạt động
            </h2>
            <p className="text-xl text-gray-600">
              Chỉ với 4 bước đơn giản để tối ưu hóa sự nghiệp của bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Đăng ký tài khoản</h3>
              <p className="text-gray-600">Tạo hồ sơ cá nhân để AI có thể phân tích và đề xuất phù hợp</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Tìm kiếm công việc</h3>
              <p className="text-gray-600">Sử dụng bộ lọc thông minh để tìm các vị trí phù hợp</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Tạo CV chuyên nghiệp</h3>
              <p className="text-gray-600">AI sẽ đề xuất mẫu CV và hỗ trợ tối ưu nội dung</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Nâng cao kỹ năng</h3>
              <p className="text-gray-600">Hoàn thiện kỹ năng theo lộ trình AI đề xuất</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Câu chuyện thành công
            </h2>
            <p className="text-xl text-gray-600">
              Hàng nghìn ứng viên đã thành công với Job Buddy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role} tại {testimonial.company}</div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Sẵn sàng thay đổi sự nghiệp?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Tham gia cùng hàng nghìn ứng viên thành công. Bắt đầu hành trình của bạn ngay hôm nay!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth?mode=signup" className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Đăng ký miễn phí
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link to="/jobs" className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
              Xem công việc
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Job Buddy</h3>
              <p className="text-gray-400 mb-4">
                Nền tảng tìm việc và phát triển sự nghiệp hàng đầu Việt Nam
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Sản phẩm</h4>
              <ul className="space-y-2">
                <li><Link to="/jobs" className="text-gray-400 hover:text-white transition-colors">Tìm việc làm</Link></li>
                <li><Link to="/cv-builder" className="text-gray-400 hover:text-white transition-colors">Tạo CV</Link></li>
                <li><Link to="/skills" className="text-gray-400 hover:text-white transition-colors">Đào tạo kỹ năng</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Hỗ trợ</h4>
              <ul className="space-y-2">
                <li><Link to="/help-center" className="text-gray-400 hover:text-white transition-colors">Trung tâm trợ giúp</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Liên hệ</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">Về chúng tôi</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Pháp lý</h4>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Điều khoản sử dụng</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Chính sách bảo mật</Link></li>
                <li><Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Job Buddy. Tất cả quyền được bảo lưu.</p>
            <p className="mt-2 text-sm">Dự án này thuộc về nhóm Smile - Nhóm sinh viên trường Đại học Kinh Tế - Đại học Quốc Gia Hà Nội</p>
          </div>
        </div>
      </footer>
    </div>;
};

export default Index;
