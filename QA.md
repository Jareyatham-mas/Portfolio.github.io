# ผลตรวจ Portfolio เวอร์ชันแรก

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
