import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { SectionConcept } from "./components/SectionConcept";
import { SectionManifestation } from "./components/SectionManifestation";
import { SectionImpacts } from "./components/SectionImpacts";
import { HauGiangMap } from "./components/HauGiangMap";
import { SectionSolutions } from "./components/SectionSolutions";
import { CarbonCalculator } from "./components/CarbonCalculator";
import { VideoSection } from "./components/VideoSection";
import { GameMillionaire } from "./components/GameMillionaire";
import { ChatbotKienSang } from "./components/ChatbotKienSang";
import { Footer } from "./components/Footer";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const scrollToGame = () => {
    const el = document.getElementById("mini-game");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation Bar */}
      <Navbar
        onOpenChat={() => setIsChatOpen(true)}
        onOpenGame={scrollToGame}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenChat={() => setIsChatOpen(true)}
          onOpenGame={scrollToGame}
        />

        {/* 1. Khái Niệm Biến Đổi Khí Hậu */}
        <SectionConcept />

        {/* 2. Biểu Hiện Của Biến Đổi Khí Hậu */}
        <SectionManifestation />

        {/* 3. Tác Động & Hậu Quả (Toàn cầu, Việt Nam & Hậu Giang) */}
        <SectionImpacts />

        {/* Bản Đồ Rủi Ro & Quan Trắc Thủy Văn 8 Huyện/Thị Hậu Giang */}
        <HauGiangMap />

        {/* 4. Ứng Phó, Biện Pháp & Hành Động Học Sinh */}
        <SectionSolutions />

        {/* Công Cụ Đo Lường Dấu Chân Carbon Cá Nhân */}
        <CarbonCalculator />

        {/* Góc Tư Liệu Video & Phóng Sự Thực Địa */}
        <VideoSection />

        {/* Mini Game: Ai Là Triệu Phú & Đúng/Sai */}
        <GameMillionaire />
      </main>

      {/* Footer With School Info & Contact */}
      <Footer />

      {/* Floating AI Chatbot "Kiến Sáng" */}
      <ChatbotKienSang
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
      />
    </div>
  );
}
