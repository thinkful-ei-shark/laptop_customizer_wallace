import React, { Component } from 'react';
import FeatureItem from './FeatureItem';

class FeatureForm extends Component {

    getFeatureItemList = () => {
//               ['Processor','Operating System','Video Card','Display']
        return Object.keys(this.props.features).map((feature, idx) => {

            const featureHash = feature + '-' + idx;  // Processor-0, Operating System-1, ...
            
        // [ <FeatureItem />, <FeatureItem />, <FeatureItem />, <FeatureItem />]
        
            return (
              <FeatureItem 
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

    render( ) {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {this.getFeatureItemList()}
            </form> 
        )
    }
}

export default FeatureForm;



