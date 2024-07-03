import React, { useState } from 'react';
import { AiFillFileImage } from 'react-icons/ai';
import { MdCloudUpload, MdDelete } from 'react-icons/md';



function CreatePost(params) {
    const [img, setImg] = useState([]);
    const [filName, setFilName] = useState('No Selected file');
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = ({ target: { files } }) => {
        const newFiles = Array.from(files).slice(0, 3); // Limit to 3 files
        setSelectedFiles(newFiles);
        setFilName(newFiles[0].name); // Update file name display
        if (newFiles.length > 0) {
            setImg([...img, URL.createObjectURL(newFiles[0])]); // Display first selected image
        }
    };

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" />
            <div className="container">
                <hr className="" />
                <div className="">
                    <div>
                        <div className="card mb-4" id="cardP">
                            <div className="card-header" id="card-headerP">Create Post <span></span></div>
                            <div className="card-body" id="">
                                <form>
                                    <div className="row gx-3 mb-3">
                                        {/* Title */}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputUsername">
                                                Title
                                            </label>
                                            <input className="form-control" id="inputUsername form-controlP" type="text"
                                                placeholder="Enter your username" value="" />
                                        </div>
                                        {/* name Company   */}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputOrgName"> name Company  </label>
                                            <input className="form-control" id="inputOrgName form-controlP" type="text"
                                                placeholder="Enter your organization name" value="" />
                                        </div>
                                    </div>

                                    <div className="row gx-3 mb-3">

                                        {/*type  */}
                                        <div className="col-md-6">
                                            <div>
                                                <label className="small mb-1" htmlFor="inputLastName">type</label>
                                                <select className="form-control" id="inputLastName form-controlP">
                                                    <option></option>
                                                    <option>Home</option>
                                                    <option>Job</option>
                                                    <option>Food</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* Location */}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputLocation">Location</label>
                                            <input className="form-control" id="inputLocation" type="text"
                                                placeholder="Enter your location" value="" />
                                        </div>
                                        {/* Adress */}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputOrgName"> Adress  </label>
                                            <input className="form-control" id="inputOrgName form-controlP" type="text"
                                                placeholder="Enter your secende Adress" value="" />
                                        </div>
                                        {/* secende Adress */}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputOrgName"> secende Adress  </label>
                                            <input className="form-control" id="inputOrgName form-controlP" type="text"
                                                placeholder="Enter your Adress" value="" />
                                        </div>
                                    </div>
                                    {/* Title */}



                                    <div className="row gx-3 mb-3">

                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                                            <input className="form-control" id="inputPhone form-controlP" type="tel"
                                                placeholder="+212 6" value="" />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                            <input className="form-control" id="inputEmailAddress form-controlP" type="email"
                                                placeholder="Enter your email address" value="" />
                                        </div>
                                    </div>


                                    <div className="row gx-3 mb-3">

                                        {/* Description */}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputUsername">
                                                Description
                                            </label>
                                            <textarea className="form-control" id="inputFirstName form-controlP" type=""
                                                placeholder="Description de Service" value="" 
                                                style={{height:'150px' , resize:'none'}}
                                                />
                                        </div>

                                        {/* image */}
                                        <div className='col-md-6'>
                                            <div className="d-flex cursor-pointer rounded "
                                                style={{ border: "2px dashed #d5d5fd", justifyContent: 'center', alignItems: 'center', marginTop: '28px', padding: '6px', height: '100px'}}
                                                onClick={() => document.querySelector('.inputClick').click()}
                                            >
                                                <input type="file" accept='image/*' className='inputClick' name="" id="" multiple hidden onChange={handleFileChange} />
                                                {img.length ? img.slice(0, 3).map(el => (
                                                    <img src={el} height={100} style={{ width: 'auto' }} alt={filName} />))
                                                    :
                                                    <MdCloudUpload color='#d5d5fd' size={65} />
                                                }
                                            </div>
                                            <div className='d-flex justify-content-between align-items-center ' style={{backgroundColor:' #e9f0ff' , borderRadius: '5px', marginTop:'5px', padding:'10px 20px'}}>
                                                <AiFillFileImage color='#1474cFf'/>
                                                <span>{filName}</span>
                                                <MdDelete onClick={()=>{
                                                    setFilName("No select File")
                                                    setImg([])
                                                    setSelectedFiles([])
                                                    setFilName([])
                                                    console.log(...selectedFiles)
                                                    
                                                }}/>
                                            </div>
                                        </div>
                                        </div>


                                    {/* image */}
                                    <div className="col-md-3 d-flex cursor-pointer rounded "
                                        style={{ border: "2px dashed #d5d5fd", justifyContent: 'center', alignItems: 'center', marginTop: '28px', padding: '6px', width: ' 49.5%' }}
                                        onClick={() => document.querySelector('.inputClick').click()}
                                    >
                                        <input type="file" accept='image/*' className='inputClick' name="" id="" multiple hidden onChange={handleFileChange} />
                                        {img.length ? img.slice(0, 3).map(el => (
                                            <img src={el} height={25} style={{ width: 'auto' }} alt={filName} />))
                                            :
                                            <MdCloudUpload color='#d5d5fd' size={28} />
                                        }

                                    </div>
                                    <button className="btn btn-primary" type="button">Create</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


