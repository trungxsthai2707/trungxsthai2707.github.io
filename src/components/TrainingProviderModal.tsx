
import { useState } from 'react';
import { X, MapPin, Clock, Star, ExternalLink, Phone, Mail } from 'lucide-react';

interface TrainingProviderModalProps {
  isOpen: boolean;
  onClose: () => void;
  skillName: string;
}

const TrainingProviderModal = ({ isOpen, onClose, skillName }: TrainingProviderModalProps) => {
  const [selectedProvider, setSelectedProvider] = useState<any>(null);

  const trainingProviders = [
    {
      id: 1,
      name: 'CodeGym',
      type: 'Trung tâm đào tạo',
      location: 'Hà Nội, TP.HCM',
      rating: 4.8,
      reviews: 1250,
      price: '15,000,000₫',
      duration: '6 tháng',
      format: 'Offline/Online',
      description: 'Chương trình đào tạo React chuyên sâu với dự án thực tế',
      features: ['Học với mentor 1-1', 'Dự án thực tế', 'Hỗ trợ việc làm', 'Chứng chỉ quốc tế'],
      contact: {
        phone: '024-1234-5678',
        email: 'info@codegym.vn',
        website: 'https://codegym.vn'
      },
      logo: '🎓'
    },
    {
      id: 2,
      name: 'Techmaster',
      type: 'Trung tâm đào tạo',
      location: 'Hà Nội',
      rating: 4.6,
      reviews: 890,
      price: '12,500,000₫',
      duration: '4 tháng',
      format: 'Offline',
      description: 'Khóa học React từ cơ bản đến nâng cao với giảng viên giàu kinh nghiệm',
      features: ['Lớp học nhỏ', 'Thực hành nhiều', 'Tài liệu chi tiết', 'Hỗ trợ sau khóa học'],
      contact: {
        phone: '024-8765-4321',
        email: 'contact@techmaster.vn',
        website: 'https://techmaster.vn'
      },
      logo: '💻'
    },
    {
      id: 3,
      name: 'Udemy Business',
      type: 'Nền tảng học online',
      location: 'Online',
      rating: 4.4,
      reviews: 15420,
      price: '1,200,000₫',
      duration: '8 tuần',
      format: 'Online',
      description: 'Khóa học React complete từ các instructor hàng đầu thế giới',
      features: ['Học linh hoạt', 'Cập nhật liên tục', 'Chứng chỉ hoàn thành', 'Hỗ trợ 24/7'],
      contact: {
        phone: 'Chat online',
        email: 'support@udemy.com',
        website: 'https://udemy.com'
      },
      logo: '🌐'
    },
    {
      id: 4,
      name: 'FUNiX',
      type: 'Trường đại học trực tuyến',
      location: 'Online',
      rating: 4.7,
      reviews: 680,
      price: '8,900,000₫',
      duration: '12 tuần',
      format: 'Online',
      description: 'Chương trình đào tạo React trong khóa học Full-stack Development',
      features: ['Bằng cấp chính thức', 'Mentor cá nhân', 'Dự án capstone', 'Mạng lưới alumni'],
      contact: {
        phone: '028-1234-5678',
        email: 'info@funix.edu.vn',
        website: 'https://funix.edu.vn'
      },
      logo: '🎯'
    }
  ];

  const handleContactProvider = (provider: any, method: string) => {
    if (method === 'phone') {
      console.log(`Calling ${provider.name}: ${provider.contact.phone}`);
    } else if (method === 'email') {
      console.log(`Emailing ${provider.name}: ${provider.contact.email}`);
    } else if (method === 'website') {
      window.open(provider.contact.website, '_blank');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Nơi đào tạo {skillName}
              </h2>
              <p className="text-gray-600 mt-1">Các trung tâm và khóa học được đề xuất</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {trainingProviders.map((provider) => (
              <div key={provider.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{provider.logo}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
                      <p className="text-sm text-gray-600">{provider.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{provider.rating}</span>
                    <span className="text-gray-500">({provider.reviews})</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{provider.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>{provider.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span>{provider.duration}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-green-600">{provider.price}</span>
                    <span className="text-sm text-gray-500 ml-2">{provider.format}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Ưu điểm:</h4>
                  <div className="flex flex-wrap gap-2">
                    {provider.features.map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleContactProvider(provider, 'website')}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Xem chi tiết</span>
                  </button>
                  <button
                    onClick={() => setSelectedProvider(provider)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Liên hệ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      {selectedProvider && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-60">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold">Liên hệ {selectedProvider.name}</h3>
              <button
                onClick={() => setSelectedProvider(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => handleContactProvider(selectedProvider, 'phone')}
                className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
              >
                <Phone className="h-5 w-5 text-green-600" />
                <div>
                  <div className="font-medium">Gọi điện</div>
                  <div className="text-sm text-gray-600">{selectedProvider.contact.phone}</div>
                </div>
              </button>

              <button
                onClick={() => handleContactProvider(selectedProvider, 'email')}
                className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
              >
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <div className="font-medium">Gửi email</div>
                  <div className="text-sm text-gray-600">{selectedProvider.contact.email}</div>
                </div>
              </button>

              <button
                onClick={() => handleContactProvider(selectedProvider, 'website')}
                className="w-full flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 text-left"
              >
                <ExternalLink className="h-5 w-5 text-purple-600" />
                <div>
                  <div className="font-medium">Truy cập website</div>
                  <div className="text-sm text-gray-600">{selectedProvider.contact.website}</div>
                </div>
              </button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                💡 <strong>Gợi ý:</strong> Job Buddy có thể hỗ trợ bạn liên hệ trực tiếp với nhà đào tạo 
                để được tư vấn chi tiết và ưu đãi đặc biệt.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrainingProviderModal;
