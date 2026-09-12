import type { Localized } from "../context";
export type Education = {
  id: string;
  from: number;
  to: number | null;
  degree: Localized;
  institution: Localized;
  gpax: string;
  semesters?: number;
};
export const education: Education[] = [
  {
    id: "spu",
    from: 2023,
    to: null,
    degree: {
      th: "วิทยาการคอมพิวเตอร์และการพัฒนาซอฟต์แวร์",
      en: "Computer Science and Software Development",
    },
    institution: { th: "มหาวิทยาลัยศรีปทุม", en: "Sripatum University" },
    gpax: "3.35",
    semesters: 6,
  },
  {
    id: "school",
    from: 2020,
    to: 2023,
    degree: {
      th: "แผนการเรียนวิทยาศาสตร์ — คณิตศาสตร์",
      en: "Science–Mathematics Program",
    },
    institution: {
      th: "โรงเรียนกรรณสูตศึกษาลัย",
      en: "Kannasootsuksalai School",
    },
    gpax: "3.31",
  },
];
