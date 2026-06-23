import { Image } from "@utrecht/component-library-react";
import styles from "./Hero.module.css";

type HeroProps = {
  alt?: string;
  src: string;
};

export function Hero({ alt = "", src }: HeroProps) {
  return (
    <div className={styles.hero}>
      <Image
        alt={alt}
        className={styles.image}
        decoding="async"
        height="560"
        loading="eager"
        photo
        src={src}
        width="1440"
      />
    </div>
  );
}
