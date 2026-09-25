import React from "react";

export const Header = () => {
  return (
    <div className="flex justify-between px-10 py-3 ">
      <div>
        <h1 className="font-semibold">Where in the world?</h1>
      </div>
      <div className="flex gap-1 items-center">
        <img src="src/assets/icons/claro.png" className="w-4" alt="claro" />
        <p>Dark Mode</p>
      </div>
    </div>
  );
};
