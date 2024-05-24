const VideoPlayer = () => {
  return (
    <div>
      <video
        controls={false}
        loop
        autoPlay
        muted
        playsInline
        className="banner-car"
      >
        <source src={"/videos/prohero.mp4"} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
