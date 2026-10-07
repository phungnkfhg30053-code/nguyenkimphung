import React, { useState } from "react";
import { BookOpen, Sun, Wind, Factory, Flame, HelpCircle, CheckCircle2, ChevronRight, Layers } from "lucide-react";

export const SectionConcept: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"greenhouse" | "gases" | "compare">("greenhouse");

  const gases = [
    {
      name: "Carbon Dioxide (CO₂)",
      percentage: "76% phát thải",
      source: "Đốt than đá, dầu mỏ, khí đốt, phá rừng làm giảm khả năng hấp thụ quang hợp.",
      lifespan: "100 - 300 năm",
      impactColor: "from-orange-500 to-amber-500",
    },
    {
      name: "Methane (CH₄)",
      percentage: "16% phát thải",
      source: "Nông nghiệp ngập nước (ruộng lúa kỵ khí), chăn nuôi gia súc nhai lại, bãi rác hữu cơ, rò rỉ khí đốt.",
      lifespan: "12 năm (nhưng khả năng giữ nhiệt gấp 28 lần CO₂)",
      impactColor: "from-amber-500 to-yellow-500",
    },
    {
      name: "Nitrous Oxide (N₂O)",
      percentage: "6% phát thải",
      source: "Sử dụng phân bón hóa học nitơ trong trồng trọt, đốt sinh khối, xử lý nước thải công nghiệp.",
      lifespan: "114 năm (khả năng giữ nhiệt gấp gần 300 lần CO₂)",
      impactColor: "from-emerald-500 to-teal-500",
    },
    {
      name: "Khí công nghiệp Fluor (HFCs, PFCs, SF₆)",
      percentage: "2% phát thải",
      source: "Hệ thống làm lạnh, điều hòa không khí, bình xịt, công nghiệp sản xuất chất bán dẫn.",
      lifespan: "Hàng nghìn năm trong khí quyển",
      impactColor: "from-cyan-500 to-blue-500",
    },
  ];

  return (
    <section id="khai-niem" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider border border-orange-200">
          Nội Dung 01
        </span>
        <span className="text-slate-400 text-xs font-medium">• Nền tảng khoa học</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Khái Niệm & Cơ Chế Biến Đổi Khí Hậu
          </h2>
          <p className="text-slate-600 mt-2 text-base max-w-3xl leading-relaxed">
            Hiểu đúng bản chất khoa học giữa hiệu ứng nhà kính tự nhiên và biến đổi khí hậu do con người gây ra.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("greenhouse")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "greenhouse"
                ? "bg-white text-emerald-800 shadow-xs border border-emerald-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Cơ chế Hiệu Ứng Nhà Kính
          </button>
          <button
            onClick={() => setActiveTab("gases")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "gases"
                ? "bg-white text-emerald-800 shadow-xs border border-emerald-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            4 Khí Nhà Kính Chính
          </button>
          <button
            onClick={() => setActiveTab("compare")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              activeTab === "compare"
                ? "bg-white text-emerald-800 shadow-xs border border-emerald-200"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Thời Tiết vs Khí Hậu
          </button>
        </div>
      </div>

      {/* Definition Card */}
      <div className="bg-gradient-to-r from-orange-50 via-amber-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-orange-200/70 mb-10 shadow-xs">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/20">
            <BookOpen className="w-7 h-7" />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <span>Định nghĩa chuẩn khoa học (Theo UNFCCC & IPCC)</span>
              <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-md font-semibold">
                Giáo dục phổ thông
              </span>
            </h3>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              <strong className="text-orange-950 font-semibold">Biến đổi khí hậu (BĐKH)</strong> là sự thay đổi của khí hậu được quy trực tiếp hoặc gián tiếp do hoạt động của con người làm biến đổi thành phần của khí quyển toàn cầu, và sự thay đổi này diễn ra ngoài tính biến động tự nhiên của khí hậu được quan sát qua các thời kỳ có thể so sánh được (thường từ 30 năm trở lên).
            </p>
          </div>
        </div>
      </div>

      {/* Tab 1: Greenhouse Effect Visual Mechanism */}
      {activeTab === "greenhouse" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Trái Đất hoạt động như một nhà kính khổng lồ
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Nếu không có hiệu ứng nhà kính tự nhiên, nhiệt độ bề mặt Trái Đất sẽ khoảng <strong>-18°C</strong> (đóng băng hoàn toàn, không thể có sự sống). Tuy nhiên, lượng khí thải nhân tạo khổng lồ kể từ cuộc Cách mạng Công nghiệp đã biến Trái Đất thành một chiếc lò nhiệt ngày càng nóng!
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                <Sun className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-emerald-950">1. Bức xạ Mặt Trời chiếu tới</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Mặt Trời truyền năng lượng dưới dạng sóng ngắn xuyên qua tầng khí quyển xuống sưởi ấm mặt đất và đại dương.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                <Wind className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-amber-950">2. Bề mặt phản xạ nhiệt</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Trái Đất bức xạ lại năng lượng dưới dạng sóng dài nhiệt hồng ngoại hướng ra ngoài không gian vũ trụ.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 flex items-start gap-3">
                <Flame className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-orange-950">3. Bẫy nhiệt nhân tạo ngày càng dày</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Nồng độ CO₂, CH₄ dày đặc giữ lại bức xạ nhiệt, không cho thoát ra ngoài, làm nhiệt độ bề mặt và các đại dương tăng dần đều.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-emerald-950 to-teal-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/20 rounded-full blur-2xl pointer-events-none" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  Infographic Mô Phỏng
                </span>
                <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full text-emerald-200">
                  Cơ chế bức xạ nhiệt
                </span>
              </div>

              {/* Simplified Schematic Graphic */}
              <div className="space-y-4 py-2">
                <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-400 text-amber-950 flex items-center justify-center font-bold text-xs">
                      100%
                    </div>
                    <span className="text-xs font-medium">Bức xạ Mặt Trời chiếu tới Trái Đất</span>
                  </div>
                  <Sun className="w-5 h-5 text-amber-400" />
                </div>

                <div className="flex items-center justify-between bg-white/5 p-3 rounded-xl border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyan-400 text-cyan-950 flex items-center justify-center font-bold text-xs">
                      ~30%
                    </div>
                    <span className="text-xs font-medium">Bị phản xạ ngược lại bởi mây & băng tuyết</span>
                  </div>
                  <Wind className="w-5 h-5 text-cyan-300" />
                </div>

                <div className="flex items-center justify-between bg-orange-500/20 p-3 rounded-xl border border-orange-400/40">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs">
                      ~70%
                    </div>
                    <div>
                      <div className="text-xs font-bold text-orange-200">Hấp thụ & Bị giữ lại bởi Khí Nhà Kính</div>
                      <div className="text-[11px] text-slate-300">Gây hiện tượng nóng lên toàn cầu & thời tiết cực đoan</div>
                    </div>
                  </div>
                  <Flame className="w-5 h-5 text-orange-400" />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15 text-xs text-emerald-100 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>
                  Bảo vệ rừng cây và giảm phát thải nhiên liệu hóa thạch là cách duy nhất làm nguội "chiếc chăn nhiệt" này!
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: The 4 Greenhouse Gases */}
      {activeTab === "gases" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gases.map((gas) => (
            <div
              key={gas.name}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-orange-400 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-extrabold text-slate-900 text-base">{gas.name}</h3>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                    {gas.percentage}
                  </span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <p>
                    <strong className="text-slate-800 font-medium">Nguồn gốc phát sinh:</strong> {gas.source}
                  </p>
                  <p>
                    <strong className="text-slate-800 font-medium">Tuổi thọ tồn lưu:</strong> {gas.lifespan}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-semibold">
                <span>Khí nhà kính quy định theo Nghị định thư Kyoto</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Comparison Table */}
      {activeTab === "compare" && (
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="p-6 bg-slate-50 border-b border-slate-200">
            <h3 className="text-lg font-bold text-slate-900">
              Phân biệt Thời tiết (Weather) và Khí hậu (Climate)
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Học sinh thường hay nhầm lẫn giữa hai khái niệm này trong bài thi Địa lý và đời sống.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 text-sm">
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-500" />
                <h4 className="font-bold text-slate-900 text-base">Thời Tiết (Weather)</h4>
              </div>
              <ul className="space-y-2 text-slate-600 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span><strong>Khái niệm:</strong> Trạng thái của khí quyển tại một địa phương cụ thể trong một thời gian ngắn nhất định.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span><strong>Thời gian:</strong> Thay đổi từng giờ, từng ngày, từng tuần.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-600 font-bold">•</span>
                  <span><strong>Ví dụ:</strong> Hôm nay tại TP. Vị Thanh trời nắng gắt 34°C, chiều có mưa dông cục bộ.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 space-y-3 bg-emerald-50/40">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-600" />
                <h4 className="font-bold text-slate-900 text-base">Khí Hậu (Climate)</h4>
              </div>
              <ul className="space-y-2 text-slate-600 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Khái niệm:</strong> Quy luật lặp đi lặp lại của tình hình thời tiết trong một chu kỳ nhiều năm (thường ≥ 30 năm).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Thời gian:</strong> Tính ổn định cao, biến đổi theo chu kỳ dài nhiều thập kỷ hoặc thế kỷ.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span><strong>Ví dụ:</strong> Hậu Giang có khí hậu nhiệt đới gió mùa cận xích đạo, chia làm 2 mùa mưa - khô rõ rệt.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
