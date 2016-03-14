// WebcamJS v1.0.6
// Webcam library for capturing JPEG/PNG images in JavaScript
// Attempts getUserMedia, falls back to Flash
// Author: Joseph Huckaby: http://github.com/jhuckaby
// Based on JPEGCam: http://code.google.com/p/jpegcam/
// Copyright (c) 2012 - 2015 Joseph Huckaby
// Licensed under the MIT License

(function (window) {

    var Webcam = {
        version: '1.0.6',

        // globals
        protocol: location.protocol.match(/https/i) ? 'https' : 'http',
        swfURL: '',      // URI to webcam.swf movie (defaults to the js location)
        loaded: false,   // true when webcam movie finishes loading
        live: false,     // true when webcam is initialized and ready to snap
        userMedia: true, // true when getUserMedia is supported natively

        params: {
            width: 0,
            height: 0,
            dest_width: 0,         // size of captured image
            dest_height: 0,        // these default to width/height
            image_format: 'jpeg',  // image format (may be jpeg or png)
            jpeg_quality: 90,      // jpeg image quality from 0 (worst) to 100 (best)
            force_flash: false,    // force flash mode,
            flip_horiz: false,     // flip image horiz (mirror mode)
            fps: 30,               // camera frames per second
            upload_name: 'webcam', // name of file in upload post data
            constraints: null      // custom user media constraints
        },

        hooks: {}, // callback hook functions

        init: function () {
            // initialize, check for getUserMedia support
            var self = this;

            // Setup getUserMedia, with polyfill for older browsers
            // Adapted from: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
            this.mediaDevices = (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) ?
                navigator.mediaDevices : ((navigator.mozGetUserMedia || navigator.webkitGetUserMedia) ? {
                    getUserMedia: function (c) {
                        return new Promise(function (y, n) {
                            (navigator.mozGetUserMedia ||
                            navigator.webkitGetUserMedia).call(navigator, c, y, n);
                        });
                    }
                } : null);

            window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;
            this.userMedia = this.userMedia && !!this.mediaDevices && !!window.URL;

            // Older versions of firefox (< 21) apparently claim support but user media does not actually work
            if (navigator.userAgent.match(/Firefox\D+(\d+)/)) {
                if (parseInt(RegExp.$1, 10) < 21) this.userMedia = null;
            }

            // Make sure media stream is closed when navigating away from page
            if (this.userMedia) {
                window.addEventListener('beforeunload', function (event) {
                    self.reset();
                });
            }
        },

        attach: function (elem) {
            // create webcam preview and attach to DOM element
            // pass in actual DOM reference, ID, or CSS selector
            if (typeof (elem) == 'string') {
                elem = document.getElementById(elem) || document.querySelector(elem);
            }
            if (!elem) {
                return this.dispatch('error', "Could not locate DOM element to attach to.");
            }
            this.container = elem;
            elem.innerHTML = ''; // start with empty element

            // insert "peg" so we can insert our preview canvas adjacent to it later on
            var peg = document.createElement('div');
            elem.appendChild(peg);
            this.peg = peg;

            // set width/height if not already set
            if (!this.params.width) this.params.width = elem.offsetWidth;
            if (!this.params.height) this.params.height = elem.offsetHeight;

            // set defaults for dest_width / dest_height if not set
            if (!this.params.dest_width) this.params.dest_width = this.params.width;
            if (!this.params.dest_height) this.params.dest_height = this.params.height;

            // if force_flash is set, disable userMedia
            if (this.params.force_flash) this.userMedia = null;

            // check for default fps
            if (typeof this.params.fps !== "number") this.params.fps = 30;

            // adjust scale if dest_width or dest_height is different
            var scaleX = this.params.width / this.params.dest_width;
            var scaleY = this.params.height / this.params.dest_height;

            if (this.userMedia) {
                // setup webcam video container
                var video = document.createElement('video');
                video.setAttribute('autoplay', 'autoplay');
                video.style.width = '' + this.params.dest_width + 'px';
                video.style.height = '' + this.params.dest_height + 'px';

                if ((scaleX != 1.0) || (scaleY != 1.0)) {
                    elem.style.overflow = 'hidden';
                    video.style.webkitTransformOrigin = '0px 0px';
                    video.style.mozTransformOrigin = '0px 0px';
                    video.style.msTransformOrigin = '0px 0px';
                    video.style.oTransformOrigin = '0px 0px';
                    video.style.transformOrigin = '0px 0px';
                    video.style.webkitTransform = 'scaleX(' + scaleX + ') scaleY(' + scaleY + ')';
                    video.style.mozTransform = 'scaleX(' + scaleX + ') scaleY(' + scaleY + ')';
                    video.style.msTransform = 'scaleX(' + scaleX + ') scaleY(' + scaleY + ')';
                    video.style.oTransform = 'scaleX(' + scaleX + ') scaleY(' + scaleY + ')';
                    video.style.transform = 'scaleX(' + scaleX + ') scaleY(' + scaleY + ')';
                }

                // add video element to dom
                elem.appendChild(video);
                this.video = video;

                // ask user for access to their camera
                var self = this;
                this.mediaDevices.getUserMedia({
                    "audio": false,
                    "video": this.params.constraints || {
                        mandatory: {
                            minWidth: this.params.dest_width,
                            minHeight: this.params.dest_height
                        }
                    }
                })
                .then(function (stream) {
                    // got access, attach stream to video
                    video.src = window.URL.createObjectURL(stream) || stream;
                    self.stream = stream;
                    self.loaded = true;
                    self.live = true;
                    self.dispatch('load');
                    self.dispatch('live');
                    self.flip();
                })
                .catch(function (err) {
                    return self.dispatch('error', "Could not access webcam: " + err.name + ": " + err.message, err);
                });
            }
            else {
                // flash fallback
                window.Webcam = Webcam; // needed for flash-to-js interface
                var div = document.createElement('div');
                div.innerHTML = this.getSWFHTML();
                elem.appendChild(div);
            }

            // setup final crop for live preview
            if (this.params.crop_width && this.params.crop_height) {
                var scaled_crop_width = Math.floor(this.params.crop_width * scaleX);
                var scaled_crop_height = Math.floor(this.params.crop_height * scaleY);

                elem.style.width = '' + scaled_crop_width + 'px';
                elem.style.height = '' + scaled_crop_height + 'px';
                elem.style.overflow = 'hidden';

                elem.scrollLeft = Math.floor((this.params.width / 2) - (scaled_crop_width / 2));
                elem.scrollTop = Math.floor((this.params.height / 2) - (scaled_crop_height / 2));
            }
            else {
                // no crop, set size to desired
                elem.style.width = '' + this.params.width + 'px';
                elem.style.height = '' + this.params.height + 'px';
            }
        },

        reset: function () {
            // shutdown camera, reset to potentially attach again
            if (this.preview_active) this.unfreeze();

            // attempt to fix issue #64
            this.unflip();

            if (this.userMedia) {
                if (this.stream) {
                    if (this.stream.getVideoTracks) {
                        // get video track to call stop on it
                        var tracks = this.stream.getVideoTracks();
                        if (tracks && tracks[0] && tracks[0].stop) tracks[0].stop();
                    }
                    else if (this.stream.stop) {
                        // deprecated, may be removed in future
                        this.stream.stop();
                    }
                }
                delete this.stream;
                delete this.video;
            }

            if (this.container) {
                this.container.innerHTML = '';
                delete this.container;
            }

            this.loaded = false;
            this.live = false;
        },

        set: function () {
            // set one or more params
            // variable argument list: 1 param = hash, 2 params = key, value
            if (arguments.length == 1) {
                for (var key in arguments[0]) {
                    this.params[key] = arguments[0][key];
                }
            }
            else {
                this.params[arguments[0]] = arguments[1];
            }
        },

        on: function (name, callback) {
            // set callback hook
            name = name.replace(/^on/i, '').toLowerCase();
            if (!this.hooks[name]) this.hooks[name] = [];
            this.hooks[name].push(callback);
        },

        off: function (name, callback) {
            // remove callback hook
            name = name.replace(/^on/i, '').toLowerCase();
            if (this.hooks[name]) {
                if (callback) {
                    // remove one selected callback from list
                    var idx = this.hooks[name].indexOf(callback);
                    if (idx > -1) this.hooks[name].splice(idx, 1);
                }
                else {
                    // no callback specified, so clear all
                    this.hooks[name] = [];
                }
            }
        },

        dispatch: function () {
            // fire hook callback, passing optional value to it
            var name = arguments[0].replace(/^on/i, '').toLowerCase();
            var args = Array.prototype.slice.call(arguments, 1);

            if (this.hooks[name] && this.hooks[name].length) {
                for (var idx = 0, len = this.hooks[name].length; idx < len; idx++) {
                    var hook = this.hooks[name][idx];

                    if (typeof (hook) == 'function') {
                        // callback is function reference, call directly
                        hook.apply(this, args);
                    }
                    else if ((typeof (hook) == 'object') && (hook.length == 2)) {
                        // callback is PHP-style object instance method
                        hook[0][hook[1]].apply(hook[0], args);
                    }
                    else if (window[hook]) {
                        // callback is global function name
                        window[hook].apply(window, args);
                    }
                } // loop
                return true;
            }
            else if (name == 'error') {
                // default error handler if no custom one specified
                alert("Webcam.js Error: " + args[0]);
            }

            return false; // no hook defined
        },

        setSWFLocation: function (url) {
            // set location of SWF movie (defaults to webcam.swf in cwd)
            this.swfURL = url;
        },

        detectFlash: function () {
            // return true if browser supports flash, false otherwise
            // Code snippet borrowed from: https://github.com/swfobject/swfobject
            var SHOCKWAVE_FLASH = "Shockwave Flash",
                SHOCKWAVE_FLASH_AX = "ShockwaveFlash.ShockwaveFlash",
                FLASH_MIME_TYPE = "application/x-shockwave-flash",
                win = window,
                nav = navigator,
                hasFlash = false;

            if (typeof nav.plugins !== "undefined" && typeof nav.plugins[SHOCKWAVE_FLASH] === "object") {
                var desc = nav.plugins[SHOCKWAVE_FLASH].description;
                if (desc && (typeof nav.mimeTypes !== "undefined" && nav.mimeTypes[FLASH_MIME_TYPE] && nav.mimeTypes[FLASH_MIME_TYPE].enabledPlugin)) {
                    hasFlash = true;
                }
            }
            else if (typeof win.ActiveXObject !== "undefined") {
                try {
                    var ax = new ActiveXObject(SHOCKWAVE_FLASH_AX);
                    if (ax) {
                        var ver = ax.GetVariable("$version");
                        if (ver) hasFlash = true;
                    }
                }
                catch (e) {; }
            }

            return hasFlash;
        },

        getSWFHTML: function () {
            // Return HTML for embedding flash based webcam capture movie		
            var html = '';

            // make sure we aren't running locally (flash doesn't work)
            if (location.protocol.match(/file/)) {
                this.dispatch('error', "Flash does not work from local disk.  Please run from a web server.");
                return '<h3 style="color:red">ERROR: the Webcam.js Flash fallback does not work from local disk.  Please run it from a web server.</h3>';
            }

            // make sure we have flash
            if (!this.detectFlash()) {
                this.dispatch('error', "Adobe Flash Player not found.  Please install from get.adobe.com/flashplayer and try again.");
                return '<h3 style="color:red">ERROR: No Adobe Flash Player detected.  Webcam.js relies on Flash for browsers that do not support getUserMedia (like yours).</h3>';
            }

            // set default swfURL if not explicitly set
            if (!this.swfURL) {
                // find our script tag, and use that base URL
                var base_url = '';
                var scpts = document.getElementsByTagName('script');
                for (var idx = 0, len = scpts.length; idx < len; idx++) {
                    var src = scpts[idx].getAttribute('src');
                    if (src && src.match(/\/webcam(\.min)?\.js/)) {
                        base_url = src.replace(/\/webcam(\.min)?\.js.*$/, '');
                        idx = len;
                    }
                }
                if (base_url) this.swfURL = base_url + '/webcam.swf';
                else this.swfURL = 'webcam.swf';
            }

            // if this is the user's first visit, set flashvar so flash privacy settings panel is shown first
            if (window.localStorage && !localStorage.getItem('visited')) {
                this.params.new_user = 1;
                localStorage.setItem('visited', 1);
            }

            // construct flashvars string
            var flashvars = '';
            for (var key in this.params) {
                if (flashvars) flashvars += '&';
                flashvars += key + '=' + escape(this.params[key]);
            }

            // construct object/embed tag
            html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" type="application/x-shockwave-flash" codebase="' + this.protocol + '://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + this.params.width + '" height="' + this.params.height + '" id="webcam_movie_obj" align="middle"><param name="wmode" value="opaque" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + this.swfURL + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + flashvars + '"/><embed id="webcam_movie_embed" src="' + this.swfURL + '" wmode="opaque" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + this.params.width + '" height="' + this.params.height + '" name="webcam_movie_embed" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + flashvars + '"></embed></object>';

            return html;
        },

        getMovie: function () {
            // get reference to movie object/embed in DOM
            if (!this.loaded) return this.dispatch('error', "Flash Movie is not loaded yet");
            var movie = document.getElementById('webcam_movie_obj');
            if (!movie || !movie._snap) movie = document.getElementById('webcam_movie_embed');
            if (!movie) this.dispatch('error', "Cannot locate Flash movie in DOM");
            return movie;
        },

        freeze: function () {
            // show preview, freeze camera
            var self = this;
            var params = this.params;

            // kill preview if already active
            if (this.preview_active) this.unfreeze();

            // determine scale factor
            var scaleX = this.params.width / this.params.dest_width;
            var scaleY = this.params.height / this.params.dest_height;

            // must unflip container as preview canvas will be pre-flipped
            this.unflip();

            // calc final size of image
            var final_width = params.crop_width || params.dest_width;
            var final_height = params.crop_height || params.dest_height;

            // create canvas for holding preview
            var preview_canvas = document.createElement('canvas');
            preview_canvas.width = final_width;
            preview_canvas.height = final_height;
            var preview_context = preview_canvas.getContext('2d');

            // save for later use
            this.preview_canvas = preview_canvas;
            this.preview_context = preview_context;

            // scale for preview size
            if ((scaleX != 1.0) || (scaleY != 1.0)) {
                preview_canvas.style.webkitTransformOrigin = '0px 0px';
                preview_canvas.style.mozTransformOrigin = '0px 0px';
                preview_canvas.style.msTransformOrigin = '0px 0px';
                preview_canvas.style.oTransformOrigin = '0px 0px';
                preview_canvas.style.transformOrigin = '0px 0px';
                preview_canvas.style.webkitTransform = 'scaleX(' + scaleX + ') scaleY(' + scaleY + ')';
                preview_canvas.style.mozTransform = 'scaleX(' + scaleX + ') scaleY(' + scaleY + ')';
                preview_canvas.style.msTransform = 'scaleX(' + scaleX + ') scaleY(' + scaleY + ')';
                preview_canvas.style.oTransform = 'scaleX(' + scaleX + ') scaleY(' + scaleY + ')';
                preview_canvas.style.transform = 'scaleX(' + scaleX + ') scaleY(' + scaleY + ')';
            }

            // take snapshot, but fire our own callback
            this.snap(function () {
                // add preview image to dom, adjust for crop
                preview_canvas.style.position = 'relative';
                preview_canvas.style.left = '' + self.container.scrollLeft + 'px';
                preview_canvas.style.top = '' + self.container.scrollTop + 'px';

                self.container.insertBefore(preview_canvas, self.peg);
                self.container.style.overflow = 'hidden';

                // set flag for user capture (use preview)
                self.preview_active = true;

            }, preview_canvas);
        },

        unfreeze: function () {
            // cancel preview and resume live video feed
            if (this.preview_active) {
                // remove preview canvas
                this.container.removeChild(this.preview_canvas);
                delete this.preview_context;
                delete this.preview_canvas;

                // unflag
                this.preview_active = false;

                // re-flip if we unflipped before
                this.flip();
            }
        },

        flip: function () {
            // flip container horiz (mirror mode) if desired
            if (this.params.flip_horiz) {
                var sty = this.container.style;
                sty.webkitTransform = 'scaleX(-1)';
                sty.mozTransform = 'scaleX(-1)';
                sty.msTransform = 'scaleX(-1)';
                sty.oTransform = 'scaleX(-1)';
                sty.transform = 'scaleX(-1)';
                sty.filter = 'FlipH';
                sty.msFilter = 'FlipH';
            }
        },

        unflip: function () {
            // unflip container horiz (mirror mode) if desired
            if (this.params.flip_horiz) {
                var sty = this.container.style;
                sty.webkitTransform = 'scaleX(1)';
                sty.mozTransform = 'scaleX(1)';
                sty.msTransform = 'scaleX(1)';
                sty.oTransform = 'scaleX(1)';
                sty.transform = 'scaleX(1)';
                sty.filter = '';
                sty.msFilter = '';
            }
        },

        savePreview: function (user_callback, user_canvas) {
            // save preview freeze and fire user callback
            var params = this.params;
            var canvas = this.preview_canvas;
            var context = this.preview_context;

            // render to user canvas if desired
            if (user_canvas) {
                var user_context = user_canvas.getContext('2d');
                user_context.drawImage(canvas, 0, 0);
            }

            // fire user callback if desired
            user_callback(
                user_canvas ? null : canvas.toDataURL('image/' + params.image_format, params.jpeg_quality / 100),
                canvas,
                context
            );

            // remove preview
            this.unfreeze();
        },

        snap: function (user_callback, user_canvas) {
            // take snapshot and return image data uri
            var self = this;
            var params = this.params;

            if (!this.loaded) return this.dispatch('error', "Webcam is not loaded yet");
            // if (!this.live) return this.dispatch('error', "Webcam is not live yet");
            if (!user_callback) return this.dispatch('error', "Please provide a callback function or canvas to snap()");

            // if we have an active preview freeze, use that
            if (this.preview_active) {
                this.savePreview(user_callback, user_canvas);
                return null;
            }

            // create offscreen canvas element to hold pixels
            var canvas = document.createElement('canvas');
            canvas.width = this.params.dest_width;
            canvas.height = this.params.dest_height;
            var context = canvas.getContext('2d');

            // flip canvas horizontally if desired
            if (this.params.flip_horiz) {
                context.translate(params.dest_width, 0);
                context.scale(-1, 1);
            }

            // create inline function, called after image load (flash) or immediately (native)
            var func = function () {
                // render image if needed (flash)
                if (this.src && this.width && this.height) {
                    context.drawImage(this, 0, 0, params.dest_width, params.dest_height);
                }

                // crop if desired
                if (params.crop_width && params.crop_height) {
                    var crop_canvas = document.createElement('canvas');
                    crop_canvas.width = params.crop_width;
                    crop_canvas.height = params.crop_height;
                    var crop_context = crop_canvas.getContext('2d');

                    crop_context.drawImage(canvas,
                        Math.floor((params.dest_width / 2) - (params.crop_width / 2)),
                        Math.floor((params.dest_height / 2) - (params.crop_height / 2)),
                        params.crop_width,
                        params.crop_height,
                        0,
                        0,
                        params.crop_width,
                        params.crop_height
                    );

                    // swap canvases
                    context = crop_context;
                    canvas = crop_canvas;
                }

                // render to user canvas if desired
                if (user_canvas) {
                    var user_context = user_canvas.getContext('2d');
                    user_context.drawImage(canvas, 0, 0);
                }

                // fire user callback if desired
                user_callback(
                    user_canvas ? null : canvas.toDataURL('image/' + params.image_format, params.jpeg_quality / 100),
                    canvas,
                    context
                );
            };

            // grab image frame from userMedia or flash movie
            if (this.userMedia) {
                // native implementation
                context.drawImage(this.video, 0, 0, this.params.dest_width, this.params.dest_height);

                // fire callback right away
                func();
            }
            else {
                // flash fallback
                var raw_data = this.getMovie()._snap();

                // render to image, fire callback when complete
                var img = new Image();
                img.onload = func;
                img.src = 'data:image/' + this.params.image_format + ';base64,' + raw_data;
            }

            return null;
        },

        configure: function (panel) {
            // open flash configuration panel -- specify tab name:
            // "camera", "privacy", "default", "localStorage", "microphone", "settingsManager"
            if (!panel) panel = "camera";
            this.getMovie()._configure(panel);
        },

        flashNotify: function (type, msg) {
            // receive notification from flash about event
            switch (type) {
                case 'flashLoadComplete':
                    // movie loaded successfully
                    this.loaded = true;
                    this.dispatch('load');
                    break;

                case 'cameraLive':
                    // camera is live and ready to snap
                    this.live = true;
                    this.dispatch('live');
                    this.flip();
                    break;

                case 'error':
                    // Flash error
                    this.dispatch('error', msg);
                    break;

                default:
                    // catch-all event, just in case
                    // console.log("webcam flash_notify: " + type + ": " + msg);
                    break;
            }
        },

        b64ToUint6: function (nChr) {
            // convert base64 encoded character to 6-bit integer
            // from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding
            return nChr > 64 && nChr < 91 ? nChr - 65
                : nChr > 96 && nChr < 123 ? nChr - 71
                : nChr > 47 && nChr < 58 ? nChr + 4
                : nChr === 43 ? 62 : nChr === 47 ? 63 : 0;
        },

        base64DecToArr: function (sBase64, nBlocksSize) {
            // convert base64 encoded string to Uintarray
            // from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Base64_encoding_and_decoding
            var sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, ""), nInLen = sB64Enc.length,
                nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2,
                taBytes = new Uint8Array(nOutLen);

            for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                nMod4 = nInIdx & 3;
                nUint24 |= this.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                if (nMod4 === 3 || nInLen - nInIdx === 1) {
                    for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                        taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                    }
                    nUint24 = 0;
                }
            }
            return taBytes;
        },

        upload: function (image_data_uri, target_url, callback) {
            // submit image data to server using binary AJAX
            var form_elem_name = this.params.upload_name || 'webcam';

            // detect image format from within image_data_uri
            var image_fmt = '';
            if (image_data_uri.match(/^data\:image\/(\w+)/))
                image_fmt = RegExp.$1;
            else
                throw "Cannot locate image format in Data URI";

            // extract raw base64 data from Data URI
            var raw_image_data = image_data_uri.replace(/^data\:image\/\w+\;base64\,/, '');

            // contruct use AJAX object
            var http = new XMLHttpRequest();
            http.open("POST", target_url, true);

            // setup progress events
            if (http.upload && http.upload.addEventListener) {
                http.upload.addEventListener('progress', function (e) {
                    if (e.lengthComputable) {
                        var progress = e.loaded / e.total;
                        Webcam.dispatch('uploadProgress', progress, e);
                    }
                }, false);
            }

            // completion handler
            var self = this;
            http.onload = function () {
                if (callback) callback.apply(self, [http.status, http.responseText, http.statusText]);
                Webcam.dispatch('uploadComplete', http.status, http.responseText, http.statusText);
            };

            // create a blob and decode our base64 to binary
            var blob = new Blob([this.base64DecToArr(raw_image_data)], { type: 'image/' + image_fmt });

            // stuff into a form, so servers can easily receive it as a standard file upload
            var form = new FormData();
            form.append(form_elem_name, blob, form_elem_name + "." + image_fmt.replace(/e/, ''));

            // send data to server
            http.send(form);
        }

    };

    Webcam.init();

    if (typeof define === 'function' && define.amd) {
        define(function () { return Webcam; });
    }
    else if (typeof module === 'object' && module.exports) {
        module.exports = Webcam;
    }
    else {
        window.Webcam = Webcam;
    }

}(window));
'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function () {
  // Init module configuration options
  var applicationModuleName = 'mean';
  var applicationModuleVendorDependencies = ['ngResource', 'ngAnimate', 'ngMessages', 'ui.router', 'ui.bootstrap', 'ui.utils', 'angularFileUpload'];

  // Add a new vertical module
  var registerModule = function (moduleName, dependencies) {
    // Create angular module
    angular.module(moduleName, dependencies || []);

    // Add the module to the AngularJS configuration file
    angular.module(applicationModuleName).requires.push(moduleName);
  };

  return {
    applicationModuleName: applicationModuleName,
    applicationModuleVendorDependencies: applicationModuleVendorDependencies,
    registerModule: registerModule
  };
})();

