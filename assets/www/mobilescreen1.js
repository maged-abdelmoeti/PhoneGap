/*
 * JS for mobilescreen1 generated by Exadel Tiggzi
 *
 * Created on: Tuesday, June 19, 2012, 05:00:27 PM (PDT)
 */
/************************************
 * JS API provided by Exadel Tiggzi  *
 ************************************/
/* Setting project environment indicator */
Tiggr.env = "bundle"; /* Object & array with components "name-to-id" mapping */
var n2id_buf = {
    'mobilepanel1': 'j_4',
    'mobilelabel23': 'j_5',
    'username': 'j_6',
    'mobilelabel22': 'j_7',
    'password': 'j_8',
    'mobilebutton4': 'j_9'
};
if ("n2id" in window && window.n2id !== undefined) {
    $.extend(n2id, n2id_buf);
} else {
    window.n2id = n2id_buf;
}
Tiggr.AppPages = [{
    "name": "mobilescreen1",
    "location": "mobilescreen1.html"
}, {
    "name": "mobilescreen2",
    "location": "mobilescreen2.html"
}, {
    "name": "current",
    "location": "mobilescreen1.html"
}];
Tiggr.CurrentScreen = 'j_0';

function navigateTo(outcome, useAjax) {
    Tiggr.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Tiggr.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Tiggr.adjustContentHeightWithPadding();
}

function unwrapAndApply(selector, content) {
    Tiggr.unwrapAndApply(selector, content);
}

function setDetailContent(pageUrl) {
    Tiggr.setDetailContent(pageUrl);
}
/**********************
 * SECURITY CONTEXTS  *
 **********************/
/*******************************
 *      SERVICE SETTINGS        *
 ********************************/
/*************************
 *      SERVICES          *
 *************************/
var RESTService = new Tiggr.RestService({
    'url': 'https://twitter.com/statuses/public_timeline.json',
    'dataType': 'json',
    'type': 'get',
});
var Camera_service = new Tiggr.CameraService({});
var myService = new Tiggr.RestService({
    'url': 'http://search.twitter.com/search.json?q=twitter&rpp=15&page=2',
    'dataType': 'json',
    'type': 'get',
});
/*************************
 * NONVISUAL COMPONENTS  *
 *************************/
var datasources = [];
var restservice7 = new Tiggr.DataSource(myService, {
    'onComplete': function(jqXHR, textStatus) {
        // refreshing JQM form elemetns
        elts = $("input[data-type='range']");
        if (elts.length != 0) elts.slider("refresh");
    },
    'onSuccess': function(data) {},
    'onError': function(jqXHR, textStatus, errorThrown) {},
    'outMappings': [],
    'inMappings': []
});
datasources.push(restservice7);
/************************
 * EVENTS AND HANDLERS  *
 ************************/
// screen onload
screen_C0BE_onLoad = j_0_onLoad = function() {
    createSpinner("files/resources/lib/jquerymobile/images/ajax-loader.gif");
    Tiggr.__registerComponent('mobilepanel1', new Tiggr.BaseComponent({
        id: 'mobilepanel1',
        context: '#j_3'
    }));
    Tiggr.__registerComponent('mobilelabel23', new Tiggr.BaseComponent({
        id: 'mobilelabel23',
        context: '#j_3'
    }));
    Tiggr.__registerComponent('username', new Tiggr.BaseComponent({
        id: 'username',
        context: '#j_3'
    }));
    Tiggr.__registerComponent('mobilelabel22', new Tiggr.BaseComponent({
        id: 'mobilelabel22',
        context: '#j_3'
    }));
    Tiggr.__registerComponent('password', new Tiggr.BaseComponent({
        id: 'password',
        context: '#j_3'
    }));
    Tiggr.__registerComponent('mobilebutton4', new Tiggr.BaseComponent({
        id: 'mobilebutton4',
        context: '#j_3'
    }));
    for (var idx = 0; idx < datasources.length; idx++) {
        datasources[idx].__setupDisplay();
    }
    screen_C0BE_elementsExtraJS();
    j_0_windowEvents();
    screen_C0BE_elementsEvents();
}
// screen window events
screen_C0BE_windowEvents = j_0_windowEvents = function() {
    $('#j_0').bind('pageshow orientationchange', function() {
        adjustContentHeightWithPadding();
    });
}
// screen elements extra js
screen_C0BE_elementsExtraJS = j_0_elementsExtraJS = function() {
    // screen (screen-C0BE) extra code
}
// screen elements handler
screen_C0BE_elementsEvents = j_0_elementsEvents = function() {
    $("a :input,a a,a fieldset label").live({
        click: function(event) {
            event.stopPropagation();
        }
    });
    $('#j_3 [name="mobilebutton4"]').die().live({
        vclick: function() {
            if (!$(this).attr('disabled')) {
                if (Tiggr('username').val() == "user" && Tiggr('password').val() == "1234") {
                    Tiggr.navigateTo('mobilescreen2');
                } else {
                    alert("Wrong username/password !!");
                    Tiggr('username').val('');
                    Tiggr('password').val('');
                };
            }
        },
    });
}
$("body").undelegate("pagebeforeshow").delegate("#j_0", "pagebeforeshow", function(event, ui) {
    j_0_onLoad();
});