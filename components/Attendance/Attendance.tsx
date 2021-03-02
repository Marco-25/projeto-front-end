import styles from './Attendance.module.css'

export default function Attendance() {

    return (

        <div className={styles.containerAttendance}>

            <form method="post">
                <fieldset>
                    <legend>Cadastro de Patologia</legend>

                    <div className={styles.selectAttendance}>
                        <div>
                            <label>Selecione um paciênte</label>
                            <select name="attendance">
                                <option value="">Selecione um Paciente</option>
                                <option value="">Paciente #1 </option>
                                <option value="">Paciente #2 </option>
                                <option value="">Paciente #3 </option>
                            </select>
                        </div>

                        <div>
                            <label>Quantos pontos por esse atendimento</label>
                            <select name="pointsForService">
                                <option value="">Selecione a pontuação</option>
                                <option value=""> 1 </option>
                                <option value=""> 2 </option>
                                <option value=""> 3 </option>
                            </select>
                        </div>
                    </div>


                    <div className={styles.formControl}>
                        <h4>Observações Profissionais</h4>

                        <div>
                            <div>
                                <p>Pé Esquerdo</p>
                                <label><input type="checkbox" />Normal</label>
                                <label><input type="checkbox" />Pálido</label>
                                <label><input type="checkbox" />Cianótico</label>
                                <label><input type="checkbox" />Com Edema</label>
                            </div>

                            <div>
                                <p>Pé Direito</p>
                                <label><input type="checkbox" />Normal</label>
                                <label><input type="checkbox" />Pálido</label>
                                <label><input type="checkbox" />Cianótico</label>
                                <label><input type="checkbox" />Com Edema</label>
                            </div>
                        </div>
                    </div>


                    <div className={styles.formControl}>
                        <h4>Digito Pressão</h4>

                        <div>
                            <div>
                                <span>Pé Esquerdo</span>
                                <input type="text" placeholder="20" />
                            </div>

                            <div>
                                <span>Pé Direito</span>
                                <input type="text" placeholder="20" />
                            </div>
                        </div>
                    </div>


                    <div className={styles.formControl}>
                        <h4>Teste com Monofilamento</h4>

                        <div>
                            <div>
                                <p>Pé Esquerdo</p>
                                <label><input type="checkbox" />Com Sensibilidade</label>
                                <label><input type="checkbox" />Sem Sensibilidade</label>
                            </div>

                            <div>
                                <p>Pé Direito</p>
                                <label><input type="checkbox" />Com Sensibilidade</label>
                                <label><input type="checkbox" />Sem Sensibilidade</label>
                            </div>
                        </div>
                    </div>


                    <div className={styles.formControl}>
                        <h4>Patologias Dermatológicas</h4>

                        <div>
                            <div>
                                <span>Pé Esquerdo</span>
                                <input type="text" placeholder="20" />
                            </div>

                            <div>
                                <span>Pé Direito</span>
                                <input type="text" placeholder="20" />
                            </div>
                        </div>
                    </div>

                    <div className={styles.formControl}>
                        <h4>Patologias Ungueais Presentes</h4>

                        <div>
                            <div>
                                <span>Pé Esquerdo</span>
                                <input type="text" placeholder="20" />
                            </div>

                            <div>
                                <span>Pé Direito</span>
                                <input type="text" placeholder="20" />
                            </div>
                        </div>
                    </div>


                    <div className={styles.formControl}>
                        <h4>Procedimento Realizado</h4>

                        <div>
                            <textarea name="" id=""></textarea>
                        </div>
                    </div>

                    <div className={styles.submit}>
                        <input type="submit" value="Cadastrar" />
                    </div>

                </fieldset>
            </form>

        </div>
    )
}