import Link from "next/link";
import { navigationMenuLinks, NavMenuItemType } from "data";

export const Navbar = () => {
  return (
    <div>
      <nav className="fixed bg-white z-10 w-full flex justify-between items-center py-8 px-4 xl:px-10">
        <Link href="/">
          <a className="text-lg font-semibold">
            <img
              className="h-7"
              src="assets/images/autumn_ai_logo.svg"
              alt=""
              width="auto"
            />
          </a>
        </Link>
        <div className="lg:hidden">
          <button
            type="button"
            title="mobile-menu"
            className="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded"
          >
            <svg
              className="block h-4 w-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex lg:ml-auto lg:mr-12 lg:items-center lg:w-auto lg:space-x-12">
          {navigationMenuLinks.map(
            (menuItem: NavMenuItemType, index: number) => {
              return (
                <li key={index}>
                  <Link href={menuItem.href}>
                    <a className="text-sm font-medium">{menuItem.title}</a>
                  </Link>
                </li>
              );
            }
          )}
        </ul>
        <div className="hidden lg:block">
          <Link href="https://getautumn.app/register">
            <a className="inline-block py-3 px-8 text-sm leading-normal font-medium bg-september-green text-white rounded transition duration-200">
              Get started
            </a>
          </Link>
        </div>
      </nav>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <Link href="/">
              <a className="mr-auto text-lg font-semibold leading-none">
                <img
                  className="h-7"
                  src="assets/images/autumn_ai_logo.svg"
                  alt=""
                  width="auto"
                />
              </a>
            </Link>
            <button type="button" title="toggle-nav" className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {navigationMenuLinks.map(
                (item: NavMenuItemType, index: number) => {
                  return (
                    <li className="mb-1" key={index}>
                      <Link href={item.href}>
                        <a className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded">
                          {item.title}
                        </a>
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <Link href="https://getautumn.app/register">
                <a className="block py-3 text-center text-sm leading-normal font-medium bg-september-green text-white rounded transition duration-200">
                  Get Started
                </a>
              </Link>
            </div>
            <p className="mt-6 mb-4 text-sm text-center text-gray-500">
              <span>© 2022 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
};
