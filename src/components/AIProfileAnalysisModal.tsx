
import { useState } from 'react';
import { X, Send, Bot, User, Sparkles } from 'lucide-react';

interface AIProfileAnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIProfileAnalysisModal = ({ isOpen, onClose }: AIProfileAnalysisModalProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Xin chào! Tôi là AI Assistant của Job Buddy. Tôi sẽ giúp bạn phân tích hồ sơ và đưa ra lời khuyên để cải thiện cơ hội việc làm. Hãy bắt đầu bằng cách chia sẻ thông tin về bản thân bạn.',
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const aiResponses = [
    'Cảm ơn bạn đã chia sẻ! Dựa trên thông tin này, tôi thấy bạn có nền tảng tốt. Bạn có thể cho tôi biết thêm về kinh nghiệm làm việc và kỹ năng hiện tại không?',
    'Rất tốt! Tôi nhận thấy bạn cần bổ sung một số kỹ năng để phù hợp hơn với thị trường việc làm hiện tại. Bạn có quan tâm đến việc học thêm kỹ năng nào cụ thể không?',
    'Dựa trên phân tích, tôi khuyên bạn nên tập trung vào việc phát triển kỹ năng công nghệ và ngoại ngữ. Bạn có muốn tôi đề xuất lộ trình học tập cụ thể không?',
    'Để cải thiện hồ sơ, tôi khuyên bạn nên: 1) Hoàn thiện profile LinkedIn, 2) Tham gia các khóa học online, 3) Xây dựng portfolio cá nhân. Bạn cần hỗ trợ gì thêm?',
    'Tôi có thể giúp bạn tìm các khóa học phù hợp và kết nối với nhà tuyển dụng. Bạn có muốn tôi phân tích sâu hơn về một lĩnh vực cụ thể nào không?'
  ];

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full h-[80vh] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">AI Profile Analyzer</h2>
              <p className="text-sm text-gray-600">Phân tích hồ sơ thông minh với AI</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start space-x-2`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user' 
                    ? 'bg-blue-500 ml-2' 
                    : 'bg-gray-200 mr-2'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="h-4 w-4 text-white" />
                  ) : (
                    <Bot className="h-4 w-4 text-gray-600" />
                  )}
                </div>
                <div className={`rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString('vi-VN', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-gray-600" />
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Message Input */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex space-x-3">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Chia sẻ về bản thân, kinh nghiệm, kỹ năng hiện tại..."
              className="flex-1 resize-none border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={2}
            />
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center space-x-1"
            >
              <Send className="h-4 w-4" />
              <span>Gửi</span>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            💡 Mẹo: Hãy chia sẻ chi tiết về kinh nghiệm, kỹ năng và mục tiêu nghề nghiệp để nhận được phân tích chính xác nhất
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIProfileAnalysisModal;
