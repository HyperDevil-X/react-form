import React from "react";
import { useState } from "react";

const App = () =>
{
            const [dataForm , updatedataForm] = useState();
            const changeHandle = (t) =>
            {
              updatedataForm ({
                  ...dataForm,
                  [t.target.name]:t.target.value.trim()
              });
            };

            const submitHandle = (t) =>
            {
              t.preveDefault()
              console.log(dataForm);
            };
        return (
      
        <div className="container">
          <div className="box">
                <h1>Student Registration Form</h1>
              <form>
                  <label>Student Name:</label>
                    <input type = "text" name="StudentName" placeholder="Enter your name" autoFocus spellCheck="true" required onChange={changeHandle} style={{marginLeft:'4%'}}/> <br/><br/>
                  <label>Gender:</label><br/>
                  <label>Male:</label>
                    <input type = "radio" name="Gender" value="Male" required onChange={changeHandle} style={{marginLeft:'12%'}}/> <br/>
                  <label>Female:</label>
                    <input type = "radio" name="Gender" value="Female" required onChange={changeHandle} style={{marginLeft:'9%'}}/> <br/>
                  <label>Others:</label>
                    <input type = "radio" name="Gender" value="Others" required onChange={changeHandle} style={{marginLeft:'9.4%'}}/> <br/>
                  <label>Phone Number:</label>
                    <input type = "number" name="PhoneNo" placeholder="Enter your number" spellCheck="true" required onChange={changeHandle} style={{marginLeft:'3%'}} /><br/>
                  <label>Email:</label>
                    <input type = "email" name="Email" placeholder="Enter your email" spellCheck="true" required onChange={changeHandle} style={{marginLeft:'15.7%'}} /><br/>
                  <label>Username:</label>
                  <input type = "text" name="Username" placeholder="Enter your username" spellCheck="true" required onChange={changeHandle} style={{marginLeft:'9.8%'}} /><br/>
                  <label>Password:</label>
                    <input type = "text" name="Password" placeholder="Enter your password" spellCheck="true" required onChange={changeHandle} style={{marginLeft:'10.5%'}}/><br/>
                  <label>Department:</label>
                    <select name="Dept" onChange={changeHandle} required style={{marginLeft:'7%'}}>
                      <option value= "" disabled selected>Select your department...</option>
                      <option value="CSE">CSE</option>
                      <option value="IT">IT</option>
                      <option value="CE">CE</option>
                      <option value="ECE">ECE</option>
                      <option value="ME">ME</option>
                      <option value="AE">AE</option>
                  </select><br/>
                  <label>Address:</label>
                    <textarea name="Address" placeholder="Enter your address" spellCheck="true" required onChange={changeHandle} style={{marginLeft:'13%'}}></textarea><br/>
                    <div className="json" alt = "json data">{JSON.stringify(dataForm)}</div>
                  <input type = "submit" name="submit" id="submet" value="Submit" onClick={submitHandle}/>
              </form>
            </div>
        </div>
      
        )
}
export default App;