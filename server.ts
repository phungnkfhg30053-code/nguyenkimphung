import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-initialized Gemini AI client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

const SYSTEM_INSTRUCTION = `Bạn là "Kiến Sáng" - Chú trợ lý AI thân thiện, thông thái và nhiệt huyết về môi trường và Biến đổi khí hậu (BĐKH) của Trường Tiểu học, THCS và THPT FPT Hậu Giang (FPT School Hậu Giang).
Mục tiêu của bạn là giúp học sinh FPT School, giáo viên và nhân dân tìm hiểu sâu sắc về:
1. 4 nội dung cốt lõi của BĐKH: Khái niệm (Hiệu ứng nhà kính, nguyên nhân phát thải khí CO2, CH4, N2O), Biểu hiện (nhiệt độ tăng, băng tan, nước biển dâng, thiên tai cực đoan), Tác động/Hậu quả (kinh tế, sinh thái, đời sống con người, an ninh lương thực), và Ứng phó/Biện pháp (Giảm nhẹ & Thích ứng).
2. Thực trạng Việt Nam: Là một trong 5 quốc gia chịu tổn thương nặng nề nhất bởi BĐKH, đặc biệt là Đồng bằng sông Cửu Long.
3. Địa phương tỉnh Hậu Giang: 
- Nằm ở trung tâm Tây sông Hậu, chịu tác động kép của lũ thượng nguồn, triều cường Biển Đông và Biển Tây, cùng với hạn hán, xâm nhập mặn (đặc biệt vào mùa khô các huyện Long Mỹ, Vị Thủy, TP Vị Thanh).
- Tình trạng sạt lở bờ sông, kênh rạch nghiêm trọng tại Ngã Bảy, Châu Thành, Phụng Hiệp do dòng chảy và suy giảm phù sa.
- Các mô hình thích ứng tại Hậu Giang: Mô hình lúa chịu mặn, chuyển đổi đất trồng lúa kém hiệu quả sang cây ăn trái (khóm Cầu Đúc, mãng cầu xiêm, mít ruột đỏ), mô hình tôm - lúa thích ứng sinh thái, công trình cống ngăn mặn và đê bao trữ nước ngọt dã chiến.
- Hành động của học sinh FPT School Hậu Giang: Dự án Eco-STEM, tiết kiệm điện nước, trồng cây xanh tại khuôn viên trường (Quốc lộ 61C, Vị Tân, TP Vị Thanh), phân loại rác thải tại nguồn, đi xe buýt FPT/xe đạp điện, tuyên truyền lan tỏa lối sống xanh (5R: Refuse, Reduce, Reuse, Repurpose, Recycle).

Phong cách phản hồi:
- Lời văn gần gũi, truyền cảm hứng, tinh thần công nghệ sáng tạo của học sinh FPT, dùng icon sinh động.
- Trả lời bằng tiếng Việt chuẩn xác, mạch lạc, có phân mục rõ ràng.
- Độ dài vừa phải, súc tích (150 - 300 từ) để người dùng dễ đọc trên web.`;

