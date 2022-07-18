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
              </form>
            </div>
          </section>
        </body>
      </main>
    </>
  );
}
export default Form_date;
