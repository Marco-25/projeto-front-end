import Head from 'next/head'
import Menu from '../components/Menu'
import PatientRecord from '../components/PatientRecord'

export default function Cadastro() {

    return (
        <>
            <Head>
                <title>Cadastro de Paciênte</title>
            </Head>
            <Menu />

            <main>
                <PatientRecord />
            </main>
        </>
    )
}