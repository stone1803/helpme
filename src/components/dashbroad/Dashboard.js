import React, { Component } from "react";
import Nofitications from "./Nofitications";
import TipsItem from "../tips/TipsItem";
import { connect } from "react-redux";
class Dashboard extends Component {
  render() {
    let { tips } = this.props;
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <TipsItem tips={tips} />
          </div>
          <div className="col s12 m6">
            <Nofitications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tips: state.tipsReducer.data
});
export default connect(mapStateToProps, null)(Dashboard);
