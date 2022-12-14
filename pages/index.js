import data from "../data/config.json"
import { CSSReset } from "./../src/components/CSSReset.js";

import Menu from "../src/components/Menu.js";
import ChannelCover from "../src/components/ChannelCover.jsx";
import ChannelProfile from "../src/components/ChannelProfile.jsx";
import Playlist from "../src/components/Playlist.jsx";
import Parceiros from "../src/components/Parceiros.jsx";

export default function HomePage() {
  return (
    <>
      <helmet>
        <title>AluraTube</title>
      </helmet>
      <CSSReset />
      <main>
        <Menu />
        <ChannelCover/>
        <ChannelProfile />
        <Playlist {...data.playlists}/>
        <Parceiros {...data.parceiros}/>
      </main>
    </>
  );
}

