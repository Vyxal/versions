'use strict';
import * as $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718 from "./internal-b4e3282ff5c48a84df63c4ba1f1e462d09656718.js";
function $is_jl_CharSequence(obj) {
  return ((!(!((obj && obj.$classData) && obj.$classData.ancestors.jl_CharSequence))) || ((typeof obj) === "string"))
}
function $as_jl_CharSequence(obj) {
  return (($is_jl_CharSequence(obj) || (obj === null)) ? obj : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$throwClassCastException(obj, "java.lang.CharSequence"))
}
function $isArrayOf_jl_CharSequence(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_CharSequence)))
}
function $asArrayOf_jl_CharSequence(obj, depth) {
  return (($isArrayOf_jl_CharSequence(obj, depth) || (obj === null)) ? obj : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$throwArrayCastException(obj, "Ljava.lang.CharSequence;", depth))
}
/** @constructor */
function $c_sjs_js_JSConverters$JSRichIterableOnce$() {
  /*<skip>*/
}
$c_sjs_js_JSConverters$JSRichIterableOnce$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_sjs_js_JSConverters$JSRichIterableOnce$.prototype.constructor = $c_sjs_js_JSConverters$JSRichIterableOnce$;
/** @constructor */
function $h_sjs_js_JSConverters$JSRichIterableOnce$() {
  /*<skip>*/
}
$h_sjs_js_JSConverters$JSRichIterableOnce$.prototype = $c_sjs_js_JSConverters$JSRichIterableOnce$.prototype;
$c_sjs_js_JSConverters$JSRichIterableOnce$.prototype.toJSArray$extension__sc_IterableOnce__sjs_js_Array = (function(this$) {
  if ((this$ instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjs_js_WrappedArray)) {
    var x2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sjs_js_WrappedArray(this$);
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x2).sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array
  } else {
    var result = [];
    var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this$).iterator__sc_Iterator());
    while (this$2.hasNext__Z()) {
      var arg1 = this$2.next__O();
      $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uI(result.push(arg1))
    };
    return result
  }
});
var $d_sjs_js_JSConverters$JSRichIterableOnce$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  sjs_js_JSConverters$JSRichIterableOnce$: 0
}, false, "scala.scalajs.js.JSConverters$JSRichIterableOnce$", {
  sjs_js_JSConverters$JSRichIterableOnce$: 1,
  O: 1
});
$c_sjs_js_JSConverters$JSRichIterableOnce$.prototype.$classData = $d_sjs_js_JSConverters$JSRichIterableOnce$;
var $n_sjs_js_JSConverters$JSRichIterableOnce$;
function $m_sjs_js_JSConverters$JSRichIterableOnce$() {
  if ((!$n_sjs_js_JSConverters$JSRichIterableOnce$)) {
    $n_sjs_js_JSConverters$JSRichIterableOnce$ = new $c_sjs_js_JSConverters$JSRichIterableOnce$()
  };
  return $n_sjs_js_JSConverters$JSRichIterableOnce$
}
/** @constructor */
function $c_sjs_js_special_package$() {
  /*<skip>*/
}
$c_sjs_js_special_package$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_sjs_js_special_package$.prototype.constructor = $c_sjs_js_special_package$;
/** @constructor */
function $h_sjs_js_special_package$() {
  /*<skip>*/
}
$h_sjs_js_special_package$.prototype = $c_sjs_js_special_package$.prototype;
$c_sjs_js_special_package$.prototype.objectLiteral__sci_Seq__sjs_js_Object = (function(properties) {
  var result = {};
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(properties).foreach__F1__V(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((pair$2) => {
    var pair = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T2(pair$2);
    result[$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(pair)._1__O()] = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(pair)._2__O()
  })));
  return result
});
var $d_sjs_js_special_package$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  sjs_js_special_package$: 0
}, false, "scala.scalajs.js.special.package$", {
  sjs_js_special_package$: 1,
  O: 1
});
$c_sjs_js_special_package$.prototype.$classData = $d_sjs_js_special_package$;
var $n_sjs_js_special_package$;
function $m_sjs_js_special_package$() {
  if ((!$n_sjs_js_special_package$)) {
    $n_sjs_js_special_package$ = new $c_sjs_js_special_package$()
  };
  return $n_sjs_js_special_package$
}
/** @constructor */
function $c_Lvyxal_JSToken$() {
  /*<skip>*/
}
$c_Lvyxal_JSToken$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lvyxal_JSToken$.prototype.constructor = $c_Lvyxal_JSToken$;
/** @constructor */
function $h_Lvyxal_JSToken$() {
  /*<skip>*/
}
$h_Lvyxal_JSToken$.prototype = $c_Lvyxal_JSToken$.prototype;
$c_Lvyxal_JSToken$.prototype.apply__Lvyxal_parsing_Token__Lvyxal_JSToken = (function(token) {
  return new ($a_Lvyxal_JSToken())($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(token).Lvyxal_parsing_Token__f_tokenType).jl_Enum__f__name, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(token).Lvyxal_parsing_Token__f_value, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(token).Lvyxal_parsing_Token__f_range).Lvyxal_parsing_Range__f_startOffset, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(token).Lvyxal_parsing_Token__f_range).Lvyxal_parsing_Range__f_endOffset)
});
var $d_Lvyxal_JSToken$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lvyxal_JSToken$: 0
}, false, "vyxal.JSToken$", {
  Lvyxal_JSToken$: 1,
  O: 1
});
$c_Lvyxal_JSToken$.prototype.$classData = $d_Lvyxal_JSToken$;
var $n_Lvyxal_JSToken$;
function $m_Lvyxal_JSToken$() {
  if ((!$n_Lvyxal_JSToken$)) {
    $n_Lvyxal_JSToken$ = new $c_Lvyxal_JSToken$()
  };
  return $n_Lvyxal_JSToken$
}
/** @constructor */
function $c_Lvyxal_JSVyxal$() {
  /*<skip>*/
}
$c_Lvyxal_JSVyxal$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lvyxal_JSVyxal$.prototype.constructor = $c_Lvyxal_JSVyxal$;
/** @constructor */
function $h_Lvyxal_JSVyxal$() {
  /*<skip>*/
}
$h_Lvyxal_JSVyxal$.prototype = $c_Lvyxal_JSVyxal$.prototype;
$c_Lvyxal_JSVyxal$.prototype.execute__T__sjs_js_Array__T__sjs_js_Function1__sjs_js_Function1__V = (function(code, inputs, flags, printFunc, errorFunc) {
  var printRequestCount = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sr_IntRef(0);
  var $$x4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_Flag$();
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_StringOps$();
  var this$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(flags);
  var len = this$4.length;
  var dst = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ac_O(len);
  var i = 0;
  while ((i < len)) {
    var $$x2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(dst);
    var $$x1 = i;
    var this$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(flags);
    var index = i;
    var arg1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$5, index);
    $$x2.set($$x1, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_Flag$().from__C__Lvyxal_Flag(arg1));
    i = ((1 + i) | 0)
  };
  var $$x3 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_ArraySeq$ofRef(dst);
  var endPrintMode = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$s_Lvyxal_EndPrintMode$__Default__Lvyxal_EndPrintMode();
  var defaultValue = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_VAny($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_conversions$().given_Conversion_Int_VNum__s_Conversion()).apply__O__O(0));
  var rangeStart = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_VNum($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_conversions$().given_Conversion_Int_VNum__s_Conversion()).apply__O__O(1));
  var rangeOffset = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_VNum($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_conversions$().given_Conversion_Int_VNum__s_Conversion()).apply__O__O(0));
  var settings = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x4).applyFlags__sci_Seq__Lvyxal_Settings__Lvyxal_Settings($$x3, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_Lvyxal_Settings(false, endPrintMode, defaultValue, false, rangeStart, rangeOffset, false, true, false, false, 1, false, false, 100, false));
  var len$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uI(inputs.length);
  var res = new Array(len$1);
  var i$1 = 0;
  while ((i$1 < len$1)) {
    var $$x9 = i$1;
    var arg1$1 = inputs[i$1];
    var x = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg1$1);
    if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(settings).Lvyxal_Settings__f_dontEvalInputs) {
      var $$x5 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_Lvyxal_VStr(x)
    } else {
      var $$x8 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_MiscHelpers$();
      var $$x7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_Context$();
      var $$x6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_Seq($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_package$().s_package$__f_Seq).empty__sc_SeqOps());
      var endPrintMode$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$s_Lvyxal_EndPrintMode$__Default__Lvyxal_EndPrintMode();
      var defaultValue$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_VAny($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_conversions$().given_Conversion_Int_VNum__s_Conversion()).apply__O__O(0));
      var rangeStart$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_VNum($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_conversions$().given_Conversion_Int_VNum__s_Conversion()).apply__O__O(1));
      var rangeOffset$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_VNum($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_conversions$().given_Conversion_Int_VNum__s_Conversion()).apply__O__O(0));
      var settings$1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_Lvyxal_Settings(false, endPrintMode$1, defaultValue$1, false, rangeStart$1, rangeOffset$1, false, false, false, false, 1, false, false, 100, false);
      var printFn = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_Globals$().$lessinit$greater$default$2__F1();
      var callStack = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_Globals$().$lessinit$greater$default$3__scm_Stack();
      var $$x5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x8).eval__T__Lvyxal_Context__Lvyxal_VAny(x, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x7).apply__sci_Seq__Lvyxal_Globals__Z__s_Option__Lvyxal_Context($$x6, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_Lvyxal_Globals(settings$1, printFn, callStack), false, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$()))
    };
    res[$$x9] = $$x5;
    i$1 = ((1 + i$1) | 0)
  };
  var inputList = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_Seq($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_IndexedSeq$().from__sc_IterableOnce__sci_IndexedSeq($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_sjs_js_WrappedArray__sjs_js_Array__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjs_js_WrappedArray(), res))).reverse__O());
  var printFn$1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((str) => {
    var str$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(str);
    if ((printRequestCount.sr_IntRef__f_elem <= 20000)) {
      printFunc(str$1);
      var ev$20 = ((1 + printRequestCount.sr_IntRef__f_elem) | 0);
      printRequestCount.sr_IntRef__f_elem = ev$20
    }
  }));
  var callStack$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_Globals$().$lessinit$greater$default$3__scm_Stack();
  var globals = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_Lvyxal_Globals(settings, printFn$1, callStack$1);
  globals.Lvyxal_Globals__f_inputs = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_Lvyxal_Inputs(inputList);
  var ctx = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_Context$().apply__sci_Seq__Lvyxal_Globals__Z__s_Option__Lvyxal_Context(inputList, globals, false, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$());
  try {
    $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_Interpreter$().execute__T__Lvyxal_Context__V(code, ctx)
  } catch (e) {
    if ((e instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_Lvyxal_VyxalException)) {
      var ex = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_VyxalException(e);
      errorFunc($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(ex).getMessage__Lvyxal_Context__T(ctx))
    } else {
      throw e
    }
  }
});
$c_Lvyxal_JSVyxal$.prototype.setShortDict__T__V = (function(dict) {
  var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_Dictionary$();
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(dict);
  var xs = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_T__split__T__I__AT(this$1, "\r\n", 0);
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_ArrayOps$();
  $$x1.Lvyxal_Dictionary$__f__shortDictionary = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_ArrayOps$().toIndexedSeq$extension__O__sci_IndexedSeq(xs)
});
$c_Lvyxal_JSVyxal$.prototype.setLongDict__T__V = (function(dict) {
  var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_Dictionary$();
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(dict);
  var xs = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_T__split__T__I__AT(this$1, "\r\n", 0);
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_ArrayOps$();
  $$x1.Lvyxal_Dictionary$__f__longDictionary = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_ArrayOps$().toIndexedSeq$extension__O__sci_IndexedSeq(xs)
});
$c_Lvyxal_JSVyxal$.prototype.getSBCSified__T__T = (function(code) {
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_parsing_Lexer$().sbcsify__sci_Seq__T($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_parsing_Lexer$().lexLiterate__T__sci_Seq(code))
});
$c_Lvyxal_JSVyxal$.prototype.getElements__sjs_js_Array = (function() {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_elements_ElementInformation$().Lvyxal_elements_ElementInformation$__f_elements);
  var this$30 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sc_MapOps$$anon$1(this$1);
  var f = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((x$1) => {
    var x$1$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_elements_Element(x$1);
    if ((x$1$1 !== null)) {
      var this$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1$1);
      var x12 = this$4.Lvyxal_elements_Element__f_symbol;
      var this$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1$1);
      var x13 = this$5.Lvyxal_elements_Element__f_keywords;
      var this$6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1$1);
      var this$7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1$1);
      var x15 = this$7.Lvyxal_elements_Element__f_options;
      var this$8 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1$1);
      var x10 = this$8.Lvyxal_elements_Element__f_overloads;
      if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x10).lengthCompare__I__I(0) >= 0)) {
        var this$9 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x10);
        var $$x5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sr_ScalaRunTime$();
        var $$x4 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2("symbol", x12);
        var this$14 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sc_IterableOnceOps(this$9.map__F1__O(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$1) => {
          var _$1$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_elements_Overload(_$1);
          return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$1$1).Lvyxal_elements_Overload__f_name
        })))));
        var s = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$14, "", " / ", "");
        var $$x3 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2("name", s);
        var y = $m_sjs_js_JSConverters$JSRichIterableOnce$().toJSArray$extension__sc_IterableOnce__sjs_js_Array(x13);
        var $$x2 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2("keywords", y);
        var value = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x15).Lvyxal_elements_Options__f_vectorises;
        var $$x1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2("vectorises", value);
        var col = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sc_IterableOnce($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sc_IterableOnceOps(this$9.map__F1__O(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((overload) => {
          var overload$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_elements_Overload(overload);
          return $m_Lvyxal_gen_DocsUtils$().overloadToString__Lvyxal_elements_Overload__O(overload$1)
        }))))).foldLeft__O__F2__O($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_package$().s_package$__f_Seq).empty__sc_SeqOps(), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((x$1$2, x$2) => {
          var x$1$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_Seq(x$1$2);
          var x1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2(x$1$3, x$2);
          var x5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_Seq(x1.T2__f__1);
          var x6 = x1.T2__f__2;
          if (((typeof x6) === "string")) {
            var s$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(x6);
            var this$25 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x5);
            return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_Seq(this$25.appended__O__O(s$1))
          };
          if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$is_sci_Seq(x6)) {
            var s$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_Seq(x6);
            var this$26 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x5);
            return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_Seq(this$26.appendedAll__sc_IterableOnce__O(s$2))
          };
          throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(x1)
        }))));
        var y$1 = $m_sjs_js_JSConverters$JSRichIterableOnce$().toJSArray$extension__sc_IterableOnce__sjs_js_Array(col);
        var fields = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x5).wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$d_T2.getArrayOf().constr)([$$x4, $$x3, $$x2, $$x1, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2("overloads", y$1)]));
        return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
      }
    };
    throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(x$1$1)
  }));
  var col$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sc_IterableOnce($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_IterableOps__map__F1__O(this$30, f));
  return $m_sjs_js_JSConverters$JSRichIterableOnce$().toJSArray$extension__sc_IterableOnce__sjs_js_Array(col$1)
});
$c_Lvyxal_JSVyxal$.prototype.getModifiers__sjs_js_Array = (function() {
  var col$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sc_IterableOnce($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_elements_ElementInformation$().Lvyxal_elements_ElementInformation$__f_modifiers).map__F1__O(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((x$1) => {
    var x$1$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T2(x$1);
    if ((x$1$1 !== null)) {
      var symbol = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1$1)._1__O());
      var info = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_elements_Modifier($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1$1)._2__O());
      var $$x4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sr_ScalaRunTime$();
      var $$x3 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2("symbol", symbol);
      var this$6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sc_IterableOnceOps($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(info).Lvyxal_elements_Modifier__f_overloads).map__F1__O(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$2) => {
        var _$2$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_elements_ModifierOverload(_$2);
        return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$2$1).Lvyxal_elements_ModifierOverload__f_name
      })))));
      var s = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$6, "", " / ", "");
      var $$x2 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2("name", s);
      var col = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sc_IterableOnce($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(info).Lvyxal_elements_Modifier__f_overloads).map__F1__O(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((overload) => {
        var overload$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_elements_ModifierOverload(overload);
        return $m_Lvyxal_gen_DocsUtils$().overloadToString__Lvyxal_elements_ModifierOverload__T(overload$1)
      }))));
      var y = $m_sjs_js_JSConverters$JSRichIterableOnce$().toJSArray$extension__sc_IterableOnce__sjs_js_Array(col);
      var $$x1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2("description", y);
      var col$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(info).Lvyxal_elements_Modifier__f_keywords;
      var y$1 = $m_sjs_js_JSConverters$JSRichIterableOnce$().toJSArray$extension__sc_IterableOnce__sjs_js_Array(col$1);
      var fields = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x4).wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$d_T2.getArrayOf().constr)([$$x3, $$x2, $$x1, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2("keywords", y$1)]));
      return $m_sjs_js_special_package$().objectLiteral__sci_Seq__sjs_js_Object(fields)
    };
    throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(x$1$1)
  }))));
  return $m_sjs_js_JSConverters$JSRichIterableOnce$().toJSArray$extension__sc_IterableOnce__sjs_js_Array(col$2)
});
$c_Lvyxal_JSVyxal$.prototype.lexSBCS__T__sjs_js_Array = (function(code) {
  var seq = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_Seq($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_parsing_Lexer$().lexSBCS__T__sci_Seq(code)).map__F1__O(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$3) => {
    var _$3$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_parsing_Token(_$3);
    return $m_Lvyxal_JSToken$().apply__Lvyxal_parsing_Token__Lvyxal_JSToken(_$3$1)
  }))));
  return [...$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sjsr_Compat$().toJSVarArgsImpl__sci_Seq__sjs_js_Array(seq)]
});
$c_Lvyxal_JSVyxal$.prototype.lexLiterate__T__sjs_js_Array = (function(code) {
  var seq = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_Seq($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_parsing_Lexer$().lexLiterate__T__sci_Seq(code)).map__F1__O(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$4) => {
    var _$4$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_parsing_Token(_$4);
    return $m_Lvyxal_JSToken$().apply__Lvyxal_parsing_Token__Lvyxal_JSToken(_$4$1)
  }))));
  return [...$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sjsr_Compat$().toJSVarArgsImpl__sci_Seq__sjs_js_Array(seq)]
});
$c_Lvyxal_JSVyxal$.prototype.getElements = (function() {
  return this.getElements__sjs_js_Array()
});
$c_Lvyxal_JSVyxal$.prototype.getVersion = (function() {
  return "3.5.1"
});
$c_Lvyxal_JSVyxal$.prototype.setLongDict = (function(arg) {
  var prep0 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg);
  this.setLongDict__T__V(prep0)
});
$c_Lvyxal_JSVyxal$.prototype.compress = (function(arg) {
  var prep0 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg);
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_StringHelpers$().compressDictionary__T__T(prep0)
});
$c_Lvyxal_JSVyxal$.prototype.decompress = (function(arg) {
  var prep0 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg);
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_StringHelpers$().decompress__T__T(prep0)
});
$c_Lvyxal_JSVyxal$.prototype.execute = (function(arg, arg$2, arg$3, arg$4, arg$5) {
  var prep0 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg);
  var prep2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg$3);
  this.execute__T__sjs_js_Array__T__sjs_js_Function1__sjs_js_Function1__V(prep0, arg$2, prep2, arg$4, arg$5)
});
$c_Lvyxal_JSVyxal$.prototype.lexSBCS = (function(arg) {
  var prep0 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg);
  return this.lexSBCS__T__sjs_js_Array(prep0)
});
$c_Lvyxal_JSVyxal$.prototype.lexLiterate = (function(arg) {
  var prep0 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg);
  return this.lexLiterate__T__sjs_js_Array(prep0)
});
$c_Lvyxal_JSVyxal$.prototype.getSBCSified = (function(arg) {
  var prep0 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg);
  return this.getSBCSified__T__T(prep0)
});
$c_Lvyxal_JSVyxal$.prototype.getModifiers = (function() {
  return this.getModifiers__sjs_js_Array()
});
$c_Lvyxal_JSVyxal$.prototype.setShortDict = (function(arg) {
  var prep0 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg);
  this.setShortDict__T__V(prep0)
});
$c_Lvyxal_JSVyxal$.prototype.getCodepage = (function() {
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_parsing_Lexer$package$().Codepage__T()
});
var $d_Lvyxal_JSVyxal$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lvyxal_JSVyxal$: 0
}, false, "vyxal.JSVyxal$", {
  Lvyxal_JSVyxal$: 1,
  O: 1
});
$c_Lvyxal_JSVyxal$.prototype.$classData = $d_Lvyxal_JSVyxal$;
var $n_Lvyxal_JSVyxal$;
function $m_Lvyxal_JSVyxal$() {
  if ((!$n_Lvyxal_JSVyxal$)) {
    $n_Lvyxal_JSVyxal$ = new $c_Lvyxal_JSVyxal$()
  };
  return $n_Lvyxal_JSVyxal$
}
/** @constructor */
function $c_Lvyxal_gen_DocsUtils$() {
  /*<skip>*/
}
$c_Lvyxal_gen_DocsUtils$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lvyxal_gen_DocsUtils$.prototype.constructor = $c_Lvyxal_gen_DocsUtils$;
/** @constructor */
function $h_Lvyxal_gen_DocsUtils$() {
  /*<skip>*/
}
$h_Lvyxal_gen_DocsUtils$.prototype = $c_Lvyxal_gen_DocsUtils$.prototype;
$c_Lvyxal_gen_DocsUtils$.prototype.overloadToString__Lvyxal_elements_Overload__O = (function(overload) {
  var description = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(overload).Lvyxal_elements_Overload__f_description;
  if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(overload).Lvyxal_elements_Overload__f_typeSwitchable) {
    $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_StringOps$();
    var FIELD_REGEX = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_s_util_matching_Regex__T__sci_Seq__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_util_matching_Regex(), "\\{((?:\\\\[\\{\\}|\\\\\\\\]|[^\\{\\}\\\\])*)\\}", $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
    var this$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(FIELD_REGEX.findAllMatchIn__jl_CharSequence__sc_Iterator(description));
    var f = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$1) => {
      var _$1$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_s_util_matching_Regex$Match(_$1);
      var this$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$1$1);
      return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_s_util_matching_Regex$MatchData__group__I__T(this$4, 1)
    }));
    var this$6 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sc_Iterator$$anon$9(this$5, f);
    var fields = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Seq$().from__sc_IterableOnce__sci_Seq(this$6);
    var fieldOptions = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_Seq($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(fields).map__F1__O(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((field) => {
      var field$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(field);
      var this$7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(field$1);
      var xs = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_T__split__T__I__AT(this$7, "(?<!\\\\)\\|", 0);
      $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_ArrayOps$();
      return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_ArrayOps$().toIndexedSeq$extension__O__sci_IndexedSeq(xs)
    }))));
    var this$10 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_scm_ArrayBuffer$();
    var elems = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$d_T.getArrayOf().constr)([]));
    var descriptions = this$10.from__sc_IterableOnce__scm_ArrayBuffer(elems);
    var this$11 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(overload).Lvyxal_elements_Overload__f_args);
    var this$12 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_SeqOps__permutations__sc_Iterator(this$11));
    var this$13 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sc_Iterator$$anon$16(this$12);
    var p = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((x$1) => {
      var x$1$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T2(x$1);
      return ((x$1$1 !== null) && ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_Seq($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1$1)._1__O()), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uI($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1$1)._2__O()), true))
    }));
    var this$14 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sc_Iterator$$anon$6(this$13, p, false);
    while (this$14.hasNext__Z()) {
      var arg1 = this$14.next__O();
      var x$1$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T2(arg1);
      matchResult4: {
        if ((x$1$2 !== null)) {
          var args$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_Seq($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1$2)._1__O());
          var index$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uI($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1$2)._2__O());
          var this$17 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sc_IterableOnceOps($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(args$1).map__F1__O(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$2) => {
            var _$2$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(_$2);
            var this$16 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$2$1);
            return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(this$16.split("|").join("\\|"))
          })))));
          var argsString = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$17, "", ",", "");
          var descriptionString = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sc_IterableOnceOps($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(fields).zip__sc_IterableOnce__O(fieldOptions))).foldLeft__O__F2__O(description, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((index$1) => ((x$1$2$1, x$2) => {
            var x$1$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(x$1$2$1);
            var x$2$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T2(x$2);
            var x11 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2(x$1$3, x$2$1);
            var x13 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T2(x11.T2__f__2);
            var acc = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(x11.T2__f__1);
            if ((x13 !== null)) {
              var field$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x13)._1__O());
              var options = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_Seq($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x13)._2__O());
              var this$19 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(acc);
              var target = (("{" + field$2) + "}");
              var replacement = $as_jl_CharSequence($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(options).apply__I__O($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$intMod(index$1, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(options).length__I())));
              return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(this$19.split(target).join($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$dp_toString__T($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(replacement))))
            };
            throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(x11)
          }))(index$1))));
          var this$20 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(descriptions);
          var elem = ((((("**" + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(overload).Lvyxal_elements_Overload__f_name) + "** (`") + argsString) + "`): ") + descriptionString);
          this$20.addOne__O__scm_ArrayBuffer(elem);
          break matchResult4
        };
        throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(x$1$2)
      }
    };
    var this$21 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(descriptions);
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Seq$().from__sc_IterableOnce__sci_Seq(this$21)
  } else if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(overload).Lvyxal_elements_Overload__f_args).isEmpty__Z()) {
    return ((("**" + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(overload).Lvyxal_elements_Overload__f_name) + "**: ") + description)
  } else {
    var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(overload).Lvyxal_elements_Overload__f_name;
    var this$23 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sc_IterableOnceOps($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(overload).Lvyxal_elements_Overload__f_args).map__F1__O(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$3) => {
      var _$3$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(_$3);
      var this$22 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$3$1);
      return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(this$22.split("|").join("\\|"))
    })))));
    return ((((("**" + $$x1) + "** (`") + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$23, "", ",", "")) + "`): ") + description)
  }
});
$c_Lvyxal_gen_DocsUtils$.prototype.overloadToString__Lvyxal_elements_ModifierOverload__T = (function(overload) {
  var description = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(overload).Lvyxal_elements_ModifierOverload__f_description;
  var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sc_IterableOnceOps($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(overload).Lvyxal_elements_ModifierOverload__f_args).map__F1__O(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$4) => {
    var _$4$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(_$4);
    var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$4$1);
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(this$2.split("|").join("\\|"))
  })))));
  var args = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$3, "", ",", "");
  var this$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(overload).Lvyxal_elements_ModifierOverload__f_example);
  var this$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(this$4.split("|").join("\\|")));
  var example = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(this$5.split("`").join("\\`"));
  return (((((((("<tr><td>**" + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(overload).Lvyxal_elements_ModifierOverload__f_name) + "**</td><td>`") + args) + "`</td><td>") + description) + "</td><td>`") + example) + "`</td></tr>")
});
var $d_Lvyxal_gen_DocsUtils$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lvyxal_gen_DocsUtils$: 0
}, false, "vyxal.gen.DocsUtils$", {
  Lvyxal_gen_DocsUtils$: 1,
  O: 1
});
$c_Lvyxal_gen_DocsUtils$.prototype.$classData = $d_Lvyxal_gen_DocsUtils$;
var $n_Lvyxal_gen_DocsUtils$;
function $m_Lvyxal_gen_DocsUtils$() {
  if ((!$n_Lvyxal_gen_DocsUtils$)) {
    $n_Lvyxal_gen_DocsUtils$ = new $c_Lvyxal_gen_DocsUtils$()
  };
  return $n_Lvyxal_gen_DocsUtils$
}
var $b_Lvyxal_JSToken;
function $a_Lvyxal_JSToken() {
  if ((!$b_Lvyxal_JSToken)) {
    $b_Lvyxal_JSToken = class $b_Lvyxal_JSToken extends Object {
      constructor(arg, arg$2, arg$3, arg$4) {
        var tokenType = null;
        var value = null;
        var startOffset = 0;
        var endOffset = 0;
        tokenType = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg);
        value = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg$2);
        startOffset = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uI(arg$3);
        endOffset = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uI(arg$4);
        super();
        Object.defineProperty(this, "tokenType", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        Object.defineProperty(this, "value", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        });
        Object.defineProperty(this, "startOffset", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        });
        Object.defineProperty(this, "endOffset", {
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        });
        this.tokenType = tokenType;
        this.value = value;
        this.startOffset = startOffset;
        this.endOffset = endOffset
      };
    }
  };
  return $b_Lvyxal_JSToken
}
let $e_Vyxal = $m_Lvyxal_JSVyxal$();
export { $e_Vyxal as Vyxal };
//# sourceMappingURL=vyxal.js.map
