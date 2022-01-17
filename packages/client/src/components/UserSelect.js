import React from "react";

const UserSelect = ({ selectedUser, setSelectedUser }) => {
  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setSelectedUser(target.value);
    }
  }
  return (
    <div className="col">
      <label htmlFor="user">I am a:</label>
      <label className="d-block">
        <input type="radio" name="user" value="Tenant" checked={selectedUser=="Tenant"} onChange={handleChange}/>
        <span>Tenant</span>
      </label>
      <label>
        <input type="radio" name="user" value="Landlord" checked={selectedUser=="Landlord"} onChange={handleChange}/>
        <span>Landlord</span>
      </label>
    </div>
  )
};

export default UserSelect;