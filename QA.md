# ผลตรวจ Portfolio

## อัปเดต Resume สองภาษา — 6 ตุลาคม 2026

- `Resume (1).pdf` เป็นภาษาอังกฤษ และ `Resume (2).pdf` เป็นภาษาไทย ตรวจแล้วเป็น PDF หน้าเดียวขนาด A4 ทั้งคู่; คัดลอกไฟล์โดยไม่แก้เนื้อหาและเรนเดอร์ภาพ Preview จาก PDF แต่ละฉบับ
- SHA-256 ของไฟล์บนเว็บตรงกับไฟล์ที่ได้รับ: EN `F70A4292A77467F78EE137255711BD2C075D0B43785C3BC104F8B2D1F7D3D62C`; TH `F66B2DF33F6EE1D79633170625D7FB4DABB7E4DF438EDA9BE48AF8F35586B0F6`
- `npm test` ผ่าน 13/13; `npm run build` และ `npm run build:github` ผ่าน; `git diff --check` ไม่พบ whitespace error
- ตรวจหน้า Resume จาก GitHub Pages build ใน local preview: ค่าเริ่มต้นเป็น PDF ไทยเมื่อเว็บภาษาไทย, เลือกไฟล์อังกฤษได้, สลับภาษาเว็บแล้วกลับไปเลือกไฟล์ตรงภาษา, ภาพ Preview โหลดครบและไม่มี horizontal overflow
- PDF และภาพ Preview ทั้งสี่ไฟล์ตอบ HTTP 200 ด้วย Content-Type ที่ถูกต้อง; ดาวน์โหลด PDF ภาษาไทยผ่านปุ่มใน Browser ได้จริง

## ตรวจความพร้อมเพื่อแทนเว็บเดิม — 17 กันยายน 2026

ผู้ใช้อนุมัติให้นำดีไซน์ที่ตรวจแล้วขึ้นแทนเว็บเดิมใน repository `Jareyatham-mas/Portfolio.github.io` บน branch `main` โดยใช้ workflow GitHub Pages เดิม ตรวจ source เทียบแผนแล้วมีครบทั้ง 7 หน้า, คำแปล TH/EN, Light/Dark, responsive, filters, gallery, contact และ Resume

รายการผลงานจริง รูปกิจกรรม และ Resume ภาษาไทยยังไม่ได้เพิ่มตามขอบเขตที่ตกลงไว้ ไม่ถือเป็นข้อมูลที่สร้างเสร็จแล้ว; หน้าเว็บแสดงสถานะที่ตรงกับข้อมูลจริง และระบบรองรับการเพิ่มภายหลัง

การเผยแพร่ใช้ commit ใหม่ต่อจากประวัติเดิม ไม่มี force push และไม่รวมโฟลเดอร์ Oreo หรือไฟล์ QA ชั่วคราว ผลตรวจหลังเผยแพร่จะรายงานแยกจากผลทดสอบในเครื่องด้านล่าง

## รอบปรับดีไซน์สำหรับ HR — 17 กันยายน 2026

ปรับเป็น Portfolio ที่เน้นชื่อและ Software Development & Testing ใช้พื้นเรียบ สีเขียว และ SVG ใบไม้ขนาดเล็กใน Home/Contact แทนภาพป่า ลบ Rainforest component, environmental CSS และ GSAP parallax ที่เลิกใช้แล้ว ยังคง 7 หน้า TH/EN, Light/Dark และระบบข้อมูลเดิม

### Build และโค้ด

- `npm run build` และ `npm run build:github` ผ่านหลังแก้ CSS รอบสุดท้าย
- `npm test` ผ่าน 13/13 รายการเดิม; เอา mock ของ Rainforest component ที่ถูกลบออก
- TypeScript ของแอปและ local QA harness ผ่าน; คีย์คำแปล TH/EN ตรงกัน
- ไม่พบการอ้างอิงภาพ morning/night/leaves หรือเอฟเฟกต์ fog/particle เดิมใน source และ JavaScript/CSS ที่ build แล้ว ไฟล์ภาพเก่ายังเก็บไว้ใน public แต่หน้าเว็บไม่เรียกใช้
- PDF เดิมไม่เปลี่ยน SHA-256: `258DB612578A1EC4B2676CF088926F344A81AA1049F9CAE1758020F05E9ED1A3`
- ไม่เปลี่ยน schemas ของ Projects, Experience, Contact หรือ workflow/base path/SPA fallback
- ไม่เพิ่มผลงานหรือภาพกิจกรรม และไม่แก้โฟลเดอร์ Oreo
- รอบตรวจดีไซน์นี้ส่งมอบ local preview ก่อน; การอนุมัติให้เผยแพร่ภายหลังระบุในหัวข้อด้านบน

