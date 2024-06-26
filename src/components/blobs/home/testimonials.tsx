"use client";
import { InstagramEmbed } from "react-social-media-embed";

const linksinsta = [
  "https://www.instagram.com/p/C6_VuCChQ4B/",
  "https://www.instagram.com/p/C6n5JiAt_Np/",
  "https://www.instagram.com/p/CyNhXSoL2sf/",
  "https://www.instagram.com/p/CpxRXFgNc-T/",
  "https://www.instagram.com/p/C2bvzqSreB_/",
  "https://www.instagram.com/p/C5Dhjz-L4wa/",
];

const Testimonials = () => {
  return (
    <div className="container flex flex-col gap-16 my-20">
      <div className="text-center w-full lg:text-5xl text-4xl font-bold">
        <span className="border-b-2">Testimonials</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {linksinsta.map((link) => (
          <div key={link}>
            <InstagramEmbed url={link} className="w-full object-fit" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
