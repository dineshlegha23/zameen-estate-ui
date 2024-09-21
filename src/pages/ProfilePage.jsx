import React, { Suspense, useState } from "react";
import UserInformation from "../components/UserInformation";
import PropertyList from "../components/PropertyList";
import Messages from "../components/Messages";
import { Await, Link, useLoaderData, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authContext";

const ProfilePage = () => {
  const { currentUser } = useAuthContext();
  const { response } = useLoaderData();
  const navigate = useNavigate();

  if (!currentUser) {
    navigate("/login");
  }

  const [isMessageBoxOpen, setIsMessageBoxOpen] = useState(true);
  return (
    <section className="flex md:flex-col">
      <div className="[flex:3] pr-10 lg:pr-5 sm:pr-2 h-[calc(100vh-100px)] overflow-y-scroll">
        <div className="flex justify-between">
          <h2 className="text-3xl font-thin">User Information</h2>
          <Link to="/user/update" className="bg-[#fece51] text-sm px-6 py-3">
            Update Profile
          </Link>
        </div>
        <UserInformation />

        <div className="flex justify-between mt-14">
          <h2 className="text-3xl font-thin">My List</h2>
          <Link to={"/add/post"} className="bg-[#fece51] text-sm px-6 py-3">
            Create New Post
          </Link>
        </div>
        <div className="flex flex-col gap-10 my-12 pr-10 lg:pr-2 pb-10">
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={response}
              errorElement={
                <span className="text-center text-red-400">
                  Error loading posts
                </span>
              }
            >
              {(response) =>
                response.data.posts.length < 1 ? (
                  <p className="text-xl text-center">0 posts</p>
                ) : (
                  response.data.posts.map((property) => (
                    <PropertyList key={property.id} {...property} />
                  ))
                )
              }
            </Await>
          </Suspense>
        </div>
        <div className="flex flex-col gap-10 pb-10 justify-between mt-14">
          <h2 className="text-3xl font-thin">Saved Posts</h2>
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={response}
              errorElement={
                <span className="text-center text-red-400">
                  Error loading posts
                </span>
              }
            >
              {(response) =>
                response.data.savedPosts.length < 1 ? (
                  <span className="text-xl text-center">0 Saved Posts</span>
                ) : (
                  response.data.savedPosts.map((property) => (
                    <PropertyList key={property.id} {...property} />
                  ))
                )
              }
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="bg-red-50 w-full [flex:2] sticky inset-0 right-0 flex flex-col justify-between pb-5">
        <Messages
          isMessageBoxOpen={isMessageBoxOpen}
          setIsMessageBoxOpen={setIsMessageBoxOpen}
        />

        {isMessageBoxOpen && (
          <div className="mx-5 bottom-0 w-full pr-10">
            <div className="bg-[#f7c14b85] h-16 flex justify-between items-center px-5">
              <div className="flex items-center gap-5 font-semibold">
                <img
                  src={
                    "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png"
                  }
                  alt="user image"
                  className="w-10 h-10 rounded-full"
                />
                <p>John Doe</p>
              </div>
              <button
                className="font-semibold"
                onClick={() => setIsMessageBoxOpen(false)}
              >
                X
              </button>
            </div>

            <div className="bg-white h-80 md:h-96 px-5 py-4 flex flex-col gap-4 overflow-y-scroll md:gap-6 md:py-10 [&_div]:leading-5">
              <div className="flex flex-col">
                <p className="max-w-[50%]">Lorem ipsum dolor sit amet</p>
                <span className="bg-[#f7c14b50] self-start text-xs rounded-md px-1">
                  1 hour ago
                </span>
              </div>
              <div className="flex flex-col justify-end">
                <p className="self-end max-w-[50%]">
                  Lorem ipsum dolor sit amet
                </p>
                <span className="self-end bg-[#f7c14b50] text-xs rounded-md px-1">
                  1 hour ago
                </span>
              </div>
              <div className="flex flex-col">
                <p className="max-w-[50%]">Lorem ipsum dolor sit amet</p>
                <span className="bg-[#f7c14b50] self-start text-xs rounded-md px-1">
                  1 hour ago
                </span>
              </div>
              <div className="flex flex-col justify-end">
                <p className="self-end max-w-[50%]">
                  Lorem ipsum dolor sit amet
                </p>
                <span className="self-end bg-[#f7c14b50] text-xs rounded-md px-1">
                  1 hour ago
                </span>
              </div>
              <div className="flex flex-col">
                <p className="max-w-[50%]">Lorem ipsum dolor sit amet</p>
                <span className="bg-[#f7c14b50] self-start text-xs rounded-md px-1">
                  1 hour ago
                </span>
              </div>
              <div className="flex flex-col justify-end">
                <p className="self-end max-w-[50%]">
                  Lorem ipsum dolor sit amet
                </p>
                <span className="self-end bg-[#f7c14b50] text-xs rounded-md px-1">
                  1 hour ago
                </span>
              </div>
              <div className="flex flex-col">
                <p className="max-w-[50%]">Lorem ipsum dolor sit amet</p>
                <span className="bg-[#f7c14b50] self-start text-xs rounded-md px-1">
                  1 hour ago
                </span>
              </div>
              <div className="flex flex-col justify-end">
                <p className="self-end max-w-[50%]">
                  Lorem ipsum dolor sit amet
                </p>
                <span className="self-end bg-[#f7c14b50] text-xs rounded-md px-1">
                  1 hour ago
                </span>
              </div>
            </div>

            <div className="flex justify-between">
              <input
                type="text"
                name="message"
                placeholder="Enter message..."
                className="h-14 w-full border-2 border-[#f7c14b50] px-2"
              />
              <button className="bg-[#f7c14b80] h-14 px-5 w-[100px]">
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfilePage;
