import "./Skill.css";
import LetterData from "./LetterData";
import AnimationLetter from "../../functions/AnimationLetter";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skill() {
    AOS.init()

    return (
        <>
            <div data-aos="fade-up" data-aos-delay="800" data-aos-duration="4000" className="skill box-color">
                <div className="title">
                    {
                        LetterData.map((item) => {
                            return (
                                <span>
                                    <AnimationLetter letter={item.letter} />
                                </span>
                            )
                        })
                    }
                </div>
                <div className="flexbox">
                    <div className="html-icon icon" />
                    <div className="css-icon icon" />
                    <div className="js-icon icon" />
                    <div>HTML CSS JavaScript</div>
                </div>
                <div className="flexbox">
                    <div className="react-icon icon" />
                    <div>React</div>
                </div>
                <div className="flexbox">
                    <div className="node-icon icon" />
                    <div>Node</div>
                </div>
                <div className="flexbox">
                    <div className="golang-icon icon" />
                    <div>Golang</div>
                </div>

            </div>
        </>
    )
}