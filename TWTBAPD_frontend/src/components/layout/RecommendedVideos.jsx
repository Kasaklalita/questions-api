import React, { useEffect, useState } from "react";
import axios from "axios";
import RecommendedVideo from "../UI/RecommendedVideo";

const RecommendedVideos = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    await axios
      .get("videos/", {
        params: {
          'random': true,
          'max-videos': 3
        }
      })
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="content">
      <div className="is-flex is-justify-content-space-between">
        <h4>Видео для подготовки:</h4>
        <a onClick={fetchVideos}>Обновить</a>
      </div>
      {videos.map((video) => {
        return <RecommendedVideo link={video.link} key={video.id} />;
      })}
    </div>
  );
};

export default RecommendedVideos;
