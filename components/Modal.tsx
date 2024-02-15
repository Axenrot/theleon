import React, { useEffect, useRef } from "react";

const Modal = ({
  modalOpen = false,
  setModalOpen,
}: {
  modalOpen: boolean;
  setModalOpen: (arg: boolean) => void;
}) => {
  const trigger = useRef(null);
  const modal = useRef(null);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!modalOpen || keyCode !== 27) return;
      setModalOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <>
      <div
        className={`fixed z-50 left-0 top-0 flex h-full min-h-screen w-full items-center justify-center text-zinc-900 px-4 py-5 ${
          modalOpen ? "block" : "hidden"
        }`}
      >
        <div
          ref={modal}
          onFocus={() => setModalOpen(true)}
          onBlur={() => setModalOpen(false)}
          className="w-full max-w-[570px] rounded-[20px] bg-white px-8 py-12 text-center dark:bg-dark-2 md:px-[70px] md:py-[60px]"
        >
          <h3 className="pb-[18px] text-xl font-semibold sm:text-2xl">
            Your Message Sent Successfully
          </h3>
          <span
            className={`mx-auto mb-6 inline-block h-1 w-[90px] rounded bg-primary`}
          ></span>
          <p className="mb-10 text-base leading-relaxed dark:text-dark-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since
          </p>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-1/2 px-3">
              <button
                onClick={() => setModalOpen(false)}
                className="block w-full rounded-md border border-stroke p-3 text-center text-base font-medium text-dark transition hover:border-red-600 hover:bg-red-600 hover:text-white dark:text-white"
              >
                Cancel
              </button>
            </div>
            <div className="w-1/2 px-3">
              <button className="block w-full rounded-md border border-primary bg-primary p-3 text-center text-base font-medium text-white transition hover:bg-blue-dark">
                <a href={`/#`}> View Details </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
