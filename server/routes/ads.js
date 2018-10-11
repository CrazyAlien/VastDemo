var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/skippable', (err, res) => {
	res.status(200);
	res.type('application/xml');
	res.send(skippableAd);
	res.end();
});

router.get('/adPod', (err, res) => {
	res.status(200);
	res.type('application/xml');
	res.send(adPods);
	res.end();
});

router.get('/linearAd', (err, res) => {
    res.status(200);
    res.type('application/xml');
    res.send(linearAd);
    res.end();
});

let skippableAd = `<?xml version="1.0" encoding="UTF-8"?>
<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="vast.xsd" version="2.0">
    <Ad id="ad1">
        <InLine>
            <AdSystem>Varrando</AdSystem>
            <AdTitle>Varrando Winning Race Ad</AdTitle>
            <Description><![CDATA[Varrando Ad]]></Description>
            <Impression></Impression>
            <Creatives>
                <Creative id="1" sequence="1">
                    <Linear skipoffset="00:00:03">
                        <Duration>00:00:32</Duration>
                        <VideoClicks>
                            <ClickThrough id="VAR"><![CDATA[https://varrando.com]]></ClickThrough>
                        </VideoClicks>
                        <MediaFiles>
                            <MediaFile id="1" delivery="progressive" type="video/mp4" bitrate="400" width="640" height="360"><![CDATA[http://d27kkruj8fr60l.cloudfront.net/demo/creatives/varrando/creative-winning-race-640-360.mp4]]></MediaFile>
                        </MediaFiles>
                    </Linear>
                </Creative>
            </Creatives>
        </InLine>
    </Ad>
</VAST>`;

let linearAd = `<VAST version="3.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="vast.xsd">
    <Ad id="2447226.251866656" sequence="1">
        <InLine>
            <AdSystem>Varrando</AdSystem>
            <AdTitle>Varrando Having Fun Ad</AdTitle>
            <Description><![CDATA[Varrando Ad]]></Description>
            <Impression></Impression>
            <Creatives>
                <Creative id="1" sequence="1">
                    <Linear skipoffset="00:00:03">
                        <Duration>00:00:20</Duration>
                        <VideoClicks>
                            <ClickThrough id="VAR"><![CDATA[https://varrando.com]]></ClickThrough>
                        </VideoClicks>
                        <MediaFiles>
                            <MediaFile id="1" delivery="progressive" type="video/mp4" bitrate="400" width="640" height="360"><![CDATA[http://d27kkruj8fr60l.cloudfront.net/demo/creatives/varrando/creative-having-fun-640-360.mp4]]></MediaFile>
                        </MediaFiles>
                    </Linear>
                </Creative>
            </Creatives>
        </InLine>
    </Ad>
</VAST>`;

