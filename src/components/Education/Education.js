import "./Education.css";
import LetterData from "./LetterData";
import AnimationLetter from "../../functions/AnimationLetter";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Education() {
    AOS.init()

    return (
        <>
            <div data-aos="flip-up" data-aos-delay="300" data-aos-duration="4000" className="education box-color">
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
                <div className="content">
                    <div className="name">Bachelor of engineering, King Monkut's Institute of Technology Ladkrabang</div>
                    <div className="time">2018-present</div>
                    <div className="department">Information Engineering (4th years)</div>
                    <div className="gpa">2.98 (In progress)</div>
                </div>
            </div>
        </>
    )
}