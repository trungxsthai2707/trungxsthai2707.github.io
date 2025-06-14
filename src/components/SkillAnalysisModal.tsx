
import { useState } from 'react';
import { X, CheckCircle, AlertCircle, BookOpen, ExternalLink } from 'lucide-react';

interface SkillAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  onShowLearningPath: (skill: string) => void;
  onShowTrainingProviders: (skill: string) => void;
}

const SkillAnalysisModal = ({ 
  isOpen, 
  onClose, 
  jobTitle, 
  onShowLearningPath, 
  onShowTrainingProviders 
}: SkillAnalysisModalProps) => {
  const [userSkills, setUserSkills] = useState('');
  const [userExperience, setUserExperience] = useState('');
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    
    // Mô phỏng API call phân tích kỹ năng
    setTimeout(() => {
      const mockResult = {
        matchingSkills: [
          { name: 'HTML/CSS', level: 'Cao', matched: true },
          { name: 'JavaScript', level: 'Trung bình', matched: true },
        ],
        missingSkills: [
          { name: 'React', level: 'Yêu cầu', priority: 'Cao', learningTime: '4-6 tuần' },
          { name: 'TypeScript', level: 'Yêu cầu', priority: 'Trung bình', learningTime: '2-3 tuần' },
          { name: 'Node.js', level: 'Ưu tiên', priority: 'Thấp', learningTime: '6-8 tuần' },
        ],
        overallMatch: 65,
        recommendations: [
          'Tập trung học React vì đây là kỹ năng cốt lõi cho vị trí này',
          'TypeScript sẽ giúp bạn nổi bật hơn so với các ứng viên khác',
          'Node.js là kỹ năng bổ sung tốt cho full-stack development'
        ]
      };
      
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Phân tích kỹ năng cho: {jobTitle}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {!analysisResult ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kinh nghiệm làm việc của bạn
                </label>
                <textarea
                  value={userExperience}
                  onChange={(e) => setUserExperience(e.target.value)}
                  placeholder="Mô tả kinh nghiệm làm việc, dự án đã tham gia..."
                  className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kỹ năng hiện tại
                </label>
                <textarea
                  value={userSkills}
                  onChange={(e) => setUserSkills(e.target.value)}
                  placeholder="Liệt kê các kỹ năng, công nghệ bạn biết và mức độ thành thạo..."
                  className="w-full h-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={handleAnalyze}
                disabled={!userSkills.trim() || !userExperience.trim() || isAnalyzing}
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-gray-300 transition-colors"
              >
                {isAnalyzing ? 'Đang phân tích...' : 'Phân tích kỹ năng với AI'}
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Kết quả tổng quan */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Kết quả phân tích</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Độ phù hợp</span>
                      <span className="text-sm font-medium">{analysisResult.overallMatch}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${analysisResult.overallMatch}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    analysisResult.overallMatch >= 80 ? 'bg-green-100 text-green-800' :
                    analysisResult.overallMatch >= 60 ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {analysisResult.overallMatch >= 80 ? 'Rất phù hợp' :
                     analysisResult.overallMatch >= 60 ? 'Phù hợp' : 'Cần cải thiện'}
                  </div>
                </div>
              </div>

              {/* Kỹ năng phù hợp */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  Kỹ năng đã có ({analysisResult.matchingSkills.length})
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {analysisResult.matchingSkills.map((skill: any, index: number) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-600">({skill.level})</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kỹ năng cần bổ sung */}
              <div>
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <AlertCircle className="h-5 w-5 text-orange-500 mr-2" />
                  Kỹ năng cần bổ sung ({analysisResult.missingSkills.length})
                </h3>
                <div className="space-y-4">
                  {analysisResult.missingSkills.map((skill: any, index: number) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-medium text-gray-900">{skill.name}</h4>
                          <p className="text-sm text-gray-600">
                            Mức độ: {skill.level} • Ưu tiên: {skill.priority} • Thời gian học: {skill.learningTime}
                          </p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          skill.priority === 'Cao' ? 'bg-red-100 text-red-800' :
                          skill.priority === 'Trung bình' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {skill.priority}
                        </span>
                      </div>
                      <div className="flex space-x-3">
                        <button
                          onClick={() => onShowLearningPath(skill.name)}
                          className="flex-1 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          Học với AI (3 ngày miễn phí)
                        </button>
                        <button
                          onClick={() => onShowTrainingProviders(skill.name)}
                          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          Tìm nơi đào tạo
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Khuyến nghị */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Khuyến nghị từ AI</h3>
                <div className="bg-blue-50 rounded-lg p-4">
                  <ul className="space-y-2">
                    {analysisResult.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <BookOpen className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillAnalysisModal;
