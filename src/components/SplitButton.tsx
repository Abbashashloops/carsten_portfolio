import React from "react";

interface SplitButtonProps {
  label: string;
  bgColor?: string; // default background
  hoverBgColor?: string; // hover background
  textColor?: string; // default text color
  hoverTextColor?: string; // hover text color
  onClick?: () => void;
}

const SplitButton: React.FC<SplitButtonProps> = ({
  label,
  bgColor = "bg-[#f3ff4d]",
  hoverBgColor = "hover:bg-black",
  textColor = "text-black",
  hoverTextColor = "hover:text-[#f3ff4d]",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        mt-auto self-start inline-flex items-center transition leading-none rounded-sm
        ${bgColor} ${hoverBgColor} ${textColor} ${hoverTextColor}
      `}
    >
      {/* Left part (Text) */}
      <span className="px-4 py-2 text-xs font-black uppercase tracking-wide">
        {label}
      </span>

      {/* Divider */}
      <span className="w-px h-6 bg-black"></span>

      {/* Right part (Arrow) */}
      <span className="px-3 text-base">→</span>
    </button>
  );
};

export default SplitButton;
