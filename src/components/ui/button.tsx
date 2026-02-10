import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "font-medium rounded-lg transition-colors focus:outline-none";
    
    const variantStyles = {
      default: "bg-blue-600 text-white hover:bg-blue-700 shadow-[0_0_20px_rgba(59,130,246,0.4)]",
      outline: "border border-white/20 text-white hover:bg-white/10",
      ghost: "text-white hover:bg-white/5",
    };
    
    const sizeStyles = {
      default: "px-4 py-2 text-base",
      sm: "px-3 py-1 text-sm",
      lg: "px-6 py-3 text-lg",
    };
    
    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
