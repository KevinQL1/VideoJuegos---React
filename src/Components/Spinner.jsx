import React from "react";

const Spinner = () => {
  return (
    <>
      <div className="flex justify-center items-center my-80">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-indigo-300"
          role="status"
        >
          <span className="visually-hidden">loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
