import { useState } from 'react'
import styles from './home.module.css'

export default function TasksHome() {
    const [checkOut, setCheckOut] = useState(false)

    const array = [10, 10, 10, 10, 20, 20, 30, 3, 3, 4, 4, 5, 5, 6, 7, 7, 8]

    return (
        <>
            <div className={styles.containerHome__tasks}>
                <h4>Tarefas do dia | 23/05</h4>
                <span>Concluir</span>

                <ol>
                    {array.map((item, index) => (
                        <li key={index}>Tarefas a fazer
                            <input
                                key={item}
                                onChange={(event) => setCheckOut(event.target.checked)}
                                type="checkbox" />
                        </li>
                    ))}

                </ol>
            </div>
        </>
    )
}