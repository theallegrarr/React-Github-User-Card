import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './Card';
import FollowerCard from './FollowersCard';
import FindUser from './UserSearch';
import data from './static';
import followersData from './staticFollowers';

const userAPI = 'https://api.github.com/users/eliooses';
const followersAPI = 'https://api.github.com/users/eliooses/followers';
const options = {
  headers: { Authorization: 'fd1d7881204da2a1712d521b38c2fa6b5ff4510d' }
};


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

 componentDidUpdate(){
  const searchUserAPI = `https://api.github.com/users/${this.state.formValue}`;
  const searchFollowersAPI = `https://api.github.com/users/${this.state.formValue}/followers`;

   const getUser = axios.get(searchUserAPI, options);
   const followersPromise = axios.get(searchFollowersAPI, options);
   
   Promise.all([getUser, followersPromise])
    .then(([userRes, followersRes]) => {
      this.setState({
        user: userRes.data,
        followers: followersRes.data,
        //formValue: '',
      });
    });
 }

 find = (event) => {
  this.setState({
    formValue: event.target.value,
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