import { useGlobalStore } from "@/store/global.store.ts";
import { Box } from "@ui/Box/Box.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { Icon } from "@ui/Icon/Icon.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { Typography } from "@ui/Typography/Typography.tsx";
import { useLocation } from "wouter";
import styles from "./TasksPage.module.css";

export const TasksPage = () => {
  const { isDone, currentTask, nextTask, stopDay } = useGlobalStore();
  const [, setLocation] = useLocation();
  // goToNextTask = () => setCurrentTaskId(getCurrentTaskIndex + 1).id

  const onCompleteClick = () => {
    nextTask();
  };

  const onDoneClick = () => {
    stopDay();
    setLocation("/");
  };

  console.log({ currentTask });

  return (
    <div className={styles.page}>
      <ImageView src={currentTask?.image} className={styles.image} />
      <Typography size="large" variant="headline" family="Caveat" weight="bold">
        {currentTask?.title}
      </Typography>
      <Typography variant="title" family="Caveat">
        {currentTask?.description}
      </Typography>
      <Box className={styles.bottom_bar}>
        {isDone ? (
          <Button onClick={onDoneClick}>
            <Icon name="circle-stop" />
            Завершить день
          </Button>
        ) : (
          <Button onClick={onCompleteClick}>
            <Icon name="check" />
            Выполнено
          </Button>
        )}
      </Box>
    </div>
  );
};
