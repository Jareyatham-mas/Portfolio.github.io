import type { Localized } from "../context";
export type GalleryImage = { src: string; alt: Localized; caption?: Localized };
export type Experience = {
  id: string;
  category: Localized;
  title: Localized;
  organizations: { name: Localized; role: Localized; period?: Localized }[];
  details: Localized[];
  images: GalleryImage[];
};
export const experiences: Experience[] = [
  {
    id: "teaching",
    category: {
      th: "ผู้ช่วยสอนและสนับสนุนเวิร์กช็อป",
      en: "Teaching Assistant / Workshop Support",
    },
    title: {
      th: "เวิร์กช็อประบบอัตโนมัติด้วย AI และ n8n",
      en: "AI-Powered Automation with n8n",
    },
    organizations: [
      {
        name: {
          th: "มหาวิทยาลัยเกษตรศาสตร์ บางเขน",
          en: "Kasetsart University, Bangkhen",
        },
        role: { th: "ผู้ช่วยสอน (TA)", en: "Teaching Assistant (TA)" },
        period: { th: "พฤษภาคม 2026", en: "May 2026" },
      },
    ],
    details: [
      {
        th: "แนะนำผู้เข้าร่วมในการสร้าง Workflow Automation พื้นฐานด้วย n8n",
        en: "Guided participants in creating basic automation workflows with n8n.",
      },
      {
        th: "ช่วยอธิบายการเชื่อมต่อ Node และ Logic ภายใน Workflow",
        en: "Explained node connections and the logic within workflows.",
      },
      {
        th: "ช่วยตรวจสอบและแก้ไขปัญหาเกี่ยวกับ Node Configuration",
        en: "Helped review and troubleshoot node configuration issues.",
      },
      {
        th: "ช่วยแก้ Error ที่เกิดขึ้นระหว่างการทำ Workshop",
        en: "Assisted with errors encountered during the workshop.",
      },
      {
        th: "สนับสนุนกิจกรรมภาคปฏิบัติ",
        en: "Supported hands-on workshop activities.",
      },
      {
        th: "ตอบคำถามและช่วยผู้เข้าร่วมเมื่อพบปัญหาระหว่างการทดลองใช้งาน",
        en: "Answered questions and helped participants work through problems during practice.",
      },
    ],
    images: [],
  },
  {
    id: "company-visit",
    category: {
      th: "ศึกษาดูงานและเรียนรู้เทคโนโลยี",
      en: "Company Visit / Technology Learning",
    },
    title: {
      th: "ศึกษาดูงานบริษัท · DTGO CampUs",
      en: "Company Visit · DTGO CampUs",
    },
    organizations: [
      {
        name: {
          th: "DTGO Corporation Limited",
          en: "DTGO Corporation Limited",
        },
        role: { th: "ผู้เข้าร่วมศึกษาดูงาน", en: "Company Visit Participant" },
      },
    ],
    details: [
      {
        th: "ศึกษาภาพรวมการดำเนินงานภายในองค์กร",
        en: "Explored an overview of the organization’s operations.",
      },
      {
        th: "เรียนรู้เกี่ยวกับโครงสร้างและการบริหารจัดการภายในบริษัท",
        en: "Learned about the company’s structure and management.",
      },
      {
        th: "ศึกษาการนำเทคโนโลยีมาใช้ในธุรกิจอสังหาริมทรัพย์",
        en: "Learned how technology is applied in the real estate business.",
      },
      {
        th: "เรียนรู้การใช้ Technology เพื่อสนับสนุน Workflow ภายในองค์กร",
        en: "Explored the use of technology to support internal workflows.",
      },
      {
        th: "ศึกษาการนำ Robot, Web Application และ Mobile Application มาใช้ร่วมกับกระบวนการทำงาน",
        en: "Observed how robots, web applications, and mobile applications support work processes.",
      },
    ],
    images: [],
  },
  {
    id: "administrative",
    category: {
      th: "งานธุรการ พัสดุ และสนับสนุนหน้างาน",
      en: "Administrative & Site Support",
    },
    title: {
      th: "สนับสนุนการทำงานเบื้องหลัง",
      en: "Supporting day-to-day operations",
    },
    organizations: [
      {
        name: {
          th: "บริษัท แบง-อัพ โปรเจ็คส์ จำกัด",
          en: "Bang-Up Projects Co., Ltd.",
        },
        role: { th: "พนักงานธุรการ", en: "Administrative Staff" },
      },
      {
        name: {
          th: "บริษัท แอล พี พี พรอพเพอร์ตี้ มาเนจเมนท์ จำกัด",
          en: "LPP Property Management Co., Ltd.",
        },
        role: { th: "เจ้าหน้าที่พัสดุ", en: "Materials Officer" },
      },
      {
        name: {
          th: "บริษัท สมาร์ท เซอร์วิส แอนด์ แมนเนจเม้นท์ จำกัด",
          en: "Smart Service and Management Co., Ltd.",
        },
        role: {
          th: "Admin ประจำไซต์โครงการ",
          en: "Project Site Administrator",
        },
      },
    ],
    details: [
      {
        th: "สนับสนุนงานด้านเอกสารและงานธุรการ",
        en: "Supported documentation and administrative tasks.",
      },
      {
        th: "จัดการข้อมูลและเอกสารภายในหน่วยงาน",
        en: "Organized internal records and documents.",
      },
      {
        th: "สนับสนุนการประสานงานภายในไซต์โครงการ",
        en: "Assisted with coordination at project sites.",
      },
      {
        th: "ดูแลงานที่เกี่ยวข้องกับวัสดุและพัสดุ",
        en: "Handled tasks related to materials and supplies.",
      },
      {
        th: "ทำงานร่วมกับบุคลากรหลายฝ่ายภายในองค์กร",
        en: "Worked with people across different teams in the organization.",
      },
    ],
    images: [],
  },
  {
    id: "retail",
    category: {
      th: "งานหน้าร้าน งานบริการ และอีเวนต์",
      en: "Retail & Event Experience",
    },
    title: {
      th: "เรียนรู้ผ่านผู้คนและการบริการ",
      en: "Learning through people and service",
    },
    organizations: [
      {
        name: { th: "Skechers Thailand", en: "Skechers Thailand" },
        role: {
          th: "PC · PC Event · F&F Event",
          en: "PC · PC Event · F&F Event",
        },
      },
      {
        name: { th: "บริษัท ไอดู ฟูดต้า จำกัด", en: "I Do Foodta Co., Ltd." },
        role: { th: "พนักงานเสิร์ฟ", en: "Waitstaff" },
      },
    ],
    details: [
      { th: "ดูแลและให้บริการลูกค้า", en: "Assisted and served customers." },
      {
        th: "สนับสนุนการขายสินค้าในหน้าร้าน",
        en: "Supported in-store product sales.",
      },
      { th: "ทำงานในกิจกรรมและ Event", en: "Worked at activities and events." },
      { th: "ทำงานร่วมกับทีม", en: "Collaborated with the team." },
      {
        th: "เรียนรู้การสื่อสารกับลูกค้าและการแก้ปัญหาเฉพาะหน้า",
        en: "Developed customer communication and practical problem-solving skills.",
      },
      {
        th: "ทำงานภายใต้สภาพแวดล้อมที่ต้องจัดการหลายหน้าที่พร้อมกัน",
        en: "Managed multiple responsibilities in a busy work environment.",
      },
    ],
    images: [],
  },
];
