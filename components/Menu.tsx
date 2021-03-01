import Link from 'next/link'
import styles from '../styles/components/Menu.module.css'

export default function Menu() {

    return (

        <section className={styles.Header}>
            <div className={styles.container}>
                <div className={styles.brand}>Logo</div>

                <nav>
                    <ul className={styles.menuDesktop}>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/cadastro">
                                <a>Cadastro</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/patologia">
                                <a>Patologia</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/atendimento">
                                <a>Atendimento</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/agenda">
                                <a>Agenda</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sair">
                                <a>Sair</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    )
}