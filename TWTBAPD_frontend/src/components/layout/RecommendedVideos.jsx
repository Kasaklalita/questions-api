import React, { useEffect, useState } from "react";
import axios from "axios";
import RecommendedVideo from "../UI/RecommendedVideo";

const RecommendedVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      await axios
        .get("videos/")
        .then((response) => {
          console.log(response.data);
          setVideos(response.data);
        })
        .catch((error) => console.log(error));
    };
    fetchVideos();
  }, []);

  return (
    <div className="content">
      <h4>Видео для подготовки:</h4>
      {videos.map((video) => {
        return (
          <RecommendedVideo link={video.link} key={video.id}/>
        );
      })}
    </div>
  );
};

export default RecommendedVideos;
