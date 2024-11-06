import React from 'react';

const ProfileForm = ({firstname, secondname, email, setFirstName, setSecondName, setEmail}) => {
  return (
    <div className="flex flex-col items-center rounded-lg shadow-xl pb-32 mb-48">
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
  );
}

export default ProfileForm;
