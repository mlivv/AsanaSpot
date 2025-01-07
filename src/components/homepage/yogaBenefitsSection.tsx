import { YogaBenefits } from "../data/yogaBenefits";
import YogaBenefitButton from "./yogaBenefitButton";

export default function YogaBenefitsSection() {
  return (
    <div className="lg:max-h-[calc(100vh-20vh)] bg-darkGreen px-[5vw] lg:px-[20vw] py-[8vh]">
      <h3 className="text-2xl lg:text-4xl font-extrabold text-white">
        What are the benefits of yoga?
      </h3>
      {YogaBenefits.map((b) => (
        <YogaBenefitButton key={b.id} title={b.title} icon={b.icon} />
      ))}
    </div>
  );
}
