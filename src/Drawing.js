import React, { Component } from "react";

class Drawing extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let classname = "svg-plate";
        return (<svg className={classname} width="1000" height="600">
            {/*<g className="edge">*/}
            {/*<path d="M500,80 L460,120"   stroke="black" stroke-width="3" fill="none" />*/}
            {/*</g>*/}
            <circle cx="600" cy="20" r="20"
                    stroke="red"
                    strokeWidth="1"
                    fill="none"
                    className="A"
            />
            <path d="M600,20 L500,100" stroke="black" strokeWidth="3" fill="none"/>

            <text x="600" y="20"
                  textAnchor="middle"
                  stroke="red"
                  strokeWidth="1px"
            > 24
            </text>
            <circle cx="520" cy="100" r="20"
                    stroke="red"
                    strokeWidth="1"
                    fill="none"
                    className="B"
            />
            <text x="520" y="100"
                  textAnchor="middle"
                  stroke="red"
                  strokeWidth="1px"

            > 24
            </text>

        </svg>)

    }
}

export  default Drawing;