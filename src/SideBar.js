import { FaHouseUser } from 'react-icons/fa';
import { AiOutlineTeam } from 'react-icons/ai';
import { FaReact } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';
import { FaSignal } from 'react-icons/fa';

import { FaRegUser } from 'react-icons/fa';

// import profileImg from './img/elon-musk.jpg';

const profile = {
  name: 'Elon Musk',
  // img: profileImg,
  img: '',
};

const items = [
  { text: 'Dashboard', icon: <FaHouseUser /> },
  { text: 'Team', icon: <AiOutlineTeam /> },
  { text: 'Projects', icon: <FaReact /> },
  { text: 'Calendar', icon: <FaCalendar /> },
  { text: 'Documents', icon: <FaFileAlt /> },
  { text: 'Reports', icon: <FaSignal /> },
];

const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen flex flex-col w-48 px-4 bg-indigo-600 text-white overflow-x-hidden'>
      <h2 className='text-2xl font-bold py-4'>workflow</h2>
      {items.map((item) => (
        <SideBarItem key={item.text} text={item.text} icon={item.icon} />
      ))}
      <hr className='relative left-[-1em] w-screen mt-auto border-t-1 border-indigo-800' />
      <ProfileCard name={profile.name} img={profile.img} />
    </div>
  );
};

const SideBarItem = ({ icon, text }) => {
  return (
    <div className='flex gap-x-3 items-center text-lg px-4 py-2 hover:bg-indigo-800 rounded cursor-pointer'>
      {icon}
      <p>{text}</p>
    </div>
  );
};

const ProfileCard = ({ name, img }) => {
  return (
    <div className='flex items-center py-4'>
      {!img && <FaRegUser className='text-3xl' />}
      {img && (
        <img
          src={img}
          alt={name}
          className='rounded-full object-cover w-12 h-12'
        />
      )}
      <div className='pl-4'>
        <p>{name}</p>
        <a href='#' className='opacity-80 text-sm'>
          View profile
        </a>
      </div>
    </div>
  );
};

export { SideBar };
