	// src/App.js
	import React from "react";
	import RoomList from "./components/RoomList";
  import AddRoom from "./components/AddRoom";
  import AddProperty from "./components/AddProperty";
	
	const App = () => {
	  return (
	    <div className="App">
	      <h1>Room Rent Service</h1>
	      <RoomList />
        <AddRoom />
        <AddProperty />
	    </div>
	  );
	};
	
	export default App;
