var domainList = [
    /* -------- Google -------- */
    "google.com",
    "googleusercontent.com",
    "gmail.com",
    "googlemail.com",
    "googleplus.com",
    "googledrive.com",
    "googlepages.com",
    "googlelabs.com",
    "googlecode.com",
    "googleapis.com",
    "googleearth.com",
    "googletagservices.com",
    "googlesource.com",
    "googleapps.com",
    "googleartproject.com",
    "googleblog.com",
    "googlebot.com",
    "googlecommerce.com",
    "googledomains.com",
    "googlearth.com",
    "googlegroups.com",
    "googlehosted.com",
    "googleideas.com",
    "googleinsidesearch.com",
    "googlemashups.com",
    "googlepagecreator.com",
    "googleplay.com",
    "googlescholar.com",
    "googlevideo.com",
    "gstatic.com",
    "youtube.com",
    "youtubeeducation.com",
    "youtubegaming.com",
    /* -------- Social Media -------- */
    "facebook.com",
    "twitter.com",
    "instagram.com",
    "flickr.com",
    "blogspot.com",
    /* -------- tools -------- */
    "wikipedia.org"
];

function FindProxyForURL(url, host)
{
    for(i = 0; i < domainList.length; ++i) {
        if(dnsDomainIs(host, domainList[i])) {
            return "SOCKS 127.0.0.1:1080";
        }
    }
    return "DIRECT";
}
