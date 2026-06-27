// Widgets aside. Decoupled from feature stores — the consuming app passes its
// own content (search, trending, news) as children.
import type { PropsWithChildren } from "react";

type WidgetsProps = {
  title?: string;
  classNames?: string;
};

export default function Widgets({
  title,
  classNames,
  children,
}: PropsWithChildren<WidgetsProps>) {
  return (
    <aside
      className={`hidden lg:col-span-2 lg:flex flex-col px-2 mt-2 space-y-3 ${
        classNames ?? ""
      }`}
    >
      {title && (
        <h3 className="text-xl font-bold dark:text-gray-50">{title}</h3>
      )}
      {children}
    </aside>
  );
}
