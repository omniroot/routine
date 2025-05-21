import { Button } from "@ui/Button/Button.tsx";
import { Icon } from "@ui/Icon/Icon.tsx";
import { FC } from "react";
import styles from "./BottomBar.module.css";
interface IBottomBarProps {}
export const BottomBar: FC<IBottomBarProps> = () => {
  return (
    <div className={styles.bottom_bar}>
      <Button>
        <Icon name="settings" />
      </Button>

      <Button>
        <Icon name="check" />
        Выполнено
      </Button>

      <Button>
        <Icon name="list" />
      </Button>
    </div>
  );
};
