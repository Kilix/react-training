import React, {PropTypes, Component} from 'react';

const getContextTheme = BaseComponent => {
    return class GetContextTheme extends Component {

        static displayName = `${BaseComponent.name}GetContextTheme`;

        static contextTypes = {
            theme: PropTypes.string,
        };

        render() {
            const {theme = 'default'} = this.context;
            const baseProps = {
                theme,
                ...this.props,
            };

            return (
                <BaseComponent
                    {...baseProps}
                />
            );
        }
    };
};

export default getContextTheme;
