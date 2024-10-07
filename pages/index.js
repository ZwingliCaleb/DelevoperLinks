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
      <header className="text-center mt-8">
        <div className="items-center flex-col-reverse">
          <nav className="m-4 text-center flex-col">
            <Link href="/customize">
              <button className="font-semibold mr-6 bg-slate-900 text-white p-2 rounded">Links</button>
            </Link>
            <Link href="/profile">
              <button className="font-semibold ml-8">Profile Details</button>
            </Link>
            <button className="border h-8 w-24 rounded-md ml-64">Preview</button>
          </nav>
        </div>
      </header>

      <div className="m-8 flex">
        <section>
          <div className="mockup-phone">
            <div className="camera"></div>
            <div className="display">
              <div className="artboard artboard-demo phone-1">Hi Zwingli.</div>
            </div>
          </div>
        </section>

        <section className="m-4 ml-24">
          <h2 className="mb-2 text-lg font-bold">Customize your links</h2>
          <p className="text-sm font-semibold">Add/Edit/Remove links below and then share all your profiles with the world!</p>

          <div>
            <button 
              onClick={addLink} 
              className="mt-2 h-12 w-full bg-slate-600 rounded-lg text-white"
            >
              + Add new link
            </button>
          </div>

          {links.map((link) => (
            <div key={link.id} className="mt-4 flex items-center">
              <p className="mr-4">Link #{link.id}</p>
              <button 
                onClick={() => removeLink(link.id)} 
                className="p-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}

          {links.map((link) => (
            <div key={link.id} className="mt-4">
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
          ))}

          <div>
            <button className="mt-4 h-12 w-24 bg-slate-600 rounded-lg text-white">Save</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
