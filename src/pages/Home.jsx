import { useRef } from "react";
import { setTrainerNameG } from "../store/slices/trainerName.slice.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Home = () => {
  const trainerNameValue = useRef();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const trainerName = useSelector((states) => states);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(trainerNameValue.current.value);
    dispatch(setTrainerNameG(trainerNameValue.current.value.trim()));
    navigate("/pokedex");
  };

  console.log(trainerName);

  return (
    <div>
      <h1>Pokedex</h1>
      <h2>Hi trainer!</h2>
      <p>To start in this application, please, give me your trainer name.</p>
      <form onSubmit={handleSubmit} action="#">
        <input ref={trainerNameValue} type="text" />
        <button>Catch them all</button>
      </form>
    </div>
  );
};

export default Home;
