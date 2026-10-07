import React, { useState } from "react";
import { Leaf, Award, ArrowRight, RotateCcw, CheckCircle2, AlertCircle } from "lucide-react";

export const CarbonCalculator: React.FC = () => {
  const [transport, setTransport] = useState<string>("bike");
  const [electricity, setElectricity] = useState<string>("medium");
  const [plastic, setPlastic] = useState<string>("low");
  const [diet, setDiet] = useState<string>("balanced");

  // Factors in kg CO2 per month
  const transportValues: Record<string, number> = {
    walk: 0,
    bike: 0,
    ebike: 8,
    bus: 18,
    motorbike: 48,
  };

  const electricityValues: Record<string, number> = {
    low: 25,
    medium: 65,
    high: 130,
  };

  const plasticValues: Record<string, number> = {
    low: 5,
    medium: 18,
    high: 35,
  };

  const dietValues: Record<string, number> = {
    veggie: 30,
    balanced: 60,
    heavyMeat: 110,
  };

  const totalCO2 =
    (transportValues[transport] || 0) +
    (electricityValues[electricity] || 0) +
    (plasticValues[plastic] || 0) +
    (dietValues[diet] || 0);

  // Rating level
  let rating = {
    label: "Chiến Binh Xanh Xuất Sắc",
    color: "text-emerald-700",
    bgColor: "bg-emerald-50 border-emerald-300",
    desc: "Bạn có lối sống cực kỳ thân thiện với môi trường! Lượng phát thải của bạn thấp hơn 60% so với mức trung bình học sinh toàn quốc.",
  };

  if (totalCO2 > 150) {
    rating = {
      label: "Cần Cải Thiện Thói Quen",
      color: "text-orange-700",
      bgColor: "bg-orange-50 border-orange-300",
      desc: "Lượng phát thải của bạn đang ở mức khá cao. Hãy cùng Kiến Sáng áp dụng quy tắc 5R và đi xe đạp để giảm dấu chân carbon nhé!",
    };
  } else if (totalCO2 > 95) {
    rating = {
      label: "Công Dân Xanh Tiềm Năng",
      color: "text-amber-700",
      bgColor: "bg-amber-50 border-amber-300",
      desc: "Bạn đang làm khá tốt! Chỉ cần cắt giảm thêm một chút đồ nhựa một lần và tiết kiệm điện là bạn sẽ đạt chuẩn Chiến Binh Xanh.",
    };
  }

  const handleReset = () => {
    setTransport("bike");
    setElectricity("medium");
    setPlastic("low");
    setDiet("balanced");
  };

  return (
    <section id="tinh-carbon" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold mb-2">
              <Leaf className="w-3.5 h-3.5 text-amber-300" />
              Công cụ tương tác học đường
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Tính Toán Dấu Chân Carbon Cá Nhân Của Bạn
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
              Dấu chân carbon (Carbon Footprint) là tổng lượng khí nhà kính phát sinh từ các hoạt động sinh hoạt, di chuyển và tiêu dùng hàng ngày của bạn.
            </p>
          </div>

          <button
            onClick={handleReset}
            className="self-start lg:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-slate-200 transition-colors border border-white/15"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Đặt lại mặc định</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Question inputs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Question 1: Transport */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-amber-300">
                1. Phương tiện bạn thường dùng đến trường:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                {[
                  { id: "walk", name: "Đi bộ", sub: "0 kg CO₂" },
                  { id: "bike", name: "Xe đạp thường", sub: "0 kg CO₂" },
                  { id: "ebike", name: "Xe đạp điện", sub: "8 kg/tháng" },
                  { id: "bus", name: "Xe buýt", sub: "18 kg/tháng" },
                  { id: "motorbike", name: "Xe máy xăng", sub: "48 kg/tháng" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setTransport(item.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      transport === item.id
                        ? "bg-orange-500 border-amber-300 text-white font-bold shadow-md scale-102"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <div>{item.name}</div>
                    <div className="text-[10px] opacity-75">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: Electricity */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-amber-300">
                2. Mức tiêu thụ điện gia đình (theo hoá đơn tháng):
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: "low", name: "Tiết kiệm", sub: "< 100 kWh" },
                  { id: "medium", name: "Trung bình", sub: "100 - 250 kWh" },
                  { id: "high", name: "Sử dụng nhiều", sub: "> 250 kWh (máy lạnh)" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setElectricity(item.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      electricity === item.id
                        ? "bg-orange-500 border-amber-300 text-white font-bold shadow-md scale-102"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <div>{item.name}</div>
                    <div className="text-[10px] opacity-75">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: Plastic habits */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-amber-300">
                3. Thói quen sử dụng đồ nhựa dùng một lần:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: "low", name: "Hiếm khi", sub: "Dùng bình cá nhân" },
                  { id: "medium", name: "Thỉnh thoảng", sub: "1 - 3 lần/tuần" },
                  { id: "high", name: "Thường xuyên", sub: "Hàng ngày ly/túi nhựa" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setPlastic(item.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      plastic === item.id
                        ? "bg-orange-500 border-amber-300 text-white font-bold shadow-md scale-102"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <div>{item.name}</div>
                    <div className="text-[10px] opacity-75">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Question 4: Diet */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-amber-300">
                4. Thói quen dinh dưỡng:
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: "veggie", name: "Nhiều rau củ", sub: "Nông sản địa phương" },
                  { id: "balanced", name: "Cân bằng", sub: "Cá, rau, thịt vừa phải" },
                  { id: "heavyMeat", name: "Nhiều thịt đỏ", sub: "Bò, heo chế biến" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setDiet(item.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      diet === item.id
                        ? "bg-orange-500 border-amber-300 text-white font-bold shadow-md scale-102"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    <div>{item.name}</div>
                    <div className="text-[10px] opacity-75">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 text-slate-900 shadow-lg space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Kết Quả Ước Tính
              </span>
              <Award className="w-5 h-5 text-amber-500" />
            </div>

            <div className="text-center py-2">
              <span className="text-xs font-semibold text-slate-500">Phát thải ước tính của bạn:</span>
              <div className="text-4xl sm:text-5xl font-extrabold text-orange-600 mt-1">
                {totalCO2} <span className="text-lg text-slate-600 font-bold">kg CO₂/tháng</span>
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Tương đương khoảng {(totalCO2 * 12).toLocaleString()} kg CO₂ mỗi năm
              </div>
            </div>

            {/* Rating Box */}
            <div className={`p-4 rounded-xl border ${rating.bgColor} space-y-1`}>
              <div className={`font-extrabold text-sm ${rating.color} flex items-center gap-1.5`}>
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{rating.label}</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">{rating.desc}</p>
            </div>

            {/* Tree absorption equivalency */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
              <span className="font-bold text-emerald-800 flex items-center gap-1">
                <Leaf className="w-3.5 h-3.5 text-emerald-600" /> Cần bao nhiêu cây xanh để bù đắp?
              </span>
              <p>
                Cần khoảng <strong>{Math.ceil(totalCO2 / 1.8)} cây xanh</strong> trưởng thành để hấp thụ hết lượng CO₂ này mỗi tháng! Hãy trồng thêm một mầm xanh nhé!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
