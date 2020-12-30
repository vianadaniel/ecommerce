import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import Feed from './screens/Feed'
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter as Router, Route} from 'react-router-dom'
const App = () => {
  return (
    <Router>
    <Header />
    <main className="py-3">
      <Container>
        <Route path="/" component={Feed} exact />
        <Route path="/product/:id" component={ProductScreen} />
      
      </Container>

    </main>
    <Footer />  
    </Router>
  );
}

export default App;
