/* ==========================================================
   Portfolio script: theme (dark/light), language (uz/en/ru),
   mobile menu, scroll reveal, contact form
   ========================================================== */

/* ---------- Translations ---------- */
const I18N = {
  uz: {
    nav_about: "Men haqimda", nav_skills: "Ko'nikmalar", nav_projects: "Loyihalar",
    nav_exp: "Tajriba", nav_contact: "Aloqa",
    hero_role: "Backend dasturchi",
    hero_slogan: "Texnik olamda notexnik narsalar haqida yozaman.",
    btn_contact: "Bog'lanish", btn_about: "Men haqimda",
    about_title: "Men haqimda",
    about_text: "Men ishonchli API va servislar yaratadigan backend dasturchiman. Toza arxitektura, o'qilishi oson kod va murakkab g'oyalarni oddiy so'zlar bilan tushuntirishni yaxshi ko'raman.",
    skills_title: "Ko'nikmalar", projects_title: "Loyihalar", view: "Loyihani ko'rish",
    p1_name: "Birinchi loyiha", p2_name: "Ikkinchi loyiha", p3_name: "Uchinchi loyiha", p4_name: "To'rtinchi loyiha",
    p1_desc: "Loyiha nima qilishi va nima uchun muhimligi haqida qisqacha tavsif.",
    p2_desc: "Loyiha nima qilishi va nima uchun muhimligi haqida qisqacha tavsif.",
    p3_desc: "Loyiha nima qilishi va nima uchun muhimligi haqida qisqacha tavsif.",
    p4_desc: "Loyiha nima qilishi va nima uchun muhimligi haqida qisqacha tavsif.",
    exp_title: "Tajriba va ta'lim", now: "hozir",
    e1_title: "Backend dasturchi", e1_desc: "Kompaniya nomi. API, ma'lumotlar bazasi va fon vazifalarini loyihalash.",
    e2_title: "Bakalavr darajasi", e2_desc: "Universitet nomi. Informatika.",
    contact_title: "Aloqa", f_name: "Ism", f_email: "Email", f_msg: "Xabar", f_send: "Xabar yuborish",
    ph_ok: "Pochta dasturingiz ochildi. Xabarni yuboring."
  },
  en: {
    nav_about: "About", nav_skills: "Skills", nav_projects: "Projects",
    nav_exp: "Experience", nav_contact: "Contact",
    hero_role: "Backend developer",
    hero_slogan: "I write about non-technical stuff in the technical world.",
    btn_contact: "Get in touch", btn_about: "About me",
    about_title: "About me",
    about_text: "I'm a backend developer who builds reliable APIs and services. I enjoy clean architecture, readable code, and explaining technical ideas in simple words.",
    skills_title: "Skills", projects_title: "Projects", view: "View project",
    p1_name: "Project One", p2_name: "Project Two", p3_name: "Project Three", p4_name: "Project Four",
    p1_desc: "Short description of what this project does and why it matters.",
    p2_desc: "Short description of what this project does and why it matters.",
    p3_desc: "Short description of what this project does and why it matters.",
    p4_desc: "Short description of what this project does and why it matters.",
    exp_title: "Experience & education", now: "present",
    e1_title: "Backend developer", e1_desc: "Company name. Designing APIs, databases and background jobs.",
    e2_title: "Bachelor's degree", e2_desc: "University name. Computer science.",
    contact_title: "Contact", f_name: "Name", f_email: "Email", f_msg: "Message", f_send: "Send message",
    ph_ok: "Your mail app opened. Send the message there."
  },
  ru: {
    nav_about: "Обо мне", nav_skills: "Навыки", nav_projects: "Проекты",
    nav_exp: "Опыт", nav_contact: "Контакты",
    hero_role: "Backend-разработчик",
    hero_slogan: "Пишу о нетехнических вещах в техническом мире.",
    btn_contact: "Связаться", btn_about: "Обо мне",
    about_title: "Обо мне",
    about_text: "Я backend-разработчик, создаю надёжные API и сервисы. Люблю чистую архитектуру, читаемый код и объяснять технические идеи простыми словами.",
    skills_title: "Навыки", projects_title: "Проекты", view: "Открыть проект",
    p1_name: "Проект один", p2_name: "Проект два", p3_name: "Проект три", p4_name: "Проект четыре",
    p1_desc: "Краткое описание: что делает проект и чем он полезен.",
    p2_desc: "Краткое описание: что делает проект и чем он полезен.",
    p3_desc: "Краткое описание: что делает проект и чем он полезен.",
    p4_desc: "Краткое описание: что делает проект и чем он полезен.",
    exp_title: "Опыт и образование", now: "наст. время",
    e1_title: "Backend-разработчик", e1_desc: "Название компании. Проектирование API, баз данных и фоновых задач.",
    e2_title: "Бакалавриат", e2_desc: "Название университета. Информатика.",
    contact_title: "Контакты", f_name: "Имя", f_email: "Email", f_msg: "Сообщение", f_send: "Отправить",
    ph_ok: "Почтовое приложение открыто. Отправьте сообщение там."
  }
};

const root = document.documentElement;
const store = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
};

/* ---------- Language ---------- */
function setLang(lang) {
  if (!I18N[lang]) lang = "uz";
  root.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const text = I18N[lang][el.dataset.i18n];
    if (text) el.textContent = text;
  });
  document.querySelectorAll(".lang button").forEach((b) =>
    b.classList.toggle("active", b.dataset.lang === lang));
  store.set("lang", lang);
}
document.querySelectorAll(".lang button").forEach((b) =>
  b.addEventListener("click", () => setLang(b.dataset.lang)));

/* ---------- Theme ---------- */
function setTheme(theme) {
  root.dataset.theme = theme;
  store.set("theme", theme);
}
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
setTheme(store.get("theme") || (prefersDark ? "dark" : "light"));
document.getElementById("themeBtn").addEventListener("click", () =>
  setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

/* ---------- Mobile menu ---------- */
const nav = document.getElementById("nav");
const burger = document.getElementById("burger");
burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => nav.classList.remove("open")));

/* ---------- Scroll reveal ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

/* ---------- Contact form (opens the user's mail app) ---------- */
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const body = `${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`;
  // TODO: o'z emailingizni yozing
  location.href = `mailto:hello@alijonov.uz?subject=${encodeURIComponent("Portfolio: " + f.get("name"))}&body=${encodeURIComponent(body)}`;
});

/* ---------- Init ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
setLang(store.get("lang") || "uz");
