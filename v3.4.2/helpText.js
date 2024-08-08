'use strict';
import * as $i_os from "os";
import * as $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718 from "./internal-b4e3282ff5c48a84df63c4ba1f1e462d09656718.js";
/** @constructor */
function $c_ju_internal_MurmurHash3$() {
  /*<skip>*/
}
$c_ju_internal_MurmurHash3$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_ju_internal_MurmurHash3$.prototype.constructor = $c_ju_internal_MurmurHash3$;
/** @constructor */
function $h_ju_internal_MurmurHash3$() {
  /*<skip>*/
}
$h_ju_internal_MurmurHash3$.prototype = $c_ju_internal_MurmurHash3$.prototype;
$c_ju_internal_MurmurHash3$.prototype.mix__I__I__I = (function(hash, data) {
  var h = this.mixLast__I__I__I(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return (((-430675100) + Math.imul(5, h)) | 0)
});
$c_ju_internal_MurmurHash3$.prototype.mixLast__I__I__I = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k)
});
$c_ju_internal_MurmurHash3$.prototype.finalizeHash__I__I__I = (function(hash, length) {
  var hash$1 = (hash ^ length);
  var h = hash$1;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h
});
var $d_ju_internal_MurmurHash3$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  ju_internal_MurmurHash3$: 0
}, false, "java.util.internal.MurmurHash3$", {
  ju_internal_MurmurHash3$: 1,
  O: 1
});
$c_ju_internal_MurmurHash3$.prototype.$classData = $d_ju_internal_MurmurHash3$;
var $n_ju_internal_MurmurHash3$;
function $m_ju_internal_MurmurHash3$() {
  if ((!$n_ju_internal_MurmurHash3$)) {
    $n_ju_internal_MurmurHash3$ = new $c_ju_internal_MurmurHash3$()
  };
  return $n_ju_internal_MurmurHash3$
}
/** @constructor */
function $c_s_Array$UnapplySeqWrapper$() {
  /*<skip>*/
}
$c_s_Array$UnapplySeqWrapper$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_s_Array$UnapplySeqWrapper$.prototype.constructor = $c_s_Array$UnapplySeqWrapper$;
/** @constructor */
function $h_s_Array$UnapplySeqWrapper$() {
  /*<skip>*/
}
$h_s_Array$UnapplySeqWrapper$.prototype = $c_s_Array$UnapplySeqWrapper$.prototype;
$c_s_Array$UnapplySeqWrapper$.prototype.lengthCompare$extension__O__I__I = (function(this$, len) {
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_ArrayOps$().lengthCompare$extension__O__I__I(this$, len)
});
var $d_s_Array$UnapplySeqWrapper$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  s_Array$UnapplySeqWrapper$: 0
}, false, "scala.Array$UnapplySeqWrapper$", {
  s_Array$UnapplySeqWrapper$: 1,
  O: 1
});
$c_s_Array$UnapplySeqWrapper$.prototype.$classData = $d_s_Array$UnapplySeqWrapper$;
var $n_s_Array$UnapplySeqWrapper$;
function $m_s_Array$UnapplySeqWrapper$() {
  if ((!$n_s_Array$UnapplySeqWrapper$)) {
    $n_s_Array$UnapplySeqWrapper$ = new $c_s_Array$UnapplySeqWrapper$()
  };
  return $n_s_Array$UnapplySeqWrapper$
}
function $p_sc_StringParsers$__step$2__I__J__Z__I__T__s_Option($thiz, i, agg, isPositive, len$3, from$3) {
  while (true) {
    if ((i === len$3)) {
      if (isPositive) {
        var this$1 = agg;
        var $$x1 = ((this$1.RTLong__f_lo === 0) && (this$1.RTLong__f_hi === (-2147483648)))
      } else {
        var $$x1 = false
      };
      if ($$x1) {
        return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$()
      } else if (isPositive) {
        var this$2 = agg;
        var lo = this$2.RTLong__f_lo;
        var hi = this$2.RTLong__f_hi;
        var lo$1 = ((-lo) | 0);
        var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
        return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo$1, hi$1))
      } else {
        return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some(agg)
      }
    } else {
      var this$5 = agg;
      var ahi = this$5.RTLong__f_hi;
      if (((ahi === (-214748365)) ? (((-2147483648) ^ this$5.RTLong__f_lo) < (-1288490188)) : (ahi < (-214748365)))) {
        return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$()
      } else {
        var this$6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(from$3);
        var index = i;
        var ch = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$6, index);
        var this$7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_jl_Character$();
        var codePoint = ch;
        var digit = this$7.digitWithValidRadix__I__I__I(codePoint, 10);
        if ((digit === (-1))) {
          var $$x2 = true
        } else {
          var this$8 = agg;
          if (((this$8.RTLong__f_lo === 858993460) && (this$8.RTLong__f_hi === (-214748365)))) {
            var $$x2 = (digit === 9)
          } else {
            var $$x2 = false
          }
        };
        if ($$x2) {
          return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$()
        } else {
          var temp$i = ((1 + i) | 0);
          var b = agg;
          var blo = b.RTLong__f_lo;
          var b0 = (65535 & blo);
          var b1 = ((blo >>> 16) | 0);
          var a0b0 = Math.imul(10, b0);
          var a0b1 = Math.imul(10, b1);
          var lo$2 = ((a0b0 + (a0b1 << 16)) | 0);
          var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
          var hi$2 = ((Math.imul(10, b.RTLong__f_hi) + ((c1part >>> 16) | 0)) | 0);
          var hi$3 = (digit >> 31);
          var lo$3 = ((lo$2 - digit) | 0);
          var hi$4 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$2)) ? (((-1) + ((hi$2 - hi$3) | 0)) | 0) : ((hi$2 - hi$3) | 0));
          i = temp$i;
          agg = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo$3, hi$4)
        }
      }
    }
  }
}
/** @constructor */
function $c_sc_StringParsers$() {
  /*<skip>*/
}
$c_sc_StringParsers$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_sc_StringParsers$.prototype.constructor = $c_sc_StringParsers$;
/** @constructor */
function $h_sc_StringParsers$() {
  /*<skip>*/
}
$h_sc_StringParsers$.prototype = $c_sc_StringParsers$.prototype;
$c_sc_StringParsers$.prototype.parseLong__T__s_Option = (function(from) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(from);
  var len = this$1.length;
  if ((len === 0)) {
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$()
  } else {
    var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(from);
    var first = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$2, 0);
    var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_jl_Character$();
    var codePoint = first;
    var value = this$3.digitWithValidRadix__I__I__I(codePoint, 10);
    var hi = (value >> 31);
    if ((len === 1)) {
      return ((hi > (-1)) ? new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(value, hi)) : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$())
    } else if ((hi > (-1))) {
      var lo = ((-value) | 0);
      var hi$1 = ((value !== 0) ? (~hi) : ((-hi) | 0));
      return $p_sc_StringParsers$__step$2__I__J__Z__I__T__s_Option(this, 1, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi$1), true, len, from)
    } else {
      return ((first === 43) ? $p_sc_StringParsers$__step$2__I__J__Z__I__T__s_Option(this, 1, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$L0, true, len, from) : ((first === 45) ? $p_sc_StringParsers$__step$2__I__J__Z__I__T__s_Option(this, 1, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$L0, false, len, from) : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$()))
    }
  }
});
var $d_sc_StringParsers$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  sc_StringParsers$: 0
}, false, "scala.collection.StringParsers$", {
  sc_StringParsers$: 1,
  O: 1
});
$c_sc_StringParsers$.prototype.$classData = $d_sc_StringParsers$;
var $n_sc_StringParsers$;
function $m_sc_StringParsers$() {
  if ((!$n_sc_StringParsers$)) {
    $n_sc_StringParsers$ = new $c_sc_StringParsers$()
  };
  return $n_sc_StringParsers$
}
/** @constructor */
function $c_Lscopt_OParser(head, rest) {
  this.Lscopt_OParser__f_head = null;
  this.Lscopt_OParser__f_rest = null;
  this.Lscopt_OParser__f_head = head;
  this.Lscopt_OParser__f_rest = rest
}
$c_Lscopt_OParser.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_OParser.prototype.constructor = $c_Lscopt_OParser;
/** @constructor */
function $h_Lscopt_OParser() {
  /*<skip>*/
}
$h_Lscopt_OParser.prototype = $c_Lscopt_OParser.prototype;
$c_Lscopt_OParser.prototype.text__T__Lscopt_OParser = (function(x) {
  return this.subHead__Lscopt_OptionDef__Lscopt_OParser($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lscopt_OParser__f_head).text__T__Lscopt_OptionDef(x))
});
$c_Lscopt_OParser.prototype.abbr__T__Lscopt_OParser = (function(x) {
  return this.subHead__Lscopt_OptionDef__Lscopt_OParser($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lscopt_OParser__f_head).abbr__T__Lscopt_OptionDef(x))
});
$c_Lscopt_OParser.prototype.action__F2__Lscopt_OParser = (function(f) {
  return this.subHead__Lscopt_OptionDef__Lscopt_OParser($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lscopt_OParser__f_head).action__F2__Lscopt_OptionDef(f))
});
$c_Lscopt_OParser.prototype.minOccurs__I__Lscopt_OParser = (function(n) {
  return this.subHead__Lscopt_OptionDef__Lscopt_OParser($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lscopt_OParser__f_head).minOccurs__I__Lscopt_OptionDef(n))
});
$c_Lscopt_OParser.prototype.maxOccurs__I__Lscopt_OParser = (function(n) {
  return this.subHead__Lscopt_OptionDef__Lscopt_OParser($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lscopt_OParser__f_head).maxOccurs__I__Lscopt_OptionDef(n))
});
$c_Lscopt_OParser.prototype.toList__sci_List = (function() {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lscopt_OParser__f_rest);
  var elem = this.Lscopt_OParser__f_head;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon(elem, this$1)
});
$c_Lscopt_OParser.prototype.subHead__Lscopt_OptionDef__Lscopt_OParser = (function(head) {
  var rest = this.Lscopt_OParser__f_rest;
  return new $c_Lscopt_OParser(head, rest)
});
function $as_Lscopt_OParser(obj) {
  return (((obj instanceof $c_Lscopt_OParser) || (obj === null)) ? obj : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$throwClassCastException(obj, "scopt.OParser"))
}
function $isArrayOf_Lscopt_OParser(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscopt_OParser)))
}
function $asArrayOf_Lscopt_OParser(obj, depth) {
  return (($isArrayOf_Lscopt_OParser(obj, depth) || (obj === null)) ? obj : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$throwArrayCastException(obj, "Lscopt.OParser;", depth))
}
var $d_Lscopt_OParser = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_OParser: 0
}, false, "scopt.OParser", {
  Lscopt_OParser: 1,
  O: 1
});
$c_Lscopt_OParser.prototype.$classData = $d_Lscopt_OParser;
/** @constructor */
function $c_Lscopt_OParser$() {
  /*<skip>*/
}
$c_Lscopt_OParser$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_OParser$.prototype.constructor = $c_Lscopt_OParser$;
/** @constructor */
function $h_Lscopt_OParser$() {
  /*<skip>*/
}
$h_Lscopt_OParser$.prototype = $c_Lscopt_OParser$.prototype;
$c_Lscopt_OParser$.prototype.usage__Lscopt_OParser__Lscopt_RenderingMode__T = (function(parser, mode) {
  matchResult2: {
    var \u03b42$___1;
    var \u03b42$___2;
    var x4 = $m_Lscopt_ORunner$().renderUsage__Lscopt_RenderingMode__sci_List__T2(mode, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(parser).toList__sci_List());
    if ((x4 !== null)) {
      var h = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x4)._1__O());
      var u = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x4)._2__O());
      var \u03b42$___1 = h;
      var \u03b42$___2 = u;
      break matchResult2
    };
    throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(x4)
  };
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(\u03b42$___1);
  var u$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(\u03b42$___2);
  return u$2
});
$c_Lscopt_OParser$.prototype.sequence__Lscopt_OParser__sci_Seq__Lscopt_OParser = (function(parser, parsers) {
  if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(parsers).isEmpty__Z()) {
    return parser
  } else {
    var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(parser);
    var head = this$1.Lscopt_OParser__f_head;
    var ps = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(parsers).toList__sci_List();
    var rest = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.sequence__Lscopt_OParser__sci_Seq__Lscopt_OParser($as_Lscopt_OParser($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(ps).head__O()), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_Seq($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(ps).tail__O()))).toList__sci_List()).$colon$colon$colon__sci_List__sci_List(this$1.Lscopt_OParser__f_rest);
    return new $c_Lscopt_OParser(head, rest)
  }
});
var $d_Lscopt_OParser$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_OParser$: 0
}, false, "scopt.OParser$", {
  Lscopt_OParser$: 1,
  O: 1
});
$c_Lscopt_OParser$.prototype.$classData = $d_Lscopt_OParser$;
var $n_Lscopt_OParser$;
function $m_Lscopt_OParser$() {
  if ((!$n_Lscopt_OParser$)) {
    $n_Lscopt_OParser$ = new $c_Lscopt_OParser$()
  };
  return $n_Lscopt_OParser$
}
/** @constructor */
function $c_Lscopt_OParserBuilder() {
  /*<skip>*/
}
$c_Lscopt_OParserBuilder.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_OParserBuilder.prototype.constructor = $c_Lscopt_OParserBuilder;
/** @constructor */
function $h_Lscopt_OParserBuilder() {
  /*<skip>*/
}
$h_Lscopt_OParserBuilder.prototype = $c_Lscopt_OParserBuilder.prototype;
$c_Lscopt_OParserBuilder.prototype.programName__T__Lscopt_OParser = (function(x) {
  var kind = $m_Lscopt_OptionDefKind$ProgramName$();
  var evidence$4 = $m_Lscopt_Read$().Lscopt_Read$__f_unitRead;
  var d = $ct_Lscopt_OptionDef__Lscopt_OptionDefKind__T__Lscopt_Read__(new $c_Lscopt_OptionDef(), kind, "", evidence$4);
  var rest = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_package$().s_package$__f_Nil;
  return new $c_Lscopt_OParser(d, rest).text__T__Lscopt_OParser(x)
});
$c_Lscopt_OParserBuilder.prototype.head__sci_Seq__Lscopt_OParser = (function(xs) {
  var kind = $m_Lscopt_OptionDefKind$Head$();
  var evidence$4 = $m_Lscopt_Read$().Lscopt_Read$__f_unitRead;
  var d = $ct_Lscopt_OptionDef__Lscopt_OptionDefKind__T__Lscopt_Read__(new $c_Lscopt_OptionDef(), kind, "", evidence$4);
  var rest = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_package$().s_package$__f_Nil;
  var $$x1 = new $c_Lscopt_OParser(d, rest);
  var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(xs);
  return $$x1.text__T__Lscopt_OParser($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$2, "", " ", ""))
});
$c_Lscopt_OParserBuilder.prototype.opt__T__Lscopt_Read__Lscopt_OParser = (function(name, evidence$1) {
  var kind = $m_Lscopt_OptionDefKind$Opt$();
  var d = $ct_Lscopt_OptionDef__Lscopt_OptionDefKind__T__Lscopt_Read__(new $c_Lscopt_OptionDef(), kind, name, evidence$1);
  var rest = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_package$().s_package$__f_Nil;
  return new $c_Lscopt_OParser(d, rest)
});
$c_Lscopt_OParserBuilder.prototype.opt__C__T__Lscopt_Read__Lscopt_OParser = (function(x, name, evidence$2) {
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.opt__T__Lscopt_Read__Lscopt_OParser(name, evidence$2)).abbr__T__Lscopt_OParser($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(String.fromCharCode(x)))
});
$c_Lscopt_OParserBuilder.prototype.arg__T__Lscopt_Read__Lscopt_OParser = (function(name, evidence$3) {
  var kind = $m_Lscopt_OptionDefKind$Arg$();
  var d = $ct_Lscopt_OptionDef__Lscopt_OptionDefKind__T__Lscopt_Read__(new $c_Lscopt_OptionDef(), kind, name, evidence$3);
  var rest = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_package$().s_package$__f_Nil;
  var this$2 = new $c_Lscopt_OParser(d, rest);
  return this$2.minOccurs__I__Lscopt_OParser(1)
});
$c_Lscopt_OParserBuilder.prototype.cmd__T__Lscopt_OParser = (function(name) {
  var kind = $m_Lscopt_OptionDefKind$Cmd$();
  var evidence$4 = $m_Lscopt_Read$().Lscopt_Read$__f_unitRead;
  var d = $ct_Lscopt_OptionDef__Lscopt_OptionDefKind__T__Lscopt_Read__(new $c_Lscopt_OptionDef(), kind, name, evidence$4);
  var rest = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_package$().s_package$__f_Nil;
  return new $c_Lscopt_OParser(d, rest)
});
function $p_Lscopt_ORunner$__heads$1__sci_List__sci_Seq($thiz, options$1) {
  var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(options$1);
  var f = ((_$1) => {
    var _$1$1 = $as_Lscopt_OptionDef(_$1);
    var x = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$1$1).Lscopt_OptionDef__f_kind;
    var x$2 = $m_Lscopt_OptionDefKind$Head$();
    if ((x !== null)) {
      var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x);
      return (this$2 === x$2)
    } else {
      return false
    }
  });
  var l = this$3;
  block: {
    var result;
    while (true) {
      if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).isEmpty__Z()) {
        var result = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$();
        break
      } else {
        var h = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).head__O();
        var t = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).tail__O());
        if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(h)) === false)) {
          l = t;
          continue
        };
        var start = l;
        var remaining = t;
        while (true) {
          if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).isEmpty__Z()) {
            var result = start;
            break block
          } else {
            var x$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).head__O();
            if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(x$1)) !== false)) {
              remaining = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).tail__O());
              continue
            };
            var firstMiss = remaining;
            var newHead = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(start).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
            var toProcess = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(start).tail__O());
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(toProcess).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
              $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = newElem;
              currentLast = newElem;
              toProcess = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(toProcess).tail__O())
            };
            var next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(firstMiss).tail__O());
            var nextToCopy = next;
            while ((!$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).isEmpty__Z())) {
              var head = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).head__O();
              if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(head)) !== false)) {
                next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O())
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
                  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).tail__O())
                };
                nextToCopy = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O());
                next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O())
              }
            };
            if ((!$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).isEmpty__Z())) {
              $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = nextToCopy
            };
            var result = newHead;
            break block
          }
        }
      }
    }
  };
  return result
}
function $p_Lscopt_ORunner$__arguments$1__sci_List__sci_Seq($thiz, options$2) {
  var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(options$2);
  var f = ((_$2) => {
    var _$2$1 = $as_Lscopt_OptionDef(_$2);
    var x = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$2$1).Lscopt_OptionDef__f_kind;
    var x$2 = $m_Lscopt_OptionDefKind$Arg$();
    if ((x !== null)) {
      var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x);
      return (this$2 === x$2)
    } else {
      return false
    }
  });
  var l = this$3;
  block: {
    var result;
    while (true) {
      if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).isEmpty__Z()) {
        var result = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$();
        break
      } else {
        var h = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).head__O();
        var t = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).tail__O());
        if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(h)) === false)) {
          l = t;
          continue
        };
        var start = l;
        var remaining = t;
        while (true) {
          if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).isEmpty__Z()) {
            var result = start;
            break block
          } else {
            var x$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).head__O();
            if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(x$1)) !== false)) {
              remaining = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).tail__O());
              continue
            };
            var firstMiss = remaining;
            var newHead = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(start).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
            var toProcess = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(start).tail__O());
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(toProcess).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
              $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = newElem;
              currentLast = newElem;
              toProcess = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(toProcess).tail__O())
            };
            var next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(firstMiss).tail__O());
            var nextToCopy = next;
            while ((!$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).isEmpty__Z())) {
              var head = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).head__O();
              if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(head)) !== false)) {
                next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O())
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
                  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).tail__O())
                };
                nextToCopy = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O());
                next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O())
              }
            };
            if ((!$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).isEmpty__Z())) {
              $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = nextToCopy
            };
            var result = newHead;
            break block
          }
        }
      }
    }
  };
  return result
}
function $p_Lscopt_ORunner$__commands$1__sci_List__sci_Seq($thiz, options$3) {
  var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(options$3);
  var f = ((_$3) => {
    var _$3$1 = $as_Lscopt_OptionDef(_$3);
    var x = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$3$1).Lscopt_OptionDef__f_kind;
    var x$2 = $m_Lscopt_OptionDefKind$Cmd$();
    if ((x !== null)) {
      var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x);
      return (this$2 === x$2)
    } else {
      return false
    }
  });
  var l = this$3;
  block: {
    var result;
    while (true) {
      if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).isEmpty__Z()) {
        var result = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$();
        break
      } else {
        var h = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).head__O();
        var t = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).tail__O());
        if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(h)) === false)) {
          l = t;
          continue
        };
        var start = l;
        var remaining = t;
        while (true) {
          if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).isEmpty__Z()) {
            var result = start;
            break block
          } else {
            var x$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).head__O();
            if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(x$1)) !== false)) {
              remaining = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).tail__O());
              continue
            };
            var firstMiss = remaining;
            var newHead = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(start).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
            var toProcess = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(start).tail__O());
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(toProcess).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
              $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = newElem;
              currentLast = newElem;
              toProcess = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(toProcess).tail__O())
            };
            var next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(firstMiss).tail__O());
            var nextToCopy = next;
            while ((!$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).isEmpty__Z())) {
              var head = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).head__O();
              if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(head)) !== false)) {
                next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O())
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
                  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).tail__O())
                };
                nextToCopy = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O());
                next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O())
              }
            };
            if ((!$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).isEmpty__Z())) {
              $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = nextToCopy
            };
            var result = newHead;
            break block
          }
        }
      }
    }
  };
  return result
}
function $p_Lscopt_ORunner$__programNames$1__sci_List__sci_Seq($thiz, options$4) {
  var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(options$4);
  var f = ((_$4) => {
    var _$4$1 = $as_Lscopt_OptionDef(_$4);
    var x = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$4$1).Lscopt_OptionDef__f_kind;
    var x$2 = $m_Lscopt_OptionDefKind$ProgramName$();
    if ((x !== null)) {
      var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x);
      return (this$2 === x$2)
    } else {
      return false
    }
  });
  var l = this$3;
  block: {
    var result;
    while (true) {
      if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).isEmpty__Z()) {
        var result = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$();
        break
      } else {
        var h = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).head__O();
        var t = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).tail__O());
        if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(h)) === false)) {
          l = t;
          continue
        };
        var start = l;
        var remaining = t;
        while (true) {
          if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).isEmpty__Z()) {
            var result = start;
            break block
          } else {
            var x$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).head__O();
            if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(x$1)) !== false)) {
              remaining = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).tail__O());
              continue
            };
            var firstMiss = remaining;
            var newHead = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(start).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
            var toProcess = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(start).tail__O());
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(toProcess).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
              $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = newElem;
              currentLast = newElem;
              toProcess = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(toProcess).tail__O())
            };
            var next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(firstMiss).tail__O());
            var nextToCopy = next;
            while ((!$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).isEmpty__Z())) {
              var head = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).head__O();
              if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(head)) !== false)) {
                next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O())
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
                  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).tail__O())
                };
                nextToCopy = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O());
                next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O())
              }
            };
            if ((!$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).isEmpty__Z())) {
              $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = nextToCopy
            };
            var result = newHead;
            break block
          }
        }
      }
    }
  };
  return result
}
function $p_Lscopt_ORunner$__programName$1__sci_List__T($thiz, options$29) {
  var x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($p_Lscopt_ORunner$__programNames$1__sci_List__sci_Seq($thiz, options$29)).headOption__s_Option();
  if ((x1 instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some)) {
    var x3 = $as_Lscopt_OptionDef($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_s_Some(x1)).s_Some__f_value);
    if ((x3 !== null)) {
      return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x3).Lscopt_OptionDef__f__desc
    }
  };
  return ""
}
function $p_Lscopt_ORunner$__optionsForRender$1__sci_List__sci_List($thiz, options$5) {
  var this$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(options$5);
  var f = ((o) => {
    var o$1 = $as_Lscopt_OptionDef(o);
    var x = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(o$1).Lscopt_OptionDef__f_kind;
    var x$2 = $m_Lscopt_OptionDefKind$Head$();
    if ((x !== null)) {
      var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x);
      var $$x3 = (this$2 === x$2)
    } else {
      var $$x3 = false
    };
    if ((!$$x3)) {
      var x$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(o$1).Lscopt_OptionDef__f_kind;
      var x$4 = $m_Lscopt_OptionDefKind$Check$();
      if ((x$3 !== null)) {
        var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$3);
        var $$x4 = (this$3 === x$4)
      } else {
        var $$x4 = false
      };
      var $$x2 = (!$$x4)
    } else {
      var $$x2 = false
    };
    if ($$x2) {
      var x$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(o$1).Lscopt_OptionDef__f_kind;
      var x$6 = $m_Lscopt_OptionDefKind$ProgramName$();
      if ((x$5 !== null)) {
        var this$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$5);
        var $$x5 = (this$4 === x$6)
      } else {
        var $$x5 = false
      };
      var $$x1 = (!$$x5)
    } else {
      var $$x1 = false
    };
    if ($$x1) {
      return (!$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(o$1).Lscopt_OptionDef__f__isHidden)
    } else {
      return false
    }
  });
  var l = this$5;
  block: {
    var result;
    while (true) {
      if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).isEmpty__Z()) {
        var result = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$();
        break
      } else {
        var h = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).head__O();
        var t = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).tail__O());
        if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(h)) === false)) {
          l = t;
          continue
        };
        var start = l;
        var remaining = t;
        while (true) {
          if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).isEmpty__Z()) {
            var result = start;
            break block
          } else {
            var x$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).head__O();
            if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(x$1)) !== false)) {
              remaining = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).tail__O());
              continue
            };
            var firstMiss = remaining;
            var newHead = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(start).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
            var toProcess = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(start).tail__O());
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(toProcess).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
              $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = newElem;
              currentLast = newElem;
              toProcess = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(toProcess).tail__O())
            };
            var next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(firstMiss).tail__O());
            var nextToCopy = next;
            while ((!$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).isEmpty__Z())) {
              var head = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).head__O();
              if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(head)) !== false)) {
                next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O())
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
                  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).tail__O())
                };
                nextToCopy = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O());
                next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O())
              }
            };
            if ((!$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).isEmpty__Z())) {
              $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = nextToCopy
            };
            var result = newHead;
            break block
          }
        }
      }
    }
  };
  matchResult2: {
    var \u03b41$___1;
    var \u03b41$___2;
    var this$6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(result);
    if (this$6.isEmpty__Z()) {
      var x5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_List$().sci_List$__f_scala$collection$immutable$List$$TupleOfNil
    } else {
      $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_List$();
      var l$1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_scm_ListBuffer();
      $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_List$();
      var r = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_scm_ListBuffer();
      var this$9 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this$6.iterator__sc_Iterator());
      while (this$9.hasNext__Z()) {
        var arg1 = this$9.next__O();
        var _$5 = $as_Lscopt_OptionDef(arg1);
        var this$10 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$5).hasParent__Z() ? l$1 : r));
        this$10.addOne__O__scm_ListBuffer(arg1)
      };
      var x1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2(l$1.toList__sci_List(), r.toList__sci_List());
      matchEnd7$1: {
        var x5;
        var p2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List(x1.T2__f__1);
        var x$7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$();
        if (x$7.equals__O__Z(p2)) {
          var x5 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$(), this$6);
          break matchEnd7$1
        };
        var p4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List(x1.T2__f__2);
        var x$3$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$();
        if (x$3$1.equals__O__Z(p4)) {
          var x5 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2(this$6, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
          break matchEnd7$1
        };
        var x5 = x1
      }
    };
    if ((x5 !== null)) {
      var p = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x5)._1__O());
      var np = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x5)._2__O());
      var elems = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscopt_OptionDef.getArrayOf().constr)([]));
      var this$12 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer(elems));
      var _1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this$12, p);
      var elems$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($d_Lscopt_OptionDef.getArrayOf().constr)([]));
      var this$14 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_scm_ListBuffer().scala$collection$mutable$ListBuffer$$freshFrom__sc_IterableOnce__scm_ListBuffer(elems$1));
      var _2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_StrictOptimizedSeqOps__appendedAll__sc_IterableOnce__O(this$14, np);
      var \u03b41$___1 = _1;
      var \u03b41$___2 = _2;
      break matchResult2
    };
    throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(x5)
  };
  var remaining$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_scm_ListBuffer(\u03b41$___1);
  var sorted = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_scm_ListBuffer(\u03b41$___2);
  var elem = false;
  elem = true;
  while (((!$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining$1).isEmpty__Z()) && elem)) {
    var ev$4 = false;
    elem = ev$4;
    var this$17 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(sorted).toList__sci_List());
    var these = this$17;
    while ((!$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(these).isEmpty__Z())) {
      var arg1$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(these).head__O();
      var parent = $as_Lscopt_OptionDef(arg1$1);
      var this$18 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining$1);
      var b = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_scm_GrowableBuilder__scm_Growable__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_scm_GrowableBuilder(), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_scm_ListBuffer());
      var it = this$18.iterator__sc_Iterator();
      while ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(it).hasNext__Z()) {
        var elem$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(it).next__O();
        var _$6 = $as_Lscopt_OptionDef(elem$1);
        var x$8 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$6).Lscopt_OptionDef__f__parentId;
        var value = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(parent).Lscopt_OptionDef__f_id;
        var x$2$1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some(value);
        if ((((x$8 !== null) && $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$8).equals__O__Z(x$2$1)) !== false)) {
          b.addOne__O__scm_GrowableBuilder(elem$1)
        }
      };
      var childrenOfThisParent = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_scm_ListBuffer(b.scm_GrowableBuilder__f_elems);
      var this$21 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(childrenOfThisParent);
      if ((!this$21.isEmpty__Z())) {
        var this$22 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining$1);
        $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_scm_Shrinkable__subtractAll__sc_IterableOnce__scm_Shrinkable(this$22, childrenOfThisParent);
        var $$x6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(sorted);
        var this$23 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(sorted);
        $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x6).insertAll__I__sc_IterableOnce__V(((1 + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_SeqOps__indexOf__O__I__I(this$23, parent, 0)) | 0), childrenOfThisParent);
        var ev$5 = true;
        elem = ev$5
      };
      these = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(these).tail__O())
    }
  };
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(sorted).toList__sci_List()
}
function $p_Lscopt_ORunner$__indentDescription$1__T__T($thiz, desc) {
  var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_Predef$();
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(desc);
  var regex = $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NL;
  var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x1).wrapRefArray__AO__scm_ArraySeq$ofRef($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_T__split__T__I__AT(this$1, regex, 0)));
  var sep = $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NLTB;
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$2, "", sep, "")
}
function $p_Lscopt_ORunner$__itemUsage$1__sci_List__Lscopt_OptionDef__T($thiz, options$30, value) {
  var x8 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f_kind;
  var x = $m_Lscopt_OptionDefKind$ProgramName$();
  if ((x === x8)) {
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__desc
  };
  matchAlts3: {
    matchAlts4: {
      var x$3 = $m_Lscopt_OptionDefKind$Head$();
      if ((x$3 === x8)) {
        break matchAlts4
      };
      var x$5 = $m_Lscopt_OptionDefKind$Note$();
      if ((x$5 === x8)) {
        break matchAlts4
      };
      var x$7 = $m_Lscopt_OptionDefKind$Check$();
      if ((x$7 === x8)) {
        break matchAlts4
      };
      break matchAlts3
    };
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__desc
  };
  var x$9 = $m_Lscopt_OptionDefKind$Cmd$();
  if ((x$9 === x8)) {
    return ((("Command: " + $p_Lscopt_ORunner$__commandExample$1__sci_List__s_Option__T($thiz, options$30, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some(value))) + $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NL) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__desc)
  };
  var x$11 = $m_Lscopt_OptionDefKind$Arg$();
  if ((x$11 === x8)) {
    return (((("" + $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_WW) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f_name) + $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NLTB) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__desc)
  };
  var x$13 = $m_Lscopt_OptionDefKind$Opt$();
  if ((x$13 === x8)) {
    if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).read__Lscopt_Read()).arity__I() === 2)) {
      var $$x2 = $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_WW;
      var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__shortOpt);
      if (this$2.isEmpty__Z()) {
        var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$()
      } else {
        var arg1 = this$2.get__O();
        var o = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg1);
        var $$x1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some((((("-" + o) + ":") + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).keyValueString__T()) + " | "))
      };
      var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x1);
      return ((((((("" + $$x2) + (this$3.isEmpty__Z() ? "" : this$3.get__O())) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).fullName__T()) + ":") + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).keyValueString__T()) + $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NLTB) + $p_Lscopt_ORunner$__indentDescription$1__T__T($thiz, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__desc))
    };
    if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).read__Lscopt_Read()).arity__I() === 1)) {
      var $$x4 = $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_WW;
      var this$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__shortOpt);
      if (this$4.isEmpty__Z()) {
        var $$x3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$()
      } else {
        var arg1$1 = this$4.get__O();
        var o$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg1$1);
        var $$x3 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some((((("-" + o$1) + " ") + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).valueString__T()) + " | "))
      };
      var this$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x3);
      return ((((((("" + $$x4) + (this$5.isEmpty__Z() ? "" : this$5.get__O())) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).fullName__T()) + " ") + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).valueString__T()) + $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NLTB) + $p_Lscopt_ORunner$__indentDescription$1__T__T($thiz, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__desc))
    }
  };
  matchAlts1: {
    matchAlts2: {
      var x$15 = $m_Lscopt_OptionDefKind$Opt$();
      if ((x$15 === x8)) {
        break matchAlts2
      };
      var x$17 = $m_Lscopt_OptionDefKind$OptHelp$();
      if ((x$17 === x8)) {
        break matchAlts2
      };
      var x$19 = $m_Lscopt_OptionDefKind$OptVersion$();
      if ((x$19 === x8)) {
        break matchAlts2
      };
      break matchAlts1
    };
    var $$x6 = $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_WW;
    var this$6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__shortOpt);
    if (this$6.isEmpty__Z()) {
      var $$x5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$()
    } else {
      var arg1$2 = this$6.get__O();
      var o$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg1$2);
      var $$x5 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some((("-" + o$2) + " | "))
    };
    var this$7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x5);
    return ((((("" + $$x6) + (this$7.isEmpty__Z() ? "" : this$7.get__O())) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).fullName__T()) + $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NLTB) + $p_Lscopt_ORunner$__indentDescription$1__T__T($thiz, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__desc))
  };
  throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(x8)
}
function $p_Lscopt_ORunner$__header$lzyINIT1$1__sci_List__sr_LazyRef__T($thiz, options$6, header$lzy1$1) {
  if ((header$lzy1$1 === null)) {
    throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_NullPointerException__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_NullPointerException())
  };
  if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(header$lzy1$1).sr_LazyRef__f__initialized) {
    var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(header$lzy1$1).sr_LazyRef__f__value
  } else {
    var $$x2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(header$lzy1$1);
    var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sc_IterableOnceOps($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($p_Lscopt_ORunner$__heads$1__sci_List__sci_Seq($thiz, options$6)).map__F1__O(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((value) => {
      var value$1 = $as_Lscopt_OptionDef(value);
      return $p_Lscopt_ORunner$__itemUsage$1__sci_List__Lscopt_OptionDef__T($thiz, options$6, value$1)
    })))));
    var sep = $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NL;
    var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x2).initialize__O__O($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$2, "", sep, ""))
  };
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T($$x1)
}
function $p_Lscopt_ORunner$__header$1__sci_List__sr_LazyRef__T($thiz, options$7, header$lzy1$2) {
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(header$lzy1$2).sr_LazyRef__f__initialized ? $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(header$lzy1$2).sr_LazyRef__f__value : $p_Lscopt_ORunner$__header$lzyINIT1$1__sci_List__sr_LazyRef__T($thiz, options$7, header$lzy1$2)))
}
function $p_Lscopt_ORunner$__usageColumn1$1__sci_List__Lscopt_OptionDef__T($thiz, options$32, value) {
  var x9 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f_kind;
  var x = $m_Lscopt_OptionDefKind$ProgramName$();
  if ((x === x9)) {
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__desc
  };
  matchAlts7: {
    matchAlts8: {
      var x$3 = $m_Lscopt_OptionDefKind$Head$();
      if ((x$3 === x9)) {
        break matchAlts8
      };
      var x$5 = $m_Lscopt_OptionDefKind$Note$();
      if ((x$5 === x9)) {
        break matchAlts8
      };
      var x$7 = $m_Lscopt_OptionDefKind$Check$();
      if ((x$7 === x9)) {
        break matchAlts8
      };
      break matchAlts7
    };
    return ""
  };
  var x$9 = $m_Lscopt_OptionDefKind$Cmd$();
  if ((x$9 === x9)) {
    return (("Command: " + $p_Lscopt_ORunner$__commandExample$1__sci_List__s_Option__T($thiz, options$32, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some(value))) + $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NL)
  };
  var x$11 = $m_Lscopt_OptionDefKind$Arg$();
  if ((x$11 === x9)) {
    return (("" + $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_WW) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f_name)
  };
  var x$13 = $m_Lscopt_OptionDefKind$Opt$();
  if ((x$13 === x9)) {
    if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).read__Lscopt_Read()).arity__I() === 2)) {
      var $$x2 = $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_WW;
      var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__shortOpt);
      if (this$2.isEmpty__Z()) {
        var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$()
      } else {
        var arg1 = this$2.get__O();
        var o = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg1);
        var $$x1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some((("-" + o) + ", "))
      };
      var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x1);
      return ((((("" + $$x2) + (this$3.isEmpty__Z() ? "" : this$3.get__O())) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).fullName__T()) + ":") + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).keyValueString__T())
    };
    if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).read__Lscopt_Read()).arity__I() === 1)) {
      var $$x4 = $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_WW;
      var this$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__shortOpt);
      if (this$4.isEmpty__Z()) {
        var $$x3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$()
      } else {
        var arg1$1 = this$4.get__O();
        var o$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg1$1);
        var $$x3 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some((("-" + o$1) + ", "))
      };
      var this$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x3);
      return ((((("" + $$x4) + (this$5.isEmpty__Z() ? "" : this$5.get__O())) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).fullName__T()) + " ") + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).valueString__T())
    }
  };
  matchAlts5: {
    matchAlts6: {
      var x$15 = $m_Lscopt_OptionDefKind$Opt$();
      if ((x$15 === x9)) {
        break matchAlts6
      };
      var x$17 = $m_Lscopt_OptionDefKind$OptHelp$();
      if ((x$17 === x9)) {
        break matchAlts6
      };
      var x$19 = $m_Lscopt_OptionDefKind$OptVersion$();
      if ((x$19 === x9)) {
        break matchAlts6
      };
      break matchAlts5
    };
    var $$x6 = $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_WW;
    var this$6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__shortOpt);
    if (this$6.isEmpty__Z()) {
      var $$x5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$()
    } else {
      var arg1$2 = this$6.get__O();
      var o$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg1$2);
      var $$x5 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some((("-" + o$2) + ", "))
    };
    var this$7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x5);
    return ((("" + $$x6) + (this$7.isEmpty__Z() ? "" : this$7.get__O())) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).fullName__T())
  };
  throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(x9)
}
function $p_Lscopt_ORunner$__spaceToDesc$1__I__T__T__T($thiz, col1Length$1, str, description) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(description);
  if ((this$1 === "")) {
    return str
  } else {
    var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(str);
    var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_WW);
    if ((((this$2.length + this$3.length) | 0) <= col1Length$1)) {
      var $$x3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_StringOps$();
      var this$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(str);
      var $$x2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x3).$times$extension__T__I__T(" ", ((col1Length$1 - this$5.length) | 0));
      var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_Predef$();
      var this$6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(description);
      var regex = $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NL;
      var this$8 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x1).wrapRefArray__AO__scm_ArraySeq$ofRef($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_T__split__T__I__AT(this$6, regex, 0)));
      var sep = (("" + $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NL) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_StringOps$().$times$extension__T__I__T(" ", col1Length$1));
      return ((("" + str) + $$x2) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$8, "", sep, ""))
    } else {
      var $$x14 = $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NL;
      var $$x13 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_Predef$();
      var this$9 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(description);
      var regex$1 = $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NL;
      var xs = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_T__split__T__I__AT(this$9, regex$1, 0);
      $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_ArrayOps$();
      var f = ((s) => {
        var s$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(s);
        return (("" + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_StringOps$().$times$extension__T__I__T(" ", col1Length$1)) + s$1)
      });
      var len = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(xs).u.length;
      var ys = new ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$d_T.getArrayOf().constr)(len);
      if ((len > 0)) {
        var i = 0;
        if ((xs !== null)) {
          while ((i < len)) {
            var $$x4 = i;
            var arg1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(xs).get(i);
            ys.set($$x4, f(arg1));
            i = ((1 + i) | 0)
          }
        } else if ((xs instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ac_I)) {
          var x3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$asArrayOf_I(xs, 1);
          while ((i < len)) {
            var $$x5 = i;
            var arg1$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x3).get(i);
            ys.set($$x5, f(arg1$1));
            i = ((1 + i) | 0)
          }
        } else if ((xs instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ac_D)) {
          var x4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$asArrayOf_D(xs, 1);
          while ((i < len)) {
            var $$x6 = i;
            var arg1$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x4).get(i);
            ys.set($$x6, f(arg1$2));
            i = ((1 + i) | 0)
          }
        } else if ((xs instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ac_J)) {
          var x5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$asArrayOf_J(xs, 1);
          while ((i < len)) {
            var $$x7 = i;
            var t = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x5).get(i);
            var lo = t.RTLong__f_lo;
            var hi = t.RTLong__f_hi;
            ys.set($$x7, f(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)));
            i = ((1 + i) | 0)
          }
        } else if ((xs instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ac_F)) {
          var x6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$asArrayOf_F(xs, 1);
          while ((i < len)) {
            var $$x8 = i;
            var arg1$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x6).get(i);
            ys.set($$x8, f(arg1$3));
            i = ((1 + i) | 0)
          }
        } else if ((xs instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ac_C)) {
          var x7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$asArrayOf_C(xs, 1);
          while ((i < len)) {
            var $$x9 = i;
            var arg1$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x7).get(i);
            ys.set($$x9, f($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$bC(arg1$4)));
            i = ((1 + i) | 0)
          }
        } else if ((xs instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ac_B)) {
          var x8 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$asArrayOf_B(xs, 1);
          while ((i < len)) {
            var $$x10 = i;
            var arg1$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x8).get(i);
            ys.set($$x10, f(arg1$5));
            i = ((1 + i) | 0)
          }
        } else if ((xs instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ac_S)) {
          var x9 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$asArrayOf_S(xs, 1);
          while ((i < len)) {
            var $$x11 = i;
            var arg1$6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x9).get(i);
            ys.set($$x11, f(arg1$6));
            i = ((1 + i) | 0)
          }
        } else if ((xs instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ac_Z)) {
          var x10 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$asArrayOf_Z(xs, 1);
          while ((i < len)) {
            var $$x12 = i;
            var arg1$7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x10).get(i);
            ys.set($$x12, f(arg1$7));
            i = ((1 + i) | 0)
          }
        } else {
          throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(xs)
        }
      };
      var this$15 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x13).wrapRefArray__AO__scm_ArraySeq$ofRef(ys));
      var sep$1 = $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NL;
      return ((("" + str) + $$x14) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$15, "", sep$1, ""))
    }
  }
}
function $p_Lscopt_ORunner$__usageTwoColumn$1__sci_List__Lscopt_OptionDef__I__T($thiz, options$33, value, col1Length) {
  var x10 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f_kind;
  var x = $m_Lscopt_OptionDefKind$ProgramName$();
  if ((x === x10)) {
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__desc
  };
  matchAlts11: {
    matchAlts12: {
      var x$3 = $m_Lscopt_OptionDefKind$Head$();
      if ((x$3 === x10)) {
        break matchAlts12
      };
      var x$5 = $m_Lscopt_OptionDefKind$Note$();
      if ((x$5 === x10)) {
        break matchAlts12
      };
      var x$7 = $m_Lscopt_OptionDefKind$Check$();
      if ((x$7 === x10)) {
        break matchAlts12
      };
      break matchAlts11
    };
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__desc
  };
  var x$9 = $m_Lscopt_OptionDefKind$Cmd$();
  if ((x$9 === x10)) {
    return (("" + $p_Lscopt_ORunner$__usageColumn1$1__sci_List__Lscopt_OptionDef__T($thiz, options$33, value)) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__desc)
  };
  var x$11 = $m_Lscopt_OptionDefKind$Arg$();
  if ((x$11 === x10)) {
    return $p_Lscopt_ORunner$__spaceToDesc$1__I__T__T__T($thiz, col1Length, $p_Lscopt_ORunner$__usageColumn1$1__sci_List__Lscopt_OptionDef__T($thiz, options$33, value), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__desc)
  };
  var x$13 = $m_Lscopt_OptionDefKind$Opt$();
  if ((x$13 === x10)) {
    if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).read__Lscopt_Read()).arity__I() === 2)) {
      return $p_Lscopt_ORunner$__spaceToDesc$1__I__T__T__T($thiz, col1Length, $p_Lscopt_ORunner$__usageColumn1$1__sci_List__Lscopt_OptionDef__T($thiz, options$33, value), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__desc)
    };
    if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).read__Lscopt_Read()).arity__I() === 1)) {
      return $p_Lscopt_ORunner$__spaceToDesc$1__I__T__T__T($thiz, col1Length, $p_Lscopt_ORunner$__usageColumn1$1__sci_List__Lscopt_OptionDef__T($thiz, options$33, value), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__desc)
    }
  };
  matchAlts9: {
    matchAlts10: {
      var x$15 = $m_Lscopt_OptionDefKind$Opt$();
      if ((x$15 === x10)) {
        break matchAlts10
      };
      var x$17 = $m_Lscopt_OptionDefKind$OptHelp$();
      if ((x$17 === x10)) {
        break matchAlts10
      };
      var x$19 = $m_Lscopt_OptionDefKind$OptVersion$();
      if ((x$19 === x10)) {
        break matchAlts10
      };
      break matchAlts9
    };
    return $p_Lscopt_ORunner$__spaceToDesc$1__I__T__T__T($thiz, col1Length, $p_Lscopt_ORunner$__usageColumn1$1__sci_List__Lscopt_OptionDef__T($thiz, options$33, value), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(value).Lscopt_OptionDef__f__desc)
  };
  throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(x10)
}
function $p_Lscopt_ORunner$__renderOneColumnUsage$1__sci_List__sr_LazyRef__T($thiz, options$34, header$lzy1$3) {
  var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($p_Lscopt_ORunner$__optionsForRender$1__sci_List__sci_List($thiz, options$34));
  var f = ((value) => {
    var value$1 = $as_Lscopt_OptionDef(value);
    return $p_Lscopt_ORunner$__itemUsage$1__sci_List__Lscopt_OptionDef__T($thiz, options$34, value$1)
  });
  if ((this$2 === $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$())) {
    var descriptions = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$()
  } else {
    var arg1 = this$2.head__O();
    var h = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon(f(arg1), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
    var t = h;
    var rest = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List(this$2.tail__O());
    while ((rest !== $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$())) {
      var arg1$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(rest).head__O();
      var nx = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon(f(arg1$1), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
      $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(t).sci_$colon$colon__f_next = nx;
      t = nx;
      rest = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(rest).tail__O())
    };
    var descriptions = h
  };
  var $$x2 = (($p_Lscopt_ORunner$__header$1__sci_List__sr_LazyRef__T($thiz, options$34, header$lzy1$3) === "") ? "" : (("" + $p_Lscopt_ORunner$__header$1__sci_List__sr_LazyRef__T($thiz, options$34, header$lzy1$3)) + $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NL));
  matchResult6: {
    var $$x1;
    var x11 = $p_Lscopt_ORunner$__commandExample$1__sci_List__s_Option__T($thiz, options$34, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$());
    if ((x11 === "")) {
      var $$x1 = "";
      break matchResult6
    };
    var $$x1 = (("Usage: " + x11) + $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NLNL)
  };
  var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(descriptions);
  var sep = $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NL;
  return (($$x2 + $$x1) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$3, "", sep, ""))
}
function $p_Lscopt_ORunner$__renderTwoColumnsUsage$1__sci_List__sr_LazyRef__T($thiz, options$36, header$lzy1$4) {
  var xs = $p_Lscopt_ORunner$__optionsForRender$1__sci_List__sci_List($thiz, options$36);
  var x$3 = $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_column1MaxLength;
  matchResult7: {
    var y;
    var this$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(xs);
    var f = ((x) => {
      var x$1 = $as_Lscopt_OptionDef(x);
      var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($p_Lscopt_ORunner$__usageColumn1$1__sci_List__Lscopt_OptionDef__T($thiz, options$36, x$1));
      var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_WW);
      return ((this$2.length + this$3.length) | 0)
    });
    if ((this$4 === $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$())) {
      var x12 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$()
    } else {
      var arg1 = this$4.head__O();
      var h = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon(f(arg1), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
      var t = h;
      var rest = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List(this$4.tail__O());
      while ((rest !== $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$())) {
        var arg1$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(rest).head__O();
        var nx = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon(f(arg1$1), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
        $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(t).sci_$colon$colon__f_next = nx;
        t = nx;
        rest = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(rest).tail__O())
      };
      var x12 = h
    };
    var x$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_package$().s_package$__f_Nil;
    if (((x$2 === null) ? (x12 === null) : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$2).equals__O__Z(x12))) {
      var y = 0;
      break matchResult7
    };
    var this$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x12);
    var ord = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_math_Ordering$Int$();
    var y = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uI($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_IterableOnceOps__max__s_math_Ordering__O(this$5, ord))
  };
  var col1Len = ((x$3 < y) ? x$3 : y);
  var this$8 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(xs);
  var f$1 = ((x$4) => {
    var x$5 = $as_Lscopt_OptionDef(x$4);
    return $p_Lscopt_ORunner$__usageTwoColumn$1__sci_List__Lscopt_OptionDef__I__T($thiz, options$36, x$5, col1Len)
  });
  if ((this$8 === $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$())) {
    var descriptions = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$()
  } else {
    var arg1$2 = this$8.head__O();
    var h$1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon(f$1(arg1$2), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
    var t$1 = h$1;
    var rest$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List(this$8.tail__O());
    while ((rest$1 !== $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$())) {
      var arg1$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(rest$1).head__O();
      var nx$1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon(f$1(arg1$3), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
      $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(t$1).sci_$colon$colon__f_next = nx$1;
      t$1 = nx$1;
      rest$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(rest$1).tail__O())
    };
    var descriptions = h$1
  };
  var $$x2 = (($p_Lscopt_ORunner$__header$1__sci_List__sr_LazyRef__T($thiz, options$36, header$lzy1$4) === "") ? "" : (("" + $p_Lscopt_ORunner$__header$1__sci_List__sr_LazyRef__T($thiz, options$36, header$lzy1$4)) + $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NL));
  matchResult8: {
    var $$x1;
    var x13 = $p_Lscopt_ORunner$__commandExample$1__sci_List__s_Option__T($thiz, options$36, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$());
    if ((x13 === "")) {
      var $$x1 = "";
      break matchResult8
    };
    var $$x1 = (("Usage: " + x13) + $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NLNL)
  };
  var this$9 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(descriptions);
  var sep = $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_NL;
  return (($$x2 + $$x1) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$9, "", sep, ""))
}
function $p_Lscopt_ORunner$__commandName$1__sci_List__Lscopt_OptionDef__T($thiz, options$38, cmd) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cmd).Lscopt_OptionDef__f__parentId);
  if (this$1.isEmpty__Z()) {
    var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$()
  } else {
    var arg1 = this$1.get__O();
    var x = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uI(arg1);
    var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($p_Lscopt_ORunner$__commands$1__sci_List__sci_Seq($thiz, options$38)).find__F1__s_Option(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$7) => {
      var _$7$1 = $as_Lscopt_OptionDef(_$7);
      return ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$7$1).Lscopt_OptionDef__f_id === x)
    }))));
    if (this$3.isEmpty__Z()) {
      var $$x2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$()
    } else {
      var arg1$1 = this$3.get__O();
      var cmd$1 = $as_Lscopt_OptionDef(arg1$1);
      var $$x2 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some($p_Lscopt_ORunner$__commandName$1__sci_List__Lscopt_OptionDef__T($thiz, options$38, cmd$1))
    };
    var this$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x2);
    var $$x1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some(($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T((this$4.isEmpty__Z() ? "" : this$4.get__O())) + " "))
  };
  var this$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x1);
  return (("" + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T((this$5.isEmpty__Z() ? "" : this$5.get__O()))) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cmd).Lscopt_OptionDef__f_name)
}
function $p_Lscopt_ORunner$__commandExample$1__sci_List__s_Option__T($thiz, options$9, cmd) {
  var text = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_scm_ListBuffer();
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cmd);
  if (this$1.isEmpty__Z()) {
    var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$()
  } else {
    var arg1 = this$1.get__O();
    var cmd$1 = $as_Lscopt_OptionDef(arg1);
    var $$x1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some($p_Lscopt_ORunner$__commandName$1__sci_List__Lscopt_OptionDef__T($thiz, options$9, cmd$1))
  };
  var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x1);
  var elem = (this$2.isEmpty__Z() ? $p_Lscopt_ORunner$__programName$1__sci_List__T($thiz, options$9) : this$2.get__O());
  text.addOne__O__scm_ListBuffer(elem);
  var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cmd);
  if (this$3.isEmpty__Z()) {
    var parentId = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$()
  } else {
    var arg1$1 = this$3.get__O();
    var _$8 = $as_Lscopt_OptionDef(arg1$1);
    var parentId = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$8).Lscopt_OptionDef__f_id)
  };
  var cs = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_Seq($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($p_Lscopt_ORunner$__commands$1__sci_List__sci_Seq($thiz, options$9)).filter__F1__O(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((c) => {
    var c$1 = $as_Lscopt_OptionDef(c);
    var x = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(c$1).Lscopt_OptionDef__f__parentId;
    if (((x === null) ? (parentId === null) : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x).equals__O__Z(parentId))) {
      return (!$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(c$1).Lscopt_OptionDef__f__isHidden)
    } else {
      return false
    }
  }))));
  var this$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cs);
  if ((!this$5.isEmpty__Z())) {
    var this$6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sc_IterableOnceOps($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cs).map__F1__O(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$9) => {
      var _$9$1 = $as_Lscopt_OptionDef(_$9);
      return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$9$1).Lscopt_OptionDef__f_name
    })))));
    var elem$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_IterableOnceOps__mkString__T__T__T__T(this$6, "[", "|", "]");
    text.addOne__O__scm_ListBuffer(elem$1)
  };
  var this$7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(options$9);
  var f = ((x$1) => {
    var x$1$1 = $as_Lscopt_OptionDef(x$1);
    var x$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1$1).Lscopt_OptionDef__f_kind;
    var x$3 = $m_Lscopt_OptionDefKind$Opt$();
    if ((x$2 !== null)) {
      var this$8 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$2);
      var $$x4 = (this$8 === x$3)
    } else {
      var $$x4 = false
    };
    if ($$x4) {
      var $$x3 = true
    } else {
      var x$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1$1).Lscopt_OptionDef__f_kind;
      var x$5 = $m_Lscopt_OptionDefKind$OptVersion$();
      if ((x$4 !== null)) {
        var this$9 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$4);
        var $$x3 = (this$9 === x$5)
      } else {
        var $$x3 = false
      }
    };
    if ($$x3) {
      var $$x2 = true
    } else {
      var x$6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1$1).Lscopt_OptionDef__f_kind;
      var x$7 = $m_Lscopt_OptionDefKind$OptHelp$();
      if ((x$6 !== null)) {
        var this$10 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$6);
        var $$x2 = (this$10 === x$7)
      } else {
        var $$x2 = false
      }
    };
    if ($$x2) {
      var x$8 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1$1).Lscopt_OptionDef__f__parentId;
      return ((x$8 === null) ? (parentId === null) : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$8).equals__O__Z(parentId))
    } else {
      return false
    }
  });
  var l = this$7;
  block: {
    var result;
    while (true) {
      if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).isEmpty__Z()) {
        var result = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$();
        break
      } else {
        var h = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).head__O();
        var t = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(l).tail__O());
        if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(h)) === false)) {
          l = t;
          continue
        };
        var start = l;
        var remaining = t;
        while (true) {
          if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).isEmpty__Z()) {
            var result = start;
            break block
          } else {
            var x$9 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).head__O();
            if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(x$9)) !== false)) {
              remaining = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(remaining).tail__O());
              continue
            };
            var firstMiss = remaining;
            var newHead = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(start).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
            var toProcess = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(start).tail__O());
            var currentLast = newHead;
            while ((toProcess !== firstMiss)) {
              var newElem = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(toProcess).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
              $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = newElem;
              currentLast = newElem;
              toProcess = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(toProcess).tail__O())
            };
            var next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(firstMiss).tail__O());
            var nextToCopy = next;
            while ((!$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).isEmpty__Z())) {
              var head = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).head__O();
              if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uZ(f(head)) !== false)) {
                next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O())
              } else {
                while ((nextToCopy !== next)) {
                  var newElem$2 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).head__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
                  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = newElem$2;
                  currentLast = newElem$2;
                  nextToCopy = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).tail__O())
                };
                nextToCopy = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O());
                next = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(next).tail__O())
              }
            };
            if ((!$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(nextToCopy).isEmpty__Z())) {
              $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(currentLast).sci_$colon$colon__f_next = nextToCopy
            };
            var result = newHead;
            break block
          }
        }
      }
    }
  };
  var as = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_Seq($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($p_Lscopt_ORunner$__arguments$1__sci_List__sci_Seq($thiz, options$9)).filter__F1__O(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$10) => {
    var _$10$1 = $as_Lscopt_OptionDef(_$10);
    var x$10 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$10$1).Lscopt_OptionDef__f__parentId;
    return ((x$10 === null) ? (parentId === null) : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$10).equals__O__Z(parentId))
  }))));
  var this$11 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(result);
  if ((!this$11.isEmpty__Z())) {
    text.addOne__O__scm_ListBuffer("[options]")
  };
  if ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cs).exists__F1__Z(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((x$1$2) => {
    var x$1$3 = $as_Lscopt_OptionDef(x$1$2);
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($p_Lscopt_ORunner$__arguments$1__sci_List__sci_Seq($thiz, options$9)).exists__F1__Z(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$11) => {
      var _$11$1 = $as_Lscopt_OptionDef(_$11);
      var x$11 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$11$1).Lscopt_OptionDef__f__parentId;
      var value = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1$3).Lscopt_OptionDef__f_id;
      var x$3$1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some(value);
      return ((x$11 !== null) && $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$11).equals__O__Z(x$3$1))
    })))
  })))) {
    text.addOne__O__scm_ListBuffer("<args>...")
  } else {
    var this$13 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(as);
    if ((!this$13.isEmpty__Z())) {
      var xs = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sc_IterableOnce($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(as).map__F1__O(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$12) => {
        var _$12$1 = $as_Lscopt_OptionDef(_$12);
        return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$12$1).argName__T()
      }))));
      text.addAll__sc_IterableOnce__scm_ListBuffer(xs)
    }
  };
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_IterableOnceOps__mkString__T__T__T__T(text, "", " ", "")
}
/** @constructor */
function $c_Lscopt_ORunner$() {
  /*<skip>*/
}
$c_Lscopt_ORunner$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_ORunner$.prototype.constructor = $c_Lscopt_ORunner$;
/** @constructor */
function $h_Lscopt_ORunner$() {
  /*<skip>*/
}
$h_Lscopt_ORunner$.prototype = $c_Lscopt_ORunner$.prototype;
$c_Lscopt_ORunner$.prototype.renderUsage__Lscopt_RenderingMode__sci_List__T2 = (function(mode, options) {
  var header$lzy1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sr_LazyRef();
  matchResult11: {
    var usg;
    var x = $m_Lscopt_RenderingMode$OneColumn$();
    if ((x === mode)) {
      var usg = $p_Lscopt_ORunner$__renderOneColumnUsage$1__sci_List__sr_LazyRef__T(this, options, header$lzy1);
      break matchResult11
    };
    var x$3 = $m_Lscopt_RenderingMode$TwoColumns$();
    if ((x$3 === mode)) {
      var usg = $p_Lscopt_ORunner$__renderTwoColumnsUsage$1__sci_List__sr_LazyRef__T(this, options, header$lzy1);
      break matchResult11
    };
    throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(mode)
  };
  var _1 = $p_Lscopt_ORunner$__header$1__sci_List__sr_LazyRef__T(this, options, header$lzy1);
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2(_1, usg)
});
var $d_Lscopt_ORunner$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_ORunner$: 0
}, false, "scopt.ORunner$", {
  Lscopt_ORunner$: 1,
  O: 1
});
$c_Lscopt_ORunner$.prototype.$classData = $d_Lscopt_ORunner$;
var $n_Lscopt_ORunner$;
function $m_Lscopt_ORunner$() {
  if ((!$n_Lscopt_ORunner$)) {
    $n_Lscopt_ORunner$ = new $c_Lscopt_ORunner$()
  };
  return $n_Lscopt_ORunner$
}
function $ct_Lscopt_OptionDef__I__Lscopt_OptionDefKind__T__s_Option__s_Option__s_Option__T__F2__sc_Seq__sc_Seq__s_Option__I__I__Z__s_Option__Lscopt_OptionDefCallback__Lscopt_Read__($thiz, _id, _kind, _name, _shortOpt, _keyName, _valueName, _desc, _action, _validations, _configValidations, _parentId, _minOccurs, _maxOccurs, _isHidden, _fallback, _defCallback, evidence$1) {
  $thiz.Lscopt_OptionDef__f__id = _id;
  $thiz.Lscopt_OptionDef__f__kind = _kind;
  $thiz.Lscopt_OptionDef__f__name = _name;
  $thiz.Lscopt_OptionDef__f__shortOpt = _shortOpt;
  $thiz.Lscopt_OptionDef__f__keyName = _keyName;
  $thiz.Lscopt_OptionDef__f__valueName = _valueName;
  $thiz.Lscopt_OptionDef__f__desc = _desc;
  $thiz.Lscopt_OptionDef__f__action = _action;
  $thiz.Lscopt_OptionDef__f__validations = _validations;
  $thiz.Lscopt_OptionDef__f__configValidations = _configValidations;
  $thiz.Lscopt_OptionDef__f__parentId = _parentId;
  $thiz.Lscopt_OptionDef__f__minOccurs = _minOccurs;
  $thiz.Lscopt_OptionDef__f__maxOccurs = _maxOccurs;
  $thiz.Lscopt_OptionDef__f__isHidden = _isHidden;
  $thiz.Lscopt_OptionDef__f__fallback = _fallback;
  $thiz.Lscopt_OptionDef__f__defCallback = _defCallback;
  $thiz.Lscopt_OptionDef__f_evidence$1 = evidence$1;
  $thiz.Lscopt_OptionDef__f_kind = _kind;
  $thiz.Lscopt_OptionDef__f_id = _id;
  $thiz.Lscopt_OptionDef__f_name = _name;
  return $thiz
}
function $ct_Lscopt_OptionDef__Lscopt_OptionDefKind__T__Lscopt_OptionDefCallback__Lscopt_Read__($thiz, kind, name, defCallback, evidence$1) {
  var this$1 = $m_Lscopt_OptionDef$();
  var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this$1.Lscopt_OptionDef$__f_atomic);
  var newValue = ((1 + this$2.ju_concurrent_atomic_AtomicInteger__f_java$util$concurrent$atomic$AtomicInteger$$value) | 0);
  this$2.ju_concurrent_atomic_AtomicInteger__f_java$util$concurrent$atomic$AtomicInteger$$value = newValue;
  $ct_Lscopt_OptionDef__I__Lscopt_OptionDefKind__T__s_Option__s_Option__s_Option__T__F2__sc_Seq__sc_Seq__s_Option__I__I__Z__s_Option__Lscopt_OptionDefCallback__Lscopt_Read__($thiz, newValue, kind, name, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$(), "", $ps_Lscopt_OptionDef__OptionDef$superArg$1__Lscopt_OptionDefKind__T__Lscopt_OptionDefCallback__Lscopt_Read__F2(kind, name, defCallback, evidence$1), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sc_Seq($m_sc_Seq$().apply__sci_Seq__sc_SeqOps($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$d_sr_Nothing$.getArrayOf().constr)([])))), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sc_Seq($m_sc_Seq$().apply__sci_Seq__sc_SeqOps($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sr_ScalaRunTime$().genericWrapArray__O__sci_ArraySeq(new ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$d_sr_Nothing$.getArrayOf().constr)([])))), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$(), 0, 1, false, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$(), defCallback, evidence$1);
  return $thiz
}
function $ct_Lscopt_OptionDef__Lscopt_OptionDefKind__T__Lscopt_Read__($thiz, kind, name, evidence$1) {
  $ct_Lscopt_OptionDef__Lscopt_OptionDefKind__T__Lscopt_OptionDefCallback__Lscopt_Read__($thiz, kind, name, new $c_Lscopt_OptionDefCallback$$anon$1(), evidence$1);
  return $thiz
}
function $p_Lscopt_OptionDef__fireChange__Lscopt_OptionDef__Lscopt_Read__Lscopt_OptionDef($thiz, value, evidence$2) {
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($thiz.Lscopt_OptionDef__f__defCallback);
  return value
}
function $ps_Lscopt_OptionDef__OptionDef$superArg$1__Lscopt_OptionDefKind__T__Lscopt_OptionDefCallback__Lscopt_Read__F2(kind, name, defCallback, evidence$1) {
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((a, c) => c))
}
/** @constructor */
function $c_Lscopt_OptionDef() {
  this.Lscopt_OptionDef__f__id = 0;
  this.Lscopt_OptionDef__f__kind = null;
  this.Lscopt_OptionDef__f__name = null;
  this.Lscopt_OptionDef__f__shortOpt = null;
  this.Lscopt_OptionDef__f__keyName = null;
  this.Lscopt_OptionDef__f__valueName = null;
  this.Lscopt_OptionDef__f__desc = null;
  this.Lscopt_OptionDef__f__action = null;
  this.Lscopt_OptionDef__f__validations = null;
  this.Lscopt_OptionDef__f__configValidations = null;
  this.Lscopt_OptionDef__f__parentId = null;
  this.Lscopt_OptionDef__f__minOccurs = 0;
  this.Lscopt_OptionDef__f__maxOccurs = 0;
  this.Lscopt_OptionDef__f__isHidden = false;
  this.Lscopt_OptionDef__f__fallback = null;
  this.Lscopt_OptionDef__f__defCallback = null;
  this.Lscopt_OptionDef__f_evidence$1 = null;
  this.Lscopt_OptionDef__f_kind = null;
  this.Lscopt_OptionDef__f_id = 0;
  this.Lscopt_OptionDef__f_name = null
}
$c_Lscopt_OptionDef.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_OptionDef.prototype.constructor = $c_Lscopt_OptionDef;
/** @constructor */
function $h_Lscopt_OptionDef() {
  /*<skip>*/
}
$h_Lscopt_OptionDef.prototype = $c_Lscopt_OptionDef.prototype;
$c_Lscopt_OptionDef.prototype.copy__I__Lscopt_OptionDefKind__T__s_Option__s_Option__s_Option__T__F2__sc_Seq__sc_Seq__s_Option__I__I__Z__s_Option__Lscopt_OptionDefCallback__Lscopt_OptionDef = (function(_id, _kind, _name, _shortOpt, _keyName, _valueName, _desc, _action, _validations, _configValidations, _parentId, _minOccurs, _maxOccurs, _isHidden, _fallback, _defCallback) {
  return $ct_Lscopt_OptionDef__I__Lscopt_OptionDefKind__T__s_Option__s_Option__s_Option__T__F2__sc_Seq__sc_Seq__s_Option__I__I__Z__s_Option__Lscopt_OptionDefCallback__Lscopt_Read__(new $c_Lscopt_OptionDef(), _id, _kind, _name, _shortOpt, _keyName, _valueName, _desc, _action, _validations, _configValidations, _parentId, _minOccurs, _maxOccurs, _isHidden, _fallback, _defCallback, this.Lscopt_OptionDef__f_evidence$1)
});
$c_Lscopt_OptionDef.prototype.read__Lscopt_Read = (function() {
  var e = this.Lscopt_OptionDef__f_evidence$1;
  return e
});
$c_Lscopt_OptionDef.prototype.action__F2__Lscopt_OptionDef = (function(f) {
  return $p_Lscopt_OptionDef__fireChange__Lscopt_OptionDef__Lscopt_Read__Lscopt_OptionDef(this, this.copy__I__Lscopt_OptionDefKind__T__s_Option__s_Option__s_Option__T__F2__sc_Seq__sc_Seq__s_Option__I__I__Z__s_Option__Lscopt_OptionDefCallback__Lscopt_OptionDef(this.Lscopt_OptionDef__f__id, this.Lscopt_OptionDef__f__kind, this.Lscopt_OptionDef__f__name, this.Lscopt_OptionDef__f__shortOpt, this.Lscopt_OptionDef__f__keyName, this.Lscopt_OptionDef__f__valueName, this.Lscopt_OptionDef__f__desc, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((a, c) => $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(f).apply__O__O__O(a, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lscopt_OptionDef__f__action).apply__O__O__O(a, c)))), this.Lscopt_OptionDef__f__validations, this.Lscopt_OptionDef__f__configValidations, this.Lscopt_OptionDef__f__parentId, this.Lscopt_OptionDef__f__minOccurs, this.Lscopt_OptionDef__f__maxOccurs, this.Lscopt_OptionDef__f__isHidden, this.Lscopt_OptionDef__f__fallback, this.Lscopt_OptionDef__f__defCallback), this.Lscopt_OptionDef__f_evidence$1)
});
$c_Lscopt_OptionDef.prototype.toString__T = (function() {
  return this.fullName__T()
});
$c_Lscopt_OptionDef.prototype.abbr__T__Lscopt_OptionDef = (function(x) {
  var _shortOpt$3 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some(x);
  var _id$3 = this.Lscopt_OptionDef__f__id;
  var _kind$3 = this.Lscopt_OptionDef__f__kind;
  var _name$3 = this.Lscopt_OptionDef__f__name;
  var _keyName$3 = this.Lscopt_OptionDef__f__keyName;
  var _valueName$3 = this.Lscopt_OptionDef__f__valueName;
  var _desc$3 = this.Lscopt_OptionDef__f__desc;
  var _action$3 = this.Lscopt_OptionDef__f__action;
  var _validations$3 = this.Lscopt_OptionDef__f__validations;
  var _configValidations$3 = this.Lscopt_OptionDef__f__configValidations;
  var _parentId$3 = this.Lscopt_OptionDef__f__parentId;
  var _minOccurs$3 = this.Lscopt_OptionDef__f__minOccurs;
  var _maxOccurs$3 = this.Lscopt_OptionDef__f__maxOccurs;
  var _isHidden$3 = this.Lscopt_OptionDef__f__isHidden;
  var _fallback$3 = this.Lscopt_OptionDef__f__fallback;
  var _defCallback$3 = this.Lscopt_OptionDef__f__defCallback;
  return $p_Lscopt_OptionDef__fireChange__Lscopt_OptionDef__Lscopt_Read__Lscopt_OptionDef(this, this.copy__I__Lscopt_OptionDefKind__T__s_Option__s_Option__s_Option__T__F2__sc_Seq__sc_Seq__s_Option__I__I__Z__s_Option__Lscopt_OptionDefCallback__Lscopt_OptionDef(_id$3, _kind$3, _name$3, _shortOpt$3, _keyName$3, _valueName$3, _desc$3, _action$3, _validations$3, _configValidations$3, _parentId$3, _minOccurs$3, _maxOccurs$3, _isHidden$3, _fallback$3, _defCallback$3), this.Lscopt_OptionDef__f_evidence$1)
});
$c_Lscopt_OptionDef.prototype.minOccurs__I__Lscopt_OptionDef = (function(n) {
  return $p_Lscopt_OptionDef__fireChange__Lscopt_OptionDef__Lscopt_Read__Lscopt_OptionDef(this, this.copy__I__Lscopt_OptionDefKind__T__s_Option__s_Option__s_Option__T__F2__sc_Seq__sc_Seq__s_Option__I__I__Z__s_Option__Lscopt_OptionDefCallback__Lscopt_OptionDef(this.Lscopt_OptionDef__f__id, this.Lscopt_OptionDef__f__kind, this.Lscopt_OptionDef__f__name, this.Lscopt_OptionDef__f__shortOpt, this.Lscopt_OptionDef__f__keyName, this.Lscopt_OptionDef__f__valueName, this.Lscopt_OptionDef__f__desc, this.Lscopt_OptionDef__f__action, this.Lscopt_OptionDef__f__validations, this.Lscopt_OptionDef__f__configValidations, this.Lscopt_OptionDef__f__parentId, n, this.Lscopt_OptionDef__f__maxOccurs, this.Lscopt_OptionDef__f__isHidden, this.Lscopt_OptionDef__f__fallback, this.Lscopt_OptionDef__f__defCallback), this.Lscopt_OptionDef__f_evidence$1)
});
$c_Lscopt_OptionDef.prototype.maxOccurs__I__Lscopt_OptionDef = (function(n) {
  return $p_Lscopt_OptionDef__fireChange__Lscopt_OptionDef__Lscopt_Read__Lscopt_OptionDef(this, this.copy__I__Lscopt_OptionDefKind__T__s_Option__s_Option__s_Option__T__F2__sc_Seq__sc_Seq__s_Option__I__I__Z__s_Option__Lscopt_OptionDefCallback__Lscopt_OptionDef(this.Lscopt_OptionDef__f__id, this.Lscopt_OptionDef__f__kind, this.Lscopt_OptionDef__f__name, this.Lscopt_OptionDef__f__shortOpt, this.Lscopt_OptionDef__f__keyName, this.Lscopt_OptionDef__f__valueName, this.Lscopt_OptionDef__f__desc, this.Lscopt_OptionDef__f__action, this.Lscopt_OptionDef__f__validations, this.Lscopt_OptionDef__f__configValidations, this.Lscopt_OptionDef__f__parentId, this.Lscopt_OptionDef__f__minOccurs, n, this.Lscopt_OptionDef__f__isHidden, this.Lscopt_OptionDef__f__fallback, this.Lscopt_OptionDef__f__defCallback), this.Lscopt_OptionDef__f_evidence$1)
});
$c_Lscopt_OptionDef.prototype.text__T__Lscopt_OptionDef = (function(x) {
  return $p_Lscopt_OptionDef__fireChange__Lscopt_OptionDef__Lscopt_Read__Lscopt_OptionDef(this, this.copy__I__Lscopt_OptionDefKind__T__s_Option__s_Option__s_Option__T__F2__sc_Seq__sc_Seq__s_Option__I__I__Z__s_Option__Lscopt_OptionDefCallback__Lscopt_OptionDef(this.Lscopt_OptionDef__f__id, this.Lscopt_OptionDef__f__kind, this.Lscopt_OptionDef__f__name, this.Lscopt_OptionDef__f__shortOpt, this.Lscopt_OptionDef__f__keyName, this.Lscopt_OptionDef__f__valueName, x, this.Lscopt_OptionDef__f__action, this.Lscopt_OptionDef__f__validations, this.Lscopt_OptionDef__f__configValidations, this.Lscopt_OptionDef__f__parentId, this.Lscopt_OptionDef__f__minOccurs, this.Lscopt_OptionDef__f__maxOccurs, this.Lscopt_OptionDef__f__isHidden, this.Lscopt_OptionDef__f__fallback, this.Lscopt_OptionDef__f__defCallback), this.Lscopt_OptionDef__f_evidence$1)
});
$c_Lscopt_OptionDef.prototype.hasParent__Z = (function() {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lscopt_OptionDef__f__parentId);
  return (!this$1.isEmpty__Z())
});
$c_Lscopt_OptionDef.prototype.isOptLike__Z = (function() {
  var x = this.Lscopt_OptionDef__f_kind;
  var x$2 = $m_Lscopt_OptionDefKind$Opt$();
  if ((x !== null)) {
    var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x);
    var $$x2 = (this$1 === x$2)
  } else {
    var $$x2 = false
  };
  if ($$x2) {
    var $$x1 = true
  } else {
    var x$3 = this.Lscopt_OptionDef__f_kind;
    var x$4 = $m_Lscopt_OptionDefKind$OptHelp$();
    if ((x$3 !== null)) {
      var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$3);
      var $$x1 = (this$2 === x$4)
    } else {
      var $$x1 = false
    }
  };
  if ($$x1) {
    return true
  } else {
    var x$5 = this.Lscopt_OptionDef__f_kind;
    var x$6 = $m_Lscopt_OptionDefKind$OptVersion$();
    if ((x$5 !== null)) {
      var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$5);
      return (this$3 === x$6)
    } else {
      return false
    }
  }
});
$c_Lscopt_OptionDef.prototype.keyValueString__T = (function() {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lscopt_OptionDef__f__keyName);
  return (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T((this$1.isEmpty__Z() ? $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_defaultKeyName : this$1.get__O())) + "=") + this.valueString__T())
});
$c_Lscopt_OptionDef.prototype.valueString__T = (function() {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lscopt_OptionDef__f__valueName);
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T((this$1.isEmpty__Z() ? $m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_defaultValueName : this$1.get__O()))
});
$c_Lscopt_OptionDef.prototype.fullName__T = (function() {
  return (this.isOptLike__Z() ? ("--" + this.Lscopt_OptionDef__f_name) : this.Lscopt_OptionDef__f_name)
});
$c_Lscopt_OptionDef.prototype.argName__T = (function() {
  var x56 = this.Lscopt_OptionDef__f_kind;
  var x = $m_Lscopt_OptionDefKind$Arg$();
  if (((x === x56) && (this.Lscopt_OptionDef__f__minOccurs === 0))) {
    return (("[" + this.fullName__T()) + "]")
  };
  return this.fullName__T()
});
function $as_Lscopt_OptionDef(obj) {
  return (((obj instanceof $c_Lscopt_OptionDef) || (obj === null)) ? obj : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$throwClassCastException(obj, "scopt.OptionDef"))
}
function $isArrayOf_Lscopt_OptionDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscopt_OptionDef)))
}
function $asArrayOf_Lscopt_OptionDef(obj, depth) {
  return (($isArrayOf_Lscopt_OptionDef(obj, depth) || (obj === null)) ? obj : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$throwArrayCastException(obj, "Lscopt.OptionDef;", depth))
}
var $d_Lscopt_OptionDef = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_OptionDef: 0
}, false, "scopt.OptionDef", {
  Lscopt_OptionDef: 1,
  O: 1
});
$c_Lscopt_OptionDef.prototype.$classData = $d_Lscopt_OptionDef;
/** @constructor */
function $c_Lscopt_OptionDef$() {
  this.Lscopt_OptionDef$__f_UNBOUNDED = 0;
  this.Lscopt_OptionDef$__f_NL = null;
  this.Lscopt_OptionDef$__f_WW = null;
  this.Lscopt_OptionDef$__f_TB = null;
  this.Lscopt_OptionDef$__f_NLTB = null;
  this.Lscopt_OptionDef$__f_NLNL = null;
  this.Lscopt_OptionDef$__f_column1MaxLength = 0;
  this.Lscopt_OptionDef$__f_defaultKeyName = null;
  this.Lscopt_OptionDef$__f_defaultValueName = null;
  this.Lscopt_OptionDef$__f_atomic = null;
  $n_Lscopt_OptionDef$ = this;
  this.Lscopt_OptionDef$__f_UNBOUNDED = 2147483647;
  this.Lscopt_OptionDef$__f_NL = $m_Lscopt_platform$().Lscopt_platform$__f__NL;
  this.Lscopt_OptionDef$__f_WW = "  ";
  this.Lscopt_OptionDef$__f_TB = "        ";
  this.Lscopt_OptionDef$__f_NLTB = (("" + this.Lscopt_OptionDef$__f_NL) + this.Lscopt_OptionDef$__f_TB);
  this.Lscopt_OptionDef$__f_NLNL = (("" + this.Lscopt_OptionDef$__f_NL) + this.Lscopt_OptionDef$__f_NL);
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lscopt_OptionDef$__f_WW);
  this.Lscopt_OptionDef$__f_column1MaxLength = ((25 + this$1.length) | 0);
  this.Lscopt_OptionDef$__f_defaultKeyName = "<key>";
  this.Lscopt_OptionDef$__f_defaultValueName = "<value>";
  this.Lscopt_OptionDef$__f_atomic = $ct_ju_concurrent_atomic_AtomicInteger__(new $c_ju_concurrent_atomic_AtomicInteger())
}
$c_Lscopt_OptionDef$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_OptionDef$.prototype.constructor = $c_Lscopt_OptionDef$;
/** @constructor */
function $h_Lscopt_OptionDef$() {
  /*<skip>*/
}
$h_Lscopt_OptionDef$.prototype = $c_Lscopt_OptionDef$.prototype;
var $d_Lscopt_OptionDef$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_OptionDef$: 0
}, false, "scopt.OptionDef$", {
  Lscopt_OptionDef$: 1,
  O: 1
});
$c_Lscopt_OptionDef$.prototype.$classData = $d_Lscopt_OptionDef$;
var $n_Lscopt_OptionDef$;
function $m_Lscopt_OptionDef$() {
  if ((!$n_Lscopt_OptionDef$)) {
    $n_Lscopt_OptionDef$ = new $c_Lscopt_OptionDef$()
  };
  return $n_Lscopt_OptionDef$
}
/** @constructor */
function $c_Lscopt_OptionDefCallback() {
  /*<skip>*/
}
$c_Lscopt_OptionDefCallback.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_OptionDefCallback.prototype.constructor = $c_Lscopt_OptionDefCallback;
/** @constructor */
function $h_Lscopt_OptionDefCallback() {
  /*<skip>*/
}
$h_Lscopt_OptionDefCallback.prototype = $c_Lscopt_OptionDefCallback.prototype;
/** @constructor */
function $c_Lscopt_platform$() {
  this.Lscopt_platform$__f__NL = null;
  $n_Lscopt_platform$ = this;
  this.Lscopt_platform$__f__NL = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T($i_os.EOL)
}
$c_Lscopt_platform$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_platform$.prototype.constructor = $c_Lscopt_platform$;
/** @constructor */
function $h_Lscopt_platform$() {
  /*<skip>*/
}
$h_Lscopt_platform$.prototype = $c_Lscopt_platform$.prototype;
var $d_Lscopt_platform$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_platform$: 0
}, false, "scopt.platform$", {
  Lscopt_platform$: 1,
  O: 1
});
$c_Lscopt_platform$.prototype.$classData = $d_Lscopt_platform$;
var $n_Lscopt_platform$;
function $m_Lscopt_platform$() {
  if ((!$n_Lscopt_platform$)) {
    $n_Lscopt_platform$ = new $c_Lscopt_platform$()
  };
  return $n_Lscopt_platform$
}
/** @constructor */
function $c_Lvyxal_CLI$() {
  this.Lvyxal_CLI$__f_builder = null;
  this.Lvyxal_CLI$__f_parser = null;
  $n_Lvyxal_CLI$ = this;
  this.Lvyxal_CLI$__f_builder = new $c_Lscopt_OParser$$anon$1();
  var $$x28 = $m_Lscopt_OParser$();
  var $$x27 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lvyxal_CLI$__f_builder).programName__T__Lscopt_OParser("vyxal");
  var $$x15 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_package$().s_package$__f_Seq;
  var $$x14 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sr_ScalaRunTime$();
  var $$x13 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lvyxal_CLI$__f_builder).head__sci_Seq__Lscopt_OParser($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sr_ScalaRunTime$().wrapRefArray__AO__sci_ArraySeq(new ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$d_T.getArrayOf().constr)(["vyxal", ($m_Lvyxal_CLI$(), "3.4.2")])));
  var $$x12 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lvyxal_CLI$__f_builder).cmd__T__Lscopt_OParser("debug")).action__F2__Lscopt_OParser(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((_$1, cfg) => {
    $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_jl_Void(_$1);
    var cfg$1 = $as_Lvyxal_CLI$CLIConfig(cfg);
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$1).copy__s_Option__s_Option__sci_List__s_Option__Z__Z__Z__Lvyxal_Settings__Z__Z__Z__Z__Z__Lvyxal_CLI$CLIConfig($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$1).copy$default$1__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$1).copy$default$2__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$1).copy$default$3__sci_List(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$1).copy$default$4__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$1).copy$default$5__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$1).copy$default$6__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$1).copy$default$7__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$1).copy$default$8__Lvyxal_Settings(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$1).copy$default$9__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$1).copy$default$10__Z(), true, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$1).copy$default$12__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$1).copy$default$13__Z())
  })))).text__T__Lscopt_OParser("Run the debugger");
  var this$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lvyxal_CLI$__f_builder).opt__C__T__Lscopt_Read__Lscopt_OParser(104, "help", $m_Lscopt_Read$().Lscopt_Read$__f_unitRead)).action__F2__Lscopt_OParser(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((_$2, cfg$2) => {
    $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_jl_Void(_$2);
    var cfg$3 = $as_Lvyxal_CLI$CLIConfig(cfg$2);
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$3).copy__s_Option__s_Option__sci_List__s_Option__Z__Z__Z__Lvyxal_Settings__Z__Z__Z__Z__Z__Lvyxal_CLI$CLIConfig($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$3).copy$default$1__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$3).copy$default$2__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$3).copy$default$3__sci_List(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$3).copy$default$4__s_Option(), true, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$3).copy$default$6__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$3).copy$default$7__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$3).copy$default$8__Lvyxal_Settings(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$3).copy$default$9__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$3).copy$default$10__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$3).copy$default$11__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$3).copy$default$12__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$3).copy$default$13__Z())
  })))).text__T__Lscopt_OParser("Print this help message and exit"));
  var $$x11 = this$4.minOccurs__I__Lscopt_OParser(0);
  var this$6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lvyxal_CLI$__f_builder).opt__T__Lscopt_Read__Lscopt_OParser("file", $m_Lscopt_Read$().Lscopt_Read$__f_stringRead)).action__F2__Lscopt_OParser(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((file, cfg$3$1) => {
    var file$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(file);
    var cfg$4 = $as_Lvyxal_CLI$CLIConfig(cfg$3$1);
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$4).copy__s_Option__s_Option__sci_List__s_Option__Z__Z__Z__Lvyxal_Settings__Z__Z__Z__Z__Z__Lvyxal_CLI$CLIConfig(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some(file$1), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$4).copy$default$2__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$4).copy$default$3__sci_List(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$4).copy$default$4__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$4).copy$default$5__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$4).copy$default$6__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$4).copy$default$7__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$4).copy$default$8__Lvyxal_Settings(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$4).copy$default$9__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$4).copy$default$10__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$4).copy$default$11__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$4).copy$default$12__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$4).copy$default$13__Z())
  })))).text__T__Lscopt_OParser("The file to read the program from"));
  var $$x10 = this$6.minOccurs__I__Lscopt_OParser(0);
  var this$8 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lvyxal_CLI$__f_builder).opt__T__Lscopt_Read__Lscopt_OParser("code", $m_Lscopt_Read$().Lscopt_Read$__f_stringRead)).action__F2__Lscopt_OParser(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((code, cfg$4$1) => {
    var code$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(code);
    var cfg$5 = $as_Lvyxal_CLI$CLIConfig(cfg$4$1);
    var code$1$1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some(code$1);
    var filename$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$5).copy$default$1__s_Option();
    var inputs$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$5).copy$default$3__sci_List();
    var litInfoFor$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$5).copy$default$4__s_Option();
    var printHelp$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$5).copy$default$5__Z();
    var runLexer$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$5).copy$default$6__Z();
    var runParser$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$5).copy$default$7__Z();
    var settings$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$5).copy$default$8__Lvyxal_Settings();
    var runLiterateLexer$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$5).copy$default$9__Z();
    var runFancyRepl$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$5).copy$default$10__Z();
    var debug$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$5).copy$default$11__Z();
    var readBytes$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$5).copy$default$12__Z();
    var runLiterateParser$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$5).copy$default$13__Z();
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$5).copy__s_Option__s_Option__sci_List__s_Option__Z__Z__Z__Lvyxal_Settings__Z__Z__Z__Z__Z__Lvyxal_CLI$CLIConfig(filename$1, code$1$1, inputs$1, litInfoFor$1, printHelp$1, runLexer$1, runParser$1, settings$1, runLiterateLexer$1, runFancyRepl$1, debug$1, readBytes$1, runLiterateParser$1)
  })))).text__T__Lscopt_OParser("Code to execute directly"));
  var $$x9 = this$8.minOccurs__I__Lscopt_OParser(0);
  var this$24 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lvyxal_CLI$__f_builder).opt__T__Lscopt_Read__Lscopt_OParser("recursions", $m_Lscopt_Read$().Lscopt_Read$__f_intRead)).action__F2__Lscopt_OParser(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((limit, cfg$5$1) => {
    var limit$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uI(limit);
    var cfg$6 = $as_Lvyxal_CLI$CLIConfig(cfg$5$1);
    $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).settings__Lvyxal_Settings());
    var this$9 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).settings__Lvyxal_Settings());
    var presetStack = this$9.Lvyxal_Settings__f_presetStack;
    var this$10 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).settings__Lvyxal_Settings());
    var endPrintMode = this$10.Lvyxal_Settings__f_endPrintMode;
    var this$11 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).settings__Lvyxal_Settings());
    var defaultValue = this$11.Lvyxal_Settings__f_defaultValue;
    var this$12 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).settings__Lvyxal_Settings());
    var rangify = this$12.Lvyxal_Settings__f_rangify;
    var this$13 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).settings__Lvyxal_Settings());
    var rangeStart = this$13.Lvyxal_Settings__f_rangeStart;
    var this$14 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).settings__Lvyxal_Settings());
    var rangeOffset = this$14.Lvyxal_Settings__f_rangeOffset;
    var this$15 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).settings__Lvyxal_Settings());
    var numToRange = this$15.Lvyxal_Settings__f_numToRange;
    var this$16 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).settings__Lvyxal_Settings());
    var online = this$16.Lvyxal_Settings__f_online;
    var this$17 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).settings__Lvyxal_Settings());
    var literate = this$17.Lvyxal_Settings__f_literate;
    var this$18 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).settings__Lvyxal_Settings());
    var fullTrace = this$18.Lvyxal_Settings__f_fullTrace;
    var this$19 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).settings__Lvyxal_Settings());
    var defaultArity = this$19.Lvyxal_Settings__f_defaultArity;
    var this$20 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).settings__Lvyxal_Settings());
    var limitPrint = this$20.Lvyxal_Settings__f_limitPrint;
    var this$21 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).settings__Lvyxal_Settings());
    var dontEvalInputs = this$21.Lvyxal_Settings__f_dontEvalInputs;
    var this$22 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).settings__Lvyxal_Settings());
    var wrapStack = this$22.Lvyxal_Settings__f_wrapStack;
    var settings$2 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_Lvyxal_Settings(presetStack, endPrintMode, defaultValue, rangify, rangeStart, rangeOffset, numToRange, online, literate, fullTrace, defaultArity, limitPrint, dontEvalInputs, limit$1, wrapStack);
    var filename$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).copy$default$1__s_Option();
    var code$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).copy$default$2__s_Option();
    var inputs$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).copy$default$3__sci_List();
    var litInfoFor$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).copy$default$4__s_Option();
    var printHelp$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).copy$default$5__Z();
    var runLexer$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).copy$default$6__Z();
    var runParser$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).copy$default$7__Z();
    var runLiterateLexer$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).copy$default$9__Z();
    var runFancyRepl$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).copy$default$10__Z();
    var debug$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).copy$default$11__Z();
    var readBytes$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).copy$default$12__Z();
    var runLiterateParser$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).copy$default$13__Z();
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$6).copy__s_Option__s_Option__sci_List__s_Option__Z__Z__Z__Lvyxal_Settings__Z__Z__Z__Z__Z__Lvyxal_CLI$CLIConfig(filename$2, code$2, inputs$2, litInfoFor$2, printHelp$2, runLexer$2, runParser$2, settings$2, runLiterateLexer$2, runFancyRepl$2, debug$2, readBytes$2, runLiterateParser$2)
  })))).text__T__Lscopt_OParser("Set recursion limit (default 100)"));
  var $$x8 = this$24.minOccurs__I__Lscopt_OParser(0);
  var this$26 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lvyxal_CLI$__f_builder).opt__T__Lscopt_Read__Lscopt_OParser("docs-literate", $m_Lscopt_Read$().Lscopt_Read$__f_stringRead)).action__F2__Lscopt_OParser(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((symbol, cfg$6$1) => {
    var symbol$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(symbol);
    var cfg$7 = $as_Lvyxal_CLI$CLIConfig(cfg$6$1);
    var litInfoFor$3 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some(symbol$1);
    var filename$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$7).copy$default$1__s_Option();
    var code$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$7).copy$default$2__s_Option();
    var inputs$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$7).copy$default$3__sci_List();
    var printHelp$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$7).copy$default$5__Z();
    var runLexer$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$7).copy$default$6__Z();
    var runParser$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$7).copy$default$7__Z();
    var settings$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$7).copy$default$8__Lvyxal_Settings();
    var runLiterateLexer$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$7).copy$default$9__Z();
    var runFancyRepl$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$7).copy$default$10__Z();
    var debug$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$7).copy$default$11__Z();
    var readBytes$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$7).copy$default$12__Z();
    var runLiterateParser$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$7).copy$default$13__Z();
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$7).copy__s_Option__s_Option__sci_List__s_Option__Z__Z__Z__Lvyxal_Settings__Z__Z__Z__Z__Z__Lvyxal_CLI$CLIConfig(filename$3, code$3, inputs$3, litInfoFor$3, printHelp$3, runLexer$3, runParser$3, settings$3, runLiterateLexer$3, runFancyRepl$3, debug$3, readBytes$3, runLiterateParser$3)
  })))).text__T__Lscopt_OParser("Print literate mode mappings and exit"));
  var $$x7 = this$26.minOccurs__I__Lscopt_OParser(0);
  var this$27 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lvyxal_CLI$__f_builder).opt__T__Lscopt_Read__Lscopt_OParser("lexer", $m_Lscopt_Read$().Lscopt_Read$__f_unitRead)).action__F2__Lscopt_OParser(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((_$3, cfg$7$1) => {
    $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_jl_Void(_$3);
    var cfg$8 = $as_Lvyxal_CLI$CLIConfig(cfg$7$1);
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$8).copy__s_Option__s_Option__sci_List__s_Option__Z__Z__Z__Lvyxal_Settings__Z__Z__Z__Z__Z__Lvyxal_CLI$CLIConfig($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$8).copy$default$1__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$8).copy$default$2__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$8).copy$default$3__sci_List(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$8).copy$default$4__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$8).copy$default$5__Z(), true, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$8).copy$default$7__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$8).copy$default$8__Lvyxal_Settings(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$8).copy$default$9__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$8).copy$default$10__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$8).copy$default$11__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$8).copy$default$12__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$8).copy$default$13__Z())
  })))).text__T__Lscopt_OParser("Run the lexer on input. For internal use."));
  var $$x6 = this$27.minOccurs__I__Lscopt_OParser(0);
  var this$28 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lvyxal_CLI$__f_builder).opt__T__Lscopt_Read__Lscopt_OParser("literate-lexer", $m_Lscopt_Read$().Lscopt_Read$__f_unitRead)).action__F2__Lscopt_OParser(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((_$4, cfg$8$1) => {
    $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_jl_Void(_$4);
    var cfg$9 = $as_Lvyxal_CLI$CLIConfig(cfg$8$1);
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$9).copy__s_Option__s_Option__sci_List__s_Option__Z__Z__Z__Lvyxal_Settings__Z__Z__Z__Z__Z__Lvyxal_CLI$CLIConfig($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$9).copy$default$1__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$9).copy$default$2__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$9).copy$default$3__sci_List(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$9).copy$default$4__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$9).copy$default$5__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$9).copy$default$6__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$9).copy$default$7__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$9).copy$default$8__Lvyxal_Settings(), true, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$9).copy$default$10__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$9).copy$default$11__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$9).copy$default$12__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$9).copy$default$13__Z())
  })))).text__T__Lscopt_OParser("Run the literate lexer on input. For internal use."));
  var $$x5 = this$28.minOccurs__I__Lscopt_OParser(0);
  var this$29 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lvyxal_CLI$__f_builder).opt__T__Lscopt_Read__Lscopt_OParser("parser", $m_Lscopt_Read$().Lscopt_Read$__f_unitRead)).action__F2__Lscopt_OParser(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((_$5, cfg$9$1) => {
    $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_jl_Void(_$5);
    var cfg$10 = $as_Lvyxal_CLI$CLIConfig(cfg$9$1);
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$10).copy__s_Option__s_Option__sci_List__s_Option__Z__Z__Z__Lvyxal_Settings__Z__Z__Z__Z__Z__Lvyxal_CLI$CLIConfig($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$10).copy$default$1__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$10).copy$default$2__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$10).copy$default$3__sci_List(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$10).copy$default$4__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$10).copy$default$5__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$10).copy$default$6__Z(), true, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$10).copy$default$8__Lvyxal_Settings(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$10).copy$default$9__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$10).copy$default$10__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$10).copy$default$11__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$10).copy$default$12__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$10).copy$default$13__Z())
  })))).text__T__Lscopt_OParser("Run the parser on input. For internal use."));
  var $$x4 = this$29.minOccurs__I__Lscopt_OParser(0);
  var this$30 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lvyxal_CLI$__f_builder).opt__T__Lscopt_Read__Lscopt_OParser("literate-parser", $m_Lscopt_Read$().Lscopt_Read$__f_unitRead)).action__F2__Lscopt_OParser(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((_$6, cfg$10$1) => {
    $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_jl_Void(_$6);
    var cfg$11 = $as_Lvyxal_CLI$CLIConfig(cfg$10$1);
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$11).copy__s_Option__s_Option__sci_List__s_Option__Z__Z__Z__Lvyxal_Settings__Z__Z__Z__Z__Z__Lvyxal_CLI$CLIConfig($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$11).copy$default$1__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$11).copy$default$2__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$11).copy$default$3__sci_List(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$11).copy$default$4__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$11).copy$default$5__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$11).copy$default$6__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$11).copy$default$7__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$11).copy$default$8__Lvyxal_Settings(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$11).copy$default$9__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$11).copy$default$10__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$11).copy$default$11__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$11).copy$default$12__Z(), true)
  })))).text__T__Lscopt_OParser("Run the literate lexer and then parser on input. For internal use."));
  var $$x3 = this$30.minOccurs__I__Lscopt_OParser(0);
  var this$31 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lvyxal_CLI$__f_builder).opt__T__Lscopt_Read__Lscopt_OParser("fancy-repl", $m_Lscopt_Read$().Lscopt_Read$__f_unitRead)).action__F2__Lscopt_OParser(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((_$7, cfg$11$1) => {
    $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_jl_Void(_$7);
    var cfg$12 = $as_Lvyxal_CLI$CLIConfig(cfg$11$1);
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$12).copy__s_Option__s_Option__sci_List__s_Option__Z__Z__Z__Lvyxal_Settings__Z__Z__Z__Z__Z__Lvyxal_CLI$CLIConfig($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$12).copy$default$1__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$12).copy$default$2__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$12).copy$default$3__sci_List(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$12).copy$default$4__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$12).copy$default$5__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$12).copy$default$6__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$12).copy$default$7__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$12).copy$default$8__Lvyxal_Settings(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$12).copy$default$9__Z(), true, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$12).copy$default$11__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$12).copy$default$12__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$12).copy$default$13__Z())
  })))).text__T__Lscopt_OParser("Run the fancy REPL"));
  var $$x2 = this$31.minOccurs__I__Lscopt_OParser(0);
  var this$32 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lvyxal_CLI$__f_builder).opt__C__T__Lscopt_Read__Lscopt_OParser(118, "bytes", $m_Lscopt_Read$().Lscopt_Read$__f_unitRead)).action__F2__Lscopt_OParser(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((_$8, cfg$12$1) => {
    $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_jl_Void(_$8);
    var cfg$13 = $as_Lvyxal_CLI$CLIConfig(cfg$12$1);
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$13).copy__s_Option__s_Option__sci_List__s_Option__Z__Z__Z__Lvyxal_Settings__Z__Z__Z__Z__Z__Lvyxal_CLI$CLIConfig($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$13).copy$default$1__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$13).copy$default$2__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$13).copy$default$3__sci_List(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$13).copy$default$4__s_Option(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$13).copy$default$5__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$13).copy$default$6__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$13).copy$default$7__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$13).copy$default$8__Lvyxal_Settings(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$13).copy$default$9__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$13).copy$default$10__Z(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$13).copy$default$11__Z(), true, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$13).copy$default$13__Z())
  })))).text__T__Lscopt_OParser("Read program as raw bytes - used for code golf scoring"));
  var $$x1 = this$32.minOccurs__I__Lscopt_OParser(0);
  var this$33 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lvyxal_CLI$__f_builder).arg__T__Lscopt_Read__Lscopt_OParser("<input>...", $m_Lscopt_Read$().Lscopt_Read$__f_stringRead));
  var this$34 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this$33.maxOccurs__I__Lscopt_OParser($m_Lscopt_OptionDef$().Lscopt_OptionDef$__f_UNBOUNDED));
  var this$47 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x15).apply__sci_Seq__sc_SeqOps($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x14).wrapRefArray__AO__sci_ArraySeq(new ($d_Lscopt_OParser.getArrayOf().constr)([$$x13, $$x12, $$x11, $$x10, $$x9, $$x8, $$x7, $$x6, $$x5, $$x4, $$x3, $$x2, $$x1, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this$34.minOccurs__I__Lscopt_OParser(0)).action__F2__Lscopt_OParser(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((input, cfg$13$1) => {
    var input$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(input);
    var cfg$14 = $as_Lvyxal_CLI$CLIConfig(cfg$13$1);
    var this$35 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$14).inputs__sci_List());
    var inputs$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_sc_StrictOptimizedSeqOps__appended__O__O(this$35, input$1));
    var filename$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$14).copy$default$1__s_Option();
    var code$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$14).copy$default$2__s_Option();
    var litInfoFor$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$14).copy$default$4__s_Option();
    var printHelp$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$14).copy$default$5__Z();
    var runLexer$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$14).copy$default$6__Z();
    var runParser$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$14).copy$default$7__Z();
    var settings$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$14).copy$default$8__Lvyxal_Settings();
    var runLiterateLexer$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$14).copy$default$9__Z();
    var runFancyRepl$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$14).copy$default$10__Z();
    var debug$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$14).copy$default$11__Z();
    var readBytes$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$14).copy$default$12__Z();
    var runLiterateParser$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$14).copy$default$13__Z();
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$14).copy__s_Option__s_Option__sci_List__s_Option__Z__Z__Z__Lvyxal_Settings__Z__Z__Z__Z__Z__Lvyxal_CLI$CLIConfig(filename$4, code$4, inputs$4, litInfoFor$4, printHelp$4, runLexer$4, runParser$4, settings$4, runLiterateLexer$4, runFancyRepl$4, debug$4, readBytes$4, runLiterateParser$4)
  })))).text__T__Lscopt_OParser("Input to the program")]))));
  var $$x26 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_Predef$();
  var xs = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_Lvyxal_Flag$().values__ALvyxal_Flag();
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_ArrayOps$();
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_ArrayOps$();
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_ArrayOps$();
  var $$x16 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_reflect_ClassTag$();
  var this$40 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(xs);
  var evidence$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x16).apply__jl_Class__s_reflect_ClassTag($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$objectGetClass(this$40).getComponentType__jl_Class());
  var capacity = 0;
  var size = 0;
  var jsElems = null;
  var elementClass = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(evidence$1).runtimeClass__jl_Class();
  capacity = 0;
  size = 0;
  var isCharArrayBuilder = (elementClass === $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$d_C.getClassOf());
  jsElems = [];
  var i = 0;
  while ((i < $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(xs).u.length)) {
    var x1 = i;
    var x = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(xs).get(x1);
    var _$9 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_Flag(x);
    if ((!$j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$9).Lvyxal_Flag__f_hidden)) {
      var unboxedElem = (isCharArrayBuilder ? $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uC(x) : ((x === null) ? $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(elementClass).jl_Class__f_data.zero : x));
      jsElems.push(unboxedElem)
    };
    i = ((1 + i) | 0)
  };
  var elemRuntimeClass = ((elementClass === $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$d_V.getClassOf()) ? $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$d_jl_Void.getClassOf() : (((elementClass === $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$d_sr_Null$.getClassOf()) || (elementClass === $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$d_sr_Nothing$.getClassOf())) ? $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$d_O.getClassOf() : elementClass));
  var xs$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$asArrayOf_O($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(elemRuntimeClass).jl_Class__f_data.getArrayOf().wrapArray(jsElems), 1);
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_ArrayOps$();
  var f$2 = ((f) => {
    var f$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_Flag(f);
    var this$44 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lvyxal_CLI$__f_builder).opt__C__T__Lscopt_Read__Lscopt_OParser($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(f$1).Lvyxal_Flag__f_short, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(f$1).Lvyxal_Flag__f_long, $m_Lscopt_Read$().Lscopt_Read$__f_unitRead)).action__F2__Lscopt_OParser(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction2(((_$10, cfg$15) => {
      $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_jl_Void(_$10);
      var cfg$16 = $as_Lvyxal_CLI$CLIConfig(cfg$15);
      var settings$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_Lvyxal_Settings($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(f$1).Lvyxal_Flag__f_action).apply__O__O($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$16).settings__Lvyxal_Settings()));
      var filename$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$16).copy$default$1__s_Option();
      var code$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$16).copy$default$2__s_Option();
      var inputs$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$16).copy$default$3__sci_List();
      var litInfoFor$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$16).copy$default$4__s_Option();
      var printHelp$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$16).copy$default$5__Z();
      var runLexer$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$16).copy$default$6__Z();
      var runParser$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$16).copy$default$7__Z();
      var runLiterateLexer$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$16).copy$default$9__Z();
      var runFancyRepl$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$16).copy$default$10__Z();
      var debug$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$16).copy$default$11__Z();
      var readBytes$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$16).copy$default$12__Z();
      var runLiterateParser$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$16).copy$default$13__Z();
      return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(cfg$16).copy__s_Option__s_Option__sci_List__s_Option__Z__Z__Z__Lvyxal_Settings__Z__Z__Z__Z__Z__Lvyxal_CLI$CLIConfig(filename$5, code$5, inputs$5, litInfoFor$5, printHelp$5, runLexer$5, runParser$5, settings$5, runLiterateLexer$5, runFancyRepl$5, debug$5, readBytes$5, runLiterateParser$5)
    })))).text__T__Lscopt_OParser($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(f$1).Lvyxal_Flag__f_helpText));
    return this$44.minOccurs__I__Lscopt_OParser(0)
  });
  var len = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(xs$1).u.length;
  var ys = new ($d_Lscopt_OParser.getArrayOf().constr)(len);
  if ((len > 0)) {
    var i$1 = 0;
    if ((xs$1 !== null)) {
      while ((i$1 < len)) {
        var $$x17 = i$1;
        var arg1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(xs$1).get(i$1);
        ys.set($$x17, f$2(arg1));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ((xs$1 instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ac_I)) {
      var x3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$asArrayOf_I(xs$1, 1);
      while ((i$1 < len)) {
        var $$x18 = i$1;
        var arg1$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x3).get(i$1);
        ys.set($$x18, f$2(arg1$1));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ((xs$1 instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ac_D)) {
      var x4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$asArrayOf_D(xs$1, 1);
      while ((i$1 < len)) {
        var $$x19 = i$1;
        var arg1$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x4).get(i$1);
        ys.set($$x19, f$2(arg1$2));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ((xs$1 instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ac_J)) {
      var x5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$asArrayOf_J(xs$1, 1);
      while ((i$1 < len)) {
        var $$x20 = i$1;
        var t = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x5).get(i$1);
        var lo = t.RTLong__f_lo;
        var hi = t.RTLong__f_hi;
        ys.set($$x20, f$2(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ((xs$1 instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ac_F)) {
      var x6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$asArrayOf_F(xs$1, 1);
      while ((i$1 < len)) {
        var $$x21 = i$1;
        var arg1$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x6).get(i$1);
        ys.set($$x21, f$2(arg1$3));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ((xs$1 instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ac_C)) {
      var x7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$asArrayOf_C(xs$1, 1);
      while ((i$1 < len)) {
        var $$x22 = i$1;
        var arg1$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x7).get(i$1);
        ys.set($$x22, f$2($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$bC(arg1$4)));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ((xs$1 instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ac_B)) {
      var x8 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$asArrayOf_B(xs$1, 1);
      while ((i$1 < len)) {
        var $$x23 = i$1;
        var arg1$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x8).get(i$1);
        ys.set($$x23, f$2(arg1$5));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ((xs$1 instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ac_S)) {
      var x9 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$asArrayOf_S(xs$1, 1);
      while ((i$1 < len)) {
        var $$x24 = i$1;
        var arg1$6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x9).get(i$1);
        ys.set($$x24, f$2(arg1$6));
        i$1 = ((1 + i$1) | 0)
      }
    } else if ((xs$1 instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ac_Z)) {
      var x10 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$asArrayOf_Z(xs$1, 1);
      while ((i$1 < len)) {
        var $$x25 = i$1;
        var arg1$7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x10).get(i$1);
        ys.set($$x25, f$2(arg1$7));
        i$1 = ((1 + i$1) | 0)
      }
    } else {
      throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(xs$1)
    }
  };
  var suffix = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x26).wrapRefArray__AO__scm_ArraySeq$ofRef(ys);
  this.Lvyxal_CLI$__f_parser = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x28).sequence__Lscopt_OParser__sci_Seq__Lscopt_OParser($$x27, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_Seq(this$47.appendedAll__sc_IterableOnce__O(suffix)))
}
$c_Lvyxal_CLI$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lvyxal_CLI$.prototype.constructor = $c_Lvyxal_CLI$;
/** @constructor */
function $h_Lvyxal_CLI$() {
  /*<skip>*/
}
$h_Lvyxal_CLI$.prototype = $c_Lvyxal_CLI$.prototype;
$c_Lvyxal_CLI$.prototype.helpText__T = (function() {
  var this$1 = $m_Lscopt_OParser$();
  var parser = this.Lvyxal_CLI$__f_parser;
  return this$1.usage__Lscopt_OParser__Lscopt_RenderingMode__T(parser, $m_Lscopt_RenderingMode$TwoColumns$())
});
var $d_Lvyxal_CLI$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lvyxal_CLI$: 0
}, false, "vyxal.CLI$", {
  Lvyxal_CLI$: 1,
  O: 1
});
$c_Lvyxal_CLI$.prototype.$classData = $d_Lvyxal_CLI$;
var $n_Lvyxal_CLI$;
function $m_Lvyxal_CLI$() {
  if ((!$n_Lvyxal_CLI$)) {
    $n_Lvyxal_CLI$ = new $c_Lvyxal_CLI$()
  };
  return $n_Lvyxal_CLI$
}
/** @constructor */
function $c_Lvyxal_HelpText$() {
  /*<skip>*/
}
$c_Lvyxal_HelpText$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lvyxal_HelpText$.prototype.constructor = $c_Lvyxal_HelpText$;
/** @constructor */
function $h_Lvyxal_HelpText$() {
  /*<skip>*/
}
$h_Lvyxal_HelpText$.prototype = $c_Lvyxal_HelpText$.prototype;
$c_Lvyxal_HelpText$.prototype.getHelpText = (function() {
  return $m_Lvyxal_CLI$().helpText__T()
});
var $d_Lvyxal_HelpText$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lvyxal_HelpText$: 0
}, false, "vyxal.HelpText$", {
  Lvyxal_HelpText$: 1,
  O: 1
});
$c_Lvyxal_HelpText$.prototype.$classData = $d_Lvyxal_HelpText$;
var $n_Lvyxal_HelpText$;
function $m_Lvyxal_HelpText$() {
  if ((!$n_Lvyxal_HelpText$)) {
    $n_Lvyxal_HelpText$ = new $c_Lvyxal_HelpText$()
  };
  return $n_Lvyxal_HelpText$
}
/** @constructor */
function $c_jl_Short$() {
  /*<skip>*/
}
$c_jl_Short$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_jl_Short$.prototype.constructor = $c_jl_Short$;
/** @constructor */
function $h_jl_Short$() {
  /*<skip>*/
}
$h_jl_Short$.prototype = $c_jl_Short$.prototype;
$c_jl_Short$.prototype.parseShort__T__I__S = (function(s, radix) {
  var r = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_jl_Integer$().parseInt__T__I__I(s, radix);
  if (((r < (-32768)) || (r > 32767))) {
    throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_NumberFormatException((("For input string: \"" + s) + "\""))
  } else {
    return ((r << 16) >> 16)
  }
});
var $d_jl_Short$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  jl_Short$: 0
}, false, "java.lang.Short$", {
  jl_Short$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Short$.prototype.$classData = $d_jl_Short$;
var $n_jl_Short$;
function $m_jl_Short$() {
  if ((!$n_jl_Short$)) {
    $n_jl_Short$ = new $c_jl_Short$()
  };
  return $n_jl_Short$
}
function $p_Ljava_net_URI$__loop$1__I__T__T__I($thiz, i, x$1, y$1) {
  while (true) {
    var $$x2 = i;
    var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1);
    if (($$x2 >= this$1.length)) {
      var $$x1 = true
    } else {
      var $$x3 = i;
      var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(y$1);
      var $$x1 = ($$x3 >= this$2.length)
    };
    if ($$x1) {
      var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1);
      var this$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(y$1);
      return ((this$3.length - this$4.length) | 0)
    } else {
      var this$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1);
      var index = i;
      var this$6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(y$1);
      var index$1 = i;
      var diff = (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$5, index) - $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$6, index$1)) | 0);
      if ((diff !== 0)) {
        return diff
      } else {
        var this$7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1);
        var index$2 = i;
        if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$7, index$2) === 37)) {
          var $$x5 = i;
          var this$8 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1);
          if ((((2 + $$x5) | 0) >= this$8.length)) {
            var $$x4 = true
          } else {
            var $$x6 = i;
            var this$9 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(y$1);
            var $$x4 = (((2 + $$x6) | 0) >= this$9.length)
          };
          if ($$x4) {
            throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_AssertionError("Invalid escape in URI")
          };
          var this$10 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1);
          var beginIndex = ((1 + i) | 0);
          var endIndex = ((3 + i) | 0);
          if ((beginIndex < 0)) {
            $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$10, beginIndex)
          };
          if ((endIndex > this$10.length)) {
            $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$10, endIndex)
          };
          if ((endIndex < beginIndex)) {
            $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$10, (-1))
          };
          var $$x7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(this$10.substring(beginIndex, endIndex)));
          var this$11 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(y$1);
          var beginIndex$1 = ((1 + i) | 0);
          var endIndex$1 = ((3 + i) | 0);
          if ((beginIndex$1 < 0)) {
            $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$11, beginIndex$1)
          };
          if ((endIndex$1 > this$11.length)) {
            $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$11, endIndex$1)
          };
          if ((endIndex$1 < beginIndex$1)) {
            $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$11, (-1))
          };
          var cmp = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_T__compareToIgnoreCase__T__I($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x7), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(this$11.substring(beginIndex$1, endIndex$1)));
          if ((cmp !== 0)) {
            return cmp
          } else {
            i = ((3 + i) | 0)
          }
        } else {
          i = ((1 + i) | 0)
        }
      }
    }
  }
}
/** @constructor */
function $c_Ljava_net_URI$() {
  this.Ljava_net_URI$__f_ipv4address = null;
  this.Ljava_net_URI$__f_ipv6address = null;
  this.Ljava_net_URI$__f_java$net$URI$$uriRe = null;
  $n_Ljava_net_URI$ = this;
  this.Ljava_net_URI$__f_ipv4address = "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
  var ipv4 = this.Ljava_net_URI$__f_ipv4address;
  this.Ljava_net_URI$__f_ipv6address = (((((((((((((("(?:(?:[0-9a-f]{1,4}:){7}[0-9a-f]{1,4}|(?:[0-9a-f]{1,4}:){1,7}:|(?:[0-9a-f]{1,4}:){1,6}(?::[0-9a-f]{1,4})|(?:[0-9a-f]{1,4}:){1,5}(?::[0-9a-f]{1,4}){1,2}|(?:[0-9a-f]{1,4}:){1,4}(?::[0-9a-f]{1,4}){1,3}|(?:[0-9a-f]{1,4}:){1,3}(?::[0-9a-f]{1,4}){1,4}|(?:[0-9a-f]{1,4}:){1,2}(?::[0-9a-f]{1,4}){1,5}|(?:[0-9a-f]{1,4}:)(?::[0-9a-f]{1,4}){1,6}|:(?:(?::[0-9a-f]{1,4}){1,7}|:)|(?:[0-9a-f]{1,4}:){6}" + ipv4) + "|(?:[0-9a-f]{1,4}:){1,5}:") + ipv4) + "|(?:[0-9a-f]{1,4}:){1,4}(?::[0-9a-f]{1,4}):") + ipv4) + "|(?:[0-9a-f]{1,4}:){1,3}(?::[0-9a-f]{1,4}){1,2}:") + ipv4) + "|(?:[0-9a-f]{1,4}:){1,2}(?::[0-9a-f]{1,4}){1,3}:") + ipv4) + "|(?:[0-9a-f]{1,4}:)(?::[0-9a-f]{1,4}){1,4}:") + ipv4) + "|::(?:[0-9a-f]{1,4}:){1,5}") + ipv4) + ")(?:%[0-9a-z]+)?");
  new RegExp((("^" + this.Ljava_net_URI$__f_ipv6address) + "$"), "i");
  var ipv6reference = (("\\[(?:" + this.Ljava_net_URI$__f_ipv6address) + ")\\]");
  var host = (((("((?:(?:[a-z0-9]|[a-z0-9][a-z0-9-]*[a-z0-9])\\.)*(?:[a-z]|[a-z][a-z0-9-]*[a-z0-9])\\.?|" + this.Ljava_net_URI$__f_ipv4address) + "|") + ipv6reference) + ")");
  var hostport = (host + "(?::([0-9]*))?");
  var server = (("(?:(?:((?:[a-z0-9-_.!~*'();:&=+$,]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*)@)?" + hostport) + ")?");
  var authority = (server + "|(?:[a-z0-9-_.!~*'()$,;:@&=+]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])+");
  var net_path = (("//(" + authority) + ")(/(?:[a-z0-9-_.!~*'():@&=+$,]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*(?:;(?:[a-z0-9-_.!~*'():@&=+$,]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*)*(?:/(?:[a-z0-9-_.!~*'():@&=+$,]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*(?:;(?:[a-z0-9-_.!~*'():@&=+$,]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*)*)*)?");
  var hier_part = (("(?:" + net_path) + "|(/(?:[a-z0-9-_.!~*'():@&=+$,]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*(?:;(?:[a-z0-9-_.!~*'():@&=+$,]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*)*(?:/(?:[a-z0-9-_.!~*'():@&=+$,]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*(?:;(?:[a-z0-9-_.!~*'():@&=+$,]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*)*)*))(?:\\?((?:[;/?:@&=+$,\\[\\]a-z0-9-_.!~*'()]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*))?");
  var absoluteURI = (("([a-z][a-z0-9+-.]*):(?:(" + hier_part) + ")|((?:[a-z0-9-_.!~*'();?:@&=+$,]|%[a-f0-9]{2})(?:[;/?:@&=+$,\\[\\]a-z0-9-_.!~*'()]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*))");
  var relativeURI = (("((?:" + net_path) + "|(/(?:[a-z0-9-_.!~*'():@&=+$,]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*(?:;(?:[a-z0-9-_.!~*'():@&=+$,]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*)*(?:/(?:[a-z0-9-_.!~*'():@&=+$,]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*(?:;(?:[a-z0-9-_.!~*'():@&=+$,]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*)*)*)|((?:[a-z0-9-_.!~*'();@&=+$,]|%[a-f0-9]{2})*(?:/(?:[a-z0-9-_.!~*'():@&=+$,]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*(?:;(?:[a-z0-9-_.!~*'():@&=+$,]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*)*(?:/(?:[a-z0-9-_.!~*'():@&=+$,]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*(?:;(?:[a-z0-9-_.!~*'():@&=+$,]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*)*)*)?))(?:\\?((?:[;/?:@&=+$,\\[\\]a-z0-9-_.!~*'()]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*))?)");
  var uriRef = (((("^(?:" + absoluteURI) + "|") + relativeURI) + ")(?:#((?:[;/?:@&=+$,\\[\\]a-z0-9-_.!~*'()]|%[a-f0-9]{2}|[^\u0000-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029])*))?$");
  this.Ljava_net_URI$__f_java$net$URI$$uriRe = new RegExp(uriRef, "i");
  new RegExp("[\u0000- \"#/<>?@\\[-\\^`{-}\u007f-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029]|%(?![0-9a-f]{2})", "ig");
  new RegExp("[\u0000- \"#<>?\\[-\\^`{-}\u007f-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029]|%(?![0-9a-f]{2})", "ig");
  new RegExp("[\u0000- \"#/<>?\\^`{-}\u007f-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029]|%(?![0-9a-f]{2})", "ig");
  new RegExp("[\u0000- \"#<>@\\^`{-}\u007f-\u00a0\u1680\u2000-\u200a\u202f\u205f\u3000\u2028\u2029]|%(?![0-9a-f]{2})", "ig");
  new RegExp("[^\u0000-\u007f]+", "g")
}
$c_Ljava_net_URI$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Ljava_net_URI$.prototype.constructor = $c_Ljava_net_URI$;
/** @constructor */
function $h_Ljava_net_URI$() {
  /*<skip>*/
}
$h_Ljava_net_URI$.prototype = $c_Ljava_net_URI$.prototype;
$c_Ljava_net_URI$.prototype.java$net$URI$$caseInsensitiveCompare__T__T__I = (function(x, y) {
  return ((x === null) ? ((y === null) ? 0 : (-1)) : ((y === null) ? 1 : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_T__compareToIgnoreCase__T__I($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x), y)))
});
$c_Ljava_net_URI$.prototype.java$net$URI$$escapeAwareCompare__T__T__I = (function(x, y) {
  return ((x === null) ? ((y === null) ? 0 : (-1)) : ((y === null) ? 1 : $p_Ljava_net_URI$__loop$1__I__T__T__I(this, 0, x, y)))
});
$c_Ljava_net_URI$.prototype.java$net$URI$$normalizeEscapes__T__T = (function(str) {
  if ((str === null)) {
    return null
  } else {
    var i = 0;
    var res = "";
    while (true) {
      var $$x4 = i;
      var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(str);
      if (($$x4 < this$1.length)) {
        var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(str);
        var index = i;
        if (($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$2, index) === 37)) {
          var $$x1 = i;
          var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(str);
          if ((((2 + $$x1) | 0) >= this$3.length)) {
            throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_AssertionError("Invalid escape in URI")
          };
          var $$x2 = res;
          var this$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(str);
          var beginIndex = i;
          var endIndex = ((3 + i) | 0);
          if ((beginIndex < 0)) {
            $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$4, beginIndex)
          };
          if ((endIndex > this$4.length)) {
            $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$4, endIndex)
          };
          if ((endIndex < beginIndex)) {
            $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$4, (-1))
          };
          var this$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(this$4.substring(beginIndex, endIndex)));
          res = (("" + $$x2) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(this$5.toUpperCase()));
          i = ((3 + i) | 0)
        } else {
          var $$x3 = res;
          var this$6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(str);
          var beginIndex$1 = i;
          var endIndex$1 = ((1 + i) | 0);
          if ((beginIndex$1 < 0)) {
            $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$6, beginIndex$1)
          };
          if ((endIndex$1 > this$6.length)) {
            $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$6, endIndex$1)
          };
          if ((endIndex$1 < beginIndex$1)) {
            $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$6, (-1))
          };
          res = (("" + $$x3) + $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(this$6.substring(beginIndex$1, endIndex$1)));
          i = ((1 + i) | 0)
        }
      } else {
        break
      }
    };
    return res
  }
});
var $d_Ljava_net_URI$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Ljava_net_URI$: 0
}, false, "java.net.URI$", {
  Ljava_net_URI$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Ljava_net_URI$.prototype.$classData = $d_Ljava_net_URI$;
var $n_Ljava_net_URI$;
function $m_Ljava_net_URI$() {
  if ((!$n_Ljava_net_URI$)) {
    $n_Ljava_net_URI$ = new $c_Ljava_net_URI$()
  };
  return $n_Ljava_net_URI$
}
/** @constructor */
function $c_ju_concurrent_TimeUnit$() {
  this.ju_concurrent_TimeUnit$__f_NANOSECONDS = null;
  this.ju_concurrent_TimeUnit$__f_MICROSECONDS = null;
  this.ju_concurrent_TimeUnit$__f_MILLISECONDS = null;
  this.ju_concurrent_TimeUnit$__f_SECONDS = null;
  this.ju_concurrent_TimeUnit$__f_MINUTES = null;
  this.ju_concurrent_TimeUnit$__f_HOURS = null;
  this.ju_concurrent_TimeUnit$__f_DAYS = null;
  $n_ju_concurrent_TimeUnit$ = this;
  this.ju_concurrent_TimeUnit$__f_NANOSECONDS = new $c_ju_concurrent_TimeUnit$$anon$1();
  this.ju_concurrent_TimeUnit$__f_MICROSECONDS = new $c_ju_concurrent_TimeUnit$$anon$2();
  this.ju_concurrent_TimeUnit$__f_MILLISECONDS = new $c_ju_concurrent_TimeUnit$$anon$3();
  this.ju_concurrent_TimeUnit$__f_SECONDS = new $c_ju_concurrent_TimeUnit$$anon$4();
  this.ju_concurrent_TimeUnit$__f_MINUTES = new $c_ju_concurrent_TimeUnit$$anon$5();
  this.ju_concurrent_TimeUnit$__f_HOURS = new $c_ju_concurrent_TimeUnit$$anon$6();
  this.ju_concurrent_TimeUnit$__f_DAYS = new $c_ju_concurrent_TimeUnit$$anon$7()
}
$c_ju_concurrent_TimeUnit$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_ju_concurrent_TimeUnit$.prototype.constructor = $c_ju_concurrent_TimeUnit$;
/** @constructor */
function $h_ju_concurrent_TimeUnit$() {
  /*<skip>*/
}
$h_ju_concurrent_TimeUnit$.prototype = $c_ju_concurrent_TimeUnit$.prototype;
$c_ju_concurrent_TimeUnit$.prototype.java$util$concurrent$TimeUnit$$x__J__J__J__J = (function(a, b, max) {
  var ahi = a.RTLong__f_hi;
  var bhi = max.RTLong__f_hi;
  if (((ahi === bhi) ? (((-2147483648) ^ a.RTLong__f_lo) > ((-2147483648) ^ max.RTLong__f_lo)) : (ahi > bhi))) {
    return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong((-1), 2147483647)
  } else {
    var lo = max.RTLong__f_lo;
    var hi = max.RTLong__f_hi;
    var lo$1 = ((-lo) | 0);
    var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
    var ahi$1 = a.RTLong__f_hi;
    if (((ahi$1 === hi$1) ? (((-2147483648) ^ a.RTLong__f_lo) < ((-2147483648) ^ lo$1)) : (ahi$1 < hi$1))) {
      return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(1, (-2147483648))
    } else {
      var alo = a.RTLong__f_lo;
      var blo = b.RTLong__f_lo;
      var a0 = (65535 & alo);
      var a1 = ((alo >>> 16) | 0);
      var b0 = (65535 & blo);
      var b1 = ((blo >>> 16) | 0);
      var a0b0 = Math.imul(a0, b0);
      var a1b0 = Math.imul(a1, b0);
      var a0b1 = Math.imul(a0, b1);
      var lo$2 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
      var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
      var hi$2 = ((((((((Math.imul(alo, b.RTLong__f_hi) + Math.imul(a.RTLong__f_hi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
      return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo$2, hi$2)
    }
  }
});
var $d_ju_concurrent_TimeUnit$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  ju_concurrent_TimeUnit$: 0
}, false, "java.util.concurrent.TimeUnit$", {
  ju_concurrent_TimeUnit$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_concurrent_TimeUnit$.prototype.$classData = $d_ju_concurrent_TimeUnit$;
var $n_ju_concurrent_TimeUnit$;
function $m_ju_concurrent_TimeUnit$() {
  if ((!$n_ju_concurrent_TimeUnit$)) {
    $n_ju_concurrent_TimeUnit$ = new $c_ju_concurrent_TimeUnit$()
  };
  return $n_ju_concurrent_TimeUnit$
}
function $p_s_concurrent_duration_Duration$__words__T__sci_List($thiz, s) {
  var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_Predef$();
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_T__trim__T($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(s)));
  var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x1).wrapRefArray__AO__scm_ArraySeq$ofRef($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_T__split__T__I__AT(this$1, "\\s+", 0)));
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_List$();
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(this$2)
}
function $p_s_concurrent_duration_Duration$__expandLabels__T__sci_List($thiz, labels) {
  var x1 = $p_s_concurrent_duration_Duration$__words__T__sci_List($thiz, labels);
  if ((!(x1 instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon))) {
    throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(x1)
  };
  var x2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_$colon$colon(x1);
  var hd = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x2).sci_$colon$colon__f_head);
  var rest = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x2).sci_$colon$colon__f_next;
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(rest);
  var rest$1 = this$1;
  var h = null;
  var t = null;
  while ((rest$1 !== $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$())) {
    var arg1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(rest$1).head__O();
    var s = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(arg1);
    $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_package$().s_package$__f_List);
    var array = [s, (s + "s")];
    var elems = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_WrappedVarArgs(), array);
    var it = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems)).iterator__sc_Iterator();
    while ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(it).hasNext__Z()) {
      var nx = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(it).next__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
      if ((t === null)) {
        h = nx
      } else {
        $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(t).sci_$colon$colon__f_next = nx
      };
      t = nx
    };
    rest$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(rest$1).tail__O())
  };
  var this$6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(((h === null) ? $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$() : h));
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon(hd, this$6)
}
/** @constructor */
function $c_s_concurrent_duration_Duration$() {
  this.s_concurrent_duration_Duration$__f_timeUnitLabels = null;
  this.s_concurrent_duration_Duration$__f_timeUnitName = null;
  this.s_concurrent_duration_Duration$__f_timeUnit = null;
  this.s_concurrent_duration_Duration$__f_Undefined = null;
  this.s_concurrent_duration_Duration$__f_Inf = null;
  this.s_concurrent_duration_Duration$__f_MinusInf = null;
  $n_s_concurrent_duration_Duration$ = this;
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_package$().s_package$__f_List);
  var self = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_DAYS;
  var $$x6 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2(self, "d day");
  var self$1 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_HOURS;
  var $$x5 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2(self$1, "h hr hour");
  var self$2 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_MINUTES;
  var $$x4 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2(self$2, "m min minute");
  var self$3 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_SECONDS;
  var $$x3 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2(self$3, "s sec second");
  var self$4 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_MILLISECONDS;
  var $$x2 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2(self$4, "ms milli millisecond");
  var self$5 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_MICROSECONDS;
  var $$x1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2(self$5, "\u00b5s micro microsecond");
  var self$6 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_NANOSECONDS;
  var array = [$$x6, $$x5, $$x4, $$x3, $$x2, $$x1, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2(self$6, "ns nano nanosecond")];
  var elems = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_sjsr_WrappedVarArgs__sjs_js_Array__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_WrappedVarArgs(), array);
  this.s_concurrent_duration_Duration$__f_timeUnitLabels = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$().prependedAll__sc_IterableOnce__sci_List(elems);
  var this$20 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.s_concurrent_duration_Duration$__f_timeUnitLabels);
  var this$19 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_$less$colon$less$();
  var this$21 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Map$().from__sc_IterableOnce__sci_Map(this$20));
  var this$23 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sc_MapView$Id(this$21);
  var f = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((s$2) => {
    var s = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(s$2);
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($p_s_concurrent_duration_Duration$__words__T__sci_List($m_s_concurrent_duration_Duration$(), s)).last__O())
  }));
  var this$25 = new $c_sc_MapView$MapValues(this$23, f);
  var this$24 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_$less$colon$less$();
  this.s_concurrent_duration_Duration$__f_timeUnitName = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Map$().from__sc_IterableOnce__sci_Map(this$25);
  var this$26 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.s_concurrent_duration_Duration$__f_timeUnitLabels);
  var rest = this$26;
  var h = null;
  var t = null;
  while ((rest !== $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$())) {
    var arg1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(rest).head__O();
    var x0$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T2(arg1);
    if ((x0$1 === null)) {
      throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(x0$1)
    };
    var unit = $as_ju_concurrent_TimeUnit($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x0$1)._1__O());
    var names = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x0$1)._2__O());
    var this$30 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($p_s_concurrent_duration_Duration$__expandLabels__T__sci_List($m_s_concurrent_duration_Duration$(), names));
    var f$1 = ((unit) => ((x$5$2) => {
      var x$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(x$5$2);
      return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2(x$5, unit)
    }))(unit);
    if ((this$30 === $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$())) {
      var $$x7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$()
    } else {
      var arg1$1 = this$30.head__O();
      var h$1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon(f$1(arg1$1), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
      var t$1 = h$1;
      var rest$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List(this$30.tail__O());
      while ((rest$1 !== $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$())) {
        var arg1$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(rest$1).head__O();
        var nx = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon(f$1(arg1$2), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
        $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(t$1).sci_$colon$colon__f_next = nx;
        t$1 = nx;
        rest$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(rest$1).tail__O())
      };
      var $$x7 = h$1
    };
    var it = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x7).iterator__sc_Iterator();
    while ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(it).hasNext__Z()) {
      var nx$1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sci_$colon$colon($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(it).next__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$());
      if ((t === null)) {
        h = nx$1
      } else {
        $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(t).sci_$colon$colon__f_next = nx$1
      };
      t = nx$1
    };
    rest = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_sci_List($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(rest).tail__O())
  };
  var this$32 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(((h === null) ? $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Nil$() : h));
  var this$31 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_$less$colon$less$();
  this.s_concurrent_duration_Duration$__f_timeUnit = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Map$().from__sc_IterableOnce__sci_Map(this$32);
  new $c_s_concurrent_duration_FiniteDuration($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$L0, $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_DAYS);
  this.s_concurrent_duration_Duration$__f_Undefined = new $c_s_concurrent_duration_Duration$$anon$1();
  this.s_concurrent_duration_Duration$__f_Inf = new $c_s_concurrent_duration_Duration$$anon$2();
  this.s_concurrent_duration_Duration$__f_MinusInf = new $c_s_concurrent_duration_Duration$$anon$3()
}
$c_s_concurrent_duration_Duration$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_s_concurrent_duration_Duration$.prototype.constructor = $c_s_concurrent_duration_Duration$;
/** @constructor */
function $h_s_concurrent_duration_Duration$() {
  /*<skip>*/
}
$h_s_concurrent_duration_Duration$.prototype = $c_s_concurrent_duration_Duration$.prototype;
$c_s_concurrent_duration_Duration$.prototype.apply__D__ju_concurrent_TimeUnit__s_concurrent_duration_Duration = (function(length, unit) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(unit).toNanos__J__J(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(1, 0));
  return this.fromNanos__D__s_concurrent_duration_Duration(($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this$1.RTLong__f_lo, this$1.RTLong__f_hi) * length))
});
$c_s_concurrent_duration_Duration$.prototype.apply__T__s_concurrent_duration_Duration = (function(s) {
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_StringOps$();
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_StringOps$();
  var this$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(s);
  var len = this$4.length;
  var sb = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_StringBuilder__I__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_StringBuilder(), len);
  var i = 0;
  while ((i < len)) {
    var this$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(s);
    var index = i;
    var x = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$5, index);
    var this$8 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_jl_Character$();
    if ((!this$8.isWhitespace__I__Z(x))) {
      var str = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(String.fromCharCode(x));
      sb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + sb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str)
    };
    i = ((1 + i) | 0)
  };
  var s1 = ((len === sb.length__I()) ? s : sb.jl_StringBuilder__f_java$lang$StringBuilder$$content);
  switch (s1) {
    case "Inf":
    case "PlusInf":
    case "+Inf":
    case "Duration.Inf": {
      return this.s_concurrent_duration_Duration$__f_Inf;
      break
    }
    case "MinusInf":
    case "-Inf":
    case "Duration.MinusInf": {
      return this.s_concurrent_duration_Duration$__f_MinusInf;
      break
    }
    case "Duration.Undefined": {
      return this.s_concurrent_duration_Duration$__f_Undefined;
      break
    }
    default: {
      var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_StringOps$();
      $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_StringOps$();
      var x$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_StringOps$().reverse$extension__T__T(s1);
      $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_StringOps$();
      $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_StringOps$();
      var from = 0;
      _return: {
        var this$14 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1);
        var len$1 = this$14.length;
        var i$1 = from;
        while ((i$1 < len$1)) {
          var this$15 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1);
          var index$1 = i$1;
          var arg1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$15, index$1);
          var this$18 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_jl_Character$();
          if ((!this$18.isLetter__I__Z(arg1))) {
            var x1 = i$1;
            break _return
          };
          i$1 = ((1 + i$1) | 0)
        };
        var x1 = (-1)
      };
      if ((x1 === (-1))) {
        var x$2 = x$1
      } else {
        var this$19 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$1);
        if ((x1 > this$19.length)) {
          $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$19, x1)
        };
        if ((x1 < 0)) {
          $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$charAt(this$19, (-1))
        };
        var x$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(this$19.substring(0, x1))
      };
      var unitName = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x1).reverse$extension__T__T(x$2);
      var x1$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.s_concurrent_duration_Duration$__f_timeUnit).get__O__s_Option(unitName);
      if ((x1$2 instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some)) {
        var x2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_s_Some(x1$2);
        var unit = $as_ju_concurrent_TimeUnit($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x2).s_Some__f_value);
        var $$x2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_StringOps$();
        var this$22 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(unitName);
        var valueStr = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x2).dropRight$extension__T__I__T(s1, this$22.length);
        var this$23 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($m_sc_StringParsers$().parseLong__T__s_Option(valueStr));
        if (this$23.isEmpty__Z()) {
          var $$x3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$()
        } else {
          var arg1$1 = this$23.get__O();
          var t = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uJ(arg1$1);
          var lo = t.RTLong__f_lo;
          var hi = t.RTLong__f_hi;
          $m_s_concurrent_duration_Duration$();
          var $$x3 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some(new $c_s_concurrent_duration_FiniteDuration(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi), unit))
        };
        var this$25 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x3);
        return $as_s_concurrent_duration_Duration((this$25.isEmpty__Z() ? $m_s_concurrent_duration_Duration$().apply__D__ju_concurrent_TimeUnit__s_concurrent_duration_Duration($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_jl_Double$().parseDouble__T__D(valueStr), unit) : this$25.get__O()))
      } else {
        throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_NumberFormatException(("format error " + s))
      }
    }
  }
});
$c_s_concurrent_duration_Duration$.prototype.fromNanos__D__s_concurrent_duration_Duration = (function(nanos) {
  if (((nanos === Infinity) || (nanos === (-Infinity)))) {
    return ((nanos > 0.0) ? this.s_concurrent_duration_Duration$__f_Inf : this.s_concurrent_duration_Duration$__f_MinusInf)
  } else if ((nanos !== nanos)) {
    return this.s_concurrent_duration_Duration$__f_Undefined
  } else if (((nanos > 9.223372036854776E18) || (nanos < (-9.223372036854776E18)))) {
    throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_IllegalArgumentException__T__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_IllegalArgumentException(), (("trying to construct too large duration with " + nanos) + "ns"))
  } else {
    var this$8 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
    var value = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uD(Math.round(nanos));
    var lo = this$8.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
    var hi = this$8.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    return this.fromNanos__J__s_concurrent_duration_FiniteDuration(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi))
  }
});
$c_s_concurrent_duration_Duration$.prototype.fromNanos__J__s_concurrent_duration_FiniteDuration = (function(nanos) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.remainderImpl__I__I__I__I__I(nanos.RTLong__f_lo, nanos.RTLong__f_hi, (-1857093632), 20116);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  if (((lo === 0) && (hi === 0))) {
    $m_s_concurrent_duration_Duration$();
    var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
    var lo$1 = this$2.divideImpl__I__I__I__I__I(nanos.RTLong__f_lo, nanos.RTLong__f_hi, (-1857093632), 20116);
    var hi$1 = this$2.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    var unit = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_DAYS;
    return new $c_s_concurrent_duration_FiniteDuration(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo$1, hi$1), unit)
  } else {
    var this$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
    var lo$2 = this$4.remainderImpl__I__I__I__I__I(nanos.RTLong__f_lo, nanos.RTLong__f_hi, 817405952, 838);
    var hi$2 = this$4.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
    if (((lo$2 === 0) && (hi$2 === 0))) {
      $m_s_concurrent_duration_Duration$();
      var this$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
      var lo$3 = this$5.divideImpl__I__I__I__I__I(nanos.RTLong__f_lo, nanos.RTLong__f_hi, 817405952, 838);
      var hi$3 = this$5.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      var unit$1 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_HOURS;
      return new $c_s_concurrent_duration_FiniteDuration(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo$3, hi$3), unit$1)
    } else {
      var this$7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
      var lo$4 = this$7.remainderImpl__I__I__I__I__I(nanos.RTLong__f_lo, nanos.RTLong__f_hi, (-129542144), 13);
      var hi$4 = this$7.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      if (((lo$4 === 0) && (hi$4 === 0))) {
        $m_s_concurrent_duration_Duration$();
        var this$8 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
        var lo$5 = this$8.divideImpl__I__I__I__I__I(nanos.RTLong__f_lo, nanos.RTLong__f_hi, (-129542144), 13);
        var hi$5 = this$8.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        var unit$2 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_MINUTES;
        return new $c_s_concurrent_duration_FiniteDuration(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo$5, hi$5), unit$2)
      } else {
        var this$10 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
        var lo$6 = this$10.remainderImpl__I__I__I__I__I(nanos.RTLong__f_lo, nanos.RTLong__f_hi, 1000000000, 0);
        var hi$6 = this$10.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        if (((lo$6 === 0) && (hi$6 === 0))) {
          $m_s_concurrent_duration_Duration$();
          var this$11 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
          var lo$7 = this$11.divideImpl__I__I__I__I__I(nanos.RTLong__f_lo, nanos.RTLong__f_hi, 1000000000, 0);
          var hi$7 = this$11.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
          var unit$3 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_SECONDS;
          return new $c_s_concurrent_duration_FiniteDuration(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo$7, hi$7), unit$3)
        } else {
          var this$13 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
          var lo$8 = this$13.remainderImpl__I__I__I__I__I(nanos.RTLong__f_lo, nanos.RTLong__f_hi, 1000000, 0);
          var hi$8 = this$13.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
          if (((lo$8 === 0) && (hi$8 === 0))) {
            $m_s_concurrent_duration_Duration$();
            var this$14 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
            var lo$9 = this$14.divideImpl__I__I__I__I__I(nanos.RTLong__f_lo, nanos.RTLong__f_hi, 1000000, 0);
            var hi$9 = this$14.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
            var unit$4 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_MILLISECONDS;
            return new $c_s_concurrent_duration_FiniteDuration(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo$9, hi$9), unit$4)
          } else {
            var this$16 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
            var lo$10 = this$16.remainderImpl__I__I__I__I__I(nanos.RTLong__f_lo, nanos.RTLong__f_hi, 1000, 0);
            var hi$10 = this$16.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
            if (((lo$10 === 0) && (hi$10 === 0))) {
              $m_s_concurrent_duration_Duration$();
              var this$17 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
              var lo$11 = this$17.divideImpl__I__I__I__I__I(nanos.RTLong__f_lo, nanos.RTLong__f_hi, 1000, 0);
              var hi$11 = this$17.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
              var unit$5 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_MICROSECONDS;
              return new $c_s_concurrent_duration_FiniteDuration(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo$11, hi$11), unit$5)
            } else {
              $m_s_concurrent_duration_Duration$();
              var unit$6 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_NANOSECONDS;
              return new $c_s_concurrent_duration_FiniteDuration(nanos, unit$6)
            }
          }
        }
      }
    }
  }
});
var $d_s_concurrent_duration_Duration$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  s_concurrent_duration_Duration$: 0
}, false, "scala.concurrent.duration.Duration$", {
  s_concurrent_duration_Duration$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_concurrent_duration_Duration$.prototype.$classData = $d_s_concurrent_duration_Duration$;
var $n_s_concurrent_duration_Duration$;
function $m_s_concurrent_duration_Duration$() {
  if ((!$n_s_concurrent_duration_Duration$)) {
    $n_s_concurrent_duration_Duration$ = new $c_s_concurrent_duration_Duration$()
  };
  return $n_s_concurrent_duration_Duration$
}
/** @constructor */
function $c_Lscopt_OParser$$anon$1() {
  /*<skip>*/
}
$c_Lscopt_OParser$$anon$1.prototype = new $h_Lscopt_OParserBuilder();
$c_Lscopt_OParser$$anon$1.prototype.constructor = $c_Lscopt_OParser$$anon$1;
/** @constructor */
function $h_Lscopt_OParser$$anon$1() {
  /*<skip>*/
}
$h_Lscopt_OParser$$anon$1.prototype = $c_Lscopt_OParser$$anon$1.prototype;
var $d_Lscopt_OParser$$anon$1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_OParser$$anon$1: 0
}, false, "scopt.OParser$$anon$1", {
  Lscopt_OParser$$anon$1: 1,
  Lscopt_OParserBuilder: 1,
  O: 1
});
$c_Lscopt_OParser$$anon$1.prototype.$classData = $d_Lscopt_OParser$$anon$1;
/** @constructor */
function $c_Lscopt_OptionDefCallback$$anon$1() {
  /*<skip>*/
}
$c_Lscopt_OptionDefCallback$$anon$1.prototype = new $h_Lscopt_OptionDefCallback();
$c_Lscopt_OptionDefCallback$$anon$1.prototype.constructor = $c_Lscopt_OptionDefCallback$$anon$1;
/** @constructor */
function $h_Lscopt_OptionDefCallback$$anon$1() {
  /*<skip>*/
}
$h_Lscopt_OptionDefCallback$$anon$1.prototype = $c_Lscopt_OptionDefCallback$$anon$1.prototype;
var $d_Lscopt_OptionDefCallback$$anon$1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_OptionDefCallback$$anon$1: 0
}, false, "scopt.OptionDefCallback$$anon$1", {
  Lscopt_OptionDefCallback$$anon$1: 1,
  Lscopt_OptionDefCallback: 1,
  O: 1
});
$c_Lscopt_OptionDefCallback$$anon$1.prototype.$classData = $d_Lscopt_OptionDefCallback$$anon$1;
function $p_Lscopt_Read$__fixedPointWithRadix__T__T2($thiz, str) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(str);
  var x5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(this$1.toLowerCase());
  var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x5);
  if (((this$2.length >= 0) && ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(this$2.substring(0, 2)) === "0x"))) {
    var _1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_StringOps$().stripPrefix$extension__T__T__T(x5, "0x");
    return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2(_1, 16)
  };
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2(x5, 10)
}
function $p_Lscopt_Read$__liftedTree1$1__F1($thiz) {
  try {
    return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$5) => {
      var _$5$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(_$5);
      return $m_s_concurrent_duration_Duration$().apply__T__s_concurrent_duration_Duration(_$5$1)
    }))
  } catch (e) {
    if ((e instanceof $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_NumberFormatException)) {
      var e$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_jl_NumberFormatException(e);
      $m_Lscopt_platform$();
      var s = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(e$2).jl_Throwable__f_s;
      var x = new $c_Lscopt_ParseException(s, (-1));
      throw x
    } else {
      throw e
    }
  }
}
/** @constructor */
function $c_Lscopt_Read$() {
  this.Lscopt_Read$__f_stringRead = null;
  this.Lscopt_Read$__f_intRead = null;
  this.Lscopt_Read$__f_durationRead = null;
  this.Lscopt_Read$__f_unitRead = null;
  $n_Lscopt_Read$ = this;
  var f = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((x) => {
    var x$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(x);
    return x$1
  }));
  this.Lscopt_Read$__f_stringRead = new $c_Lscopt_Read$$anon$3(f);
  var f$1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$1) => {
    var _$1$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(_$1);
    var x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_T__toCharArray__AC($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$1$1));
    if ((x1 !== null)) {
      if (($m_s_Array$UnapplySeqWrapper$().lengthCompare$extension__O__I__I(x1, 1) === 0)) {
        var x3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x1).get(0);
        return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$bC(x3)
      }
    };
    throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_IllegalArgumentException__T__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_IllegalArgumentException(), (("'" + x1) + "' is not a char."))
  }));
  new $c_Lscopt_Read$$anon$3(f$1);
  var f$2 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$2) => {
    var _$2$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(_$2);
    $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sc_StringOps$();
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_jl_Double$().parseDouble__T__D(_$2$1)
  }));
  new $c_Lscopt_Read$$anon$3(f$2);
  var f$3 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$3) => {
    var _$3$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(_$3);
    var this$7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(_$3$1);
    var x4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(this$7.toLowerCase());
    switch (x4) {
      case "true": {
        return true;
        break
      }
      case "false": {
        return false;
        break
      }
      case "yes": {
        return true;
        break
      }
      case "no": {
        return false;
        break
      }
      case "1": {
        return true;
        break
      }
      case "0": {
        return false;
        break
      }
      default: {
        throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_IllegalArgumentException__T__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_IllegalArgumentException(), (("'" + x4) + "' is not a boolean."))
      }
    }
  }));
  new $c_Lscopt_Read$$anon$3(f$3);
  var f$4 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((str) => {
    var str$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(str);
    matchResult4: {
      var \u03b41$___1;
      var \u03b41$___2;
      var x6 = $p_Lscopt_Read$__fixedPointWithRadix__T__T2(this, str$1);
      if ((x6 !== null)) {
        var s = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x6)._1__O());
        var radix = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uI($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x6)._2__O());
        var \u03b41$___1 = s;
        var \u03b41$___2 = radix;
        break matchResult4
      };
      throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(x6)
    };
    var s$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(\u03b41$___1);
    var radix$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uI(\u03b41$___2);
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_jl_Integer$().parseInt__T__I__I(s$2, radix$2)
  }));
  this.Lscopt_Read$__f_intRead = new $c_Lscopt_Read$$anon$3(f$4);
  var f$5 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((str$2) => {
    var str$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(str$2);
    matchResult5: {
      var \u03b42$___1;
      var \u03b42$___2;
      var x9 = $p_Lscopt_Read$__fixedPointWithRadix__T__T2(this, str$3);
      if ((x9 !== null)) {
        var s$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x9)._1__O());
        var radix$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uI($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x9)._2__O());
        var \u03b42$___1 = s$1;
        var \u03b42$___2 = radix$1;
        break matchResult5
      };
      throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(x9)
    };
    var s$2$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(\u03b42$___1);
    var radix$2$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uI(\u03b42$___2);
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_jl_Long$().parseLong__T__I__J(s$2$1, radix$2$1)
  }));
  new $c_Lscopt_Read$$anon$3(f$5);
  var f$6 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((str$3$1) => {
    var str$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(str$3$1);
    matchResult6: {
      var \u03b43$___1;
      var \u03b43$___2;
      var x12 = $p_Lscopt_Read$__fixedPointWithRadix__T__T2(this, str$4);
      if ((x12 !== null)) {
        var s$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x12)._1__O());
        var radix$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uI($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x12)._2__O());
        var \u03b43$___1 = s$3;
        var \u03b43$___2 = radix$3;
        break matchResult6
      };
      throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(x12)
    };
    var s$2$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(\u03b43$___1);
    var radix$2$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uI(\u03b43$___2);
    return $m_jl_Short$().parseShort__T__I__S(s$2$2, radix$2$2)
  }));
  new $c_Lscopt_Read$$anon$3(f$6);
  var f$7 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((str$4$1) => {
    var str$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(str$4$1);
    matchResult7: {
      var \u03b44$___1;
      var \u03b44$___2;
      var x15 = $p_Lscopt_Read$__fixedPointWithRadix__T__T2(this, str$5);
      if ((x15 !== null)) {
        var s$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x15)._1__O());
        var radix$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uI($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x15)._2__O());
        var \u03b44$___1 = s$4;
        var \u03b44$___2 = radix$4;
        break matchResult7
      };
      throw new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_MatchError(x15)
    };
    var s$2$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(\u03b44$___1);
    var radix$2$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uI(\u03b44$___2);
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_package$().BigInt__s_math_BigInt$()).apply__T__I__s_math_BigInt(s$2$3, radix$2$3)
  }));
  new $c_Lscopt_Read$$anon$3(f$7);
  var f$8 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$4) => {
    var _$4$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(_$4);
    var this$12 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_package$().BigDecimal__s_math_BigDecimal$());
    return this$12.exact__T__s_math_BigDecimal(_$4$1)
  }));
  new $c_Lscopt_Read$$anon$3(f$8);
  var f$9 = $p_Lscopt_Read$__liftedTree1$1__F1(this);
  this.Lscopt_Read$__f_durationRead = new $c_Lscopt_Read$$anon$3(f$9);
  var this$13 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Lscopt_Read$__f_durationRead);
  var f$10 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((x$1$1) => {
    var x$1$2 = $as_s_concurrent_duration_Duration(x$1$1);
    if ((x$1$2 instanceof $c_s_concurrent_duration_FiniteDuration)) {
      var d = $as_s_concurrent_duration_FiniteDuration(x$1$2);
      return d
    } else {
      throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_IllegalArgumentException__T__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_IllegalArgumentException(), (("'" + x$1$2) + "' is not a finite duration."))
    }
  }));
  new $c_Lscopt_Read$$anon$1(f$10, this$13);
  this.Lscopt_Read$__f_unitRead = new $c_Lscopt_Read$$anon$2();
  $m_Lscopt_Read$();
  var f$11 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((_$6) => {
    var _$6$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(_$6);
    return new $c_Ljava_net_URI(_$6$1)
  }));
  new $c_Lscopt_Read$$anon$3(f$11)
}
$c_Lscopt_Read$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_Read$.prototype.constructor = $c_Lscopt_Read$;
/** @constructor */
function $h_Lscopt_Read$() {
  /*<skip>*/
}
$h_Lscopt_Read$.prototype = $c_Lscopt_Read$.prototype;
var $d_Lscopt_Read$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_Read$: 0
}, false, "scopt.Read$", {
  Lscopt_Read$: 1,
  O: 1,
  Lscopt_platform$PlatformReadInstances: 1
});
$c_Lscopt_Read$.prototype.$classData = $d_Lscopt_Read$;
var $n_Lscopt_Read$;
function $m_Lscopt_Read$() {
  if ((!$n_Lscopt_Read$)) {
    $n_Lscopt_Read$ = new $c_Lscopt_Read$()
  };
  return $n_Lscopt_Read$
}
/** @constructor */
function $c_Lscopt_Read$$anon$1(f$1, outer) {
  this.Lscopt_Read$$anon$1__f_arity = 0;
  this.Lscopt_Read$$anon$1__f_reads = null;
  if ((outer === null)) {
    throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_NullPointerException__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_NullPointerException())
  };
  this.Lscopt_Read$$anon$1__f_arity = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(outer).arity__I();
  this.Lscopt_Read$$anon$1__f_reads = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(outer).reads__F1()).andThen__F1__F1(f$1)
}
$c_Lscopt_Read$$anon$1.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_Read$$anon$1.prototype.constructor = $c_Lscopt_Read$$anon$1;
/** @constructor */
function $h_Lscopt_Read$$anon$1() {
  /*<skip>*/
}
$h_Lscopt_Read$$anon$1.prototype = $c_Lscopt_Read$$anon$1.prototype;
$c_Lscopt_Read$$anon$1.prototype.arity__I = (function() {
  return this.Lscopt_Read$$anon$1__f_arity
});
$c_Lscopt_Read$$anon$1.prototype.reads__F1 = (function() {
  return this.Lscopt_Read$$anon$1__f_reads
});
var $d_Lscopt_Read$$anon$1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_Read$$anon$1: 0
}, false, "scopt.Read$$anon$1", {
  Lscopt_Read$$anon$1: 1,
  O: 1,
  Lscopt_Read: 1
});
$c_Lscopt_Read$$anon$1.prototype.$classData = $d_Lscopt_Read$$anon$1;
/** @constructor */
function $c_Lscopt_Read$$anon$2() {
  this.Lscopt_Read$$anon$2__f_arity = 0;
  this.Lscopt_Read$$anon$2__f_reads = null;
  this.Lscopt_Read$$anon$2__f_arity = 0;
  this.Lscopt_Read$$anon$2__f_reads = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((s) => {
    $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(s)
  }))
}
$c_Lscopt_Read$$anon$2.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_Read$$anon$2.prototype.constructor = $c_Lscopt_Read$$anon$2;
/** @constructor */
function $h_Lscopt_Read$$anon$2() {
  /*<skip>*/
}
$h_Lscopt_Read$$anon$2.prototype = $c_Lscopt_Read$$anon$2.prototype;
$c_Lscopt_Read$$anon$2.prototype.arity__I = (function() {
  return this.Lscopt_Read$$anon$2__f_arity
});
$c_Lscopt_Read$$anon$2.prototype.reads__F1 = (function() {
  return this.Lscopt_Read$$anon$2__f_reads
});
var $d_Lscopt_Read$$anon$2 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_Read$$anon$2: 0
}, false, "scopt.Read$$anon$2", {
  Lscopt_Read$$anon$2: 1,
  O: 1,
  Lscopt_Read: 1
});
$c_Lscopt_Read$$anon$2.prototype.$classData = $d_Lscopt_Read$$anon$2;
/** @constructor */
function $c_Lscopt_Read$$anon$3(f$2) {
  this.Lscopt_Read$$anon$3__f_arity = 0;
  this.Lscopt_Read$$anon$3__f_reads = null;
  this.Lscopt_Read$$anon$3__f_arity = 1;
  this.Lscopt_Read$$anon$3__f_reads = f$2
}
$c_Lscopt_Read$$anon$3.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_Read$$anon$3.prototype.constructor = $c_Lscopt_Read$$anon$3;
/** @constructor */
function $h_Lscopt_Read$$anon$3() {
  /*<skip>*/
}
$h_Lscopt_Read$$anon$3.prototype = $c_Lscopt_Read$$anon$3.prototype;
$c_Lscopt_Read$$anon$3.prototype.arity__I = (function() {
  return this.Lscopt_Read$$anon$3__f_arity
});
$c_Lscopt_Read$$anon$3.prototype.reads__F1 = (function() {
  return this.Lscopt_Read$$anon$3__f_reads
});
var $d_Lscopt_Read$$anon$3 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_Read$$anon$3: 0
}, false, "scopt.Read$$anon$3", {
  Lscopt_Read$$anon$3: 1,
  O: 1,
  Lscopt_Read: 1
});
$c_Lscopt_Read$$anon$3.prototype.$classData = $d_Lscopt_Read$$anon$3;
function $p_Ljava_net_URI__comparePathQueryFragement$1__Ljava_net_URI__I($thiz, that$1) {
  var cmpPath = $m_Ljava_net_URI$().java$net$URI$$escapeAwareCompare__T__T__I($thiz.Ljava_net_URI__f__path, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(that$1).Ljava_net_URI__f__path);
  if ((cmpPath !== 0)) {
    return cmpPath
  } else {
    var cmpQuery = $m_Ljava_net_URI$().java$net$URI$$escapeAwareCompare__T__T__I($thiz.Ljava_net_URI__f__query, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(that$1).Ljava_net_URI__f__query);
    return ((cmpQuery !== 0) ? cmpQuery : $m_Ljava_net_URI$().java$net$URI$$escapeAwareCompare__T__T__I($thiz.Ljava_net_URI__f__fragment, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(that$1).Ljava_net_URI__f__fragment))
  }
}
function $p_Ljava_net_URI__normalizeEscapesHash$1__T__I($thiz, str) {
  return ((str === null) ? 0 : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_T__hashCode__I($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($m_Ljava_net_URI$().java$net$URI$$normalizeEscapes__T__T(str))))
}
/** @constructor */
function $c_Ljava_net_URI(origStr) {
  this.Ljava_net_URI__f_origStr = null;
  this.Ljava_net_URI__f_java$net$URI$$_fld = null;
  this.Ljava_net_URI__f_java$net$URI$$_isAbsolute = false;
  this.Ljava_net_URI__f__isOpaque = false;
  this.Ljava_net_URI__f__scheme = null;
  this.Ljava_net_URI__f__schemeSpecificPart = null;
  this.Ljava_net_URI__f__authority = null;
  this.Ljava_net_URI__f__userInfo = null;
  this.Ljava_net_URI__f__host = null;
  this.Ljava_net_URI__f__port = 0;
  this.Ljava_net_URI__f__path = null;
  this.Ljava_net_URI__f__query = null;
  this.Ljava_net_URI__f__fragment = null;
  this.Ljava_net_URI__f_origStr = origStr;
  this.Ljava_net_URI__f_java$net$URI$$_fld = $m_Ljava_net_URI$().Ljava_net_URI$__f_java$net$URI$$uriRe.exec(origStr);
  if ((this.Ljava_net_URI__f_java$net$URI$$_fld === null)) {
    throw $ct_Ljava_net_URISyntaxException__T__T__(new $c_Ljava_net_URISyntaxException(), origStr, "Malformed URI")
  };
  var x = this.Ljava_net_URI__f_java$net$URI$$_fld[1];
  this.Ljava_net_URI__f_java$net$URI$$_isAbsolute = (x !== (void 0));
  var x$1 = this.Ljava_net_URI__f_java$net$URI$$_fld[10];
  this.Ljava_net_URI__f__isOpaque = (x$1 !== (void 0));
  var x$2 = this.Ljava_net_URI__f_java$net$URI$$_fld[1];
  this.Ljava_net_URI__f__scheme = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$2 !== (void 0)) ? x$2 : null));
  if ((!this.Ljava_net_URI__f_java$net$URI$$_isAbsolute)) {
    var x$3 = this.Ljava_net_URI__f_java$net$URI$$_fld[11];
    var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$3 !== (void 0)) ? x$3 : null))
  } else if (this.Ljava_net_URI__f__isOpaque) {
    var x$4 = this.Ljava_net_URI__f_java$net$URI$$_fld[10];
    var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$4 !== (void 0)) ? x$4 : null))
  } else {
    var x$5 = this.Ljava_net_URI__f_java$net$URI$$_fld[2];
    var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$5 !== (void 0)) ? x$5 : null))
  };
  this.Ljava_net_URI__f__schemeSpecificPart = $$x1;
  if (this.Ljava_net_URI__f_java$net$URI$$_isAbsolute) {
    var x$6 = this.Ljava_net_URI__f_java$net$URI$$_fld[3];
    var authPart = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$6 !== (void 0)) ? x$6 : null))
  } else {
    var x$7 = this.Ljava_net_URI__f_java$net$URI$$_fld[12];
    var authPart = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$7 !== (void 0)) ? x$7 : null))
  };
  this.Ljava_net_URI__f__authority = ((authPart === "") ? null : authPart);
  if (this.Ljava_net_URI__f_java$net$URI$$_isAbsolute) {
    var x$8 = this.Ljava_net_URI__f_java$net$URI$$_fld[4];
    var $$x2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$8 !== (void 0)) ? x$8 : null))
  } else {
    var x$9 = this.Ljava_net_URI__f_java$net$URI$$_fld[13];
    var $$x2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$9 !== (void 0)) ? x$9 : null))
  };
  this.Ljava_net_URI__f__userInfo = $$x2;
  if (this.Ljava_net_URI__f_java$net$URI$$_isAbsolute) {
    var x$10 = this.Ljava_net_URI__f_java$net$URI$$_fld[5];
    var $$x3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$10 !== (void 0)) ? x$10 : null))
  } else {
    var x$11 = this.Ljava_net_URI__f_java$net$URI$$_fld[14];
    var $$x3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$11 !== (void 0)) ? x$11 : null))
  };
  this.Ljava_net_URI__f__host = $$x3;
  if (this.Ljava_net_URI__f_java$net$URI$$_isAbsolute) {
    var x$12 = this.Ljava_net_URI__f_java$net$URI$$_fld[6];
    var portPart = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$12 !== (void 0)) ? x$12 : null))
  } else {
    var x$13 = this.Ljava_net_URI__f_java$net$URI$$_fld[15];
    var portPart = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$13 !== (void 0)) ? x$13 : null))
  };
  if ((portPart === null)) {
    var $$x4 = (-1)
  } else {
    var this$15 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_jl_Integer$();
    var $$x4 = this$15.parseInt__T__I__I(portPart, 10)
  };
  this.Ljava_net_URI__f__port = $$x4;
  if (this.Ljava_net_URI__f_java$net$URI$$_isAbsolute) {
    var x$14 = this.Ljava_net_URI__f_java$net$URI$$_fld[3];
    var $$x5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$14 !== (void 0)) ? x$14 : null))
  } else {
    var x$15 = this.Ljava_net_URI__f_java$net$URI$$_fld[12];
    var $$x5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$15 !== (void 0)) ? x$15 : null))
  };
  var useNetPath = ($$x5 !== null);
  if (useNetPath) {
    if (this.Ljava_net_URI__f_java$net$URI$$_isAbsolute) {
      var x$16 = this.Ljava_net_URI__f_java$net$URI$$_fld[7];
      var netPath = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$16 !== (void 0)) ? x$16 : null))
    } else {
      var x$17 = this.Ljava_net_URI__f_java$net$URI$$_fld[16];
      var netPath = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$17 !== (void 0)) ? x$17 : null))
    };
    var $$x6 = ((netPath === null) ? "" : netPath)
  } else if (this.Ljava_net_URI__f_java$net$URI$$_isAbsolute) {
    var x$18 = this.Ljava_net_URI__f_java$net$URI$$_fld[8];
    var $$x6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$18 !== (void 0)) ? x$18 : null))
  } else {
    var x$19 = this.Ljava_net_URI__f_java$net$URI$$_fld[17];
    var relAbsPath = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$19 !== (void 0)) ? x$19 : null));
    if ((relAbsPath !== null)) {
      var $$x6 = relAbsPath
    } else {
      var x$20 = this.Ljava_net_URI__f_java$net$URI$$_fld[18];
      var $$x6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$20 !== (void 0)) ? x$20 : null))
    }
  };
  this.Ljava_net_URI__f__path = $$x6;
  if (this.Ljava_net_URI__f_java$net$URI$$_isAbsolute) {
    var x$21 = this.Ljava_net_URI__f_java$net$URI$$_fld[9];
    var $$x7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$21 !== (void 0)) ? x$21 : null))
  } else {
    var x$22 = this.Ljava_net_URI__f_java$net$URI$$_fld[19];
    var $$x7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$22 !== (void 0)) ? x$22 : null))
  };
  this.Ljava_net_URI__f__query = $$x7;
  var x$23 = this.Ljava_net_URI__f_java$net$URI$$_fld[20];
  this.Ljava_net_URI__f__fragment = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(((x$23 !== (void 0)) ? x$23 : null));
  this.Ljava_net_URI__f_java$net$URI$$_fld = null
}
$c_Ljava_net_URI.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Ljava_net_URI.prototype.constructor = $c_Ljava_net_URI;
/** @constructor */
function $h_Ljava_net_URI() {
  /*<skip>*/
}
$h_Ljava_net_URI.prototype = $c_Ljava_net_URI.prototype;
$c_Ljava_net_URI.prototype.compareTo__Ljava_net_URI__I = (function(that) {
  var cmpScheme = $m_Ljava_net_URI$().java$net$URI$$caseInsensitiveCompare__T__T__I(this.Ljava_net_URI__f__scheme, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(that).Ljava_net_URI__f__scheme);
  if ((cmpScheme !== 0)) {
    return cmpScheme
  } else {
    var x = this.Ljava_net_URI__f__isOpaque;
    var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(that);
    var y = this$1.Ljava_net_URI__f__isOpaque;
    var cmpIsOpaque = ((x === y) ? 0 : (x ? 1 : (-1)));
    if ((cmpIsOpaque !== 0)) {
      return cmpIsOpaque
    } else if (this.Ljava_net_URI__f__isOpaque) {
      var cmpSchemeSpecificPart = $m_Ljava_net_URI$().java$net$URI$$escapeAwareCompare__T__T__I(this.Ljava_net_URI__f__schemeSpecificPart, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(that).Ljava_net_URI__f__schemeSpecificPart);
      return ((cmpSchemeSpecificPart !== 0) ? cmpSchemeSpecificPart : $p_Ljava_net_URI__comparePathQueryFragement$1__Ljava_net_URI__I(this, that))
    } else if (((this.Ljava_net_URI__f__host !== null) && ($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(that).Ljava_net_URI__f__host !== null))) {
      var cmpUserInfo = $m_Ljava_net_URI$().java$net$URI$$escapeAwareCompare__T__T__I(this.Ljava_net_URI__f__userInfo, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(that).Ljava_net_URI__f__userInfo);
      if ((cmpUserInfo !== 0)) {
        return cmpUserInfo
      } else {
        var cmpHost = $m_Ljava_net_URI$().java$net$URI$$caseInsensitiveCompare__T__T__I(this.Ljava_net_URI__f__host, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(that).Ljava_net_URI__f__host);
        if ((cmpHost !== 0)) {
          return cmpHost
        } else {
          var cmpPort = ((this.Ljava_net_URI__f__port - $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(that).Ljava_net_URI__f__port) | 0);
          return ((cmpPort !== 0) ? cmpPort : $p_Ljava_net_URI__comparePathQueryFragement$1__Ljava_net_URI__I(this, that))
        }
      }
    } else {
      var cmpAuthority = $m_Ljava_net_URI$().java$net$URI$$escapeAwareCompare__T__T__I(this.Ljava_net_URI__f__authority, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(that).Ljava_net_URI__f__authority);
      return ((cmpAuthority !== 0) ? cmpAuthority : $p_Ljava_net_URI__comparePathQueryFragement$1__Ljava_net_URI__I(this, that))
    }
  }
});
$c_Ljava_net_URI.prototype.equals__O__Z = (function(that) {
  if ((that instanceof $c_Ljava_net_URI)) {
    var x2 = $as_Ljava_net_URI(that);
    return (this.compareTo__Ljava_net_URI__I(x2) === 0)
  } else {
    return false
  }
});
$c_Ljava_net_URI.prototype.hashCode__I = (function() {
  var acc = 53722356;
  var $$x3 = $m_ju_internal_MurmurHash3$();
  var $$x2 = acc;
  if ((this.Ljava_net_URI__f__scheme === null)) {
    var $$x1 = 0
  } else {
    var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Ljava_net_URI__f__scheme);
    var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_T__hashCode__I($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(this$1.toLowerCase())))
  };
  acc = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x3).mix__I__I__I($$x2, $$x1);
  if (this.Ljava_net_URI__f__isOpaque) {
    acc = $m_ju_internal_MurmurHash3$().mix__I__I__I(acc, $p_Ljava_net_URI__normalizeEscapesHash$1__T__I(this, this.Ljava_net_URI__f__schemeSpecificPart))
  } else if ((this.Ljava_net_URI__f__host !== null)) {
    acc = $m_ju_internal_MurmurHash3$().mix__I__I__I(acc, $p_Ljava_net_URI__normalizeEscapesHash$1__T__I(this, this.Ljava_net_URI__f__userInfo));
    var $$x5 = $m_ju_internal_MurmurHash3$();
    var $$x4 = acc;
    var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.Ljava_net_URI__f__host);
    acc = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x5).mix__I__I__I($$x4, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_T__hashCode__I($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T(this$2.toLowerCase()))));
    var $$x7 = $m_ju_internal_MurmurHash3$();
    var $$x6 = acc;
    var this$3 = this.Ljava_net_URI__f__port;
    acc = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($$x7).mix__I__I__I($$x6, this$3)
  } else {
    acc = $m_ju_internal_MurmurHash3$().mix__I__I__I(acc, $p_Ljava_net_URI__normalizeEscapesHash$1__T__I(this, this.Ljava_net_URI__f__authority))
  };
  acc = $m_ju_internal_MurmurHash3$().mix__I__I__I(acc, $p_Ljava_net_URI__normalizeEscapesHash$1__T__I(this, this.Ljava_net_URI__f__path));
  acc = $m_ju_internal_MurmurHash3$().mix__I__I__I(acc, $p_Ljava_net_URI__normalizeEscapesHash$1__T__I(this, this.Ljava_net_URI__f__query));
  acc = $m_ju_internal_MurmurHash3$().mixLast__I__I__I(acc, $p_Ljava_net_URI__normalizeEscapesHash$1__T__I(this, this.Ljava_net_URI__f__fragment));
  return $m_ju_internal_MurmurHash3$().finalizeHash__I__I__I(acc, 3)
});
$c_Ljava_net_URI.prototype.toString__T = (function() {
  return this.Ljava_net_URI__f_origStr
});
$c_Ljava_net_URI.prototype.compareTo__O__I = (function(o) {
  return this.compareTo__Ljava_net_URI__I($as_Ljava_net_URI(o))
});
function $as_Ljava_net_URI(obj) {
  return (((obj instanceof $c_Ljava_net_URI) || (obj === null)) ? obj : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$throwClassCastException(obj, "java.net.URI"))
}
function $isArrayOf_Ljava_net_URI(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Ljava_net_URI)))
}
function $asArrayOf_Ljava_net_URI(obj, depth) {
  return (($isArrayOf_Ljava_net_URI(obj, depth) || (obj === null)) ? obj : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$throwArrayCastException(obj, "Ljava.net.URI;", depth))
}
var $d_Ljava_net_URI = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Ljava_net_URI: 0
}, false, "java.net.URI", {
  Ljava_net_URI: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
});
$c_Ljava_net_URI.prototype.$classData = $d_Ljava_net_URI;
function $ct_ju_concurrent_atomic_AtomicInteger__I__($thiz, value) {
  $thiz.ju_concurrent_atomic_AtomicInteger__f_java$util$concurrent$atomic$AtomicInteger$$value = value;
  return $thiz
}
function $ct_ju_concurrent_atomic_AtomicInteger__($thiz) {
  $ct_ju_concurrent_atomic_AtomicInteger__I__($thiz, 0);
  return $thiz
}
/** @constructor */
function $c_ju_concurrent_atomic_AtomicInteger() {
  this.ju_concurrent_atomic_AtomicInteger__f_java$util$concurrent$atomic$AtomicInteger$$value = 0
}
$c_ju_concurrent_atomic_AtomicInteger.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_jl_Number();
$c_ju_concurrent_atomic_AtomicInteger.prototype.constructor = $c_ju_concurrent_atomic_AtomicInteger;
/** @constructor */
function $h_ju_concurrent_atomic_AtomicInteger() {
  /*<skip>*/
}
$h_ju_concurrent_atomic_AtomicInteger.prototype = $c_ju_concurrent_atomic_AtomicInteger.prototype;
$c_ju_concurrent_atomic_AtomicInteger.prototype.toString__T = (function() {
  var this$1 = this.ju_concurrent_atomic_AtomicInteger__f_java$util$concurrent$atomic$AtomicInteger$$value;
  return ("" + this$1)
});
var $d_ju_concurrent_atomic_AtomicInteger = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  ju_concurrent_atomic_AtomicInteger: 0
}, false, "java.util.concurrent.atomic.AtomicInteger", {
  ju_concurrent_atomic_AtomicInteger: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_concurrent_atomic_AtomicInteger.prototype.$classData = $d_ju_concurrent_atomic_AtomicInteger;
function $ct_Ljava_net_URISyntaxException__T__T__I__($thiz, input, reason, index) {
  var s = ((((reason + " in ") + input) + " at ") + index);
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
}
function $ct_Ljava_net_URISyntaxException__T__T__($thiz, input, reason) {
  $ct_Ljava_net_URISyntaxException__T__T__I__($thiz, input, reason, (-1));
  return $thiz
}
class $c_Ljava_net_URISyntaxException extends $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_Exception {
}
var $d_Ljava_net_URISyntaxException = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Ljava_net_URISyntaxException: 0
}, false, "java.net.URISyntaxException", {
  Ljava_net_URISyntaxException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Ljava_net_URISyntaxException.prototype.$classData = $d_Ljava_net_URISyntaxException;
/** @constructor */
function $c_ju_concurrent_TimeUnit() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0
}
$c_ju_concurrent_TimeUnit.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_jl_Enum();
$c_ju_concurrent_TimeUnit.prototype.constructor = $c_ju_concurrent_TimeUnit;
/** @constructor */
function $h_ju_concurrent_TimeUnit() {
  /*<skip>*/
}
$h_ju_concurrent_TimeUnit.prototype = $c_ju_concurrent_TimeUnit.prototype;
function $as_ju_concurrent_TimeUnit(obj) {
  return (((obj instanceof $c_ju_concurrent_TimeUnit) || (obj === null)) ? obj : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$throwClassCastException(obj, "java.util.concurrent.TimeUnit"))
}
function $isArrayOf_ju_concurrent_TimeUnit(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.ju_concurrent_TimeUnit)))
}
function $asArrayOf_ju_concurrent_TimeUnit(obj, depth) {
  return (($isArrayOf_ju_concurrent_TimeUnit(obj, depth) || (obj === null)) ? obj : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$throwArrayCastException(obj, "Ljava.util.concurrent.TimeUnit;", depth))
}
/** @constructor */
function $c_s_concurrent_duration_Duration() {
  /*<skip>*/
}
$c_s_concurrent_duration_Duration.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_s_concurrent_duration_Duration.prototype.constructor = $c_s_concurrent_duration_Duration;
/** @constructor */
function $h_s_concurrent_duration_Duration() {
  /*<skip>*/
}
$h_s_concurrent_duration_Duration.prototype = $c_s_concurrent_duration_Duration.prototype;
$c_s_concurrent_duration_Duration.prototype.$less__O__Z = (function(that) {
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_s_math_Ordered__$less__O__Z(this, that)
});
$c_s_concurrent_duration_Duration.prototype.$greater$eq__O__Z = (function(that) {
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$f_s_math_Ordered__$greater$eq__O__Z(this, that)
});
$c_s_concurrent_duration_Duration.prototype.compareTo__O__I = (function(that) {
  return this.compare__s_concurrent_duration_Duration__I($as_s_concurrent_duration_Duration(that))
});
function $as_s_concurrent_duration_Duration(obj) {
  return (((obj instanceof $c_s_concurrent_duration_Duration) || (obj === null)) ? obj : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$throwClassCastException(obj, "scala.concurrent.duration.Duration"))
}
function $isArrayOf_s_concurrent_duration_Duration(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_duration_Duration)))
}
function $asArrayOf_s_concurrent_duration_Duration(obj, depth) {
  return (($isArrayOf_s_concurrent_duration_Duration(obj, depth) || (obj === null)) ? obj : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$throwArrayCastException(obj, "Lscala.concurrent.duration.Duration;", depth))
}
class $c_Lscopt_ParseException extends $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_Exception {
  constructor(s, errorOffset) {
    super();
    $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
var $d_Lscopt_ParseException = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_ParseException: 0
}, false, "scopt.ParseException", {
  Lscopt_ParseException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lscopt_ParseException.prototype.$classData = $d_Lscopt_ParseException;
function $as_Lvyxal_CLI$CLIConfig(obj) {
  return ((false || (obj === null)) ? obj : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$throwClassCastException(obj, "vyxal.CLI$CLIConfig"))
}
function $isArrayOf_Lvyxal_CLI$CLIConfig(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lvyxal_CLI$CLIConfig)))
}
function $asArrayOf_Lvyxal_CLI$CLIConfig(obj, depth) {
  return (($isArrayOf_Lvyxal_CLI$CLIConfig(obj, depth) || (obj === null)) ? obj : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$throwArrayCastException(obj, "Lvyxal.CLI$CLIConfig;", depth))
}
/** @constructor */
function $c_ju_concurrent_TimeUnit$$anon$1() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_Enum__T__I__(this, "NANOSECONDS", 0)
}
$c_ju_concurrent_TimeUnit$$anon$1.prototype = new $h_ju_concurrent_TimeUnit();
$c_ju_concurrent_TimeUnit$$anon$1.prototype.constructor = $c_ju_concurrent_TimeUnit$$anon$1;
/** @constructor */
function $h_ju_concurrent_TimeUnit$$anon$1() {
  /*<skip>*/
}
$h_ju_concurrent_TimeUnit$$anon$1.prototype = $c_ju_concurrent_TimeUnit$$anon$1.prototype;
$c_ju_concurrent_TimeUnit$$anon$1.prototype.convert__J__ju_concurrent_TimeUnit__J = (function(a, u) {
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(u).toNanos__J__J(a)
});
$c_ju_concurrent_TimeUnit$$anon$1.prototype.toNanos__J__J = (function(a) {
  return a
});
$c_ju_concurrent_TimeUnit$$anon$1.prototype.toMicros__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 1000, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
$c_ju_concurrent_TimeUnit$$anon$1.prototype.toMillis__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 1000000, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
$c_ju_concurrent_TimeUnit$$anon$1.prototype.toSeconds__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 1000000000, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
$c_ju_concurrent_TimeUnit$$anon$1.prototype.toMinutes__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, (-129542144), 13);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
$c_ju_concurrent_TimeUnit$$anon$1.prototype.toHours__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 817405952, 838);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
$c_ju_concurrent_TimeUnit$$anon$1.prototype.toDays__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, (-1857093632), 20116);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
var $d_ju_concurrent_TimeUnit$$anon$1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  ju_concurrent_TimeUnit$$anon$1: 0
}, false, "java.util.concurrent.TimeUnit$$anon$1", {
  ju_concurrent_TimeUnit$$anon$1: 1,
  ju_concurrent_TimeUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1
});
$c_ju_concurrent_TimeUnit$$anon$1.prototype.$classData = $d_ju_concurrent_TimeUnit$$anon$1;
/** @constructor */
function $c_ju_concurrent_TimeUnit$$anon$2() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_Enum__T__I__(this, "MICROSECONDS", 1)
}
$c_ju_concurrent_TimeUnit$$anon$2.prototype = new $h_ju_concurrent_TimeUnit();
$c_ju_concurrent_TimeUnit$$anon$2.prototype.constructor = $c_ju_concurrent_TimeUnit$$anon$2;
/** @constructor */
function $h_ju_concurrent_TimeUnit$$anon$2() {
  /*<skip>*/
}
$h_ju_concurrent_TimeUnit$$anon$2.prototype = $c_ju_concurrent_TimeUnit$$anon$2.prototype;
$c_ju_concurrent_TimeUnit$$anon$2.prototype.convert__J__ju_concurrent_TimeUnit__J = (function(a, u) {
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(u).toMicros__J__J(a)
});
$c_ju_concurrent_TimeUnit$$anon$2.prototype.toNanos__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(1000, 0), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong((-1511828489), 2147483))
});
$c_ju_concurrent_TimeUnit$$anon$2.prototype.toMicros__J__J = (function(a) {
  return a
});
$c_ju_concurrent_TimeUnit$$anon$2.prototype.toMillis__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 1000, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
$c_ju_concurrent_TimeUnit$$anon$2.prototype.toSeconds__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 1000000, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
$c_ju_concurrent_TimeUnit$$anon$2.prototype.toMinutes__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 60000000, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
$c_ju_concurrent_TimeUnit$$anon$2.prototype.toHours__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, (-694967296), 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
$c_ju_concurrent_TimeUnit$$anon$2.prototype.toDays__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 500654080, 20);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
var $d_ju_concurrent_TimeUnit$$anon$2 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  ju_concurrent_TimeUnit$$anon$2: 0
}, false, "java.util.concurrent.TimeUnit$$anon$2", {
  ju_concurrent_TimeUnit$$anon$2: 1,
  ju_concurrent_TimeUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1
});
$c_ju_concurrent_TimeUnit$$anon$2.prototype.$classData = $d_ju_concurrent_TimeUnit$$anon$2;
/** @constructor */
function $c_ju_concurrent_TimeUnit$$anon$3() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_Enum__T__I__(this, "MILLISECONDS", 2)
}
$c_ju_concurrent_TimeUnit$$anon$3.prototype = new $h_ju_concurrent_TimeUnit();
$c_ju_concurrent_TimeUnit$$anon$3.prototype.constructor = $c_ju_concurrent_TimeUnit$$anon$3;
/** @constructor */
function $h_ju_concurrent_TimeUnit$$anon$3() {
  /*<skip>*/
}
$h_ju_concurrent_TimeUnit$$anon$3.prototype = $c_ju_concurrent_TimeUnit$$anon$3.prototype;
$c_ju_concurrent_TimeUnit$$anon$3.prototype.convert__J__ju_concurrent_TimeUnit__J = (function(a, u) {
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(u).toMillis__J__J(a)
});
$c_ju_concurrent_TimeUnit$$anon$3.prototype.toNanos__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(1000000, 0), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(2077252342, 2147))
});
$c_ju_concurrent_TimeUnit$$anon$3.prototype.toMicros__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(1000, 0), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong((-1511828489), 2147483))
});
$c_ju_concurrent_TimeUnit$$anon$3.prototype.toMillis__J__J = (function(a) {
  return a
});
$c_ju_concurrent_TimeUnit$$anon$3.prototype.toSeconds__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 1000, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
$c_ju_concurrent_TimeUnit$$anon$3.prototype.toMinutes__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 60000, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
$c_ju_concurrent_TimeUnit$$anon$3.prototype.toHours__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 3600000, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
$c_ju_concurrent_TimeUnit$$anon$3.prototype.toDays__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 86400000, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
var $d_ju_concurrent_TimeUnit$$anon$3 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  ju_concurrent_TimeUnit$$anon$3: 0
}, false, "java.util.concurrent.TimeUnit$$anon$3", {
  ju_concurrent_TimeUnit$$anon$3: 1,
  ju_concurrent_TimeUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1
});
$c_ju_concurrent_TimeUnit$$anon$3.prototype.$classData = $d_ju_concurrent_TimeUnit$$anon$3;
/** @constructor */
function $c_ju_concurrent_TimeUnit$$anon$4() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_Enum__T__I__(this, "SECONDS", 3)
}
$c_ju_concurrent_TimeUnit$$anon$4.prototype = new $h_ju_concurrent_TimeUnit();
$c_ju_concurrent_TimeUnit$$anon$4.prototype.constructor = $c_ju_concurrent_TimeUnit$$anon$4;
/** @constructor */
function $h_ju_concurrent_TimeUnit$$anon$4() {
  /*<skip>*/
}
$h_ju_concurrent_TimeUnit$$anon$4.prototype = $c_ju_concurrent_TimeUnit$$anon$4.prototype;
$c_ju_concurrent_TimeUnit$$anon$4.prototype.convert__J__ju_concurrent_TimeUnit__J = (function(a, u) {
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(u).toSeconds__J__J(a)
});
$c_ju_concurrent_TimeUnit$$anon$4.prototype.toNanos__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(1000000000, 0), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(633437444, 2))
});
$c_ju_concurrent_TimeUnit$$anon$4.prototype.toMicros__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(1000000, 0), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(2077252342, 2147))
});
$c_ju_concurrent_TimeUnit$$anon$4.prototype.toMillis__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(1000, 0), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong((-1511828489), 2147483))
});
$c_ju_concurrent_TimeUnit$$anon$4.prototype.toSeconds__J__J = (function(a) {
  return a
});
$c_ju_concurrent_TimeUnit$$anon$4.prototype.toMinutes__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 60, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
$c_ju_concurrent_TimeUnit$$anon$4.prototype.toHours__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 3600, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
$c_ju_concurrent_TimeUnit$$anon$4.prototype.toDays__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 86400, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
var $d_ju_concurrent_TimeUnit$$anon$4 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  ju_concurrent_TimeUnit$$anon$4: 0
}, false, "java.util.concurrent.TimeUnit$$anon$4", {
  ju_concurrent_TimeUnit$$anon$4: 1,
  ju_concurrent_TimeUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1
});
$c_ju_concurrent_TimeUnit$$anon$4.prototype.$classData = $d_ju_concurrent_TimeUnit$$anon$4;
/** @constructor */
function $c_ju_concurrent_TimeUnit$$anon$5() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_Enum__T__I__(this, "MINUTES", 4)
}
$c_ju_concurrent_TimeUnit$$anon$5.prototype = new $h_ju_concurrent_TimeUnit();
$c_ju_concurrent_TimeUnit$$anon$5.prototype.constructor = $c_ju_concurrent_TimeUnit$$anon$5;
/** @constructor */
function $h_ju_concurrent_TimeUnit$$anon$5() {
  /*<skip>*/
}
$h_ju_concurrent_TimeUnit$$anon$5.prototype = $c_ju_concurrent_TimeUnit$$anon$5.prototype;
$c_ju_concurrent_TimeUnit$$anon$5.prototype.convert__J__ju_concurrent_TimeUnit__J = (function(a, u) {
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(u).toMinutes__J__J(a)
});
$c_ju_concurrent_TimeUnit$$anon$5.prototype.toNanos__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong((-129542144), 13), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(153722867, 0))
});
$c_ju_concurrent_TimeUnit$$anon$5.prototype.toMicros__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(60000000, 0), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong((-895955376), 35))
});
$c_ju_concurrent_TimeUnit$$anon$5.prototype.toMillis__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(60000, 0), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(1692789776, 35791))
});
$c_ju_concurrent_TimeUnit$$anon$5.prototype.toSeconds__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(60, 0), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(572662306, 35791394))
});
$c_ju_concurrent_TimeUnit$$anon$5.prototype.toMinutes__J__J = (function(a) {
  return a
});
$c_ju_concurrent_TimeUnit$$anon$5.prototype.toHours__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 60, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
$c_ju_concurrent_TimeUnit$$anon$5.prototype.toDays__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 1440, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
var $d_ju_concurrent_TimeUnit$$anon$5 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  ju_concurrent_TimeUnit$$anon$5: 0
}, false, "java.util.concurrent.TimeUnit$$anon$5", {
  ju_concurrent_TimeUnit$$anon$5: 1,
  ju_concurrent_TimeUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1
});
$c_ju_concurrent_TimeUnit$$anon$5.prototype.$classData = $d_ju_concurrent_TimeUnit$$anon$5;
/** @constructor */
function $c_ju_concurrent_TimeUnit$$anon$6() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_Enum__T__I__(this, "HOURS", 5)
}
$c_ju_concurrent_TimeUnit$$anon$6.prototype = new $h_ju_concurrent_TimeUnit();
$c_ju_concurrent_TimeUnit$$anon$6.prototype.constructor = $c_ju_concurrent_TimeUnit$$anon$6;
/** @constructor */
function $h_ju_concurrent_TimeUnit$$anon$6() {
  /*<skip>*/
}
$h_ju_concurrent_TimeUnit$$anon$6.prototype = $c_ju_concurrent_TimeUnit$$anon$6.prototype;
$c_ju_concurrent_TimeUnit$$anon$6.prototype.convert__J__ju_concurrent_TimeUnit__J = (function(a, u) {
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(u).toHours__J__J(a)
});
$c_ju_concurrent_TimeUnit$$anon$6.prototype.toNanos__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(817405952, 838), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(2562047, 0))
});
$c_ju_concurrent_TimeUnit$$anon$6.prototype.toMicros__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong((-694967296), 0), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong((-1732919508), 0))
});
$c_ju_concurrent_TimeUnit$$anon$6.prototype.toMillis__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(3600000, 0), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong((-2047687697), 596))
});
$c_ju_concurrent_TimeUnit$$anon$6.prototype.toSeconds__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(3600, 0), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(1011703407, 596523))
});
$c_ju_concurrent_TimeUnit$$anon$6.prototype.toMinutes__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(60, 0), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(572662306, 35791394))
});
$c_ju_concurrent_TimeUnit$$anon$6.prototype.toHours__J__J = (function(a) {
  return a
});
$c_ju_concurrent_TimeUnit$$anon$6.prototype.toDays__J__J = (function(a) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$();
  var lo = this$1.divideImpl__I__I__I__I__I(a.RTLong__f_lo, a.RTLong__f_hi, 24, 0);
  var hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi)
});
var $d_ju_concurrent_TimeUnit$$anon$6 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  ju_concurrent_TimeUnit$$anon$6: 0
}, false, "java.util.concurrent.TimeUnit$$anon$6", {
  ju_concurrent_TimeUnit$$anon$6: 1,
  ju_concurrent_TimeUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1
});
$c_ju_concurrent_TimeUnit$$anon$6.prototype.$classData = $d_ju_concurrent_TimeUnit$$anon$6;
/** @constructor */
function $c_ju_concurrent_TimeUnit$$anon$7() {
  this.jl_Enum__f__name = null;
  this.jl_Enum__f__ordinal = 0;
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_Enum__T__I__(this, "DAYS", 6)
}
$c_ju_concurrent_TimeUnit$$anon$7.prototype = new $h_ju_concurrent_TimeUnit();
$c_ju_concurrent_TimeUnit$$anon$7.prototype.constructor = $c_ju_concurrent_TimeUnit$$anon$7;
/** @constructor */
function $h_ju_concurrent_TimeUnit$$anon$7() {
  /*<skip>*/
}
$h_ju_concurrent_TimeUnit$$anon$7.prototype = $c_ju_concurrent_TimeUnit$$anon$7.prototype;
$c_ju_concurrent_TimeUnit$$anon$7.prototype.convert__J__ju_concurrent_TimeUnit__J = (function(a, u) {
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(u).toDays__J__J(a)
});
$c_ju_concurrent_TimeUnit$$anon$7.prototype.toNanos__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong((-1857093632), 20116), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(106751, 0))
});
$c_ju_concurrent_TimeUnit$$anon$7.prototype.toMicros__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(500654080, 20), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(106751991, 0))
});
$c_ju_concurrent_TimeUnit$$anon$7.prototype.toMillis__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(86400000, 0), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong((-622191233), 24))
});
$c_ju_concurrent_TimeUnit$$anon$7.prototype.toSeconds__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(86400, 0), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(579025220, 24855))
});
$c_ju_concurrent_TimeUnit$$anon$7.prototype.toMinutes__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(1440, 0), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(381774870, 1491308))
});
$c_ju_concurrent_TimeUnit$$anon$7.prototype.toHours__J__J = (function(a) {
  return $m_ju_concurrent_TimeUnit$().java$util$concurrent$TimeUnit$$x__J__J__J__J(a, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(24, 0), new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(1431655765, 89478485))
});
$c_ju_concurrent_TimeUnit$$anon$7.prototype.toDays__J__J = (function(a) {
  return a
});
var $d_ju_concurrent_TimeUnit$$anon$7 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  ju_concurrent_TimeUnit$$anon$7: 0
}, false, "java.util.concurrent.TimeUnit$$anon$7", {
  ju_concurrent_TimeUnit$$anon$7: 1,
  ju_concurrent_TimeUnit: 1,
  jl_Enum: 1,
  O: 1,
  jl_Comparable: 1,
  Ljava_io_Serializable: 1
});
$c_ju_concurrent_TimeUnit$$anon$7.prototype.$classData = $d_ju_concurrent_TimeUnit$$anon$7;
/** @constructor */
function $c_sc_Seq$() {
  this.sc_SeqFactory$Delegate__f_delegate = null;
  $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_sci_Seq$())
}
$c_sc_Seq$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_sc_SeqFactory$Delegate();
$c_sc_Seq$.prototype.constructor = $c_sc_Seq$;
/** @constructor */
function $h_sc_Seq$() {
  /*<skip>*/
}
$h_sc_Seq$.prototype = $c_sc_Seq$.prototype;
var $d_sc_Seq$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  sc_Seq$: 0
}, false, "scala.collection.Seq$", {
  sc_Seq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Seq$.prototype.$classData = $d_sc_Seq$;
var $n_sc_Seq$;
function $m_sc_Seq$() {
  if ((!$n_sc_Seq$)) {
    $n_sc_Seq$ = new $c_sc_Seq$()
  };
  return $n_sc_Seq$
}
/** @constructor */
function $c_s_concurrent_duration_Duration$Infinite() {
  /*<skip>*/
}
$c_s_concurrent_duration_Duration$Infinite.prototype = new $h_s_concurrent_duration_Duration();
$c_s_concurrent_duration_Duration$Infinite.prototype.constructor = $c_s_concurrent_duration_Duration$Infinite;
/** @constructor */
function $h_s_concurrent_duration_Duration$Infinite() {
  /*<skip>*/
}
$h_s_concurrent_duration_Duration$Infinite.prototype = $c_s_concurrent_duration_Duration$Infinite.prototype;
function $p_s_concurrent_duration_FiniteDuration__bounded__J__Z($thiz, max) {
  var lo = max.RTLong__f_lo;
  var hi = max.RTLong__f_hi;
  var lo$1 = ((-lo) | 0);
  var hi$1 = ((lo !== 0) ? (~hi) : ((-hi) | 0));
  var b = $thiz.s_concurrent_duration_FiniteDuration__f_length;
  var bhi = b.RTLong__f_hi;
  if (((hi$1 === bhi) ? (((-2147483648) ^ lo$1) <= ((-2147483648) ^ b.RTLong__f_lo)) : (hi$1 < bhi))) {
    var this$3 = $thiz.s_concurrent_duration_FiniteDuration__f_length;
    var ahi = this$3.RTLong__f_hi;
    var bhi$1 = max.RTLong__f_hi;
    return ((ahi === bhi$1) ? (((-2147483648) ^ this$3.RTLong__f_lo) <= ((-2147483648) ^ max.RTLong__f_lo)) : (ahi < bhi$1))
  } else {
    return false
  }
}
function $p_s_concurrent_duration_FiniteDuration__unitString__T($thiz) {
  var $$x1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($m_s_concurrent_duration_Duration$().s_concurrent_duration_Duration$__f_timeUnitName).apply__O__O($thiz.s_concurrent_duration_FiniteDuration__f_unit));
  var this$1 = $thiz.s_concurrent_duration_FiniteDuration__f_length;
  return ($$x1 + (((this$1.RTLong__f_lo === 1) && (this$1.RTLong__f_hi === 0)) ? "" : "s"))
}
/** @constructor */
function $c_s_concurrent_duration_FiniteDuration(length, unit) {
  this.s_concurrent_duration_FiniteDuration__f_length = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$L0;
  this.s_concurrent_duration_FiniteDuration__f_unit = null;
  this.s_concurrent_duration_FiniteDuration__f_length = length;
  this.s_concurrent_duration_FiniteDuration__f_unit = unit;
  var x = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_NANOSECONDS;
  if ((x === null)) {
    var $$x1 = (unit === null)
  } else {
    var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x);
    var $$x1 = (this$1 === unit)
  };
  if ($$x1) {
    var requirement = $p_s_concurrent_duration_FiniteDuration__bounded__J__Z(this, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong((-1), 2147483647))
  } else {
    var x$3 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_MICROSECONDS;
    if ((x$3 === null)) {
      var $$x2 = (unit === null)
    } else {
      var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$3);
      var $$x2 = (this$2 === unit)
    };
    if ($$x2) {
      var requirement = $p_s_concurrent_duration_FiniteDuration__bounded__J__Z(this, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong((-1511828489), 2147483))
    } else {
      var x$5 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_MILLISECONDS;
      if ((x$5 === null)) {
        var $$x3 = (unit === null)
      } else {
        var this$3 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$5);
        var $$x3 = (this$3 === unit)
      };
      if ($$x3) {
        var requirement = $p_s_concurrent_duration_FiniteDuration__bounded__J__Z(this, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(2077252342, 2147))
      } else {
        var x$7 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_SECONDS;
        if ((x$7 === null)) {
          var $$x4 = (unit === null)
        } else {
          var this$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$7);
          var $$x4 = (this$4 === unit)
        };
        if ($$x4) {
          var requirement = $p_s_concurrent_duration_FiniteDuration__bounded__J__Z(this, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(633437444, 2))
        } else {
          var x$9 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_MINUTES;
          if ((x$9 === null)) {
            var $$x5 = (unit === null)
          } else {
            var this$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$9);
            var $$x5 = (this$5 === unit)
          };
          if ($$x5) {
            var requirement = $p_s_concurrent_duration_FiniteDuration__bounded__J__Z(this, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(153722867, 0))
          } else {
            var x$11 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_HOURS;
            if ((x$11 === null)) {
              var $$x6 = (unit === null)
            } else {
              var this$6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$11);
              var $$x6 = (this$6 === unit)
            };
            if ($$x6) {
              var requirement = $p_s_concurrent_duration_FiniteDuration__bounded__J__Z(this, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(2562047, 0))
            } else {
              var x$13 = $m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_DAYS;
              if ((x$13 === null)) {
                var $$x7 = (unit === null)
              } else {
                var this$7 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x$13);
                var $$x7 = (this$7 === unit)
              };
              if ($$x7) {
                var requirement = $p_s_concurrent_duration_FiniteDuration__bounded__J__Z(this, new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(106751, 0))
              } else {
                var t = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($m_ju_concurrent_TimeUnit$().ju_concurrent_TimeUnit$__f_DAYS).convert__J__ju_concurrent_TimeUnit__J(length, unit);
                var lo = t.RTLong__f_lo;
                var hi = t.RTLong__f_hi;
                var requirement = (((hi === (-1)) ? (((-2147483648) ^ lo) >= 2147376897) : (hi > (-1))) && ((hi === 0) ? (((-2147483648) ^ lo) <= (-2147376897)) : (hi < 0)))
              }
            }
          }
        }
      }
    }
  };
  if ((!requirement)) {
    throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_IllegalArgumentException__T__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_IllegalArgumentException(), "requirement failed: Duration is limited to +-(2^63-1)ns (ca. 292 years)")
  }
}
$c_s_concurrent_duration_FiniteDuration.prototype = new $h_s_concurrent_duration_Duration();
$c_s_concurrent_duration_FiniteDuration.prototype.constructor = $c_s_concurrent_duration_FiniteDuration;
/** @constructor */
function $h_s_concurrent_duration_FiniteDuration() {
  /*<skip>*/
}
$h_s_concurrent_duration_FiniteDuration.prototype = $c_s_concurrent_duration_FiniteDuration.prototype;
$c_s_concurrent_duration_FiniteDuration.prototype.toString__T = (function() {
  return ((this.s_concurrent_duration_FiniteDuration__f_length + " ") + $p_s_concurrent_duration_FiniteDuration__unitString__T(this))
});
$c_s_concurrent_duration_FiniteDuration.prototype.compare__s_concurrent_duration_Duration__I = (function(other) {
  if ((other instanceof $c_s_concurrent_duration_FiniteDuration)) {
    var x2 = $as_s_concurrent_duration_FiniteDuration(other);
    var t = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.s_concurrent_duration_FiniteDuration__f_unit).toNanos__J__J(this.s_concurrent_duration_FiniteDuration__f_length);
    var lo = t.RTLong__f_lo;
    var hi = t.RTLong__f_hi;
    var this$3 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sr_RichLong(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo, hi));
    var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x2);
    var t$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this$2.s_concurrent_duration_FiniteDuration__f_unit).toNanos__J__J(this$2.s_concurrent_duration_FiniteDuration__f_length);
    var lo$1 = t$1.RTLong__f_lo;
    var hi$1 = t$1.RTLong__f_hi;
    var t$3 = this$3.sr_RichLong__f_self;
    var lo$3 = t$3.RTLong__f_lo;
    var hi$3 = t$3.RTLong__f_hi;
    var t$4 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uJ(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo$3, hi$3));
    var lo$4 = t$4.RTLong__f_lo;
    var hi$4 = t$4.RTLong__f_hi;
    var t$5 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$uJ(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_RTLong(lo$1, hi$1));
    var lo$5 = t$5.RTLong__f_lo;
    var hi$5 = t$5.RTLong__f_hi;
    return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(lo$4, hi$4, lo$5, hi$5)
  } else {
    var this$6 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(other);
    return ((-this$6.compare__s_concurrent_duration_Duration__I(this)) | 0)
  }
});
$c_s_concurrent_duration_FiniteDuration.prototype.equals__O__Z = (function(other) {
  if ((other instanceof $c_s_concurrent_duration_FiniteDuration)) {
    var x2 = $as_s_concurrent_duration_FiniteDuration(other);
    var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.s_concurrent_duration_FiniteDuration__f_unit).toNanos__J__J(this.s_concurrent_duration_FiniteDuration__f_length);
    var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(x2);
    var b = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this$1.s_concurrent_duration_FiniteDuration__f_unit).toNanos__J__J(this$1.s_concurrent_duration_FiniteDuration__f_length);
    return ((this$2.RTLong__f_lo === b.RTLong__f_lo) && (this$2.RTLong__f_hi === b.RTLong__f_hi))
  } else {
    return (this === other)
  }
});
$c_s_concurrent_duration_FiniteDuration.prototype.hashCode__I = (function() {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.s_concurrent_duration_FiniteDuration__f_unit).toNanos__J__J(this.s_concurrent_duration_FiniteDuration__f_length);
  return this$1.RTLong__f_lo
});
$c_s_concurrent_duration_FiniteDuration.prototype.compare__O__I = (function(that) {
  return this.compare__s_concurrent_duration_Duration__I($as_s_concurrent_duration_Duration(that))
});
function $as_s_concurrent_duration_FiniteDuration(obj) {
  return (((obj instanceof $c_s_concurrent_duration_FiniteDuration) || (obj === null)) ? obj : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$throwClassCastException(obj, "scala.concurrent.duration.FiniteDuration"))
}
function $isArrayOf_s_concurrent_duration_FiniteDuration(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_concurrent_duration_FiniteDuration)))
}
function $asArrayOf_s_concurrent_duration_FiniteDuration(obj, depth) {
  return (($isArrayOf_s_concurrent_duration_FiniteDuration(obj, depth) || (obj === null)) ? obj : $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$throwArrayCastException(obj, "Lscala.concurrent.duration.FiniteDuration;", depth))
}
var $d_s_concurrent_duration_FiniteDuration = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  s_concurrent_duration_FiniteDuration: 0
}, false, "scala.concurrent.duration.FiniteDuration", {
  s_concurrent_duration_FiniteDuration: 1,
  s_concurrent_duration_Duration: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1
});
$c_s_concurrent_duration_FiniteDuration.prototype.$classData = $d_s_concurrent_duration_FiniteDuration;
/** @constructor */
function $c_s_concurrent_duration_Duration$$anon$1() {
  /*<skip>*/
}
$c_s_concurrent_duration_Duration$$anon$1.prototype = new $h_s_concurrent_duration_Duration$Infinite();
$c_s_concurrent_duration_Duration$$anon$1.prototype.constructor = $c_s_concurrent_duration_Duration$$anon$1;
/** @constructor */
function $h_s_concurrent_duration_Duration$$anon$1() {
  /*<skip>*/
}
$h_s_concurrent_duration_Duration$$anon$1.prototype = $c_s_concurrent_duration_Duration$$anon$1.prototype;
$c_s_concurrent_duration_Duration$$anon$1.prototype.toString__T = (function() {
  return "Duration.Undefined"
});
$c_s_concurrent_duration_Duration$$anon$1.prototype.equals__O__Z = (function(other) {
  return false
});
$c_s_concurrent_duration_Duration$$anon$1.prototype.compare__s_concurrent_duration_Duration__I = (function(other) {
  return ((other === this) ? 0 : 1)
});
$c_s_concurrent_duration_Duration$$anon$1.prototype.compare__O__I = (function(that) {
  return this.compare__s_concurrent_duration_Duration__I($as_s_concurrent_duration_Duration(that))
});
var $d_s_concurrent_duration_Duration$$anon$1 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  s_concurrent_duration_Duration$$anon$1: 0
}, false, "scala.concurrent.duration.Duration$$anon$1", {
  s_concurrent_duration_Duration$$anon$1: 1,
  s_concurrent_duration_Duration$Infinite: 1,
  s_concurrent_duration_Duration: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1
});
$c_s_concurrent_duration_Duration$$anon$1.prototype.$classData = $d_s_concurrent_duration_Duration$$anon$1;
/** @constructor */
function $c_s_concurrent_duration_Duration$$anon$2() {
  /*<skip>*/
}
$c_s_concurrent_duration_Duration$$anon$2.prototype = new $h_s_concurrent_duration_Duration$Infinite();
$c_s_concurrent_duration_Duration$$anon$2.prototype.constructor = $c_s_concurrent_duration_Duration$$anon$2;
/** @constructor */
function $h_s_concurrent_duration_Duration$$anon$2() {
  /*<skip>*/
}
$h_s_concurrent_duration_Duration$$anon$2.prototype = $c_s_concurrent_duration_Duration$$anon$2.prototype;
$c_s_concurrent_duration_Duration$$anon$2.prototype.toString__T = (function() {
  return "Duration.Inf"
});
$c_s_concurrent_duration_Duration$$anon$2.prototype.compare__s_concurrent_duration_Duration__I = (function(other) {
  return ((other === $m_s_concurrent_duration_Duration$().s_concurrent_duration_Duration$__f_Undefined) ? (-1) : ((other === this) ? 0 : 1))
});
$c_s_concurrent_duration_Duration$$anon$2.prototype.compare__O__I = (function(that) {
  return this.compare__s_concurrent_duration_Duration__I($as_s_concurrent_duration_Duration(that))
});
var $d_s_concurrent_duration_Duration$$anon$2 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  s_concurrent_duration_Duration$$anon$2: 0
}, false, "scala.concurrent.duration.Duration$$anon$2", {
  s_concurrent_duration_Duration$$anon$2: 1,
  s_concurrent_duration_Duration$Infinite: 1,
  s_concurrent_duration_Duration: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1
});
$c_s_concurrent_duration_Duration$$anon$2.prototype.$classData = $d_s_concurrent_duration_Duration$$anon$2;
/** @constructor */
function $c_s_concurrent_duration_Duration$$anon$3() {
  /*<skip>*/
}
$c_s_concurrent_duration_Duration$$anon$3.prototype = new $h_s_concurrent_duration_Duration$Infinite();
$c_s_concurrent_duration_Duration$$anon$3.prototype.constructor = $c_s_concurrent_duration_Duration$$anon$3;
/** @constructor */
function $h_s_concurrent_duration_Duration$$anon$3() {
  /*<skip>*/
}
$h_s_concurrent_duration_Duration$$anon$3.prototype = $c_s_concurrent_duration_Duration$$anon$3.prototype;
$c_s_concurrent_duration_Duration$$anon$3.prototype.toString__T = (function() {
  return "Duration.MinusInf"
});
$c_s_concurrent_duration_Duration$$anon$3.prototype.compare__s_concurrent_duration_Duration__I = (function(other) {
  return ((other === this) ? 0 : (-1))
});
$c_s_concurrent_duration_Duration$$anon$3.prototype.compare__O__I = (function(that) {
  return this.compare__s_concurrent_duration_Duration__I($as_s_concurrent_duration_Duration(that))
});
var $d_s_concurrent_duration_Duration$$anon$3 = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  s_concurrent_duration_Duration$$anon$3: 0
}, false, "scala.concurrent.duration.Duration$$anon$3", {
  s_concurrent_duration_Duration$$anon$3: 1,
  s_concurrent_duration_Duration$Infinite: 1,
  s_concurrent_duration_Duration: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_math_Ordered: 1,
  jl_Comparable: 1
});
$c_s_concurrent_duration_Duration$$anon$3.prototype.$classData = $d_s_concurrent_duration_Duration$$anon$3;
/** @constructor */
function $c_Lscopt_OptionDefKind$Arg$() {
  /*<skip>*/
}
$c_Lscopt_OptionDefKind$Arg$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_OptionDefKind$Arg$.prototype.constructor = $c_Lscopt_OptionDefKind$Arg$;
/** @constructor */
function $h_Lscopt_OptionDefKind$Arg$() {
  /*<skip>*/
}
$h_Lscopt_OptionDefKind$Arg$.prototype = $c_Lscopt_OptionDefKind$Arg$.prototype;
$c_Lscopt_OptionDefKind$Arg$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Product$$anon$1(this)
});
$c_Lscopt_OptionDefKind$Arg$.prototype.hashCode__I = (function() {
  return 66102
});
$c_Lscopt_OptionDefKind$Arg$.prototype.toString__T = (function() {
  return "Arg"
});
$c_Lscopt_OptionDefKind$Arg$.prototype.productArity__I = (function() {
  return 0
});
$c_Lscopt_OptionDefKind$Arg$.prototype.productPrefix__T = (function() {
  return "Arg"
});
$c_Lscopt_OptionDefKind$Arg$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
var $d_Lscopt_OptionDefKind$Arg$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_OptionDefKind$Arg$: 0
}, false, "scopt.OptionDefKind$Arg$", {
  Lscopt_OptionDefKind$Arg$: 1,
  O: 1,
  Lscopt_OptionDefKind: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lscopt_OptionDefKind$Arg$.prototype.$classData = $d_Lscopt_OptionDefKind$Arg$;
var $n_Lscopt_OptionDefKind$Arg$;
function $m_Lscopt_OptionDefKind$Arg$() {
  if ((!$n_Lscopt_OptionDefKind$Arg$)) {
    $n_Lscopt_OptionDefKind$Arg$ = new $c_Lscopt_OptionDefKind$Arg$()
  };
  return $n_Lscopt_OptionDefKind$Arg$
}
/** @constructor */
function $c_Lscopt_OptionDefKind$Check$() {
  /*<skip>*/
}
$c_Lscopt_OptionDefKind$Check$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_OptionDefKind$Check$.prototype.constructor = $c_Lscopt_OptionDefKind$Check$;
/** @constructor */
function $h_Lscopt_OptionDefKind$Check$() {
  /*<skip>*/
}
$h_Lscopt_OptionDefKind$Check$.prototype = $c_Lscopt_OptionDefKind$Check$.prototype;
$c_Lscopt_OptionDefKind$Check$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Product$$anon$1(this)
});
$c_Lscopt_OptionDefKind$Check$.prototype.hashCode__I = (function() {
  return 65074408
});
$c_Lscopt_OptionDefKind$Check$.prototype.toString__T = (function() {
  return "Check"
});
$c_Lscopt_OptionDefKind$Check$.prototype.productArity__I = (function() {
  return 0
});
$c_Lscopt_OptionDefKind$Check$.prototype.productPrefix__T = (function() {
  return "Check"
});
$c_Lscopt_OptionDefKind$Check$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
var $d_Lscopt_OptionDefKind$Check$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_OptionDefKind$Check$: 0
}, false, "scopt.OptionDefKind$Check$", {
  Lscopt_OptionDefKind$Check$: 1,
  O: 1,
  Lscopt_OptionDefKind: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lscopt_OptionDefKind$Check$.prototype.$classData = $d_Lscopt_OptionDefKind$Check$;
var $n_Lscopt_OptionDefKind$Check$;
function $m_Lscopt_OptionDefKind$Check$() {
  if ((!$n_Lscopt_OptionDefKind$Check$)) {
    $n_Lscopt_OptionDefKind$Check$ = new $c_Lscopt_OptionDefKind$Check$()
  };
  return $n_Lscopt_OptionDefKind$Check$
}
/** @constructor */
function $c_Lscopt_OptionDefKind$Cmd$() {
  /*<skip>*/
}
$c_Lscopt_OptionDefKind$Cmd$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_OptionDefKind$Cmd$.prototype.constructor = $c_Lscopt_OptionDefKind$Cmd$;
/** @constructor */
function $h_Lscopt_OptionDefKind$Cmd$() {
  /*<skip>*/
}
$h_Lscopt_OptionDefKind$Cmd$.prototype = $c_Lscopt_OptionDefKind$Cmd$.prototype;
$c_Lscopt_OptionDefKind$Cmd$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Product$$anon$1(this)
});
$c_Lscopt_OptionDefKind$Cmd$.prototype.hashCode__I = (function() {
  return 67866
});
$c_Lscopt_OptionDefKind$Cmd$.prototype.toString__T = (function() {
  return "Cmd"
});
$c_Lscopt_OptionDefKind$Cmd$.prototype.productArity__I = (function() {
  return 0
});
$c_Lscopt_OptionDefKind$Cmd$.prototype.productPrefix__T = (function() {
  return "Cmd"
});
$c_Lscopt_OptionDefKind$Cmd$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
var $d_Lscopt_OptionDefKind$Cmd$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_OptionDefKind$Cmd$: 0
}, false, "scopt.OptionDefKind$Cmd$", {
  Lscopt_OptionDefKind$Cmd$: 1,
  O: 1,
  Lscopt_OptionDefKind: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lscopt_OptionDefKind$Cmd$.prototype.$classData = $d_Lscopt_OptionDefKind$Cmd$;
var $n_Lscopt_OptionDefKind$Cmd$;
function $m_Lscopt_OptionDefKind$Cmd$() {
  if ((!$n_Lscopt_OptionDefKind$Cmd$)) {
    $n_Lscopt_OptionDefKind$Cmd$ = new $c_Lscopt_OptionDefKind$Cmd$()
  };
  return $n_Lscopt_OptionDefKind$Cmd$
}
/** @constructor */
function $c_Lscopt_OptionDefKind$Head$() {
  /*<skip>*/
}
$c_Lscopt_OptionDefKind$Head$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_OptionDefKind$Head$.prototype.constructor = $c_Lscopt_OptionDefKind$Head$;
/** @constructor */
function $h_Lscopt_OptionDefKind$Head$() {
  /*<skip>*/
}
$h_Lscopt_OptionDefKind$Head$.prototype = $c_Lscopt_OptionDefKind$Head$.prototype;
$c_Lscopt_OptionDefKind$Head$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Product$$anon$1(this)
});
$c_Lscopt_OptionDefKind$Head$.prototype.hashCode__I = (function() {
  return 2245120
});
$c_Lscopt_OptionDefKind$Head$.prototype.toString__T = (function() {
  return "Head"
});
$c_Lscopt_OptionDefKind$Head$.prototype.productArity__I = (function() {
  return 0
});
$c_Lscopt_OptionDefKind$Head$.prototype.productPrefix__T = (function() {
  return "Head"
});
$c_Lscopt_OptionDefKind$Head$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
var $d_Lscopt_OptionDefKind$Head$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_OptionDefKind$Head$: 0
}, false, "scopt.OptionDefKind$Head$", {
  Lscopt_OptionDefKind$Head$: 1,
  O: 1,
  Lscopt_OptionDefKind: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lscopt_OptionDefKind$Head$.prototype.$classData = $d_Lscopt_OptionDefKind$Head$;
var $n_Lscopt_OptionDefKind$Head$;
function $m_Lscopt_OptionDefKind$Head$() {
  if ((!$n_Lscopt_OptionDefKind$Head$)) {
    $n_Lscopt_OptionDefKind$Head$ = new $c_Lscopt_OptionDefKind$Head$()
  };
  return $n_Lscopt_OptionDefKind$Head$
}
/** @constructor */
function $c_Lscopt_OptionDefKind$Note$() {
  /*<skip>*/
}
$c_Lscopt_OptionDefKind$Note$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_OptionDefKind$Note$.prototype.constructor = $c_Lscopt_OptionDefKind$Note$;
/** @constructor */
function $h_Lscopt_OptionDefKind$Note$() {
  /*<skip>*/
}
$h_Lscopt_OptionDefKind$Note$.prototype = $c_Lscopt_OptionDefKind$Note$.prototype;
$c_Lscopt_OptionDefKind$Note$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Product$$anon$1(this)
});
$c_Lscopt_OptionDefKind$Note$.prototype.hashCode__I = (function() {
  return 2434066
});
$c_Lscopt_OptionDefKind$Note$.prototype.toString__T = (function() {
  return "Note"
});
$c_Lscopt_OptionDefKind$Note$.prototype.productArity__I = (function() {
  return 0
});
$c_Lscopt_OptionDefKind$Note$.prototype.productPrefix__T = (function() {
  return "Note"
});
$c_Lscopt_OptionDefKind$Note$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
var $d_Lscopt_OptionDefKind$Note$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_OptionDefKind$Note$: 0
}, false, "scopt.OptionDefKind$Note$", {
  Lscopt_OptionDefKind$Note$: 1,
  O: 1,
  Lscopt_OptionDefKind: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lscopt_OptionDefKind$Note$.prototype.$classData = $d_Lscopt_OptionDefKind$Note$;
var $n_Lscopt_OptionDefKind$Note$;
function $m_Lscopt_OptionDefKind$Note$() {
  if ((!$n_Lscopt_OptionDefKind$Note$)) {
    $n_Lscopt_OptionDefKind$Note$ = new $c_Lscopt_OptionDefKind$Note$()
  };
  return $n_Lscopt_OptionDefKind$Note$
}
/** @constructor */
function $c_Lscopt_OptionDefKind$Opt$() {
  /*<skip>*/
}
$c_Lscopt_OptionDefKind$Opt$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_OptionDefKind$Opt$.prototype.constructor = $c_Lscopt_OptionDefKind$Opt$;
/** @constructor */
function $h_Lscopt_OptionDefKind$Opt$() {
  /*<skip>*/
}
$h_Lscopt_OptionDefKind$Opt$.prototype = $c_Lscopt_OptionDefKind$Opt$.prototype;
$c_Lscopt_OptionDefKind$Opt$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Product$$anon$1(this)
});
$c_Lscopt_OptionDefKind$Opt$.prototype.hashCode__I = (function() {
  return 79507
});
$c_Lscopt_OptionDefKind$Opt$.prototype.toString__T = (function() {
  return "Opt"
});
$c_Lscopt_OptionDefKind$Opt$.prototype.productArity__I = (function() {
  return 0
});
$c_Lscopt_OptionDefKind$Opt$.prototype.productPrefix__T = (function() {
  return "Opt"
});
$c_Lscopt_OptionDefKind$Opt$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
var $d_Lscopt_OptionDefKind$Opt$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_OptionDefKind$Opt$: 0
}, false, "scopt.OptionDefKind$Opt$", {
  Lscopt_OptionDefKind$Opt$: 1,
  O: 1,
  Lscopt_OptionDefKind: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lscopt_OptionDefKind$Opt$.prototype.$classData = $d_Lscopt_OptionDefKind$Opt$;
var $n_Lscopt_OptionDefKind$Opt$;
function $m_Lscopt_OptionDefKind$Opt$() {
  if ((!$n_Lscopt_OptionDefKind$Opt$)) {
    $n_Lscopt_OptionDefKind$Opt$ = new $c_Lscopt_OptionDefKind$Opt$()
  };
  return $n_Lscopt_OptionDefKind$Opt$
}
/** @constructor */
function $c_Lscopt_OptionDefKind$OptHelp$() {
  /*<skip>*/
}
$c_Lscopt_OptionDefKind$OptHelp$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_OptionDefKind$OptHelp$.prototype.constructor = $c_Lscopt_OptionDefKind$OptHelp$;
/** @constructor */
function $h_Lscopt_OptionDefKind$OptHelp$() {
  /*<skip>*/
}
$h_Lscopt_OptionDefKind$OptHelp$.prototype = $c_Lscopt_OptionDefKind$OptHelp$.prototype;
$c_Lscopt_OptionDefKind$OptHelp$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Product$$anon$1(this)
});
$c_Lscopt_OptionDefKind$OptHelp$.prototype.hashCode__I = (function() {
  return 414185588
});
$c_Lscopt_OptionDefKind$OptHelp$.prototype.toString__T = (function() {
  return "OptHelp"
});
$c_Lscopt_OptionDefKind$OptHelp$.prototype.productArity__I = (function() {
  return 0
});
$c_Lscopt_OptionDefKind$OptHelp$.prototype.productPrefix__T = (function() {
  return "OptHelp"
});
$c_Lscopt_OptionDefKind$OptHelp$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
var $d_Lscopt_OptionDefKind$OptHelp$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_OptionDefKind$OptHelp$: 0
}, false, "scopt.OptionDefKind$OptHelp$", {
  Lscopt_OptionDefKind$OptHelp$: 1,
  O: 1,
  Lscopt_OptionDefKind: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lscopt_OptionDefKind$OptHelp$.prototype.$classData = $d_Lscopt_OptionDefKind$OptHelp$;
var $n_Lscopt_OptionDefKind$OptHelp$;
function $m_Lscopt_OptionDefKind$OptHelp$() {
  if ((!$n_Lscopt_OptionDefKind$OptHelp$)) {
    $n_Lscopt_OptionDefKind$OptHelp$ = new $c_Lscopt_OptionDefKind$OptHelp$()
  };
  return $n_Lscopt_OptionDefKind$OptHelp$
}
/** @constructor */
function $c_Lscopt_OptionDefKind$OptVersion$() {
  /*<skip>*/
}
$c_Lscopt_OptionDefKind$OptVersion$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_OptionDefKind$OptVersion$.prototype.constructor = $c_Lscopt_OptionDefKind$OptVersion$;
/** @constructor */
function $h_Lscopt_OptionDefKind$OptVersion$() {
  /*<skip>*/
}
$h_Lscopt_OptionDefKind$OptVersion$.prototype = $c_Lscopt_OptionDefKind$OptVersion$.prototype;
$c_Lscopt_OptionDefKind$OptVersion$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Product$$anon$1(this)
});
$c_Lscopt_OptionDefKind$OptVersion$.prototype.hashCode__I = (function() {
  return (-892304699)
});
$c_Lscopt_OptionDefKind$OptVersion$.prototype.toString__T = (function() {
  return "OptVersion"
});
$c_Lscopt_OptionDefKind$OptVersion$.prototype.productArity__I = (function() {
  return 0
});
$c_Lscopt_OptionDefKind$OptVersion$.prototype.productPrefix__T = (function() {
  return "OptVersion"
});
$c_Lscopt_OptionDefKind$OptVersion$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
var $d_Lscopt_OptionDefKind$OptVersion$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_OptionDefKind$OptVersion$: 0
}, false, "scopt.OptionDefKind$OptVersion$", {
  Lscopt_OptionDefKind$OptVersion$: 1,
  O: 1,
  Lscopt_OptionDefKind: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lscopt_OptionDefKind$OptVersion$.prototype.$classData = $d_Lscopt_OptionDefKind$OptVersion$;
var $n_Lscopt_OptionDefKind$OptVersion$;
function $m_Lscopt_OptionDefKind$OptVersion$() {
  if ((!$n_Lscopt_OptionDefKind$OptVersion$)) {
    $n_Lscopt_OptionDefKind$OptVersion$ = new $c_Lscopt_OptionDefKind$OptVersion$()
  };
  return $n_Lscopt_OptionDefKind$OptVersion$
}
/** @constructor */
function $c_Lscopt_OptionDefKind$ProgramName$() {
  /*<skip>*/
}
$c_Lscopt_OptionDefKind$ProgramName$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_OptionDefKind$ProgramName$.prototype.constructor = $c_Lscopt_OptionDefKind$ProgramName$;
/** @constructor */
function $h_Lscopt_OptionDefKind$ProgramName$() {
  /*<skip>*/
}
$h_Lscopt_OptionDefKind$ProgramName$.prototype = $c_Lscopt_OptionDefKind$ProgramName$.prototype;
$c_Lscopt_OptionDefKind$ProgramName$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Product$$anon$1(this)
});
$c_Lscopt_OptionDefKind$ProgramName$.prototype.hashCode__I = (function() {
  return (-1616719089)
});
$c_Lscopt_OptionDefKind$ProgramName$.prototype.toString__T = (function() {
  return "ProgramName"
});
$c_Lscopt_OptionDefKind$ProgramName$.prototype.productArity__I = (function() {
  return 0
});
$c_Lscopt_OptionDefKind$ProgramName$.prototype.productPrefix__T = (function() {
  return "ProgramName"
});
$c_Lscopt_OptionDefKind$ProgramName$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
var $d_Lscopt_OptionDefKind$ProgramName$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_OptionDefKind$ProgramName$: 0
}, false, "scopt.OptionDefKind$ProgramName$", {
  Lscopt_OptionDefKind$ProgramName$: 1,
  O: 1,
  Lscopt_OptionDefKind: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lscopt_OptionDefKind$ProgramName$.prototype.$classData = $d_Lscopt_OptionDefKind$ProgramName$;
var $n_Lscopt_OptionDefKind$ProgramName$;
function $m_Lscopt_OptionDefKind$ProgramName$() {
  if ((!$n_Lscopt_OptionDefKind$ProgramName$)) {
    $n_Lscopt_OptionDefKind$ProgramName$ = new $c_Lscopt_OptionDefKind$ProgramName$()
  };
  return $n_Lscopt_OptionDefKind$ProgramName$
}
/** @constructor */
function $c_Lscopt_RenderingMode$OneColumn$() {
  /*<skip>*/
}
$c_Lscopt_RenderingMode$OneColumn$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_RenderingMode$OneColumn$.prototype.constructor = $c_Lscopt_RenderingMode$OneColumn$;
/** @constructor */
function $h_Lscopt_RenderingMode$OneColumn$() {
  /*<skip>*/
}
$h_Lscopt_RenderingMode$OneColumn$.prototype = $c_Lscopt_RenderingMode$OneColumn$.prototype;
$c_Lscopt_RenderingMode$OneColumn$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Product$$anon$1(this)
});
$c_Lscopt_RenderingMode$OneColumn$.prototype.hashCode__I = (function() {
  return (-1151817412)
});
$c_Lscopt_RenderingMode$OneColumn$.prototype.toString__T = (function() {
  return "OneColumn"
});
$c_Lscopt_RenderingMode$OneColumn$.prototype.productArity__I = (function() {
  return 0
});
$c_Lscopt_RenderingMode$OneColumn$.prototype.productPrefix__T = (function() {
  return "OneColumn"
});
$c_Lscopt_RenderingMode$OneColumn$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
var $d_Lscopt_RenderingMode$OneColumn$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_RenderingMode$OneColumn$: 0
}, false, "scopt.RenderingMode$OneColumn$", {
  Lscopt_RenderingMode$OneColumn$: 1,
  O: 1,
  Lscopt_RenderingMode: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lscopt_RenderingMode$OneColumn$.prototype.$classData = $d_Lscopt_RenderingMode$OneColumn$;
var $n_Lscopt_RenderingMode$OneColumn$;
function $m_Lscopt_RenderingMode$OneColumn$() {
  if ((!$n_Lscopt_RenderingMode$OneColumn$)) {
    $n_Lscopt_RenderingMode$OneColumn$ = new $c_Lscopt_RenderingMode$OneColumn$()
  };
  return $n_Lscopt_RenderingMode$OneColumn$
}
/** @constructor */
function $c_Lscopt_RenderingMode$TwoColumns$() {
  /*<skip>*/
}
$c_Lscopt_RenderingMode$TwoColumns$.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_O();
$c_Lscopt_RenderingMode$TwoColumns$.prototype.constructor = $c_Lscopt_RenderingMode$TwoColumns$;
/** @constructor */
function $h_Lscopt_RenderingMode$TwoColumns$() {
  /*<skip>*/
}
$h_Lscopt_RenderingMode$TwoColumns$.prototype = $c_Lscopt_RenderingMode$TwoColumns$.prototype;
$c_Lscopt_RenderingMode$TwoColumns$.prototype.productIterator__sc_Iterator = (function() {
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Product$$anon$1(this)
});
$c_Lscopt_RenderingMode$TwoColumns$.prototype.hashCode__I = (function() {
  return (-1168155631)
});
$c_Lscopt_RenderingMode$TwoColumns$.prototype.toString__T = (function() {
  return "TwoColumns"
});
$c_Lscopt_RenderingMode$TwoColumns$.prototype.productArity__I = (function() {
  return 0
});
$c_Lscopt_RenderingMode$TwoColumns$.prototype.productPrefix__T = (function() {
  return "TwoColumns"
});
$c_Lscopt_RenderingMode$TwoColumns$.prototype.productElement__I__O = (function(n) {
  throw $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$ct_jl_IndexOutOfBoundsException__T__(new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_jl_IndexOutOfBoundsException(), ("" + n))
});
var $d_Lscopt_RenderingMode$TwoColumns$ = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  Lscopt_RenderingMode$TwoColumns$: 0
}, false, "scopt.RenderingMode$TwoColumns$", {
  Lscopt_RenderingMode$TwoColumns$: 1,
  O: 1,
  Lscopt_RenderingMode: 1,
  s_Equals: 1,
  s_Product: 1,
  Ljava_io_Serializable: 1,
  s_deriving_Mirror: 1,
  s_deriving_Mirror$Product: 1,
  s_deriving_Mirror$Singleton: 1
});
$c_Lscopt_RenderingMode$TwoColumns$.prototype.$classData = $d_Lscopt_RenderingMode$TwoColumns$;
var $n_Lscopt_RenderingMode$TwoColumns$;
function $m_Lscopt_RenderingMode$TwoColumns$() {
  if ((!$n_Lscopt_RenderingMode$TwoColumns$)) {
    $n_Lscopt_RenderingMode$TwoColumns$ = new $c_Lscopt_RenderingMode$TwoColumns$()
  };
  return $n_Lscopt_RenderingMode$TwoColumns$
}
/** @constructor */
function $c_sc_MapView$MapValues(underlying, f) {
  this.sc_MapView$MapValues__f_underlying = null;
  this.sc_MapView$MapValues__f_f = null;
  this.sc_MapView$MapValues__f_underlying = underlying;
  this.sc_MapView$MapValues__f_f = f
}
$c_sc_MapView$MapValues.prototype = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$h_sc_AbstractMapView();
$c_sc_MapView$MapValues.prototype.constructor = $c_sc_MapView$MapValues;
/** @constructor */
function $h_sc_MapView$MapValues() {
  /*<skip>*/
}
$h_sc_MapView$MapValues.prototype = $c_sc_MapView$MapValues.prototype;
$c_sc_MapView$MapValues.prototype.iterator__sc_Iterator = (function() {
  var this$2 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.sc_MapView$MapValues__f_underlying).iterator__sc_Iterator());
  var f = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sjsr_AnonFunction1(((kv$2) => {
    var kv = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$as_T2(kv$2);
    return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_T2($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(kv)._1__O(), $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.sc_MapView$MapValues__f_f).apply__O__O($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(kv)._2__O()))
  }));
  return new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_sc_Iterator$$anon$9(this$2, f)
});
$c_sc_MapView$MapValues.prototype.get__O__s_Option = (function(key) {
  var this$1 = $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.sc_MapView$MapValues__f_underlying).get__O__s_Option(key));
  var f = this.sc_MapView$MapValues__f_f;
  return (this$1.isEmpty__Z() ? $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$m_s_None$() : new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$c_s_Some($j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(f).apply__O__O(this$1.get__O())))
});
$c_sc_MapView$MapValues.prototype.knownSize__I = (function() {
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.sc_MapView$MapValues__f_underlying).knownSize__I()
});
$c_sc_MapView$MapValues.prototype.isEmpty__Z = (function() {
  return $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$n(this.sc_MapView$MapValues__f_underlying).isEmpty__Z()
});
var $d_sc_MapView$MapValues = new $j_internal$002db4e3282ff5c48a84df63c4ba1f1e462d09656718.$TypeData().initClass({
  sc_MapView$MapValues: 0
}, false, "scala.collection.MapView$MapValues", {
  sc_MapView$MapValues: 1,
  sc_AbstractMapView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_MapView: 1,
  sc_MapOps: 1,
  s_PartialFunction: 1,
  F1: 1
});
$c_sc_MapView$MapValues.prototype.$classData = $d_sc_MapView$MapValues;
let $e_HelpText = $m_Lvyxal_HelpText$();
export { $e_HelpText as HelpText };
//# sourceMappingURL=helpText.js.map
