	var xmlHttpReq = null;
	var xmlHttpReq2 = null;

	function getContent(f) {
	xmlHttpReq = false;
	file = f;
	if(window.XMLHttpRequest) { //Mozilla 浏览器
		xmlHttpReq = new XMLHttpRequest();
		if (xmlHttpReq.overrideMimeType) {//配置MiME类别
		xmlHttpReq.overrideMimeType('text/xml');
		}
	}
	else if (window.ActiveXObject) { // IE浏览器
		try {
			xmlHttpReq = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try {
				xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e) {
				try {
					xmlHttpReq = new ActiveXObject("Msxml4.XMLHTTP");
				}
				catch (e) {
					try {
						xmlHttpReq = new ActiveXObject("Msxml3.XMLHTTP");
					}
					catch (e) {
					
					}
				}
			}
		}
	}
	if (!xmlHttpReq) { // 异常，建立对象实例失败
		//window.alert("不能建立XMLHttpRequest对象实例.");
		return false;
	}
	var thisurl = document.URL;
	var cc="";
	var urlarr = thisurl.split("/");
	for(i=0;i<3;i++)
	{
	cc=cc+urlarr[i]+"/";
	}
	var url = cc + f;
	//alert(url);
	
	xmlHttpReq.open("GET",url,true);
	xmlHttpReq.setRequestHeader("Content-Type","gb2312");
	xmlHttpReq.setRequestHeader("content-type","text/html"); 
	xmlHttpReq.send(null);
	xmlHttpReq.onreadystatechange = content;
    }
	function content()
	{
         if (xmlHttpReq.readyState == 4) {
             if (xmlHttpReq.status == 200) { 
				var content = xmlHttpReq.responseText;
				var html = document.getElementById("topdate");
				html.innerHTML=unescape(content);
             }
         }
	}
	
	function getClick(f) {
	xmlHttpReq2 = false;
	file = f;
	if(window.xmlHttpReq2uest) { //Mozilla 浏览器
		xmlHttpReq2 = new xmlHttpReq2uest();
		if (xmlHttpReq2.overrideMimeType) {//配置MiME类别
		xmlHttpReq2.overrideMimeType('text/xml');
		}
	}
	else if (window.ActiveXObject) { // IE浏览器
		try {
			xmlHttpReq2 = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (e) {
			try {
				xmlHttpReq2 = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (e) {
				try {
					xmlHttpReq2 = new ActiveXObject("Msxml4.XMLHTTP");
				}
				catch (e) {
					try {
						xmlHttpReq2 = new ActiveXObject("Msxml3.XMLHTTP");
					}
					catch (e) {
					
					}
				}
			}
		}
	}
	if (!xmlHttpReq2) { // 异常，建立对象实例失败
		//window.alert("不能建立xmlHttpReq2uest对象实例.");
		return false;
	}
	var thisurl = document.URL;
	var cc="";
	var urlarr = thisurl.split("/");
	for(i=0;i<3;i++)
	{
	cc=cc+urlarr[i]+"/";
	}
	var url = cc + f;
	//alert(url);
	
	xmlHttpReq2.open("GET",url,true);
	xmlHttpReq2.setRequestHeader("Content-Type","gb2312");
	xmlHttpReq2.setRequestHeader("content-type","text/html"); 
	xmlHttpReq2.send(null);
	xmlHttpReq2.onreadystatechange = clickk;
    }
	
	function clickk()
	{
         if (xmlHttpReq2.readyState == 4) {
             if (xmlHttpReq2.status == 200) { 
				var con = xmlHttpReq2.responseText;
				var html = document.getElementById("click");
				//alert(con);
				html.innerHTML=unescape(con);
             }
         }
	}