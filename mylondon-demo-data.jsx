<!DOCTYPE html>
<html lang="en">

<head>
	<noscript><meta http-equiv="refresh" content="0; URL=/?redir=%2Ffiles-pri%2FT02C4BL7J-F0427B99D%2Fdata.jsx&amp;nojsmode=1" /></noscript>
<script type="text/javascript">
window.load_start_ms = new Date().getTime();
window.load_log = [];
window.logLoad = function(k) {
	var ms = new Date().getTime();
	window.load_log.push({
		k: k,
		t: (ms-window.load_start_ms)/1000
	})
}
if(self!==top)window.document.write("\u003Cstyle>body * {display:none !important;}\u003C\/style>\u003Ca href=\"#\" onclick="+
"\"top.location.href=window.location.href\" style=\"display:block !important;padding:10px\">Go to Slack.com\u003C\/a>");
</script>


<script type="text/javascript">
window.callSlackAPIUnauthed = function(method, args, callback) {
	var url = '/api/'+method+'?t='+new Date().getTime();
	var req = new XMLHttpRequest();
	
	req.onreadystatechange = function() {
		if (req.readyState == 4) {
			req.onreadystatechange = null;
			var obj;
			
			if (req.status == 200) {
				if (req.responseText.indexOf('{') == 0) {
					try {
						eval('obj = '+req.responseText);
					} catch (err) {
						console.warn('unable to do anything with api rsp');
					}
				}
			}
			
			obj = obj || {
				ok: false	
			}
			
			callback(obj.ok, obj, args);
		}
	}
	
	req.open('POST', url, 1);
	req.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	var args2 = [];
	for (i in args) {
		args2[args2.length] = encodeURIComponent(i)+'='+encodeURIComponent(args[i]);
	}

	req.send(args2.join('&'));
}
</script>
			<meta name="referrer" content="no-referrer">
			<meta name="superfish" content="nofish">
	<script type="text/javascript">



var TS_last_log_date = null;
var TSMakeLogDate = function() {
	var date = new Date();
	
	var y = date.getFullYear();
	var mo = date.getMonth()+1;
	var d = date.getDate();

	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	var ms = date.getMilliseconds();
	var str = y+'/'+mo+'/'+d+' '+h+':'+mi+':'+s+'.'+ms;
	if (TS_last_log_date) {
		var diff = date-TS_last_log_date;
		//str+= ' ('+diff+'ms)';
	}
	TS_last_log_date = date;
	return str+' ';
}

var TSSSB = {
	
	
	call: function() {
		return false;
	}
	
	
}

</script>	<script type="text/javascript">TSSSB.call('didFinishLoading');</script>
	    <meta charset="utf-8">
    <title data-title-suffix="Slack">Slack</title>
    <meta name="author" content="Slack">
    <meta name="robots" content="noindex,nofollow">

							
															
    									
		
		<!-- output_css "core" -->
    <link href="https://slack.global.ssl.fastly.net/f2af/style/rollup-plastic.css" rel="stylesheet" type="text/css">

	<!-- output_css "regular" -->
    <link href="https://slack.global.ssl.fastly.net/5319/style/libs/lato-1.css" rel="stylesheet" type="text/css">

		<style>
	
		@media only screen and (max-width: 480px) {
			h1 {
				font-size: 1.5rem;
				margin-left: -0.5rem;
				margin-right: -0.5rem;
			}
		}
	
	</style>


	
	
	

	<!--[if lt IE 9]>
	<script src="https://slack.global.ssl.fastly.net/ef0d/js/libs/html5shiv.js"></script>
	<![endif]-->

	
<link id="favicon" rel="shortcut icon" href="https://slack.global.ssl.fastly.net/272a/img/icons/favicon-32.png" sizes="16x16 32x32 48x48" type="image/png" />

<link rel="icon" href="https://slack.global.ssl.fastly.net/ba3c/img/icons/app-256.png" sizes="256x256" type="image/png" />

