'use client';
import React, { useState } from 'react';

const Home = () => {
  const [value, setValue] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false)

  const AiAnswer = async () => {

    const res = await fetch('/api/openai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: value }),
    });
    setLoading(true)
    const data = await res.json();
    setResponse(data.message);
    setLoading(false)

  };


  return (
    <div className="w-full h-screen relative">
      <div
        className="w-full h-full flex flex-col items-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/backgroun.png")' }}
      >
        <div className="text-center mt-44 w-11/12 sm:w-1/2">
          <h1 className="text-[#D7C2A7] mb-3 text-5xl font-bold">CAST-O-MANCER</h1>
          <p className="text-[#D7C2A7] text-md">
            Drop your cast into the crystal ball and receive your fate...
          </p>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="mt-5 w-full py-2 rounded-xl border border-[#D7C2A7] bg-[#1D1527] outline-none pl-5 text-white font-sans"
            placeholder="Enter your cast or thought..."
            type="text"
          />
          <button
            onClick={AiAnswer}
            className="w-full py-2 bg-[#1D1527] mt-3 rounded-xl text-white"
          >
            🪄 Reveal your fate
          </button>
        </div>

        {
          response ? (
            loading ? (
              <div>
                <img className='w-96' src="./icon.png" alt="Globe" />
                <img className=' absolute top-[21.3rem] left-[34.3rem]' src="./loading.gif" alt="" />
              </div>
            ) : (
              <div className="mt-10 px-6 text-center">
                <p className="text-[#D7C2A7] text-lg">✨ {response}</p>
              </div>
            )
          ) : (
            <div className=''>
              <img className='w-96' src="./icon.png" alt="Globe" />

            </div>
          )
        }



      </div >
    </div >
  );
};

export default Home;
