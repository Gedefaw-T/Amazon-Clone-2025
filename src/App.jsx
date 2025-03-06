import React,{useContext, useEffect} from "react";
import Routing from "./Routing";
import { auth } from "./Pages/Utility/Firebase";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Pages/Utility/ActionType";


function App() {

  const [user, dispatch] = useContext(DataContext);

  // login user status
  useEffect(()=>{

    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        console.log(authUser)
      dispatch({
        type: Type.SET_USER,
        user: authUser
      })
    }
    else{
      dispatch({
      type: Type.SET_USER,
      user: null,
    })}
    })
        },[])




  return (
    <>
    {/* calling routed component */}
      <Routing />


    </>
  );
}

export default App;
