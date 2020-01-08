import React from "react";
import UserProfileInfo from "../user-profile-info/user-profile-info";
import UserProfileCreatedEvents from "../user-profile-created-events/user-profile-created-events";
import UserProfileLikedEvents from "../user-profile-liked-events/user-profile-liked-events";

const UserProfile = (props) => {
  const setActiveClass = (e) => {
    const current = e.currentTarget;
    // eslint-disable-next-line array-callback-return
    [...current.parentNode.childNodes].map((x) => {
      x.classList.remove('active');
      document.getElementById(x.getAttribute('aria-controls')).classList.remove('show', 'active');
    });
    current.classList.add('active');
    document.getElementById(current.getAttribute('aria-controls')).classList.add('show', 'active');
  };

  return(
    <div>
      <nav>
        <div className="nav nav-tabs justify-content-end" role="tablist">
          <a className="nav-item nav-link active" data-toggle="tab" href="#profile" role="tab"
             aria-controls="profile" onClick={setActiveClass}>Profile</a>
          <a className="nav-item nav-link" data-toggle="tab" href="#created-events" role="tab"
             aria-controls="created-events" onClick={setActiveClass}>Created Events</a>
          <a className="nav-item nav-link" data-toggle="tab" href="#liked-events" role="tab"
             aria-controls="liked-events" onClick={setActiveClass}>Liked Events</a>
        </div>
      </nav>
      <div className="tab-content">
        <div className="tab-pane fade show active" id="profile" role="tabpanel">
          <UserProfileInfo />
        </div>
        <div className="tab-pane fade" id="created-events" role="tabpanel">
          <UserProfileCreatedEvents />
        </div>
        <div className="tab-pane fade" id="liked-events" role="tabpanel">
          <UserProfileLikedEvents />
        </div>
      </div>
    </div>
  )
};

export default UserProfile;