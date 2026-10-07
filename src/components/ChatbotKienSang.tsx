import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Sparkles, Bot, User, RotateCcw, ChevronDown, HelpCircle, ExternalLink, Lightbulb } from "lucide-react";
import { ChatMessage } from "../types";
import { SCHOOL_INFO } from "../data/climateData";
import { APP_IMAGES } from "../assets/images";

interface ChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const ChatbotKienSang: React.FC<ChatbotProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: `Xin chào bạn! Mình là Kiến Sáng 🐜 – Trợ lý AI đồng hành tìm hiểu về Biến Đổi Khí Hậu của ${SCHOOL_INFO.name}! Bạn muốn khám phá khái niệm, biểu hiện, tác động hạn mặn tại Hậu Giang hay các giải pháp ứng phó nào hôm nay?`,
      timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const sampleQuestions = [
    "Biến đổi khí hậu là gì và do nguyên nhân nào?",
    "Hậu Giang bị ảnh hưởng hạn mặn ra sao?",
    "Mô hình sinh kế 'Thuận thiên' ở ĐBSCL là gì?",
    "Học sinh FPT School Hậu Giang cần làm gì để bảo vệ môi trường?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputValue.trim();
    if (!text || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      if (!response.ok) {
        throw new Error("Lỗi kết nối máy chủ");
      }

      const data = await response.json();
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: data.reply || "Kiến Sáng xin lỗi, hệ thống chưa kịp phản hồi. Bạn thử lại nhé!",
        timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: "Kiến Sáng đã ghi nhận câu hỏi của bạn. Do đường truyền mạng tạm thời gián đoạn, bạn có thể tham khảo mục Khái niệm, Tác động Hậu Giang hoặc hỏi lại sau giây lát nhé!",
        timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome-reset",
        sender: "bot",
        text: "Kiến Sáng đã sẵn sàng cho cuộc trò chuyện mới! Hãy đặt bất kỳ câu hỏi nào về biến đổi khí hậu hoặc quê hương Hậu Giang nhé!",
        timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  return (
    <>
      {/* Floating launcher trigger button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={onToggle}
            className="group flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 text-white font-extrabold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ring-4 ring-white/60"
            aria-label="Mở Trợ lý Kiến Sáng AI"
          >
            <div className="w-9 h-9 rounded-full bg-white/20 p-0.5 flex items-center justify-center overflow-hidden border border-white/40 shadow-xs">
              <img
                src={APP_IMAGES.mascotKienSang}
                alt="Kiến Sáng AI"
                className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold leading-tight flex items-center gap-1">
                <span>Hỏi Kiến Sáng</span>
                <Sparkles className="w-3 h-3 text-amber-200 animate-spin" />
              </div>
              <div className="text-[10px] text-white/80 font-normal">Trợ lý AI BĐKH</div>
            </div>
          </button>
        )}
      </div>

      {/* Slide-in / Popup Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[95vw] sm:w-[420px] h-[580px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 p-4 text-white flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-xs p-0.5 flex items-center justify-center overflow-hidden shadow-xs border border-white/30">
                <img
                  src={APP_IMAGES.mascotKienSang}
                  alt="Trợ Lý Kiến Sáng"
                  className="w-full h-full object-cover rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-extrabold text-sm flex items-center gap-1.5">
                  <span>Trợ Lý Kiến Sáng</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                </h3>
                <p className="text-[11px] text-emerald-100 font-medium">
                  Chuyên gia AI Biến đổi khí hậu & Hậu Giang
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-lg hover:bg-white/20 text-white transition-colors"
                title="Xoá lịch sử hội thoại"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={onToggle}
                className="p-1.5 rounded-lg hover:bg-white/20 text-white transition-colors"
                aria-label="Đóng chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/70 text-xs sm:text-sm">
            {messages.map((msg) => {
              const isUser = msg.sender === "user";
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold overflow-hidden ${
                      isUser
                        ? "bg-slate-800 text-white"
                        : "bg-amber-100 ring-1 ring-amber-300 shadow-xs"
                    }`}
                  >
                    {isUser ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <img
                        src={APP_IMAGES.mascotKienSang}
                        alt="Kiến Sáng"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>

                  <div
                    className={`max-w-[80%] rounded-2xl p-3.5 leading-relaxed whitespace-pre-wrap ${
                      isUser
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-tr-none shadow-xs font-medium"
                        : "bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-xs"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-center gap-2.5 text-slate-500 text-xs italic">
                <div className="w-7 h-7 rounded-full bg-amber-100 ring-1 ring-amber-300 overflow-hidden shrink-0">
                  <img
                    src={APP_IMAGES.mascotKienSang}
                    alt="Kiến Sáng"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="bg-white p-3 rounded-2xl border border-slate-200 rounded-tl-none shadow-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-bounce delay-100" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce delay-200" />
                  <span className="ml-1 text-[11px] text-slate-400 not-italic">Kiến Sáng đang tra cứu tư liệu...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="text-[10px] text-slate-400 font-bold shrink-0 flex items-center gap-1">
              <Lightbulb className="w-3 h-3 text-amber-500" /> Gợi ý:
            </span>
            {sampleQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(q)}
                disabled={isLoading}
                className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200 border border-slate-200 text-[11px] text-slate-600 whitespace-nowrap transition-all"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input field */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Hỏi Kiến Sáng về BĐKH, hạn mặn Hậu Giang..."
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:bg-white text-slate-800 placeholder:text-slate-400"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isLoading}
              className="p-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity shadow-xs"
              aria-label="Gửi tin nhắn"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
