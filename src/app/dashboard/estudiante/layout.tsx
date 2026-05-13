import StudentSidebar from "@/components/students/StudentSidebar";
import StudentTopBar from "@/components/students/StudentTopBar";
import styles from "./layout.module.css";

export default function StudentLayout({ children }) {
  return (
    <div className={styles.layout}>
      <StudentSidebar />

      <div className={styles.main}>
        <StudentTopBar />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}
