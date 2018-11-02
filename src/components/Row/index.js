import React, { Component } from "react";
import { connect } from "react-redux";

import Block from "./Block";

class Row extends Component {
  render() {
    const { type, isAdd } = this.props;
    const data =
      type === "My List" ? this.props.list : this.props.recommendation;
    return (
      <div className="row">
        <h3 className="row-subtitle">{type}</h3>
        <div className="row-content">
          {data.map((ele, index) => (
            <Block data={ele} key={index} isAdd={isAdd} />
          ))}
        </div>
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

export default connect(mapStateToProps)(Row);
