import { useState } from 'react'
import styles from './PathologyRegister.module.css'

export default function PathologyRegister() {
    const [selectPatient, setSelectPatient] = useState('')
    const [diabetes, setDiabetes] = useState('')
    const [historicalDiabetes, setHistoricalDiabetes] = useState('')
    const [diabetesObservations, setDiabetesObservations] = useState('')

    const [hypertension, setHypertension] = useState('')
    const [historicalHypertension, setHistoricalHypertension] = useState('')
    const [hypertensionObservations, setHypertensionObservations] = useState('')

    const [medicines, setMedicines] = useState('')
    const [historicalMedicines, setHistoricalMedicines] = useState('')
    const [medicinesObservations, setMedicinesObservations] = useState('')

    const [allergicMedicines, setAllergicMedicines] = useState('')
    const [whatMedicines, setWhatMedicines] = useState('')

    const [painSensitivity, setPainSensitivity] = useState('')

    const [kindOfSock, setKindOfSock] = useState('')
    const [typeOfFootwear, setTypeOfFootwear] = useState('')
    const [numberOfShoes, setNumberOfShoes] = useState('')

    const [aboutThePatient_cancer, setAboutThePatient_cancer] = useState('')
    const [aboutThePatient_pacemaker, setAboutThePatient_pacemaker] = useState('')
    const [aboutThePatient_pins, setAboutThePatient_pins] = useState('')
    const [aboutThePatient_cardiopathy, setAboutThePatient_cardiopathy] = useState('')
    const [aboutThePatient_footSurgery, setAboutThePatient_footSurgery] = useState('')

    const [aboutThePatientFoot_callus, setAboutThePatientFoot_callus] = useState('')
    const [aboutThePatientFoot_callosity, setAboutThePatientFoot_callosity] = useState('')
    const [aboutThePatientFoot_fissure, setAboutThePatientFoot_fissure] = useState('')
    const [aboutThePatientFoot_dryness, setAboutThePatientFoot_dryness] = useState('')
    const [aboutThePatientFoot_psoriasis, setAboutThePatientFoot_psoriasis] = useState('')
    const [aboutThePatientFoot_pantarWart, setAboutThePatientFoot_pantarWart] = useState('')

    const [aboutThePatientNail_onychocriptosis, setAboutThePatientNail_onychocriptosis] = useState('')
    const [aboutThePatientNail_onycholysis, setAboutThePatientNail_onycholysis] = useState('')
    const [aboutThePatientNail_onychomycosis, setAboutThePatientNail_onychomycosis] = useState('')
    const [aboutThePatientNail_onychophoresis, setAboutThePatientNail_onychophoresis] = useState('')

    function clearForm() {
        setSelectPatient('')
        setDiabetes('')
        setHistoricalDiabetes('')
        setDiabetesObservations('')

        setHypertension('')
        setHistoricalHypertension('')
        setHypertensionObservations('')

        setMedicines('')
        setHistoricalMedicines('')
        setMedicinesObservations('')

        setAllergicMedicines('')
        setWhatMedicines('')

        setPainSensitivity('')

        setKindOfSock('')
        setTypeOfFootwear('')
        setNumberOfShoes('')

        setAboutThePatient_cancer('')
        setAboutThePatient_pacemaker('')
        setAboutThePatient_pins('')
        setAboutThePatient_cardiopathy('')
        setAboutThePatient_footSurgery('')

        setAboutThePatientFoot_callus('')
        setAboutThePatientFoot_callosity('')
        setAboutThePatientFoot_fissure('')
        setAboutThePatientFoot_dryness('')
        setAboutThePatientFoot_psoriasis('')
        setAboutThePatientFoot_pantarWart('')

        setAboutThePatientNail_onychocriptosis('')
        setAboutThePatientNail_onycholysis('')
        setAboutThePatientNail_onychomycosis('')
        setAboutThePatientNail_onychophoresis('')
    }

    return (
        <div className={styles.containerPathologyRegister}>

            <form
                method="post"
                onSubmit={event => {
                    event.preventDefault()
                    console.log({
                        selectPatient,
                        diabetes,
                        historicalDiabetes,
                        diabetesObservations,
                        hypertension,
                        historicalHypertension,
                        hypertensionObservations,
                        medicines,
                        historicalMedicines,
                        medicinesObservations,
                        allergicMedicines,
                        whatMedicines,
                        painSensitivity,
                        kindOfSock,
                        typeOfFootwear,
                        numberOfShoes,
                        aboutThePatient_cancer,
                        aboutThePatient_pacemaker,
                        aboutThePatient_pins,
                        aboutThePatient_cardiopathy,
                        aboutThePatient_footSurgery,
                        aboutThePatientFoot_callus,
                        aboutThePatientFoot_callosity,
                        aboutThePatientFoot_fissure,
                        aboutThePatientFoot_dryness,
                        aboutThePatientFoot_psoriasis,
                        aboutThePatientFoot_pantarWart,
                        aboutThePatientNail_onychocriptosis,
                        aboutThePatientNail_onycholysis,
                        aboutThePatientNail_onychomycosis,
                        aboutThePatientNail_onychophoresis,
                    })

                    clearForm()
                }}>
                <fieldset>
                    <legend>Cadastro de Patologia</legend>

                    <div className={styles.selectPatient}>
                        <select
                            onChange={event => setSelectPatient(event.target.value)}
                            name="selectPatient"
                            id="selectPatient"
                        >
                            <option value="">Selecione um Paciente</option>
                            <option value={selectPatient}>Paciente #1 </option>
                            <option value={selectPatient}>Paciente #2 </option>
                            <option value={selectPatient}>Paciente #3 </option>
                        </select>
                    </div>


                    <div className={styles.formContainer}>
                        <div className={styles.formControl}>
                            <div className={styles.controlRadio}>
                                <label>Diabetes</label>
                                <div>
                                    <label><input
                                        onChange={event => setDiabetes(event.target.value)}
                                        type="radio"
                                        name="diabetes"
                                        id="diabetes"
                                        value="sim" /> Sim</label>

                                    <label><input
                                        onChange={event => setDiabetes(event.target.value)}
                                        type="radio"
                                        checked
                                        name="diabetes"
                                        id="diabetes"
                                        value="nao" /> Não</label>
                                </div>
                            </div>

                            <div className={styles.controlRadio}>
                                <label>Histórico na Familiar</label>
                                <div>
                                    <label><input
                                        onChange={event => setHistoricalDiabetes(event.target.value)}
                                        value="sim"
                                        type="radio"
                                        name="historicalDiabetes"
                                        id="historicalDiabetes" /> Sim</label>

                                    <label><input
                                        onChange={event => setHistoricalDiabetes(event.target.value)}
                                        value="nao"
                                        checked
                                        type="radio"
                                        name="HistoricalDiabetes"
                                        id="HistoricalDiabetes" /> Não</label>
                                </div>
                            </div>
                        </div>

                        <div className={styles.TextArea}>
                            <label>Observações:</label>
                            <textarea
                                onChange={event => setDiabetesObservations(event.target.value)}
                                value={diabetesObservations}
                                name="diabetesObservations"
                                id="diabetesObservations"
                            ></textarea>
                        </div>
                    </div>


                    <div className={styles.formContainer}>
                        <div className={styles.formControl}>
                            <div className={styles.controlRadio}>
                                <label>Hipertensão</label>
                                <div>
                                    <label><input
                                        onChange={event => setHypertension(event.target.value)}
                                        value="sim"
                                        type="radio"
                                        name="hypertension"
                                        id="hypertension" /> Sim</label>

                                    <label><input
                                        onChange={event => setHypertension(event.target.value)}
                                        value="nao"
                                        checked
                                        type="radio"
                                        name="hypertension"
                                        id="hypertension" /> Não</label>
                                </div>
                            </div>

                            <div className={styles.controlRadio}>
                                <label>Histórico na Familiar</label>
                                <div>
                                    <label><input
                                        onChange={event => setHistoricalHypertension(event.target.value)}
                                        value="sim"
                                        type="radio"
                                        name="historicalHypertension"
                                        id="historicalHypertension" /> Sim</label>

                                    <label><input
                                        onChange={event => setHistoricalHypertension(event.target.value)}
                                        value="nao"
                                        checked
                                        type="radio"
                                        name="historicalHypertension"
                                        id="historicalHypertension" /> Não</label>
                                </div>
                            </div>
                        </div>

                        <div className={styles.TextArea}>
                            <label>Observações:</label>
                            <textarea
                                onChange={event => setHypertensionObservations(event.target.value)}
                                value={hypertensionObservations}
                                name="hypertensionObservations"
                                id="hypertensionObservations"
                            ></textarea>
                        </div>
                    </div>


                    <div className={styles.formContainer}>
                        <div className={styles.formControl}>
                            <div className={styles.controlRadio}>
                                <label>Medicamentos Controlados</label>
                                <div>
                                    <label><input
                                        onChange={event => setMedicines(event.target.value)}
                                        value="sim"
                                        name="medicines"
                                        id="medicines"
                                        type="radio" /> Sim</label>

                                    <label><input
                                        onChange={event => setMedicines(event.target.value)}
                                        value="nao"
                                        checked
                                        name="medicines"
                                        id="medicines"
                                        type="radio" /> Não</label>
                                </div>
                            </div>

                            <div className={styles.controlRadio}>
                                <label>Histórico na Familiar</label>
                                <div>
                                    <label><input
                                        onChange={event => setHistoricalMedicines(event.target.value)}
                                        value="sim"
                                        name="historicalMedicines"
                                        id="historicalMedicines"
                                        type="radio" /> Sim</label>

                                    <label><input
                                        onChange={event => setHistoricalMedicines(event.target.value)}
                                        value="nao"
                                        checked
                                        name="historicalMedicines"
                                        id="historicalMedicines"
                                        type="radio" /> Não</label>
                                </div>
                            </div>
                        </div>

                        <div className={styles.TextArea}>
                            <label>Observações:</label>
                            <textarea
                                onChange={event => setMedicinesObservations(event.target.value)}
                                value={medicinesObservations}
                                name="medicinesObservations"
                                id="medicinesObservations"
                            ></textarea>
                        </div>
                    </div>


                    <div className={styles.controlAllergic}>
                        <div className={styles.controlRadio}>
                            <label>Alergico a Medicamentos</label>
                            <div>
                                <label><input
                                    onChange={event => setAllergicMedicines(event.target.value)}
                                    value="sim"
                                    name="allergicMedicines"
                                    id="allergicMedicines"
                                    type="radio" /> Sim</label>

                                <label><input
                                    onChange={event => setAllergicMedicines(event.target.value)}
                                    value="nao"
                                    checked
                                    name="allergicMedicines"
                                    id="allergicMedicines"
                                    type="radio" /> Não</label>
                            </div>
                        </div>

                        <div>
                            <label>Alergico a qual Medicamento?</label>
                            <input
                                onChange={event => setWhatMedicines(event.target.value)}
                                value={whatMedicines}
                                name="whatMedicines"
                                id="whatMedicines"
                                type="text"
                                placeholder="Dipirona" />
                        </div>
                    </div>


                    <div className={styles.controlAnalysis}>
                        <h3>Pré Analise</h3>

                        <div>
                            <div>
                                <p>Sobre o Paciênte</p>

                                <label><input
                                    onChange={event => setAboutThePatient_cancer(event.target.value)}
                                    value="sim"
                                    name="aboutThePatient_cancer"
                                    id="aboutThePatient_cancer"
                                    type="checkbox" />Câncer</label>

                                <label><input
                                    onChange={event => setAboutThePatient_pacemaker(event.target.value)}
                                    value="sim"
                                    name="aboutThePatient_pacemaker"
                                    id="aboutThePatient_pacemaker"
                                    type="checkbox" />Marca Passo</label>

                                <label><input
                                    onChange={event => setAboutThePatient_pins(event.target.value)}
                                    value="sim"
                                    name="aboutThePatient_pins"
                                    id="aboutThePatient_pins"
                                    type="checkbox" />Pinos</label>

                                <label><input
                                    onChange={event => setAboutThePatient_cardiopathy(event.target.value)}
                                    value="sim"
                                    name="aboutThePatient_cardiopathy"
                                    id="aboutThePatient_cardiopathy"
                                    type="checkbox" />Cardiopatia</label>

                                <label><input
                                    onChange={event => setAboutThePatient_footSurgery(event.target.value)}
                                    value="sim"
                                    name="aboutThePatient_footSurgery"
                                    id="aboutThePatient_footSurgery"
                                    type="checkbox" />Cirurgia nos pés</label>
                            </div>

                            <div>
                                <p>Sobre o Pé do Paciênte</p>

                                <label><input
                                    onChange={event => setAboutThePatientFoot_callus(event.target.value)}
                                    value="sim"
                                    name="aboutThePatientFoot_callus"
                                    id="aboutThePatientFoot_callus"
                                    type="checkbox" />Calo</label>
                                <label><input
                                    onChange={event => setAboutThePatientFoot_callosity(event.target.value)}
                                    value="sim"
                                    name="aboutThePatientFoot_callosity"
                                    id="aboutThePatientFoot_callosity"
                                    type="checkbox" />Calosidade</label>
                                <label><input
                                    onChange={event => setAboutThePatientFoot_fissure(event.target.value)}
                                    value="sim"
                                    name="aboutThePatientFoot_fissure"
                                    id="aboutThePatientFoot_fissure"
                                    type="checkbox" />Fissura</label>
                                <label><input
                                    onChange={event => setAboutThePatientFoot_dryness(event.target.value)}
                                    value="sim"
                                    name="aboutThePatientFoot_dryness"
                                    id="aboutThePatientFoot_dryness"
                                    type="checkbox" />Ressecamento</label>
                                <label><input
                                    onChange={event => setAboutThePatientFoot_psoriasis(event.target.value)}
                                    value="sim"
                                    name="aboutThePatientFoot_psoriasis"
                                    id="aboutThePatientFoot_psoriasis"
                                    type="checkbox" />Psóriase</label>
                                <label><input
                                    onChange={event => setAboutThePatientFoot_pantarWart(event.target.value)}
                                    value="sim"
                                    name="aboutThePatientFoot_pantarWart"
                                    id="aboutThePatientFoot_pantarWart"
                                    type="checkbox" />Verruga Pantar</label>
                            </div>

                            <div>
                                <p>Sobre a Unha Paciênte</p>

                                <label><input
                                    onChange={event => setAboutThePatientNail_onychocriptosis(event.target.value)}
                                    value="sim"
                                    name="aboutThePatientNail_onychocriptosis"
                                    id="aboutThePatientNail_onychocriptosis"
                                    type="checkbox" />Onicocriptose</label>
                                <label><input
                                    onChange={event => setAboutThePatientNail_onycholysis(event.target.value)}
                                    value="sim"
                                    name="aboutThePatientNail_onycholysis"
                                    id="aboutThePatientNail_onycholysis"
                                    type="checkbox" />Onicólise</label>
                                <label><input
                                    onChange={event => setAboutThePatientNail_onychomycosis(event.target.value)}
                                    value="sim"
                                    name="aboutThePatientNail_onychomycosis"
                                    id="aboutThePatientNail_onychomycosis"
                                    type="checkbox" />Onicomicose</label>
                                <label><input
                                    onChange={event => setAboutThePatientNail_onychophoresis(event.target.value)}
                                    value="sim"
                                    name="aboutThePatientNail_onychophoresis"
                                    id="aboutThePatientNail_onychophoresis"
                                    type="checkbox" />Onicofose</label>
                            </div>
                        </div>
                    </div>


                    <div className={styles.SensitiveToPain}>
                        <h3>Sensibilidade a Dor</h3>

                        <div>
                            <label><input
                                onChange={event => setPainSensitivity(event.target.value)}
                                value="nenhuma"
                                name="painSensitivity"
                                id=""
                                type="radio" />Nenhuma</label>
                            <label><input
                                onChange={event => setPainSensitivity(event.target.value)}
                                value="pouca"
                                name="painSensitivity"
                                id=""
                                type="radio" />Pouca</label>
                            <label><input
                                onChange={event => setPainSensitivity(event.target.value)}
                                value="suportavél"
                                name="painSensitivity"
                                id=""
                                type="radio" />Suportavél</label>
                            <label><input
                                onChange={event => setPainSensitivity(event.target.value)}
                                value="muita"
                                name="painSensitivity"
                                id=""
                                type="radio" />Muita</label>
                        </div>
                    </div>


                    <div className={styles.shoe}>
                        <div>
                            <label>Tipo de meia que mais usa</label>
                            <input
                                onChange={event => setKindOfSock(event.target.value)}
                                value={kindOfSock}
                                name="kindOfSock"
                                id="kindOfSock"
                                type="text"
                                placeholder="Algodão" />
                        </div>

                        <div>
                            <label>Tipo de calçado que mais usa</label>
                            <input
                                onChange={event => setTypeOfFootwear(event.target.value)}
                                value={typeOfFootwear}
                                name="typeOfFootwear"
                                id="typeOfFootwear"
                                type="text"
                                placeholder="fechado" />
                        </div>

                        <div>
                            <label>Numero do calçado</label>
                            <input
                                onChange={event => setNumberOfShoes(event.target.value)}
                                value={numberOfShoes}
                                name="numberOfShoes"
                                id="numberOfShoes"
                                type="text"
                                placeholder="41" />
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