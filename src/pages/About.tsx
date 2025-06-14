
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Về chúng tôi</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Job Buddy - Nền tảng tìm việc thông minh được phát triển bởi nhóm Smile từ 
            Trường Đại học Kinh tế - Đại học Quốc gia Hà Nội
          </p>
        </div>

        {/* Team Image Section */}
        <div className="mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="/lovable-uploads/5911426b-2c45-4680-b926-ba4a270365c3.png" 
              alt="Nhóm Smile - Đội ngũ phát triển Job Buddy"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Nhóm Smile</h3>
              <p className="text-lg">Đại học Kinh tế - Đại học Quốc gia Hà Nội</p>
              <div className="mt-4 space-y-1">
                <p className="text-sm">Thành viên: Dương Nhật Minh</p>
                <p className="text-sm">Thành viên: Phạm Nguyễn Quang Minh</p>
                <p className="text-sm">Thành viên: Nguyễn Minh Đức</p>
                <p className="text-sm">Thành viên: Nguyễn Bá Hoàng Minh</p>
                <p className="text-sm">Thành viên: Đỗ Thị Quỳnh Trang</p>
                <p className="text-sm">Thành viên: Đỗ Việt Trung</p>
                <p className="text-sm">Thành viên: Nguyễn Mạnh Quân</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sứ mệnh</h3>
            <p className="text-gray-600 leading-relaxed">
              Chúng tôi cam kết tạo ra một nền tảng tìm việc thông minh, giúp kết nối 
              ứng viên với nhà tuyển dụng một cách hiệu quả nhất. Sử dụng công nghệ AI 
              để phân tích hồ sơ, đề xuất công việc phù hợp và hỗ trợ phát triển kỹ năng.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Tầm nhìn</h3>
            <p className="text-gray-600 leading-relaxed">
              Trở thành nền tảng tìm việc hàng đầu tại Việt Nam, nơi mọi người có thể 
              tìm thấy công việc mơ ước và phát triển sự nghiệp của mình một cách bền vững, 
              với sự hỗ trợ của công nghệ AI tiên tiến.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">Giá trị cốt lõi</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Đổi mới</h4>
              <p className="text-gray-600">Không ngừng cải tiến và áp dụng công nghệ mới để mang lại trải nghiệm tốt nhất</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Cộng đồng</h4>
              <p className="text-gray-600">Xây dựng cộng đồng kết nối, hỗ trợ lẫn nhau trong việc phát triển sự nghiệp</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Tận tâm</h4>
              <p className="text-gray-600">Luôn đặt lợi ích của người dùng lên hàng đầu và cam kết mang lại giá trị thực</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Kết nối với chúng tôi</h3>
          <p className="text-lg mb-6">
            Bạn có câu hỏi hoặc muốn hợp tác? Chúng tôi luôn sẵn sàng lắng nghe!
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Liên hệ ngay
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
