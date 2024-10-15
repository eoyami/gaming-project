import { FaFire } from "react-icons/fa6";
import { FaSteam } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoBagHandle } from "react-icons/io5";
import { SiEpicgames } from "react-icons/si";
import { FaRegStopCircle } from "react-icons/fa";

export function LeftSide() {
  return (
    <div className="flex flex-col w-[50%] pr-4">
      <div className="flex max-h-[285px]">
        <div className="flex">
          <div className="flex">
            <div className="flex rounded-lg w-full bg-[rgb(6,125,113)] bg-[url('/src/assets/ezreal_background.png')] bg-cover bg-no-repeat">
              <div className="flex flex-col p-4">
                <div className="flex items-center">
                  <div className="flex items-center px-2 py-1 text-white bg-[#3DBDA7] rounded-full">
                    <FaFire />
                    <h6>Popular</h6>
                  </div>
                  <div className="flex items-center justify-center space-x-2 mx-2 text-white">
                    <FaSteam size={20} />
                    <SiEpicgames size={20} />
                  </div>
                </div>

                <div className="text-white w-[250px] my-2">
                  <h3 className="text-2xl font-bold">League of Legends</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna.
                  </p>
                </div>
              </div>
              <img
                src="src/assets/ezreal.png"
                alt=""
                className="left-0 relative"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-8 gap-4">
        <div
          id="card_one"
          className="flex space-between rounded-lg bg-[url('/src/assets/card_two.png')] min-h-[300px] min-w-[300px] bg-contain -rotate-12 p-4 hover:rotate-0 hover:ease-in duration-300 z-10"
        >
          <div id="play" className="flex text-white max-w-12">
            <div className="bg-[#3DBDA7] rounded-full p-2 max-h-[40px]">
              <FaPlay size={25} className="-rotate-10" />
            </div>
          </div>
          <div id="cart" className="flex max-w-12 ">
            <div className="text-[#3DBDA7] rounded-full p-2 max-h-[40px] bg-white">
              <IoBagHandle size={25} className="-rotate-10" />
            </div>
          </div>
        </div>
        <div
          id="card_two"
          className="flex space-between rounded-lg bg-[url('/src/assets/card_horizon.jpg')] min-h-[300px] min-w-[300px] bg-cover p-4 grayscale hover:grayscale-0 duration-300 bg-center"
        >
          <div id="play" className="flex text-white max-w-12 ">
            <div className="bg-[#3DBDA7] rounded-full p-2 max-h-[40px]">
              <FaPlay size={25} className="-rotate-10" />
            </div>
          </div>
          <div id="cart" className="flex max-w-12 ">
            <div className="text-[#3DBDA7] rounded-full p-2 max-h-[40px] bg-white">
              <IoBagHandle size={25} className="-rotate-10" />
            </div>
          </div>
        </div>
        <div
          id="card_three"
          className="flex space-between rounded-lg bg-[url('/src/assets/card_three.png')] min-h-[300px] min-w-[300px] bg-cover p-4 grayscale hover:grayscale-0 duration-300 blur-sm"
        >
          <div id="play" className="flex text-white max-w-12 ">
            <div className="bg-[#3DBDA7] rounded-full p-2 max-h-[40px]">
              <FaPlay size={25} className="-rotate-10" />
            </div>
          </div>
          <div id="cart" className="flex max-w-12 ">
            <div className="text-[#3DBDA7] rounded-full p-2 max-h-[40px] bg-white">
              <IoBagHandle size={25} className="-rotate-10" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div id="words" className="flex space-between">
          <div>
            <h3 className="text-white font-bold">Last Downloads</h3>
          </div>
          <div>
            <h4 className="text-white font-bold">See More</h4>
          </div>
        </div>
        <div className="flex">
          <div className="flex p-4 items-center bg-[#067D71] rounded-lg w-full gap-4">
            <div className="text-white">
              <img
                src="src/assets/warzone.png"
                alt="Robot Poster"
                className="rounded bg-black"
                width={200}
              />
            </div>
            <div className="flex w-full">
              <div className="flex flex-col mx-2">
                <div className="text-white">WARZONE</div>
                <div className="text-white">Action Simulator</div>
              </div>
            </div>
            <div className="text-white ml-72">
              <FaPlay size={25} />
            </div>

            <div className="text-white">
              <FaRegStopCircle size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
