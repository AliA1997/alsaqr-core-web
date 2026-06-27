// Modal. Adapted from the reference repo's src/common/Modal.tsx — fully
// prop-driven so the consuming app feeds its own modalStore (no store coupling).
import React, { CSSProperties, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ButtonLoader } from "./CustomLoader";

interface ModalBodyProps {
  onClose: () => void;
  children: React.ReactNode;
  headerChildren?: React.ReactNode;
  classNames?: string;
  bodyClassNames?: string;
  style?: CSSProperties;
}

export const ModalBody = ({
  onClose,
  headerChildren,
  children,
  classNames,
  bodyClassNames,
  ...otherProps
}: ModalBodyProps) => {
  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-black/75 h-screen ${
        classNames ?? ""
      }`}
      {...otherProps}
    >
      <div
        className={`relative bg-white dark:bg-[#000000] rounded-lg shadow-lg w-11/12 mx-auto ${
          bodyClassNames ?? "max-w-lg"
        }`}
      >
        <div className="relative p-4">
          {headerChildren ? (
            headerChildren
          ) : (
            <button
              onClick={onClose}
              className="absolute right-5 top-3 text-gray-400 hover:text-gray-600 block float-right cursor-pointer"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="flex flex-col align-center justify-center p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export const ModalPortal = ({ children }: React.PropsWithChildren<any>) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.body) : null;
};

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  classNames?: string;
  bodyClassNames?: string;
}

// Drive this from your app's modalStore:
//   <Modal isOpen={modalStore.isOpen} onClose={modalStore.closeModal}>
//     {modalStore.content}
//   </Modal>
export const Modal = ({
  isOpen,
  onClose,
  children,
  classNames,
  bodyClassNames,
}: ModalProps) => {
  if (!isOpen) return null;
  return (
    <ModalPortal>
      <ModalBody
        onClose={onClose}
        classNames={classNames}
        bodyClassNames={bodyClassNames}
      >
        {children}
      </ModalBody>
    </ModalPortal>
  );
};

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  confirmMessage: string;
  onClose: () => void;
  confirmFunc: () => Promise<void>;
  declineButtonText: string;
  confirmButtonText: string;
  confirmButtonClassNames?: string;
}

// `submitting` is local to the confirm action (constitution button rule).
export const ConfirmModal = ({
  isOpen,
  title,
  confirmMessage,
  children,
  onClose,
  confirmFunc,
  declineButtonText,
  confirmButtonText,
  confirmButtonClassNames,
}: React.PropsWithChildren<ConfirmModalProps>) => {
  const [submitting, setSubmitting] = useState<boolean>(false);
  if (!isOpen) return null;

  return (
    <ModalPortal>
      <ModalBody headerChildren={<h2>{title}</h2>} onClose={onClose}>
        <div className="flex flex-col w-full h-full">
          {children ?? null}
          <p>{confirmMessage}</p>
          <div className="flex px-2 justify-between">
            <button
              onClick={onClose}
              className="rounded-full bg-gray-100 px-5 py-2 font-bold text-gray-900 disabled:opacity-40 cursor-pointer"
              type="button"
            >
              {declineButtonText}
            </button>
            <button
              onClick={async (e) => {
                e.stopPropagation();
                setSubmitting(true);
                try {
                  await confirmFunc();
                } finally {
                  setSubmitting(false);
                }
              }}
              disabled={submitting}
              className={`rounded-full bg-[#55a8c2] px-5 py-2 font-bold text-white ${
                confirmButtonClassNames ?? ""
              } disabled:opacity-40 cursor-pointer`}
              type="button"
            >
              {submitting ? <ButtonLoader /> : confirmButtonText}
            </button>
          </div>
        </div>
      </ModalBody>
    </ModalPortal>
  );
};
