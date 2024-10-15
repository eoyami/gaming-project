import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import "../output.css";

export function SideMenu() {
  return (
    <div className="flex flex-col w-24 bg-[#067D71] rounded-lg p-4">
      <div className="flex justify-center align-items py-6">
        <img src="src\assets\icons\dice.png" width={35} />
      </div>
      <div className="flex flex-col h-full space-between">
        <div className="flex flex-col h-full">
          <div className="flex justify-center align-items text-white py-2 my-2 hover:rounded-full hover:bg-[#3DBDA7]">
            <FaHome size={25} />
          </div>
          <div className="flex justify-center align-items text-white p-2 my-2 hover:rounded-full hover:bg-[#3DBDA7]">
            <FaUserFriends size={25} />
          </div>
          <div className="flex justify-center align-items text-white p-2 my-2 hover:rounded-full hover:bg-[#3DBDA7]">
            <AiFillMessage size={25} />
          </div>
          <div className="flex justify-center align-items text-white p-2 my-2 hover:rounded-full hover:bg-[#3DBDA7]">
            <FaShoppingCart size={25} />
          </div>
          <div className="flex justify-center align-items text-white p-2 my-2 hover:rounded-full hover:bg-[#3DBDA7]">
            <FaStar size={25} />
          </div>
        </div>
        <div className="flex">
          <div className="flex justify-center align-items text-white hover:rounded-full hover:bg-[#3DBDA7]">
            <IoIosAddCircle size={50} />
          </div>
        </div>
      </div>
    </div>
  );
}
