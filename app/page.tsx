import { Heading2, Paragraph } from "@utrecht/component-library-react";
import { ContactBlock } from "@/components/ContactBlock";
import { Hero } from "@/components/Hero";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Hero alt="Gracht met historische gebouwen in Utrecht." src="/utrecht-image.webp" />
      <section aria-labelledby="intro-title" className={styles.intro}>
        <div className={styles.introText}>
          <Heading2 id="intro-title">Experiment met NL Design System</Heading2>
          <Paragraph>
            Welkom, dit is een experiment voor het uitproberen van de NL Design System componenten bibliotheek.
          </Paragraph>
        </div>
        <ContactBlock />
      </section>
    </div>
  );
}
