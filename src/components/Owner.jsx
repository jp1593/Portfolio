import OWN from "../assets/OWN.jpeg";
import "./Owner.css";
import Socials from "../components/Social";

export default function Owner() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="flex flex-col text-center">
            <img className="ownimage mx-auto" src={OWN} alt="Owner" />
            <div className="flex flex-col gap-3">
              <h1 className="text-white text-5xl animated-h1">
                Juan Pablo Estrada Lucero
              </h1>
              <p className="rolcolor text-2xl mb-2">
                Full Stack Developer / Backend Developer
              </p>
              <span clas> Open to work</span>
              <p className="text-6xl mb-5">🇬🇹</p>
              <Socials />
              <p className="text-white text-xl mt-10">
                Transforming ideas into realities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
