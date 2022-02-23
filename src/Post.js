import React from 'react';
import './Post.css';
import {Avatar} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutLineIcon from '@material-ui/icons/Chat';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from "@material-ui/icons/Favorite";
import PublishIcon from "@material-ui/icons/Publish";

function Post({displayName, verified, username, image,avatar, text,}){ 
    return (
        <div className='post'>
            <div className='post_avatar'>
                <Avatar src= {avatar} />
            </div>
            <div className='post_Body'>
                <div className='post_header'>
                    <div className='post_headertext'>
                        <h3>
                            {displayName} {''} 
                             {verified && <VerifiedUserIcon className='post_badge'/>} 
                            <div className="userName">
                                @{username}
                            </div>
                        </h3>
                    </div>
                    <div className='post_headerDescription'>
                        <p>{text}</p>
                    </div>
                   <img className="img" src={image}
                    alt="foto"/>
                    <div className="post_footer">               
                        <ChatBubbleOutLineIcon fontSize="small"/>
                            <RepeatIcon fontSize="small"/>
                            <FavoriteBorderIcon fontSize="small"/>
                            <PublishIcon fontSize="small"/>
                    </div>    
                </div>
            </div>
        </div>
    );
}

export default Post;
