import './index.scss';
import Sidebar from '../Sidebar';
import NameBox from '../NameBox';
import DevDetails from '../DevDetails';
import "animate.css"

const Layout = () => {
    return <>
    <Sidebar />
    <DevDetails />
    {/* <span className="work animate__animated animate__bounce">WORK UNDER PROGRESS</span>
    <span className="owner-name">-MohdWajid</span> */}
    <NameBox name="MOHD WAJID" />
    </>
}

export default Layout;
