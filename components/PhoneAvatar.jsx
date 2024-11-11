import React from 'react';

const PhoneAvatar = ({ profilePicture, firstname, secondname, email, links }) => {
  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          {/* Profile Card Preview Inside the Phone */}

          {/* Profile Picture */}
          <div className="flex justify-center mb-4">
            {profilePicture ? (
              <img
                src={profilePicture}
                alt="Profile Picture"
                className="w-20 h-20 rounded-full"
              />
            ) : (
              <div className="w-20 h-20 bg-gray-300 rounded-full flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
          </div>

          {/* User's Name */}
          <h2 className="text-lg font-semibold text-gray-800 text-center">
            {firstname || 'First Name'} {secondname || 'Second Name'}
          </h2>

          {/* User's Email */}
          <p className="text-sm text-gray-500 text-center mb-4">
            {email || 'user@example.com'}
          </p>

          {/* Links */}
          <div className="w-full px-2">
            {links && links.length > 0 ? (
              links.map((link, index) => (
                <div key={index} className="my-2 text-center">
                  <a
                    href={link.url}
                    className="text-blue-500 hover:underline block"
                  >
                    {link.label}
                  </a>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">No Links Added</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneAvatar;
