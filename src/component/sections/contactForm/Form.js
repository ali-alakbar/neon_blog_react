import React from "react";

const Form = (props) => {
  return (
    <section className="contact-section">
      <div
        style={{
          margin: props.pageName === "signUp" ? "6rem 0" : "",
        }}
        className="container"
      >
        <form action="" className="myForm">
          <input
            className="input input-user"
            type="text"
            placeholder="Your Name ..."
            required
          />
          <input
            className="input input-email"
            type="email"
            placeholder="Your Email ..."
            required
          />
          <textarea
            className="input myTextArea"
            type="text"
            placeholder="Your Message ..."
            required
          />
          <button>Send</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