'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider', '$httpProvider',
  function ($locationProvider, $httpProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');

    $httpProvider.interceptors.push('authInterceptor');
  }
]);

angular.module(ApplicationConfiguration.applicationModuleName).run(["$rootScope", "$state", "Authentication", function ($rootScope, $state, Authentication) {

  // Check authentication before changing state
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    if (toState.data && toState.data.roles && toState.data.roles.length > 0) {
      var allowed = false;
      toState.data.roles.forEach(function (role) {
        if ((role === 'guest') || (Authentication.user && Authentication.user.roles !== undefined && Authentication.user.roles.indexOf(role) !== -1)) {
          allowed = true;
          return true;
        }
      });

      if (!allowed) {
        event.preventDefault();
        if (Authentication.user !== undefined && typeof Authentication.user === 'object') {
          $state.go('forbidden');
        } else {
          $state.go('authentication.signin').then(function () {
            storePreviousState(toState, toParams);
          });
        }
      }
    }
  });

  // Record previous state
  $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    storePreviousState(fromState, fromParams);
  });

  // Store previous state
  function storePreviousState(state, params) {
    // only store this state if it shouldn't be ignored 
    if (!state.data || !state.data.ignoreState) {
      $state.previous = {
        state: state,
        params: params,
        href: $state.href(state, params)
      };
    }
  }
}]);

