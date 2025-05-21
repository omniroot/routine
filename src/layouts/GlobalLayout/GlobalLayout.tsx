import { useGlobalStore } from "@/store/global.store.ts";
import { CompletedPage } from "@pages/CompletedPage/CompletedPage.tsx";
import { HomePage } from "@pages/HomePage/HomePage.tsx";
import { SettingsPage } from "@pages/SettingsPage/SettingsPage.tsx";
import { TasksPage } from "@pages/TasksPage/TasksPage.tsx";
import { TopBar } from "@ui/TopBar/TopBar";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { Route, Switch, useLocation } from "wouter";

export const GlobalLayout = () => {
  const [, setLocation] = useLocation();
  const { restoreLastSession } = useGlobalStore();

  useEffect(() => {
    const isSuccess = restoreLastSession();
    console.log(isSuccess);

    if (isSuccess) {
      setLocation("/tasks");
    }
  }, [restoreLastSession, setLocation]);
  return (
    <>
      <TopBar
        title="Routine"
        // size={tg ? "medium" : "small"}
        // rightIcons={[<Icon name="menu" onClick={toggle} />]}
      />
      <AnimatePresence>
        <motion.main layout>
          <Switch>
            <Route path={"/"} component={HomePage} />
            <Route path={"/tasks"} component={TasksPage} />
            <Route path={"/settings"} component={SettingsPage} />
          </Switch>
        </motion.main>
      </AnimatePresence>
      {/* <BottomBar /> */}
    </>
  );
};
