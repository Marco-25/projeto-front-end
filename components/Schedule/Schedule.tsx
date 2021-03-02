import styles from './Schedule.module.css'

export default function Schedule() {
    //pega o mes como um vetor sendo 0 janeiro 11 dezembro
    const month = new Date().getMonth()
    const year = new Date().getFullYear()

    const monthsOfTheYear = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const nameMonth = monthsOfTheYear[month]

    function generateDays() {
        let days = []
        for (let day = 1; day <= 31; day++) {
            days.push(day)
        }
        console.log(days);

        return days
    }


    return (
        <div className={styles.ContainerSchedule}>
            <h3>Agenda | </h3>
            <br />
            <div className={styles.calendar}>
                <ul>
                    {generateDays().map((day, index) => {
                        return (
                            <div className={styles.days} key={index}> {day} </div>
                        )
                    })}
                </ul>
            </div>

        </div>

    )
}