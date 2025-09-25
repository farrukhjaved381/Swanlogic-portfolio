import React, { useState, useEffect, useRef } from 'react'
import { User, FileText, DollarSign, CheckSquare, Check, X, MessageCircle, Settings, Send, Smile, Paperclip, Bot } from 'lucide-react'
import { Navbar } from '../components/layout/Navbar';
import { Footer as FooterSimple } from '../components/layout/footer';
import uiuxWorkflowBannerImg from '../images/quotationPage.png';

export default function QuoteRequestForm() {
  // Quote form states
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    serviceType: '',
    projectType: '',
    description: '',
    budgetRange: '',
    timeline: '',
    preferredTimeline: '',
    additionalPreferences: {
      nda: false,
      scheduleCall: false,
      ongoingSupport: false
    }
  });

  const [showModal, setShowModal] = useState(false);

  // Chatbot states
  const [showChatbot, setShowChatbot] = useState(false);
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

  // Chatbot data
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

  // Auto scroll to bottom when new message is added
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (showChatbot) {
      scrollToBottom();
    }
  }, [messages, isTyping, showChatbot]);

  // Quote form functions
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.startsWith('additionalPreferences.')) {
      const key = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        additionalPreferences: {
          ...prev.additionalPreferences,
          [key]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const isFormValid = () => {
    const requiredFields = [
      'name',
      'email', 
      'phone',
      'serviceType',
      'projectType',
      'description',
      'budgetRange',
      'timeline'
    ];
    
    return requiredFields.every(field => formData[field].trim() !== '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isFormValid()) {
      alert('Please fill in all required fields.');
      return;
    }
    
    console.log('Form submitted:', formData);
    
    // Show success modal
    setShowModal(true);
    
    // Reset form
    setFormData({
      name: '',
      companyName: '',
      email: '',
      phone: '',
      serviceType: '',
      projectType: '',
      description: '',
      budgetRange: '',
      timeline: '',
      preferredTimeline: '',
      additionalPreferences: {
        nda: false,
        scheduleCall: false,
        ongoingSupport: false
      }
    });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmitAnother = () => {
    setShowModal(false);
  };

  // Chatbot functions
  const handleChatClick = () => {
    setShowChatbot(true);
  };

  const handleCloseChatbot = () => {
    setShowChatbot(false);
    setShowEmojiPicker(false);
  };

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
      }, 2000 + Math.random() * 1000);
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

  const handleChatInputChange = (e) => {
    setInputValue(e.target.value);
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
  };

  return (
   <div className="min-h-screen bg-white">
         <Navbar />
         <main>
      <div className="max-w-7xl mx-auto py-20 px-4">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Request A Quote
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            Ready to start your project? Fill out this form and we'll get back to you within 24 hours.
          </p>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            {/* User Information Section */}
            <section className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                User Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-700"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-700"
                    placeholder="Enter company name (optional)"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-700"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-700"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>
              </div>
            </section>

            {/* Project/Service Details Section */}
            <section className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Project / Service Details
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Type *
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-700"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="branding">Branding & Logo Design</option>
                      <option value="consultation">Technical Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-700"
                      required
                    >
                      <option value="">Select project type</option>
                      <option value="new-project">New Project</option>
                      <option value="redesign">Redesign/Update</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="consulting">Consulting Only</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-700 resize-none"
                    placeholder="Please describe your project requirements..."
                    required
                  />
                </div>
              </div>
            </section>

            {/* Budget/Timeline Section */}
            <section className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-blue-600" />
                Budget / Timeline
              </h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range *
                    </label>
                    <select
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-700"
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="over-50k">Over $50,000</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Timeline *
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-700"
                      required
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Rush Job)</option>
                      <option value="1-month">Within 1 Month</option>
                      <option value="2-3-months">2-3 Months</option>
                      <option value="3-6-months">3-6 Months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Start Date
                  </label>
                  <input
                    type="date"
                    name="preferredTimeline"
                    value={formData.preferredTimeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent text-gray-700"
                  />
                </div>
              </div>
            </section>

            {/* Additional Preferences Section */}
            <section className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <CheckSquare className="w-5 h-5 text-blue-600" />
                Additional Preferences
              </h2>
              
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="additionalPreferences.nda"
                    checked={formData.additionalPreferences.nda}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-lime-600 bg-gray-100 border-gray-300 rounded focus:ring-lime-500 focus:ring-2"
                  />
                  <span className="text-gray-700">Require NDA (Non-Disclosure Agreement)</span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="additionalPreferences.scheduleCall"
                    checked={formData.additionalPreferences.scheduleCall}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-lime-600 bg-gray-100 border-gray-300 rounded focus:ring-lime-500 focus:ring-2"
                  />
                  <span className="text-gray-700">Schedule a consultation call</span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="additionalPreferences.ongoingSupport"
                    checked={formData.additionalPreferences.ongoingSupport}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-lime-600 bg-gray-100 border-gray-300 rounded focus:ring-lime-500 focus:ring-2"
                  />
                  <span className="text-gray-700">Interested in ongoing support/maintenance</span>
                </label>
              </div>
            </section>

            {/* Hero Image */}
            <div className="rounded-2xl overflow-hidden relative">
              <img
                src={uiuxWorkflowBannerImg}
                alt="UI/UX Designer working at desk with multiple monitors"
                className="w-full h-full object-fit transform transition-transform duration-[2000ms] ease-in-out hover:scale-110"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center text-gray-600 space-y-2">
              <button
                type="submit"
                disabled={!isFormValid()}
                className={`w-72 font-semibold py-4 px-8 rounded-2xl shadow-lg transition-all duration-200 ${
                  isFormValid()
                    ? 'bg-lime-500 hover:bg-lime-600 text-white transform hover:scale-105 cursor-pointer'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
               Get My Quote
              </button>
              <p>
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </form>
      </div>

      {/* Floating Chat Button */}
      <button
        onClick={handleChatClick}
        className="fixed bottom-6 right-6 bg-lime-500 hover:bg-lime-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40 group"
        aria-label="Open Chat"
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute right-full mr-3 bottom-1/2 transform translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Need help? Chat with us!
        </div>
      </button>

      {/* Chatbot Modal - Bottom Right Corner */}
      {showChatbot && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="absolute bottom-0 right-1 pointer-events-auto">
            <div className="bg-white rounded-2xl shadow-2xl h-[89vh] flex flex-col overflow-hidden border border-gray-200">
              {/* Modal Header */}
              <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-gradient-to-r from-purple-50 to-blue-50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h1 className="text-sm font-semibold text-gray-900">TechGenie AI</h1>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <p className="text-xs text-gray-500">
                        {isTyping ? 'Typing...' : 'Online'}
                      </p>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={handleCloseChatbot}
                  className="p-1 hover:bg-white/50 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              {/* Featured Projects - Compact */}
              <div className="border-b border-gray-200 p-3 bg-gray-50">
                <h2 className="text-xs font-medium text-gray-700 mb-2">Quick Projects</h2>
                <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                  {projects.slice(0, 4).map((project) => (
                    <div
                      key={project.id}
                      className="flex-shrink-0 bg-white rounded-lg p-2 hover:shadow-md transition-all cursor-pointer group min-w-[100px]"
                      onClick={() => handleProjectClick(project)}
                    >
                      <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-md mb-1 relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{project.id}</span>
                        </div>
                      </div>
                      <p className="text-xs font-medium text-gray-700 truncate">{project.title}</p>
                      <p className="text-xs text-gray-500 truncate text-[10px]">{project.tech}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className="w-6 h-6 rounded-full flex-shrink-0 shadow-sm">
                      {message.isBot ? (
                        <div className="w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                          <Bot className="w-3 h-3 text-white" />
                        </div>
                      ) : (
                        <div className="w-full h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">U</span>
                        </div>
                      )}
                    </div>
                    <div className="max-w-[200px]">
                      <div
                        className={`rounded-xl p-3 shadow-sm ${
                          message.isBot
                            ? 'bg-white text-gray-800 rounded-bl-sm border border-gray-100'
                            : 'bg-blue-600 text-white rounded-br-sm'
                        }`}
                      >
                        <p className="text-xs leading-relaxed">{message.text}</p>
                      </div>
                      <p className={`text-xs text-gray-400 mt-1 ${message.isBot ? 'text-left' : 'text-right'}`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
                
                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full flex-shrink-0 shadow-sm">
                      <div className="w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                        <Bot className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <div className="max-w-[200px]">
                      <div className="bg-white text-gray-800 rounded-xl rounded-bl-sm border border-gray-100 p-3 shadow-sm">
                        <div className="flex items-center space-x-1">
                          <div className="flex space-x-1">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          </div>
                          <span className="text-xs text-gray-500 ml-1">Typing...</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Emoji Picker - Compact */}
              {showEmojiPicker && (
                <div className="border-t border-gray-200 bg-white max-h-32">
                  <div className="flex border-b border-gray-100 px-1">
                    {emojiCategories.map((category, index) => (
                      <button
                        key={category.name}
                        onClick={() => setActiveEmojiCategory(index)}
                        className={`px-2 py-2 text-sm hover:bg-gray-50 transition-colors ${
                          activeEmojiCategory === index ? 'border-b-2 border-blue-500' : ''
                        }`}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                  <div className="p-2 h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300">
                    <div className="grid grid-cols-6 gap-1">
                      {emojiCategories[activeEmojiCategory].emojis.slice(0, 12).map((emoji, index) => (
                        <button
                          key={index}
                          onClick={() => handleEmojiClick(emoji)}
                          className="text-sm p-1 hover:bg-gray-100 rounded transition-colors"
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Message Input - Compact */}
              <div className="border-t border-gray-200 bg-white p-3">
                <div className="flex items-end gap-2">
                  <div className="flex-1 relative">
                    <textarea
                      ref={inputRef}
                      value={inputValue}
                      onChange={handleChatInputChange}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me anything..."
                      className="w-full px-3 py-2 pr-16 rounded-xl border text-gray-700 border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all text-xs resize-none min-h-[32px] max-h-20"
                      rows={1}
                      disabled={isTyping}
                    />
                    <div className="absolute right-1 bottom-1 flex items-center gap-1">
                      <button
                        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        className={`p-1 rounded-md transition-colors ${
                          showEmojiPicker 
                            ? 'text-blue-600 bg-blue-50' 
                            : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <Smile className="w-3 h-3" />
                      </button>
                      <button 
                        onClick={handleSendMessage}
                        disabled={!inputValue.trim() || isTyping}
                        className={`p-1 rounded-md transition-colors ${
                          inputValue.trim() && !isTyping
                            ? 'text-blue-600 hover:bg-blue-50'
                            : 'text-gray-300 cursor-not-allowed'
                        }`}
                      >
                        <Send className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-1 text-center">
                  {isTyping ? 'AI is responding...' : 'Press Enter to send'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-12 h-12 border-2 border-purple-400 rounded-full flex items-center justify-center relative">
                  <Check className="w-6 h-6 text-purple-500" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Thank You!
              </h2>
              
              <p className="text-gray-600">
                Our team will review your request and send you a quotation shortly.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={closeModal}
                className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                Get My Quote
              </button>
              
              <button
                onClick={handleSubmitAnother}
                className="w-full border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-medium py-3 px-6 rounded-xl transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      )}

       </main>
            <FooterSimple />
          </div>
  );
}