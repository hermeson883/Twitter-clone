import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className='widgets'> 
            
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon"/>
                <input placeholder="Find the News" type="text"/>
                    
            </div>
            <div className="widgets_widgetContainer">
                <h2>What's happening </h2>
                <TwitterTweetEmbed tweetId={"1484582224502558724"} />
                    
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="cleverqazi"
                    options={{ height: 400}}
                />

                <TwitterShareButton 
                    url={"https://facebook.com/cleverprogamer"}
                    options={{text: "Feito com #react.js, por Hermeson do Vale Beserra", via: "cleverqazy"}}
                />

            </div>
        </div>
    );
}

export default Widgets  