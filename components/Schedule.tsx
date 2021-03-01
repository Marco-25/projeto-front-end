import styles from '../styles/components/Schedule.module.css'

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

            <div className={styles.calendar}>
                <ul className={styles.days}>
                    {generateDays().map(day => { day })}
                </ul>
            </div>

        </div>

    )
}