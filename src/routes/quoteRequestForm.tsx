import React, { useState, useEffect, useRef } from 'react'
import { User, FileText, DollarSign, CheckSquare, Check, X, MessageCircle, Settings, Send, Smile, Paperclip, Bot, Upload } from 'lucide-react'
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
    },
    files: []
  });

  const [showModal, setShowModal] = useState(false);
  const [dragActive, setDragActive] = useState(false); // Add this missing state

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
      },
      files: []
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

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = [...e.dataTransfer.files];
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...files]
    }));
  };

  const handleFileInput = (e) => {
    const files = [...e.target.files];
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...files]
    }));
  };

  const removeFile = (index) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <div className="max-w-4xl mx-auto py-16 px-4">
          {/* Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Project Quote
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tell us about your project and we'll get back to you within 24-48 hours
            </p>
          </header>

          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 space-y-8">

              {/* User Information Section */}
              <div className='bg-gray-50 p-6 rounded-2xl border border-gray-200'>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-blue-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">User Information</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Your full name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name <span className="text-gray-400">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
              </div>

              {/* Project/Service Details Section */}
              <div className='bg-gray-50 p-6 rounded-2xl border border-gray-200'>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <FileText className="w-4 h-4 text-green-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Project / Service Details</h2>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Service <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white appearance-none cursor-pointer"
                        required
                      >
                        <option value="">Choose a service</option>
                        <option value="web-development">Web Development</option>
                        <option value="mobile-app">Mobile App Development</option>
                        <option value="ui-ux-design">UI/UX Design</option>
                        <option value="branding">Branding & Logo Design</option>
                        <option value="consultation">Technical Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Project Title
                      </label>
                      <input
                        type="text"
                        name="projectTitle"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                        placeholder="Brief project title"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500 resize-vertical"
                      placeholder="Describe your project requirements, goals, and any specific features you need..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Drag / Drop <span className="text-gray-400">(Optional)</span>
                    </label>
                    <div
                      className={`relative border-2 border-dashed rounded-lg p-8 transition-all duration-200 ${dragActive
                          ? 'border-blue-400 bg-blue-50'
                          : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                        }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        multiple
                        onChange={handleFileInput}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="text-center">
                        <Upload className="mx-auto h-8 w-8 text-gray-400 mb-3" />
                        <p className="text-sm text-gray-600 mb-1">
                          <span className="font-medium text-blue-600">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB each</p>
                      </div>
                    </div>

                    {formData.files.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {formData.files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-green-50 p-3 rounded-lg border border-green-200">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <Check className="w-4 h-4 text-green-600" />
                              </div>
                              <span className="text-sm text-gray-700 truncate">{file.name}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(index)}
                              className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Budget/Timeline Section */}
            <div className='bg-gray-50 p-6 rounded-2xl border border-gray-200'>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <DollarSign className="w-4 h-4 text-purple-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900">Budget / Timeline</h2>
                </div>

                {/* Budget Range */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-700 mb-4">Budget Range</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: 'under-10k', label: '$5k - $10k' },
                      { value: '10k-20k', label: '$10k - $20k' },
                      { value: '20k-50k', label: '$20k - $50k' },
                      { value: '50k-plus', label: '$50k+' }
                    ].map((range) => (
                      <label key={range.value} className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 transition-all duration-200 group bg-white">
                        <input
                          type="radio"
                          name="budgetRange"
                          value={range.value}
                          checked={formData.budgetRange === range.value}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500 focus:ring-2"
                        />
                        <span className={`ml-3 text-sm font-medium ${formData.budgetRange === range.value ? 'text-blue-700' : 'text-gray-700'
                          }`}>
                          {range.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <div className="relative">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 pr-12 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white appearance-none cursor-pointer"
                      required
                    >
                      <option value="">📅 Preferred Timeline</option>
                      <option value="asap">ASAP (Rush Job)</option>
                      <option value="1-month">Within 1 Month</option>
                      <option value="2-3-months">2-3 Months</option>
                      <option value="3-6-months">3-6 Months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={uiuxWorkflowBannerImg}
                  alt="Professional workspace with multiple monitors showing design work"
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={!isFormValid()}
                  className={`px-12 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform ${isFormValid()
                      ? 'bg-lime-500 hover:bg-lime-600 text-white hover:scale-105 shadow-lg hover:shadow-xl'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                >
                  Get My Quote
                </button>
                <p className="text-sm text-gray-500 mt-3">
                  We'll respond within 24-48 hours
                </p>
              </div>
            </div>
          </form>
        </div>

        {/* Floating Chat Button */}
        <button
          onClick={handleChatClick}
          className="fixed bottom-96 right-6 text-white rounded-full shadow-lg  transition-all duration-300 hover:scale-110 z-40 group"
          aria-label="Open Chat"
        >
          {/* Swan Logo Icon */}
          <div className="w-16 h-16 bg-white  flex items-center  justify-center">
            <img 
              src="/msgIcon.png" 
              alt="Swan Logo" 
              className='rounded-full'
            />
          </div>
          <div className="absolute right-full mr-3 bottom-1/2 transform translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Need help? Chat with us!
          </div>
        </button>

        {/* Chatbot Modal - Bottom Right Corner */}
        {showChatbot && (
          <div className="fixed inset-0 z-50 pointer-events-none">
            <div className="absolute bottom-3 right-6 pointer-events-auto">
              <div className="bg-white rounded-2xl shadow-2xl w-96 h-[800px] flex flex-col overflow-hidden border border-gray-200">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg p-1">
                      {/* Swan Logo in Header */}
                      <img 
                        src="/msgIcon.png" 
                        alt="Swan Logo" 
                        className="w-4 h-4"
                      />
                    </div>
                    <div>
                      <h1 className="text-sm font-semibold text-gray-900">TechGenie</h1>
                      <p className="text-xs text-gray-500">AI by SwanLogic</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
                      <Settings className="w-4 h-4 text-gray-600" />
                    </button>
                    <button
                      onClick={handleCloseChatbot}
                      className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {/* Time stamp */}
                  <div className="text-center">
                    <span className="text-xs text-gray-500 bg-white px-2 py-1 rounded-full">
                      Sun 16, 10:24 AM
                    </span>
                  </div>

                  {/* Bot Welcome Message */}
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 p-1">
                      {/* Swan Logo in Messages */}
                      <img 
                        src="/msgIcon.png" 
                        alt="Swan Logo" 
                        className="w-4 h-4"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm border">
                        <p className="text-sm text-gray-800">
                          Great news! Which service are you looking for?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Service Cards Grid - 3x2 layout matching the image */}
                  <div className="grid grid-cols-3 gap-3 px-2">
                    {[
                      { 
                        title: 'UI/UX Design', 
                        displayTitle: 'UI/UX',
                        bg: 'bg-gradient-to-br from-purple-500 to-pink-500',
                        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=100&h=100&fit=crop&crop=center'
                      },
                      { 
                        title: 'Branding', 
                        displayTitle: 'Branding',
                        bg: 'bg-gradient-to-br from-red-500 to-pink-500',
                        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center'
                      },
                      { 
                        title: 'Marketing', 
                        displayTitle: 'Marketing',
                        bg: 'bg-gradient-to-br from-blue-500 to-purple-600',
                        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&h=100&fit=crop&crop=center'
                      },
                      { 
                        title: 'Web Development', 
                        displayTitle: 'Web Dev',
                        bg: 'bg-gradient-to-br from-blue-600 to-indigo-600',
                        image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=100&h=100&fit=crop&crop=center'
                      },
                      { 
                        title: 'Mobile App', 
                        displayTitle: 'Mobile',
                        bg: 'bg-gradient-to-br from-green-500 to-blue-500',
                        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=100&h=100&fit=crop&crop=center'
                      },
                      { 
                        title: 'Consulting', 
                        displayTitle: 'Consult',
                        bg: 'bg-gradient-to-br from-indigo-500 to-purple-600',
                        image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=100&h=100&fit=crop&crop=center'
                      }
                    ].map((service, index) => (
                      <div
                        key={index}
                        className="cursor-pointer hover:scale-105 transition-transform"
                        onClick={() => setInputValue(`I'm interested in ${service.title}`)}
                      >
                        <div className={`${service.bg} rounded-xl p-0 aspect-square flex items-center justify-center mb-2 overflow-hidden relative`}>
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover opacity-80"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                            <span className="text-white text-xs font-bold text-center leading-tight">
                              {service.displayTitle}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 text-center font-medium">
                          {service.title}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Sample conversation messages */}
                  <div className="flex gap-3">
                    <div className="w-7 h-7 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 p-1">
                      <img 
                        src="/msgIcon.png" 
                        alt="Swan Logo" 
                        className="w-4 h-4"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm border">
                        <p className="text-sm text-gray-800">
                          Excellent choice! This approach will work well for your project. Let me explain how to implement it.
                        </p>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">09:10 PM</p>
                    </div>
                  </div>

                  {/* User message example */}
                  <div className="flex gap-3 flex-row-reverse">
                    <div className="w-7 h-7 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">H</span>
                    </div>
                    <div className="flex-1 max-w-[240px]">
                      <div className="bg-blue-600 text-white rounded-2xl rounded-tr-md p-3 shadow-sm">
                        <p className="text-sm leading-relaxed">hi</p>
                      </div>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <p className="text-xs text-gray-400">09:10 PM</p>
                        <div className="w-4 h-4 rounded-full bg-orange-400 flex items-center justify-center">
                          <span className="text-white text-xs">👤</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Other dynamic messages */}
                  {messages.slice(1).map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}
                    >
                      <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center">
                        {message.isBot ? (
                          <div className="w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center p-1">
                            <img 
                              src="/msgIcon.png" 
                              alt="Swan Logo" 
                              className="w-4 h-4"
                            />
                          </div>
                        ) : (
                          <div className="w-full h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">H</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 max-w-[240px]">
                        <div
                          className={`rounded-2xl p-3 shadow-sm ${
                            message.isBot
                              ? 'bg-white text-gray-800 rounded-tl-md border'
                              : 'bg-blue-600 text-white rounded-tr-md'
                          }`}
                        >
                          <p className="text-sm leading-relaxed">{message.text}</p>
                        </div>
                        <div className={`flex items-center gap-1 mt-1 ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                          <p className="text-xs text-gray-400">
                            {message.time}
                          </p>
                          {!message.isBot && (
                            <div className="w-4 h-4 rounded-full bg-orange-400 flex items-center justify-center">
                              <span className="text-white text-xs">👤</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex gap-3">
                      <div className="w-7 h-7 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 p-1">
                        <img 
                          src="/msgIcon.png" 
                          alt="Swan Logo" 
                          className="w-4 h-4"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="bg-white rounded-2xl rounded-tl-md p-3 shadow-sm border">
                          <div className="flex items-center space-x-1">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Message Input */}
                <div className="border-t border-gray-200 bg-white p-4">
                  <div className="flex items-center gap-2">
                    
                    <div className="flex-1 relative">
                      <input
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Hola!"
                        className="w-full px-4 py-2 bg-gray-100 rounded-full text-sm outline-none focus:bg-gray-200 transition-colors"
                        disabled={isTyping}
                      />
                    </div>
                    <button
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500"
                    >
                      <Smile className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isTyping}
                      className={`p-2 rounded-lg transition-colors ${
                        inputValue.trim() && !isTyping
                          ? 'text-blue-600 hover:bg-blue-50'
                          : 'text-gray-300 cursor-not-allowed'
                      }`}
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Emoji Picker */}
                {showEmojiPicker && (
                  <div className="absolute bottom-16 left-0 right-0 bg-white border border-gray-200 rounded-t-2xl shadow-lg max-h-40 overflow-hidden">
                    <div className="flex border-b border-gray-100 px-2">
                      {emojiCategories.map((category, index) => (
                        <button
                          key={category.name}
                          onClick={() => setActiveEmojiCategory(index)}
                          className={`px-3 py-2 text-sm hover:bg-gray-50 transition-colors ${
                            activeEmojiCategory === index ? 'border-b-2 border-blue-500' : ''
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                    <div className="p-3 h-32 overflow-y-auto">
                      <div className="grid grid-cols-8 gap-1">
                        {emojiCategories[activeEmojiCategory].emojis.slice(0, 32).map((emoji, index) => (
                          <button
                            key={index}
                            onClick={() => handleEmojiClick(emoji)}
                            className="text-lg p-1 hover:bg-gray-100 rounded transition-colors"
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
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