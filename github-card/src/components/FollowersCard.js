import React from 'react';

export default function (props) {
 
 return(
  <div className='f-cards'>
  {
  props.followers.map(follower => {
      return(
      <div className='follower-card'>
      <img className='follower-avatar' src={follower.avatar_url} alt='avatar'></img>
        <div className='follower-details'>
          <h1>{follower.login}</h1>
          <h4>URL: {follower.url}</h4>
        </div>
      </div>
    );
  })
  }
  </div>
  );
}