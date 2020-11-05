import React from 'react';



const Country = (props) => {
    const {name,population,region,flag}=props.countrydetails;
    const flagStyle={
        height:"50px",
        width:"80px"
    }
    const countryStyle={
        border:"2px solid gray",
        margin:"15px",
        padding:"10px"
    }

    const  handleAC=props.handleAddCountry;

    return (
        <div style={countryStyle}>
            <h3>This is  <span style={{color:'red'}}>{name}</span></h3>
            <img style={flagStyle} src={flag}></img>
            <h4>Popultion : <span style={{color:'green'}}>{population}</span></h4>
            <p>Region : <span style={{color:'#0E7094'}}>{region}</span></p> 
            <button onClick={() => handleAC(props.countrydetails)}>add country</button>        
        </div>
    );
};

export default Country;