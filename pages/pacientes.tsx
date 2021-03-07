import Head from "next/head";
import Menu from "../components/Menu";
import Patients from "../components/PatientRecord/Patients/Patients";

export default function Pacientes() {

    return (
        <>
            <Head>
                <title>Pacientes</title>
            </Head>
            <Menu />

            <main>
                <Patients />
            </main>
        </>
    )
}