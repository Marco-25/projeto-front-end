import styles from './Patients.module.css'

export default function Patients() {

    return (
        <>
            <div className={styles.container}>
                <h3>Ficha do Paciente</h3>
                <p><strong>Pontuação : </strong>25</p>
                <div className={styles.containerPatientData}>
                    <div className={styles.containerSinglePatient}>
                        <p><strong>nome :</strong> <span>nome paciente</span> </p>
                        <p> <strong>Data de nascomento :</strong> <span>00/00/0000</span> </p>
                        <p><strong>sexo :</strong> <span>masculino</span>  </p>
                        <p><strong>email :</strong> <span>email@email.com</span> </p>
                        <p><strong>Celular/WhatsApp :</strong> <span>14 9 9999-9999</span> </p>
                        <p><strong>Profissão :</strong> <span>programador</span> </p>
                    </div>

                    <div className={styles.containerSinglePatient}>
                        <p><strong>cep :</strong> <span>7560-000</span> </p>
                        <p><strong>Endereço :</strong> <span>marilia</span> </p>
                        <p><strong>numero :</strong> <span>1234</span> </p>
                        <p><strong>bairo :</strong> <span>centro</span> </p>
                        <p><strong>Pratica Atividade Fisica :</strong> <span>sim</span> </p>
                        <p><strong>qual Atividade Fisica :</strong> <span>Boxe</span> </p>
                    </div>
                </div>

                <div className={styles.containerPathology}>
                    <h3>Patologias</h3>
                    <p><strong>diabes :</strong> <span>não</span></p>
                    <p><strong>historico na familia :</strong> <span>não</span></p>
                    <p className={styles.PathologyObservation}><strong>observações: </strong> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa accusamus quidem? Cumque placeat reprehenderit ipsam distinctio dolore aut, totam molestias officiis, hic quasi in explicabo sapiente enim quo numquam.</span></p>

                    <p><strong>Hipertensão :</strong> <span>não</span></p>
                    <p><strong>historico na familia :</strong> <span>não</span></p>
                    <p className={styles.PathologyObservation}><strong>observações:</strong> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa accusamus quidem? Cumque placeat reprehenderit ipsam distinctio dolore aut, totam molestias officiis, hic quasi in explicabo sapiente enim quo numquam.</span></p>

                    <p><strong>Toma Medicamentos Controlados :</strong> <span>não</span></p>
                    <p><strong>Alguem na familia toma :</strong> <span>não</span></p>
                    <p className={styles.PathologyObservation}><strong>observações:</strong> <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa accusamus quidem? Cumque placeat reprehenderit ipsam distinctio dolore aut, totam molestias officiis, hic quasi in explicabo sapiente enim quo numquam.</span></p>

                    <p><strong>Alergico a medicamentos :</strong> <span>não</span></p>
                    <p><strong>Qual medicamento :</strong> <span>sem alergia</span></p>
                </div>

                <div className={styles.containerPreAnalyze}>
                    <h3>Pré Analise</h3>
                    <div className={styles.boxPreAnalyze}>
                        <div>
                            <h4>sobre o paciente</h4>
                            <p><strong>cancer:</strong> <span>nao</span></p>
                            <p><strong>marca passo:</strong> <span>nao</span></p>
                            <p><strong>pinos:</strong> <span>nao</span></p>
                            <p><strong>cardiopatia:</strong> <span>nao</span></p>
                            <p><strong>Cirurgia nos pés:</strong> <span>nao</span></p>
                        </div>

                        <div>
                            <h4>sobre o pé do paciente</h4>
                            <p><strong>Calo:</strong> <span>nao</span></p>
                            <p><strong>Calosidade:</strong> <span>nao</span></p>
                            <p><strong>Fissura:</strong> <span>nao</span></p>
                            <p><strong>Ressecamento:</strong> <span>nao</span></p>
                            <p><strong>Psóriase:</strong> <span>nao</span></p>
                            <p><strong>Verruga Pantar:</strong> <span>nao</span></p>
                        </div>

                        <div>
                            <h4>Sobre a unha do paciente</h4>
                            <p><strong>Onicocriptose:</strong> <span>não</span></p>
                            <p><strong>Onicólise:</strong> <span>não</span></p>
                            <p><strong>Onicomicose:</strong> <span>não</span></p>
                            <p><strong>Onicofose:</strong> <span>não</span></p>
                        </div>
                    </div>

                    <div className={styles.boxDetails}>
                        <div>
                            <h4>Sesibilidade a Dor </h4>
                            <p><strong>tipo de sensibilidade:</strong> <span>muita</span></p>
                        </div>

                        <div>
                            <h4>Mais detalhes</h4>
                            <p><strong>Tipo de meia que mais usa: </strong> <span>algodao</span></p>
                            <p> <strong>tipo de calçado que mais usa:</strong> <span>fechado</span></p>
                            <p> <strong>numero do calçado:</strong> <span>41</span></p>
                        </div>
                    </div>
                </div>

            </div>
            <br />
        </>
    )
}