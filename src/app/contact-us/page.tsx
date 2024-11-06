import InfoLayout from "@/components/layouts/info";

const imageStr = "/images/assets/banner2.jpg";

export default function Contact() {
  return (
    <InfoLayout imageStr={imageStr} title="Contact">
      <div className="bg-whtie dark:bg-gray-800">
        <div className="min-h-96 flex items-center justify-center">
          <div className="max-w-lg w-full bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Contact Us
            </h2>

            <div className="mb-6">
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Email:</span>{" "}
                sales@offroadacademies.com
              </p>
            </div>

            <div className="mb-6">
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Phone:</span> +91-8550011116
              </p>
            </div>

            <div className="mb-6">
              <p className="text-lg text-gray-700">
                <span className="font-semibold">Address:</span> <br />
                #64, 9th Main, 14th Cross, Indiranagar 2nd Stage, <br />
                Eshwara Layout, Bangalore - 560038
              </p>
            </div>
          </div>
        </div>
      </div>
    </InfoLayout>
  );
}
