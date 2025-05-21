import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, useMotionValue, useTransform, motion } from "framer-motion";
import Icon from "../IconComponent";

const CrmInfo = ({
  icon,
  bgColor,
  iconColor,
  borderColor,
  title,
  value,
  valueColor = "text-[#49be30]",
  route,
}) => {
  const navigate = useNavigate();
  const motionValue = useMotionValue(0);

  const springValue = useSpring(motionValue, {
    stiffness: 80,
    damping: 12,
    mass: 1,
  });

  // Transform spring value to formatted number
  const displayValue = useTransform(springValue, (latest) =>
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    const end = Number(value) || 0;
    motionValue.set(end);
  }, [value, motionValue]);

  const handleClick = () => {
    if (route) navigate(route);
  };

  return (
    <div
      role="button"
      tabIndex="0"
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      className="flex w-full h-16 justify-start gap-3 items-center border border-border bg-white px-2 py-1.5 rounded-lg cursor-pointer hover:shadow-md transition-all"
    >
      <Icon
        icon={icon}
        iconColor={iconColor}
        bgColor={bgColor}
        borderColor={borderColor}
      />
      <div className="flex flex-col">
        <p className="text-textDark font-sfText text-sm font-medium">{title}</p>
        <motion.span
          className={`${valueColor} font-sfDisplay text-base font-medium leading-normal`}
        >
          {displayValue}
        </motion.span>
      </div>
    </div>
  );
};

export default CrmInfo;
