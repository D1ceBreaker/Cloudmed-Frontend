import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Home/Elements/Homepage";
import Registrationpage from "./Pages/Registration/Elements/Registrationpage";
import {AuthContext} from "./Context/Context";
import Profilepage from "./Pages/Profile/Elements/Profilepage";
function App() {
    const [isAuth, setAuth] = useState(false)
    return (
      <AuthContext.Provider value={{
          isAuth,
          setAuth
      }}>
          <Routes>
              <Route path='/' element={<Homepage/>}/>
              <Route path='/reg' element={<Registrationpage/>}/>
              <Route path='/profile' element={<Profilepage/>}/>
          </Routes>
      </AuthContext.Provider>

  );
}

export default App;
