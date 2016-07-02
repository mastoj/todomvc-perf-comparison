define(["exports", "fable-core", "./fable_external/Fable.Helpers.Virtualdom-1389700705"], function (exports, _fableCore, _FableHelpers) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.todoApp = exports.initModel = exports.Storage = exports.todoView = exports.todoMain = exports.itemList = exports.listItem = exports.todoHeader = exports.todoFooter = exports.filters = exports.filter = exports.filterToTextAndUrl = exports.todoUpdate = exports.TodoAction = exports.TodoModel = exports.Item = exports.Filter = undefined;
    var Filter_1;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Filter = exports.Filter = function Filter() {
        _classCallCheck(this, Filter);

        this.Case = arguments[0];
        this.Fields = [];

        for (var i = 1; i < arguments.length; i++) {
            this.Fields[i - 1] = arguments[i];
        }
    };

    _fableCore.Util.setInterfaces(Filter.prototype, [], "Virtualdom.Filter");

    var Item = exports.Item = function Item($arg0, $arg1, $arg2, $arg3) {
        _classCallCheck(this, Item);

        this.Name = $arg0;
        this.Done = $arg1;
        this.Id = $arg2;
        this.IsEditing = $arg3;
    };

    _fableCore.Util.setInterfaces(Item.prototype, [], "Virtualdom.Item");

    var TodoModel = exports.TodoModel = function TodoModel($arg0, $arg1, $arg2) {
        _classCallCheck(this, TodoModel);

        this.Items = $arg0;
        this.Input = $arg1;
        this.Filter = $arg2;
    };

    _fableCore.Util.setInterfaces(TodoModel.prototype, [], "Virtualdom.TodoModel");

    var TodoAction = exports.TodoAction = function TodoAction() {
        _classCallCheck(this, TodoAction);

        this.Case = arguments[0];
        this.Fields = [];

        for (var i = 1; i < arguments.length; i++) {
            this.Fields[i - 1] = arguments[i];
        }
    };

    _fableCore.Util.setInterfaces(TodoAction.prototype, [], "Virtualdom.TodoAction");

    var todoUpdate = exports.todoUpdate = function (model, msg) {
        var checkAllWith, updateItem, model_, jsCalls, v, i, items_, f, item, maxId, item_, Id;
        return checkAllWith = function (v) {
            return new TodoModel(_fableCore.List.map(function (i) {
                return new Item(i.Name, v, i.Id, i.IsEditing);
            }, model.Items), model.Input, model.Filter);
        }, updateItem = function (i) {
            return function (model_1) {
                var items_;
                return items_ = _fableCore.List.map(function (i_) {
                    return i_.Id !== i.Id ? i_ : i;
                }, model_1.Items), new TodoModel(items_, model_1.Input, model_1.Filter);
            };
        }, model_ = msg.Case === "ChangeInput" ? (v = msg.Fields[0], new TodoModel(model.Items, v, model.Filter)) : msg.Case === "MarkAsDone" ? (i = msg.Fields[0], items_ = _fableCore.List.map(function (i_) {
            var Done;
            return _fableCore.Util.compareTo(i_, i) !== 0 ? i_ : (Done = true, new Item(i.Name, Done, i.Id, i.IsEditing));
        }, model.Items), new TodoModel(items_, model.Input, model.Filter)) : msg.Case === "CheckAll" ? checkAllWith(true) : msg.Case === "UnCheckAll" ? checkAllWith(false) : msg.Case === "Destroy" ? (i = msg.Fields[0], new TodoModel(_fableCore.List.filter(function (i_) {
            return i_.Id !== i.Id;
        }, model.Items), model.Input, model.Filter)) : msg.Case === "ToggleItem" ? function () {
            var i, Done;
            return i = msg.Fields[0], updateItem((Done = !i.Done, new Item(i.Name, Done, i.Id, i.IsEditing)))(model);
        }() : msg.Case === "SetActiveFilter" ? (f = msg.Fields[0], new TodoModel(model.Items, model.Input, f)) : msg.Case === "ClearCompleted" ? new TodoModel(_fableCore.List.filter(function (i) {
            return !i.Done;
        }, model.Items), model.Input, model.Filter) : msg.Case === "EditItem" ? function () {
            var i, IsEditing;
            return i = msg.Fields[0], updateItem((IsEditing = true, new Item(i.Name, i.Done, i.Id, IsEditing)))(model);
        }() : msg.Case === "SaveItem" ? function () {
            var str, i, IsEditing;
            return str = msg.Fields[1], i = msg.Fields[0], updateItem((IsEditing = false, new Item(str, i.Done, i.Id, IsEditing)))(model);
        }() : (item = msg.Fields[0], maxId = model.Items.tail == null ? 1 : _fableCore.Seq.max(_fableCore.List.map(function (x) {
            return x.Id;
        }, model.Items)), item_ = (Id = maxId + 1, new Item(item.Name, item.Done, Id, item.IsEditing)), new TodoModel(_fableCore.List.ofArray([item_], model.Items), "", model.Filter)), jsCalls = msg.Case === "EditItem" ? (i = msg.Fields[0], _fableCore.List.ofArray([function (unitVar0) {
            document.getElementById("item-" + i.Id.toString()).focus();
        }])) : new _fableCore.List(), [model_, jsCalls];
    };

    var filterToTextAndUrl = exports.filterToTextAndUrl = function (_arg1) {
        return _arg1.Case === "Completed" ? ["Completed", "completed"] : _arg1.Case === "Active" ? ["Active", "active"] : ["All", ""];
    };

    var filter = exports.filter = function (handler, activeFilter, f) {
        var linkClass, patternInput, url, fText;
        return linkClass = _fableCore.Util.compareTo(f, activeFilter) === 0 ? "selected" : "", patternInput = filterToTextAndUrl(f), url = patternInput[1], fText = patternInput[0], _FableHelpers.Html.Tags.li(_fableCore.List.ofArray([_FableHelpers.Html.Events.onMouseClick(function (_arg1) {
            handler(new TodoAction("SetActiveFilter", f));
        })]))(_fableCore.List.ofArray([_FableHelpers.Html.Tags.a(_fableCore.List.ofArray([_FableHelpers.Html.Attributes.attribute("href", "#/" + url), _FableHelpers.Html.Attributes.attribute("class", linkClass)]))(_fableCore.List.ofArray([_FableHelpers.Html.Tags.text(fText)]))]));
    };

    var filters = exports.filters = function (model, handler) {
        return _FableHelpers.Html.Tags.ul(_fableCore.List.ofArray([_FableHelpers.Html.Attributes.attribute("class", "filters")]))(_fableCore.List.map(function () {
            var activeFilter;
            return activeFilter = model.Filter, function (f) {
                return filter(handler, activeFilter, f);
            };
        }(), _fableCore.List.ofArray([new Filter("All"), new Filter("Active"), new Filter("Completed")])));
    };

    var todoFooter = exports.todoFooter = function (model, handler) {
        var clearVisibility, activeCount;
        return clearVisibility = _fableCore.Seq.exists(function (i) {
            return i.Done;
        }, model.Items) ? "" : "none", activeCount = _fableCore.List.filter(function (i) {
            return !i.Done;
        }, model.Items).length.toString(), _FableHelpers.Html.Tags.footer(_fableCore.List.ofArray([_FableHelpers.Html.Attributes.attribute("class", "footer"), new _FableHelpers.Html.Types.Attribute("Style", _fableCore.List.ofArray([["display", "block"]]))]))(_fableCore.List.ofArray([_FableHelpers.Html.Tags.span(_fableCore.List.ofArray([_FableHelpers.Html.Attributes.attribute("class", "todo-count")]))(_fableCore.List.ofArray([_FableHelpers.Html.Tags.strong(new _fableCore.List())(_fableCore.List.ofArray([_FableHelpers.Html.Tags.text(activeCount)])), _FableHelpers.Html.Tags.text(" items left")])), filters(model, handler), _FableHelpers.Html.Tags.button(_fableCore.List.ofArray([_FableHelpers.Html.Attributes.attribute("class", "clear-completed"), new _FableHelpers.Html.Types.Attribute("Style", _fableCore.List.ofArray([["display", clearVisibility]])), _FableHelpers.Html.Events.onMouseClick(function (_arg1) {
            handler(new TodoAction("ClearCompleted"));
        })]))(_fableCore.List.ofArray([_FableHelpers.Html.Tags.text("Clear completed")]))]));
    };

    var todoHeader = exports.todoHeader = function (model, handler) {
        return _FableHelpers.Html.Tags.header(_fableCore.List.ofArray([_FableHelpers.Html.Attributes.attribute("class", "header")]))(_fableCore.List.ofArray([_FableHelpers.Html.Tags.h1(new _fableCore.List())(_fableCore.List.ofArray([_FableHelpers.Html.Tags.text("todos")])), _FableHelpers.Html.Tags.input(_fableCore.List.ofArray([_FableHelpers.Html.Attributes.attribute("class", "new-todo"), _FableHelpers.Html.Attributes.attribute("id", "new-todo"), _FableHelpers.Html.Attributes.property("placeholder", "What needs to be done?"), _FableHelpers.Html.Attributes.property("value", model), _FableHelpers.Html.Events.onKeydown(function (x) {
            var Id;
            x.keyCode === 13 ? handler(new TodoAction("AddItem", (Id = 0, new Item(model, false, Id, false)))) : null;
        }), _FableHelpers.Html.Events.onKeyup(function (x) {
            handler(new TodoAction("ChangeInput", x.target.value));
        })]))]));
    };

    var listItem = exports.listItem = function (handler, item) {
        var itemChecked, editClass;
        return itemChecked = item.Done ? "true" : "", editClass = item.IsEditing ? "editing" : "", _FableHelpers.Html.Tags.li(_fableCore.List.ofArray([_FableHelpers.Html.Attributes.attribute("class", (item.Done ? "completed " : " ") + editClass)]))(_fableCore.List.ofArray([_FableHelpers.Html.Tags.div(_fableCore.List.ofArray([_FableHelpers.Html.Attributes.attribute("class", "view"), _FableHelpers.Html.Events.onDblClick(function (x) {
            handler(new TodoAction("EditItem", item));
        })]))(_fableCore.List.ofArray([_FableHelpers.Html.Tags.input(_fableCore.List.ofArray([_FableHelpers.Html.Attributes.property("className", "toggle"), _FableHelpers.Html.Attributes.property("type", "checkbox"), _FableHelpers.Html.Attributes.property("checked", itemChecked), _FableHelpers.Html.Events.onMouseClick(function (e) {
            handler(new TodoAction("ToggleItem", item));
        })])), _FableHelpers.Html.Tags.label(new _fableCore.List())(_fableCore.List.ofArray([_FableHelpers.Html.Tags.text(item.Name)])), _FableHelpers.Html.Tags.button(_fableCore.List.ofArray([_FableHelpers.Html.Attributes.attribute("class", "destroy"), _FableHelpers.Html.Events.onMouseClick(function (e) {
            handler(new TodoAction("Destroy", item));
        })]))(new _fableCore.List())])), _FableHelpers.Html.Tags.input(_fableCore.List.ofArray([_FableHelpers.Html.Attributes.attribute("class", "edit"), _FableHelpers.Html.Attributes.attribute("value", item.Name), _FableHelpers.Html.Attributes.property("id", "item-" + item.Id.toString()), _FableHelpers.Html.Events.onBlur(function (e) {
            handler(new TodoAction("SaveItem", item, e.target.value));
        })]))]));
    };

    var itemList = exports.itemList = function (handler, items, activeFilter) {
        var filterItems;
        return filterItems = function (i) {
            return activeFilter.Case === "Completed" ? i.Done : activeFilter.Case === "Active" ? !i.Done : true;
        }, _FableHelpers.Html.Tags.ul(_fableCore.List.ofArray([_FableHelpers.Html.Attributes.attribute("class", "todo-list")]))(_fableCore.List.map(function (item) {
            return listItem(handler, item);
        }, function (list) {
            return _fableCore.List.filter(filterItems, list);
        }(items)));
    };

    var todoMain = exports.todoMain = function (model, handler) {
        var items, allChecked;
        return items = model.Items, allChecked = _fableCore.Seq.exists(function (i) {
            return !i.Done;
        }, items), _FableHelpers.Html.Tags.section(_fableCore.List.ofArray([_FableHelpers.Html.Attributes.attribute("class", "main"), new _FableHelpers.Html.Types.Attribute("Style", _fableCore.List.ofArray([["style", "block"]]))]))(_fableCore.List.ofArray([_FableHelpers.Html.Tags.input(_fableCore.List.ofArray([_FableHelpers.Html.Attributes.property("id", "toggle-all"), _FableHelpers.Html.Attributes.attribute("class", "toggle-all"), _FableHelpers.Html.Attributes.property("type", "checkbox"), _FableHelpers.Html.Attributes.property("checked", !allChecked ? "true" : ""), _FableHelpers.Html.Events.onMouseClick(function (e) {
            allChecked ? handler(new TodoAction("CheckAll")) : handler(new TodoAction("UnCheckAll"));
        })])), _FableHelpers.Html.Tags.label(_fableCore.List.ofArray([_FableHelpers.Html.Attributes.attribute("for", "toggle-all")]))(_fableCore.List.ofArray([_FableHelpers.Html.Tags.text("Mark all as complete")])), itemList(handler, items, model.Filter)]));
    };

    var todoView = exports.todoView = function (handler, model) {
        return _FableHelpers.Html.Tags.section(_fableCore.List.ofArray([_FableHelpers.Html.Attributes.attribute("class", "todoapp")]))(_fableCore.List.ofArray([todoHeader(model.Input, handler)], model.Items.tail == null ? new _fableCore.List() : _fableCore.List.ofArray([todoMain(model, handler), todoFooter(model, handler)])));
    };

    var Storage = exports.Storage = function ($exports) {
        var STORAGE_KEY = "vdom-storage";

        var fetch = $exports.fetch = function () {
            return function (arg00) {
                return JSON.parse(arg00);
            }(function (_arg1) {
                var x;
                return _arg1 == null ? "[]" : (x = _arg1, x);
            }(localStorage.getItem(STORAGE_KEY)));
        };

        var save = $exports.save = function (todos) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        };

        return $exports;
    }({});

    var initModel = exports.initModel = (Filter_1 = new Filter("All"), new TodoModel(new _fableCore.List(), "", Filter_1));

    var todoApp = exports.todoApp = _FableHelpers.App.withStartNode("#todo", _FableHelpers.App.createApp(new _FableHelpers.App.AppState(initModel, function (handler) {
        return function (model) {
            return todoView(handler, model);
        };
    }, function (model) {
        return function (msg) {
            return todoUpdate(model, msg);
        };
    })));

    (function (app) {
        return _FableHelpers.App.start(_FableHelpers.renderer, app);
    })(todoApp);
});
//# sourceMappingURL=virtualdom.js.map