<link rel="apple-touch-icon-precomposed" sizes="152x152" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-152.png" />
<link rel="apple-touch-icon-precomposed" sizes="144x144" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-144.png" />
<link rel="apple-touch-icon-precomposed" sizes="120x120" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-120.png" />
<link rel="apple-touch-icon-precomposed" sizes="114x114" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-114.png" />
<link rel="apple-touch-icon-precomposed" sizes="72x72" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-72.png" />
<link rel="apple-touch-icon-precomposed" href="https://slack.global.ssl.fastly.net/0dc1/img/icons/ios-57.png" />

<meta name="msapplication-TileColor" content="#FFFFFF" />
<meta name="msapplication-TileImage" content="https://slack.global.ssl.fastly.net/272a/img/icons/app-144.png" />	<script>
(function(g){var n=0,h=[];g.onerror=function(a,b,d,f,c){c=c||null;f=f||-1;k?l(a,b,d,f,null,c):h.push([a,b,d,f,null,c])};var k=0,p=function(a){return void 0==a?"":encodeURIComponent(""+a)},s=function(a){var b=[];for(i in a)b.push(i+"="+p(a[i]));var d=new XMLHttpRequest;try{d.open("POST","/jse",1),d.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),d.send(b.join("&"))}catch(f){r.apply(this,a)}},r=function(a){var b;b="/jse?_="+(new Date).getTime();for(var d in a)b+="&"+d+"="+p(a[d]).substr(0,
255);(new Image).src=b},t=function(a){a=a.stack.split("\n");if(3>a.length)return-2;a=a[1];if(!a)return-3;a=a.split("/");a=a[a.length-1];if(!a)return-4;a=a.split(":");return 3==a.length?parseInt(a[1]):-5},l=function(a,b,d,f,c,e){n++;if(!(10<n)){var h=g.location.href;a.target&&a.type&&(a=a.type);a.indexOf||(a="unknown:"+typeof a);a={e:a,u:b==h?"":b,l:d+(0<=f?", "+f:""),h:h,pl:k};b=e&&e.stack&&g.printStackTrace?printStackTrace({e:e}):e&&e.stack?e.stack:null;!c&&b&&(c="stack: "+b);c&&(a.d=c);g.boot_data&&
boot_data.version_uid&&(a.v=boot_data.version_uid);g.boot_data&&
boot_data.version_ts&&(a.vt=boot_data.version_ts);if(b&&b.length&&"object"==typeof b)try{c=[];for(var m=b.length-1;0<m;m--)b[m]&&c.unshift(b[m]);c.length&&(a.s=c.join("\n"))}catch(l){}1>a.l&&e&&e.stack&&"string"==typeof e.stack&&(a.l=t(e));s(a)}},q=function(){for(var a,b=0;b<h.length;b++)a=h[b],l.apply(this,a);h.length=0;h=null;k=1};g.addEventListener?g.addEventListener("load",q,!1):g.attachEvent("onload",q);g.badtoys||(g.badtoys={log:function(a,b){var d=a&&a.message?a.message:"unknown message";a&&a.name&&
(d=a.name+": "+d);a.stack&&(b=(b?b+" | ":"")+"stack: "+a.stack);var f=a&&a.fileName?a.fileName:"";!f&&a&&a.sourceURL&&(f=a.sourceURL);var c=0;a&&a.lineNumber&&(c=a.lineNumber);!c&&a&&a.line&&(c=a.line);var e=-1;a&&a.col&&(e=a.col);k?l(d,f,c,e,b,a):h.push([d,f,c,e,b,a])}})})(window);
</script>
			<script type="text/javascript">

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-106458-17', 'slack.com');
	ga('send', 'pageview');


	(function(e,c,b,f,d,g,a){e.SlackBeaconObject=d;
	e[d]=e[d]||function(){(e[d].q=e[d].q||[]).push([1*new Date(),arguments])};
	e[d].l=1*new Date();g=c.createElement(b);a=c.getElementsByTagName(b)[0];
	g.async=1;g.src=f;a.parentNode.insertBefore(g,a)
	})(window,document,"script","https://slack.global.ssl.fastly.net/dcf8/js/libs/beacon.js","sb");
	sb('set', 'token', '3307f436963e02d4f9eb85ce5159744c');
	sb('track', 'pageview');

	function track(a){ga('send','event','web',a);sb('track',a);}


	
	(function(f,b){if(!b.__SV){var a,e,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config people.set people.set_once people.increment people.append people.track_charge people.clear_charges people.delete_user".split(" ");
	for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=f.createElement("script");a.type="text/javascript";a.async=!0;a.src="//cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";e=f.getElementsByTagName("script")[0];e.parentNode.insertBefore(a,e)}})(document,window.mixpanel||[]);
	
	mixpanel.init("12d52d8633a5b432975592d13ebd3f34");

	function mixpanel_track(event_name){if(window.mixpanel&&event_name)mixpanel.track(event_name);}

