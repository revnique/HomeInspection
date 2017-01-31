var app = angular.module('app', ['ui.router']);

app.run(['$state', function ($state) { }]);

app.config(function ($stateProvider) {
    var anotherOneState = {
        name: 'authfb',
        url: '/authfb',
        templateUrl: 'pages/auth-facebook.html'
    }

    $stateProvider.state(anotherOneState);
});
app.config(function ($stateProvider) {
    var googleState = {
        name: 'authgoog',
        url: '/authgoog',
        templateUrl: 'pages/auth-google.html'
    }

    $stateProvider.state(googleState);
});
app["utils"] = {};
app.utils.APIKEY = "DEMO.Z27QVV99VfapotREEAdQwZjHHfthlk9cb27Z";
app.factory('authInterceptor', function($location, $q, $window) {
        return {
            request: function(config) {
                config.headers = config.headers || {};
                config.headers["X-H1TEQ-APIKEY"] = app.utils.APIKEY;
                config.headers["X-H1TEQ-DEMO"] = app.utils.getCookie("DEMO.token");
                config.headers["X-H1TEQ-USERNAME"] = app.utils.getCookie("DEMO.user");
                return config;
            }
        };
    })
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });


app.utils.isJsonString = function (str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

app.utils.createCookie = function (name, value, time, days) {
    var expires, date;

    if (time) {
        date = new Date(time);
        expires = "; expires=" + date.toGMTString();
    } else if (days) {
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
};

app.utils.expireCookie = function (name) {
    return app.utils.createCookie(name, "", "2000-01-01T11:59:59.045665-05:00");
};

app.utils.getCookie = function (k) {
    var v = document.cookie.match('(^|;) ?' + k + '=([^;]*)(;|$)');
    return v ? v[2] : null;
};



app.utils.jsonToParams = function (data) {
    var queryString = "";
    if (typeof data === "object" && data != null) {
        for (var propertyName in data) {
            if (data.hasOwnProperty(propertyName)) {
                var value = data[propertyName];
                if (typeof value === "object") {
                    value = JSON.stringify(value);
                }
                queryString += (queryString.length === 0 ? "" : "&") + encodeURIComponent(propertyName) + "=" + encodeURIComponent(value);
            }
        }
    }
    return queryString;
};


app.utils.isNullOrEmpty = function (obj) {
    if (typeof obj === "undefined") return true;
    if (obj == null) return true;
    if (obj == "") return true;
    if (obj == {}) return true;
    if (obj == []) return true;
    if (obj == []) return true;
    return false;
};

app.utils.isArray = function (object) {
    var retVal = false;
    if (Object.prototype.toString.call(object) === '[object Array]') {
        retVal = true;
    }
    return retVal;
};

app.utils.isObject = function (val) {
    if (val === null) {
        return false;
    }
    return ((typeof val === 'function') || (typeof val === 'object'));
};

app.utils.isNumber = function(obj) {
    return typeof obj === 'number' && isFinite(obj);
};

app.utils.parseInt = function (obj) {
    var rtn = 0;
    Number.isInteger = Number.isInteger || function (value) {
        return typeof value === "number" &&
          isFinite(value) &&
          Math.floor(value) === value;
    };
    if (app.utils.isNumber(obj)) {
        if (Number.isInteger(obj)) {
            rtn = obj * 1;
        } else {
            rtn = Math.floor(obj * 1);
        }
    }
    return rtn;
};


app.utils.getFixedHeight = function (fixedWidth, imgWidth, imgHeight) {
    var w = app.utils.parseInt(fixedWidth);
    var iW = app.utils.parseInt(imgWidth);
    var iH = app.utils.parseInt(imgHeight);
    var val = (w * iH) / iW;
    var rtn = app.utils.parseInt(val);
    return rtn;
};

app.utils.getFixedWidth = function (fixedHeight, imgWidth, imgHeight) {
    var h = app.utils.parseInt(fixedHeight);
    var iW = app.utils.parseInt(imgWidth);
    var iH = app.utils.parseInt(imgHeight);

    var val = (h * iW) / iH;
    var rtn = app.utils.parseInt(val);
    return rtn;
};


app.utils.getNewXY = function (x, y, w, h, zW, zH, posX, posY) {
    var zX = 0, zY = 0;
    zX = Math.abs(posX) + x;
    zY = Math.abs(posY) + y;
    var newX = app.utils.parseInt((w * zX) / zW);
    var newY = app.utils.parseInt((h * zY) / zH);
    var rtn = {
        x: newX,
        y: newY
    };
    return rtn;
};

app.utils.getZoomedTagXY = function (x, y, w, h, zW, zH, czW, czH, posX, posY, cPosX, cPosY) {
    var zX, zY,zXn, zYn, tX, tY;
    zX = Math.abs(posX) + x;
    zY = Math.abs(posY) + y;
    var newX = app.utils.parseInt((w * zX) / zW);
    var newY = app.utils.parseInt((h * zY) / zH);
    
    zXn = app.utils.parseInt((czW * newX) / w);
    zYn = app.utils.parseInt((czH * newY) / h);

    tX = zXn - Math.abs(cPosX);
    tY = zYn - Math.abs(cPosY);

    var auditObj = {
        zX: zX,
        zY: zY,
        newX: newX,
        newY: newY,
        posX: posX,
        posY: posY,
        x: x,
        y: y,
        w: w,
        h: h,
        czW: czW,
        czH: czH,
        cPosX: cPosX,
        cPosY: cPosY,
        tX: tX,
        tY: tY,
        zXn: zXn,
        zYn: zYn
    };

    console.log("zoomed xy", auditObj);
    var rtn = {
        x: tX,
        y: tY
    };
    return rtn;
};









var rootUrl = "http://localhost:52415/";

Date.prototype.addMilliseconds = function (m) {
    this.setMilliseconds(this.getSeconds() + m);
    return this;
};
Date.prototype.addMinutes = function (m) {
    this.setMinutes(this.getMinutes() + m);
    return this;
};

Date.prototype.addHours = function (h) {
    this.setHours(this.getHours() + h);
    return this;
};

Date.prototype.addDays = function (d) {
    this.setHours(this.getHours() + (d * 24));
    return this;
};
Date.prototype.formatSmallDateTime = function (useSlashNotation) {
    function addZero(number) {
        var rtn = "";
        if (number < 10) {
            rtn = "0" + number;
        } else {
            rtn = number;
        }
        return rtn;
    };

    var day = this.getDate(); // yields dayofmonth
    day = addZero(day);
    var month = this.getMonth() + 1; // yields month
    month = addZero(month);
    var year = this.getFullYear(); // yields year
    var hour = this.getHours(); // yields hours
    var minute = this.getMinutes(); // yields minutes
    var second = this.getSeconds(); // yields seconds


    hour = addZero(hour);
    minute = addZero(minute);
    second = addZero(second);

    var rtn = year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
    if (useSlashNotation) {
        rtn = month + "/" + day + "/" + year + " " + hour + ":" + minute + ":" + second;
    }
    // After this construct a string with the above results as below
    return rtn;
};

Date.prototype.dateDiff = function (endDateObject) {

    var addZero = function (i) {
        if (i < 10) {
            i = "0" + i;
        }; // add zero in front of numbers < 10
        return i;
    }
    var days, hours, minutes, seconds, totalMilliseconds, displayString = "", numberDisplayString = "", hoursMinSec = "";

    totalMilliseconds = (endDateObject - this);
    days = Math.floor(totalMilliseconds / 86400000); // days
    hours = Math.floor((totalMilliseconds % 86400000) / 3600000); // hours

    minutes = Math.floor((totalMilliseconds % 3600000) / 60000); // minutes
    seconds = Math.floor((totalMilliseconds % 60000) / 1000); // secs

    if (days > 0) {
        displayString = days + " days";
        numberDisplayString = addZero(days) + "";
    }
    if (hours > 0 || days > 0) {
        if (displayString !== "") {
            displayString += ", ";
            numberDisplayString += ":";
        }
        displayString += hours + " hours";
        numberDisplayString += addZero(hours);
    }
    if (minutes > 0 || days > 0 || hours > 0) {
        if (displayString !== "") {
            displayString += ", ";
            numberDisplayString += ":";
        }
        displayString += minutes + " minutes";
        numberDisplayString += addZero(minutes);
    }
    if (seconds > 0 || days > 0 || hours > 0 || minutes > 0) {
        if (displayString !== "") {
            displayString += ", ";
            numberDisplayString += ":";
        }
        displayString += seconds + " seconds";
        numberDisplayString += addZero(seconds);
    }
    if (seconds === 0) {
        if (displayString === "") {
            displayString = "less than 1 second";
            numberDisplayString = "00";
        }
    }

    if (seconds > 0 || hours > 0 || minutes > 0) {
        hoursMinSec = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
    }

    var rtn = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        totalMilliseconds: totalMilliseconds,
        displayString: displayString,
        numberDisplayString: numberDisplayString,
        hoursMinSec: hoursMinSec
    };

    //console.log("rtn", rtn);
    return rtn;
};

Date.prototype.formatAMPM = function () {
    var hours = this.getHours();
    var minutes = this.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
};

Date.prototype.getMonthName = function (d) {
    var m = this.getMonth();
    var rtn = "";
    switch (m) {
        case 0:
            rtn = "January";
            break;
        case 1:
            rtn = "February";
            break;
        case 2:
            rtn = "March";
            break;
        case 3:
            rtn = "April";
            break;
        case 4:
            rtn = "May";
            break;
        case 5:
            rtn = "June";
            break;
        case 6:
            rtn = "July";
            break;
        case 7:
            rtn = "August";
            break;
        case 8:
            rtn = "September";
            break;
        case 9:
            rtn = "October";
            break;
        case 10:
            rtn = "November";
            break;
        case 11:
            rtn = "December";
            break;
    }
    return rtn;
};
