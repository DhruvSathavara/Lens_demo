import React, { useEffect, useRef, useState } from 'react';
import Web3Modal from "web3modal";
import { ethers, Contract, providers, Signer } from 'ethers';
import { generateChallenge } from './lens/authentication';
import { authenticate } from './lens/authentication';
import UploadModal from './componant/createPost-Modal';
import { LensAuthContext } from './context/LensContext';
import ProfileCreate from './lens/profile/create-profile-modal';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Profile from './lens/profile/ProfileModal';
import DisplayPublications from './lens/getPost/DisplayPost';

function App() {

  const lensAuthContext = React.useContext(LensAuthContext);
  const { profile, login, setUpdate, update } = lensAuthContext;
  // console.log(profile, 'profile');


  return (
    <>
      <div>
        {
          <div>
            <Button className='m-2' style={{ background: '#488E72', color: 'white', textTransform: 'capitalize' }} onClick={login}>
              Login
            </Button>
            <Link to='/Createprofile'>
              <Button className='m-2' style={{ background: '#488E72', color: 'white', textTransform: 'capitalize' }} >
                Create Profile
              </Button>
            </Link>
            <Link to='/profile'>
              <Button className='m-2' style={{ background: 'rgb(35 51 44)',right:"0", color: 'white', textTransform: 'capitalize' }} >
                Profile
              </Button>
            </Link>
            <Link to='/publications'>
              <Button className='m-2' style={{ background: 'rgb(35 51 44)',right:"0", color: 'white', textTransform: 'capitalize' }} >
                Publications
              </Button>
            </Link>
          </div>
        }<br /><br />
        <UploadModal />
        {/* <ProfileCreate /> */}
      </div>
      <div>
      
      </div>
   
    </>
  );
}

export default App;
