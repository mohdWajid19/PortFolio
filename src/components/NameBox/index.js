import './index.scss';

export default function NameBox(props) {
    return <div className="namebox">
        <div className="box">
            <a href=""><marquee scrollamount="10">{props.name}'s  portfolio</marquee></a>
            {/* <span scrollamount="10">{props.name}'s  portfolio</span> */}
        </div>
    </div>
}