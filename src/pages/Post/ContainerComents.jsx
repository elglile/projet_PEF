import React, { useState } from 'react';
import './ContainerComents.css';
import Comments from './Comment';
import AlertCom from './AlertAddCom';
function ContainerComents(props) {
    const[AddCom,setAddCom]=useState(false)
    let commentsData = [
        {
            id:1,
            text:'Good Service 👌',
            nameAcc:'Ayoub Elglile',
            stars:3
        },
        {
            id:2,
            text:'Low Price 👌',
            nameAcc:'abderrazaq Moustaoui',
            stars:5
        },
        {
            id:3,
            text:'🔥🔥',
            nameAcc:'abderrazaq Moustaoui',
            stars:2
        }
    ]
    return (
        <>
        <div className='divCom'>

          { commentsData.map(el=>(<Comments text={el.text} name={el.nameAcc} starts={el.stars}/> ))}
          { commentsData.map(el=>(<Comments text={el.text} name={el.nameAcc} starts={el.stars}/> ))}

        </div>
        <div className='AddCom'>
            <button id='AddCom' onClick={()=>{
                props.func(true)
            }}><h1>+</h1>
            </button>
        </div>
</>
    );
}

export default ContainerComents;




