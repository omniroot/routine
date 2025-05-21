import type { FC, SVGProps } from "react";
import React, { useMemo } from "react";
import styles from "./Icon.module.css";
import clsx from "clsx";

// Определяем возможные названия иконок
type IconName =
  | "menu"
  | "badge-check"
  | "check"
  | "settings"
  | "list"
  | "circle-stop"; // Добавьте другие названия по необходимости

interface IIconProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  name: IconName;
  svgProps?: SVGProps<SVGSVGElement>;
}
const iconCache: Partial<Record<IconName, React.FC<SVGProps<SVGSVGElement>>>> =
  {};

const loadIcon = (name: IconName) => {
  if (!iconCache[name]) {
    iconCache[name] = React.lazy(() => import(`./svg/${name}.svg?react`));
  }
  return iconCache[name];
};

export const Icon: FC<IIconProps> = ({
  name,
  svgProps,
  className,
  ...rest
}) => {
  // Используем useMemo для кэширования компонента иконки
  const SvgIcon = useMemo(() => loadIcon(name), [name]);

  const _class = clsx(styles.icon, className);
  return (
    <div className={_class} {...rest}>
      <React.Suspense fallback={<div>Loading...</div>}>
        <SvgIcon {...svgProps} />
      </React.Suspense>
    </div>
  );
};
