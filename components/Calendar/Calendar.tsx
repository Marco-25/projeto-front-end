import styles from './stylesCalendar.module.css'

import moment from 'moment'
import { useEffect, useState } from 'react'
import buildCalendar from "./buildCalendar";
import CalendarHeader from './CalendarHeader';
import dayStyles, { beforeToday } from "./dayStyles";


export default function Calendar({ value, onChange }) {
    const [calendar, setCalendar] = useState([])
    const now = moment(new Date()).format("DD/MM")
    const [dayMoth, setDayMonth] = useState(now)
    const [tasks, setTasks] = useState('')


    useEffect(() => {
        setCalendar(buildCalendar(value))
    }, [value])

    return (
        <div className={styles.containerPrincipal}>
            <div className={styles.calendar}>
                <CalendarHeader value={value} setValue={onChange} />
                <div className={styles.body}>
                    <div className={styles.dayNames}>
                        {['Domingo', 'Segunda', 'Terça', "Quarta", "Quinta", "sexta", "Sábado"]
                            .map((dayWeek, index) => (
                                <div key={index} className={styles.week}> {dayWeek} </div>
                            ))
                        }
                    </div>
                    {calendar.map((week, index) => (
                        <div key={index}>
                            { week.map((day, index) => (
                                <div
                                    key={index}
                                    className={styles.day}
                                    onClick={() => {
                                        !beforeToday(day) && onChange(day)
                                        setDayMonth(day.format("DD/MM"))
                                    }}
                                >
                                    <div className={dayStyles(day, value)} >
                                        {day.format("D").toString()}
                                    </div>
                                </div>
                            ))
                            }
                        </div>)
                    )
                    }
                </div>
            </div>

            <section className={styles.tasksOfDay}>
                <form
                    method="post"
                    onSubmit={event => {
                        event.preventDefault()
                        console.log({ tasks, dayMoth })
                    }}
                >

                    <input
                        onChange={event => setTasks(event.target.value)}
                        value={tasks}
                        name="tasks"
                        id="tasks"
                        placeholder="Cadastre uma Tarefa"
                        type="text" />

                    <input type="submit" value="cadastrar" name="register" id="register" />

                </form>

                <h3>Tarefas do Dia | {dayMoth}</h3>

                <ul>
                    <li>Fazer tal coisa </li>
                    <li>Ligar para fulano</li>
                    <li>Comprar navalha</li>
                </ul>

            </section>
        </div>
    )
}