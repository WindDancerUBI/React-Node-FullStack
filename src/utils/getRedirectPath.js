// 注册后根据type值，选择跳转的页面

export default function getRedirectPath({type,avatar}){
    let url = (type === 'boss')? '/boss': '/genius'; 
    if(!avatar){
        url = url + 'info';
    }
    return url;
}