import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div>
      <header className="text-center mt-8">
        <div className="items-center flex-col-reverse">
          <nav className="m-4 text-center flex-col">
            <button><Link href ="" to="/customize" className="font-semibold mr-6 bg-slate-900"> Links </Link></button>
            <button><Link href="" className="font-semibold ml-8"> Profile Details </Link></button>
            <button className="border h-8 w-24 rounded-md ml-64">Preview</button>
          </nav>
        </div>
      </header>
      <div className="m-8 flex">
        <section className="">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">Hi Zwingli.</div>
            </div>
          </div>
        </section>
        <section className="m-4">
          <h2 className="mb-2 text-lg font-bold">Customize your links</h2>
          <p className="text-sm font-semibold">Add/Edit/Remove links below and then share all your profiles with the world!</p>
          <div>
            <button className="mt-2 h-12 w-full bg-slate-600 rounded-lg ">+ Add new link</button>
          </div>
          <div>
            <p className="mt-4">Link #!</p>
            <button></button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