// Fallback intelligent answers when offline or API key is not yet set
function getFallbackResponse(query: string): string {
  const lower = query.toLowerCase();
  
  if (lower.includes("khái niệm") || lower.includes("là gì") || lower.includes("định nghĩa")) {
    return `🌱 **Chào bạn! Mình là Kiến Sáng đây.**
**Biến đổi khí hậu (BĐKH)** là sự thay đổi lâu dài của khí hậu toàn cầu hoặc khu vực theo thời gian (từ vài thập kỷ đến hàng triệu năm), do các quá trình tự nhiên hoặc do hoạt động của con người làm biến đổi thành phần của khí quyển.

Nguyên nhân cốt lõi là **Hiệu ứng nhà kính nhân tạo**: Hoạt động đốt nhiên liệu hóa thạch (than đá, dầu mỏ), phá rừng và công nghiệp thải ra lượng khổng lồ các khí nhà kính như CO₂ (Carbon dioxide), CH₄ (Methane), N₂O... giữ nhiệt lại trong bầu khí quyển làm Trái Đất nóng lên!`;
  }

  if (lower.includes("hậu giang") || lower.includes("địa phương") || lower.includes("vị thanh") || lower.includes("long mỹ")) {
    return `🌾 **Tác động & Thích ứng Biến đổi khí hậu tại tỉnh Hậu Giang:**

1. **Thách thức lớn tại Hậu Giang:**
- **Xâm nhập mặn:** Mùa khô, mặn từ sông Hậu và biển Tây lấn sâu vào kênh rạch Long Mỹ, Vị Thanh, gây thiếu nước ngọt tưới tiêu và sinh hoạt.
- **Sạt lở bờ sông:** Diễn ra phức tạp tại Châu Thành, Ngã Bảy, đe dọa trực tiếp nhà cửa và tuyến lộ giao thông.
- **Ngập úng:** Triều cường kết hợp mưa lớn làm ngập nhiều khu dân cư và vườn cây ăn trái.

2. **Mô hình thích ứng nổi bật:**
- Phát triển các giống lúa chất lượng cao chịu phèn, chịu mặn.
- Chuyển đổi sang cây trồng thích ứng: khóm Cầu Đúc (Vị Thanh), cây có múi, mít và sen.
- Vận hành hệ thống cống âu thuyền, nạo vét kênh mương trữ ngọt và gia cố kè sinh thái bản địa!`;
  }

  if (lower.includes("biểu hiện")) {
    return `🌡️ **4 Biểu hiện rõ rệt nhất của Biến đổi khí hậu:**

1. **Nhiệt độ toàn cầu tăng kỷ lục:** Các đợt nắng nóng gay gắt xuất hiện dày đặc với nền nhiệt phá vỡ mọi tiền lệ.
2. **Băng tan & Nước biển dâng:** Băng vĩnh cửu ở Bắc Cực, Nam Cực và các đỉnh núi cao tan chảy nhanh, đe dọa các vùng đồng bằng ven biển.
3. **Hiện tượng thời tiết cực đoan:** Bão siêu cấp, hạn hán kéo dài, mưa lũ bất thường, hiện tượng El Niño và La Niña biến đổi dị thường.
4. **Suy thoái các hệ sinh thái:** Rạn san hô bị tẩy trắng hàng loạt, nhiều loài sinh vật mất môi trường sống tự nhiên.`;
  }

  if (lower.includes("hậu quả") || lower.includes("tác động")) {
    return `⚠️ **Những hậu quả nghiêm trọng của Biến đổi khí hậu:**

- **Nông nghiệp & An ninh lương thực:** Năng suất lúa và hoa màu sụt giảm do hạn hán, lũ lụt và sâu bệnh phát triển; đất trồng bị nhiễm mặn nghiêm trọng.
- **Tài nguyên nước:** Nguy cơ cạn kiệt nguồn nước ngọt sinh hoạt và tưới tiêu vào mùa khô.
- **Sức khỏe con người:** Gia tăng các bệnh nhiệt đới, bệnh hô hấp, say nắng và dịch bệnh truyền nhiễm.
- **Kinh tế - Xã hội:** Hư hỏng hạ tầng giao thông, nhà cửa do sạt lở, triều cường; hàng triệu người có nguy cơ phải di cư vì khí hậu.`;
  }

  if (lower.includes("biện pháp") || lower.includes("ứng phó") || lower.includes("học sinh") || lower.includes("làm gì")) {
    return `💡 **Hành động thiết thực của học sinh và chúng ta:**

1. **Tiết kiệm năng lượng:** Tắt quạt, đèn và máy vi tính khi rời khỏi lớp học/phòng ngủ; tận dụng ánh sáng tự nhiên.
2. **Di chuyển xanh:** Đi bộ, xe đạp hoặc xe buýt đến trường; hạn chế phương tiện cá nhân chạy xăng.
3. **Thực hành quy tắc 5R:** Từ chối đồ nhựa dùng 1 lần (Refuse), Giảm rác thải (Reduce), Tái sử dụng (Reuse), Tái chế (Recycle).
4. **Trồng và chăm sóc cây xanh:** Tham gia các phong trào "Trường học xanh - sạch - đẹp", phủ xanh sân trường và nơi cư trú.
5. **Lan tỏa thông điệp:** Chia sẻ kiến thức về BĐKH với bạn bè, người thân để cùng nhau hành động!`;
  }

  return `🌿 **Chào bạn! Mình là Kiến Sáng - Trợ lý AI Khí Hậu.**

Cảm ơn bạn đã đặt câu hỏi về: *"${query}"*!
Biến đổi khí hậu là thách thức lớn nhất của thời đại, đòi hỏi mỗi chúng ta từ học sinh, gia đình đến toàn xã hội cùng chung tay. Bạn có thể hỏi mình chi tiết về:
- **Khái niệm** và cơ chế hiệu ứng nhà kính
- **Biểu hiện** và các hiện tượng thời tiết cực đoan
- **Tác động** tại Việt Nam và tỉnh Hậu Giang (xâm mặn, sạt lở...)
- **Giải pháp ứng phó** và những việc học sinh có thể làm ngay hôm nay!

Hãy gửi câu hỏi cho mình nhé! 🌍✨`;
}

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message || typeof message !== "string") {
      res.status(400).json({ error: "Tin nhắn không hợp lệ" });
      return;
    }

    const ai = getGeminiClient();

    if (!ai) {
      // Return rich local knowledge base response
      const reply = getFallbackResponse(message);
      res.json({ reply, source: "knowledge_base" });
      return;
    }

    // Call Gemini 3.8 Flash model via @google/genai SDK
    const contents: any[] = [];

    // Optional chat history format
    if (Array.isArray(history) && history.length > 0) {
      for (const turn of history.slice(-6)) {
        contents.push({
          role: turn.role === "user" ? "user" : "model",
          parts: [{ text: turn.text || "" }],
        });
      }
    }

    contents.push({
      role: "user",
      parts: [{ text: message }],
    });

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const reply = response.text || getFallbackResponse(message);
    res.json({ reply, source: "gemini-3.8-flash" });
  } catch (error) {
    console.error("Gemini API error:", error);
    // Graceful fallback to rich local knowledge base
    const fallback = getFallbackResponse(req.body?.message || "");
    res.json({ reply: fallback, source: "fallback_after_error" });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
