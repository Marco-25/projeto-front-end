import Head from "next/head";
import LoginHome from '../components/Login'

export default function Login() {

    return (
        <>
            <Head>
                <title>Login</title>
            </Head>

            <main>
                <LoginHome />
            </main>
        </>
    )
}