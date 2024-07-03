import React, { useState } from 'react';
import '../css/Acceuil.css';

import { StudentServices } from "../data";
import { FaSearch } from "react-icons/fa";




function Acceuil(props) {
    const [rangeVal, setrangeVal] = useState(3000);
    const [Val, setVal] = useState("");
    let [view, setview] = useState(4);
    let Categories = ["Global", "Home", "Job", "Food"];
    let mapingCategories = Categories.map((el, i) => (
        <li>
            <div className="d-flex justify-content-between fruite-name" key={i}>
                <a href="#">
                    <i className="fas fa-apple-alt me-2" />
                    {el}
                </a>
                <span>(3)</span>
            </div>
        </li>
    ));
    let maping = StudentServices.filter((el) =>
        el.name.toLowerCase().trimStart(Val)
    ).map((el) => (
        <div className="col-md-6 col-lg-6 col-xl-4 h-100" key={el.id}>
            <div className="rounded position-relative fruite-item">
                <div className="fruite-img" style={{ height: "200px" }}>
                    <img src={el.img} className="img-fluid w-100 h-100 rounded-top" />
                </div>
                <div
                    className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                    style={{ top: 10, left: 10 }}
                >
                    {el.name}
                </div>
                <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                    <p>{el.contact.email}</p>
                    <p>{el.description}</p>

                    <div className="d-flex justify-content-between flex-lg-wrap">
                        <p className="text-dark fs-5 fw-bold mb-0">{el.price} Dh</p>
                        <a
                            href="#"
                            className="btn border border-secondary rounded-pill px-3 text-primary"
                        >
                            <i className="fa fa-shopping-bag me-2 text-primary" /> Add to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    ));

    let productMap = StudentServices.slice(0, view).map((el) => (
        <div>
            <div className="d-flex align-items-center justify-content-start">
                <div className="rounded me-4" style={{ width: 100, height: 100 }}>
                    <img src={el.img} className="img-fluid rounded" alt />
                </div>

                <div>
                    <h6 className="mb-2">{el.name}</h6>
                    <div className="d-flex mb-2">
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star text-secondary" />
                        <i className="fa fa-star" />
                    </div>
                    <div className="d-flex mb-2">
                        <h5 className="fw-bold me-2">{el.price} DH</h5>
                        <h5 className="text-danger text-decoration-line-through">
                            {el.price + 4} DH
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    ));
    return (
        <div>
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-xl-3">
                            <div className="input-group w-100 mx-auto d-flex">
                                <h1 className="mb-4">Services Liste</h1>
                            </div>
                        </div>
                        <div className="col-6" />
                        <div className="col-xl-3">
                            {/* Default Sorting: */}
                            <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                <label htmlFor="fruits">Default Sorting:</label>
                                <select
                                    id="fruits"
                                    name="fruitlist"
                                    className="border-0 form-select-sm bg-light me-3"
                                    form="fruitform"
                                >
                                    <option value="volvo">Nothing</option>
                                    <option value="saab">Popularity</option>
                                    <option value="opel">Organic</option>
                                    <option value="audi">Fantastic</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                <div className="col-lg-3">
                                    <div className="row g-4">
                                        <div className="col-lg-12">
                                            <div className="input-group w-100 mx-auto d-flex">
                                                <form action="" className="d-flex">
                                                    <input
                                                        type="search"
                                                        className="form-control p-3"
                                                        placeholder="keywords"
                                                        aria-describedby="search-icon-1"
                                                        onChange={(e) => {
                                                            setVal(e.target.value);
                                                        }}
                                                    />
                                                    <button type="submit"
                                                        id="search-icon-1"
                                                        className="input-group-text p-3"
                                                    >
                                                        <FaSearch />
                                                    </button >
                                                </form>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4>Categories</h4>
                                                <ul className="list-unstyled fruite-categorie">
                                                    {mapingCategories}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="mb-3">
                                                <h4 className="mb-2">Price</h4>
                                                <input
                                                    type="range"
                                                    className="form-range w-100"
                                                    id="rangeInput"
                                                    name="rangeInput"
                                                    min={3000}
                                                    max={20000}
                                                    defaultValue={3000}
                                                    oninput="amount.value=rangeInput.value"
                                                    onChange={(e) => {
                                                        setrangeVal(e.target.value);
                                                    }}
                                                />
                                                <output
                                                    id="amount"
                                                    name="amount"
                                                    min-velue={3000}
                                                    max-value={20000}
                                                    htmlFor="rangeInput"
                                                >
                                                    {rangeVal} DH
                                                </output>
                                            </div>
                                        </div>
                                        <div className="col-lg-12"></div>
                                        <div className="col-lg-12">
                                            <h4 className="mb-3">Featured products</h4>
                                            {productMap}

                                            <div className="d-flex justify-content-center my-4">
                                                {view === 4 ? (
                                                    <button
                                                        href="#"
                                                        className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
                                                        onClick={() => setview(7)}
                                                    >
                                                        View More
                                                    </button>
                                                ) : (
                                                    <button
                                                        href="#"
                                                        className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
                                                        onClick={() => setview(4)}
                                                    >
                                                        View Less
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="position-relative">
                                                <img    
                                                    src="./assets/images/background_serivce.jpeg"
                                                    className="img-fluid w-100 rounded"
                                                    alt
                                                />
                                                <div
                                                    className="position-absolute"
                                                    style={{
                                                        top: "50%",
                                                        right: 10,
                                                        transform: "translateY(-50%)",
                                                    }}
                                                >
                                                    <h3 className="text-secondary fw-bold">
                                                        Fresh <br /> Fruits <br /> Banner
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-9">
                                    <div className="row g-4 justify-content-center">
                                        {maping}
                                        <div className="col-12">
                                            <div className="pagination d-flex justify-content-center mt-5">
                                                <a href="#" className="rounded">
                                                    «
                                                </a>
                                                <a href="#" className="active rounded">
                                                    1
                                                </a>
                                                <a href="#" className="rounded">
                                                    2
                                                </a>
                                                <a href="#" className="rounded">
                                                    3
                                                </a>
                                                <a href="#" className="rounded">
                                                    4
                                                </a>
                                                <a href="#" className="rounded">
                                                    5
                                                </a>
                                                <a href="#" className="rounded">
                                                    6
                                                </a>
                                                <a href="#" className="rounded">
                                                    »
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { Acceuil };