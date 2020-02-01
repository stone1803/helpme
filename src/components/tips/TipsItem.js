import React, { Component } from "react";
import TIpsSumday from "./TIpsSumday";
import { connect } from "react-redux";

class TipsItem extends Component {
  render() {
    let { tips } = this.props;
    console.log(this.props);
    return (
      <div className="tips_item section">
        {tips.map((item,index) => {
          return <TIpsSumday item={item} key={index} />;
        })}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  tips: state.tipsReducer.data
});
export default connect(mapStateToProps, null)(TipsItem);
