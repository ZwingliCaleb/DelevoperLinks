import React from 'react';
import ProfileCard from '../components/ProfileCard';
import Link from 'next/link';

const preview = () => {
  return (
    <div className="h-screen">
      <section className="h-80 border bg-blue-800 rounded-b-2xl">
        <div className="border m-6 h-16 bg-white rounded-md">
          <div className="flex justify-between items-center py-3 px-4">
            
            <Link href = "/">
              <button className="text-white bg-black px-4 py-2 rounded-md">
                Back to Editor
              </button>
            </Link>
            <button className="bg-black text-white px-4 py-2 rounded-md">
              Share Link
            </button>
          </div>
        </div>
      </section>

      {/* Adjusted ProfileCard placement */}
      <div className="flex items-center justify-center -mt-32">
        <ProfileCard />
      </div>
    </div>
  );
};

export default preview;
