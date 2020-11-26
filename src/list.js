import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ['Apple','Banana','Orange','Strawberry','Pomegranat'],
          //colors:['green','yellow','orange','light red','red']
        }
    }
    render() {
        return (
            <>
                {
                    this.state.value.map((fruit, key) => {
                        return (
                            <div key={key}>
                                <p>
                                    {`${this.props.colors[key]} ${fruit}` }
                                    {/* {`${this.state.colors[key]} ${fruit}` } */}
                                </p>
                            </div>
                        );
                    })
                }
            </>
        )
    }

}

export default List