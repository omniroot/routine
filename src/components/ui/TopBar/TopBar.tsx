import type { IMDColor } from "@ui/MaterialProvider/MaterialTheme.types.ts";
import clsx from "clsx";
import React from "react";
import styles from "./TopBar.module.css";
import { Typography } from "@ui/Typography/Typography.tsx";
import { AnimatePresence, motion } from "motion/react";

interface IProps {
  title?: string;
  subTitle?: string;
  leftIcon?: React.ReactNode;
  rightIcons?: React.ReactNode[];
  size?: "small" | "medium" | "large";
  bg?: IMDColor;
}
export const TopBar: React.FC<IProps> = ({
  title = "TopBar",
  subTitle,
  // bg,
  leftIcon,
  rightIcons,
  size = "small",
}) => {
  const _class = clsx(styles.topbar, {
    [styles.topbar_small]: size === "small",
    [styles.topbar_medium]: size === "medium",
    [styles.topbar_large]: size === "large",
  });

  return (
    <motion.header className={_class} layout>
      <div className={styles.left}>
        {leftIcon}
        <motion.div
          className={styles.left_info}
          layout={"position"}
          // initial={{ scale: 0 }}
          // animate={{ scale: 1 }}
        >
          <AnimatePresence>
            {title && (
              <Typography variant="title" size="large">
                {title}
              </Typography>
            )}
            {subTitle && (
              <Typography variant="title" size="small" color="surface_variant">
                {subTitle}
              </Typography>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      <div className={styles.right}>{rightIcons}</div>
    </motion.header>
  );
};
