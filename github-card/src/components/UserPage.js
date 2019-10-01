import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './Card';
import FollowerCard from './FollowersCard';
import data from './static';
import followersData from './staticFollowers';

//const userAPI = 'https://api.github.com/users/theallegrarr';
//const followersAPI = 'https://api.github.com/users/theallegrarr/followers';

export default class Market extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     user: data,
     followers: followersData,
   };
 }
 
//  componentDidMount() {
//    const getUser = axios.get(userAPI);
//    const followersPromise = axios.get(followersAPI);
//    Promise.all([getUser, followersPromise])
//      .then(([userRes, followersRes]) => {
//        this.setState({
//          user: userRes.data,
//          followers: followersRes.data,
//        });
//      });
//  }
 render() {
   return (
   <>
    <UserCard user={this.state.user}/>
    <FollowerCard followers={this.state.followers}/>
   </>
   )
 }
}