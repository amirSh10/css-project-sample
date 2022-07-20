import "./style/style.css";
function Form_date() {
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
                      ></input>
                    </div>
                    <div className="style_of_each_label_and_input_form">
                      <label className="style_of_label_form">Address:</label>
                      <input
                        type="Text"
                        className="style_of_input_form"
                        placeholder="Enter your address"
                      ></input>
                    </div>
                    <div className="style_of_each_label_and_input_form">
                      <label className="style_of_label_form">Email:</label>
                      <input
                        type="Email"
                        className="style_of_input_form"
                        placeholder="Enter your email"
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
                      ></input>
                    </div>
                    <div className="style_of_each_label_and_input_form">
                      <label className="style_of_label_form">IQ:</label>
                      <input
                        type={"number"}
                        className="style_of_input_form"
                        placeholder="Enter your IQ"
                      ></input>
                    </div>
                    <div>
                      <label className="style_of_label_form">Gender:</label>
                      <p>
                        <input
                          type={"radio"}
                          name="gender"
                          value={"male"}
                          checked
                        />
                        Male
                        <br></br>
                        <input type={"radio"} name="gender" value={"female"} />
                        female
                        <br></br>
                        <input type={"radio"} name="gender" value={"other"} />
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
                        <input type={"checkbox"}></input> I have tattoos and/or
                        piercings
                      </label>
                    </div>
                    <div>
                      <label className="style_of_label_form">
                        <input type={"checkbox"}></input> I am more than 2 years
                        older than my daughter
                      </label>
                    </div>
                    <div>
                      <label className="style_of_label_form">
                        <input type={"checkbox"}></input> I own a panel van or
                        V8 ute
                      </label>
                    </div>
                    <div>
                      <label className="style_of_label_form">
                        <input type={"checkbox"}></input> I work full-time
                      </label>
                    </div>
                    <div>
                      <label className="style_of_label_form">
                        <input type={"checkbox"}></input> My parents are rich
                      </label>
                    </div>
                    <div>
                      <label className="style_of_label_form">
                        <input type={"checkbox"}></input> Is the date at a well
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
                        <select>
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
                        <select>
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
                  ></textarea>
                  <p className="">
                    <b>Please upload contact details for 2 references</b>
                  </p>
                  <textarea
                    placeholder="Enter Text Here"
                    cols={50}
                    rows={5}
                    style={{ resize: "none" }}
                  ></textarea>
                  <p className="">
                    <b>
                    Upload Police Clearance Certificate, Bank Statement and Medical Certifiates here:
                    </b>
                    <button className="style_of_btn_servery_form">Attach Files</button>
                  </p>
                </fieldset>
                <div className="flex_of_btn_to_set_center">
                <button className="style_of_btn_servery_form second_style_of_btn_send"> Send Your Application</button>
                </div>
              </form>
            </div>
          </section>
        </body>
      </main>
    </>
  );
}
export default Form_date;
