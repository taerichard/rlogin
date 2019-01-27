import React from "react";

const Home = props => {
  return (
    <div>
      <button onClick={props.handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
