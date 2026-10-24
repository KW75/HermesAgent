/* ===== Johnny Education Centre — 課程資料（單一來源） =====
   新增課程：下方 courses 加一個物件，然後重跑 build 即可。
   規則：海報提供嘅寫入；冇提供嘅保持 "待補充"（TBD），唔得亂填。
   slug = 檔案名；signupUrl 留空時報名鈕會顯示「報名方式待補充」。 */

const CENTER = {
  name: "尊尼教育中心",
  nameEn: "Johnny Education Centre",
  logo: "images/logo.jpg",
  // 全域報名方式（可被個別課程 signupUrl 覆蓋）。空 = 待補充。
  signupUrl: "",          // 例: "https://wa.me/85200000000?text=..." 或報名表
  contactNote: "報名方式待補充"
};

const CATEGORIES = {
  tech: "科技 · 编程",
  art: "創意 · 藝術",
  study: "學科 · 全科"
};

const courses = [
  {
    slug: "ai-explorer",
    name: "AI 小小探索班",
    subtitle: "一起探索 AI 的奇妙世界！",
    category: "tech",
    image: "images/ai-explorer.jpg",
    age: "5–9 歲",
    ageNote: "小朋友及家長",
    duration: "待補充",        // 上堂時數（海報未提供）
    fee: "待補充",            // 收費（海報未提供）
    benefits: [
      { e: "🤖", t: "認識 AI" },
      { e: "💡", t: "啟發創意" },
      { e: "🎮", t: "互動學習" },
      { e: "🌱", t: "快樂成長" }
    ],
    goal: "激發好奇心、培養思考力",
    outline: [
      "認識 AI 是什麼、AI 在生活中的應用",
      "透過互動任務啟發創意與想像",
      "動手操作平板，體驗互動學習",
      "在遊戲中培養觀察、提問與思考力"
    ],
    outlineNote: "以上依海報四大重點整理；詳細單元安排待補充。",
    signupUrl: ""
  },
  {
    slug: "python",
    name: "兒童 Python 啟蒙班",
    subtitle: "玩着學，邁出编程第一步",
    category: "tech",
    image: "images/python.jpg",
    age: "待補充",
    ageNote: "",
    duration: "待補充",
    fee: "待補充",
    benefits: [
      { e: "🐍", t: "Python 入門" },
      { e: "🧩", t: "區塊编程" },
      { e: "🤖", t: "小專案" },
      { e: "🎯", t: "邏輯思考" }
    ],
    goal: "以趣味實作建立编程思維",
    outline: null,  // 海報未提供具體大綱 → 頁面顯示「待補充」
    outlineNote: "",
    signupUrl: ""
  },
  {
    slug: "painting",
    name: "創意繪畫小達人班",
    subtitle: "用色彩畫出你的小世界",
    category: "art",
    image: "images/painting.jpg",
    age: "待補充",
    ageNote: "",
    duration: "待補充",
    fee: "待補充",
    benefits: [
      { e: "🎨", t: "色彩創作" },
      { e: "✏️", t: "繪畫技法" },
      { e: "🌈", t: "表達自我" },
      { e: "🖌️", t: "動手實踐" }
    ],
    goal: "培養美術興趣與表達能力",
    outline: null,
    outlineNote: "",
    signupUrl: ""
  },
  {
    slug: "primary",
    name: "小學全科提升班",
    subtitle: "中、英、數全科同步提升",
    category: "study",
    image: "images/primary.jpg",
    age: "待補充",
    ageNote: "",
    duration: "待補充",
    fee: "待補充",
    benefits: [
      { e: "📖", t: "中文" },
      { e: "🔤", t: "英語" },
      { e: "➕", t: "數學" },
      { e: "📝", t: "作業輔導" }
    ],
    goal: "鞏固基數、提升全科成績",
    outline: null,
    outlineNote: "",
    signupUrl: ""
  }
];
