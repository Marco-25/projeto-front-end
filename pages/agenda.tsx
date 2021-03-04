import Head from "next/head"
import Menu from "../components/Menu"
import Calendar from "../components/Calendar"
import moment from 'moment'
import { useState } from 'react';


export default function Agenda() {
    const [value, setValue] = useState(moment())
    return (
        <>
            <Head>
                <title>Agenda</title>
            </Head>
            <Menu />
            <main>
                <Calendar value={value} onChange={setValue} />
            </main>
        </>
    )
}