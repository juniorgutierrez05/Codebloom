import styles from "./section.module.css";
import Image from "next/image";

export default function Clients() {
  return (
    <section className={styles.clientsSection}>
      <h2 className={styles.title}>Nuestros Clientes</h2>

      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {[...Array(6)].map((_, i) => (
            <div className={styles.slide} key={i}>
              <Image src="/Image/image copy 7.png" alt="Hotel Grasol" width={50} height={50} />
              <p>HOTEL<br />GRASOL</p>
            </div>
          ))}
          {[...Array(6)].map((_, i) => (
            <div className={styles.slide} key={`codigo-${i}`}>
              <Image src="/Image/image copy 6.png" alt="Codigo" width={50} height={50} />
              <p>CODIGO<br />HAMBURGUESERO</p>
            </div>
          ))}
          {[...Array(6)].map((_, i) => (
            <div className={styles.slide} key={`heladeria-${i}`}>
              <Image src="/Image/image copy 8.png" alt="Heladería" width={50} height={50} />
              <p>HELADERIA<br />CREAM</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
