import LocationComp from "@/components/blobs/home/location";
import Testimonials from "@/components/blobs/home/testimonials";
import WeDo from "@/components/blobs/home/wedo";
import VideoPlayer from "@/components/blocks/home/videoplayer";

export default function Home() {
  return (
    <main>
      <VideoPlayer />
      <WeDo />
      <section
        className="section py-5 h-[100vh] parallax w-[99.9vw]"
        style={{ backgroundImage: `url("/images/general/para1.jpg")` }}
      ></section>
      <LocationComp />
      <section
        className="section py-5 h-[100vh] parallax w-[99.9vw]"
        style={{ backgroundImage: `url("/images/general/para2.jpg")` }}
      ></section>
      <Testimonials />
    </main>
  );
}
