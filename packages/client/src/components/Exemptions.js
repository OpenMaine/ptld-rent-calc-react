import React from "react";
import { useState } from 'react';
import { tenantExemptQs } from "../assets/tenantExemptQs";
import { landlordExemptQs } from "../assets/landlordExemptQs";

const Exemptions = ({ selectedUser }) => {
  const questions = (selectedUser === "Tenant" ? tenantExemptQs : landlordExemptQs);
  const [checkedItems, setCheckedItems] = useState([])
  const onQuestionSelection = (e) => {
    if (e.target.checked){
      setCheckedItems([
        ...checkedItems,
        { id: e.target.id, text: e.target.value }
      ]);
    } else {
      setCheckedItems(checkedItems.filter((item) => item.id !== e.target.id))
    }
    console.log(checkedItems)
  }
  
  return (
    <div className="col-9">
      <h3>Do any of these apply to you?</h3>
      {questions.map(q => {
        return (
          <div className="form-check" key={q.id} >
            <input 
              className="form-check-input" 
              id={q.id} 
              type="checkbox" 
              value={q.text} 
              onChange={(e) => onQuestionSelection(e)}
            />
            <label className="form-check-label" htmlFor={q.id}>
              {q.text}
            </label>
          </div>
        )
      })}
    </div>
  )
};

export default Exemptions;