import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Link from 'next/link';

const Home = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [firstname, setFirstName] = useState('');
  const [secondname, setSecondName] = useState('');
  const [email, setEmail] = useState('');

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ 
    onDrop,
    accept: {
      'image/*': [] // Accept any image format
    }
  });

  return (
    <div className="h-screen overflow-hidden">
      {/* Darker Header */}
      <header className="bg-gray-900 text-white text-center py-4">
        <nav className="flex justify-center space-x-8">
          <Link href="/">
            <button className="font-semibold bg-slate-600 px-4 py-2 rounded">Links</button>
          </Link>
          <Link href="/profile">
            <button className="font-semibold bg-slate-600 px-4 py-2 rounded">Profile Details</button>
          </Link>
          <Link href="/preview">
            <button className="h-10 w-24 ml-auto rounded border bg-gray-900">Preview</button>
          </Link>
        </nav>
      </header>

      <div className="flex h-[calc(100%-96px)] overflow-hidden">
        {/* Phone avatar section (hidden on small screens) */}
        <section className="w-2/5 hidden lg:flex justify-center items-center bg-gray-100">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">Hi Zwingli.</div>
            </div>
          </div>
        </section>

        {/* Customize links section */}
        <section className="w-full lg:w-3/5 flex flex-col justify-between px-8 bg-white">
          <div className="m-12 h-full">
            <h1 className="text-xl text-slate-600 font-bold">Profile Details</h1>
            <p className="text-sm text-slate-700 mt-1 mb-2">Add your details to create a personal touch to your profile</p>
          </div>

          <div className="flex flex-col items-center mb-48">
            {/* Profile Picture Upload */}
            <div {...getRootProps({ className: 'dropzone border-2 border-dashed border-gray-400 w-32 h-32 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-gray-200' })}>
              <input {...getInputProps()} />
              {profilePicture ? (
                <img src={profilePicture} alt="Profile" className="w-full h-full object-cover rounded-lg" />
              ) : (
                <p className="text-gray-600 text-sm text-center">Drag & drop your image here, or click to select</p>
              )}
            </div>

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

export default Home;
