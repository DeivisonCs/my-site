
import {Header} from "../components/Header"
import {MyNameSection} from "../components/MainNameSection"
import {DetailsSection} from "../components/AboutMeSection"

function App() {
    return (
    <>
        <Header name="D.C.Santos"/>
        <MyNameSection name_1="Deivison" name_2="Santos" office="Web Developer" buttonText="View More"/>
        
        <DetailsSection title="About Me"
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit necessitatibus facere provident laboriosam tenetur consequatur distinctio earum aspernatur veritatis, eaque itaque dolorem aliquid cupiditate, cum esse sapiente optio ut quod?"
        />

        <MyNameSection name_1="Deivison" name_2="Santos" office="Web Developer" buttonText="View More"/>

    </>
    );
}

export default App;
