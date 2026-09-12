# Jareyatham Masong — Rainforest Portfolio

Portfolio สองภาษาในบรรยากาศป่าฝน สร้างด้วย React + Vite + TypeScript + Tailwind CSS พร้อม GSAP/ScrollTrigger, Lenis และ Motion

## เปิดเว็บไซต์บนเครื่อง

ต้องการ Node.js 22.12 ขึ้นไป และ npm

```sh
npm ci
npm run dev
```

เปิด http://127.0.0.1:5173 โดยใช้ HTTP Server เสมอ ไม่เปิด `index.html` ด้วย `file://`

สำหรับเครื่องนี้ หากคำสั่ง `npm` ชี้ไปยังไฟล์ที่ไม่มีอยู่ ให้ใช้คำสั่งตามชนิด Terminal:

**Command Prompt (cmd)** — ต้องใส่เครื่องหมายคำพูดคู่รอบพาธที่มีช่องว่าง และเรียกไฟล์ npm ผ่าน Node.js:

```bat
"C:\Program Files\nodejs\node.exe" "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" ci
"C:\Program Files\nodejs\node.exe" "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" run dev
```

**PowerShell:**

```powershell
node 'C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js' ci
node 'C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js' run dev
```

เมื่อมี dependencies แล้ว สามารถดับเบิลคลิก `Start-Portfolio.cmd` ได้ หากมีเซิร์ฟเวอร์เดิมเปิดอยู่ที่พอร์ต 5173 ให้ใช้หน้าต่างเดิม

```sh
npm run build    # TypeScript + production build → dist/
npm run preview  # ดู production build ที่ http://127.0.0.1:4173
npm test        # ทดสอบพฤติกรรมของ Component และข้อมูล
```

โปรเจกต์นี้ตั้งค่าให้ GitHub Actions เผยแพร่ไปยัง GitHub Pages แล้ว และไม่ได้เชื่อมฐานข้อมูลหรือบริการเก็บข้อความ

## หน้าและระบบที่มี

- Home, About, Projects, Experience, Tools, Contact, Resume และหน้า 404
- ภาษาไทยเริ่มต้น พร้อม EN; เก็บข้อความแยกใน `src/translations/` มี TypeScript ตรวจคีย์ตรงกัน
- Theme เริ่มต้นตามระบบ เก็บตัวเลือกภาษาและธีมใน Local Storage; เมื่อปิด Storage ยังใช้งานได้ในหน้าปัจจุบัน
- Hero ใช้ภาพเช้า/กลางคืนแบบ crossfade, หมอก, ละออง, ใบไม้ และ Parallax
- Desktop ที่ใช้เมาส์มี Lenis; Tablet/Mobile ใช้ Native Scroll พร้อมลดเอฟเฟกต์
- `prefers-reduced-motion` ปิด Parallax, continuous motion และ transition
- เมนูมือถือและ Gallery ใช้ native `<dialog>` รองรับ Escape และคืน Focus
- Resume ลด Motion และมีภาพ preview ของ PDF ต้นฉบับ พร้อมเปิด/ดาวน์โหลดไฟล์

## แก้ข้อมูล

| เนื้อหา                            | ไฟล์                              |
| ---------------------------------- | --------------------------------- |
| ชื่อ เมนู Heading ข้อความ UI       | `src/translations/th.ts`, `en.ts` |
| เรื่องราว เป้าหมาย สิ่งที่มุ่งเน้น | `src/data/about.ts`               |
| การศึกษา                           | `src/data/education.ts`           |
| ผลงาน                              | `src/data/projects.ts`            |
| ประสบการณ์และภาพกิจกรรม            | `src/data/experience.ts`          |
| เครื่องมือและคำอธิบาย              | `src/data/tools.ts`               |
| ช่องทางติดต่อ                      | `src/data/socials.ts`             |
| ไฟล์ Resume                        | `src/data/resume.ts`              |

### เพิ่มผลงาน

เพิ่ม object ใน `projects` ตาม type `Project` ตัวอย่างโครงสร้าง (ข้อมูลสาธิตนี้ไม่ได้แสดงบนเว็บไซต์):

```ts
{
  id: 'unique-project-id',
  slug: 'project-slug',
  name: { th: 'ชื่อผลงานจริง', en: 'Actual project name' },
  description: { th: 'รายละเอียดที่ยืนยันได้', en: 'Verified description' },
  role: { th: 'บทบาทของคุณ', en: 'Your role' },
  stack: ['React', 'Node.js'],
  categories: ['web', 'fullstack'],
  // year, cover, github, demo, detailUrl ใส่เมื่อมีข้อมูลจริง
}
```

หมวดที่รองรับ: `web`, `fullstack`, `backend`, `automation`, `ai`, `data`, `other` ผลงานหนึ่งรายการมีได้หลายหมวด

หน้า Home แสดง 2 ผลงานแรกจากข้อมูลเดียวกันโดยอัตโนมัติ เมื่อยังไม่มีข้อมูลจะแสดงสถานะกำลังเตรียมผลงาน

