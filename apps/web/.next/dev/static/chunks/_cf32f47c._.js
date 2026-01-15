(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/dompurify/dist/purify.es.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>purify
]);
/*! @license DOMPurify 3.3.1 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.3.1/LICENSE */ const { entries, setPrototypeOf, isFrozen, getPrototypeOf, getOwnPropertyDescriptor } = Object;
let { freeze, seal, create } = Object; // eslint-disable-line import/no-mutable-exports
let { apply, construct } = typeof Reflect !== 'undefined' && Reflect;
if (!freeze) {
    freeze = function freeze(x) {
        return x;
    };
}
if (!seal) {
    seal = function seal(x) {
        return x;
    };
}
if (!apply) {
    apply = function apply(func, thisArg) {
        for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
            args[_key - 2] = arguments[_key];
        }
        return func.apply(thisArg, args);
    };
}
if (!construct) {
    construct = function construct(Func) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
            args[_key2 - 1] = arguments[_key2];
        }
        return new Func(...args);
    };
}
const arrayForEach = unapply(Array.prototype.forEach);
const arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
const arrayPop = unapply(Array.prototype.pop);
const arrayPush = unapply(Array.prototype.push);
const arraySplice = unapply(Array.prototype.splice);
const stringToLowerCase = unapply(String.prototype.toLowerCase);
const stringToString = unapply(String.prototype.toString);
const stringMatch = unapply(String.prototype.match);
const stringReplace = unapply(String.prototype.replace);
const stringIndexOf = unapply(String.prototype.indexOf);
const stringTrim = unapply(String.prototype.trim);
const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
const regExpTest = unapply(RegExp.prototype.test);
const typeErrorCreate = unconstruct(TypeError);
/**
 * Creates a new function that calls the given function with a specified thisArg and arguments.
 *
 * @param func - The function to be wrapped and called.
 * @returns A new function that calls the given function with a specified thisArg and arguments.
 */ function unapply(func) {
    return function(thisArg) {
        if (thisArg instanceof RegExp) {
            thisArg.lastIndex = 0;
        }
        for(var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++){
            args[_key3 - 1] = arguments[_key3];
        }
        return apply(func, thisArg, args);
    };
}
/**
 * Creates a new function that constructs an instance of the given constructor function with the provided arguments.
 *
 * @param func - The constructor function to be wrapped and called.
 * @returns A new function that constructs an instance of the given constructor function with the provided arguments.
 */ function unconstruct(Func) {
    return function() {
        for(var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++){
            args[_key4] = arguments[_key4];
        }
        return construct(Func, args);
    };
}
/**
 * Add properties to a lookup table
 *
 * @param set - The set to which elements will be added.
 * @param array - The array containing elements to be added to the set.
 * @param transformCaseFunc - An optional function to transform the case of each element before adding to the set.
 * @returns The modified set with added elements.
 */ function addToSet(set, array) {
    let transformCaseFunc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : stringToLowerCase;
    if (setPrototypeOf) {
        // Make 'in' and truthy checks like Boolean(set.constructor)
        // independent of any properties defined on Object.prototype.
        // Prevent prototype setters from intercepting set as a this value.
        setPrototypeOf(set, null);
    }
    let l = array.length;
    while(l--){
        let element = array[l];
        if (typeof element === 'string') {
            const lcElement = transformCaseFunc(element);
            if (lcElement !== element) {
                // Config presets (e.g. tags.js, attrs.js) are immutable.
                if (!isFrozen(array)) {
                    array[l] = lcElement;
                }
                element = lcElement;
            }
        }
        set[element] = true;
    }
    return set;
}
/**
 * Clean up an array to harden against CSPP
 *
 * @param array - The array to be cleaned.
 * @returns The cleaned version of the array
 */ function cleanArray(array) {
    for(let index = 0; index < array.length; index++){
        const isPropertyExist = objectHasOwnProperty(array, index);
        if (!isPropertyExist) {
            array[index] = null;
        }
    }
    return array;
}
/**
 * Shallow clone an object
 *
 * @param object - The object to be cloned.
 * @returns A new object that copies the original.
 */ function clone(object) {
    const newObject = create(null);
    for (const [property, value] of entries(object)){
        const isPropertyExist = objectHasOwnProperty(object, property);
        if (isPropertyExist) {
            if (Array.isArray(value)) {
                newObject[property] = cleanArray(value);
            } else if (value && typeof value === 'object' && value.constructor === Object) {
                newObject[property] = clone(value);
            } else {
                newObject[property] = value;
            }
        }
    }
    return newObject;
}
/**
 * This method automatically checks if the prop is function or getter and behaves accordingly.
 *
 * @param object - The object to look up the getter function in its prototype chain.
 * @param prop - The property name for which to find the getter function.
 * @returns The getter function found in the prototype chain or a fallback function.
 */ function lookupGetter(object, prop) {
    while(object !== null){
        const desc = getOwnPropertyDescriptor(object, prop);
        if (desc) {
            if (desc.get) {
                return unapply(desc.get);
            }
            if (typeof desc.value === 'function') {
                return unapply(desc.value);
            }
        }
        object = getPrototypeOf(object);
    }
    function fallbackValue() {
        return null;
    }
    return fallbackValue;
}
const html$1 = freeze([
    'a',
    'abbr',
    'acronym',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'bdi',
    'bdo',
    'big',
    'blink',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'center',
    'cite',
    'code',
    'col',
    'colgroup',
    'content',
    'data',
    'datalist',
    'dd',
    'decorator',
    'del',
    'details',
    'dfn',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'element',
    'em',
    'fieldset',
    'figcaption',
    'figure',
    'font',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'main',
    'map',
    'mark',
    'marquee',
    'menu',
    'menuitem',
    'meter',
    'nav',
    'nobr',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'search',
    'section',
    'select',
    'shadow',
    'slot',
    'small',
    'source',
    'spacer',
    'span',
    'strike',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'track',
    'tt',
    'u',
    'ul',
    'var',
    'video',
    'wbr'
]);
const svg$1 = freeze([
    'svg',
    'a',
    'altglyph',
    'altglyphdef',
    'altglyphitem',
    'animatecolor',
    'animatemotion',
    'animatetransform',
    'circle',
    'clippath',
    'defs',
    'desc',
    'ellipse',
    'enterkeyhint',
    'exportparts',
    'filter',
    'font',
    'g',
    'glyph',
    'glyphref',
    'hkern',
    'image',
    'inputmode',
    'line',
    'lineargradient',
    'marker',
    'mask',
    'metadata',
    'mpath',
    'part',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialgradient',
    'rect',
    'stop',
    'style',
    'switch',
    'symbol',
    'text',
    'textpath',
    'title',
    'tref',
    'tspan',
    'view',
    'vkern'
]);
const svgFilters = freeze([
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feDropShadow',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence'
]);
// List of SVG elements that are disallowed by default.
// We still need to know them so that we can do namespace
// checks properly in case one wants to add them to
// allow-list.
const svgDisallowed = freeze([
    'animate',
    'color-profile',
    'cursor',
    'discard',
    'font-face',
    'font-face-format',
    'font-face-name',
    'font-face-src',
    'font-face-uri',
    'foreignobject',
    'hatch',
    'hatchpath',
    'mesh',
    'meshgradient',
    'meshpatch',
    'meshrow',
    'missing-glyph',
    'script',
    'set',
    'solidcolor',
    'unknown',
    'use'
]);
const mathMl$1 = freeze([
    'math',
    'menclose',
    'merror',
    'mfenced',
    'mfrac',
    'mglyph',
    'mi',
    'mlabeledtr',
    'mmultiscripts',
    'mn',
    'mo',
    'mover',
    'mpadded',
    'mphantom',
    'mroot',
    'mrow',
    'ms',
    'mspace',
    'msqrt',
    'mstyle',
    'msub',
    'msup',
    'msubsup',
    'mtable',
    'mtd',
    'mtext',
    'mtr',
    'munder',
    'munderover',
    'mprescripts'
]);
// Similarly to SVG, we want to know all MathML elements,
// even those that we disallow by default.
const mathMlDisallowed = freeze([
    'maction',
    'maligngroup',
    'malignmark',
    'mlongdiv',
    'mscarries',
    'mscarry',
    'msgroup',
    'mstack',
    'msline',
    'msrow',
    'semantics',
    'annotation',
    'annotation-xml',
    'mprescripts',
    'none'
]);
const text = freeze([
    '#text'
]);
const html = freeze([
    'accept',
    'action',
    'align',
    'alt',
    'autocapitalize',
    'autocomplete',
    'autopictureinpicture',
    'autoplay',
    'background',
    'bgcolor',
    'border',
    'capture',
    'cellpadding',
    'cellspacing',
    'checked',
    'cite',
    'class',
    'clear',
    'color',
    'cols',
    'colspan',
    'controls',
    'controlslist',
    'coords',
    'crossorigin',
    'datetime',
    'decoding',
    'default',
    'dir',
    'disabled',
    'disablepictureinpicture',
    'disableremoteplayback',
    'download',
    'draggable',
    'enctype',
    'enterkeyhint',
    'exportparts',
    'face',
    'for',
    'headers',
    'height',
    'hidden',
    'high',
    'href',
    'hreflang',
    'id',
    'inert',
    'inputmode',
    'integrity',
    'ismap',
    'kind',
    'label',
    'lang',
    'list',
    'loading',
    'loop',
    'low',
    'max',
    'maxlength',
    'media',
    'method',
    'min',
    'minlength',
    'multiple',
    'muted',
    'name',
    'nonce',
    'noshade',
    'novalidate',
    'nowrap',
    'open',
    'optimum',
    'part',
    'pattern',
    'placeholder',
    'playsinline',
    'popover',
    'popovertarget',
    'popovertargetaction',
    'poster',
    'preload',
    'pubdate',
    'radiogroup',
    'readonly',
    'rel',
    'required',
    'rev',
    'reversed',
    'role',
    'rows',
    'rowspan',
    'spellcheck',
    'scope',
    'selected',
    'shape',
    'size',
    'sizes',
    'slot',
    'span',
    'srclang',
    'start',
    'src',
    'srcset',
    'step',
    'style',
    'summary',
    'tabindex',
    'title',
    'translate',
    'type',
    'usemap',
    'valign',
    'value',
    'width',
    'wrap',
    'xmlns',
    'slot'
]);
const svg = freeze([
    'accent-height',
    'accumulate',
    'additive',
    'alignment-baseline',
    'amplitude',
    'ascent',
    'attributename',
    'attributetype',
    'azimuth',
    'basefrequency',
    'baseline-shift',
    'begin',
    'bias',
    'by',
    'class',
    'clip',
    'clippathunits',
    'clip-path',
    'clip-rule',
    'color',
    'color-interpolation',
    'color-interpolation-filters',
    'color-profile',
    'color-rendering',
    'cx',
    'cy',
    'd',
    'dx',
    'dy',
    'diffuseconstant',
    'direction',
    'display',
    'divisor',
    'dur',
    'edgemode',
    'elevation',
    'end',
    'exponent',
    'fill',
    'fill-opacity',
    'fill-rule',
    'filter',
    'filterunits',
    'flood-color',
    'flood-opacity',
    'font-family',
    'font-size',
    'font-size-adjust',
    'font-stretch',
    'font-style',
    'font-variant',
    'font-weight',
    'fx',
    'fy',
    'g1',
    'g2',
    'glyph-name',
    'glyphref',
    'gradientunits',
    'gradienttransform',
    'height',
    'href',
    'id',
    'image-rendering',
    'in',
    'in2',
    'intercept',
    'k',
    'k1',
    'k2',
    'k3',
    'k4',
    'kerning',
    'keypoints',
    'keysplines',
    'keytimes',
    'lang',
    'lengthadjust',
    'letter-spacing',
    'kernelmatrix',
    'kernelunitlength',
    'lighting-color',
    'local',
    'marker-end',
    'marker-mid',
    'marker-start',
    'markerheight',
    'markerunits',
    'markerwidth',
    'maskcontentunits',
    'maskunits',
    'max',
    'mask',
    'mask-type',
    'media',
    'method',
    'mode',
    'min',
    'name',
    'numoctaves',
    'offset',
    'operator',
    'opacity',
    'order',
    'orient',
    'orientation',
    'origin',
    'overflow',
    'paint-order',
    'path',
    'pathlength',
    'patterncontentunits',
    'patterntransform',
    'patternunits',
    'points',
    'preservealpha',
    'preserveaspectratio',
    'primitiveunits',
    'r',
    'rx',
    'ry',
    'radius',
    'refx',
    'refy',
    'repeatcount',
    'repeatdur',
    'restart',
    'result',
    'rotate',
    'scale',
    'seed',
    'shape-rendering',
    'slope',
    'specularconstant',
    'specularexponent',
    'spreadmethod',
    'startoffset',
    'stddeviation',
    'stitchtiles',
    'stop-color',
    'stop-opacity',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke',
    'stroke-width',
    'style',
    'surfacescale',
    'systemlanguage',
    'tabindex',
    'tablevalues',
    'targetx',
    'targety',
    'transform',
    'transform-origin',
    'text-anchor',
    'text-decoration',
    'text-rendering',
    'textlength',
    'type',
    'u1',
    'u2',
    'unicode',
    'values',
    'viewbox',
    'visibility',
    'version',
    'vert-adv-y',
    'vert-origin-x',
    'vert-origin-y',
    'width',
    'word-spacing',
    'wrap',
    'writing-mode',
    'xchannelselector',
    'ychannelselector',
    'x',
    'x1',
    'x2',
    'xmlns',
    'y',
    'y1',
    'y2',
    'z',
    'zoomandpan'
]);
const mathMl = freeze([
    'accent',
    'accentunder',
    'align',
    'bevelled',
    'close',
    'columnsalign',
    'columnlines',
    'columnspan',
    'denomalign',
    'depth',
    'dir',
    'display',
    'displaystyle',
    'encoding',
    'fence',
    'frame',
    'height',
    'href',
    'id',
    'largeop',
    'length',
    'linethickness',
    'lspace',
    'lquote',
    'mathbackground',
    'mathcolor',
    'mathsize',
    'mathvariant',
    'maxsize',
    'minsize',
    'movablelimits',
    'notation',
    'numalign',
    'open',
    'rowalign',
    'rowlines',
    'rowspacing',
    'rowspan',
    'rspace',
    'rquote',
    'scriptlevel',
    'scriptminsize',
    'scriptsizemultiplier',
    'selection',
    'separator',
    'separators',
    'stretchy',
    'subscriptshift',
    'supscriptshift',
    'symmetric',
    'voffset',
    'width',
    'xmlns'
]);
const xml = freeze([
    'xlink:href',
    'xml:id',
    'xlink:title',
    'xml:space',
    'xmlns:xlink'
]);
// eslint-disable-next-line unicorn/better-regex
const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm); // Specify template detection regex for SAFE_FOR_TEMPLATES mode
const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
const TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm); // eslint-disable-line unicorn/better-regex
const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/); // eslint-disable-line no-useless-escape
const ARIA_ATTR = seal(/^aria-[\-\w]+$/); // eslint-disable-line no-useless-escape
const IS_ALLOWED_URI = seal(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i // eslint-disable-line no-useless-escape
);
const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
const ATTR_WHITESPACE = seal(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g // eslint-disable-line no-control-regex
);
const DOCTYPE_NAME = seal(/^html$/i);
const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var EXPRESSIONS = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    ARIA_ATTR: ARIA_ATTR,
    ATTR_WHITESPACE: ATTR_WHITESPACE,
    CUSTOM_ELEMENT: CUSTOM_ELEMENT,
    DATA_ATTR: DATA_ATTR,
    DOCTYPE_NAME: DOCTYPE_NAME,
    ERB_EXPR: ERB_EXPR,
    IS_ALLOWED_URI: IS_ALLOWED_URI,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA,
    MUSTACHE_EXPR: MUSTACHE_EXPR,
    TMPLIT_EXPR: TMPLIT_EXPR
});
/* eslint-disable @typescript-eslint/indent */ // https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType
const NODE_TYPE = {
    element: 1,
    attribute: 2,
    text: 3,
    cdataSection: 4,
    entityReference: 5,
    // Deprecated
    entityNode: 6,
    // Deprecated
    progressingInstruction: 7,
    comment: 8,
    document: 9,
    documentType: 10,
    documentFragment: 11,
    notation: 12 // Deprecated
};
const getGlobal = function getGlobal() {
    return typeof window === 'undefined' ? null : window;
};
/**
 * Creates a no-op policy for internal use only.
 * Don't export this function outside this module!
 * @param trustedTypes The policy factory.
 * @param purifyHostElement The Script element used to load DOMPurify (to determine policy name suffix).
 * @return The policy created (or null, if Trusted Types
 * are not supported or creating the policy failed).
 */ const _createTrustedTypesPolicy = function _createTrustedTypesPolicy(trustedTypes, purifyHostElement) {
    if (typeof trustedTypes !== 'object' || typeof trustedTypes.createPolicy !== 'function') {
        return null;
    }
    // Allow the callers to control the unique policy name
    // by adding a data-tt-policy-suffix to the script element with the DOMPurify.
    // Policy creation with duplicate names throws in Trusted Types.
    let suffix = null;
    const ATTR_NAME = 'data-tt-policy-suffix';
    if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
        suffix = purifyHostElement.getAttribute(ATTR_NAME);
    }
    const policyName = 'dompurify' + (suffix ? '#' + suffix : '');
    try {
        return trustedTypes.createPolicy(policyName, {
            createHTML (html) {
                return html;
            },
            createScriptURL (scriptUrl) {
                return scriptUrl;
            }
        });
    } catch (_) {
        // Policy creation failed (most likely another DOMPurify script has
        // already run). Skip creating the policy, as this will only cause errors
        // if TT are enforced.
        console.warn('TrustedTypes policy ' + policyName + ' could not be created.');
        return null;
    }
};
const _createHooksMap = function _createHooksMap() {
    return {
        afterSanitizeAttributes: [],
        afterSanitizeElements: [],
        afterSanitizeShadowDOM: [],
        beforeSanitizeAttributes: [],
        beforeSanitizeElements: [],
        beforeSanitizeShadowDOM: [],
        uponSanitizeAttribute: [],
        uponSanitizeElement: [],
        uponSanitizeShadowNode: []
    };
};
function createDOMPurify() {
    let window1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobal();
    const DOMPurify = (root)=>createDOMPurify(root);
    DOMPurify.version = '3.3.1';
    DOMPurify.removed = [];
    if (!window1 || !window1.document || window1.document.nodeType !== NODE_TYPE.document || !window1.Element) {
        // Not running in a browser, provide a factory function
        // so that you can pass your own Window
        DOMPurify.isSupported = false;
        return DOMPurify;
    }
    let { document } = window1;
    const originalDocument = document;
    const currentScript = originalDocument.currentScript;
    const { DocumentFragment, HTMLTemplateElement, Node, Element, NodeFilter, NamedNodeMap = window1.NamedNodeMap || window1.MozNamedAttrMap, HTMLFormElement, DOMParser, trustedTypes } = window1;
    const ElementPrototype = Element.prototype;
    const cloneNode = lookupGetter(ElementPrototype, 'cloneNode');
    const remove = lookupGetter(ElementPrototype, 'remove');
    const getNextSibling = lookupGetter(ElementPrototype, 'nextSibling');
    const getChildNodes = lookupGetter(ElementPrototype, 'childNodes');
    const getParentNode = lookupGetter(ElementPrototype, 'parentNode');
    // As per issue #47, the web-components registry is inherited by a
    // new document created via createHTMLDocument. As per the spec
    // (http://w3c.github.io/webcomponents/spec/custom/#creating-and-passing-registries)
    // a new empty registry is used when creating a template contents owner
    // document, so we use that as our parent document to ensure nothing
    // is inherited.
    if (typeof HTMLTemplateElement === 'function') {
        const template = document.createElement('template');
        if (template.content && template.content.ownerDocument) {
            document = template.content.ownerDocument;
        }
    }
    let trustedTypesPolicy;
    let emptyHTML = '';
    const { implementation, createNodeIterator, createDocumentFragment, getElementsByTagName } = document;
    const { importNode } = originalDocument;
    let hooks = _createHooksMap();
    /**
   * Expose whether this browser supports running the full DOMPurify.
   */ DOMPurify.isSupported = typeof entries === 'function' && typeof getParentNode === 'function' && implementation && implementation.createHTMLDocument !== undefined;
    const { MUSTACHE_EXPR, ERB_EXPR, TMPLIT_EXPR, DATA_ATTR, ARIA_ATTR, IS_SCRIPT_OR_DATA, ATTR_WHITESPACE, CUSTOM_ELEMENT } = EXPRESSIONS;
    let { IS_ALLOWED_URI: IS_ALLOWED_URI$1 } = EXPRESSIONS;
    /**
   * We consider the elements and attributes below to be safe. Ideally
   * don't add any new ones but feel free to remove unwanted ones.
   */ /* allowed element names */ let ALLOWED_TAGS = null;
    const DEFAULT_ALLOWED_TAGS = addToSet({}, [
        ...html$1,
        ...svg$1,
        ...svgFilters,
        ...mathMl$1,
        ...text
    ]);
    /* Allowed attribute names */ let ALLOWED_ATTR = null;
    const DEFAULT_ALLOWED_ATTR = addToSet({}, [
        ...html,
        ...svg,
        ...mathMl,
        ...xml
    ]);
    /*
   * Configure how DOMPurify should handle custom elements and their attributes as well as customized built-in elements.
   * @property {RegExp|Function|null} tagNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any custom elements)
   * @property {RegExp|Function|null} attributeNameCheck one of [null, regexPattern, predicate]. Default: `null` (disallow any attributes not on the allow list)
   * @property {boolean} allowCustomizedBuiltInElements allow custom elements derived from built-ins if they pass CUSTOM_ELEMENT_HANDLING.tagNameCheck. Default: `false`.
   */ let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
        tagNameCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
        },
        attributeNameCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
        },
        allowCustomizedBuiltInElements: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: false
        }
    }));
    /* Explicitly forbidden tags (overrides ALLOWED_TAGS/ADD_TAGS) */ let FORBID_TAGS = null;
    /* Explicitly forbidden attributes (overrides ALLOWED_ATTR/ADD_ATTR) */ let FORBID_ATTR = null;
    /* Config object to store ADD_TAGS/ADD_ATTR functions (when used as functions) */ const EXTRA_ELEMENT_HANDLING = Object.seal(create(null, {
        tagCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
        },
        attributeCheck: {
            writable: true,
            configurable: false,
            enumerable: true,
            value: null
        }
    }));
    /* Decide if ARIA attributes are okay */ let ALLOW_ARIA_ATTR = true;
    /* Decide if custom data attributes are okay */ let ALLOW_DATA_ATTR = true;
    /* Decide if unknown protocols are okay */ let ALLOW_UNKNOWN_PROTOCOLS = false;
    /* Decide if self-closing tags in attributes are allowed.
   * Usually removed due to a mXSS issue in jQuery 3.0 */ let ALLOW_SELF_CLOSE_IN_ATTR = true;
    /* Output should be safe for common template engines.
   * This means, DOMPurify removes data attributes, mustaches and ERB
   */ let SAFE_FOR_TEMPLATES = false;
    /* Output should be safe even for XML used within HTML and alike.
   * This means, DOMPurify removes comments when containing risky content.
   */ let SAFE_FOR_XML = true;
    /* Decide if document with <html>... should be returned */ let WHOLE_DOCUMENT = false;
    /* Track whether config is already set on this instance of DOMPurify. */ let SET_CONFIG = false;
    /* Decide if all elements (e.g. style, script) must be children of
   * document.body. By default, browsers might move them to document.head */ let FORCE_BODY = false;
    /* Decide if a DOM `HTMLBodyElement` should be returned, instead of a html
   * string (or a TrustedHTML object if Trusted Types are supported).
   * If `WHOLE_DOCUMENT` is enabled a `HTMLHtmlElement` will be returned instead
   */ let RETURN_DOM = false;
    /* Decide if a DOM `DocumentFragment` should be returned, instead of a html
   * string  (or a TrustedHTML object if Trusted Types are supported) */ let RETURN_DOM_FRAGMENT = false;
    /* Try to return a Trusted Type object instead of a string, return a string in
   * case Trusted Types are not supported  */ let RETURN_TRUSTED_TYPE = false;
    /* Output should be free from DOM clobbering attacks?
   * This sanitizes markups named with colliding, clobberable built-in DOM APIs.
   */ let SANITIZE_DOM = true;
    /* Achieve full DOM Clobbering protection by isolating the namespace of named
   * properties and JS variables, mitigating attacks that abuse the HTML/DOM spec rules.
   *
   * HTML/DOM spec rules that enable DOM Clobbering:
   *   - Named Access on Window (§7.3.3)
   *   - DOM Tree Accessors (§3.1.5)
   *   - Form Element Parent-Child Relations (§4.10.3)
   *   - Iframe srcdoc / Nested WindowProxies (§4.8.5)
   *   - HTMLCollection (§4.2.10.2)
   *
   * Namespace isolation is implemented by prefixing `id` and `name` attributes
   * with a constant string, i.e., `user-content-`
   */ let SANITIZE_NAMED_PROPS = false;
    const SANITIZE_NAMED_PROPS_PREFIX = 'user-content-';
    /* Keep element content when removing element? */ let KEEP_CONTENT = true;
    /* If a `Node` is passed to sanitize(), then performs sanitization in-place instead
   * of importing it into a new Document and returning a sanitized copy */ let IN_PLACE = false;
    /* Allow usage of profiles like html, svg and mathMl */ let USE_PROFILES = {};
    /* Tags to ignore content of when KEEP_CONTENT is true */ let FORBID_CONTENTS = null;
    const DEFAULT_FORBID_CONTENTS = addToSet({}, [
        'annotation-xml',
        'audio',
        'colgroup',
        'desc',
        'foreignobject',
        'head',
        'iframe',
        'math',
        'mi',
        'mn',
        'mo',
        'ms',
        'mtext',
        'noembed',
        'noframes',
        'noscript',
        'plaintext',
        'script',
        'style',
        'svg',
        'template',
        'thead',
        'title',
        'video',
        'xmp'
    ]);
    /* Tags that are safe for data: URIs */ let DATA_URI_TAGS = null;
    const DEFAULT_DATA_URI_TAGS = addToSet({}, [
        'audio',
        'video',
        'img',
        'source',
        'image',
        'track'
    ]);
    /* Attributes safe for values like "javascript:" */ let URI_SAFE_ATTRIBUTES = null;
    const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, [
        'alt',
        'class',
        'for',
        'id',
        'label',
        'name',
        'pattern',
        'placeholder',
        'role',
        'summary',
        'title',
        'value',
        'style',
        'xmlns'
    ]);
    const MATHML_NAMESPACE = 'http://www.w3.org/1998/Math/MathML';
    const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
    const HTML_NAMESPACE = 'http://www.w3.org/1999/xhtml';
    /* Document namespace */ let NAMESPACE = HTML_NAMESPACE;
    let IS_EMPTY_INPUT = false;
    /* Allowed XHTML+XML namespaces */ let ALLOWED_NAMESPACES = null;
    const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [
        MATHML_NAMESPACE,
        SVG_NAMESPACE,
        HTML_NAMESPACE
    ], stringToString);
    let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, [
        'mi',
        'mo',
        'mn',
        'ms',
        'mtext'
    ]);
    let HTML_INTEGRATION_POINTS = addToSet({}, [
        'annotation-xml'
    ]);
    // Certain elements are allowed in both SVG and HTML
    // namespace. We need to specify them explicitly
    // so that they don't get erroneously deleted from
    // HTML namespace.
    const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, [
        'title',
        'style',
        'font',
        'a',
        'script'
    ]);
    /* Parsing of strict XHTML documents */ let PARSER_MEDIA_TYPE = null;
    const SUPPORTED_PARSER_MEDIA_TYPES = [
        'application/xhtml+xml',
        'text/html'
    ];
    const DEFAULT_PARSER_MEDIA_TYPE = 'text/html';
    let transformCaseFunc = null;
    /* Keep a reference to config to pass to hooks */ let CONFIG = null;
    /* Ideally, do not touch anything below this line */ /* ______________________________________________ */ const formElement = document.createElement('form');
    const isRegexOrFunction = function isRegexOrFunction(testValue) {
        return testValue instanceof RegExp || testValue instanceof Function;
    };
    /**
   * _parseConfig
   *
   * @param cfg optional config literal
   */ // eslint-disable-next-line complexity
    const _parseConfig = function _parseConfig() {
        let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        if (CONFIG && CONFIG === cfg) {
            return;
        }
        /* Shield configuration object from tampering */ if (!cfg || typeof cfg !== 'object') {
            cfg = {};
        }
        /* Shield configuration object from prototype pollution */ cfg = clone(cfg);
        PARSER_MEDIA_TYPE = // eslint-disable-next-line unicorn/prefer-includes
        SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
        // HTML tags and attributes are not case-sensitive, converting to lowercase. Keeping XHTML as is.
        transformCaseFunc = PARSER_MEDIA_TYPE === 'application/xhtml+xml' ? stringToString : stringToLowerCase;
        /* Set configuration parameters */ ALLOWED_TAGS = objectHasOwnProperty(cfg, 'ALLOWED_TAGS') ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
        ALLOWED_ATTR = objectHasOwnProperty(cfg, 'ALLOWED_ATTR') ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
        ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, 'ALLOWED_NAMESPACES') ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
        URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, 'ADD_URI_SAFE_ATTR') ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
        DATA_URI_TAGS = objectHasOwnProperty(cfg, 'ADD_DATA_URI_TAGS') ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
        FORBID_CONTENTS = objectHasOwnProperty(cfg, 'FORBID_CONTENTS') ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
        FORBID_TAGS = objectHasOwnProperty(cfg, 'FORBID_TAGS') ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : clone({});
        FORBID_ATTR = objectHasOwnProperty(cfg, 'FORBID_ATTR') ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : clone({});
        USE_PROFILES = objectHasOwnProperty(cfg, 'USE_PROFILES') ? cfg.USE_PROFILES : false;
        ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false; // Default true
        ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false; // Default true
        ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false; // Default false
        ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false; // Default true
        SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false; // Default false
        SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false; // Default true
        WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false; // Default false
        RETURN_DOM = cfg.RETURN_DOM || false; // Default false
        RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false; // Default false
        RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false; // Default false
        FORCE_BODY = cfg.FORCE_BODY || false; // Default false
        SANITIZE_DOM = cfg.SANITIZE_DOM !== false; // Default true
        SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false; // Default false
        KEEP_CONTENT = cfg.KEEP_CONTENT !== false; // Default true
        IN_PLACE = cfg.IN_PLACE || false; // Default false
        IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
        NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
        MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
        HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
        CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
        if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
            CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
        }
        if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
            CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
        }
        if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === 'boolean') {
            CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
        }
        if (SAFE_FOR_TEMPLATES) {
            ALLOW_DATA_ATTR = false;
        }
        if (RETURN_DOM_FRAGMENT) {
            RETURN_DOM = true;
        }
        /* Parse profile info */ if (USE_PROFILES) {
            ALLOWED_TAGS = addToSet({}, text);
            ALLOWED_ATTR = [];
            if (USE_PROFILES.html === true) {
                addToSet(ALLOWED_TAGS, html$1);
                addToSet(ALLOWED_ATTR, html);
            }
            if (USE_PROFILES.svg === true) {
                addToSet(ALLOWED_TAGS, svg$1);
                addToSet(ALLOWED_ATTR, svg);
                addToSet(ALLOWED_ATTR, xml);
            }
            if (USE_PROFILES.svgFilters === true) {
                addToSet(ALLOWED_TAGS, svgFilters);
                addToSet(ALLOWED_ATTR, svg);
                addToSet(ALLOWED_ATTR, xml);
            }
            if (USE_PROFILES.mathMl === true) {
                addToSet(ALLOWED_TAGS, mathMl$1);
                addToSet(ALLOWED_ATTR, mathMl);
                addToSet(ALLOWED_ATTR, xml);
            }
        }
        /* Merge configuration parameters */ if (cfg.ADD_TAGS) {
            if (typeof cfg.ADD_TAGS === 'function') {
                EXTRA_ELEMENT_HANDLING.tagCheck = cfg.ADD_TAGS;
            } else {
                if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
                    ALLOWED_TAGS = clone(ALLOWED_TAGS);
                }
                addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
            }
        }
        if (cfg.ADD_ATTR) {
            if (typeof cfg.ADD_ATTR === 'function') {
                EXTRA_ELEMENT_HANDLING.attributeCheck = cfg.ADD_ATTR;
            } else {
                if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
                    ALLOWED_ATTR = clone(ALLOWED_ATTR);
                }
                addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
            }
        }
        if (cfg.ADD_URI_SAFE_ATTR) {
            addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
        }
        if (cfg.FORBID_CONTENTS) {
            if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
                FORBID_CONTENTS = clone(FORBID_CONTENTS);
            }
            addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
        }
        if (cfg.ADD_FORBID_CONTENTS) {
            if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
                FORBID_CONTENTS = clone(FORBID_CONTENTS);
            }
            addToSet(FORBID_CONTENTS, cfg.ADD_FORBID_CONTENTS, transformCaseFunc);
        }
        /* Add #text in case KEEP_CONTENT is set to true */ if (KEEP_CONTENT) {
            ALLOWED_TAGS['#text'] = true;
        }
        /* Add html, head and body to ALLOWED_TAGS in case WHOLE_DOCUMENT is true */ if (WHOLE_DOCUMENT) {
            addToSet(ALLOWED_TAGS, [
                'html',
                'head',
                'body'
            ]);
        }
        /* Add tbody to ALLOWED_TAGS in case tables are permitted, see #286, #365 */ if (ALLOWED_TAGS.table) {
            addToSet(ALLOWED_TAGS, [
                'tbody'
            ]);
            delete FORBID_TAGS.tbody;
        }
        if (cfg.TRUSTED_TYPES_POLICY) {
            if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== 'function') {
                throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
            }
            if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== 'function') {
                throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
            }
            // Overwrite existing TrustedTypes policy.
            trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
            // Sign local variables required by `sanitize`.
            emptyHTML = trustedTypesPolicy.createHTML('');
        } else {
            // Uninitialized policy, attempt to initialize the internal dompurify policy.
            if (trustedTypesPolicy === undefined) {
                trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
            }
            // If creating the internal policy succeeded sign internal variables.
            if (trustedTypesPolicy !== null && typeof emptyHTML === 'string') {
                emptyHTML = trustedTypesPolicy.createHTML('');
            }
        }
        // Prevent further manipulation of configuration.
        // Not available in IE8, Safari 5, etc.
        if (freeze) {
            freeze(cfg);
        }
        CONFIG = cfg;
    };
    /* Keep track of all possible SVG and MathML tags
   * so that we can perform the namespace checks
   * correctly. */ const ALL_SVG_TAGS = addToSet({}, [
        ...svg$1,
        ...svgFilters,
        ...svgDisallowed
    ]);
    const ALL_MATHML_TAGS = addToSet({}, [
        ...mathMl$1,
        ...mathMlDisallowed
    ]);
    /**
   * @param element a DOM element whose namespace is being checked
   * @returns Return false if the element has a
   *  namespace that a spec-compliant parser would never
   *  return. Return true otherwise.
   */ const _checkValidNamespace = function _checkValidNamespace(element) {
        let parent = getParentNode(element);
        // In JSDOM, if we're inside shadow DOM, then parentNode
        // can be null. We just simulate parent in this case.
        if (!parent || !parent.tagName) {
            parent = {
                namespaceURI: NAMESPACE,
                tagName: 'template'
            };
        }
        const tagName = stringToLowerCase(element.tagName);
        const parentTagName = stringToLowerCase(parent.tagName);
        if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
            return false;
        }
        if (element.namespaceURI === SVG_NAMESPACE) {
            // The only way to switch from HTML namespace to SVG
            // is via <svg>. If it happens via any other tag, then
            // it should be killed.
            if (parent.namespaceURI === HTML_NAMESPACE) {
                return tagName === 'svg';
            }
            // The only way to switch from MathML to SVG is via`
            // svg if parent is either <annotation-xml> or MathML
            // text integration points.
            if (parent.namespaceURI === MATHML_NAMESPACE) {
                return tagName === 'svg' && (parentTagName === 'annotation-xml' || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
            }
            // We only allow elements that are defined in SVG
            // spec. All others are disallowed in SVG namespace.
            return Boolean(ALL_SVG_TAGS[tagName]);
        }
        if (element.namespaceURI === MATHML_NAMESPACE) {
            // The only way to switch from HTML namespace to MathML
            // is via <math>. If it happens via any other tag, then
            // it should be killed.
            if (parent.namespaceURI === HTML_NAMESPACE) {
                return tagName === 'math';
            }
            // The only way to switch from SVG to MathML is via
            // <math> and HTML integration points
            if (parent.namespaceURI === SVG_NAMESPACE) {
                return tagName === 'math' && HTML_INTEGRATION_POINTS[parentTagName];
            }
            // We only allow elements that are defined in MathML
            // spec. All others are disallowed in MathML namespace.
            return Boolean(ALL_MATHML_TAGS[tagName]);
        }
        if (element.namespaceURI === HTML_NAMESPACE) {
            // The only way to switch from SVG to HTML is via
            // HTML integration points, and from MathML to HTML
            // is via MathML text integration points
            if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
                return false;
            }
            if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
                return false;
            }
            // We disallow tags that are specific for MathML
            // or SVG and should never appear in HTML namespace
            return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
        }
        // For XHTML and XML documents that support custom namespaces
        if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && ALLOWED_NAMESPACES[element.namespaceURI]) {
            return true;
        }
        // The code should never reach this place (this means
        // that the element somehow got namespace that is not
        // HTML, SVG, MathML or allowed via ALLOWED_NAMESPACES).
        // Return false just in case.
        return false;
    };
    /**
   * _forceRemove
   *
   * @param node a DOM node
   */ const _forceRemove = function _forceRemove(node) {
        arrayPush(DOMPurify.removed, {
            element: node
        });
        try {
            // eslint-disable-next-line unicorn/prefer-dom-node-remove
            getParentNode(node).removeChild(node);
        } catch (_) {
            remove(node);
        }
    };
    /**
   * _removeAttribute
   *
   * @param name an Attribute name
   * @param element a DOM node
   */ const _removeAttribute = function _removeAttribute(name, element) {
        try {
            arrayPush(DOMPurify.removed, {
                attribute: element.getAttributeNode(name),
                from: element
            });
        } catch (_) {
            arrayPush(DOMPurify.removed, {
                attribute: null,
                from: element
            });
        }
        element.removeAttribute(name);
        // We void attribute values for unremovable "is" attributes
        if (name === 'is') {
            if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
                try {
                    _forceRemove(element);
                } catch (_) {}
            } else {
                try {
                    element.setAttribute(name, '');
                } catch (_) {}
            }
        }
    };
    /**
   * _initDocument
   *
   * @param dirty - a string of dirty markup
   * @return a DOM, filled with the dirty markup
   */ const _initDocument = function _initDocument(dirty) {
        /* Create a HTML document */ let doc = null;
        let leadingWhitespace = null;
        if (FORCE_BODY) {
            dirty = '<remove></remove>' + dirty;
        } else {
            /* If FORCE_BODY isn't used, leading whitespace needs to be preserved manually */ const matches = stringMatch(dirty, /^[\r\n\t ]+/);
            leadingWhitespace = matches && matches[0];
        }
        if (PARSER_MEDIA_TYPE === 'application/xhtml+xml' && NAMESPACE === HTML_NAMESPACE) {
            // Root of XHTML doc must contain xmlns declaration (see https://www.w3.org/TR/xhtml1/normative.html#strict)
            dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + '</body></html>';
        }
        const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
        /*
     * Use the DOMParser API by default, fallback later if needs be
     * DOMParser not work for svg when has multiple root element.
     */ if (NAMESPACE === HTML_NAMESPACE) {
            try {
                doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
            } catch (_) {}
        }
        /* Use createHTMLDocument in case DOMParser is not available */ if (!doc || !doc.documentElement) {
            doc = implementation.createDocument(NAMESPACE, 'template', null);
            try {
                doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
            } catch (_) {
            // Syntax error if dirtyPayload is invalid xml
            }
        }
        const body = doc.body || doc.documentElement;
        if (dirty && leadingWhitespace) {
            body.insertBefore(document.createTextNode(leadingWhitespace), body.childNodes[0] || null);
        }
        /* Work on whole document or just its body */ if (NAMESPACE === HTML_NAMESPACE) {
            return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? 'html' : 'body')[0];
        }
        return WHOLE_DOCUMENT ? doc.documentElement : body;
    };
    /**
   * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document.
   *
   * @param root The root element or node to start traversing on.
   * @return The created NodeIterator
   */ const _createNodeIterator = function _createNodeIterator(root) {
        return createNodeIterator.call(root.ownerDocument || root, root, // eslint-disable-next-line no-bitwise
        NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION, null);
    };
    /**
   * _isClobbered
   *
   * @param element element to check for clobbering attacks
   * @return true if clobbered, false if safe
   */ const _isClobbered = function _isClobbered(element) {
        return element instanceof HTMLFormElement && (typeof element.nodeName !== 'string' || typeof element.textContent !== 'string' || typeof element.removeChild !== 'function' || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== 'function' || typeof element.setAttribute !== 'function' || typeof element.namespaceURI !== 'string' || typeof element.insertBefore !== 'function' || typeof element.hasChildNodes !== 'function');
    };
    /**
   * Checks whether the given object is a DOM node.
   *
   * @param value object to check whether it's a DOM node
   * @return true is object is a DOM node
   */ const _isNode = function _isNode(value) {
        return typeof Node === 'function' && value instanceof Node;
    };
    function _executeHooks(hooks, currentNode, data) {
        arrayForEach(hooks, (hook)=>{
            hook.call(DOMPurify, currentNode, data, CONFIG);
        });
    }
    /**
   * _sanitizeElements
   *
   * @protect nodeName
   * @protect textContent
   * @protect removeChild
   * @param currentNode to check for permission to exist
   * @return true if node was killed, false if left alive
   */ const _sanitizeElements = function _sanitizeElements(currentNode) {
        let content = null;
        /* Execute a hook if present */ _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
        /* Check if element is clobbered or can clobber */ if (_isClobbered(currentNode)) {
            _forceRemove(currentNode);
            return true;
        }
        /* Now let's check the element's type and name */ const tagName = transformCaseFunc(currentNode.nodeName);
        /* Execute a hook if present */ _executeHooks(hooks.uponSanitizeElement, currentNode, {
            tagName,
            allowedTags: ALLOWED_TAGS
        });
        /* Detect mXSS attempts abusing namespace confusion */ if (SAFE_FOR_XML && currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
            _forceRemove(currentNode);
            return true;
        }
        /* Remove any occurrence of processing instructions */ if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
            _forceRemove(currentNode);
            return true;
        }
        /* Remove any kind of possibly harmful comments */ if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
            _forceRemove(currentNode);
            return true;
        }
        /* Remove element if anything forbids its presence */ if (!(EXTRA_ELEMENT_HANDLING.tagCheck instanceof Function && EXTRA_ELEMENT_HANDLING.tagCheck(tagName)) && (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName])) {
            /* Check if we have a custom element to handle */ if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
                if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
                    return false;
                }
                if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
                    return false;
                }
            }
            /* Keep content except for bad-listed elements */ if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
                const parentNode = getParentNode(currentNode) || currentNode.parentNode;
                const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
                if (childNodes && parentNode) {
                    const childCount = childNodes.length;
                    for(let i = childCount - 1; i >= 0; --i){
                        const childClone = cloneNode(childNodes[i], true);
                        childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
                        parentNode.insertBefore(childClone, getNextSibling(currentNode));
                    }
                }
            }
            _forceRemove(currentNode);
            return true;
        }
        /* Check whether element has a valid namespace */ if (currentNode instanceof Element && !_checkValidNamespace(currentNode)) {
            _forceRemove(currentNode);
            return true;
        }
        /* Make sure that older browsers don't get fallback-tag mXSS */ if ((tagName === 'noscript' || tagName === 'noembed' || tagName === 'noframes') && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
            _forceRemove(currentNode);
            return true;
        }
        /* Sanitize element content to be template-safe */ if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
            /* Get the element's text content */ content = currentNode.textContent;
            arrayForEach([
                MUSTACHE_EXPR,
                ERB_EXPR,
                TMPLIT_EXPR
            ], (expr)=>{
                content = stringReplace(content, expr, ' ');
            });
            if (currentNode.textContent !== content) {
                arrayPush(DOMPurify.removed, {
                    element: currentNode.cloneNode()
                });
                currentNode.textContent = content;
            }
        }
        /* Execute a hook if present */ _executeHooks(hooks.afterSanitizeElements, currentNode, null);
        return false;
    };
    /**
   * _isValidAttribute
   *
   * @param lcTag Lowercase tag name of containing element.
   * @param lcName Lowercase attribute name.
   * @param value Attribute value.
   * @return Returns true if `value` is valid, otherwise false.
   */ // eslint-disable-next-line complexity
    const _isValidAttribute = function _isValidAttribute(lcTag, lcName, value) {
        /* Make sure attribute cannot clobber */ if (SANITIZE_DOM && (lcName === 'id' || lcName === 'name') && (value in document || value in formElement)) {
            return false;
        }
        /* Allow valid data-* attributes: At least one character after "-"
        (https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)
        XML-compatible (https://html.spec.whatwg.org/multipage/infrastructure.html#xml-compatible and http://www.w3.org/TR/xml/#d0e804)
        We don't need to check the value; it's always URI safe. */ if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR, lcName)) ;
        else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR, lcName)) ;
        else if (EXTRA_ELEMENT_HANDLING.attributeCheck instanceof Function && EXTRA_ELEMENT_HANDLING.attributeCheck(lcName, lcTag)) ;
        else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
            if (// First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            _isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName, lcTag)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            lcName === 'is' && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value))) ;
            else {
                return false;
            }
        /* Check value is safe. First, is attr inert? If so, is safe */ } else if (URI_SAFE_ATTRIBUTES[lcName]) ;
        else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE, ''))) ;
        else if ((lcName === 'src' || lcName === 'xlink:href' || lcName === 'href') && lcTag !== 'script' && stringIndexOf(value, 'data:') === 0 && DATA_URI_TAGS[lcTag]) ;
        else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA, stringReplace(value, ATTR_WHITESPACE, ''))) ;
        else if (value) {
            return false;
        } else ;
        return true;
    };
    /**
   * _isBasicCustomElement
   * checks if at least one dash is included in tagName, and it's not the first char
   * for more sophisticated checking see https://github.com/sindresorhus/validate-element-name
   *
   * @param tagName name of the tag of the node to sanitize
   * @returns Returns true if the tag name meets the basic criteria for a custom element, otherwise false.
   */ const _isBasicCustomElement = function _isBasicCustomElement(tagName) {
        return tagName !== 'annotation-xml' && stringMatch(tagName, CUSTOM_ELEMENT);
    };
    /**
   * _sanitizeAttributes
   *
   * @protect attributes
   * @protect nodeName
   * @protect removeAttribute
   * @protect setAttribute
   *
   * @param currentNode to sanitize
   */ const _sanitizeAttributes = function _sanitizeAttributes(currentNode) {
        /* Execute a hook if present */ _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
        const { attributes } = currentNode;
        /* Check if we have attributes; if not we might have a text node */ if (!attributes || _isClobbered(currentNode)) {
            return;
        }
        const hookEvent = {
            attrName: '',
            attrValue: '',
            keepAttr: true,
            allowedAttributes: ALLOWED_ATTR,
            forceKeepAttr: undefined
        };
        let l = attributes.length;
        /* Go backwards over all attributes; safely remove bad ones */ while(l--){
            const attr = attributes[l];
            const { name, namespaceURI, value: attrValue } = attr;
            const lcName = transformCaseFunc(name);
            const initValue = attrValue;
            let value = name === 'value' ? initValue : stringTrim(initValue);
            /* Execute a hook if present */ hookEvent.attrName = lcName;
            hookEvent.attrValue = value;
            hookEvent.keepAttr = true;
            hookEvent.forceKeepAttr = undefined; // Allows developers to see this is a property they can set
            _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
            value = hookEvent.attrValue;
            /* Full DOM Clobbering protection via namespace isolation,
       * Prefix id and name attributes with `user-content-`
       */ if (SANITIZE_NAMED_PROPS && (lcName === 'id' || lcName === 'name')) {
                // Remove the attribute with this value
                _removeAttribute(name, currentNode);
                // Prefix the value and later re-create the attribute with the sanitized value
                value = SANITIZE_NAMED_PROPS_PREFIX + value;
            }
            /* Work around a security issue with comments inside attributes */ if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title|textarea)/i, value)) {
                _removeAttribute(name, currentNode);
                continue;
            }
            /* Make sure we cannot easily use animated hrefs, even if animations are allowed */ if (lcName === 'attributename' && stringMatch(value, 'href')) {
                _removeAttribute(name, currentNode);
                continue;
            }
            /* Did the hooks approve of the attribute? */ if (hookEvent.forceKeepAttr) {
                continue;
            }
            /* Did the hooks approve of the attribute? */ if (!hookEvent.keepAttr) {
                _removeAttribute(name, currentNode);
                continue;
            }
            /* Work around a security issue in jQuery 3.0 */ if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
                _removeAttribute(name, currentNode);
                continue;
            }
            /* Sanitize attribute content to be template-safe */ if (SAFE_FOR_TEMPLATES) {
                arrayForEach([
                    MUSTACHE_EXPR,
                    ERB_EXPR,
                    TMPLIT_EXPR
                ], (expr)=>{
                    value = stringReplace(value, expr, ' ');
                });
            }
            /* Is `value` valid for this attribute? */ const lcTag = transformCaseFunc(currentNode.nodeName);
            if (!_isValidAttribute(lcTag, lcName, value)) {
                _removeAttribute(name, currentNode);
                continue;
            }
            /* Handle attributes that require Trusted Types */ if (trustedTypesPolicy && typeof trustedTypes === 'object' && typeof trustedTypes.getAttributeType === 'function') {
                if (namespaceURI) ;
                else {
                    switch(trustedTypes.getAttributeType(lcTag, lcName)){
                        case 'TrustedHTML':
                            {
                                value = trustedTypesPolicy.createHTML(value);
                                break;
                            }
                        case 'TrustedScriptURL':
                            {
                                value = trustedTypesPolicy.createScriptURL(value);
                                break;
                            }
                    }
                }
            }
            /* Handle invalid data-* attribute set by try-catching it */ if (value !== initValue) {
                try {
                    if (namespaceURI) {
                        currentNode.setAttributeNS(namespaceURI, name, value);
                    } else {
                        /* Fallback to setAttribute() for browser-unrecognized namespaces e.g. "x-schema". */ currentNode.setAttribute(name, value);
                    }
                    if (_isClobbered(currentNode)) {
                        _forceRemove(currentNode);
                    } else {
                        arrayPop(DOMPurify.removed);
                    }
                } catch (_) {
                    _removeAttribute(name, currentNode);
                }
            }
        }
        /* Execute a hook if present */ _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
    };
    /**
   * _sanitizeShadowDOM
   *
   * @param fragment to iterate over recursively
   */ const _sanitizeShadowDOM = function _sanitizeShadowDOM(fragment) {
        let shadowNode = null;
        const shadowIterator = _createNodeIterator(fragment);
        /* Execute a hook if present */ _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
        while(shadowNode = shadowIterator.nextNode()){
            /* Execute a hook if present */ _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
            /* Sanitize tags and elements */ _sanitizeElements(shadowNode);
            /* Check attributes next */ _sanitizeAttributes(shadowNode);
            /* Deep shadow DOM detected */ if (shadowNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(shadowNode.content);
            }
        }
        /* Execute a hook if present */ _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
    };
    // eslint-disable-next-line complexity
    DOMPurify.sanitize = function(dirty) {
        let cfg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let body = null;
        let importedNode = null;
        let currentNode = null;
        let returnNode = null;
        /* Make sure we have a string to sanitize.
      DO NOT return early, as this will return the wrong type if
      the user has requested a DOM object rather than a string */ IS_EMPTY_INPUT = !dirty;
        if (IS_EMPTY_INPUT) {
            dirty = '<!-->';
        }
        /* Stringify, in case dirty is an object */ if (typeof dirty !== 'string' && !_isNode(dirty)) {
            if (typeof dirty.toString === 'function') {
                dirty = dirty.toString();
                if (typeof dirty !== 'string') {
                    throw typeErrorCreate('dirty is not a string, aborting');
                }
            } else {
                throw typeErrorCreate('toString is not a function');
            }
        }
        /* Return dirty HTML if DOMPurify cannot run */ if (!DOMPurify.isSupported) {
            return dirty;
        }
        /* Assign config vars */ if (!SET_CONFIG) {
            _parseConfig(cfg);
        }
        /* Clean up removed elements */ DOMPurify.removed = [];
        /* Check if dirty is correctly typed for IN_PLACE */ if (typeof dirty === 'string') {
            IN_PLACE = false;
        }
        if (IN_PLACE) {
            /* Do some early pre-sanitization to avoid unsafe root nodes */ if (dirty.nodeName) {
                const tagName = transformCaseFunc(dirty.nodeName);
                if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
                    throw typeErrorCreate('root node is forbidden and cannot be sanitized in-place');
                }
            }
        } else if (dirty instanceof Node) {
            /* If dirty is a DOM element, append to an empty document to avoid
         elements being stripped by the parser */ body = _initDocument('<!---->');
            importedNode = body.ownerDocument.importNode(dirty, true);
            if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === 'BODY') {
                /* Node is already a body, use as is */ body = importedNode;
            } else if (importedNode.nodeName === 'HTML') {
                body = importedNode;
            } else {
                // eslint-disable-next-line unicorn/prefer-dom-node-append
                body.appendChild(importedNode);
            }
        } else {
            /* Exit directly if we have nothing to do */ if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && // eslint-disable-next-line unicorn/prefer-includes
            dirty.indexOf('<') === -1) {
                return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
            }
            /* Initialize the document to work on */ body = _initDocument(dirty);
            /* Check we have a DOM node from the data */ if (!body) {
                return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : '';
            }
        }
        /* Remove first element node (ours) if FORCE_BODY is set */ if (body && FORCE_BODY) {
            _forceRemove(body.firstChild);
        }
        /* Get node iterator */ const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
        /* Now start iterating over the created document */ while(currentNode = nodeIterator.nextNode()){
            /* Sanitize tags and elements */ _sanitizeElements(currentNode);
            /* Check attributes next */ _sanitizeAttributes(currentNode);
            /* Shadow DOM detected, sanitize it */ if (currentNode.content instanceof DocumentFragment) {
                _sanitizeShadowDOM(currentNode.content);
            }
        }
        /* If we sanitized `dirty` in-place, return it. */ if (IN_PLACE) {
            return dirty;
        }
        /* Return sanitized string or DOM */ if (RETURN_DOM) {
            if (RETURN_DOM_FRAGMENT) {
                returnNode = createDocumentFragment.call(body.ownerDocument);
                while(body.firstChild){
                    // eslint-disable-next-line unicorn/prefer-dom-node-append
                    returnNode.appendChild(body.firstChild);
                }
            } else {
                returnNode = body;
            }
            if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
                /*
          AdoptNode() is not used because internal state is not reset
          (e.g. the past names map of a HTMLFormElement), this is safe
          in theory but we would rather not risk another attack vector.
          The state that is cloned by importNode() is explicitly defined
          by the specs.
        */ returnNode = importNode.call(originalDocument, returnNode, true);
            }
            return returnNode;
        }
        let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
        /* Serialize doctype if allowed */ if (WHOLE_DOCUMENT && ALLOWED_TAGS['!doctype'] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
            serializedHTML = '<!DOCTYPE ' + body.ownerDocument.doctype.name + '>\n' + serializedHTML;
        }
        /* Sanitize final string template-safe */ if (SAFE_FOR_TEMPLATES) {
            arrayForEach([
                MUSTACHE_EXPR,
                ERB_EXPR,
                TMPLIT_EXPR
            ], (expr)=>{
                serializedHTML = stringReplace(serializedHTML, expr, ' ');
            });
        }
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
    };
    DOMPurify.setConfig = function() {
        let cfg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _parseConfig(cfg);
        SET_CONFIG = true;
    };
    DOMPurify.clearConfig = function() {
        CONFIG = null;
        SET_CONFIG = false;
    };
    DOMPurify.isValidAttribute = function(tag, attr, value) {
        /* Initialize shared config vars if necessary. */ if (!CONFIG) {
            _parseConfig({});
        }
        const lcTag = transformCaseFunc(tag);
        const lcName = transformCaseFunc(attr);
        return _isValidAttribute(lcTag, lcName, value);
    };
    DOMPurify.addHook = function(entryPoint, hookFunction) {
        if (typeof hookFunction !== 'function') {
            return;
        }
        arrayPush(hooks[entryPoint], hookFunction);
    };
    DOMPurify.removeHook = function(entryPoint, hookFunction) {
        if (hookFunction !== undefined) {
            const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
            return index === -1 ? undefined : arraySplice(hooks[entryPoint], index, 1)[0];
        }
        return arrayPop(hooks[entryPoint]);
    };
    DOMPurify.removeHooks = function(entryPoint) {
        hooks[entryPoint] = [];
    };
    DOMPurify.removeAllHooks = function() {
        hooks = _createHooksMap();
    };
    return DOMPurify;
}
var purify = createDOMPurify();
;
 //# sourceMappingURL=purify.es.mjs.map
}),
"[project]/node_modules/urijs/src/punycode.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*! https://mths.be/punycode v1.4.0 by @mathias */ ;
(function(root) {
    /** Detect free variables */ var freeExports = ("TURBOPACK compile-time value", "object") == 'object' && exports && !exports.nodeType && exports;
    var freeModule = ("TURBOPACK compile-time value", "object") == 'object' && module && !module.nodeType && module;
    var freeGlobal = ("TURBOPACK compile-time value", "object") == 'object' && /*TURBOPACK member replacement*/ __turbopack_context__.g;
    if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
        root = freeGlobal;
    }
    /**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */ var punycode, /** Highest positive signed 32-bit float value */ maxInt = 2147483647, /** Bootstring parameters */ base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700, initialBias = 72, initialN = 128, delimiter = '-', /** Regular expressions */ regexPunycode = /^xn--/, regexNonASCII = /[^\x20-\x7E]/, regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, /** Error messages */ errors = {
        'overflow': 'Overflow: input needs wider integers to process',
        'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
        'invalid-input': 'Invalid input'
    }, /** Convenience shortcuts */ baseMinusTMin = base - tMin, floor = Math.floor, stringFromCharCode = String.fromCharCode, /** Temporary variable */ key;
    /*--------------------------------------------------------------------------*/ /**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */ function error(type) {
        throw new RangeError(errors[type]);
    }
    /**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */ function map(array, fn) {
        var length = array.length;
        var result = [];
        while(length--){
            result[length] = fn(array[length]);
        }
        return result;
    }
    /**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */ function mapDomain(string, fn) {
        var parts = string.split('@');
        var result = '';
        if (parts.length > 1) {
            // In email addresses, only the domain name should be punycoded. Leave
            // the local part (i.e. everything up to `@`) intact.
            result = parts[0] + '@';
            string = parts[1];
        }
        // Avoid `split(regex)` for IE8 compatibility. See #17.
        string = string.replace(regexSeparators, '\x2E');
        var labels = string.split('.');
        var encoded = map(labels, fn).join('.');
        return result + encoded;
    }
    /**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */ function ucs2decode(string) {
        var output = [], counter = 0, length = string.length, value, extra;
        while(counter < length){
            value = string.charCodeAt(counter++);
            if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                // high surrogate, and there is a next character
                extra = string.charCodeAt(counter++);
                if ((extra & 0xFC00) == 0xDC00) {
                    output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                } else {
                    // unmatched surrogate; only append this code unit, in case the next
                    // code unit is the high surrogate of a surrogate pair
                    output.push(value);
                    counter--;
                }
            } else {
                output.push(value);
            }
        }
        return output;
    }
    /**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */ function ucs2encode(array) {
        return map(array, function(value) {
            var output = '';
            if (value > 0xFFFF) {
                value -= 0x10000;
                output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
                value = 0xDC00 | value & 0x3FF;
            }
            output += stringFromCharCode(value);
            return output;
        }).join('');
    }
    /**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */ function basicToDigit(codePoint) {
        if (codePoint - 48 < 10) {
            return codePoint - 22;
        }
        if (codePoint - 65 < 26) {
            return codePoint - 65;
        }
        if (codePoint - 97 < 26) {
            return codePoint - 97;
        }
        return base;
    }
    /**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */ function digitToBasic(digit, flag) {
        //  0..25 map to ASCII a..z or A..Z
        // 26..35 map to ASCII 0..9
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    }
    /**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */ function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for(; delta > baseMinusTMin * tMax >> 1; k += base){
            delta = floor(delta / baseMinusTMin);
        }
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    }
    /**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */ function decode(input) {
        // Don't use UCS-2
        var output = [], inputLength = input.length, out, i = 0, n = initialN, bias = initialBias, basic, j, index, oldi, w, k, digit, t, /** Cached calculation results */ baseMinusT;
        // Handle the basic code points: let `basic` be the number of input code
        // points before the last delimiter, or `0` if there is none, then copy
        // the first basic code points to the output.
        basic = input.lastIndexOf(delimiter);
        if (basic < 0) {
            basic = 0;
        }
        for(j = 0; j < basic; ++j){
            // if it's not a basic code point
            if (input.charCodeAt(j) >= 0x80) {
                error('not-basic');
            }
            output.push(input.charCodeAt(j));
        }
        // Main decoding loop: start just after the last delimiter if any basic code
        // points were copied; start at the beginning otherwise.
        for(index = basic > 0 ? basic + 1 : 0; index < inputLength;){
            // `index` is the index of the next character to be consumed.
            // Decode a generalized variable-length integer into `delta`,
            // which gets added to `i`. The overflow checking is easier
            // if we increase `i` as we go, then subtract off its starting
            // value at the end to obtain `delta`.
            for(oldi = i, w = 1, k = base;; k += base){
                if (index >= inputLength) {
                    error('invalid-input');
                }
                digit = basicToDigit(input.charCodeAt(index++));
                if (digit >= base || digit > floor((maxInt - i) / w)) {
                    error('overflow');
                }
                i += digit * w;
                t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (digit < t) {
                    break;
                }
                baseMinusT = base - t;
                if (w > floor(maxInt / baseMinusT)) {
                    error('overflow');
                }
                w *= baseMinusT;
            }
            out = output.length + 1;
            bias = adapt(i - oldi, out, oldi == 0);
            // `i` was supposed to wrap around from `out` to `0`,
            // incrementing `n` each time, so we'll fix that now:
            if (floor(i / out) > maxInt - n) {
                error('overflow');
            }
            n += floor(i / out);
            i %= out;
            // Insert `n` at position `i` of the output
            output.splice(i++, 0, n);
        }
        return ucs2encode(output);
    }
    /**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */ function encode(input) {
        var n, delta, handledCPCount, basicLength, bias, j, m, q, k, t, currentValue, output = [], /** `inputLength` will hold the number of code points in `input`. */ inputLength, /** Cached calculation results */ handledCPCountPlusOne, baseMinusT, qMinusT;
        // Convert the input in UCS-2 to Unicode
        input = ucs2decode(input);
        // Cache the length
        inputLength = input.length;
        // Initialize the state
        n = initialN;
        delta = 0;
        bias = initialBias;
        // Handle the basic code points
        for(j = 0; j < inputLength; ++j){
            currentValue = input[j];
            if (currentValue < 0x80) {
                output.push(stringFromCharCode(currentValue));
            }
        }
        handledCPCount = basicLength = output.length;
        // `handledCPCount` is the number of code points that have been handled;
        // `basicLength` is the number of basic code points.
        // Finish the basic string - if it is not empty - with a delimiter
        if (basicLength) {
            output.push(delimiter);
        }
        // Main encoding loop:
        while(handledCPCount < inputLength){
            // All non-basic code points < n have been handled already. Find the next
            // larger one:
            for(m = maxInt, j = 0; j < inputLength; ++j){
                currentValue = input[j];
                if (currentValue >= n && currentValue < m) {
                    m = currentValue;
                }
            }
            // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
            // but guard against overflow
            handledCPCountPlusOne = handledCPCount + 1;
            if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
                error('overflow');
            }
            delta += (m - n) * handledCPCountPlusOne;
            n = m;
            for(j = 0; j < inputLength; ++j){
                currentValue = input[j];
                if (currentValue < n && ++delta > maxInt) {
                    error('overflow');
                }
                if (currentValue == n) {
                    // Represent delta as a generalized variable-length integer
                    for(q = delta, k = base;; k += base){
                        t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                        if (q < t) {
                            break;
                        }
                        qMinusT = q - t;
                        baseMinusT = base - t;
                        output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                        q = floor(qMinusT / baseMinusT);
                    }
                    output.push(stringFromCharCode(digitToBasic(q, 0)));
                    bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                    delta = 0;
                    ++handledCPCount;
                }
            }
            ++delta;
            ++n;
        }
        return output.join('');
    }
    /**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */ function toUnicode(input) {
        return mapDomain(input, function(string) {
            return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
    }
    /**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */ function toASCII(input) {
        return mapDomain(input, function(string) {
            return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
        });
    }
    /*--------------------------------------------------------------------------*/ /** Define the public API */ punycode = {
        /**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */ 'version': '1.3.2',
        /**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */ 'ucs2': {
            'decode': ucs2decode,
            'encode': ucs2encode
        },
        'decode': decode,
        'encode': encode,
        'toASCII': toASCII,
        'toUnicode': toUnicode
    };
    /** Expose `punycode` */ // Some AMD build optimizers, like r.js, check for specific condition patterns
    // like the following:
    if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
        ((r)=>r !== undefined && __turbopack_context__.v(r))(function() {
            return punycode;
        }(__turbopack_context__.r, exports, module));
    } else if (freeExports && freeModule) {
        if (module.exports == freeExports) {
            // in Node.js, io.js, or RingoJS v0.8.0+
            freeModule.exports = punycode;
        } else {
            // in Narwhal or RingoJS v0.7.0-
            for(key in punycode){
                punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
            }
        }
    } else {
        // in Rhino or a web browser
        root.punycode = punycode;
    }
})(/*TURBOPACK member replacement*/ __turbopack_context__.e);
}),
"[project]/node_modules/urijs/src/IPv6.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
 * URI.js - Mutating URLs
 * IPv6 Support
 *
 * Version: 1.19.11
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */ (function(root, factory) {
    'use strict';
    // https://github.com/umdjs/umd/blob/master/returnExports.js
    if (("TURBOPACK compile-time value", "object") === 'object' && module.exports) {
        // Node
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        ((r)=>r !== undefined && __turbopack_context__.v(r))(factory(__turbopack_context__.r, exports, module));
    } else {
        // Browser globals (root is window)
        root.IPv6 = factory(root);
    }
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(root) {
    'use strict';
    /*
  var _in = "fe80:0000:0000:0000:0204:61ff:fe9d:f156";
  var _out = IPv6.best(_in);
  var _expected = "fe80::204:61ff:fe9d:f156";

  console.log(_in, _out, _expected, _out === _expected);
  */ // save current IPv6 variable, if any
    var _IPv6 = root && root.IPv6;
    function bestPresentation(address) {
        // based on:
        // Javascript to test an IPv6 address for proper format, and to
        // present the "best text representation" according to IETF Draft RFC at
        // http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04
        // 8 Feb 2010 Rich Brown, Dartware, LLC
        // Please feel free to use this code as long as you provide a link to
        // http://www.intermapper.com
        // http://intermapper.com/support/tools/IPV6-Validator.aspx
        // http://download.dartware.com/thirdparty/ipv6validator.js
        var _address = address.toLowerCase();
        var segments = _address.split(':');
        var length = segments.length;
        var total = 8;
        // trim colons (:: or ::a:b:c… or …a:b:c::)
        if (segments[0] === '' && segments[1] === '' && segments[2] === '') {
            // must have been ::
            // remove first two items
            segments.shift();
            segments.shift();
        } else if (segments[0] === '' && segments[1] === '') {
            // must have been ::xxxx
            // remove the first item
            segments.shift();
        } else if (segments[length - 1] === '' && segments[length - 2] === '') {
            // must have been xxxx::
            segments.pop();
        }
        length = segments.length;
        // adjust total segments for IPv4 trailer
        if (segments[length - 1].indexOf('.') !== -1) {
            // found a "." which means IPv4
            total = 7;
        }
        // fill empty segments them with "0000"
        var pos;
        for(pos = 0; pos < length; pos++){
            if (segments[pos] === '') {
                break;
            }
        }
        if (pos < total) {
            segments.splice(pos, 1, '0000');
            while(segments.length < total){
                segments.splice(pos, 0, '0000');
            }
        }
        // strip leading zeros
        var _segments;
        for(var i = 0; i < total; i++){
            _segments = segments[i].split('');
            for(var j = 0; j < 3; j++){
                if (_segments[0] === '0' && _segments.length > 1) {
                    _segments.splice(0, 1);
                } else {
                    break;
                }
            }
            segments[i] = _segments.join('');
        }
        // find longest sequence of zeroes and coalesce them into one segment
        var best = -1;
        var _best = 0;
        var _current = 0;
        var current = -1;
        var inzeroes = false;
        // i; already declared
        for(i = 0; i < total; i++){
            if (inzeroes) {
                if (segments[i] === '0') {
                    _current += 1;
                } else {
                    inzeroes = false;
                    if (_current > _best) {
                        best = current;
                        _best = _current;
                    }
                }
            } else {
                if (segments[i] === '0') {
                    inzeroes = true;
                    current = i;
                    _current = 1;
                }
            }
        }
        if (_current > _best) {
            best = current;
            _best = _current;
        }
        if (_best > 1) {
            segments.splice(best, _best, '');
        }
        length = segments.length;
        // assemble remaining segments
        var result = '';
        if (segments[0] === '') {
            result = ':';
        }
        for(i = 0; i < length; i++){
            result += segments[i];
            if (i === length - 1) {
                break;
            }
            result += ':';
        }
        if (segments[length - 1] === '') {
            result += ':';
        }
        return result;
    }
    function noConflict() {
        /*jshint validthis: true */ if (root.IPv6 === this) {
            root.IPv6 = _IPv6;
        }
        return this;
    }
    return {
        best: bestPresentation,
        noConflict: noConflict
    };
});
}),
"[project]/node_modules/urijs/src/SecondLevelDomains.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
 * URI.js - Mutating URLs
 * Second Level Domain (SLD) Support
 *
 * Version: 1.19.11
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */ (function(root, factory) {
    'use strict';
    // https://github.com/umdjs/umd/blob/master/returnExports.js
    if (("TURBOPACK compile-time value", "object") === 'object' && module.exports) {
        // Node
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        ((r)=>r !== undefined && __turbopack_context__.v(r))(factory(__turbopack_context__.r, exports, module));
    } else {
        // Browser globals (root is window)
        root.SecondLevelDomains = factory(root);
    }
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(root) {
    'use strict';
    // save current SecondLevelDomains variable, if any
    var _SecondLevelDomains = root && root.SecondLevelDomains;
    var SLD = {
        // list of known Second Level Domains
        // converted list of SLDs from https://github.com/gavingmiller/second-level-domains
        // ----
        // publicsuffix.org is more current and actually used by a couple of browsers internally.
        // downside is it also contains domains like "dyndns.org" - which is fine for the security
        // issues browser have to deal with (SOP for cookies, etc) - but is way overboard for URI.js
        // ----
        list: {
            'ac': ' com gov mil net org ',
            'ae': ' ac co gov mil name net org pro sch ',
            'af': ' com edu gov net org ',
            'al': ' com edu gov mil net org ',
            'ao': ' co ed gv it og pb ',
            'ar': ' com edu gob gov int mil net org tur ',
            'at': ' ac co gv or ',
            'au': ' asn com csiro edu gov id net org ',
            'ba': ' co com edu gov mil net org rs unbi unmo unsa untz unze ',
            'bb': ' biz co com edu gov info net org store tv ',
            'bh': ' biz cc com edu gov info net org ',
            'bn': ' com edu gov net org ',
            'bo': ' com edu gob gov int mil net org tv ',
            'br': ' adm adv agr am arq art ato b bio blog bmd cim cng cnt com coop ecn edu eng esp etc eti far flog fm fnd fot fst g12 ggf gov imb ind inf jor jus lel mat med mil mus net nom not ntr odo org ppg pro psc psi qsl rec slg srv tmp trd tur tv vet vlog wiki zlg ',
            'bs': ' com edu gov net org ',
            'bz': ' du et om ov rg ',
            'ca': ' ab bc mb nb nf nl ns nt nu on pe qc sk yk ',
            'ck': ' biz co edu gen gov info net org ',
            'cn': ' ac ah bj com cq edu fj gd gov gs gx gz ha hb he hi hl hn jl js jx ln mil net nm nx org qh sc sd sh sn sx tj tw xj xz yn zj ',
            'co': ' com edu gov mil net nom org ',
            'cr': ' ac c co ed fi go or sa ',
            'cy': ' ac biz com ekloges gov ltd name net org parliament press pro tm ',
            'do': ' art com edu gob gov mil net org sld web ',
            'dz': ' art asso com edu gov net org pol ',
            'ec': ' com edu fin gov info med mil net org pro ',
            'eg': ' com edu eun gov mil name net org sci ',
            'er': ' com edu gov ind mil net org rochest w ',
            'es': ' com edu gob nom org ',
            'et': ' biz com edu gov info name net org ',
            'fj': ' ac biz com info mil name net org pro ',
            'fk': ' ac co gov net nom org ',
            'fr': ' asso com f gouv nom prd presse tm ',
            'gg': ' co net org ',
            'gh': ' com edu gov mil org ',
            'gn': ' ac com gov net org ',
            'gr': ' com edu gov mil net org ',
            'gt': ' com edu gob ind mil net org ',
            'gu': ' com edu gov net org ',
            'hk': ' com edu gov idv net org ',
            'hu': ' 2000 agrar bolt casino city co erotica erotika film forum games hotel info ingatlan jogasz konyvelo lakas media news org priv reklam sex shop sport suli szex tm tozsde utazas video ',
            'id': ' ac co go mil net or sch web ',
            'il': ' ac co gov idf k12 muni net org ',
            'in': ' ac co edu ernet firm gen gov i ind mil net nic org res ',
            'iq': ' com edu gov i mil net org ',
            'ir': ' ac co dnssec gov i id net org sch ',
            'it': ' edu gov ',
            'je': ' co net org ',
            'jo': ' com edu gov mil name net org sch ',
            'jp': ' ac ad co ed go gr lg ne or ',
            'ke': ' ac co go info me mobi ne or sc ',
            'kh': ' com edu gov mil net org per ',
            'ki': ' biz com de edu gov info mob net org tel ',
            'km': ' asso com coop edu gouv k medecin mil nom notaires pharmaciens presse tm veterinaire ',
            'kn': ' edu gov net org ',
            'kr': ' ac busan chungbuk chungnam co daegu daejeon es gangwon go gwangju gyeongbuk gyeonggi gyeongnam hs incheon jeju jeonbuk jeonnam k kg mil ms ne or pe re sc seoul ulsan ',
            'kw': ' com edu gov net org ',
            'ky': ' com edu gov net org ',
            'kz': ' com edu gov mil net org ',
            'lb': ' com edu gov net org ',
            'lk': ' assn com edu gov grp hotel int ltd net ngo org sch soc web ',
            'lr': ' com edu gov net org ',
            'lv': ' asn com conf edu gov id mil net org ',
            'ly': ' com edu gov id med net org plc sch ',
            'ma': ' ac co gov m net org press ',
            'mc': ' asso tm ',
            'me': ' ac co edu gov its net org priv ',
            'mg': ' com edu gov mil nom org prd tm ',
            'mk': ' com edu gov inf name net org pro ',
            'ml': ' com edu gov net org presse ',
            'mn': ' edu gov org ',
            'mo': ' com edu gov net org ',
            'mt': ' com edu gov net org ',
            'mv': ' aero biz com coop edu gov info int mil museum name net org pro ',
            'mw': ' ac co com coop edu gov int museum net org ',
            'mx': ' com edu gob net org ',
            'my': ' com edu gov mil name net org sch ',
            'nf': ' arts com firm info net other per rec store web ',
            'ng': ' biz com edu gov mil mobi name net org sch ',
            'ni': ' ac co com edu gob mil net nom org ',
            'np': ' com edu gov mil net org ',
            'nr': ' biz com edu gov info net org ',
            'om': ' ac biz co com edu gov med mil museum net org pro sch ',
            'pe': ' com edu gob mil net nom org sld ',
            'ph': ' com edu gov i mil net ngo org ',
            'pk': ' biz com edu fam gob gok gon gop gos gov net org web ',
            'pl': ' art bialystok biz com edu gda gdansk gorzow gov info katowice krakow lodz lublin mil net ngo olsztyn org poznan pwr radom slupsk szczecin torun warszawa waw wroc wroclaw zgora ',
            'pr': ' ac biz com edu est gov info isla name net org pro prof ',
            'ps': ' com edu gov net org plo sec ',
            'pw': ' belau co ed go ne or ',
            'ro': ' arts com firm info nom nt org rec store tm www ',
            'rs': ' ac co edu gov in org ',
            'sb': ' com edu gov net org ',
            'sc': ' com edu gov net org ',
            'sh': ' co com edu gov net nom org ',
            'sl': ' com edu gov net org ',
            'st': ' co com consulado edu embaixada gov mil net org principe saotome store ',
            'sv': ' com edu gob org red ',
            'sz': ' ac co org ',
            'tr': ' av bbs bel biz com dr edu gen gov info k12 name net org pol tel tsk tv web ',
            'tt': ' aero biz cat co com coop edu gov info int jobs mil mobi museum name net org pro tel travel ',
            'tw': ' club com ebiz edu game gov idv mil net org ',
            'mu': ' ac co com gov net or org ',
            'mz': ' ac co edu gov org ',
            'na': ' co com ',
            'nz': ' ac co cri geek gen govt health iwi maori mil net org parliament school ',
            'pa': ' abo ac com edu gob ing med net nom org sld ',
            'pt': ' com edu gov int net nome org publ ',
            'py': ' com edu gov mil net org ',
            'qa': ' com edu gov mil net org ',
            're': ' asso com nom ',
            'ru': ' ac adygeya altai amur arkhangelsk astrakhan bashkiria belgorod bir bryansk buryatia cbg chel chelyabinsk chita chukotka chuvashia com dagestan e-burg edu gov grozny int irkutsk ivanovo izhevsk jar joshkar-ola kalmykia kaluga kamchatka karelia kazan kchr kemerovo khabarovsk khakassia khv kirov koenig komi kostroma kranoyarsk kuban kurgan kursk lipetsk magadan mari mari-el marine mil mordovia mosreg msk murmansk nalchik net nnov nov novosibirsk nsk omsk orenburg org oryol penza perm pp pskov ptz rnd ryazan sakhalin samara saratov simbirsk smolensk spb stavropol stv surgut tambov tatarstan tom tomsk tsaritsyn tsk tula tuva tver tyumen udm udmurtia ulan-ude vladikavkaz vladimir vladivostok volgograd vologda voronezh vrn vyatka yakutia yamal yekaterinburg yuzhno-sakhalinsk ',
            'rw': ' ac co com edu gouv gov int mil net ',
            'sa': ' com edu gov med net org pub sch ',
            'sd': ' com edu gov info med net org tv ',
            'se': ' a ac b bd c d e f g h i k l m n o org p parti pp press r s t tm u w x y z ',
            'sg': ' com edu gov idn net org per ',
            'sn': ' art com edu gouv org perso univ ',
            'sy': ' com edu gov mil net news org ',
            'th': ' ac co go in mi net or ',
            'tj': ' ac biz co com edu go gov info int mil name net nic org test web ',
            'tn': ' agrinet com defense edunet ens fin gov ind info intl mincom nat net org perso rnrt rns rnu tourism ',
            'tz': ' ac co go ne or ',
            'ua': ' biz cherkassy chernigov chernovtsy ck cn co com crimea cv dn dnepropetrovsk donetsk dp edu gov if in ivano-frankivsk kh kharkov kherson khmelnitskiy kiev kirovograd km kr ks kv lg lugansk lutsk lviv me mk net nikolaev od odessa org pl poltava pp rovno rv sebastopol sumy te ternopil uzhgorod vinnica vn zaporizhzhe zhitomir zp zt ',
            'ug': ' ac co go ne or org sc ',
            'uk': ' ac bl british-library co cym gov govt icnet jet lea ltd me mil mod national-library-scotland nel net nhs nic nls org orgn parliament plc police sch scot soc ',
            'us': ' dni fed isa kids nsn ',
            'uy': ' com edu gub mil net org ',
            've': ' co com edu gob info mil net org web ',
            'vi': ' co com k12 net org ',
            'vn': ' ac biz com edu gov health info int name net org pro ',
            'ye': ' co com gov ltd me net org plc ',
            'yu': ' ac co edu gov org ',
            'za': ' ac agric alt bourse city co cybernet db edu gov grondar iaccess imt inca landesign law mil net ngo nis nom olivetti org pix school tm web ',
            'zm': ' ac co com edu gov net org sch ',
            // https://en.wikipedia.org/wiki/CentralNic#Second-level_domains
            'com': 'ar br cn de eu gb gr hu jpn kr no qc ru sa se uk us uy za ',
            'net': 'gb jp se uk ',
            'org': 'ae',
            'de': 'com '
        },
        // gorhill 2013-10-25: Using indexOf() instead Regexp(). Significant boost
        // in both performance and memory footprint. No initialization required.
        // http://jsperf.com/uri-js-sld-regex-vs-binary-search/4
        // Following methods use lastIndexOf() rather than array.split() in order
        // to avoid any memory allocations.
        has: function(domain) {
            var tldOffset = domain.lastIndexOf('.');
            if (tldOffset <= 0 || tldOffset >= domain.length - 1) {
                return false;
            }
            var sldOffset = domain.lastIndexOf('.', tldOffset - 1);
            if (sldOffset <= 0 || sldOffset >= tldOffset - 1) {
                return false;
            }
            var sldList = SLD.list[domain.slice(tldOffset + 1)];
            if (!sldList) {
                return false;
            }
            return sldList.indexOf(' ' + domain.slice(sldOffset + 1, tldOffset) + ' ') >= 0;
        },
        is: function(domain) {
            var tldOffset = domain.lastIndexOf('.');
            if (tldOffset <= 0 || tldOffset >= domain.length - 1) {
                return false;
            }
            var sldOffset = domain.lastIndexOf('.', tldOffset - 1);
            if (sldOffset >= 0) {
                return false;
            }
            var sldList = SLD.list[domain.slice(tldOffset + 1)];
            if (!sldList) {
                return false;
            }
            return sldList.indexOf(' ' + domain.slice(0, tldOffset) + ' ') >= 0;
        },
        get: function(domain) {
            var tldOffset = domain.lastIndexOf('.');
            if (tldOffset <= 0 || tldOffset >= domain.length - 1) {
                return null;
            }
            var sldOffset = domain.lastIndexOf('.', tldOffset - 1);
            if (sldOffset <= 0 || sldOffset >= tldOffset - 1) {
                return null;
            }
            var sldList = SLD.list[domain.slice(tldOffset + 1)];
            if (!sldList) {
                return null;
            }
            if (sldList.indexOf(' ' + domain.slice(sldOffset + 1, tldOffset) + ' ') < 0) {
                return null;
            }
            return domain.slice(sldOffset + 1);
        },
        noConflict: function() {
            if (root.SecondLevelDomains === this) {
                root.SecondLevelDomains = _SecondLevelDomains;
            }
            return this;
        }
    };
    return SLD;
});
}),
"[project]/node_modules/urijs/src/URI.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*!
 * URI.js - Mutating URLs
 *
 * Version: 1.19.11
 *
 * Author: Rodney Rehm
 * Web: http://medialize.github.io/URI.js/
 *
 * Licensed under
 *   MIT License http://www.opensource.org/licenses/mit-license
 *
 */ (function(root, factory) {
    'use strict';
    // https://github.com/umdjs/umd/blob/master/returnExports.js
    if (("TURBOPACK compile-time value", "object") === 'object' && module.exports) {
        // Node
        module.exports = factory(__turbopack_context__.r("[project]/node_modules/urijs/src/punycode.js [app-client] (ecmascript)"), __turbopack_context__.r("[project]/node_modules/urijs/src/IPv6.js [app-client] (ecmascript)"), __turbopack_context__.r("[project]/node_modules/urijs/src/SecondLevelDomains.js [app-client] (ecmascript)"));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        ((r)=>r !== undefined && __turbopack_context__.v(r))(factory(__turbopack_context__.r("[project]/node_modules/urijs/src/punycode.js [app-client] (ecmascript)"), __turbopack_context__.r("[project]/node_modules/urijs/src/IPv6.js [app-client] (ecmascript)"), __turbopack_context__.r("[project]/node_modules/urijs/src/SecondLevelDomains.js [app-client] (ecmascript)")));
    } else {
        // Browser globals (root is window)
        root.URI = factory(root.punycode, root.IPv6, root.SecondLevelDomains, root);
    }
})(/*TURBOPACK member replacement*/ __turbopack_context__.e, function(punycode, IPv6, SLD, root) {
    'use strict';
    /*global location, escape, unescape */ // FIXME: v2.0.0 renamce non-camelCase properties to uppercase
    /*jshint camelcase: false */ // save current URI variable, if any
    var _URI = root && root.URI;
    function URI(url, base) {
        var _urlSupplied = arguments.length >= 1;
        var _baseSupplied = arguments.length >= 2;
        // Allow instantiation without the 'new' keyword
        if (!(this instanceof URI)) {
            if (_urlSupplied) {
                if (_baseSupplied) {
                    return new URI(url, base);
                }
                return new URI(url);
            }
            return new URI();
        }
        if (url === undefined) {
            if (_urlSupplied) {
                throw new TypeError('undefined is not a valid argument for URI');
            }
            if (typeof location !== 'undefined') {
                url = location.href + '';
            } else {
                url = '';
            }
        }
        if (url === null) {
            if (_urlSupplied) {
                throw new TypeError('null is not a valid argument for URI');
            }
        }
        this.href(url);
        // resolve to base according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#constructor
        if (base !== undefined) {
            return this.absoluteTo(base);
        }
        return this;
    }
    function isInteger(value) {
        return /^[0-9]+$/.test(value);
    }
    URI.version = '1.19.11';
    var p = URI.prototype;
    var hasOwn = Object.prototype.hasOwnProperty;
    function escapeRegEx(string) {
        // https://github.com/medialize/URI.js/commit/85ac21783c11f8ccab06106dba9735a31a86924d#commitcomment-821963
        return string.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
    }
    function getType(value) {
        // IE8 doesn't return [Object Undefined] but [Object Object] for undefined value
        if (value === undefined) {
            return 'Undefined';
        }
        return String(Object.prototype.toString.call(value)).slice(8, -1);
    }
    function isArray(obj) {
        return getType(obj) === 'Array';
    }
    function filterArrayValues(data, value) {
        var lookup = {};
        var i, length;
        if (getType(value) === 'RegExp') {
            lookup = null;
        } else if (isArray(value)) {
            for(i = 0, length = value.length; i < length; i++){
                lookup[value[i]] = true;
            }
        } else {
            lookup[value] = true;
        }
        for(i = 0, length = data.length; i < length; i++){
            /*jshint laxbreak: true */ var _match = lookup && lookup[data[i]] !== undefined || !lookup && value.test(data[i]);
            /*jshint laxbreak: false */ if (_match) {
                data.splice(i, 1);
                length--;
                i--;
            }
        }
        return data;
    }
    function arrayContains(list, value) {
        var i, length;
        // value may be string, number, array, regexp
        if (isArray(value)) {
            // Note: this can be optimized to O(n) (instead of current O(m * n))
            for(i = 0, length = value.length; i < length; i++){
                if (!arrayContains(list, value[i])) {
                    return false;
                }
            }
            return true;
        }
        var _type = getType(value);
        for(i = 0, length = list.length; i < length; i++){
            if (_type === 'RegExp') {
                if (typeof list[i] === 'string' && list[i].match(value)) {
                    return true;
                }
            } else if (list[i] === value) {
                return true;
            }
        }
        return false;
    }
    function arraysEqual(one, two) {
        if (!isArray(one) || !isArray(two)) {
            return false;
        }
        // arrays can't be equal if they have different amount of content
        if (one.length !== two.length) {
            return false;
        }
        one.sort();
        two.sort();
        for(var i = 0, l = one.length; i < l; i++){
            if (one[i] !== two[i]) {
                return false;
            }
        }
        return true;
    }
    function trimSlashes(text) {
        var trim_expression = /^\/+|\/+$/g;
        return text.replace(trim_expression, '');
    }
    URI._parts = function() {
        return {
            protocol: null,
            username: null,
            password: null,
            hostname: null,
            urn: null,
            port: null,
            path: null,
            query: null,
            fragment: null,
            // state
            preventInvalidHostname: URI.preventInvalidHostname,
            duplicateQueryParameters: URI.duplicateQueryParameters,
            escapeQuerySpace: URI.escapeQuerySpace
        };
    };
    // state: throw on invalid hostname
    // see https://github.com/medialize/URI.js/pull/345
    // and https://github.com/medialize/URI.js/issues/354
    URI.preventInvalidHostname = false;
    // state: allow duplicate query parameters (a=1&a=1)
    URI.duplicateQueryParameters = false;
    // state: replaces + with %20 (space in query strings)
    URI.escapeQuerySpace = true;
    // static properties
    URI.protocol_expression = /^[a-z][a-z0-9.+-]*$/i;
    URI.idn_expression = /[^a-z0-9\._-]/i;
    URI.punycode_expression = /(xn--)/i;
    // well, 333.444.555.666 matches, but it sure ain't no IPv4 - do we care?
    URI.ip4_expression = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
    // credits to Rich Brown
    // source: http://forums.intermapper.com/viewtopic.php?p=1096#1096
    // specification: http://www.ietf.org/rfc/rfc4291.txt
    URI.ip6_expression = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
    // expression used is "gruber revised" (@gruber v2) determined to be the
    // best solution in a regex-golf we did a couple of ages ago at
    // * http://mathiasbynens.be/demo/url-regex
    // * http://rodneyrehm.de/t/url-regex.html
    URI.find_uri_expression = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))/ig;
    URI.findUri = {
        // valid "scheme://" or "www."
        start: /\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,
        // everything up to the next whitespace
        end: /[\s\r\n]|$/,
        // trim trailing punctuation captured by end RegExp
        trim: /[`!()\[\]{};:'".,<>?«»“”„‘’]+$/,
        // balanced parens inclusion (), [], {}, <>
        parens: /(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g
    };
    URI.leading_whitespace_expression = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/;
    // https://infra.spec.whatwg.org/#ascii-tab-or-newline
    URI.ascii_tab_whitespace = /[\u0009\u000A\u000D]+/g;
    // http://www.iana.org/assignments/uri-schemes.html
    // http://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well-known_ports
    URI.defaultPorts = {
        http: '80',
        https: '443',
        ftp: '21',
        gopher: '70',
        ws: '80',
        wss: '443'
    };
    // list of protocols which always require a hostname
    URI.hostProtocols = [
        'http',
        'https'
    ];
    // allowed hostname characters according to RFC 3986
    // ALPHA DIGIT "-" "." "_" "~" "!" "$" "&" "'" "(" ")" "*" "+" "," ";" "=" %encoded
    // I've never seen a (non-IDN) hostname other than: ALPHA DIGIT . - _
    URI.invalid_hostname_characters = /[^a-zA-Z0-9\.\-:_]/;
    // map DOM Elements to their URI attribute
    URI.domAttributes = {
        'a': 'href',
        'blockquote': 'cite',
        'link': 'href',
        'base': 'href',
        'script': 'src',
        'form': 'action',
        'img': 'src',
        'area': 'href',
        'iframe': 'src',
        'embed': 'src',
        'source': 'src',
        'track': 'src',
        'input': 'src',
        'audio': 'src',
        'video': 'src'
    };
    URI.getDomAttribute = function(node) {
        if (!node || !node.nodeName) {
            return undefined;
        }
        var nodeName = node.nodeName.toLowerCase();
        // <input> should only expose src for type="image"
        if (nodeName === 'input' && node.type !== 'image') {
            return undefined;
        }
        return URI.domAttributes[nodeName];
    };
    function escapeForDumbFirefox36(value) {
        // https://github.com/medialize/URI.js/issues/91
        return escape(value);
    }
    // encoding / decoding according to RFC3986
    function strictEncodeURIComponent(string) {
        // see https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/encodeURIComponent
        return encodeURIComponent(string).replace(/[!'()*]/g, escapeForDumbFirefox36).replace(/\*/g, '%2A');
    }
    URI.encode = strictEncodeURIComponent;
    URI.decode = decodeURIComponent;
    URI.iso8859 = function() {
        URI.encode = escape;
        URI.decode = unescape;
    };
    URI.unicode = function() {
        URI.encode = strictEncodeURIComponent;
        URI.decode = decodeURIComponent;
    };
    URI.characters = {
        pathname: {
            encode: {
                // RFC3986 2.1: For consistency, URI producers and normalizers should
                // use uppercase hexadecimal digits for all percent-encodings.
                expression: /%(24|26|2B|2C|3B|3D|3A|40)/ig,
                map: {
                    // -._~!'()*
                    '%24': '$',
                    '%26': '&',
                    '%2B': '+',
                    '%2C': ',',
                    '%3B': ';',
                    '%3D': '=',
                    '%3A': ':',
                    '%40': '@'
                }
            },
            decode: {
                expression: /[\/\?#]/g,
                map: {
                    '/': '%2F',
                    '?': '%3F',
                    '#': '%23'
                }
            }
        },
        reserved: {
            encode: {
                // RFC3986 2.1: For consistency, URI producers and normalizers should
                // use uppercase hexadecimal digits for all percent-encodings.
                expression: /%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,
                map: {
                    // gen-delims
                    '%3A': ':',
                    '%2F': '/',
                    '%3F': '?',
                    '%23': '#',
                    '%5B': '[',
                    '%5D': ']',
                    '%40': '@',
                    // sub-delims
                    '%21': '!',
                    '%24': '$',
                    '%26': '&',
                    '%27': '\'',
                    '%28': '(',
                    '%29': ')',
                    '%2A': '*',
                    '%2B': '+',
                    '%2C': ',',
                    '%3B': ';',
                    '%3D': '='
                }
            }
        },
        urnpath: {
            // The characters under `encode` are the characters called out by RFC 2141 as being acceptable
            // for usage in a URN. RFC2141 also calls out "-", ".", and "_" as acceptable characters, but
            // these aren't encoded by encodeURIComponent, so we don't have to call them out here. Also
            // note that the colon character is not featured in the encoding map; this is because URI.js
            // gives the colons in URNs semantic meaning as the delimiters of path segements, and so it
            // should not appear unencoded in a segment itself.
            // See also the note above about RFC3986 and capitalalized hex digits.
            encode: {
                expression: /%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,
                map: {
                    '%21': '!',
                    '%24': '$',
                    '%27': '\'',
                    '%28': '(',
                    '%29': ')',
                    '%2A': '*',
                    '%2B': '+',
                    '%2C': ',',
                    '%3B': ';',
                    '%3D': '=',
                    '%40': '@'
                }
            },
            // These characters are the characters called out by RFC2141 as "reserved" characters that
            // should never appear in a URN, plus the colon character (see note above).
            decode: {
                expression: /[\/\?#:]/g,
                map: {
                    '/': '%2F',
                    '?': '%3F',
                    '#': '%23',
                    ':': '%3A'
                }
            }
        }
    };
    URI.encodeQuery = function(string, escapeQuerySpace) {
        var escaped = URI.encode(string + '');
        if (escapeQuerySpace === undefined) {
            escapeQuerySpace = URI.escapeQuerySpace;
        }
        return escapeQuerySpace ? escaped.replace(/%20/g, '+') : escaped;
    };
    URI.decodeQuery = function(string, escapeQuerySpace) {
        string += '';
        if (escapeQuerySpace === undefined) {
            escapeQuerySpace = URI.escapeQuerySpace;
        }
        try {
            return URI.decode(escapeQuerySpace ? string.replace(/\+/g, '%20') : string);
        } catch (e) {
            // we're not going to mess with weird encodings,
            // give up and return the undecoded original string
            // see https://github.com/medialize/URI.js/issues/87
            // see https://github.com/medialize/URI.js/issues/92
            return string;
        }
    };
    // generate encode/decode path functions
    var _parts = {
        'encode': 'encode',
        'decode': 'decode'
    };
    var _part;
    var generateAccessor = function(_group, _part) {
        return function(string) {
            try {
                return URI[_part](string + '').replace(URI.characters[_group][_part].expression, function(c) {
                    return URI.characters[_group][_part].map[c];
                });
            } catch (e) {
                // we're not going to mess with weird encodings,
                // give up and return the undecoded original string
                // see https://github.com/medialize/URI.js/issues/87
                // see https://github.com/medialize/URI.js/issues/92
                return string;
            }
        };
    };
    for(_part in _parts){
        URI[_part + 'PathSegment'] = generateAccessor('pathname', _parts[_part]);
        URI[_part + 'UrnPathSegment'] = generateAccessor('urnpath', _parts[_part]);
    }
    var generateSegmentedPathFunction = function(_sep, _codingFuncName, _innerCodingFuncName) {
        return function(string) {
            // Why pass in names of functions, rather than the function objects themselves? The
            // definitions of some functions (but in particular, URI.decode) will occasionally change due
            // to URI.js having ISO8859 and Unicode modes. Passing in the name and getting it will ensure
            // that the functions we use here are "fresh".
            var actualCodingFunc;
            if (!_innerCodingFuncName) {
                actualCodingFunc = URI[_codingFuncName];
            } else {
                actualCodingFunc = function(string) {
                    return URI[_codingFuncName](URI[_innerCodingFuncName](string));
                };
            }
            var segments = (string + '').split(_sep);
            for(var i = 0, length = segments.length; i < length; i++){
                segments[i] = actualCodingFunc(segments[i]);
            }
            return segments.join(_sep);
        };
    };
    // This takes place outside the above loop because we don't want, e.g., encodeUrnPath functions.
    URI.decodePath = generateSegmentedPathFunction('/', 'decodePathSegment');
    URI.decodeUrnPath = generateSegmentedPathFunction(':', 'decodeUrnPathSegment');
    URI.recodePath = generateSegmentedPathFunction('/', 'encodePathSegment', 'decode');
    URI.recodeUrnPath = generateSegmentedPathFunction(':', 'encodeUrnPathSegment', 'decode');
    URI.encodeReserved = generateAccessor('reserved', 'encode');
    URI.parse = function(string, parts) {
        var pos;
        if (!parts) {
            parts = {
                preventInvalidHostname: URI.preventInvalidHostname
            };
        }
        string = string.replace(URI.leading_whitespace_expression, '');
        // https://infra.spec.whatwg.org/#ascii-tab-or-newline
        string = string.replace(URI.ascii_tab_whitespace, '');
        // [protocol"://"[username[":"password]"@"]hostname[":"port]"/"?][path]["?"querystring]["#"fragment]
        // extract fragment
        pos = string.indexOf('#');
        if (pos > -1) {
            // escaping?
            parts.fragment = string.substring(pos + 1) || null;
            string = string.substring(0, pos);
        }
        // extract query
        pos = string.indexOf('?');
        if (pos > -1) {
            // escaping?
            parts.query = string.substring(pos + 1) || null;
            string = string.substring(0, pos);
        }
        // slashes and backslashes have lost all meaning for the web protocols (https, http, wss, ws)
        string = string.replace(/^(https?|ftp|wss?)?:+[/\\]*/i, '$1://');
        // slashes and backslashes have lost all meaning for scheme relative URLs
        string = string.replace(/^[/\\]{2,}/i, '//');
        // extract protocol
        if (string.substring(0, 2) === '//') {
            // relative-scheme
            parts.protocol = null;
            string = string.substring(2);
            // extract "user:pass@host:port"
            string = URI.parseAuthority(string, parts);
        } else {
            pos = string.indexOf(':');
            if (pos > -1) {
                parts.protocol = string.substring(0, pos) || null;
                if (parts.protocol && !parts.protocol.match(URI.protocol_expression)) {
                    // : may be within the path
                    parts.protocol = undefined;
                } else if (string.substring(pos + 1, pos + 3).replace(/\\/g, '/') === '//') {
                    string = string.substring(pos + 3);
                    // extract "user:pass@host:port"
                    string = URI.parseAuthority(string, parts);
                } else {
                    string = string.substring(pos + 1);
                    parts.urn = true;
                }
            }
        }
        // what's left must be the path
        parts.path = string;
        // and we're done
        return parts;
    };
    URI.parseHost = function(string, parts) {
        if (!string) {
            string = '';
        }
        // Copy chrome, IE, opera backslash-handling behavior.
        // Back slashes before the query string get converted to forward slashes
        // See: https://github.com/joyent/node/blob/386fd24f49b0e9d1a8a076592a404168faeecc34/lib/url.js#L115-L124
        // See: https://code.google.com/p/chromium/issues/detail?id=25916
        // https://github.com/medialize/URI.js/pull/233
        string = string.replace(/\\/g, '/');
        // extract host:port
        var pos = string.indexOf('/');
        var bracketPos;
        var t;
        if (pos === -1) {
            pos = string.length;
        }
        if (string.charAt(0) === '[') {
            // IPv6 host - http://tools.ietf.org/html/draft-ietf-6man-text-addr-representation-04#section-6
            // I claim most client software breaks on IPv6 anyways. To simplify things, URI only accepts
            // IPv6+port in the format [2001:db8::1]:80 (for the time being)
            bracketPos = string.indexOf(']');
            parts.hostname = string.substring(1, bracketPos) || null;
            parts.port = string.substring(bracketPos + 2, pos) || null;
            if (parts.port === '/') {
                parts.port = null;
            }
        } else {
            var firstColon = string.indexOf(':');
            var firstSlash = string.indexOf('/');
            var nextColon = string.indexOf(':', firstColon + 1);
            if (nextColon !== -1 && (firstSlash === -1 || nextColon < firstSlash)) {
                // IPv6 host contains multiple colons - but no port
                // this notation is actually not allowed by RFC 3986, but we're a liberal parser
                parts.hostname = string.substring(0, pos) || null;
                parts.port = null;
            } else {
                t = string.substring(0, pos).split(':');
                parts.hostname = t[0] || null;
                parts.port = t[1] || null;
            }
        }
        if (parts.hostname && string.substring(pos).charAt(0) !== '/') {
            pos++;
            string = '/' + string;
        }
        if (parts.preventInvalidHostname) {
            URI.ensureValidHostname(parts.hostname, parts.protocol);
        }
        if (parts.port) {
            URI.ensureValidPort(parts.port);
        }
        return string.substring(pos) || '/';
    };
    URI.parseAuthority = function(string, parts) {
        string = URI.parseUserinfo(string, parts);
        return URI.parseHost(string, parts);
    };
    URI.parseUserinfo = function(string, parts) {
        // extract username:password
        var _string = string;
        var firstBackSlash = string.indexOf('\\');
        if (firstBackSlash !== -1) {
            string = string.replace(/\\/g, '/');
        }
        var firstSlash = string.indexOf('/');
        var pos = string.lastIndexOf('@', firstSlash > -1 ? firstSlash : string.length - 1);
        var t;
        // authority@ must come before /path or \path
        if (pos > -1 && (firstSlash === -1 || pos < firstSlash)) {
            t = string.substring(0, pos).split(':');
            parts.username = t[0] ? URI.decode(t[0]) : null;
            t.shift();
            parts.password = t[0] ? URI.decode(t.join(':')) : null;
            string = _string.substring(pos + 1);
        } else {
            parts.username = null;
            parts.password = null;
        }
        return string;
    };
    URI.parseQuery = function(string, escapeQuerySpace) {
        if (!string) {
            return {};
        }
        // throw out the funky business - "?"[name"="value"&"]+
        string = string.replace(/&+/g, '&').replace(/^\?*&*|&+$/g, '');
        if (!string) {
            return {};
        }
        var items = {};
        var splits = string.split('&');
        var length = splits.length;
        var v, name, value;
        for(var i = 0; i < length; i++){
            v = splits[i].split('=');
            name = URI.decodeQuery(v.shift(), escapeQuerySpace);
            // no "=" is null according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#collect-url-parameters
            value = v.length ? URI.decodeQuery(v.join('='), escapeQuerySpace) : null;
            if (name === '__proto__') {
                continue;
            } else if (hasOwn.call(items, name)) {
                if (typeof items[name] === 'string' || items[name] === null) {
                    items[name] = [
                        items[name]
                    ];
                }
                items[name].push(value);
            } else {
                items[name] = value;
            }
        }
        return items;
    };
    URI.build = function(parts) {
        var t = '';
        var requireAbsolutePath = false;
        if (parts.protocol) {
            t += parts.protocol + ':';
        }
        if (!parts.urn && (t || parts.hostname)) {
            t += '//';
            requireAbsolutePath = true;
        }
        t += URI.buildAuthority(parts) || '';
        if (typeof parts.path === 'string') {
            if (parts.path.charAt(0) !== '/' && requireAbsolutePath) {
                t += '/';
            }
            t += parts.path;
        }
        if (typeof parts.query === 'string' && parts.query) {
            t += '?' + parts.query;
        }
        if (typeof parts.fragment === 'string' && parts.fragment) {
            t += '#' + parts.fragment;
        }
        return t;
    };
    URI.buildHost = function(parts) {
        var t = '';
        if (!parts.hostname) {
            return '';
        } else if (URI.ip6_expression.test(parts.hostname)) {
            t += '[' + parts.hostname + ']';
        } else {
            t += parts.hostname;
        }
        if (parts.port) {
            t += ':' + parts.port;
        }
        return t;
    };
    URI.buildAuthority = function(parts) {
        return URI.buildUserinfo(parts) + URI.buildHost(parts);
    };
    URI.buildUserinfo = function(parts) {
        var t = '';
        if (parts.username) {
            t += URI.encode(parts.username);
        }
        if (parts.password) {
            t += ':' + URI.encode(parts.password);
        }
        if (t) {
            t += '@';
        }
        return t;
    };
    URI.buildQuery = function(data, duplicateQueryParameters, escapeQuerySpace) {
        // according to http://tools.ietf.org/html/rfc3986 or http://labs.apache.org/webarch/uri/rfc/rfc3986.html
        // being »-._~!$&'()*+,;=:@/?« %HEX and alnum are allowed
        // the RFC explicitly states ?/foo being a valid use case, no mention of parameter syntax!
        // URI.js treats the query string as being application/x-www-form-urlencoded
        // see http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type
        var t = '';
        var unique, key, i, length;
        for(key in data){
            if (key === '__proto__') {
                continue;
            } else if (hasOwn.call(data, key)) {
                if (isArray(data[key])) {
                    unique = {};
                    for(i = 0, length = data[key].length; i < length; i++){
                        if (data[key][i] !== undefined && unique[data[key][i] + ''] === undefined) {
                            t += '&' + URI.buildQueryParameter(key, data[key][i], escapeQuerySpace);
                            if (duplicateQueryParameters !== true) {
                                unique[data[key][i] + ''] = true;
                            }
                        }
                    }
                } else if (data[key] !== undefined) {
                    t += '&' + URI.buildQueryParameter(key, data[key], escapeQuerySpace);
                }
            }
        }
        return t.substring(1);
    };
    URI.buildQueryParameter = function(name, value, escapeQuerySpace) {
        // http://www.w3.org/TR/REC-html40/interact/forms.html#form-content-type -- application/x-www-form-urlencoded
        // don't append "=" for null values, according to http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#url-parameter-serialization
        return URI.encodeQuery(name, escapeQuerySpace) + (value !== null ? '=' + URI.encodeQuery(value, escapeQuerySpace) : '');
    };
    URI.addQuery = function(data, name, value) {
        if (typeof name === 'object') {
            for(var key in name){
                if (hasOwn.call(name, key)) {
                    URI.addQuery(data, key, name[key]);
                }
            }
        } else if (typeof name === 'string') {
            if (data[name] === undefined) {
                data[name] = value;
                return;
            } else if (typeof data[name] === 'string') {
                data[name] = [
                    data[name]
                ];
            }
            if (!isArray(value)) {
                value = [
                    value
                ];
            }
            data[name] = (data[name] || []).concat(value);
        } else {
            throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
        }
    };
    URI.setQuery = function(data, name, value) {
        if (typeof name === 'object') {
            for(var key in name){
                if (hasOwn.call(name, key)) {
                    URI.setQuery(data, key, name[key]);
                }
            }
        } else if (typeof name === 'string') {
            data[name] = value === undefined ? null : value;
        } else {
            throw new TypeError('URI.setQuery() accepts an object, string as the name parameter');
        }
    };
    URI.removeQuery = function(data, name, value) {
        var i, length, key;
        if (isArray(name)) {
            for(i = 0, length = name.length; i < length; i++){
                data[name[i]] = undefined;
            }
        } else if (getType(name) === 'RegExp') {
            for(key in data){
                if (name.test(key)) {
                    data[key] = undefined;
                }
            }
        } else if (typeof name === 'object') {
            for(key in name){
                if (hasOwn.call(name, key)) {
                    URI.removeQuery(data, key, name[key]);
                }
            }
        } else if (typeof name === 'string') {
            if (value !== undefined) {
                if (getType(value) === 'RegExp') {
                    if (!isArray(data[name]) && value.test(data[name])) {
                        data[name] = undefined;
                    } else {
                        data[name] = filterArrayValues(data[name], value);
                    }
                } else if (data[name] === String(value) && (!isArray(value) || value.length === 1)) {
                    data[name] = undefined;
                } else if (isArray(data[name])) {
                    data[name] = filterArrayValues(data[name], value);
                }
            } else {
                data[name] = undefined;
            }
        } else {
            throw new TypeError('URI.removeQuery() accepts an object, string, RegExp as the first parameter');
        }
    };
    URI.hasQuery = function(data, name, value, withinArray) {
        switch(getType(name)){
            case 'String':
                break;
            case 'RegExp':
                for(var key in data){
                    if (hasOwn.call(data, key)) {
                        if (name.test(key) && (value === undefined || URI.hasQuery(data, key, value))) {
                            return true;
                        }
                    }
                }
                return false;
            case 'Object':
                for(var _key in name){
                    if (hasOwn.call(name, _key)) {
                        if (!URI.hasQuery(data, _key, name[_key])) {
                            return false;
                        }
                    }
                }
                return true;
            default:
                throw new TypeError('URI.hasQuery() accepts a string, regular expression or object as the name parameter');
        }
        switch(getType(value)){
            case 'Undefined':
                // true if exists (but may be empty)
                return name in data; // data[name] !== undefined;
            case 'Boolean':
                // true if exists and non-empty
                var _booly = Boolean(isArray(data[name]) ? data[name].length : data[name]);
                return value === _booly;
            case 'Function':
                // allow complex comparison
                return !!value(data[name], name, data);
            case 'Array':
                if (!isArray(data[name])) {
                    return false;
                }
                var op = withinArray ? arrayContains : arraysEqual;
                return op(data[name], value);
            case 'RegExp':
                if (!isArray(data[name])) {
                    return Boolean(data[name] && data[name].match(value));
                }
                if (!withinArray) {
                    return false;
                }
                return arrayContains(data[name], value);
            case 'Number':
                value = String(value);
            /* falls through */ case 'String':
                if (!isArray(data[name])) {
                    return data[name] === value;
                }
                if (!withinArray) {
                    return false;
                }
                return arrayContains(data[name], value);
            default:
                throw new TypeError('URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter');
        }
    };
    URI.joinPaths = function() {
        var input = [];
        var segments = [];
        var nonEmptySegments = 0;
        for(var i = 0; i < arguments.length; i++){
            var url = new URI(arguments[i]);
            input.push(url);
            var _segments = url.segment();
            for(var s = 0; s < _segments.length; s++){
                if (typeof _segments[s] === 'string') {
                    segments.push(_segments[s]);
                }
                if (_segments[s]) {
                    nonEmptySegments++;
                }
            }
        }
        if (!segments.length || !nonEmptySegments) {
            return new URI('');
        }
        var uri = new URI('').segment(segments);
        if (input[0].path() === '' || input[0].path().slice(0, 1) === '/') {
            uri.path('/' + uri.path());
        }
        return uri.normalize();
    };
    URI.commonPath = function(one, two) {
        var length = Math.min(one.length, two.length);
        var pos;
        // find first non-matching character
        for(pos = 0; pos < length; pos++){
            if (one.charAt(pos) !== two.charAt(pos)) {
                pos--;
                break;
            }
        }
        if (pos < 1) {
            return one.charAt(0) === two.charAt(0) && one.charAt(0) === '/' ? '/' : '';
        }
        // revert to last /
        if (one.charAt(pos) !== '/' || two.charAt(pos) !== '/') {
            pos = one.substring(0, pos).lastIndexOf('/');
        }
        return one.substring(0, pos + 1);
    };
    URI.withinString = function(string, callback, options) {
        options || (options = {});
        var _start = options.start || URI.findUri.start;
        var _end = options.end || URI.findUri.end;
        var _trim = options.trim || URI.findUri.trim;
        var _parens = options.parens || URI.findUri.parens;
        var _attributeOpen = /[a-z0-9-]=["']?$/i;
        _start.lastIndex = 0;
        while(true){
            var match = _start.exec(string);
            if (!match) {
                break;
            }
            var start = match.index;
            if (options.ignoreHtml) {
                // attribut(e=["']?$)
                var attributeOpen = string.slice(Math.max(start - 3, 0), start);
                if (attributeOpen && _attributeOpen.test(attributeOpen)) {
                    continue;
                }
            }
            var end = start + string.slice(start).search(_end);
            var slice = string.slice(start, end);
            // make sure we include well balanced parens
            var parensEnd = -1;
            while(true){
                var parensMatch = _parens.exec(slice);
                if (!parensMatch) {
                    break;
                }
                var parensMatchEnd = parensMatch.index + parensMatch[0].length;
                parensEnd = Math.max(parensEnd, parensMatchEnd);
            }
            if (parensEnd > -1) {
                slice = slice.slice(0, parensEnd) + slice.slice(parensEnd).replace(_trim, '');
            } else {
                slice = slice.replace(_trim, '');
            }
            if (slice.length <= match[0].length) {
                continue;
            }
            if (options.ignore && options.ignore.test(slice)) {
                continue;
            }
            end = start + slice.length;
            var result = callback(slice, start, end, string);
            if (result === undefined) {
                _start.lastIndex = end;
                continue;
            }
            result = String(result);
            string = string.slice(0, start) + result + string.slice(end);
            _start.lastIndex = start + result.length;
        }
        _start.lastIndex = 0;
        return string;
    };
    URI.ensureValidHostname = function(v, protocol) {
        // Theoretically URIs allow percent-encoding in Hostnames (according to RFC 3986)
        // they are not part of DNS and therefore ignored by URI.js
        var hasHostname = !!v; // not null and not an empty string
        var hasProtocol = !!protocol;
        var rejectEmptyHostname = false;
        if (hasProtocol) {
            rejectEmptyHostname = arrayContains(URI.hostProtocols, protocol);
        }
        if (rejectEmptyHostname && !hasHostname) {
            throw new TypeError('Hostname cannot be empty, if protocol is ' + protocol);
        } else if (v && v.match(URI.invalid_hostname_characters)) {
            // test punycode
            if (!punycode) {
                throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');
            }
            if (punycode.toASCII(v).match(URI.invalid_hostname_characters)) {
                throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-:_]');
            }
        }
    };
    URI.ensureValidPort = function(v) {
        if (!v) {
            return;
        }
        var port = Number(v);
        if (isInteger(port) && port > 0 && port < 65536) {
            return;
        }
        throw new TypeError('Port "' + v + '" is not a valid port');
    };
    // noConflict
    URI.noConflict = function(removeAll) {
        if (removeAll) {
            var unconflicted = {
                URI: this.noConflict()
            };
            if (root.URITemplate && typeof root.URITemplate.noConflict === 'function') {
                unconflicted.URITemplate = root.URITemplate.noConflict();
            }
            if (root.IPv6 && typeof root.IPv6.noConflict === 'function') {
                unconflicted.IPv6 = root.IPv6.noConflict();
            }
            if (root.SecondLevelDomains && typeof root.SecondLevelDomains.noConflict === 'function') {
                unconflicted.SecondLevelDomains = root.SecondLevelDomains.noConflict();
            }
            return unconflicted;
        } else if (root.URI === this) {
            root.URI = _URI;
        }
        return this;
    };
    p.build = function(deferBuild) {
        if (deferBuild === true) {
            this._deferred_build = true;
        } else if (deferBuild === undefined || this._deferred_build) {
            this._string = URI.build(this._parts);
            this._deferred_build = false;
        }
        return this;
    };
    p.clone = function() {
        return new URI(this);
    };
    p.valueOf = p.toString = function() {
        return this.build(false)._string;
    };
    function generateSimpleAccessor(_part) {
        return function(v, build) {
            if (v === undefined) {
                return this._parts[_part] || '';
            } else {
                this._parts[_part] = v || null;
                this.build(!build);
                return this;
            }
        };
    }
    function generatePrefixAccessor(_part, _key) {
        return function(v, build) {
            if (v === undefined) {
                return this._parts[_part] || '';
            } else {
                if (v !== null) {
                    v = v + '';
                    if (v.charAt(0) === _key) {
                        v = v.substring(1);
                    }
                }
                this._parts[_part] = v;
                this.build(!build);
                return this;
            }
        };
    }
    p.protocol = generateSimpleAccessor('protocol');
    p.username = generateSimpleAccessor('username');
    p.password = generateSimpleAccessor('password');
    p.hostname = generateSimpleAccessor('hostname');
    p.port = generateSimpleAccessor('port');
    p.query = generatePrefixAccessor('query', '?');
    p.fragment = generatePrefixAccessor('fragment', '#');
    p.search = function(v, build) {
        var t = this.query(v, build);
        return typeof t === 'string' && t.length ? '?' + t : t;
    };
    p.hash = function(v, build) {
        var t = this.fragment(v, build);
        return typeof t === 'string' && t.length ? '#' + t : t;
    };
    p.pathname = function(v, build) {
        if (v === undefined || v === true) {
            var res = this._parts.path || (this._parts.hostname ? '/' : '');
            return v ? (this._parts.urn ? URI.decodeUrnPath : URI.decodePath)(res) : res;
        } else {
            if (this._parts.urn) {
                this._parts.path = v ? URI.recodeUrnPath(v) : '';
            } else {
                this._parts.path = v ? URI.recodePath(v) : '/';
            }
            this.build(!build);
            return this;
        }
    };
    p.path = p.pathname;
    p.href = function(href, build) {
        var key;
        if (href === undefined) {
            return this.toString();
        }
        this._string = '';
        this._parts = URI._parts();
        var _URI = href instanceof URI;
        var _object = typeof href === 'object' && (href.hostname || href.path || href.pathname);
        if (href.nodeName) {
            var attribute = URI.getDomAttribute(href);
            href = href[attribute] || '';
            _object = false;
        }
        // window.location is reported to be an object, but it's not the sort
        // of object we're looking for:
        // * location.protocol ends with a colon
        // * location.query != object.search
        // * location.hash != object.fragment
        // simply serializing the unknown object should do the trick
        // (for location, not for everything...)
        if (!_URI && _object && href.pathname !== undefined) {
            href = href.toString();
        }
        if (typeof href === 'string' || href instanceof String) {
            this._parts = URI.parse(String(href), this._parts);
        } else if (_URI || _object) {
            var src = _URI ? href._parts : href;
            for(key in src){
                if (key === 'query') {
                    continue;
                }
                if (hasOwn.call(this._parts, key)) {
                    this._parts[key] = src[key];
                }
            }
            if (src.query) {
                this.query(src.query, false);
            }
        } else {
            throw new TypeError('invalid input');
        }
        this.build(!build);
        return this;
    };
    // identification accessors
    p.is = function(what) {
        var ip = false;
        var ip4 = false;
        var ip6 = false;
        var name = false;
        var sld = false;
        var idn = false;
        var punycode = false;
        var relative = !this._parts.urn;
        if (this._parts.hostname) {
            relative = false;
            ip4 = URI.ip4_expression.test(this._parts.hostname);
            ip6 = URI.ip6_expression.test(this._parts.hostname);
            ip = ip4 || ip6;
            name = !ip;
            sld = name && SLD && SLD.has(this._parts.hostname);
            idn = name && URI.idn_expression.test(this._parts.hostname);
            punycode = name && URI.punycode_expression.test(this._parts.hostname);
        }
        switch(what.toLowerCase()){
            case 'relative':
                return relative;
            case 'absolute':
                return !relative;
            // hostname identification
            case 'domain':
            case 'name':
                return name;
            case 'sld':
                return sld;
            case 'ip':
                return ip;
            case 'ip4':
            case 'ipv4':
            case 'inet4':
                return ip4;
            case 'ip6':
            case 'ipv6':
            case 'inet6':
                return ip6;
            case 'idn':
                return idn;
            case 'url':
                return !this._parts.urn;
            case 'urn':
                return !!this._parts.urn;
            case 'punycode':
                return punycode;
        }
        return null;
    };
    // component specific input validation
    var _protocol = p.protocol;
    var _port = p.port;
    var _hostname = p.hostname;
    p.protocol = function(v, build) {
        if (v) {
            // accept trailing ://
            v = v.replace(/:(\/\/)?$/, '');
            if (!v.match(URI.protocol_expression)) {
                throw new TypeError('Protocol "' + v + '" contains characters other than [A-Z0-9.+-] or doesn\'t start with [A-Z]');
            }
        }
        return _protocol.call(this, v, build);
    };
    p.scheme = p.protocol;
    p.port = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }
        if (v !== undefined) {
            if (v === 0) {
                v = null;
            }
            if (v) {
                v += '';
                if (v.charAt(0) === ':') {
                    v = v.substring(1);
                }
                URI.ensureValidPort(v);
            }
        }
        return _port.call(this, v, build);
    };
    p.hostname = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }
        if (v !== undefined) {
            var x = {
                preventInvalidHostname: this._parts.preventInvalidHostname
            };
            var res = URI.parseHost(v, x);
            if (res !== '/') {
                throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
            }
            v = x.hostname;
            if (this._parts.preventInvalidHostname) {
                URI.ensureValidHostname(v, this._parts.protocol);
            }
        }
        return _hostname.call(this, v, build);
    };
    // compound accessors
    p.origin = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }
        if (v === undefined) {
            var protocol = this.protocol();
            var authority = this.authority();
            if (!authority) {
                return '';
            }
            return (protocol ? protocol + '://' : '') + this.authority();
        } else {
            var origin = URI(v);
            this.protocol(origin.protocol()).authority(origin.authority()).build(!build);
            return this;
        }
    };
    p.host = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }
        if (v === undefined) {
            return this._parts.hostname ? URI.buildHost(this._parts) : '';
        } else {
            var res = URI.parseHost(v, this._parts);
            if (res !== '/') {
                throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
            }
            this.build(!build);
            return this;
        }
    };
    p.authority = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }
        if (v === undefined) {
            return this._parts.hostname ? URI.buildAuthority(this._parts) : '';
        } else {
            var res = URI.parseAuthority(v, this._parts);
            if (res !== '/') {
                throw new TypeError('Hostname "' + v + '" contains characters other than [A-Z0-9.-]');
            }
            this.build(!build);
            return this;
        }
    };
    p.userinfo = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }
        if (v === undefined) {
            var t = URI.buildUserinfo(this._parts);
            return t ? t.substring(0, t.length - 1) : t;
        } else {
            if (v[v.length - 1] !== '@') {
                v += '@';
            }
            URI.parseUserinfo(v, this._parts);
            this.build(!build);
            return this;
        }
    };
    p.resource = function(v, build) {
        var parts;
        if (v === undefined) {
            return this.path() + this.search() + this.hash();
        }
        parts = URI.parse(v);
        this._parts.path = parts.path;
        this._parts.query = parts.query;
        this._parts.fragment = parts.fragment;
        this.build(!build);
        return this;
    };
    // fraction accessors
    p.subdomain = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }
        // convenience, return "www" from "www.example.org"
        if (v === undefined) {
            if (!this._parts.hostname || this.is('IP')) {
                return '';
            }
            // grab domain and add another segment
            var end = this._parts.hostname.length - this.domain().length - 1;
            return this._parts.hostname.substring(0, end) || '';
        } else {
            var e = this._parts.hostname.length - this.domain().length;
            var sub = this._parts.hostname.substring(0, e);
            var replace = new RegExp('^' + escapeRegEx(sub));
            if (v && v.charAt(v.length - 1) !== '.') {
                v += '.';
            }
            if (v.indexOf(':') !== -1) {
                throw new TypeError('Domains cannot contain colons');
            }
            if (v) {
                URI.ensureValidHostname(v, this._parts.protocol);
            }
            this._parts.hostname = this._parts.hostname.replace(replace, v);
            this.build(!build);
            return this;
        }
    };
    p.domain = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }
        if (typeof v === 'boolean') {
            build = v;
            v = undefined;
        }
        // convenience, return "example.org" from "www.example.org"
        if (v === undefined) {
            if (!this._parts.hostname || this.is('IP')) {
                return '';
            }
            // if hostname consists of 1 or 2 segments, it must be the domain
            var t = this._parts.hostname.match(/\./g);
            if (t && t.length < 2) {
                return this._parts.hostname;
            }
            // grab tld and add another segment
            var end = this._parts.hostname.length - this.tld(build).length - 1;
            end = this._parts.hostname.lastIndexOf('.', end - 1) + 1;
            return this._parts.hostname.substring(end) || '';
        } else {
            if (!v) {
                throw new TypeError('cannot set domain empty');
            }
            if (v.indexOf(':') !== -1) {
                throw new TypeError('Domains cannot contain colons');
            }
            URI.ensureValidHostname(v, this._parts.protocol);
            if (!this._parts.hostname || this.is('IP')) {
                this._parts.hostname = v;
            } else {
                var replace = new RegExp(escapeRegEx(this.domain()) + '$');
                this._parts.hostname = this._parts.hostname.replace(replace, v);
            }
            this.build(!build);
            return this;
        }
    };
    p.tld = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }
        if (typeof v === 'boolean') {
            build = v;
            v = undefined;
        }
        // return "org" from "www.example.org"
        if (v === undefined) {
            if (!this._parts.hostname || this.is('IP')) {
                return '';
            }
            var pos = this._parts.hostname.lastIndexOf('.');
            var tld = this._parts.hostname.substring(pos + 1);
            if (build !== true && SLD && SLD.list[tld.toLowerCase()]) {
                return SLD.get(this._parts.hostname) || tld;
            }
            return tld;
        } else {
            var replace;
            if (!v) {
                throw new TypeError('cannot set TLD empty');
            } else if (v.match(/[^a-zA-Z0-9-]/)) {
                if (SLD && SLD.is(v)) {
                    replace = new RegExp(escapeRegEx(this.tld()) + '$');
                    this._parts.hostname = this._parts.hostname.replace(replace, v);
                } else {
                    throw new TypeError('TLD "' + v + '" contains characters other than [A-Z0-9]');
                }
            } else if (!this._parts.hostname || this.is('IP')) {
                throw new ReferenceError('cannot set TLD on non-domain host');
            } else {
                replace = new RegExp(escapeRegEx(this.tld()) + '$');
                this._parts.hostname = this._parts.hostname.replace(replace, v);
            }
            this.build(!build);
            return this;
        }
    };
    p.directory = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }
        if (v === undefined || v === true) {
            if (!this._parts.path && !this._parts.hostname) {
                return '';
            }
            if (this._parts.path === '/') {
                return '/';
            }
            var end = this._parts.path.length - this.filename().length - 1;
            var res = this._parts.path.substring(0, end) || (this._parts.hostname ? '/' : '');
            return v ? URI.decodePath(res) : res;
        } else {
            var e = this._parts.path.length - this.filename().length;
            var directory = this._parts.path.substring(0, e);
            var replace = new RegExp('^' + escapeRegEx(directory));
            // fully qualifier directories begin with a slash
            if (!this.is('relative')) {
                if (!v) {
                    v = '/';
                }
                if (v.charAt(0) !== '/') {
                    v = '/' + v;
                }
            }
            // directories always end with a slash
            if (v && v.charAt(v.length - 1) !== '/') {
                v += '/';
            }
            v = URI.recodePath(v);
            this._parts.path = this._parts.path.replace(replace, v);
            this.build(!build);
            return this;
        }
    };
    p.filename = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }
        if (typeof v !== 'string') {
            if (!this._parts.path || this._parts.path === '/') {
                return '';
            }
            var pos = this._parts.path.lastIndexOf('/');
            var res = this._parts.path.substring(pos + 1);
            return v ? URI.decodePathSegment(res) : res;
        } else {
            var mutatedDirectory = false;
            if (v.charAt(0) === '/') {
                v = v.substring(1);
            }
            if (v.match(/\.?\//)) {
                mutatedDirectory = true;
            }
            var replace = new RegExp(escapeRegEx(this.filename()) + '$');
            v = URI.recodePath(v);
            this._parts.path = this._parts.path.replace(replace, v);
            if (mutatedDirectory) {
                this.normalizePath(build);
            } else {
                this.build(!build);
            }
            return this;
        }
    };
    p.suffix = function(v, build) {
        if (this._parts.urn) {
            return v === undefined ? '' : this;
        }
        if (v === undefined || v === true) {
            if (!this._parts.path || this._parts.path === '/') {
                return '';
            }
            var filename = this.filename();
            var pos = filename.lastIndexOf('.');
            var s, res;
            if (pos === -1) {
                return '';
            }
            // suffix may only contain alnum characters (yup, I made this up.)
            s = filename.substring(pos + 1);
            res = /^[a-z0-9%]+$/i.test(s) ? s : '';
            return v ? URI.decodePathSegment(res) : res;
        } else {
            if (v.charAt(0) === '.') {
                v = v.substring(1);
            }
            var suffix = this.suffix();
            var replace;
            if (!suffix) {
                if (!v) {
                    return this;
                }
                this._parts.path += '.' + URI.recodePath(v);
            } else if (!v) {
                replace = new RegExp(escapeRegEx('.' + suffix) + '$');
            } else {
                replace = new RegExp(escapeRegEx(suffix) + '$');
            }
            if (replace) {
                v = URI.recodePath(v);
                this._parts.path = this._parts.path.replace(replace, v);
            }
            this.build(!build);
            return this;
        }
    };
    p.segment = function(segment, v, build) {
        var separator = this._parts.urn ? ':' : '/';
        var path = this.path();
        var absolute = path.substring(0, 1) === '/';
        var segments = path.split(separator);
        if (segment !== undefined && typeof segment !== 'number') {
            build = v;
            v = segment;
            segment = undefined;
        }
        if (segment !== undefined && typeof segment !== 'number') {
            throw new Error('Bad segment "' + segment + '", must be 0-based integer');
        }
        if (absolute) {
            segments.shift();
        }
        if (segment < 0) {
            // allow negative indexes to address from the end
            segment = Math.max(segments.length + segment, 0);
        }
        if (v === undefined) {
            /*jshint laxbreak: true */ return segment === undefined ? segments : segments[segment];
        /*jshint laxbreak: false */ } else if (segment === null || segments[segment] === undefined) {
            if (isArray(v)) {
                segments = [];
                // collapse empty elements within array
                for(var i = 0, l = v.length; i < l; i++){
                    if (!v[i].length && (!segments.length || !segments[segments.length - 1].length)) {
                        continue;
                    }
                    if (segments.length && !segments[segments.length - 1].length) {
                        segments.pop();
                    }
                    segments.push(trimSlashes(v[i]));
                }
            } else if (v || typeof v === 'string') {
                v = trimSlashes(v);
                if (segments[segments.length - 1] === '') {
                    // empty trailing elements have to be overwritten
                    // to prevent results such as /foo//bar
                    segments[segments.length - 1] = v;
                } else {
                    segments.push(v);
                }
            }
        } else {
            if (v) {
                segments[segment] = trimSlashes(v);
            } else {
                segments.splice(segment, 1);
            }
        }
        if (absolute) {
            segments.unshift('');
        }
        return this.path(segments.join(separator), build);
    };
    p.segmentCoded = function(segment, v, build) {
        var segments, i, l;
        if (typeof segment !== 'number') {
            build = v;
            v = segment;
            segment = undefined;
        }
        if (v === undefined) {
            segments = this.segment(segment, v, build);
            if (!isArray(segments)) {
                segments = segments !== undefined ? URI.decode(segments) : undefined;
            } else {
                for(i = 0, l = segments.length; i < l; i++){
                    segments[i] = URI.decode(segments[i]);
                }
            }
            return segments;
        }
        if (!isArray(v)) {
            v = typeof v === 'string' || v instanceof String ? URI.encode(v) : v;
        } else {
            for(i = 0, l = v.length; i < l; i++){
                v[i] = URI.encode(v[i]);
            }
        }
        return this.segment(segment, v, build);
    };
    // mutating query string
    var q = p.query;
    p.query = function(v, build) {
        if (v === true) {
            return URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        } else if (typeof v === 'function') {
            var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
            var result = v.call(this, data);
            this._parts.query = URI.buildQuery(result || data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
            this.build(!build);
            return this;
        } else if (v !== undefined && typeof v !== 'string') {
            this._parts.query = URI.buildQuery(v, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
            this.build(!build);
            return this;
        } else {
            return q.call(this, v, build);
        }
    };
    p.setQuery = function(name, value, build) {
        var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        if (typeof name === 'string' || name instanceof String) {
            data[name] = value !== undefined ? value : null;
        } else if (typeof name === 'object') {
            for(var key in name){
                if (hasOwn.call(name, key)) {
                    data[key] = name[key];
                }
            }
        } else {
            throw new TypeError('URI.addQuery() accepts an object, string as the name parameter');
        }
        this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
        if (typeof name !== 'string') {
            build = value;
        }
        this.build(!build);
        return this;
    };
    p.addQuery = function(name, value, build) {
        var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        URI.addQuery(data, name, value === undefined ? null : value);
        this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
        if (typeof name !== 'string') {
            build = value;
        }
        this.build(!build);
        return this;
    };
    p.removeQuery = function(name, value, build) {
        var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        URI.removeQuery(data, name, value);
        this._parts.query = URI.buildQuery(data, this._parts.duplicateQueryParameters, this._parts.escapeQuerySpace);
        if (typeof name !== 'string') {
            build = value;
        }
        this.build(!build);
        return this;
    };
    p.hasQuery = function(name, value, withinArray) {
        var data = URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace);
        return URI.hasQuery(data, name, value, withinArray);
    };
    p.setSearch = p.setQuery;
    p.addSearch = p.addQuery;
    p.removeSearch = p.removeQuery;
    p.hasSearch = p.hasQuery;
    // sanitizing URLs
    p.normalize = function() {
        if (this._parts.urn) {
            return this.normalizeProtocol(false).normalizePath(false).normalizeQuery(false).normalizeFragment(false).build();
        }
        return this.normalizeProtocol(false).normalizeHostname(false).normalizePort(false).normalizePath(false).normalizeQuery(false).normalizeFragment(false).build();
    };
    p.normalizeProtocol = function(build) {
        if (typeof this._parts.protocol === 'string') {
            this._parts.protocol = this._parts.protocol.toLowerCase();
            this.build(!build);
        }
        return this;
    };
    p.normalizeHostname = function(build) {
        if (this._parts.hostname) {
            if (this.is('IDN') && punycode) {
                this._parts.hostname = punycode.toASCII(this._parts.hostname);
            } else if (this.is('IPv6') && IPv6) {
                this._parts.hostname = IPv6.best(this._parts.hostname);
            }
            this._parts.hostname = this._parts.hostname.toLowerCase();
            this.build(!build);
        }
        return this;
    };
    p.normalizePort = function(build) {
        // remove port of it's the protocol's default
        if (typeof this._parts.protocol === 'string' && this._parts.port === URI.defaultPorts[this._parts.protocol]) {
            this._parts.port = null;
            this.build(!build);
        }
        return this;
    };
    p.normalizePath = function(build) {
        var _path = this._parts.path;
        if (!_path) {
            return this;
        }
        if (this._parts.urn) {
            this._parts.path = URI.recodeUrnPath(this._parts.path);
            this.build(!build);
            return this;
        }
        if (this._parts.path === '/') {
            return this;
        }
        _path = URI.recodePath(_path);
        var _was_relative;
        var _leadingParents = '';
        var _parent, _pos;
        // handle relative paths
        if (_path.charAt(0) !== '/') {
            _was_relative = true;
            _path = '/' + _path;
        }
        // handle relative files (as opposed to directories)
        if (_path.slice(-3) === '/..' || _path.slice(-2) === '/.') {
            _path += '/';
        }
        // resolve simples
        _path = _path.replace(/(\/(\.\/)+)|(\/\.$)/g, '/').replace(/\/{2,}/g, '/');
        // remember leading parents
        if (_was_relative) {
            _leadingParents = _path.substring(1).match(/^(\.\.\/)+/) || '';
            if (_leadingParents) {
                _leadingParents = _leadingParents[0];
            }
        }
        // resolve parents
        while(true){
            _parent = _path.search(/\/\.\.(\/|$)/);
            if (_parent === -1) {
                break;
            } else if (_parent === 0) {
                // top level cannot be relative, skip it
                _path = _path.substring(3);
                continue;
            }
            _pos = _path.substring(0, _parent).lastIndexOf('/');
            if (_pos === -1) {
                _pos = _parent;
            }
            _path = _path.substring(0, _pos) + _path.substring(_parent + 3);
        }
        // revert to relative
        if (_was_relative && this.is('relative')) {
            _path = _leadingParents + _path.substring(1);
        }
        this._parts.path = _path;
        this.build(!build);
        return this;
    };
    p.normalizePathname = p.normalizePath;
    p.normalizeQuery = function(build) {
        if (typeof this._parts.query === 'string') {
            if (!this._parts.query.length) {
                this._parts.query = null;
            } else {
                this.query(URI.parseQuery(this._parts.query, this._parts.escapeQuerySpace));
            }
            this.build(!build);
        }
        return this;
    };
    p.normalizeFragment = function(build) {
        if (!this._parts.fragment) {
            this._parts.fragment = null;
            this.build(!build);
        }
        return this;
    };
    p.normalizeSearch = p.normalizeQuery;
    p.normalizeHash = p.normalizeFragment;
    p.iso8859 = function() {
        // expect unicode input, iso8859 output
        var e = URI.encode;
        var d = URI.decode;
        URI.encode = escape;
        URI.decode = decodeURIComponent;
        try {
            this.normalize();
        } finally{
            URI.encode = e;
            URI.decode = d;
        }
        return this;
    };
    p.unicode = function() {
        // expect iso8859 input, unicode output
        var e = URI.encode;
        var d = URI.decode;
        URI.encode = strictEncodeURIComponent;
        URI.decode = unescape;
        try {
            this.normalize();
        } finally{
            URI.encode = e;
            URI.decode = d;
        }
        return this;
    };
    p.readable = function() {
        var uri = this.clone();
        // removing username, password, because they shouldn't be displayed according to RFC 3986
        uri.username('').password('').normalize();
        var t = '';
        if (uri._parts.protocol) {
            t += uri._parts.protocol + '://';
        }
        if (uri._parts.hostname) {
            if (uri.is('punycode') && punycode) {
                t += punycode.toUnicode(uri._parts.hostname);
                if (uri._parts.port) {
                    t += ':' + uri._parts.port;
                }
            } else {
                t += uri.host();
            }
        }
        if (uri._parts.hostname && uri._parts.path && uri._parts.path.charAt(0) !== '/') {
            t += '/';
        }
        t += uri.path(true);
        if (uri._parts.query) {
            var q = '';
            for(var i = 0, qp = uri._parts.query.split('&'), l = qp.length; i < l; i++){
                var kv = (qp[i] || '').split('=');
                q += '&' + URI.decodeQuery(kv[0], this._parts.escapeQuerySpace).replace(/&/g, '%26');
                if (kv[1] !== undefined) {
                    q += '=' + URI.decodeQuery(kv[1], this._parts.escapeQuerySpace).replace(/&/g, '%26');
                }
            }
            t += '?' + q.substring(1);
        }
        t += URI.decodeQuery(uri.hash(), true);
        return t;
    };
    // resolving relative and absolute URLs
    p.absoluteTo = function(base) {
        var resolved = this.clone();
        var properties = [
            'protocol',
            'username',
            'password',
            'hostname',
            'port'
        ];
        var basedir, i, p;
        if (this._parts.urn) {
            throw new Error('URNs do not have any generally defined hierarchical components');
        }
        if (!(base instanceof URI)) {
            base = new URI(base);
        }
        if (resolved._parts.protocol) {
            // Directly returns even if this._parts.hostname is empty.
            return resolved;
        } else {
            resolved._parts.protocol = base._parts.protocol;
        }
        if (this._parts.hostname) {
            return resolved;
        }
        for(i = 0; p = properties[i]; i++){
            resolved._parts[p] = base._parts[p];
        }
        if (!resolved._parts.path) {
            resolved._parts.path = base._parts.path;
            if (!resolved._parts.query) {
                resolved._parts.query = base._parts.query;
            }
        } else {
            if (resolved._parts.path.substring(-2) === '..') {
                resolved._parts.path += '/';
            }
            if (resolved.path().charAt(0) !== '/') {
                basedir = base.directory();
                basedir = basedir ? basedir : base.path().indexOf('/') === 0 ? '/' : '';
                resolved._parts.path = (basedir ? basedir + '/' : '') + resolved._parts.path;
                resolved.normalizePath();
            }
        }
        resolved.build();
        return resolved;
    };
    p.relativeTo = function(base) {
        var relative = this.clone().normalize();
        var relativeParts, baseParts, common, relativePath, basePath;
        if (relative._parts.urn) {
            throw new Error('URNs do not have any generally defined hierarchical components');
        }
        base = new URI(base).normalize();
        relativeParts = relative._parts;
        baseParts = base._parts;
        relativePath = relative.path();
        basePath = base.path();
        if (relativePath.charAt(0) !== '/') {
            throw new Error('URI is already relative');
        }
        if (basePath.charAt(0) !== '/') {
            throw new Error('Cannot calculate a URI relative to another relative URI');
        }
        if (relativeParts.protocol === baseParts.protocol) {
            relativeParts.protocol = null;
        }
        if (relativeParts.username !== baseParts.username || relativeParts.password !== baseParts.password) {
            return relative.build();
        }
        if (relativeParts.protocol !== null || relativeParts.username !== null || relativeParts.password !== null) {
            return relative.build();
        }
        if (relativeParts.hostname === baseParts.hostname && relativeParts.port === baseParts.port) {
            relativeParts.hostname = null;
            relativeParts.port = null;
        } else {
            return relative.build();
        }
        if (relativePath === basePath) {
            relativeParts.path = '';
            return relative.build();
        }
        // determine common sub path
        common = URI.commonPath(relativePath, basePath);
        // If the paths have nothing in common, return a relative URL with the absolute path.
        if (!common) {
            return relative.build();
        }
        var parents = baseParts.path.substring(common.length).replace(/[^\/]*$/, '').replace(/.*?\//g, '../');
        relativeParts.path = parents + relativeParts.path.substring(common.length) || './';
        return relative.build();
    };
    // comparing URIs
    p.equals = function(uri) {
        var one = this.clone();
        var two = new URI(uri);
        var one_map = {};
        var two_map = {};
        var checked = {};
        var one_query, two_query, key;
        one.normalize();
        two.normalize();
        // exact match
        if (one.toString() === two.toString()) {
            return true;
        }
        // extract query string
        one_query = one.query();
        two_query = two.query();
        one.query('');
        two.query('');
        // definitely not equal if not even non-query parts match
        if (one.toString() !== two.toString()) {
            return false;
        }
        // query parameters have the same length, even if they're permuted
        if (one_query.length !== two_query.length) {
            return false;
        }
        one_map = URI.parseQuery(one_query, this._parts.escapeQuerySpace);
        two_map = URI.parseQuery(two_query, this._parts.escapeQuerySpace);
        for(key in one_map){
            if (hasOwn.call(one_map, key)) {
                if (!isArray(one_map[key])) {
                    if (one_map[key] !== two_map[key]) {
                        return false;
                    }
                } else if (!arraysEqual(one_map[key], two_map[key])) {
                    return false;
                }
                checked[key] = true;
            }
        }
        for(key in two_map){
            if (hasOwn.call(two_map, key)) {
                if (!checked[key]) {
                    // two contains a parameter not present in one
                    return false;
                }
            }
        }
        return true;
    };
    // state
    p.preventInvalidHostname = function(v) {
        this._parts.preventInvalidHostname = !!v;
        return this;
    };
    p.duplicateQueryParameters = function(v) {
        this._parts.duplicateQueryParameters = !!v;
        return this;
    };
    p.escapeQuerySpace = function(v) {
        this._parts.escapeQuerySpace = !!v;
        return this;
    };
    return URI;
});
}),
"[project]/node_modules/mersenne-twister/src/mersenne-twister.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*
  https://github.com/banksean wrapped Makoto Matsumoto and Takuji Nishimura's code in a namespace
  so it's better encapsulated. Now you can have multiple random number generators
  and they won't stomp all over eachother's state.

  If you want to use this as a substitute for Math.random(), use the random()
  method like so:

  var m = new MersenneTwister();
  var randomNumber = m.random();

  You can also call the other genrand_{foo}() methods on the instance.

  If you want to use a specific seed in order to get a repeatable random
  sequence, pass an integer into the constructor:

  var m = new MersenneTwister(123);

  and that will always produce the same random sequence.

  Sean McCullough (banksean@gmail.com)
*/ /*
   A C-program for MT19937, with initialization improved 2002/1/26.
   Coded by Takuji Nishimura and Makoto Matsumoto.

   Before using, initialize the state by using init_seed(seed)
   or init_by_array(init_key, key_length).

   Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
   All rights reserved.

   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions
   are met:

     1. Redistributions of source code must retain the above copyright
        notice, this list of conditions and the following disclaimer.

     2. Redistributions in binary form must reproduce the above copyright
        notice, this list of conditions and the following disclaimer in the
        documentation and/or other materials provided with the distribution.

     3. The names of its contributors may not be used to endorse or promote
        products derived from this software without specific prior written
        permission.

   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
   CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
   EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
   PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
   PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
   LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
   SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


   Any feedback is very welcome.
   http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
   email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
*/ var MersenneTwister = function(seed) {
    if (seed == undefined) {
        seed = new Date().getTime();
    }
    /* Period parameters */ this.N = 624;
    this.M = 397;
    this.MATRIX_A = 0x9908b0df; /* constant vector a */ 
    this.UPPER_MASK = 0x80000000; /* most significant w-r bits */ 
    this.LOWER_MASK = 0x7fffffff; /* least significant r bits */ 
    this.mt = new Array(this.N); /* the array for the state vector */ 
    this.mti = this.N + 1; /* mti==N+1 means mt[N] is not initialized */ 
    if (seed.constructor == Array) {
        this.init_by_array(seed, seed.length);
    } else {
        this.init_seed(seed);
    }
};
/* initializes mt[N] with a seed */ /* origin name init_genrand */ MersenneTwister.prototype.init_seed = function(s) {
    this.mt[0] = s >>> 0;
    for(this.mti = 1; this.mti < this.N; this.mti++){
        var s = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30;
        this.mt[this.mti] = (((s & 0xffff0000) >>> 16) * 1812433253 << 16) + (s & 0x0000ffff) * 1812433253 + this.mti;
        /* See Knuth TAOCP Vol2. 3rd Ed. P.106 for multiplier. */ /* In the previous versions, MSBs of the seed affect   */ /* only MSBs of the array mt[].                        */ /* 2002/01/09 modified by Makoto Matsumoto             */ this.mt[this.mti] >>>= 0;
    /* for >32 bit machines */ }
};
/* initialize by an array with array-length */ /* init_key is the array for initializing keys */ /* key_length is its length */ /* slight change for C++, 2004/2/26 */ MersenneTwister.prototype.init_by_array = function(init_key, key_length) {
    var i, j, k;
    this.init_seed(19650218);
    i = 1;
    j = 0;
    k = this.N > key_length ? this.N : key_length;
    for(; k; k--){
        var s = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
        this.mt[i] = (this.mt[i] ^ (((s & 0xffff0000) >>> 16) * 1664525 << 16) + (s & 0x0000ffff) * 1664525) + init_key[j] + j; /* non linear */ 
        this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */ 
        i++;
        j++;
        if (i >= this.N) {
            this.mt[0] = this.mt[this.N - 1];
            i = 1;
        }
        if (j >= key_length) j = 0;
    }
    for(k = this.N - 1; k; k--){
        var s = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
        this.mt[i] = (this.mt[i] ^ (((s & 0xffff0000) >>> 16) * 1566083941 << 16) + (s & 0x0000ffff) * 1566083941) - i; /* non linear */ 
        this.mt[i] >>>= 0; /* for WORDSIZE > 32 machines */ 
        i++;
        if (i >= this.N) {
            this.mt[0] = this.mt[this.N - 1];
            i = 1;
        }
    }
    this.mt[0] = 0x80000000; /* MSB is 1; assuring non-zero initial array */ 
};
/* generates a random number on [0,0xffffffff]-interval */ /* origin name genrand_int32 */ MersenneTwister.prototype.random_int = function() {
    var y;
    var mag01 = new Array(0x0, this.MATRIX_A);
    /* mag01[x] = x * MATRIX_A  for x=0,1 */ if (this.mti >= this.N) {
        var kk;
        if (this.mti == this.N + 1) /* if init_seed() has not been called, */ this.init_seed(5489); /* a default initial seed is used */ 
        for(kk = 0; kk < this.N - this.M; kk++){
            y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
            this.mt[kk] = this.mt[kk + this.M] ^ y >>> 1 ^ mag01[y & 0x1];
        }
        for(; kk < this.N - 1; kk++){
            y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
            this.mt[kk] = this.mt[kk + (this.M - this.N)] ^ y >>> 1 ^ mag01[y & 0x1];
        }
        y = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK;
        this.mt[this.N - 1] = this.mt[this.M - 1] ^ y >>> 1 ^ mag01[y & 0x1];
        this.mti = 0;
    }
    y = this.mt[this.mti++];
    /* Tempering */ y ^= y >>> 11;
    y ^= y << 7 & 0x9d2c5680;
    y ^= y << 15 & 0xefc60000;
    y ^= y >>> 18;
    return y >>> 0;
};
/* generates a random number on [0,0x7fffffff]-interval */ /* origin name genrand_int31 */ MersenneTwister.prototype.random_int31 = function() {
    return this.random_int() >>> 1;
};
/* generates a random number on [0,1]-real-interval */ /* origin name genrand_real1 */ MersenneTwister.prototype.random_incl = function() {
    return this.random_int() * (1.0 / 4294967295.0);
/* divided by 2^32-1 */ };
/* generates a random number on [0,1)-real-interval */ MersenneTwister.prototype.random = function() {
    return this.random_int() * (1.0 / 4294967296.0);
/* divided by 2^32 */ };
/* generates a random number on (0,1)-real-interval */ /* origin name genrand_real3 */ MersenneTwister.prototype.random_excl = function() {
    return (this.random_int() + 0.5) * (1.0 / 4294967296.0);
/* divided by 2^32 */ };
/* generates a random number on [0,1) with 53-bit resolution*/ /* origin name genrand_res53 */ MersenneTwister.prototype.random_long = function() {
    var a = this.random_int() >>> 5, b = this.random_int() >>> 6;
    return (a * 67108864.0 + b) * (1.0 / 9007199254740992.0);
};
/* These real versions are due to Isaku Wada, 2002/01/09 added */ module.exports = MersenneTwister;
}),
"[project]/node_modules/bitmap-sdf/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = calcSDF;
var INF = 1e20;
function calcSDF(src, options) {
    if (!options) options = {};
    var cutoff = options.cutoff == null ? 0.25 : options.cutoff;
    var radius = options.radius == null ? 8 : options.radius;
    var channel = options.channel || 0;
    var w, h, size, data, intData, stride, ctx, canvas, imgData, i, l;
    // handle image container
    if (ArrayBuffer.isView(src) || Array.isArray(src)) {
        if (!options.width || !options.height) throw Error('For raw data width and height should be provided by options');
        w = options.width, h = options.height;
        data = src;
        if (!options.stride) stride = Math.floor(src.length / w / h);
        else stride = options.stride;
    } else {
        if (window.HTMLCanvasElement && src instanceof window.HTMLCanvasElement) {
            canvas = src;
            ctx = canvas.getContext('2d');
            w = canvas.width, h = canvas.height;
            imgData = ctx.getImageData(0, 0, w, h);
            data = imgData.data;
            stride = 4;
        } else if (window.CanvasRenderingContext2D && src instanceof window.CanvasRenderingContext2D) {
            canvas = src.canvas;
            ctx = src;
            w = canvas.width, h = canvas.height;
            imgData = ctx.getImageData(0, 0, w, h);
            data = imgData.data;
            stride = 4;
        } else if (window.ImageData && src instanceof window.ImageData) {
            imgData = src;
            w = src.width, h = src.height;
            data = imgData.data;
            stride = 4;
        }
    }
    size = Math.max(w, h);
    //convert int data to floats
    if (window.Uint8ClampedArray && data instanceof window.Uint8ClampedArray || window.Uint8Array && data instanceof window.Uint8Array) {
        intData = data;
        data = Array(w * h);
        for(i = 0, l = Math.floor(intData.length / stride); i < l; i++){
            data[i] = intData[i * stride + channel] / 255;
        }
    } else {
        if (stride !== 1) throw Error('Raw data can have only 1 value per pixel');
    }
    // temporary arrays for the distance transform
    var gridOuter = Array(w * h);
    var gridInner = Array(w * h);
    var f = Array(size);
    var d = Array(size);
    var z = Array(size + 1);
    var v = Array(size);
    for(i = 0, l = w * h; i < l; i++){
        var a = data[i];
        gridOuter[i] = a === 1 ? 0 : a === 0 ? INF : Math.pow(Math.max(0, 0.5 - a), 2);
        gridInner[i] = a === 1 ? INF : a === 0 ? 0 : Math.pow(Math.max(0, a - 0.5), 2);
    }
    edt(gridOuter, w, h, f, d, v, z);
    edt(gridInner, w, h, f, d, v, z);
    var dist = window.Float32Array ? new Float32Array(w * h) : new Array(w * h);
    for(i = 0, l = w * h; i < l; i++){
        dist[i] = Math.min(Math.max(1 - ((gridOuter[i] - gridInner[i]) / radius + cutoff), 0), 1);
    }
    return dist;
}
// 2D Euclidean distance transform by Felzenszwalb & Huttenlocher https://cs.brown.edu/~pff/dt/
function edt(data, width, height, f, d, v, z) {
    for(var x = 0; x < width; x++){
        for(var y = 0; y < height; y++){
            f[y] = data[y * width + x];
        }
        edt1d(f, d, v, z, height);
        for(y = 0; y < height; y++){
            data[y * width + x] = d[y];
        }
    }
    for(y = 0; y < height; y++){
        for(x = 0; x < width; x++){
            f[x] = data[y * width + x];
        }
        edt1d(f, d, v, z, width);
        for(x = 0; x < width; x++){
            data[y * width + x] = Math.sqrt(d[x]);
        }
    }
}
// 1D squared distance transform
function edt1d(f, d, v, z, n) {
    v[0] = 0;
    z[0] = -INF;
    z[1] = +INF;
    for(var q = 1, k = 0; q < n; q++){
        var s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
        while(s <= z[k]){
            k--;
            s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
        }
        k++;
        v[k] = q;
        z[k] = s;
        z[k + 1] = +INF;
    }
    for(q = 0, k = 0; q < n; q++){
        while(z[k + 1] < q)k++;
        d[q] = (q - v[k]) * (q - v[k]) + f[v[k]];
    }
}
}),
"[project]/node_modules/grapheme-splitter/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*
Breaks a Javascript string into individual user-perceived "characters" 
called extended grapheme clusters by implementing the Unicode UAX-29 standard, version 10.0.0

Usage:
var splitter = new GraphemeSplitter();
//returns an array of strings, one string for each grapheme cluster
var graphemes = splitter.splitGraphemes(string); 

*/ function GraphemeSplitter() {
    var CR = 0, LF = 1, Control = 2, Extend = 3, Regional_Indicator = 4, SpacingMark = 5, L = 6, V = 7, T = 8, LV = 9, LVT = 10, Other = 11, Prepend = 12, E_Base = 13, E_Modifier = 14, ZWJ = 15, Glue_After_Zwj = 16, E_Base_GAZ = 17;
    // BreakTypes
    var NotBreak = 0, BreakStart = 1, Break = 2, BreakLastRegional = 3, BreakPenultimateRegional = 4;
    function isSurrogate(str, pos) {
        return 0xd800 <= str.charCodeAt(pos) && str.charCodeAt(pos) <= 0xdbff && 0xdc00 <= str.charCodeAt(pos + 1) && str.charCodeAt(pos + 1) <= 0xdfff;
    }
    // Private function, gets a Unicode code point from a JavaScript UTF-16 string
    // handling surrogate pairs appropriately
    function codePointAt(str, idx) {
        if (idx === undefined) {
            idx = 0;
        }
        var code = str.charCodeAt(idx);
        // if a high surrogate
        if (0xD800 <= code && code <= 0xDBFF && idx < str.length - 1) {
            var hi = code;
            var low = str.charCodeAt(idx + 1);
            if (0xDC00 <= low && low <= 0xDFFF) {
                return (hi - 0xD800) * 0x400 + (low - 0xDC00) + 0x10000;
            }
            return hi;
        }
        // if a low surrogate
        if (0xDC00 <= code && code <= 0xDFFF && idx >= 1) {
            var hi = str.charCodeAt(idx - 1);
            var low = code;
            if (0xD800 <= hi && hi <= 0xDBFF) {
                return (hi - 0xD800) * 0x400 + (low - 0xDC00) + 0x10000;
            }
            return low;
        }
        //just return the char if an unmatched surrogate half or a 
        //single-char codepoint
        return code;
    }
    // Private function, returns whether a break is allowed between the 
    // two given grapheme breaking classes
    function shouldBreak(start, mid, end) {
        var all = [
            start
        ].concat(mid).concat([
            end
        ]);
        var previous = all[all.length - 2];
        var next = end;
        // Lookahead termintor for:
        // GB10. (E_Base | EBG) Extend* ?	E_Modifier
        var eModifierIndex = all.lastIndexOf(E_Modifier);
        if (eModifierIndex > 1 && all.slice(1, eModifierIndex).every(function(c) {
            return c == Extend;
        }) && [
            Extend,
            E_Base,
            E_Base_GAZ
        ].indexOf(start) == -1) {
            return Break;
        }
        // Lookahead termintor for:
        // GB12. ^ (RI RI)* RI	?	RI
        // GB13. [^RI] (RI RI)* RI	?	RI
        var rIIndex = all.lastIndexOf(Regional_Indicator);
        if (rIIndex > 0 && all.slice(1, rIIndex).every(function(c) {
            return c == Regional_Indicator;
        }) && [
            Prepend,
            Regional_Indicator
        ].indexOf(previous) == -1) {
            if (all.filter(function(c) {
                return c == Regional_Indicator;
            }).length % 2 == 1) {
                return BreakLastRegional;
            } else {
                return BreakPenultimateRegional;
            }
        }
        // GB3. CR X LF
        if (previous == CR && next == LF) {
            return NotBreak;
        } else if (previous == Control || previous == CR || previous == LF) {
            if (next == E_Modifier && mid.every(function(c) {
                return c == Extend;
            })) {
                return Break;
            } else {
                return BreakStart;
            }
        } else if (next == Control || next == CR || next == LF) {
            return BreakStart;
        } else if (previous == L && (next == L || next == V || next == LV || next == LVT)) {
            return NotBreak;
        } else if ((previous == LV || previous == V) && (next == V || next == T)) {
            return NotBreak;
        } else if ((previous == LVT || previous == T) && next == T) {
            return NotBreak;
        } else if (next == Extend || next == ZWJ) {
            return NotBreak;
        } else if (next == SpacingMark) {
            return NotBreak;
        } else if (previous == Prepend) {
            return NotBreak;
        }
        // GB10. (E_Base | EBG) Extend* ?	E_Modifier
        var previousNonExtendIndex = all.indexOf(Extend) != -1 ? all.lastIndexOf(Extend) - 1 : all.length - 2;
        if ([
            E_Base,
            E_Base_GAZ
        ].indexOf(all[previousNonExtendIndex]) != -1 && all.slice(previousNonExtendIndex + 1, -1).every(function(c) {
            return c == Extend;
        }) && next == E_Modifier) {
            return NotBreak;
        }
        // GB11. ZWJ ? (Glue_After_Zwj | EBG)
        if (previous == ZWJ && [
            Glue_After_Zwj,
            E_Base_GAZ
        ].indexOf(next) != -1) {
            return NotBreak;
        }
        // GB12. ^ (RI RI)* RI ? RI
        // GB13. [^RI] (RI RI)* RI ? RI
        if (mid.indexOf(Regional_Indicator) != -1) {
            return Break;
        }
        if (previous == Regional_Indicator && next == Regional_Indicator) {
            return NotBreak;
        }
        // GB999. Any ? Any
        return BreakStart;
    }
    // Returns the next grapheme break in the string after the given index
    this.nextBreak = function(string, index) {
        if (index === undefined) {
            index = 0;
        }
        if (index < 0) {
            return 0;
        }
        if (index >= string.length - 1) {
            return string.length;
        }
        var prev = getGraphemeBreakProperty(codePointAt(string, index));
        var mid = [];
        for(var i = index + 1; i < string.length; i++){
            // check for already processed low surrogates
            if (isSurrogate(string, i - 1)) {
                continue;
            }
            var next = getGraphemeBreakProperty(codePointAt(string, i));
            if (shouldBreak(prev, mid, next)) {
                return i;
            }
            mid.push(next);
        }
        return string.length;
    };
    // Breaks the given string into an array of grapheme cluster strings
    this.splitGraphemes = function(str) {
        var res = [];
        var index = 0;
        var brk;
        while((brk = this.nextBreak(str, index)) < str.length){
            res.push(str.slice(index, brk));
            index = brk;
        }
        if (index < str.length) {
            res.push(str.slice(index));
        }
        return res;
    };
    // Returns the iterator of grapheme clusters there are in the given string
    this.iterateGraphemes = function(str) {
        var index = 0;
        var res = {
            next: (function() {
                var value;
                var brk;
                if ((brk = this.nextBreak(str, index)) < str.length) {
                    value = str.slice(index, brk);
                    index = brk;
                    return {
                        value: value,
                        done: false
                    };
                }
                if (index < str.length) {
                    value = str.slice(index);
                    index = str.length;
                    return {
                        value: value,
                        done: false
                    };
                }
                return {
                    value: undefined,
                    done: true
                };
            }).bind(this)
        };
        // ES2015 @@iterator method (iterable) for spread syntax and for...of statement
        if (typeof Symbol !== 'undefined' && Symbol.iterator) {
            res[Symbol.iterator] = function() {
                return res;
            };
        }
        return res;
    };
    // Returns the number of grapheme clusters there are in the given string
    this.countGraphemes = function(str) {
        var count = 0;
        var index = 0;
        var brk;
        while((brk = this.nextBreak(str, index)) < str.length){
            index = brk;
            count++;
        }
        if (index < str.length) {
            count++;
        }
        return count;
    };
    //given a Unicode code point, determines this symbol's grapheme break property
    function getGraphemeBreakProperty(code) {
        //grapheme break property for Unicode 10.0.0, 
        //taken from http://www.unicode.org/Public/10.0.0/ucd/auxiliary/GraphemeBreakProperty.txt
        //and adapted to JavaScript rules
        if (0x0600 <= code && code <= 0x0605 || // Cf   [6] ARABIC NUMBER SIGN..ARABIC NUMBER MARK ABOVE
        0x06DD == code || // Cf       ARABIC END OF AYAH
        0x070F == code || // Cf       SYRIAC ABBREVIATION MARK
        0x08E2 == code || // Cf       ARABIC DISPUTED END OF AYAH
        0x0D4E == code || // Lo       MALAYALAM LETTER DOT REPH
        0x110BD == code || 0x111C2 <= code && code <= 0x111C3 || // Lo   [2] SHARADA SIGN JIHVAMULIYA..SHARADA SIGN UPADHMANIYA
        0x11A3A == code || 0x11A86 <= code && code <= 0x11A89 || // Lo   [4] SOYOMBO CLUSTER-INITIAL LETTER RA..SOYOMBO CLUSTER-INITIAL LETTER SA
        0x11D46 == code // Lo       MASARAM GONDI REPHA
        ) {
            return Prepend;
        }
        if (0x000D == code // Cc       <control-000D>
        ) {
            return CR;
        }
        if (0x000A == code // Cc       <control-000A>
        ) {
            return LF;
        }
        if (0x0000 <= code && code <= 0x0009 || 0x000B <= code && code <= 0x000C || 0x000E <= code && code <= 0x001F || 0x007F <= code && code <= 0x009F || // Cc  [33] <control-007F>..<control-009F>
        0x00AD == code || // Cf       SOFT HYPHEN
        0x061C == code || // Cf       ARABIC LETTER MARK
        0x180E == code || // Cf       MONGOLIAN VOWEL SEPARATOR
        0x200B == code || 0x200E <= code && code <= 0x200F || // Cf   [2] LEFT-TO-RIGHT MARK..RIGHT-TO-LEFT MARK
        0x2028 == code || // Zl       LINE SEPARATOR
        0x2029 == code || 0x202A <= code && code <= 0x202E || 0x2060 <= code && code <= 0x2064 || // Cf   [5] WORD JOINER..INVISIBLE PLUS
        0x2065 == code || 0x2066 <= code && code <= 0x206F || 0xD800 <= code && code <= 0xDFFF || // Cs [2048] <surrogate-D800>..<surrogate-DFFF>
        0xFEFF == code || 0xFFF0 <= code && code <= 0xFFF8 || 0xFFF9 <= code && code <= 0xFFFB || 0x1BCA0 <= code && code <= 0x1BCA3 || 0x1D173 <= code && code <= 0x1D17A || // Cf   [8] MUSICAL SYMBOL BEGIN BEAM..MUSICAL SYMBOL END PHRASE
        0xE0000 == code || // Cn       <reserved-E0000>
        0xE0001 == code || 0xE0002 <= code && code <= 0xE001F || 0xE0080 <= code && code <= 0xE00FF || 0xE01F0 <= code && code <= 0xE0FFF // Cn [3600] <reserved-E01F0>..<reserved-E0FFF>
        ) {
            return Control;
        }
        if (0x0300 <= code && code <= 0x036F || 0x0483 <= code && code <= 0x0487 || 0x0488 <= code && code <= 0x0489 || 0x0591 <= code && code <= 0x05BD || // Mn  [45] HEBREW ACCENT ETNAHTA..HEBREW POINT METEG
        0x05BF == code || 0x05C1 <= code && code <= 0x05C2 || 0x05C4 <= code && code <= 0x05C5 || // Mn   [2] HEBREW MARK UPPER DOT..HEBREW MARK LOWER DOT
        0x05C7 == code || 0x0610 <= code && code <= 0x061A || 0x064B <= code && code <= 0x065F || // Mn  [21] ARABIC FATHATAN..ARABIC WAVY HAMZA BELOW
        0x0670 == code || 0x06D6 <= code && code <= 0x06DC || 0x06DF <= code && code <= 0x06E4 || 0x06E7 <= code && code <= 0x06E8 || 0x06EA <= code && code <= 0x06ED || // Mn   [4] ARABIC EMPTY CENTRE LOW STOP..ARABIC SMALL LOW MEEM
        0x0711 == code || 0x0730 <= code && code <= 0x074A || 0x07A6 <= code && code <= 0x07B0 || 0x07EB <= code && code <= 0x07F3 || 0x0816 <= code && code <= 0x0819 || 0x081B <= code && code <= 0x0823 || 0x0825 <= code && code <= 0x0827 || 0x0829 <= code && code <= 0x082D || 0x0859 <= code && code <= 0x085B || 0x08D4 <= code && code <= 0x08E1 || 0x08E3 <= code && code <= 0x0902 || // Mn  [32] ARABIC TURNED DAMMA BELOW..DEVANAGARI SIGN ANUSVARA
        0x093A == code || // Mn       DEVANAGARI VOWEL SIGN OE
        0x093C == code || 0x0941 <= code && code <= 0x0948 || // Mn   [8] DEVANAGARI VOWEL SIGN U..DEVANAGARI VOWEL SIGN AI
        0x094D == code || 0x0951 <= code && code <= 0x0957 || 0x0962 <= code && code <= 0x0963 || // Mn   [2] DEVANAGARI VOWEL SIGN VOCALIC L..DEVANAGARI VOWEL SIGN VOCALIC LL
        0x0981 == code || // Mn       BENGALI SIGN CANDRABINDU
        0x09BC == code || // Mn       BENGALI SIGN NUKTA
        0x09BE == code || 0x09C1 <= code && code <= 0x09C4 || // Mn   [4] BENGALI VOWEL SIGN U..BENGALI VOWEL SIGN VOCALIC RR
        0x09CD == code || // Mn       BENGALI SIGN VIRAMA
        0x09D7 == code || 0x09E2 <= code && code <= 0x09E3 || 0x0A01 <= code && code <= 0x0A02 || // Mn   [2] GURMUKHI SIGN ADAK BINDI..GURMUKHI SIGN BINDI
        0x0A3C == code || 0x0A41 <= code && code <= 0x0A42 || 0x0A47 <= code && code <= 0x0A48 || 0x0A4B <= code && code <= 0x0A4D || // Mn   [3] GURMUKHI VOWEL SIGN OO..GURMUKHI SIGN VIRAMA
        0x0A51 == code || 0x0A70 <= code && code <= 0x0A71 || // Mn   [2] GURMUKHI TIPPI..GURMUKHI ADDAK
        0x0A75 == code || 0x0A81 <= code && code <= 0x0A82 || // Mn   [2] GUJARATI SIGN CANDRABINDU..GUJARATI SIGN ANUSVARA
        0x0ABC == code || 0x0AC1 <= code && code <= 0x0AC5 || 0x0AC7 <= code && code <= 0x0AC8 || // Mn   [2] GUJARATI VOWEL SIGN E..GUJARATI VOWEL SIGN AI
        0x0ACD == code || 0x0AE2 <= code && code <= 0x0AE3 || 0x0AFA <= code && code <= 0x0AFF || // Mn   [6] GUJARATI SIGN SUKUN..GUJARATI SIGN TWO-CIRCLE NUKTA ABOVE
        0x0B01 == code || // Mn       ORIYA SIGN CANDRABINDU
        0x0B3C == code || // Mn       ORIYA SIGN NUKTA
        0x0B3E == code || // Mc       ORIYA VOWEL SIGN AA
        0x0B3F == code || 0x0B41 <= code && code <= 0x0B44 || // Mn   [4] ORIYA VOWEL SIGN U..ORIYA VOWEL SIGN VOCALIC RR
        0x0B4D == code || // Mn       ORIYA SIGN VIRAMA
        0x0B56 == code || // Mn       ORIYA AI LENGTH MARK
        0x0B57 == code || 0x0B62 <= code && code <= 0x0B63 || // Mn   [2] ORIYA VOWEL SIGN VOCALIC L..ORIYA VOWEL SIGN VOCALIC LL
        0x0B82 == code || // Mn       TAMIL SIGN ANUSVARA
        0x0BBE == code || // Mc       TAMIL VOWEL SIGN AA
        0x0BC0 == code || // Mn       TAMIL VOWEL SIGN II
        0x0BCD == code || // Mn       TAMIL SIGN VIRAMA
        0x0BD7 == code || // Mc       TAMIL AU LENGTH MARK
        0x0C00 == code || 0x0C3E <= code && code <= 0x0C40 || 0x0C46 <= code && code <= 0x0C48 || 0x0C4A <= code && code <= 0x0C4D || 0x0C55 <= code && code <= 0x0C56 || 0x0C62 <= code && code <= 0x0C63 || // Mn   [2] TELUGU VOWEL SIGN VOCALIC L..TELUGU VOWEL SIGN VOCALIC LL
        0x0C81 == code || // Mn       KANNADA SIGN CANDRABINDU
        0x0CBC == code || // Mn       KANNADA SIGN NUKTA
        0x0CBF == code || // Mn       KANNADA VOWEL SIGN I
        0x0CC2 == code || // Mc       KANNADA VOWEL SIGN UU
        0x0CC6 == code || 0x0CCC <= code && code <= 0x0CCD || 0x0CD5 <= code && code <= 0x0CD6 || 0x0CE2 <= code && code <= 0x0CE3 || 0x0D00 <= code && code <= 0x0D01 || 0x0D3B <= code && code <= 0x0D3C || // Mn   [2] MALAYALAM SIGN VERTICAL BAR VIRAMA..MALAYALAM SIGN CIRCULAR VIRAMA
        0x0D3E == code || 0x0D41 <= code && code <= 0x0D44 || // Mn   [4] MALAYALAM VOWEL SIGN U..MALAYALAM VOWEL SIGN VOCALIC RR
        0x0D4D == code || // Mn       MALAYALAM SIGN VIRAMA
        0x0D57 == code || 0x0D62 <= code && code <= 0x0D63 || // Mn   [2] MALAYALAM VOWEL SIGN VOCALIC L..MALAYALAM VOWEL SIGN VOCALIC LL
        0x0DCA == code || // Mn       SINHALA SIGN AL-LAKUNA
        0x0DCF == code || 0x0DD2 <= code && code <= 0x0DD4 || // Mn   [3] SINHALA VOWEL SIGN KETTI IS-PILLA..SINHALA VOWEL SIGN KETTI PAA-PILLA
        0x0DD6 == code || // Mn       SINHALA VOWEL SIGN DIGA PAA-PILLA
        0x0DDF == code || // Mc       SINHALA VOWEL SIGN GAYANUKITTA
        0x0E31 == code || 0x0E34 <= code && code <= 0x0E3A || 0x0E47 <= code && code <= 0x0E4E || // Mn   [8] THAI CHARACTER MAITAIKHU..THAI CHARACTER YAMAKKAN
        0x0EB1 == code || 0x0EB4 <= code && code <= 0x0EB9 || 0x0EBB <= code && code <= 0x0EBC || 0x0EC8 <= code && code <= 0x0ECD || 0x0F18 <= code && code <= 0x0F19 || // Mn   [2] TIBETAN ASTROLOGICAL SIGN -KHYUD PA..TIBETAN ASTROLOGICAL SIGN SDONG TSHUGS
        0x0F35 == code || // Mn       TIBETAN MARK NGAS BZUNG NYI ZLA
        0x0F37 == code || // Mn       TIBETAN MARK NGAS BZUNG SGOR RTAGS
        0x0F39 == code || 0x0F71 <= code && code <= 0x0F7E || 0x0F80 <= code && code <= 0x0F84 || 0x0F86 <= code && code <= 0x0F87 || 0x0F8D <= code && code <= 0x0F97 || 0x0F99 <= code && code <= 0x0FBC || // Mn  [36] TIBETAN SUBJOINED LETTER NYA..TIBETAN SUBJOINED LETTER FIXED-FORM RA
        0x0FC6 == code || 0x102D <= code && code <= 0x1030 || 0x1032 <= code && code <= 0x1037 || 0x1039 <= code && code <= 0x103A || 0x103D <= code && code <= 0x103E || 0x1058 <= code && code <= 0x1059 || 0x105E <= code && code <= 0x1060 || 0x1071 <= code && code <= 0x1074 || // Mn   [4] MYANMAR VOWEL SIGN GEBA KAREN I..MYANMAR VOWEL SIGN KAYAH EE
        0x1082 == code || 0x1085 <= code && code <= 0x1086 || // Mn   [2] MYANMAR VOWEL SIGN SHAN E ABOVE..MYANMAR VOWEL SIGN SHAN FINAL Y
        0x108D == code || // Mn       MYANMAR SIGN SHAN COUNCIL EMPHATIC TONE
        0x109D == code || 0x135D <= code && code <= 0x135F || 0x1712 <= code && code <= 0x1714 || 0x1732 <= code && code <= 0x1734 || 0x1752 <= code && code <= 0x1753 || 0x1772 <= code && code <= 0x1773 || 0x17B4 <= code && code <= 0x17B5 || 0x17B7 <= code && code <= 0x17BD || // Mn   [7] KHMER VOWEL SIGN I..KHMER VOWEL SIGN UA
        0x17C6 == code || 0x17C9 <= code && code <= 0x17D3 || // Mn  [11] KHMER SIGN MUUSIKATOAN..KHMER SIGN BATHAMASAT
        0x17DD == code || 0x180B <= code && code <= 0x180D || 0x1885 <= code && code <= 0x1886 || // Mn   [2] MONGOLIAN LETTER ALI GALI BALUDA..MONGOLIAN LETTER ALI GALI THREE BALUDA
        0x18A9 == code || 0x1920 <= code && code <= 0x1922 || 0x1927 <= code && code <= 0x1928 || // Mn   [2] LIMBU VOWEL SIGN E..LIMBU VOWEL SIGN O
        0x1932 == code || 0x1939 <= code && code <= 0x193B || 0x1A17 <= code && code <= 0x1A18 || // Mn   [2] BUGINESE VOWEL SIGN I..BUGINESE VOWEL SIGN U
        0x1A1B == code || // Mn       BUGINESE VOWEL SIGN AE
        0x1A56 == code || 0x1A58 <= code && code <= 0x1A5E || // Mn   [7] TAI THAM SIGN MAI KANG LAI..TAI THAM CONSONANT SIGN SA
        0x1A60 == code || // Mn       TAI THAM SIGN SAKOT
        0x1A62 == code || 0x1A65 <= code && code <= 0x1A6C || 0x1A73 <= code && code <= 0x1A7C || // Mn  [10] TAI THAM VOWEL SIGN OA ABOVE..TAI THAM SIGN KHUEN-LUE KARAN
        0x1A7F == code || 0x1AB0 <= code && code <= 0x1ABD || // Mn  [14] COMBINING DOUBLED CIRCUMFLEX ACCENT..COMBINING PARENTHESES BELOW
        0x1ABE == code || 0x1B00 <= code && code <= 0x1B03 || // Mn   [4] BALINESE SIGN ULU RICEM..BALINESE SIGN SURANG
        0x1B34 == code || 0x1B36 <= code && code <= 0x1B3A || // Mn   [5] BALINESE VOWEL SIGN ULU..BALINESE VOWEL SIGN RA REPA
        0x1B3C == code || // Mn       BALINESE VOWEL SIGN LA LENGA
        0x1B42 == code || 0x1B6B <= code && code <= 0x1B73 || 0x1B80 <= code && code <= 0x1B81 || 0x1BA2 <= code && code <= 0x1BA5 || 0x1BA8 <= code && code <= 0x1BA9 || 0x1BAB <= code && code <= 0x1BAD || // Mn   [3] SUNDANESE SIGN VIRAMA..SUNDANESE CONSONANT SIGN PASANGAN WA
        0x1BE6 == code || 0x1BE8 <= code && code <= 0x1BE9 || // Mn   [2] BATAK VOWEL SIGN PAKPAK E..BATAK VOWEL SIGN EE
        0x1BED == code || 0x1BEF <= code && code <= 0x1BF1 || 0x1C2C <= code && code <= 0x1C33 || 0x1C36 <= code && code <= 0x1C37 || 0x1CD0 <= code && code <= 0x1CD2 || 0x1CD4 <= code && code <= 0x1CE0 || 0x1CE2 <= code && code <= 0x1CE8 || // Mn   [7] VEDIC SIGN VISARGA SVARITA..VEDIC SIGN VISARGA ANUDATTA WITH TAIL
        0x1CED == code || // Mn       VEDIC SIGN TIRYAK
        0x1CF4 == code || 0x1CF8 <= code && code <= 0x1CF9 || 0x1DC0 <= code && code <= 0x1DF9 || 0x1DFB <= code && code <= 0x1DFF || // Mn   [5] COMBINING DELETION MARK..COMBINING RIGHT ARROWHEAD AND DOWN ARROWHEAD BELOW
        0x200C == code || 0x20D0 <= code && code <= 0x20DC || 0x20DD <= code && code <= 0x20E0 || // Me   [4] COMBINING ENCLOSING CIRCLE..COMBINING ENCLOSING CIRCLE BACKSLASH
        0x20E1 == code || 0x20E2 <= code && code <= 0x20E4 || 0x20E5 <= code && code <= 0x20F0 || 0x2CEF <= code && code <= 0x2CF1 || // Mn   [3] COPTIC COMBINING NI ABOVE..COPTIC COMBINING SPIRITUS LENIS
        0x2D7F == code || 0x2DE0 <= code && code <= 0x2DFF || 0x302A <= code && code <= 0x302D || 0x302E <= code && code <= 0x302F || 0x3099 <= code && code <= 0x309A || // Mn   [2] COMBINING KATAKANA-HIRAGANA VOICED SOUND MARK..COMBINING KATAKANA-HIRAGANA SEMI-VOICED SOUND MARK
        0xA66F == code || 0xA670 <= code && code <= 0xA672 || 0xA674 <= code && code <= 0xA67D || 0xA69E <= code && code <= 0xA69F || 0xA6F0 <= code && code <= 0xA6F1 || // Mn   [2] BAMUM COMBINING MARK KOQNDON..BAMUM COMBINING MARK TUKWENTIS
        0xA802 == code || // Mn       SYLOTI NAGRI SIGN DVISVARA
        0xA806 == code || // Mn       SYLOTI NAGRI SIGN HASANTA
        0xA80B == code || 0xA825 <= code && code <= 0xA826 || 0xA8C4 <= code && code <= 0xA8C5 || 0xA8E0 <= code && code <= 0xA8F1 || 0xA926 <= code && code <= 0xA92D || 0xA947 <= code && code <= 0xA951 || 0xA980 <= code && code <= 0xA982 || // Mn   [3] JAVANESE SIGN PANYANGGA..JAVANESE SIGN LAYAR
        0xA9B3 == code || 0xA9B6 <= code && code <= 0xA9B9 || // Mn   [4] JAVANESE VOWEL SIGN WULU..JAVANESE VOWEL SIGN SUKU MENDUT
        0xA9BC == code || // Mn       JAVANESE VOWEL SIGN PEPET
        0xA9E5 == code || 0xAA29 <= code && code <= 0xAA2E || 0xAA31 <= code && code <= 0xAA32 || 0xAA35 <= code && code <= 0xAA36 || // Mn   [2] CHAM CONSONANT SIGN LA..CHAM CONSONANT SIGN WA
        0xAA43 == code || // Mn       CHAM CONSONANT SIGN FINAL NG
        0xAA4C == code || // Mn       CHAM CONSONANT SIGN FINAL M
        0xAA7C == code || // Mn       MYANMAR SIGN TAI LAING TONE-2
        0xAAB0 == code || 0xAAB2 <= code && code <= 0xAAB4 || 0xAAB7 <= code && code <= 0xAAB8 || 0xAABE <= code && code <= 0xAABF || // Mn   [2] TAI VIET VOWEL AM..TAI VIET TONE MAI EK
        0xAAC1 == code || 0xAAEC <= code && code <= 0xAAED || // Mn   [2] MEETEI MAYEK VOWEL SIGN UU..MEETEI MAYEK VOWEL SIGN AAI
        0xAAF6 == code || // Mn       MEETEI MAYEK VIRAMA
        0xABE5 == code || // Mn       MEETEI MAYEK VOWEL SIGN ANAP
        0xABE8 == code || // Mn       MEETEI MAYEK VOWEL SIGN UNAP
        0xABED == code || // Mn       MEETEI MAYEK APUN IYEK
        0xFB1E == code || 0xFE00 <= code && code <= 0xFE0F || 0xFE20 <= code && code <= 0xFE2F || 0xFF9E <= code && code <= 0xFF9F || // Lm   [2] HALFWIDTH KATAKANA VOICED SOUND MARK..HALFWIDTH KATAKANA SEMI-VOICED SOUND MARK
        0x101FD == code || // Mn       PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE
        0x102E0 == code || 0x10376 <= code && code <= 0x1037A || 0x10A01 <= code && code <= 0x10A03 || 0x10A05 <= code && code <= 0x10A06 || 0x10A0C <= code && code <= 0x10A0F || 0x10A38 <= code && code <= 0x10A3A || // Mn   [3] KHAROSHTHI SIGN BAR ABOVE..KHAROSHTHI SIGN DOT BELOW
        0x10A3F == code || 0x10AE5 <= code && code <= 0x10AE6 || // Mn   [2] MANICHAEAN ABBREVIATION MARK ABOVE..MANICHAEAN ABBREVIATION MARK BELOW
        0x11001 == code || 0x11038 <= code && code <= 0x11046 || 0x1107F <= code && code <= 0x11081 || 0x110B3 <= code && code <= 0x110B6 || 0x110B9 <= code && code <= 0x110BA || 0x11100 <= code && code <= 0x11102 || 0x11127 <= code && code <= 0x1112B || 0x1112D <= code && code <= 0x11134 || // Mn   [8] CHAKMA VOWEL SIGN AI..CHAKMA MAAYYAA
        0x11173 == code || 0x11180 <= code && code <= 0x11181 || 0x111B6 <= code && code <= 0x111BE || 0x111CA <= code && code <= 0x111CC || 0x1122F <= code && code <= 0x11231 || // Mn   [3] KHOJKI VOWEL SIGN U..KHOJKI VOWEL SIGN AI
        0x11234 == code || 0x11236 <= code && code <= 0x11237 || // Mn   [2] KHOJKI SIGN NUKTA..KHOJKI SIGN SHADDA
        0x1123E == code || // Mn       KHOJKI SIGN SUKUN
        0x112DF == code || 0x112E3 <= code && code <= 0x112EA || 0x11300 <= code && code <= 0x11301 || // Mn   [2] GRANTHA SIGN COMBINING ANUSVARA ABOVE..GRANTHA SIGN CANDRABINDU
        0x1133C == code || // Mn       GRANTHA SIGN NUKTA
        0x1133E == code || // Mc       GRANTHA VOWEL SIGN AA
        0x11340 == code || // Mn       GRANTHA VOWEL SIGN II
        0x11357 == code || 0x11366 <= code && code <= 0x1136C || 0x11370 <= code && code <= 0x11374 || 0x11438 <= code && code <= 0x1143F || 0x11442 <= code && code <= 0x11444 || // Mn   [3] NEWA SIGN VIRAMA..NEWA SIGN ANUSVARA
        0x11446 == code || // Mn       NEWA SIGN NUKTA
        0x114B0 == code || 0x114B3 <= code && code <= 0x114B8 || // Mn   [6] TIRHUTA VOWEL SIGN U..TIRHUTA VOWEL SIGN VOCALIC LL
        0x114BA == code || // Mn       TIRHUTA VOWEL SIGN SHORT E
        0x114BD == code || 0x114BF <= code && code <= 0x114C0 || 0x114C2 <= code && code <= 0x114C3 || // Mn   [2] TIRHUTA SIGN VIRAMA..TIRHUTA SIGN NUKTA
        0x115AF == code || 0x115B2 <= code && code <= 0x115B5 || 0x115BC <= code && code <= 0x115BD || 0x115BF <= code && code <= 0x115C0 || 0x115DC <= code && code <= 0x115DD || 0x11633 <= code && code <= 0x1163A || // Mn   [8] MODI VOWEL SIGN U..MODI VOWEL SIGN AI
        0x1163D == code || 0x1163F <= code && code <= 0x11640 || // Mn   [2] MODI SIGN VIRAMA..MODI SIGN ARDHACANDRA
        0x116AB == code || // Mn       TAKRI SIGN ANUSVARA
        0x116AD == code || 0x116B0 <= code && code <= 0x116B5 || // Mn   [6] TAKRI VOWEL SIGN U..TAKRI VOWEL SIGN AU
        0x116B7 == code || 0x1171D <= code && code <= 0x1171F || 0x11722 <= code && code <= 0x11725 || 0x11727 <= code && code <= 0x1172B || 0x11A01 <= code && code <= 0x11A06 || 0x11A09 <= code && code <= 0x11A0A || 0x11A33 <= code && code <= 0x11A38 || 0x11A3B <= code && code <= 0x11A3E || // Mn   [4] ZANABAZAR SQUARE CLUSTER-FINAL LETTER YA..ZANABAZAR SQUARE CLUSTER-FINAL LETTER VA
        0x11A47 == code || 0x11A51 <= code && code <= 0x11A56 || 0x11A59 <= code && code <= 0x11A5B || 0x11A8A <= code && code <= 0x11A96 || 0x11A98 <= code && code <= 0x11A99 || 0x11C30 <= code && code <= 0x11C36 || 0x11C38 <= code && code <= 0x11C3D || // Mn   [6] BHAIKSUKI VOWEL SIGN E..BHAIKSUKI SIGN ANUSVARA
        0x11C3F == code || 0x11C92 <= code && code <= 0x11CA7 || 0x11CAA <= code && code <= 0x11CB0 || 0x11CB2 <= code && code <= 0x11CB3 || 0x11CB5 <= code && code <= 0x11CB6 || 0x11D31 <= code && code <= 0x11D36 || // Mn   [6] MASARAM GONDI VOWEL SIGN AA..MASARAM GONDI VOWEL SIGN VOCALIC R
        0x11D3A == code || 0x11D3C <= code && code <= 0x11D3D || 0x11D3F <= code && code <= 0x11D45 || // Mn   [7] MASARAM GONDI VOWEL SIGN AU..MASARAM GONDI VIRAMA
        0x11D47 == code || 0x16AF0 <= code && code <= 0x16AF4 || 0x16B30 <= code && code <= 0x16B36 || 0x16F8F <= code && code <= 0x16F92 || 0x1BC9D <= code && code <= 0x1BC9E || // Mn   [2] DUPLOYAN THICK LETTER SELECTOR..DUPLOYAN DOUBLE MARK
        0x1D165 == code || 0x1D167 <= code && code <= 0x1D169 || 0x1D16E <= code && code <= 0x1D172 || 0x1D17B <= code && code <= 0x1D182 || 0x1D185 <= code && code <= 0x1D18B || 0x1D1AA <= code && code <= 0x1D1AD || 0x1D242 <= code && code <= 0x1D244 || 0x1DA00 <= code && code <= 0x1DA36 || 0x1DA3B <= code && code <= 0x1DA6C || // Mn  [50] SIGNWRITING MOUTH CLOSED NEUTRAL..SIGNWRITING EXCITEMENT
        0x1DA75 == code || // Mn       SIGNWRITING UPPER BODY TILTING FROM HIP JOINTS
        0x1DA84 == code || 0x1DA9B <= code && code <= 0x1DA9F || 0x1DAA1 <= code && code <= 0x1DAAF || 0x1E000 <= code && code <= 0x1E006 || 0x1E008 <= code && code <= 0x1E018 || 0x1E01B <= code && code <= 0x1E021 || 0x1E023 <= code && code <= 0x1E024 || 0x1E026 <= code && code <= 0x1E02A || 0x1E8D0 <= code && code <= 0x1E8D6 || 0x1E944 <= code && code <= 0x1E94A || 0xE0020 <= code && code <= 0xE007F || 0xE0100 <= code && code <= 0xE01EF // Mn [240] VARIATION SELECTOR-17..VARIATION SELECTOR-256
        ) {
            return Extend;
        }
        if (0x1F1E6 <= code && code <= 0x1F1FF) {
            return Regional_Indicator;
        }
        if (0x0903 == code || // Mc       DEVANAGARI SIGN VISARGA
        0x093B == code || 0x093E <= code && code <= 0x0940 || 0x0949 <= code && code <= 0x094C || 0x094E <= code && code <= 0x094F || 0x0982 <= code && code <= 0x0983 || 0x09BF <= code && code <= 0x09C0 || 0x09C7 <= code && code <= 0x09C8 || 0x09CB <= code && code <= 0x09CC || // Mc   [2] BENGALI VOWEL SIGN O..BENGALI VOWEL SIGN AU
        0x0A03 == code || 0x0A3E <= code && code <= 0x0A40 || // Mc   [3] GURMUKHI VOWEL SIGN AA..GURMUKHI VOWEL SIGN II
        0x0A83 == code || 0x0ABE <= code && code <= 0x0AC0 || // Mc   [3] GUJARATI VOWEL SIGN AA..GUJARATI VOWEL SIGN II
        0x0AC9 == code || 0x0ACB <= code && code <= 0x0ACC || 0x0B02 <= code && code <= 0x0B03 || // Mc   [2] ORIYA SIGN ANUSVARA..ORIYA SIGN VISARGA
        0x0B40 == code || 0x0B47 <= code && code <= 0x0B48 || 0x0B4B <= code && code <= 0x0B4C || // Mc   [2] ORIYA VOWEL SIGN O..ORIYA VOWEL SIGN AU
        0x0BBF == code || 0x0BC1 <= code && code <= 0x0BC2 || 0x0BC6 <= code && code <= 0x0BC8 || 0x0BCA <= code && code <= 0x0BCC || 0x0C01 <= code && code <= 0x0C03 || 0x0C41 <= code && code <= 0x0C44 || 0x0C82 <= code && code <= 0x0C83 || // Mc   [2] KANNADA SIGN ANUSVARA..KANNADA SIGN VISARGA
        0x0CBE == code || 0x0CC0 <= code && code <= 0x0CC1 || 0x0CC3 <= code && code <= 0x0CC4 || 0x0CC7 <= code && code <= 0x0CC8 || 0x0CCA <= code && code <= 0x0CCB || 0x0D02 <= code && code <= 0x0D03 || 0x0D3F <= code && code <= 0x0D40 || 0x0D46 <= code && code <= 0x0D48 || 0x0D4A <= code && code <= 0x0D4C || 0x0D82 <= code && code <= 0x0D83 || 0x0DD0 <= code && code <= 0x0DD1 || 0x0DD8 <= code && code <= 0x0DDE || 0x0DF2 <= code && code <= 0x0DF3 || // Mc   [2] SINHALA VOWEL SIGN DIGA GAETTA-PILLA..SINHALA VOWEL SIGN DIGA GAYANUKITTA
        0x0E33 == code || // Lo       THAI CHARACTER SARA AM
        0x0EB3 == code || 0x0F3E <= code && code <= 0x0F3F || // Mc   [2] TIBETAN SIGN YAR TSHES..TIBETAN SIGN MAR TSHES
        0x0F7F == code || // Mc       TIBETAN SIGN RNAM BCAD
        0x1031 == code || 0x103B <= code && code <= 0x103C || 0x1056 <= code && code <= 0x1057 || // Mc   [2] MYANMAR VOWEL SIGN VOCALIC R..MYANMAR VOWEL SIGN VOCALIC RR
        0x1084 == code || // Mc       MYANMAR VOWEL SIGN SHAN E
        0x17B6 == code || 0x17BE <= code && code <= 0x17C5 || 0x17C7 <= code && code <= 0x17C8 || 0x1923 <= code && code <= 0x1926 || 0x1929 <= code && code <= 0x192B || 0x1930 <= code && code <= 0x1931 || 0x1933 <= code && code <= 0x1938 || 0x1A19 <= code && code <= 0x1A1A || // Mc   [2] BUGINESE VOWEL SIGN E..BUGINESE VOWEL SIGN O
        0x1A55 == code || // Mc       TAI THAM CONSONANT SIGN MEDIAL RA
        0x1A57 == code || 0x1A6D <= code && code <= 0x1A72 || // Mc   [6] TAI THAM VOWEL SIGN OY..TAI THAM VOWEL SIGN THAM AI
        0x1B04 == code || // Mc       BALINESE SIGN BISAH
        0x1B35 == code || // Mc       BALINESE VOWEL SIGN TEDUNG
        0x1B3B == code || 0x1B3D <= code && code <= 0x1B41 || 0x1B43 <= code && code <= 0x1B44 || // Mc   [2] BALINESE VOWEL SIGN PEPET TEDUNG..BALINESE ADEG ADEG
        0x1B82 == code || // Mc       SUNDANESE SIGN PANGWISAD
        0x1BA1 == code || 0x1BA6 <= code && code <= 0x1BA7 || // Mc   [2] SUNDANESE VOWEL SIGN PANAELAENG..SUNDANESE VOWEL SIGN PANOLONG
        0x1BAA == code || // Mc       SUNDANESE SIGN PAMAAEH
        0x1BE7 == code || 0x1BEA <= code && code <= 0x1BEC || // Mc   [3] BATAK VOWEL SIGN I..BATAK VOWEL SIGN O
        0x1BEE == code || 0x1BF2 <= code && code <= 0x1BF3 || 0x1C24 <= code && code <= 0x1C2B || 0x1C34 <= code && code <= 0x1C35 || // Mc   [2] LEPCHA CONSONANT SIGN NYIN-DO..LEPCHA CONSONANT SIGN KANG
        0x1CE1 == code || 0x1CF2 <= code && code <= 0x1CF3 || // Mc   [2] VEDIC SIGN ARDHAVISARGA..VEDIC SIGN ROTATED ARDHAVISARGA
        0x1CF7 == code || 0xA823 <= code && code <= 0xA824 || // Mc   [2] SYLOTI NAGRI VOWEL SIGN A..SYLOTI NAGRI VOWEL SIGN I
        0xA827 == code || 0xA880 <= code && code <= 0xA881 || 0xA8B4 <= code && code <= 0xA8C3 || 0xA952 <= code && code <= 0xA953 || // Mc   [2] REJANG CONSONANT SIGN H..REJANG VIRAMA
        0xA983 == code || 0xA9B4 <= code && code <= 0xA9B5 || 0xA9BA <= code && code <= 0xA9BB || 0xA9BD <= code && code <= 0xA9C0 || 0xAA2F <= code && code <= 0xAA30 || 0xAA33 <= code && code <= 0xAA34 || // Mc   [2] CHAM CONSONANT SIGN YA..CHAM CONSONANT SIGN RA
        0xAA4D == code || // Mc       CHAM CONSONANT SIGN FINAL H
        0xAAEB == code || 0xAAEE <= code && code <= 0xAAEF || // Mc   [2] MEETEI MAYEK VOWEL SIGN AU..MEETEI MAYEK VOWEL SIGN AAU
        0xAAF5 == code || 0xABE3 <= code && code <= 0xABE4 || 0xABE6 <= code && code <= 0xABE7 || 0xABE9 <= code && code <= 0xABEA || // Mc   [2] MEETEI MAYEK VOWEL SIGN CHEINAP..MEETEI MAYEK VOWEL SIGN NUNG
        0xABEC == code || // Mc       MEETEI MAYEK LUM IYEK
        0x11000 == code || // Mc       BRAHMI SIGN CANDRABINDU
        0x11002 == code || // Mc       BRAHMI SIGN VISARGA
        0x11082 == code || 0x110B0 <= code && code <= 0x110B2 || 0x110B7 <= code && code <= 0x110B8 || // Mc   [2] KAITHI VOWEL SIGN O..KAITHI VOWEL SIGN AU
        0x1112C == code || // Mc       CHAKMA VOWEL SIGN E
        0x11182 == code || 0x111B3 <= code && code <= 0x111B5 || 0x111BF <= code && code <= 0x111C0 || 0x1122C <= code && code <= 0x1122E || 0x11232 <= code && code <= 0x11233 || // Mc   [2] KHOJKI VOWEL SIGN O..KHOJKI VOWEL SIGN AU
        0x11235 == code || 0x112E0 <= code && code <= 0x112E2 || 0x11302 <= code && code <= 0x11303 || // Mc   [2] GRANTHA SIGN ANUSVARA..GRANTHA SIGN VISARGA
        0x1133F == code || 0x11341 <= code && code <= 0x11344 || 0x11347 <= code && code <= 0x11348 || 0x1134B <= code && code <= 0x1134D || 0x11362 <= code && code <= 0x11363 || 0x11435 <= code && code <= 0x11437 || 0x11440 <= code && code <= 0x11441 || // Mc   [2] NEWA VOWEL SIGN O..NEWA VOWEL SIGN AU
        0x11445 == code || 0x114B1 <= code && code <= 0x114B2 || // Mc   [2] TIRHUTA VOWEL SIGN I..TIRHUTA VOWEL SIGN II
        0x114B9 == code || 0x114BB <= code && code <= 0x114BC || // Mc   [2] TIRHUTA VOWEL SIGN AI..TIRHUTA VOWEL SIGN O
        0x114BE == code || // Mc       TIRHUTA VOWEL SIGN AU
        0x114C1 == code || 0x115B0 <= code && code <= 0x115B1 || 0x115B8 <= code && code <= 0x115BB || // Mc   [4] SIDDHAM VOWEL SIGN E..SIDDHAM VOWEL SIGN AU
        0x115BE == code || 0x11630 <= code && code <= 0x11632 || 0x1163B <= code && code <= 0x1163C || // Mc   [2] MODI VOWEL SIGN O..MODI VOWEL SIGN AU
        0x1163E == code || // Mc       MODI SIGN VISARGA
        0x116AC == code || 0x116AE <= code && code <= 0x116AF || // Mc   [2] TAKRI VOWEL SIGN I..TAKRI VOWEL SIGN II
        0x116B6 == code || 0x11720 <= code && code <= 0x11721 || // Mc   [2] AHOM VOWEL SIGN A..AHOM VOWEL SIGN AA
        0x11726 == code || 0x11A07 <= code && code <= 0x11A08 || // Mc   [2] ZANABAZAR SQUARE VOWEL SIGN AI..ZANABAZAR SQUARE VOWEL SIGN AU
        0x11A39 == code || 0x11A57 <= code && code <= 0x11A58 || // Mc   [2] SOYOMBO VOWEL SIGN AI..SOYOMBO VOWEL SIGN AU
        0x11A97 == code || // Mc       SOYOMBO SIGN VISARGA
        0x11C2F == code || // Mc       BHAIKSUKI VOWEL SIGN AA
        0x11C3E == code || // Mc       BHAIKSUKI SIGN VISARGA
        0x11CA9 == code || // Mc       MARCHEN SUBJOINED LETTER YA
        0x11CB1 == code || // Mc       MARCHEN VOWEL SIGN I
        0x11CB4 == code || 0x16F51 <= code && code <= 0x16F7E || // Mc  [46] MIAO SIGN ASPIRATION..MIAO VOWEL SIGN NG
        0x1D166 == code || // Mc       MUSICAL SYMBOL COMBINING SPRECHGESANG STEM
        0x1D16D == code // Mc       MUSICAL SYMBOL COMBINING AUGMENTATION DOT
        ) {
            return SpacingMark;
        }
        if (0x1100 <= code && code <= 0x115F || 0xA960 <= code && code <= 0xA97C // Lo  [29] HANGUL CHOSEONG TIKEUT-MIEUM..HANGUL CHOSEONG SSANGYEORINHIEUH
        ) {
            return L;
        }
        if (0x1160 <= code && code <= 0x11A7 || 0xD7B0 <= code && code <= 0xD7C6 // Lo  [23] HANGUL JUNGSEONG O-YEO..HANGUL JUNGSEONG ARAEA-E
        ) {
            return V;
        }
        if (0x11A8 <= code && code <= 0x11FF || 0xD7CB <= code && code <= 0xD7FB // Lo  [49] HANGUL JONGSEONG NIEUN-RIEUL..HANGUL JONGSEONG PHIEUPH-THIEUTH
        ) {
            return T;
        }
        if (0xAC00 == code || // Lo       HANGUL SYLLABLE GA
        0xAC1C == code || // Lo       HANGUL SYLLABLE GAE
        0xAC38 == code || // Lo       HANGUL SYLLABLE GYA
        0xAC54 == code || // Lo       HANGUL SYLLABLE GYAE
        0xAC70 == code || // Lo       HANGUL SYLLABLE GEO
        0xAC8C == code || // Lo       HANGUL SYLLABLE GE
        0xACA8 == code || // Lo       HANGUL SYLLABLE GYEO
        0xACC4 == code || // Lo       HANGUL SYLLABLE GYE
        0xACE0 == code || // Lo       HANGUL SYLLABLE GO
        0xACFC == code || // Lo       HANGUL SYLLABLE GWA
        0xAD18 == code || // Lo       HANGUL SYLLABLE GWAE
        0xAD34 == code || // Lo       HANGUL SYLLABLE GOE
        0xAD50 == code || // Lo       HANGUL SYLLABLE GYO
        0xAD6C == code || // Lo       HANGUL SYLLABLE GU
        0xAD88 == code || // Lo       HANGUL SYLLABLE GWEO
        0xADA4 == code || // Lo       HANGUL SYLLABLE GWE
        0xADC0 == code || // Lo       HANGUL SYLLABLE GWI
        0xADDC == code || // Lo       HANGUL SYLLABLE GYU
        0xADF8 == code || // Lo       HANGUL SYLLABLE GEU
        0xAE14 == code || // Lo       HANGUL SYLLABLE GYI
        0xAE30 == code || // Lo       HANGUL SYLLABLE GI
        0xAE4C == code || // Lo       HANGUL SYLLABLE GGA
        0xAE68 == code || // Lo       HANGUL SYLLABLE GGAE
        0xAE84 == code || // Lo       HANGUL SYLLABLE GGYA
        0xAEA0 == code || // Lo       HANGUL SYLLABLE GGYAE
        0xAEBC == code || // Lo       HANGUL SYLLABLE GGEO
        0xAED8 == code || // Lo       HANGUL SYLLABLE GGE
        0xAEF4 == code || // Lo       HANGUL SYLLABLE GGYEO
        0xAF10 == code || // Lo       HANGUL SYLLABLE GGYE
        0xAF2C == code || // Lo       HANGUL SYLLABLE GGO
        0xAF48 == code || // Lo       HANGUL SYLLABLE GGWA
        0xAF64 == code || // Lo       HANGUL SYLLABLE GGWAE
        0xAF80 == code || // Lo       HANGUL SYLLABLE GGOE
        0xAF9C == code || // Lo       HANGUL SYLLABLE GGYO
        0xAFB8 == code || // Lo       HANGUL SYLLABLE GGU
        0xAFD4 == code || // Lo       HANGUL SYLLABLE GGWEO
        0xAFF0 == code || // Lo       HANGUL SYLLABLE GGWE
        0xB00C == code || // Lo       HANGUL SYLLABLE GGWI
        0xB028 == code || // Lo       HANGUL SYLLABLE GGYU
        0xB044 == code || // Lo       HANGUL SYLLABLE GGEU
        0xB060 == code || // Lo       HANGUL SYLLABLE GGYI
        0xB07C == code || // Lo       HANGUL SYLLABLE GGI
        0xB098 == code || // Lo       HANGUL SYLLABLE NA
        0xB0B4 == code || // Lo       HANGUL SYLLABLE NAE
        0xB0D0 == code || // Lo       HANGUL SYLLABLE NYA
        0xB0EC == code || // Lo       HANGUL SYLLABLE NYAE
        0xB108 == code || // Lo       HANGUL SYLLABLE NEO
        0xB124 == code || // Lo       HANGUL SYLLABLE NE
        0xB140 == code || // Lo       HANGUL SYLLABLE NYEO
        0xB15C == code || // Lo       HANGUL SYLLABLE NYE
        0xB178 == code || // Lo       HANGUL SYLLABLE NO
        0xB194 == code || // Lo       HANGUL SYLLABLE NWA
        0xB1B0 == code || // Lo       HANGUL SYLLABLE NWAE
        0xB1CC == code || // Lo       HANGUL SYLLABLE NOE
        0xB1E8 == code || // Lo       HANGUL SYLLABLE NYO
        0xB204 == code || // Lo       HANGUL SYLLABLE NU
        0xB220 == code || // Lo       HANGUL SYLLABLE NWEO
        0xB23C == code || // Lo       HANGUL SYLLABLE NWE
        0xB258 == code || // Lo       HANGUL SYLLABLE NWI
        0xB274 == code || // Lo       HANGUL SYLLABLE NYU
        0xB290 == code || // Lo       HANGUL SYLLABLE NEU
        0xB2AC == code || // Lo       HANGUL SYLLABLE NYI
        0xB2C8 == code || // Lo       HANGUL SYLLABLE NI
        0xB2E4 == code || // Lo       HANGUL SYLLABLE DA
        0xB300 == code || // Lo       HANGUL SYLLABLE DAE
        0xB31C == code || // Lo       HANGUL SYLLABLE DYA
        0xB338 == code || // Lo       HANGUL SYLLABLE DYAE
        0xB354 == code || // Lo       HANGUL SYLLABLE DEO
        0xB370 == code || // Lo       HANGUL SYLLABLE DE
        0xB38C == code || // Lo       HANGUL SYLLABLE DYEO
        0xB3A8 == code || // Lo       HANGUL SYLLABLE DYE
        0xB3C4 == code || // Lo       HANGUL SYLLABLE DO
        0xB3E0 == code || // Lo       HANGUL SYLLABLE DWA
        0xB3FC == code || // Lo       HANGUL SYLLABLE DWAE
        0xB418 == code || // Lo       HANGUL SYLLABLE DOE
        0xB434 == code || // Lo       HANGUL SYLLABLE DYO
        0xB450 == code || // Lo       HANGUL SYLLABLE DU
        0xB46C == code || // Lo       HANGUL SYLLABLE DWEO
        0xB488 == code || // Lo       HANGUL SYLLABLE DWE
        0xB4A4 == code || // Lo       HANGUL SYLLABLE DWI
        0xB4C0 == code || // Lo       HANGUL SYLLABLE DYU
        0xB4DC == code || // Lo       HANGUL SYLLABLE DEU
        0xB4F8 == code || // Lo       HANGUL SYLLABLE DYI
        0xB514 == code || // Lo       HANGUL SYLLABLE DI
        0xB530 == code || // Lo       HANGUL SYLLABLE DDA
        0xB54C == code || // Lo       HANGUL SYLLABLE DDAE
        0xB568 == code || // Lo       HANGUL SYLLABLE DDYA
        0xB584 == code || // Lo       HANGUL SYLLABLE DDYAE
        0xB5A0 == code || // Lo       HANGUL SYLLABLE DDEO
        0xB5BC == code || // Lo       HANGUL SYLLABLE DDE
        0xB5D8 == code || // Lo       HANGUL SYLLABLE DDYEO
        0xB5F4 == code || // Lo       HANGUL SYLLABLE DDYE
        0xB610 == code || // Lo       HANGUL SYLLABLE DDO
        0xB62C == code || // Lo       HANGUL SYLLABLE DDWA
        0xB648 == code || // Lo       HANGUL SYLLABLE DDWAE
        0xB664 == code || // Lo       HANGUL SYLLABLE DDOE
        0xB680 == code || // Lo       HANGUL SYLLABLE DDYO
        0xB69C == code || // Lo       HANGUL SYLLABLE DDU
        0xB6B8 == code || // Lo       HANGUL SYLLABLE DDWEO
        0xB6D4 == code || // Lo       HANGUL SYLLABLE DDWE
        0xB6F0 == code || // Lo       HANGUL SYLLABLE DDWI
        0xB70C == code || // Lo       HANGUL SYLLABLE DDYU
        0xB728 == code || // Lo       HANGUL SYLLABLE DDEU
        0xB744 == code || // Lo       HANGUL SYLLABLE DDYI
        0xB760 == code || // Lo       HANGUL SYLLABLE DDI
        0xB77C == code || // Lo       HANGUL SYLLABLE RA
        0xB798 == code || // Lo       HANGUL SYLLABLE RAE
        0xB7B4 == code || // Lo       HANGUL SYLLABLE RYA
        0xB7D0 == code || // Lo       HANGUL SYLLABLE RYAE
        0xB7EC == code || // Lo       HANGUL SYLLABLE REO
        0xB808 == code || // Lo       HANGUL SYLLABLE RE
        0xB824 == code || // Lo       HANGUL SYLLABLE RYEO
        0xB840 == code || // Lo       HANGUL SYLLABLE RYE
        0xB85C == code || // Lo       HANGUL SYLLABLE RO
        0xB878 == code || // Lo       HANGUL SYLLABLE RWA
        0xB894 == code || // Lo       HANGUL SYLLABLE RWAE
        0xB8B0 == code || // Lo       HANGUL SYLLABLE ROE
        0xB8CC == code || // Lo       HANGUL SYLLABLE RYO
        0xB8E8 == code || // Lo       HANGUL SYLLABLE RU
        0xB904 == code || // Lo       HANGUL SYLLABLE RWEO
        0xB920 == code || // Lo       HANGUL SYLLABLE RWE
        0xB93C == code || // Lo       HANGUL SYLLABLE RWI
        0xB958 == code || // Lo       HANGUL SYLLABLE RYU
        0xB974 == code || // Lo       HANGUL SYLLABLE REU
        0xB990 == code || // Lo       HANGUL SYLLABLE RYI
        0xB9AC == code || // Lo       HANGUL SYLLABLE RI
        0xB9C8 == code || // Lo       HANGUL SYLLABLE MA
        0xB9E4 == code || // Lo       HANGUL SYLLABLE MAE
        0xBA00 == code || // Lo       HANGUL SYLLABLE MYA
        0xBA1C == code || // Lo       HANGUL SYLLABLE MYAE
        0xBA38 == code || // Lo       HANGUL SYLLABLE MEO
        0xBA54 == code || // Lo       HANGUL SYLLABLE ME
        0xBA70 == code || // Lo       HANGUL SYLLABLE MYEO
        0xBA8C == code || // Lo       HANGUL SYLLABLE MYE
        0xBAA8 == code || // Lo       HANGUL SYLLABLE MO
        0xBAC4 == code || // Lo       HANGUL SYLLABLE MWA
        0xBAE0 == code || // Lo       HANGUL SYLLABLE MWAE
        0xBAFC == code || // Lo       HANGUL SYLLABLE MOE
        0xBB18 == code || // Lo       HANGUL SYLLABLE MYO
        0xBB34 == code || // Lo       HANGUL SYLLABLE MU
        0xBB50 == code || // Lo       HANGUL SYLLABLE MWEO
        0xBB6C == code || // Lo       HANGUL SYLLABLE MWE
        0xBB88 == code || // Lo       HANGUL SYLLABLE MWI
        0xBBA4 == code || // Lo       HANGUL SYLLABLE MYU
        0xBBC0 == code || // Lo       HANGUL SYLLABLE MEU
        0xBBDC == code || // Lo       HANGUL SYLLABLE MYI
        0xBBF8 == code || // Lo       HANGUL SYLLABLE MI
        0xBC14 == code || // Lo       HANGUL SYLLABLE BA
        0xBC30 == code || // Lo       HANGUL SYLLABLE BAE
        0xBC4C == code || // Lo       HANGUL SYLLABLE BYA
        0xBC68 == code || // Lo       HANGUL SYLLABLE BYAE
        0xBC84 == code || // Lo       HANGUL SYLLABLE BEO
        0xBCA0 == code || // Lo       HANGUL SYLLABLE BE
        0xBCBC == code || // Lo       HANGUL SYLLABLE BYEO
        0xBCD8 == code || // Lo       HANGUL SYLLABLE BYE
        0xBCF4 == code || // Lo       HANGUL SYLLABLE BO
        0xBD10 == code || // Lo       HANGUL SYLLABLE BWA
        0xBD2C == code || // Lo       HANGUL SYLLABLE BWAE
        0xBD48 == code || // Lo       HANGUL SYLLABLE BOE
        0xBD64 == code || // Lo       HANGUL SYLLABLE BYO
        0xBD80 == code || // Lo       HANGUL SYLLABLE BU
        0xBD9C == code || // Lo       HANGUL SYLLABLE BWEO
        0xBDB8 == code || // Lo       HANGUL SYLLABLE BWE
        0xBDD4 == code || // Lo       HANGUL SYLLABLE BWI
        0xBDF0 == code || // Lo       HANGUL SYLLABLE BYU
        0xBE0C == code || // Lo       HANGUL SYLLABLE BEU
        0xBE28 == code || // Lo       HANGUL SYLLABLE BYI
        0xBE44 == code || // Lo       HANGUL SYLLABLE BI
        0xBE60 == code || // Lo       HANGUL SYLLABLE BBA
        0xBE7C == code || // Lo       HANGUL SYLLABLE BBAE
        0xBE98 == code || // Lo       HANGUL SYLLABLE BBYA
        0xBEB4 == code || // Lo       HANGUL SYLLABLE BBYAE
        0xBED0 == code || // Lo       HANGUL SYLLABLE BBEO
        0xBEEC == code || // Lo       HANGUL SYLLABLE BBE
        0xBF08 == code || // Lo       HANGUL SYLLABLE BBYEO
        0xBF24 == code || // Lo       HANGUL SYLLABLE BBYE
        0xBF40 == code || // Lo       HANGUL SYLLABLE BBO
        0xBF5C == code || // Lo       HANGUL SYLLABLE BBWA
        0xBF78 == code || // Lo       HANGUL SYLLABLE BBWAE
        0xBF94 == code || // Lo       HANGUL SYLLABLE BBOE
        0xBFB0 == code || // Lo       HANGUL SYLLABLE BBYO
        0xBFCC == code || // Lo       HANGUL SYLLABLE BBU
        0xBFE8 == code || // Lo       HANGUL SYLLABLE BBWEO
        0xC004 == code || // Lo       HANGUL SYLLABLE BBWE
        0xC020 == code || // Lo       HANGUL SYLLABLE BBWI
        0xC03C == code || // Lo       HANGUL SYLLABLE BBYU
        0xC058 == code || // Lo       HANGUL SYLLABLE BBEU
        0xC074 == code || // Lo       HANGUL SYLLABLE BBYI
        0xC090 == code || // Lo       HANGUL SYLLABLE BBI
        0xC0AC == code || // Lo       HANGUL SYLLABLE SA
        0xC0C8 == code || // Lo       HANGUL SYLLABLE SAE
        0xC0E4 == code || // Lo       HANGUL SYLLABLE SYA
        0xC100 == code || // Lo       HANGUL SYLLABLE SYAE
        0xC11C == code || // Lo       HANGUL SYLLABLE SEO
        0xC138 == code || // Lo       HANGUL SYLLABLE SE
        0xC154 == code || // Lo       HANGUL SYLLABLE SYEO
        0xC170 == code || // Lo       HANGUL SYLLABLE SYE
        0xC18C == code || // Lo       HANGUL SYLLABLE SO
        0xC1A8 == code || // Lo       HANGUL SYLLABLE SWA
        0xC1C4 == code || // Lo       HANGUL SYLLABLE SWAE
        0xC1E0 == code || // Lo       HANGUL SYLLABLE SOE
        0xC1FC == code || // Lo       HANGUL SYLLABLE SYO
        0xC218 == code || // Lo       HANGUL SYLLABLE SU
        0xC234 == code || // Lo       HANGUL SYLLABLE SWEO
        0xC250 == code || // Lo       HANGUL SYLLABLE SWE
        0xC26C == code || // Lo       HANGUL SYLLABLE SWI
        0xC288 == code || // Lo       HANGUL SYLLABLE SYU
        0xC2A4 == code || // Lo       HANGUL SYLLABLE SEU
        0xC2C0 == code || // Lo       HANGUL SYLLABLE SYI
        0xC2DC == code || // Lo       HANGUL SYLLABLE SI
        0xC2F8 == code || // Lo       HANGUL SYLLABLE SSA
        0xC314 == code || // Lo       HANGUL SYLLABLE SSAE
        0xC330 == code || // Lo       HANGUL SYLLABLE SSYA
        0xC34C == code || // Lo       HANGUL SYLLABLE SSYAE
        0xC368 == code || // Lo       HANGUL SYLLABLE SSEO
        0xC384 == code || // Lo       HANGUL SYLLABLE SSE
        0xC3A0 == code || // Lo       HANGUL SYLLABLE SSYEO
        0xC3BC == code || // Lo       HANGUL SYLLABLE SSYE
        0xC3D8 == code || // Lo       HANGUL SYLLABLE SSO
        0xC3F4 == code || // Lo       HANGUL SYLLABLE SSWA
        0xC410 == code || // Lo       HANGUL SYLLABLE SSWAE
        0xC42C == code || // Lo       HANGUL SYLLABLE SSOE
        0xC448 == code || // Lo       HANGUL SYLLABLE SSYO
        0xC464 == code || // Lo       HANGUL SYLLABLE SSU
        0xC480 == code || // Lo       HANGUL SYLLABLE SSWEO
        0xC49C == code || // Lo       HANGUL SYLLABLE SSWE
        0xC4B8 == code || // Lo       HANGUL SYLLABLE SSWI
        0xC4D4 == code || // Lo       HANGUL SYLLABLE SSYU
        0xC4F0 == code || // Lo       HANGUL SYLLABLE SSEU
        0xC50C == code || // Lo       HANGUL SYLLABLE SSYI
        0xC528 == code || // Lo       HANGUL SYLLABLE SSI
        0xC544 == code || // Lo       HANGUL SYLLABLE A
        0xC560 == code || // Lo       HANGUL SYLLABLE AE
        0xC57C == code || // Lo       HANGUL SYLLABLE YA
        0xC598 == code || // Lo       HANGUL SYLLABLE YAE
        0xC5B4 == code || // Lo       HANGUL SYLLABLE EO
        0xC5D0 == code || // Lo       HANGUL SYLLABLE E
        0xC5EC == code || // Lo       HANGUL SYLLABLE YEO
        0xC608 == code || // Lo       HANGUL SYLLABLE YE
        0xC624 == code || // Lo       HANGUL SYLLABLE O
        0xC640 == code || // Lo       HANGUL SYLLABLE WA
        0xC65C == code || // Lo       HANGUL SYLLABLE WAE
        0xC678 == code || // Lo       HANGUL SYLLABLE OE
        0xC694 == code || // Lo       HANGUL SYLLABLE YO
        0xC6B0 == code || // Lo       HANGUL SYLLABLE U
        0xC6CC == code || // Lo       HANGUL SYLLABLE WEO
        0xC6E8 == code || // Lo       HANGUL SYLLABLE WE
        0xC704 == code || // Lo       HANGUL SYLLABLE WI
        0xC720 == code || // Lo       HANGUL SYLLABLE YU
        0xC73C == code || // Lo       HANGUL SYLLABLE EU
        0xC758 == code || // Lo       HANGUL SYLLABLE YI
        0xC774 == code || // Lo       HANGUL SYLLABLE I
        0xC790 == code || // Lo       HANGUL SYLLABLE JA
        0xC7AC == code || // Lo       HANGUL SYLLABLE JAE
        0xC7C8 == code || // Lo       HANGUL SYLLABLE JYA
        0xC7E4 == code || // Lo       HANGUL SYLLABLE JYAE
        0xC800 == code || // Lo       HANGUL SYLLABLE JEO
        0xC81C == code || // Lo       HANGUL SYLLABLE JE
        0xC838 == code || // Lo       HANGUL SYLLABLE JYEO
        0xC854 == code || // Lo       HANGUL SYLLABLE JYE
        0xC870 == code || // Lo       HANGUL SYLLABLE JO
        0xC88C == code || // Lo       HANGUL SYLLABLE JWA
        0xC8A8 == code || // Lo       HANGUL SYLLABLE JWAE
        0xC8C4 == code || // Lo       HANGUL SYLLABLE JOE
        0xC8E0 == code || // Lo       HANGUL SYLLABLE JYO
        0xC8FC == code || // Lo       HANGUL SYLLABLE JU
        0xC918 == code || // Lo       HANGUL SYLLABLE JWEO
        0xC934 == code || // Lo       HANGUL SYLLABLE JWE
        0xC950 == code || // Lo       HANGUL SYLLABLE JWI
        0xC96C == code || // Lo       HANGUL SYLLABLE JYU
        0xC988 == code || // Lo       HANGUL SYLLABLE JEU
        0xC9A4 == code || // Lo       HANGUL SYLLABLE JYI
        0xC9C0 == code || // Lo       HANGUL SYLLABLE JI
        0xC9DC == code || // Lo       HANGUL SYLLABLE JJA
        0xC9F8 == code || // Lo       HANGUL SYLLABLE JJAE
        0xCA14 == code || // Lo       HANGUL SYLLABLE JJYA
        0xCA30 == code || // Lo       HANGUL SYLLABLE JJYAE
        0xCA4C == code || // Lo       HANGUL SYLLABLE JJEO
        0xCA68 == code || // Lo       HANGUL SYLLABLE JJE
        0xCA84 == code || // Lo       HANGUL SYLLABLE JJYEO
        0xCAA0 == code || // Lo       HANGUL SYLLABLE JJYE
        0xCABC == code || // Lo       HANGUL SYLLABLE JJO
        0xCAD8 == code || // Lo       HANGUL SYLLABLE JJWA
        0xCAF4 == code || // Lo       HANGUL SYLLABLE JJWAE
        0xCB10 == code || // Lo       HANGUL SYLLABLE JJOE
        0xCB2C == code || // Lo       HANGUL SYLLABLE JJYO
        0xCB48 == code || // Lo       HANGUL SYLLABLE JJU
        0xCB64 == code || // Lo       HANGUL SYLLABLE JJWEO
        0xCB80 == code || // Lo       HANGUL SYLLABLE JJWE
        0xCB9C == code || // Lo       HANGUL SYLLABLE JJWI
        0xCBB8 == code || // Lo       HANGUL SYLLABLE JJYU
        0xCBD4 == code || // Lo       HANGUL SYLLABLE JJEU
        0xCBF0 == code || // Lo       HANGUL SYLLABLE JJYI
        0xCC0C == code || // Lo       HANGUL SYLLABLE JJI
        0xCC28 == code || // Lo       HANGUL SYLLABLE CA
        0xCC44 == code || // Lo       HANGUL SYLLABLE CAE
        0xCC60 == code || // Lo       HANGUL SYLLABLE CYA
        0xCC7C == code || // Lo       HANGUL SYLLABLE CYAE
        0xCC98 == code || // Lo       HANGUL SYLLABLE CEO
        0xCCB4 == code || // Lo       HANGUL SYLLABLE CE
        0xCCD0 == code || // Lo       HANGUL SYLLABLE CYEO
        0xCCEC == code || // Lo       HANGUL SYLLABLE CYE
        0xCD08 == code || // Lo       HANGUL SYLLABLE CO
        0xCD24 == code || // Lo       HANGUL SYLLABLE CWA
        0xCD40 == code || // Lo       HANGUL SYLLABLE CWAE
        0xCD5C == code || // Lo       HANGUL SYLLABLE COE
        0xCD78 == code || // Lo       HANGUL SYLLABLE CYO
        0xCD94 == code || // Lo       HANGUL SYLLABLE CU
        0xCDB0 == code || // Lo       HANGUL SYLLABLE CWEO
        0xCDCC == code || // Lo       HANGUL SYLLABLE CWE
        0xCDE8 == code || // Lo       HANGUL SYLLABLE CWI
        0xCE04 == code || // Lo       HANGUL SYLLABLE CYU
        0xCE20 == code || // Lo       HANGUL SYLLABLE CEU
        0xCE3C == code || // Lo       HANGUL SYLLABLE CYI
        0xCE58 == code || // Lo       HANGUL SYLLABLE CI
        0xCE74 == code || // Lo       HANGUL SYLLABLE KA
        0xCE90 == code || // Lo       HANGUL SYLLABLE KAE
        0xCEAC == code || // Lo       HANGUL SYLLABLE KYA
        0xCEC8 == code || // Lo       HANGUL SYLLABLE KYAE
        0xCEE4 == code || // Lo       HANGUL SYLLABLE KEO
        0xCF00 == code || // Lo       HANGUL SYLLABLE KE
        0xCF1C == code || // Lo       HANGUL SYLLABLE KYEO
        0xCF38 == code || // Lo       HANGUL SYLLABLE KYE
        0xCF54 == code || // Lo       HANGUL SYLLABLE KO
        0xCF70 == code || // Lo       HANGUL SYLLABLE KWA
        0xCF8C == code || // Lo       HANGUL SYLLABLE KWAE
        0xCFA8 == code || // Lo       HANGUL SYLLABLE KOE
        0xCFC4 == code || // Lo       HANGUL SYLLABLE KYO
        0xCFE0 == code || // Lo       HANGUL SYLLABLE KU
        0xCFFC == code || // Lo       HANGUL SYLLABLE KWEO
        0xD018 == code || // Lo       HANGUL SYLLABLE KWE
        0xD034 == code || // Lo       HANGUL SYLLABLE KWI
        0xD050 == code || // Lo       HANGUL SYLLABLE KYU
        0xD06C == code || // Lo       HANGUL SYLLABLE KEU
        0xD088 == code || // Lo       HANGUL SYLLABLE KYI
        0xD0A4 == code || // Lo       HANGUL SYLLABLE KI
        0xD0C0 == code || // Lo       HANGUL SYLLABLE TA
        0xD0DC == code || // Lo       HANGUL SYLLABLE TAE
        0xD0F8 == code || // Lo       HANGUL SYLLABLE TYA
        0xD114 == code || // Lo       HANGUL SYLLABLE TYAE
        0xD130 == code || // Lo       HANGUL SYLLABLE TEO
        0xD14C == code || // Lo       HANGUL SYLLABLE TE
        0xD168 == code || // Lo       HANGUL SYLLABLE TYEO
        0xD184 == code || // Lo       HANGUL SYLLABLE TYE
        0xD1A0 == code || // Lo       HANGUL SYLLABLE TO
        0xD1BC == code || // Lo       HANGUL SYLLABLE TWA
        0xD1D8 == code || // Lo       HANGUL SYLLABLE TWAE
        0xD1F4 == code || // Lo       HANGUL SYLLABLE TOE
        0xD210 == code || // Lo       HANGUL SYLLABLE TYO
        0xD22C == code || // Lo       HANGUL SYLLABLE TU
        0xD248 == code || // Lo       HANGUL SYLLABLE TWEO
        0xD264 == code || // Lo       HANGUL SYLLABLE TWE
        0xD280 == code || // Lo       HANGUL SYLLABLE TWI
        0xD29C == code || // Lo       HANGUL SYLLABLE TYU
        0xD2B8 == code || // Lo       HANGUL SYLLABLE TEU
        0xD2D4 == code || // Lo       HANGUL SYLLABLE TYI
        0xD2F0 == code || // Lo       HANGUL SYLLABLE TI
        0xD30C == code || // Lo       HANGUL SYLLABLE PA
        0xD328 == code || // Lo       HANGUL SYLLABLE PAE
        0xD344 == code || // Lo       HANGUL SYLLABLE PYA
        0xD360 == code || // Lo       HANGUL SYLLABLE PYAE
        0xD37C == code || // Lo       HANGUL SYLLABLE PEO
        0xD398 == code || // Lo       HANGUL SYLLABLE PE
        0xD3B4 == code || // Lo       HANGUL SYLLABLE PYEO
        0xD3D0 == code || // Lo       HANGUL SYLLABLE PYE
        0xD3EC == code || // Lo       HANGUL SYLLABLE PO
        0xD408 == code || // Lo       HANGUL SYLLABLE PWA
        0xD424 == code || // Lo       HANGUL SYLLABLE PWAE
        0xD440 == code || // Lo       HANGUL SYLLABLE POE
        0xD45C == code || // Lo       HANGUL SYLLABLE PYO
        0xD478 == code || // Lo       HANGUL SYLLABLE PU
        0xD494 == code || // Lo       HANGUL SYLLABLE PWEO
        0xD4B0 == code || // Lo       HANGUL SYLLABLE PWE
        0xD4CC == code || // Lo       HANGUL SYLLABLE PWI
        0xD4E8 == code || // Lo       HANGUL SYLLABLE PYU
        0xD504 == code || // Lo       HANGUL SYLLABLE PEU
        0xD520 == code || // Lo       HANGUL SYLLABLE PYI
        0xD53C == code || // Lo       HANGUL SYLLABLE PI
        0xD558 == code || // Lo       HANGUL SYLLABLE HA
        0xD574 == code || // Lo       HANGUL SYLLABLE HAE
        0xD590 == code || // Lo       HANGUL SYLLABLE HYA
        0xD5AC == code || // Lo       HANGUL SYLLABLE HYAE
        0xD5C8 == code || // Lo       HANGUL SYLLABLE HEO
        0xD5E4 == code || // Lo       HANGUL SYLLABLE HE
        0xD600 == code || // Lo       HANGUL SYLLABLE HYEO
        0xD61C == code || // Lo       HANGUL SYLLABLE HYE
        0xD638 == code || // Lo       HANGUL SYLLABLE HO
        0xD654 == code || // Lo       HANGUL SYLLABLE HWA
        0xD670 == code || // Lo       HANGUL SYLLABLE HWAE
        0xD68C == code || // Lo       HANGUL SYLLABLE HOE
        0xD6A8 == code || // Lo       HANGUL SYLLABLE HYO
        0xD6C4 == code || // Lo       HANGUL SYLLABLE HU
        0xD6E0 == code || // Lo       HANGUL SYLLABLE HWEO
        0xD6FC == code || // Lo       HANGUL SYLLABLE HWE
        0xD718 == code || // Lo       HANGUL SYLLABLE HWI
        0xD734 == code || // Lo       HANGUL SYLLABLE HYU
        0xD750 == code || // Lo       HANGUL SYLLABLE HEU
        0xD76C == code || // Lo       HANGUL SYLLABLE HYI
        0xD788 == code // Lo       HANGUL SYLLABLE HI
        ) {
            return LV;
        }
        if (0xAC01 <= code && code <= 0xAC1B || 0xAC1D <= code && code <= 0xAC37 || 0xAC39 <= code && code <= 0xAC53 || 0xAC55 <= code && code <= 0xAC6F || 0xAC71 <= code && code <= 0xAC8B || 0xAC8D <= code && code <= 0xACA7 || 0xACA9 <= code && code <= 0xACC3 || 0xACC5 <= code && code <= 0xACDF || 0xACE1 <= code && code <= 0xACFB || 0xACFD <= code && code <= 0xAD17 || 0xAD19 <= code && code <= 0xAD33 || 0xAD35 <= code && code <= 0xAD4F || 0xAD51 <= code && code <= 0xAD6B || 0xAD6D <= code && code <= 0xAD87 || 0xAD89 <= code && code <= 0xADA3 || 0xADA5 <= code && code <= 0xADBF || 0xADC1 <= code && code <= 0xADDB || 0xADDD <= code && code <= 0xADF7 || 0xADF9 <= code && code <= 0xAE13 || 0xAE15 <= code && code <= 0xAE2F || 0xAE31 <= code && code <= 0xAE4B || 0xAE4D <= code && code <= 0xAE67 || 0xAE69 <= code && code <= 0xAE83 || 0xAE85 <= code && code <= 0xAE9F || 0xAEA1 <= code && code <= 0xAEBB || 0xAEBD <= code && code <= 0xAED7 || 0xAED9 <= code && code <= 0xAEF3 || 0xAEF5 <= code && code <= 0xAF0F || 0xAF11 <= code && code <= 0xAF2B || 0xAF2D <= code && code <= 0xAF47 || 0xAF49 <= code && code <= 0xAF63 || 0xAF65 <= code && code <= 0xAF7F || 0xAF81 <= code && code <= 0xAF9B || 0xAF9D <= code && code <= 0xAFB7 || 0xAFB9 <= code && code <= 0xAFD3 || 0xAFD5 <= code && code <= 0xAFEF || 0xAFF1 <= code && code <= 0xB00B || 0xB00D <= code && code <= 0xB027 || 0xB029 <= code && code <= 0xB043 || 0xB045 <= code && code <= 0xB05F || 0xB061 <= code && code <= 0xB07B || 0xB07D <= code && code <= 0xB097 || 0xB099 <= code && code <= 0xB0B3 || 0xB0B5 <= code && code <= 0xB0CF || 0xB0D1 <= code && code <= 0xB0EB || 0xB0ED <= code && code <= 0xB107 || 0xB109 <= code && code <= 0xB123 || 0xB125 <= code && code <= 0xB13F || 0xB141 <= code && code <= 0xB15B || 0xB15D <= code && code <= 0xB177 || 0xB179 <= code && code <= 0xB193 || 0xB195 <= code && code <= 0xB1AF || 0xB1B1 <= code && code <= 0xB1CB || 0xB1CD <= code && code <= 0xB1E7 || 0xB1E9 <= code && code <= 0xB203 || 0xB205 <= code && code <= 0xB21F || 0xB221 <= code && code <= 0xB23B || 0xB23D <= code && code <= 0xB257 || 0xB259 <= code && code <= 0xB273 || 0xB275 <= code && code <= 0xB28F || 0xB291 <= code && code <= 0xB2AB || 0xB2AD <= code && code <= 0xB2C7 || 0xB2C9 <= code && code <= 0xB2E3 || 0xB2E5 <= code && code <= 0xB2FF || 0xB301 <= code && code <= 0xB31B || 0xB31D <= code && code <= 0xB337 || 0xB339 <= code && code <= 0xB353 || 0xB355 <= code && code <= 0xB36F || 0xB371 <= code && code <= 0xB38B || 0xB38D <= code && code <= 0xB3A7 || 0xB3A9 <= code && code <= 0xB3C3 || 0xB3C5 <= code && code <= 0xB3DF || 0xB3E1 <= code && code <= 0xB3FB || 0xB3FD <= code && code <= 0xB417 || 0xB419 <= code && code <= 0xB433 || 0xB435 <= code && code <= 0xB44F || 0xB451 <= code && code <= 0xB46B || 0xB46D <= code && code <= 0xB487 || 0xB489 <= code && code <= 0xB4A3 || 0xB4A5 <= code && code <= 0xB4BF || 0xB4C1 <= code && code <= 0xB4DB || 0xB4DD <= code && code <= 0xB4F7 || 0xB4F9 <= code && code <= 0xB513 || 0xB515 <= code && code <= 0xB52F || 0xB531 <= code && code <= 0xB54B || 0xB54D <= code && code <= 0xB567 || 0xB569 <= code && code <= 0xB583 || 0xB585 <= code && code <= 0xB59F || 0xB5A1 <= code && code <= 0xB5BB || 0xB5BD <= code && code <= 0xB5D7 || 0xB5D9 <= code && code <= 0xB5F3 || 0xB5F5 <= code && code <= 0xB60F || 0xB611 <= code && code <= 0xB62B || 0xB62D <= code && code <= 0xB647 || 0xB649 <= code && code <= 0xB663 || 0xB665 <= code && code <= 0xB67F || 0xB681 <= code && code <= 0xB69B || 0xB69D <= code && code <= 0xB6B7 || 0xB6B9 <= code && code <= 0xB6D3 || 0xB6D5 <= code && code <= 0xB6EF || 0xB6F1 <= code && code <= 0xB70B || 0xB70D <= code && code <= 0xB727 || 0xB729 <= code && code <= 0xB743 || 0xB745 <= code && code <= 0xB75F || 0xB761 <= code && code <= 0xB77B || 0xB77D <= code && code <= 0xB797 || 0xB799 <= code && code <= 0xB7B3 || 0xB7B5 <= code && code <= 0xB7CF || 0xB7D1 <= code && code <= 0xB7EB || 0xB7ED <= code && code <= 0xB807 || 0xB809 <= code && code <= 0xB823 || 0xB825 <= code && code <= 0xB83F || 0xB841 <= code && code <= 0xB85B || 0xB85D <= code && code <= 0xB877 || 0xB879 <= code && code <= 0xB893 || 0xB895 <= code && code <= 0xB8AF || 0xB8B1 <= code && code <= 0xB8CB || 0xB8CD <= code && code <= 0xB8E7 || 0xB8E9 <= code && code <= 0xB903 || 0xB905 <= code && code <= 0xB91F || 0xB921 <= code && code <= 0xB93B || 0xB93D <= code && code <= 0xB957 || 0xB959 <= code && code <= 0xB973 || 0xB975 <= code && code <= 0xB98F || 0xB991 <= code && code <= 0xB9AB || 0xB9AD <= code && code <= 0xB9C7 || 0xB9C9 <= code && code <= 0xB9E3 || 0xB9E5 <= code && code <= 0xB9FF || 0xBA01 <= code && code <= 0xBA1B || 0xBA1D <= code && code <= 0xBA37 || 0xBA39 <= code && code <= 0xBA53 || 0xBA55 <= code && code <= 0xBA6F || 0xBA71 <= code && code <= 0xBA8B || 0xBA8D <= code && code <= 0xBAA7 || 0xBAA9 <= code && code <= 0xBAC3 || 0xBAC5 <= code && code <= 0xBADF || 0xBAE1 <= code && code <= 0xBAFB || 0xBAFD <= code && code <= 0xBB17 || 0xBB19 <= code && code <= 0xBB33 || 0xBB35 <= code && code <= 0xBB4F || 0xBB51 <= code && code <= 0xBB6B || 0xBB6D <= code && code <= 0xBB87 || 0xBB89 <= code && code <= 0xBBA3 || 0xBBA5 <= code && code <= 0xBBBF || 0xBBC1 <= code && code <= 0xBBDB || 0xBBDD <= code && code <= 0xBBF7 || 0xBBF9 <= code && code <= 0xBC13 || 0xBC15 <= code && code <= 0xBC2F || 0xBC31 <= code && code <= 0xBC4B || 0xBC4D <= code && code <= 0xBC67 || 0xBC69 <= code && code <= 0xBC83 || 0xBC85 <= code && code <= 0xBC9F || 0xBCA1 <= code && code <= 0xBCBB || 0xBCBD <= code && code <= 0xBCD7 || 0xBCD9 <= code && code <= 0xBCF3 || 0xBCF5 <= code && code <= 0xBD0F || 0xBD11 <= code && code <= 0xBD2B || 0xBD2D <= code && code <= 0xBD47 || 0xBD49 <= code && code <= 0xBD63 || 0xBD65 <= code && code <= 0xBD7F || 0xBD81 <= code && code <= 0xBD9B || 0xBD9D <= code && code <= 0xBDB7 || 0xBDB9 <= code && code <= 0xBDD3 || 0xBDD5 <= code && code <= 0xBDEF || 0xBDF1 <= code && code <= 0xBE0B || 0xBE0D <= code && code <= 0xBE27 || 0xBE29 <= code && code <= 0xBE43 || 0xBE45 <= code && code <= 0xBE5F || 0xBE61 <= code && code <= 0xBE7B || 0xBE7D <= code && code <= 0xBE97 || 0xBE99 <= code && code <= 0xBEB3 || 0xBEB5 <= code && code <= 0xBECF || 0xBED1 <= code && code <= 0xBEEB || 0xBEED <= code && code <= 0xBF07 || 0xBF09 <= code && code <= 0xBF23 || 0xBF25 <= code && code <= 0xBF3F || 0xBF41 <= code && code <= 0xBF5B || 0xBF5D <= code && code <= 0xBF77 || 0xBF79 <= code && code <= 0xBF93 || 0xBF95 <= code && code <= 0xBFAF || 0xBFB1 <= code && code <= 0xBFCB || 0xBFCD <= code && code <= 0xBFE7 || 0xBFE9 <= code && code <= 0xC003 || 0xC005 <= code && code <= 0xC01F || 0xC021 <= code && code <= 0xC03B || 0xC03D <= code && code <= 0xC057 || 0xC059 <= code && code <= 0xC073 || 0xC075 <= code && code <= 0xC08F || 0xC091 <= code && code <= 0xC0AB || 0xC0AD <= code && code <= 0xC0C7 || 0xC0C9 <= code && code <= 0xC0E3 || 0xC0E5 <= code && code <= 0xC0FF || 0xC101 <= code && code <= 0xC11B || 0xC11D <= code && code <= 0xC137 || 0xC139 <= code && code <= 0xC153 || 0xC155 <= code && code <= 0xC16F || 0xC171 <= code && code <= 0xC18B || 0xC18D <= code && code <= 0xC1A7 || 0xC1A9 <= code && code <= 0xC1C3 || 0xC1C5 <= code && code <= 0xC1DF || 0xC1E1 <= code && code <= 0xC1FB || 0xC1FD <= code && code <= 0xC217 || 0xC219 <= code && code <= 0xC233 || 0xC235 <= code && code <= 0xC24F || 0xC251 <= code && code <= 0xC26B || 0xC26D <= code && code <= 0xC287 || 0xC289 <= code && code <= 0xC2A3 || 0xC2A5 <= code && code <= 0xC2BF || 0xC2C1 <= code && code <= 0xC2DB || 0xC2DD <= code && code <= 0xC2F7 || 0xC2F9 <= code && code <= 0xC313 || 0xC315 <= code && code <= 0xC32F || 0xC331 <= code && code <= 0xC34B || 0xC34D <= code && code <= 0xC367 || 0xC369 <= code && code <= 0xC383 || 0xC385 <= code && code <= 0xC39F || 0xC3A1 <= code && code <= 0xC3BB || 0xC3BD <= code && code <= 0xC3D7 || 0xC3D9 <= code && code <= 0xC3F3 || 0xC3F5 <= code && code <= 0xC40F || 0xC411 <= code && code <= 0xC42B || 0xC42D <= code && code <= 0xC447 || 0xC449 <= code && code <= 0xC463 || 0xC465 <= code && code <= 0xC47F || 0xC481 <= code && code <= 0xC49B || 0xC49D <= code && code <= 0xC4B7 || 0xC4B9 <= code && code <= 0xC4D3 || 0xC4D5 <= code && code <= 0xC4EF || 0xC4F1 <= code && code <= 0xC50B || 0xC50D <= code && code <= 0xC527 || 0xC529 <= code && code <= 0xC543 || 0xC545 <= code && code <= 0xC55F || 0xC561 <= code && code <= 0xC57B || 0xC57D <= code && code <= 0xC597 || 0xC599 <= code && code <= 0xC5B3 || 0xC5B5 <= code && code <= 0xC5CF || 0xC5D1 <= code && code <= 0xC5EB || 0xC5ED <= code && code <= 0xC607 || 0xC609 <= code && code <= 0xC623 || 0xC625 <= code && code <= 0xC63F || 0xC641 <= code && code <= 0xC65B || 0xC65D <= code && code <= 0xC677 || 0xC679 <= code && code <= 0xC693 || 0xC695 <= code && code <= 0xC6AF || 0xC6B1 <= code && code <= 0xC6CB || 0xC6CD <= code && code <= 0xC6E7 || 0xC6E9 <= code && code <= 0xC703 || 0xC705 <= code && code <= 0xC71F || 0xC721 <= code && code <= 0xC73B || 0xC73D <= code && code <= 0xC757 || 0xC759 <= code && code <= 0xC773 || 0xC775 <= code && code <= 0xC78F || 0xC791 <= code && code <= 0xC7AB || 0xC7AD <= code && code <= 0xC7C7 || 0xC7C9 <= code && code <= 0xC7E3 || 0xC7E5 <= code && code <= 0xC7FF || 0xC801 <= code && code <= 0xC81B || 0xC81D <= code && code <= 0xC837 || 0xC839 <= code && code <= 0xC853 || 0xC855 <= code && code <= 0xC86F || 0xC871 <= code && code <= 0xC88B || 0xC88D <= code && code <= 0xC8A7 || 0xC8A9 <= code && code <= 0xC8C3 || 0xC8C5 <= code && code <= 0xC8DF || 0xC8E1 <= code && code <= 0xC8FB || 0xC8FD <= code && code <= 0xC917 || 0xC919 <= code && code <= 0xC933 || 0xC935 <= code && code <= 0xC94F || 0xC951 <= code && code <= 0xC96B || 0xC96D <= code && code <= 0xC987 || 0xC989 <= code && code <= 0xC9A3 || 0xC9A5 <= code && code <= 0xC9BF || 0xC9C1 <= code && code <= 0xC9DB || 0xC9DD <= code && code <= 0xC9F7 || 0xC9F9 <= code && code <= 0xCA13 || 0xCA15 <= code && code <= 0xCA2F || 0xCA31 <= code && code <= 0xCA4B || 0xCA4D <= code && code <= 0xCA67 || 0xCA69 <= code && code <= 0xCA83 || 0xCA85 <= code && code <= 0xCA9F || 0xCAA1 <= code && code <= 0xCABB || 0xCABD <= code && code <= 0xCAD7 || 0xCAD9 <= code && code <= 0xCAF3 || 0xCAF5 <= code && code <= 0xCB0F || 0xCB11 <= code && code <= 0xCB2B || 0xCB2D <= code && code <= 0xCB47 || 0xCB49 <= code && code <= 0xCB63 || 0xCB65 <= code && code <= 0xCB7F || 0xCB81 <= code && code <= 0xCB9B || 0xCB9D <= code && code <= 0xCBB7 || 0xCBB9 <= code && code <= 0xCBD3 || 0xCBD5 <= code && code <= 0xCBEF || 0xCBF1 <= code && code <= 0xCC0B || 0xCC0D <= code && code <= 0xCC27 || 0xCC29 <= code && code <= 0xCC43 || 0xCC45 <= code && code <= 0xCC5F || 0xCC61 <= code && code <= 0xCC7B || 0xCC7D <= code && code <= 0xCC97 || 0xCC99 <= code && code <= 0xCCB3 || 0xCCB5 <= code && code <= 0xCCCF || 0xCCD1 <= code && code <= 0xCCEB || 0xCCED <= code && code <= 0xCD07 || 0xCD09 <= code && code <= 0xCD23 || 0xCD25 <= code && code <= 0xCD3F || 0xCD41 <= code && code <= 0xCD5B || 0xCD5D <= code && code <= 0xCD77 || 0xCD79 <= code && code <= 0xCD93 || 0xCD95 <= code && code <= 0xCDAF || 0xCDB1 <= code && code <= 0xCDCB || 0xCDCD <= code && code <= 0xCDE7 || 0xCDE9 <= code && code <= 0xCE03 || 0xCE05 <= code && code <= 0xCE1F || 0xCE21 <= code && code <= 0xCE3B || 0xCE3D <= code && code <= 0xCE57 || 0xCE59 <= code && code <= 0xCE73 || 0xCE75 <= code && code <= 0xCE8F || 0xCE91 <= code && code <= 0xCEAB || 0xCEAD <= code && code <= 0xCEC7 || 0xCEC9 <= code && code <= 0xCEE3 || 0xCEE5 <= code && code <= 0xCEFF || 0xCF01 <= code && code <= 0xCF1B || 0xCF1D <= code && code <= 0xCF37 || 0xCF39 <= code && code <= 0xCF53 || 0xCF55 <= code && code <= 0xCF6F || 0xCF71 <= code && code <= 0xCF8B || 0xCF8D <= code && code <= 0xCFA7 || 0xCFA9 <= code && code <= 0xCFC3 || 0xCFC5 <= code && code <= 0xCFDF || 0xCFE1 <= code && code <= 0xCFFB || 0xCFFD <= code && code <= 0xD017 || 0xD019 <= code && code <= 0xD033 || 0xD035 <= code && code <= 0xD04F || 0xD051 <= code && code <= 0xD06B || 0xD06D <= code && code <= 0xD087 || 0xD089 <= code && code <= 0xD0A3 || 0xD0A5 <= code && code <= 0xD0BF || 0xD0C1 <= code && code <= 0xD0DB || 0xD0DD <= code && code <= 0xD0F7 || 0xD0F9 <= code && code <= 0xD113 || 0xD115 <= code && code <= 0xD12F || 0xD131 <= code && code <= 0xD14B || 0xD14D <= code && code <= 0xD167 || 0xD169 <= code && code <= 0xD183 || 0xD185 <= code && code <= 0xD19F || 0xD1A1 <= code && code <= 0xD1BB || 0xD1BD <= code && code <= 0xD1D7 || 0xD1D9 <= code && code <= 0xD1F3 || 0xD1F5 <= code && code <= 0xD20F || 0xD211 <= code && code <= 0xD22B || 0xD22D <= code && code <= 0xD247 || 0xD249 <= code && code <= 0xD263 || 0xD265 <= code && code <= 0xD27F || 0xD281 <= code && code <= 0xD29B || 0xD29D <= code && code <= 0xD2B7 || 0xD2B9 <= code && code <= 0xD2D3 || 0xD2D5 <= code && code <= 0xD2EF || 0xD2F1 <= code && code <= 0xD30B || 0xD30D <= code && code <= 0xD327 || 0xD329 <= code && code <= 0xD343 || 0xD345 <= code && code <= 0xD35F || 0xD361 <= code && code <= 0xD37B || 0xD37D <= code && code <= 0xD397 || 0xD399 <= code && code <= 0xD3B3 || 0xD3B5 <= code && code <= 0xD3CF || 0xD3D1 <= code && code <= 0xD3EB || 0xD3ED <= code && code <= 0xD407 || 0xD409 <= code && code <= 0xD423 || 0xD425 <= code && code <= 0xD43F || 0xD441 <= code && code <= 0xD45B || 0xD45D <= code && code <= 0xD477 || 0xD479 <= code && code <= 0xD493 || 0xD495 <= code && code <= 0xD4AF || 0xD4B1 <= code && code <= 0xD4CB || 0xD4CD <= code && code <= 0xD4E7 || 0xD4E9 <= code && code <= 0xD503 || 0xD505 <= code && code <= 0xD51F || 0xD521 <= code && code <= 0xD53B || 0xD53D <= code && code <= 0xD557 || 0xD559 <= code && code <= 0xD573 || 0xD575 <= code && code <= 0xD58F || 0xD591 <= code && code <= 0xD5AB || 0xD5AD <= code && code <= 0xD5C7 || 0xD5C9 <= code && code <= 0xD5E3 || 0xD5E5 <= code && code <= 0xD5FF || 0xD601 <= code && code <= 0xD61B || 0xD61D <= code && code <= 0xD637 || 0xD639 <= code && code <= 0xD653 || 0xD655 <= code && code <= 0xD66F || 0xD671 <= code && code <= 0xD68B || 0xD68D <= code && code <= 0xD6A7 || 0xD6A9 <= code && code <= 0xD6C3 || 0xD6C5 <= code && code <= 0xD6DF || 0xD6E1 <= code && code <= 0xD6FB || 0xD6FD <= code && code <= 0xD717 || 0xD719 <= code && code <= 0xD733 || 0xD735 <= code && code <= 0xD74F || 0xD751 <= code && code <= 0xD76B || 0xD76D <= code && code <= 0xD787 || 0xD789 <= code && code <= 0xD7A3 // Lo  [27] HANGUL SYLLABLE HIG..HANGUL SYLLABLE HIH
        ) {
            return LVT;
        }
        if (0x261D == code || // So       WHITE UP POINTING INDEX
        0x26F9 == code || 0x270A <= code && code <= 0x270D || // So   [4] RAISED FIST..WRITING HAND
        0x1F385 == code || 0x1F3C2 <= code && code <= 0x1F3C4 || // So   [3] SNOWBOARDER..SURFER
        0x1F3C7 == code || 0x1F3CA <= code && code <= 0x1F3CC || 0x1F442 <= code && code <= 0x1F443 || 0x1F446 <= code && code <= 0x1F450 || // So  [11] WHITE UP POINTING BACKHAND INDEX..OPEN HANDS SIGN
        0x1F46E == code || 0x1F470 <= code && code <= 0x1F478 || // So   [9] BRIDE WITH VEIL..PRINCESS
        0x1F47C == code || 0x1F481 <= code && code <= 0x1F483 || 0x1F485 <= code && code <= 0x1F487 || // So   [3] NAIL POLISH..HAIRCUT
        0x1F4AA == code || 0x1F574 <= code && code <= 0x1F575 || // So   [2] MAN IN BUSINESS SUIT LEVITATING..SLEUTH OR SPY
        0x1F57A == code || // So       MAN DANCING
        0x1F590 == code || 0x1F595 <= code && code <= 0x1F596 || 0x1F645 <= code && code <= 0x1F647 || 0x1F64B <= code && code <= 0x1F64F || // So   [5] HAPPY PERSON RAISING ONE HAND..PERSON WITH FOLDED HANDS
        0x1F6A3 == code || 0x1F6B4 <= code && code <= 0x1F6B6 || // So   [3] BICYCLIST..PEDESTRIAN
        0x1F6C0 == code || // So       BATH
        0x1F6CC == code || 0x1F918 <= code && code <= 0x1F91C || 0x1F91E <= code && code <= 0x1F91F || // So   [2] HAND WITH INDEX AND MIDDLE FINGERS CROSSED..I LOVE YOU HAND SIGN
        0x1F926 == code || 0x1F930 <= code && code <= 0x1F939 || 0x1F93D <= code && code <= 0x1F93E || 0x1F9D1 <= code && code <= 0x1F9DD // So  [13] ADULT..ELF
        ) {
            return E_Base;
        }
        if (0x1F3FB <= code && code <= 0x1F3FF) {
            return E_Modifier;
        }
        if (0x200D == code // Cf       ZERO WIDTH JOINER
        ) {
            return ZWJ;
        }
        if (0x2640 == code || // So       FEMALE SIGN
        0x2642 == code || 0x2695 <= code && code <= 0x2696 || // So   [2] STAFF OF AESCULAPIUS..SCALES
        0x2708 == code || // So       AIRPLANE
        0x2764 == code || // So       HEAVY BLACK HEART
        0x1F308 == code || // So       RAINBOW
        0x1F33E == code || // So       EAR OF RICE
        0x1F373 == code || // So       COOKING
        0x1F393 == code || // So       GRADUATION CAP
        0x1F3A4 == code || // So       MICROPHONE
        0x1F3A8 == code || // So       ARTIST PALETTE
        0x1F3EB == code || // So       SCHOOL
        0x1F3ED == code || // So       FACTORY
        0x1F48B == code || 0x1F4BB <= code && code <= 0x1F4BC || // So   [2] PERSONAL COMPUTER..BRIEFCASE
        0x1F527 == code || // So       WRENCH
        0x1F52C == code || // So       MICROSCOPE
        0x1F5E8 == code || // So       LEFT SPEECH BUBBLE
        0x1F680 == code || // So       ROCKET
        0x1F692 == code // So       FIRE ENGINE
        ) {
            return Glue_After_Zwj;
        }
        if (0x1F466 <= code && code <= 0x1F469) {
            return E_Base_GAZ;
        }
        //all unlisted characters have a grapheme break property of "Other"
        return Other;
    }
    return this;
}
if (("TURBOPACK compile-time value", "object") != 'undefined' && module.exports) {
    module.exports = GraphemeSplitter;
}
}),
"[project]/node_modules/kdbush/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KDBush
]);
const ARRAY_TYPES = [
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array
];
/** @typedef {Int8ArrayConstructor | Uint8ArrayConstructor | Uint8ClampedArrayConstructor | Int16ArrayConstructor | Uint16ArrayConstructor | Int32ArrayConstructor | Uint32ArrayConstructor | Float32ArrayConstructor | Float64ArrayConstructor} TypedArrayConstructor */ const VERSION = 1; // serialized format version
const HEADER_SIZE = 8;
class KDBush {
    /**
     * Creates an index from raw `ArrayBuffer` data.
     * @param {ArrayBuffer} data
     */ static from(data) {
        if (!(data instanceof ArrayBuffer)) {
            throw new Error('Data must be an instance of ArrayBuffer.');
        }
        const [magic, versionAndType] = new Uint8Array(data, 0, 2);
        if (magic !== 0xdb) {
            throw new Error('Data does not appear to be in a KDBush format.');
        }
        const version = versionAndType >> 4;
        if (version !== VERSION) {
            throw new Error(`Got v${version} data when expected v${VERSION}.`);
        }
        const ArrayType = ARRAY_TYPES[versionAndType & 0x0f];
        if (!ArrayType) {
            throw new Error('Unrecognized array type.');
        }
        const [nodeSize] = new Uint16Array(data, 2, 1);
        const [numItems] = new Uint32Array(data, 4, 1);
        return new KDBush(numItems, nodeSize, ArrayType, data);
    }
    /**
     * Creates an index that will hold a given number of items.
     * @param {number} numItems
     * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
     * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
     * @param {ArrayBuffer} [data] (For internal use only)
     */ constructor(numItems, nodeSize = 64, ArrayType = Float64Array, data){
        if (isNaN(numItems) || numItems < 0) throw new Error(`Unpexpected numItems value: ${numItems}.`);
        this.numItems = +numItems;
        this.nodeSize = Math.min(Math.max(+nodeSize, 2), 65535);
        this.ArrayType = ArrayType;
        this.IndexArrayType = numItems < 65536 ? Uint16Array : Uint32Array;
        const arrayTypeIndex = ARRAY_TYPES.indexOf(this.ArrayType);
        const coordsByteSize = numItems * 2 * this.ArrayType.BYTES_PER_ELEMENT;
        const idsByteSize = numItems * this.IndexArrayType.BYTES_PER_ELEMENT;
        const padCoords = (8 - idsByteSize % 8) % 8;
        if (arrayTypeIndex < 0) {
            throw new Error(`Unexpected typed array class: ${ArrayType}.`);
        }
        if (data && data instanceof ArrayBuffer) {
            this.data = data;
            this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
            this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
            this._pos = numItems * 2;
            this._finished = true;
        } else {
            this.data = new ArrayBuffer(HEADER_SIZE + coordsByteSize + idsByteSize + padCoords);
            this.ids = new this.IndexArrayType(this.data, HEADER_SIZE, numItems);
            this.coords = new this.ArrayType(this.data, HEADER_SIZE + idsByteSize + padCoords, numItems * 2);
            this._pos = 0;
            this._finished = false;
            // set header
            new Uint8Array(this.data, 0, 2).set([
                0xdb,
                (VERSION << 4) + arrayTypeIndex
            ]);
            new Uint16Array(this.data, 2, 1)[0] = nodeSize;
            new Uint32Array(this.data, 4, 1)[0] = numItems;
        }
    }
    /**
     * Add a point to the index.
     * @param {number} x
     * @param {number} y
     * @returns {number} An incremental index associated with the added item (starting from `0`).
     */ add(x, y) {
        const index = this._pos >> 1;
        this.ids[index] = index;
        this.coords[this._pos++] = x;
        this.coords[this._pos++] = y;
        return index;
    }
    /**
     * Perform indexing of the added points.
     */ finish() {
        const numAdded = this._pos >> 1;
        if (numAdded !== this.numItems) {
            throw new Error(`Added ${numAdded} items when expected ${this.numItems}.`);
        }
        // kd-sort both arrays for efficient search
        sort(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0);
        this._finished = true;
        return this;
    }
    /**
     * Search the index for items within a given bounding box.
     * @param {number} minX
     * @param {number} minY
     * @param {number} maxX
     * @param {number} maxY
     * @returns {number[]} An array of indices correponding to the found items.
     */ range(minX, minY, maxX, maxY) {
        if (!this._finished) throw new Error('Data not yet indexed - call index.finish().');
        const { ids, coords, nodeSize } = this;
        const stack = [
            0,
            ids.length - 1,
            0
        ];
        const result = [];
        // recursively search for items in range in the kd-sorted arrays
        while(stack.length){
            const axis = stack.pop() || 0;
            const right = stack.pop() || 0;
            const left = stack.pop() || 0;
            // if we reached "tree node", search linearly
            if (right - left <= nodeSize) {
                for(let i = left; i <= right; i++){
                    const x = coords[2 * i];
                    const y = coords[2 * i + 1];
                    if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[i]);
                }
                continue;
            }
            // otherwise find the middle index
            const m = left + right >> 1;
            // include the middle item if it's in range
            const x = coords[2 * m];
            const y = coords[2 * m + 1];
            if (x >= minX && x <= maxX && y >= minY && y <= maxY) result.push(ids[m]);
            // queue search in halves that intersect the query
            if (axis === 0 ? minX <= x : minY <= y) {
                stack.push(left);
                stack.push(m - 1);
                stack.push(1 - axis);
            }
            if (axis === 0 ? maxX >= x : maxY >= y) {
                stack.push(m + 1);
                stack.push(right);
                stack.push(1 - axis);
            }
        }
        return result;
    }
    /**
     * Search the index for items within a given radius.
     * @param {number} qx
     * @param {number} qy
     * @param {number} r Query radius.
     * @returns {number[]} An array of indices correponding to the found items.
     */ within(qx, qy, r) {
        if (!this._finished) throw new Error('Data not yet indexed - call index.finish().');
        const { ids, coords, nodeSize } = this;
        const stack = [
            0,
            ids.length - 1,
            0
        ];
        const result = [];
        const r2 = r * r;
        // recursively search for items within radius in the kd-sorted arrays
        while(stack.length){
            const axis = stack.pop() || 0;
            const right = stack.pop() || 0;
            const left = stack.pop() || 0;
            // if we reached "tree node", search linearly
            if (right - left <= nodeSize) {
                for(let i = left; i <= right; i++){
                    if (sqDist(coords[2 * i], coords[2 * i + 1], qx, qy) <= r2) result.push(ids[i]);
                }
                continue;
            }
            // otherwise find the middle index
            const m = left + right >> 1;
            // include the middle item if it's in range
            const x = coords[2 * m];
            const y = coords[2 * m + 1];
            if (sqDist(x, y, qx, qy) <= r2) result.push(ids[m]);
            // queue search in halves that intersect the query
            if (axis === 0 ? qx - r <= x : qy - r <= y) {
                stack.push(left);
                stack.push(m - 1);
                stack.push(1 - axis);
            }
            if (axis === 0 ? qx + r >= x : qy + r >= y) {
                stack.push(m + 1);
                stack.push(right);
                stack.push(1 - axis);
            }
        }
        return result;
    }
}
/**
 * @param {Uint16Array | Uint32Array} ids
 * @param {InstanceType<TypedArrayConstructor>} coords
 * @param {number} nodeSize
 * @param {number} left
 * @param {number} right
 * @param {number} axis
 */ function sort(ids, coords, nodeSize, left, right, axis) {
    if (right - left <= nodeSize) return;
    const m = left + right >> 1; // middle index
    // sort ids and coords around the middle index so that the halves lie
    // either left/right or top/bottom correspondingly (taking turns)
    select(ids, coords, m, left, right, axis);
    // recursively kd-sort first half and second half on the opposite axis
    sort(ids, coords, nodeSize, left, m - 1, 1 - axis);
    sort(ids, coords, nodeSize, m + 1, right, 1 - axis);
}
/**
 * Custom Floyd-Rivest selection algorithm: sort ids and coords so that
 * [left..k-1] items are smaller than k-th item (on either x or y axis)
 * @param {Uint16Array | Uint32Array} ids
 * @param {InstanceType<TypedArrayConstructor>} coords
 * @param {number} k
 * @param {number} left
 * @param {number} right
 * @param {number} axis
 */ function select(ids, coords, k, left, right, axis) {
    while(right > left){
        if (right - left > 600) {
            const n = right - left + 1;
            const m = k - left + 1;
            const z = Math.log(n);
            const s = 0.5 * Math.exp(2 * z / 3);
            const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            select(ids, coords, k, newLeft, newRight, axis);
        }
        const t = coords[2 * k + axis];
        let i = left;
        let j = right;
        swapItem(ids, coords, left, k);
        if (coords[2 * right + axis] > t) swapItem(ids, coords, left, right);
        while(i < j){
            swapItem(ids, coords, i, j);
            i++;
            j--;
            while(coords[2 * i + axis] < t)i++;
            while(coords[2 * j + axis] > t)j--;
        }
        if (coords[2 * left + axis] === t) swapItem(ids, coords, left, j);
        else {
            j++;
            swapItem(ids, coords, j, right);
        }
        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}
/**
 * @param {Uint16Array | Uint32Array} ids
 * @param {InstanceType<TypedArrayConstructor>} coords
 * @param {number} i
 * @param {number} j
 */ function swapItem(ids, coords, i, j) {
    swap(ids, i, j);
    swap(coords, 2 * i, 2 * j);
    swap(coords, 2 * i + 1, 2 * j + 1);
}
/**
 * @param {InstanceType<TypedArrayConstructor>} arr
 * @param {number} i
 * @param {number} j
 */ function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
/**
 * @param {number} ax
 * @param {number} ay
 * @param {number} bx
 * @param {number} by
 */ function sqDist(ax, ay, bx, by) {
    const dx = ax - bx;
    const dy = ay - by;
    return dx * dx + dy * dy;
}
}),
"[project]/node_modules/@cesium/engine/node_modules/earcut/src/earcut.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>earcut,
    "deviation",
    ()=>deviation,
    "flatten",
    ()=>flatten
]);
function earcut(data, holeIndices, dim = 2) {
    const hasHoles = holeIndices && holeIndices.length;
    const outerLen = hasHoles ? holeIndices[0] * dim : data.length;
    let outerNode = linkedList(data, 0, outerLen, dim, true);
    const triangles = [];
    if (!outerNode || outerNode.next === outerNode.prev) return triangles;
    let minX, minY, invSize;
    if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
    // if the shape is not too simple, we'll use z-order curve hash later; calculate polygon bbox
    if (data.length > 80 * dim) {
        minX = data[0];
        minY = data[1];
        let maxX = minX;
        let maxY = minY;
        for(let i = dim; i < outerLen; i += dim){
            const x = data[i];
            const y = data[i + 1];
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
        }
        // minX, minY and invSize are later used to transform coords into integers for z-order calculation
        invSize = Math.max(maxX - minX, maxY - minY);
        invSize = invSize !== 0 ? 32767 / invSize : 0;
    }
    earcutLinked(outerNode, triangles, dim, minX, minY, invSize, 0);
    return triangles;
}
// create a circular doubly linked list from polygon points in the specified winding order
function linkedList(data, start, end, dim, clockwise) {
    let last;
    if (clockwise === signedArea(data, start, end, dim) > 0) {
        for(let i = start; i < end; i += dim)last = insertNode(i / dim | 0, data[i], data[i + 1], last);
    } else {
        for(let i = end - dim; i >= start; i -= dim)last = insertNode(i / dim | 0, data[i], data[i + 1], last);
    }
    if (last && equals(last, last.next)) {
        removeNode(last);
        last = last.next;
    }
    return last;
}
// eliminate colinear or duplicate points
function filterPoints(start, end) {
    if (!start) return start;
    if (!end) end = start;
    let p = start, again;
    do {
        again = false;
        if (!p.steiner && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
            removeNode(p);
            p = end = p.prev;
            if (p === p.next) break;
            again = true;
        } else {
            p = p.next;
        }
    }while (again || p !== end)
    return end;
}
// main ear slicing loop which triangulates a polygon (given as a linked list)
function earcutLinked(ear, triangles, dim, minX, minY, invSize, pass) {
    if (!ear) return;
    // interlink polygon nodes in z-order
    if (!pass && invSize) indexCurve(ear, minX, minY, invSize);
    let stop = ear;
    // iterate through ears, slicing them one by one
    while(ear.prev !== ear.next){
        const prev = ear.prev;
        const next = ear.next;
        if (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear)) {
            triangles.push(prev.i, ear.i, next.i); // cut off the triangle
            removeNode(ear);
            // skipping the next vertex leads to less sliver triangles
            ear = next.next;
            stop = next.next;
            continue;
        }
        ear = next;
        // if we looped through the whole remaining polygon and can't find any more ears
        if (ear === stop) {
            // try filtering points and slicing again
            if (!pass) {
                earcutLinked(filterPoints(ear), triangles, dim, minX, minY, invSize, 1);
            // if this didn't work, try curing all small self-intersections locally
            } else if (pass === 1) {
                ear = cureLocalIntersections(filterPoints(ear), triangles);
                earcutLinked(ear, triangles, dim, minX, minY, invSize, 2);
            // as a last resort, try splitting the remaining polygon into two
            } else if (pass === 2) {
                splitEarcut(ear, triangles, dim, minX, minY, invSize);
            }
            break;
        }
    }
}
// check whether a polygon node forms a valid ear with adjacent nodes
function isEar(ear) {
    const a = ear.prev, b = ear, c = ear.next;
    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear
    // now make sure we don't have other points inside the potential ear
    const ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;
    // triangle bbox
    const x0 = Math.min(ax, bx, cx), y0 = Math.min(ay, by, cy), x1 = Math.max(ax, bx, cx), y1 = Math.max(ay, by, cy);
    let p = c.next;
    while(p !== a){
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.next;
    }
    return true;
}
function isEarHashed(ear, minX, minY, invSize) {
    const a = ear.prev, b = ear, c = ear.next;
    if (area(a, b, c) >= 0) return false; // reflex, can't be an ear
    const ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y;
    // triangle bbox
    const x0 = Math.min(ax, bx, cx), y0 = Math.min(ay, by, cy), x1 = Math.max(ax, bx, cx), y1 = Math.max(ay, by, cy);
    // z-order range for the current triangle bbox;
    const minZ = zOrder(x0, y0, minX, minY, invSize), maxZ = zOrder(x1, y1, minX, minY, invSize);
    let p = ear.prevZ, n = ear.nextZ;
    // look for points inside the triangle in both directions
    while(p && p.z >= minZ && n && n.z <= maxZ){
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c && pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c && pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }
    // look for remaining points in decreasing z-order
    while(p && p.z >= minZ){
        if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== a && p !== c && pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
        p = p.prevZ;
    }
    // look for remaining points in increasing z-order
    while(n && n.z <= maxZ){
        if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== a && n !== c && pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
        n = n.nextZ;
    }
    return true;
}
// go through all polygon nodes and cure small local self-intersections
function cureLocalIntersections(start, triangles) {
    let p = start;
    do {
        const a = p.prev, b = p.next.next;
        if (!equals(a, b) && intersects(a, p, p.next, b) && locallyInside(a, b) && locallyInside(b, a)) {
            triangles.push(a.i, p.i, b.i);
            // remove two nodes involved
            removeNode(p);
            removeNode(p.next);
            p = start = b;
        }
        p = p.next;
    }while (p !== start)
    return filterPoints(p);
}
// try splitting polygon into two and triangulate them independently
function splitEarcut(start, triangles, dim, minX, minY, invSize) {
    // look for a valid diagonal that divides the polygon into two
    let a = start;
    do {
        let b = a.next.next;
        while(b !== a.prev){
            if (a.i !== b.i && isValidDiagonal(a, b)) {
                // split the polygon in two by the diagonal
                let c = splitPolygon(a, b);
                // filter colinear points around the cuts
                a = filterPoints(a, a.next);
                c = filterPoints(c, c.next);
                // run earcut on each half
                earcutLinked(a, triangles, dim, minX, minY, invSize, 0);
                earcutLinked(c, triangles, dim, minX, minY, invSize, 0);
                return;
            }
            b = b.next;
        }
        a = a.next;
    }while (a !== start)
}
// link every hole into the outer loop, producing a single-ring polygon without holes
function eliminateHoles(data, holeIndices, outerNode, dim) {
    const queue = [];
    for(let i = 0, len = holeIndices.length; i < len; i++){
        const start = holeIndices[i] * dim;
        const end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
        const list = linkedList(data, start, end, dim, false);
        if (list === list.next) list.steiner = true;
        queue.push(getLeftmost(list));
    }
    queue.sort(compareXYSlope);
    // process holes from left to right
    for(let i = 0; i < queue.length; i++){
        outerNode = eliminateHole(queue[i], outerNode);
    }
    return outerNode;
}
function compareXYSlope(a, b) {
    let result = a.x - b.x;
    // when the left-most point of 2 holes meet at a vertex, sort the holes counterclockwise so that when we find
    // the bridge to the outer shell is always the point that they meet at.
    if (result === 0) {
        result = a.y - b.y;
        if (result === 0) {
            const aSlope = (a.next.y - a.y) / (a.next.x - a.x);
            const bSlope = (b.next.y - b.y) / (b.next.x - b.x);
            result = aSlope - bSlope;
        }
    }
    return result;
}
// find a bridge between vertices that connects hole with an outer ring and link it
function eliminateHole(hole, outerNode) {
    const bridge = findHoleBridge(hole, outerNode);
    if (!bridge) {
        return outerNode;
    }
    const bridgeReverse = splitPolygon(bridge, hole);
    // filter collinear points around the cuts
    filterPoints(bridgeReverse, bridgeReverse.next);
    return filterPoints(bridge, bridge.next);
}
// David Eberly's algorithm for finding a bridge between hole and outer polygon
function findHoleBridge(hole, outerNode) {
    let p = outerNode;
    const hx = hole.x;
    const hy = hole.y;
    let qx = -Infinity;
    let m;
    // find a segment intersected by a ray from the hole's leftmost point to the left;
    // segment's endpoint with lesser x will be potential connection point
    // unless they intersect at a vertex, then choose the vertex
    if (equals(hole, p)) return p;
    do {
        if (equals(hole, p.next)) return p.next;
        else if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
            const x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
            if (x <= hx && x > qx) {
                qx = x;
                m = p.x < p.next.x ? p : p.next;
                if (x === hx) return m; // hole touches outer segment; pick leftmost endpoint
            }
        }
        p = p.next;
    }while (p !== outerNode)
    if (!m) return null;
    // look for points inside the triangle of hole point, segment intersection and endpoint;
    // if there are no points found, we have a valid connection;
    // otherwise choose the point of the minimum angle with the ray as connection point
    const stop = m;
    const mx = m.x;
    const my = m.y;
    let tanMin = Infinity;
    p = m;
    do {
        if (hx >= p.x && p.x >= mx && hx !== p.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
            const tan = Math.abs(hy - p.y) / (hx - p.x); // tangential
            if (locallyInside(p, hole) && (tan < tanMin || tan === tanMin && (p.x > m.x || p.x === m.x && sectorContainsSector(m, p)))) {
                m = p;
                tanMin = tan;
            }
        }
        p = p.next;
    }while (p !== stop)
    return m;
}
// whether sector in vertex m contains sector in vertex p in the same coordinates
function sectorContainsSector(m, p) {
    return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
}
// interlink polygon nodes in z-order
function indexCurve(start, minX, minY, invSize) {
    let p = start;
    do {
        if (p.z === 0) p.z = zOrder(p.x, p.y, minX, minY, invSize);
        p.prevZ = p.prev;
        p.nextZ = p.next;
        p = p.next;
    }while (p !== start)
    p.prevZ.nextZ = null;
    p.prevZ = null;
    sortLinked(p);
}
// Simon Tatham's linked list merge sort algorithm
// http://www.chiark.greenend.org.uk/~sgtatham/algorithms/listsort.html
function sortLinked(list) {
    let numMerges;
    let inSize = 1;
    do {
        let p = list;
        let e;
        list = null;
        let tail = null;
        numMerges = 0;
        while(p){
            numMerges++;
            let q = p;
            let pSize = 0;
            for(let i = 0; i < inSize; i++){
                pSize++;
                q = q.nextZ;
                if (!q) break;
            }
            let qSize = inSize;
            while(pSize > 0 || qSize > 0 && q){
                if (pSize !== 0 && (qSize === 0 || !q || p.z <= q.z)) {
                    e = p;
                    p = p.nextZ;
                    pSize--;
                } else {
                    e = q;
                    q = q.nextZ;
                    qSize--;
                }
                if (tail) tail.nextZ = e;
                else list = e;
                e.prevZ = tail;
                tail = e;
            }
            p = q;
        }
        tail.nextZ = null;
        inSize *= 2;
    }while (numMerges > 1)
    return list;
}
// z-order of a point given coords and inverse of the longer side of data bbox
function zOrder(x, y, minX, minY, invSize) {
    // coords are transformed into non-negative 15-bit integer range
    x = (x - minX) * invSize | 0;
    y = (y - minY) * invSize | 0;
    x = (x | x << 8) & 0x00FF00FF;
    x = (x | x << 4) & 0x0F0F0F0F;
    x = (x | x << 2) & 0x33333333;
    x = (x | x << 1) & 0x55555555;
    y = (y | y << 8) & 0x00FF00FF;
    y = (y | y << 4) & 0x0F0F0F0F;
    y = (y | y << 2) & 0x33333333;
    y = (y | y << 1) & 0x55555555;
    return x | y << 1;
}
// find the leftmost node of a polygon ring
function getLeftmost(start) {
    let p = start, leftmost = start;
    do {
        if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y) leftmost = p;
        p = p.next;
    }while (p !== start)
    return leftmost;
}
// check if a point lies within a convex triangle
function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
    return (cx - px) * (ay - py) >= (ax - px) * (cy - py) && (ax - px) * (by - py) >= (bx - px) * (ay - py) && (bx - px) * (cy - py) >= (cx - px) * (by - py);
}
// check if a point lies within a convex triangle but false if its equal to the first point of the triangle
function pointInTriangleExceptFirst(ax, ay, bx, by, cx, cy, px, py) {
    return !(ax === px && ay === py) && pointInTriangle(ax, ay, bx, by, cx, cy, px, py);
}
// check if a diagonal between two polygon nodes is valid (lies in polygon interior)
function isValidDiagonal(a, b) {
    return a.next.i !== b.i && a.prev.i !== b.i && !intersectsPolygon(a, b) && // doesn't intersect other edges
    (locallyInside(a, b) && locallyInside(b, a) && middleInside(a, b) && // locally visible
    (area(a.prev, a, b.prev) || area(a, b.prev, b)) || // does not create opposite-facing sectors
    equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0); // special zero-length case
}
// signed area of a triangle
function area(p, q, r) {
    return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
}
// check if two points are equal
function equals(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
}
// check if two segments intersect
function intersects(p1, q1, p2, q2) {
    const o1 = sign(area(p1, q1, p2));
    const o2 = sign(area(p1, q1, q2));
    const o3 = sign(area(p2, q2, p1));
    const o4 = sign(area(p2, q2, q1));
    if (o1 !== o2 && o3 !== o4) return true; // general case
    if (o1 === 0 && onSegment(p1, p2, q1)) return true; // p1, q1 and p2 are collinear and p2 lies on p1q1
    if (o2 === 0 && onSegment(p1, q2, q1)) return true; // p1, q1 and q2 are collinear and q2 lies on p1q1
    if (o3 === 0 && onSegment(p2, p1, q2)) return true; // p2, q2 and p1 are collinear and p1 lies on p2q2
    if (o4 === 0 && onSegment(p2, q1, q2)) return true; // p2, q2 and q1 are collinear and q1 lies on p2q2
    return false;
}
// for collinear points p, q, r, check if point q lies on segment pr
function onSegment(p, q, r) {
    return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
}
function sign(num) {
    return num > 0 ? 1 : num < 0 ? -1 : 0;
}
// check if a polygon diagonal intersects any polygon segments
function intersectsPolygon(a, b) {
    let p = a;
    do {
        if (p.i !== a.i && p.next.i !== a.i && p.i !== b.i && p.next.i !== b.i && intersects(p, p.next, a, b)) return true;
        p = p.next;
    }while (p !== a)
    return false;
}
// check if a polygon diagonal is locally inside the polygon
function locallyInside(a, b) {
    return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
}
// check if the middle point of a polygon diagonal is inside the polygon
function middleInside(a, b) {
    let p = a;
    let inside = false;
    const px = (a.x + b.x) / 2;
    const py = (a.y + b.y) / 2;
    do {
        if (p.y > py !== p.next.y > py && p.next.y !== p.y && px < (p.next.x - p.x) * (py - p.y) / (p.next.y - p.y) + p.x) inside = !inside;
        p = p.next;
    }while (p !== a)
    return inside;
}
// link two polygon vertices with a bridge; if the vertices belong to the same ring, it splits polygon into two;
// if one belongs to the outer ring and another to a hole, it merges it into a single ring
function splitPolygon(a, b) {
    const a2 = createNode(a.i, a.x, a.y), b2 = createNode(b.i, b.x, b.y), an = a.next, bp = b.prev;
    a.next = b;
    b.prev = a;
    a2.next = an;
    an.prev = a2;
    b2.next = a2;
    a2.prev = b2;
    bp.next = b2;
    b2.prev = bp;
    return b2;
}
// create a node and optionally link it with previous one (in a circular doubly linked list)
function insertNode(i, x, y, last) {
    const p = createNode(i, x, y);
    if (!last) {
        p.prev = p;
        p.next = p;
    } else {
        p.next = last.next;
        p.prev = last;
        last.next.prev = p;
        last.next = p;
    }
    return p;
}
function removeNode(p) {
    p.next.prev = p.prev;
    p.prev.next = p.next;
    if (p.prevZ) p.prevZ.nextZ = p.nextZ;
    if (p.nextZ) p.nextZ.prevZ = p.prevZ;
}
function createNode(i, x, y) {
    return {
        i,
        x,
        y,
        prev: null,
        next: null,
        z: 0,
        prevZ: null,
        nextZ: null,
        steiner: false // indicates whether this is a steiner point
    };
}
function deviation(data, holeIndices, dim, triangles) {
    const hasHoles = holeIndices && holeIndices.length;
    const outerLen = hasHoles ? holeIndices[0] * dim : data.length;
    let polygonArea = Math.abs(signedArea(data, 0, outerLen, dim));
    if (hasHoles) {
        for(let i = 0, len = holeIndices.length; i < len; i++){
            const start = holeIndices[i] * dim;
            const end = i < len - 1 ? holeIndices[i + 1] * dim : data.length;
            polygonArea -= Math.abs(signedArea(data, start, end, dim));
        }
    }
    let trianglesArea = 0;
    for(let i = 0; i < triangles.length; i += 3){
        const a = triangles[i] * dim;
        const b = triangles[i + 1] * dim;
        const c = triangles[i + 2] * dim;
        trianglesArea += Math.abs((data[a] - data[c]) * (data[b + 1] - data[a + 1]) - (data[a] - data[b]) * (data[c + 1] - data[a + 1]));
    }
    return polygonArea === 0 && trianglesArea === 0 ? 0 : Math.abs((trianglesArea - polygonArea) / polygonArea);
}
function signedArea(data, start, end, dim) {
    let sum = 0;
    for(let i = start, j = end - dim; i < end; i += dim){
        sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
        j = i;
    }
    return sum;
}
function flatten(data) {
    const vertices = [];
    const holes = [];
    const dimensions = data[0][0].length;
    let holeIndex = 0;
    let prevLen = 0;
    for (const ring of data){
        for (const p of ring){
            for(let d = 0; d < dimensions; d++)vertices.push(p[d]);
        }
        if (prevLen) {
            holeIndex += prevLen;
            holes.push(holeIndex);
        }
        prevLen = ring.length;
    }
    return {
        vertices,
        holes,
        dimensions
    };
}
}),
"[project]/node_modules/rbush/node_modules/quickselect/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Rearranges items so that all items in the [left, k] are the smallest.
 * The k-th element will have the (k - left + 1)-th smallest value in [left, right].
 *
 * @template T
 * @param {T[]} arr the array to partially sort (in place)
 * @param {number} k middle index for partial sorting (as defined above)
 * @param {number} [left=0] left index of the range to sort
 * @param {number} [right=arr.length-1] right index
 * @param {(a: T, b: T) => number} [compare = (a, b) => a - b] compare function
 */ __turbopack_context__.s([
    "default",
    ()=>quickselect
]);
function quickselect(arr, k, left = 0, right = arr.length - 1, compare = defaultCompare) {
    while(right > left){
        if (right - left > 600) {
            const n = right - left + 1;
            const m = k - left + 1;
            const z = Math.log(n);
            const s = 0.5 * Math.exp(2 * z / 3);
            const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
            const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
            const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
            quickselect(arr, k, newLeft, newRight, compare);
        }
        const t = arr[k];
        let i = left;
        /** @type {number} */ let j = right;
        swap(arr, left, k);
        if (compare(arr[right], t) > 0) swap(arr, left, right);
        while(i < j){
            swap(arr, i, j);
            i++;
            j--;
            while(compare(arr[i], t) < 0)i++;
            while(compare(arr[j], t) > 0)j--;
        }
        if (compare(arr[left], t) === 0) swap(arr, left, j);
        else {
            j++;
            swap(arr, j, right);
        }
        if (j <= k) left = j + 1;
        if (k <= j) right = j - 1;
    }
}
/**
 * @template T
 * @param {T[]} arr
 * @param {number} i
 * @param {number} j
 */ function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}
/**
 * @template T
 * @param {T} a
 * @param {T} b
 * @returns {number}
 */ function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
}),
"[project]/node_modules/rbush/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RBush
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rbush$2f$node_modules$2f$quickselect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/rbush/node_modules/quickselect/index.js [app-client] (ecmascript)");
;
class RBush {
    constructor(maxEntries = 9){
        // max entries in a node is 9 by default; min node fill is 40% for best performance
        this._maxEntries = Math.max(4, maxEntries);
        this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4));
        this.clear();
    }
    all() {
        return this._all(this.data, []);
    }
    search(bbox) {
        let node = this.data;
        const result = [];
        if (!intersects(bbox, node)) return result;
        const toBBox = this.toBBox;
        const nodesToSearch = [];
        while(node){
            for(let i = 0; i < node.children.length; i++){
                const child = node.children[i];
                const childBBox = node.leaf ? toBBox(child) : child;
                if (intersects(bbox, childBBox)) {
                    if (node.leaf) result.push(child);
                    else if (contains(bbox, childBBox)) this._all(child, result);
                    else nodesToSearch.push(child);
                }
            }
            node = nodesToSearch.pop();
        }
        return result;
    }
    collides(bbox) {
        let node = this.data;
        if (!intersects(bbox, node)) return false;
        const nodesToSearch = [];
        while(node){
            for(let i = 0; i < node.children.length; i++){
                const child = node.children[i];
                const childBBox = node.leaf ? this.toBBox(child) : child;
                if (intersects(bbox, childBBox)) {
                    if (node.leaf || contains(bbox, childBBox)) return true;
                    nodesToSearch.push(child);
                }
            }
            node = nodesToSearch.pop();
        }
        return false;
    }
    load(data) {
        if (!(data && data.length)) return this;
        if (data.length < this._minEntries) {
            for(let i = 0; i < data.length; i++){
                this.insert(data[i]);
            }
            return this;
        }
        // recursively build the tree with the given data from scratch using OMT algorithm
        let node = this._build(data.slice(), 0, data.length - 1, 0);
        if (!this.data.children.length) {
            // save as is if tree is empty
            this.data = node;
        } else if (this.data.height === node.height) {
            // split root if trees have the same height
            this._splitRoot(this.data, node);
        } else {
            if (this.data.height < node.height) {
                // swap trees if inserted one is bigger
                const tmpNode = this.data;
                this.data = node;
                node = tmpNode;
            }
            // insert the small tree into the large tree at appropriate level
            this._insert(node, this.data.height - node.height - 1, true);
        }
        return this;
    }
    insert(item) {
        if (item) this._insert(item, this.data.height - 1);
        return this;
    }
    clear() {
        this.data = createNode([]);
        return this;
    }
    remove(item, equalsFn) {
        if (!item) return this;
        let node = this.data;
        const bbox = this.toBBox(item);
        const path = [];
        const indexes = [];
        let i, parent, goingUp;
        // depth-first iterative tree traversal
        while(node || path.length){
            if (!node) {
                node = path.pop();
                parent = path[path.length - 1];
                i = indexes.pop();
                goingUp = true;
            }
            if (node.leaf) {
                const index = findItem(item, node.children, equalsFn);
                if (index !== -1) {
                    // item found, remove the item and condense tree upwards
                    node.children.splice(index, 1);
                    path.push(node);
                    this._condense(path);
                    return this;
                }
            }
            if (!goingUp && !node.leaf && contains(node, bbox)) {
                path.push(node);
                indexes.push(i);
                i = 0;
                parent = node;
                node = node.children[0];
            } else if (parent) {
                i++;
                node = parent.children[i];
                goingUp = false;
            } else node = null; // nothing found
        }
        return this;
    }
    toBBox(item) {
        return item;
    }
    compareMinX(a, b) {
        return a.minX - b.minX;
    }
    compareMinY(a, b) {
        return a.minY - b.minY;
    }
    toJSON() {
        return this.data;
    }
    fromJSON(data) {
        this.data = data;
        return this;
    }
    _all(node, result) {
        const nodesToSearch = [];
        while(node){
            if (node.leaf) result.push(...node.children);
            else nodesToSearch.push(...node.children);
            node = nodesToSearch.pop();
        }
        return result;
    }
    _build(items, left, right, height) {
        const N = right - left + 1;
        let M = this._maxEntries;
        let node;
        if (N <= M) {
            // reached leaf level; return leaf
            node = createNode(items.slice(left, right + 1));
            calcBBox(node, this.toBBox);
            return node;
        }
        if (!height) {
            // target height of the bulk-loaded tree
            height = Math.ceil(Math.log(N) / Math.log(M));
            // target number of root entries to maximize storage utilization
            M = Math.ceil(N / Math.pow(M, height - 1));
        }
        node = createNode([]);
        node.leaf = false;
        node.height = height;
        // split the items into M mostly square tiles
        const N2 = Math.ceil(N / M);
        const N1 = N2 * Math.ceil(Math.sqrt(M));
        multiSelect(items, left, right, N1, this.compareMinX);
        for(let i = left; i <= right; i += N1){
            const right2 = Math.min(i + N1 - 1, right);
            multiSelect(items, i, right2, N2, this.compareMinY);
            for(let j = i; j <= right2; j += N2){
                const right3 = Math.min(j + N2 - 1, right2);
                // pack each entry recursively
                node.children.push(this._build(items, j, right3, height - 1));
            }
        }
        calcBBox(node, this.toBBox);
        return node;
    }
    _chooseSubtree(bbox, node, level, path) {
        while(true){
            path.push(node);
            if (node.leaf || path.length - 1 === level) break;
            let minArea = Infinity;
            let minEnlargement = Infinity;
            let targetNode;
            for(let i = 0; i < node.children.length; i++){
                const child = node.children[i];
                const area = bboxArea(child);
                const enlargement = enlargedArea(bbox, child) - area;
                // choose entry with the least area enlargement
                if (enlargement < minEnlargement) {
                    minEnlargement = enlargement;
                    minArea = area < minArea ? area : minArea;
                    targetNode = child;
                } else if (enlargement === minEnlargement) {
                    // otherwise choose one with the smallest area
                    if (area < minArea) {
                        minArea = area;
                        targetNode = child;
                    }
                }
            }
            node = targetNode || node.children[0];
        }
        return node;
    }
    _insert(item, level, isNode) {
        const bbox = isNode ? item : this.toBBox(item);
        const insertPath = [];
        // find the best node for accommodating the item, saving all nodes along the path too
        const node = this._chooseSubtree(bbox, this.data, level, insertPath);
        // put the item into the node
        node.children.push(item);
        extend(node, bbox);
        // split on node overflow; propagate upwards if necessary
        while(level >= 0){
            if (insertPath[level].children.length > this._maxEntries) {
                this._split(insertPath, level);
                level--;
            } else break;
        }
        // adjust bboxes along the insertion path
        this._adjustParentBBoxes(bbox, insertPath, level);
    }
    // split overflowed node into two
    _split(insertPath, level) {
        const node = insertPath[level];
        const M = node.children.length;
        const m = this._minEntries;
        this._chooseSplitAxis(node, m, M);
        const splitIndex = this._chooseSplitIndex(node, m, M);
        const newNode = createNode(node.children.splice(splitIndex, node.children.length - splitIndex));
        newNode.height = node.height;
        newNode.leaf = node.leaf;
        calcBBox(node, this.toBBox);
        calcBBox(newNode, this.toBBox);
        if (level) insertPath[level - 1].children.push(newNode);
        else this._splitRoot(node, newNode);
    }
    _splitRoot(node, newNode) {
        // split root node
        this.data = createNode([
            node,
            newNode
        ]);
        this.data.height = node.height + 1;
        this.data.leaf = false;
        calcBBox(this.data, this.toBBox);
    }
    _chooseSplitIndex(node, m, M) {
        let index;
        let minOverlap = Infinity;
        let minArea = Infinity;
        for(let i = m; i <= M - m; i++){
            const bbox1 = distBBox(node, 0, i, this.toBBox);
            const bbox2 = distBBox(node, i, M, this.toBBox);
            const overlap = intersectionArea(bbox1, bbox2);
            const area = bboxArea(bbox1) + bboxArea(bbox2);
            // choose distribution with minimum overlap
            if (overlap < minOverlap) {
                minOverlap = overlap;
                index = i;
                minArea = area < minArea ? area : minArea;
            } else if (overlap === minOverlap) {
                // otherwise choose distribution with minimum area
                if (area < minArea) {
                    minArea = area;
                    index = i;
                }
            }
        }
        return index || M - m;
    }
    // sorts node children by the best axis for split
    _chooseSplitAxis(node, m, M) {
        const compareMinX = node.leaf ? this.compareMinX : compareNodeMinX;
        const compareMinY = node.leaf ? this.compareMinY : compareNodeMinY;
        const xMargin = this._allDistMargin(node, m, M, compareMinX);
        const yMargin = this._allDistMargin(node, m, M, compareMinY);
        // if total distributions margin value is minimal for x, sort by minX,
        // otherwise it's already sorted by minY
        if (xMargin < yMargin) node.children.sort(compareMinX);
    }
    // total margin of all possible split distributions where each node is at least m full
    _allDistMargin(node, m, M, compare) {
        node.children.sort(compare);
        const toBBox = this.toBBox;
        const leftBBox = distBBox(node, 0, m, toBBox);
        const rightBBox = distBBox(node, M - m, M, toBBox);
        let margin = bboxMargin(leftBBox) + bboxMargin(rightBBox);
        for(let i = m; i < M - m; i++){
            const child = node.children[i];
            extend(leftBBox, node.leaf ? toBBox(child) : child);
            margin += bboxMargin(leftBBox);
        }
        for(let i = M - m - 1; i >= m; i--){
            const child = node.children[i];
            extend(rightBBox, node.leaf ? toBBox(child) : child);
            margin += bboxMargin(rightBBox);
        }
        return margin;
    }
    _adjustParentBBoxes(bbox, path, level) {
        // adjust bboxes along the given tree path
        for(let i = level; i >= 0; i--){
            extend(path[i], bbox);
        }
    }
    _condense(path) {
        // go through the path, removing empty nodes and updating bboxes
        for(let i = path.length - 1, siblings; i >= 0; i--){
            if (path[i].children.length === 0) {
                if (i > 0) {
                    siblings = path[i - 1].children;
                    siblings.splice(siblings.indexOf(path[i]), 1);
                } else this.clear();
            } else calcBBox(path[i], this.toBBox);
        }
    }
}
function findItem(item, items, equalsFn) {
    if (!equalsFn) return items.indexOf(item);
    for(let i = 0; i < items.length; i++){
        if (equalsFn(item, items[i])) return i;
    }
    return -1;
}
// calculate node's bbox from bboxes of its children
function calcBBox(node, toBBox) {
    distBBox(node, 0, node.children.length, toBBox, node);
}
// min bounding rectangle of node children from k to p-1
function distBBox(node, k, p, toBBox, destNode) {
    if (!destNode) destNode = createNode(null);
    destNode.minX = Infinity;
    destNode.minY = Infinity;
    destNode.maxX = -Infinity;
    destNode.maxY = -Infinity;
    for(let i = k; i < p; i++){
        const child = node.children[i];
        extend(destNode, node.leaf ? toBBox(child) : child);
    }
    return destNode;
}
function extend(a, b) {
    a.minX = Math.min(a.minX, b.minX);
    a.minY = Math.min(a.minY, b.minY);
    a.maxX = Math.max(a.maxX, b.maxX);
    a.maxY = Math.max(a.maxY, b.maxY);
    return a;
}
function compareNodeMinX(a, b) {
    return a.minX - b.minX;
}
function compareNodeMinY(a, b) {
    return a.minY - b.minY;
}
function bboxArea(a) {
    return (a.maxX - a.minX) * (a.maxY - a.minY);
}
function bboxMargin(a) {
    return a.maxX - a.minX + (a.maxY - a.minY);
}
function enlargedArea(a, b) {
    return (Math.max(b.maxX, a.maxX) - Math.min(b.minX, a.minX)) * (Math.max(b.maxY, a.maxY) - Math.min(b.minY, a.minY));
}
function intersectionArea(a, b) {
    const minX = Math.max(a.minX, b.minX);
    const minY = Math.max(a.minY, b.minY);
    const maxX = Math.min(a.maxX, b.maxX);
    const maxY = Math.min(a.maxY, b.maxY);
    return Math.max(0, maxX - minX) * Math.max(0, maxY - minY);
}
function contains(a, b) {
    return a.minX <= b.minX && a.minY <= b.minY && b.maxX <= a.maxX && b.maxY <= a.maxY;
}
function intersects(a, b) {
    return b.minX <= a.maxX && b.minY <= a.maxY && b.maxX >= a.minX && b.maxY >= a.minY;
}
function createNode(children) {
    return {
        children,
        height: 1,
        leaf: true,
        minX: Infinity,
        minY: Infinity,
        maxX: -Infinity,
        maxY: -Infinity
    };
}
// sort an array so that items come in groups of n unsorted items, with groups sorted between each other;
// combines selection algorithm with binary divide & conquer approach
function multiSelect(arr, left, right, n, compare) {
    const stack = [
        left,
        right
    ];
    while(stack.length){
        right = stack.pop();
        left = stack.pop();
        if (right - left <= n) continue;
        const mid = left + Math.ceil((right - left) / n / 2) * n;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$rbush$2f$node_modules$2f$quickselect$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(arr, mid, left, right, compare);
        stack.push(left, mid, mid, right);
    }
}
}),
"[project]/apps/web/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/apps/web/node_modules/next/dist/compiled/buffer") + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();
}),
"[project]/node_modules/jsep/dist/jsep.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Jsep",
    ()=>Jsep,
    "default",
    ()=>jsep
]);
/**
 * @implements {IHooks}
 */ class Hooks {
    /**
	 * @callback HookCallback
	 * @this {*|Jsep} this
	 * @param {Jsep} env
	 * @returns: void
	 */ /**
	 * Adds the given callback to the list of callbacks for the given hook.
	 *
	 * The callback will be invoked when the hook it is registered for is run.
	 *
	 * One callback function can be registered to multiple hooks and the same hook multiple times.
	 *
	 * @param {string|object} name The name of the hook, or an object of callbacks keyed by name
	 * @param {HookCallback|boolean} callback The callback function which is given environment variables.
	 * @param {?boolean} [first=false] Will add the hook to the top of the list (defaults to the bottom)
	 * @public
	 */ add(name, callback, first) {
        if (typeof arguments[0] != 'string') {
            // Multiple hook callbacks, keyed by name
            for(let name in arguments[0]){
                this.add(name, arguments[0][name], arguments[1]);
            }
        } else {
            (Array.isArray(name) ? name : [
                name
            ]).forEach(function(name) {
                this[name] = this[name] || [];
                if (callback) {
                    this[name][first ? 'unshift' : 'push'](callback);
                }
            }, this);
        }
    }
    /**
	 * Runs a hook invoking all registered callbacks with the given environment variables.
	 *
	 * Callbacks will be invoked synchronously and in the order in which they were registered.
	 *
	 * @param {string} name The name of the hook.
	 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
	 * @public
	 */ run(name, env) {
        this[name] = this[name] || [];
        this[name].forEach(function(callback) {
            callback.call(env && env.context ? env.context : env, env);
        });
    }
}
/**
 * @implements {IPlugins}
 */ class Plugins {
    constructor(jsep){
        this.jsep = jsep;
        this.registered = {};
    }
    /**
	 * @callback PluginSetup
	 * @this {Jsep} jsep
	 * @returns: void
	 */ /**
	 * Adds the given plugin(s) to the registry
	 *
	 * @param {object} plugins
	 * @param {string} plugins.name The name of the plugin
	 * @param {PluginSetup} plugins.init The init function
	 * @public
	 */ register(...plugins) {
        plugins.forEach((plugin)=>{
            if (typeof plugin !== 'object' || !plugin.name || !plugin.init) {
                throw new Error('Invalid JSEP plugin format');
            }
            if (this.registered[plugin.name]) {
                // already registered. Ignore.
                return;
            }
            plugin.init(this.jsep);
            this.registered[plugin.name] = plugin;
        });
    }
}
//     JavaScript Expression Parser (JSEP) 1.4.0
class Jsep {
    /**
	 * @returns {string}
	 */ static get version() {
        // To be filled in by the template
        return '1.4.0';
    }
    /**
	 * @returns {string}
	 */ static toString() {
        return 'JavaScript Expression Parser (JSEP) v' + Jsep.version;
    }
    // ==================== CONFIG ================================
    /**
	 * @method addUnaryOp
	 * @param {string} op_name The name of the unary op to add
	 * @returns {Jsep}
	 */ static addUnaryOp(op_name) {
        Jsep.max_unop_len = Math.max(op_name.length, Jsep.max_unop_len);
        Jsep.unary_ops[op_name] = 1;
        return Jsep;
    }
    /**
	 * @method jsep.addBinaryOp
	 * @param {string} op_name The name of the binary op to add
	 * @param {number} precedence The precedence of the binary op (can be a float). Higher number = higher precedence
	 * @param {boolean} [isRightAssociative=false] whether operator is right-associative
	 * @returns {Jsep}
	 */ static addBinaryOp(op_name, precedence, isRightAssociative) {
        Jsep.max_binop_len = Math.max(op_name.length, Jsep.max_binop_len);
        Jsep.binary_ops[op_name] = precedence;
        if (isRightAssociative) {
            Jsep.right_associative.add(op_name);
        } else {
            Jsep.right_associative.delete(op_name);
        }
        return Jsep;
    }
    /**
	 * @method addIdentifierChar
	 * @param {string} char The additional character to treat as a valid part of an identifier
	 * @returns {Jsep}
	 */ static addIdentifierChar(char) {
        Jsep.additional_identifier_chars.add(char);
        return Jsep;
    }
    /**
	 * @method addLiteral
	 * @param {string} literal_name The name of the literal to add
	 * @param {*} literal_value The value of the literal
	 * @returns {Jsep}
	 */ static addLiteral(literal_name, literal_value) {
        Jsep.literals[literal_name] = literal_value;
        return Jsep;
    }
    /**
	 * @method removeUnaryOp
	 * @param {string} op_name The name of the unary op to remove
	 * @returns {Jsep}
	 */ static removeUnaryOp(op_name) {
        delete Jsep.unary_ops[op_name];
        if (op_name.length === Jsep.max_unop_len) {
            Jsep.max_unop_len = Jsep.getMaxKeyLen(Jsep.unary_ops);
        }
        return Jsep;
    }
    /**
	 * @method removeAllUnaryOps
	 * @returns {Jsep}
	 */ static removeAllUnaryOps() {
        Jsep.unary_ops = {};
        Jsep.max_unop_len = 0;
        return Jsep;
    }
    /**
	 * @method removeIdentifierChar
	 * @param {string} char The additional character to stop treating as a valid part of an identifier
	 * @returns {Jsep}
	 */ static removeIdentifierChar(char) {
        Jsep.additional_identifier_chars.delete(char);
        return Jsep;
    }
    /**
	 * @method removeBinaryOp
	 * @param {string} op_name The name of the binary op to remove
	 * @returns {Jsep}
	 */ static removeBinaryOp(op_name) {
        delete Jsep.binary_ops[op_name];
        if (op_name.length === Jsep.max_binop_len) {
            Jsep.max_binop_len = Jsep.getMaxKeyLen(Jsep.binary_ops);
        }
        Jsep.right_associative.delete(op_name);
        return Jsep;
    }
    /**
	 * @method removeAllBinaryOps
	 * @returns {Jsep}
	 */ static removeAllBinaryOps() {
        Jsep.binary_ops = {};
        Jsep.max_binop_len = 0;
        return Jsep;
    }
    /**
	 * @method removeLiteral
	 * @param {string} literal_name The name of the literal to remove
	 * @returns {Jsep}
	 */ static removeLiteral(literal_name) {
        delete Jsep.literals[literal_name];
        return Jsep;
    }
    /**
	 * @method removeAllLiterals
	 * @returns {Jsep}
	 */ static removeAllLiterals() {
        Jsep.literals = {};
        return Jsep;
    }
    // ==================== END CONFIG ============================
    /**
	 * @returns {string}
	 */ get char() {
        return this.expr.charAt(this.index);
    }
    /**
	 * @returns {number}
	 */ get code() {
        return this.expr.charCodeAt(this.index);
    }
    /**
	 * @param {string} expr a string with the passed in express
	 * @returns Jsep
	 */ constructor(expr){
        // `index` stores the character number we are currently at
        // All of the gobbles below will modify `index` as we move along
        this.expr = expr;
        this.index = 0;
    }
    /**
	 * static top-level parser
	 * @returns {jsep.Expression}
	 */ static parse(expr) {
        return new Jsep(expr).parse();
    }
    /**
	 * Get the longest key length of any object
	 * @param {object} obj
	 * @returns {number}
	 */ static getMaxKeyLen(obj) {
        return Math.max(0, ...Object.keys(obj).map((k)=>k.length));
    }
    /**
	 * `ch` is a character code in the next three functions
	 * @param {number} ch
	 * @returns {boolean}
	 */ static isDecimalDigit(ch) {
        return ch >= 48 && ch <= 57; // 0...9
    }
    /**
	 * Returns the precedence of a binary operator or `0` if it isn't a binary operator. Can be float.
	 * @param {string} op_val
	 * @returns {number}
	 */ static binaryPrecedence(op_val) {
        return Jsep.binary_ops[op_val] || 0;
    }
    /**
	 * Looks for start of identifier
	 * @param {number} ch
	 * @returns {boolean}
	 */ static isIdentifierStart(ch) {
        return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 128 && !Jsep.binary_ops[String.fromCharCode(ch)] || Jsep.additional_identifier_chars.has(String.fromCharCode(ch)); // additional characters
    }
    /**
	 * @param {number} ch
	 * @returns {boolean}
	 */ static isIdentifierPart(ch) {
        return Jsep.isIdentifierStart(ch) || Jsep.isDecimalDigit(ch);
    }
    /**
	 * throw error at index of the expression
	 * @param {string} message
	 * @throws
	 */ throwError(message) {
        const error = new Error(message + ' at character ' + this.index);
        error.index = this.index;
        error.description = message;
        throw error;
    }
    /**
	 * Run a given hook
	 * @param {string} name
	 * @param {jsep.Expression|false} [node]
	 * @returns {?jsep.Expression}
	 */ runHook(name, node) {
        if (Jsep.hooks[name]) {
            const env = {
                context: this,
                node
            };
            Jsep.hooks.run(name, env);
            return env.node;
        }
        return node;
    }
    /**
	 * Runs a given hook until one returns a node
	 * @param {string} name
	 * @returns {?jsep.Expression}
	 */ searchHook(name) {
        if (Jsep.hooks[name]) {
            const env = {
                context: this
            };
            Jsep.hooks[name].find(function(callback) {
                callback.call(env.context, env);
                return env.node;
            });
            return env.node;
        }
    }
    /**
	 * Push `index` up to the next non-space character
	 */ gobbleSpaces() {
        let ch = this.code;
        // Whitespace
        while(ch === Jsep.SPACE_CODE || ch === Jsep.TAB_CODE || ch === Jsep.LF_CODE || ch === Jsep.CR_CODE){
            ch = this.expr.charCodeAt(++this.index);
        }
        this.runHook('gobble-spaces');
    }
    /**
	 * Top-level method to parse all expressions and returns compound or single node
	 * @returns {jsep.Expression}
	 */ parse() {
        this.runHook('before-all');
        const nodes = this.gobbleExpressions();
        // If there's only one expression just try returning the expression
        const node = nodes.length === 1 ? nodes[0] : {
            type: Jsep.COMPOUND,
            body: nodes
        };
        return this.runHook('after-all', node);
    }
    /**
	 * top-level parser (but can be reused within as well)
	 * @param {number} [untilICode]
	 * @returns {jsep.Expression[]}
	 */ gobbleExpressions(untilICode) {
        let nodes = [], ch_i, node;
        while(this.index < this.expr.length){
            ch_i = this.code;
            // Expressions can be separated by semicolons, commas, or just inferred without any
            // separators
            if (ch_i === Jsep.SEMCOL_CODE || ch_i === Jsep.COMMA_CODE) {
                this.index++; // ignore separators
            } else {
                // Try to gobble each expression individually
                if (node = this.gobbleExpression()) {
                    nodes.push(node);
                // If we weren't able to find a binary expression and are out of room, then
                // the expression passed in probably has too much
                } else if (this.index < this.expr.length) {
                    if (ch_i === untilICode) {
                        break;
                    }
                    this.throwError('Unexpected "' + this.char + '"');
                }
            }
        }
        return nodes;
    }
    /**
	 * The main parsing function.
	 * @returns {?jsep.Expression}
	 */ gobbleExpression() {
        const node = this.searchHook('gobble-expression') || this.gobbleBinaryExpression();
        this.gobbleSpaces();
        return this.runHook('after-expression', node);
    }
    /**
	 * Search for the operation portion of the string (e.g. `+`, `===`)
	 * Start by taking the longest possible binary operations (3 characters: `===`, `!==`, `>>>`)
	 * and move down from 3 to 2 to 1 character until a matching binary operation is found
	 * then, return that binary operation
	 * @returns {string|boolean}
	 */ gobbleBinaryOp() {
        this.gobbleSpaces();
        let to_check = this.expr.substr(this.index, Jsep.max_binop_len);
        let tc_len = to_check.length;
        while(tc_len > 0){
            // Don't accept a binary op when it is an identifier.
            // Binary ops that start with a identifier-valid character must be followed
            // by a non identifier-part valid character
            if (Jsep.binary_ops.hasOwnProperty(to_check) && (!Jsep.isIdentifierStart(this.code) || this.index + to_check.length < this.expr.length && !Jsep.isIdentifierPart(this.expr.charCodeAt(this.index + to_check.length)))) {
                this.index += tc_len;
                return to_check;
            }
            to_check = to_check.substr(0, --tc_len);
        }
        return false;
    }
    /**
	 * This function is responsible for gobbling an individual expression,
	 * e.g. `1`, `1+2`, `a+(b*2)-Math.sqrt(2)`
	 * @returns {?jsep.BinaryExpression}
	 */ gobbleBinaryExpression() {
        let node, biop, prec, stack, biop_info, left, right, i, cur_biop;
        // First, try to get the leftmost thing
        // Then, check to see if there's a binary operator operating on that leftmost thing
        // Don't gobbleBinaryOp without a left-hand-side
        left = this.gobbleToken();
        if (!left) {
            return left;
        }
        biop = this.gobbleBinaryOp();
        // If there wasn't a binary operator, just return the leftmost node
        if (!biop) {
            return left;
        }
        // Otherwise, we need to start a stack to properly place the binary operations in their
        // precedence structure
        biop_info = {
            value: biop,
            prec: Jsep.binaryPrecedence(biop),
            right_a: Jsep.right_associative.has(biop)
        };
        right = this.gobbleToken();
        if (!right) {
            this.throwError("Expected expression after " + biop);
        }
        stack = [
            left,
            biop_info,
            right
        ];
        // Properly deal with precedence using [recursive descent](http://www.engr.mun.ca/~theo/Misc/exp_parsing.htm)
        while(biop = this.gobbleBinaryOp()){
            prec = Jsep.binaryPrecedence(biop);
            if (prec === 0) {
                this.index -= biop.length;
                break;
            }
            biop_info = {
                value: biop,
                prec,
                right_a: Jsep.right_associative.has(biop)
            };
            cur_biop = biop;
            // Reduce: make a binary expression from the three topmost entries.
            const comparePrev = (prev)=>biop_info.right_a && prev.right_a ? prec > prev.prec : prec <= prev.prec;
            while(stack.length > 2 && comparePrev(stack[stack.length - 2])){
                right = stack.pop();
                biop = stack.pop().value;
                left = stack.pop();
                node = {
                    type: Jsep.BINARY_EXP,
                    operator: biop,
                    left,
                    right
                };
                stack.push(node);
            }
            node = this.gobbleToken();
            if (!node) {
                this.throwError("Expected expression after " + cur_biop);
            }
            stack.push(biop_info, node);
        }
        i = stack.length - 1;
        node = stack[i];
        while(i > 1){
            node = {
                type: Jsep.BINARY_EXP,
                operator: stack[i - 1].value,
                left: stack[i - 2],
                right: node
            };
            i -= 2;
        }
        return node;
    }
    /**
	 * An individual part of a binary expression:
	 * e.g. `foo.bar(baz)`, `1`, `"abc"`, `(a % 2)` (because it's in parenthesis)
	 * @returns {boolean|jsep.Expression}
	 */ gobbleToken() {
        let ch, to_check, tc_len, node;
        this.gobbleSpaces();
        node = this.searchHook('gobble-token');
        if (node) {
            return this.runHook('after-token', node);
        }
        ch = this.code;
        if (Jsep.isDecimalDigit(ch) || ch === Jsep.PERIOD_CODE) {
            // Char code 46 is a dot `.` which can start off a numeric literal
            return this.gobbleNumericLiteral();
        }
        if (ch === Jsep.SQUOTE_CODE || ch === Jsep.DQUOTE_CODE) {
            // Single or double quotes
            node = this.gobbleStringLiteral();
        } else if (ch === Jsep.OBRACK_CODE) {
            node = this.gobbleArray();
        } else {
            to_check = this.expr.substr(this.index, Jsep.max_unop_len);
            tc_len = to_check.length;
            while(tc_len > 0){
                // Don't accept an unary op when it is an identifier.
                // Unary ops that start with a identifier-valid character must be followed
                // by a non identifier-part valid character
                if (Jsep.unary_ops.hasOwnProperty(to_check) && (!Jsep.isIdentifierStart(this.code) || this.index + to_check.length < this.expr.length && !Jsep.isIdentifierPart(this.expr.charCodeAt(this.index + to_check.length)))) {
                    this.index += tc_len;
                    const argument = this.gobbleToken();
                    if (!argument) {
                        this.throwError('missing unaryOp argument');
                    }
                    return this.runHook('after-token', {
                        type: Jsep.UNARY_EXP,
                        operator: to_check,
                        argument,
                        prefix: true
                    });
                }
                to_check = to_check.substr(0, --tc_len);
            }
            if (Jsep.isIdentifierStart(ch)) {
                node = this.gobbleIdentifier();
                if (Jsep.literals.hasOwnProperty(node.name)) {
                    node = {
                        type: Jsep.LITERAL,
                        value: Jsep.literals[node.name],
                        raw: node.name
                    };
                } else if (node.name === Jsep.this_str) {
                    node = {
                        type: Jsep.THIS_EXP
                    };
                }
            } else if (ch === Jsep.OPAREN_CODE) {
                node = this.gobbleGroup();
            }
        }
        if (!node) {
            return this.runHook('after-token', false);
        }
        node = this.gobbleTokenProperty(node);
        return this.runHook('after-token', node);
    }
    /**
	 * Gobble properties of of identifiers/strings/arrays/groups.
	 * e.g. `foo`, `bar.baz`, `foo['bar'].baz`
	 * It also gobbles function calls:
	 * e.g. `Math.acos(obj.angle)`
	 * @param {jsep.Expression} node
	 * @returns {jsep.Expression}
	 */ gobbleTokenProperty(node) {
        this.gobbleSpaces();
        let ch = this.code;
        while(ch === Jsep.PERIOD_CODE || ch === Jsep.OBRACK_CODE || ch === Jsep.OPAREN_CODE || ch === Jsep.QUMARK_CODE){
            let optional;
            if (ch === Jsep.QUMARK_CODE) {
                if (this.expr.charCodeAt(this.index + 1) !== Jsep.PERIOD_CODE) {
                    break;
                }
                optional = true;
                this.index += 2;
                this.gobbleSpaces();
                ch = this.code;
            }
            this.index++;
            if (ch === Jsep.OBRACK_CODE) {
                node = {
                    type: Jsep.MEMBER_EXP,
                    computed: true,
                    object: node,
                    property: this.gobbleExpression()
                };
                if (!node.property) {
                    this.throwError('Unexpected "' + this.char + '"');
                }
                this.gobbleSpaces();
                ch = this.code;
                if (ch !== Jsep.CBRACK_CODE) {
                    this.throwError('Unclosed [');
                }
                this.index++;
            } else if (ch === Jsep.OPAREN_CODE) {
                // A function call is being made; gobble all the arguments
                node = {
                    type: Jsep.CALL_EXP,
                    'arguments': this.gobbleArguments(Jsep.CPAREN_CODE),
                    callee: node
                };
            } else if (ch === Jsep.PERIOD_CODE || optional) {
                if (optional) {
                    this.index--;
                }
                this.gobbleSpaces();
                node = {
                    type: Jsep.MEMBER_EXP,
                    computed: false,
                    object: node,
                    property: this.gobbleIdentifier()
                };
            }
            if (optional) {
                node.optional = true;
            } // else leave undefined for compatibility with esprima
            this.gobbleSpaces();
            ch = this.code;
        }
        return node;
    }
    /**
	 * Parse simple numeric literals: `12`, `3.4`, `.5`. Do this by using a string to
	 * keep track of everything in the numeric literal and then calling `parseFloat` on that string
	 * @returns {jsep.Literal}
	 */ gobbleNumericLiteral() {
        let number = '', ch, chCode;
        while(Jsep.isDecimalDigit(this.code)){
            number += this.expr.charAt(this.index++);
        }
        if (this.code === Jsep.PERIOD_CODE) {
            number += this.expr.charAt(this.index++);
            while(Jsep.isDecimalDigit(this.code)){
                number += this.expr.charAt(this.index++);
            }
        }
        ch = this.char;
        if (ch === 'e' || ch === 'E') {
            number += this.expr.charAt(this.index++);
            ch = this.char;
            if (ch === '+' || ch === '-') {
                number += this.expr.charAt(this.index++);
            }
            while(Jsep.isDecimalDigit(this.code)){
                number += this.expr.charAt(this.index++);
            }
            if (!Jsep.isDecimalDigit(this.expr.charCodeAt(this.index - 1))) {
                this.throwError('Expected exponent (' + number + this.char + ')');
            }
        }
        chCode = this.code;
        // Check to make sure this isn't a variable name that start with a number (123abc)
        if (Jsep.isIdentifierStart(chCode)) {
            this.throwError('Variable names cannot start with a number (' + number + this.char + ')');
        } else if (chCode === Jsep.PERIOD_CODE || number.length === 1 && number.charCodeAt(0) === Jsep.PERIOD_CODE) {
            this.throwError('Unexpected period');
        }
        return {
            type: Jsep.LITERAL,
            value: parseFloat(number),
            raw: number
        };
    }
    /**
	 * Parses a string literal, staring with single or double quotes with basic support for escape codes
	 * e.g. `"hello world"`, `'this is\nJSEP'`
	 * @returns {jsep.Literal}
	 */ gobbleStringLiteral() {
        let str = '';
        const startIndex = this.index;
        const quote = this.expr.charAt(this.index++);
        let closed = false;
        while(this.index < this.expr.length){
            let ch = this.expr.charAt(this.index++);
            if (ch === quote) {
                closed = true;
                break;
            } else if (ch === '\\') {
                // Check for all of the common escape codes
                ch = this.expr.charAt(this.index++);
                switch(ch){
                    case 'n':
                        str += '\n';
                        break;
                    case 'r':
                        str += '\r';
                        break;
                    case 't':
                        str += '\t';
                        break;
                    case 'b':
                        str += '\b';
                        break;
                    case 'f':
                        str += '\f';
                        break;
                    case 'v':
                        str += '\x0B';
                        break;
                    default:
                        str += ch;
                }
            } else {
                str += ch;
            }
        }
        if (!closed) {
            this.throwError('Unclosed quote after "' + str + '"');
        }
        return {
            type: Jsep.LITERAL,
            value: str,
            raw: this.expr.substring(startIndex, this.index)
        };
    }
    /**
	 * Gobbles only identifiers
	 * e.g.: `foo`, `_value`, `$x1`
	 * Also, this function checks if that identifier is a literal:
	 * (e.g. `true`, `false`, `null`) or `this`
	 * @returns {jsep.Identifier}
	 */ gobbleIdentifier() {
        let ch = this.code, start = this.index;
        if (Jsep.isIdentifierStart(ch)) {
            this.index++;
        } else {
            this.throwError('Unexpected ' + this.char);
        }
        while(this.index < this.expr.length){
            ch = this.code;
            if (Jsep.isIdentifierPart(ch)) {
                this.index++;
            } else {
                break;
            }
        }
        return {
            type: Jsep.IDENTIFIER,
            name: this.expr.slice(start, this.index)
        };
    }
    /**
	 * Gobbles a list of arguments within the context of a function call
	 * or array literal. This function also assumes that the opening character
	 * `(` or `[` has already been gobbled, and gobbles expressions and commas
	 * until the terminator character `)` or `]` is encountered.
	 * e.g. `foo(bar, baz)`, `my_func()`, or `[bar, baz]`
	 * @param {number} termination
	 * @returns {jsep.Expression[]}
	 */ gobbleArguments(termination) {
        const args = [];
        let closed = false;
        let separator_count = 0;
        while(this.index < this.expr.length){
            this.gobbleSpaces();
            let ch_i = this.code;
            if (ch_i === termination) {
                closed = true;
                this.index++;
                if (termination === Jsep.CPAREN_CODE && separator_count && separator_count >= args.length) {
                    this.throwError('Unexpected token ' + String.fromCharCode(termination));
                }
                break;
            } else if (ch_i === Jsep.COMMA_CODE) {
                this.index++;
                separator_count++;
                if (separator_count !== args.length) {
                    if (termination === Jsep.CPAREN_CODE) {
                        this.throwError('Unexpected token ,');
                    } else if (termination === Jsep.CBRACK_CODE) {
                        for(let arg = args.length; arg < separator_count; arg++){
                            args.push(null);
                        }
                    }
                }
            } else if (args.length !== separator_count && separator_count !== 0) {
                // NOTE: `&& separator_count !== 0` allows for either all commas, or all spaces as arguments
                this.throwError('Expected comma');
            } else {
                const node = this.gobbleExpression();
                if (!node || node.type === Jsep.COMPOUND) {
                    this.throwError('Expected comma');
                }
                args.push(node);
            }
        }
        if (!closed) {
            this.throwError('Expected ' + String.fromCharCode(termination));
        }
        return args;
    }
    /**
	 * Responsible for parsing a group of things within parentheses `()`
	 * that have no identifier in front (so not a function call)
	 * This function assumes that it needs to gobble the opening parenthesis
	 * and then tries to gobble everything within that parenthesis, assuming
	 * that the next thing it should see is the close parenthesis. If not,
	 * then the expression probably doesn't have a `)`
	 * @returns {boolean|jsep.Expression}
	 */ gobbleGroup() {
        this.index++;
        let nodes = this.gobbleExpressions(Jsep.CPAREN_CODE);
        if (this.code === Jsep.CPAREN_CODE) {
            this.index++;
            if (nodes.length === 1) {
                return nodes[0];
            } else if (!nodes.length) {
                return false;
            } else {
                return {
                    type: Jsep.SEQUENCE_EXP,
                    expressions: nodes
                };
            }
        } else {
            this.throwError('Unclosed (');
        }
    }
    /**
	 * Responsible for parsing Array literals `[1, 2, 3]`
	 * This function assumes that it needs to gobble the opening bracket
	 * and then tries to gobble the expressions as arguments.
	 * @returns {jsep.ArrayExpression}
	 */ gobbleArray() {
        this.index++;
        return {
            type: Jsep.ARRAY_EXP,
            elements: this.gobbleArguments(Jsep.CBRACK_CODE)
        };
    }
}
// Static fields:
const hooks = new Hooks();
Object.assign(Jsep, {
    hooks,
    plugins: new Plugins(Jsep),
    // Node Types
    // ----------
    // This is the full set of types that any JSEP node can be.
    // Store them here to save space when minified
    COMPOUND: 'Compound',
    SEQUENCE_EXP: 'SequenceExpression',
    IDENTIFIER: 'Identifier',
    MEMBER_EXP: 'MemberExpression',
    LITERAL: 'Literal',
    THIS_EXP: 'ThisExpression',
    CALL_EXP: 'CallExpression',
    UNARY_EXP: 'UnaryExpression',
    BINARY_EXP: 'BinaryExpression',
    ARRAY_EXP: 'ArrayExpression',
    TAB_CODE: 9,
    LF_CODE: 10,
    CR_CODE: 13,
    SPACE_CODE: 32,
    PERIOD_CODE: 46,
    COMMA_CODE: 44,
    SQUOTE_CODE: 39,
    DQUOTE_CODE: 34,
    OPAREN_CODE: 40,
    CPAREN_CODE: 41,
    OBRACK_CODE: 91,
    CBRACK_CODE: 93,
    QUMARK_CODE: 63,
    SEMCOL_CODE: 59,
    COLON_CODE: 58,
    // Operations
    // ----------
    // Use a quickly-accessible map to store all of the unary operators
    // Values are set to `1` (it really doesn't matter)
    unary_ops: {
        '-': 1,
        '!': 1,
        '~': 1,
        '+': 1
    },
    // Also use a map for the binary operations but set their values to their
    // binary precedence for quick reference (higher number = higher precedence)
    // see [Order of operations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
    binary_ops: {
        '||': 1,
        '??': 1,
        '&&': 2,
        '|': 3,
        '^': 4,
        '&': 5,
        '==': 6,
        '!=': 6,
        '===': 6,
        '!==': 6,
        '<': 7,
        '>': 7,
        '<=': 7,
        '>=': 7,
        '<<': 8,
        '>>': 8,
        '>>>': 8,
        '+': 9,
        '-': 9,
        '*': 10,
        '/': 10,
        '%': 10,
        '**': 11
    },
    // sets specific binary_ops as right-associative
    right_associative: new Set([
        '**'
    ]),
    // Additional valid identifier chars, apart from a-z, A-Z and 0-9 (except on the starting char)
    additional_identifier_chars: new Set([
        '$',
        '_'
    ]),
    // Literals
    // ----------
    // Store the values to return for the various literals we may encounter
    literals: {
        'true': true,
        'false': false,
        'null': null
    },
    // Except for `this`, which is special. This could be changed to something like `'self'` as well
    this_str: 'this'
});
Jsep.max_unop_len = Jsep.getMaxKeyLen(Jsep.unary_ops);
Jsep.max_binop_len = Jsep.getMaxKeyLen(Jsep.binary_ops);
// Backward Compatibility:
const jsep = (expr)=>new Jsep(expr).parse();
const stdClassProps = Object.getOwnPropertyNames(class Test {
});
Object.getOwnPropertyNames(Jsep).filter((prop)=>!stdClassProps.includes(prop) && jsep[prop] === undefined).forEach((m)=>{
    jsep[m] = Jsep[m];
});
jsep.Jsep = Jsep; // allows for const { Jsep } = require('jsep');
const CONDITIONAL_EXP = 'ConditionalExpression';
var ternary = {
    name: 'ternary',
    init (jsep) {
        // Ternary expression: test ? consequent : alternate
        jsep.hooks.add('after-expression', function gobbleTernary(env) {
            if (env.node && this.code === jsep.QUMARK_CODE) {
                this.index++;
                const test = env.node;
                const consequent = this.gobbleExpression();
                if (!consequent) {
                    this.throwError('Expected expression');
                }
                this.gobbleSpaces();
                if (this.code === jsep.COLON_CODE) {
                    this.index++;
                    const alternate = this.gobbleExpression();
                    if (!alternate) {
                        this.throwError('Expected expression');
                    }
                    env.node = {
                        type: CONDITIONAL_EXP,
                        test,
                        consequent,
                        alternate
                    };
                    // check for operators of higher priority than ternary (i.e. assignment)
                    // jsep sets || at 1, and assignment at 0.9, and conditional should be between them
                    if (test.operator && jsep.binary_ops[test.operator] <= 0.9) {
                        let newTest = test;
                        while(newTest.right.operator && jsep.binary_ops[newTest.right.operator] <= 0.9){
                            newTest = newTest.right;
                        }
                        env.node.test = newTest.right;
                        newTest.right = env.node;
                        env.node = test;
                    }
                } else {
                    this.throwError('Expected :');
                }
            }
        });
    }
};
// Add default plugins:
jsep.plugins.register(ternary);
;
}),
"[project]/node_modules/@cesium/engine/node_modules/@tweenjs/tween.js/dist/tween.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Easing",
    ()=>Easing,
    "Group",
    ()=>Group,
    "Interpolation",
    ()=>Interpolation,
    "Sequence",
    ()=>Sequence,
    "Tween",
    ()=>Tween,
    "VERSION",
    ()=>VERSION,
    "add",
    ()=>add,
    "default",
    ()=>exports,
    "getAll",
    ()=>getAll,
    "nextId",
    ()=>nextId,
    "now",
    ()=>now,
    "remove",
    ()=>remove,
    "removeAll",
    ()=>removeAll,
    "update",
    ()=>update
]);
/**
 * The Ease class provides a collection of easing functions for use with tween.js.
 */ var Easing = Object.freeze({
    Linear: Object.freeze({
        None: function(amount) {
            return amount;
        },
        In: function(amount) {
            return amount;
        },
        Out: function(amount) {
            return amount;
        },
        InOut: function(amount) {
            return amount;
        }
    }),
    Quadratic: Object.freeze({
        In: function(amount) {
            return amount * amount;
        },
        Out: function(amount) {
            return amount * (2 - amount);
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount;
            }
            return -0.5 * (--amount * (amount - 2) - 1);
        }
    }),
    Cubic: Object.freeze({
        In: function(amount) {
            return amount * amount * amount;
        },
        Out: function(amount) {
            return --amount * amount * amount + 1;
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount + 2);
        }
    }),
    Quartic: Object.freeze({
        In: function(amount) {
            return amount * amount * amount * amount;
        },
        Out: function(amount) {
            return 1 - --amount * amount * amount * amount;
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount;
            }
            return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
        }
    }),
    Quintic: Object.freeze({
        In: function(amount) {
            return amount * amount * amount * amount * amount;
        },
        Out: function(amount) {
            return --amount * amount * amount * amount * amount + 1;
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
        }
    }),
    Sinusoidal: Object.freeze({
        In: function(amount) {
            return 1 - Math.sin((1.0 - amount) * Math.PI / 2);
        },
        Out: function(amount) {
            return Math.sin(amount * Math.PI / 2);
        },
        InOut: function(amount) {
            return 0.5 * (1 - Math.sin(Math.PI * (0.5 - amount)));
        }
    }),
    Exponential: Object.freeze({
        In: function(amount) {
            return amount === 0 ? 0 : Math.pow(1024, amount - 1);
        },
        Out: function(amount) {
            return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
        },
        InOut: function(amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            if ((amount *= 2) < 1) {
                return 0.5 * Math.pow(1024, amount - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
        }
    }),
    Circular: Object.freeze({
        In: function(amount) {
            return 1 - Math.sqrt(1 - amount * amount);
        },
        Out: function(amount) {
            return Math.sqrt(1 - --amount * amount);
        },
        InOut: function(amount) {
            if ((amount *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
        }
    }),
    Elastic: Object.freeze({
        In: function(amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
        },
        Out: function(amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: function(amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            amount *= 2;
            if (amount < 1) {
                return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
            }
            return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
        }
    }),
    Back: Object.freeze({
        In: function(amount) {
            var s = 1.70158;
            return amount === 1 ? 1 : amount * amount * ((s + 1) * amount - s);
        },
        Out: function(amount) {
            var s = 1.70158;
            return amount === 0 ? 0 : --amount * amount * ((s + 1) * amount + s) + 1;
        },
        InOut: function(amount) {
            var s = 1.70158 * 1.525;
            if ((amount *= 2) < 1) {
                return 0.5 * (amount * amount * ((s + 1) * amount - s));
            }
            return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
        }
    }),
    Bounce: Object.freeze({
        In: function(amount) {
            return 1 - Easing.Bounce.Out(1 - amount);
        },
        Out: function(amount) {
            if (amount < 1 / 2.75) {
                return 7.5625 * amount * amount;
            } else if (amount < 2 / 2.75) {
                return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
            } else if (amount < 2.5 / 2.75) {
                return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
            } else {
                return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
            }
        },
        InOut: function(amount) {
            if (amount < 0.5) {
                return Easing.Bounce.In(amount * 2) * 0.5;
            }
            return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
        }
    }),
    generatePow: function(power) {
        if (power === void 0) {
            power = 4;
        }
        power = power < Number.EPSILON ? Number.EPSILON : power;
        power = power > 10000 ? 10000 : power;
        return {
            In: function(amount) {
                return Math.pow(amount, power);
            },
            Out: function(amount) {
                return 1 - Math.pow(1 - amount, power);
            },
            InOut: function(amount) {
                if (amount < 0.5) {
                    return Math.pow(amount * 2, power) / 2;
                }
                return (1 - Math.pow(2 - amount * 2, power)) / 2 + 0.5;
            }
        };
    }
});
var now = function() {
    return performance.now();
};
/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tween
 */ var Group = function() {
    function Group() {
        var tweens = [];
        for(var _i = 0; _i < arguments.length; _i++){
            tweens[_i] = arguments[_i];
        }
        this._tweens = {};
        this._tweensAddedDuringUpdate = {};
        this.add.apply(this, tweens);
    }
    Group.prototype.getAll = function() {
        var _this = this;
        return Object.keys(this._tweens).map(function(tweenId) {
            return _this._tweens[tweenId];
        });
    };
    Group.prototype.removeAll = function() {
        this._tweens = {};
    };
    Group.prototype.add = function() {
        var _a;
        var tweens = [];
        for(var _i = 0; _i < arguments.length; _i++){
            tweens[_i] = arguments[_i];
        }
        for(var _b = 0, tweens_1 = tweens; _b < tweens_1.length; _b++){
            var tween = tweens_1[_b];
            // Remove from any other group first, a tween can only be in one group at a time.
            // @ts-expect-error library internal access
            (_a = tween._group) === null || _a === void 0 ? void 0 : _a.remove(tween);
            // @ts-expect-error library internal access
            tween._group = this;
            this._tweens[tween.getId()] = tween;
            this._tweensAddedDuringUpdate[tween.getId()] = tween;
        }
    };
    Group.prototype.remove = function() {
        var tweens = [];
        for(var _i = 0; _i < arguments.length; _i++){
            tweens[_i] = arguments[_i];
        }
        for(var _a = 0, tweens_2 = tweens; _a < tweens_2.length; _a++){
            var tween = tweens_2[_a];
            // @ts-expect-error library internal access
            tween._group = undefined;
            delete this._tweens[tween.getId()];
            delete this._tweensAddedDuringUpdate[tween.getId()];
        }
    };
    /** Return true if all tweens in the group are not paused or playing. */ Group.prototype.allStopped = function() {
        return this.getAll().every(function(tween) {
            return !tween.isPlaying();
        });
    };
    Group.prototype.update = function(time, preserve) {
        if (time === void 0) {
            time = now();
        }
        if (preserve === void 0) {
            preserve = true;
        }
        var tweenIds = Object.keys(this._tweens);
        if (tweenIds.length === 0) return;
        // Tweens are updated in "batches". If you add a new tween during an
        // update, then the new tween will be updated in the next batch.
        // If you remove a tween during an update, it may or may not be updated.
        // However, if the removed tween was added during the current batch,
        // then it will not be updated.
        while(tweenIds.length > 0){
            this._tweensAddedDuringUpdate = {};
            for(var i = 0; i < tweenIds.length; i++){
                var tween = this._tweens[tweenIds[i]];
                var autoStart = !preserve;
                if (tween && tween.update(time, autoStart) === false && !preserve) this.remove(tween);
            }
            tweenIds = Object.keys(this._tweensAddedDuringUpdate);
        }
    };
    return Group;
}();
/**
 *
 */ var Interpolation = {
    Linear: function(v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = Interpolation.Utils.Linear;
        if (k < 0) {
            return fn(v[0], v[1], f);
        }
        if (k > 1) {
            return fn(v[m], v[m - 1], m - f);
        }
        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    Bezier: function(v, k) {
        var b = 0;
        var n = v.length - 1;
        var pw = Math.pow;
        var bn = Interpolation.Utils.Bernstein;
        for(var i = 0; i <= n; i++){
            b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
        }
        return b;
    },
    CatmullRom: function(v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = Interpolation.Utils.CatmullRom;
        if (v[0] === v[m]) {
            if (k < 0) {
                i = Math.floor(f = m * (1 + k));
            }
            return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
        } else {
            if (k < 0) {
                return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
            }
            if (k > 1) {
                return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
            }
            return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
        }
    },
    Utils: {
        Linear: function(p0, p1, t) {
            return (p1 - p0) * t + p0;
        },
        Bernstein: function(n, i) {
            var fc = Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
        },
        Factorial: function() {
            var a = [
                1
            ];
            return function(n) {
                var s = 1;
                if (a[n]) {
                    return a[n];
                }
                for(var i = n; i > 1; i--){
                    s *= i;
                }
                a[n] = s;
                return s;
            };
        }(),
        CatmullRom: function(p0, p1, p2, p3, t) {
            var v0 = (p2 - p0) * 0.5;
            var v1 = (p3 - p1) * 0.5;
            var t2 = t * t;
            var t3 = t * t2;
            return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
        }
    }
};
/**
 * Utils
 */ var Sequence = function() {
    function Sequence() {}
    Sequence.nextId = function() {
        return Sequence._nextId++;
    };
    Sequence._nextId = 0;
    return Sequence;
}();
var mainGroup = new Group();
/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */ var Tween = function() {
    function Tween(object, group) {
        this._isPaused = false;
        this._pauseStart = 0;
        this._valuesStart = {};
        this._valuesEnd = {};
        this._valuesStartRepeat = {};
        this._duration = 1000;
        this._isDynamic = false;
        this._initialRepeat = 0;
        this._repeat = 0;
        this._yoyo = false;
        this._isPlaying = false;
        this._reversed = false;
        this._delayTime = 0;
        this._startTime = 0;
        this._easingFunction = Easing.Linear.None;
        this._interpolationFunction = Interpolation.Linear;
        // eslint-disable-next-line
        this._chainedTweens = [];
        this._onStartCallbackFired = false;
        this._onEveryStartCallbackFired = false;
        this._id = Sequence.nextId();
        this._isChainStopped = false;
        this._propertiesAreSetUp = false;
        this._goToEnd = false;
        this._object = object;
        if (typeof group === 'object') {
            this._group = group;
            group.add(this);
        } else if (group === true) {
            this._group = mainGroup;
            mainGroup.add(this);
        }
    }
    Tween.prototype.getId = function() {
        return this._id;
    };
    Tween.prototype.isPlaying = function() {
        return this._isPlaying;
    };
    Tween.prototype.isPaused = function() {
        return this._isPaused;
    };
    Tween.prototype.getDuration = function() {
        return this._duration;
    };
    Tween.prototype.to = function(target, duration) {
        if (duration === void 0) {
            duration = 1000;
        }
        if (this._isPlaying) throw new Error('Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.');
        this._valuesEnd = target;
        this._propertiesAreSetUp = false;
        this._duration = duration < 0 ? 0 : duration;
        return this;
    };
    Tween.prototype.duration = function(duration) {
        if (duration === void 0) {
            duration = 1000;
        }
        this._duration = duration < 0 ? 0 : duration;
        return this;
    };
    Tween.prototype.dynamic = function(dynamic) {
        if (dynamic === void 0) {
            dynamic = false;
        }
        this._isDynamic = dynamic;
        return this;
    };
    Tween.prototype.start = function(time, overrideStartingValues) {
        if (time === void 0) {
            time = now();
        }
        if (overrideStartingValues === void 0) {
            overrideStartingValues = false;
        }
        if (this._isPlaying) {
            return this;
        }
        this._repeat = this._initialRepeat;
        if (this._reversed) {
            // If we were reversed (f.e. using the yoyo feature) then we need to
            // flip the tween direction back to forward.
            this._reversed = false;
            for(var property in this._valuesStartRepeat){
                this._swapEndStartRepeatValues(property);
                this._valuesStart[property] = this._valuesStartRepeat[property];
            }
        }
        this._isPlaying = true;
        this._isPaused = false;
        this._onStartCallbackFired = false;
        this._onEveryStartCallbackFired = false;
        this._isChainStopped = false;
        this._startTime = time;
        this._startTime += this._delayTime;
        if (!this._propertiesAreSetUp || overrideStartingValues) {
            this._propertiesAreSetUp = true;
            // If dynamic is not enabled, clone the end values instead of using the passed-in end values.
            if (!this._isDynamic) {
                var tmp = {};
                for(var prop in this._valuesEnd)tmp[prop] = this._valuesEnd[prop];
                this._valuesEnd = tmp;
            }
            this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, overrideStartingValues);
        }
        return this;
    };
    Tween.prototype.startFromCurrentValues = function(time) {
        return this.start(time, true);
    };
    Tween.prototype._setupProperties = function(_object, _valuesStart, _valuesEnd, _valuesStartRepeat, overrideStartingValues) {
        for(var property in _valuesEnd){
            var startValue = _object[property];
            var startValueIsArray = Array.isArray(startValue);
            var propType = startValueIsArray ? 'array' : typeof startValue;
            var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
            // If `to()` specifies a property that doesn't exist in the source object,
            // we should not set that property in the object
            if (propType === 'undefined' || propType === 'function') {
                continue;
            }
            // Check if an Array was provided as property value
            if (isInterpolationList) {
                var endValues = _valuesEnd[property];
                if (endValues.length === 0) {
                    continue;
                }
                // Handle an array of relative values.
                // Creates a local copy of the Array with the start value at the front
                var temp = [
                    startValue
                ];
                for(var i = 0, l = endValues.length; i < l; i += 1){
                    var value = this._handleRelativeValue(startValue, endValues[i]);
                    if (isNaN(value)) {
                        isInterpolationList = false;
                        console.warn('Found invalid interpolation list. Skipping.');
                        break;
                    }
                    temp.push(value);
                }
                if (isInterpolationList) {
                    // if (_valuesStart[property] === undefined) { // handle end values only the first time. NOT NEEDED? setupProperties is now guarded by _propertiesAreSetUp.
                    _valuesEnd[property] = temp;
                // }
                }
            }
            // handle the deepness of the values
            if ((propType === 'object' || startValueIsArray) && startValue && !isInterpolationList) {
                _valuesStart[property] = startValueIsArray ? [] : {};
                var nestedObject = startValue;
                for(var prop in nestedObject){
                    _valuesStart[property][prop] = nestedObject[prop];
                }
                // TODO? repeat nested values? And yoyo? And array values?
                _valuesStartRepeat[property] = startValueIsArray ? [] : {};
                var endValues = _valuesEnd[property];
                // If dynamic is not enabled, clone the end values instead of using the passed-in end values.
                if (!this._isDynamic) {
                    var tmp = {};
                    for(var prop in endValues)tmp[prop] = endValues[prop];
                    _valuesEnd[property] = endValues = tmp;
                }
                this._setupProperties(nestedObject, _valuesStart[property], endValues, _valuesStartRepeat[property], overrideStartingValues);
            } else {
                // Save the starting value, but only once unless override is requested.
                if (typeof _valuesStart[property] === 'undefined' || overrideStartingValues) {
                    _valuesStart[property] = startValue;
                }
                if (!startValueIsArray) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
                }
                if (isInterpolationList) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
                } else {
                    _valuesStartRepeat[property] = _valuesStart[property] || 0;
                }
            }
        }
    };
    Tween.prototype.stop = function() {
        if (!this._isChainStopped) {
            this._isChainStopped = true;
            this.stopChainedTweens();
        }
        if (!this._isPlaying) {
            return this;
        }
        this._isPlaying = false;
        this._isPaused = false;
        if (this._onStopCallback) {
            this._onStopCallback(this._object);
        }
        return this;
    };
    Tween.prototype.end = function() {
        this._goToEnd = true;
        this.update(this._startTime + this._duration);
        return this;
    };
    Tween.prototype.pause = function(time) {
        if (time === void 0) {
            time = now();
        }
        if (this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = true;
        this._pauseStart = time;
        return this;
    };
    Tween.prototype.resume = function(time) {
        if (time === void 0) {
            time = now();
        }
        if (!this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = false;
        this._startTime += time - this._pauseStart;
        this._pauseStart = 0;
        return this;
    };
    Tween.prototype.stopChainedTweens = function() {
        for(var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++){
            this._chainedTweens[i].stop();
        }
        return this;
    };
    Tween.prototype.group = function(group) {
        if (!group) {
            console.warn('tween.group() without args has been removed, use group.add(tween) instead.');
            return this;
        }
        group.add(this);
        return this;
    };
    /**
     * Removes the tween from whichever group it is in.
     */ Tween.prototype.remove = function() {
        var _a;
        (_a = this._group) === null || _a === void 0 ? void 0 : _a.remove(this);
        return this;
    };
    Tween.prototype.delay = function(amount) {
        if (amount === void 0) {
            amount = 0;
        }
        this._delayTime = amount;
        return this;
    };
    Tween.prototype.repeat = function(times) {
        if (times === void 0) {
            times = 0;
        }
        this._initialRepeat = times;
        this._repeat = times;
        return this;
    };
    Tween.prototype.repeatDelay = function(amount) {
        this._repeatDelayTime = amount;
        return this;
    };
    Tween.prototype.yoyo = function(yoyo) {
        if (yoyo === void 0) {
            yoyo = false;
        }
        this._yoyo = yoyo;
        return this;
    };
    Tween.prototype.easing = function(easingFunction) {
        if (easingFunction === void 0) {
            easingFunction = Easing.Linear.None;
        }
        this._easingFunction = easingFunction;
        return this;
    };
    Tween.prototype.interpolation = function(interpolationFunction) {
        if (interpolationFunction === void 0) {
            interpolationFunction = Interpolation.Linear;
        }
        this._interpolationFunction = interpolationFunction;
        return this;
    };
    // eslint-disable-next-line
    Tween.prototype.chain = function() {
        var tweens = [];
        for(var _i = 0; _i < arguments.length; _i++){
            tweens[_i] = arguments[_i];
        }
        this._chainedTweens = tweens;
        return this;
    };
    Tween.prototype.onStart = function(callback) {
        this._onStartCallback = callback;
        return this;
    };
    Tween.prototype.onEveryStart = function(callback) {
        this._onEveryStartCallback = callback;
        return this;
    };
    Tween.prototype.onUpdate = function(callback) {
        this._onUpdateCallback = callback;
        return this;
    };
    Tween.prototype.onRepeat = function(callback) {
        this._onRepeatCallback = callback;
        return this;
    };
    Tween.prototype.onComplete = function(callback) {
        this._onCompleteCallback = callback;
        return this;
    };
    Tween.prototype.onStop = function(callback) {
        this._onStopCallback = callback;
        return this;
    };
    /**
     * @returns true if the tween is still playing after the update, false
     * otherwise (calling update on a paused tween still returns true because
     * it is still playing, just paused).
     *
     * @param autoStart - When true, calling update will implicitly call start()
     * as well. Note, if you stop() or end() the tween, but are still calling
     * update(), it will start again!
     */ Tween.prototype.update = function(time, autoStart) {
        var _this = this;
        var _a;
        if (time === void 0) {
            time = now();
        }
        if (autoStart === void 0) {
            autoStart = Tween.autoStartOnUpdate;
        }
        if (this._isPaused) return true;
        var property;
        if (!this._goToEnd && !this._isPlaying) {
            if (autoStart) this.start(time, true);
            else return false;
        }
        this._goToEnd = false;
        if (time < this._startTime) {
            return true;
        }
        if (this._onStartCallbackFired === false) {
            if (this._onStartCallback) {
                this._onStartCallback(this._object);
            }
            this._onStartCallbackFired = true;
        }
        if (this._onEveryStartCallbackFired === false) {
            if (this._onEveryStartCallback) {
                this._onEveryStartCallback(this._object);
            }
            this._onEveryStartCallbackFired = true;
        }
        var elapsedTime = time - this._startTime;
        var durationAndDelay = this._duration + ((_a = this._repeatDelayTime) !== null && _a !== void 0 ? _a : this._delayTime);
        var totalTime = this._duration + this._repeat * durationAndDelay;
        var calculateElapsedPortion = function() {
            if (_this._duration === 0) return 1;
            if (elapsedTime > totalTime) {
                return 1;
            }
            var timesRepeated = Math.trunc(elapsedTime / durationAndDelay);
            var timeIntoCurrentRepeat = elapsedTime - timesRepeated * durationAndDelay;
            // TODO use %?
            // const timeIntoCurrentRepeat = elapsedTime % durationAndDelay
            var portion = Math.min(timeIntoCurrentRepeat / _this._duration, 1);
            if (portion === 0 && elapsedTime === _this._duration) {
                return 1;
            }
            return portion;
        };
        var elapsed = calculateElapsedPortion();
        var value = this._easingFunction(elapsed);
        // properties transformations
        this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
        if (this._onUpdateCallback) {
            this._onUpdateCallback(this._object, elapsed);
        }
        if (this._duration === 0 || elapsedTime >= this._duration) {
            if (this._repeat > 0) {
                var completeCount = Math.min(Math.trunc((elapsedTime - this._duration) / durationAndDelay) + 1, this._repeat);
                if (isFinite(this._repeat)) {
                    this._repeat -= completeCount;
                }
                // Reassign starting values, restart by making startTime = now
                for(property in this._valuesStartRepeat){
                    if (!this._yoyo && typeof this._valuesEnd[property] === 'string') {
                        this._valuesStartRepeat[property] = // eslint-disable-next-line
                        // @ts-ignore FIXME?
                        this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                    }
                    if (this._yoyo) {
                        this._swapEndStartRepeatValues(property);
                    }
                    this._valuesStart[property] = this._valuesStartRepeat[property];
                }
                if (this._yoyo) {
                    this._reversed = !this._reversed;
                }
                this._startTime += durationAndDelay * completeCount;
                if (this._onRepeatCallback) {
                    this._onRepeatCallback(this._object);
                }
                this._onEveryStartCallbackFired = false;
                return true;
            } else {
                if (this._onCompleteCallback) {
                    this._onCompleteCallback(this._object);
                }
                for(var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++){
                    // Make the chained tweens start exactly at the time they should,
                    // even if the `update()` method was called way past the duration of the tween
                    this._chainedTweens[i].start(this._startTime + this._duration, false);
                }
                this._isPlaying = false;
                return false;
            }
        }
        return true;
    };
    Tween.prototype._updateProperties = function(_object, _valuesStart, _valuesEnd, value) {
        for(var property in _valuesEnd){
            // Don't update properties that do not exist in the source object
            if (_valuesStart[property] === undefined) {
                continue;
            }
            var start = _valuesStart[property] || 0;
            var end = _valuesEnd[property];
            var startIsArray = Array.isArray(_object[property]);
            var endIsArray = Array.isArray(end);
            var isInterpolationList = !startIsArray && endIsArray;
            if (isInterpolationList) {
                _object[property] = this._interpolationFunction(end, value);
            } else if (typeof end === 'object' && end) {
                // eslint-disable-next-line
                // @ts-ignore FIXME?
                this._updateProperties(_object[property], start, end, value);
            } else {
                // Parses relative end values with start as base (e.g.: +10, -3)
                end = this._handleRelativeValue(start, end);
                // Protect against non numeric properties.
                if (typeof end === 'number') {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _object[property] = start + (end - start) * value;
                }
            }
        }
    };
    Tween.prototype._handleRelativeValue = function(start, end) {
        if (typeof end !== 'string') {
            return end;
        }
        if (end.charAt(0) === '+' || end.charAt(0) === '-') {
            return start + parseFloat(end);
        }
        return parseFloat(end);
    };
    Tween.prototype._swapEndStartRepeatValues = function(property) {
        var tmp = this._valuesStartRepeat[property];
        var endValue = this._valuesEnd[property];
        if (typeof endValue === 'string') {
            this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
        } else {
            this._valuesStartRepeat[property] = this._valuesEnd[property];
        }
        this._valuesEnd[property] = tmp;
    };
    Tween.autoStartOnUpdate = false;
    return Tween;
}();
var VERSION = '25.0.0';
/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */ var nextId = Sequence.nextId;
/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tweens.
 */ var TWEEN = mainGroup;
// This is the best way to export things in a way that's compatible with both ES
// Modules and CommonJS, without build hacks, and so as not to break the
// existing API.
// https://github.com/rollup/rollup/issues/1961#issuecomment-423037881
/**
 * @deprecated The global TWEEN Group will be removed in a following major
 * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
 * group.
 *
 * Old code:
 *
 * ```js
 * import * as TWEEN from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new TWEEN.Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   TWEEN.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 *
 * New code:
 *
 * ```js
 * import {Tween, Group} from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * const group = new Group()
 * group.add(tween)
 * group.add(tween2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   group.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 */ var getAll = TWEEN.getAll.bind(TWEEN);
/**
 * @deprecated The global TWEEN Group will be removed in a following major
 * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
 * group.
 *
 * Old code:
 *
 * ```js
 * import * as TWEEN from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new TWEEN.Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   TWEEN.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 *
 * New code:
 *
 * ```js
 * import {Tween, Group} from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * const group = new Group()
 * group.add(tween)
 * group.add(tween2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   group.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 */ var removeAll = TWEEN.removeAll.bind(TWEEN);
/**
 * @deprecated The global TWEEN Group will be removed in a following major
 * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
 * group.
 *
 * Old code:
 *
 * ```js
 * import * as TWEEN from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new TWEEN.Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   TWEEN.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 *
 * New code:
 *
 * ```js
 * import {Tween, Group} from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * const group = new Group()
 * group.add(tween)
 * group.add(tween2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   group.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 */ var add = TWEEN.add.bind(TWEEN);
/**
 * @deprecated The global TWEEN Group will be removed in a following major
 * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
 * group.
 *
 * Old code:
 *
 * ```js
 * import * as TWEEN from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new TWEEN.Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   TWEEN.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 *
 * New code:
 *
 * ```js
 * import {Tween, Group} from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * const group = new Group()
 * group.add(tween)
 * group.add(tween2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   group.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 */ var remove = TWEEN.remove.bind(TWEEN);
/**
 * @deprecated The global TWEEN Group will be removed in a following major
 * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
 * group.
 *
 * Old code:
 *
 * ```js
 * import * as TWEEN from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new TWEEN.Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   TWEEN.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 *
 * New code:
 *
 * ```js
 * import {Tween, Group} from '@tweenjs/tween.js'
 *
 * //...
 *
 * const tween = new Tween(obj)
 * const tween2 = new TWEEN.Tween(obj2)
 *
 * //...
 *
 * const group = new Group()
 * group.add(tween)
 * group.add(tween2)
 *
 * //...
 *
 * requestAnimationFrame(function loop(time) {
 *   group.update(time)
 *   requestAnimationFrame(loop)
 * })
 * ```
 */ var update = TWEEN.update.bind(TWEEN);
var exports = {
    Easing: Easing,
    Group: Group,
    Interpolation: Interpolation,
    now: now,
    Sequence: Sequence,
    nextId: nextId,
    Tween: Tween,
    VERSION: VERSION,
    /**
     * @deprecated The global TWEEN Group will be removed in a following major
     * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
     * group.
     *
     * Old code:
     *
     * ```js
     * import * as TWEEN from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new TWEEN.Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   TWEEN.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     *
     * New code:
     *
     * ```js
     * import {Tween, Group} from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * const group = new Group()
     * group.add(tween)
     * group.add(tween2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   group.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     */ getAll: getAll,
    /**
     * @deprecated The global TWEEN Group will be removed in a following major
     * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
     * group.
     *
     * Old code:
     *
     * ```js
     * import * as TWEEN from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new TWEEN.Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   TWEEN.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     *
     * New code:
     *
     * ```js
     * import {Tween, Group} from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * const group = new Group()
     * group.add(tween)
     * group.add(tween2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   group.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     */ removeAll: removeAll,
    /**
     * @deprecated The global TWEEN Group will be removed in a following major
     * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
     * group.
     *
     * Old code:
     *
     * ```js
     * import * as TWEEN from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new TWEEN.Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   TWEEN.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     *
     * New code:
     *
     * ```js
     * import {Tween, Group} from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * const group = new Group()
     * group.add(tween)
     * group.add(tween2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   group.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     */ add: add,
    /**
     * @deprecated The global TWEEN Group will be removed in a following major
     * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
     * group.
     *
     * Old code:
     *
     * ```js
     * import * as TWEEN from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new TWEEN.Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   TWEEN.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     *
     * New code:
     *
     * ```js
     * import {Tween, Group} from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * const group = new Group()
     * group.add(tween)
     * group.add(tween2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   group.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     */ remove: remove,
    /**
     * @deprecated The global TWEEN Group will be removed in a following major
     * release. To migrate, create a `new Group()` instead of using `TWEEN` as a
     * group.
     *
     * Old code:
     *
     * ```js
     * import * as TWEEN from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new TWEEN.Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   TWEEN.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     *
     * New code:
     *
     * ```js
     * import {Tween, Group} from '@tweenjs/tween.js'
     *
     * //...
     *
     * const tween = new Tween(obj)
     * const tween2 = new TWEEN.Tween(obj2)
     *
     * //...
     *
     * const group = new Group()
     * group.add(tween)
     * group.add(tween2)
     *
     * //...
     *
     * requestAnimationFrame(function loop(time) {
     *   group.update(time)
     *   requestAnimationFrame(loop)
     * })
     * ```
     */ update: update
};
;
}),
"[project]/node_modules/nosleep.js/src/media.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    webm: "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4EEQoWBAhhTgGcBAAAAAAAVkhFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsghV17AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU1LjMzLjEwMFdBjUxhdmY1NS4zMy4xMDBzpJBlrrXf3DCDVB8KcgbMpcr+RImIQJBgAAAAAAAWVK5rAQAAAAAAD++uAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEAmJaAOABAAAAAAAABrCBsLqBkK4BAAAAAAAPq9eBAnPFgQKcgQAitZyDdW5khohBX1ZPUkJJU4OBAuEBAAAAAAAAEZ+BArWIQOdwAAAAAABiZIEgY6JPbwIeVgF2b3JiaXMAAAAAAoC7AAAAAAAAgLUBAAAAAAC4AQN2b3JiaXMtAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAxMDExMDEgKFNjaGF1ZmVudWdnZXQpAQAAABUAAABlbmNvZGVyPUxhdmM1NS41Mi4xMDIBBXZvcmJpcyVCQ1YBAEAAACRzGCpGpXMWhBAaQlAZ4xxCzmvsGUJMEYIcMkxbyyVzkCGkoEKIWyiB0JBVAABAAACHQXgUhIpBCCGEJT1YkoMnPQghhIg5eBSEaUEIIYQQQgghhBBCCCGERTlokoMnQQgdhOMwOAyD5Tj4HIRFOVgQgydB6CCED0K4moOsOQghhCQ1SFCDBjnoHITCLCiKgsQwuBaEBDUojILkMMjUgwtCiJqDSTX4GoRnQXgWhGlBCCGEJEFIkIMGQcgYhEZBWJKDBjm4FITLQagahCo5CB+EIDRkFQCQAACgoiiKoigKEBqyCgDIAAAQQFEUx3EcyZEcybEcCwgNWQUAAAEACAAAoEiKpEiO5EiSJFmSJVmSJVmS5omqLMuyLMuyLMsyEBqyCgBIAABQUQxFcRQHCA1ZBQBkAAAIoDiKpViKpWiK54iOCISGrAIAgAAABAAAEDRDUzxHlETPVFXXtm3btm3btm3btm3btm1blmUZCA1ZBQBAAAAQ0mlmqQaIMAMZBkJDVgEACAAAgBGKMMSA0JBVAABAAACAGEoOogmtOd+c46BZDppKsTkdnEi1eZKbirk555xzzsnmnDHOOeecopxZDJoJrTnnnMSgWQqaCa0555wnsXnQmiqtOeeccc7pYJwRxjnnnCateZCajbU555wFrWmOmkuxOeecSLl5UptLtTnnnHPOOeecc84555zqxekcnBPOOeecqL25lpvQxTnnnE/G6d6cEM4555xzzjnnnHPOOeecIDRkFQAABABAEIaNYdwpCNLnaCBGEWIaMulB9+gwCRqDnELq0ehopJQ6CCWVcVJKJwgNWQUAAAIAQAghhRRSSCGFFFJIIYUUYoghhhhyyimnoIJKKqmooowyyyyzzDLLLLPMOuyssw47DDHEEEMrrcRSU2011lhr7jnnmoO0VlprrbVSSimllFIKQkNWAQAgAAAEQgYZZJBRSCGFFGKIKaeccgoqqIDQkFUAACAAgAAAAABP8hzRER3RER3RER3RER3R8RzPESVREiVREi3TMjXTU0VVdWXXlnVZt31b2IVd933d933d+HVhWJZlWZZlWZZlWZZlWZZlWZYgNGQVAAACAAAghBBCSCGFFFJIKcYYc8w56CSUEAgNWQUAAAIACAAAAHAUR3EcyZEcSbIkS9IkzdIsT/M0TxM9URRF0zRV0RVdUTdtUTZl0zVdUzZdVVZtV5ZtW7Z125dl2/d93/d93/d93/d93/d9XQdCQ1YBABIAADqSIymSIimS4ziOJElAaMgqAEAGAEAAAIriKI7jOJIkSZIlaZJneZaomZrpmZ4qqkBoyCoAABAAQAAAAAAAAIqmeIqpeIqoeI7oiJJomZaoqZoryqbsuq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq4LhIasAgAkAAB0JEdyJEdSJEVSJEdygNCQVQCADACAAAAcwzEkRXIsy9I0T/M0TxM90RM901NFV3SB0JBVAAAgAIAAAAAAAAAMybAUy9EcTRIl1VItVVMt1VJF1VNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVN0zRNEwgNWQkAkAEAkBBTLS3GmgmLJGLSaqugYwxS7KWxSCpntbfKMYUYtV4ah5RREHupJGOKQcwtpNApJq3WVEKFFKSYYyoVUg5SIDRkhQAQmgHgcBxAsixAsiwAAAAAAAAAkDQN0DwPsDQPAAAAAAAAACRNAyxPAzTPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAA0DwP8DwR8EQRAAAAAAAAACzPAzTRAzxRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAAsDwP8EQR0DwRAAAAAAAAACzPAzxRBDzRAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEOAAABBgIRQasiIAiBMAcEgSJAmSBM0DSJYFTYOmwTQBkmVB06BpME0AAAAAAAAAAAAAJE2DpkHTIIoASdOgadA0iCIAAAAAAAAAAAAAkqZB06BpEEWApGnQNGgaRBEAAAAAAAAAAAAAzzQhihBFmCbAM02IIkQRpgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrIiAIgTAHA4imUBAIDjOJYFAACO41gWAABYliWKAABgWZooAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAYcAAACDChDBQashIAiAIAcCiKZQHHsSzgOJYFJMmyAJYF0DyApgFEEQAIAAAocAAACLBBU2JxgEJDVgIAUQAABsWxLE0TRZKkaZoniiRJ0zxPFGma53meacLzPM80IYqiaJoQRVE0TZimaaoqME1VFQAAUOAAABBgg6bE4gCFhqwEAEICAByKYlma5nmeJ4qmqZokSdM8TxRF0TRNU1VJkqZ5niiKommapqqyLE3zPFEURdNUVVWFpnmeKIqiaaqq6sLzPE8URdE0VdV14XmeJ4qiaJqq6roQRVE0TdNUTVV1XSCKpmmaqqqqrgtETxRNU1Vd13WB54miaaqqq7ouEE3TVFVVdV1ZBpimaaqq68oyQFVV1XVdV5YBqqqqruu6sgxQVdd1XVmWZQCu67qyLMsCAAAOHAAAAoygk4wqi7DRhAsPQKEhKwKAKAAAwBimFFPKMCYhpBAaxiSEFEImJaXSUqogpFJSKRWEVEoqJaOUUmopVRBSKamUCkIqJZVSAADYgQMA2IGFUGjISgAgDwCAMEYpxhhzTiKkFGPOOScRUoox55yTSjHmnHPOSSkZc8w556SUzjnnnHNSSuacc845KaVzzjnnnJRSSuecc05KKSWEzkEnpZTSOeecEwAAVOAAABBgo8jmBCNBhYasBABSAQAMjmNZmuZ5omialiRpmud5niiapiZJmuZ5nieKqsnzPE8URdE0VZXneZ4oiqJpqirXFUXTNE1VVV2yLIqmaZqq6rowTdNUVdd1XZimaaqq67oubFtVVdV1ZRm2raqq6rqyDFzXdWXZloEsu67s2rIAAPAEBwCgAhtWRzgpGgssNGQlAJABAEAYg5BCCCFlEEIKIYSUUggJAAAYcAAACDChDBQashIASAUAAIyx1lprrbXWQGettdZaa62AzFprrbXWWmuttdZaa6211lJrrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmstpZRSSimllFJKKaWUUkoppZRSSgUA+lU4APg/2LA6wknRWGChISsBgHAAAMAYpRhzDEIppVQIMeacdFRai7FCiDHnJKTUWmzFc85BKCGV1mIsnnMOQikpxVZjUSmEUlJKLbZYi0qho5JSSq3VWIwxqaTWWoutxmKMSSm01FqLMRYjbE2ptdhqq7EYY2sqLbQYY4zFCF9kbC2m2moNxggjWywt1VprMMYY3VuLpbaaizE++NpSLDHWXAAAd4MDAESCjTOsJJ0VjgYXGrISAAgJACAQUooxxhhzzjnnpFKMOeaccw5CCKFUijHGnHMOQgghlIwx5pxzEEIIIYRSSsaccxBCCCGEkFLqnHMQQgghhBBKKZ1zDkIIIYQQQimlgxBCCCGEEEoopaQUQgghhBBCCKmklEIIIYRSQighlZRSCCGEEEIpJaSUUgohhFJCCKGElFJKKYUQQgillJJSSimlEkoJJYQSUikppRRKCCGUUkpKKaVUSgmhhBJKKSWllFJKIYQQSikFAAAcOAAABBhBJxlVFmGjCRcegEJDVgIAZAAAkKKUUiktRYIipRikGEtGFXNQWoqocgxSzalSziDmJJaIMYSUk1Qy5hRCDELqHHVMKQYtlRhCxhik2HJLoXMOAAAAQQCAgJAAAAMEBTMAwOAA4XMQdAIERxsAgCBEZohEw0JweFAJEBFTAUBigkIuAFRYXKRdXECXAS7o4q4DIQQhCEEsDqCABByccMMTb3jCDU7QKSp1IAAAAAAADADwAACQXAAREdHMYWRobHB0eHyAhIiMkAgAAAAAABcAfAAAJCVAREQ0cxgZGhscHR4fICEiIyQBAIAAAgAAAAAggAAEBAQAAAAAAAIAAAAEBB9DtnUBAAAAAAAEPueBAKOFggAAgACjzoEAA4BwBwCdASqwAJAAAEcIhYWIhYSIAgIABhwJ7kPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99YAD+/6tQgKOFggADgAqjhYIAD4AOo4WCACSADqOZgQArADECAAEQEAAYABhYL/QACIBDmAYAAKOFggA6gA6jhYIAT4AOo5mBAFMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAGSADqOFggB6gA6jmYEAewAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAj4AOo5mBAKMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAKSADqOFggC6gA6jmYEAywAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAz4AOo4WCAOSADqOZgQDzADECAAEQEAAYABhYL/QACIBDmAYAAKOFggD6gA6jhYIBD4AOo5iBARsAEQIAARAQFGAAYWC/0AAiAQ5gGACjhYIBJIAOo4WCATqADqOZgQFDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggFPgA6jhYIBZIAOo5mBAWsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAXqADqOFggGPgA6jmYEBkwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIBpIAOo4WCAbqADqOZgQG7ADECAAEQEAAYABhYL/QACIBDmAYAAKOFggHPgA6jmYEB4wAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIB5IAOo4WCAfqADqOZgQILADECAAEQEAAYABhYL/QACIBDmAYAAKOFggIPgA6jhYICJIAOo5mBAjMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAjqADqOFggJPgA6jmYECWwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYICZIAOo4WCAnqADqOZgQKDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggKPgA6jhYICpIAOo5mBAqsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCArqADqOFggLPgA6jmIEC0wARAgABEBAUYABhYL/QACIBDmAYAKOFggLkgA6jhYIC+oAOo5mBAvsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAw+ADqOZgQMjADECAAEQEAAYABhYL/QACIBDmAYAAKOFggMkgA6jhYIDOoAOo5mBA0sAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA0+ADqOFggNkgA6jmYEDcwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIDeoAOo4WCA4+ADqOZgQObADECAAEQEAAYABhYL/QACIBDmAYAAKOFggOkgA6jhYIDuoAOo5mBA8MAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA8+ADqOFggPkgA6jhYID+oAOo4WCBA+ADhxTu2sBAAAAAAAAEbuPs4EDt4r3gQHxghEr8IEK",
    mp4: "data:video/mp4;base64,AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw"
};
}),
"[project]/node_modules/nosleep.js/src/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const { webm, mp4 } = __turbopack_context__.r("[project]/node_modules/nosleep.js/src/media.js [app-client] (ecmascript)");
// Detect iOS browsers < version 10
const oldIOS = ()=>typeof navigator !== "undefined" && parseFloat(("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [
        0,
        ""
    ])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) < 10 && !window.MSStream;
// Detect native Wake Lock API support
const nativeWakeLock = ()=>"wakeLock" in navigator;
class NoSleep {
    constructor(){
        this.enabled = false;
        if (nativeWakeLock()) {
            this._wakeLock = null;
            const handleVisibilityChange = ()=>{
                if (this._wakeLock !== null && document.visibilityState === "visible") {
                    this.enable();
                }
            };
            document.addEventListener("visibilitychange", handleVisibilityChange);
            document.addEventListener("fullscreenchange", handleVisibilityChange);
        } else if (oldIOS()) {
            this.noSleepTimer = null;
        } else {
            // Set up no sleep video element
            this.noSleepVideo = document.createElement("video");
            this.noSleepVideo.setAttribute("title", "No Sleep");
            this.noSleepVideo.setAttribute("playsinline", "");
            this._addSourceToVideo(this.noSleepVideo, "webm", webm);
            this._addSourceToVideo(this.noSleepVideo, "mp4", mp4);
            this.noSleepVideo.addEventListener("loadedmetadata", ()=>{
                if (this.noSleepVideo.duration <= 1) {
                    // webm source
                    this.noSleepVideo.setAttribute("loop", "");
                } else {
                    // mp4 source
                    this.noSleepVideo.addEventListener("timeupdate", ()=>{
                        if (this.noSleepVideo.currentTime > 0.5) {
                            this.noSleepVideo.currentTime = Math.random();
                        }
                    });
                }
            });
        }
    }
    _addSourceToVideo(element, type, dataURI) {
        var source = document.createElement("source");
        source.src = dataURI;
        source.type = `video/${type}`;
        element.appendChild(source);
    }
    get isEnabled() {
        return this.enabled;
    }
    enable() {
        if (nativeWakeLock()) {
            return navigator.wakeLock.request("screen").then((wakeLock)=>{
                this._wakeLock = wakeLock;
                this.enabled = true;
                console.log("Wake Lock active.");
                this._wakeLock.addEventListener("release", ()=>{
                    // ToDo: Potentially emit an event for the page to observe since
                    // Wake Lock releases happen when page visibility changes.
                    // (https://web.dev/wakelock/#wake-lock-lifecycle)
                    console.log("Wake Lock released.");
                });
            }).catch((err)=>{
                this.enabled = false;
                console.error(`${err.name}, ${err.message}`);
                throw err;
            });
        } else if (oldIOS()) {
            this.disable();
            console.warn(`
        NoSleep enabled for older iOS devices. This can interrupt
        active or long-running network requests from completing successfully.
        See https://github.com/richtr/NoSleep.js/issues/15 for more details.
      `);
            this.noSleepTimer = window.setInterval(()=>{
                if (!document.hidden) {
                    window.location.href = window.location.href.split("#")[0];
                    window.setTimeout(window.stop, 0);
                }
            }, 15000);
            this.enabled = true;
            return Promise.resolve();
        } else {
            let playPromise = this.noSleepVideo.play();
            return playPromise.then((res)=>{
                this.enabled = true;
                return res;
            }).catch((err)=>{
                this.enabled = false;
                throw err;
            });
        }
    }
    disable() {
        if (nativeWakeLock()) {
            if (this._wakeLock) {
                this._wakeLock.release();
            }
            this._wakeLock = null;
        } else if (oldIOS()) {
            if (this.noSleepTimer) {
                console.warn(`
          NoSleep now disabled for older iOS devices.
        `);
                window.clearInterval(this.noSleepTimer);
                this.noSleepTimer = null;
            }
        } else {
            this.noSleepVideo.pause();
        }
        this.enabled = false;
    }
}
module.exports = NoSleep;
}),
]);

//# sourceMappingURL=_cf32f47c._.js.map