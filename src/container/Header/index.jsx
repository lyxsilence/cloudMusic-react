import React, { memo, useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { toggleShowLoginBox } from "@/redux/actions";
import Content from '@/components/Content/index'

import './index.css';
// 用户
const UserItem = () => {
    return <div>123</div>
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
            <a className='nav_list_item' href='/' onClick={handleClick}>
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
            </a>
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
    let history1 = toggleShowFun.history
    useEffect(() => {
        let path = history1.location.path;
        let item = navList.find(e => e.path === path)
        if (item) {
            setCurrentId(item.id)
        } else {
            setCurrentId(7)
        }
    }, [history1.location.path, navList])

    return (
        <Content bgc="#242424" isContainer={false}>
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
        </Content>
    )
}

const mapStatesToProps = (state) => {
    return {
        isLogin: state.userInfo.isLogin
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toggleShowFun: () => {
            dispatch(toggleShowLoginBox());
        },
    }
}
export default connect(mapStatesToProps, mapDispatchToProps)(withRouter(Header))