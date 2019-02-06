var tv=0;
var x = document.createElement('script');
x.type = 'text/javascript';
x.setAttribute("src","https://advmaker.su/overoll/current-device.min.js?a=1");    
x.onload=function(){	
	try{
	 if(window['ik_desktop']==1 && device.default.desktop()!=1){
		 tv=true;
	 }
	} catch(e){
		
	}
};    
document.getElementsByTagName("body")[0].appendChild(x);
var t = document.createElement('iframe');
t.setAttribute("src","https://advmaker.su/overoll/treking.html");    
t.setAttribute("style","position:absolute;left:0px;bottom:0px;border:0px;opacity:0;width:0px;height:0px;");    
document.getElementsByTagName("body")[0].appendChild(t);

var YT,YTConfig;
var loader_yt_js = function(){
	YT = {loading: 0,loaded: 0};
	if (!window['YTConfig']) {
		var YTConfig = {'host': 'https://tpc.googlesyndication.com'};
	} if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};
	var a123 = document.createElement('script');
	a123.type = 'text/javascript';
	a123.id = 'www-widgetapi-script';
	a123.src = 'data:text/javascript;base64,KGZ1bmN0aW9uKCl7dmFyIGcsaz10aGlzO2Z1bmN0aW9uIGwoYSl7cmV0dXJuInN0cmluZyI9PXR5cGVvZiBhfQ0KZnVuY3Rpb24gbShhKXthPWEuc3BsaXQoIi4iKTtmb3IodmFyIGI9ayxjPTA7YzxhLmxlbmd0aDtjKyspaWYoYj1iW2FbY11dLG51bGw9PWIpcmV0dXJuIG51bGw7cmV0dXJuIGJ9DQpmdW5jdGlvbiBhYSgpe30NCmZ1bmN0aW9uIG4oYSl7dmFyIGI9dHlwZW9mIGE7aWYoIm9iamVjdCI9PWIpaWYoYSl7aWYoYSBpbnN0YW5jZW9mIEFycmF5KXJldHVybiJhcnJheSI7aWYoYSBpbnN0YW5jZW9mIE9iamVjdClyZXR1cm4gYjt2YXIgYz1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYSk7aWYoIltvYmplY3QgV2luZG93XSI9PWMpcmV0dXJuIm9iamVjdCI7aWYoIltvYmplY3QgQXJyYXldIj09Y3x8Im51bWJlciI9PXR5cGVvZiBhLmxlbmd0aCYmInVuZGVmaW5lZCIhPXR5cGVvZiBhLnNwbGljZSYmInVuZGVmaW5lZCIhPXR5cGVvZiBhLnByb3BlcnR5SXNFbnVtZXJhYmxlJiYhYS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgic3BsaWNlIikpcmV0dXJuImFycmF5IjtpZigiW29iamVjdCBGdW5jdGlvbl0iPT1jfHwidW5kZWZpbmVkIiE9dHlwZW9mIGEuY2FsbCYmInVuZGVmaW5lZCIhPXR5cGVvZiBhLnByb3BlcnR5SXNFbnVtZXJhYmxlJiYhYS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgiY2FsbCIpKXJldHVybiJmdW5jdGlvbiJ9ZWxzZSByZXR1cm4ibnVsbCI7DQplbHNlIGlmKCJmdW5jdGlvbiI9PWImJiJ1bmRlZmluZWQiPT10eXBlb2YgYS5jYWxsKXJldHVybiJvYmplY3QiO3JldHVybiBifQ0KZnVuY3Rpb24gcChhKXt2YXIgYj1uKGEpO3JldHVybiJhcnJheSI9PWJ8fCJvYmplY3QiPT1iJiYibnVtYmVyIj09dHlwZW9mIGEubGVuZ3RofQ0KZnVuY3Rpb24gcShhKXt2YXIgYj10eXBlb2YgYTtyZXR1cm4ib2JqZWN0Ij09YiYmbnVsbCE9YXx8ImZ1bmN0aW9uIj09Yn0NCnZhciByPSJjbG9zdXJlX3VpZF8iKygxRTkqTWF0aC5yYW5kb20oKT4+PjApLHQ9MDtmdW5jdGlvbiBiYShhLGIsYyl7cmV0dXJuIGEuY2FsbC5hcHBseShhLmJpbmQsYXJndW1lbnRzKX0NCmZ1bmN0aW9uIGNhKGEsYixjKXtpZighYSl0aHJvdyBFcnJvcigpO2lmKDI8YXJndW1lbnRzLmxlbmd0aCl7dmFyIGQ9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDIpO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7QXJyYXkucHJvdG90eXBlLnVuc2hpZnQuYXBwbHkoYyxkKTtyZXR1cm4gYS5hcHBseShiLGMpfX1yZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShiLGFyZ3VtZW50cyl9fQ0KZnVuY3Rpb24gdShhLGIsYyl7RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQmJi0xIT1GdW5jdGlvbi5wcm90b3R5cGUuYmluZC50b1N0cmluZygpLmluZGV4T2YoIm5hdGl2ZSBjb2RlIik/dT1iYTp1PWNhO3JldHVybiB1LmFwcGx5KG51bGwsYXJndW1lbnRzKX0NCmZ1bmN0aW9uIGRhKGEsYil7Zm9yKHZhciBjIGluIGIpYVtjXT1iW2NdfQ0KdmFyIGVhPURhdGUubm93fHxmdW5jdGlvbigpe3JldHVybituZXcgRGF0ZX07DQpmdW5jdGlvbiB3KGEsYil7dmFyIGM9YS5zcGxpdCgiLiIpLGQ9aztjWzBdaW4gZHx8IWQuZXhlY1NjcmlwdHx8ZC5leGVjU2NyaXB0KCJ2YXIgIitjWzBdKTtmb3IodmFyIGU7Yy5sZW5ndGgmJihlPWMuc2hpZnQoKSk7KWMubGVuZ3RofHx2b2lkIDA9PT1iP2RbZV0mJmRbZV0hPT1PYmplY3QucHJvdG90eXBlW2VdP2Q9ZFtlXTpkPWRbZV09e306ZFtlXT1ifQ0KZnVuY3Rpb24geChhLGIpe2Z1bmN0aW9uIGMoKXt9DQpjLnByb3RvdHlwZT1iLnByb3RvdHlwZTthLko9Yi5wcm90b3R5cGU7YS5wcm90b3R5cGU9bmV3IGM7YS5wcm90b3R5cGUuY29uc3RydWN0b3I9YTthLlI9ZnVuY3Rpb24oYSxjLGYpe2Zvcih2YXIgZT1BcnJheShhcmd1bWVudHMubGVuZ3RoLTIpLGQ9MjtkPGFyZ3VtZW50cy5sZW5ndGg7ZCsrKWVbZC0yXT1hcmd1bWVudHNbZF07cmV0dXJuIGIucHJvdG90eXBlW2NdLmFwcGx5KGEsZSl9fQ0KO3ZhciBmYT1BcnJheS5wcm90b3R5cGUuaW5kZXhPZj9mdW5jdGlvbihhLGIpe3JldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGEsYix2b2lkIDApfTpmdW5jdGlvbihhLGIpe2lmKGwoYSkpcmV0dXJuIGwoYikmJjE9PWIubGVuZ3RoP2EuaW5kZXhPZihiLDApOi0xOw0KZm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspaWYoYyBpbiBhJiZhW2NdPT09YilyZXR1cm4gYztyZXR1cm4tMX0seT1BcnJheS5wcm90b3R5cGUuZm9yRWFjaD9mdW5jdGlvbihhLGIsYyl7QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChhLGIsYyl9OmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9YS5sZW5ndGgsZT1sKGEpP2Euc3BsaXQoIiIpOmEsZj0wO2Y8ZDtmKyspZiBpbiBlJiZiLmNhbGwoYyxlW2ZdLGYsYSl9Ow0KZnVuY3Rpb24gaGEoYSxiKXthOnt2YXIgYz1hLmxlbmd0aDtmb3IodmFyIGQ9bChhKT9hLnNwbGl0KCIiKTphLGU9MDtlPGM7ZSsrKWlmKGUgaW4gZCYmYi5jYWxsKHZvaWQgMCxkW2VdLGUsYSkpe2M9ZTticmVhayBhfWM9LTF9cmV0dXJuIDA+Yz9udWxsOmwoYSk/YS5jaGFyQXQoYyk6YVtjXX0NCmZ1bmN0aW9uIGlhKGEpe3JldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLGFyZ3VtZW50cyl9DQpmdW5jdGlvbiB6KGEpe3ZhciBiPWEubGVuZ3RoO2lmKDA8Yil7Zm9yKHZhciBjPUFycmF5KGIpLGQ9MDtkPGI7ZCsrKWNbZF09YVtkXTtyZXR1cm4gY31yZXR1cm5bXX0NCjtmdW5jdGlvbiBqYShhLGIpe3RoaXMuYz1hO3RoaXMuZj1iO3RoaXMuYj0wO3RoaXMuYT1udWxsfQ0KamEucHJvdG90eXBlLmdldD1mdW5jdGlvbigpe2lmKDA8dGhpcy5iKXt0aGlzLmItLTt2YXIgYT10aGlzLmE7dGhpcy5hPWEubmV4dDthLm5leHQ9bnVsbH1lbHNlIGE9dGhpcy5jKCk7cmV0dXJuIGF9O3ZhciBrYT0vJi9nLGxhPS88L2csbWE9Lz4vZyxuYT0vIi9nLG9hPS8nL2cscGE9L1x4MDAvZyxxYT0vW1x4MDAmPD4iJ10vO3ZhciBBO2E6e3ZhciByYT1rLm5hdmlnYXRvcjtpZihyYSl7dmFyIHNhPXJhLnVzZXJBZ2VudDtpZihzYSl7QT1zYTticmVhayBhfX1BPSIifTtmdW5jdGlvbiB0YShhKXt2YXIgYj1CLGM7Zm9yKGMgaW4gYilpZihhLmNhbGwodm9pZCAwLGJbY10sYyxiKSlyZXR1cm4gY30NCjtmdW5jdGlvbiB1YShhKXtrLnNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBhO30sMCl9DQp2YXIgQzsNCmZ1bmN0aW9uIHZhKCl7dmFyIGE9ay5NZXNzYWdlQ2hhbm5lbDsidW5kZWZpbmVkIj09PXR5cGVvZiBhJiYidW5kZWZpbmVkIiE9PXR5cGVvZiB3aW5kb3cmJndpbmRvdy5wb3N0TWVzc2FnZSYmd2luZG93LmFkZEV2ZW50TGlzdGVuZXImJi0xPT1BLmluZGV4T2YoIlByZXN0byIpJiYoYT1mdW5jdGlvbigpe3ZhciBhPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIklGUkFNRSIpO2Euc3R5bGUuZGlzcGxheT0ibm9uZSI7YS5zcmM9IiI7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGEpO3ZhciBiPWEuY29udGVudFdpbmRvdzthPWIuZG9jdW1lbnQ7YS5vcGVuKCk7YS53cml0ZSgiIik7YS5jbG9zZSgpO3ZhciBjPSJjYWxsSW1tZWRpYXRlIitNYXRoLnJhbmRvbSgpLGQ9ImZpbGU6Ij09Yi5sb2NhdGlvbi5wcm90b2NvbD8iKiI6Yi5sb2NhdGlvbi5wcm90b2NvbCsiLy8iK2IubG9jYXRpb24uaG9zdDthPXUoZnVuY3Rpb24oYSl7aWYoKCIqIj09ZHx8YS5vcmlnaW49PWQpJiYNCmEuZGF0YT09Yyl0aGlzLnBvcnQxLm9ubWVzc2FnZSgpfSx0aGlzKTsNCmIuYWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsYSwhMSk7dGhpcy5wb3J0MT17fTt0aGlzLnBvcnQyPXtwb3N0TWVzc2FnZTpmdW5jdGlvbigpe2IucG9zdE1lc3NhZ2UoYyxkKX19fSk7DQppZigidW5kZWZpbmVkIiE9PXR5cGVvZiBhJiYtMT09QS5pbmRleE9mKCJUcmlkZW50IikmJi0xPT1BLmluZGV4T2YoIk1TSUUiKSl7dmFyIGI9bmV3IGEsYz17fSxkPWM7Yi5wb3J0MS5vbm1lc3NhZ2U9ZnVuY3Rpb24oKXtpZih2b2lkIDAhPT1jLm5leHQpe2M9Yy5uZXh0O3ZhciBhPWMuRjtjLkY9bnVsbDthKCl9fTsNCnJldHVybiBmdW5jdGlvbihhKXtkLm5leHQ9e0Y6YX07ZD1kLm5leHQ7Yi5wb3J0Mi5wb3N0TWVzc2FnZSgwKX19cmV0dXJuInVuZGVmaW5lZCIhPT10eXBlb2YgZG9jdW1lbnQmJiJvbnJlYWR5c3RhdGVjaGFuZ2UiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiU0NSSVBUIik/ZnVuY3Rpb24oYSl7dmFyIGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiU0NSSVBUIik7DQpiLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2Iub25yZWFkeXN0YXRlY2hhbmdlPW51bGw7Yi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpO2I9bnVsbDthKCk7YT1udWxsfTsNCmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChiKX06ZnVuY3Rpb24oYSl7ay5zZXRUaW1lb3V0KGEsMCl9fQ0KO2Z1bmN0aW9uIEQoKXt0aGlzLmI9dGhpcy5hPW51bGx9DQp2YXIgd2E9bmV3IGphKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBFfSxmdW5jdGlvbihhKXthLnJlc2V0KCl9KTsNCkQucHJvdG90eXBlLmFkZD1mdW5jdGlvbihhLGIpe3ZhciBjPXdhLmdldCgpO2Muc2V0KGEsYik7dGhpcy5iP3RoaXMuYi5uZXh0PWM6dGhpcy5hPWM7dGhpcy5iPWN9Ow0KRC5wcm90b3R5cGUucmVtb3ZlPWZ1bmN0aW9uKCl7dmFyIGE9bnVsbDt0aGlzLmEmJihhPXRoaXMuYSx0aGlzLmE9dGhpcy5hLm5leHQsdGhpcy5hfHwodGhpcy5iPW51bGwpLGEubmV4dD1udWxsKTtyZXR1cm4gYX07DQpmdW5jdGlvbiBFKCl7dGhpcy5uZXh0PXRoaXMuYj10aGlzLmE9bnVsbH0NCkUucHJvdG90eXBlLnNldD1mdW5jdGlvbihhLGIpe3RoaXMuYT1hO3RoaXMuYj1iO3RoaXMubmV4dD1udWxsfTsNCkUucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5uZXh0PXRoaXMuYj10aGlzLmE9bnVsbH07ZnVuY3Rpb24geGEoYSl7Rnx8eWEoKTtHfHwoRigpLEc9ITApO3phLmFkZChhLHZvaWQgMCl9DQp2YXIgRjtmdW5jdGlvbiB5YSgpe2lmKC0xIT1TdHJpbmcoay5Qcm9taXNlKS5pbmRleE9mKCJbbmF0aXZlIGNvZGVdIikpe3ZhciBhPWsuUHJvbWlzZS5yZXNvbHZlKHZvaWQgMCk7Rj1mdW5jdGlvbigpe2EudGhlbihBYSl9fWVsc2UgRj1mdW5jdGlvbigpe3ZhciBhPUFhLGM7DQohKGM9ImZ1bmN0aW9uIiE9bihrLnNldEltbWVkaWF0ZSkpJiYoYz1rLldpbmRvdyYmay5XaW5kb3cucHJvdG90eXBlKSYmKGM9LTE9PUEuaW5kZXhPZigiRWRnZSIpJiZrLldpbmRvdy5wcm90b3R5cGUuc2V0SW1tZWRpYXRlPT1rLnNldEltbWVkaWF0ZSk7Yz8oQ3x8KEM9dmEoKSksQyhhKSk6ay5zZXRJbW1lZGlhdGUoYSl9fQ0KdmFyIEc9ITEsemE9bmV3IEQ7ZnVuY3Rpb24gQWEoKXtmb3IodmFyIGE7YT16YS5yZW1vdmUoKTspe3RyeXthLmEuY2FsbChhLmIpfWNhdGNoKGMpe3VhKGMpfXZhciBiPXdhO2IuZihhKTsxMDA+Yi5iJiYoYi5iKyssYS5uZXh0PWIuYSxiLmE9YSl9Rz0hMX0NCjtmdW5jdGlvbiBIKCl7dGhpcy5jPXRoaXMuYzt0aGlzLmY9dGhpcy5mfQ0KSC5wcm90b3R5cGUuYz0hMTtILnByb3RvdHlwZS5kaXNwb3NlPWZ1bmN0aW9uKCl7dGhpcy5jfHwodGhpcy5jPSEwLHRoaXMuQSgpKX07DQpILnByb3RvdHlwZS5BPWZ1bmN0aW9uKCl7aWYodGhpcy5mKWZvcig7dGhpcy5mLmxlbmd0aDspdGhpcy5mLnNoaWZ0KCkoKX07ZnVuY3Rpb24gQmEoYSxiKXt2YXIgYyxkO3ZhciBlPWRvY3VtZW50O2U9Ynx8ZTtpZihlLnF1ZXJ5U2VsZWN0b3JBbGwmJmUucXVlcnlTZWxlY3RvciYmYSlyZXR1cm4gZS5xdWVyeVNlbGVjdG9yQWxsKGE/Ii4iK2E6IiIpO2lmKGEmJmUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSl7dmFyIGY9ZS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGEpO3JldHVybiBmfWY9ZS5nZXRFbGVtZW50c0J5VGFnTmFtZSgiKiIpO2lmKGEpe3ZhciBoPXt9O2ZvcihjPWQ9MDtlPWZbY107YysrKXt2YXIgdj1lLmNsYXNzTmFtZSxSO2lmKFI9ImZ1bmN0aW9uIj09dHlwZW9mIHYuc3BsaXQpUj0wPD1mYSh2LnNwbGl0KC9ccysvKSxhKTtSJiYoaFtkKytdPWUpfWgubGVuZ3RoPWQ7cmV0dXJuIGh9cmV0dXJuIGZ9DQpmdW5jdGlvbiBDYShhLGIpe2Zvcih2YXIgYz0wO2E7KXtpZihiKGEpKXJldHVybiBhO2E9YS5wYXJlbnROb2RlO2MrK31yZXR1cm4gbnVsbH0NCjt2YXIgST0iU3RvcEl0ZXJhdGlvbiJpbiBrP2suU3RvcEl0ZXJhdGlvbjp7bWVzc2FnZToiU3RvcEl0ZXJhdGlvbiIsc3RhY2s6IiJ9O2Z1bmN0aW9uIEooKXt9DQpKLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7dGhyb3cgSTt9Ow0KSi5wcm90b3R5cGUubT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTsNCmZ1bmN0aW9uIERhKGEpe2lmKGEgaW5zdGFuY2VvZiBKKXJldHVybiBhO2lmKCJmdW5jdGlvbiI9PXR5cGVvZiBhLm0pcmV0dXJuIGEubSghMSk7aWYocChhKSl7dmFyIGI9MCxjPW5ldyBKO2MubmV4dD1mdW5jdGlvbigpe2Zvcig7Oyl7aWYoYj49YS5sZW5ndGgpdGhyb3cgSTtpZihiIGluIGEpcmV0dXJuIGFbYisrXTtiKyt9fTsNCnJldHVybiBjfXRocm93IEVycm9yKCJOb3QgaW1wbGVtZW50ZWQiKTt9DQpmdW5jdGlvbiBFYShhLGIpe2lmKHAoYSkpdHJ5e3koYSxiLHZvaWQgMCl9Y2F0Y2goYyl7aWYoYyE9PUkpdGhyb3cgYzt9ZWxzZXthPURhKGEpO3RyeXtmb3IoOzspYi5jYWxsKHZvaWQgMCxhLm5leHQoKSx2b2lkIDAsYSl9Y2F0Y2goYyl7aWYoYyE9PUkpdGhyb3cgYzt9fX0NCmZ1bmN0aW9uIEZhKGEpe2lmKHAoYSkpcmV0dXJuIHooYSk7YT1EYShhKTt2YXIgYj1bXTtFYShhLGZ1bmN0aW9uKGEpe2IucHVzaChhKX0pOw0KcmV0dXJuIGJ9DQo7dmFyIEdhPWsuSlNPTi5zdHJpbmdpZnk7ZnVuY3Rpb24gSyhhKXtILmNhbGwodGhpcyk7dGhpcy5sPTE7dGhpcy5nPVtdO3RoaXMuaD0wO3RoaXMuYT1bXTt0aGlzLmI9e307dGhpcy5vPSEhYX0NCngoSyxIKTtnPUsucHJvdG90eXBlO2cuc3Vic2NyaWJlPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLmJbYV07ZHx8KGQ9dGhpcy5iW2FdPVtdKTt2YXIgZT10aGlzLmw7dGhpcy5hW2VdPWE7dGhpcy5hW2UrMV09Yjt0aGlzLmFbZSsyXT1jO3RoaXMubD1lKzM7ZC5wdXNoKGUpO3JldHVybiBlfTsNCmZ1bmN0aW9uIEhhKGEsYixjKXt2YXIgZD1MO2lmKGE9ZC5iW2FdKXt2YXIgZT1kLmE7KGE9aGEoYSxmdW5jdGlvbihhKXtyZXR1cm4gZVthKzFdPT1iJiZlW2ErMl09PWN9KSkmJmQuRChhKX19DQpnLkQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5hW2FdO2lmKGIpe3ZhciBjPXRoaXMuYltiXTtpZigwIT10aGlzLmgpdGhpcy5nLnB1c2goYSksdGhpcy5hW2ErMV09YWE7ZWxzZXtpZihjKXt2YXIgZD1mYShjLGEpOzA8PWQmJkFycmF5LnByb3RvdHlwZS5zcGxpY2UuY2FsbChjLGQsMSl9ZGVsZXRlIHRoaXMuYVthXTtkZWxldGUgdGhpcy5hW2ErMV07ZGVsZXRlIHRoaXMuYVthKzJdfX1yZXR1cm4hIWJ9Ow0KZy5IPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5iW2FdO2lmKGMpe2Zvcih2YXIgZD1BcnJheShhcmd1bWVudHMubGVuZ3RoLTEpLGU9MSxmPWFyZ3VtZW50cy5sZW5ndGg7ZTxmO2UrKylkW2UtMV09YXJndW1lbnRzW2VdO2lmKHRoaXMubylmb3IoZT0wO2U8Yy5sZW5ndGg7ZSsrKXt2YXIgaD1jW2VdO0lhKHRoaXMuYVtoKzFdLHRoaXMuYVtoKzJdLGQpfWVsc2V7dGhpcy5oKys7dHJ5e2ZvcihlPTAsZj1jLmxlbmd0aDtlPGY7ZSsrKWg9Y1tlXSx0aGlzLmFbaCsxXS5hcHBseSh0aGlzLmFbaCsyXSxkKX1maW5hbGx5e2lmKHRoaXMuaC0tLDA8dGhpcy5nLmxlbmd0aCYmMD09dGhpcy5oKWZvcig7Yz10aGlzLmcucG9wKCk7KXRoaXMuRChjKX19cmV0dXJuIDAhPWV9cmV0dXJuITF9Ow0KZnVuY3Rpb24gSWEoYSxiLGMpe3hhKGZ1bmN0aW9uKCl7YS5hcHBseShiLGMpfSl9DQpnLmNsZWFyPWZ1bmN0aW9uKGEpe2lmKGEpe3ZhciBiPXRoaXMuYlthXTtiJiYoeShiLHRoaXMuRCx0aGlzKSxkZWxldGUgdGhpcy5iW2FdKX1lbHNlIHRoaXMuYS5sZW5ndGg9MCx0aGlzLmI9e319Ow0KZy5BPWZ1bmN0aW9uKCl7Sy5KLkEuY2FsbCh0aGlzKTt0aGlzLmNsZWFyKCk7dGhpcy5nLmxlbmd0aD0wfTtmdW5jdGlvbiBKYSgpe30NCjtmdW5jdGlvbiBNKCl7fQ0KeChNLEphKTtNLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3ZhciBhPUZhKHRoaXMubSghMCkpLGI9dGhpczt5KGEsZnVuY3Rpb24oYSl7Yi5yZW1vdmUoYSl9KX07ZnVuY3Rpb24gTihhKXt0aGlzLmE9YX0NCngoTixNKTtmdW5jdGlvbiBLYShhKXtpZihhLmEpdHJ5e2EuYS5zZXRJdGVtKCJfX3NhayIsIjEiKSxhLmEucmVtb3ZlSXRlbSgiX19zYWsiKX1jYXRjaChiKXt9fQ0KZz1OLnByb3RvdHlwZTtnLnNldD1mdW5jdGlvbihhLGIpe3RyeXt0aGlzLmEuc2V0SXRlbShhLGIpfWNhdGNoKGMpe2lmKDA9PXRoaXMuYS5sZW5ndGgpdGhyb3ciU3RvcmFnZSBtZWNoYW5pc206IFN0b3JhZ2UgZGlzYWJsZWQiO3Rocm93IlN0b3JhZ2UgbWVjaGFuaXNtOiBRdW90YSBleGNlZWRlZCI7fX07DQpnLmdldD1mdW5jdGlvbihhKXthPXRoaXMuYS5nZXRJdGVtKGEpO2lmKCFsKGEpJiZudWxsIT09YSl0aHJvdyJTdG9yYWdlIG1lY2hhbmlzbTogSW52YWxpZCB2YWx1ZSB3YXMgZW5jb3VudGVyZWQiO3JldHVybiBhfTsNCmcucmVtb3ZlPWZ1bmN0aW9uKGEpe3RoaXMuYS5yZW1vdmVJdGVtKGEpfTsNCmcubT1mdW5jdGlvbihhKXt2YXIgYj0wLGM9dGhpcy5hLGQ9bmV3IEo7ZC5uZXh0PWZ1bmN0aW9uKCl7aWYoYj49Yy5sZW5ndGgpdGhyb3cgSTt2YXIgZD1jLmtleShiKyspO2lmKGEpcmV0dXJuIGQ7ZD1jLmdldEl0ZW0oZCk7aWYoIWwoZCkpdGhyb3ciU3RvcmFnZSBtZWNoYW5pc206IEludmFsaWQgdmFsdWUgd2FzIGVuY291bnRlcmVkIjtyZXR1cm4gZH07DQpyZXR1cm4gZH07DQpnLmNsZWFyPWZ1bmN0aW9uKCl7dGhpcy5hLmNsZWFyKCl9Ow0KZy5rZXk9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYS5rZXkoYSl9O2Z1bmN0aW9uIExhKCl7dmFyIGE9bnVsbDt0cnl7YT13aW5kb3cubG9jYWxTdG9yYWdlfHxudWxsfWNhdGNoKGIpe310aGlzLmE9YX0NCngoTGEsTik7ZnVuY3Rpb24gTWEoKXt2YXIgYT1udWxsO3RyeXthPXdpbmRvdy5zZXNzaW9uU3RvcmFnZXx8bnVsbH1jYXRjaChiKXt9dGhpcy5hPWF9DQp4KE1hLE4pO3ZhciBOYT0vXig/OihbXjovPyMuXSspOik/KD86XC9cLyg/OihbXi8/I10qKUApPyhbXi8jP10qPykoPzo6KFswLTldKykpPyg/PVsvIz9dfCQpKT8oW14/I10rKT8oPzpcPyhbXiNdKikpPyg/OiMoW1xzXFNdKikpPyQvO2Z1bmN0aW9uIE9hKGEpe3ZhciBiPWEubWF0Y2goTmEpO2E9YlsxXTt2YXIgYz1iWzJdLGQ9YlszXTtiPWJbNF07dmFyIGU9IiI7YSYmKGUrPWErIjoiKTtkJiYoZSs9Ii8vIixjJiYoZSs9YysiQCIpLGUrPWQsYiYmKGUrPSI6IitiKSk7cmV0dXJuIGV9DQpmdW5jdGlvbiBQYShhLGIsYyl7aWYoImFycmF5Ij09bihiKSlmb3IodmFyIGQ9MDtkPGIubGVuZ3RoO2QrKylQYShhLFN0cmluZyhiW2RdKSxjKTtlbHNlIG51bGwhPWImJmMucHVzaChhKygiIj09PWI/IiI6Ij0iK2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoYikpKSl9DQpmdW5jdGlvbiBRYShhKXt2YXIgYj1bXSxjO2ZvcihjIGluIGEpUGEoYyxhW2NdLGIpO3JldHVybiBiLmpvaW4oIiYiKX0NCnZhciBSYT0vI3wkLzt2YXIgTz13aW5kb3cueXQmJndpbmRvdy55dC5jb25maWdffHx3aW5kb3cueXRjZmcmJndpbmRvdy55dGNmZy5kYXRhX3x8e307dygieXQuY29uZmlnXyIsTyk7ZnVuY3Rpb24gU2EoYSl7dmFyIGI9YXJndW1lbnRzO2lmKDE8Yi5sZW5ndGgpT1tiWzBdXT1iWzFdO2Vsc2V7Yj1iWzBdO2Zvcih2YXIgYyBpbiBiKU9bY109YltjXX19DQo7ZnVuY3Rpb24gVGEoYSl7cmV0dXJuIGEmJndpbmRvdy55dGVycj9mdW5jdGlvbigpe3RyeXtyZXR1cm4gYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9Y2F0Y2goYil7VWEoYil9fTphfQ0KZnVuY3Rpb24gVWEoYSxiKXt2YXIgYz1tKCJ5dC5sb2dnaW5nLmVycm9ycy5sb2ciKTtjP2MoYSxiLHZvaWQgMCx2b2lkIDAsdm9pZCAwKTooYz1bXSxjPSJFUlJPUlMiaW4gTz9PLkVSUk9SUzpjLGMucHVzaChbYSxiLHZvaWQgMCx2b2lkIDAsdm9pZCAwXSksU2EoIkVSUk9SUyIsYykpfQ0KO3ZhciBWYT0wO3coInl0RG9tRG9tR2V0TmV4dElkIixtKCJ5dERvbURvbUdldE5leHRJZCIpfHxmdW5jdGlvbigpe3JldHVybisrVmF9KTt2YXIgV2E9e3N0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjoxLHN0b3BQcm9wYWdhdGlvbjoxLHByZXZlbnRNb3VzZUV2ZW50OjEscHJldmVudE1hbmlwdWxhdGlvbjoxLHByZXZlbnREZWZhdWx0OjEsbGF5ZXJYOjEsbGF5ZXJZOjEsc2NyZWVuWDoxLHNjcmVlblk6MSxzY2FsZToxLHJvdGF0aW9uOjEsd2Via2l0TW92ZW1lbnRYOjEsd2Via2l0TW92ZW1lbnRZOjF9Ow0KZnVuY3Rpb24gUChhKXt0aGlzLnR5cGU9IiI7dGhpcy5zb3VyY2U9dGhpcy5kYXRhPXRoaXMuY3VycmVudFRhcmdldD10aGlzLnJlbGF0ZWRUYXJnZXQ9dGhpcy50YXJnZXQ9bnVsbDt0aGlzLmNoYXJDb2RlPXRoaXMua2V5Q29kZT0wO3RoaXMubWV0YUtleT10aGlzLnNoaWZ0S2V5PXRoaXMuY3RybEtleT10aGlzLmFsdEtleT0hMTt0aGlzLmNsaWVudFk9dGhpcy5jbGllbnRYPTA7dGhpcy5jaGFuZ2VkVG91Y2hlcz10aGlzLnRvdWNoZXM9bnVsbDtpZihhPWF8fHdpbmRvdy5ldmVudCl7dGhpcy5hPWE7Zm9yKHZhciBiIGluIGEpYiBpbiBXYXx8KHRoaXNbYl09YVtiXSk7KGI9YS50YXJnZXR8fGEuc3JjRWxlbWVudCkmJjM9PWIubm9kZVR5cGUmJihiPWIucGFyZW50Tm9kZSk7dGhpcy50YXJnZXQ9YjtpZihiPWEucmVsYXRlZFRhcmdldCl0cnl7Yj1iLm5vZGVOYW1lP2I6bnVsbH1jYXRjaChjKXtiPW51bGx9ZWxzZSJtb3VzZW92ZXIiPT10aGlzLnR5cGU/Yj1hLmZyb21FbGVtZW50Og0KIm1vdXNlb3V0Ij09dGhpcy50eXBlJiYoYj1hLnRvRWxlbWVudCk7dGhpcy5yZWxhdGVkVGFyZ2V0PWI7dGhpcy5jbGllbnRYPXZvaWQgMCE9YS5jbGllbnRYP2EuY2xpZW50WDphLnBhZ2VYO3RoaXMuY2xpZW50WT12b2lkIDAhPWEuY2xpZW50WT9hLmNsaWVudFk6YS5wYWdlWTt0aGlzLmtleUNvZGU9YS5rZXlDb2RlP2Eua2V5Q29kZTphLndoaWNoO3RoaXMuY2hhckNvZGU9YS5jaGFyQ29kZXx8KCJrZXlwcmVzcyI9PXRoaXMudHlwZT90aGlzLmtleUNvZGU6MCk7dGhpcy5hbHRLZXk9YS5hbHRLZXk7dGhpcy5jdHJsS2V5PWEuY3RybEtleTt0aGlzLnNoaWZ0S2V5PWEuc2hpZnRLZXk7dGhpcy5tZXRhS2V5PWEubWV0YUtleX19DQpQLnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdD1mdW5jdGlvbigpe3RoaXMuYSYmKHRoaXMuYS5yZXR1cm5WYWx1ZT0hMSx0aGlzLmEucHJldmVudERlZmF1bHQmJnRoaXMuYS5wcmV2ZW50RGVmYXVsdCgpKX07DQpQLnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb249ZnVuY3Rpb24oKXt0aGlzLmEmJih0aGlzLmEuY2FuY2VsQnViYmxlPSEwLHRoaXMuYS5zdG9wUHJvcGFnYXRpb24mJnRoaXMuYS5zdG9wUHJvcGFnYXRpb24oKSl9Ow0KUC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uPWZ1bmN0aW9uKCl7dGhpcy5hJiYodGhpcy5hLmNhbmNlbEJ1YmJsZT0hMCx0aGlzLmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uJiZ0aGlzLmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkpfTt2YXIgQj1tKCJ5dEV2ZW50c0V2ZW50c0xpc3RlbmVycyIpfHx7fTt3KCJ5dEV2ZW50c0V2ZW50c0xpc3RlbmVycyIsQik7dmFyIFhhPW0oInl0RXZlbnRzRXZlbnRzQ291bnRlciIpfHx7Y291bnQ6MH07dygieXRFdmVudHNFdmVudHNDb3VudGVyIixYYSk7ZnVuY3Rpb24gWWEoYSxiLGMsZCl7ZD12b2lkIDA9PT1kPyExOmQ7YS5hZGRFdmVudExpc3RlbmVyJiYoIm1vdXNlZW50ZXIiIT1ifHwib25tb3VzZWVudGVyImluIGRvY3VtZW50PyJtb3VzZWxlYXZlIiE9Ynx8Im9ubW91c2VlbnRlciJpbiBkb2N1bWVudD8ibW91c2V3aGVlbCI9PWImJiJNb3pCb3hTaXppbmciaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlJiYoYj0iTW96TW91c2VQaXhlbFNjcm9sbCIpOmI9Im1vdXNlb3V0IjpiPSJtb3VzZW92ZXIiKTtyZXR1cm4gdGEoZnVuY3Rpb24oZSl7cmV0dXJuISFlLmxlbmd0aCYmZVswXT09YSYmZVsxXT09YiYmZVsyXT09YyYmZVs0XT09ISFkfSl9DQpmdW5jdGlvbiBaYShhKXthJiYoInN0cmluZyI9PXR5cGVvZiBhJiYoYT1bYV0pLHkoYSxmdW5jdGlvbihhKXtpZihhIGluIEIpe3ZhciBiPUJbYV0sZD1iWzBdLGU9YlsxXSxmPWJbM107Yj1iWzRdO2QucmVtb3ZlRXZlbnRMaXN0ZW5lcj9kLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSxmLGIpOmQuZGV0YWNoRXZlbnQmJmQuZGV0YWNoRXZlbnQoIm9uIitlLGYpO2RlbGV0ZSBCW2FdfX0pKX0NCmZ1bmN0aW9uICRhKGEsYixjKXt2YXIgZD12b2lkIDA9PT1kPyExOmQ7aWYoYSYmKGEuYWRkRXZlbnRMaXN0ZW5lcnx8YS5hdHRhY2hFdmVudCkpe3ZhciBlPVlhKGEsYixjLGQpO2lmKCFlKXtlPSsrWGEuY291bnQrIiI7dmFyIGY9ISgibW91c2VlbnRlciIhPWImJiJtb3VzZWxlYXZlIiE9Ynx8IWEuYWRkRXZlbnRMaXN0ZW5lcnx8Im9ubW91c2VlbnRlciJpbiBkb2N1bWVudCk7dmFyIGg9Zj9mdW5jdGlvbihkKXtkPW5ldyBQKGQpO2lmKCFDYShkLnJlbGF0ZWRUYXJnZXQsZnVuY3Rpb24oYil7cmV0dXJuIGI9PWF9KSlyZXR1cm4gZC5jdXJyZW50VGFyZ2V0PWEsZC50eXBlPWIsYy5jYWxsKGEsZCl9OmZ1bmN0aW9uKGIpe2I9bmV3IFAoYik7DQpiLmN1cnJlbnRUYXJnZXQ9YTtyZXR1cm4gYy5jYWxsKGEsYil9Ow0KaD1UYShoKTthLmFkZEV2ZW50TGlzdGVuZXI/KCJtb3VzZWVudGVyIj09YiYmZj9iPSJtb3VzZW92ZXIiOiJtb3VzZWxlYXZlIj09YiYmZj9iPSJtb3VzZW91dCI6Im1vdXNld2hlZWwiPT1iJiYiTW96Qm94U2l6aW5nImluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZSYmKGI9Ik1vek1vdXNlUGl4ZWxTY3JvbGwiKSxhLmFkZEV2ZW50TGlzdGVuZXIoYixoLGQpKTphLmF0dGFjaEV2ZW50KCJvbiIrYixoKTtCW2VdPVthLGIsYyxoLGRdfX19DQo7ZnVuY3Rpb24gYWIoYSl7ImZ1bmN0aW9uIj09bihhKSYmKGE9VGEoYSkpO3JldHVybiB3aW5kb3cuc2V0SW50ZXJ2YWwoYSwyNTApfQ0KO3ZhciBiYj17fTtmdW5jdGlvbiBjYihhKXtyZXR1cm4gYmJbYV18fChiYlthXT1TdHJpbmcoYSkucmVwbGFjZSgvXC0oW2Etel0pL2csZnVuY3Rpb24oYSxjKXtyZXR1cm4gYy50b1VwcGVyQ2FzZSgpfSkpfQ0KO3ZhciBRPXt9LFM9W10sTD1uZXcgSyxkYj17fTtmdW5jdGlvbiBlYigpe3koUyxmdW5jdGlvbihhKXthKCl9KX0NCmZ1bmN0aW9uIGZiKGEsYil7Ynx8KGI9ZG9jdW1lbnQpO3ZhciBjPXooYi5nZXRFbGVtZW50c0J5VGFnTmFtZSgieXQ6IithKSksZD0ieXQtIithLGU9Ynx8ZG9jdW1lbnQ7ZD16KGUucXVlcnlTZWxlY3RvckFsbCYmZS5xdWVyeVNlbGVjdG9yP2UucXVlcnlTZWxlY3RvckFsbCgiLiIrZCk6QmEoZCxiKSk7cmV0dXJuIGlhKGMsZCl9DQpmdW5jdGlvbiBUKGEsYil7cmV0dXJuInl0OiI9PWEudGFnTmFtZS50b0xvd2VyQ2FzZSgpLnN1YnN0cigwLDMpP2EuZ2V0QXR0cmlidXRlKGIpOmE/YS5kYXRhc2V0P2EuZGF0YXNldFtjYihiKV06YS5nZXRBdHRyaWJ1dGUoImRhdGEtIitiKTpudWxsfQ0KZnVuY3Rpb24gZ2IoYSxiKXtMLkguYXBwbHkoTCxhcmd1bWVudHMpfQ0KO2Z1bmN0aW9uIGhiKGEpe3RoaXMuYj1hfHx7fTt0aGlzLmY9e307dGhpcy5jPXRoaXMuYT0hMTthPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJ3d3ctd2lkZ2V0YXBpLXNjcmlwdCIpO2lmKHRoaXMuYT0hISgiaHR0cHM6Ij09ZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2x8fGEmJjA9PWEuc3JjLmluZGV4T2YoImh0dHBzOiIpKSl7YT1bdGhpcy5iLHdpbmRvdy5ZVENvbmZpZ3x8e30sdGhpcy5mXTtmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKylhW2JdLmhvc3QmJihhW2JdLmhvc3Q9YVtiXS5ob3N0LnJlcGxhY2UoImh0dHA6Ly8iLCJodHRwczovLyIpKX19DQp2YXIgVT1udWxsO2Z1bmN0aW9uIFYoYSxiKXtmb3IodmFyIGM9W2EuYix3aW5kb3cuWVRDb25maWd8fHt9LGEuZl0sZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1jW2RdW2JdO2lmKHZvaWQgMCE9ZSlyZXR1cm4gZX1yZXR1cm4gbnVsbH0NCmZ1bmN0aW9uIGliKGEsYixjKXtVfHwoVT17fSwkYSh3aW5kb3csIm1lc3NhZ2UiLHUoYS5nLGEpKSk7VVtjXT1ifQ0KaGIucHJvdG90eXBlLmc9ZnVuY3Rpb24oYSl7aWYoYS5vcmlnaW49PVYodGhpcywiaG9zdCIpfHxhLm9yaWdpbj09Vih0aGlzLCJob3N0IikucmVwbGFjZSgvXmh0dHA6LywiaHR0cHM6Iikpe3RyeXt2YXIgYj1KU09OLnBhcnNlKGEuZGF0YSl9Y2F0Y2goYyl7cmV0dXJufXRoaXMuYz0hMDt0aGlzLmF8fDAhPWEub3JpZ2luLmluZGV4T2YoImh0dHBzOiIpfHwodGhpcy5hPSEwKTtpZihhPVVbYi5pZF0pYS5CPSEwLGEuQiYmKHkoYS51LGEuQyxhKSxhLnUubGVuZ3RoPTApLGEuSShiKX19O2Z1bmN0aW9uIFcoYSxiLGMpe3RoaXMuaD10aGlzLmE9dGhpcy5iPW51bGw7dGhpcy5nPXRoaXNbcl18fCh0aGlzW3JdPSsrdCk7dGhpcy5jPTA7dGhpcy5CPSExO3RoaXMudT1bXTt0aGlzLmY9bnVsbDt0aGlzLmw9Yzt0aGlzLm89e307Yz1kb2N1bWVudDtpZihhPWwoYSk/Yy5nZXRFbGVtZW50QnlJZChhKTphKWlmKGM9ImlmcmFtZSI9PWEudGFnTmFtZS50b0xvd2VyQ2FzZSgpLGIuaG9zdHx8KGIuaG9zdD1jP09hKGEuc3JjKToiaHR0cHM6Ly93d3cueW91dHViZS5jb20iKSx0aGlzLmI9bmV3IGhiKGIpLGN8fChiPWpiKHRoaXMsYSksdGhpcy5oPWEsKGM9YS5wYXJlbnROb2RlKSYmYy5yZXBsYWNlQ2hpbGQoYixhKSxhPWIpLHRoaXMuYT1hLHRoaXMuYS5pZHx8KGE9Yj10aGlzLmEsYT1hW3JdfHwoYVtyXT0rK3QpLGIuaWQ9IndpZGdldCIrYSksUVt0aGlzLmEuaWRdPXRoaXMsd2luZG93LnBvc3RNZXNzYWdlKXt0aGlzLmY9bmV3IEs7a2IodGhpcyk7Yj1WKHRoaXMuYiwiZXZlbnRzIik7DQpmb3IodmFyIGQgaW4gYiliLmhhc093blByb3BlcnR5KGQpJiZ0aGlzLmFkZEV2ZW50TGlzdGVuZXIoZCxiW2RdKTtmb3IodmFyIGUgaW4gZGIpbGIodGhpcyxlKX19DQpnPVcucHJvdG90eXBlO2cuTT1mdW5jdGlvbihhLGIpe3RoaXMuYS53aWR0aD1hO3RoaXMuYS5oZWlnaHQ9YjtyZXR1cm4gdGhpc307DQpnLkw9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hfTsNCmcuST1mdW5jdGlvbihhKXt0aGlzLnMoYS5ldmVudCxhKX07DQpnLmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oYSxiKXt2YXIgYz1iOyJzdHJpbmciPT10eXBlb2YgYiYmKGM9ZnVuY3Rpb24oKXt3aW5kb3dbYl0uYXBwbHkod2luZG93LGFyZ3VtZW50cyl9KTsNCnRoaXMuZi5zdWJzY3JpYmUoYSxjKTttYih0aGlzLGEpO3JldHVybiB0aGlzfTsNCmZ1bmN0aW9uIGxiKGEsYil7dmFyIGM9Yi5zcGxpdCgiLiIpO2lmKDI9PWMubGVuZ3RoKXt2YXIgZD1jWzFdO2EubD09Y1swXSYmbWIoYSxkKX19DQpnLks9ZnVuY3Rpb24oKXt0aGlzLmEuaWQmJihRW3RoaXMuYS5pZF09bnVsbCk7dmFyIGE9dGhpcy5mO2EmJiJmdW5jdGlvbiI9PXR5cGVvZiBhLmRpc3Bvc2UmJmEuZGlzcG9zZSgpO2lmKHRoaXMuaCl7YT10aGlzLmE7dmFyIGI9YS5wYXJlbnROb2RlO2ImJmIucmVwbGFjZUNoaWxkKHRoaXMuaCxhKX1lbHNlKGE9dGhpcy5hKSYmYS5wYXJlbnROb2RlJiZhLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYSk7VSYmKFVbdGhpcy5nXT1udWxsKTt0aGlzLmI9bnVsbDthPXRoaXMuYTtmb3IodmFyIGMgaW4gQilCW2NdWzBdPT1hJiZaYShjKTt0aGlzLmg9dGhpcy5hPW51bGx9Ow0KZy52PWZ1bmN0aW9uKCl7cmV0dXJue319Ow0KZnVuY3Rpb24gWChhLGIsYyl7Yz1jfHxbXTtjPUFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGMpO2I9e2V2ZW50OiJjb21tYW5kIixmdW5jOmIsYXJnczpjfTthLkI/YS5DKGIpOmEudS5wdXNoKGIpfQ0KZy5zPWZ1bmN0aW9uKGEsYil7aWYoIXRoaXMuZi5jKXt2YXIgYz17dGFyZ2V0OnRoaXMsZGF0YTpifTt0aGlzLmYuSChhLGMpO2diKHRoaXMubCsiLiIrYSxjKX19Ow0KZnVuY3Rpb24gamIoYSxiKXtmb3IodmFyIGM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiaWZyYW1lIiksZD1iLmF0dHJpYnV0ZXMsZT0wLGY9ZC5sZW5ndGg7ZTxmO2UrKyl7dmFyIGg9ZFtlXS52YWx1ZTtudWxsIT1oJiYiIiE9aCYmIm51bGwiIT1oJiZjLnNldEF0dHJpYnV0ZShkW2VdLm5hbWUsaCl9Yy5zZXRBdHRyaWJ1dGUoImZyYW1lQm9yZGVyIiwwKTtjLnNldEF0dHJpYnV0ZSgiYWxsb3dmdWxsc2NyZWVuIiwxKTtjLnNldEF0dHJpYnV0ZSgiYWxsb3ciLCJhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhIik7Yy5zZXRBdHRyaWJ1dGUoInRpdGxlIiwiWW91VHViZSAiK1YoYS5iLCJ0aXRsZSIpKTsoZD1WKGEuYiwid2lkdGgiKSkmJmMuc2V0QXR0cmlidXRlKCJ3aWR0aCIsZCk7KGQ9VihhLmIsImhlaWdodCIpKSYmYy5zZXRBdHRyaWJ1dGUoImhlaWdodCIsZCk7dmFyIHY9YS52KCk7di5lbmFibGVqc2FwaT13aW5kb3cucG9zdE1lc3NhZ2U/MTowO3dpbmRvdy5sb2NhdGlvbi5ob3N0JiYNCih2Lm9yaWdpbj13aW5kb3cubG9jYXRpb24ucHJvdG9jb2wrIi8vIit3aW5kb3cubG9jYXRpb24uaG9zdCk7di53aWRnZXRpZD1hLmc7d2luZG93LmxvY2F0aW9uLmhyZWYmJnkoWyJkZWJ1Z2pzIiwiZGVidWdjc3MiXSxmdW5jdGlvbihhKXt2YXIgYj13aW5kb3cubG9jYXRpb24uaHJlZjt2YXIgYz1iLnNlYXJjaChSYSk7Yjp7dmFyIGQ9MDtmb3IodmFyIGU9YS5sZW5ndGg7MDw9KGQ9Yi5pbmRleE9mKGEsZCkpJiZkPGM7KXt2YXIgZj1iLmNoYXJDb2RlQXQoZC0xKTtpZigzOD09Znx8NjM9PWYpaWYoZj1iLmNoYXJDb2RlQXQoZCtlKSwhZnx8NjE9PWZ8fDM4PT1mfHwzNT09ZilicmVhayBiO2QrPWUrMX1kPS0xfWlmKDA+ZCliPW51bGw7ZWxzZXtlPWIuaW5kZXhPZigiJiIsZCk7aWYoMD5lfHxlPmMpZT1jO2QrPWEubGVuZ3RoKzE7Yj1kZWNvZGVVUklDb21wb25lbnQoYi5zdWJzdHIoZCxlLWQpLnJlcGxhY2UoL1wrL2csIiAiKSl9bnVsbD09PWJ8fCh2W2FdPWIpfSk7DQpjLnNyYz1WKGEuYiwiaG9zdDIiKTtyZXR1cm4gY30NCi8vVihhLmIsImhvc3QiKSthLncoKSsiPyIrUWEodik7DQpnLkc9ZnVuY3Rpb24oKXt0aGlzLmEmJnRoaXMuYS5jb250ZW50V2luZG93P3RoaXMuQyh7ZXZlbnQ6Imxpc3RlbmluZyJ9KTp3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmMpfTsNCmZ1bmN0aW9uIGtiKGEpe2liKGEuYixhLGEuZyk7YS5jPWFiKHUoYS5HLGEpKTskYShhLmEsImxvYWQiLHUoZnVuY3Rpb24oKXt3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLmMpO3RoaXMuYz1hYih1KHRoaXMuRyx0aGlzKSl9LGEpKX0NCmZ1bmN0aW9uIG1iKGEsYil7YS5vW2JdfHwoYS5vW2JdPSEwLFgoYSwiYWRkRXZlbnRMaXN0ZW5lciIsW2JdKSl9DQpnLkM9ZnVuY3Rpb24oYSl7YS5pZD10aGlzLmc7YS5jaGFubmVsPSJ3aWRnZXQiO2E9R2EoYSk7dmFyIGI9dGhpcy5iO3ZhciBjPU9hKHRoaXMuYS5zcmMpO2I9MD09Yy5pbmRleE9mKCJodHRwczoiKT9bY106Yi5hP1tjLnJlcGxhY2UoImh0dHA6IiwiaHR0cHM6IildOmIuYz9bY106W2MsYy5yZXBsYWNlKCJodHRwOiIsImh0dHBzOiIpXTtpZighdGhpcy5hLmNvbnRlbnRXaW5kb3cpdGhyb3cgRXJyb3IoIlRoZSBZb3VUdWJlIHBsYXllciBpcyBub3QgYXR0YWNoZWQgdG8gdGhlIERPTS4iKTtmb3IoYz0wO2M8Yi5sZW5ndGg7YysrKXRyeXt0aGlzLmEuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZShhLCcqJyl9Y2F0Y2goZCl7aWYoZC5uYW1lJiYiU3ludGF4RXJyb3IiPT1kLm5hbWUpVWEoZCwiV0FSTklORyIpO2Vsc2UgdGhyb3cgZDt9fTtLYShuZXcgTGEpO0thKG5ldyBNYSk7ZnVuY3Rpb24gbmIoYSl7cmV0dXJuKDA9PWEuc2VhcmNoKCJjdWUiKXx8MD09YS5zZWFyY2goImxvYWQiKSkmJiJsb2FkTW9kdWxlIiE9YX0NCmZ1bmN0aW9uIG9iKGEpe3JldHVybiAwPT1hLnNlYXJjaCgiZ2V0Iil8fDA9PWEuc2VhcmNoKCJpcyIpfQ0KO2Z1bmN0aW9uIFkoYSxiKXtpZighYSl0aHJvdyBFcnJvcigiWW91VHViZSBwbGF5ZXIgZWxlbWVudCBJRCByZXF1aXJlZC4iKTt2YXIgYz17dGl0bGU6InZpZGVvIHBsYXllciIsdmlkZW9JZDoiIix3aWR0aDo2NDAsaGVpZ2h0OjM2MH07YiYmZGEoYyxiKTtXLmNhbGwodGhpcyxhLGMsInBsYXllciIpO3RoaXMuaT17fTt0aGlzLmo9e319DQp4KFksVyk7ZnVuY3Rpb24gcGIoYSl7aWYoImlmcmFtZSIhPWEudGFnTmFtZS50b0xvd2VyQ2FzZSgpKXt2YXIgYj1UKGEsInZpZGVvaWQiKTtiJiYoYj17dmlkZW9JZDpiLHdpZHRoOlQoYSwid2lkdGgiKSxoZWlnaHQ6VChhLCJoZWlnaHQiKX0sbmV3IFkoYSxiKSl9fQ0KZz1ZLnByb3RvdHlwZTtnLnc9ZnVuY3Rpb24oKXtyZXR1cm4iL2VtYmVkLyIrVih0aGlzLmIsInZpZGVvSWQiKX07DQpnLnY9ZnVuY3Rpb24oKXt2YXIgYT1WKHRoaXMuYiwicGxheWVyVmFycyIpO2lmKGEpe3ZhciBiPXt9LGM7Zm9yKGMgaW4gYSliW2NdPWFbY107YT1ifWVsc2UgYT17fTt3aW5kb3chPXdpbmRvdy50b3AmJmRvY3VtZW50LnJlZmVycmVyO3JldHVybiBhfTsNCmcuST1mdW5jdGlvbihhKXt2YXIgYj1hLmV2ZW50O2E9YS5pbmZvO3N3aXRjaChiKXtjYXNlICJhcGlJbmZvRGVsaXZlcnkiOmlmKHEoYSkpZm9yKHZhciBjIGluIGEpdGhpcy5pW2NdPWFbY107YnJlYWs7Y2FzZSAiaW5mb0RlbGl2ZXJ5IjpxYih0aGlzLGEpO2JyZWFrO2Nhc2UgImluaXRpYWxEZWxpdmVyeSI6d2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5jKTt0aGlzLmo9e307dGhpcy5pPXt9O3JiKHRoaXMsYS5hcGlJbnRlcmZhY2UpO3FiKHRoaXMsYSk7YnJlYWs7ZGVmYXVsdDp0aGlzLnMoYixhKX19Ow0KZnVuY3Rpb24gcWIoYSxiKXtpZihxKGIpKWZvcih2YXIgYyBpbiBiKWEualtjXT1iW2NdfQ0KZnVuY3Rpb24gcmIoYSxiKXt5KGIsZnVuY3Rpb24oYSl7dGhpc1thXXx8KCJnZXRDdXJyZW50VGltZSI9PWE/dGhpc1thXT1mdW5jdGlvbigpe3ZhciBhPXRoaXMuai5jdXJyZW50VGltZTtpZigxPT10aGlzLmoucGxheWVyU3RhdGUpe3ZhciBiPShlYSgpLzFFMy10aGlzLmouY3VycmVudFRpbWVMYXN0VXBkYXRlZF8pKnRoaXMuai5wbGF5YmFja1JhdGU7MDxiJiYoYSs9TWF0aC5taW4oYiwxKSl9cmV0dXJuIGF9Om5iKGEpP3RoaXNbYV09ZnVuY3Rpb24oKXt0aGlzLmo9e307DQp0aGlzLmk9e307WCh0aGlzLGEsYXJndW1lbnRzKTtyZXR1cm4gdGhpc306b2IoYSk/dGhpc1thXT1mdW5jdGlvbigpe3ZhciBiPTA7DQowPT1hLnNlYXJjaCgiZ2V0Iik/Yj0zOjA9PWEuc2VhcmNoKCJpcyIpJiYoYj0yKTtyZXR1cm4gdGhpcy5qW2EuY2hhckF0KGIpLnRvTG93ZXJDYXNlKCkrYS5zdWJzdHIoYisxKV19OnRoaXNbYV09ZnVuY3Rpb24oKXtYKHRoaXMsYSxhcmd1bWVudHMpOw0KcmV0dXJuIHRoaXN9KX0sYSl9DQpnLlA9ZnVuY3Rpb24oKXt2YXIgYT1wYXJzZUludChWKHRoaXMuYiwid2lkdGgiKSwxMCk7dmFyIGI9cGFyc2VJbnQoVih0aGlzLmIsImhlaWdodCIpLDEwKTt2YXIgYz1WKHRoaXMuYiwiaG9zdCIpK3RoaXMudygpO3FhLnRlc3QoYykmJigtMSE9Yy5pbmRleE9mKCImIikmJihjPWMucmVwbGFjZShrYSwiJmFtcDsiKSksLTEhPWMuaW5kZXhPZigiPCIpJiYoYz1jLnJlcGxhY2UobGEsIiZsdDsiKSksLTEhPWMuaW5kZXhPZigiPiIpJiYoYz1jLnJlcGxhY2UobWEsIiZndDsiKSksLTEhPWMuaW5kZXhPZignIicpJiYoYz1jLnJlcGxhY2UobmEsIiZxdW90OyIpKSwtMSE9Yy5pbmRleE9mKCInIikmJihjPWMucmVwbGFjZShvYSwiJiMzOTsiKSksLTEhPWMuaW5kZXhPZigiXHgwMCIpJiYoYz1jLnJlcGxhY2UocGEsIiYjMDsiKSkpO2E9JzxpZnJhbWUgd2lkdGg9IicrYSsnIiBoZWlnaHQ9IicrYisnIiBzcmM9IicrYysnIiBmcmFtZWJvcmRlcj0iMCIgYWxsb3c9ImF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWEiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nOw0KcmV0dXJuIGF9Ow0KZy5PPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmkubmFtZXNwYWNlcz9hP3RoaXMuaVthXS5vcHRpb25zfHxbXTp0aGlzLmkubmFtZXNwYWNlc3x8W106W119Ow0KZy5OPWZ1bmN0aW9uKGEsYil7aWYodGhpcy5pLm5hbWVzcGFjZXMmJmEmJmIpcmV0dXJuIHRoaXMuaVthXVtiXX07ZnVuY3Rpb24gWihhLGIpe3ZhciBjPXt0aXRsZToiVGh1bWJuYWlsIix2aWRlb0lkOiIiLHdpZHRoOjEyMCxoZWlnaHQ6Njh9O2ImJmRhKGMsYik7Vy5jYWxsKHRoaXMsYSxjLCJ0aHVtYm5haWwiKX0NCngoWixXKTtmdW5jdGlvbiBzYihhKXtpZigiaWZyYW1lIiE9YS50YWdOYW1lLnRvTG93ZXJDYXNlKCkpe3ZhciBiPVQoYSwidmlkZW9pZCIpO2lmKGIpe2I9e3ZpZGVvSWQ6YixldmVudHM6e319O2Iud2lkdGg9VChhLCJ3aWR0aCIpO2IuaGVpZ2h0PVQoYSwiaGVpZ2h0Iik7Yi50aHVtYldpZHRoPVQoYSwidGh1bWItd2lkdGgiKTtiLnRodW1iSGVpZ2h0PVQoYSwidGh1bWItaGVpZ2h0Iik7Yi50aHVtYkFsaWduPVQoYSwidGh1bWItYWxpZ24iKTt2YXIgYz1UKGEsIm9uY2xpY2siKTtjJiYoYi5ldmVudHMub25DbGljaz1jKTtuZXcgWihhLGIpfX19DQpaLnByb3RvdHlwZS53PWZ1bmN0aW9uKCl7cmV0dXJuIi9lbWJlZC8iK1YodGhpcy5iLCJ2aWRlb0lkIil9Ow0KWi5wcm90b3R5cGUudj1mdW5jdGlvbigpe3JldHVybntwbGF5ZXI6MCx0aHVtYl93aWR0aDpWKHRoaXMuYiwidGh1bWJXaWR0aCIpLHRodW1iX2hlaWdodDpWKHRoaXMuYiwidGh1bWJIZWlnaHQiKSx0aHVtYl9hbGlnbjpWKHRoaXMuYiwidGh1bWJBbGlnbiIpfX07DQpaLnByb3RvdHlwZS5zPWZ1bmN0aW9uKGEsYil7Wi5KLnMuY2FsbCh0aGlzLGEsYj9iLmluZm86dm9pZCAwKX07dygiWVQuUGxheWVyU3RhdGUuVU5TVEFSVEVEIiwtMSk7dygiWVQuUGxheWVyU3RhdGUuRU5ERUQiLDApO3coIllULlBsYXllclN0YXRlLlBMQVlJTkciLDEpO3coIllULlBsYXllclN0YXRlLlBBVVNFRCIsMik7dygiWVQuUGxheWVyU3RhdGUuQlVGRkVSSU5HIiwzKTt3KCJZVC5QbGF5ZXJTdGF0ZS5DVUVEIiw1KTt3KCJZVC5nZXQiLGZ1bmN0aW9uKGEpe3JldHVybiBRW2FdfSk7DQp3KCJZVC5zY2FuIixlYik7dygiWVQuc3Vic2NyaWJlIixmdW5jdGlvbihhLGIsYyl7TC5zdWJzY3JpYmUoYSxiLGMpO2RiW2FdPSEwO2Zvcih2YXIgZCBpbiBRKWxiKFFbZF0sYSl9KTsNCncoIllULnVuc3Vic2NyaWJlIixmdW5jdGlvbihhLGIsYyl7SGEoYSxiLGMpfSk7DQp3KCJZVC5QbGF5ZXIiLFkpO3coIllULlRodW1ibmFpbCIsWik7Vy5wcm90b3R5cGUuZGVzdHJveT1XLnByb3RvdHlwZS5LO1cucHJvdG90eXBlLnNldFNpemU9Vy5wcm90b3R5cGUuTTtXLnByb3RvdHlwZS5nZXRJZnJhbWU9Vy5wcm90b3R5cGUuTDtXLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyPVcucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI7WS5wcm90b3R5cGUuZ2V0VmlkZW9FbWJlZENvZGU9WS5wcm90b3R5cGUuUDtZLnByb3RvdHlwZS5nZXRPcHRpb25zPVkucHJvdG90eXBlLk87WS5wcm90b3R5cGUuZ2V0T3B0aW9uPVkucHJvdG90eXBlLk47Uy5wdXNoKGZ1bmN0aW9uKGEpe2E9ZmIoInBsYXllciIsYSk7eShhLHBiKX0pOw0KUy5wdXNoKGZ1bmN0aW9uKCl7dmFyIGE9ZmIoInRodW1ibmFpbCIpO3koYSxzYil9KTsNCiJ1bmRlZmluZWQiIT10eXBlb2YgWVRDb25maWcmJllUQ29uZmlnLnBhcnNldGFncyYmIm9ubG9hZCIhPVlUQ29uZmlnLnBhcnNldGFnc3x8ZWIoKTt2YXIgdGI9bSgib25ZVFJlYWR5Iik7dGImJnRiKCk7dmFyIHViPW0oIm9uWW91VHViZUlmcmFtZUFQSVJlYWR5Iik7dWImJnViKCk7dmFyIHZiPW0oIm9uWW91VHViZVBsYXllckFQSVJlYWR5Iik7dmImJnZiKCk7fSkuY2FsbCh0aGlzKTs=';
	var b123 = document.getElementsByTagName('head')[0];
	b123.parentNode.insertBefore(a123, b123);
	})();}	
}


