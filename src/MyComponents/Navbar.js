import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Navbar(props) {
// SOME EXTRA MODES LIKE-🔵🔴🟢⚪⚫
    const pmode = () => {
        if (props.mode === 'light') {
            // setMode('dark');
            document.body.style.backgroundColor = 'blue';
            document.body.style.color = 'white';
        }
    }
    const dmode = () => {
        if (props.mode === 'light') {
            // setMode('dark');
            document.body.style.backgroundColor = 'red';
            document.body.style.color = 'white';
        }
    }
    const smode = () => {
        if (props.mode === 'light') {
            // setMode('dark');
            document.body.style.backgroundColor = 'green';
            document.body.style.color = 'white';
        }
    }
    const lightmode = () => {
        if (props.mode === 'light') {
            // setMode('dark');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    }
    const darkmode = () => {
        if (props.mode === 'light') {
            // setMode('dark');
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }
    }

        return (
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{props.title}</a>
                    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a>  */}
                                {/* -->a="link" or href="to" use krenge...bcz page relode nhi ho */}
                                <Link className="nav-link active text:hover-bg-success " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">{props.about}</a> */}
                                <Link className="nav-link" to="/about">{props.about}</Link>
                            </li>
                        </ul>
                        {/* EXTRA MODES */}
                        <div className="d-flex">
                            <button className="bg-primary rounded mx-1" style={{ height: '20px', width: '20px' }} onClick={pmode}></button>
                            <button className="bg-danger rounded mx-1" style={{ height: '20px', width: '20px' }} onClick={dmode}></button>
                            <button className="bg-success rounded mx-1" style={{ height: '20px', width: '20px' }} onClick={smode}></button>
                            <button className="bg-light rounded mx-1" style={{ height: '20px', width: '20px' }} onClick={lightmode}></button>
                            <button className="bg-dark rounded mx-1" style={{ height: '20px', width: '20px' }} onClick={darkmode}></button>
                        </div>
                        {/* SEARCH */}
                        <form className="d-flex mt-2" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success " type="submit">Search</button>
                    </form>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input onClick={props.toggleMode} className="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.label} </label>
                        </div>
                    </div>
                </div>
            </nav >
        )
    }
    Navbar.propTypes = {
        // ISREQUIRED KA MTLB K AGER KUCH BHI VALUE PAAS NHI KI HUI THO CONSOLE M ERROR SHOW HOGA OR AGER DEFULT VALUE SET KIHUI H THO WO PAAS HO JAHEGI LEKIN UNDEFINED NHI HONA CHAHIYEE 
        title: PropTypes.string.isRequired,
        // title: PropTypes.string,
        // About: PropTypes.string
        About: PropTypes.string.isRequired
    }


    // DEFAULTE PROPS KA MTLB KI AGER KOI PAAS NHI KI HUI THO YE SET HO JAHE
    Navbar.defaultProps = {
        title: "Set title here",
        About: "About text here"
    }
