import React, { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className="flex justify-between items-center mt-5 px-10 md:px-5">
        <div className="ms-6 max-md:ms-0">
          <a href="#clarusway">
            <img
              src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg"
              alt="logo"
            />
          </a>
        </div>
        <div className="flex justify-between w-10/12 me-6">
          <div className="hidden md:flex gap-3 items-center">
            <a
              className="hover:bg-slate-700 hover:text-white duration-500 py-1 px-3 rounded-lg"
              href="#solutions"
            >
              Solutions
            </a>
            <a
              className="hover:bg-slate-700 hover:text-white duration-500 py-1 px-3 rounded-lg"
              href="#industries"
            >
              Industries
            </a>
            <a
              className="hover:bg-slate-700 hover:text-white duration-500 py-1 px-3 rounded-lg"
              href="#fees"
            >
              Fees
            </a>
            <a
              className="hover:bg-slate-700 hover:text-white duration-500 py-1 px-3 rounded-lg"
              href="#About"
            >
              About
            </a>
          </div>
          <div className="hidden md:flex  gap-3 items-center">
            <a
              className="hover:bg-slate-700 duration-500 hover:text-white py-1 px-3 rounded-lg"
              href="#login"
            >
              Sign in
            </a>
            <a
              className="w-[187px] h-[35px] bg-gray-900 text-white justify-center flex items-center rounded-lg"
              href="#register"
              rel="noopener noreferrer"
              role="button"
            >
              Create free account
            </a>
          </div>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <i class="fa-solid fa-xmark"></i> : <i class="fa-solid fa-bars"></i>}
          
        </button>
      </header>
      <div
        className={`flex flex-col items-center mt-4 ${
          isMenuOpen ? "block" : "hidden"
        } md:hidden`}
      >
        <a
          className="hover:bg-slate-700 hover:text-white py-1 px-3 duration-500 rounded-lg"
          href="#solutions"
        >
          Solutions
        </a>
        <a
          className="hover:bg-slate-700 hover:text-white py-1 px-3 duration-500 rounded-lg"
          href="#industries"
        >
          Industries
        </a>
        <a
          className="hover:bg-slate-700 hover:text-white py-1 px-3 duration-500 rounded-lg"
          href="#fees"
        >
          Fees
        </a>
        <a
          className="hover:bg-slate-700 hover:text-white py-1 px-3 duration-500 rounded-lg"
          href="#About"
        >
          About Rareblocks
        </a>
        <a
          className="hover:bg-slate-700 hover:text-white py-1 px-3 duration-500 rounded-lg"
          href="#login"
        >
          Sign in
        </a>
        <a
          className="w-[187px] h-[35px] bg-gray-900 text-white justify-center flex items-center rounded-lg"
          href="#register"
          rel="noopener noreferrer"
          role="button"
        >
          Create free account
        </a>
      </div>
      <section>
        <div className="flex justify-evenly items-center mt-10 max-md:flex-col">
          <div className=" w-[481px] flex flex-col max-md:w-80">
            <div>
              <h1 className="font-plus-jakarta-sans text-[58px] leading-[66px] text-gray-900 font-extrabold max-md:text-center max-md:text-[40px] max-md:leading-[46px]">
                A special credit card made for Developers.
              </h1>
              <p className="my-6 font-Inter-sans text-[16px] leading-[26px] text-gray-600 max-md:text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vehicula massa in enim luctus. Rutrum arcu.
              </p>
              <form action="#" method="POST">
                <div className="flex justify-between border p-2 rounded-xl mb-5 max-md:flex-col max-md:border-0  max-md:bg-gradient-to-r from-blue-200 via-green-100 to-purple-100">
                  <input
                    className="p-3 w-72 max-md:border max-md:text-center max-md:m-auto max-md:rounded-lg"
                    type="email"
                    placeholder="Enter email address"
                    required
                  />
                  <div className="max-md:m-auto max-md:mt-4">
                    <button
                      className="p-3 bg-gray-900 text-white rounded-xl max-md:w-48 "
                      type="submit"
                    >
                      Get Free Card
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex justify-between items-center gap-3">
                <p className="font-plus-jakarta-sans font-medium text-[42px] leading-[62px] max-md:text-[28px]">
                  2943
                </p>
                <p className="font-plus-jakarta-sans text-[13px] leading-[20px]">
                  Cards
                  <br />
                  Delivered
                </p>
              </div>
              <div className=" max-md:invisible">
                <svg
                  className="text-gray-300"
                  width={16}
                  height={39}
                  viewBox="0 0 16 39"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0.72265" y1="10.584" x2="15.7226" y2="0.583975" />
                  <line x1="0.72265" y1="17.584" x2="15.7226" y2="7.58398" />
                  <line x1="0.72265" y1="24.584" x2="15.7226" y2="14.584" />
                  <line x1="0.72265" y1="31.584" x2="15.7226" y2="21.584" />
                  <line x1="0.72265" y1="38.584" x2="15.7226" y2="28.584" />
                </svg>
              </div>
              <div className="flex justify-between items-center gap-3">
                <p className="font-plus-jakarta-sans font-medium text-[42px] leading-[62px] max-md:text-[28px]">
                  $1M+
                </p>
                <p className="font-plus-jakarta-sans text-[13px] leading-[20px]">
                  Transaction
                  <br />
                  Completed
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-[554px] ">
            <img
              className="h-[38rem] max-md:hidden"
              src="https://d33wubrfki0l68.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png"
              alt="images"
            />
            <img
              className=" hidden max-md:block max-md:m-auto"
              src="./image.png"
              alt="image"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
