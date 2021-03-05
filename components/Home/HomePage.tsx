import Link from 'next/link'
import styles from './home.module.css'
import PatientHome from './PatientHome'
import TasksHome from './TasksHome'

export default function HomePage() {

    return (
        <>
            <section className={styles.containerHome}>

                <PatientHome />

                <TasksHome />

            </section>
        </>
    )
}