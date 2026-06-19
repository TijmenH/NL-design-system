import { Heading1, PageHeader } from "@utrecht/component-library-react";
import styles from "./AppHeader.module.css";

export function AppHeader() {
  return (
    <PageHeader className={styles.header}>
      <Heading1 className={styles.title}>NL Design System</Heading1>
    </PageHeader>
  );
}
