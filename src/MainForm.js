import React, { Component } from 'react';
import MainItem from './MainItem';

class MainForm extends Component {

  // put this block off code to generate options list in its own function
  getFeatureItemList = () => {
    // maps through objects and returns Mainitem compenent for each item
    return Object.keys(this.props.features).map((feature, idx) => {

      const featureHash = feature + '-' + idx;

      return (
        <MainItem
          key={featureHash}
          featureHash={featureHash}
          name={feature}
          options={this.props.features[feature]}
          updateFeature={this.props.updateFeature}
          selected={this.props.selected}
        />
      );

    });
  }

  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {this.getFeatureItemList()}
      </form>
    )
  }
}

export default MainForm;



