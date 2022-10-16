import axios from "axios";
import { useState, useEffect } from "react";
import MemeList from "./components/MemeList";
import { MemeType } from "./types/MemeType";
import { keysToCamel } from "./utils";

function App() {
  const [memeData, setMemeData] = useState<MemeType[]>([]);
  const [loading, setLoading] = useState<Boolean>(false);

  const fetchMeme = async () => {
    setLoading(true);
    const { data } = await axios.get("https://api.imgflip.com/get_memes");
    setMemeData(keysToCamel(data.data.memes));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    fetchMeme();
  }, []);

  return (
    <>
      <div className="meme__header">
        <h1>MEME GALLERY</h1>
        <button
          className="btn__get-meme"
          disabled={loading ? true : false}
          onClick={fetchMeme}
        >
          Click to get memes
        </button>
      </div>

      {loading ? (
        <div className="loader__wrapper">
          <div className="loader"></div>
        </div>
      ) : (
        <MemeList memes={memeData} />
      )}
    </>
  );
}

export default App;
