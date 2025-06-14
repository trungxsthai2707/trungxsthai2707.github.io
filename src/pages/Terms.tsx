
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Shield, Users, Gavel, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal';

const Terms = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const sections = [
    {
      id: 'definitions',
      title: '1. Định nghĩa',
      icon: FileText,
      content: [
        'Job Buddy: Là nền tảng tìm việc và phát triển sự nghiệp trực tuyến do nhóm Smile vận hành.',
        'Người dùng: Là cá nhân hoặc tổ chức sử dụng dịch vụ của Job Buddy.',
        'Dịch vụ: Bao gồm tất cả các tính năng mà Job Buddy cung cấp như tìm việc, tạo CV, đào tạo kỹ năng.',
        'Nội dung: Là tất cả thông tin, dữ liệu, văn bản, hình ảnh được tạo ra hoặc chia sẻ trên nền tảng.'
      ]
    },
    {
      id: 'acceptance',
      title: '2. Chấp nhận điều khoản',
      icon: Gavel,
      content: [
        'Bằng việc truy cập và sử dụng Job Buddy, bạn đồng ý tuân thủ các điều khoản này.',
        'Nếu bạn không đồng ý với bất kỳ điều khoản nào, vui lòng ngừng sử dụng dịch vụ.',
        'Job Buddy có quyền thay đổi điều khoản bất cứ lúc nào mà không cần thông báo trước.',
        'Việc tiếp tục sử dụng dịch vụ sau khi điều khoản được cập nhật đồng nghĩa với việc bạn chấp nhận các thay đổi.'
      ]
    },
    {
      id: 'user-obligations',
      title: '3. Nghĩa vụ của người dùng',
      icon: Users,
      content: [
        'Cung cấp thông tin chính xác và cập nhật khi đăng ký tài khoản.',
        'Không chia sẻ thông tin đăng nhập với bên thứ ba.',
        'Không sử dụng dịch vụ cho mục đích bất hợp pháp hoặc vi phạm quy định.',
        'Tôn trọng quyền sở hữu trí tuệ và không vi phạm bản quyền.',
        'Không spam, quấy rối hoặc làm phiền người dùng khác.',
        'Báo cáo ngay lập tức nếu phát hiện hành vi vi phạm hoặc lạm dụng.'
      ]
    },
    {
      id: 'services',
      title: '4. Dịch vụ cung cấp',
      icon: Shield,
      content: [
        'Tìm kiếm và kết nối cơ hội việc làm phù hợp thông qua AI.',
        'Công cụ tạo CV chuyên nghiệp với nhiều mẫu thiết kế.',
        'Hệ thống đào tạo và nâng cao kỹ năng cá nhân hóa.',
        'Tư vấn và hỗ trợ phát triển sự nghiệp.',
        'Kết nối với các nhà tuyển dụng và doanh nghiệp uy tín.',
        'Job Buddy không đảm bảo kết quả tuyển dụng cụ thể nào.'
      ]
    },
    {
      id: 'privacy',
      title: '5. Bảo mật thông tin',
      icon: AlertCircle,
      content: [
        'Job Buddy cam kết bảo vệ thông tin cá nhân của người dùng.',
        'Thông tin được mã hóa và lưu trữ an toàn theo tiêu chuẩn quốc tế.',
        'Chúng tôi không chia sẻ thông tin cá nhân với bên thứ ba không có sự đồng ý.',
        'Người dùng có quyền yêu cầu xóa hoặc chỉnh sửa thông tin cá nhân.',
        'Chi tiết về việc xử lý dữ liệu được quy định trong Chính sách bảo mật.'
      ]
    },
    {
      id: 'liability',
      title: '6. Giới hạn trách nhiệm',
      icon: Shield,
      content: [
        'Job Buddy không chịu trách nhiệm về thiệt hại gián tiếp phát sinh từ việc sử dụng dịch vụ.',
        'Chúng tôi không đảm bảo dịch vụ hoạt động liên tục và không có lỗi.',
        'Người dùng tự chịu trách nhiệm về nội dung và thông tin họ chia sẻ.',
        'Job Buddy có quyền tạm ngừng hoặc chấm dứt dịch vụ mà không cần thông báo trước.',
        'Trách nhiệm tối đa của Job Buddy bị giới hạn theo quy định pháp luật Việt Nam.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center mb-4">
            <Link to="/" className="flex items-center text-blue-600 hover:text-blue-700 mr-4">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Quay lại trang chủ
            </Link>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Điều khoản sử dụng dịch vụ
          </h1>
          
          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>Ngày có hiệu lực:</strong> 01/01/2025</p>
            <p><strong>Ngày cập nhật gần nhất:</strong> 14/06/2025</p>
            <p><strong>Phiên bản:</strong> 1.0</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Giới thiệu</h2>
          <div className="prose text-gray-700 space-y-4">
            <p>
              Chào mừng bạn đến với Job Buddy - nền tảng tìm việc và phát triển sự nghiệp hàng đầu Việt Nam. 
              Điều khoản sử dụng này quy định các quyền và nghĩa vụ của bạn khi sử dụng dịch vụ của chúng tôi.
            </p>
            <p>
              Job Buddy được phát triển bởi nhóm Smile - nhóm sinh viên trường Đại học Kinh Tế - Đại học Quốc Gia Hà Nội, 
              với mục tiêu tối ưu hóa trải nghiệm tìm việc thông qua công nghệ AI tiên tiến.
            </p>
            <p>
              Để biết thêm chi tiết về cách chúng tôi thu thập và xử lý dữ liệu, vui lòng tham khảo{' '}
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="text-blue-600 hover:text-blue-700 underline font-medium"
              >
                Chính sách bảo mật
              </button>
              {' '}của chúng tôi.
            </p>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.id} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>
                
                <ul className="space-y-3">
                  {section.content.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="bg-blue-50 rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Thông tin liên hệ</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Nhóm phát triển:</strong> Smile Team</p>
            <p><strong>Trường:</strong> Đại học Kinh Tế - Đại học Quốc Gia Hà Nội</p>
            <p><strong>Email hỗ trợ:</strong> support@jobbuddy.vn</p>
            <p><strong>Hotline:</strong> 1900-xxxx</p>
          </div>
          
          <div className="mt-4 pt-4 border-t border-blue-200">
            <p className="text-sm text-gray-600">
              Nếu bạn có bất kỳ câu hỏi nào về điều khoản sử dụng này, vui lòng liên hệ với chúng tôi 
              qua các thông tin trên. Chúng tôi cam kết phản hồi trong vòng 24 giờ.
            </p>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © 2025 Job Buddy - Nhóm Smile. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>

      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
};

export default Terms;