//Then define the init function for starting up the application
angular.element(document).ready(function () {
  //Fixing facebook bug with redirect
  if (window.location.hash && window.location.hash === '#_=_') {
    if (window.history && history.pushState) {
      window.history.pushState('', document.title, window.location.pathname);
    } else {
      // Prevent scrolling by storing the page's current scroll offset
      var scroll = {
        top: document.body.scrollTop,
        left: document.body.scrollLeft
      };
      window.location.hash = '';
      // Restore the scroll offset, should be flicker free
      document.body.scrollTop = scroll.top;
      document.body.scrollLeft = scroll.left;
    }
  }

  //Then init the app
  angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});

(function (app) {
  'use strict';

  app.registerModule('articles');
  app.registerModule('articles.services');
  app.registerModule('articles.routes', ['ui.router', 'articles.services']);
})(ApplicationConfiguration);

'use strict';

// Use Application configuration module to register a new module
ApplicationConfiguration.registerModule('core');
ApplicationConfiguration.registerModule('core.admin', ['core']);
ApplicationConfiguration.registerModule('core.admin.routes', ['ui.router']);

'use strict';

// Use application configuration module to register a new module
ApplicationConfiguration.registerModule('inspections');

'use strict';

// Use Application configuration module to register a new module
ApplicationConfiguration.registerModule('users', ['core']);
ApplicationConfiguration.registerModule('users.admin', ['core.admin']);
ApplicationConfiguration.registerModule('users.admin.routes', ['core.admin.routes']);

(function () {
  'use strict';

  angular
    .module('articles')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Articles',
      state: 'articles',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'articles', {
      title: 'List Articles',
      state: 'articles.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'articles', {
      title: 'Create Article',
      state: 'articles.create',
      roles: ['user']
    });
  }
})();

(function () {
  'use strict';

  angular
    .module('articles.routes')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider'];

  function routeConfig($stateProvider) {
    $stateProvider
      .state('articles', {
        abstract: true,
        url: '/articles',
        template: '<ui-view/>'
      })
      .state('articles.list', {
        url: '',
        templateUrl: 'modules/articles/client/views/list-articles.client.view.html',
        controller: 'ArticlesListController',
        controllerAs: 'vm',
        data: {
          pageTitle: 'Articles List'
        }
      })
      .state('articles.create', {
        url: '/create',
        templateUrl: 'modules/articles/client/views/form-article.client.view.html',
        controller: 'ArticlesController',
        controllerAs: 'vm',
        resolve: {
          articleResolve: newArticle
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle : 'Articles Create'
        }
      })
      .state('articles.edit', {
        url: '/:articleId/edit',
        templateUrl: 'modules/articles/client/views/form-article.client.view.html',
        controller: 'ArticlesController',
        controllerAs: 'vm',
        resolve: {
          articleResolve: getArticle
        },
        data: {
          roles: ['user', 'admin'],
          pageTitle: 'Edit Article {{ articleResolve.title }}'
        }
      })
      .state('articles.view', {
        url: '/:articleId',
        templateUrl: 'modules/articles/client/views/view-article.client.view.html',
        controller: 'ArticlesController',
        controllerAs: 'vm',
        resolve: {
          articleResolve: getArticle
        },
        data:{
          pageTitle: 'Article {{ articleResolve.title }}'
        }
      });
  }

  getArticle.$inject = ['$stateParams', 'ArticlesService'];

  function getArticle($stateParams, ArticlesService) {
    return ArticlesService.get({
      articleId: $stateParams.articleId
    }).$promise;
  }

  newArticle.$inject = ['ArticlesService'];

  function newArticle(ArticlesService) {
    return new ArticlesService();
  }
})();

