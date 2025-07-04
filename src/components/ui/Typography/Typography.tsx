import type { IMDColor } from "@ui/MaterialProvider/MaterialTheme.types.ts";
import clsx from "clsx";
import type { FC } from "react";

interface ITypographyProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  variant?: "display" | "headline" | "title" | "body" | "label";
  size?: "large" | "medium" | "small";
  weight?:
    | "light"
    | "regular"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  color?: IMDColor;
  family?: "Open Sans" | "Caveat";
  // | "primary"
  // | "primary_container"
  // | "secondary"
  // | "secondary_container"
  // | "tertiary"
  // | "tertiary_container"
  // | "error"
  // | "error_container"
  // | "surface"
  // | "surface_container"
  // | "surface_container_high";
}
export const Typography: FC<ITypographyProps> = ({
  children,
  className,
  variant = "body",
  weight = "regular",
  size = "large",
  family = "Open Sans",
  color = "surface",
  ...props
}) => {
  const _class = clsx(className);
  return (
    <span
      className={_class}
      style={{
        color: `var(--md-on-${color})`,
        fontSize: `var(--font-size-${variant}-${size})`,
        fontWeight: weight,
        lineHeight: `var(--line-height-${variant}-${size})`,
        letterSpacing: `var(--letter-spacing-${variant}-${size})`,
        fontFamily: `${family}`,
      }}
      {...props}
    >
      {children}
    </span>
  );
};
