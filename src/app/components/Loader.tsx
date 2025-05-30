import { cva } from "class-variance-authority";
import React from "react";

const loaderContent = cva(
  "loaderContentbg-opacity-70 flex flex-col gap-4 items-center justify-center my-auto"
);

const loaderSpinner = cva(
  "loaderSpinner w-12 h-12 border-4 border-t-transparent rounded-full animate-spin"
);

const loaderText = cva("loaderText text-gray-600 font-medium");

function Loader({ spinnerColor }: {spinnerColor: string}) {
  return (
    <div className={loaderContent()}>
      <div className={loaderSpinner({ className: spinnerColor })}></div>
      <p className={loaderText()}>
      Loading <span className='motion-opacity-loop motion-delay-200 motion-duration-800'>.</span>
      <span className='motion-opacity-loop motion-delay-400 motion-duration-800'>.</span>
      <span className='motion-opacity-loop motion-delay-600 motion-duration-800'>.</span>

      </p>
    </div>
  );
}

export default Loader;
