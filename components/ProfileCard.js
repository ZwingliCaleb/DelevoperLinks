import React from 'react';
import Image from 'next/image';

const ProfileCard = () => {
  return (
    <div>
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
            <Image
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl"
                width='240'
                height='240' 
            />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ProfileCard
