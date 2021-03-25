import {
    // CHANNEL_ROUTE_CHANGE,
    CHILD_CHANNEL_ROUTE_CHANGE
} from './constants'



const initRoutes = {
    level: [],
    twoLevel: [
        { name: "推荐", id: 1, isOn: true, path: "/discover/recommend" },
        { name: "排行榜", id: 2, isOn: false, path: "/discover/rank" },
        { name: "歌单", id: 3, isOn: false, path: "/discover/music-list" },
        { name: "主播电台", id: 4, isOn: false, path: "/discover/dj" },
        {
            name: "歌手",
            id: 5,
            isOn: false,
            path: "/discover/musician",
        },
        { name: "新歌上架", id: 6, isOn: false, path: "/discover/new-song" },
    ],
    currentTwolevelId: 1,
};
export const routes = (state = initRoutes, action) => {
    switch (action.type) {
        case CHILD_CHANNEL_ROUTE_CHANGE:
            console.log(action, "action");
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
