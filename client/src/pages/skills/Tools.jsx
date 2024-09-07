import React from "react";
import Card from "../../components/cards/Card";
import Cards from "../../components/cards/Cards";
import vscode from "../../assets/vscode.png";
import eclipse from "../../assets/eclipse.png";
import pyc from "../../assets/pyc.png";
import jptr from "../../assets/jptr.png";
import rplit from "../../assets/rplit.png";
import pm from "../../assets/pm.png";
import git from "../../assets/git.png";

function Tools() {
  return (
    <>
      <div
        className="bg-cover bg-center text-center text-white py-10 md:pb-36 lg:pb-36 bg-black"
        id="skills"
      >
        <div className="relative mx-auto px-8 md:px-16 lg:px-24">
          <h2 className=" text-xl sm:text-2xl md:text-4xl -mt-6 md:mt-0 font-bold text-center mb-10 text-transparent bg-clip-text text-white">
            Essential Tools
          </h2>
          {/* About section */}
          <div className=" absolute inset-x-0 top-[-18px] md:top-[-0.5px] flex justify-center ">
            <h1 className="mt-7 md:mt-0 text-[12vw] md:text-[8vw] sm:text-[6vw] text-white/10 font-extrabold text-center">
              Tools
            </h1>
          </div>
          <br></br>

          <div className="grid mb-6 -mt-4 md:mt-10 grid-cols-3 md:grid-cols-3 lg:grid-cols-7 gap-x-8 gap-y-1">
            <Cards image={vscode} name="VS Code" />
            <Cards image={eclipse} name="Eclipse" />
            <Cards image={git} name="Git" />
            <Cards image={pyc} name="Python" />
            <Cards image={jptr} name="Jupyter" />
            <Cards image={rplit} name="Replit" />
            <Cards image={pm} name="Postman" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tools;
