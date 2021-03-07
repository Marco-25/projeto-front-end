import HomePage from "../components/Home"
import Menu from "../components/Menu"

export default function Home() {
    return (

        <>
            <Menu />

            <div className='homepage'>
                <HomePage />
            </div>

        </>
    )

}