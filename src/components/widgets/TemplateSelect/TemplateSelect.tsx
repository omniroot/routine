import { templates, useGlobalStore } from "@/store/global.store.ts";
import { Button } from "@ui/Button/Button.tsx";
import { Icon } from "@ui/Icon/Icon.tsx";
import { TemplateItem } from "@widgets/TemplateItem/TemplateItem.tsx";
import styles from "./TemplateSelect.module.css";
import { useLocation } from "wouter";
import { useState } from "react";

export const TemplateSelect = () => {
  const [activeTemplateId, setActiveTemplateId] = useState("ayanokoji");
  const { startDay } = useGlobalStore();

  const [, setLocation] = useLocation();

  const onSelectClick = () => {
    startDay(activeTemplateId);
    setLocation("/tasks");
  };

  return (
    <div className={styles.template_select}>
      {templates.map((template) => {
        return (
          <TemplateItem
            template={template}
            active={template.id === activeTemplateId}
            onClick={() => setActiveTemplateId(template.id)}
          />
        );
      })}
      <Button className={styles.select_button} onClick={onSelectClick}>
        <Icon name="check" />
        Выбрать
      </Button>
    </div>
  );
};