function UpdatePost(params) {
    const [img, setImg] = useState([]);
    const [filName, setFilName] = useState('No Selected file');
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = ({ target: { files } }) => {
        const newFiles = Array.from(files).slice(0, 3); // Limit to 3 files
        setSelectedFiles(newFiles);
        setFilName(newFiles[0].name); // Update file name display
        if (newFiles.length > 0) {
            setImg([...img, URL.createObjectURL(newFiles[0])]); // Display first selected image
        }
    };

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" />
            <div className="container">
                <hr className="" />
                <div className="">
                    <div>
                        <div className="card mb-4" id="cardP">
                            <div className="card-header" id="card-headerP">Update Post <span></span></div>
                            <div className="card-body" id="">
                                <form>
                                    <div className="row gx-3 mb-3">
                                        {/* Title */}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputUsername">
                                                Title
                                            </label>
                                            <input className="form-control" id="inputUsername form-controlP" type="text"
                                                placeholder="Enter your username" value="" />
                                        </div>
                                        {/* name Company   */}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputOrgName"> name Company  </label>
                                            <input className="form-control" id="inputOrgName form-controlP" type="text"
                                                placeholder="Enter your organization name" value="" />
                                        </div>
                                    </div>

                                    <div className="row gx-3 mb-3">

                                        {/*type  */}
                                        <div className="col-md-6">
                                            <div>
                                                <label className="small mb-1" htmlFor="inputLastName">type</label>
                                                <select className="form-control" id="inputLastName form-controlP">
                                                    <option></option>
                                                    <option>Home</option>
                                                    <option>Job</option>
                                                    <option>Food</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* Location */}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputLocation">Location</label>
                                            <input className="form-control" id="inputLocation" type="text"
                                                placeholder="Enter your location" value="" />
                                        </div>
                                        {/* Adress */}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputOrgName"> Adress  </label>
                                            <input className="form-control" id="inputOrgName form-controlP" type="text"
                                                placeholder="Enter your secende Adress" value="" />
                                        </div>
                                        {/* secende Adress */}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputOrgName"> secende Adress  </label>
                                            <input className="form-control" id="inputOrgName form-controlP" type="text"
                                                placeholder="Enter your Adress" value="" />
                                        </div>
                                    </div>
                                    {/* Title */}



                                    <div className="row gx-3 mb-3">

                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                                            <input className="form-control" id="inputPhone form-controlP" type="tel"
                                                placeholder="+212 6" value="" />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                            <input className="form-control" id="inputEmailAddress form-controlP" type="email"
                                                placeholder="Enter your email address" value="" />
                                        </div>
                                    </div>


                                    <div className="row gx-3 mb-3">

                                        {/* Description */}
                                        <div className="col-md-6">
                                            <label className="small mb-1" htmlFor="inputUsername">
                                                Description
                                            </label>
                                            <textarea className="form-control" id="inputFirstName form-controlP" type=""
                                                placeholder="Description de Service" value="" 
                                                style={{height:'150px' , resize:'none'}}
                                                />
                                        </div>

                                        {/* image */}
                                        <div className="col-md-3 d-flex cursor-pointer rounded "
                                            style={{ border: "2px dashed #d5d5fd", justifyContent: 'center', alignItems: 'center', marginTop: '28px', padding: '6px', width: ' 49.5%', height: '150px'}}
                                            onClick={() => document.querySelector('.inputClick').click()}
                                        >
                                            <input type="file" accept='image/*' className='inputClick' name="" id="" multiple hidden onChange={handleFileChange} />
                                            {img.length ? img.slice(0, 3).map(el => (
                                                <img src={el} height={150} style={{ width: 'auto' }} alt={filName} />))
                                                :
                                                <MdCloudUpload color='#d5d5fd' size={65} />
                                            }

                                        </div>
                                    </div>

                                    {/* image */}
                                    <div className="col-md-3 d-flex cursor-pointer rounded "
                                        style={{ border: "2px dashed #d5d5fd", justifyContent: 'center', alignItems: 'center', marginTop: '28px', padding: '6px', width: ' 49.5%' }}
                                        onClick={() => document.querySelector('.inputClick').click()}
                                    >
                                        <input type="file" accept='image/*' className='inputClick' name="" id="" multiple hidden onChange={handleFileChange} />
                                        {img.length ? img.slice(0, 3).map(el => (
                                            <img src={el} height={25} style={{ width: 'auto' }} alt={filName} />))
                                            :
                                            <MdCloudUpload color='#d5d5fd' size={28} />
                                        }

                                    </div>
                                    <button className="btn btn-primary" type="button">Save Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export  {CreatePost , UpdatePost};