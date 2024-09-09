import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <header className="text-center mt-8">
      <div className="items-center flex-col-reverse">
        <nav className="m-4 text-center flex-col">
          <Link href ="" to="/customize" className="font-semibold"> Links </Link>
          <Link href="" className="font-semibold"> Profile Details </Link>
        </nav>
      </div>
    </header>
  )
}

export default Home
