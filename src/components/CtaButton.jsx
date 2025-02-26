import React from "react";

const CtaButton = ({ name, variant = "orange" }) => {
  const buttonStyles = {
    orange: "bg-orange-600 hover:bg-orange-500 hover:shadow hover:shadow-orange-500",
    purple: "bg-[#372874] hover:bg-[#2f2165] hover:shadow hover:shadow-[#2f2165]",
  };

  return (
    <button
      className={`${buttonStyles[variant]} text-lg text-slate-50 rounded-3xl px-4 py-2 w-fit transition-all duration-300`}
    >
      {name}
    </button>
  );
};

export default CtaButton;
