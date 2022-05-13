import "./AboutMe.css";
import LetterData from "./LetterData";
import AnimationLetter from "../../functions/AnimationLetter";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutMe() {
    AOS.init()

    return (
        <>
            <div data-aos="fade-down" data-aos-delay="400" data-aos-duration="4000" className="about-me box-color">
                <div className="heading">
                    <div className="title">
                        {
                            LetterData.slice(0, 5).map((item) => {
                                return (
                                    <span>
                                        <AnimationLetter letter={item.letter} />
                                    </span>
                                )
                            })
                        }
                        &nbsp;
                        {
                            LetterData.slice(5, 7).map((item) => {
                                return (
                                    <span>
                                        <AnimationLetter letter={item.letter} />
                                    </span>
                                )
                            })
                        }
                    </div>
                    <div className="profile-icon" />
                </div>
                <div className="description">
                    Hello my nickname is guang. Now i just graduated from college in
                    information engineering. I would like to work both as a backend developer and frontend developer.
                    So i decide to create this website to introduce myself. I can work well
                    with others. I like coding and ready to learn new technologies for
                    improving myself.
                </div>
            </div>
        </>
    )
}