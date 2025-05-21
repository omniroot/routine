import clsx from "clsx";
import styles from "./Box.module.css";
import { ReactNode } from "react";

export interface IBoxProps {
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
}

export const Box: React.FC<IBoxProps> = ({ className, children, ...rest }) => {
  const _class = clsx(styles.box, className);
  return (
    <div className={_class} {...rest}>
      {children}
    </div>
  );
};
