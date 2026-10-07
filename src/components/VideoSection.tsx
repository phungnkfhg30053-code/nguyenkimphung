import React, { useState } from "react";
import { Play, Video, ExternalLink, Sparkles, BookOpen } from "lucide-react";

export const VideoSection: React.FC = () => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const videos = [
    {
      id: "vid-1",
      title: "Hạn Mặn & Mô Hình Sinh Kế Thích Ứng Biến Đổi Khí Hậu Tại ĐBSCL",
      source: "Truyền hình Hậu Giang (HGTV) & VTV Cần Thơ",
      duration: "Phóng sự chuyên đề",
      embedUrl: "https://www.youtube-nocookie.com/embed/V4X7o9X844s",
      summary: "Tìm hiểu thực tế những thách thức xâm nhập mặn lịch sử và sự kiên cường của người nông dân miền Tây khi chuyển đổi sang mô hình kinh tế 'Thuận thiên'.",
      takeaways: [
        "Vận hành hệ thống cống đập kiểm soát mặn Cái Lớn - Cái Bé bảo vệ Hậu Giang.",
        "Mô hình tôm - lúa và chuyển đổi cây trồng chịu hạn mặn mang lại thu nhập ổn định.",
        "Ý thức chủ động tích trữ nước ngọt dã chiến trong từng hộ gia đình.",
      ],
    },
    {
      id: "vid-2",
      title: "Bảo Tồn Lá Phổi Xanh: Khu Bảo Tồn Thiên Nhiên Lung Ngọc Hoàng",
      source: "VTV Khoa Giáo & Môi Trường Hậu Giang",
      duration: "Tài liệu sinh thái",
      embedUrl: "https://www.youtube-nocookie.com/embed/9G3Xg_h9W40",
      summary: "Khám phá rừng tràm nguyên sinh Lung Ngọc Hoàng (Phụng Hiệp, Hậu Giang) - báu vật thiên nhiên điều hòa nhiệt độ, lọc sạch nguồn nước và lưu giữ bể chứa carbon khổng lồ.",
      takeaways: [
        "Hơn 330 loài thực vật và hàng trăm loài chim cá quý hiếm đang được bảo tồn nghiêm ngặt.",
        "Rừng tràm có khả năng xốp giữ nước lũ vào mùa mưa và bổ sung nước ngọt trong mùa hạn.",
        "Trách nhiệm của học sinh và cộng đồng trong việc phòng chống cháy rừng mùa khô.",
      ],
    },
  ];

  const current = videos[activeVideoIndex];

  return (
    <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Badge Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider border border-orange-200">
          Tư Liệu Đa Phương Tiện
        </span>
        <span className="text-slate-400 text-xs font-medium">• Phóng sự & Phim tài liệu giáo dục</span>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Góc Tư Liệu & Video Thực Địa
        </h2>
        <p className="text-slate-600 mt-2 text-base max-w-3xl leading-relaxed">
          Xem các thước phim tài liệu chân thực về đời sống người dân Hậu Giang trước thách thức hạn mặn và nỗ lực bảo tồn sinh thái.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Video Player Box */}
        <div className="lg:col-span-8 bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800">
          <div className="relative w-full aspect-video bg-black flex items-center justify-center">
            {/* Embedded Iframe */}
            <iframe
              src={current.embedUrl}
              title={current.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>

          <div className="p-6 text-white space-y-3">
            <div className="flex items-center justify-between text-xs text-amber-300 font-semibold">
              <span>{current.source}</span>
              <span>{current.duration}</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
              {current.title}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {current.summary}
            </p>
          </div>
        </div>

        {/* Right: Video Playlist & Key Insights */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Danh sách chuyên đề:
            </span>

            <div className="space-y-2">
              {videos.map((vid, idx) => (
                <button
                  key={vid.id}
                  onClick={() => setActiveVideoIndex(idx)}
                  className={`w-full p-3.5 rounded-xl text-left transition-all border flex items-start gap-3 ${
                    activeVideoIndex === idx
                      ? "bg-orange-50 border-orange-400 text-orange-950 font-bold shadow-xs"
                      : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 text-xs ${
                      activeVideoIndex === idx ? "bg-orange-500 text-white" : "bg-slate-200 text-slate-700"
                    }`}
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <div>
                    <div className="text-xs font-extrabold line-clamp-2">{vid.title}</div>
                    <div className="text-[10px] text-slate-500 font-normal mt-0.5">{vid.source}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <div className="bg-emerald-50 rounded-2xl border border-emerald-200 p-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-emerald-700" />
              Điểm cốt lõi cho học sinh ghi nhớ:
            </h4>
            <div className="space-y-2">
              {current.takeaways.map((point, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <span className="text-emerald-600 font-bold shrink-0 mt-0.5">•</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
