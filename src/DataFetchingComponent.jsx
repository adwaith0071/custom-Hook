import React from "react";
import useFetchData from "./useFetchData";
import "./App.css";

const DataFetchingComponent = () => {
  const { data, loading, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/users"
  ); // Example API

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1 className="title">User Details</h1>
      <div className="data-list">
        {data.map((user) => (
          <div key={user.id} className="data-item">
            <h2 className="user-name">{user.name}</h2>
            <p className="user-email">Email: {user.email}</p>
            <p className="user-phone">Phone: {user.phone}</p>
            <p className="user-address">
              Address: {user.address.street}, {user.address.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataFetchingComponent;
