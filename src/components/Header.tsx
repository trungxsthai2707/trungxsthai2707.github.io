
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, FileText, User, Download, BookOpen, Briefcase, Eye, Star, Edit3, MapPin, Clock, Building, Target, TrendingUp, Award, Users, Laptop } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const cvMenuItems = [
    {
      icon: <FileText className="h-4 w-4" />,
      title: "Mẫu CV theo style",
      description: "Chọn từ nhiều mẫu CV đẹp",
      arrow: true
    },
    {
      icon: <Edit3 className="h-4 w-4" />,
      title: "Mẫu CV Đơn giản",
      description: "CV đơn giản, chuyện nghiệp"
    },
    {
      icon: <Star className="h-4 w-4" />,
      title: "Mẫu CV Ấn tượng", 
      description: "CV nổi bật, thu hút HR"
    },
    {
      icon: <Briefcase className="h-4 w-4" />,
      title: "Mẫu CV Chuyên nghiệp",
      description: "CV chuyên nghiệp cho mọi ngành"
    },
    {
      icon: <Eye className="h-4 w-4" />,
      title: "Mẫu CV Hiện đại",
      description: "CV hiện đại, sáng tạo"
    }
  ];

  const cvByPositionItems = [
    { title: "Nhân viên kinh doanh", icon: <Briefcase className="h-3 w-3" /> },
    { title: "Lập trình viên", icon: <Briefcase className="h-3 w-3" /> },
    { title: "Nhân viên kế toán", icon: <Briefcase className="h-3 w-3" /> },
    { title: "Chuyên viên marketing", icon: <Briefcase className="h-3 w-3" /> }
  ];

  const cvToolsItems = [
    {
      icon: <User className="h-4 w-4" />,
      title: "Quản lý CV",
      description: "Quản lý tất cả CV của bạn"
    },
    {
      icon: <Download className="h-4 w-4" />,
      title: "Tải CV lên",
      description: "Upload CV có sẵn"
    },
    {
      icon: <BookOpen className="h-4 w-4" />,
      title: "Hướng dẫn viết CV",
      description: "Tips viết CV hiệu quả"
    }
  ];

  const jobMenuItems = [
    {
      icon: <Search className="h-4 w-4" />,
      title: "Tìm việc làm",
      description: "Tìm kiếm việc làm phù hợp"
    },
    {
      icon: <Target className="h-4 w-4" />,
      title: "Việc làm theo ngành",
      description: "Chọn theo chuyên ngành"
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      title: "Việc làm theo địa điểm",
      description: "Tìm việc theo khu vực"
    },
    {
      icon: <Building className="h-4 w-4" />,
      title: "Top công ty",
      description: "Các công ty hàng đầu"
    }
  ];

  const jobCategoriesItems = [
    { title: "Công nghệ thông tin", icon: <Laptop className="h-3 w-3" /> },
    { title: "Kinh doanh", icon: <TrendingUp className="h-3 w-3" /> },
    { title: "Marketing", icon: <Target className="h-3 w-3" /> },
    { title: "Kế toán", icon: <FileText className="h-3 w-3" /> }
  ];

  const skillMenuItems = [
    {
      icon: <BookOpen className="h-4 w-4" />,
      title: "Phát triển kỹ năng",
      description: "Nâng cao năng lực bản thân"
    },
    {
      icon: <Award className="h-4 w-4" />,
      title: "Đánh giá kỹ năng",
      description: "Kiểm tra trình độ hiện tại"
    },
    {
      icon: <TrendingUp className="h-4 w-4" />,
      title: "Lộ trình học tập",
      description: "Kế hoạch phát triển cá nhân"
    },
    {
      icon: <Users className="h-4 w-4" />,
      title: "Kỹ năng mềm",
      description: "Phát triển soft skills"
    }
  ];

  const skillCategoriesItems = [
    { title: "Lập trình", icon: <Laptop className="h-3 w-3" /> },
    { title: "Quản lý", icon: <Users className="h-3 w-3" /> },
    { title: "Giao tiếp", icon: <Users className="h-3 w-3" /> },
    { title: "Phân tích", icon: <TrendingUp className="h-3 w-3" /> }
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-2">
              <FileText className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold text-gray-900">Job Buddy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Jobs Dropdown */}
            <div className="relative group">
              <Link 
                to="/jobs" 
                className={`text-sm font-medium transition-colors hover:text-blue-600 flex items-center space-x-1 ${
                  isActive('/jobs') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                <span>Việc làm</span>
                <svg className="h-3 w-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Jobs Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-[600px] bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Job Search Column */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
                        <Search className="h-4 w-4 mr-2 text-green-600" />
                        Tìm kiếm việc làm
                      </h3>
                      <div className="space-y-3">
                        {jobMenuItems.map((item, index) => (
                          <Link
                            key={index}
                            to="/jobs"
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item"
                          >
                            <div className="text-gray-400 group-hover/item:text-blue-600">
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900 group-hover/item:text-blue-600">
                                {item.title}
                              </div>
                              <p className="text-xs text-gray-500">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* Job Categories */}
                      <div className="mt-6">
                        <h4 className="text-xs font-semibold text-green-600 mb-3 flex items-center">
                          <Briefcase className="h-3 w-3 mr-1" />
                          Ngành nghề hot →
                        </h4>
                        <div className="space-y-2">
                          {jobCategoriesItems.map((item, index) => (
                            <Link
                              key={index}
                              to="/jobs"
                              className="flex items-center space-x-2 p-1 rounded hover:bg-gray-50 transition-colors"
                            >
                              <div className="text-gray-400">{item.icon}</div>
                              <span className="text-xs text-gray-600 hover:text-blue-600">{item.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Preview Column */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-center">
                        <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                          <div className="w-16 h-20 bg-gradient-to-br from-blue-100 to-green-100 rounded mx-auto mb-2 flex items-center justify-center">
                            <Briefcase className="h-8 w-8 text-blue-600" />
                          </div>
                          <div className="text-xs text-gray-600">Tìm việc mơ ước</div>
                        </div>
                        <div className="text-xs text-gray-500 mb-2">
                          Khám phá hàng nghìn cơ hội việc làm
                        </div>
                        <Link
                          to="/jobs"
                          className="inline-flex items-center text-xs text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Xem tất cả
                          <svg className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CV Dropdown */}
            <div className="relative group">
              <Link 
                to="/cv-builder" 
                className={`text-sm font-medium transition-colors hover:text-blue-600 flex items-center space-x-1 ${
                  isActive('/cv-builder') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                <span>Tạo CV</span>
                <svg className="h-3 w-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* CV Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-[800px] bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-8">
                    {/* CV Templates Column */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
                        <FileText className="h-4 w-4 mr-2 text-green-600" />
                        Mẫu CV theo style
                      </h3>
                      <div className="space-y-3">
                        {cvMenuItems.map((item, index) => (
                          <Link
                            key={index}
                            to="/cv-builder"
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item"
                          >
                            <div className="text-gray-400 group-hover/item:text-blue-600">
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center">
                                <span className="text-sm font-medium text-gray-900 group-hover/item:text-blue-600">
                                  {item.title}
                                </span>
                                {item.arrow && (
                                  <svg className="h-3 w-3 ml-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                  </svg>
                                )}
                              </div>
                              {item.description && (
                                <p className="text-xs text-gray-500">{item.description}</p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* CV by Position */}
                      <div className="mt-6">
                        <h4 className="text-xs font-semibold text-green-600 mb-3 flex items-center">
                          <Briefcase className="h-3 w-3 mr-1" />
                          Mẫu CV theo vị trí ứng tuyển →
                        </h4>
                        <div className="space-y-2">
                          {cvByPositionItems.map((item, index) => (
                            <Link
                              key={index}
                              to="/cv-builder"
                              className="flex items-center space-x-2 p-1 rounded hover:bg-gray-50 transition-colors"
                            >
                              <div className="text-gray-400">{item.icon}</div>
                              <span className="text-xs text-gray-600 hover:text-blue-600">{item.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* CV Tools Column */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4">Công cụ CV</h3>
                      <div className="space-y-3">
                        {cvToolsItems.map((item, index) => (
                          <Link
                            key={index}
                            to="/cv-builder"
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item"
                          >
                            <div className="text-gray-400 group-hover/item:text-blue-600">
                              {item.icon}
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover/item:text-blue-600">
                                {item.title}
                              </div>
                              <p className="text-xs text-gray-500">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* Additional Tools */}
                      <div className="mt-6 space-y-2">
                        <Link
                          to="/cv-builder"
                          className="flex items-center space-x-2 p-1 rounded hover:bg-gray-50 transition-colors"
                        >
                          <User className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-600 hover:text-blue-600">Quản lý Cover Letter</span>
                        </Link>
                        <Link
                          to="/cv-builder"
                          className="flex items-center space-x-2 p-1 rounded hover:bg-gray-50 transition-colors"
                        >
                          <FileText className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-600 hover:text-blue-600">Mẫu Cover Letter</span>
                        </Link>
                        <Link
                          to="/cv-builder"
                          className="flex items-center space-x-2 p-1 rounded hover:bg-gray-50 transition-colors"
                        >
                          <User className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-600 hover:text-blue-600">TopCV Profile</span>
                        </Link>
                      </div>
                    </div>

                    {/* Preview Column */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-center">
                        <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                          <div className="w-16 h-20 bg-gray-200 rounded mx-auto mb-2"></div>
                          <div className="text-xs text-gray-600">CV Preview</div>
                        </div>
                        <div className="text-xs text-gray-500 mb-2">
                          Xem trước CV của bạn trước khi tải xuống
                        </div>
                        <Link
                          to="/cv-builder"
                          className="inline-flex items-center text-xs text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Tạo CV ngay
                          <svg className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Dropdown */}
            <div className="relative group">
              <Link 
                to="/skills" 
                className={`text-sm font-medium transition-colors hover:text-blue-600 flex items-center space-x-1 ${
                  isActive('/skills') ? 'text-blue-600' : 'text-gray-700'
                }`}
              >
                <span>Kỹ năng</span>
                <svg className="h-3 w-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              {/* Skills Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-[600px] bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Skills Development Column */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center">
                        <TrendingUp className="h-4 w-4 mr-2 text-green-600" />
                        Phát triển kỹ năng
                      </h3>
                      <div className="space-y-3">
                        {skillMenuItems.map((item, index) => (
                          <Link
                            key={index}
                            to="/skills"
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group/item"
                          >
                            <div className="text-gray-400 group-hover/item:text-blue-600">
                              {item.icon}
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium text-gray-900 group-hover/item:text-blue-600">
                                {item.title}
                              </div>
                              <p className="text-xs text-gray-500">{item.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* Skill Categories */}
                      <div className="mt-6">
                        <h4 className="text-xs font-semibold text-green-600 mb-3 flex items-center">
                          <Award className="h-3 w-3 mr-1" />
                          Kỹ năng phổ biến →
                        </h4>
                        <div className="space-y-2">
                          {skillCategoriesItems.map((item, index) => (
                            <Link
                              key={index}
                              to="/skills"
                              className="flex items-center space-x-2 p-1 rounded hover:bg-gray-50 transition-colors"
                            >
                              <div className="text-gray-400">{item.icon}</div>
                              <span className="text-xs text-gray-600 hover:text-blue-600">{item.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Preview Column */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-center">
                        <div className="bg-white rounded-lg p-4 shadow-sm mb-3">
                          <div className="w-16 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded mx-auto mb-2 flex items-center justify-center">
                            <TrendingUp className="h-8 w-8 text-purple-600" />
                          </div>
                          <div className="text-xs text-gray-600">Nâng cao kỹ năng</div>
                        </div>
                        <div className="text-xs text-gray-500 mb-2">
                          Phát triển năng lực cạnh tranh
                        </div>
                        <Link
                          to="/skills"
                          className="inline-flex items-center text-xs text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Khám phá ngay
                          <svg className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          {/* Search and Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link 
              to="/auth" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all"
            >
              Đăng nhập
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="space-y-2">
              <Link
                to="/jobs"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Việc làm
              </Link>
              <Link
                to="/cv-builder"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tạo CV
              </Link>
              <Link
                to="/skills"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kỹ năng
              </Link>
              <Link
                to="/auth"
                className="block mx-3 mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Đăng nhập
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
