import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Clock, Building2, Filter, Target, Heart, Share2, Bookmark, Eye } from 'lucide-react';
import Header from '@/components/Header';
import SkillAnalysisModal from '@/components/SkillAnalysisModal';
import LearningPathModal from '@/components/LearningPathModal';
import TrainingProviderModal from '@/components/TrainingProviderModal';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Jobs = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [filters, setFilters] = useState({
    field: '',
    location: '',
    jobType: '',
    experience: ''
  });

  const [showFilters, setShowFilters] = useState(false);
  const [showSkillAnalysis, setShowSkillAnalysis] = useState(false);
  const [showLearningPath, setShowLearningPath] = useState(false);
  const [showTrainingProviders, setShowTrainingProviders] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [savedJobs, setSavedJobs] = useState<Set<number>>(new Set());
  const [likedJobs, setLikedJobs] = useState<Set<number>>(new Set());
  
  const jobsPerPage = 12;

  const jobFields = [
    'Công nghệ thông tin',
    'Marketing & Sales',
    'Kế toán & Tài chính',
    'Nhân sự',
    'Thiết kế',
    'Bán hàng',
    'Sản xuất',
    'Giáo dục',
    'Y tế',
    'Khác'
  ];

  const locations = [
    'Hà Nội',
    'TP. Hồ Chí Minh',
    'Đà Nẵng',
    'Hải Phòng',
    'Cần Thơ',
    'Bình Dương',
    'Đồng Nai',
    'Toàn quốc',
    'Remote'
  ];

  const jobTypes = ['Full-time', 'Part-time', 'Thực tập', 'Freelance'];
  
  const experienceLevels = [
    'Sinh viên/Thực tập sinh',
    'Dưới 1 năm',
    '1-3 năm',
    '3-5 năm',
    'Trên 5 năm'
  ];

  const sampleJobs = [
    {
      id: 1,
      title: 'Nhân Viên Kinh Doanh',
      company: 'Công ty TNHH Bất Động Sản ABC',
      location: 'Hà Nội',
      type: 'Full-time',
      salary: '8-15 triệu',
      experience: 'Dưới 1 năm',
      description: 'Tư vấn và bán các sản phẩm bất động sản. Xây dựng mối quan hệ với khách hàng...',
      urgent: true,
      requirements: ['Tốt nghiệp Đại học', 'Kỹ năng giao tiếp tốt', 'Có laptop riêng'],
      benefits: ['Lương cơ bản + hoa hồng', 'Bảo hiểm đầy đủ', 'Đào tạo miễn phí'],
      deadline: '2024-01-15'
    },
    {
      id: 2,
      title: 'Frontend Developer React',
      company: 'TechViet Solutions',
      location: 'Hà Nội',
      type: 'Full-time',
      salary: '15-25 triệu',
      experience: '1-3 năm',
      description: 'Tham gia phát triển các ứng dụng web hiện đại với React, TypeScript, API integration...',
      requirements: ['React, TypeScript', 'Git, REST API', 'Responsive design'],
      benefits: ['Lương 13-16 tháng', 'Flexible working', 'Laptop + màn hình'],
      deadline: '2024-01-20'
    },
    {
      id: 3,
      title: 'Nhân Viên Kế Toán Tổng Hợp',
      company: 'Công ty Cổ phần Đầu tư XYZ',
      location: 'TP. Hồ Chí Minh',
      type: 'Full-time',
      salary: '10-18 triệu',
      experience: '1-3 năm',
      description: 'Thực hiện công việc kế toán tổng hợp, lập báo cáo tài chính, quyết toán thuế...',
      requirements: ['Bằng cử nhân Kế toán', 'Thành thạo Excel, Word', 'Kinh nghiệm 1-3 năm'],
      benefits: ['Thưởng cuối năm', 'Bảo hiểm y tế', 'Du lịch hàng năm'],
      deadline: '2024-01-18'
    },
    {
      id: 4,
      title: 'Digital Marketing Specialist',
      company: 'Creative Agency',
      location: 'TP. Hồ Chí Minh',
      type: 'Full-time',
      salary: '12-18 triệu',
      experience: '1-3 năm',
      description: 'Quản lý campaigns marketing trên Facebook, Google Ads. Phân tích dữ liệu và tối ưu ROI...',
      requirements: ['Facebook Ads, Google Ads', 'Google Analytics', 'Content creation'],
      benefits: ['Môi trường sáng tạo', 'Học hỏi công nghệ mới', 'Team building'],
      deadline: '2024-01-22'
    },
    {
      id: 5,
      title: 'Nhân Viên Nhân Sự',
      company: 'Tập đoàn ABC Group',
      location: 'Hà Nội',
      type: 'Full-time',
      salary: '9-15 triệu',
      experience: 'Dưới 1 năm',
      description: 'Tuyển dụng, đào tạo nhân viên mới. Xây dựng quy trình HR và chính sách nhân sự...',
      requirements: ['Tốt nghiệp ĐH Nhân sự', 'Kỹ năng tuyển dụng', 'MS Office thành thạo'],
      benefits: ['Đào tạo chuyên môn', 'Cơ hội thăng tiến', 'Chế độ phúc lợi tốt'],
      deadline: '2024-01-25'
    },
    {
      id: 6,
      title: 'UI/UX Designer',
      company: 'Design Studio',
      location: 'Remote',
      type: 'Part-time',
      salary: '8-15 triệu',
      experience: 'Dưới 1 năm',
      description: 'Thiết kế giao diện người dùng cho mobile và web apps. Tạo wireframe và prototype...',
      requirements: ['Figma, Sketch', 'User research', 'Prototyping'],
      benefits: ['Làm việc remote', 'Thời gian linh hoạt', 'Dự án đa dạng'],
      deadline: '2024-01-30'
    },
    {
      id: 7,
      title: 'Nhân Viên Telesales',
      company: 'Công ty TNHH Thương mại DEF',
      location: 'Hà Nội',
      type: 'Full-time',
      salary: '6-12 triệu + hoa hồng',
      experience: 'Sinh viên/Thực tập sinh',
      description: 'Tư vấn sản phẩm qua điện thoại, chăm sóc khách hàng, đạt chỉ tiêu bán hàng...',
      urgent: true,
      requirements: ['Giọng nói hay', 'Kỹ năng thuyết phục', 'Không ngại gọi điện'],
      benefits: ['Hoa hồng hấp dẫn', 'Thưởng tháng', 'Đào tạo kỹ năng'],
      deadline: '2024-01-12'
    },
    {
      id: 8,
      title: 'Backend Developer (Java/Spring)',
      company: 'Software Development Co.',
      location: 'Đà Nẵng',
      type: 'Full-time',
      salary: '18-30 triệu',
      experience: '3-5 năm',
      description: 'Phát triển hệ thống backend với Java Spring Boot, thiết kế database, tối ưu performance...',
      requirements: ['Java Spring Boot', 'MySQL/PostgreSQL', 'Docker, AWS'],
      benefits: ['Lương cao', 'Dự án quốc tế', 'Công nghệ hiện đại'],
      deadline: '2024-02-01'
    },
    {
      id: 9,
      title: 'Nhân Viên Hành Chính Nhân Sự',
      company: 'Công ty Sản xuất GHI',
      location: 'Bình Dương',
      type: 'Full-time',
      salary: '8-12 triệu',
      experience: 'Dưới 1 năm',
      description: 'Hỗ trợ công việc hành chính, quản lý hồ sơ nhân viên, xử lý giấy tờ pháp lý...',
      requirements: ['Thành thạo văn phòng', 'Cẩn thận, tỉ mỉ', 'Kỹ năng giao tiếp'],
      benefits: ['Môi trường ổn định', 'Học hỏi nhiều', 'Chế độ tốt'],
      deadline: '2024-01-28'
    },
    {
      id: 10,
      title: 'Content Marketing Executive',
      company: 'Digital Marketing Agency',
      location: 'TP. Hồ Chí Minh',
      type: 'Full-time',
      salary: '10-16 triệu',
      experience: '1-3 năm',
      description: 'Sáng tạo nội dung cho website, social media. Lên kế hoạch content calendar và SEO...',
      requirements: ['Viết content hay', 'SEO, Social media', 'Photoshop cơ bản'],
      benefits: ['Môi trường trẻ', 'Học digital marketing', 'Sáng tạo tự do'],
      deadline: '2024-01-26'
    },
    {
      id: 11,
      title: 'Nhân Viên Kiểm Soát Chất Lượng (QC)',
      company: 'Nhà máy Sản xuất JKL',
      location: 'Đồng Nai',
      type: 'Full-time',
      salary: '9-14 triệu',
      experience: '1-3 năm',
      description: 'Kiểm tra chất lượng sản phẩm, lập báo cáo QC, đảm bảo tiêu chuẩn ISO...',
      requirements: ['Kiến thức QC/QA', 'Đọc hiểu bản vẽ', 'Tỉ mỉ, cẩn thận'],
      benefits: ['Làm việc ổn định', 'Bảo hiểm đầy đủ', 'Cơ hội thăng tiến'],
      deadline: '2024-01-24'
    },
    {
      id: 12,
      title: 'Thực Tập Sinh Marketing',
      company: 'Startup Technology',
      location: 'Hà Nội',
      type: 'Thực tập',
      salary: '3-5 triệu',
      experience: 'Sinh viên/Thực tập sinh',
      description: 'Hỗ trợ team marketing trong việc nghiên cứu thị trường, tạo content, chạy ads...',
      requirements: ['Sinh viên năm 3,4', 'Đam mê marketing', 'Học hỏi tích cực'],
      benefits: ['Cơ hội học hỏi', 'Mentor kinh nghiệm', 'Có thể fulltime'],
      deadline: '2024-02-05'
    },
    {
      id: 13,
      title: 'Mobile Developer Flutter',
      company: 'Mobile Solutions Ltd',
      location: 'Hà Nội',
      type: 'Full-time',
      salary: '18-28 triệu',
      experience: '1-3 năm',
      description: 'Phát triển ứng dụng mobile đa nền tảng với Flutter. Tích hợp API, tối ưu performance...',
      requirements: ['Flutter/Dart', 'Firebase', 'REST API'],
      benefits: ['Bonus theo dự án', 'Macbook Pro', 'Flexible time'],
      deadline: '2024-02-10'
    },
    {
      id: 14,
      title: 'Nhân Viên Chăm Sóc Khách Hàng',
      company: 'E-commerce Platform',
      location: 'TP. Hồ Chí Minh',
      type: 'Full-time',
      salary: '7-12 triệu',
      experience: 'Dưới 1 năm',
      description: 'Hỗ trợ khách hàng qua chat, email, phone. Xử lý khiếu nại và feedback...',
      urgent: true,
      requirements: ['Giao tiếp tốt', 'Kiên nhẫn', 'Làm shift'],
      benefits: ['Thưởng KPI', 'Bảo hiểm', 'Cơm trưa miễn phí'],
      deadline: '2024-02-08'
    },
    {
      id: 15,
      title: 'Data Analyst',
      company: 'Fintech Company',
      location: 'Hà Nội',
      type: 'Full-time',
      salary: '15-22 triệu',
      experience: '1-3 năm',
      description: 'Phân tích dữ liệu kinh doanh, tạo dashboard, báo cáo insights cho leadership...',
      requirements: ['SQL, Python', 'Power BI/Tableau', 'Excel nâng cao'],
      benefits: ['Môi trường Fintech', 'Đào tạo data science', 'Stock options'],
      deadline: '2024-02-15'
    },
    {
      id: 16,
      title: 'Graphic Designer',
      company: 'Creative House',
      location: 'TP. Hồ Chí Minh',
      type: 'Full-time',
      salary: '9-16 triệu',
      experience: 'Dưới 1 năm',
      description: 'Thiết kế poster, banner, brochure cho các chiến dịch marketing. Phát triển brand identity...',
      requirements: ['Photoshop, Illustrator', 'InDesign', 'Ý tưởng sáng tạo'],
      benefits: ['Môi trường sáng tạo', 'Học hỏi từ senior', 'Thiết bị Apple'],
      deadline: '2024-02-12'
    },
    {
      id: 17,
      title: 'DevOps Engineer',
      company: 'Cloud Technology',
      location: 'Remote',
      type: 'Full-time',
      salary: '25-40 triệu',
      experience: '3-5 năm',
      description: 'Quản lý infrastructure, CI/CD pipelines, monitoring systems...',
      requirements: ['AWS/Azure', 'Docker, Kubernetes', 'Jenkins, GitLab CI'],
      benefits: ['Full remote', 'Lương cao', 'Dự án quốc tế'],
      deadline: '2024-02-20'
    },
    {
      id: 18,
      title: 'Nhân Viên Xuất Nhập Khẩu',
      company: 'Import Export Corp',
      location: 'Hải Phòng',
      type: 'Full-time',
      salary: '10-18 triệu',
      experience: '1-3 năm',
      description: 'Xử lý hồ sơ xuất nhập khẩu, liên hệ với đối tác nước ngoài, theo dõi shipment...',
      requirements: ['Tiếng Anh tốt', 'Hiểu biết về logistics', 'Kỹ năng đàm phán'],
      benefits: ['Cơ hội đi công tác', 'Thưởng theo doanh thu', 'Học tiếng Anh miễn phí'],
      deadline: '2024-02-18'
    },
    {
      id: 19,
      title: 'Product Manager',
      company: 'Tech Startup',
      location: 'Hà Nội',
      type: 'Full-time',
      salary: '20-35 triệu',
      experience: '3-5 năm',
      description: 'Quản lý roadmap sản phẩm, làm việc với dev team và stakeholders...',
      requirements: ['Product management exp', 'Agile/Scrum', 'Data-driven mindset'],
      benefits: ['Equity/cổ phần', 'Laptop + monitor', 'Unlimited PTO'],
      deadline: '2024-02-25'
    },
    {
      id: 20,
      title: 'Nhân Viên Bán Hàng Online',
      company: 'Fashion Brand',
      location: 'TP. Hồ Chí Minh',
      type: 'Full-time',
      salary: '8-15 triệu + hoa hồng',
      experience: 'Dưới 1 năm',
      description: 'Bán hàng qua Shopee, Lazada, Tiktok Shop. Tư vấn khách hàng, xử lý đơn hàng...',
      urgent: true,
      requirements: ['Biết sử dụng smartphone', 'Kỹ năng bán hàng', 'Nhiệt tình'],
      benefits: ['Hoa hồng cao', 'Thưởng tháng', 'Sản phẩm miễn phí'],
      deadline: '2024-02-14'
    },
    {
      id: 21,
      title: 'QA Tester',
      company: 'Software Company',
      location: 'Đà Nẵng',
      type: 'Full-time',
      salary: '12-20 triệu',
      experience: '1-3 năm',
      description: 'Test manual và automation cho web/mobile apps. Viết test cases, báo cáo bugs...',
      requirements: ['Testing methodology', 'Selenium/Appium', 'SQL cơ bản'],
      benefits: ['Đào tạo automation', 'Công việc ổn định', 'Cơ hội thăng tiến'],
      deadline: '2024-02-22'
    },
    {
      id: 22,
      title: 'Video Editor',
      company: 'Media Production',
      location: 'Hà Nội',
      type: 'Part-time',
      salary: '6-12 triệu',
      experience: 'Dưới 1 năm',
      description: 'Edit video cho YouTube, TikTok, Facebook. Làm motion graphics, color grading...',
      requirements: ['Premiere Pro', 'After Effects', 'Sáng tạo, tỉ mỉ'],
      benefits: ['Thời gian linh hoạt', 'Học hỏi từ các pro', 'Dự án đa dạng'],
      deadline: '2024-02-28'
    },
    {
      id: 23,
      title: 'Nhân Viên Tài Chính',
      company: 'Investment Fund',
      location: 'TP. Hồ Chí Minh',
      type: 'Full-time',
      salary: '12-20 triệu',
      experience: '1-3 năm',
      description: 'Phân tích tài chính, lập báo cáo đầu tư, theo dõi portfolio performance...',
      requirements: ['CFA/FRM preferred', 'Excel/Bloomberg', 'Tư duy phân tích'],
      benefits: ['Lương 14 tháng', 'Bonus performance', 'Đào tạo chuyên sâu'],
      deadline: '2024-03-01'
    },
    {
      id: 24,
      title: 'Social Media Manager',
      company: 'Influencer Agency',
      location: 'TP. Hồ Chí Minh',
      type: 'Full-time',
      salary: '10-18 triệu',
      experience: '1-3 năm',
      description: 'Quản lý fanpage, lên content plan, chạy ads Facebook/Instagram...',
      requirements: ['Facebook Ads', 'Content creation', 'Trend analysis'],
      benefits: ['Môi trường trẻ', 'Học digital trends', 'Event/workshop'],
      deadline: '2024-02-26'
    },
    {
      id: 25,
      title: 'Full Stack Developer',
      company: 'Tech Solutions',
      location: 'Hà Nội',
      type: 'Full-time',
      salary: '20-35 triệu',
      experience: '3-5 năm',
      description: 'Phát triển end-to-end web applications với React/Node.js. Thiết kế database và API...',
      requirements: ['React, Node.js', 'MongoDB/MySQL', 'AWS/Docker'],
      benefits: ['Tech stack hiện đại', 'Flexible working', 'Stock options'],
      deadline: '2024-03-05'
    },
    {
      id: 26,
      title: 'Nhân Viên Pháp Chế',
      company: 'Law Firm',
      location: 'Hà Nội',
      type: 'Full-time',
      salary: '15-25 triệu',
      experience: '1-3 năm',
      description: 'Tư vấn pháp lý, soạn thảo hợp đồng, xử lý các vấn đề pháp lý cho công ty...',
      requirements: ['Bằng cử nhân Luật', 'Kinh nghiệm doanh nghiệp', 'Tư duy logic'],
      benefits: ['Môi trường chuyên nghiệp', 'Học hỏi từ luật sư senior', 'Cơ hội thăng tiến'],
      deadline: '2024-03-08'
    },
    {
      id: 27,
      title: 'Business Analyst',
      company: 'Consulting Firm',
      location: 'TP. Hồ Chí Minh',
      type: 'Full-time',
      salary: '18-28 triệu',
      experience: '1-3 năm',
      description: 'Phân tích quy trình kinh doanh, đưa ra giải pháp tối ưu, làm việc với stakeholders...',
      requirements: ['Business analysis', 'Process mapping', 'Stakeholder management'],
      benefits: ['Dự án đa dạng', 'Đào tạo methodology', 'Travel opportunities'],
      deadline: '2024-03-10'
    },
    {
      id: 28,
      title: 'Nhân Viên IT Support',
      company: 'Manufacturing Co.',
      location: 'Bình Dương',
      type: 'Full-time',
      salary: '8-15 triệu',
      experience: 'Dưới 1 năm',
      description: 'Hỗ trợ kỹ thuật IT, bảo trì hệ thống, cài đặt phần mềm cho nhân viên...',
      urgent: true,
      requirements: ['Kiến thức IT cơ bản', 'Windows/Office', 'Network troubleshooting'],
      benefits: ['Ổn định lâu dài', 'Học hỏi nhiều', 'Overtime pay'],
      deadline: '2024-03-03'
    },
    {
      id: 29,
      title: 'E-commerce Manager',
      company: 'Retail Brand',
      location: 'TP. Hồ Chí Minh',
      type: 'Full-time',
      salary: '15-25 triệu',
      experience: '3-5 năm',
      description: 'Quản lý các kênh bán hàng online, phát triển chiến lược e-commerce...',
      requirements: ['E-commerce experience', 'Shopee/Lazada/Tiki', 'Digital marketing'],
      benefits: ['Bonus theo doanh số', 'Team dynamic', 'Growth opportunities'],
      deadline: '2024-03-12'
    },
    {
      id: 30,
      title: 'Copywriter',
      company: 'Ad Agency',
      location: 'Hà Nội',
      type: 'Full-time',
      salary: '9-16 triệu',
      experience: 'Dưới 1 năm',
      description: 'Viết content cho các campaign quảng cáo, website, social media...',
      requirements: ['Khả năng viết hay', 'Tư duy sáng tạo', 'Hiểu consumer insight'],
      benefits: ['Môi trường sáng tạo', 'Làm việc với brands lớn', 'Creative freedom'],
      deadline: '2024-03-15'
    },
    {
      id: 31,
      title: 'System Administrator',
      company: 'IT Services',
      location: 'Đà Nẵng',
      type: 'Full-time',
      salary: '12-22 triệu',
      experience: '1-3 năm',
      description: 'Quản lý server, network infrastructure, backup systems...',
      requirements: ['Linux/Windows Server', 'Network administration', 'Security protocols'],
      benefits: ['Công việc kỹ thuật cao', 'Đào tạo certificates', 'Stable environment'],
      deadline: '2024-03-18'
    },
    {
      id: 32,
      title: 'Nhân Viên Logistics',
      company: 'Logistics Company',
      location: 'Hải Phòng',
      type: 'Full-time',
      salary: '9-16 triệu',
      experience: 'Dưới 1 năm',
      description: 'Điều phối vận chuyển, theo dõi hàng hóa, liên hệ với đối tác logistics...',
      requirements: ['Tỉ mỉ, cẩn thận', 'Kỹ năng giao tiếp', 'Biết tiếng Anh cơ bản'],
      benefits: ['Ngành logistics phát triển', 'Cơ hội thăng tiến', 'Allowances'],
      deadline: '2024-03-20'
    },
    {
      id: 33,
      title: 'Machine Learning Engineer',
      company: 'AI Startup',
      location: 'Hà Nội',
      type: 'Full-time',
      salary: '25-45 triệu',
      experience: '3-5 năm',
      description: 'Phát triển ML models, deploy AI solutions, research new algorithms...',
      requirements: ['Python, TensorFlow', 'ML/DL algorithms', 'MLOps experience'],
      benefits: ['Cutting-edge tech', 'Research budget', 'Conference attendance'],
      deadline: '2024-03-22'
    },
    {
      id: 34,
      title: 'Event Coordinator',
      company: 'Event Management',
      location: 'TP. Hồ Chí Minh',
      type: 'Full-time',
      salary: '8-14 triệu',
      experience: 'Dưới 1 năm',
      description: 'Tổ chức sự kiện, phối hợp với vendors, quản lý timeline và budget...',
      requirements: ['Kỹ năng tổ chức', 'Giao tiếp tốt', 'Làm việc áp lực cao'],
      benefits: ['Môi trường dynamic', 'Networking opportunities', 'Creative work'],
      deadline: '2024-03-25'
    },
    {
      id: 35,
      title: 'Security Engineer',
      company: 'Cybersecurity Firm',
      location: 'Hà Nội',
      type: 'Full-time',
      salary: '20-35 triệu',
      experience: '3-5 năm',
      description: 'Đánh giá bảo mật hệ thống, incident response, security monitoring...',
      requirements: ['Security certifications', 'Penetration testing', 'SIEM tools'],
      benefits: ['High demand field', 'Continuous learning', 'Premium salary'],
      deadline: '2024-03-28'
    },
    {
      id: 36,
      title: 'Nhân Viên Thiết Kế Nội Thất',
      company: 'Interior Design Studio',
      location: 'TP. Hồ Chí Minh',
      type: 'Full-time',
      salary: '10-18 triệu',
      experience: '1-3 năm',
      description: 'Thiết kế nội thất residential và commercial, tư vấn khách hàng, làm bản vẽ 3D...',
      requirements: ['AutoCAD, 3DS Max', 'SketchUp, Photoshop', 'Thẩm mỹ tốt'],
      benefits: ['Dự án cao cấp', 'Creative environment', 'Commission bonus'],
      deadline: '2024-03-30'
    }
  ];

  const handleSearch = () => {
    console.log('Searching with filters:', filters);
    toast({
      title: "Đang tìm kiếm...",
      description: `Tìm kiếm việc làm với ${Object.values(filters).filter(v => v).length} bộ lọc`,
    });
  };

  const handleSaveJob = (jobId: number, jobTitle: string) => {
    const newSavedJobs = new Set(savedJobs);
    if (savedJobs.has(jobId)) {
      newSavedJobs.delete(jobId);
      toast({
        title: "Đã bỏ lưu",
        description: `Đã bỏ lưu công việc "${jobTitle}"`,
      });
    } else {
      newSavedJobs.add(jobId);
      toast({
        title: "Đã lưu công việc",
        description: `Đã lưu công việc "${jobTitle}" vào danh sách yêu thích`,
      });
    }
    setSavedJobs(newSavedJobs);
  };

  const handleLikeJob = (jobId: number, jobTitle: string) => {
    const newLikedJobs = new Set(likedJobs);
    if (likedJobs.has(jobId)) {
      newLikedJobs.delete(jobId);
      toast({
        title: "Đã bỏ thích",
        description: `Đã bỏ thích công việc "${jobTitle}"`,
      });
    } else {
      newLikedJobs.add(jobId);
      toast({
        title: "Đã thích công việc",
        description: `Đã thích công việc "${jobTitle}"`,
      });
    }
    setLikedJobs(newLikedJobs);
  };

  const handleShareJob = (jobTitle: string, company: string) => {
    if (navigator.share) {
      navigator.share({
        title: jobTitle,
        text: `Xem công việc ${jobTitle} tại ${company}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Đã sao chép link",
        description: "Link công việc đã được sao chép vào clipboard",
      });
    }
  };

  const handleViewJob = (jobId: number, jobTitle: string) => {
    toast({
      title: "Xem chi tiết",
      description: `Đang mở chi tiết công việc "${jobTitle}"`,
    });
    // Navigate to job detail page (would be implemented)
    console.log(`Viewing job ${jobId}: ${jobTitle}`);
  };

  const handleSkillAnalysis = (jobTitle: string) => {
    setSelectedJobTitle(jobTitle);
    setShowSkillAnalysis(true);
  };

  const handleShowLearningPath = (skill: string) => {
    setSelectedSkill(skill);
    setShowSkillAnalysis(false);
    setShowLearningPath(true);
  };

  const handleShowTrainingProviders = (skill: string) => {
    setSelectedSkill(skill);
    setShowSkillAnalysis(false);
    setShowTrainingProviders(true);
  };

  const handleApplyJob = (jobTitle: string) => {
    navigate('/auth?mode=signup');
    toast({
      title: "Chuyển hướng đăng ký",
      description: `Để ứng tuyển "${jobTitle}", vui lòng đăng ký tài khoản`,
    });
  };

  const handleQuickApply = (jobTitle: string, company: string) => {
    toast({
      title: "Ứng tuyển nhanh",
      description: `Đang ứng tuyển nhanh vào vị trí "${jobTitle}" tại ${company}`,
    });
    // Quick apply logic would be implemented here
  };

  const handleContactEmployer = (company: string) => {
    toast({
      title: "Liên hệ nhà tuyển dụng",
      description: `Đang mở chat với ${company}`,
    });
    // Contact employer logic would be implemented here
  };

  const filteredJobs = sampleJobs.filter(job => {
    if (filters.location && job.location !== filters.location) return false;
    if (filters.jobType && job.type !== filters.jobType) return false;
    if (filters.experience && job.experience !== filters.experience) return false;
    return true;
  });

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Tìm công việc phù hợp</h1>
          
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Nhập vị trí công việc, công ty..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <Button
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="lg:hidden"
            >
              <Filter className="h-5 w-5 mr-2" />
              Bộ lọc
            </Button>
            
            <Button onClick={handleSearch} className="px-8">
              Tìm kiếm
            </Button>
          </div>
        </div>

        {/* AI Skills Analysis CTA */}
        <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg p-6 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">🚀 Phân tích kỹ năng với AI</h2>
              <p className="text-lg mb-4">
                AI sẽ so sánh kỹ năng của bạn với yêu cầu công việc và đề xuất lộ trình học tập phù hợp
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Target className="h-4 w-4" />
                  <span>Phân tích chính xác</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Target className="h-4 w-4" />
                  <span>Lộ trình cá nhân hóa</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Target className="h-4 w-4" />
                  <span>Dùng thử 3 ngày miễn phí</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters || window.innerWidth >= 1024 ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Bộ lọc tìm kiếm</h2>
              
              <div className="space-y-6">
                {/* Lĩnh vực */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Lĩnh vực</label>
                  <select
                    value={filters.field}
                    onChange={(e) => setFilters({...filters, field: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Tất cả lĩnh vực</option>
                    {jobFields.map(field => (
                      <option key={field} value={field}>{field}</option>
                    ))}
                  </select>
                </div>

                {/* Địa điểm */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Địa điểm</label>
                  <select
                    value={filters.location}
                    onChange={(e) => setFilters({...filters, location: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Tất cả địa điểm</option>
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>

                {/* Loại hình */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Loại hình công việc</label>
                  <select
                    value={filters.jobType}
                    onChange={(e) => setFilters({...filters, jobType: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Tất cả loại hình</option>
                    {jobTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Kinh nghiệm */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Kinh nghiệm</label>
                  <select
                    value={filters.experience}
                    onChange={(e) => setFilters({...filters, experience: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Tất cả mức độ</option>
                    {experienceLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Job Results */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">
                Tìm thấy <span className="font-semibold">{filteredJobs.length}</span> công việc phù hợp
                {filteredJobs.length > jobsPerPage && (
                  <span className="ml-2">
                    (Trang {currentPage}/{totalPages})
                  </span>
                )}
              </p>
            </div>

            <div className="space-y-6">
              {currentJobs.map(job => (
                <div key={job.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border-l-4 border-l-transparent hover:border-l-blue-500">
                  {job.urgent && (
                    <div className="mb-3">
                      <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                        TUYỂN GẤP
                      </span>
                    </div>
                  )}
                  
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <h3 
                            className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer transition-colors"
                            onClick={() => handleViewJob(job.id, job.title)}
                          >
                            {job.title}
                          </h3>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-96 p-0" side="right">
                          <Card>
                            <CardContent className="p-4">
                              <div className="space-y-3">
                                <div>
                                  <h4 className="font-semibold text-lg text-blue-600">{job.title}</h4>
                                  <p className="text-sm text-gray-600">{job.company}</p>
                                </div>
                                
                                <div className="flex flex-wrap gap-2">
                                  <Badge variant="outline">{job.location}</Badge>
                                  <Badge variant="outline">{job.type}</Badge>
                                  <Badge variant="outline">{job.experience}</Badge>
                                </div>

                                <div>
                                  <p className="font-medium text-green-600 text-lg">💰 {job.salary}</p>
                                </div>

                                {job.requirements && (
                                  <div>
                                    <h5 className="font-medium text-sm text-gray-700 mb-1">Yêu cầu:</h5>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                      {job.requirements.slice(0, 3).map((req, index) => (
                                        <li key={index} className="flex items-center space-x-1">
                                          <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                          <span>{req}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {job.benefits && (
                                  <div>
                                    <h5 className="font-medium text-sm text-gray-700 mb-1">Quyền lợi:</h5>
                                    <ul className="text-sm text-gray-600 space-y-1">
                                      {job.benefits.slice(0, 3).map((benefit, index) => (
                                        <li key={index} className="flex items-center space-x-1">
                                          <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                                          <span>{benefit}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}

                                {job.deadline && (
                                  <div className="pt-2 border-t">
                                    <p className="text-sm text-gray-500">
                                      <Clock className="inline h-3 w-3 mr-1" />
                                      Hạn nộp: {job.deadline}
                                    </p>
                                  </div>
                                )}
                              </div>
                            </CardContent>
                          </Card>
                        </HoverCardContent>
                      </HoverCard>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <Building2 className="h-4 w-4" />
                          <span className="font-medium">{job.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          💰 {job.salary}
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                          📅 {job.experience}
                        </span>
                      </div>

                      {/* Job Action Buttons */}
                      <div className="flex items-center space-x-2 mb-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleLikeJob(job.id, job.title)}
                          className={likedJobs.has(job.id) ? 'text-red-600 border-red-300' : ''}
                        >
                          <Heart className={`h-4 w-4 mr-1 ${likedJobs.has(job.id) ? 'fill-current' : ''}`} />
                          {likedJobs.has(job.id) ? 'Đã thích' : 'Thích'}
                        </Button>
                        
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleSaveJob(job.id, job.title)}
                          className={savedJobs.has(job.id) ? 'text-blue-600 border-blue-300' : ''}
                        >
                          <Bookmark className={`h-4 w-4 mr-1 ${savedJobs.has(job.id) ? 'fill-current' : ''}`} />
                          {savedJobs.has(job.id) ? 'Đã lưu' : 'Lưu'}
                        </Button>
                        
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleShareJob(job.title, job.company)}
                        >
                          <Share2 className="h-4 w-4 mr-1" />
                          Chia sẻ
                        </Button>

                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleViewJob(job.id, job.title)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          Xem chi tiết
                        </Button>
                      </div>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:ml-6 space-y-2">
                      <Button 
                        onClick={() => handleApplyJob(job.title)}
                        className="w-full lg:w-auto"
                      >
                        Ứng tuyển ngay
                      </Button>
                      
                      <Button
                        variant="outline"
                        onClick={() => handleQuickApply(job.title, job.company)}
                        className="w-full lg:w-auto"
                      >
                        Ứng tuyển nhanh
                      </Button>
                      
                      <Button
                        variant="outline"
                        onClick={() => handleSkillAnalysis(job.title)}
                        className="w-full lg:w-auto text-teal-600 border-teal-300 hover:bg-teal-50"
                      >
                        <Target className="h-4 w-4 mr-1" />
                        Phân tích kỹ năng
                      </Button>

                      <Button
                        variant="ghost"
                        onClick={() => handleContactEmployer(job.company)}
                        className="w-full lg:w-auto text-gray-600"
                        size="sm"
                      >
                        Liên hệ NTD
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) handlePageChange(currentPage - 1);
                        }}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>
                    
                    {[...Array(totalPages)].map((_, index) => (
                      <PaginationItem key={index + 1}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(index + 1);
                          }}
                          isActive={currentPage === index + 1}
                        >
                          {index + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    <PaginationItem>
                      <PaginationNext 
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) handlePageChange(currentPage + 1);
                        }}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      <SkillAnalysisModal
        isOpen={showSkillAnalysis}
        onClose={() => setShowSkillAnalysis(false)}
        jobTitle={selectedJobTitle}
        onShowLearningPath={handleShowLearningPath}
        onShowTrainingProviders={handleShowTrainingProviders}
      />

      <LearningPathModal
        isOpen={showLearningPath}
        onClose={() => setShowLearningPath(false)}
        skillName={selectedSkill}
      />

      <TrainingProviderModal
        isOpen={showTrainingProviders}
        onClose={() => setShowTrainingProviders(false)}
        skillName={selectedSkill}
      />
    </div>
  );
};

export default Jobs;
