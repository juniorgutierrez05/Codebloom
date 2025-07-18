import styles from "./hero.module.css";


export default function Hero() {
  return (
    <section className={styles.hero}>
      <img className={styles.fondo} src="/Image/image.png" alt="Imagen de intro" />

      <div className={styles.content}>
        <h1 className={styles.eslogan}>Crecemos ideas con código</h1>
        <p className={styles.textIntro}>
          Tienes una idea, nosotros el <br />
          código para hacerla crecer.
        </p>
        <p className={styles.descripcion}>
          En Codebloom trabajamos contigo para crear soluciones digitales a la <br />
          medida de tus sueños y necesidades. Desde páginas web hasta sistemas <br />
          completos, combinamos diseño, tecnología e innovación para impulsar tu <br />
          marca, optimizar tus procesos y llevar tu negocio al siguiente nivel. <br />
          Creamos herramientas que funcionan, comunican y crecen contigo.
        </p>
      </div>

      <div className={styles.divButtons}>
        <div className={styles.buttonOne}>
          <h2 className={styles.title}>Más información</h2>
        </div>
        <div className={styles.buttonTwo}>
          <h2 className={styles.title}>Cotizar</h2>
        </div>
      </div>
    </section>
  );
}
