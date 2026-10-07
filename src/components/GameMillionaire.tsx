import React, { useState, useEffect } from "react";
import { Trophy, HelpCircle, Users, Sparkles, AlertCircle, CheckCircle2, XCircle, RotateCcw, Volume2, Award, Zap, ChevronRight } from "lucide-react";
import { MILLIONAIRE_QUESTIONS, TRUE_FALSE_QUESTIONS, SCHOOL_INFO } from "../data/climateData";
import { sound } from "../utils/audio";
import { APP_IMAGES } from "../assets/images";

interface GameProps {
  onClose?: () => void;
}

export const GameMillionaire: React.FC<GameProps> = () => {
  const [activeTab, setActiveTab] = useState<"millionaire" | "true-false">("millionaire");

  // Millionaire State
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [eliminatedOptions, setEliminatedOptions] = useState<number[]>([]);
  const [gameState, setGameState] = useState<"playing" | "gameover" | "victory">("playing");
  const [lifeline5050Used, setLifeline5050Used] = useState<boolean>(false);
  const [lifelineKienSangUsed, setLifelineKienSangUsed] = useState<boolean>(false);
  const [lifelineAudienceUsed, setLifelineAudienceUsed] = useState<boolean>(false);
  const [kienSangHint, setKienSangHint] = useState<string | null>(null);
  const [audienceVotes, setAudienceVotes] = useState<number[] | null>(null);
  const [timer, setTimer] = useState<number>(45);

  // True/False State
  const [tfIdx, setTfIdx] = useState<number>(0);
  const [tfScore, setTfScore] = useState<number>(0);
  const [tfStreak, setTfStreak] = useState<number>(0);
  const [tfAnswered, setTfAnswered] = useState<boolean>(false);
  const [tfUserChoice, setTfUserChoice] = useState<boolean | null>(null);

  const currentQ = MILLIONAIRE_QUESTIONS[currentIdx];

  // Timer countdown for Millionaire
  useEffect(() => {
    if (gameState !== "playing" || isAnswered || activeTab !== "millionaire") return;
    if (timer <= 0) {
      sound.playWrong();
      setGameState("gameover");
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, gameState, isAnswered, activeTab]);

  // Handle Option Selection
  const handleSelectOption = (idx: number) => {
    if (isAnswered || gameState !== "playing" || eliminatedOptions.includes(idx)) return;
    sound.playSelect();
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === currentQ.correctAnswer;

    setTimeout(() => {
      if (isCorrect) {
        sound.playCorrect();
        if (currentIdx + 1 >= MILLIONAIRE_QUESTIONS.length) {
          sound.playVictory();
          setGameState("victory");
        } else {
          setTimeout(() => {
            setCurrentIdx((prev) => prev + 1);
            setSelectedOption(null);
            setIsAnswered(false);
            setEliminatedOptions([]);
            setKienSangHint(null);
            setAudienceVotes(null);
            setTimer(45);
          }, 1800);
        }
      } else {
        sound.playWrong();
        setGameState("gameover");
      }
    }, 1000);
  };

  // Lifeline: 50:50
  const useLifeline5050 = () => {
    if (lifeline5050Used || isAnswered || gameState !== "playing") return;
    sound.playLifeline();
    setLifeline5050Used(true);

    const wrongOptions = [0, 1, 2, 3].filter((i) => i !== currentQ.correctAnswer);
    // Shuffle and pick 2 to eliminate
    const shuffled = wrongOptions.sort(() => 0.5 - Math.random());
    setEliminatedOptions(shuffled.slice(0, 2));
  };

  // Lifeline: Ask Kien Sang AI
  const useLifelineKienSang = () => {
    if (lifelineKienSangUsed || isAnswered || gameState !== "playing") return;
    sound.playLifeline();
    setLifelineKienSangUsed(true);

    const letters = ["A", "B", "C", "D"];
    setKienSangHint(
      `🐜 Kiến Sáng mách nước nè: "Theo dữ liệu khoa học về BĐKH và thực tế Hậu Giang, mình tin tưởng 95% đáp án đúng là phương án ${letters[currentQ.correctAnswer]}! Bạn hãy tự tin chọn nhé!"`
    );
  };

  // Lifeline: Ask Audience
  const useLifelineAudience = () => {
    if (lifelineAudienceUsed || isAnswered || gameState !== "playing") return;
    sound.playLifeline();
    setLifelineAudienceUsed(true);

    const correct = currentQ.correctAnswer;
    const votes = [0, 0, 0, 0];
    const correctPercentage = Math.floor(Math.random() * 20) + 65; // 65-85%
    votes[correct] = correctPercentage;

    let remaining = 100 - correctPercentage;
    const otherIdxs = [0, 1, 2, 3].filter((i) => i !== correct);
    otherIdxs.forEach((idx, i) => {
      if (i === otherIdxs.length - 1) {
        votes[idx] = remaining;
      } else {
        const v = Math.floor(Math.random() * remaining);
        votes[idx] = v;
        remaining -= v;
      }
    });

    setAudienceVotes(votes);
  };

  const resetGame = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setEliminatedOptions([]);
    setGameState("playing");
    setLifeline5050Used(false);
    setLifelineKienSangUsed(false);
    setLifelineAudienceUsed(false);
    setKienSangHint(null);
    setAudienceVotes(null);
    setTimer(45);
  };

  // True/False Handler
  const handleTfAnswer = (userChoice: boolean) => {
    if (tfAnswered) return;
    setTfUserChoice(userChoice);
    setTfAnswered(true);

    const q = TRUE_FALSE_QUESTIONS[tfIdx];
    const isCorrect = userChoice === q.isTrue;

    if (isCorrect) {
      sound.playCorrect();
      setTfScore((prev) => prev + 100);
      setTfStreak((prev) => prev + 1);
    } else {
      sound.playWrong();
      setTfStreak(0);
    }
  };

  const nextTfQuestion = () => {
    setTfAnswered(false);
    setTfUserChoice(null);
    if (tfIdx + 1 < TRUE_FALSE_QUESTIONS.length) {
      setTfIdx((prev) => prev + 1);
    } else {
      setTfIdx(0);
    }
  };

  return (
    <section id="mini-game" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider border border-amber-300">
          Góc Trò Chơi Học Tập
        </span>
        <span className="text-slate-400 text-xs font-medium">• Kiểm tra tri thức xanh</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Mini Game Tri Thức Biến Đổi Khí Hậu
          </h2>
          <p className="text-slate-600 mt-2 text-base max-w-3xl leading-relaxed">
            Thử tài đấu trí với phiên bản game truyền hình <strong className="text-orange-600 font-bold">Ai Là Triệu Phú Khí Hậu</strong> hoặc kiểm tra phản xạ nhanh với <strong className="text-emerald-700 font-bold">Thử Thách Đúng / Sai</strong>!
          </p>
        </div>

        {/* Game Mode Tabs */}
        <div className="flex items-center bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("millionaire")}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === "millionaire"
                ? "bg-amber-500 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Ai Là Triệu Phú BĐKH</span>
          </button>
          <button
            onClick={() => setActiveTab("true-false")}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeTab === "true-false"
                ? "bg-emerald-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Thử Thách Đúng / Sai</span>
          </button>
        </div>
      </div>

      {/* MODE 1: WHO WANTS TO BE A MILLIONAIRE */}
      {activeTab === "millionaire" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Stage */}
          <div className="lg:col-span-8 bg-gradient-to-b from-slate-950 via-slate-900 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-white/10 relative overflow-hidden">
            {/* Ambient lights */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Stage Top Bar: Lifelines & Timer */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              {/* Lifelines */}
              <div className="flex items-center gap-2">
                <button
                  onClick={useLifeline5050}
                  disabled={lifeline5050Used || isAnswered || gameState !== "playing"}
                  className={`px-3 py-1.5 rounded-xl text-xs font-extrabold border transition-all ${
                    lifeline5050Used
                      ? "opacity-30 border-slate-700 bg-slate-800 text-slate-500 line-through cursor-not-allowed"
                      : "bg-white/10 hover:bg-amber-500 hover:text-slate-950 border-amber-400/40 text-amber-300"
                  }`}
                  title="Loại bỏ 2 phương án sai"
                >
                  50:50
                </button>

                <button
                  onClick={useLifelineKienSang}
                  disabled={lifelineKienSangUsed || isAnswered || gameState !== "playing"}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                    lifelineKienSangUsed
                      ? "opacity-30 border-slate-700 bg-slate-800 text-slate-500 line-through cursor-not-allowed"
                      : "bg-white/10 hover:bg-emerald-500 hover:text-white border-emerald-400/40 text-emerald-300"
                  }`}
                  title="Hỏi trợ lý Kiến Sáng"
                >
                  <img
                    src={APP_IMAGES.mascotKienSang}
                    alt="Kiến Sáng"
                    className="w-4 h-4 rounded-full object-cover shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <span>Kiến Sáng</span>
                </button>

                <button
                  onClick={useLifelineAudience}
                  disabled={lifelineAudienceUsed || isAnswered || gameState !== "playing"}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                    lifelineAudienceUsed
                      ? "opacity-30 border-slate-700 bg-slate-800 text-slate-500 line-through cursor-not-allowed"
                      : "bg-white/10 hover:bg-cyan-500 hover:text-slate-950 border-cyan-400/40 text-cyan-300"
                  }`}
                  title="Hỏi ý kiến khán giả trường quay"
                >
                  <Users className="w-3 h-3" />
                  <span>Khán giả</span>
                </button>
              </div>

              {/* Timer circle */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400 font-medium">Thời gian:</span>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-extrabold text-sm border ${
                    timer <= 10
                      ? "bg-red-500/20 text-red-400 border-red-500 animate-pulse"
                      : "bg-white/10 text-amber-300 border-amber-400/40"
                  }`}
                >
                  {timer}
                </div>
              </div>
            </div>

            {/* Hint Box (If Kien Sang used) */}
            {kienSangHint && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-900/80 border border-emerald-400/40 text-emerald-100 text-xs sm:text-sm animate-fade-in flex items-start gap-3.5 shadow-lg">
                <img
                  src={APP_IMAGES.mascotKienSang}
                  alt="Trợ lý Kiến Sáng"
                  className="w-10 h-10 rounded-full object-cover border border-amber-300 shrink-0 shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-1">
                  <div className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Lời khuyên từ Trợ lý AI Kiến Sáng:
                  </div>
                  <p className="leading-relaxed text-white/90">{kienSangHint}</p>
                </div>
              </div>
            )}

            {/* Audience Chart (If Audience lifeline used) */}
            {audienceVotes && (
              <div className="mb-6 p-4 rounded-2xl bg-slate-900/80 border border-cyan-400/30 text-white space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-cyan-400" />
                  Kết quả bình chọn của khán giả trường quay:
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {["A", "B", "C", "D"].map((letter, idx) => (
                    <div key={letter} className="text-center space-y-1">
                      <div className="h-16 bg-white/5 rounded-lg flex items-end p-1">
                        <div
                          style={{ height: `${audienceVotes[idx]}%` }}
                          className="w-full bg-cyan-400 rounded-sm transition-all duration-500"
                        />
                      </div>
                      <div className="font-extrabold text-xs">{letter}</div>
                      <div className="text-[11px] text-cyan-300 font-bold">{audienceVotes[idx]}%</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* GAME STATE: PLAYING */}
            {gameState === "playing" && (
              <div className="space-y-6">
                {/* Question Info Banner */}
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>
                    Câu hỏi <strong className="text-amber-300 font-bold text-sm">#{currentIdx + 1}</strong> / 15
                  </span>
                  <span className="text-emerald-400 font-bold text-xs bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-800">
                    Phần thưởng: {currentQ.prize}
                  </span>
                </div>

                {/* Question Box */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center min-h-[110px] flex items-center justify-center">
                  <h3 className="text-base sm:text-xl font-extrabold text-white leading-relaxed">
                    {currentQ.question}
                  </h3>
                </div>

                {/* 4 Options Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {currentQ.options.map((opt, idx) => {
                    const letters = ["A", "B", "C", "D"];
                    const isEliminated = eliminatedOptions.includes(idx);
                    const isSelected = selectedOption === idx;
                    const isCorrect = currentQ.correctAnswer === idx;

                    let btnStyle = "bg-white/5 hover:bg-white/15 border-white/15 text-slate-200";

                    if (isEliminated) {
                      btnStyle = "opacity-20 pointer-events-none border-transparent bg-slate-900";
                    } else if (isAnswered) {
                      if (isSelected) {
                        btnStyle = isCorrect
                          ? "bg-emerald-600 border-emerald-300 text-white font-bold ring-2 ring-emerald-400"
                          : "bg-red-600 border-red-300 text-white font-bold ring-2 ring-red-400";
                      } else if (isCorrect) {
                        btnStyle = "bg-emerald-600/80 border-emerald-400 text-white font-bold";
                      }
                    } else if (isSelected) {
                      btnStyle = "bg-amber-500 border-amber-300 text-slate-950 font-bold";
                    }

                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(idx)}
                        disabled={isAnswered || isEliminated}
                        className={`p-4 rounded-xl border text-left transition-all duration-150 flex items-center gap-3 ${btnStyle}`}
                      >
                        <span className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center font-extrabold text-xs text-amber-300 shrink-0">
                          {letters[idx]}
                        </span>
                        <span className="text-xs sm:text-sm font-medium leading-snug">
                          {isEliminated ? "---" : opt}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation text after answer */}
                {isAnswered && (
                  <div className="p-4 rounded-xl bg-white/10 border border-white/10 text-xs text-slate-200 animate-fade-in">
                    <strong className="text-amber-300">Giải thích khoa học:</strong> {currentQ.explanation}
                  </div>
                )}
              </div>
            )}

            {/* GAME STATE: GAMEOVER */}
            {gameState === "gameover" && (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center mx-auto">
                  <XCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">Rất Tiếc, Bạn Đã Dừng Cuộc Chơi!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Bạn đã vượt qua được <strong>{currentIdx}</strong> câu hỏi. Hãy tiếp tục ôn luyện và thử sức lại để chinh phục đỉnh cao tri thức xanh nhé!
                </p>
                <div className="pt-4">
                  <button
                    onClick={resetGame}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 font-bold text-sm text-white hover:opacity-90 transition-opacity"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Chơi Lại Từ Đầu</span>
                  </button>
                </div>
              </div>
            )}

            {/* GAME STATE: VICTORY */}
            {gameState === "victory" && (
              <div className="text-center py-10 space-y-5">
                <div className="w-20 h-20 rounded-full bg-amber-400/20 border-2 border-amber-400 text-amber-300 flex items-center justify-center mx-auto animate-bounce">
                  <Trophy className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                  XUẤT SẮC! BẠN LÀ TRIỆU PHÚ TRI THỨC XANH!
                </h3>
                <p className="text-sm text-emerald-200 max-w-lg mx-auto leading-relaxed">
                  Chúc mừng bạn đã xuất sắc trả lời đúng tất cả 15/15 câu hỏi về Biến đổi khí hậu toàn cầu và quê hương Hậu Giang! Bạn xứng đáng là Đại sứ Khí Hậu Xanh của {SCHOOL_INFO.name}!
                </p>
                <div className="text-xl font-extrabold text-white bg-white/10 inline-block px-6 py-2.5 rounded-full border border-amber-300/30">
                  Phần thưởng danh dự: 150.000.000 ĐIỂM
                </div>
                <div className="pt-2">
                  <button
                    onClick={resetGame}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 font-bold text-sm text-white hover:opacity-90 transition-opacity"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Thử Thách Lại Lần Nữa</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Money Ladder Side Column */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Thang Điểm Danh Dự
              </span>
              <Award className="w-4 h-4 text-amber-500" />
            </div>

            <div className="space-y-1.5">
              {[...MILLIONAIRE_QUESTIONS].reverse().map((q) => {
                const qIdx = q.id - 1;
                const isCurrent = currentIdx === qIdx;
                const isPassed = currentIdx > qIdx;
                const isSafePoint = q.id === 5 || q.id === 10 || q.id === 15;

                return (
                  <div
                    key={q.id}
                    className={`flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      isCurrent
                        ? "bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-300 scale-102"
                        : isPassed
                        ? "text-emerald-700 bg-emerald-50 font-semibold"
                        : isSafePoint
                        ? "text-orange-600 bg-orange-50 font-extrabold border border-orange-200"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <span className="flex items-center gap-1.5">
                      <span>Câu {q.id}</span>
                      {isSafePoint && <span className="text-[10px] text-orange-500 font-bold">★</span>}
                    </span>
                    <span>{q.prize}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span>★ Câu 5 & Câu 10 là mốc an toàn bảo toàn điểm</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Câu 15: Chinh phục Vinh Quang Tri Thức Xanh</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODE 2: TRUE / FALSE SPEED CHALLENGE */}
      {activeTab === "true-false" && (
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Thử Thách Đúng / Sai Khí Hậu
              </span>
              <h3 className="text-xl font-extrabold text-slate-900">
                Câu hỏi #{tfIdx + 1} / {TRUE_FALSE_QUESTIONS.length}
              </h3>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <div className="text-right">
                <span className="text-slate-400 block text-[10px]">Điểm số:</span>
                <span className="font-extrabold text-orange-600 text-base">{tfScore}</span>
              </div>
              <div className="text-right">
                <span className="text-slate-400 block text-[10px]">Chuỗi đúng:</span>
                <span className="font-extrabold text-emerald-700 text-base">🔥 {tfStreak}</span>
              </div>
            </div>
          </div>

          {/* Statement Box */}
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center min-h-[140px] flex items-center justify-center">
            <h4 className="text-lg sm:text-xl font-extrabold text-slate-800 leading-relaxed">
              "{TRUE_FALSE_QUESTIONS[tfIdx].statement}"
            </h4>
          </div>

          {/* Action True vs False */}
          {!tfAnswered ? (
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleTfAnswer(true)}
                className="py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-lg flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
              >
                <CheckCircle2 className="w-6 h-6" />
                <span>ĐÚNG</span>
              </button>

              <button
                onClick={() => handleTfAnswer(false)}
                className="py-4 px-6 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-lg flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
              >
                <XCircle className="w-6 h-6" />
                <span>SAI</span>
              </button>
            </div>
          ) : (
            <div className="space-y-4 animate-fade-in">
              <div
                className={`p-4 rounded-2xl border text-sm flex items-start gap-3 ${
                  tfUserChoice === TRUE_FALSE_QUESTIONS[tfIdx].isTrue
                    ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                    : "bg-red-50 border-red-300 text-red-950"
                }`}
              >
                {tfUserChoice === TRUE_FALSE_QUESTIONS[tfIdx].isTrue ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <div className="font-extrabold text-base mb-1">
                    {tfUserChoice === TRUE_FALSE_QUESTIONS[tfIdx].isTrue ? "Chính xác tuyệt vời! (+100 điểm)" : "Chưa chính xác rồi!"}
                  </div>
                  <p className="text-xs sm:text-sm">{TRUE_FALSE_QUESTIONS[tfIdx].explanation}</p>
                </div>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={nextTfQuestion}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
                >
                  <span>Câu Tiếp Theo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
