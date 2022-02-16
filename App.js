import React from 'react';
import Profile from './Profile';
function App(){
    return(
        <div>
        <h1 style={{fontSize:'24px',fontFamily:'sans-serif',color:'black'}}>Hello j and k</h1>
        {/* <Profile title="James phno"/>
        <Profile title="Toshif no"/> 
        <Profile/>        */}

        {/* add(10,20) */}
        <Profile title="React" desc="10 Days Workshop" />
        <Profile title="Flutter" desc="10 Days Workshop" />
        <Profile title="Java" desc="10 Days Workshop" />
        <Profile title="C++" desc="10 Days Workshop" />
        <Profile title="NG" desc="10 Days Workshop" />
        

        </div>
    )
}
export default App