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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non hendrerit felis. Duis a sodales diam. Nunc pellentesque lorem erat, in scelerisque dui consectetur at. Morbi vel ornare nisl. Nulla ut ex ac elit imperdiet convallis. Praesent elementum mi in enim mattis commodo. Curabitur quis tellus in nibh tempor sollicitudin. Integer rhoncus quam felis, gravida accumsan risus consectetur sed. Etiam malesuada, urna sollicitudin lacinia tempor, purus quam congue mauris, quis iaculis ipsum sapien id nibh.",
  },
  {
    id: 2,
    icon: ZapOff,
    title: "Reduce Stress",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non hendrerit felis. Duis a sodales diam. Nunc pellentesque lorem erat, in scelerisque dui consectetur at. Morbi vel ornare nisl. Nulla ut ex ac elit imperdiet convallis. Praesent elementum mi in enim mattis commodo. Curabitur quis tellus in nibh tempor sollicitudin. Integer rhoncus quam felis, gravida accumsan risus consectetur sed. Etiam malesuada, urna sollicitudin lacinia tempor, purus quam congue mauris, quis iaculis ipsum sapien id nibh.",
  },
  {
    id: 3,
    icon: Smile,
    title: "Promotes Emotional Well-Being",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non hendrerit felis. Duis a sodales diam. Nunc pellentesque lorem erat, in scelerisque dui consectetur at. Morbi vel ornare nisl. Nulla ut ex ac elit imperdiet convallis. Praesent elementum mi in enim mattis commodo. Curabitur quis tellus in nibh tempor sollicitudin. Integer rhoncus quam felis, gravida accumsan risus consectetur sed. Etiam malesuada, urna sollicitudin lacinia tempor, purus quam congue mauris, quis iaculis ipsum sapien id nibh.",
  },
];
