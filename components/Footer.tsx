import Link from "next/link";
import clx from "clsx";

import { footerMenuLinks, NavMenuItemType, socialMediaLinks } from "data";

export const Footer = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container mx-auto px-4 mb-12 md:mb-20">
        <div className="max-w-2xl mx-auto text-center">
          <Link href="/">
            <a className="inline-block mb-8 text-gray-900 text-lg font-semibold">
              <img
                className="h-7"
                src="assets/images/autumn_ai_logo.svg"
                alt=""
                width="auto"
              />
            </a>
          </Link>
          <ul className="mb-8 flex flex-wrap space-x-8 items-center justify-center text-sm">
            {footerMenuLinks.map((menuItem: NavMenuItemType, index: number) => {
              return (
                <li key={index} className="mb-2 md:mb-0">
                  <Link href={menuItem.href}>
                    <a className="font-medium hover:text-gray-600">
                      {menuItem.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center">
            {socialMediaLinks.map((item: any, idx: number) => {
              return (
                <Link key={idx} href={item.href}>
                  <a
                    title={item.title}
                    className={clx(
                      "flex justify-center items-center w-10 h-10 bg-gray-50 rounded-full",
                      { "mr-4": idx !== socialMediaLinks.length - 1 }
                    )}
                  >
                    {item.Icon}
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 pt-8 px-4 border-t">
        All rights reserved © Autumn AI 2022
      </p>
    </section>
  );
};
