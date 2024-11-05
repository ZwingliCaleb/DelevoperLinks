import React, { useState } from 'react';
import AvatarUpload from '../components/AvatarUpload'; // Adjust the path as necessary

const Profile = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle form submission here
    console.log({ firstName, lastName, email, profilePicture });
  };

  return (
    <div className="flex flex-col items-center py-8">
      <h1 className="text-2xl font-bold mb-4">Profile Details</h1>
      
      {/* Avatar Upload */}
      <AvatarUpload profilePicture={profilePicture} setProfilePicture={setProfilePicture} />
      
      {/* Input Fields */}
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="mt-4 p-2 border border-gray-300 rounded w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="mt-4 p-2 border border-gray-300 rounded w-full max-w-xs"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-4 p-2 border border-gray-300 rounded w-full max-w-xs"
      />
      
      {/* Save Button */}
      <button onClick={handleSubmit} className="mt-6 bg-slate-600 text-white px-6 py-2 rounded">
        Save
      </button>
    </div>
  );
};

export default Profile;