var b = document.getElementsByTagName('head')[0];
var s = document.createElement('style');
s.innerHTML='#'+overoll_id+',#LINK_IK{display:inline-block}#IK-title,#SkipAD_IK{display:none}#IK-title,#LINK_IK,#SkipAD_IK{position:absolute;margin:0;padding:6px;text-align:center;color:#fff;font-weight:700;background:rgba(0,0,0,.75)}#IK-player-controls,#IK-player-video,#overley-content{position:absolute;left:0;top:0;padding:0;margin:0;height:100%;width:100%}#overley-content{z-index:1000;font-size:14px}#'+overoll_id+'{cursor:pointer;position:relative}#IK-player-controls{z-index:1;display:none}#IK-player-video{z-index:2}#LINK_IK:hover,#SkipAD_IK:hover{border:3px solid #ff6300;text-decoration:none}#LINK_IK,#SkipAD_IK{cursor:pointer;border:3px solid rgba(0,0,0,.75);right:8px;bottom:8px;text-decoration:none}#SkipAD_IK{bottom:45px;}#LINK_IK{left:8px;right:auto}#IK-title{font-size:1.2em;z-index:3;left:10px;top:20px;border:none}'+'#'+overoll_id+'{display:block;}';
b.parentNode.insertBefore(s, b);


