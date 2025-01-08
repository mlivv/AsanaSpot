import { HeartPulse, LucideIcon, Smile, ZapOff } from "lucide-react";

interface YogaBenefit {
  id: number;
  icon: LucideIcon;
  title: string;
  details: string;
}

export const YogaBenefits: YogaBenefit[] = [
  {
    id: 1,
    icon: HeartPulse,
    title: "Improves Physical Health",
    details:
      "1111111111 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non  hendrerit felis. Duis a sodales diam. Nunc pellentesque lorem erat, in  scelerisque dui consectetur at. Morbi vel ornare nisl. Nulla ut ex ac  elit imperdiet convallis. Praesent elementum mi in enim mattis commodo.",
  },
  {
    id: 2,
    icon: ZapOff,
    title: "Reduce Stress",
    details:
      "2222222222222 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non  hendrerit felis. Duis a sodales diam. Nunc pellentesque lorem erat, in  scelerisque dui consectetur at. Morbi vel ornare nisl. Nulla ut ex ac  elit imperdiet convallis. Praesent elementum mi in enim mattis commodo.",
  },
  {
    id: 3,
    icon: Smile,
    title: "Promotes Emotional Well-Being",
    details:
      "3333333333333 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non  hendrerit felis. Duis a sodales diam. Nunc pellentesque lorem erat, in  scelerisque dui consectetur at. Morbi vel ornare nisl. Nulla ut ex ac  elit imperdiet convallis. Praesent elementum mi in enim mattis commodo.",
  },
];
