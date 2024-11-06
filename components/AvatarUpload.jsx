import React from 'react';
import { useDropzone } from 'react-dropzone';

const AvatarUpload = ({ onImageUpload }) => {
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      onImageUpload(URL.createObjectURL(file)); // Pass the selected image URL to the parent
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ 
    onDrop,
    accept: {
      'image/*': [] // Accept any image format
    }
  });

  return (
    <div 
      {...getRootProps({ 
        className: 'dropzone bg-gray-200 w-32 h-32 flex items-center justify-center rounded-lg cursor-pointer' 
      })}
    >
      <input {...getInputProps()} />
      <p className="text-gray-600 text-sm text-center">Click or drag image</p>
    </div>
  );
};

export default AvatarUpload;
