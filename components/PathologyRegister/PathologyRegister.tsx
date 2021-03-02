import styles from './PathologyRegister.module.css'

export default function PathologyRegister() {
    return (
        <div className={styles.containerPathologyRegister}>

            <form method="post">
                <fieldset>
                    <legend>Cadastro de Patologia</legend>

                    <div className={styles.selectPatient}>
                        <select name="patient">
                            <option value="">Selecione um Paciente</option>
                            <option value="">Paciente #1 </option>
                            <option value="">Paciente #2 </option>
                            <option value="">Paciente #3 </option>
                        </select>
                    </div>


                    <div className={styles.formContainer}>
                        <div className={styles.formControl}>
                            <div className={styles.controlRadio}>
                                <label>Diabetes</label>
                                <div>
                                    <label><input type="radio" name="diabetes" /> Sim</label>
                                    <label><input type="radio" name="diabetes" /> Não</label>
                                </div>
                            </div>

                            <div className={styles.controlRadio}>
                                <label>Histórico na Familiar</label>
                                <div>
                                    <label><input type="radio" name="diabetesFamily" /> Sim</label>
                                    <label><input type="radio" name="diabetesFamily" /> Não</label>
                                </div>
                            </div>
                        </div>

                        <div className={styles.TextArea}>
                            <label>Observações:</label>
                            <textarea name="" id=""></textarea>
                        </div>
                    </div>


                    <div className={styles.formContainer}>
                        <div className={styles.formControl}>
                            <div className={styles.controlRadio}>
                                <label>Hipertensão</label>
                                <div>
                                    <label><input type="radio" name="hypertension" /> Sim</label>
                                    <label><input type="radio" name="hypertension" /> Não</label>
                                </div>
                            </div>

                            <div className={styles.controlRadio}>
                                <label>Histórico na Familiar</label>
                                <div>
                                    <label><input type="radio" name="hypertensionFamily" /> Sim</label>
                                    <label><input type="radio" name="hypertensionFamily" /> Não</label>
                                </div>
                            </div>
                        </div>

                        <div className={styles.TextArea}>
                            <label>Observações:</label>
                            <textarea name="" id=""></textarea>
                        </div>
                    </div>


                    <div className={styles.formContainer}>
                        <div className={styles.formControl}>
                            <div className={styles.controlRadio}>
                                <label>Medicamentos Controlados</label>
                                <div>
                                    <label><input type="radio" name="medicines" /> Sim</label>
                                    <label><input type="radio" name="medicines" /> Não</label>
                                </div>
                            </div>

                            <div className={styles.controlRadio}>
                                <label>Histórico na Familiar</label>
                                <div>
                                    <label><input type="radio" name="medicinesFamily" /> Sim</label>
                                    <label><input type="radio" name="medicinesFamily" /> Não</label>
                                </div>
                            </div>
                        </div>

                        <div className={styles.TextArea}>
                            <label>Observações:</label>
                            <textarea name="" id=""></textarea>
                        </div>
                    </div>


                    <div className={styles.controlAllergic}>
                        <div className={styles.controlRadio}>
                            <label>Medicamentos Controlados</label>
                            <div>
                                <label><input type="radio" name="allergic" /> Sim</label>
                                <label><input type="radio" name="allergic" /> Não</label>
                            </div>
                        </div>

                        <div>
                            <label>Alergico a qual Medicamento?</label>
                            <input type="text" placeholder="Dipirona" />
                        </div>
                    </div>


                    <div className={styles.controlAnalysis}>
                        <h3>Pré Analise</h3>

                        <div>
                            <div>
                                <p>Sobre o Paciênte</p>

                                <label><input type="checkbox" />Câncer</label>
                                <label><input type="checkbox" />Marca Passo</label>
                                <label><input type="checkbox" />Pinos</label>
                                <label><input type="checkbox" />Cardiopatia</label>
                                <label><input type="checkbox" />Cirurgia nos pés</label>
                            </div>

                            <div>
                                <p>Sobre o Pé do Paciênte</p>

                                <label><input type="checkbox" />Calo</label>
                                <label><input type="checkbox" />Calosidade</label>
                                <label><input type="checkbox" />Fissura</label>
                                <label><input type="checkbox" />Ressecamento</label>
                                <label><input type="checkbox" />Psóriase</label>
                                <label><input type="checkbox" />Verruga Pantar</label>
                            </div>

                            <div>
                                <p>Sobre a Unha Paciênte</p>

                                <label><input type="checkbox" />Onicocriptose</label>
                                <label><input type="checkbox" />Onicólise</label>
                                <label><input type="checkbox" />Onicomicose</label>
                                <label><input type="checkbox" />Onicofose</label>
                            </div>
                        </div>
                    </div>


                    <div className={styles.SensitiveToPain}>
                        <h3>Sensibilidade a Dor</h3>

                        <div>
                            <label><input type="radio" name="sensitive" />Nenhuma</label>
                            <label><input type="radio" name="sensitive" />Pouca</label>
                            <label><input type="radio" name="sensitive" />Suportavél</label>
                            <label><input type="radio" name="sensitive" />Muita</label>
                        </div>
                    </div>


                    <div className={styles.shoe}>
                        <div>
                            <label>Tipo de meia que mais usa</label>
                            <input type="text" placeholder="Algodão" />
                        </div>

                        <div>
                            <label>Tipo de calçado que mais usa</label>
                            <input type="text" placeholder="fechado" />
                        </div>

                        <div>
                            <label>Numero do calçado</label>
                            <input type="text" placeholder="41" />
                        </div>
                    </div>

                    <div className={styles.submit}>
                        <input type="submit" value="Cadastrar" />
                    </div>

                </fieldset>
            </form>
        </div >
    )
}