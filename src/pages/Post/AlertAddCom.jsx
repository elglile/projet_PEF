import { useState } from 'react';
import './AlertAddCom.css';
import StarRating from './Rating';
function AlertCom(props) {
    const[Notclose,setNotclose]=useState(true)
    if(props.Show){
        return(
            <>
       {Notclose && (<div className='AddComment'>
            <div className="close" onClick={()=>{
                setNotclose(false)
                props.func(false)
            }}><b>X</b></div>
          <h1>Add Commenter</h1>
          <div class="form-group">
<StarRating/>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{width: "500px",resize: 'none'}} ></textarea>
  </div> 
  <button type="submit" class="btn btn-primary btn-lg mt-3 mb-3" onClick={()=>{
                setNotclose(false)
            }}>Publish</button>

        </div>)}</>
        )
    }
}
export default AlertCom;