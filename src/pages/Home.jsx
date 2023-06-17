import { useRef } from "react";
import { setTrainerNameG } from "../store/slices/trainerName.slice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Home = () => {
  const trainerNameValue = useRef();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setTrainerNameG(trainerNameValue.current.value.trim()));
    navigate("/pokedex");
  };

  return (
    <>
      <header className="w-nine ">
        <img
          src="/src/assets/png/logo-main.png"
          alt="Imagen referencial sobre la aplicación"
        />
      </header>
      <main className="w-nine font-inter">
        <div>
          <h1 className="text-4xl font-bold text-titleRed">
            ¡Hola entrenador!
          </h1>
          <p className="text-2xl font-medium text-paragraph">
            Para poder comenzar, dame tu nombre
          </p>
        </div>
        <form onSubmit={handleSubmit} className="font-roboto">
          <input
            ref={trainerNameValue}
            type="text"
            placeholder="Tu nombre..."
            className="shadow-lg placeholder:font-medium"
          />
          <button className="bg-button text-white">Comenzar</button>
        </form>
      </main>
      <footer className="">
        <div></div>
        <span></span>
        <div></div>
      </footer>
    </>
  );
};

export default Home;
