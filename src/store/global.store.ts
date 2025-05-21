import { ITask } from "@/types/tasks.types.ts";
import { ITemplate } from "@/types/template.types.ts";
import { create } from "zustand";

import data from "@/assets/data.json";

const getTaskById = (tasks: ITask[], id: string) => {
  return tasks.filter((t) => t.id === id)[0];
};

console.log({ data });

interface ISession {
  currentTask: ITask | null;
  currentTasks: ITask[] | null;
  currentTemplate: ITemplate | null;
  isDone: boolean;
}

// export const templates =  as ITemplate[];
interface IGlobalStore {
  templates: ITemplate[];
  tasks: ITask[];
  isDone: boolean;
  currentTemplate: ITemplate | null;
  currentTasks: ITask[] | null;
  currentTask: ITask | null;
  startDay: (template: ITemplate) => void;
  stopDay: () => void;
  restoreLastSession: () => boolean;
  nextTask: () => void;

  // setCurrentTemplateId: (newId: string) => void;
  // setCurrentTaskId: (newId: string) => void;
  // getTemplate: (templateId: string) => ITemplate;
}

export const useGlobalStore = create<IGlobalStore>((set, get) => ({
  templates: data.templates,
  tasks: data.tasks,
  isDone: false,
  currentTemplate: null,
  currentTasks: null,
  currentTask: null,
  startDay: (template) => {
    const tasksIds = get().templates.filter((t) => t.id === template.id)[0]
      .tasks;
    const _tasks = tasksIds.map((id) => {
      return getTaskById(get().tasks, id);
    });

    console.log("@ start day", { tasks: _tasks, tasksIds });

    set({
      currentTemplate: template,
      currentTasks: _tasks,
      currentTask: _tasks[0],
      isDone: false,
    });
    // localStorage.setItem("routine-last-template-id", templateId);
    // localStorage.setItem("routine-last-task-id", tasks[0]);
  },
  nextTask: () => {
    const _tasks = get().currentTasks?.slice(1);
    console.log({ _tasks });

    if (!_tasks?.length) {
      set({
        isDone: true,
        currentTasks: null,

        currentTask: getTaskById(get().tasks, "completed-day"),
      });
      return;
    }
    set({
      currentTasks: _tasks,
      currentTask: _tasks?.[0] || null,
    });
  },
  restoreLastSession: () => {
    const lastSession = localStorage.getItem("routine-last-session");
    if (lastSession) {
      console.log("Session found!");
      const data: ISession = JSON.parse(
        localStorage.getItem("routine-last-session") || ""
      );

      set({
        ...data,
      });

      console.log("Session restored!");

      return true;
    } else {
      console.log("Last session not found");
      return false;
    }
  },
  // setCurrentTemplateId: (newId) => set({ currentTemplate: newId }),
  // setCurrentTaskId: (newId) => {
  //   set({ currentTask: newId });
  // },
  // getTemplate: (templateId) => {
  //   return templates.filter((template) => template.id === templateId)[0];
  // },
  stopDay: () => {
    set({
      currentTemplate: null,
      currentTask: null,
      // tasks: [],
    });
    localStorage.removeItem("routine-last-session");
  },
}));

useGlobalStore.subscribe((state) => {
  const { currentTask, currentTasks, currentTemplate, isDone } = state;
  const data = { currentTask, currentTasks, currentTemplate, isDone };
  localStorage.setItem("routine-last-session", JSON.stringify(data));
});
