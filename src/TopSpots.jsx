import TopSpot from "./TopSpot";

const TopSpots = ({ spots }) => {
  return (
    <div className="container-fluid" data-testid="topspots">
      {spots.map((topspot) => (
        <div className="card shadow rounded">
          <img className="card-img-top" alt="Image Here" />
          <div className="card-body text-center">
            <h5 className="card-title">{topspot.name}</h5>
            <p className="card-text">{topspot.description}</p>
          </div>
          <div className="card-footer">
            <a
              href={`https://www.google.com/maps?q=${topspot.location[0]},${topspot.location[1]}}`}
              className="card-link"
            >
              View location on Google Maps
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopSpots;
