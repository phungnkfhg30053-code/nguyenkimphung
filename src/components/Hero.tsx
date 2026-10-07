import React from "react";
import { Sparkles, Trophy, ArrowRight, ShieldCheck, Thermometer, Droplets, Globe, Compass, Landmark, Camera } from "lucide-react";
import { SCHOOL_INFO } from "../data/climateData";
import { APP_IMAGES } from "../assets/images";

interface HeroProps {
  onOpenChat: () => void;
  onOpenGame: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat, onOpenGame }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-emerald-900 to-teal-950 text-white pt-12 pb-20 px-4 sm:px-6">
      {/* Background organic blur patterns in Orange & Green */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* School & Project Header Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-emerald-200">
            <Landmark className="w-3.5 h-3.5 text-amber-400" />
            <span>{SCHOOL_INFO.name}</span>
            <span className="text-white/40">•</span>
            <span className="text-amber-300 font-bold">{SCHOOL_INFO.province}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-400/40 text-xs font-semibold text-orange-200">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span>Chủ Đề: Biến Đổi Khí Hậu & Hành Động Địa Phương</span>
          </div>
        </div>

        {/* Main Display Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none">
            <span className="text-white">BIẾN ĐỔI KHÍ HẬU:</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-emerald-300 bg-clip-text text-transparent">
              THÁCH THỨC TOÀN CẦU & HÀNH ĐỘNG HẬU GIANG
            </span>
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 max-w-2xl mx-auto font-normal leading-relaxed pt-2">
            Hệ thống tri thức toàn diện về <strong className="text-white font-semibold">Khái niệm – Biểu hiện – Tác động – Ứng phó</strong>. 
            Cùng khám phá thực trạng hạn mặn, sạt lở tại Hậu Giang, thử tài với <strong className="text-amber-300 font-semibold">Mini Game Triệu Phú</strong> và tương tác cùng <strong className="text-emerald-300 font-semibold">Trợ lý AI Kiến Sáng</strong>!
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href="#khai-niem"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Khám Phá 4 Chuyên Đề</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenGame}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/15 text-amber-200 border border-amber-300/30 backdrop-blur-sm transition-all"
            >
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Chơi "Ai Là Triệu Phú BĐKH"</span>
            </button>

            <button
              onClick={onOpenChat}
              className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-xl font-bold text-sm bg-emerald-600/50 hover:bg-emerald-600/70 text-emerald-100 border border-emerald-400/40 backdrop-blur-sm transition-all shadow-md group"
            >
              <img
                src={APP_IMAGES.mascotKienSang}
                alt="Kiến Sáng"
                className="w-6 h-6 rounded-full object-cover ring-1 ring-amber-300 group-hover:scale-110 transition-transform"
                referrerPolicy="no-referrer"
              />
              <span>Hỏi Trợ Lý "Kiến Sáng"</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            </button>
          </div>
        </div>

        {/* Featured Visual Panorama Banner */}
        <div className="relative mt-12 rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-slate-900/60 max-w-5xl mx-auto">
          <div className="aspect-[16/8] sm:aspect-[21/9] w-full relative">
            <img
              src={APP_IMAGES.heroBanner}
              alt="Biến đổi khí hậu và Thích ứng sinh thái tại Đồng bằng sông Cửu Long & Hậu Giang"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/60 via-transparent to-orange-950/40" />

            {/* In-Image Floating Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/70 backdrop-blur-md border border-white/20 text-xs font-semibold text-emerald-300">
                <Camera className="w-3.5 h-3.5 text-amber-400" />
                <span>Toàn cảnh ĐBSCL: Thách Thức Nắng Hạn & Màu Xanh Nông Nghiệp</span>
              </div>
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/80 backdrop-blur-md text-white text-[11px] font-bold">
                <span>Dự Án Eco-STEM FPT School Hậu Giang</span>
              </div>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div className="max-w-2xl">
                <div className="text-amber-300 text-xs font-extrabold uppercase tracking-wider mb-1">
                  Đồng Bằng Sông Cửu Long & Tỉnh Hậu Giang
                </div>
                <h3 className="text-white text-base sm:text-xl font-bold leading-snug drop-shadow-md">
                  Chủ động thích ứng "Thuận thiên" – Bảo tồn dòng nước ngọt, giữ gìn phù sa sông Hậu
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Quan trắc thời gian thực</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Metric Impact Cards (Cam - Xanh Palette) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-amber-400/40 transition-colors group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">Toàn cầu</span>
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                <Thermometer className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">+1.15°C</div>
            <p className="text-xs text-slate-300 mt-1 leading-snug">
              Nhiệt độ Trái Đất tăng so với thời kỳ tiền công nghiệp, đe dọa các hệ sinh thái.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-emerald-400/40 transition-colors group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">Việt Nam</span>
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <Globe className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">Top 5 Thế Giới</div>
            <p className="text-xs text-slate-300 mt-1 leading-snug">
              Nằm trong 5 quốc gia chịu tổn thương nặng nề nhất bởi thiên tai và nước biển dâng.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-orange-400/40 transition-colors group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-orange-300 uppercase tracking-wider">Tỉnh Hậu Giang</span>
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                <Droplets className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">&gt; 8.0 ‰ Mặn</div>
            <p className="text-xs text-slate-300 mt-1 leading-snug">
              Xâm nhập mặn đỉnh điểm mùa khô qua sông Cái Lớn đe dọa Long Mỹ, Vị Thanh, Vị Thủy.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 hover:border-teal-400/40 transition-colors group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-teal-300 uppercase tracking-wider">Mục tiêu Xanh</span>
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">Net Zero 2050</div>
            <p className="text-xs text-slate-300 mt-1 leading-snug">
              Cam kết quốc gia chuyển đổi năng lượng xanh, bảo vệ sinh thái và giảm phát thải khí nhà kính.
            </p>
          </div>
        </div>

        {/* 4 Jump Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 text-xs">
          <span className="text-emerald-200/70 mr-1 flex items-center gap-1">
            <Compass className="w-3.5 h-3.5" /> 4 Nội dung chính:
          </span>
          <a href="#khai-niem" className="px-3 py-1 rounded-full bg-white/10 hover:bg-orange-500 hover:text-white transition-colors">
            1. Khái Niệm
          </a>
          <a href="#bieu-hien" className="px-3 py-1 rounded-full bg-white/10 hover:bg-orange-500 hover:text-white transition-colors">
            2. Biểu Hiện
          </a>
          <a href="#tac-dong" className="px-3 py-1 rounded-full bg-white/10 hover:bg-orange-500 hover:text-white transition-colors">
            3. Tác Động (VN & Hậu Giang)
          </a>
          <a href="#ung-pho" className="px-3 py-1 rounded-full bg-white/10 hover:bg-orange-500 hover:text-white transition-colors">
            4. Ứng Phó & Giải Pháp
          </a>
        </div>
      </div>
    </section>
  );
};
