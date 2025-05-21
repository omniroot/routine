import { ImageView } from "@ui/ImageView/ImageView.tsx";
import styles from "./HomePage.module.css";
import { motion } from "motion/react";
import { Box } from "@ui/Box/Box.tsx";
import { Typography } from "@ui/Typography/Typography.tsx";
import { TemplateSelect } from "@widgets/TemplateSelect/TemplateSelect.tsx";

export const HomePage = () => {
  return (
    <motion.div className={styles.page}>
      <Box className={styles.hello_container}>
        <ImageView src="/hello.png" className={styles.hello_image} />
        <Typography
          variant="headline"
          size="large"
          weight="bold"
          family="Caveat"
        >
          Кем ты сегодня хочешь быть?
        </Typography>
      </Box>
      <TemplateSelect />
    </motion.div>
  );
};
