import Logo from "../common/logo";
import { Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-black">
      <div className="text-white container">
        <div className="mx-auto px-4 pb-8 pt-16 lg:px-0">
          <div className="flex justify-center lg:justify-start">
            <Logo variant="mainwhite" width={200} height={50} />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
            <div className="mx-auto max-w-sm lg:max-w-none">
              <p className="mt-4 font-medium text-center text-gray-300 lg:text-left lg:text-base">
                Off Road Academies: Premier off-road training for 2-wheelers &
                4-wheelers. Over 10,000 riders trained across India. Trusted by
                brands like Hero, Royal Enfield, KTM, BMW Motorrad, and more.
                Expertise in track & route curation and motorsport events.
              </p>

              <div className="mt-6 flex flex-col lg:flex-row justify-center gap-4 items-center lg:items-start lg:justify-start">
                <Instagram />
                <a
                  className="text-gray-300 transition hover:border-b"
                  href="https://www.instagram.com/offroadacademies/"
                  target="_blank"
                  rel="noreferrer"
                >
                  @offroadacademies
                </a>
                <a
                  className="text-gray-300 transition hover:border-b"
                  href="https://www.instagram.com/prodirt_adventure"
                  target="_blank"
                  rel="noreferrer"
                >
                  @prodirt_adventure
                </a>
                <a className="text-gray-300 transition hover:border-b" href="#">
                  @tvs_driftr
                </a>
              </div>
              <div className="mt-5 flex flex-col lg:flex-row justify-center gap-4 items-center lg:items-start lg:justify-start">
                <Mail />
                <a
                  className="text-gray-300 transition hover:border-b"
                  href="mailto:sales@offroadacademies.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  sales@offroadacademies.com
                </a>
              </div>
              <div className="mt-5 flex flex-col lg:flex-row justify-center gap-4 items-center lg:items-start lg:justify-start">
                <Phone />
                <a
                  className="text-gray-300 transition hover:border-b"
                  href="tel:+918550011116"
                  target="_blank"
                  rel="noreferrer"
                >
                  +91-8550011116
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
              <div>
                <strong className="font-semibold text-white"> Shops </strong>

                <ul className="mt-6 space-y-1">
                  <li>
                    <a
                      className="text-gray-400 transition hover:text-gray-400/75"
                      href="https://www.speedshoporiginals.com/"
                    >
                      Speedshop originals
                    </a>
                  </li>
                  {/* 
                  <li>
                    <a
                      className="text-gray-400 transition hover:text-gray-400/75"
                      href="#"
                    >
                      PowerTech Parts
                    </a>
                  </li> */}
                </ul>
              </div>

              <div>
                <strong className="font-semibold text-white">Links</strong>

                <ul className="mt-6 space-y-1">
                  <li>
                    <Link
                      className="text-gray-400 transition hover:text-gray-400/75"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-400 transition hover:text-gray-4 00/75"
                      href="/aboutus"
                    >
                      Our Story
                    </Link>
                  </li>

                  <li>
                    <Link
                      className="text-gray-400 transition hover:text-gray-400/75"
                      href="/events"
                    >
                      Events
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <strong className="font-semibold text-white"> Support </strong>

                <ul className="mt-6 space-y-1">
                  <li>
                    <Link
                      className="text-gray-400 transition hover:text-gray-400/75"
                      href="/privacy"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-8">
            <p className="text-center text-xs/relaxed text-gray-500">
              &copy; {new Date().getFullYear()} Offroad Academies. All rights
              reserved .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
