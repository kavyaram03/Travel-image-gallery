function ImageCard(props) {
  return (
    <article className="card">

      <div className="image-container">
        <img src={props.image} alt={props.title}></img>

        <span>{props.location}</span>
      </div>

      <div className="card-content">
        <h2>{props.title}</h2>

        <p>{props.description}</p>

        <div className="discover">
          Discover <span>↗</span>
        </div>
      </div>

    </article>
  )
}

export default ImageCard