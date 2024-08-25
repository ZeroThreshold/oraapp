import FourOhFour from "@/components/blocks/FourOhFour";
import NotActiveLocation from "@/components/blocks/notactivelocation";
import Logo from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { getLocationInfo } from "@/helpers/getLocationInfo";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function LocationsInfo({
  params,
}: {
  params: { lname: string };
}) {
  const { locationData, courses } = getLocationInfo(params.lname);

  if (!locationData) return <FourOhFour />;
  if (!locationData.active) return <NotActiveLocation />;

  const pageTitle = `About Us - ${locationData.title}`;
  const pageDescription = locationData.description;
  const pageImage = `https://oraprod.netlify.app${locationData.bannerImage}`;
  const pageUrl = `https://oraprod.netlify.app/locations/${params.lname}`;

  return (
    <div className="my-12 container">
      <Head>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageImage} />
      </Head>
      <div className="flex items-center justify-center">
        <Logo passString={locationData.varient} width={400} height={300} />
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
              className="rounded-md shadow-lg flex flex-col justify-between"
              key={index}
            >
              <div>
                <div className="w-full h-64 overflow-hidden rounded-t-md mb-4">
                  <Image
                    className="w-full h-full object-cover"
                    src={course.img}
                    alt={course.title}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="font-bold text-xl mb-2 px-4 py-2">
                  {course.title}
                </div>
                <p className="text-gray-700 text-base px-4">
                  {course.description}
                </p>
              </div>
              <Link
                href={`/locations/${params.lname}/${course.id}`}
                className="px-4 py-2 mb-3"
              >
                <Button className="gap-4 mt-4">Book Now</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
