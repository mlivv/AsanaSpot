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
      <h3 className="text-2xl lg:text-4xl font-extrabold text-white">
        What are the benefits of yoga?
      </h3>
      <p className="text-white">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
        totam sint delectus quaerat aliquid voluptatum ex! Veritatis, vero?
        Iste, asperiores eos. Sint error recusandae perspiciatis nam
        voluptatibus cumque non impedit in, repellendus fuga neque voluptates!
      </p>
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
