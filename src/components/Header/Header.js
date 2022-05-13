import "./Header.css";
import LetterData from "./LetterData";
import AnimationLetter from "../../functions/AnimationLetter";

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="title">
                    {
                        LetterData.slice(0, 2).map((item) => {
                            return (
                                <span className={item.cName}>
                                    <AnimationLetter letter={item.letter} />
                                </span>
                            )
                        })
                    }
                    &nbsp;
                    {
                        LetterData.slice(2, 9).map((item) => {
                            return (
                                <span className={item.cName}>
                                    <AnimationLetter letter={item.letter} />
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}