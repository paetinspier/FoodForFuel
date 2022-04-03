import React, { useState, useEffect } from "react";
import './App.css';
import { Nav } from "react-bootstrap";
import Header from './components/Header';
import Body from './components/Body';
import Routes from "./Routes";
import { AppContext } from "./lib/contextLib";
import { Auth } from "aws-amplify";
import { useHistory } from "react";
import { onError } from "./lib/errorLib";

function App() {
  return (
    <div>
      <Header/>
      <Body/>
    </div>
  );
}

/*
function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const history = useHistory();

  useEffect(() => {
    onLoad();
  }, []);
  
  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        onError(e);
      }
    }
  
    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();
  
    userHasAuthenticated(false);
  
    history.push("/login");
  }

  return (
  
    <div>
      {isAuthenticated ? (
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
      ) : (
    <>
      <Header/>
      <Body/>
    </>
)}
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
    
  );
}
*/

export default App;


/*
Macro nutrient targets:

for women:
  BMR (kcal / day)= 10 × weight (kg) + 6.25 × height (cm) – 5 × age (y) – 161 (kcal / day)

for men:
  BMR (kcal / day)= 10 × weight (kg) + 6.25 × height (cm) – 5 × age (y) – 161 (kcal / day)

these equations calculate the maintenance calories that a person should meet to stay at their current weight
the calculated BMR should be multiplied by a PAL constant which varies depending on the persons exercise level
    1.2 - little to no exercise
    1.4 - light exercise 1-2 times a week
    1.6 - Moderate exercise 2-3 times/week
    1.75 - Hard exercise 3-5 times/week
    2 - Physical job or hard exercise 6-7 times/week
    2.4 - Professional athlete

distribution of macros is as following

    45-65% Carbohydrates, 10-35% Protein and 20-35% Fat.

  if you are trying to lose weight:
    10-30% Carbohydrates, 40-50% Protein and 30-40% Fat.

*/