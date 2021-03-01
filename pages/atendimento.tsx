import Head from "next/head";
import Attendance from "../components/Attendance";
import Menu from "../components/Menu";


export default function Atendimento() {

    return (

        <>
            <Head>
                <title>Cadastro de Atendimento</title>
            </Head>
            <Menu />
            <main>
                <Attendance />
            </main>
        </>
    )
}