import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import StudentEdit from "./SmartPhoneEdit";

export default function AddSmartPhone() {
    const navigate = useNavigate();
    const api = "https://631eb4e858a1c0fe9f55f1b7.mockapi.io/smartphones";

    const [mobile, setData] = useState({ SmartPhoneName: "" });

    return (
        <>
           
                <div class="card mb-3">
                <h1 align="center" text-color="black"><u>Add Mobile Details</u></h1>
                    <div className="col-md-12 my-2 mx-4 d-flex justify-content-center">

                        <div class="col-md-8">

                            <div class="  card-body position-relative " align="center">


                                <table class="table caption-top table-striped table-bordered border-primary">
                                    

                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Name</td>
                                            <td>:</td>
                                            <td><input type="text" class="form-control" id="inputState" onChange={(e) => { setData({ ...mobile, SmartPhoneName: e.target.value }) }} /></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>SmartPhoneModel</td>
                                            <td>:</td>
                                            <td><input type="text" class="form-control" id="inputState" onChange={(e) => { setData({ ...mobile, SmartPhoneModel: e.target.value }) }} /></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>SmartPhoneMaker</td>
                                            <td>:</td>
                                            <td><input type="text" class="form-control" id="inputState" onChange={(e) => { setData({ ...mobile, SmartPhoneMaker: e.target.value }) }} /></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>SmartPhoneDescription</td>
                                            <td>:</td>
                                            <td><input type="text" class="form-control" id="inputState" onChange={(e) => { setData({ ...mobile, SmartPhoneDescription: e.target.value }) }} /></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>SmartPhonePrice</td>
                                            <td>:</td>
                                            <td><input type="text" class="form-control" id="inputState" onChange={(e) => { setData({ ...mobile, SmartPhonePrice: e.target.value }) }} /></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>SmartPhoneId</td>
                                            <td>:</td>
                                            <td><input type="text" class="form-control" id="inputState" onChange={(e) => { setData({ ...mobile, SmartPhoneId: e.target.value }) }} /></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>SmartPhoneImage</td>
                                            <td>:</td>
                                            <td><input type="text" class="form-control" id="inputState" onChange={(e) => { setData({ ...mobile, SmartPhoneImage: e.target.value }) }} /></td>
                                        </tr>
                                    </tbody>

                                </table>
                            </div>
                        </div>
                    </div>
                </div>
          

            <div className="col-md-12 my-2 mx-4 d-flex justify-content-center">
                <div>
                    <button align="center" className="btn btn-primary mx-4" onClick={() => {
                        fetch(api, {
                            method: "POST",
                            body: JSON.stringify(mobile),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then((res) => {
                                navigate('/smartphone');
                            })
                    }}>Add SmartPhone</button>
                </div>
            </div>
        </>
    )
}