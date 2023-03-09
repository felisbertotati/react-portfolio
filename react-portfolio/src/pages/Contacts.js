import React from "react";

function Contacts() {
  return (
    <>
      <div className="wrapper">
        <h2 className="skills">Contact me</h2>
        <div className="container">
          <div class="input-group pt-3">
            <div class="input-group-prepend"></div>
            <input
              type="text"
              class="form-control"
              placeholder="Ricky"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group pt-3">
            <div class="input-group-prepend"></div>
            <input
              type="text"
              class="form-control"
              placeholder="Ricky@gmail.com"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <div class="input-group pt-3">
            <div class="input-group-prepend"></div>
            <input
              type="text"
              class="form-control"
              placeholder="Message"
              aria-label="Username"
              aria-describedby="basic-addon1"
              style={{ height: 150 }}
            />
          </div>
          <a href="/" className="btn contacts-button">
            Send
          </a>
        </div>
      </div>
    </>
  );
}

export default Contacts;
