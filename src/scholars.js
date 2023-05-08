import Navbar from "./Navbar";
import Footer from "./Footer";
import './Scholars.css'
// import { Profile } from "./Profile.js";
import { Filter } from './Filter.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';



let example = [
    { name: "John", title: "xxx", id: "12" },
    { name: "Jane", title: "xxx", id: "13" },
    { name: "Bob", title: "xxx", id: "14" },
    { name: "John", title: "xxx", id: "15" },
    { name: "Jane", title: "xxx", id: "16" },
    { name: "Bob", title: "xxx", id: "17" },
    { name: "John", title: "xxx", id: "18" },
    { name: "Jane", title: "xxx", id: "19" },
    { name: "Bob", title: "xxx", id: "21" },
    { name: "John", title: "xxx", id: "22" },
    { name: "Jane", title: "xxx", id: "23" },
    { name: "Bob", title: "xxx", id: "34" },
    { name: "John", title: "xxx", id: "111" },
    { name: "Jane", title: "xxx", id: "124" },
    { name: "Chad", title: "xxx", id: "122" }
];

function EachScholar(props) {
    // let name;
    // let title;
    // // let userinfo = props.user;
    // let x = 0;

    // // if ('name' in props.name) {
    // //     name = userinfo.name;
    // // }
    // // if ('title' in props.title) {
    // //     title = userinfo.title;
    // // }

    // const handleclick = (event) => {
    //     event.preventDefault(); // Prevent the default behavior of the button
    //     const scholar = `/user?userName=${name}`;
    //     return <Link to={scholar} />;
    // };
    // console.log(props.name);
    return (
        // <Link className="publication-link" to={`/publications/result/${props.id}`} state={props}>
        <div className="eachuser">
            <div className="userPhoto" ></div>
            <div className="textcontainer">
                <p className="name">{props.name}</p>
                <p className="title">{props.title}</p>
                <button className="learn" type="button" >Learn more</button>
            </div>
        </div>
        // </Link>
    );
}






export function Scholar() {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;


    return (
        <div>
            <Navbar />
            <div className="scholar">
                <Filter />
                <div className="scholarpage">
                    <div className="container">
                        {example.slice(startIndex, endIndex).map((item) => (
                            <EachScholar name={item.name} title={item.title} id={item.id} />
                        ))}

                    </div>
                    <div className="resultPagination">
                        <a href="#">&laquo;</a>
                        {Array(Math.ceil(example.length / itemsPerPage))
                            .fill()
                            .map((_, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className={currentPage === i + 1 ? "active" : ""}
                                    onClick={() => setCurrentPage(i + 1)}
                                >
                                    {i + 1}
                                </a>
                            ))}
                        <a href="#">&raquo;</a>
                    </div>
                </div>
            </div >
        </div >

    )
}