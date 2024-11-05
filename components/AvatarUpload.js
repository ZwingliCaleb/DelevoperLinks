import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const AvatarUpload = ({ onImageUpload }) => {
  const [profilePicture, setProfilePicture] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePicture(imageUrl);
      onImageUpload(imageUrl); // Call the function passed as prop to update parent state
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': [] // Accept any image format
    }
  });

  return (
    <div>
      <div {...getRootProps({ className: 'dropzone border-2 border-dashed border-gray-400 w-32 h-32 flex items-center justify-center rounded-full transition-colors duration-300 hover:bg-gray-200' })}>
        <input {...getInputProps()} />
        {profilePicture ? (
          <img src={profilePicture} alt="Profile" className="w-full h-full object-cover rounded-full" />
        ) : (
          <p className="text-gray-600 text-sm text-center">Drag & drop your image here, or click to select</p>
        )}
      </div>
    </div>
  );
};

export default AvatarUpload;