### Responsive และการอ่าน

ตรวจ Home, About, Projects, Experience, Tools, Contact และ Resume ผ่านเบราว์เซอร์ Chromium ในแอป โดยรอฟอนต์โหลดครบก่อนวัด layout:

| ความกว้าง | TH/EN × Light/Dark × 7 หน้า ที่ 100% | ชุดเดียวกันที่ข้อความ 200% |
| --- | --- | --- |
| 360 px | ผ่าน 28 กรณี | ผ่าน 28 กรณี |
| 390 px | ผ่าน 28 กรณี | ผ่าน 28 กรณี |
| 768 px | ผ่าน 28 กรณี | ผ่าน 28 กรณี |
| 1024 px | ผ่าน 28 กรณี | ผ่าน 28 กรณี |
| 1440 px | ผ่าน 28 กรณี | ผ่าน 28 กรณี |

รวม 280 รูปแบบการแสดงผล ตรวจซ้ำกรณีที่พบปัญหาหลังแก้แล้ว ไม่พบ horizontal overflow, H1 ซ้ำ, ภาพเสียที่โหลดแล้ว หรือกรอบ SVG ทับเนื้อหา Hero/Contact

- ที่ข้อความ 100% ชื่อ สายงาน และ CTA อยู่ในจอแรก; ขอบล่างกลุ่ม CTA สูงสุดประมาณ 649 px ในชุดตรวจ ปรับความสูง Hero ตามเนื้อหา ไม่มี fixed-height clipping
- ภาพหน้าจอที่ตรวจด้วยสายตาครอบคลุม Hero Light/Dark บน Desktop และ Hero บนมือถือ
- แก้คำยาวเมื่อขยายตัวอักษรให้ตัดบรรทัดได้ แทนการซ่อน overflow; ข้อความ 200% ยืดความสูงหน้าได้ตามปกติ
- SVG เป็น aria-hidden และ pointer-events: none ไม่มี animation ต่อเนื่อง; เว้นพื้นที่จากข้อความและซ่อน ornament ของ Hero บนมือถือ
- การตรวจ 200% ใช้ `tmp/qa/text-scale.html` ซึ่ง render App/Component จริงด้วย MemoryRouter และ root font 32px ไม่ใช่ browser zoom หรืออุปกรณ์จริง

### การใช้งานและ Motion

- สลับภาษา/ธีมแล้ว Reload: จำ EN/Dark ได้ และ H1 เปลี่ยนเป็นชื่อภาษาอังกฤษ
- เมนูมือถือแสดง 7 รายการ; Escape ปิดเมนูและคืน focus ให้ปุ่มเปิดเมนู
- ใช้ Tab จาก brand ไปปุ่มภาษาได้พร้อม focus outline; เลือกหน้า Contact จากเมนูแล้วปิด dialog และย้าย focus เข้า main
- ลิงก์เลื่อนลงจาก Hero ไปยังส่วนเนื้อหาใช้งานได้ พร้อม Scroll Reveal; page transition ยังคงสั้น
- จำลอง `matchMedia(prefers-reduced-motion)` ใน local harness: ทั้ง 7 หน้าแสดงเนื้อหาครบ ไม่มี data-reveal ถูกซ่อน และ Motion รับสถานะ reduced-motion
- ตรวจ source ของ CSS media query ที่ปิด transition/animation และ smooth scroll ร่วมด้วย การจำลองข้างต้นทดสอบฝั่ง JavaScript ไม่ได้เปลี่ยน accessibility setting ของระบบปฏิบัติการจริง
- Contact เรียง GitHub, Email, LinkedIn, Facebook, Instagram, LINE ตามเดิม; ตรวจ href ครบ, social เปิดแท็บใหม่พร้อม rel, Email เป็น mailto ไม่ได้ส่งข้อความหรือทดสอบการตอบกลับของบัญชีภายนอก
- Resume มี Preview, เปิด PDF และดาวน์โหลด; คลิกดาวน์โหลดจริงได้รับ download event; เมื่อเลือกภาษาไทยแสดงสถานะกำลังเตรียมเอกสารและไม่มีลิงก์ดาวน์โหลดที่เสีย

