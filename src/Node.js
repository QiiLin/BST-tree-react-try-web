import React from "react";

class Node {
    constructor(keys, x, y) {
        this.value = keys;
        this.left = null;
        this.right = null;
        this.x = x;
        this.y = y;
        this.turning = false;
    }

    setxy(x, y) {
        this.x = x;
        this.y = y;
    }

    extend(direction, ischild) {
        if (this.turning === true || ischild) {
            if (direction) {
                this.x += 80;
            } else {
                this.x -= 80
            }
            if (this.left) {
                this.left.extend(direction, true)
            }
            if (this.right) {
                this.right.extend(direction, true)
            }
        }
    }

    // drawing current node
    drawit() {
        return <circle cx={this.x} cy={this.y} r="20"
                       stroke="red"
                       strokeWidth="1"
                       fill="none"/>

    }

    drawtxt() {
        return <text x={this.x} y={this.y}
              textAnchor="middle"
              stroke="red"
              strokeWidth="1px"> {this.value} </text>
    }

    display(role) {
        console.log(role, this.x, this.y, this.value);

        if (this.left) {
            this.left.display("left");
        }
        if (this.right) {
            this.right.display("right");
        }
    }

    insert(key, init_direction) {
        if (this.value !== key) {
            // start insert
            if (this.value < key) {
                // if right is not None
                if (this.right) {
                    // check if init_direction is null
                    if (init_direction === null) {
                        // true represents right
                        init_direction = true;
                    }
                    // if the prevents is false meaning left we found a turning
                    if (!init_direction) {
                        init_direction = !init_direction;
                        this.turning = true;
                    }
                    this.right.insert(key, init_direction);
                    this.extend(false, false);
                    this.turning = false;

                } else {
                    this.right = new Node(key, 0, 0);
                    this.right.setxy(this.x + 80, this.y + 80);
                    if (init_direction === false) {
                        this.turning = true;
                    }
                    this.extend((init_direction === true), false);
                    this.turning = false;
                }
            } else {
                if (this.left) {
                    if (init_direction === null) {
                        init_direction = false;
                    }
                    if (init_direction) {
                        init_direction = !init_direction;
                        this.turning = true;
                    }
                    this.left.insert(key, init_direction);
                    this.extend(true, false);
                    this.turning = false;
                } else {
                    this.left = new Node(key, 0, 0);
                    this.left.setxy(this.x - 80, this.y + 80);
                    if (init_direction === true) {
                        this.turning = true;
                    }
                    this.extend((init_direction === true), false);
                    this.turning = false;
                }
            }


        }
        return this;
    }

}

export default Node;