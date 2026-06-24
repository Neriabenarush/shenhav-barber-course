/* =========================================================
   ⚙️  אזור העריכה — כאן משנים את כל התוכן של הדף
   =========================================================
   זה הקובץ היחיד שצריך לגעת בו כדי לעדכן תוכן.
   אחרי עריכה — שומרים ומרעננים את הדף.
*/
const CONFIG = {
  /* --- מיתוג ופרטים כלליים --- */
  brandName: "שנהב מזרחי",          // שם המותג בלוגו (המילה האחרונה תופיע בזהב)
  instructorName: "שנהב",           // השם הפרטי (מופיע ב"נעים להכיר")
  yearsExperience: "12+",

  /* --- יצירת קשר --- */
  whatsappNumber: "972528304686",   // 0528304686 בפורמט בינלאומי (972 ובלי ה-0 המוביל)
  whatsappMessage: "היי שנהב! ראיתי את דף הקורס ואשמח לפרטים נוספים 🙏",
  instagramUser: "shenhav_mizrahi10",  // שם המשתמש באינסטגרם (בלי @)

  /* --- קישורי תשלום (מתחברים בהמשך ל-Gumroad/Lemon Squeezy) --- */
  checkoutBasic: "#",               // כאן יבוא קישור הרכישה למסלול הבסיסי
  checkoutPro: "#",                 // כאן יבוא קישור הרכישה למסלול המקצועי

  /* --- מחירים (לתצוגה בלבד) --- */
  priceBasic: "₪490", priceBasicOld: "₪690",
  pricePro: "₪890",   priceProOld: "₪1,290",

  /* --- סטטיסטיקות בהירו --- */
  students: "+500",
  hours: "40+",

  /* --- תמונת המדריך --- */
  instructorPhoto: "https://picsum.photos/seed/barber-instructor/700/900",

  /* גלריית אינסטגרם (הטמעה) — מושבת. רצינו מראה נקי "כאילו צילמנו עכשיו", בלי שם המשתמש/תגובות
     של אינסטגרם, ועם וידאו שמתנגן בדף עצמו. לכן עברנו לתמונות/וידאו מקומיים (מערך gallery למטה).
     הקישורים הקודמים שמורים ב-PROJECT-STATUS.md אם נרצה אותם בעתיד. */
  instagramPosts: [],

  /* =========================================================
     גלריית עבודות
     - type: 'image' לתמונה רגילה, 'video' לסרטון
     - לתמונה: שים את הקובץ בתיקיית assets/ והפנה אליו, או הדבק כתובת
     - תמונה: { type: "image", src: "assets/cut1.jpg", caption: "פייד קלאסי" }
     - סרטון: { type: "video", src: "assets/clip1.mp4", poster: "assets/clip1.jpg", caption: "תהליך מלא" }
       (הווידאו מתנגן בדף עצמו, בלי מיתוג חיצוני)
     פריט בלי src מוצג כ-ממלא-מקום נקי. שמים את הקבצים בתיקיית assets/.
     ========================================================= */
  gallery: [
    { type: "image" },
    { type: "image" },
    { type: "image" },
    { type: "video" },
    { type: "image" },
    { type: "image" },
  ],

  /* --- סילבוס / מה לומדים --- */
  curriculum: [
    { title: "יסודות וכלי עבודה", desc: "היכרות עם המספריים, המכונה והאחיזה הנכונה — הבסיס לכל תספורת." },
    { title: "טכניקות פיד ומעברים", desc: "הסוד למעברים חלקים בלי קווים — שלב אחר שלב על כל אורך שיער." },
    { title: "עיצוב וגילוח זקן", desc: "קונטור, שייפינג וגימור מקצועי שמשאיר את הלקוח מרוצה ומטופח." },
    { title: "תספורות טרנדיות", desc: "הסגנונות שהלקוחות מבקשים היום — קרופ, פומפדור, טקסצ'ר ועוד." },
    { title: "עבודה עם לקוחות", desc: "איך לנהל שיחה, להבין מה הלקוח באמת רוצה ולבנות אמון." },
    { title: "בניית קליינטים ועסק", desc: "שיווק, רשתות חברתיות ותמחור — להפוך כישרון לפרנסה יציבה." },
  ],

  /* --- המלצות --- */
  reviews: [
    { name: "דניאל מ.", role: "בוגר הקורס", stars: 5, text: "נכנסתי בלי לדעת כלום והיום אני עובד בברברשופ. ההסברים פשוט ברורים." },
    { name: "אורי כ.", role: "בוגר הקורס", stars: 5, text: "הליווי האישי עשה את ההבדל. כל שאלה שהיתה לי קיבלה מענה תוך שעות." },
    { name: "מוחמד ע.", role: "בוגר הקורס", stars: 5, text: "החזרתי את ההשקעה כבר בחודש הראשון. שווה כל שקל, בלי הגזמה." },
  ],

  /* --- שאלות נפוצות --- */
  faq: [
    { q: "צריך ניסיון קודם?", a: "ממש לא. הקורס בנוי מאפס — מתחילים מהכלים הבסיסיים ומתקדמים בהדרגה." },
    { q: "כמה זמן יש לי גישה?", a: "גישה לכל החיים. נרשמים פעם אחת וצופים מתי שרוצים, מכל מכשיר." },
    { q: "מה אם זה לא מתאים לי?", a: "יש החזר כספי מלא תוך 14 יום, בלי שאלות. אין סיכון מצדך." },
    { q: "איך מקבלים את הקורס?", a: "מיד לאחר התשלום נשלח אליך למייל קישור גישה לכל התכנים." },
    { q: "אפשר לשלם בתשלומים?", a: "כן, בהתאם לאמצעי התשלום. צרו קשר בוואטסאפ ונסדר לכם." },
  ],
};

