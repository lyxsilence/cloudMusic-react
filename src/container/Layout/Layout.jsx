import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from 'react-redux';

// html
import Header from '../Header';
import Footer from '../Footer';
const Layout = () =>{
    return (
        <Router>
            <Header></Header>

            <Footer></Footer>
        </Router>
    )
}

// const mapPropsToStates = (state) => {
//     return {
//       isShowLoginBox: state.userinfo.isShowLoginBox,
//     };
//   };
export default connect()(Layout);