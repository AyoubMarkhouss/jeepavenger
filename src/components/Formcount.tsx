import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Formulaire = () => {
  const router = useRouter();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Set loading to true when the request starts

    try {
      const formData = new FormData(event.currentTarget);
      console.log(event.currentTarget);
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzi7hIcipwyC_9PthbCcAItC9yQsJo0aOu1GHSYluSB8PI-mmlDX0l3dl0QANWd5QI0/exec",
        {
          method: "POST",
          body: formData,
          cache: "no-cache",
        }
      );

      // Handle response if necessary
      const data = await response.json();
    } catch (error) {
      // Handle error if necessary
      console.error(error);
    } finally {
      toast.success("Envoyé avec succès !");
      setTimeout(() => {
        router.refresh();
      }, 3000);
    }
  }

  return (
    <>
      <div className=" bg-black">
        <section className="p-6 text-slate-50">
          <form onSubmit={(t) => onSubmit(t)} className="form w-full  p-8  ">
            <div className="lg:px-80">
              <div className="">
                <label className="block text-lg mb-1 ml-1">Nom :</label>
                <input
                  name="Nom"
                  id="Nom"
                  type="text"
                  placeholder=""
                  className="block w-full  p-1 py-2 mb-3 text-slate-50 rounded focus:outline-none  focus:ring-1 backdrop-blur-sm  bg-gray-400/10 border border-slate-100/20"
                />
              </div>
              <div>
                <label className="block text-lg mb-1 ml-1">Prénom :</label>
                <input
                  name="Prenom"
                  id="Prenom"
                  type="text"
                  placeholder=""
                  className="block w-full  p-1 py-2 mb-3 text-slate-50 rounded focus:outline-none  focus:ring-1 backdrop-blur-sm  bg-gray-400/10 border border-slate-100/20"
                />
              </div>
              <div>
                <label className="block text-lg mb-1 ml-1">Téléphone :</label>
                <input
                  name="Telephone"
                  id="Telephone"
                  type="tel"
                  placeholder=""
                  className="block w-full  p-1 py-2 mb-3 text-slate-50 rounded focus:outline-none  focus:ring-1 backdrop-blur-sm  bg-gray-400/10 border border-slate-100/20"
                />
              </div>
              <div>
                <label className="block text-lg mb-1 ml-1">E-mail :</label>
                <input
                  name="Email"
                  id="Email"
                  type="email"
                  placeholder=""
                  className="block w-full  p-1 py-2 mb-3 text-slate-50 rounded focus:outline-none  focus:ring-1 backdrop-blur-sm  bg-gray-400/10 border border-slate-100/20"
                />
              </div>
              <div>
                <label className="block text-lg mb-1 ml-1">Ville :</label>
                <input
                  name="Ville"
                  id="Ville"
                  type="text"
                  placeholder=""
                  className="block w-full  p-1 py-2 mb-3 text-slate-50 rounded focus:outline-none  focus:ring-1 backdrop-blur-sm  bg-gray-400/10 border border-slate-100/20"
                />
              </div>
              {/* <div>
                <label className="block text-lg mb-1 ml-1">
                  Compte à rebours :
                </label>
                <input
                  name="Compte_a_rebours"
                  id="Compte_a_rebours"
                  type="text"
                  placeholder=""
                  className="block w-full  p-1 py-2 mb-3 text-slate-50 rounded focus:outline-none  focus:ring-1 backdrop-blur-sm  bg-gray-400/10 border border-slate-100/20"
                />
                <input
                  name="Type"
                  id="Type"
                  type="text"
                  value="car"
                  placeholder=""
                  className="hidden w-full p-1 py-2 mb-3 text-slate-50 rounded focus:outline-none  focus:ring-1 backdrop-blur-sm  bg-gray-400/10 border border-slate-100/20"
                />
              </div> */}
              <div>
                <button
                  name="button"
                  type="submit"
                  className="w-full px-4 py-4 mt-10 hover:text-black font-bold rounded shadow focus:outline-none  backdrop-blur-sm  bg-yellow-500/80 border border-slate-100/20 hover:bg-amber-500/60 text-gray-50 "
                >
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </section>
      </div>

      <ToastContainer
        position="bottom-right"
        hideProgressBar={true}
        theme="light"
        autoClose={2000}
      />
    </>
  );
};

export default Formulaire;
