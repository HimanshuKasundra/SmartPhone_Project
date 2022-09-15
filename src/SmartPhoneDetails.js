import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import SmartPhoneEdit from "./SmartPhoneEdit"
import SmartPhone from "./Smartphone"
import "./App.css";
export default function SmartPhoneDetails() {
    const param = useParams();
    const navigate = useNavigate();
    const [mobile, setData] = useState({});
    const api = "https://631eb4e858a1c0fe9f55f1b7.mockapi.io/smartphones";
    useEffect((res) => {
        fetch(api + "/" + param.id, { method: "GET" })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setData(res);
            });
    }, [])


    return (
        <>
            <div class="card mb-3">
                <div className="col-md-12 my-2 mx-4 d-flex justify-content-center">

                    <div class="col-md-8">
                    
                        <div class="  card-body position-relative " align="center">
                        <div  align="center">
                        <img id="imageDet" src={mobile.SmartPhoneImage} class="card-img-top" alt="..." />
                    </div>

                            <table class="table caption-top table-striped table-bordered border-primary">
                                <caption><h1 align="center" text-color="black">Mobile Details</h1></caption>
                               
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Name</td>
                                        <td>:</td>
                                        <td>{mobile.SmartPhoneName}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>SmartPhoneModel</td>
                                        <td>:</td>
                                        <td>{mobile.SmartPhoneModel}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>SmartPhoneMaker</td>
                                        <td>:</td>
                                        <td>{mobile.SmartPhoneMaker}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>SmartPhoneDescription</td>
                                        <td>:</td>
                                        <td>{mobile.SmartPhoneDescription}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>SmartPhonePrice</td>
                                        <td>:</td>
                                        <td>{mobile.SmartPhonePrice}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>SmartPhoneId</td>
                                        <td>:</td>
                                        <td>{mobile.SmartPhoneId}</td>
                                    </tr>
                                </tbody>
                                
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 my-2 mx-4 d-flex justify-content-center">
                    <div>
                        <button align="center" className="btn btn-primary mx-4" onClick={() => {
                            fetch(api +"/"+ param.id, { method: "DELETE" })
                                .then(res => {
                                    navigate('/smartphone');
                                });
                        }}>Delete</button>
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={() => {
                            navigate('../smartphone/edit/' + param.id);
                        }}>Edit</button>
                    </div>
                </div>
            </div>


        </>
    )
}