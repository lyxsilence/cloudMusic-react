import {
    ONE_LEVEL_ROUTE_CHANGE,
    TWO_LEVEL_ROUTE_CHANGE,
    TOGGLE_SHOW_LOGIN_BOX,
    SET_PROFILE_ACT,
    SET_LOGIN_STATUS_ACT,
    SET_COOKIE_ACT,
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
export const setCookieAct = (data) => ({
    type: SET_COOKIE_ACT,
    payload: data,
});

export const setLoginStatusAct = (data) => ({
    type: SET_LOGIN_STATUS_ACT,
    payload: data,
});

export const setProfileAct = (data) => ({
    type: SET_PROFILE_ACT,
    payload: data,
});
