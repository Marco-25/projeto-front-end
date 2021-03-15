import { useEffect, useState } from "react"
import styles from "./pathologyFormEdit.module.css"
import style from "./pathologyAttedanceModal.module.css"

export default function PathologyEdit() {
    const [modalAttendanceOpen, setModalAttendanceOpen] = useState(false)

    useEffect(() => {
        if (modalAttendance) {
            modalAttendance()
        }
    }, [modalAttendanceOpen])

    return (
        <>
            <div className={styles.patientAttendance}>
                <p><strong>Paciente : </strong> <span>Fulano de tal</span></p>
                <a onClick={() => setModalAttendanceOpen(true)}>
                    Ultimo atendimento
                </a>
            </div>

            <div className={styles.containerFluid}>
                <form method="post">
                    <h3 className={styles.title}>Patologias Do Paciente</h3>
                    <div className={styles.container}>
                        <div className={styles.boxSingle}>
                            <div>
                                <span>Diabetes</span>
                                <label>
                                    <input type="radio" /> <span>Sim</span>
                                </label>
                                <label>
                                    <input type="radio" /> <span>nao</span>
                                </label>
                            </div>

                            <div>
                                <span>Tem Historico na Familia</span>
                                <label>
                                    <input type="radio" /> <span>Sim</span>
                                </label>
                                <label>
                                    <input type="radio" /> <span>Sim</span>
                                </label>
                            </div>
                        </div>
                        <div className={styles.boxSingleObservations}>
                            <span>Observações</span>
                            <textarea className={styles.textarea} defaultValue="informaçoes do paciente"></textarea>
                        </div>
                    </div>

                    {/* ------------------------------------------- */}
                    <div className={styles.container}>
                        <div className={styles.boxSingle}>
                            <div>
                                <span>Hipertensão</span>
                                <label>
                                    <input type="radio" /> <span>Sim</span>
                                </label>
                                <label>
                                    <input type="radio" /> <span>nao</span>
                                </label>
                            </div>

                            <div>
                                <span>Tem Historico na Familia</span>
                                <label>
                                    <input type="radio" /> <span>Sim</span>
                                </label>
                                <label>
                                    <input type="radio" /> <span>Sim</span>
                                </label>
                            </div>
                        </div>
                        <div className={styles.boxSingleObservations}>
                            <span>Observações</span>
                            <textarea className={styles.textarea} defaultValue="informaçoes do paciente"></textarea>
                        </div>
                    </div>

                    {/* ------------------------------------------- */}
                    <div className={styles.container}>
                        <div className={styles.boxSingle}>
                            <div>
                                <span>Toma medicamentos controlados</span>
                                <label>
                                    <input type="radio" /> <span>Sim</span>
                                </label>
                                <label>
                                    <input type="radio" /> <span>nao</span>
                                </label>
                            </div>

                            <div>
                                <span>Tem Historico na Familia</span>
                                <label>
                                    <input type="radio" /> <span>Sim</span>
                                </label>
                                <label>
                                    <input type="radio" /> <span>Sim</span>
                                </label>
                            </div>
                        </div>
                        <div className={styles.boxSingleObservations}>
                            <span>Observações</span>
                            <textarea className={styles.textarea} defaultValue="informaçoes do paciente"></textarea>
                        </div>
                    </div>

                    {/* ------------------------------------------------ */}
                    <div className={styles.container}>
                        <div className={styles.boxSingle}>
                            <div>
                                <span>Alergico a medicamento</span>
                                <label>
                                    <input type="radio" /> <span>Sim</span>
                                </label>
                                <label>
                                    <input type="radio" /> <span>Sim</span>
                                </label>
                            </div>

                            <div>
                                <label>Alergico a qual medicamento</label>
                                <input type="text" placeholder="dipiroma" />
                            </div>
                        </div>
                    </div>

                    {/* ------------------------------------------------ */}

                    <div className={styles.container}>
                        <h3>pre-analise</h3>
                        <div className={styles.boxSingle}>
                            <div className={styles.containerCheckBox}>
                                <h4>sobre o paciente</h4>
                                <label>
                                    <input type="checkbox" />
                                    <span>Câncer</span>
                                </label>

                                <label>
                                    <input type="checkbox" />
                                    <span>Marca Passo</span>
                                </label>

                                <label>
                                    <input type="checkbox" />
                                    <span>Pinos</span>
                                </label>

                                <label>
                                    <input type="checkbox" />
                                    <span>Cardiopatia</span>
                                </label>

                                <label>
                                    <input type="checkbox" />
                                    <span>Cirurgia nos pés</span>
                                </label>

                            </div>

                            <div className={styles.containerCheckBox}>
                                <h4>sobre o pe do paciente</h4>
                                <label>
                                    <input type="checkbox" />
                                    <span>Calo</span>
                                </label>

                                <label>
                                    <input type="checkbox" />
                                    <span>Calosidade</span>
                                </label>

                                <label>
                                    <input type="checkbox" />
                                    <span>Fissura</span>
                                </label>

                                <label>
                                    <input type="checkbox" />
                                    <span>Ressecamento</span>
                                </label>

                                <label>
                                    <input type="checkbox" />
                                    <span>Psóriase</span>
                                </label>

                                <label>
                                    <input type="checkbox" />
                                    <span>Verruga Pantar</span>
                                </label>
                            </div>


                            <div className={styles.containerCheckBox}>
                                <h4>sobre a unha do paciente</h4>
                                <label>
                                    <input type="checkbox" />
                                    <span>Onicocriptose</span>
                                </label>

                                <label>
                                    <input type="checkbox" />
                                    <span>Onicólise</span>
                                </label>

                                <label>
                                    <input type="checkbox" />
                                    <span>Onicomicose</span>
                                </label>

                                <label>
                                    <input type="checkbox" />
                                    <span>Onicofose</span>
                                </label>

                            </div>
                        </div>
                    </div>
                    {/* ==================================================== */}
                    <div className={styles.container}>
                        <h3>sensibilidade a dor</h3>
                        <div className={styles.boxSingle}>
                            <label>
                                <input type="radio" />
                                <span>nenhuma</span>
                            </label>

                            <label>
                                <input type="radio" />
                                <span>pouca</span>
                            </label>

                            <label>
                                <input type="radio" />
                                <span>suportavel</span>
                            </label>

                            <label>
                                <input type="radio" />
                                <span>muita</span>
                            </label>
                        </div>
                    </div>
                    {/* ------------------------------------------------ */}

                    <div className={styles.container}>
                        <div className={styles.boxSingle}>
                            <span>
                                <label>Tipo de meia que mais usa</label>
                                <input type="text" />
                            </span>

                            <span>
                                <label>Calçado que mais usa</label>
                                <input type="text" />
                            </span>

                            <span>
                                <label>Numero do calçado</label>
                                <input type="text" />
                            </span>
                        </div>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.buttonsEdit}>
                            <input type="submit" defaultValue="cancelar" />
                            <input type="submit" defaultValue="Salvar " />
                        </div>
                    </div>

                </form>

            </div>
            <br />
            { (modalAttendanceOpen === true) ? modalAttendance() : ''}
        </>


    )

    function modalAttendance() {
        return (
            <div className={style.overlay}>
                <div className={style.container}>
                    <header>
                        <br />
                    </header>
                    <div className={style.body}>

                        <p><strong>Paciente :</strong> <span>Fulano de tal</span></p>

                        <div className={style.boxSingle}>
                            <h4>Observações Profissionais</h4>
                            <div>
                                <p><strong>Pé Esquerdo : </strong> <span>Normal</span></p>
                                <p><strong>Pé Direito : </strong> <span>Normal</span></p>
                            </div>
                        </div>

                        <div className={style.boxSingle}>
                            <h4>Digito Pressão</h4>
                            <div>
                                <p><strong>Pé Esquerdo : </strong> <span>10</span></p>
                                <p><strong>Pé Direito : </strong> <span>20</span></p>
                            </div>
                        </div>

                        <div className={style.boxSingle}>
                            <h4>Teste de Monofilamento</h4>
                            <div>
                                <p><strong>Pé Esquerdo : </strong> <span>....</span></p>
                                <p><strong>Pé Direito : </strong> <span>.....</span></p>
                            </div>
                        </div>

                        <div className={style.boxSingle}>
                            <h4>Patologias Ungueais Presentes</h4>
                            <div>
                                <p><strong>Pé Esquerdo : </strong> <span>....</span></p>
                                <p><strong>Pé Direito : </strong> <span>.....</span></p>
                            </div>
                        </div>

                        <div className={style.boxSingle}>
                            <h4>Procedimento Realizado</h4>
                            <br />
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur dolores nihil tempora culpa libero modi eos assumenda ipsam. Sunt, hic. Itaque est reiciendis illo vitae natus dolores molestiae cum. Enim?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur dolores nihil tempora culpa libero modi eos assumenda ipsam. Sunt, hic. Itaque est reiciendis illo vitae natus dolores molestiae cum. Enim?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur dolores nihil tempora culpa libero modi eos assumenda ipsam. Sunt, hic. Itaque est reiciendis illo vitae natus dolores molestiae cum. Enim?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur dolores nihil tempora culpa libero modi eos assumenda ipsam. Sunt, hic. Itaque est reiciendis illo vitae natus dolores molestiae cum. Enim?
                        </p>
                        </div>

                    </div>

                    <footer>
                        alguma coisa
                    </footer>
                    <button onClick={() => setModalAttendanceOpen(false)}>
                        x
            </button>
                </div>
            </div>
        )
    }
}