import "./index.scss";
import mypic from "../../assets/images/mypic.jpg"

export default function DevDetails() {
    return (<div className="dev-details">
        <div className="top-container">
            <div className="image">
                <img class="dev-image"src={mypic} alt="dev-image" />
            </div>
            <div className="details">
                <div className="profile-detail one">Developer.<div className="caret"></div></div>
                <div className="profile-detail two">Intern...<div className="caret"></div></div>
            </div>
        </div>
        <div className="bottom-container profile-detail">Learner..<div className="caret"></div></div>
        </div>);
}