let adPods = `<VAST version="3.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="vast.xsd">
    <Ad id="2447226.251866656" sequence="1">
        <InLine>
            <AdSystem>FreeWheel</AdSystem>
            <AdTitle>Ooyla test m3u8 midroll 1</AdTitle>
<Error><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447226&reid=1698599&arid=0&iw=&uxnw=&uxss=&uxct=&et=e&cn=[ERRORCODE]]]></Error>
            <Impression id="FWi_2447226.0"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447226&reid=1698599&arid=0&auid=&cn=defaultImpression&et=i&_cc=&tpos=15&iw=&uxnw=&uxss=&uxct=&metr=121&init=1&_dic=1&cr=]]></Impression>
            
            <Creatives>
                <Creative AdID="2447226">
                    <Linear>
                        <Duration>00:00:15</Duration>
                        <TrackingEvents>
                            <Tracking event="complete"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447226&reid=1698599&arid=0&auid=&cn=complete&et=i&_cc=&tpos=15&init=1&iw=&uxnw=&uxss=&uxct=&metr=121]]></Tracking>
                            <Tracking event="firstQuartile"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447226&reid=1698599&arid=0&auid=&cn=firstQuartile&et=i&_cc=&tpos=15&init=1&iw=&uxnw=&uxss=&uxct=&metr=121]]></Tracking>
                            <Tracking event="midpoint"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447226&reid=1698599&arid=0&auid=&cn=midPoint&et=i&_cc=&tpos=15&init=1&iw=&uxnw=&uxss=&uxct=&metr=121]]></Tracking>
                            <Tracking event="thirdQuartile"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447226&reid=1698599&arid=0&auid=&cn=thirdQuartile&et=i&_cc=&tpos=15&init=1&iw=&uxnw=&uxss=&uxct=&metr=121]]></Tracking>
                        </TrackingEvents>
                        <VideoClicks>
                            <ClickTracking id="FWc_2447226.0"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447226&reid=1698599&arid=0&auid=&cn=defaultClick&et=c&_cc=&tpos=15&cr=]]></ClickTracking>
                        </VideoClicks>
                        <MediaFiles>
                            <MediaFile id="1" delivery="progressive" bitrate="400" width="640" height="360" type="video/mp4"><![CDATA[http://d27kkruj8fr60l.cloudfront.net/demo/creatives/varrando/creative-winning-race-640-360.mp4]]></MediaFile>
                        </MediaFiles>
                    </Linear>
                </Creative>
            </Creatives>
        </InLine>
    </Ad>
    <Ad id="2447227.255243472" sequence="2">
        <InLine>
            <AdSystem>FreeWheel</AdSystem>
            <AdTitle>Ooyla test m3u8 midroll 2</AdTitle>
<Error><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447227&reid=1698600&arid=0&iw=&uxnw=&uxss=&uxct=&et=e&cn=[ERRORCODE]]]></Error>
            <Impression id="FWi_2447227.0"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447227&reid=1698600&arid=0&auid=&cn=defaultImpression&et=i&_cc=&tpos=15&iw=&uxnw=&uxss=&uxct=&metr=121&init=1&_dic=1&cr=]]></Impression>
            
            <Creatives>
                <Creative AdID="2447227">
                    <Linear>
                        <Duration>00:00:31</Duration>
                        <TrackingEvents>
                            <Tracking event="complete"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447227&reid=1698600&arid=0&auid=&cn=complete&et=i&_cc=&tpos=15&init=1&iw=&uxnw=&uxss=&uxct=&metr=121]]></Tracking>
                            <Tracking event="firstQuartile"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447227&reid=1698600&arid=0&auid=&cn=firstQuartile&et=i&_cc=&tpos=15&init=1&iw=&uxnw=&uxss=&uxct=&metr=121]]></Tracking>
                            <Tracking event="midpoint"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447227&reid=1698600&arid=0&auid=&cn=midPoint&et=i&_cc=&tpos=15&init=1&iw=&uxnw=&uxss=&uxct=&metr=121]]></Tracking>
                            <Tracking event="thirdQuartile"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447227&reid=1698600&arid=0&auid=&cn=thirdQuartile&et=i&_cc=&tpos=15&init=1&iw=&uxnw=&uxss=&uxct=&metr=121]]></Tracking>
                        </TrackingEvents>
                        <VideoClicks>
                            <ClickTracking id="FWc_2447227.0"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447227&reid=1698600&arid=0&auid=&cn=defaultClick&et=c&_cc=&tpos=15&cr=]]></ClickTracking>
                        </VideoClicks>
                        <MediaFiles>
                            <MediaFile id="2" delivery="progressive" bitrate="400" width="640" height="360" type="video/mp4"><![CDATA[http://techslides.com/demos/sample-videos/small.mp4]]></MediaFile>
                        </MediaFiles>
                    </Linear>
                </Creative>
            </Creatives>
        </InLine>
    </Ad>
    <Ad id="2447228.257609712" sequence="3">
        <InLine>
            <AdSystem>FreeWheel</AdSystem>
            <AdTitle>Ooyla test m3u8 midroll 3</AdTitle>
<Error><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447228&reid=1698602&arid=0&iw=&uxnw=&uxss=&uxct=&et=e&cn=[ERRORCODE]]]></Error> 
           <Impression id="FWi_2447228.0"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447228&reid=1698602&arid=0&auid=&cn=defaultImpression&et=i&_cc=&tpos=15&iw=&uxnw=&uxss=&uxct=&metr=121&init=1&_dic=1&cr=]]></Impression>
            
            <Creatives>
                <Creative AdID="2447228">
                    <Linear>
                        <Duration>00:00:31</Duration>
                        <TrackingEvents>
                            <Tracking event="complete"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447228&reid=1698602&arid=0&auid=&cn=complete&et=i&_cc=&tpos=15&init=1&iw=&uxnw=&uxss=&uxct=&metr=121]]></Tracking>
                            <Tracking event="firstQuartile"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447228&reid=1698602&arid=0&auid=&cn=firstQuartile&et=i&_cc=&tpos=15&init=1&iw=&uxnw=&uxss=&uxct=&metr=121]]></Tracking>
                            <Tracking event="midpoint"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447228&reid=1698602&arid=0&auid=&cn=midPoint&et=i&_cc=&tpos=15&init=1&iw=&uxnw=&uxss=&uxct=&metr=121]]></Tracking>
                            <Tracking event="thirdQuartile"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447228&reid=1698602&arid=0&auid=&cn=thirdQuartile&et=i&_cc=&tpos=15&init=1&iw=&uxnw=&uxss=&uxct=&metr=121]]></Tracking>
                        </TrackingEvents>
                        <VideoClicks>
                            <ClickTracking id="FWc_2447228.0"><![CDATA[http://g1.v.fwmrm.net/ad/l/1?s=a032&n=164515&t=1366755844262714011&adid=2447228&reid=1698602&arid=0&auid=&cn=defaultClick&et=c&_cc=&tpos=15&cr=]]></ClickTracking>
                        </VideoClicks>
                        <MediaFiles>
                            <MediaFile id="2" delivery="progressive" bitrate="400" width="640" height="360" type="video/mp4"><![CDATA[https://ak9.picdn.net/shutterstock/videos/1005606979/preview/stock-footage-people-protesting-in-new-york-city-at-women-s-march.webm]]></MediaFile>
                        </MediaFiles>
                    </Linear>
                </Creative>
            </Creatives>
        </InLine>
    </Ad>
</VAST>`; 

module.exports = router;
