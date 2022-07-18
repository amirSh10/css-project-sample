import "./style/style.css";
function Form_date() {
  return (
    <>
      <main className="flex_of_main_tag" >
        <body className="flex_of_body_tag">
          <section className="flex_of_section_tag">
            <div className="aa">
            <p className="styel_of_header_article">
              aplication for permission to date my daughter
            </p>
            </div>
            <p className="style_of_text_article">
              <b>Not:</b>Form is to be completed at least 21 days prior to date
            </p>

            <fieldset className="margin_of_filedset">
            <legend style={{fontWeight:"900"}}>Personal Details</legend>
            <div>
              <form>
                <label>Name:</label>
                <input type={Text}></input>
              </form>
            </div>
            </fieldset>
          </section>
        </body>
      </main>
    </>
  );
}
export default Form_date;
