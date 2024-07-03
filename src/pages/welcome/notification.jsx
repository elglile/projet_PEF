import { FaBell, FaRegBell } from "react-icons/fa";
import React, { useState } from 'react';
// import './style.css';
function Notification(props) {
    const [Show,setShow]=useState(false)
    return (<>
        <FaBell onClick={()=>setShow(!Show)}/>
        <div className="notification_content" style={!Show ?{display:'none'}:{}}>
            <ul type='none'>
                <li>
                    text1
                </li>
                <li>text1
                    <p>
                        Lorem ipsum dolor sit amet 
                    </p>
                </li>
                <li>text1</li>
                <li>text1</li>
                <li>text1</li>
                <li>text1</li>
                <li>text1</li>
                <li>text1</li>
                <li>text1</li>
                <li>text1</li>

            </ul>
        </div>
    </>);
}

export default Notification;