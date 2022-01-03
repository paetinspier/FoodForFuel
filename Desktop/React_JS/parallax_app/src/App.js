import Container from "./components/Container";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <Container user="Paetin" />
              <Container user="Stella" />
              <Container user="Rya" />
              <Container user="Rebecca" />
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
