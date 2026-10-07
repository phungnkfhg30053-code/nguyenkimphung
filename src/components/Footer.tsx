import React from "react";
import { SCHOOL_INFO } from "../data/climateData";
import { School, MapPin, Phone, Mail, Globe, Heart, Leaf, Shield, Award, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: School Identity & Project Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg">
                <School className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-extrabold text-base sm:text-lg text-white leading-tight">
                  {SCHOOL_INFO.name}
                </h3>
                <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider">
                  Tỉnh Hậu Giang • Cổng Thông Tin Môi Trường & BĐKH
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Chuyên trang học tập, nghiên cứu và giáo dục truyền thông về Biến đổi khí hậu toàn cầu, gắn liền với thực tiễn xâm nhập mặn, sạt lở và giải pháp sinh kế thích ứng tại địa phương tỉnh Hậu Giang.
            </p>

            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-200 text-xs flex items-center gap-3">
              <Leaf className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="italic leading-snug">
                "{SCHOOL_INFO.slogan}"
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Nội dung chuyên mục
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <a href="#khai-niem" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  1. Khái Niệm Biến Đổi Khí Hậu
                </a>
              </li>
              <li>
                <a href="#bieu-hien" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  2. Biểu Hiện & Bằng Chứng Toàn Cầu
                </a>
              </li>
              <li>
                <a href="#tac-dong" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  3. Tác Động / Hậu Quả Tại Hậu Giang
                </a>
              </li>
              <li>
                <a href="#ban-do-hau-giang" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Bản Đồ 8 Huyện/Thị & Độ Mặn
                </a>
              </li>
              <li>
                <a href="#ung-pho" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                  4. Ứng Phó & Giải Pháp "Thuận Thiên"
                </a>
              </li>
              <li>
                <a href="#mini-game" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                  Mini Game: Ai Là Triệu Phú BĐKH
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & School Information */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Thông Tin Liên Hệ & Đơn Vị Thực Hiện
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Địa chỉ:</strong> {SCHOOL_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Điện thoại:</strong> {SCHOOL_INFO.phone}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  <strong>Hộp thư điện tử:</strong> {SCHOOL_INFO.email}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-amber-400 shrink-0" />
                <span>
                  <strong>Cổng thông tin:</strong> {SCHOOL_INFO.website}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-slate-200 transition-all border border-white/10"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Về đầu trang</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {SCHOOL_INFO.name}. Đề án Giáo dục Môi trường & Thích ứng Biến đổi Khí hậu Hậu Giang.
          </div>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Chế tác với tình yêu màu xanh quê hương</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline mx-0.5" />
            <span>và trợ lý AI Kiến Sáng</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
