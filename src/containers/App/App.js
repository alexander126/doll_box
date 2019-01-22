import React, { Component } from 'react';
import Header from '../../components/Header';
import { Image } from 'semantic-ui-react';
import '../../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Image
          fluid
          src="https://as1.ftcdn.net/jpg/01/75/56/26/500_F_175562656_4n7SrWRdwPs6guIIhyK7DjqWYVWEu4wo.jpg"
        />
      </div>
    );
  }
}

export default App;
