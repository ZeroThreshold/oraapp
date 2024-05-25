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
      <div
        className="section py-5 h-[100vh] parallax w-[100vw]"
        style={{
          backgroundImage: `url("/images/general/para1.jpg") no-repeat center`,
        }}
      ></div>
      <LocationComp />
      <div
        className="section py-5 h-[100vh] parallax w-[100vw]"
        style={{
          backgroundImage: `url("/images/general/para2.jpg") no-repeat center`,
        }}
      ></div>
      <Testimonials />
    </main>
  );
}
