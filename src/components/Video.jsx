
export default function video(props) {
  return (
      <div className="video">
        <a href={props.url} className="video__link">
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
