import Image from "next/image";
import woman_doing_yoga_standing from "@/assets/yoga-girl-standing.jpg";

export default function WhatIsYogaSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly lg:max-h-[calc(100vh-20vh)] gap-6 lg:gap-12 px-[5vw] lg:px-[20vw] py-[8vh] bg-lightBeige">
      <div className="flex flex-col justify-center gap-2" id="whatIsYoga">
        <h3 className="text-2xl lg:text-4xl font-extrabold">What is yoga?</h3>
        <p>
          Yoga is an ancient practice that blends physical postures, breath
          control, and meditation to create a holistic approach to well-being.
          It aims to connect the body and mind through mindful movement and
          awareness. While yoga originated in India, it has become a global
          practice that helps people improve flexibility, reduce stress, and
          achieve a sense of balance and inner peace. Whether for fitness or
          mental clarity, yoga offers a versatile and accessible path to a
          healthier lifestyle.
        </p>
      </div>
      <div className="lg:max-w-[25vw]">
        <Image
          src={woman_doing_yoga_standing}
          alt={"Woman doing yoga standing"}
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>
    </div>
  );
}
