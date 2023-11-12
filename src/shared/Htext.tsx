import React from "react";

type Props = {
  children: React.ReactNode;
  color?: "white" | "red"; // Specify the possible colors
};

function Htext({ children, color = "white" }: Props) {
  const textColorClass = color === "white" ? "text-white" : "text-red-500";

  return (
    <h1
      className={`basis-3/5 font-montserrat text-3xl font-bold ${textColorClass}`}
    >
      {children}
    </h1>
  );
}

export default Htext;
