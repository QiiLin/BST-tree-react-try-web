import React, { Component } from "react";

class Drawing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            svg_printer: []}
    }
// todo make drawing working
// we can call function that change the state inside the rendert
    // b/c change state will render the stuff again with will result a infinite loop
    // so pass in the holder to record the result and call it in render
    drwa_tree = (root, holder) => {
        if (root === null){
          return holder;
        } else {
            holder.push(root.drawit());
            holder = this.drwa_tree(root.left, holder);
            holder = this.drwa_tree(root.right, holder);
            return holder;
        }
    }

    render() {
        let classname = "svg-plate";
        let holder = this.drwa_tree(this.props.node, []);
        return (<svg className={classname} width="1000" height="600">
            {holder}

            {/*<g className="edge">*/}
            {/*<path d="M500,80 L460,120"   stroke="black" stroke-width="3" fill="none" />*/}
            {/*</g>*/}
            {/*<circle cx="600" cy="20" r="20"*/}
                    {/*stroke="red"*/}
                    {/*strokeWidth="1"*/}
                    {/*fill="none"*/}
                    {/*className="A"*/}
            {/*/>*/}
            {/*<path d="M600,20 L500,100" stroke="black" strokeWidth="3" fill="none"/>*/}

            {/*<text x="600" y="20"*/}
                  {/*textAnchor="middle"*/}
                  {/*stroke="red"*/}
                  {/*strokeWidth="1px"*/}
            {/*> 24*/}
            {/*</text>*/}
            {/*<circle cx="520" cy="100" r="20"*/}
                    {/*stroke="red"*/}
                    {/*strokeWidth="1"*/}
                    {/*fill="none"*/}
                    {/*className="B"*/}
            {/*/>*/}
            {/*<text x="520" y="100"*/}
                  {/*textAnchor="middle"*/}
                  {/*stroke="red"*/}
                  {/*strokeWidth="1px"*/}

            {/*> 24*/}
            {/*</text>*/}

        </svg>)

    }
}

export  default Drawing;