
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Settings, Shield, BarChart, Target } from 'lucide-react';
import Header from '@/components/Header';

const CookiePolicy = () => {
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
    preferences: true
  });

  const cookieTypes = [
    {
      icon: Shield,
      title: 'Cookie cần thiết',
      description: 'Các cookie này cần thiết để website hoạt động và không thể tắt trong hệ thống của chúng tôi.',
      examples: ['Phiên đăng nhập', 'Bảo mật', 'Giỏ hàng', 'Ngôn ngữ'],
      required: true,
      key: 'necessary'
    },
    {
      icon: BarChart,
      title: 'Cookie phân tích',
      description: 'Giúp chúng tôi hiểu cách khách truy cập sử dụng website để cải thiện trải nghiệm.',
      examples: ['Google Analytics', 'Thống kê truy cập', 'Hành vi người dùng'],
      required: false,
      key: 'analytics'
    },
    {
      icon: Target,
      title: 'Cookie tiếp thị',
      description: 'Được sử dụng để theo dõi khách truy cập trên các website và hiển thị quảng cáo phù hợp.',
      examples: ['Facebook Pixel', 'Google Ads', 'Retargeting'],
      required: false,
      key: 'marketing'
    },
    {
      icon: Settings,
      title: 'Cookie tùy chọn',
      description: 'Lưu trữ các tùy chọn cá nhân của bạn để cải thiện trải nghiệm sử dụng.',
      examples: ['Giao diện', 'Font chữ', 'Bố cục trang'],
      required: false,
      key: 'preferences'
    }
  ];

  const handleCookieToggle = (key: string) => {
    setCookieSettings(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof prev]
    }));
  };

  const saveSettings = () => {
    console.log('Cookie settings saved:', cookieSettings);
    // Handle saving cookie preferences
  };

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
            <Cookie className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">Chính sách Cookie</h1>
          </div>
          
          <div className="text-sm text-gray-600 space-y-2">
            <p><strong>Cập nhật lần cuối:</strong> 14/06/2025</p>
            <p><strong>Phiên bản:</strong> 1.0</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Cookie là gì?</h2>
          <p className="text-gray-700 mb-4">
            Cookie là các tệp văn bản nhỏ được lưu trữ trên thiết bị của bạn khi bạn truy cập website. 
            Chúng giúp website nhớ thông tin về chuyến thăm của bạn, giúp việc truy cập lần sau dễ dàng và hữu ích hơn.
          </p>
          <p className="text-gray-700">
            Job Buddy sử dụng cookie để cải thiện trải nghiệm của bạn, cung cấp nội dung cá nhân hóa và phân tích cách sử dụng website.
          </p>
        </div>

        {/* Cookie Types */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Các loại Cookie chúng tôi sử dụng</h2>
          
          {cookieTypes.map((type, index) => {
            const Icon = type.icon;
            const isEnabled = cookieSettings[type.key as keyof typeof cookieSettings];
            
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{type.title}</h3>
                      {type.required && (
                        <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full mt-1">
                          Bắt buộc
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {!type.required && (
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isEnabled}
                        onChange={() => handleCookieToggle(type.key)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4">{type.description}</p>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Ví dụ:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.examples.map((example, exampleIndex) => (
                      <span
                        key={exampleIndex}
                        className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cookie Management */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quản lý Cookie</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Bạn có thể quản lý cookie thông qua cài đặt trình duyệt của mình. Tuy nhiên, việc vô hiệu hóa 
              một số cookie có thể ảnh hưởng đến chức năng của website.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h3 className="font-medium text-yellow-800 mb-2">Lưu ý quan trọng:</h3>
              <p className="text-yellow-700 text-sm">
                Nếu bạn xóa tất cả cookie, bạn sẽ mất tất cả các tùy chọn đã lưu và có thể cần đăng nhập lại.
              </p>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={saveSettings}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Lưu cài đặt
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Chấp nhận tất cả
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                Từ chối không cần thiết
              </button>
            </div>
          </div>
        </div>

        {/* Browser Instructions */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Cách quản lý Cookie trong trình duyệt</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Chrome:</h4>
              <p>Cài đặt → Nâng cao → Quyền riêng tư và bảo mật → Cookie</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Firefox:</h4>
              <p>Tùy chọn → Quyền riêng tư và Bảo mật → Cookie và Dữ liệu trang web</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Safari:</h4>
              <p>Tùy chọn Safari → Quyền riêng tư → Quản lý dữ liệu website</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Edge:</h4>
              <p>Cài đặt → Quyền riêng tư, tìm kiếm và dịch vụ → Cookie</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-2">
            Nếu bạn có câu hỏi về chính sách cookie, vui lòng liên hệ: privacy@jobbuddy.vn
          </p>
          <p className="text-sm text-gray-500">
            © 2025 Job Buddy - Nhóm Smile. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
