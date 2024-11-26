---
icon: pen-to-square
date: 2024-11-26
category:
  - fetch

---

# fetch

## fetch 请求流

<div>fetch()是一个全局方法，提供一种简单，合理的方式跨网络获取资源。它的请求是基于Promise。<br/><br/>代码示例：</div>
<pre>
    try {
        response = await fetch(app.chatbase+"api/chat_stream", {
		// response = await fetch("http://no3.ybinu.cn:33892/api/chat_stream", {
            signal: signal,
            method: 'post',
            body: JSON.stringify({
                prompt: app.会话模式.问题 + app.问题,
                temperature: app.temperature,
                top_p: app.top_p,
                max_length: app.max_length,
                history: QA_history,
                pdf: app.chatPDF,
				playVideo:playVideo
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        app.问题 = ''		
        const reader = response.body.getReader();
        let buffer = ''
        while (true) {
            const { value, done } = await reader.read();
			console.log(value,"value")
			console.log(done,"done")
            已排队到 = true
            let res = new TextDecoder("utf-8").decode(value)
			// console.log(res,"res")
            buffer += res
			// console.log(buffer,"buffer")
            while (buffer.indexOf("///") > -1) {
                if (buffer == '/././') {//应对网络问题
                    done = true
                    break
                }
                buffer = buffer.split("///")
                当前会话.content = buffer[buffer.length - 2]
				// console.log(当前会话.content,"当前会话.content")
                buffer = buffer[buffer.length - 1]
				// console.log(buffer,21212)
            }
			// console.log(done,99999999999999)
            if (done){
            	 break
            }
        }
    }catch (e) {
		console.log(e,"错误信息");
    }
</pre>