module Fable.Helpers.Virtualdom

#r "../node_modules/fable-core/Fable.Core.dll"

open Fable.Core

[<Import("h","virtual-dom")>]
let h(arg1: string, arg2: obj, arg3: obj[]): obj = failwith "JS only"

[<Import("diff","virtual-dom")>]
let diff (tree1:obj) (tree2:obj): obj = failwith "JS only"

[<Import("patch","virtual-dom")>]
let patch (node:obj) (patches:obj): Fable.Import.Browser.Node = failwith "JS only"

[<Import("create","virtual-dom")>]
let createElement (e:obj): Fable.Import.Browser.Node = failwith "JS only"

module Html =
    [<AutoOpen>]
    module Types =
        type MouseEvent =
            {
                altKey: bool
                screenX: int
                screenY: int
            }
        type KeyboardEvent =
            {
                code: string
                keyCode: int
            }

        type MouseEventHandler<'TMessage> = string*(MouseEvent -> 'TMessage)
        type KeyboardEventHandler<'TMessage> = string*(KeyboardEvent -> 'TMessage)
        type EventHandler<'TMessage> = string*(obj -> 'TMessage)

        type EventHandlerBinding<'TMessage> =
            | MouseEventHandler of MouseEventHandler<'TMessage>
            | KeyboardEventHandler of KeyboardEventHandler<'TMessage>
            | EventHandler of EventHandler<'TMessage>

        type Style = (string*string) list

        type KeyValue = string*string

        type Attribute<'TMessage> =
        | EventHandlerBinding of EventHandlerBinding<'TMessage>
        | Style of Style
        | Property of KeyValue
        | Attribute of KeyValue

        type Element<'TMessage> = string * Attribute<'TMessage> list
        /// A Node in Html have the following forms
        type VoidElement<'TMessage> = string * Attribute<'TMessage> list
        type Node<'TMessage> =
        /// A regular html element that can contain a list of other nodes
        | Element of Element<'TMessage> * Node<'TMessage> list
        /// A void element is one that can't have content, like link, br, hr, meta
        /// See: https://dev.w3.org/html5/html-author/#void
        | VoidElement of VoidElement<'TMessage>
        /// A text value for a node
        | Text of string
        /// Whitespace for formatting
        | WhiteSpace of string

    [<AutoOpen>]
    module Tags =
        let inline elem tagName attrs children = Element((tagName, attrs), children)
        let inline voidElem tagName attrs = VoidElement(tagName, attrs)

        let inline whiteSpace x = WhiteSpace x
        let inline text x = Text x

        // Elements - list of elements here: https://developer.mozilla.org/en-US/docs/Web/HTML/Element
        // Void elements
        let inline br x = voidElem "br" x
        let inline area x = voidElem "area" x
        let inline baseHtml x = voidElem "base" x
        let inline col x = voidElem "col" x
        let inline embed x = voidElem "embed" x
        let inline hr x = voidElem "hr" x
        let inline img x = voidElem "img" x
        let inline input x = voidElem "input" x
        let inline link x = voidElem "link" x
        let inline meta x = voidElem "meta" x
        let inline param x = voidElem "param" x
        let inline source x = voidElem "source" x
        let inline track x = voidElem "track" x
        let inline wbr x = voidElem "wbr" x

        // Metadata
        let inline head x = elem "head" x
        let inline style x = elem "style" x
        let inline title x = elem "title" x

        // Content sectioning
        let inline address x = elem "address" x
        let inline article x = elem "article" x
        let inline aside x = elem "aside" x
        let inline footer x = elem "footer" x
        let inline header x = elem "header" x
        let inline h1 x = elem "h1" x
        let inline h2 x = elem "h2" x
        let inline h3 x = elem "h3" x
        let inline h4 x = elem "h4" x
        let inline h5 x = elem "h5" x
        let inline h6 x = elem "h6" x
        let inline hgroup x = elem "hgroup" x
        let inline nav x = elem "nav" x

        // Text content
        let inline dd x = elem "dd" x
        let inline div x = elem "div" x
        let inline dl x = elem "dl" x
        let inline dt x = elem "dt" x
        let inline figcaption x = elem "figcaption" x
        let inline figure x = elem "figure" x
        let inline li x = elem "li" x
        let inline main x = elem "main" x
        let inline ol x = elem "ol" x
        let inline p x = elem "p" x
        let inline pre x = elem "pre" x
        let inline section x = elem "section" x
        let inline ul x = elem "ul" x

        // Inline text semantics
        let inline a x = elem "a" x
        let inline abbr x = elem "abbr" x
        let inline b x = elem "b" x
        let inline bdi x = elem "bdi" x
        let inline bdo x = elem "bdo" x
        let inline cite x = elem "cite" x
        let inline code x = elem "code" x
        let inline data x = elem "data" x
        let inline dfn x = elem "dfn" x
        let inline em x = elem "em" x
        let inline i x = elem "i" x
        let inline kbd x = elem "kbd" x
        let inline mark x = elem "mark" x
        let inline q x = elem "q" x
        let inline rp x = elem "rp" x
        let inline rt x = elem "rt" x
        let inline rtc x = elem "rtc" x
        let inline ruby x = elem "ruby" x
        let inline s x = elem "s" x
        let inline samp x = elem "samp" x
        let inline small x = elem "small" x
        let inline span x = elem "span" x
        let inline strong x = elem "strong" x
        let inline sub x = elem "sub" x
        let inline sup x = elem "sup" x
        let inline time x = elem "time" x
        let inline u x = elem "u" x
        let inline var x = elem "var" x

        // Image and multimedia
        let inline audio x = elem "audio" x
        let inline map x = elem "map" x
        let inline video x = elem "video" x

        // Embedded content
        let inline objectHtml x = elem "object" x

        // Demarcasting edits
        let inline del x = elem "del" x
        let inline ins x = elem "ins" x

        // Table content
        let inline caption x = elem "caption" x
        let inline colgroup x = elem "colgroup" x
        let inline table x = elem "table" x
        let inline tbody x = elem "tbody" x
        let inline td x = elem "td" x
        let inline tfoot x = elem "tfoot" x
        let inline th x = elem "th" x
        let inline thead x = elem "thead" x
        let inline tr x = elem "tr" x

        // Forms
        let inline button x = elem "button" x
        let inline datalist x = elem "datalist" x
        let inline fieldset x = elem "fieldset" x
        let inline form x = elem "form" x
        let inline label x = elem "label" x
        let inline legend x = elem "legend" x
        let inline meter x = elem "meter" x
        let inline optgroup x = elem "optgroup" x
        let inline option x = elem "option" x
        let inline output x = elem "output" x
        let inline progress x = elem "progress" x
        let inline select x = elem "select" x
        let inline textarea x = elem "textarea" x

        // Interactive elements
        let inline details x = elem "details" x
        let inline dialog x = elem "dialog" x
        let inline menu x = elem "menu" x
        let inline menuitem x = elem "menuitem" x
        let inline summary x = elem "summary" x

    [<AutoOpen>]
    module Attributes =
        let inline attribute key value = Attribute.Attribute (key,value)
        let inline property key value = Attribute.Property (key,value)

    [<AutoOpen>]
    module Events =
        let inline onMouseEvent eventType f = EventHandlerBinding (MouseEventHandler (eventType, f))

        let inline onMouseClick x = onMouseEvent "onclick" x
        let inline onContextMenu x = onMouseEvent "oncontextmenu" x
        let inline onDblClick x = onMouseEvent "ondblclick" x
        let inline onMouseDown x = onMouseEvent "onmousedown" x
        let inline onMouseEnter x = onMouseEvent "onmouseenter" x
        let inline onMouseLeave x = onMouseEvent "onmouseleave" x
        let inline onMouseMove x = onMouseEvent "onmousemove" x
        let inline onMouseOut x = onMouseEvent "onmouseout" x
        let inline onMouseOver x = onMouseEvent "onmouseover" x
        let inline onMouseUp x = onMouseEvent "onmouseup" x
        let inline onShow x = onMouseEvent "onshow" x
        let inline onKeyboardEvent eventType f = EventHandlerBinding (KeyboardEventHandler (eventType, f))
        let inline onKeydown x = onKeyboardEvent "onkeydown" x
        let inline onKeypress x = onKeyboardEvent "onkeypress" x
        let inline onKeyup x = onKeyboardEvent "onkeyup" x

        let inline onEvent eventType f = EventHandlerBinding (EventHandler (eventType, f))
        let inline onAbort x = onEvent "onabort" x
        let inline onAfterPrint x = onEvent "onafterprint" x
        let inline onAudioEnd x = onEvent "onaudioend" x
        let inline onAudioStart x = onEvent "onaudiostart" x
        let inline onBeforePrint x = onEvent "onbeforeprint" x
        let inline onCached x = onEvent "oncached" x
        let inline onCanPlay x = onEvent "oncanplay" x
        let inline onCanPlayThrough x = onEvent "oncanplaythrough" x
        let inline onChange x = onEvent "onchange" x
        let inline onChargingChange x = onEvent "onchargingchange" x
        let inline onChargingTimeChange x = onEvent "onchargingtimechange" x
        let inline onChecking x = onEvent "onchecking" x
        let inline onClose x = onEvent "onclose" x
        let inline onDischargingTimeChange x = onEvent "ondischargingtimechange" x
        let inline onDOMContentLoaded x = onEvent "onDOMContentLoaded" x
        let inline onDownloading x = onEvent "ondownloading" x
        let inline onDurationchange x = onEvent "ondurationchange" x
        let inline onEmptied x = onEvent "onemptied" x
        let inline onEnd x = onEvent "onend" x
        let inline onEnded x = onEvent "onended" x
        let inline onError x = onEvent "onerror" x
        let inline onCullScreenChange x = onEvent "onfullscreenchange" x
        let inline onCullScreenError x = onEvent "onfullscreenerror" x
        let inline onInput x = onEvent "oninput" x
        let inline onInvalid x = onEvent "oninvalid" x
        let inline onLanguageChange x = onEvent "onlanguagechange" x
        let inline onLevelChange x = onEvent "onlevelchange" x
        let inline onLoadedData x = onEvent "onloadeddata" x
        let inline onLoadedMetaData x = onEvent "onloadedmetadata" x
        let inline onNoUpdate x = onEvent "onnoupdate" x
        let inline onObsolete x = onEvent "onobsolete" x
        let inline onOffline x = onEvent "onoffline" x
        let inline onOnline x = onEvent "ononline" x
        let inline onOpen x = onEvent "onopen" x
        let inline onOrientationChange x = onEvent "onorientationchange" x
        let inline onPause x = onEvent "onpause" x
        let inline onPointerlockchange x = onEvent "onpointerlockchange" x
        let inline onPointerlockerror x = onEvent "onpointerlockerror" x
        let inline onPlay x = onEvent "onplay" x
        let inline onPlaying x = onEvent "onplaying" x
        let inline onRateChange x = onEvent "onratechange" x
        let inline onReadyStateChange x = onEvent "onreadystatechange" x
        let inline onReset x = onEvent "onreset" x
        let inline onSeeked x = onEvent "onseeked" x
        let inline onSeeking x = onEvent "onseeking" x
        let inline onSelectStart x = onEvent "onselectstart" x
        let inline onSelectionChange x = onEvent "onselectionchange" x
        let inline onSoundEnd x = onEvent "onsoundend" x
        let inline onSoundStart x = onEvent "onsoundstart" x
        let inline onSpeechEnd x = onEvent "onspeechend" x
        let inline onSpeechStart x = onEvent "onspeechstart" x
        let inline onStalled x = onEvent "onstalled" x
        let inline onStart x = onEvent "onstart" x
        let inline onSubmit x = onEvent "onsubmit" x
        let inline onSuccess x = onEvent "onsuccess" x
        let inline onSuspend x = onEvent "onsuspend" x
        let inline onTimeUpdate x = onEvent "ontimeupdate" x
        let inline onUpdateReady x = onEvent "onupdateready" x
        let inline onVoicesChanged x = onEvent "onvoiceschanged" x
        let inline onVisibilityChange x = onEvent "onvisibilitychange" x
        let inline onVolumeChange x = onEvent "onvolumechange" x
        let inline onVrdisplayConnected x = onEvent "onvrdisplayconnected" x
        let inline onVrdisplayDisconnected x = onEvent "onvrdisplaydisconnected" x
        let inline onVrdisplayPresentChange x = onEvent "onvrdisplaypresentchange" x
        let inline onWaiting x = onEvent "onwaiting" x

        let inline onBlur x = onEvent "onblur" x
        let inline onFocus x = onEvent "onfocus" x

