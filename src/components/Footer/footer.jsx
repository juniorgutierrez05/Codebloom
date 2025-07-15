import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Codebloom. Todos los derechos reservados.</p>
    </footer>
  );
}