/* =========================================================
   מכאן והלאה — הקוד שמפעיל את הדף. אין צורך לערוך.
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---- קישורים דינמיים ---- */
  const waLink = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(CONFIG.whatsappMessage)}`;
  const igLink = `https://instagram.com/${CONFIG.instagramUser}`;

  $$("[data-whatsapp]").forEach(a => { a.href = waLink; a.target = "_blank"; a.rel = "noopener"; });
  $$("[data-instagram]").forEach(a => a.href = igLink);
  $$("[data-brand-logo]").forEach(el => {
    const parts = CONFIG.brandName.trim().split(/\s+/);
    if (parts.length > 1) {
      const last = parts.pop();
      el.innerHTML = `${parts.join(" ")} <span>${last}</span>`;
    } else {
      el.innerHTML = `<span>${CONFIG.brandName}</span>`;
    }
  });

  $$("[data-checkout='basic']").forEach(a => a.href = CONFIG.checkoutBasic);
  $$("[data-checkout='pro']").forEach(a => a.href = CONFIG.checkoutPro);

  /* ---- טקסטים ומספרים ---- */
  const setText = (sel, val) => { const el = $(sel); if (el) el.textContent = val; };
  setText("[data-instructor-name]", CONFIG.instructorName);
  setText("[data-stat-students]", CONFIG.students);
  setText("[data-stat-hours]", CONFIG.hours);
  setText("[data-price-basic]", CONFIG.priceBasic);
  setText("[data-price-basic-old]", CONFIG.priceBasicOld);
  setText("[data-price-pro]", CONFIG.pricePro);
  setText("[data-price-pro-old]", CONFIG.priceProOld);

  const aboutImg = $("[data-instructor-photo]");
  if (aboutImg) aboutImg.src = CONFIG.instructorPhoto;

  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- גלריה ---- */
  const galleryGrid = $("#galleryGrid");
  if (galleryGrid && CONFIG.instagramPosts && CONFIG.instagramPosts.length) {
    /* גלריית אינסטגרם — הטמעת פוסטים/רילים (קליל, נטען ישירות מאינסטגרם) */
    galleryGrid.classList.add("gallery--ig");
    galleryGrid.innerHTML = CONFIG.instagramPosts.map(url => `
      <blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14"></blockquote>
    `).join("");
    const processIG = () => { if (window.instgrm && window.instgrm.Embeds) window.instgrm.Embeds.process(); };
    processIG();
    setTimeout(processIG, 1200);
    setTimeout(processIG, 3000);
  } else if (galleryGrid) {
    const playBtn = `<div class="gallery__play"><span><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></div>`;
    const phIcon = `<svg viewBox="0 0 24 24" class="gallery__ph-icon" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`;
    galleryGrid.innerHTML = CONFIG.gallery.map((item, i) => {
      const isVideo = item.type === "video";
      const hasSrc = item.src && item.src.trim();
      if (!hasSrc) {
        return `<div class="gallery__item gallery__item--ph">
          <div class="gallery__ph">${phIcon}<span>${isVideo ? "סרטון" : "עבודה"}</span></div>
          ${isVideo ? playBtn : ""}
        </div>`;
      }
      const media = isVideo
        ? `<video src="${item.src}"${item.poster ? ` poster="${item.poster}"` : ""} muted preload="metadata" playsinline></video>`
        : `<img src="${item.src}" alt="${item.caption || "עבודה"}" loading="lazy" />`;
      return `<div class="gallery__item reveal" data-index="${i}">
        ${media}
        ${isVideo ? playBtn : ""}
        ${item.caption ? `<div class="gallery__caption">${item.caption}</div>` : ""}
      </div>`;
    }).join("");
  }

  /* ---- סילבוס ---- */
  const curr = $("#curriculumGrid");
  if (curr) {
    curr.innerHTML = CONFIG.curriculum.map((m, i) => `
      <div class="module reveal">
        <div class="module__num">${String(i + 1).padStart(2, "0")}</div>
        <h3>${m.title}</h3>
        <p>${m.desc}</p>
      </div>`).join("");
  }

  /* ---- המלצות ---- */
  const rev = $("#reviewsGrid");
  if (rev) {
    rev.innerHTML = CONFIG.reviews.map(r => `
      <div class="review reveal">
        <div class="review__stars">${"★".repeat(r.stars)}</div>
        <p class="review__text">"${r.text}"</p>
        <div class="review__person">
          <div class="review__avatar">${r.name.charAt(0)}</div>
          <div>
            <div class="review__name">${r.name}</div>
            <div class="review__role">${r.role}</div>
          </div>
        </div>
      </div>`).join("");
  }

  /* ---- FAQ ---- */
  const faqList = $("#faqList");
  if (faqList) {
    faqList.innerHTML = CONFIG.faq.map(f => `
      <div class="faq__item">
        <button class="faq__q">${f.q}</button>
        <div class="faq__a"><p>${f.a}</p></div>
      </div>`).join("");

    $$(".faq__q", faqList).forEach(q => q.addEventListener("click", () => {
      const item = q.parentElement;
      const ans = q.nextElementSibling;
      const isOpen = item.classList.contains("open");
      $$(".faq__item", faqList).forEach(i => { i.classList.remove("open"); i.querySelector(".faq__a").style.maxHeight = null; });
      if (!isOpen) { item.classList.add("open"); ans.style.maxHeight = ans.scrollHeight + "px"; }
    }));
  }

  /* ---- Lightbox לגלריה ---- */
  const lightbox = $("#lightbox");
  const lbContent = $("#lightboxContent");
  const openLightbox = (item) => {
    lbContent.innerHTML = item.type === "video"
      ? `<video src="${item.src}" controls autoplay playsinline></video>`
      : `<img src="${item.src}" alt="${item.caption || ""}" />`;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => { lightbox.hidden = true; lbContent.innerHTML = ""; document.body.style.overflow = ""; };

  if (galleryGrid) {
    $$(".gallery__item[data-index]", galleryGrid).forEach(el =>
      el.addEventListener("click", () => openLightbox(CONFIG.gallery[+el.dataset.index])));
  }
  $("#lightboxClose")?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape" && !lightbox.hidden) closeLightbox(); });

  /* ---- כותרת דביקה ---- */
  const header = $("#header");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 30);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- תפריט מובייל ---- */
  const navToggle = $("#navToggle");
  const nav = $("#nav");
  navToggle?.addEventListener("click", () => nav.classList.toggle("open"));
  $$("a", nav).forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

  /* ---- טופס לידים → וואטסאפ (חינם, בלי שרת) ----
     בלחיצה נפתח וואטסאפ עם השם והטלפון של הפונה, מוכן לשליחה אל מספר העסק. */
  const form = $("#leadForm");
  form?.addEventListener("submit", e => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const phone = (data.get("phone") || "").toString().trim();
    const msg = `היי שנהב! אשמח לפרטים על הקורס 🙏\nשם: ${name}\nטלפון: ${phone}`;
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    const win = window.open(url, "_blank");
    if (!win) window.location.href = url;   /* אם חוסם חלונות קופצים — נווט באותו טאב */
    form.hidden = true;
    $("#leadSuccess").hidden = false;
  });

  /* ---- אנימציית הופעה בגלילה ---- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => io.observe(el));
});
