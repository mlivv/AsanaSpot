import Image from "next/image";
import woman_doing_yoga_standing from "@/assets/yoga-girl-standing.jpg";

export default function WhatIsYogaSection() {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly lg:max-h-[calc(100vh-20vh)] gap-6 lg:gap-12 px-[5vw] lg:px-[20vw] py-[8vh]">
      <div className="flex flex-col justify-center gap-2" id="whatIsYoga">
        <h3 className="text-2xl lg:text-4xl font-extrabold">What is yoga?</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
          hendrerit felis. Duis a sodales diam. Nunc pellentesque lorem erat, in
          scelerisque dui consectetur at. Morbi vel ornare nisl. Nulla ut ex ac
          elit imperdiet convallis. Praesent elementum mi in enim mattis
          commodo. Curabitur quis tellus in nibh tempor sollicitudin. Integer
          rhoncus quam felis, gravida accumsan risus consectetur sed. Etiam
          malesuada, urna sollicitudin lacinia tempor, purus quam congue mauris,
          quis iaculis ipsum sapien id nibh.
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
