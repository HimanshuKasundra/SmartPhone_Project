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
    fetch(api +"/"+ param.id, { method: "GET" })
      .then(res => res.json())
      .then(res => setData(res));
  }, []);


  return (
  <>
    <div class="row g-3 my-2 mx-4" >
      <h1 align="center"><u>Edit Yours Details</u></h1><br />
      <div class="col-md-6">
        <label for="inputEmail4" class="form-label">SmartPhone Id:</label>
        <input type="text" class="form-control" id="inputEmail4" value={mobile.SmartPhoneId} onChange={(e) => {
      setData({ ...mobile, SmartPhoneId: e.target.value });
    }} />
      </div>
      <div class="col-md-6">
        <label for="inputPassword4" class="form-label">SmartPhone Name:</label>
        <input type="text" class="form-control" id="inputPassword4" value={mobile.SmartPhoneName} onChange={(e) => {
      setData({ ...mobile, SmartPhoneName: e.target.value });
    }} />
      </div>
      <div class="col-6">
        <label for="inputAddress" class="form-label">SmartPhone Model:</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"  value={mobile.SmartPhoneModel} onChange={(e) => {
      setData({ ...mobile, SmartPhoneModel: e.target.value });
    }} />
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">SmartPhone Description:</label>
        <input type="text" class="form-control" id="inputCity" value={mobile.SmartPhoneDescription} onChange={(e) => {
      setData({ ...mobile, SmartPhoneDescription: e.target.value });
    }}  />
      </div>
      <div class="col-md-6">
        <label for="inputCity" class="form-label">SmartPhon Maker:</label>
        <input type="text" class="form-control" id="inputCity" value={mobile.SmartPhoneMaker} onChange={(e) => {
      setData({ ...mobile, SmartPhoneMaker: e.target.value });
    }}  />
      </div>

      <div class="col-md-6">
        <label for="inputCity" class="form-label">SmartPhone Price:</label>
        <input type="text" class="form-control" id="inputCity"  value={mobile.SmartPhonePrice} onChange={(e) => {
      setData({ ...mobile, SmartPhonePrice: e.target.value });
    }}/>
    </div>
    </div>
      <div className="row">
      <div className="col  d-flex justify-content-center">

      <input type="button" className="btn btn-primary" value="Edit Details" onClick={() => {
        fetch(api+ param.id, {
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