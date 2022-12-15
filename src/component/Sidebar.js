import {FaFire, FaPo} from 'react-icons/fa';
import {BsFillPhoneFill} from 'react-icons/bs';

// @flow
const Sidebar = () =>{
    return(
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">

            <a href='/Home'><SidebarIcon icon={<FaFire size="28"/>}/></a>
          
            <a href='/about'><SidebarIcon icon={<BsFillPhoneFill size="28"/>}/></a>
        </div>
    )
}

const SidebarIcon = ({icon}) => (
    <div className='sidebar-icon'>
        {icon}
    </div>
);

export default Sidebar;