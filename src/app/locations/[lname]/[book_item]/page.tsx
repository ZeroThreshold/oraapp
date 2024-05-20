import FourOhFour from "@/components/blocks/FourOhFour";
import NotActiveLocation from "@/components/blocks/notactivelocation";
import { Button } from "@/components/ui/button";
import { getCourseInfo } from "@/helpers/getLocationInfo";
import { ArrowRight, ClockIcon, IndianRupee } from "lucide-react";
import Image from "next/image";

export default function LocationsInfo({
  params,
}: {
  params: { lname: string; book_item: string };
}) {
  const { course, locationData } = getCourseInfo(
    params.lname,
    params.book_item
  );

  if (!locationData) return <FourOhFour />;
  if (!course) return <FourOhFour />;
  if (!locationData.active) return <NotActiveLocation />;

  return (
    <div>
      <Image
        className="object-cover w-full h-[44vh] md:h-p[65vh] lg:h-[94vh]"
        src={course?.img ?? ""}
        alt="AltImage"
        width={2000}
        height={1000}
      />
      <div className="my-20 container flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row gap-6 justify-between">
          <div>
            <h1 className="font-extrabold text-4xl">{course?.title}</h1>
            <div className="text-2xl mt-1">
              Level: <span className="text-gray-500">{course?.level}</span>
            </div>
            <div className="text-base mt-1">
              Address:{" "}
              <span className="text-gray-500">{locationData?.address}</span>
            </div>
          </div>
          <div className="flex flex-col lg:gap-6 gap-1">
            <div className="text-2xl">
              Starts from{" "}
              <strong className="text-3xl">
                ₹ {course?.pricing.group.price}
              </strong>
            </div>
            <Button>Book Now</Button>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Event Details</h2>
          <p className="mt-2">{course?.description}</p>
          <div className="flex justify-between flex-col lg:flex-row">
            <div className="my-10 flex flex-col gap-5 max-w-3xl">
              <div>
                <h3 className="font-semibold text-xl">What i will learn?</h3>
                <ul className="flex flex-col gap-2 mt-2">
                  {course?.trainingModules.map((module, index) => (
                    <li
                      key={index}
                      className="text-gray-500 font-medium flex gap-2"
                    >
                      <ArrowRight /> {module}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Things to carry</h3>
                <p className="mt-2 text-gray-500 font-medium ">
                  {" "}
                  Riders carry their own safety gear which suits them best,
                  Riding jackets &amp; Pants, Helmets, Gloves, and Boots are
                  compulsory, Knee, Elbow &amp; Chest Guards are mandatory.
                  Refillable water bottle or hydration bag.{" "}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Inclusions</h3>
                <ul className="flex flex-col gap-2 mt-2">
                  <li className="text-gray-500 font-medium flex gap-2">
                    <ArrowRight /> Training Session
                  </li>
                  <li className="text-gray-500 font-medium flex gap-2">
                    <ArrowRight /> A professional & knowledgeable instructor.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Exclusions</h3>
                <ul className="flex flex-col gap-2 mt-2">
                  <li className="text-gray-500 font-medium flex gap-2">
                    <ArrowRight /> Anything other than inclusions.
                  </li>
                </ul>
              </div>
            </div>
            <div className="h-96 w-full rounded-md shadow border border-neutral-100 max-w-[26rem] mt-10 p-4 flex flex-col gap-6">
              <div className="">
                <h3 className="text-2xl font-[550]">Duration</h3>
                <div>
                  <h4 className="text-base font-medium text-gray-500">
                    Batch 1
                  </h4>
                  {course?.batches.batch1.active && (
                    <div className="mt-1 flex font-[550] items-center gap-4">
                      <ClockIcon className="w-6 h-6" />
                      {course?.batches.batch1.time}
                    </div>
                  )}
                </div>
                {course?.batches.batch2.active && (
                  <div>
                    <h4 className="text-base font-medium text-gray-500">
                      Batch 2
                    </h4>
                    <div className="mt-1 flex font-[550] items-center gap-4">
                      <ClockIcon className="w-6 h-6" />{" "}
                      {course?.batches.batch2.time}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-[550]">Pricing</h3>
                <div>
                  <h4 className="text-base font-medium text-gray-500">
                    Private:
                  </h4>
                  <div className="mt-1 flex font-[550]">
                    <IndianRupee className="w-4" />{" "}
                    {course?.pricing.private.price}/- Max{" "}
                    {course?.pricing.private.maxRiders} Riders
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-500">
                    Group:
                  </h4>
                  <div className="mt-1 flex font-[550]">
                    <IndianRupee className="w-4" />{" "}
                    {course?.pricing.group.price}/- Max{" "}
                    {course?.pricing.group.maxRiders} Riders
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
