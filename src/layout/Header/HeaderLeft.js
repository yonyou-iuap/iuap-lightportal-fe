import React,{Component} from "react";
import mirror, { connect,actions } from 'mirrorx';
// import {FormattedMessage, FormattedDate, FormattedNumber} from 'react-intl';

class HeaderLeft extends Component {
    constructor(props,context) {
        super(props,context);
    }
    svgClick() {
      const {sideBarShow} = this.props;
      actions.app.updateState({
        sideBarShow: !sideBarShow
      })
      // $('.left-side-bar ').an

    }
    render() {
      let self = this;
      let {sideBarShow} = this.props;
      let obj = {
        width:"18px",
        height:"18px"
      }
      let obj1 = {
        width:"24px",
        height:"24px"
      }
        return (
            <div className="header-left">
              <div className={sideBarShow?"header-svg header-svg-red":"header-svg"} onClick={self.svgClick.bind(this)}>
                <svg className="icon" style={sideBarShow?obj1:obj}>
                <use xlinkHref={sideBarShow?'#icon-logo1':'#icon-logo'}></use>
                </svg>
              </div>
              <div className="header-search">
                <input type="search" placeholder={this.props.placeholder}/>
                <i className = "uf uf-search"/>
              </div>
            </div>
        );
    }
}
export default HeaderLeft;
