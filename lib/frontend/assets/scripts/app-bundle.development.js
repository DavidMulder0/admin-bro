var AdminBro = (function (React, reactRedux, reactRouterDom, styled, reactI18next, i18n, DesignSystem, reactRouter, axios, flat$1, Select, Select$1, reactDom, redux) {
	'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	function _interopNamespace(e) {
		if (e && e.__esModule) return e;
		var n = Object.create(null);
		if (e) {
			Object.keys(e).forEach(function (k) {
				if (k !== 'default') {
					var d = Object.getOwnPropertyDescriptor(e, k);
					Object.defineProperty(n, k, d.get ? d : {
						enumerable: true,
						get: function () {
							return e[k];
						}
					});
				}
			});
		}
		n['default'] = e;
		return Object.freeze(n);
	}

	var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
	var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
	var i18n__default = /*#__PURE__*/_interopDefaultLegacy(i18n);
	var DesignSystem__namespace = /*#__PURE__*/_interopNamespace(DesignSystem);
	var axios__default = /*#__PURE__*/_interopDefaultLegacy(axios);
	var Select__default = /*#__PURE__*/_interopDefaultLegacy(Select);
	var Select__default$1 = /*#__PURE__*/_interopDefaultLegacy(Select$1);

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, basedir, module) {
		return module = {
			path: basedir,
			exports: {},
			require: function (path, base) {
				return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
			}
		}, fn(module, module.exports), module.exports;
	}

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
	}

	var runtime_1 = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	var runtime = (function (exports) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined$1; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  function define(obj, key, value) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	    return obj[key];
	  }
	  try {
	    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
	    define({}, "");
	  } catch (err) {
	    define = function(obj, key, value) {
	      return obj[key] = value;
	    };
	  }

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  exports.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = define(
	    GeneratorFunctionPrototype,
	    toStringTagSymbol,
	    "GeneratorFunction"
	  );

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      define(prototype, method, function(arg) {
	        return this._invoke(method, arg);
	      });
	    });
	  }

	  exports.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  exports.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      define(genFun, toStringTagSymbol, "GeneratorFunction");
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  exports.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator, PromiseImpl) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return PromiseImpl.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return PromiseImpl.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new PromiseImpl(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  exports.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
	    if (PromiseImpl === void 0) PromiseImpl = Promise;

	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList),
	      PromiseImpl
	    );

	    return exports.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined$1) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        // Note: ["return"] must be used for ES3 parsing compatibility.
	        if (delegate.iterator["return"]) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined$1;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined$1;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  define(Gp, toStringTagSymbol, "Generator");

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  exports.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined$1;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  exports.values = values;

	  function doneResult() {
	    return { value: undefined$1, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined$1;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined$1;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined$1;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined$1;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined$1;
	      }

	      return ContinueSentinel;
	    }
	  };

	  // Regardless of whether this script is executing as a CommonJS module
	  // or not, return the runtime object so that we can declare the variable
	  // regeneratorRuntime in the outer scope, which allows this module to be
	  // injected easily by `bin/regenerator --include-runtime script.js`.
	  return exports;

	}(
	  // If this script is executing as a CommonJS module, use module.exports
	  // as the regeneratorRuntime namespace. Otherwise create a new empty
	  // object. Either way, the resulting object will be used to initialize
	  // the regeneratorRuntime variable at the top of this file.
	   module.exports 
	));

	try {
	  regeneratorRuntime = runtime;
	} catch (accidentalStrictMode) {
	  // This module should not be running in strict mode, so the above
	  // assignment should always work unless something is misconfigured. Just
	  // in case runtime.js accidentally runs in strict mode, we can escape
	  // strict mode using a global Function call. This could conceivably fail
	  // if a Content Security Policy forbids using Function, but in that case
	  // the proper solution is to fix the accidental strict mode problem. If
	  // you've misconfigured your bundler to force strict mode and applied a
	  // CSP to forbid Function, and you're not willing to fix either of those
	  // problems, please detail your unique predicament in a GitHub issue.
	  Function("r", "regeneratorRuntime = r")(runtime);
	}
	});

	var regenerator = runtime_1;

	let globalAny = {};

	try {
	  globalAny = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  }
	}
	/**
	 * Base Params for a any function
	 * @alias ActionParams
	 * @memberof ViewHelpers
	 */


	const runDate = new Date();
	/**
	 * Collection of helper methods available in the views
	 */

	class ViewHelpers {
	  constructor({
	    options
	  } = {}) {
	    let opts = ViewHelpers.getPaths(options);
	    opts = opts || {
	      rootPath: '/admin'
	    }; // when ViewHelpers are used on the frontend, paths are taken from global Redux State

	    this.options = opts;
	  }

	  static getPaths(options) {
	    var _globalAny$REDUX_STAT;

	    return options || ((_globalAny$REDUX_STAT = globalAny.REDUX_STATE) === null || _globalAny$REDUX_STAT === void 0 ? void 0 : _globalAny$REDUX_STAT.paths);
	  }
	  /**
	   * To each related path adds rootPath passed by the user, as well as a query string
	   * @private
	   * @param  {Array<string>} [paths]      list of parts of the url
	   * @return {string}       path
	   * @return {query}        [search=''] query string which can be fetch
	   *                                    from `location.search`
	   */


	  urlBuilder(paths = [], search = '') {
	    const separator = '/';
	    const replace = new RegExp(`${separator}{1,}`, 'g');
	    let {
	      rootPath
	    } = this.options;

	    if (!rootPath.startsWith(separator)) {
	      rootPath = `${separator}${rootPath}`;
	    }

	    const parts = [rootPath, ...paths];
	    return `${parts.join(separator).replace(replace, separator)}${search}`;
	  }
	  /**
	   * Returns login URL
	   * @return {string}
	   */


	  loginUrl() {
	    return this.options.loginPath;
	  }
	  /**
	   * Returns logout URL
	   * @return {string}
	   */


	  logoutUrl() {
	    return this.options.logoutPath;
	  }
	  /**
	   * Returns URL for the dashboard
	   * @return {string}
	   */


	  dashboardUrl() {
	    return this.options.rootPath;
	  }
	  /**
	   * Returns URL for given page name
	   * @param {string} pageName       page name which is a unique key specified in
	   *                                {@link AdminBroOptions}
	   * @return {string}
	   */


	  pageUrl(pageName) {
	    return this.urlBuilder(['pages', pageName]);
	  }
	  /**
	   * Returns url for a `edit` action in given Resource. Uses {@link recordActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} recordId    id to the record
	   * @param {string} [search]        optional query string
	   */


	  editUrl(resourceId, recordId, search) {
	    return this.recordActionUrl({
	      resourceId,
	      recordId,
	      actionName: 'edit',
	      search
	    });
	  }
	  /**
	   * Returns url for a `show` action in given Resource. Uses {@link recordActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} recordId    id to the record
	   * @param {string} [search]        optional query string
	   */


	  showUrl(resourceId, recordId, search) {
	    return this.recordActionUrl({
	      resourceId,
	      recordId,
	      actionName: 'show',
	      search
	    });
	  }
	  /**
	   * Returns url for a `delete` action in given Resource. Uses {@link recordActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} recordId    id to the record
	   * @param {string} [search]        optional query string
	   */


	  deleteUrl(resourceId, recordId, search) {
	    return this.recordActionUrl({
	      resourceId,
	      recordId,
	      actionName: 'delete',
	      search
	    });
	  }
	  /**
	   * Returns url for a `new` action in given Resource. Uses {@link resourceActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} [search]        optional query string
	   */


	  newUrl(resourceId, search) {
	    return this.resourceActionUrl({
	      resourceId,
	      actionName: 'new',
	      search
	    });
	  }
	  /**
	   * Returns url for a `new` action in given Resource. Uses {@link resourceActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {string} [search]        optional query string
	   */


	  listUrl(resourceId, search) {
	    return this.resourceActionUrl({
	      resourceId,
	      actionName: 'list',
	      search
	    });
	  }
	  /**
	   * Returns url for a `bulkDelete` action in given Resource. Uses {@link bulkActionUrl}
	   *
	   * @param {string} resourceId  id to the resource
	   * @param {Array<string>} recordIds   separated by comma records
	   * @param {string} [search]        optional query string
	   */


	  bulkDeleteUrl(resourceId, recordIds, search) {
	    return this.bulkActionUrl({
	      resourceId,
	      recordIds,
	      actionName: 'bulkDelete',
	      search
	    });
	  }
	  /**
	   * Returns resourceAction url
	   *
	   * @param   {ResourceActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {string}  options.actionName
	   * @param   {string}  [options.search]        optional query string
	   *
	   * @return  {string}
	   */


	  resourceActionUrl({
	    resourceId,
	    actionName,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId, 'actions', actionName], search);
	  }

	  resourceUrl({
	    resourceId,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId], search);
	  }
	  /**
	   * Returns recordAction url
	   *
	   * @param   {RecordActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {string}  options.recordId
	   * @param   {string}  options.actionName
	   *
	   * @return  {string}
	   */


	  recordActionUrl({
	    resourceId,
	    recordId,
	    actionName,
	    search
	  }) {
	    return this.urlBuilder(['resources', resourceId, 'records', recordId, actionName], search);
	  }
	  /**
	   * Returns bulkAction url
	   *
	   * @param   {BulkActionParams}  options
	   * @param   {string}  options.resourceId
	   * @param   {Array<string>}  [options.recordIds]
	   * @param   {string}  options.actionName
	   *
	   * @return  {string}
	   */


	  bulkActionUrl({
	    resourceId,
	    recordIds,
	    actionName,
	    search
	  }) {
	    const url = this.urlBuilder(['resources', resourceId, 'bulk', actionName]);

	    if (recordIds && recordIds.length) {
	      const query = new URLSearchParams(search);
	      query.set('recordIds', recordIds.join(','));
	      return `${url}?${query.toString()}`;
	    }

	    return `${url}${search || ''}`;
	  }
	  /**
	   * Returns absolute path to a given asset.
	   * @private
	   *
	   * @param  {string} asset
	   * @return {string}
	   */


	  assetPath(asset) {
	    if (this.options.assetsCDN) {
	      const url = new URL(asset, this.options.assetsCDN).href; // adding timestamp to the href invalidates the CDN cache

	      return `${url}?date=${runDate.getTime()}`;
	    }

	    return this.urlBuilder(['frontend', 'assets', asset]);
	  }

	}

	var _extends_1 = createCommonjsModule(function (module) {
	function _extends() {
	  module.exports = _extends = Object.assign || function (target) {
	    for (var i = 1; i < arguments.length; i++) {
	      var source = arguments[i];

	      for (var key in source) {
	        if (Object.prototype.hasOwnProperty.call(source, key)) {
	          target[key] = source[key];
	        }
	      }
	    }

	    return target;
	  };

	  return _extends.apply(this, arguments);
	}

	module.exports = _extends;
	});

	/**
	 * @private
	 *
	 * @classdesc
	 * Overrides one of the component form AdminBro core when user pass its name to
	 * {@link AdminBro.bundle} method.
	 *
	 * If case of being overridden, component receives additional prop: `OriginalComponent`
	 *
	 * @example
	 * AdminBro.bundle('./path/to/component', 'SidebarFooter')
	 */
	function allowOverride(OriginalComponent, name) {
	  // ssr
	  if (typeof window === 'undefined') {
	    return OriginalComponent;
	  }

	  const WrapperComponent = props => {
	    let globalAny = window;
	    globalAny = window;
	    let Component = OriginalComponent;

	    if (globalAny.AdminBro && globalAny.AdminBro.UserComponents && globalAny.AdminBro.UserComponents[name]) {
	      Component = globalAny.AdminBro.UserComponents[name];
	      return /*#__PURE__*/React__default['default'].createElement(Component, _extends_1({}, props, {
	        OriginalComponent: OriginalComponent
	      }));
	    }

	    return /*#__PURE__*/React__default['default'].createElement(Component, props);
	  };

	  return WrapperComponent;
	}

	const StyledLogo = styled__default['default'](reactRouterDom.Link).withConfig({
	  displayName: "sidebar-branding__StyledLogo",
	  componentId: "sc-1ozeetj-0"
	})(["text-align:center;display:flex;align-content:center;justify-content:center;flex-shrink:0;padding:", " ", " ", ";text-decoration:none;& > h1{text-decoration:none;font-weight:", ";font-size:", ";color:", ";font-size:", ";line-height:", ";}& > img{max-width:170px;}&:hover h1{color:", ";}"], DesignSystem.themeGet('space', 'lg'), DesignSystem.themeGet('space', 'xxl'), DesignSystem.themeGet('space', 'xxl'), DesignSystem.themeGet('fontWeights', 'bolder'), DesignSystem.themeGet('fontWeights', 'bolder'), DesignSystem.themeGet('colors', 'grey80'), DesignSystem.themeGet('fontSizes', 'xl'), DesignSystem.themeGet('lineHeights', 'xl'), DesignSystem.themeGet('colors', 'primary100'));
	const h = new ViewHelpers();

	const SidebarBranding = props => {
	  const {
	    branding
	  } = props;
	  const {
	    logo,
	    companyName
	  } = branding;
	  return /*#__PURE__*/React__default['default'].createElement(StyledLogo, {
	    className: DesignSystem.cssClass('Logo'),
	    to: h.dashboardUrl()
	  }, logo ? /*#__PURE__*/React__default['default'].createElement("img", {
	    src: logo,
	    alt: companyName
	  }) : /*#__PURE__*/React__default['default'].createElement("h1", null, companyName));
	};

	var SidebarBranding$1 = allowOverride(SidebarBranding, 'SidebarBranding');

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array == null ? 0 : array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	var _arrayReduce = arrayReduce;

	/**
	 * The base implementation of `_.propertyOf` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyOf(object) {
	  return function(key) {
	    return object == null ? undefined : object[key];
	  };
	}

	var _basePropertyOf = basePropertyOf;

	/** Used to map Latin Unicode letters to basic Latin letters. */
	var deburredLetters = {
	  // Latin-1 Supplement block.
	  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
	  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
	  '\xc7': 'C',  '\xe7': 'c',
	  '\xd0': 'D',  '\xf0': 'd',
	  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
	  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
	  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
	  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
	  '\xd1': 'N',  '\xf1': 'n',
	  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
	  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
	  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
	  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
	  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
	  '\xc6': 'Ae', '\xe6': 'ae',
	  '\xde': 'Th', '\xfe': 'th',
	  '\xdf': 'ss',
	  // Latin Extended-A block.
	  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
	  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
	  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
	  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
	  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
	  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
	  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
	  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
	  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
	  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
	  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
	  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
	  '\u0134': 'J',  '\u0135': 'j',
	  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
	  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
	  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
	  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
	  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
	  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
	  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
	  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
	  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
	  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
	  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
	  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
	  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
	  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
	  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
	  '\u0174': 'W',  '\u0175': 'w',
	  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
	  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
	  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
	  '\u0132': 'IJ', '\u0133': 'ij',
	  '\u0152': 'Oe', '\u0153': 'oe',
	  '\u0149': "'n", '\u017f': 's'
	};

	/**
	 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
	 * letters to basic Latin letters.
	 *
	 * @private
	 * @param {string} letter The matched letter to deburr.
	 * @returns {string} Returns the deburred letter.
	 */
	var deburrLetter = _basePropertyOf(deburredLetters);

	var _deburrLetter = deburrLetter;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	var _freeGlobal = freeGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = _freeGlobal || freeSelf || Function('return this')();

	var _root = root;

	/** Built-in value references. */
	var Symbol$1 = _root.Symbol;

	var _Symbol = Symbol$1;

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array == null ? 0 : array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	var _arrayMap = arrayMap;

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	var isArray_1 = isArray;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;

	/** Built-in value references. */
	var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];

	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}

	  var result = nativeObjectToString.call(value);
	  if (unmasked) {
	    if (isOwn) {
	      value[symToStringTag] = tag;
	    } else {
	      delete value[symToStringTag];
	    }
	  }
	  return result;
	}

	var _getRawTag = getRawTag;

	/** Used for built-in method references. */
	var objectProto$1 = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString$1 = objectProto$1.toString;

	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString$1.call(value);
	}

	var _objectToString = objectToString;

	/** `Object#toString` result references. */
	var nullTag = '[object Null]',
	    undefinedTag = '[object Undefined]';

	/** Built-in value references. */
	var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag$1 && symToStringTag$1 in Object(value))
	    ? _getRawTag(value)
	    : _objectToString(value);
	}

	var _baseGetTag = baseGetTag;

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && typeof value == 'object';
	}

	var isObjectLike_1 = isObjectLike;

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
	}

	var isSymbol_1 = isSymbol;

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isArray_1(value)) {
	    // Recursively convert values (susceptible to call stack limits).
	    return _arrayMap(value, baseToString) + '';
	  }
	  if (isSymbol_1(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	var _baseToString = baseToString;

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : _baseToString(value);
	}

	var toString_1 = toString;

	/** Used to match Latin Unicode letters (excluding mathematical operators). */
	var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

	/** Used to compose unicode character classes. */
	var rsComboMarksRange = '\\u0300-\\u036f',
	    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange = '\\u20d0-\\u20ff',
	    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

	/** Used to compose unicode capture groups. */
	var rsCombo = '[' + rsComboRange + ']';

	/**
	 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
	 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
	 */
	var reComboMark = RegExp(rsCombo, 'g');

	/**
	 * Deburrs `string` by converting
	 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
	 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
	 * letters to basic Latin letters and removing
	 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to deburr.
	 * @returns {string} Returns the deburred string.
	 * @example
	 *
	 * _.deburr('déjà vu');
	 * // => 'deja vu'
	 */
	function deburr(string) {
	  string = toString_1(string);
	  return string && string.replace(reLatin, _deburrLetter).replace(reComboMark, '');
	}

	var deburr_1 = deburr;

	/** Used to match words composed of alphanumeric characters. */
	var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

	/**
	 * Splits an ASCII `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function asciiWords(string) {
	  return string.match(reAsciiWord) || [];
	}

	var _asciiWords = asciiWords;

	/** Used to detect strings that need a more robust regexp to match words. */
	var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

	/**
	 * Checks if `string` contains a word composed of Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a word is found, else `false`.
	 */
	function hasUnicodeWord(string) {
	  return reHasUnicodeWord.test(string);
	}

	var _hasUnicodeWord = hasUnicodeWord;

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange$1 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
	    rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
	    rsDingbatRange = '\\u2700-\\u27bf',
	    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
	    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
	    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
	    rsPunctuationRange = '\\u2000-\\u206f',
	    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
	    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
	    rsVarRange = '\\ufe0e\\ufe0f',
	    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

	/** Used to compose unicode capture groups. */
	var rsApos = "['\u2019]",
	    rsBreak = '[' + rsBreakRange + ']',
	    rsCombo$1 = '[' + rsComboRange$1 + ']',
	    rsDigits = '\\d+',
	    rsDingbat = '[' + rsDingbatRange + ']',
	    rsLower = '[' + rsLowerRange + ']',
	    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo$1 + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsUpper = '[' + rsUpperRange + ']',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
	    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
	    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
	    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
	    reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
	    rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

	/** Used to match complex or compound words. */
	var reUnicodeWord = RegExp([
	  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
	  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
	  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
	  rsUpper + '+' + rsOptContrUpper,
	  rsOrdUpper,
	  rsOrdLower,
	  rsDigits,
	  rsEmoji
	].join('|'), 'g');

	/**
	 * Splits a Unicode `string` into an array of its words.
	 *
	 * @private
	 * @param {string} The string to inspect.
	 * @returns {Array} Returns the words of `string`.
	 */
	function unicodeWords(string) {
	  return string.match(reUnicodeWord) || [];
	}

	var _unicodeWords = unicodeWords;

	/**
	 * Splits `string` into an array of its words.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to inspect.
	 * @param {RegExp|string} [pattern] The pattern to match words.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {Array} Returns the words of `string`.
	 * @example
	 *
	 * _.words('fred, barney, & pebbles');
	 * // => ['fred', 'barney', 'pebbles']
	 *
	 * _.words('fred, barney, & pebbles', /[^, ]+/g);
	 * // => ['fred', 'barney', '&', 'pebbles']
	 */
	function words(string, pattern, guard) {
	  string = toString_1(string);
	  pattern = guard ? undefined : pattern;

	  if (pattern === undefined) {
	    return _hasUnicodeWord(string) ? _unicodeWords(string) : _asciiWords(string);
	  }
	  return string.match(pattern) || [];
	}

	var words_1 = words;

	/** Used to compose unicode capture groups. */
	var rsApos$1 = "['\u2019]";

	/** Used to match apostrophes. */
	var reApos = RegExp(rsApos$1, 'g');

	/**
	 * Creates a function like `_.camelCase`.
	 *
	 * @private
	 * @param {Function} callback The function to combine each word.
	 * @returns {Function} Returns the new compounder function.
	 */
	function createCompounder(callback) {
	  return function(string) {
	    return _arrayReduce(words_1(deburr_1(string).replace(reApos, '')), callback, '');
	  };
	}

	var _createCompounder = createCompounder;

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	var _baseSlice = baseSlice;

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : _baseSlice(array, start, end);
	}

	var _castSlice = castSlice;

	/** Used to compose unicode character classes. */
	var rsAstralRange$1 = '\\ud800-\\udfff',
	    rsComboMarksRange$2 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
	    rsComboRange$2 = rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
	    rsVarRange$1 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ$1 = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasUnicode = RegExp('[' + rsZWJ$1 + rsAstralRange$1  + rsComboRange$2 + rsVarRange$1 + ']');

	/**
	 * Checks if `string` contains Unicode symbols.
	 *
	 * @private
	 * @param {string} string The string to inspect.
	 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
	 */
	function hasUnicode(string) {
	  return reHasUnicode.test(string);
	}

	var _hasUnicode = hasUnicode;

	/**
	 * Converts an ASCII `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function asciiToArray(string) {
	  return string.split('');
	}

	var _asciiToArray = asciiToArray;

	/** Used to compose unicode character classes. */
	var rsAstralRange$2 = '\\ud800-\\udfff',
	    rsComboMarksRange$3 = '\\u0300-\\u036f',
	    reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
	    rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
	    rsComboRange$3 = rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
	    rsVarRange$2 = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange$2 + ']',
	    rsCombo$2 = '[' + rsComboRange$3 + ']',
	    rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier$1 = '(?:' + rsCombo$2 + '|' + rsFitz$1 + ')',
	    rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
	    rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ$2 = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod$1 = rsModifier$1 + '?',
	    rsOptVar$1 = '[' + rsVarRange$2 + ']?',
	    rsOptJoin$1 = '(?:' + rsZWJ$2 + '(?:' + [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsOptVar$1 + reOptMod$1 + ')*',
	    rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
	    rsSymbol = '(?:' + [rsNonAstral$1 + rsCombo$2 + '?', rsCombo$2, rsRegional$1, rsSurrPair$1, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reUnicode = RegExp(rsFitz$1 + '(?=' + rsFitz$1 + ')|' + rsSymbol + rsSeq$1, 'g');

	/**
	 * Converts a Unicode `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function unicodeToArray(string) {
	  return string.match(reUnicode) || [];
	}

	var _unicodeToArray = unicodeToArray;

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return _hasUnicode(string)
	    ? _unicodeToArray(string)
	    : _asciiToArray(string);
	}

	var _stringToArray = stringToArray;

	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new case function.
	 */
	function createCaseFirst(methodName) {
	  return function(string) {
	    string = toString_1(string);

	    var strSymbols = _hasUnicode(string)
	      ? _stringToArray(string)
	      : undefined;

	    var chr = strSymbols
	      ? strSymbols[0]
	      : string.charAt(0);

	    var trailing = strSymbols
	      ? _castSlice(strSymbols, 1).join('')
	      : string.slice(1);

	    return chr[methodName]() + trailing;
	  };
	}

	var _createCaseFirst = createCaseFirst;

	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
	var upperFirst = _createCaseFirst('toUpperCase');

	var upperFirst_1 = upperFirst;

	/**
	 * Converts `string` to
	 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
	 *
	 * @static
	 * @memberOf _
	 * @since 3.1.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the start cased string.
	 * @example
	 *
	 * _.startCase('--foo-bar--');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('fooBar');
	 * // => 'Foo Bar'
	 *
	 * _.startCase('__FOO_BAR__');
	 * // => 'FOO BAR'
	 */
	var startCase = _createCompounder(function(result, word, index) {
	  return result + (index ? ' ' : '') + upperFirst_1(word);
	});

	var startCase_1 = startCase;

	/**
	 * @memberof TranslateFunctions
	 * @alias TranslateFunction
	 */

	const formatName = name => name.split('.').join('&#46;');

	const translate = (i18n, key, name, resourceId, options) => {
	  var _realOptions$defaultV;

	  const realOptions = (typeof resourceId === 'string' ? options : resourceId) || {};
	  const formattedName = formatName(name);
	  let keys = [`${key}.${formattedName}`];

	  if (resourceId) {
	    keys = [`resources.${resourceId}.${key}.${formattedName}`, ...keys];
	  }

	  if (i18n.exists(keys)) {
	    return i18n.t(keys, realOptions);
	  }

	  return (_realOptions$defaultV = realOptions.defaultValue) !== null && _realOptions$defaultV !== void 0 ? _realOptions$defaultV : startCase_1(name);
	};

	const createFunctions = i18n => {
	  const translateAction = (actionName, resourceId, options) => translate(i18n, 'actions', actionName, resourceId, options);

	  const translateButton = (buttonLabel, resourceId, options) => translate(i18n, 'buttons', buttonLabel, resourceId, options);

	  const translateLabel = (label, resourceId, options) => translate(i18n, 'labels', label, resourceId, options);

	  const translateProperty = (propertyName, resourceId, options) => translate(i18n, 'properties', propertyName, resourceId, options);

	  const translateMessage = (messageName, resourceId, options) => translate(i18n, 'messages', messageName, resourceId, options);

	  return {
	    translateAction,
	    ta: translateAction,
	    translateButton,
	    tb: translateButton,
	    translateLabel,
	    tl: translateLabel,
	    translateProperty,
	    tp: translateProperty,
	    translateMessage,
	    tm: translateMessage,
	    t: i18n.t,
	    translate: i18n.t
	  };
	};

	/**
	 * Extends {@link TranslateFunctions}. Apart from that it also returns all the properties
	 * defined below.
	 *
	 * ```javascript
	 * import { useTranslation } from 'admin-bro'
	 *
	 * const MyComponent = () => {
	 *   const { translateButton } = useTranslation()
	 *
	 *   return (
	 *     <Box>
	 *       <Button variant="primary" onClick={...}>{translateButton('save')}<Button>
	 *     </Box>
	 *   )
	 * }
	 * ```
	 *
	 * @memberof useTranslation
	 * @alias UseTranslationResponse
	 *
	 * @property {TranslateFunction} ... All functions defined in {@link TranslateFunctions}
	 */

	/**
	 * @classdesc
	 * Extends the useTranslation hook from react-i18next library.
	 *
	 * Returns all the {@link TranslateFunctions} + methods returned by the original
	 * useTranslation method from react-i18next like: `i18n` instance and `ready` flag.
	 *
	 * @class
	 * @subcategory Hooks
	 * @bundle
	 * @hideconstructor
	 * @returns {UseTranslationResponse}
	 */
	const useTranslation = () => {
	  // eslint-disable-next-line no-shadow
	  const {
	    i18n,
	    ...rest
	  } = reactI18next.useTranslation();
	  const translateFunctions = createFunctions(i18n);
	  return { ...rest,
	    i18n,
	    ...translateFunctions
	  };
	};

	const h$1 = new ViewHelpers();

	const SidebarPages = props => {
	  const {
	    pages
	  } = props;
	  const {
	    translateLabel
	  } = useTranslation();
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();

	  if (!pages || !pages.length) {
	    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null);
	  }

	  const isActive = page => !!location.pathname.match(`/pages/${page.name}`);

	  const elements = pages.map(page => ({
	    id: page.name,
	    label: page.name,
	    isSelected: isActive(page),
	    icon: page.icon,
	    href: h$1.pageUrl(page.name),
	    onClick: (event, element) => {
	      event.preventDefault();

	      if (element.href) {
	        history.push(element.href);
	      }
	    }
	  }));
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Navigation, {
	    label: translateLabel('pages'),
	    elements: elements
	  });
	};

	const SidebarFooter = () => /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	  mt: "lg"
	}, /*#__PURE__*/React__default['default'].createElement(DesignSystem.SoftwareBrothers, null));

	var SidebarFooter$1 = allowOverride(SidebarFooter, 'SidebarFooter');

	let globalAny$1 = {};

	try {
	  globalAny$1 = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  } else {
	    globalAny$1 = {
	      isOnServer: true
	    };
	  }
	}
	/**
	 * Type of an [axios request]{@link https://github.com/axios/axios/blob/master/index.d.ts#L43}
	 *
	 * @typedef {object} AxiosRequestConfig
	 * @alias AxiosRequestConfig
	 * @memberof ApiClient
	 * @see https://github.com/axios/axios/blob/master/index.d.ts#L43
	 */


	const checkResponse = response => {
	  if (globalAny$1.isOnServer) {
	    return;
	  }

	  const loginUrl = [globalAny$1.location.origin, globalAny$1.REDUX_STATE.paths.loginPath].join(''); // if response has redirect to loginUrl

	  if (response.request.responseURL && response.request.responseURL.match(loginUrl)) {
	    // eslint-disable-next-line no-undef
	    alert('Your session expired. You will be redirected to login screen');
	    globalAny$1.location.assign(loginUrl);
	  }
	};
	/**
	 * Extends {@link AxiosRequestConfig}
	 *
	 * @alias ActionAPIParams
	 * @memberof ApiClient
	 * @property {any}   ...    any property supported by {@link AxiosRequestConfig}
	 */


	/**
	 * Client which access the admin API.
	 * Use it to fetch data from auto generated AdminBro API.
	 *
	 * In the backend it uses [axios](https://github.com/axios/axios) client
	 * library.
	 *
	 * Usage:
	 * ```javascript
	 * import { ApiClient } from 'admin-bro'
	 *
	 * const api = new ApiClient()
	 * // fetching all records
	 * api.resourceAction({ resourceId: 'Comments', actionName: 'list' }).then(results => {...})
	 * ```
	 * @see https://github.com/axios/axios
	 * @hideconstructor
	 */
	class ApiClient {
	  constructor() {
	    this.baseURL = ApiClient.getBaseUrl();
	    this.client = axios__default['default'].create({
	      baseURL: this.baseURL
	    });
	  }

	  static getBaseUrl() {
	    var _globalAny$REDUX_STAT;

	    if (globalAny$1.isOnServer) {
	      return '';
	    }

	    return [globalAny$1.location.origin, (_globalAny$REDUX_STAT = globalAny$1.REDUX_STATE) === null || _globalAny$REDUX_STAT === void 0 ? void 0 : _globalAny$REDUX_STAT.paths.rootPath].join('');
	  }
	  /**
	   * Search by query string for records in a given resource.
	   *
	   * @param   {Object}  options
	   * @param   {String}  options.resourceId  id of a {@link ResourceJSON}
	   * @param   {String}  options.query       query string
	   *
	   * @return  {Promise<SearchResponse>}
	   */


	  async searchRecords({
	    resourceId,
	    query
	  }) {
	    if (globalAny$1.isOnServer) {
	      return [];
	    }

	    const actionName = 'search';
	    const response = await this.resourceAction({
	      resourceId,
	      actionName,
	      query
	    });
	    checkResponse(response);
	    return response.data.records;
	  }
	  /**
	   * Invokes given resource {@link Action} on the backend.
	   *
	   * @param   {ResourceActionAPIParams}     options
	   * @return  {Promise<ActionResponse>}     response from an {@link Action}
	   */


	  async resourceAction(options) {
	    const {
	      resourceId,
	      actionName,
	      data,
	      query,
	      ...axiosParams
	    } = options;
	    let url = `/api/resources/${resourceId}/actions/${actionName}`;

	    if (query) {
	      const q = encodeURIComponent(query);
	      url = [url, q].join('/');
	    }

	    const response = await this.client.request({
	      url,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes given record {@link Action} on the backend.
	   *
	   * @param   {RecordActionAPIParams} options
	   * @return  {Promise<RecordActionResponse>}            response from an {@link Action}
	   */


	  async recordAction(options) {
	    const {
	      resourceId,
	      recordId,
	      actionName,
	      data,
	      ...axiosParams
	    } = options;
	    const response = await this.client.request({
	      url: `/api/resources/${resourceId}/records/${recordId}/${actionName}`,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes given bulk {@link Action} on the backend.
	   *
	   * @param   {BulkActionAPIParams} options
	   * @return  {Promise<BulkActionResponse>}            response from an {@link Action}
	   */


	  async bulkAction(options) {
	    const {
	      resourceId,
	      recordIds,
	      actionName,
	      data,
	      ...axiosParams
	    } = options;
	    const params = new URLSearchParams();
	    params.set('recordIds', (recordIds || []).join(','));
	    const response = await this.client.request({
	      url: `/api/resources/${resourceId}/bulk/${actionName}`,
	      method: data ? 'POST' : 'GET',
	      ...axiosParams,
	      data,
	      params
	    });
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes dashboard handler.
	   *
	   * @param   {AxiosRequestConfig}       options
	   * @return  {Promise<AxiosResponse<any>>} response from the handler function defined in
	   *                                     {@link AdminBroOptions#dashboard}
	   */


	  async getDashboard(options = {}) {
	    const response = await this.client.get('/api/dashboard', options);
	    checkResponse(response);
	    return response;
	  }
	  /**
	   * Invokes handler function of given page and returns its response.
	   *
	   * @param   {GetPageAPIParams}                options
	   * @return  {Promise<AxiosResponse<any>>}     response from the handler of given page
	   *                                            defined in {@link AdminBroOptions#pages}
	   */


	  async getPage(options) {
	    const {
	      pageName,
	      ...axiosParams
	    } = options;
	    const response = await this.client.request({
	      url: `/api/pages/${pageName}`,
	      ...axiosParams
	    });
	    checkResponse(response);
	    return response;
	  }

	}

	const FORM_VALUE_NULL = '__FORM_VALUE_NULL__';
	const FORM_VALUE_EMPTY_OBJECT = '__FORM_VALUE_EMPTY_OBJECT__';
	const FORM_VALUE_EMPTY_ARRAY = '__FORM_VALUE_EMPTY_ARRAY__';

	const isObjectOrArray = value => typeof value === 'object' && value.constructor !== File && !(value instanceof Date);
	/**
	 * Changes RecordJSON that it can be send as a FormData to the backend.
	 *
	 * FormData is required because we are sending files via the wire. But it has limitations.
	 * Namely it can only transport files and strings. That is why we have to convert some
	 * standard types like NULL to constants so they can be property converted back by the backend.
	 * And thus properly handled.
	 *
	 * @private
	 * @param   {RecordJSON}  record
	 * @return  {FormData}
	 */


	function paramsToFormData(params) {
	  const formData = new FormData(); // Assume that params are flatted

	  Object.entries(params).forEach(([key, value]) => {
	    // {@link updateRecord} does not change empty objects "{}" - so in order to prevent having
	    // them changed to "[object Object]" we have to set them to empty strings.
	    if (value === null) {
	      return formData.set(key, FORM_VALUE_NULL);
	    } // File objects has to go through because they are handled by FormData


	    if (isObjectOrArray(value)) {
	      if (Array.isArray(value)) {
	        return formData.set(key, FORM_VALUE_EMPTY_ARRAY);
	      }

	      return formData.set(key, FORM_VALUE_EMPTY_OBJECT);
	    } // Rest goes as a standard value


	    return formData.set(key, value);
	  });
	  return formData;
	}

	const ADD_NOTICE = 'ADD_NOTICE';
	const addNotice = (data = {
	  message: ''
	}) => ({
	  type: ADD_NOTICE,
	  data: {
	    message: data.message,
	    id: Math.random().toString(36).substr(2, 9),
	    type: data.type || 'success',
	    progress: 0
	  }
	});

	/**
	 * @classdesc
	 * Hook which allows you to add notice message to the app.
	 *
	 * ```javascript
	 * import { useNotice, Button } from 'admin-bro'
	 *
	 * const myComponent = () => {
	 *   const sendNotice = useNotice()
	 *   render (
	 *     <Button onClick={() => sendNotice({ message: 'I am awesome' })}>I am awesome</Button>
	 *   )
	 * }
	 * ```
	 *
	 * @class
	 * @subcategory Hooks
	 * @bundle
	 * @hideconstructor
	 */
	const useNotice = () => {
	  const dispatch = reactRedux.useDispatch();
	  return notice => dispatch(addNotice(notice));
	};

	/**
	 * Handlers of all [Actions]{@link Action} of type `record` returns record.
	 * Depending on a place and response we have to merge what was returned
	 * to the actual state. It is done in following places:
	 * - {@link useRecord} hook
	 * - {@link RecordInList} component
	 * - {@link RecordAction} component
	 *
	 * @private
	 */
	const mergeRecordResponse = (record, response) => ({ // we start from the response because it can have different recordActions or bulkActions
	  ...(response.record || record),
	  // records has to be reset every time because so that user wont
	  // see old errors which are not relevant anymore
	  errors: response.record.errors,
	  populated: { ...record.populated,
	    ...response.record.populated
	  },
	  params: { ...record.params,
	    ...response.record.params
	  }
	});

	const DELIMITER = '.';

	// this is the regex used to find all existing properties starting with a key
	const propertyKeyRegex = (propertyPath, options) => {
	  const delimiter = new RegExp(`\\${DELIMITER}`, 'g');
	  const escapedDelimiter = `\\${DELIMITER}`; // but for `nested.1.property.0` it will produce `nested(\.|\.\d+\.)1(\.|\.\d+\.)property.0`
	  // and this is intentional because user can give an one index in property path for with deeply
	  // nested arrays

	  const escapedDelimiterOrIndex = `(${escapedDelimiter}|${escapedDelimiter}\\d+${escapedDelimiter})`;
	  const path = (options === null || options === void 0 ? void 0 : options.includeAllSiblings) ? propertyPath.replace(delimiter, escapedDelimiterOrIndex) : propertyPath.replace(delimiter, escapedDelimiter);
	  return new RegExp(`^${path}($|${escapedDelimiter})`, '');
	};

	/**
	 * @load ./select-params.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams} params
	 * @param {string | Array<string>} properties
	 * @param {GetOptions} [options]
	 * @returns {FlattenParams}
	 */
	const selectParams = (params, properties, options) => {
	  const propertyArray = Array.isArray(properties) ? properties : [properties];
	  const selected = propertyArray.filter(propertyPath => !!propertyPath).reduce((globalMemo, propertyPath) => {
	    const regex = propertyKeyRegex(propertyPath, options);
	    const filtered = Object.keys(params) // filter all keys which starts with property path
	    .filter(key => key.match(regex)).reduce((memo, key) => {
	      memo[key] = params[key];
	      return memo;
	    }, {});
	    return { ...globalMemo,
	      ...filtered
	    };
	  }, {});
	  return selected;
	};

	/**
	 * @load ./filter-out-params.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams} params
	 * @param {string | Array<string>} properties
	 * @returns {FlattenParams}
	 */
	const filterOutParams = (params, properties) => {
	  const propertyArray = Array.isArray(properties) ? properties : [properties];
	  return propertyArray.filter(propertyPath => !!propertyPath).reduce((globalFiltered, propertyPath) => {
	    const regex = propertyKeyRegex(propertyPath);
	    return Object.keys(globalFiltered).filter(key => !key.match(regex)).reduce((memo, key) => {
	      memo[key] = params[key];
	      return memo;
	    }, {});
	  }, params);
	};

	/**
	 * @memberof module:flat
	 * @alias PathToPartsOptions
	 */

	/**
	 * @load ./path-to-parts.doc.md
	 * @param   {string}              propertyPath
	 * @param   {PathToPartsOptions}  options
	 * @returns  {PathParts}
	 *
	 * @memberof module:flat
	 * @alias pathToParts
	 */
	const pathToParts = (propertyPath, options = {}) => {
	  let allParts = propertyPath.split('.');

	  if (options.skipArrayIndexes) {
	    // eslint-disable-next-line no-restricted-globals
	    allParts = allParts.filter(part => isNaN(+part));
	  }

	  return allParts.reduce((memo, part) => {
	    if (memo.length) {
	      return [...memo, [memo[memo.length - 1], part].join('.')];
	    }

	    return [part];
	  }, []);
	};

	const isObject = value => {
	  // Node environment
	  if (typeof File === 'undefined') {
	    return typeof value === 'object' && value !== null;
	  } // Window environment


	  return typeof value === 'object' && !(value instanceof File) && value !== null;
	};
	/**
	 * @load ./set.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams} params
	 * @param {string} propertyPath
	 * @param {any} [value]       if not give function will only try to remove old keys
	 * @returns {FlattenParams}
	 */


	const set = (params = {}, propertyPath, value) => {
	  const regex = propertyKeyRegex(propertyPath); // remove all existing keys

	  const paramsCopy = Object.keys(params).filter(key => !key.match(regex)).reduce((memo, key) => {
	    memo[key] = params[key];
	    return memo;
	  }, {});

	  if (typeof value !== 'undefined') {
	    if (isObject(value) && !(value instanceof Date)) {
	      const flattened = flat$1.flatten(value);

	      if (Object.keys(flattened).length) {
	        Object.keys(flattened).forEach(key => {
	          paramsCopy[`${propertyPath}${DELIMITER}${key}`] = flattened[key];
	        });
	      } else if (Array.isArray(value)) {
	        paramsCopy[propertyPath] = [];
	      } else {
	        paramsCopy[propertyPath] = {};
	      }
	    } else {
	      paramsCopy[propertyPath] = value;
	    } // when user gave { "nested.value": "something" } and had "nested" set to `null`, then
	    // nested should be removed


	    const parts = pathToParts(propertyPath).slice(0, -1);

	    if (parts.length) {
	      return Object.keys(paramsCopy).filter(key => !parts.includes(key)).reduce((memo, key) => {
	        memo[key] = paramsCopy[key];
	        return memo;
	      }, {});
	    }
	  }

	  return paramsCopy;
	};

	const TEMP_HOLDING_KEY = 'TEMP_HOLDING_KEY';
	/**
	 * @load ./get.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams}   params      flatten params from which property has to be taken
	 * @param {string}          [propertyPath]  name of the property
	 * @param {GetOptions}      options     options
	 * @returns {any}                       when property key exists directly it returns what is inside,
	 *                                      otherwise it tries to find any nested objects and returns
	 *                                      them
	 */

	const get = (params = {}, propertyPath, options) => {
	  if (!propertyPath) {
	    return flat$1.unflatten(params);
	  } // when object has this key - simply return it
	  // we cannot rely on typeof params[propertyPath !== 'undefined' because params can actually be
	  // undefined and in such case if would pass and function would return [undefined]


	  if (Object.keys(params).find(key => key === propertyPath)) {
	    return params[propertyPath];
	  }

	  const regex = propertyKeyRegex(propertyPath, options);
	  const selectedParams = selectParams(params, propertyPath, options);
	  const nestedProperties = Object.keys(selectedParams).reduce((memo, key, index) => {
	    let newKey = key.replace(regex, `${TEMP_HOLDING_KEY}${DELIMITER}`); // when user wants to take allSiblings we have to fix the indexes so nested items from
	    // different siblings don't overlap
	    //
	    // Example for key `nested.1.el`:
	    //  'nested.0.el.0.value': 'val0.0',
	    //  'nested.0.el.1.value': 'val0.1',
	    //  'nested.1.el.0.value': 'val1',
	    //  'nested.1.el.1.value': 'val2',
	    //
	    // has to be changed to:
	    //  'TEMP_HOLDING_KEY.0.value': 'val0.0',
	    //  'TEMP_HOLDING_KEY.1.value': 'val0.1',
	    //  'TEMP_HOLDING_KEY.2.value': 'val1',
	    //  'TEMP_HOLDING_KEY.3.value': 'val2',

	    if (options === null || options === void 0 ? void 0 : options.includeAllSiblings) {
	      newKey = newKey.replace(new RegExp(`${TEMP_HOLDING_KEY}\\${DELIMITER}(\\d*)`), `${TEMP_HOLDING_KEY}${DELIMITER}${index}`);
	    }

	    memo[newKey] = selectedParams[key];
	    return memo;
	  }, {});

	  if (Object.keys(nestedProperties).length) {
	    return flat$1.unflatten(nestedProperties)[TEMP_HOLDING_KEY];
	  }

	  return undefined;
	};

	/**
	 * Merges params together and returns flatten result
	 *
	 * @param {any} params
	 * @param {Array<any>} ...mergeParams
	 * @returns {FlattenParams}
	 * @memberof module:flat
	 */

	const merge = (params = {}, ...mergeParams) => {
	  const flattenParams = flat$1.flatten(params); // reverse because we merge from right

	  return mergeParams.reverse().reduce((globalMemo, mergeParam) => Object.keys(mergeParam).reduce((memo, key) => set(memo, key, mergeParam[key]), globalMemo), flattenParams);
	};

	/**
	 * @load ./remove-path.doc.md
	 * @memberof module:flat
	 * @param {FlattenParams} params
	 * @param {...string} properties
	 * @returns {FlattenParams}
	 */

	const removePath = (params, path) => {
	  // by default simply filter out elements from the object
	  let filtered = filterOutParams(params, path); // reverse means that we iterate from the closes parent

	  const parentPaths = pathToParts(path).reverse(); // but if one of the parent is an array

	  parentPaths.find((parentPath, parentIndex) => {
	    const parent = get(params, parentPath);

	    if (Array.isArray(parent)) {
	      // previous element is stringified index like 'property.1'
	      const previousPaths = parentPaths[parentIndex - 1].split(DELIMITER); // so this is the index: 1

	      const previousPathIndex = previousPaths[previousPaths.length - 1];
	      parent.splice(+previousPathIndex, 1);
	      filtered = set(params, parentPath, parent); // this works just for the firstly found array item, because in case of removing the last one
	      // it leaves `[]` as a value.

	      return true;
	    }

	    return false;
	  });
	  return filtered;
	};

	/**
	 * @module flat
	 * @name flat
	 * @new in version 3.3
	 * @load ./flat.doc.md
	 */
	const flat = {
	  /**
	   * Raw `flatten` function exported from original {@link https://www.npmjs.com/package/flat flat}
	   * package.
	   */
	  flatten: flat$1.flatten,

	  /**
	   * Raw `unflatten` function exported from original {@link https://www.npmjs.com/package/flat flat}
	   * package.
	   */
	  unflatten: flat$1.unflatten,
	  set,
	  get,
	  selectParams,
	  filterOutParams,
	  removePath,
	  DELIMITER,
	  pathToParts,
	  merge
	};

	/**
	 * HOF returning a function which takes a record and returns an updated record.
	 * This way we can pass this to setState in react, which takes old state
	 * (in our case previousRecord) as an argument.
	 *
	 * Function is used when to the {@link OnPropertyChange} callback, user passes
	 * key (property name) and the value (followed by an optional selectedRecord).
	 *
	 * The responsibility of the function is to:
	 * - clear old values under passed key: so when user passes property === `some.key`
	 *   function removes `some.key.1`, `some.key.2` etc
	 * - sets new value under the passed key for primitive types
	 * - in case of objects - it flattens them first and then sets all the resulted values
	 *   under the path provided in the property argument
	 * - it fills value in RecordJSON#populated when selectedRecord is given
	 * - finally it invalidates populated for given property
	 *
	 *
	 * @param {string}      property        property that must be updated, supports nesting
	 *                                      with dots
	 * @param {any}         value           value that must be set, undefined or null if
	 *                                      deleting, will be flattened
	 * @param {RecordJSON}  selectedRecord  if value is reference ID, this must be a record
	 *                                      it's referencing to
	 * @private
	 */
	const updateRecord = (property, value, selectedRecord) => previousRecord => {
	  let populatedModified = false;
	  const populatedCopy = { ...previousRecord.populated
	  };
	  const paramsCopy = flat.set(previousRecord.params, property, value);

	  if (property in populatedCopy) {
	    delete populatedCopy[property];
	    populatedModified = true;
	  }

	  if (selectedRecord) {
	    populatedCopy[property] = selectedRecord;
	    populatedModified = true;
	  }

	  return { ...previousRecord,
	    params: paramsCopy,
	    populated: populatedModified ? populatedCopy : previousRecord.populated
	  };
	};

	const isEntireRecordGiven = (propertyOrRecord, value) => !!(typeof value === 'undefined' // user can pass property and omit value. This makes sense when
	// third argument of the function (selectedRecord) is passed to onChange
	// callback
	&& !(typeof propertyOrRecord === 'string') // we assume that only params has to be given
	&& propertyOrRecord.params);

	const filterRecordParams = function (record, options = {}) {
	  if (options.includeParams && record) {
	    return { ...record,
	      params: flat.selectParams(record.params || {}, options.includeParams)
	    };
	  }

	  return record;
	};
	const isPropertyPermitted = (propertyName, options = {}) => {
	  const {
	    includeParams
	  } = options;

	  if (includeParams) {
	    const parts = flat.pathToParts(propertyName, {
	      skipArrayIndexes: true
	    });
	    return parts.some(part => includeParams.includes(part));
	  }

	  return true;
	};

	const api = new ApiClient();
	/**
	 * @load ./use-record.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 * @bundle
	 * @param {RecordJSON} [initialRecord],
	 * @param {string} resourceId
	 * @param {UseRecordOptions} [options]
	 * @return {UseRecordResult}
	 */

	const useRecord = (initialRecord, resourceId, options) => {
	  var _filteredRecord$param, _initialRecord$errors, _initialRecord$popula;

	  // setting up state
	  const [loading, setLoading] = React.useState(false);
	  const [isSynced, setIsSynced] = React.useState(true);
	  const [progress, setProgress] = React.useState(0);
	  const filteredRecord = initialRecord ? filterRecordParams(initialRecord, options) : null;
	  const [record, setRecord] = React.useState({ ...filteredRecord,
	    params: (_filteredRecord$param = filteredRecord === null || filteredRecord === void 0 ? void 0 : filteredRecord.params) !== null && _filteredRecord$param !== void 0 ? _filteredRecord$param : {},
	    errors: (_initialRecord$errors = initialRecord === null || initialRecord === void 0 ? void 0 : initialRecord.errors) !== null && _initialRecord$errors !== void 0 ? _initialRecord$errors : {},
	    populated: (_initialRecord$popula = initialRecord === null || initialRecord === void 0 ? void 0 : initialRecord.populated) !== null && _initialRecord$popula !== void 0 ? _initialRecord$popula : {}
	  }); // it keeps the same format as useState function which can take either value or function

	  const setFilteredRecord = React.useCallback(value => {
	    const newRecord = value instanceof Function ? value(record) : value;
	    setRecord(filterRecordParams(newRecord, options));
	  }, [options, record]);
	  const onNotice = useNotice();
	  const handleChange = React.useCallback((propertyOrRecord, value, incomingRecord) => {
	    if (isEntireRecordGiven(propertyOrRecord, value)) {
	      setFilteredRecord(propertyOrRecord);
	    } else if (isPropertyPermitted(propertyOrRecord, options)) {
	      setRecord(updateRecord(propertyOrRecord, value, incomingRecord));
	    } else {
	      // eslint-disable-next-line no-console
	      console.warn([`You are trying to set property: "${propertyOrRecord}" which`, 'is not permitted. Take a look at `useRecord(..., { includeParams: [...]})`'].join('\n'));
	    }

	    setIsSynced(false);
	  }, [setRecord, options]);
	  const handleSubmit = React.useCallback((customParams = {}, submitOptions) => {
	    setLoading(true);
	    const mergedParams = flat.merge(record.params, customParams);
	    const formData = paramsToFormData(mergedParams);
	    const params = {
	      resourceId,
	      onUploadProgress: e => setProgress(Math.round(e.loaded * 100 / e.total)),
	      data: formData,
	      headers: {
	        'Content-Type': 'multipart/form-data'
	      }
	    };
	    const promise = record.id ? api.recordAction({ ...params,
	      actionName: 'edit',
	      recordId: record.id
	    }) : api.resourceAction({ ...params,
	      actionName: 'new'
	    });
	    promise.then(response => {
	      if (response.data.notice) {
	        onNotice(response.data.notice);
	      }

	      if ((submitOptions === null || submitOptions === void 0 ? void 0 : submitOptions.updateOnSave) !== false) {
	        setFilteredRecord(prev => mergeRecordResponse(prev, response.data));
	      }

	      setProgress(0);
	      setLoading(false);
	      setIsSynced(true);
	    }).catch(() => {
	      onNotice({
	        message: 'There was an error updating record, Check out console to see more information.',
	        type: 'error'
	      });
	      setProgress(0);
	      setLoading(false);
	    });
	    return promise;
	  }, [record, resourceId, setLoading, setProgress, setRecord]);
	  return {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading,
	    progress,
	    setRecord: setFilteredRecord,
	    isSynced
	  };
	};

	const actionHasComponent = action => typeof action.component !== 'undefined' && action.component === false;

	const h$2 = new ViewHelpers();
	const actionHref = (action, params) => {
	  const actionName = action.name;

	  if (!action.component && !action.hasHandler) {
	    return null;
	  }

	  const hrefMap = {
	    record: () => h$2.recordActionUrl({ ...params,
	      actionName
	    }),
	    resource: () => h$2.resourceActionUrl({
	      resourceId: params.resourceId,
	      actionName
	    }),
	    bulk: () => h$2.bulkActionUrl({ ...params,
	      actionName
	    })
	  };

	  if (hrefMap[action.actionType]) {
	    return hrefMap[action.actionType]();
	  }

	  throw new Error('"actionType" should be either record, resource or bulk');
	};

	const api$1 = new ApiClient();
	function callActionApi(action, params, search) {
	  let promise;
	  const {
	    recordId,
	    recordIds,
	    resourceId
	  } = params;

	  switch (action.actionType) {
	    case 'record':
	      if (!recordId) {
	        throw new Error('You have to specify "recordId" for record action');
	      }

	      promise = api$1.recordAction({
	        resourceId,
	        actionName: action.name,
	        recordId,
	        search
	      });
	      break;

	    case 'resource':
	      promise = api$1.resourceAction({
	        resourceId,
	        actionName: action.name
	      });
	      break;

	    case 'bulk':
	      if (!recordIds) {
	        throw new Error('You have to specify "recordIds" for bulk action');
	      }

	      promise = api$1.bulkAction({
	        resourceId,
	        actionName: action.name,
	        recordIds,
	        search
	      });
	      break;

	    default:
	      throw new Error('"actionType" should be either record, resource or bulk');
	  }

	  return promise;
	}

	/* eslint-disable arrow-parens */
	const buildActionCallApiTrigger = options => {
	  const {
	    action,
	    params,
	    actionResponseHandler,
	    search
	  } = options;

	  const callApi = () => {
	    const promise = callActionApi(action, params, search);
	    promise.then(actionResponseHandler).catch(error => {
	      throw error;
	    });
	    return promise;
	  };

	  return callApi;
	};

	const buildActionTestId = action => `action-${action.name}`;

	/* eslint-disable no-restricted-globals */
	const buildActionClickHandler = options => {
	  const {
	    action,
	    params,
	    actionResponseHandler,
	    push
	  } = options;

	  const handleActionClick = event => {
	    event.preventDefault();
	    event.stopPropagation();
	    const href = actionHref(action, params);
	    const callApi = buildActionCallApiTrigger({
	      params,
	      action,
	      actionResponseHandler
	    });

	    if (action.guard && !confirm(action.guard)) {
	      return;
	    }

	    if (actionHasComponent(action)) {
	      callApi();
	    } else if (href) {
	      push(href);
	    }
	  };

	  return handleActionClick;
	};

	const REFRESH_KEY = 'refresh';
	/**
	 * Adds refresh=true to the url, which in turn should cause list to reload.
	 *
	 * @param {string} url      url to which function should add `refresh`
	 * @param {string} [search] optional search query which should be updated,
	 *                          if not given function will use window.location.search
	 * @private
	 */

	const appendForceRefresh = (url, search) => {
	  var _ref;

	  const searchParamsIdx = url.lastIndexOf('?');
	  const urlSearchParams = searchParamsIdx !== -1 ? url.substring(searchParamsIdx + 1) : null;
	  const oldParams = (_ref = search !== null && search !== void 0 ? search : urlSearchParams) !== null && _ref !== void 0 ? _ref : window.location.search;
	  const newParams = new URLSearchParams(oldParams);
	  newParams.set(REFRESH_KEY, 'true');
	  const newUrl = searchParamsIdx !== -1 ? url.substring(0, searchParamsIdx) : url;
	  return `${newUrl}?${newParams.toString()}`;
	};
	const hasForceRefresh = search => {
	  const params = new URLSearchParams(search);
	  return !!params.get(REFRESH_KEY);
	};
	const removeForceRefresh = search => {
	  const params = new URLSearchParams(search);

	  if (params.get(REFRESH_KEY)) {
	    params.delete(REFRESH_KEY);
	  }

	  return params.toString();
	};

	/* eslint-disable @typescript-eslint/explicit-function-return-type */
	const useActionResponseHandler = onActionCall => {
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();
	  const addNotice = useNotice();
	  return response => {
	    const {
	      data
	    } = response;

	    if (data.notice) {
	      addNotice(data.notice);
	    }

	    if (data.redirectUrl && location.pathname !== data.redirectUrl) {
	      const appended = appendForceRefresh(data.redirectUrl);
	      history.push(appended);
	    }

	    if (onActionCall) {
	      onActionCall(data);
	    }
	  };
	};

	/**
	 * @load ./use-action.doc.md
	 * @subcategory Hooks
	 *
	 * @param {ActionJSON}   action      action object
	 * @param {ActionParams} params
	 * @param {ActionCallCallback} onActionCall - callback triggered when action is performed
	 * @return {UseActionResult}
	 * @new In version 3.3
	 * @class
	 * @hideconstructor
	 */

	function useAction(action, params, onActionCall) {
	  const history = reactRouter.useHistory();
	  const actionResponseHandler = useActionResponseHandler(onActionCall);
	  const href = actionHref(action, params);
	  const callApi = buildActionCallApiTrigger({
	    action,
	    params,
	    actionResponseHandler
	  });
	  const handleClick = buildActionClickHandler({
	    action,
	    params,
	    actionResponseHandler,
	    push: history.push
	  });
	  return {
	    href,
	    callApi,
	    handleClick
	  };
	}

	const SESSION_INITIALIZE = 'SESSION_INITIALIZE';
	const setCurrentAdmin = (data = null) => ({
	  type: SESSION_INITIALIZE,
	  data
	});

	/**
	 * @classdesc
	 * Hook which allows you to get and set currentAdmin
	 *
	 * ### Usage
	 *
	 * ```javascript
	 * import { useCurrentAdmin } from 'admin-bro'
	 *
	 * const myComponent = () => {
	 *   const [currentAdmin, setCurrentAdmin] = useCurrentAdmin()
	 *   // ...
	 * }
	 * ```
	 *
	 * @class
	 * @subcategory Hooks
	 * @bundle
	 * @returns {UseCurrentAdminResponse}
	 * @hideconstructor
	 */
	function useCurrentAdmin() {
	  const currentAdmin = reactRedux.useSelector(state => state.session);
	  const dispatch = reactRedux.useDispatch();
	  return [currentAdmin, admin => dispatch(setCurrentAdmin(admin))];
	}
	/**
	 * Result of the {@link useCurrentAdmin}.
	 * It is a tuple containing value and the setter
	 *
	 * @typedef {Array} UseCurrentAdminResponse
	 * @memberof useCurrentAdmin
	 * @alias UseCurrentAdminResponse
	 * @property {CurrentAdmin | null} [0]    current admin
	 * @property {React.Dispatch<React.SetStateAction<CurrentAdmin>>} [1]    value setter compatible
	 *                                                                       with react useState
	 */

	/* eslint-disable no-console */

	/**
	 * @load ./use-local-storage.doc.md
	 * @subcategory Hooks
	 * @class
	 * @see https://usehooks.com/useLocalStorage
	 *
	 * @param {string} key          key under which hook will store the data
	 * @param {T}      initialValue    value which will be stringified and stored
	 * @return {UseLocalStorageResult<T>}
	 * @new In version 3.3
	 * @bundle
	 * @type {Function}
	 */
	function useLocalStorage(key, initialValue) {
	  // State to store our value
	  // Pass initial state function to useState so logic is only executed once
	  const [storedValue, setStoredValue] = React.useState(() => {
	    try {
	      // Get from local storage by key
	      const item = window.localStorage.getItem(key); // Parse stored json or if none return initialValue

	      return item ? JSON.parse(item) : initialValue;
	    } catch (error) {
	      // If error also return initialValue
	      console.log(error);
	      return initialValue;
	    }
	  }); // Return a wrapped version of useState's setter function that ...
	  // ... persists the new value to localStorage.

	  const setValue = value => {
	    try {
	      // Allow value to be a function so we have same API as useState
	      const valueToStore = value instanceof Function ? value(storedValue) : value; // Save state

	      setStoredValue(valueToStore); // Save to local storage

	      window.localStorage.setItem(key, JSON.stringify(valueToStore));
	    } catch (error) {
	      // A more advanced implementation would handle the error case
	      console.log(error);
	    }
	  };

	  return [storedValue, setValue];
	}

	const isSelected = (href, location) => {
	  const regExp = new RegExp(`${href}($|/)`);
	  return !!location.pathname.match(regExp);
	};

	function useNavigationResources(resources) {
	  const [openElements, setOpenElements] = useLocalStorage('sidebarElements', {});
	  const history = reactRouter.useHistory();
	  const location = reactRouter.useLocation();
	  const enrichResource = React.useMemo(() => (resource, icon) => ({
	    href: resource.href || undefined,
	    icon,
	    isSelected: isSelected(resource.href, location),
	    label: resource.name,
	    id: resource.id,
	    onClick: event => {
	      if (resource.href) {
	        event.preventDefault();
	        history.push(resource.href);
	      }
	    }
	  }), [location, history]); // grouping resources into parents

	  const map = resources.filter(res => res.href) // first filter out resource which are not visible
	  .reduce((memo, resource) => {
	    var _resource$navigation, _resource$navigation3;

	    // in case resource has the same name as parent we namespace it wit "resource-""
	    const key = ((_resource$navigation = resource.navigation) === null || _resource$navigation === void 0 ? void 0 : _resource$navigation.name) || ['resource', resource.name].join('-');

	    if (!resource.navigation || resource.navigation.name === null) {
	      var _resource$navigation2;

	      memo[key] = enrichResource(resource, (_resource$navigation2 = resource.navigation) === null || _resource$navigation2 === void 0 ? void 0 : _resource$navigation2.icon);
	    } else if (memo[key] && memo[key].elements && ((_resource$navigation3 = resource.navigation) === null || _resource$navigation3 === void 0 ? void 0 : _resource$navigation3.name)) {
	      memo[key].elements.push(enrichResource(resource));
	    } else {
	      var _resource$navigation4, _resource$navigation5;

	      memo[key] = {
	        elements: [enrichResource(resource)],
	        label: (_resource$navigation4 = resource.navigation) === null || _resource$navigation4 === void 0 ? void 0 : _resource$navigation4.name,
	        icon: (_resource$navigation5 = resource.navigation) === null || _resource$navigation5 === void 0 ? void 0 : _resource$navigation5.icon,
	        onClick: () => setOpenElements({ ...openElements,
	          [key]: !openElements[key]
	        }),
	        isOpen: !!openElements[key]
	      };
	    }

	    return memo;
	  }, {});
	  return Object.values(map);
	}

	const api$2 = new ApiClient();
	/**
	 * @load ./use-records.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 *
	 * @param {string} resourceId      id of a resource for which you want to fetch records
	 * @return {UseRecordsResult}
	 * @new In version 3.3
	 * @bundle
	 * @type {Function}
	 */

	function useRecords(resourceId) {
	  const [records, setRecords] = React.useState([]);
	  const [loading, setLoading] = React.useState(false);
	  const [perPage, setPerPage] = React.useState(10);
	  const [page, setPage] = React.useState(1);
	  const [total, setTotal] = React.useState(0);
	  const [direction, setDirection] = React.useState('asc');
	  const [sortBy, setSortBy] = React.useState();
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();
	  const addNotice = useNotice();
	  const {
	    translateMessage
	  } = useTranslation();
	  const onNotice = useNotice();

	  const fetchData = () => {
	    setLoading(true);
	    const query = new URLSearchParams(location.search);
	    const promise = api$2.resourceAction({
	      actionName: 'list',
	      resourceId,
	      params: query
	    });
	    promise.then(response => {
	      const listActionResponse = response.data;

	      if (listActionResponse.notice) {
	        onNotice(listActionResponse.notice);
	      }

	      if (listActionResponse.redirectUrl) {
	        history.push(listActionResponse.redirectUrl);
	        return;
	      }

	      setRecords(listActionResponse.records);
	      setPage(listActionResponse.meta.page);
	      setPerPage(listActionResponse.meta.perPage);
	      setTotal(listActionResponse.meta.total);
	      setDirection(listActionResponse.meta.direction);
	      setSortBy(listActionResponse.meta.sortBy);
	      setLoading(false);
	    }).catch(() => {
	      addNotice({
	        message: translateMessage('errorFetchingRecords', resourceId),
	        type: 'error'
	      });
	    });
	    return promise;
	  };

	  React.useEffect(() => {
	    if (hasForceRefresh(location.search)) {
	      history.replace([location.pathname, removeForceRefresh(location.search).toString()].join('?'));
	    } else {
	      fetchData();
	    }
	  }, [resourceId, location.search]);
	  return {
	    records,
	    loading,
	    page,
	    total,
	    direction,
	    sortBy,
	    perPage,
	    fetchData
	  };
	}

	/**
	 * @load ./use-selected-records.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 * @param {Array<RecordJSON>} records     List of records on which you can perform `select` action
	 * @return {UseSelectedRecordsResult}
	 * @new In version 3.3
	 * @bundle
	 * @type {Function}
	 */
	function useSelectedRecords(records) {
	  const [selectedRecords, setSelectedRecords] = React.useState([]);

	  const handleSelect = record => {
	    const selectedIndex = selectedRecords.findIndex(selected => selected.id === record.id);

	    if (selectedIndex < 0) {
	      setSelectedRecords([...selectedRecords, record]);
	    } else {
	      const newSelectedRecords = [...selectedRecords];
	      newSelectedRecords.splice(selectedIndex, 1);
	      setSelectedRecords(newSelectedRecords);
	    }
	  };

	  const handleSelectAll = () => {
	    const missing = records.filter(record => !selectedRecords.find(selected => selected.id === record.id) && record.bulkActions.length);

	    if (missing.length) {
	      setSelectedRecords([...selectedRecords, ...missing]);
	    } else {
	      const newSelectedRecords = selectedRecords.filter(selected => !records.find(record => record.id === selected.id));
	      setSelectedRecords(newSelectedRecords);
	    }
	  };

	  return {
	    handleSelect,
	    handleSelectAll,
	    selectedRecords,
	    setSelectedRecords
	  };
	}

	/**
	 * @load ./use-resource.doc.md
	 * @subcategory Hooks
	 * @class
	 * @hideconstructor
	 * @new in version 3.3
	 * @bundle
	 * @param {string} resourceId    Id of a resource you want to get
	 */
	const useResource = resourceId => {
	  const resources = reactRedux.useSelector(state => state.resources);
	  const foundResource = resources.find(resource => resource.id === resourceId);
	  return foundResource;
	};

	var Hooks = /*#__PURE__*/Object.freeze({
		__proto__: null,
		useRecord: useRecord,
		isEntireRecordGiven: isEntireRecordGiven,
		FORM_VALUE_NULL: FORM_VALUE_NULL,
		FORM_VALUE_EMPTY_OBJECT: FORM_VALUE_EMPTY_OBJECT,
		FORM_VALUE_EMPTY_ARRAY: FORM_VALUE_EMPTY_ARRAY,
		paramsToFormData: paramsToFormData,
		updateRecord: updateRecord,
		useAction: useAction,
		useActionResponseHandler: useActionResponseHandler,
		useCurrentAdmin: useCurrentAdmin,
		useLocalStorage: useLocalStorage,
		useNavigationResources: useNavigationResources,
		useNotice: useNotice,
		useRecords: useRecords,
		useSelectedRecords: useSelectedRecords,
		useTranslation: useTranslation,
		useResource: useResource
	});

	/**
	 * @alias SidebarResourceSectionProps
	 * @memberof SidebarResourceSection
	 */

	/**
	 * Groups resources by sections and renders the list in {@link Sidebar}
	 *
	 * ### Usage
	 *
	 * ```
	 * import { SidebarResourceSection } from 'admin-bro`
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 * @name SidebarResourceSection
	 */
	const SidebarResourceSectionOriginal = ({
	  resources
	}) => {
	  const elements = useNavigationResources(resources);
	  const {
	    translateLabel
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Navigation, {
	    label: translateLabel('navigation'),
	    elements: elements
	  });
	}; // Rollup cannot handle type exports well - that is why we need to do this hack with
	// exporting default and named SidebarResourceSection


	const SidebarResourceSection = allowOverride(SidebarResourceSectionOriginal, 'SidebarResourceSection');

	const StyledSidebar = styled__default['default'](DesignSystem.Box).withConfig({
	  displayName: "sidebar__StyledSidebar",
	  componentId: "z5zut0-0"
	})(["transition:left 0.3s;top:0;bottom:0;flex-shrink:0;overflow-y:auto;&.hidden{left:-", ";}&.visible{left:0;}"], DesignSystem.themeGet('sizes', 'sidebarWidth'));
	StyledSidebar.defaultProps = {
	  position: ['absolute', 'absolute', 'absolute', 'absolute', 'inherit'],
	  width: 'sidebarWidth',
	  borderRight: 'default',
	  display: 'flex',
	  flexDirection: 'column',
	  zIndex: 50,
	  bg: 'white'
	};

	const Sidebar = props => {
	  const {
	    isVisible
	  } = props;
	  const [branding, resources, pages] = reactRedux.useSelector(state => [state.branding, state.resources, state.pages]);
	  return /*#__PURE__*/React__default['default'].createElement(StyledSidebar, {
	    className: isVisible ? 'visible' : 'hidden'
	  }, /*#__PURE__*/React__default['default'].createElement(SidebarBranding$1, {
	    branding: branding
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexGrow: 1,
	    className: DesignSystem.cssClass('Resources')
	  }, /*#__PURE__*/React__default['default'].createElement(SidebarResourceSection, {
	    resources: resources
	  })), /*#__PURE__*/React__default['default'].createElement(SidebarPages, {
	    pages: pages
	  }), (branding === null || branding === void 0 ? void 0 : branding.softwareBrothers) && /*#__PURE__*/React__default['default'].createElement(SidebarFooter$1, null));
	};

	const LoggedIn = props => {
	  const {
	    session,
	    paths
	  } = props;
	  const {
	    translateButton
	  } = useTranslation();
	  const dropActions = [{
	    label: translateButton('logout'),
	    onClick: event => {
	      event.preventDefault();
	      window.location.href = paths.logoutPath;
	    },
	    icon: 'Logout'
	  }];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.CurrentUserNav, {
	    name: session.email,
	    title: session.title,
	    avatarUrl: session.avatarUrl,
	    dropActions: dropActions
	  }));
	};

	const OverridableLoggedIn = allowOverride(LoggedIn, 'LoggedIn');

	const VersionItem = styled__default['default'](DesignSystem.Text).withConfig({
	  displayName: "version__VersionItem",
	  componentId: "rgspw3-0"
	})(["padding:12px 24px 12px 0;"]);
	VersionItem.defaultProps = {
	  display: ['none', 'block'],
	  color: 'grey100'
	};
	const Version = props => {
	  const {
	    versions
	  } = props;
	  const {
	    admin,
	    app
	  } = versions;
	  const {
	    translateLabel
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    flexGrow: 1,
	    py: "default",
	    px: "xxl",
	    className: DesignSystem.cssClass('Version')
	  }, admin && /*#__PURE__*/React__default['default'].createElement(VersionItem, null, translateLabel('adminVersion', {
	    version: admin
	  })), app && /*#__PURE__*/React__default['default'].createElement(VersionItem, null, translateLabel('appVersion', {
	    version: app
	  })));
	};

	const NavBar = styled__default['default'](DesignSystem.Box).withConfig({
	  displayName: "top-bar__NavBar",
	  componentId: "sc-1qk1nql-0"
	})(["height:", ";border-bottom:", ";background:", ";display:flex;flex-direction:row;flex-shrink:0;"], ({
	  theme
	}) => theme.sizes.navbarHeight, DesignSystem.themeGet('borders', 'default'), ({
	  theme
	}) => theme.colors.white);
	NavBar.defaultProps = {
	  className: DesignSystem.cssClass('NavBar')
	};
	const TopBar = props => {
	  const {
	    toggleSidebar
	  } = props;
	  const [session, paths, versions] = reactRedux.useSelector(state => [state.session, state.paths, state.versions]);
	  return /*#__PURE__*/React__default['default'].createElement(NavBar, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    py: "lg",
	    px: ['default', 'lg'],
	    onClick: toggleSidebar,
	    display: ['block', 'block', 'block', 'block', 'none'],
	    style: {
	      cursor: 'pointer'
	    }
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Menu",
	    size: 32,
	    color: "grey100"
	  })), /*#__PURE__*/React__default['default'].createElement(Version, {
	    versions: versions
	  }), session && session.email ? /*#__PURE__*/React__default['default'].createElement(OverridableLoggedIn, {
	    session: session,
	    paths: paths
	  }) : '');
	};

	const DROP_NOTICE = 'DROP_NOTICE';
	const dropNotice = noticeId => ({
	  type: 'DROP_NOTICE',
	  data: {
	    noticeId
	  }
	});

	const SET_NOTICE_PROGRESS = 'SET_NOTICE_PROGRESS';
	const setNoticeProgress = data => ({
	  type: SET_NOTICE_PROGRESS,
	  data
	});

	const TIME_TO_DISAPPEAR = 3;
	class NoticeElement extends React__default['default'].Component {
	  constructor(props) {
	    super(props);
	    const {
	      notice
	    } = props;
	    this.timer = null;
	    this.state = {
	      progress: notice.progress || 0
	    };
	  }

	  componentDidMount() {
	    const {
	      drop,
	      notice,
	      notifyProgress
	    } = this.props;
	    this.timer = setInterval(() => {
	      this.setState(state => {
	        const progress = state.progress + 100 / TIME_TO_DISAPPEAR;
	        notifyProgress({
	          noticeId: notice.id,
	          progress
	        });
	        return {
	          progress
	        };
	      });
	    }, 1000);
	    setTimeout(() => {
	      if (this.timer) {
	        clearInterval(this.timer);
	      }

	      drop();
	    }, 1000 * (TIME_TO_DISAPPEAR + 1));
	  }

	  componentWillUnmount() {
	    if (this.timer) {
	      clearInterval(this.timer);
	    }
	  }

	  render() {
	    const {
	      notice,
	      drop
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	      style: {
	        minWidth: '480px'
	      },
	      message: notice.message,
	      variant: notice.type === 'success' ? 'success' : 'danger',
	      onCloseClick: drop
	    });
	  }

	}

	const NoticeBox = props => {
	  const {
	    drop,
	    notices,
	    notifyProgress
	  } = props;
	  const notice = notices.length ? notices[notices.length - 1] : null;

	  if (notice) {
	    return /*#__PURE__*/React__default['default'].createElement("div", {
	      "data-testid": "notice-wrapper"
	    }, /*#__PURE__*/React__default['default'].createElement(NoticeElement, {
	      key: notice.id,
	      notice: notice,
	      drop: () => drop(notice.id),
	      notifyProgress: notifyProgress
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement("div", null);
	};

	const mapStateToProps = state => ({
	  notices: state.notices
	});

	const mapDispatchToProps = dispatch => ({
	  drop: noticeId => dispatch(dropNotice(noticeId)),
	  notifyProgress: ({
	    noticeId,
	    progress
	  }) => dispatch(setNoticeProgress({
	    noticeId,
	    progress
	  }))
	});

	const ConnectedNoticeBox = reactRedux.connect(mapStateToProps, mapDispatchToProps)(NoticeBox);

	const pageHeaderHeight = 284;
	const pageHeaderPaddingY = 74;
	const pageHeaderPaddingX = 250;
	const DashboardHeader = () => {
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    position: "relative",
	    overflow: "hidden"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    position: "absolute",
	    top: 50,
	    left: -10,
	    opacity: [0.2, 0.4, 1],
	    animate: true
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "Rocket"
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    position: "absolute",
	    top: -70,
	    right: -15,
	    opacity: [0.2, 0.4, 1],
	    animate: true
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "Moon"
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    bg: "grey100",
	    height: pageHeaderHeight,
	    py: pageHeaderPaddingY,
	    px: ['default', 'lg', pageHeaderPaddingX]
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    textAlign: "center",
	    color: "white"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.H2, null, translateMessage('welcomeOnBoard_title')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    opacity: 0.8
	  }, translateMessage('welcomeOnBoard_subtitle')))));
	};

	const boxes = ({
	  translateMessage
	}) => [{
	  variant: 'Planet',
	  title: translateMessage('addingResources_title'),
	  subtitle: translateMessage('addingResources_subtitle'),
	  href: 'https://adminbro.com/tutorial-passing-resources.html'
	}, {
	  variant: 'DocumentCheck',
	  title: translateMessage('customizeResources_title'),
	  subtitle: translateMessage('customizeResources_subtitle'),
	  href: 'https://adminbro.com/tutorial-customizing-resources.html'
	}, {
	  variant: 'DocumentSearch',
	  title: translateMessage('customizeActions_title'),
	  subtitle: translateMessage('customizeActions_subtitle'),
	  href: 'https://adminbro.com/tutorial-actions.html'
	}, {
	  variant: 'FlagInCog',
	  title: translateMessage('writeOwnComponents_title'),
	  subtitle: translateMessage('writeOwnComponents_subtitle'),
	  href: 'https://adminbro.com/tutorial-writing-react-components.html'
	}, {
	  variant: 'Folders',
	  title: translateMessage('customDashboard_title'),
	  subtitle: translateMessage('customDashboard_subtitle'),
	  href: 'https://adminbro.com/tutorial-custom-dashboard.html'
	}, {
	  variant: 'Astronaut',
	  title: translateMessage('roleBasedAccess_title'),
	  subtitle: translateMessage('roleBasedAccess_subtitle'),
	  href: 'https://adminbro.com/tutorial-rbac.html'
	}];

	const Card = styled__default['default'](DesignSystem.Box).withConfig({
	  displayName: "default-dashboard__Card",
	  componentId: "y6jxa9-0"
	})(["display:", ";color:", ";text-decoration:none;border:1px solid transparent;&:hover{border:1px solid ", ";box-shadow:", ";}"], ({
	  flex
	}) => flex ? 'flex' : 'block', ({
	  theme
	}) => theme.colors.grey100, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.shadows.cardHover);
	Card.defaultProps = {
	  variant: 'white',
	  boxShadow: 'card'
	};
	const Dashboard = () => {
	  const {
	    translateMessage,
	    translateButton
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, null, /*#__PURE__*/React__default['default'].createElement(DashboardHeader, null), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    mt: ['xl', 'xl', '-100px'],
	    mb: "xl",
	    mx: [0, 0, 0, 'auto'],
	    px: ['default', 'lg', 'xxl', '0'],
	    position: "relative",
	    flex: true,
	    flexDirection: "row",
	    flexWrap: "wrap",
	    width: [1, 1, 1, 1024]
	  }, boxes({
	    translateMessage
	  }).map((box, index) =>
	  /*#__PURE__*/
	  // eslint-disable-next-line react/no-array-index-key
	  React__default['default'].createElement(DesignSystem.Box, {
	    key: index,
	    width: [1, 1 / 2, 1 / 2, 1 / 3],
	    p: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(Card, {
	    as: "a",
	    href: box.href
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    textAlign: "center"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: box.variant,
	    width: 100,
	    height: 70
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.H5, {
	    mt: "lg"
	  }, box.title), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, box.subtitle))))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    width: [1, 1, 1 / 2],
	    p: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(Card, {
	    as: "a",
	    flex: true,
	    href: "https://join.slack.com/t/adminbro/shared_invite/zt-djsqxxpz-_YCS8UMtQ9Ade6DPuLR7Zw"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "SlackLogo"
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    ml: "xl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.H4, null, translateMessage('community_title')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('community_subtitle'))))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    width: [1, 1, 1 / 2],
	    p: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(Card, {
	    as: "a",
	    flex: true,
	    href: "https://github.com/SoftwareBrothers/admin-bro/issues"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "GithubLogo"
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    ml: "xl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.H4, null, translateMessage('foundBug_title')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('foundBug_subtitle'))))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    variant: "white",
	    boxShadow: "card",
	    width: 1,
	    m: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    textAlign: "center"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Illustration, {
	    variant: "SoftwareBrothersLogo"
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.H4, null, translateMessage('needMoreSolutions_title')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('needMoreSolutions_subtitle')), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    mt: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    as: "a",
	    variant: "primary",
	    href: "https://softwarebrothers.co/services"
	  }, translateButton('contactUs')))))));
	};

	const ErrorMessage = ({
	  error
	}) => {
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    m: "xxl",
	    variant: "danger",
	    message: "Javascript Error"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, error.toString()), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    mt: "default"
	  }, translateMessage('seeConsoleForMore')));
	};

	class ErrorBoundary extends React__default['default'].Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      error: null
	    };
	  }

	  componentDidCatch(error) {
	    this.setState({
	      error
	    });
	  }

	  render() {
	    const {
	      children
	    } = this.props;
	    const {
	      error
	    } = this.state;

	    if (error !== null) {
	      return /*#__PURE__*/React__default['default'].createElement(ErrorMessage, {
	        error: error
	      });
	    }

	    return children || null;
	  }

	}

	class Dashboard$1 extends React__default['default'].Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      isClient: false
	    };
	  }

	  componentDidMount() {
	    this.setState({
	      isClient: true
	    });
	  }

	  render() {
	    const {
	      dashboard
	    } = this.props;
	    const {
	      isClient
	    } = this.state;
	    let Component;

	    if (dashboard && dashboard.component && isClient && AdminBro.UserComponents[dashboard.component]) {
	      Component = AdminBro.UserComponents[dashboard.component];
	    } else {
	      Component = Dashboard;
	    }

	    return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(Component, null));
	  }

	}

	const mapStateToProps$1 = state => ({
	  dashboard: state.dashboard
	});

	var Dashboard$2 = reactRedux.connect(mapStateToProps$1)(Dashboard$1);

	const AddNewItemButton = props => {
	  const {
	    resource,
	    property
	  } = props;
	  const {
	    translateProperty,
	    translateButton
	  } = useTranslation();
	  const label = translateProperty(`${property.path}.addNewItem`, resource.id, {
	    defaultValue: translateButton('addNewItem', resource.id)
	  });
	  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Add"
	  }), label);
	};

	const PropertyLabel = props => {
	  const {
	    property,
	    props: labelProps
	  } = props;

	  if (property.hideLabel) {
	    return null;
	  }

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, _extends_1({
	    htmlFor: property.path,
	    required: property.isRequired
	  }, labelProps), property.label);
	};

	/**
	 * Converts property: PropertyJSON from an array to a sub-property for an actual item in the array
	 * It change path that it has index inside along with the label. Futhermore flat isArray is removed
	 * ,because it was already handled, so that itemRenderer can render property as a regular one
	 *
	 * @param {PropertyJSON}  arrayProperty property with path set to an root Array type property,
	 * @param {Number}        index         index under which sub-property should be placed
	 * @private
	 * @hide
	 */
	const convertToSubProperty = (arrayProperty, index) => ({ ...arrayProperty,
	  path: [arrayProperty.path, index].join(DELIMITER),
	  label: `[${index + 1}]`,
	  isArray: false
	});

	/**
	 * Removes selected array item from given record. It performs following tasks:
	 * 1. removes array item from the array
	 * 2. reorders keys in new array item
	 * 3. if property has populated fields it also reorders them
	 * it uses {@link flat } module and its removePath method
	 *
	 * @param {RecordJSON} record
	 * @param {string}     subPropertyPath            which has to be removed. It has to be flattened
	 *                                                in notation, and ending with array index
	 * @private
	 * @hide
	 */
	const removeSubProperty = (record, subPropertyPath) => {
	  // by default populated is flatten just to the path level - object itself is not flatten. That is
	  // why we have to retrieve the original state. That is why we have to replace record.populated to
	  // from { 'some.nested.1.key': RecordJSON } to { 'some.nested.1.key': 'some.nested.1.key' },
	  // then remove keys, and refill back some.nested.1.key to the value from the original populated
	  // object.
	  const populatedKeyMap = Object.keys(record.populated).reduce((memo, propertyKey) => ({ ...memo,
	    [propertyKey]: propertyKey
	  }), {});
	  const newPopulatedKeyMap = flat.removePath(populatedKeyMap, subPropertyPath);
	  const newPopulated = Object.entries(newPopulatedKeyMap).reduce((memo, [newPropertyKey, oldPropertyKey]) => ({ ...memo,
	    [newPropertyKey]: oldPropertyKey && record.populated[oldPropertyKey === null || oldPropertyKey === void 0 ? void 0 : oldPropertyKey.toString()]
	  }), {});
	  return { ...record,
	    params: flat.removePath(record.params, subPropertyPath),
	    populated: newPopulated
	  };
	};

	const ItemRenderer = props => {
	  const {
	    ItemComponent,
	    property,
	    onDelete
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    flexDirection: "row",
	    alignItems: "center",
	    "data-testid": property.path
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexGrow: 1
	  }, /*#__PURE__*/React__default['default'].createElement(ItemComponent, props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0,
	    ml: "lg"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    rounded: true,
	    ml: "default",
	    "data-testid": "delete-item",
	    type: "button",
	    size: "icon",
	    onClick: event => onDelete(event, property),
	    variant: "danger"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "TrashCan"
	  }))));
	};

	const InputsInSection = props => {
	  const {
	    property,
	    record,
	    resource,
	    onChange
	  } = props;
	  const items = flat.get(record.params, property.path) || [];
	  const addNew = React.useCallback(event => {
	    const newItems = [...items, property.subProperties.length ? {} : ''];
	    onChange(property.path, newItems);
	    event.preventDefault();
	    return false;
	  }, [record, onChange, property]);
	  const removeItem = React.useCallback((event, subProperty) => {
	    const newRecord = removeSubProperty(record, subProperty.path);
	    onChange(newRecord);
	    event.preventDefault();
	    return false;
	  }, [record, onChange, property]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Section, {
	    mt: "xl"
	  }, items.map((item, i) => {
	    const itemProperty = convertToSubProperty(props.property, i);
	    return /*#__PURE__*/React__default['default'].createElement(ItemRenderer, _extends_1({}, props, {
	      property: itemProperty,
	      key: itemProperty.path,
	      onDelete: removeItem
	    }));
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    onClick: addNew,
	    type: "button",
	    rounded: true
	  }, /*#__PURE__*/React__default['default'].createElement(AddNewItemButton, {
	    resource: resource,
	    property: property
	  })));
	};

	const Edit = props => {
	  const {
	    property,
	    record,
	    testId
	  } = props;
	  const error = record.errors && record.errors[property.propertyPath];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error,
	    "data-testid": testId
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(InputsInSection, props), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	const List = props => {
	  const {
	    property,
	    record
	  } = props;
	  const values = flat.get(record.params, property.path) || [];
	  return /*#__PURE__*/React__default['default'].createElement("span", null, `length: ${values.length}`);
	};

	class Show extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record,
	      ItemComponent
	    } = this.props;
	    const items = flat.get(record.params, property.path) || [];
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Section, null, (items || []).map((item, i) => {
	      const itemProperty = convertToSubProperty(property, i);
	      return /*#__PURE__*/React__default['default'].createElement(ItemComponent, _extends_1({}, this.props, {
	        key: itemProperty.path,
	        property: itemProperty
	      }));
	    })));
	  }

	}

	// import Show from './show'

	var ArrayType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show,
		edit: Edit,
		list: List
	});

	function convertToSubProperty$1(property, subProperty) {
	  return { ...subProperty,
	    path: [property.path, subProperty.name].join(DELIMITER)
	  };
	}

	const Edit$1 = props => {
	  const {
	    property,
	    record,
	    ItemComponent
	  } = props;
	  const error = record.errors && record.errors[property.path];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Section, property.props, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => {
	    const subPropertyWithPath = convertToSubProperty$1(property, subProperty);
	    return /*#__PURE__*/React__default['default'].createElement(ItemComponent, _extends_1({}, props, {
	      key: subPropertyWithPath.path,
	      property: subPropertyWithPath
	    }));
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	const Show$1 = props => {
	  const {
	    property,
	    ItemComponent
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	    label: property.label
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Section, null, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => {
	    const subPropertyWithPath = convertToSubProperty$1(property, subProperty);
	    return /*#__PURE__*/React__default['default'].createElement(ItemComponent, _extends_1({}, props, {
	      key: subPropertyWithPath.path,
	      property: subPropertyWithPath
	    }));
	  })));
	};

	// TODO: define ItemComponent interface
	class List$1 extends React__default['default'].PureComponent {
	  renderItems() {
	    const {
	      property,
	      ItemComponent
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, property.subProperties.filter(subProperty => !subProperty.isId).map(subProperty => {
	      const subPropertyWithPath = convertToSubProperty$1(property, subProperty);
	      return /*#__PURE__*/React__default['default'].createElement("div", {
	        key: subPropertyWithPath.path
	      }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, {
	        inline: true
	      }, `${subProperty.label}: `), /*#__PURE__*/React__default['default'].createElement(ItemComponent, _extends_1({}, this.props, {
	        property: subPropertyWithPath
	      })));
	    }));
	  }

	  render() {
	    const {
	      property,
	      record,
	      resource
	    } = this.props;
	    const showAction = record.recordActions.find(a => a.name === 'show');

	    if (resource.titleProperty.propertyPath === property.propertyPath && showAction) {
	      const h = new ViewHelpers();
	      const href = h.recordActionUrl({
	        resourceId: resource.id,
	        recordId: record.id,
	        actionName: 'show'
	      });
	      return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Link, {
	        to: href
	      }, this.renderItems());
	    }

	    return this.renderItems();
	  }

	}

	// import Show from './show'

	var MixedType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show$1,
		edit: Edit$1,
		list: List$1
	});

	const DefaultPropertyValue = props => {
	  const {
	    property,
	    record
	  } = props;
	  const rawValue = record === null || record === void 0 ? void 0 : record.params[property.path];

	  if (typeof rawValue === 'undefined') {
	    return null;
	  }

	  if (property.availableValues) {
	    const option = property.availableValues.find(opt => opt.value === rawValue);

	    if (!option) {
	      return rawValue;
	    }

	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, null, (option === null || option === void 0 ? void 0 : option.label) || rawValue);
	  }

	  return rawValue;
	};

	class Show$2 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(DefaultPropertyValue, this.props));
	  }

	}

	/* eslint-disable import/prefer-default-export */

	/**
	 * Function used in React memo to compare if previous property value and next
	 * property value are the same.
	 *
	 * @private
	 */
	const recordPropertyIsEqual = (prevProps, nextProps) => {
	  const prevValue = prevProps.record.params[prevProps.property.path];
	  const nextValue = nextProps.record.params[nextProps.property.path];
	  const prevError = prevProps.record.errors[prevProps.property.path];
	  const nextError = nextProps.record.errors[nextProps.property.path];
	  return prevValue === nextValue && prevError === nextError;
	};

	const Edit$2 = props => {
	  var _record$errors;

	  const {
	    property,
	    record
	  } = props;
	  const error = (_record$errors = record.errors) === null || _record$errors === void 0 ? void 0 : _record$errors[property.path];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), property.availableValues ? /*#__PURE__*/React__default['default'].createElement(SelectEdit, props) : /*#__PURE__*/React__default['default'].createElement(TextEdit, props), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	const SelectEdit = props => {
	  var _record$params$proper, _record$params;

	  const {
	    theme,
	    record,
	    property,
	    onChange
	  } = props;

	  if (!property.availableValues) {
	    return null;
	  }

	  const propValue = (_record$params$proper = (_record$params = record.params) === null || _record$params === void 0 ? void 0 : _record$params[property.path]) !== null && _record$params$proper !== void 0 ? _record$params$proper : '';
	  const styles = DesignSystem.selectStyles(theme);
	  const selected = property.availableValues.find(av => av.value === propValue);
	  return /*#__PURE__*/React__default['default'].createElement(Select__default['default'], _extends_1({
	    isClearable: true,
	    styles: styles,
	    value: selected,
	    options: property.availableValues,
	    onChange: s => {
	      var _s$value;

	      return onChange(property.path, (_s$value = s === null || s === void 0 ? void 0 : s.value) !== null && _s$value !== void 0 ? _s$value : '');
	    },
	    isDisabled: property.isDisabled
	  }, property.props));
	};

	const TextEdit = props => {
	  var _record$params$proper2, _record$params2;

	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const propValue = (_record$params$proper2 = (_record$params2 = record.params) === null || _record$params2 === void 0 ? void 0 : _record$params2[property.path]) !== null && _record$params$proper2 !== void 0 ? _record$params$proper2 : '';
	  const [value, setValue] = React.useState(propValue);
	  React.useEffect(() => {
	    if (value !== propValue) {
	      setValue(propValue);
	    }
	  }, [propValue]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Input, _extends_1({
	    id: property.path,
	    name: property.path,
	    onChange: e => setValue(e.target.value),
	    onBlur: () => onChange(property.path, value) // handle clicking ENTER
	    ,
	    onKeyDown: e => e.keyCode === 13 && onChange(property.path, value),
	    value: value,
	    disabled: property.isDisabled
	  }, property.props));
	};

	var edit = styled.withTheme( /*#__PURE__*/React.memo(Edit$2, recordPropertyIsEqual));

	class Filter extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.handleInputChange = this.handleInputChange.bind(this);
	    this.handleSelectChange = this.handleSelectChange.bind(this);
	  }

	  handleInputChange(event) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    onChange(property.path, event.target.value);
	  }

	  handleSelectChange(selected) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    const value = selected ? selected.value : '';
	    onChange(property.path, value);
	  }

	  renderInput() {
	    const {
	      property,
	      filter,
	      theme
	    } = this.props;
	    const filterKey = `filter-${property.path}`;
	    const value = filter[property.path] || '';

	    if (property.availableValues) {
	      const selected = property.availableValues.find(av => av.value === value);
	      return /*#__PURE__*/React__default['default'].createElement(Select__default['default'], {
	        value: typeof selected === 'undefined' ? '' : selected,
	        isClearable: true,
	        options: property.availableValues,
	        styles: DesignSystem.filterStyles(theme),
	        onChange: this.handleSelectChange
	      });
	    }

	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Input, {
	      name: filterKey,
	      onChange: this.handleInputChange,
	      value: value
	    });
	  }

	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	      variant: "filter"
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, property.label), this.renderInput());
	  }

	}

	var filter = styled.withTheme(Filter);

	class List$2 extends React__default['default'].PureComponent {
	  render() {
	    return /*#__PURE__*/React__default['default'].createElement(DefaultPropertyValue, this.props);
	  }

	}

	var defaultType = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show$2,
		edit: edit,
		filter: filter,
		list: List$2
	});

	const parseValue = value => !(!value || value === 'false');

	const Edit$3 = props => {
	  const {
	    property,
	    onChange,
	    record
	  } = props;
	  const value = parseValue(record.params && record.params[property.path]);
	  const error = record.errors && record.errors[property.path];

	  const handleChange = () => {
	    if (!property.isDisabled) {
	      onChange(property.path, !value);
	    }
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.CheckBox, _extends_1({
	    id: property.path,
	    name: property.path,
	    onChange: handleChange,
	    checked: value,
	    disabled: property.isDisabled
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property,
	    props: {
	      inline: true
	    }
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$1 = /*#__PURE__*/React.memo(Edit$3, recordPropertyIsEqual);

	var mapValue = (value => {
	  if (typeof value === 'undefined') {
	    return '';
	  }

	  return value ? 'Yes' : 'No';
	});

	const BooleanPropertyValue = props => {
	  const {
	    record,
	    property,
	    resource
	  } = props;
	  const {
	    translateProperty
	  } = useTranslation();
	  const rawValue = record === null || record === void 0 ? void 0 : record.params[property.path];

	  if (typeof rawValue === 'undefined' || rawValue === '') {
	    return null;
	  }

	  const base = mapValue(rawValue);
	  const translation = translateProperty(`${property.path}.${rawValue}`, resource.id, {
	    defaultValue: base
	  });
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, {
	    outline: true,
	    size: "sm"
	  }, translation);
	};

	class Show$3 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(BooleanPropertyValue, this.props));
	  }

	}

	class List$3 extends React__default['default'].PureComponent {
	  render() {
	    return /*#__PURE__*/React__default['default'].createElement(BooleanPropertyValue, this.props);
	  }

	}

	class Filter$1 extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.handleChange = this.handleChange.bind(this);
	  }

	  handleChange(selected) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    const value = selected ? selected.value : '';
	    onChange(property.path, value);
	  }

	  render() {
	    const {
	      property,
	      filter = {},
	      theme
	    } = this.props;
	    const value = typeof filter[property.path] === 'undefined' ? '' : filter[property.path];
	    const options = [{
	      value: true,
	      label: mapValue(true)
	    }, {
	      value: false,
	      label: mapValue(false)
	    }];
	    const selected = options.find(o => o.value === value);
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, property.label), /*#__PURE__*/React__default['default'].createElement(Select__default['default'], {
	      value: typeof selected === 'undefined' ? '' : selected,
	      isClearable: true,
	      options: options,
	      styles: DesignSystem.filterStyles(theme),
	      onChange: this.handleChange
	    }));
	  }

	}

	var filter$1 = styled.withTheme(Filter$1);

	var boolean = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$1,
		show: Show$3,
		list: List$3,
		filter: filter$1
	});

	const Edit$4 = props => {
	  const {
	    property,
	    onChange,
	    record
	  } = props;
	  const value = record.params && record.params[property.path] || '';
	  const error = record.errors && record.errors[property.path];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DatePicker, _extends_1({
	    value: value,
	    disabled: property.isDisabled,
	    onChange: data => onChange(property.path, data),
	    propertyType: property.type
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$2 = /*#__PURE__*/React.memo(Edit$4, recordPropertyIsEqual);

	var mapValue$1 = ((value, propertyType) => {
	  if (!value) {
	    return '';
	  }

	  const date = new Date(value);

	  if (date) {
	    return DesignSystem.formatDateProperty(date, propertyType);
	  }

	  return '';
	});

	class Show$4 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = mapValue$1(record.params[property.path], property.type);
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, value);
	  }

	}

	class List$4 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = mapValue$1(record.params[property.path], property.type);
	    return /*#__PURE__*/React__default['default'].createElement("span", null, value);
	  }

	}

	const PARAM_SEPARATOR = '~~';

	/**
	 * Filter object wrapping up selected filters.
	 * @private
	 */
	class Filter$2 {
	  /**
	   * Changes raw nested filters to form Object<path, value>.
	   *
	   * @example
	   * const filters = {
	   *  nested: {field: 'ala'},
	   *  'dataField~~from': '2019-08-14'
	   * }
	   *
	   * const normalized = Filter.normalizeFilters(filters)
	   * // {
	   * //   'nested.filter': 'ala',
	   * //   'dataField': {from: '2019-08-14'}
	   * // }
	   *
	   *
	   * @param   {Object}  filters
	   *
	   * @return  {Object}
	   */
	  static normalizeKeys(filters) {
	    return flat$1.unflatten(flat$1.flatten(filters), {
	      delimiter: PARAM_SEPARATOR
	    });
	  }
	  /**
	   * @param   {Object<String,Object | String>}  filters   selected filters
	   * @param   {BaseResource}                    resource    resource which is filtered
	   */


	  constructor(filters = {}, resource) {
	    this.resource = resource;
	    const normalized = Filter$2.normalizeKeys(filters);
	    this.filters = Object.keys(normalized).reduce((memo, path) => {
	      memo[path] = {
	        path,
	        property: this.resource.property(path.split('.')[0]),
	        value: normalized[path]
	      };
	      return memo;
	    }, {});
	  }
	  /**
	   * Returns filter for a given property key
	   *
	   * @param {String} key      property key
	   * @returns {Filter.Property | undefined}
	   */


	  get(key) {
	    return this.filters[key];
	  }
	  /**
	   * Populates all filtered properties which refers to other resources
	   */


	  async populate() {
	    const keys = Object.keys(this.filters);

	    for (let index = 0; index < keys.length; index += 1) {
	      var _this$resource$decora;

	      const key = keys[index];
	      const referenceResource = (_this$resource$decora = this.resource.decorate().getPropertyByKey(key)) === null || _this$resource$decora === void 0 ? void 0 : _this$resource$decora.reference();

	      if (referenceResource) {
	        this.filters[key].populated = await referenceResource.findOne(this.filters[key].value);
	      }
	    }

	    return this;
	  }

	  reduce(callback, initial) {
	    return Object.values(this.filters).reduce(callback, initial || {});
	  }

	  isVisible() {
	    return !!Object.keys(this.filters).length;
	  }

	}

	var BackendFilter = /*#__PURE__*/Object.freeze({
		__proto__: null,
		PARAM_SEPARATOR: PARAM_SEPARATOR,
		Filter: Filter$2,
		'default': Filter$2
	});

	const {
	  PARAM_SEPARATOR: PARAM_SEPARATOR$1
	} = BackendFilter;

	const Filter$3 = props => {
	  const {
	    property,
	    filter,
	    onChange
	  } = props;
	  const fromKey = `${property.path}${PARAM_SEPARATOR$1}from`;
	  const toKey = `${property.path}${PARAM_SEPARATOR$1}to`;
	  const fromValue = filter[fromKey];
	  const toValue = filter[toKey];
	  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    variant: "filter"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, property.label), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, "- From: "), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DatePicker, {
	    value: fromValue,
	    onChange: data => onChange(fromKey, data),
	    propertyType: property.type
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, {
	    mt: "default"
	  }, "- To: "), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DatePicker, {
	    value: toValue,
	    onChange: data => onChange(toKey, data),
	    propertyType: property.type
	  })));
	};

	var datetime = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$2,
		show: Show$4,
		list: List$4,
		filter: Filter$3
	});

	const Edit$5 = props => {
	  var _record$params$proper, _record$params;

	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const value = (_record$params$proper = (_record$params = record.params) === null || _record$params === void 0 ? void 0 : _record$params[property.path]) !== null && _record$params$proper !== void 0 ? _record$params$proper : '';
	  const error = record.errors && record.errors[property.path];
	  const {
	    props: propertyProps
	  } = property;
	  const {
	    quill = {},
	    ...customProps
	  } = propertyProps || {};
	  quill.theme = quill.theme || 'snow';
	  quill.modules = {
	    toolbar: DesignSystem.DefaultQuillToolbarOptions,
	    ...(quill.modules || {})
	  };
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.RichText, _extends_1({}, customProps, {
	    value: value,
	    onChange: content => onChange(property.path, content),
	    quill: quill
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error === null || error === void 0 ? void 0 : error.message));
	};

	var edit$3 = /*#__PURE__*/React.memo(Edit$5, recordPropertyIsEqual);

	class Show$5 extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.contentRef = /*#__PURE__*/React__default['default'].createRef();
	  }

	  componentDidMount() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = record.params[property.path];
	    this.contentRef.current.innerHTML = value;
	  }

	  render() {
	    const {
	      property
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	      variant: "grey",
	      border: "default"
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	      ref: this.contentRef
	    })));
	  }

	}

	const List$5 = props => {
	  const {
	    property,
	    record
	  } = props;
	  const original = record.params[property.path] || '';
	  const value = original.substring(0, 15) + (original.length > 15 ? '...' : '');
	  return /*#__PURE__*/React__default['default'].createElement("span", null, value);
	};

	var richtext = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$3,
		show: Show$5,
		list: List$5
	});

	const Edit$6 = props => {
	  var _record$populated$pro;

	  const {
	    onChange,
	    property,
	    record,
	    theme
	  } = props;
	  const {
	    reference: resourceId
	  } = property;

	  if (!resourceId) {
	    throw new Error(`Cannot reference resource in property '${property.path}'`);
	  }

	  const handleChange = selected => {
	    if (selected) {
	      onChange(property.path, selected.value, selected.record);
	    } else {
	      onChange(property.path, null);
	    }
	  };

	  const loadOptions = async inputValue => {
	    const api = new ApiClient();
	    const optionRecords = await api.searchRecords({
	      resourceId,
	      query: inputValue
	    });
	    return optionRecords.map(optionRecord => ({
	      value: optionRecord.id,
	      label: optionRecord.title,
	      record: optionRecord
	    }));
	  };

	  const error = record === null || record === void 0 ? void 0 : record.errors[property.path];
	  const selectedId = record === null || record === void 0 ? void 0 : record.params[property.path];
	  const [loadedRecord, setLoadedRecord] = React.useState();
	  const [loadingRecord, setLoadingRecord] = React.useState(0);
	  const selectedValue = (_record$populated$pro = record === null || record === void 0 ? void 0 : record.populated[property.path]) !== null && _record$populated$pro !== void 0 ? _record$populated$pro : loadedRecord;
	  const selectedOption = selectedId && selectedValue ? {
	    value: selectedValue.id,
	    label: selectedValue.title
	  } : {
	    value: '',
	    label: ''
	  };
	  const styles = DesignSystem.selectStyles(theme);
	  React.useEffect(() => {
	    if (!selectedValue && selectedId) {
	      setLoadingRecord(c => c + 1);
	      const api = new ApiClient();
	      api.recordAction({
	        actionName: 'show',
	        resourceId,
	        recordId: selectedId
	      }).then(({
	        data
	      }) => {
	        setLoadedRecord(data.record);
	      }).finally(() => {
	        setLoadingRecord(c => c - 1);
	      });
	    }
	  }, [selectedValue, selectedId, resourceId]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(Select__default$1['default'], _extends_1({
	    cacheOptions: true,
	    value: selectedOption,
	    styles: styles,
	    defaultOptions: true,
	    loadOptions: loadOptions,
	    onChange: handleChange,
	    isClearable: true,
	    isDisabled: property.isDisabled,
	    isLoading: loadingRecord
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error === null || error === void 0 ? void 0 : error.message));
	};

	var edit$4 = styled.withTheme(Edit$6);

	const StyledLink = styled__default['default'](reactRouterDom.Link).withConfig({
	  displayName: "reference-value__StyledLink",
	  componentId: "flgaqr-0"
	})(["", ";padding-left:", ";padding-right:", ";"], DesignSystem.ButtonCSS, ({
	  theme
	}) => theme.space.xs, ({
	  theme
	}) => theme.space.xs);

	const ReferenceValue = props => {
	  const {
	    property,
	    record
	  } = props;
	  const h = new ViewHelpers();
	  const refId = record.params[property.path];
	  const populated = record.populated[property.path];
	  const value = populated && populated.title || refId;

	  if (!property.reference) {
	    throw new Error(`property: "${property.path}" does not have a reference`);
	  }

	  if (populated && populated.recordActions.find(a => a.name === 'show')) {
	    const href = h.recordActionUrl({
	      resourceId: property.reference,
	      recordId: refId,
	      actionName: 'show'
	    });
	    return /*#__PURE__*/React__default['default'].createElement(StyledLink, {
	      variant: "text",
	      to: href
	    }, value);
	  }

	  return /*#__PURE__*/React__default['default'].createElement("span", null, value);
	};

	class Show$6 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, /*#__PURE__*/React__default['default'].createElement(ReferenceValue, {
	      property: property,
	      record: record
	    }));
	  }

	}

	class List$6 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    return /*#__PURE__*/React__default['default'].createElement(ReferenceValue, {
	      property: property,
	      record: record
	    });
	  }

	}

	class Filter$4 extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.api = new ApiClient();
	    this.options = [];
	    this.loadOptions = this.loadOptions.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	  }

	  handleChange(selected) {
	    const {
	      onChange,
	      property
	    } = this.props;
	    onChange(property.path, selected ? selected.value : '');
	  }

	  async loadOptions(inputValue) {
	    const {
	      property
	    } = this.props;
	    const records = await this.api.searchRecords({
	      resourceId: property.reference,
	      query: inputValue
	    });
	    this.options = records.map(r => ({
	      value: r.id,
	      label: r.title
	    }));
	    return this.options;
	  }

	  render() {
	    const {
	      property,
	      filter,
	      theme
	    } = this.props;
	    const value = typeof filter[property.path] === 'undefined' ? '' : filter[property.path];
	    const selected = (this.options || []).find(o => o.value === value);
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Label, null, property.label), /*#__PURE__*/React__default['default'].createElement(Select__default$1['default'], {
	      value: typeof selected === 'undefined' ? '' : selected,
	      isClearable: true,
	      cacheOptions: true,
	      styles: DesignSystem.filterStyles(theme),
	      loadOptions: this.loadOptions,
	      onChange: this.handleChange,
	      defaultOptions: true
	    }));
	  }

	}

	var filter$2 = styled.withTheme(Filter$4);

	var reference = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$4,
		show: Show$6,
		list: List$6,
		filter: filter$2
	});

	class Show$7 extends React__default['default'].PureComponent {
	  render() {
	    const {
	      property,
	      record
	    } = this.props;
	    const value = record.params[property.path] || '';
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.ValueGroup, {
	      label: property.label
	    }, value.split(/(?:\r\n|\r|\n)/g).map((line, i) =>
	    /*#__PURE__*/
	    // eslint-disable-next-line react/no-array-index-key
	    React__default['default'].createElement(React__default['default'].Fragment, {
	      key: i
	    }, line, /*#__PURE__*/React__default['default'].createElement("br", null))));
	  }

	}

	const Edit$7 = props => {
	  var _record$params$proper, _record$params, _record$errors;

	  const {
	    onChange,
	    property,
	    record
	  } = props;
	  const propValue = (_record$params$proper = (_record$params = record.params) === null || _record$params === void 0 ? void 0 : _record$params[property.path]) !== null && _record$params$proper !== void 0 ? _record$params$proper : '';
	  const [value, setValue] = React.useState(propValue);
	  const error = (_record$errors = record.errors) === null || _record$errors === void 0 ? void 0 : _record$errors[property.path];
	  React.useEffect(() => {
	    if (value !== propValue) {
	      setValue(propValue);
	    }
	  }, [propValue]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: Boolean(error)
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Input, _extends_1({
	    as: "textarea",
	    rows: (value.match(/\n/g) || []).length + 1,
	    id: property.path,
	    name: property.path,
	    onChange: e => setValue(e.target.value),
	    onBlur: () => onChange(property.path, value),
	    value: value,
	    disabled: property.isDisabled
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$5 = /*#__PURE__*/React.memo(Edit$7, recordPropertyIsEqual);

	var textarea = /*#__PURE__*/Object.freeze({
		__proto__: null,
		show: Show$7,
		edit: edit$5
	});

	const Edit$8 = props => {
	  const {
	    property,
	    record,
	    onChange
	  } = props;
	  const propValue = record.params[property.path];
	  const [value, setValue] = React.useState(propValue);
	  const error = record.errors && record.errors[property.path];
	  const [isInput, setIsInput] = React.useState(false);
	  React.useEffect(() => {
	    if (value !== propValue) {
	      setValue(propValue);
	    }
	  }, [propValue]);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormGroup, {
	    error: !!error
	  }, /*#__PURE__*/React__default['default'].createElement(PropertyLabel, {
	    property: property
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.InputGroup, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Input, _extends_1({
	    type: isInput ? 'input' : 'password',
	    className: "input",
	    id: property.path,
	    name: property.path,
	    onChange: event => setValue(event.target.value),
	    onBlur: () => onChange(property.path, value),
	    onKeyDown: e => e.keyCode === 13 && onChange(property.path, value),
	    value: value !== null && value !== void 0 ? value : '',
	    disabled: property.isDisabled
	  }, property.props)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: isInput ? 'primary' : 'text',
	    type: "button",
	    size: "icon",
	    onClick: () => setIsInput(!isInput)
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "View"
	  }))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.FormMessage, null, error && error.message));
	};

	var edit$6 = /*#__PURE__*/React.memo(Edit$8, recordPropertyIsEqual);

	/* eslint-disable import/prefer-default-export */

	var password = /*#__PURE__*/Object.freeze({
		__proto__: null,
		edit: edit$6
	});

	let globalAny$2 = {};

	try {
	  globalAny$2 = window;
	} catch (error) {
	  if (error.message !== 'window is not defined') {
	    throw error;
	  }
	}

	const types = {
	  textarea,
	  boolean,
	  datetime,
	  reference,
	  password,
	  date: datetime,
	  richtext,
	  string: defaultType,
	  number: defaultType,
	  float: defaultType,
	  mixed: null
	};
	/**
	 * @load ./base-property-component.doc.md
	 * @component
	 * @name BasePropertyComponent
	 * @subcategory Application
	 * @class
	 * @hideconstructor
	 */

	const BasePropertyComponent = props => {
	  const {
	    property: baseProperty,
	    resource,
	    record,
	    filter,
	    where,
	    onChange
	  } = props;
	  const property = React.useMemo(() => ({ ...baseProperty,
	    // we fill the path if it is not there. That is why all the actual Component Renderers are
	    // called with the path set to this root path. Next mixed and array components adds to this
	    // path either index (for array) or subProperty name.
	    path: baseProperty.path || baseProperty.propertyPath
	  }), [baseProperty]);
	  const testId = `property-${where}-${property.path}`;
	  let Component = types[property.type] && types[property.type][where] || defaultType[where];

	  if (property.components && property.components[where]) {
	    const component = property.components[where];

	    if (!component) {
	      throw new Error(`there is no "${property.path}.components.${where}"`);
	    }

	    Component = globalAny$2.AdminBro.UserComponents[component];
	    return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	      "data-testid": testId
	    }, /*#__PURE__*/React__default['default'].createElement(Component, {
	      property: property,
	      resource: resource,
	      record: record,
	      filter: filter,
	      onChange: onChange,
	      where: where
	    })));
	  }

	  const Array = ArrayType[where];
	  const Mixed = MixedType[where];

	  if (baseProperty.isArray) {
	    if (!Array) {
	      return /*#__PURE__*/React__default['default'].createElement("div", null);
	    }

	    return /*#__PURE__*/React__default['default'].createElement(Array, _extends_1({}, props, {
	      property: property,
	      ItemComponent: BasePropertyComponent,
	      testId: testId
	    }));
	  }

	  if (baseProperty.type === 'mixed') {
	    if (!Mixed) {
	      return /*#__PURE__*/React__default['default'].createElement("div", null);
	    }

	    return /*#__PURE__*/React__default['default'].createElement(Mixed, _extends_1({}, props, {
	      property: property,
	      ItemComponent: BasePropertyComponent,
	      testId: testId
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    "data-testid": testId
	  }, /*#__PURE__*/React__default['default'].createElement(Component, {
	    property: property,
	    resource: resource,
	    record: record,
	    filter: filter,
	    onChange: onChange,
	    where: where
	  })));
	};

	function camelizePropertyType(type) {
	  return {
	    Edit: type.edit,
	    Show: type.show,
	    List: type.list,
	    Filter: type.filter
	  };
	}

	const BasePropertyComponentExtended = Object.assign(BasePropertyComponent, {
	  DefaultType: camelizePropertyType(defaultType),
	  Boolean: camelizePropertyType(boolean),
	  DateTime: camelizePropertyType(datetime),
	  RichText: camelizePropertyType(richtext),
	  Reference: camelizePropertyType(reference),
	  TextArea: camelizePropertyType(textarea),
	  Password: camelizePropertyType(password)
	});

	const BreadcrumbLink = styled__default['default'](reactRouterDom.Link).withConfig({
	  displayName: "breadcrumbs__BreadcrumbLink",
	  componentId: "yjyesi-0"
	})(["color:", ";font-family:", ";line-height:", ";font-size:", ";text-decoration:none;&:hover{color:", ";}&:after{content:'/';padding:0 ", ";}&:last-child{&:after{content:'';}}"], ({
	  theme
	}) => theme.colors.grey40, ({
	  theme
	}) => theme.font, ({
	  theme
	}) => theme.lineHeights.default, ({
	  theme
	}) => theme.fontSizes.default, ({
	  theme
	}) => theme.colors.primary100, ({
	  theme
	}) => theme.space.default);
	/**
	 * @memberof Breadcrumbs
	 */

	/**
	 * @component
	 * @private
	 */
	const Breadcrumbs = props => {
	  const {
	    resource,
	    record,
	    actionName
	  } = props;
	  const action = resource.actions.find(a => a.name === actionName);
	  const h = new ViewHelpers();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexGrow: 1,
	    className: DesignSystem.cssClass('Breadcrumbs')
	  }, /*#__PURE__*/React__default['default'].createElement(BreadcrumbLink, {
	    to: h.dashboardUrl()
	  }, "Dashboard"), /*#__PURE__*/React__default['default'].createElement(BreadcrumbLink, {
	    to: resource.href ? resource.href : '/',
	    className: record ? 'is-active' : ''
	  }, resource.name), action && action.name !== 'list' && /*#__PURE__*/React__default['default'].createElement(BreadcrumbLink, {
	    to: "#"
	  }, action.label));
	};

	const actionsToButtonGroup = options => {
	  const {
	    actions,
	    params,
	    handleClick
	  } = options;
	  const buttons = actions.map(action => {
	    const href = actionHref(action, params);
	    return {
	      icon: action.icon,
	      label: action.label,
	      variant: action.variant,
	      source: action,
	      href: href || undefined,
	      // when href is not defined - handle click should also be not defined
	      // This prevents from "cursor: pointer;"
	      onClick: href ? handleClick : undefined,
	      'data-testid': buildActionTestId(action),
	      buttons: []
	    };
	  }); // nesting buttons

	  const buttonsMap = buttons.reduce((memo, button) => {
	    const action = button.source;

	    if (action.parent) {
	      const parent = memo[action.parent] || buttons.find(btn => btn.source.name === action.parent) || {
	        label: action.parent
	      };
	      parent.buttons = parent.buttons || [];
	      parent.buttons.push(button);
	      return { ...memo,
	        [action.parent]: parent
	      };
	    }

	    return { ...memo,
	      [button.source.name]: button
	    };
	  }, {});
	  return Object.values(buttonsMap);
	};

	const StyledLink$1 = styled__default['default'](({
	  rounded,
	  ...rest
	}) => /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Link, rest)).withConfig({
	  displayName: "styled-back-button__StyledLink",
	  componentId: "uyhg9d-0"
	})(["", ""], DesignSystem.ButtonCSS);
	const h$3 = new ViewHelpers();
	const StyledBackButton = props => {
	  const {
	    resourceId,
	    showInDrawer
	  } = props;
	  const cssCloseIcon = showInDrawer ? 'ChevronRight' : 'ChevronLeft';
	  return /*#__PURE__*/React__default['default'].createElement(StyledLink$1, {
	    size: "icon",
	    to: h$3.resourceUrl({
	      resourceId,
	      search: window.location.search
	    }),
	    rounded: true,
	    mr: "lg",
	    type: "button"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: cssCloseIcon
	  }));
	};

	/* eslint-disable jsx-a11y/anchor-is-valid */
	/**
	 * Header of an action. It renders Action name with buttons for all the actions.
	 *
	 * ### Usage
	 *
	 * ```
	 * import { ActionHeader } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 */

	const ActionHeader = props => {
	  const {
	    resource,
	    toggleFilter,
	    actionPerformed,
	    record,
	    action,
	    tag,
	    omitActions
	  } = props;
	  const {
	    translateButton
	  } = useTranslation();
	  const history = reactRouter.useHistory();
	  const actionResponseHandler = useActionResponseHandler(actionPerformed);

	  if (action.hideActionHeader) {
	    return null;
	  }

	  const resourceId = resource.id;
	  const params = {
	    resourceId,
	    recordId: record === null || record === void 0 ? void 0 : record.id
	  };

	  const handleActionClick = (event, sourceAction) => buildActionClickHandler({
	    action: sourceAction,
	    params,
	    actionResponseHandler,
	    push: history.push
	  })(event);

	  const actionButtons = actionsToButtonGroup({
	    actions: record ? record.recordActions.filter(ra => !action || action.name !== ra.name) // only new action should be seen in regular "Big" actions place
	    : resource.resourceActions.filter(ra => ra.name === 'new' && (!action || action.name !== ra.name)),
	    params,
	    handleClick: handleActionClick
	  });

	  if (toggleFilter) {
	    actionButtons.push({
	      label: translateButton('filter', resource.id),
	      onClick: toggleFilter,
	      icon: 'SettingsAdjust'
	    });
	  } // list and new actions are special and are are always


	  const customResourceButtons = actionsToButtonGroup({
	    actions: resource.resourceActions.filter(ra => !['list', 'new'].includes(ra.name)),
	    params: {
	      resourceId
	    },
	    handleClick: handleActionClick
	  });
	  const title = action ? action.label : resource.name;
	  const isList = action && action.name === 'list';
	  const listAction = resource.resourceActions.find(ra => ra.name === 'list'); // styled which differs if action header is in the drawer or not

	  const cssIsRootFlex = !action.showInDrawer;
	  const cssHeaderMT = action.showInDrawer ? '' : 'lg';
	  const cssActionsMB = action.showInDrawer ? 'xl' : 'default';
	  const CssHComponent = action.showInDrawer ? DesignSystem.H3 : DesignSystem.H2;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    className: DesignSystem.cssClass('ActionHeader')
	  }, action.showInDrawer ? '' : /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    flexDirection: "row",
	    px: ['default', 0]
	  }, /*#__PURE__*/React__default['default'].createElement(Breadcrumbs, {
	    resource: resource,
	    actionName: action.name,
	    record: record
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.ButtonGroup, {
	    size: "sm",
	    rounded: true,
	    buttons: customResourceButtons
	  }))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    display: ['block', cssIsRootFlex ? 'flex' : 'block']
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    mt: cssHeaderMT,
	    flexGrow: 1,
	    px: ['default', 0]
	  }, /*#__PURE__*/React__default['default'].createElement(CssHComponent, {
	    mb: "lg"
	  }, !isList && listAction ? /*#__PURE__*/React__default['default'].createElement(StyledBackButton, {
	    resourceId: resourceId,
	    showInDrawer: action.showInDrawer
	  }) : '', title, tag ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, {
	    variant: "primary",
	    ml: "default"
	  }, tag) : '')), omitActions ? '' : /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    mt: "xl",
	    mb: cssActionsMB,
	    flexShrink: 0
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.ButtonGroup, {
	    buttons: actionButtons
	  }))));
	};

	const LayoutElementRenderer = props => {
	  const {
	    layoutElement,
	    resource,
	    where,
	    record,
	    onChange
	  } = props;
	  const {
	    props: layoutProps,
	    properties: propertyNames,
	    layoutElements: innerLayoutElements,
	    component
	  } = layoutElement;
	  const {
	    children,
	    ...other
	  } = layoutProps;
	  const properties = propertyNames.map(name => resource.properties[name]);
	  const Component = DesignSystem__namespace[component];

	  if (!Component) {
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	      size: "sm",
	      message: "Javascript Error",
	      variant: "danger",
	      py: "xl"
	    }, "There is no component by the name of", /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, {
	      size: "sm",
	      variant: "danger",
	      mx: "default"
	    }, component), "in @admin-bro/design-system. Change", /*#__PURE__*/React__default['default'].createElement(DesignSystem.Badge, {
	      size: "sm",
	      variant: "danger",
	      mx: "default"
	    }, `@${component}`), "to available component like @Header");
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Component, other, properties.map(property => /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flexGrow: 1,
	    key: property.propertyPath
	  }, /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: where,
	    property: property,
	    resource: resource,
	    record: record,
	    onChange: onChange
	  }))), innerLayoutElements.map((innerLayoutElement, i) => /*#__PURE__*/React__default['default'].createElement(LayoutElementRenderer, _extends_1({}, props, {
	    // eslint-disable-next-line react/no-array-index-key
	    key: i,
	    layoutElement: innerLayoutElement
	  }))), children);
	};

	const New = props => {
	  const {
	    record: initialRecord,
	    resource,
	    action
	  } = props;
	  const {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading,
	    setRecord
	  } = useRecord(initialRecord, resource.id);
	  const {
	    translateButton
	  } = useTranslation();
	  const history = reactRouter.useHistory();
	  React.useEffect(() => {
	    if (initialRecord) {
	      setRecord(initialRecord);
	    }
	  }, [initialRecord]);

	  const submit = event => {
	    event.preventDefault();
	    handleSubmit().then(response => {
	      if (response.data.redirectUrl) {
	        history.push(appendForceRefresh(response.data.redirectUrl));
	      } // if record has id === has been created


	      if (response.data.record.id) {
	        handleChange({
	          params: {},
	          populated: {},
	          errors: {}
	        });
	      }
	    });
	    return false;
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    as: "form",
	    onSubmit: submit,
	    flex: true,
	    flexGrow: 1,
	    flexDirection: "column"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, null, (action === null || action === void 0 ? void 0 : action.showInDrawer) ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/React__default['default'].createElement(LayoutElementRenderer // eslint-disable-next-line react/no-array-index-key
	  , _extends_1({
	    key: i,
	    layoutElement: layoutElement
	  }, props, {
	    where: "edit",
	    onChange: handleChange,
	    record: record
	  }))) : resource.editProperties.map(property => /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "edit",
	    onChange: handleChange,
	    property: property,
	    resource: resource,
	    record: record
	  }))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerFooter, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg",
	    type: "submit",
	    "data-testid": "button-save"
	  }, loading ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Fade",
	    spin: true
	  }) : null, translateButton('save', resource.id))));
	};

	const Edit$9 = props => {
	  const {
	    record: initialRecord,
	    resource,
	    action
	  } = props;
	  const {
	    record,
	    handleChange,
	    submit: handleSubmit,
	    loading,
	    setRecord
	  } = useRecord(initialRecord, resource.id);
	  const {
	    translateButton
	  } = useTranslation();
	  const history = reactRouter.useHistory();
	  React.useEffect(() => {
	    if (initialRecord) {
	      setRecord(initialRecord);
	    }
	  }, [initialRecord]);

	  const submit = event => {
	    event.preventDefault();
	    handleSubmit().then(response => {
	      if (response.data.redirectUrl) {
	        history.push(appendForceRefresh(response.data.redirectUrl));
	      }
	    });
	    return false;
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    as: "form",
	    onSubmit: submit,
	    flex: true,
	    flexGrow: 1,
	    flexDirection: "column"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, null, (action === null || action === void 0 ? void 0 : action.showInDrawer) ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/React__default['default'].createElement(LayoutElementRenderer // eslint-disable-next-line react/no-array-index-key
	  , _extends_1({
	    key: i,
	    layoutElement: layoutElement
	  }, props, {
	    where: "edit",
	    onChange: handleChange,
	    record: record
	  }))) : resource.editProperties.map(property => /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "edit",
	    onChange: handleChange,
	    property: property,
	    resource: resource,
	    record: record
	  }))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerFooter, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg",
	    type: "submit",
	    "data-testid": "button-save"
	  }, loading ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Fade",
	    spin: true
	  }) : null, translateButton('save', resource.id))));
	};

	/**
	 * @name ShowAction
	 * @category Actions
	 * @description Shows a given record.
	 * @component
	 * @private
	 */

	const Show$8 = props => {
	  const {
	    resource,
	    record,
	    action
	  } = props;
	  const properties = resource.showProperties;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, null, (action === null || action === void 0 ? void 0 : action.showInDrawer) ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, props) : null, action.layout ? action.layout.map((layoutElement, i) => /*#__PURE__*/React__default['default'].createElement(LayoutElementRenderer // eslint-disable-next-line react/no-array-index-key
	  , _extends_1({
	    key: i,
	    layoutElement: layoutElement
	  }, props, {
	    where: "show"
	  }))) : properties.map(property => /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "show",
	    property: property,
	    resource: resource,
	    record: record
	  })));
	};

	const display = isTitle => [isTitle ? 'table-cell' : 'none', isTitle ? 'table-cell' : 'none', 'table-cell', 'table-cell'];

	const RecordInList = props => {
	  const {
	    resource,
	    record: recordFromProps,
	    actionPerformed,
	    isLoading,
	    onSelect,
	    isSelected
	  } = props;
	  const [record, setRecord] = React.useState(recordFromProps);
	  const history = reactRouterDom.useHistory();
	  const handleActionCallback = React.useCallback(actionResponse => {
	    if (actionResponse.record && !actionResponse.redirectUrl) {
	      setRecord(mergeRecordResponse(record, actionResponse));
	    } else if (actionPerformed) {
	      actionPerformed(actionResponse);
	    }
	  }, [actionPerformed, record]);
	  const actionResponseHandler = useActionResponseHandler(handleActionCallback);
	  React.useEffect(() => {
	    setRecord(recordFromProps);
	  }, [recordFromProps]);
	  const {
	    recordActions
	  } = record;
	  const show = record.recordActions.find(({
	    name
	  }) => name === 'show');
	  const edit = record.recordActions.find(({
	    name
	  }) => name === 'edit');
	  const action = show || edit;

	  const handleClick = event => {
	    const targetTagName = event.target.tagName.toLowerCase();

	    if (action && targetTagName !== 'a' && targetTagName !== 'button' && targetTagName !== 'svg') {
	      buildActionClickHandler({
	        action,
	        params: {
	          resourceId: resource.id,
	          recordId: record.id
	        },
	        actionResponseHandler,
	        push: history.push
	      })(event);
	    }
	  };

	  const actionParams = {
	    resourceId: resource.id,
	    recordId: record.id
	  };

	  const handleActionClick = (event, sourceAction) => buildActionClickHandler({
	    action: sourceAction,
	    params: actionParams,
	    actionResponseHandler,
	    push: history.push
	  })(event);

	  const buttons = [{
	    icon: 'OverflowMenuHorizontal',
	    variant: 'light',
	    label: undefined,
	    'data-testid': 'actions-dropdown',
	    buttons: actionsToButtonGroup({
	      actions: recordActions,
	      params: actionParams,
	      handleClick: handleActionClick
	    })
	  }];
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableRow, {
	    onClick: handleClick,
	    "data-id": record.id
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, {
	    className: isSelected ? 'selected' : 'not-selected'
	  }, onSelect && record.bulkActions.length ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.CheckBox, {
	    onChange: () => onSelect(record),
	    checked: isSelected
	  }) : null), resource.listProperties.map(property => /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, {
	    style: {
	      cursor: 'pointer'
	    },
	    key: property.propertyPath,
	    "data-property-name": property.propertyPath,
	    display: display(property.isTitle)
	  }, isLoading ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Placeholder, {
	    style: {
	      height: 14
	    }
	  }) : /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "list",
	    property: property,
	    resource: resource,
	    record: record
	  }))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, {
	    key: "options"
	  }, recordActions.length ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.ButtonGroup, {
	    buttons: buttons
	  }) : ''));
	};

	class SortLink extends React__default['default'].PureComponent {
	  constructor(props) {
	    super(props);
	    this.isActive = this.isActive.bind(this);
	  }

	  isActive() {
	    const {
	      sortBy,
	      property
	    } = this.props;
	    return sortBy === property.propertyPath;
	  }

	  render() {
	    const {
	      property,
	      location,
	      direction
	    } = this.props;
	    const query = new URLSearchParams(location.search);
	    const oppositeDirection = this.isActive() && direction === 'asc' ? 'desc' : 'asc';
	    const sortedByIcon = `Caret${direction === 'asc' ? 'Up' : 'Down'}`;
	    query.set('direction', oppositeDirection);
	    query.set('sortBy', property.propertyPath);
	    return /*#__PURE__*/React__default['default'].createElement(reactRouterDom.NavLink, {
	      to: {
	        search: query.toString()
	      },
	      className: DesignSystem.cssClass('SortLink')
	    }, property.label, this.isActive() ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	      icon: sortedByIcon,
	      color: "primary100",
	      ml: "default"
	    }) : '');
	  }

	}

	var SortLink$1 = reactRouterDom.withRouter(SortLink);

	const PropertyHeader = props => {
	  const {
	    property,
	    titleProperty,
	    display
	  } = props;
	  const isMain = property.propertyPath === titleProperty.propertyPath;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, {
	    className: isMain ? 'main' : undefined,
	    display: display
	  }, property.isSortable ? /*#__PURE__*/React__default['default'].createElement(SortLink$1, props) : property.label);
	};

	/**
	 * @memberof RecordsTableHeader
	 * @alias RecordsTableHeaderProps
	 */

	/**
	 * Prints `thead` section for table with records.
	 *
	 * ```
	 * import { RecordsTableHeader } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 * @example <caption>List with 2 properties</caption>
	 * const properties = [{
	 *   label: 'First Name',
	 *   name: 'firstName',
	 *   isSortable: true,
	 * }, {
	 *   label: 'Last Name',
	 *   name: 'lastName',
	 * }]
	 * return (
	 * <Box py="xl">
	 *   <Table>
	 *    <RecordsTableHeader
	 *      properties={properties}
	 *      titleProperty={properties[0]}
	 *      sortBy={'firstName'}
	 *      direction={'asc'}
	 *    />
	 *    <TableBody>
	 *      <TableRow>
	 *        <TableCell>John</TableCell>
	 *        <TableCell>Doe</TableCell>
	 *        <TableCell></TableCell>
	 *      </TableRow>
	 *      <TableRow>
	 *        <TableCell>Max</TableCell>
	 *        <TableCell>Kodaly</TableCell>
	 *        <TableCell></TableCell>
	 *      </TableRow>
	 *    </TableBody>
	 *   </Table>
	 * </Box>
	 * )
	 */
	const RecordsTableHeader = props => {
	  const {
	    titleProperty,
	    properties,
	    sortBy,
	    direction,
	    onSelectAll,
	    selectedAll
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableHead, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableRow, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, null, onSelectAll ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.CheckBox, {
	    style: {
	      marginLeft: 5
	    },
	    onChange: () => onSelectAll(),
	    checked: selectedAll
	  }) : null), properties.map(property => /*#__PURE__*/React__default['default'].createElement(PropertyHeader, {
	    display: display(property.isTitle),
	    key: property.propertyPath,
	    titleProperty: titleProperty,
	    property: property,
	    sortBy: sortBy,
	    direction: direction
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, {
	    key: "actions",
	    style: {
	      width: 80
	    }
	  })));
	};

	/* eslint-disable no-undef */
	/**
	 * @alias ActionButtonProps
	 * @memberof ActionButton
	 */

	/**
	 * Renders Button which redirects to given action
	 *
	 * ### Usage
	 *
	 * ```
	 * import { ActionButton } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 */
	const ActionButton = props => {
	  const {
	    children,
	    action,
	    actionPerformed,
	    resourceId,
	    recordId,
	    recordIds
	  } = props;
	  const {
	    href,
	    handleClick
	  } = useAction(action, {
	    resourceId,
	    recordId,
	    recordIds
	  }, actionPerformed);

	  if (!action) {
	    return null;
	  }

	  const firstChild = React__default['default'].Children.toArray(children)[0];

	  if (!firstChild || typeof firstChild === 'string' || typeof firstChild === 'number' || typeof firstChild === 'boolean') {
	    throw new Error('ActionButton has to have one child');
	  }

	  const WrappedElement = /*#__PURE__*/React__default['default'].cloneElement(firstChild, {
	    onClick: handleClick,
	    'data-testid': buildActionTestId(action),
	    href
	  });
	  return WrappedElement;
	}; // TODO - remove this hack

	const NoRecordsOriginal = props => {
	  const {
	    resource
	  } = props;
	  const {
	    translateButton,
	    translateMessage
	  } = useTranslation();
	  const canCreate = resource.resourceActions.find(a => a.name === 'new');
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.InfoBox, {
	    title: translateMessage('noRecords', resource.id)
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    mb: "xxl"
	  }, translateMessage('noRecordsInResource', resource.id)), canCreate ? /*#__PURE__*/React__default['default'].createElement(ActionButton, {
	    action: canCreate,
	    resourceId: resource.id
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "primary"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Add"
	  }), translateButton('createFirstRecord', resource.id))) : '');
	}; // This hack prevents rollup from throwing an error


	const NoRecords = allowOverride(NoRecordsOriginal, 'NoRecords');

	const getBulkActionsFromRecords = records => {
	  const actions = Object.values(records.reduce((memo, record) => ({ ...memo,
	    ...record.bulkActions.reduce((actionsMemo, action) => ({ ...actionsMemo,
	      [action.name]: action
	    }), {})
	  }), {}));
	  return actions;
	};

	const SelectedRecords = props => {
	  const {
	    resource,
	    selectedRecords
	  } = props;
	  const {
	    translateLabel
	  } = useTranslation();
	  const history = reactRouter.useHistory();
	  const actionResponseHandler = useActionResponseHandler();

	  if (!selectedRecords || !selectedRecords.length) {
	    return null;
	  }

	  const params = {
	    resourceId: resource.id,
	    recordIds: selectedRecords.map(records => records.id)
	  };

	  const handleActionClick = (event, sourceAction) => buildActionClickHandler({
	    action: sourceAction,
	    params,
	    actionResponseHandler,
	    push: history.push
	  })(event);

	  const bulkButtons = actionsToButtonGroup({
	    actions: getBulkActionsFromRecords(selectedRecords),
	    params,
	    handleClick: handleActionClick
	  });
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCaption, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    py: "sm",
	    alignItems: "center"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Title, {
	    mr: "lg"
	  }, translateLabel('selectedRecords', resource.id, {
	    selected: selectedRecords.length
	  })), /*#__PURE__*/React__default['default'].createElement(DesignSystem.ButtonGroup, {
	    size: "sm",
	    rounded: true,
	    buttons: bulkButtons
	  })));
	};

	/**
	 * @classdesc
	 * Renders an entire records table. To fill the data you might need:
	 *
	 * - {@link useRecords} and
	 * - {@link useSelectedRecords} hooks
	 *
	 * so make sure to see at the documentation pages for both of them
	 *
	 * @component
	 * @class
	 * @hideconstructor
	 * @subcategory Application
	 * @new in version 3.3
	 */
	const RecordsTable = props => {
	  const {
	    resource,
	    records,
	    actionPerformed,
	    sortBy,
	    direction,
	    isLoading,
	    onSelect,
	    selectedRecords,
	    onSelectAll
	  } = props;

	  if (!records.length) {
	    if (isLoading) {
	      return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null);
	    }

	    return /*#__PURE__*/React__default['default'].createElement(NoRecords, {
	      resource: resource
	    });
	  }

	  const selectedAll = selectedRecords && !!records.find(record => selectedRecords.find(selected => selected.id === record.id));
	  const recordsHaveBulkAction = !!records.find(record => record.bulkActions.length);
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Table, null, /*#__PURE__*/React__default['default'].createElement(SelectedRecords, {
	    resource: resource,
	    selectedRecords: selectedRecords
	  }), /*#__PURE__*/React__default['default'].createElement(RecordsTableHeader, {
	    properties: resource.listProperties,
	    titleProperty: resource.titleProperty,
	    direction: direction,
	    sortBy: sortBy,
	    onSelectAll: recordsHaveBulkAction ? onSelectAll : undefined,
	    selectedAll: selectedAll
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableBody, null, records.map(record => /*#__PURE__*/React__default['default'].createElement(RecordInList, {
	    record: record,
	    resource: resource,
	    key: record.id,
	    actionPerformed: actionPerformed,
	    isLoading: isLoading,
	    onSelect: onSelect,
	    isSelected: selectedRecords && !!selectedRecords.find(selected => selected.id === record.id)
	  }))));
	};

	const List$7 = ({
	  resource,
	  setTag
	}) => {
	  const {
	    records,
	    loading,
	    direction,
	    sortBy,
	    page,
	    total,
	    fetchData,
	    perPage
	  } = useRecords(resource.id);
	  const {
	    selectedRecords,
	    handleSelect,
	    handleSelectAll,
	    setSelectedRecords
	  } = useSelectedRecords(records);
	  const location = reactRouter.useLocation();
	  const history = reactRouter.useHistory();
	  React.useEffect(() => {
	    if (setTag) {
	      setTag(total.toString());
	    }
	  }, [total]);
	  React.useEffect(() => {
	    setSelectedRecords([]);
	  }, [resource.id]);
	  React.useEffect(() => {
	    const search = new URLSearchParams(location.search);

	    if (search.get(REFRESH_KEY)) {
	      setSelectedRecords([]);
	    }
	  }, [location.search]);

	  const handleActionPerformed = () => fetchData();

	  const handlePaginationChange = pageNumber => {
	    const search = new URLSearchParams(location.search);
	    search.set('page', pageNumber.toString());
	    history.push({
	      search: search.toString()
	    });
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    variant: "white"
	  }, /*#__PURE__*/React__default['default'].createElement(RecordsTable, {
	    resource: resource,
	    records: records,
	    actionPerformed: handleActionPerformed,
	    onSelect: handleSelect,
	    onSelectAll: handleSelectAll,
	    selectedRecords: selectedRecords,
	    direction: direction,
	    sortBy: sortBy,
	    isLoading: loading
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, {
	    mt: "xl",
	    textAlign: "center"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Pagination, {
	    page: page,
	    perPage: perPage,
	    total: total,
	    onChange: handlePaginationChange
	  })));
	};

	/* eslint-disable @typescript-eslint/explicit-function-return-type */
	/**
	 * NoticeMessage which can be presented as a "Toast" message.
	 * @alias NoticeMessage
	 * @memberof withNotice
	 */

	const mapDispatchToProps$1 = dispatch => ({
	  addNotice: notice => dispatch(addNotice(notice))
	});
	/**
	 * Higher Order Component which allows you to post notice messages from your components
	 *
	 * It gives you the additional prop: `addNotice(noticeMessage)` taking {@link NoticeMessage}.
	 *
	 * ```javascript
	 * import { withNotice } from 'admin-bro/core'
	 *
	 * const MY_MESSAGE = {
	 *   message: 'I am toast message',
	 *   type: 'success',
	 * }
	 * const MyCustomComponent = ({ addNotice }) => {
	 *   return (
	 *     <a onClick={() => addNotice(MY_MESSAGE)}>Click Me</a>
	 *   )
	 * }
	 * export default withNotice(MyCustomComponent)
	 * ```
	 *
	 * @component
	 * @subcategory HOC
	 */


	const withNotice = Component => reactRedux.connect(null, mapDispatchToProps$1)(Component);

	/**
	 * @name ShowAction
	 * @category Actions
	 * @description Shows a given record.
	 * @component
	 * @private
	 */

	const BulkDelete = props => {
	  const {
	    resource,
	    records,
	    action,
	    addNotice,
	    history
	  } = props;
	  const [loading, setLoading] = React.useState(false);
	  const {
	    translateMessage,
	    translateButton
	  } = useTranslation();

	  if (!records) {
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('pickSomeFirstToRemove', resource.id));
	  }

	  const handleClick = () => {
	    const api = new ApiClient();
	    setLoading(true);
	    const recordIds = records.map(r => r.id);
	    api.bulkAction({
	      resourceId: resource.id,
	      actionName: action.name,
	      recordIds,
	      method: 'post'
	    }).then(response => {
	      setLoading(false);

	      if (response.data.notice) {
	        addNotice(response.data.notice);
	      }

	      if (response.data.redirectUrl) {
	        const search = new URLSearchParams(window.location.search); // bulk function have recordIds in the URL so it has to be stripped before redirect

	        search.delete('recordIds');
	        history.push(appendForceRefresh(response.data.redirectUrl, search.toString()));
	      }
	    }).catch(error => {
	      setLoading(false);
	      addNotice({
	        message: translateMessage('bulkDeleteError', resource.id),
	        type: 'error'
	      });
	      throw error;
	    });
	  };

	  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, null, (action === null || action === void 0 ? void 0 : action.showInDrawer) ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, _extends_1({
	    omitActions: true
	  }, props)) : null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    mb: "xxl",
	    variant: "danger",
	    message: translateMessage('theseRecordsWillBeRemoved', resource.id, {
	      count: records.length
	    })
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Table, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableBody, null, records.map(record => /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableRow, {
	    key: record.id
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.TableCell, null, /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    where: "list",
	    property: resource.titleProperty,
	    resource: resource,
	    record: record
	  }))))))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerFooter, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg",
	    onClick: handleClick
	  }, loading ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "Fade",
	    spin: true
	  }) : null, translateButton('confirmRemovalMany', resource.id, {
	    count: records.length
	  }))));
	};

	const FormattedBulkDelete = withNotice(reactRouter.withRouter(BulkDelete));

	const actions = {
	  new: New,
	  edit: Edit$9,
	  show: Show$8,
	  list: List$7,
	  bulkDelete: FormattedBulkDelete
	};

	const DOCS = 'https://adminbro.com';
	const DEFAULT_PATHS = {
	  rootPath: '/admin',
	  logoutPath: '/admin/logout',
	  loginPath: '/admin/login',
	};

	/**
	 * Component which renders all the default and custom actions for both the Resource and the Record.
	 *
	 * It passes all props down to the actual Action component.
	 *
	 * Example of creating your own actions:
	 * ```
	 * // AdminBro options
	 * const AdminBroOptions = {
	 *   resources: [
	 *      resource,
	 *      options: {
	 *        actions: {
	 *           myNewAction: {
	 *             label: 'amazing action',
	 *             icon: 'Add',
	 *             inVisible: (resource, record) => record.param('email') !== '',
	 *             actionType: 'record',
	 *             component: AdminBro.bundle('./my-new-action'),
	 *             handler: (request, response, data) => {
	 *               return {
	 *                  ...
	 *               }
	 *             }
	 *           }
	 *        }
	 *      }
	 *   ]
	 * }
	 * ```
	 *
	 * ```
	 * // ./my-new-action.jsx
	 * import { Box } from 'admin-bro'
	 *
	 * const MyNewAction = (props) => {
	 *   const { resource, action, record } = props
	 *   // do something with the props and render action
	 *   return (
	 *     <Box>Some Action Content</Box>
	 *   )
	 * }
	 * ```
	 *
	 * @component
	 * @name BaseActionComponent
	 * @subcategory Application
	 */
	const BaseActionComponent = props => {
	  const {
	    resource,
	    action,
	    record,
	    records,
	    setTag,
	    data
	  } = props;
	  const documentationLink = [DOCS, 'BaseAction.html'].join('/');
	  const {
	    translateMessage
	  } = useTranslation();
	  let Action = actions[action.name];

	  if (action.component) {
	    Action = AdminBro.UserComponents[action.component];
	  }

	  if (Action) {
	    return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(Action, {
	      action: action,
	      resource: resource,
	      record: record,
	      records: records,
	      setTag: setTag,
	      data: data
	    }));
	  }

	  return Action || /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    variant: "danger"
	  }, translateMessage('noActionComponent'), /*#__PURE__*/React__default['default'].createElement(reactI18next.Trans, {
	    key: "messages.buttons.seeTheDocumentation"
	  }, "See:", /*#__PURE__*/React__default['default'].createElement(DesignSystem.Link, {
	    ml: "default",
	    href: documentationLink
	  }, "the documentation")));
	};

	/**
	 * @memberof ErrorMessageBox
	 * @alias ErrorMessageBoxProps
	 */

	/**
	 * @class
	 * Prints error message
	 *
	 * @component
	 * @private
	 * @example
	 * return (
	 * <ErrorMessageBox title={'Some error'}>
	 *   <p>Text below the title</p>
	 * </ErrorMessageBox>
	 * )
	 */
	const ErrorMessageBox = props => {
	  const {
	    children,
	    title,
	    testId
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    "data-testid": testId,
	    message: title
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, children));
	};

	const NoResourceError = props => {
	  const {
	    resourceId
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoResourceError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('error404Resource', resourceId, {
	    resourceId
	  })));
	};

	const NoActionError = props => {
	  const {
	    resourceId,
	    actionName
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoActionError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('error404Action', resourceId, {
	    resourceId,
	    actionName
	  })));
	};

	const NoRecordError = props => {
	  const {
	    resourceId,
	    recordId
	  } = props;
	  const {
	    translateMessage
	  } = useTranslation();
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.MessageBox, {
	    message: "404 - PAGE NOT FOUND",
	    "data-testid": "NoRecordError",
	    variant: "info",
	    m: "xxl"
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Text, null, translateMessage('error404Record', resourceId, {
	    resourceId,
	    recordId
	  })));
	};

	const StyledWrapper = styled__default['default'](DesignSystem.Box).withConfig({
	  displayName: "wrapper__StyledWrapper",
	  componentId: "gd2y70-0"
	})(["& ", "{background:", ";padding:", ";overflow:visible;}& ", "{background:", ";padding:0 ", " ", ";}"], DesignSystem.DrawerContent, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.space.xxl, DesignSystem.DrawerFooter, ({
	  theme
	}) => theme.colors.white, ({
	  theme
	}) => theme.space.xxl, ({
	  theme
	}) => theme.space.xxl);

	const Wrapper = props => {
	  // eslint-disable-next-line @typescript-eslint/no-unused-vars
	  const {
	    children,
	    variant,
	    color,
	    ...rest
	  } = props;
	  return /*#__PURE__*/React__default['default'].createElement(StyledWrapper, _extends_1({}, rest, {
	    variant: "grey",
	    mx: "auto"
	  }), children);
	};

	/**
	 * @alias DrawerPortalProps
	 * @memberof DrawerPortal
	 */

	const DRAWER_PORTAL_ID = 'drawerPortal';
	/**
	 * Shows all of its children in a Drawer on the right.
	 * Instead of rendering it's own {@link Drawer} component it reuses
	 * the global Drawer via React Portal.
	 *
	 * ### Usage
	 *
	 * ```
	 * import { DrawerPortal } from 'admin-bro'
	 * ```
	 *
	 * @component
	 * @subcategory Application
	 */

	const DrawerPortal = ({
	  children,
	  width
	}) => {
	  const [drawerElement, setDrawerElement] = React.useState(window.document.getElementById(DRAWER_PORTAL_ID));

	  if (!drawerElement && window) {
	    const innerWrapper = window.document.createElement('div');
	    const DrawerWrapper = /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
	      theme: window.THEME
	    }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Drawer, {
	      id: DRAWER_PORTAL_ID,
	      className: "hidden"
	    }));
	    window.document.body.appendChild(innerWrapper);
	    reactDom.render(DrawerWrapper, innerWrapper, () => {
	      setDrawerElement(window.document.getElementById(DRAWER_PORTAL_ID));
	    });
	  }

	  React.useEffect(() => {
	    if (drawerElement) {
	      drawerElement.classList.remove('hidden');

	      if (width) {
	        drawerElement.style.width = Array.isArray(width) ? width[0].toString() : width.toString();
	      }

	      return () => {
	        drawerElement.style.width = DesignSystem.DEFAULT_DRAWER_WIDTH;
	        drawerElement.classList.add('hidden');
	      };
	    }

	    return () => undefined;
	  }, [drawerElement]);

	  if (!drawerElement) {
	    return null;
	  }

	  return /*#__PURE__*/reactDom.createPortal(children, drawerElement);
	};

	const parseQuery = location => {
	  const filter = {};
	  const query = new URLSearchParams(location.search);

	  for (const entry of query.entries()) {
	    const [key, value] = entry;

	    if (key.match('filters.')) {
	      filter[key.replace('filters.', '')] = value;
	    }
	  }

	  return filter;
	};

	const FilterDrawer = props => {
	  const {
	    resource,
	    isVisible,
	    toggleFilter
	  } = props;
	  const properties = resource.filterProperties;
	  const location = reactRouterDom.useLocation();
	  const [filter, setFilter] = React.useState(parseQuery(location));
	  const match = reactRouterDom.useRouteMatch();
	  const history = reactRouterDom.useHistory();
	  const {
	    translateLabel,
	    translateButton
	  } = useTranslation();
	  React.useEffect(() => setFilter({}), [match.params.resourceId]);

	  const handleSubmit = event => {
	    event.preventDefault();
	    const search = new URLSearchParams(window.location.search);
	    Object.keys(filter).forEach(key => {
	      if (filter[key] !== '') {
	        search.set(`filters.${key}`, filter[key]);
	      } else {
	        search.delete(`filters.${key}`);
	      }
	    });
	    search.set('page', '1');
	    history.push(`${history.location.pathname}?${search.toString()}`);
	    return false;
	  };

	  const resetFilter = event => {
	    event.preventDefault();
	    const filteredSearch = new URLSearchParams();
	    const search = new URLSearchParams(window.location.search);

	    for (const key of search.keys()) {
	      if (!key.match('filters.')) {
	        filteredSearch.set(key, search.get(key));
	      }
	    }

	    const query = filteredSearch.toString() === '' ? `?${filteredSearch.toString()}` : '';
	    history.push(history.location.pathname + query);
	    setFilter({});
	  };

	  const handleChange = (propertyName, value) => {
	    if (propertyName.params) {
	      throw new Error('you can not pass RecordJSON to filters');
	    }

	    setFilter({ ...filter,
	      [propertyName]: value
	    });
	  };

	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Drawer, {
	    variant: "filter",
	    isHidden: !isVisible,
	    as: "form",
	    onSubmit: handleSubmit
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerContent, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.H3, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    type: "button",
	    size: "icon",
	    rounded: true,
	    mr: "lg",
	    onClick: () => toggleFilter()
	  }, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Icon, {
	    icon: "ChevronRight",
	    color: "white"
	  })), translateLabel('filters', resource.id)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    my: "x3"
	  }, properties.map(property => /*#__PURE__*/React__default['default'].createElement(BasePropertyComponentExtended, {
	    key: property.propertyPath,
	    where: "filter",
	    onChange: handleChange,
	    property: property,
	    filter: filter,
	    resource: resource
	  })))), /*#__PURE__*/React__default['default'].createElement(DesignSystem.DrawerFooter, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "primary",
	    size: "lg"
	  }, translateButton('applyChanges', resource.id)), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Button, {
	    variant: "text",
	    size: "lg",
	    onClick: resetFilter,
	    type: "button",
	    color: "white"
	  }, translateButton('resetFilter', resource.id))));
	};

	var AppComponents = /*#__PURE__*/Object.freeze({
		__proto__: null,
		SortLink: SortLink$1,
		NoRecords: NoRecords,
		PropertyHeader: PropertyHeader,
		RecordInList: RecordInList,
		RecordsTableHeader: RecordsTableHeader,
		RecordsTable: RecordsTable,
		SelectedRecords: SelectedRecords,
		SidebarResourceSection: SidebarResourceSection,
		Sidebar: Sidebar,
		ActionButton: ActionButton,
		ActionHeader: ActionHeader,
		BaseActionComponent: BaseActionComponent,
		BreadcrumbLink: BreadcrumbLink,
		Breadcrumbs: Breadcrumbs,
		DashboardHeader: DashboardHeader,
		Dashboard: Dashboard,
		ErrorBoundary: ErrorBoundary,
		DrawerPortal: DrawerPortal,
		NoResourceError: NoResourceError,
		NoActionError: NoActionError,
		NoRecordError: NoRecordError,
		ErrorMessageBox: ErrorMessageBox,
		FilterDrawer: FilterDrawer,
		LoggedIn: OverridableLoggedIn,
		NoticeElement: NoticeElement,
		NoticeBox: ConnectedNoticeBox,
		TopBar: TopBar,
		Version: Version
	});

	const api$3 = new ApiClient();

	const RecordAction = () => {
	  const [record, setRecord] = React.useState();
	  const [data, setData] = React.useState();
	  const [loading, setLoading] = React.useState(true);
	  const match = reactRouter.useRouteMatch();
	  const addNotice = useNotice();
	  const {
	    translateMessage
	  } = useTranslation();
	  const {
	    actionName,
	    recordId,
	    resourceId
	  } = match.params;
	  const resource = useResource(resourceId);
	  const action = record && record.recordActions.find(r => r.name === actionName);

	  const fetchRecord = () => {
	    setLoading(true);
	    api$3.recordAction(match.params).then(response => {
	      setLoading(false);
	      setRecord(response.data.record);
	      setData(response.data);
	    }).catch(error => {
	      addNotice({
	        message: translateMessage('errorFetchingRecord', resourceId),
	        type: 'error'
	      });
	      throw error;
	    });
	  };

	  React.useEffect(() => {
	    fetchRecord();
	  }, [actionName, recordId, resourceId]);
	  const handleActionPerformed = React.useCallback((oldRecord, response) => {
	    if (response.record) {
	      setRecord(mergeRecordResponse(oldRecord, response));
	    } else {
	      fetchRecord();
	    }
	  }, [fetchRecord]);

	  if (!resource) {
	    return /*#__PURE__*/React__default['default'].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  } // When the user visits this route (record action) from a different, than the current one, record.
	  // It renders everything with a new resource. The old record remains until useEffect fetches data
	  // from the API. that is why we have to check if the current record has correct record.id.
	  // Alternative approach would be to setRecord(undefined) before the fetch, but it is async and
	  // we cannot be sure that the component wont be rendered (it will be at least once) with the
	  // wrong data.


	  const hasDifferentRecord = record && record.id.toString() !== recordId;

	  if (loading || hasDifferentRecord) {
	    const actionFromResource = resource.actions.find(r => r.name === actionName);
	    return (actionFromResource === null || actionFromResource === void 0 ? void 0 : actionFromResource.showInDrawer) ? /*#__PURE__*/React__default['default'].createElement(DrawerPortal, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null)) : /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null);
	  }

	  if (!action) {
	    return /*#__PURE__*/React__default['default'].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  if (!record) {
	    return /*#__PURE__*/React__default['default'].createElement(NoRecordError, {
	      resourceId: resourceId,
	      recordId: recordId
	    });
	  }

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default['default'].createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	      action: action,
	      resource: resource,
	      record: record
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Wrapper, {
	    width: action.containerWidth
	  }, /*#__PURE__*/React__default['default'].createElement(ActionHeader, {
	    resource: resource,
	    action: action,
	    record: record,
	    actionPerformed: response => handleActionPerformed(record, response)
	  }), /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	    action: action,
	    resource: resource,
	    record: record,
	    data: data
	  }));
	};

	const ResourceAction = props => {
	  const {
	    resources,
	    match
	  } = props;
	  const {
	    resourceId,
	    actionName
	  } = match.params;
	  const resource = resources.find(r => r.id === resourceId);

	  if (!resource) {
	    return /*#__PURE__*/React__default['default'].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  const action = resource.resourceActions.find(r => r.name === actionName);

	  if (!action) {
	    return /*#__PURE__*/React__default['default'].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default['default'].createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	      action: action,
	      resource: resource
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Wrapper, {
	    width: action.containerWidth
	  }, /*#__PURE__*/React__default['default'].createElement(ActionHeader, {
	    resource: resource,
	    action: action
	  }), /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	    action: action,
	    resource: resource
	  }));
	};

	const mapStateToProps$2 = state => ({
	  resources: state.resources
	});

	var ResourceAction$1 = reactRedux.connect(mapStateToProps$2)(ResourceAction);

	const api$4 = new ApiClient();

	const BulkAction = () => {
	  const match = reactRouter.useRouteMatch();
	  const [records, setRecords] = React.useState([]);
	  const [loading, setLoading] = React.useState(false);
	  const {
	    translateMessage
	  } = useTranslation();
	  const addNotice = useNotice();
	  const location = reactRouter.useLocation();
	  const {
	    resourceId,
	    actionName
	  } = match.params;
	  const resource = useResource(resourceId);

	  const fetchRecords = () => {
	    const recordIdsString = new URLSearchParams(location.search).get('recordIds');
	    const recordIds = recordIdsString ? recordIdsString.split(',') : [];
	    setLoading(true);
	    return api$4.bulkAction({
	      resourceId,
	      recordIds,
	      actionName
	    }).then(response => {
	      setLoading(false);
	      setRecords(response.data.records);
	    }).catch(error => {
	      setLoading(false);
	      addNotice({
	        message: translateMessage('errorFetchingRecords', resourceId),
	        type: 'error'
	      });
	      throw error;
	    });
	  };

	  React.useEffect(() => {
	    fetchRecords();
	  }, [match.params.resourceId, match.params.actionName]);

	  if (!resource) {
	    return /*#__PURE__*/React__default['default'].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  if (!records && !loading) {
	    return /*#__PURE__*/React__default['default'].createElement(ErrorMessageBox, {
	      title: "No records"
	    }, /*#__PURE__*/React__default['default'].createElement("p", null, translateMessage('noRecordsSelected', resourceId)));
	  }

	  const action = getBulkActionsFromRecords(records || []).find(r => r.name === actionName);

	  if (loading) {
	    const actionFromResource = resource.actions.find(r => r.name === actionName);
	    return (actionFromResource === null || actionFromResource === void 0 ? void 0 : actionFromResource.showInDrawer) ? /*#__PURE__*/React__default['default'].createElement(DrawerPortal, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null)) : /*#__PURE__*/React__default['default'].createElement(DesignSystem.Loader, null);
	  }

	  if (!action) {
	    return /*#__PURE__*/React__default['default'].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: actionName
	    });
	  }

	  if (action.showInDrawer) {
	    return /*#__PURE__*/React__default['default'].createElement(DrawerPortal, {
	      width: action.containerWidth
	    }, /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	      action: action,
	      resource: resource,
	      records: records
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Wrapper, {
	    width: action.containerWidth
	  }, !(action === null || action === void 0 ? void 0 : action.showInDrawer) ? /*#__PURE__*/React__default['default'].createElement(ActionHeader, {
	    resource: resource,
	    action: action
	  }) : '', /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	    action: action,
	    resource: resource,
	    records: records
	  }));
	};

	class Page extends React__default['default'].Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	      isClient: false
	    };
	  }

	  componentDidMount() {
	    this.setState({
	      isClient: true
	    });
	  }

	  render() {
	    const {
	      pages,
	      match
	    } = this.props;
	    const {
	      params
	    } = match;
	    const {
	      pageName
	    } = params;
	    const {
	      isClient
	    } = this.state;
	    const currentPage = pages.find(page => page.name === pageName);

	    if (!currentPage) {
	      return /*#__PURE__*/React__default['default'].createElement(ErrorMessageBox, {
	        title: "There is no page of given name"
	      }, /*#__PURE__*/React__default['default'].createElement("p", null, "Page:", /*#__PURE__*/React__default['default'].createElement("b", null, ` "${pageName}" `), "does not exist."));
	    }

	    const Component = AdminBro.UserComponents[currentPage.component];

	    if (!Component || !isClient) {
	      return /*#__PURE__*/React__default['default'].createElement(ErrorMessageBox, {
	        title: "No component specified"
	      }, /*#__PURE__*/React__default['default'].createElement("p", null, "You have to specify component which will render this Page"));
	    }

	    return /*#__PURE__*/React__default['default'].createElement(ErrorBoundary, null, /*#__PURE__*/React__default['default'].createElement(Component, null));
	  }

	}

	const mapStateToProps$3 = state => ({
	  pages: state.pages
	});

	var Page$1 = reactRedux.connect(mapStateToProps$3)(Page);

	var queryHasFilter = (queryString => {
	  const query = new URLSearchParams(queryString);

	  for (const key of query.keys()) {
	    if (key.match('filters.')) {
	      return true;
	    }
	  }

	  return false;
	});

	const getAction = resource => {
	  const h = new ViewHelpers();
	  const resourceId = ':resourceId';
	  const actionName = ':actionName';
	  const recordId = ':recordId';
	  const recordActionUrl = h.recordActionUrl({
	    resourceId,
	    recordId,
	    actionName
	  });
	  const resourceActionUrl = h.resourceActionUrl({
	    resourceId,
	    actionName
	  });
	  const bulkActionUrl = h.bulkActionUrl({
	    resourceId,
	    actionName
	  });
	  const resourceActionMatch = reactRouterDom.useRouteMatch(resourceActionUrl);
	  const recordActionMatch = reactRouterDom.useRouteMatch(recordActionUrl);
	  const bulkActionMatch = reactRouterDom.useRouteMatch(bulkActionUrl);
	  const action = (resourceActionMatch === null || resourceActionMatch === void 0 ? void 0 : resourceActionMatch.params.actionName) || (recordActionMatch === null || recordActionMatch === void 0 ? void 0 : recordActionMatch.params.actionName) || (bulkActionMatch === null || bulkActionMatch === void 0 ? void 0 : bulkActionMatch.params.actionName);
	  return action ? resource.actions.find(a => a.name === action) : undefined;
	};

	const ResourceAction$2 = props => {
	  const {
	    resources,
	    match,
	    location
	  } = props;
	  const {
	    resourceId
	  } = match.params;
	  const [filterVisible, setFilerVisible] = React.useState(queryHasFilter(location.search));
	  const [tag, setTag] = React.useState('');
	  const resource = resources.find(r => r.id === resourceId);

	  if (!resource) {
	    return /*#__PURE__*/React__default['default'].createElement(NoResourceError, {
	      resourceId: resourceId
	    });
	  }

	  const realEndAction = getAction(resource);

	  if (realEndAction && !realEndAction.showInDrawer) {
	    return null;
	  }

	  const listActionName = 'list';
	  const listAction = resource.resourceActions.find(r => r.name === listActionName);

	  if (!listAction) {
	    return /*#__PURE__*/React__default['default'].createElement(NoActionError, {
	      resourceId: resourceId,
	      actionName: listActionName
	    });
	  }

	  const toggleFilter = listAction.showFilter ? () => setFilerVisible(!filterVisible) : undefined;
	  return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    variant: "grey",
	    width: listAction.containerWidth,
	    mx: "auto"
	  }, /*#__PURE__*/React__default['default'].createElement(ActionHeader, {
	    resource: resource,
	    action: listAction,
	    tag: tag,
	    toggleFilter: toggleFilter
	  }), /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	    action: listAction,
	    resource: resource,
	    setTag: setTag
	  }), listAction.showFilter ? /*#__PURE__*/React__default['default'].createElement(FilterDrawer, {
	    resource: resource,
	    isVisible: filterVisible,
	    toggleFilter: () => {
	      setFilerVisible(!filterVisible);
	    }
	  }) : '');
	};

	const mapStateToProps$4 = state => ({
	  resources: state.resources
	});

	var Resource = reactRedux.connect(mapStateToProps$4)(ResourceAction$2);

	/* eslint-disable react/no-children-prop */
	const GlobalStyle = styled.createGlobalStyle`
  html, body, #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    color: ${({
  theme
}) => theme.colors.grey100}
  }
`;
	const h$4 = new ViewHelpers();

	const App = () => {
	  const [sidebarVisible, toggleSidebar] = React.useState(false);
	  const location = reactRouter.useLocation();
	  React.useEffect(() => {
	    if (sidebarVisible) {
	      toggleSidebar(false);
	    }
	  }, [location]);
	  const resourceId = ':resourceId';
	  const actionName = ':actionName';
	  const recordId = ':recordId';
	  const pageName = ':pageName';
	  const recordActionUrl = h$4.recordActionUrl({
	    resourceId,
	    recordId,
	    actionName
	  });
	  const resourceActionUrl = h$4.resourceActionUrl({
	    resourceId,
	    actionName
	  });
	  const bulkActionUrl = h$4.bulkActionUrl({
	    resourceId,
	    actionName
	  });
	  const resourceUrl = h$4.resourceUrl({
	    resourceId
	  });
	  const pageUrl = h$4.pageUrl(pageName);
	  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(DesignSystem.Reset, null), /*#__PURE__*/React__default['default'].createElement(GlobalStyle, null), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    height: "100%",
	    flex: true
	  }, sidebarVisible ? /*#__PURE__*/React__default['default'].createElement(DesignSystem.Overlay, {
	    onClick: () => toggleSidebar(!sidebarVisible)
	  }) : null, /*#__PURE__*/React__default['default'].createElement(Sidebar, {
	    isVisible: sidebarVisible
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    flex: true,
	    flexGrow: 1,
	    flexDirection: "column",
	    overflowY: "auto",
	    bg: "bg"
	  }, /*#__PURE__*/React__default['default'].createElement(TopBar, {
	    toggleSidebar: () => toggleSidebar(!sidebarVisible)
	  }), /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	    position: "absolute",
	    top: 0,
	    zIndex: "2000"
	  }, /*#__PURE__*/React__default['default'].createElement(ConnectedNoticeBox, null)), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Switch, null, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: h$4.dashboardUrl(),
	    exact: true,
	    component: Dashboard$2
	  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: resourceUrl,
	    component: Resource
	  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: pageUrl,
	    exact: true,
	    component: Page$1
	  })), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Switch, null, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: recordActionUrl,
	    component: RecordAction
	  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: resourceActionUrl,
	    component: ResourceAction$1
	  }), /*#__PURE__*/React__default['default'].createElement(reactRouterDom.Route, {
	    path: bulkActionUrl,
	    component: BulkAction
	  })))));
	};

	const ASSETS_INITIALIZE = 'ASSETS_INITIALIZE';

	const BRANDING_INITIALIZE = 'BRANDING_INITIALIZE';

	const DASHBOARD_INITIALIZE = 'DASHBOARD_INITIALIZE';

	const LOCALE_INITIALIZE = 'LOCALE_INITIALIZE';

	const PAGES_INITIALIZE = 'PAGES_INITIALIZE';

	const PATHS_INITIALIZE = 'PATHS_INITIALIZE';

	const RESOURCES_INITIALIZE = 'RESOURCES_INITIALIZE';

	const VERSIONS_INITIALIZE = 'VERSIONS_INITIALIZE';

	/* eslint-disable @typescript-eslint/explicit-function-return-type */

	const resourcesReducer = (state = [], action) => {
	  switch (action.type) {
	    case RESOURCES_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const pagesReducer = (state = [], action) => {
	  switch (action.type) {
	    case PAGES_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const localesReducer = (state = {
	  language: 'en',
	  translations: {}
	}, action) => {
	  switch (action.type) {
	    case LOCALE_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const brandingReducer = (state = {}, action) => {
	  switch (action.type) {
	    case BRANDING_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const assetsReducer = (state = {}, action) => {
	  switch (action.type) {
	    case ASSETS_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const pathsReducer = (state = DEFAULT_PATHS, action) => {
	  switch (action.type) {
	    case PATHS_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const dashboardReducer = (state = {}, action) => {
	  switch (action.type) {
	    case DASHBOARD_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const sessionReducer = (state = null, action) => {
	  switch (action.type) {
	    case SESSION_INITIALIZE:
	      return action.data;

	    default:
	      return state;
	  }
	};

	const versionsReducer = (state = {}, action) => {
	  switch (action.type) {
	    case VERSIONS_INITIALIZE:
	      return {
	        admin: action.data.admin,
	        app: action.data.app
	      };

	    default:
	      return state;
	  }
	};

	const noticesReducer = (state = [], action) => {
	  switch (action.type) {
	    case ADD_NOTICE:
	      {
	        const notices = [action.data];
	        return notices;
	      }

	    case DROP_NOTICE:
	      {
	        return state.filter(notice => notice.id !== action.data.noticeId);
	      }

	    case SET_NOTICE_PROGRESS:
	      {
	        return state.map(notice => ({ ...notice,
	          progress: notice.id === action.data.noticeId ? action.data.progress : notice.progress
	        }));
	      }

	    default:
	      return state;
	  }
	};

	const reducer = redux.combineReducers({
	  resources: resourcesReducer,
	  branding: brandingReducer,
	  assets: assetsReducer,
	  paths: pathsReducer,
	  session: sessionReducer,
	  dashboard: dashboardReducer,
	  notices: noticesReducer,
	  versions: versionsReducer,
	  pages: pagesReducer,
	  locale: localesReducer
	});
	var createStore = ((initialState = {}) => redux.createStore(reducer, initialState));

	const env = {
	  NODE_ENV: "development" 
	};
	const store = createStore(window.REDUX_STATE);
	const theme = window.THEME;
	const {
	  locale
	} = window.REDUX_STATE;
	i18n__default['default'].use(reactI18next.initReactI18next).init({
	  resources: {
	    [locale.language]: {
	      translation: locale.translations
	    }
	  },
	  lng: locale.language,
	  interpolation: {
	    escapeValue: false
	  }
	});
	const Application = /*#__PURE__*/React__default['default'].createElement(reactRedux.Provider, {
	  store: store
	}, /*#__PURE__*/React__default['default'].createElement(styled.ThemeProvider, {
	  theme: theme
	}, /*#__PURE__*/React__default['default'].createElement(reactRouterDom.BrowserRouter, null, /*#__PURE__*/React__default['default'].createElement(App, null)))); // eslint-disable-next-line no-undef

	window.regeneratorRuntime = regenerator;
	var bundleEntry = {
	  withNotice,
	  Application,
	  ViewHelpers,
	  UserComponents: {},
	  ApiClient,
	  BasePropertyComponent: BasePropertyComponentExtended,
	  env,
	  ...AppComponents,
	  ...Hooks,
	  flat,
	  // TODO: remove this from the next release
	  flatten: flat.flatten,
	  unflatten: flat.unflatten
	};

	return bundleEntry;

}(React, ReactRedux, ReactRouterDOM, styled, ReactI18Next, i18n, AdminBroDesignSystem, ReactRouter, axios, flat, ReactSelect, ReactSelectAsync, ReactDOM, Redux));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5kZXZlbG9wbWVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIi4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycy50cyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCIuLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvc2lkZWJhci9zaWRlYmFyLWJyYW5kaW5nLnRzeCIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5T2YuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19kZWJ1cnJMZXR0ZXIuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TWFwLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b1N0cmluZy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVidXJyLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlXb3Jkcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1VuaWNvZGVXb3JkLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVdvcmRzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC93b3Jkcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUNvbXBvdW5kZXIuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2xpY2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0U2xpY2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNVbmljb2RlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlUb0FycmF5LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVRvQXJyYXkuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb0FycmF5LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ2FzZUZpcnN0LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC91cHBlckZpcnN0LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdGFydENhc2UuanMiLCIuLi8uLi8uLi91dGlscy90cmFuc2xhdGUtZnVuY3Rpb25zLmZhY3RvcnkudHMiLCIuLi8uLi9ob29rcy91c2UtdHJhbnNsYXRpb24udHMiLCIuLi8uLi9jb21wb25lbnRzL2FwcC9zaWRlYmFyL3NpZGViYXItcGFnZXMudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvc2lkZWJhci9zaWRlYmFyLWZvb3Rlci50c3giLCIuLi8uLi91dGlscy9hcGktY2xpZW50LnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC9wYXJhbXMtdG8tZm9ybS1kYXRhLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hZGQtbm90aWNlLnRzIiwiLi4vLi4vaG9va3MvdXNlLW5vdGljZS50cyIsIi4uLy4uL2hvb2tzL3VzZS1yZWNvcmQvbWVyZ2UtcmVjb3JkLXJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vdXRpbHMvZmxhdC9jb25zdGFudHMudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L3Byb3BlcnR5LWtleS1yZWdleC50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvc2VsZWN0LXBhcmFtcy50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvZmlsdGVyLW91dC1wYXJhbXMudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L3BhdGgtdG8tcGFydHMudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L3NldC50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvZ2V0LnRzIiwiLi4vLi4vLi4vdXRpbHMvZmxhdC9tZXJnZS50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvcmVtb3ZlLXBhdGgudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L2ZsYXQtbW9kdWxlLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC91cGRhdGUtcmVjb3JkLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC9pcy1lbnRpcmUtcmVjb3JkLWdpdmVuLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC9maWx0ZXItcmVjb3JkLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC91c2UtcmVjb3JkLnRzeCIsIi4uLy4uL2ludGVyZmFjZXMvYWN0aW9uL2FjdGlvbi1oYXMtY29tcG9uZW50LnRzIiwiLi4vLi4vaW50ZXJmYWNlcy9hY3Rpb24vYWN0aW9uLWhyZWYudHMiLCIuLi8uLi9pbnRlcmZhY2VzL2FjdGlvbi9jYWxsLWFjdGlvbi1hcGkudHMiLCIuLi8uLi9pbnRlcmZhY2VzL2FjdGlvbi9idWlsZC1hY3Rpb24tYXBpLWNhbGwtdHJpZ2dlci50cyIsIi4uLy4uL2ludGVyZmFjZXMvYWN0aW9uL2J1aWxkLWFjdGlvbi10ZXN0LWlkLnRzIiwiLi4vLi4vaW50ZXJmYWNlcy9hY3Rpb24vYnVpbGQtYWN0aW9uLWNsaWNrLWhhbmRsZXIudHMiLCIuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvdXRpbHMvYXBwZW5kLWZvcmNlLXJlZnJlc2gudHMiLCIuLi8uLi9ob29rcy91c2UtYWN0aW9uL3VzZS1hY3Rpb24tcmVzcG9uc2UtaGFuZGxlci50cyIsIi4uLy4uL2hvb2tzL3VzZS1hY3Rpb24vdXNlLWFjdGlvbi50cyIsIi4uLy4uL3N0b3JlL2FjdGlvbnMvc2V0LWN1cnJlbnQtYWRtaW4udHMiLCIuLi8uLi9ob29rcy91c2UtY3VycmVudC1hZG1pbi50cyIsIi4uLy4uL2hvb2tzL3VzZS1sb2NhbC1zdG9yYWdlL3VzZS1sb2NhbC1zdG9yYWdlLnRzIiwiLi4vLi4vaG9va3MvdXNlLW5hdmlnYXRpb24tcmVzb3VyY2VzLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZHMvdXNlLXJlY29yZHMudHMiLCIuLi8uLi9ob29rcy91c2Utc2VsZWN0ZWQtcmVjb3Jkcy91c2Utc2VsZWN0ZWQtcmVjb3Jkcy50cyIsIi4uLy4uL2hvb2tzL3VzZS1yZXNvdXJjZS91c2UtcmVzb3VyY2UudHMiLCIuLi8uLi9jb21wb25lbnRzL2FwcC9zaWRlYmFyL3NpZGViYXItcmVzb3VyY2Utc2VjdGlvbi50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9zaWRlYmFyL3NpZGViYXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvbG9nZ2VkLWluLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3ZlcnNpb24udHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvdG9wLWJhci50c3giLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2Ryb3Atbm90aWNlLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9zZXQtbm90aWNlLXByb2dyZXNzLnRzIiwiLi4vLi4vY29tcG9uZW50cy9hcHAvbm90aWNlLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2RlZmF1bHQtZGFzaGJvYXJkLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2Vycm9yLWJvdW5kYXJ5LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcm91dGVzL2Rhc2hib2FyZC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvYWRkLW5ldy1pdGVtLXRyYW5zbGF0aW9uLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS91dGlscy9wcm9wZXJ0eS1sYWJlbC9wcm9wZXJ0eS1sYWJlbC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvY29udmVydC10by1zdWItcHJvcGVydHkudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2FycmF5L3JlbW92ZS1zdWItcHJvcGVydHkudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvaW5kZXgudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvY29udmVydC10by1zdWItcHJvcGVydHkudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvaW5kZXgudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGVmYXVsdC10eXBlL2RlZmF1bHQtcHJvcGVydHktdmFsdWUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RlZmF1bHQtdHlwZS9zaG93LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9yZWNvcmQtcHJvcGVydHktaXMtZXF1YWwudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGVmYXVsdC10eXBlL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RlZmF1bHQtdHlwZS9maWx0ZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RlZmF1bHQtdHlwZS9saXN0LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9ib29sZWFuL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2Jvb2xlYW4vbWFwLXZhbHVlLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9ib29sZWFuL2Jvb2xlYW4tcHJvcGVydHktdmFsdWUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2Jvb2xlYW4vc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYm9vbGVhbi9saXN0LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9ib29sZWFuL2ZpbHRlci50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGF0ZXRpbWUvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGF0ZXRpbWUvbWFwLXZhbHVlLnRzIiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RhdGV0aW1lL3Nob3cudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RhdGV0aW1lL2xpc3QudHN4IiwiLi4vLi4vLi4vYmFja2VuZC91dGlscy9maWx0ZXIvZmlsdGVyLnRzIiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RhdGV0aW1lL2ZpbHRlci50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmljaHRleHQvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmljaHRleHQvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmljaHRleHQvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmVmZXJlbmNlL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL3JlZmVyZW5jZS9yZWZlcmVuY2UtdmFsdWUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL3JlZmVyZW5jZS9zaG93LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9yZWZlcmVuY2UvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmVmZXJlbmNlL2ZpbHRlci50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvdGV4dGFyZWEvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvdGV4dGFyZWEvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcGFzc3dvcmQvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcGFzc3dvcmQvaW5kZXgudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYmFzZS1wcm9wZXJ0eS1jb21wb25lbnQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2luZGV4LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2JyZWFkY3J1bWJzLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2FjdGlvbi1oZWFkZXIvYWN0aW9ucy10by1idXR0b24tZ3JvdXAudHMiLCIuLi8uLi9jb21wb25lbnRzL2FwcC9hY3Rpb24taGVhZGVyL3N0eWxlZC1iYWNrLWJ1dHRvbi50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9hY3Rpb24taGVhZGVyL2FjdGlvbi1oZWFkZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL3V0aWxzL2xheW91dC1lbGVtZW50LXJlbmRlcmVyLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYWN0aW9ucy9uZXcudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL3Nob3cudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvcmVjb3Jkcy10YWJsZS91dGlscy9kaXNwbGF5LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcmVjb3JkLWluLWxpc3QudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvc29ydC1saW5rLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcHJvcGVydHktaGVhZGVyLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcmVjb3Jkcy10YWJsZS1oZWFkZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvbm8tcmVjb3Jkcy50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9yZWNvcmRzLXRhYmxlL3V0aWxzL2dldC1idWxrLWFjdGlvbnMtZnJvbS1yZWNvcmRzLnRzIiwiLi4vLi4vY29tcG9uZW50cy9hcHAvcmVjb3Jkcy10YWJsZS9zZWxlY3RlZC1yZWNvcmRzLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcmVjb3Jkcy10YWJsZS50c3giLCIuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvbGlzdC50c3giLCIuLi8uLi9ob2Mvd2l0aC1ub3RpY2UudHMiLCIuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvYnVsay1kZWxldGUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL2luZGV4LnRzIiwiLi4vLi4vLi4vY29uc3RhbnRzLnRzIiwiLi4vLi4vY29tcG9uZW50cy9hcHAvYmFzZS1hY3Rpb24tY29tcG9uZW50LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2Vycm9yLW1lc3NhZ2UudHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvdXRpbHMvd3JhcHBlci50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9kcmF3ZXItcG9ydGFsLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2ZpbHRlci1kcmF3ZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvcmVjb3JkLWFjdGlvbi50c3giLCIuLi8uLi9jb21wb25lbnRzL3JvdXRlcy9yZXNvdXJjZS1hY3Rpb24udHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvYnVsay1hY3Rpb24udHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvcGFnZS50c3giLCIuLi8uLi9jb21wb25lbnRzL3JvdXRlcy91dGlscy9xdWVyeS1oYXMtZmlsdGVyLnRzIiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvcmVzb3VyY2UudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHBsaWNhdGlvbi50c3giLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtYXNzZXRzLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbml0aWFsaXplLWJyYW5kaW5nLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbml0aWFsaXplLWRhc2hib2FyZC50cyIsIi4uLy4uL3N0b3JlL2FjdGlvbnMvaW5pdGlhbGl6ZS1sb2NhbGUudHMiLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtcGFnZXMudHMiLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtcGF0aHMudHMiLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtcmVzb3VyY2VzLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbml0aWFsaXplLXZlcnNpb25zLnRzIiwiLi4vLi4vc3RvcmUvc3RvcmUudHMiLCIuLi8uLi9idW5kbGUtZW50cnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCB7IEFkbWluQnJvT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2FkbWluLWJyby1vcHRpb25zLmludGVyZmFjZSdcclxuaW1wb3J0IHsgUGF0aHMgfSBmcm9tICcuLi8uLi8uLi9mcm9udGVuZC9zdG9yZS9zdG9yZSdcclxuXHJcbmxldCBnbG9iYWxBbnk6IGFueSA9IHt9XHJcblxyXG50cnkge1xyXG4gIGdsb2JhbEFueSA9IHdpbmRvd1xyXG59IGNhdGNoIChlcnJvcikge1xyXG4gIGlmIChlcnJvci5tZXNzYWdlICE9PSAnd2luZG93IGlzIG5vdCBkZWZpbmVkJykge1xyXG4gICAgdGhyb3cgZXJyb3JcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCYXNlIFBhcmFtcyBmb3IgYSBhbnkgZnVuY3Rpb25cclxuICogQGFsaWFzIEFjdGlvblBhcmFtc1xyXG4gKiBAbWVtYmVyb2YgVmlld0hlbHBlcnNcclxuICovXHJcbmV4cG9ydCB0eXBlIEFjdGlvblBhcmFtcyA9IHtcclxuICAvKipcclxuICAgKiBVbmlxdWUgUmVzb3VyY2UgSURcclxuICAgKi9cclxuICByZXNvdXJjZUlkOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQWN0aW9uIG5hbWVcclxuICAgKi9cclxuICBhY3Rpb25OYW1lOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogT3B0aW9uYWwgcXVlcnkgc3RyaW5nOiA/Li4uLlxyXG4gICAqL1xyXG4gIHNlYXJjaD8gOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJhbXMgZm9yIGEgcmVjb3JkIGFjdGlvblxyXG4gKiBAYWxpYXMgUmVjb3JkQWN0aW9uUGFyYW1zXHJcbiAqIEBleHRlbmRzIEFjdGlvblBhcmFtc1xyXG4gKiBAbWVtYmVyb2YgVmlld0hlbHBlcnNcclxuICovXHJcbmV4cG9ydCB0eXBlIFJlY29yZEFjdGlvblBhcmFtcyA9IEFjdGlvblBhcmFtcyAmIHtcclxuICAvKipcclxuICAgKiBSZWNvcmQgSURcclxuICAgKi9cclxuICByZWNvcmRJZDogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogUGFyYW1zIGZvciBhIGJ1bGsgYWN0aW9uXHJcbiAqIEBhbGlhcyBCdWxrQWN0aW9uUGFyYW1zXHJcbiAqIEBleHRlbmRzIEFjdGlvblBhcmFtc1xyXG4gKiBAbWVtYmVyb2YgVmlld0hlbHBlcnNcclxuICovXHJcbmV4cG9ydCB0eXBlIEJ1bGtBY3Rpb25QYXJhbXMgPSBBY3Rpb25QYXJhbXMgJiB7XHJcbiAgLyoqXHJcbiAgICogQXJyYXkgb2YgUmVjb3JkcyBJRFxyXG4gICAqL1xyXG4gIHJlY29yZElkcz86IEFycmF5PHN0cmluZz47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQYXJhbXMgZm9yIGEgcmVzb3VyY2UgYWN0aW9uXHJcbiAqIEBhbGlhcyBSZXNvdXJjZUFjdGlvblBhcmFtc1xyXG4gKiBAZXh0ZW5kcyBBY3Rpb25QYXJhbXNcclxuICogQG1lbWJlcm9mIFZpZXdIZWxwZXJzXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZXNvdXJjZUFjdGlvblBhcmFtcyA9IEFjdGlvblBhcmFtc1xyXG5cclxuY29uc3QgcnVuRGF0ZSA9IG5ldyBEYXRlKClcclxuXHJcbi8qKlxyXG4gKiBDb2xsZWN0aW9uIG9mIGhlbHBlciBtZXRob2RzIGF2YWlsYWJsZSBpbiB0aGUgdmlld3NcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWaWV3SGVscGVycyB7XHJcbiAgcHVibGljIG9wdGlvbnM6IFBhdGhzXHJcblxyXG4gIGNvbnN0cnVjdG9yKHsgb3B0aW9ucyB9OiB7IG9wdGlvbnM/OiBBZG1pbkJyb09wdGlvbnMgfSA9IHt9KSB7XHJcbiAgICBsZXQgb3B0czogUGF0aHMgPSBWaWV3SGVscGVycy5nZXRQYXRocyhvcHRpb25zKVxyXG5cclxuICAgIG9wdHMgPSBvcHRzIHx8IHtcclxuICAgICAgcm9vdFBhdGg6ICcvYWRtaW4nLFxyXG4gICAgfVxyXG5cclxuICAgIC8vIHdoZW4gVmlld0hlbHBlcnMgYXJlIHVzZWQgb24gdGhlIGZyb250ZW5kLCBwYXRocyBhcmUgdGFrZW4gZnJvbSBnbG9iYWwgUmVkdXggU3RhdGVcclxuICAgIHRoaXMub3B0aW9ucyA9IG9wdHNcclxuICB9XHJcblxyXG4gIHN0YXRpYyBnZXRQYXRocyhvcHRpb25zPzogQWRtaW5Ccm9PcHRpb25zKTogUGF0aHMge1xyXG4gICAgcmV0dXJuIG9wdGlvbnMgfHwgKGdsb2JhbEFueS5SRURVWF9TVEFURT8ucGF0aHMpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUbyBlYWNoIHJlbGF0ZWQgcGF0aCBhZGRzIHJvb3RQYXRoIHBhc3NlZCBieSB0aGUgdXNlciwgYXMgd2VsbCBhcyBhIHF1ZXJ5IHN0cmluZ1xyXG4gICAqIEBwcml2YXRlXHJcbiAgICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gW3BhdGhzXSAgICAgIGxpc3Qgb2YgcGFydHMgb2YgdGhlIHVybFxyXG4gICAqIEByZXR1cm4ge3N0cmluZ30gICAgICAgcGF0aFxyXG4gICAqIEByZXR1cm4ge3F1ZXJ5fSAgICAgICAgW3NlYXJjaD0nJ10gcXVlcnkgc3RyaW5nIHdoaWNoIGNhbiBiZSBmZXRjaFxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBgbG9jYXRpb24uc2VhcmNoYFxyXG4gICAqL1xyXG4gIHVybEJ1aWxkZXIocGF0aHM6IEFycmF5PHN0cmluZz4gPSBbXSwgc2VhcmNoID0gJycpOiBzdHJpbmcge1xyXG4gICAgY29uc3Qgc2VwYXJhdG9yID0gJy8nXHJcbiAgICBjb25zdCByZXBsYWNlID0gbmV3IFJlZ0V4cChgJHtzZXBhcmF0b3J9ezEsfWAsICdnJylcclxuXHJcbiAgICBsZXQgeyByb290UGF0aCB9ID0gdGhpcy5vcHRpb25zXHJcbiAgICBpZiAoIXJvb3RQYXRoLnN0YXJ0c1dpdGgoc2VwYXJhdG9yKSkgeyByb290UGF0aCA9IGAke3NlcGFyYXRvcn0ke3Jvb3RQYXRofWAgfVxyXG5cclxuICAgIGNvbnN0IHBhcnRzID0gW3Jvb3RQYXRoLCAuLi5wYXRoc11cclxuICAgIHJldHVybiBgJHtwYXJ0cy5qb2luKHNlcGFyYXRvcikucmVwbGFjZShyZXBsYWNlLCBzZXBhcmF0b3IpfSR7c2VhcmNofWBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgbG9naW4gVVJMXHJcbiAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIGxvZ2luVXJsKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvZ2luUGF0aFxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBsb2dvdXQgVVJMXHJcbiAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIGxvZ291dFVybCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5sb2dvdXRQYXRoXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIFVSTCBmb3IgdGhlIGRhc2hib2FyZFxyXG4gICAqIEByZXR1cm4ge3N0cmluZ31cclxuICAgKi9cclxuICBkYXNoYm9hcmRVcmwoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm9wdGlvbnMucm9vdFBhdGhcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgVVJMIGZvciBnaXZlbiBwYWdlIG5hbWVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFnZU5hbWUgICAgICAgcGFnZSBuYW1lIHdoaWNoIGlzIGEgdW5pcXVlIGtleSBzcGVjaWZpZWQgaW5cclxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0BsaW5rIEFkbWluQnJvT3B0aW9uc31cclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgcGFnZVVybChwYWdlTmFtZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnVybEJ1aWxkZXIoWydwYWdlcycsIHBhZ2VOYW1lXSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdXJsIGZvciBhIGBlZGl0YCBhY3Rpb24gaW4gZ2l2ZW4gUmVzb3VyY2UuIFVzZXMge0BsaW5rIHJlY29yZEFjdGlvblVybH1cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZXNvdXJjZUlkICBpZCB0byB0aGUgcmVzb3VyY2VcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVjb3JkSWQgICAgaWQgdG8gdGhlIHJlY29yZFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VhcmNoXSAgICAgICAgb3B0aW9uYWwgcXVlcnkgc3RyaW5nXHJcbiAgICovXHJcbiAgZWRpdFVybChyZXNvdXJjZUlkOiBzdHJpbmcsIHJlY29yZElkOiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5yZWNvcmRBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZTogJ2VkaXQnLCBzZWFyY2ggfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdXJsIGZvciBhIGBzaG93YCBhY3Rpb24gaW4gZ2l2ZW4gUmVzb3VyY2UuIFVzZXMge0BsaW5rIHJlY29yZEFjdGlvblVybH1cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZXNvdXJjZUlkICBpZCB0byB0aGUgcmVzb3VyY2VcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVjb3JkSWQgICAgaWQgdG8gdGhlIHJlY29yZFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VhcmNoXSAgICAgICAgb3B0aW9uYWwgcXVlcnkgc3RyaW5nXHJcbiAgICovXHJcbiAgc2hvd1VybChyZXNvdXJjZUlkOiBzdHJpbmcsIHJlY29yZElkOiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5yZWNvcmRBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZTogJ3Nob3cnLCBzZWFyY2ggfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdXJsIGZvciBhIGBkZWxldGVgIGFjdGlvbiBpbiBnaXZlbiBSZXNvdXJjZS4gVXNlcyB7QGxpbmsgcmVjb3JkQWN0aW9uVXJsfVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWNvcmRJZCAgICBpZCB0byB0aGUgcmVjb3JkXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWFyY2hdICAgICAgICBvcHRpb25hbCBxdWVyeSBzdHJpbmdcclxuICAgKi9cclxuICBkZWxldGVVcmwocmVzb3VyY2VJZDogc3RyaW5nLCByZWNvcmRJZDogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMucmVjb3JkQWN0aW9uVXJsKHsgcmVzb3VyY2VJZCwgcmVjb3JkSWQsIGFjdGlvbk5hbWU6ICdkZWxldGUnLCBzZWFyY2ggfSlcclxuICB9XHJcblxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHVybCBmb3IgYSBgbmV3YCBhY3Rpb24gaW4gZ2l2ZW4gUmVzb3VyY2UuIFVzZXMge0BsaW5rIHJlc291cmNlQWN0aW9uVXJsfVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VhcmNoXSAgICAgICAgb3B0aW9uYWwgcXVlcnkgc3RyaW5nXHJcbiAgICovXHJcbiAgbmV3VXJsKHJlc291cmNlSWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnJlc291cmNlQWN0aW9uVXJsKHsgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZTogJ25ldycsIHNlYXJjaCB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB1cmwgZm9yIGEgYG5ld2AgYWN0aW9uIGluIGdpdmVuIFJlc291cmNlLiBVc2VzIHtAbGluayByZXNvdXJjZUFjdGlvblVybH1cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZXNvdXJjZUlkICBpZCB0byB0aGUgcmVzb3VyY2VcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlYXJjaF0gICAgICAgIG9wdGlvbmFsIHF1ZXJ5IHN0cmluZ1xyXG4gICAqL1xyXG4gIGxpc3RVcmwocmVzb3VyY2VJZDogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lOiAnbGlzdCcsIHNlYXJjaCB9KVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB1cmwgZm9yIGEgYGJ1bGtEZWxldGVgIGFjdGlvbiBpbiBnaXZlbiBSZXNvdXJjZS4gVXNlcyB7QGxpbmsgYnVsa0FjdGlvblVybH1cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZXNvdXJjZUlkICBpZCB0byB0aGUgcmVzb3VyY2VcclxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHJlY29yZElkcyAgIHNlcGFyYXRlZCBieSBjb21tYSByZWNvcmRzXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtzZWFyY2hdICAgICAgICBvcHRpb25hbCBxdWVyeSBzdHJpbmdcclxuICAgKi9cclxuICBidWxrRGVsZXRlVXJsKHJlc291cmNlSWQ6IHN0cmluZywgcmVjb3JkSWRzOiBBcnJheTxzdHJpbmc+LCBzZWFyY2g/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuYnVsa0FjdGlvblVybCh7IHJlc291cmNlSWQsIHJlY29yZElkcywgYWN0aW9uTmFtZTogJ2J1bGtEZWxldGUnLCBzZWFyY2ggfSlcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgcmVzb3VyY2VBY3Rpb24gdXJsXHJcbiAgICpcclxuICAgKiBAcGFyYW0gICB7UmVzb3VyY2VBY3Rpb25QYXJhbXN9ICBvcHRpb25zXHJcbiAgICogQHBhcmFtICAge3N0cmluZ30gIG9wdGlvbnMucmVzb3VyY2VJZFxyXG4gICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBvcHRpb25zLmFjdGlvbk5hbWVcclxuICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgW29wdGlvbnMuc2VhcmNoXSAgICAgICAgb3B0aW9uYWwgcXVlcnkgc3RyaW5nXHJcbiAgICpcclxuICAgKiBAcmV0dXJuICB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIHJlc291cmNlQWN0aW9uVXJsKHsgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZSwgc2VhcmNoIH06IFJlc291cmNlQWN0aW9uUGFyYW1zKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnVybEJ1aWxkZXIoWydyZXNvdXJjZXMnLCByZXNvdXJjZUlkLCAnYWN0aW9ucycsIGFjdGlvbk5hbWVdLCBzZWFyY2gpXHJcbiAgfVxyXG5cclxuICByZXNvdXJjZVVybCh7IHJlc291cmNlSWQsIHNlYXJjaCB9OiBPbWl0PFJlc291cmNlQWN0aW9uUGFyYW1zLCAnYWN0aW9uTmFtZSc+KTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnVybEJ1aWxkZXIoWydyZXNvdXJjZXMnLCByZXNvdXJjZUlkXSwgc2VhcmNoKVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyByZWNvcmRBY3Rpb24gdXJsXHJcbiAgICpcclxuICAgKiBAcGFyYW0gICB7UmVjb3JkQWN0aW9uUGFyYW1zfSAgb3B0aW9uc1xyXG4gICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBvcHRpb25zLnJlc291cmNlSWRcclxuICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgb3B0aW9ucy5yZWNvcmRJZFxyXG4gICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBvcHRpb25zLmFjdGlvbk5hbWVcclxuICAgKlxyXG4gICAqIEByZXR1cm4gIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgcmVjb3JkQWN0aW9uVXJsKHsgcmVzb3VyY2VJZCwgcmVjb3JkSWQsIGFjdGlvbk5hbWUsIHNlYXJjaCB9OiBSZWNvcmRBY3Rpb25QYXJhbXMpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMudXJsQnVpbGRlcihbJ3Jlc291cmNlcycsIHJlc291cmNlSWQsICdyZWNvcmRzJywgcmVjb3JkSWQsIGFjdGlvbk5hbWVdLCBzZWFyY2gpXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGJ1bGtBY3Rpb24gdXJsXHJcbiAgICpcclxuICAgKiBAcGFyYW0gICB7QnVsa0FjdGlvblBhcmFtc30gIG9wdGlvbnNcclxuICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgb3B0aW9ucy5yZXNvdXJjZUlkXHJcbiAgICogQHBhcmFtICAge0FycmF5PHN0cmluZz59ICBbb3B0aW9ucy5yZWNvcmRJZHNdXHJcbiAgICogQHBhcmFtICAge3N0cmluZ30gIG9wdGlvbnMuYWN0aW9uTmFtZVxyXG4gICAqXHJcbiAgICogQHJldHVybiAge3N0cmluZ31cclxuICAgKi9cclxuICBidWxrQWN0aW9uVXJsKHsgcmVzb3VyY2VJZCwgcmVjb3JkSWRzLCBhY3Rpb25OYW1lLCBzZWFyY2ggfTogQnVsa0FjdGlvblBhcmFtcyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB1cmwgPSB0aGlzLnVybEJ1aWxkZXIoW1xyXG4gICAgICAncmVzb3VyY2VzJywgcmVzb3VyY2VJZCwgJ2J1bGsnLCBhY3Rpb25OYW1lLFxyXG4gICAgXSlcclxuICAgIGlmIChyZWNvcmRJZHMgJiYgcmVjb3JkSWRzLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCBxdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKVxyXG4gICAgICBxdWVyeS5zZXQoJ3JlY29yZElkcycsIHJlY29yZElkcy5qb2luKCcsJykpXHJcbiAgICAgIHJldHVybiBgJHt1cmx9PyR7cXVlcnkudG9TdHJpbmcoKX1gXHJcbiAgICB9XHJcbiAgICByZXR1cm4gYCR7dXJsfSR7c2VhcmNoIHx8ICcnfWBcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYWJzb2x1dGUgcGF0aCB0byBhIGdpdmVuIGFzc2V0LlxyXG4gICAqIEBwcml2YXRlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGFzc2V0XHJcbiAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIGFzc2V0UGF0aChhc3NldDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMuYXNzZXRzQ0ROKSB7XHJcbiAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYXNzZXQsIHRoaXMub3B0aW9ucy5hc3NldHNDRE4pLmhyZWZcclxuXHJcbiAgICAgIC8vIGFkZGluZyB0aW1lc3RhbXAgdG8gdGhlIGhyZWYgaW52YWxpZGF0ZXMgdGhlIENETiBjYWNoZVxyXG4gICAgICByZXR1cm4gYCR7dXJsfT9kYXRlPSR7cnVuRGF0ZS5nZXRUaW1lKCl9YFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudXJsQnVpbGRlcihbJ2Zyb250ZW5kJywgJ2Fzc2V0cycsIGFzc2V0XSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZpZXdIZWxwZXJzXHJcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBPdmVycmlkYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL3V0aWxzL292ZXJyaWRhYmxlLWNvbXBvbmVudCdcclxuXHJcbi8qKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKlxyXG4gKiBAY2xhc3NkZXNjXHJcbiAqIE92ZXJyaWRlcyBvbmUgb2YgdGhlIGNvbXBvbmVudCBmb3JtIEFkbWluQnJvIGNvcmUgd2hlbiB1c2VyIHBhc3MgaXRzIG5hbWUgdG9cclxuICoge0BsaW5rIEFkbWluQnJvLmJ1bmRsZX0gbWV0aG9kLlxyXG4gKlxyXG4gKiBJZiBjYXNlIG9mIGJlaW5nIG92ZXJyaWRkZW4sIGNvbXBvbmVudCByZWNlaXZlcyBhZGRpdGlvbmFsIHByb3A6IGBPcmlnaW5hbENvbXBvbmVudGBcclxuICpcclxuICogQGV4YW1wbGVcclxuICogQWRtaW5Ccm8uYnVuZGxlKCcuL3BhdGgvdG8vY29tcG9uZW50JywgJ1NpZGViYXJGb290ZXInKVxyXG4gKi9cclxuZnVuY3Rpb24gYWxsb3dPdmVycmlkZTxQPihcclxuICBPcmlnaW5hbENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPixcclxuICBuYW1lOiBPdmVycmlkYWJsZUNvbXBvbmVudCxcclxuKTogQ29tcG9uZW50VHlwZTxQICYge09yaWdpbmFsQ29tcG9uZW50PzogQ29tcG9uZW50VHlwZTxQPn0+IHtcclxuICAvLyBzc3JcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiBPcmlnaW5hbENvbXBvbmVudFxyXG4gIH1cclxuXHJcbiAgY29uc3QgV3JhcHBlckNvbXBvbmVudDogUmVhY3QuRkM8UD4gPSAocHJvcHMpID0+IHtcclxuICAgIGxldCBnbG9iYWxBbnk6IGFueSA9IHdpbmRvd1xyXG4gICAgZ2xvYmFsQW55ID0gd2luZG93XHJcblxyXG4gICAgbGV0IENvbXBvbmVudCA9IE9yaWdpbmFsQ29tcG9uZW50XHJcblxyXG4gICAgaWYgKGdsb2JhbEFueS5BZG1pbkJyb1xyXG4gICAgICAmJiBnbG9iYWxBbnkuQWRtaW5Ccm8uVXNlckNvbXBvbmVudHNcclxuICAgICAgJiYgZ2xvYmFsQW55LkFkbWluQnJvLlVzZXJDb21wb25lbnRzW25hbWVdXHJcbiAgICApIHtcclxuICAgICAgQ29tcG9uZW50ID0gZ2xvYmFsQW55LkFkbWluQnJvLlVzZXJDb21wb25lbnRzW25hbWVdXHJcbiAgICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gT3JpZ2luYWxDb21wb25lbnQ9e09yaWdpbmFsQ29tcG9uZW50fSAvPlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICB9XHJcblxyXG4gIHJldHVybiBXcmFwcGVyQ29tcG9uZW50XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgYWxsb3dPdmVycmlkZSBhcyBkZWZhdWx0LFxyXG4gIGFsbG93T3ZlcnJpZGUsXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgY3NzQ2xhc3MsIHRoZW1lR2V0IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5cclxuaW1wb3J0IFZpZXdIZWxwZXJzIGZyb20gJy4uLy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcclxuaW1wb3J0IHsgQnJhbmRpbmdPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vLi4vYWRtaW4tYnJvLW9wdGlvbnMuaW50ZXJmYWNlJ1xyXG5pbXBvcnQgYWxsb3dPdmVycmlkZSBmcm9tICcuLi8uLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUnXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIGJyYW5kaW5nOiBCcmFuZGluZ09wdGlvbnM7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRMb2dvID0gc3R5bGVkKExpbmspYFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxuICBwYWRkaW5nOiAke3RoZW1lR2V0KCdzcGFjZScsICdsZycpfSAke3RoZW1lR2V0KCdzcGFjZScsICd4eGwnKX0gJHt0aGVtZUdldCgnc3BhY2UnLCAneHhsJyl9O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgJiA+IGgxIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiAke3RoZW1lR2V0KCdmb250V2VpZ2h0cycsICdib2xkZXInKX07XHJcbiAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzJywgJ2JvbGRlcicpfTtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMnLCAnZ3JleTgwJyl9O1xyXG4gICAgZm9udC1zaXplOiAke3RoZW1lR2V0KCdmb250U2l6ZXMnLCAneGwnKX07XHJcbiAgICBsaW5lLWhlaWdodDogJHt0aGVtZUdldCgnbGluZUhlaWdodHMnLCAneGwnKX07XHJcbiAgfVxyXG5cclxuICAmID4gaW1nIHtcclxuICAgIG1heC13aWR0aDogMTcwcHg7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIGgxIHtcclxuICAgIGNvbG9yOiAke3RoZW1lR2V0KCdjb2xvcnMnLCAncHJpbWFyeTEwMCcpfTtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxyXG5cclxuY29uc3QgU2lkZWJhckJyYW5kaW5nOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGJyYW5kaW5nIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHsgbG9nbywgY29tcGFueU5hbWUgfSA9IGJyYW5kaW5nXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRMb2dvXHJcbiAgICAgIGNsYXNzTmFtZT17Y3NzQ2xhc3MoJ0xvZ28nKX1cclxuICAgICAgdG89e2guZGFzaGJvYXJkVXJsKCl9XHJcbiAgICA+XHJcbiAgICAgIHtsb2dvID8gKFxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17bG9nb31cclxuICAgICAgICAgIGFsdD17Y29tcGFueU5hbWV9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSA6IDxoMT57Y29tcGFueU5hbWV9PC9oMT59XHJcbiAgICA8L1N0eWxlZExvZ28+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbGxvd092ZXJyaWRlKFNpZGViYXJCcmFuZGluZywgJ1NpZGViYXJCcmFuZGluZycpXHJcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVJlZHVjZTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlPZmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5T2Yob2JqZWN0KSB7XG4gIHJldHVybiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHlPZjtcbiIsInZhciBiYXNlUHJvcGVydHlPZiA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eU9mJyk7XG5cbi8qKiBVc2VkIHRvIG1hcCBMYXRpbiBVbmljb2RlIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycy4gKi9cbnZhciBkZWJ1cnJlZExldHRlcnMgPSB7XG4gIC8vIExhdGluLTEgU3VwcGxlbWVudCBibG9jay5cbiAgJ1xceGMwJzogJ0EnLCAgJ1xceGMxJzogJ0EnLCAnXFx4YzInOiAnQScsICdcXHhjMyc6ICdBJywgJ1xceGM0JzogJ0EnLCAnXFx4YzUnOiAnQScsXG4gICdcXHhlMCc6ICdhJywgICdcXHhlMSc6ICdhJywgJ1xceGUyJzogJ2EnLCAnXFx4ZTMnOiAnYScsICdcXHhlNCc6ICdhJywgJ1xceGU1JzogJ2EnLFxuICAnXFx4YzcnOiAnQycsICAnXFx4ZTcnOiAnYycsXG4gICdcXHhkMCc6ICdEJywgICdcXHhmMCc6ICdkJyxcbiAgJ1xceGM4JzogJ0UnLCAgJ1xceGM5JzogJ0UnLCAnXFx4Y2EnOiAnRScsICdcXHhjYic6ICdFJyxcbiAgJ1xceGU4JzogJ2UnLCAgJ1xceGU5JzogJ2UnLCAnXFx4ZWEnOiAnZScsICdcXHhlYic6ICdlJyxcbiAgJ1xceGNjJzogJ0knLCAgJ1xceGNkJzogJ0knLCAnXFx4Y2UnOiAnSScsICdcXHhjZic6ICdJJyxcbiAgJ1xceGVjJzogJ2knLCAgJ1xceGVkJzogJ2knLCAnXFx4ZWUnOiAnaScsICdcXHhlZic6ICdpJyxcbiAgJ1xceGQxJzogJ04nLCAgJ1xceGYxJzogJ24nLFxuICAnXFx4ZDInOiAnTycsICAnXFx4ZDMnOiAnTycsICdcXHhkNCc6ICdPJywgJ1xceGQ1JzogJ08nLCAnXFx4ZDYnOiAnTycsICdcXHhkOCc6ICdPJyxcbiAgJ1xceGYyJzogJ28nLCAgJ1xceGYzJzogJ28nLCAnXFx4ZjQnOiAnbycsICdcXHhmNSc6ICdvJywgJ1xceGY2JzogJ28nLCAnXFx4ZjgnOiAnbycsXG4gICdcXHhkOSc6ICdVJywgICdcXHhkYSc6ICdVJywgJ1xceGRiJzogJ1UnLCAnXFx4ZGMnOiAnVScsXG4gICdcXHhmOSc6ICd1JywgICdcXHhmYSc6ICd1JywgJ1xceGZiJzogJ3UnLCAnXFx4ZmMnOiAndScsXG4gICdcXHhkZCc6ICdZJywgICdcXHhmZCc6ICd5JywgJ1xceGZmJzogJ3knLFxuICAnXFx4YzYnOiAnQWUnLCAnXFx4ZTYnOiAnYWUnLFxuICAnXFx4ZGUnOiAnVGgnLCAnXFx4ZmUnOiAndGgnLFxuICAnXFx4ZGYnOiAnc3MnLFxuICAvLyBMYXRpbiBFeHRlbmRlZC1BIGJsb2NrLlxuICAnXFx1MDEwMCc6ICdBJywgICdcXHUwMTAyJzogJ0EnLCAnXFx1MDEwNCc6ICdBJyxcbiAgJ1xcdTAxMDEnOiAnYScsICAnXFx1MDEwMyc6ICdhJywgJ1xcdTAxMDUnOiAnYScsXG4gICdcXHUwMTA2JzogJ0MnLCAgJ1xcdTAxMDgnOiAnQycsICdcXHUwMTBhJzogJ0MnLCAnXFx1MDEwYyc6ICdDJyxcbiAgJ1xcdTAxMDcnOiAnYycsICAnXFx1MDEwOSc6ICdjJywgJ1xcdTAxMGInOiAnYycsICdcXHUwMTBkJzogJ2MnLFxuICAnXFx1MDEwZSc6ICdEJywgICdcXHUwMTEwJzogJ0QnLCAnXFx1MDEwZic6ICdkJywgJ1xcdTAxMTEnOiAnZCcsXG4gICdcXHUwMTEyJzogJ0UnLCAgJ1xcdTAxMTQnOiAnRScsICdcXHUwMTE2JzogJ0UnLCAnXFx1MDExOCc6ICdFJywgJ1xcdTAxMWEnOiAnRScsXG4gICdcXHUwMTEzJzogJ2UnLCAgJ1xcdTAxMTUnOiAnZScsICdcXHUwMTE3JzogJ2UnLCAnXFx1MDExOSc6ICdlJywgJ1xcdTAxMWInOiAnZScsXG4gICdcXHUwMTFjJzogJ0cnLCAgJ1xcdTAxMWUnOiAnRycsICdcXHUwMTIwJzogJ0cnLCAnXFx1MDEyMic6ICdHJyxcbiAgJ1xcdTAxMWQnOiAnZycsICAnXFx1MDExZic6ICdnJywgJ1xcdTAxMjEnOiAnZycsICdcXHUwMTIzJzogJ2cnLFxuICAnXFx1MDEyNCc6ICdIJywgICdcXHUwMTI2JzogJ0gnLCAnXFx1MDEyNSc6ICdoJywgJ1xcdTAxMjcnOiAnaCcsXG4gICdcXHUwMTI4JzogJ0knLCAgJ1xcdTAxMmEnOiAnSScsICdcXHUwMTJjJzogJ0knLCAnXFx1MDEyZSc6ICdJJywgJ1xcdTAxMzAnOiAnSScsXG4gICdcXHUwMTI5JzogJ2knLCAgJ1xcdTAxMmInOiAnaScsICdcXHUwMTJkJzogJ2knLCAnXFx1MDEyZic6ICdpJywgJ1xcdTAxMzEnOiAnaScsXG4gICdcXHUwMTM0JzogJ0onLCAgJ1xcdTAxMzUnOiAnaicsXG4gICdcXHUwMTM2JzogJ0snLCAgJ1xcdTAxMzcnOiAnaycsICdcXHUwMTM4JzogJ2snLFxuICAnXFx1MDEzOSc6ICdMJywgICdcXHUwMTNiJzogJ0wnLCAnXFx1MDEzZCc6ICdMJywgJ1xcdTAxM2YnOiAnTCcsICdcXHUwMTQxJzogJ0wnLFxuICAnXFx1MDEzYSc6ICdsJywgICdcXHUwMTNjJzogJ2wnLCAnXFx1MDEzZSc6ICdsJywgJ1xcdTAxNDAnOiAnbCcsICdcXHUwMTQyJzogJ2wnLFxuICAnXFx1MDE0Myc6ICdOJywgICdcXHUwMTQ1JzogJ04nLCAnXFx1MDE0Nyc6ICdOJywgJ1xcdTAxNGEnOiAnTicsXG4gICdcXHUwMTQ0JzogJ24nLCAgJ1xcdTAxNDYnOiAnbicsICdcXHUwMTQ4JzogJ24nLCAnXFx1MDE0Yic6ICduJyxcbiAgJ1xcdTAxNGMnOiAnTycsICAnXFx1MDE0ZSc6ICdPJywgJ1xcdTAxNTAnOiAnTycsXG4gICdcXHUwMTRkJzogJ28nLCAgJ1xcdTAxNGYnOiAnbycsICdcXHUwMTUxJzogJ28nLFxuICAnXFx1MDE1NCc6ICdSJywgICdcXHUwMTU2JzogJ1InLCAnXFx1MDE1OCc6ICdSJyxcbiAgJ1xcdTAxNTUnOiAncicsICAnXFx1MDE1Nyc6ICdyJywgJ1xcdTAxNTknOiAncicsXG4gICdcXHUwMTVhJzogJ1MnLCAgJ1xcdTAxNWMnOiAnUycsICdcXHUwMTVlJzogJ1MnLCAnXFx1MDE2MCc6ICdTJyxcbiAgJ1xcdTAxNWInOiAncycsICAnXFx1MDE1ZCc6ICdzJywgJ1xcdTAxNWYnOiAncycsICdcXHUwMTYxJzogJ3MnLFxuICAnXFx1MDE2Mic6ICdUJywgICdcXHUwMTY0JzogJ1QnLCAnXFx1MDE2Nic6ICdUJyxcbiAgJ1xcdTAxNjMnOiAndCcsICAnXFx1MDE2NSc6ICd0JywgJ1xcdTAxNjcnOiAndCcsXG4gICdcXHUwMTY4JzogJ1UnLCAgJ1xcdTAxNmEnOiAnVScsICdcXHUwMTZjJzogJ1UnLCAnXFx1MDE2ZSc6ICdVJywgJ1xcdTAxNzAnOiAnVScsICdcXHUwMTcyJzogJ1UnLFxuICAnXFx1MDE2OSc6ICd1JywgICdcXHUwMTZiJzogJ3UnLCAnXFx1MDE2ZCc6ICd1JywgJ1xcdTAxNmYnOiAndScsICdcXHUwMTcxJzogJ3UnLCAnXFx1MDE3Myc6ICd1JyxcbiAgJ1xcdTAxNzQnOiAnVycsICAnXFx1MDE3NSc6ICd3JyxcbiAgJ1xcdTAxNzYnOiAnWScsICAnXFx1MDE3Nyc6ICd5JywgJ1xcdTAxNzgnOiAnWScsXG4gICdcXHUwMTc5JzogJ1onLCAgJ1xcdTAxN2InOiAnWicsICdcXHUwMTdkJzogJ1onLFxuICAnXFx1MDE3YSc6ICd6JywgICdcXHUwMTdjJzogJ3onLCAnXFx1MDE3ZSc6ICd6JyxcbiAgJ1xcdTAxMzInOiAnSUonLCAnXFx1MDEzMyc6ICdpaicsXG4gICdcXHUwMTUyJzogJ09lJywgJ1xcdTAxNTMnOiAnb2UnLFxuICAnXFx1MDE0OSc6IFwiJ25cIiwgJ1xcdTAxN2YnOiAncydcbn07XG5cbi8qKlxuICogVXNlZCBieSBgXy5kZWJ1cnJgIHRvIGNvbnZlcnQgTGF0aW4tMSBTdXBwbGVtZW50IGFuZCBMYXRpbiBFeHRlbmRlZC1BXG4gKiBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXR0ZXIgVGhlIG1hdGNoZWQgbGV0dGVyIHRvIGRlYnVyci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGRlYnVycmVkIGxldHRlci5cbiAqL1xudmFyIGRlYnVyckxldHRlciA9IGJhc2VQcm9wZXJ0eU9mKGRlYnVycmVkTGV0dGVycyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVidXJyTGV0dGVyO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG4iLCJ2YXIgZGVidXJyTGV0dGVyID0gcmVxdWlyZSgnLi9fZGVidXJyTGV0dGVyJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIExhdGluIFVuaWNvZGUgbGV0dGVycyAoZXhjbHVkaW5nIG1hdGhlbWF0aWNhbCBvcGVyYXRvcnMpLiAqL1xudmFyIHJlTGF0aW4gPSAvW1xceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHhmZlxcdTAxMDAtXFx1MDE3Zl0vZztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3MpIGFuZFxuICogW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrcyBmb3Igc3ltYm9sc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzX2Zvcl9TeW1ib2xzKS5cbiAqL1xudmFyIHJlQ29tYm9NYXJrID0gUmVnRXhwKHJzQ29tYm8sICdnJyk7XG5cbi8qKlxuICogRGVidXJycyBgc3RyaW5nYCBieSBjb252ZXJ0aW5nXG4gKiBbTGF0aW4tMSBTdXBwbGVtZW50XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbi0xX1N1cHBsZW1lbnRfKFVuaWNvZGVfYmxvY2spI0NoYXJhY3Rlcl90YWJsZSlcbiAqIGFuZCBbTGF0aW4gRXh0ZW5kZWQtQV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW5fRXh0ZW5kZWQtQSlcbiAqIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycyBhbmQgcmVtb3ZpbmdcbiAqIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3NdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrcykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gZGVidXJyLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZGVidXJyZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlYnVycignZMOpasOgIHZ1Jyk7XG4gKiAvLyA9PiAnZGVqYSB2dSdcbiAqL1xuZnVuY3Rpb24gZGVidXJyKHN0cmluZykge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICByZXR1cm4gc3RyaW5nICYmIHN0cmluZy5yZXBsYWNlKHJlTGF0aW4sIGRlYnVyckxldHRlcikucmVwbGFjZShyZUNvbWJvTWFyaywgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYnVycjtcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIHdvcmRzIGNvbXBvc2VkIG9mIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLiAqL1xudmFyIHJlQXNjaWlXb3JkID0gL1teXFx4MDAtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4N2ZdKy9nO1xuXG4vKipcbiAqIFNwbGl0cyBhbiBBU0NJSSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIGFzY2lpV29yZHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVBc2NpaVdvcmQpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpV29yZHM7XG4iLCIvKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB0aGF0IG5lZWQgYSBtb3JlIHJvYnVzdCByZWdleHAgdG8gbWF0Y2ggd29yZHMuICovXG52YXIgcmVIYXNVbmljb2RlV29yZCA9IC9bYS16XVtBLVpdfFtBLVpdezJ9W2Etel18WzAtOV1bYS16QS1aXXxbYS16QS1aXVswLTldfFteYS16QS1aMC05IF0vO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBhIHdvcmQgY29tcG9zZWQgb2YgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHdvcmQgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzVW5pY29kZVdvcmQoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGVXb3JkLnRlc3Qoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNVbmljb2RlV29yZDtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc0RpbmdiYXRSYW5nZSA9ICdcXFxcdTI3MDAtXFxcXHUyN2JmJyxcbiAgICByc0xvd2VyUmFuZ2UgPSAnYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmJyxcbiAgICByc01hdGhPcFJhbmdlID0gJ1xcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjcnLFxuICAgIHJzTm9uQ2hhclJhbmdlID0gJ1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZicsXG4gICAgcnNQdW5jdHVhdGlvblJhbmdlID0gJ1xcXFx1MjAwMC1cXFxcdTIwNmYnLFxuICAgIHJzU3BhY2VSYW5nZSA9ICcgXFxcXHRcXFxceDBiXFxcXGZcXFxceGEwXFxcXHVmZWZmXFxcXG5cXFxcclxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MTY4MFxcXFx1MTgwZVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwYVxcXFx1MjAyZlxcXFx1MjA1ZlxcXFx1MzAwMCcsXG4gICAgcnNVcHBlclJhbmdlID0gJ0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZScsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnLFxuICAgIHJzQnJlYWtSYW5nZSA9IHJzTWF0aE9wUmFuZ2UgKyByc05vbkNoYXJSYW5nZSArIHJzUHVuY3R1YXRpb25SYW5nZSArIHJzU3BhY2VSYW5nZTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXBvcyA9IFwiWydcXHUyMDE5XVwiLFxuICAgIHJzQnJlYWsgPSAnWycgKyByc0JyZWFrUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJyxcbiAgICByc0RpZ2l0cyA9ICdcXFxcZCsnLFxuICAgIHJzRGluZ2JhdCA9ICdbJyArIHJzRGluZ2JhdFJhbmdlICsgJ10nLFxuICAgIHJzTG93ZXIgPSAnWycgKyByc0xvd2VyUmFuZ2UgKyAnXScsXG4gICAgcnNNaXNjID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyByc0JyZWFrUmFuZ2UgKyByc0RpZ2l0cyArIHJzRGluZ2JhdFJhbmdlICsgcnNMb3dlclJhbmdlICsgcnNVcHBlclJhbmdlICsgJ10nLFxuICAgIHJzRml0eiA9ICdcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0nLFxuICAgIHJzTW9kaWZpZXIgPSAnKD86JyArIHJzQ29tYm8gKyAnfCcgKyByc0ZpdHogKyAnKScsXG4gICAgcnNOb25Bc3RyYWwgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc1JlZ2lvbmFsID0gJyg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn0nLFxuICAgIHJzU3VyclBhaXIgPSAnW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdJyxcbiAgICByc1VwcGVyID0gJ1snICsgcnNVcHBlclJhbmdlICsgJ10nLFxuICAgIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSByZWdleGVzLiAqL1xudmFyIHJzTWlzY0xvd2VyID0gJyg/OicgKyByc0xvd2VyICsgJ3wnICsgcnNNaXNjICsgJyknLFxuICAgIHJzTWlzY1VwcGVyID0gJyg/OicgKyByc1VwcGVyICsgJ3wnICsgcnNNaXNjICsgJyknLFxuICAgIHJzT3B0Q29udHJMb3dlciA9ICcoPzonICsgcnNBcG9zICsgJyg/OmR8bGx8bXxyZXxzfHR8dmUpKT8nLFxuICAgIHJzT3B0Q29udHJVcHBlciA9ICcoPzonICsgcnNBcG9zICsgJyg/OkR8TEx8TXxSRXxTfFR8VkUpKT8nLFxuICAgIHJlT3B0TW9kID0gcnNNb2RpZmllciArICc/JyxcbiAgICByc09wdFZhciA9ICdbJyArIHJzVmFyUmFuZ2UgKyAnXT8nLFxuICAgIHJzT3B0Sm9pbiA9ICcoPzonICsgcnNaV0ogKyAnKD86JyArIFtyc05vbkFzdHJhbCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNPcHRWYXIgKyByZU9wdE1vZCArICcpKicsXG4gICAgcnNPcmRMb3dlciA9ICdcXFxcZCooPzoxc3R8Mm5kfDNyZHwoPyFbMTIzXSlcXFxcZHRoKSg/PVxcXFxifFtBLVpfXSknLFxuICAgIHJzT3JkVXBwZXIgPSAnXFxcXGQqKD86MVNUfDJORHwzUkR8KD8hWzEyM10pXFxcXGRUSCkoPz1cXFxcYnxbYS16X10pJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNFbW9qaSA9ICcoPzonICsgW3JzRGluZ2JhdCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNTZXE7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGNvbXBsZXggb3IgY29tcG91bmQgd29yZHMuICovXG52YXIgcmVVbmljb2RlV29yZCA9IFJlZ0V4cChbXG4gIHJzVXBwZXIgKyAnPycgKyByc0xvd2VyICsgJysnICsgcnNPcHRDb250ckxvd2VyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciwgJyQnXS5qb2luKCd8JykgKyAnKScsXG4gIHJzTWlzY1VwcGVyICsgJysnICsgcnNPcHRDb250clVwcGVyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciArIHJzTWlzY0xvd2VyLCAnJCddLmpvaW4oJ3wnKSArICcpJyxcbiAgcnNVcHBlciArICc/JyArIHJzTWlzY0xvd2VyICsgJysnICsgcnNPcHRDb250ckxvd2VyLFxuICByc1VwcGVyICsgJysnICsgcnNPcHRDb250clVwcGVyLFxuICByc09yZFVwcGVyLFxuICByc09yZExvd2VyLFxuICByc0RpZ2l0cyxcbiAgcnNFbW9qaVxuXS5qb2luKCd8JyksICdnJyk7XG5cbi8qKlxuICogU3BsaXRzIGEgVW5pY29kZSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVXb3JkcyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGVXb3JkKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmljb2RlV29yZHM7XG4iLCJ2YXIgYXNjaWlXb3JkcyA9IHJlcXVpcmUoJy4vX2FzY2lpV29yZHMnKSxcbiAgICBoYXNVbmljb2RlV29yZCA9IHJlcXVpcmUoJy4vX2hhc1VuaWNvZGVXb3JkJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyksXG4gICAgdW5pY29kZVdvcmRzID0gcmVxdWlyZSgnLi9fdW5pY29kZVdvcmRzJyk7XG5cbi8qKlxuICogU3BsaXRzIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge1JlZ0V4cHxzdHJpbmd9IFtwYXR0ZXJuXSBUaGUgcGF0dGVybiB0byBtYXRjaCB3b3Jkcy5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLndvcmRzKCdmcmVkLCBiYXJuZXksICYgcGViYmxlcycpO1xuICogLy8gPT4gWydmcmVkJywgJ2Jhcm5leScsICdwZWJibGVzJ11cbiAqXG4gKiBfLndvcmRzKCdmcmVkLCBiYXJuZXksICYgcGViYmxlcycsIC9bXiwgXSsvZyk7XG4gKiAvLyA9PiBbJ2ZyZWQnLCAnYmFybmV5JywgJyYnLCAncGViYmxlcyddXG4gKi9cbmZ1bmN0aW9uIHdvcmRzKHN0cmluZywgcGF0dGVybiwgZ3VhcmQpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgcGF0dGVybiA9IGd1YXJkID8gdW5kZWZpbmVkIDogcGF0dGVybjtcblxuICBpZiAocGF0dGVybiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhhc1VuaWNvZGVXb3JkKHN0cmluZykgPyB1bmljb2RlV29yZHMoc3RyaW5nKSA6IGFzY2lpV29yZHMoc3RyaW5nKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nLm1hdGNoKHBhdHRlcm4pIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdvcmRzO1xuIiwidmFyIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBkZWJ1cnIgPSByZXF1aXJlKCcuL2RlYnVycicpLFxuICAgIHdvcmRzID0gcmVxdWlyZSgnLi93b3JkcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBcG9zID0gXCJbJ1xcdTIwMTldXCI7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGFwb3N0cm9waGVzLiAqL1xudmFyIHJlQXBvcyA9IFJlZ0V4cChyc0Fwb3MsICdnJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uY2FtZWxDYXNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNvbWJpbmUgZWFjaCB3b3JkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29tcG91bmRlciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29tcG91bmRlcihjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFycmF5UmVkdWNlKHdvcmRzKGRlYnVycihzdHJpbmcpLnJlcGxhY2UocmVBcG9zLCAnJykpLCBjYWxsYmFjaywgJycpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNvbXBvdW5kZXI7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnNsaWNlYCB3aXRob3V0IGFuIGl0ZXJhdGVlIGNhbGwgZ3VhcmQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzbGljZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBzbGljZSBvZiBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG4gIH1cbiAgZW5kID0gZW5kID4gbGVuZ3RoID8gbGVuZ3RoIDogZW5kO1xuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5ndGg7XG4gIH1cbiAgbGVuZ3RoID0gc3RhcnQgPiBlbmQgPyAwIDogKChlbmQgLSBzdGFydCkgPj4+IDApO1xuICBzdGFydCA+Pj49IDA7XG5cbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGFycmF5W2luZGV4ICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNsaWNlO1xuIiwidmFyIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4vX2Jhc2VTbGljZScpO1xuXG4vKipcbiAqIENhc3RzIGBhcnJheWAgdG8gYSBzbGljZSBpZiBpdCdzIG5lZWRlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHNsaWNlLlxuICovXG5mdW5jdGlvbiBjYXN0U2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQ7XG4gIHJldHVybiAoIXN0YXJ0ICYmIGVuZCA+PSBsZW5ndGgpID8gYXJyYXkgOiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RTbGljZTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB3aXRoIFt6ZXJvLXdpZHRoIGpvaW5lcnMgb3IgY29kZSBwb2ludHMgZnJvbSB0aGUgYXN0cmFsIHBsYW5lc10oaHR0cDovL2Vldi5lZS9ibG9nLzIwMTUvMDkvMTIvZGFyay1jb3JuZXJzLW9mLXVuaWNvZGUvKS4gKi9cbnZhciByZUhhc1VuaWNvZGUgPSBSZWdFeHAoJ1snICsgcnNaV0ogKyByc0FzdHJhbFJhbmdlICArIHJzQ29tYm9SYW5nZSArIHJzVmFyUmFuZ2UgKyAnXScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBVbmljb2RlIHN5bWJvbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgc3ltYm9sIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1VuaWNvZGUoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGUudGVzdChzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1VuaWNvZGU7XG4iLCIvKipcbiAqIENvbnZlcnRzIGFuIEFTQ0lJIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhc2NpaVRvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpVG9BcnJheTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0FzdHJhbCA9ICdbJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNTeW1ib2wgPSAnKD86JyArIFtyc05vbkFzdHJhbCArIHJzQ29tYm8gKyAnPycsIHJzQ29tYm8sIHJzUmVnaW9uYWwsIHJzU3VyclBhaXIsIHJzQXN0cmFsXS5qb2luKCd8JykgKyAnKSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIFtzdHJpbmcgc3ltYm9sc10oaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtdW5pY29kZSkuICovXG52YXIgcmVVbmljb2RlID0gUmVnRXhwKHJzRml0eiArICcoPz0nICsgcnNGaXR6ICsgJyl8JyArIHJzU3ltYm9sICsgcnNTZXEsICdnJyk7XG5cbi8qKlxuICogQ29udmVydHMgYSBVbmljb2RlIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiB1bmljb2RlVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGUpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWNvZGVUb0FycmF5O1xuIiwidmFyIGFzY2lpVG9BcnJheSA9IHJlcXVpcmUoJy4vX2FzY2lpVG9BcnJheScpLFxuICAgIGhhc1VuaWNvZGUgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlJyksXG4gICAgdW5pY29kZVRvQXJyYXkgPSByZXF1aXJlKCcuL191bmljb2RlVG9BcnJheScpO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gaGFzVW5pY29kZShzdHJpbmcpXG4gICAgPyB1bmljb2RlVG9BcnJheShzdHJpbmcpXG4gICAgOiBhc2NpaVRvQXJyYXkoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb0FycmF5O1xuIiwidmFyIGNhc3RTbGljZSA9IHJlcXVpcmUoJy4vX2Nhc3RTbGljZScpLFxuICAgIGhhc1VuaWNvZGUgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlJyksXG4gICAgc3RyaW5nVG9BcnJheSA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvQXJyYXknKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5sb3dlckZpcnN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG5hbWUgb2YgdGhlIGBTdHJpbmdgIGNhc2UgbWV0aG9kIHRvIHVzZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhc2VGaXJzdChtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuXG4gICAgdmFyIHN0clN5bWJvbHMgPSBoYXNVbmljb2RlKHN0cmluZylcbiAgICAgID8gc3RyaW5nVG9BcnJheShzdHJpbmcpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIHZhciBjaHIgPSBzdHJTeW1ib2xzXG4gICAgICA/IHN0clN5bWJvbHNbMF1cbiAgICAgIDogc3RyaW5nLmNoYXJBdCgwKTtcblxuICAgIHZhciB0cmFpbGluZyA9IHN0clN5bWJvbHNcbiAgICAgID8gY2FzdFNsaWNlKHN0clN5bWJvbHMsIDEpLmpvaW4oJycpXG4gICAgICA6IHN0cmluZy5zbGljZSgxKTtcblxuICAgIHJldHVybiBjaHJbbWV0aG9kTmFtZV0oKSArIHRyYWlsaW5nO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNhc2VGaXJzdDtcbiIsInZhciBjcmVhdGVDYXNlRmlyc3QgPSByZXF1aXJlKCcuL19jcmVhdGVDYXNlRmlyc3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGBzdHJpbmdgIHRvIHVwcGVyIGNhc2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udXBwZXJGaXJzdCgnZnJlZCcpO1xuICogLy8gPT4gJ0ZyZWQnXG4gKlxuICogXy51cHBlckZpcnN0KCdGUkVEJyk7XG4gKiAvLyA9PiAnRlJFRCdcbiAqL1xudmFyIHVwcGVyRmlyc3QgPSBjcmVhdGVDYXNlRmlyc3QoJ3RvVXBwZXJDYXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdXBwZXJGaXJzdDtcbiIsInZhciBjcmVhdGVDb21wb3VuZGVyID0gcmVxdWlyZSgnLi9fY3JlYXRlQ29tcG91bmRlcicpLFxuICAgIHVwcGVyRmlyc3QgPSByZXF1aXJlKCcuL3VwcGVyRmlyc3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0b1xuICogW3N0YXJ0IGNhc2VdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xldHRlcl9jYXNlI1N0eWxpc3RpY19vcl9zcGVjaWFsaXNlZF91c2FnZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjEuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0YXJ0IGNhc2VkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5zdGFydENhc2UoJy0tZm9vLWJhci0tJyk7XG4gKiAvLyA9PiAnRm9vIEJhcidcbiAqXG4gKiBfLnN0YXJ0Q2FzZSgnZm9vQmFyJyk7XG4gKiAvLyA9PiAnRm9vIEJhcidcbiAqXG4gKiBfLnN0YXJ0Q2FzZSgnX19GT09fQkFSX18nKTtcbiAqIC8vID0+ICdGT08gQkFSJ1xuICovXG52YXIgc3RhcnRDYXNlID0gY3JlYXRlQ29tcG91bmRlcihmdW5jdGlvbihyZXN1bHQsIHdvcmQsIGluZGV4KSB7XG4gIHJldHVybiByZXN1bHQgKyAoaW5kZXggPyAnICcgOiAnJykgKyB1cHBlckZpcnN0KHdvcmQpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnRDYXNlO1xuIiwiaW1wb3J0IHsgaTE4biBhcyBJMThuLCBURnVuY3Rpb24sIFRPcHRpb25zIH0gZnJvbSAnaTE4bmV4dCdcclxuaW1wb3J0IHN0YXJ0Q2FzZSBmcm9tICdsb2Rhc2gvc3RhcnRDYXNlJ1xyXG5cclxuLyoqXHJcbiAqIEBtZW1iZXJvZiBUcmFuc2xhdGVGdW5jdGlvbnNcclxuICogQGFsaWFzIFRyYW5zbGF0ZUZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBUcmFuc2xhdGVGdW5jdGlvbiA9IChcclxuICAvKipcclxuICAgKiBrd3kgd2hpY2ggc2hvdWxkIGJlIHRyYW5zbGF0ZWQgaW4gYSBnaXZlbiBuYW1lc3BhY2VcclxuICAgKi9cclxuICBrZXk6IHN0cmluZyxcclxuICAvKipcclxuICAgKiBPcHRpb25hbCByZXNvdXJjZUlkIG9yIFtUcmFuc2xhdGUgb3B0aW9uc117QGxpbmsgaHR0cHM6Ly93d3cuaTE4bmV4dC5jb20vb3ZlcnZpZXcvY29uZmlndXJhdGlvbi1vcHRpb25zfVxyXG4gICAqL1xyXG4gIHJlc291cmNlSWQ/OiBzdHJpbmcgfCBUT3B0aW9ucyxcclxuICAvKipcclxuICAgKiBbVHJhbnNsYXRlIG9wdGlvbnNde0BsaW5rIGh0dHBzOi8vd3d3LmkxOG5leHQuY29tL292ZXJ2aWV3L2NvbmZpZ3VyYXRpb24tb3B0aW9uc31cclxuICAgKi9cclxuICBvcHRpb25zPzogVE9wdGlvbnNcclxuKSA9PiBzdHJpbmdcclxuXHJcbi8qKlxyXG4gKiBUcmFuc2xhdGUgRnVuY3Rpb25zIGFyZSB0aGUgaGVscGVyIGZ1bmN0aW9ucyB3aGljaCB5b3UgY2FuIHVzZSB0byB0cmFuc2xhdGVcclxuICogeW91ciBhcHBsaWNhdGlvbi5cclxuICpcclxuICogT24gdGhlIGZyb250ZWQgdGhleSBjYW4gYmUgdXNlZCB3aXRoIHtAbGluayB1c2VUcmFuc2xhdGlvbn0gaG9vay4gT24gdGhlIGJhY2tlbmRcclxuICogdGhleSBhcmUgaW5qZWN0ZWQgdG8gYW55IHtAbGluayBBZG1pbkJyb30gaW5zdGFuY2UgYW5kIHtAbGluayBBY3Rpb25Db250ZXh0fS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRlRnVuY3Rpb25zIHtcclxuICAvKipcclxuICAgKiBzaG9ydGN1dCBmb3IgSTE4bi50cmFuc2xhdGUgZnVuY3Rpb24uXHJcbiAgICogQHNlZSBodHRwczovL3d3dy5pMThuZXh0LmNvbS9vdmVydmlldy9hcGkjdFxyXG4gICAqL1xyXG4gIHQ6IFRGdW5jdGlvbjtcclxuICAvKipcclxuICAgKiBJMThuLnRyYW5zbGF0ZSBmdW5jdGlvbi5cclxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LmkxOG5leHQuY29tL292ZXJ2aWV3L2FwaSN0XHJcbiAgICovXHJcbiAgdHJhbnNsYXRlOiBURnVuY3Rpb247XHJcbiAgLyoqXHJcbiAgICogU2hvcnRjdXQgZm9yIHtAbGluayBUcmFuc2xhdGVGdW5jdGlvbnMjdHJhbnNsYXRlQWN0aW9ufVxyXG4gICAqL1xyXG4gIHRhOiBUcmFuc2xhdGVGdW5jdGlvbjtcclxuICAvKipcclxuICAgKiBUcmFuc2xhdGVzIGFsbCBbYWN0aW9uc117QGxpbmsgQWN0aW9ufSwgdG8gYmUgbW9yZSBzcGVjaWZpYyAtIHRoZWlyIGxhYmVscy5cclxuICAgKiBCeSBkZWZhdWx0LCBpdCBsb29rcyBmb3IgYSBbdHJhbnNsYXRpb24ga2V5XXtAbGluayBMb2NhbGVUcmFuc2xhdGlvbnN9IGluXHJcbiAgICogYHJlc291cmNlLntyZXNvdXJjZUlkfS5hY3Rpb25zLnthY3Rpb25OYW1lfWAsIHdoZW4gaXQgZG9lc24ndCBmaW5kXHJcbiAgICogdGhhdCwgdGhlIGxvb2t1cCBpcyBtb3ZlZCB0byBgYWN0aW9ucy57YWN0aW9uTmFtZX1gLlxyXG4gICAqIEZpbmFsbHksIHdoZW4gdGhhdCBhbHNvIGZhaWxzLCBpdCByZXR1cm5zIHN0YXJ0Q2FzZSBvZiB0aGUgYWN0aW9uIG5hbWUuXHJcbiAgICovXHJcbiAgdHJhbnNsYXRlQWN0aW9uOiBUcmFuc2xhdGVGdW5jdGlvbjtcclxuICAvKipcclxuICAgKiBTaG9ydGN1dCBmb3Ige0BsaW5rIFRyYW5zbGF0ZUZ1bmN0aW9ucyN0cmFuc2xhdGVCdXR0b259XHJcbiAgICovXHJcbiAgdGI6IFRyYW5zbGF0ZUZ1bmN0aW9uO1xyXG4gIC8qKlxyXG4gICAqIFRyYW5zbGF0ZXMgYWxsIGJ1dHRvbnMuXHJcbiAgICogQnkgZGVmYXVsdCwgaXQgbG9va3MgZm9yIGEgW3RyYW5zbGF0aW9uIGtleV17QGxpbmsgTG9jYWxlVHJhbnNsYXRpb25zfSBpblxyXG4gICAqIGByZXNvdXJjZS57cmVzb3VyY2VJZH0uYnV0dG9ucy57YWN0aW9uTmFtZX1gLCB3aGVuIGl0IGRvZXNuJ3QgZmluZFxyXG4gICAqIHRoYXQsIHRoZSBsb29rdXAgaXMgbW92ZWQgdG8gYGJ1dHRvbnMue2FjdGlvbk5hbWV9YC5cclxuICAgKiBGaW5hbGx5LCB3aGVuIHRoYXQgYWxzbyBmYWlscywgaXQgcmV0dXJucyBzdGFydENhc2Ugb2YgdGhlIGdpdmVuIGJ1dHRvbiBuYW1lLlxyXG4gICAqL1xyXG4gIHRyYW5zbGF0ZUJ1dHRvbjogVHJhbnNsYXRlRnVuY3Rpb247XHJcbiAgLyoqXHJcbiAgICogU2hvcnRjdXQgZm9yIHtAbGluayBUcmFuc2xhdGVGdW5jdGlvbnMjdHJhbnNsYXRlTGFiZWx9XHJcbiAgICovXHJcbiAgdGw6IFRyYW5zbGF0ZUZ1bmN0aW9uO1xyXG4gIC8qKlxyXG4gICAqIFRyYW5zbGF0ZXMgYWxsIGxhYmVscy4gTW9zdCBvZiBhbGwgYWxsIHJlc291cmNlIG5hbWVzIGFyZSB0cmVhdGVkIGFzIGxhYmVscy5cclxuICAgKiBBbHNvLCBsYWJlbHMgYXJlIHRleHRzIGluIHRoZSB1c2VyIGludGVyZmFjZSB3aGljaCBjYW5ub3QgYmUgcmVjb2duaXplZFxyXG4gICAqIGFzIGFueSBvdGhlciB0eXBlLlxyXG4gICAqIEJ5IGRlZmF1bHQsIGl0IGxvb2tzIGZvciBhIFt0cmFuc2xhdGlvbiBrZXlde0BsaW5rIExvY2FsZVRyYW5zbGF0aW9uc30gaW5cclxuICAgKiBgcmVzb3VyY2Uue3Jlc291cmNlSWR9LmxhYmVscy57YWN0aW9uTmFtZX1gLCB3aGVuIGl0IGRvZXNuJ3QgZmluZFxyXG4gICAqIHRoYXQsIHRoZSBsb29rdXAgaXMgbW92ZWQgdG8gYGxhYmVscy57YWN0aW9uTmFtZX1gLlxyXG4gICAqIEZpbmFsbHksIHdoZW4gdGhhdCBhbHNvIGZhaWxzLCBpdCByZXR1cm5zIHN0YXJ0Q2FzZSBvZiB0aGUgZ2l2ZW4gbGFiZWwuXHJcbiAgICovXHJcbiAgdHJhbnNsYXRlTGFiZWw6IFRyYW5zbGF0ZUZ1bmN0aW9uO1xyXG4gIC8qKlxyXG4gICAqIFNob3J0Y3V0IGZvciB7QGxpbmsgVHJhbnNsYXRlRnVuY3Rpb25zI3RyYW5zbGF0ZVByb3BlcnR5fVxyXG4gICAqL1xyXG4gIHRwOiBUcmFuc2xhdGVGdW5jdGlvbjtcclxuICAvKipcclxuICAgKiBUcmFuc2xhdGVzIGFsbCB0aGUgcHJvcGVydHkgbmFtZXMuXHJcbiAgICogQnkgZGVmYXVsdCwgaXQgbG9va3MgZm9yIGEgW3RyYW5zbGF0aW9uIGtleV17QGxpbmsgTG9jYWxlVHJhbnNsYXRpb25zfSBpblxyXG4gICAqIGByZXNvdXJjZS57cmVzb3VyY2VJZH0ucHJvcGVydGllcy57cHJvcGVydHlQYXRofWAsIHdoZW4gaXQgZG9lc24ndCBmaW5kXHJcbiAgICogdGhhdCwgdGhlIGxvb2t1cCBpcyBtb3ZlZCB0byBgcHJvcGVydGllcy57cHJvcGVydHlQYXRofWAuIFdoZW4gdGhhdCBmYWlscyxcclxuICAgKiBpdCByZXR1cm5zIHN0YXJ0Q2FzZSBvZiB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZS5cclxuICAgKlxyXG4gICAqIFdoYXQgaXMgaW1wb3J0YW50IGhlcmUgaXMgdGhhdCB5b3UgY2FuIHB1dCBuZXN0ZWQgcHJvcGVydHkgYXMgd2VsbCwgSW4gdGhhdFxyXG4gICAqIGNhc2UgeW91IGhhdmUgdG8gcGFzcyBkb3R0ZWQgcGF0aDpcclxuICAgKlxyXG4gICAqIGBgYGphdmFzY3JpcHRcclxuICAgKiB7XHJcbiAgICogICBwcm9wZXJ0aWVzOiB7XHJcbiAgICogICAgICBwYXJlbnQ6ICdwYXJlbnQgcHJvcGVydHknLFxyXG4gICAqICAgICAgJ3BhcmVudC5uZXN0ZWQnOiAnbmVzdGVkIHByb3BlcnR5J1xyXG4gICAqICAgfVxyXG4gICAqIH1cclxuICAgKiBgYGBcclxuICAgKi9cclxuICB0cmFuc2xhdGVQcm9wZXJ0eTogVHJhbnNsYXRlRnVuY3Rpb247XHJcbiAgLyoqXHJcbiAgICogU2hvcnRjdXQgZm9yIHtAbGluayBUcmFuc2xhdGVGdW5jdGlvbnMjdHJhbnNsYXRlTWVzc2FnZX1cclxuICAgKi9cclxuICB0bTogVHJhbnNsYXRlRnVuY3Rpb247XHJcbiAgLyoqXHJcbiAgICogVHJhbnNsYXRlcyBhbGwgdGhlIG1lc3NhZ2VzIGluIHRoZSBhcHBsaWNhdGlvbi5cclxuICAgKiBCeSBkZWZhdWx0LCBpdCBsb29rcyBmb3IgYSBbdHJhbnNsYXRpb24ga2V5XXtAbGluayBMb2NhbGVUcmFuc2xhdGlvbnN9IGluXHJcbiAgICogYHJlc291cmNlLntyZXNvdXJjZUlkfS5tZXNzYWdlcy57bWVzc2FnZU5hbWV9YCwgd2hlbiBpdCBkb2Vzbid0IGZpbmRcclxuICAgKiB0aGF0LCB0aGUgbG9va3VwIGlzIG1vdmVkIHRvIGBtZXNzYWdlcy57bWVzc2FnZU5hbWV9YC5cclxuICAgKiBGaW5hbGx5LCB3aGVuIHRoYXQgYWxzbyBmYWlscywgaXQgcmV0dXJucyBzdGFydENhc2Ugb2YgdGhlIGdpdmVuIG1lc3NhZ2UgbmFtZS5cclxuICAgKi9cclxuICB0cmFuc2xhdGVNZXNzYWdlOiBUcmFuc2xhdGVGdW5jdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdE5hbWUgPSAobmFtZTogc3RyaW5nKTogc3RyaW5nID0+IG5hbWUuc3BsaXQoJy4nKS5qb2luKCcmIzQ2OycpXHJcblxyXG5jb25zdCB0cmFuc2xhdGUgPSAoXHJcbiAgaTE4bjogSTE4bixcclxuICBrZXk6IHN0cmluZyxcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgcmVzb3VyY2VJZD86IHN0cmluZyB8IFRPcHRpb25zLFxyXG4gIG9wdGlvbnM/OiBUT3B0aW9ucyxcclxuKTogc3RyaW5nID0+IHtcclxuICBjb25zdCByZWFsT3B0aW9uczogVE9wdGlvbnMgPSAodHlwZW9mIHJlc291cmNlSWQgPT09ICdzdHJpbmcnID8gb3B0aW9ucyA6IHJlc291cmNlSWQpIHx8IHt9XHJcbiAgY29uc3QgZm9ybWF0dGVkTmFtZSA9IGZvcm1hdE5hbWUobmFtZSlcclxuICBsZXQga2V5cyA9IFtgJHtrZXl9LiR7Zm9ybWF0dGVkTmFtZX1gXVxyXG4gIGlmIChyZXNvdXJjZUlkKSB7XHJcbiAgICBrZXlzID0gW2ByZXNvdXJjZXMuJHtyZXNvdXJjZUlkfS4ke2tleX0uJHtmb3JtYXR0ZWROYW1lfWAsIC4uLmtleXNdXHJcbiAgfVxyXG4gIGlmIChpMThuLmV4aXN0cyhrZXlzKSkge1xyXG4gICAgcmV0dXJuIGkxOG4udChrZXlzLCByZWFsT3B0aW9ucylcclxuICB9XHJcbiAgcmV0dXJuIHJlYWxPcHRpb25zLmRlZmF1bHRWYWx1ZSA/PyBzdGFydENhc2UobmFtZSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUZ1bmN0aW9ucyA9IChpMThuOiBJMThuKTogVHJhbnNsYXRlRnVuY3Rpb25zID0+IHtcclxuICBjb25zdCB0cmFuc2xhdGVBY3Rpb246IFRyYW5zbGF0ZUZ1bmN0aW9uID0gKGFjdGlvbk5hbWUsIHJlc291cmNlSWQsIG9wdGlvbnMpID0+IChcclxuICAgIHRyYW5zbGF0ZShpMThuLCAnYWN0aW9ucycsIGFjdGlvbk5hbWUgYXMgc3RyaW5nLCByZXNvdXJjZUlkLCBvcHRpb25zKVxyXG4gIClcclxuXHJcbiAgY29uc3QgdHJhbnNsYXRlQnV0dG9uOiBUcmFuc2xhdGVGdW5jdGlvbiA9IChcclxuICAgIGJ1dHRvbkxhYmVsLCByZXNvdXJjZUlkLCBvcHRpb25zLFxyXG4gICkgPT4gKFxyXG4gICAgdHJhbnNsYXRlKGkxOG4sICdidXR0b25zJywgYnV0dG9uTGFiZWwsIHJlc291cmNlSWQsIG9wdGlvbnMpXHJcbiAgKVxyXG5cclxuICBjb25zdCB0cmFuc2xhdGVMYWJlbDogVHJhbnNsYXRlRnVuY3Rpb24gPSAobGFiZWwsIHJlc291cmNlSWQsIG9wdGlvbnMpID0+IChcclxuICAgIHRyYW5zbGF0ZShpMThuLCAnbGFiZWxzJywgbGFiZWwgYXMgc3RyaW5nLCByZXNvdXJjZUlkLCBvcHRpb25zKVxyXG4gIClcclxuXHJcbiAgY29uc3QgdHJhbnNsYXRlUHJvcGVydHk6IFRyYW5zbGF0ZUZ1bmN0aW9uID0gKHByb3BlcnR5TmFtZSwgcmVzb3VyY2VJZCwgb3B0aW9ucykgPT4gKFxyXG4gICAgdHJhbnNsYXRlKGkxOG4sICdwcm9wZXJ0aWVzJywgcHJvcGVydHlOYW1lLCByZXNvdXJjZUlkLCBvcHRpb25zKVxyXG4gIClcclxuXHJcbiAgY29uc3QgdHJhbnNsYXRlTWVzc2FnZTogVHJhbnNsYXRlRnVuY3Rpb24gPSAobWVzc2FnZU5hbWUsIHJlc291cmNlSWQsIG9wdGlvbnMpID0+IChcclxuICAgIHRyYW5zbGF0ZShpMThuLCAnbWVzc2FnZXMnLCBtZXNzYWdlTmFtZSwgcmVzb3VyY2VJZCwgb3B0aW9ucylcclxuICApXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0cmFuc2xhdGVBY3Rpb24sXHJcbiAgICB0YTogdHJhbnNsYXRlQWN0aW9uLFxyXG4gICAgdHJhbnNsYXRlQnV0dG9uLFxyXG4gICAgdGI6IHRyYW5zbGF0ZUJ1dHRvbixcclxuICAgIHRyYW5zbGF0ZUxhYmVsLFxyXG4gICAgdGw6IHRyYW5zbGF0ZUxhYmVsLFxyXG4gICAgdHJhbnNsYXRlUHJvcGVydHksXHJcbiAgICB0cDogdHJhbnNsYXRlUHJvcGVydHksXHJcbiAgICB0cmFuc2xhdGVNZXNzYWdlLFxyXG4gICAgdG06IHRyYW5zbGF0ZU1lc3NhZ2UsXHJcbiAgICB0OiBpMThuLnQsXHJcbiAgICB0cmFuc2xhdGU6IGkxOG4udCxcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICB1c2VUcmFuc2xhdGlvbiBhcyBvcmlnaW5hbFVzZVRyYW5zbGF0aW9uLFxyXG59IGZyb20gJ3JlYWN0LWkxOG5leHQnXHJcbmltcG9ydCB7IFRGdW5jdGlvbiwgaTE4biB9IGZyb20gJ2kxOG5leHQnXHJcblxyXG5pbXBvcnQgeyBUcmFuc2xhdGVGdW5jdGlvbnMsIGNyZWF0ZUZ1bmN0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL3RyYW5zbGF0ZS1mdW5jdGlvbnMuZmFjdG9yeSdcclxuXHJcbi8qKlxyXG4gKiBFeHRlbmRzIHtAbGluayBUcmFuc2xhdGVGdW5jdGlvbnN9LiBBcGFydCBmcm9tIHRoYXQgaXQgYWxzbyByZXR1cm5zIGFsbCB0aGUgcHJvcGVydGllc1xyXG4gKiBkZWZpbmVkIGJlbG93LlxyXG4gKlxyXG4gKiBgYGBqYXZhc2NyaXB0XHJcbiAqIGltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnYWRtaW4tYnJvJ1xyXG4gKlxyXG4gKiBjb25zdCBNeUNvbXBvbmVudCA9ICgpID0+IHtcclxuICogICBjb25zdCB7IHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG4gKlxyXG4gKiAgIHJldHVybiAoXHJcbiAqICAgICA8Qm94PlxyXG4gKiAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgb25DbGljaz17Li4ufT57dHJhbnNsYXRlQnV0dG9uKCdzYXZlJyl9PEJ1dHRvbj5cclxuICogICAgIDwvQm94PlxyXG4gKiAgIClcclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogQG1lbWJlcm9mIHVzZVRyYW5zbGF0aW9uXHJcbiAqIEBhbGlhcyBVc2VUcmFuc2xhdGlvblJlc3BvbnNlXHJcbiAqXHJcbiAqIEBwcm9wZXJ0eSB7VHJhbnNsYXRlRnVuY3Rpb259IC4uLiBBbGwgZnVuY3Rpb25zIGRlZmluZWQgaW4ge0BsaW5rIFRyYW5zbGF0ZUZ1bmN0aW9uc31cclxuICovXHJcbmV4cG9ydCB0eXBlIFVzZVRyYW5zbGF0aW9uUmVzcG9uc2UgPSBUcmFuc2xhdGVGdW5jdGlvbnMgJiB7XHJcbiAgdDogVEZ1bmN0aW9uO1xyXG4gIC8qKlxyXG4gICAqIEN1cnJlbnQgaTE4biBpbnN0YW5jZS5cclxuICAgKi9cclxuICBpMThuOiBpMThuO1xyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBpZiB0cmFuc2xhdGlvbiBzeXN0ZW0gaXMgcmVhZHkuIEluIEFkbWluQnJvIGl0IGlzIGFsd2F5cyByZWFkeSA6KS5cclxuICAgKi9cclxuICByZWFkeTogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBjbGFzc2Rlc2NcclxuICogRXh0ZW5kcyB0aGUgdXNlVHJhbnNsYXRpb24gaG9vayBmcm9tIHJlYWN0LWkxOG5leHQgbGlicmFyeS5cclxuICpcclxuICogUmV0dXJucyBhbGwgdGhlIHtAbGluayBUcmFuc2xhdGVGdW5jdGlvbnN9ICsgbWV0aG9kcyByZXR1cm5lZCBieSB0aGUgb3JpZ2luYWxcclxuICogdXNlVHJhbnNsYXRpb24gbWV0aG9kIGZyb20gcmVhY3QtaTE4bmV4dCBsaWtlOiBgaTE4bmAgaW5zdGFuY2UgYW5kIGByZWFkeWAgZmxhZy5cclxuICpcclxuICogQGNsYXNzXHJcbiAqIEBzdWJjYXRlZ29yeSBIb29rc1xyXG4gKiBAYnVuZGxlXHJcbiAqIEBoaWRlY29uc3RydWN0b3JcclxuICogQHJldHVybnMge1VzZVRyYW5zbGF0aW9uUmVzcG9uc2V9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXNlVHJhbnNsYXRpb24gPSAoKTogVXNlVHJhbnNsYXRpb25SZXNwb25zZSA9PiB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xyXG4gIGNvbnN0IHsgaTE4biwgLi4ucmVzdCB9ID0gb3JpZ2luYWxVc2VUcmFuc2xhdGlvbigpXHJcbiAgY29uc3QgdHJhbnNsYXRlRnVuY3Rpb25zID0gY3JlYXRlRnVuY3Rpb25zKGkxOG4pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5yZXN0LFxyXG4gICAgaTE4bixcclxuICAgIC4uLnRyYW5zbGF0ZUZ1bmN0aW9ucyxcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVRyYW5zbGF0aW9uXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiwgTmF2aWdhdGlvbkVsZW1lbnRQcm9wcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuXHJcbmltcG9ydCB7IHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5pbXBvcnQgVmlld0hlbHBlcnMgZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZS10cmFuc2xhdGlvbidcclxuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3N0b3JlJ1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBwYWdlcz86IFJlZHV4U3RhdGVbJ3BhZ2VzJ107XHJcbn1cclxuXHJcbmNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxyXG5cclxuY29uc3QgU2lkZWJhclBhZ2VzOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHBhZ2VzIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCB7IHRyYW5zbGF0ZUxhYmVsIH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxyXG5cclxuICBpZiAoIXBhZ2VzIHx8ICFwYWdlcy5sZW5ndGgpIHtcclxuICAgIHJldHVybiAoPD48Lz4pXHJcbiAgfVxyXG5cclxuICBjb25zdCBpc0FjdGl2ZSA9IChwYWdlKTogYm9vbGVhbiA9PiAoXHJcbiAgICAhIWxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKGAvcGFnZXMvJHtwYWdlLm5hbWV9YClcclxuICApXHJcblxyXG4gIGNvbnN0IGVsZW1lbnRzOiBBcnJheTxOYXZpZ2F0aW9uRWxlbWVudFByb3BzPiA9IHBhZ2VzLm1hcChwYWdlID0+ICh7XHJcbiAgICBpZDogcGFnZS5uYW1lLFxyXG4gICAgbGFiZWw6IHBhZ2UubmFtZSxcclxuICAgIGlzU2VsZWN0ZWQ6IGlzQWN0aXZlKHBhZ2UpLFxyXG4gICAgaWNvbjogcGFnZS5pY29uLFxyXG4gICAgaHJlZjogaC5wYWdlVXJsKHBhZ2UubmFtZSksXHJcbiAgICBvbkNsaWNrOiAoZXZlbnQsIGVsZW1lbnQpOiB2b2lkID0+IHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICBpZiAoZWxlbWVudC5ocmVmKSB7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKGVsZW1lbnQuaHJlZilcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9KSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZpZ2F0aW9uXHJcbiAgICAgIGxhYmVsPXt0cmFuc2xhdGVMYWJlbCgncGFnZXMnKX1cclxuICAgICAgZWxlbWVudHM9e2VsZW1lbnRzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJQYWdlc1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJveCwgU29mdHdhcmVCcm90aGVycyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuXHJcbmltcG9ydCBhbGxvd092ZXJyaWRlIGZyb20gJy4uLy4uLy4uL2hvYy9hbGxvdy1vdmVycmlkZSdcclxuXHJcbmNvbnN0IFNpZGViYXJGb290ZXI6IFJlYWN0LkZDID0gKCkgPT4gKFxyXG4gIDxCb3ggbXQ9XCJsZ1wiPlxyXG4gICAgPFNvZnR3YXJlQnJvdGhlcnMgLz5cclxuICA8L0JveD5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWxsb3dPdmVycmlkZShTaWRlYmFyRm9vdGVyLCAnU2lkZWJhckZvb3RlcicpXHJcbiIsImltcG9ydCBheGlvcywgeyBBeGlvc1Jlc3BvbnNlLCBBeGlvc0luc3RhbmNlLCBBeGlvc1JlcXVlc3RDb25maWcgfSBmcm9tICdheGlvcydcbmltcG9ydCB7XG4gIFJlc291cmNlQWN0aW9uUGFyYW1zLFxuICBCdWxrQWN0aW9uUGFyYW1zLFxuICBSZWNvcmRBY3Rpb25QYXJhbXMsXG4gIEFjdGlvblBhcmFtcyxcbn0gZnJvbSAnLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBSZWNvcmRBY3Rpb25SZXNwb25zZSwgQWN0aW9uUmVzcG9uc2UsIEJ1bGtBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uL2JhY2tlbmQvYWN0aW9ucy9hY3Rpb24uaW50ZXJmYWNlJ1xuXG5sZXQgZ2xvYmFsQW55OiBhbnkgPSB7fVxuXG50cnkge1xuICBnbG9iYWxBbnkgPSB3aW5kb3dcbn0gY2F0Y2ggKGVycm9yKSB7XG4gIGlmIChlcnJvci5tZXNzYWdlICE9PSAnd2luZG93IGlzIG5vdCBkZWZpbmVkJykge1xuICAgIHRocm93IGVycm9yXG4gIH0gZWxzZSB7XG4gICAgZ2xvYmFsQW55ID0geyBpc09uU2VydmVyOiB0cnVlIH1cbiAgfVxufVxuXG4vKipcbiAqIFR5cGUgb2YgYW4gW2F4aW9zIHJlcXVlc3Rde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9ibG9iL21hc3Rlci9pbmRleC5kLnRzI0w0M31cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBBeGlvc1JlcXVlc3RDb25maWdcbiAqIEBhbGlhcyBBeGlvc1JlcXVlc3RDb25maWdcbiAqIEBtZW1iZXJvZiBBcGlDbGllbnRcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zL2Jsb2IvbWFzdGVyL2luZGV4LmQudHMjTDQzXG4gKi9cblxuY29uc3QgY2hlY2tSZXNwb25zZSA9IChyZXNwb25zZTogQXhpb3NSZXNwb25zZSk6IHZvaWQgPT4ge1xuICBpZiAoZ2xvYmFsQW55LmlzT25TZXJ2ZXIpIHsgcmV0dXJuIH1cbiAgY29uc3QgbG9naW5VcmwgPSBbZ2xvYmFsQW55LmxvY2F0aW9uLm9yaWdpbiwgZ2xvYmFsQW55LlJFRFVYX1NUQVRFLnBhdGhzLmxvZ2luUGF0aF0uam9pbignJylcbiAgLy8gaWYgcmVzcG9uc2UgaGFzIHJlZGlyZWN0IHRvIGxvZ2luVXJsXG4gIGlmIChyZXNwb25zZS5yZXF1ZXN0LnJlc3BvbnNlVVJMXG4gICAgICAmJiByZXNwb25zZS5yZXF1ZXN0LnJlc3BvbnNlVVJMLm1hdGNoKGxvZ2luVXJsKVxuICApIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBhbGVydCgnWW91ciBzZXNzaW9uIGV4cGlyZWQuIFlvdSB3aWxsIGJlIHJlZGlyZWN0ZWQgdG8gbG9naW4gc2NyZWVuJylcbiAgICBnbG9iYWxBbnkubG9jYXRpb24uYXNzaWduKGxvZ2luVXJsKVxuICB9XG59XG5cbi8qKlxuICogRXh0ZW5kcyB7QGxpbmsgQXhpb3NSZXF1ZXN0Q29uZmlnfVxuICpcbiAqIEBhbGlhcyBBY3Rpb25BUElQYXJhbXNcbiAqIEBtZW1iZXJvZiBBcGlDbGllbnRcbiAqIEBwcm9wZXJ0eSB7YW55fSAgIC4uLiAgICBhbnkgcHJvcGVydHkgc3VwcG9ydGVkIGJ5IHtAbGluayBBeGlvc1JlcXVlc3RDb25maWd9XG4gKi9cbmV4cG9ydCB0eXBlIEFjdGlvbkFQSVBhcmFtcyA9IEF4aW9zUmVxdWVzdENvbmZpZyAmIEFjdGlvblBhcmFtc1xuXG4vKipcbiAqIEV4dGVuZHMge0BsaW5rIEFjdGlvbkFQSVBhcmFtc31cbiAqXG4gKiBAYWxpYXMgUmVzb3VyY2VBY3Rpb25BUElQYXJhbXNcbiAqIEBtZW1iZXJvZiBBcGlDbGllbnRcbiAqIEBwcm9wZXJ0eSB7YW55fSAgIC4uLiAgICBhbnkgcHJvcGVydHkgc3VwcG9ydGVkIGJ5IHtAbGluayBBeGlvc1JlcXVlc3RDb25maWd9XG4gKi9cbmV4cG9ydCB0eXBlIFJlc291cmNlQWN0aW9uQVBJUGFyYW1zID0gQXhpb3NSZXF1ZXN0Q29uZmlnICYgUmVzb3VyY2VBY3Rpb25QYXJhbXMgJiB7XG4gIHF1ZXJ5Pzogc3RyaW5nO1xufVxuLyoqXG4gKiBFeHRlbmRzIHtAbGluayBBY3Rpb25BUElQYXJhbXN9XG4gKlxuICogQGFsaWFzIFJlY29yZEFjdGlvbkFQSVBhcmFtc1xuICogQG1lbWJlcm9mIEFwaUNsaWVudFxuICogQHByb3BlcnR5IHthbnl9ICAgLi4uICAgIGFueSBwcm9wZXJ0eSBzdXBwb3J0ZWQgYnkge0BsaW5rIEFjdGlvbkFQSVBhcmFtc31cbiAqL1xuZXhwb3J0IHR5cGUgUmVjb3JkQWN0aW9uQVBJUGFyYW1zID0gQXhpb3NSZXF1ZXN0Q29uZmlnICYgUmVjb3JkQWN0aW9uUGFyYW1zXG5cbi8qKlxuICogRXh0ZW5kcyB7QGxpbmsgQWN0aW9uQVBJUGFyYW1zfVxuICpcbiAqIEBhbGlhcyBCdWxrQWN0aW9uQVBJUGFyYW1zXG4gKiBAbWVtYmVyb2YgQXBpQ2xpZW50XG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9ibG9iL21hc3Rlci9pbmRleC5kLnRzI0w0M1xuICogQHByb3BlcnR5IHthbnl9ICAgLi4uICAgIGFueSBwcm9wZXJ0eSBzdXBwb3J0ZWQgYnkge0BsaW5rIEFjdGlvbkFQSVBhcmFtc31cbiAqL1xuZXhwb3J0IHR5cGUgQnVsa0FjdGlvbkFQSVBhcmFtcyA9IEF4aW9zUmVxdWVzdENvbmZpZyAmIEJ1bGtBY3Rpb25QYXJhbXNcblxuXG4vKipcbiAqIEV4dGVuZHMge0BsaW5rIEF4aW9zUmVxdWVzdENvbmZpZ31cbiAqXG4gKiBAYWxpYXMgR2V0UGFnZUFQSVBhcmFtc1xuICogQG1lbWJlcm9mIEFwaUNsaWVudFxuICogQHByb3BlcnR5IHthbnl9ICAgLi4uICAgIGFueSBwcm9wZXJ0eSBzdXBwb3J0ZWQgYnkge0BsaW5rIEF4aW9zUmVxdWVzdENvbmZpZ31cbiAqL1xuZXhwb3J0IHR5cGUgR2V0UGFnZUFQSVBhcmFtcyA9IEF4aW9zUmVxdWVzdENvbmZpZyAmIHtcbiAgLyoqXG4gICAqIFVuaXF1ZSBwYWdlIG5hbWVcbiAgICovXG4gIHBhZ2VOYW1lOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQ2xpZW50IHdoaWNoIGFjY2VzcyB0aGUgYWRtaW4gQVBJLlxuICogVXNlIGl0IHRvIGZldGNoIGRhdGEgZnJvbSBhdXRvIGdlbmVyYXRlZCBBZG1pbkJybyBBUEkuXG4gKlxuICogSW4gdGhlIGJhY2tlbmQgaXQgdXNlcyBbYXhpb3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcykgY2xpZW50XG4gKiBsaWJyYXJ5LlxuICpcbiAqIFVzYWdlOlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IHsgQXBpQ2xpZW50IH0gZnJvbSAnYWRtaW4tYnJvJ1xuICpcbiAqIGNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxuICogLy8gZmV0Y2hpbmcgYWxsIHJlY29yZHNcbiAqIGFwaS5yZXNvdXJjZUFjdGlvbih7IHJlc291cmNlSWQ6ICdDb21tZW50cycsIGFjdGlvbk5hbWU6ICdsaXN0JyB9KS50aGVuKHJlc3VsdHMgPT4gey4uLn0pXG4gKiBgYGBcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2F4aW9zL2F4aW9zXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmNsYXNzIEFwaUNsaWVudCB7XG4gIHByaXZhdGUgYmFzZVVSTDogc3RyaW5nXG5cbiAgcHJpdmF0ZSBjbGllbnQ6IEF4aW9zSW5zdGFuY2VcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJhc2VVUkwgPSBBcGlDbGllbnQuZ2V0QmFzZVVybCgpXG4gICAgdGhpcy5jbGllbnQgPSBheGlvcy5jcmVhdGUoe1xuICAgICAgYmFzZVVSTDogdGhpcy5iYXNlVVJMLFxuICAgIH0pXG4gIH1cblxuICBzdGF0aWMgZ2V0QmFzZVVybCgpOiBzdHJpbmcge1xuICAgIGlmIChnbG9iYWxBbnkuaXNPblNlcnZlcikgeyByZXR1cm4gJycgfVxuICAgIHJldHVybiBbZ2xvYmFsQW55LmxvY2F0aW9uLm9yaWdpbiwgZ2xvYmFsQW55LlJFRFVYX1NUQVRFPy5wYXRocy5yb290UGF0aF0uam9pbignJylcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggYnkgcXVlcnkgc3RyaW5nIGZvciByZWNvcmRzIGluIGEgZ2l2ZW4gcmVzb3VyY2UuXG4gICAqXG4gICAqIEBwYXJhbSAgIHtPYmplY3R9ICBvcHRpb25zXG4gICAqIEBwYXJhbSAgIHtTdHJpbmd9ICBvcHRpb25zLnJlc291cmNlSWQgIGlkIG9mIGEge0BsaW5rIFJlc291cmNlSlNPTn1cbiAgICogQHBhcmFtICAge1N0cmluZ30gIG9wdGlvbnMucXVlcnkgICAgICAgcXVlcnkgc3RyaW5nXG4gICAqXG4gICAqIEByZXR1cm4gIHtQcm9taXNlPFNlYXJjaFJlc3BvbnNlPn1cbiAgICovXG4gIGFzeW5jIHNlYXJjaFJlY29yZHMoeyByZXNvdXJjZUlkLCBxdWVyeSB9OiB7XG4gICAgcmVzb3VyY2VJZDogc3RyaW5nO1xuICAgIHF1ZXJ5OiBzdHJpbmc7XG4gIH0pOiBQcm9taXNlPEFycmF5PFJlY29yZEpTT04+PiB7XG4gICAgaWYgKGdsb2JhbEFueS5pc09uU2VydmVyKSB7IHJldHVybiBbXSB9XG4gICAgY29uc3QgYWN0aW9uTmFtZSA9ICdzZWFyY2gnXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnJlc291cmNlQWN0aW9uKHsgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZSwgcXVlcnkgfSlcbiAgICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZS5kYXRhLnJlY29yZHNcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VzIGdpdmVuIHJlc291cmNlIHtAbGluayBBY3Rpb259IG9uIHRoZSBiYWNrZW5kLlxuICAgKlxuICAgKiBAcGFyYW0gICB7UmVzb3VyY2VBY3Rpb25BUElQYXJhbXN9ICAgICBvcHRpb25zXG4gICAqIEByZXR1cm4gIHtQcm9taXNlPEFjdGlvblJlc3BvbnNlPn0gICAgIHJlc3BvbnNlIGZyb20gYW4ge0BsaW5rIEFjdGlvbn1cbiAgICovXG4gIGFzeW5jIHJlc291cmNlQWN0aW9uKG9wdGlvbnM6IFJlc291cmNlQWN0aW9uQVBJUGFyYW1zKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPEFjdGlvblJlc3BvbnNlPj4ge1xuICAgIGNvbnN0IHsgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZSwgZGF0YSwgcXVlcnksIC4uLmF4aW9zUGFyYW1zIH0gPSBvcHRpb25zXG4gICAgbGV0IHVybCA9IGAvYXBpL3Jlc291cmNlcy8ke3Jlc291cmNlSWR9L2FjdGlvbnMvJHthY3Rpb25OYW1lfWBcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIGNvbnN0IHEgPSBlbmNvZGVVUklDb21wb25lbnQocXVlcnkpXG4gICAgICB1cmwgPSBbdXJsLCBxXS5qb2luKCcvJylcbiAgICB9XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgIHVybCxcbiAgICAgIG1ldGhvZDogZGF0YSA/ICdQT1NUJyA6ICdHRVQnLFxuICAgICAgLi4uYXhpb3NQYXJhbXMsXG4gICAgICBkYXRhLFxuICAgIH0pXG4gICAgY2hlY2tSZXNwb25zZShyZXNwb25zZSlcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VzIGdpdmVuIHJlY29yZCB7QGxpbmsgQWN0aW9ufSBvbiB0aGUgYmFja2VuZC5cbiAgICpcbiAgICogQHBhcmFtICAge1JlY29yZEFjdGlvbkFQSVBhcmFtc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuICB7UHJvbWlzZTxSZWNvcmRBY3Rpb25SZXNwb25zZT59ICAgICAgICAgICAgcmVzcG9uc2UgZnJvbSBhbiB7QGxpbmsgQWN0aW9ufVxuICAgKi9cbiAgYXN5bmMgcmVjb3JkQWN0aW9uKG9wdGlvbnM6IFJlY29yZEFjdGlvbkFQSVBhcmFtcyk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxSZWNvcmRBY3Rpb25SZXNwb25zZT4+IHtcbiAgICBjb25zdCB7IHJlc291cmNlSWQsIHJlY29yZElkLCBhY3Rpb25OYW1lLCBkYXRhLCAuLi5heGlvc1BhcmFtcyB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5jbGllbnQucmVxdWVzdCh7XG4gICAgICB1cmw6IGAvYXBpL3Jlc291cmNlcy8ke3Jlc291cmNlSWR9L3JlY29yZHMvJHtyZWNvcmRJZH0vJHthY3Rpb25OYW1lfWAsXG4gICAgICBtZXRob2Q6IGRhdGEgPyAnUE9TVCcgOiAnR0VUJyxcbiAgICAgIC4uLmF4aW9zUGFyYW1zLFxuICAgICAgZGF0YSxcbiAgICB9KVxuICAgIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyBnaXZlbiBidWxrIHtAbGluayBBY3Rpb259IG9uIHRoZSBiYWNrZW5kLlxuICAgKlxuICAgKiBAcGFyYW0gICB7QnVsa0FjdGlvbkFQSVBhcmFtc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuICB7UHJvbWlzZTxCdWxrQWN0aW9uUmVzcG9uc2U+fSAgICAgICAgICAgIHJlc3BvbnNlIGZyb20gYW4ge0BsaW5rIEFjdGlvbn1cbiAgICovXG4gIGFzeW5jIGJ1bGtBY3Rpb24ob3B0aW9uczogQnVsa0FjdGlvbkFQSVBhcmFtcyk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxCdWxrQWN0aW9uUmVzcG9uc2U+PiB7XG4gICAgY29uc3QgeyByZXNvdXJjZUlkLCByZWNvcmRJZHMsIGFjdGlvbk5hbWUsIGRhdGEsIC4uLmF4aW9zUGFyYW1zIH0gPSBvcHRpb25zXG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgICBwYXJhbXMuc2V0KCdyZWNvcmRJZHMnLCAocmVjb3JkSWRzIHx8IFtdKS5qb2luKCcsJykpXG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgL2FwaS9yZXNvdXJjZXMvJHtyZXNvdXJjZUlkfS9idWxrLyR7YWN0aW9uTmFtZX1gLFxuICAgICAgbWV0aG9kOiBkYXRhID8gJ1BPU1QnIDogJ0dFVCcsXG4gICAgICAuLi5heGlvc1BhcmFtcyxcbiAgICAgIGRhdGEsXG4gICAgICBwYXJhbXMsXG4gICAgfSlcbiAgICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgZGFzaGJvYXJkIGhhbmRsZXIuXG4gICAqXG4gICAqIEBwYXJhbSAgIHtBeGlvc1JlcXVlc3RDb25maWd9ICAgICAgIG9wdGlvbnNcbiAgICogQHJldHVybiAge1Byb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+Pn0gcmVzcG9uc2UgZnJvbSB0aGUgaGFuZGxlciBmdW5jdGlvbiBkZWZpbmVkIGluXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtAbGluayBBZG1pbkJyb09wdGlvbnMjZGFzaGJvYXJkfVxuICAgKi9cbiAgYXN5bmMgZ2V0RGFzaGJvYXJkKG9wdGlvbnM6IEF4aW9zUmVxdWVzdENvbmZpZyA9IHt9KTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY2xpZW50LmdldCgnL2FwaS9kYXNoYm9hcmQnLCBvcHRpb25zKVxuICAgIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyBoYW5kbGVyIGZ1bmN0aW9uIG9mIGdpdmVuIHBhZ2UgYW5kIHJldHVybnMgaXRzIHJlc3BvbnNlLlxuICAgKlxuICAgKiBAcGFyYW0gICB7R2V0UGFnZUFQSVBhcmFtc30gICAgICAgICAgICAgICAgb3B0aW9uc1xuICAgKiBAcmV0dXJuICB7UHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4+fSAgICAgcmVzcG9uc2UgZnJvbSB0aGUgaGFuZGxlciBvZiBnaXZlbiBwYWdlXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZpbmVkIGluIHtAbGluayBBZG1pbkJyb09wdGlvbnMjcGFnZXN9XG4gICAqL1xuICBhc3luYyBnZXRQYWdlKG9wdGlvbnM6IEdldFBhZ2VBUElQYXJhbXMpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8YW55Pj4ge1xuICAgIGNvbnN0IHsgcGFnZU5hbWUsIC4uLmF4aW9zUGFyYW1zIH0gPSBvcHRpb25zXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYC9hcGkvcGFnZXMvJHtwYWdlTmFtZX1gLFxuICAgICAgLi4uYXhpb3NQYXJhbXMsXG4gICAgfSlcbiAgICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZVxuICB9XG59XG5cbmV4cG9ydCB7XG4gIEFwaUNsaWVudCBhcyBkZWZhdWx0LFxuICBBcGlDbGllbnQsXG59XG4iLCJleHBvcnQgY29uc3QgRk9STV9WQUxVRV9OVUxMID0gJ19fRk9STV9WQUxVRV9OVUxMX18nXHJcbmV4cG9ydCBjb25zdCBGT1JNX1ZBTFVFX0VNUFRZX09CSkVDVCA9ICdfX0ZPUk1fVkFMVUVfRU1QVFlfT0JKRUNUX18nXHJcbmV4cG9ydCBjb25zdCBGT1JNX1ZBTFVFX0VNUFRZX0FSUkFZID0gJ19fRk9STV9WQUxVRV9FTVBUWV9BUlJBWV9fJ1xyXG5cclxuY29uc3QgaXNPYmplY3RPckFycmF5ID0gKHZhbHVlOiBhbnkpOiBib29sZWFuID0+IChcclxuICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXHJcbiAgJiYgKHZhbHVlIGFzIG9iamVjdCkuY29uc3RydWN0b3IgIT09IEZpbGVcclxuICAmJiAhKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSlcclxuKVxyXG5cclxuLyoqXHJcbiAqIENoYW5nZXMgUmVjb3JkSlNPTiB0aGF0IGl0IGNhbiBiZSBzZW5kIGFzIGEgRm9ybURhdGEgdG8gdGhlIGJhY2tlbmQuXHJcbiAqXHJcbiAqIEZvcm1EYXRhIGlzIHJlcXVpcmVkIGJlY2F1c2Ugd2UgYXJlIHNlbmRpbmcgZmlsZXMgdmlhIHRoZSB3aXJlLiBCdXQgaXQgaGFzIGxpbWl0YXRpb25zLlxyXG4gKiBOYW1lbHkgaXQgY2FuIG9ubHkgdHJhbnNwb3J0IGZpbGVzIGFuZCBzdHJpbmdzLiBUaGF0IGlzIHdoeSB3ZSBoYXZlIHRvIGNvbnZlcnQgc29tZVxyXG4gKiBzdGFuZGFyZCB0eXBlcyBsaWtlIE5VTEwgdG8gY29uc3RhbnRzIHNvIHRoZXkgY2FuIGJlIHByb3BlcnR5IGNvbnZlcnRlZCBiYWNrIGJ5IHRoZSBiYWNrZW5kLlxyXG4gKiBBbmQgdGh1cyBwcm9wZXJseSBoYW5kbGVkLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKiBAcGFyYW0gICB7UmVjb3JkSlNPTn0gIHJlY29yZFxyXG4gKiBAcmV0dXJuICB7Rm9ybURhdGF9XHJcbiAqL1xyXG5mdW5jdGlvbiBwYXJhbXNUb0Zvcm1EYXRhKHBhcmFtczogUmVjb3JkPHN0cmluZywgYW55Pik6IEZvcm1EYXRhIHtcclxuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcblxyXG4gIC8vIEFzc3VtZSB0aGF0IHBhcmFtcyBhcmUgZmxhdHRlZFxyXG4gIE9iamVjdC5lbnRyaWVzKHBhcmFtcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XHJcbiAgICAvLyB7QGxpbmsgdXBkYXRlUmVjb3JkfSBkb2VzIG5vdCBjaGFuZ2UgZW1wdHkgb2JqZWN0cyBcInt9XCIgLSBzbyBpbiBvcmRlciB0byBwcmV2ZW50IGhhdmluZ1xyXG4gICAgLy8gdGhlbSBjaGFuZ2VkIHRvIFwiW29iamVjdCBPYmplY3RdXCIgd2UgaGF2ZSB0byBzZXQgdGhlbSB0byBlbXB0eSBzdHJpbmdzLlxyXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiBmb3JtRGF0YS5zZXQoa2V5LCBGT1JNX1ZBTFVFX05VTEwpXHJcbiAgICB9XHJcbiAgICAvLyBGaWxlIG9iamVjdHMgaGFzIHRvIGdvIHRocm91Z2ggYmVjYXVzZSB0aGV5IGFyZSBoYW5kbGVkIGJ5IEZvcm1EYXRhXHJcbiAgICBpZiAoaXNPYmplY3RPckFycmF5KHZhbHVlKSkge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICByZXR1cm4gZm9ybURhdGEuc2V0KGtleSwgRk9STV9WQUxVRV9FTVBUWV9BUlJBWSlcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZm9ybURhdGEuc2V0KGtleSwgRk9STV9WQUxVRV9FTVBUWV9PQkpFQ1QpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gUmVzdCBnb2VzIGFzIGEgc3RhbmRhcmQgdmFsdWVcclxuICAgIHJldHVybiBmb3JtRGF0YS5zZXQoa2V5LCB2YWx1ZSBhcyBzdHJpbmcpXHJcbiAgfSlcclxuICByZXR1cm4gZm9ybURhdGFcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBwYXJhbXNUb0Zvcm1EYXRhIGFzIGRlZmF1bHQsXHJcbiAgcGFyYW1zVG9Gb3JtRGF0YSxcclxufVxyXG4iLCJpbXBvcnQgeyBOb3RpY2VNZXNzYWdlSW5TdGF0ZSB9IGZyb20gJy4uL3N0b3JlJ1xyXG5pbXBvcnQgeyBOb3RpY2VNZXNzYWdlIH0gZnJvbSAnLi4vLi4vaG9jL3dpdGgtbm90aWNlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9OT1RJQ0UgPSAnQUREX05PVElDRSdcclxuXHJcbmV4cG9ydCB0eXBlIEFkZE5vdGljZVJlc3BvbnNlID0ge1xyXG4gIHR5cGU6IHR5cGVvZiBBRERfTk9USUNFO1xyXG4gIGRhdGE6IE5vdGljZU1lc3NhZ2VJblN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkTm90aWNlID0gKGRhdGE6IE5vdGljZU1lc3NhZ2UgPSB7IG1lc3NhZ2U6ICcnIH0pOiBBZGROb3RpY2VSZXNwb25zZSA9PiAoe1xyXG4gIHR5cGU6IEFERF9OT1RJQ0UsXHJcbiAgZGF0YToge1xyXG4gICAgbWVzc2FnZTogZGF0YS5tZXNzYWdlLFxyXG4gICAgaWQ6IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCA5KSxcclxuICAgIHR5cGU6IGRhdGEudHlwZSB8fCAnc3VjY2VzcycsXHJcbiAgICBwcm9ncmVzczogMCxcclxuICB9LFxyXG59KVxyXG4iLCJpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBhZGROb3RpY2UgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2FkZC1ub3RpY2UnXHJcbmltcG9ydCB7IE5vdGljZU1lc3NhZ2UgfSBmcm9tICcuLi9ob2Mvd2l0aC1ub3RpY2UnXHJcblxyXG4vKipcclxuICogQG1lbWJlcm9mIHVzZU5vdGljZVxyXG4gKiBAYWxpYXMgQWRkTm90aWNlXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBBZGROb3RpY2UgPSAobm90aWNlOiBOb3RpY2VNZXNzYWdlKSA9PiBhbnk7XHJcblxyXG4vKipcclxuICogQGNsYXNzZGVzY1xyXG4gKiBIb29rIHdoaWNoIGFsbG93cyB5b3UgdG8gYWRkIG5vdGljZSBtZXNzYWdlIHRvIHRoZSBhcHAuXHJcbiAqXHJcbiAqIGBgYGphdmFzY3JpcHRcclxuICogaW1wb3J0IHsgdXNlTm90aWNlLCBCdXR0b24gfSBmcm9tICdhZG1pbi1icm8nXHJcbiAqXHJcbiAqIGNvbnN0IG15Q29tcG9uZW50ID0gKCkgPT4ge1xyXG4gKiAgIGNvbnN0IHNlbmROb3RpY2UgPSB1c2VOb3RpY2UoKVxyXG4gKiAgIHJlbmRlciAoXHJcbiAqICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNlbmROb3RpY2UoeyBtZXNzYWdlOiAnSSBhbSBhd2Vzb21lJyB9KX0+SSBhbSBhd2Vzb21lPC9CdXR0b24+XHJcbiAqICAgKVxyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAY2xhc3NcclxuICogQHN1YmNhdGVnb3J5IEhvb2tzXHJcbiAqIEBidW5kbGVcclxuICogQGhpZGVjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHVzZU5vdGljZSA9ICgpOiBBZGROb3RpY2UgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIHJldHVybiAobm90aWNlKTogYW55ID0+IGRpc3BhdGNoKGFkZE5vdGljZShub3RpY2UpKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VOb3RpY2VcclxuIiwiaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IFJlY29yZEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2FjdGlvbi5pbnRlcmZhY2UnXHJcblxyXG4vKipcclxuICogSGFuZGxlcnMgb2YgYWxsIFtBY3Rpb25zXXtAbGluayBBY3Rpb259IG9mIHR5cGUgYHJlY29yZGAgcmV0dXJucyByZWNvcmQuXHJcbiAqIERlcGVuZGluZyBvbiBhIHBsYWNlIGFuZCByZXNwb25zZSB3ZSBoYXZlIHRvIG1lcmdlIHdoYXQgd2FzIHJldHVybmVkXHJcbiAqIHRvIHRoZSBhY3R1YWwgc3RhdGUuIEl0IGlzIGRvbmUgaW4gZm9sbG93aW5nIHBsYWNlczpcclxuICogLSB7QGxpbmsgdXNlUmVjb3JkfSBob29rXHJcbiAqIC0ge0BsaW5rIFJlY29yZEluTGlzdH0gY29tcG9uZW50XHJcbiAqIC0ge0BsaW5rIFJlY29yZEFjdGlvbn0gY29tcG9uZW50XHJcbiAqXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5jb25zdCBtZXJnZVJlY29yZFJlc3BvbnNlID0gKHJlY29yZDogUmVjb3JkSlNPTiwgcmVzcG9uc2U6IFJlY29yZEFjdGlvblJlc3BvbnNlKTogUmVjb3JkSlNPTiA9PiAoe1xyXG4gIC8vIHdlIHN0YXJ0IGZyb20gdGhlIHJlc3BvbnNlIGJlY2F1c2UgaXQgY2FuIGhhdmUgZGlmZmVyZW50IHJlY29yZEFjdGlvbnMgb3IgYnVsa0FjdGlvbnNcclxuICAuLi4ocmVzcG9uc2UucmVjb3JkIHx8IHJlY29yZCksXHJcbiAgLy8gcmVjb3JkcyBoYXMgdG8gYmUgcmVzZXQgZXZlcnkgdGltZSBiZWNhdXNlIHNvIHRoYXQgdXNlciB3b250XHJcbiAgLy8gc2VlIG9sZCBlcnJvcnMgd2hpY2ggYXJlIG5vdCByZWxldmFudCBhbnltb3JlXHJcbiAgZXJyb3JzOiByZXNwb25zZS5yZWNvcmQuZXJyb3JzLFxyXG4gIHBvcHVsYXRlZDogeyAuLi5yZWNvcmQucG9wdWxhdGVkLCAuLi5yZXNwb25zZS5yZWNvcmQucG9wdWxhdGVkIH0sXHJcbiAgcGFyYW1zOiB7IC4uLnJlY29yZC5wYXJhbXMsIC4uLnJlc3BvbnNlLnJlY29yZC5wYXJhbXMgfSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lcmdlUmVjb3JkUmVzcG9uc2VcclxuIiwiY29uc3QgREVMSU1JVEVSID0gJy4nXHJcblxyXG5cclxuZXhwb3J0IHsgREVMSU1JVEVSIH1cclxuIiwiaW1wb3J0IHsgREVMSU1JVEVSIH0gZnJvbSAnLi9jb25zdGFudHMnXHJcbmltcG9ydCB7IEdldE9wdGlvbnMgfSBmcm9tICcuL2ZsYXQudHlwZXMnXHJcbi8vIHRoaXMgaXMgdGhlIHJlZ2V4IHVzZWQgdG8gZmluZCBhbGwgZXhpc3RpbmcgcHJvcGVydGllcyBzdGFydGluZyB3aXRoIGEga2V5XHJcblxyXG5leHBvcnQgY29uc3QgcHJvcGVydHlLZXlSZWdleCA9IChwcm9wZXJ0eVBhdGg6IHN0cmluZywgb3B0aW9ucz86IEdldE9wdGlvbnMpOiBSZWdFeHAgPT4ge1xyXG4gIGNvbnN0IGRlbGltaXRlciA9IG5ldyBSZWdFeHAoYFxcXFwke0RFTElNSVRFUn1gLCAnZycpXHJcbiAgY29uc3QgZXNjYXBlZERlbGltaXRlciA9IGBcXFxcJHtERUxJTUlURVJ9YFxyXG4gIC8vIGJ1dCBmb3IgYG5lc3RlZC4xLnByb3BlcnR5LjBgIGl0IHdpbGwgcHJvZHVjZSBgbmVzdGVkKFxcLnxcXC5cXGQrXFwuKTEoXFwufFxcLlxcZCtcXC4pcHJvcGVydHkuMGBcclxuICAvLyBhbmQgdGhpcyBpcyBpbnRlbnRpb25hbCBiZWNhdXNlIHVzZXIgY2FuIGdpdmUgYW4gb25lIGluZGV4IGluIHByb3BlcnR5IHBhdGggZm9yIHdpdGggZGVlcGx5XHJcbiAgLy8gbmVzdGVkIGFycmF5c1xyXG4gIGNvbnN0IGVzY2FwZWREZWxpbWl0ZXJPckluZGV4ID0gYCgke2VzY2FwZWREZWxpbWl0ZXJ9fCR7ZXNjYXBlZERlbGltaXRlcn1cXFxcZCske2VzY2FwZWREZWxpbWl0ZXJ9KWBcclxuICBjb25zdCBwYXRoID0gb3B0aW9ucz8uaW5jbHVkZUFsbFNpYmxpbmdzXHJcbiAgICA/IHByb3BlcnR5UGF0aC5yZXBsYWNlKGRlbGltaXRlciwgZXNjYXBlZERlbGltaXRlck9ySW5kZXgpXHJcbiAgICA6IHByb3BlcnR5UGF0aC5yZXBsYWNlKGRlbGltaXRlciwgZXNjYXBlZERlbGltaXRlcilcclxuICByZXR1cm4gbmV3IFJlZ0V4cChgXiR7cGF0aH0oJHwke2VzY2FwZWREZWxpbWl0ZXJ9KWAsICcnKVxyXG59XHJcbiIsImltcG9ydCB7IHByb3BlcnR5S2V5UmVnZXggfSBmcm9tICcuL3Byb3BlcnR5LWtleS1yZWdleCdcbmltcG9ydCB7IEZsYXR0ZW5QYXJhbXMsIEdldE9wdGlvbnMgfSBmcm9tICcuL2ZsYXQudHlwZXMnXG5cbi8qKlxuICogQGxvYWQgLi9zZWxlY3QtcGFyYW1zLmRvYy5tZFxuICogQG1lbWJlcm9mIG1vZHVsZTpmbGF0XG4gKiBAcGFyYW0ge0ZsYXR0ZW5QYXJhbXN9IHBhcmFtc1xuICogQHBhcmFtIHtzdHJpbmcgfCBBcnJheTxzdHJpbmc+fSBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge0dldE9wdGlvbnN9IFtvcHRpb25zXVxuICogQHJldHVybnMge0ZsYXR0ZW5QYXJhbXN9XG4gKi9cbmNvbnN0IHNlbGVjdFBhcmFtcyA9IChcbiAgcGFyYW1zOiBGbGF0dGVuUGFyYW1zLFxuICBwcm9wZXJ0aWVzOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LFxuICBvcHRpb25zPzogR2V0T3B0aW9ucyxcbik6IEZsYXR0ZW5QYXJhbXMgPT4ge1xuICBjb25zdCBwcm9wZXJ0eUFycmF5ID0gQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzKSA/IHByb3BlcnRpZXMgOiBbcHJvcGVydGllc11cbiAgY29uc3Qgc2VsZWN0ZWQgPSBwcm9wZXJ0eUFycmF5XG4gICAgLmZpbHRlcihwcm9wZXJ0eVBhdGggPT4gISFwcm9wZXJ0eVBhdGgpXG4gICAgLnJlZHVjZSgoZ2xvYmFsTWVtbywgcHJvcGVydHlQYXRoKSA9PiB7XG4gICAgICBjb25zdCByZWdleCA9IHByb3BlcnR5S2V5UmVnZXgocHJvcGVydHlQYXRoLCBvcHRpb25zKVxuICAgICAgY29uc3QgZmlsdGVyZWQgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAvLyBmaWx0ZXIgYWxsIGtleXMgd2hpY2ggc3RhcnRzIHdpdGggcHJvcGVydHkgcGF0aFxuICAgICAgICAuZmlsdGVyKGtleSA9PiBrZXkubWF0Y2gocmVnZXgpKVxuICAgICAgICAucmVkdWNlKChtZW1vLCBrZXkpID0+IHtcbiAgICAgICAgICBtZW1vW2tleV0gPSAocGFyYW1zW2tleV0gYXMgc3RyaW5nKVxuICAgICAgICAgIHJldHVybiBtZW1vXG4gICAgICAgIH0sIHt9IGFzIEZsYXR0ZW5QYXJhbXMpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5nbG9iYWxNZW1vLFxuICAgICAgICAuLi5maWx0ZXJlZCxcbiAgICAgIH1cbiAgICB9LCB7fSBhcyBGbGF0dGVuUGFyYW1zKVxuICByZXR1cm4gc2VsZWN0ZWRcbn1cblxuZXhwb3J0IHsgc2VsZWN0UGFyYW1zIH1cbiIsImltcG9ydCB7IHByb3BlcnR5S2V5UmVnZXggfSBmcm9tICcuL3Byb3BlcnR5LWtleS1yZWdleCdcbmltcG9ydCB7IEZsYXR0ZW5QYXJhbXMgfSBmcm9tICcuL2ZsYXQudHlwZXMnXG5cbi8qKlxuICogQGxvYWQgLi9maWx0ZXItb3V0LXBhcmFtcy5kb2MubWRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZmxhdFxuICogQHBhcmFtIHtGbGF0dGVuUGFyYW1zfSBwYXJhbXNcbiAqIEBwYXJhbSB7c3RyaW5nIHwgQXJyYXk8c3RyaW5nPn0gcHJvcGVydGllc1xuICogQHJldHVybnMge0ZsYXR0ZW5QYXJhbXN9XG4gKi9cbmNvbnN0IGZpbHRlck91dFBhcmFtcyA9IChcbiAgcGFyYW1zOiBGbGF0dGVuUGFyYW1zLFxuICBwcm9wZXJ0aWVzOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LFxuKTogRmxhdHRlblBhcmFtcyA9PiB7XG4gIGNvbnN0IHByb3BlcnR5QXJyYXkgPSBBcnJheS5pc0FycmF5KHByb3BlcnRpZXMpID8gcHJvcGVydGllcyA6IFtwcm9wZXJ0aWVzXVxuXG4gIHJldHVybiBwcm9wZXJ0eUFycmF5XG4gICAgLmZpbHRlcihwcm9wZXJ0eVBhdGggPT4gISFwcm9wZXJ0eVBhdGgpXG4gICAgLnJlZHVjZSgoZ2xvYmFsRmlsdGVyZWQsIHByb3BlcnR5UGF0aCkgPT4ge1xuICAgICAgY29uc3QgcmVnZXggPSBwcm9wZXJ0eUtleVJlZ2V4KHByb3BlcnR5UGF0aClcblxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGdsb2JhbEZpbHRlcmVkKVxuICAgICAgICAuZmlsdGVyKGtleSA9PiAha2V5Lm1hdGNoKHJlZ2V4KSlcbiAgICAgICAgLnJlZHVjZSgobWVtbywga2V5KSA9PiB7XG4gICAgICAgICAgbWVtb1trZXldID0gKHBhcmFtc1trZXldIGFzIHN0cmluZylcbiAgICAgICAgICByZXR1cm4gbWVtb1xuICAgICAgICB9LCB7fSBhcyBGbGF0dGVuUGFyYW1zKVxuICAgIH0sIHBhcmFtcylcbn1cblxuZXhwb3J0IHsgZmlsdGVyT3V0UGFyYW1zIH1cbiIsImltcG9ydCB7IFBhdGhQYXJ0cyB9IGZyb20gJy4vcGF0aC1wYXJ0cy50eXBlJ1xuXG4vKipcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZmxhdFxuICogQGFsaWFzIFBhdGhUb1BhcnRzT3B0aW9uc1xuICovXG5leHBvcnQgdHlwZSBQYXRoVG9QYXJ0c09wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgYXJyYXkgaW5kZXhlcyBzaG91bGQgYmUgc2tpcHBlZCBmcm9tIHRoZSBvdXRjb21lLlxuICAgKi9cbiAgc2tpcEFycmF5SW5kZXhlcz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQGxvYWQgLi9wYXRoLXRvLXBhcnRzLmRvYy5tZFxuICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgICAgIHByb3BlcnR5UGF0aFxuICogQHBhcmFtICAge1BhdGhUb1BhcnRzT3B0aW9uc30gIG9wdGlvbnNcbiAqIEByZXR1cm5zICB7UGF0aFBhcnRzfVxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZmxhdFxuICogQGFsaWFzIHBhdGhUb1BhcnRzXG4gKi9cbmNvbnN0IHBhdGhUb1BhcnRzID0gKHByb3BlcnR5UGF0aDogc3RyaW5nLCBvcHRpb25zOiBQYXRoVG9QYXJ0c09wdGlvbnMgPSB7fSk6IFBhdGhQYXJ0cyA9PiB7XG4gIGxldCBhbGxQYXJ0cyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpXG4gIGlmIChvcHRpb25zLnNraXBBcnJheUluZGV4ZXMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgYWxsUGFydHMgPSBhbGxQYXJ0cy5maWx0ZXIocGFydCA9PiBpc05hTigrcGFydCkpXG4gIH1cbiAgcmV0dXJuIGFsbFBhcnRzLnJlZHVjZSgobWVtbywgcGFydCkgPT4ge1xuICAgIGlmIChtZW1vLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4ubWVtbyxcbiAgICAgICAgW21lbW9bbWVtby5sZW5ndGggLSAxXSwgcGFydF0uam9pbignLicpLFxuICAgICAgXVxuICAgIH1cbiAgICByZXR1cm4gW3BhcnRdXG4gIH0sIFtdIGFzIEFycmF5PHN0cmluZz4pXG59XG5cbmV4cG9ydCB7IHBhdGhUb1BhcnRzIH1cbiIsImltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICdmbGF0J1xuaW1wb3J0IHsgREVMSU1JVEVSIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgeyBGbGF0dGVuUGFyYW1zIH0gZnJvbSAnLi4vZmxhdCdcbmltcG9ydCB7IHByb3BlcnR5S2V5UmVnZXggfSBmcm9tICcuL3Byb3BlcnR5LWtleS1yZWdleCdcbmltcG9ydCB7IHBhdGhUb1BhcnRzIH0gZnJvbSAnLi9wYXRoLXRvLXBhcnRzJ1xuXG5jb25zdCBpc09iamVjdCA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiB7XG4gIC8vIE5vZGUgZW52aXJvbm1lbnRcbiAgaWYgKHR5cGVvZiBGaWxlID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsXG4gIH1cbiAgLy8gV2luZG93IGVudmlyb25tZW50XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICEodmFsdWUgaW5zdGFuY2VvZiBGaWxlKSAmJiB2YWx1ZSAhPT0gbnVsbFxufVxuXG4vKipcbiAqIEBsb2FkIC4vc2V0LmRvYy5tZFxuICogQG1lbWJlcm9mIG1vZHVsZTpmbGF0XG4gKiBAcGFyYW0ge0ZsYXR0ZW5QYXJhbXN9IHBhcmFtc1xuICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5UGF0aFxuICogQHBhcmFtIHthbnl9IFt2YWx1ZV0gICAgICAgaWYgbm90IGdpdmUgZnVuY3Rpb24gd2lsbCBvbmx5IHRyeSB0byByZW1vdmUgb2xkIGtleXNcbiAqIEByZXR1cm5zIHtGbGF0dGVuUGFyYW1zfVxuICovXG5jb25zdCBzZXQgPSAocGFyYW1zOiBGbGF0dGVuUGFyYW1zID0ge30sIHByb3BlcnR5UGF0aDogc3RyaW5nLCB2YWx1ZT86IGFueSk6IEZsYXR0ZW5QYXJhbXMgPT4ge1xuICBjb25zdCByZWdleCA9IHByb3BlcnR5S2V5UmVnZXgocHJvcGVydHlQYXRoKVxuXG4gIC8vIHJlbW92ZSBhbGwgZXhpc3Rpbmcga2V5c1xuICBjb25zdCBwYXJhbXNDb3B5ID0gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgIC5maWx0ZXIoa2V5ID0+ICFrZXkubWF0Y2gocmVnZXgpKVxuICAgIC5yZWR1Y2UoKG1lbW8sIGtleSkgPT4ge1xuICAgICAgbWVtb1trZXldID0gcGFyYW1zW2tleV1cblxuICAgICAgcmV0dXJuIG1lbW9cbiAgICB9LCB7fSBhcyBGbGF0dGVuUGFyYW1zKVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiAhKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgIGNvbnN0IGZsYXR0ZW5lZCA9IGZsYXR0ZW4odmFsdWUpIGFzIGFueVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXMoZmxhdHRlbmVkKS5sZW5ndGgpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZmxhdHRlbmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBwYXJhbXNDb3B5W2Ake3Byb3BlcnR5UGF0aH0ke0RFTElNSVRFUn0ke2tleX1gXSA9IGZsYXR0ZW5lZFtrZXldXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHBhcmFtc0NvcHlbcHJvcGVydHlQYXRoXSA9IFtdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNDb3B5W3Byb3BlcnR5UGF0aF0gPSB7fVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXNDb3B5W3Byb3BlcnR5UGF0aF0gPSB2YWx1ZVxuICAgIH1cblxuICAgIC8vIHdoZW4gdXNlciBnYXZlIHsgXCJuZXN0ZWQudmFsdWVcIjogXCJzb21ldGhpbmdcIiB9IGFuZCBoYWQgXCJuZXN0ZWRcIiBzZXQgdG8gYG51bGxgLCB0aGVuXG4gICAgLy8gbmVzdGVkIHNob3VsZCBiZSByZW1vdmVkXG4gICAgY29uc3QgcGFydHMgPSBwYXRoVG9QYXJ0cyhwcm9wZXJ0eVBhdGgpLnNsaWNlKDAsIC0xKVxuICAgIGlmIChwYXJ0cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhwYXJhbXNDb3B5KVxuICAgICAgICAuZmlsdGVyKGtleSA9PiAhcGFydHMuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgLnJlZHVjZSgobWVtbywga2V5KSA9PiB7XG4gICAgICAgICAgbWVtb1trZXldID0gcGFyYW1zQ29weVtrZXldXG5cbiAgICAgICAgICByZXR1cm4gbWVtb1xuICAgICAgICB9LCB7fSBhcyBGbGF0dGVuUGFyYW1zKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcGFyYW1zQ29weVxufVxuXG5leHBvcnQgeyBzZXQgfVxuIiwiaW1wb3J0IHsgdW5mbGF0dGVuIH0gZnJvbSAnZmxhdCdcbmltcG9ydCB7IERFTElNSVRFUiB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgc2VsZWN0UGFyYW1zIH0gZnJvbSAnLi9zZWxlY3QtcGFyYW1zJ1xuaW1wb3J0IHsgRmxhdHRlblBhcmFtcyB9IGZyb20gJy4uL2ZsYXQnXG5pbXBvcnQgeyBwcm9wZXJ0eUtleVJlZ2V4IH0gZnJvbSAnLi9wcm9wZXJ0eS1rZXktcmVnZXgnXG5pbXBvcnQgeyBHZXRPcHRpb25zIH0gZnJvbSAnLi9mbGF0LnR5cGVzJ1xuXG5jb25zdCBURU1QX0hPTERJTkdfS0VZID0gJ1RFTVBfSE9MRElOR19LRVknXG5cbi8qKlxuICogQGxvYWQgLi9nZXQuZG9jLm1kXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmZsYXRcbiAqIEBwYXJhbSB7RmxhdHRlblBhcmFtc30gICBwYXJhbXMgICAgICBmbGF0dGVuIHBhcmFtcyBmcm9tIHdoaWNoIHByb3BlcnR5IGhhcyB0byBiZSB0YWtlblxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgIFtwcm9wZXJ0eVBhdGhdICBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtHZXRPcHRpb25zfSAgICAgIG9wdGlvbnMgICAgIG9wdGlvbnNcbiAqIEByZXR1cm5zIHthbnl9ICAgICAgICAgICAgICAgICAgICAgICB3aGVuIHByb3BlcnR5IGtleSBleGlzdHMgZGlyZWN0bHkgaXQgcmV0dXJucyB3aGF0IGlzIGluc2lkZSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcndpc2UgaXQgdHJpZXMgdG8gZmluZCBhbnkgbmVzdGVkIG9iamVjdHMgYW5kIHJldHVybnNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtXG4gKi9cbmNvbnN0IGdldCA9IChwYXJhbXM6IEZsYXR0ZW5QYXJhbXMgPSB7fSwgcHJvcGVydHlQYXRoPzogc3RyaW5nLCBvcHRpb25zPzogR2V0T3B0aW9ucyk6IGFueSA9PiB7XG4gIGlmICghcHJvcGVydHlQYXRoKSB7XG4gICAgcmV0dXJuIHVuZmxhdHRlbihwYXJhbXMpXG4gIH1cblxuICAvLyB3aGVuIG9iamVjdCBoYXMgdGhpcyBrZXkgLSBzaW1wbHkgcmV0dXJuIGl0XG4gIC8vIHdlIGNhbm5vdCByZWx5IG9uIHR5cGVvZiBwYXJhbXNbcHJvcGVydHlQYXRoICE9PSAndW5kZWZpbmVkJyBiZWNhdXNlIHBhcmFtcyBjYW4gYWN0dWFsbHkgYmVcbiAgLy8gdW5kZWZpbmVkIGFuZCBpbiBzdWNoIGNhc2UgaWYgd291bGQgcGFzcyBhbmQgZnVuY3Rpb24gd291bGQgcmV0dXJuIFt1bmRlZmluZWRdXG4gIGlmIChPYmplY3Qua2V5cyhwYXJhbXMpLmZpbmQoa2V5ID0+IChrZXkgPT09IHByb3BlcnR5UGF0aCkpKSB7XG4gICAgcmV0dXJuIHBhcmFtc1twcm9wZXJ0eVBhdGhdXG4gIH1cblxuICBjb25zdCByZWdleCA9IHByb3BlcnR5S2V5UmVnZXgocHJvcGVydHlQYXRoLCBvcHRpb25zKVxuICBjb25zdCBzZWxlY3RlZFBhcmFtcyA9IHNlbGVjdFBhcmFtcyhwYXJhbXMsIHByb3BlcnR5UGF0aCwgb3B0aW9ucylcblxuICBjb25zdCBuZXN0ZWRQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoc2VsZWN0ZWRQYXJhbXMpLnJlZHVjZSgobWVtbywga2V5LCBpbmRleCkgPT4ge1xuICAgIGxldCBuZXdLZXkgPSBrZXkucmVwbGFjZShyZWdleCwgYCR7VEVNUF9IT0xESU5HX0tFWX0ke0RFTElNSVRFUn1gKVxuXG4gICAgLy8gd2hlbiB1c2VyIHdhbnRzIHRvIHRha2UgYWxsU2libGluZ3Mgd2UgaGF2ZSB0byBmaXggdGhlIGluZGV4ZXMgc28gbmVzdGVkIGl0ZW1zIGZyb21cbiAgICAvLyBkaWZmZXJlbnQgc2libGluZ3MgZG9uJ3Qgb3ZlcmxhcFxuICAgIC8vXG4gICAgLy8gRXhhbXBsZSBmb3Iga2V5IGBuZXN0ZWQuMS5lbGA6XG4gICAgLy8gICduZXN0ZWQuMC5lbC4wLnZhbHVlJzogJ3ZhbDAuMCcsXG4gICAgLy8gICduZXN0ZWQuMC5lbC4xLnZhbHVlJzogJ3ZhbDAuMScsXG4gICAgLy8gICduZXN0ZWQuMS5lbC4wLnZhbHVlJzogJ3ZhbDEnLFxuICAgIC8vICAnbmVzdGVkLjEuZWwuMS52YWx1ZSc6ICd2YWwyJyxcbiAgICAvL1xuICAgIC8vIGhhcyB0byBiZSBjaGFuZ2VkIHRvOlxuICAgIC8vICAnVEVNUF9IT0xESU5HX0tFWS4wLnZhbHVlJzogJ3ZhbDAuMCcsXG4gICAgLy8gICdURU1QX0hPTERJTkdfS0VZLjEudmFsdWUnOiAndmFsMC4xJyxcbiAgICAvLyAgJ1RFTVBfSE9MRElOR19LRVkuMi52YWx1ZSc6ICd2YWwxJyxcbiAgICAvLyAgJ1RFTVBfSE9MRElOR19LRVkuMy52YWx1ZSc6ICd2YWwyJyxcbiAgICBpZiAob3B0aW9ucz8uaW5jbHVkZUFsbFNpYmxpbmdzKSB7XG4gICAgICBuZXdLZXkgPSBuZXdLZXkucmVwbGFjZShcbiAgICAgICAgbmV3IFJlZ0V4cChgJHtURU1QX0hPTERJTkdfS0VZfVxcXFwke0RFTElNSVRFUn0oXFxcXGQqKWApLFxuICAgICAgICBgJHtURU1QX0hPTERJTkdfS0VZfSR7REVMSU1JVEVSfSR7aW5kZXh9YCxcbiAgICAgIClcbiAgICB9XG5cbiAgICBtZW1vW25ld0tleV0gPSBzZWxlY3RlZFBhcmFtc1trZXldXG5cbiAgICByZXR1cm4gbWVtb1xuICB9LCB7fSBhcyBGbGF0dGVuUGFyYW1zKVxuXG4gIGlmIChPYmplY3Qua2V5cyhuZXN0ZWRQcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gKHVuZmxhdHRlbihuZXN0ZWRQcm9wZXJ0aWVzKSBhcyB7fSlbVEVNUF9IT0xESU5HX0tFWV1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCB7IGdldCB9XG4iLCJpbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnZmxhdCdcbmltcG9ydCB7IEZsYXR0ZW5QYXJhbXMgfSBmcm9tICcuL2ZsYXQudHlwZXMnXG5pbXBvcnQgeyBzZXQgfSBmcm9tICcuL3NldCdcblxuLyoqXG4gKiBNZXJnZXMgcGFyYW1zIHRvZ2V0aGVyIGFuZCByZXR1cm5zIGZsYXR0ZW4gcmVzdWx0XG4gKlxuICogQHBhcmFtIHthbnl9IHBhcmFtc1xuICogQHBhcmFtIHtBcnJheTxhbnk+fSAuLi5tZXJnZVBhcmFtc1xuICogQHJldHVybnMge0ZsYXR0ZW5QYXJhbXN9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmZsYXRcbiAqL1xuY29uc3QgbWVyZ2UgPSAocGFyYW1zOiBhbnkgPSB7fSwgLi4ubWVyZ2VQYXJhbXM6IEFycmF5PGFueT4pOiBGbGF0dGVuUGFyYW1zID0+IHtcbiAgY29uc3QgZmxhdHRlblBhcmFtcyA9IGZsYXR0ZW4ocGFyYW1zKVxuXG4gIC8vIHJldmVyc2UgYmVjYXVzZSB3ZSBtZXJnZSBmcm9tIHJpZ2h0XG4gIHJldHVybiBtZXJnZVBhcmFtcy5yZXZlcnNlKCkucmVkdWNlKChnbG9iYWxNZW1vLCBtZXJnZVBhcmFtKSA9PiAoXG4gICAgT2JqZWN0LmtleXMobWVyZ2VQYXJhbSlcbiAgICAgIC5yZWR1Y2UoKG1lbW8sIGtleSkgPT4gKHNldChtZW1vLCBrZXksIG1lcmdlUGFyYW1ba2V5XSkpLCBnbG9iYWxNZW1vKVxuICApLCBmbGF0dGVuUGFyYW1zIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG59XG5cbmV4cG9ydCB7IG1lcmdlIH1cbiIsImltcG9ydCB7IGZpbHRlck91dFBhcmFtcyB9IGZyb20gJy4vZmlsdGVyLW91dC1wYXJhbXMnXG5pbXBvcnQgeyBGbGF0dGVuUGFyYW1zIH0gZnJvbSAnLi9mbGF0LnR5cGVzJ1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXQnXG5pbXBvcnQgeyBzZXQgfSBmcm9tICcuL3NldCdcbmltcG9ydCB7IHBhdGhUb1BhcnRzIH0gZnJvbSAnLi9wYXRoLXRvLXBhcnRzJ1xuaW1wb3J0IHsgREVMSU1JVEVSIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbi8qKlxuICogQGxvYWQgLi9yZW1vdmUtcGF0aC5kb2MubWRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZmxhdFxuICogQHBhcmFtIHtGbGF0dGVuUGFyYW1zfSBwYXJhbXNcbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBwcm9wZXJ0aWVzXG4gKiBAcmV0dXJucyB7RmxhdHRlblBhcmFtc31cbiAqL1xuY29uc3QgcmVtb3ZlUGF0aCA9IChwYXJhbXM6IEZsYXR0ZW5QYXJhbXMsIHBhdGg6IHN0cmluZyk6IEZsYXR0ZW5QYXJhbXMgPT4ge1xuICAvLyBieSBkZWZhdWx0IHNpbXBseSBmaWx0ZXIgb3V0IGVsZW1lbnRzIGZyb20gdGhlIG9iamVjdFxuICBsZXQgZmlsdGVyZWQgPSBmaWx0ZXJPdXRQYXJhbXMocGFyYW1zLCBwYXRoKVxuXG4gIC8vIHJldmVyc2UgbWVhbnMgdGhhdCB3ZSBpdGVyYXRlIGZyb20gdGhlIGNsb3NlcyBwYXJlbnRcbiAgY29uc3QgcGFyZW50UGF0aHMgPSBwYXRoVG9QYXJ0cyhwYXRoKS5yZXZlcnNlKClcblxuICAvLyBidXQgaWYgb25lIG9mIHRoZSBwYXJlbnQgaXMgYW4gYXJyYXlcbiAgcGFyZW50UGF0aHMuZmluZCgocGFyZW50UGF0aCwgcGFyZW50SW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBnZXQocGFyYW1zLCBwYXJlbnRQYXRoKVxuICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgIC8vIHByZXZpb3VzIGVsZW1lbnQgaXMgc3RyaW5naWZpZWQgaW5kZXggbGlrZSAncHJvcGVydHkuMSdcbiAgICAgIGNvbnN0IHByZXZpb3VzUGF0aHMgPSBwYXJlbnRQYXRoc1twYXJlbnRJbmRleCAtIDFdLnNwbGl0KERFTElNSVRFUilcbiAgICAgIC8vIHNvIHRoaXMgaXMgdGhlIGluZGV4OiAxXG4gICAgICBjb25zdCBwcmV2aW91c1BhdGhJbmRleCA9IHByZXZpb3VzUGF0aHNbcHJldmlvdXNQYXRocy5sZW5ndGggLSAxXVxuICAgICAgcGFyZW50LnNwbGljZSgrcHJldmlvdXNQYXRoSW5kZXgsIDEpXG4gICAgICBmaWx0ZXJlZCA9IHNldChwYXJhbXMsIHBhcmVudFBhdGgsIHBhcmVudClcbiAgICAgIC8vIHRoaXMgd29ya3MganVzdCBmb3IgdGhlIGZpcnN0bHkgZm91bmQgYXJyYXkgaXRlbSwgYmVjYXVzZSBpbiBjYXNlIG9mIHJlbW92aW5nIHRoZSBsYXN0IG9uZVxuICAgICAgLy8gaXQgbGVhdmVzIGBbXWAgYXMgYSB2YWx1ZS5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiBmaWx0ZXJlZFxufVxuXG5leHBvcnQgeyByZW1vdmVQYXRoIH1cbiIsImltcG9ydCB7IGZsYXR0ZW4sIHVuZmxhdHRlbiB9IGZyb20gJ2ZsYXQnXG5cbmltcG9ydCB7IERFTElNSVRFUiB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgc2VsZWN0UGFyYW1zIH0gZnJvbSAnLi9zZWxlY3QtcGFyYW1zJ1xuaW1wb3J0IHsgZmlsdGVyT3V0UGFyYW1zIH0gZnJvbSAnLi9maWx0ZXItb3V0LXBhcmFtcydcbmltcG9ydCB7IHNldCB9IGZyb20gJy4vc2V0J1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXQnXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4vbWVyZ2UnXG5pbXBvcnQgeyBwYXRoVG9QYXJ0cyB9IGZyb20gJy4vcGF0aC10by1wYXJ0cydcbmltcG9ydCB7IHJlbW92ZVBhdGggfSBmcm9tICcuL3JlbW92ZS1wYXRoJ1xuXG5leHBvcnQgdHlwZSBGbGF0TW9kdWxlVHlwZSA9IHtcbiAgZmxhdHRlbjogdHlwZW9mIGZsYXR0ZW47XG4gIHVuZmxhdHRlbjogdHlwZW9mIHVuZmxhdHRlbjtcbiAgc2V0OiB0eXBlb2Ygc2V0O1xuICBnZXQ6IHR5cGVvZiBnZXQ7XG4gIHNlbGVjdFBhcmFtczogdHlwZW9mIHNlbGVjdFBhcmFtcztcbiAgZmlsdGVyT3V0UGFyYW1zOiB0eXBlb2YgZmlsdGVyT3V0UGFyYW1zO1xuICBERUxJTUlURVI6IHR5cGVvZiBERUxJTUlURVI7XG4gIHBhdGhUb1BhcnRzOiB0eXBlb2YgcGF0aFRvUGFydHM7XG4gIHJlbW92ZVBhdGg6IHR5cGVvZiByZW1vdmVQYXRoO1xuICBtZXJnZTogdHlwZW9mIG1lcmdlO1xufVxuXG4vKipcbiAqIEBtb2R1bGUgZmxhdFxuICogQG5hbWUgZmxhdFxuICogQG5ldyBpbiB2ZXJzaW9uIDMuM1xuICogQGxvYWQgLi9mbGF0LmRvYy5tZFxuICovXG5leHBvcnQgY29uc3QgZmxhdDogRmxhdE1vZHVsZVR5cGUgPSB7XG4gIC8qKlxuICAgKiBSYXcgYGZsYXR0ZW5gIGZ1bmN0aW9uIGV4cG9ydGVkIGZyb20gb3JpZ2luYWwge0BsaW5rIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2ZsYXQgZmxhdH1cbiAgICogcGFja2FnZS5cbiAgICovXG4gIGZsYXR0ZW4sXG4gIC8qKlxuICAgKiBSYXcgYHVuZmxhdHRlbmAgZnVuY3Rpb24gZXhwb3J0ZWQgZnJvbSBvcmlnaW5hbCB7QGxpbmsgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvZmxhdCBmbGF0fVxuICAgKiBwYWNrYWdlLlxuICAgKi9cbiAgdW5mbGF0dGVuLFxuXG4gIHNldCxcbiAgZ2V0LFxuICBzZWxlY3RQYXJhbXMsXG4gIGZpbHRlck91dFBhcmFtcyxcbiAgcmVtb3ZlUGF0aCxcbiAgREVMSU1JVEVSLFxuICBwYXRoVG9QYXJ0cyxcbiAgbWVyZ2UsXG59XG4iLCJpbXBvcnQgeyBmbGF0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZmxhdCdcclxuaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXHJcblxyXG4vKipcclxuICogSE9GIHJldHVybmluZyBhIGZ1bmN0aW9uIHdoaWNoIHRha2VzIGEgcmVjb3JkIGFuZCByZXR1cm5zIGFuIHVwZGF0ZWQgcmVjb3JkLlxyXG4gKiBUaGlzIHdheSB3ZSBjYW4gcGFzcyB0aGlzIHRvIHNldFN0YXRlIGluIHJlYWN0LCB3aGljaCB0YWtlcyBvbGQgc3RhdGVcclxuICogKGluIG91ciBjYXNlIHByZXZpb3VzUmVjb3JkKSBhcyBhbiBhcmd1bWVudC5cclxuICpcclxuICogRnVuY3Rpb24gaXMgdXNlZCB3aGVuIHRvIHRoZSB7QGxpbmsgT25Qcm9wZXJ0eUNoYW5nZX0gY2FsbGJhY2ssIHVzZXIgcGFzc2VzXHJcbiAqIGtleSAocHJvcGVydHkgbmFtZSkgYW5kIHRoZSB2YWx1ZSAoZm9sbG93ZWQgYnkgYW4gb3B0aW9uYWwgc2VsZWN0ZWRSZWNvcmQpLlxyXG4gKlxyXG4gKiBUaGUgcmVzcG9uc2liaWxpdHkgb2YgdGhlIGZ1bmN0aW9uIGlzIHRvOlxyXG4gKiAtIGNsZWFyIG9sZCB2YWx1ZXMgdW5kZXIgcGFzc2VkIGtleTogc28gd2hlbiB1c2VyIHBhc3NlcyBwcm9wZXJ0eSA9PT0gYHNvbWUua2V5YFxyXG4gKiAgIGZ1bmN0aW9uIHJlbW92ZXMgYHNvbWUua2V5LjFgLCBgc29tZS5rZXkuMmAgZXRjXHJcbiAqIC0gc2V0cyBuZXcgdmFsdWUgdW5kZXIgdGhlIHBhc3NlZCBrZXkgZm9yIHByaW1pdGl2ZSB0eXBlc1xyXG4gKiAtIGluIGNhc2Ugb2Ygb2JqZWN0cyAtIGl0IGZsYXR0ZW5zIHRoZW0gZmlyc3QgYW5kIHRoZW4gc2V0cyBhbGwgdGhlIHJlc3VsdGVkIHZhbHVlc1xyXG4gKiAgIHVuZGVyIHRoZSBwYXRoIHByb3ZpZGVkIGluIHRoZSBwcm9wZXJ0eSBhcmd1bWVudFxyXG4gKiAtIGl0IGZpbGxzIHZhbHVlIGluIFJlY29yZEpTT04jcG9wdWxhdGVkIHdoZW4gc2VsZWN0ZWRSZWNvcmQgaXMgZ2l2ZW5cclxuICogLSBmaW5hbGx5IGl0IGludmFsaWRhdGVzIHBvcHVsYXRlZCBmb3IgZ2l2ZW4gcHJvcGVydHlcclxuICpcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgcHJvcGVydHkgICAgICAgIHByb3BlcnR5IHRoYXQgbXVzdCBiZSB1cGRhdGVkLCBzdXBwb3J0cyBuZXN0aW5nXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIGRvdHNcclxuICogQHBhcmFtIHthbnl9ICAgICAgICAgdmFsdWUgICAgICAgICAgIHZhbHVlIHRoYXQgbXVzdCBiZSBzZXQsIHVuZGVmaW5lZCBvciBudWxsIGlmXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGluZywgd2lsbCBiZSBmbGF0dGVuZWRcclxuICogQHBhcmFtIHtSZWNvcmRKU09OfSAgc2VsZWN0ZWRSZWNvcmQgIGlmIHZhbHVlIGlzIHJlZmVyZW5jZSBJRCwgdGhpcyBtdXN0IGJlIGEgcmVjb3JkXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdCdzIHJlZmVyZW5jaW5nIHRvXHJcbiAqIEBwcml2YXRlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXBkYXRlUmVjb3JkID0gKFxyXG4gIHByb3BlcnR5OiBzdHJpbmcsXHJcbiAgdmFsdWU6IGFueSxcclxuICBzZWxlY3RlZFJlY29yZD86IFJlY29yZEpTT04sXHJcbikgPT4gKHByZXZpb3VzUmVjb3JkOiBSZWNvcmRKU09OKTogUmVjb3JkSlNPTiA9PiB7XHJcbiAgbGV0IHBvcHVsYXRlZE1vZGlmaWVkID0gZmFsc2VcclxuICBjb25zdCBwb3B1bGF0ZWRDb3B5ID0geyAuLi5wcmV2aW91c1JlY29yZC5wb3B1bGF0ZWQgfVxyXG4gIGNvbnN0IHBhcmFtc0NvcHkgPSBmbGF0LnNldChwcmV2aW91c1JlY29yZC5wYXJhbXMsIHByb3BlcnR5LCB2YWx1ZSlcclxuXHJcbiAgaWYgKHByb3BlcnR5IGluIHBvcHVsYXRlZENvcHkpIHtcclxuICAgIGRlbGV0ZSBwb3B1bGF0ZWRDb3B5W3Byb3BlcnR5XVxyXG4gICAgcG9wdWxhdGVkTW9kaWZpZWQgPSB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoc2VsZWN0ZWRSZWNvcmQpIHtcclxuICAgIHBvcHVsYXRlZENvcHlbcHJvcGVydHldID0gc2VsZWN0ZWRSZWNvcmRcclxuICAgIHBvcHVsYXRlZE1vZGlmaWVkID0gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIC4uLnByZXZpb3VzUmVjb3JkLFxyXG4gICAgcGFyYW1zOiBwYXJhbXNDb3B5LFxyXG4gICAgcG9wdWxhdGVkOiBwb3B1bGF0ZWRNb2RpZmllZCA/IHBvcHVsYXRlZENvcHkgOiBwcmV2aW91c1JlY29yZC5wb3B1bGF0ZWQsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1cGRhdGVSZWNvcmRcclxuIiwiaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXHJcblxyXG5jb25zdCBpc0VudGlyZVJlY29yZEdpdmVuID0gKFxyXG4gIHByb3BlcnR5T3JSZWNvcmQ6IFJlY29yZEpTT04gfCBzdHJpbmcsXHJcbiAgdmFsdWU/OiBzdHJpbmcsXHJcbik6IGJvb2xlYW4gPT4gISEodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJ1xyXG4gICAgLy8gdXNlciBjYW4gcGFzcyBwcm9wZXJ0eSBhbmQgb21pdCB2YWx1ZS4gVGhpcyBtYWtlcyBzZW5zZSB3aGVuXHJcbiAgICAvLyB0aGlyZCBhcmd1bWVudCBvZiB0aGUgZnVuY3Rpb24gKHNlbGVjdGVkUmVjb3JkKSBpcyBwYXNzZWQgdG8gb25DaGFuZ2VcclxuICAgIC8vIGNhbGxiYWNrXHJcbiAgICAmJiAhKHR5cGVvZiBwcm9wZXJ0eU9yUmVjb3JkID09PSAnc3RyaW5nJylcclxuICAgIC8vIHdlIGFzc3VtZSB0aGF0IG9ubHkgcGFyYW1zIGhhcyB0byBiZSBnaXZlblxyXG4gICAgJiYgcHJvcGVydHlPclJlY29yZC5wYXJhbXMpXHJcblxyXG5leHBvcnQge1xyXG4gIGlzRW50aXJlUmVjb3JkR2l2ZW4gYXMgZGVmYXVsdCxcclxuICBpc0VudGlyZVJlY29yZEdpdmVuLFxyXG59XHJcbiIsImltcG9ydCB7IGZsYXQgfSBmcm9tICcuLi8uLi8uLi91dGlscydcclxuaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IFVzZVJlY29yZE9wdGlvbnMgfSBmcm9tICcuL3VzZS1yZWNvcmQudHlwZSdcclxuXHJcbmV4cG9ydCBjb25zdCBmaWx0ZXJSZWNvcmRQYXJhbXMgPSBmdW5jdGlvbjxUIGV4dGVuZHMgUmVjb3JkSlNPTj4gKFxyXG4gIHJlY29yZDogVCxcclxuICBvcHRpb25zOiBVc2VSZWNvcmRPcHRpb25zID0ge30sXHJcbik6IFQge1xyXG4gIGlmIChvcHRpb25zLmluY2x1ZGVQYXJhbXMgJiYgcmVjb3JkKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi5yZWNvcmQsXHJcbiAgICAgIHBhcmFtczogZmxhdC5zZWxlY3RQYXJhbXMocmVjb3JkLnBhcmFtcyB8fCB7fSwgb3B0aW9ucy5pbmNsdWRlUGFyYW1zKSxcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHJlY29yZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaXNQcm9wZXJ0eVBlcm1pdHRlZCA9IChwcm9wZXJ0eU5hbWUsIG9wdGlvbnM6IFVzZVJlY29yZE9wdGlvbnMgPSB7fSk6IGJvb2xlYW4gPT4ge1xyXG4gIGNvbnN0IHsgaW5jbHVkZVBhcmFtcyB9ID0gb3B0aW9uc1xyXG4gIGlmIChpbmNsdWRlUGFyYW1zKSB7XHJcbiAgICBjb25zdCBwYXJ0cyA9IGZsYXQucGF0aFRvUGFydHMocHJvcGVydHlOYW1lLCB7IHNraXBBcnJheUluZGV4ZXM6IHRydWUgfSlcclxuICAgIHJldHVybiBwYXJ0cy5zb21lKHBhcnQgPT4gaW5jbHVkZVBhcmFtcy5pbmNsdWRlcyhwYXJ0KSlcclxuICB9XHJcbiAgcmV0dXJuIHRydWVcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIERpc3BhdGNoLCBTZXRTdGF0ZUFjdGlvbiB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCBBcGlDbGllbnQsIHsgUmVjb3JkQWN0aW9uQVBJUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLWNsaWVudCdcclxuaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IHBhcmFtc1RvRm9ybURhdGEgfSBmcm9tICcuL3BhcmFtcy10by1mb3JtLWRhdGEnXHJcbmltcG9ydCB1c2VOb3RpY2UgZnJvbSAnLi4vdXNlLW5vdGljZSdcclxuaW1wb3J0IHsgUmVjb3JkQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL2FjdGlvbnMvYWN0aW9uLmludGVyZmFjZSdcclxuaW1wb3J0IG1lcmdlUmVjb3JkUmVzcG9uc2UgZnJvbSAnLi9tZXJnZS1yZWNvcmQtcmVzcG9uc2UnXHJcbmltcG9ydCB1cGRhdGVSZWNvcmQgZnJvbSAnLi91cGRhdGUtcmVjb3JkJ1xyXG5pbXBvcnQgeyBVc2VSZWNvcmRPcHRpb25zLCBVc2VSZWNvcmRSZXN1bHQsIFVzZVJlY29yZFN1Ym1pdEZ1bmN0aW9uIH0gZnJvbSAnLi91c2UtcmVjb3JkLnR5cGUnXHJcbmltcG9ydCBpc0VudGlyZVJlY29yZEdpdmVuIGZyb20gJy4vaXMtZW50aXJlLXJlY29yZC1naXZlbidcclxuaW1wb3J0IHsgZmlsdGVyUmVjb3JkUGFyYW1zLCBpc1Byb3BlcnR5UGVybWl0dGVkIH0gZnJvbSAnLi9maWx0ZXItcmVjb3JkJ1xyXG5pbXBvcnQgeyBmbGF0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnXHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcclxuXHJcbi8qKlxyXG4gKiBAbG9hZCAuL3VzZS1yZWNvcmQuZG9jLm1kXHJcbiAqIEBzdWJjYXRlZ29yeSBIb29rc1xyXG4gKiBAY2xhc3NcclxuICogQGhpZGVjb25zdHJ1Y3RvclxyXG4gKiBAYnVuZGxlXHJcbiAqIEBwYXJhbSB7UmVjb3JkSlNPTn0gW2luaXRpYWxSZWNvcmRdLFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVzb3VyY2VJZFxyXG4gKiBAcGFyYW0ge1VzZVJlY29yZE9wdGlvbnN9IFtvcHRpb25zXVxyXG4gKiBAcmV0dXJuIHtVc2VSZWNvcmRSZXN1bHR9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXNlUmVjb3JkID0gKFxyXG4gIGluaXRpYWxSZWNvcmQ6IFJlY29yZEpTT04gfCB1bmRlZmluZWQsXHJcbiAgcmVzb3VyY2VJZDogc3RyaW5nLFxyXG4gIG9wdGlvbnM/OiBVc2VSZWNvcmRPcHRpb25zLFxyXG4pOiBVc2VSZWNvcmRSZXN1bHQgPT4ge1xyXG4gIC8vIHNldHRpbmcgdXAgc3RhdGVcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbaXNTeW5jZWQsIHNldElzU3luY2VkXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKVxyXG5cclxuICBjb25zdCBmaWx0ZXJlZFJlY29yZCA9IGluaXRpYWxSZWNvcmQgPyBmaWx0ZXJSZWNvcmRQYXJhbXMoaW5pdGlhbFJlY29yZCwgb3B0aW9ucykgOiBudWxsXHJcblxyXG4gIGNvbnN0IFtyZWNvcmQsIHNldFJlY29yZF0gPSB1c2VTdGF0ZTxSZWNvcmRKU09OPih7XHJcbiAgICAuLi5maWx0ZXJlZFJlY29yZCxcclxuICAgIHBhcmFtczogZmlsdGVyZWRSZWNvcmQ/LnBhcmFtcyA/PyB7fSxcclxuICAgIGVycm9yczogaW5pdGlhbFJlY29yZD8uZXJyb3JzID8/IHt9LFxyXG4gICAgcG9wdWxhdGVkOiBpbml0aWFsUmVjb3JkPy5wb3B1bGF0ZWQgPz8ge30sXHJcbiAgfSBhcyBSZWNvcmRKU09OKVxyXG5cclxuICAvLyBpdCBrZWVwcyB0aGUgc2FtZSBmb3JtYXQgYXMgdXNlU3RhdGUgZnVuY3Rpb24gd2hpY2ggY2FuIHRha2UgZWl0aGVyIHZhbHVlIG9yIGZ1bmN0aW9uXHJcbiAgY29uc3Qgc2V0RmlsdGVyZWRSZWNvcmQ6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFJlY29yZEpTT04+PiA9IHVzZUNhbGxiYWNrKCh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3UmVjb3JkID0gdmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IHZhbHVlKHJlY29yZCkgOiB2YWx1ZVxyXG4gICAgc2V0UmVjb3JkKGZpbHRlclJlY29yZFBhcmFtcyhuZXdSZWNvcmQsIG9wdGlvbnMpKVxyXG4gIH0sIFtvcHRpb25zLCByZWNvcmRdKVxyXG5cclxuICBjb25zdCBvbk5vdGljZSA9IHVzZU5vdGljZSgpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHVzZUNhbGxiYWNrKChcclxuICAgIHByb3BlcnR5T3JSZWNvcmQ6IFJlY29yZEpTT04gfCBzdHJpbmcsXHJcbiAgICB2YWx1ZT86IGFueSxcclxuICAgIGluY29taW5nUmVjb3JkPzogUmVjb3JkSlNPTixcclxuICApOiB2b2lkID0+IHtcclxuICAgIGlmIChpc0VudGlyZVJlY29yZEdpdmVuKHByb3BlcnR5T3JSZWNvcmQsIHZhbHVlKSkge1xyXG4gICAgICBzZXRGaWx0ZXJlZFJlY29yZChwcm9wZXJ0eU9yUmVjb3JkIGFzIFJlY29yZEpTT04pXHJcbiAgICB9IGVsc2UgaWYgKGlzUHJvcGVydHlQZXJtaXR0ZWQocHJvcGVydHlPclJlY29yZCBhcyBzdHJpbmcsIG9wdGlvbnMpKSB7XHJcbiAgICAgIHNldFJlY29yZCh1cGRhdGVSZWNvcmQocHJvcGVydHlPclJlY29yZCBhcyBzdHJpbmcsIHZhbHVlLCBpbmNvbWluZ1JlY29yZCkpXHJcbiAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXHJcbiAgICAgIGNvbnNvbGUud2FybihbXHJcbiAgICAgICAgYFlvdSBhcmUgdHJ5aW5nIHRvIHNldCBwcm9wZXJ0eTogXCIke3Byb3BlcnR5T3JSZWNvcmQgYXMgc3RyaW5nfVwiIHdoaWNoYCxcclxuICAgICAgICAnaXMgbm90IHBlcm1pdHRlZC4gVGFrZSBhIGxvb2sgYXQgYHVzZVJlY29yZCguLi4sIHsgaW5jbHVkZVBhcmFtczogWy4uLl19KWAnLFxyXG4gICAgICBdLmpvaW4oJ1xcbicpKVxyXG4gICAgfVxyXG4gICAgc2V0SXNTeW5jZWQoZmFsc2UpXHJcbiAgfSwgW3NldFJlY29yZCwgb3B0aW9uc10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdDogVXNlUmVjb3JkU3VibWl0RnVuY3Rpb24gPSB1c2VDYWxsYmFjaygoXHJcbiAgICBjdXN0b21QYXJhbXMgPSB7fSwgc3VibWl0T3B0aW9ucyxcclxuICApOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8UmVjb3JkQWN0aW9uUmVzcG9uc2U+PiA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcblxyXG4gICAgY29uc3QgbWVyZ2VkUGFyYW1zID0gZmxhdC5tZXJnZShyZWNvcmQucGFyYW1zLCBjdXN0b21QYXJhbXMpXHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IHBhcmFtc1RvRm9ybURhdGEobWVyZ2VkUGFyYW1zKVxyXG5cclxuICAgIGNvbnN0IHBhcmFtczogT21pdDxSZWNvcmRBY3Rpb25BUElQYXJhbXMsICdhY3Rpb25OYW1lJyB8ICdyZWNvcmRJZCc+ID0ge1xyXG4gICAgICByZXNvdXJjZUlkLFxyXG4gICAgICBvblVwbG9hZFByb2dyZXNzOiAoZSk6IHZvaWQgPT4gc2V0UHJvZ3Jlc3MoTWF0aC5yb3VuZCgoZS5sb2FkZWQgKiAxMDApIC8gZS50b3RhbCkpLFxyXG4gICAgICBkYXRhOiBmb3JtRGF0YSxcclxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0sXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlY29yZC5pZFxyXG4gICAgICA/IGFwaS5yZWNvcmRBY3Rpb24oe1xyXG4gICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICBhY3Rpb25OYW1lOiAnZWRpdCcsXHJcbiAgICAgICAgcmVjb3JkSWQ6IHJlY29yZC5pZCxcclxuICAgICAgfSlcclxuICAgICAgOiBhcGkucmVzb3VyY2VBY3Rpb24oe1xyXG4gICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICBhY3Rpb25OYW1lOiAnbmV3JyxcclxuICAgICAgfSkgYXMgUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFJlY29yZEFjdGlvblJlc3BvbnNlPj5cclxuXHJcbiAgICBwcm9taXNlLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLm5vdGljZSkge1xyXG4gICAgICAgIG9uTm90aWNlKHJlc3BvbnNlLmRhdGEubm90aWNlKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChzdWJtaXRPcHRpb25zPy51cGRhdGVPblNhdmUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgc2V0RmlsdGVyZWRSZWNvcmQocHJldiA9PiBtZXJnZVJlY29yZFJlc3BvbnNlKHByZXYsIHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICB9XHJcbiAgICAgIHNldFByb2dyZXNzKDApXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIHNldElzU3luY2VkKHRydWUpXHJcbiAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgIG9uTm90aWNlKHtcclxuICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICdUaGVyZSB3YXMgYW4gZXJyb3IgdXBkYXRpbmcgcmVjb3JkLCBDaGVjayBvdXQgY29uc29sZSB0byBzZWUgbW9yZSBpbmZvcm1hdGlvbi4nLFxyXG4gICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgIH0pXHJcbiAgICAgIHNldFByb2dyZXNzKDApXHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHByb21pc2VcclxuICB9LCBbcmVjb3JkLCByZXNvdXJjZUlkLCBzZXRMb2FkaW5nLCBzZXRQcm9ncmVzcywgc2V0UmVjb3JkXSlcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlY29yZCxcclxuICAgIGhhbmRsZUNoYW5nZSxcclxuICAgIHN1Ym1pdDogaGFuZGxlU3VibWl0LFxyXG4gICAgbG9hZGluZyxcclxuICAgIHByb2dyZXNzLFxyXG4gICAgc2V0UmVjb3JkOiBzZXRGaWx0ZXJlZFJlY29yZCxcclxuICAgIGlzU3luY2VkLFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUmVjb3JkXHJcbiIsImltcG9ydCB7IEFjdGlvbkpTT04gfSBmcm9tICcuL2FjdGlvbi1qc29uLmludGVyZmFjZSdcclxuXHJcbmV4cG9ydCBjb25zdCBhY3Rpb25IYXNDb21wb25lbnQgPSAoYWN0aW9uOiBBY3Rpb25KU09OKTogYm9vbGVhbiA9PiAoXHJcbiAgdHlwZW9mIGFjdGlvbi5jb21wb25lbnQgIT09ICd1bmRlZmluZWQnICYmIGFjdGlvbi5jb21wb25lbnQgPT09IGZhbHNlXHJcbilcclxuIiwiaW1wb3J0IHsgUmVjb3JkQWN0aW9uUGFyYW1zLCBWaWV3SGVscGVycyB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzJ1xyXG5pbXBvcnQgeyBEaWZmZXJlbnRBY3Rpb25QYXJhbXMgfSBmcm9tICcuLi8uLi9ob29rcydcclxuaW1wb3J0IHsgQWN0aW9uSlNPTiB9IGZyb20gJy4vYWN0aW9uLWpzb24uaW50ZXJmYWNlJ1xyXG5cclxuY29uc3QgaCA9IG5ldyBWaWV3SGVscGVycygpXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9uSHJlZiA9IChcclxuICBhY3Rpb246IEFjdGlvbkpTT04sXHJcbiAgcGFyYW1zOiBEaWZmZXJlbnRBY3Rpb25QYXJhbXMsXHJcbik6IHN0cmluZyB8IG51bGwgPT4ge1xyXG4gIGNvbnN0IGFjdGlvbk5hbWUgPSBhY3Rpb24ubmFtZVxyXG5cclxuICBpZiAoIWFjdGlvbi5jb21wb25lbnQgJiYgIWFjdGlvbi5oYXNIYW5kbGVyKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3QgaHJlZk1hcCA9IHtcclxuICAgIHJlY29yZDogKCk6IHN0cmluZyA9PiBoLnJlY29yZEFjdGlvblVybCh7XHJcbiAgICAgIC4uLnBhcmFtcyBhcyBSZWNvcmRBY3Rpb25QYXJhbXMsXHJcbiAgICAgIGFjdGlvbk5hbWUsXHJcbiAgICB9KSxcclxuICAgIHJlc291cmNlOiAoKTogc3RyaW5nID0+IGgucmVzb3VyY2VBY3Rpb25Vcmwoe1xyXG4gICAgICByZXNvdXJjZUlkOiBwYXJhbXMucmVzb3VyY2VJZCxcclxuICAgICAgYWN0aW9uTmFtZSxcclxuICAgIH0pLFxyXG4gICAgYnVsazogKCk6IHN0cmluZyA9PiBoLmJ1bGtBY3Rpb25Vcmwoe1xyXG4gICAgICAuLi5wYXJhbXMsXHJcbiAgICAgIGFjdGlvbk5hbWUsXHJcbiAgICB9KSxcclxuICB9XHJcbiAgaWYgKGhyZWZNYXBbYWN0aW9uLmFjdGlvblR5cGVdKSB7XHJcbiAgICByZXR1cm4gaHJlZk1hcFthY3Rpb24uYWN0aW9uVHlwZV0oKVxyXG4gIH1cclxuICB0aHJvdyBuZXcgRXJyb3IoJ1wiYWN0aW9uVHlwZVwiIHNob3VsZCBiZSBlaXRoZXIgcmVjb3JkLCByZXNvdXJjZSBvciBidWxrJylcclxufVxyXG4iLCJpbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZCdcclxuaW1wb3J0IHsgRGlmZmVyZW50QWN0aW9uUGFyYW1zIH0gZnJvbSAnLi4vLi4vaG9va3MnXHJcbmltcG9ydCB7IEFwaUNsaWVudCB9IGZyb20gJy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBBY3Rpb25KU09OIH0gZnJvbSAnLi9hY3Rpb24tanNvbi5pbnRlcmZhY2UnXHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxsQWN0aW9uQXBpPEsgZXh0ZW5kcyBBY3Rpb25SZXNwb25zZT4oXHJcbiAgYWN0aW9uOiBBY3Rpb25KU09OLFxyXG4gIHBhcmFtczogRGlmZmVyZW50QWN0aW9uUGFyYW1zLFxyXG4gIHNlYXJjaD86IExvY2F0aW9uWydzZWFyY2gnXSxcclxuKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPEs+PiB7XHJcbiAgbGV0IHByb21pc2U6IFByb21pc2U8QXhpb3NSZXNwb25zZTxLPj5cclxuICBjb25zdCB7IHJlY29yZElkLCByZWNvcmRJZHMsIHJlc291cmNlSWQgfSA9IHBhcmFtc1xyXG5cclxuICBzd2l0Y2ggKGFjdGlvbi5hY3Rpb25UeXBlKSB7XHJcbiAgY2FzZSAncmVjb3JkJzpcclxuICAgIGlmICghcmVjb3JkSWQpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgaGF2ZSB0byBzcGVjaWZ5IFwicmVjb3JkSWRcIiBmb3IgcmVjb3JkIGFjdGlvbicpXHJcbiAgICB9XHJcbiAgICBwcm9taXNlID0gYXBpLnJlY29yZEFjdGlvbih7XHJcbiAgICAgIHJlc291cmNlSWQsIGFjdGlvbk5hbWU6IGFjdGlvbi5uYW1lLCByZWNvcmRJZCwgc2VhcmNoLFxyXG4gICAgfSkgYXMgYW55XHJcbiAgICBicmVha1xyXG4gIGNhc2UgJ3Jlc291cmNlJzpcclxuICAgIHByb21pc2UgPSBhcGkucmVzb3VyY2VBY3Rpb24oe1xyXG4gICAgICByZXNvdXJjZUlkLCBhY3Rpb25OYW1lOiBhY3Rpb24ubmFtZSxcclxuICAgIH0pIGFzIGFueVxyXG4gICAgYnJlYWtcclxuICBjYXNlICdidWxrJzpcclxuICAgIGlmICghcmVjb3JkSWRzKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gc3BlY2lmeSBcInJlY29yZElkc1wiIGZvciBidWxrIGFjdGlvbicpXHJcbiAgICB9XHJcbiAgICBwcm9taXNlID0gYXBpLmJ1bGtBY3Rpb24oe1xyXG4gICAgICByZXNvdXJjZUlkLCBhY3Rpb25OYW1lOiBhY3Rpb24ubmFtZSwgcmVjb3JkSWRzLCBzZWFyY2gsXHJcbiAgICB9KSBhcyBhbnlcclxuICAgIGJyZWFrXHJcbiAgZGVmYXVsdDpcclxuICAgIHRocm93IG5ldyBFcnJvcignXCJhY3Rpb25UeXBlXCIgc2hvdWxkIGJlIGVpdGhlciByZWNvcmQsIHJlc291cmNlIG9yIGJ1bGsnKVxyXG4gIH1cclxuICByZXR1cm4gcHJvbWlzZVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGFycm93LXBhcmVucyAqL1xyXG5pbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZCdcclxuaW1wb3J0IHsgRGlmZmVyZW50QWN0aW9uUGFyYW1zLCB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXIgfSBmcm9tICcuLi8uLi9ob29rcydcclxuaW1wb3J0IHsgQWN0aW9uSlNPTiB9IGZyb20gJy4vYWN0aW9uLWpzb24uaW50ZXJmYWNlJ1xyXG5pbXBvcnQgeyBjYWxsQWN0aW9uQXBpIH0gZnJvbSAnLi9jYWxsLWFjdGlvbi1hcGknXHJcblxyXG5leHBvcnQgdHlwZSBDYWxsQXBpRnVuY3Rpb248SyBleHRlbmRzIEFjdGlvblJlc3BvbnNlPiA9ICgpID0+IFByb21pc2U8QXhpb3NSZXNwb25zZTxLPj5cclxuXHJcbmV4cG9ydCB0eXBlIEJ1aWxkQWN0aW9uQ2FsbEFwaVRyaWdnZXJPcHRpb25zID0ge1xyXG4gIGFjdGlvbjogQWN0aW9uSlNPTjtcclxuICBwYXJhbXM6IERpZmZlcmVudEFjdGlvblBhcmFtcztcclxuICBhY3Rpb25SZXNwb25zZUhhbmRsZXI6IFJldHVyblR5cGU8dHlwZW9mIHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlcj47XHJcbiAgc2VhcmNoPzogTG9jYXRpb25bJ3NlYXJjaCddO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlciA9IDxLPihcclxuICBvcHRpb25zOiBCdWlsZEFjdGlvbkNhbGxBcGlUcmlnZ2VyT3B0aW9ucyxcclxuKTogQ2FsbEFwaUZ1bmN0aW9uPEs+ID0+IHtcclxuICBjb25zdCB7IGFjdGlvbiwgcGFyYW1zLCBhY3Rpb25SZXNwb25zZUhhbmRsZXIsIHNlYXJjaCB9ID0gb3B0aW9uc1xyXG4gIGNvbnN0IGNhbGxBcGk6IENhbGxBcGlGdW5jdGlvbjxLPiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb21pc2UgPSBjYWxsQWN0aW9uQXBpKGFjdGlvbiwgcGFyYW1zLCBzZWFyY2gpXHJcbiAgICBwcm9taXNlLnRoZW4oYWN0aW9uUmVzcG9uc2VIYW5kbGVyKS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgdGhyb3cgZXJyb3JcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHByb21pc2UgYXMgUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPEs+PlxyXG4gIH1cclxuICByZXR1cm4gY2FsbEFwaVxyXG59XHJcbiIsImltcG9ydCB7IEFjdGlvbkpTT04gfSBmcm9tICcuL2FjdGlvbi1qc29uLmludGVyZmFjZSdcclxuXHJcbmV4cG9ydCBjb25zdCBidWlsZEFjdGlvblRlc3RJZCA9IChhY3Rpb246IEFjdGlvbkpTT04pOiBzdHJpbmcgPT4gYGFjdGlvbi0ke2FjdGlvbi5uYW1lfWBcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXHJcbmltcG9ydCB7IERpZmZlcmVudEFjdGlvblBhcmFtcywgdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyIH0gZnJvbSAnLi4vLi4vaG9va3MnXHJcbmltcG9ydCB7IGFjdGlvbkhhc0NvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uLWhhcy1jb21wb25lbnQnXHJcbmltcG9ydCB7IGFjdGlvbkhyZWYgfSBmcm9tICcuL2FjdGlvbi1ocmVmJ1xyXG5pbXBvcnQgeyBBY3Rpb25KU09OIH0gZnJvbSAnLi9hY3Rpb24tanNvbi5pbnRlcmZhY2UnXHJcbmltcG9ydCB7IGJ1aWxkQWN0aW9uQ2FsbEFwaVRyaWdnZXIgfSBmcm9tICcuL2J1aWxkLWFjdGlvbi1hcGktY2FsbC10cmlnZ2VyJ1xyXG5cclxuZXhwb3J0IHR5cGUgQnVpbGRBY3Rpb25DbGlja09wdGlvbnMgPSB7XHJcbiAgYWN0aW9uOiBBY3Rpb25KU09OO1xyXG4gIHBhcmFtczogRGlmZmVyZW50QWN0aW9uUGFyYW1zO1xyXG4gIGFjdGlvblJlc3BvbnNlSGFuZGxlcjogUmV0dXJuVHlwZTx0eXBlb2YgdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyPjtcclxuICBwdXNoOiAocGF0aDogc3RyaW5nLCBzdGF0ZT86IGFueSkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQnVpbGRBY3Rpb25DbGlja1JldHVybiA9IChldmVudDogYW55KSA9PiBhbnlcclxuXHJcbmV4cG9ydCBjb25zdCBidWlsZEFjdGlvbkNsaWNrSGFuZGxlciA9IChcclxuICBvcHRpb25zOiBCdWlsZEFjdGlvbkNsaWNrT3B0aW9ucyxcclxuKTogQnVpbGRBY3Rpb25DbGlja1JldHVybiA9PiB7XHJcbiAgY29uc3QgeyBhY3Rpb24sIHBhcmFtcywgYWN0aW9uUmVzcG9uc2VIYW5kbGVyLCBwdXNoIH0gPSBvcHRpb25zXHJcblxyXG4gIGNvbnN0IGhhbmRsZUFjdGlvbkNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxFbGVtZW50Pik6IHZvaWQgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuXHJcbiAgICBjb25zdCBocmVmID0gYWN0aW9uSHJlZihhY3Rpb24sIHBhcmFtcylcclxuXHJcbiAgICBjb25zdCBjYWxsQXBpID0gYnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlcih7XHJcbiAgICAgIHBhcmFtcywgYWN0aW9uLCBhY3Rpb25SZXNwb25zZUhhbmRsZXIsXHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChhY3Rpb24uZ3VhcmQgJiYgIWNvbmZpcm0oYWN0aW9uLmd1YXJkKSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChhY3Rpb25IYXNDb21wb25lbnQoYWN0aW9uKSkge1xyXG4gICAgICBjYWxsQXBpKClcclxuICAgIH0gZWxzZSBpZiAoaHJlZikge1xyXG4gICAgICBwdXNoKGhyZWYpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaGFuZGxlQWN0aW9uQ2xpY2tcclxufVxyXG4iLCJleHBvcnQgY29uc3QgUkVGUkVTSF9LRVkgPSAncmVmcmVzaCdcblxuLyoqXG4gKiBBZGRzIHJlZnJlc2g9dHJ1ZSB0byB0aGUgdXJsLCB3aGljaCBpbiB0dXJuIHNob3VsZCBjYXVzZSBsaXN0IHRvIHJlbG9hZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsICAgICAgdXJsIHRvIHdoaWNoIGZ1bmN0aW9uIHNob3VsZCBhZGQgYHJlZnJlc2hgXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NlYXJjaF0gb3B0aW9uYWwgc2VhcmNoIHF1ZXJ5IHdoaWNoIHNob3VsZCBiZSB1cGRhdGVkLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgIGlmIG5vdCBnaXZlbiBmdW5jdGlvbiB3aWxsIHVzZSB3aW5kb3cubG9jYXRpb24uc2VhcmNoXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgYXBwZW5kRm9yY2VSZWZyZXNoID0gKHVybDogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBzZWFyY2hQYXJhbXNJZHggPSB1cmwubGFzdEluZGV4T2YoJz8nKVxuICBjb25zdCB1cmxTZWFyY2hQYXJhbXMgPSBzZWFyY2hQYXJhbXNJZHggIT09IC0xXG4gICAgPyB1cmwuc3Vic3RyaW5nKHNlYXJjaFBhcmFtc0lkeCArIDEpXG4gICAgOiBudWxsXG5cbiAgY29uc3Qgb2xkUGFyYW1zID0gc2VhcmNoID8/IHVybFNlYXJjaFBhcmFtcyA/PyB3aW5kb3cubG9jYXRpb24uc2VhcmNoXG4gIGNvbnN0IG5ld1BhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMob2xkUGFyYW1zKVxuXG4gIG5ld1BhcmFtcy5zZXQoUkVGUkVTSF9LRVksICd0cnVlJylcblxuICBjb25zdCBuZXdVcmwgPSBzZWFyY2hQYXJhbXNJZHggIT09IC0xXG4gICAgPyB1cmwuc3Vic3RyaW5nKDAsIHNlYXJjaFBhcmFtc0lkeClcbiAgICA6IHVybFxuXG4gIHJldHVybiBgJHtuZXdVcmx9PyR7bmV3UGFyYW1zLnRvU3RyaW5nKCl9YFxufVxuXG5leHBvcnQgY29uc3QgaGFzRm9yY2VSZWZyZXNoID0gKHNlYXJjaDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKVxuICByZXR1cm4gISFwYXJhbXMuZ2V0KFJFRlJFU0hfS0VZKVxufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlRm9yY2VSZWZyZXNoID0gKHNlYXJjaDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2gpXG4gIGlmIChwYXJhbXMuZ2V0KFJFRlJFU0hfS0VZKSkge1xuICAgIHBhcmFtcy5kZWxldGUoUkVGUkVTSF9LRVkpXG4gIH1cbiAgcmV0dXJuIHBhcmFtcy50b1N0cmluZygpXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUgKi9cclxuaW1wb3J0IHsgdXNlSGlzdG9yeSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCB7IEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2FjdGlvbi5pbnRlcmZhY2UnXHJcbmltcG9ydCB7IGFwcGVuZEZvcmNlUmVmcmVzaCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYWN0aW9ucy91dGlscy9hcHBlbmQtZm9yY2UtcmVmcmVzaCdcclxuaW1wb3J0IHsgQWN0aW9uQ2FsbENhbGxiYWNrIH0gZnJvbSAnLidcclxuaW1wb3J0IHsgdXNlTm90aWNlIH0gZnJvbSAnLi4vdXNlLW5vdGljZSdcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyID0gKG9uQWN0aW9uQ2FsbD86IEFjdGlvbkNhbGxDYWxsYmFjaykgPT4ge1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxyXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcclxuICBjb25zdCBhZGROb3RpY2UgPSB1c2VOb3RpY2UoKVxyXG5cclxuICByZXR1cm4gKHJlc3BvbnNlOiBBY3Rpb25SZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZVxyXG4gICAgaWYgKGRhdGEubm90aWNlKSB7XHJcbiAgICAgIGFkZE5vdGljZShkYXRhLm5vdGljZSlcclxuICAgIH1cclxuICAgIGlmIChkYXRhLnJlZGlyZWN0VXJsICYmIGxvY2F0aW9uLnBhdGhuYW1lICE9PSBkYXRhLnJlZGlyZWN0VXJsKSB7XHJcbiAgICAgIGNvbnN0IGFwcGVuZGVkID0gYXBwZW5kRm9yY2VSZWZyZXNoKGRhdGEucmVkaXJlY3RVcmwpXHJcbiAgICAgIGhpc3RvcnkucHVzaChhcHBlbmRlZClcclxuICAgIH1cclxuICAgIGlmIChvbkFjdGlvbkNhbGwpIHtcclxuICAgICAgb25BY3Rpb25DYWxsKGRhdGEpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcblxyXG5pbXBvcnQgeyBBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvYWN0aW9ucy9hY3Rpb24uaW50ZXJmYWNlJ1xyXG5cclxuaW1wb3J0IHsgQWN0aW9uSlNPTiwgYnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlciwgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xyXG5cclxuaW1wb3J0IHsgRGlmZmVyZW50QWN0aW9uUGFyYW1zLCBBY3Rpb25DYWxsQ2FsbGJhY2ssIFVzZUFjdGlvblJlc3VsdCB9IGZyb20gJy4vdXNlLWFjdGlvbi50eXBlcydcclxuaW1wb3J0IHsgYWN0aW9uSHJlZiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYWN0aW9uL2FjdGlvbi1ocmVmJ1xyXG5pbXBvcnQgeyB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXIgfSBmcm9tICcuL3VzZS1hY3Rpb24tcmVzcG9uc2UtaGFuZGxlcidcclxuXHJcbi8qKlxyXG4gKiBAbG9hZCAuL3VzZS1hY3Rpb24uZG9jLm1kXHJcbiAqIEBzdWJjYXRlZ29yeSBIb29rc1xyXG4gKlxyXG4gKiBAcGFyYW0ge0FjdGlvbkpTT059ICAgYWN0aW9uICAgICAgYWN0aW9uIG9iamVjdFxyXG4gKiBAcGFyYW0ge0FjdGlvblBhcmFtc30gcGFyYW1zXHJcbiAqIEBwYXJhbSB7QWN0aW9uQ2FsbENhbGxiYWNrfSBvbkFjdGlvbkNhbGwgLSBjYWxsYmFjayB0cmlnZ2VyZWQgd2hlbiBhY3Rpb24gaXMgcGVyZm9ybWVkXHJcbiAqIEByZXR1cm4ge1VzZUFjdGlvblJlc3VsdH1cclxuICogQG5ldyBJbiB2ZXJzaW9uIDMuM1xyXG4gKiBAY2xhc3NcclxuICogQGhpZGVjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGlvbjxLIGV4dGVuZHMgQWN0aW9uUmVzcG9uc2U+KFxyXG4gIGFjdGlvbjogQWN0aW9uSlNPTixcclxuICBwYXJhbXM6IERpZmZlcmVudEFjdGlvblBhcmFtcyxcclxuICBvbkFjdGlvbkNhbGw/OiBBY3Rpb25DYWxsQ2FsbGJhY2ssXHJcbik6IFVzZUFjdGlvblJlc3VsdDxLPiB7XHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxyXG5cclxuICBjb25zdCBhY3Rpb25SZXNwb25zZUhhbmRsZXIgPSB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXIob25BY3Rpb25DYWxsKVxyXG5cclxuICBjb25zdCBocmVmID0gYWN0aW9uSHJlZihhY3Rpb24sIHBhcmFtcylcclxuXHJcbiAgY29uc3QgY2FsbEFwaSA9IGJ1aWxkQWN0aW9uQ2FsbEFwaVRyaWdnZXI8Sz4oe1xyXG4gICAgYWN0aW9uLFxyXG4gICAgcGFyYW1zLFxyXG4gICAgYWN0aW9uUmVzcG9uc2VIYW5kbGVyLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIoe1xyXG4gICAgYWN0aW9uLFxyXG4gICAgcGFyYW1zLFxyXG4gICAgYWN0aW9uUmVzcG9uc2VIYW5kbGVyLFxyXG4gICAgcHVzaDogaGlzdG9yeS5wdXNoLFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBocmVmLFxyXG4gICAgY2FsbEFwaSxcclxuICAgIGhhbmRsZUNsaWNrLFxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDdXJyZW50QWRtaW4gfSBmcm9tICcuLi8uLi8uLi9jdXJyZW50LWFkbWluLmludGVyZmFjZSdcclxuXHJcbmV4cG9ydCBjb25zdCBTRVNTSU9OX0lOSVRJQUxJWkUgPSAnU0VTU0lPTl9JTklUSUFMSVpFJ1xyXG5cclxuZXhwb3J0IHR5cGUgU2V0Q3VycmVudEFkbWluUmVzcG9uc2UgPSB7XHJcbiAgdHlwZTogdHlwZW9mIFNFU1NJT05fSU5JVElBTElaRTtcclxuICBkYXRhOiBDdXJyZW50QWRtaW4gfCBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudEFkbWluID0gKGRhdGE6IEN1cnJlbnRBZG1pbiB8IG51bGwgPSBudWxsKTogU2V0Q3VycmVudEFkbWluUmVzcG9uc2UgPT4gKHtcclxuICB0eXBlOiBTRVNTSU9OX0lOSVRJQUxJWkUsXHJcbiAgZGF0YSxcclxufSlcclxuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IFJlZHV4U3RhdGUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcclxuaW1wb3J0IHsgc2V0Q3VycmVudEFkbWluIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9zZXQtY3VycmVudC1hZG1pbidcclxuaW1wb3J0IHsgQ3VycmVudEFkbWluIH0gZnJvbSAnLi4vLi4vY3VycmVudC1hZG1pbi5pbnRlcmZhY2UnXHJcblxyXG5leHBvcnQgdHlwZSBVc2VDdXJyZW50QWRtaW5SZXNwb25zZSA9IFtcclxuICBDdXJyZW50QWRtaW4gfCBudWxsLFxyXG4gIChjdXJyZW50QWRtaW46IEN1cnJlbnRBZG1pbiB8IG51bGwpID0+IEN1cnJlbnRBZG1pbiB8IHt9XHJcbl1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjXHJcbiAqIEhvb2sgd2hpY2ggYWxsb3dzIHlvdSB0byBnZXQgYW5kIHNldCBjdXJyZW50QWRtaW5cclxuICpcclxuICogIyMjIFVzYWdlXHJcbiAqXHJcbiAqIGBgYGphdmFzY3JpcHRcclxuICogaW1wb3J0IHsgdXNlQ3VycmVudEFkbWluIH0gZnJvbSAnYWRtaW4tYnJvJ1xyXG4gKlxyXG4gKiBjb25zdCBteUNvbXBvbmVudCA9ICgpID0+IHtcclxuICogICBjb25zdCBbY3VycmVudEFkbWluLCBzZXRDdXJyZW50QWRtaW5dID0gdXNlQ3VycmVudEFkbWluKClcclxuICogICAvLyAuLi5cclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogQGNsYXNzXHJcbiAqIEBzdWJjYXRlZ29yeSBIb29rc1xyXG4gKiBAYnVuZGxlXHJcbiAqIEByZXR1cm5zIHtVc2VDdXJyZW50QWRtaW5SZXNwb25zZX1cclxuICogQGhpZGVjb25zdHJ1Y3RvclxyXG4gKi9cclxuZnVuY3Rpb24gdXNlQ3VycmVudEFkbWluKCk6IFVzZUN1cnJlbnRBZG1pblJlc3BvbnNlIHtcclxuICBjb25zdCBjdXJyZW50QWRtaW4gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4U3RhdGUpID0+IHN0YXRlLnNlc3Npb24pXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgcmV0dXJuIFtcclxuICAgIGN1cnJlbnRBZG1pbixcclxuICAgIChhZG1pbjogQ3VycmVudEFkbWluIHwgbnVsbCk6IGFueSA9PiBkaXNwYXRjaChzZXRDdXJyZW50QWRtaW4oYWRtaW4pKSxcclxuICBdXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgdXNlQ3VycmVudEFkbWluLFxyXG4gIHVzZUN1cnJlbnRBZG1pbiBhcyBkZWZhdWx0LFxyXG59XHJcblxyXG4vKipcclxuICogUmVzdWx0IG9mIHRoZSB7QGxpbmsgdXNlQ3VycmVudEFkbWlufS5cclxuICogSXQgaXMgYSB0dXBsZSBjb250YWluaW5nIHZhbHVlIGFuZCB0aGUgc2V0dGVyXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtBcnJheX0gVXNlQ3VycmVudEFkbWluUmVzcG9uc2VcclxuICogQG1lbWJlcm9mIHVzZUN1cnJlbnRBZG1pblxyXG4gKiBAYWxpYXMgVXNlQ3VycmVudEFkbWluUmVzcG9uc2VcclxuICogQHByb3BlcnR5IHtDdXJyZW50QWRtaW4gfCBudWxsfSBbMF0gICAgY3VycmVudCBhZG1pblxyXG4gKiBAcHJvcGVydHkge1JlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPEN1cnJlbnRBZG1pbj4+fSBbMV0gICAgdmFsdWUgc2V0dGVyIGNvbXBhdGlibGVcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggcmVhY3QgdXNlU3RhdGVcclxuICovXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFVzZUxvY2FsU3RvcmFnZVJlc3VsdCB9IGZyb20gJy4vdXNlLWxvY2FsLXN0b3JhZ2UtcmVzdWx0LnR5cGUnXHJcblxyXG4vKipcclxuICogQGxvYWQgLi91c2UtbG9jYWwtc3RvcmFnZS5kb2MubWRcclxuICogQHN1YmNhdGVnb3J5IEhvb2tzXHJcbiAqIEBjbGFzc1xyXG4gKiBAc2VlIGh0dHBzOi8vdXNlaG9va3MuY29tL3VzZUxvY2FsU3RvcmFnZVxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5ICAgICAgICAgIGtleSB1bmRlciB3aGljaCBob29rIHdpbGwgc3RvcmUgdGhlIGRhdGFcclxuICogQHBhcmFtIHtUfSAgICAgIGluaXRpYWxWYWx1ZSAgICB2YWx1ZSB3aGljaCB3aWxsIGJlIHN0cmluZ2lmaWVkIGFuZCBzdG9yZWRcclxuICogQHJldHVybiB7VXNlTG9jYWxTdG9yYWdlUmVzdWx0PFQ+fVxyXG4gKiBAbmV3IEluIHZlcnNpb24gMy4zXHJcbiAqIEBidW5kbGVcclxuICogQHR5cGUge0Z1bmN0aW9ufVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2FsU3RvcmFnZTxUPihrZXk6IHN0cmluZywgaW5pdGlhbFZhbHVlOiBUKTogVXNlTG9jYWxTdG9yYWdlUmVzdWx0PFQ+IHtcclxuICAvLyBTdGF0ZSB0byBzdG9yZSBvdXIgdmFsdWVcclxuICAvLyBQYXNzIGluaXRpYWwgc3RhdGUgZnVuY3Rpb24gdG8gdXNlU3RhdGUgc28gbG9naWMgaXMgb25seSBleGVjdXRlZCBvbmNlXHJcbiAgY29uc3QgW3N0b3JlZFZhbHVlLCBzZXRTdG9yZWRWYWx1ZV0gPSB1c2VTdGF0ZTxUPigoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBHZXQgZnJvbSBsb2NhbCBzdG9yYWdlIGJ5IGtleVxyXG4gICAgICBjb25zdCBpdGVtID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcclxuICAgICAgLy8gUGFyc2Ugc3RvcmVkIGpzb24gb3IgaWYgbm9uZSByZXR1cm4gaW5pdGlhbFZhbHVlXHJcbiAgICAgIHJldHVybiBpdGVtID8gSlNPTi5wYXJzZShpdGVtKSA6IGluaXRpYWxWYWx1ZVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gSWYgZXJyb3IgYWxzbyByZXR1cm4gaW5pdGlhbFZhbHVlXHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICByZXR1cm4gaW5pdGlhbFZhbHVlXHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLy8gUmV0dXJuIGEgd3JhcHBlZCB2ZXJzaW9uIG9mIHVzZVN0YXRlJ3Mgc2V0dGVyIGZ1bmN0aW9uIHRoYXQgLi4uXHJcbiAgLy8gLi4uIHBlcnNpc3RzIHRoZSBuZXcgdmFsdWUgdG8gbG9jYWxTdG9yYWdlLlxyXG4gIGNvbnN0IHNldFZhbHVlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxUPj4gPSAodmFsdWUpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIEFsbG93IHZhbHVlIHRvIGJlIGEgZnVuY3Rpb24gc28gd2UgaGF2ZSBzYW1lIEFQSSBhcyB1c2VTdGF0ZVxyXG4gICAgICBjb25zdCB2YWx1ZVRvU3RvcmUgPSB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gdmFsdWUoc3RvcmVkVmFsdWUpIDogdmFsdWVcclxuICAgICAgLy8gU2F2ZSBzdGF0ZVxyXG4gICAgICBzZXRTdG9yZWRWYWx1ZSh2YWx1ZVRvU3RvcmUpXHJcbiAgICAgIC8vIFNhdmUgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZVRvU3RvcmUpKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgLy8gQSBtb3JlIGFkdmFuY2VkIGltcGxlbWVudGF0aW9uIHdvdWxkIGhhbmRsZSB0aGUgZXJyb3IgY2FzZVxyXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBbc3RvcmVkVmFsdWUsIHNldFZhbHVlXVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VMb2NhbFN0b3JhZ2VcclxuIiwiaW1wb3J0IHsgdXNlSGlzdG9yeSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXHJcbmltcG9ydCB7XHJcbiAgTmF2aWdhdGlvblByb3BzLFxyXG4gIE5hdmlnYXRpb25FbGVtZW50UHJvcHMsXHJcbiAgTmF2aWdhdGlvbkVsZW1lbnRXaXRoQ2hpbGRyZW5Qcm9wcyxcclxufSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHVzZUxvY2FsU3RvcmFnZSBmcm9tICcuL3VzZS1sb2NhbC1zdG9yYWdlL3VzZS1sb2NhbC1zdG9yYWdlJ1xyXG5cclxuY29uc3QgaXNTZWxlY3RlZCA9IChocmVmLCBsb2NhdGlvbik6IGJvb2xlYW4gPT4ge1xyXG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7aHJlZn0oJHwvKWApXHJcbiAgcmV0dXJuICEhbG9jYXRpb24ucGF0aG5hbWUubWF0Y2gocmVnRXhwKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlTmF2aWdhdGlvblJlc291cmNlcyhcclxuICByZXNvdXJjZXM6IEFycmF5PFJlc291cmNlSlNPTj4sXHJcbik6IE5hdmlnYXRpb25Qcm9wc1snZWxlbWVudHMnXSB7XHJcbiAgY29uc3QgW29wZW5FbGVtZW50cywgc2V0T3BlbkVsZW1lbnRzXSA9IHVzZUxvY2FsU3RvcmFnZTxSZWNvcmQ8c3RyaW5nLCBib29sZWFuPj4oXHJcbiAgICAnc2lkZWJhckVsZW1lbnRzJywge30sXHJcbiAgKVxyXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcclxuXHJcbiAgY29uc3QgZW5yaWNoUmVzb3VyY2UgPSB1c2VNZW1vKCgpID0+IChcclxuICAgIHJlc291cmNlOiBSZXNvdXJjZUpTT04sXHJcbiAgICBpY29uPzogc3RyaW5nLFxyXG4gICk6IE5hdmlnYXRpb25FbGVtZW50V2l0aENoaWxkcmVuUHJvcHMgPT4gKHtcclxuICAgIGhyZWY6IHJlc291cmNlLmhyZWYgfHwgdW5kZWZpbmVkLFxyXG4gICAgaWNvbixcclxuICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQocmVzb3VyY2UuaHJlZiwgbG9jYXRpb24pLFxyXG4gICAgbGFiZWw6IHJlc291cmNlLm5hbWUsXHJcbiAgICBpZDogcmVzb3VyY2UuaWQsXHJcbiAgICBvbkNsaWNrOiAoZXZlbnQpOiB2b2lkID0+IHtcclxuICAgICAgaWYgKHJlc291cmNlLmhyZWYpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKHJlc291cmNlLmhyZWYpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSksIFtsb2NhdGlvbiwgaGlzdG9yeV0pXHJcblxyXG4gIC8vIGdyb3VwaW5nIHJlc291cmNlcyBpbnRvIHBhcmVudHNcclxuICBjb25zdCBtYXAgPSByZXNvdXJjZXNcclxuICAgIC5maWx0ZXIocmVzID0+IHJlcy5ocmVmKSAvLyBmaXJzdCBmaWx0ZXIgb3V0IHJlc291cmNlIHdoaWNoIGFyZSBub3QgdmlzaWJsZVxyXG4gICAgLnJlZHVjZSgobWVtbywgcmVzb3VyY2UpID0+IHtcclxuICAgICAgLy8gaW4gY2FzZSByZXNvdXJjZSBoYXMgdGhlIHNhbWUgbmFtZSBhcyBwYXJlbnQgd2UgbmFtZXNwYWNlIGl0IHdpdCBcInJlc291cmNlLVwiXCJcclxuICAgICAgY29uc3Qga2V5ID0gcmVzb3VyY2UubmF2aWdhdGlvbj8ubmFtZSB8fCBbJ3Jlc291cmNlJywgcmVzb3VyY2UubmFtZV0uam9pbignLScpXHJcblxyXG4gICAgICBpZiAoIXJlc291cmNlLm5hdmlnYXRpb24gfHwgcmVzb3VyY2UubmF2aWdhdGlvbi5uYW1lID09PSBudWxsKSB7XHJcbiAgICAgICAgbWVtb1trZXldID0gZW5yaWNoUmVzb3VyY2UocmVzb3VyY2UsIHJlc291cmNlLm5hdmlnYXRpb24/Lmljb24pXHJcbiAgICAgIH0gZWxzZSBpZiAobWVtb1trZXldICYmIG1lbW9ba2V5XS5lbGVtZW50cyAmJiByZXNvdXJjZS5uYXZpZ2F0aW9uPy5uYW1lKSB7XHJcbiAgICAgICAgKG1lbW9ba2V5XS5lbGVtZW50cyBhcyBBcnJheTxOYXZpZ2F0aW9uRWxlbWVudFByb3BzPikucHVzaChlbnJpY2hSZXNvdXJjZShyZXNvdXJjZSkpXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVtb1trZXldID0ge1xyXG4gICAgICAgICAgZWxlbWVudHM6IFtlbnJpY2hSZXNvdXJjZShyZXNvdXJjZSldLFxyXG4gICAgICAgICAgbGFiZWw6IHJlc291cmNlLm5hdmlnYXRpb24/Lm5hbWUsXHJcbiAgICAgICAgICBpY29uOiByZXNvdXJjZS5uYXZpZ2F0aW9uPy5pY29uLFxyXG4gICAgICAgICAgb25DbGljazogKCk6IHZvaWQgPT4gc2V0T3BlbkVsZW1lbnRzKHtcclxuICAgICAgICAgICAgLi4ub3BlbkVsZW1lbnRzLFxyXG4gICAgICAgICAgICBba2V5XTogIW9wZW5FbGVtZW50c1trZXldLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBpc09wZW46ICEhb3BlbkVsZW1lbnRzW2tleV0sXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtZW1vXHJcbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBOYXZpZ2F0aW9uRWxlbWVudFdpdGhDaGlsZHJlblByb3BzPilcclxuXHJcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMobWFwKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VOYXZpZ2F0aW9uUmVzb3VyY2VzXHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlTG9jYXRpb24sIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgdXNlTm90aWNlIGZyb20gJy4uL3VzZS1ub3RpY2UnXHJcbmltcG9ydCBBcGlDbGllbnQgZnJvbSAnLi4vLi4vdXRpbHMvYXBpLWNsaWVudCdcclxuaW1wb3J0IHsgTGlzdEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2xpc3QvbGlzdC1hY3Rpb24nXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vdXNlLXRyYW5zbGF0aW9uJ1xyXG5pbXBvcnQgeyBoYXNGb3JjZVJlZnJlc2gsIHJlbW92ZUZvcmNlUmVmcmVzaCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYWN0aW9ucy91dGlscy9hcHBlbmQtZm9yY2UtcmVmcmVzaCdcclxuaW1wb3J0IHsgVXNlUmVjb3Jkc1Jlc3VsdCB9IGZyb20gJy4vdXNlLXJlY29yZHMtcmVzdWx0LnR5cGUnXHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcclxuXHJcbi8qKlxyXG4gKiBAbG9hZCAuL3VzZS1yZWNvcmRzLmRvYy5tZFxyXG4gKiBAc3ViY2F0ZWdvcnkgSG9va3NcclxuICogQGNsYXNzXHJcbiAqIEBoaWRlY29uc3RydWN0b3JcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgICAgICBpZCBvZiBhIHJlc291cmNlIGZvciB3aGljaCB5b3Ugd2FudCB0byBmZXRjaCByZWNvcmRzXHJcbiAqIEByZXR1cm4ge1VzZVJlY29yZHNSZXN1bHR9XHJcbiAqIEBuZXcgSW4gdmVyc2lvbiAzLjNcclxuICogQGJ1bmRsZVxyXG4gKiBAdHlwZSB7RnVuY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiB1c2VSZWNvcmRzKHJlc291cmNlSWQ6IHN0cmluZyk6IFVzZVJlY29yZHNSZXN1bHQge1xyXG4gIGNvbnN0IFtyZWNvcmRzLCBzZXRSZWNvcmRzXSA9IHVzZVN0YXRlPEFycmF5PFJlY29yZEpTT04+PihbXSlcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcGVyUGFnZSwgc2V0UGVyUGFnZV0gPSB1c2VTdGF0ZSgxMClcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKVxyXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbZGlyZWN0aW9uLCBzZXREaXJlY3Rpb25dID0gdXNlU3RhdGU8J2FzYyd8ICdkZXNjJz4oJ2FzYycpXHJcbiAgY29uc3QgW3NvcnRCeSwgc2V0U29ydEJ5XSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oKVxyXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxyXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcclxuICBjb25zdCBhZGROb3RpY2UgPSB1c2VOb3RpY2UoKVxyXG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG4gIGNvbnN0IG9uTm90aWNlID0gdXNlTm90aWNlKClcclxuXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gKCk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxMaXN0QWN0aW9uUmVzcG9uc2U+PiA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCBxdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKVxyXG5cclxuICAgIGNvbnN0IHByb21pc2UgPSBhcGkucmVzb3VyY2VBY3Rpb24oe1xyXG4gICAgICBhY3Rpb25OYW1lOiAnbGlzdCcsIHJlc291cmNlSWQsIHBhcmFtczogcXVlcnksXHJcbiAgICB9KSBhcyBQcm9taXNlPEF4aW9zUmVzcG9uc2U8TGlzdEFjdGlvblJlc3BvbnNlPj5cclxuXHJcbiAgICBwcm9taXNlLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGxpc3RBY3Rpb25SZXNwb25zZSA9IHJlc3BvbnNlLmRhdGEgYXMgTGlzdEFjdGlvblJlc3BvbnNlXHJcbiAgICAgIGlmIChsaXN0QWN0aW9uUmVzcG9uc2Uubm90aWNlKSB7XHJcbiAgICAgICAgb25Ob3RpY2UobGlzdEFjdGlvblJlc3BvbnNlLm5vdGljZSlcclxuICAgICAgfVxyXG4gICAgICBpZiAobGlzdEFjdGlvblJlc3BvbnNlLnJlZGlyZWN0VXJsKSB7XHJcbiAgICAgICAgaGlzdG9yeS5wdXNoKGxpc3RBY3Rpb25SZXNwb25zZS5yZWRpcmVjdFVybClcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgc2V0UmVjb3JkcyhsaXN0QWN0aW9uUmVzcG9uc2UucmVjb3JkcylcclxuICAgICAgc2V0UGFnZShsaXN0QWN0aW9uUmVzcG9uc2UubWV0YS5wYWdlKVxyXG4gICAgICBzZXRQZXJQYWdlKGxpc3RBY3Rpb25SZXNwb25zZS5tZXRhLnBlclBhZ2UpXHJcbiAgICAgIHNldFRvdGFsKGxpc3RBY3Rpb25SZXNwb25zZS5tZXRhLnRvdGFsKVxyXG4gICAgICBzZXREaXJlY3Rpb24obGlzdEFjdGlvblJlc3BvbnNlLm1ldGEuZGlyZWN0aW9uKVxyXG4gICAgICBzZXRTb3J0QnkobGlzdEFjdGlvblJlc3BvbnNlLm1ldGEuc29ydEJ5KVxyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICBhZGROb3RpY2Uoe1xyXG4gICAgICAgIG1lc3NhZ2U6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2Vycm9yRmV0Y2hpbmdSZWNvcmRzJywgcmVzb3VyY2VJZCksXHJcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gcHJvbWlzZVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChoYXNGb3JjZVJlZnJlc2gobG9jYXRpb24uc2VhcmNoKSkge1xyXG4gICAgICBoaXN0b3J5LnJlcGxhY2UoW1xyXG4gICAgICAgIGxvY2F0aW9uLnBhdGhuYW1lLCByZW1vdmVGb3JjZVJlZnJlc2gobG9jYXRpb24uc2VhcmNoKS50b1N0cmluZygpLFxyXG4gICAgICBdLmpvaW4oJz8nKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZldGNoRGF0YSgpXHJcbiAgICB9XHJcbiAgfSwgW3Jlc291cmNlSWQsIGxvY2F0aW9uLnNlYXJjaF0pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZWNvcmRzLFxyXG4gICAgbG9hZGluZyxcclxuICAgIHBhZ2UsXHJcbiAgICB0b3RhbCxcclxuICAgIGRpcmVjdGlvbixcclxuICAgIHNvcnRCeSxcclxuICAgIHBlclBhZ2UsXHJcbiAgICBmZXRjaERhdGEsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHVzZVJlY29yZHMgYXMgZGVmYXVsdCxcclxuICB1c2VSZWNvcmRzLFxyXG59XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBVc2VTZWxlY3RlZFJlY29yZHNSZXN1bHQgfSBmcm9tICcuL3VzZS1zZWxlY3RlZC1yZWNvcmRzLXJlc3VsdC50eXBlJ1xyXG5cclxuLyoqXHJcbiAqIEBsb2FkIC4vdXNlLXNlbGVjdGVkLXJlY29yZHMuZG9jLm1kXHJcbiAqIEBzdWJjYXRlZ29yeSBIb29rc1xyXG4gKiBAY2xhc3NcclxuICogQGhpZGVjb25zdHJ1Y3RvclxyXG4gKiBAcGFyYW0ge0FycmF5PFJlY29yZEpTT04+fSByZWNvcmRzICAgICBMaXN0IG9mIHJlY29yZHMgb24gd2hpY2ggeW91IGNhbiBwZXJmb3JtIGBzZWxlY3RgIGFjdGlvblxyXG4gKiBAcmV0dXJuIHtVc2VTZWxlY3RlZFJlY29yZHNSZXN1bHR9XHJcbiAqIEBuZXcgSW4gdmVyc2lvbiAzLjNcclxuICogQGJ1bmRsZVxyXG4gKiBAdHlwZSB7RnVuY3Rpb259XHJcbiAqL1xyXG5mdW5jdGlvbiB1c2VTZWxlY3RlZFJlY29yZHMocmVjb3JkczogQXJyYXk8UmVjb3JkSlNPTj4pOiBVc2VTZWxlY3RlZFJlY29yZHNSZXN1bHQge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFJlY29yZHMsIHNldFNlbGVjdGVkUmVjb3Jkc10gPSB1c2VTdGF0ZTxBcnJheTxSZWNvcmRKU09OPj4oW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChyZWNvcmQ6IFJlY29yZEpTT04pOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBzZWxlY3RlZFJlY29yZHMuZmluZEluZGV4KHNlbGVjdGVkID0+IHNlbGVjdGVkLmlkID09PSByZWNvcmQuaWQpXHJcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCA8IDApIHtcclxuICAgICAgc2V0U2VsZWN0ZWRSZWNvcmRzKFsuLi5zZWxlY3RlZFJlY29yZHMsIHJlY29yZF0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBuZXdTZWxlY3RlZFJlY29yZHMgPSBbLi4uc2VsZWN0ZWRSZWNvcmRzXVxyXG4gICAgICBuZXdTZWxlY3RlZFJlY29yZHMuc3BsaWNlKHNlbGVjdGVkSW5kZXgsIDEpXHJcbiAgICAgIHNldFNlbGVjdGVkUmVjb3JkcyhuZXdTZWxlY3RlZFJlY29yZHMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3RBbGwgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCBtaXNzaW5nID0gcmVjb3Jkcy5maWx0ZXIocmVjb3JkID0+IChcclxuICAgICAgIXNlbGVjdGVkUmVjb3Jkcy5maW5kKHNlbGVjdGVkID0+IHNlbGVjdGVkLmlkID09PSByZWNvcmQuaWQpXHJcbiAgICAgICYmIHJlY29yZC5idWxrQWN0aW9ucy5sZW5ndGhcclxuICAgICkpXHJcbiAgICBpZiAobWlzc2luZy5sZW5ndGgpIHtcclxuICAgICAgc2V0U2VsZWN0ZWRSZWNvcmRzKFsuLi5zZWxlY3RlZFJlY29yZHMsIC4uLm1pc3NpbmddKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbmV3U2VsZWN0ZWRSZWNvcmRzID0gc2VsZWN0ZWRSZWNvcmRzLmZpbHRlcihzZWxlY3RlZCA9PiAoXHJcbiAgICAgICAgIXJlY29yZHMuZmluZChyZWNvcmQgPT4gcmVjb3JkLmlkID09PSBzZWxlY3RlZC5pZClcclxuICAgICAgKSlcclxuICAgICAgc2V0U2VsZWN0ZWRSZWNvcmRzKG5ld1NlbGVjdGVkUmVjb3JkcylcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBoYW5kbGVTZWxlY3QsXHJcbiAgICBoYW5kbGVTZWxlY3RBbGwsXHJcbiAgICBzZWxlY3RlZFJlY29yZHMsXHJcbiAgICBzZXRTZWxlY3RlZFJlY29yZHMsXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIHVzZVNlbGVjdGVkUmVjb3JkcyBhcyBkZWZhdWx0LFxyXG4gIHVzZVNlbGVjdGVkUmVjb3JkcyxcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9yZXNvdXJjZS1qc29uLmludGVyZmFjZSdcbmltcG9ydCB7IFJlZHV4U3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcblxuLyoqXG4gKiBAbG9hZCAuL3VzZS1yZXNvdXJjZS5kb2MubWRcbiAqIEBzdWJjYXRlZ29yeSBIb29rc1xuICogQGNsYXNzXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKiBAbmV3IGluIHZlcnNpb24gMy4zXG4gKiBAYnVuZGxlXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVzb3VyY2VJZCAgICBJZCBvZiBhIHJlc291cmNlIHlvdSB3YW50IHRvIGdldFxuICovXG5jb25zdCB1c2VSZXNvdXJjZSA9IChyZXNvdXJjZUlkOiBzdHJpbmcpOiBSZXNvdXJjZUpTT04gfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCByZXNvdXJjZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4U3RhdGUpID0+IHN0YXRlLnJlc291cmNlcylcblxuICBjb25zdCBmb3VuZFJlc291cmNlID0gcmVzb3VyY2VzLmZpbmQocmVzb3VyY2UgPT4gcmVzb3VyY2UuaWQgPT09IHJlc291cmNlSWQpXG5cbiAgcmV0dXJuIGZvdW5kUmVzb3VyY2Vcbn1cblxuZXhwb3J0IHtcbiAgdXNlUmVzb3VyY2UgYXMgZGVmYXVsdCxcbiAgdXNlUmVzb3VyY2UsXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2UtdHJhbnNsYXRpb24nXHJcbmltcG9ydCB7IFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCBhbGxvd092ZXJyaWRlIGZyb20gJy4uLy4uLy4uL2hvYy9hbGxvdy1vdmVycmlkZSdcclxuaW1wb3J0IHsgdXNlTmF2aWdhdGlvblJlc291cmNlcyB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xyXG5cclxuLyoqXHJcbiAqIEBhbGlhcyBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uUHJvcHNcclxuICogQG1lbWJlcm9mIFNpZGViYXJSZXNvdXJjZVNlY3Rpb25cclxuICovXHJcbmV4cG9ydCB0eXBlIFNpZGViYXJSZXNvdXJjZVNlY3Rpb25Qcm9wcyA9IHtcclxuICAvKiogTGlzdCBvZiB0aGUgcmVzb3VyY2VzIHdoaWNoIHNob3VsZCBiZSByZW5kZXJlZCAqL1xyXG4gIHJlc291cmNlczogQXJyYXk8UmVzb3VyY2VKU09OPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEdyb3VwcyByZXNvdXJjZXMgYnkgc2VjdGlvbnMgYW5kIHJlbmRlcnMgdGhlIGxpc3QgaW4ge0BsaW5rIFNpZGViYXJ9XHJcbiAqXHJcbiAqICMjIyBVc2FnZVxyXG4gKlxyXG4gKiBgYGBcclxuICogaW1wb3J0IHsgU2lkZWJhclJlc291cmNlU2VjdGlvbiB9IGZyb20gJ2FkbWluLWJyb2BcclxuICogYGBgXHJcbiAqXHJcbiAqIEBjb21wb25lbnRcclxuICogQHN1YmNhdGVnb3J5IEFwcGxpY2F0aW9uXHJcbiAqIEBuYW1lIFNpZGViYXJSZXNvdXJjZVNlY3Rpb25cclxuICovXHJcbmNvbnN0IFNpZGViYXJSZXNvdXJjZVNlY3Rpb25PcmlnaW5hbDogRkM8U2lkZWJhclJlc291cmNlU2VjdGlvblByb3BzPiA9ICh7IHJlc291cmNlcyB9KSA9PiB7XHJcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VOYXZpZ2F0aW9uUmVzb3VyY2VzKHJlc291cmNlcylcclxuXHJcbiAgY29uc3QgeyB0cmFuc2xhdGVMYWJlbCB9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPE5hdmlnYXRpb25cclxuICAgICAgbGFiZWw9e3RyYW5zbGF0ZUxhYmVsKCduYXZpZ2F0aW9uJyl9XHJcbiAgICAgIGVsZW1lbnRzPXtlbGVtZW50c31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG4vLyBSb2xsdXAgY2Fubm90IGhhbmRsZSB0eXBlIGV4cG9ydHMgd2VsbCAtIHRoYXQgaXMgd2h5IHdlIG5lZWQgdG8gZG8gdGhpcyBoYWNrIHdpdGhcclxuLy8gZXhwb3J0aW5nIGRlZmF1bHQgYW5kIG5hbWVkIFNpZGViYXJSZXNvdXJjZVNlY3Rpb25cclxuY29uc3QgU2lkZWJhclJlc291cmNlU2VjdGlvbiA9IGFsbG93T3ZlcnJpZGUoU2lkZWJhclJlc291cmNlU2VjdGlvbk9yaWdpbmFsLCAnU2lkZWJhclJlc291cmNlU2VjdGlvbicpXHJcblxyXG5leHBvcnQgeyBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uIH1cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclJlc291cmNlU2VjdGlvblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IEJveCwgY3NzQ2xhc3MsIHRoZW1lR2V0IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5cclxuaW1wb3J0IHsgQnJhbmRpbmdPcHRpb25zIH0gZnJvbSAnc3JjL2FkbWluLWJyby1vcHRpb25zLmludGVyZmFjZSdcclxuaW1wb3J0IHsgUmVzb3VyY2VKU09OLCBQYWdlSlNPTiB9IGZyb20gJ3NyYy9mcm9udGVuZC9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgU2lkZWJhckJyYW5kaW5nIGZyb20gJy4vc2lkZWJhci1icmFuZGluZydcclxuaW1wb3J0IFNpZGViYXJQYWdlcyBmcm9tICcuL3NpZGViYXItcGFnZXMnXHJcbmltcG9ydCB7IFJlZHV4U3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zdG9yZSdcclxuaW1wb3J0IFNpZGViYXJGb290ZXIgZnJvbSAnLi9zaWRlYmFyLWZvb3RlcidcclxuXHJcbmltcG9ydCBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uIGZyb20gJy4vc2lkZWJhci1yZXNvdXJjZS1zZWN0aW9uJ1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBpc1Zpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZFNpZGViYXIgPSBzdHlsZWQoQm94KWBcclxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3M7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBmbGV4LXNocmluazogMDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAmLmhpZGRlbiB7XHJcbiAgICBsZWZ0OiAtJHt0aGVtZUdldCgnc2l6ZXMnLCAnc2lkZWJhcldpZHRoJyl9O1xyXG4gIH1cclxuICAmLnZpc2libGUge1xyXG4gICAgbGVmdDogMDtcclxuICB9XHJcbmBcclxuXHJcblN0eWxlZFNpZGViYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIHBvc2l0aW9uOiBbJ2Fic29sdXRlJywgJ2Fic29sdXRlJywgJ2Fic29sdXRlJywgJ2Fic29sdXRlJywgJ2luaGVyaXQnXSxcclxuICB3aWR0aDogJ3NpZGViYXJXaWR0aCcsXHJcbiAgYm9yZGVyUmlnaHQ6ICdkZWZhdWx0JyxcclxuICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgekluZGV4OiA1MCxcclxuICBiZzogJ3doaXRlJyxcclxufVxyXG5cclxuY29uc3QgU2lkZWJhcjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpc1Zpc2libGUgfSA9IHByb3BzXHJcbiAgY29uc3QgW2JyYW5kaW5nLCByZXNvdXJjZXMsIHBhZ2VzXTogW0JyYW5kaW5nT3B0aW9ucywgUmVzb3VyY2VKU09OW10sIFBhZ2VKU09OW11dID0gdXNlU2VsZWN0b3IoXHJcbiAgICAoc3RhdGU6IFJlZHV4U3RhdGUpID0+IFtcclxuICAgICAgc3RhdGUuYnJhbmRpbmcsIHN0YXRlLnJlc291cmNlcywgc3RhdGUucGFnZXMsXHJcbiAgICBdLFxyXG4gIClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRTaWRlYmFyXHJcbiAgICAgIGNsYXNzTmFtZT17aXNWaXNpYmxlID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9XHJcbiAgICA+XHJcbiAgICAgIDxTaWRlYmFyQnJhbmRpbmcgYnJhbmRpbmc9e2JyYW5kaW5nfSAvPlxyXG4gICAgICA8Qm94IGZsZXhHcm93PXsxfSBjbGFzc05hbWU9e2Nzc0NsYXNzKCdSZXNvdXJjZXMnKX0+XHJcbiAgICAgICAgPFNpZGViYXJSZXNvdXJjZVNlY3Rpb24gcmVzb3VyY2VzPXtyZXNvdXJjZXN9IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8U2lkZWJhclBhZ2VzIHBhZ2VzPXtwYWdlc30gLz5cclxuICAgICAge2JyYW5kaW5nPy5zb2Z0d2FyZUJyb3RoZXJzICYmIDxTaWRlYmFyRm9vdGVyIC8+fVxyXG4gICAgPC9TdHlsZWRTaWRlYmFyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhclxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEN1cnJlbnRVc2VyTmF2LCBCb3gsIEN1cnJlbnRVc2VyTmF2UHJvcHMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgeyBDdXJyZW50QWRtaW4gfSBmcm9tICcuLi8uLi8uLi9jdXJyZW50LWFkbWluLmludGVyZmFjZSdcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9ob29rcydcclxuaW1wb3J0IGFsbG93T3ZlcnJpZGUgZnJvbSAnLi4vLi4vaG9jL2FsbG93LW92ZXJyaWRlJ1xyXG5cclxuZXhwb3J0IHR5cGUgTG9nZ2VkSW5Qcm9wcyA9IHtcclxuICBzZXNzaW9uOiBDdXJyZW50QWRtaW47XHJcbiAgcGF0aHM6IHtcclxuICAgIGxvZ291dFBhdGg6IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG5jb25zdCBMb2dnZWRJbjogUmVhY3QuRkM8TG9nZ2VkSW5Qcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHNlc3Npb24sIHBhdGhzIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHsgdHJhbnNsYXRlQnV0dG9uIH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcblxyXG4gIGNvbnN0IGRyb3BBY3Rpb25zOiBDdXJyZW50VXNlck5hdlByb3BzWydkcm9wQWN0aW9ucyddID0gW3tcclxuICAgIGxhYmVsOiB0cmFuc2xhdGVCdXR0b24oJ2xvZ291dCcpLFxyXG4gICAgb25DbGljazogKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aHMubG9nb3V0UGF0aFxyXG4gICAgfSxcclxuICAgIGljb246ICdMb2dvdXQnLFxyXG4gIH1dXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggZmxleFNocmluaz17MH0+XHJcbiAgICAgIDxDdXJyZW50VXNlck5hdlxyXG4gICAgICAgIG5hbWU9e3Nlc3Npb24uZW1haWx9XHJcbiAgICAgICAgdGl0bGU9e3Nlc3Npb24udGl0bGV9XHJcbiAgICAgICAgYXZhdGFyVXJsPXtzZXNzaW9uLmF2YXRhclVybH1cclxuICAgICAgICBkcm9wQWN0aW9ucz17ZHJvcEFjdGlvbnN9XHJcbiAgICAgIC8+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IE92ZXJyaWRhYmxlTG9nZ2VkSW4gPSBhbGxvd092ZXJyaWRlKExvZ2dlZEluLCAnTG9nZ2VkSW4nKVxyXG5cclxuZXhwb3J0IHtcclxuICBPdmVycmlkYWJsZUxvZ2dlZEluIGFzIGRlZmF1bHQsXHJcbiAgT3ZlcnJpZGFibGVMb2dnZWRJbiBhcyBMb2dnZWRJbixcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IGNzc0NsYXNzLCBUZXh0LCBCb3ggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgeyBWZXJzaW9uUHJvcHMgfSBmcm9tICcuLi8uLi8uLi9hZG1pbi1icm8tb3B0aW9ucy5pbnRlcmZhY2UnXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXHJcblxyXG5leHBvcnQgdHlwZSBQcm9wcyA9IHtcclxuICB2ZXJzaW9uczogVmVyc2lvblByb3BzO1xyXG59XHJcblxyXG5jb25zdCBWZXJzaW9uSXRlbSA9IHN0eWxlZChUZXh0KWBcclxuICBwYWRkaW5nOiAxMnB4IDI0cHggMTJweCAwO1xyXG5gXHJcblxyXG5WZXJzaW9uSXRlbS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgZGlzcGxheTogWydub25lJywgJ2Jsb2NrJ10sXHJcbiAgY29sb3I6ICdncmV5MTAwJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFZlcnNpb246IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdmVyc2lvbnMgfSA9IHByb3BzXHJcbiAgY29uc3QgeyBhZG1pbiwgYXBwIH0gPSB2ZXJzaW9uc1xyXG5cclxuICBjb25zdCB7IHRyYW5zbGF0ZUxhYmVsIH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGZsZXggZmxleEdyb3c9ezF9IHB5PVwiZGVmYXVsdFwiIHB4PVwieHhsXCIgY2xhc3NOYW1lPXtjc3NDbGFzcygnVmVyc2lvbicpfT5cclxuICAgICAge2FkbWluICYmIChcclxuICAgICAgICA8VmVyc2lvbkl0ZW0+XHJcbiAgICAgICAgICB7dHJhbnNsYXRlTGFiZWwoJ2FkbWluVmVyc2lvbicsIHsgdmVyc2lvbjogYWRtaW4gfSl9XHJcbiAgICAgICAgPC9WZXJzaW9uSXRlbT5cclxuICAgICAgKX1cclxuICAgICAge2FwcCAmJiAoXHJcbiAgICAgICAgPFZlcnNpb25JdGVtPlxyXG4gICAgICAgICAge3RyYW5zbGF0ZUxhYmVsKCdhcHBWZXJzaW9uJywgeyB2ZXJzaW9uOiBhcHAgfSl9XHJcbiAgICAgICAgPC9WZXJzaW9uSXRlbT5cclxuICAgICAgKX1cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmVyc2lvblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IGNzc0NsYXNzLCBCb3gsIEljb24sIHRoZW1lR2V0IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5cclxuaW1wb3J0IExvZ2dlZEluIGZyb20gJy4vbG9nZ2VkLWluJ1xyXG5pbXBvcnQgVmVyc2lvbiBmcm9tICcuL3ZlcnNpb24nXHJcblxyXG5pbXBvcnQgeyBSZWR1eFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXHJcblxyXG5cclxuY29uc3QgTmF2QmFyID0gc3R5bGVkKEJveClgXHJcbiAgaGVpZ2h0OiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuc2l6ZXMubmF2YmFySGVpZ2h0fTtcclxuICBib3JkZXItYm90dG9tOiAke3RoZW1lR2V0KCdib3JkZXJzJywgJ2RlZmF1bHQnKX07XHJcbiAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5gXHJcblxyXG5OYXZCYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIGNsYXNzTmFtZTogY3NzQ2xhc3MoJ05hdkJhcicpLFxyXG59XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHRvZ2dsZVNpZGViYXI6IChhbnkpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBUb3BCYXI6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgdG9nZ2xlU2lkZWJhciB9ID0gcHJvcHNcclxuICBjb25zdCBbc2Vzc2lvbiwgcGF0aHMsIHZlcnNpb25zXSA9IHVzZVNlbGVjdG9yKFxyXG4gICAgKHN0YXRlOiBSZWR1eFN0YXRlKSA9PiBbc3RhdGUuc2Vzc2lvbiwgc3RhdGUucGF0aHMsIHN0YXRlLnZlcnNpb25zXSxcclxuICApXHJcbiAgcmV0dXJuIChcclxuICAgIDxOYXZCYXI+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBweT1cImxnXCJcclxuICAgICAgICBweD17WydkZWZhdWx0JywgJ2xnJ119XHJcbiAgICAgICAgb25DbGljaz17dG9nZ2xlU2lkZWJhcn1cclxuICAgICAgICBkaXNwbGF5PXtbJ2Jsb2NrJywgJ2Jsb2NrJywgJ2Jsb2NrJywgJ2Jsb2NrJywgJ25vbmUnXX1cclxuICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEljb24gaWNvbj1cIk1lbnVcIiBzaXplPXszMn0gY29sb3I9XCJncmV5MTAwXCIgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxWZXJzaW9uIHZlcnNpb25zPXt2ZXJzaW9uc30gLz5cclxuICAgICAge3Nlc3Npb24gJiYgc2Vzc2lvbi5lbWFpbCA/IDxMb2dnZWRJbiBzZXNzaW9uPXtzZXNzaW9ufSBwYXRocz17cGF0aHN9IC8+IDogJyd9XHJcbiAgICA8L05hdkJhcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcEJhclxyXG4iLCJleHBvcnQgY29uc3QgRFJPUF9OT1RJQ0UgPSAnRFJPUF9OT1RJQ0UnXHJcblxyXG5leHBvcnQgdHlwZSBEcm9wTm90aWNlUmVzcG9uc2UgPSB7XHJcbiAgdHlwZTogdHlwZW9mIERST1BfTk9USUNFO1xyXG4gIGRhdGE6IHtcclxuICAgIG5vdGljZUlkOiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRyb3BOb3RpY2UgPSAobm90aWNlSWQ6IHN0cmluZyk6IERyb3BOb3RpY2VSZXNwb25zZSA9PiAoe1xyXG4gIHR5cGU6ICdEUk9QX05PVElDRScsXHJcbiAgZGF0YTogeyBub3RpY2VJZCB9LFxyXG59KVxyXG4iLCJcclxuZXhwb3J0IGNvbnN0IFNFVF9OT1RJQ0VfUFJPR1JFU1MgPSAnU0VUX05PVElDRV9QUk9HUkVTUydcclxuXHJcbmV4cG9ydCB0eXBlIFNldE5vdGljZVByb2dyZXNzID0ge1xyXG4gIG5vdGljZUlkOiBzdHJpbmc7XHJcbiAgcHJvZ3Jlc3M6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU2V0Tm90aWNlUHJvZ3Jlc3NSZXNwb25zZSA9IHtcclxuICB0eXBlOiB0eXBlb2YgU0VUX05PVElDRV9QUk9HUkVTUztcclxuICBkYXRhOiBTZXROb3RpY2VQcm9ncmVzcztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNldE5vdGljZVByb2dyZXNzID0gKGRhdGE6IFNldE5vdGljZVByb2dyZXNzKTogU2V0Tm90aWNlUHJvZ3Jlc3NSZXNwb25zZSA9PiAoe1xyXG4gIHR5cGU6IFNFVF9OT1RJQ0VfUFJPR1JFU1MsXHJcbiAgZGF0YSxcclxufSlcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IE1lc3NhZ2VCb3ggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgeyBOb3RpY2VNZXNzYWdlSW5TdGF0ZSwgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xyXG5pbXBvcnQgeyBkcm9wTm90aWNlIH0gZnJvbSAnLi4vLi4vc3RvcmUvYWN0aW9ucy9kcm9wLW5vdGljZSdcclxuaW1wb3J0IHsgc2V0Tm90aWNlUHJvZ3Jlc3MgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL3NldC1ub3RpY2UtcHJvZ3Jlc3MnXHJcblxyXG5jb25zdCBUSU1FX1RPX0RJU0FQUEVBUiA9IDNcclxuXHJcbmV4cG9ydCB0eXBlIE5vdGlmeVByb2dyZXNzID0gKG9wdGlvbnM6IHtcclxuICBub3RpY2VJZDogc3RyaW5nOyBwcm9ncmVzczogbnVtYmVyO1xyXG59KSA9PiB2b2lkXHJcblxyXG5leHBvcnQgdHlwZSBOb3RpY2VFbGVtZW50UHJvcHMgPSB7XHJcbiAgbm90aWNlOiBOb3RpY2VNZXNzYWdlSW5TdGF0ZTtcclxuICBkcm9wOiAoKSA9PiBhbnk7XHJcbiAgbm90aWZ5UHJvZ3Jlc3M6IE5vdGlmeVByb2dyZXNzO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBOb3RpY2VFbGVtZW50U3RhdGUgPSB7XHJcbiAgcHJvZ3Jlc3M6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE5vdGljZUVsZW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Tm90aWNlRWxlbWVudFByb3BzLCBOb3RpY2VFbGVtZW50U3RhdGU+IHtcclxuICBwcml2YXRlIHRpbWVyOiBOb2RlSlMuVGltZW91dCB8IG51bGxcclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgY29uc3QgeyBub3RpY2UgfSA9IHByb3BzXHJcbiAgICB0aGlzLnRpbWVyID0gbnVsbFxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgcHJvZ3Jlc3M6IG5vdGljZS5wcm9ncmVzcyB8fCAwLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IGRyb3AsIG5vdGljZSwgbm90aWZ5UHJvZ3Jlc3MgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gc3RhdGUucHJvZ3Jlc3MgKyAxMDAgLyBUSU1FX1RPX0RJU0FQUEVBUlxyXG4gICAgICAgIG5vdGlmeVByb2dyZXNzKHsgbm90aWNlSWQ6IG5vdGljZS5pZCwgcHJvZ3Jlc3MgfSlcclxuICAgICAgICByZXR1cm4geyBwcm9ncmVzcyB9XHJcbiAgICAgIH0pXHJcbiAgICB9LCAxMDAwKVxyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy50aW1lcikge1xyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcclxuICAgICAgfVxyXG4gICAgICBkcm9wKClcclxuICAgIH0sIDEwMDAgKiAoVElNRV9UT19ESVNBUFBFQVIgKyAxKSlcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudGltZXIpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCB7IG5vdGljZSwgZHJvcCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE1lc3NhZ2VCb3hcclxuICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogJzQ4MHB4JyB9fVxyXG4gICAgICAgIG1lc3NhZ2U9e25vdGljZS5tZXNzYWdlfVxyXG4gICAgICAgIHZhcmlhbnQ9e25vdGljZS50eXBlID09PSAnc3VjY2VzcycgPyAnc3VjY2VzcycgOiAnZGFuZ2VyJ31cclxuICAgICAgICBvbkNsb3NlQ2xpY2s9e2Ryb3B9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG50eXBlIE5vdGljZUJveFByb3BzRnJvbVN0YXRlID0ge1xyXG4gIG5vdGljZXM6IEFycmF5PE5vdGljZU1lc3NhZ2VJblN0YXRlPjtcclxufVxyXG5cclxudHlwZSBOb3RpY2VCb3hEaXNwYXRjaEZyb21TdGF0ZSA9IHtcclxuICBkcm9wOiAobm90aWNlSWQ6IHN0cmluZykgPT4gdm9pZDtcclxuICBub3RpZnlQcm9ncmVzczogTm90aWZ5UHJvZ3Jlc3M7XHJcbn1cclxuXHJcbmNvbnN0IE5vdGljZUJveDogUmVhY3QuRkM8Tm90aWNlQm94UHJvcHNGcm9tU3RhdGUgJiBOb3RpY2VCb3hEaXNwYXRjaEZyb21TdGF0ZT4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGRyb3AsIG5vdGljZXMsIG5vdGlmeVByb2dyZXNzIH0gPSBwcm9wc1xyXG4gIGNvbnN0IG5vdGljZSA9IG5vdGljZXMubGVuZ3RoID8gbm90aWNlc1tub3RpY2VzLmxlbmd0aCAtIDFdIDogbnVsbFxyXG4gIGlmIChub3RpY2UpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJub3RpY2Utd3JhcHBlclwiPlxyXG4gICAgICAgIDxOb3RpY2VFbGVtZW50XHJcbiAgICAgICAgICBrZXk9e25vdGljZS5pZH1cclxuICAgICAgICAgIG5vdGljZT17bm90aWNlfVxyXG4gICAgICAgICAgZHJvcD17KCk6IHZvaWQgPT4gZHJvcChub3RpY2UuaWQpfVxyXG4gICAgICAgICAgbm90aWZ5UHJvZ3Jlc3M9e25vdGlmeVByb2dyZXNzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiAvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSZWR1eFN0YXRlKTogTm90aWNlQm94UHJvcHNGcm9tU3RhdGUgPT4gKHtcclxuICBub3RpY2VzOiBzdGF0ZS5ub3RpY2VzLFxyXG59KVxyXG5cclxuXHJcbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCk6IE5vdGljZUJveERpc3BhdGNoRnJvbVN0YXRlID0+ICh7XHJcbiAgZHJvcDogKG5vdGljZUlkOiBzdHJpbmcpOiB2b2lkID0+IGRpc3BhdGNoKGRyb3BOb3RpY2Uobm90aWNlSWQpKSxcclxuICBub3RpZnlQcm9ncmVzczogKHtcclxuICAgIG5vdGljZUlkLCBwcm9ncmVzcyxcclxuICB9KTogdm9pZCA9PiBkaXNwYXRjaChzZXROb3RpY2VQcm9ncmVzcyh7IG5vdGljZUlkLCBwcm9ncmVzcyB9KSksXHJcbn0pXHJcblxyXG5jb25zdCBDb25uZWN0ZWROb3RpY2VCb3ggPSBjb25uZWN0KFxyXG4gIG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLFxyXG4pKE5vdGljZUJveClcclxuXHJcbmV4cG9ydCB7XHJcbiAgQ29ubmVjdGVkTm90aWNlQm94IGFzIGRlZmF1bHQsXHJcbiAgQ29ubmVjdGVkTm90aWNlQm94IGFzIE5vdGljZUJveCxcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEgyLFxyXG4gIEg1LFxyXG4gIEg0LFxyXG4gIFRleHQsXHJcbiAgSWxsdXN0cmF0aW9uLFxyXG4gIElsbHVzdHJhdGlvblByb3BzLFxyXG4gIEJ1dHRvbixcclxufSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJ1xyXG5cclxuY29uc3QgcGFnZUhlYWRlckhlaWdodCA9IDI4NFxyXG5jb25zdCBwYWdlSGVhZGVyUGFkZGluZ1kgPSA3NFxyXG5jb25zdCBwYWdlSGVhZGVyUGFkZGluZ1ggPSAyNTBcclxuXHJcbmV4cG9ydCBjb25zdCBEYXNoYm9hcmRIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiBvdmVyZmxvdz1cImhpZGRlblwiPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXHJcbiAgICAgICAgdG9wPXs1MH1cclxuICAgICAgICBsZWZ0PXstMTB9XHJcbiAgICAgICAgb3BhY2l0eT17WzAuMiwgMC40LCAxXX1cclxuICAgICAgICBhbmltYXRlXHJcbiAgICAgID5cclxuICAgICAgICA8SWxsdXN0cmF0aW9uIHZhcmlhbnQ9XCJSb2NrZXRcIiAvPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveFxyXG4gICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxyXG4gICAgICAgIHRvcD17LTcwfVxyXG4gICAgICAgIHJpZ2h0PXstMTV9XHJcbiAgICAgICAgb3BhY2l0eT17WzAuMiwgMC40LCAxXX1cclxuICAgICAgICBhbmltYXRlXHJcbiAgICAgID5cclxuICAgICAgICA8SWxsdXN0cmF0aW9uIHZhcmlhbnQ9XCJNb29uXCIgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBiZz1cImdyZXkxMDBcIlxyXG4gICAgICAgIGhlaWdodD17cGFnZUhlYWRlckhlaWdodH1cclxuICAgICAgICBweT17cGFnZUhlYWRlclBhZGRpbmdZfVxyXG4gICAgICAgIHB4PXtbJ2RlZmF1bHQnLCAnbGcnLCBwYWdlSGVhZGVyUGFkZGluZ1hdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRleHQgdGV4dEFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJ3aGl0ZVwiPlxyXG4gICAgICAgICAgPEgyPnt0cmFuc2xhdGVNZXNzYWdlKCd3ZWxjb21lT25Cb2FyZF90aXRsZScpfTwvSDI+XHJcbiAgICAgICAgICA8VGV4dCBvcGFjaXR5PXswLjh9PlxyXG4gICAgICAgICAgICB7dHJhbnNsYXRlTWVzc2FnZSgnd2VsY29tZU9uQm9hcmRfc3VidGl0bGUnKX1cclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG50eXBlIEJveFR5cGUgPSB7XHJcbiAgdmFyaWFudDogc3RyaW5nO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgc3VidGl0bGU6IHN0cmluZztcclxuICBocmVmOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGJveGVzID0gKHsgdHJhbnNsYXRlTWVzc2FnZSB9KTogQXJyYXk8Qm94VHlwZT4gPT4gW3tcclxuICB2YXJpYW50OiAnUGxhbmV0JyxcclxuICB0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgnYWRkaW5nUmVzb3VyY2VzX3RpdGxlJyksXHJcbiAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2FkZGluZ1Jlc291cmNlc19zdWJ0aXRsZScpLFxyXG4gIGhyZWY6ICdodHRwczovL2FkbWluYnJvLmNvbS90dXRvcmlhbC1wYXNzaW5nLXJlc291cmNlcy5odG1sJyxcclxufSwge1xyXG4gIHZhcmlhbnQ6ICdEb2N1bWVudENoZWNrJyxcclxuICB0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgnY3VzdG9taXplUmVzb3VyY2VzX3RpdGxlJyksXHJcbiAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2N1c3RvbWl6ZVJlc291cmNlc19zdWJ0aXRsZScpLFxyXG4gIGhyZWY6ICdodHRwczovL2FkbWluYnJvLmNvbS90dXRvcmlhbC1jdXN0b21pemluZy1yZXNvdXJjZXMuaHRtbCcsXHJcbn0sIHtcclxuICB2YXJpYW50OiAnRG9jdW1lbnRTZWFyY2gnLFxyXG4gIHRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdjdXN0b21pemVBY3Rpb25zX3RpdGxlJyksXHJcbiAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2N1c3RvbWl6ZUFjdGlvbnNfc3VidGl0bGUnKSxcclxuICBocmVmOiAnaHR0cHM6Ly9hZG1pbmJyby5jb20vdHV0b3JpYWwtYWN0aW9ucy5odG1sJyxcclxufSwge1xyXG4gIHZhcmlhbnQ6ICdGbGFnSW5Db2cnLFxyXG4gIHRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCd3cml0ZU93bkNvbXBvbmVudHNfdGl0bGUnKSxcclxuICBzdWJ0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgnd3JpdGVPd25Db21wb25lbnRzX3N1YnRpdGxlJyksXHJcbiAgaHJlZjogJ2h0dHBzOi8vYWRtaW5icm8uY29tL3R1dG9yaWFsLXdyaXRpbmctcmVhY3QtY29tcG9uZW50cy5odG1sJyxcclxufSwge1xyXG4gIHZhcmlhbnQ6ICdGb2xkZXJzJyxcclxuICB0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgnY3VzdG9tRGFzaGJvYXJkX3RpdGxlJyksXHJcbiAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2N1c3RvbURhc2hib2FyZF9zdWJ0aXRsZScpLFxyXG4gIGhyZWY6ICdodHRwczovL2FkbWluYnJvLmNvbS90dXRvcmlhbC1jdXN0b20tZGFzaGJvYXJkLmh0bWwnLFxyXG59LCB7XHJcbiAgdmFyaWFudDogJ0FzdHJvbmF1dCcsXHJcbiAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ3JvbGVCYXNlZEFjY2Vzc190aXRsZScpLFxyXG4gIHN1YnRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdyb2xlQmFzZWRBY2Nlc3Nfc3VidGl0bGUnKSxcclxuICBocmVmOiAnaHR0cHM6Ly9hZG1pbmJyby5jb20vdHV0b3JpYWwtcmJhYy5odG1sJyxcclxufV1cclxuXHJcbmNvbnN0IENhcmQgPSBzdHlsZWQoQm94KWBcclxuICBkaXNwbGF5OiAkeyh7IGZsZXggfSk6IHN0cmluZyA9PiAoZmxleCA/ICdmbGV4JyA6ICdibG9jaycpfTtcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmNvbG9ycy5ncmV5MTAwfTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuY29sb3JzLnByaW1hcnkxMDB9O1xyXG4gICAgYm94LXNoYWRvdzogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLnNoYWRvd3MuY2FyZEhvdmVyfTtcclxuICB9XHJcbmBcclxuXHJcbkNhcmQuZGVmYXVsdFByb3BzID0ge1xyXG4gIHZhcmlhbnQ6ICd3aGl0ZScsXHJcbiAgYm94U2hhZG93OiAnY2FyZCcsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBEYXNoYm9hcmQ6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSwgdHJhbnNsYXRlQnV0dG9uIH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3g+XHJcbiAgICAgIDxEYXNoYm9hcmRIZWFkZXIgLz5cclxuICAgICAgPEJveFxyXG4gICAgICAgIG10PXtbJ3hsJywgJ3hsJywgJy0xMDBweCddfVxyXG4gICAgICAgIG1iPVwieGxcIlxyXG4gICAgICAgIG14PXtbMCwgMCwgMCwgJ2F1dG8nXX1cclxuICAgICAgICBweD17WydkZWZhdWx0JywgJ2xnJywgJ3h4bCcsICcwJ119XHJcbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXHJcbiAgICAgICAgZmxleFxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXHJcbiAgICAgICAgd2lkdGg9e1sxLCAxLCAxLCAxMDI0XX1cclxuICAgICAgPlxyXG4gICAgICAgIHtib3hlcyh7IHRyYW5zbGF0ZU1lc3NhZ2UgfSkubWFwKChib3gsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XHJcbiAgICAgICAgICA8Qm94IGtleT17aW5kZXh9IHdpZHRoPXtbMSwgMSAvIDIsIDEgLyAyLCAxIC8gM119IHA9XCJsZ1wiPlxyXG4gICAgICAgICAgICA8Q2FyZCBhcz1cImFcIiBocmVmPXtib3guaHJlZn0+XHJcbiAgICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8SWxsdXN0cmF0aW9uXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e2JveC52YXJpYW50IGFzIElsbHVzdHJhdGlvblByb3BzWyd2YXJpYW50J119XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17NzB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEg1IG10PVwibGdcIj57Ym94LnRpdGxlfTwvSDU+XHJcbiAgICAgICAgICAgICAgICA8VGV4dD57Ym94LnN1YnRpdGxlfTwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxCb3ggd2lkdGg9e1sxLCAxLCAxIC8gMl19IHA9XCJsZ1wiPlxyXG4gICAgICAgICAgPENhcmQgYXM9XCJhXCIgZmxleCBocmVmPVwiaHR0cHM6Ly9qb2luLnNsYWNrLmNvbS90L2FkbWluYnJvL3NoYXJlZF9pbnZpdGUvenQtZGpzcXh4cHotX1lDUzhVTXRROUFkZTZEUHVMUjdad1wiPlxyXG4gICAgICAgICAgICA8Qm94IGZsZXhTaHJpbms9ezB9PjxJbGx1c3RyYXRpb24gdmFyaWFudD1cIlNsYWNrTG9nb1wiIC8+PC9Cb3g+XHJcbiAgICAgICAgICAgIDxCb3ggbWw9XCJ4bFwiPlxyXG4gICAgICAgICAgICAgIDxIND57dHJhbnNsYXRlTWVzc2FnZSgnY29tbXVuaXR5X3RpdGxlJyl9PC9IND5cclxuICAgICAgICAgICAgICA8VGV4dD57dHJhbnNsYXRlTWVzc2FnZSgnY29tbXVuaXR5X3N1YnRpdGxlJyl9PC9UZXh0PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHdpZHRoPXtbMSwgMSwgMSAvIDJdfSBwPVwibGdcIj5cclxuICAgICAgICAgIDxDYXJkIGFzPVwiYVwiIGZsZXggaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9Tb2Z0d2FyZUJyb3RoZXJzL2FkbWluLWJyby9pc3N1ZXNcIj5cclxuICAgICAgICAgICAgPEJveCBmbGV4U2hyaW5rPXswfT48SWxsdXN0cmF0aW9uIHZhcmlhbnQ9XCJHaXRodWJMb2dvXCIgLz48L0JveD5cclxuICAgICAgICAgICAgPEJveCBtbD1cInhsXCI+XHJcbiAgICAgICAgICAgICAgPEg0Pnt0cmFuc2xhdGVNZXNzYWdlKCdmb3VuZEJ1Z190aXRsZScpfTwvSDQ+XHJcbiAgICAgICAgICAgICAgPFRleHQ+e3RyYW5zbGF0ZU1lc3NhZ2UoJ2ZvdW5kQnVnX3N1YnRpdGxlJyl9PC9UZXh0PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgICA8Qm94IHZhcmlhbnQ9XCJ3aGl0ZVwiIGJveFNoYWRvdz1cImNhcmRcIiB3aWR0aD17MX0gbT1cImxnXCI+XHJcbiAgICAgICAgICA8VGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPElsbHVzdHJhdGlvbiB2YXJpYW50PVwiU29mdHdhcmVCcm90aGVyc0xvZ29cIiAvPlxyXG4gICAgICAgICAgICA8SDQ+e3RyYW5zbGF0ZU1lc3NhZ2UoJ25lZWRNb3JlU29sdXRpb25zX3RpdGxlJyl9PC9IND5cclxuICAgICAgICAgICAgPFRleHQ+e3RyYW5zbGF0ZU1lc3NhZ2UoJ25lZWRNb3JlU29sdXRpb25zX3N1YnRpdGxlJyl9PC9UZXh0PlxyXG4gICAgICAgICAgICA8VGV4dCBtdD1cInh4bFwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGFzPVwiYVwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zb2Z0d2FyZWJyb3RoZXJzLmNvL3NlcnZpY2VzXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRlQnV0dG9uKCdjb250YWN0VXMnKX1cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkXHJcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVGV4dCwgTWVzc2FnZUJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXHJcblxyXG50eXBlIFN0YXRlID0ge1xyXG4gIGVycm9yOiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IEVycm9yTWVzc2FnZTogUmVhY3QuRkM8U3RhdGU+ID0gKHsgZXJyb3IgfSkgPT4ge1xyXG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVzc2FnZUJveCBtPVwieHhsXCIgdmFyaWFudD1cImRhbmdlclwiIG1lc3NhZ2U9XCJKYXZhc2NyaXB0IEVycm9yXCI+XHJcbiAgICAgIDxUZXh0PntlcnJvci50b1N0cmluZygpfTwvVGV4dD5cclxuICAgICAgPFRleHQgbXQ9XCJkZWZhdWx0XCI+e3RyYW5zbGF0ZU1lc3NhZ2UoJ3NlZUNvbnNvbGVGb3JNb3JlJyl9PC9UZXh0PlxyXG4gICAgPC9NZXNzYWdlQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvciB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgY29uc3QgeyBlcnJvciB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgIGlmIChlcnJvciAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gKDxFcnJvck1lc3NhZ2UgZXJyb3I9e2Vycm9yfSAvPilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2hpbGRyZW4gfHwgbnVsbFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3VuZGFyeVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcblxyXG5pbXBvcnQgRGVmYXVsdERhc2hib2FyZCBmcm9tICcuLi9hcHAvZGVmYXVsdC1kYXNoYm9hcmQnXHJcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4uL2FwcC9lcnJvci1ib3VuZGFyeSdcclxuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xyXG5cclxuZGVjbGFyZSBjb25zdCBBZG1pbkJybzoge1xyXG4gIFVzZXJDb21wb25lbnRzOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbkNvbXBvbmVudD47XHJcbn1cclxuXHJcbnR5cGUgU3RhdGUgPSB7XHJcbiAgaXNDbGllbnQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbnR5cGUgUHJvcHNGcm9tU3RhdGUgPSB7XHJcbiAgZGFzaGJvYXJkOiB7XHJcbiAgICBjb21wb25lbnQ/OiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuY2xhc3MgRGFzaGJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzRnJvbVN0YXRlLCBTdGF0ZT4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wc0Zyb21TdGF0ZSkge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpc0NsaWVudDogZmFsc2UsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0NsaWVudDogdHJ1ZSB9KVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCB7IGRhc2hib2FyZCB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgeyBpc0NsaWVudCB9ID0gdGhpcy5zdGF0ZVxyXG4gICAgbGV0IENvbXBvbmVudFxyXG4gICAgaWYgKGRhc2hib2FyZCAmJiBkYXNoYm9hcmQuY29tcG9uZW50ICYmIGlzQ2xpZW50XHJcbiAgICAgICAgJiYgQWRtaW5Ccm8uVXNlckNvbXBvbmVudHNbZGFzaGJvYXJkLmNvbXBvbmVudF1cclxuICAgICkge1xyXG4gICAgICBDb21wb25lbnQgPSBBZG1pbkJyby5Vc2VyQ29tcG9uZW50c1tkYXNoYm9hcmQuY29tcG9uZW50XSBhcyBGdW5jdGlvbkNvbXBvbmVudFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgQ29tcG9uZW50ID0gRGVmYXVsdERhc2hib2FyZFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxFcnJvckJvdW5kYXJ5PlxyXG4gICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgPC9FcnJvckJvdW5kYXJ5PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSZWR1eFN0YXRlKTogUHJvcHNGcm9tU3RhdGUgPT4gKHtcclxuICBkYXNoYm9hcmQ6IHN0YXRlLmRhc2hib2FyZCxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShEYXNoYm9hcmQpXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MnXHJcbmltcG9ydCB7IFJlc291cmNlSlNPTiwgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcclxuXHJcbnR5cGUgQWRkTmV3SXRlbUJ1dHRvblByb3BzID0ge1xyXG4gIHJlc291cmNlOiBSZXNvdXJjZUpTT047XHJcbiAgcHJvcGVydHk6IFByb3BlcnR5SlNPTjtcclxufVxyXG5cclxuY29uc3QgQWRkTmV3SXRlbUJ1dHRvbjogUmVhY3QuRkM8QWRkTmV3SXRlbUJ1dHRvblByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcmVzb3VyY2UsIHByb3BlcnR5IH0gPSBwcm9wc1xyXG4gIGNvbnN0IHsgdHJhbnNsYXRlUHJvcGVydHksIHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG4gIGNvbnN0IGxhYmVsID0gdHJhbnNsYXRlUHJvcGVydHkoXHJcbiAgICBgJHtwcm9wZXJ0eS5wYXRofS5hZGROZXdJdGVtYCxcclxuICAgIHJlc291cmNlLmlkLCB7XHJcbiAgICAgIGRlZmF1bHRWYWx1ZTogdHJhbnNsYXRlQnV0dG9uKCdhZGROZXdJdGVtJywgcmVzb3VyY2UuaWQpLFxyXG4gICAgfSxcclxuICApXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SWNvbiBpY29uPVwiQWRkXCIgLz5cclxuICAgICAge2xhYmVsfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGROZXdJdGVtQnV0dG9uXHJcbiIsImltcG9ydCB7IExhYmVsLCBMYWJlbFByb3BzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uLy4uL2ludGVyZmFjZXMnXHJcblxyXG5leHBvcnQgdHlwZSBQcm9wZXJ0eUxhYmVsUHJvcHMgPSB7XHJcbiAgcHJvcGVydHk6IFByb3BlcnR5SlNPTjtcclxuICBwcm9wcz86IExhYmVsUHJvcHM7XHJcbn1cclxuXHJcbmNvbnN0IFByb3BlcnR5TGFiZWw6IFJlYWN0LkZDPFByb3BlcnR5TGFiZWxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb3BlcnR5LCBwcm9wczogbGFiZWxQcm9wcyB9ID0gcHJvcHNcclxuXHJcbiAgaWYgKHByb3BlcnR5LmhpZGVMYWJlbCkgeyByZXR1cm4gbnVsbCB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGFiZWxcclxuICAgICAgaHRtbEZvcj17cHJvcGVydHkucGF0aH1cclxuICAgICAgcmVxdWlyZWQ9e3Byb3BlcnR5LmlzUmVxdWlyZWR9XHJcbiAgICAgIHsuLi5sYWJlbFByb3BzfVxyXG4gICAgPlxyXG4gICAgICB7cHJvcGVydHkubGFiZWx9XHJcbiAgICA8L0xhYmVsPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBQcm9wZXJ0eUxhYmVsIGFzIGRlZmF1bHQsXHJcbiAgUHJvcGVydHlMYWJlbCxcclxufVxyXG4iLCJpbXBvcnQgeyBERUxJTUlURVIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9mbGF0L2NvbnN0YW50cydcclxuaW1wb3J0IHsgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBwcm9wZXJ0eTogUHJvcGVydHlKU09OIGZyb20gYW4gYXJyYXkgdG8gYSBzdWItcHJvcGVydHkgZm9yIGFuIGFjdHVhbCBpdGVtIGluIHRoZSBhcnJheVxyXG4gKiBJdCBjaGFuZ2UgcGF0aCB0aGF0IGl0IGhhcyBpbmRleCBpbnNpZGUgYWxvbmcgd2l0aCB0aGUgbGFiZWwuIEZ1dGhlcm1vcmUgZmxhdCBpc0FycmF5IGlzIHJlbW92ZWRcclxuICogLGJlY2F1c2UgaXQgd2FzIGFscmVhZHkgaGFuZGxlZCwgc28gdGhhdCBpdGVtUmVuZGVyZXIgY2FuIHJlbmRlciBwcm9wZXJ0eSBhcyBhIHJlZ3VsYXIgb25lXHJcbiAqXHJcbiAqIEBwYXJhbSB7UHJvcGVydHlKU09OfSAgYXJyYXlQcm9wZXJ0eSBwcm9wZXJ0eSB3aXRoIHBhdGggc2V0IHRvIGFuIHJvb3QgQXJyYXkgdHlwZSBwcm9wZXJ0eSxcclxuICogQHBhcmFtIHtOdW1iZXJ9ICAgICAgICBpbmRleCAgICAgICAgIGluZGV4IHVuZGVyIHdoaWNoIHN1Yi1wcm9wZXJ0eSBzaG91bGQgYmUgcGxhY2VkXHJcbiAqIEBwcml2YXRlXHJcbiAqIEBoaWRlXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY29udmVydFRvU3ViUHJvcGVydHkgPSAoYXJyYXlQcm9wZXJ0eTogUHJvcGVydHlKU09OLCBpbmRleDogbnVtYmVyKTogUHJvcGVydHlKU09OID0+IChcclxuICB7XHJcbiAgICAuLi5hcnJheVByb3BlcnR5LFxyXG4gICAgcGF0aDogW2FycmF5UHJvcGVydHkucGF0aCwgaW5kZXhdLmpvaW4oREVMSU1JVEVSKSxcclxuICAgIGxhYmVsOiBgWyR7aW5kZXggKyAxfV1gLFxyXG4gICAgaXNBcnJheTogZmFsc2UsXHJcbiAgfVxyXG4pXHJcbiIsImltcG9ydCB7IGZsYXQgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscydcclxuaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXHJcblxyXG4vKipcclxuICogUmVtb3ZlcyBzZWxlY3RlZCBhcnJheSBpdGVtIGZyb20gZ2l2ZW4gcmVjb3JkLiBJdCBwZXJmb3JtcyBmb2xsb3dpbmcgdGFza3M6XHJcbiAqIDEuIHJlbW92ZXMgYXJyYXkgaXRlbSBmcm9tIHRoZSBhcnJheVxyXG4gKiAyLiByZW9yZGVycyBrZXlzIGluIG5ldyBhcnJheSBpdGVtXHJcbiAqIDMuIGlmIHByb3BlcnR5IGhhcyBwb3B1bGF0ZWQgZmllbGRzIGl0IGFsc28gcmVvcmRlcnMgdGhlbVxyXG4gKiBpdCB1c2VzIHtAbGluayBmbGF0IH0gbW9kdWxlIGFuZCBpdHMgcmVtb3ZlUGF0aCBtZXRob2RcclxuICpcclxuICogQHBhcmFtIHtSZWNvcmRKU09OfSByZWNvcmRcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICBzdWJQcm9wZXJ0eVBhdGggICAgICAgICAgICB3aGljaCBoYXMgdG8gYmUgcmVtb3ZlZC4gSXQgaGFzIHRvIGJlIGZsYXR0ZW5lZFxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluIG5vdGF0aW9uLCBhbmQgZW5kaW5nIHdpdGggYXJyYXkgaW5kZXhcclxuICogQHByaXZhdGVcclxuICogQGhpZGVcclxuICovXHJcbmV4cG9ydCBjb25zdCByZW1vdmVTdWJQcm9wZXJ0eSA9IChyZWNvcmQ6IFJlY29yZEpTT04sIHN1YlByb3BlcnR5UGF0aDogc3RyaW5nKTogUmVjb3JkSlNPTiA9PiB7XHJcbiAgLy8gYnkgZGVmYXVsdCBwb3B1bGF0ZWQgaXMgZmxhdHRlbiBqdXN0IHRvIHRoZSBwYXRoIGxldmVsIC0gb2JqZWN0IGl0c2VsZiBpcyBub3QgZmxhdHRlbi4gVGhhdCBpc1xyXG4gIC8vIHdoeSB3ZSBoYXZlIHRvIHJldHJpZXZlIHRoZSBvcmlnaW5hbCBzdGF0ZS4gVGhhdCBpcyB3aHkgd2UgaGF2ZSB0byByZXBsYWNlIHJlY29yZC5wb3B1bGF0ZWQgdG9cclxuICAvLyBmcm9tIHsgJ3NvbWUubmVzdGVkLjEua2V5JzogUmVjb3JkSlNPTiB9IHRvIHsgJ3NvbWUubmVzdGVkLjEua2V5JzogJ3NvbWUubmVzdGVkLjEua2V5JyB9LFxyXG4gIC8vIHRoZW4gcmVtb3ZlIGtleXMsIGFuZCByZWZpbGwgYmFjayBzb21lLm5lc3RlZC4xLmtleSB0byB0aGUgdmFsdWUgZnJvbSB0aGUgb3JpZ2luYWwgcG9wdWxhdGVkXHJcbiAgLy8gb2JqZWN0LlxyXG4gIGNvbnN0IHBvcHVsYXRlZEtleU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IE9iamVjdC5rZXlzKHJlY29yZC5wb3B1bGF0ZWQpLnJlZHVjZShcclxuICAgIChtZW1vLCBwcm9wZXJ0eUtleSkgPT4gKHtcclxuICAgICAgLi4ubWVtbyxcclxuICAgICAgW3Byb3BlcnR5S2V5XTogcHJvcGVydHlLZXksXHJcbiAgICB9KSxcclxuICAgIHt9LFxyXG4gIClcclxuXHJcbiAgY29uc3QgbmV3UG9wdWxhdGVkS2V5TWFwID0gZmxhdC5yZW1vdmVQYXRoKHBvcHVsYXRlZEtleU1hcCwgc3ViUHJvcGVydHlQYXRoKVxyXG4gIGNvbnN0IG5ld1BvcHVsYXRlZCA9IE9iamVjdC5lbnRyaWVzKG5ld1BvcHVsYXRlZEtleU1hcCkucmVkdWNlKFxyXG4gICAgKG1lbW8sIFtuZXdQcm9wZXJ0eUtleSwgb2xkUHJvcGVydHlLZXldKSA9PiAoe1xyXG4gICAgICAuLi5tZW1vLFxyXG4gICAgICBbbmV3UHJvcGVydHlLZXldOiBvbGRQcm9wZXJ0eUtleSAmJiByZWNvcmQucG9wdWxhdGVkW29sZFByb3BlcnR5S2V5Py50b1N0cmluZygpXSxcclxuICAgIH0pLCB7fSxcclxuICApXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICAuLi5yZWNvcmQsXHJcbiAgICBwYXJhbXM6IGZsYXQucmVtb3ZlUGF0aChyZWNvcmQucGFyYW1zLCBzdWJQcm9wZXJ0eVBhdGgpLFxyXG4gICAgcG9wdWxhdGVkOiBuZXdQb3B1bGF0ZWQsXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBNb3VzZUV2ZW50LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCdXR0b24sIFNlY3Rpb24sIEZvcm1Hcm91cCwgRm9ybU1lc3NhZ2UsIEljb24sIEJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuXHJcbmltcG9ydCBBZGROZXdJdGVtQnV0dG9uIGZyb20gJy4vYWRkLW5ldy1pdGVtLXRyYW5zbGF0aW9uJ1xyXG5pbXBvcnQgeyBmbGF0IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnXHJcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzSW5BcnJheSB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXHJcbmltcG9ydCB7IFByb3BlcnR5TGFiZWwgfSBmcm9tICcuLi91dGlscy9wcm9wZXJ0eS1sYWJlbCdcclxuaW1wb3J0IHsgY29udmVydFRvU3ViUHJvcGVydHkgfSBmcm9tICcuL2NvbnZlcnQtdG8tc3ViLXByb3BlcnR5J1xyXG5pbXBvcnQgeyBQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyByZW1vdmVTdWJQcm9wZXJ0eSB9IGZyb20gJy4vcmVtb3ZlLXN1Yi1wcm9wZXJ0eSdcclxuXHJcbnR5cGUgRWRpdFByb3BzID0gUmVxdWlyZWQ8RWRpdFByb3BlcnR5UHJvcHNJbkFycmF5PlxyXG5cclxudHlwZSBJdGVtUmVuZGVyZXJQcm9wcyA9IHtcclxuICBvbkRlbGV0ZTogKGV2ZW50OiBNb3VzZUV2ZW50LCBwcm9wZXJ0eTogUHJvcGVydHlKU09OKSA9PiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBJdGVtUmVuZGVyZXI6IFJlYWN0LkZDPEVkaXRQcm9wcyAmIEl0ZW1SZW5kZXJlclByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgSXRlbUNvbXBvbmVudCwgcHJvcGVydHksIG9uRGVsZXRlIH0gPSBwcm9wc1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGZsZXggZmxleERpcmVjdGlvbj1cInJvd1wiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBkYXRhLXRlc3RpZD17cHJvcGVydHkucGF0aH0+XHJcbiAgICAgIDxCb3ggZmxleEdyb3c9ezF9PlxyXG4gICAgICAgIDxJdGVtQ29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3ggZmxleFNocmluaz17MH0gbWw9XCJsZ1wiPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHJvdW5kZWRcclxuICAgICAgICAgIG1sPVwiZGVmYXVsdFwiXHJcbiAgICAgICAgICBkYXRhLXRlc3RpZD1cImRlbGV0ZS1pdGVtXCJcclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgc2l6ZT1cImljb25cIlxyXG4gICAgICAgICAgb25DbGljaz17KGV2ZW50KTogYm9vbGVhbiA9PiBvbkRlbGV0ZShldmVudCwgcHJvcGVydHkpfVxyXG4gICAgICAgICAgdmFyaWFudD1cImRhbmdlclwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEljb24gaWNvbj1cIlRyYXNoQ2FuXCIgLz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IElucHV0c0luU2VjdGlvbjogUmVhY3QuRkM8RWRpdFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCwgcmVzb3VyY2UsIG9uQ2hhbmdlIH0gPSBwcm9wc1xyXG4gIGNvbnN0IGl0ZW1zID0gZmxhdC5nZXQocmVjb3JkLnBhcmFtcywgcHJvcGVydHkucGF0aCkgfHwgW11cclxuXHJcbiAgY29uc3QgYWRkTmV3ID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBNb3VzZUV2ZW50KTogYm9vbGVhbiA9PiB7XHJcbiAgICBjb25zdCBuZXdJdGVtcyA9IFtcclxuICAgICAgLi4uaXRlbXMsXHJcbiAgICAgIHByb3BlcnR5LnN1YlByb3BlcnRpZXMubGVuZ3RoID8ge30gOiAnJyxcclxuICAgIF1cclxuICAgIG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIG5ld0l0ZW1zKVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfSwgW3JlY29yZCwgb25DaGFuZ2UsIHByb3BlcnR5XSlcclxuXHJcbiAgY29uc3QgcmVtb3ZlSXRlbSA9IHVzZUNhbGxiYWNrKChldmVudDogTW91c2VFdmVudCwgc3ViUHJvcGVydHk6IFByb3BlcnR5SlNPTik6IGJvb2xlYW4gPT4ge1xyXG4gICAgY29uc3QgbmV3UmVjb3JkID0gcmVtb3ZlU3ViUHJvcGVydHkocmVjb3JkLCBzdWJQcm9wZXJ0eS5wYXRoKVxyXG4gICAgb25DaGFuZ2UobmV3UmVjb3JkKVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfSwgW3JlY29yZCwgb25DaGFuZ2UsIHByb3BlcnR5XSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTZWN0aW9uIG10PVwieGxcIj5cclxuICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1Qcm9wZXJ0eSA9IGNvbnZlcnRUb1N1YlByb3BlcnR5KHByb3BzLnByb3BlcnR5LCBpKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8SXRlbVJlbmRlcmVyXHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgcHJvcGVydHk9e2l0ZW1Qcm9wZXJ0eX1cclxuICAgICAgICAgICAga2V5PXtpdGVtUHJvcGVydHkucGF0aH1cclxuICAgICAgICAgICAgb25EZWxldGU9e3JlbW92ZUl0ZW19XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIClcclxuICAgICAgfSl9XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17YWRkTmV3fSB0eXBlPVwiYnV0dG9uXCIgcm91bmRlZD5cclxuICAgICAgICA8QWRkTmV3SXRlbUJ1dHRvbiByZXNvdXJjZT17cmVzb3VyY2V9IHByb3BlcnR5PXtwcm9wZXJ0eX0gLz5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L1NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBFZGl0OiBSZWFjdC5GQzxFZGl0UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkLCB0ZXN0SWQgfSA9IHByb3BzXHJcbiAgY29uc3QgZXJyb3IgPSByZWNvcmQuZXJyb3JzICYmIHJlY29yZC5lcnJvcnNbcHJvcGVydHkucHJvcGVydHlQYXRoXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17ISFlcnJvcn0gZGF0YS10ZXN0aWQ9e3Rlc3RJZH0+XHJcbiAgICAgIDxQcm9wZXJ0eUxhYmVsIHByb3BlcnR5PXtwcm9wZXJ0eX0gLz5cclxuICAgICAgPElucHV0c0luU2VjdGlvbiB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDxGb3JtTWVzc2FnZT57ZXJyb3IgJiYgZXJyb3IubWVzc2FnZX08L0Zvcm1NZXNzYWdlPlxyXG4gICAgPC9Gb3JtR3JvdXA+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIEVkaXQgYXMgZGVmYXVsdCxcclxuICBFZGl0LFxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZmxhdCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzJ1xyXG5cclxuaW1wb3J0IHsgUmVjb3JkSlNPTiwgUmVzb3VyY2VKU09OLCBQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHByb3BlcnR5OiBQcm9wZXJ0eUpTT047XHJcbiAgcmVjb3JkOiBSZWNvcmRKU09OO1xyXG4gIHJlc291cmNlOiBSZXNvdXJjZUpTT047XHJcbn1cclxuXHJcbmNvbnN0IExpc3Q6IFJlYWN0LkZDPFNob3dQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gcHJvcHNcclxuICBjb25zdCB2YWx1ZXMgPSBmbGF0LmdldChyZWNvcmQucGFyYW1zLCBwcm9wZXJ0eS5wYXRoKSB8fCBbXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4+e2BsZW5ndGg6ICR7dmFsdWVzLmxlbmd0aH1gfTwvc3Bhbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTZWN0aW9uLCBWYWx1ZUdyb3VwIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5cclxuaW1wb3J0IHsgUmVjb3JkSlNPTiwgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgZmxhdCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzJ1xyXG5pbXBvcnQgeyBjb252ZXJ0VG9TdWJQcm9wZXJ0eSB9IGZyb20gJy4vY29udmVydC10by1zdWItcHJvcGVydHknXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHByb3BlcnR5OiBQcm9wZXJ0eUpTT047XHJcbiAgcmVjb3JkOiBSZWNvcmRKU09OO1xyXG4gIEl0ZW1Db21wb25lbnQ6IHR5cGVvZiBSZWFjdC5Db21wb25lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQsIEl0ZW1Db21wb25lbnQgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICBjb25zdCBpdGVtcyA9IGZsYXQuZ2V0KHJlY29yZC5wYXJhbXMsIHByb3BlcnR5LnBhdGgpIHx8IFtdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFZhbHVlR3JvdXAgbGFiZWw9e3Byb3BlcnR5LmxhYmVsfT5cclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgIHsoaXRlbXMgfHwgW10pLm1hcCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtUHJvcGVydHkgPSBjb252ZXJ0VG9TdWJQcm9wZXJ0eShwcm9wZXJ0eSwgaSlcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8SXRlbUNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW1Qcm9wZXJ0eS5wYXRofVxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHk9e2l0ZW1Qcm9wZXJ0eX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgIDwvVmFsdWVHcm91cD5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiLy8gaW1wb3J0IFNob3cgZnJvbSAnLi9zaG93J1xyXG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQnXHJcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCdcclxuaW1wb3J0IFNob3cgZnJvbSAnLi9zaG93J1xyXG5cclxuZXhwb3J0IHtcclxuICBTaG93IGFzIHNob3csXHJcbiAgRWRpdCBhcyBlZGl0LFxyXG4gIExpc3QgYXMgbGlzdCxcclxufVxyXG4iLCJpbXBvcnQgeyBERUxJTUlURVIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9mbGF0L2NvbnN0YW50cydcclxuaW1wb3J0IHsgUHJvcGVydHlKU09OLCBCYXNlUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9TdWJQcm9wZXJ0eShcclxuICBwcm9wZXJ0eTogUHJvcGVydHlKU09OLFxyXG4gIHN1YlByb3BlcnR5OiBCYXNlUHJvcGVydHlKU09OLFxyXG4pOiBQcm9wZXJ0eUpTT04ge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5zdWJQcm9wZXJ0eSxcclxuICAgIHBhdGg6IFtwcm9wZXJ0eS5wYXRoLCBzdWJQcm9wZXJ0eS5uYW1lXS5qb2luKERFTElNSVRFUiksXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU2VjdGlvbiwgRm9ybUdyb3VwLCBGb3JtTWVzc2FnZSB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuXHJcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcclxuaW1wb3J0IHsgUHJvcGVydHlMYWJlbCB9IGZyb20gJy4uL3V0aWxzL3Byb3BlcnR5LWxhYmVsJ1xyXG5pbXBvcnQgeyBjb252ZXJ0VG9TdWJQcm9wZXJ0eSB9IGZyb20gJy4vY29udmVydC10by1zdWItcHJvcGVydHknXHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIEl0ZW1Db21wb25lbnQ6IHR5cGVvZiBSZWFjdC5Db21wb25lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IEVkaXQ6IFJlYWN0LkZDPFByb3BzICYgRWRpdFByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkLCBJdGVtQ29tcG9uZW50IH0gPSBwcm9wc1xyXG4gIGNvbnN0IGVycm9yID0gcmVjb3JkLmVycm9ycyAmJiByZWNvcmQuZXJyb3JzW3Byb3BlcnR5LnBhdGhdXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtR3JvdXAgZXJyb3I9eyEhZXJyb3J9PlxyXG4gICAgICA8UHJvcGVydHlMYWJlbCBwcm9wZXJ0eT17cHJvcGVydHl9IC8+XHJcbiAgICAgIDxTZWN0aW9uIHsuLi5wcm9wZXJ0eS5wcm9wc30+XHJcbiAgICAgICAge3Byb3BlcnR5LnN1YlByb3BlcnRpZXMuZmlsdGVyKHN1YlByb3BlcnR5ID0+ICFzdWJQcm9wZXJ0eS5pc0lkKS5tYXAoKHN1YlByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBzdWJQcm9wZXJ0eVdpdGhQYXRoID0gY29udmVydFRvU3ViUHJvcGVydHkocHJvcGVydHksIHN1YlByb3BlcnR5KVxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEl0ZW1Db21wb25lbnRcclxuICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAga2V5PXtzdWJQcm9wZXJ0eVdpdGhQYXRoLnBhdGh9XHJcbiAgICAgICAgICAgICAgcHJvcGVydHk9e3N1YlByb3BlcnR5V2l0aFBhdGh9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgPEZvcm1NZXNzYWdlPntlcnJvciAmJiBlcnJvci5tZXNzYWdlfTwvRm9ybU1lc3NhZ2U+XHJcbiAgICA8L0Zvcm1Hcm91cD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBTZWN0aW9uLCBWYWx1ZUdyb3VwIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5cclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xyXG5pbXBvcnQgeyBjb252ZXJ0VG9TdWJQcm9wZXJ0eSB9IGZyb20gJy4vY29udmVydC10by1zdWItcHJvcGVydHknXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIEl0ZW1Db21wb25lbnQ6IHR5cGVvZiBSZWFjdC5Db21wb25lbnQ7XHJcbn1cclxuXHJcbmNvbnN0IFNob3c6IFJlYWN0LkZDPFByb3BzICYgQmFzZVByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9wZXJ0eSwgSXRlbUNvbXBvbmVudCB9ID0gcHJvcHNcclxuICByZXR1cm4gKFxyXG4gICAgPFZhbHVlR3JvdXAgbGFiZWw9e3Byb3BlcnR5LmxhYmVsfT5cclxuICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAge3Byb3BlcnR5LnN1YlByb3BlcnRpZXMuZmlsdGVyKHN1YlByb3BlcnR5ID0+ICFzdWJQcm9wZXJ0eS5pc0lkKS5tYXAoKHN1YlByb3BlcnR5KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBzdWJQcm9wZXJ0eVdpdGhQYXRoID0gY29udmVydFRvU3ViUHJvcGVydHkocHJvcGVydHksIHN1YlByb3BlcnR5KVxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEl0ZW1Db21wb25lbnRcclxuICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAga2V5PXtzdWJQcm9wZXJ0eVdpdGhQYXRoLnBhdGh9XHJcbiAgICAgICAgICAgICAgcHJvcGVydHk9e3N1YlByb3BlcnR5V2l0aFBhdGh9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvU2VjdGlvbj5cclxuICAgIDwvVmFsdWVHcm91cD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3dcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgVmlld0hlbHBlcnMgZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xyXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXHJcbmltcG9ydCB7IGNvbnZlcnRUb1N1YlByb3BlcnR5IH0gZnJvbSAnLi9jb252ZXJ0LXRvLXN1Yi1wcm9wZXJ0eSdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgSXRlbUNvbXBvbmVudDogdHlwZW9mIFJlYWN0LkNvbXBvbmVudDtcclxufVxyXG5cclxuLy8gVE9ETzogZGVmaW5lIEl0ZW1Db21wb25lbnQgaW50ZXJmYWNlXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzICYgRWRpdFByb3BlcnR5UHJvcHM+IHtcclxuICByZW5kZXJJdGVtcygpOiBSZWFjdC5SZWFjdENoaWxkIHtcclxuICAgIGNvbnN0IHsgcHJvcGVydHksIEl0ZW1Db21wb25lbnQgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICB7cHJvcGVydHkuc3ViUHJvcGVydGllcy5maWx0ZXIoc3ViUHJvcGVydHkgPT4gIXN1YlByb3BlcnR5LmlzSWQpLm1hcCgoc3ViUHJvcGVydHkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IHN1YlByb3BlcnR5V2l0aFBhdGggPSBjb252ZXJ0VG9TdWJQcm9wZXJ0eShwcm9wZXJ0eSwgc3ViUHJvcGVydHkpXHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17c3ViUHJvcGVydHlXaXRoUGF0aC5wYXRofT5cclxuICAgICAgICAgICAgICA8TGFiZWwgaW5saW5lPntgJHtzdWJQcm9wZXJ0eS5sYWJlbH06IGB9PC9MYWJlbD5cclxuICAgICAgICAgICAgICA8SXRlbUNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eT17c3ViUHJvcGVydHlXaXRoUGF0aH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KX1cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdENoaWxkIHtcclxuICAgIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCwgcmVzb3VyY2UgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHNob3dBY3Rpb24gPSByZWNvcmQucmVjb3JkQWN0aW9ucy5maW5kKGEgPT4gYS5uYW1lID09PSAnc2hvdycpXHJcblxyXG4gICAgaWYgKHJlc291cmNlLnRpdGxlUHJvcGVydHkucHJvcGVydHlQYXRoID09PSBwcm9wZXJ0eS5wcm9wZXJ0eVBhdGggJiYgc2hvd0FjdGlvbikge1xyXG4gICAgICBjb25zdCBoID0gbmV3IFZpZXdIZWxwZXJzKClcclxuICAgICAgY29uc3QgaHJlZiA9IGgucmVjb3JkQWN0aW9uVXJsKHtcclxuICAgICAgICByZXNvdXJjZUlkOiByZXNvdXJjZS5pZCwgcmVjb3JkSWQ6IHJlY29yZC5pZCwgYWN0aW9uTmFtZTogJ3Nob3cnLFxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIHRvPXtocmVmfT57dGhpcy5yZW5kZXJJdGVtcygpfTwvTGluaz5cclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucmVuZGVySXRlbXMoKVxyXG4gIH1cclxufVxyXG4iLCIvLyBpbXBvcnQgU2hvdyBmcm9tICcuL3Nob3cnXHJcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCdcclxuaW1wb3J0IFNob3cgZnJvbSAnLi9zaG93J1xyXG5pbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXHJcblxyXG5leHBvcnQge1xyXG4gIFNob3cgYXMgc2hvdyxcclxuICBFZGl0IGFzIGVkaXQsXHJcbiAgTGlzdCBhcyBsaXN0LFxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcbmltcG9ydCB7IFNob3dQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcclxuXHJcbmNvbnN0IERlZmF1bHRQcm9wZXJ0eVZhbHVlOiBSZWFjdC5GQzxTaG93UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IHJhd1ZhbHVlID0gcmVjb3JkPy5wYXJhbXNbcHJvcGVydHkucGF0aF1cclxuXHJcbiAgaWYgKHR5cGVvZiByYXdWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG5cclxuICBpZiAocHJvcGVydHkuYXZhaWxhYmxlVmFsdWVzKSB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBwcm9wZXJ0eS5hdmFpbGFibGVWYWx1ZXMuZmluZChvcHQgPT4gb3B0LnZhbHVlID09PSByYXdWYWx1ZSlcclxuXHJcbiAgICBpZiAoIW9wdGlvbikge1xyXG4gICAgICByZXR1cm4gcmF3VmFsdWVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8QmFkZ2U+e29wdGlvbj8ubGFiZWwgfHwgcmF3VmFsdWV9PC9CYWRnZT5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiByYXdWYWx1ZVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0UHJvcGVydHlWYWx1ZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFZhbHVlR3JvdXAgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgeyBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXHJcbmltcG9ydCBEZWZhdWx0UHJvcGVydHlWYWx1ZSBmcm9tICcuL2RlZmF1bHQtcHJvcGVydHktdmFsdWUnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxTaG93UHJvcGVydHlQcm9wcz4ge1xyXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xyXG4gICAgY29uc3QgeyBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFZhbHVlR3JvdXAgbGFiZWw9e3Byb3BlcnR5LmxhYmVsfT5cclxuICAgICAgICA8RGVmYXVsdFByb3BlcnR5VmFsdWUgey4uLnRoaXMucHJvcHN9IC8+XHJcbiAgICAgIDwvVmFsdWVHcm91cD5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xyXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcywgU2hvd1Byb3BlcnR5UHJvcHMgfSBmcm9tICcuL2Jhc2UtcHJvcGVydHktcHJvcHMnXHJcblxyXG4vKipcclxuICogRnVuY3Rpb24gdXNlZCBpbiBSZWFjdCBtZW1vIHRvIGNvbXBhcmUgaWYgcHJldmlvdXMgcHJvcGVydHkgdmFsdWUgYW5kIG5leHRcclxuICogcHJvcGVydHkgdmFsdWUgYXJlIHRoZSBzYW1lLlxyXG4gKlxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlY29yZFByb3BlcnR5SXNFcXVhbCA9IChcclxuICBwcmV2UHJvcHM6IEVkaXRQcm9wZXJ0eVByb3BzIHwgU2hvd1Byb3BlcnR5UHJvcHMsXHJcbiAgbmV4dFByb3BzOiBFZGl0UHJvcGVydHlQcm9wcyB8IFNob3dQcm9wZXJ0eVByb3BzLFxyXG4pOiBib29sZWFuID0+IHtcclxuICBjb25zdCBwcmV2VmFsdWUgPSBwcmV2UHJvcHMucmVjb3JkLnBhcmFtc1twcmV2UHJvcHMucHJvcGVydHkucGF0aF1cclxuICBjb25zdCBuZXh0VmFsdWUgPSBuZXh0UHJvcHMucmVjb3JkLnBhcmFtc1tuZXh0UHJvcHMucHJvcGVydHkucGF0aF1cclxuXHJcbiAgY29uc3QgcHJldkVycm9yID0gcHJldlByb3BzLnJlY29yZC5lcnJvcnNbcHJldlByb3BzLnByb3BlcnR5LnBhdGhdXHJcbiAgY29uc3QgbmV4dEVycm9yID0gbmV4dFByb3BzLnJlY29yZC5lcnJvcnNbbmV4dFByb3BzLnByb3BlcnR5LnBhdGhdXHJcblxyXG4gIHJldHVybiBwcmV2VmFsdWUgPT09IG5leHRWYWx1ZSAmJiBwcmV2RXJyb3IgPT09IG5leHRFcnJvclxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCBtZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXHJcbmltcG9ydCB7IHdpdGhUaGVtZSwgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IElucHV0LCBGb3JtTWVzc2FnZSwgRm9ybUdyb3VwLCBzZWxlY3RTdHlsZXMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXHJcbmltcG9ydCB7IHJlY29yZFByb3BlcnR5SXNFcXVhbCB9IGZyb20gJy4uL3JlY29yZC1wcm9wZXJ0eS1pcy1lcXVhbCdcclxuaW1wb3J0IHsgUHJvcGVydHlMYWJlbCB9IGZyb20gJy4uL3V0aWxzL3Byb3BlcnR5LWxhYmVsJ1xyXG5cclxudHlwZSBDb21iaW5lZFByb3BzID0gRWRpdFByb3BlcnR5UHJvcHMgJiB7dGhlbWU6IERlZmF1bHRUaGVtZX1cclxuXHJcbmNvbnN0IEVkaXQ6IEZDPENvbWJpbmVkUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSBwcm9wc1xyXG4gIGNvbnN0IGVycm9yID0gcmVjb3JkLmVycm9ycz8uW3Byb3BlcnR5LnBhdGhdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUdyb3VwIGVycm9yPXtCb29sZWFuKGVycm9yKX0+XHJcbiAgICAgIDxQcm9wZXJ0eUxhYmVsIHByb3BlcnR5PXtwcm9wZXJ0eX0gLz5cclxuICAgICAge3Byb3BlcnR5LmF2YWlsYWJsZVZhbHVlcyA/IDxTZWxlY3RFZGl0IHsuLi5wcm9wc30gLz4gOiA8VGV4dEVkaXQgey4uLnByb3BzfSAvPn1cclxuICAgICAgPEZvcm1NZXNzYWdlPntlcnJvciAmJiBlcnJvci5tZXNzYWdlfTwvRm9ybU1lc3NhZ2U+XHJcbiAgICA8L0Zvcm1Hcm91cD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IFNlbGVjdEVkaXQ6IEZDPENvbWJpbmVkUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyB0aGVtZSwgcmVjb3JkLCBwcm9wZXJ0eSwgb25DaGFuZ2UgfSA9IHByb3BzXHJcbiAgaWYgKCFwcm9wZXJ0eS5hdmFpbGFibGVWYWx1ZXMpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGNvbnN0IHByb3BWYWx1ZSA9IHJlY29yZC5wYXJhbXM/Lltwcm9wZXJ0eS5wYXRoXSA/PyAnJ1xyXG4gIGNvbnN0IHN0eWxlcyA9IHNlbGVjdFN0eWxlcyh0aGVtZSlcclxuICBjb25zdCBzZWxlY3RlZCA9IHByb3BlcnR5LmF2YWlsYWJsZVZhbHVlcy5maW5kKGF2ID0+IGF2LnZhbHVlID09PSBwcm9wVmFsdWUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2VsZWN0XHJcbiAgICAgIGlzQ2xlYXJhYmxlXHJcbiAgICAgIHN0eWxlcz17c3R5bGVzfVxyXG4gICAgICB2YWx1ZT17c2VsZWN0ZWR9XHJcbiAgICAgIG9wdGlvbnM9e3Byb3BlcnR5LmF2YWlsYWJsZVZhbHVlc31cclxuICAgICAgb25DaGFuZ2U9e3MgPT4gb25DaGFuZ2UocHJvcGVydHkucGF0aCwgcz8udmFsdWUgPz8gJycpfVxyXG4gICAgICBpc0Rpc2FibGVkPXtwcm9wZXJ0eS5pc0Rpc2FibGVkfVxyXG4gICAgICB7Li4ucHJvcGVydHkucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgVGV4dEVkaXQ6IEZDPENvbWJpbmVkUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9ID0gcHJvcHNcclxuICBjb25zdCBwcm9wVmFsdWUgPSByZWNvcmQucGFyYW1zPy5bcHJvcGVydHkucGF0aF0gPz8gJydcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHByb3BWYWx1ZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh2YWx1ZSAhPT0gcHJvcFZhbHVlKSB7XHJcbiAgICAgIHNldFZhbHVlKHByb3BWYWx1ZSlcclxuICAgIH1cclxuICB9LCBbcHJvcFZhbHVlXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbnB1dFxyXG4gICAgICBpZD17cHJvcGVydHkucGF0aH1cclxuICAgICAgbmFtZT17cHJvcGVydHkucGF0aH1cclxuICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICBvbkJsdXI9eygpID0+IG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIHZhbHVlKX1cclxuICAgICAgLy8gaGFuZGxlIGNsaWNraW5nIEVOVEVSXHJcbiAgICAgIG9uS2V5RG93bj17ZSA9PiBlLmtleUNvZGUgPT09IDEzICYmIG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIHZhbHVlKX1cclxuICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICBkaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cclxuICAgICAgey4uLnByb3BlcnR5LnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbCkpXHJcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXHJcbmltcG9ydCB7IHdpdGhUaGVtZSwgVGhlbWVQcm9wcywgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgTGFiZWwsIElucHV0LCBmaWx0ZXJTdHlsZXMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgeyBGaWx0ZXJQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcclxuXHJcbmNsYXNzIEZpbHRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RmlsdGVyUHJvcGVydHlQcm9wcyAmIFRoZW1lUHJvcHM8RGVmYXVsdFRoZW1lPj4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcylcclxuICAgIHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RDaGFuZ2UuYmluZCh0aGlzKVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXHJcbiAgICBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCBldmVudC50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG5cclxuICBoYW5kbGVTZWxlY3RDaGFuZ2Uoc2VsZWN0ZWQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB2YWx1ZSA9IHNlbGVjdGVkID8gc2VsZWN0ZWQudmFsdWUgOiAnJ1xyXG4gICAgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgdmFsdWUpXHJcbiAgfVxyXG5cclxuICByZW5kZXJJbnB1dCgpOiBSZWFjdE5vZGUge1xyXG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgZmlsdGVyLCB0aGVtZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgZmlsdGVyS2V5ID0gYGZpbHRlci0ke3Byb3BlcnR5LnBhdGh9YFxyXG4gICAgY29uc3QgdmFsdWUgPSBmaWx0ZXJbcHJvcGVydHkucGF0aF0gfHwgJydcclxuICAgIGlmIChwcm9wZXJ0eS5hdmFpbGFibGVWYWx1ZXMpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBwcm9wZXJ0eS5hdmFpbGFibGVWYWx1ZXMuZmluZChhdiA9PiBhdi52YWx1ZSA9PT0gdmFsdWUpXHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgdmFsdWU9e3R5cGVvZiBzZWxlY3RlZCA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6IHNlbGVjdGVkfVxyXG4gICAgICAgICAgaXNDbGVhcmFibGVcclxuICAgICAgICAgIG9wdGlvbnM9e3Byb3BlcnR5LmF2YWlsYWJsZVZhbHVlc31cclxuICAgICAgICAgIHN0eWxlcz17ZmlsdGVyU3R5bGVzKHRoZW1lKX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdENoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICBuYW1lPXtmaWx0ZXJLZXl9XHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCB7IHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Rm9ybUdyb3VwIHZhcmlhbnQ9XCJmaWx0ZXJcIj5cclxuICAgICAgICA8TGFiZWw+e3Byb3BlcnR5LmxhYmVsfTwvTGFiZWw+XHJcbiAgICAgICAge3RoaXMucmVuZGVySW5wdXQoKX1cclxuICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShGaWx0ZXIpXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IFJlY29yZEpTT04sIFJlc291cmNlSlNPTiwgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IERlZmF1bHRQcm9wZXJ0eVZhbHVlIGZyb20gJy4vZGVmYXVsdC1wcm9wZXJ0eS12YWx1ZSdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgcHJvcGVydHk6IFByb3BlcnR5SlNPTjtcclxuICByZWNvcmQ6IFJlY29yZEpTT047XHJcbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcclxuICByZW5kZXIoKTogUmVhY3QuUmVhY3RDaGlsZCB7XHJcbiAgICByZXR1cm4gKDxEZWZhdWx0UHJvcGVydHlWYWx1ZSB7Li4udGhpcy5wcm9wc30gLz4pXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENoZWNrQm94LCBGb3JtR3JvdXAsIEZvcm1NZXNzYWdlIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5cclxuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xyXG5pbXBvcnQgeyByZWNvcmRQcm9wZXJ0eUlzRXF1YWwgfSBmcm9tICcuLi9yZWNvcmQtcHJvcGVydHktaXMtZXF1YWwnXHJcbmltcG9ydCB7IFByb3BlcnR5TGFiZWwgfSBmcm9tICcuLi91dGlscy9wcm9wZXJ0eS1sYWJlbCdcclxuXHJcbmNvbnN0IHBhcnNlVmFsdWUgPSAodmFsdWUpOiBib29sZWFuID0+ICEoIXZhbHVlIHx8IHZhbHVlID09PSAnZmFsc2UnKVxyXG5cclxuY29uc3QgRWRpdDogUmVhY3QuRkM8RWRpdFByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9wZXJ0eSwgb25DaGFuZ2UsIHJlY29yZCB9ID0gcHJvcHNcclxuICBjb25zdCB2YWx1ZSA9IHBhcnNlVmFsdWUocmVjb3JkLnBhcmFtcyAmJiByZWNvcmQucGFyYW1zW3Byb3BlcnR5LnBhdGhdKVxyXG4gIGNvbnN0IGVycm9yID0gcmVjb3JkLmVycm9ycyAmJiByZWNvcmQuZXJyb3JzW3Byb3BlcnR5LnBhdGhdXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpOiB2b2lkID0+IHtcclxuICAgIGlmICghcHJvcGVydHkuaXNEaXNhYmxlZCkge1xyXG4gICAgICBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCAhdmFsdWUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17ISFlcnJvcn0+XHJcbiAgICAgIDxDaGVja0JveFxyXG4gICAgICAgIGlkPXtwcm9wZXJ0eS5wYXRofVxyXG4gICAgICAgIG5hbWU9e3Byb3BlcnR5LnBhdGh9XHJcbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICBjaGVja2VkPXt2YWx1ZX1cclxuICAgICAgICBkaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cclxuICAgICAgICB7Li4ucHJvcGVydHkucHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxQcm9wZXJ0eUxhYmVsIHByb3BlcnR5PXtwcm9wZXJ0eX0gcHJvcHM9e3sgaW5saW5lOiB0cnVlIH19IC8+XHJcbiAgICAgIDxGb3JtTWVzc2FnZT57ZXJyb3IgJiYgZXJyb3IubWVzc2FnZX08L0Zvcm1NZXNzYWdlPlxyXG4gICAgPC9Gb3JtR3JvdXA+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbClcclxuIiwiZXhwb3J0IGRlZmF1bHQgKHZhbHVlKTogJ1llcycgfCAnTm8nIHwgJycgPT4ge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gJydcclxuICB9XHJcbiAgcmV0dXJuIHZhbHVlID8gJ1llcycgOiAnTm8nXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuXHJcbmltcG9ydCB7IFNob3dQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9ob29rcydcclxuaW1wb3J0IG1hcFZhbHVlIGZyb20gJy4vbWFwLXZhbHVlJ1xyXG5cclxuY29uc3QgQm9vbGVhblByb3BlcnR5VmFsdWU6IFJlYWN0LkZDPFNob3dQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcmVjb3JkLCBwcm9wZXJ0eSwgcmVzb3VyY2UgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IHsgdHJhbnNsYXRlUHJvcGVydHkgfSA9IHVzZVRyYW5zbGF0aW9uKClcclxuXHJcbiAgY29uc3QgcmF3VmFsdWUgPSByZWNvcmQ/LnBhcmFtc1twcm9wZXJ0eS5wYXRoXVxyXG5cclxuICBpZiAodHlwZW9mIHJhd1ZhbHVlID09PSAndW5kZWZpbmVkJyB8fCByYXdWYWx1ZSA9PT0gJycpIHtcclxuICAgIHJldHVybiBudWxsXHJcbiAgfVxyXG4gIGNvbnN0IGJhc2UgPSBtYXBWYWx1ZShyYXdWYWx1ZSlcclxuICBjb25zdCB0cmFuc2xhdGlvbiA9IHRyYW5zbGF0ZVByb3BlcnR5KGAke3Byb3BlcnR5LnBhdGh9LiR7cmF3VmFsdWV9YCwgcmVzb3VyY2UuaWQsIHtcclxuICAgIGRlZmF1bHRWYWx1ZTogYmFzZSxcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJhZGdlIG91dGxpbmUgc2l6ZT1cInNtXCI+e3RyYW5zbGF0aW9ufTwvQmFkZ2U+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29sZWFuUHJvcGVydHlWYWx1ZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFZhbHVlR3JvdXAgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgQm9vbGVhblByb3BlcnR5VmFsdWUgZnJvbSAnLi9ib29sZWFuLXByb3BlcnR5LXZhbHVlJ1xyXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxFZGl0UHJvcGVydHlQcm9wcz4ge1xyXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xyXG4gICAgY29uc3QgeyBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxWYWx1ZUdyb3VwIGxhYmVsPXtwcm9wZXJ0eS5sYWJlbH0+XHJcbiAgICAgICAgPEJvb2xlYW5Qcm9wZXJ0eVZhbHVlIHsuLi50aGlzLnByb3BzfSAvPlxyXG4gICAgICA8L1ZhbHVlR3JvdXA+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IFJlY29yZEpTT04sIFByb3BlcnR5SlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IEJvb2xlYW5Qcm9wZXJ0eVZhbHVlIGZyb20gJy4vYm9vbGVhbi1wcm9wZXJ0eS12YWx1ZSdcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgcHJvcGVydHk6IFByb3BlcnR5SlNPTjtcclxuICByZWNvcmQ6IFJlY29yZEpTT047XHJcbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcclxuICByZW5kZXIoKTogUmVhY3QuUmVhY3RDaGlsZCB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Qm9vbGVhblByb3BlcnR5VmFsdWUgey4uLnRoaXMucHJvcHN9IC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXHJcbmltcG9ydCB7IHdpdGhUaGVtZSwgRGVmYXVsdFRoZW1lLCBUaGVtZVByb3BzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgTGFiZWwsIGZpbHRlclN0eWxlcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuXHJcbmltcG9ydCBtYXBWYWx1ZSBmcm9tICcuL21hcC12YWx1ZSdcclxuaW1wb3J0IHsgRmlsdGVyUHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXHJcblxyXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEZpbHRlclByb3BlcnR5UHJvcHMgJiBUaGVtZVByb3BzPERlZmF1bHRUaGVtZT4+IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIGhhbmRsZUNoYW5nZShzZWxlY3RlZCk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHkgfSA9IHRoaXMucHJvcHNcclxuICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0ZWQgPyBzZWxlY3RlZC52YWx1ZSA6ICcnXHJcbiAgICBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCB2YWx1ZSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xyXG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgZmlsdGVyID0ge30sIHRoZW1lIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBmaWx0ZXJbcHJvcGVydHkucGF0aF0gPT09ICd1bmRlZmluZWQnID8gJycgOiBmaWx0ZXJbcHJvcGVydHkucGF0aF1cclxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXHJcbiAgICAgIHsgdmFsdWU6IHRydWUsIGxhYmVsOiBtYXBWYWx1ZSh0cnVlKSB9LFxyXG4gICAgICB7IHZhbHVlOiBmYWxzZSwgbGFiZWw6IG1hcFZhbHVlKGZhbHNlKSB9LFxyXG4gICAgXVxyXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSBvcHRpb25zLmZpbmQobyA9PiBvLnZhbHVlID09PSB2YWx1ZSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGb3JtR3JvdXA+XHJcbiAgICAgICAgPExhYmVsPntwcm9wZXJ0eS5sYWJlbH08L0xhYmVsPlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIHZhbHVlPXt0eXBlb2Ygc2VsZWN0ZWQgPT09ICd1bmRlZmluZWQnID8gJycgOiBzZWxlY3RlZH1cclxuICAgICAgICAgIGlzQ2xlYXJhYmxlXHJcbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgc3R5bGVzPXtmaWx0ZXJTdHlsZXModGhlbWUpfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRm9ybUdyb3VwPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEZpbHRlciBhcyBuZXZlcilcclxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRGF0ZVBpY2tlciwgRm9ybUdyb3VwLCBGb3JtTWVzc2FnZSB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuXHJcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcclxuaW1wb3J0IHsgcmVjb3JkUHJvcGVydHlJc0VxdWFsIH0gZnJvbSAnLi4vcmVjb3JkLXByb3BlcnR5LWlzLWVxdWFsJ1xyXG5pbXBvcnQgeyBQcm9wZXJ0eUxhYmVsIH0gZnJvbSAnLi4vdXRpbHMvcHJvcGVydHktbGFiZWwnXHJcblxyXG5jb25zdCBFZGl0OiBSZWFjdC5GQzxFZGl0UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb3BlcnR5LCBvbkNoYW5nZSwgcmVjb3JkIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHZhbHVlID0gKHJlY29yZC5wYXJhbXMgJiYgcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXSkgfHwgJydcclxuICBjb25zdCBlcnJvciA9IHJlY29yZC5lcnJvcnMgJiYgcmVjb3JkLmVycm9yc1twcm9wZXJ0eS5wYXRoXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17ISFlcnJvcn0+XHJcbiAgICAgIDxQcm9wZXJ0eUxhYmVsIHByb3BlcnR5PXtwcm9wZXJ0eX0gLz5cclxuICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgZGlzYWJsZWQ9e3Byb3BlcnR5LmlzRGlzYWJsZWR9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhkYXRhOiBzdHJpbmcpOiB2b2lkID0+IG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIGRhdGEpfVxyXG4gICAgICAgIHByb3BlcnR5VHlwZT17cHJvcGVydHkudHlwZX1cclxuICAgICAgICB7Li4ucHJvcGVydHkucHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxGb3JtTWVzc2FnZT57ZXJyb3IgJiYgZXJyb3IubWVzc2FnZX08L0Zvcm1NZXNzYWdlPlxyXG4gICAgPC9Gb3JtR3JvdXA+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbClcclxuIiwiaW1wb3J0IHsgZm9ybWF0RGF0ZVByb3BlcnR5IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5pbXBvcnQgeyBQcm9wZXJ0eVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9iYWNrZW5kL2FkYXB0ZXJzL3Byb3BlcnR5L2Jhc2UtcHJvcGVydHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCAodmFsdWU6IERhdGUsIHByb3BlcnR5VHlwZTogUHJvcGVydHlUeXBlKTogc3RyaW5nID0+IHtcclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICByZXR1cm4gJydcclxuICB9XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKVxyXG4gIGlmIChkYXRlKSB7XHJcbiAgICByZXR1cm4gZm9ybWF0RGF0ZVByb3BlcnR5KGRhdGUsIHByb3BlcnR5VHlwZSlcclxuICB9XHJcbiAgcmV0dXJuICcnXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBWYWx1ZUdyb3VwIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5cclxuaW1wb3J0IG1hcFZhbHVlIGZyb20gJy4vbWFwLXZhbHVlJ1xyXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxFZGl0UHJvcGVydHlQcm9wcz4ge1xyXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xyXG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB2YWx1ZSA9IG1hcFZhbHVlKHJlY29yZC5wYXJhbXNbcHJvcGVydHkucGF0aF0sIHByb3BlcnR5LnR5cGUpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFZhbHVlR3JvdXAgbGFiZWw9e3Byb3BlcnR5LmxhYmVsfT5cclxuICAgICAgICB7dmFsdWV9XHJcbiAgICAgIDwvVmFsdWVHcm91cD5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IG1hcFZhbHVlIGZyb20gJy4vbWFwLXZhbHVlJ1xyXG5pbXBvcnQgeyBSZXNvdXJjZUpTT04sIFJlY29yZEpTT04sIFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHByb3BlcnR5OiBQcm9wZXJ0eUpTT047XHJcbiAgcmVjb3JkOiBSZWNvcmRKU09OO1xyXG4gIHJlc291cmNlOiBSZXNvdXJjZUpTT047XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XHJcbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Q2hpbGQge1xyXG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB2YWx1ZSA9IG1hcFZhbHVlKHJlY29yZC5wYXJhbXNbcHJvcGVydHkucGF0aF0sIHByb3BlcnR5LnR5cGUpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgZmxhdCBmcm9tICdmbGF0J1xuaW1wb3J0IEJhc2VQcm9wZXJ0eSBmcm9tICcuLi8uLi9hZGFwdGVycy9wcm9wZXJ0eS9iYXNlLXByb3BlcnR5J1xuaW1wb3J0IEJhc2VSZXNvdXJjZSBmcm9tICcuLi8uLi9hZGFwdGVycy9yZXNvdXJjZS9iYXNlLXJlc291cmNlJ1xuaW1wb3J0IEJhc2VSZWNvcmQgZnJvbSAnLi4vLi4vYWRhcHRlcnMvcmVjb3JkL2Jhc2UtcmVjb3JkJ1xuXG5leHBvcnQgY29uc3QgUEFSQU1fU0VQQVJBVE9SID0gJ35+J1xuXG5leHBvcnQgdHlwZSBGaWx0ZXJFbGVtZW50ID0ge1xuICBwYXRoOiBzdHJpbmc7XG4gIHByb3BlcnR5OiBCYXNlUHJvcGVydHk7XG4gIHZhbHVlOiBzdHJpbmcgfCB7XG4gICAgZnJvbTogc3RyaW5nO1xuICAgIHRvOiBzdHJpbmc7XG4gIH07XG4gIHBvcHVsYXRlZD86IEJhc2VSZWNvcmQgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgUmVkdWNlQ2FsbGJhY2s8VD4ge1xuICAobWVtbzogVCwgZWxlbWVudDogRmlsdGVyRWxlbWVudCk6IFQ7XG59XG5cbi8qKlxuICogRmlsdGVyIG9iamVjdCB3cmFwcGluZyB1cCBzZWxlY3RlZCBmaWx0ZXJzLlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIEZpbHRlciB7XG4gIHB1YmxpYyBmaWx0ZXJzOiB7W2tleTogc3RyaW5nXTogRmlsdGVyRWxlbWVudH1cblxuICBwcml2YXRlIHJlc291cmNlOiBCYXNlUmVzb3VyY2VcblxuICAvKipcbiAgICogQ2hhbmdlcyByYXcgbmVzdGVkIGZpbHRlcnMgdG8gZm9ybSBPYmplY3Q8cGF0aCwgdmFsdWU+LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBjb25zdCBmaWx0ZXJzID0ge1xuICAgKiAgbmVzdGVkOiB7ZmllbGQ6ICdhbGEnfSxcbiAgICogICdkYXRhRmllbGR+fmZyb20nOiAnMjAxOS0wOC0xNCdcbiAgICogfVxuICAgKlxuICAgKiBjb25zdCBub3JtYWxpemVkID0gRmlsdGVyLm5vcm1hbGl6ZUZpbHRlcnMoZmlsdGVycylcbiAgICogLy8ge1xuICAgKiAvLyAgICduZXN0ZWQuZmlsdGVyJzogJ2FsYScsXG4gICAqIC8vICAgJ2RhdGFGaWVsZCc6IHtmcm9tOiAnMjAxOS0wOC0xNCd9XG4gICAqIC8vIH1cbiAgICpcbiAgICpcbiAgICogQHBhcmFtICAge09iamVjdH0gIGZpbHRlcnNcbiAgICpcbiAgICogQHJldHVybiAge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBub3JtYWxpemVLZXlzKGZpbHRlcnMpOiBNYXA8c3RyaW5nLCBhbnk+IHtcbiAgICByZXR1cm4gZmxhdC51bmZsYXR0ZW4oZmxhdC5mbGF0dGVuKGZpbHRlcnMpLCB7IGRlbGltaXRlcjogUEFSQU1fU0VQQVJBVE9SIH0pXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICAge09iamVjdDxTdHJpbmcsT2JqZWN0IHwgU3RyaW5nPn0gIGZpbHRlcnMgICBzZWxlY3RlZCBmaWx0ZXJzXG4gICAqIEBwYXJhbSAgIHtCYXNlUmVzb3VyY2V9ICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSAgICByZXNvdXJjZSB3aGljaCBpcyBmaWx0ZXJlZFxuICAgKi9cbiAgY29uc3RydWN0b3IoZmlsdGVycyA9IHt9LCByZXNvdXJjZSkge1xuICAgIHRoaXMucmVzb3VyY2UgPSByZXNvdXJjZVxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBGaWx0ZXIubm9ybWFsaXplS2V5cyhmaWx0ZXJzKVxuICAgIHRoaXMuZmlsdGVycyA9IE9iamVjdC5rZXlzKG5vcm1hbGl6ZWQpLnJlZHVjZSgobWVtbywgcGF0aCkgPT4ge1xuICAgICAgbWVtb1twYXRoXSA9IHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgcHJvcGVydHk6IHRoaXMucmVzb3VyY2UucHJvcGVydHkocGF0aC5zcGxpdCgnLicpWzBdKSxcbiAgICAgICAgdmFsdWU6IG5vcm1hbGl6ZWRbcGF0aF0sXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZW1vXG4gICAgfSwge30pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBmaWx0ZXIgZm9yIGEgZ2l2ZW4gcHJvcGVydHkga2V5XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgICAgICBwcm9wZXJ0eSBrZXlcbiAgICogQHJldHVybnMge0ZpbHRlci5Qcm9wZXJ0eSB8IHVuZGVmaW5lZH1cbiAgICovXG4gIGdldChrZXk6IHN0cmluZyk6IEZpbHRlckVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJzW2tleV1cbiAgfVxuXG4gIC8qKlxuICAgKiBQb3B1bGF0ZXMgYWxsIGZpbHRlcmVkIHByb3BlcnRpZXMgd2hpY2ggcmVmZXJzIHRvIG90aGVyIHJlc291cmNlc1xuICAgKi9cbiAgYXN5bmMgcG9wdWxhdGUoKTogUHJvbWlzZTxGaWx0ZXI+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5maWx0ZXJzKVxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBrZXlzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpbmRleF1cbiAgICAgIGNvbnN0IHJlZmVyZW5jZVJlc291cmNlID0gdGhpcy5yZXNvdXJjZS5kZWNvcmF0ZSgpLmdldFByb3BlcnR5QnlLZXkoa2V5KT8ucmVmZXJlbmNlKClcbiAgICAgIGlmIChyZWZlcmVuY2VSZXNvdXJjZSkge1xuICAgICAgICB0aGlzLmZpbHRlcnNba2V5XS5wb3B1bGF0ZWQgPSBhd2FpdCByZWZlcmVuY2VSZXNvdXJjZS5maW5kT25lKFxuICAgICAgICAgIHRoaXMuZmlsdGVyc1trZXldLnZhbHVlIGFzIHN0cmluZyxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcmVkdWNlPFQ+KGNhbGxiYWNrOiBSZWR1Y2VDYWxsYmFjazxUPiwgaW5pdGlhbDogVCk6IFQge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuZmlsdGVycykucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsIHx8IHt9IGFzIFQpXG4gIH1cblxuICBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhT2JqZWN0LmtleXModGhpcy5maWx0ZXJzKS5sZW5ndGhcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBMYWJlbCwgRGF0ZVBpY2tlciB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuXHJcbmltcG9ydCAqIGFzIEJhY2tlbmRGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC91dGlscy9maWx0ZXIvZmlsdGVyJ1xyXG5pbXBvcnQgeyBGaWx0ZXJQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcclxuXHJcbmNvbnN0IHsgUEFSQU1fU0VQQVJBVE9SIH0gPSBCYWNrZW5kRmlsdGVyXHJcblxyXG5cclxuY29uc3QgRmlsdGVyOiBSZWFjdC5GQzxGaWx0ZXJQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvcGVydHksIGZpbHRlciwgb25DaGFuZ2UgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGZyb21LZXkgPSBgJHtwcm9wZXJ0eS5wYXRofSR7UEFSQU1fU0VQQVJBVE9SfWZyb21gXHJcbiAgY29uc3QgdG9LZXkgPSBgJHtwcm9wZXJ0eS5wYXRofSR7UEFSQU1fU0VQQVJBVE9SfXRvYFxyXG4gIGNvbnN0IGZyb21WYWx1ZSA9IGZpbHRlcltmcm9tS2V5XVxyXG4gIGNvbnN0IHRvVmFsdWUgPSBmaWx0ZXJbdG9LZXldXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxGb3JtR3JvdXAgdmFyaWFudD1cImZpbHRlclwiPlxyXG4gICAgICAgIDxMYWJlbD57cHJvcGVydHkubGFiZWx9PC9MYWJlbD5cclxuICAgICAgICA8TGFiZWw+LSBGcm9tOiA8L0xhYmVsPlxyXG4gICAgICAgIDxEYXRlUGlja2VyXHJcbiAgICAgICAgICB2YWx1ZT17ZnJvbVZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhkYXRhOiBzdHJpbmcpOiB2b2lkID0+IG9uQ2hhbmdlKGZyb21LZXksIGRhdGEpfVxyXG4gICAgICAgICAgcHJvcGVydHlUeXBlPXtwcm9wZXJ0eS50eXBlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPExhYmVsIG10PVwiZGVmYXVsdFwiPi0gVG86IDwvTGFiZWw+XHJcbiAgICAgICAgPERhdGVQaWNrZXJcclxuICAgICAgICAgIHZhbHVlPXt0b1ZhbHVlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhkYXRhOiBzdHJpbmcpOiB2b2lkID0+IG9uQ2hhbmdlKHRvS2V5LCBkYXRhKX1cclxuICAgICAgICAgIHByb3BlcnR5VHlwZT17cHJvcGVydHkudHlwZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0Zvcm1Hcm91cD5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJcclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXHJcbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xyXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtZXhwcmVzc2lvbnMgKi9cclxuaW1wb3J0IFJlYWN0LCB7IEZDLCBtZW1vIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgRm9ybUdyb3VwLFxyXG4gIEZvcm1NZXNzYWdlLFxyXG4gIFJpY2hUZXh0LFxyXG4gIFF1aWxsT3B0aW9ucyxcclxuICBEZWZhdWx0UXVpbGxUb29sYmFyT3B0aW9ucyxcclxufSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXHJcbmltcG9ydCB7IHJlY29yZFByb3BlcnR5SXNFcXVhbCB9IGZyb20gJy4uL3JlY29yZC1wcm9wZXJ0eS1pcy1lcXVhbCdcclxuaW1wb3J0IHsgUHJvcGVydHlMYWJlbCB9IGZyb20gJy4uL3V0aWxzL3Byb3BlcnR5LWxhYmVsJ1xyXG5cclxudHlwZSBDdXN0b21UeXBlID0ge1xyXG4gIGJvcmRlcmxlc3M/OiBib29sZWFuO1xyXG4gIHF1aWxsPzogUXVpbGxPcHRpb25zO1xyXG59XHJcblxyXG5jb25zdCBFZGl0OiBGQzxFZGl0UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHZhbHVlID0gcmVjb3JkLnBhcmFtcz8uW3Byb3BlcnR5LnBhdGhdID8/ICcnXHJcbiAgY29uc3QgZXJyb3IgPSByZWNvcmQuZXJyb3JzICYmIHJlY29yZC5lcnJvcnNbcHJvcGVydHkucGF0aF1cclxuXHJcbiAgY29uc3QgeyBwcm9wczogcHJvcGVydHlQcm9wcyB9ID0gcHJvcGVydHlcclxuXHJcbiAgY29uc3QgeyBxdWlsbCA9IHt9LCAuLi5jdXN0b21Qcm9wcyB9ID0gcHJvcGVydHlQcm9wcyBhcyBDdXN0b21UeXBlIHx8IHt9XHJcbiAgcXVpbGwudGhlbWUgPSBxdWlsbC50aGVtZSB8fCAnc25vdydcclxuICBxdWlsbC5tb2R1bGVzID0ge1xyXG4gICAgdG9vbGJhcjogRGVmYXVsdFF1aWxsVG9vbGJhck9wdGlvbnMsXHJcbiAgICAuLi4ocXVpbGwubW9kdWxlcyB8fCB7fSksXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17Qm9vbGVhbihlcnJvcil9PlxyXG4gICAgICA8UHJvcGVydHlMYWJlbCBwcm9wZXJ0eT17cHJvcGVydHl9IC8+XHJcbiAgICAgIDxSaWNoVGV4dFxyXG4gICAgICAgIHsuLi5jdXN0b21Qcm9wc31cclxuICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgb25DaGFuZ2U9e2NvbnRlbnQgPT4gb25DaGFuZ2UocHJvcGVydHkucGF0aCwgY29udGVudCl9XHJcbiAgICAgICAgcXVpbGw9e3F1aWxsfVxyXG4gICAgICAvPlxyXG4gICAgICA8Rm9ybU1lc3NhZ2U+e2Vycm9yPy5tZXNzYWdlfTwvRm9ybU1lc3NhZ2U+XHJcbiAgICA8L0Zvcm1Hcm91cD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oRWRpdCwgcmVjb3JkUHJvcGVydHlJc0VxdWFsKVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFZhbHVlR3JvdXAsIFRleHQsIEJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuXHJcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEVkaXRQcm9wZXJ0eVByb3BzPiB7XHJcbiAgcHJpdmF0ZSBjb250ZW50UmVmOiBSZWFjdC5SZWZPYmplY3Q8YW55PlxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogRWRpdFByb3BlcnR5UHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgdGhpcy5jb250ZW50UmVmID0gUmVhY3QuY3JlYXRlUmVmKClcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB2YWx1ZSA9IHJlY29yZC5wYXJhbXNbcHJvcGVydHkucGF0aF1cclxuICAgIHRoaXMuY29udGVudFJlZi5jdXJyZW50LmlubmVySFRNTCA9IHZhbHVlXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcclxuICAgIGNvbnN0IHsgcHJvcGVydHkgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxyXG4gICAgICAgIDxCb3ggdmFyaWFudD1cImdyZXlcIiBib3JkZXI9XCJkZWZhdWx0XCI+XHJcbiAgICAgICAgICA8VGV4dCByZWY9e3RoaXMuY29udGVudFJlZn0gLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9WYWx1ZUdyb3VwPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFNob3dQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcclxuXHJcbmNvbnN0IExpc3Q6IFJlYWN0LkZDPFNob3dQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gcHJvcHNcclxuICBjb25zdCBvcmlnaW5hbCA9IHJlY29yZC5wYXJhbXNbcHJvcGVydHkucGF0aF0gfHwgJydcclxuICBjb25zdCB2YWx1ZSA9IG9yaWdpbmFsLnN1YnN0cmluZygwLCAxNSkgKyAob3JpZ2luYWwubGVuZ3RoID4gMTUgPyAnLi4uJyA6ICcnKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RcclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC9hc3luYydcbmltcG9ydCB7IHdpdGhUaGVtZSwgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBGb3JtR3JvdXAsIEZvcm1NZXNzYWdlLCBzZWxlY3RTdHlsZXMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBBcGlDbGllbnQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXBpLWNsaWVudCdcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzLCBTZWxlY3RSZWNvcmQgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBQcm9wZXJ0eUxhYmVsIH0gZnJvbSAnLi4vdXRpbHMvcHJvcGVydHktbGFiZWwnXG5cbnR5cGUgQ29tYmluZWRQcm9wcyA9IEVkaXRQcm9wZXJ0eVByb3BzICYge3RoZW1lOiBEZWZhdWx0VGhlbWV9XG50eXBlIFNlbGVjdFJlY29yZEVuaGFuY2VkID0gU2VsZWN0UmVjb3JkICYge1xuICByZWNvcmQ6IFJlY29yZEpTT047XG59XG5cbmNvbnN0IEVkaXQ6IEZDPENvbWJpbmVkUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgb25DaGFuZ2UsIHByb3BlcnR5LCByZWNvcmQsIHRoZW1lIH0gPSBwcm9wc1xuICBjb25zdCB7IHJlZmVyZW5jZTogcmVzb3VyY2VJZCB9ID0gcHJvcGVydHlcblxuICBpZiAoIXJlc291cmNlSWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCByZWZlcmVuY2UgcmVzb3VyY2UgaW4gcHJvcGVydHkgJyR7cHJvcGVydHkucGF0aH0nYClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChzZWxlY3RlZDogU2VsZWN0UmVjb3JkRW5oYW5jZWQpOiB2b2lkID0+IHtcbiAgICBpZiAoc2VsZWN0ZWQpIHtcbiAgICAgIG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIHNlbGVjdGVkLnZhbHVlLCBzZWxlY3RlZC5yZWNvcmQpXG4gICAgfSBlbHNlIHtcbiAgICAgIG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIG51bGwpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbG9hZE9wdGlvbnMgPSBhc3luYyAoaW5wdXRWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxTZWxlY3RSZWNvcmRFbmhhbmNlZFtdPiA9PiB7XG4gICAgY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXG5cbiAgICBjb25zdCBvcHRpb25SZWNvcmRzID0gYXdhaXQgYXBpLnNlYXJjaFJlY29yZHMoe1xuICAgICAgcmVzb3VyY2VJZCxcbiAgICAgIHF1ZXJ5OiBpbnB1dFZhbHVlLFxuICAgIH0pXG4gICAgcmV0dXJuIG9wdGlvblJlY29yZHMubWFwKChvcHRpb25SZWNvcmQ6IFJlY29yZEpTT04pID0+ICh7XG4gICAgICB2YWx1ZTogb3B0aW9uUmVjb3JkLmlkLFxuICAgICAgbGFiZWw6IG9wdGlvblJlY29yZC50aXRsZSxcbiAgICAgIHJlY29yZDogb3B0aW9uUmVjb3JkLFxuICAgIH0pKVxuICB9XG4gIGNvbnN0IGVycm9yID0gcmVjb3JkPy5lcnJvcnNbcHJvcGVydHkucGF0aF1cblxuICBjb25zdCBzZWxlY3RlZElkID0gcmVjb3JkPy5wYXJhbXNbcHJvcGVydHkucGF0aF0gYXMgc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGNvbnN0IFtsb2FkZWRSZWNvcmQsIHNldExvYWRlZFJlY29yZF0gPSB1c2VTdGF0ZTxSZWNvcmRKU09OIHwgdW5kZWZpbmVkPigpXG4gIGNvbnN0IFtsb2FkaW5nUmVjb3JkLCBzZXRMb2FkaW5nUmVjb3JkXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSByZWNvcmQ/LnBvcHVsYXRlZFtwcm9wZXJ0eS5wYXRoXSA/PyBsb2FkZWRSZWNvcmRcbiAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSAoc2VsZWN0ZWRJZCAmJiBzZWxlY3RlZFZhbHVlKSA/IHtcbiAgICB2YWx1ZTogc2VsZWN0ZWRWYWx1ZS5pZCxcbiAgICBsYWJlbDogc2VsZWN0ZWRWYWx1ZS50aXRsZSxcbiAgfSA6IHtcbiAgICB2YWx1ZTogJycsXG4gICAgbGFiZWw6ICcnLFxuICB9XG4gIGNvbnN0IHN0eWxlcyA9IHNlbGVjdFN0eWxlcyh0aGVtZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRWYWx1ZSAmJiBzZWxlY3RlZElkKSB7XG4gICAgICBzZXRMb2FkaW5nUmVjb3JkKGMgPT4gYyArIDEpXG4gICAgICBjb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcbiAgICAgIGFwaS5yZWNvcmRBY3Rpb24oe1xuICAgICAgICBhY3Rpb25OYW1lOiAnc2hvdycsXG4gICAgICAgIHJlc291cmNlSWQsXG4gICAgICAgIHJlY29yZElkOiBzZWxlY3RlZElkLFxuICAgICAgfSkudGhlbigoeyBkYXRhIH06IGFueSkgPT4ge1xuICAgICAgICBzZXRMb2FkZWRSZWNvcmQoZGF0YS5yZWNvcmQpXG4gICAgICB9KS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgc2V0TG9hZGluZ1JlY29yZChjID0+IGMgLSAxKVxuICAgICAgfSlcbiAgICB9XG4gIH0sIFtzZWxlY3RlZFZhbHVlLCBzZWxlY3RlZElkLCByZXNvdXJjZUlkXSlcblxuICByZXR1cm4gKFxuICAgIDxGb3JtR3JvdXAgZXJyb3I9e0Jvb2xlYW4oZXJyb3IpfT5cbiAgICAgIDxQcm9wZXJ0eUxhYmVsIHByb3BlcnR5PXtwcm9wZXJ0eX0gLz5cbiAgICAgIDxTZWxlY3RcbiAgICAgICAgY2FjaGVPcHRpb25zXG4gICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbn1cbiAgICAgICAgc3R5bGVzPXtzdHlsZXN9XG4gICAgICAgIGRlZmF1bHRPcHRpb25zXG4gICAgICAgIGxvYWRPcHRpb25zPXtsb2FkT3B0aW9uc31cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgaXNDbGVhcmFibGVcbiAgICAgICAgaXNEaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cbiAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nUmVjb3JkfVxuICAgICAgICB7Li4ucHJvcGVydHkucHJvcHN9XG4gICAgICAvPlxuICAgICAgPEZvcm1NZXNzYWdlPntlcnJvcj8ubWVzc2FnZX08L0Zvcm1NZXNzYWdlPlxuICAgIDwvRm9ybUdyb3VwPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShFZGl0KVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgQnV0dG9uQ1NTIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5cclxuaW1wb3J0IFZpZXdIZWxwZXJzIGZyb20gJy4uLy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcclxuaW1wb3J0IHsgUmVjb3JkSlNPTiwgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgcHJvcGVydHk6IFByb3BlcnR5SlNPTjtcclxuICByZWNvcmQ6IFJlY29yZEpTT047XHJcbn1cclxuXHJcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQ8YW55PihMaW5rKWBcclxuICAke0J1dHRvbkNTU307XHJcbiAgcGFkZGluZy1sZWZ0OiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuc3BhY2UueHN9O1xyXG4gIHBhZGRpbmctcmlnaHQ6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5zcGFjZS54c307XHJcbmBcclxuXHJcbmNvbnN0IFJlZmVyZW5jZVZhbHVlOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxyXG4gIGNvbnN0IHJlZklkID0gcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXVxyXG4gIGNvbnN0IHBvcHVsYXRlZCA9IHJlY29yZC5wb3B1bGF0ZWRbcHJvcGVydHkucGF0aF1cclxuICBjb25zdCB2YWx1ZSA9IChwb3B1bGF0ZWQgJiYgcG9wdWxhdGVkLnRpdGxlKSB8fCByZWZJZFxyXG5cclxuICBpZiAoIXByb3BlcnR5LnJlZmVyZW5jZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBwcm9wZXJ0eTogXCIke3Byb3BlcnR5LnBhdGh9XCIgZG9lcyBub3QgaGF2ZSBhIHJlZmVyZW5jZWApXHJcbiAgfVxyXG5cclxuICBpZiAocG9wdWxhdGVkICYmIHBvcHVsYXRlZC5yZWNvcmRBY3Rpb25zLmZpbmQoYSA9PiBhLm5hbWUgPT09ICdzaG93JykpIHtcclxuICAgIGNvbnN0IGhyZWYgPSBoLnJlY29yZEFjdGlvblVybCh7XHJcbiAgICAgIHJlc291cmNlSWQ6IHByb3BlcnR5LnJlZmVyZW5jZSwgcmVjb3JkSWQ6IHJlZklkLCBhY3Rpb25OYW1lOiAnc2hvdycsXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFN0eWxlZExpbmsgdmFyaWFudD1cInRleHRcIiB0bz17aHJlZn0+e3ZhbHVlfTwvU3R5bGVkTGluaz5cclxuICAgIClcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxzcGFuPnt2YWx1ZX08L3NwYW4+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWZlcmVuY2VWYWx1ZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFZhbHVlR3JvdXAgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgUmVmZXJlbmNlVmFsdWUgZnJvbSAnLi9yZWZlcmVuY2UtdmFsdWUnXHJcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEVkaXRQcm9wZXJ0eVByb3BzPiB7XHJcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQgfSA9IHRoaXMucHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxyXG4gICAgICAgIDxSZWZlcmVuY2VWYWx1ZVxyXG4gICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxyXG4gICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9WYWx1ZUdyb3VwPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgUmVmZXJlbmNlVmFsdWUgZnJvbSAnLi9yZWZlcmVuY2UtdmFsdWUnXHJcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEVkaXRQcm9wZXJ0eVByb3BzPiB7XHJcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XHJcbiAgICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWZlcmVuY2VWYWx1ZVxyXG4gICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cclxuICAgICAgICByZWNvcmQ9e3JlY29yZH1cclxuICAgICAgLz5cclxuICAgIClcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QvYXN5bmMnXG5pbXBvcnQgeyBUaGVtZVByb3BzLCBEZWZhdWx0VGhlbWUsIHdpdGhUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBMYWJlbCwgZmlsdGVyU3R5bGVzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgQXBpQ2xpZW50IGZyb20gJy4uLy4uLy4uL3V0aWxzL2FwaS1jbGllbnQnXG5pbXBvcnQgeyBGaWx0ZXJQcm9wZXJ0eVByb3BzLCBTZWxlY3RSZWNvcmQgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuXG50eXBlIENvbWJpbmVkUHJvcHMgPSBGaWx0ZXJQcm9wZXJ0eVByb3BzICYgVGhlbWVQcm9wczxEZWZhdWx0VGhlbWU+XG5cbmNsYXNzIEZpbHRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8Q29tYmluZWRQcm9wcz4ge1xuICBwcml2YXRlIGFwaTogQXBpQ2xpZW50XG5cbiAgcHJpdmF0ZSBvcHRpb25zOiBBcnJheTxTZWxlY3RSZWNvcmQ+XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IENvbWJpbmVkUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmFwaSA9IG5ldyBBcGlDbGllbnQoKVxuICAgIHRoaXMub3B0aW9ucyA9IFtdXG4gICAgdGhpcy5sb2FkT3B0aW9ucyA9IHRoaXMubG9hZE9wdGlvbnMuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHNlbGVjdGVkOiBTZWxlY3RSZWNvcmQpOiB2b2lkIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xuICAgIG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIHNlbGVjdGVkID8gc2VsZWN0ZWQudmFsdWUgOiAnJylcbiAgfVxuXG4gIGFzeW5jIGxvYWRPcHRpb25zKGlucHV0VmFsdWU6IHN0cmluZyk6IFByb21pc2U8QXJyYXk8e3ZhbHVlOiBzdHJpbmc7IGxhYmVsOiBzdHJpbmcgfT4+IHtcbiAgICBjb25zdCB7IHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgcmVjb3JkcyA9IGF3YWl0IHRoaXMuYXBpLnNlYXJjaFJlY29yZHMoe1xuICAgICAgcmVzb3VyY2VJZDogcHJvcGVydHkucmVmZXJlbmNlIGFzIHN0cmluZyxcbiAgICAgIHF1ZXJ5OiBpbnB1dFZhbHVlLFxuICAgIH0pXG4gICAgdGhpcy5vcHRpb25zID0gcmVjb3Jkcy5tYXAociA9PiAoeyB2YWx1ZTogci5pZCwgbGFiZWw6IHIudGl0bGUgfSkpXG4gICAgcmV0dXJuIHRoaXMub3B0aW9uc1xuICB9XG5cbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgZmlsdGVyLCB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIGZpbHRlcltwcm9wZXJ0eS5wYXRoXSA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6IGZpbHRlcltwcm9wZXJ0eS5wYXRoXVxuICAgIGNvbnN0IHNlbGVjdGVkID0gKHRoaXMub3B0aW9ucyB8fCBbXSkuZmluZChvID0+IG8udmFsdWUgPT09IHZhbHVlKVxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICA8TGFiZWw+e3Byb3BlcnR5LmxhYmVsfTwvTGFiZWw+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICB2YWx1ZT17dHlwZW9mIHNlbGVjdGVkID09PSAndW5kZWZpbmVkJyA/ICcnIDogc2VsZWN0ZWR9XG4gICAgICAgICAgaXNDbGVhcmFibGVcbiAgICAgICAgICBjYWNoZU9wdGlvbnNcbiAgICAgICAgICBzdHlsZXM9e2ZpbHRlclN0eWxlcyh0aGVtZSl9XG4gICAgICAgICAgbG9hZE9wdGlvbnM9e3RoaXMubG9hZE9wdGlvbnN9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGRlZmF1bHRPcHRpb25zXG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEZpbHRlcilcbiIsIlxyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFZhbHVlR3JvdXAgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxFZGl0UHJvcGVydHlQcm9wcz4ge1xyXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xyXG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgY29uc3QgdmFsdWUgPSByZWNvcmQucGFyYW1zW3Byb3BlcnR5LnBhdGhdIHx8ICcnXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFZhbHVlR3JvdXAgbGFiZWw9e3Byb3BlcnR5LmxhYmVsfT5cclxuICAgICAgICB7dmFsdWUuc3BsaXQoLyg/OlxcclxcbnxcXHJ8XFxuKS9nKS5tYXAoKGxpbmUsIGkpID0+IChcclxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcclxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgICAgICB7bGluZX1cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1ZhbHVlR3JvdXA+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlU3RhdGUsIEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgSW5wdXQsIEZvcm1Hcm91cCwgRm9ybU1lc3NhZ2UgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXHJcbmltcG9ydCB7IHJlY29yZFByb3BlcnR5SXNFcXVhbCB9IGZyb20gJy4uL3JlY29yZC1wcm9wZXJ0eS1pcy1lcXVhbCdcclxuaW1wb3J0IHsgUHJvcGVydHlMYWJlbCB9IGZyb20gJy4uL3V0aWxzL3Byb3BlcnR5LWxhYmVsJ1xyXG5cclxuY29uc3QgRWRpdDogRkM8RWRpdFByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHksIHJlY29yZCB9ID0gcHJvcHNcclxuICBjb25zdCBwcm9wVmFsdWUgPSByZWNvcmQucGFyYW1zPy5bcHJvcGVydHkucGF0aF0gPz8gJydcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHByb3BWYWx1ZSlcclxuICBjb25zdCBlcnJvciA9IHJlY29yZC5lcnJvcnM/Lltwcm9wZXJ0eS5wYXRoXVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHZhbHVlICE9PSBwcm9wVmFsdWUpIHtcclxuICAgICAgc2V0VmFsdWUocHJvcFZhbHVlKVxyXG4gICAgfVxyXG4gIH0sIFtwcm9wVmFsdWVdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17Qm9vbGVhbihlcnJvcil9PlxyXG4gICAgICA8UHJvcGVydHlMYWJlbCBwcm9wZXJ0eT17cHJvcGVydHl9IC8+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIGFzPVwidGV4dGFyZWFcIlxyXG4gICAgICAgIHJvd3M9eyh2YWx1ZS5tYXRjaCgvXFxuL2cpIHx8IFtdKS5sZW5ndGggKyAxfVxyXG4gICAgICAgIGlkPXtwcm9wZXJ0eS5wYXRofVxyXG4gICAgICAgIG5hbWU9e3Byb3BlcnR5LnBhdGh9XHJcbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIG9uQmx1cj17KCkgPT4gb25DaGFuZ2UocHJvcGVydHkucGF0aCwgdmFsdWUpfVxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICBkaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cclxuICAgICAgICB7Li4ucHJvcGVydHkucHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxGb3JtTWVzc2FnZT57ZXJyb3IgJiYgZXJyb3IubWVzc2FnZX08L0Zvcm1NZXNzYWdlPlxyXG4gICAgPC9Gb3JtR3JvdXA+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbClcclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgbWVtbywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IElucHV0LCBGb3JtR3JvdXAsIElucHV0R3JvdXAsIEZvcm1NZXNzYWdlLCBCdXR0b24sIEljb24gfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXHJcbmltcG9ydCB7IHJlY29yZFByb3BlcnR5SXNFcXVhbCB9IGZyb20gJy4uL3JlY29yZC1wcm9wZXJ0eS1pcy1lcXVhbCdcclxuaW1wb3J0IHsgUHJvcGVydHlMYWJlbCB9IGZyb20gJy4uL3V0aWxzL3Byb3BlcnR5LWxhYmVsJ1xyXG5cclxuY29uc3QgRWRpdDogUmVhY3QuRkM8RWRpdFByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9ID0gcHJvcHNcclxuICBjb25zdCBwcm9wVmFsdWUgPSByZWNvcmQucGFyYW1zW3Byb3BlcnR5LnBhdGhdXHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShwcm9wVmFsdWUpXHJcbiAgY29uc3QgZXJyb3IgPSByZWNvcmQuZXJyb3JzICYmIHJlY29yZC5lcnJvcnNbcHJvcGVydHkucGF0aF1cclxuICBjb25zdCBbaXNJbnB1dCwgc2V0SXNJbnB1dF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh2YWx1ZSAhPT0gcHJvcFZhbHVlKSB7XHJcbiAgICAgIHNldFZhbHVlKHByb3BWYWx1ZSlcclxuICAgIH1cclxuICB9LCBbcHJvcFZhbHVlXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtR3JvdXAgZXJyb3I9eyEhZXJyb3J9PlxyXG4gICAgICA8UHJvcGVydHlMYWJlbCBwcm9wZXJ0eT17cHJvcGVydHl9IC8+XHJcbiAgICAgIDxJbnB1dEdyb3VwPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdHlwZT17aXNJbnB1dCA/ICdpbnB1dCcgOiAncGFzc3dvcmQnfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxyXG4gICAgICAgICAgaWQ9e3Byb3BlcnR5LnBhdGh9XHJcbiAgICAgICAgICBuYW1lPXtwcm9wZXJ0eS5wYXRofVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBvbkJsdXI9eygpID0+IG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIHZhbHVlKX1cclxuICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBlLmtleUNvZGUgPT09IDEzICYmIG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIHZhbHVlKX1cclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZSA/PyAnJ31cclxuICAgICAgICAgIGRpc2FibGVkPXtwcm9wZXJ0eS5pc0Rpc2FibGVkfVxyXG4gICAgICAgICAgey4uLnByb3BlcnR5LnByb3BzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdmFyaWFudD17aXNJbnB1dCA/ICdwcmltYXJ5JyA6ICd0ZXh0J31cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgc2l6ZT1cImljb25cIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNJbnB1dCghaXNJbnB1dCl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEljb24gaWNvbj1cIlZpZXdcIiAvPlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgIDxGb3JtTWVzc2FnZT57ZXJyb3IgJiYgZXJyb3IubWVzc2FnZX08L0Zvcm1NZXNzYWdlPlxyXG4gICAgPC9Gb3JtR3JvdXA+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbClcclxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xyXG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQnXHJcblxyXG5leHBvcnQge1xyXG4gIEVkaXQgYXMgZWRpdCxcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUmVhY3RDb21wb25lbnRMaWtlIH0gZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi4vYXBwL2Vycm9yLWJvdW5kYXJ5J1xuXG5pbXBvcnQgKiBhcyBBcnJheVR5cGUgZnJvbSAnLi9hcnJheSdcbmltcG9ydCAqIGFzIE1peGVkVHlwZSBmcm9tICcuL21peGVkJ1xuXG5pbXBvcnQgKiBhcyBkZWZhdWx0VHlwZSBmcm9tICcuL2RlZmF1bHQtdHlwZSdcbmltcG9ydCAqIGFzIGJvb2xlYW4gZnJvbSAnLi9ib29sZWFuJ1xuaW1wb3J0ICogYXMgZGF0ZXRpbWUgZnJvbSAnLi9kYXRldGltZSdcbmltcG9ydCAqIGFzIHJpY2h0ZXh0IGZyb20gJy4vcmljaHRleHQnXG5pbXBvcnQgKiBhcyByZWZlcmVuY2UgZnJvbSAnLi9yZWZlcmVuY2UnXG5pbXBvcnQgKiBhcyB0ZXh0YXJlYSBmcm9tICcuL3RleHRhcmVhJ1xuaW1wb3J0ICogYXMgcGFzc3dvcmQgZnJvbSAnLi9wYXNzd29yZCdcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eUNvbXBvbmVudFByb3BzIH0gZnJvbSAnLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IHsgUHJvcGVydHlUeXBlIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC9hZGFwdGVycy9wcm9wZXJ0eS9iYXNlLXByb3BlcnR5J1xuaW1wb3J0IHsgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcblxubGV0IGdsb2JhbEFueTogYW55ID0ge31cblxudHJ5IHtcbiAgZ2xvYmFsQW55ID0gd2luZG93XG59IGNhdGNoIChlcnJvcikge1xuICBpZiAoZXJyb3IubWVzc2FnZSAhPT0gJ3dpbmRvdyBpcyBub3QgZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG59XG5cbmNvbnN0IHR5cGVzOiBSZWNvcmQ8UHJvcGVydHlUeXBlLCBhbnk+ID0ge1xuICB0ZXh0YXJlYSxcbiAgYm9vbGVhbixcbiAgZGF0ZXRpbWUsXG4gIHJlZmVyZW5jZSxcbiAgcGFzc3dvcmQsXG4gIGRhdGU6IGRhdGV0aW1lLFxuICByaWNodGV4dCxcbiAgc3RyaW5nOiBkZWZhdWx0VHlwZSxcbiAgbnVtYmVyOiBkZWZhdWx0VHlwZSxcbiAgZmxvYXQ6IGRlZmF1bHRUeXBlLFxuICBtaXhlZDogbnVsbCxcbn1cblxuLyoqXG4gKiBAbG9hZCAuL2Jhc2UtcHJvcGVydHktY29tcG9uZW50LmRvYy5tZFxuICogQGNvbXBvbmVudFxuICogQG5hbWUgQmFzZVByb3BlcnR5Q29tcG9uZW50XG4gKiBAc3ViY2F0ZWdvcnkgQXBwbGljYXRpb25cbiAqIEBjbGFzc1xuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5jb25zdCBCYXNlUHJvcGVydHlDb21wb25lbnQ6IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eUNvbXBvbmVudFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5OiBiYXNlUHJvcGVydHksIHJlc291cmNlLCByZWNvcmQsIGZpbHRlciwgd2hlcmUsIG9uQ2hhbmdlIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHByb3BlcnR5OiBQcm9wZXJ0eUpTT04gPSB1c2VNZW1vKCgpID0+ICh7XG4gICAgLi4uYmFzZVByb3BlcnR5LFxuICAgIC8vIHdlIGZpbGwgdGhlIHBhdGggaWYgaXQgaXMgbm90IHRoZXJlLiBUaGF0IGlzIHdoeSBhbGwgdGhlIGFjdHVhbCBDb21wb25lbnQgUmVuZGVyZXJzIGFyZVxuICAgIC8vIGNhbGxlZCB3aXRoIHRoZSBwYXRoIHNldCB0byB0aGlzIHJvb3QgcGF0aC4gTmV4dCBtaXhlZCBhbmQgYXJyYXkgY29tcG9uZW50cyBhZGRzIHRvIHRoaXNcbiAgICAvLyBwYXRoIGVpdGhlciBpbmRleCAoZm9yIGFycmF5KSBvciBzdWJQcm9wZXJ0eSBuYW1lLlxuICAgIHBhdGg6IChiYXNlUHJvcGVydHkgYXMgUHJvcGVydHlKU09OKS5wYXRoIHx8IGJhc2VQcm9wZXJ0eS5wcm9wZXJ0eVBhdGgsXG4gIH0pLCBbYmFzZVByb3BlcnR5XSlcblxuICBjb25zdCB0ZXN0SWQgPSBgcHJvcGVydHktJHt3aGVyZX0tJHtwcm9wZXJ0eS5wYXRofWBcblxuICBsZXQgQ29tcG9uZW50OiBSZWFjdENvbXBvbmVudExpa2UgPSAodHlwZXNbcHJvcGVydHkudHlwZV0gJiYgdHlwZXNbcHJvcGVydHkudHlwZV1bd2hlcmVdKVxuICB8fCBkZWZhdWx0VHlwZVt3aGVyZV1cblxuICBpZiAocHJvcGVydHkuY29tcG9uZW50cyAmJiBwcm9wZXJ0eS5jb21wb25lbnRzW3doZXJlXSkge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IHByb3BlcnR5LmNvbXBvbmVudHNbd2hlcmVdXG4gICAgaWYgKCFjb21wb25lbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdGhlcmUgaXMgbm8gXCIke3Byb3BlcnR5LnBhdGh9LmNvbXBvbmVudHMuJHt3aGVyZX1cImApXG4gICAgfVxuICAgIENvbXBvbmVudCA9IGdsb2JhbEFueS5BZG1pbkJyby5Vc2VyQ29tcG9uZW50c1tjb21wb25lbnRdXG4gICAgcmV0dXJuIChcbiAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICA8Qm94IGRhdGEtdGVzdGlkPXt0ZXN0SWR9PlxuICAgICAgICAgIDxDb21wb25lbnRcbiAgICAgICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxuICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICB3aGVyZT17d2hlcmV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgQXJyYXkgPSBBcnJheVR5cGVbd2hlcmVdXG4gIGNvbnN0IE1peGVkID0gTWl4ZWRUeXBlW3doZXJlXVxuXG4gIGlmIChiYXNlUHJvcGVydHkuaXNBcnJheSkge1xuICAgIGlmICghQXJyYXkpIHsgcmV0dXJuICg8ZGl2IC8+KSB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcnJheVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgSXRlbUNvbXBvbmVudD17QmFzZVByb3BlcnR5Q29tcG9uZW50fVxuICAgICAgICB0ZXN0SWQ9e3Rlc3RJZH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgaWYgKGJhc2VQcm9wZXJ0eS50eXBlID09PSAnbWl4ZWQnKSB7XG4gICAgaWYgKCFNaXhlZCkgeyByZXR1cm4gKDxkaXYgLz4pIH1cbiAgICByZXR1cm4gKFxuICAgICAgPE1peGVkXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICBJdGVtQ29tcG9uZW50PXtCYXNlUHJvcGVydHlDb21wb25lbnR9XG4gICAgICAgIHRlc3RJZD17dGVzdElkfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgPEJveCBkYXRhLXRlc3RpZD17dGVzdElkfT5cbiAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIHdoZXJlPXt3aGVyZX1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgKVxufVxuZXhwb3J0IHtcbiAgQmFzZVByb3BlcnR5Q29tcG9uZW50IGFzIGRlZmF1bHQsXG4gIEJhc2VQcm9wZXJ0eUNvbXBvbmVudCxcbn1cbiIsImltcG9ydCBCYXNlUHJvcGVydHlDb21wb25lbnQgZnJvbSAnLi9iYXNlLXByb3BlcnR5LWNvbXBvbmVudCdcbmltcG9ydCAqIGFzIGRlZmF1bHRUeXBlIGZyb20gJy4vZGVmYXVsdC10eXBlJ1xuaW1wb3J0ICogYXMgYm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgKiBhcyBkYXRldGltZSBmcm9tICcuL2RhdGV0aW1lJ1xuaW1wb3J0ICogYXMgcmljaHRleHQgZnJvbSAnLi9yaWNodGV4dCdcbmltcG9ydCAqIGFzIHJlZmVyZW5jZSBmcm9tICcuL3JlZmVyZW5jZSdcbmltcG9ydCAqIGFzIHRleHRhcmVhIGZyb20gJy4vdGV4dGFyZWEnXG5pbXBvcnQgKiBhcyBwYXNzd29yZCBmcm9tICcuL3Bhc3N3b3JkJ1xuaW1wb3J0IHsgQmFzZVByb3BlcnR5Q29tcG9uZW50UHJvcHMgfSBmcm9tICcuL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbnR5cGUgQmFzZVByb3BlcnR5Q29tcG9uZW50VHlwZSA9IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eUNvbXBvbmVudFByb3BzPiAmIHtcbiAgRGVmYXVsdFR5cGU6IGFueTtcbiAgQm9vbGVhbjogYW55O1xuICBEYXRlVGltZTogYW55O1xuICBSaWNoVGV4dDogYW55O1xuICBSZWZlcmVuY2U6IGFueTtcbiAgVGV4dEFyZWE6IGFueTtcbiAgUGFzc3dvcmQ6IGFueTtcbn1cblxuZnVuY3Rpb24gY2FtZWxpemVQcm9wZXJ0eVR5cGU8VD4odHlwZToge1trZXk6IHN0cmluZ106IFR9KToge1trZXk6IHN0cmluZ106IFR9IHtcbiAgcmV0dXJuIHtcbiAgICBFZGl0OiB0eXBlLmVkaXQsXG4gICAgU2hvdzogdHlwZS5zaG93LFxuICAgIExpc3Q6IHR5cGUubGlzdCxcbiAgICBGaWx0ZXI6IHR5cGUuZmlsdGVyLFxuICB9XG59XG5cbmNvbnN0IEJhc2VQcm9wZXJ0eUNvbXBvbmVudEV4dGVuZGVkOiBCYXNlUHJvcGVydHlDb21wb25lbnRUeXBlID0gT2JqZWN0LmFzc2lnbihcbiAgQmFzZVByb3BlcnR5Q29tcG9uZW50LCB7XG4gICAgRGVmYXVsdFR5cGU6IGNhbWVsaXplUHJvcGVydHlUeXBlKGRlZmF1bHRUeXBlKSxcbiAgICBCb29sZWFuOiBjYW1lbGl6ZVByb3BlcnR5VHlwZShib29sZWFuKSxcbiAgICBEYXRlVGltZTogY2FtZWxpemVQcm9wZXJ0eVR5cGUoZGF0ZXRpbWUpLFxuICAgIFJpY2hUZXh0OiBjYW1lbGl6ZVByb3BlcnR5VHlwZShyaWNodGV4dCksXG4gICAgUmVmZXJlbmNlOiBjYW1lbGl6ZVByb3BlcnR5VHlwZShyZWZlcmVuY2UpLFxuICAgIFRleHRBcmVhOiBjYW1lbGl6ZVByb3BlcnR5VHlwZSh0ZXh0YXJlYSksXG4gICAgUGFzc3dvcmQ6IGNhbWVsaXplUHJvcGVydHlUeXBlKHBhc3N3b3JkKSxcbiAgfSxcbilcblxuXG5leHBvcnQge1xuICBCYXNlUHJvcGVydHlDb21wb25lbnRFeHRlbmRlZCBhcyBkZWZhdWx0LFxuICBCYXNlUHJvcGVydHlDb21wb25lbnRFeHRlbmRlZCBhcyBCYXNlUHJvcGVydHlDb21wb25lbnQsXG59XG5cbmV4cG9ydCAqIGZyb20gJy4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBCb3gsIGNzc0NsYXNzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5cclxuaW1wb3J0IHsgUmVjb3JkSlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IFZpZXdIZWxwZXJzIGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcclxuXHJcbmV4cG9ydCBjb25zdCBCcmVhZGNydW1iTGluayA9IHN0eWxlZChMaW5rKWBcclxuICBjb2xvcjogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmNvbG9ycy5ncmV5NDB9O1xyXG4gIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuZm9udH07XHJcbiAgbGluZS1oZWlnaHQ6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5saW5lSGVpZ2h0cy5kZWZhdWx0fTtcclxuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5mb250U2l6ZXMuZGVmYXVsdH07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuY29sb3JzLnByaW1hcnkxMDB9O1xyXG4gIH1cclxuXHJcbiAgJjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnLyc7XHJcbiAgICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5zcGFjZS5kZWZhdWx0fTtcclxuICB9XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5gXHJcblxyXG4vKipcclxuICogQG1lbWJlcm9mIEJyZWFkY3J1bWJzXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBCcmVhZGNydW1iUHJvcHMgPSB7XHJcbiAgLyoqXHJcbiAgICogUmVzb3VyY2VcclxuICAgKi9cclxuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xyXG4gIC8qKlxyXG4gICAqIHJlY29yZFxyXG4gICAqL1xyXG4gIHJlY29yZD86IFJlY29yZEpTT04gfCBudWxsO1xyXG4gIC8qKlxyXG4gICAqIE5hbWUgb2YgYW4gYWN0aW9uXHJcbiAgICovXHJcbiAgYWN0aW9uTmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGNvbXBvbmVudFxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEJyZWFkY3J1bWJzOiBSZWFjdC5GQzxCcmVhZGNydW1iUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyByZXNvdXJjZSwgcmVjb3JkLCBhY3Rpb25OYW1lIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBhY3Rpb24gPSByZXNvdXJjZS5hY3Rpb25zLmZpbmQoYSA9PiBhLm5hbWUgPT09IGFjdGlvbk5hbWUpXHJcbiAgY29uc3QgaCA9IG5ldyBWaWV3SGVscGVycygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGZsZXhHcm93PXsxfSBjbGFzc05hbWU9e2Nzc0NsYXNzKCdCcmVhZGNydW1icycpfT5cclxuICAgICAgPEJyZWFkY3J1bWJMaW5rIHRvPXtoLmRhc2hib2FyZFVybCgpfT5EYXNoYm9hcmQ8L0JyZWFkY3J1bWJMaW5rPlxyXG4gICAgICA8QnJlYWRjcnVtYkxpbmsgdG89e3Jlc291cmNlLmhyZWYgPyByZXNvdXJjZS5ocmVmIDogJy8nfSBjbGFzc05hbWU9e3JlY29yZCA/ICdpcy1hY3RpdmUnIDogJyd9PlxyXG4gICAgICAgIHtyZXNvdXJjZS5uYW1lfVxyXG4gICAgICA8L0JyZWFkY3J1bWJMaW5rPlxyXG4gICAgICB7IGFjdGlvbiAmJiBhY3Rpb24ubmFtZSAhPT0gJ2xpc3QnICYmIDxCcmVhZGNydW1iTGluayB0bz1cIiNcIj57YWN0aW9uLmxhYmVsfTwvQnJlYWRjcnVtYkxpbms+fVxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCcmVhZGNydW1ic1xyXG4iLCJpbXBvcnQgeyBCdXR0b25Hcm91cFByb3BzLCBCdXR0b25Jbkdyb3VwUHJvcHMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgeyBhY3Rpb25IcmVmLCBBY3Rpb25KU09OLCBidWlsZEFjdGlvblRlc3RJZCB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IERpZmZlcmVudEFjdGlvblBhcmFtcyB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xyXG5cclxuZXhwb3J0IHR5cGUgYWN0aW9uc1RvQnV0dG9uR3JvdXBPcHRpb25zID0ge1xyXG4gIGFjdGlvbnM6IEFycmF5PEFjdGlvbkpTT04+O1xyXG4gIHBhcmFtczogRGlmZmVyZW50QWN0aW9uUGFyYW1zO1xyXG4gIGhhbmRsZUNsaWNrOiBCdXR0b25Jbkdyb3VwUHJvcHNbJ29uQ2xpY2snXTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbnNUb0J1dHRvbkdyb3VwID0gKFxyXG4gIG9wdGlvbnM6IGFjdGlvbnNUb0J1dHRvbkdyb3VwT3B0aW9ucyxcclxuKTogQnV0dG9uR3JvdXBQcm9wc1snYnV0dG9ucyddID0+IHtcclxuICBjb25zdCB7IGFjdGlvbnMsIHBhcmFtcywgaGFuZGxlQ2xpY2sgfSA9IG9wdGlvbnNcclxuICBjb25zdCBidXR0b25zID0gYWN0aW9ucy5tYXAoKGFjdGlvbikgPT4ge1xyXG4gICAgY29uc3QgaHJlZiA9IGFjdGlvbkhyZWYoYWN0aW9uLCBwYXJhbXMpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpY29uOiBhY3Rpb24uaWNvbixcclxuICAgICAgbGFiZWw6IGFjdGlvbi5sYWJlbCxcclxuICAgICAgdmFyaWFudDogYWN0aW9uLnZhcmlhbnQsXHJcbiAgICAgIHNvdXJjZTogYWN0aW9uLFxyXG4gICAgICBocmVmOiBocmVmIHx8IHVuZGVmaW5lZCxcclxuICAgICAgLy8gd2hlbiBocmVmIGlzIG5vdCBkZWZpbmVkIC0gaGFuZGxlIGNsaWNrIHNob3VsZCBhbHNvIGJlIG5vdCBkZWZpbmVkXHJcbiAgICAgIC8vIFRoaXMgcHJldmVudHMgZnJvbSBcImN1cnNvcjogcG9pbnRlcjtcIlxyXG4gICAgICBvbkNsaWNrOiBocmVmID8gaGFuZGxlQ2xpY2sgOiB1bmRlZmluZWQsXHJcbiAgICAgICdkYXRhLXRlc3RpZCc6IGJ1aWxkQWN0aW9uVGVzdElkKGFjdGlvbiksXHJcbiAgICAgIGJ1dHRvbnM6IFtdLFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC8vIG5lc3RpbmcgYnV0dG9uc1xyXG4gIGNvbnN0IGJ1dHRvbnNNYXAgPSBidXR0b25zLnJlZHVjZSgobWVtbywgYnV0dG9uKSA9PiB7XHJcbiAgICBjb25zdCBhY3Rpb24gPSBidXR0b24uc291cmNlXHJcbiAgICBpZiAoYWN0aW9uLnBhcmVudCkge1xyXG4gICAgICBjb25zdCBwYXJlbnQ6IEJ1dHRvbkluR3JvdXBQcm9wcyA9IG1lbW9bYWN0aW9uLnBhcmVudF1cclxuICAgICAgICB8fCBidXR0b25zLmZpbmQoYnRuID0+IGJ0bi5zb3VyY2UubmFtZSA9PT0gYWN0aW9uLnBhcmVudClcclxuICAgICAgICB8fCB7XHJcbiAgICAgICAgICBsYWJlbDogYWN0aW9uLnBhcmVudCxcclxuICAgICAgICB9XHJcblxyXG4gICAgICBwYXJlbnQuYnV0dG9ucyA9IHBhcmVudC5idXR0b25zIHx8IFtdXHJcbiAgICAgIHBhcmVudC5idXR0b25zLnB1c2goYnV0dG9uKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLm1lbW8sXHJcbiAgICAgICAgW2FjdGlvbi5wYXJlbnRdOiBwYXJlbnQsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLm1lbW8sXHJcbiAgICAgIFtidXR0b24uc291cmNlLm5hbWVdOiBidXR0b24sXHJcbiAgICB9XHJcbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgQnV0dG9uSW5Hcm91cFByb3BzPilcclxuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhidXR0b25zTWFwKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgTGluayBhcyBSb3V0ZXJMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHtcclxuICBCdXR0b25DU1MsXHJcbiAgQnV0dG9uUHJvcHMsXHJcbiAgSWNvbixcclxufSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgVmlld0hlbHBlcnMgZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xyXG5cclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcclxuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZCgoeyByb3VuZGVkLCAuLi5yZXN0IH0pID0+IDxSb3V0ZXJMaW5rIHsuLi5yZXN0fSAvPik8QnV0dG9uUHJvcHM+YCR7QnV0dG9uQ1NTfWBcclxuY29uc3QgaCA9IG5ldyBWaWV3SGVscGVycygpXHJcblxyXG5leHBvcnQgdHlwZSBTdHlsZWRCYWNrQnV0dG9uUHJvcHMgPSB7XHJcbiAgcmVzb3VyY2VJZDogc3RyaW5nO1xyXG4gIHNob3dJbkRyYXdlcjogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0eWxlZEJhY2tCdXR0b246IFJlYWN0LkZDPFN0eWxlZEJhY2tCdXR0b25Qcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHJlc291cmNlSWQsIHNob3dJbkRyYXdlciB9ID0gcHJvcHNcclxuICBjb25zdCBjc3NDbG9zZUljb24gPSBzaG93SW5EcmF3ZXIgPyAnQ2hldnJvblJpZ2h0JyA6ICdDaGV2cm9uTGVmdCdcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZWRMaW5rXHJcbiAgICAgIHNpemU9XCJpY29uXCJcclxuICAgICAgdG89e2gucmVzb3VyY2VVcmwoeyByZXNvdXJjZUlkLCBzZWFyY2g6IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggfSl9XHJcbiAgICAgIHJvdW5kZWRcclxuICAgICAgbXI9XCJsZ1wiXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgPlxyXG4gICAgICA8SWNvbiBpY29uPXtjc3NDbG9zZUljb259IC8+XHJcbiAgICA8L1N0eWxlZExpbms+XHJcbiAgKVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJveCwgQmFkZ2UsIEgzLCBIMiwgQnV0dG9uR3JvdXAsIGNzc0NsYXNzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5cclxuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJy4uL2JyZWFkY3J1bWJzJ1xyXG5pbXBvcnQgeyBBY3Rpb25IZWFkZXJQcm9wcyB9IGZyb20gJy4vYWN0aW9uLWhlYWRlci1wcm9wcydcclxuaW1wb3J0IHsgYWN0aW9uc1RvQnV0dG9uR3JvdXAgfSBmcm9tICcuL2FjdGlvbnMtdG8tYnV0dG9uLWdyb3VwJ1xyXG5pbXBvcnQgeyBTdHlsZWRCYWNrQnV0dG9uIH0gZnJvbSAnLi9zdHlsZWQtYmFjay1idXR0b24nXHJcblxyXG5pbXBvcnQgeyB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXIsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MnXHJcbmltcG9ydCB7IEFjdGlvbkpTT04sIGJ1aWxkQWN0aW9uQ2xpY2tIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9hY3Rpb24nXHJcblxyXG4vKipcclxuICogSGVhZGVyIG9mIGFuIGFjdGlvbi4gSXQgcmVuZGVycyBBY3Rpb24gbmFtZSB3aXRoIGJ1dHRvbnMgZm9yIGFsbCB0aGUgYWN0aW9ucy5cclxuICpcclxuICogIyMjIFVzYWdlXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBpbXBvcnQgeyBBY3Rpb25IZWFkZXIgfSBmcm9tICdhZG1pbi1icm8nXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAY29tcG9uZW50XHJcbiAqIEBzdWJjYXRlZ29yeSBBcHBsaWNhdGlvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEFjdGlvbkhlYWRlcjogUmVhY3QuRkM8QWN0aW9uSGVhZGVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgcmVzb3VyY2UsIHRvZ2dsZUZpbHRlciwgYWN0aW9uUGVyZm9ybWVkLCByZWNvcmQsIGFjdGlvbiwgdGFnLCBvbWl0QWN0aW9ucyxcclxuICB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgeyB0cmFuc2xhdGVCdXR0b24gfSA9IHVzZVRyYW5zbGF0aW9uKClcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXHJcbiAgY29uc3QgYWN0aW9uUmVzcG9uc2VIYW5kbGVyID0gdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyKGFjdGlvblBlcmZvcm1lZClcclxuXHJcbiAgaWYgKGFjdGlvbi5oaWRlQWN0aW9uSGVhZGVyKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzb3VyY2VJZCA9IHJlc291cmNlLmlkXHJcbiAgY29uc3QgcGFyYW1zID0geyByZXNvdXJjZUlkLCByZWNvcmRJZDogcmVjb3JkPy5pZCB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFjdGlvbkNsaWNrID0gKGV2ZW50LCBzb3VyY2VBY3Rpb246IEFjdGlvbkpTT04pOiB2b2lkID0+IChcclxuICAgIGJ1aWxkQWN0aW9uQ2xpY2tIYW5kbGVyKHtcclxuICAgICAgYWN0aW9uOiBzb3VyY2VBY3Rpb24sXHJcbiAgICAgIHBhcmFtcyxcclxuICAgICAgYWN0aW9uUmVzcG9uc2VIYW5kbGVyLFxyXG4gICAgICBwdXNoOiBoaXN0b3J5LnB1c2gsXHJcbiAgICB9KShldmVudClcclxuICApXHJcblxyXG4gIGNvbnN0IGFjdGlvbkJ1dHRvbnMgPSBhY3Rpb25zVG9CdXR0b25Hcm91cCh7XHJcbiAgICBhY3Rpb25zOiByZWNvcmRcclxuICAgICAgPyByZWNvcmQucmVjb3JkQWN0aW9ucy5maWx0ZXIocmEgPT4gIWFjdGlvbiB8fCBhY3Rpb24ubmFtZSAhPT0gcmEubmFtZSlcclxuICAgICAgLy8gb25seSBuZXcgYWN0aW9uIHNob3VsZCBiZSBzZWVuIGluIHJlZ3VsYXIgXCJCaWdcIiBhY3Rpb25zIHBsYWNlXHJcbiAgICAgIDogcmVzb3VyY2UucmVzb3VyY2VBY3Rpb25zLmZpbHRlcihyYSA9PiByYS5uYW1lID09PSAnbmV3JyAmJiAoIWFjdGlvbiB8fCBhY3Rpb24ubmFtZSAhPT0gcmEubmFtZSkpLFxyXG4gICAgcGFyYW1zLFxyXG4gICAgaGFuZGxlQ2xpY2s6IGhhbmRsZUFjdGlvbkNsaWNrLFxyXG4gIH0pXHJcblxyXG4gIGlmICh0b2dnbGVGaWx0ZXIpIHtcclxuICAgIGFjdGlvbkJ1dHRvbnMucHVzaCh7XHJcbiAgICAgIGxhYmVsOiB0cmFuc2xhdGVCdXR0b24oJ2ZpbHRlcicsIHJlc291cmNlLmlkKSxcclxuICAgICAgb25DbGljazogdG9nZ2xlRmlsdGVyLFxyXG4gICAgICBpY29uOiAnU2V0dGluZ3NBZGp1c3QnLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIC8vIGxpc3QgYW5kIG5ldyBhY3Rpb25zIGFyZSBzcGVjaWFsIGFuZCBhcmUgYXJlIGFsd2F5c1xyXG4gIGNvbnN0IGN1c3RvbVJlc291cmNlQnV0dG9ucyA9IGFjdGlvbnNUb0J1dHRvbkdyb3VwKHtcclxuICAgIGFjdGlvbnM6IHJlc291cmNlLnJlc291cmNlQWN0aW9ucy5maWx0ZXIocmEgPT4gIVsnbGlzdCcsICduZXcnXS5pbmNsdWRlcyhyYS5uYW1lKSksXHJcbiAgICBwYXJhbXM6IHsgcmVzb3VyY2VJZCB9LFxyXG4gICAgaGFuZGxlQ2xpY2s6IGhhbmRsZUFjdGlvbkNsaWNrLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IHRpdGxlID0gYWN0aW9uID8gYWN0aW9uLmxhYmVsIDogcmVzb3VyY2UubmFtZVxyXG4gIGNvbnN0IGlzTGlzdCA9IGFjdGlvbiAmJiBhY3Rpb24ubmFtZSA9PT0gJ2xpc3QnXHJcbiAgY29uc3QgbGlzdEFjdGlvbiA9IHJlc291cmNlLnJlc291cmNlQWN0aW9ucy5maW5kKHJhID0+IHJhLm5hbWUgPT09ICdsaXN0JylcclxuXHJcbiAgLy8gc3R5bGVkIHdoaWNoIGRpZmZlcnMgaWYgYWN0aW9uIGhlYWRlciBpcyBpbiB0aGUgZHJhd2VyIG9yIG5vdFxyXG4gIGNvbnN0IGNzc0lzUm9vdEZsZXggPSAhYWN0aW9uLnNob3dJbkRyYXdlclxyXG4gIGNvbnN0IGNzc0hlYWRlck1UID0gYWN0aW9uLnNob3dJbkRyYXdlciA/ICcnIDogJ2xnJ1xyXG4gIGNvbnN0IGNzc0FjdGlvbnNNQiA9IGFjdGlvbi5zaG93SW5EcmF3ZXIgPyAneGwnIDogJ2RlZmF1bHQnXHJcbiAgY29uc3QgQ3NzSENvbXBvbmVudCA9IGFjdGlvbi5zaG93SW5EcmF3ZXIgPyBIMyA6IEgyXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGNsYXNzTmFtZT17Y3NzQ2xhc3MoJ0FjdGlvbkhlYWRlcicpfT5cclxuICAgICAge2FjdGlvbi5zaG93SW5EcmF3ZXIgPyAnJyA6IChcclxuICAgICAgICA8Qm94IGZsZXggZmxleERpcmVjdGlvbj1cInJvd1wiIHB4PXtbJ2RlZmF1bHQnLCAwXX0+XHJcbiAgICAgICAgICA8QnJlYWRjcnVtYnMgcmVzb3VyY2U9e3Jlc291cmNlfSBhY3Rpb25OYW1lPXthY3Rpb24ubmFtZX0gcmVjb3JkPXtyZWNvcmR9IC8+XHJcbiAgICAgICAgICA8Qm94IGZsZXhTaHJpbms9ezB9PlxyXG4gICAgICAgICAgICA8QnV0dG9uR3JvdXAgc2l6ZT1cInNtXCIgcm91bmRlZCBidXR0b25zPXtjdXN0b21SZXNvdXJjZUJ1dHRvbnN9IC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKX1cclxuICAgICAgPEJveCBkaXNwbGF5PXtbJ2Jsb2NrJywgY3NzSXNSb290RmxleCA/ICdmbGV4JyA6ICdibG9jayddfT5cclxuICAgICAgICA8Qm94IG10PXtjc3NIZWFkZXJNVH0gZmxleEdyb3c9ezF9IHB4PXtbJ2RlZmF1bHQnLCAwXX0+XHJcbiAgICAgICAgICA8Q3NzSENvbXBvbmVudCBtYj1cImxnXCI+XHJcbiAgICAgICAgICAgIHshaXNMaXN0ICYmIGxpc3RBY3Rpb24gPyAoXHJcbiAgICAgICAgICAgICAgPFN0eWxlZEJhY2tCdXR0b24gcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gc2hvd0luRHJhd2VyPXthY3Rpb24uc2hvd0luRHJhd2VyfSAvPlxyXG4gICAgICAgICAgICApIDogJyd9XHJcbiAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAge3RhZyA/ICg8QmFkZ2UgdmFyaWFudD1cInByaW1hcnlcIiBtbD1cImRlZmF1bHRcIj57dGFnfTwvQmFkZ2U+KSA6ICcnfVxyXG4gICAgICAgICAgPC9Dc3NIQ29tcG9uZW50PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIHtvbWl0QWN0aW9ucyA/ICcnIDogKFxyXG4gICAgICAgICAgPEJveCBtdD1cInhsXCIgbWI9e2Nzc0FjdGlvbnNNQn0gZmxleFNocmluaz17MH0+XHJcbiAgICAgICAgICAgIDxCdXR0b25Hcm91cCBidXR0b25zPXthY3Rpb25CdXR0b25zfSAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkhlYWRlclxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCAqIGFzIERlc2lnblN5c3RlbSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcbmltcG9ydCB7IEFjdGlvblByb3BzIH0gZnJvbSAnLi4vYWN0aW9uLnByb3BzJ1xyXG5pbXBvcnQgUHJvcGVydHlUeXBlIGZyb20gJy4uLy4uL3Byb3BlcnR5LXR5cGUnXHJcbmltcG9ydCB7IFByb3BlcnR5UGxhY2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3Byb3BlcnR5LWpzb24vcHJvcGVydHktanNvbi5pbnRlcmZhY2UnXHJcbmltcG9ydCB7IFBhcnNlZExheW91dEVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9iYWNrZW5kL3V0aWxzL2xheW91dC1lbGVtZW50LXBhcnNlcidcclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi8uLi9wcm9wZXJ0eS10eXBlL2Jhc2UtcHJvcGVydHktcHJvcHMnXHJcblxyXG50eXBlIFByb3BzID0gQWN0aW9uUHJvcHMgJiB7XHJcbiAgbGF5b3V0RWxlbWVudDogUGFyc2VkTGF5b3V0RWxlbWVudDtcclxuICB3aGVyZTogUHJvcGVydHlQbGFjZTtcclxuICBvbkNoYW5nZT86IEJhc2VQcm9wZXJ0eVByb3BzWydvbkNoYW5nZSddO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGF5b3V0RWxlbWVudFJlbmRlcmVyOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGxheW91dEVsZW1lbnQsIHJlc291cmNlLCB3aGVyZSwgcmVjb3JkLCBvbkNoYW5nZSB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgcHJvcHM6IGxheW91dFByb3BzLFxyXG4gICAgcHJvcGVydGllczogcHJvcGVydHlOYW1lcyxcclxuICAgIGxheW91dEVsZW1lbnRzOiBpbm5lckxheW91dEVsZW1lbnRzLFxyXG4gICAgY29tcG9uZW50LFxyXG4gIH0gPSBsYXlvdXRFbGVtZW50XHJcblxyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIC4uLm90aGVyIH0gPSBsYXlvdXRQcm9wc1xyXG5cclxuICBjb25zdCBwcm9wZXJ0aWVzID0gcHJvcGVydHlOYW1lcy5tYXAobmFtZSA9PiByZXNvdXJjZS5wcm9wZXJ0aWVzW25hbWVdKVxyXG5cclxuICBjb25zdCBDb21wb25lbnQgPSBEZXNpZ25TeXN0ZW1bY29tcG9uZW50XVxyXG4gIGlmICghQ29tcG9uZW50KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RGVzaWduU3lzdGVtLk1lc3NhZ2VCb3hcclxuICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgIG1lc3NhZ2U9XCJKYXZhc2NyaXB0IEVycm9yXCJcclxuICAgICAgICB2YXJpYW50PVwiZGFuZ2VyXCJcclxuICAgICAgICBweT1cInhsXCJcclxuICAgICAgPlxyXG4gICAgICAgIFRoZXJlIGlzIG5vIGNvbXBvbmVudCBieSB0aGUgbmFtZSBvZlxyXG4gICAgICAgIDxEZXNpZ25TeXN0ZW0uQmFkZ2Ugc2l6ZT1cInNtXCIgdmFyaWFudD1cImRhbmdlclwiIG14PVwiZGVmYXVsdFwiPntjb21wb25lbnR9PC9EZXNpZ25TeXN0ZW0uQmFkZ2U+XHJcbiAgICAgICAgaW4gQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtLiBDaGFuZ2VcclxuICAgICAgICA8RGVzaWduU3lzdGVtLkJhZGdlIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJkYW5nZXJcIiBteD1cImRlZmF1bHRcIj57YEAke2NvbXBvbmVudH1gfTwvRGVzaWduU3lzdGVtLkJhZGdlPlxyXG4gICAgICAgIHRvIGF2YWlsYWJsZSBjb21wb25lbnQgbGlrZSBASGVhZGVyXHJcbiAgICAgIDwvRGVzaWduU3lzdGVtLk1lc3NhZ2VCb3g+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbXBvbmVudCB7Li4ub3RoZXIgYXMgYW55fT5cclxuICAgICAge3Byb3BlcnRpZXMubWFwKHByb3BlcnR5ID0+IChcclxuICAgICAgICA8RGVzaWduU3lzdGVtLkJveCBmbGV4R3Jvdz17MX0ga2V5PXtwcm9wZXJ0eS5wcm9wZXJ0eVBhdGh9PlxyXG4gICAgICAgICAgPFByb3BlcnR5VHlwZVxyXG4gICAgICAgICAgICBrZXk9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cclxuICAgICAgICAgICAgd2hlcmU9e3doZXJlfVxyXG4gICAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XHJcbiAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cclxuICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9EZXNpZ25TeXN0ZW0uQm94PlxyXG4gICAgICApKX1cclxuICAgICAge2lubmVyTGF5b3V0RWxlbWVudHMubWFwKChpbm5lckxheW91dEVsZW1lbnQsIGkpID0+IChcclxuICAgICAgICA8TGF5b3V0RWxlbWVudFJlbmRlcmVyXHJcbiAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XHJcbiAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICBsYXlvdXRFbGVtZW50PXtpbm5lckxheW91dEVsZW1lbnR9XHJcbiAgICAgICAgLz5cclxuICAgICAgKSl9XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ29tcG9uZW50PlxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dEVsZW1lbnRSZW5kZXJlclxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5pbXBvcnQgeyBEcmF3ZXJDb250ZW50LCBCb3gsIERyYXdlckZvb3RlciwgQnV0dG9uLCBJY29uIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5cclxuaW1wb3J0IFByb3BlcnR5VHlwZSBmcm9tICcuLi9wcm9wZXJ0eS10eXBlJ1xyXG5cclxuaW1wb3J0IHsgQWN0aW9uUHJvcHMgfSBmcm9tICcuL2FjdGlvbi5wcm9wcydcclxuaW1wb3J0IEFjdGlvbkhlYWRlciBmcm9tICcuLi9hcHAvYWN0aW9uLWhlYWRlci9hY3Rpb24taGVhZGVyJ1xyXG5pbXBvcnQgeyBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHVzZVJlY29yZCBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVjb3JkL3VzZS1yZWNvcmQnXHJcbmltcG9ydCB7IGFwcGVuZEZvcmNlUmVmcmVzaCB9IGZyb20gJy4vdXRpbHMvYXBwZW5kLWZvcmNlLXJlZnJlc2gnXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlLXRyYW5zbGF0aW9uJ1xyXG5pbXBvcnQgTGF5b3V0RWxlbWVudFJlbmRlcmVyIGZyb20gJy4vdXRpbHMvbGF5b3V0LWVsZW1lbnQtcmVuZGVyZXInXHJcblxyXG5jb25zdCBOZXc6IEZDPEFjdGlvblByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcmVjb3JkOiBpbml0aWFsUmVjb3JkLCByZXNvdXJjZSwgYWN0aW9uIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHtcclxuICAgIHJlY29yZCxcclxuICAgIGhhbmRsZUNoYW5nZSxcclxuICAgIHN1Ym1pdDogaGFuZGxlU3VibWl0LFxyXG4gICAgbG9hZGluZyxcclxuICAgIHNldFJlY29yZCxcclxuICB9ID0gdXNlUmVjb3JkKGluaXRpYWxSZWNvcmQsIHJlc291cmNlLmlkKVxyXG4gIGNvbnN0IHsgdHJhbnNsYXRlQnV0dG9uIH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGluaXRpYWxSZWNvcmQpIHtcclxuICAgICAgc2V0UmVjb3JkKGluaXRpYWxSZWNvcmQpXHJcbiAgICB9XHJcbiAgfSwgW2luaXRpYWxSZWNvcmRdKVxyXG5cclxuICBjb25zdCBzdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KTogYm9vbGVhbiA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBoYW5kbGVTdWJtaXQoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZWRpcmVjdFVybCkge1xyXG4gICAgICAgIGhpc3RvcnkucHVzaChhcHBlbmRGb3JjZVJlZnJlc2gocmVzcG9uc2UuZGF0YS5yZWRpcmVjdFVybCkpXHJcbiAgICAgIH1cclxuICAgICAgLy8gaWYgcmVjb3JkIGhhcyBpZCA9PT0gaGFzIGJlZW4gY3JlYXRlZFxyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZWNvcmQuaWQpIHtcclxuICAgICAgICBoYW5kbGVDaGFuZ2UoeyBwYXJhbXM6IHt9LCBwb3B1bGF0ZWQ6IHt9LCBlcnJvcnM6IHt9IH0gYXMgUmVjb3JkSlNPTilcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgYXM9XCJmb3JtXCJcclxuICAgICAgb25TdWJtaXQ9e3N1Ym1pdH1cclxuICAgICAgZmxleFxyXG4gICAgICBmbGV4R3Jvdz17MX1cclxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXHJcbiAgICA+XHJcbiAgICAgIDxEcmF3ZXJDb250ZW50PlxyXG4gICAgICAgIHthY3Rpb24/LnNob3dJbkRyYXdlciA/IDxBY3Rpb25IZWFkZXIgey4uLnByb3BzfSAvPiA6IG51bGx9XHJcbiAgICAgICAge2FjdGlvbi5sYXlvdXQgPyBhY3Rpb24ubGF5b3V0Lm1hcCgobGF5b3V0RWxlbWVudCwgaSkgPT4gKFxyXG4gICAgICAgICAgPExheW91dEVsZW1lbnRSZW5kZXJlclxyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XHJcbiAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgbGF5b3V0RWxlbWVudD17bGF5b3V0RWxlbWVudH1cclxuICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICB3aGVyZT1cImVkaXRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICByZWNvcmQ9e3JlY29yZCBhcyBSZWNvcmRKU09OfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKSA6IHJlc291cmNlLmVkaXRQcm9wZXJ0aWVzLm1hcChwcm9wZXJ0eSA9PiAoXHJcbiAgICAgICAgICA8UHJvcGVydHlUeXBlXHJcbiAgICAgICAgICAgIGtleT17cHJvcGVydHkucHJvcGVydHlQYXRofVxyXG4gICAgICAgICAgICB3aGVyZT1cImVkaXRcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XHJcbiAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cclxuICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmQgYXMgUmVjb3JkSlNPTn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvRHJhd2VyQ29udGVudD5cclxuICAgICAgPERyYXdlckZvb3Rlcj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgdHlwZT1cInN1Ym1pdFwiIGRhdGEtdGVzdGlkPVwiYnV0dG9uLXNhdmVcIj5cclxuICAgICAgICAgIHtsb2FkaW5nID8gKDxJY29uIGljb249XCJGYWRlXCIgc3BpbiAvPikgOiBudWxsfVxyXG4gICAgICAgICAge3RyYW5zbGF0ZUJ1dHRvbignc2F2ZScsIHJlc291cmNlLmlkKX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9EcmF3ZXJGb290ZXI+XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgTmV3IGFzIGRlZmF1bHQsXHJcbiAgTmV3LFxyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCB7IERyYXdlckNvbnRlbnQsIEJveCwgRHJhd2VyRm9vdGVyLCBCdXR0b24sIEljb24gfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgUHJvcGVydHlUeXBlIGZyb20gJy4uL3Byb3BlcnR5LXR5cGUnXHJcbmltcG9ydCB7IEFjdGlvblByb3BzIH0gZnJvbSAnLi9hY3Rpb24ucHJvcHMnXHJcbmltcG9ydCBBY3Rpb25IZWFkZXIgZnJvbSAnLi4vYXBwL2FjdGlvbi1oZWFkZXIvYWN0aW9uLWhlYWRlcidcclxuaW1wb3J0IHVzZVJlY29yZCBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVjb3JkL3VzZS1yZWNvcmQnXHJcbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBhcHBlbmRGb3JjZVJlZnJlc2ggfSBmcm9tICcuL3V0aWxzL2FwcGVuZC1mb3JjZS1yZWZyZXNoJ1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZS10cmFuc2xhdGlvbidcclxuaW1wb3J0IExheW91dEVsZW1lbnRSZW5kZXJlciBmcm9tICcuL3V0aWxzL2xheW91dC1lbGVtZW50LXJlbmRlcmVyJ1xyXG5cclxuY29uc3QgRWRpdDogRkM8QWN0aW9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyByZWNvcmQ6IGluaXRpYWxSZWNvcmQsIHJlc291cmNlLCBhY3Rpb24gfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IHtcclxuICAgIHJlY29yZCxcclxuICAgIGhhbmRsZUNoYW5nZSxcclxuICAgIHN1Ym1pdDogaGFuZGxlU3VibWl0LFxyXG4gICAgbG9hZGluZyxcclxuICAgIHNldFJlY29yZCxcclxuICB9ID0gdXNlUmVjb3JkKGluaXRpYWxSZWNvcmQsIHJlc291cmNlLmlkKVxyXG4gIGNvbnN0IHsgdHJhbnNsYXRlQnV0dG9uIH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGluaXRpYWxSZWNvcmQpIHtcclxuICAgICAgc2V0UmVjb3JkKGluaXRpYWxSZWNvcmQpXHJcbiAgICB9XHJcbiAgfSwgW2luaXRpYWxSZWNvcmRdKVxyXG5cclxuICBjb25zdCBzdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KTogYm9vbGVhbiA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBoYW5kbGVTdWJtaXQoKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZWRpcmVjdFVybCkge1xyXG4gICAgICAgIGhpc3RvcnkucHVzaChhcHBlbmRGb3JjZVJlZnJlc2gocmVzcG9uc2UuZGF0YS5yZWRpcmVjdFVybCkpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgIG9uU3VibWl0PXtzdWJtaXR9XHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleEdyb3c9ezF9XHJcbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxyXG4gICAgPlxyXG4gICAgICA8RHJhd2VyQ29udGVudD5cclxuICAgICAgICB7YWN0aW9uPy5zaG93SW5EcmF3ZXIgPyA8QWN0aW9uSGVhZGVyIHsuLi5wcm9wc30gLz4gOiBudWxsfVxyXG4gICAgICAgIHthY3Rpb24ubGF5b3V0ID8gYWN0aW9uLmxheW91dC5tYXAoKGxheW91dEVsZW1lbnQsIGkpID0+IChcclxuICAgICAgICAgIDxMYXlvdXRFbGVtZW50UmVuZGVyZXJcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxyXG4gICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgIGxheW91dEVsZW1lbnQ9e2xheW91dEVsZW1lbnR9XHJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgd2hlcmU9XCJlZGl0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmQgYXMgUmVjb3JkSlNPTn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSkgOiByZXNvdXJjZS5lZGl0UHJvcGVydGllcy5tYXAocHJvcGVydHkgPT4gKFxyXG4gICAgICAgICAgPFByb3BlcnR5VHlwZVxyXG4gICAgICAgICAgICBrZXk9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cclxuICAgICAgICAgICAgd2hlcmU9XCJlZGl0XCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxyXG4gICAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XHJcbiAgICAgICAgICAgIHJlY29yZD17cmVjb3JkIGFzIFJlY29yZEpTT059XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L0RyYXdlckNvbnRlbnQ+XHJcbiAgICAgIDxEcmF3ZXJGb290ZXI+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiIHR5cGU9XCJzdWJtaXRcIiBkYXRhLXRlc3RpZD1cImJ1dHRvbi1zYXZlXCI+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8SWNvbiBpY29uPVwiRmFkZVwiIHNwaW4gLz4pIDogbnVsbH1cclxuICAgICAgICAgIHt0cmFuc2xhdGVCdXR0b24oJ3NhdmUnLCByZXNvdXJjZS5pZCl9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRHJhd2VyRm9vdGVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIEVkaXQgYXMgZGVmYXVsdCxcclxuICBFZGl0LFxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRHJhd2VyQ29udGVudCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuXHJcbmltcG9ydCBQcm9wZXJ0eVR5cGUgZnJvbSAnLi4vcHJvcGVydHktdHlwZSdcclxuaW1wb3J0IHsgQWN0aW9uUHJvcHMgfSBmcm9tICcuL2FjdGlvbi5wcm9wcydcclxuaW1wb3J0IEFjdGlvbkhlYWRlciBmcm9tICcuLi9hcHAvYWN0aW9uLWhlYWRlci9hY3Rpb24taGVhZGVyJ1xyXG5pbXBvcnQgTGF5b3V0RWxlbWVudFJlbmRlcmVyIGZyb20gJy4vdXRpbHMvbGF5b3V0LWVsZW1lbnQtcmVuZGVyZXInXHJcblxyXG4vKipcclxuICogQG5hbWUgU2hvd0FjdGlvblxyXG4gKiBAY2F0ZWdvcnkgQWN0aW9uc1xyXG4gKiBAZGVzY3JpcHRpb24gU2hvd3MgYSBnaXZlbiByZWNvcmQuXHJcbiAqIEBjb21wb25lbnRcclxuICogQHByaXZhdGVcclxuICovXHJcbmNvbnN0IFNob3c6IFJlYWN0LkZDPEFjdGlvblByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcmVzb3VyY2UsIHJlY29yZCwgYWN0aW9uIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHByb3BlcnRpZXMgPSByZXNvdXJjZS5zaG93UHJvcGVydGllc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERyYXdlckNvbnRlbnQ+XHJcbiAgICAgIHthY3Rpb24/LnNob3dJbkRyYXdlciA/IDxBY3Rpb25IZWFkZXIgey4uLnByb3BzfSAvPiA6IG51bGx9XHJcbiAgICAgIHthY3Rpb24ubGF5b3V0ID8gYWN0aW9uLmxheW91dC5tYXAoKGxheW91dEVsZW1lbnQsIGkpID0+IChcclxuICAgICAgICA8TGF5b3V0RWxlbWVudFJlbmRlcmVyXHJcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XHJcbiAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICBsYXlvdXRFbGVtZW50PXtsYXlvdXRFbGVtZW50fVxyXG4gICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgd2hlcmU9XCJzaG93XCJcclxuICAgICAgICAvPlxyXG4gICAgICApKSA6IHByb3BlcnRpZXMubWFwKHByb3BlcnR5ID0+IChcclxuICAgICAgICA8UHJvcGVydHlUeXBlXHJcbiAgICAgICAgICBrZXk9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cclxuICAgICAgICAgIHdoZXJlPVwic2hvd1wiXHJcbiAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XHJcbiAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XHJcbiAgICAgICAgICByZWNvcmQ9e3JlY29yZH1cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuXHJcbiAgICA8L0RyYXdlckNvbnRlbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIFNob3cgYXMgZGVmYXVsdCxcclxuICBTaG93LFxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBkaXNwbGF5ID0gKGlzVGl0bGU6IGJvb2xlYW4pOiBBcnJheTxzdHJpbmc+ID0+IFtcclxuICBpc1RpdGxlID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLFxyXG4gIGlzVGl0bGUgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsXHJcbiAgJ3RhYmxlLWNlbGwnLFxyXG4gICd0YWJsZS1jZWxsJyxcclxuXVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7XHJcbiAgUGxhY2Vob2xkZXIsIFRhYmxlUm93LCBUYWJsZUNlbGwsIENoZWNrQm94LCBCdXR0b25Hcm91cCxcclxufSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgUHJvcGVydHlUeXBlIGZyb20gJy4uLy4uL3Byb3BlcnR5LXR5cGUnXHJcbmltcG9ydCB7IEFjdGlvbkpTT04sIGJ1aWxkQWN0aW9uQ2xpY2tIYW5kbGVyLCBSZWNvcmRKU09OLCBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSAnLi91dGlscy9kaXNwbGF5J1xyXG5pbXBvcnQgeyBBY3Rpb25SZXNwb25zZSwgUmVjb3JkQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi8uLi9iYWNrZW5kL2FjdGlvbnMvYWN0aW9uLmludGVyZmFjZSdcclxuaW1wb3J0IG1lcmdlUmVjb3JkUmVzcG9uc2UgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlLXJlY29yZC9tZXJnZS1yZWNvcmQtcmVzcG9uc2UnXHJcbmltcG9ydCB7IHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xyXG5pbXBvcnQgeyBhY3Rpb25zVG9CdXR0b25Hcm91cCB9IGZyb20gJy4uL2FjdGlvbi1oZWFkZXIvYWN0aW9ucy10by1idXR0b24tZ3JvdXAnXHJcblxyXG5leHBvcnQgdHlwZSBSZWNvcmRJbkxpc3RQcm9wcyA9IHtcclxuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xyXG4gIHJlY29yZDogUmVjb3JkSlNPTjtcclxuICBhY3Rpb25QZXJmb3JtZWQ/OiAoYWN0aW9uOiBBY3Rpb25SZXNwb25zZSkgPT4gYW55O1xyXG4gIGlzTG9hZGluZz86IGJvb2xlYW47XHJcbiAgb25TZWxlY3Q/OiAocmVjb3JkOiBSZWNvcmRKU09OKSA9PiB2b2lkO1xyXG4gIGlzU2VsZWN0ZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUmVjb3JkSW5MaXN0OiBSZWFjdC5GQzxSZWNvcmRJbkxpc3RQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICByZXNvdXJjZSwgcmVjb3JkOiByZWNvcmRGcm9tUHJvcHMsIGFjdGlvblBlcmZvcm1lZCxcclxuICAgIGlzTG9hZGluZywgb25TZWxlY3QsIGlzU2VsZWN0ZWQsXHJcbiAgfSA9IHByb3BzXHJcbiAgY29uc3QgW3JlY29yZCwgc2V0UmVjb3JkXSA9IHVzZVN0YXRlPFJlY29yZEpTT04+KHJlY29yZEZyb21Qcm9wcylcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXHJcblxyXG4gIGNvbnN0IGhhbmRsZUFjdGlvbkNhbGxiYWNrID0gdXNlQ2FsbGJhY2soKGFjdGlvblJlc3BvbnNlOiBBY3Rpb25SZXNwb25zZSkgPT4ge1xyXG4gICAgaWYgKGFjdGlvblJlc3BvbnNlLnJlY29yZCAmJiAhYWN0aW9uUmVzcG9uc2UucmVkaXJlY3RVcmwpIHtcclxuICAgICAgc2V0UmVjb3JkKG1lcmdlUmVjb3JkUmVzcG9uc2UocmVjb3JkLCBhY3Rpb25SZXNwb25zZSBhcyBSZWNvcmRBY3Rpb25SZXNwb25zZSkpXHJcbiAgICB9IGVsc2UgaWYgKGFjdGlvblBlcmZvcm1lZCkge1xyXG4gICAgICBhY3Rpb25QZXJmb3JtZWQoYWN0aW9uUmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgfSwgW2FjdGlvblBlcmZvcm1lZCwgcmVjb3JkXSlcclxuXHJcbiAgY29uc3QgYWN0aW9uUmVzcG9uc2VIYW5kbGVyID0gdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyKGhhbmRsZUFjdGlvbkNhbGxiYWNrKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0UmVjb3JkKHJlY29yZEZyb21Qcm9wcylcclxuICB9LCBbcmVjb3JkRnJvbVByb3BzXSlcclxuXHJcbiAgY29uc3QgeyByZWNvcmRBY3Rpb25zIH0gPSByZWNvcmRcclxuXHJcbiAgY29uc3Qgc2hvdyA9IHJlY29yZC5yZWNvcmRBY3Rpb25zLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSAnc2hvdycpXHJcbiAgY29uc3QgZWRpdCA9IHJlY29yZC5yZWNvcmRBY3Rpb25zLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSAnZWRpdCcpXHJcbiAgY29uc3QgYWN0aW9uID0gc2hvdyB8fCBlZGl0XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCB0YXJnZXRUYWdOYW1lID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgICBpZiAoYWN0aW9uXHJcbiAgICAgICYmIHRhcmdldFRhZ05hbWUgIT09ICdhJ1xyXG4gICAgICAmJiB0YXJnZXRUYWdOYW1lICE9PSAnYnV0dG9uJ1xyXG4gICAgICAmJiB0YXJnZXRUYWdOYW1lICE9PSAnc3ZnJ1xyXG4gICAgKSB7XHJcbiAgICAgIGJ1aWxkQWN0aW9uQ2xpY2tIYW5kbGVyKHtcclxuICAgICAgICBhY3Rpb24sXHJcbiAgICAgICAgcGFyYW1zOiB7IHJlc291cmNlSWQ6IHJlc291cmNlLmlkLCByZWNvcmRJZDogcmVjb3JkLmlkIH0sXHJcbiAgICAgICAgYWN0aW9uUmVzcG9uc2VIYW5kbGVyLFxyXG4gICAgICAgIHB1c2g6IGhpc3RvcnkucHVzaCxcclxuICAgICAgfSkoZXZlbnQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBhY3Rpb25QYXJhbXMgPSB7IHJlc291cmNlSWQ6IHJlc291cmNlLmlkLCByZWNvcmRJZDogcmVjb3JkLmlkIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQWN0aW9uQ2xpY2sgPSAoZXZlbnQsIHNvdXJjZUFjdGlvbjogQWN0aW9uSlNPTik6IHZvaWQgPT4gKFxyXG4gICAgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIoe1xyXG4gICAgICBhY3Rpb246IHNvdXJjZUFjdGlvbixcclxuICAgICAgcGFyYW1zOiBhY3Rpb25QYXJhbXMsXHJcbiAgICAgIGFjdGlvblJlc3BvbnNlSGFuZGxlcixcclxuICAgICAgcHVzaDogaGlzdG9yeS5wdXNoLFxyXG4gICAgfSkoZXZlbnQpXHJcbiAgKVxyXG5cclxuICBjb25zdCBidXR0b25zID0gW3tcclxuICAgIGljb246ICdPdmVyZmxvd01lbnVIb3Jpem9udGFsJyxcclxuICAgIHZhcmlhbnQ6ICdsaWdodCcgYXMgY29uc3QsXHJcbiAgICBsYWJlbDogdW5kZWZpbmVkLFxyXG4gICAgJ2RhdGEtdGVzdGlkJzogJ2FjdGlvbnMtZHJvcGRvd24nLFxyXG4gICAgYnV0dG9uczogYWN0aW9uc1RvQnV0dG9uR3JvdXAoe1xyXG4gICAgICBhY3Rpb25zOiByZWNvcmRBY3Rpb25zLFxyXG4gICAgICBwYXJhbXM6IGFjdGlvblBhcmFtcyxcclxuICAgICAgaGFuZGxlQ2xpY2s6IGhhbmRsZUFjdGlvbkNsaWNrLFxyXG4gICAgfSksXHJcbiAgfV1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGVSb3cgb25DbGljaz17aGFuZGxlQ2xpY2t9IGRhdGEtaWQ9e3JlY29yZC5pZH0+XHJcbiAgICAgIDxUYWJsZUNlbGwgY2xhc3NOYW1lPXtpc1NlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICdub3Qtc2VsZWN0ZWQnfT5cclxuICAgICAgICB7b25TZWxlY3QgJiYgcmVjb3JkLmJ1bGtBY3Rpb25zLmxlbmd0aCA/IChcclxuICAgICAgICAgIDxDaGVja0JveFxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KCk6IHZvaWQgPT4gb25TZWxlY3QocmVjb3JkKX1cclxuICAgICAgICAgICAgY2hlY2tlZD17aXNTZWxlY3RlZH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICB7cmVzb3VyY2UubGlzdFByb3BlcnRpZXMubWFwKHByb3BlcnR5ID0+IChcclxuICAgICAgICA8VGFibGVDZWxsXHJcbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG4gICAgICAgICAga2V5PXtwcm9wZXJ0eS5wcm9wZXJ0eVBhdGh9XHJcbiAgICAgICAgICBkYXRhLXByb3BlcnR5LW5hbWU9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cclxuICAgICAgICAgIGRpc3BsYXk9e2Rpc3BsYXkocHJvcGVydHkuaXNUaXRsZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2lzTG9hZGluZyA/IChcclxuICAgICAgICAgICAgPFBsYWNlaG9sZGVyIHN0eWxlPXt7IGhlaWdodDogMTQgfX0gLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxQcm9wZXJ0eVR5cGVcclxuICAgICAgICAgICAgICBrZXk9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cclxuICAgICAgICAgICAgICB3aGVyZT1cImxpc3RcIlxyXG4gICAgICAgICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cclxuICAgICAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XHJcbiAgICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICApKX1cclxuICAgICAgPFRhYmxlQ2VsbCBrZXk9XCJvcHRpb25zXCI+XHJcbiAgICAgICAge3JlY29yZEFjdGlvbnMubGVuZ3RoID8gKFxyXG4gICAgICAgICAgPEJ1dHRvbkdyb3VwIGJ1dHRvbnM9e2J1dHRvbnN9IC8+XHJcbiAgICAgICAgKSA6ICcnfVxyXG4gICAgICA8L1RhYmxlQ2VsbD5cclxuICAgIDwvVGFibGVSb3c+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNvcmRJbkxpc3RcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBOYXZMaW5rLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuXHJcbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCB7IEljb24sIGNzc0NsYXNzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5cclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXHJcblxyXG5cclxuZXhwb3J0IHR5cGUgU29ydExpbmtQcm9wcyA9IHtcclxuICBwcm9wZXJ0eTogQmFzZVByb3BlcnR5SlNPTjtcclxuICBkaXJlY3Rpb24/OiAnYXNjJyB8ICdkZXNjJztcclxuICBzb3J0Qnk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNsYXNzIFNvcnRMaW5rIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxTb3J0TGlua1Byb3BzICYgUm91dGVDb21wb25lbnRQcm9wcz4ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuaXNBY3RpdmUgPSB0aGlzLmlzQWN0aXZlLmJpbmQodGhpcylcclxuICB9XHJcblxyXG4gIGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgeyBzb3J0QnksIHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXHJcbiAgICByZXR1cm4gc29ydEJ5ID09PSBwcm9wZXJ0eS5wcm9wZXJ0eVBhdGhcclxuICB9XHJcblxyXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xyXG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgbG9jYXRpb24sIGRpcmVjdGlvbiB9ID0gdGhpcy5wcm9wc1xyXG4gICAgY29uc3QgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaClcclxuICAgIGNvbnN0IG9wcG9zaXRlRGlyZWN0aW9uID0gKHRoaXMuaXNBY3RpdmUoKSAmJiBkaXJlY3Rpb24gPT09ICdhc2MnKSA/ICdkZXNjJyA6ICdhc2MnXHJcbiAgICBjb25zdCBzb3J0ZWRCeUljb24gPSBgQ2FyZXQke2RpcmVjdGlvbiA9PT0gJ2FzYycgPyAnVXAnIDogJ0Rvd24nfWBcclxuXHJcbiAgICBxdWVyeS5zZXQoJ2RpcmVjdGlvbicsIG9wcG9zaXRlRGlyZWN0aW9uKVxyXG4gICAgcXVlcnkuc2V0KCdzb3J0QnknLCBwcm9wZXJ0eS5wcm9wZXJ0eVBhdGgpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPE5hdkxpbmsgdG89e3sgc2VhcmNoOiBxdWVyeS50b1N0cmluZygpIH19IGNsYXNzTmFtZT17Y3NzQ2xhc3MoJ1NvcnRMaW5rJyl9PlxyXG4gICAgICAgIHtwcm9wZXJ0eS5sYWJlbH1cclxuICAgICAgICB7dGhpcy5pc0FjdGl2ZSgpID8gKDxJY29uIGljb249e3NvcnRlZEJ5SWNvbn0gY29sb3I9XCJwcmltYXJ5MTAwXCIgbWw9XCJkZWZhdWx0XCIgLz4pIDogJyd9XHJcbiAgICAgIDwvTmF2TGluaz5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU29ydExpbmspXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgVGFibGVDZWxsIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5cclxuaW1wb3J0IHsgQmFzZVByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCBTb3J0TGluayBmcm9tICcuLi9zb3J0LWxpbmsnXHJcblxyXG5leHBvcnQgdHlwZSBQcm9wZXJ0eUhlYWRlclByb3BzID0ge1xyXG4gIHByb3BlcnR5OiBCYXNlUHJvcGVydHlKU09OO1xyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHdoaWNoIHNob3VsZCBiZSB0cmVhdGVkIGFzIG1haW4gcHJvcGVydHkuXHJcbiAgICovXHJcbiAgdGl0bGVQcm9wZXJ0eTogQmFzZVByb3BlcnR5SlNPTjtcclxuICAvKipcclxuICAgKiBjdXJyZW50bHkgc2VsZWN0ZWQgZGlyZWN0aW9uLiBFaXRoZXIgJ2FzYycgb3IgJ2Rlc2MnLlxyXG4gICAqL1xyXG4gIGRpcmVjdGlvbj86ICdhc2MnIHwgJ2Rlc2MnO1xyXG4gIC8qKlxyXG4gICAqIGN1cnJlbnRseSBzZWxlY3RlZCBmaWVsZCBieSB3aGljaCBsaXN0IGlzIHNvcnRlZC5cclxuICAgKi9cclxuICBzb3J0Qnk/OiBzdHJpbmc7XHJcblxyXG4gIGRpc3BsYXk/OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvcGVydHlIZWFkZXI6IFJlYWN0LkZDPFByb3BlcnR5SGVhZGVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwcm9wZXJ0eSwgdGl0bGVQcm9wZXJ0eSwgZGlzcGxheSB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgaXNNYWluID0gcHJvcGVydHkucHJvcGVydHlQYXRoID09PSB0aXRsZVByb3BlcnR5LnByb3BlcnR5UGF0aFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlQ2VsbFxyXG4gICAgICBjbGFzc05hbWU9e2lzTWFpbiA/ICdtYWluJyA6IHVuZGVmaW5lZH1cclxuICAgICAgZGlzcGxheT17ZGlzcGxheX1cclxuICAgID5cclxuICAgICAge3Byb3BlcnR5LmlzU29ydGFibGUgPyA8U29ydExpbmsgey4uLnByb3BzfSAvPiA6IHByb3BlcnR5LmxhYmVsfVxyXG4gICAgPC9UYWJsZUNlbGw+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9wZXJ0eUhlYWRlclxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENoZWNrQm94LCBUYWJsZUhlYWQsIFRhYmxlUm93LCBUYWJsZUNlbGwgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgUHJvcGVydHlIZWFkZXIgZnJvbSAnLi9wcm9wZXJ0eS1oZWFkZXInXHJcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSAnLi91dGlscy9kaXNwbGF5J1xyXG5cclxuLyoqXHJcbiAqIEBtZW1iZXJvZiBSZWNvcmRzVGFibGVIZWFkZXJcclxuICogQGFsaWFzIFJlY29yZHNUYWJsZUhlYWRlclByb3BzXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBSZWNvcmRzVGFibGVIZWFkZXJQcm9wcyA9IHtcclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB3aGljaCBzaG91bGQgYmUgdHJlYXRlZCBhcyBhIFRpdGxlIFByb3BlcnR5XHJcbiAgICovXHJcbiAgdGl0bGVQcm9wZXJ0eTogQmFzZVByb3BlcnR5SlNPTjtcclxuICAvKipcclxuICAgKiBBbGwgcHJvcGVydGllcyB3aGljaCBzaG91bGQgYmUgcHJlc2VudGVkXHJcbiAgICovXHJcbiAgcHJvcGVydGllczogQXJyYXk8QmFzZVByb3BlcnR5SlNPTj47XHJcbiAgLyoqXHJcbiAgICogTmFtZSBvZiB0aGUgcHJvcGVydHkgd2hpY2ggc2hvdWxkIGJlIG1hcmtlZCBhcyBjdXJyZW50bHkgc29ydGVkIGJ5XHJcbiAgICovXHJcbiAgc29ydEJ5Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFNvcnQgZGlyZWN0aW9uXHJcbiAgICovXHJcbiAgZGlyZWN0aW9uPzogJ2FzYycgfCAnZGVzYyc7XHJcbiAgLyoqXHJcbiAgICogSGFuZGxlciBmdW5jdGlvbiBpbnZva2VkIHdoZW4gY2hlY2tib3ggaXMgY2xpY2tlZC4gSWYgZ2l2ZW4gZXh0cmEgY29sdW1uXHJcbiAgICogd2l0aCBjaGVja2JveCB3aWxsIGJlIHJlbmRlcmVkXHJcbiAgICovXHJcbiAgb25TZWxlY3RBbGw/OiAoKSA9PiBhbnk7XHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGlmIFwiYnVsa1wiIGNoZWNrYm94IHNob3VsZCBiZSBjaGVja2VkXHJcbiAgICovXHJcbiAgc2VsZWN0ZWRBbGw/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogUHJpbnRzIGB0aGVhZGAgc2VjdGlvbiBmb3IgdGFibGUgd2l0aCByZWNvcmRzLlxyXG4gKlxyXG4gKiBgYGBcclxuICogaW1wb3J0IHsgUmVjb3Jkc1RhYmxlSGVhZGVyIH0gZnJvbSAnYWRtaW4tYnJvJ1xyXG4gKiBgYGBcclxuICpcclxuICogQGNvbXBvbmVudFxyXG4gKiBAc3ViY2F0ZWdvcnkgQXBwbGljYXRpb25cclxuICogQGV4YW1wbGUgPGNhcHRpb24+TGlzdCB3aXRoIDIgcHJvcGVydGllczwvY2FwdGlvbj5cclxuICogY29uc3QgcHJvcGVydGllcyA9IFt7XHJcbiAqICAgbGFiZWw6ICdGaXJzdCBOYW1lJyxcclxuICogICBuYW1lOiAnZmlyc3ROYW1lJyxcclxuICogICBpc1NvcnRhYmxlOiB0cnVlLFxyXG4gKiB9LCB7XHJcbiAqICAgbGFiZWw6ICdMYXN0IE5hbWUnLFxyXG4gKiAgIG5hbWU6ICdsYXN0TmFtZScsXHJcbiAqIH1dXHJcbiAqIHJldHVybiAoXHJcbiAqIDxCb3ggcHk9XCJ4bFwiPlxyXG4gKiAgIDxUYWJsZT5cclxuICogICAgPFJlY29yZHNUYWJsZUhlYWRlclxyXG4gKiAgICAgIHByb3BlcnRpZXM9e3Byb3BlcnRpZXN9XHJcbiAqICAgICAgdGl0bGVQcm9wZXJ0eT17cHJvcGVydGllc1swXX1cclxuICogICAgICBzb3J0Qnk9eydmaXJzdE5hbWUnfVxyXG4gKiAgICAgIGRpcmVjdGlvbj17J2FzYyd9XHJcbiAqICAgIC8+XHJcbiAqICAgIDxUYWJsZUJvZHk+XHJcbiAqICAgICAgPFRhYmxlUm93PlxyXG4gKiAgICAgICAgPFRhYmxlQ2VsbD5Kb2huPC9UYWJsZUNlbGw+XHJcbiAqICAgICAgICA8VGFibGVDZWxsPkRvZTwvVGFibGVDZWxsPlxyXG4gKiAgICAgICAgPFRhYmxlQ2VsbD48L1RhYmxlQ2VsbD5cclxuICogICAgICA8L1RhYmxlUm93PlxyXG4gKiAgICAgIDxUYWJsZVJvdz5cclxuICogICAgICAgIDxUYWJsZUNlbGw+TWF4PC9UYWJsZUNlbGw+XHJcbiAqICAgICAgICA8VGFibGVDZWxsPktvZGFseTwvVGFibGVDZWxsPlxyXG4gKiAgICAgICAgPFRhYmxlQ2VsbD48L1RhYmxlQ2VsbD5cclxuICogICAgICA8L1RhYmxlUm93PlxyXG4gKiAgICA8L1RhYmxlQm9keT5cclxuICogICA8L1RhYmxlPlxyXG4gKiA8L0JveD5cclxuICogKVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFJlY29yZHNUYWJsZUhlYWRlcjogUmVhY3QuRkM8UmVjb3Jkc1RhYmxlSGVhZGVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdGl0bGVQcm9wZXJ0eSwgcHJvcGVydGllcyxcclxuICAgIHNvcnRCeSwgZGlyZWN0aW9uLFxyXG4gICAgb25TZWxlY3RBbGwsIHNlbGVjdGVkQWxsIH0gPSBwcm9wc1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGVIZWFkPlxyXG4gICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgIHtvblNlbGVjdEFsbCA/IChcclxuICAgICAgICAgICAgPENoZWNrQm94XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKTogdm9pZCA9PiBvblNlbGVjdEFsbCgpfVxyXG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQWxsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAge3Byb3BlcnRpZXMubWFwKHByb3BlcnR5ID0+IChcclxuICAgICAgICAgIDxQcm9wZXJ0eUhlYWRlclxyXG4gICAgICAgICAgICBkaXNwbGF5PXtkaXNwbGF5KHByb3BlcnR5LmlzVGl0bGUpfVxyXG4gICAgICAgICAgICBrZXk9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cclxuICAgICAgICAgICAgdGl0bGVQcm9wZXJ0eT17dGl0bGVQcm9wZXJ0eX1cclxuICAgICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxyXG4gICAgICAgICAgICBzb3J0Qnk9e3NvcnRCeX1cclxuICAgICAgICAgICAgZGlyZWN0aW9uPXtkaXJlY3Rpb259XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIDxUYWJsZUNlbGwga2V5PVwiYWN0aW9uc1wiIHN0eWxlPXt7IHdpZHRoOiA4MCB9fSAvPlxyXG4gICAgICA8L1RhYmxlUm93PlxyXG4gICAgPC9UYWJsZUhlYWQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWNvcmRzVGFibGVIZWFkZXJcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3RFbGVtZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2FjdGlvbi5pbnRlcmZhY2UnXHJcblxyXG5pbXBvcnQgeyBBY3Rpb25KU09OLCBidWlsZEFjdGlvblRlc3RJZCB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IHVzZUFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xyXG5cclxuXHJcbi8qKlxyXG4gKiBAYWxpYXMgQWN0aW9uQnV0dG9uUHJvcHNcclxuICogQG1lbWJlcm9mIEFjdGlvbkJ1dHRvblxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQWN0aW9uQnV0dG9uUHJvcHMgPSB7XHJcbiAgLyoqIEFjdGlvbiB0byB3aGljaCBidXR0b24gc2hvdWxkIHJlZGlyZWN0ICovXHJcbiAgYWN0aW9uOiBBY3Rpb25KU09OO1xyXG4gIC8qKiBJZCBvZiBhIHJlc291cmNlIG9mIGFuIGFjdGlvbiAqL1xyXG4gIHJlc291cmNlSWQ6IHN0cmluZztcclxuICAvKiogT3B0aW9uYWwgcmVjb3JkSWQgZm9yIF9yZWNvcmRfIGFjdGlvbiAqL1xyXG4gIHJlY29yZElkPzogc3RyaW5nO1xyXG4gIC8qKiBPcHRpb25hbCByZWNvcmRJZHMgZm9yIF9idWxrXyBhY3Rpb24gKi9cclxuICByZWNvcmRJZHM/OiBBcnJheTxzdHJpbmc+O1xyXG4gIC8qKiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIHRyaWdnZXJlZCB3aGVuIGFjdGlvbiBpcyBwZXJmb3JtZWQgKi9cclxuICBhY3Rpb25QZXJmb3JtZWQ/OiAoYWN0aW9uOiBBY3Rpb25SZXNwb25zZSkgPT4gYW55O1xyXG59XHJcblxyXG4vKipcclxuICogUmVuZGVycyBCdXR0b24gd2hpY2ggcmVkaXJlY3RzIHRvIGdpdmVuIGFjdGlvblxyXG4gKlxyXG4gKiAjIyMgVXNhZ2VcclxuICpcclxuICogYGBgXHJcbiAqIGltcG9ydCB7IEFjdGlvbkJ1dHRvbiB9IGZyb20gJ2FkbWluLWJybydcclxuICogYGBgXHJcbiAqXHJcbiAqIEBjb21wb25lbnRcclxuICogQHN1YmNhdGVnb3J5IEFwcGxpY2F0aW9uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQWN0aW9uQnV0dG9uOiBSZWFjdC5GQzxBY3Rpb25CdXR0b25Qcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCBhY3Rpb24sIGFjdGlvblBlcmZvcm1lZCwgcmVzb3VyY2VJZCwgcmVjb3JkSWQsIHJlY29yZElkcyB9ID0gcHJvcHNcclxuXHJcbiAgY29uc3QgeyBocmVmLCBoYW5kbGVDbGljayB9ID0gdXNlQWN0aW9uKGFjdGlvbiwge1xyXG4gICAgcmVzb3VyY2VJZCwgcmVjb3JkSWQsIHJlY29yZElkcyxcclxuICB9LCBhY3Rpb25QZXJmb3JtZWQpXHJcblxyXG4gIGlmICghYWN0aW9uKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZmlyc3RDaGlsZCA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pWzBdXHJcblxyXG4gIGlmICghZmlyc3RDaGlsZFxyXG4gICAgfHwgdHlwZW9mIGZpcnN0Q2hpbGQgPT09ICdzdHJpbmcnXHJcbiAgICB8fCB0eXBlb2YgZmlyc3RDaGlsZCA9PT0gJ251bWJlcidcclxuICAgIHx8IHR5cGVvZiBmaXJzdENoaWxkID09PSAnYm9vbGVhbicpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9uQnV0dG9uIGhhcyB0byBoYXZlIG9uZSBjaGlsZCcpXHJcbiAgfVxyXG5cclxuICBjb25zdCBXcmFwcGVkRWxlbWVudCA9IFJlYWN0LmNsb25lRWxlbWVudChmaXJzdENoaWxkIGFzIFJlYWN0RWxlbWVudDxhbnk+LCB7XHJcbiAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcclxuICAgICdkYXRhLXRlc3RpZCc6IGJ1aWxkQWN0aW9uVGVzdElkKGFjdGlvbiksXHJcbiAgICBocmVmLFxyXG4gIH0pXHJcblxyXG5cclxuICByZXR1cm4gV3JhcHBlZEVsZW1lbnRcclxufVxyXG5cclxuLy8gVE9ETyAtIHJlbW92ZSB0aGlzIGhhY2tcclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uQnV0dG9uXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRleHQsIEJ1dHRvbiwgSWNvbiwgSW5mb0JveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MnXG5pbXBvcnQgYWxsb3dPdmVycmlkZSBmcm9tICcuLi8uLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUnXG5pbXBvcnQgQWN0aW9uQnV0dG9uIGZyb20gJy4uL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbidcblxuZXhwb3J0IHR5cGUgTm9SZWNvcmRzUHJvcHMgPSB7XG4gIHJlc291cmNlOiBSZXNvdXJjZUpTT047XG59XG5cbmNvbnN0IE5vUmVjb3Jkc09yaWdpbmFsOiBSZWFjdC5GQzxOb1JlY29yZHNQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZSB9ID0gcHJvcHNcbiAgY29uc3QgeyB0cmFuc2xhdGVCdXR0b24sIHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICBjb25zdCBjYW5DcmVhdGUgPSByZXNvdXJjZS5yZXNvdXJjZUFjdGlvbnMuZmluZChhID0+IGEubmFtZSA9PT0gJ25ldycpXG5cbiAgcmV0dXJuIChcbiAgICA8SW5mb0JveCB0aXRsZT17dHJhbnNsYXRlTWVzc2FnZSgnbm9SZWNvcmRzJywgcmVzb3VyY2UuaWQpfT5cbiAgICAgIDxUZXh0IG1iPVwieHhsXCI+XG4gICAgICAgIHt0cmFuc2xhdGVNZXNzYWdlKCdub1JlY29yZHNJblJlc291cmNlJywgcmVzb3VyY2UuaWQpfVxuICAgICAgPC9UZXh0PlxuICAgICAge2NhbkNyZWF0ZSA/IChcbiAgICAgICAgPEFjdGlvbkJ1dHRvbiBhY3Rpb249e2NhbkNyZWF0ZX0gcmVzb3VyY2VJZD17cmVzb3VyY2UuaWR9PlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJBZGRcIiAvPlxuICAgICAgICAgICAge3RyYW5zbGF0ZUJ1dHRvbignY3JlYXRlRmlyc3RSZWNvcmQnLCByZXNvdXJjZS5pZCl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQWN0aW9uQnV0dG9uPlxuICAgICAgKSA6ICcnfVxuICAgIDwvSW5mb0JveD5cbiAgKVxufVxuXG4vLyBUaGlzIGhhY2sgcHJldmVudHMgcm9sbHVwIGZyb20gdGhyb3dpbmcgYW4gZXJyb3JcbmNvbnN0IE5vUmVjb3JkcyA9IGFsbG93T3ZlcnJpZGUoTm9SZWNvcmRzT3JpZ2luYWwsICdOb1JlY29yZHMnKVxuXG5leHBvcnQgeyBOb1JlY29yZHMgfVxuZXhwb3J0IGRlZmF1bHQgTm9SZWNvcmRzXG4iLCJpbXBvcnQgeyBBY3Rpb25KU09OLCBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW50ZXJmYWNlcydcclxuXHJcbmNvbnN0IGdldEJ1bGtBY3Rpb25zRnJvbVJlY29yZHMgPSAocmVjb3JkczogQXJyYXk8UmVjb3JkSlNPTj4pOiBBcnJheTxBY3Rpb25KU09OPiA9PiB7XHJcbiAgY29uc3QgYWN0aW9ucyA9IE9iamVjdC52YWx1ZXMocmVjb3Jkcy5yZWR1Y2UoKG1lbW8sIHJlY29yZCkgPT4gKHtcclxuICAgIC4uLm1lbW8sXHJcbiAgICAuLi5yZWNvcmQuYnVsa0FjdGlvbnMucmVkdWNlKChhY3Rpb25zTWVtbywgYWN0aW9uKSA9PiAoe1xyXG4gICAgICAuLi5hY3Rpb25zTWVtbyxcclxuICAgICAgW2FjdGlvbi5uYW1lXTogYWN0aW9uLFxyXG4gICAgfSksIHt9IGFzIFJlY29yZDxzdHJpbmcsIEFjdGlvbkpTT04+KSxcclxuICB9KSwge30gYXMgUmVjb3JkPHN0cmluZywgQWN0aW9uSlNPTj4pKVxyXG4gIHJldHVybiBhY3Rpb25zXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldEJ1bGtBY3Rpb25zRnJvbVJlY29yZHNcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUYWJsZUNhcHRpb24sIFRpdGxlLCBCdXR0b25Hcm91cCwgQm94IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5cclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IHsgQWN0aW9uSlNPTiwgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIsIFJlY29yZEpTT04sIFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCBnZXRCdWxrQWN0aW9uc0Zyb21SZWNvcmRzIGZyb20gJy4vdXRpbHMvZ2V0LWJ1bGstYWN0aW9ucy1mcm9tLXJlY29yZHMnXHJcbmltcG9ydCB7IHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9ob29rcydcclxuaW1wb3J0IHsgYWN0aW9uc1RvQnV0dG9uR3JvdXAgfSBmcm9tICcuLi9hY3Rpb24taGVhZGVyL2FjdGlvbnMtdG8tYnV0dG9uLWdyb3VwJ1xyXG5cclxudHlwZSBTZWxlY3RlZFJlY29yZHNQcm9wcyA9IHtcclxuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xyXG4gIHNlbGVjdGVkUmVjb3Jkcz86IEFycmF5PFJlY29yZEpTT04+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2VsZWN0ZWRSZWNvcmRzOiBSZWFjdC5GQzxTZWxlY3RlZFJlY29yZHNQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHJlc291cmNlLCBzZWxlY3RlZFJlY29yZHMgfSA9IHByb3BzXHJcbiAgY29uc3QgeyB0cmFuc2xhdGVMYWJlbCB9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcclxuICBjb25zdCBhY3Rpb25SZXNwb25zZUhhbmRsZXIgPSB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXIoKVxyXG5cclxuICBpZiAoIXNlbGVjdGVkUmVjb3JkcyB8fCAhc2VsZWN0ZWRSZWNvcmRzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0IHBhcmFtcyA9IHsgcmVzb3VyY2VJZDogcmVzb3VyY2UuaWQsIHJlY29yZElkczogc2VsZWN0ZWRSZWNvcmRzLm1hcChyZWNvcmRzID0+IHJlY29yZHMuaWQpIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQWN0aW9uQ2xpY2sgPSAoZXZlbnQsIHNvdXJjZUFjdGlvbjogQWN0aW9uSlNPTik6IHZvaWQgPT4gKFxyXG4gICAgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIoe1xyXG4gICAgICBhY3Rpb246IHNvdXJjZUFjdGlvbixcclxuICAgICAgcGFyYW1zLFxyXG4gICAgICBhY3Rpb25SZXNwb25zZUhhbmRsZXIsXHJcbiAgICAgIHB1c2g6IGhpc3RvcnkucHVzaCxcclxuICAgIH0pKGV2ZW50KVxyXG4gIClcclxuXHJcbiAgY29uc3QgYnVsa0J1dHRvbnMgPSBhY3Rpb25zVG9CdXR0b25Hcm91cCh7XHJcbiAgICBhY3Rpb25zOiBnZXRCdWxrQWN0aW9uc0Zyb21SZWNvcmRzKHNlbGVjdGVkUmVjb3JkcyksXHJcbiAgICBwYXJhbXMsXHJcbiAgICBoYW5kbGVDbGljazogaGFuZGxlQWN0aW9uQ2xpY2ssXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUYWJsZUNhcHRpb24+XHJcbiAgICAgIDxCb3ggZmxleCBweT1cInNtXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgIDxUaXRsZSBtcj1cImxnXCI+XHJcbiAgICAgICAgICB7dHJhbnNsYXRlTGFiZWwoJ3NlbGVjdGVkUmVjb3JkcycsIHJlc291cmNlLmlkLCB7IHNlbGVjdGVkOiBzZWxlY3RlZFJlY29yZHMubGVuZ3RoIH0pfVxyXG4gICAgICAgIDwvVGl0bGU+XHJcbiAgICAgICAgPEJ1dHRvbkdyb3VwIHNpemU9XCJzbVwiIHJvdW5kZWQgYnV0dG9ucz17YnVsa0J1dHRvbnN9IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9UYWJsZUNhcHRpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RlZFJlY29yZHNcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUYWJsZSwgVGFibGVCb2R5LCBMb2FkZXIgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgUmVjb3JkSW5MaXN0IGZyb20gJy4vcmVjb3JkLWluLWxpc3QnXHJcbmltcG9ydCBSZWNvcmRzVGFibGVIZWFkZXIgZnJvbSAnLi9yZWNvcmRzLXRhYmxlLWhlYWRlcidcclxuaW1wb3J0IE5vUmVjb3JkcyBmcm9tICcuL25vLXJlY29yZHMnXHJcblxyXG5cclxuaW1wb3J0IHsgUmVjb3JkSlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IFNlbGVjdGVkUmVjb3JkcyBmcm9tICcuL3NlbGVjdGVkLXJlY29yZHMnXHJcbmltcG9ydCB7IEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2FjdGlvbi5pbnRlcmZhY2UnXHJcblxyXG4vKipcclxuICogQGFsaWFzIFJlY29yZHNUYWJsZVByb3BzXHJcbiAqIEBtZW1iZXJvZiBSZWNvcmRzVGFibGVcclxuICovXHJcbmV4cG9ydCB0eXBlIFJlY29yZHNUYWJsZVByb3BzID0ge1xyXG4gIC8qKlxyXG4gICAqIFJlc291cmNlIHdoaWNoIHR5cGUgcmVjb3JkcyBhcmUgcmVuZGVyZWQuIEJhc2Ugb24gdGhhdCB3ZSBkZWZpbmUgd2hpY2ggY29sdW1ucyBzaG91bGQgYmUgc2Vlbi5cclxuICAgKi9cclxuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xyXG4gIC8qKlxyXG4gICAqIEFycmF5IG9mIHJlY29yZHMgc2VlbiBpbiB0aGUgdGFibGVcclxuICAgKi9cclxuICByZWNvcmRzOiBBcnJheTxSZWNvcmRKU09OPjtcclxuICAvKipcclxuICAgKiBIYW5kbGVyIGZ1bmN0aW9uIGludm9rZWQgd2hlbiBzb21lb25lIHBlcmZvcm1zIGFjdGlvbiB3aXRob3V0IGNvbXBvbmVudCBvbiBhIGdpdmVuIHJlY29yZC5cclxuICAgKiBBY3Rpb24gd2l0aG91dCBjb21wb25lbnQgaXMgYSBgZGVsZXRlYCBhY3Rpb24gLSB5b3UgbWlnaHQgd2FudCB0byByZWZyZXNoIHRoZSBsaXN0IGFmdGVyIHRoYXRcclxuICAgKi9cclxuICBhY3Rpb25QZXJmb3JtZWQ/OiAocmVzcG9uc2U6IEFjdGlvblJlc3BvbnNlKSA9PiBhbnk7XHJcbiAgLyoqIGRlZmF1bHQgc29ydCBieSBjb2x1bW4gKi9cclxuICBzb3J0Qnk/OiBzdHJpbmc7XHJcbiAgLyoqIHNvcnQgZGlyZWN0aW9uICovXHJcbiAgZGlyZWN0aW9uPzogJ2FzYycgfCAnZGVzYyc7XHJcbiAgLyoqIGluZGljYXRlcyBpZiB0aGUgdGFibGUgc2hvdWxkIGJlIGluIGxvYWRpbmcgc3RhdGUgKi9cclxuICBpc0xvYWRpbmc/OiBib29sZWFuO1xyXG4gIC8qKiBsaXN0IG9mIHNlbGVjdGVkIHJlY29yZHMgKi9cclxuICBzZWxlY3RlZFJlY29yZHM/OiBBcnJheTxSZWNvcmRKU09OPjtcclxuICAvKiogaGFuZGxlciBmdW5jdGlvbiB0cmlnZ2VyZWQgd2hlbiByZWNvcmQgaXMgc2VsZWN0ZWQgKi9cclxuICBvblNlbGVjdD86IChyZWNvcmQ6IFJlY29yZEpTT04pID0+IGFueTtcclxuICAvKiogaGFuZGxlciBmdW5jdGlvbiB0cmlnZ2VyZWQgd2hlbiBhbGwgaXRlbXMgYXJlIHNlbGVjdGVkICovXHJcbiAgb25TZWxlY3RBbGw/OiAoKSA9PiBhbnk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAY2xhc3NkZXNjXHJcbiAqIFJlbmRlcnMgYW4gZW50aXJlIHJlY29yZHMgdGFibGUuIFRvIGZpbGwgdGhlIGRhdGEgeW91IG1pZ2h0IG5lZWQ6XHJcbiAqXHJcbiAqIC0ge0BsaW5rIHVzZVJlY29yZHN9IGFuZFxyXG4gKiAtIHtAbGluayB1c2VTZWxlY3RlZFJlY29yZHN9IGhvb2tzXHJcbiAqXHJcbiAqIHNvIG1ha2Ugc3VyZSB0byBzZWUgYXQgdGhlIGRvY3VtZW50YXRpb24gcGFnZXMgZm9yIGJvdGggb2YgdGhlbVxyXG4gKlxyXG4gKiBAY29tcG9uZW50XHJcbiAqIEBjbGFzc1xyXG4gKiBAaGlkZWNvbnN0cnVjdG9yXHJcbiAqIEBzdWJjYXRlZ29yeSBBcHBsaWNhdGlvblxyXG4gKiBAbmV3IGluIHZlcnNpb24gMy4zXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgUmVjb3Jkc1RhYmxlOiBSZWFjdC5GQzxSZWNvcmRzVGFibGVQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICByZXNvdXJjZSwgcmVjb3JkcyxcclxuICAgIGFjdGlvblBlcmZvcm1lZCwgc29ydEJ5LFxyXG4gICAgZGlyZWN0aW9uLCBpc0xvYWRpbmcsXHJcbiAgICBvblNlbGVjdCwgc2VsZWN0ZWRSZWNvcmRzLFxyXG4gICAgb25TZWxlY3RBbGwsXHJcbiAgfSA9IHByb3BzXHJcbiAgaWYgKCFyZWNvcmRzLmxlbmd0aCkge1xyXG4gICAgaWYgKGlzTG9hZGluZykge1xyXG4gICAgICByZXR1cm4gKDxMb2FkZXIgLz4pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKDxOb1JlY29yZHMgcmVzb3VyY2U9e3Jlc291cmNlfSAvPilcclxuICB9XHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkQWxsID0gc2VsZWN0ZWRSZWNvcmRzICYmICEhcmVjb3Jkcy5maW5kKHJlY29yZCA9PiAoXHJcbiAgICBzZWxlY3RlZFJlY29yZHMuZmluZChzZWxlY3RlZCA9PiBzZWxlY3RlZC5pZCA9PT0gcmVjb3JkLmlkKVxyXG4gICkpXHJcblxyXG4gIGNvbnN0IHJlY29yZHNIYXZlQnVsa0FjdGlvbiA9ICEhcmVjb3Jkcy5maW5kKHJlY29yZCA9PiByZWNvcmQuYnVsa0FjdGlvbnMubGVuZ3RoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlPlxyXG4gICAgICA8U2VsZWN0ZWRSZWNvcmRzXHJcbiAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxyXG4gICAgICAgIHNlbGVjdGVkUmVjb3Jkcz17c2VsZWN0ZWRSZWNvcmRzfVxyXG4gICAgICAvPlxyXG4gICAgICA8UmVjb3Jkc1RhYmxlSGVhZGVyXHJcbiAgICAgICAgcHJvcGVydGllcz17cmVzb3VyY2UubGlzdFByb3BlcnRpZXN9XHJcbiAgICAgICAgdGl0bGVQcm9wZXJ0eT17cmVzb3VyY2UudGl0bGVQcm9wZXJ0eX1cclxuICAgICAgICBkaXJlY3Rpb249e2RpcmVjdGlvbn1cclxuICAgICAgICBzb3J0Qnk9e3NvcnRCeX1cclxuICAgICAgICBvblNlbGVjdEFsbD17cmVjb3Jkc0hhdmVCdWxrQWN0aW9uID8gb25TZWxlY3RBbGwgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgc2VsZWN0ZWRBbGw9e3NlbGVjdGVkQWxsfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgIHtyZWNvcmRzLm1hcChyZWNvcmQgPT4gKFxyXG4gICAgICAgICAgPFJlY29yZEluTGlzdFxyXG4gICAgICAgICAgICByZWNvcmQ9e3JlY29yZH1cclxuICAgICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxyXG4gICAgICAgICAgICBrZXk9e3JlY29yZC5pZH1cclxuICAgICAgICAgICAgYWN0aW9uUGVyZm9ybWVkPXthY3Rpb25QZXJmb3JtZWR9XHJcbiAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfVxyXG4gICAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XHJcbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkUmVjb3JkcyAmJiAhIXNlbGVjdGVkUmVjb3Jkcy5maW5kKHNlbGVjdGVkID0+IHNlbGVjdGVkLmlkID09PSByZWNvcmQuaWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgPC9UYWJsZT5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlY29yZHNUYWJsZVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEJveCwgUGFnaW5hdGlvbiwgVGV4dCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcblxyXG5pbXBvcnQgUmVjb3Jkc1RhYmxlIGZyb20gJy4uL2FwcC9yZWNvcmRzLXRhYmxlL3JlY29yZHMtdGFibGUnXHJcbmltcG9ydCB7IEFjdGlvblByb3BzIH0gZnJvbSAnLi9hY3Rpb24ucHJvcHMnXHJcbmltcG9ydCB1c2VSZWNvcmRzIGZyb20gJy4uLy4uL2hvb2tzL3VzZS1yZWNvcmRzL3VzZS1yZWNvcmRzJ1xyXG5pbXBvcnQgdXNlU2VsZWN0ZWRSZWNvcmRzIGZyb20gJy4uLy4uL2hvb2tzL3VzZS1zZWxlY3RlZC1yZWNvcmRzL3VzZS1zZWxlY3RlZC1yZWNvcmRzJ1xyXG5pbXBvcnQgeyBSRUZSRVNIX0tFWSB9IGZyb20gJy4vdXRpbHMvYXBwZW5kLWZvcmNlLXJlZnJlc2gnXHJcblxyXG5jb25zdCBMaXN0OiBSZWFjdC5GQzxBY3Rpb25Qcm9wcz4gPSAoeyByZXNvdXJjZSwgc2V0VGFnIH0pID0+IHtcclxuICBjb25zdCB7XHJcbiAgICByZWNvcmRzLFxyXG4gICAgbG9hZGluZyxcclxuICAgIGRpcmVjdGlvbixcclxuICAgIHNvcnRCeSxcclxuICAgIHBhZ2UsXHJcbiAgICB0b3RhbCxcclxuICAgIGZldGNoRGF0YSxcclxuICAgIHBlclBhZ2UsXHJcbiAgfSA9IHVzZVJlY29yZHMocmVzb3VyY2UuaWQpXHJcbiAgY29uc3Qge1xyXG4gICAgc2VsZWN0ZWRSZWNvcmRzLFxyXG4gICAgaGFuZGxlU2VsZWN0LFxyXG4gICAgaGFuZGxlU2VsZWN0QWxsLFxyXG4gICAgc2V0U2VsZWN0ZWRSZWNvcmRzLFxyXG4gIH0gPSB1c2VTZWxlY3RlZFJlY29yZHMocmVjb3JkcylcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoc2V0VGFnKSB7XHJcbiAgICAgIHNldFRhZyh0b3RhbC50b1N0cmluZygpKVxyXG4gICAgfVxyXG4gIH0sIFt0b3RhbF0pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZFJlY29yZHMoW10pXHJcbiAgfSwgW3Jlc291cmNlLmlkXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKVxyXG4gICAgaWYgKHNlYXJjaC5nZXQoUkVGUkVTSF9LRVkpKSB7XHJcbiAgICAgIHNldFNlbGVjdGVkUmVjb3JkcyhbXSlcclxuICAgIH1cclxuICB9LCBbbG9jYXRpb24uc2VhcmNoXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlQWN0aW9uUGVyZm9ybWVkID0gKCk6IGFueSA9PiBmZXRjaERhdGEoKVxyXG5cclxuICBjb25zdCBoYW5kbGVQYWdpbmF0aW9uQ2hhbmdlID0gKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgY29uc3Qgc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpXHJcbiAgICBzZWFyY2guc2V0KCdwYWdlJywgcGFnZU51bWJlci50b1N0cmluZygpKVxyXG4gICAgaGlzdG9yeS5wdXNoKHsgc2VhcmNoOiBzZWFyY2gudG9TdHJpbmcoKSB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggdmFyaWFudD1cIndoaXRlXCI+XHJcbiAgICAgIDxSZWNvcmRzVGFibGVcclxuICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XHJcbiAgICAgICAgcmVjb3Jkcz17cmVjb3Jkc31cclxuICAgICAgICBhY3Rpb25QZXJmb3JtZWQ9e2hhbmRsZUFjdGlvblBlcmZvcm1lZH1cclxuICAgICAgICBvblNlbGVjdD17aGFuZGxlU2VsZWN0fVxyXG4gICAgICAgIG9uU2VsZWN0QWxsPXtoYW5kbGVTZWxlY3RBbGx9XHJcbiAgICAgICAgc2VsZWN0ZWRSZWNvcmRzPXtzZWxlY3RlZFJlY29yZHN9XHJcbiAgICAgICAgZGlyZWN0aW9uPXtkaXJlY3Rpb259XHJcbiAgICAgICAgc29ydEJ5PXtzb3J0Qnl9XHJcbiAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGV4dCBtdD1cInhsXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICBwZXJQYWdlPXtwZXJQYWdlfVxyXG4gICAgICAgICAgdG90YWw9e3RvdGFsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBhZ2luYXRpb25DaGFuZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9UZXh0PlxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIExpc3QgYXMgZGVmYXVsdCxcclxuICBMaXN0LFxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7IGFkZE5vdGljZSB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvYWRkLW5vdGljZSdcclxuXHJcbi8qKlxyXG4gKiBOb3RpY2VNZXNzYWdlIHdoaWNoIGNhbiBiZSBwcmVzZW50ZWQgYXMgYSBcIlRvYXN0XCIgbWVzc2FnZS5cclxuICogQGFsaWFzIE5vdGljZU1lc3NhZ2VcclxuICogQG1lbWJlcm9mIHdpdGhOb3RpY2VcclxuICovXHJcbmV4cG9ydCB0eXBlIE5vdGljZU1lc3NhZ2UgPSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHR5cGU/OiAnc3VjY2VzcycgfCAnZXJyb3InO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEFkZGl0aW9uYWwgcHJvcHMgd2hpY2ggYXJlIHBhc3NlZCB0byB5b3VyIGNvbXBvbmVudFxyXG4gKiBAYWxpYXMgQWRkTm90aWNlUHJvcHNcclxuICogQG1lbWJlcm9mIHdpdGhOb3RpY2VcclxuICovXHJcbmV4cG9ydCB0eXBlIEFkZE5vdGljZVByb3BzID0ge1xyXG4gIC8vIEZ1bmN0aW9uIHRyaWdnZXJpbmcgbm90aWNlIG1lc3NhZ2VzXHJcbiAgYWRkTm90aWNlOiAobm90aWNlOiBOb3RpY2VNZXNzYWdlKSA9PiB2b2lkO1xyXG59XHJcblxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKTogQWRkTm90aWNlUHJvcHMgPT4gKHtcclxuICBhZGROb3RpY2U6IChub3RpY2U6IE5vdGljZU1lc3NhZ2UpOiB2b2lkID0+IGRpc3BhdGNoKGFkZE5vdGljZShub3RpY2UpKSxcclxufSlcclxuXHJcbi8qKlxyXG4gKiBIaWdoZXIgT3JkZXIgQ29tcG9uZW50IHdoaWNoIGFsbG93cyB5b3UgdG8gcG9zdCBub3RpY2UgbWVzc2FnZXMgZnJvbSB5b3VyIGNvbXBvbmVudHNcclxuICpcclxuICogSXQgZ2l2ZXMgeW91IHRoZSBhZGRpdGlvbmFsIHByb3A6IGBhZGROb3RpY2Uobm90aWNlTWVzc2FnZSlgIHRha2luZyB7QGxpbmsgTm90aWNlTWVzc2FnZX0uXHJcbiAqXHJcbiAqIGBgYGphdmFzY3JpcHRcclxuICogaW1wb3J0IHsgd2l0aE5vdGljZSB9IGZyb20gJ2FkbWluLWJyby9jb3JlJ1xyXG4gKlxyXG4gKiBjb25zdCBNWV9NRVNTQUdFID0ge1xyXG4gKiAgIG1lc3NhZ2U6ICdJIGFtIHRvYXN0IG1lc3NhZ2UnLFxyXG4gKiAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICogfVxyXG4gKiBjb25zdCBNeUN1c3RvbUNvbXBvbmVudCA9ICh7IGFkZE5vdGljZSB9KSA9PiB7XHJcbiAqICAgcmV0dXJuIChcclxuICogICAgIDxhIG9uQ2xpY2s9eygpID0+IGFkZE5vdGljZShNWV9NRVNTQUdFKX0+Q2xpY2sgTWU8L2E+XHJcbiAqICAgKVxyXG4gKiB9XHJcbiAqIGV4cG9ydCBkZWZhdWx0IHdpdGhOb3RpY2UoTXlDdXN0b21Db21wb25lbnQpXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAY29tcG9uZW50XHJcbiAqIEBzdWJjYXRlZ29yeSBIT0NcclxuICovXHJcbmNvbnN0IHdpdGhOb3RpY2UgPSBDb21wb25lbnQgPT4gY29ubmVjdChudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvbXBvbmVudClcclxuXHJcbmV4cG9ydCB7XHJcbiAgd2l0aE5vdGljZSBhcyBkZWZhdWx0LFxyXG4gIHdpdGhOb3RpY2UsXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgVGFibGUsIFRhYmxlQm9keSwgVGFibGVSb3csIFRhYmxlQ2VsbCwgVGV4dCxcclxuICBEcmF3ZXJDb250ZW50LCBEcmF3ZXJGb290ZXIsIEJ1dHRvbiwgTWVzc2FnZUJveCwgSWNvbixcclxufSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzLCB3aXRoUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5pbXBvcnQgUHJvcGVydHlUeXBlIGZyb20gJy4uL3Byb3BlcnR5LXR5cGUnXHJcbmltcG9ydCB7IEFjdGlvblByb3BzIH0gZnJvbSAnLi9hY3Rpb24ucHJvcHMnXHJcbmltcG9ydCBBcGlDbGllbnQgZnJvbSAnLi4vLi4vdXRpbHMvYXBpLWNsaWVudCdcclxuaW1wb3J0IHdpdGhOb3RpY2UsIHsgQWRkTm90aWNlUHJvcHMgfSBmcm9tICcuLi8uLi9ob2Mvd2l0aC1ub3RpY2UnXHJcbmltcG9ydCB7IGFwcGVuZEZvcmNlUmVmcmVzaCB9IGZyb20gJy4vdXRpbHMvYXBwZW5kLWZvcmNlLXJlZnJlc2gnXHJcblxyXG5pbXBvcnQgQWN0aW9uSGVhZGVyIGZyb20gJy4uL2FwcC9hY3Rpb24taGVhZGVyL2FjdGlvbi1oZWFkZXInXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXHJcblxyXG4vKipcclxuICogQG5hbWUgU2hvd0FjdGlvblxyXG4gKiBAY2F0ZWdvcnkgQWN0aW9uc1xyXG4gKiBAZGVzY3JpcHRpb24gU2hvd3MgYSBnaXZlbiByZWNvcmQuXHJcbiAqIEBjb21wb25lbnRcclxuICogQHByaXZhdGVcclxuICovXHJcbmNvbnN0IEJ1bGtEZWxldGU6IFJlYWN0LkZDPEFjdGlvblByb3BzICYgQWRkTm90aWNlUHJvcHMgJiBSb3V0ZUNvbXBvbmVudFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcmVzb3VyY2UsIHJlY29yZHMsIGFjdGlvbiwgYWRkTm90aWNlLCBoaXN0b3J5IH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UsIHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG5cclxuICBpZiAoIXJlY29yZHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUZXh0PlxyXG4gICAgICAgIHt0cmFuc2xhdGVNZXNzYWdlKCdwaWNrU29tZUZpcnN0VG9SZW1vdmUnLCByZXNvdXJjZS5pZCl9XHJcbiAgICAgIDwvVGV4dD5cclxuICAgIClcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBjb25zdCByZWNvcmRJZHMgPSByZWNvcmRzLm1hcChyID0+IHIuaWQpXHJcbiAgICBhcGkuYnVsa0FjdGlvbih7XHJcbiAgICAgIHJlc291cmNlSWQ6IHJlc291cmNlLmlkLFxyXG4gICAgICBhY3Rpb25OYW1lOiBhY3Rpb24ubmFtZSxcclxuICAgICAgcmVjb3JkSWRzLFxyXG4gICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgIH0pLnRoZW4oKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxyXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5ub3RpY2UpIHtcclxuICAgICAgICBhZGROb3RpY2UocmVzcG9uc2UuZGF0YS5ub3RpY2UpXHJcbiAgICAgIH1cclxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVkaXJlY3RVcmwpIHtcclxuICAgICAgICBjb25zdCBzZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXHJcbiAgICAgICAgLy8gYnVsayBmdW5jdGlvbiBoYXZlIHJlY29yZElkcyBpbiB0aGUgVVJMIHNvIGl0IGhhcyB0byBiZSBzdHJpcHBlZCBiZWZvcmUgcmVkaXJlY3RcclxuICAgICAgICBzZWFyY2guZGVsZXRlKCdyZWNvcmRJZHMnKVxyXG4gICAgICAgIGhpc3RvcnkucHVzaChhcHBlbmRGb3JjZVJlZnJlc2gocmVzcG9uc2UuZGF0YS5yZWRpcmVjdFVybCwgc2VhcmNoLnRvU3RyaW5nKCkpKVxyXG4gICAgICB9XHJcbiAgICB9KSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgIGFkZE5vdGljZSh7XHJcbiAgICAgICAgbWVzc2FnZTogdHJhbnNsYXRlTWVzc2FnZSgnYnVsa0RlbGV0ZUVycm9yJywgcmVzb3VyY2UuaWQpLFxyXG4gICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgIH0pXHJcbiAgICAgIHRocm93IGVycm9yXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPERyYXdlckNvbnRlbnQ+XHJcbiAgICAgICAge2FjdGlvbj8uc2hvd0luRHJhd2VyID8gPEFjdGlvbkhlYWRlciBvbWl0QWN0aW9ucyB7Li4ucHJvcHN9IC8+IDogbnVsbH1cclxuICAgICAgICA8TWVzc2FnZUJveFxyXG4gICAgICAgICAgbWI9XCJ4eGxcIlxyXG4gICAgICAgICAgdmFyaWFudD1cImRhbmdlclwiXHJcbiAgICAgICAgICBtZXNzYWdlPXt0cmFuc2xhdGVNZXNzYWdlKCd0aGVzZVJlY29yZHNXaWxsQmVSZW1vdmVkJywgcmVzb3VyY2UuaWQsIHsgY291bnQ6IHJlY29yZHMubGVuZ3RoIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAge3JlY29yZHMubWFwKHJlY29yZCA9PiAoXHJcbiAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cmVjb3JkLmlkfT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eVR5cGVcclxuICAgICAgICAgICAgICAgICAgICB3aGVyZT1cImxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5PXtyZXNvdXJjZS50aXRsZVByb3BlcnR5fVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cclxuICAgICAgICAgICAgICAgICAgICByZWNvcmQ9e3JlY29yZH1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgICAgPC9EcmF3ZXJDb250ZW50PlxyXG4gICAgICA8RHJhd2VyRm9vdGVyPlxyXG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICB7bG9hZGluZyA/ICg8SWNvbiBpY29uPVwiRmFkZVwiIHNwaW4gLz4pIDogbnVsbH1cclxuICAgICAgICAgIHt0cmFuc2xhdGVCdXR0b24oJ2NvbmZpcm1SZW1vdmFsTWFueScsIHJlc291cmNlLmlkLCB7IGNvdW50OiByZWNvcmRzLmxlbmd0aCB9KX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9EcmF3ZXJGb290ZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgRm9ybWF0dGVkQnVsa0RlbGV0ZSA9IHdpdGhOb3RpY2Uod2l0aFJvdXRlcihCdWxrRGVsZXRlKSlcclxuXHJcbmV4cG9ydCB7XHJcbiAgRm9ybWF0dGVkQnVsa0RlbGV0ZSBhcyBkZWZhdWx0LFxyXG4gIEZvcm1hdHRlZEJ1bGtEZWxldGUgYXMgQnVsa0RlbGV0ZSxcclxufVxyXG4iLCJpbXBvcnQgeyBOZXcgfSBmcm9tICcuL25ldydcclxuaW1wb3J0IHsgRWRpdCB9IGZyb20gJy4vZWRpdCdcclxuaW1wb3J0IHsgU2hvdyB9IGZyb20gJy4vc2hvdydcclxuaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vbGlzdCdcclxuaW1wb3J0IHsgQnVsa0RlbGV0ZSB9IGZyb20gJy4vYnVsay1kZWxldGUnXHJcblxyXG5leHBvcnQgKiBmcm9tICcuL25ldydcclxuZXhwb3J0ICogZnJvbSAnLi9hY3Rpb24ucHJvcHMnXHJcbmV4cG9ydCAqIGZyb20gJy4vZWRpdCdcclxuZXhwb3J0ICogZnJvbSAnLi9zaG93J1xyXG5leHBvcnQgKiBmcm9tICcuL2xpc3QnXHJcbmV4cG9ydCAqIGZyb20gJy4vYnVsay1kZWxldGUnXHJcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnXHJcblxyXG5leHBvcnQgY29uc3QgYWN0aW9ucyA9IHtcclxuICBuZXc6IE5ldyxcclxuICBlZGl0OiBFZGl0LFxyXG4gIHNob3c6IFNob3csXHJcbiAgbGlzdDogTGlzdCxcclxuICBidWxrRGVsZXRlOiBCdWxrRGVsZXRlLFxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBET0NTID0gJ2h0dHBzOi8vYWRtaW5icm8uY29tJ1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9QQVRIUyA9IHtcclxuICByb290UGF0aDogJy9hZG1pbicsXHJcbiAgbG9nb3V0UGF0aDogJy9hZG1pbi9sb2dvdXQnLFxyXG4gIGxvZ2luUGF0aDogJy9hZG1pbi9sb2dpbicsXHJcbn1cclxuXHJcbi8qIGNzcGVsbDogZGlzYWJsZS1uZXh0LWxpbmUgKi9cclxuZXhwb3J0IGNvbnN0IEFETUlOX0JST19UTVBfRElSID0gJy5hZG1pbmJybydcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXHJcbmltcG9ydCB7IE1lc3NhZ2VCb3gsIExpbmsgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuL2Vycm9yLWJvdW5kYXJ5J1xyXG5pbXBvcnQgeyBhY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucydcclxuaW1wb3J0IHsgRE9DUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cydcclxuaW1wb3J0IHsgQWN0aW9uUHJvcHMgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbi5wcm9wcydcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9ob29rcydcclxuXHJcbmRlY2xhcmUgY29uc3QgQWRtaW5Ccm86IHtcclxuICBVc2VyQ29tcG9uZW50czogQXJyYXk8c3RyaW5nPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbXBvbmVudCB3aGljaCByZW5kZXJzIGFsbCB0aGUgZGVmYXVsdCBhbmQgY3VzdG9tIGFjdGlvbnMgZm9yIGJvdGggdGhlIFJlc291cmNlIGFuZCB0aGUgUmVjb3JkLlxyXG4gKlxyXG4gKiBJdCBwYXNzZXMgYWxsIHByb3BzIGRvd24gdG8gdGhlIGFjdHVhbCBBY3Rpb24gY29tcG9uZW50LlxyXG4gKlxyXG4gKiBFeGFtcGxlIG9mIGNyZWF0aW5nIHlvdXIgb3duIGFjdGlvbnM6XHJcbiAqIGBgYFxyXG4gKiAvLyBBZG1pbkJybyBvcHRpb25zXHJcbiAqIGNvbnN0IEFkbWluQnJvT3B0aW9ucyA9IHtcclxuICogICByZXNvdXJjZXM6IFtcclxuICogICAgICByZXNvdXJjZSxcclxuICogICAgICBvcHRpb25zOiB7XHJcbiAqICAgICAgICBhY3Rpb25zOiB7XHJcbiAqICAgICAgICAgICBteU5ld0FjdGlvbjoge1xyXG4gKiAgICAgICAgICAgICBsYWJlbDogJ2FtYXppbmcgYWN0aW9uJyxcclxuICogICAgICAgICAgICAgaWNvbjogJ0FkZCcsXHJcbiAqICAgICAgICAgICAgIGluVmlzaWJsZTogKHJlc291cmNlLCByZWNvcmQpID0+IHJlY29yZC5wYXJhbSgnZW1haWwnKSAhPT0gJycsXHJcbiAqICAgICAgICAgICAgIGFjdGlvblR5cGU6ICdyZWNvcmQnLFxyXG4gKiAgICAgICAgICAgICBjb21wb25lbnQ6IEFkbWluQnJvLmJ1bmRsZSgnLi9teS1uZXctYWN0aW9uJyksXHJcbiAqICAgICAgICAgICAgIGhhbmRsZXI6IChyZXF1ZXN0LCByZXNwb25zZSwgZGF0YSkgPT4ge1xyXG4gKiAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAqICAgICAgICAgICAgICAgICAgLi4uXHJcbiAqICAgICAgICAgICAgICAgfVxyXG4gKiAgICAgICAgICAgICB9XHJcbiAqICAgICAgICAgICB9XHJcbiAqICAgICAgICB9XHJcbiAqICAgICAgfVxyXG4gKiAgIF1cclxuICogfVxyXG4gKiBgYGBcclxuICpcclxuICogYGBgXHJcbiAqIC8vIC4vbXktbmV3LWFjdGlvbi5qc3hcclxuICogaW1wb3J0IHsgQm94IH0gZnJvbSAnYWRtaW4tYnJvJ1xyXG4gKlxyXG4gKiBjb25zdCBNeU5ld0FjdGlvbiA9IChwcm9wcykgPT4ge1xyXG4gKiAgIGNvbnN0IHsgcmVzb3VyY2UsIGFjdGlvbiwgcmVjb3JkIH0gPSBwcm9wc1xyXG4gKiAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHRoZSBwcm9wcyBhbmQgcmVuZGVyIGFjdGlvblxyXG4gKiAgIHJldHVybiAoXHJcbiAqICAgICA8Qm94PlNvbWUgQWN0aW9uIENvbnRlbnQ8L0JveD5cclxuICogICApXHJcbiAqIH1cclxuICogYGBgXHJcbiAqXHJcbiAqIEBjb21wb25lbnRcclxuICogQG5hbWUgQmFzZUFjdGlvbkNvbXBvbmVudFxyXG4gKiBAc3ViY2F0ZWdvcnkgQXBwbGljYXRpb25cclxuICovXHJcbmV4cG9ydCBjb25zdCBCYXNlQWN0aW9uQ29tcG9uZW50OiBSZWFjdC5GQzxBY3Rpb25Qcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHJlc291cmNlLCBhY3Rpb24sIHJlY29yZCwgcmVjb3Jkcywgc2V0VGFnLCBkYXRhIH0gPSBwcm9wc1xyXG4gIGNvbnN0IGRvY3VtZW50YXRpb25MaW5rID0gW0RPQ1MsICdCYXNlQWN0aW9uLmh0bWwnXS5qb2luKCcvJylcclxuXHJcbiAgY29uc3QgeyB0cmFuc2xhdGVNZXNzYWdlIH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcblxyXG4gIGxldCBBY3Rpb24gPSBhY3Rpb25zW2FjdGlvbi5uYW1lXVxyXG5cclxuICBpZiAoYWN0aW9uLmNvbXBvbmVudCkge1xyXG4gICAgQWN0aW9uID0gQWRtaW5Ccm8uVXNlckNvbXBvbmVudHNbYWN0aW9uLmNvbXBvbmVudF1cclxuICB9XHJcblxyXG4gIGlmIChBY3Rpb24pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxFcnJvckJvdW5kYXJ5PlxyXG4gICAgICAgIDxBY3Rpb25cclxuICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxyXG4gICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxyXG4gICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XHJcbiAgICAgICAgICByZWNvcmRzPXtyZWNvcmRzfVxyXG4gICAgICAgICAgc2V0VGFnPXtzZXRUYWd9XHJcbiAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvRXJyb3JCb3VuZGFyeT5cclxuICAgIClcclxuICB9XHJcbiAgcmV0dXJuIEFjdGlvbiB8fCAoXHJcbiAgICA8TWVzc2FnZUJveCB2YXJpYW50PVwiZGFuZ2VyXCI+XHJcbiAgICAgIHt0cmFuc2xhdGVNZXNzYWdlKCdub0FjdGlvbkNvbXBvbmVudCcpfVxyXG4gICAgICA8VHJhbnMga2V5PVwibWVzc2FnZXMuYnV0dG9ucy5zZWVUaGVEb2N1bWVudGF0aW9uXCI+XHJcbiAgICAgICAgU2VlOlxyXG4gICAgICAgIDxMaW5rIG1sPVwiZGVmYXVsdFwiIGhyZWY9e2RvY3VtZW50YXRpb25MaW5rfT50aGUgZG9jdW1lbnRhdGlvbjwvTGluaz5cclxuICAgICAgPC9UcmFucz5cclxuICAgIDwvTWVzc2FnZUJveD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VBY3Rpb25Db21wb25lbnRcclxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNZXNzYWdlQm94LCBUZXh0IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJ1xyXG5cclxuLyoqXHJcbiAqIEBtZW1iZXJvZiBFcnJvck1lc3NhZ2VCb3hcclxuICogQGFsaWFzIEVycm9yTWVzc2FnZUJveFByb3BzXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFcnJvck1lc3NhZ2VCb3hQcm9wcyA9IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgdGVzdElkPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGNsYXNzXHJcbiAqIFByaW50cyBlcnJvciBtZXNzYWdlXHJcbiAqXHJcbiAqIEBjb21wb25lbnRcclxuICogQHByaXZhdGVcclxuICogQGV4YW1wbGVcclxuICogcmV0dXJuIChcclxuICogPEVycm9yTWVzc2FnZUJveCB0aXRsZT17J1NvbWUgZXJyb3InfT5cclxuICogICA8cD5UZXh0IGJlbG93IHRoZSB0aXRsZTwvcD5cclxuICogPC9FcnJvck1lc3NhZ2VCb3g+XHJcbiAqIClcclxuICovXHJcbmNvbnN0IEVycm9yTWVzc2FnZUJveDogUmVhY3QuRkM8RXJyb3JNZXNzYWdlQm94UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgdGl0bGUsIHRlc3RJZCB9ID0gcHJvcHNcclxuICByZXR1cm4gKFxyXG4gICAgPE1lc3NhZ2VCb3ggZGF0YS10ZXN0aWQ9e3Rlc3RJZH0gbWVzc2FnZT17dGl0bGV9PlxyXG4gICAgICA8VGV4dD5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvVGV4dD5cclxuICAgIDwvTWVzc2FnZUJveD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IE5vUmVzb3VyY2VFcnJvcjogUmVhY3QuRkM8e3Jlc291cmNlSWQ6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyByZXNvdXJjZUlkIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG4gIHJldHVybiAoXHJcbiAgICA8TWVzc2FnZUJveFxyXG4gICAgICBtZXNzYWdlPVwiNDA0IC0gUEFHRSBOT1QgRk9VTkRcIlxyXG4gICAgICBkYXRhLXRlc3RpZD1cIk5vUmVzb3VyY2VFcnJvclwiXHJcbiAgICAgIHZhcmlhbnQ9XCJpbmZvXCJcclxuICAgICAgbT1cInh4bFwiXHJcbiAgICA+XHJcbiAgICAgIDxUZXh0PlxyXG4gICAgICAgIHt0cmFuc2xhdGVNZXNzYWdlKCdlcnJvcjQwNFJlc291cmNlJywgcmVzb3VyY2VJZCwgeyByZXNvdXJjZUlkIH0pfVxyXG4gICAgICA8L1RleHQ+XHJcbiAgICA8L01lc3NhZ2VCb3g+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBOb0FjdGlvbkVycm9yOiBSZWFjdC5GQzx7cmVzb3VyY2VJZDogc3RyaW5nOyBhY3Rpb25OYW1lOiBzdHJpbmd9PiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZSB9ID0gcHJvcHNcclxuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcclxuICByZXR1cm4gKFxyXG4gICAgPE1lc3NhZ2VCb3hcclxuICAgICAgbWVzc2FnZT1cIjQwNCAtIFBBR0UgTk9UIEZPVU5EXCJcclxuICAgICAgZGF0YS10ZXN0aWQ9XCJOb0FjdGlvbkVycm9yXCJcclxuICAgICAgdmFyaWFudD1cImluZm9cIlxyXG4gICAgICBtPVwieHhsXCJcclxuICAgID5cclxuICAgICAgPFRleHQ+XHJcbiAgICAgICAge3RyYW5zbGF0ZU1lc3NhZ2UoJ2Vycm9yNDA0QWN0aW9uJywgcmVzb3VyY2VJZCwgeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lIH0pfVxyXG4gICAgICA8L1RleHQ+XHJcbiAgICA8L01lc3NhZ2VCb3g+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBOb1JlY29yZEVycm9yOiBSZWFjdC5GQzx7XHJcbiAgcmVzb3VyY2VJZDogc3RyaW5nO1xyXG4gIHJlY29yZElkOiBzdHJpbmc7XHJcbn0+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyByZXNvdXJjZUlkLCByZWNvcmRJZCB9ID0gcHJvcHNcclxuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcclxuICByZXR1cm4gKFxyXG4gICAgPE1lc3NhZ2VCb3hcclxuICAgICAgbWVzc2FnZT1cIjQwNCAtIFBBR0UgTk9UIEZPVU5EXCJcclxuICAgICAgZGF0YS10ZXN0aWQ9XCJOb1JlY29yZEVycm9yXCJcclxuICAgICAgdmFyaWFudD1cImluZm9cIlxyXG4gICAgICBtPVwieHhsXCJcclxuICAgID5cclxuICAgICAgPFRleHQ+XHJcbiAgICAgICAge3RyYW5zbGF0ZU1lc3NhZ2UoJ2Vycm9yNDA0UmVjb3JkJywgcmVzb3VyY2VJZCwgeyByZXNvdXJjZUlkLCByZWNvcmRJZCB9KX1cclxuICAgICAgPC9UZXh0PlxyXG4gICAgPC9NZXNzYWdlQm94PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBOb1Jlc291cmNlRXJyb3IsXHJcbiAgTm9BY3Rpb25FcnJvcixcclxuICBOb1JlY29yZEVycm9yLFxyXG4gIEVycm9yTWVzc2FnZUJveCxcclxuICBFcnJvck1lc3NhZ2VCb3ggYXMgZGVmYXVsdCxcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5pbXBvcnQgeyBCb3gsIEJveFByb3BzLCBEcmF3ZXJDb250ZW50LCBEcmF3ZXJGb290ZXIgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkKEJveClgXHJcbiAgJiAke0RyYXdlckNvbnRlbnR9IHtcclxuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xyXG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLnNwYWNlLnh4bH07XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB9XHJcbiAgXHJcbiAgJiAke0RyYXdlckZvb3Rlcn0ge1xyXG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XHJcbiAgICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5zcGFjZS54eGx9ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5zcGFjZS54eGx9O1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgV3JhcHBlcjogUmVhY3QuRkM8Qm94UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIHZhcmlhbnQsIGNvbG9yLCAuLi5yZXN0IH0gPSBwcm9wc1xyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkV3JhcHBlciB7Li4ucmVzdH0gdmFyaWFudD1cImdyZXlcIiBteD1cImF1dG9cIj5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9TdHlsZWRXcmFwcGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV3JhcHBlclxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCwgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQgeyBEcmF3ZXIsIERFRkFVTFRfRFJBV0VSX1dJRFRIIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG4vKipcclxuICogQGFsaWFzIERyYXdlclBvcnRhbFByb3BzXHJcbiAqIEBtZW1iZXJvZiBEcmF3ZXJQb3J0YWxcclxuICovXHJcbmV4cG9ydCB0eXBlIERyYXdlclBvcnRhbFByb3BzID0ge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkcmF3ZXIgY29udGVudFxyXG4gICAqL1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIGRyYXdlciB3aWR0aFxyXG4gICAqL1xyXG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nPjtcclxufVxyXG5cclxuY29uc3QgRFJBV0VSX1BPUlRBTF9JRCA9ICdkcmF3ZXJQb3J0YWwnXHJcblxyXG4vKipcclxuICogU2hvd3MgYWxsIG9mIGl0cyBjaGlsZHJlbiBpbiBhIERyYXdlciBvbiB0aGUgcmlnaHQuXHJcbiAqIEluc3RlYWQgb2YgcmVuZGVyaW5nIGl0J3Mgb3duIHtAbGluayBEcmF3ZXJ9IGNvbXBvbmVudCBpdCByZXVzZXNcclxuICogdGhlIGdsb2JhbCBEcmF3ZXIgdmlhIFJlYWN0IFBvcnRhbC5cclxuICpcclxuICogIyMjIFVzYWdlXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBpbXBvcnQgeyBEcmF3ZXJQb3J0YWwgfSBmcm9tICdhZG1pbi1icm8nXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAY29tcG9uZW50XHJcbiAqIEBzdWJjYXRlZ29yeSBBcHBsaWNhdGlvblxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IERyYXdlclBvcnRhbDogUmVhY3QuRkM8RHJhd2VyUG9ydGFsUHJvcHM+ID0gKHsgY2hpbGRyZW4sIHdpZHRoIH0pID0+IHtcclxuICBjb25zdCBbZHJhd2VyRWxlbWVudCwgc2V0RHJhd2VyRWxlbWVudF0gPSB1c2VTdGF0ZTxIVE1MRWxlbWVudCB8IG51bGw+KFxyXG4gICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKERSQVdFUl9QT1JUQUxfSUQpLFxyXG4gIClcclxuICBpZiAoIWRyYXdlckVsZW1lbnQgJiYgd2luZG93KSB7XHJcbiAgICBjb25zdCBpbm5lcldyYXBwZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IERyYXdlcldyYXBwZXIgPSAoXHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXsod2luZG93IGFzIGFueSkuVEhFTUV9PlxyXG4gICAgICAgIDxEcmF3ZXIgaWQ9e0RSQVdFUl9QT1JUQUxfSUR9IGNsYXNzTmFtZT1cImhpZGRlblwiIC8+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIClcclxuICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlubmVyV3JhcHBlcilcclxuICAgIHJlbmRlcihEcmF3ZXJXcmFwcGVyLCBpbm5lcldyYXBwZXIsICgpID0+IHtcclxuICAgICAgc2V0RHJhd2VyRWxlbWVudCh3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoRFJBV0VSX1BPUlRBTF9JRCkpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkcmF3ZXJFbGVtZW50KSB7XHJcbiAgICAgIGRyYXdlckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcclxuICAgICAgaWYgKHdpZHRoKSB7XHJcbiAgICAgICAgZHJhd2VyRWxlbWVudC5zdHlsZS53aWR0aCA9IEFycmF5LmlzQXJyYXkod2lkdGgpID8gd2lkdGhbMF0udG9TdHJpbmcoKSA6IHdpZHRoLnRvU3RyaW5nKClcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGRyYXdlckVsZW1lbnQuc3R5bGUud2lkdGggPSBERUZBVUxUX0RSQVdFUl9XSURUSFxyXG4gICAgICAgIGRyYXdlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICgpOiB2b2lkID0+IHVuZGVmaW5lZFxyXG4gIH0sIFtkcmF3ZXJFbGVtZW50XSlcclxuXHJcbiAgaWYgKCFkcmF3ZXJFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgZHJhd2VyRWxlbWVudCxcclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyYXdlclBvcnRhbFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudCwgU3ludGhldGljRXZlbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSwgdXNlTG9jYXRpb24sIHVzZVJvdXRlTWF0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBIMyxcclxuICBCdXR0b24sXHJcbiAgSWNvbixcclxuICBEcmF3ZXIsXHJcbiAgRHJhd2VyQ29udGVudCxcclxuICBEcmF3ZXJGb290ZXIsXHJcbn0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5cclxuaW1wb3J0IFByb3BlcnR5VHlwZSBmcm9tICcuLi9wcm9wZXJ0eS10eXBlJ1xyXG5pbXBvcnQgeyBSZWNvcmRKU09OLCBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJ1xyXG5cclxuZXhwb3J0IHR5cGUgRmlsdGVyUHJvcHMgPSB7XHJcbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcclxuICB0b2dnbGVGaWx0ZXI6ICgpID0+IHZvaWQ7XHJcbiAgaXNWaXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG50eXBlIE1hdGNoUHJvcHMgPSB7XHJcbiAgcmVzb3VyY2VJZDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBwYXJzZVF1ZXJ5ID0gKGxvY2F0aW9uKTogYW55ID0+IHtcclxuICBjb25zdCBmaWx0ZXI6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fVxyXG4gIGNvbnN0IHF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpXHJcbiAgZm9yIChjb25zdCBlbnRyeSBvZiBxdWVyeS5lbnRyaWVzKCkpIHtcclxuICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5XHJcbiAgICBpZiAoa2V5Lm1hdGNoKCdmaWx0ZXJzLicpKSB7XHJcbiAgICAgIGZpbHRlcltrZXkucmVwbGFjZSgnZmlsdGVycy4nLCAnJyldID0gdmFsdWVcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGZpbHRlclxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRmlsdGVyRHJhd2VyOiBSZWFjdC5GQzxGaWx0ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHJlc291cmNlLCBpc1Zpc2libGUsIHRvZ2dsZUZpbHRlciB9ID0gcHJvcHNcclxuICBjb25zdCBwcm9wZXJ0aWVzID0gcmVzb3VyY2UuZmlsdGVyUHJvcGVydGllc1xyXG5cclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcclxuICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUocGFyc2VRdWVyeShsb2NhdGlvbikpXHJcbiAgY29uc3QgbWF0Y2ggPSB1c2VSb3V0ZU1hdGNoPE1hdGNoUHJvcHM+KClcclxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXHJcbiAgY29uc3QgeyB0cmFuc2xhdGVMYWJlbCwgdHJhbnNsYXRlQnV0dG9uIH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRGaWx0ZXIoe30pLCBbbWF0Y2gucGFyYW1zLnJlc291cmNlSWRdKVxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50KTogZmFsc2UgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgY29uc3Qgc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxyXG4gICAgT2JqZWN0LmtleXMoZmlsdGVyKS5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgaWYgKGZpbHRlcltrZXldICE9PSAnJykge1xyXG4gICAgICAgIHNlYXJjaC5zZXQoYGZpbHRlcnMuJHtrZXl9YCwgZmlsdGVyW2tleV0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2VhcmNoLmRlbGV0ZShgZmlsdGVycy4ke2tleX1gKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgc2VhcmNoLnNldCgncGFnZScsICcxJylcclxuICAgIGhpc3RvcnkucHVzaChgJHtoaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lfT8ke3NlYXJjaC50b1N0cmluZygpfWApXHJcbiAgICByZXR1cm4gZmFsc2VcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc2V0RmlsdGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zdCBmaWx0ZXJlZFNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxyXG4gICAgY29uc3Qgc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxyXG4gICAgZm9yIChjb25zdCBrZXkgb2Ygc2VhcmNoLmtleXMoKSkge1xyXG4gICAgICBpZiAoIWtleS5tYXRjaCgnZmlsdGVycy4nKSkge1xyXG4gICAgICAgIGZpbHRlcmVkU2VhcmNoLnNldChrZXksIHNlYXJjaC5nZXQoa2V5KSBhcyBzdHJpbmcpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHF1ZXJ5ID0gZmlsdGVyZWRTZWFyY2gudG9TdHJpbmcoKSA9PT0gJycgPyBgPyR7ZmlsdGVyZWRTZWFyY2gudG9TdHJpbmcoKX1gIDogJydcclxuICAgIGhpc3RvcnkucHVzaChoaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lICsgcXVlcnkpXHJcbiAgICBzZXRGaWx0ZXIoe30pXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAocHJvcGVydHlOYW1lOiBzdHJpbmcgfCBSZWNvcmRKU09OLCB2YWx1ZTogYW55KTogdm9pZCA9PiB7XHJcbiAgICBpZiAoKHByb3BlcnR5TmFtZSBhcyBSZWNvcmRKU09OKS5wYXJhbXMpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCd5b3UgY2FuIG5vdCBwYXNzIFJlY29yZEpTT04gdG8gZmlsdGVycycpXHJcbiAgICB9XHJcbiAgICBzZXRGaWx0ZXIoe1xyXG4gICAgICAuLi5maWx0ZXIsXHJcbiAgICAgIFtwcm9wZXJ0eU5hbWUgYXMgc3RyaW5nXTogdmFsdWUsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXIgdmFyaWFudD1cImZpbHRlclwiIGlzSGlkZGVuPXshaXNWaXNpYmxlfSBhcz1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgPERyYXdlckNvbnRlbnQ+XHJcbiAgICAgICAgPEgzPlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgc2l6ZT1cImljb25cIlxyXG4gICAgICAgICAgICByb3VuZGVkXHJcbiAgICAgICAgICAgIG1yPVwibGdcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKTogdm9pZCA9PiB0b2dnbGVGaWx0ZXIoKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEljb24gaWNvbj1cIkNoZXZyb25SaWdodFwiIGNvbG9yPVwid2hpdGVcIiAvPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICB7dHJhbnNsYXRlTGFiZWwoJ2ZpbHRlcnMnLCByZXNvdXJjZS5pZCl9XHJcbiAgICAgICAgPC9IMz5cclxuICAgICAgICA8Qm94IG15PVwieDNcIj5cclxuICAgICAgICAgIHtwcm9wZXJ0aWVzLm1hcChwcm9wZXJ0eSA9PiAoXHJcbiAgICAgICAgICAgIDxQcm9wZXJ0eVR5cGVcclxuICAgICAgICAgICAgICBrZXk9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cclxuICAgICAgICAgICAgICB3aGVyZT1cImZpbHRlclwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XHJcbiAgICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XHJcbiAgICAgICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvRHJhd2VyQ29udGVudD5cclxuICAgICAgPERyYXdlckZvb3Rlcj5cclxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCI+XHJcbiAgICAgICAgICB7dHJhbnNsYXRlQnV0dG9uKCdhcHBseUNoYW5nZXMnLCByZXNvdXJjZS5pZCl9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwidGV4dFwiIHNpemU9XCJsZ1wiIG9uQ2xpY2s9e3Jlc2V0RmlsdGVyfSB0eXBlPVwiYnV0dG9uXCIgY29sb3I9XCJ3aGl0ZVwiPlxyXG4gICAgICAgICAge3RyYW5zbGF0ZUJ1dHRvbigncmVzZXRGaWx0ZXInLCByZXNvdXJjZS5pZCl9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRHJhd2VyRm9vdGVyPlxyXG4gICAgPC9EcmF3ZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJEcmF3ZXJcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZU1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXHJcblxyXG5pbXBvcnQgQmFzZUFjdGlvbkNvbXBvbmVudCBmcm9tICcuLi9hcHAvYmFzZS1hY3Rpb24tY29tcG9uZW50J1xyXG5pbXBvcnQgQXBpQ2xpZW50IGZyb20gJy4uLy4uL3V0aWxzL2FwaS1jbGllbnQnXHJcbmltcG9ydCB7IFJlY29yZEFjdGlvblBhcmFtcyB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcclxuaW1wb3J0IHsgQWN0aW9uSlNPTiwgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXHJcbmltcG9ydCB7IE5vUmVzb3VyY2VFcnJvciwgTm9BY3Rpb25FcnJvciwgTm9SZWNvcmRFcnJvciB9IGZyb20gJy4uL2FwcC9lcnJvci1tZXNzYWdlJ1xyXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuL3V0aWxzL3dyYXBwZXInXHJcbmltcG9ydCB7IEFjdGlvbkhlYWRlciB9IGZyb20gJy4uL2FwcCdcclxuaW1wb3J0IHsgdXNlTm90aWNlLCB1c2VSZXNvdXJjZSwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9ob29rcydcclxuaW1wb3J0IERyYXdlclBvcnRhbCBmcm9tICcuLi9hcHAvZHJhd2VyLXBvcnRhbCdcclxuaW1wb3J0IHsgQWN0aW9uUmVzcG9uc2UsIFJlY29yZEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2FjdGlvbi5pbnRlcmZhY2UnXHJcbmltcG9ydCBtZXJnZVJlY29yZFJlc3BvbnNlIGZyb20gJy4uLy4uL2hvb2tzL3VzZS1yZWNvcmQvbWVyZ2UtcmVjb3JkLXJlc3BvbnNlJ1xyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXHJcblxyXG5jb25zdCBSZWNvcmRBY3Rpb246IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtyZWNvcmQsIHNldFJlY29yZF0gPSB1c2VTdGF0ZTxSZWNvcmRKU09OPigpXHJcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8YW55PigpXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBtYXRjaCA9IHVzZVJvdXRlTWF0Y2g8UmVjb3JkQWN0aW9uUGFyYW1zPigpXHJcbiAgY29uc3QgYWRkTm90aWNlID0gdXNlTm90aWNlKClcclxuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcclxuXHJcbiAgY29uc3QgeyBhY3Rpb25OYW1lLCByZWNvcmRJZCwgcmVzb3VyY2VJZCB9ID0gbWF0Y2gucGFyYW1zXHJcbiAgY29uc3QgcmVzb3VyY2UgPSB1c2VSZXNvdXJjZShyZXNvdXJjZUlkKVxyXG5cclxuICBjb25zdCBhY3Rpb24gPSByZWNvcmQgJiYgcmVjb3JkLnJlY29yZEFjdGlvbnMuZmluZChyID0+IHIubmFtZSA9PT0gYWN0aW9uTmFtZSlcclxuXHJcbiAgY29uc3QgZmV0Y2hSZWNvcmQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICBhcGkucmVjb3JkQWN0aW9uKG1hdGNoLnBhcmFtcykudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgc2V0UmVjb3JkKHJlc3BvbnNlLmRhdGEucmVjb3JkKVxyXG4gICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgYWRkTm90aWNlKHtcclxuICAgICAgICBtZXNzYWdlOiB0cmFuc2xhdGVNZXNzYWdlKCdlcnJvckZldGNoaW5nUmVjb3JkJywgcmVzb3VyY2VJZCksXHJcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgfSlcclxuICAgICAgdGhyb3cgZXJyb3JcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hSZWNvcmQoKVxyXG4gIH0sIFthY3Rpb25OYW1lLCByZWNvcmRJZCwgcmVzb3VyY2VJZF0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZUFjdGlvblBlcmZvcm1lZCA9IHVzZUNhbGxiYWNrKChvbGRSZWNvcmQ6IFJlY29yZEpTT04sIHJlc3BvbnNlOiBBY3Rpb25SZXNwb25zZSkgPT4ge1xyXG4gICAgaWYgKHJlc3BvbnNlLnJlY29yZCkge1xyXG4gICAgICBzZXRSZWNvcmQobWVyZ2VSZWNvcmRSZXNwb25zZShvbGRSZWNvcmQsIHJlc3BvbnNlIGFzIFJlY29yZEFjdGlvblJlc3BvbnNlKSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZldGNoUmVjb3JkKClcclxuICAgIH1cclxuICB9LCBbZmV0Y2hSZWNvcmRdKVxyXG5cclxuICBpZiAoIXJlc291cmNlKSB7XHJcbiAgICByZXR1cm4gKDxOb1Jlc291cmNlRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gLz4pXHJcbiAgfVxyXG5cclxuICAvLyBXaGVuIHRoZSB1c2VyIHZpc2l0cyB0aGlzIHJvdXRlIChyZWNvcmQgYWN0aW9uKSBmcm9tIGEgZGlmZmVyZW50LCB0aGFuIHRoZSBjdXJyZW50IG9uZSwgcmVjb3JkLlxyXG4gIC8vIEl0IHJlbmRlcnMgZXZlcnl0aGluZyB3aXRoIGEgbmV3IHJlc291cmNlLiBUaGUgb2xkIHJlY29yZCByZW1haW5zIHVudGlsIHVzZUVmZmVjdCBmZXRjaGVzIGRhdGFcclxuICAvLyBmcm9tIHRoZSBBUEkuIHRoYXQgaXMgd2h5IHdlIGhhdmUgdG8gY2hlY2sgaWYgdGhlIGN1cnJlbnQgcmVjb3JkIGhhcyBjb3JyZWN0IHJlY29yZC5pZC5cclxuICAvLyBBbHRlcm5hdGl2ZSBhcHByb2FjaCB3b3VsZCBiZSB0byBzZXRSZWNvcmQodW5kZWZpbmVkKSBiZWZvcmUgdGhlIGZldGNoLCBidXQgaXQgaXMgYXN5bmMgYW5kXHJcbiAgLy8gd2UgY2Fubm90IGJlIHN1cmUgdGhhdCB0aGUgY29tcG9uZW50IHdvbnQgYmUgcmVuZGVyZWQgKGl0IHdpbGwgYmUgYXQgbGVhc3Qgb25jZSkgd2l0aCB0aGVcclxuICAvLyB3cm9uZyBkYXRhLlxyXG4gIGNvbnN0IGhhc0RpZmZlcmVudFJlY29yZCA9IHJlY29yZCAmJiByZWNvcmQuaWQudG9TdHJpbmcoKSAhPT0gcmVjb3JkSWRcclxuXHJcbiAgaWYgKGxvYWRpbmcgfHwgaGFzRGlmZmVyZW50UmVjb3JkKSB7XHJcbiAgICBjb25zdCBhY3Rpb25Gcm9tUmVzb3VyY2UgPSByZXNvdXJjZS5hY3Rpb25zLmZpbmQociA9PiByLm5hbWUgPT09IGFjdGlvbk5hbWUpXHJcbiAgICByZXR1cm4gYWN0aW9uRnJvbVJlc291cmNlPy5zaG93SW5EcmF3ZXIgPyAoPERyYXdlclBvcnRhbD48TG9hZGVyIC8+PC9EcmF3ZXJQb3J0YWw+KSA6IDxMb2FkZXIgLz5cclxuICB9XHJcblxyXG4gIGlmICghYWN0aW9uKSB7XHJcbiAgICByZXR1cm4gKDxOb0FjdGlvbkVycm9yIHJlc291cmNlSWQ9e3Jlc291cmNlSWR9IGFjdGlvbk5hbWU9e2FjdGlvbk5hbWV9IC8+KVxyXG4gIH1cclxuXHJcbiAgaWYgKCFyZWNvcmQpIHtcclxuICAgIHJldHVybiAoPE5vUmVjb3JkRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gcmVjb3JkSWQ9e3JlY29yZElkfSAvPilcclxuICB9XHJcblxyXG4gIGlmIChhY3Rpb24uc2hvd0luRHJhd2VyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJhd2VyUG9ydGFsIHdpZHRoPXthY3Rpb24uY29udGFpbmVyV2lkdGh9PlxyXG4gICAgICAgIDxCYXNlQWN0aW9uQ29tcG9uZW50XHJcbiAgICAgICAgICBhY3Rpb249e2FjdGlvbiBhcyBBY3Rpb25KU09OfVxyXG4gICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxyXG4gICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9EcmF3ZXJQb3J0YWw+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXIgd2lkdGg9e2FjdGlvbi5jb250YWluZXJXaWR0aH0+XHJcbiAgICAgIDxBY3Rpb25IZWFkZXJcclxuICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XHJcbiAgICAgICAgYWN0aW9uPXthY3Rpb259XHJcbiAgICAgICAgcmVjb3JkPXtyZWNvcmR9XHJcbiAgICAgICAgYWN0aW9uUGVyZm9ybWVkPXsocmVzcG9uc2U6IEFjdGlvblJlc3BvbnNlKTogdm9pZCA9PiAoXHJcbiAgICAgICAgICBoYW5kbGVBY3Rpb25QZXJmb3JtZWQocmVjb3JkLCByZXNwb25zZSlcclxuICAgICAgICApfVxyXG4gICAgICAvPlxyXG4gICAgICA8QmFzZUFjdGlvbkNvbXBvbmVudFxyXG4gICAgICAgIGFjdGlvbj17YWN0aW9ufVxyXG4gICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cclxuICAgICAgICByZWNvcmQ9e3JlY29yZH1cclxuICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAvPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVjb3JkQWN0aW9uXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IEJhc2VBY3Rpb25Db21wb25lbnQgZnJvbSAnLi4vYXBwL2Jhc2UtYWN0aW9uLWNvbXBvbmVudCdcclxuaW1wb3J0IHsgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcclxuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xyXG5pbXBvcnQgeyBOb1Jlc291cmNlRXJyb3IsIE5vQWN0aW9uRXJyb3IgfSBmcm9tICcuLi9hcHAvZXJyb3ItbWVzc2FnZSdcclxuaW1wb3J0IHsgUmVzb3VyY2VBY3Rpb25QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXHJcbmltcG9ydCB7IEFjdGlvbkhlYWRlciB9IGZyb20gJy4uL2FwcCdcclxuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi91dGlscy93cmFwcGVyJ1xyXG5pbXBvcnQgRHJhd2VyUG9ydGFsIGZyb20gJy4uL2FwcC9kcmF3ZXItcG9ydGFsJ1xyXG5cclxudHlwZSBQcm9wc0Zyb21TdGF0ZSA9IHtcclxuICByZXNvdXJjZXM6IEFycmF5PFJlc291cmNlSlNPTj47XHJcbn1cclxuXHJcbnR5cGUgUHJvcHMgPSBQcm9wc0Zyb21TdGF0ZSAmIFJvdXRlQ29tcG9uZW50UHJvcHM8UmVzb3VyY2VBY3Rpb25QYXJhbXM+XHJcblxyXG5jb25zdCBSZXNvdXJjZUFjdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyByZXNvdXJjZXMsIG1hdGNoIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHsgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZSB9ID0gbWF0Y2gucGFyYW1zXHJcblxyXG4gIGNvbnN0IHJlc291cmNlID0gcmVzb3VyY2VzLmZpbmQociA9PiByLmlkID09PSByZXNvdXJjZUlkKVxyXG4gIGlmICghcmVzb3VyY2UpIHtcclxuICAgIHJldHVybiAoPE5vUmVzb3VyY2VFcnJvciByZXNvdXJjZUlkPXtyZXNvdXJjZUlkfSAvPilcclxuICB9XHJcbiAgY29uc3QgYWN0aW9uID0gcmVzb3VyY2UucmVzb3VyY2VBY3Rpb25zLmZpbmQociA9PiByLm5hbWUgPT09IGFjdGlvbk5hbWUpXHJcbiAgaWYgKCFhY3Rpb24pIHtcclxuICAgIHJldHVybiAoPE5vQWN0aW9uRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gYWN0aW9uTmFtZT17YWN0aW9uTmFtZX0gLz4pXHJcbiAgfVxyXG5cclxuICBpZiAoYWN0aW9uLnNob3dJbkRyYXdlcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPERyYXdlclBvcnRhbCB3aWR0aD17YWN0aW9uLmNvbnRhaW5lcldpZHRofT5cclxuICAgICAgICA8QmFzZUFjdGlvbkNvbXBvbmVudFxyXG4gICAgICAgICAgYWN0aW9uPXthY3Rpb259XHJcbiAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9EcmF3ZXJQb3J0YWw+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdyYXBwZXIgd2lkdGg9e2FjdGlvbi5jb250YWluZXJXaWR0aH0+XHJcbiAgICAgIDxBY3Rpb25IZWFkZXJcclxuICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XHJcbiAgICAgICAgYWN0aW9uPXthY3Rpb259XHJcbiAgICAgIC8+XHJcbiAgICAgIDxCYXNlQWN0aW9uQ29tcG9uZW50XHJcbiAgICAgICAgYWN0aW9uPXthY3Rpb259XHJcbiAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxyXG4gICAgICAvPlxyXG4gICAgPC9XcmFwcGVyPlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSZWR1eFN0YXRlKTogUHJvcHNGcm9tU3RhdGUgPT4gKHtcclxuICByZXNvdXJjZXM6IHN0YXRlLnJlc291cmNlcyxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShSZXNvdXJjZUFjdGlvbilcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZU1hdGNoLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuXHJcbmltcG9ydCB7IEJ1bGtBY3Rpb25QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXHJcblxyXG5pbXBvcnQgQXBpQ2xpZW50IGZyb20gJy4uLy4uL3V0aWxzL2FwaS1jbGllbnQnXHJcbmltcG9ydCBnZXRCdWxrQWN0aW9uc0Zyb21SZWNvcmRzIGZyb20gJy4uL2FwcC9yZWNvcmRzLXRhYmxlL3V0aWxzL2dldC1idWxrLWFjdGlvbnMtZnJvbS1yZWNvcmRzJ1xyXG5pbXBvcnQgeyBBY3Rpb25KU09OLCBSZWNvcmRKU09OLCBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuL3V0aWxzL3dyYXBwZXInXHJcbmltcG9ydCB7XHJcbiAgQWN0aW9uSGVhZGVyLFxyXG4gIERyYXdlclBvcnRhbCxcclxuICBCYXNlQWN0aW9uQ29tcG9uZW50LFxyXG4gIEVycm9yTWVzc2FnZUJveCxcclxuICBOb1Jlc291cmNlRXJyb3IsXHJcbiAgTm9BY3Rpb25FcnJvcixcclxufSBmcm9tICcuLi9hcHAnXHJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCB1c2VOb3RpY2UsIHVzZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vaG9va3MnXHJcblxyXG50eXBlIFByb3BzRnJvbVN0YXRlID0ge1xyXG4gIHJlc291cmNlczogQXJyYXk8UmVzb3VyY2VKU09OPjtcclxufVxyXG5cclxudHlwZSBNYXRjaFBhcmFtcyA9IFBpY2s8QnVsa0FjdGlvblBhcmFtcywgJ2FjdGlvbk5hbWUnIHwgJ3Jlc291cmNlSWQnPlxyXG5cclxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXHJcblxyXG5jb25zdCBCdWxrQWN0aW9uOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBtYXRjaCA9IHVzZVJvdXRlTWF0Y2g8TWF0Y2hQYXJhbXM+KClcclxuICBjb25zdCBbcmVjb3Jkcywgc2V0UmVjb3Jkc10gPSB1c2VTdGF0ZTxBcnJheTxSZWNvcmRKU09OPj4oW10pXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgeyB0cmFuc2xhdGVNZXNzYWdlIH0gPSB1c2VUcmFuc2xhdGlvbigpXHJcbiAgY29uc3QgYWRkTm90aWNlID0gdXNlTm90aWNlKClcclxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcclxuXHJcbiAgY29uc3QgeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lIH0gPSBtYXRjaC5wYXJhbXNcclxuICBjb25zdCByZXNvdXJjZSA9IHVzZVJlc291cmNlKHJlc291cmNlSWQpXHJcblxyXG4gIGNvbnN0IGZldGNoUmVjb3JkcyA9ICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnN0IHJlY29yZElkc1N0cmluZyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKS5nZXQoJ3JlY29yZElkcycpXHJcbiAgICBjb25zdCByZWNvcmRJZHMgPSByZWNvcmRJZHNTdHJpbmcgPyByZWNvcmRJZHNTdHJpbmcuc3BsaXQoJywnKSA6IFtdXHJcbiAgICBzZXRMb2FkaW5nKHRydWUpXHJcblxyXG4gICAgcmV0dXJuIGFwaS5idWxrQWN0aW9uKHtcclxuICAgICAgcmVzb3VyY2VJZCwgcmVjb3JkSWRzLCBhY3Rpb25OYW1lLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgc2V0UmVjb3JkcyhyZXNwb25zZS5kYXRhLnJlY29yZHMpXHJcbiAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgYWRkTm90aWNlKHtcclxuICAgICAgICBtZXNzYWdlOiB0cmFuc2xhdGVNZXNzYWdlKCdlcnJvckZldGNoaW5nUmVjb3JkcycsIHJlc291cmNlSWQpLFxyXG4gICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgIH0pXHJcbiAgICAgIHRocm93IGVycm9yXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoUmVjb3JkcygpXHJcbiAgfSwgW21hdGNoLnBhcmFtcy5yZXNvdXJjZUlkLCBtYXRjaC5wYXJhbXMuYWN0aW9uTmFtZV0pXHJcblxyXG4gIGlmICghcmVzb3VyY2UpIHtcclxuICAgIHJldHVybiAoPE5vUmVzb3VyY2VFcnJvciByZXNvdXJjZUlkPXtyZXNvdXJjZUlkfSAvPilcclxuICB9XHJcblxyXG4gIGlmICghcmVjb3JkcyAmJiAhbG9hZGluZykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEVycm9yTWVzc2FnZUJveCB0aXRsZT1cIk5vIHJlY29yZHNcIj5cclxuICAgICAgICA8cD57dHJhbnNsYXRlTWVzc2FnZSgnbm9SZWNvcmRzU2VsZWN0ZWQnLCByZXNvdXJjZUlkKX08L3A+XHJcbiAgICAgIDwvRXJyb3JNZXNzYWdlQm94PlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgYWN0aW9uID0gZ2V0QnVsa0FjdGlvbnNGcm9tUmVjb3JkcyhyZWNvcmRzIHx8IFtdKS5maW5kKHIgPT4gci5uYW1lID09PSBhY3Rpb25OYW1lKVxyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgY29uc3QgYWN0aW9uRnJvbVJlc291cmNlID0gcmVzb3VyY2UuYWN0aW9ucy5maW5kKHIgPT4gci5uYW1lID09PSBhY3Rpb25OYW1lKVxyXG4gICAgcmV0dXJuIGFjdGlvbkZyb21SZXNvdXJjZT8uc2hvd0luRHJhd2VyID8gKDxEcmF3ZXJQb3J0YWw+PExvYWRlciAvPjwvRHJhd2VyUG9ydGFsPikgOiA8TG9hZGVyIC8+XHJcbiAgfVxyXG5cclxuICBpZiAoIWFjdGlvbikge1xyXG4gICAgcmV0dXJuICg8Tm9BY3Rpb25FcnJvciByZXNvdXJjZUlkPXtyZXNvdXJjZUlkfSBhY3Rpb25OYW1lPXthY3Rpb25OYW1lfSAvPilcclxuICB9XHJcblxyXG4gIGlmIChhY3Rpb24uc2hvd0luRHJhd2VyKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RHJhd2VyUG9ydGFsIHdpZHRoPXthY3Rpb24uY29udGFpbmVyV2lkdGh9PlxyXG4gICAgICAgIDxCYXNlQWN0aW9uQ29tcG9uZW50XHJcbiAgICAgICAgICBhY3Rpb249e2FjdGlvbiBhcyBBY3Rpb25KU09OfVxyXG4gICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxyXG4gICAgICAgICAgcmVjb3Jkcz17cmVjb3Jkc31cclxuICAgICAgICAvPlxyXG4gICAgICA8L0RyYXdlclBvcnRhbD5cclxuICAgIClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8V3JhcHBlciB3aWR0aD17YWN0aW9uLmNvbnRhaW5lcldpZHRofT5cclxuICAgICAgeyFhY3Rpb24/LnNob3dJbkRyYXdlciA/IChcclxuICAgICAgICA8QWN0aW9uSGVhZGVyXHJcbiAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XHJcbiAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogJyd9XHJcbiAgICAgIDxCYXNlQWN0aW9uQ29tcG9uZW50XHJcbiAgICAgICAgYWN0aW9uPXthY3Rpb24gYXMgQWN0aW9uSlNPTn1cclxuICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XHJcbiAgICAgICAgcmVjb3Jkcz17cmVjb3Jkc31cclxuICAgICAgLz5cclxuICAgIDwvV3JhcHBlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1bGtBY3Rpb25cclxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5cclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi4vYXBwL2Vycm9yLWJvdW5kYXJ5J1xyXG5pbXBvcnQgeyBSZWR1eFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXHJcbmltcG9ydCBFcnJvck1lc3NhZ2VCb3ggZnJvbSAnLi4vYXBwL2Vycm9yLW1lc3NhZ2UnXHJcblxyXG5kZWNsYXJlIGNvbnN0IEFkbWluQnJvOiB7XHJcbiAgVXNlckNvbXBvbmVudHM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uQ29tcG9uZW50PjtcclxufVxyXG5cclxudHlwZSBTdGF0ZSA9IHtcclxuICBpc0NsaWVudDogYm9vbGVhbjtcclxufVxyXG5cclxudHlwZSBQcm9wc0Zyb21TdGF0ZSA9IHtcclxuICBwYWdlczogUmVkdXhTdGF0ZVsncGFnZXMnXTtcclxufVxyXG5cclxudHlwZSBQcm9wcyA9IFByb3BzRnJvbVN0YXRlICYgUm91dGVDb21wb25lbnRQcm9wczx7XHJcbiAgcGFnZU5hbWU6IHN0cmluZztcclxufT5cclxuXHJcbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XHJcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlzQ2xpZW50OiBmYWxzZSxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQ2xpZW50OiB0cnVlIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcclxuICAgIGNvbnN0IHsgcGFnZXMsIG1hdGNoIH0gPSB0aGlzLnByb3BzXHJcbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gbWF0Y2hcclxuICAgIGNvbnN0IHsgcGFnZU5hbWUgfSA9IHBhcmFtc1xyXG4gICAgY29uc3QgeyBpc0NsaWVudCB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gcGFnZXMuZmluZChwYWdlID0+IHBhZ2UubmFtZSA9PT0gcGFnZU5hbWUpXHJcblxyXG4gICAgaWYgKCFjdXJyZW50UGFnZSkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFcnJvck1lc3NhZ2VCb3ggdGl0bGU9XCJUaGVyZSBpcyBubyBwYWdlIG9mIGdpdmVuIG5hbWVcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICBQYWdlOlxyXG4gICAgICAgICAgICA8Yj57YCBcIiR7cGFnZU5hbWV9XCIgYH08L2I+XHJcbiAgICAgICAgICAgIGRvZXMgbm90IGV4aXN0LlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvRXJyb3JNZXNzYWdlQm94PlxyXG4gICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgQ29tcG9uZW50ID0gQWRtaW5Ccm8uVXNlckNvbXBvbmVudHNbY3VycmVudFBhZ2UuY29tcG9uZW50XVxyXG5cclxuICAgIGlmICghQ29tcG9uZW50IHx8ICFpc0NsaWVudCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxFcnJvck1lc3NhZ2VCb3ggdGl0bGU9XCJObyBjb21wb25lbnQgc3BlY2lmaWVkXCI+XHJcbiAgICAgICAgICA8cD5Zb3UgaGF2ZSB0byBzcGVjaWZ5IGNvbXBvbmVudCB3aGljaCB3aWxsIHJlbmRlciB0aGlzIFBhZ2U8L3A+XHJcbiAgICAgICAgPC9FcnJvck1lc3NhZ2VCb3g+XHJcbiAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RXJyb3JCb3VuZGFyeT5cclxuICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgIDwvRXJyb3JCb3VuZGFyeT5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUmVkdXhTdGF0ZSk6IFByb3BzRnJvbVN0YXRlID0+ICh7XHJcbiAgcGFnZXM6IHN0YXRlLnBhZ2VzLFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFBhZ2UpXHJcbiIsImV4cG9ydCBkZWZhdWx0IChxdWVyeVN0cmluZzogc3RyaW5nKTogYm9vbGVhbiA9PiB7XHJcbiAgY29uc3QgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5U3RyaW5nKVxyXG4gIGZvciAoY29uc3Qga2V5IG9mIHF1ZXJ5LmtleXMoKSkge1xyXG4gICAgaWYgKGtleS5tYXRjaCgnZmlsdGVycy4nKSkge1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gZmFsc2VcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZU1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcclxuaW1wb3J0IHsgQm94IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xyXG5cclxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IEJhc2VBY3Rpb24gZnJvbSAnLi4vYXBwL2Jhc2UtYWN0aW9uLWNvbXBvbmVudCdcclxuaW1wb3J0IEZpbHRlckRyYXdlciBmcm9tICcuLi9hcHAvZmlsdGVyLWRyYXdlcidcclxuaW1wb3J0IHF1ZXJ5SGFzRmlsdGVyIGZyb20gJy4vdXRpbHMvcXVlcnktaGFzLWZpbHRlcidcclxuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xyXG5pbXBvcnQgeyBOb1Jlc291cmNlRXJyb3IsIE5vQWN0aW9uRXJyb3IgfSBmcm9tICcuLi9hcHAvZXJyb3ItbWVzc2FnZSdcclxuaW1wb3J0IFZpZXdIZWxwZXJzLCB7XHJcbiAgUmVzb3VyY2VBY3Rpb25QYXJhbXMsIFJlY29yZEFjdGlvblBhcmFtcywgQnVsa0FjdGlvblBhcmFtcyxcclxufSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXHJcbmltcG9ydCB7IEFjdGlvbkhlYWRlciB9IGZyb20gJy4uL2FwcCdcclxuaW1wb3J0IHsgQWN0aW9uSlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcclxuXHJcbnR5cGUgUHJvcHNGcm9tU3RhdGUgPSB7XHJcbiAgcmVzb3VyY2VzOiBBcnJheTxSZXNvdXJjZUpTT04+O1xyXG59XHJcblxyXG50eXBlIFByb3BzID0gUHJvcHNGcm9tU3RhdGUgJiBSb3V0ZUNvbXBvbmVudFByb3BzPFN0cmluZ2lmaWVkQnVsazxSZXNvdXJjZUFjdGlvblBhcmFtcz4+XHJcblxyXG50eXBlIFN0cmluZ2lmaWVkQnVsazxUPiA9IE9taXQ8VCwgJ3JlY29yZHNJZCc+ICYge1xyXG4gIHJlY29yZHNJZHM/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGdldEFjdGlvbiA9IChyZXNvdXJjZTogUmVzb3VyY2VKU09OKTogQWN0aW9uSlNPTiB8IHVuZGVmaW5lZCA9PiB7XHJcbiAgY29uc3QgaCA9IG5ldyBWaWV3SGVscGVycygpXHJcblxyXG4gIGNvbnN0IHJlc291cmNlSWQgPSAnOnJlc291cmNlSWQnXHJcbiAgY29uc3QgYWN0aW9uTmFtZSA9ICc6YWN0aW9uTmFtZSdcclxuICBjb25zdCByZWNvcmRJZCA9ICc6cmVjb3JkSWQnXHJcblxyXG4gIGNvbnN0IHJlY29yZEFjdGlvblVybCA9IGgucmVjb3JkQWN0aW9uVXJsKHsgcmVzb3VyY2VJZCwgcmVjb3JkSWQsIGFjdGlvbk5hbWUgfSlcclxuICBjb25zdCByZXNvdXJjZUFjdGlvblVybCA9IGgucmVzb3VyY2VBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lIH0pXHJcbiAgY29uc3QgYnVsa0FjdGlvblVybCA9IGguYnVsa0FjdGlvblVybCh7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUgfSlcclxuXHJcbiAgY29uc3QgcmVzb3VyY2VBY3Rpb25NYXRjaCA9IHVzZVJvdXRlTWF0Y2g8UmVzb3VyY2VBY3Rpb25QYXJhbXM+KHJlc291cmNlQWN0aW9uVXJsKVxyXG4gIGNvbnN0IHJlY29yZEFjdGlvbk1hdGNoID0gdXNlUm91dGVNYXRjaDxSZWNvcmRBY3Rpb25QYXJhbXM+KHJlY29yZEFjdGlvblVybClcclxuICBjb25zdCBidWxrQWN0aW9uTWF0Y2ggPSB1c2VSb3V0ZU1hdGNoPFBpY2s8QnVsa0FjdGlvblBhcmFtcywgJ2FjdGlvbk5hbWUnIHwgJ3Jlc291cmNlSWQnPj4oYnVsa0FjdGlvblVybClcclxuXHJcbiAgY29uc3QgYWN0aW9uID0gcmVzb3VyY2VBY3Rpb25NYXRjaD8ucGFyYW1zLmFjdGlvbk5hbWVcclxuICAgIHx8IHJlY29yZEFjdGlvbk1hdGNoPy5wYXJhbXMuYWN0aW9uTmFtZVxyXG4gICAgfHwgYnVsa0FjdGlvbk1hdGNoPy5wYXJhbXMuYWN0aW9uTmFtZVxyXG5cclxuICByZXR1cm4gYWN0aW9uID8gcmVzb3VyY2UuYWN0aW9ucy5maW5kKGEgPT4gYS5uYW1lID09PSBhY3Rpb24pIDogdW5kZWZpbmVkXHJcbn1cclxuXHJcbmNvbnN0IFJlc291cmNlQWN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHJlc291cmNlcywgbWF0Y2gsIGxvY2F0aW9uIH0gPSBwcm9wc1xyXG4gIGNvbnN0IHsgcmVzb3VyY2VJZCB9ID0gbWF0Y2gucGFyYW1zXHJcblxyXG4gIGNvbnN0IFtmaWx0ZXJWaXNpYmxlLCBzZXRGaWxlclZpc2libGVdID0gdXNlU3RhdGUocXVlcnlIYXNGaWx0ZXIobG9jYXRpb24uc2VhcmNoKSlcclxuICBjb25zdCBbdGFnLCBzZXRUYWddID0gdXNlU3RhdGUoJycpXHJcblxyXG4gIGNvbnN0IHJlc291cmNlID0gcmVzb3VyY2VzLmZpbmQociA9PiByLmlkID09PSByZXNvdXJjZUlkKVxyXG4gIGlmICghcmVzb3VyY2UpIHtcclxuICAgIHJldHVybiAoPE5vUmVzb3VyY2VFcnJvciByZXNvdXJjZUlkPXtyZXNvdXJjZUlkfSAvPilcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlYWxFbmRBY3Rpb24gPSBnZXRBY3Rpb24ocmVzb3VyY2UpXHJcbiAgaWYgKHJlYWxFbmRBY3Rpb24gJiYgIXJlYWxFbmRBY3Rpb24uc2hvd0luRHJhd2VyKSB7XHJcbiAgICByZXR1cm4gbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3QgbGlzdEFjdGlvbk5hbWUgPSAnbGlzdCdcclxuICBjb25zdCBsaXN0QWN0aW9uID0gcmVzb3VyY2UucmVzb3VyY2VBY3Rpb25zLmZpbmQociA9PiByLm5hbWUgPT09IGxpc3RBY3Rpb25OYW1lKVxyXG5cclxuICBpZiAoIWxpc3RBY3Rpb24pIHtcclxuICAgIHJldHVybiAoPE5vQWN0aW9uRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gYWN0aW9uTmFtZT17bGlzdEFjdGlvbk5hbWV9IC8+KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdG9nZ2xlRmlsdGVyID0gbGlzdEFjdGlvbi5zaG93RmlsdGVyXHJcbiAgICA/ICgoKTogdm9pZCA9PiBzZXRGaWxlclZpc2libGUoIWZpbHRlclZpc2libGUpKVxyXG4gICAgOiB1bmRlZmluZWRcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggdmFyaWFudD1cImdyZXlcIiB3aWR0aD17bGlzdEFjdGlvbi5jb250YWluZXJXaWR0aH0gbXg9XCJhdXRvXCI+XHJcbiAgICAgIDxBY3Rpb25IZWFkZXJcclxuICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XHJcbiAgICAgICAgYWN0aW9uPXtsaXN0QWN0aW9ufVxyXG4gICAgICAgIHRhZz17dGFnfVxyXG4gICAgICAgIHRvZ2dsZUZpbHRlcj17dG9nZ2xlRmlsdGVyfVxyXG4gICAgICAvPlxyXG4gICAgICA8QmFzZUFjdGlvbiBhY3Rpb249e2xpc3RBY3Rpb259IHJlc291cmNlPXtyZXNvdXJjZX0gc2V0VGFnPXtzZXRUYWd9IC8+XHJcbiAgICAgIHtsaXN0QWN0aW9uLnNob3dGaWx0ZXIgPyAoXHJcbiAgICAgICAgPEZpbHRlckRyYXdlclxyXG4gICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxyXG4gICAgICAgICAgaXNWaXNpYmxlPXtmaWx0ZXJWaXNpYmxlfVxyXG4gICAgICAgICAgdG9nZ2xlRmlsdGVyPXsoKTogdm9pZCA9PiB7IHNldEZpbGVyVmlzaWJsZSghZmlsdGVyVmlzaWJsZSkgfX1cclxuICAgICAgICAvPlxyXG4gICAgICApIDogJyd9XHJcbiAgICA8L0JveD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUmVkdXhTdGF0ZSk6IFByb3BzRnJvbVN0YXRlID0+ICh7XHJcbiAgcmVzb3VyY2VzOiBzdGF0ZS5yZXNvdXJjZXMsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUmVzb3VyY2VBY3Rpb24pXHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWNoaWxkcmVuLXByb3AgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBCb3gsIE92ZXJsYXksIFJlc2V0IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBWaWV3SGVscGVycyBmcm9tICcuLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL2FwcC9zaWRlYmFyL3NpZGViYXInXG5pbXBvcnQgVG9wQmFyIGZyb20gJy4vYXBwL3RvcC1iYXInXG5pbXBvcnQgTm90aWNlIGZyb20gJy4vYXBwL25vdGljZSdcblxuaW1wb3J0IHtcbiAgRGFzaGJvYXJkLCBSZXNvdXJjZUFjdGlvbiwgUmVjb3JkQWN0aW9uLCBQYWdlLCBCdWxrQWN0aW9uLCBSZXNvdXJjZSxcbn0gZnJvbSAnLi9yb3V0ZXMnXG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gIGh0bWwsIGJvZHksICNhcHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmNvbG9ycy5ncmV5MTAwfVxuICB9XG5gXG5cbmNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbc2lkZWJhclZpc2libGUsIHRvZ2dsZVNpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNpZGViYXJWaXNpYmxlKSB7IHRvZ2dsZVNpZGViYXIoZmFsc2UpIH1cbiAgfSwgW2xvY2F0aW9uXSlcblxuICBjb25zdCByZXNvdXJjZUlkID0gJzpyZXNvdXJjZUlkJ1xuICBjb25zdCBhY3Rpb25OYW1lID0gJzphY3Rpb25OYW1lJ1xuICBjb25zdCByZWNvcmRJZCA9ICc6cmVjb3JkSWQnXG4gIGNvbnN0IHBhZ2VOYW1lID0gJzpwYWdlTmFtZSdcblxuICBjb25zdCByZWNvcmRBY3Rpb25VcmwgPSBoLnJlY29yZEFjdGlvblVybCh7IHJlc291cmNlSWQsIHJlY29yZElkLCBhY3Rpb25OYW1lIH0pXG4gIGNvbnN0IHJlc291cmNlQWN0aW9uVXJsID0gaC5yZXNvdXJjZUFjdGlvblVybCh7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUgfSlcbiAgY29uc3QgYnVsa0FjdGlvblVybCA9IGguYnVsa0FjdGlvblVybCh7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUgfSlcbiAgY29uc3QgcmVzb3VyY2VVcmwgPSBoLnJlc291cmNlVXJsKHsgcmVzb3VyY2VJZCB9KVxuICBjb25zdCBwYWdlVXJsID0gaC5wYWdlVXJsKHBhZ2VOYW1lKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFJlc2V0IC8+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxCb3ggaGVpZ2h0PVwiMTAwJVwiIGZsZXg+XG4gICAgICAgIHtzaWRlYmFyVmlzaWJsZSA/IChcbiAgICAgICAgICA8T3ZlcmxheVxuICAgICAgICAgICAgb25DbGljaz17KCk6IHZvaWQgPT4gdG9nZ2xlU2lkZWJhcighc2lkZWJhclZpc2libGUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8U2lkZWJhciBpc1Zpc2libGU9e3NpZGViYXJWaXNpYmxlfSAvPlxuICAgICAgICA8Qm94IGZsZXggZmxleEdyb3c9ezF9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBvdmVyZmxvd1k9XCJhdXRvXCIgYmc9XCJiZ1wiPlxuICAgICAgICAgIDxUb3BCYXIgdG9nZ2xlU2lkZWJhcj17KCk6IHZvaWQgPT4gdG9nZ2xlU2lkZWJhcighc2lkZWJhclZpc2libGUpfSAvPlxuICAgICAgICAgIDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIHRvcD17MH0gekluZGV4PVwiMjAwMFwiPlxuICAgICAgICAgICAgPE5vdGljZSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD17aC5kYXNoYm9hcmRVcmwoKX0gZXhhY3QgY29tcG9uZW50PXtEYXNoYm9hcmR9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD17cmVzb3VyY2VVcmx9IGNvbXBvbmVudD17UmVzb3VyY2V9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD17cGFnZVVybH0gZXhhY3QgY29tcG9uZW50PXtQYWdlfSAvPlxuICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD17cmVjb3JkQWN0aW9uVXJsfSBjb21wb25lbnQ9e1JlY29yZEFjdGlvbn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtyZXNvdXJjZUFjdGlvblVybH0gY29tcG9uZW50PXtSZXNvdXJjZUFjdGlvbn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtidWxrQWN0aW9uVXJsfSBjb21wb25lbnQ9e0J1bGtBY3Rpb259IC8+XG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwiaW1wb3J0IHsgQXNzZXRzIH0gZnJvbSAnLi4vLi4vLi4vYWRtaW4tYnJvLW9wdGlvbnMuaW50ZXJmYWNlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEFTU0VUU19JTklUSUFMSVpFID0gJ0FTU0VUU19JTklUSUFMSVpFJ1xyXG5cclxuZXhwb3J0IHR5cGUgaW5pdGlhbGl6ZUFzc2V0c1Jlc3BvbnNlID0ge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBkYXRhOiBBc3NldHM7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplQXNzZXRzID0gKGRhdGE6IEFzc2V0cyk6IGluaXRpYWxpemVBc3NldHNSZXNwb25zZSA9PiAoe1xyXG4gIHR5cGU6IEFTU0VUU19JTklUSUFMSVpFLFxyXG4gIGRhdGEsXHJcbn0pXHJcbiIsImltcG9ydCB7IEJyYW5kaW5nT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2FkbWluLWJyby1vcHRpb25zLmludGVyZmFjZSdcclxuXHJcbmV4cG9ydCBjb25zdCBCUkFORElOR19JTklUSUFMSVpFID0gJ0JSQU5ESU5HX0lOSVRJQUxJWkUnXHJcblxyXG5leHBvcnQgdHlwZSBJbml0aWFsaXplQnJhbmRpbmdSZXNwb25zZSA9IHtcclxuICB0eXBlOiB0eXBlb2YgQlJBTkRJTkdfSU5JVElBTElaRTtcclxuICBkYXRhOiBCcmFuZGluZ09wdGlvbnM7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplQnJhbmRpbmcgPSAoZGF0YTogQnJhbmRpbmdPcHRpb25zKTogSW5pdGlhbGl6ZUJyYW5kaW5nUmVzcG9uc2UgPT4gKHtcclxuICB0eXBlOiBCUkFORElOR19JTklUSUFMSVpFLFxyXG4gIGRhdGEsXHJcbn0pXHJcbiIsImltcG9ydCB7IERhc2hib2FyZEluU3RhdGUgfSBmcm9tICcuLi9zdG9yZSdcclxuXHJcbmV4cG9ydCBjb25zdCBEQVNIQk9BUkRfSU5JVElBTElaRSA9ICdEQVNIQk9BUkRfSU5JVElBTElaRSdcclxuXHJcbmV4cG9ydCB0eXBlIEluaXRpYWxpemVEYXNoYm9hcmRSZXNwb25zZSA9IHtcclxuICB0eXBlOiB0eXBlb2YgREFTSEJPQVJEX0lOSVRJQUxJWkU7XHJcbiAgZGF0YTogRGFzaGJvYXJkSW5TdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVEYXNoYm9hcmQgPSAoZGF0YTogRGFzaGJvYXJkSW5TdGF0ZSk6IEluaXRpYWxpemVEYXNoYm9hcmRSZXNwb25zZSA9PiAoe1xyXG4gIHR5cGU6IERBU0hCT0FSRF9JTklUSUFMSVpFLFxyXG4gIGRhdGEsXHJcbn0pXHJcbiIsImltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uLy4uLy4uL2xvY2FsZS9jb25maWcnXHJcblxyXG5leHBvcnQgY29uc3QgTE9DQUxFX0lOSVRJQUxJWkUgPSAnTE9DQUxFX0lOSVRJQUxJWkUnXHJcblxyXG5leHBvcnQgdHlwZSBJbml0aWFsaXplTG9jYWxlUmVzcG9uc2UgPSB7XHJcbiAgdHlwZTogdHlwZW9mIExPQ0FMRV9JTklUSUFMSVpFO1xyXG4gIGRhdGE6IExvY2FsZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVMb2NhbGUgPSAoZGF0YTogTG9jYWxlKTogSW5pdGlhbGl6ZUxvY2FsZVJlc3BvbnNlID0+ICh7XHJcbiAgdHlwZTogTE9DQUxFX0lOSVRJQUxJWkUsXHJcbiAgZGF0YSxcclxufSlcclxuIiwiaW1wb3J0IHsgQWRtaW5QYWdlIH0gZnJvbSAnLi4vLi4vLi4vYWRtaW4tYnJvLW9wdGlvbnMuaW50ZXJmYWNlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBBR0VTX0lOSVRJQUxJWkUgPSAnUEFHRVNfSU5JVElBTElaRSdcclxuXHJcbmV4cG9ydCB0eXBlIEluaXRpYWxpemVQYWdlc1Jlc3BvbnNlID0ge1xyXG4gIHR5cGU6IHR5cGVvZiBQQUdFU19JTklUSUFMSVpFO1xyXG4gIGRhdGE6IEFycmF5PEFkbWluUGFnZT47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplUGFnZXMgPSAoZGF0YTogQXJyYXk8QWRtaW5QYWdlPik6IEluaXRpYWxpemVQYWdlc1Jlc3BvbnNlID0+ICh7XHJcbiAgdHlwZTogUEFHRVNfSU5JVElBTElaRSxcclxuICBkYXRhLFxyXG59KVxyXG4iLCJpbXBvcnQgeyBQYXRocyB9IGZyb20gJy4uL3N0b3JlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFBBVEhTX0lOSVRJQUxJWkUgPSAnUEFUSFNfSU5JVElBTElaRSdcclxuXHJcbmV4cG9ydCB0eXBlIEluaXRpYWxpemVQYXRoc1Jlc3BvbnNlID0ge1xyXG4gIHR5cGU6IHR5cGVvZiBQQVRIU19JTklUSUFMSVpFO1xyXG4gIGRhdGE6IFBhdGhzO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVBhdGhzID0gKGRhdGE6IFBhdGhzKTogSW5pdGlhbGl6ZVBhdGhzUmVzcG9uc2UgPT4gKHtcclxuICB0eXBlOiBQQVRIU19JTklUSUFMSVpFLFxyXG4gIGRhdGEsXHJcbn0pXHJcbiIsImltcG9ydCB7IFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXHJcblxyXG5leHBvcnQgY29uc3QgUkVTT1VSQ0VTX0lOSVRJQUxJWkUgPSAnUkVTT1VSQ0VTX0lOSVRJQUxJWkUnXHJcblxyXG5leHBvcnQgdHlwZSBJbml0aWFsaXplUmVzb3VyY2VzUmVzcG9uc2UgPSB7XHJcbiAgdHlwZTogdHlwZW9mIFJFU09VUkNFU19JTklUSUFMSVpFO1xyXG4gIGRhdGE6IEFycmF5PFJlc291cmNlSlNPTj47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsaXplUmVzb3VyY2VzID0gKGRhdGE6IEFycmF5PFJlc291cmNlSlNPTj4pOiBJbml0aWFsaXplUmVzb3VyY2VzUmVzcG9uc2UgPT4gKHtcclxuICB0eXBlOiBSRVNPVVJDRVNfSU5JVElBTElaRSxcclxuICBkYXRhLFxyXG59KVxyXG4iLCJpbXBvcnQgeyBWZXJzaW9uUHJvcHMgfSBmcm9tICcuLi8uLi8uLi9hZG1pbi1icm8tb3B0aW9ucy5pbnRlcmZhY2UnXHJcblxyXG5leHBvcnQgY29uc3QgVkVSU0lPTlNfSU5JVElBTElaRSA9ICdWRVJTSU9OU19JTklUSUFMSVpFJ1xyXG5cclxuZXhwb3J0IHR5cGUgSW5pdGlhbGl6ZVZlcnNpb25zUmVzcG9uc2UgPSB7XHJcbiAgdHlwZTogdHlwZW9mIFZFUlNJT05TX0lOSVRJQUxJWkU7XHJcbiAgZGF0YTogVmVyc2lvblByb3BzO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVZlcnNpb25zID0gKGRhdGE6IFZlcnNpb25Qcm9wcyk6IEluaXRpYWxpemVWZXJzaW9uc1Jlc3BvbnNlID0+ICh7XHJcbiAgdHlwZTogVkVSU0lPTlNfSU5JVElBTElaRSxcclxuICBkYXRhLFxyXG59KVxyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUgKi9cclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xyXG5pbXBvcnQge1xyXG4gIFZFUlNJT05TX0lOSVRJQUxJWkUsXHJcbiAgU0VTU0lPTl9JTklUSUFMSVpFLFxyXG4gIERBU0hCT0FSRF9JTklUSUFMSVpFLFxyXG4gIFBBVEhTX0lOSVRJQUxJWkUsXHJcbiAgQVNTRVRTX0lOSVRJQUxJWkUsXHJcbiAgQlJBTkRJTkdfSU5JVElBTElaRSxcclxuICBMT0NBTEVfSU5JVElBTElaRSxcclxuICBQQUdFU19JTklUSUFMSVpFLFxyXG4gIFJFU09VUkNFU19JTklUSUFMSVpFLFxyXG4gIFNFVF9OT1RJQ0VfUFJPR1JFU1MsXHJcbiAgRFJPUF9OT1RJQ0UsXHJcbiAgQUREX05PVElDRSB9IGZyb20gJy4vYWN0aW9ucydcclxuXHJcbmltcG9ydCB7IEFzc2V0cywgQnJhbmRpbmdPcHRpb25zLCBWZXJzaW9uUHJvcHMgfSBmcm9tICcuLi8uLi9hZG1pbi1icm8tb3B0aW9ucy5pbnRlcmZhY2UnXHJcbmltcG9ydCB7IFBhZ2VKU09OLCBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xyXG5pbXBvcnQgeyBERUZBVUxUX1BBVEhTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xyXG5pbXBvcnQgeyBDdXJyZW50QWRtaW4gfSBmcm9tICcuLi8uLi9jdXJyZW50LWFkbWluLmludGVyZmFjZSdcclxuaW1wb3J0IHsgTG9jYWxlIH0gZnJvbSAnLi4vLi4vbG9jYWxlL2NvbmZpZydcclxuaW1wb3J0IHsgTm90aWNlTWVzc2FnZSB9IGZyb20gJy4uL2hvYy93aXRoLW5vdGljZSdcclxuXHJcbmV4cG9ydCB0eXBlIERhc2hib2FyZEluU3RhdGUgPSB7XHJcbiAgY29tcG9uZW50Pzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBOb3RpY2VNZXNzYWdlSW5TdGF0ZSA9IE5vdGljZU1lc3NhZ2UgJiB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgdHlwZTogTm90aWNlTWVzc2FnZVsndHlwZSddO1xyXG4gIHByb2dyZXNzOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFBhdGhzID0ge1xyXG4gIHJvb3RQYXRoOiBzdHJpbmc7XHJcbiAgbG9nb3V0UGF0aDogc3RyaW5nO1xyXG4gIGxvZ2luUGF0aDogc3RyaW5nO1xyXG4gIGFzc2V0c0NETj86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgcmVzb3VyY2VzUmVkdWNlciA9IChcclxuICBzdGF0ZTogQXJyYXk8UmVzb3VyY2VKU09OPiA9IFtdLFxyXG4gIGFjdGlvbjoge1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gICAgZGF0YTogQXJyYXk8UmVzb3VyY2VKU09OPjtcclxuICB9LFxyXG4pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgY2FzZSBSRVNPVVJDRVNfSU5JVElBTElaRTpcclxuICAgIHJldHVybiBhY3Rpb24uZGF0YVxyXG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcGFnZXNSZWR1Y2VyID0gKFxyXG4gIHN0YXRlOiBBcnJheTxQYWdlSlNPTj4gPSBbXSxcclxuICBhY3Rpb246IHtcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGRhdGE6IEFycmF5PFBhZ2VKU09OPjtcclxuICB9LFxyXG4pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgY2FzZSBQQUdFU19JTklUSUFMSVpFOlxyXG4gICAgcmV0dXJuIGFjdGlvbi5kYXRhXHJcbiAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBsb2NhbGVzUmVkdWNlciA9IChcclxuICBzdGF0ZTogTG9jYWxlID0geyBsYW5ndWFnZTogJ2VuJywgdHJhbnNsYXRpb25zOiB7fSB9IGFzIExvY2FsZSxcclxuICBhY3Rpb246IHtcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGRhdGE6IExvY2FsZTtcclxuICB9LFxyXG4pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgY2FzZSBMT0NBTEVfSU5JVElBTElaRTpcclxuICAgIHJldHVybiBhY3Rpb24uZGF0YVxyXG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYnJhbmRpbmdSZWR1Y2VyID0gKHN0YXRlID0ge30sIGFjdGlvbjoge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBkYXRhOiBCcmFuZGluZ09wdGlvbnM7XHJcbn0pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgY2FzZSBCUkFORElOR19JTklUSUFMSVpFOlxyXG4gICAgcmV0dXJuIGFjdGlvbi5kYXRhXHJcbiAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhc3NldHNSZWR1Y2VyID0gKHN0YXRlID0ge30sIGFjdGlvbjoge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBkYXRhOiBBc3NldHM7XHJcbn0pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgY2FzZSBBU1NFVFNfSU5JVElBTElaRTpcclxuICAgIHJldHVybiBhY3Rpb24uZGF0YVxyXG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcGF0aHNSZWR1Y2VyID0gKFxyXG4gIHN0YXRlOiBQYXRocyA9IERFRkFVTFRfUEFUSFMsXHJcbiAgYWN0aW9uOiB7dHlwZTogc3RyaW5nOyBkYXRhOiBQYXRoc30sXHJcbik6IFBhdGhzID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgY2FzZSBQQVRIU19JTklUSUFMSVpFOlxyXG4gICAgcmV0dXJuIGFjdGlvbi5kYXRhXHJcbiAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkYXNoYm9hcmRSZWR1Y2VyID0gKHN0YXRlID0ge30sIGFjdGlvbjoge1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBkYXRhOiBEYXNoYm9hcmRJblN0YXRlO1xyXG59KTogRGFzaGJvYXJkSW5TdGF0ZSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gIGNhc2UgREFTSEJPQVJEX0lOSVRJQUxJWkU6XHJcbiAgICByZXR1cm4gYWN0aW9uLmRhdGFcclxuICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHNlc3Npb25SZWR1Y2VyID0gKFxyXG4gIHN0YXRlOiBDdXJyZW50QWRtaW4gfCBudWxsID0gbnVsbCxcclxuICBhY3Rpb246IHtcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGRhdGE6IEN1cnJlbnRBZG1pbiB8IG51bGw7XHJcbiAgfSxcclxuKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gIGNhc2UgU0VTU0lPTl9JTklUSUFMSVpFOlxyXG4gICAgcmV0dXJuIGFjdGlvbi5kYXRhXHJcbiAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB2ZXJzaW9uc1JlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uOiB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGRhdGE6IFZlcnNpb25Qcm9wcztcclxufSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICBjYXNlIFZFUlNJT05TX0lOSVRJQUxJWkU6XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBhZG1pbjogYWN0aW9uLmRhdGEuYWRtaW4sXHJcbiAgICAgIGFwcDogYWN0aW9uLmRhdGEuYXBwLFxyXG4gICAgfVxyXG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxudHlwZSBOb3RpY2VBcmdzID0geyBub3RpY2VJZDogc3RyaW5nOyBwcm9ncmVzczogbnVtYmVyIH1cclxuXHJcbmNvbnN0IG5vdGljZXNSZWR1Y2VyID0gKHN0YXRlOiBBcnJheTxOb3RpY2VNZXNzYWdlSW5TdGF0ZT4gPSBbXSwgYWN0aW9uOiB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIGRhdGE6IE5vdGljZU1lc3NhZ2VJblN0YXRlIHwgTm90aWNlQXJncztcclxufSk6IEFycmF5PE5vdGljZU1lc3NhZ2VJblN0YXRlPiA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gIGNhc2UgQUREX05PVElDRToge1xyXG4gICAgY29uc3Qgbm90aWNlcyA9IFthY3Rpb24uZGF0YSBhcyBOb3RpY2VNZXNzYWdlSW5TdGF0ZV1cclxuICAgIHJldHVybiBub3RpY2VzXHJcbiAgfVxyXG4gIGNhc2UgRFJPUF9OT1RJQ0U6IHtcclxuICAgIHJldHVybiBzdGF0ZS5maWx0ZXIobm90aWNlID0+IG5vdGljZS5pZCAhPT0gKGFjdGlvbi5kYXRhIGFzIE5vdGljZUFyZ3MpLm5vdGljZUlkKVxyXG4gIH1cclxuICBjYXNlIFNFVF9OT1RJQ0VfUFJPR1JFU1M6IHtcclxuICAgIHJldHVybiBzdGF0ZS5tYXAobm90aWNlID0+ICh7XHJcbiAgICAgIC4uLm5vdGljZSxcclxuICAgICAgcHJvZ3Jlc3M6IG5vdGljZS5pZCA9PT0gKGFjdGlvbi5kYXRhIGFzIE5vdGljZUFyZ3MpLm5vdGljZUlkXHJcbiAgICAgICAgPyBhY3Rpb24uZGF0YS5wcm9ncmVzc1xyXG4gICAgICAgIDogbm90aWNlLnByb2dyZXNzLFxyXG4gICAgfSkpXHJcbiAgfVxyXG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUmVkdXhTdGF0ZSA9IHtcclxuICByZXNvdXJjZXM6IEFycmF5PFJlc291cmNlSlNPTj47XHJcbiAgYnJhbmRpbmc6IEJyYW5kaW5nT3B0aW9ucztcclxuICBhc3NldHM6IEFzc2V0cztcclxuICBwYXRoczogUGF0aHM7XHJcbiAgc2Vzc2lvbjogQ3VycmVudEFkbWluIHwgbnVsbDtcclxuICBkYXNoYm9hcmQ6IERhc2hib2FyZEluU3RhdGU7XHJcbiAgbm90aWNlczogQXJyYXk8Tm90aWNlTWVzc2FnZUluU3RhdGU+O1xyXG4gIHZlcnNpb25zOiBWZXJzaW9uUHJvcHM7XHJcbiAgcGFnZXM6IEFycmF5PFBhZ2VKU09OPjtcclxuICBsb2NhbGU6IExvY2FsZTtcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2VyczxSZWR1eFN0YXRlPih7XHJcbiAgcmVzb3VyY2VzOiByZXNvdXJjZXNSZWR1Y2VyLFxyXG4gIGJyYW5kaW5nOiBicmFuZGluZ1JlZHVjZXIsXHJcbiAgYXNzZXRzOiBhc3NldHNSZWR1Y2VyLFxyXG4gIHBhdGhzOiBwYXRoc1JlZHVjZXIsXHJcbiAgc2Vzc2lvbjogc2Vzc2lvblJlZHVjZXIsXHJcbiAgZGFzaGJvYXJkOiBkYXNoYm9hcmRSZWR1Y2VyLFxyXG4gIG5vdGljZXM6IG5vdGljZXNSZWR1Y2VyLFxyXG4gIHZlcnNpb25zOiB2ZXJzaW9uc1JlZHVjZXIsXHJcbiAgcGFnZXM6IHBhZ2VzUmVkdWNlcixcclxuICBsb2NhbGU6IGxvY2FsZXNSZWR1Y2VyLFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGluaXRpYWxTdGF0ZSA9IHt9KSA9PiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuaW1wb3J0IHsgaW5pdFJlYWN0STE4bmV4dCB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXHJcbmltcG9ydCBpMThuIGZyb20gJ2kxOG5leHQnXHJcblxyXG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9hcHBsaWNhdGlvbidcclxuaW1wb3J0IEJhc2VQcm9wZXJ0eUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZSdcclxuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4vc3RvcmUvc3RvcmUnXHJcbmltcG9ydCBWaWV3SGVscGVycyBmcm9tICcuLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXHJcbmltcG9ydCAqIGFzIEFwcENvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzL2FwcCdcclxuaW1wb3J0ICogYXMgSG9va3MgZnJvbSAnLi9ob29rcydcclxuaW1wb3J0IEFwaUNsaWVudCBmcm9tICcuL3V0aWxzL2FwaS1jbGllbnQnXHJcbmltcG9ydCB3aXRoTm90aWNlIGZyb20gJy4vaG9jL3dpdGgtbm90aWNlJ1xyXG5pbXBvcnQgeyBmbGF0IH0gZnJvbSAnLi4vdXRpbHMvZmxhdCdcclxuXHJcbmNvbnN0IGVudiA9IHtcclxuICBOT0RFX0VOVjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50JyxcclxufVxyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZSh3aW5kb3cuUkVEVVhfU1RBVEUpXHJcbmNvbnN0IHRoZW1lID0gd2luZG93LlRIRU1FXHJcbmNvbnN0IHsgbG9jYWxlIH0gPSB3aW5kb3cuUkVEVVhfU1RBVEVcclxuXHJcbmkxOG5cclxuICAudXNlKGluaXRSZWFjdEkxOG5leHQpXHJcbiAgLmluaXQoe1xyXG4gICAgcmVzb3VyY2VzOiB7XHJcbiAgICAgIFtsb2NhbGUubGFuZ3VhZ2VdOiB7XHJcbiAgICAgICAgdHJhbnNsYXRpb246IGxvY2FsZS50cmFuc2xhdGlvbnMsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbG5nOiBsb2NhbGUubGFuZ3VhZ2UsXHJcbiAgICBpbnRlcnBvbGF0aW9uOiB7IGVzY2FwZVZhbHVlOiBmYWxzZSB9LFxyXG4gIH0pXHJcblxyXG5jb25zdCBBcHBsaWNhdGlvbiA9IChcclxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgIDxBcHAgLz5cclxuICAgICAgPC9Ccm93c2VyUm91dGVyPlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gIDwvUHJvdmlkZXI+XHJcbilcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxyXG53aW5kb3cucmVnZW5lcmF0b3JSdW50aW1lID0gcmVnZW5lcmF0b3JSdW50aW1lXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgd2l0aE5vdGljZSxcclxuICBBcHBsaWNhdGlvbixcclxuICBWaWV3SGVscGVycyxcclxuICBVc2VyQ29tcG9uZW50czoge30sXHJcbiAgQXBpQ2xpZW50LFxyXG4gIEJhc2VQcm9wZXJ0eUNvbXBvbmVudCxcclxuICBlbnYsXHJcbiAgLi4uQXBwQ29tcG9uZW50cyxcclxuICAuLi5Ib29rcyxcclxuICBmbGF0LFxyXG4gIC8vIFRPRE86IHJlbW92ZSB0aGlzIGZyb20gdGhlIG5leHQgcmVsZWFzZVxyXG4gIGZsYXR0ZW46IGZsYXQuZmxhdHRlbixcclxuICB1bmZsYXR0ZW46IGZsYXQudW5mbGF0dGVuLFxyXG59XHJcbiJdLCJuYW1lcyI6WyJ1bmRlZmluZWQiLCJyZXF1aXJlJCQwIiwiZ2xvYmFsQW55Iiwid2luZG93IiwiZXJyb3IiLCJtZXNzYWdlIiwicnVuRGF0ZSIsIkRhdGUiLCJWaWV3SGVscGVycyIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsIm9wdHMiLCJnZXRQYXRocyIsInJvb3RQYXRoIiwiUkVEVVhfU1RBVEUiLCJwYXRocyIsInVybEJ1aWxkZXIiLCJzZWFyY2giLCJzZXBhcmF0b3IiLCJyZXBsYWNlIiwiUmVnRXhwIiwic3RhcnRzV2l0aCIsInBhcnRzIiwiam9pbiIsImxvZ2luVXJsIiwibG9naW5QYXRoIiwibG9nb3V0VXJsIiwibG9nb3V0UGF0aCIsImRhc2hib2FyZFVybCIsInBhZ2VVcmwiLCJwYWdlTmFtZSIsImVkaXRVcmwiLCJyZXNvdXJjZUlkIiwicmVjb3JkSWQiLCJyZWNvcmRBY3Rpb25VcmwiLCJhY3Rpb25OYW1lIiwic2hvd1VybCIsImRlbGV0ZVVybCIsIm5ld1VybCIsInJlc291cmNlQWN0aW9uVXJsIiwibGlzdFVybCIsImJ1bGtEZWxldGVVcmwiLCJyZWNvcmRJZHMiLCJidWxrQWN0aW9uVXJsIiwicmVzb3VyY2VVcmwiLCJ1cmwiLCJsZW5ndGgiLCJxdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsInNldCIsInRvU3RyaW5nIiwiYXNzZXRQYXRoIiwiYXNzZXQiLCJhc3NldHNDRE4iLCJVUkwiLCJocmVmIiwiZ2V0VGltZSIsImFsbG93T3ZlcnJpZGUiLCJPcmlnaW5hbENvbXBvbmVudCIsIm5hbWUiLCJXcmFwcGVyQ29tcG9uZW50IiwicHJvcHMiLCJDb21wb25lbnQiLCJBZG1pbkJybyIsIlVzZXJDb21wb25lbnRzIiwiUmVhY3QiLCJTdHlsZWRMb2dvIiwic3R5bGVkIiwiTGluayIsInRoZW1lR2V0IiwiaCIsIlNpZGViYXJCcmFuZGluZyIsImJyYW5kaW5nIiwibG9nbyIsImNvbXBhbnlOYW1lIiwiY3NzQ2xhc3MiLCJiYXNlUHJvcGVydHlPZiIsImdsb2JhbCIsImZyZWVHbG9iYWwiLCJTeW1ib2wiLCJyb290Iiwib2JqZWN0UHJvdG8iLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsInN5bVRvU3RyaW5nVGFnIiwiZ2V0UmF3VGFnIiwib2JqZWN0VG9TdHJpbmciLCJpc09iamVjdExpa2UiLCJiYXNlR2V0VGFnIiwiaXNBcnJheSIsImFycmF5TWFwIiwiaXNTeW1ib2wiLCJiYXNlVG9TdHJpbmciLCJkZWJ1cnJMZXR0ZXIiLCJyc0NvbWJvTWFya3NSYW5nZSIsInJlQ29tYm9IYWxmTWFya3NSYW5nZSIsInJzQ29tYm9TeW1ib2xzUmFuZ2UiLCJyc0NvbWJvUmFuZ2UiLCJyc0NvbWJvIiwiaGFzVW5pY29kZVdvcmQiLCJ1bmljb2RlV29yZHMiLCJhc2NpaVdvcmRzIiwicnNBcG9zIiwiYXJyYXlSZWR1Y2UiLCJ3b3JkcyIsImRlYnVyciIsImJhc2VTbGljZSIsInJzQXN0cmFsUmFuZ2UiLCJyc1ZhclJhbmdlIiwicnNaV0oiLCJyc0ZpdHoiLCJyc01vZGlmaWVyIiwicnNOb25Bc3RyYWwiLCJyc1JlZ2lvbmFsIiwicnNTdXJyUGFpciIsInJlT3B0TW9kIiwicnNPcHRWYXIiLCJyc09wdEpvaW4iLCJyc1NlcSIsImhhc1VuaWNvZGUiLCJ1bmljb2RlVG9BcnJheSIsImFzY2lpVG9BcnJheSIsInN0cmluZ1RvQXJyYXkiLCJjYXN0U2xpY2UiLCJjcmVhdGVDYXNlRmlyc3QiLCJjcmVhdGVDb21wb3VuZGVyIiwidXBwZXJGaXJzdCIsImZvcm1hdE5hbWUiLCJzcGxpdCIsInRyYW5zbGF0ZSIsImkxOG4iLCJrZXkiLCJyZWFsT3B0aW9ucyIsImZvcm1hdHRlZE5hbWUiLCJrZXlzIiwiZXhpc3RzIiwidCIsImRlZmF1bHRWYWx1ZSIsInN0YXJ0Q2FzZSIsImNyZWF0ZUZ1bmN0aW9ucyIsInRyYW5zbGF0ZUFjdGlvbiIsInRyYW5zbGF0ZUJ1dHRvbiIsImJ1dHRvbkxhYmVsIiwidHJhbnNsYXRlTGFiZWwiLCJsYWJlbCIsInRyYW5zbGF0ZVByb3BlcnR5IiwicHJvcGVydHlOYW1lIiwidHJhbnNsYXRlTWVzc2FnZSIsIm1lc3NhZ2VOYW1lIiwidGEiLCJ0YiIsInRsIiwidHAiLCJ0bSIsInVzZVRyYW5zbGF0aW9uIiwicmVzdCIsIm9yaWdpbmFsVXNlVHJhbnNsYXRpb24iLCJ0cmFuc2xhdGVGdW5jdGlvbnMiLCJTaWRlYmFyUGFnZXMiLCJwYWdlcyIsImxvY2F0aW9uIiwidXNlTG9jYXRpb24iLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImlzQWN0aXZlIiwicGFnZSIsInBhdGhuYW1lIiwibWF0Y2giLCJlbGVtZW50cyIsIm1hcCIsImlkIiwiaXNTZWxlY3RlZCIsImljb24iLCJvbkNsaWNrIiwiZXZlbnQiLCJlbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiTmF2aWdhdGlvbiIsIlNpZGViYXJGb290ZXIiLCJCb3giLCJTb2Z0d2FyZUJyb3RoZXJzIiwiaXNPblNlcnZlciIsImNoZWNrUmVzcG9uc2UiLCJyZXNwb25zZSIsIm9yaWdpbiIsInJlcXVlc3QiLCJyZXNwb25zZVVSTCIsImFsZXJ0IiwiYXNzaWduIiwiQXBpQ2xpZW50IiwiYmFzZVVSTCIsImdldEJhc2VVcmwiLCJjbGllbnQiLCJheGlvcyIsImNyZWF0ZSIsInNlYXJjaFJlY29yZHMiLCJyZXNvdXJjZUFjdGlvbiIsImRhdGEiLCJyZWNvcmRzIiwiYXhpb3NQYXJhbXMiLCJxIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibWV0aG9kIiwicmVjb3JkQWN0aW9uIiwiYnVsa0FjdGlvbiIsInBhcmFtcyIsImdldERhc2hib2FyZCIsImdldCIsImdldFBhZ2UiLCJGT1JNX1ZBTFVFX05VTEwiLCJGT1JNX1ZBTFVFX0VNUFRZX09CSkVDVCIsIkZPUk1fVkFMVUVfRU1QVFlfQVJSQVkiLCJpc09iamVjdE9yQXJyYXkiLCJ2YWx1ZSIsIkZpbGUiLCJwYXJhbXNUb0Zvcm1EYXRhIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwiQXJyYXkiLCJBRERfTk9USUNFIiwiYWRkTm90aWNlIiwidHlwZSIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHIiLCJwcm9ncmVzcyIsInVzZU5vdGljZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJub3RpY2UiLCJtZXJnZVJlY29yZFJlc3BvbnNlIiwicmVjb3JkIiwiZXJyb3JzIiwicG9wdWxhdGVkIiwiREVMSU1JVEVSIiwicHJvcGVydHlLZXlSZWdleCIsInByb3BlcnR5UGF0aCIsImRlbGltaXRlciIsImVzY2FwZWREZWxpbWl0ZXIiLCJlc2NhcGVkRGVsaW1pdGVyT3JJbmRleCIsInBhdGgiLCJpbmNsdWRlQWxsU2libGluZ3MiLCJzZWxlY3RQYXJhbXMiLCJwcm9wZXJ0aWVzIiwicHJvcGVydHlBcnJheSIsInNlbGVjdGVkIiwiZmlsdGVyIiwicmVkdWNlIiwiZ2xvYmFsTWVtbyIsInJlZ2V4IiwiZmlsdGVyZWQiLCJtZW1vIiwiZmlsdGVyT3V0UGFyYW1zIiwiZ2xvYmFsRmlsdGVyZWQiLCJwYXRoVG9QYXJ0cyIsImFsbFBhcnRzIiwic2tpcEFycmF5SW5kZXhlcyIsInBhcnQiLCJpc05hTiIsImlzT2JqZWN0IiwicGFyYW1zQ29weSIsImZsYXR0ZW5lZCIsImZsYXR0ZW4iLCJzbGljZSIsImluY2x1ZGVzIiwiVEVNUF9IT0xESU5HX0tFWSIsInVuZmxhdHRlbiIsImZpbmQiLCJzZWxlY3RlZFBhcmFtcyIsIm5lc3RlZFByb3BlcnRpZXMiLCJpbmRleCIsIm5ld0tleSIsIm1lcmdlIiwibWVyZ2VQYXJhbXMiLCJmbGF0dGVuUGFyYW1zIiwicmV2ZXJzZSIsIm1lcmdlUGFyYW0iLCJyZW1vdmVQYXRoIiwicGFyZW50UGF0aHMiLCJwYXJlbnRQYXRoIiwicGFyZW50SW5kZXgiLCJwYXJlbnQiLCJwcmV2aW91c1BhdGhzIiwicHJldmlvdXNQYXRoSW5kZXgiLCJzcGxpY2UiLCJmbGF0IiwidXBkYXRlUmVjb3JkIiwicHJvcGVydHkiLCJzZWxlY3RlZFJlY29yZCIsInByZXZpb3VzUmVjb3JkIiwicG9wdWxhdGVkTW9kaWZpZWQiLCJwb3B1bGF0ZWRDb3B5IiwiaXNFbnRpcmVSZWNvcmRHaXZlbiIsInByb3BlcnR5T3JSZWNvcmQiLCJmaWx0ZXJSZWNvcmRQYXJhbXMiLCJpbmNsdWRlUGFyYW1zIiwiaXNQcm9wZXJ0eVBlcm1pdHRlZCIsInNvbWUiLCJhcGkiLCJ1c2VSZWNvcmQiLCJpbml0aWFsUmVjb3JkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsImlzU3luY2VkIiwic2V0SXNTeW5jZWQiLCJzZXRQcm9ncmVzcyIsImZpbHRlcmVkUmVjb3JkIiwic2V0UmVjb3JkIiwic2V0RmlsdGVyZWRSZWNvcmQiLCJ1c2VDYWxsYmFjayIsIm5ld1JlY29yZCIsIkZ1bmN0aW9uIiwib25Ob3RpY2UiLCJoYW5kbGVDaGFuZ2UiLCJpbmNvbWluZ1JlY29yZCIsImNvbnNvbGUiLCJ3YXJuIiwiaGFuZGxlU3VibWl0IiwiY3VzdG9tUGFyYW1zIiwic3VibWl0T3B0aW9ucyIsIm1lcmdlZFBhcmFtcyIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJlIiwicm91bmQiLCJsb2FkZWQiLCJ0b3RhbCIsImhlYWRlcnMiLCJwcm9taXNlIiwidGhlbiIsInVwZGF0ZU9uU2F2ZSIsInByZXYiLCJjYXRjaCIsInN1Ym1pdCIsImFjdGlvbkhhc0NvbXBvbmVudCIsImFjdGlvbiIsImNvbXBvbmVudCIsImFjdGlvbkhyZWYiLCJoYXNIYW5kbGVyIiwiaHJlZk1hcCIsInJlc291cmNlIiwiYnVsayIsImFjdGlvblR5cGUiLCJFcnJvciIsImNhbGxBY3Rpb25BcGkiLCJidWlsZEFjdGlvbkNhbGxBcGlUcmlnZ2VyIiwiYWN0aW9uUmVzcG9uc2VIYW5kbGVyIiwiY2FsbEFwaSIsImJ1aWxkQWN0aW9uVGVzdElkIiwiYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIiLCJoYW5kbGVBY3Rpb25DbGljayIsInN0b3BQcm9wYWdhdGlvbiIsImd1YXJkIiwiY29uZmlybSIsIlJFRlJFU0hfS0VZIiwiYXBwZW5kRm9yY2VSZWZyZXNoIiwic2VhcmNoUGFyYW1zSWR4IiwibGFzdEluZGV4T2YiLCJ1cmxTZWFyY2hQYXJhbXMiLCJzdWJzdHJpbmciLCJvbGRQYXJhbXMiLCJuZXdQYXJhbXMiLCJoYXNGb3JjZVJlZnJlc2giLCJyZW1vdmVGb3JjZVJlZnJlc2giLCJkZWxldGUiLCJ1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXIiLCJvbkFjdGlvbkNhbGwiLCJyZWRpcmVjdFVybCIsImFwcGVuZGVkIiwidXNlQWN0aW9uIiwiaGFuZGxlQ2xpY2siLCJTRVNTSU9OX0lOSVRJQUxJWkUiLCJzZXRDdXJyZW50QWRtaW4iLCJ1c2VDdXJyZW50QWRtaW4iLCJjdXJyZW50QWRtaW4iLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2Vzc2lvbiIsImFkbWluIiwidXNlTG9jYWxTdG9yYWdlIiwiaW5pdGlhbFZhbHVlIiwic3RvcmVkVmFsdWUiLCJzZXRTdG9yZWRWYWx1ZSIsIml0ZW0iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwibG9nIiwic2V0VmFsdWUiLCJ2YWx1ZVRvU3RvcmUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwicmVnRXhwIiwidXNlTmF2aWdhdGlvblJlc291cmNlcyIsInJlc291cmNlcyIsIm9wZW5FbGVtZW50cyIsInNldE9wZW5FbGVtZW50cyIsImVucmljaFJlc291cmNlIiwidXNlTWVtbyIsInJlcyIsIm5hdmlnYXRpb24iLCJpc09wZW4iLCJ2YWx1ZXMiLCJ1c2VSZWNvcmRzIiwic2V0UmVjb3JkcyIsInBlclBhZ2UiLCJzZXRQZXJQYWdlIiwic2V0UGFnZSIsInNldFRvdGFsIiwiZGlyZWN0aW9uIiwic2V0RGlyZWN0aW9uIiwic29ydEJ5Iiwic2V0U29ydEJ5IiwiZmV0Y2hEYXRhIiwibGlzdEFjdGlvblJlc3BvbnNlIiwibWV0YSIsInVzZUVmZmVjdCIsInVzZVNlbGVjdGVkUmVjb3JkcyIsInNlbGVjdGVkUmVjb3JkcyIsInNldFNlbGVjdGVkUmVjb3JkcyIsImhhbmRsZVNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJmaW5kSW5kZXgiLCJuZXdTZWxlY3RlZFJlY29yZHMiLCJoYW5kbGVTZWxlY3RBbGwiLCJtaXNzaW5nIiwiYnVsa0FjdGlvbnMiLCJ1c2VSZXNvdXJjZSIsImZvdW5kUmVzb3VyY2UiLCJTaWRlYmFyUmVzb3VyY2VTZWN0aW9uT3JpZ2luYWwiLCJTaWRlYmFyUmVzb3VyY2VTZWN0aW9uIiwiU3R5bGVkU2lkZWJhciIsImRlZmF1bHRQcm9wcyIsInBvc2l0aW9uIiwid2lkdGgiLCJib3JkZXJSaWdodCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiekluZGV4IiwiYmciLCJTaWRlYmFyIiwiaXNWaXNpYmxlIiwic29mdHdhcmVCcm90aGVycyIsIkxvZ2dlZEluIiwiZHJvcEFjdGlvbnMiLCJDdXJyZW50VXNlck5hdiIsImVtYWlsIiwidGl0bGUiLCJhdmF0YXJVcmwiLCJPdmVycmlkYWJsZUxvZ2dlZEluIiwiVmVyc2lvbkl0ZW0iLCJUZXh0IiwiY29sb3IiLCJWZXJzaW9uIiwidmVyc2lvbnMiLCJhcHAiLCJ2ZXJzaW9uIiwiTmF2QmFyIiwidGhlbWUiLCJzaXplcyIsIm5hdmJhckhlaWdodCIsImNvbG9ycyIsIndoaXRlIiwiY2xhc3NOYW1lIiwiVG9wQmFyIiwidG9nZ2xlU2lkZWJhciIsImN1cnNvciIsIkljb24iLCJEUk9QX05PVElDRSIsImRyb3BOb3RpY2UiLCJub3RpY2VJZCIsIlNFVF9OT1RJQ0VfUFJPR1JFU1MiLCJzZXROb3RpY2VQcm9ncmVzcyIsIlRJTUVfVE9fRElTQVBQRUFSIiwiTm90aWNlRWxlbWVudCIsInRpbWVyIiwiY29tcG9uZW50RGlkTW91bnQiLCJkcm9wIiwibm90aWZ5UHJvZ3Jlc3MiLCJzZXRJbnRlcnZhbCIsInNldFN0YXRlIiwic2V0VGltZW91dCIsImNsZWFySW50ZXJ2YWwiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsIk1lc3NhZ2VCb3giLCJtaW5XaWR0aCIsIk5vdGljZUJveCIsIm5vdGljZXMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJDb25uZWN0ZWROb3RpY2VCb3giLCJjb25uZWN0IiwicGFnZUhlYWRlckhlaWdodCIsInBhZ2VIZWFkZXJQYWRkaW5nWSIsInBhZ2VIZWFkZXJQYWRkaW5nWCIsIkRhc2hib2FyZEhlYWRlciIsIklsbHVzdHJhdGlvbiIsIkgyIiwiYm94ZXMiLCJ2YXJpYW50Iiwic3VidGl0bGUiLCJDYXJkIiwiZmxleCIsImdyZXkxMDAiLCJwcmltYXJ5MTAwIiwic2hhZG93cyIsImNhcmRIb3ZlciIsImJveFNoYWRvdyIsIkRhc2hib2FyZCIsImJveCIsIkg1IiwiSDQiLCJCdXR0b24iLCJFcnJvck1lc3NhZ2UiLCJFcnJvckJvdW5kYXJ5IiwiY29tcG9uZW50RGlkQ2F0Y2giLCJjaGlsZHJlbiIsImlzQ2xpZW50IiwiZGFzaGJvYXJkIiwiRGVmYXVsdERhc2hib2FyZCIsIkFkZE5ld0l0ZW1CdXR0b24iLCJQcm9wZXJ0eUxhYmVsIiwibGFiZWxQcm9wcyIsImhpZGVMYWJlbCIsIkxhYmVsIiwiaXNSZXF1aXJlZCIsImNvbnZlcnRUb1N1YlByb3BlcnR5IiwiYXJyYXlQcm9wZXJ0eSIsInJlbW92ZVN1YlByb3BlcnR5Iiwic3ViUHJvcGVydHlQYXRoIiwicG9wdWxhdGVkS2V5TWFwIiwicHJvcGVydHlLZXkiLCJuZXdQb3B1bGF0ZWRLZXlNYXAiLCJuZXdQb3B1bGF0ZWQiLCJuZXdQcm9wZXJ0eUtleSIsIm9sZFByb3BlcnR5S2V5IiwiSXRlbVJlbmRlcmVyIiwiSXRlbUNvbXBvbmVudCIsIm9uRGVsZXRlIiwiSW5wdXRzSW5TZWN0aW9uIiwib25DaGFuZ2UiLCJpdGVtcyIsImFkZE5ldyIsIm5ld0l0ZW1zIiwic3ViUHJvcGVydGllcyIsInJlbW92ZUl0ZW0iLCJzdWJQcm9wZXJ0eSIsIlNlY3Rpb24iLCJpIiwiaXRlbVByb3BlcnR5IiwiRWRpdCIsInRlc3RJZCIsIkZvcm1Hcm91cCIsIkZvcm1NZXNzYWdlIiwiTGlzdCIsIlNob3ciLCJQdXJlQ29tcG9uZW50IiwiVmFsdWVHcm91cCIsImlzSWQiLCJzdWJQcm9wZXJ0eVdpdGhQYXRoIiwicmVuZGVySXRlbXMiLCJzaG93QWN0aW9uIiwicmVjb3JkQWN0aW9ucyIsImEiLCJ0aXRsZVByb3BlcnR5IiwiRGVmYXVsdFByb3BlcnR5VmFsdWUiLCJyYXdWYWx1ZSIsImF2YWlsYWJsZVZhbHVlcyIsIm9wdGlvbiIsIm9wdCIsIkJhZGdlIiwicmVjb3JkUHJvcGVydHlJc0VxdWFsIiwicHJldlByb3BzIiwibmV4dFByb3BzIiwicHJldlZhbHVlIiwibmV4dFZhbHVlIiwicHJldkVycm9yIiwibmV4dEVycm9yIiwiQm9vbGVhbiIsIlNlbGVjdEVkaXQiLCJwcm9wVmFsdWUiLCJzdHlsZXMiLCJzZWxlY3RTdHlsZXMiLCJhdiIsIlNlbGVjdCIsInMiLCJpc0Rpc2FibGVkIiwiVGV4dEVkaXQiLCJJbnB1dCIsInRhcmdldCIsImtleUNvZGUiLCJ3aXRoVGhlbWUiLCJGaWx0ZXIiLCJoYW5kbGVJbnB1dENoYW5nZSIsImJpbmQiLCJoYW5kbGVTZWxlY3RDaGFuZ2UiLCJyZW5kZXJJbnB1dCIsImZpbHRlcktleSIsImZpbHRlclN0eWxlcyIsInBhcnNlVmFsdWUiLCJDaGVja0JveCIsImlubGluZSIsIkJvb2xlYW5Qcm9wZXJ0eVZhbHVlIiwiYmFzZSIsIm1hcFZhbHVlIiwidHJhbnNsYXRpb24iLCJvIiwiRGF0ZVBpY2tlciIsInByb3BlcnR5VHlwZSIsImRhdGUiLCJmb3JtYXREYXRlUHJvcGVydHkiLCJQQVJBTV9TRVBBUkFUT1IiLCJub3JtYWxpemVLZXlzIiwiZmlsdGVycyIsIm5vcm1hbGl6ZWQiLCJwb3B1bGF0ZSIsInJlZmVyZW5jZVJlc291cmNlIiwiZGVjb3JhdGUiLCJnZXRQcm9wZXJ0eUJ5S2V5IiwicmVmZXJlbmNlIiwiZmluZE9uZSIsImNhbGxiYWNrIiwiaW5pdGlhbCIsIkJhY2tlbmRGaWx0ZXIiLCJmcm9tS2V5IiwidG9LZXkiLCJmcm9tVmFsdWUiLCJ0b1ZhbHVlIiwicHJvcGVydHlQcm9wcyIsInF1aWxsIiwiY3VzdG9tUHJvcHMiLCJtb2R1bGVzIiwidG9vbGJhciIsIkRlZmF1bHRRdWlsbFRvb2xiYXJPcHRpb25zIiwiUmljaFRleHQiLCJjb250ZW50IiwiY29udGVudFJlZiIsImNyZWF0ZVJlZiIsImN1cnJlbnQiLCJpbm5lckhUTUwiLCJvcmlnaW5hbCIsImxvYWRPcHRpb25zIiwiaW5wdXRWYWx1ZSIsIm9wdGlvblJlY29yZHMiLCJvcHRpb25SZWNvcmQiLCJzZWxlY3RlZElkIiwibG9hZGVkUmVjb3JkIiwic2V0TG9hZGVkUmVjb3JkIiwibG9hZGluZ1JlY29yZCIsInNldExvYWRpbmdSZWNvcmQiLCJzZWxlY3RlZFZhbHVlIiwic2VsZWN0ZWRPcHRpb24iLCJjIiwiZmluYWxseSIsIlN0eWxlZExpbmsiLCJCdXR0b25DU1MiLCJzcGFjZSIsInhzIiwiUmVmZXJlbmNlVmFsdWUiLCJyZWZJZCIsInIiLCJsaW5lIiwiaXNJbnB1dCIsInNldElzSW5wdXQiLCJJbnB1dEdyb3VwIiwidHlwZXMiLCJ0ZXh0YXJlYSIsImJvb2xlYW4iLCJkYXRldGltZSIsInBhc3N3b3JkIiwicmljaHRleHQiLCJzdHJpbmciLCJkZWZhdWx0VHlwZSIsIm51bWJlciIsImZsb2F0IiwibWl4ZWQiLCJCYXNlUHJvcGVydHlDb21wb25lbnQiLCJiYXNlUHJvcGVydHkiLCJ3aGVyZSIsImNvbXBvbmVudHMiLCJBcnJheVR5cGUiLCJNaXhlZCIsIk1peGVkVHlwZSIsImNhbWVsaXplUHJvcGVydHlUeXBlIiwiZWRpdCIsInNob3ciLCJsaXN0IiwiQmFzZVByb3BlcnR5Q29tcG9uZW50RXh0ZW5kZWQiLCJEZWZhdWx0VHlwZSIsIkRhdGVUaW1lIiwiUmVmZXJlbmNlIiwiVGV4dEFyZWEiLCJQYXNzd29yZCIsIkJyZWFkY3J1bWJMaW5rIiwiZ3JleTQwIiwiZm9udCIsImxpbmVIZWlnaHRzIiwiZGVmYXVsdCIsImZvbnRTaXplcyIsIkJyZWFkY3J1bWJzIiwiYWN0aW9ucyIsImFjdGlvbnNUb0J1dHRvbkdyb3VwIiwiYnV0dG9ucyIsInNvdXJjZSIsImJ1dHRvbnNNYXAiLCJidXR0b24iLCJidG4iLCJyb3VuZGVkIiwiUm91dGVyTGluayIsIlN0eWxlZEJhY2tCdXR0b24iLCJzaG93SW5EcmF3ZXIiLCJjc3NDbG9zZUljb24iLCJBY3Rpb25IZWFkZXIiLCJ0b2dnbGVGaWx0ZXIiLCJhY3Rpb25QZXJmb3JtZWQiLCJ0YWciLCJvbWl0QWN0aW9ucyIsImhpZGVBY3Rpb25IZWFkZXIiLCJzb3VyY2VBY3Rpb24iLCJhY3Rpb25CdXR0b25zIiwicmEiLCJyZXNvdXJjZUFjdGlvbnMiLCJjdXN0b21SZXNvdXJjZUJ1dHRvbnMiLCJpc0xpc3QiLCJsaXN0QWN0aW9uIiwiY3NzSXNSb290RmxleCIsImNzc0hlYWRlck1UIiwiY3NzQWN0aW9uc01CIiwiQ3NzSENvbXBvbmVudCIsIkgzIiwiQnV0dG9uR3JvdXAiLCJMYXlvdXRFbGVtZW50UmVuZGVyZXIiLCJsYXlvdXRFbGVtZW50IiwibGF5b3V0UHJvcHMiLCJwcm9wZXJ0eU5hbWVzIiwibGF5b3V0RWxlbWVudHMiLCJpbm5lckxheW91dEVsZW1lbnRzIiwib3RoZXIiLCJEZXNpZ25TeXN0ZW0iLCJEZXNpZ25TeXN0ZW0uTWVzc2FnZUJveCIsIkRlc2lnblN5c3RlbS5CYWRnZSIsIkRlc2lnblN5c3RlbS5Cb3giLCJQcm9wZXJ0eVR5cGUiLCJpbm5lckxheW91dEVsZW1lbnQiLCJOZXciLCJEcmF3ZXJDb250ZW50IiwibGF5b3V0IiwiZWRpdFByb3BlcnRpZXMiLCJEcmF3ZXJGb290ZXIiLCJzaG93UHJvcGVydGllcyIsImlzVGl0bGUiLCJSZWNvcmRJbkxpc3QiLCJyZWNvcmRGcm9tUHJvcHMiLCJpc0xvYWRpbmciLCJvblNlbGVjdCIsImhhbmRsZUFjdGlvbkNhbGxiYWNrIiwiYWN0aW9uUmVzcG9uc2UiLCJ0YXJnZXRUYWdOYW1lIiwidGFnTmFtZSIsInRvTG93ZXJDYXNlIiwiYWN0aW9uUGFyYW1zIiwiVGFibGVSb3ciLCJUYWJsZUNlbGwiLCJsaXN0UHJvcGVydGllcyIsIlBsYWNlaG9sZGVyIiwiaGVpZ2h0IiwiU29ydExpbmsiLCJvcHBvc2l0ZURpcmVjdGlvbiIsInNvcnRlZEJ5SWNvbiIsIk5hdkxpbmsiLCJ3aXRoUm91dGVyIiwiUHJvcGVydHlIZWFkZXIiLCJpc01haW4iLCJpc1NvcnRhYmxlIiwiUmVjb3Jkc1RhYmxlSGVhZGVyIiwib25TZWxlY3RBbGwiLCJzZWxlY3RlZEFsbCIsIlRhYmxlSGVhZCIsIm1hcmdpbkxlZnQiLCJBY3Rpb25CdXR0b24iLCJmaXJzdENoaWxkIiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwiV3JhcHBlZEVsZW1lbnQiLCJjbG9uZUVsZW1lbnQiLCJOb1JlY29yZHNPcmlnaW5hbCIsImNhbkNyZWF0ZSIsIkluZm9Cb3giLCJOb1JlY29yZHMiLCJnZXRCdWxrQWN0aW9uc0Zyb21SZWNvcmRzIiwiYWN0aW9uc01lbW8iLCJTZWxlY3RlZFJlY29yZHMiLCJidWxrQnV0dG9ucyIsIlRhYmxlQ2FwdGlvbiIsIlRpdGxlIiwiUmVjb3Jkc1RhYmxlIiwiTG9hZGVyIiwicmVjb3Jkc0hhdmVCdWxrQWN0aW9uIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJzZXRUYWciLCJoYW5kbGVBY3Rpb25QZXJmb3JtZWQiLCJoYW5kbGVQYWdpbmF0aW9uQ2hhbmdlIiwicGFnZU51bWJlciIsIlBhZ2luYXRpb24iLCJ3aXRoTm90aWNlIiwiQnVsa0RlbGV0ZSIsImNvdW50IiwiRm9ybWF0dGVkQnVsa0RlbGV0ZSIsIm5ldyIsImJ1bGtEZWxldGUiLCJCYXNlQWN0aW9uQ29tcG9uZW50IiwiZG9jdW1lbnRhdGlvbkxpbmsiLCJET0NTIiwiQWN0aW9uIiwiVHJhbnMiLCJFcnJvck1lc3NhZ2VCb3giLCJOb1Jlc291cmNlRXJyb3IiLCJOb0FjdGlvbkVycm9yIiwiTm9SZWNvcmRFcnJvciIsIlN0eWxlZFdyYXBwZXIiLCJ4eGwiLCJXcmFwcGVyIiwiRFJBV0VSX1BPUlRBTF9JRCIsIkRyYXdlclBvcnRhbCIsImRyYXdlckVsZW1lbnQiLCJzZXREcmF3ZXJFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVyV3JhcHBlciIsImNyZWF0ZUVsZW1lbnQiLCJEcmF3ZXJXcmFwcGVyIiwiVGhlbWVQcm92aWRlciIsIlRIRU1FIiwiRHJhd2VyIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwic3R5bGUiLCJERUZBVUxUX0RSQVdFUl9XSURUSCIsImFkZCIsImNyZWF0ZVBvcnRhbCIsInBhcnNlUXVlcnkiLCJlbnRyeSIsIkZpbHRlckRyYXdlciIsImZpbHRlclByb3BlcnRpZXMiLCJzZXRGaWx0ZXIiLCJ1c2VSb3V0ZU1hdGNoIiwicmVzZXRGaWx0ZXIiLCJmaWx0ZXJlZFNlYXJjaCIsIlJlY29yZEFjdGlvbiIsInNldERhdGEiLCJmZXRjaFJlY29yZCIsIm9sZFJlY29yZCIsImhhc0RpZmZlcmVudFJlY29yZCIsImFjdGlvbkZyb21SZXNvdXJjZSIsImNvbnRhaW5lcldpZHRoIiwiUmVzb3VyY2VBY3Rpb24iLCJCdWxrQWN0aW9uIiwiZmV0Y2hSZWNvcmRzIiwicmVjb3JkSWRzU3RyaW5nIiwiUGFnZSIsImN1cnJlbnRQYWdlIiwicXVlcnlTdHJpbmciLCJnZXRBY3Rpb24iLCJyZXNvdXJjZUFjdGlvbk1hdGNoIiwicmVjb3JkQWN0aW9uTWF0Y2giLCJidWxrQWN0aW9uTWF0Y2giLCJmaWx0ZXJWaXNpYmxlIiwic2V0RmlsZXJWaXNpYmxlIiwicXVlcnlIYXNGaWx0ZXIiLCJyZWFsRW5kQWN0aW9uIiwibGlzdEFjdGlvbk5hbWUiLCJzaG93RmlsdGVyIiwiQmFzZUFjdGlvbiIsIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJBcHAiLCJzaWRlYmFyVmlzaWJsZSIsIlJlc2V0IiwiT3ZlcmxheSIsIk5vdGljZSIsIlN3aXRjaCIsIlJvdXRlIiwiUmVzb3VyY2UiLCJBU1NFVFNfSU5JVElBTElaRSIsIkJSQU5ESU5HX0lOSVRJQUxJWkUiLCJEQVNIQk9BUkRfSU5JVElBTElaRSIsIkxPQ0FMRV9JTklUSUFMSVpFIiwiUEFHRVNfSU5JVElBTElaRSIsIlBBVEhTX0lOSVRJQUxJWkUiLCJSRVNPVVJDRVNfSU5JVElBTElaRSIsIlZFUlNJT05TX0lOSVRJQUxJWkUiLCJyZXNvdXJjZXNSZWR1Y2VyIiwicGFnZXNSZWR1Y2VyIiwibG9jYWxlc1JlZHVjZXIiLCJsYW5ndWFnZSIsInRyYW5zbGF0aW9ucyIsImJyYW5kaW5nUmVkdWNlciIsImFzc2V0c1JlZHVjZXIiLCJwYXRoc1JlZHVjZXIiLCJERUZBVUxUX1BBVEhTIiwiZGFzaGJvYXJkUmVkdWNlciIsInNlc3Npb25SZWR1Y2VyIiwidmVyc2lvbnNSZWR1Y2VyIiwibm90aWNlc1JlZHVjZXIiLCJyZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiYXNzZXRzIiwibG9jYWxlIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJlbnYiLCJOT0RFX0VOViIsInN0b3JlIiwidXNlIiwiaW5pdFJlYWN0STE4bmV4dCIsImluaXQiLCJsbmciLCJpbnRlcnBvbGF0aW9uIiwiZXNjYXBlVmFsdWUiLCJBcHBsaWNhdGlvbiIsIlByb3ZpZGVyIiwiQnJvd3NlclJvdXRlciIsInJlZ2VuZXJhdG9yUnVudGltZSIsIkFwcENvbXBvbmVudHMiLCJIb29rcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTtDQUNBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7QUFDQTtDQUNBLElBQUksT0FBTyxJQUFJLFVBQVUsT0FBTyxFQUFFO0FBRWxDO0NBQ0EsRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO0NBQzVCLEVBQUUsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLGNBQWMsQ0FBQztDQUNqQyxFQUFFLElBQUlBLFdBQVMsQ0FBQztDQUNoQixFQUFFLElBQUksT0FBTyxHQUFHLE9BQU8sTUFBTSxLQUFLLFVBQVUsR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDO0NBQzNELEVBQUUsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxZQUFZLENBQUM7Q0FDeEQsRUFBRSxJQUFJLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyxhQUFhLElBQUksaUJBQWlCLENBQUM7Q0FDdkUsRUFBRSxJQUFJLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxXQUFXLElBQUksZUFBZSxDQUFDO0FBQ2pFO0NBQ0EsRUFBRSxTQUFTLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRTtDQUNuQyxJQUFJLE1B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LE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwRCxHQUFHLENBQUM7Q0FDSixDQUFDO0FBQ0Q7Q0FDQSxtQkFBYyxHQUFHLGNBQWM7O0NDWC9CO0NBQ0EsSUFBSSxlQUFlLEdBQUc7Q0FDdEI7Q0FDQSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztDQUMvRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztDQUMvRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUc7Q0FDM0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHO0NBQzNCLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUc7Q0FDckQsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztDQUNyRCxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHO0NBQ3JELEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUc7Q0FDckQsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHO0NBQzNCLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHO0NBQy9FLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHO0NBQy9FLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUc7Q0FDckQsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztDQUNyRCxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztDQUN4QyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUk7Q0FDNUIsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJO0NBQzVCLEVBQUUsTUFBTSxFQUFFLElBQUk7Q0FDZDtDQUNBLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzlDLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzlDLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM3RCxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzdELEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM1RSxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDNUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM3RCxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzdELEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzVFLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM1RSxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUc7Q0FDL0IsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzVFLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM1RSxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzdELEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM3RCxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzdELEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzlDLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzlDLEVB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