if(window['IK_lang'] == undefined){
	var IK_lang={
		Title_text:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u043d\u0430\u0447\u043d\u0435\u0442\u0441\u044f \u043f\u043e\u0441\u043b\u0435 \u0440\u0435\u043a\u043b\u0430\u043c\u044b",
		Link_text:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0432\u0438\u0434\u0435\u043e",
		Skip_time:"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437",
		Skip_text:'\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u0443',
	}
}
function ik_s_cook(a,b){var e=new Date();e.setTime(e.getTime()+240*1000);var t=a+"="+(escape('true')+"; expires="+e.toUTCString())+";path=/";document.cookie=t}
function ik_g_cook(e){var t,i,n=document.cookie.split(";"),o=!1;for(t=0;t<n.length;t++)i=n[t].substr(0,n[t].indexOf("=")),n[t].substr(n[t].indexOf("=")+1),(i=i.replace(/^\s+|\s+$/g,""))==e&&(o=!0);if(o)return 1}
var YT_IK,YT_IK_GO,xmlhttp,yt_data_p2,IK_ct=0,is2=[],is3=[],IK_timeout;
if(overoll_alpha == undefined) var overoll_alpha=0;
var IK_PL=document.getElementById(overoll_id);
var IK_CONT=document.createElement('div');
var callback_adv_maket = function(){
		console.log('callback_adv_maket');
		IK_fun_c();
};
var all_stop_formats = function(){
		console.log('all_stop_formats');
		var is222=new Image();
		//is222.src="https://yt.advmaker.su/cnt/ping.php?l=19&d=1&a=1&adv=0&rand="+Date.now();	
		IK_PL.style.cursor='default';	
		IK_CONT.parentNode.removeChild(IK_CONT);
		try{IK_callback();} catch (err) {} 	
}
var s1azc=0;
var aswsv=0;
var get_vast = function(){
	s1azc=0;
	console.log('get_vast');
	IK_CONT.style.opacity='1';
	document.getElementById('YT_IK').style.height='100%';
	document.getElementById('YT_IK').style.width='100%';
	var vast = document.createElement('iframe');
	vast.onerror= function(){
		all_stop_formats();
	};
	vast.onload= function(){
		s1azc=1;
		IK_CONT.style.display='block';
		vast.setAttribute("style","height:100%;width:100%;border:0px;"); ;
	};
	document.getElementById('YT_IK').innerHTML="";  
	IK_CONT.style.display='block';
	//setTimeout(function(){if(s1azc!=1)IK_CONT.style.display='none';all_stop_formats();},8000);
	vast.setAttribute("style","height:100%;width:100%;border:0px;"); 
	vast.setAttribute("allowFullScreen","");  
	
	
	if(aswsv==0){
		vast.setAttribute("src","https://ad.anistar.me/vast2/index.html?a=45523"); 	
	} else vast.setAttribute("src","https://ad.anistar.me/vast2/viboom_rotator.html?a=322");   	
	
	document.getElementById('YT_IK').appendChild(vast);
};
var callback_adv_maket_finish = function(){
		console.log('callback_adv_maket_finish');
};
var callback_adv_maket_skeep = function(){
		console.log('callback_adv_maket_skeep');
		IK_PL.style.cursor='default';	
		IK_CONT.style.display='none';
		document.getElementById('YT_IK').innerHTML="";  
		try{IK_callback_finish();} catch (err) {} 
};
var IK_listener = function(a){
		if(a.data=='IK_start'){
			try{IK_callback_start();} catch (err) {} 
		}
		if(a.data=='IK_callback_finish'){
			IK_CONT.style.display='none';
			try{IK_callback_finish();} catch (err) {} 
		}
		if(a.data=='callback_adv_maket_finish' || a.data=='IK_impresse'){
			callback_adv_maket_finish();
		}
		if(a.data=='callback_adv_maket') {
			callback_adv_maket();
		}
		if(a.data=='IK_noads') {
			if(aswsv==0){
				aswsv=1;
				get_vast();				
			} else {				
				all_stop_formats();
			}
		}
		if(a.data=='IK_onerror') {
			all_stop_formats();
		}
		if(a.data=='callback_adv_maket_skeep_twitch') {
		IK_PL.style.cursor='default';	
		IK_CONT.style.display='none'; 
			try{IK_callback_finish();} catch (err) {} 	
			var is222=new Image();
			is222.src="https://yt.advmaker.su/cnt/ping.php?l="+overoll_client_id+"&d=1&a=2&adv=0&rand="+Date.now();	
			try{IK_callback_impress();} catch (err) {} 	
		}
		if(a.data=='callback_adv_maket_skeep' || a.data=='IK_view') {
			callback_adv_maket_skeep();
			var is222=new Image();
			is222.src="https://yt.advmaker.su/cnt/ping.php?l="+overoll_client_id+"&d=1&a=1&adv=0&rand="+Date.now();
			try{IK_callback_impress();} catch (err) {} 
		}
	}
	if (window.addEventListener) {
		window.addEventListener("message", IK_listener);
	} else {
		window.attachEvent("onmessage", IK_listener);
	}

