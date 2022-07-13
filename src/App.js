
import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {

  const [alerting, setalerting] = useState(null);

  function showalert(messege , typeval)
  {
       setalerting({
         type : typeval,
         msg : messege

       })

       setTimeout(() => {

         setalerting(null);
        
       }, 1600);

    

  }
  const [mode, setmode] = useState("light");
  const [modename, setmodename] = useState("Enable");
  const [bordercolor, setbordercolor] = useState('#121212');
  const [actval, setactive] = useState("")

  function actived()
  {
      console.log("i am actived")
      setactive("active");
  }

  let togglemode = ()=> {

      

      if(mode === "light")
      {
        setmode('dark');
        setmodename('Disable');
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "white";
        setbordercolor('white');
        showalert("Dark mode has been enabled!" , "Success! ");
        document.title = 'TEXT FORM DARK';
        
      }
      else
      {
        setmode('light');
        setmodename('Enable');
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        setbordercolor('#121212');
        showalert("Dark mode has been disabled!" , "Success! ");
        document.title = 'TEXT FORM LIGHT';
      }

      fun();
  }

  const [myStyle, setmyStyle] = useState({
    color: "black",
    backgroundColor : "white"
 })

 

function fun()
{
    
    if(myStyle.color === "black")
    {
        setmyStyle({
            color : "white",
            backgroundColor : "#121212"

        })

        
    }
    else{

        setmyStyle({
            color : "black",
            backgroundColor : "white"

        })

        
    }

}
  
  return (
    
   
        
    <Router>

      <Navbar title = "TExT Form" Home = "Home" mode = {mode} click = {actived} actval1 = {actval} toggle = {togglemode} modename={modename} />
      
      <Alert alert = {alerting}/>
      

      <div className="container" style={{"margin" : "50px"}}>

          <Switch>

            {/* position of <Route/> tag matters for navigation in <Switch> tag.. */}
            

            <Route exact path="/aboutus">

              <AboutUs stylish = {myStyle}/>             
              
            </Route>

            <Route exact path="/">
              
              <TextForm border={bordercolor} sentalert={showalert}/>
              
            </Route>

            
          </Switch>
        
      </div>

    </Router>
    

  
  );
}

export default App;
