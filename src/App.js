/**************Thomas Wallace************* Laptop Customizer Assignment ***********
 * 
 * 
 * 
 *     The App Component will consist of 2 sub-Components (MainForm and Cart)
 * 
 *      The MainForm Component will contain a MainItem component inside of a loop and called 
 *        for however many items are in array.
 *       
 *        Those MainItem Components will contain a MainItemOption Components
 * 
 *        The Cart Component will contain a CartItem component listing all the items selected by user
 *          as well as a CartTotal Component simply listing total price of all items selected.
 *        
 * 
 *         Structure as follows
 *                    <Header /> ???? I see no reason for it
 *                    <App />
 *                          <MainForm />
 *                                <MainFormItem /> x4
 * 
 *                           <Cart />
 *                                <CartItem />
 *                                <CartTotal />
 ******************************************************************************/





import React, { Component } from 'react';
import Cart from './Cart';
import './App.css';
import MainForm from './MainForm';

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
          <MainForm
            features={this.props.features}
            selected={this.state.selected}
            updateFeature={this.updateFeature}
          />
          <Cart selected={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;
