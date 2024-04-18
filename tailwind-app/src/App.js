function App() {
  return (
    <div>
      <header >
        <div>
          <div className="flex justify-between mt-4">
            <div className="flex gap-10 ms-5 items-center">
              <a href="#clarusway">
                <img
                  src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg"
                  alt="logo"
                />
              </a>
            
           

            <div className="flex gap-3 items-center">
              <a className="hover:bg-slate-700 hover:text-white py-1 px-3 rounded-lg" href="#solutions"> Solutions </a>
              <a className="hover:bg-slate-700 hover:text-white py-1 px-3 rounded-lg" href="#industries"> Industries </a>
              <a className="hover:bg-slate-700 hover:text-white py-1 px-3 rounded-lg" href="#fees"> Fees </a>
              <a className="hover:bg-slate-700 hover:text-white py-1 px-3 rounded-lg" href="#About"> About Rareblocks </a>
            </div>
            </div>
            <div className="flex gap-3 items-center me-5">
              <a className="hover:bg-slate-700 hover:text-white py-1 px-3 rounded-lg" href="#login"> Sign in </a>
              <a className=" w-[187px] h-[35px] bg-gray-900 text-white justify-center flex items-center rounded-lg" href="#register" rel="noopener noreferrer" role="button">
                Create free account
              </a>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className="flex justify-evenly items-center mt-10">
          <div className=" w-[35%] flex flex-col">
            <div>
              <h1 className="font-plus-jakarta-sans text-[58px] leading-[66px] text-gray-900 font-extrabold">A special credit card made for Developers.</h1>
              <p className="my-8 font-Inter-sans text-[16px] leading-[26px] text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vehicula massa in enim luctus. Rutrum arcu.
              </p>
              <form action="#" method="POST">
                <div className="flex justify-between border p-2 rounded-xl mt-4 mb-8">
                  <input
                    className="p-3 w-80"
                    type="email"
                    placeholder="Enter email address"
                    required
                  />
                  <div>
                    <button className="p-3 bg-gray-900 text-white rounded-xl" type="submit">Get Free Card</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex justify-between items-center gap-3">
                <p className="font-plus-jakarta-sans font-medium text-[42px] leading-[62px]">2943</p>
                <p className="font-plus-jakarta-sans text-[13px] leading-[20px]"> 
                  Cards
                  <br />
                  Delivered
                </p>
              </div>
              <div>
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
                <p className="font-plus-jakarta-sans font-medium text-[42px] leading-[62px]">$1M+</p>
                <p className="font-plus-jakarta-sans text-[13px] leading-[20px]">
                  Transaction
                  <br />
                  Completed
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-[40%] ">
            <img className="h-[35rem]"
              src="https://d33wubrfki0l68.cloudfront.net/d6f1462500f7670e0db6b76b35054a081679a5a0/0ce15/images/hero/5.1/illustration.png"
              alt="images"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
