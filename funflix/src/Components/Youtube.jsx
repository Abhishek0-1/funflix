import React from 'react'
import { useEffect, useState } from "react";
import { Link } from 'react-router';


function Youtube() {
  const [videos, setVideos] = useState([]);
  const API_KEY = "AIzaSyAbUocyT80MP1U6cwbLqQ2JlF6KWqr7pzk"; // Replace with yours
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=reactjs&type=video&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setVideos(data.items));
  }, []);


  return (
    <div className='h-85'>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {videos.map((video) => (
          <Link
            to={`/watch/${video.id.videoId}`}
            key={video.id.videoId}
            className="bg-white rounded shadow block"
          >
            <div key={video.id.videoId} className="bg-white rounded shadow">
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full"
              />
              <div className="p-2">
                <h2 className="font-semibold">{video.snippet.title}</h2>
                <p className="text-sm text-gray-600">
                  {video.snippet.channelTitle}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Youtube
