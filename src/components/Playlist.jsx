import styled from "styled-components";
import Video from "./Video.jsx";

const StyledPlaylist = styled.section`
  .playlist {
    display: flex;
    flex-direction: column;
    width: 100vw;
    box-sizing:border-box;
  }

  .playlist__name{
    font-family:var(--main-font);
    margin:1rem 0 1rem 3rem;
  }

  .videos-container {
    display: flex;
  }

  @media screen and (min-width: 375px) {
      .playlist__name{
        margin:1rem 0 1rem 1rem;
      }
      .videos-container::-webkit-scrollbar {
        display: none;
      }

      /* Hide scrollbar for IE, Edge and Firefox */
      .videos-container{
        overflow-x: scroll;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }
    }
    .video {
      width: 50%;
      margin-right: 1rem;
    }

    .video:first-child {
      margin-left: 0.5rem;
    }

    .thumbnail-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 120px;
      overflow: hidden;
    }

    .video__thumbnail {
      width: 220px;
    }

    .video__titulo {
      font-family: var(--main-font);
      font-size: 1.1rem;
    }
  }
`;

export default function Playlist(props) {
  const playListIndex = Object.keys(props);
  return (
    <StyledPlaylist>
      {playListIndex.map((indexOfPlaylist) => {
        const playListVideoIndex = Object.keys(props[indexOfPlaylist]);
        return (
          <section className="playlist">
            <h3 className="playlist__name">{indexOfPlaylist}</h3>
            <div className="videos-container">
              {playListVideoIndex.map((index) => {
                return (
                  <Video
                    {...props[indexOfPlaylist][index]}
                    className="playlist__video"
                  />
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledPlaylist>
  );
}
