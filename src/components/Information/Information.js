import "./Information.css";
import LetterData from "./LetterData";
import AnimationLetter from "../../functions/AnimationLetter";
import AOS from 'aos';
import 'aos/dist/aos.css';
import getWindowWidth from '../../functions/getWindowWidth';

export default function Information() {
    AOS.init()

    return (
        <>
            <div data-aos="fade-left" data-aos-delay="600" data-aos-duration="4000" className="information box-color">
                <div className="heading">
                    <div className="title">
                        {
                            LetterData.slice(0, 8).map((item) => {
                                return (
                                    <span className={item.cName}>
                                        <AnimationLetter letter={item.letter} />
                                    </span>
                                )
                            })
                        }
                        &nbsp;
                        {
                            LetterData.slice(8, 19).map((item) => {
                                return (
                                    <span className={item.cName}>
                                        <AnimationLetter letter={item.letter} />
                                    </span>
                                )
                            })
                        }
                    </div>
                    <div className="information-icon" />
                </div>
                {
                    (getWindowWidth() <= 590) ?
                        <div className="flexbox">
                            <div>
                                <span style={{ fontWeight: "bold" }}>Full Name :<br /></span>
                                Mr.Pannatorn Boonjam
                            </div>
                            <div>
                                <span style={{ fontWeight: "bold" }}>Age :<br /></span>
                                22 years old
                            </div>
                            <div>
                                <span style={{ fontWeight: "bold" }}>Date of Birth :<br /></span>
                                11 October 2000
                            </div>
                            <div>
                                <span style={{ fontWeight: "bold" }}>Address :<br /></span>
                                96/13 Taladsrivanit Dindang Bangkok 10400
                            </div>
                            <div>
                                <span style={{ fontWeight: "bold" }}>Phone :<br /></span>
                                0918157089
                            </div>
                            <div>
                                <span style={{ fontWeight: "bold" }}>Email :<br /></span>

                                Pannatorn.Boonjam@gmail.com
                            </div>
                            <div>
                                <span style={{ fontWeight: "bold" }}>Github :<br /></span>
                                <a className="text-color" href="https://github.com/guangpnt">https://github.com/guangpnt</a>
                                <div id="line" className="line-color" />
                            </div>
                        </div>
                        :
                        <div className="flexbox">
                            <div className="col-1">
                                <div>Full Name :</div>
                                <div>Age :</div>
                                <div>Date of Birth :</div>
                                <div>Address :</div>
                                <div>Phone :</div>
                                <div>Email :</div>
                                <div>Github :</div>
                            </div>
                            <div className="col-2">
                                <div>Mr.Pannatorn boonjam</div>
                                <div>22 years old</div>
                                <div>11 October 2000</div>
                                <div>96/13 Taladsrivanit Dindang Bangkok 10400</div>
                                <div>0918157089</div>
                                <div>Pannatorn.Boonjam@gmail.com</div>
                                <a className="text-color" href="https://github.com/guangpnt">https://github.com/guangpnt</a>
                                <div id="line" className="line-color" />
                            </div>
                        </div>
                }
            </div>
        </>
    )
}