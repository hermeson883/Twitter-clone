import React from 'react';
import './TweetBox.css';
import { Avatar, Button} from "@material-ui/core";

function TweetBox() {
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox_input'>
                    <Avatar src="https://images.unsplash.com/flagged/photo-1563536310477-c7b4e3a800c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRldnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                    <input placeholder ="what's happening?" type='text'/>
                    {/*<input placeholder ="Enter your Image URL" />*/}
                </div>
                <input
                    className="tweetBox_imageInput"    
                    placeholder= "Optional: Enter image URL"
                    type="text"
                />
                
                <Button className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
