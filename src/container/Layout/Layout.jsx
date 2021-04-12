import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';

// html
import Header from '../Header';
import Footer from '../Footer';
import Mask from "../../../src/components/Mask";
const Layout = (isShowLoginBox) =>{
    return (
        <Router>
            <Header></Header>

            <Footer></Footer>
            {isShowLoginBox ? <Mask /> : null}
        </Router>
    )
}

const mapPropsToStates = (state) => {
    return {
      isShowLoginBox: state.userInfo.isShowLoginBox,
    };
  };
export default connect(mapPropsToStates)(Layout);