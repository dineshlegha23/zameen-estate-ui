import React from "react";

const UserInformation = () => {
  return (
    <article className="flex flex-col gap-3 mt-14">
      <p className="flex items-center">
        Avatar:
        <img
          className="w-14 pl-5"
          src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
          alt="user image"
        />
      </p>
      <p>
        Username: <span className="font-bold pl-5"> John Doe</span>
      </p>
      <p>
        E-mail: <span className="font-bold pl-5">john@gmail.com</span>
      </p>
    </article>
  );
};

export default UserInformation;
