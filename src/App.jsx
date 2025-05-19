// Import React hooks and modules
import { useState, useEffect } from "react"; // `useState` manages component state, `useEffect` runs side effects like data fetching
import axios from "axios"; // Axios is used to make HTTP requests
import TopSpots from "./TopSpots"; // Import the TopSpots component that will render the list of spots

// Define the main App component
const App = () => {
  // Declare state variable `topspots` to hold the fetched list of top spots
  // Starts as an empty array until the data is loaded
  const [topspots, setTopspots] = useState([]);

  // useEffect runs once when the component is first rendered
  useEffect(() => {
    // Fetch data from the provided API endpoint using axios
    axios
      .get("https://ccc.helloworldbox.com/items/top_spots") // Send GET request
      .then((response) => response.data.data) // Extract the nested `data` array from the response
      .then((data) => setTopspots(data)); // Update state with the fetched top spots
  }, []);

  // Return JSX that defines the UI structure
  return (
    <div className="container">
      {/* Page Heading with Bootstrap classes for styling */}
      <h1 className="text-center text-bg-primary m-2 p-2">
        San Diego Top Spots
      </h1>

      {/* Subtitle paragraph, also centered */}
      <p className="text-center">
        A list of the top 30 places to see in San Diego, California.
      </p>

      {/* Render the TopSpots component, passing in the fetched data as props */}
      <TopSpots spots={topspots} />
    </div>
  );
};

// Export the App component so it can be used by main.jsx or other modules
export default App;