</script>	
</head>

  <body >

		  			<script>
		
			var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
			if (w > 1440) document.querySelector('body').classList.add('widescreen');
		
		</script>
	
  	
	

	
	<header>
					<a href="https://slack.com/" id="header_logo"><img src="https://slack.global.ssl.fastly.net/558b/img/slack_logo_240.png" /></a>
			<div class="header_nav">
														<div class="header_links float_right">
						<a href="/is">Tour</a>
						<a href="http://slackhq.com" target="new">Blog</a>
						<a href="http://twitter.com/@slackhq" target="new">Twitter</a>
					</div>
							</div>
		
		
	</header>

	<div id="page">

		<div id="page_contents" >

<div class="span_4_of_6 col float_none margin_auto no_right_padding">
			<p class="alert alert_info"><i class="fa fa-info-circle"></i> You need to sign in to see this page.</p>
												<p id="error_ratelimit" class="alert alert_warning" style="display: none;"><i class="fa fa-warning"></i> <strong>Too many login failures!</strong><br class="hide_on_mobile" /> For your team’s security complete the reCAPTCHA.</p>							<p id="error_unknown" class="alert alert_error" style="display: none;"><i class="fa fa-warning"></i> Hmmm... something went wrong. Please try again.</p>
</div>

<div class="card align_center span_4_of_6 col float_none margin_auto large_bottom_margin right_padding">

	<h1>Sign in to <span class="break_word">datapress.slack.com</span></h1>

	
		<div class="col span_4_of_6 float_none margin_auto large_bottom_margin">

			<form id="signin_form" action="/" method="post" accept-encoding="UTF-8">

				<input type="hidden" name="signin" value="1" />
				<input type="hidden" name="redir" value="/files-pri/T02C4BL7J-F0427B99D/data.jsx" />
								<input type="hidden" name="crumb" value="s-1426590901-e6853a9886-☃" />

				<p>Enter your <strong>email address</strong> and <strong>password</strong>.</p>

				<p class=" no_bottom_margin">
					<input type="email" id="email" name="email" size="40" value="" placeholder="you@domain.com" />
				</p>

				<p class=" small_bottom_margin">
					<input type="password" id="password" name="password" size="40" placeholder="password" />
				</p>

					
									
				<p><button id="signin_btn" type="submit" class="btn btn_large full_width ladda-button" data-style="expand-right" /><span class="ladda-label">Sign in</span></button></p>

				<p><label class="checkbox"><input type="checkbox" name="remember" checked /> Keep me signed in</label></p>

				<p class="small"><a href="/forgot" class="bold">I forgot my password</a></p>

			</form>

			<div id="signup_prompt" class="signin_msg large_top_margin large_bottom_margin" style="display: none;">
				<hr class="half_width no_top_margin" />
				<p class="align_left">You don't have an account set up yet. But you can sign up with your <strong class="email_output"></strong> email address.</p>
				<p><a id="signup_link" href="/signup?email=" class="btn btn_large btn_info full_width">Create Account</a></p>
				<p class="small"><a class="restart_link bold">Or use a different email address</a></p>
			</div>

			<div id="user_not_found" class="signin_msg large_top_margin large_bottom_margin" style="display: none;">
				<hr class="half_width no_top_margin" />
				<p>We couldn't find an account matching <strong class="email_output"></strong></p>
				<p><a class="restart_link btn btn_outline full_width normal_wrap">Try a different email address</a></p>
			</div>

			<div id="user_disabled" class="signin_msg large_top_margin large_bottom_margin" style="display: none;">
				<hr class="half_width no_top_margin" />
				<p>It looks like the account matching <strong class="email_output"></strong> has been disabled. Contact your team administrator.</p>
				<p><a class="restart_link btn btn_outline full_width normal_wrap">Try a different email address</a></p>
			</div>

		</div>

		<p class="subtle_silver small">
					</p>

	
