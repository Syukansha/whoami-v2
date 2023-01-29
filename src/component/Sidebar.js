import {FaFire, FaPo} from 'react-icons/fa';
import {BsFillPhoneFill} from 'react-icons/bs';
import {BiDetail} from 'react-icons/bi';




// @flow
const Sidebar = () =>{
    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col text-white shadow-2xl bg-gray-800">
            <a href='/'><SidebarIcon icon={<BsFillPhoneFill size="28"/>}/></a>
            <a href='/detect'><SidebarIcon icon={<BiDetail size="28"/>}/></a>
        </div>
    )
}

const SidebarIcon = ({icon}) => (
    <div className='sidebar-icon'>
        {icon}
    </div>
);

export default Sidebar;