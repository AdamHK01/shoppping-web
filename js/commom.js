/*
获取url地址参数的方法
@param {string} key:参数名
@results {string} 匹配结果
*/

function getUrlParam(key){
	var reg =new RegExp(key +'=([^&]*)');
	var results =location.href.match(reg);
	return results? results[1] : null;
}