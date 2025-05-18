import { Link } from "wouter";
import styles from "./HomePage.module.css";
export const HomePage = () => {
  return (
    <div className={styles.page}>
      Home
      <Link href={"/settings"}>123</Link>
    </div>
  );
};
