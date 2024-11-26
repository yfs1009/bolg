---
icon: pen-to-square
date: 2024-11-26
category:
  - WebAudio

---

# WebAudio

## WebAudio 实时检测声音

<div><br/><br/>代码示例：</div>
<pre>
    detection() {
			var that = this
			// 获取音频流
			navigator.mediaDevices.getUserMedia({
					audio: true
				})
				.then(stream => {
					const audioContext = new AudioContext();
					const audioSource = audioContext.createMediaStreamSource(stream);
					const mediaRecorder = new MediaRecorder(stream);
		
					
					mediaRecorder.mimeType = "audio/wav";
					// 创建一个BiquadFilterNode，用于降低噪声
					let lowPassFilter = audioContext.createBiquadFilter();
					lowPassFilter.type = 'lowpass'; // 设置为低通滤波器
					lowPassFilter.frequency.value = 3000; // 设置滤波器滤除的频率范围
					// 定义一个数组来存储音频数据块
					var audioChunks = [];
					// 创建分析器节点
					const analyzerNode = audioContext.createAnalyser();
					analyzerNode.fftSize = 2048;
					// 建立连接
					audioSource.connect(lowPassFilter);
					//连接扬声器（需要关闭不然会有回放）
					// lowPassFilter.connect(audioContext.destination);
					// 连接音频源到分析器节点
					audioSource.connect(analyzerNode);
					
	

					mediaRecorder.addEventListener('dataavailable', function(event) {
						// 这里是录音的数据Blob对象，可以发送给后端
						audioChunks.push(event.data);
						// 使用WebSocket、Fetch API或其他方式发送audioBlob给后端
					});
					// 停止录音后，合并所有Blob对象
					mediaRecorder.addEventListener('stop', function() {
						if (that.demostate == true) return
						var combinedBlob = new Blob(audioChunks, {
							type: 'audio/wav'
						});
						audioChunks = []

						console.log(combinedBlob, "combinedBlob")
						var formData = new FormData()
						// 此处获取到blob对象后需要设置fileName满足当前项目上传需求，其它项目可直接传把blob作为file塞入formData
						var fileOfBlob = new File([combinedBlob], new Date().getTime() + '.wav')

						console.log(fileOfBlob, "fileOfBlob")
						formData.append('file', fileOfBlob)
						console.log(formData, "formData")
						document.getElementById("loadtxt").innerText = "思考中..."
						// 直接用ajax上传
						var xhr = new XMLHttpRequest();
						xhr.open("POST", app.voicebase +
						"getWordfromWav"); /
						xhr.onreadystatechange = function() {
							console.log(xhr, "响应数据")
							if (xhr.readyState == 4) {
								let responseText = JSON.parse(xhr.responseText);
								document.getElementById("loadtxt").innerText = ""

								if (responseText.voice_text.result[0] != "") {
									document.getElementById("loadtxt").innerText = responseText
										.voice_text.result[0] || ''
									that.问题 = responseText.voice_text.result[0]
									提交()
								}

							}
						}
						xhr.send(formData);
						xhr.onerror = function() {
							alert("上传失败");
						}
					});
					// 定义检测函数
					function detectSpeech() {
						const bufferLength = analyzerNode.frequencyBinCount;
						const dataArray = new Uint8Array(bufferLength);

						analyzerNode.getByteFrequencyData(dataArray);

						// 检查音频数据中是否有能量值大于阈值的部分
						const threshold = 120; // 调整阈值以适应实际情况
						var state = false
						for (let i = 0; i < bufferLength; i++) {
							if (dataArray[i] > threshold) {
								console.log("有人在说话！");
								state = true
								break
							}
						}
						if (state) {
							return true
						}
						return false
					}
					// 设置一个定时器，用于检测是否有人说话
					setInterval(() => {
						// 在这里可以添加检测声音的逻辑，例如使用Web Audio API分析音频数据
						// 如果检测到有人说话，则继续录音；否则，停止录音并发送数据给后端
						const isSpeaking = detectSpeech(); // 自定义函数，返回true表示有人在说话，false表示没有人在说话
						if (isSpeaking) {
							// 继续录音
							if (that.demostate == true) {
								document.getElementById("loadtxt").innerText = ""
								mediaRecorder.stop();
								return
							}
							document.getElementById("loadtxt").innerText = "说话中..."
							mediaRecorder.start();
						} else {
							mediaRecorder.stop();
						}
					}, 100); // 每100毫秒检测一次

				})
				.catch(error => {
					console.error("获取音频流失败:", error);
				});
		},
</pre>