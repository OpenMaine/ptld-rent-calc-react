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
      <div className="form-check">
        <input className="form-check-input" type="radio" name="user" value="Tenant" id="tenant" checked={selectedUser==="Tenant"} onChange={handleChange} />
        <label className="form-check-label" htmlFor="tenant">
          Tenant
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="user" value="Landlord" id="landlord" checked={selectedUser==="Landlord"} onChange={handleChange} />
        <label className="form-check-label" htmlFor="landlord">
          Landlord
        </label>
      </div>
    </div>
  )
};

export default UserSelect;