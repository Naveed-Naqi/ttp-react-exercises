import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default class Decrement extends Component {

    constructor(props) {
        super(props);
        this.state = {num: this.props.num};
      }

    handleClick = () => {

        if(this.state.num > 0) {
            this.setState({
                num: this.state.num-1
            });
        } else {
            alert("Cannot be less than zero!");
        }

    }

    render() {
        return (
            <div>
                <h1>Decrement</h1>

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={this.handleClick}
                >
                DECREMENT
                </Button>

                <div style={{padding: "20px"}}>
                    {this.state.num}
                </div>
            </div>
        )
    }
}

Decrement.propTypes ={
    num: PropTypes.number.isRequired
};
