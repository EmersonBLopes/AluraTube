import styled from "styled-components";

const StyledVideo = styled.div`
  .video {
    display:inline-block;
    position:relative;
  }

  .video__link {
    cursor: pointer;
  }

  .thumbnail-container{
    display:inline-flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    width:100%;
    height:250px;
    margin:0;
  }

  .video__thumbnail {
    height: 340px;
  }

  .video__titulo{
    position:absolute;
    bottom:20px;
    font-weight:bold;
  }

  @media screen and (min-width:375px){
    .video{
      width:50%;
    }
  }
`;

export default function video(props) {
  return (
      <div className="video">
        <a hrfe={props.url} className="video__link">
          <div className="thumbnail-container">
            <img
              src={props.thumb}
              alt="Thumbnail do video"
              className="video__thumbnail"
            />
          </div>
          <p className="video__titulo">{props.title}</p>
        </a>
      </div>
  );
}
