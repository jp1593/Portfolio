import OWN from "../assets/OWN.jpeg";
import "./Owner.css";
import Socials from "../components/Social"; 

export default function Owner() {
  return (
    <section class="p-20">
      <div class="container mx-auto">
        <div class="flex justify-center">
          <div class="flex flex-col gap-5 text-center">
            <img class="ownimage mx-auto" src={OWN} />
            <div class="flex flex-col gap-3">
              <h1 class="text-white text-5xl">Juan Pablo Estrada Lucero</h1>
              <p class="text-gray-400 text-2xl">
                Full Stack Developer / Backend developer (Python, MySql, Java
                Script, MySql)
              </p>
              <Socials/>
              <p class="text-white text-xl mt-10">asdfasfasfasdfasdf</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
