import { React, useEffect, useState } from "react";
import { Component } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Link, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom"

export default function SmartPhoneEdit() {
  const param = useParams();
  const navigate = useNavigate();
  const [mobile, setData] = useState({});
  const api = "https://631eb4e858a1c0fe9f55f1b7.mockapi.io/smartphones/";
  useEffect(() => {
    fetch(api + "/" + param.id, { method: "GET" })
      .then(res => res.json())
      .then(res => setData(res));
  }, []);


  return (
    <>
      <div class="card mb-3">
        <h1 align="center" text-color="black"><u>Edit Mobile Details</u></h1>
        <div className="col-md-12 my-2 mx-4 d-flex justify-content-center">

          <div class="col-md-8">

            <div class="  card-body position-relative " align="center">


              <table class="table caption-top table-striped table-bordered border-primary">


                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Name</td>
                    <td>:</td>
                    <td><input type="text" class="form-control" id="inputname" value={mobile.SmartPhoneName} onChange={(e) => { setData({ ...mobile, SmartPhoneName: e.target.value }) }} /></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>SmartPhoneModel</td>
                    <td>:</td>
                    <td><input type="text" class="form-control" id="inputmodel" value={mobile.SmartPhoneModel} onChange={(e) => { setData({ ...mobile, SmartPhoneModel: e.target.value }) }} /></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>SmartPhoneMaker</td>
                    <td>:</td>
                    <td><input type="text" class="form-control" id="inputmaker" value={mobile.SmartPhoneMaker} onChange={(e) => { setData({ ...mobile, SmartPhoneMaker: e.target.value }) }} /></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>SmartPhoneDescription</td>
                    <td>:</td>
                    <td><input type="text" class="form-control" id="inputdescripotion" value={mobile.SmartPhoneDescription} onChange={(e) => { setData({ ...mobile, SmartPhoneDescription: e.target.value }) }} /></td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>SmartPhonePrice</td>
                    <td>:</td>
                    <td><input type="text" class="form-control" id="inputprice" value={mobile.SmartPhonePrice} onChange={(e) => { setData({ ...mobile, SmartPhonePrice: e.target.value }) }} /></td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>SmartPhoneId</td>
                    <td>:</td>
                    <td><input type="text" class="form-control" id="inputide" value={mobile.SmartPhoneId} onChange={(e) => { setData({ ...mobile, SmartPhoneId: e.target.value }) }} /></td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>SmartPhoneImage</td>
                    <td>:</td>
                    <td><input type="text" class="form-control" id="inputimage" value={mobile.SmartPhoneImage} onChange={(e) => { setData({ ...mobile, SmartPhoneImage: e.target.value }) }} /></td>
                  </tr>
                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col  d-flex justify-content-center">

          <input type="button" className="btn btn-primary" value="Edit Details" onClick={() => {
            fetch(api + param.id, {
              method: "PUT",
              body: JSON.stringify(mobile),
              headers: {
                "Content-Type": "application/json"
              }
            })
              .then((res) => {

                navigate('/smartphone');
              })
          }} />
        </div>
      </div>
      <br />

    </>);
}