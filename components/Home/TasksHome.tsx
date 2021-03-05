import { useState } from 'react'
import styles from './home.module.css'

export default function TasksHome() {
    const [checkOut, setCheckOut] = useState('')
    console.log(checkOut)

    return (
        <>
            <div className={styles.containerHome__tasks}>
                <ol>
                    <h4>Tarefas do dia | 23/05</h4>

                    <span>Concluir</span>

                    <li>Tarefas a fazer
                            <input
                            onChange={event => setCheckOut(event.target.value)}
                            value="sim"
                            type="checkbox" />
                    </li>

                    <li>Tarefas a fazer
                            <input type="checkbox" />
                    </li>

                    <li>Tarefas a fazer
                            <input type="checkbox" />
                    </li>

                    <li>Tarefas a fazer
                            <input type="checkbox" />
                    </li>

                    <li>Tarefas a fazer
                            <input type="checkbox" />
                    </li>
                </ol>
            </div>
        </>
    )
}