IK_CONT.id="overley-content";
IK_CONT.innerHTML="<div id='IK-player-video'>"+
						"<div id='YT_IK'></div>"+
				   "</div>"+
					"<div id='IK-title'>"+IK_lang.Title_text+"</div>"+
				   "<div id='IK-player-controls'>"+
							"<button id='SkipAD_IK'>"+IK_lang.Skip_time+" 14</button>"+
							"<a id='LINK_IK' target='blank__'>"+IK_lang.Link_text+"</a>"+
							"<div id='IK-dur'><span></span></div>"+
					"</div>";
IK_PL.appendChild(IK_CONT);	
var IKready=false;
var SkipAD_IK=document.getElementById('SkipAD_IK');
var last_time_IK=0;
var YK_star=function(d){
	
									IK_CONT.style.display='block';
									var YT_Delivery;
									var onPlayerReady = function(e){
										if(IK_ct==0){
											try{IK_callback_start();} catch (err) {} 
											IK_CONT.style.display='block';
											YT_IK.cueVideoById(yt_data_p2[2][0][5],0,'small');
											document.getElementById('IK-title').style.display='block';
											IK_PL.style.cursor='default';
											e.target.unMute();
											SkipAD_IK.style.display='block';
											if(YT_IK.getVolume>40)YT_IK.setVolume(40);
											YT_Delivery=setInterval(oninfoDelivery,1000);
										} 
									};
									
									var oninfoDelivery = function(e){
										if(last_time_IK !=0){
											if(last_time_IK<YT_IK.getCurrentTime()){
												document.getElementById('IK-player-controls').style.display='block';
												document.getElementById('IK-player-controls').style.zIndex='3';
												if(YT_IK_GO==true){
													
												}
												if(clock == 14 && last_time_IK > 3){
													SkipAD_IK.innerHTML=IK_lang.Skip_time+' '+clock;
													clock=clock-1;
													cltimer=setInterval(function(){
														SkipAD_IK.innerHTML=IK_lang.Skip_time+' '+clock;
														clock=clock-1;
													},1000);
													setTimeout(function(){
														clearInterval(cltimer);
														SkipAD_IK.innerHTML=IK_lang.Skip_text;
														SkipAD_IK.onclick=function(){
															YT_IK.mute();
															IK_CONT.style.display='none';
															if(tv==true){
																YT_IK.destroy();
															}
															try{IK_callback_finish();} catch (err) {} 
															clearInterval(YT_Delivery);
														};
													},15000);													
												}
											}
										}										
										last_time_IK=YT_IK.getCurrentTime();
									}
									var onStateChange = function(e){
										if(e.data==-1){IK_ct=IK_ct+1;}
										if(IK_ct>1){
											if(e.data == 1){
												if(YT_IK_GO !=true){
													IK_CONT.style.opacity='1';
													YT_IK_GO=true;
													var is222=new Image();
													is222.src="https://yt.advmaker.su/cnt/ping.php?l="+overoll_client_id+"&d=1&a="+yt_data_p2[2][0][1]+"&adv=0&rand="+Date.now();
													clock=14;
													cltimer=setInterval(function(){
														SkipAD_IK.innerHTML=IK_lang.Skip_time+' '+clock;
														clock=clock-1;
													},1000);
													setTimeout(function(){
														clearInterval(cltimer);
														SkipAD_IK.innerHTML=IK_lang.Skip_text;
														SkipAD_IK.onclick=function(){
															YT_IK.mute();
															IK_CONT.style.display='none';
															if(tv==true){
																YT_IK.destroy();
															}
															try{IK_callback_finish();} catch (err) {} 
															clearInterval(YT_Delivery);
														};
													},15000);
													try{IK_callback_impress();} catch (err) {} 
												}
											}
											if(e.data != 0){
												document.getElementById('IK-player-controls').style.display='block';
												document.getElementById('IK-player-controls').style.zIndex='3';
												//document.getElementById('LINK_IK').href=e.target.getVideoUrl();
												document.getElementById('LINK_IK').href="https://yt.advmaker.su/cnt/redirect.php?a="+yt_data_p2[2][0][1]+'&vid='+yt_data_p2[2][0][5];	
											}												
											if( e.data== YT.PlayerState.ENDED){
												IK_CONT.style.display='none';
												try{IK_callback_finish();} catch (err) {} 
												clearInterval(YT_Delivery);
											}
										}
									};
									
									playerVars2 = {	
											mute:0,
											volume:51,
											autoplay:0,
											rel: 0,
											showinfo: 0,
											playsinline: 1,
											controls: 0,
											origin: '*',
											widget_referrer:'https://vk.com/brbshow',
											iv_load_policy:3,
											rel:0,
											start:0,
											nologo:1,
											modestbranding:1
									};	
									playerVars2.docid=yt_data_p2[2][0][5];
									
									if(yt_data_p2[2][0][13]=='no') host3='https://www.youtube.com/embed/?mute=0&volume=51&autoplay=0&rel=0&showinfo=0&playsinline=1&controls=0&origin=*&iv_load_policy=3&start=0&nologo=1&modestbranding=1&enablejsapi=1&widgetid=1';
									else if(yt_data_p2[2][0][13]=='vk') host3 = 'https://vk.com/away.php?utf=1&to=https%3A%2F%2Fwww.youtube.com%2Fembed%2F%3Fmute%3D0%26volume%3D70%26autoplay%3D0%26rel%3D0%26showinfo%3D0%26playsinline%3D1%26controls%3D0%26origin%3D*%26iv_load_policy%3D3%26start%3D0%26nologo%3D1%26modestbranding%3D1%26enablejsapi%3D1%26widgetid%3D1';
									else if(yt_data_p2[2][0][13]=='instagram') host3 = 'https://l.instagram.com/?u=https%3A%2F%2Fwww.youtube.com%2Fembed%2FrSRXXxWhIKQ%3Fmute%3D0%26volume%3D70%26autoplay%3D0%26rel%3D0%26showinfo%3D0%26playsinline%3D1%26controls%3D0%26origin%3D*%26iv_load_policy%3D3%26start%3D0%26nologo%3D1%26modestbranding%3D1%26enablejsapi%3D1%26widgetid%3D1&e=ATMb6LSdkRs5E1-sVO7mxSgxBXEt3HUhjXiNKH2yWpxXZH3_W8_JpGvYZhIjrdn6CGLH5Uaca8tr9YfE';
									else host3='https://t.co/UZtEpeGLqv';
									YT_IK = new YT.Player('YT_IK', {
										host2:host3,
										height: '100%',
										width: '100%',
										playerVars: playerVars2,
											events: {
												"onReady": onPlayerReady,
												"onStateChange": onStateChange,	
												'onError': function(){
													IK_fun_c();
												}												
											}
									});
}
	var get_stream = function(){		
		s1azc=0;
		IK_CONT.style.opacity='1';
		document.getElementById('YT_IK').style.height='100%';
		document.getElementById('YT_IK').style.width='100%';
		var stream = document.createElement('iframe');
		stream.onerror= function(){
			all_stop_formats();
		};
		stream.onload= function(){
			s1azc=1;
			IK_CONT.style.display='block';
			stream.setAttribute("style","height:100%;width:100%;border:0px;"); 
		};
		document.getElementById('YT_IK').innerHTML="";  
		IK_CONT.style.display='block';
		stream.setAttribute("style","height:100%;width:100%;border:0px;"); 
		stream.setAttribute("allowFullScreen","");  
		
		stream.setAttribute("src","https://stream.reyden-x.com/?site_id="+overoll_client_id);     	
		document.getElementById('YT_IK').appendChild(stream);
	}
	var IK_fun_c = function(){
		IK_CONT.style.display='none';
		if(xmlhttp) xmlhttp.abort();
		xmlhttp = new XMLHttpRequest();
		xmlhttp.withCredentials = true;
		xmlhttp.onreadystatechange = function() {
			if (xmlhttp.readyState == 4 && xmlhttp.status != 200) {	
					IK_CONT.style.display='none';				
			}
			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {		
						yt_data_p2 = JSON.parse(xmlhttp.responseText);
						if(yt_data_p2[2][0][2]=='wait'){
							clearTimeout(IK_timeout);
							get_vast();
							IK_ct=10;
						} else {
							loader_yt_js();
							if(ik_g_cook('yt'+yt_data_p2[2][0][1])==1){
								setTimeout(IK_fun_c,100);
							} else {
								ik_s_cook('yt'+yt_data_p2[2][0][1],1);
								setTimeout(YK_star,330);
							}
							
						} 
					}
			}
		IK_timeout=setTimeout(function(){
				if(IK_ct==0){
					IK_CONT.style.display='none';
					xmlhttp.abort();
					console.log('block_ads');
					try{IK_callback();} catch (err) {} 
				}
		},30000);
		//xmlhttp.open("GET", 'https://yt.advmaker.su/yt.php', true);
		xmlhttp.open("GET", 'https://coolboy112233.github.io/unknowbastard/data1.php', true);
		xmlhttp.send(); 
	};
	var IK_click_start=0;
	IK_PL.onclick= function(){
		if(IK_click_start == 0){
			IK_click_start=1;
			if(IKready==false && tv!=true){
				IKready = true;
				get_stream();
			} else {
					if(IK_ct==0){
						IK_CONT.style.display='none';
						xmlhttp.abort();
						console.log('block_ads');
						try{IK_callback();} catch (err) {} 
					}			
			}
		}
	};
	if(window['IK_overoll_install']!=undefined){
		if(IK_overoll_install==1)IK_PL.click();
		//IK_CONT.style.opacity='0';
	}
