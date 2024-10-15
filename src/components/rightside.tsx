import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoBagHandle } from "react-icons/io5";
export function RightSide() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col pb-4 space-y-4 w-full space-between">
        <div className="flex">
          <div className="flex p-2 items-center bg-[#067D71] rounded-lg w-full h-[70px]">
            <div className="text-white">
              <img
                src="src/assets/robot_poster.png"
                alt="Robot Poster"
                className="rounded"
                width={100}
              />
            </div>
            <div className="flex w-full">
              <div className="flex flex-col mx-2">
                <div className="text-white">LEAP</div>
                <div className="text-white">Xbox One, PS5 & PC</div>
              </div>
            </div>
            <div className="text-white ml-72">
              <AiOutlineLoading3Quarters size={25} />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex p-2 items-center bg-[#067D71] rounded-lg w-full h-[70px]">
            <div className="text-white">
              <img
                src="src/assets/space_poster.png"
                alt="Robot Poster"
                className="rounded"
                width={100}
              />
            </div>
            <div className="flex w-full">
              <div className="flex flex-col mx-2">
                <div className="text-white">Space Mariner</div>
                <div className="text-white">Xbox One, PS5 & PC</div>
              </div>
            </div>
            <div className="text-white ml-72">
              <AiOutlineLoading3Quarters size={25} />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex p-2 items-center bg-[#067D71] rounded-lg w-full h-[70px]">
            <div className="text-white">
              <img
                src="src/assets/red_poster.png"
                alt="Robot Poster"
                className="rounded"
                width={100}
              />
            </div>
            <div className="flex w-full">
              <div className="flex flex-col mx-2">
                <div className="text-white">Read Dead Redemption 2</div>
                <div className="text-white">Xbox One, PS5 & PC</div>
              </div>
            </div>
            <div className="text-white ml-72">
              <AiOutlineLoading3Quarters size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-[#067D71] px-4 z-10 w-full rounded-lg">
        <div className="flex flex-col w-[50%]">
          <div id="info" className="py-4">
            <div id="top-weekend">
              <h3 className="text-white font-bold text-3xl">Top Weekend</h3>
            </div>
            <div id="title">
              <h4 className="text-white font-bold text-2xl">Kratos</h4>
            </div>
            <div id="description" className="my-2">
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          <div id="sale" className="my-2">
            <div id="price" className="my-2">
              <h2 className="text-white text-xl font-bold">Price: $30</h2>
            </div>
            <div id="button" className="flex">
              <div className="rounded-lg bg-white p-2 flex items-center gap-2 text-[#067D71] hover:cursor-pointer">
                <IoBagHandle size={25} />
                <p className="text-[#067D71] text-lg">Add to Cart</p>
              </div>
            </div>
          </div>
          <div id="stats" className="flex items-center justify-center">
            <img src="/src/assets/stats.png" alt="" />
          </div>
        </div>
        <div id="kratos">
          <div id="cart_skin">
            <img src="/src/assets/kratos.png" width={300} />
          </div>
        </div>
      </div>
    </div>
  );
}
