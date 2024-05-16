import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Form = () => {
  const router = useRouter();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Set loading to true when the request starts

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbz0puOgxIILLpsGqR-91q3kfJL_Usq97XQ0fK_4kjnmFyd807FgPZJFV-AB-0Bu2u0c/exec",
        {
          method: "POST",
          body: formData,
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

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleCardClick = (option: string) => {
    setSelectedOption(option);
    const radioButton = document.getElementById(
      `Endroit${option}`
    ) as HTMLInputElement;
    if (radioButton) {
      radioButton.checked = true;
    }
  };

  return (
    <>
      <div className=" bg-black">
        <section className="p-6 text-slate-50">
          <form
            onSubmit={(e) => onSubmit(e)}
            className="form container w-full  p-8  "
          >
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-black">
              <div className="flex justify-center">
                <div className="p-5 max-w-lg   hover:bg-slate-50/5 hover:rounded-xl  flex flex-col items-center">
                  <div
                    className="mt-3"
                    onClick={() => handleCardClick("option1")}
                  >
                    <Image
                      alt="a"
                      src="/image.jpg"
                      width={1000}
                      height={1000}
                      className="shadow rounded-lg overflow-hidden border"
                    />

                    <div className="mt-5 flex justify-center">
                      <input
                        className="relative float-left  h-6 w-6 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-slate-50 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                        type="radio"
                        name="Endroit"
                        id={`Endroitoption1`}
                        value="desert"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="p-5 max-w-lg   hover:bg-slate-50/5 hover:rounded-xl  flex flex-col items-center ">
                  <div
                    className="mt-3"
                    onClick={() => handleCardClick("option2")}
                  >
                    <Image
                      alt="a"
                      src="/image.jpg"
                      width={1000}
                      height={1000}
                      className="shadow rounded-lg overflow-hidden border"
                    />

                    <div className="mt-5 flex justify-center">
                      <input
                        className="relative float-left  h-6 w-6 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-slate-50 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                        type="radio"
                        name="Endroit"
                        id={`Endroitoption2`}
                        value="beach"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center bg-black">
              <div className="flex justify-center">
                <div className="p-5 max-w-lg  hover:bg-slate-50/5 hover:rounded-xl  flex flex-col items-center">
                  <div
                    className="mt-3 "
                    onClick={() => handleCardClick("option3")}
                  >
                    <Image
                      alt="a"
                      src="/image.jpg"
                      width={1000}
                      height={1000}
                      className="shadow rounded-lg overflow-hidden border"
                    />

                    <div className="mt-5 flex justify-center">
                      <input
                        className="relative float-left  h-6 w-6 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-slate-50 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                        type="radio"
                        name="Endroit"
                        id={`Endroitoption3`}
                        value="radioDefault01"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="p-5 max-w-lg  hover:bg-slate-50/5 hover:rounded-xl  flex flex-col items-center ">
                  <div
                    className="mt-3"
                    onClick={() => handleCardClick("option4")}
                  >
                    <Image
                      alt="a"
                      src="/image.jpg"
                      width={1000}
                      height={1000}
                      className="shadow rounded-lg overflow-hidden border"
                    />

                    <div className="mt-5 flex justify-center">
                      <input
                        className="relative float-left  h-6 w-6 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-slate-50 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                        type="radio"
                        name="Endroit"
                        id={`Endroitoption4`}
                        value="radioDefault01"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center bg-black">
              <div className="flex justify-center">
                <div className="p-5 max-w-md lg:max-w-lg  hover:bg-slate-50/5 hover:rounded-xl  flex flex-col items-center">
                  <div
                    className="mt-3"
                    onClick={() => handleCardClick("option5")}
                  >
                    <Image
                      alt="a"
                      src="/image.jpg"
                      width={1000}
                      height={1000}
                      className="shadow rounded-lg overflow-hidden border"
                    />

                    <div className="mt-5 flex justify-center">
                      <input
                        className="relative float-left  h-6 w-6 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-slate-50 checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
                        type="radio"
                        name="Endroit"
                        id={`Endroitoption5`}
                        value="radioDefault02"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <label className="block text-lg mb-1 ml-1">Nom :</label>
              <input
                name="Nom"
                id="Nom"
                type="text"
                placeholder=""
                className="block w-full  p-1 py-2 mb-3 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-amber-400 dark:bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-lg mb-1 ml-1">Prénom :</label>
              <input
                name="Prenom"
                id="Prenom"
                type="text"
                placeholder=""
                className="block w-full p-1 py-2 mb-3 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-amber-400 dark:bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-lg mb-1 ml-1">Téléphone :</label>
              <input
                name="Telephone"
                id="Telephone"
                type="tel"
                placeholder=""
                className="block w-full p-1 py-2 mb-3 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-amber-400 dark:bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-lg mb-1 ml-1">E-mail :</label>
              <input
                name="Email"
                id="Email"
                type="email"
                placeholder=""
                className="block w-full p-1 py-2 mb-3 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-amber-400 dark:bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-lg mb-1 ml-1">Ville :</label>
              <input
                name="Ville"
                id="Ville"
                type="text"
                placeholder=""
                className="block w-full p-1 py-2 mb-10 text-black rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-amber-400 dark:bg-gray-100"
              />
            </div>

            <div>
              <button
                name="Name"
                type="submit"
                className="w-full px-4 py-4 mt-4 hover:text-black font-bold rounded shadow focus:outline-none  bg-amber-400 hover:bg-amber-300 text-gray-50"
              >
                Envoyer
              </button>
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

export default Form;
