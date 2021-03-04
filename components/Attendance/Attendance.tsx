import { useState } from 'react'
import styles from './Attendance.module.css'

export default function Attendance() {

    const [selectPatientAttendance, setSelectPatientAttendance] = useState('')
    const [servicePoints, setServicePoints] = useState('')
    const [footLeftObservationsProfessional, setFootLeftObservationsProfessional] = useState('')
    const [rightLeftObservationsProfessional, setRightLeftObservationsProfessional] = useState('')
    const [digitPressureLeftFoot, setDigitPressureLeftFoot] = useState('')
    const [digitPressureRightFoot, setDigitPressureRightFoot] = useState('')
    const [monofilamentTestLeftFoot, setMonofilamentTestLeftFoot] = useState('')
    const [monofilamentTestRightFoot, setMonofilamentTestRightFoot] = useState('')
    const [pathologyDermatologyLeftFoot, setPathologyDermatologyLeftFoot] = useState('')
    const [pathologyDermatologyRightFoot, setPathologyDermatologyRightFoot] = useState('')
    const [pathologyNailsPresentLeftFoot, setPathologyNailsPresentLeftFoot] = useState('')
    const [pathologyNailsPresentRightFoot, setPathologyNailsPresentRightFoot] = useState('')
    const [procedureAccomplished, setProcedureAccomplished] = useState('')

    function clearForm() {
        setSelectPatientAttendance('')
        setServicePoints('')
        setFootLeftObservationsProfessional('')
        setRightLeftObservationsProfessional('')
        setDigitPressureLeftFoot('')
        setDigitPressureRightFoot('')
        setMonofilamentTestLeftFoot('')
        setMonofilamentTestRightFoot('')
        setPathologyDermatologyLeftFoot('')
        setPathologyDermatologyRightFoot('')
        setPathologyNailsPresentLeftFoot('')
        setPathologyNailsPresentRightFoot('')
        setProcedureAccomplished('')
    }

    return (

        <div className={styles.containerAttendance}>

            <form
                method="post"
                onSubmit={event => {
                    event.preventDefault()
                    console.log({
                        selectPatientAttendance,
                        servicePoints,
                        footLeftObservationsProfessional,
                        rightLeftObservationsProfessional,
                        digitPressureLeftFoot,
                        digitPressureRightFoot,
                        monofilamentTestLeftFoot,
                        monofilamentTestRightFoot,
                        pathologyDermatologyLeftFoot,
                        pathologyDermatologyRightFoot,
                        pathologyNailsPresentLeftFoot,
                        pathologyNailsPresentRightFoot,
                        procedureAccomplished,
                    })

                    clearForm()
                }}
            >
                <fieldset>
                    <legend>Cadastro de Atendimento</legend>

                    <div className={styles.selectAttendance}>
                        <div>
                            <label>Selecione um paciênte</label>
                            <select
                                onChange={event => setSelectPatientAttendance(event.target.value)}
                                id="selectPatientAttendance"
                                name="selectPatientAttendance">
                                <option value="1">Selecione um Paciente</option>
                                <option value="1">Paciente #1 </option>
                                <option value="1">Paciente #2 </option>
                                <option value="1">Paciente #3 </option>
                            </select>
                        </div>

                        <div>
                            <label>Quantos pontos</label>
                            <select
                                onChange={event => setServicePoints(event.target.value)}
                                id="servicePoints"
                                name="servicePoints">
                                <option value="1">Selecione a pontuação</option>
                                <option value="1"> 1 </option>
                                <option value="1"> 2 </option>
                                <option value="1"> 3 </option>
                            </select>
                        </div>
                    </div>


                    <div className={styles.formControl}>
                        <h4>Observações Profissionais</h4>

                        <div>
                            <div>
                                <p>Pé Esquerdo</p>
                                <label><input
                                    onChange={event => setFootLeftObservationsProfessional(event.target.value)}
                                    value="Normal"
                                    name="footLeftObservationsProfessional"
                                    id=""
                                    type="radio" />Normal</label>
                                <label><input
                                    onChange={event => setFootLeftObservationsProfessional(event.target.value)}
                                    value="palido"
                                    name="footLeftObservationsProfessional"
                                    id=""
                                    type="radio" />Pálido</label>
                                <label><input
                                    onChange={event => setFootLeftObservationsProfessional(event.target.value)}
                                    value="cianotico"
                                    name="footLeftObservationsProfessional"
                                    id=""
                                    type="radio" />Cianótico</label>
                                <label><input
                                    onChange={event => setFootLeftObservationsProfessional(event.target.value)}
                                    value="com edema"
                                    name="footLeftObservationsProfessional"
                                    id=""
                                    type="radio" />Com Edema</label>
                            </div>

                            <div>
                                <p>Pé Direito</p>
                                <label><input
                                    onChange={event => setRightLeftObservationsProfessional(event.target.value)}
                                    value="normal"
                                    name="rightLeftObservationsProfessional"
                                    id=""
                                    type="radio" />Normal</label>
                                <label><input
                                    onChange={event => setRightLeftObservationsProfessional(event.target.value)}
                                    value="palido"
                                    name="rightLeftObservationsProfessional"
                                    id=""
                                    type="radio" />Pálido</label>
                                <label><input
                                    onChange={event => setRightLeftObservationsProfessional(event.target.value)}
                                    value="cianotico"
                                    name="rightLeftObservationsProfessional"
                                    id=""
                                    type="radio" />Cianótico</label>
                                <label><input
                                    onChange={event => setRightLeftObservationsProfessional(event.target.value)}
                                    value="com edema"
                                    name="rightLeftObservationsProfessional"
                                    id=""
                                    type="radio" />Com Edema</label>
                            </div>
                        </div>
                    </div>


                    <div className={styles.formControl}>
                        <h4>Digito Pressão</h4>

                        <div>
                            <div>
                                <span>Pé Esquerdo</span>
                                <input
                                    onChange={event => setDigitPressureLeftFoot(event.target.value)}
                                    value={digitPressureLeftFoot}
                                    name="digitPressureLeftFoot"
                                    id="digitPressureLeftFoot"
                                    type="text" placeholder="...." />
                            </div>

                            <div>
                                <span>Pé Direito</span>
                                <input
                                    onChange={event => setDigitPressureRightFoot(event.target.value)}
                                    value={digitPressureRightFoot}
                                    name="digitPressureRightFoot"
                                    id="digitPressureRightFoot"
                                    type="text" placeholder="...." />
                            </div>
                        </div>
                    </div>


                    <div className={styles.formControl}>
                        <h4>Teste com Monofilamento</h4>

                        <div>
                            <div>
                                <p>Pé Esquerdo</p>
                                <label><input
                                    onChange={event => setMonofilamentTestLeftFoot(event.target.value)}
                                    value="com sensibilidade"
                                    name="monofilamentTestLeftFoot"
                                    id=""
                                    type="radio" />Com Sensibilidade</label>

                                <label><input
                                    onChange={event => setMonofilamentTestLeftFoot(event.target.value)}
                                    value="sem sensibilidade"
                                    name="monofilamentTestLeftFoot"
                                    id=""
                                    type="radio" />Sem Sensibilidade</label>
                            </div>

                            <div>
                                <p>Pé Direito</p>
                                <label><input
                                    onChange={event => setMonofilamentTestRightFoot(event.target.value)}
                                    value="com sensibilidade"
                                    name="monofilamentTestRightFoot"
                                    id=""
                                    type="radio" />Com Sensibilidade</label>

                                <label><input
                                    onChange={event => setMonofilamentTestRightFoot(event.target.value)}
                                    value="sem sensibilidade"
                                    name="monofilamentTestRightFoot"
                                    id=""
                                    type="radio" />Sem Sensibilidade</label>
                            </div>
                        </div>
                    </div>


                    <div className={styles.formControl}>
                        <h4>Patologias Dermatológicas</h4>

                        <div>
                            <div>
                                <span>Pé Esquerdo</span>
                                <input
                                    onChange={event => setPathologyDermatologyLeftFoot(event.target.value)}
                                    value={pathologyDermatologyLeftFoot}
                                    name="pathologyDermatologyLeftFoot"
                                    id="pathologyDermatologyLeftFoot"
                                    type="text"
                                    placeholder="..." />
                            </div>

                            <div>
                                <span>Pé Direito</span>
                                <input
                                    onChange={event => setPathologyDermatologyRightFoot(event.target.value)}
                                    value={pathologyDermatologyRightFoot}
                                    name="pathologyDermatologyRightFoot"
                                    id="pathologyDermatologyRightFoot"
                                    type="text"
                                    placeholder="..." />
                            </div>
                        </div>
                    </div>


                    <div className={styles.formControl}>
                        <h4>Patologias Ungueais Presentes</h4>

                        <div>
                            <div>
                                <span>Pé Esquerdo</span>
                                <input
                                    onChange={event => setPathologyNailsPresentLeftFoot(event.target.value)}
                                    value={pathologyNailsPresentLeftFoot}
                                    name="pathologyNailsPresentLeftFoot"
                                    id="pathologyNailsPresentLeftFoot"
                                    type="text"
                                    placeholder="..." />
                            </div>

                            <div>
                                <span>Pé Direito</span>
                                <input
                                    onChange={event => setPathologyNailsPresentRightFoot(event.target.value)}
                                    value={pathologyNailsPresentRightFoot}
                                    name="pathologyNailsPresentRightFoot"
                                    id="pathologyNailsPresentRightFoot"
                                    type="text"
                                    placeholder="..." />
                            </div>
                        </div>
                    </div>


                    <div className={styles.formControl}>
                        <h4>Procedimento Realizado</h4>

                        <div>
                            <textarea
                                onChange={event => setProcedureAccomplished(event.target.value)}
                                value={procedureAccomplished}
                                name="procedureAccomplished"
                                id="procedureAccomplished"></textarea>
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