(function () {
  'use strict';

  angular
    .module('articles')
    .controller('ArticlesController', ArticlesController);

  ArticlesController.$inject = ['$scope', '$state', 'articleResolve', 'Authentication'];

  function ArticlesController($scope, $state, article, Authentication) {
    var vm = this;

    vm.article = article;
    vm.authentication = Authentication;
    vm.error = null;
    vm.form = {};
    vm.remove = remove;
    vm.save = save;

    // Remove existing Article
    function remove() {
      if (confirm('Are you sure you want to delete?')) {
        vm.article.$remove($state.go('articles.list'));
      }
    }

    // Save Article
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'vm.form.articleForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (vm.article._id) {
        vm.article.$update(successCallback, errorCallback);
      } else {
        vm.article.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('articles.view', {
          articleId: res._id
        });
      }

      function errorCallback(res) {
        vm.error = res.data.message;
      }
    }
  }
})();

(function () {
  'use strict';

  angular
    .module('articles')
    .controller('ArticlesListController', ArticlesListController);

  ArticlesListController.$inject = ['ArticlesService'];

  function ArticlesListController(ArticlesService) {
    var vm = this;

    vm.articles = ArticlesService.query();
  }
})();

(function () {
  'use strict';

  angular
    .module('articles.services')
    .factory('ArticlesService', ArticlesService);

  ArticlesService.$inject = ['$resource'];

  function ArticlesService($resource) {
    return $resource('api/articles/:articleId', {
      articleId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
})();

'use strict';

angular.module('core.admin').run(['Menus',
  function (Menus) {
    Menus.addMenuItem('topbar', {
      title: 'Admin',
      state: 'admin',
      type: 'dropdown',
      roles: ['admin']
    });
  }
]);

'use strict';

// Setting up route
angular.module('core.admin.routes').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('admin', {
        abstract: true,
        url: '/admin',
        template: '<ui-view/>',
        data: {
          roles: ['admin']
        }
      });
  }
]);

(function () {
  'use strict';

  angular
  .module('core')
  .run(MenuConfig);

  MenuConfig.$inject = ['Menus'];

  function MenuConfig(Menus) {

    Menus.addMenu('account', {
      roles: ['user']
    });

    Menus.addMenuItem('account', {
      title: '',
      state: 'settings',
      type: 'dropdown',
      roles: ['user']
    });

    Menus.addSubMenuItem('account', 'settings', {
      title: 'Edit Profile',
      state: 'settings.profile'
    });

    Menus.addSubMenuItem('account', 'settings', {
      title: 'Edit Profile Picture',
      state: 'settings.picture'
    });

    Menus.addSubMenuItem('account', 'settings', {
      title: 'Change Password',
      state: 'settings.password'
    });

    Menus.addSubMenuItem('account', 'settings', {
      title: 'Manage Social Accounts',
      state: 'settings.accounts'
    });

  }

})();

'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {

    // Redirect to 404 when route not found
    $urlRouterProvider.otherwise(function ($injector, $location) {
      $injector.get('$state').transitionTo('not-found', null, {
        location: false
      });
    });

    // Home state routing
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'modules/core/client/views/home.client.view.html'
      })
      .state('not-found', {
        url: '/not-found',
        templateUrl: 'modules/core/client/views/404.client.view.html',
        data: {
          ignoreState: true,
          pageTitle: 'Not-Found'
        }
      })
      .state('bad-request', {
        url: '/bad-request',
        templateUrl: 'modules/core/client/views/400.client.view.html',
        data: {
          ignoreState: true,
          pageTitle: 'Bad-Request'
        }
      })
      .state('forbidden', {
        url: '/forbidden',
        templateUrl: 'modules/core/client/views/403.client.view.html',
        data: {
          ignoreState: true,
          pageTitle: 'Forbidden'
        }
      });
  }
]);

'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', 'Menus',
  function ($scope, $state, Authentication, Menus) {
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    // Get the topbar menu
    $scope.menu = Menus.getMenu('topbar');

    // Get the account menu
    $scope.accountMenu = Menus.getMenu('account').items[0];

    // Toggle the menu items
    $scope.isCollapsed = false;
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };

    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });
  }
]);

'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication','$timeout',
  function ($scope, Authentication, $timeout) {
    // This provides Authentication context.
      $scope.authentication = Authentication;
      $timeout(function () {
          sbAdminObj.init();
          morrisData.init();
      });
  }
]);

(function () {
  'use strict';

  angular.module('core')
    .directive('pageTitle', pageTitle);

  pageTitle.$inject = ['$rootScope', '$timeout', '$interpolate', '$state'];

  function pageTitle($rootScope, $timeout, $interpolate, $state) {
    var directive = {
      retrict: 'A',
      link: link
    };

    return directive;

    function link(scope, element) {
      $rootScope.$on('$stateChangeSuccess', listener);

      function listener(event, toState) {
        var title = (getTitle($state.$current));
        $timeout(function () {
          element.text(title);
        }, 0, false);
      }

      function getTitle(currentState) {
        var applicationCoreTitle = 'HarrisTeq Home Inspection Mean.js Demo';
        var workingState = currentState;
        if (currentState.data) {
          workingState = (typeof workingState.locals !== 'undefined') ? workingState.locals.globals : workingState;
          var stateTitle = $interpolate(currentState.data.pageTitle)(workingState);
          return applicationCoreTitle + ' - ' + stateTitle;
        } else {
          return applicationCoreTitle;
        }
      }
    }
  }
})();

'use strict';

/**
 * Edits by Ryan Hutchison
 * Credit: https://github.com/paulyoder/angular-bootstrap-show-errors */

angular.module('core')
  .directive('showErrors', ['$timeout', '$interpolate', function ($timeout, $interpolate) {
    var linkFn = function (scope, el, attrs, formCtrl) {
      var inputEl, inputName, inputNgEl, options, showSuccess, toggleClasses,
        initCheck = false,
        showValidationMessages = false,
        blurred = false;

      options = scope.$eval(attrs.showErrors) || {};
      showSuccess = options.showSuccess || false;
      inputEl = el[0].querySelector('.form-control[name]') || el[0].querySelector('[name]');
      inputNgEl = angular.element(inputEl);
      inputName = $interpolate(inputNgEl.attr('name') || '')(scope);

      if (!inputName) {
        throw 'show-errors element has no child input elements with a \'name\' attribute class';
      }

      var reset = function () {
        return $timeout(function () {
          el.removeClass('has-error');
          el.removeClass('has-success');
          showValidationMessages = false;
        }, 0, false);
      };

      scope.$watch(function () {
        return formCtrl[inputName] && formCtrl[inputName].$invalid;
      }, function (invalid) {
        return toggleClasses(invalid);
      });

      scope.$on('show-errors-check-validity', function (event, name) {
        if (angular.isUndefined(name) || formCtrl.$name === name) {
          initCheck = true;
          showValidationMessages = true;

          return toggleClasses(formCtrl[inputName].$invalid);
        }
      });

      scope.$on('show-errors-reset', function (event, name) {
        if (angular.isUndefined(name) || formCtrl.$name === name) {
          return reset();
        }
      });

      toggleClasses = function (invalid) {
        el.toggleClass('has-error', showValidationMessages && invalid);
        if (showSuccess) {
          return el.toggleClass('has-success', showValidationMessages && !invalid);
        }
      };
    };

    return {
      restrict: 'A',
      require: '^form',
      compile: function (elem, attrs) {
        if (attrs.showErrors.indexOf('skipFormGroupCheck') === -1) {
          if (!(elem.hasClass('form-group') || elem.hasClass('input-group'))) {
            throw 'show-errors element does not have the \'form-group\' or \'input-group\' class';
          }
        }
        return linkFn;
      }
    };
  }]);

'use strict';

angular.module('core').factory('authInterceptor', ['$q', '$injector', 'Authentication',
  function ($q, $injector, Authentication) {
    return {
      responseError: function(rejection) {
        if (!rejection.config.ignoreAuthModule) {
          switch (rejection.status) {
            case 401:
              // Deauthenticate the global user
              Authentication.user = null;
              $injector.get('$state').transitionTo('authentication.signin');
              break;
            case 403:
              $injector.get('$state').transitionTo('forbidden');
              break;
          }
        }
        // otherwise, default behaviour
        return $q.reject(rejection);
      }
    };
  }
]);

'use strict';

