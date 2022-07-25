import React from "react";
import "./style/style.css";
function Form_date() {
  const[name,setName]=React.useState("")
  const[address,setAddress]=React.useState("")
  const[email,setEmail]=React.useState("")
  const[phoneNumber,setPhoneNumber]=React.useState("")
  const[iq,setIq]=React.useState("")
  const[gender,setGender]=React.useState("")
  const[date,setDate]=React.useState("")
  const[haveTattoos,setHaveTattoos]=React.useState("")
  const[political,setPolitical]=React.useState("")
  const[education ,setEducation ]=React.useState("")
  const[explainYourSelf ,setExplainYourSelf ]=React.useState("")
  const[uploadContact ,setUploadContact ]=React.useState("")
  const[err,setErr]=React.useState([])
  console.log(err)

  

  let ckeckApply=[];
  ckeckApply.push(haveTattoos);
  // console.log(political)
  return (
    <>
      <main className="flex_of_main_tag">
        <body className="flex_of_body_tag">
          <section className="flex_of_section_tag">
            <div className="flex_of_header_date">
              <p className="styel_of_header_article">
                aplication for permission to date my daughter
              </p>
            </div>
            <p className="style_of_text_article">
              <b>Not:</b>Form is to be completed at least 21 days prior to date
            </p>

            <div>
              <form>
                <fieldset className="margin_of_filedset">
                  <legend style={{ fontWeight: "900" }}>
                    Personal Details
                  </legend>
                  <div className="flex_of_form_cloume">
                    <div className="style_of_each_label_and_input_form">
                      <label className="style_of_label_form">Name:</label>
                      <input
                        type="Text"
                        className="style_of_input_form"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(x)=>setName(x.target.value)}
                        
                      ></input>
                    </div>
                    <div className="style_of_each_label_and_input_form">
                      <label className="style_of_label_form">Address:</label>
                      <input
                        type="Text"
                        className="style_of_input_form"
                        placeholder="Enter your address"
                        value={address}
                        onChange={(x)=>setAddress(x.target.value)}
                        
                      ></input>
                    </div>
                    <div className="style_of_each_label_and_input_form">
                      <label className="style_of_label_form">Email:</label>
                      <input
                        // type="Email"
                        className="style_of_input_form"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(x)=>setEmail(x.target.value)}
                        
                      ></input>
                    </div>
                    <div className="style_of_each_label_and_input_form">
                      <label className="style_of_label_form">
                        Phone Number:
                      </label>
                      <input
                        type="Number"
                        className="style_of_input_form"
                        placeholder="Enter your number"
                        value={phoneNumber}
                        onChange={(x)=>setPhoneNumber(x.target.value)}
                        
                      ></input>
                    </div>
                    <div className="style_of_each_label_and_input_form">
                      <label className="style_of_label_form">IQ:</label>
                      <input
                        type={"number"}
                        className="style_of_input_form"
                        placeholder="Enter your IQ"
                        value={iq}
                        onChange={(x)=>setIq(x.target.value)}
                      ></input>
                    </div>
                    <div>
                      <label className="style_of_label_form">Gender:</label>
                      <p>
                        <input
                          type={"radio"}
                          name="gender"
                          value={"male"}
                          onChange={(x)=>setGender(x.target.value)}
                          
                        />
                        Male
                        <br></br>
                        <input type={"radio"} name="gender" value={"female"}  onChange={(x)=>setGender(x.target.value)} />
                        female
                        <br></br>
                        <input type={"radio"} name="gender" value={"other"}   onChange={(x)=>setGender(x.target.value)}/>
                        other
                      </p>
                    </div>
                    <div className="style_of_each_label_and_input_form">
                      <label className="style_of_label_form">
                        Date of Proposed Outing :
                      </label>
                      <input
                        type="date"
                        className="style_of_input_form"
                        placeholder="Enter your number"
                        value={date}
                        onChange={(x)=>setDate(x.target.value)}
                        
                      ></input>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="margin_of_filedset">
                  <p>
                    <b>Check All That Apply</b>
                  </p>
                  <div className="flex_of_form_cloume">
                    <div>
                      <label className="style_of_label_form">
                        <input type={"checkbox"} value={"I have tattoos and/or piercings"} onChange={(x)=>setHaveTattoos({tattoo:x.target.value})}></input> I have tattoos and/or
                        piercings
                      </label>
                    </div>
                    <div>
                      <label className="style_of_label_form">
                        <input type={"checkbox"} value={"I am more than 2 years older than my daughter"} onChange={(x)=>setHaveTattoos({older:x.target.value})}></input> I am more than 2 years
                        older than my daughter
                      </label>
                    </div>
                    <div>
                      <label className="style_of_label_form">
                        <input type={"checkbox"} value={"I own a panel van or V8 ute"} onChange={(x)=>setHaveTattoos({car:x.target.value})}></input> I own a panel van or
                        V8 ute
                      </label>
                    </div>
                    <div>
                      <label className="style_of_label_form">
                        <input type={"checkbox"} value={"I work full-time"} onChange={(x)=>setHaveTattoos({work:x.target.value})}></input> I work full-time
                      </label>
                    </div>
                    <div>
                      <label className="style_of_label_form">
                        <input type={"checkbox"} value={" My parents are rich"} onChange={(x)=>setHaveTattoos({rich:x.target.value})}></input> My parents are rich
                      </label>
                    </div>
                    <div>
                      <label className="style_of_label_form">
                        <input type={"checkbox"} value={"Is the date at a well lit public location"} onChange={(x)=>setHaveTattoos({public:x.target.value})}></input> Is the date at a well
                        lit public location
                      </label>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="margin_of_filedset">
                  <div className="flex_of_select_option_row">
                    <div>
                      <label>
                        Political Persuasion:{" "}
                        <select  onChange={(x)=>setPolitical(x.target.value)}>
                          <option>Left Wing</option>
                          <option>Right Wing</option>
                          <option>Conservative</option>
                          <option>Nazi</option>
                        </select>
                      </label>
                    </div>
                    <div>
                      <label>
                        Education Level Completed::{" "}
                        <select  onChange={(x)=>setEducation(x.target.value)}>
                          <option>University</option>
                          <option>College</option>
                          <option>High School </option>
                          <option>None</option>
                        </select>
                      </label>
                    </div>
                  </div>
                </fieldset>
                {/* easy section */}
                <fieldset className="margin_of_filedset">
                  <legend style={{ fontWeight: "900" }}>Easy Section</legend>
                  <p className="">
                    <b>
                      In 50 words or more explain why you want to date my
                      daughter
                    </b>
                  </p>
                  <textarea
                    placeholder="Enter Text Here"
                    cols={50}
                    rows={5}
                    style={{ resize: "none" }}
                    
                    onChange={(x)=>setExplainYourSelf(x.target.value)}
                  ></textarea>
                  <p className="">
                    <b>Please upload contact details for 2 references</b>
                  </p>
                  <textarea
                    placeholder="Enter Text Here"
                    cols={50}
                    rows={5}
                    style={{ resize: "none" }}
                    
                    onChange={(x)=>setUploadContact(x.target.value)}
                  ></textarea>
                  <p className="">
                    <b>
                    Upload Police Clearance Certificate, Bank Statement and Medical Certifiates here:
                    </b>
                    <input type={'file'} ></input>
                  </p>
                </fieldset>
               
              </form>
              <div className="flex_of_err">
                <h3 style={err.error==true?{color:"green"}:{color:"red"}}>{err.message}</h3>
              </div>
              <div className="flex_of_btn_to_set_center">
                <button className="style_of_btn_servery_form second_style_of_btn_send"
                onClick={()=>{
                  fetch("http://localhost:3001/api/apis/addPerson",{
                    method:"POST",
                    body:JSON.stringify({
                      name:name,
                      address:address,
                      email:email,
                      phoneNumber:phoneNumber,
                      IQ:iq,
                      gender:gender,
                      dateOuting:date,
                      checkApply:[ckeckApply],
                      PoliticalPersuasion:political,
                      EducationLevelCompleted:education,
                      whyYouWantToDateMyDaughter:explainYourSelf,
                      contactDetails:uploadContact,
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                  .then((x) => x.json())
                  .then((x)=>{
                    setErr(x)
                  })
                }}
                > Send Your Application</button>
                </div>
            </div>
          </section>
        </body>
      </main>
    </>
  );
}
export default Form_date;
