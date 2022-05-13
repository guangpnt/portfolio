import "./Profile.css";
import LetterData from "./LetterData";
import AnimationLetter from "../../functions/AnimationLetter";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Banner() {
    AOS.init()

    return (
        <>
            <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="4000" className="profile box-color">
                <div className="img" />
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
                <div className="subtitle">
                    <div className="developer-icon icon" />
                    <div>DEVELOPER</div>
                </div>
            </div>
        </>
    )
}