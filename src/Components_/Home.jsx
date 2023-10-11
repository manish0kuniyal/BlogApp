import React from 'react';
import Discover from './Discover';
import Sidebar from './sidebar';
import MusicPlayer from './MusicPlayer';
const Home = () => {
  return (
    <div>

    <div className='flex h-[100vh] '>
      <Sidebar/>
      <div className='w-[92%]'>
      <Discover/>
      <MusicPlayer/>
      </div>
 
    </div>

    </div>
  );
};

export default Home;
