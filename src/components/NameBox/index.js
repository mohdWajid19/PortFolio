import './index.scss';

export default function NameBox(props) {
    return <div className="namebox">
        <div className="box">
            {/* <a href=""><marquee scrollamount="10">{props.name}'s  portfolio</marquee></a> */}
            {/* <span scrollamount="10">{props.name}'s  portfolio</span> */}
            <a href="https://drive.google.com/file/d/1N77FaGDnsdAQcMwCP5IMJB4GJ7FDoXmC/view?usp=sharing"><span scrollamount="10">{props.name}'s Resume</span></a>
        </div>
    </div>
}