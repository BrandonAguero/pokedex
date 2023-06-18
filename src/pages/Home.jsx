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
      <header className="row-start-2 row-end-4 flex w-full items-center justify-center">
        <figure className="w-nine max-w-[54rem]">
          <img
            src="/png/logo-main.png"
            alt="Imagen referencial sobre la aplicación"
            className="w-full"
          />
        </figure>
      </header>
      <main className="row-start-4 row-end-11 flex w-full items-center justify-center font-inter">
        <div className="flex w-nine flex-col gap-24">
          <div className="sm:gap-4 flex flex-col gap-8 text-center">
            <h1 className="text-5xl font-bold text-titleRed">
              ¡Hola entrenador!
            </h1>
            <p className="text-2xl font-medium text-paragraph">
              Para poder comenzar, dame tu nombre
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="sm:flex-row sm:justify-center sm:gap-0 flex flex-col items-center gap-4 font-roboto"
          >
            <input
              ref={trainerNameValue}
              type="text"
              placeholder="Tu nombre..."
              className="sm:w-[35rem] p-6 text-2xl shadow-lg placeholder:text-2xl placeholder:font-medium"
            />
            <button className="bg-button p-6 text-2xl text-white">
              Comenzar
            </button>
          </form>
        </div>
      </main>
      <footer className="row-start-11 row-end-13 w-full">
        <div className="relative h-sixFive w-full bg-first">
          <span className="sm:bottom-[-3.5rem] sm:left-[48%] sm:h-32 sm:w-32 absolute bottom-[-2rem] left-[43%] inline-block h-20 w-20 bg-elipsePoke bg-cover bg-center bg-no-repeat"></span>
        </div>
        <div className="h-threeFive w-full bg-second"></div>
      </footer>
    </>
  );
};

export default Home;
