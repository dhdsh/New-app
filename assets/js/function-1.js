/*
 * 后期绝大多数的时候，都是返回JSON数据

	get()不传递第三个参数或者传递第三个参数为text，表示返回正常的字符串文本
	get()传递第三个参数为json,返回json数据（JSON.parse()）

 * 功能：发送get的Ajax请求
 * @param string url :请求的URL地址
 * @param function cb: 处理返回结果的回调函数
 * @param string dataType
 	不传
 	text
 	json:返回json数据
 * @return undefined:没有返回结果
 */
function get(url, cb, dataType) {
    // 3.1 实例化网络请求对象
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        // 当请求状态为4和响应状态为200的时候，表示此次请求成功
        if (xhr.readyState == 4 && xhr.status == 200) {
            // 浏览器接收响应的结果
            // 针对返回结果，有时候需要改变字体颜色，有时候需要追加一些HTML标签内容，有时候需要弹出来一个内容
            // 总之：针对不同的请求，处理返回结果的方式也不一样
            // box.innerHTML = xhr.responseText;

            // if中获取返回的结果，在这里做判断
            if (dataType == 'json') {
                var obj = JSON.parse(xhr.responseText);
                cb(obj);
            } else {
                // 调用cb函数处理返回的结果
                cb(xhr.responseText);
            }
        }
    }

    // 3.2 发起请求前配置
    xhr.open('GET', url, true);

    // 3.3 发送
    xhr.send();
}

/*
 * 功能：发送post的Ajax请求
 * @param string url:请求的URL地址
 * @param string querystring:请求时携带的参数
 * @param function cb: 处理返回结果的回调函数
 * @return undefined:没有返回结果
 */
function post(url, querystring, cb) {
    // 3.1 实例化XMLHttpRequest请求对象
    var xhr = new XMLHttpRequest();

    // 监听事件，档状态发生变化的时候，触发的事件
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            cb(xhr.responseText);
        }
    }

    // 3.2 配置
    xhr.open('POST', url, true);

    // 3.3 发送(post传递参数在send中)
    // content-type:请求服务器的时候，传递的数据内容类型
    // application/x-www-form-urlencoded:应用(表单数据)
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(querystring);
}