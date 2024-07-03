import React, { useState } from 'react';
import './Post.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { MdContentCopy } from 'react-icons/md';
import ContainerComents from './ContainerComents';
import Test from './Test';
import AlertCom from './AlertAddCom';

function Post(props) {
    const [move, setMove] = useState(0);
    const [phone, setPhone] = useState('+21270000469');
    const [alertShown, setAlertShown] = useState(false);
    const [alertShownAdd, setalertShownAdd] = useState(false);
const getShow=(ev)=>{
    setalertShownAdd(ev)
}
const getClose=(ev)=>{
    setalertShownAdd(ev)
}
    const AllImg = ["./assets/images/PostC.jpeg", "./assets/images/Post1.jpeg", "./assets/images/PostC.jpeg", "./assets/images/Post1.jpeg"];

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => setAlertShown(true))
            .catch((error) => console.error('Failed to copy: ', error));
    };

    const moveOnePlus = () => {
        setMove(move < AllImg.length - 1 ? move + 1 : 0);
    };

    const moveOneMoins = () => {
        setMove(move > 0 ? move - 1 : AllImg.length - 1);
    };

    return (
        <>
                                <AlertCom Show={alertShownAdd} func={getClose}/>

        <div id='Post'>
            
            <div className='Title'>
                <FaArrowLeft style={{ height: '40px', width: '50px', marginTop: '5px' }} />
                <h1>Back</h1>
            </div>

            <h1><b>Free Big Mac® w/ $1 min. purchase</b></h1>
            <div className="section1">
                <div className="details">
                    <div className="sectionImage">
                        <div className="grandImg">
                            <FaArrowLeft style={{ height: '40px', width: '50px' }} onClick={moveOneMoins} />
                            <img src={AllImg[move]} height='300' width={'600'} alt="Image" />
                            <FaArrowRight style={{ height: '40px', width: '50px' }} onClick={moveOnePlus} />
                        </div>
                        {alertShown && <Test />}
                        <div className='images'>
                            {AllImg.map((el, index) => (
                                <img key={index} src={el} height='100' width={'100'} alt={`Image ${index}`} />
                            ))}
                        </div>
                    </div>
                    <p className="para">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus eum aliquid saepe autem, a beatae vitae cumque consectetur culpa porro dolorem odio qui sapiente ab soluta quidem hic consequuntur magni.
                    </p>
                </div>
                <div className="comments">
                    <ContainerComents func={getShow} />
                </div>
            </div>
            
            <b>Contact:</b>
            <div className="contact">
                <span>{phone}</span>
                <MdContentCopy style={{ marginLeft: '10px' }} onClick={() => { copyToClipboard(phone) }} />
            </div>
        </div>
        </>
    );
}

export default Post;
