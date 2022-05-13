import "./Experience.css";
import LetterData from "./LetterData";
import AnimationLetter from "../../functions/AnimationLetter";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Experience() {
    AOS.init()


    return (
        <>
            <div data-aos="flip-down" data-aos-delay="600" data-aos-duration="4000" className="experience box-color">
                <div className="title">
                    {
                        LetterData.map((item) => {
                            return (
                                <span>
                                    <AnimationLetter letter={item.letter} />
                                </span>
                            )
                        })
                    }            </div>
                <div className="flexbox">
                    <div className="flexitem-1">
                        <div className="exp-title">Web Application</div>
                        <div className="details">
                            - Create a basic web board with node <br />
                            - Authenticate with JWT and Google-OAuth <br />
                            - Store data in mongoDB
                        </div>
                    </div>

                    <div className="line line-color" />

                    <div className="flexitem-2">
                        <div className="exp-title">Personal Website</div>
                        <div className="details">
                            - Create personal website with react framework <br />
                        </div>
                    </div>

                    <div className="line line-color" />

                    <div className="flexitem-3">
                        <div className="exp-title">Internship at Botnoi Consulting Co., Ltd.</div>
                        <div className="description">Internship as a backend web developer since June 2021 - November 2021</div>
                        <div className="details">
                            - Develop project SME with senior developer team <br />
                            - Handled database and web API (mondoDB, Golang) <br />
                            - Unit test <br />
                            - Support customers who have problems from using our platform <br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}