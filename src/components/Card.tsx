import type { ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
};
const Card = ({ title, children, footer }: CardProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>{children}</div>
      {footer && <footer>{footer}</footer>}
    </div>
  );
};

export default Card;