open Html
open Fable.Import.Browser

[<AutoOpen>]
module App =
    type Observer<'T>(next, error, completed) =
        interface System.IObserver<'T> with
            member x.OnCompleted() = completed()
            member x.OnError(e) = error e
            member x.OnNext(v) = next v

    type AppState<'TModel, 'TMessage> = {
            Model: 'TModel
            View: 'TModel -> Html.Types.Node<'TMessage>
            Update: 'TModel -> 'TMessage -> ('TModel * ((unit -> unit) list)) }


    type AppEvents<'TMessage, 'TModel> =
        | ModelChanged of 'TModel*'TModel
        | ActionReceived of 'TMessage

    type Subscriber<'TMessage, 'TModel> = AppEvents<'TMessage, 'TModel> -> unit

    type App<'TModel, 'TMessage> =
        {
            AppState: AppState<'TModel, 'TMessage>
            Node: Node option
            CurrentTree: obj option
            Subscribers: Map<string, Subscriber<'TMessage, 'TModel>>
            NodeSelector: string option
        }

    let createApp appState =
        {
            AppState = appState
            Node = None
            CurrentTree = None
            Subscribers = Map.empty
            NodeSelector = None
        }

    let withStartNode selector app = { app with NodeSelector = Some selector }
    let withSubscriber subscriberId subscriber app =
        let subsribers = app.Subscribers |> Map.add subscriberId subscriber
        { app with Subscribers = subsribers }

    type AppMessage<'TMessage> =
        | AddSubscriber of string*Subscriber<'TMessage, 'TMessage>
        | RemoveSubscriber of string
        | Message of 'TMessage

    type Renderer<'TMessage> =
        {
            Render: ('TMessage -> unit) -> Html.Types.Node<'TMessage> -> obj
            Diff: obj -> obj -> obj
            Patch: Fable.Import.Browser.Node -> obj -> Fable.Import.Browser.Node
            CreateElement: obj -> Fable.Import.Browser.Node
        }

    let start renderer app =
        let renderTree view handler model =
            view model
            |> renderer.Render handler

        let startElem =
            match app.NodeSelector with
            | None -> document.body
            | Some sel -> document.body.querySelector(sel) :?> HTMLElement

        MailboxProcessor.Start(fun inbox ->
            let post message =
                inbox.Post (Message message)

            let notifySubscribers subs model =
                subs |> Map.iter (fun key handler -> handler model)

            let rec loop state =
                async {
                    match state.Node, state.CurrentTree with
                    | None,_ ->
                        let tree = renderTree state.AppState.View post state.AppState.Model
                        let rootNode = renderer.CreateElement tree
                        startElem.appendChild(rootNode) |> ignore
                        return! loop {state with CurrentTree = Some tree; Node = Some rootNode}
                    | Some rootNode, Some currentTree ->
                        let! message = inbox.Receive()
                        match message with
                        | Message msg ->
                            ActionReceived msg |> (notifySubscribers state.Subscribers)
                            let (model', jsCalls) = state.AppState.Update state.AppState.Model msg
                            let tree = renderTree state.AppState.View post model'
                            let patches = renderer.Diff currentTree tree
                            notifySubscribers state.Subscribers (ModelChanged (model', state.AppState.Model))
                            renderer.Patch rootNode patches |> ignore
                            jsCalls |> List.iter (fun i -> i())
                            return! loop {state with AppState = {state.AppState with Model = model'}; CurrentTree = Some tree}
                        | _ -> return! loop state
                    | _ -> failwith "Shouldn't happen"
                }
            loop app)

let createTree<'T> (handler:'T -> unit) tag (attributes:Attribute<'T> list) children =
    let toAttrs (attrs:Attribute<'T> list) =
        attrs
        |> List.map (function
            | Style style -> "style" ==> createObj(unbox style)
            | Property keyValue -> unbox keyValue
            | Attribute keyValue -> unbox keyValue
            | EventHandlerBinding binding ->
                match binding with
                | MouseEventHandler(ev, f) -> ev, ((f >> handler) :> obj) //  unbox binding?Fields?(0) |> handler// Performance hack
                | KeyboardEventHandler(ev, f) -> ev, ((f >> handler) :> obj) //  unbox binding?Fields?(0) |> handler// Performance hack
                | EventHandler(ev, f) -> ev, ((f >> handler) :> obj) //  unbox binding?Fields?(0) |> handler// Performance hack
//        type MouseEventHandler<'TMessage> = string*(MouseEvent -> 'TMessage)
//        type KeyboardEventHandler<'TMessage> = string*(KeyboardEvent -> 'TMessage)
//        type EventHandler<'TMessage> = string*(obj -> 'TMessage)
        )
        |> createObj
    h(tag, toAttrs attributes, List.toArray children)

let rec render handler node =
    match node with
    | Element((tag,attrs), nodes) -> createTree handler tag attrs (nodes |> List.map (render handler))
    | VoidElement (tag, attrs) -> createTree handler tag attrs []
    | Text str -> box(string str)
    | WhiteSpace str -> box(string str)

let renderer =
    {
        Render = render
        Diff = diff
        Patch = patch
        CreateElement = createElement
    }
