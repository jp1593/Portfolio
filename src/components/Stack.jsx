import "./Stack.css";
import HTML from "../assets/html-1.svg";
import CSS from "../assets/css-3.svg";
import React from "../assets/React-Logo.svg";
import Python from "../assets/python-5.svg";
import JS from "../assets/logo-javascript.svg";
import MYSQL from "../assets/mysql-ar21.svg";
import Node from "../assets/nodejs-icon.svg";
import git from "../assets/git-icon-logo-svgrepo-com.svg";
import TailWind from "../assets/tailwind-svgrepo-com.svg";
import Svelte from "../assets/svelte-1.svg";

export default function Stack() {
  return (
    <div className="flex logos-slide overflow-hidden mt-10">
      <img className="logos" src={HTML} />
      <img className="logos" src={CSS} />
      <img className="logos" src={React} />
      <img className="logos" src={Svelte} />
      <img className="logos" src={JS} />
      <img className="logos" src={TailWind} />
      <img className="logos" src={Python} />
      <img className="logos" src={MYSQL} />
      <img className="logos" src={Node} />
      <img className="logos" src={git} />
      <img className="logos" src={HTML} />
      <img className="logos" src={CSS} />
      <img className="logos" src={React} />
      <img className="logos" src={Svelte} />
      <img className="logos" src={JS} />
      <img className="logos" src={TailWind} />
      <img className="logos" src={Python} />
      <img className="logos" src={MYSQL} />
      <img className="logos" src={Node} />
      <img className="logos" src={git} />
    </div>
  );
}