//Menu service used for managing  menus
angular.module('core').service('Menus', [
  function () {
    // Define a set of default roles
    this.defaultRoles = ['user', 'admin'];

    // Define the menus object
    this.menus = {};

    // A private function for rendering decision
    var shouldRender = function (user) {
      if (!!~this.roles.indexOf('*')) {
        return true;
      } else {
        if(!user) {
          return false;
        }
        for (var userRoleIndex in user.roles) {
          for (var roleIndex in this.roles) {
            if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
              return true;
            }
          }
        }
      }

      return false;
    };

    // Validate menu existance
    this.validateMenuExistance = function (menuId) {
      if (menuId && menuId.length) {
        if (this.menus[menuId]) {
          return true;
        } else {
          throw new Error('Menu does not exist');
        }
      } else {
        throw new Error('MenuId was not provided');
      }

      return false;
    };

    // Get the menu object by menu id
    this.getMenu = function (menuId) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);

      // Return the menu object
      return this.menus[menuId];
    };

    // Add new menu object by menu id
    this.addMenu = function (menuId, options) {
      options = options || {};

      // Create the new menu
      this.menus[menuId] = {
        roles: options.roles || this.defaultRoles,
        items: options.items || [],
        shouldRender: shouldRender
      };

      // Return the menu object
      return this.menus[menuId];
    };

    // Remove existing menu object by menu id
    this.removeMenu = function (menuId) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);

      // Return the menu object
      delete this.menus[menuId];
    };

    // Add menu item object
    this.addMenuItem = function (menuId, options) {
      options = options || {};

      // Validate that the menu exists
      this.validateMenuExistance(menuId);

      // Push new menu item
      this.menus[menuId].items.push({
        title: options.title || '',
        state: options.state || '',
        type: options.type || 'item',
        class: options.class,
        roles: ((options.roles === null || typeof options.roles === 'undefined') ? this.defaultRoles : options.roles),
        position: options.position || 0,
        items: [],
        shouldRender: shouldRender
      });

      // Add submenu items
      if (options.items) {
        for (var i in options.items) {
          this.addSubMenuItem(menuId, options.state, options.items[i]);
        }
      }

      // Return the menu object
      return this.menus[menuId];
    };

    // Add submenu item object
    this.addSubMenuItem = function (menuId, parentItemState, options) {
      options = options || {};

      // Validate that the menu exists
      this.validateMenuExistance(menuId);

      // Search for menu item
      for (var itemIndex in this.menus[menuId].items) {
        if (this.menus[menuId].items[itemIndex].state === parentItemState) {
          // Push new submenu item
          this.menus[menuId].items[itemIndex].items.push({
            title: options.title || '',
            state: options.state || '',
            roles: ((options.roles === null || typeof options.roles === 'undefined') ? this.menus[menuId].items[itemIndex].roles : options.roles),
            position: options.position || 0,
            shouldRender: shouldRender
          });
        }
      }

      // Return the menu object
      return this.menus[menuId];
    };

    // Remove existing menu object by menu id
    this.removeMenuItem = function (menuId, menuItemState) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);

      // Search for menu item to remove
      for (var itemIndex in this.menus[menuId].items) {
        if (this.menus[menuId].items[itemIndex].state === menuItemState) {
          this.menus[menuId].items.splice(itemIndex, 1);
        }
      }

      // Return the menu object
      return this.menus[menuId];
    };

    // Remove existing menu object by menu id
    this.removeSubMenuItem = function (menuId, submenuItemState) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);

      // Search for menu item to remove
      for (var itemIndex in this.menus[menuId].items) {
        for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
          if (this.menus[menuId].items[itemIndex].items[subitemIndex].state === submenuItemState) {
            this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
          }
        }
      }

      // Return the menu object
      return this.menus[menuId];
    };

    //Adding the topbar menu
    this.addMenu('topbar', {
      roles: ['*']
    });
  }
]);

'use strict';

// Create the Socket.io wrapper service
angular.module('core').service('Socket', ['Authentication', '$state', '$timeout',
  function (Authentication, $state, $timeout) {
    // Connect to Socket.io server
    this.connect = function () {
      // Connect only when authenticated
      if (Authentication.user) {
        this.socket = io();
      }
    };
    this.connect();

    // Wrap the Socket.io 'on' method
    this.on = function (eventName, callback) {
      if (this.socket) {
        this.socket.on(eventName, function (data) {
          $timeout(function () {
            callback(data);
          });
        });
      }
    };

    // Wrap the Socket.io 'emit' method
    this.emit = function (eventName, data) {
      if (this.socket) {
        this.socket.emit(eventName, data);
      }
    };

    // Wrap the Socket.io 'removeListener' method
    this.removeListener = function (eventName) {
      if (this.socket) {
        this.socket.removeListener(eventName);
      }
    };
  }
]);

'use strict';

// Inspections module config
angular.module('inspections').run(['Menus',
  function (Menus) {
    // Config logic
    // ...
  }
]);

'use strict';

//Setting up route
angular.module('inspections').config(['$stateProvider',
  function($stateProvider) {
    // Inspections state routing
    $stateProvider
      .state('inspections', {
        url: '/inspections',
        templateUrl: 'modules/inspections/client/views/inspections.client.view.html',
        controller: 'InspectionsController',
        controllerAs: 'vm'
        //resolve: {
        //    inspectionResolve: newInspection
        //},
        //data: {
        //    roles: ['user', 'admin'],
        //    pageTitle: 'Manage Inspections'
        //}
      }).state('inspections-photo', {
          url: '/inspections-photo',
          templateUrl: 'modules/inspections/client/views/inspections-photo.client.view.html',
          controller: 'InspectionsController',
          controllerAs: 'vm'
          //resolve: {
          //    inspectionResolve: newInspection
          //},
          //data: {
          //    roles: ['user', 'admin'],
          //    pageTitle: 'Manage Inspections'
          //}
      })
      ;

    //newInspection.$inject = ['InspectionsService'];

    //function newInspection(InspectionsService) {
    //    return new InspectionsService();
    //}
  }
]);

'use strict';


(function () {
    'use strict';

    angular
      .module('inspections')
      .controller('InspectionsController', InspectionsController);

    InspectionsController.$inject = ['$scope', '$state', 'Authentication', '$timeout', 'InspectionService'];

    function InspectionsController($scope, $state, Authentication, $timeout, InspectionService) {
        var vm = this;

        //vm.inspection = inspection;
        vm.authentication = Authentication;
        vm.error = null;
        vm.form = {};
        vm.remove = remove;
        vm.save = save;
        vm.inspection = {};


        vm.inspectionTemplate = {
            "title": "HarrisTeq Demo Template TWO",
            "categories": [
                {
                    "categoryName": "Demo Exterior TWO",
                    "categoryItems": [
                      {
                          "categoryItemName": "Siding",
                          "categoryItemOptions": [
                            {
                                "categoryItemOptionName": "Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Not Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Replace\/Repair",
                                "isSelected": false
                            }
                          ]
                      },
                      {
                          "categoryItemName": "Windows",
                          "categoryItemOptions": [
                            {
                                "categoryItemOptionName": "Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Not Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Replace\/Repair",
                                "isSelected": false
                            }
                          ]
                      },
                      {
                          "categoryItemName": "Doors",
                          "categoryItemOptions": [
                            {
                                "categoryItemOptionName": "Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Not Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Replace\/Repair",
                                "isSelected": false
                            }
                          ]
                      },
                      {
                          "categoryItemName": "Steps",
                          "categoryItemOptions": [
                            {
                                "categoryItemOptionName": "Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Not Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Replace\/Repair",
                                "isSelected": false
                            }
                          ]
                      }
                    ]
                }, {
                    "categoryName": "Heating/Cooling",
                    "categoryItems": [
                      {
                          "categoryItemName": "Heating Equipment",
                          "categoryItemOptions": [
                            {
                                "categoryItemOptionName": "Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Not Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Replace\/Repair",
                                "isSelected": false
                            }
                          ]
                      },
                      {
                          "categoryItemName": "Cooling Equipment",
                          "categoryItemOptions": [
                            {
                                "categoryItemOptionName": "Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Not Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Replace\/Repair",
                                "isSelected": false
                            }
                          ]
                      },
                      {
                          "categoryItemName": "Normal Operating Controls",
                          "categoryItemOptions": [
                            {
                                "categoryItemOptionName": "Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Not Inspected",
                                "isSelected": false
                            },
                            {
                                "categoryItemOptionName": "Replace\/Repair",
                                "isSelected": false
                            }
                          ]
                      }
                    ]
                }
            ]
        };


        vm.createItemOption = function (name, isSelected) {
            var rtn = {}
            rtn["categoryItemOptionName"] = name;
            rtn["isSelected"] = isSelected;
            return rtn;
        };


        vm.createInspectedCategoryItemOptions = function() {
            var rtn = [];
            rtn.push (createItemOption("Inspected", false));
            rtn.push (createItemOption("Not Inspected", false));
            rtn.push(createItemOption("Replace\/Repair", false));
            
            return rtn;
        };

        vm.webcamSetUp = function() {
            Webcam.set({
                // live preview size
                width: 320,
                height: 240,

                // device capture size
                dest_width: 640,
                dest_height: 480,

                // final cropped size
                crop_width: 480,
                crop_height: 480,

                // format and quality
                image_format: 'jpeg',
                jpeg_quality: 90,

                // flip horizontal (mirror mode)
                flip_horiz: true
            });
            Webcam.attach('#my_camera');
        };

        $timeout(function () {
            sbAdminObj.init();
            vm.loadTemplates();

            if ($state.is("inspections-photo")) {
                vm.webcamSetUp();
            }

            //morrisData.init();
        });
        // Remove existing Article
        function remove() {
            if (confirm('Are you sure you want to delete?')) {
                vm.article.$remove($state.go('articles.list'));
            }
        }

        function save(isValid) {
            if (!isValid) {
                $scope.$broadcast('show-errors-check-validity', 'vm.form.inspectionForm');
                return false;
            }

            // TODO: move create/update logic to service
            if (vm.inspection._id) {
                vm.inspection.$update(successCallback, errorCallback);
            } else {
                vm.inspection.$save(successCallback, errorCallback);
            } 

            function successCallback(res) {
                $state.go('inspection.view', {
                    inspectionId: res._id
                });
            }

            function errorCallback(res) {
                vm.error = res.data.message;
            }
        }

        vm.loadTemplates = function() {
            var promise = InspectionService.listInpsectionTemplate();
            promise.then(function (res) {
                //ambitApp.utils.convertDateStringsToDates(res);
                vm.showTemplates(res);
                vm.hideUi = false;
            }, function (response) {
                //failed
                //screenSvc.showAlert(response, 2, false);
                vm.hideUi = false;
            });
        }
        vm.showTemplates = function (res) {
            vm.templates = res;
            console.log(res);
        }

    }
})();









