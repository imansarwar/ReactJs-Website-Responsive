import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    message: ""
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Your data has been submitted. ${data.fullname}`);
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 mx-auto col-10">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  FullName
                </label>
                <input
                  required
                  type="text"
                  class="form-control"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  id="exampleFormControlInput1"
                  placeholder="Enter your phone number"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  required
                  type="email"
                  class="form-control"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>

              <div className="col-12">
                <button className="btn btn-outline-primary " type="submit">
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
