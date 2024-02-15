import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import Modal from "../components/UI/Modal";

const Signup = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setUserInfo((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userInfo.email,
        userInfo.password
      );

      const user = userCredential.user;
      console.log(user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal onClose={handleCancel}>
      <div>
        <h1 className="text-white text-center">Sign Up</h1>
        <form className="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">
              Email
            </label>
            <input
              className="form-control focus-ring focus-ring-light border border-color-white"
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Email address"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">
              Password
            </label>
            <input
              className="form-control focus-ring focus-ring-light border border-color-white"
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
          </div>
          <button className="btn btn-outline-light mb-2" type="submit">
            Sign up
          </button>
        </form>
        <p className="text-white m-0">
          Already have an account?{" "}
          <NavLink className="button" to="/login">
            Log in
          </NavLink>
        </p>
      </div>
    </Modal>
  );
};

export default Signup;
