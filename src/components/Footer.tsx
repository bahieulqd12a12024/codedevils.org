import React from "react";
import Link from "next/link";
import Image from "next/image";

import { AiOutlineInstagram, AiOutlineLink } from "react-icons/ai";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const openPDF = (path: string) => {
    window.open(path, "_blank");
  };
  return (
    <footer className="mt-auto bg-white">
      <div className="p-4 py-6 lg:py-8">
        <div className="mx-auto w-full max-w-screen-2xl md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-dark.png"
                alt="CodeDevils logo"
                width={150}
                height={200}
                priority
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Organization
              </h2>
              <ul className="font-medium text-black">
                {[
                  ["About", "/about"],
                  ["Leadership", "/about/#leadership"],
                  ["Contact", "/contact"],
                ].map(([title, url], key) => (
                  <li key={key} className="mb-4">
                    <Link
                      aria-label={`Learn more about CodeDevils by heading to ${title}`}
                      href={url as string}
                      className="hover:text-maroon hover:underline"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 ">
                Resources
              </h2>
              <ul className="font-medium text-black">
                {[["Constitution", "/about/#constitution"]].map(
                  ([title, url], key) => (
                    <li key={key} className="mb-4">
                      <Link
                        aria-label={`Learn more about CodeDevil's ${title}`}
                        href={url as string}
                        className="hover:text-maroon hover:underline"
                      >
                        {title}
                      </Link>
                    </li>
                  )
                )}
                <li>
                  <button
                    aria-label="Open CodeDevils welcome docs"
                    className="hover:text-maroon hover:underline"
                    onClick={() => openPDF("/pdf/welcome.pdf")}
                  >
                    Welcome Docs
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900">
                Legal
              </h2>
              <ul className="font-medium text-black">
                {[
                  ["Privacy Policy", "#"],
                  ["Terms & Conditions", "#"],
                ].map(([title, url], key) => (
                  <li key={key} className="mb-4 last:mb-0">
                    <Link
                      aria-label={`Open CodeDevils ${title} page`}
                      className="hover:text-maroon hover:underline"
                      href={url as string}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-4" />
        <div className="mx-auto w-full max-w-screen-2xl sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-black">
            © 2024{" "}
            <Link
              href="/"
              className="text-marron transition-colors duration-200 ease-in-out hover:text-maroon md:text-black"
            >
              CodeDevils
            </Link>
            . All Rights Reserved.
          </span>
          <ul className="mt-4 flex space-x-5 sm:mt-0 sm:justify-center">
            {[
              [
                <AiOutlineInstagram key={1} />,
                "Instagram",
                "https://www.instagram.com/asu_codedevils/",
              ],
              [
                <FaDiscord key={2} />,
                "Discord",
                "https://discord.gg/YK2acN8brN",
              ],
              [
                <AiOutlineLink key={3} />,
                "SunDevilSync",
                "https://asu.campuslabs.com/engage/organization/codedevils/",
              ],
              [
                <FaGithub key={4} />,
                "Github",
                "https://github.com/ASU-CodeDevils/",
              ],
              [
                <FaLinkedin key={5} />,
                "LinkedIn",
                "https://www.linkedin.com/company/42138997/admin/feed/posts/",
              ],
            ].map(([icon, title, url], key) => (
              <li key={key}>
                <Link
                  className="text-black transition-colors duration-200 ease-in-out hover:text-maroon"
                  target="_blank"
                  href={url as string}
                >
                  <span className="h-4 w-4">{icon}</span>
                  <span className="sr-only">{title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
