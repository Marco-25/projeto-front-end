import styles from './PatientRecord.module.css'

export default function PatientRecord() {
    return (
        <div className={styles.containerPatientRecord}>

            <form method="post">
                <fieldset>
                    <legend>Cadastro de Paciente</legend>

                    <div className={styles.recommendation}>
                        <h3>Indicação</h3>
                        <input type="text" placeholder="Indicação <Opcional>" />
                    </div>


                    <div className={styles.formControl}>
                        <div>
                            <label>Nome Completo</label>
                            <input type="text" placeholder="Nome Completo" />
                        </div>

                        <div>
                            <label>Data de Nascimento</label>
                            <input type="text" placeholder="00/00/0000" />
                        </div>

                        <div className={styles.controlRadio}>
                            <label>Sexo</label>
                            <div>
                                <label><input type="radio" name="sexo" /> masculino</label>
                                <label><input type="radio" name="sexo" /> feminino</label>
                            </div>
                        </div>
                    </div>


                    <div className={styles.formControl}>
                        <div>
                            <label>E-mail</label>
                            <input type="text" placeholder="Nome Completo" />
                        </div>

                        <div>
                            <label>Celular/WhatsApp</label>
                            <input type="text" placeholder="14 9 9999-9999" />
                        </div>

                        <div>
                            <label>Profissão</label>
                            <input type="text" placeholder="Programador" />
                        </div>
                    </div>


                    <div className={styles.formControlAddress}>
                        <div>
                            <label>Cep</label>
                            <input type="text" placeholder="17560-000" />
                        </div>

                        <div>
                            <label>Cidade</label>
                            <input type="text" placeholder="Pernanbuco" />
                        </div>

                        <div>
                            <label>Endereço</label>
                            <input type="text" placeholder="Avenida rio branco" />
                        </div>

                        <div>
                            <label>Numero</label>
                            <input type="text" placeholder="1147" />
                        </div>

                        <div>
                            <label>Bairro</label>
                            <input type="text" placeholder="centro" />
                        </div>
                    </div>


                    <div className={styles.formControlAllergic}>
                        <div className={styles.controlRadio}>
                            <label>Prática Atividade Fisíca</label>
                            <div>
                                <label><input type="radio" name="physicalActivity" /> Sim</label>
                                <label><input type="radio" name="physicalActivity" /> Não</label>
                            </div>
                        </div>

                        <div>
                            <label>Qual Atividade Fisíca:</label>
                            <input type="text" placeholder="Boxe" />
                        </div>
                    </div>

                    <div className={styles.formControlSubmit}>
                        <input type="submit" />
                    </div>

                </fieldset>
            </form>
        </div>
    )
}
