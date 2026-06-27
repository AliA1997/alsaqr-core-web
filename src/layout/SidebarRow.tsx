// Sidebar row. Adapted from the reference repos' src/layout/SidebarRow.tsx —
// decoupled into a presentational row (no feature stores / CommonLink).
import type { ReactElement, SVGProps } from "react";

interface SidebarRowProps {
  title: string;
  iconSrc?: string;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  IconImage?: ReactElement;
  active?: boolean;
  isShow?: boolean; // force the label to always show
  onClick?: () => void;
}

function SidebarRow({
  title,
  iconSrc,
  Icon,
  IconImage,
  active,
  isShow,
  onClick,
}: SidebarRowProps) {
  return (
    <button
      type="button"
      data-testid={`${title.toLowerCase()}row`}
      onClick={onClick}
      className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-1 md:px-4 py-3 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-600"
    >
      {iconSrc && (
        <img
          src={iconSrc}
          alt={`${title} Icon`}
          className="h-4 w-4 md:h-6 md:w-6 flex-shrink-0 mr-2 p-0"
        />
      )}
      {Icon && <Icon className="h-4 w-4 md:h-6 md:w-6 flex-shrink-0" />}
      {IconImage}
      <p
        className={`${
          isShow ? "inline-flex" : "hidden md:inline-flex"
        } group-hover:text-[#55a8c2] text-base font-light ${
          active ? "text-[#55a8c2]" : "dark:text-gray-50"
        }`}
      >
        {title}
      </p>
    </button>
  );
}

export default SidebarRow;
