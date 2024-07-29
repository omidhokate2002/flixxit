import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import { SwiperSlide } from "swiper/react";
import tmdbConfigs from "../../api/configs/tmdb.configs";
import NavigationSwiper from "./NavigationSwiper";

const MediaVideo = ({ video }) => {
  const iframeRef = useRef();

  useEffect(() => {
    if (video) {
      const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
      iframeRef.current.setAttribute("height", height);
    }
  }, [video]);

  return (
    <Box sx={{ height: "max-content" }}>
      {video && (
        <>
          <iframe
            key={video.key}
            src={`${tmdbConfigs.youtubePath(video.key)}?controls=1`}
            ref={iframeRef}
            width="100%"
            title={video.id}
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </>
      )}
    </Box>
  );
};

const MediaVideosSlide = ({ videos }) => {
  return (
    <NavigationSwiper>
      {videos.map((video, index) => (
        <SwiperSlide key={index}>
          <MediaVideo video={video} />
        </SwiperSlide>
      ))}
    </NavigationSwiper>
  );
};

export default MediaVideosSlide;
