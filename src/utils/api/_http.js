/**
 * 能发送ajax请求的函数模块
 */
import axios from "axios";
export default function _http(url, data = {}, type = "GET", isCookie = false) {
    if (isCookie) {
        data = {
            ...data,
            cookie:
                localStorage.getItem("login_cookie_in_net_ease_music") ||
                `MUSIC_U=7e89d2442a09d664b80e3996f2fa7709605b8dcaaa341c328fb8ccea624a95a833a649814e309366; Max-Age=1296000; Expires=Sun, 20 Dec 2020 01:18:19 GMT; Path=/;;__csrf=f2169deaab1ff8db480363f95ec0064b; Max-Age=1296010; Expires=Sun, 20 Dec 2020 01:18:29 GMT; Path=/;;__remember_me=true; Max-Age=1296000; Expires=Sun, 20 Dec 2020 01:18:19 GMT; Path=/;`,
        };
    }
    if (type === "GET") {
        let parstr = "";
        Object.keys(data).forEach((key) => {
            parstr += key + "=" + data[key] + "&";
        });
        if (parstr) {
            parstr = parstr.substring(0, parstr.length - 1);
            url = url + "?" + parstr;
        }
        return axios({
            url: "/api" + url,
            method: type,
        });
    } else {
        //POST
        return axios.post("/api" + url, data);
    }
}
