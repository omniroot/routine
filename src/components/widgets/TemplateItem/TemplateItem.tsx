import { ITemplate } from "@/types/template.types.ts";
import { Box } from "@ui/Box/Box.tsx";
import { ImageView } from "@ui/ImageView/ImageView.tsx";
import { Typography } from "@ui/Typography/Typography.tsx";
import clsx from "clsx";
import { FC } from "react";
import styles from "./TemplateItem.module.css";
import { Icon } from "@ui/Icon/Icon.tsx";

interface ITemplateItemProps {
  template: ITemplate;
  active: boolean;
  onClick?: () => void;
}
export const TemplateItem: FC<ITemplateItemProps> = ({
  template,
  active,
  onClick,
}) => {
  const _class = clsx(styles.template_item, {
    [styles.active]: active,
  });
  return (
    <div className={_class} onClick={onClick}>
      <ImageView src={template.image} className={styles.image} />
      <Box className={styles.info}>
        <Box className={styles.name}>
          <Typography
            variant="title"
            size="large"
            weight="bold"
            family="Caveat"
          >
            {template.title}
          </Typography>
          {/* {active && ( */}
          <Icon
            name="badge-check"
            className={clsx(styles.active_badge, {
              [styles.actived]: active,
            })}
          />
          {/* )} */}
        </Box>
        <Typography
          variant="title"
          size="medium"
          weight="bold"
          family="Caveat"
          className={styles.description}
        >
          {template.description}
        </Typography>
      </Box>
    </div>
  );
};
