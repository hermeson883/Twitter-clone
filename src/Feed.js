import React, { useState, useEffect } from 'react';

import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post'

function Feed() {

    return (
        <div className='feed'>
            {/*Header */}   
            <div className="feed__header">
                <h2>Home</h2>
            </div>  
            {/*TweetBox*/}
            <TweetBox />

            <Post
                displayName={"Hermeson do Vale Beserra"}
                verified={true}
                username="the real Hermeson Beserra"
                text="Remember for what you are working"
                avatar="https://images.unsplash.com/photo-1561344640-2453889cde5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3liZXJwdW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                image="https://images.unsplash.com/photo-1494178270175-e96de2971df9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW90aXZhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Post
                displayName={"Julia medeiros"}
                verified={false}
                username="Vatican news"
                text='Hoje será realizada a celebração das Vésperas pela paz na Ucrânia.'
                avatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                image="https://images.unsplash.com/photo-1603683319350-4c3fa44208ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmF0aWNhbm98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            />      
        </div>
    )
}

export default Feed;
