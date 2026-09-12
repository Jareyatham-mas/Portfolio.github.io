import type { Localized } from "../context";
export const toolCategories = [
  { id: "web", label: { th: "พัฒนาเว็บไซต์", en: "Web Development" } },
  {
    id: "data",
    label: { th: "ภาษาและฐานข้อมูล", en: "Languages & Databases" },
  },
  { id: "testing", label: { th: "การทดสอบและ API", en: "Testing & API" } },
  {
    id: "workflow",
    label: {
      th: "เวิร์กโฟลว์และการทำงานร่วมกัน",
      en: "Workflow & Collaboration",
    },
  },
] as const;
type Category = (typeof toolCategories)[number]["id"];
export type Tool = {
  name: string;
  category: Category;
  icon?: string;
  description: Localized;
};
export const tools: Tool[] = [
  {
    name: "HTML",
    category: "web",
    icon: "html5",
    description: {
      th: "โครงสร้างเนื้อหาเว็บไซต์ที่มีความหมายและเข้าถึงได้",
      en: "Semantic, accessible structure for web content.",
    },
  },
  {
    name: "CSS",
    category: "web",
    icon: "css",
    description: {
      th: "จัดรูปแบบ เลย์เอาต์ และการแสดงผลหลายขนาดจอ",
      en: "Styling, layouts, and responsive interfaces.",
    },
  },
  {
    name: "JavaScript",
    category: "web",
    icon: "javascript",
    description: {
      th: "เพิ่มการโต้ตอบและตรรกะให้เว็บแอปพลิเคชัน",
      en: "Interactions and application logic for the web.",
    },
  },
  {
    name: "React",
    category: "web",
    icon: "react",
    description: {
      th: "สร้างส่วนติดต่อผู้ใช้จาก Component ที่นำกลับมาใช้ได้",
      en: "Component-based interfaces for web applications.",
    },
  },
  {
    name: "Node.js",
    category: "web",
    icon: "nodedotjs",
    description: {
      th: "พัฒนาระบบฝั่งเซิร์ฟเวอร์ด้วย JavaScript",
      en: "Server-side development with JavaScript.",
    },
  },
  {
    name: "Express.js",
    category: "web",
    icon: "express",
    description: {
      th: "สร้าง Web Server และ API บน Node.js",
      en: "Web servers and APIs on Node.js.",
    },
  },
  {
    name: "ASP.NET MVC",
    category: "web",
    icon: "dotnet",
    description: {
      th: "พัฒนาเว็บแอปพลิเคชันตามสถาปัตยกรรม MVC",
      en: "Web applications following MVC architecture.",
    },
  },
  {
    name: "Python",
    category: "data",
    icon: "python",
    description: {
      th: "เขียนสคริปต์ ประมวลผลข้อมูล และสร้างระบบอัตโนมัติ",
      en: "Scripting, data processing, and automation.",
    },
  },
  {
    name: "C#",
    category: "data",
    icon: "dotnet",
    description: {
      th: "พัฒนาแอปพลิเคชันและระบบ Backend บน .NET",
      en: "Application and backend development with .NET.",
    },
  },
  {
    name: "SQL",
    category: "data",
    description: {
      th: "ค้นหาและจัดการข้อมูลในฐานข้อมูลเชิงสัมพันธ์",
      en: "Querying and managing relational data.",
    },
  },
  {
    name: "MySQL",
    category: "data",
    icon: "mysql",
    description: {
      th: "ฐานข้อมูลเชิงสัมพันธ์สำหรับเว็บแอปพลิเคชัน",
      en: "Relational databases for web applications.",
    },
  },
  {
    name: "SQL Server",
    category: "data",
    description: {
      th: "ออกแบบตาราง ความสัมพันธ์ และธุรกรรมข้อมูล",
      en: "Relational modeling, queries, and transactions.",
    },
  },
  {
    name: "MongoDB",
    category: "data",
    icon: "mongodb",
    description: {
      th: "จัดเก็บข้อมูลแบบ Document",
      en: "Document-oriented data storage.",
    },
  },
  {
    name: "Postman",
    category: "testing",
    icon: "postman",
    description: {
      th: "ทดสอบ API ตรวจ Request, Response และ Error",
      en: "Testing API requests, responses, and errors.",
    },
  },
  {
    name: "Swagger",
    category: "testing",
    icon: "swagger",
    description: {
      th: "อ่านและทดสอบเอกสาร API",
      en: "Exploring API documentation and endpoints.",
    },
  },
  {
    name: "REST API",
    category: "testing",
    description: {
      th: "ออกแบบและเชื่อมต่อบริการผ่าน HTTP",
      en: "Designing and connecting services over HTTP.",
    },
  },
  {
    name: "Test Case Design",
    category: "testing",
    description: {
      th: "ออกแบบกรณีทดสอบพฤติกรรมและเงื่อนไขของระบบ",
      en: "Designing test cases for behavior and edge conditions.",
    },
  },
  {
    name: "Bug Reporting",
    category: "testing",
    description: {
      th: "บันทึกปัญหา ขั้นตอนทำซ้ำ และผลลัพธ์ที่คาดหวัง",
      en: "Documenting issues, reproduction steps, and expected results.",
    },
  },
  {
    name: "n8n",
    category: "workflow",
    icon: "n8n",
    description: {
      th: "เชื่อมต่อบริการและสร้าง Workflow Automation",
      en: "Connecting services and automating workflows.",
    },
  },
  {
    name: "Git",
    category: "workflow",
    icon: "git",
    description: {
      th: "จัดการเวอร์ชันและการเปลี่ยนแปลงของโค้ด",
      en: "Version control and source history.",
    },
  },
  {
    name: "GitHub",
    category: "workflow",
    icon: "github",
    description: {
      th: "เก็บซอร์สโค้ดและทำงานร่วมกันผ่าน Repository",
      en: "Source hosting and repository collaboration.",
    },
  },
  {
    name: "Docker",
    category: "workflow",
    icon: "docker",
    description: {
      th: "จัดสภาพแวดล้อมแอปพลิเคชันด้วย Container",
      en: "Consistent application environments with containers.",
    },
  },
  {
    name: "Trello",
    category: "workflow",
    icon: "trello",
    description: {
      th: "วางแผนและติดตามงานร่วมกับทีม",
      en: "Planning and tracking work with a team.",
    },
  },
];
