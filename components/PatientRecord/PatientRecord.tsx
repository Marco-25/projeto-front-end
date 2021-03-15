import { useState } from 'react'
import styles from './PatientRecord.module.css'


export default function PatientRecord() {
    const [recommendation, setRecommendation] = useState('')
    const [name, setName] = useState('')
    const [bithDate, setBirthDate] = useState('')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState('')
    const [cell, setCell] = useState('')
    const [profession, setProfession] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [number, setNumber] = useState('')
    const [district, setDistrict] = useState('')
    const [practiceActivity, setPracticeActivity] = useState('')
    const [whatActivity, setWhatActivity] = useState('')

    function clearForm() {
        setRecommendation('')
        setName('')
        setBirthDate('')
        setGender('')
        setEmail('')
        setCell('')
        setProfession('')
        setZipCode('')
        setCity('')
        setAddress('')
        setNumber('')
        setDistrict('')
        setPracticeActivity('')
        setWhatActivity('')
    }

    return (
        <>
            <div className={styles.containerPatientRecord}>

                <form
                    method="post"
                    onSubmit={event => {
                        event.preventDefault()
                        console.log({
                            recommendation,
                            name,
                            bithDate,
                            gender,
                            email,
                            cell,
                            profession,
                            zipCode,
                            city,
                            address,
                            number,
                            district,
                            practiceActivity,
                            whatActivity
                        })

                        clearForm()
                    }}
                >
                    <fieldset>
                        <h4>Cadastro de Paciente</h4>

                        <div className={styles.recommendation}>
                            <h3>Indicação</h3>
                            <input
                                onChange={event => setRecommendation(event.target.value)}
                                value={recommendation}
                                type="text"
                                name="recommendation"
                                id="recommendation"
                                placeholder="Indicação <Opcional>"
                            />
                        </div>


                        <div className={styles.formControl}>
                            <div>
                                <label>Nome Completo</label>
                                <input
                                    onChange={event => setName(event.target.value)}
                                    value={name}
                                    name="name"
                                    id="name"
                                    type="text"
                                    placeholder="Nome Completo"
                                />
                            </div>

                            <div>
                                <label>Data de Nascimento</label>
                                <input
                                    onChange={event => setBirthDate(event.target.value)}
                                    value={bithDate}
                                    name="bithDate"
                                    id="bithDate"
                                    type="text"
                                    placeholder="00/00/0000"
                                />
                            </div>

                            <div className={styles.controlRadio}>
                                <label>Sexo</label>
                                <div>
                                    <label><input
                                        onChange={event => setGender(event.target.value)}
                                        value="masculino"
                                        type="radio"
                                        name="gender"
                                        id="gender"
                                    /> masculino</label>

                                    <label><input
                                        onChange={event => setGender(event.target.value)}
                                        value="feminino"
                                        checked
                                        type="radio"
                                        name="gender"
                                        id="gender"
                                    /> feminino</label>
                                </div>
                            </div>
                        </div>


                        <div className={styles.formControl}>
                            <div>
                                <label>E-mail</label>
                                <input
                                    onChange={event => setEmail(event.target.value)}
                                    value={email}
                                    name="email"
                                    id="email"
                                    type="text"
                                    placeholder="Nome Completo" />
                            </div>

                            <div>
                                <label>Celular/WhatsApp</label>
                                <input
                                    onChange={event => setCell(event.target.value)}
                                    value={cell}
                                    name="email"
                                    id="email"
                                    type="text"
                                    placeholder="14 9 9999-9999" />
                            </div>

                            <div>
                                <label>Profissão</label>
                                <input
                                    onChange={event => setProfession(event.target.value)}
                                    value={profession}
                                    name="profession"
                                    id="profession"
                                    type="text"
                                    placeholder="Programador" />
                            </div>
                        </div>


                        <div className={styles.formControlAddress}>
                            <div>
                                <label>Cep</label>
                                <input
                                    onChange={event => setZipCode(event.target.value)}
                                    value={zipCode}
                                    name="zipCode"
                                    id="zipCode"
                                    type="text"
                                    placeholder="17560-000" />
                            </div>

                            <div>
                                <label>Cidade</label>
                                <input
                                    onChange={event => setCity(event.target.value)}
                                    value={city}
                                    name="city"
                                    id="city"
                                    type="text"
                                    placeholder="Pernanbuco" />
                            </div>

                            <div>
                                <label>Endereço</label>
                                <input
                                    onChange={event => setAddress(event.target.value)}
                                    value={address}
                                    name="address"
                                    id="address"
                                    type="text"
                                    placeholder="Avenida rio branco" />
                            </div>

                            <div>
                                <label>Numero</label>
                                <input
                                    onChange={event => setNumber(event.target.value)}
                                    value={number}
                                    name="number"
                                    id="number"
                                    type="text"
                                    placeholder="1147" />
                            </div>

                            <div>
                                <label>Bairro</label>
                                <input
                                    onChange={event => setDistrict(event.target.value)}
                                    value={district}
                                    name="district"
                                    id="district"
                                    type="text"
                                    placeholder="centro" />
                            </div>
                        </div>


                        <div className={styles.formControlAllergic}>
                            <div className={styles.controlRadio}>
                                <label>Prática Atividade Fisíca</label>
                                <div>
                                    <label><input
                                        onChange={event => setPracticeActivity(event.target.value)}
                                        value="sim"
                                        type="radio"
                                        name="practiceActivity"
                                        id="practiceActivity" /> Sim</label>

                                    <label><input
                                        onChange={event => setPracticeActivity(event.target.value)}
                                        value="nao"
                                        checked
                                        type="radio"
                                        name="physicalActivity"
                                        id="physicalActivity" /> Não</label>
                                </div>
                            </div>

                            <div>
                                <label>Qual Atividade Fisíca:</label>
                                <input
                                    onChange={event => setWhatActivity(event.target.value)}
                                    value=""
                                    name="WhatActivity"
                                    id="WhatActivity"
                                    type="text"
                                    placeholder="Boxe" />
                            </div>
                        </div>

                        <div className={styles.formControlSubmit}>
                            <input type="submit" />
                        </div>

                    </fieldset>
                </form>
            </div>

        </>
    )
}
