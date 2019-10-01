import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './Card';
import FollowerCard from './FollowersCard';
import FindUser from './UserSearch';
import data from './static';
import followersData from './staticFollowers';

const userAPI = 'https://api.github.com/users/eliooses';
const followersAPI = 'https://api.github.com/users/eliooses/followers';

export default class Market extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     user: data,
     followers: followersData,
     formValue: '',
   };

   // this.update = this.update.bind(this);
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

 find = (event) => {
  const searchUserAPI = `https://api.github.com/users/${this.state.formValue}`;
  const searchFollowersAPI = `https://api.github.com/users/${this.state.formValue}/followers`;

   const getUser = axios.get(searchUserAPI);
   const followersPromise = axios.get(searchFollowersAPI);
   
   Promise.all([getUser, followersPromise])
     .then(([userRes, followersRes]) => {
       this.setState({
         user: userRes.data,
         followers: followersRes.data,
         formValue: '',
       });
     });
 }

 update = (event) => {
  this.setState({
    formValue: event.target.value,
    });
  }

 render() {
   return (
   <>
    <UserCard user={this.state.user}/>
    <FindUser find={this.find} value={this.state.formValue} update={this.update}/>
    <FollowerCard followers={this.state.followers}/>
   </>
   )
 }
}