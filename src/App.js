import React, { Component } from 'react';
import Cart from './Cart';
import './App.css';
import FeatureForm from './FeatureForm';


class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  updateFeature = (feature, newValue) => {


    const selected = Object.assign({}, this.state.selected);
    
    selected[feature] = newValue;
    
    this.setState({
      selected
    });
  };

  render() {
    


    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          
          

          { /* Feature Form Component */ }
          <FeatureForm 
            features={this.props.features} 
            selected={this.state.selected} 
            updateFeature={this.updateFeature}
          />
          { /* End of Feature Form Component */ }
          

          { /* Cart Component */ }
          <Cart selected={this.state.selected}/>
          { /* End of Cart Component */ }          


        </main>
      </div>
    );
  }
}

export default App;
