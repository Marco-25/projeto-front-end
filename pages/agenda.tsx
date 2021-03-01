import Head from "next/head"
import Menu from "../components/Menu"
import Schedule from "../components/Schedule"


export default function Agenda() {

    return (
        <>
            <Head>
                <title>Agenda</title>
            </Head>
            <Menu />
            <main>
                <Schedule />
            </main>
        </>
    )
}