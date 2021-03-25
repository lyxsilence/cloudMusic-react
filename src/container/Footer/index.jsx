import React from "react";
import { connect } from 'react-redux';


import './index.css';

const Footer = (props) => {
    console.log(props);
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='container-left'>
                    <div className="txt">
                        服务条款&nbsp;&nbsp;|&nbsp;&nbsp;隐私政策&nbsp;&nbsp;|&nbsp;&nbsp;儿童隐私政策&nbsp;&nbsp;|&nbsp;&nbsp;版权投诉指引&nbsp;&nbsp;|&nbsp;&nbsp;意见反馈&nbsp;|
                    </div>
                    <div className="txt">
                        网易公司版权所有@1997-2021 杭州乐读科技有限公司运营：浙网文[2018]3506-263号
                    </div>
                    <div className="txt">
                        违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com
                    </div>
                    <div className="txt">
                        浙ICP备19022677号-1 &nbsp;&nbsp;
                        工业和信息化部备案管理系统网站
                    </div>
                </div>
                <ul className='container-right'>
                    <li>
                        <div>icon</div>
                        <span>txt</span>
                    </li>
                    <li>
                        <div>icon</div>
                        <span>txt</span>
                    </li>
                    <li>
                        <div>icon</div>
                        <span>txt</span>
                    </li>
                    <li>
                        <div>icon</div>
                        <span>txt</span>
                    </li>
                    <li>
                        <div>icon</div>
                        <span>txt</span>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default connect()(Footer)
// export default Footer;