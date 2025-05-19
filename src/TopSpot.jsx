// Define the TopSpot component using an arrow function
// It receives `name`, `description`, and `location` as props from the parent component (TopSpots)
const TopSpot = ({ name, description, location }) => (
  // Outer div used for testing and layout — helps identify each spot in tests
  <div data-testid="topspot">
    {/* Bootstrap-styled card container */}
    <div className="card shadow rounded mb-3">
      
      {/* Card body containing the main content */}
      <div className="card-body text-center">
        {/* Render the spot's name as the card title */}
        <h4 className="card-title">{name}</h4>

        {/* Render the spot's description below the title */}
        <p className="card-text">{description}</p>

        {/* Render a clickable link that opens the location in Google Maps */}
        <a
          href={`https://maps.google.com/?q=${location[0]},${location[1]}`} // Compose a URL using latitude and longitude
          className="btn btn-primary" // Bootstrap class for button with styling
          target="_blank" // Opens the link in a new tab
        >
          View location on Google Maps
        </a>
      </div>
    </div>
  </div>
);

// Export the component so it can be used in TopSpots.jsx
export default TopSpot;
