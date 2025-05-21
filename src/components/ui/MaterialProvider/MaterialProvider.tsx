import { createContext, useContext, useEffect, useState } from "react";
import "./MaterialTheme.module.css";
import type { IMDColor } from "./MaterialTheme.types.ts";
import {
  applyMaterialTheme,
  getMaterialScheme,
} from "./MaterialTheme.utils.ts";

interface IProps {
  defaultColor?: string;
  type?: "dark" | "light";
  bg?: IMDColor;
}

const MaterialThemeContext = createContext<
  | {
      color: string;
      changeColor: (color: string) => void;
      getVar: (
        name: string | undefined,
        type?: "background" | "color"
      ) => string | undefined;
    }
  | undefined
>(undefined);

export const MaterialThemeProvider = ({
  children,
  defaultColor = "#ee715a",
  type = "dark",
  bg = "surface",
}: IProps & { children: React.ReactNode }) => {
  const [color, setColor] = useState(() => {
    const savedColor = localStorage.getItem("material-theme-color");
    return savedColor || defaultColor;
  });

  useEffect(() => {
    const scheme = getMaterialScheme(color);
    console.log(`Scheme generated from ${color} color! `, scheme);
    applyMaterialTheme(scheme, { type });
    localStorage.setItem("material-theme-color", color);
    console.log(getVar(bg));

    document.getElementsByTagName("body")[0].style.color = `${getVar(
      bg
    )} !important`;
    document.getElementsByTagName("body")[0].style.backgroundColor = `${getVar(
      bg,
      "background"
    )} !important`;
    document.getElementsByTagName("html")[0].style.color = `${getVar(
      bg
    )} !important`;
    document.getElementsByTagName("html")[0].style.backgroundColor = `${getVar(
      bg,
      "background"
    )} !important`;
  }, [bg, color, type]);

  const changeColor = (color: string) => {
    const hexPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (hexPattern.test(color)) {
      setColor(color);
      console.log("Apply theme: ", color);
    } else {
      console.error(
        "Недопустимый HEX-цвет. Используйте формат #RRGGBB или #RGB, используется цвет по умолчанию или #ee715a"
      );
      setColor(defaultColor || "#ee715a");
    }
  };

  const getVar = (
    name: IMDColor | string | undefined,
    type: "background" | "color" = "color"
  ) => {
    if (!name) return;
    const convertedName = name.toLocaleLowerCase().replaceAll("_", "-");
    // console.log({ convertedName });

    return `var(--md-${type === "color" ? "on-" : ""}${convertedName})`;
  };

  return (
    <MaterialThemeContext.Provider value={{ color, changeColor, getVar }}>
      {children}
    </MaterialThemeContext.Provider>
  );
};

export const useMaterialTheme = () => {
  const context = useContext(MaterialThemeContext);
  if (!context) {
    throw new Error(
      "useMaterialTheme must be used within a MaterialThemeProvider"
    );
  }
  return context;
};
