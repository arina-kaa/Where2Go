import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {validateUser} from '../../api/user';
import UserProfileInfo from '../user-profile-info/user-profile-info';
import UserProfileCreatedEvents from '../user-profile-created-events/user-profile-created-events';
import UserProfileLikedEvents from '../user-profile-liked-events/user-profile-liked-events';
import './style.scss'

const UserProfile = () => {
  let history = useHistory();
  useEffect(() => {
      validateUser(history);
    }, [history]
  );

  const setActiveClass = (e) => {
    const current = e.currentTarget;
    [...current.parentNode.childNodes].map((x) => {
      x.classList.remove('active');
      document.getElementById(x.getAttribute('aria-controls')).classList.remove('show', 'active');
      return null;
    });
    current.classList.add('active');
    document.getElementById(current.getAttribute('aria-controls')).classList.add('show', 'active');
  };

  return (
    <div>
      <nav>
        <div className='nav nav-tabs justify-content-end' role='tablist'>
      <span className='nav-item nav-link active' data-toggle='tab' role='tab'
        aria-controls='profile' onClick={setActiveClass}>Profile</span>
          <span className='nav-item nav-link' data-toggle='tab' role='tab'
              aria-controls='created-events' onClick={setActiveClass}>Created Events</span>
          <span className='nav-item nav-link' data-toggle='tab' role='tab'
              aria-controls='liked-events' onClick={setActiveClass}>Liked Events</span>
        </div>
      </nav>
      <div className='tab-content'>
        <div className='tab-pane fade show active' id='profile' role='tabpanel'>
          <UserProfileInfo/>
        </div>
        <div className='tab-pane fade' id='created-events' role='tabpanel'>
          <UserProfileCreatedEvents/>
        </div>
        <div className='tab-pane fade' id='liked-events' role='tabpanel'>
          <UserProfileLikedEvents/>
        </div>
      </div>
    </div>
  )
};

export default UserProfile;