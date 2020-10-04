import React from 'react';
import slugify from 'slugify';
import MainItemOption from './MainItemOption';


class MainItem extends React.Component {

    generateOptionList = () => {
        return this.props.options.map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
                <MainItemOption
                    key={itemHash}
                    id={itemHash}
                    feature={this.props.name}
                    itemHash={itemHash}
                    item={item}
                    updateFeature={this.props.updateFeature}
                    selected={this.props.selected}
                />
            );
        });
    }

    render() {
        const { name, featureHash } = this.props;
        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{name}</h3>
                </legend>
                {this.generateOptionList()}
            </fieldset>
        )
    }
}

export default MainItem;