
import React from 'react';
import { X, Shield, Database, Eye, UserCheck, Settings, AlertTriangle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
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
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl font-bold text-gray-900">
            <Shield className="h-6 w-6 text-blue-600 mr-3" />
            Chính sách bảo mật
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Cập nhật lần cuối: 14/06/2025 | Phiên bản: 1.0
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Introduction */}
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-gray-700">
              Job Buddy cam kết bảo vệ quyền riêng tư và thông tin cá nhân của người dùng. 
              Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ dữ liệu của bạn.
            </p>
          </div>

          {/* Privacy Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {privacySections.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Icon className="h-4 w-4 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{section.title}</h3>
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
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Liên hệ về bảo mật</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <p><strong>Email:</strong> privacy@jobbuddy.vn</p>
              <p><strong>Hotline:</strong> 1900-xxxx (Ext: 2)</p>
              <p><strong>Địa chỉ:</strong> Đại học Kinh Tế - ĐHQG Hà Nội</p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Chính sách này tuân thủ Luật An ninh mạng và các quy định về bảo vệ dữ liệu cá nhân của Việt Nam.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;
