import React, { useState } from "react";
import { AlertTriangle, Droplets, Mountain, Sprout, Home, ShieldAlert, CheckCircle, ExternalLink, MapPin, Camera } from "lucide-react";
import { APP_IMAGES } from "../assets/images";

export const SectionImpacts: React.FC = () => {
  const [activeScope, setActiveScope] = useState<"hau-giang" | "vietnam" | "global">("hau-giang");

  const haugiangImpacts = [
    {
      title: "Xâm Nhập Mặn Mùa Khô Sâu & Kéo Dài",
      badge: "Cấp Báo Động",
      badgeColor: "bg-red-100 text-red-700 border-red-200",
      icon: Droplets,
      summary: "Mặn từ biển Tây qua sông Cái Lớn và từ sông Hậu xâm nhập sâu vào nội đồng các huyện Long Mỹ, Vị Thủy, TX. Long Mỹ và TP. Vị Thanh.",
      details: [
        "Độ mặn đo được có thời điểm vượt mức 8.0 - 10.0‰ trên sông Cái Lớn, vượt xa ngưỡng chịu đựng 1.0‰ của cây lúa và cây ăn trái.",
        "Xâm mặn đến sớm hơn và rút muộn hơn từ 2 đến 3 tuần so với quy luật tự nhiên trước đây.",
        "Làm ngưng trệ việc lấy nước tưới tiêu cho hàng chục ngàn hecta lúa Đông Xuân và vườn khóm, vườn cam sành.",
      ],
      impactLocation: "Long Mỹ, TX. Long Mỹ, Vị Thủy, TP. Vị Thanh",
    },
    {
      title: "Sạt Lở Bờ Sông, Kênh Rạch Cực Kỳ Phức Tạp",
      badge: "Nguy Cơ Cao",
      badgeColor: "bg-orange-100 text-orange-700 border-orange-200",
      icon: Mountain,
      summary: "Tình trạng sụt lún, xói lở bờ sông diễn ra dồn dập tại các tuyến sông lớn và kênh rạch huyết mạch do suy giảm phù sa thượng nguồn và nền đất yếu.",
      details: [
        "Huyện Châu Thành, TP. Ngã Bảy và huyện Phụng Hiệp ghi nhận hàng chục điểm sạt lở mỗi năm.",
        "Sạt lở cuốn trôi nhà cửa, làm đứt gãy các tuyến đường giao thông liên xã, cắt đứt giao thương nông thôn.",
        "Nguyên nhân kết hợp: Khô hạn làm khô nứt đất bờ kênh, sau đó mưa lớn kết hợp triều cường rút nhanh tạo lực hút gây sụp lở tức thì.",
      ],
      impactLocation: "TP. Ngã Bảy, Huyện Châu Thành, Huyện Phụng Hiệp",
    },
    {
      title: "Tổn Thất Nông Nghiệp & Cây Ăn Trái Đặc Sản",
      badge: "Sinh Kế",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
      icon: Sprout,
      summary: "Hậu Giang là vựa nông nghiệp và cây ăn trái nổi tiếng ĐBSCL, chịu thiệt hại trực tiếp về năng suất và chất lượng mùa vụ.",
      details: [
        "Vườn cây ăn trái giá trị cao như cam sành Ngã Bảy, bưởi Năm Roi Phú Hữu (Châu Thành), mít và chanh không hạt bị rụng hoa, cháy rễ khi nhiễm mặn.",
        "Chi phí sản xuất tăng vọt do người nông dân phải đầu tư máy bơm, bạt lót mương vườn trữ nước ngọt dã chiến.",
        "Đất trũng phèn bị xì phèn nặng hơn khi khô hạn kéo dài, gây khó khăn cho việc rửa đất đầu vụ mùa.",
      ],
      impactLocation: "Châu Thành, Vị Thủy, TP. Ngã Bảy, Phụng Hiệp",
    },
    {
      title: "Thiếu Hụt Nguồn Nước Ngọt Sinh Hoạt Cục Bộ",
      badge: "Đời Sống Dân Cư",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
      icon: Home,
      summary: "Hàng nghìn hộ dân nông thôn tại các vùng sâu, vùng xa đối diện nguy cơ thiếu nước sạch phục vụ sinh hoạt hàng ngày vào cao điểm mùa khô.",
      details: [
        "Các nhà máy cấp nước nông thôn phải ngưng lấy nước thô từ sông khi độ mặn vượt quá 0.5‰.",
        "Người dân phải dùng ghe chở nước ngọt từ xa hoặc mua nước đóng bình với chi phí đắt đỏ.",
        "Chính quyền tỉnh và các tổ chức đoàn thể phải vận hành các xe bồn chở nước miễn phí và lắp đặt túi chứa nước cộng đồng.",
      ],
      impactLocation: "Xã Lương Tâm, Lương Nghĩa (Long Mỹ), xã Hỏa Tiến (Vị Thanh)",
    },
  ];

  return (
    <section id="tac-dong" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Badge Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider border border-orange-200">
          Nội Dung 03
        </span>
        <span className="text-slate-400 text-xs font-medium">• Thực trạng & Hậu quả</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tác Động & Hậu Quả Của Biến Đổi Khí Hậu
          </h2>
          <p className="text-slate-600 mt-2 text-base max-w-3xl leading-relaxed">
            Từ bình diện toàn cầu, góc nhìn quốc gia đến câu chuyện hạn mặn, sạt lở cụ thể tại quê hương Hậu Giang.
          </p>
        </div>

        {/* Scope selector */}
        <div className="flex items-center bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start md:self-auto">
          <button
            onClick={() => setActiveScope("hau-giang")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeScope === "hau-giang"
                ? "bg-orange-500 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Trọng Tâm Hậu Giang
          </button>
          <button
            onClick={() => setActiveScope("vietnam")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeScope === "vietnam"
                ? "bg-emerald-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Quy Mô Việt Nam
          </button>
          <button
            onClick={() => setActiveScope("global")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeScope === "global"
                ? "bg-slate-800 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Quy Mô Toàn Cầu
          </button>
        </div>
      </div>

      {/* Scope 1: HẬU GIANG (Deep Dive) */}
      {activeScope === "hau-giang" && (
        <div className="space-y-8">
          {/* Highlight banner for Hau Giang with Documentary Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-600 rounded-3xl p-6 sm:p-8 text-white shadow-md overflow-hidden items-center">
            <div className="lg:col-span-7 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold backdrop-blur-xs">
                <MapPin className="w-3.5 h-3.5 text-amber-200" />
                <span>Trọng Điểm Địa Phương Tỉnh Hậu Giang</span>
              </div>
              <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight">
                Hậu Giang: Vùng đất chịu tác động kép của Hạn Mặn và Sạt Lở
              </h3>
              <p className="text-orange-50 text-xs sm:text-sm leading-relaxed pt-1">
                Nằm ở trung tâm Tây sông Hậu, Hậu Giang không có biển trực tiếp nhưng lại là nơi tiếp giáp giữa hai hệ thống thủy triều Biển Đông (qua sông Hậu) và Biển Tây (qua sông Cái Lớn). Khi dòng chảy thượng nguồn suy giảm, nước mặn dễ dàng bao vây các cửa sông rạch huyết mạch, đe dọa các vùng chuyên canh nông sản.
              </p>
              <div className="flex flex-wrap gap-2 pt-2 text-xs">
                <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20 font-semibold">
                  Mặn sông Cái Lớn: &gt; 8.0‰
                </span>
                <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20 font-semibold">
                  Điểm nóng: Long Mỹ, Vị Thanh, Ngã Bảy
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/25 shadow-lg group aspect-[16/10]">
              <img
                src={APP_IMAGES.haugiangSalinity}
                alt="Thực tế kênh rạch thủy lợi và cống ngăn mặn tại Hậu Giang"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-xs">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-300">
                  <Camera className="w-3 h-3" />
                  Ảnh tư liệu: Hệ thống cống kiểm soát mặn & kênh rạch Hậu Giang
                </span>
              </div>
            </div>
          </div>

          {/* 4 Cards for Hau Giang Impacts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {haugiangImpacts.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="font-extrabold text-slate-900 text-base leading-snug">{item.title}</h4>
                      </div>
                      <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Chi tiết biểu hiện tại Hậu Giang:
                      </span>
                      {item.details.map((d, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <span className="text-orange-500 font-bold shrink-0 mt-0.5">•</span>
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-medium text-emerald-800">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                      Địa bàn: {item.impactLocation}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick jump to map */}
          <div className="text-center pt-2">
            <a
              href="#ban-do-hau-giang"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold text-xs hover:bg-emerald-100 transition-colors"
            >
              <span>Xem Bản đồ rủi ro & Số liệu chi tiết 8 Huyện/Thị Hậu Giang</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* Scope 2: VIETNAM */}
      {activeScope === "vietnam" && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Việt Nam: Đường bờ biển 3.260 km & Hai vựa lúa trũng thấp
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Theo xếp hạng của Ngân hàng Thế giới (World Bank) và Germanwatch, Việt Nam là một trong 5 quốc gia chịu thiệt hại kinh tế và dân sinh nặng nhất do biến đổi khí hậu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-orange-50 border border-orange-200 space-y-2">
              <div className="text-3xl font-extrabold text-orange-600">~12%</div>
              <h4 className="font-bold text-slate-900 text-sm">Diện tích ĐBSCL có nguy cơ ngập</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nếu mực nước biển dâng 100cm vào cuối thế kỷ, khoảng 38.9% diện tích ĐBSCL và 10 - 12% dân số Việt Nam sẽ bị ảnh hưởng trực tiếp.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
              <div className="text-3xl font-extrabold text-emerald-700">1.5 - 3.5% GDP</div>
              <h4 className="font-bold text-slate-900 text-sm">Tổn thất kinh tế hàng năm</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thiên tai bão lũ, hạn mặn và sạt lở gây thiệt hại hàng chục nghìn tỷ đồng mỗi năm cho cơ sở hạ tầng, nông nghiệp và thủy sản.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-cyan-50 border border-cyan-200 space-y-2">
              <div className="text-3xl font-extrabold text-cyan-700">An Ninh Lương Thực</div>
              <h4 className="font-bold text-slate-900 text-sm">Thách thức vựa lúa quốc gia</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                ĐBSCL cung cấp hơn 50% sản lượng lúa và 90% lượng gạo xuất khẩu của cả nước đang đứng trước thách thức sống còn về nguồn nước ngọt.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Scope 3: GLOBAL */}
      {activeScope === "global" && (
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="max-w-3xl space-y-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Toàn Cầu: Khủng hoảng nhân đạo và sinh thái thế kỷ 21
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Biến đổi khí hậu đe dọa các Mục tiêu Phát triển Bền vững (SDGs) của Liên Hợp Quốc, đẩy hàng trăm triệu người vào vòng xoáy nghèo đói và di cư khí hậu.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-xs font-bold text-orange-600">Di cư khí hậu</span>
              <h4 className="font-bold text-slate-900 text-sm">216 triệu người</h4>
              <p className="text-xs text-slate-600">Có thể phải rời bỏ nơi ở vào năm 2050 do hạn hán và nước biển dâng.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-xs font-bold text-red-600">Đa dạng sinh học</span>
              <h4 className="font-bold text-slate-900 text-sm">1 triệu loài</h4>
              <p className="text-xs text-slate-600">Động thực vật đối mặt nguy cơ tuyệt chủng trong những thập kỷ tới.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-xs font-bold text-emerald-600">Khủng hoảng nước</span>
              <h4 className="font-bold text-slate-900 text-sm">3.6 tỷ người</h4>
              <p className="text-xs text-slate-600">Sống trong các khu vực thiếu nước ít nhất một tháng mỗi năm.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <span className="text-xs font-bold text-teal-600">Sức khỏe cộng đồng</span>
              <h4 className="font-bold text-slate-900 text-sm">Gia tăng bệnh dịch</h4>
              <p className="text-xs text-slate-600">Bệnh sốt xuất huyết, sốt rét và bệnh hô hấp lây lan rộng ra các vùng ôn đới.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
