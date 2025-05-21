import { Button } from "@ui/Button/Button.tsx";
import styles from "./CompletedPage.module.css";
import { Typography } from "@ui/Typography/Typography.tsx";
import { useGlobalStore } from "@/store/global.store.ts";
import { useLocation } from "wouter";
import { Icon } from "@ui/Icon/Icon.tsx";

export const CompletedPage = () => {
  const { stopDay } = useGlobalStore();
  const [, setLocation] = useLocation();
  const onStopDayClick = () => {
    stopDay();
    setLocation("/");
  };

  return (
    <div className={styles.page}>
      <Typography size="large" variant="headline" family="Caveat" weight="bold">
        Ты выполнил все свои задачи!
      </Typography>
      <br />
      <Typography size="large" variant="title" family="Caveat">
        Теперы ты можешь отдохнуть и заняться чем нибудь интересным!
      </Typography>
      <Button onClick={onStopDayClick} className={styles.complete_button}>
        <Icon name="circle-stop" />
        Закончить день
      </Button>
    </div>
  );
};
