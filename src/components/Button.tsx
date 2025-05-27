import { Children } from "react";

type ButtonProps = {
  label?: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  children: React.ReactNode;
};
const Button = ({
  label,
  onClick,
  variant = "primary",
  disabled,
  children,
}: ButtonProps) => {
  const className = variant === "primary" ? "btn-primary" : "btn-secondary";
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
      {children}
    </button>
  );
};

export default Button;
