import React from 'react';


function CreatePost(params) {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" />
            <div class="container-xl px-4 mt-4">
                <hr class="mt-0 mb-4" />
                <div class="row">
                    <div class="col-xl-8">

                        <div class="card mb-4" id="cardP">
                            <div class="card-header" id="card-headerP" >Create Post <span></span></div>
                            <div class="card-body" id="">
                                <form>

                                    <div class="mb-3">
                                        <label class="small mb-1" for="inputUsername">
                                            Title
                                        </label>
                                        <input class="form-control" id="inputUsername form-controlP" type="text"
                                            placeholder="Enter your username" value="" />
                                    </div>

                                    <div class="row gx-3 mb-3">

                                        <div class="col-md-6">
                                            <div>
                                                <label class="small mb-1" for="inputLastName">type</label>
                                                {/* <input  type="text"
                                                    placeholder="Enter your last name" value="Luna" /> */}
                                                <select class="form-control" id="inputLastName form-controlP"                                            >
                                                    <option></option>
                                                    <option>Home</option>
                                                    <option>Job</option>
                                                    <option>Food</option>
                                                </select>
                                            </div>  
                                            {/* <!-- component --> */}
                                            {/* <div>
                                                <label class="block mb-2 text-sm font-medium text-zinc-900">Image Upload</label>
                                                <div class="flex items-center justify-center w-full">
                                                    <label
                                                        class="flex flex-col border-4 border-dashed w-full h-32 hover:bg-zinc-100 hover:border-zinc-300 group"
                                                    >
                                                        <div class="flex flex-col items-center justify-center pt-7">
                                                            <svg
                                                                class=" text-zinc-400 group-hover:text-zinc-600"
                                                                style={{width:'70px;'}}
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    stroke-width="2"
                                                                    d="M7 16V4a2 2 0 012-2h6a2 2 0 012 2v12m-3 5h-4m4 0a2 2 0 002-2v-1a2 2 0 00-2-2h-4a2 2 0 00-2 2v1a2 2 0 002 2m4 0v-1m0 1H9m0 0V4m0 16v-1"
                                                                ></path>
                                                            </svg>
                                                            <p
                                                                class="lowercase text-sm text-zinc-400 group-hover:text-zinc-600 pt-1 tracking-wider"
                                                            >
                                                                Click to upload image
                                                            </p>
                                                        </div>
                                                        <input type="file" class="hidden" />
                                                    </label>
                                                </div>
                                            </div> */}
                                        

                                        {/* <div>
                                            <label class="small mb-1" for="inputLastName">type</label>
                                            <input class="form-control" id="inputLastName form-controlP" type="tel"
                                                placeholder="+212 6" value="" />
                                        </div> */}

                                    </div>
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputFirstName">Description</label>
                                        <textarea class="form-control" id="inputFirstName form-controlP" type=""
                                            placeholder="Description de Service" value="" />

                                    </div>
                            </div>

                            <div class="row gx-3 mb-3">

                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputOrgName"> name Company  </label>
                                    <input class="form-control" id="inputOrgName form-controlP" type="text"
                                        placeholder="Enter your organization name" value="" />
                                </div>

                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputLocation">Location</label>
                                    <input class="form-control" id="inputLocation" type="text"
                                        placeholder="Enter your location" value="" />
                                </div>
                            </div>

                            {/* <div class="mb-3">
                                <label class="small mb-1" for="inputEmailAddress">Email address</label>
                                <input class="form-control" id="inputEmailAddress form-controlP" type="email"
                                    placeholder="Enter your email address" value="name@example.com" />
                            </div> */}

                            <div class="row gx-3 mb-3">

                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputPhone">Phone number</label>
                                    <input class="form-control" id="inputPhone form-controlP" type="tel"
                                        placeholder="+212 6" value="" />
                                </div>

                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputEmailAddress">Email address</label>
                                    <input class="form-control" id="inputEmailAddress form-controlP" type="email"
                                        placeholder="Enter your email address" value="" />
                                </div>
                            </div>
                            
                            <div class="row gx-3 mb-3">

                            {/* <!-- component --> */}
                                

                            </div>

                            <button class="btn btn-primary" type="button">Save changes</button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
            </div >
        </>
    );
}


export default CreatePost;