### GitHub Pages บนเครื่อง

- ใช้ `npm run preview -- --base=/Portfolio.github.io/` หลัง build:github
- `/Portfolio.github.io/index.html` redirect กลับหน้า Home ได้จริง
- HTML, Projects route, 404 fallback, JS, CSS, avatar, Resume PDF และ preview image ตอบ HTTP 200 พร้อม Content-Type ถูกต้อง
- `dist/index.html` และ `dist/404.html` มีเนื้อหาเหมือนกัน; script entry ชี้ compiled asset ภายใต้ repository base ไม่มี `/src/main.tsx`
- Preview server ต้องใช้ base เดียวกับ build มิฉะนั้น Vite fallback จะตอบ HTML แทนไฟล์ asset; เพิ่มคำสั่งที่ถูกต้องใน README แล้ว

### ข้อจำกัดของผลตรวจรอบนี้

ยังไม่ได้ตรวจบน Safari/iOS, อุปกรณ์จริง, screen reader จริง หรือเว็บหลัง Deploy และยังไม่ได้วัด Lighthouse ใหม่ คะแนนด้านล่างเป็นประวัติของดีไซน์ป่าฝนเดิม ไม่ใช่คะแนนของดีไซน์ปัจจุบัน

---

# ประวัติผลตรวจ Portfolio เวอร์ชันแรก (ดีไซน์เดิม)

ตรวจวันที่ 12 กันยายน 2026 บนเครื่อง Windows รวมการจำลอง production build สำหรับ GitHub Pages

## สถานะงาน

| Phase | สิ่งที่ส่งมอบ | สถานะ |
| --- | --- | --- |
| 1 | React/Vite/TypeScript, Routing, TH/EN, Light/Dark | พร้อม |
| 2 | Navigation และ Home | พร้อม |
| 3 | About พร้อมการศึกษาและเนื้อหาทั้ง 5 ส่วน | พร้อม |
| 4 | ระบบ Projects, Filter, Card, Home Preview | พร้อม; ยังไม่มีรายการผลงาน |
| 5 | Experience 4 หมวด พร้อมระบบ Gallery | พร้อม; รอรูปกิจกรรม |
| 6 | Tools 23 รายการ พร้อม Filter | พร้อม |
| 7 | Contact 6 ช่องทาง และ Resume | พร้อม; มีไฟล์ Resume ภาษาอังกฤษ |
| 8 | Motion, ScrollTrigger, Lenis และ Page Transition | พร้อม |
| 9 | ภาพป่าเช้า/กลางคืน หมอก ใบไม้ ละออง และ Parallax | พร้อม |
| 10 | Responsive, ลด Motion และปรับขนาด Assets | ตรวจแล้วตามขอบเขตด้านล่าง |

## Build และชุดทดสอบ

- `npm run build` ผ่าน TypeScript และ Vite production build
- หลังตรวจข้อผิดพลาดใน VS Code เพิ่ม `vite/client` types สำหรับ CSS import และ tsconfig แยกของไฟล์ QA; ตรวจ `tsc --noEmit -p tsconfig.json` และ `tsc --noEmit -p tmp/qa/tsconfig.json` ผ่านทั้งคู่
- `npm run build:github` ผ่าน และสร้าง `dist/index.html` กับ `dist/404.html` ที่มีเนื้อหาเดียวกันสำหรับ SPA fallback
- ตรวจ preview ใต้ `/Portfolio.github.io/`: หน้า `/`, `/index.html`, `/projects`, JavaScript, CSS, avatar และ Resume PDF ตอบสถานะ 200
- `npm test` ผ่าน 13 การทดสอบใน `src/test/portfolio.test.tsx`
- ทดสอบคีย์คำแปล, Filter หลายหมวด, Project Card เมื่อข้อมูลไม่ครบ, การแสดงผลงานใหม่บน Home, การจำภาษา/ธีม, Storage ถูกปิด, Tools Filter, Resume fallback และ Gallery
- Gallery ทดสอบเปิด/ปิด สลับภาพ วนกลับภาพแรก และคืน Focus ใน jsdom ซึ่งจำลอง native dialog; ยังไม่มีภาพกิจกรรมจริงให้ตรวจการจัดวาง
- `git diff --check` ไม่พบปัญหา whitespace ใน diff
- PDF ที่เว็บไซต์ใช้มี SHA-256 ตรงกับไฟล์ Resume.pdf ที่ผู้ใช้ให้มา ไม่มีการแก้เนื้อหาเอกสาร

