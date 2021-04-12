import { 
    TWO_LEVEL_ROUTE_CHANGE,
    TOGGLE_SHOW_LOGIN_BOX,
    SET_LOGIN_STATUS_ACT,
    SET_COOKIE_ACT,
    SET_PROFILE_ACT
} from "./constants";

const initRoutes = {
    level: [],
    twoLevel: [
        { name: "推荐", id: 1, isOn: true, path: "/discover/recommend" },
        { name: "排行榜", id: 2, isOn: false, path: "/discover/rank" },
        { name: "歌单", id: 3, isOn: false, path: "/discover/musicList" },
        { name: "主播电台", id: 4, isOn: false, path: "/discover/discoverDj" },
        {
            name: "歌手",
            id: 5,
            isOn: false,
            path: "/discover/discoverMusician",
        },
        { name: "新歌上架", id: 6, isOn: false, path: "/discover/newSong" },
    ],
    currentTwoLevelId: 1,
};
export const routes = (state = initRoutes, action) => {
    switch (action.type) {
        case TWO_LEVEL_ROUTE_CHANGE:
            let id = action.id;
            let twoList = state.twoLevel;
            twoList.forEach((item) => {
                if (item.id === id) {
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
    switch (action.type) {
        case TOGGLE_SHOW_LOGIN_BOX:
            return { ...state, isShowLoginBox: !state.isShowLoginBox };
        case SET_LOGIN_STATUS_ACT:
            return { ...state, isLogin: action.payload };
        case SET_COOKIE_ACT:
            return { ...state, cookie: action.payload };
        case SET_PROFILE_ACT:
            return { ...state, profile: action.payload };
        default:
            return state;
    }
};
