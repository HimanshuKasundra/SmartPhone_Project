import { React, useEffect, useState } from "react";
import { Component } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";
import "./App.css";
const root = createRoot(document.getElementById('root'));

export default function Smartphone() {
    const navigate = useNavigate();

    const api = "https://631eb4e858a1c0fe9f55f1b7.mockapi.io/smartphones";

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(res => setData(res));
    }, []);
    const formatedData = data.map((mobile) => {
        return (
            <>
                <div class="card col-md-3 my-2 py-3">
                    <img src={mobile.SmartPhoneImage} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <Link to={"../smartphone/" + mobile.SmartPhoneId}>
                            <h3 className=" name" id="name" align="center" class="card-title">{mobile.SmartPhoneName}</h3>
                        </Link>
                    </div>

                </div>
            </>
        );
    });
    return <div class="row">{formatedData}</div>;
}

