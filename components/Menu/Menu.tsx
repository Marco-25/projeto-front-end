import Link from 'next/link'
import styles from './Menu.module.css'
import { useRouter } from 'next/router'

export default function Menu() {
    const router = useRouter()

    return (

        <section className={styles.Header}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <a onClick={() => router.push('/')} >LOGO</a>
                </div>

                <nav>
                    <ul className={styles.menuDesktop}>
                        <a onClick={() => router.push('/')} >Home</a>

                        <a onClick={() => router.push('/cadastro')} >Cadastro</a>

                        <a onClick={() => router.push('/patologia')} >patologia</a>

                        <a onClick={() => router.push('/atendimento')} >atendimento</a>

                        <a onClick={() => router.push('/agenda')} >agenda</a>

                        <a onClick={() => router.push('/sair')} >sair</a>

                    </ul>
                </nav>
            </div>
        </section>
    )
}