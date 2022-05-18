import React from 'react';
import { SiHomebridge } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className=' bg-base-200 py-6 px-20 flex justify-between items-center'>
            <div><SiHomebridge onClick={() =>navigate('/')} className='text-5xl text-sky-500'/></div>
            <div>User</div>
        </div>
    );
};

export default Header;