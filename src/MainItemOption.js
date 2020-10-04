import React, { Component } from 'react';
import slugify from 'slugify';
import USCurrencyFormat from './USCurrencyFormat';

class MainItemOption extends Component {

    render() {
        // deconstructed to shorten code
        const { itemHash, item, feature } = this.props;
        console.log(item, itemHash, feature)
        return (
            <div key={itemHash} className="feature__item">
                <input
                    type="radio"
                    id={itemHash}
                    className="feature__option"
                    name={slugify(feature)}
                    checked={item.name === this.props.selected[feature].name}
                    onChange={() => this.props.updateFeature(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
            </div>
        )
    }
}

export default MainItemOption;