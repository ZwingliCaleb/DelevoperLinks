import React from 'react'

const PhoneAvatar = ({profilePicture}) => {
  return (
    <section className="w-2/5 hidden lg:flex justify-center items-center bg-gray-100">
      <div className="mockup-phone">
        <div className="camera"></div>
        <div>
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
  )
}

export default PhoneAvatar;

