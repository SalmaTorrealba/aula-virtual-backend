import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variantClasses: Record<string, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  disabled,
  ...props
}) => {
  return (
    <button
      className={`
        px-4 py-2 rounded-md text-sm font-medium transition
        ${variantClasses[variant]}
        ${disabled ? "opacity-60 cursor-not-allowed" : ""}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
