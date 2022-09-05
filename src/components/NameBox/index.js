import './index.scss';

export default function NameBox(props) {
    return <div className="namebox">
        <div className="box">
            <a href="https://drive.google.com/file/d/1N77FaGDnsdAQcMwCP5IMJB4GJ7FDoXmC/view?usp=sharing"><marquee scrollamount="10">{props.name}'s  portfolio</marquee></a>
            {/* <span scrollamount="10">{props.name}'s  portfolio</span> */}
        </div>
    </div>
}