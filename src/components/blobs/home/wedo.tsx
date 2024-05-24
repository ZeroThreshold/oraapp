import { whatWeDo } from "@/data/homedata";
import Image from "next/image";

const WeDo = () => {
  return (
    <div className="container flex flex-col gap-16 my-20">
      <div className="text-center w-full lg:text-5xl text-4xl font-bold">
        <span className="border-b-2">What we do</span>
      </div>
      <div className="flex flex-col gap-16">
        {whatWeDo.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className="flex flex-col gap-20">
              {index !== 0 && (
                <div className="w-full flex justify-center">
                  <Image
                    src="/images/assets/hills.png"
                    alt="hills"
                    className="fadeInUp-animation"
                    width={120}
                    height={120}
                  />
                </div>
              )}
              <div
                key={index}
                className="grid gird-cols-1 lg:grid-cols-2 gap-20"
              >
                {isEven && (
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className="rounded-md"
                  />
                )}

                <div className="flex flex-col justify-center gap-7">
                  <h2 className="text-4xl lg:text-5xl font-bold">
                    {item.title}
                  </h2>
                  <p>{item.description}</p>
                </div>
                {!isEven && (
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={1000}
                    height={1000}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeDo;
