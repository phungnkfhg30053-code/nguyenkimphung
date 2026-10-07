import React, { useState } from "react";
import { Leaf, Flame, Sparkles, Trophy, MapPin, Menu, X, BookOpen, AlertTriangle, ShieldCheck } from "lucide-react";
import { SCHOOL_INFO } from "../data/climateData";
import { APP_IMAGES } from "../assets/images";

interface NavbarProps {
  onOpenChat: () => void;
  onOpenGame: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat, onOpenGame }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Khái niệm", href: "#khai-niem", icon: BookOpen },
    { name: "Biểu hiện", href: "#bieu-hien", icon: Flame },
    { name: "Tác động (VN & HG)", href: "#tac-dong", icon: AlertTriangle },
    { name: "Ứng phó & Giải pháp", href: "#ung-pho", icon: ShieldCheck },
    { name: "Bản đồ Hậu Giang", href: "#ban-do-hau-giang", icon: MapPin },
    { name: "Tính Carbon", href: "#tinh-carbon", icon: Leaf },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      {/* Top Banner for School */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-amber-700 text-white text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2 font-medium">
            <span className="bg-white/20 px-2 py-0.5 rounded text-[11px] font-bold tracking-wide">
              {SCHOOL_INFO.name}
            </span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline text-emerald-100">{SCHOOL_INFO.address}</span>
          </div>
          <div className="flex items-center gap-3 text-emerald-100 text-[11px]">
            <span>Ban Cố Vấn: {SCHOOL_INFO.advisors}</span>
          </div>
        </div>
      </div>

      {/* Main Nav Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-600 to-orange-500 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform duration-200">
            <Leaf className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-lg text-emerald-950 tracking-tight">KHÍ HẬU XANH</span>
              <span className="bg-orange-100 text-orange-700 text-[11px] font-bold px-2 py-0.5 rounded-full border border-orange-200">
                HẬU GIANG
              </span>
            </div>
            <span className="text-xs text-slate-500 font-medium">Cổng Tri Thức & Hành Động Ứng Phó BĐKH</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
              >
                <Icon className="w-4 h-4 text-emerald-600" />
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Game & Chatbot */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenGame}
            id="nav-game-button"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-bold bg-amber-50 text-amber-800 border border-amber-300 hover:bg-amber-100 hover:border-amber-400 transition-all shadow-xs"
          >
            <Trophy className="w-4 h-4 text-orange-600" />
            <span>Mini Game</span>
          </button>

          <button
            onClick={onOpenChat}
            id="nav-chat-button"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-sm font-bold bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 transition-all shadow-md shadow-emerald-700/20 active:scale-95 group"
          >
            <img
              src={APP_IMAGES.mascotKienSang}
              alt="Kiến Sáng AI"
              className="w-5 h-5 rounded-full object-cover ring-1 ring-amber-300 group-hover:scale-110 transition-transform"
              referrerPolicy="no-referrer"
            />
            <span>Hỏi Kiến Sáng AI</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenChat}
            className="p-2 rounded-lg bg-emerald-100 text-emerald-800"
            title="Hỏi Kiến Sáng AI"
          >
            <Sparkles className="w-5 h-5 text-emerald-700" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
              >
                <Icon className="w-4 h-4 text-emerald-600" />
                {item.name}
              </a>
            );
          })}
          <div className="pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGame();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-sm font-bold bg-amber-100 text-amber-900 border border-amber-300"
            >
              <Trophy className="w-4 h-4 text-orange-600" />
              <span>Chơi Mini Game</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-sm font-bold bg-emerald-600 text-white"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Kiến Sáng AI</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
