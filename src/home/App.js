
import {Header} from "../components/Header"
import {MyNameSection} from "../components/MainNameSection"
import {AboutMeSection} from "../components/AboutMeSection"
import {DetailsSection} from "../components/DetailsSection"
import {Projects} from "../components/ProjectsSection"

function App() {
    return (
    <>
        <Header name="D.C.Santos"/>
        <MyNameSection name_1="Deivison" name_2="Santos" office="Web Developer" buttonText="View More"/>
        
        <AboutMeSection title="About Me"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit necessitatibus facere provident laboriosam tenetur consequatur distinctio earum aspernatur veritatis, eaque itaque dolorem aliquid cupiditate, cum esse sapiente optio ut quod?"
        />

        <DetailsSection/>
        <Projects/>
    </>
    );
}

export default App;
