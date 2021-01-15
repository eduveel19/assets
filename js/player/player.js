var playerInstance = jwplayer("aRzklaXf");
	   playerInstance.setup({
	   	"file": fuente,
        "height":"100%",
        "width":"100%",
        stretching: "bestfit",
	   	"image": "#",
	   	"mediaid": "player",
        "mute": false,
	   	"autostart": false,
			"cast": {
				"appid": "player",
				"logo": "https://i.ibb.co/Tgk2YrC/Logow-1-1.png",
			},
           "logo": {
                "file": "https://i.ibb.co/Tgk2YrC/Logow-1-1.png",
                "link": "http://slowdsports.com",
                "hide": "false",
                "position": "top-left"
            },
			/*advertising: {
				client: "googima",
				schedule: {
					adbreak1: {
						offset: "pre",
						tag: "http://pubads.g.doubleclick.net/gampad/ads?iu=/7021/fcc.forum&sz=640x480&cust_params=kw%3Dblog_67679%2CNews&ad_rule=0&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url=%5BREFERRER_URL%5D&correlator=%5BTIMESTAMP%5D",
					}
				}
			},*/
	   });