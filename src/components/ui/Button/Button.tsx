import clsx from "clsx";
import React, { FC } from "react";
import styles from "./Button.module.css";

interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  loading?: boolean;
  asLink?: boolean;
  variant?:
    | "primary"
    | "outline"
    | "secondary"
    | "tertiary"
    | "background"
    | "delete"
    | "error"
    | "ghost"
    | "gradient"
    | "animego"
    | "hanime"
    | "nhentai"
    | "shikimori";
  shadow?: boolean;
  circle?: boolean;
}

export const Button: FC<IButtonProps> = ({
  children,
  className,
  disabled = false,
  loading = false,
  asLink = false,
  variant = "primary",
  circle = false,
  shadow = false,
  ...rest
}) => {
  // const _style = css`
  // 	color: ${getVar(variant)};
  // 	background-color: ${getVar(variant, "background")};
  // `;

  const _class = clsx(styles.button, className);
  return (
    <button
      className={_class}
      disabled={disabled || loading}
      data-disabled={disabled || loading}
      data-loading={loading}
      data-variant={variant}
      data-circle={circle}
      data-aslink={asLink}
      data-shadow={shadow}
      {...rest}
    >
      {/* {loading && <Loader width={24} height={24} />} */}
      {children}
    </button>
  );
};
