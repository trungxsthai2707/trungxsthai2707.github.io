import { useState } from 'react';
import { FileText, Download, Eye, Plus, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import { useToast } from '@/hooks/use-toast';

const CVBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { toast } = useToast();

  const templates = [
    {
      id: 1,
      name: 'Classic Professional',
      description: 'Phù hợp cho các ngành truyền thống, kế toán, tài chính',
      preview: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop&crop=top',
      category: 'traditional'
    },
    {
      id: 2,
      name: 'Modern Creative',
      description: 'Phù hợp cho designer, marketing, creative',
      preview: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=400&fit=crop&crop=top',
      category: 'creative'
    },
    {
      id: 3,
      name: 'Tech Minimalist',
      description: 'Phù hợp cho IT, developer, technical roles',
      preview: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=400&fit=crop&crop=top',
      category: 'tech'
    },
    {
      id: 4,
      name: 'Executive',
      description: 'Phù hợp cho vị trí quản lý, điều hành',
      preview: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=top',
      category: 'executive'
    },
    {
      id: 5,
      name: 'Fresh Graduate',
      description: 'Phù hợp cho sinh viên mới ra trường',
      preview: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=400&fit=crop&crop=top',
      category: 'fresher'
    },
    {
      id: 6,
      name: 'Sales & Marketing',
      description: 'Phù hợp cho nhân viên kinh doanh, marketing',
      preview: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=400&fit=crop&crop=top',
      category: 'sales'
    },
    {
      id: 7,
      name: 'Healthcare Professional',
      description: 'Phù hợp cho ngành y tế, dược phẩm',
      preview: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=400&fit=crop&crop=top',
      category: 'healthcare'
    },
    {
      id: 8,
      name: 'Education & Training',
      description: 'Phù hợp cho giáo viên, đào tạo',
      preview: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=400&fit=crop&crop=top',
      category: 'education'
    }
  ];

  const steps = [
    { id: 1, name: 'Chọn mẫu CV', completed: currentStep > 1 },
    { id: 2, name: 'Thông tin cá nhân', completed: currentStep > 2 },
    { id: 3, name: 'Kinh nghiệm làm việc', completed: currentStep > 3 },
    { id: 4, name: 'Học vấn & Kỹ năng', completed: currentStep > 4 },
    { id: 5, name: 'Hoàn thiện & Tải xuống', completed: false }
  ];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '', 
    phone: '',
    address: '',
    objective: '',
    experiences: [{ company: '', position: '', duration: '', description: '' }],
    education: [{ school: '', degree: '', year: '', gpa: '' }],
    skills: [''],
    certifications: ['']
  });

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experiences: [...formData.experiences, { company: '', position: '', duration: '', description: '' }]
    });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { school: '', degree: '', year: '', gpa: '' }]
    });
  };

  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [...formData.skills, '']
    });
  };

  const handlePreview = () => {
    setIsPreviewOpen(true);
    toast({
      title: "Xem trước CV",
      description: "Đang chuẩn bị xem trước CV của bạn...",
    });
  };

  const handleDownloadPDF = () => {
    toast({
      title: "Tải xuống PDF",
      description: "CV của bạn đang được tạo và sẽ được tải xuống trong giây lát...",
    });
    
    // Simulate PDF generation
    setTimeout(() => {
      toast({
        title: "Tải xuống thành công",
        description: "CV đã được lưu vào thư mục Downloads của bạn.",
      });
    }, 2000);
  };

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 2:
        return formData.fullName && formData.email && formData.phone;
      case 3:
        return formData.experiences.some(exp => exp.company && exp.position);
      default:
        return true;
    }
  };

  const handleNextWithValidation = () => {
    if (!validateCurrentStep()) {
      toast({
        title: "Thông tin chưa đầy đủ",
        description: "Vui lòng điền đầy đủ thông tin bắt buộc trước khi tiếp tục.",
        variant: "destructive"
      });
      return;
    }
    handleNext();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center mb-4 lg:mb-0">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  step.completed 
                    ? 'bg-green-500 border-green-500 text-white' 
                    : currentStep === step.id 
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'border-gray-300 text-gray-500'
                }`}>
                  {step.completed ? '✓' : step.id}
                </div>
                <span className={`ml-3 text-sm font-medium ${
                  currentStep === step.id ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {step.name}
                </span>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block w-20 h-0.5 bg-gray-300 ml-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Step 1: Template Selection */}
              {currentStep === 1 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Chọn mẫu CV phù hợp</h2>
                  <p className="text-gray-600 mb-6">Chọn mẫu CV phù hợp với ngành nghề và phong cách của bạn</p>
                  
                  {/* Demo CV Section */}
                  <div className="mb-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">CV Mẫu Demo</h3>
                        <p className="text-blue-600 text-sm">Xem mẫu CV hoàn chỉnh để tham khảo cách trình bày và nội dung</p>
                      </div>
                      <a
                        href="https://preview--cv-tuan-builder.lovable.app/?fbclid=IwY2xjawK6VD1leHRuA2FlbQIxMABicmlkETFHUlJZRWc3SzZOeGl0U0o5AR5n10zF28GyBN34URS_cL2-EA0fgru7sXip2ZhUgz-6rYB3kef_3UTqxkiO0w_aem_NYiUcUhgfUSIjT_EaHAh0g"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Xem CV Demo</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {templates.map(template => (
                      <div
                        key={template.id}
                        className={`border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                          selectedTemplate === template.id 
                            ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedTemplate(template.id)}
                      >
                        <div className="aspect-[3/4] bg-gray-100 rounded-md mb-4 overflow-hidden">
                          <img 
                            src={template.preview} 
                            alt={template.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to icon if image fails to load
                              e.currentTarget.style.display = 'none';
                              e.currentTarget.nextElementSibling.style.display = 'flex';
                            }}
                          />
                          <div className="w-full h-full hidden items-center justify-center bg-gray-100">
                            <FileText className="h-16 w-16 text-gray-400" />
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{template.name}</h3>
                        <p className="text-sm text-gray-600">{template.description}</p>
                        {selectedTemplate === template.id && (
                          <div className="mt-2 flex items-center text-blue-600 text-sm font-medium">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                            Đã chọn
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {currentStep === 2 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Thông tin cá nhân</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên *</label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Nhập họ và tên"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0123456789"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Địa chỉ</label>
                      <input
                        type="text"
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Địa chỉ của bạn"
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mục tiêu nghề nghiệp</label>
                    <textarea
                      value={formData.objective}
                      onChange={(e) => setFormData({...formData, objective: e.target.value})}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Mô tả ngắn gọn về mục tiêu nghề nghiệp của bạn..."
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Work Experience */}
              {currentStep === 3 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Kinh nghiệm làm việc</h2>
                  
                  {formData.experiences.map((exp, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 mb-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Công ty</label>
                          <input
                            type="text"
                            value={exp.company}
                            onChange={(e) => {
                              const newExps = [...formData.experiences];
                              newExps[index].company = e.target.value;
                              setFormData({...formData, experiences: newExps});
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Tên công ty"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Vị trí</label>
                          <input
                            type="text"
                            value={exp.position}
                            onChange={(e) => {
                              const newExps = [...formData.experiences];
                              newExps[index].position = e.target.value;
                              setFormData({...formData, experiences: newExps});
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="Vị trí công việc"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Thời gian</label>
                        <input
                          type="text"
                          value={exp.duration}
                          onChange={(e) => {
                            const newExps = [...formData.experiences];
                            newExps[index].duration = e.target.value;
                            setFormData({...formData, experiences: newExps});
                          }}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="VD: 01/2020 - 12/2022"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Mô tả công việc</label>
                        <textarea
                          value={exp.description}
                          onChange={(e) => {
                            const newExps = [...formData.experiences];
                            newExps[index].description = e.target.value;
                            setFormData({...formData, experiences: newExps});
                          }}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Mô tả chi tiết công việc và thành tích..."
                        />
                      </div>
                    </div>
                  ))}
                  
                  <button
                    onClick={addExperience}
                    className="flex items-center space-x-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-400 hover:text-blue-600 transition-colors"
                  >
                    <Plus className="h-5 w-5" />
                    <span>Thêm kinh nghiệm</span>
                  </button>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 1}
                  className={`px-6 py-2 rounded-lg font-medium ${
                    currentStep === 1 
                      ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  Quay lại
                </button>
                
                <button
                  onClick={currentStep === 5 ? handleDownloadPDF : handleNextWithValidation}
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all"
                >
                  {currentStep === 5 ? 'Hoàn thành' : 'Tiếp theo'}
                </button>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Xem trước CV</h3>
              
              <div className="aspect-[3/4] bg-gray-100 rounded-md mb-4 overflow-hidden">
                {selectedTemplate && templates.find(t => t.id === selectedTemplate) ? (
                  <img 
                    src={templates.find(t => t.id === selectedTemplate)?.preview} 
                    alt="Preview CV"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="w-full h-full hidden items-center justify-center bg-gray-100">
                  <FileText className="h-16 w-16 text-gray-400" />
                </div>
              </div>
              
              <div className="space-y-3">
                <button 
                  onClick={handlePreview}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Eye className="h-4 w-4" />
                  <span>Xem trước</span>
                </button>
                
                <button 
                  onClick={handleDownloadPDF}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  <span>Tải xuống PDF</span>
                </button>

                <a
                  href="https://preview--cv-tuan-builder.lovable.app/?fbclid=IwY2xjawK6VD1leHRuA2FlbQIxMABicmlkETFHUlJZRWc3SzZOeGl0U0o5AR5n10zF28GyBN34URS_cL2-EA0fgru7sXip2ZhUgz-6rYB3kef_3UTqxkiO0w_aem_NYiUcUhgfUSIjT_EaHAh0g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-blue-300 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>CV Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVBuilder;
