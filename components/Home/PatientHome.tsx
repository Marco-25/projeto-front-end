import { route } from 'next/dist/next-server/server/router'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import styles from './home.module.css'
import style from './PatientEdit.module.css'
// import PatientEditModal from './PatientEditModal'

export default function PatientHome() {
    const router = useRouter()
    const [search, setSearch] = useState('')
    const [modalEditOpen, setModalEditOpen] = useState(false)

    useEffect(() => {
        if (modalEditOpen) {
            modalEdit()
        }
    }, [modalEditOpen])

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    return (

        <>
            <div className={styles.containerHome__patient}>

                <div>
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
                </div>

                <ul className={styles.containerListPatient}>

                    {
                        array.map((item, index) => (
                            <li key={index}>
                                <a onClick={() => router.push('/pacientes')}>
                                    Antônio Treze de Junho de Mil Novecentos e Dezessete
                                </a>

                                <div className={styles.containerHome__patientButtons}>

                                    <button onClick={() => router.push('/patologias')}>
                                        Patologias
                                    </button>

                                    <button onClick={() => setModalEditOpen(true)}>
                                        <img src="edit.svg" alt="" />
                                    </button>
                                    <button onClick={() => {
                                        { confirm("desja excluir o registro?") ? console.log("excluido") : console.log("cancelado") }
                                    }}>
                                        <img src="delete.svg" alt="" />
                                    </button>
                                </div>

                            </li>
                        ))
                    }
                </ul>
            </div>
            {(modalEditOpen === true) ? modalEdit() : ''}
        </>
    )


    function modalEdit() {
        return (
            <div className={style.overlay}>
                <div className={style.container}>
                    <header>
                        <h4>Editar paciente</h4>
                    </header>
                    <div className={style.body}>
                        <form method="post">

                            <div className={style.formControlModal}>
                                <div>
                                    <label>Nome Completo</label>
                                    <input type="text" placeholder="nomeCompleto" />
                                </div>

                                <div>
                                    <label>Data de Nascimento</label>
                                    <input type="text" placeholder="00/00/0000" />
                                </div>
                            </div>

                            <div className={style.formControlModal}>
                                <div>
                                    <label>E-mail</label>
                                    <input type="text" placeholder="email@email.com" />
                                </div>

                                <div>
                                    <label>Celular</label>
                                    <input type="text" placeholder="14 9 9999-9999" />
                                </div>

                                <div>
                                    <label>Profissão</label>
                                    <input type="text" placeholder="Programador" />
                                </div>
                            </div>

                            <div className={style.formControlModal}>
                                <div className={style.col30}>
                                    <label>CEP</label>
                                    <input type="text" placeholder="17560-000" />
                                </div>

                                <div className={style.col60}>
                                    <label>Cidade</label>
                                    <input type="text" placeholder="Cidade" />
                                </div>
                            </div>

                            <div className={style.formControlModal}>

                                <div>
                                    <label>Endereço</label>
                                    <input type="text" placeholder="avenida paulista" />
                                </div>

                                <div>
                                    <label>numero</label>
                                    <input type="text" placeholder="1245" />
                                </div>

                                <div>
                                    <label>Bairro</label>
                                    <input type="text" placeholder="centro" />
                                </div>
                            </div>

                            <div className={style.formControlModal}>
                                <div >
                                    <label>Pratica Atividade Fisica</label>
                                    <span className={style.formControlModalRadio}>
                                        <label>
                                            <input type="radio" name="gender" /> <span>sim</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="gender" /> <span>não</span>
                                        </label>
                                    </span>
                                </div>

                                <div className={style.col60}>
                                    <label>Qual Atividade</label>
                                    <input type="text" placeholder="Boxe" />
                                </div>
                            </div>

                            <div className={style.formButtonModal}>
                                <input type="submit" value="Cancelar" onClick={() => setModalEditOpen(false)} />
                                <input type="submit" value="Editar" />
                            </div>

                        </form>

                    </div>

                    <footer>
                    </footer>
                    <button onClick={() => setModalEditOpen(false)}>
                        x
                </button>
                </div>
            </div>

        )
    }
}

