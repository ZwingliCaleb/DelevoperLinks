import React, { useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const [links, setLinks] = useState([{ id: 1, platform: '', url: '' }]);

  const addLink = () => {
    const newLink = { id: links.length + 1, platform: '', url: '' };
    setLinks([...links, newLink]);
  };

  const removeLink = (id) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <div>
      {/* Header Section */}
      <header className="w-full bg-slate-900 text-white p-4 text-center">
        <div className="flex justify-center items-center">
          <nav className="flex space-x-8">
            <Link href="/customize">
              <button className="font-semibold bg-slate-700 p-2 rounded">Links</button>
            </Link>
            <Link href="/profile">
              <button className="font-semibold">Profile Details</button>
            </Link>
            <button className="border h-8 w-24 rounded-md">Preview</button>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="flex mt-8 w-full">
        {/* Left Section: Phone Avatar (2/5 of the screen) */}
        <section className="w-2/5 flex justify-center items-center">
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">Hi Zwingli.</div>
            </div>
          </div>
        </section>

        {/* Right Section: Customize Links (3/5 of the screen) */}
        <section className="w-3/5 p-4">
          <h2 className="mb-2 text-lg font-bold">Customize your links</h2>
          <p className="text-sm font-semibold mb-4">Add/Edit/Remove links below and then share all your profiles with the world!</p>

          {/* Add New Link Button */}
          <div>
            <button 
              onClick={addLink} 
              className="h-12 w-full bg-slate-600 rounded-lg text-white"
            >
              + Add new link
            </button>
          </div>

          {/* Links Section */}
          {links.map((link) => (
            <div key={link.id} className="mt-4 p-4 border rounded-lg">
              <div className="flex items-center justify-between">
                <p className="mr-4">Link #{link.id}</p>
                <button 
                  onClick={() => removeLink(link.id)} 
                  className="p-2 bg-red-500 text-white rounded"
                >
                  Remove
                </button>
              </div>

              <div className="mt-4">
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text">Choose platform</span>
                  </div>
                  <select className="select select-bordered">
                    <option disabled selected>Pick one</option>
                    <option>GitHub</option>
                    <option>LinkedIn</option>
                    <option>Reddit</option>
                    <option>Twitter</option>
                    <option>YouTube</option>
                  </select>
                </label>

                <label className="form-control w-full max-w-xs mt-2">
                  <div className="label">
                    <span className="label-text">Link</span>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Type here" 
                    className="input input-bordered w-full max-w-xs" 
                  />
                </label>
              </div>
            </div>
          ))}

          {/* Save Button Section */}
          <div className="mt-4">
            <button className="h-12 w-24 bg-slate-600 rounded-lg text-white">Save</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
