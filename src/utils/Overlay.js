import React, { useRef, useState } from 'react';
import { Overlay, Tooltip } from 'react-bootstrap';
import {BsCart3} from "react-icons/bs";

const IconWithTooltip = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const targetRef = useRef(null);

    // const handleMouseEnter = () => {
    //     setShowTooltip(true);
    // };
    //
    // const handleMouseLeave = () => {
    //     setShowTooltip(false);
    // };

    return (
        <div ref={targetRef} onClick={() => {setShowTooltip(!showTooltip)}}>
            <BsCart3 size={40} color="pink"/>

            <Overlay target={targetRef.current} show={showTooltip} placement="top">
                {(props) => (
                    <Tooltip id="tooltip" {...props} >
                        5
                    </Tooltip>
                )}
            </Overlay>
        </div>
    );
};

export default IconWithTooltip;
