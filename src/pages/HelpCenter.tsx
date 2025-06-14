
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Search, HelpCircle, MessageCircle, Phone, Mail, Clock, ChevronDown, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqCategories = [
    {
      title: 'Tài khoản & Đăng ký',
      faqs: [
        {
          question: 'Làm thế nào để tạo tài khoản Job Buddy?',
          answer: 'Bạn có thể tạo tài khoản bằng cách nhấn nút "Đăng ký" trên trang chủ, sau đó điền thông tin cá nhân hoặc đăng ký qua Google/Facebook.'
        },
        {
          question: 'Tôi quên mật khẩu, làm sao để khôi phục?',
          answer: 'Nhấn vào "Quên mật khẩu" trên trang đăng nhập, nhập email đã đăng ký và làm theo hướng dẫn trong email khôi phục.'
        },
        {
          question: 'Có thể thay đổi thông tin cá nhân không?',
          answer: 'Có, bạn có thể cập nhật thông tin cá nhân bất cứ lúc nào trong phần "Hồ sơ cá nhân" sau khi đăng nhập.'
        }
      ]
    },
    {
      title: 'Tìm việc làm',
      faqs: [
        {
          question: 'Làm thế nào để tìm việc phù hợp?',
          answer: 'Sử dụng bộ lọc thông minh của chúng tôi hoặc để AI phân tích hồ sơ và đề xuất công việc phù hợp với kỹ năng của bạn.'
        },
        {
          question: 'Tôi có thể ứng tuyển nhiều công việc cùng lúc không?',
          answer: 'Có, bạn có thể ứng tuyển nhiều vị trí khác nhau. Hệ thống sẽ theo dõi trạng thái ứng tuyển của từng công việc.'
        },
        {
          question: 'Làm sao biết nhà tuyển dụng đã xem CV của tôi?',
          answer: 'Bạn sẽ nhận được thông báo qua email và trong hệ thống khi nhà tuyển dụng xem hoặc phản hồi CV của bạn.'
        }
      ]
    },
    {
      title: 'CV & Hồ sơ',
      faqs: [
        {
          question: 'Có bao nhiều mẫu CV có sẵn?',
          answer: 'Job Buddy cung cấp hàng trăm mẫu CV chuyên nghiệp được thiết kế theo từng ngành nghề cụ thể.'
        },
        {
          question: 'Tôi có thể tải CV về máy không?',
          answer: 'Có, bạn có thể xuất CV dưới định dạng PDF hoặc Word để sử dụng ở nơi khác.'
        },
        {
          question: 'AI có thể đề xuất cải thiện CV không?',
          answer: 'Có, AI sẽ phân tích CV và đưa ra các gợi ý cụ thể để tối ưu hóa nội dung và định dạng.'
        }
      ]
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: 'Chat trực tuyến',
      description: 'Hỗ trợ tức thì từ đội ngũ chăm sóc khách hàng',
      availability: '24/7',
      action: 'Bắt đầu chat'
    },
    {
      icon: Phone,
      title: 'Hotline hỗ trợ',
      description: '1900-xxxx (miễn phí)',
      availability: '8:00 - 22:00 hàng ngày',
      action: 'Gọi ngay'
    },
    {
      icon: Mail,
      title: 'Email hỗ trợ',
      description: 'support@jobbuddy.vn',
      availability: 'Phản hồi trong 24h',
      action: 'Gửi email'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Quay lại trang chủ
          </Link>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Trung tâm trợ giúp
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tìm câu trả lời cho các câu hỏi thường gặp hoặc liên hệ với đội ngũ hỗ trợ của chúng tôi
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm câu hỏi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {supportOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 mb-2">{option.description}</p>
                <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  {option.availability}
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  {option.action}
                </button>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Câu hỏi thường gặp</h2>
          
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.faqs.map((faq, faqIndex) => {
                    const globalIndex = categoryIndex * 10 + faqIndex;
                    const isExpanded = expandedFaq === globalIndex;
                    
                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => setExpandedFaq(isExpanded ? null : globalIndex)}
                          className="w-full text-left p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900">{faq.question}</span>
                          {isExpanded ? (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-gray-500" />
                          )}
                        </button>
                        
                        {isExpanded && (
                          <div className="px-4 pb-4">
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
