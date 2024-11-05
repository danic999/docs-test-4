import React from "react";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import IconMenu from "@theme/Icon/Menu";

export default function MobileSidebarToggle(): JSX.Element {
  const { toggle, shown } = useNavbarMobileSidebar();
  return (
    <button
      onClick={toggle}
      aria-label={translate({
        id: "theme.docs.sidebar.toggleSidebarButtonAriaLabel",
        message: "Toggle navigation bar",
        description:
          "The ARIA label for hamburger menu button of mobile navigation",
      })}
      aria-expanded={shown}
      className="navbar__toggle bg-royal-blue rounded-[100px] border-none text-white flex flex-row gap-[4px] py-[6px] pl-[8px] !pr-[12px] items-center"
      type="button"
    >
      <svg
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.5 1.66927C0.5 1.20903 0.873096 0.835938 1.33333 0.835938L14.6667 0.835938C15.1269 0.835938 15.5 1.20903 15.5 1.66927C15.5 2.12951 15.1269 2.5026 14.6667 2.5026L1.33333 2.5026C0.873096 2.5026 0.5 2.12951 0.5 1.66927Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.5 8.33594C0.5 7.8757 0.873096 7.5026 1.33333 7.5026L14.6667 7.5026C15.1269 7.5026 15.5 7.8757 15.5 8.33594C15.5 8.79618 15.1269 9.16927 14.6667 9.16927L1.33333 9.16927C0.873096 9.16927 0.5 8.79618 0.5 8.33594Z"
          fill="white"
        />
      </svg>

      <span className="text-sm font-bold text-white">Menu</span>
    </button>
  );
}
