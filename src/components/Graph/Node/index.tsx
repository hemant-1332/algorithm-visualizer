import React from 'react';
import classes from './Node.module.css';

export const WEIGHTED_NODE = 'WEIGHTED_NODE';
export const SIMPLE_NODE = 'SIMPLE_NODE';
export const WALL_NODE = 'WALL_NODE';
export const SOURCE_NODE = 'START_NODE';
export const DESTINATION_NODE = 'DESTINATION_NODE';
export const VISITED_NODE = 'VISITED_NODE';
export const SHORTEST_PATH_NODE = 'SHORTEST_PATH_NODE';

export type NodeType =
    | typeof WEIGHTED_NODE
    | typeof SIMPLE_NODE
    | typeof WALL_NODE
    | typeof SOURCE_NODE
    | typeof DESTINATION_NODE
    | typeof VISITED_NODE
    | typeof SHORTEST_PATH_NODE;

type NodeProps = {
    onMouseEnter: (x: number, y: number) => void;
    onMouseDown: (x: number, y: number) => void;
    nodeType: NodeType;
    row: number;
    col: number;
    weight?: number;
};

const Node = (props: NodeProps): JSX.Element => {
    const cssClasses = [classes.node];
    if (props.nodeType === SOURCE_NODE) {
        cssClasses.push(classes.source);
    } else if (props.nodeType === DESTINATION_NODE) {
        cssClasses.push(classes.destination);
    } else if (props.nodeType === WALL_NODE) {
        cssClasses.push(classes.wall);
    } else if (props.nodeType === WEIGHTED_NODE) {
        cssClasses.push(classes.weight);
    } else if (props.nodeType === VISITED_NODE) {
        cssClasses.push(classes.visited);
    } else if (props.nodeType === SHORTEST_PATH_NODE) {
        cssClasses.push(classes.shortestPath);
    }
    return (
        <div
            onMouseDown={() => props.onMouseDown(props.row, props.col)}
            onMouseEnter={() => props.onMouseEnter(props.row, props.col)}
            className={cssClasses.join(' ')}
        >
            {props.nodeType === WEIGHTED_NODE ? props.weight : ''}
        </div>
    );
};
export default React.memo(Node);