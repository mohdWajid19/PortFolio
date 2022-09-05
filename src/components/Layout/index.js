import './index.scss';
import Sidebar from '../Sidebar';
import NameBox from '../NameBox';
import HomeNameText from '../HomeNameText';
import DevName from '../DevName';
import "animate.css"

const Layout = () => {
    return <>
    <Sidebar />
    <HomeNameText />
    {/* <DevName /> */}
    {/* <span className="work animate__animated animate__bounce">WORK UNDER PROGRESS</span>
    <span className="owner-name">-MohdWajid</span> */}
    <NameBox name="MOHD WAJID" />
    </>

}

export default Layout;
