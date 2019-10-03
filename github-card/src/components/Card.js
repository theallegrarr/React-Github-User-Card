import React, { useState, useEffect } from 'react';

export default class UserCard extends React.Component {
 
 render() {
   return (
   <div className='user-card'>
      <img className='avatar' src={this.props.user.avatar_url} alt='avatar'></img>
      <div className='details'>
        <h1>{this.props.user.name}</h1>
        <h4>Bio: {this.props.user.bio}</h4>
        <p>E-Mail: {this.props.user.email}</p>
        <p>Location: {this.props.user.location}</p>
      </div>
   </div>
   )
 }
}