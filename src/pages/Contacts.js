import React from "react";

function Contacts() {
  const sendEmail = () => {
    const recipient = "tatiana_felisberto_@hotmail.com";
    const subject = "Message from Contact Form";
    const name = document.getElementById("name-input").value;
    const email = document.getElementById("email-input").value;
    const message = document.getElementById("message-input").value;
    const body = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="">
        <h2 className="skills">Contact me</h2>
        <div className="container">
          <div class="input-group pt-3">
            <div class="input-group-prepend"></div>
            <input
              type="text"
              class="form-control"
              placeholder="Name"
              aria-label="Name"
              aria-describedby="basic-addon1"
              id="name-input"
            />
          </div>
          <div class="input-group pt-3">
            <div class="input-group-prepend"></div>
            <input
              type="text"
              class="form-control"
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
              id="email-input"
            />
          </div>
          <div class="input-group pt-3">
            <div class="input-group-prepend"></div>
            <input
              type="text"
              class="form-control"
              placeholder="Message"
              aria-label="Message"
              aria-describedby="basic-addon1"
              style={{ height: 150 }}
              id="message-input"
            />
          </div>
          <button className="btn contacts-button" onClick={sendEmail}>
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Contacts;
