import { dbService } from "fbase";
import React, { useState } from "react";

const Home = () => {
    const [tweet, setTweet] = useState("");
    const onSubmit = (event) => {
        event.preventDefault();
        dbService.collection("tweets").add({
            tweet,
            createAt: Date.now(),
        });
        setTweet("");
    };
    const onChange = (event) => {
        const { 
            target: { value },
        } = event;
        setTweet(value);
    };
    return (
    <div>
        <form onSubmit={onSubmit}>
            <input 
                value={tweet}
                onChange={onChange}
                type="text"
                placeholder="What's on your mind?"
                maxLength={120}
            />
            <input type="submit" value="Tweet" />
        </form>
    </div>
    );
};

export default Home;