//angular.module('harristeqApp')
//.directive("inspections-photo", ['$q', '$timeout', '$filter', 'alertService', function ($q, $timeout, $filter, alertService) {
//    return {
//        restrict: "E",
//        scope: {
//            captureMessage: '@',
//            countdown: '@',
//            flashFallbackUrl: '@',
//            overlayUrl: '@',
//            outputHeight: '@',
//            outputWidth: '@',
//            shutterUrl: '@',
//            viewerHeight: '@',
//            viewerWidth: '@',
//            cropHeight: '@',
//            cropWidth: '@',
//            imageFormat: '@',
//            jpegQuality: '@',
//            picture: '=',
//            thumbnailImages: '=',
//            onDelete: "&",
//            onSetAsPhoto: "&",
//            onDonotUsePhoto: "&"
//        },
//        link: function (scope, element, attrs) {
//            /**
//             * Set default variables
//             */
//            var mode = {
//                Upload: 0,
//                Camera: 1
//            };

//            scope.libraryLoaded = false;
//            scope.cameraLive = false;
//            scope.activeCountdown = false;
//            scope.cameraMode = false;
//            scope.preview = false;
//            scope.mode = mode.Upload;

//            var rotation = 0, ratio = 1;
//            var CanvasCrop = $.CanvasCrop({
//                cropBox: ".imageBox",
//                imgSrc: "/Images/profile_male.svg",
//                limitOver: 2
//            });

//            /**
//             * Set dimensions
//             */
//            if (scope.viewerHeight === undefined) {
//                scope.viewerHeight = 'auto';
//            }
//            if (scope.viewerWidth === undefined) {
//                scope.viewerWidth = 'auto';
//            }
//            if (scope.outputHeight === undefined) {
//                scope.outputHeight = scope.viewerHeight;
//            }
//            if (scope.outputWidth === undefined) {
//                scope.outputWidth = scope.viewerWidth;
//            }

//            /**
//             * Disable cropping if one or the two params are undefined
//             */
//            if (scope.cropHeight === undefined || scope.cropWidth === undefined) {
//                scope.cropHeight = false;
//                scope.cropWith = false;
//            }

//            /**
//             * Set configuration parameters
//             * @type {object}
//             */
//            Webcam.set({
//                width: scope.viewerWidth,
//                height: scope.viewerHeight,
//                dest_width: scope.outputWidth,
//                dest_height: scope.outputHeight,
//                crop_width: scope.cropWidth,
//                crop_height: scope.cropHeight,
//                image_format: scope.imageFormat,
//                jpeg_quality: scope.jpegQuality,
//                force_flash: false
//            });
//            if (scope.flashFallbackUrl !== 'undefined') {
//                Webcam.setSWFLocation(scope.flashFallbackUrl);
//            }

//            /**
//             * Register WebcamJS events
//             */
//            Webcam.on('load', function () {
//                scope.$apply(function () {
//                    scope.libraryLoaded = true;
//                });
//            });
//            Webcam.on('live', function () {
//                scope.$apply(function () {
//                    scope.cameraLive = true;
//                    scope.cameraMode = true;
//                });
//            });

//            Webcam.on('error', function (error) {
//                scope.$apply(function () {
//                    scope.cameraMode = false;
//                    alertService.error('No camera detected.');
//                });
//            });

//            /**
//             * Preload the shutter sound
//             */
//            if (scope.shutterUrl !== undefined) {
//                scope.shutter = new Audio();
//                scope.shutter.autoplay = false;
//                if (navigator.userAgent.match(/Firefox/)) {
//                    scope.shutter.src = scope.shutterUrl.split('.')[0] + '.ogg';
//                } else {
//                    scope.shutter.src = scope.shutterUrl;
//                }
//            }

//            /**
//             * Set countdown
//             */
//            if (scope.countdown !== undefined) {
//                scope.countdownTime = parseInt(scope.countdown) * 1000;
//                scope.countdownText = parseInt(scope.countdown);
//            }
//            scope.countdownStart = function () {
//                scope.activeCountdown = true;
//                scope.countdownPromise = $q.defer();
//                scope.countdownTick = setInterval(function () {
//                    return scope.$apply(function () {
//                        var nextTick;
//                        nextTick = parseInt(scope.countdownText) - 1;
//                        if (nextTick === 0) {
//                            scope.countdownText = scope.captureMessage != null ? scope.captureMessage : 'GO!';
//                            clearInterval(scope.countdownTick);
//                            scope.countdownPromise.resolve();
//                        } else {
//                            scope.countdownText = nextTick;
//                        }
//                    });
//                }, 1000);
//            };

//            /**
//             * Get snapshot
//             */
//            scope.getSnapshot = function () {
//                if (scope.countdown !== undefined) {
//                    scope.countdownStart();
//                    scope.countdownPromise.promise.then(function () {
//                        $timeout(function () {
//                            scope.activeCountdown = false;
//                            scope.countdownText = parseInt(scope.countdown);
//                        }, 2000);

//                        if (scope.shutterUrl !== undefined) {
//                            scope.shutter.play();
//                        }

//                        Webcam.snap(function (data_uri) {
//                            setProfilePicture(data_uri, null);
//                            scope.cameraMode = false;
//                            scope.mode = mode.Camera;
//                            scope.stopCamera();
//                        });
//                    });
//                } else {
//                    if (scope.shutterUrl !== undefined) {
//                        scope.shutter.play();
//                    }

//                    Webcam.snap(function (data_uri) {
//                        setProfilePicture(data_uri, null);
//                        setImageEditor(data_uri);

//                        scope.cameraMode = false;
//                        scope.mode = mode.Camera;
//                        scope.stopCamera();
//                    });
//                }
//            };

//            scope.$on('$destroy', function () {
//                Webcam.reset();
//            });

//            scope.startCamera = function () {
//                scope.cameraMode = true;
//                if (!Webcam.live) {
//                    Webcam.attach('#ng-camera-feed');
//                }
//            };

//            scope.stopCamera = function () {
//                scope.cameraMode = false;
//                Webcam.reset()
//            };

//            scope.$watchCollection('thumbnailImages', function (newThumbnailImages) {
//                scope.profilePicture = $filter('filter')(scope.thumbnailImages, { IsPrimary: true })[0];

//                if (scope.profilePicture != undefined && scope.profilePicture != null) {
//                    setImageEditor("data:image/jpeg;base64," + scope.profilePicture.ThumbnailBLOB);
//                    scope.picture = angular.copy(scope.profilePicture);
//                    scope.preview = true;
//                }
//                else {
//                    setImageEditor("/Images/profile_male.svg");
//                    scope.preview = false;
//                    scope.picture = null;
//                }
//            });

//            // ************* Image Builder ******************
//            angular.element("#photoFile").on('change', function () {
//                scope.stopCamera();
//                scope.mode = mode.Upload;
//                if (!isValidFile()) {
//                    alertService.error('Invalid image format.');
//                    return;
//                }
//                var imgSize = (angular.element("#photoFile")[0].files[0].size / 1024);
//                if (parseInt(imgSize) > 4 * 1024) {
//                    alertService.error('Photo size can not be more than 4 MB.');
//                    return;
//                }

//                var reader = new FileReader();
//                reader.onload = function (e) {
//                    setImageEditor(e.srcElement.result);

//                    rotation = 0;
//                    ratio = 1;

//                    scope.$apply(function () {
//                        scope.cameraMode = false;
//                        setProfilePicture(e.srcElement.result, null);
//                    });
//                }
//                reader.readAsDataURL(this.files[0]);
//                this.files = [];
//            });

//            angular.element("#rotateLeft").on("click", function () {
//                rotation -= 90;
//                rotation = rotation < 0 ? 270 : rotation;
//                CanvasCrop.rotate(rotation);

//                setPicture();
//            });

//            angular.element("#rotateRight").on("click", function () {
//                rotation += 90;
//                rotation = rotation > 360 ? 90 : rotation;
//                CanvasCrop.rotate(rotation);

//                setPicture();
//            });

//            angular.element("#zoomIn").on("click", function () {
//                ratio = ratio * 0.9;
//                CanvasCrop.scale(ratio);

//                setPicture();
//            });

//            angular.element("#zoomOut").on("click", function () {
//                ratio = ratio * 1.1;
//                CanvasCrop.scale(ratio);

//                setPicture();
//            });

//            angular.element("#crop").on("click", function () {
//                var src = CanvasCrop.getDataURL("jpeg", scope.mode);
//                setImageEditor(src);

//                scope.$apply(function () {
//                    setProfilePicture(null, src);
//                    scope.mode = mode.Upload;
//                });
//            });

//            scope.removePicture = function () {
//                bootbox.confirm('Are you sure you want to deactivate?', function (confirmed) {
//                    if (confirmed) {
//                        scope.$apply(function () {
//                            setProfilePicture(null, null);
//                            setImageEditor("/Images/profile_male.svg");
//                            angular.element("#photoFile").val('');
//                        });
//                    }
//                });
//            };

//            function setPicture() {
//                scope.$apply(function () {
//                    var src = CanvasCrop.getActualDataURL("jpeg");
//                    setProfilePicture(src, src);
//                });
//            }

//            function setProfilePicture(image, thumbnail) {
//                scope.picture = scope.picture || {};

