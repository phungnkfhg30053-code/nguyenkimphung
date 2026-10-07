import React, { useState } from "react";
import { ShieldCheck, Zap, Trees, RefreshCw, CheckCircle2, HeartHandshake, Leaf, GraduationCap, Sparkles, Building2, Camera } from "lucide-react";
import { SCHOOL_INFO } from "../data/climateData";
import { APP_IMAGES } from "../assets/images";

export const SectionSolutions: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"mitigation" | "adaptation" | "student">("mitigation");

  const mitigationPillars = [
    {
      title: "Chuyển dịch Năng lượng Tái tạo",
      icon: Zap,
      color: "from-amber-500 to-orange-500",
      description: "Thay thế dần các nhà máy nhiệt điện than bằng điện mặt trời mái nhà, năng lượng gió và điện sinh khối từ phụ phẩm nông nghiệp.",
      points: [
        "Lắp đặt hệ thống điện mặt trời trên mái trường học và cơ quan công sở tại Hậu Giang.",
        "Tận dụng trấu, rơm rạ sau thu hoạch lúa để sản xuất viên nén sinh học thay vì đốt đồng gây ô nhiễm và khói bụi.",
      ],
    },
    {
      title: "Bảo Tồn Rừng & Hấp Thụ Carbon",
      icon: Trees,
      color: "from-emerald-600 to-teal-700",
      description: "Bảo tồn nghiêm ngặt rừng tràm và đất ngập nước tự nhiên, phát triển bể hấp thụ carbon sinh học quý giá.",
      points: [
        "Bảo tồn nguyên vẹn hệ sinh thái Khu bảo tồn thiên nhiên Lung Ngọc Hoàng (Phụng Hiệp) - lá phổi xanh của tỉnh.",
        "Trồng cây phân tán, phủ xanh bờ kênh, đê bao để chống sạt lở và cải tạo vi khí hậu mát mẻ.",
      ],
    },
    {
      title: "Kinh Tế Tuần Hoàn & Net Zero 2050",
      icon: RefreshCw,
      color: "from-cyan-600 to-blue-600",
      description: "Tái chế tối đa tài nguyên, biến rác thải nông nghiệp thành nguồn dinh dưỡng hữu cơ và năng lượng xanh.",
      points: [
        "Mô hình ủ phân hữu cơ vi sinh từ vỏ khóm Cầu Đúc, bã mía và phụ phẩm cây ăn trái.",
        "Thực hiện cam kết lịch sử của Việt Nam đạt mức phát thải ròng bằng '0' vào năm 2050.",
      ],
    },
  ];

  const adaptationPillars = [
    {
      title: "Công trình Thủy lợi Kiểm soát Mặn - Ngọt",
      icon: Building2,
      color: "from-blue-600 to-cyan-600",
      description: "Vận hành linh hoạt hệ thống cống đập, âu thuyền và nạo vét kênh rạch điều tiết nguồn nước.",
      points: [
        "Hệ thống thủy lợi Cái Lớn - Cái Bé điều tiết mặn ngọt bảo vệ vùng ven biển Tây và đất nông nghiệp Hậu Giang.",
        "Xây dựng cống hở Ba Voi, cống Kênh Cùng, đắp đập thời vụ ngăn mặn giữ ngọt tại các huyện Long Mỹ, Vị Thủy.",
        "Đào hồ chứa nước ngọt dã chiến và lắp đặt túi chứa nước sinh hoạt cho các hộ dân vùng trũng thấp.",
      ],
    },
    {
      title: "Mô hình Nông nghiệp 'Thuận Thiên'",
      icon: Leaf,
      color: "from-emerald-600 to-green-600",
      description: "Tôn trọng quy luật tự nhiên theo Nghị quyết 120/NQ-CP, biến thách thức mặn lợ thành lợi thế kinh tế sinh thái.",
      points: [
        "Mô hình lúa - tôm tại vùng giáp ranh: Mùa mưa trồng lúa đặc sản, mùa khô đưa nước lợ vào nuôi tôm càng xanh chất lượng cao.",
        "Chuyển đổi đất lúa kém hiệu quả sang trồng Khóm Cầu Đúc (Vị Thanh), mãng cầu xiêm ghép bình bát, chanh không hạt.",
        "Ứng dụng quy trình tưới tiêu ngập - khô xen kẽ (AWD) trong canh tác lúa giúp tiết kiệm nước và giảm phát thải khí methane.",
      ],
    },
    {
      title: "Kè Sinh Thái Chống Sạt Lở Bờ Sông",
      icon: ShieldCheck,
      color: "from-orange-500 to-amber-600",
      description: "Kết hợp giải pháp công trình cứng với kè mềm sinh học bản địa để bảo vệ các tuyến bờ sông kênh rạch.",
      points: [
        "Trồng cây bần, dừa nước và cỏ Vetiver rễ sâu để giữ đất, chống xói mòn dọc theo sông Ngã Bảy và sông Mái Dầm.",
        "Lắp đặt hệ thống cọc tre, phên tre giữ bùn tạo bãi bồi tự nhiên tại các khúc sông dòng chảy xiết.",
      ],
    },
  ];

  return (
    <section id="ung-pho" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Badge Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
          Nội Dung 04
        </span>
        <span className="text-slate-400 text-xs font-medium">• Chiến lược & Hành động thực tế</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ứng Phó, Biện Pháp & Hành Động Cụ Thể
          </h2>
          <p className="text-slate-600 mt-2 text-base max-w-3xl leading-relaxed">
            Chiến lược hai gọng kìm: <strong className="text-orange-600 font-bold">Giảm nhẹ</strong> nguồn phát thải và <strong className="text-emerald-700 font-bold">Thích ứng</strong> chủ động với điều kiện biến đổi khí hậu tại Hậu Giang.
          </p>
        </div>

        {/* Tab switch */}
        <div className="flex items-center bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("mitigation")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "mitigation"
                ? "bg-orange-500 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            1. Giảm Nhẹ (Mitigation)
          </button>
          <button
            onClick={() => setActiveTab("adaptation")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "adaptation"
                ? "bg-emerald-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            2. Thích Ứng (Adaptation)
          </button>
          <button
            onClick={() => setActiveTab("student")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "student"
                ? "bg-amber-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            3. Hành Động Học Sinh
          </button>
        </div>
      </div>

      {/* Tab 1: Mitigation */}
      {activeTab === "mitigation" && (
        <div className="space-y-6">
          <div className="bg-orange-50/70 border border-orange-200 rounded-2xl p-5 text-xs sm:text-sm text-orange-950 flex items-start gap-3">
            <Zap className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Mục tiêu giảm nhẹ:</strong> Tấn công trực tiếp vào nguyên nhân gốc rễ gây biến đổi khí hậu bằng cách cắt giảm lượng khí nhà kính phát thải vào bầu khí quyển và tăng cường khả năng hấp thụ carbon của các thảm thực vật tự nhiên.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mitigationPillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-4 shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">{item.description}</p>
                    
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {item.points.map((p, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="text-orange-500 font-bold shrink-0 mt-0.5">•</span>
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Adaptation */}
      {activeTab === "adaptation" && (
        <div className="space-y-6">
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-2xl p-5 text-xs sm:text-sm text-emerald-950 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold">Mục tiêu thích ứng:</strong> Chủ động nâng cao khả năng chống chịu, giảm thiểu tổn thương do thiên tai và biến đổi khí hậu gây ra; biến nguy cơ thành cơ hội phát triển sinh kế xanh bền vững cho người dân Hậu Giang.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adaptationPillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-4 shadow-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-base mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">{item.description}</p>
                    
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      {item.points.map((p, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 3: Student Actions */}
      {activeTab === "student" && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" />
                Dành riêng cho đoàn viên & học sinh
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Góc Hành Động Xanh: Học Sinh {SCHOOL_INFO.name}
              </h3>
            </div>
            <div className="bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-900">
              Quy tắc 5R & Lối sống xanh
            </div>
          </div>

          {/* FPT School Students Eco Action Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-gradient-to-r from-orange-50 via-amber-50 to-emerald-50 rounded-2xl p-6 border border-orange-200/80 items-center">
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[16/11] border border-orange-200 shadow-md group">
              <img
                src={APP_IMAGES.fptStudentsGreen}
                alt="Học sinh trường FPT Hậu Giang trong hoạt động Eco-STEM và trồng cây xanh bảo vệ môi trường"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs text-white">
                <span className="inline-flex items-center gap-1 font-bold text-[11px] text-amber-300">
                  <Camera className="w-3 h-3" />
                  Học sinh FPT Hậu Giang • Dự án Eco-STEM Xanh
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold border border-orange-200">
                <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                <span>Trường Học Xanh - Tương Lai Xanh</span>
              </div>
              <h4 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Lan Tỏa Tinh Thần Trách Nhiệm Môi Trường Từ Giảng Đường FPT Hậu Giang
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Tại khuôn viên trường ở <strong>Quốc lộ 61C, Xã Vị Tân, TP. Vị Thanh</strong>, các bạn học sinh không chỉ học tập kiến thức khoa học công nghệ mà còn tích cực thực hành các dự án Eco-STEM: tự tay ươm mầm cây xanh, tái chế rác thải nhựa thành thiết bị học tập và phát triển giải pháp IoT quan trắc môi trường địa phương.
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 font-semibold text-slate-700 shadow-2xs">
                  🌱 100% Phân loại rác tại nguồn
                </span>
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 font-semibold text-slate-700 shadow-2xs">
                  🚲 Khuyến khích di chuyển xanh
                </span>
                <span className="px-3 py-1 rounded-lg bg-white border border-slate-200 font-semibold text-slate-700 shadow-2xs">
                  💧 Tiết kiệm nước mùa hạn mặn
                </span>
              </div>
            </div>
          </div>

          {/* 5R Grid */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-800">
              Thực hành chuẩn quy tắc 5R trong trường học:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 space-y-1">
                <span className="text-xs font-extrabold text-orange-600">1. REFUSE</span>
                <h5 className="font-bold text-slate-900 text-sm">Từ Chối</h5>
                <p className="text-xs text-slate-600">Từ chối túi nilon, ống hút nhựa và ly nhựa dùng một lần khi mua đồ ăn vặt.</p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-1">
                <span className="text-xs font-extrabold text-amber-600">2. REDUCE</span>
                <h5 className="font-bold text-slate-900 text-sm">Giảm Thiểu</h5>
                <p className="text-xs text-slate-600">Tắt đèn, quạt khi rời khỏi lớp học; hạn chế in giấy một mặt không cần thiết.</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 space-y-1">
                <span className="text-xs font-extrabold text-emerald-600">3. REUSE</span>
                <h5 className="font-bold text-slate-900 text-sm">Tái Sử Dụng</h5>
                <p className="text-xs text-slate-600">Mang bình nước cá nhân, dùng hộp cơm thủy tinh/inox khi đi học.</p>
              </div>

              <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 space-y-1">
                <span className="text-xs font-extrabold text-teal-600">4. REPURPOSE</span>
                <h5 className="font-bold text-slate-900 text-sm">Tái Định Hướng</h5>
                <p className="text-xs text-slate-600">Biến chai nhựa, hộp sữa cũ thành chậu trồng cây xanh trang trí góc lớp.</p>
              </div>

              <div className="p-4 rounded-xl bg-cyan-50 border border-cyan-200 space-y-1">
                <span className="text-xs font-extrabold text-cyan-600">5. RECYCLE</span>
                <h5 className="font-bold text-slate-900 text-sm">Tái Chế</h5>
                <p className="text-xs text-slate-600">Phân loại rác tại nguồn đúng quy định: rác hữu cơ, rác tái chế và rác còn lại.</p>
              </div>
            </div>
          </div>

          {/* Practical School Checklist */}
          <div className="bg-gradient-to-br from-emerald-950 to-teal-900 text-white rounded-2xl p-6 space-y-4">
            <h4 className="text-sm font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-300" />
              Cam kết hành động của học sinh {SCHOOL_INFO.name}:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Ưu tiên đi xe buýt trường FPT, đi xe đạp hoặc xe điện đến trường, giảm thiểu phát thải khí CO₂ ra môi trường.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Tham gia dự án Eco-STEM, trồng và chăm sóc cây xanh trong khuôn viên trường tại Vị Tân, Vị Thanh, Hậu Giang.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Tiết kiệm từng giọt nước sạch, đóng chặt vòi nước lavabo sau khi rửa tay tại trường học.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Tuyên truyền cho gia đình và bạn bè về nguy cơ xâm nhập mặn để chủ động tích trữ nước ngọt mùa khô.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
