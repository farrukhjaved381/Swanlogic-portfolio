import React, { useState, useEffect, useRef } from 'react';
import { Settings, Send, Smile, X, Paperclip, Bot } from 'lucide-react';

const TechGenieChat = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [activeEmojiCategory, setActiveEmojiCategory] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm TechGenie, your AI assistant. I can help you with web development, programming questions, project guidance, and technical solutions. How can I assist you today?",
      isBot: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto scroll to bottom when new message is added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const projects = [
    { id: 1, title: 'E-commerce Platform', tech: 'React, Node.js' },
    { id: 2, title: 'Social Media App', tech: 'Next.js, MongoDB' },
    { id: 3, title: 'Task Manager', tech: 'Vue.js, Firebase' },
    { id: 4, title: 'Weather Dashboard', tech: 'React, API' },
    { id: 5, title: 'Blog Platform', tech: 'Gatsby, CMS' },
    { id: 6, title: 'Portfolio Site', tech: 'React, Tailwind' },
  ];

  const emojiCategories = [
    { name: '😊', emojis: ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇', '🙂', '🙃', '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛', '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🥸', '🤩', '🥳'] },
    { name: '👍', emojis: ['👍', '👎', '👏', '🙌', '👐', '🤲', '🤝', '🙏', '✍️', '💅', '🤳', '💪', '🦾', '🦿', '🦵', '🦶', '👂', '🦻', '👃', '🧠', '🫀', '🫁', '🦷', '🦴', '👀', '👁️', '👅', '👄', '💋', '🩸'] },
    { name: '💻', emojis: ['📱', '💻', '⌨️', '🖥️', '🖨️', '🖱️', '🖲️', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽️', '🎞️', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙️', '🎚️', '🎛️', '🧭', '⏱️', '⏲️'] },
    { name: '❤️', emojis: ['❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥️', '💯', '💢', '💥', '💫', '💦', '💨', '🕳️', '💬', '👁️‍🗨️', '🗯️'] }
  ];

  const botResponses = [
    "I'd be happy to help you with that! Let me provide you with a comprehensive solution.",
    "That's a great question! Here's what I recommend based on best practices.",
    "Absolutely! I can guide you through this step by step.",
    "Excellent choice! This approach will work well for your project. Let me explain how to implement it.",
    "I understand what you're looking for. Here's a modern solution that should meet your needs.",
    "Perfect! I have experience with this type of implementation. Here's how you can approach it.",
    "That's definitely possible! I'll show you the most efficient way to accomplish this.",
    "Great project idea! Here are some suggestions to get you started on the right track."
  ];

  const handleEmojiClick = (emoji) => {
    setInputValue(prev => prev + emoji);
    inputRef.current?.focus();
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: Date.now(),
        text: inputValue.trim(),
        isBot: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, newMessage]);
      setInputValue('');
      setShowEmojiPicker(false);
      setIsTyping(true);

      // Simulate bot typing and response
      setTimeout(() => {
        setIsTyping(false);
        const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
        const botResponse = {
          id: Date.now() + 1,
          text: randomResponse,
          isBot: true,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 2000 + Math.random() * 1000); // Random delay between 2-3 seconds
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleProjectClick = (project) => {
    setInputValue(`Tell me about the ${project.title} built with ${project.tech}`);
    inputRef.current?.focus();
  };

  const handleCloseModal = () => {
    // Add your close modal logic here
    console.log('Close modal');
  };

  // Auto-resize textarea
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-gray-900">TechGenie AI</h1>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-sm text-gray-500">
                  {isTyping ? 'Typing...' : 'AI Assistant'}
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-white/50 rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={handleCloseModal}
              className="p-2 hover:bg-white/50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Featured Projects - Horizontal Scroll */}
        <div className="border-b border-gray-200 p-4 bg-gray-50">
          <h2 className="text-sm font-medium text-gray-700 mb-3">Featured Projects</h2>
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 bg-white rounded-xl p-3 hover:shadow-md transition-all cursor-pointer group min-w-[160px]"
                onClick={() => handleProjectClick(project)}
              >
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{project.id}</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs font-medium text-gray-700 truncate mb-1">{project.title}</p>
                <p className="text-xs text-gray-500 truncate">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className="w-8 h-8 rounded-full flex-shrink-0 shadow-sm">
                {message.isBot ? (
                  <div className="w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">U</span>
                  </div>
                )}
              </div>
              <div className="max-w-sm md:max-w-md lg:max-w-lg">
                <div
                  className={`rounded-2xl p-4 shadow-sm ${
                    message.isBot
                      ? 'bg-white text-gray-800 rounded-bl-sm border border-gray-100'
                      : 'bg-blue-600 text-white rounded-br-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                </div>
                <p className={`text-xs text-gray-400 mt-1 ${message.isBot ? 'text-left' : 'text-right'}`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full flex-shrink-0 shadow-sm">
                <div className="w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="max-w-sm">
                <div className="bg-white text-gray-800 rounded-2xl rounded-bl-sm border border-gray-100 p-4 shadow-sm">
                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-gray-500 ml-2">TechGenie is typing...</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Emoji Picker */}
        {showEmojiPicker && (
          <div className="border-t border-gray-200 bg-white">
            <div className="flex border-b border-gray-100 px-2">
              {emojiCategories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => setActiveEmojiCategory(index)}
                  className={`px-4 py-3 text-lg hover:bg-gray-50 transition-colors ${
                    activeEmojiCategory === index ? 'border-b-2 border-blue-500' : ''
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="p-3 h-48 overflow-y-auto">
              <div className="grid grid-cols-8 gap-1">
                {emojiCategories[activeEmojiCategory].emojis.map((emoji, index) => (
                  <button
                    key={index}
                    onClick={() => handleEmojiClick(emoji)}
                    className="text-2xl p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Message Input */}
        <div className="border-t border-gray-200 bg-white p-4">
          <div className="flex items-end gap-3">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about web development, programming, or your projects..."
                className="w-full px-4 py-3 pr-20 rounded-2xl border text-gray-700 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm resize-none min-h-[44px] max-h-32"
                rows={1}
                disabled={isTyping}
              />
              <div className="absolute right-2 bottom-2 flex items-center gap-1">
                <button
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                  className={`p-1.5 rounded-lg transition-colors ${
                    showEmojiPicker 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Smile className="w-4 h-4" />
                </button>
                <button 
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className={`p-1.5 rounded-lg transition-colors ${
                    inputValue.trim() && !isTyping
                      ? 'text-blue-600 hover:bg-blue-50'
                      : 'text-gray-300 cursor-not-allowed'
                  }`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-2 px-1">
            <p className="text-xs text-gray-400">
              {isTyping ? 'TechGenie is responding...' : 'Powered by TechGenie AI • Press Enter to send'}
            </p>
            <p className="text-xs text-gray-400">{inputValue.length}/1000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechGenieChat;