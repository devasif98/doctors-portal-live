import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div
          className="spinner-border animate-spin inline-block text-black w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden"></span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
