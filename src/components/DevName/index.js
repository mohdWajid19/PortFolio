import './index.scss';
import 'animate.css';
import letterW from '../../assets/images/W.png'
import letterA from '../../assets/images/A.png'
import letterJ from '../../assets/images/J.png'
import letterI from '../../assets/images/I.png'
import letterD from '../../assets/images/D.png'

function DevName() {
    return (
    <>
        <div className="center">
            <img src={letterW} alt="letterW" class="letterAnimation animate__animated animate__bounce" height="128px" />
            <img src={letterA} alt="letterA" class="letterAnimation animate__animated animate__bounce" height="128px" />
            <img src={letterJ} alt="letterJ" class="letterAnimation animate__animated animate__bounce" height="128px" />
            <img src={letterI} alt="letterI" class="letterAnimation animate__animated animate__bounce" height="128px" />
            <img src={letterD} alt="letterD" class="letterAnimation animate__animated animate__bounce" height="128px" />
        </div>
    </>
    )
}

export default DevName