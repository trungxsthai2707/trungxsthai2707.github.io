
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Database, Eye, UserCheck, Settings, AlertTriangle } from 'lucide-react';
import Header from '@/components/Header';

const Privacy = () => {
  const privacySections = [
    {
      icon: Database,
      title: 'Thu thập thông tin',
      content: [
        'Thông tin cá nhân: họ tên, email, số điện thoại, địa chỉ',
        'Thông tin nghề nghiệp: kinh nghiệm, kỹ năng, học vấn',
        'Thông tin tương tác: lịch sử tìm kiếm, ứng tuyển',
        'Dữ liệu kỹ thuật: IP, trình duyệt, thiết bị truy cập'
      ]
    },
    {
      icon: Eye,
      title: 'Mục đích sử dụng',
      content: [
        'Cung cấp dịch vụ tìm việc và kết nối cơ hội',
        'Cá nhân hóa trải nghiệm người dùng',
        'Cải thiện chất lượng dịch vụ thông qua AI',
        'Gửi thông báo về cơ hội việc làm phù hợp'
      ]
    },
    {
      icon: Shield,
      title: 'Bảo mật dữ liệu',
      content: [
        'Mã hóa dữ liệu theo tiêu chuẩn AES-256',
        'Lưu trữ trên server an toàn với SSL/TLS',
        'Kiểm soát truy cập nghiêm ngặt',
        'Sao lưu định kỳ và khôi phục dữ liệu'
      ]
    },
    {
      icon: UserCheck,
      title: 'Quyền của người dùng',
      content: [
        'Truy cập và xem thông tin cá nhân',
        'Chỉnh sửa hoặc cập nhật dữ liệu',
        'Yêu cầu xóa tài khoản và dữ liệu',
        'Từ chối nhận thông báo marketing'
      ]
    },
    {
      icon: Settings,
      title: 'Chia sẻ thông tin',
      content: [
        'Chỉ chia sẻ với nhà tuyển dụng khi có sự đồng ý',
        'Không bán thông tin cho bên thứ ba',
        'Có thể chia sẻ dữ liệu thống kê không định danh',
        'Tuân thủ yêu cầu pháp lý khi cần thiết'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Lưu ý quan trọng',
      content: [
        'Chính sách có thể được cập nhật định kỳ',
        'Người dùng sẽ được thông báo về các thay đổi',
        'Việc tiếp tục sử dụng đồng nghĩa chấp nhận chính sách mới',
        'Liên hệ ngay nếu phát hiện vi phạm bảo mật'
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
          
          <div className="flex items-center mb-4">
            <Shield className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Chính sách bảo mật</h1>
          </div>
          
          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>Cập nhật lần cuối:</strong> 14/06/2025</p>
            <p><strong>Phiên bản:</strong> 1.0</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <p className="text-gray-700">
            Job Buddy cam kết bảo vệ quyền riêng tư và thông tin cá nhân của người dùng. 
            Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu của bạn.
          </p>
        </div>

        {/* Privacy Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {privacySections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Contact for Privacy */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Liên hệ về bảo mật</h3>
          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>Email:</strong> privacy@jobbuddy.vn</p>
            <p><strong>Hotline:</strong> 1900-xxxx (Ext: 2)</p>
            <p><strong>Địa chỉ:</strong> Đại học Kinh Tế - ĐHQG Hà Nội</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            Chính sách này tuân thủ Luật An ninh mạng và các quy định về bảo vệ dữ liệu cá nhân của Việt Nam.
          </p>
          <p className="text-sm text-gray-500">
            © 2025 Job Buddy - Nhóm Smile. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
