import React, { useState } from "react"; 
import Link from "next/link";
import AvatarUpload from "../components/AvatarUpload";
import PhoneAvatar from "../components/PhoneAvatar";
import ProfileForm from "../components/ProfileForm";

const Profile = () => {
  const [firstname, setFirstName] = useState("");
  const [secondname, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Darker Header */}
      <header className="bg-gray-900 text-white py-4">
        <nav className="flex justify-between items-center px-8">
          {/* Centered Buttons */}
          <div className="flex justify-center flex-grow space-x-8">
            <Link href="/">
              <button className="font-semibold bg-slate-600 px-4 py-2 rounded hover:bg-slate-700 transition">
                Links
              </button>
            </Link>
            <Link href="/profile">
              <button className="font-semibold bg-slate-600 px-4 py-2 rounded hover:bg-slate-700 transition">
                Profile Details
              </button>
            </Link>
          </div>
          {/* Right Aligned Preview Button */}
          <Link href="/preview">
            <button className="h-10 w-24 rounded bg-gray-900 border hover:bg-gray-800 transition">
              Preview
            </button>
          </Link>
        </nav>
      </header>

      <div className="flex h-[calc(100%-96px)] overflow-hidden">
        {/* Phone avatar section */}
        <PhoneAvatar profilePicture={profilePicture} />

        {/* Customize links section */}
        <section className="w-full lg:w-3/5 flex flex-col justify-between px-8 bg-white">
          <div className="m-12 h-full">
            <h1 className="text-xl text-slate-600 font-bold">
              Profile Details
            </h1>
            <p className="text-sm text-slate-700 mt-1 mb-4">
              Add your details to create a personal touch to your profile
            </p>

            {/* Profile Form */}
            <div className="flex flex-col items-center bg-white rounded-lg shadow-xl p-6">
              {/* Profile Picture Upload */}
              <div className="flex flex-col items-center mb-6">
                {!profilePicture ? (
                  <AvatarUpload onImageUpload={setProfilePicture} />
                ) : (
                  <div className="flex flex-col items-center">
                    <img
                      src={profilePicture}
                      alt="Profile Picture"
                      className="w-32 h-32 rounded-full object-cover mt-4 shadow-lg"
                    />
                    <button
                      onClick={() => setProfilePicture(null)}
                      className="text-red-600 mt-2 underline hover:text-red-800 transition"
                    >
                      Change Image
                    </button>
                  </div>
                )}
              </div>

              {/* Profile Form */}
              <ProfileForm
                firstname={firstname}
                secondname={secondname}
                email={email}
                setFirstName={setFirstName}
                setSecondName={setSecondName}
                setEmail={setEmail}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Save button positioned bottom-right */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-slate-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-slate-700 transition">
          Save
        </button>
      </div>
    </div>
  );
};

export default Profile;
