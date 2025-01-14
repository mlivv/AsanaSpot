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
      "Yoga helps improve flexibility, build strength, and enhance balance. It also promotes better posture and supports joint health. Regular practice can alleviate chronic pain and increase overall physical endurance, making it an excellent addition to a healthy lifestyle.",
  },
  {
    id: 2,
    icon: ZapOff,
    title: "Reduce Stress",
    details:
      "Through deep breathing and mindfulness, yoga helps lower cortisol levels, the body's stress hormone. Practicing yoga regularly fosters relaxation, eases tension, and cultivates a sense of inner calm, making it an effective tool for managing stress and anxiety.",
  },
  {
    id: 3,
    icon: Smile,
    title: "Promotes Emotional Well-Being",
    details:
      "Yoga encourages self-awareness and emotional balance by connecting the mind and body. It fosters a positive outlook, improves mood, and supports mental clarity. Over time, yoga can help you develop resilience and a deeper sense of happiness and contentment.",
  },
];
