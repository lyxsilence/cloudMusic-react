import React, { memo, useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { toggleShowLoginBox } from "../../redux/actions";

import './index.css';
// 用户
const UserItem = () => {
    return <div>{null}</div>
}
// 搜索框
const SearchItem = () => {
    return (
        <div className="search_item">
            <div className="icon_search"></div>
            <input
                type="text"
                name=""
                id=""
                className="input_search"
                placeholder="音热/视频/电台/用户"
            />
        </div>
    )
}
// 导航item
const NavItem = memo(
    ({ item, setCurrentItem, currentId }) => {
        const history = useHistory();
        console.log(history)
        const handleClick = useCallback(
            () => {
                if (currentId === item.id) {
                    return;
                }
                history.push(item.path);
                setCurrentItem(item.id);
            },
            [item, currentId, setCurrentItem, history],
        )
        return (
            <div className='nav_list_item' onClick={handleClick}>
                <div
                    className={currentId === item.id ? "n-title isHot" : ""}
                >
                    {item.name}
                </div>
                {item.isHot ? (
                    <>
                        <img
                            src="../../images/hot.png"
                            className='item_hot'
                            alt="hotIcon"
                        />
                    </>
                ) : null}
                {currentId === item.id ? (
                    <div className='item_current'></div>
                ) : null}
            </div>
        )
    }
)

// 顶部导航
const Header = (toggleShowFun, isLogin, history) => {
    const [navList] = useState([
        { id: 1, name: "发现音热", isHot: false, isOn: true, path: "/discover" },
        { id: 2, name: "我的音热", isHot: false, isOn: false, path: "/mine" },
        { id: 3, name: "朋友", isHot: false, isOn: false, path: "/friend" },
        { id: 4, name: "商城", isHot: false, isOn: false, path: "/shop" },
        { id: 5, name: "音热人", isHot: false, isOn: false, path: "/musician" },
        { id: 6, name: "下载客户端", isHot: true, isOn: false, path: "/download" },
        { id: 7, name: "404", isHot: false, isOn: false, path: "/404" },
    ]);
    const [currentId, setCurrentId] = useState(1);

    const setCurrentItem = (id) => {
        setCurrentId(id);
    };
    useEffect(() => {
        let path = "/discover";
        let item = navList.find(e => e.path === path)
        if (item) {
            setCurrentId(item.id)
        } else {
            setCurrentId(7)
        }
    }, [navList])

    return (
        <div className="header">
            <a href="/">
                <div className='logo'></div>
            </a>
            <div className='nav_list'>
                {navList
                    ? navList.map((item) => {
                        if (item.id === 7) {
                            return null
                        } else {
                            return <NavItem
                                item={item}
                                key={item.id}
                                currentId={currentId}
                                setCurrentNav={setCurrentItem}
                            />
                        }
                    })
                    : null}
            </div>
            <SearchItem />
            <div className='create'>创作者中心</div>
            {isLogin ? <UserItem /> : <button className='btn_logoIn' onClick={toggleShowFun}>登录</button>}
        </div>
    )
}

const mapStatesToProps = (state) => {
    return {
        isLogin: false
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleShowFun: () => {
            console.log('TOGGLE_SHOW_LOGIN_BOX')
            dispatch(toggleShowLoginBox());
        },
    }
}
export default connect(mapStatesToProps, mapDispatchToProps)(withRouter(Header))