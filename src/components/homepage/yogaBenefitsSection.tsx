"use client";

import { useState } from "react";
import { YogaBenefits } from "../data/yogaBenefits";
import YogaBenefitButton from "./yogaBenefitButton";
import { X } from "lucide-react";
import { Button } from "../ui/button";

export default function YogaBenefitsSection() {
  const [active, setActive] = useState<boolean>(false);
  const [activeButtonId, setActiveButtonId] = useState<number>(0);

  const benefitSelected = YogaBenefits.find((yb) => yb.id === activeButtonId);

  return (
    <div className="bg-darkGreen px-[5vw] lg:px-[20vw] py-[10vh] min-h-[calc(100vh-20vh)]">
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
      <div className="grid grid-cols-3 gap-2 lg:gap-6 mt-6">
        {YogaBenefits.map((b) => (
          <YogaBenefitButton
            key={b.id}
            title={b.title}
            icon={b.icon}
            setActive={setActive}
            setActiveButtonId={setActiveButtonId}
            active={activeButtonId === b.id}
            id={b.id}
          />
        ))}
      </div>
      {active && (
        <div className="bg-lightBeige mt-6 rounded-md p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-base lg:text-xl font-bold">
              {benefitSelected?.title}
            </h2>
            <Button
              variant={"ghost"}
              className="hover:bg-darkGreen/10"
              onClick={() => {
                setActive(false);
                setActiveButtonId(0);
              }}
            >
              <X />
            </Button>
          </div>
          <p>{benefitSelected?.details}</p>
        </div>
      )}
    </div>
  );
}
