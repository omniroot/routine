import { ITemplate } from "@/types/template.types.ts";
import { create } from "zustand";
import data from "~/public/data.json";

export const templates = data.templates as ITemplate[];
interface IGlobalStore {
  isStart: boolean;
  currentTemplateId: string;
  currentTaskId: string;
  currentTasks: string[];
  startDay: (templateId: string) => void;
  stopDay: () => void;
  restoreLastSession: () => boolean;

  setIsStart: (newState: boolean) => void;
  setCurrentTemplateId: (newId: string) => void;
  setCurrentTaskId: (newId: string) => void;
  getTemplate: (templateId: string) => ITemplate;
}

export const useGlobalStore = create<IGlobalStore>((set) => ({
  isStart: false,
  currentTemplateId: "ayanokoji",
  currentTaskId: "make-up-the-bed",
  currentTasks: [],
  startDay: (templateId) => {
    const tasks = templates.filter((t) => t.id === templateId)[0].tasks;
    set({
      currentTemplateId: templateId,
      currentTaskId: tasks[0],
      currentTasks: tasks,
      isStart: true,
    });
    localStorage.setItem("routine-last-template-id", templateId);
    localStorage.setItem("routine-last-task-id", tasks[0]);
  },
  restoreLastSession: () => {
    const lastTemplateId = localStorage.getItem("routine-last-template-id");
    const lastTaskId = localStorage.getItem("routine-last-task-id");
    if (lastTemplateId && lastTaskId) {
      const tasks = templates.filter((t) => t.id === lastTemplateId)[0].tasks;
      set({
        currentTemplateId: lastTemplateId,
        currentTaskId: lastTaskId,
        currentTasks: tasks,
        isStart: true,
      });
      return true;
    } else {
      console.log("Last session not found");
      return false;
    }
  },
  setIsStart: (newState) => set({ isStart: newState }),
  setCurrentTemplateId: (newId) => set({ currentTemplateId: newId }),
  setCurrentTaskId: (newId) => {
    set({ currentTaskId: newId });
  },
  getTemplate: (templateId) => {
    return templates.filter((template) => template.id === templateId)[0];
  },
  stopDay: () => {
    set({
      isStart: false,
      currentTemplateId: "ayanokoji",
      currentTaskId: "make-up-the-bed",
      currentTasks: [],
    });
    localStorage.removeItem("routine-last-template-id");
    localStorage.removeItem("routine-last-task-id");
  },
}));
