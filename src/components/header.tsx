import { IoSearch } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoBagHandle } from "react-icons/io5";

export function Header() {
  return (
    <div className="flex space-between">
      <div className="flex items-center justify-center ml-4">
        <h1 className="text-2xl text-white font-bold">Hi, </h1>{" "}
        <h1 className="text-2xl text-[#067D71] font-bold"> Raphael!</h1>
      </div>
      <div className="flex items-center justify-center text-white w-[600px] bg-[#067D71] rounded-full h-[40px]">
        <IoSearch size={25} className="mr-2" />
        <div className="flex">
          <input
            type="text"
            name="search"
            id="search"
            className="w-[400px] bg-[#067D71] rounded placeholder:text-white focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex gap-4 text-white">
        <div className="p-2 rounded-lg bg-[#067D71]">
          <IoNotifications size={25} className="" />
        </div>
        <div className="p-2 rounded-lg bg-[#067D71]">
          <IoBagHandle size={25} />
        </div>
      </div>
    </div>
  );
}
