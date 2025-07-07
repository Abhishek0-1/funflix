import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 

function Youtube() {
  const [videos, setVideos] = useState([]);
  const API_KEY = "AIzaSyAbUocyT80MP1U6cwbLqQ2JlF6KWqr7pzk";
  console.log("component rerendrig");
  
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=reactjs&type=video&key=${API_KEY}`
        );
        const data = await res.json();
        setVideos(data.items);
      } catch (err) {
        console.error("API fetch failed", err);
      }
    };
    if(videos.length === 0){

      fetchVideos();
    }

    console.log("rerender all time");
    
  }, []);

  return (
    
    <div className="my-11">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {videos.map((video) => (
          <Link
            to={`/watch/${video.id.videoId}`}
            key={video.id.videoId}
            className="bg-white rounded shadow block"
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-full"
            />
            <div className="p-2">
              <h2 className="font-semibold">{video.snippet.title}</h2>
              <p className="text-sm text-gray-600">{video.snippet.channelTitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Youtube;
