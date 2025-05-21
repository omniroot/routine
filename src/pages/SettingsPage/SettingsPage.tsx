import { motion } from "motion/react";
import styles from "./SettingsPage.module.css";
import { useState } from "react";
import { Typography } from "@ui/Typography/Typography.tsx";
export const SettingsPage = () => {
  const [modal, setModal] = useState(false);

  return (
    <motion.div className={styles.page}>
      <motion.div
        layoutId="modal"
        style={{ backgroundColor: "#242424", width: "100%" }}
        onClick={() => setModal((prev) => !prev)}
      >
        <img src="/vite.svg" />
        <Typography>Vite</Typography>
      </motion.div>

      {modal && (
        <motion.div
          layoutId="modal"
          style={{
            left: "50%",
            translate: "-50%",
            position: "fixed",
            width: "250px",
            height: "250px",
            backgroundColor: "#242424",
          }}
          onClick={() => setModal((prev) => !prev)}
        >
          <img src="/vite.svg" />
          <Typography>Vite</Typography>
        </motion.div>
      )}
    </motion.div>
  );
};
