import { dbService } from "fbase";
import React, { useEffect, useState } from "react";

const Home = () => {
    const [tweet, setTweet] = useState("");
    const [tweets, setTweets] = useState([]);
    const getTweets = async () => {
        const dbtweets = await dbService.collection("tweets").get();
        dbtweets.forEach(document => {
            const tweetObject = {
              ...document.data(),
              id: document.id,
        };
            setTweets((prev) => [tweetObject, ...prev]);
        });
    };
    useEffect(() => {
        getTweets();
    }, []);
    const onSubmit = (event) => {
        event.preventDefault();
        dbService.collection("tweets").add({
            tweet,
            createdAt: Date.now(),
        });
        setTweet("");
    };
    console.log(tweets);
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
        <div>
            {tweets.map((tweet) => (
            <div key={tweet.id}>
                <h4>{tweet.tweet}</h4>
            </div>
            ))}
        </div>
    </div>
    );
};

export default Home;