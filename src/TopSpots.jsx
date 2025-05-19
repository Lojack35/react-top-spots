// Import the TopSpot component — used to display a single spot's card
import TopSpot from "./TopSpot";

// Define the TopSpots component, which receives a prop called `spots`
// `spots` is an array of all the top spots fetched from the API
const TopSpots = ({ spots }) => {
  return (
    // The outer container with a data-testid for testing purposes
    <div data-testid="topspots">
      {/* Loop through each spot in the spots array using .map() */}
      {spots.map((topspot) => (
        // For each spot, render a TopSpot component and pass it the necessary props
        <TopSpot
          key={topspot.id} // A unique key helps React track each item in the list efficiently
          name={topspot.name} // Pass the name of the spot as a prop
          description={topspot.description} // Pass the description of the spot
          location={topspot.location} // Pass the location (latitude, longitude array)
        />
      ))}
    </div>
  );
};

// Export the TopSpots component so it can be used in App.jsx
export default TopSpots;
