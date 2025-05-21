import { useGlobalStore } from "@/store/global.store.ts";
import { Button } from "@ui/Button/Button.tsx";
import { Icon } from "@ui/Icon/Icon.tsx";
import { TemplateItem } from "@widgets/TemplateItem/TemplateItem.tsx";
import styles from "./TemplateSelect.module.css";
import { useLocation } from "wouter";
import { useState } from "react";
import { ITemplate } from "@/types/template.types.ts";

export const TemplateSelect = () => {
  const { templates, startDay } = useGlobalStore();
  const [activeTemplate, setActiveTemplate] = useState<ITemplate>(templates[0]);

  const [, setLocation] = useLocation();

  const onSelectClick = () => {
    startDay(activeTemplate);
    setLocation("/tasks");
  };

  return (
    <div className={styles.template_select}>
      {templates.map((template) => {
        return (
          <TemplateItem
            template={template}
            active={template.id === activeTemplate.id}
            onClick={() => setActiveTemplate(template)}
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
