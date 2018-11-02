import React, { Component } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

import * as actions from "../../actions";

class Block extends Component {
  removeHandler = id => {
    const { dispatch, data } = this.props;
    dispatch(actions.removeItem(data.id));
  };

  addHandler = id => {
    const { dispatch, data } = this.props;
    dispatch(actions.addItem(data));
  };

  render() {
    const { data, isAdd } = this.props;
    return (
      <div className="block">
        <img src={data.img} alt="movie-pic" />
        <div>{data.title}</div>
        {isAdd ? (
          <Button
            bsStyle="danger"
            className="block-btn-remove"
            onClick={() => this.addHandler(data)}
          >
            Add
          </Button>
        ) : (
          <Button
            bsStyle="warning"
            className="block-btn-add"
            onClick={() => this.removeHandler(data)}
          >
            Remove
          </Button>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.mylist,
    recommendation: state.recommendation
  };
};

export default connect(mapStateToProps)(Block);
