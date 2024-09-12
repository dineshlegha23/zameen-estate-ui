import React from "react";

const Messages = ({ isMessageBoxOpen, setIsMessageBoxOpen }) => {
  return (
    <div
      className={`mx-5 overflow-y-scroll  ${
        isMessageBoxOpen ? "h-[calc(100vh-560px)]" : "h-[calc(100vh-160px)]"
      }`}
    >
      <h3 className="text-3xl font-thin">Messages</h3>
      <div
        className={`mt-5 flex flex-col gap-4 overflw-y-scroll pr-2 pb-5 [&_div]:cursor-pointer md:h-[calc(100vh-100px)]
      `}
      >
        <div
          className="flex items-center gap-5 bg-white px-6 py-5 rounded-lg"
          onClick={() => setIsMessageBoxOpen(true)}
        >
          <img
            className="w-10"
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt="user image"
          />
          <p className="font-semibold">John Doe</p>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="flex items-center gap-5 bg-white px-6 py-5 rounded-lg">
          <img
            className="w-10"
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt="user image"
          />
          <p className="font-semibold">John Doe</p>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="flex items-center gap-5 bg-white px-6 py-5 rounded-lg">
          <img
            className="w-10"
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt="user image"
          />
          <p className="font-semibold">John Doe</p>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="flex items-center gap-5 bg-white px-6 py-5 rounded-lg">
          <img
            className="w-10"
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt="user image"
          />
          <p className="font-semibold">John Doe</p>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="flex items-center gap-5 bg-white px-6 py-5 rounded-lg">
          <img
            className="w-10"
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt="user image"
          />
          <p className="font-semibold">John Doe</p>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="flex items-center gap-5 bg-white px-6 py-5 rounded-lg">
          <img
            className="w-10"
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt="user image"
          />
          <p className="font-semibold">John Doe</p>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="flex items-center gap-5 bg-white px-6 py-5 rounded-lg">
          <img
            className="w-10"
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt="user image"
          />
          <p className="font-semibold">John Doe</p>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="flex items-center gap-5 bg-white px-6 py-5 rounded-lg">
          <img
            className="w-10"
            src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
            alt="user image"
          />
          <p className="font-semibold">John Doe</p>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
    </div>
  );
};

export default Messages;
