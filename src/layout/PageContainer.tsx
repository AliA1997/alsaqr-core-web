// Page shell. Composes the app-typed Sidebar + main content + Widgets, and
// renders the prop-driven Modal fed by the consuming app's modalStore.
import type { ReactNode } from "react";
import { Modal } from "../components/Modal";
import type { AppType } from "../constants";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

type PageContainerProps = {
  appType?: AppType;
  children: ReactNode;
  widgets?: ReactNode;
  /** Wire from your app's modalStore. */
  modal?: { isOpen: boolean; content: ReactNode; onClose: () => void };
  /** Receives "login" or a sidebar link's modalKey. */
  onShowModal?: (key: string) => void;
};

export default function PageContainer({
  appType = "default",
  children,
  widgets,
  modal,
  onShowModal,
}: PageContainerProps) {
  return (
    <div className="grid grid-cols-9 min-h-screen bg-gray-50 dark:bg-[#0e1517]">
      <Sidebar appType={appType} onShowModal={onShowModal} />

      <main className="col-span-8 lg:col-span-5 border-x border-gray-100 dark:border-gray-800">
        {children}
      </main>

      {widgets ? <Widgets>{widgets}</Widgets> : null}

      {modal ? (
        <Modal isOpen={modal.isOpen} onClose={modal.onClose}>
          {modal.content}
        </Modal>
      ) : null}
    </div>
  );
}
