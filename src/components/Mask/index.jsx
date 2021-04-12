import React, { useCallback, useEffect, useState } from 'react'
import { loginPhoneReq } from '@/utils/api/user'
import style from './index.css'
import { connect } from 'react-redux'
import { toggleShowLoginBox, setCookieAct, setLoginStatusAct } from "@/redux/actions";
import { setProfileAct } from '@/redux/actions';

const MaskWrapper = ({ type = 'login', toggleShow, setCookie, setLogin, setProfileAct }) => {
    const [mobile, setMobile] = useState('')
    const [password, setPassword] = useState('')
    const [isAutoLogin, setIsAutoLogin] = useState(true)

    useEffect(() => {
        document.body.style = `overflow: hidden;height: 100%;`

        return () => {
            document.body.style = ``
        }
    }, [])

    const goLogin = useCallback(
        async () => {
            const res = await loginPhoneReq({
                phone: mobile,
                password
            })
            if (res.data.code === 200) {
                setLogin(true)
                setProfileAct(res.data.profile)
                setCookie(res.data.cookie)
                if (isAutoLogin) {
                    localStorage.setItem('login_cookie_in_net_ease_music', res.data.cookie)
                    localStorage.setItem('user_profile_in_net_ease_music', JSON.stringify(res.data.profile))
                }
                toggleShow()
                alert('登录成功!')
            } else {
                alert('登录失败!', res.data)
            }
        },
        [isAutoLogin,setCookie,setLogin,setProfileAct,toggleShow,mobile, password],
    )

    if (type === 'login') {
        return <div className={style.mask} >
            <div className={style.container}>
                <div className={style.mTop}>
                    <h4 className={style.title}>手机号登录</h4>
                    <svg onClick={toggleShow} t="1606895197128" className={style.close_icon} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3140" width="32" height="32"><path d="M521.694 449.297L111.41 39.014a51.2 51.2 0 1 0-72.43 72.363l410.282 410.317L38.98 932.01a51.2 51.2 0 1 0 72.397 72.396l410.317-410.282 410.317 410.282a51.2 51.2 0 1 0 72.396-72.362L594.125 521.694l410.282-410.283a51.2 51.2 0 1 0-72.396-72.397L521.728 449.297z" p-id="3141" fill="#cdcdcd"></path></svg>
                </div>
                <div className={style.mCenter}>
                    <div className={style.cCenterCon}>
                        <div className={style.cTop}>
                            <div className={style.inputItem}>
                                <select name="cars" id="cars" className={style.dropdown}>
                                    <option value="+86">+86</option>
                                    <option value="美国">美国</option>
                                    <option value="英国">英国</option>
                                    <option value="意大利">意大利</option>
                                </select>
                                <input type="text" placeholder="请输入手机号码" value={mobile} onInput={(e) => setMobile(e.target.value)} />
                            </div>
                            <div className={style.inputItem}>
                                <input type="password" placeholder="请输入密码" value={password} onInput={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className={style.cCenter}>
                        <input type="checkbox" checked={isAutoLogin} onChange={(e) => setIsAutoLogin(e.target.checked)} />
                        <div className={style.radio}>自动登录</div>
                        <div className={style.wjmm}>忘记密码?</div>
                    </div>
                    <div className={style.cBottom} onClick={goLogin}>登 录</div>
                </div>
                <div className={style.mFooter}>
                    <div className={style.fLeft}>&lt; 其他登录方式</div>
                    <div className={style.fRight}>没有账号？免费注册 &gt;</div>
                </div>
            </div>
        </div>
    } else {
        return <div>Loading</div>
    }
}

const mapPropsToDispatch = (dispatch) => {
    return {
        toggleShow: () => {
            dispatch(toggleShowLoginBox());
        },
        setCookie: (data) => {
            dispatch(setCookieAct(data))
        },
        setLogin: (data) => {
            dispatch(setLoginStatusAct(data))
        },
        setProfileAct: (data) => {
            dispatch(setProfileAct(data))
        }
    }
}
export default connect(() => { return {} }, mapPropsToDispatch)(MaskWrapper)