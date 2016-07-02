define(["exports", "fable-core", "virtual-dom"], function (exports, _fableCore, _virtualDom) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.renderer = exports.render = exports.createTree = exports.App = exports.Html = undefined;

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Html = exports.Html = function ($exports) {
        var Types = $exports.Types = function ($exports) {
            var MouseEvent = $exports.MouseEvent = function MouseEvent($arg0, $arg1, $arg2) {
                _classCallCheck(this, MouseEvent);

                this.altKey = $arg0;
                this.screenX = $arg1;
                this.screenY = $arg2;
            };

            _fableCore.Util.setInterfaces(MouseEvent.prototype, [], "Fable.Helpers.Virtualdom.Html.Types.MouseEvent");

            var KeyboardEvent = $exports.KeyboardEvent = function KeyboardEvent($arg0, $arg1) {
                _classCallCheck(this, KeyboardEvent);

                this.code = $arg0;
                this.keyCode = $arg1;
            };

            _fableCore.Util.setInterfaces(KeyboardEvent.prototype, [], "Fable.Helpers.Virtualdom.Html.Types.KeyboardEvent");

            var EventHandlerBinding = $exports.EventHandlerBinding = function EventHandlerBinding() {
                _classCallCheck(this, EventHandlerBinding);

                this.Case = arguments[0];
                this.Fields = [];

                for (var i = 1; i < arguments.length; i++) {
                    this.Fields[i - 1] = arguments[i];
                }
            };

            _fableCore.Util.setInterfaces(EventHandlerBinding.prototype, [], "Fable.Helpers.Virtualdom.Html.Types.EventHandlerBinding");

            var Attribute = $exports.Attribute = function Attribute() {
                _classCallCheck(this, Attribute);

                this.Case = arguments[0];
                this.Fields = [];

                for (var i = 1; i < arguments.length; i++) {
                    this.Fields[i - 1] = arguments[i];
                }
            };

            _fableCore.Util.setInterfaces(Attribute.prototype, [], "Fable.Helpers.Virtualdom.Html.Types.Attribute");

            var Node = $exports.Node = function Node() {
                _classCallCheck(this, Node);

                this.Case = arguments[0];
                this.Fields = [];

                for (var i = 1; i < arguments.length; i++) {
                    this.Fields[i - 1] = arguments[i];
                }
            };

            _fableCore.Util.setInterfaces(Node.prototype, [], "Fable.Helpers.Virtualdom.Html.Types.Node");

            return $exports;
        }({});

        var Tags = $exports.Tags = function ($exports) {
            var elem = $exports.elem = function (tagName, attrs, children) {
                return new Types.Node("Element", [tagName, attrs], children);
            };

            var voidElem = $exports.voidElem = function (tagName, attrs) {
                return new Types.Node("VoidElement", [tagName, attrs]);
            };

            var whiteSpace = $exports.whiteSpace = function (arg0) {
                return new Types.Node("WhiteSpace", arg0);
            };

            var text = $exports.text = function (arg0) {
                return new Types.Node("Text", arg0);
            };

            var br = $exports.br = function () {
                var tagName;
                return tagName = "br", function (attrs) {
                    return voidElem(tagName, attrs);
                };
            }();

            var area = $exports.area = function () {
                var tagName;
                return tagName = "area", function (attrs) {
                    return voidElem(tagName, attrs);
                };
            }();

            var baseHtml = $exports.baseHtml = function () {
                var tagName;
                return tagName = "base", function (attrs) {
                    return voidElem(tagName, attrs);
                };
            }();

            var col = $exports.col = function () {
                var tagName;
                return tagName = "col", function (attrs) {
                    return voidElem(tagName, attrs);
                };
            }();

            var embed = $exports.embed = function () {
                var tagName;
                return tagName = "embed", function (attrs) {
                    return voidElem(tagName, attrs);
                };
            }();

            var hr = $exports.hr = function () {
                var tagName;
                return tagName = "hr", function (attrs) {
                    return voidElem(tagName, attrs);
                };
            }();

            var img = $exports.img = function () {
                var tagName;
                return tagName = "img", function (attrs) {
                    return voidElem(tagName, attrs);
                };
            }();

            var input = $exports.input = function () {
                var tagName;
                return tagName = "input", function (attrs) {
                    return voidElem(tagName, attrs);
                };
            }();

            var link = $exports.link = function () {
                var tagName;
                return tagName = "link", function (attrs) {
                    return voidElem(tagName, attrs);
                };
            }();

            var meta = $exports.meta = function () {
                var tagName;
                return tagName = "meta", function (attrs) {
                    return voidElem(tagName, attrs);
                };
            }();

            var param = $exports.param = function () {
                var tagName;
                return tagName = "param", function (attrs) {
                    return voidElem(tagName, attrs);
                };
            }();

            var source = $exports.source = function () {
                var tagName;
                return tagName = "source", function (attrs) {
                    return voidElem(tagName, attrs);
                };
            }();

            var track = $exports.track = function () {
                var tagName;
                return tagName = "track", function (attrs) {
                    return voidElem(tagName, attrs);
                };
            }();

            var wbr = $exports.wbr = function () {
                var tagName;
                return tagName = "wbr", function (attrs) {
                    return voidElem(tagName, attrs);
                };
            }();

            var head = $exports.head = function () {
                var tagName;
                return tagName = "head", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var style = $exports.style = function () {
                var tagName;
                return tagName = "style", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var title = $exports.title = function () {
                var tagName;
                return tagName = "title", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var address = $exports.address = function () {
                var tagName;
                return tagName = "address", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var article = $exports.article = function () {
                var tagName;
                return tagName = "article", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var aside = $exports.aside = function () {
                var tagName;
                return tagName = "aside", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var footer = $exports.footer = function () {
                var tagName;
                return tagName = "footer", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var header = $exports.header = function () {
                var tagName;
                return tagName = "header", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var h1 = $exports.h1 = function () {
                var tagName;
                return tagName = "h1", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var h2 = $exports.h2 = function () {
                var tagName;
                return tagName = "h2", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var h3 = $exports.h3 = function () {
                var tagName;
                return tagName = "h3", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var h4 = $exports.h4 = function () {
                var tagName;
                return tagName = "h4", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var h5 = $exports.h5 = function () {
                var tagName;
                return tagName = "h5", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var h6 = $exports.h6 = function () {
                var tagName;
                return tagName = "h6", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var hgroup = $exports.hgroup = function () {
                var tagName;
                return tagName = "hgroup", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var nav = $exports.nav = function () {
                var tagName;
                return tagName = "nav", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var dd = $exports.dd = function () {
                var tagName;
                return tagName = "dd", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var div = $exports.div = function () {
                var tagName;
                return tagName = "div", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var dl = $exports.dl = function () {
                var tagName;
                return tagName = "dl", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var dt = $exports.dt = function () {
                var tagName;
                return tagName = "dt", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var figcaption = $exports.figcaption = function () {
                var tagName;
                return tagName = "figcaption", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var figure = $exports.figure = function () {
                var tagName;
                return tagName = "figure", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var li = $exports.li = function () {
                var tagName;
                return tagName = "li", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var main = $exports.main = function () {
                var tagName;
                return tagName = "main", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var ol = $exports.ol = function () {
                var tagName;
                return tagName = "ol", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var p = $exports.p = function () {
                var tagName;
                return tagName = "p", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var pre = $exports.pre = function () {
                var tagName;
                return tagName = "pre", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var section = $exports.section = function () {
                var tagName;
                return tagName = "section", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var ul = $exports.ul = function () {
                var tagName;
                return tagName = "ul", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var a = $exports.a = function () {
                var tagName;
                return tagName = "a", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var abbr = $exports.abbr = function () {
                var tagName;
                return tagName = "abbr", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var b = $exports.b = function () {
                var tagName;
                return tagName = "b", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var bdi = $exports.bdi = function () {
                var tagName;
                return tagName = "bdi", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var bdo = $exports.bdo = function () {
                var tagName;
                return tagName = "bdo", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var cite = $exports.cite = function () {
                var tagName;
                return tagName = "cite", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var code = $exports.code = function () {
                var tagName;
                return tagName = "code", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var data = $exports.data = function () {
                var tagName;
                return tagName = "data", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var dfn = $exports.dfn = function () {
                var tagName;
                return tagName = "dfn", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var em = $exports.em = function () {
                var tagName;
                return tagName = "em", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var i = $exports.i = function () {
                var tagName;
                return tagName = "i", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var kbd = $exports.kbd = function () {
                var tagName;
                return tagName = "kbd", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var mark = $exports.mark = function () {
                var tagName;
                return tagName = "mark", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var q = $exports.q = function () {
                var tagName;
                return tagName = "q", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var rp = $exports.rp = function () {
                var tagName;
                return tagName = "rp", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var rt = $exports.rt = function () {
                var tagName;
                return tagName = "rt", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var rtc = $exports.rtc = function () {
                var tagName;
                return tagName = "rtc", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var ruby = $exports.ruby = function () {
                var tagName;
                return tagName = "ruby", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var s = $exports.s = function () {
                var tagName;
                return tagName = "s", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var samp = $exports.samp = function () {
                var tagName;
                return tagName = "samp", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var small = $exports.small = function () {
                var tagName;
                return tagName = "small", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var span = $exports.span = function () {
                var tagName;
                return tagName = "span", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var strong = $exports.strong = function () {
                var tagName;
                return tagName = "strong", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var sub = $exports.sub = function () {
                var tagName;
                return tagName = "sub", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var sup = $exports.sup = function () {
                var tagName;
                return tagName = "sup", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var time = $exports.time = function () {
                var tagName;
                return tagName = "time", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var u = $exports.u = function () {
                var tagName;
                return tagName = "u", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var _var = $exports.var = function () {
                var tagName;
                return tagName = "var", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var audio = $exports.audio = function () {
                var tagName;
                return tagName = "audio", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var map = $exports.map = function () {
                var tagName;
                return tagName = "map", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var video = $exports.video = function () {
                var tagName;
                return tagName = "video", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var objectHtml = $exports.objectHtml = function () {
                var tagName;
                return tagName = "object", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var del = $exports.del = function () {
                var tagName;
                return tagName = "del", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var ins = $exports.ins = function () {
                var tagName;
                return tagName = "ins", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var caption = $exports.caption = function () {
                var tagName;
                return tagName = "caption", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var colgroup = $exports.colgroup = function () {
                var tagName;
                return tagName = "colgroup", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var table = $exports.table = function () {
                var tagName;
                return tagName = "table", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var tbody = $exports.tbody = function () {
                var tagName;
                return tagName = "tbody", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var td = $exports.td = function () {
                var tagName;
                return tagName = "td", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var tfoot = $exports.tfoot = function () {
                var tagName;
                return tagName = "tfoot", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var th = $exports.th = function () {
                var tagName;
                return tagName = "th", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var thead = $exports.thead = function () {
                var tagName;
                return tagName = "thead", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var tr = $exports.tr = function () {
                var tagName;
                return tagName = "tr", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var button = $exports.button = function () {
                var tagName;
                return tagName = "button", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var datalist = $exports.datalist = function () {
                var tagName;
                return tagName = "datalist", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var fieldset = $exports.fieldset = function () {
                var tagName;
                return tagName = "fieldset", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var form = $exports.form = function () {
                var tagName;
                return tagName = "form", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var label = $exports.label = function () {
                var tagName;
                return tagName = "label", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var legend = $exports.legend = function () {
                var tagName;
                return tagName = "legend", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var meter = $exports.meter = function () {
                var tagName;
                return tagName = "meter", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var optgroup = $exports.optgroup = function () {
                var tagName;
                return tagName = "optgroup", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var option = $exports.option = function () {
                var tagName;
                return tagName = "option", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var output = $exports.output = function () {
                var tagName;
                return tagName = "output", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var progress = $exports.progress = function () {
                var tagName;
                return tagName = "progress", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var select = $exports.select = function () {
                var tagName;
                return tagName = "select", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var textarea = $exports.textarea = function () {
                var tagName;
                return tagName = "textarea", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var details = $exports.details = function () {
                var tagName;
                return tagName = "details", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var dialog = $exports.dialog = function () {
                var tagName;
                return tagName = "dialog", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var menu = $exports.menu = function () {
                var tagName;
                return tagName = "menu", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var menuitem = $exports.menuitem = function () {
                var tagName;
                return tagName = "menuitem", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            var summary = $exports.summary = function () {
                var tagName;
                return tagName = "summary", function (attrs) {
                    return function (children) {
                        return elem(tagName, attrs, children);
                    };
                };
            }();

            return $exports;
        }({});

        var Attributes = $exports.Attributes = function ($exports) {
            var attribute = $exports.attribute = function (key, value) {
                return new Types.Attribute("Attribute", [key, value]);
            };

            var property = $exports.property = function (key, value) {
                return new Types.Attribute("Property", [key, value]);
            };

            return $exports;
        }({});

        var Events = $exports.Events = function ($exports) {
            var onMouseEvent = $exports.onMouseEvent = function (eventType, f) {
                return new Types.Attribute("EventHandlerBinding", new Types.EventHandlerBinding("MouseEventHandler", [eventType, f]));
            };

            var onMouseClick = $exports.onMouseClick = function () {
                var eventType;
                return eventType = "onclick", function (f) {
                    return onMouseEvent(eventType, f);
                };
            }();

            var onContextMenu = $exports.onContextMenu = function () {
                var eventType;
                return eventType = "oncontextmenu", function (f) {
                    return onMouseEvent(eventType, f);
                };
            }();

            var onDblClick = $exports.onDblClick = function () {
                var eventType;
                return eventType = "ondblclick", function (f) {
                    return onMouseEvent(eventType, f);
                };
            }();

            var onMouseDown = $exports.onMouseDown = function () {
                var eventType;
                return eventType = "onmousedown", function (f) {
                    return onMouseEvent(eventType, f);
                };
            }();

            var onMouseEnter = $exports.onMouseEnter = function () {
                var eventType;
                return eventType = "onmouseenter", function (f) {
                    return onMouseEvent(eventType, f);
                };
            }();

            var onMouseLeave = $exports.onMouseLeave = function () {
                var eventType;
                return eventType = "onmouseleave", function (f) {
                    return onMouseEvent(eventType, f);
                };
            }();

            var onMouseMove = $exports.onMouseMove = function () {
                var eventType;
                return eventType = "onmousemove", function (f) {
                    return onMouseEvent(eventType, f);
                };
            }();

            var onMouseOut = $exports.onMouseOut = function () {
                var eventType;
                return eventType = "onmouseout", function (f) {
                    return onMouseEvent(eventType, f);
                };
            }();

            var onMouseOver = $exports.onMouseOver = function () {
                var eventType;
                return eventType = "onmouseover", function (f) {
                    return onMouseEvent(eventType, f);
                };
            }();

            var onMouseUp = $exports.onMouseUp = function () {
                var eventType;
                return eventType = "onmouseup", function (f) {
                    return onMouseEvent(eventType, f);
                };
            }();

            var onShow = $exports.onShow = function () {
                var eventType;
                return eventType = "onshow", function (f) {
                    return onMouseEvent(eventType, f);
                };
            }();

            var onKeyboardEvent = $exports.onKeyboardEvent = function (eventType, f) {
                return new Types.Attribute("EventHandlerBinding", new Types.EventHandlerBinding("KeyboardEventHandler", [eventType, f]));
            };

            var onKeydown = $exports.onKeydown = function () {
                var eventType;
                return eventType = "onkeydown", function (f) {
                    return onKeyboardEvent(eventType, f);
                };
            }();

            var onKeypress = $exports.onKeypress = function () {
                var eventType;
                return eventType = "onkeypress", function (f) {
                    return onKeyboardEvent(eventType, f);
                };
            }();

            var onKeyup = $exports.onKeyup = function () {
                var eventType;
                return eventType = "onkeyup", function (f) {
                    return onKeyboardEvent(eventType, f);
                };
            }();

            var onEvent = $exports.onEvent = function (eventType, f) {
                return new Types.Attribute("EventHandlerBinding", new Types.EventHandlerBinding("EventHandler", [eventType, f]));
            };

            var onAbort = $exports.onAbort = function () {
                var eventType;
                return eventType = "onabort", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onAfterPrint = $exports.onAfterPrint = function () {
                var eventType;
                return eventType = "onafterprint", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onAudioEnd = $exports.onAudioEnd = function () {
                var eventType;
                return eventType = "onaudioend", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onAudioStart = $exports.onAudioStart = function () {
                var eventType;
                return eventType = "onaudiostart", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onBeforePrint = $exports.onBeforePrint = function () {
                var eventType;
                return eventType = "onbeforeprint", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onCached = $exports.onCached = function () {
                var eventType;
                return eventType = "oncached", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onCanPlay = $exports.onCanPlay = function () {
                var eventType;
                return eventType = "oncanplay", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onCanPlayThrough = $exports.onCanPlayThrough = function () {
                var eventType;
                return eventType = "oncanplaythrough", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onChange = $exports.onChange = function () {
                var eventType;
                return eventType = "onchange", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onChargingChange = $exports.onChargingChange = function () {
                var eventType;
                return eventType = "onchargingchange", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onChargingTimeChange = $exports.onChargingTimeChange = function () {
                var eventType;
                return eventType = "onchargingtimechange", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onChecking = $exports.onChecking = function () {
                var eventType;
                return eventType = "onchecking", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onClose = $exports.onClose = function () {
                var eventType;
                return eventType = "onclose", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onDischargingTimeChange = $exports.onDischargingTimeChange = function () {
                var eventType;
                return eventType = "ondischargingtimechange", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onDOMContentLoaded = $exports.onDOMContentLoaded = function () {
                var eventType;
                return eventType = "onDOMContentLoaded", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onDownloading = $exports.onDownloading = function () {
                var eventType;
                return eventType = "ondownloading", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onDurationchange = $exports.onDurationchange = function () {
                var eventType;
                return eventType = "ondurationchange", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onEmptied = $exports.onEmptied = function () {
                var eventType;
                return eventType = "onemptied", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onEnd = $exports.onEnd = function () {
                var eventType;
                return eventType = "onend", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onEnded = $exports.onEnded = function () {
                var eventType;
                return eventType = "onended", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onError = $exports.onError = function () {
                var eventType;
                return eventType = "onerror", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onCullScreenChange = $exports.onCullScreenChange = function () {
                var eventType;
                return eventType = "onfullscreenchange", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onCullScreenError = $exports.onCullScreenError = function () {
                var eventType;
                return eventType = "onfullscreenerror", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onInput = $exports.onInput = function () {
                var eventType;
                return eventType = "oninput", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onInvalid = $exports.onInvalid = function () {
                var eventType;
                return eventType = "oninvalid", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onLanguageChange = $exports.onLanguageChange = function () {
                var eventType;
                return eventType = "onlanguagechange", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onLevelChange = $exports.onLevelChange = function () {
                var eventType;
                return eventType = "onlevelchange", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onLoadedData = $exports.onLoadedData = function () {
                var eventType;
                return eventType = "onloadeddata", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onLoadedMetaData = $exports.onLoadedMetaData = function () {
                var eventType;
                return eventType = "onloadedmetadata", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onNoUpdate = $exports.onNoUpdate = function () {
                var eventType;
                return eventType = "onnoupdate", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onObsolete = $exports.onObsolete = function () {
                var eventType;
                return eventType = "onobsolete", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onOffline = $exports.onOffline = function () {
                var eventType;
                return eventType = "onoffline", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onOnline = $exports.onOnline = function () {
                var eventType;
                return eventType = "ononline", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onOpen = $exports.onOpen = function () {
                var eventType;
                return eventType = "onopen", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onOrientationChange = $exports.onOrientationChange = function () {
                var eventType;
                return eventType = "onorientationchange", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onPause = $exports.onPause = function () {
                var eventType;
                return eventType = "onpause", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onPointerlockchange = $exports.onPointerlockchange = function () {
                var eventType;
                return eventType = "onpointerlockchange", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onPointerlockerror = $exports.onPointerlockerror = function () {
                var eventType;
                return eventType = "onpointerlockerror", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onPlay = $exports.onPlay = function () {
                var eventType;
                return eventType = "onplay", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onPlaying = $exports.onPlaying = function () {
                var eventType;
                return eventType = "onplaying", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onRateChange = $exports.onRateChange = function () {
                var eventType;
                return eventType = "onratechange", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onReadyStateChange = $exports.onReadyStateChange = function () {
                var eventType;
                return eventType = "onreadystatechange", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onReset = $exports.onReset = function () {
                var eventType;
                return eventType = "onreset", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onSeeked = $exports.onSeeked = function () {
                var eventType;
                return eventType = "onseeked", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onSeeking = $exports.onSeeking = function () {
                var eventType;
                return eventType = "onseeking", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onSelectStart = $exports.onSelectStart = function () {
                var eventType;
                return eventType = "onselectstart", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onSelectionChange = $exports.onSelectionChange = function () {
                var eventType;
                return eventType = "onselectionchange", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onSoundEnd = $exports.onSoundEnd = function () {
                var eventType;
                return eventType = "onsoundend", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onSoundStart = $exports.onSoundStart = function () {
                var eventType;
                return eventType = "onsoundstart", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onSpeechEnd = $exports.onSpeechEnd = function () {
                var eventType;
                return eventType = "onspeechend", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onSpeechStart = $exports.onSpeechStart = function () {
                var eventType;
                return eventType = "onspeechstart", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onStalled = $exports.onStalled = function () {
                var eventType;
                return eventType = "onstalled", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onStart = $exports.onStart = function () {
                var eventType;
                return eventType = "onstart", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onSubmit = $exports.onSubmit = function () {
                var eventType;
                return eventType = "onsubmit", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onSuccess = $exports.onSuccess = function () {
                var eventType;
                return eventType = "onsuccess", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onSuspend = $exports.onSuspend = function () {
                var eventType;
                return eventType = "onsuspend", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onTimeUpdate = $exports.onTimeUpdate = function () {
                var eventType;
                return eventType = "ontimeupdate", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onUpdateReady = $exports.onUpdateReady = function () {
                var eventType;
                return eventType = "onupdateready", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onVoicesChanged = $exports.onVoicesChanged = function () {
                var eventType;
                return eventType = "onvoiceschanged", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onVisibilityChange = $exports.onVisibilityChange = function () {
                var eventType;
                return eventType = "onvisibilitychange", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onVolumeChange = $exports.onVolumeChange = function () {
                var eventType;
                return eventType = "onvolumechange", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onVrdisplayConnected = $exports.onVrdisplayConnected = function () {
                var eventType;
                return eventType = "onvrdisplayconnected", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onVrdisplayDisconnected = $exports.onVrdisplayDisconnected = function () {
                var eventType;
                return eventType = "onvrdisplaydisconnected", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onVrdisplayPresentChange = $exports.onVrdisplayPresentChange = function () {
                var eventType;
                return eventType = "onvrdisplaypresentchange", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onWaiting = $exports.onWaiting = function () {
                var eventType;
                return eventType = "onwaiting", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onBlur = $exports.onBlur = function () {
                var eventType;
                return eventType = "onblur", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            var onFocus = $exports.onFocus = function () {
                var eventType;
                return eventType = "onfocus", function (f) {
                    return onEvent(eventType, f);
                };
            }();

            return $exports;
        }({});

        return $exports;
    }({});

    var App = exports.App = function ($exports) {
        var Observer = $exports.Observer = function () {
            function Observer(next, error, completed) {
                _classCallCheck(this, Observer);

                this.next = next;
                this.error = error;
                this.completed = completed;
            }

            _createClass(Observer, [{
                key: "onCompleted",
                value: function onCompleted() {
                    this.completed();
                }
            }, {
                key: "onError",
                value: function onError(e) {
                    this.error(e);
                }
            }, {
                key: "onNext",
                value: function onNext(v) {
                    this.next(v);
                }
            }]);

            return Observer;
        }();

        _fableCore.Util.setInterfaces(Observer.prototype, ["System.IObserver"], "Fable.Helpers.Virtualdom.App.Observer");

        var AppState = $exports.AppState = function AppState($arg0, $arg1, $arg2) {
            _classCallCheck(this, AppState);

            this.Model = $arg0;
            this.View = $arg1;
            this.Update = $arg2;
        };

        _fableCore.Util.setInterfaces(AppState.prototype, [], "Fable.Helpers.Virtualdom.App.AppState");

        var AppEvents = $exports.AppEvents = function AppEvents() {
            _classCallCheck(this, AppEvents);

            this.Case = arguments[0];
            this.Fields = [];

            for (var i = 1; i < arguments.length; i++) {
                this.Fields[i - 1] = arguments[i];
            }
        };

        _fableCore.Util.setInterfaces(AppEvents.prototype, [], "Fable.Helpers.Virtualdom.App.AppEvents");

        var App = $exports.App = function App($arg0, $arg1, $arg2, $arg3, $arg4) {
            _classCallCheck(this, App);

            this.AppState = $arg0;
            this.Node = $arg1;
            this.CurrentTree = $arg2;
            this.Subscribers = $arg3;
            this.NodeSelector = $arg4;
        };

        _fableCore.Util.setInterfaces(App.prototype, [], "Fable.Helpers.Virtualdom.App.App");

        var createApp = $exports.createApp = function (appState) {
            return new App(appState, null, null, new Map());
        };

        var withStartNode = $exports.withStartNode = function (selector, app) {
            var NodeSelector;
            return NodeSelector = selector, new App(app.AppState, app.Node, app.CurrentTree, app.Subscribers, NodeSelector);
        };

        var withSubscriber = $exports.withSubscriber = function (subscriberId, subscriber, app) {
            var subsribers;
            return subsribers = function (table) {
                return new Map(table).set(subscriberId, subscriber);
            }(app.Subscribers), new App(app.AppState, app.Node, app.CurrentTree, subsribers, app.NodeSelector);
        };

        var AppMessage = $exports.AppMessage = function AppMessage() {
            _classCallCheck(this, AppMessage);

            this.Case = arguments[0];
            this.Fields = [];

            for (var i = 1; i < arguments.length; i++) {
                this.Fields[i - 1] = arguments[i];
            }
        };

        _fableCore.Util.setInterfaces(AppMessage.prototype, [], "Fable.Helpers.Virtualdom.App.AppMessage");

        var Renderer = $exports.Renderer = function Renderer($arg0, $arg1, $arg2, $arg3) {
            _classCallCheck(this, Renderer);

            this.Render = $arg0;
            this.Diff = $arg1;
            this.Patch = $arg2;
            this.CreateElement = $arg3;
        };

        _fableCore.Util.setInterfaces(Renderer.prototype, [], "Fable.Helpers.Virtualdom.App.Renderer");

        var start = $exports.start = function (renderer, app) {
            var renderTree, startElem, matchValue, sel;
            return renderTree = function (view) {
                return function (handler) {
                    return function (model) {
                        return renderer.Render(view(handler)(model));
                    };
                };
            }, startElem = (matchValue = app.NodeSelector, matchValue != null ? (sel = matchValue, document.body.querySelector(sel)) : document.body), _fableCore.MailboxProcessor.start(function (inbox) {
                var post, notifySubscribers, loop;
                return post = function (message) {
                    inbox.post(new AppMessage("Message", message));
                }, notifySubscribers = function (subs) {
                    return function (model) {
                        _fableCore.Map.iter(function (key, handler) {
                            handler(model);
                        }, subs);
                    };
                }, loop = function (state) {
                    return function (builder_) {
                        return builder_.delay(function (unitVar) {
                            var matchValue, currentTree, rootNode, tree, CurrentTree, Node;
                            return matchValue = [state.Node, state.CurrentTree], matchValue[0] != null ? matchValue[1] != null ? (currentTree = matchValue[1], rootNode = matchValue[0], builder_.bind(inbox.receive(), function (_arg1) {
                                var message, msg, patternInput, model_, jsCalls, tree, patches, AppState_1, CurrentTree, inputRecord;
                                return message = _arg1, message.Case === "Message" ? (msg = message.Fields[0], notifySubscribers(state.Subscribers)(new AppEvents("ActionReceived", msg)), patternInput = state.AppState.Update(state.AppState.Model)(msg), model_ = patternInput[0], jsCalls = patternInput[1], tree = renderTree(state.AppState.View)(post)(model_), patches = renderer.Diff(currentTree)(tree), notifySubscribers(state.Subscribers)(new AppEvents("ModelChanged", model_, state.AppState.Model)), renderer.Patch(rootNode)(patches), _fableCore.Seq.iter(function (i) {
                                    i();
                                }, jsCalls), builder_.returnFrom(loop((AppState_1 = (inputRecord = state.AppState, new AppState(model_, inputRecord.View, inputRecord.Update)), CurrentTree = tree, new App(AppState_1, state.Node, CurrentTree, state.Subscribers, state.NodeSelector))))) : builder_.returnFrom(loop(state));
                            })) : function () {
                                throw "Shouldn't happen";
                                return builder_.zero();
                            }() : (tree = renderTree(state.AppState.View)(post)(state.AppState.Model), rootNode = renderer.CreateElement(tree), startElem.appendChild(rootNode), builder_.returnFrom(loop((CurrentTree = tree, Node = rootNode, new App(state.AppState, Node, CurrentTree, state.Subscribers, state.NodeSelector)))));
                        });
                    }(_fableCore.Async);
                }, loop(app);
            });
        };

        return $exports;
    }({});

    var createTree = exports.createTree = function (tag, attributes, children) {
        var renderEventHandler, renderEventBinding, renderAttributes, toAttrs, hAttrs, childrenArr;
        return renderEventHandler = function (tupledArg) {
            var eventType, handler;
            return eventType = tupledArg[0], handler = tupledArg[1], [eventType, handler];
        }, renderEventBinding = function (binding) {
            var handler, eventType;
            return renderEventHandler(binding.Case === "KeyboardEventHandler" ? (handler = binding.Fields[0][1], eventType = binding.Fields[0][0], [eventType, handler]) : binding.Case === "EventHandler" ? (handler = binding.Fields[0][1], eventType = binding.Fields[0][0], [eventType, handler]) : (handler = binding.Fields[0][1], eventType = binding.Fields[0][0], [eventType, handler]));
        }, renderAttributes = function (attributes_1) {
            return function (_arg2) {
                var p;
                return _arg2.tail == null ? null : (p = _arg2, ["attributes", _fableCore.Util.createObj(p)]);
            }(_fableCore.List.choose(function (x) {
                return x;
            }, _fableCore.List.map(function (_arg1) {
                var v, k;
                return _arg1.Case === "Attribute" ? (v = _arg1.Fields[0][1], k = _arg1.Fields[0][0], [k, v]) : null;
            }, attributes_1)));
        }, toAttrs = function (attrs) {
            var patternInput, others, attributes_1, renderedAttributes, renderedOthers, x;
            return patternInput = _fableCore.List.partition(function (_arg3) {
                return _arg3.Case === "Attribute" ? true : false;
            }, attrs), others = patternInput[1], attributes_1 = patternInput[0], renderedAttributes = renderAttributes(attributes_1), renderedOthers = _fableCore.List.map(function (_arg4) {
                var style, styleObj, value, key, binding;
                return _arg4.Case === "Style" ? (style = _arg4.Fields[0], styleObj = _fableCore.Util.createObj(_fableCore.List.map(function (tupledArg) {
                    var k, v;
                    return k = tupledArg[0], v = tupledArg[1], [k, v];
                }, style)), ["style", styleObj]) : _arg4.Case === "Property" ? (value = _arg4.Fields[0][1], key = _arg4.Fields[0][0], [key, value]) : _arg4.Case === "Attribute" ? function () {
                    throw "Should not happen";
                }() : (binding = _arg4.Fields[0], renderEventBinding(binding));
            }, others), _fableCore.Util.createObj(renderedAttributes != null ? (x = renderedAttributes, _fableCore.List.ofArray([x], renderedOthers)) : renderedOthers);
        }, hAttrs = toAttrs(attributes), childrenArr = Array.from(children), (0, _virtualDom.h)(tag, hAttrs, childrenArr);
    };

    var render = exports.render = function (node) {
        var tag, attrs, str, nodes;
        return node.Case === "VoidElement" ? (tag = node.Fields[0][0], attrs = node.Fields[0][1], createTree(tag, attrs, new _fableCore.List())) : node.Case === "Text" ? (str = node.Fields[0], str) : node.Case === "WhiteSpace" ? (str = node.Fields[0], str) : (tag = node.Fields[0][0], nodes = node.Fields[1], attrs = node.Fields[0][1], createTree(tag, attrs, _fableCore.List.map(function (node_1) {
            return render(node_1);
        }, nodes)));
    };

    var renderer = exports.renderer = new App.Renderer(function (node) {
        return render(node);
    }, function (tree1) {
        return function (tree2) {
            return (0, _virtualDom.diff)(tree1, tree2);
        };
    }, function (node) {
        return function (patches) {
            return (0, _virtualDom.patch)(node, patches);
        };
    }, function (e) {
        return (0, _virtualDom.create)(e);
    });
});
//# sourceMappingURL=Fable.Helpers.Virtualdom-1389700705.js.map