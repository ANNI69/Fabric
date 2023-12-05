import React from "react";
import "./Reg.css";
const Register = () => {
  

  return (
    <>
      <body id="signup">
        <main class="container">
          <div class="back"></div>
          <div class="brand">
            <div class="logo">
              <img
                height="30"
                src="https://i.ibb.co/k8q15Ts/1700599791369.png"
                alt="Fabric"
              />
            </div>
          </div>
          <div class="formWrapper">
            <div class="form">
              <h2>Register Now</h2>
              <form id="form" method="get" action="#">
                <div class="inputWrapper">
                  <input type="text" name="first" id="first" required />
                  <label for="first">First Name</label>
                </div>
                <div class="inputWrapper">
                  <input type="text" name="last" id="last" required />
                  <label for="last">Last Name</label>
                </div>
                <div class="inputWrapper">
                  <input type="email" name="email" id="email" required />
                  <label for="email">Email</label>
                </div>
                <div class="inputWrapper">
                  <input type="tel" name="phone" id="phone" required />
                  <label for="phone">Phone Number</label>
                </div>
                <div class="inputWrapper">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                  />
                  <label for="password">Password</label>
                </div>
                <div class="inputWrapper">
                  <input
                    type="password"
                    name="c_password"
                    id="c_password"
                    required
                  />
                  <label for="c_password">Confirm Password</label>
                </div>
              </form>
              <input
                form="form"
                type="submit"
                name="register"
                id="register"
                value="REGISTER"
              />
              <span id="login">
                Already a member?{" "}
                <a href="#" title="Login">
                  Log in!
                </a>
              </span>
            </div>
          </div>
        </main>
      </body>
    </>
  );
};

export default Register;
