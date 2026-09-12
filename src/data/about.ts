import type { Localized } from "../context";
export const aboutContent: Record<"who" | "goals" | "beyond", Localized[]> = {
  who: [
    {
      th: "สวัสดีครับ ผมจริยธรรม นักศึกษาวิทยาการคอมพิวเตอร์ที่สนใจการพัฒนาซอฟต์แวร์และการสร้างระบบเพื่อนำไปใช้งานจริง",
      en: "Hello, I’m Jareyatham, a Computer Science student interested in software development and building systems for real-world use.",
    },
    {
      th: "ผมสนใจการทำงานของซอฟต์แวร์ในหลายส่วน ตั้งแต่ Frontend, Backend, Database, API ไปจนถึงการออกแบบประสบการณ์ของผู้ใช้",
      en: "I’m curious about how the different parts of software work together, from frontend, backend, databases, and APIs to the experience of the people using them.",
    },
    {
      th: "ผมชอบเรียนรู้ผ่านการลงมือทำจริง โดยเฉพาะการพัฒนาโปรเจกต์ การทดลองใช้เทคโนโลยีใหม่ การทดสอบระบบ และการแก้ปัญหาที่เกิดขึ้นระหว่างการพัฒนา",
      en: "I enjoy learning by doing: developing projects, trying new technologies, testing systems, and working through problems that come up along the way.",
    },
    {
      th: "สำหรับผม การเขียนโปรแกรมไม่ได้เป็นเพียงการทำให้ระบบทำงานได้ แต่เป็นการคิดว่าเราจะสร้างสิ่งที่ช่วยแก้ปัญหาและทำให้ผู้ใช้ทำงานได้ง่ายขึ้นอย่างไร",
      en: "To me, programming is about thinking through how to solve a problem and make someone’s work easier, as well as making a system function correctly.",
    },
  ],
  goals: [
    {
      th: "เป้าหมายของผมคือพัฒนาทักษะด้าน Software Development อย่างต่อเนื่อง และสามารถออกแบบรวมถึงพัฒนาระบบที่ใช้งานได้จริง มีความน่าเชื่อถือ และดูแลต่อได้ในระยะยาว",
      en: "My goal is to keep developing my software engineering skills and learn to design and build practical, reliable systems that can be maintained over time.",
    },
    {
      th: "ผมสนใจการนำเทคโนโลยีและ AI เข้ามาช่วยลดขั้นตอนการทำงานซ้ำ ๆ เพิ่มประสิทธิภาพในการทำงาน และสร้างประสบการณ์ที่ดีขึ้นให้กับผู้ใช้",
      en: "I’m interested in using technology and AI to reduce repetitive work, improve efficiency, and create better experiences for users.",
    },
    {
      th: "ในระยะยาว ผมต้องการพัฒนาตัวเองให้เข้าใจระบบซอฟต์แวร์ในภาพรวมมากขึ้น ไม่เพียงแค่การเขียน Code แต่รวมถึง Architecture, Database, API, Deployment, Testing และการทำงานร่วมกับทีม",
      en: "Over time, I want to understand the bigger picture of software: architecture, databases, APIs, deployment, testing, and collaborating with a team.",
    },
  ],
  beyond: [
    {
      th: "นอกเหนือจากการพัฒนาซอฟต์แวร์ ผมชอบเล่นแบดมินตัน สนใจเรื่องน้ำหอม และชอบเรียนรู้เทคโนโลยีอยู่เสมอ",
      en: "Outside software development, I enjoy playing badminton, exploring fragrances, and keeping up with technology.",
    },
    {
      th: "ผมเป็นคนที่สนุกกับการทดลองสิ่งใหม่และเรียนรู้ โดยเฉพาะเมื่อพบปัญหาเล็ก ๆ ในชีวิตประจำวัน ผมมักสนใจว่าปัญหานั้นสามารถนำเทคโนโลยีหรือซอฟต์แวร์เข้ามาช่วยแก้ได้อย่างไร",
      en: "I like trying new things. When I notice a small everyday problem, I often wonder whether technology or a piece of software could help solve it.",
    },
    {
      th: "หลายครั้งไอเดียเล็ก ๆ เหล่านี้ก็กลายเป็นจุดเริ่มต้นของโปรเจกต์ที่ผมนำมาทดลองพัฒนา",
      en: "These small ideas often become the starting point for projects I experiment with.",
    },
    {
      th: "ผมเชื่อในการพัฒนาตัวเองทีละขั้น เรียนรู้จากสิ่งที่ทำ ทดลอง ปรับปรุง และค่อย ๆ สร้างสิ่งที่ดีกว่าเดิมขึ้นมา",
      en: "I believe in improving one step at a time: learning from what I do, experimenting, refining, and gradually building something better.",
    },
  ],
};
export const currentFocus = [
  "Full-Stack Development",
  "Backend API",
  "Database Design",
  "REST API",
  "Software Testing",
  "Deployment",
  "Docker",
  "Workflow Automation",
  "AI Integration",
  "Git / GitHub Workflow",
];
