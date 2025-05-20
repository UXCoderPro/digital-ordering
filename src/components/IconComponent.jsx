import React from "react";

const Icon = ({
  icon: IconComponent,
  iconColor = "text-primary",
  bgColor = "bg-redShade",
  borderColor = "border-border",
  size = "w-8 h-8",
  className = "",
}) => {
  return (
    <div
      className={`flex ${size} justify-center items-center border ${borderColor} ${bgColor} backdrop-blur p-1 rounded-md ${className}`}
    >
      <IconComponent className={`${iconColor} w-4 h-auto`} />
    </div>
  );
};

export default Icon;
