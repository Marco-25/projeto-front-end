import styles from './login.module.css'
import { useRouter } from 'next/router'
export default function LoginHome() {
    const router = useRouter()
    return (
        <>
            <section className={styles.container}>

                <form method="post">
                    <h2> | Lu - Podologa |</h2>
                    <input type="text" placeholder="E-mail" />
                    <input type="password" placeholder="Senha" />

                    <div className={styles.containerButtons}>
                        <button type="button"> Logar</button>
                        <button
                            type="button"
                            onClick={() => router.push('/site')}
                        > Acessar Site</button>
                    </div>
                </form>

            </section>
        </>
    )
}