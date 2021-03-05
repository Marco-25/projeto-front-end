import { useState } from 'react'
import styles from './home.module.css'

export default function PatientHome() {
    const [search, setSearch] = useState('')

    return (
        <>
            <div className={styles.containerHome__patient}>

                <h4>Lista de pacientes</h4>
                <form method="post"
                    onSubmit={event => {
                        event.preventDefault()
                        console.log({ search })
                    }}
                >
                    <input
                        onChange={event => setSearch(event.target.value)}
                        value={search}
                        name="search"
                        id="search"
                        placeholder="Pesquise por uma paciente"
                        type="text" />

                    <input type="submit"
                        value="Pesquisar" />
                </form>
                <ul>
                    <li>Paciente
                            <div className={styles.containerHome__patientButtons}>
                            <button>editar</button>
                            <button>excluir</button>
                        </div>
                    </li>

                    <li>Paciente
                            <div className={styles.containerHome__patientButtons}>
                            <button>editar</button>
                            <button>excluir</button>
                        </div>
                    </li>

                    <li>Paciente
                            <div className={styles.containerHome__patientButtons}>
                            <button>editar</button>
                            <button>excluir</button>
                        </div>
                    </li>

                    <li>Paciente
                            <div className={styles.containerHome__patientButtons}>
                            <button>editar</button>
                            <button>excluir</button>
                        </div>
                    </li>


                </ul>
            </div>
        </>
    )
}