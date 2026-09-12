(() => {
  const C = window.PORTFOLIO,
    page = document.body.dataset.page;
  let lang = localStorage.getItem("portfolio-language") || "th";
  const tx = (th, en) => (lang === "en" ? en : th);
  const esc = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char],
    );
  const pageTitle = {
    home: ["จริยธรรม มาสงค์", "Jareyatham Masong"],
    about: ["เกี่ยวกับ", "About"],
    projects: ["ผลงาน", "Projects"],
    experience: ["ประสบการณ์", "Experience"],
    tools: ["เครื่องมือ", "Tools"],
    contact: ["ติดต่อ", "Contact"],
    resume: ["เรซูเม่", "Resume"],
  };

  function header() {
    const links = C.nav
      .map(
        ([id, href, th, en]) =>
          `<a href="${href}" ${id === page ? 'aria-current="page"' : ""}>${tx(th, en)}</a>`,
      )
      .join("");
    document.querySelector("#site-header").innerHTML =
      `<div class="site-header"><a class="identity" href="index.html" aria-label="${tx("กลับหน้าหลัก", "Back to home")}"><img src="${C.profile.avatar}" alt="" /><span><b>${C.profile.thaiName}</b><small>JAREYATHAM MASONG</small></span></a><button class="menu-toggle" aria-expanded="false" aria-controls="main-nav"><i></i><i></i><i></i><span class="sr-only">Menu</span></button><nav id="main-nav" aria-label="${tx("เมนูหลัก", "Main navigation")}">${links}</nav><button class="language-toggle" type="button" aria-label="Switch language">${lang === "th" ? "TH <span>/</span> EN" : "EN <span>/</span> TH"}</button></div>`;
    document.querySelector(".language-toggle").addEventListener("click", () => {
      lang = lang === "th" ? "en" : "th";
      localStorage.setItem("portfolio-language", lang);
      render();
    });
    const menu = document.querySelector(".menu-toggle"),
      nav = document.querySelector("#main-nav");
    menu.addEventListener("click", () => {
      const open = menu.getAttribute("aria-expanded") === "true";
      menu.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
    });
  }
  const intro = (label, titleTh, titleEn, textTh, textEn) =>
    `<section class="page-intro"><p class="eyebrow">${label}</p><h1>${tx(titleTh, titleEn)}</h1><p>${tx(textTh, textEn)}</p></section>`;
  function home() {
    return `<section class="home-hero"><div class="hero-rain" aria-hidden="true"></div><div class="hero-content"><p class="eyebrow live"><span></span> ${tx("พร้อมเปิดรับโอกาสฝึกงาน", "OPEN TO INTERNSHIP OPPORTUNITIES")}</p><h1>${C.profile.thaiName}<em>Jareyatham<br>Masong</em></h1><p class="hero-summary">${tx("นักศึกษาวิทยาการคอมพิวเตอร์ ผู้สนใจ Full-stack, Software Testing และระบบอัตโนมัติที่ช่วยให้การทำงานลื่นไหลขึ้น", "Computer Science student interested in full-stack development, software testing, and automation that makes work flow better.")}</p><div class="hero-actions"><a class="button" href="projects.html">${tx("ดูผลงาน", "VIEW PROJECTS")} <b>↗</b></a><a class="text-button" href="contact.html">${tx("ร่วมงานกัน", "LET’S CONNECT")} →</a></div></div><figure class="portrait-card"><img src="${C.profile.avatar}" alt="${C.profile.name}" /><figcaption>COMPUTER SCIENCE<br>SOFTWARE DEVELOPER INTERN</figcaption></figure></section><section class="home-note"><p class="eyebrow">01 / FOCUS</p><h2>${tx("สร้างระบบดิจิทัลที่ <em>ชัดเจนและใช้งานได้จริง</em>", "Building digital systems that are <em>clear and useful.</em>")}</h2><div class="focus-grid"><article><small>01</small><b>Full-stack</b><span>${tx("เว็บแอปและระบบที่เชื่อมต่อกัน", "Connected web applications")}</span></article><article><small>02</small><b>Software testing</b><span>${tx("ตรวจสอบคุณภาพและ API", "Quality and API validation")}</span></article><article><small>03</small><b>Automation</b><span>${tx("เวิร์กโฟลว์ด้วย n8n", "Workflows with n8n")}</span></article></div></section>`;
  }
  function about() {
    return `${intro("01 / ABOUT", "เกี่ยวกับ<br><em>ผม</em>", "About<br><em>me</em>", "นักศึกษาวิทยาการคอมพิวเตอร์ที่สนใจการสร้างและทดสอบซอฟต์แวร์ให้ใช้งานได้ดีในโลกจริง", "A Computer Science student focused on building and testing software that works in the real world.")}<section class="two-column"><div class="profile-panel"><img src="${C.profile.avatar}" alt="${C.profile.name}" /><p>${tx("ผมมีประสบการณ์ด้าน software testing, API testing, full-stack web development และ automation workflow ด้วย n8n เป้าหมายคือการเติบโตเป็น Software Tester ที่ทำงานร่วมกับทีมพัฒนาได้อย่างรอบด้าน", "I have hands-on experience in software testing, API testing, full-stack web development, and n8n automation. My goal is to become a well-rounded Software Tester who collaborates effectively with development teams.")}</p></div><div><p class="eyebrow">EDUCATION</p><div class="education"><article><small>2023 — ${tx("ปัจจุบัน", "PRESENT")}</small><h2>${tx("วิทยาการคอมพิวเตอร์และการพัฒนาซอฟต์แวร์", "Computer Science and Software Development")}</h2><p>${tx("มหาวิทยาลัยศรีปทุม · GPAX 3.35 (6 ภาคการศึกษา)", "Sripatum University · GPAX 3.35 (6 semesters)")}</p></article><article><small>2020 — 2023</small><h2>${tx("แผนการเรียนวิทย์-คณิต", "Mathematics-Science program")}</h2><p>${tx("โรงเรียนกาญจนาภิเษกวิทยาลัย · GPAX 3.31", "Kannasootsuksalai School · GPAX 3.31")}</p></article></div></div></section>`;
  }
  function projects() {
    const cards = C.projects
      .map(
        (p, i) =>
          `<article class="project-card p${i + 1}"><div class="project-visual"><span>${p[0]}</span><b>${p[0]}</b></div><div class="project-body"><p class="eyebrow">${tx("PLACEHOLDER / แก้ไขได้", "PLACEHOLDER / EDITABLE")}</p><h2>${esc(tx(p[1], p[2]))}</h2><p>${esc(tx(p[3], p[4]))}</p><div class="project-meta"><span>${esc(tx(p[5], p[6]))}</span><small>${esc(p[7])}</small></div></div></article>`,
      )
      .join("");
    return `${intro("02 / PROJECTS", "ผลงานที่<br><em>กำลังเติบโต</em>", "Work in<br><em>progress</em>", "พื้นที่สำหรับนำเสนอโปรเจกต์จริงของคุณ ทุกการ์ดแก้ไขได้จาก content.js", "A home for your real projects. Every card is editable in content.js.")}<section class="project-grid">${cards}</section><section class="edit-note"><p>${tx("วิธีแก้ไข: เปิดไฟล์ content.js แล้วแทนที่ Project title, บทบาท, คำอธิบาย และเทคโนโลยีของแต่ละการ์ด", "How to edit: open content.js and replace each card’s title, role, description, and technologies.")}</p></section>`;
  }
  function experience() {
    return `${intro("03 / EXPERIENCE", "ประสบการณ์<br><em>ที่ต่อยอด</em>", "Experience<br><em>that grows</em>", "ทั้งการทำงาน การสอน และการเรียนรู้จากสถานการณ์จริง", "Work, teaching, and learning from real-world situations.")}<section class="experience-list"><article class="experience-feature"><small>MAY 2026</small><h2>${tx("ผู้ช่วยสอน (TA) · เวิร์กช็อประบบอัตโนมัติด้วย AI และ n8n", "Teaching Assistant · AI and n8n Automation Workshop")}</h2><p class="org">${tx("มหาวิทยาลัยเกษตรศาสตร์ บางเขน", "Kasetsart University, Bangkhen")}</p><ul><li>${tx("แนะนำผู้เข้าร่วมในการสร้างเวิร์กโฟลว์อัตโนมัติพื้นฐานด้วย n8n", "Guided participants in building basic n8n automation workflows.")}</li><li>${tx("ช่วยแก้ปัญหาการตั้งค่า Node และข้อผิดพลาดระหว่างการทำงาน", "Troubleshot node configuration and workflow errors during hands-on work.")}</li><li>${tx("สนับสนุนกิจกรรมภาคปฏิบัติและตอบคำถามผู้เข้าร่วม", "Supported hands-on activities and answered participant questions.")}</li></ul></article><article class="experience-feature"><small>COMPANY VISIT</small><h2>${tx("ศึกษาดูงานบริษัท · DTGO CampUs", "Company Visit · DTGO CampUs")}</h2><p class="org">DTGO Corporation Limited</p><ul><li>${tx("ศึกษาการดำเนินงาน โครงสร้างองค์กร และระบบเทคโนโลยีอสังหาริมทรัพย์", "Studied internal operations, organisational structure, and property-technology systems.")}</li><li>${tx("เรียนรู้การใช้หุ่นยนต์ เว็บแอป และโมบายแอปเพื่อสนับสนุนเวิร์กโฟลว์", "Learned how robotics, web applications, and mobile apps support workflows.")}</li></ul></article><div class="experience-clusters"><article><p class="eyebrow">ADMINISTRATIVE & SITE OPERATIONS</p><h3>${tx("งานธุรการและสนับสนุนหน้างาน", "Administrative & site support")}</h3><p>${tx("บริษัท แบง-อัพ โปรเจ็คส์ จำกัด — พนักงานธุรการ  · บริษัท แอล พี พี พรอพเพอร์ตี้ มาเนจเมนท์ จำกัด — เจ้าหน้าที่พัสดุ  · บริษัท สมาร์ท เซอร์วิส แอนด์ แมนเนจเม้นท์ จำกัด — Admin ประจำไซต์โครงการ ", "Bang-Up Projects — clerical staff  · LPP Property Management — material officer  · Smart Service and Management — project-site admin ")}</p></article><article><p class="eyebrow">RETAIL & EVENT SUPPORT</p><h3>${tx("งานหน้าร้านและอีเวนต์", "Retail & event support")}</h3><p>${tx("Skechers Thailand — พนักงาน PC , PC Event F&F  · บริษัท ไอดู ฟูดต้า จำกัด — พนักงานเสิร์ฟ ", "Skechers Thailand — PC staff , PC Event F&F  · iFoodta — server ")}</p></article></div></section>`;
  }
  function tools() {
    const cards = C.tools
      .map(
        ([th, en, items]) =>
          `<article class="tool-card"><p class="eyebrow">${tx(th, en)}</p><div>${items.map((item) => `<span>${esc(item)}</span>`).join("")}</div></article>`,
      )
      .join("");
    return `${intro("04 / TOOLS", "เครื่องมือที่<br><em>ผมใช้</em>", "Tools I<br><em>use</em>", "เทคโนโลยีที่สนับสนุนการสร้าง ทดสอบ และทำงานเป็นทีม", "Technology that supports building, testing, and teamwork.")}<section class="tool-grid">${cards}</section><p class="tools-note">${tx("แสดงเฉพาะเครื่องมือที่เลือกนำเสนอในพอร์ตโฟลิโอนี้", "Only the tools selected for this portfolio are shown.")}</p>`;
  }
  function contact() {
    const cards = C.contact
      .map(
        ([name, handle, href, th, en]) =>
          `<a class="contact-card" href="${href}" ${href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}><span>↗</span><h2>${name}</h2><p>${esc(handle)}</p><small>${tx(th, en)}</small></a>`,
      )
      .join("");
    return `${intro("05 / CONTACT", "มาเริ่ม<br><em>พูดคุยกัน</em>", "Let’s start<br><em>a conversation.</em>", "ติดต่อผมได้ผ่านช่องทางที่สะดวกสำหรับคุณ", "Reach me through the channel that works best for you.")}<section class="contact-lead"><a href="mailto:jareyatham.work@gmail.com">jareyatham.work@gmail.com <span>↗</span></a></section><section class="contact-grid">${cards}</section>`;
  }
  function resume() {
    return `${intro("06 / RESUME", "เรซูเม่<br><em>ของผม</em>", "My<br><em>resume</em>", "ดูเรซูเม่ฉบับเต็มในหน้าเว็บ หรือดาวน์โหลดไฟล์ PDF", "View the complete resume here or download the PDF.")}<section class="resume-actions"><a class="button" href="${C.profile.resume}" target="_blank" rel="noopener noreferrer">${tx("เปิด PDF", "OPEN PDF")} ↗</a><a class="text-button" href="${C.profile.resume}" download>${tx("ดาวน์โหลดเรซูเม่", "DOWNLOAD RESUME")} ↓</a></section><section class="resume-frame"><object data="${C.profile.resume}" type="application/pdf" aria-label="Resume of Jareyatham Masong"><p>${tx("เบราว์เซอร์ของคุณไม่รองรับ PDF", "Your browser cannot display PDFs.")} <a href="${C.profile.resume}" download>${tx("ดาวน์โหลดเรซูเม่", "Download the resume")}</a></p></object></section>`;
  }
  function footer() {
    document.querySelector("#site-footer").innerHTML =
      `<div><span>© 2026 ${C.profile.name}</span><span>${tx("สร้างด้วยความตั้งใจ", "MADE WITH INTENT")}</span><a href="#main-content">${tx("ขึ้นด้านบน", "BACK TO TOP")} ↑</a></div>`;
  }
  function render() {
    document.documentElement.lang = lang;
    document.title = `${tx(...pageTitle[page])} — ${C.profile.name}`;
    header();
    document.querySelector("#main-content").innerHTML = {
      home,
      about,
      projects,
      experience,
      tools,
      contact,
      resume,
    }[page]();
    footer();
  }
  render();
  const progress = document.querySelector(".scroll-progress span");
  window.addEventListener(
    "scroll",
    () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.width = `${max ? (scrollY / max) * 100 : 0}%`;
      const hero = document.querySelector(".home-hero");
      if (hero)
        hero.style.setProperty(
          "--hero-shift",
          `${Math.min(scrollY, hero.offsetHeight) * -0.11}px`,
        );
    },
    { passive: true },
  );
})();
