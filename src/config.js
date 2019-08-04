import axios from "axios";
import { Toast } from "antd-mobile";

// axios拦截器展示，用加载挑来演示axios拦截器工作原理
axios.interceptors.request.use(
    function(config){
        Toast.loading('正在玩命加载中',0);
        return config
    }
)

axios.interceptors.response.use(
    Toast.hide()
)