</div>

<div class="align_center">
			<p>If you have an <strong>@datapress.io</strong> email address, you can <a href="/signup/" class="bold">create an account</a>.</p>
	
	
			<p>Trying to create a team? <a href="https://slack.com/" class="bold">Sign up on the home page</a> to get started.</p>
	</div>


			
	</div>
	<div id="overlay"></div>
</div>




<script type="text/javascript">
var cdn_url = 'https://slack.global.ssl.fastly.net';
</script>

		
	<!-- output_js "core" -->
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/1852/js/libs/jquery-2.1.3.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/c212/js/libs/bootstrap_plastic.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/f66c/js/libs/flash_detect.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/bf3b/js/libs/fastclick.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/8556/js/libs/headroom.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/8827/js/plastic.js" crossorigin="anonymous"></script>

			<!-- output_js "secondary" -->

		<!-- output_js "regular" -->
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/d838/js/libs/warn_capslock.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/99d9/js/libs/spin.js" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://slack.global.ssl.fastly.net/b32e/js/libs/ladda.js" crossorigin="anonymous"></script>

		<script type="text/javascript">
					
				$('input[name="email"]').val() ? $('input[name="password"]').focus() : $('input[name="email"]').focus();
			
						
			if (navigator.userAgent.match(/windows phone/i)) {
				$('input[name="password"]').css('font-family', 'sans-serif,arial,verdana,tahoma');
			}
		

		

		var $signin_btn = $('#signin_btn');
		$signin_btn.data('ladda', Ladda.create(document.querySelector('#signin_btn')));

		var no_sso = false;
		var team_id = 'T02C4BL7J';
		var email_regex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", 'i');

		// signin form
		$('#signin_form').on('submit', function(e) {

			var email = $.trim($('#email').val());
			var password = $.trim($('#password').val());

			// no email or invalid email
			if (!email || !email_regex.test(email)) {
				$('#email').focus().closest('p').addClass('error');
				e.preventDefault();
			} else {

				// no password
				if (!password) {
					$('#password').focus().closest('p').addClass('error');
					e.preventDefault();
				} else {
					$signin_btn.data('ladda').start();
				}

			}

		});

		// email check
		$('#email').on('blur', function(e) {

			var email = $.trim($('#email').val());

			// no email or invalid email
			if (!email || !email_regex.test(email)) return;

			$('.signin_msg').hide();

			$('.email_output').text(email);

			var api_args = {
				email: email,
				team: team_id
			};

			window.callSlackAPIUnauthed('auth.findUser', api_args, function(ok, data, args) {

					if (!ok) {

						if (data.error == 'user_not_found') {

							$('#user_not_found').slideDown(150);

						} else if (data.error == 'user_disabled') {

							$('#user_disabled').slideDown(150);

						} else if (data.error == 'ratelimited') {

							$('#error_ratelimit').slideDown(150);

						} else {

							$('#error_unknown').slideDown(150);

						}

						return;

					}

					if (data.found) {

						// do nothing: let the form submit

					} else if (data.can_join) {

						// no match found, but email matches whitelisted domain: show create account option
						$('#signup_prompt').slideDown(150);
						$('#signup_link').prop('href', '/signup?email='+encodeURIComponent(email)+(no_sso ? '&no_sso=1' : ''));

					}

				}

			);

		});

		// restart flow
		$('.restart_link').on('click', function() {

			$('.signin_msg').slideUp(150, function() {
				$('#email').val('').focus();
				$('.signin_msg').hide();
			});

		});

		
	</script>

	<!-- slack-www329 / 2015-03-17 04:15:01 / v6c6594c28b8f578534e4d38dba26a7fd6990f043 -->

</body>
</html>