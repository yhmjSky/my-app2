"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __toBinary = /* @__PURE__ */ (() => {
    var table = new Uint8Array(128);
    for (var i = 0; i < 64; i++)
      table[i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i * 4 - 205] = i;
    return (base64) => {
      var n = base64.length, bytes = new Uint8Array((n - (base64[n - 1] == "=") - (base64[n - 2] == "=")) * 3 / 4 | 0);
      for (var i2 = 0, j = 0; i2 < n; ) {
        var c0 = table[base64.charCodeAt(i2++)], c1 = table[base64.charCodeAt(i2++)];
        var c2 = table[base64.charCodeAt(i2++)], c3 = table[base64.charCodeAt(i2++)];
        bytes[j++] = c0 << 2 | c1 >> 4;
        bytes[j++] = c1 << 4 | c2 >> 2;
        bytes[j++] = c2 << 6 | c3;
      }
      return bytes;
    };
  })();

  // wasm-stub:D:\WebStormProjects\somedemo2\my-app\node_modules\.pnpm\@dqbd+tiktoken@1.0.7\node_modules\@dqbd\tiktoken\tiktoken_bg.wasm
  var tiktoken_bg_exports2 = {};
  __export(tiktoken_bg_exports2, {
    default: () => tiktoken_bg_default2
  });

  // wasm-binary:D:\WebStormProjects\somedemo2\my-app\node_modules\.pnpm\@dqbd+tiktoken@1.0.7\node_modules\@dqbd\tiktoken\tiktoken_bg.wasm
  var tiktoken_bg_exports = {};
  __export(tiktoken_bg_exports, {
    default: () => tiktoken_bg_default
  });

  // wasm-stub:D:\WebStormProjects\somedemo2\my-app\node_modules\.pnpm\@dqbd+tiktoken@1.0.7\node_modules\@dqbd\tiktoken\tiktoken_bg.wasm
  var tiktoken_bg_default2 = (imports) => WebAssembly.instantiate(tiktoken_bg_default, imports).then(
    (result) => result.instance.exports
  );

  // node_modules/.pnpm/@dqbd+tiktoken@1.0.7/node_modules/@dqbd/tiktoken/tiktoken_bg.js
  var wasm;
  function __wbg_set_wasm(val) {
    wasm = val;
  }
  var heap = new Array(128).fill(void 0);
  heap.push(void 0, null, true, false);
  function getObject(idx) {
    return heap[idx];
  }
  var heap_next = heap.length;
  function dropObject(idx) {
    if (idx < 132)
      return;
    heap[idx] = heap_next;
    heap_next = idx;
  }
  function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
  }
  var WASM_VECTOR_LEN = 0;
  var cachedUint8Memory0 = null;
  function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
      cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
  }
  var lTextEncoder = typeof TextEncoder === "undefined" ? (0, module.require)("util").TextEncoder : TextEncoder;
  var cachedTextEncoder = new lTextEncoder("utf-8");
  var encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
  } : function(arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
      read: arg.length,
      written: buf.length
    };
  };
  function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === void 0) {
      const buf = cachedTextEncoder.encode(arg);
      const ptr2 = malloc(buf.length);
      getUint8Memory0().subarray(ptr2, ptr2 + buf.length).set(buf);
      WASM_VECTOR_LEN = buf.length;
      return ptr2;
    }
    let len = arg.length;
    let ptr = malloc(len);
    const mem = getUint8Memory0();
    let offset = 0;
    for (; offset < len; offset++) {
      const code = arg.charCodeAt(offset);
      if (code > 127)
        break;
      mem[ptr + offset] = code;
    }
    if (offset !== len) {
      if (offset !== 0) {
        arg = arg.slice(offset);
      }
      ptr = realloc(ptr, len, len = offset + arg.length * 3);
      const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
      const ret = encodeString(arg, view);
      offset += ret.written;
    }
    WASM_VECTOR_LEN = offset;
    return ptr;
  }
  var cachedInt32Memory0 = null;
  function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
      cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
  }
  var lTextDecoder = typeof TextDecoder === "undefined" ? (0, module.require)("util").TextDecoder : TextDecoder;
  var cachedTextDecoder = new lTextDecoder("utf-8", { ignoreBOM: true, fatal: true });
  cachedTextDecoder.decode();
  function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
  }
  function addHeapObject(obj) {
    if (heap_next === heap.length)
      heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];
    heap[idx] = obj;
    return idx;
  }
  var cachedUint32Memory0 = null;
  function getUint32Memory0() {
    if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
      cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
  }
  function getArrayU32FromWasm0(ptr, len) {
    return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
  }
  function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1);
    getUint8Memory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
  }
  function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getUint32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
  }
  function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
  }
  function encoding_for_model(model, extend_special_tokens) {
    if (wasm == null)
      throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
    try {
      const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
      const ptr0 = passStringToWasm0(model, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1);
      const len0 = WASM_VECTOR_LEN;
      wasm.encoding_for_model(retptr, ptr0, len0, addHeapObject(extend_special_tokens));
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var r2 = getInt32Memory0()[retptr / 4 + 2];
      if (r2) {
        throw takeObject(r1);
      }
      return Tiktoken.__wrap(r0);
    } finally {
      wasm.__wbindgen_add_to_stack_pointer(16);
    }
  }
  var Tiktoken = class {
    static __wrap(ptr) {
      const obj = Object.create(Tiktoken.prototype);
      obj.ptr = ptr;
      return obj;
    }
    __destroy_into_raw() {
      const ptr = this.ptr;
      this.ptr = 0;
      return ptr;
    }
    free() {
      if (wasm == null)
        throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
      const ptr = this.__destroy_into_raw();
      wasm.__wbg_tiktoken_free(ptr);
    }
    /**
    * @param {string} tiktoken_bfe
    * @param {any} special_tokens
    * @param {string} pat_str
    */
    constructor(tiktoken_bfe, special_tokens, pat_str) {
      if (wasm == null)
        throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
      const ptr0 = passStringToWasm0(tiktoken_bfe, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1);
      const len0 = WASM_VECTOR_LEN;
      const ptr1 = passStringToWasm0(pat_str, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1);
      const len1 = WASM_VECTOR_LEN;
      const ret = wasm.tiktoken_new(ptr0, len0, addHeapObject(special_tokens), ptr1, len1);
      return Tiktoken.__wrap(ret);
    }
    /**
    * @returns {string | undefined}
    */
    get name() {
      try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.tiktoken_name(retptr, this.ptr);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        let v0;
        if (r0 !== 0) {
          v0 = getStringFromWasm0(r0, r1).slice();
          wasm.__wbindgen_export_2(r0, r1 * 1);
        }
        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {string} text
    * @param {any} allowed_special
    * @param {any} disallowed_special
    * @returns {Uint32Array}
    */
    encode(text, allowed_special, disallowed_special) {
      if (wasm == null)
        throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
      try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1);
        const len0 = WASM_VECTOR_LEN;
        wasm.tiktoken_encode(retptr, this.ptr, ptr0, len0, addHeapObject(allowed_special), addHeapObject(disallowed_special));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        var r3 = getInt32Memory0()[retptr / 4 + 3];
        if (r3) {
          throw takeObject(r2);
        }
        var v1 = getArrayU32FromWasm0(r0, r1).slice();
        wasm.__wbindgen_export_2(r0, r1 * 4);
        return v1;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {string} text
    * @returns {Uint32Array}
    */
    encode_ordinary(text) {
      if (wasm == null)
        throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
      try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1);
        const len0 = WASM_VECTOR_LEN;
        wasm.tiktoken_encode_ordinary(retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayU32FromWasm0(r0, r1).slice();
        wasm.__wbindgen_export_2(r0, r1 * 4);
        return v1;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {string} text
    * @param {any} allowed_special
    * @param {any} disallowed_special
    * @returns {any}
    */
    encode_with_unstable(text, allowed_special, disallowed_special) {
      if (wasm == null)
        throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
      try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(text, wasm.__wbindgen_export_0, wasm.__wbindgen_export_1);
        const len0 = WASM_VECTOR_LEN;
        wasm.tiktoken_encode_with_unstable(retptr, this.ptr, ptr0, len0, addHeapObject(allowed_special), addHeapObject(disallowed_special));
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
          throw takeObject(r1);
        }
        return takeObject(r0);
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {Uint8Array} bytes
    * @returns {number}
    */
    encode_single_token(bytes) {
      if (wasm == null)
        throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
      const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_export_0);
      const len0 = WASM_VECTOR_LEN;
      const ret = wasm.tiktoken_encode_single_token(this.ptr, ptr0, len0);
      return ret >>> 0;
    }
    /**
    * @param {Uint32Array} tokens
    * @returns {Uint8Array}
    */
    decode(tokens) {
      if (wasm == null)
        throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
      try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passArray32ToWasm0(tokens, wasm.__wbindgen_export_0);
        const len0 = WASM_VECTOR_LEN;
        wasm.tiktoken_decode(retptr, this.ptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v1 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_export_2(r0, r1 * 1);
        return v1;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @param {number} token
    * @returns {Uint8Array}
    */
    decode_single_token_bytes(token) {
      if (wasm == null)
        throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
      try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.tiktoken_decode_single_token_bytes(retptr, this.ptr, token);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var v0 = getArrayU8FromWasm0(r0, r1).slice();
        wasm.__wbindgen_export_2(r0, r1 * 1);
        return v0;
      } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
      }
    }
    /**
    * @returns {any}
    */
    token_byte_values() {
      if (wasm == null)
        throw new Error("@dqbd/tiktoken: WASM binary has not been propery initialized.");
      const ret = wasm.tiktoken_token_byte_values(this.ptr);
      return takeObject(ret);
    }
  };

  // node_modules/.pnpm/@dqbd+tiktoken@1.0.7/node_modules/@dqbd/tiktoken/tiktoken.js
  __wbg_set_wasm(tiktoken_bg_exports2);

  // src/app.d.ts
  console.log(encoding_for_model("gpt-3.5-turbo-0301").encode("hello world"));
})();