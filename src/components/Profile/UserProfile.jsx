import React from "react";
import { useAuth } from "../../context/AuthContext";

const UserProfile = () => {
  const { user } = useAuth();
  return <div>Welcome, {user?.email}</div>;
};

export default UserProfile;
