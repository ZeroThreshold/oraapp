import LocationComp from "@/components/blobs/home/location";
import Testimonials from "@/components/blobs/home/testimonials";
import WeDo from "@/components/blobs/home/wedo";
import VideoPlayer from "@/components/blocks/home/videoplayer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <VideoPlayer />
      <WeDo />
      <section className="section py-5 min-h-screen parallax w-[100vw] bg-[url('/images/general/para1.jpg')]"></section>
      <LocationComp />
      <section className="section py-5 min-h-screen parallax w-[100vw] bg-[url('/images/general/para2.jpg')]"></section>
      <Testimonials />
    </main>
  );
}
