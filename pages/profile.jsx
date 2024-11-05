import React, { useState } from 'react';
import Link from 'next/link';
import AvatarUpload from '../components/AvatarUpload';

const Profile = () => {
  const [firstname, setFirstName] = useState('');
  const [secondname, setSecondName] = useState('');
  const [email, setEmail] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  return (
    <div className="h-screen overflow-hidden">
      {/* Darker Header */}
      <header className="bg-gray-900 text-white py-4">
        <nav className="flex justify-between items-center px-8">
          {/* Centered Buttons */}
          <div className="flex justify-center flex-grow space-x-8">
            <Link href="/">
              <button className="font-semibold bg-slate-600 px-4 py-2 rounded">Links</button>
            </Link>
            <Link href="/profile">
              <button className="font-semibold bg-slate-600 px-4 py-2 rounded">Profile Details</button>
            </Link>
          </div>
          {/* Right Aligned Preview Button */}
          <Link href="/preview">
            <button className="h-10 w-24 rounded bg-gray-900 border">Preview</button>
          </Link>
        </nav>
      </header>

      <div className="flex h-[calc(100%-96px)] overflow-hidden">
        {/* Phone avatar section (hidden on small screens) */}
        <section className="w-2/5 hidden lg:flex justify-center items-center bg-gray-100">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">
                {profilePicture ? (
                  <img src={profilePicture} alt="Profile" className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <p className="text-gray-600 text-sm text-center">Hi Zwingli.</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Customize links section */}
        <section className="w-full lg:w-3/5 flex flex-col justify-between px-8 bg-white">
          <div className="m-12 h-full">
            <h1 className="text-xl text-slate-600 font-bold">Profile Details</h1>
            <p className="text-sm text-slate-700 mt-1 mb-2">Add your details to create a personal touch to your profile</p>
          </div>

          <div className="flex flex-col items-center rounded-lg shadow-xl pb-32 mb-48">
            {/* Profile Picture Upload */}
            <AvatarUpload onImageUpload={setProfilePicture} />

            {/* First name Input */}
            <input
              type="text"
              placeholder="First name"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
              className="mt-4 p-2 border border-gray-300 rounded w-full max-w-xs"
            />

            {/* Second name Input */}
            <input
              type="text"
              placeholder="Second name"
              value={secondname}
              onChange={(e) => setSecondName(e.target.value)}
              className="mt-4 p-2 border border-gray-300 rounded w-full max-w-xs"
            />

            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-4 p-2 border border-gray-300 rounded w-full max-w-xs"
            />
          </div>
        </section>
      </div>

      {/* Save button positioned bottom-right */}
      <div className="fixed bottom-8 right-8">
        <button className="bg-slate-600 text-white px-6 py-2 rounded">Save</button>
      </div>
    </div>
  );
};

export default Profile;
