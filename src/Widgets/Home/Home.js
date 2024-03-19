import './Home.css'

function Home(){
    return HomeBackground();
}

function HomeBackground(){
    return(
        <h1>
            <div className="hometitle">
                <div>PARINTORN</div>
                <div>THAMAMSITBOON</div>
                <div>PORTFOLIO</div>
            </div>
            <div className="blacktheme"></div>
            <img src="././images/home_background.jpg" alt="" className="background" />
        </h1>
    )
}

export default Home;