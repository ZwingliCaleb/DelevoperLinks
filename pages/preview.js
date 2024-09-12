import React from 'react';
import ProfileCard from '../components/ProfileCard';

const preview = () => {
  return (
    <div>
      <section>
        <div className="border m-6 h-12 bg-white rounded-md">
          <div className="items-center flex">
            <div className="items-start"><button>Back to Editor</button></div>
            <div className="items-end"><button>Share Link</button></div>
          </div>
        </div>
      </section>
      <div className= "flex items-center justify-center h-screen relative">
        <ProfileCard/>
      </div>
    </div>
  )
}

export default preview
