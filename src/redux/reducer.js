// import { setLoginStatusAct, setProfileAct } from './actions';
import { setCurrentSongStatus, setCurrentTime } from "./actions";
import {
    ONE_LEVEL_ROUTE_CHANGE,
    TWO_LEVEL_ROUTE_CHANGE,
    TOGGLE_SHOW_LOGIN_BOX
} from "./constants";

const initRoutes = {
    level: [],
    twoLevel: [
        { name: "推荐", id: 1, isOn: true, path: "/discover/recommend" },
        { name: "排行榜", id: 2, isOn: false, path: "/discover/rank" },
        { name: "歌单", id: 3, isOn: false, path: "/discover/musiclist" },
        { name: "主播电台", id: 4, isOn: false, path: "/discover/discoverdj" },
        {
            name: "歌手",
            id: 5,
            isOn: false,
            path: "/discover/discovermusician",
        },
        { name: "新歌上架", id: 6, isOn: false, path: "/discover/newsong" },
    ],
    currentTwolevelId: 1,
};
export const routes = (state = initRoutes, action) => {
    switch (action.type) {
        case TWO_LEVEL_ROUTE_CHANGE:
            console.log(action, "action");
            let id = action.id;
            let twoList = state.twoLevel;
            twoList.forEach((item) => {
                if (item.id == id) {
                    item.isOn = true;
                } else {
                    item.isOn = false;
                }
            });

            let data = {
                ...state,
                twoLevel: [...twoList],
            };
            return data;
        default:
            return state;
    }
};

const initUser = {
    isLogin: false,
    profile: {},
    isShowLoginBox: false,
    cookie: "",
};
export const userInfo = (state = initUser, action) => {
    console.log(action, 'action');
    switch (action.type) {
        case TOGGLE_SHOW_LOGIN_BOX:
            console.log("toggleShowLoginBox action");
            return { ...state, isShowLoginBox: !state.isShowLoginBox };
        default:
            return state;
    }
};
