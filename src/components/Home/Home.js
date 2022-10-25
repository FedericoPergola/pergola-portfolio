import "./Home.css"
import NavBar from "../NavBar/NavBar"
import SocialMedia from "../SocialMedia/SocialMedia"

const Home = () =>{
    return(
        <div className="home">
            <NavBar />
            <SocialMedia />
            <div className="info-content">
                <h1>FEDERICO PERGOLA</h1>
                <h4>Frontend Web Developer</h4>
            </div>
        </div>
    )
}

export default Home
