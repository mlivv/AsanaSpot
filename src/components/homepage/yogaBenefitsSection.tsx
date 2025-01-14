"use client";

import { useState } from "react";
import { YogaBenefits } from "../data/yogaBenefits";
import BenefitDetailsCard from "./benefitDetailsCard";
import YogaBenefitCard from "./yogaBenefitCard";

export default function YogaBenefitsSection() {
  const [active, setActive] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<number>(0);

  const selectedBenefit = YogaBenefits.find((yb) => yb.id === activeId);

  return (
    <div className="bg-darkGreen px-[5vw] lg:px-[20vw] py-[10vh] min-h-[calc(100vh-30vh)]">
      <div className="flex flex-col justify-center gap-2">
        <h3 className="text-2xl lg:text-4xl font-extrabold text-white">
          What are the benefits of yoga?
        </h3>
        <p className="text-white">
          Yoga has long been recognized for its transformative effects on both
          the body and mind. It’s a practice that goes beyond physical postures,
          offering a space for personal growth, relaxation, and mindfulness.
          Whether you're a beginner or an experienced practitioner, yoga can
          help you cultivate a balanced and healthier lifestyle.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 lg:gap-4 mt-2">
        {YogaBenefits.map((b) => (
          <YogaBenefitCard
            key={b.id}
            b={b}
            setActive={setActive}
            setActiveId={setActiveId}
            active={activeId === b.id}
          />
        ))}
      </div>
      {active && (
        <BenefitDetailsCard
          selectedBenefit={selectedBenefit}
          setActive={setActive}
          setActiveId={setActiveId}
        />
      )}
    </div>
  );
}
