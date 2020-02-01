import React, { Component } from "react";
import TipsItem from "./TipsItem";

export default class TIpsSumday extends Component {
  render() {
    return (
      <div className="card z-depth-0 tips_sumday">
        <div className="card lighten-1">
          <span className="card-title"> {this.props.item.title}</span>
     
        </div>
        {this.props.item.content}

      </div>
      
    );
  }
}
