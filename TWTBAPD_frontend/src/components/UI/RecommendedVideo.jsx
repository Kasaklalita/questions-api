import React from "react";

const RecommendedVideo = ({ link }) => {
  return (
    <div
      width="100%"
      style={{ aspectRatio: "16 / 9", overflow: "hidden" }}
      className="card block"
    >
      <iframe
        width="100%"
        height="100%"
        src={link}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default RecommendedVideo;
