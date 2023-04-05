import React from 'react';

const Profile = (props) => {
  return (
    <div style={{backgroundColor:'plum' }}>
    <div className='cont2'>
    {props.photo}
      <h4>Name :{props.name}</h4>
      <h4>lastName:{props.lastName} </h4>
     <h4> Profession:{props.profession}</h4>
     </div>
     
    </div>
  );
}

export default Profile;
