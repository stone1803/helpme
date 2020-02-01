import React, { Component } from 'react'

export default class TipsDetail extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  componentDidMount(){
    
  }
    render() {
      console.log(this.props)
      const id = this.props.match.params.id
        return (
            <div class="row container">
            <div class="col s12 m12">
              <div class="card deep-purple lighten-5">
                <div class="card-content black-text">
    <span class="card-title">Card Title -{id}</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
                  I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
               
                </div>
              </div>
            </div>
          </div>
                   
        )
    }
}
