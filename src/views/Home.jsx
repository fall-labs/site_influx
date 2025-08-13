import "../assets/views/home.scss"

import NavBar from "../components/NavBar";
import Container from "../components/Container";


function Home() {
    return (
        <>
            <div className="main-background bg-dark">
                {/* <NavBar/> */}
                <Container flexDirection="column"></Container>
            </div>
        </>
    )
}

export default Home;