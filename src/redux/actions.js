import {
    ONE_LEVEL_ROUTE_CHANGE,
    TWO_LEVEL_ROUTE_CHANGE,
    TOGGLE_SHOW_LOGIN_BOX
} from "./constants";


export const oneLevelRouteChange = (id) => ({
    type: ONE_LEVEL_ROUTE_CHANGE,
    id,
});

export const twoLevelRouteChange = (id) => ({
    type: TWO_LEVEL_ROUTE_CHANGE,
    id,
});

export const toggleShowLoginBox = () => ({
    type: TOGGLE_SHOW_LOGIN_BOX,
});