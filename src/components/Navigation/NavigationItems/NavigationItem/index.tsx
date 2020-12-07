import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { algNameToAlgType } from '../../../../utils/utilsFunctions';

import { AppActionTypes } from '../../../../store/app/types';
import {
    BUTTON_TYPE,
    DIVIDER_TYPE,
    ITEM_TYPE,
    LINK_TYPE,
    NavigationItemType,
} from '../../../../utils/types/graph-algorithms/navigation-item-type';
import { NO_ALGORITHM } from '../../../../utils/types/graph-algorithms/algorithm-types';
import { AlgorithmType } from '../../../../App';

type NavigationItemProps = {
    navType: NavigationItemType;
    href?: string;
    text: string;
    changeSelectedAlg?: (alg: AlgorithmType) => AppActionTypes;
    changeApprunningState?: (state: boolean) => AppActionTypes;
    selectedAlg?: AlgorithmType;
};

const NavigationItem = (props: NavigationItemProps): JSX.Element => {
    let item = null;
    if (props.navType === LINK_TYPE) {
        item = <Nav.Link href={props.href}>{props.text}</Nav.Link>;
    } else if (props.navType === ITEM_TYPE) {
        item = (
            <NavDropdown.Item
                onClick={() => {
                    if (props.changeSelectedAlg) props.changeSelectedAlg(algNameToAlgType(props.text));
                }}
            >
                {props.text}
            </NavDropdown.Item>
        );
    } else if (props.navType === DIVIDER_TYPE) {
        item = <NavDropdown.Divider />;
    } else if (props.navType === BUTTON_TYPE) {
        item = (
            <Form inline>
                <Button
                    disabled={props.selectedAlg === NO_ALGORITHM}
                    className="mr-auto"
                    onClick={() => {
                        if (props.changeApprunningState) props.changeApprunningState(true);
                    }}
                    variant="primary"
                >
                    {props.text}
                </Button>
            </Form>
        );
    }
    return item !== null ? item : <div></div>;
};

export default NavigationItem;