เก็บภาพไว้ใน `public/images/projects/` แล้วกำหนด `cover: { src: '/images/projects/your-cover.webp', alt: { th: '...', en: '...' } }` ไม่ต้องใส่ URL เปล่าหรือ `#` สำหรับลิงก์ที่ยังไม่มี

ยังไม่สร้างหน้า Project Detail ในเวอร์ชันแรก `slug` เตรียมไว้สำหรับการต่อยอด; เพิ่ม `detailUrl` เฉพาะเมื่อปลายทางมีอยู่จริง

### เพิ่มรูปกิจกรรมและช่วงเวลา

ใน `experiences` เพิ่มรูปใน `images` ด้วย `{ src, alt: { th, en }, caption?: { th, en } }` เมื่อมีรูปมากกว่าหนึ่งภาพ Gallery จะมีปุ่มก่อนหน้า/ถัดไป และใช้ปุ่มลูกศรบนคีย์บอร์ดได้

แต่ละองค์กรมี `name`, `role` และ `period?: { th, en }` ของตัวเอง จึงรวมงานในหมวดเดียวโดยไม่สูญเสียชื่อบริษัทหรือช่วงเวลา

### เพิ่ม Resume ภาษาไทย

เก็บ PDF และภาพ preview ใน `public/resume/` แล้วเปลี่ยน `resumes.th` จาก `null` เป็น:

```ts
{ path: '/resume/jareyatham-masong-th.pdf', preview: '/resume/preview-th.webp', pages: 1 }
```

ปุ่มดาวน์โหลดบน Home จะเลือกไฟล์ตามภาษาเว็บไซต์ หากภาษานั้นยังไม่มีไฟล์จะเลือกอีกภาษาที่มีอยู่และแสดง TH/EN ชัดเจน หากไม่มีทั้งสองภาษา ปุ่มจะพาไปหน้า Resume แทนการสร้างลิงก์ดาวน์โหลดที่ใช้ไม่ได้

English Resume ปัจจุบันคัดลอกตรงจาก `C:/Users/user/Downloads/Resume.pdf` ไม่ได้แก้เอกสาร รูปโปรไฟล์ดึงจากภาพที่ฝังใน PDF และใช้ข้อมูลเดือนพฤษภาคม 2026 สำหรับเวิร์กช็อป TA

หน้า Projects ยังว่างตามข้อตกลง แม้ Resume จะกล่าวถึงผลงาน 2 ชิ้น ยังไม่เพิ่มการ์ดจนกว่าจะคัดเลือกและเตรียมเนื้อหาสำหรับเว็บไซต์ รูปกิจกรรมและช่วงเวลางานอื่นที่ไม่มีข้อมูลถูกซ่อนไว้

## งานภาพและประสิทธิภาพ

ภาพตกแต่งสร้างด้วย built-in Imagegen และบีบอัดเป็น WebP สองขนาด เก็บทั้งหมดใน `public/images/` ไม่มีการสร้างภาพบุคคลหรือกิจกรรมขึ้นแทนเหตุการณ์จริง ดูคำสั่งสร้างภาพใน `ASSETS.md`

ฟอนต์ Manrope และ Noto Sans Thai จัดเก็บผ่านแพ็กเกจในโปรเจกต์ ไม่เรียก Google Fonts ขณะใช้งาน โลโก้เทคโนโลยีมาจาก Simple Icons และไอคอน UI จาก Lucide; เครื่องมือที่เป็นแนวคิด เช่น REST API ใช้ไอคอนเชิงหน้าที่

ใช้ GSAP กับเอฟเฟกต์ตาม Scroll และ Motion กับ Transition ของหน้าคนละ Element โหลดชุด Scroll Motion แยกจากหน้าแรกและเก็บกวาด ScrollTrigger/Lenis เมื่อเปลี่ยนหน้า

## GitHub Pages

Workflow `.github/workflows/deploy.yml` จะทำงานเมื่อ push เข้า `main`, ติดตั้ง dependencies, รัน `npm run build:github` และเผยแพร่เฉพาะโฟลเดอร์ `dist/`

คำสั่ง `build:github` ตั้ง base path เป็น `/Portfolio.github.io/` ส่วน `publicAsset()` เติม base path ให้รูป ไอคอน และ Resume โดยอัตโนมัติ ไฟล์ `dist/404.html` เป็น SPA fallback สำหรับการเปิด `/about`, `/projects` หรือหน้าอื่นโดยตรง และเส้นทาง `/index.html` จะเปลี่ยนกลับไปหน้า Home

ใน GitHub ให้ตั้ง `Settings → Pages → Source` เป็น `GitHub Actions` เว็บไซต์จะอยู่ที่ `https://jareyatham-mas.github.io/Portfolio.github.io/` และลิงก์เดิมที่ลงท้าย `/index.html` ยังใช้งานได้

## ผลตรวจ

ดู `QA.md` สำหรับรายการตรวจและข้อจำกัดที่ทราบ
