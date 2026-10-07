import React, { useState } from "react";
import { Thermometer, Waves, CloudLightning, Fish, AlertOctagon, TrendingUp, Compass, ArrowUpRight } from "lucide-react";

export const SectionManifestation: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const pillars = [
    {
      id: "temp",
      title: "Nhiệt độ toàn cầu gia tăng kỷ lục",
      tag: "Sóng nhiệt & Nắng nóng",
      icon: Thermometer,
      color: "from-orange-500 to-amber-600",
      accentBg: "bg-orange-50 text-orange-700 border-orange-200",
      stat: "+1.15°C",
      statLabel: "Mức nhiệt ấm lên so với thời kỳ 1850-1900",
      description: "Thế giới liên tục ghi nhận các tháng và các năm nóng nhất trong hơn 174 năm lịch sử quan trắc khí quyển. Các đợt nắng nóng gay gắt kéo dài tại châu Á, châu Âu và Bắc Mỹ đe dọa nghiêm trọng sức khỏe con người.",
      evidence: [
        "Năm 2023 và 2024 lần lượt thiết lập mốc nhiệt độ trung bình toàn cầu cao nhất từng đo được.",
        "Sóng nhiệt đô thị xảy ra thường xuyên hơn, xuất hiện nhiều ngày có chỉ số nhiệt vượt ngưỡng 40°C.",
        "Mùa hè kéo dài hơn, mùa đông ấm lên bất thường làm rối loạn nhịp sinh học tự nhiên.",
      ],
    },
    {
      id: "ice-sea",
      title: "Băng tan hai cực & Nước biển dâng",
      tag: "Thủy văn biển",
      icon: Waves,
      color: "from-teal-600 to-cyan-700",
      accentBg: "bg-teal-50 text-teal-800 border-teal-200",
      stat: "3.7 mm/năm",
      statLabel: "Tốc độ dâng của mực nước biển giai đoạn 2006-2024",
      description: "Lượng băng tại Nam Cực, Bắc Băng Dương và dải băng khổng lồ Greenland đang tan chảy với tốc độ phi mã. Đồng thời hiện tượng giãn nở nhiệt của nước biển khiến đại dương dâng cao mỗi ngày.",
      evidence: [
        "Bắc Cực mất trung bình khoảng 13% diện tích băng biển mỗi thập kỷ.",
        "Các dải băng vĩnh cửu tại nóc nhà thế giới Himalaya và dãy Alps suy giảm kỷ lục.",
        "Nước biển dâng trực tiếp đẩy nước mặn thâm nhập sâu vào các dòng sông vùng Đồng bằng sông Cửu Long.",
      ],
    },
    {
      id: "extreme-weather",
      title: "Thời tiết cực đoan & Dị thường",
      tag: "Thiên tai khốc liệt",
      icon: CloudLightning,
      color: "from-amber-600 to-red-600",
      accentBg: "bg-amber-50 text-amber-800 border-amber-200",
      stat: "Gấp 3 lần",
      statLabel: "Tần suất các hiện tượng thời tiết cực đoan so với 1980",
      description: "Quy luật thời tiết truyền thống bị đảo lộn hoàn toàn. Bão hình thành với cường độ siêu bão nhanh hơn, mưa cực đoan trút lượng nước tương đương cả tháng chỉ trong vài giờ gây lũ quét và sạt lở.",
      evidence: [
        "Hiện tượng El Niño và La Niña xuất hiện với chu kỳ khó lường, gây hạn hán lịch sử xen kẽ lũ lụt.",
        "Những cơn bão muộn và bão có quỹ đạo bất thường ngày càng xuất hiện nhiều hơn tại Biển Đông.",
        "Hạn hán kéo dài làm cạn kiệt dòng chảy sông Mê Kông, gây ra các vụ cháy rừng trên diện rộng.",
      ],
    },
    {
      id: "ecosystem",
      title: "Axit hóa đại dương & Suy thoái sinh thái",
      tag: "Hệ sinh thái tự nhiên",
      icon: Fish,
      color: "from-emerald-600 to-teal-700",
      accentBg: "bg-emerald-50 text-emerald-800 border-emerald-200",
      stat: "30%",
      statLabel: "Mức tăng độ axit trong nước biển kể từ Cách mạng Công nghiệp",
      description: "Đại dương hấp thụ khoảng 25-30% lượng CO₂ do con người thải ra, tạo thành axit cacbonic làm giảm độ pH nước biển. Hàng loạt rạn san hô bị tẩy trắng và hàng triệu loài sinh vật mất đi ngôi nhà sinh thái.",
      evidence: [
        "Hơn 50% rạn san hô nhiệt đới toàn cầu đã chết hoặc bị hư hại nặng nề do tẩy trắng nhiệt.",
        "Nhiều loài động vật, chim di cư và thực vật buộc phải dịch chuyển vùng sống lên vĩ độ cao hơn.",
        "Rừng ngập mặn và đất ngập nước nội địa (như Lung Ngọc Hoàng) đứng trước nguy cơ xáo trộn sinh cảnh.",
      ],
    },
  ];

  return (
    <section id="bieu-hien" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Badge */}
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
          Nội Dung 02
        </span>
        <span className="text-slate-400 text-xs font-medium">• Bằng chứng từ quan trắc thực địa</span>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Biểu Hiện Của Biến Đổi Khí Hậu
        </h2>
        <p className="text-slate-600 mt-2 text-base max-w-3xl leading-relaxed">
          Những dấu hiệu cảnh báo khẩn thiết của Mẹ Thiên Nhiên được đo đạc chính xác qua các trạm quan trắc quốc tế và Việt Nam.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {pillars.map((p, index) => {
          const Icon = p.icon;
          const isSelected = selectedPillar === index;
          return (
            <div
              key={p.id}
              onClick={() => setSelectedPillar(index)}
              className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 flex flex-col justify-between ${
                isSelected
                  ? "bg-white border-orange-500 shadow-md ring-2 ring-orange-400/20 translate-y-[-2px]"
                  : "bg-slate-50/70 border-slate-200 hover:bg-white hover:border-slate-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${p.color} text-white flex items-center justify-center shadow-xs`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full border ${p.accentBg}`}>
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug">
                  {p.title}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold text-orange-600">{p.stat}</span>
                <span className={`font-semibold ${isSelected ? "text-orange-600" : "text-slate-400"}`}>
                  {isSelected ? "Đang chọn" : "Xem chi tiết →"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep Dive Details of the Selected Pillar */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md bg-orange-100 text-orange-800 text-xs font-bold">
                Trụ cột số {selectedPillar + 1}
              </span>
              <span className="text-xs text-slate-500">Bằng chứng quan trắc khoa học</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              {pillars[selectedPillar].title}
            </h3>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {pillars[selectedPillar].description}
            </p>

            <div className="pt-2 space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                Các biểu hiện thực tế được ghi nhận:
              </h4>
              {pillars[selectedPillar].evidence.map((ev, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-xs mt-0.5">
                    {i + 1}
                  </span>
                  <span>{ev}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-emerald-950 rounded-2xl p-6 text-white space-y-4 shadow-lg">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <AlertOctagon className="w-4 h-4 text-orange-400" />
              Chỉ số trọng tâm
            </div>

            <div className="py-2">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                {pillars[selectedPillar].stat}
              </div>
              <div className="text-xs text-emerald-200 mt-1 font-medium">
                {pillars[selectedPillar].statLabel}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/10 border border-white/10 text-xs text-slate-200 leading-relaxed">
              💡 <strong>Liên hệ Hậu Giang:</strong> Biểu hiện gia tăng nhiệt độ và nước biển dâng kết hợp với triều cường Biển Tây làm mùa khô tại Hậu Giang ngày càng khắc nghiệt, đẩy nồng độ mặn vào nội đồng sớm hơn 10 - 20 ngày so với trước đây!
            </div>

            <a
              href="#tac-dong"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-amber-200 transition-colors pt-1"
            >
              <span>Xem tác động cụ thể tại tỉnh Hậu Giang</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
