import { Heading1, Link, PageHeader } from "@utrecht/component-library-react";
import styles from "./AppHeader.module.css";

export function AppHeader() {
  return (
    <PageHeader>
      <Heading1>
        <Link className={styles.logoLink} href="/" rel="home">
          NL Design System
        </Link>
      </Heading1>
    </PageHeader>
  );
}