## ตรวจการใช้งานในเบราว์เซอร์

- ตรวจทั้ง 7 หน้า: Home, About, Projects, Experience, Tools, Contact และ Resume
- ตรวจความกว้าง 360, 390, 768, 1024 และ 1440 px ครอบคลุมภาษาไทย/อังกฤษ และธีมสว่าง/มืด
- ไม่พบหน้าเลื่อนออกด้านข้าง, ภาพที่โหลดแล้วเสีย หรือ H1 ซ้ำในหน้าที่ตรวจ
- ตรวจขนาดตัวอักษร 200% ด้วย local harness ที่ใช้ Component จริงและ root font 32px ที่ความกว้าง 360 และ 1440 px ทุกหน้า ไม่พบ horizontal overflow หรือปุ่ม Navigation ถูกตัด การตรวจนี้ไม่ใช่ browser zoom หรืออุปกรณ์จริง
- ตรวจสลับภาษา/ธีมและ Reload เพื่อยืนยันการจำตัวเลือก
- เมนูมือถือเปิด/ปิดด้วย Escape ได้ และคืน Focus ให้ปุ่มเปิดเมนู; เมื่อเปลี่ยนหน้า Focus ไปยังเนื้อหา
- ตรวจเลื่อนหน้า Home เพื่อให้ส่วนที่ซ่อนไว้สำหรับ Scroll Reveal แสดงขึ้นตามลำดับ
- ตรวจหน้า Projects ว่างและการเลือก Filter; หน้า Resume มี Preview, เปิด PDF และลิงก์ดาวน์โหลด ส่วนภาษาไทยที่ยังไม่มีไฟล์แสดงสถานะเตรียมเอกสาร
- ตรวจแยก Property ของ Motion/GSAP และ cleanup; `prefers-reduced-motion` ปิดเอฟเฟกต์ต่อเนื่องและ Parallax โดยไม่ซ่อนเนื้อหา

## Lighthouse

วัด production build บน `http://127.0.0.1:4173/` ด้วย Lighthouse 12.6.1, Edge แบบ headless และโปรไฟล์ใหม่ ใช้การจำลองมือถือและค่า throttling เริ่มต้น

| หมวด | คะแนน |
| --- | ---: |
| Performance | 92 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

FCP 2.0 วินาที · LCP 3.0 วินาที · Total Blocking Time 110 ms · CLS 0.001

หลังแก้ชื่อปุ่มภาษา ตรวจ Accessibility ซ้ำเฉพาะหมวดได้ 100 และรายการตรวจชื่อที่มองเห็นกับชื่อสำหรับโปรแกรมอ่านหน้าจอผ่านแล้ว ไม่พบ binary audit ที่ไม่ผ่านในหมวดนี้

คะแนนเป็นการวัดในเครื่องครั้งหนึ่ง อาจเปลี่ยนตามเครื่อง เครือข่าย โฮสต์ และเนื้อหาที่เพิ่มภายหลัง ไม่ใช่ผลรับรอง Accessibility ครบทุกข้อหรือผลบนอุปกรณ์จริง

## สิ่งที่ยังรอเนื้อหา

- ผลงานจริงใน `src/data/projects.ts` และภาพปก/ลิงก์ที่ยืนยันได้ หน้า Home จะดึง 2 รายการแรกอัตโนมัติ
- รูปกิจกรรมสำหรับ Gallery และช่วงเวลางานที่ยังไม่มีข้อมูล
- PDF และภาพ Preview ของ Resume ภาษาไทย
- หน้า Project Detail เป็นส่วนต่อยอดในอนาคตตามแผนเวอร์ชันแรก

## ขอบเขตที่ยังไม่ได้ตรวจ

- อุปกรณ์จริง, Safari/iOS และโปรแกรมอ่านหน้าจอจริง
- ผลการให้บริการหลัง Deploy, HTTP cache, SPA rewrite, analytics และ social preview บนโดเมนจริง
- Contact ใช้ลิงก์ภายนอกและ mailto ไม่มี backend รับข้อความ และไม่ได้ส่งข้อความไปยังช่องทางใด

ไฟล์ตรวจชั่วคราวและ Lighthouse JSON อยู่ใน `tmp/qa/` ซึ่งถูก gitignore และไม่รวมใน production build ดูวิธีอัปเดตเนื้อหาและเปิดโปรเจกต์ใน `README.md`
