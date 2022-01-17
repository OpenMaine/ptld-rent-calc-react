import React from "react";
import { useState } from "react";
import UserSelect from './UserSelect';
import Exemptions from './Exemptions';

const Calculator = () => {
  const [selectedUser, setSelectedUser] = useState("Tenant");
  return(
    <>
      <UserSelect selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <Exemptions selectedUser={selectedUser} />
    </>
  )
};

export default Calculator;