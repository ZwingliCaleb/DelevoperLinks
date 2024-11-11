import React, { useState } from "react";
import Link from "next/link";
import PhoneAvatar from "../components/PhoneAvatar";
import ProfileForm from "../components/ProfileForm"; // Assuming you are using this component for managing profile data

const Index = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [firstname, setFirstName] = useState("");
  const [secondname, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [links, setLinks] = useState([]);

  return (
    <div className="h-screen overflow-hidden">
      {/* Darker Header */}
      <header className="bg-gray-900 text-white py-4">
        <nav className="flex justify-between items-center px-8">
          {/* Centered Buttons */}
          <div className="flex justify-center flex-grow space-x-8">
            <Link href="/profile">
              <button className="font-semibold bg-slate-600 px-4 py-2 rounded">
                Profile
              </button>
            </Link>
            <Link href="/links">
              <button className="font-semibold bg-slate-600 px-4 py-2 rounded">
                Customize Links
              </button>
            </Link>
          </div>
          {/* Right Aligned Preview Button */}
          <Link href="/preview">
            <button className="h-10 w-24 rounded bg-gray-900 border">
              Preview
            </button>
          </Link>
        </nav>
      </header>

      <div className="flex h-[calc(100%-96px)] overflow-hidden">
        {/* Phone avatar section, only displayed on large screens */}
        <div className="hidden lg:flex lg:w-2/5 justify-center items-center bg-gray-100">
          <PhoneAvatar
            profilePicture={profilePicture}
            firstname={firstname}
            secondname={secondname}
            email={email}
            links={links}
          />
        </div>

        {/* Profile Form section */}
        <section className="w-full lg:w-3/5 flex flex-col justify-between px-8 bg-white">
          <div className="m-12 h-full">
            <h1 className="text-xl text-slate-600 font-bold">Profile Details</h1>
            <p className="text-sm text-slate-700 mt-1 mb-2">
              Add your details to personalize your profile.
            </p>
          </div>

          {/* Profile Form */}
          <div className="flex flex-col items-center rounded-lg shadow-xl pb-32 mb-48">
            <ProfileForm
              firstname={firstname}
              secondname={secondname}
              email={email}
              setFirstName={setFirstName}
              setSecondName={setSecondName}
              setEmail={setEmail}
            />
          </div>
        </section>
      </div>

      {/* Save button positioned bottom-right */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-slate-600 text-white px-6 py-2 rounded">
          Save
        </button>
      </div>
    </div>
  );
};

export default Index;
