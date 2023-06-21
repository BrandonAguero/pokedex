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
          <div className="flex flex-col gap-8 text-center sm:gap-4">
            <h1 className="text-5xl font-bold text-titleRed">Hello trainer!</h1>
            <p className="text-2xl font-medium text-paragraph">
              To get started, give me your name
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4 font-roboto sm:flex-row sm:justify-center sm:gap-0"
          >
            <input
              ref={trainerNameValue}
              type="text"
              placeholder="Your name..."
              className="p-6 text-2xl shadow-lg placeholder:text-2xl placeholder:font-medium sm:w-[35rem]"
            />
            <button className="bg-button p-6 text-2xl text-white">Start</button>
          </form>
        </div>
      </main>
      <footer className="row-start-11 row-end-13 w-full">
        <div className="relative h-sixFive w-full bg-first">
          <span className="absolute bottom-[-2rem] left-[43%] inline-block h-20 w-20 bg-elipsePoke bg-cover bg-center bg-no-repeat sm:bottom-[-3.5rem] sm:left-[48%] sm:h-32 sm:w-32"></span>
        </div>
        <div className="h-threeFive w-full bg-second"></div>
      </footer>
    </>
  );
};

export default Home;
