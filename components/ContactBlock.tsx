import { Button, Heading3, Link, Paragraph, Surface } from "@utrecht/component-library-react";
import styles from "./ContactBlock.module.css";

type ContactBlockProps = {
  id?: string;
  phoneNumber?: string;
};

export function ContactBlock({ id = "contact", phoneNumber = "010 123 45 67" }: ContactBlockProps) {
  const titleId = `${id}-title`;
  const phoneHref = `tel:${phoneNumber.replaceAll(" ", "")}`;

  return (
    <aside aria-labelledby={titleId} className={styles.aside}>
      <Surface className={styles.surface}>
        <Heading3 id={titleId}>Contact</Heading3>
        <Paragraph>
          Telefoon: <Link href={phoneHref}>{phoneNumber}</Link>
        </Paragraph>
        <Button appearance="primary-action-button" type="button">
          Maak een afspraak
        </Button>
      </Surface>
    </aside>
  );
}
