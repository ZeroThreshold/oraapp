import { Button } from "@/components/ui/button";
import { homeLocations } from "@/data/homedata";
import Image from "next/image";
import Link from "next/link";

const LocationComp = () => {
  return (
    <div className="container flex flex-col gap-16 my-20">
      <div className="text-center w-full lg:text-5xl text-4xl font-bold">
        <span className="border-b-2">Our Academies</span>
      </div>
      <div className="w-full flex justify-center">
        <Image
          src="/images/assets/indiamap.png"
          alt="map"
          width={800}
          height={800}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {homeLocations.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-between bg-white border shadow rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
            >
              <div className="flex flex-col gap-3">
                <h3 className="font-semibold text-2xl">{item.name}</h3>
                <p className="text-base">{item.description}</p>
              </div>

              {item.href === "#" ? (
                <div className="mt-4">
                  <Button disabled>Coming Soon!</Button>
                </div>
              ) : (
                <Link href={item.href} className="mt-4">
                  <Button>Learn More</Button>
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocationComp;
