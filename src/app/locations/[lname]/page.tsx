import FourOhFour from "@/components/blocks/FourOhFour";
import NotActiveLocation from "@/components/blocks/notactivelocation";
import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { getLocationInfo } from "@/helpers/getLocationInfo";
import Image from "next/image";

export default function LocationsInfo({
  params,
}: {
  params: { lname: string };
}) {
  const { locationData, courses } = getLocationInfo(params.lname);

  if (!locationData) return <FourOhFour />;
  if (!locationData.active) return <NotActiveLocation />;

  return (
    <div className="my-12 container">
      <div className="flex items-center justify-center">
        <Logo passString={locationData.varient} width={500} height={300} />
      </div>
      <div className="my-20">
        <h1 className="text-4xl font-bold mt-4">
          About Us - {locationData.title}
        </h1>
        <p className="mt-4 text-xl">{locationData.description}</p>
        <Image
          src={locationData.bannerImage}
          className="my-5 rounded-md"
          alt="Banner"
          width={2000}
          height={1500}
        />
      </div>
      <div className="my-20">
        <h1 className="text-4xl font-bold mt-4">
          Training Programs - {locationData.title}
        </h1>
        <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {courses.map((course, index) => (
            <div
              className="rounded-md shadow-lg p-4 flex flex-col justify-between"
              key={index}
            >
              <div>
                <Image
                  className="w-full rounded-md mb-4"
                  src={course.img}
                  alt={course.title}
                  width={500}
                  height={500}
                />
                <div className="font-bold text-xl mb-2">{course.title}</div>
                <p className="text-gray-700 text-base">{course.description}</p>
              </div>
              <div>
                <Button className="gap-4 mt-4">Book Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
