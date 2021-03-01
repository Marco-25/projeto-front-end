import Head from 'next/head'
import Menu from '../components/Menu'
import PathologyRegister from '../components/PathologyRegister'

export default function Sobre() {
    return (

        <>
            <Head>
                <title>Cadastro de Patologia</title>
            </Head>
            <Menu />
            <main>
                <PathologyRegister />
            </main>
        </>
    )
}