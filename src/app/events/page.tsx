import InfoLayout from "@/components/layouts/info";

const imageStr = "/images/assets/banner2.jpg";

export default function Events() {
  return (
    <InfoLayout imageStr={imageStr} title="Events">
      <div className="bg-whtie dark:bg-gray-800">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-2xl w-full px-4">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              No Events currently!
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
              We are working on some exciting events for you. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </InfoLayout>
  );
}
