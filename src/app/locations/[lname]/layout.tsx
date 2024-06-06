import { getLocationInfo } from "@/helpers/getLocationInfo";
import { Metadata } from "next";

type Props = {
  params: { lname: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lname = params.lname;
  const { locationData } = getLocationInfo(lname);
  const ogImage = `https://offroadacademies.com${locationData?.logo}` || "";
  return {
    title: locationData?.title,
    openGraph: {
      images: [ogImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
