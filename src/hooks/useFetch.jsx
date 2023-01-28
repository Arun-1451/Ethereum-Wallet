import { GiphyFetch } from "@giphy/js-fetch-api";
import { useEffect, useState } from "react";

// const API_KEY = new GiphyFetch("2rxTLB067Zz2hmj4xMkefXlCmL0dJqUU");
const API_KEY = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);
// const APIKEY = import.meta.env.REACT_APP_GIPHY_API;
console.log(API_KEY);

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState("");

  const fetchGifs = async () => {
    try {
      const response = await fetch(
        "https://media.giphy.com/media/v0u7eU0nSmOJ0hGf6n/giphy.gif"
      );

      const { data } = await response.json();

      setGifUrl(data[0]?.images?.downsized_medium.url);
    } catch (error) {
      setGifUrl("https://media.giphy.com/media/v0u7eU0nSmOJ0hGf6n/giphy.gif");
      // console.log("gif has not been found");
    }
  };

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
};

export default useFetch;
