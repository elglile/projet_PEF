import React from 'react';
 import './Comment.css';
 import { IoMdStar } from "react-icons/io";

 function Comments(props) {

    return (
        <div class="card p-3">

        <div class="d-flex justify-content-between align-items-center">

      <div class="user  align-items-center">
<div className='topComment'>
    <div>
        <img src="https://i.imgur.com/hczKIze.jpg" width="30" class="user-img rounded-circle mr-2"/>
       <small class="font-weight-bold text-primary">{props.name}</small> 
</div>
<div>
<IoMdStar/>
<IoMdStar/>
<IoMdStar/>
<IoMdStar/>
<IoMdStar style={{color:'aliceblue'}}/>
</div>
       <small id='time'>2 days ago</small>
        </div>
        <br />
        <small class="font-weight-bold">{props.text}</small>
      
          
      </div>


      

      </div>
      </div>

    );
}

export default Comments;