//                // Clear profile/preview picture
//                if (image == null && thumbnail == null) {
//                    scope.picture = {};
//                    scope.preview = false;
//                    return;
//                }

//                scope.preview = true;
//                if (image != null) {
//                    var imageContent = dataURItoBlob(image);
//                    scope.picture.PhotoBLOB = imageContent.data;
//                    scope.picture.ThumbnailBLOB = imageContent.data;
//                }
//                if (thumbnail != null) {
//                    var imageContent = dataURItoBlob(thumbnail);
//                    scope.picture.ThumbnailBLOB = imageContent.data;
//                }
//            }

//            function setImageEditor(src) {
//                CanvasCrop = $.CanvasCrop({
//                    cropBox: ".imageBox",
//                    imgSrc: src,
//                    limitOver: 2
//                });
//            };

//            function isValidFile() {
//                var input = angular.element("#photoFile")[0];
//                if (input.files && input.files[0]) {
//                    var ftype = input.files[0].type;
//                    switch (ftype) {
//                        case 'image/png':
//                        case 'image/gif':
//                        case 'image/jpeg':
//                        case 'image/pjpeg':
//                            return true;
//                        default:
//                            return false;
//                    }
//                }
//                else
//                    return true;
//            };

//            // ******** *VIEW PHOTOS CAROUSEL **********
//            scope.initOwlCarousel = function () {
//                $timeout(function () {
//                    if (angular.element("#photoLibrary").data('owlCarousel') != undefined) {
//                        angular.element("#photoLibrary").data('owlCarousel').destroy();
//                        angular.element('#photoLibrary .owl-item').remove();
//                    }

//                    angular.element("#photoLibrary").owlCarousel({
//                        itemsCustom: [
//                            [0, 3],
//                            [401, 3],
//                            [1189, 3]
//                        ],
//                        navigation: true,
//                        navigationText: [
//                            "<i class='fa fa-caret-left'><span class='sr-only'>previous</span></i>",
//                            "<i class='fa fa-caret-right'><span class='sr-only'>next</span></i>"
//                        ],
//                        pagination: false
//                    });
//                });
//            }
//        },
//        templateUrl: '/Photo/PhotoProfile'
//    }
//}]);


'use strict';

angular.module('inspections').directive('inspections', [
  function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        // Inspections directive logic
        // ...

        element.text('this is the inspections directive');
      }
    };
  }
]);

'use strict';

angular.module('inspections').filter('inspections', [
  function () {
    return function (input) {
      // Inspections directive logic
      // ...

      return 'inspections filter: ' + input;
    };
  }
]);

'use strict';

angular.module('inspections').factory('InspectionService', ['$q', '$http',
  function ($q, $http) {
      var svc = {};

      svc.listInpsectionTemplate = function (data) {
          var deferred = $q.defer();
          
          console.log(" listInpsectionTemplate data", data);
          $http.get("/api/inspectiontemplate/", data)
             .success(function (data, status) {
                 deferred.resolve(data);
             }).error(function (data, status, headers, config) {
                 var err = buildErrorResponse(data, status, headers, config);
                 err.detailedErrorMessage = "Error fetching listInpsectionTemplate.";
                 console.log(err);
                 deferred.reject(err);
             });

          return deferred.promise;
      };



      svc.buildErrorResponse = function (data, status, headers, config) {
          var statusCode = status || "Unknown";
          var rtn = {
              data: data || {},
              status: status || {},
              headers: headers || {},
              config: config || {},
              isAuthenticated: true,
              simpleErrorMessage: statusCode + " error has occured.",
              detailedErrorMessage: ""
          };
          return rtn;
      };

      return svc;
  }
]);

'use strict';

// Configuring the Users module
angular.module('users.admin').run(['Menus',
  function (Menus) {
    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Manage Users',
      state: 'admin.users'
    });
  }
]);

'use strict';

// Setting up route
angular.module('users.admin.routes').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('admin.users', {
        url: '/users',
        templateUrl: 'modules/users/client/views/admin/list-users.client.view.html',
        controller: 'UserListController',
        data: {
          pageTitle: 'Users List'
        }
      })
      .state('admin.user', {
        url: '/users/:userId',
        templateUrl: 'modules/users/client/views/admin/view-user.client.view.html',
        controller: 'UserController',
        resolve: {
          userResolve: ['$stateParams', 'Admin', function ($stateParams, Admin) {
            return Admin.get({
              userId: $stateParams.userId
            });
          }]
        },
        data: {
          pageTitle: 'Edit {{ userResolve.displayName }}'
        }
      })
      .state('admin.user-edit', {
        url: '/users/:userId/edit',
        templateUrl: 'modules/users/client/views/admin/edit-user.client.view.html',
        controller: 'UserController',
        resolve: {
          userResolve: ['$stateParams', 'Admin', function ($stateParams, Admin) {
            return Admin.get({
              userId: $stateParams.userId
            });
          }]
        },
        data: {
          pageTitle: 'Edit User {{ userResolve.displayName }}'
        }
      });
  }
]);

'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
  function ($stateProvider) {
    // Users state routing
    $stateProvider
      .state('settings', {
        abstract: true,
        url: '/settings',
        templateUrl: 'modules/users/client/views/settings/settings.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('settings.profile', {
        url: '/profile',
        templateUrl: 'modules/users/client/views/settings/edit-profile.client.view.html',
        data: {
          pageTitle: 'Settings'
        }
      })
      .state('settings.password', {
        url: '/password',
        templateUrl: 'modules/users/client/views/settings/change-password.client.view.html',
        data: {
          pageTitle: 'Settings password'
        }
      })
      .state('settings.accounts', {
        url: '/accounts',
        templateUrl: 'modules/users/client/views/settings/manage-social-accounts.client.view.html',
        data: {
          pageTitle: 'Settings accounts'
        }
      })
      .state('settings.picture', {
        url: '/picture',
        templateUrl: 'modules/users/client/views/settings/change-profile-picture.client.view.html',
        data: {
          pageTitle: 'Settings picture'
        }
      })
      .state('authentication', {
        abstract: true,
        url: '/authentication',
        templateUrl: 'modules/users/client/views/authentication/authentication.client.view.html'
      })
      .state('authentication.signup', {
        url: '/signup',
        templateUrl: 'modules/users/client/views/authentication/signup.client.view.html',
        data: {
          pageTitle: 'Signup'
        }
      })
      .state('authentication.signin', {
        url: '/signin?err',
        templateUrl: 'modules/users/client/views/authentication/signin.client.view.html',
        data: {
          pageTitle: 'Signin'
        }
      })
      .state('password', {
        abstract: true,
        url: '/password',
        template: '<ui-view/>'
      })
      .state('password.forgot', {
        url: '/forgot',
        templateUrl: 'modules/users/client/views/password/forgot-password.client.view.html',
        data: {
          pageTitle: 'Password forgot'
        }
      })
      .state('password.reset', {
        abstract: true,
        url: '/reset',
        template: '<ui-view/>'
      })
      .state('password.reset.invalid', {
        url: '/invalid',
        templateUrl: 'modules/users/client/views/password/reset-password-invalid.client.view.html',
        data: {
          pageTitle: 'Password reset invalid'
        }
      })
      .state('password.reset.success', {
        url: '/success',
        templateUrl: 'modules/users/client/views/password/reset-password-success.client.view.html',
        data: {
          pageTitle: 'Password reset success'
        }
      })
      .state('password.reset.form', {
        url: '/:token',
        templateUrl: 'modules/users/client/views/password/reset-password.client.view.html',
        data: {
          pageTitle: 'Password reset form'
        }
      });
  }
]);

'use strict';

angular.module('users.admin').controller('UserListController', ['$scope', '$filter', 'Admin',
  function ($scope, $filter, Admin) {
    Admin.query(function (data) {
      $scope.users = data;
      $scope.buildPager();
    });

    $scope.buildPager = function () {
      $scope.pagedItems = [];
      $scope.itemsPerPage = 15;
      $scope.currentPage = 1;
      $scope.figureOutItemsToDisplay();
    };

    $scope.figureOutItemsToDisplay = function () {
      $scope.filteredItems = $filter('filter')($scope.users, {
        $: $scope.search
      });
      $scope.filterLength = $scope.filteredItems.length;
      var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
      var end = begin + $scope.itemsPerPage;
      $scope.pagedItems = $scope.filteredItems.slice(begin, end);
    };

    $scope.pageChanged = function () {
      $scope.figureOutItemsToDisplay();
    };
  }
]);

'use strict';

angular.module('users.admin').controller('UserController', ['$scope', '$state', 'Authentication', 'userResolve',
  function ($scope, $state, Authentication, userResolve) {
    $scope.authentication = Authentication;
    $scope.user = userResolve;

    $scope.remove = function (user) {
      if (confirm('Are you sure you want to delete this user?')) {
        if (user) {
          user.$remove();

          $scope.users.splice($scope.users.indexOf(user), 1);
        } else {
          $scope.user.$remove(function () {
            $state.go('admin.users');
          });
        }
      }
    };

    $scope.update = function (isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'userForm');

        return false;
      }

      var user = $scope.user;

      user.$update(function () {
        $state.go('admin.user', {
          userId: user._id
        });
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
  }
]);

'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$state', '$http', '$location', '$window', 'Authentication', 'PasswordValidator',
  function ($scope, $state, $http, $location, $window, Authentication, PasswordValidator) {
    $scope.authentication = Authentication;
    $scope.popoverMsg = PasswordValidator.getPopoverMsg();

    // Get an eventual error defined in the URL query string:
    $scope.error = $location.search().err;

    // If user is signed in then redirect back home
    if ($scope.authentication.user) {
      $location.path('/');
    }

    $scope.signup = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'userForm');

        return false;
      }

      $http.post('/api/auth/signup', $scope.credentials).success(function (response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;

        // And redirect to the previous or home page
        $state.go($state.previous.state.name || 'home', $state.previous.params);
      }).error(function (response) {
        $scope.error = response.message;
      });
    };

    $scope.signin = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'userForm');

        return false;
      }

      $http.post('/api/auth/signin', $scope.credentials).success(function (response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;

        // And redirect to the previous or home page
        $state.go($state.previous.state.name || 'home', $state.previous.params);
      }).error(function (response) {
        $scope.error = response.message;
      });
    };

    // OAuth provider request
    $scope.callOauthProvider = function (url) {
      if ($state.previous && $state.previous.href) {
        url += '?redirect_to=' + encodeURIComponent($state.previous.href);
      }

      // Effectively call OAuth authentication route:
      $window.location.href = url;
    };
  }
]);

