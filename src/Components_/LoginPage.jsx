import React, { useEffect, useState } from 'react';
import Logo from '../Assets/SptLogo.png';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';
import Home from './Home';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [value, setvalue] = useState('');
  const[avd,setavd]=useState(false)
  const handleOnclick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setvalue(data._tokenResponse.displayName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setvalue(localStorage.getItem('val'));
    localStorage.setItem('val', '');
  }, []);

  return (
    <div>
      <div className='bg-black h-[100vh] flex justify-center items-center'>
        <div className='w-[80%] flex flex-col items-center text-white mt-[-15%]'>
          <img src={Logo} alt='Logo' />
          <div className='h-[70%] flex flex-col w-[100%] justify-evenly py-10 items-center'>
            {value ? (
              <Link to='/home'>
                <button className='bg-[#1db954] hover:bg-green-700 rounded-[30px] w-[20vmax] mb-[7%] py-4'>Continue with Spotify</button>
              </Link> 
            ) : (
              <button className='bg-[#1db954] hover:bg-green-700 rounded-[30px] w-[20vmax] mb-[7%] py-4' onClick={handleOnclick}>Sign Up With Google</button>
            )}
            
            {value?<p className='hidden'></p>:
            <Link to='/Home'>
              <button className='bg-[#1db954] hover:bg-green-700 rounded-[30px] w-[20vmax] py-3.5'>Skip Sign In</button>
            </Link>
            }
            
            {
              avd &&  <Home className='border-2 hidden' val={value}/>
       

            }            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage