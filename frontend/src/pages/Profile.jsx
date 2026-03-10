import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

function Profile() {
  const { user } = useContext(ShopContext);

  return (
    <div style={{ padding: "20px" }}>
         <div className=' py-8 text-3xl'>
          <Title text1={'PROFILE'} text2={'DETAILS'}/>
        
        </div>

      <div style={{ border: "1px solid #ccc", padding: "20px", width: "300px" }}>
        <p className="text-gray-700"><strong>Name:</strong> {user?.name}</p>
        <p className="text-gray-700"><strong>Email:</strong> {user?.email}</p>
      </div>
    </div>
  );
}

export default Profile;