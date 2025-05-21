import { useGlobalStore } from "@/store/global.store.ts";
import { Box } from "@ui/Box/Box.tsx";
import { Button } from "@ui/Button/Button.tsx";
import { Typography } from "@ui/Typography/Typography.tsx";
import { useLocation } from "wouter";
import styles from "./TasksPage.module.css";

export const TasksPage = () => {
  const { currentTasks, stopDay } = useGlobalStore();
  const [, setLocation] = useLocation();
  // goToNextTask = () => setCurrentTaskId(getCurrentTaskIndex + 1).id
  const onStopDayClick = () => {
    stopDay();
    setLocation("/");
  };

  return (
    <div className={styles.page}>
      {/* <ImageView src={currentTasks}/> */}
      <Typography>Tasks</Typography>
      <Box>
        {currentTasks.map((taskId) => (
          <Typography>{taskId}</Typography>
        ))}
      </Box>
      <Button onClick={onStopDayClick}>Stop day</Button>
    </div>
  );
};
