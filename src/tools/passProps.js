import {cloneElement, Children} from 'react';
import _omit from 'lodash/omit';

export default function(children, props) {
    return Children.map(children, (child, i) => {
        return cloneElement(child, {...props, ...child.props, childIndex: i});
    });
}
