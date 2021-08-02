import { ProgressPlugin } from "webpack";
import React from "react";

const Collection = ({ children }) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    );
};

export default Collection