'use strict';

angular.module('users').controller('PasswordController', ['$scope', '$stateParams', '$http', '$location', 'Authentication', 'PasswordValidator',
  function ($scope, $stateParams, $http, $location, Authentication, PasswordValidator) {
    $scope.authentication = Authentication;
    $scope.popoverMsg = PasswordValidator.getPopoverMsg();

    // If user is signed in then redirect back home
    if ($scope.authentication.user) {
      $location.path('/');
    }

    // Submit forgotten password account id
    $scope.askForPasswordReset = function (isValid) {
      $scope.success = $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'forgotPasswordForm');

        return false;
      }

      $http.post('/api/auth/forgot', $scope.credentials).success(function (response) {
        // Show user success message and clear form
        $scope.credentials = null;
        $scope.success = response.message;

      }).error(function (response) {
        // Show user error message and clear form
        $scope.credentials = null;
        $scope.error = response.message;
      });
    };

    // Change user password
    $scope.resetUserPassword = function (isValid) {
      $scope.success = $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'resetPasswordForm');

        return false;
      }

      $http.post('/api/auth/reset/' + $stateParams.token, $scope.passwordDetails).success(function (response) {
        // If successful show success message and clear form
        $scope.passwordDetails = null;

        // Attach user profile
        Authentication.user = response;

        // And redirect to the index page
        $location.path('/password/reset/success');
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);

'use strict';

angular.module('users').controller('ChangePasswordController', ['$scope', '$http', 'Authentication', 'PasswordValidator',
  function ($scope, $http, Authentication, PasswordValidator) {
    $scope.user = Authentication.user;
    $scope.popoverMsg = PasswordValidator.getPopoverMsg();

    // Change user password
    $scope.changeUserPassword = function (isValid) {
      $scope.success = $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'passwordForm');

        return false;
      }

      $http.post('/api/users/password', $scope.passwordDetails).success(function (response) {
        // If successful show success message and clear form
        $scope.$broadcast('show-errors-reset', 'passwordForm');
        $scope.success = true;
        $scope.passwordDetails = null;
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);

'use strict';

angular.module('users').controller('ChangeProfilePictureController', ['$scope', '$timeout', '$window', 'Authentication', 'FileUploader',
  function ($scope, $timeout, $window, Authentication, FileUploader) {
    $scope.user = Authentication.user;
    $scope.imageURL = $scope.user.profileImageURL;

    // Create file uploader instance
    $scope.uploader = new FileUploader({
      url: 'api/users/picture',
      alias: 'newProfilePicture'
    });

    // Set file uploader image filter
    $scope.uploader.filters.push({
      name: 'imageFilter',
      fn: function (item, options) {
        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
      }
    });

    // Called after the user selected a new picture file
    $scope.uploader.onAfterAddingFile = function (fileItem) {
      if ($window.FileReader) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL(fileItem._file);

        fileReader.onload = function (fileReaderEvent) {
          $timeout(function () {
            $scope.imageURL = fileReaderEvent.target.result;
          }, 0);
        };
      }
    };

    // Called after the user has successfully uploaded a new picture
    $scope.uploader.onSuccessItem = function (fileItem, response, status, headers) {
      // Show success message
      $scope.success = true;

      // Populate user object
      $scope.user = Authentication.user = response;

      // Clear upload buttons
      $scope.cancelUpload();
    };

    // Called after the user has failed to uploaded a new picture
    $scope.uploader.onErrorItem = function (fileItem, response, status, headers) {
      // Clear upload buttons
      $scope.cancelUpload();

      // Show error message
      $scope.error = response.message;
    };

    // Change user profile picture
    $scope.uploadProfilePicture = function () {
      // Clear messages
      $scope.success = $scope.error = null;

      // Start upload
      $scope.uploader.uploadAll();
    };

    // Cancel the upload process
    $scope.cancelUpload = function () {
      $scope.uploader.clearQueue();
      $scope.imageURL = $scope.user.profileImageURL;
    };
  }
]);

'use strict';

angular.module('users').controller('EditProfileController', ['$scope', '$http', '$location', 'Users', 'Authentication',
  function ($scope, $http, $location, Users, Authentication) {
    $scope.user = Authentication.user;

    // Update a user profile
    $scope.updateUserProfile = function (isValid) {
      $scope.success = $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'userForm');

        return false;
      }

      var user = new Users($scope.user);

      user.$update(function (response) {
        $scope.$broadcast('show-errors-reset', 'userForm');

        $scope.success = true;
        Authentication.user = response;
      }, function (response) {
        $scope.error = response.data.message;
      });
    };
  }
]);

'use strict';

angular.module('users').controller('SocialAccountsController', ['$scope', '$http', 'Authentication',
  function ($scope, $http, Authentication) {
    $scope.user = Authentication.user;

    // Check if there are additional accounts
    $scope.hasConnectedAdditionalSocialAccounts = function (provider) {
      for (var i in $scope.user.additionalProvidersData) {
        return true;
      }

      return false;
    };

    // Check if provider is already in use with current user
    $scope.isConnectedSocialAccount = function (provider) {
      return $scope.user.provider === provider || ($scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider]);
    };

    // Remove a user social account
    $scope.removeUserSocialAccount = function (provider) {
      $scope.success = $scope.error = null;

      $http.delete('/api/users/accounts', {
        params: {
          provider: provider
        }
      }).success(function (response) {
        // If successful show success message and clear form
        $scope.success = true;
        $scope.user = Authentication.user = response;
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);

'use strict';

angular.module('users').controller('SettingsController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    $scope.user = Authentication.user;
  }
]);

'use strict';

angular.module('users')
  .directive('passwordValidator', ['PasswordValidator', function(PasswordValidator) {
    return {
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
        ngModel.$validators.requirements = function (password) {
          var status = true;
          if (password) {
            var result = PasswordValidator.getResult(password);
            var requirementsIdx = 0;

            // Requirements Meter - visual indicator for users
            var requirementsMeter = [
              { color: 'danger', progress: '20' },
              { color: 'warning', progress: '40' },
              { color: 'info', progress: '60' },
              { color: 'primary', progress: '80' },
              { color: 'success', progress: '100' }
            ];

            if (result.errors.length < requirementsMeter.length) {
              requirementsIdx = requirementsMeter.length - result.errors.length - 1;
            }

            scope.requirementsColor = requirementsMeter[requirementsIdx].color;
            scope.requirementsProgress = requirementsMeter[requirementsIdx].progress;

            if (result.errors.length) {
              scope.popoverMsg = PasswordValidator.getPopoverMsg();
              scope.passwordErrors = result.errors;
              status = false;
            } else {
              scope.popoverMsg = '';
              scope.passwordErrors = [];
              status = true;
            }
          }
          return status;
        };
      }
    };
  }]);

'use strict';

angular.module('users')
  .directive('passwordVerify', [function() {
    return {
      require: 'ngModel',
      scope: {
        passwordVerify: '='
      },
      link: function(scope, element, attrs, ngModel) {
        var status = true;
        scope.$watch(function() {
          var combined;
          if (scope.passwordVerify || ngModel) {
            combined = scope.passwordVerify + '_' + ngModel;
          }
          return combined;
        }, function(value) {
          if (value) {
            ngModel.$validators.passwordVerify = function (password) {
              var origin = scope.passwordVerify;
              return (origin !== password) ? false : true;
            };
          }
        });
      }
    };
  }]);

'use strict';

// Users directive used to force lowercase input
angular.module('users').directive('lowercase', function () {
  return {
    require: 'ngModel',
    link: function (scope, element, attrs, modelCtrl) {
      modelCtrl.$parsers.push(function (input) {
        return input ? input.toLowerCase() : '';
      });
      element.css('text-transform', 'lowercase');
    }
  };
});

'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', ['$window',
  function ($window) {
    var auth = {
      user: $window.user
    };

    return auth;
  }
]);

'use strict';

// PasswordValidator service used for testing the password strength
angular.module('users').factory('PasswordValidator', ['$window',
  function ($window) {
    var owaspPasswordStrengthTest = $window.owaspPasswordStrengthTest;

    return {
      getResult: function (password) {
        var result = owaspPasswordStrengthTest.test(password);
        return result;
      },
      getPopoverMsg: function () {
        var popoverMsg = 'Please enter a passphrase or password with 10 or more characters, numbers, lowercase, uppercase, and special characters.';
        return popoverMsg;
      }
    };
  }
]);

'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Users', ['$resource',
  function ($resource) {
    return $resource('api/users', {}, {
      update: {
        method: 'PUT'
      }
    });
  }
]);

//TODO this should be Users service
angular.module('users.admin').factory('Admin', ['$resource',
  function ($resource) {
    return $resource('api/users/:userId', {
      userId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
