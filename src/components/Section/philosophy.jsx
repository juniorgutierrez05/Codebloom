import styles from "./section.module.css"

export default function philosophy(){
    return(
        <div  className={styles.container}>
            <div className={styles.content}>
                <h1>NUESTRA FILOSOFIA</h1>
                <p>En Codebloom, creemos que cada idea merece florecer
                 con la tecnología adecuada. Nos guía la pasión por
                 crear, el compromiso con la calidad y la convicción de
                 que el desarrollo digital debe ser accesible, funcional y
                 significativo. Trabajamos codo a codo con nuestros
                 clientes, escuchando, entendiendo y convirtiendo sus
                 necesidades en soluciones que generan valor real. No
                 solo escribimos código: cultivamos relaciones,
                 construimos confianza y sembramos innovación en cada
                 proyecto.</p>
                 <div className={styles.button}>
                    <h2>¿Quienes Somos?</h2>
                 </div>
            </div>
            
            <div className={styles.divImage}>
                <img className={styles.image} src="./Image/image copy.png" alt="" />
            </div>
        </div>
    )
}