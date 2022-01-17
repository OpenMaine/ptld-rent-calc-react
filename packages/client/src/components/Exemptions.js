import React from "react";

const TenantQs = () => {
  return (
    <>
      <ul>
        <li>  Your building has more than four units</li>
        <li>  (<strong>If no to above</strong>) Your landlord lives in the building</li>
        <li>  You live in a dorm or other school housing, or in a building owned by the Portland Public School system</li>
        <li>  Your unit is owned or operated by a municipal housing authority (such as Portland Housing Authority)</li>
        <li>  Your unit is funded or controlled by a government agency, such as Section 8 housing (Note: this excludes Section 8 vouchers.  If you are using a Section 8 voucher, this item does not apply to you)</li>
        <li>  You live in an accessory dwelling</li>
        <li>  You live in a church, hospital convent, religious facility, or extended care facility</li>
      </ul>
    </>
  )
};

const LandlordQs = () => {
  return (
    <>
      <li>  Your rental property has <strong>more than four</strong> units</li>
      <li>  Your rental property has <strong>four units or fewer</strong>, AND one of the units is your primary residence</li>
      <li>  Your rental property is an accessory dwelling</li>
    </>
  )
}

const Exemptions = ({ selectedUser }) => {
  return (
    <div className="col-9">
      <h3>Do any of these apply to you?</h3>
      {selectedUser=="Tenant" ? <TenantQs /> : <LandlordQs />}
    </div>
  )
};

export default Exemptions;