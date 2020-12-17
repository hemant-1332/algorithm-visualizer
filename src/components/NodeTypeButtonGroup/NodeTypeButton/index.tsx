import React, { Dispatch, SetStateAction } from 'react';
import NodeTypeImage from './NodeTypeImage';
import classes from './NodeTypeButton.module.css';
import { NodeTypeButtonType } from '../../../utils/types/graph-types/node-type-button-type';

type NodeTypeButtonProps = {
    buttonType: NodeTypeButtonType;
    text: string;
    image: string;
    active: boolean;
    setActiveNodeButtonType: Dispatch<SetStateAction<NodeTypeButtonType>>;
};

const NodeTypeButton = (props: NodeTypeButtonProps): JSX.Element => {
    const cssClasses = [classes.nodeTypeButton];
    if (props.active) {
        cssClasses.push(classes.nodeTypeButtonActive);
    }

    return (
        <button className={cssClasses.join(' ')} onClick={() => props.setActiveNodeButtonType(props.buttonType)}>
            <NodeTypeImage image={props.image} altTxt={props.text} />
            {props.text}
        </button>
    );
};

export default NodeTypeButton;
