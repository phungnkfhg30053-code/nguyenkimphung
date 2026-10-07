import React, { useState } from "react";
import { MapPin, Droplets, AlertTriangle, ShieldCheck, Info, BarChart3, TrendingUp, Sparkles, Trees, Camera, Compass } from "lucide-react";
import { HAU_GIANG_DISTRICTS, SALINITY_CHART_DATA } from "../data/climateData";
import { HauGiangDistrict } from "../types";
import { APP_IMAGES } from "../assets/images";

export const HauGiangMap: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<HauGiangDistrict>(HAU_GIANG_DISTRICTS[0]);
  const [chartMode, setChartMode] = useState<"salinity" | "temperature">("salinity");

  // Max value calculation for chart scaling
  const maxSalinity = 10.0;
  const maxTemp = 36.0;

  return (
    <section id="ban-do-hau-giang" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Badge Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
          Dữ Liệu Thực Địa Hậu Giang
        </span>
        <span className="text-slate-400 text-xs font-medium">• Bản đồ số & Biểu đồ quan trắc</span>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Bản Đồ Phân Vùng Rủi Ro Khí Hậu & Quan Trắc Tỉnh Hậu Giang
        </h2>
        <p className="text-slate-600 mt-2 text-base max-w-3xl leading-relaxed">
          Nhấp chọn vào từng đơn vị hành chính để tra cứu mức độ tổn thương, nguy cơ xâm nhập mặn, sạt lở và các mô hình sinh kế thích ứng tại địa phương.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Interactive Map Grid (Visual Schematic Map) */}
        <div className="lg:col-span-6 bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <div>
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Bản đồ 8 đơn vị hành chính
              </span>
              <h3 className="text-lg font-bold text-white">Tỉnh Hậu Giang</h3>
            </div>
            <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-1 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-300" />
              Chọn để xem chi tiết
            </span>
          </div>

          {/* Schematic visual map layout */}
          <div className="relative w-full aspect-[4/3] bg-emerald-900/40 rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden">
            {/* Waterway rivers graphic lines (representing Sông Hậu, Kênh Xà No, Sông Cái Lớn) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" viewBox="0 0 400 300">
              {/* Sông Hậu (phía Đông Bắc) */}
              <path d="M 280,0 Q 330,60 380,120" stroke="#38bdf8" strokeWidth="12" fill="none" strokeLinecap="round" />
              {/* Kênh Xáng Xà No (chạy ngang từ Vị Thanh sang Châu Thành A) */}
              <path d="M 60,110 Q 180,115 320,80" stroke="#0ea5e9" strokeWidth="6" fill="none" strokeDasharray="4 2" />
              {/* Sông Cái Lớn (từ biển Tây lấn vào Long Mỹ & Vị Thanh) */}
              <path d="M 40,280 Q 100,230 140,160 Q 150,110 100,100" stroke="#f97316" strokeWidth="7" fill="none" />
              {/* 7 nhánh sông Ngã Bảy */}
              <circle cx="330" cy="115" r="14" fill="#0284c7" opacity="0.6" />
            </svg>

            {/* River legend */}
            <div className="absolute bottom-2 left-3 text-[10px] text-slate-300 space-y-0.5 pointer-events-none z-10 bg-slate-900/60 p-2 rounded-lg backdrop-blur-xs border border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-1 bg-cyan-400 rounded-sm" />
                <span>Kênh Xáng Xà No / Sông Hậu</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-1 bg-orange-500 rounded-sm" />
                <span>Trục xâm mặn Sông Cái Lớn</span>
              </div>
            </div>

            {/* Clickable District Nodes positioned geographically */}
            <div className="relative w-full h-full grid grid-cols-3 gap-2.5 sm:gap-3 p-1">
              {HAU_GIANG_DISTRICTS.map((district) => {
                const isSelected = selectedDistrict.id === district.id;
                const isVeryHigh = district.vulnerabilityLevel === "Rất cao";
                const isHigh = district.vulnerabilityLevel === "Cao";

                return (
                  <button
                    key={district.id}
                    onClick={() => setSelectedDistrict(district)}
                    className={`relative p-2.5 sm:p-3 rounded-xl text-left transition-all duration-200 flex flex-col justify-between backdrop-blur-md border ${
                      isSelected
                        ? "bg-gradient-to-br from-orange-500 to-amber-600 border-amber-300 text-white shadow-lg scale-102 ring-2 ring-white/30 z-20"
                        : "bg-white/10 hover:bg-white/20 border-white/15 text-slate-200"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-[10px] font-semibold text-white/70">{district.type}</span>
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isVeryHigh ? "bg-red-400 animate-pulse" : isHigh ? "bg-amber-400" : "bg-emerald-400"
                          }`}
                          title={`Mức độ rủi ro: ${district.vulnerabilityLevel}`}
                        />
                      </div>
                      <div className="font-extrabold text-xs sm:text-sm tracking-tight leading-tight">
                        {district.name}
                      </div>
                    </div>

                    <div className="mt-2 pt-1 border-t border-white/10 flex items-center justify-between text-[10px]">
                      <span className="text-white/80">{district.area}</span>
                      <span className={`font-bold ${isSelected ? "text-amber-200" : "text-orange-300"}`}>
                        {district.vulnerabilityLevel}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-emerald-200/80 mt-4 px-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-400" /> Rủi ro rất cao (Long Mỹ, Vị Thanh, Ngã Bảy)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" /> Rủi ro cao
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" /> Trung bình
            </span>
          </div>
        </div>

        {/* Right Column: Deep-dive profile of the Selected District */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                Hồ sơ khí hậu chi tiết
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                <span>{selectedDistrict.name}</span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                  {selectedDistrict.type}
                </span>
              </h3>
            </div>

            <div
              className={`px-3 py-1 rounded-full text-xs font-bold border ${
                selectedDistrict.vulnerabilityLevel === "Rất cao"
                  ? "bg-red-50 text-red-700 border-red-200"
                  : selectedDistrict.vulnerabilityLevel === "Cao"
                  ? "bg-amber-50 text-amber-800 border-amber-200"
                  : "bg-emerald-50 text-emerald-800 border-emerald-200"
              }`}
            >
              Mức tổn hại: {selectedDistrict.vulnerabilityLevel}
            </div>
          </div>

          <p className="text-slate-700 text-sm leading-relaxed italic bg-slate-50 p-3.5 rounded-xl border border-slate-100">
            "{selectedDistrict.highlight}"
          </p>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-orange-50 border border-orange-100">
              <span className="text-slate-500 font-medium">Diện tích tự nhiên</span>
              <div className="font-extrabold text-slate-900 text-sm mt-0.5">{selectedDistrict.area}</div>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
              <span className="text-slate-500 font-medium">Dân số</span>
              <div className="font-extrabold text-slate-900 text-sm mt-0.5">{selectedDistrict.population}</div>
            </div>
          </div>

          {/* Salinity & Erosion Risks */}
          <div className="space-y-3">
            <div className="p-3.5 rounded-xl bg-red-50/70 border border-red-200 flex items-start gap-3">
              <Droplets className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-red-950 uppercase tracking-wide">
                  Xâm nhập mặn mùa khô
                </h4>
                <p className="text-xs text-slate-700 mt-0.5">{selectedDistrict.salinityRisk}</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-amber-950 uppercase tracking-wide">
                  Điểm nóng xói lở bờ sông
                </h4>
                <p className="text-xs text-slate-700 mt-0.5">{selectedDistrict.erosionHotspots}</p>
              </div>
            </div>
          </div>

          {/* Local Adaptation Solutions */}
          <div className="space-y-2 pt-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Mô hình thích ứng nổi bật tại {selectedDistrict.name}:
            </h4>
            <div className="space-y-2">
              {selectedDistrict.adaptationModels.map((model, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100 text-xs text-emerald-950"
                >
                  <span className="w-4 h-4 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                    ✓
                  </span>
                  <span>{model}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lung Ngoc Hoang Nature Reserve Spotlight Card */}
      <div className="mt-8 bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl overflow-hidden border border-emerald-500/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/20 aspect-[16/11] shadow-2xl group">
            <img
              src={APP_IMAGES.lungNgocHoang}
              alt="Khu Bảo tồn Thiên nhiên Lung Ngọc Hoàng - Hậu Giang"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md text-emerald-300 font-bold border border-emerald-400/30">
                <Camera className="w-3 h-3 text-amber-300" />
                Ảnh tư liệu: Rừng tràm Lung Ngọc Hoàng
              </span>
              <span className="text-amber-300 font-extrabold text-[11px]">Huyện Phụng Hiệp</span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
              <Trees className="w-3.5 h-3.5 text-emerald-400" />
              <span>Di Sản Sinh Thái & Bể Hấp Thụ Carbon Quốc Gia</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
              Khu Bảo Tồn Thiên Nhiên Lung Ngọc Hoàng: "Lá Phổi Xanh" Của Hậu Giang
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Với diện tích hơn <strong className="text-emerald-300">2.800 hecta</strong> tại huyện Phụng Hiệp, Lung Ngọc Hoàng là vùng đất ngập nước nội địa duy nhất còn sót lại của đồng bằng Tây sông Hậu. Đây là nơi lưu giữ nguồn gen quý hiếm của hơn 330 loài thực vật và 206 loài động vật hoang dã.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-base sm:text-lg font-extrabold text-amber-300">&gt; 2.800 ha</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Rừng ngập nước</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-base sm:text-lg font-extrabold text-emerald-300">330+ Loài</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Hệ thực vật bản địa</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-base sm:text-lg font-extrabold text-teal-300">Bể Carbon</div>
                <div className="text-[11px] text-slate-400 font-medium mt-0.5">Điều hòa vi khí hậu</div>
              </div>
            </div>

            <p className="text-xs text-emerald-200/80 italic">
              "Bảo vệ Lung Ngọc Hoàng chính là chìa khóa duy trì nguồn nước ngọt ngầm và điều hòa khí hậu cho toàn tỉnh Hậu Giang."
            </p>
          </div>
        </div>
      </div>

      {/* Salinity & Climate Trend Chart Section */}
      <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-orange-600" />
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Biểu Đồ Xu Hướng Độ Mặn & Nhiệt Độ Theo Tháng Tại Hậu Giang
              </h3>
            </div>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Số liệu tổng hợp từ các trạm quan trắc thủy văn ven sông Cái Lớn và kênh xáng Xà No.
            </p>
          </div>

          {/* Mode switch */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl self-start sm:self-auto text-xs font-bold">
            <button
              onClick={() => setChartMode("salinity")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                chartMode === "salinity" ? "bg-orange-500 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Độ Mặn (g/l)
            </button>
            <button
              onClick={() => setChartMode("temperature")}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                chartMode === "temperature" ? "bg-amber-600 text-white shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Nhiệt Độ (°C)
            </button>
          </div>
        </div>

        {/* Interactive Custom Bar Chart */}
        <div className="pt-4 pb-2">
          <div className="h-64 flex items-end justify-between gap-1.5 sm:gap-3 px-2 border-b border-slate-200">
            {SALINITY_CHART_DATA.map((item) => {
              const salVal = item.sal2024;
              const salHeight = (salVal / maxSalinity) * 100;
              const sal2020Height = (item.sal2020 / maxSalinity) * 100;
              const tempHeight = ((item.temp - 24) / (maxTemp - 24)) * 100;

              return (
                <div key={item.month} className="flex-1 flex flex-col items-center h-full justify-end group relative">
                  {/* Tooltip on hover */}
                  <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-slate-900 text-white text-[11px] py-1 px-2 rounded shadow-lg whitespace-nowrap z-20">
                    {chartMode === "salinity" ? (
                      <>
                        <span className="font-bold text-orange-300">{item.month}:</span> Năm 2024: {item.sal2024}‰ | Năm 2020: {item.sal2020}‰
                      </>
                    ) : (
                      <>
                        <span className="font-bold text-amber-300">{item.month}:</span> {item.temp}°C
                      </>
                    )}
                  </div>

                  {chartMode === "salinity" ? (
                    <div className="w-full flex items-end justify-center gap-1 h-full">
                      {/* Bar 2020 historic peak */}
                      <div
                        style={{ height: `${sal2020Height}%` }}
                        className="w-1/2 max-w-[14px] bg-red-300 rounded-t-sm transition-all duration-300 group-hover:bg-red-400"
                      />
                      {/* Bar 2024 current */}
                      <div
                        style={{ height: `${salHeight}%` }}
                        className="w-1/2 max-w-[14px] bg-orange-500 rounded-t-sm transition-all duration-300 group-hover:bg-orange-600"
                      />
                    </div>
                  ) : (
                    <div className="w-full flex items-end justify-center h-full">
                      <div
                        style={{ height: `${tempHeight}%` }}
                        className="w-full max-w-[20px] bg-gradient-to-t from-amber-400 to-red-500 rounded-t-sm transition-all duration-300"
                      />
                    </div>
                  )}

                  {/* Month Label */}
                  <span className="text-[11px] font-bold text-slate-500 mt-2">{item.month}</span>
                </div>
              );
            })}
          </div>

          {/* Legend and Analysis */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            {chartMode === "salinity" ? (
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-orange-500 rounded-xs" /> Năm gần đây (2024)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-red-300 rounded-xs" /> Đợt hạn mặn lịch sử (2020)
                </span>
                <span className="text-slate-400">• Đỉnh mặn tập trung vào Tháng 3 - Tháng 4 (lên đến 6.9 - 8.5‰)</span>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-3 h-3 bg-gradient-to-t from-amber-400 to-red-500 rounded-xs" /> Nhiệt độ trung bình (°C)
                </span>
                <span className="text-slate-400">• Nắng nóng gay gắt nhất vào Tháng 4 và Tháng 5 (&gt; 33°C)</span>
              </div>
            )}

            <div className="text-emerald-700 font-semibold flex items-center gap-1">
              <Info className="w-3.5 h-3.5" />
              <span>Ngưỡng nguy hại cây lúa: &gt; 1.0‰</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
