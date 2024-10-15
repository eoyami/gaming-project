import { FaUserFriends } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";

export function SideSocial() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col w-24 bg-[#067D71] rounded-lg p-4">
        <div className="flex justify-center align-items py-6">
          <img src="src/assets/socials/profile.png" width={50} />
        </div>
        <div className="flex flex-col h-full space-between">
          <div className="flex flex-col h-full">
            <div className="flex justify-center align-items text-white py-2 my-2 hover:rounded-full hover:bg-[#3DBDA7]">
              <FaUserFriends size={20} />
            </div>
            <div className="flex flex-col justify-center items-center text-white p-2 my-2 hover:rounded-full hover:bg-[#3DBDA7]">
              <img src="/src/assets/socials/friend_two.png" alt="" />
              <div className="bg-[#3DBDA7] text-sm -mt-2 w-16 rounded items-center flex justify-center">
                In Game
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-white p-2 my-2 hover:rounded-full hover:bg-[#3DBDA7]">
              <img src="/src/assets/socials/friend_two.png" alt="" />
              <div className="bg-[#3DBDA7] text-sm -mt-2 w-16 rounded items-center flex justify-center">
                In Game
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-white p-2 my-2 hover:rounded-full hover:bg-[#3DBDA7]">
              <img src="/src/assets/socials/friend_two.png" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center text-white p-2 my-2 hover:rounded-full hover:bg-[#3DBDA7]">
              <img src="/src/assets/socials/friend_two.png" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center text-white p-2 my-2 hover:rounded-full hover:bg-[#3DBDA7]">
              <img src="/src/assets/socials/friend_two.png" alt="" />
            </div>
            <div className="flex flex-col justify-center items-center text-white p-2 my-2 hover:rounded-full hover:bg-[#3DBDA7]">
              <img src="/src/assets/socials/friend_two.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-24 bg-[#067D71] rounded-lg p-2 h-full items-center justify-center gap-2">
        <div className="flex hover:bg-[#3DBDA7] p-2 rounded-full">
          <LuMessagesSquare size={25} className="text-white " />
        </div>
        <div className="bg-gray-400 p-2 rounded-full">
          <FaUserFriends size={20} className="text-white" />
        </div>
        <div className="flex">
          <img src="/src/assets/socials/friend_msg.png" width={40} alt="" />
        </div>
        <div className="flex">
          <img src="/src/assets/socials/friend_msg.png" width={40} alt="" />
        </div>
      </div>
    </div>
  );
}
