import React from 'react'
import './header.css';

 import {useHistory} from 'react-router-dom';


 const Header = () => {
     let history=useHistory();
    return (
        <div class='nav'>
            <button className='button' onClick={() => {history.push("/");}}>Logout</button>
        </div>
    )
};
export default Header;