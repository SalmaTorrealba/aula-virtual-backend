import ProfessorSidebar from "@/components/profesor/ProfessorSidebar";
import ProfessorTopBar from "@/components/profesor/ProfessorTopBar";
import styles from "./layout.module.css";

export default function ProfesorLayout({ children }) {
  return (
    <div className={styles.layout}>
      <ProfessorSidebar />

      <div className={styles.main}>
        <ProfessorTopBar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
