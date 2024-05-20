import { ArrowLeft } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const FourOhFour = () => {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="block text-7xl font-bold text-black sm:text-9xl dark:text-white">
          404
        </h1>
        <p className="mt-3 text-gray-600 dark:text-neutral-400">
          Oops, something went wrong.
        </p>
        <p className="text-gray-600 dark:text-neutral-400">
          Sorry, we couldn&apos;t find your page.
        </p>
        <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
          <Link href="/">
            <Button>
              <ArrowLeft />
              Back to home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default FourOhFour;
