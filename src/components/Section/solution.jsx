import styles from "./section.module.css";
import Image from "next/image";
import ScheduleButton from "../Button/button";
export default function solutions() {
  return (
    <section className={styles.solutions} id="soluciones">
      <div className={styles.leftColumn}>
        <h3 className={styles.sectionTitle}>NUESTROS SERVICIOS</h3>
        <h2 className={styles.mainTitle}>SOLUCIONES DIGITALES PERSONALIZADAS</h2>
        <p className={styles.description}>
          Diseñamos y desarrollamos herramientas digitales que se adaptan a tu negocio.
          Desde plataformas web hasta sistemas de gestión, nuestras soluciones están hechas
          a la medida de tus objetivos.
        </p>
        <Image
          src="/Image/logo2.png"
          width={200}
          height={200}
          alt="Logo Codebloom"
          className={styles.logo}
        />
        <div className={styles.cta}>
          <ScheduleButton/>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <div className={styles.card}>
            <img className={styles.icono} src="/Image/image copy 2.png" alt="" />
          <h4>Desarrollo de Software</h4>
          <p>
            Creamos aplicaciones que resuelven tus problemas específicos, integrando bases
            de datos, seguridad y escalabilidad.
          </p>
        </div>

        <div className={styles.card}>
            <img className={styles.icono} src="/Image/image copy 3.png" alt="" />
          <h4>Desarrollo Web</h4>
          <p>
            Diseñamos sitios web modernos, rápidos y optimizados para que tus clientes te
            encuentren y confíen en ti.
          </p>
        </div>

        <div className={styles.card}>
            <img className={styles.icono} src="/Image/image copy 4.png" alt="" />
          <h4>Diseño (UI/UX)</h4>
          <p>
            Interfaces limpias, modernas y funcionales que conectan con tus usuarios desde
            el primer clic.
          </p>
        </div>

        <div className={styles.card}>
            <img className={styles.icono} src="/Image/image copy 5.png" alt="" />
          <h4>Mantenimiento y Soporte</h4>
          <p>
            Te acompañamos en el camino, asegurando que todo funcione bien con soporte técnico
            y actualizaciones constantes.
          </p>
        </div>
      </div>
    </section>
  );
}
