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
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	      style: {
	        fontStyle: 'italic'
	      }
	    }, "not set");
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

	  if (populated && populated.recordActions && populated.recordActions.find(a => a.name === 'show')) {
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

	  if (!value) {
	    return /*#__PURE__*/React__default['default'].createElement(DesignSystem.Box, {
	      style: {
	        fontStyle: 'italic'
	      }
	    }, "not set");
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
	    onChange,
	    data
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
	      where: where,
	      data: data
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
	    action,
	    data
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
	    record: record,
	    data: data
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
	  const action = (data === null || data === void 0 ? void 0 : data.record) && data.record.recordActions.find(r => r.name === actionName);

	  const fetchRecord = () => {
	    setLoading(true);
	    api$3.recordAction(match.params).then(response => {
	      setLoading(false);
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
	      setData({ ...data,
	        record: mergeRecordResponse(oldRecord, response)
	      });
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


	  const hasDifferentRecord = (data === null || data === void 0 ? void 0 : data.record) && data.record.id.toString() !== recordId;

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

	  if (!(data === null || data === void 0 ? void 0 : data.record)) {
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
	      record: data.record,
	      data: data
	    }));
	  }

	  return /*#__PURE__*/React__default['default'].createElement(Wrapper, {
	    width: action.containerWidth
	  }, /*#__PURE__*/React__default['default'].createElement(ActionHeader, {
	    resource: resource,
	    action: action,
	    record: data.record,
	    actionPerformed: response => handleActionPerformed(data.record, response)
	  }), /*#__PURE__*/React__default['default'].createElement(BaseActionComponent, {
	    action: action,
	    resource: resource,
	    record: data.record,
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
	  const [loading, setLoading] = React.useState(false);
	  const [data, setData] = React.useState();
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
	      setData(response.data);
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

	  if (!(data === null || data === void 0 ? void 0 : data.records) && !loading) {
	    return /*#__PURE__*/React__default['default'].createElement(ErrorMessageBox, {
	      title: "No records"
	    }, /*#__PURE__*/React__default['default'].createElement("p", null, translateMessage('noRecordsSelected', resourceId)));
	  }

	  const action = getBulkActionsFromRecords((data === null || data === void 0 ? void 0 : data.records) || []).find(r => r.name === actionName);

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
	      data: data,
	      records: data === null || data === void 0 ? void 0 : data.records
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
	    data: data,
	    records: data === null || data === void 0 ? void 0 : data.records
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5kZXZlbG9wbWVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIi4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycy50cyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCIuLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvc2lkZWJhci9zaWRlYmFyLWJyYW5kaW5nLnRzeCIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5T2YuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19kZWJ1cnJMZXR0ZXIuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TWFwLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b1N0cmluZy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVidXJyLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlXb3Jkcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1VuaWNvZGVXb3JkLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVdvcmRzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC93b3Jkcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUNvbXBvdW5kZXIuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2xpY2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0U2xpY2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNVbmljb2RlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlUb0FycmF5LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVRvQXJyYXkuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb0FycmF5LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ2FzZUZpcnN0LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC91cHBlckZpcnN0LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdGFydENhc2UuanMiLCIuLi8uLi8uLi91dGlscy90cmFuc2xhdGUtZnVuY3Rpb25zLmZhY3RvcnkudHMiLCIuLi8uLi9ob29rcy91c2UtdHJhbnNsYXRpb24udHMiLCIuLi8uLi9jb21wb25lbnRzL2FwcC9zaWRlYmFyL3NpZGViYXItcGFnZXMudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvc2lkZWJhci9zaWRlYmFyLWZvb3Rlci50c3giLCIuLi8uLi91dGlscy9hcGktY2xpZW50LnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC9wYXJhbXMtdG8tZm9ybS1kYXRhLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hZGQtbm90aWNlLnRzIiwiLi4vLi4vaG9va3MvdXNlLW5vdGljZS50cyIsIi4uLy4uL2hvb2tzL3VzZS1yZWNvcmQvbWVyZ2UtcmVjb3JkLXJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vdXRpbHMvZmxhdC9jb25zdGFudHMudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L3Byb3BlcnR5LWtleS1yZWdleC50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvc2VsZWN0LXBhcmFtcy50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvZmlsdGVyLW91dC1wYXJhbXMudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L3BhdGgtdG8tcGFydHMudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L3NldC50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvZ2V0LnRzIiwiLi4vLi4vLi4vdXRpbHMvZmxhdC9tZXJnZS50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvcmVtb3ZlLXBhdGgudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L2ZsYXQtbW9kdWxlLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC91cGRhdGUtcmVjb3JkLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC9pcy1lbnRpcmUtcmVjb3JkLWdpdmVuLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC9maWx0ZXItcmVjb3JkLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC91c2UtcmVjb3JkLnRzeCIsIi4uLy4uL2ludGVyZmFjZXMvYWN0aW9uL2FjdGlvbi1oYXMtY29tcG9uZW50LnRzIiwiLi4vLi4vaW50ZXJmYWNlcy9hY3Rpb24vYWN0aW9uLWhyZWYudHMiLCIuLi8uLi9pbnRlcmZhY2VzL2FjdGlvbi9jYWxsLWFjdGlvbi1hcGkudHMiLCIuLi8uLi9pbnRlcmZhY2VzL2FjdGlvbi9idWlsZC1hY3Rpb24tYXBpLWNhbGwtdHJpZ2dlci50cyIsIi4uLy4uL2ludGVyZmFjZXMvYWN0aW9uL2J1aWxkLWFjdGlvbi10ZXN0LWlkLnRzIiwiLi4vLi4vaW50ZXJmYWNlcy9hY3Rpb24vYnVpbGQtYWN0aW9uLWNsaWNrLWhhbmRsZXIudHMiLCIuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvdXRpbHMvYXBwZW5kLWZvcmNlLXJlZnJlc2gudHMiLCIuLi8uLi9ob29rcy91c2UtYWN0aW9uL3VzZS1hY3Rpb24tcmVzcG9uc2UtaGFuZGxlci50cyIsIi4uLy4uL2hvb2tzL3VzZS1hY3Rpb24vdXNlLWFjdGlvbi50cyIsIi4uLy4uL3N0b3JlL2FjdGlvbnMvc2V0LWN1cnJlbnQtYWRtaW4udHMiLCIuLi8uLi9ob29rcy91c2UtY3VycmVudC1hZG1pbi50cyIsIi4uLy4uL2hvb2tzL3VzZS1sb2NhbC1zdG9yYWdlL3VzZS1sb2NhbC1zdG9yYWdlLnRzIiwiLi4vLi4vaG9va3MvdXNlLW5hdmlnYXRpb24tcmVzb3VyY2VzLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZHMvdXNlLXJlY29yZHMudHMiLCIuLi8uLi9ob29rcy91c2Utc2VsZWN0ZWQtcmVjb3Jkcy91c2Utc2VsZWN0ZWQtcmVjb3Jkcy50cyIsIi4uLy4uL2hvb2tzL3VzZS1yZXNvdXJjZS91c2UtcmVzb3VyY2UudHMiLCIuLi8uLi9jb21wb25lbnRzL2FwcC9zaWRlYmFyL3NpZGViYXItcmVzb3VyY2Utc2VjdGlvbi50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9zaWRlYmFyL3NpZGViYXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvbG9nZ2VkLWluLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3ZlcnNpb24udHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvdG9wLWJhci50c3giLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2Ryb3Atbm90aWNlLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9zZXQtbm90aWNlLXByb2dyZXNzLnRzIiwiLi4vLi4vY29tcG9uZW50cy9hcHAvbm90aWNlLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2RlZmF1bHQtZGFzaGJvYXJkLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2Vycm9yLWJvdW5kYXJ5LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcm91dGVzL2Rhc2hib2FyZC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvYWRkLW5ldy1pdGVtLXRyYW5zbGF0aW9uLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS91dGlscy9wcm9wZXJ0eS1sYWJlbC9wcm9wZXJ0eS1sYWJlbC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvY29udmVydC10by1zdWItcHJvcGVydHkudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2FycmF5L3JlbW92ZS1zdWItcHJvcGVydHkudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvaW5kZXgudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvY29udmVydC10by1zdWItcHJvcGVydHkudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvaW5kZXgudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGVmYXVsdC10eXBlL2RlZmF1bHQtcHJvcGVydHktdmFsdWUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RlZmF1bHQtdHlwZS9zaG93LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9yZWNvcmQtcHJvcGVydHktaXMtZXF1YWwudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGVmYXVsdC10eXBlL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RlZmF1bHQtdHlwZS9maWx0ZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RlZmF1bHQtdHlwZS9saXN0LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9ib29sZWFuL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2Jvb2xlYW4vbWFwLXZhbHVlLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9ib29sZWFuL2Jvb2xlYW4tcHJvcGVydHktdmFsdWUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2Jvb2xlYW4vc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYm9vbGVhbi9saXN0LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9ib29sZWFuL2ZpbHRlci50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGF0ZXRpbWUvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGF0ZXRpbWUvbWFwLXZhbHVlLnRzIiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RhdGV0aW1lL3Nob3cudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RhdGV0aW1lL2xpc3QudHN4IiwiLi4vLi4vLi4vYmFja2VuZC91dGlscy9maWx0ZXIvZmlsdGVyLnRzIiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RhdGV0aW1lL2ZpbHRlci50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmljaHRleHQvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmljaHRleHQvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmljaHRleHQvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmVmZXJlbmNlL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL3JlZmVyZW5jZS9yZWZlcmVuY2UtdmFsdWUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL3JlZmVyZW5jZS9zaG93LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9yZWZlcmVuY2UvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmVmZXJlbmNlL2ZpbHRlci50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvdGV4dGFyZWEvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvdGV4dGFyZWEvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcGFzc3dvcmQvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcGFzc3dvcmQvaW5kZXgudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYmFzZS1wcm9wZXJ0eS1jb21wb25lbnQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2luZGV4LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2JyZWFkY3J1bWJzLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2FjdGlvbi1oZWFkZXIvYWN0aW9ucy10by1idXR0b24tZ3JvdXAudHMiLCIuLi8uLi9jb21wb25lbnRzL2FwcC9hY3Rpb24taGVhZGVyL3N0eWxlZC1iYWNrLWJ1dHRvbi50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9hY3Rpb24taGVhZGVyL2FjdGlvbi1oZWFkZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL3V0aWxzL2xheW91dC1lbGVtZW50LXJlbmRlcmVyLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYWN0aW9ucy9uZXcudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL3Nob3cudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvcmVjb3Jkcy10YWJsZS91dGlscy9kaXNwbGF5LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcmVjb3JkLWluLWxpc3QudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvc29ydC1saW5rLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcHJvcGVydHktaGVhZGVyLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcmVjb3Jkcy10YWJsZS1oZWFkZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvbm8tcmVjb3Jkcy50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9yZWNvcmRzLXRhYmxlL3V0aWxzL2dldC1idWxrLWFjdGlvbnMtZnJvbS1yZWNvcmRzLnRzIiwiLi4vLi4vY29tcG9uZW50cy9hcHAvcmVjb3Jkcy10YWJsZS9zZWxlY3RlZC1yZWNvcmRzLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcmVjb3Jkcy10YWJsZS50c3giLCIuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvbGlzdC50c3giLCIuLi8uLi9ob2Mvd2l0aC1ub3RpY2UudHMiLCIuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvYnVsay1kZWxldGUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL2luZGV4LnRzIiwiLi4vLi4vLi4vY29uc3RhbnRzLnRzIiwiLi4vLi4vY29tcG9uZW50cy9hcHAvYmFzZS1hY3Rpb24tY29tcG9uZW50LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2Vycm9yLW1lc3NhZ2UudHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvdXRpbHMvd3JhcHBlci50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9kcmF3ZXItcG9ydGFsLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2ZpbHRlci1kcmF3ZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvcmVjb3JkLWFjdGlvbi50c3giLCIuLi8uLi9jb21wb25lbnRzL3JvdXRlcy9yZXNvdXJjZS1hY3Rpb24udHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvYnVsay1hY3Rpb24udHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvcGFnZS50c3giLCIuLi8uLi9jb21wb25lbnRzL3JvdXRlcy91dGlscy9xdWVyeS1oYXMtZmlsdGVyLnRzIiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvcmVzb3VyY2UudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHBsaWNhdGlvbi50c3giLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtYXNzZXRzLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbml0aWFsaXplLWJyYW5kaW5nLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbml0aWFsaXplLWRhc2hib2FyZC50cyIsIi4uLy4uL3N0b3JlL2FjdGlvbnMvaW5pdGlhbGl6ZS1sb2NhbGUudHMiLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtcGFnZXMudHMiLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtcGF0aHMudHMiLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtcmVzb3VyY2VzLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbml0aWFsaXplLXZlcnNpb25zLnRzIiwiLi4vLi4vc3RvcmUvc3RvcmUudHMiLCIuLi8uLi9idW5kbGUtZW50cnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCB7IEFkbWluQnJvT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2FkbWluLWJyby1vcHRpb25zLmludGVyZmFjZSdcbmltcG9ydCB7IFBhdGhzIH0gZnJvbSAnLi4vLi4vLi4vZnJvbnRlbmQvc3RvcmUvc3RvcmUnXG5cbmxldCBnbG9iYWxBbnk6IGFueSA9IHt9XG5cbnRyeSB7XG4gIGdsb2JhbEFueSA9IHdpbmRvd1xufSBjYXRjaCAoZXJyb3IpIHtcbiAgaWYgKGVycm9yLm1lc3NhZ2UgIT09ICd3aW5kb3cgaXMgbm90IGRlZmluZWQnKSB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxufVxuXG4vKipcbiAqIEJhc2UgUGFyYW1zIGZvciBhIGFueSBmdW5jdGlvblxuICogQGFsaWFzIEFjdGlvblBhcmFtc1xuICogQG1lbWJlcm9mIFZpZXdIZWxwZXJzXG4gKi9cbmV4cG9ydCB0eXBlIEFjdGlvblBhcmFtcyA9IHtcbiAgLyoqXG4gICAqIFVuaXF1ZSBSZXNvdXJjZSBJRFxuICAgKi9cbiAgcmVzb3VyY2VJZDogc3RyaW5nO1xuICAvKipcbiAgICogQWN0aW9uIG5hbWVcbiAgICovXG4gIGFjdGlvbk5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIE9wdGlvbmFsIHF1ZXJ5IHN0cmluZzogPy4uLi5cbiAgICovXG4gIHNlYXJjaD8gOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUGFyYW1zIGZvciBhIHJlY29yZCBhY3Rpb25cbiAqIEBhbGlhcyBSZWNvcmRBY3Rpb25QYXJhbXNcbiAqIEBleHRlbmRzIEFjdGlvblBhcmFtc1xuICogQG1lbWJlcm9mIFZpZXdIZWxwZXJzXG4gKi9cbmV4cG9ydCB0eXBlIFJlY29yZEFjdGlvblBhcmFtcyA9IEFjdGlvblBhcmFtcyAmIHtcbiAgLyoqXG4gICAqIFJlY29yZCBJRFxuICAgKi9cbiAgcmVjb3JkSWQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBQYXJhbXMgZm9yIGEgYnVsayBhY3Rpb25cbiAqIEBhbGlhcyBCdWxrQWN0aW9uUGFyYW1zXG4gKiBAZXh0ZW5kcyBBY3Rpb25QYXJhbXNcbiAqIEBtZW1iZXJvZiBWaWV3SGVscGVyc1xuICovXG5leHBvcnQgdHlwZSBCdWxrQWN0aW9uUGFyYW1zID0gQWN0aW9uUGFyYW1zICYge1xuICAvKipcbiAgICogQXJyYXkgb2YgUmVjb3JkcyBJRFxuICAgKi9cbiAgcmVjb3JkSWRzPzogQXJyYXk8c3RyaW5nPjtcbn1cblxuLyoqXG4gKiBQYXJhbXMgZm9yIGEgcmVzb3VyY2UgYWN0aW9uXG4gKiBAYWxpYXMgUmVzb3VyY2VBY3Rpb25QYXJhbXNcbiAqIEBleHRlbmRzIEFjdGlvblBhcmFtc1xuICogQG1lbWJlcm9mIFZpZXdIZWxwZXJzXG4gKi9cbmV4cG9ydCB0eXBlIFJlc291cmNlQWN0aW9uUGFyYW1zID0gQWN0aW9uUGFyYW1zXG5cbmNvbnN0IHJ1bkRhdGUgPSBuZXcgRGF0ZSgpXG5cbi8qKlxuICogQ29sbGVjdGlvbiBvZiBoZWxwZXIgbWV0aG9kcyBhdmFpbGFibGUgaW4gdGhlIHZpZXdzXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWV3SGVscGVycyB7XG4gIHB1YmxpYyBvcHRpb25zOiBQYXRoc1xuXG4gIGNvbnN0cnVjdG9yKHsgb3B0aW9ucyB9OiB7IG9wdGlvbnM/OiBBZG1pbkJyb09wdGlvbnMgfSA9IHt9KSB7XG4gICAgbGV0IG9wdHM6IFBhdGhzID0gVmlld0hlbHBlcnMuZ2V0UGF0aHMob3B0aW9ucylcblxuICAgIG9wdHMgPSBvcHRzIHx8IHtcbiAgICAgIHJvb3RQYXRoOiAnL2FkbWluJyxcbiAgICB9XG5cbiAgICAvLyB3aGVuIFZpZXdIZWxwZXJzIGFyZSB1c2VkIG9uIHRoZSBmcm9udGVuZCwgcGF0aHMgYXJlIHRha2VuIGZyb20gZ2xvYmFsIFJlZHV4IFN0YXRlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0c1xuICB9XG5cbiAgc3RhdGljIGdldFBhdGhzKG9wdGlvbnM/OiBBZG1pbkJyb09wdGlvbnMpOiBQYXRocyB7XG4gICAgcmV0dXJuIG9wdGlvbnMgfHwgKGdsb2JhbEFueS5SRURVWF9TVEFURT8ucGF0aHMpXG4gIH1cblxuICAvKipcbiAgICogVG8gZWFjaCByZWxhdGVkIHBhdGggYWRkcyByb290UGF0aCBwYXNzZWQgYnkgdGhlIHVzZXIsIGFzIHdlbGwgYXMgYSBxdWVyeSBzdHJpbmdcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gW3BhdGhzXSAgICAgIGxpc3Qgb2YgcGFydHMgb2YgdGhlIHVybFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgIHBhdGhcbiAgICogQHJldHVybiB7cXVlcnl9ICAgICAgICBbc2VhcmNoPScnXSBxdWVyeSBzdHJpbmcgd2hpY2ggY2FuIGJlIGZldGNoXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBgbG9jYXRpb24uc2VhcmNoYFxuICAgKi9cbiAgdXJsQnVpbGRlcihwYXRoczogQXJyYXk8c3RyaW5nPiA9IFtdLCBzZWFyY2ggPSAnJyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2VwYXJhdG9yID0gJy8nXG4gICAgY29uc3QgcmVwbGFjZSA9IG5ldyBSZWdFeHAoYCR7c2VwYXJhdG9yfXsxLH1gLCAnZycpXG5cbiAgICBsZXQgeyByb290UGF0aCB9ID0gdGhpcy5vcHRpb25zXG4gICAgaWYgKCFyb290UGF0aC5zdGFydHNXaXRoKHNlcGFyYXRvcikpIHsgcm9vdFBhdGggPSBgJHtzZXBhcmF0b3J9JHtyb290UGF0aH1gIH1cblxuICAgIGNvbnN0IHBhcnRzID0gW3Jvb3RQYXRoLCAuLi5wYXRoc11cbiAgICByZXR1cm4gYCR7cGFydHMuam9pbihzZXBhcmF0b3IpLnJlcGxhY2UocmVwbGFjZSwgc2VwYXJhdG9yKX0ke3NlYXJjaH1gXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBsb2dpbiBVUkxcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgbG9naW5VcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvZ2luUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgbG9nb3V0IFVSTFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBsb2dvdXRVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvZ291dFBhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFVSTCBmb3IgdGhlIGRhc2hib2FyZFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBkYXNoYm9hcmRVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJvb3RQYXRoXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBVUkwgZm9yIGdpdmVuIHBhZ2UgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFnZU5hbWUgICAgICAgcGFnZSBuYW1lIHdoaWNoIGlzIGEgdW5pcXVlIGtleSBzcGVjaWZpZWQgaW5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtAbGluayBBZG1pbkJyb09wdGlvbnN9XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHBhZ2VVcmwocGFnZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudXJsQnVpbGRlcihbJ3BhZ2VzJywgcGFnZU5hbWVdKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdXJsIGZvciBhIGBlZGl0YCBhY3Rpb24gaW4gZ2l2ZW4gUmVzb3VyY2UuIFVzZXMge0BsaW5rIHJlY29yZEFjdGlvblVybH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVjb3JkSWQgICAgaWQgdG8gdGhlIHJlY29yZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlYXJjaF0gICAgICAgIG9wdGlvbmFsIHF1ZXJ5IHN0cmluZ1xuICAgKi9cbiAgZWRpdFVybChyZXNvdXJjZUlkOiBzdHJpbmcsIHJlY29yZElkOiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVjb3JkQWN0aW9uVXJsKHsgcmVzb3VyY2VJZCwgcmVjb3JkSWQsIGFjdGlvbk5hbWU6ICdlZGl0Jywgc2VhcmNoIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB1cmwgZm9yIGEgYHNob3dgIGFjdGlvbiBpbiBnaXZlbiBSZXNvdXJjZS4gVXNlcyB7QGxpbmsgcmVjb3JkQWN0aW9uVXJsfVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVzb3VyY2VJZCAgaWQgdG8gdGhlIHJlc291cmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWNvcmRJZCAgICBpZCB0byB0aGUgcmVjb3JkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VhcmNoXSAgICAgICAgb3B0aW9uYWwgcXVlcnkgc3RyaW5nXG4gICAqL1xuICBzaG93VXJsKHJlc291cmNlSWQ6IHN0cmluZywgcmVjb3JkSWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZWNvcmRBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZTogJ3Nob3cnLCBzZWFyY2ggfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHVybCBmb3IgYSBgZGVsZXRlYCBhY3Rpb24gaW4gZ2l2ZW4gUmVzb3VyY2UuIFVzZXMge0BsaW5rIHJlY29yZEFjdGlvblVybH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVjb3JkSWQgICAgaWQgdG8gdGhlIHJlY29yZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlYXJjaF0gICAgICAgIG9wdGlvbmFsIHF1ZXJ5IHN0cmluZ1xuICAgKi9cbiAgZGVsZXRlVXJsKHJlc291cmNlSWQ6IHN0cmluZywgcmVjb3JkSWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZWNvcmRBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZTogJ2RlbGV0ZScsIHNlYXJjaCB9KVxuICB9XG5cblxuICAvKipcbiAgICogUmV0dXJucyB1cmwgZm9yIGEgYG5ld2AgYWN0aW9uIGluIGdpdmVuIFJlc291cmNlLiBVc2VzIHtAbGluayByZXNvdXJjZUFjdGlvblVybH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlYXJjaF0gICAgICAgIG9wdGlvbmFsIHF1ZXJ5IHN0cmluZ1xuICAgKi9cbiAgbmV3VXJsKHJlc291cmNlSWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUFjdGlvblVybCh7IHJlc291cmNlSWQsIGFjdGlvbk5hbWU6ICduZXcnLCBzZWFyY2ggfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHVybCBmb3IgYSBgbmV3YCBhY3Rpb24gaW4gZ2l2ZW4gUmVzb3VyY2UuIFVzZXMge0BsaW5rIHJlc291cmNlQWN0aW9uVXJsfVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVzb3VyY2VJZCAgaWQgdG8gdGhlIHJlc291cmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VhcmNoXSAgICAgICAgb3B0aW9uYWwgcXVlcnkgc3RyaW5nXG4gICAqL1xuICBsaXN0VXJsKHJlc291cmNlSWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUFjdGlvblVybCh7IHJlc291cmNlSWQsIGFjdGlvbk5hbWU6ICdsaXN0Jywgc2VhcmNoIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB1cmwgZm9yIGEgYGJ1bGtEZWxldGVgIGFjdGlvbiBpbiBnaXZlbiBSZXNvdXJjZS4gVXNlcyB7QGxpbmsgYnVsa0FjdGlvblVybH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHJlY29yZElkcyAgIHNlcGFyYXRlZCBieSBjb21tYSByZWNvcmRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VhcmNoXSAgICAgICAgb3B0aW9uYWwgcXVlcnkgc3RyaW5nXG4gICAqL1xuICBidWxrRGVsZXRlVXJsKHJlc291cmNlSWQ6IHN0cmluZywgcmVjb3JkSWRzOiBBcnJheTxzdHJpbmc+LCBzZWFyY2g/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmJ1bGtBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZHMsIGFjdGlvbk5hbWU6ICdidWxrRGVsZXRlJywgc2VhcmNoIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyByZXNvdXJjZUFjdGlvbiB1cmxcbiAgICpcbiAgICogQHBhcmFtICAge1Jlc291cmNlQWN0aW9uUGFyYW1zfSAgb3B0aW9uc1xuICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgb3B0aW9ucy5yZXNvdXJjZUlkXG4gICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBvcHRpb25zLmFjdGlvbk5hbWVcbiAgICogQHBhcmFtICAge3N0cmluZ30gIFtvcHRpb25zLnNlYXJjaF0gICAgICAgIG9wdGlvbmFsIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgKi9cbiAgcmVzb3VyY2VBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lLCBzZWFyY2ggfTogUmVzb3VyY2VBY3Rpb25QYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnVybEJ1aWxkZXIoWydyZXNvdXJjZXMnLCByZXNvdXJjZUlkLCAnYWN0aW9ucycsIGFjdGlvbk5hbWVdLCBzZWFyY2gpXG4gIH1cblxuICByZXNvdXJjZVVybCh7IHJlc291cmNlSWQsIHNlYXJjaCB9OiBPbWl0PFJlc291cmNlQWN0aW9uUGFyYW1zLCAnYWN0aW9uTmFtZSc+KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy51cmxCdWlsZGVyKFsncmVzb3VyY2VzJywgcmVzb3VyY2VJZF0sIHNlYXJjaClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHJlY29yZEFjdGlvbiB1cmxcbiAgICpcbiAgICogQHBhcmFtICAge1JlY29yZEFjdGlvblBhcmFtc30gIG9wdGlvbnNcbiAgICogQHBhcmFtICAge3N0cmluZ30gIG9wdGlvbnMucmVzb3VyY2VJZFxuICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgb3B0aW9ucy5yZWNvcmRJZFxuICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgb3B0aW9ucy5hY3Rpb25OYW1lXG4gICAqXG4gICAqIEByZXR1cm4gIHtzdHJpbmd9XG4gICAqL1xuICByZWNvcmRBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZSwgc2VhcmNoIH06IFJlY29yZEFjdGlvblBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudXJsQnVpbGRlcihbJ3Jlc291cmNlcycsIHJlc291cmNlSWQsICdyZWNvcmRzJywgcmVjb3JkSWQsIGFjdGlvbk5hbWVdLCBzZWFyY2gpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBidWxrQWN0aW9uIHVybFxuICAgKlxuICAgKiBAcGFyYW0gICB7QnVsa0FjdGlvblBhcmFtc30gIG9wdGlvbnNcbiAgICogQHBhcmFtICAge3N0cmluZ30gIG9wdGlvbnMucmVzb3VyY2VJZFxuICAgKiBAcGFyYW0gICB7QXJyYXk8c3RyaW5nPn0gIFtvcHRpb25zLnJlY29yZElkc11cbiAgICogQHBhcmFtICAge3N0cmluZ30gIG9wdGlvbnMuYWN0aW9uTmFtZVxuICAgKlxuICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgKi9cbiAgYnVsa0FjdGlvblVybCh7IHJlc291cmNlSWQsIHJlY29yZElkcywgYWN0aW9uTmFtZSwgc2VhcmNoIH06IEJ1bGtBY3Rpb25QYXJhbXMpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVybCA9IHRoaXMudXJsQnVpbGRlcihbXG4gICAgICAncmVzb3VyY2VzJywgcmVzb3VyY2VJZCwgJ2J1bGsnLCBhY3Rpb25OYW1lLFxuICAgIF0pXG4gICAgaWYgKHJlY29yZElkcyAmJiByZWNvcmRJZHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKVxuICAgICAgcXVlcnkuc2V0KCdyZWNvcmRJZHMnLCByZWNvcmRJZHMuam9pbignLCcpKVxuICAgICAgcmV0dXJuIGAke3VybH0/JHtxdWVyeS50b1N0cmluZygpfWBcbiAgICB9XG4gICAgcmV0dXJuIGAke3VybH0ke3NlYXJjaCB8fCAnJ31gXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhYnNvbHV0ZSBwYXRoIHRvIGEgZ2l2ZW4gYXNzZXQuXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gYXNzZXRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgYXNzZXRQYXRoKGFzc2V0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYXNzZXRzQ0ROKSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGFzc2V0LCB0aGlzLm9wdGlvbnMuYXNzZXRzQ0ROKS5ocmVmXG5cbiAgICAgIC8vIGFkZGluZyB0aW1lc3RhbXAgdG8gdGhlIGhyZWYgaW52YWxpZGF0ZXMgdGhlIENETiBjYWNoZVxuICAgICAgcmV0dXJuIGAke3VybH0/ZGF0ZT0ke3J1bkRhdGUuZ2V0VGltZSgpfWBcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXJsQnVpbGRlcihbJ2Zyb250ZW5kJywgJ2Fzc2V0cycsIGFzc2V0XSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3SGVscGVyc1xuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBPdmVycmlkYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL3V0aWxzL292ZXJyaWRhYmxlLWNvbXBvbmVudCdcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICpcbiAqIEBjbGFzc2Rlc2NcbiAqIE92ZXJyaWRlcyBvbmUgb2YgdGhlIGNvbXBvbmVudCBmb3JtIEFkbWluQnJvIGNvcmUgd2hlbiB1c2VyIHBhc3MgaXRzIG5hbWUgdG9cbiAqIHtAbGluayBBZG1pbkJyby5idW5kbGV9IG1ldGhvZC5cbiAqXG4gKiBJZiBjYXNlIG9mIGJlaW5nIG92ZXJyaWRkZW4sIGNvbXBvbmVudCByZWNlaXZlcyBhZGRpdGlvbmFsIHByb3A6IGBPcmlnaW5hbENvbXBvbmVudGBcbiAqXG4gKiBAZXhhbXBsZVxuICogQWRtaW5Ccm8uYnVuZGxlKCcuL3BhdGgvdG8vY29tcG9uZW50JywgJ1NpZGViYXJGb290ZXInKVxuICovXG5mdW5jdGlvbiBhbGxvd092ZXJyaWRlPFA+KFxuICBPcmlnaW5hbENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPixcbiAgbmFtZTogT3ZlcnJpZGFibGVDb21wb25lbnQsXG4pOiBDb21wb25lbnRUeXBlPFAgJiB7T3JpZ2luYWxDb21wb25lbnQ/OiBDb21wb25lbnRUeXBlPFA+fT4ge1xuICAvLyBzc3JcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIE9yaWdpbmFsQ29tcG9uZW50XG4gIH1cblxuICBjb25zdCBXcmFwcGVyQ29tcG9uZW50OiBSZWFjdC5GQzxQPiA9IChwcm9wcykgPT4ge1xuICAgIGxldCBnbG9iYWxBbnk6IGFueSA9IHdpbmRvd1xuICAgIGdsb2JhbEFueSA9IHdpbmRvd1xuXG4gICAgbGV0IENvbXBvbmVudCA9IE9yaWdpbmFsQ29tcG9uZW50XG5cbiAgICBpZiAoZ2xvYmFsQW55LkFkbWluQnJvXG4gICAgICAmJiBnbG9iYWxBbnkuQWRtaW5Ccm8uVXNlckNvbXBvbmVudHNcbiAgICAgICYmIGdsb2JhbEFueS5BZG1pbkJyby5Vc2VyQ29tcG9uZW50c1tuYW1lXVxuICAgICkge1xuICAgICAgQ29tcG9uZW50ID0gZ2xvYmFsQW55LkFkbWluQnJvLlVzZXJDb21wb25lbnRzW25hbWVdXG4gICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IE9yaWdpbmFsQ29tcG9uZW50PXtPcmlnaW5hbENvbXBvbmVudH0gLz5cbiAgICB9XG5cbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICByZXR1cm4gV3JhcHBlckNvbXBvbmVudFxufVxuXG5leHBvcnQge1xuICBhbGxvd092ZXJyaWRlIGFzIGRlZmF1bHQsXG4gIGFsbG93T3ZlcnJpZGUsXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjc3NDbGFzcywgdGhlbWVHZXQgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBWaWV3SGVscGVycyBmcm9tICcuLi8uLi8uLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXG5pbXBvcnQgeyBCcmFuZGluZ09wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi8uLi9hZG1pbi1icm8tb3B0aW9ucy5pbnRlcmZhY2UnXG5pbXBvcnQgYWxsb3dPdmVycmlkZSBmcm9tICcuLi8uLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGJyYW5kaW5nOiBCcmFuZGluZ09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRMb2dvID0gc3R5bGVkKExpbmspYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAke3RoZW1lR2V0KCdzcGFjZScsICdsZycpfSAke3RoZW1lR2V0KCdzcGFjZScsICd4eGwnKX0gJHt0aGVtZUdldCgnc3BhY2UnLCAneHhsJyl9O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJiA+IGgxIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzJywgJ2JvbGRlcicpfTtcbiAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzJywgJ2JvbGRlcicpfTtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzJywgJ2dyZXk4MCcpfTtcbiAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcycsICd4bCcpfTtcbiAgICBsaW5lLWhlaWdodDogJHt0aGVtZUdldCgnbGluZUhlaWdodHMnLCAneGwnKX07XG4gIH1cblxuICAmID4gaW1nIHtcbiAgICBtYXgtd2lkdGg6IDE3MHB4O1xuICB9XG5cbiAgJjpob3ZlciBoMSB7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycycsICdwcmltYXJ5MTAwJyl9O1xuICB9XG5gXG5cbmNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxuXG5jb25zdCBTaWRlYmFyQnJhbmRpbmc6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGJyYW5kaW5nIH0gPSBwcm9wc1xuICBjb25zdCB7IGxvZ28sIGNvbXBhbnlOYW1lIH0gPSBicmFuZGluZ1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRMb2dvXG4gICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzKCdMb2dvJyl9XG4gICAgICB0bz17aC5kYXNoYm9hcmRVcmwoKX1cbiAgICA+XG4gICAgICB7bG9nbyA/IChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17bG9nb31cbiAgICAgICAgICBhbHQ9e2NvbXBhbnlOYW1lfVxuICAgICAgICAvPlxuICAgICAgKSA6IDxoMT57Y29tcGFueU5hbWV9PC9oMT59XG4gICAgPC9TdHlsZWRMb2dvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsbG93T3ZlcnJpZGUoU2lkZWJhckJyYW5kaW5nLCAnU2lkZWJhckJyYW5kaW5nJylcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVJlZHVjZTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlPZmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5T2Yob2JqZWN0KSB7XG4gIHJldHVybiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHlPZjtcbiIsInZhciBiYXNlUHJvcGVydHlPZiA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eU9mJyk7XG5cbi8qKiBVc2VkIHRvIG1hcCBMYXRpbiBVbmljb2RlIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycy4gKi9cbnZhciBkZWJ1cnJlZExldHRlcnMgPSB7XG4gIC8vIExhdGluLTEgU3VwcGxlbWVudCBibG9jay5cbiAgJ1xceGMwJzogJ0EnLCAgJ1xceGMxJzogJ0EnLCAnXFx4YzInOiAnQScsICdcXHhjMyc6ICdBJywgJ1xceGM0JzogJ0EnLCAnXFx4YzUnOiAnQScsXG4gICdcXHhlMCc6ICdhJywgICdcXHhlMSc6ICdhJywgJ1xceGUyJzogJ2EnLCAnXFx4ZTMnOiAnYScsICdcXHhlNCc6ICdhJywgJ1xceGU1JzogJ2EnLFxuICAnXFx4YzcnOiAnQycsICAnXFx4ZTcnOiAnYycsXG4gICdcXHhkMCc6ICdEJywgICdcXHhmMCc6ICdkJyxcbiAgJ1xceGM4JzogJ0UnLCAgJ1xceGM5JzogJ0UnLCAnXFx4Y2EnOiAnRScsICdcXHhjYic6ICdFJyxcbiAgJ1xceGU4JzogJ2UnLCAgJ1xceGU5JzogJ2UnLCAnXFx4ZWEnOiAnZScsICdcXHhlYic6ICdlJyxcbiAgJ1xceGNjJzogJ0knLCAgJ1xceGNkJzogJ0knLCAnXFx4Y2UnOiAnSScsICdcXHhjZic6ICdJJyxcbiAgJ1xceGVjJzogJ2knLCAgJ1xceGVkJzogJ2knLCAnXFx4ZWUnOiAnaScsICdcXHhlZic6ICdpJyxcbiAgJ1xceGQxJzogJ04nLCAgJ1xceGYxJzogJ24nLFxuICAnXFx4ZDInOiAnTycsICAnXFx4ZDMnOiAnTycsICdcXHhkNCc6ICdPJywgJ1xceGQ1JzogJ08nLCAnXFx4ZDYnOiAnTycsICdcXHhkOCc6ICdPJyxcbiAgJ1xceGYyJzogJ28nLCAgJ1xceGYzJzogJ28nLCAnXFx4ZjQnOiAnbycsICdcXHhmNSc6ICdvJywgJ1xceGY2JzogJ28nLCAnXFx4ZjgnOiAnbycsXG4gICdcXHhkOSc6ICdVJywgICdcXHhkYSc6ICdVJywgJ1xceGRiJzogJ1UnLCAnXFx4ZGMnOiAnVScsXG4gICdcXHhmOSc6ICd1JywgICdcXHhmYSc6ICd1JywgJ1xceGZiJzogJ3UnLCAnXFx4ZmMnOiAndScsXG4gICdcXHhkZCc6ICdZJywgICdcXHhmZCc6ICd5JywgJ1xceGZmJzogJ3knLFxuICAnXFx4YzYnOiAnQWUnLCAnXFx4ZTYnOiAnYWUnLFxuICAnXFx4ZGUnOiAnVGgnLCAnXFx4ZmUnOiAndGgnLFxuICAnXFx4ZGYnOiAnc3MnLFxuICAvLyBMYXRpbiBFeHRlbmRlZC1BIGJsb2NrLlxuICAnXFx1MDEwMCc6ICdBJywgICdcXHUwMTAyJzogJ0EnLCAnXFx1MDEwNCc6ICdBJyxcbiAgJ1xcdTAxMDEnOiAnYScsICAnXFx1MDEwMyc6ICdhJywgJ1xcdTAxMDUnOiAnYScsXG4gICdcXHUwMTA2JzogJ0MnLCAgJ1xcdTAxMDgnOiAnQycsICdcXHUwMTBhJzogJ0MnLCAnXFx1MDEwYyc6ICdDJyxcbiAgJ1xcdTAxMDcnOiAnYycsICAnXFx1MDEwOSc6ICdjJywgJ1xcdTAxMGInOiAnYycsICdcXHUwMTBkJzogJ2MnLFxuICAnXFx1MDEwZSc6ICdEJywgICdcXHUwMTEwJzogJ0QnLCAnXFx1MDEwZic6ICdkJywgJ1xcdTAxMTEnOiAnZCcsXG4gICdcXHUwMTEyJzogJ0UnLCAgJ1xcdTAxMTQnOiAnRScsICdcXHUwMTE2JzogJ0UnLCAnXFx1MDExOCc6ICdFJywgJ1xcdTAxMWEnOiAnRScsXG4gICdcXHUwMTEzJzogJ2UnLCAgJ1xcdTAxMTUnOiAnZScsICdcXHUwMTE3JzogJ2UnLCAnXFx1MDExOSc6ICdlJywgJ1xcdTAxMWInOiAnZScsXG4gICdcXHUwMTFjJzogJ0cnLCAgJ1xcdTAxMWUnOiAnRycsICdcXHUwMTIwJzogJ0cnLCAnXFx1MDEyMic6ICdHJyxcbiAgJ1xcdTAxMWQnOiAnZycsICAnXFx1MDExZic6ICdnJywgJ1xcdTAxMjEnOiAnZycsICdcXHUwMTIzJzogJ2cnLFxuICAnXFx1MDEyNCc6ICdIJywgICdcXHUwMTI2JzogJ0gnLCAnXFx1MDEyNSc6ICdoJywgJ1xcdTAxMjcnOiAnaCcsXG4gICdcXHUwMTI4JzogJ0knLCAgJ1xcdTAxMmEnOiAnSScsICdcXHUwMTJjJzogJ0knLCAnXFx1MDEyZSc6ICdJJywgJ1xcdTAxMzAnOiAnSScsXG4gICdcXHUwMTI5JzogJ2knLCAgJ1xcdTAxMmInOiAnaScsICdcXHUwMTJkJzogJ2knLCAnXFx1MDEyZic6ICdpJywgJ1xcdTAxMzEnOiAnaScsXG4gICdcXHUwMTM0JzogJ0onLCAgJ1xcdTAxMzUnOiAnaicsXG4gICdcXHUwMTM2JzogJ0snLCAgJ1xcdTAxMzcnOiAnaycsICdcXHUwMTM4JzogJ2snLFxuICAnXFx1MDEzOSc6ICdMJywgICdcXHUwMTNiJzogJ0wnLCAnXFx1MDEzZCc6ICdMJywgJ1xcdTAxM2YnOiAnTCcsICdcXHUwMTQxJzogJ0wnLFxuICAnXFx1MDEzYSc6ICdsJywgICdcXHUwMTNjJzogJ2wnLCAnXFx1MDEzZSc6ICdsJywgJ1xcdTAxNDAnOiAnbCcsICdcXHUwMTQyJzogJ2wnLFxuICAnXFx1MDE0Myc6ICdOJywgICdcXHUwMTQ1JzogJ04nLCAnXFx1MDE0Nyc6ICdOJywgJ1xcdTAxNGEnOiAnTicsXG4gICdcXHUwMTQ0JzogJ24nLCAgJ1xcdTAxNDYnOiAnbicsICdcXHUwMTQ4JzogJ24nLCAnXFx1MDE0Yic6ICduJyxcbiAgJ1xcdTAxNGMnOiAnTycsICAnXFx1MDE0ZSc6ICdPJywgJ1xcdTAxNTAnOiAnTycsXG4gICdcXHUwMTRkJzogJ28nLCAgJ1xcdTAxNGYnOiAnbycsICdcXHUwMTUxJzogJ28nLFxuICAnXFx1MDE1NCc6ICdSJywgICdcXHUwMTU2JzogJ1InLCAnXFx1MDE1OCc6ICdSJyxcbiAgJ1xcdTAxNTUnOiAncicsICAnXFx1MDE1Nyc6ICdyJywgJ1xcdTAxNTknOiAncicsXG4gICdcXHUwMTVhJzogJ1MnLCAgJ1xcdTAxNWMnOiAnUycsICdcXHUwMTVlJzogJ1MnLCAnXFx1MDE2MCc6ICdTJyxcbiAgJ1xcdTAxNWInOiAncycsICAnXFx1MDE1ZCc6ICdzJywgJ1xcdTAxNWYnOiAncycsICdcXHUwMTYxJzogJ3MnLFxuICAnXFx1MDE2Mic6ICdUJywgICdcXHUwMTY0JzogJ1QnLCAnXFx1MDE2Nic6ICdUJyxcbiAgJ1xcdTAxNjMnOiAndCcsICAnXFx1MDE2NSc6ICd0JywgJ1xcdTAxNjcnOiAndCcsXG4gICdcXHUwMTY4JzogJ1UnLCAgJ1xcdTAxNmEnOiAnVScsICdcXHUwMTZjJzogJ1UnLCAnXFx1MDE2ZSc6ICdVJywgJ1xcdTAxNzAnOiAnVScsICdcXHUwMTcyJzogJ1UnLFxuICAnXFx1MDE2OSc6ICd1JywgICdcXHUwMTZiJzogJ3UnLCAnXFx1MDE2ZCc6ICd1JywgJ1xcdTAxNmYnOiAndScsICdcXHUwMTcxJzogJ3UnLCAnXFx1MDE3Myc6ICd1JyxcbiAgJ1xcdTAxNzQnOiAnVycsICAnXFx1MDE3NSc6ICd3JyxcbiAgJ1xcdTAxNzYnOiAnWScsICAnXFx1MDE3Nyc6ICd5JywgJ1xcdTAxNzgnOiAnWScsXG4gICdcXHUwMTc5JzogJ1onLCAgJ1xcdTAxN2InOiAnWicsICdcXHUwMTdkJzogJ1onLFxuICAnXFx1MDE3YSc6ICd6JywgICdcXHUwMTdjJzogJ3onLCAnXFx1MDE3ZSc6ICd6JyxcbiAgJ1xcdTAxMzInOiAnSUonLCAnXFx1MDEzMyc6ICdpaicsXG4gICdcXHUwMTUyJzogJ09lJywgJ1xcdTAxNTMnOiAnb2UnLFxuICAnXFx1MDE0OSc6IFwiJ25cIiwgJ1xcdTAxN2YnOiAncydcbn07XG5cbi8qKlxuICogVXNlZCBieSBgXy5kZWJ1cnJgIHRvIGNvbnZlcnQgTGF0aW4tMSBTdXBwbGVtZW50IGFuZCBMYXRpbiBFeHRlbmRlZC1BXG4gKiBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXR0ZXIgVGhlIG1hdGNoZWQgbGV0dGVyIHRvIGRlYnVyci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGRlYnVycmVkIGxldHRlci5cbiAqL1xudmFyIGRlYnVyckxldHRlciA9IGJhc2VQcm9wZXJ0eU9mKGRlYnVycmVkTGV0dGVycyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVidXJyTGV0dGVyO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG4iLCJ2YXIgZGVidXJyTGV0dGVyID0gcmVxdWlyZSgnLi9fZGVidXJyTGV0dGVyJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIExhdGluIFVuaWNvZGUgbGV0dGVycyAoZXhjbHVkaW5nIG1hdGhlbWF0aWNhbCBvcGVyYXRvcnMpLiAqL1xudmFyIHJlTGF0aW4gPSAvW1xceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHhmZlxcdTAxMDAtXFx1MDE3Zl0vZztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3MpIGFuZFxuICogW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrcyBmb3Igc3ltYm9sc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzX2Zvcl9TeW1ib2xzKS5cbiAqL1xudmFyIHJlQ29tYm9NYXJrID0gUmVnRXhwKHJzQ29tYm8sICdnJyk7XG5cbi8qKlxuICogRGVidXJycyBgc3RyaW5nYCBieSBjb252ZXJ0aW5nXG4gKiBbTGF0aW4tMSBTdXBwbGVtZW50XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbi0xX1N1cHBsZW1lbnRfKFVuaWNvZGVfYmxvY2spI0NoYXJhY3Rlcl90YWJsZSlcbiAqIGFuZCBbTGF0aW4gRXh0ZW5kZWQtQV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW5fRXh0ZW5kZWQtQSlcbiAqIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycyBhbmQgcmVtb3ZpbmdcbiAqIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3NdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrcykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gZGVidXJyLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZGVidXJyZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlYnVycignZMOpasOgIHZ1Jyk7XG4gKiAvLyA9PiAnZGVqYSB2dSdcbiAqL1xuZnVuY3Rpb24gZGVidXJyKHN0cmluZykge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICByZXR1cm4gc3RyaW5nICYmIHN0cmluZy5yZXBsYWNlKHJlTGF0aW4sIGRlYnVyckxldHRlcikucmVwbGFjZShyZUNvbWJvTWFyaywgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYnVycjtcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIHdvcmRzIGNvbXBvc2VkIG9mIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLiAqL1xudmFyIHJlQXNjaWlXb3JkID0gL1teXFx4MDAtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4N2ZdKy9nO1xuXG4vKipcbiAqIFNwbGl0cyBhbiBBU0NJSSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIGFzY2lpV29yZHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVBc2NpaVdvcmQpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpV29yZHM7XG4iLCIvKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB0aGF0IG5lZWQgYSBtb3JlIHJvYnVzdCByZWdleHAgdG8gbWF0Y2ggd29yZHMuICovXG52YXIgcmVIYXNVbmljb2RlV29yZCA9IC9bYS16XVtBLVpdfFtBLVpdezJ9W2Etel18WzAtOV1bYS16QS1aXXxbYS16QS1aXVswLTldfFteYS16QS1aMC05IF0vO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBhIHdvcmQgY29tcG9zZWQgb2YgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHdvcmQgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzVW5pY29kZVdvcmQoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGVXb3JkLnRlc3Qoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNVbmljb2RlV29yZDtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc0RpbmdiYXRSYW5nZSA9ICdcXFxcdTI3MDAtXFxcXHUyN2JmJyxcbiAgICByc0xvd2VyUmFuZ2UgPSAnYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmJyxcbiAgICByc01hdGhPcFJhbmdlID0gJ1xcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjcnLFxuICAgIHJzTm9uQ2hhclJhbmdlID0gJ1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZicsXG4gICAgcnNQdW5jdHVhdGlvblJhbmdlID0gJ1xcXFx1MjAwMC1cXFxcdTIwNmYnLFxuICAgIHJzU3BhY2VSYW5nZSA9ICcgXFxcXHRcXFxceDBiXFxcXGZcXFxceGEwXFxcXHVmZWZmXFxcXG5cXFxcclxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MTY4MFxcXFx1MTgwZVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwYVxcXFx1MjAyZlxcXFx1MjA1ZlxcXFx1MzAwMCcsXG4gICAgcnNVcHBlclJhbmdlID0gJ0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZScsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnLFxuICAgIHJzQnJlYWtSYW5nZSA9IHJzTWF0aE9wUmFuZ2UgKyByc05vbkNoYXJSYW5nZSArIHJzUHVuY3R1YXRpb25SYW5nZSArIHJzU3BhY2VSYW5nZTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXBvcyA9IFwiWydcXHUyMDE5XVwiLFxuICAgIHJzQnJlYWsgPSAnWycgKyByc0JyZWFrUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJyxcbiAgICByc0RpZ2l0cyA9ICdcXFxcZCsnLFxuICAgIHJzRGluZ2JhdCA9ICdbJyArIHJzRGluZ2JhdFJhbmdlICsgJ10nLFxuICAgIHJzTG93ZXIgPSAnWycgKyByc0xvd2VyUmFuZ2UgKyAnXScsXG4gICAgcnNNaXNjID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyByc0JyZWFrUmFuZ2UgKyByc0RpZ2l0cyArIHJzRGluZ2JhdFJhbmdlICsgcnNMb3dlclJhbmdlICsgcnNVcHBlclJhbmdlICsgJ10nLFxuICAgIHJzRml0eiA9ICdcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0nLFxuICAgIHJzTW9kaWZpZXIgPSAnKD86JyArIHJzQ29tYm8gKyAnfCcgKyByc0ZpdHogKyAnKScsXG4gICAgcnNOb25Bc3RyYWwgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc1JlZ2lvbmFsID0gJyg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn0nLFxuICAgIHJzU3VyclBhaXIgPSAnW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdJyxcbiAgICByc1VwcGVyID0gJ1snICsgcnNVcHBlclJhbmdlICsgJ10nLFxuICAgIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSByZWdleGVzLiAqL1xudmFyIHJzTWlzY0xvd2VyID0gJyg/OicgKyByc0xvd2VyICsgJ3wnICsgcnNNaXNjICsgJyknLFxuICAgIHJzTWlzY1VwcGVyID0gJyg/OicgKyByc1VwcGVyICsgJ3wnICsgcnNNaXNjICsgJyknLFxuICAgIHJzT3B0Q29udHJMb3dlciA9ICcoPzonICsgcnNBcG9zICsgJyg/OmR8bGx8bXxyZXxzfHR8dmUpKT8nLFxuICAgIHJzT3B0Q29udHJVcHBlciA9ICcoPzonICsgcnNBcG9zICsgJyg/OkR8TEx8TXxSRXxTfFR8VkUpKT8nLFxuICAgIHJlT3B0TW9kID0gcnNNb2RpZmllciArICc/JyxcbiAgICByc09wdFZhciA9ICdbJyArIHJzVmFyUmFuZ2UgKyAnXT8nLFxuICAgIHJzT3B0Sm9pbiA9ICcoPzonICsgcnNaV0ogKyAnKD86JyArIFtyc05vbkFzdHJhbCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNPcHRWYXIgKyByZU9wdE1vZCArICcpKicsXG4gICAgcnNPcmRMb3dlciA9ICdcXFxcZCooPzoxc3R8Mm5kfDNyZHwoPyFbMTIzXSlcXFxcZHRoKSg/PVxcXFxifFtBLVpfXSknLFxuICAgIHJzT3JkVXBwZXIgPSAnXFxcXGQqKD86MVNUfDJORHwzUkR8KD8hWzEyM10pXFxcXGRUSCkoPz1cXFxcYnxbYS16X10pJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNFbW9qaSA9ICcoPzonICsgW3JzRGluZ2JhdCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNTZXE7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGNvbXBsZXggb3IgY29tcG91bmQgd29yZHMuICovXG52YXIgcmVVbmljb2RlV29yZCA9IFJlZ0V4cChbXG4gIHJzVXBwZXIgKyAnPycgKyByc0xvd2VyICsgJysnICsgcnNPcHRDb250ckxvd2VyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciwgJyQnXS5qb2luKCd8JykgKyAnKScsXG4gIHJzTWlzY1VwcGVyICsgJysnICsgcnNPcHRDb250clVwcGVyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciArIHJzTWlzY0xvd2VyLCAnJCddLmpvaW4oJ3wnKSArICcpJyxcbiAgcnNVcHBlciArICc/JyArIHJzTWlzY0xvd2VyICsgJysnICsgcnNPcHRDb250ckxvd2VyLFxuICByc1VwcGVyICsgJysnICsgcnNPcHRDb250clVwcGVyLFxuICByc09yZFVwcGVyLFxuICByc09yZExvd2VyLFxuICByc0RpZ2l0cyxcbiAgcnNFbW9qaVxuXS5qb2luKCd8JyksICdnJyk7XG5cbi8qKlxuICogU3BsaXRzIGEgVW5pY29kZSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVXb3JkcyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGVXb3JkKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmljb2RlV29yZHM7XG4iLCJ2YXIgYXNjaWlXb3JkcyA9IHJlcXVpcmUoJy4vX2FzY2lpV29yZHMnKSxcbiAgICBoYXNVbmljb2RlV29yZCA9IHJlcXVpcmUoJy4vX2hhc1VuaWNvZGVXb3JkJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyksXG4gICAgdW5pY29kZVdvcmRzID0gcmVxdWlyZSgnLi9fdW5pY29kZVdvcmRzJyk7XG5cbi8qKlxuICogU3BsaXRzIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge1JlZ0V4cHxzdHJpbmd9IFtwYXR0ZXJuXSBUaGUgcGF0dGVybiB0byBtYXRjaCB3b3Jkcy5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLndvcmRzKCdmcmVkLCBiYXJuZXksICYgcGViYmxlcycpO1xuICogLy8gPT4gWydmcmVkJywgJ2Jhcm5leScsICdwZWJibGVzJ11cbiAqXG4gKiBfLndvcmRzKCdmcmVkLCBiYXJuZXksICYgcGViYmxlcycsIC9bXiwgXSsvZyk7XG4gKiAvLyA9PiBbJ2ZyZWQnLCAnYmFybmV5JywgJyYnLCAncGViYmxlcyddXG4gKi9cbmZ1bmN0aW9uIHdvcmRzKHN0cmluZywgcGF0dGVybiwgZ3VhcmQpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgcGF0dGVybiA9IGd1YXJkID8gdW5kZWZpbmVkIDogcGF0dGVybjtcblxuICBpZiAocGF0dGVybiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhhc1VuaWNvZGVXb3JkKHN0cmluZykgPyB1bmljb2RlV29yZHMoc3RyaW5nKSA6IGFzY2lpV29yZHMoc3RyaW5nKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nLm1hdGNoKHBhdHRlcm4pIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdvcmRzO1xuIiwidmFyIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBkZWJ1cnIgPSByZXF1aXJlKCcuL2RlYnVycicpLFxuICAgIHdvcmRzID0gcmVxdWlyZSgnLi93b3JkcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBcG9zID0gXCJbJ1xcdTIwMTldXCI7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGFwb3N0cm9waGVzLiAqL1xudmFyIHJlQXBvcyA9IFJlZ0V4cChyc0Fwb3MsICdnJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uY2FtZWxDYXNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNvbWJpbmUgZWFjaCB3b3JkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29tcG91bmRlciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29tcG91bmRlcihjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFycmF5UmVkdWNlKHdvcmRzKGRlYnVycihzdHJpbmcpLnJlcGxhY2UocmVBcG9zLCAnJykpLCBjYWxsYmFjaywgJycpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNvbXBvdW5kZXI7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnNsaWNlYCB3aXRob3V0IGFuIGl0ZXJhdGVlIGNhbGwgZ3VhcmQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzbGljZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBzbGljZSBvZiBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG4gIH1cbiAgZW5kID0gZW5kID4gbGVuZ3RoID8gbGVuZ3RoIDogZW5kO1xuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5ndGg7XG4gIH1cbiAgbGVuZ3RoID0gc3RhcnQgPiBlbmQgPyAwIDogKChlbmQgLSBzdGFydCkgPj4+IDApO1xuICBzdGFydCA+Pj49IDA7XG5cbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGFycmF5W2luZGV4ICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNsaWNlO1xuIiwidmFyIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4vX2Jhc2VTbGljZScpO1xuXG4vKipcbiAqIENhc3RzIGBhcnJheWAgdG8gYSBzbGljZSBpZiBpdCdzIG5lZWRlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHNsaWNlLlxuICovXG5mdW5jdGlvbiBjYXN0U2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQ7XG4gIHJldHVybiAoIXN0YXJ0ICYmIGVuZCA+PSBsZW5ndGgpID8gYXJyYXkgOiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RTbGljZTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB3aXRoIFt6ZXJvLXdpZHRoIGpvaW5lcnMgb3IgY29kZSBwb2ludHMgZnJvbSB0aGUgYXN0cmFsIHBsYW5lc10oaHR0cDovL2Vldi5lZS9ibG9nLzIwMTUvMDkvMTIvZGFyay1jb3JuZXJzLW9mLXVuaWNvZGUvKS4gKi9cbnZhciByZUhhc1VuaWNvZGUgPSBSZWdFeHAoJ1snICsgcnNaV0ogKyByc0FzdHJhbFJhbmdlICArIHJzQ29tYm9SYW5nZSArIHJzVmFyUmFuZ2UgKyAnXScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBVbmljb2RlIHN5bWJvbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgc3ltYm9sIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1VuaWNvZGUoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGUudGVzdChzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1VuaWNvZGU7XG4iLCIvKipcbiAqIENvbnZlcnRzIGFuIEFTQ0lJIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhc2NpaVRvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpVG9BcnJheTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0FzdHJhbCA9ICdbJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNTeW1ib2wgPSAnKD86JyArIFtyc05vbkFzdHJhbCArIHJzQ29tYm8gKyAnPycsIHJzQ29tYm8sIHJzUmVnaW9uYWwsIHJzU3VyclBhaXIsIHJzQXN0cmFsXS5qb2luKCd8JykgKyAnKSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIFtzdHJpbmcgc3ltYm9sc10oaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtdW5pY29kZSkuICovXG52YXIgcmVVbmljb2RlID0gUmVnRXhwKHJzRml0eiArICcoPz0nICsgcnNGaXR6ICsgJyl8JyArIHJzU3ltYm9sICsgcnNTZXEsICdnJyk7XG5cbi8qKlxuICogQ29udmVydHMgYSBVbmljb2RlIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiB1bmljb2RlVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGUpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWNvZGVUb0FycmF5O1xuIiwidmFyIGFzY2lpVG9BcnJheSA9IHJlcXVpcmUoJy4vX2FzY2lpVG9BcnJheScpLFxuICAgIGhhc1VuaWNvZGUgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlJyksXG4gICAgdW5pY29kZVRvQXJyYXkgPSByZXF1aXJlKCcuL191bmljb2RlVG9BcnJheScpO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gaGFzVW5pY29kZShzdHJpbmcpXG4gICAgPyB1bmljb2RlVG9BcnJheShzdHJpbmcpXG4gICAgOiBhc2NpaVRvQXJyYXkoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb0FycmF5O1xuIiwidmFyIGNhc3RTbGljZSA9IHJlcXVpcmUoJy4vX2Nhc3RTbGljZScpLFxuICAgIGhhc1VuaWNvZGUgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlJyksXG4gICAgc3RyaW5nVG9BcnJheSA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvQXJyYXknKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5sb3dlckZpcnN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG5hbWUgb2YgdGhlIGBTdHJpbmdgIGNhc2UgbWV0aG9kIHRvIHVzZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhc2VGaXJzdChtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuXG4gICAgdmFyIHN0clN5bWJvbHMgPSBoYXNVbmljb2RlKHN0cmluZylcbiAgICAgID8gc3RyaW5nVG9BcnJheShzdHJpbmcpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIHZhciBjaHIgPSBzdHJTeW1ib2xzXG4gICAgICA/IHN0clN5bWJvbHNbMF1cbiAgICAgIDogc3RyaW5nLmNoYXJBdCgwKTtcblxuICAgIHZhciB0cmFpbGluZyA9IHN0clN5bWJvbHNcbiAgICAgID8gY2FzdFNsaWNlKHN0clN5bWJvbHMsIDEpLmpvaW4oJycpXG4gICAgICA6IHN0cmluZy5zbGljZSgxKTtcblxuICAgIHJldHVybiBjaHJbbWV0aG9kTmFtZV0oKSArIHRyYWlsaW5nO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNhc2VGaXJzdDtcbiIsInZhciBjcmVhdGVDYXNlRmlyc3QgPSByZXF1aXJlKCcuL19jcmVhdGVDYXNlRmlyc3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGBzdHJpbmdgIHRvIHVwcGVyIGNhc2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udXBwZXJGaXJzdCgnZnJlZCcpO1xuICogLy8gPT4gJ0ZyZWQnXG4gKlxuICogXy51cHBlckZpcnN0KCdGUkVEJyk7XG4gKiAvLyA9PiAnRlJFRCdcbiAqL1xudmFyIHVwcGVyRmlyc3QgPSBjcmVhdGVDYXNlRmlyc3QoJ3RvVXBwZXJDYXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdXBwZXJGaXJzdDtcbiIsInZhciBjcmVhdGVDb21wb3VuZGVyID0gcmVxdWlyZSgnLi9fY3JlYXRlQ29tcG91bmRlcicpLFxuICAgIHVwcGVyRmlyc3QgPSByZXF1aXJlKCcuL3VwcGVyRmlyc3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0b1xuICogW3N0YXJ0IGNhc2VdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xldHRlcl9jYXNlI1N0eWxpc3RpY19vcl9zcGVjaWFsaXNlZF91c2FnZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjEuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0YXJ0IGNhc2VkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5zdGFydENhc2UoJy0tZm9vLWJhci0tJyk7XG4gKiAvLyA9PiAnRm9vIEJhcidcbiAqXG4gKiBfLnN0YXJ0Q2FzZSgnZm9vQmFyJyk7XG4gKiAvLyA9PiAnRm9vIEJhcidcbiAqXG4gKiBfLnN0YXJ0Q2FzZSgnX19GT09fQkFSX18nKTtcbiAqIC8vID0+ICdGT08gQkFSJ1xuICovXG52YXIgc3RhcnRDYXNlID0gY3JlYXRlQ29tcG91bmRlcihmdW5jdGlvbihyZXN1bHQsIHdvcmQsIGluZGV4KSB7XG4gIHJldHVybiByZXN1bHQgKyAoaW5kZXggPyAnICcgOiAnJykgKyB1cHBlckZpcnN0KHdvcmQpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnRDYXNlO1xuIiwiaW1wb3J0IHsgaTE4biBhcyBJMThuLCBURnVuY3Rpb24sIFRPcHRpb25zIH0gZnJvbSAnaTE4bmV4dCdcbmltcG9ydCBzdGFydENhc2UgZnJvbSAnbG9kYXNoL3N0YXJ0Q2FzZSdcblxuLyoqXG4gKiBAbWVtYmVyb2YgVHJhbnNsYXRlRnVuY3Rpb25zXG4gKiBAYWxpYXMgVHJhbnNsYXRlRnVuY3Rpb25cbiAqL1xuZXhwb3J0IHR5cGUgVHJhbnNsYXRlRnVuY3Rpb24gPSAoXG4gIC8qKlxuICAgKiBrd3kgd2hpY2ggc2hvdWxkIGJlIHRyYW5zbGF0ZWQgaW4gYSBnaXZlbiBuYW1lc3BhY2VcbiAgICovXG4gIGtleTogc3RyaW5nLFxuICAvKipcbiAgICogT3B0aW9uYWwgcmVzb3VyY2VJZCBvciBbVHJhbnNsYXRlIG9wdGlvbnNde0BsaW5rIGh0dHBzOi8vd3d3LmkxOG5leHQuY29tL292ZXJ2aWV3L2NvbmZpZ3VyYXRpb24tb3B0aW9uc31cbiAgICovXG4gIHJlc291cmNlSWQ/OiBzdHJpbmcgfCBUT3B0aW9ucyxcbiAgLyoqXG4gICAqIFtUcmFuc2xhdGUgb3B0aW9uc117QGxpbmsgaHR0cHM6Ly93d3cuaTE4bmV4dC5jb20vb3ZlcnZpZXcvY29uZmlndXJhdGlvbi1vcHRpb25zfVxuICAgKi9cbiAgb3B0aW9ucz86IFRPcHRpb25zXG4pID0+IHN0cmluZ1xuXG4vKipcbiAqIFRyYW5zbGF0ZSBGdW5jdGlvbnMgYXJlIHRoZSBoZWxwZXIgZnVuY3Rpb25zIHdoaWNoIHlvdSBjYW4gdXNlIHRvIHRyYW5zbGF0ZVxuICogeW91ciBhcHBsaWNhdGlvbi5cbiAqXG4gKiBPbiB0aGUgZnJvbnRlZCB0aGV5IGNhbiBiZSB1c2VkIHdpdGgge0BsaW5rIHVzZVRyYW5zbGF0aW9ufSBob29rLiBPbiB0aGUgYmFja2VuZFxuICogdGhleSBhcmUgaW5qZWN0ZWQgdG8gYW55IHtAbGluayBBZG1pbkJyb30gaW5zdGFuY2UgYW5kIHtAbGluayBBY3Rpb25Db250ZXh0fS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGVGdW5jdGlvbnMge1xuICAvKipcbiAgICogc2hvcnRjdXQgZm9yIEkxOG4udHJhbnNsYXRlIGZ1bmN0aW9uLlxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LmkxOG5leHQuY29tL292ZXJ2aWV3L2FwaSN0XG4gICAqL1xuICB0OiBURnVuY3Rpb247XG4gIC8qKlxuICAgKiBJMThuLnRyYW5zbGF0ZSBmdW5jdGlvbi5cbiAgICogQHNlZSBodHRwczovL3d3dy5pMThuZXh0LmNvbS9vdmVydmlldy9hcGkjdFxuICAgKi9cbiAgdHJhbnNsYXRlOiBURnVuY3Rpb247XG4gIC8qKlxuICAgKiBTaG9ydGN1dCBmb3Ige0BsaW5rIFRyYW5zbGF0ZUZ1bmN0aW9ucyN0cmFuc2xhdGVBY3Rpb259XG4gICAqL1xuICB0YTogVHJhbnNsYXRlRnVuY3Rpb247XG4gIC8qKlxuICAgKiBUcmFuc2xhdGVzIGFsbCBbYWN0aW9uc117QGxpbmsgQWN0aW9ufSwgdG8gYmUgbW9yZSBzcGVjaWZpYyAtIHRoZWlyIGxhYmVscy5cbiAgICogQnkgZGVmYXVsdCwgaXQgbG9va3MgZm9yIGEgW3RyYW5zbGF0aW9uIGtleV17QGxpbmsgTG9jYWxlVHJhbnNsYXRpb25zfSBpblxuICAgKiBgcmVzb3VyY2Uue3Jlc291cmNlSWR9LmFjdGlvbnMue2FjdGlvbk5hbWV9YCwgd2hlbiBpdCBkb2Vzbid0IGZpbmRcbiAgICogdGhhdCwgdGhlIGxvb2t1cCBpcyBtb3ZlZCB0byBgYWN0aW9ucy57YWN0aW9uTmFtZX1gLlxuICAgKiBGaW5hbGx5LCB3aGVuIHRoYXQgYWxzbyBmYWlscywgaXQgcmV0dXJucyBzdGFydENhc2Ugb2YgdGhlIGFjdGlvbiBuYW1lLlxuICAgKi9cbiAgdHJhbnNsYXRlQWN0aW9uOiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFNob3J0Y3V0IGZvciB7QGxpbmsgVHJhbnNsYXRlRnVuY3Rpb25zI3RyYW5zbGF0ZUJ1dHRvbn1cbiAgICovXG4gIHRiOiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFRyYW5zbGF0ZXMgYWxsIGJ1dHRvbnMuXG4gICAqIEJ5IGRlZmF1bHQsIGl0IGxvb2tzIGZvciBhIFt0cmFuc2xhdGlvbiBrZXlde0BsaW5rIExvY2FsZVRyYW5zbGF0aW9uc30gaW5cbiAgICogYHJlc291cmNlLntyZXNvdXJjZUlkfS5idXR0b25zLnthY3Rpb25OYW1lfWAsIHdoZW4gaXQgZG9lc24ndCBmaW5kXG4gICAqIHRoYXQsIHRoZSBsb29rdXAgaXMgbW92ZWQgdG8gYGJ1dHRvbnMue2FjdGlvbk5hbWV9YC5cbiAgICogRmluYWxseSwgd2hlbiB0aGF0IGFsc28gZmFpbHMsIGl0IHJldHVybnMgc3RhcnRDYXNlIG9mIHRoZSBnaXZlbiBidXR0b24gbmFtZS5cbiAgICovXG4gIHRyYW5zbGF0ZUJ1dHRvbjogVHJhbnNsYXRlRnVuY3Rpb247XG4gIC8qKlxuICAgKiBTaG9ydGN1dCBmb3Ige0BsaW5rIFRyYW5zbGF0ZUZ1bmN0aW9ucyN0cmFuc2xhdGVMYWJlbH1cbiAgICovXG4gIHRsOiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFRyYW5zbGF0ZXMgYWxsIGxhYmVscy4gTW9zdCBvZiBhbGwgYWxsIHJlc291cmNlIG5hbWVzIGFyZSB0cmVhdGVkIGFzIGxhYmVscy5cbiAgICogQWxzbywgbGFiZWxzIGFyZSB0ZXh0cyBpbiB0aGUgdXNlciBpbnRlcmZhY2Ugd2hpY2ggY2Fubm90IGJlIHJlY29nbml6ZWRcbiAgICogYXMgYW55IG90aGVyIHR5cGUuXG4gICAqIEJ5IGRlZmF1bHQsIGl0IGxvb2tzIGZvciBhIFt0cmFuc2xhdGlvbiBrZXlde0BsaW5rIExvY2FsZVRyYW5zbGF0aW9uc30gaW5cbiAgICogYHJlc291cmNlLntyZXNvdXJjZUlkfS5sYWJlbHMue2FjdGlvbk5hbWV9YCwgd2hlbiBpdCBkb2Vzbid0IGZpbmRcbiAgICogdGhhdCwgdGhlIGxvb2t1cCBpcyBtb3ZlZCB0byBgbGFiZWxzLnthY3Rpb25OYW1lfWAuXG4gICAqIEZpbmFsbHksIHdoZW4gdGhhdCBhbHNvIGZhaWxzLCBpdCByZXR1cm5zIHN0YXJ0Q2FzZSBvZiB0aGUgZ2l2ZW4gbGFiZWwuXG4gICAqL1xuICB0cmFuc2xhdGVMYWJlbDogVHJhbnNsYXRlRnVuY3Rpb247XG4gIC8qKlxuICAgKiBTaG9ydGN1dCBmb3Ige0BsaW5rIFRyYW5zbGF0ZUZ1bmN0aW9ucyN0cmFuc2xhdGVQcm9wZXJ0eX1cbiAgICovXG4gIHRwOiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFRyYW5zbGF0ZXMgYWxsIHRoZSBwcm9wZXJ0eSBuYW1lcy5cbiAgICogQnkgZGVmYXVsdCwgaXQgbG9va3MgZm9yIGEgW3RyYW5zbGF0aW9uIGtleV17QGxpbmsgTG9jYWxlVHJhbnNsYXRpb25zfSBpblxuICAgKiBgcmVzb3VyY2Uue3Jlc291cmNlSWR9LnByb3BlcnRpZXMue3Byb3BlcnR5UGF0aH1gLCB3aGVuIGl0IGRvZXNuJ3QgZmluZFxuICAgKiB0aGF0LCB0aGUgbG9va3VwIGlzIG1vdmVkIHRvIGBwcm9wZXJ0aWVzLntwcm9wZXJ0eVBhdGh9YC4gV2hlbiB0aGF0IGZhaWxzLFxuICAgKiBpdCByZXR1cm5zIHN0YXJ0Q2FzZSBvZiB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZS5cbiAgICpcbiAgICogV2hhdCBpcyBpbXBvcnRhbnQgaGVyZSBpcyB0aGF0IHlvdSBjYW4gcHV0IG5lc3RlZCBwcm9wZXJ0eSBhcyB3ZWxsLCBJbiB0aGF0XG4gICAqIGNhc2UgeW91IGhhdmUgdG8gcGFzcyBkb3R0ZWQgcGF0aDpcbiAgICpcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiB7XG4gICAqICAgcHJvcGVydGllczoge1xuICAgKiAgICAgIHBhcmVudDogJ3BhcmVudCBwcm9wZXJ0eScsXG4gICAqICAgICAgJ3BhcmVudC5uZXN0ZWQnOiAnbmVzdGVkIHByb3BlcnR5J1xuICAgKiAgIH1cbiAgICogfVxuICAgKiBgYGBcbiAgICovXG4gIHRyYW5zbGF0ZVByb3BlcnR5OiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFNob3J0Y3V0IGZvciB7QGxpbmsgVHJhbnNsYXRlRnVuY3Rpb25zI3RyYW5zbGF0ZU1lc3NhZ2V9XG4gICAqL1xuICB0bTogVHJhbnNsYXRlRnVuY3Rpb247XG4gIC8qKlxuICAgKiBUcmFuc2xhdGVzIGFsbCB0aGUgbWVzc2FnZXMgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBCeSBkZWZhdWx0LCBpdCBsb29rcyBmb3IgYSBbdHJhbnNsYXRpb24ga2V5XXtAbGluayBMb2NhbGVUcmFuc2xhdGlvbnN9IGluXG4gICAqIGByZXNvdXJjZS57cmVzb3VyY2VJZH0ubWVzc2FnZXMue21lc3NhZ2VOYW1lfWAsIHdoZW4gaXQgZG9lc24ndCBmaW5kXG4gICAqIHRoYXQsIHRoZSBsb29rdXAgaXMgbW92ZWQgdG8gYG1lc3NhZ2VzLnttZXNzYWdlTmFtZX1gLlxuICAgKiBGaW5hbGx5LCB3aGVuIHRoYXQgYWxzbyBmYWlscywgaXQgcmV0dXJucyBzdGFydENhc2Ugb2YgdGhlIGdpdmVuIG1lc3NhZ2UgbmFtZS5cbiAgICovXG4gIHRyYW5zbGF0ZU1lc3NhZ2U6IFRyYW5zbGF0ZUZ1bmN0aW9uO1xufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0TmFtZSA9IChuYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4gbmFtZS5zcGxpdCgnLicpLmpvaW4oJyYjNDY7JylcblxuY29uc3QgdHJhbnNsYXRlID0gKFxuICBpMThuOiBJMThuLFxuICBrZXk6IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nLFxuICByZXNvdXJjZUlkPzogc3RyaW5nIHwgVE9wdGlvbnMsXG4gIG9wdGlvbnM/OiBUT3B0aW9ucyxcbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHJlYWxPcHRpb25zOiBUT3B0aW9ucyA9ICh0eXBlb2YgcmVzb3VyY2VJZCA9PT0gJ3N0cmluZycgPyBvcHRpb25zIDogcmVzb3VyY2VJZCkgfHwge31cbiAgY29uc3QgZm9ybWF0dGVkTmFtZSA9IGZvcm1hdE5hbWUobmFtZSlcbiAgbGV0IGtleXMgPSBbYCR7a2V5fS4ke2Zvcm1hdHRlZE5hbWV9YF1cbiAgaWYgKHJlc291cmNlSWQpIHtcbiAgICBrZXlzID0gW2ByZXNvdXJjZXMuJHtyZXNvdXJjZUlkfS4ke2tleX0uJHtmb3JtYXR0ZWROYW1lfWAsIC4uLmtleXNdXG4gIH1cbiAgaWYgKGkxOG4uZXhpc3RzKGtleXMpKSB7XG4gICAgcmV0dXJuIGkxOG4udChrZXlzLCByZWFsT3B0aW9ucylcbiAgfVxuICByZXR1cm4gcmVhbE9wdGlvbnMuZGVmYXVsdFZhbHVlID8/IHN0YXJ0Q2FzZShuYW1lKVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRnVuY3Rpb25zID0gKGkxOG46IEkxOG4pOiBUcmFuc2xhdGVGdW5jdGlvbnMgPT4ge1xuICBjb25zdCB0cmFuc2xhdGVBY3Rpb246IFRyYW5zbGF0ZUZ1bmN0aW9uID0gKGFjdGlvbk5hbWUsIHJlc291cmNlSWQsIG9wdGlvbnMpID0+IChcbiAgICB0cmFuc2xhdGUoaTE4biwgJ2FjdGlvbnMnLCBhY3Rpb25OYW1lIGFzIHN0cmluZywgcmVzb3VyY2VJZCwgb3B0aW9ucylcbiAgKVxuXG4gIGNvbnN0IHRyYW5zbGF0ZUJ1dHRvbjogVHJhbnNsYXRlRnVuY3Rpb24gPSAoXG4gICAgYnV0dG9uTGFiZWwsIHJlc291cmNlSWQsIG9wdGlvbnMsXG4gICkgPT4gKFxuICAgIHRyYW5zbGF0ZShpMThuLCAnYnV0dG9ucycsIGJ1dHRvbkxhYmVsLCByZXNvdXJjZUlkLCBvcHRpb25zKVxuICApXG5cbiAgY29uc3QgdHJhbnNsYXRlTGFiZWw6IFRyYW5zbGF0ZUZ1bmN0aW9uID0gKGxhYmVsLCByZXNvdXJjZUlkLCBvcHRpb25zKSA9PiAoXG4gICAgdHJhbnNsYXRlKGkxOG4sICdsYWJlbHMnLCBsYWJlbCBhcyBzdHJpbmcsIHJlc291cmNlSWQsIG9wdGlvbnMpXG4gIClcblxuICBjb25zdCB0cmFuc2xhdGVQcm9wZXJ0eTogVHJhbnNsYXRlRnVuY3Rpb24gPSAocHJvcGVydHlOYW1lLCByZXNvdXJjZUlkLCBvcHRpb25zKSA9PiAoXG4gICAgdHJhbnNsYXRlKGkxOG4sICdwcm9wZXJ0aWVzJywgcHJvcGVydHlOYW1lLCByZXNvdXJjZUlkLCBvcHRpb25zKVxuICApXG5cbiAgY29uc3QgdHJhbnNsYXRlTWVzc2FnZTogVHJhbnNsYXRlRnVuY3Rpb24gPSAobWVzc2FnZU5hbWUsIHJlc291cmNlSWQsIG9wdGlvbnMpID0+IChcbiAgICB0cmFuc2xhdGUoaTE4biwgJ21lc3NhZ2VzJywgbWVzc2FnZU5hbWUsIHJlc291cmNlSWQsIG9wdGlvbnMpXG4gIClcblxuICByZXR1cm4ge1xuICAgIHRyYW5zbGF0ZUFjdGlvbixcbiAgICB0YTogdHJhbnNsYXRlQWN0aW9uLFxuICAgIHRyYW5zbGF0ZUJ1dHRvbixcbiAgICB0YjogdHJhbnNsYXRlQnV0dG9uLFxuICAgIHRyYW5zbGF0ZUxhYmVsLFxuICAgIHRsOiB0cmFuc2xhdGVMYWJlbCxcbiAgICB0cmFuc2xhdGVQcm9wZXJ0eSxcbiAgICB0cDogdHJhbnNsYXRlUHJvcGVydHksXG4gICAgdHJhbnNsYXRlTWVzc2FnZSxcbiAgICB0bTogdHJhbnNsYXRlTWVzc2FnZSxcbiAgICB0OiBpMThuLnQsXG4gICAgdHJhbnNsYXRlOiBpMThuLnQsXG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIHVzZVRyYW5zbGF0aW9uIGFzIG9yaWdpbmFsVXNlVHJhbnNsYXRpb24sXG59IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgeyBURnVuY3Rpb24sIGkxOG4gfSBmcm9tICdpMThuZXh0J1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVGdW5jdGlvbnMsIGNyZWF0ZUZ1bmN0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL3RyYW5zbGF0ZS1mdW5jdGlvbnMuZmFjdG9yeSdcblxuLyoqXG4gKiBFeHRlbmRzIHtAbGluayBUcmFuc2xhdGVGdW5jdGlvbnN9LiBBcGFydCBmcm9tIHRoYXQgaXQgYWxzbyByZXR1cm5zIGFsbCB0aGUgcHJvcGVydGllc1xuICogZGVmaW5lZCBiZWxvdy5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluLWJybydcbiAqXG4gKiBjb25zdCBNeUNvbXBvbmVudCA9ICgpID0+IHtcbiAqICAgY29uc3QgeyB0cmFuc2xhdGVCdXR0b24gfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAqXG4gKiAgIHJldHVybiAoXG4gKiAgICAgPEJveD5cbiAqICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXsuLi59Pnt0cmFuc2xhdGVCdXR0b24oJ3NhdmUnKX08QnV0dG9uPlxuICogICAgIDwvQm94PlxuICogICApXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgdXNlVHJhbnNsYXRpb25cbiAqIEBhbGlhcyBVc2VUcmFuc2xhdGlvblJlc3BvbnNlXG4gKlxuICogQHByb3BlcnR5IHtUcmFuc2xhdGVGdW5jdGlvbn0gLi4uIEFsbCBmdW5jdGlvbnMgZGVmaW5lZCBpbiB7QGxpbmsgVHJhbnNsYXRlRnVuY3Rpb25zfVxuICovXG5leHBvcnQgdHlwZSBVc2VUcmFuc2xhdGlvblJlc3BvbnNlID0gVHJhbnNsYXRlRnVuY3Rpb25zICYge1xuICB0OiBURnVuY3Rpb247XG4gIC8qKlxuICAgKiBDdXJyZW50IGkxOG4gaW5zdGFuY2UuXG4gICAqL1xuICBpMThuOiBpMThuO1xuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRyYW5zbGF0aW9uIHN5c3RlbSBpcyByZWFkeS4gSW4gQWRtaW5Ccm8gaXQgaXMgYWx3YXlzIHJlYWR5IDopLlxuICAgKi9cbiAgcmVhZHk6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogRXh0ZW5kcyB0aGUgdXNlVHJhbnNsYXRpb24gaG9vayBmcm9tIHJlYWN0LWkxOG5leHQgbGlicmFyeS5cbiAqXG4gKiBSZXR1cm5zIGFsbCB0aGUge0BsaW5rIFRyYW5zbGF0ZUZ1bmN0aW9uc30gKyBtZXRob2RzIHJldHVybmVkIGJ5IHRoZSBvcmlnaW5hbFxuICogdXNlVHJhbnNsYXRpb24gbWV0aG9kIGZyb20gcmVhY3QtaTE4bmV4dCBsaWtlOiBgaTE4bmAgaW5zdGFuY2UgYW5kIGByZWFkeWAgZmxhZy5cbiAqXG4gKiBAY2xhc3NcbiAqIEBzdWJjYXRlZ29yeSBIb29rc1xuICogQGJ1bmRsZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICogQHJldHVybnMge1VzZVRyYW5zbGF0aW9uUmVzcG9uc2V9XG4gKi9cbmV4cG9ydCBjb25zdCB1c2VUcmFuc2xhdGlvbiA9ICgpOiBVc2VUcmFuc2xhdGlvblJlc3BvbnNlID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuICBjb25zdCB7IGkxOG4sIC4uLnJlc3QgfSA9IG9yaWdpbmFsVXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCB0cmFuc2xhdGVGdW5jdGlvbnMgPSBjcmVhdGVGdW5jdGlvbnMoaTE4bilcblxuICByZXR1cm4ge1xuICAgIC4uLnJlc3QsXG4gICAgaTE4bixcbiAgICAuLi50cmFuc2xhdGVGdW5jdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVHJhbnNsYXRpb25cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5hdmlnYXRpb24sIE5hdmlnYXRpb25FbGVtZW50UHJvcHMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFZpZXdIZWxwZXJzIGZyb20gJy4uLy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlLXRyYW5zbGF0aW9uJ1xuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3N0b3JlJ1xuXG50eXBlIFByb3BzID0ge1xuICBwYWdlcz86IFJlZHV4U3RhdGVbJ3BhZ2VzJ107XG59XG5cbmNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxuXG5jb25zdCBTaWRlYmFyUGFnZXM6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHBhZ2VzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgdHJhbnNsYXRlTGFiZWwgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcblxuICBpZiAoIXBhZ2VzIHx8ICFwYWdlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKDw+PC8+KVxuICB9XG5cbiAgY29uc3QgaXNBY3RpdmUgPSAocGFnZSk6IGJvb2xlYW4gPT4gKFxuICAgICEhbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goYC9wYWdlcy8ke3BhZ2UubmFtZX1gKVxuICApXG5cbiAgY29uc3QgZWxlbWVudHM6IEFycmF5PE5hdmlnYXRpb25FbGVtZW50UHJvcHM+ID0gcGFnZXMubWFwKHBhZ2UgPT4gKHtcbiAgICBpZDogcGFnZS5uYW1lLFxuICAgIGxhYmVsOiBwYWdlLm5hbWUsXG4gICAgaXNTZWxlY3RlZDogaXNBY3RpdmUocGFnZSksXG4gICAgaWNvbjogcGFnZS5pY29uLFxuICAgIGhyZWY6IGgucGFnZVVybChwYWdlLm5hbWUpLFxuICAgIG9uQ2xpY2s6IChldmVudCwgZWxlbWVudCk6IHZvaWQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGVsZW1lbnQuaHJlZikge1xuICAgICAgICBoaXN0b3J5LnB1c2goZWxlbWVudC5ocmVmKVxuICAgICAgfVxuICAgIH0sXG4gIH0pKVxuXG4gIHJldHVybiAoXG4gICAgPE5hdmlnYXRpb25cbiAgICAgIGxhYmVsPXt0cmFuc2xhdGVMYWJlbCgncGFnZXMnKX1cbiAgICAgIGVsZW1lbnRzPXtlbGVtZW50c31cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJQYWdlc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBTb2Z0d2FyZUJyb3RoZXJzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgYWxsb3dPdmVycmlkZSBmcm9tICcuLi8uLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUnXG5cbmNvbnN0IFNpZGViYXJGb290ZXI6IFJlYWN0LkZDID0gKCkgPT4gKFxuICA8Qm94IG10PVwibGdcIj5cbiAgICA8U29mdHdhcmVCcm90aGVycyAvPlxuICA8L0JveD5cbilcblxuZXhwb3J0IGRlZmF1bHQgYWxsb3dPdmVycmlkZShTaWRlYmFyRm9vdGVyLCAnU2lkZWJhckZvb3RlcicpXG4iLCJpbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXNwb25zZSwgQXhpb3NJbnN0YW5jZSwgQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQge1xuICBSZXNvdXJjZUFjdGlvblBhcmFtcyxcbiAgQnVsa0FjdGlvblBhcmFtcyxcbiAgUmVjb3JkQWN0aW9uUGFyYW1zLFxuICBBY3Rpb25QYXJhbXMsXG59IGZyb20gJy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcblxuLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgUmVjb3JkQWN0aW9uUmVzcG9uc2UsIEFjdGlvblJlc3BvbnNlLCBCdWxrQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9iYWNrZW5kL2FjdGlvbnMvYWN0aW9uLmludGVyZmFjZSdcblxubGV0IGdsb2JhbEFueTogYW55ID0ge31cblxudHJ5IHtcbiAgZ2xvYmFsQW55ID0gd2luZG93XG59IGNhdGNoIChlcnJvcikge1xuICBpZiAoZXJyb3IubWVzc2FnZSAhPT0gJ3dpbmRvdyBpcyBub3QgZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBlcnJvclxuICB9IGVsc2Uge1xuICAgIGdsb2JhbEFueSA9IHsgaXNPblNlcnZlcjogdHJ1ZSB9XG4gIH1cbn1cblxuLyoqXG4gKiBUeXBlIG9mIGFuIFtheGlvcyByZXF1ZXN0XXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvYmxvYi9tYXN0ZXIvaW5kZXguZC50cyNMNDN9XG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gQXhpb3NSZXF1ZXN0Q29uZmlnXG4gKiBAYWxpYXMgQXhpb3NSZXF1ZXN0Q29uZmlnXG4gKiBAbWVtYmVyb2YgQXBpQ2xpZW50XG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9ibG9iL21hc3Rlci9pbmRleC5kLnRzI0w0M1xuICovXG5cbmNvbnN0IGNoZWNrUmVzcG9uc2UgPSAocmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgaWYgKGdsb2JhbEFueS5pc09uU2VydmVyKSB7IHJldHVybiB9XG4gIGNvbnN0IGxvZ2luVXJsID0gW2dsb2JhbEFueS5sb2NhdGlvbi5vcmlnaW4sIGdsb2JhbEFueS5SRURVWF9TVEFURS5wYXRocy5sb2dpblBhdGhdLmpvaW4oJycpXG4gIC8vIGlmIHJlc3BvbnNlIGhhcyByZWRpcmVjdCB0byBsb2dpblVybFxuICBpZiAocmVzcG9uc2UucmVxdWVzdC5yZXNwb25zZVVSTFxuICAgICAgJiYgcmVzcG9uc2UucmVxdWVzdC5yZXNwb25zZVVSTC5tYXRjaChsb2dpblVybClcbiAgKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYWxlcnQoJ1lvdXIgc2Vzc2lvbiBleHBpcmVkLiBZb3Ugd2lsbCBiZSByZWRpcmVjdGVkIHRvIGxvZ2luIHNjcmVlbicpXG4gICAgZ2xvYmFsQW55LmxvY2F0aW9uLmFzc2lnbihsb2dpblVybClcbiAgfVxufVxuXG4vKipcbiAqIEV4dGVuZHMge0BsaW5rIEF4aW9zUmVxdWVzdENvbmZpZ31cbiAqXG4gKiBAYWxpYXMgQWN0aW9uQVBJUGFyYW1zXG4gKiBAbWVtYmVyb2YgQXBpQ2xpZW50XG4gKiBAcHJvcGVydHkge2FueX0gICAuLi4gICAgYW55IHByb3BlcnR5IHN1cHBvcnRlZCBieSB7QGxpbmsgQXhpb3NSZXF1ZXN0Q29uZmlnfVxuICovXG5leHBvcnQgdHlwZSBBY3Rpb25BUElQYXJhbXMgPSBBeGlvc1JlcXVlc3RDb25maWcgJiBBY3Rpb25QYXJhbXNcblxuLyoqXG4gKiBFeHRlbmRzIHtAbGluayBBY3Rpb25BUElQYXJhbXN9XG4gKlxuICogQGFsaWFzIFJlc291cmNlQWN0aW9uQVBJUGFyYW1zXG4gKiBAbWVtYmVyb2YgQXBpQ2xpZW50XG4gKiBAcHJvcGVydHkge2FueX0gICAuLi4gICAgYW55IHByb3BlcnR5IHN1cHBvcnRlZCBieSB7QGxpbmsgQXhpb3NSZXF1ZXN0Q29uZmlnfVxuICovXG5leHBvcnQgdHlwZSBSZXNvdXJjZUFjdGlvbkFQSVBhcmFtcyA9IEF4aW9zUmVxdWVzdENvbmZpZyAmIFJlc291cmNlQWN0aW9uUGFyYW1zICYge1xuICBxdWVyeT86IHN0cmluZztcbn1cbi8qKlxuICogRXh0ZW5kcyB7QGxpbmsgQWN0aW9uQVBJUGFyYW1zfVxuICpcbiAqIEBhbGlhcyBSZWNvcmRBY3Rpb25BUElQYXJhbXNcbiAqIEBtZW1iZXJvZiBBcGlDbGllbnRcbiAqIEBwcm9wZXJ0eSB7YW55fSAgIC4uLiAgICBhbnkgcHJvcGVydHkgc3VwcG9ydGVkIGJ5IHtAbGluayBBY3Rpb25BUElQYXJhbXN9XG4gKi9cbmV4cG9ydCB0eXBlIFJlY29yZEFjdGlvbkFQSVBhcmFtcyA9IEF4aW9zUmVxdWVzdENvbmZpZyAmIFJlY29yZEFjdGlvblBhcmFtc1xuXG4vKipcbiAqIEV4dGVuZHMge0BsaW5rIEFjdGlvbkFQSVBhcmFtc31cbiAqXG4gKiBAYWxpYXMgQnVsa0FjdGlvbkFQSVBhcmFtc1xuICogQG1lbWJlcm9mIEFwaUNsaWVudFxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvYmxvYi9tYXN0ZXIvaW5kZXguZC50cyNMNDNcbiAqIEBwcm9wZXJ0eSB7YW55fSAgIC4uLiAgICBhbnkgcHJvcGVydHkgc3VwcG9ydGVkIGJ5IHtAbGluayBBY3Rpb25BUElQYXJhbXN9XG4gKi9cbmV4cG9ydCB0eXBlIEJ1bGtBY3Rpb25BUElQYXJhbXMgPSBBeGlvc1JlcXVlc3RDb25maWcgJiBCdWxrQWN0aW9uUGFyYW1zXG5cblxuLyoqXG4gKiBFeHRlbmRzIHtAbGluayBBeGlvc1JlcXVlc3RDb25maWd9XG4gKlxuICogQGFsaWFzIEdldFBhZ2VBUElQYXJhbXNcbiAqIEBtZW1iZXJvZiBBcGlDbGllbnRcbiAqIEBwcm9wZXJ0eSB7YW55fSAgIC4uLiAgICBhbnkgcHJvcGVydHkgc3VwcG9ydGVkIGJ5IHtAbGluayBBeGlvc1JlcXVlc3RDb25maWd9XG4gKi9cbmV4cG9ydCB0eXBlIEdldFBhZ2VBUElQYXJhbXMgPSBBeGlvc1JlcXVlc3RDb25maWcgJiB7XG4gIC8qKlxuICAgKiBVbmlxdWUgcGFnZSBuYW1lXG4gICAqL1xuICBwYWdlTmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIENsaWVudCB3aGljaCBhY2Nlc3MgdGhlIGFkbWluIEFQSS5cbiAqIFVzZSBpdCB0byBmZXRjaCBkYXRhIGZyb20gYXV0byBnZW5lcmF0ZWQgQWRtaW5Ccm8gQVBJLlxuICpcbiAqIEluIHRoZSBiYWNrZW5kIGl0IHVzZXMgW2F4aW9zXShodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MpIGNsaWVudFxuICogbGlicmFyeS5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IEFwaUNsaWVudCB9IGZyb20gJ2FkbWluLWJybydcbiAqXG4gKiBjb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcbiAqIC8vIGZldGNoaW5nIGFsbCByZWNvcmRzXG4gKiBhcGkucmVzb3VyY2VBY3Rpb24oeyByZXNvdXJjZUlkOiAnQ29tbWVudHMnLCBhY3Rpb25OYW1lOiAnbGlzdCcgfSkudGhlbihyZXN1bHRzID0+IHsuLi59KVxuICogYGBgXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvc1xuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5jbGFzcyBBcGlDbGllbnQge1xuICBwcml2YXRlIGJhc2VVUkw6IHN0cmluZ1xuXG4gIHByaXZhdGUgY2xpZW50OiBBeGlvc0luc3RhbmNlXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iYXNlVVJMID0gQXBpQ2xpZW50LmdldEJhc2VVcmwoKVxuICAgIHRoaXMuY2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcbiAgICAgIGJhc2VVUkw6IHRoaXMuYmFzZVVSTCxcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGdldEJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICBpZiAoZ2xvYmFsQW55LmlzT25TZXJ2ZXIpIHsgcmV0dXJuICcnIH1cbiAgICByZXR1cm4gW2dsb2JhbEFueS5sb2NhdGlvbi5vcmlnaW4sIGdsb2JhbEFueS5SRURVWF9TVEFURT8ucGF0aHMucm9vdFBhdGhdLmpvaW4oJycpXG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGJ5IHF1ZXJ5IHN0cmluZyBmb3IgcmVjb3JkcyBpbiBhIGdpdmVuIHJlc291cmNlLlxuICAgKlxuICAgKiBAcGFyYW0gICB7T2JqZWN0fSAgb3B0aW9uc1xuICAgKiBAcGFyYW0gICB7U3RyaW5nfSAgb3B0aW9ucy5yZXNvdXJjZUlkICBpZCBvZiBhIHtAbGluayBSZXNvdXJjZUpTT059XG4gICAqIEBwYXJhbSAgIHtTdHJpbmd9ICBvcHRpb25zLnF1ZXJ5ICAgICAgIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcmV0dXJuICB7UHJvbWlzZTxTZWFyY2hSZXNwb25zZT59XG4gICAqL1xuICBhc3luYyBzZWFyY2hSZWNvcmRzKHsgcmVzb3VyY2VJZCwgcXVlcnkgfToge1xuICAgIHJlc291cmNlSWQ6IHN0cmluZztcbiAgICBxdWVyeTogc3RyaW5nO1xuICB9KTogUHJvbWlzZTxBcnJheTxSZWNvcmRKU09OPj4ge1xuICAgIGlmIChnbG9iYWxBbnkuaXNPblNlcnZlcikgeyByZXR1cm4gW10gfVxuICAgIGNvbnN0IGFjdGlvbk5hbWUgPSAnc2VhcmNoJ1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXNvdXJjZUFjdGlvbih7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUsIHF1ZXJ5IH0pXG4gICAgY2hlY2tSZXNwb25zZShyZXNwb25zZSlcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5yZWNvcmRzXG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyBnaXZlbiByZXNvdXJjZSB7QGxpbmsgQWN0aW9ufSBvbiB0aGUgYmFja2VuZC5cbiAgICpcbiAgICogQHBhcmFtICAge1Jlc291cmNlQWN0aW9uQVBJUGFyYW1zfSAgICAgb3B0aW9uc1xuICAgKiBAcmV0dXJuICB7UHJvbWlzZTxBY3Rpb25SZXNwb25zZT59ICAgICByZXNwb25zZSBmcm9tIGFuIHtAbGluayBBY3Rpb259XG4gICAqL1xuICBhc3luYyByZXNvdXJjZUFjdGlvbihvcHRpb25zOiBSZXNvdXJjZUFjdGlvbkFQSVBhcmFtcyk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxBY3Rpb25SZXNwb25zZT4+IHtcbiAgICBjb25zdCB7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUsIGRhdGEsIHF1ZXJ5LCAuLi5heGlvc1BhcmFtcyB9ID0gb3B0aW9uc1xuICAgIGxldCB1cmwgPSBgL2FwaS9yZXNvdXJjZXMvJHtyZXNvdXJjZUlkfS9hY3Rpb25zLyR7YWN0aW9uTmFtZX1gXG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBjb25zdCBxID0gZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KVxuICAgICAgdXJsID0gW3VybCwgcV0uam9pbignLycpXG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5jbGllbnQucmVxdWVzdCh7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2Q6IGRhdGEgPyAnUE9TVCcgOiAnR0VUJyxcbiAgICAgIC4uLmF4aW9zUGFyYW1zLFxuICAgICAgZGF0YSxcbiAgICB9KVxuICAgIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyBnaXZlbiByZWNvcmQge0BsaW5rIEFjdGlvbn0gb24gdGhlIGJhY2tlbmQuXG4gICAqXG4gICAqIEBwYXJhbSAgIHtSZWNvcmRBY3Rpb25BUElQYXJhbXN9IG9wdGlvbnNcbiAgICogQHJldHVybiAge1Byb21pc2U8UmVjb3JkQWN0aW9uUmVzcG9uc2U+fSAgICAgICAgICAgIHJlc3BvbnNlIGZyb20gYW4ge0BsaW5rIEFjdGlvbn1cbiAgICovXG4gIGFzeW5jIHJlY29yZEFjdGlvbihvcHRpb25zOiBSZWNvcmRBY3Rpb25BUElQYXJhbXMpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8UmVjb3JkQWN0aW9uUmVzcG9uc2U+PiB7XG4gICAgY29uc3QgeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZSwgZGF0YSwgLi4uYXhpb3NQYXJhbXMgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgL2FwaS9yZXNvdXJjZXMvJHtyZXNvdXJjZUlkfS9yZWNvcmRzLyR7cmVjb3JkSWR9LyR7YWN0aW9uTmFtZX1gLFxuICAgICAgbWV0aG9kOiBkYXRhID8gJ1BPU1QnIDogJ0dFVCcsXG4gICAgICAuLi5heGlvc1BhcmFtcyxcbiAgICAgIGRhdGEsXG4gICAgfSlcbiAgICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgZ2l2ZW4gYnVsayB7QGxpbmsgQWN0aW9ufSBvbiB0aGUgYmFja2VuZC5cbiAgICpcbiAgICogQHBhcmFtICAge0J1bGtBY3Rpb25BUElQYXJhbXN9IG9wdGlvbnNcbiAgICogQHJldHVybiAge1Byb21pc2U8QnVsa0FjdGlvblJlc3BvbnNlPn0gICAgICAgICAgICByZXNwb25zZSBmcm9tIGFuIHtAbGluayBBY3Rpb259XG4gICAqL1xuICBhc3luYyBidWxrQWN0aW9uKG9wdGlvbnM6IEJ1bGtBY3Rpb25BUElQYXJhbXMpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8QnVsa0FjdGlvblJlc3BvbnNlPj4ge1xuICAgIGNvbnN0IHsgcmVzb3VyY2VJZCwgcmVjb3JkSWRzLCBhY3Rpb25OYW1lLCBkYXRhLCAuLi5heGlvc1BhcmFtcyB9ID0gb3B0aW9uc1xuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gICAgcGFyYW1zLnNldCgncmVjb3JkSWRzJywgKHJlY29yZElkcyB8fCBbXSkuam9pbignLCcpKVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYC9hcGkvcmVzb3VyY2VzLyR7cmVzb3VyY2VJZH0vYnVsay8ke2FjdGlvbk5hbWV9YCxcbiAgICAgIG1ldGhvZDogZGF0YSA/ICdQT1NUJyA6ICdHRVQnLFxuICAgICAgLi4uYXhpb3NQYXJhbXMsXG4gICAgICBkYXRhLFxuICAgICAgcGFyYW1zLFxuICAgIH0pXG4gICAgY2hlY2tSZXNwb25zZShyZXNwb25zZSlcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VzIGRhc2hib2FyZCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcGFyYW0gICB7QXhpb3NSZXF1ZXN0Q29uZmlnfSAgICAgICBvcHRpb25zXG4gICAqIEByZXR1cm4gIHtQcm9taXNlPEF4aW9zUmVzcG9uc2U8YW55Pj59IHJlc3BvbnNlIGZyb20gdGhlIGhhbmRsZXIgZnVuY3Rpb24gZGVmaW5lZCBpblxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QGxpbmsgQWRtaW5Ccm9PcHRpb25zI2Rhc2hib2FyZH1cbiAgICovXG4gIGFzeW5jIGdldERhc2hib2FyZChvcHRpb25zOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7fSk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNsaWVudC5nZXQoJy9hcGkvZGFzaGJvYXJkJywgb3B0aW9ucylcbiAgICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgaGFuZGxlciBmdW5jdGlvbiBvZiBnaXZlbiBwYWdlIGFuZCByZXR1cm5zIGl0cyByZXNwb25zZS5cbiAgICpcbiAgICogQHBhcmFtICAge0dldFBhZ2VBUElQYXJhbXN9ICAgICAgICAgICAgICAgIG9wdGlvbnNcbiAgICogQHJldHVybiAge1Byb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+Pn0gICAgIHJlc3BvbnNlIGZyb20gdGhlIGhhbmRsZXIgb2YgZ2l2ZW4gcGFnZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5lZCBpbiB7QGxpbmsgQWRtaW5Ccm9PcHRpb25zI3BhZ2VzfVxuICAgKi9cbiAgYXN5bmMgZ2V0UGFnZShvcHRpb25zOiBHZXRQYWdlQVBJUGFyYW1zKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCB7IHBhZ2VOYW1lLCAuLi5heGlvc1BhcmFtcyB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5jbGllbnQucmVxdWVzdCh7XG4gICAgICB1cmw6IGAvYXBpL3BhZ2VzLyR7cGFnZU5hbWV9YCxcbiAgICAgIC4uLmF4aW9zUGFyYW1zLFxuICAgIH0pXG4gICAgY2hlY2tSZXNwb25zZShyZXNwb25zZSlcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxufVxuXG5leHBvcnQge1xuICBBcGlDbGllbnQgYXMgZGVmYXVsdCxcbiAgQXBpQ2xpZW50LFxufVxuIiwiZXhwb3J0IGNvbnN0IEZPUk1fVkFMVUVfTlVMTCA9ICdfX0ZPUk1fVkFMVUVfTlVMTF9fJ1xuZXhwb3J0IGNvbnN0IEZPUk1fVkFMVUVfRU1QVFlfT0JKRUNUID0gJ19fRk9STV9WQUxVRV9FTVBUWV9PQkpFQ1RfXydcbmV4cG9ydCBjb25zdCBGT1JNX1ZBTFVFX0VNUFRZX0FSUkFZID0gJ19fRk9STV9WQUxVRV9FTVBUWV9BUlJBWV9fJ1xuXG5jb25zdCBpc09iamVjdE9yQXJyYXkgPSAodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4gKFxuICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG4gICYmICh2YWx1ZSBhcyBvYmplY3QpLmNvbnN0cnVjdG9yICE9PSBGaWxlXG4gICYmICEodmFsdWUgaW5zdGFuY2VvZiBEYXRlKVxuKVxuXG4vKipcbiAqIENoYW5nZXMgUmVjb3JkSlNPTiB0aGF0IGl0IGNhbiBiZSBzZW5kIGFzIGEgRm9ybURhdGEgdG8gdGhlIGJhY2tlbmQuXG4gKlxuICogRm9ybURhdGEgaXMgcmVxdWlyZWQgYmVjYXVzZSB3ZSBhcmUgc2VuZGluZyBmaWxlcyB2aWEgdGhlIHdpcmUuIEJ1dCBpdCBoYXMgbGltaXRhdGlvbnMuXG4gKiBOYW1lbHkgaXQgY2FuIG9ubHkgdHJhbnNwb3J0IGZpbGVzIGFuZCBzdHJpbmdzLiBUaGF0IGlzIHdoeSB3ZSBoYXZlIHRvIGNvbnZlcnQgc29tZVxuICogc3RhbmRhcmQgdHlwZXMgbGlrZSBOVUxMIHRvIGNvbnN0YW50cyBzbyB0aGV5IGNhbiBiZSBwcm9wZXJ0eSBjb252ZXJ0ZWQgYmFjayBieSB0aGUgYmFja2VuZC5cbiAqIEFuZCB0aHVzIHByb3Blcmx5IGhhbmRsZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAgIHtSZWNvcmRKU09OfSAgcmVjb3JkXG4gKiBAcmV0dXJuICB7Rm9ybURhdGF9XG4gKi9cbmZ1bmN0aW9uIHBhcmFtc1RvRm9ybURhdGEocGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogRm9ybURhdGEge1xuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cbiAgLy8gQXNzdW1lIHRoYXQgcGFyYW1zIGFyZSBmbGF0dGVkXG4gIE9iamVjdC5lbnRyaWVzKHBhcmFtcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgLy8ge0BsaW5rIHVwZGF0ZVJlY29yZH0gZG9lcyBub3QgY2hhbmdlIGVtcHR5IG9iamVjdHMgXCJ7fVwiIC0gc28gaW4gb3JkZXIgdG8gcHJldmVudCBoYXZpbmdcbiAgICAvLyB0aGVtIGNoYW5nZWQgdG8gXCJbb2JqZWN0IE9iamVjdF1cIiB3ZSBoYXZlIHRvIHNldCB0aGVtIHRvIGVtcHR5IHN0cmluZ3MuXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZm9ybURhdGEuc2V0KGtleSwgRk9STV9WQUxVRV9OVUxMKVxuICAgIH1cbiAgICAvLyBGaWxlIG9iamVjdHMgaGFzIHRvIGdvIHRocm91Z2ggYmVjYXVzZSB0aGV5IGFyZSBoYW5kbGVkIGJ5IEZvcm1EYXRhXG4gICAgaWYgKGlzT2JqZWN0T3JBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZm9ybURhdGEuc2V0KGtleSwgRk9STV9WQUxVRV9FTVBUWV9BUlJBWSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtRGF0YS5zZXQoa2V5LCBGT1JNX1ZBTFVFX0VNUFRZX09CSkVDVClcbiAgICB9XG5cbiAgICAvLyBSZXN0IGdvZXMgYXMgYSBzdGFuZGFyZCB2YWx1ZVxuICAgIHJldHVybiBmb3JtRGF0YS5zZXQoa2V5LCB2YWx1ZSBhcyBzdHJpbmcpXG4gIH0pXG4gIHJldHVybiBmb3JtRGF0YVxufVxuXG5leHBvcnQge1xuICBwYXJhbXNUb0Zvcm1EYXRhIGFzIGRlZmF1bHQsXG4gIHBhcmFtc1RvRm9ybURhdGEsXG59XG4iLCJpbXBvcnQgeyBOb3RpY2VNZXNzYWdlSW5TdGF0ZSB9IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IHsgTm90aWNlTWVzc2FnZSB9IGZyb20gJy4uLy4uL2hvYy93aXRoLW5vdGljZSdcblxuZXhwb3J0IGNvbnN0IEFERF9OT1RJQ0UgPSAnQUREX05PVElDRSdcblxuZXhwb3J0IHR5cGUgQWRkTm90aWNlUmVzcG9uc2UgPSB7XG4gIHR5cGU6IHR5cGVvZiBBRERfTk9USUNFO1xuICBkYXRhOiBOb3RpY2VNZXNzYWdlSW5TdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZE5vdGljZSA9IChkYXRhOiBOb3RpY2VNZXNzYWdlID0geyBtZXNzYWdlOiAnJyB9KTogQWRkTm90aWNlUmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogQUREX05PVElDRSxcbiAgZGF0YToge1xuICAgIG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcbiAgICBpZDogTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpLFxuICAgIHR5cGU6IGRhdGEudHlwZSB8fCAnc3VjY2VzcycsXG4gICAgcHJvZ3Jlc3M6IDAsXG4gIH0sXG59KVxuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGFkZE5vdGljZSB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvYWRkLW5vdGljZSdcbmltcG9ydCB7IE5vdGljZU1lc3NhZ2UgfSBmcm9tICcuLi9ob2Mvd2l0aC1ub3RpY2UnXG5cbi8qKlxuICogQG1lbWJlcm9mIHVzZU5vdGljZVxuICogQGFsaWFzIEFkZE5vdGljZVxuICovXG5leHBvcnQgdHlwZSBBZGROb3RpY2UgPSAobm90aWNlOiBOb3RpY2VNZXNzYWdlKSA9PiBhbnk7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogSG9vayB3aGljaCBhbGxvd3MgeW91IHRvIGFkZCBub3RpY2UgbWVzc2FnZSB0byB0aGUgYXBwLlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IHVzZU5vdGljZSwgQnV0dG9uIH0gZnJvbSAnYWRtaW4tYnJvJ1xuICpcbiAqIGNvbnN0IG15Q29tcG9uZW50ID0gKCkgPT4ge1xuICogICBjb25zdCBzZW5kTm90aWNlID0gdXNlTm90aWNlKClcbiAqICAgcmVuZGVyIChcbiAqICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNlbmROb3RpY2UoeyBtZXNzYWdlOiAnSSBhbSBhd2Vzb21lJyB9KX0+SSBhbSBhd2Vzb21lPC9CdXR0b24+XG4gKiAgIClcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBjbGFzc1xuICogQHN1YmNhdGVnb3J5IEhvb2tzXG4gKiBAYnVuZGxlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VOb3RpY2UgPSAoKTogQWRkTm90aWNlID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gIHJldHVybiAobm90aWNlKTogYW55ID0+IGRpc3BhdGNoKGFkZE5vdGljZShub3RpY2UpKVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VOb3RpY2VcbiIsImltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgUmVjb3JkQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL2FjdGlvbnMvYWN0aW9uLmludGVyZmFjZSdcblxuLyoqXG4gKiBIYW5kbGVycyBvZiBhbGwgW0FjdGlvbnNde0BsaW5rIEFjdGlvbn0gb2YgdHlwZSBgcmVjb3JkYCByZXR1cm5zIHJlY29yZC5cbiAqIERlcGVuZGluZyBvbiBhIHBsYWNlIGFuZCByZXNwb25zZSB3ZSBoYXZlIHRvIG1lcmdlIHdoYXQgd2FzIHJldHVybmVkXG4gKiB0byB0aGUgYWN0dWFsIHN0YXRlLiBJdCBpcyBkb25lIGluIGZvbGxvd2luZyBwbGFjZXM6XG4gKiAtIHtAbGluayB1c2VSZWNvcmR9IGhvb2tcbiAqIC0ge0BsaW5rIFJlY29yZEluTGlzdH0gY29tcG9uZW50XG4gKiAtIHtAbGluayBSZWNvcmRBY3Rpb259IGNvbXBvbmVudFxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IG1lcmdlUmVjb3JkUmVzcG9uc2UgPSAocmVjb3JkOiBSZWNvcmRKU09OLCByZXNwb25zZTogUmVjb3JkQWN0aW9uUmVzcG9uc2UpOiBSZWNvcmRKU09OID0+ICh7XG4gIC8vIHdlIHN0YXJ0IGZyb20gdGhlIHJlc3BvbnNlIGJlY2F1c2UgaXQgY2FuIGhhdmUgZGlmZmVyZW50IHJlY29yZEFjdGlvbnMgb3IgYnVsa0FjdGlvbnNcbiAgLi4uKHJlc3BvbnNlLnJlY29yZCB8fCByZWNvcmQpLFxuICAvLyByZWNvcmRzIGhhcyB0byBiZSByZXNldCBldmVyeSB0aW1lIGJlY2F1c2Ugc28gdGhhdCB1c2VyIHdvbnRcbiAgLy8gc2VlIG9sZCBlcnJvcnMgd2hpY2ggYXJlIG5vdCByZWxldmFudCBhbnltb3JlXG4gIGVycm9yczogcmVzcG9uc2UucmVjb3JkLmVycm9ycyxcbiAgcG9wdWxhdGVkOiB7IC4uLnJlY29yZC5wb3B1bGF0ZWQsIC4uLnJlc3BvbnNlLnJlY29yZC5wb3B1bGF0ZWQgfSxcbiAgcGFyYW1zOiB7IC4uLnJlY29yZC5wYXJhbXMsIC4uLnJlc3BvbnNlLnJlY29yZC5wYXJhbXMgfSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlUmVjb3JkUmVzcG9uc2VcbiIsImNvbnN0IERFTElNSVRFUiA9ICcuJ1xuXG5cbmV4cG9ydCB7IERFTElNSVRFUiB9XG4iLCJpbXBvcnQgeyBERUxJTUlURVIgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCB7IEdldE9wdGlvbnMgfSBmcm9tICcuL2ZsYXQudHlwZXMnXG4vLyB0aGlzIGlzIHRoZSByZWdleCB1c2VkIHRvIGZpbmQgYWxsIGV4aXN0aW5nIHByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBhIGtleVxuXG5leHBvcnQgY29uc3QgcHJvcGVydHlLZXlSZWdleCA9IChwcm9wZXJ0eVBhdGg6IHN0cmluZywgb3B0aW9ucz86IEdldE9wdGlvbnMpOiBSZWdFeHAgPT4ge1xuICBjb25zdCBkZWxpbWl0ZXIgPSBuZXcgUmVnRXhwKGBcXFxcJHtERUxJTUlURVJ9YCwgJ2cnKVxuICBjb25zdCBlc2NhcGVkRGVsaW1pdGVyID0gYFxcXFwke0RFTElNSVRFUn1gXG4gIC8vIGJ1dCBmb3IgYG5lc3RlZC4xLnByb3BlcnR5LjBgIGl0IHdpbGwgcHJvZHVjZSBgbmVzdGVkKFxcLnxcXC5cXGQrXFwuKTEoXFwufFxcLlxcZCtcXC4pcHJvcGVydHkuMGBcbiAgLy8gYW5kIHRoaXMgaXMgaW50ZW50aW9uYWwgYmVjYXVzZSB1c2VyIGNhbiBnaXZlIGFuIG9uZSBpbmRleCBpbiBwcm9wZXJ0eSBwYXRoIGZvciB3aXRoIGRlZXBseVxuICAvLyBuZXN0ZWQgYXJyYXlzXG4gIGNvbnN0IGVzY2FwZWREZWxpbWl0ZXJPckluZGV4ID0gYCgke2VzY2FwZWREZWxpbWl0ZXJ9fCR7ZXNjYXBlZERlbGltaXRlcn1cXFxcZCske2VzY2FwZWREZWxpbWl0ZXJ9KWBcbiAgY29uc3QgcGF0aCA9IG9wdGlvbnM/LmluY2x1ZGVBbGxTaWJsaW5nc1xuICAgID8gcHJvcGVydHlQYXRoLnJlcGxhY2UoZGVsaW1pdGVyLCBlc2NhcGVkRGVsaW1pdGVyT3JJbmRleClcbiAgICA6IHByb3BlcnR5UGF0aC5yZXBsYWNlKGRlbGltaXRlciwgZXNjYXBlZERlbGltaXRlcilcbiAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke3BhdGh9KCR8JHtlc2NhcGVkRGVsaW1pdGVyfSlgLCAnJylcbn1cbiIsImltcG9ydCB7IHByb3BlcnR5S2V5UmVnZXggfSBmcm9tICcuL3Byb3BlcnR5LWtleS1yZWdleCdcbmltcG9ydCB7IEZsYXR0ZW5QYXJhbXMsIEdldE9wdGlvbnMgfSBmcm9tICcuL2ZsYXQudHlwZXMnXG5cbi8qKlxuICogQGxvYWQgLi9zZWxlY3QtcGFyYW1zLmRvYy5tZFxuICogQG1lbWJlcm9mIG1vZHVsZTpmbGF0XG4gKiBAcGFyYW0ge0ZsYXR0ZW5QYXJhbXN9IHBhcmFtc1xuICogQHBhcmFtIHtzdHJpbmcgfCBBcnJheTxzdHJpbmc+fSBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge0dldE9wdGlvbnN9IFtvcHRpb25zXVxuICogQHJldHVybnMge0ZsYXR0ZW5QYXJhbXN9XG4gKi9cbmNvbnN0IHNlbGVjdFBhcmFtcyA9IChcbiAgcGFyYW1zOiBGbGF0dGVuUGFyYW1zLFxuICBwcm9wZXJ0aWVzOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LFxuICBvcHRpb25zPzogR2V0T3B0aW9ucyxcbik6IEZsYXR0ZW5QYXJhbXMgPT4ge1xuICBjb25zdCBwcm9wZXJ0eUFycmF5ID0gQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzKSA/IHByb3BlcnRpZXMgOiBbcHJvcGVydGllc11cbiAgY29uc3Qgc2VsZWN0ZWQgPSBwcm9wZXJ0eUFycmF5XG4gICAgLmZpbHRlcihwcm9wZXJ0eVBhdGggPT4gISFwcm9wZXJ0eVBhdGgpXG4gICAgLnJlZHVjZSgoZ2xvYmFsTWVtbywgcHJvcGVydHlQYXRoKSA9PiB7XG4gICAgICBjb25zdCByZWdleCA9IHByb3BlcnR5S2V5UmVnZXgocHJvcGVydHlQYXRoLCBvcHRpb25zKVxuICAgICAgY29uc3QgZmlsdGVyZWQgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAvLyBmaWx0ZXIgYWxsIGtleXMgd2hpY2ggc3RhcnRzIHdpdGggcHJvcGVydHkgcGF0aFxuICAgICAgICAuZmlsdGVyKGtleSA9PiBrZXkubWF0Y2gocmVnZXgpKVxuICAgICAgICAucmVkdWNlKChtZW1vLCBrZXkpID0+IHtcbiAgICAgICAgICBtZW1vW2tleV0gPSAocGFyYW1zW2tleV0gYXMgc3RyaW5nKVxuICAgICAgICAgIHJldHVybiBtZW1vXG4gICAgICAgIH0sIHt9IGFzIEZsYXR0ZW5QYXJhbXMpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5nbG9iYWxNZW1vLFxuICAgICAgICAuLi5maWx0ZXJlZCxcbiAgICAgIH1cbiAgICB9LCB7fSBhcyBGbGF0dGVuUGFyYW1zKVxuICByZXR1cm4gc2VsZWN0ZWRcbn1cblxuZXhwb3J0IHsgc2VsZWN0UGFyYW1zIH1cbiIsImltcG9ydCB7IHByb3BlcnR5S2V5UmVnZXggfSBmcm9tICcuL3Byb3BlcnR5LWtleS1yZWdleCdcbmltcG9ydCB7IEZsYXR0ZW5QYXJhbXMgfSBmcm9tICcuL2ZsYXQudHlwZXMnXG5cbi8qKlxuICogQGxvYWQgLi9maWx0ZXItb3V0LXBhcmFtcy5kb2MubWRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZmxhdFxuICogQHBhcmFtIHtGbGF0dGVuUGFyYW1zfSBwYXJhbXNcbiAqIEBwYXJhbSB7c3RyaW5nIHwgQXJyYXk8c3RyaW5nPn0gcHJvcGVydGllc1xuICogQHJldHVybnMge0ZsYXR0ZW5QYXJhbXN9XG4gKi9cbmNvbnN0IGZpbHRlck91dFBhcmFtcyA9IChcbiAgcGFyYW1zOiBGbGF0dGVuUGFyYW1zLFxuICBwcm9wZXJ0aWVzOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LFxuKTogRmxhdHRlblBhcmFtcyA9PiB7XG4gIGNvbnN0IHByb3BlcnR5QXJyYXkgPSBBcnJheS5pc0FycmF5KHByb3BlcnRpZXMpID8gcHJvcGVydGllcyA6IFtwcm9wZXJ0aWVzXVxuXG4gIHJldHVybiBwcm9wZXJ0eUFycmF5XG4gICAgLmZpbHRlcihwcm9wZXJ0eVBhdGggPT4gISFwcm9wZXJ0eVBhdGgpXG4gICAgLnJlZHVjZSgoZ2xvYmFsRmlsdGVyZWQsIHByb3BlcnR5UGF0aCkgPT4ge1xuICAgICAgY29uc3QgcmVnZXggPSBwcm9wZXJ0eUtleVJlZ2V4KHByb3BlcnR5UGF0aClcblxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGdsb2JhbEZpbHRlcmVkKVxuICAgICAgICAuZmlsdGVyKGtleSA9PiAha2V5Lm1hdGNoKHJlZ2V4KSlcbiAgICAgICAgLnJlZHVjZSgobWVtbywga2V5KSA9PiB7XG4gICAgICAgICAgbWVtb1trZXldID0gKHBhcmFtc1trZXldIGFzIHN0cmluZylcbiAgICAgICAgICByZXR1cm4gbWVtb1xuICAgICAgICB9LCB7fSBhcyBGbGF0dGVuUGFyYW1zKVxuICAgIH0sIHBhcmFtcylcbn1cblxuZXhwb3J0IHsgZmlsdGVyT3V0UGFyYW1zIH1cbiIsImltcG9ydCB7IFBhdGhQYXJ0cyB9IGZyb20gJy4vcGF0aC1wYXJ0cy50eXBlJ1xuXG4vKipcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZmxhdFxuICogQGFsaWFzIFBhdGhUb1BhcnRzT3B0aW9uc1xuICovXG5leHBvcnQgdHlwZSBQYXRoVG9QYXJ0c09wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgYXJyYXkgaW5kZXhlcyBzaG91bGQgYmUgc2tpcHBlZCBmcm9tIHRoZSBvdXRjb21lLlxuICAgKi9cbiAgc2tpcEFycmF5SW5kZXhlcz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQGxvYWQgLi9wYXRoLXRvLXBhcnRzLmRvYy5tZFxuICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgICAgIHByb3BlcnR5UGF0aFxuICogQHBhcmFtICAge1BhdGhUb1BhcnRzT3B0aW9uc30gIG9wdGlvbnNcbiAqIEByZXR1cm5zICB7UGF0aFBhcnRzfVxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZmxhdFxuICogQGFsaWFzIHBhdGhUb1BhcnRzXG4gKi9cbmNvbnN0IHBhdGhUb1BhcnRzID0gKHByb3BlcnR5UGF0aDogc3RyaW5nLCBvcHRpb25zOiBQYXRoVG9QYXJ0c09wdGlvbnMgPSB7fSk6IFBhdGhQYXJ0cyA9PiB7XG4gIGxldCBhbGxQYXJ0cyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpXG4gIGlmIChvcHRpb25zLnNraXBBcnJheUluZGV4ZXMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgYWxsUGFydHMgPSBhbGxQYXJ0cy5maWx0ZXIocGFydCA9PiBpc05hTigrcGFydCkpXG4gIH1cbiAgcmV0dXJuIGFsbFBhcnRzLnJlZHVjZSgobWVtbywgcGFydCkgPT4ge1xuICAgIGlmIChtZW1vLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4ubWVtbyxcbiAgICAgICAgW21lbW9bbWVtby5sZW5ndGggLSAxXSwgcGFydF0uam9pbignLicpLFxuICAgICAgXVxuICAgIH1cbiAgICByZXR1cm4gW3BhcnRdXG4gIH0sIFtdIGFzIEFycmF5PHN0cmluZz4pXG59XG5cbmV4cG9ydCB7IHBhdGhUb1BhcnRzIH1cbiIsImltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICdmbGF0J1xuaW1wb3J0IHsgREVMSU1JVEVSIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgeyBGbGF0dGVuUGFyYW1zIH0gZnJvbSAnLi4vZmxhdCdcbmltcG9ydCB7IHByb3BlcnR5S2V5UmVnZXggfSBmcm9tICcuL3Byb3BlcnR5LWtleS1yZWdleCdcbmltcG9ydCB7IHBhdGhUb1BhcnRzIH0gZnJvbSAnLi9wYXRoLXRvLXBhcnRzJ1xuXG5jb25zdCBpc09iamVjdCA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiB7XG4gIC8vIE5vZGUgZW52aXJvbm1lbnRcbiAgaWYgKHR5cGVvZiBGaWxlID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsXG4gIH1cbiAgLy8gV2luZG93IGVudmlyb25tZW50XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICEodmFsdWUgaW5zdGFuY2VvZiBGaWxlKSAmJiB2YWx1ZSAhPT0gbnVsbFxufVxuXG4vKipcbiAqIEBsb2FkIC4vc2V0LmRvYy5tZFxuICogQG1lbWJlcm9mIG1vZHVsZTpmbGF0XG4gKiBAcGFyYW0ge0ZsYXR0ZW5QYXJhbXN9IHBhcmFtc1xuICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5UGF0aFxuICogQHBhcmFtIHthbnl9IFt2YWx1ZV0gICAgICAgaWYgbm90IGdpdmUgZnVuY3Rpb24gd2lsbCBvbmx5IHRyeSB0byByZW1vdmUgb2xkIGtleXNcbiAqIEByZXR1cm5zIHtGbGF0dGVuUGFyYW1zfVxuICovXG5jb25zdCBzZXQgPSAocGFyYW1zOiBGbGF0dGVuUGFyYW1zID0ge30sIHByb3BlcnR5UGF0aDogc3RyaW5nLCB2YWx1ZT86IGFueSk6IEZsYXR0ZW5QYXJhbXMgPT4ge1xuICBjb25zdCByZWdleCA9IHByb3BlcnR5S2V5UmVnZXgocHJvcGVydHlQYXRoKVxuXG4gIC8vIHJlbW92ZSBhbGwgZXhpc3Rpbmcga2V5c1xuICBjb25zdCBwYXJhbXNDb3B5ID0gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgIC5maWx0ZXIoa2V5ID0+ICFrZXkubWF0Y2gocmVnZXgpKVxuICAgIC5yZWR1Y2UoKG1lbW8sIGtleSkgPT4ge1xuICAgICAgbWVtb1trZXldID0gcGFyYW1zW2tleV1cblxuICAgICAgcmV0dXJuIG1lbW9cbiAgICB9LCB7fSBhcyBGbGF0dGVuUGFyYW1zKVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiAhKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgIGNvbnN0IGZsYXR0ZW5lZCA9IGZsYXR0ZW4odmFsdWUpIGFzIGFueVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXMoZmxhdHRlbmVkKS5sZW5ndGgpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZmxhdHRlbmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBwYXJhbXNDb3B5W2Ake3Byb3BlcnR5UGF0aH0ke0RFTElNSVRFUn0ke2tleX1gXSA9IGZsYXR0ZW5lZFtrZXldXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHBhcmFtc0NvcHlbcHJvcGVydHlQYXRoXSA9IFtdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNDb3B5W3Byb3BlcnR5UGF0aF0gPSB7fVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXNDb3B5W3Byb3BlcnR5UGF0aF0gPSB2YWx1ZVxuICAgIH1cblxuICAgIC8vIHdoZW4gdXNlciBnYXZlIHsgXCJuZXN0ZWQudmFsdWVcIjogXCJzb21ldGhpbmdcIiB9IGFuZCBoYWQgXCJuZXN0ZWRcIiBzZXQgdG8gYG51bGxgLCB0aGVuXG4gICAgLy8gbmVzdGVkIHNob3VsZCBiZSByZW1vdmVkXG4gICAgY29uc3QgcGFydHMgPSBwYXRoVG9QYXJ0cyhwcm9wZXJ0eVBhdGgpLnNsaWNlKDAsIC0xKVxuICAgIGlmIChwYXJ0cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhwYXJhbXNDb3B5KVxuICAgICAgICAuZmlsdGVyKGtleSA9PiAhcGFydHMuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgLnJlZHVjZSgobWVtbywga2V5KSA9PiB7XG4gICAgICAgICAgbWVtb1trZXldID0gcGFyYW1zQ29weVtrZXldXG5cbiAgICAgICAgICByZXR1cm4gbWVtb1xuICAgICAgICB9LCB7fSBhcyBGbGF0dGVuUGFyYW1zKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcGFyYW1zQ29weVxufVxuXG5leHBvcnQgeyBzZXQgfVxuIiwiaW1wb3J0IHsgdW5mbGF0dGVuIH0gZnJvbSAnZmxhdCdcbmltcG9ydCB7IERFTElNSVRFUiB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgc2VsZWN0UGFyYW1zIH0gZnJvbSAnLi9zZWxlY3QtcGFyYW1zJ1xuaW1wb3J0IHsgRmxhdHRlblBhcmFtcyB9IGZyb20gJy4uL2ZsYXQnXG5pbXBvcnQgeyBwcm9wZXJ0eUtleVJlZ2V4IH0gZnJvbSAnLi9wcm9wZXJ0eS1rZXktcmVnZXgnXG5pbXBvcnQgeyBHZXRPcHRpb25zIH0gZnJvbSAnLi9mbGF0LnR5cGVzJ1xuXG5jb25zdCBURU1QX0hPTERJTkdfS0VZID0gJ1RFTVBfSE9MRElOR19LRVknXG5cbi8qKlxuICogQGxvYWQgLi9nZXQuZG9jLm1kXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmZsYXRcbiAqIEBwYXJhbSB7RmxhdHRlblBhcmFtc30gICBwYXJhbXMgICAgICBmbGF0dGVuIHBhcmFtcyBmcm9tIHdoaWNoIHByb3BlcnR5IGhhcyB0byBiZSB0YWtlblxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgIFtwcm9wZXJ0eVBhdGhdICBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtHZXRPcHRpb25zfSAgICAgIG9wdGlvbnMgICAgIG9wdGlvbnNcbiAqIEByZXR1cm5zIHthbnl9ICAgICAgICAgICAgICAgICAgICAgICB3aGVuIHByb3BlcnR5IGtleSBleGlzdHMgZGlyZWN0bHkgaXQgcmV0dXJucyB3aGF0IGlzIGluc2lkZSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcndpc2UgaXQgdHJpZXMgdG8gZmluZCBhbnkgbmVzdGVkIG9iamVjdHMgYW5kIHJldHVybnNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtXG4gKi9cbmNvbnN0IGdldCA9IChwYXJhbXM6IEZsYXR0ZW5QYXJhbXMgPSB7fSwgcHJvcGVydHlQYXRoPzogc3RyaW5nLCBvcHRpb25zPzogR2V0T3B0aW9ucyk6IGFueSA9PiB7XG4gIGlmICghcHJvcGVydHlQYXRoKSB7XG4gICAgcmV0dXJuIHVuZmxhdHRlbihwYXJhbXMpXG4gIH1cblxuICAvLyB3aGVuIG9iamVjdCBoYXMgdGhpcyBrZXkgLSBzaW1wbHkgcmV0dXJuIGl0XG4gIC8vIHdlIGNhbm5vdCByZWx5IG9uIHR5cGVvZiBwYXJhbXNbcHJvcGVydHlQYXRoICE9PSAndW5kZWZpbmVkJyBiZWNhdXNlIHBhcmFtcyBjYW4gYWN0dWFsbHkgYmVcbiAgLy8gdW5kZWZpbmVkIGFuZCBpbiBzdWNoIGNhc2UgaWYgd291bGQgcGFzcyBhbmQgZnVuY3Rpb24gd291bGQgcmV0dXJuIFt1bmRlZmluZWRdXG4gIGlmIChPYmplY3Qua2V5cyhwYXJhbXMpLmZpbmQoa2V5ID0+IChrZXkgPT09IHByb3BlcnR5UGF0aCkpKSB7XG4gICAgcmV0dXJuIHBhcmFtc1twcm9wZXJ0eVBhdGhdXG4gIH1cblxuICBjb25zdCByZWdleCA9IHByb3BlcnR5S2V5UmVnZXgocHJvcGVydHlQYXRoLCBvcHRpb25zKVxuICBjb25zdCBzZWxlY3RlZFBhcmFtcyA9IHNlbGVjdFBhcmFtcyhwYXJhbXMsIHByb3BlcnR5UGF0aCwgb3B0aW9ucylcblxuICBjb25zdCBuZXN0ZWRQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoc2VsZWN0ZWRQYXJhbXMpLnJlZHVjZSgobWVtbywga2V5LCBpbmRleCkgPT4ge1xuICAgIGxldCBuZXdLZXkgPSBrZXkucmVwbGFjZShyZWdleCwgYCR7VEVNUF9IT0xESU5HX0tFWX0ke0RFTElNSVRFUn1gKVxuXG4gICAgLy8gd2hlbiB1c2VyIHdhbnRzIHRvIHRha2UgYWxsU2libGluZ3Mgd2UgaGF2ZSB0byBmaXggdGhlIGluZGV4ZXMgc28gbmVzdGVkIGl0ZW1zIGZyb21cbiAgICAvLyBkaWZmZXJlbnQgc2libGluZ3MgZG9uJ3Qgb3ZlcmxhcFxuICAgIC8vXG4gICAgLy8gRXhhbXBsZSBmb3Iga2V5IGBuZXN0ZWQuMS5lbGA6XG4gICAgLy8gICduZXN0ZWQuMC5lbC4wLnZhbHVlJzogJ3ZhbDAuMCcsXG4gICAgLy8gICduZXN0ZWQuMC5lbC4xLnZhbHVlJzogJ3ZhbDAuMScsXG4gICAgLy8gICduZXN0ZWQuMS5lbC4wLnZhbHVlJzogJ3ZhbDEnLFxuICAgIC8vICAnbmVzdGVkLjEuZWwuMS52YWx1ZSc6ICd2YWwyJyxcbiAgICAvL1xuICAgIC8vIGhhcyB0byBiZSBjaGFuZ2VkIHRvOlxuICAgIC8vICAnVEVNUF9IT0xESU5HX0tFWS4wLnZhbHVlJzogJ3ZhbDAuMCcsXG4gICAgLy8gICdURU1QX0hPTERJTkdfS0VZLjEudmFsdWUnOiAndmFsMC4xJyxcbiAgICAvLyAgJ1RFTVBfSE9MRElOR19LRVkuMi52YWx1ZSc6ICd2YWwxJyxcbiAgICAvLyAgJ1RFTVBfSE9MRElOR19LRVkuMy52YWx1ZSc6ICd2YWwyJyxcbiAgICBpZiAob3B0aW9ucz8uaW5jbHVkZUFsbFNpYmxpbmdzKSB7XG4gICAgICBuZXdLZXkgPSBuZXdLZXkucmVwbGFjZShcbiAgICAgICAgbmV3IFJlZ0V4cChgJHtURU1QX0hPTERJTkdfS0VZfVxcXFwke0RFTElNSVRFUn0oXFxcXGQqKWApLFxuICAgICAgICBgJHtURU1QX0hPTERJTkdfS0VZfSR7REVMSU1JVEVSfSR7aW5kZXh9YCxcbiAgICAgIClcbiAgICB9XG5cbiAgICBtZW1vW25ld0tleV0gPSBzZWxlY3RlZFBhcmFtc1trZXldXG5cbiAgICByZXR1cm4gbWVtb1xuICB9LCB7fSBhcyBGbGF0dGVuUGFyYW1zKVxuXG4gIGlmIChPYmplY3Qua2V5cyhuZXN0ZWRQcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gKHVuZmxhdHRlbihuZXN0ZWRQcm9wZXJ0aWVzKSBhcyB7fSlbVEVNUF9IT0xESU5HX0tFWV1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCB7IGdldCB9XG4iLCJpbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnZmxhdCdcbmltcG9ydCB7IEZsYXR0ZW5QYXJhbXMgfSBmcm9tICcuL2ZsYXQudHlwZXMnXG5pbXBvcnQgeyBzZXQgfSBmcm9tICcuL3NldCdcblxuLyoqXG4gKiBNZXJnZXMgcGFyYW1zIHRvZ2V0aGVyIGFuZCByZXR1cm5zIGZsYXR0ZW4gcmVzdWx0XG4gKlxuICogQHBhcmFtIHthbnl9IHBhcmFtc1xuICogQHBhcmFtIHtBcnJheTxhbnk+fSAuLi5tZXJnZVBhcmFtc1xuICogQHJldHVybnMge0ZsYXR0ZW5QYXJhbXN9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmZsYXRcbiAqL1xuY29uc3QgbWVyZ2UgPSAocGFyYW1zOiBhbnkgPSB7fSwgLi4ubWVyZ2VQYXJhbXM6IEFycmF5PGFueT4pOiBGbGF0dGVuUGFyYW1zID0+IHtcbiAgY29uc3QgZmxhdHRlblBhcmFtcyA9IGZsYXR0ZW4ocGFyYW1zKVxuXG4gIC8vIHJldmVyc2UgYmVjYXVzZSB3ZSBtZXJnZSBmcm9tIHJpZ2h0XG4gIHJldHVybiBtZXJnZVBhcmFtcy5yZXZlcnNlKCkucmVkdWNlKChnbG9iYWxNZW1vLCBtZXJnZVBhcmFtKSA9PiAoXG4gICAgT2JqZWN0LmtleXMobWVyZ2VQYXJhbSlcbiAgICAgIC5yZWR1Y2UoKG1lbW8sIGtleSkgPT4gKHNldChtZW1vLCBrZXksIG1lcmdlUGFyYW1ba2V5XSkpLCBnbG9iYWxNZW1vKVxuICApLCBmbGF0dGVuUGFyYW1zIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG59XG5cbmV4cG9ydCB7IG1lcmdlIH1cbiIsImltcG9ydCB7IGZpbHRlck91dFBhcmFtcyB9IGZyb20gJy4vZmlsdGVyLW91dC1wYXJhbXMnXG5pbXBvcnQgeyBGbGF0dGVuUGFyYW1zIH0gZnJvbSAnLi9mbGF0LnR5cGVzJ1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXQnXG5pbXBvcnQgeyBzZXQgfSBmcm9tICcuL3NldCdcbmltcG9ydCB7IHBhdGhUb1BhcnRzIH0gZnJvbSAnLi9wYXRoLXRvLXBhcnRzJ1xuaW1wb3J0IHsgREVMSU1JVEVSIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbi8qKlxuICogQGxvYWQgLi9yZW1vdmUtcGF0aC5kb2MubWRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZmxhdFxuICogQHBhcmFtIHtGbGF0dGVuUGFyYW1zfSBwYXJhbXNcbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBwcm9wZXJ0aWVzXG4gKiBAcmV0dXJucyB7RmxhdHRlblBhcmFtc31cbiAqL1xuY29uc3QgcmVtb3ZlUGF0aCA9IChwYXJhbXM6IEZsYXR0ZW5QYXJhbXMsIHBhdGg6IHN0cmluZyk6IEZsYXR0ZW5QYXJhbXMgPT4ge1xuICAvLyBieSBkZWZhdWx0IHNpbXBseSBmaWx0ZXIgb3V0IGVsZW1lbnRzIGZyb20gdGhlIG9iamVjdFxuICBsZXQgZmlsdGVyZWQgPSBmaWx0ZXJPdXRQYXJhbXMocGFyYW1zLCBwYXRoKVxuXG4gIC8vIHJldmVyc2UgbWVhbnMgdGhhdCB3ZSBpdGVyYXRlIGZyb20gdGhlIGNsb3NlcyBwYXJlbnRcbiAgY29uc3QgcGFyZW50UGF0aHMgPSBwYXRoVG9QYXJ0cyhwYXRoKS5yZXZlcnNlKClcblxuICAvLyBidXQgaWYgb25lIG9mIHRoZSBwYXJlbnQgaXMgYW4gYXJyYXlcbiAgcGFyZW50UGF0aHMuZmluZCgocGFyZW50UGF0aCwgcGFyZW50SW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBnZXQocGFyYW1zLCBwYXJlbnRQYXRoKVxuICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgIC8vIHByZXZpb3VzIGVsZW1lbnQgaXMgc3RyaW5naWZpZWQgaW5kZXggbGlrZSAncHJvcGVydHkuMSdcbiAgICAgIGNvbnN0IHByZXZpb3VzUGF0aHMgPSBwYXJlbnRQYXRoc1twYXJlbnRJbmRleCAtIDFdLnNwbGl0KERFTElNSVRFUilcbiAgICAgIC8vIHNvIHRoaXMgaXMgdGhlIGluZGV4OiAxXG4gICAgICBjb25zdCBwcmV2aW91c1BhdGhJbmRleCA9IHByZXZpb3VzUGF0aHNbcHJldmlvdXNQYXRocy5sZW5ndGggLSAxXVxuICAgICAgcGFyZW50LnNwbGljZSgrcHJldmlvdXNQYXRoSW5kZXgsIDEpXG4gICAgICBmaWx0ZXJlZCA9IHNldChwYXJhbXMsIHBhcmVudFBhdGgsIHBhcmVudClcbiAgICAgIC8vIHRoaXMgd29ya3MganVzdCBmb3IgdGhlIGZpcnN0bHkgZm91bmQgYXJyYXkgaXRlbSwgYmVjYXVzZSBpbiBjYXNlIG9mIHJlbW92aW5nIHRoZSBsYXN0IG9uZVxuICAgICAgLy8gaXQgbGVhdmVzIGBbXWAgYXMgYSB2YWx1ZS5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiBmaWx0ZXJlZFxufVxuXG5leHBvcnQgeyByZW1vdmVQYXRoIH1cbiIsImltcG9ydCB7IGZsYXR0ZW4sIHVuZmxhdHRlbiB9IGZyb20gJ2ZsYXQnXG5cbmltcG9ydCB7IERFTElNSVRFUiB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgc2VsZWN0UGFyYW1zIH0gZnJvbSAnLi9zZWxlY3QtcGFyYW1zJ1xuaW1wb3J0IHsgZmlsdGVyT3V0UGFyYW1zIH0gZnJvbSAnLi9maWx0ZXItb3V0LXBhcmFtcydcbmltcG9ydCB7IHNldCB9IGZyb20gJy4vc2V0J1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXQnXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4vbWVyZ2UnXG5pbXBvcnQgeyBwYXRoVG9QYXJ0cyB9IGZyb20gJy4vcGF0aC10by1wYXJ0cydcbmltcG9ydCB7IHJlbW92ZVBhdGggfSBmcm9tICcuL3JlbW92ZS1wYXRoJ1xuXG5leHBvcnQgdHlwZSBGbGF0TW9kdWxlVHlwZSA9IHtcbiAgZmxhdHRlbjogdHlwZW9mIGZsYXR0ZW47XG4gIHVuZmxhdHRlbjogdHlwZW9mIHVuZmxhdHRlbjtcbiAgc2V0OiB0eXBlb2Ygc2V0O1xuICBnZXQ6IHR5cGVvZiBnZXQ7XG4gIHNlbGVjdFBhcmFtczogdHlwZW9mIHNlbGVjdFBhcmFtcztcbiAgZmlsdGVyT3V0UGFyYW1zOiB0eXBlb2YgZmlsdGVyT3V0UGFyYW1zO1xuICBERUxJTUlURVI6IHR5cGVvZiBERUxJTUlURVI7XG4gIHBhdGhUb1BhcnRzOiB0eXBlb2YgcGF0aFRvUGFydHM7XG4gIHJlbW92ZVBhdGg6IHR5cGVvZiByZW1vdmVQYXRoO1xuICBtZXJnZTogdHlwZW9mIG1lcmdlO1xufVxuXG4vKipcbiAqIEBtb2R1bGUgZmxhdFxuICogQG5hbWUgZmxhdFxuICogQG5ldyBpbiB2ZXJzaW9uIDMuM1xuICogQGxvYWQgLi9mbGF0LmRvYy5tZFxuICovXG5leHBvcnQgY29uc3QgZmxhdDogRmxhdE1vZHVsZVR5cGUgPSB7XG4gIC8qKlxuICAgKiBSYXcgYGZsYXR0ZW5gIGZ1bmN0aW9uIGV4cG9ydGVkIGZyb20gb3JpZ2luYWwge0BsaW5rIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2ZsYXQgZmxhdH1cbiAgICogcGFja2FnZS5cbiAgICovXG4gIGZsYXR0ZW4sXG4gIC8qKlxuICAgKiBSYXcgYHVuZmxhdHRlbmAgZnVuY3Rpb24gZXhwb3J0ZWQgZnJvbSBvcmlnaW5hbCB7QGxpbmsgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvZmxhdCBmbGF0fVxuICAgKiBwYWNrYWdlLlxuICAgKi9cbiAgdW5mbGF0dGVuLFxuXG4gIHNldCxcbiAgZ2V0LFxuICBzZWxlY3RQYXJhbXMsXG4gIGZpbHRlck91dFBhcmFtcyxcbiAgcmVtb3ZlUGF0aCxcbiAgREVMSU1JVEVSLFxuICBwYXRoVG9QYXJ0cyxcbiAgbWVyZ2UsXG59XG4iLCJpbXBvcnQgeyBmbGF0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZmxhdCdcbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuXG4vKipcbiAqIEhPRiByZXR1cm5pbmcgYSBmdW5jdGlvbiB3aGljaCB0YWtlcyBhIHJlY29yZCBhbmQgcmV0dXJucyBhbiB1cGRhdGVkIHJlY29yZC5cbiAqIFRoaXMgd2F5IHdlIGNhbiBwYXNzIHRoaXMgdG8gc2V0U3RhdGUgaW4gcmVhY3QsIHdoaWNoIHRha2VzIG9sZCBzdGF0ZVxuICogKGluIG91ciBjYXNlIHByZXZpb3VzUmVjb3JkKSBhcyBhbiBhcmd1bWVudC5cbiAqXG4gKiBGdW5jdGlvbiBpcyB1c2VkIHdoZW4gdG8gdGhlIHtAbGluayBPblByb3BlcnR5Q2hhbmdlfSBjYWxsYmFjaywgdXNlciBwYXNzZXNcbiAqIGtleSAocHJvcGVydHkgbmFtZSkgYW5kIHRoZSB2YWx1ZSAoZm9sbG93ZWQgYnkgYW4gb3B0aW9uYWwgc2VsZWN0ZWRSZWNvcmQpLlxuICpcbiAqIFRoZSByZXNwb25zaWJpbGl0eSBvZiB0aGUgZnVuY3Rpb24gaXMgdG86XG4gKiAtIGNsZWFyIG9sZCB2YWx1ZXMgdW5kZXIgcGFzc2VkIGtleTogc28gd2hlbiB1c2VyIHBhc3NlcyBwcm9wZXJ0eSA9PT0gYHNvbWUua2V5YFxuICogICBmdW5jdGlvbiByZW1vdmVzIGBzb21lLmtleS4xYCwgYHNvbWUua2V5LjJgIGV0Y1xuICogLSBzZXRzIG5ldyB2YWx1ZSB1bmRlciB0aGUgcGFzc2VkIGtleSBmb3IgcHJpbWl0aXZlIHR5cGVzXG4gKiAtIGluIGNhc2Ugb2Ygb2JqZWN0cyAtIGl0IGZsYXR0ZW5zIHRoZW0gZmlyc3QgYW5kIHRoZW4gc2V0cyBhbGwgdGhlIHJlc3VsdGVkIHZhbHVlc1xuICogICB1bmRlciB0aGUgcGF0aCBwcm92aWRlZCBpbiB0aGUgcHJvcGVydHkgYXJndW1lbnRcbiAqIC0gaXQgZmlsbHMgdmFsdWUgaW4gUmVjb3JkSlNPTiNwb3B1bGF0ZWQgd2hlbiBzZWxlY3RlZFJlY29yZCBpcyBnaXZlblxuICogLSBmaW5hbGx5IGl0IGludmFsaWRhdGVzIHBvcHVsYXRlZCBmb3IgZ2l2ZW4gcHJvcGVydHlcbiAqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgcHJvcGVydHkgICAgICAgIHByb3BlcnR5IHRoYXQgbXVzdCBiZSB1cGRhdGVkLCBzdXBwb3J0cyBuZXN0aW5nXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCBkb3RzXG4gKiBAcGFyYW0ge2FueX0gICAgICAgICB2YWx1ZSAgICAgICAgICAgdmFsdWUgdGhhdCBtdXN0IGJlIHNldCwgdW5kZWZpbmVkIG9yIG51bGwgaWZcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGluZywgd2lsbCBiZSBmbGF0dGVuZWRcbiAqIEBwYXJhbSB7UmVjb3JkSlNPTn0gIHNlbGVjdGVkUmVjb3JkICBpZiB2YWx1ZSBpcyByZWZlcmVuY2UgSUQsIHRoaXMgbXVzdCBiZSBhIHJlY29yZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0J3MgcmVmZXJlbmNpbmcgdG9cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVSZWNvcmQgPSAoXG4gIHByb3BlcnR5OiBzdHJpbmcsXG4gIHZhbHVlOiBhbnksXG4gIHNlbGVjdGVkUmVjb3JkPzogUmVjb3JkSlNPTixcbikgPT4gKHByZXZpb3VzUmVjb3JkOiBSZWNvcmRKU09OKTogUmVjb3JkSlNPTiA9PiB7XG4gIGxldCBwb3B1bGF0ZWRNb2RpZmllZCA9IGZhbHNlXG4gIGNvbnN0IHBvcHVsYXRlZENvcHkgPSB7IC4uLnByZXZpb3VzUmVjb3JkLnBvcHVsYXRlZCB9XG4gIGNvbnN0IHBhcmFtc0NvcHkgPSBmbGF0LnNldChwcmV2aW91c1JlY29yZC5wYXJhbXMsIHByb3BlcnR5LCB2YWx1ZSlcblxuICBpZiAocHJvcGVydHkgaW4gcG9wdWxhdGVkQ29weSkge1xuICAgIGRlbGV0ZSBwb3B1bGF0ZWRDb3B5W3Byb3BlcnR5XVxuICAgIHBvcHVsYXRlZE1vZGlmaWVkID0gdHJ1ZVxuICB9XG5cbiAgaWYgKHNlbGVjdGVkUmVjb3JkKSB7XG4gICAgcG9wdWxhdGVkQ29weVtwcm9wZXJ0eV0gPSBzZWxlY3RlZFJlY29yZFxuICAgIHBvcHVsYXRlZE1vZGlmaWVkID0gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5wcmV2aW91c1JlY29yZCxcbiAgICBwYXJhbXM6IHBhcmFtc0NvcHksXG4gICAgcG9wdWxhdGVkOiBwb3B1bGF0ZWRNb2RpZmllZCA/IHBvcHVsYXRlZENvcHkgOiBwcmV2aW91c1JlY29yZC5wb3B1bGF0ZWQsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlUmVjb3JkXG4iLCJpbXBvcnQgeyBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcblxuY29uc3QgaXNFbnRpcmVSZWNvcmRHaXZlbiA9IChcbiAgcHJvcGVydHlPclJlY29yZDogUmVjb3JkSlNPTiB8IHN0cmluZyxcbiAgdmFsdWU/OiBzdHJpbmcsXG4pOiBib29sZWFuID0+ICEhKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAvLyB1c2VyIGNhbiBwYXNzIHByb3BlcnR5IGFuZCBvbWl0IHZhbHVlLiBUaGlzIG1ha2VzIHNlbnNlIHdoZW5cbiAgICAvLyB0aGlyZCBhcmd1bWVudCBvZiB0aGUgZnVuY3Rpb24gKHNlbGVjdGVkUmVjb3JkKSBpcyBwYXNzZWQgdG8gb25DaGFuZ2VcbiAgICAvLyBjYWxsYmFja1xuICAgICYmICEodHlwZW9mIHByb3BlcnR5T3JSZWNvcmQgPT09ICdzdHJpbmcnKVxuICAgIC8vIHdlIGFzc3VtZSB0aGF0IG9ubHkgcGFyYW1zIGhhcyB0byBiZSBnaXZlblxuICAgICYmIHByb3BlcnR5T3JSZWNvcmQucGFyYW1zKVxuXG5leHBvcnQge1xuICBpc0VudGlyZVJlY29yZEdpdmVuIGFzIGRlZmF1bHQsXG4gIGlzRW50aXJlUmVjb3JkR2l2ZW4sXG59XG4iLCJpbXBvcnQgeyBmbGF0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IFVzZVJlY29yZE9wdGlvbnMgfSBmcm9tICcuL3VzZS1yZWNvcmQudHlwZSdcblxuZXhwb3J0IGNvbnN0IGZpbHRlclJlY29yZFBhcmFtcyA9IGZ1bmN0aW9uPFQgZXh0ZW5kcyBSZWNvcmRKU09OPiAoXG4gIHJlY29yZDogVCxcbiAgb3B0aW9uczogVXNlUmVjb3JkT3B0aW9ucyA9IHt9LFxuKTogVCB7XG4gIGlmIChvcHRpb25zLmluY2x1ZGVQYXJhbXMgJiYgcmVjb3JkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlY29yZCxcbiAgICAgIHBhcmFtczogZmxhdC5zZWxlY3RQYXJhbXMocmVjb3JkLnBhcmFtcyB8fCB7fSwgb3B0aW9ucy5pbmNsdWRlUGFyYW1zKSxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlY29yZFxufVxuXG5leHBvcnQgY29uc3QgaXNQcm9wZXJ0eVBlcm1pdHRlZCA9IChwcm9wZXJ0eU5hbWUsIG9wdGlvbnM6IFVzZVJlY29yZE9wdGlvbnMgPSB7fSk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCB7IGluY2x1ZGVQYXJhbXMgfSA9IG9wdGlvbnNcbiAgaWYgKGluY2x1ZGVQYXJhbXMpIHtcbiAgICBjb25zdCBwYXJ0cyA9IGZsYXQucGF0aFRvUGFydHMocHJvcGVydHlOYW1lLCB7IHNraXBBcnJheUluZGV4ZXM6IHRydWUgfSlcbiAgICByZXR1cm4gcGFydHMuc29tZShwYXJ0ID0+IGluY2x1ZGVQYXJhbXMuaW5jbHVkZXMocGFydCkpXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgQXBpQ2xpZW50LCB7IFJlY29yZEFjdGlvbkFQSVBhcmFtcyB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS1jbGllbnQnXG5pbXBvcnQgeyBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IHBhcmFtc1RvRm9ybURhdGEgfSBmcm9tICcuL3BhcmFtcy10by1mb3JtLWRhdGEnXG5pbXBvcnQgdXNlTm90aWNlIGZyb20gJy4uL3VzZS1ub3RpY2UnXG5pbXBvcnQgeyBSZWNvcmRBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvYWN0aW9ucy9hY3Rpb24uaW50ZXJmYWNlJ1xuaW1wb3J0IG1lcmdlUmVjb3JkUmVzcG9uc2UgZnJvbSAnLi9tZXJnZS1yZWNvcmQtcmVzcG9uc2UnXG5pbXBvcnQgdXBkYXRlUmVjb3JkIGZyb20gJy4vdXBkYXRlLXJlY29yZCdcbmltcG9ydCB7IFVzZVJlY29yZE9wdGlvbnMsIFVzZVJlY29yZFJlc3VsdCwgVXNlUmVjb3JkU3VibWl0RnVuY3Rpb24gfSBmcm9tICcuL3VzZS1yZWNvcmQudHlwZSdcbmltcG9ydCBpc0VudGlyZVJlY29yZEdpdmVuIGZyb20gJy4vaXMtZW50aXJlLXJlY29yZC1naXZlbidcbmltcG9ydCB7IGZpbHRlclJlY29yZFBhcmFtcywgaXNQcm9wZXJ0eVBlcm1pdHRlZCB9IGZyb20gJy4vZmlsdGVyLXJlY29yZCdcbmltcG9ydCB7IGZsYXQgfSBmcm9tICcuLi8uLi8uLi91dGlscydcblxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXG5cbi8qKlxuICogQGxvYWQgLi91c2UtcmVjb3JkLmRvYy5tZFxuICogQHN1YmNhdGVnb3J5IEhvb2tzXG4gKiBAY2xhc3NcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqIEBidW5kbGVcbiAqIEBwYXJhbSB7UmVjb3JkSlNPTn0gW2luaXRpYWxSZWNvcmRdLFxuICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWRcbiAqIEBwYXJhbSB7VXNlUmVjb3JkT3B0aW9uc30gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtVc2VSZWNvcmRSZXN1bHR9XG4gKi9cbmV4cG9ydCBjb25zdCB1c2VSZWNvcmQgPSAoXG4gIGluaXRpYWxSZWNvcmQ6IFJlY29yZEpTT04gfCB1bmRlZmluZWQsXG4gIHJlc291cmNlSWQ6IHN0cmluZyxcbiAgb3B0aW9ucz86IFVzZVJlY29yZE9wdGlvbnMsXG4pOiBVc2VSZWNvcmRSZXN1bHQgPT4ge1xuICAvLyBzZXR0aW5nIHVwIHN0YXRlXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNTeW5jZWQsIHNldElzU3luY2VkXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBmaWx0ZXJlZFJlY29yZCA9IGluaXRpYWxSZWNvcmQgPyBmaWx0ZXJSZWNvcmRQYXJhbXMoaW5pdGlhbFJlY29yZCwgb3B0aW9ucykgOiBudWxsXG5cbiAgY29uc3QgW3JlY29yZCwgc2V0UmVjb3JkXSA9IHVzZVN0YXRlPFJlY29yZEpTT04+KHtcbiAgICAuLi5maWx0ZXJlZFJlY29yZCxcbiAgICBwYXJhbXM6IGZpbHRlcmVkUmVjb3JkPy5wYXJhbXMgPz8ge30sXG4gICAgZXJyb3JzOiBpbml0aWFsUmVjb3JkPy5lcnJvcnMgPz8ge30sXG4gICAgcG9wdWxhdGVkOiBpbml0aWFsUmVjb3JkPy5wb3B1bGF0ZWQgPz8ge30sXG4gIH0gYXMgUmVjb3JkSlNPTilcblxuICAvLyBpdCBrZWVwcyB0aGUgc2FtZSBmb3JtYXQgYXMgdXNlU3RhdGUgZnVuY3Rpb24gd2hpY2ggY2FuIHRha2UgZWl0aGVyIHZhbHVlIG9yIGZ1bmN0aW9uXG4gIGNvbnN0IHNldEZpbHRlcmVkUmVjb3JkOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxSZWNvcmRKU09OPj4gPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcbiAgICBjb25zdCBuZXdSZWNvcmQgPSB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gdmFsdWUocmVjb3JkKSA6IHZhbHVlXG4gICAgc2V0UmVjb3JkKGZpbHRlclJlY29yZFBhcmFtcyhuZXdSZWNvcmQsIG9wdGlvbnMpKVxuICB9LCBbb3B0aW9ucywgcmVjb3JkXSlcblxuICBjb25zdCBvbk5vdGljZSA9IHVzZU5vdGljZSgpXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKFxuICAgIHByb3BlcnR5T3JSZWNvcmQ6IFJlY29yZEpTT04gfCBzdHJpbmcsXG4gICAgdmFsdWU/OiBhbnksXG4gICAgaW5jb21pbmdSZWNvcmQ/OiBSZWNvcmRKU09OLFxuICApOiB2b2lkID0+IHtcbiAgICBpZiAoaXNFbnRpcmVSZWNvcmRHaXZlbihwcm9wZXJ0eU9yUmVjb3JkLCB2YWx1ZSkpIHtcbiAgICAgIHNldEZpbHRlcmVkUmVjb3JkKHByb3BlcnR5T3JSZWNvcmQgYXMgUmVjb3JkSlNPTilcbiAgICB9IGVsc2UgaWYgKGlzUHJvcGVydHlQZXJtaXR0ZWQocHJvcGVydHlPclJlY29yZCBhcyBzdHJpbmcsIG9wdGlvbnMpKSB7XG4gICAgICBzZXRSZWNvcmQodXBkYXRlUmVjb3JkKHByb3BlcnR5T3JSZWNvcmQgYXMgc3RyaW5nLCB2YWx1ZSwgaW5jb21pbmdSZWNvcmQpKVxuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oW1xuICAgICAgICBgWW91IGFyZSB0cnlpbmcgdG8gc2V0IHByb3BlcnR5OiBcIiR7cHJvcGVydHlPclJlY29yZCBhcyBzdHJpbmd9XCIgd2hpY2hgLFxuICAgICAgICAnaXMgbm90IHBlcm1pdHRlZC4gVGFrZSBhIGxvb2sgYXQgYHVzZVJlY29yZCguLi4sIHsgaW5jbHVkZVBhcmFtczogWy4uLl19KWAnLFxuICAgICAgXS5qb2luKCdcXG4nKSlcbiAgICB9XG4gICAgc2V0SXNTeW5jZWQoZmFsc2UpXG4gIH0sIFtzZXRSZWNvcmQsIG9wdGlvbnNdKVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdDogVXNlUmVjb3JkU3VibWl0RnVuY3Rpb24gPSB1c2VDYWxsYmFjaygoXG4gICAgY3VzdG9tUGFyYW1zID0ge30sIHN1Ym1pdE9wdGlvbnMsXG4gICk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxSZWNvcmRBY3Rpb25SZXNwb25zZT4+ID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG5cbiAgICBjb25zdCBtZXJnZWRQYXJhbXMgPSBmbGF0Lm1lcmdlKHJlY29yZC5wYXJhbXMsIGN1c3RvbVBhcmFtcylcbiAgICBjb25zdCBmb3JtRGF0YSA9IHBhcmFtc1RvRm9ybURhdGEobWVyZ2VkUGFyYW1zKVxuXG4gICAgY29uc3QgcGFyYW1zOiBPbWl0PFJlY29yZEFjdGlvbkFQSVBhcmFtcywgJ2FjdGlvbk5hbWUnIHwgJ3JlY29yZElkJz4gPSB7XG4gICAgICByZXNvdXJjZUlkLFxuICAgICAgb25VcGxvYWRQcm9ncmVzczogKGUpOiB2b2lkID0+IHNldFByb2dyZXNzKE1hdGgucm91bmQoKGUubG9hZGVkICogMTAwKSAvIGUudG90YWwpKSxcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0sXG4gICAgfVxuXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlY29yZC5pZFxuICAgICAgPyBhcGkucmVjb3JkQWN0aW9uKHtcbiAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICBhY3Rpb25OYW1lOiAnZWRpdCcsXG4gICAgICAgIHJlY29yZElkOiByZWNvcmQuaWQsXG4gICAgICB9KVxuICAgICAgOiBhcGkucmVzb3VyY2VBY3Rpb24oe1xuICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgIGFjdGlvbk5hbWU6ICduZXcnLFxuICAgICAgfSkgYXMgUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFJlY29yZEFjdGlvblJlc3BvbnNlPj5cblxuICAgIHByb21pc2UudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLm5vdGljZSkge1xuICAgICAgICBvbk5vdGljZShyZXNwb25zZS5kYXRhLm5vdGljZSlcbiAgICAgIH1cbiAgICAgIGlmIChzdWJtaXRPcHRpb25zPy51cGRhdGVPblNhdmUgIT09IGZhbHNlKSB7XG4gICAgICAgIHNldEZpbHRlcmVkUmVjb3JkKHByZXYgPT4gbWVyZ2VSZWNvcmRSZXNwb25zZShwcmV2LCByZXNwb25zZS5kYXRhKSlcbiAgICAgIH1cbiAgICAgIHNldFByb2dyZXNzKDApXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgc2V0SXNTeW5jZWQodHJ1ZSlcbiAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICBvbk5vdGljZSh7XG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICdUaGVyZSB3YXMgYW4gZXJyb3IgdXBkYXRpbmcgcmVjb3JkLCBDaGVjayBvdXQgY29uc29sZSB0byBzZWUgbW9yZSBpbmZvcm1hdGlvbi4nLFxuICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgfSlcbiAgICAgIHNldFByb2dyZXNzKDApXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH0pXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfSwgW3JlY29yZCwgcmVzb3VyY2VJZCwgc2V0TG9hZGluZywgc2V0UHJvZ3Jlc3MsIHNldFJlY29yZF0pXG5cbiAgcmV0dXJuIHtcbiAgICByZWNvcmQsXG4gICAgaGFuZGxlQ2hhbmdlLFxuICAgIHN1Ym1pdDogaGFuZGxlU3VibWl0LFxuICAgIGxvYWRpbmcsXG4gICAgcHJvZ3Jlc3MsXG4gICAgc2V0UmVjb3JkOiBzZXRGaWx0ZXJlZFJlY29yZCxcbiAgICBpc1N5bmNlZCxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSZWNvcmRcbiIsImltcG9ydCB7IEFjdGlvbkpTT04gfSBmcm9tICcuL2FjdGlvbi1qc29uLmludGVyZmFjZSdcblxuZXhwb3J0IGNvbnN0IGFjdGlvbkhhc0NvbXBvbmVudCA9IChhY3Rpb246IEFjdGlvbkpTT04pOiBib29sZWFuID0+IChcbiAgdHlwZW9mIGFjdGlvbi5jb21wb25lbnQgIT09ICd1bmRlZmluZWQnICYmIGFjdGlvbi5jb21wb25lbnQgPT09IGZhbHNlXG4pXG4iLCJpbXBvcnQgeyBSZWNvcmRBY3Rpb25QYXJhbXMsIFZpZXdIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMnXG5pbXBvcnQgeyBEaWZmZXJlbnRBY3Rpb25QYXJhbXMgfSBmcm9tICcuLi8uLi9ob29rcydcbmltcG9ydCB7IEFjdGlvbkpTT04gfSBmcm9tICcuL2FjdGlvbi1qc29uLmludGVyZmFjZSdcblxuY29uc3QgaCA9IG5ldyBWaWV3SGVscGVycygpXG5cbmV4cG9ydCBjb25zdCBhY3Rpb25IcmVmID0gKFxuICBhY3Rpb246IEFjdGlvbkpTT04sXG4gIHBhcmFtczogRGlmZmVyZW50QWN0aW9uUGFyYW1zLFxuKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGFjdGlvbk5hbWUgPSBhY3Rpb24ubmFtZVxuXG4gIGlmICghYWN0aW9uLmNvbXBvbmVudCAmJiAhYWN0aW9uLmhhc0hhbmRsZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgaHJlZk1hcCA9IHtcbiAgICByZWNvcmQ6ICgpOiBzdHJpbmcgPT4gaC5yZWNvcmRBY3Rpb25Vcmwoe1xuICAgICAgLi4ucGFyYW1zIGFzIFJlY29yZEFjdGlvblBhcmFtcyxcbiAgICAgIGFjdGlvbk5hbWUsXG4gICAgfSksXG4gICAgcmVzb3VyY2U6ICgpOiBzdHJpbmcgPT4gaC5yZXNvdXJjZUFjdGlvblVybCh7XG4gICAgICByZXNvdXJjZUlkOiBwYXJhbXMucmVzb3VyY2VJZCxcbiAgICAgIGFjdGlvbk5hbWUsXG4gICAgfSksXG4gICAgYnVsazogKCk6IHN0cmluZyA9PiBoLmJ1bGtBY3Rpb25Vcmwoe1xuICAgICAgLi4ucGFyYW1zLFxuICAgICAgYWN0aW9uTmFtZSxcbiAgICB9KSxcbiAgfVxuICBpZiAoaHJlZk1hcFthY3Rpb24uYWN0aW9uVHlwZV0pIHtcbiAgICByZXR1cm4gaHJlZk1hcFthY3Rpb24uYWN0aW9uVHlwZV0oKVxuICB9XG4gIHRocm93IG5ldyBFcnJvcignXCJhY3Rpb25UeXBlXCIgc2hvdWxkIGJlIGVpdGhlciByZWNvcmQsIHJlc291cmNlIG9yIGJ1bGsnKVxufVxuIiwiaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kJ1xuaW1wb3J0IHsgRGlmZmVyZW50QWN0aW9uUGFyYW1zIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgeyBBcGlDbGllbnQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IEFjdGlvbkpTT04gfSBmcm9tICcuL2FjdGlvbi1qc29uLmludGVyZmFjZSdcblxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsQWN0aW9uQXBpPEsgZXh0ZW5kcyBBY3Rpb25SZXNwb25zZT4oXG4gIGFjdGlvbjogQWN0aW9uSlNPTixcbiAgcGFyYW1zOiBEaWZmZXJlbnRBY3Rpb25QYXJhbXMsXG4gIHNlYXJjaD86IExvY2F0aW9uWydzZWFyY2gnXSxcbik6IFByb21pc2U8QXhpb3NSZXNwb25zZTxLPj4ge1xuICBsZXQgcHJvbWlzZTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPEs+PlxuICBjb25zdCB7IHJlY29yZElkLCByZWNvcmRJZHMsIHJlc291cmNlSWQgfSA9IHBhcmFtc1xuXG4gIHN3aXRjaCAoYWN0aW9uLmFjdGlvblR5cGUpIHtcbiAgY2FzZSAncmVjb3JkJzpcbiAgICBpZiAoIXJlY29yZElkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIHNwZWNpZnkgXCJyZWNvcmRJZFwiIGZvciByZWNvcmQgYWN0aW9uJylcbiAgICB9XG4gICAgcHJvbWlzZSA9IGFwaS5yZWNvcmRBY3Rpb24oe1xuICAgICAgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZTogYWN0aW9uLm5hbWUsIHJlY29yZElkLCBzZWFyY2gsXG4gICAgfSkgYXMgYW55XG4gICAgYnJlYWtcbiAgY2FzZSAncmVzb3VyY2UnOlxuICAgIHByb21pc2UgPSBhcGkucmVzb3VyY2VBY3Rpb24oe1xuICAgICAgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZTogYWN0aW9uLm5hbWUsXG4gICAgfSkgYXMgYW55XG4gICAgYnJlYWtcbiAgY2FzZSAnYnVsayc6XG4gICAgaWYgKCFyZWNvcmRJZHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gc3BlY2lmeSBcInJlY29yZElkc1wiIGZvciBidWxrIGFjdGlvbicpXG4gICAgfVxuICAgIHByb21pc2UgPSBhcGkuYnVsa0FjdGlvbih7XG4gICAgICByZXNvdXJjZUlkLCBhY3Rpb25OYW1lOiBhY3Rpb24ubmFtZSwgcmVjb3JkSWRzLCBzZWFyY2gsXG4gICAgfSkgYXMgYW55XG4gICAgYnJlYWtcbiAgZGVmYXVsdDpcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiYWN0aW9uVHlwZVwiIHNob3VsZCBiZSBlaXRoZXIgcmVjb3JkLCByZXNvdXJjZSBvciBidWxrJylcbiAgfVxuICByZXR1cm4gcHJvbWlzZVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgYXJyb3ctcGFyZW5zICovXG5pbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQnXG5pbXBvcnQgeyBEaWZmZXJlbnRBY3Rpb25QYXJhbXMsIHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiB9IGZyb20gJy4vYWN0aW9uLWpzb24uaW50ZXJmYWNlJ1xuaW1wb3J0IHsgY2FsbEFjdGlvbkFwaSB9IGZyb20gJy4vY2FsbC1hY3Rpb24tYXBpJ1xuXG5leHBvcnQgdHlwZSBDYWxsQXBpRnVuY3Rpb248SyBleHRlbmRzIEFjdGlvblJlc3BvbnNlPiA9ICgpID0+IFByb21pc2U8QXhpb3NSZXNwb25zZTxLPj5cblxuZXhwb3J0IHR5cGUgQnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlck9wdGlvbnMgPSB7XG4gIGFjdGlvbjogQWN0aW9uSlNPTjtcbiAgcGFyYW1zOiBEaWZmZXJlbnRBY3Rpb25QYXJhbXM7XG4gIGFjdGlvblJlc3BvbnNlSGFuZGxlcjogUmV0dXJuVHlwZTx0eXBlb2YgdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyPjtcbiAgc2VhcmNoPzogTG9jYXRpb25bJ3NlYXJjaCddO1xufVxuXG5leHBvcnQgY29uc3QgYnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlciA9IDxLPihcbiAgb3B0aW9uczogQnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlck9wdGlvbnMsXG4pOiBDYWxsQXBpRnVuY3Rpb248Sz4gPT4ge1xuICBjb25zdCB7IGFjdGlvbiwgcGFyYW1zLCBhY3Rpb25SZXNwb25zZUhhbmRsZXIsIHNlYXJjaCB9ID0gb3B0aW9uc1xuICBjb25zdCBjYWxsQXBpOiBDYWxsQXBpRnVuY3Rpb248Sz4gPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvbWlzZSA9IGNhbGxBY3Rpb25BcGkoYWN0aW9uLCBwYXJhbXMsIHNlYXJjaClcbiAgICBwcm9taXNlLnRoZW4oYWN0aW9uUmVzcG9uc2VIYW5kbGVyKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHRocm93IGVycm9yXG4gICAgfSlcblxuICAgIHJldHVybiBwcm9taXNlIGFzIFByb21pc2U8QXhpb3NSZXNwb25zZTxLPj5cbiAgfVxuICByZXR1cm4gY2FsbEFwaVxufVxuIiwiaW1wb3J0IHsgQWN0aW9uSlNPTiB9IGZyb20gJy4vYWN0aW9uLWpzb24uaW50ZXJmYWNlJ1xuXG5leHBvcnQgY29uc3QgYnVpbGRBY3Rpb25UZXN0SWQgPSAoYWN0aW9uOiBBY3Rpb25KU09OKTogc3RyaW5nID0+IGBhY3Rpb24tJHthY3Rpb24ubmFtZX1gXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuaW1wb3J0IHsgRGlmZmVyZW50QWN0aW9uUGFyYW1zLCB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXIgfSBmcm9tICcuLi8uLi9ob29rcydcbmltcG9ydCB7IGFjdGlvbkhhc0NvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uLWhhcy1jb21wb25lbnQnXG5pbXBvcnQgeyBhY3Rpb25IcmVmIH0gZnJvbSAnLi9hY3Rpb24taHJlZidcbmltcG9ydCB7IEFjdGlvbkpTT04gfSBmcm9tICcuL2FjdGlvbi1qc29uLmludGVyZmFjZSdcbmltcG9ydCB7IGJ1aWxkQWN0aW9uQ2FsbEFwaVRyaWdnZXIgfSBmcm9tICcuL2J1aWxkLWFjdGlvbi1hcGktY2FsbC10cmlnZ2VyJ1xuXG5leHBvcnQgdHlwZSBCdWlsZEFjdGlvbkNsaWNrT3B0aW9ucyA9IHtcbiAgYWN0aW9uOiBBY3Rpb25KU09OO1xuICBwYXJhbXM6IERpZmZlcmVudEFjdGlvblBhcmFtcztcbiAgYWN0aW9uUmVzcG9uc2VIYW5kbGVyOiBSZXR1cm5UeXBlPHR5cGVvZiB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXI+O1xuICBwdXNoOiAocGF0aDogc3RyaW5nLCBzdGF0ZT86IGFueSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IHR5cGUgQnVpbGRBY3Rpb25DbGlja1JldHVybiA9IChldmVudDogYW55KSA9PiBhbnlcblxuZXhwb3J0IGNvbnN0IGJ1aWxkQWN0aW9uQ2xpY2tIYW5kbGVyID0gKFxuICBvcHRpb25zOiBCdWlsZEFjdGlvbkNsaWNrT3B0aW9ucyxcbik6IEJ1aWxkQWN0aW9uQ2xpY2tSZXR1cm4gPT4ge1xuICBjb25zdCB7IGFjdGlvbiwgcGFyYW1zLCBhY3Rpb25SZXNwb25zZUhhbmRsZXIsIHB1c2ggfSA9IG9wdGlvbnNcblxuICBjb25zdCBoYW5kbGVBY3Rpb25DbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGNvbnN0IGhyZWYgPSBhY3Rpb25IcmVmKGFjdGlvbiwgcGFyYW1zKVxuXG4gICAgY29uc3QgY2FsbEFwaSA9IGJ1aWxkQWN0aW9uQ2FsbEFwaVRyaWdnZXIoe1xuICAgICAgcGFyYW1zLCBhY3Rpb24sIGFjdGlvblJlc3BvbnNlSGFuZGxlcixcbiAgICB9KVxuXG4gICAgaWYgKGFjdGlvbi5ndWFyZCAmJiAhY29uZmlybShhY3Rpb24uZ3VhcmQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKGFjdGlvbkhhc0NvbXBvbmVudChhY3Rpb24pKSB7XG4gICAgICBjYWxsQXBpKClcbiAgICB9IGVsc2UgaWYgKGhyZWYpIHtcbiAgICAgIHB1c2goaHJlZilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaGFuZGxlQWN0aW9uQ2xpY2tcbn1cbiIsImV4cG9ydCBjb25zdCBSRUZSRVNIX0tFWSA9ICdyZWZyZXNoJ1xuXG4vKipcbiAqIEFkZHMgcmVmcmVzaD10cnVlIHRvIHRoZSB1cmwsIHdoaWNoIGluIHR1cm4gc2hvdWxkIGNhdXNlIGxpc3QgdG8gcmVsb2FkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgICAgICB1cmwgdG8gd2hpY2ggZnVuY3Rpb24gc2hvdWxkIGFkZCBgcmVmcmVzaGBcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc2VhcmNoXSBvcHRpb25hbCBzZWFyY2ggcXVlcnkgd2hpY2ggc2hvdWxkIGJlIHVwZGF0ZWQsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgbm90IGdpdmVuIGZ1bmN0aW9uIHdpbGwgdXNlIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2hcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBhcHBlbmRGb3JjZVJlZnJlc2ggPSAodXJsOiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHNlYXJjaFBhcmFtc0lkeCA9IHVybC5sYXN0SW5kZXhPZignPycpXG4gIGNvbnN0IHVybFNlYXJjaFBhcmFtcyA9IHNlYXJjaFBhcmFtc0lkeCAhPT0gLTFcbiAgICA/IHVybC5zdWJzdHJpbmcoc2VhcmNoUGFyYW1zSWR4ICsgMSlcbiAgICA6IG51bGxcblxuICBjb25zdCBvbGRQYXJhbXMgPSBzZWFyY2ggPz8gdXJsU2VhcmNoUGFyYW1zID8/IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2hcbiAgY29uc3QgbmV3UGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhvbGRQYXJhbXMpXG5cbiAgbmV3UGFyYW1zLnNldChSRUZSRVNIX0tFWSwgJ3RydWUnKVxuXG4gIGNvbnN0IG5ld1VybCA9IHNlYXJjaFBhcmFtc0lkeCAhPT0gLTFcbiAgICA/IHVybC5zdWJzdHJpbmcoMCwgc2VhcmNoUGFyYW1zSWR4KVxuICAgIDogdXJsXG5cbiAgcmV0dXJuIGAke25ld1VybH0/JHtuZXdQYXJhbXMudG9TdHJpbmcoKX1gXG59XG5cbmV4cG9ydCBjb25zdCBoYXNGb3JjZVJlZnJlc2ggPSAoc2VhcmNoOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2gpXG4gIHJldHVybiAhIXBhcmFtcy5nZXQoUkVGUkVTSF9LRVkpXG59XG5cbmV4cG9ydCBjb25zdCByZW1vdmVGb3JjZVJlZnJlc2ggPSAoc2VhcmNoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaClcbiAgaWYgKHBhcmFtcy5nZXQoUkVGUkVTSF9LRVkpKSB7XG4gICAgcGFyYW1zLmRlbGV0ZShSRUZSRVNIX0tFWSlcbiAgfVxuICByZXR1cm4gcGFyYW1zLnRvU3RyaW5nKClcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xuaW1wb3J0IHsgdXNlSGlzdG9yeSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvYWN0aW9ucy9hY3Rpb24uaW50ZXJmYWNlJ1xuaW1wb3J0IHsgYXBwZW5kRm9yY2VSZWZyZXNoIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL3V0aWxzL2FwcGVuZC1mb3JjZS1yZWZyZXNoJ1xuaW1wb3J0IHsgQWN0aW9uQ2FsbENhbGxiYWNrIH0gZnJvbSAnLidcbmltcG9ydCB7IHVzZU5vdGljZSB9IGZyb20gJy4uL3VzZS1ub3RpY2UnXG5cblxuZXhwb3J0IGNvbnN0IHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciA9IChvbkFjdGlvbkNhbGw/OiBBY3Rpb25DYWxsQ2FsbGJhY2spID0+IHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcbiAgY29uc3QgYWRkTm90aWNlID0gdXNlTm90aWNlKClcblxuICByZXR1cm4gKHJlc3BvbnNlOiBBY3Rpb25SZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2VcbiAgICBpZiAoZGF0YS5ub3RpY2UpIHtcbiAgICAgIGFkZE5vdGljZShkYXRhLm5vdGljZSlcbiAgICB9XG4gICAgaWYgKGRhdGEucmVkaXJlY3RVcmwgJiYgbG9jYXRpb24ucGF0aG5hbWUgIT09IGRhdGEucmVkaXJlY3RVcmwpIHtcbiAgICAgIGNvbnN0IGFwcGVuZGVkID0gYXBwZW5kRm9yY2VSZWZyZXNoKGRhdGEucmVkaXJlY3RVcmwpXG4gICAgICBoaXN0b3J5LnB1c2goYXBwZW5kZWQpXG4gICAgfVxuICAgIGlmIChvbkFjdGlvbkNhbGwpIHtcbiAgICAgIG9uQWN0aW9uQ2FsbChkYXRhKVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHsgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL2FjdGlvbnMvYWN0aW9uLmludGVyZmFjZSdcblxuaW1wb3J0IHsgQWN0aW9uSlNPTiwgYnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlciwgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuXG5pbXBvcnQgeyBEaWZmZXJlbnRBY3Rpb25QYXJhbXMsIEFjdGlvbkNhbGxDYWxsYmFjaywgVXNlQWN0aW9uUmVzdWx0IH0gZnJvbSAnLi91c2UtYWN0aW9uLnR5cGVzJ1xuaW1wb3J0IHsgYWN0aW9uSHJlZiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvYWN0aW9uL2FjdGlvbi1ocmVmJ1xuaW1wb3J0IHsgdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyIH0gZnJvbSAnLi91c2UtYWN0aW9uLXJlc3BvbnNlLWhhbmRsZXInXG5cbi8qKlxuICogQGxvYWQgLi91c2UtYWN0aW9uLmRvYy5tZFxuICogQHN1YmNhdGVnb3J5IEhvb2tzXG4gKlxuICogQHBhcmFtIHtBY3Rpb25KU09OfSAgIGFjdGlvbiAgICAgIGFjdGlvbiBvYmplY3RcbiAqIEBwYXJhbSB7QWN0aW9uUGFyYW1zfSBwYXJhbXNcbiAqIEBwYXJhbSB7QWN0aW9uQ2FsbENhbGxiYWNrfSBvbkFjdGlvbkNhbGwgLSBjYWxsYmFjayB0cmlnZ2VyZWQgd2hlbiBhY3Rpb24gaXMgcGVyZm9ybWVkXG4gKiBAcmV0dXJuIHtVc2VBY3Rpb25SZXN1bHR9XG4gKiBAbmV3IEluIHZlcnNpb24gMy4zXG4gKiBAY2xhc3NcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFjdGlvbjxLIGV4dGVuZHMgQWN0aW9uUmVzcG9uc2U+KFxuICBhY3Rpb246IEFjdGlvbkpTT04sXG4gIHBhcmFtczogRGlmZmVyZW50QWN0aW9uUGFyYW1zLFxuICBvbkFjdGlvbkNhbGw/OiBBY3Rpb25DYWxsQ2FsbGJhY2ssXG4pOiBVc2VBY3Rpb25SZXN1bHQ8Sz4ge1xuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG5cbiAgY29uc3QgYWN0aW9uUmVzcG9uc2VIYW5kbGVyID0gdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyKG9uQWN0aW9uQ2FsbClcblxuICBjb25zdCBocmVmID0gYWN0aW9uSHJlZihhY3Rpb24sIHBhcmFtcylcblxuICBjb25zdCBjYWxsQXBpID0gYnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlcjxLPih7XG4gICAgYWN0aW9uLFxuICAgIHBhcmFtcyxcbiAgICBhY3Rpb25SZXNwb25zZUhhbmRsZXIsXG4gIH0pXG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBidWlsZEFjdGlvbkNsaWNrSGFuZGxlcih7XG4gICAgYWN0aW9uLFxuICAgIHBhcmFtcyxcbiAgICBhY3Rpb25SZXNwb25zZUhhbmRsZXIsXG4gICAgcHVzaDogaGlzdG9yeS5wdXNoLFxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgaHJlZixcbiAgICBjYWxsQXBpLFxuICAgIGhhbmRsZUNsaWNrLFxuICB9XG59XG4iLCJpbXBvcnQgeyBDdXJyZW50QWRtaW4gfSBmcm9tICcuLi8uLi8uLi9jdXJyZW50LWFkbWluLmludGVyZmFjZSdcblxuZXhwb3J0IGNvbnN0IFNFU1NJT05fSU5JVElBTElaRSA9ICdTRVNTSU9OX0lOSVRJQUxJWkUnXG5cbmV4cG9ydCB0eXBlIFNldEN1cnJlbnRBZG1pblJlc3BvbnNlID0ge1xuICB0eXBlOiB0eXBlb2YgU0VTU0lPTl9JTklUSUFMSVpFO1xuICBkYXRhOiBDdXJyZW50QWRtaW4gfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0Q3VycmVudEFkbWluID0gKGRhdGE6IEN1cnJlbnRBZG1pbiB8IG51bGwgPSBudWxsKTogU2V0Q3VycmVudEFkbWluUmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogU0VTU0lPTl9JTklUSUFMSVpFLFxuICBkYXRhLFxufSlcbiIsImltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IHsgc2V0Q3VycmVudEFkbWluIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9zZXQtY3VycmVudC1hZG1pbidcbmltcG9ydCB7IEN1cnJlbnRBZG1pbiB9IGZyb20gJy4uLy4uL2N1cnJlbnQtYWRtaW4uaW50ZXJmYWNlJ1xuXG5leHBvcnQgdHlwZSBVc2VDdXJyZW50QWRtaW5SZXNwb25zZSA9IFtcbiAgQ3VycmVudEFkbWluIHwgbnVsbCxcbiAgKGN1cnJlbnRBZG1pbjogQ3VycmVudEFkbWluIHwgbnVsbCkgPT4gQ3VycmVudEFkbWluIHwge31cbl1cblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBIb29rIHdoaWNoIGFsbG93cyB5b3UgdG8gZ2V0IGFuZCBzZXQgY3VycmVudEFkbWluXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IHsgdXNlQ3VycmVudEFkbWluIH0gZnJvbSAnYWRtaW4tYnJvJ1xuICpcbiAqIGNvbnN0IG15Q29tcG9uZW50ID0gKCkgPT4ge1xuICogICBjb25zdCBbY3VycmVudEFkbWluLCBzZXRDdXJyZW50QWRtaW5dID0gdXNlQ3VycmVudEFkbWluKClcbiAqICAgLy8gLi4uXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAY2xhc3NcbiAqIEBzdWJjYXRlZ29yeSBIb29rc1xuICogQGJ1bmRsZVxuICogQHJldHVybnMge1VzZUN1cnJlbnRBZG1pblJlc3BvbnNlfVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiB1c2VDdXJyZW50QWRtaW4oKTogVXNlQ3VycmVudEFkbWluUmVzcG9uc2Uge1xuICBjb25zdCBjdXJyZW50QWRtaW4gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4U3RhdGUpID0+IHN0YXRlLnNlc3Npb24pXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICByZXR1cm4gW1xuICAgIGN1cnJlbnRBZG1pbixcbiAgICAoYWRtaW46IEN1cnJlbnRBZG1pbiB8IG51bGwpOiBhbnkgPT4gZGlzcGF0Y2goc2V0Q3VycmVudEFkbWluKGFkbWluKSksXG4gIF1cbn1cblxuZXhwb3J0IHtcbiAgdXNlQ3VycmVudEFkbWluLFxuICB1c2VDdXJyZW50QWRtaW4gYXMgZGVmYXVsdCxcbn1cblxuLyoqXG4gKiBSZXN1bHQgb2YgdGhlIHtAbGluayB1c2VDdXJyZW50QWRtaW59LlxuICogSXQgaXMgYSB0dXBsZSBjb250YWluaW5nIHZhbHVlIGFuZCB0aGUgc2V0dGVyXG4gKlxuICogQHR5cGVkZWYge0FycmF5fSBVc2VDdXJyZW50QWRtaW5SZXNwb25zZVxuICogQG1lbWJlcm9mIHVzZUN1cnJlbnRBZG1pblxuICogQGFsaWFzIFVzZUN1cnJlbnRBZG1pblJlc3BvbnNlXG4gKiBAcHJvcGVydHkge0N1cnJlbnRBZG1pbiB8IG51bGx9IFswXSAgICBjdXJyZW50IGFkbWluXG4gKiBAcHJvcGVydHkge1JlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPEN1cnJlbnRBZG1pbj4+fSBbMV0gICAgdmFsdWUgc2V0dGVyIGNvbXBhdGlibGVcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIHJlYWN0IHVzZVN0YXRlXG4gKi9cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXNlTG9jYWxTdG9yYWdlUmVzdWx0IH0gZnJvbSAnLi91c2UtbG9jYWwtc3RvcmFnZS1yZXN1bHQudHlwZSdcblxuLyoqXG4gKiBAbG9hZCAuL3VzZS1sb2NhbC1zdG9yYWdlLmRvYy5tZFxuICogQHN1YmNhdGVnb3J5IEhvb2tzXG4gKiBAY2xhc3NcbiAqIEBzZWUgaHR0cHM6Ly91c2Vob29rcy5jb20vdXNlTG9jYWxTdG9yYWdlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSAgICAgICAgICBrZXkgdW5kZXIgd2hpY2ggaG9vayB3aWxsIHN0b3JlIHRoZSBkYXRhXG4gKiBAcGFyYW0ge1R9ICAgICAgaW5pdGlhbFZhbHVlICAgIHZhbHVlIHdoaWNoIHdpbGwgYmUgc3RyaW5naWZpZWQgYW5kIHN0b3JlZFxuICogQHJldHVybiB7VXNlTG9jYWxTdG9yYWdlUmVzdWx0PFQ+fVxuICogQG5ldyBJbiB2ZXJzaW9uIDMuM1xuICogQGJ1bmRsZVxuICogQHR5cGUge0Z1bmN0aW9ufVxuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9jYWxTdG9yYWdlPFQ+KGtleTogc3RyaW5nLCBpbml0aWFsVmFsdWU6IFQpOiBVc2VMb2NhbFN0b3JhZ2VSZXN1bHQ8VD4ge1xuICAvLyBTdGF0ZSB0byBzdG9yZSBvdXIgdmFsdWVcbiAgLy8gUGFzcyBpbml0aWFsIHN0YXRlIGZ1bmN0aW9uIHRvIHVzZVN0YXRlIHNvIGxvZ2ljIGlzIG9ubHkgZXhlY3V0ZWQgb25jZVxuICBjb25zdCBbc3RvcmVkVmFsdWUsIHNldFN0b3JlZFZhbHVlXSA9IHVzZVN0YXRlPFQ+KCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gR2V0IGZyb20gbG9jYWwgc3RvcmFnZSBieSBrZXlcbiAgICAgIGNvbnN0IGl0ZW0gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxuICAgICAgLy8gUGFyc2Ugc3RvcmVkIGpzb24gb3IgaWYgbm9uZSByZXR1cm4gaW5pdGlhbFZhbHVlXG4gICAgICByZXR1cm4gaXRlbSA/IEpTT04ucGFyc2UoaXRlbSkgOiBpbml0aWFsVmFsdWVcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSWYgZXJyb3IgYWxzbyByZXR1cm4gaW5pdGlhbFZhbHVlXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIHJldHVybiBpbml0aWFsVmFsdWVcbiAgICB9XG4gIH0pXG5cbiAgLy8gUmV0dXJuIGEgd3JhcHBlZCB2ZXJzaW9uIG9mIHVzZVN0YXRlJ3Mgc2V0dGVyIGZ1bmN0aW9uIHRoYXQgLi4uXG4gIC8vIC4uLiBwZXJzaXN0cyB0aGUgbmV3IHZhbHVlIHRvIGxvY2FsU3RvcmFnZS5cbiAgY29uc3Qgc2V0VmFsdWU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPFQ+PiA9ICh2YWx1ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAvLyBBbGxvdyB2YWx1ZSB0byBiZSBhIGZ1bmN0aW9uIHNvIHdlIGhhdmUgc2FtZSBBUEkgYXMgdXNlU3RhdGVcbiAgICAgIGNvbnN0IHZhbHVlVG9TdG9yZSA9IHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24gPyB2YWx1ZShzdG9yZWRWYWx1ZSkgOiB2YWx1ZVxuICAgICAgLy8gU2F2ZSBzdGF0ZVxuICAgICAgc2V0U3RvcmVkVmFsdWUodmFsdWVUb1N0b3JlKVxuICAgICAgLy8gU2F2ZSB0byBsb2NhbCBzdG9yYWdlXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZVRvU3RvcmUpKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBBIG1vcmUgYWR2YW5jZWQgaW1wbGVtZW50YXRpb24gd291bGQgaGFuZGxlIHRoZSBlcnJvciBjYXNlXG4gICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gW3N0b3JlZFZhbHVlLCBzZXRWYWx1ZV1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTG9jYWxTdG9yYWdlXG4iLCJpbXBvcnQgeyB1c2VIaXN0b3J5LCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5pbXBvcnQge1xuICBOYXZpZ2F0aW9uUHJvcHMsXG4gIE5hdmlnYXRpb25FbGVtZW50UHJvcHMsXG4gIE5hdmlnYXRpb25FbGVtZW50V2l0aENoaWxkcmVuUHJvcHMsXG59IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJlc291cmNlSlNPTiB9IGZyb20gJy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgdXNlTG9jYWxTdG9yYWdlIGZyb20gJy4vdXNlLWxvY2FsLXN0b3JhZ2UvdXNlLWxvY2FsLXN0b3JhZ2UnXG5cbmNvbnN0IGlzU2VsZWN0ZWQgPSAoaHJlZiwgbG9jYXRpb24pOiBib29sZWFuID0+IHtcbiAgY29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cChgJHtocmVmfSgkfC8pYClcbiAgcmV0dXJuICEhbG9jYXRpb24ucGF0aG5hbWUubWF0Y2gocmVnRXhwKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlTmF2aWdhdGlvblJlc291cmNlcyhcbiAgcmVzb3VyY2VzOiBBcnJheTxSZXNvdXJjZUpTT04+LFxuKTogTmF2aWdhdGlvblByb3BzWydlbGVtZW50cyddIHtcbiAgY29uc3QgW29wZW5FbGVtZW50cywgc2V0T3BlbkVsZW1lbnRzXSA9IHVzZUxvY2FsU3RvcmFnZTxSZWNvcmQ8c3RyaW5nLCBib29sZWFuPj4oXG4gICAgJ3NpZGViYXJFbGVtZW50cycsIHt9LFxuICApXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG5cbiAgY29uc3QgZW5yaWNoUmVzb3VyY2UgPSB1c2VNZW1vKCgpID0+IChcbiAgICByZXNvdXJjZTogUmVzb3VyY2VKU09OLFxuICAgIGljb24/OiBzdHJpbmcsXG4gICk6IE5hdmlnYXRpb25FbGVtZW50V2l0aENoaWxkcmVuUHJvcHMgPT4gKHtcbiAgICBocmVmOiByZXNvdXJjZS5ocmVmIHx8IHVuZGVmaW5lZCxcbiAgICBpY29uLFxuICAgIGlzU2VsZWN0ZWQ6IGlzU2VsZWN0ZWQocmVzb3VyY2UuaHJlZiwgbG9jYXRpb24pLFxuICAgIGxhYmVsOiByZXNvdXJjZS5uYW1lLFxuICAgIGlkOiByZXNvdXJjZS5pZCxcbiAgICBvbkNsaWNrOiAoZXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGlmIChyZXNvdXJjZS5ocmVmKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgaGlzdG9yeS5wdXNoKHJlc291cmNlLmhyZWYpXG4gICAgICB9XG4gICAgfSxcbiAgfSksIFtsb2NhdGlvbiwgaGlzdG9yeV0pXG5cbiAgLy8gZ3JvdXBpbmcgcmVzb3VyY2VzIGludG8gcGFyZW50c1xuICBjb25zdCBtYXAgPSByZXNvdXJjZXNcbiAgICAuZmlsdGVyKHJlcyA9PiByZXMuaHJlZikgLy8gZmlyc3QgZmlsdGVyIG91dCByZXNvdXJjZSB3aGljaCBhcmUgbm90IHZpc2libGVcbiAgICAucmVkdWNlKChtZW1vLCByZXNvdXJjZSkgPT4ge1xuICAgICAgLy8gaW4gY2FzZSByZXNvdXJjZSBoYXMgdGhlIHNhbWUgbmFtZSBhcyBwYXJlbnQgd2UgbmFtZXNwYWNlIGl0IHdpdCBcInJlc291cmNlLVwiXCJcbiAgICAgIGNvbnN0IGtleSA9IHJlc291cmNlLm5hdmlnYXRpb24/Lm5hbWUgfHwgWydyZXNvdXJjZScsIHJlc291cmNlLm5hbWVdLmpvaW4oJy0nKVxuXG4gICAgICBpZiAoIXJlc291cmNlLm5hdmlnYXRpb24gfHwgcmVzb3VyY2UubmF2aWdhdGlvbi5uYW1lID09PSBudWxsKSB7XG4gICAgICAgIG1lbW9ba2V5XSA9IGVucmljaFJlc291cmNlKHJlc291cmNlLCByZXNvdXJjZS5uYXZpZ2F0aW9uPy5pY29uKVxuICAgICAgfSBlbHNlIGlmIChtZW1vW2tleV0gJiYgbWVtb1trZXldLmVsZW1lbnRzICYmIHJlc291cmNlLm5hdmlnYXRpb24/Lm5hbWUpIHtcbiAgICAgICAgKG1lbW9ba2V5XS5lbGVtZW50cyBhcyBBcnJheTxOYXZpZ2F0aW9uRWxlbWVudFByb3BzPikucHVzaChlbnJpY2hSZXNvdXJjZShyZXNvdXJjZSkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtZW1vW2tleV0gPSB7XG4gICAgICAgICAgZWxlbWVudHM6IFtlbnJpY2hSZXNvdXJjZShyZXNvdXJjZSldLFxuICAgICAgICAgIGxhYmVsOiByZXNvdXJjZS5uYXZpZ2F0aW9uPy5uYW1lLFxuICAgICAgICAgIGljb246IHJlc291cmNlLm5hdmlnYXRpb24/Lmljb24sXG4gICAgICAgICAgb25DbGljazogKCk6IHZvaWQgPT4gc2V0T3BlbkVsZW1lbnRzKHtcbiAgICAgICAgICAgIC4uLm9wZW5FbGVtZW50cyxcbiAgICAgICAgICAgIFtrZXldOiAhb3BlbkVsZW1lbnRzW2tleV0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaXNPcGVuOiAhIW9wZW5FbGVtZW50c1trZXldLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbWVtb1xuICAgIH0sIHt9IGFzIFJlY29yZDxzdHJpbmcsIE5hdmlnYXRpb25FbGVtZW50V2l0aENoaWxkcmVuUHJvcHM+KVxuXG4gIHJldHVybiBPYmplY3QudmFsdWVzKG1hcClcbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlTmF2aWdhdGlvblJlc291cmNlc1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiwgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHVzZU5vdGljZSBmcm9tICcuLi91c2Utbm90aWNlJ1xuaW1wb3J0IEFwaUNsaWVudCBmcm9tICcuLi8uLi91dGlscy9hcGktY2xpZW50J1xuaW1wb3J0IHsgTGlzdEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2xpc3QvbGlzdC1hY3Rpb24nXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uL3VzZS10cmFuc2xhdGlvbidcbmltcG9ydCB7IGhhc0ZvcmNlUmVmcmVzaCwgcmVtb3ZlRm9yY2VSZWZyZXNoIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL3V0aWxzL2FwcGVuZC1mb3JjZS1yZWZyZXNoJ1xuaW1wb3J0IHsgVXNlUmVjb3Jkc1Jlc3VsdCB9IGZyb20gJy4vdXNlLXJlY29yZHMtcmVzdWx0LnR5cGUnXG5cbmNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxuXG4vKipcbiAqIEBsb2FkIC4vdXNlLXJlY29yZHMuZG9jLm1kXG4gKiBAc3ViY2F0ZWdvcnkgSG9va3NcbiAqIEBjbGFzc1xuICogQGhpZGVjb25zdHJ1Y3RvclxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXNvdXJjZUlkICAgICAgaWQgb2YgYSByZXNvdXJjZSBmb3Igd2hpY2ggeW91IHdhbnQgdG8gZmV0Y2ggcmVjb3Jkc1xuICogQHJldHVybiB7VXNlUmVjb3Jkc1Jlc3VsdH1cbiAqIEBuZXcgSW4gdmVyc2lvbiAzLjNcbiAqIEBidW5kbGVcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gdXNlUmVjb3JkcyhyZXNvdXJjZUlkOiBzdHJpbmcpOiBVc2VSZWNvcmRzUmVzdWx0IHtcbiAgY29uc3QgW3JlY29yZHMsIHNldFJlY29yZHNdID0gdXNlU3RhdGU8QXJyYXk8UmVjb3JkSlNPTj4+KFtdKVxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3BlclBhZ2UsIHNldFBlclBhZ2VdID0gdXNlU3RhdGUoMTApXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2RpcmVjdGlvbiwgc2V0RGlyZWN0aW9uXSA9IHVzZVN0YXRlPCdhc2MnfCAnZGVzYyc+KCdhc2MnKVxuICBjb25zdCBbc29ydEJ5LCBzZXRTb3J0QnldID0gdXNlU3RhdGU8c3RyaW5nIHwgdW5kZWZpbmVkPigpXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG4gIGNvbnN0IGFkZE5vdGljZSA9IHVzZU5vdGljZSgpXG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCBvbk5vdGljZSA9IHVzZU5vdGljZSgpXG5cbiAgY29uc3QgZmV0Y2hEYXRhID0gKCk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxMaXN0QWN0aW9uUmVzcG9uc2U+PiA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpXG5cbiAgICBjb25zdCBwcm9taXNlID0gYXBpLnJlc291cmNlQWN0aW9uKHtcbiAgICAgIGFjdGlvbk5hbWU6ICdsaXN0JywgcmVzb3VyY2VJZCwgcGFyYW1zOiBxdWVyeSxcbiAgICB9KSBhcyBQcm9taXNlPEF4aW9zUmVzcG9uc2U8TGlzdEFjdGlvblJlc3BvbnNlPj5cblxuICAgIHByb21pc2UudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGNvbnN0IGxpc3RBY3Rpb25SZXNwb25zZSA9IHJlc3BvbnNlLmRhdGEgYXMgTGlzdEFjdGlvblJlc3BvbnNlXG4gICAgICBpZiAobGlzdEFjdGlvblJlc3BvbnNlLm5vdGljZSkge1xuICAgICAgICBvbk5vdGljZShsaXN0QWN0aW9uUmVzcG9uc2Uubm90aWNlKVxuICAgICAgfVxuICAgICAgaWYgKGxpc3RBY3Rpb25SZXNwb25zZS5yZWRpcmVjdFVybCkge1xuICAgICAgICBoaXN0b3J5LnB1c2gobGlzdEFjdGlvblJlc3BvbnNlLnJlZGlyZWN0VXJsKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgc2V0UmVjb3JkcyhsaXN0QWN0aW9uUmVzcG9uc2UucmVjb3JkcylcbiAgICAgIHNldFBhZ2UobGlzdEFjdGlvblJlc3BvbnNlLm1ldGEucGFnZSlcbiAgICAgIHNldFBlclBhZ2UobGlzdEFjdGlvblJlc3BvbnNlLm1ldGEucGVyUGFnZSlcbiAgICAgIHNldFRvdGFsKGxpc3RBY3Rpb25SZXNwb25zZS5tZXRhLnRvdGFsKVxuICAgICAgc2V0RGlyZWN0aW9uKGxpc3RBY3Rpb25SZXNwb25zZS5tZXRhLmRpcmVjdGlvbilcbiAgICAgIHNldFNvcnRCeShsaXN0QWN0aW9uUmVzcG9uc2UubWV0YS5zb3J0QnkpXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgIGFkZE5vdGljZSh7XG4gICAgICAgIG1lc3NhZ2U6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2Vycm9yRmV0Y2hpbmdSZWNvcmRzJywgcmVzb3VyY2VJZCksXG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICB9KVxuICAgIH0pXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGhhc0ZvcmNlUmVmcmVzaChsb2NhdGlvbi5zZWFyY2gpKSB7XG4gICAgICBoaXN0b3J5LnJlcGxhY2UoW1xuICAgICAgICBsb2NhdGlvbi5wYXRobmFtZSwgcmVtb3ZlRm9yY2VSZWZyZXNoKGxvY2F0aW9uLnNlYXJjaCkudG9TdHJpbmcoKSxcbiAgICAgIF0uam9pbignPycpKVxuICAgIH0gZWxzZSB7XG4gICAgICBmZXRjaERhdGEoKVxuICAgIH1cbiAgfSwgW3Jlc291cmNlSWQsIGxvY2F0aW9uLnNlYXJjaF0pXG5cbiAgcmV0dXJuIHtcbiAgICByZWNvcmRzLFxuICAgIGxvYWRpbmcsXG4gICAgcGFnZSxcbiAgICB0b3RhbCxcbiAgICBkaXJlY3Rpb24sXG4gICAgc29ydEJ5LFxuICAgIHBlclBhZ2UsXG4gICAgZmV0Y2hEYXRhLFxuICB9XG59XG5cbmV4cG9ydCB7XG4gIHVzZVJlY29yZHMgYXMgZGVmYXVsdCxcbiAgdXNlUmVjb3Jkcyxcbn1cbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IFVzZVNlbGVjdGVkUmVjb3Jkc1Jlc3VsdCB9IGZyb20gJy4vdXNlLXNlbGVjdGVkLXJlY29yZHMtcmVzdWx0LnR5cGUnXG5cbi8qKlxuICogQGxvYWQgLi91c2Utc2VsZWN0ZWQtcmVjb3Jkcy5kb2MubWRcbiAqIEBzdWJjYXRlZ29yeSBIb29rc1xuICogQGNsYXNzXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5PFJlY29yZEpTT04+fSByZWNvcmRzICAgICBMaXN0IG9mIHJlY29yZHMgb24gd2hpY2ggeW91IGNhbiBwZXJmb3JtIGBzZWxlY3RgIGFjdGlvblxuICogQHJldHVybiB7VXNlU2VsZWN0ZWRSZWNvcmRzUmVzdWx0fVxuICogQG5ldyBJbiB2ZXJzaW9uIDMuM1xuICogQGJ1bmRsZVxuICogQHR5cGUge0Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiB1c2VTZWxlY3RlZFJlY29yZHMocmVjb3JkczogQXJyYXk8UmVjb3JkSlNPTj4pOiBVc2VTZWxlY3RlZFJlY29yZHNSZXN1bHQge1xuICBjb25zdCBbc2VsZWN0ZWRSZWNvcmRzLCBzZXRTZWxlY3RlZFJlY29yZHNdID0gdXNlU3RhdGU8QXJyYXk8UmVjb3JkSlNPTj4+KFtdKVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9IChyZWNvcmQ6IFJlY29yZEpTT04pOiB2b2lkID0+IHtcbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRSZWNvcmRzLmZpbmRJbmRleChzZWxlY3RlZCA9PiBzZWxlY3RlZC5pZCA9PT0gcmVjb3JkLmlkKVxuICAgIGlmIChzZWxlY3RlZEluZGV4IDwgMCkge1xuICAgICAgc2V0U2VsZWN0ZWRSZWNvcmRzKFsuLi5zZWxlY3RlZFJlY29yZHMsIHJlY29yZF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkUmVjb3JkcyA9IFsuLi5zZWxlY3RlZFJlY29yZHNdXG4gICAgICBuZXdTZWxlY3RlZFJlY29yZHMuc3BsaWNlKHNlbGVjdGVkSW5kZXgsIDEpXG4gICAgICBzZXRTZWxlY3RlZFJlY29yZHMobmV3U2VsZWN0ZWRSZWNvcmRzKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdEFsbCA9ICgpOiB2b2lkID0+IHtcbiAgICBjb25zdCBtaXNzaW5nID0gcmVjb3Jkcy5maWx0ZXIocmVjb3JkID0+IChcbiAgICAgICFzZWxlY3RlZFJlY29yZHMuZmluZChzZWxlY3RlZCA9PiBzZWxlY3RlZC5pZCA9PT0gcmVjb3JkLmlkKVxuICAgICAgJiYgcmVjb3JkLmJ1bGtBY3Rpb25zLmxlbmd0aFxuICAgICkpXG4gICAgaWYgKG1pc3NpbmcubGVuZ3RoKSB7XG4gICAgICBzZXRTZWxlY3RlZFJlY29yZHMoWy4uLnNlbGVjdGVkUmVjb3JkcywgLi4ubWlzc2luZ10pXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld1NlbGVjdGVkUmVjb3JkcyA9IHNlbGVjdGVkUmVjb3Jkcy5maWx0ZXIoc2VsZWN0ZWQgPT4gKFxuICAgICAgICAhcmVjb3Jkcy5maW5kKHJlY29yZCA9PiByZWNvcmQuaWQgPT09IHNlbGVjdGVkLmlkKVxuICAgICAgKSlcbiAgICAgIHNldFNlbGVjdGVkUmVjb3JkcyhuZXdTZWxlY3RlZFJlY29yZHMpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoYW5kbGVTZWxlY3QsXG4gICAgaGFuZGxlU2VsZWN0QWxsLFxuICAgIHNlbGVjdGVkUmVjb3JkcyxcbiAgICBzZXRTZWxlY3RlZFJlY29yZHMsXG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgdXNlU2VsZWN0ZWRSZWNvcmRzIGFzIGRlZmF1bHQsXG4gIHVzZVNlbGVjdGVkUmVjb3Jkcyxcbn1cbiIsImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3Jlc291cmNlLWpzb24uaW50ZXJmYWNlJ1xuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xuXG4vKipcbiAqIEBsb2FkIC4vdXNlLXJlc291cmNlLmRvYy5tZFxuICogQHN1YmNhdGVnb3J5IEhvb2tzXG4gKiBAY2xhc3NcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqIEBuZXcgaW4gdmVyc2lvbiAzLjNcbiAqIEBidW5kbGVcbiAqIEBwYXJhbSB7c3RyaW5nfSByZXNvdXJjZUlkICAgIElkIG9mIGEgcmVzb3VyY2UgeW91IHdhbnQgdG8gZ2V0XG4gKi9cbmNvbnN0IHVzZVJlc291cmNlID0gKHJlc291cmNlSWQ6IHN0cmluZyk6IFJlc291cmNlSlNPTiB8IHVuZGVmaW5lZCA9PiB7XG4gIGNvbnN0IHJlc291cmNlcyA9IHVzZVNlbGVjdG9yKChzdGF0ZTogUmVkdXhTdGF0ZSkgPT4gc3RhdGUucmVzb3VyY2VzKVxuXG4gIGNvbnN0IGZvdW5kUmVzb3VyY2UgPSByZXNvdXJjZXMuZmluZChyZXNvdXJjZSA9PiByZXNvdXJjZS5pZCA9PT0gcmVzb3VyY2VJZClcblxuICByZXR1cm4gZm91bmRSZXNvdXJjZVxufVxuXG5leHBvcnQge1xuICB1c2VSZXNvdXJjZSBhcyBkZWZhdWx0LFxuICB1c2VSZXNvdXJjZSxcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlLXRyYW5zbGF0aW9uJ1xuaW1wb3J0IHsgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCBhbGxvd092ZXJyaWRlIGZyb20gJy4uLy4uLy4uL2hvYy9hbGxvdy1vdmVycmlkZSdcbmltcG9ydCB7IHVzZU5hdmlnYXRpb25SZXNvdXJjZXMgfSBmcm9tICcuLi8uLi8uLi9ob29rcydcblxuLyoqXG4gKiBAYWxpYXMgU2lkZWJhclJlc291cmNlU2VjdGlvblByb3BzXG4gKiBAbWVtYmVyb2YgU2lkZWJhclJlc291cmNlU2VjdGlvblxuICovXG5leHBvcnQgdHlwZSBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uUHJvcHMgPSB7XG4gIC8qKiBMaXN0IG9mIHRoZSByZXNvdXJjZXMgd2hpY2ggc2hvdWxkIGJlIHJlbmRlcmVkICovXG4gIHJlc291cmNlczogQXJyYXk8UmVzb3VyY2VKU09OPjtcbn1cblxuLyoqXG4gKiBHcm91cHMgcmVzb3VyY2VzIGJ5IHNlY3Rpb25zIGFuZCByZW5kZXJzIHRoZSBsaXN0IGluIHtAbGluayBTaWRlYmFyfVxuICpcbiAqICMjIyBVc2FnZVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgU2lkZWJhclJlc291cmNlU2VjdGlvbiB9IGZyb20gJ2FkbWluLWJyb2BcbiAqIGBgYFxuICpcbiAqIEBjb21wb25lbnRcbiAqIEBzdWJjYXRlZ29yeSBBcHBsaWNhdGlvblxuICogQG5hbWUgU2lkZWJhclJlc291cmNlU2VjdGlvblxuICovXG5jb25zdCBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uT3JpZ2luYWw6IEZDPFNpZGViYXJSZXNvdXJjZVNlY3Rpb25Qcm9wcz4gPSAoeyByZXNvdXJjZXMgfSkgPT4ge1xuICBjb25zdCBlbGVtZW50cyA9IHVzZU5hdmlnYXRpb25SZXNvdXJjZXMocmVzb3VyY2VzKVxuXG4gIGNvbnN0IHsgdHJhbnNsYXRlTGFiZWwgfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICByZXR1cm4gKFxuICAgIDxOYXZpZ2F0aW9uXG4gICAgICBsYWJlbD17dHJhbnNsYXRlTGFiZWwoJ25hdmlnYXRpb24nKX1cbiAgICAgIGVsZW1lbnRzPXtlbGVtZW50c31cbiAgICAvPlxuICApXG59XG5cbi8vIFJvbGx1cCBjYW5ub3QgaGFuZGxlIHR5cGUgZXhwb3J0cyB3ZWxsIC0gdGhhdCBpcyB3aHkgd2UgbmVlZCB0byBkbyB0aGlzIGhhY2sgd2l0aFxuLy8gZXhwb3J0aW5nIGRlZmF1bHQgYW5kIG5hbWVkIFNpZGViYXJSZXNvdXJjZVNlY3Rpb25cbmNvbnN0IFNpZGViYXJSZXNvdXJjZVNlY3Rpb24gPSBhbGxvd092ZXJyaWRlKFNpZGViYXJSZXNvdXJjZVNlY3Rpb25PcmlnaW5hbCwgJ1NpZGViYXJSZXNvdXJjZVNlY3Rpb24nKVxuXG5leHBvcnQgeyBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uIH1cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJSZXNvdXJjZVNlY3Rpb25cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQm94LCBjc3NDbGFzcywgdGhlbWVHZXQgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEJyYW5kaW5nT3B0aW9ucyB9IGZyb20gJ3NyYy9hZG1pbi1icm8tb3B0aW9ucy5pbnRlcmZhY2UnXG5pbXBvcnQgeyBSZXNvdXJjZUpTT04sIFBhZ2VKU09OIH0gZnJvbSAnc3JjL2Zyb250ZW5kL2ludGVyZmFjZXMnXG5pbXBvcnQgU2lkZWJhckJyYW5kaW5nIGZyb20gJy4vc2lkZWJhci1icmFuZGluZydcbmltcG9ydCBTaWRlYmFyUGFnZXMgZnJvbSAnLi9zaWRlYmFyLXBhZ2VzJ1xuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IFNpZGViYXJGb290ZXIgZnJvbSAnLi9zaWRlYmFyLWZvb3RlcidcblxuaW1wb3J0IFNpZGViYXJSZXNvdXJjZVNlY3Rpb24gZnJvbSAnLi9zaWRlYmFyLXJlc291cmNlLXNlY3Rpb24nXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcbn1cblxuY29uc3QgU3R5bGVkU2lkZWJhciA9IHN0eWxlZChCb3gpYFxuICB0cmFuc2l0aW9uOiBsZWZ0IDAuM3M7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICAmLmhpZGRlbiB7XG4gICAgbGVmdDogLSR7dGhlbWVHZXQoJ3NpemVzJywgJ3NpZGViYXJXaWR0aCcpfTtcbiAgfVxuICAmLnZpc2libGUge1xuICAgIGxlZnQ6IDA7XG4gIH1cbmBcblxuU3R5bGVkU2lkZWJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIHBvc2l0aW9uOiBbJ2Fic29sdXRlJywgJ2Fic29sdXRlJywgJ2Fic29sdXRlJywgJ2Fic29sdXRlJywgJ2luaGVyaXQnXSxcbiAgd2lkdGg6ICdzaWRlYmFyV2lkdGgnLFxuICBib3JkZXJSaWdodDogJ2RlZmF1bHQnLFxuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICB6SW5kZXg6IDUwLFxuICBiZzogJ3doaXRlJyxcbn1cblxuY29uc3QgU2lkZWJhcjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaXNWaXNpYmxlIH0gPSBwcm9wc1xuICBjb25zdCBbYnJhbmRpbmcsIHJlc291cmNlcywgcGFnZXNdOiBbQnJhbmRpbmdPcHRpb25zLCBSZXNvdXJjZUpTT05bXSwgUGFnZUpTT05bXV0gPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGU6IFJlZHV4U3RhdGUpID0+IFtcbiAgICAgIHN0YXRlLmJyYW5kaW5nLCBzdGF0ZS5yZXNvdXJjZXMsIHN0YXRlLnBhZ2VzLFxuICAgIF0sXG4gIClcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRTaWRlYmFyXG4gICAgICBjbGFzc05hbWU9e2lzVmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nfVxuICAgID5cbiAgICAgIDxTaWRlYmFyQnJhbmRpbmcgYnJhbmRpbmc9e2JyYW5kaW5nfSAvPlxuICAgICAgPEJveCBmbGV4R3Jvdz17MX0gY2xhc3NOYW1lPXtjc3NDbGFzcygnUmVzb3VyY2VzJyl9PlxuICAgICAgICA8U2lkZWJhclJlc291cmNlU2VjdGlvbiByZXNvdXJjZXM9e3Jlc291cmNlc30gLz5cbiAgICAgIDwvQm94PlxuICAgICAgPFNpZGViYXJQYWdlcyBwYWdlcz17cGFnZXN9IC8+XG4gICAgICB7YnJhbmRpbmc/LnNvZnR3YXJlQnJvdGhlcnMgJiYgPFNpZGViYXJGb290ZXIgLz59XG4gICAgPC9TdHlsZWRTaWRlYmFyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEN1cnJlbnRVc2VyTmF2LCBCb3gsIEN1cnJlbnRVc2VyTmF2UHJvcHMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEN1cnJlbnRBZG1pbiB9IGZyb20gJy4uLy4uLy4uL2N1cnJlbnQtYWRtaW4uaW50ZXJmYWNlJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9ob29rcydcbmltcG9ydCBhbGxvd092ZXJyaWRlIGZyb20gJy4uLy4uL2hvYy9hbGxvdy1vdmVycmlkZSdcblxuZXhwb3J0IHR5cGUgTG9nZ2VkSW5Qcm9wcyA9IHtcbiAgc2Vzc2lvbjogQ3VycmVudEFkbWluO1xuICBwYXRoczoge1xuICAgIGxvZ291dFBhdGg6IHN0cmluZztcbiAgfTtcbn1cblxuY29uc3QgTG9nZ2VkSW46IFJlYWN0LkZDPExvZ2dlZEluUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc2Vzc2lvbiwgcGF0aHMgfSA9IHByb3BzXG4gIGNvbnN0IHsgdHJhbnNsYXRlQnV0dG9uIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgY29uc3QgZHJvcEFjdGlvbnM6IEN1cnJlbnRVc2VyTmF2UHJvcHNbJ2Ryb3BBY3Rpb25zJ10gPSBbe1xuICAgIGxhYmVsOiB0cmFuc2xhdGVCdXR0b24oJ2xvZ291dCcpLFxuICAgIG9uQ2xpY2s6IChldmVudDogRXZlbnQpOiB2b2lkID0+IHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aHMubG9nb3V0UGF0aFxuICAgIH0sXG4gICAgaWNvbjogJ0xvZ291dCcsXG4gIH1dXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4U2hyaW5rPXswfT5cbiAgICAgIDxDdXJyZW50VXNlck5hdlxuICAgICAgICBuYW1lPXtzZXNzaW9uLmVtYWlsfVxuICAgICAgICB0aXRsZT17c2Vzc2lvbi50aXRsZX1cbiAgICAgICAgYXZhdGFyVXJsPXtzZXNzaW9uLmF2YXRhclVybH1cbiAgICAgICAgZHJvcEFjdGlvbnM9e2Ryb3BBY3Rpb25zfVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5jb25zdCBPdmVycmlkYWJsZUxvZ2dlZEluID0gYWxsb3dPdmVycmlkZShMb2dnZWRJbiwgJ0xvZ2dlZEluJylcblxuZXhwb3J0IHtcbiAgT3ZlcnJpZGFibGVMb2dnZWRJbiBhcyBkZWZhdWx0LFxuICBPdmVycmlkYWJsZUxvZ2dlZEluIGFzIExvZ2dlZEluLFxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGNzc0NsYXNzLCBUZXh0LCBCb3ggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IFZlcnNpb25Qcm9wcyB9IGZyb20gJy4uLy4uLy4uL2FkbWluLWJyby1vcHRpb25zLmludGVyZmFjZSdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5cbmV4cG9ydCB0eXBlIFByb3BzID0ge1xuICB2ZXJzaW9uczogVmVyc2lvblByb3BzO1xufVxuXG5jb25zdCBWZXJzaW9uSXRlbSA9IHN0eWxlZChUZXh0KWBcbiAgcGFkZGluZzogMTJweCAyNHB4IDEycHggMDtcbmBcblxuVmVyc2lvbkl0ZW0uZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5OiBbJ25vbmUnLCAnYmxvY2snXSxcbiAgY29sb3I6ICdncmV5MTAwJyxcbn1cblxuZXhwb3J0IGNvbnN0IFZlcnNpb246IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHZlcnNpb25zIH0gPSBwcm9wc1xuICBjb25zdCB7IGFkbWluLCBhcHAgfSA9IHZlcnNpb25zXG5cbiAgY29uc3QgeyB0cmFuc2xhdGVMYWJlbCB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIHJldHVybiAoXG4gICAgPEJveCBmbGV4IGZsZXhHcm93PXsxfSBweT1cImRlZmF1bHRcIiBweD1cInh4bFwiIGNsYXNzTmFtZT17Y3NzQ2xhc3MoJ1ZlcnNpb24nKX0+XG4gICAgICB7YWRtaW4gJiYgKFxuICAgICAgICA8VmVyc2lvbkl0ZW0+XG4gICAgICAgICAge3RyYW5zbGF0ZUxhYmVsKCdhZG1pblZlcnNpb24nLCB7IHZlcnNpb246IGFkbWluIH0pfVxuICAgICAgICA8L1ZlcnNpb25JdGVtPlxuICAgICAgKX1cbiAgICAgIHthcHAgJiYgKFxuICAgICAgICA8VmVyc2lvbkl0ZW0+XG4gICAgICAgICAge3RyYW5zbGF0ZUxhYmVsKCdhcHBWZXJzaW9uJywgeyB2ZXJzaW9uOiBhcHAgfSl9XG4gICAgICAgIDwvVmVyc2lvbkl0ZW0+XG4gICAgICApfVxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlcnNpb25cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgY3NzQ2xhc3MsIEJveCwgSWNvbiwgdGhlbWVHZXQgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBMb2dnZWRJbiBmcm9tICcuL2xvZ2dlZC1pbidcbmltcG9ydCBWZXJzaW9uIGZyb20gJy4vdmVyc2lvbidcblxuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xuXG5cbmNvbnN0IE5hdkJhciA9IHN0eWxlZChCb3gpYFxuICBoZWlnaHQ6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5zaXplcy5uYXZiYXJIZWlnaHR9O1xuICBib3JkZXItYm90dG9tOiAke3RoZW1lR2V0KCdib3JkZXJzJywgJ2RlZmF1bHQnKX07XG4gIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXNocmluazogMDtcbmBcblxuTmF2QmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiBjc3NDbGFzcygnTmF2QmFyJyksXG59XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHRvZ2dsZVNpZGViYXI6IChhbnkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjb25zdCBUb3BCYXI6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHRvZ2dsZVNpZGViYXIgfSA9IHByb3BzXG4gIGNvbnN0IFtzZXNzaW9uLCBwYXRocywgdmVyc2lvbnNdID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBSZWR1eFN0YXRlKSA9PiBbc3RhdGUuc2Vzc2lvbiwgc3RhdGUucGF0aHMsIHN0YXRlLnZlcnNpb25zXSxcbiAgKVxuICByZXR1cm4gKFxuICAgIDxOYXZCYXI+XG4gICAgICA8Qm94XG4gICAgICAgIHB5PVwibGdcIlxuICAgICAgICBweD17WydkZWZhdWx0JywgJ2xnJ119XG4gICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNpZGViYXJ9XG4gICAgICAgIGRpc3BsYXk9e1snYmxvY2snLCAnYmxvY2snLCAnYmxvY2snLCAnYmxvY2snLCAnbm9uZSddfVxuICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgPlxuICAgICAgICA8SWNvbiBpY29uPVwiTWVudVwiIHNpemU9ezMyfSBjb2xvcj1cImdyZXkxMDBcIiAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8VmVyc2lvbiB2ZXJzaW9ucz17dmVyc2lvbnN9IC8+XG4gICAgICB7c2Vzc2lvbiAmJiBzZXNzaW9uLmVtYWlsID8gPExvZ2dlZEluIHNlc3Npb249e3Nlc3Npb259IHBhdGhzPXtwYXRoc30gLz4gOiAnJ31cbiAgICA8L05hdkJhcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb3BCYXJcbiIsImV4cG9ydCBjb25zdCBEUk9QX05PVElDRSA9ICdEUk9QX05PVElDRSdcblxuZXhwb3J0IHR5cGUgRHJvcE5vdGljZVJlc3BvbnNlID0ge1xuICB0eXBlOiB0eXBlb2YgRFJPUF9OT1RJQ0U7XG4gIGRhdGE6IHtcbiAgICBub3RpY2VJZDogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZHJvcE5vdGljZSA9IChub3RpY2VJZDogc3RyaW5nKTogRHJvcE5vdGljZVJlc3BvbnNlID0+ICh7XG4gIHR5cGU6ICdEUk9QX05PVElDRScsXG4gIGRhdGE6IHsgbm90aWNlSWQgfSxcbn0pXG4iLCJcbmV4cG9ydCBjb25zdCBTRVRfTk9USUNFX1BST0dSRVNTID0gJ1NFVF9OT1RJQ0VfUFJPR1JFU1MnXG5cbmV4cG9ydCB0eXBlIFNldE5vdGljZVByb2dyZXNzID0ge1xuICBub3RpY2VJZDogc3RyaW5nO1xuICBwcm9ncmVzczogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBTZXROb3RpY2VQcm9ncmVzc1Jlc3BvbnNlID0ge1xuICB0eXBlOiB0eXBlb2YgU0VUX05PVElDRV9QUk9HUkVTUztcbiAgZGF0YTogU2V0Tm90aWNlUHJvZ3Jlc3M7XG59XG5cbmV4cG9ydCBjb25zdCBzZXROb3RpY2VQcm9ncmVzcyA9IChkYXRhOiBTZXROb3RpY2VQcm9ncmVzcyk6IFNldE5vdGljZVByb2dyZXNzUmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogU0VUX05PVElDRV9QUk9HUkVTUyxcbiAgZGF0YSxcbn0pXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBNZXNzYWdlQm94IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBOb3RpY2VNZXNzYWdlSW5TdGF0ZSwgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IHsgZHJvcE5vdGljZSB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvZHJvcC1ub3RpY2UnXG5pbXBvcnQgeyBzZXROb3RpY2VQcm9ncmVzcyB9IGZyb20gJy4uLy4uL3N0b3JlL2FjdGlvbnMvc2V0LW5vdGljZS1wcm9ncmVzcydcblxuY29uc3QgVElNRV9UT19ESVNBUFBFQVIgPSAzXG5cbmV4cG9ydCB0eXBlIE5vdGlmeVByb2dyZXNzID0gKG9wdGlvbnM6IHtcbiAgbm90aWNlSWQ6IHN0cmluZzsgcHJvZ3Jlc3M6IG51bWJlcjtcbn0pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTm90aWNlRWxlbWVudFByb3BzID0ge1xuICBub3RpY2U6IE5vdGljZU1lc3NhZ2VJblN0YXRlO1xuICBkcm9wOiAoKSA9PiBhbnk7XG4gIG5vdGlmeVByb2dyZXNzOiBOb3RpZnlQcm9ncmVzcztcbn1cblxuZXhwb3J0IHR5cGUgTm90aWNlRWxlbWVudFN0YXRlID0ge1xuICBwcm9ncmVzczogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTm90aWNlRWxlbWVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxOb3RpY2VFbGVtZW50UHJvcHMsIE5vdGljZUVsZW1lbnRTdGF0ZT4ge1xuICBwcml2YXRlIHRpbWVyOiBOb2RlSlMuVGltZW91dCB8IG51bGxcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGNvbnN0IHsgbm90aWNlIH0gPSBwcm9wc1xuICAgIHRoaXMudGltZXIgPSBudWxsXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHByb2dyZXNzOiBub3RpY2UucHJvZ3Jlc3MgfHwgMCxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGRyb3AsIG5vdGljZSwgbm90aWZ5UHJvZ3Jlc3MgfSA9IHRoaXMucHJvcHNcblxuICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKChzdGF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHN0YXRlLnByb2dyZXNzICsgMTAwIC8gVElNRV9UT19ESVNBUFBFQVJcbiAgICAgICAgbm90aWZ5UHJvZ3Jlc3MoeyBub3RpY2VJZDogbm90aWNlLmlkLCBwcm9ncmVzcyB9KVxuICAgICAgICByZXR1cm4geyBwcm9ncmVzcyB9XG4gICAgICB9KVxuICAgIH0sIDEwMDApXG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcilcbiAgICAgIH1cbiAgICAgIGRyb3AoKVxuICAgIH0sIDEwMDAgKiAoVElNRV9UT19ESVNBUFBFQVIgKyAxKSlcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBub3RpY2UsIGRyb3AgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPE1lc3NhZ2VCb3hcbiAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6ICc0ODBweCcgfX1cbiAgICAgICAgbWVzc2FnZT17bm90aWNlLm1lc3NhZ2V9XG4gICAgICAgIHZhcmlhbnQ9e25vdGljZS50eXBlID09PSAnc3VjY2VzcycgPyAnc3VjY2VzcycgOiAnZGFuZ2VyJ31cbiAgICAgICAgb25DbG9zZUNsaWNrPXtkcm9wfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cblxudHlwZSBOb3RpY2VCb3hQcm9wc0Zyb21TdGF0ZSA9IHtcbiAgbm90aWNlczogQXJyYXk8Tm90aWNlTWVzc2FnZUluU3RhdGU+O1xufVxuXG50eXBlIE5vdGljZUJveERpc3BhdGNoRnJvbVN0YXRlID0ge1xuICBkcm9wOiAobm90aWNlSWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgbm90aWZ5UHJvZ3Jlc3M6IE5vdGlmeVByb2dyZXNzO1xufVxuXG5jb25zdCBOb3RpY2VCb3g6IFJlYWN0LkZDPE5vdGljZUJveFByb3BzRnJvbVN0YXRlICYgTm90aWNlQm94RGlzcGF0Y2hGcm9tU3RhdGU+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZHJvcCwgbm90aWNlcywgbm90aWZ5UHJvZ3Jlc3MgfSA9IHByb3BzXG4gIGNvbnN0IG5vdGljZSA9IG5vdGljZXMubGVuZ3RoID8gbm90aWNlc1tub3RpY2VzLmxlbmd0aCAtIDFdIDogbnVsbFxuICBpZiAobm90aWNlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJub3RpY2Utd3JhcHBlclwiPlxuICAgICAgICA8Tm90aWNlRWxlbWVudFxuICAgICAgICAgIGtleT17bm90aWNlLmlkfVxuICAgICAgICAgIG5vdGljZT17bm90aWNlfVxuICAgICAgICAgIGRyb3A9eygpOiB2b2lkID0+IGRyb3Aobm90aWNlLmlkKX1cbiAgICAgICAgICBub3RpZnlQcm9ncmVzcz17bm90aWZ5UHJvZ3Jlc3N9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IC8+XG4gIClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSZWR1eFN0YXRlKTogTm90aWNlQm94UHJvcHNGcm9tU3RhdGUgPT4gKHtcbiAgbm90aWNlczogc3RhdGUubm90aWNlcyxcbn0pXG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKTogTm90aWNlQm94RGlzcGF0Y2hGcm9tU3RhdGUgPT4gKHtcbiAgZHJvcDogKG5vdGljZUlkOiBzdHJpbmcpOiB2b2lkID0+IGRpc3BhdGNoKGRyb3BOb3RpY2Uobm90aWNlSWQpKSxcbiAgbm90aWZ5UHJvZ3Jlc3M6ICh7XG4gICAgbm90aWNlSWQsIHByb2dyZXNzLFxuICB9KTogdm9pZCA9PiBkaXNwYXRjaChzZXROb3RpY2VQcm9ncmVzcyh7IG5vdGljZUlkLCBwcm9ncmVzcyB9KSksXG59KVxuXG5jb25zdCBDb25uZWN0ZWROb3RpY2VCb3ggPSBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoTm90aWNlQm94KVxuXG5leHBvcnQge1xuICBDb25uZWN0ZWROb3RpY2VCb3ggYXMgZGVmYXVsdCxcbiAgQ29ubmVjdGVkTm90aWNlQm94IGFzIE5vdGljZUJveCxcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQge1xuICBCb3gsXG4gIEgyLFxuICBINSxcbiAgSDQsXG4gIFRleHQsXG4gIElsbHVzdHJhdGlvbixcbiAgSWxsdXN0cmF0aW9uUHJvcHMsXG4gIEJ1dHRvbixcbn0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuXG5jb25zdCBwYWdlSGVhZGVySGVpZ2h0ID0gMjg0XG5jb25zdCBwYWdlSGVhZGVyUGFkZGluZ1kgPSA3NFxuY29uc3QgcGFnZUhlYWRlclBhZGRpbmdYID0gMjUwXG5cbmV4cG9ydCBjb25zdCBEYXNoYm9hcmRIZWFkZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgcmV0dXJuIChcbiAgICA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiBvdmVyZmxvdz1cImhpZGRlblwiPlxuICAgICAgPEJveFxuICAgICAgICBwb3NpdGlvbj1cImFic29sdXRlXCJcbiAgICAgICAgdG9wPXs1MH1cbiAgICAgICAgbGVmdD17LTEwfVxuICAgICAgICBvcGFjaXR5PXtbMC4yLCAwLjQsIDFdfVxuICAgICAgICBhbmltYXRlXG4gICAgICA+XG4gICAgICAgIDxJbGx1c3RyYXRpb24gdmFyaWFudD1cIlJvY2tldFwiIC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3hcbiAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgIHRvcD17LTcwfVxuICAgICAgICByaWdodD17LTE1fVxuICAgICAgICBvcGFjaXR5PXtbMC4yLCAwLjQsIDFdfVxuICAgICAgICBhbmltYXRlXG4gICAgICA+XG4gICAgICAgIDxJbGx1c3RyYXRpb24gdmFyaWFudD1cIk1vb25cIiAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94XG4gICAgICAgIGJnPVwiZ3JleTEwMFwiXG4gICAgICAgIGhlaWdodD17cGFnZUhlYWRlckhlaWdodH1cbiAgICAgICAgcHk9e3BhZ2VIZWFkZXJQYWRkaW5nWX1cbiAgICAgICAgcHg9e1snZGVmYXVsdCcsICdsZycsIHBhZ2VIZWFkZXJQYWRkaW5nWF19XG4gICAgICA+XG4gICAgICAgIDxUZXh0IHRleHRBbGlnbj1cImNlbnRlclwiIGNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAgICA8SDI+e3RyYW5zbGF0ZU1lc3NhZ2UoJ3dlbGNvbWVPbkJvYXJkX3RpdGxlJyl9PC9IMj5cbiAgICAgICAgICA8VGV4dCBvcGFjaXR5PXswLjh9PlxuICAgICAgICAgICAge3RyYW5zbGF0ZU1lc3NhZ2UoJ3dlbGNvbWVPbkJvYXJkX3N1YnRpdGxlJyl9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L1RleHQ+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG50eXBlIEJveFR5cGUgPSB7XG4gIHZhcmlhbnQ6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgc3VidGl0bGU6IHN0cmluZztcbiAgaHJlZjogc3RyaW5nO1xufVxuXG5jb25zdCBib3hlcyA9ICh7IHRyYW5zbGF0ZU1lc3NhZ2UgfSk6IEFycmF5PEJveFR5cGU+ID0+IFt7XG4gIHZhcmlhbnQ6ICdQbGFuZXQnLFxuICB0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgnYWRkaW5nUmVzb3VyY2VzX3RpdGxlJyksXG4gIHN1YnRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdhZGRpbmdSZXNvdXJjZXNfc3VidGl0bGUnKSxcbiAgaHJlZjogJ2h0dHBzOi8vYWRtaW5icm8uY29tL3R1dG9yaWFsLXBhc3NpbmctcmVzb3VyY2VzLmh0bWwnLFxufSwge1xuICB2YXJpYW50OiAnRG9jdW1lbnRDaGVjaycsXG4gIHRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdjdXN0b21pemVSZXNvdXJjZXNfdGl0bGUnKSxcbiAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2N1c3RvbWl6ZVJlc291cmNlc19zdWJ0aXRsZScpLFxuICBocmVmOiAnaHR0cHM6Ly9hZG1pbmJyby5jb20vdHV0b3JpYWwtY3VzdG9taXppbmctcmVzb3VyY2VzLmh0bWwnLFxufSwge1xuICB2YXJpYW50OiAnRG9jdW1lbnRTZWFyY2gnLFxuICB0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgnY3VzdG9taXplQWN0aW9uc190aXRsZScpLFxuICBzdWJ0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgnY3VzdG9taXplQWN0aW9uc19zdWJ0aXRsZScpLFxuICBocmVmOiAnaHR0cHM6Ly9hZG1pbmJyby5jb20vdHV0b3JpYWwtYWN0aW9ucy5odG1sJyxcbn0sIHtcbiAgdmFyaWFudDogJ0ZsYWdJbkNvZycsXG4gIHRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCd3cml0ZU93bkNvbXBvbmVudHNfdGl0bGUnKSxcbiAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ3dyaXRlT3duQ29tcG9uZW50c19zdWJ0aXRsZScpLFxuICBocmVmOiAnaHR0cHM6Ly9hZG1pbmJyby5jb20vdHV0b3JpYWwtd3JpdGluZy1yZWFjdC1jb21wb25lbnRzLmh0bWwnLFxufSwge1xuICB2YXJpYW50OiAnRm9sZGVycycsXG4gIHRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdjdXN0b21EYXNoYm9hcmRfdGl0bGUnKSxcbiAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2N1c3RvbURhc2hib2FyZF9zdWJ0aXRsZScpLFxuICBocmVmOiAnaHR0cHM6Ly9hZG1pbmJyby5jb20vdHV0b3JpYWwtY3VzdG9tLWRhc2hib2FyZC5odG1sJyxcbn0sIHtcbiAgdmFyaWFudDogJ0FzdHJvbmF1dCcsXG4gIHRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdyb2xlQmFzZWRBY2Nlc3NfdGl0bGUnKSxcbiAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ3JvbGVCYXNlZEFjY2Vzc19zdWJ0aXRsZScpLFxuICBocmVmOiAnaHR0cHM6Ly9hZG1pbmJyby5jb20vdHV0b3JpYWwtcmJhYy5odG1sJyxcbn1dXG5cbmNvbnN0IENhcmQgPSBzdHlsZWQoQm94KWBcbiAgZGlzcGxheTogJHsoeyBmbGV4IH0pOiBzdHJpbmcgPT4gKGZsZXggPyAnZmxleCcgOiAnYmxvY2snKX07XG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuY29sb3JzLmdyZXkxMDB9O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAmOmhvdmVyIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuY29sb3JzLnByaW1hcnkxMDB9O1xuICAgIGJveC1zaGFkb3c6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5zaGFkb3dzLmNhcmRIb3Zlcn07XG4gIH1cbmBcblxuQ2FyZC5kZWZhdWx0UHJvcHMgPSB7XG4gIHZhcmlhbnQ6ICd3aGl0ZScsXG4gIGJveFNoYWRvdzogJ2NhcmQnLFxufVxuXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyB0cmFuc2xhdGVNZXNzYWdlLCB0cmFuc2xhdGVCdXR0b24gfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgcmV0dXJuIChcbiAgICA8Qm94PlxuICAgICAgPERhc2hib2FyZEhlYWRlciAvPlxuICAgICAgPEJveFxuICAgICAgICBtdD17Wyd4bCcsICd4bCcsICctMTAwcHgnXX1cbiAgICAgICAgbWI9XCJ4bFwiXG4gICAgICAgIG14PXtbMCwgMCwgMCwgJ2F1dG8nXX1cbiAgICAgICAgcHg9e1snZGVmYXVsdCcsICdsZycsICd4eGwnLCAnMCddfVxuICAgICAgICBwb3NpdGlvbj1cInJlbGF0aXZlXCJcbiAgICAgICAgZmxleFxuICAgICAgICBmbGV4RGlyZWN0aW9uPVwicm93XCJcbiAgICAgICAgZmxleFdyYXA9XCJ3cmFwXCJcbiAgICAgICAgd2lkdGg9e1sxLCAxLCAxLCAxMDI0XX1cbiAgICAgID5cbiAgICAgICAge2JveGVzKHsgdHJhbnNsYXRlTWVzc2FnZSB9KS5tYXAoKGJveCwgaW5kZXgpID0+IChcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAgPEJveCBrZXk9e2luZGV4fSB3aWR0aD17WzEsIDEgLyAyLCAxIC8gMiwgMSAvIDNdfSBwPVwibGdcIj5cbiAgICAgICAgICAgIDxDYXJkIGFzPVwiYVwiIGhyZWY9e2JveC5ocmVmfT5cbiAgICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPElsbHVzdHJhdGlvblxuICAgICAgICAgICAgICAgICAgdmFyaWFudD17Ym94LnZhcmlhbnQgYXMgSWxsdXN0cmF0aW9uUHJvcHNbJ3ZhcmlhbnQnXX1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezcwfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPEg1IG10PVwibGdcIj57Ym94LnRpdGxlfTwvSDU+XG4gICAgICAgICAgICAgICAgPFRleHQ+e2JveC5zdWJ0aXRsZX08L1RleHQ+XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKSl9XG4gICAgICAgIDxCb3ggd2lkdGg9e1sxLCAxLCAxIC8gMl19IHA9XCJsZ1wiPlxuICAgICAgICAgIDxDYXJkIGFzPVwiYVwiIGZsZXggaHJlZj1cImh0dHBzOi8vam9pbi5zbGFjay5jb20vdC9hZG1pbmJyby9zaGFyZWRfaW52aXRlL3p0LWRqc3F4eHB6LV9ZQ1M4VU10UTlBZGU2RFB1TFI3WndcIj5cbiAgICAgICAgICAgIDxCb3ggZmxleFNocmluaz17MH0+PElsbHVzdHJhdGlvbiB2YXJpYW50PVwiU2xhY2tMb2dvXCIgLz48L0JveD5cbiAgICAgICAgICAgIDxCb3ggbWw9XCJ4bFwiPlxuICAgICAgICAgICAgICA8SDQ+e3RyYW5zbGF0ZU1lc3NhZ2UoJ2NvbW11bml0eV90aXRsZScpfTwvSDQ+XG4gICAgICAgICAgICAgIDxUZXh0Pnt0cmFuc2xhdGVNZXNzYWdlKCdjb21tdW5pdHlfc3VidGl0bGUnKX08L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHdpZHRoPXtbMSwgMSwgMSAvIDJdfSBwPVwibGdcIj5cbiAgICAgICAgICA8Q2FyZCBhcz1cImFcIiBmbGV4IGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vU29mdHdhcmVCcm90aGVycy9hZG1pbi1icm8vaXNzdWVzXCI+XG4gICAgICAgICAgICA8Qm94IGZsZXhTaHJpbms9ezB9PjxJbGx1c3RyYXRpb24gdmFyaWFudD1cIkdpdGh1YkxvZ29cIiAvPjwvQm94PlxuICAgICAgICAgICAgPEJveCBtbD1cInhsXCI+XG4gICAgICAgICAgICAgIDxIND57dHJhbnNsYXRlTWVzc2FnZSgnZm91bmRCdWdfdGl0bGUnKX08L0g0PlxuICAgICAgICAgICAgICA8VGV4dD57dHJhbnNsYXRlTWVzc2FnZSgnZm91bmRCdWdfc3VidGl0bGUnKX08L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IHZhcmlhbnQ9XCJ3aGl0ZVwiIGJveFNoYWRvdz1cImNhcmRcIiB3aWR0aD17MX0gbT1cImxnXCI+XG4gICAgICAgICAgPFRleHQgdGV4dEFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8SWxsdXN0cmF0aW9uIHZhcmlhbnQ9XCJTb2Z0d2FyZUJyb3RoZXJzTG9nb1wiIC8+XG4gICAgICAgICAgICA8SDQ+e3RyYW5zbGF0ZU1lc3NhZ2UoJ25lZWRNb3JlU29sdXRpb25zX3RpdGxlJyl9PC9IND5cbiAgICAgICAgICAgIDxUZXh0Pnt0cmFuc2xhdGVNZXNzYWdlKCduZWVkTW9yZVNvbHV0aW9uc19zdWJ0aXRsZScpfTwvVGV4dD5cbiAgICAgICAgICAgIDxUZXh0IG10PVwieHhsXCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBhcz1cImFcIlxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zb2Z0d2FyZWJyb3RoZXJzLmNvL3NlcnZpY2VzXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHt0cmFuc2xhdGVCdXR0b24oJ2NvbnRhY3RVcycpfVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUZXh0LCBNZXNzYWdlQm94IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuXG50eXBlIFN0YXRlID0ge1xuICBlcnJvcjogYW55O1xufVxuXG5jb25zdCBFcnJvck1lc3NhZ2U6IFJlYWN0LkZDPFN0YXRlPiA9ICh7IGVycm9yIH0pID0+IHtcbiAgY29uc3QgeyB0cmFuc2xhdGVNZXNzYWdlIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIHJldHVybiAoXG4gICAgPE1lc3NhZ2VCb3ggbT1cInh4bFwiIHZhcmlhbnQ9XCJkYW5nZXJcIiBtZXNzYWdlPVwiSmF2YXNjcmlwdCBFcnJvclwiPlxuICAgICAgPFRleHQ+e2Vycm9yLnRvU3RyaW5nKCl9PC9UZXh0PlxuICAgICAgPFRleHQgbXQ9XCJkZWZhdWx0XCI+e3RyYW5zbGF0ZU1lc3NhZ2UoJ3NlZUNvbnNvbGVGb3JNb3JlJyl9PC9UZXh0PlxuICAgIDwvTWVzc2FnZUJveD5cbiAgKVxufVxuXG5leHBvcnQgY2xhc3MgRXJyb3JCb3VuZGFyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxhbnksIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVycm9yOiBudWxsLFxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yIH0pXG4gIH1cblxuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB7IGVycm9yIH0gPSB0aGlzLnN0YXRlXG5cbiAgICBpZiAoZXJyb3IgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiAoPEVycm9yTWVzc2FnZSBlcnJvcj17ZXJyb3J9IC8+KVxuICAgIH1cblxuICAgIHJldHVybiBjaGlsZHJlbiB8fCBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JCb3VuZGFyeVxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IERlZmF1bHREYXNoYm9hcmQgZnJvbSAnLi4vYXBwL2RlZmF1bHQtZGFzaGJvYXJkJ1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi4vYXBwL2Vycm9yLWJvdW5kYXJ5J1xuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xuXG5kZWNsYXJlIGNvbnN0IEFkbWluQnJvOiB7XG4gIFVzZXJDb21wb25lbnRzOiBSZWNvcmQ8c3RyaW5nLCBGdW5jdGlvbkNvbXBvbmVudD47XG59XG5cbnR5cGUgU3RhdGUgPSB7XG4gIGlzQ2xpZW50OiBib29sZWFuO1xufVxuXG50eXBlIFByb3BzRnJvbVN0YXRlID0ge1xuICBkYXNoYm9hcmQ6IHtcbiAgICBjb21wb25lbnQ/OiBzdHJpbmc7XG4gIH07XG59XG5cbmNsYXNzIERhc2hib2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wc0Zyb21TdGF0ZSwgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzRnJvbVN0YXRlKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQ2xpZW50OiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNDbGllbnQ6IHRydWUgfSlcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgZGFzaGJvYXJkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBpc0NsaWVudCB9ID0gdGhpcy5zdGF0ZVxuICAgIGxldCBDb21wb25lbnRcbiAgICBpZiAoZGFzaGJvYXJkICYmIGRhc2hib2FyZC5jb21wb25lbnQgJiYgaXNDbGllbnRcbiAgICAgICAgJiYgQWRtaW5Ccm8uVXNlckNvbXBvbmVudHNbZGFzaGJvYXJkLmNvbXBvbmVudF1cbiAgICApIHtcbiAgICAgIENvbXBvbmVudCA9IEFkbWluQnJvLlVzZXJDb21wb25lbnRzW2Rhc2hib2FyZC5jb21wb25lbnRdIGFzIEZ1bmN0aW9uQ29tcG9uZW50XG4gICAgfSBlbHNlIHtcbiAgICAgIENvbXBvbmVudCA9IERlZmF1bHREYXNoYm9hcmRcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgIDxDb21wb25lbnQgLz5cbiAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSZWR1eFN0YXRlKTogUHJvcHNGcm9tU3RhdGUgPT4gKHtcbiAgZGFzaGJvYXJkOiBzdGF0ZS5kYXNoYm9hcmQsXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoRGFzaGJvYXJkKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9ob29rcydcbmltcG9ydCB7IFJlc291cmNlSlNPTiwgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcblxudHlwZSBBZGROZXdJdGVtQnV0dG9uUHJvcHMgPSB7XG4gIHJlc291cmNlOiBSZXNvdXJjZUpTT047XG4gIHByb3BlcnR5OiBQcm9wZXJ0eUpTT047XG59XG5cbmNvbnN0IEFkZE5ld0l0ZW1CdXR0b246IFJlYWN0LkZDPEFkZE5ld0l0ZW1CdXR0b25Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZSwgcHJvcGVydHkgfSA9IHByb3BzXG4gIGNvbnN0IHsgdHJhbnNsYXRlUHJvcGVydHksIHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCBsYWJlbCA9IHRyYW5zbGF0ZVByb3BlcnR5KFxuICAgIGAke3Byb3BlcnR5LnBhdGh9LmFkZE5ld0l0ZW1gLFxuICAgIHJlc291cmNlLmlkLCB7XG4gICAgICBkZWZhdWx0VmFsdWU6IHRyYW5zbGF0ZUJ1dHRvbignYWRkTmV3SXRlbScsIHJlc291cmNlLmlkKSxcbiAgICB9LFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEljb24gaWNvbj1cIkFkZFwiIC8+XG4gICAgICB7bGFiZWx9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQWRkTmV3SXRlbUJ1dHRvblxuIiwiaW1wb3J0IHsgTGFiZWwsIExhYmVsUHJvcHMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi8uLi8uLi9pbnRlcmZhY2VzJ1xuXG5leHBvcnQgdHlwZSBQcm9wZXJ0eUxhYmVsUHJvcHMgPSB7XG4gIHByb3BlcnR5OiBQcm9wZXJ0eUpTT047XG4gIHByb3BzPzogTGFiZWxQcm9wcztcbn1cblxuY29uc3QgUHJvcGVydHlMYWJlbDogUmVhY3QuRkM8UHJvcGVydHlMYWJlbFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCBwcm9wczogbGFiZWxQcm9wcyB9ID0gcHJvcHNcblxuICBpZiAocHJvcGVydHkuaGlkZUxhYmVsKSB7IHJldHVybiBudWxsIH1cblxuICByZXR1cm4gKFxuICAgIDxMYWJlbFxuICAgICAgaHRtbEZvcj17cHJvcGVydHkucGF0aH1cbiAgICAgIHJlcXVpcmVkPXtwcm9wZXJ0eS5pc1JlcXVpcmVkfVxuICAgICAgey4uLmxhYmVsUHJvcHN9XG4gICAgPlxuICAgICAge3Byb3BlcnR5LmxhYmVsfVxuICAgIDwvTGFiZWw+XG4gIClcbn1cblxuZXhwb3J0IHtcbiAgUHJvcGVydHlMYWJlbCBhcyBkZWZhdWx0LFxuICBQcm9wZXJ0eUxhYmVsLFxufVxuIiwiaW1wb3J0IHsgREVMSU1JVEVSIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZmxhdC9jb25zdGFudHMnXG5pbXBvcnQgeyBQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuXG4vKipcbiAqIENvbnZlcnRzIHByb3BlcnR5OiBQcm9wZXJ0eUpTT04gZnJvbSBhbiBhcnJheSB0byBhIHN1Yi1wcm9wZXJ0eSBmb3IgYW4gYWN0dWFsIGl0ZW0gaW4gdGhlIGFycmF5XG4gKiBJdCBjaGFuZ2UgcGF0aCB0aGF0IGl0IGhhcyBpbmRleCBpbnNpZGUgYWxvbmcgd2l0aCB0aGUgbGFiZWwuIEZ1dGhlcm1vcmUgZmxhdCBpc0FycmF5IGlzIHJlbW92ZWRcbiAqICxiZWNhdXNlIGl0IHdhcyBhbHJlYWR5IGhhbmRsZWQsIHNvIHRoYXQgaXRlbVJlbmRlcmVyIGNhbiByZW5kZXIgcHJvcGVydHkgYXMgYSByZWd1bGFyIG9uZVxuICpcbiAqIEBwYXJhbSB7UHJvcGVydHlKU09OfSAgYXJyYXlQcm9wZXJ0eSBwcm9wZXJ0eSB3aXRoIHBhdGggc2V0IHRvIGFuIHJvb3QgQXJyYXkgdHlwZSBwcm9wZXJ0eSxcbiAqIEBwYXJhbSB7TnVtYmVyfSAgICAgICAgaW5kZXggICAgICAgICBpbmRleCB1bmRlciB3aGljaCBzdWItcHJvcGVydHkgc2hvdWxkIGJlIHBsYWNlZFxuICogQHByaXZhdGVcbiAqIEBoaWRlXG4gKi9cbmV4cG9ydCBjb25zdCBjb252ZXJ0VG9TdWJQcm9wZXJ0eSA9IChhcnJheVByb3BlcnR5OiBQcm9wZXJ0eUpTT04sIGluZGV4OiBudW1iZXIpOiBQcm9wZXJ0eUpTT04gPT4gKFxuICB7XG4gICAgLi4uYXJyYXlQcm9wZXJ0eSxcbiAgICBwYXRoOiBbYXJyYXlQcm9wZXJ0eS5wYXRoLCBpbmRleF0uam9pbihERUxJTUlURVIpLFxuICAgIGxhYmVsOiBgWyR7aW5kZXggKyAxfV1gLFxuICAgIGlzQXJyYXk6IGZhbHNlLFxuICB9XG4pXG4iLCJpbXBvcnQgeyBmbGF0IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcblxuLyoqXG4gKiBSZW1vdmVzIHNlbGVjdGVkIGFycmF5IGl0ZW0gZnJvbSBnaXZlbiByZWNvcmQuIEl0IHBlcmZvcm1zIGZvbGxvd2luZyB0YXNrczpcbiAqIDEuIHJlbW92ZXMgYXJyYXkgaXRlbSBmcm9tIHRoZSBhcnJheVxuICogMi4gcmVvcmRlcnMga2V5cyBpbiBuZXcgYXJyYXkgaXRlbVxuICogMy4gaWYgcHJvcGVydHkgaGFzIHBvcHVsYXRlZCBmaWVsZHMgaXQgYWxzbyByZW9yZGVycyB0aGVtXG4gKiBpdCB1c2VzIHtAbGluayBmbGF0IH0gbW9kdWxlIGFuZCBpdHMgcmVtb3ZlUGF0aCBtZXRob2RcbiAqXG4gKiBAcGFyYW0ge1JlY29yZEpTT059IHJlY29yZFxuICogQHBhcmFtIHtzdHJpbmd9ICAgICBzdWJQcm9wZXJ0eVBhdGggICAgICAgICAgICB3aGljaCBoYXMgdG8gYmUgcmVtb3ZlZC4gSXQgaGFzIHRvIGJlIGZsYXR0ZW5lZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbiBub3RhdGlvbiwgYW5kIGVuZGluZyB3aXRoIGFycmF5IGluZGV4XG4gKiBAcHJpdmF0ZVxuICogQGhpZGVcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZVN1YlByb3BlcnR5ID0gKHJlY29yZDogUmVjb3JkSlNPTiwgc3ViUHJvcGVydHlQYXRoOiBzdHJpbmcpOiBSZWNvcmRKU09OID0+IHtcbiAgLy8gYnkgZGVmYXVsdCBwb3B1bGF0ZWQgaXMgZmxhdHRlbiBqdXN0IHRvIHRoZSBwYXRoIGxldmVsIC0gb2JqZWN0IGl0c2VsZiBpcyBub3QgZmxhdHRlbi4gVGhhdCBpc1xuICAvLyB3aHkgd2UgaGF2ZSB0byByZXRyaWV2ZSB0aGUgb3JpZ2luYWwgc3RhdGUuIFRoYXQgaXMgd2h5IHdlIGhhdmUgdG8gcmVwbGFjZSByZWNvcmQucG9wdWxhdGVkIHRvXG4gIC8vIGZyb20geyAnc29tZS5uZXN0ZWQuMS5rZXknOiBSZWNvcmRKU09OIH0gdG8geyAnc29tZS5uZXN0ZWQuMS5rZXknOiAnc29tZS5uZXN0ZWQuMS5rZXknIH0sXG4gIC8vIHRoZW4gcmVtb3ZlIGtleXMsIGFuZCByZWZpbGwgYmFjayBzb21lLm5lc3RlZC4xLmtleSB0byB0aGUgdmFsdWUgZnJvbSB0aGUgb3JpZ2luYWwgcG9wdWxhdGVkXG4gIC8vIG9iamVjdC5cbiAgY29uc3QgcG9wdWxhdGVkS2V5TWFwOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0gT2JqZWN0LmtleXMocmVjb3JkLnBvcHVsYXRlZCkucmVkdWNlKFxuICAgIChtZW1vLCBwcm9wZXJ0eUtleSkgPT4gKHtcbiAgICAgIC4uLm1lbW8sXG4gICAgICBbcHJvcGVydHlLZXldOiBwcm9wZXJ0eUtleSxcbiAgICB9KSxcbiAgICB7fSxcbiAgKVxuXG4gIGNvbnN0IG5ld1BvcHVsYXRlZEtleU1hcCA9IGZsYXQucmVtb3ZlUGF0aChwb3B1bGF0ZWRLZXlNYXAsIHN1YlByb3BlcnR5UGF0aClcbiAgY29uc3QgbmV3UG9wdWxhdGVkID0gT2JqZWN0LmVudHJpZXMobmV3UG9wdWxhdGVkS2V5TWFwKS5yZWR1Y2UoXG4gICAgKG1lbW8sIFtuZXdQcm9wZXJ0eUtleSwgb2xkUHJvcGVydHlLZXldKSA9PiAoe1xuICAgICAgLi4ubWVtbyxcbiAgICAgIFtuZXdQcm9wZXJ0eUtleV06IG9sZFByb3BlcnR5S2V5ICYmIHJlY29yZC5wb3B1bGF0ZWRbb2xkUHJvcGVydHlLZXk/LnRvU3RyaW5nKCldLFxuICAgIH0pLCB7fSxcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgLi4ucmVjb3JkLFxuICAgIHBhcmFtczogZmxhdC5yZW1vdmVQYXRoKHJlY29yZC5wYXJhbXMsIHN1YlByb3BlcnR5UGF0aCksXG4gICAgcG9wdWxhdGVkOiBuZXdQb3B1bGF0ZWQsXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBNb3VzZUV2ZW50LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uLCBTZWN0aW9uLCBGb3JtR3JvdXAsIEZvcm1NZXNzYWdlLCBJY29uLCBCb3ggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBBZGROZXdJdGVtQnV0dG9uIGZyb20gJy4vYWRkLW5ldy1pdGVtLXRyYW5zbGF0aW9uJ1xuaW1wb3J0IHsgZmxhdCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHNJbkFycmF5IH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IFByb3BlcnR5TGFiZWwgfSBmcm9tICcuLi91dGlscy9wcm9wZXJ0eS1sYWJlbCdcbmltcG9ydCB7IGNvbnZlcnRUb1N1YlByb3BlcnR5IH0gZnJvbSAnLi9jb252ZXJ0LXRvLXN1Yi1wcm9wZXJ0eSdcbmltcG9ydCB7IFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyByZW1vdmVTdWJQcm9wZXJ0eSB9IGZyb20gJy4vcmVtb3ZlLXN1Yi1wcm9wZXJ0eSdcblxudHlwZSBFZGl0UHJvcHMgPSBSZXF1aXJlZDxFZGl0UHJvcGVydHlQcm9wc0luQXJyYXk+XG5cbnR5cGUgSXRlbVJlbmRlcmVyUHJvcHMgPSB7XG4gIG9uRGVsZXRlOiAoZXZlbnQ6IE1vdXNlRXZlbnQsIHByb3BlcnR5OiBQcm9wZXJ0eUpTT04pID0+IGJvb2xlYW47XG59XG5cbmNvbnN0IEl0ZW1SZW5kZXJlcjogUmVhY3QuRkM8RWRpdFByb3BzICYgSXRlbVJlbmRlcmVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgSXRlbUNvbXBvbmVudCwgcHJvcGVydHksIG9uRGVsZXRlIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleCBmbGV4RGlyZWN0aW9uPVwicm93XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIGRhdGEtdGVzdGlkPXtwcm9wZXJ0eS5wYXRofT5cbiAgICAgIDxCb3ggZmxleEdyb3c9ezF9PlxuICAgICAgICA8SXRlbUNvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggZmxleFNocmluaz17MH0gbWw9XCJsZ1wiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgcm91bmRlZFxuICAgICAgICAgIG1sPVwiZGVmYXVsdFwiXG4gICAgICAgICAgZGF0YS10ZXN0aWQ9XCJkZWxldGUtaXRlbVwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgc2l6ZT1cImljb25cIlxuICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCk6IGJvb2xlYW4gPT4gb25EZWxldGUoZXZlbnQsIHByb3BlcnR5KX1cbiAgICAgICAgICB2YXJpYW50PVwiZGFuZ2VyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGljb249XCJUcmFzaENhblwiIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuY29uc3QgSW5wdXRzSW5TZWN0aW9uOiBSZWFjdC5GQzxFZGl0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCwgcmVzb3VyY2UsIG9uQ2hhbmdlIH0gPSBwcm9wc1xuICBjb25zdCBpdGVtcyA9IGZsYXQuZ2V0KHJlY29yZC5wYXJhbXMsIHByb3BlcnR5LnBhdGgpIHx8IFtdXG5cbiAgY29uc3QgYWRkTmV3ID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBNb3VzZUV2ZW50KTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgbmV3SXRlbXMgPSBbXG4gICAgICAuLi5pdGVtcyxcbiAgICAgIHByb3BlcnR5LnN1YlByb3BlcnRpZXMubGVuZ3RoID8ge30gOiAnJyxcbiAgICBdXG4gICAgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgbmV3SXRlbXMpXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIHJldHVybiBmYWxzZVxuICB9LCBbcmVjb3JkLCBvbkNoYW5nZSwgcHJvcGVydHldKVxuXG4gIGNvbnN0IHJlbW92ZUl0ZW0gPSB1c2VDYWxsYmFjaygoZXZlbnQ6IE1vdXNlRXZlbnQsIHN1YlByb3BlcnR5OiBQcm9wZXJ0eUpTT04pOiBib29sZWFuID0+IHtcbiAgICBjb25zdCBuZXdSZWNvcmQgPSByZW1vdmVTdWJQcm9wZXJ0eShyZWNvcmQsIHN1YlByb3BlcnR5LnBhdGgpXG4gICAgb25DaGFuZ2UobmV3UmVjb3JkKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICByZXR1cm4gZmFsc2VcbiAgfSwgW3JlY29yZCwgb25DaGFuZ2UsIHByb3BlcnR5XSlcblxuICByZXR1cm4gKFxuICAgIDxTZWN0aW9uIG10PVwieGxcIj5cbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbVByb3BlcnR5ID0gY29udmVydFRvU3ViUHJvcGVydHkocHJvcHMucHJvcGVydHksIGkpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPEl0ZW1SZW5kZXJlclxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgcHJvcGVydHk9e2l0ZW1Qcm9wZXJ0eX1cbiAgICAgICAgICAgIGtleT17aXRlbVByb3BlcnR5LnBhdGh9XG4gICAgICAgICAgICBvbkRlbGV0ZT17cmVtb3ZlSXRlbX1cbiAgICAgICAgICAvPlxuICAgICAgICApXG4gICAgICB9KX1cbiAgICAgIDxCdXR0b24gb25DbGljaz17YWRkTmV3fSB0eXBlPVwiYnV0dG9uXCIgcm91bmRlZD5cbiAgICAgICAgPEFkZE5ld0l0ZW1CdXR0b24gcmVzb3VyY2U9e3Jlc291cmNlfSBwcm9wZXJ0eT17cHJvcGVydHl9IC8+XG4gICAgICA8L0J1dHRvbj5cbiAgICA8L1NlY3Rpb24+XG4gIClcbn1cblxuY29uc3QgRWRpdDogUmVhY3QuRkM8RWRpdFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQsIHRlc3RJZCB9ID0gcHJvcHNcbiAgY29uc3QgZXJyb3IgPSByZWNvcmQuZXJyb3JzICYmIHJlY29yZC5lcnJvcnNbcHJvcGVydHkucHJvcGVydHlQYXRoXVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17ISFlcnJvcn0gZGF0YS10ZXN0aWQ9e3Rlc3RJZH0+XG4gICAgICA8UHJvcGVydHlMYWJlbCBwcm9wZXJ0eT17cHJvcGVydHl9IC8+XG4gICAgICA8SW5wdXRzSW5TZWN0aW9uIHsuLi5wcm9wc30gLz5cbiAgICAgIDxGb3JtTWVzc2FnZT57ZXJyb3IgJiYgZXJyb3IubWVzc2FnZX08L0Zvcm1NZXNzYWdlPlxuICAgIDwvRm9ybUdyb3VwPlxuICApXG59XG5cbmV4cG9ydCB7XG4gIEVkaXQgYXMgZGVmYXVsdCxcbiAgRWRpdCxcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZsYXQgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscydcblxuaW1wb3J0IHsgUmVjb3JkSlNPTiwgUmVzb3VyY2VKU09OLCBQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgU2hvd1Byb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwcm9wZXJ0eTogUHJvcGVydHlKU09OO1xuICByZWNvcmQ6IFJlY29yZEpTT047XG4gIHJlc291cmNlOiBSZXNvdXJjZUpTT047XG59XG5cbmNvbnN0IExpc3Q6IFJlYWN0LkZDPFNob3dQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQgfSA9IHByb3BzXG4gIGNvbnN0IHZhbHVlcyA9IGZsYXQuZ2V0KHJlY29yZC5wYXJhbXMsIHByb3BlcnR5LnBhdGgpIHx8IFtdXG5cbiAgcmV0dXJuIChcbiAgICA8c3Bhbj57YGxlbmd0aDogJHt2YWx1ZXMubGVuZ3RofWB9PC9zcGFuPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlY3Rpb24sIFZhbHVlR3JvdXAgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IFJlY29yZEpTT04sIFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBmbGF0IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBjb252ZXJ0VG9TdWJQcm9wZXJ0eSB9IGZyb20gJy4vY29udmVydC10by1zdWItcHJvcGVydHknXG5cbnR5cGUgUHJvcHMgPSB7XG4gIHByb3BlcnR5OiBQcm9wZXJ0eUpTT047XG4gIHJlY29yZDogUmVjb3JkSlNPTjtcbiAgSXRlbUNvbXBvbmVudDogdHlwZW9mIFJlYWN0LkNvbXBvbmVudDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvdyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkLCBJdGVtQ29tcG9uZW50IH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCBpdGVtcyA9IGZsYXQuZ2V0KHJlY29yZC5wYXJhbXMsIHByb3BlcnR5LnBhdGgpIHx8IFtdXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZhbHVlR3JvdXAgbGFiZWw9e3Byb3BlcnR5LmxhYmVsfT5cbiAgICAgICAgPFNlY3Rpb24+XG4gICAgICAgICAgeyhpdGVtcyB8fCBbXSkubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtUHJvcGVydHkgPSBjb252ZXJ0VG9TdWJQcm9wZXJ0eShwcm9wZXJ0eSwgaSlcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxJdGVtQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAga2V5PXtpdGVtUHJvcGVydHkucGF0aH1cbiAgICAgICAgICAgICAgICBwcm9wZXJ0eT17aXRlbVByb3BlcnR5fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L1NlY3Rpb24+XG4gICAgICA8L1ZhbHVlR3JvdXA+XG4gICAgKVxuICB9XG59XG4iLCIvLyBpbXBvcnQgU2hvdyBmcm9tICcuL3Nob3cnXG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQnXG5pbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5pbXBvcnQgU2hvdyBmcm9tICcuL3Nob3cnXG5cbmV4cG9ydCB7XG4gIFNob3cgYXMgc2hvdyxcbiAgRWRpdCBhcyBlZGl0LFxuICBMaXN0IGFzIGxpc3QsXG59XG4iLCJpbXBvcnQgeyBERUxJTUlURVIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9mbGF0L2NvbnN0YW50cydcbmltcG9ydCB7IFByb3BlcnR5SlNPTiwgQmFzZVByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0VG9TdWJQcm9wZXJ0eShcbiAgcHJvcGVydHk6IFByb3BlcnR5SlNPTixcbiAgc3ViUHJvcGVydHk6IEJhc2VQcm9wZXJ0eUpTT04sXG4pOiBQcm9wZXJ0eUpTT04ge1xuICByZXR1cm4ge1xuICAgIC4uLnN1YlByb3BlcnR5LFxuICAgIHBhdGg6IFtwcm9wZXJ0eS5wYXRoLCBzdWJQcm9wZXJ0eS5uYW1lXS5qb2luKERFTElNSVRFUiksXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNlY3Rpb24sIEZvcm1Hcm91cCwgRm9ybU1lc3NhZ2UgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IFByb3BlcnR5TGFiZWwgfSBmcm9tICcuLi91dGlscy9wcm9wZXJ0eS1sYWJlbCdcbmltcG9ydCB7IGNvbnZlcnRUb1N1YlByb3BlcnR5IH0gZnJvbSAnLi9jb252ZXJ0LXRvLXN1Yi1wcm9wZXJ0eSdcblxudHlwZSBQcm9wcyA9IHtcbiAgSXRlbUNvbXBvbmVudDogdHlwZW9mIFJlYWN0LkNvbXBvbmVudDtcbn1cblxuY29uc3QgRWRpdDogUmVhY3QuRkM8UHJvcHMgJiBFZGl0UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkLCBJdGVtQ29tcG9uZW50IH0gPSBwcm9wc1xuICBjb25zdCBlcnJvciA9IHJlY29yZC5lcnJvcnMgJiYgcmVjb3JkLmVycm9yc1twcm9wZXJ0eS5wYXRoXVxuICByZXR1cm4gKFxuICAgIDxGb3JtR3JvdXAgZXJyb3I9eyEhZXJyb3J9PlxuICAgICAgPFByb3BlcnR5TGFiZWwgcHJvcGVydHk9e3Byb3BlcnR5fSAvPlxuICAgICAgPFNlY3Rpb24gey4uLnByb3BlcnR5LnByb3BzfT5cbiAgICAgICAge3Byb3BlcnR5LnN1YlByb3BlcnRpZXMuZmlsdGVyKHN1YlByb3BlcnR5ID0+ICFzdWJQcm9wZXJ0eS5pc0lkKS5tYXAoKHN1YlByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3ViUHJvcGVydHlXaXRoUGF0aCA9IGNvbnZlcnRUb1N1YlByb3BlcnR5KHByb3BlcnR5LCBzdWJQcm9wZXJ0eSlcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEl0ZW1Db21wb25lbnRcbiAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICBrZXk9e3N1YlByb3BlcnR5V2l0aFBhdGgucGF0aH1cbiAgICAgICAgICAgICAgcHJvcGVydHk9e3N1YlByb3BlcnR5V2l0aFBhdGh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L1NlY3Rpb24+XG4gICAgICA8Rm9ybU1lc3NhZ2U+e2Vycm9yICYmIGVycm9yLm1lc3NhZ2V9PC9Gb3JtTWVzc2FnZT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTZWN0aW9uLCBWYWx1ZUdyb3VwIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyBjb252ZXJ0VG9TdWJQcm9wZXJ0eSB9IGZyb20gJy4vY29udmVydC10by1zdWItcHJvcGVydHknXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIEl0ZW1Db21wb25lbnQ6IHR5cGVvZiBSZWFjdC5Db21wb25lbnQ7XG59XG5cbmNvbnN0IFNob3c6IFJlYWN0LkZDPFByb3BzICYgQmFzZVByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIEl0ZW1Db21wb25lbnQgfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgPFZhbHVlR3JvdXAgbGFiZWw9e3Byb3BlcnR5LmxhYmVsfT5cbiAgICAgIDxTZWN0aW9uPlxuICAgICAgICB7cHJvcGVydHkuc3ViUHJvcGVydGllcy5maWx0ZXIoc3ViUHJvcGVydHkgPT4gIXN1YlByb3BlcnR5LmlzSWQpLm1hcCgoc3ViUHJvcGVydHkpID0+IHtcbiAgICAgICAgICBjb25zdCBzdWJQcm9wZXJ0eVdpdGhQYXRoID0gY29udmVydFRvU3ViUHJvcGVydHkocHJvcGVydHksIHN1YlByb3BlcnR5KVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SXRlbUNvbXBvbmVudFxuICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAgIGtleT17c3ViUHJvcGVydHlXaXRoUGF0aC5wYXRofVxuICAgICAgICAgICAgICBwcm9wZXJ0eT17c3ViUHJvcGVydHlXaXRoUGF0aH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvU2VjdGlvbj5cbiAgICA8L1ZhbHVlR3JvdXA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvd1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFZpZXdIZWxwZXJzIGZyb20gJy4uLy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IGNvbnZlcnRUb1N1YlByb3BlcnR5IH0gZnJvbSAnLi9jb252ZXJ0LXRvLXN1Yi1wcm9wZXJ0eSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgSXRlbUNvbXBvbmVudDogdHlwZW9mIFJlYWN0LkNvbXBvbmVudDtcbn1cblxuLy8gVE9ETzogZGVmaW5lIEl0ZW1Db21wb25lbnQgaW50ZXJmYWNlXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcyAmIEVkaXRQcm9wZXJ0eVByb3BzPiB7XG4gIHJlbmRlckl0ZW1zKCk6IFJlYWN0LlJlYWN0Q2hpbGQge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIEl0ZW1Db21wb25lbnQgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICB7cHJvcGVydHkuc3ViUHJvcGVydGllcy5maWx0ZXIoc3ViUHJvcGVydHkgPT4gIXN1YlByb3BlcnR5LmlzSWQpLm1hcCgoc3ViUHJvcGVydHkpID0+IHtcbiAgICAgICAgICBjb25zdCBzdWJQcm9wZXJ0eVdpdGhQYXRoID0gY29udmVydFRvU3ViUHJvcGVydHkocHJvcGVydHksIHN1YlByb3BlcnR5KVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17c3ViUHJvcGVydHlXaXRoUGF0aC5wYXRofT5cbiAgICAgICAgICAgICAgPExhYmVsIGlubGluZT57YCR7c3ViUHJvcGVydHkubGFiZWx9OiBgfTwvTGFiZWw+XG4gICAgICAgICAgICAgIDxJdGVtQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgcHJvcGVydHk9e3N1YlByb3BlcnR5V2l0aFBhdGh9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH1cblxuICByZW5kZXIoKTogUmVhY3QuUmVhY3RDaGlsZCB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkLCByZXNvdXJjZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHNob3dBY3Rpb24gPSByZWNvcmQucmVjb3JkQWN0aW9ucy5maW5kKGEgPT4gYS5uYW1lID09PSAnc2hvdycpXG5cbiAgICBpZiAocmVzb3VyY2UudGl0bGVQcm9wZXJ0eS5wcm9wZXJ0eVBhdGggPT09IHByb3BlcnR5LnByb3BlcnR5UGF0aCAmJiBzaG93QWN0aW9uKSB7XG4gICAgICBjb25zdCBoID0gbmV3IFZpZXdIZWxwZXJzKClcbiAgICAgIGNvbnN0IGhyZWYgPSBoLnJlY29yZEFjdGlvblVybCh7XG4gICAgICAgIHJlc291cmNlSWQ6IHJlc291cmNlLmlkLCByZWNvcmRJZDogcmVjb3JkLmlkLCBhY3Rpb25OYW1lOiAnc2hvdycsXG4gICAgICB9KVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgdG89e2hyZWZ9Pnt0aGlzLnJlbmRlckl0ZW1zKCl9PC9MaW5rPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW5kZXJJdGVtcygpXG4gIH1cbn1cbiIsIi8vIGltcG9ydCBTaG93IGZyb20gJy4vc2hvdydcbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCdcbmltcG9ydCBTaG93IGZyb20gJy4vc2hvdydcbmltcG9ydCBMaXN0IGZyb20gJy4vbGlzdCdcblxuZXhwb3J0IHtcbiAgU2hvdyBhcyBzaG93LFxuICBFZGl0IGFzIGVkaXQsXG4gIExpc3QgYXMgbGlzdCxcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJhZGdlLCBCb3ggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmNvbnN0IERlZmF1bHRQcm9wZXJ0eVZhbHVlOiBSZWFjdC5GQzxTaG93UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQgfSA9IHByb3BzXG5cbiAgICBjb25zdCByYXdWYWx1ZSA9IHJlY29yZD8ucGFyYW1zW3Byb3BlcnR5LnBhdGhdXG5cbiAgICBpZiAodHlwZW9mIHJhd1ZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gPEJveCBzdHlsZT17eyBmb250U3R5bGU6ICdpdGFsaWMnIH19Pm5vdCBzZXQ8L0JveD5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHkuYXZhaWxhYmxlVmFsdWVzKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHByb3BlcnR5LmF2YWlsYWJsZVZhbHVlcy5maW5kKFxuICAgICAgICAgICAgKG9wdCkgPT4gb3B0LnZhbHVlID09PSByYXdWYWx1ZVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKCFvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiByYXdWYWx1ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDxCYWRnZT57b3B0aW9uPy5sYWJlbCB8fCByYXdWYWx1ZX08L0JhZGdlPlxuICAgIH1cblxuICAgIHJldHVybiByYXdWYWx1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0UHJvcGVydHlWYWx1ZVxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVmFsdWVHcm91cCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgU2hvd1Byb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IERlZmF1bHRQcm9wZXJ0eVZhbHVlIGZyb20gJy4vZGVmYXVsdC1wcm9wZXJ0eS12YWx1ZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvdyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8U2hvd1Byb3BlcnR5UHJvcHM+IHtcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgICA8RGVmYXVsdFByb3BlcnR5VmFsdWUgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICA8L1ZhbHVlR3JvdXA+XG4gICAgKVxuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcywgU2hvd1Byb3BlcnR5UHJvcHMgfSBmcm9tICcuL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbi8qKlxuICogRnVuY3Rpb24gdXNlZCBpbiBSZWFjdCBtZW1vIHRvIGNvbXBhcmUgaWYgcHJldmlvdXMgcHJvcGVydHkgdmFsdWUgYW5kIG5leHRcbiAqIHByb3BlcnR5IHZhbHVlIGFyZSB0aGUgc2FtZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgcmVjb3JkUHJvcGVydHlJc0VxdWFsID0gKFxuICBwcmV2UHJvcHM6IEVkaXRQcm9wZXJ0eVByb3BzIHwgU2hvd1Byb3BlcnR5UHJvcHMsXG4gIG5leHRQcm9wczogRWRpdFByb3BlcnR5UHJvcHMgfCBTaG93UHJvcGVydHlQcm9wcyxcbik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBwcmV2VmFsdWUgPSBwcmV2UHJvcHMucmVjb3JkLnBhcmFtc1twcmV2UHJvcHMucHJvcGVydHkucGF0aF1cbiAgY29uc3QgbmV4dFZhbHVlID0gbmV4dFByb3BzLnJlY29yZC5wYXJhbXNbbmV4dFByb3BzLnByb3BlcnR5LnBhdGhdXG5cbiAgY29uc3QgcHJldkVycm9yID0gcHJldlByb3BzLnJlY29yZC5lcnJvcnNbcHJldlByb3BzLnByb3BlcnR5LnBhdGhdXG4gIGNvbnN0IG5leHRFcnJvciA9IG5leHRQcm9wcy5yZWNvcmQuZXJyb3JzW25leHRQcm9wcy5wcm9wZXJ0eS5wYXRoXVxuXG4gIHJldHVybiBwcmV2VmFsdWUgPT09IG5leHRWYWx1ZSAmJiBwcmV2RXJyb3IgPT09IG5leHRFcnJvclxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCBtZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0J1xuaW1wb3J0IHsgd2l0aFRoZW1lLCBEZWZhdWx0VGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IElucHV0LCBGb3JtTWVzc2FnZSwgRm9ybUdyb3VwLCBzZWxlY3RTdHlsZXMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IHJlY29yZFByb3BlcnR5SXNFcXVhbCB9IGZyb20gJy4uL3JlY29yZC1wcm9wZXJ0eS1pcy1lcXVhbCdcbmltcG9ydCB7IFByb3BlcnR5TGFiZWwgfSBmcm9tICcuLi91dGlscy9wcm9wZXJ0eS1sYWJlbCdcblxudHlwZSBDb21iaW5lZFByb3BzID0gRWRpdFByb3BlcnR5UHJvcHMgJiB7dGhlbWU6IERlZmF1bHRUaGVtZX1cblxuY29uc3QgRWRpdDogRkM8Q29tYmluZWRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSBwcm9wc1xuICBjb25zdCBlcnJvciA9IHJlY29yZC5lcnJvcnM/Lltwcm9wZXJ0eS5wYXRoXVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17Qm9vbGVhbihlcnJvcil9PlxuICAgICAgPFByb3BlcnR5TGFiZWwgcHJvcGVydHk9e3Byb3BlcnR5fSAvPlxuICAgICAge3Byb3BlcnR5LmF2YWlsYWJsZVZhbHVlcyA/IDxTZWxlY3RFZGl0IHsuLi5wcm9wc30gLz4gOiA8VGV4dEVkaXQgey4uLnByb3BzfSAvPn1cbiAgICAgIDxGb3JtTWVzc2FnZT57ZXJyb3IgJiYgZXJyb3IubWVzc2FnZX08L0Zvcm1NZXNzYWdlPlxuICAgIDwvRm9ybUdyb3VwPlxuICApXG59XG5cbmNvbnN0IFNlbGVjdEVkaXQ6IEZDPENvbWJpbmVkUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGhlbWUsIHJlY29yZCwgcHJvcGVydHksIG9uQ2hhbmdlIH0gPSBwcm9wc1xuICBpZiAoIXByb3BlcnR5LmF2YWlsYWJsZVZhbHVlcykge1xuICAgIHJldHVybiBudWxsXG4gIH1cbiAgY29uc3QgcHJvcFZhbHVlID0gcmVjb3JkLnBhcmFtcz8uW3Byb3BlcnR5LnBhdGhdID8/ICcnXG4gIGNvbnN0IHN0eWxlcyA9IHNlbGVjdFN0eWxlcyh0aGVtZSlcbiAgY29uc3Qgc2VsZWN0ZWQgPSBwcm9wZXJ0eS5hdmFpbGFibGVWYWx1ZXMuZmluZChhdiA9PiBhdi52YWx1ZSA9PT0gcHJvcFZhbHVlKVxuXG4gIHJldHVybiAoXG4gICAgPFNlbGVjdFxuICAgICAgaXNDbGVhcmFibGVcbiAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgdmFsdWU9e3NlbGVjdGVkfVxuICAgICAgb3B0aW9ucz17cHJvcGVydHkuYXZhaWxhYmxlVmFsdWVzfVxuICAgICAgb25DaGFuZ2U9e3MgPT4gb25DaGFuZ2UocHJvcGVydHkucGF0aCwgcz8udmFsdWUgPz8gJycpfVxuICAgICAgaXNEaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cbiAgICAgIHsuLi5wcm9wZXJ0eS5wcm9wc31cbiAgICAvPlxuICApXG59XG5cbmNvbnN0IFRleHRFZGl0OiBGQzxDb21iaW5lZFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0gPSBwcm9wc1xuICBjb25zdCBwcm9wVmFsdWUgPSByZWNvcmQucGFyYW1zPy5bcHJvcGVydHkucGF0aF0gPz8gJydcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShwcm9wVmFsdWUpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IHByb3BWYWx1ZSkge1xuICAgICAgc2V0VmFsdWUocHJvcFZhbHVlKVxuICAgIH1cbiAgfSwgW3Byb3BWYWx1ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8SW5wdXRcbiAgICAgIGlkPXtwcm9wZXJ0eS5wYXRofVxuICAgICAgbmFtZT17cHJvcGVydHkucGF0aH1cbiAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIG9uQmx1cj17KCkgPT4gb25DaGFuZ2UocHJvcGVydHkucGF0aCwgdmFsdWUpfVxuICAgICAgLy8gaGFuZGxlIGNsaWNraW5nIEVOVEVSXG4gICAgICBvbktleURvd249e2UgPT4gZS5rZXlDb2RlID09PSAxMyAmJiBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCB2YWx1ZSl9XG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICBkaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cbiAgICAgIHsuLi5wcm9wZXJ0eS5wcm9wc31cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbCkpXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCdcbmltcG9ydCB7IHdpdGhUaGVtZSwgVGhlbWVQcm9wcywgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCwgZmlsdGVyU3R5bGVzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBGaWx0ZXJQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxuY2xhc3MgRmlsdGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWx0ZXJQcm9wZXJ0eVByb3BzICYgVGhlbWVQcm9wczxEZWZhdWx0VGhlbWU+PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKVxuICAgIHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlID0gdGhpcy5oYW5kbGVTZWxlY3RDaGFuZ2UuYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UoZXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xuICAgIG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdENoYW5nZShzZWxlY3RlZCk6IHZvaWQge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZCA/IHNlbGVjdGVkLnZhbHVlIDogJydcbiAgICBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCB2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcklucHV0KCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgZmlsdGVyLCB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IGZpbHRlcktleSA9IGBmaWx0ZXItJHtwcm9wZXJ0eS5wYXRofWBcbiAgICBjb25zdCB2YWx1ZSA9IGZpbHRlcltwcm9wZXJ0eS5wYXRoXSB8fCAnJ1xuICAgIGlmIChwcm9wZXJ0eS5hdmFpbGFibGVWYWx1ZXMpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkID0gcHJvcGVydHkuYXZhaWxhYmxlVmFsdWVzLmZpbmQoYXYgPT4gYXYudmFsdWUgPT09IHZhbHVlKVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIHZhbHVlPXt0eXBlb2Ygc2VsZWN0ZWQgPT09ICd1bmRlZmluZWQnID8gJycgOiBzZWxlY3RlZH1cbiAgICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICAgIG9wdGlvbnM9e3Byb3BlcnR5LmF2YWlsYWJsZVZhbHVlc31cbiAgICAgICAgICBzdHlsZXM9e2ZpbHRlclN0eWxlcyh0aGVtZSl9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPElucHV0XG4gICAgICAgIG5hbWU9e2ZpbHRlcktleX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUdyb3VwIHZhcmlhbnQ9XCJmaWx0ZXJcIj5cbiAgICAgICAgPExhYmVsPntwcm9wZXJ0eS5sYWJlbH08L0xhYmVsPlxuICAgICAgICB7dGhpcy5yZW5kZXJJbnB1dCgpfVxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgKVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoRmlsdGVyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBSZWNvcmRKU09OLCBSZXNvdXJjZUpTT04sIFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgRGVmYXVsdFByb3BlcnR5VmFsdWUgZnJvbSAnLi9kZWZhdWx0LXByb3BlcnR5LXZhbHVlJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwcm9wZXJ0eTogUHJvcGVydHlKU09OO1xuICByZWNvcmQ6IFJlY29yZEpTT047XG4gIHJlc291cmNlOiBSZXNvdXJjZUpTT047XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdENoaWxkIHtcbiAgICByZXR1cm4gKDxEZWZhdWx0UHJvcGVydHlWYWx1ZSB7Li4udGhpcy5wcm9wc30gLz4pXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDaGVja0JveCwgRm9ybUdyb3VwLCBGb3JtTWVzc2FnZSB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IHsgcmVjb3JkUHJvcGVydHlJc0VxdWFsIH0gZnJvbSAnLi4vcmVjb3JkLXByb3BlcnR5LWlzLWVxdWFsJ1xuaW1wb3J0IHsgUHJvcGVydHlMYWJlbCB9IGZyb20gJy4uL3V0aWxzL3Byb3BlcnR5LWxhYmVsJ1xuXG5jb25zdCBwYXJzZVZhbHVlID0gKHZhbHVlKTogYm9vbGVhbiA9PiAhKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gJ2ZhbHNlJylcblxuY29uc3QgRWRpdDogUmVhY3QuRkM8RWRpdFByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIG9uQ2hhbmdlLCByZWNvcmQgfSA9IHByb3BzXG4gIGNvbnN0IHZhbHVlID0gcGFyc2VWYWx1ZShyZWNvcmQucGFyYW1zICYmIHJlY29yZC5wYXJhbXNbcHJvcGVydHkucGF0aF0pXG4gIGNvbnN0IGVycm9yID0gcmVjb3JkLmVycm9ycyAmJiByZWNvcmQuZXJyb3JzW3Byb3BlcnR5LnBhdGhdXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICghcHJvcGVydHkuaXNEaXNhYmxlZCkge1xuICAgICAgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgIXZhbHVlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17ISFlcnJvcn0+XG4gICAgICA8Q2hlY2tCb3hcbiAgICAgICAgaWQ9e3Byb3BlcnR5LnBhdGh9XG4gICAgICAgIG5hbWU9e3Byb3BlcnR5LnBhdGh9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIGNoZWNrZWQ9e3ZhbHVlfVxuICAgICAgICBkaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cbiAgICAgICAgey4uLnByb3BlcnR5LnByb3BzfVxuICAgICAgLz5cbiAgICAgIDxQcm9wZXJ0eUxhYmVsIHByb3BlcnR5PXtwcm9wZXJ0eX0gcHJvcHM9e3sgaW5saW5lOiB0cnVlIH19IC8+XG4gICAgICA8Rm9ybU1lc3NhZ2U+e2Vycm9yICYmIGVycm9yLm1lc3NhZ2V9PC9Gb3JtTWVzc2FnZT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbClcbiIsImV4cG9ydCBkZWZhdWx0ICh2YWx1ZSk6ICdZZXMnIHwgJ05vJyB8ICcnID0+IHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuICByZXR1cm4gdmFsdWUgPyAnWWVzJyA6ICdObydcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJhZGdlIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xuaW1wb3J0IG1hcFZhbHVlIGZyb20gJy4vbWFwLXZhbHVlJ1xuXG5jb25zdCBCb29sZWFuUHJvcGVydHlWYWx1ZTogUmVhY3QuRkM8U2hvd1Byb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVjb3JkLCBwcm9wZXJ0eSwgcmVzb3VyY2UgfSA9IHByb3BzXG5cbiAgY29uc3QgeyB0cmFuc2xhdGVQcm9wZXJ0eSB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIGNvbnN0IHJhd1ZhbHVlID0gcmVjb3JkPy5wYXJhbXNbcHJvcGVydHkucGF0aF1cblxuICBpZiAodHlwZW9mIHJhd1ZhbHVlID09PSAndW5kZWZpbmVkJyB8fCByYXdWYWx1ZSA9PT0gJycpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGNvbnN0IGJhc2UgPSBtYXBWYWx1ZShyYXdWYWx1ZSlcbiAgY29uc3QgdHJhbnNsYXRpb24gPSB0cmFuc2xhdGVQcm9wZXJ0eShgJHtwcm9wZXJ0eS5wYXRofS4ke3Jhd1ZhbHVlfWAsIHJlc291cmNlLmlkLCB7XG4gICAgZGVmYXVsdFZhbHVlOiBiYXNlLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPEJhZGdlIG91dGxpbmUgc2l6ZT1cInNtXCI+e3RyYW5zbGF0aW9ufTwvQmFkZ2U+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vbGVhblByb3BlcnR5VmFsdWVcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFZhbHVlR3JvdXAgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBCb29sZWFuUHJvcGVydHlWYWx1ZSBmcm9tICcuL2Jvb2xlYW4tcHJvcGVydHktdmFsdWUnXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEVkaXRQcm9wZXJ0eVByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHkgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgICA8Qm9vbGVhblByb3BlcnR5VmFsdWUgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgICA8L1ZhbHVlR3JvdXA+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IFJlY29yZEpTT04sIFByb3BlcnR5SlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCBCb29sZWFuUHJvcGVydHlWYWx1ZSBmcm9tICcuL2Jvb2xlYW4tcHJvcGVydHktdmFsdWUnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHByb3BlcnR5OiBQcm9wZXJ0eUpTT047XG4gIHJlY29yZDogUmVjb3JkSlNPTjtcbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Q2hpbGQge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm9vbGVhblByb3BlcnR5VmFsdWUgey4uLnRoaXMucHJvcHN9IC8+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCdcbmltcG9ydCB7IHdpdGhUaGVtZSwgRGVmYXVsdFRoZW1lLCBUaGVtZVByb3BzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBmaWx0ZXJTdHlsZXMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBtYXBWYWx1ZSBmcm9tICcuL21hcC12YWx1ZSdcbmltcG9ydCB7IEZpbHRlclByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEZpbHRlclByb3BlcnR5UHJvcHMgJiBUaGVtZVByb3BzPERlZmF1bHRUaGVtZT4+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShzZWxlY3RlZCk6IHZvaWQge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdmFsdWUgPSBzZWxlY3RlZCA/IHNlbGVjdGVkLnZhbHVlIDogJydcbiAgICBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCB2YWx1ZSlcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIGZpbHRlciA9IHt9LCB0aGVtZSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIGZpbHRlcltwcm9wZXJ0eS5wYXRoXSA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6IGZpbHRlcltwcm9wZXJ0eS5wYXRoXVxuICAgIGNvbnN0IG9wdGlvbnMgPSBbXG4gICAgICB7IHZhbHVlOiB0cnVlLCBsYWJlbDogbWFwVmFsdWUodHJ1ZSkgfSxcbiAgICAgIHsgdmFsdWU6IGZhbHNlLCBsYWJlbDogbWFwVmFsdWUoZmFsc2UpIH0sXG4gICAgXVxuICAgIGNvbnN0IHNlbGVjdGVkID0gb3B0aW9ucy5maW5kKG8gPT4gby52YWx1ZSA9PT0gdmFsdWUpXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgIDxMYWJlbD57cHJvcGVydHkubGFiZWx9PC9MYWJlbD5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIHZhbHVlPXt0eXBlb2Ygc2VsZWN0ZWQgPT09ICd1bmRlZmluZWQnID8gJycgOiBzZWxlY3RlZH1cbiAgICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgICAgc3R5bGVzPXtmaWx0ZXJTdHlsZXModGhlbWUpfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoRmlsdGVyIGFzIG5ldmVyKVxuIiwiaW1wb3J0IFJlYWN0LCB7IG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERhdGVQaWNrZXIsIEZvcm1Hcm91cCwgRm9ybU1lc3NhZ2UgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IHJlY29yZFByb3BlcnR5SXNFcXVhbCB9IGZyb20gJy4uL3JlY29yZC1wcm9wZXJ0eS1pcy1lcXVhbCdcbmltcG9ydCB7IFByb3BlcnR5TGFiZWwgfSBmcm9tICcuLi91dGlscy9wcm9wZXJ0eS1sYWJlbCdcblxuY29uc3QgRWRpdDogUmVhY3QuRkM8RWRpdFByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIG9uQ2hhbmdlLCByZWNvcmQgfSA9IHByb3BzXG4gIGNvbnN0IHZhbHVlID0gKHJlY29yZC5wYXJhbXMgJiYgcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXSkgfHwgJydcbiAgY29uc3QgZXJyb3IgPSByZWNvcmQuZXJyb3JzICYmIHJlY29yZC5lcnJvcnNbcHJvcGVydHkucGF0aF1cblxuICByZXR1cm4gKFxuICAgIDxGb3JtR3JvdXAgZXJyb3I9eyEhZXJyb3J9PlxuICAgICAgPFByb3BlcnR5TGFiZWwgcHJvcGVydHk9e3Byb3BlcnR5fSAvPlxuICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBkaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cbiAgICAgICAgb25DaGFuZ2U9eyhkYXRhOiBzdHJpbmcpOiB2b2lkID0+IG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIGRhdGEpfVxuICAgICAgICBwcm9wZXJ0eVR5cGU9e3Byb3BlcnR5LnR5cGV9XG4gICAgICAgIHsuLi5wcm9wZXJ0eS5wcm9wc31cbiAgICAgIC8+XG4gICAgICA8Rm9ybU1lc3NhZ2U+e2Vycm9yICYmIGVycm9yLm1lc3NhZ2V9PC9Gb3JtTWVzc2FnZT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbClcbiIsImltcG9ydCB7IGZvcm1hdERhdGVQcm9wZXJ0eSB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCB7IFByb3BlcnR5VHlwZSB9IGZyb20gJy4uLy4uLy4uLy4uL2JhY2tlbmQvYWRhcHRlcnMvcHJvcGVydHkvYmFzZS1wcm9wZXJ0eSdcblxuZXhwb3J0IGRlZmF1bHQgKHZhbHVlOiBEYXRlLCBwcm9wZXJ0eVR5cGU6IFByb3BlcnR5VHlwZSk6IHN0cmluZyA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpXG4gIGlmIChkYXRlKSB7XG4gICAgcmV0dXJuIGZvcm1hdERhdGVQcm9wZXJ0eShkYXRlLCBwcm9wZXJ0eVR5cGUpXG4gIH1cbiAgcmV0dXJuICcnXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBWYWx1ZUdyb3VwIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgbWFwVmFsdWUgZnJvbSAnLi9tYXAtdmFsdWUnXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEVkaXRQcm9wZXJ0eVByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZhbHVlID0gbWFwVmFsdWUocmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXSwgcHJvcGVydHkudHlwZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgICB7dmFsdWV9XG4gICAgICA8L1ZhbHVlR3JvdXA+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBtYXBWYWx1ZSBmcm9tICcuL21hcC12YWx1ZSdcbmltcG9ydCB7IFJlc291cmNlSlNPTiwgUmVjb3JkSlNPTiwgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcHJvcGVydHk6IFByb3BlcnR5SlNPTjtcbiAgcmVjb3JkOiBSZWNvcmRKU09OO1xuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKTogUmVhY3QuUmVhY3RDaGlsZCB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdmFsdWUgPSBtYXBWYWx1ZShyZWNvcmQucGFyYW1zW3Byb3BlcnR5LnBhdGhdLCBwcm9wZXJ0eS50eXBlKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuPnt2YWx1ZX08L3NwYW4+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBmbGF0IGZyb20gJ2ZsYXQnXG5pbXBvcnQgQmFzZVByb3BlcnR5IGZyb20gJy4uLy4uL2FkYXB0ZXJzL3Byb3BlcnR5L2Jhc2UtcHJvcGVydHknXG5pbXBvcnQgQmFzZVJlc291cmNlIGZyb20gJy4uLy4uL2FkYXB0ZXJzL3Jlc291cmNlL2Jhc2UtcmVzb3VyY2UnXG5pbXBvcnQgQmFzZVJlY29yZCBmcm9tICcuLi8uLi9hZGFwdGVycy9yZWNvcmQvYmFzZS1yZWNvcmQnXG5cbmV4cG9ydCBjb25zdCBQQVJBTV9TRVBBUkFUT1IgPSAnfn4nXG5cbmV4cG9ydCB0eXBlIEZpbHRlckVsZW1lbnQgPSB7XG4gIHBhdGg6IHN0cmluZztcbiAgcHJvcGVydHk6IEJhc2VQcm9wZXJ0eTtcbiAgdmFsdWU6IHN0cmluZyB8IHtcbiAgICBmcm9tOiBzdHJpbmc7XG4gICAgdG86IHN0cmluZztcbiAgfTtcbiAgcG9wdWxhdGVkPzogQmFzZVJlY29yZCB8IG51bGw7XG59XG5cbmludGVyZmFjZSBSZWR1Y2VDYWxsYmFjazxUPiB7XG4gIChtZW1vOiBULCBlbGVtZW50OiBGaWx0ZXJFbGVtZW50KTogVDtcbn1cblxuLyoqXG4gKiBGaWx0ZXIgb2JqZWN0IHdyYXBwaW5nIHVwIHNlbGVjdGVkIGZpbHRlcnMuXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY2xhc3MgRmlsdGVyIHtcbiAgcHVibGljIGZpbHRlcnM6IHtba2V5OiBzdHJpbmddOiBGaWx0ZXJFbGVtZW50fVxuXG4gIHByaXZhdGUgcmVzb3VyY2U6IEJhc2VSZXNvdXJjZVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHJhdyBuZXN0ZWQgZmlsdGVycyB0byBmb3JtIE9iamVjdDxwYXRoLCB2YWx1ZT4uXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqIGNvbnN0IGZpbHRlcnMgPSB7XG4gICAqICBuZXN0ZWQ6IHtmaWVsZDogJ2FsYSd9LFxuICAgKiAgJ2RhdGFGaWVsZH5+ZnJvbSc6ICcyMDE5LTA4LTE0J1xuICAgKiB9XG4gICAqXG4gICAqIGNvbnN0IG5vcm1hbGl6ZWQgPSBGaWx0ZXIubm9ybWFsaXplRmlsdGVycyhmaWx0ZXJzKVxuICAgKiAvLyB7XG4gICAqIC8vICAgJ25lc3RlZC5maWx0ZXInOiAnYWxhJyxcbiAgICogLy8gICAnZGF0YUZpZWxkJzoge2Zyb206ICcyMDE5LTA4LTE0J31cbiAgICogLy8gfVxuICAgKlxuICAgKlxuICAgKiBAcGFyYW0gICB7T2JqZWN0fSAgZmlsdGVyc1xuICAgKlxuICAgKiBAcmV0dXJuICB7T2JqZWN0fVxuICAgKi9cbiAgc3RhdGljIG5vcm1hbGl6ZUtleXMoZmlsdGVycyk6IE1hcDxzdHJpbmcsIGFueT4ge1xuICAgIHJldHVybiBmbGF0LnVuZmxhdHRlbihmbGF0LmZsYXR0ZW4oZmlsdGVycyksIHsgZGVsaW1pdGVyOiBQQVJBTV9TRVBBUkFUT1IgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0gICB7T2JqZWN0PFN0cmluZyxPYmplY3QgfCBTdHJpbmc+fSAgZmlsdGVycyAgIHNlbGVjdGVkIGZpbHRlcnNcbiAgICogQHBhcmFtICAge0Jhc2VSZXNvdXJjZX0gICAgICAgICAgICAgICAgICAgIHJlc291cmNlICAgIHJlc291cmNlIHdoaWNoIGlzIGZpbHRlcmVkXG4gICAqL1xuICBjb25zdHJ1Y3RvcihmaWx0ZXJzID0ge30sIHJlc291cmNlKSB7XG4gICAgdGhpcy5yZXNvdXJjZSA9IHJlc291cmNlXG4gICAgY29uc3Qgbm9ybWFsaXplZCA9IEZpbHRlci5ub3JtYWxpemVLZXlzKGZpbHRlcnMpXG4gICAgdGhpcy5maWx0ZXJzID0gT2JqZWN0LmtleXMobm9ybWFsaXplZCkucmVkdWNlKChtZW1vLCBwYXRoKSA9PiB7XG4gICAgICBtZW1vW3BhdGhdID0ge1xuICAgICAgICBwYXRoLFxuICAgICAgICBwcm9wZXJ0eTogdGhpcy5yZXNvdXJjZS5wcm9wZXJ0eShwYXRoLnNwbGl0KCcuJylbMF0pLFxuICAgICAgICB2YWx1ZTogbm9ybWFsaXplZFtwYXRoXSxcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG1lbW9cbiAgICB9LCB7fSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZpbHRlciBmb3IgYSBnaXZlbiBwcm9wZXJ0eSBrZXlcbiAgICpcbiAgICogQHBhcmFtIHtTdHJpbmd9IGtleSAgICAgIHByb3BlcnR5IGtleVxuICAgKiBAcmV0dXJucyB7RmlsdGVyLlByb3BlcnR5IHwgdW5kZWZpbmVkfVxuICAgKi9cbiAgZ2V0KGtleTogc3RyaW5nKTogRmlsdGVyRWxlbWVudCB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmZpbHRlcnNba2V5XVxuICB9XG5cbiAgLyoqXG4gICAqIFBvcHVsYXRlcyBhbGwgZmlsdGVyZWQgcHJvcGVydGllcyB3aGljaCByZWZlcnMgdG8gb3RoZXIgcmVzb3VyY2VzXG4gICAqL1xuICBhc3luYyBwb3B1bGF0ZSgpOiBQcm9taXNlPEZpbHRlcj4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmZpbHRlcnMpXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGtleXMubGVuZ3RoOyBpbmRleCArPSAxKSB7XG4gICAgICBjb25zdCBrZXkgPSBrZXlzW2luZGV4XVxuICAgICAgY29uc3QgcmVmZXJlbmNlUmVzb3VyY2UgPSB0aGlzLnJlc291cmNlLmRlY29yYXRlKCkuZ2V0UHJvcGVydHlCeUtleShrZXkpPy5yZWZlcmVuY2UoKVxuICAgICAgaWYgKHJlZmVyZW5jZVJlc291cmNlKSB7XG4gICAgICAgIHRoaXMuZmlsdGVyc1trZXldLnBvcHVsYXRlZCA9IGF3YWl0IHJlZmVyZW5jZVJlc291cmNlLmZpbmRPbmUoXG4gICAgICAgICAgdGhpcy5maWx0ZXJzW2tleV0udmFsdWUgYXMgc3RyaW5nLFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICByZWR1Y2U8VD4oY2FsbGJhY2s6IFJlZHVjZUNhbGxiYWNrPFQ+LCBpbml0aWFsOiBUKTogVCB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5maWx0ZXJzKS5yZWR1Y2UoY2FsbGJhY2ssIGluaXRpYWwgfHwge30gYXMgVClcbiAgfVxuXG4gIGlzVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFPYmplY3Qua2V5cyh0aGlzLmZpbHRlcnMpLmxlbmd0aFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBMYWJlbCwgRGF0ZVBpY2tlciB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0ICogYXMgQmFja2VuZEZpbHRlciBmcm9tICcuLi8uLi8uLi8uLi9iYWNrZW5kL3V0aWxzL2ZpbHRlci9maWx0ZXInXG5pbXBvcnQgeyBGaWx0ZXJQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxuY29uc3QgeyBQQVJBTV9TRVBBUkFUT1IgfSA9IEJhY2tlbmRGaWx0ZXJcblxuXG5jb25zdCBGaWx0ZXI6IFJlYWN0LkZDPEZpbHRlclByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIGZpbHRlciwgb25DaGFuZ2UgfSA9IHByb3BzXG5cbiAgY29uc3QgZnJvbUtleSA9IGAke3Byb3BlcnR5LnBhdGh9JHtQQVJBTV9TRVBBUkFUT1J9ZnJvbWBcbiAgY29uc3QgdG9LZXkgPSBgJHtwcm9wZXJ0eS5wYXRofSR7UEFSQU1fU0VQQVJBVE9SfXRvYFxuICBjb25zdCBmcm9tVmFsdWUgPSBmaWx0ZXJbZnJvbUtleV1cbiAgY29uc3QgdG9WYWx1ZSA9IGZpbHRlclt0b0tleV1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxGb3JtR3JvdXAgdmFyaWFudD1cImZpbHRlclwiPlxuICAgICAgICA8TGFiZWw+e3Byb3BlcnR5LmxhYmVsfTwvTGFiZWw+XG4gICAgICAgIDxMYWJlbD4tIEZyb206IDwvTGFiZWw+XG4gICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgdmFsdWU9e2Zyb21WYWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGRhdGE6IHN0cmluZyk6IHZvaWQgPT4gb25DaGFuZ2UoZnJvbUtleSwgZGF0YSl9XG4gICAgICAgICAgcHJvcGVydHlUeXBlPXtwcm9wZXJ0eS50eXBlfVxuICAgICAgICAvPlxuICAgICAgICA8TGFiZWwgbXQ9XCJkZWZhdWx0XCI+LSBUbzogPC9MYWJlbD5cbiAgICAgICAgPERhdGVQaWNrZXJcbiAgICAgICAgICB2YWx1ZT17dG9WYWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17KGRhdGE6IHN0cmluZyk6IHZvaWQgPT4gb25DaGFuZ2UodG9LZXksIGRhdGEpfVxuICAgICAgICAgIHByb3BlcnR5VHlwZT17cHJvcGVydHkudHlwZX1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLWV4cHJlc3Npb25zICovXG5pbXBvcnQgUmVhY3QsIHsgRkMsIG1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIEZvcm1Hcm91cCxcbiAgRm9ybU1lc3NhZ2UsXG4gIFJpY2hUZXh0LFxuICBRdWlsbE9wdGlvbnMsXG4gIERlZmF1bHRRdWlsbFRvb2xiYXJPcHRpb25zLFxufSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IHJlY29yZFByb3BlcnR5SXNFcXVhbCB9IGZyb20gJy4uL3JlY29yZC1wcm9wZXJ0eS1pcy1lcXVhbCdcbmltcG9ydCB7IFByb3BlcnR5TGFiZWwgfSBmcm9tICcuLi91dGlscy9wcm9wZXJ0eS1sYWJlbCdcblxudHlwZSBDdXN0b21UeXBlID0ge1xuICBib3JkZXJsZXNzPzogYm9vbGVhbjtcbiAgcXVpbGw/OiBRdWlsbE9wdGlvbnM7XG59XG5cbmNvbnN0IEVkaXQ6IEZDPEVkaXRQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQsIG9uQ2hhbmdlIH0gPSBwcm9wc1xuICBjb25zdCB2YWx1ZSA9IHJlY29yZC5wYXJhbXM/Lltwcm9wZXJ0eS5wYXRoXSA/PyAnJ1xuICBjb25zdCBlcnJvciA9IHJlY29yZC5lcnJvcnMgJiYgcmVjb3JkLmVycm9yc1twcm9wZXJ0eS5wYXRoXVxuXG4gIGNvbnN0IHsgcHJvcHM6IHByb3BlcnR5UHJvcHMgfSA9IHByb3BlcnR5XG5cbiAgY29uc3QgeyBxdWlsbCA9IHt9LCAuLi5jdXN0b21Qcm9wcyB9ID0gcHJvcGVydHlQcm9wcyBhcyBDdXN0b21UeXBlIHx8IHt9XG4gIHF1aWxsLnRoZW1lID0gcXVpbGwudGhlbWUgfHwgJ3Nub3cnXG4gIHF1aWxsLm1vZHVsZXMgPSB7XG4gICAgdG9vbGJhcjogRGVmYXVsdFF1aWxsVG9vbGJhck9wdGlvbnMsXG4gICAgLi4uKHF1aWxsLm1vZHVsZXMgfHwge30pLFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUdyb3VwIGVycm9yPXtCb29sZWFuKGVycm9yKX0+XG4gICAgICA8UHJvcGVydHlMYWJlbCBwcm9wZXJ0eT17cHJvcGVydHl9IC8+XG4gICAgICA8UmljaFRleHRcbiAgICAgICAgey4uLmN1c3RvbVByb3BzfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXtjb250ZW50ID0+IG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIGNvbnRlbnQpfVxuICAgICAgICBxdWlsbD17cXVpbGx9XG4gICAgICAvPlxuICAgICAgPEZvcm1NZXNzYWdlPntlcnJvcj8ubWVzc2FnZX08L0Zvcm1NZXNzYWdlPlxuICAgIDwvRm9ybUdyb3VwPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oRWRpdCwgcmVjb3JkUHJvcGVydHlJc0VxdWFsKVxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVmFsdWVHcm91cCwgVGV4dCwgQm94IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEVkaXRQcm9wZXJ0eVByb3BzPiB7XG4gIHByaXZhdGUgY29udGVudFJlZjogUmVhY3QuUmVmT2JqZWN0PGFueT5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogRWRpdFByb3BlcnR5UHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmNvbnRlbnRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdmFsdWUgPSByZWNvcmQucGFyYW1zW3Byb3BlcnR5LnBhdGhdXG4gICAgdGhpcy5jb250ZW50UmVmLmN1cnJlbnQuaW5uZXJIVE1MID0gdmFsdWVcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHkgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgICA8Qm94IHZhcmlhbnQ9XCJncmV5XCIgYm9yZGVyPVwiZGVmYXVsdFwiPlxuICAgICAgICAgIDxUZXh0IHJlZj17dGhpcy5jb250ZW50UmVmfSAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvVmFsdWVHcm91cD5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFNob3dQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxuY29uc3QgTGlzdDogUmVhY3QuRkM8U2hvd1Byb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gcHJvcHNcbiAgY29uc3Qgb3JpZ2luYWwgPSByZWNvcmQucGFyYW1zW3Byb3BlcnR5LnBhdGhdIHx8ICcnXG4gIGNvbnN0IHZhbHVlID0gb3JpZ2luYWwuc3Vic3RyaW5nKDAsIDE1KSArIChvcmlnaW5hbC5sZW5ndGggPiAxNSA/ICcuLi4nIDogJycpXG5cbiAgcmV0dXJuIChcbiAgICA8c3Bhbj57dmFsdWV9PC9zcGFuPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpc3RcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QvYXN5bmMnXG5pbXBvcnQgeyB3aXRoVGhlbWUsIERlZmF1bHRUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtTWVzc2FnZSwgc2VsZWN0U3R5bGVzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgQXBpQ2xpZW50IGZyb20gJy4uLy4uLy4uL3V0aWxzL2FwaS1jbGllbnQnXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcywgU2VsZWN0UmVjb3JkIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgUHJvcGVydHlMYWJlbCB9IGZyb20gJy4uL3V0aWxzL3Byb3BlcnR5LWxhYmVsJ1xuXG50eXBlIENvbWJpbmVkUHJvcHMgPSBFZGl0UHJvcGVydHlQcm9wcyAmIHt0aGVtZTogRGVmYXVsdFRoZW1lfVxudHlwZSBTZWxlY3RSZWNvcmRFbmhhbmNlZCA9IFNlbGVjdFJlY29yZCAmIHtcbiAgcmVjb3JkOiBSZWNvcmRKU09OO1xufVxuXG5jb25zdCBFZGl0OiBGQzxDb21iaW5lZFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IG9uQ2hhbmdlLCBwcm9wZXJ0eSwgcmVjb3JkLCB0aGVtZSB9ID0gcHJvcHNcbiAgY29uc3QgeyByZWZlcmVuY2U6IHJlc291cmNlSWQgfSA9IHByb3BlcnR5XG5cbiAgaWYgKCFyZXNvdXJjZUlkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgcmVmZXJlbmNlIHJlc291cmNlIGluIHByb3BlcnR5ICcke3Byb3BlcnR5LnBhdGh9J2ApXG4gIH1cblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoc2VsZWN0ZWQ6IFNlbGVjdFJlY29yZEVuaGFuY2VkKTogdm9pZCA9PiB7XG4gICAgaWYgKHNlbGVjdGVkKSB7XG4gICAgICBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCBzZWxlY3RlZC52YWx1ZSwgc2VsZWN0ZWQucmVjb3JkKVxuICAgIH0gZWxzZSB7XG4gICAgICBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCBudWxsKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGxvYWRPcHRpb25zID0gYXN5bmMgKGlucHV0VmFsdWU6IHN0cmluZyk6IFByb21pc2U8U2VsZWN0UmVjb3JkRW5oYW5jZWRbXT4gPT4ge1xuICAgIGNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxuXG4gICAgY29uc3Qgb3B0aW9uUmVjb3JkcyA9IGF3YWl0IGFwaS5zZWFyY2hSZWNvcmRzKHtcbiAgICAgIHJlc291cmNlSWQsXG4gICAgICBxdWVyeTogaW5wdXRWYWx1ZSxcbiAgICB9KVxuICAgIHJldHVybiBvcHRpb25SZWNvcmRzLm1hcCgob3B0aW9uUmVjb3JkOiBSZWNvcmRKU09OKSA9PiAoe1xuICAgICAgdmFsdWU6IG9wdGlvblJlY29yZC5pZCxcbiAgICAgIGxhYmVsOiBvcHRpb25SZWNvcmQudGl0bGUsXG4gICAgICByZWNvcmQ6IG9wdGlvblJlY29yZCxcbiAgICB9KSlcbiAgfVxuICBjb25zdCBlcnJvciA9IHJlY29yZD8uZXJyb3JzW3Byb3BlcnR5LnBhdGhdXG5cbiAgY29uc3Qgc2VsZWN0ZWRJZCA9IHJlY29yZD8ucGFyYW1zW3Byb3BlcnR5LnBhdGhdIGFzIHN0cmluZyB8IHVuZGVmaW5lZFxuICBjb25zdCBbbG9hZGVkUmVjb3JkLCBzZXRMb2FkZWRSZWNvcmRdID0gdXNlU3RhdGU8UmVjb3JkSlNPTiB8IHVuZGVmaW5lZD4oKVxuICBjb25zdCBbbG9hZGluZ1JlY29yZCwgc2V0TG9hZGluZ1JlY29yZF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBzZWxlY3RlZFZhbHVlID0gcmVjb3JkPy5wb3B1bGF0ZWRbcHJvcGVydHkucGF0aF0gPz8gbG9hZGVkUmVjb3JkXG4gIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gKHNlbGVjdGVkSWQgJiYgc2VsZWN0ZWRWYWx1ZSkgPyB7XG4gICAgdmFsdWU6IHNlbGVjdGVkVmFsdWUuaWQsXG4gICAgbGFiZWw6IHNlbGVjdGVkVmFsdWUudGl0bGUsXG4gIH0gOiB7XG4gICAgdmFsdWU6ICcnLFxuICAgIGxhYmVsOiAnJyxcbiAgfVxuICBjb25zdCBzdHlsZXMgPSBzZWxlY3RTdHlsZXModGhlbWUpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkVmFsdWUgJiYgc2VsZWN0ZWRJZCkge1xuICAgICAgc2V0TG9hZGluZ1JlY29yZChjID0+IGMgKyAxKVxuICAgICAgY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXG4gICAgICBhcGkucmVjb3JkQWN0aW9uKHtcbiAgICAgICAgYWN0aW9uTmFtZTogJ3Nob3cnLFxuICAgICAgICByZXNvdXJjZUlkLFxuICAgICAgICByZWNvcmRJZDogc2VsZWN0ZWRJZCxcbiAgICAgIH0pLnRoZW4oKHsgZGF0YSB9OiBhbnkpID0+IHtcbiAgICAgICAgc2V0TG9hZGVkUmVjb3JkKGRhdGEucmVjb3JkKVxuICAgICAgfSkuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIHNldExvYWRpbmdSZWNvcmQoYyA9PiBjIC0gMSlcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbc2VsZWN0ZWRWYWx1ZSwgc2VsZWN0ZWRJZCwgcmVzb3VyY2VJZF0pXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUdyb3VwIGVycm9yPXtCb29sZWFuKGVycm9yKX0+XG4gICAgICA8UHJvcGVydHlMYWJlbCBwcm9wZXJ0eT17cHJvcGVydHl9IC8+XG4gICAgICA8U2VsZWN0XG4gICAgICAgIGNhY2hlT3B0aW9uc1xuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRPcHRpb259XG4gICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICBkZWZhdWx0T3B0aW9uc1xuICAgICAgICBsb2FkT3B0aW9ucz17bG9hZE9wdGlvbnN9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIGlzQ2xlYXJhYmxlXG4gICAgICAgIGlzRGlzYWJsZWQ9e3Byb3BlcnR5LmlzRGlzYWJsZWR9XG4gICAgICAgIGlzTG9hZGluZz17bG9hZGluZ1JlY29yZH1cbiAgICAgICAgey4uLnByb3BlcnR5LnByb3BzfVxuICAgICAgLz5cbiAgICAgIDxGb3JtTWVzc2FnZT57ZXJyb3I/Lm1lc3NhZ2V9PC9Gb3JtTWVzc2FnZT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoRWRpdClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEJ1dHRvbkNTUywgQm94IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgVmlld0hlbHBlcnMgZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuaW1wb3J0IHsgUmVjb3JkSlNPTiwgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBwcm9wZXJ0eTogUHJvcGVydHlKU09OXG4gICAgcmVjb3JkOiBSZWNvcmRKU09OXG59XG5cbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQ8YW55PihMaW5rKWBcbiAgICAke0J1dHRvbkNTU307XG4gICAgcGFkZGluZy1sZWZ0OiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuc3BhY2UueHN9O1xuICAgIHBhZGRpbmctcmlnaHQ6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5zcGFjZS54c307XG5gXG5cbmNvbnN0IFJlZmVyZW5jZVZhbHVlOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQgfSA9IHByb3BzXG5cbiAgICBjb25zdCBoID0gbmV3IFZpZXdIZWxwZXJzKClcbiAgICBjb25zdCByZWZJZCA9IHJlY29yZC5wYXJhbXNbcHJvcGVydHkucGF0aF1cbiAgICBjb25zdCBwb3B1bGF0ZWQgPSByZWNvcmQucG9wdWxhdGVkW3Byb3BlcnR5LnBhdGhdXG4gICAgY29uc3QgdmFsdWUgPSAocG9wdWxhdGVkICYmIHBvcHVsYXRlZC50aXRsZSkgfHwgcmVmSWRcblxuICAgIGlmICghcHJvcGVydHkucmVmZXJlbmNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBwcm9wZXJ0eTogXCIke3Byb3BlcnR5LnBhdGh9XCIgZG9lcyBub3QgaGF2ZSBhIHJlZmVyZW5jZWBcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgcG9wdWxhdGVkICYmXG4gICAgICAgIHBvcHVsYXRlZC5yZWNvcmRBY3Rpb25zICYmXG4gICAgICAgIHBvcHVsYXRlZC5yZWNvcmRBY3Rpb25zLmZpbmQoKGEpID0+IGEubmFtZSA9PT0gJ3Nob3cnKVxuICAgICkge1xuICAgICAgICBjb25zdCBocmVmID0gaC5yZWNvcmRBY3Rpb25Vcmwoe1xuICAgICAgICAgICAgcmVzb3VyY2VJZDogcHJvcGVydHkucmVmZXJlbmNlLFxuICAgICAgICAgICAgcmVjb3JkSWQ6IHJlZklkLFxuICAgICAgICAgICAgYWN0aW9uTmFtZTogJ3Nob3cnLFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFN0eWxlZExpbmsgdmFyaWFudD1cInRleHRcIiB0bz17aHJlZn0+XG4gICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgPC9TdHlsZWRMaW5rPlxuICAgICAgICApXG4gICAgfVxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIDxCb3ggc3R5bGU9e3sgZm9udFN0eWxlOiAnaXRhbGljJyB9fT5ub3Qgc2V0PC9Cb3g+XG4gICAgfVxuICAgIHJldHVybiA8c3Bhbj57dmFsdWV9PC9zcGFuPlxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWZlcmVuY2VWYWx1ZVxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVmFsdWVHcm91cCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFJlZmVyZW5jZVZhbHVlIGZyb20gJy4vcmVmZXJlbmNlLXZhbHVlJ1xuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxFZGl0UHJvcGVydHlQcm9wcz4ge1xuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQgfSA9IHRoaXMucHJvcHNcblxuICAgIHJldHVybiAoXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgICA8UmVmZXJlbmNlVmFsdWVcbiAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAgIC8+XG4gICAgICA8L1ZhbHVlR3JvdXA+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBSZWZlcmVuY2VWYWx1ZSBmcm9tICcuL3JlZmVyZW5jZS12YWx1ZSdcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RWRpdFByb3BlcnR5UHJvcHM+IHtcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWZlcmVuY2VWYWx1ZVxuICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgIHJlY29yZD17cmVjb3JkfVxuICAgICAgLz5cbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0L2FzeW5jJ1xuaW1wb3J0IHsgVGhlbWVQcm9wcywgRGVmYXVsdFRoZW1lLCB3aXRoVGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEZvcm1Hcm91cCwgTGFiZWwsIGZpbHRlclN0eWxlcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IEFwaUNsaWVudCBmcm9tICcuLi8uLi8uLi91dGlscy9hcGktY2xpZW50J1xuaW1wb3J0IHsgRmlsdGVyUHJvcGVydHlQcm9wcywgU2VsZWN0UmVjb3JkIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxudHlwZSBDb21iaW5lZFByb3BzID0gRmlsdGVyUHJvcGVydHlQcm9wcyAmIFRoZW1lUHJvcHM8RGVmYXVsdFRoZW1lPlxuXG5jbGFzcyBGaWx0ZXIgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PENvbWJpbmVkUHJvcHM+IHtcbiAgcHJpdmF0ZSBhcGk6IEFwaUNsaWVudFxuXG4gIHByaXZhdGUgb3B0aW9uczogQXJyYXk8U2VsZWN0UmVjb3JkPlxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDb21iaW5lZFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5hcGkgPSBuZXcgQXBpQ2xpZW50KClcbiAgICB0aGlzLm9wdGlvbnMgPSBbXVxuICAgIHRoaXMubG9hZE9wdGlvbnMgPSB0aGlzLmxvYWRPcHRpb25zLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShzZWxlY3RlZDogU2VsZWN0UmVjb3JkKTogdm9pZCB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHkgfSA9IHRoaXMucHJvcHNcbiAgICBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCBzZWxlY3RlZCA/IHNlbGVjdGVkLnZhbHVlIDogJycpXG4gIH1cblxuICBhc3luYyBsb2FkT3B0aW9ucyhpbnB1dFZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PHt2YWx1ZTogc3RyaW5nOyBsYWJlbDogc3RyaW5nIH0+PiB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHJlY29yZHMgPSBhd2FpdCB0aGlzLmFwaS5zZWFyY2hSZWNvcmRzKHtcbiAgICAgIHJlc291cmNlSWQ6IHByb3BlcnR5LnJlZmVyZW5jZSBhcyBzdHJpbmcsXG4gICAgICBxdWVyeTogaW5wdXRWYWx1ZSxcbiAgICB9KVxuICAgIHRoaXMub3B0aW9ucyA9IHJlY29yZHMubWFwKHIgPT4gKHsgdmFsdWU6IHIuaWQsIGxhYmVsOiByLnRpdGxlIH0pKVxuICAgIHJldHVybiB0aGlzLm9wdGlvbnNcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIGZpbHRlciwgdGhlbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBmaWx0ZXJbcHJvcGVydHkucGF0aF0gPT09ICd1bmRlZmluZWQnID8gJycgOiBmaWx0ZXJbcHJvcGVydHkucGF0aF1cbiAgICBjb25zdCBzZWxlY3RlZCA9ICh0aGlzLm9wdGlvbnMgfHwgW10pLmZpbmQobyA9PiBvLnZhbHVlID09PSB2YWx1ZSlcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgPExhYmVsPntwcm9wZXJ0eS5sYWJlbH08L0xhYmVsPlxuICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgdmFsdWU9e3R5cGVvZiBzZWxlY3RlZCA9PT0gJ3VuZGVmaW5lZCcgPyAnJyA6IHNlbGVjdGVkfVxuICAgICAgICAgIGlzQ2xlYXJhYmxlXG4gICAgICAgICAgY2FjaGVPcHRpb25zXG4gICAgICAgICAgc3R5bGVzPXtmaWx0ZXJTdHlsZXModGhlbWUpfVxuICAgICAgICAgIGxvYWRPcHRpb25zPXt0aGlzLmxvYWRPcHRpb25zfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICBkZWZhdWx0T3B0aW9uc1xuICAgICAgICAvPlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhUaGVtZShGaWx0ZXIpXG4iLCJcbmltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFZhbHVlR3JvdXAgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvdyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RWRpdFByb3BlcnR5UHJvcHM+IHtcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSB0aGlzLnByb3BzXG5cbiAgICBjb25zdCB2YWx1ZSA9IHJlY29yZC5wYXJhbXNbcHJvcGVydHkucGF0aF0gfHwgJydcblxuICAgIHJldHVybiAoXG4gICAgICA8VmFsdWVHcm91cCBsYWJlbD17cHJvcGVydHkubGFiZWx9PlxuICAgICAgICB7dmFsdWUuc3BsaXQoLyg/OlxcclxcbnxcXHJ8XFxuKS9nKS5tYXAoKGxpbmUsIGkpID0+IChcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aX0+XG4gICAgICAgICAgICB7bGluZX1cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICkpfVxuICAgICAgPC9WYWx1ZUdyb3VwPlxuICAgIClcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovXG5pbXBvcnQgUmVhY3QsIHsgbWVtbywgdXNlU3RhdGUsIEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IElucHV0LCBGb3JtR3JvdXAsIEZvcm1NZXNzYWdlIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyByZWNvcmRQcm9wZXJ0eUlzRXF1YWwgfSBmcm9tICcuLi9yZWNvcmQtcHJvcGVydHktaXMtZXF1YWwnXG5pbXBvcnQgeyBQcm9wZXJ0eUxhYmVsIH0gZnJvbSAnLi4vdXRpbHMvcHJvcGVydHktbGFiZWwnXG5cbmNvbnN0IEVkaXQ6IEZDPEVkaXRQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IG9uQ2hhbmdlLCBwcm9wZXJ0eSwgcmVjb3JkIH0gPSBwcm9wc1xuICBjb25zdCBwcm9wVmFsdWUgPSByZWNvcmQucGFyYW1zPy5bcHJvcGVydHkucGF0aF0gPz8gJydcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShwcm9wVmFsdWUpXG4gIGNvbnN0IGVycm9yID0gcmVjb3JkLmVycm9ycz8uW3Byb3BlcnR5LnBhdGhdXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IHByb3BWYWx1ZSkge1xuICAgICAgc2V0VmFsdWUocHJvcFZhbHVlKVxuICAgIH1cbiAgfSwgW3Byb3BWYWx1ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUdyb3VwIGVycm9yPXtCb29sZWFuKGVycm9yKX0+XG4gICAgICA8UHJvcGVydHlMYWJlbCBwcm9wZXJ0eT17cHJvcGVydHl9IC8+XG4gICAgICA8SW5wdXRcbiAgICAgICAgYXM9XCJ0ZXh0YXJlYVwiXG4gICAgICAgIHJvd3M9eyh2YWx1ZS5tYXRjaCgvXFxuL2cpIHx8IFtdKS5sZW5ndGggKyAxfVxuICAgICAgICBpZD17cHJvcGVydHkucGF0aH1cbiAgICAgICAgbmFtZT17cHJvcGVydHkucGF0aH1cbiAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBvbkJsdXI9eygpID0+IG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIHZhbHVlKX1cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBkaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cbiAgICAgICAgey4uLnByb3BlcnR5LnByb3BzfVxuICAgICAgLz5cbiAgICAgIDxGb3JtTWVzc2FnZT57ZXJyb3IgJiYgZXJyb3IubWVzc2FnZX08L0Zvcm1NZXNzYWdlPlxuICAgIDwvRm9ybUdyb3VwPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW8oRWRpdCwgcmVjb3JkUHJvcGVydHlJc0VxdWFsKVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIG1lbW8sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgSW5wdXQsIEZvcm1Hcm91cCwgSW5wdXRHcm91cCwgRm9ybU1lc3NhZ2UsIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IHsgcmVjb3JkUHJvcGVydHlJc0VxdWFsIH0gZnJvbSAnLi4vcmVjb3JkLXByb3BlcnR5LWlzLWVxdWFsJ1xuaW1wb3J0IHsgUHJvcGVydHlMYWJlbCB9IGZyb20gJy4uL3V0aWxzL3Byb3BlcnR5LWxhYmVsJ1xuXG5jb25zdCBFZGl0OiBSZWFjdC5GQzxFZGl0UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9ID0gcHJvcHNcbiAgY29uc3QgcHJvcFZhbHVlID0gcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXVxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKHByb3BWYWx1ZSlcbiAgY29uc3QgZXJyb3IgPSByZWNvcmQuZXJyb3JzICYmIHJlY29yZC5lcnJvcnNbcHJvcGVydHkucGF0aF1cbiAgY29uc3QgW2lzSW5wdXQsIHNldElzSW5wdXRdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodmFsdWUgIT09IHByb3BWYWx1ZSkge1xuICAgICAgc2V0VmFsdWUocHJvcFZhbHVlKVxuICAgIH1cbiAgfSwgW3Byb3BWYWx1ZV0pXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUdyb3VwIGVycm9yPXshIWVycm9yfT5cbiAgICAgIDxQcm9wZXJ0eUxhYmVsIHByb3BlcnR5PXtwcm9wZXJ0eX0gLz5cbiAgICAgIDxJbnB1dEdyb3VwPlxuICAgICAgICA8SW5wdXRcbiAgICAgICAgICB0eXBlPXtpc0lucHV0ID8gJ2lucHV0JyA6ICdwYXNzd29yZCd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRcIlxuICAgICAgICAgIGlkPXtwcm9wZXJ0eS5wYXRofVxuICAgICAgICAgIG5hbWU9e3Byb3BlcnR5LnBhdGh9XG4gICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgb25CbHVyPXsoKSA9PiBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCB2YWx1ZSl9XG4gICAgICAgICAgb25LZXlEb3duPXtlID0+IGUua2V5Q29kZSA9PT0gMTMgJiYgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgdmFsdWUpfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZSA/PyAnJ31cbiAgICAgICAgICBkaXNhYmxlZD17cHJvcGVydHkuaXNEaXNhYmxlZH1cbiAgICAgICAgICB7Li4ucHJvcGVydHkucHJvcHN9XG4gICAgICAgIC8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICB2YXJpYW50PXtpc0lucHV0ID8gJ3ByaW1hcnknIDogJ3RleHQnfVxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHNpemU9XCJpY29uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0lucHV0KCFpc0lucHV0KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxJY29uIGljb249XCJWaWV3XCIgLz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0lucHV0R3JvdXA+XG4gICAgICA8Rm9ybU1lc3NhZ2U+e2Vycm9yICYmIGVycm9yLm1lc3NhZ2V9PC9Gb3JtTWVzc2FnZT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbClcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBFZGl0IGZyb20gJy4vZWRpdCdcblxuZXhwb3J0IHtcbiAgRWRpdCBhcyBlZGl0LFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFJlYWN0Q29tcG9uZW50TGlrZSB9IGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgeyBCb3ggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4uL2FwcC9lcnJvci1ib3VuZGFyeSdcblxuaW1wb3J0ICogYXMgQXJyYXlUeXBlIGZyb20gJy4vYXJyYXknXG5pbXBvcnQgKiBhcyBNaXhlZFR5cGUgZnJvbSAnLi9taXhlZCdcblxuaW1wb3J0ICogYXMgZGVmYXVsdFR5cGUgZnJvbSAnLi9kZWZhdWx0LXR5cGUnXG5pbXBvcnQgKiBhcyBib29sZWFuIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCAqIGFzIGRhdGV0aW1lIGZyb20gJy4vZGF0ZXRpbWUnXG5pbXBvcnQgKiBhcyByaWNodGV4dCBmcm9tICcuL3JpY2h0ZXh0J1xuaW1wb3J0ICogYXMgcmVmZXJlbmNlIGZyb20gJy4vcmVmZXJlbmNlJ1xuaW1wb3J0ICogYXMgdGV4dGFyZWEgZnJvbSAnLi90ZXh0YXJlYSdcbmltcG9ydCAqIGFzIHBhc3N3b3JkIGZyb20gJy4vcGFzc3dvcmQnXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlDb21wb25lbnRQcm9wcyB9IGZyb20gJy4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IFByb3BlcnR5VHlwZSB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvYWRhcHRlcnMvcHJvcGVydHkvYmFzZS1wcm9wZXJ0eSdcbmltcG9ydCB7IFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5cbmxldCBnbG9iYWxBbnk6IGFueSA9IHt9XG5cbnRyeSB7XG4gIGdsb2JhbEFueSA9IHdpbmRvd1xufSBjYXRjaCAoZXJyb3IpIHtcbiAgaWYgKGVycm9yLm1lc3NhZ2UgIT09ICd3aW5kb3cgaXMgbm90IGRlZmluZWQnKSB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxufVxuXG5jb25zdCB0eXBlczogUmVjb3JkPFByb3BlcnR5VHlwZSwgYW55PiA9IHtcbiAgdGV4dGFyZWEsXG4gIGJvb2xlYW4sXG4gIGRhdGV0aW1lLFxuICByZWZlcmVuY2UsXG4gIHBhc3N3b3JkLFxuICBkYXRlOiBkYXRldGltZSxcbiAgcmljaHRleHQsXG4gIHN0cmluZzogZGVmYXVsdFR5cGUsXG4gIG51bWJlcjogZGVmYXVsdFR5cGUsXG4gIGZsb2F0OiBkZWZhdWx0VHlwZSxcbiAgbWl4ZWQ6IG51bGwsXG59XG5cbi8qKlxuICogQGxvYWQgLi9iYXNlLXByb3BlcnR5LWNvbXBvbmVudC5kb2MubWRcbiAqIEBjb21wb25lbnRcbiAqIEBuYW1lIEJhc2VQcm9wZXJ0eUNvbXBvbmVudFxuICogQHN1YmNhdGVnb3J5IEFwcGxpY2F0aW9uXG4gKiBAY2xhc3NcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuY29uc3QgQmFzZVByb3BlcnR5Q29tcG9uZW50OiBSZWFjdC5GQzxCYXNlUHJvcGVydHlDb21wb25lbnRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eTogYmFzZVByb3BlcnR5LCByZXNvdXJjZSwgcmVjb3JkLCBmaWx0ZXIsIHdoZXJlLCBvbkNoYW5nZSwgZGF0YSB9ID0gcHJvcHNcblxuICBjb25zdCBwcm9wZXJ0eTogUHJvcGVydHlKU09OID0gdXNlTWVtbygoKSA9PiAoe1xuICAgIC4uLmJhc2VQcm9wZXJ0eSxcbiAgICAvLyB3ZSBmaWxsIHRoZSBwYXRoIGlmIGl0IGlzIG5vdCB0aGVyZS4gVGhhdCBpcyB3aHkgYWxsIHRoZSBhY3R1YWwgQ29tcG9uZW50IFJlbmRlcmVycyBhcmVcbiAgICAvLyBjYWxsZWQgd2l0aCB0aGUgcGF0aCBzZXQgdG8gdGhpcyByb290IHBhdGguIE5leHQgbWl4ZWQgYW5kIGFycmF5IGNvbXBvbmVudHMgYWRkcyB0byB0aGlzXG4gICAgLy8gcGF0aCBlaXRoZXIgaW5kZXggKGZvciBhcnJheSkgb3Igc3ViUHJvcGVydHkgbmFtZS5cbiAgICBwYXRoOiAoYmFzZVByb3BlcnR5IGFzIFByb3BlcnR5SlNPTikucGF0aCB8fCBiYXNlUHJvcGVydHkucHJvcGVydHlQYXRoLFxuICB9KSwgW2Jhc2VQcm9wZXJ0eV0pXG5cbiAgY29uc3QgdGVzdElkID0gYHByb3BlcnR5LSR7d2hlcmV9LSR7cHJvcGVydHkucGF0aH1gXG5cbiAgbGV0IENvbXBvbmVudDogUmVhY3RDb21wb25lbnRMaWtlID0gKHR5cGVzW3Byb3BlcnR5LnR5cGVdICYmIHR5cGVzW3Byb3BlcnR5LnR5cGVdW3doZXJlXSlcbiAgfHwgZGVmYXVsdFR5cGVbd2hlcmVdXG5cbiAgaWYgKHByb3BlcnR5LmNvbXBvbmVudHMgJiYgcHJvcGVydHkuY29tcG9uZW50c1t3aGVyZV0pIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBwcm9wZXJ0eS5jb21wb25lbnRzW3doZXJlXVxuICAgIGlmICghY29tcG9uZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRoZXJlIGlzIG5vIFwiJHtwcm9wZXJ0eS5wYXRofS5jb21wb25lbnRzLiR7d2hlcmV9XCJgKVxuICAgIH1cbiAgICBDb21wb25lbnQgPSBnbG9iYWxBbnkuQWRtaW5Ccm8uVXNlckNvbXBvbmVudHNbY29tcG9uZW50XVxuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgPEJveCBkYXRhLXRlc3RpZD17dGVzdElkfT5cbiAgICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgICByZWNvcmQ9e3JlY29yZH1cbiAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgd2hlcmU9e3doZXJlfVxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICApXG4gIH1cblxuICBjb25zdCBBcnJheSA9IEFycmF5VHlwZVt3aGVyZV1cbiAgY29uc3QgTWl4ZWQgPSBNaXhlZFR5cGVbd2hlcmVdXG5cbiAgaWYgKGJhc2VQcm9wZXJ0eS5pc0FycmF5KSB7XG4gICAgaWYgKCFBcnJheSkgeyByZXR1cm4gKDxkaXYgLz4pIH1cbiAgICByZXR1cm4gKFxuICAgICAgPEFycmF5XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICBJdGVtQ29tcG9uZW50PXtCYXNlUHJvcGVydHlDb21wb25lbnR9XG4gICAgICAgIHRlc3RJZD17dGVzdElkfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICBpZiAoYmFzZVByb3BlcnR5LnR5cGUgPT09ICdtaXhlZCcpIHtcbiAgICBpZiAoIU1peGVkKSB7IHJldHVybiAoPGRpdiAvPikgfVxuICAgIHJldHVybiAoXG4gICAgICA8TWl4ZWRcbiAgICAgICAgey4uLnByb3BzfVxuICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgIEl0ZW1Db21wb25lbnQ9e0Jhc2VQcm9wZXJ0eUNvbXBvbmVudH1cbiAgICAgICAgdGVzdElkPXt0ZXN0SWR9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEVycm9yQm91bmRhcnk+XG4gICAgICA8Qm94IGRhdGEtdGVzdGlkPXt0ZXN0SWR9PlxuICAgICAgICA8Q29tcG9uZW50XG4gICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICByZWNvcmQ9e3JlY29yZH1cbiAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgd2hlcmU9e3doZXJlfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9FcnJvckJvdW5kYXJ5PlxuICApXG59XG5leHBvcnQge1xuICBCYXNlUHJvcGVydHlDb21wb25lbnQgYXMgZGVmYXVsdCxcbiAgQmFzZVByb3BlcnR5Q29tcG9uZW50LFxufVxuIiwiaW1wb3J0IEJhc2VQcm9wZXJ0eUNvbXBvbmVudCBmcm9tICcuL2Jhc2UtcHJvcGVydHktY29tcG9uZW50J1xuaW1wb3J0ICogYXMgZGVmYXVsdFR5cGUgZnJvbSAnLi9kZWZhdWx0LXR5cGUnXG5pbXBvcnQgKiBhcyBib29sZWFuIGZyb20gJy4vYm9vbGVhbidcbmltcG9ydCAqIGFzIGRhdGV0aW1lIGZyb20gJy4vZGF0ZXRpbWUnXG5pbXBvcnQgKiBhcyByaWNodGV4dCBmcm9tICcuL3JpY2h0ZXh0J1xuaW1wb3J0ICogYXMgcmVmZXJlbmNlIGZyb20gJy4vcmVmZXJlbmNlJ1xuaW1wb3J0ICogYXMgdGV4dGFyZWEgZnJvbSAnLi90ZXh0YXJlYSdcbmltcG9ydCAqIGFzIHBhc3N3b3JkIGZyb20gJy4vcGFzc3dvcmQnXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlDb21wb25lbnRQcm9wcyB9IGZyb20gJy4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxudHlwZSBCYXNlUHJvcGVydHlDb21wb25lbnRUeXBlID0gUmVhY3QuRkM8QmFzZVByb3BlcnR5Q29tcG9uZW50UHJvcHM+ICYge1xuICBEZWZhdWx0VHlwZTogYW55O1xuICBCb29sZWFuOiBhbnk7XG4gIERhdGVUaW1lOiBhbnk7XG4gIFJpY2hUZXh0OiBhbnk7XG4gIFJlZmVyZW5jZTogYW55O1xuICBUZXh0QXJlYTogYW55O1xuICBQYXNzd29yZDogYW55O1xufVxuXG5mdW5jdGlvbiBjYW1lbGl6ZVByb3BlcnR5VHlwZTxUPih0eXBlOiB7W2tleTogc3RyaW5nXTogVH0pOiB7W2tleTogc3RyaW5nXTogVH0ge1xuICByZXR1cm4ge1xuICAgIEVkaXQ6IHR5cGUuZWRpdCxcbiAgICBTaG93OiB0eXBlLnNob3csXG4gICAgTGlzdDogdHlwZS5saXN0LFxuICAgIEZpbHRlcjogdHlwZS5maWx0ZXIsXG4gIH1cbn1cblxuY29uc3QgQmFzZVByb3BlcnR5Q29tcG9uZW50RXh0ZW5kZWQ6IEJhc2VQcm9wZXJ0eUNvbXBvbmVudFR5cGUgPSBPYmplY3QuYXNzaWduKFxuICBCYXNlUHJvcGVydHlDb21wb25lbnQsIHtcbiAgICBEZWZhdWx0VHlwZTogY2FtZWxpemVQcm9wZXJ0eVR5cGUoZGVmYXVsdFR5cGUpLFxuICAgIEJvb2xlYW46IGNhbWVsaXplUHJvcGVydHlUeXBlKGJvb2xlYW4pLFxuICAgIERhdGVUaW1lOiBjYW1lbGl6ZVByb3BlcnR5VHlwZShkYXRldGltZSksXG4gICAgUmljaFRleHQ6IGNhbWVsaXplUHJvcGVydHlUeXBlKHJpY2h0ZXh0KSxcbiAgICBSZWZlcmVuY2U6IGNhbWVsaXplUHJvcGVydHlUeXBlKHJlZmVyZW5jZSksXG4gICAgVGV4dEFyZWE6IGNhbWVsaXplUHJvcGVydHlUeXBlKHRleHRhcmVhKSxcbiAgICBQYXNzd29yZDogY2FtZWxpemVQcm9wZXJ0eVR5cGUocGFzc3dvcmQpLFxuICB9LFxuKVxuXG5cbmV4cG9ydCB7XG4gIEJhc2VQcm9wZXJ0eUNvbXBvbmVudEV4dGVuZGVkIGFzIGRlZmF1bHQsXG4gIEJhc2VQcm9wZXJ0eUNvbXBvbmVudEV4dGVuZGVkIGFzIEJhc2VQcm9wZXJ0eUNvbXBvbmVudCxcbn1cblxuZXhwb3J0ICogZnJvbSAnLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuZXhwb3J0ICogZnJvbSAnLi91dGlscydcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEJveCwgY3NzQ2xhc3MgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IFJlY29yZEpTT04sIFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgVmlld0hlbHBlcnMgZnJvbSAnLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuXG5leHBvcnQgY29uc3QgQnJlYWRjcnVtYkxpbmsgPSBzdHlsZWQoTGluaylgXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuY29sb3JzLmdyZXk0MH07XG4gIGZvbnQtZmFtaWx5OiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuZm9udH07XG4gIGxpbmUtaGVpZ2h0OiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUubGluZUhlaWdodHMuZGVmYXVsdH07XG4gIGZvbnQtc2l6ZTogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmZvbnRTaXplcy5kZWZhdWx0fTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuY29sb3JzLnByaW1hcnkxMDB9O1xuICB9XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJy8nO1xuICAgIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLnNwYWNlLmRlZmF1bHR9O1xuICB9XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgIH1cbiAgfVxuYFxuXG4vKipcbiAqIEBtZW1iZXJvZiBCcmVhZGNydW1ic1xuICovXG5leHBvcnQgdHlwZSBCcmVhZGNydW1iUHJvcHMgPSB7XG4gIC8qKlxuICAgKiBSZXNvdXJjZVxuICAgKi9cbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcbiAgLyoqXG4gICAqIHJlY29yZFxuICAgKi9cbiAgcmVjb3JkPzogUmVjb3JkSlNPTiB8IG51bGw7XG4gIC8qKlxuICAgKiBOYW1lIG9mIGFuIGFjdGlvblxuICAgKi9cbiAgYWN0aW9uTmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBjb21wb25lbnRcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBCcmVhZGNydW1iczogUmVhY3QuRkM8QnJlYWRjcnVtYlByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlc291cmNlLCByZWNvcmQsIGFjdGlvbk5hbWUgfSA9IHByb3BzXG5cbiAgY29uc3QgYWN0aW9uID0gcmVzb3VyY2UuYWN0aW9ucy5maW5kKGEgPT4gYS5uYW1lID09PSBhY3Rpb25OYW1lKVxuICBjb25zdCBoID0gbmV3IFZpZXdIZWxwZXJzKClcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleEdyb3c9ezF9IGNsYXNzTmFtZT17Y3NzQ2xhc3MoJ0JyZWFkY3J1bWJzJyl9PlxuICAgICAgPEJyZWFkY3J1bWJMaW5rIHRvPXtoLmRhc2hib2FyZFVybCgpfT5EYXNoYm9hcmQ8L0JyZWFkY3J1bWJMaW5rPlxuICAgICAgPEJyZWFkY3J1bWJMaW5rIHRvPXtyZXNvdXJjZS5ocmVmID8gcmVzb3VyY2UuaHJlZiA6ICcvJ30gY2xhc3NOYW1lPXtyZWNvcmQgPyAnaXMtYWN0aXZlJyA6ICcnfT5cbiAgICAgICAge3Jlc291cmNlLm5hbWV9XG4gICAgICA8L0JyZWFkY3J1bWJMaW5rPlxuICAgICAgeyBhY3Rpb24gJiYgYWN0aW9uLm5hbWUgIT09ICdsaXN0JyAmJiA8QnJlYWRjcnVtYkxpbmsgdG89XCIjXCI+e2FjdGlvbi5sYWJlbH08L0JyZWFkY3J1bWJMaW5rPn1cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCcmVhZGNydW1ic1xuIiwiaW1wb3J0IHsgQnV0dG9uR3JvdXBQcm9wcywgQnV0dG9uSW5Hcm91cFByb3BzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBhY3Rpb25IcmVmLCBBY3Rpb25KU09OLCBidWlsZEFjdGlvblRlc3RJZCB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBEaWZmZXJlbnRBY3Rpb25QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi9ob29rcydcblxuZXhwb3J0IHR5cGUgYWN0aW9uc1RvQnV0dG9uR3JvdXBPcHRpb25zID0ge1xuICBhY3Rpb25zOiBBcnJheTxBY3Rpb25KU09OPjtcbiAgcGFyYW1zOiBEaWZmZXJlbnRBY3Rpb25QYXJhbXM7XG4gIGhhbmRsZUNsaWNrOiBCdXR0b25Jbkdyb3VwUHJvcHNbJ29uQ2xpY2snXTtcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbnNUb0J1dHRvbkdyb3VwID0gKFxuICBvcHRpb25zOiBhY3Rpb25zVG9CdXR0b25Hcm91cE9wdGlvbnMsXG4pOiBCdXR0b25Hcm91cFByb3BzWydidXR0b25zJ10gPT4ge1xuICBjb25zdCB7IGFjdGlvbnMsIHBhcmFtcywgaGFuZGxlQ2xpY2sgfSA9IG9wdGlvbnNcbiAgY29uc3QgYnV0dG9ucyA9IGFjdGlvbnMubWFwKChhY3Rpb24pID0+IHtcbiAgICBjb25zdCBocmVmID0gYWN0aW9uSHJlZihhY3Rpb24sIHBhcmFtcylcbiAgICByZXR1cm4ge1xuICAgICAgaWNvbjogYWN0aW9uLmljb24sXG4gICAgICBsYWJlbDogYWN0aW9uLmxhYmVsLFxuICAgICAgdmFyaWFudDogYWN0aW9uLnZhcmlhbnQsXG4gICAgICBzb3VyY2U6IGFjdGlvbixcbiAgICAgIGhyZWY6IGhyZWYgfHwgdW5kZWZpbmVkLFxuICAgICAgLy8gd2hlbiBocmVmIGlzIG5vdCBkZWZpbmVkIC0gaGFuZGxlIGNsaWNrIHNob3VsZCBhbHNvIGJlIG5vdCBkZWZpbmVkXG4gICAgICAvLyBUaGlzIHByZXZlbnRzIGZyb20gXCJjdXJzb3I6IHBvaW50ZXI7XCJcbiAgICAgIG9uQ2xpY2s6IGhyZWYgPyBoYW5kbGVDbGljayA6IHVuZGVmaW5lZCxcbiAgICAgICdkYXRhLXRlc3RpZCc6IGJ1aWxkQWN0aW9uVGVzdElkKGFjdGlvbiksXG4gICAgICBidXR0b25zOiBbXSxcbiAgICB9XG4gIH0pXG5cbiAgLy8gbmVzdGluZyBidXR0b25zXG4gIGNvbnN0IGJ1dHRvbnNNYXAgPSBidXR0b25zLnJlZHVjZSgobWVtbywgYnV0dG9uKSA9PiB7XG4gICAgY29uc3QgYWN0aW9uID0gYnV0dG9uLnNvdXJjZVxuICAgIGlmIChhY3Rpb24ucGFyZW50KSB7XG4gICAgICBjb25zdCBwYXJlbnQ6IEJ1dHRvbkluR3JvdXBQcm9wcyA9IG1lbW9bYWN0aW9uLnBhcmVudF1cbiAgICAgICAgfHwgYnV0dG9ucy5maW5kKGJ0biA9PiBidG4uc291cmNlLm5hbWUgPT09IGFjdGlvbi5wYXJlbnQpXG4gICAgICAgIHx8IHtcbiAgICAgICAgICBsYWJlbDogYWN0aW9uLnBhcmVudCxcbiAgICAgICAgfVxuXG4gICAgICBwYXJlbnQuYnV0dG9ucyA9IHBhcmVudC5idXR0b25zIHx8IFtdXG4gICAgICBwYXJlbnQuYnV0dG9ucy5wdXNoKGJ1dHRvbilcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLm1lbW8sXG4gICAgICAgIFthY3Rpb24ucGFyZW50XTogcGFyZW50LFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgLi4ubWVtbyxcbiAgICAgIFtidXR0b24uc291cmNlLm5hbWVdOiBidXR0b24sXG4gICAgfVxuICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBCdXR0b25Jbkdyb3VwUHJvcHM+KVxuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhidXR0b25zTWFwKVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IExpbmsgYXMgUm91dGVyTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQge1xuICBCdXR0b25DU1MsXG4gIEJ1dHRvblByb3BzLFxuICBJY29uLFxufSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBWaWV3SGVscGVycyBmcm9tICcuLi8uLi8uLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXG5cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZCgoeyByb3VuZGVkLCAuLi5yZXN0IH0pID0+IDxSb3V0ZXJMaW5rIHsuLi5yZXN0fSAvPik8QnV0dG9uUHJvcHM+YCR7QnV0dG9uQ1NTfWBcbmNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxuXG5leHBvcnQgdHlwZSBTdHlsZWRCYWNrQnV0dG9uUHJvcHMgPSB7XG4gIHJlc291cmNlSWQ6IHN0cmluZztcbiAgc2hvd0luRHJhd2VyOiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgU3R5bGVkQmFja0J1dHRvbjogUmVhY3QuRkM8U3R5bGVkQmFja0J1dHRvblByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlc291cmNlSWQsIHNob3dJbkRyYXdlciB9ID0gcHJvcHNcbiAgY29uc3QgY3NzQ2xvc2VJY29uID0gc2hvd0luRHJhd2VyID8gJ0NoZXZyb25SaWdodCcgOiAnQ2hldnJvbkxlZnQnXG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkTGlua1xuICAgICAgc2l6ZT1cImljb25cIlxuICAgICAgdG89e2gucmVzb3VyY2VVcmwoeyByZXNvdXJjZUlkLCBzZWFyY2g6IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggfSl9XG4gICAgICByb3VuZGVkXG4gICAgICBtcj1cImxnXCJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgID5cbiAgICAgIDxJY29uIGljb249e2Nzc0Nsb3NlSWNvbn0gLz5cbiAgICA8L1N0eWxlZExpbms+XG4gIClcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2FuY2hvci1pcy12YWxpZCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBCYWRnZSwgSDMsIEgyLCBCdXR0b25Hcm91cCwgY3NzQ2xhc3MgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgQnJlYWRjcnVtYnMgZnJvbSAnLi4vYnJlYWRjcnVtYnMnXG5pbXBvcnQgeyBBY3Rpb25IZWFkZXJQcm9wcyB9IGZyb20gJy4vYWN0aW9uLWhlYWRlci1wcm9wcydcbmltcG9ydCB7IGFjdGlvbnNUb0J1dHRvbkdyb3VwIH0gZnJvbSAnLi9hY3Rpb25zLXRvLWJ1dHRvbi1ncm91cCdcbmltcG9ydCB7IFN0eWxlZEJhY2tCdXR0b24gfSBmcm9tICcuL3N0eWxlZC1iYWNrLWJ1dHRvbidcblxuaW1wb3J0IHsgdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiwgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL2FjdGlvbidcblxuLyoqXG4gKiBIZWFkZXIgb2YgYW4gYWN0aW9uLiBJdCByZW5kZXJzIEFjdGlvbiBuYW1lIHdpdGggYnV0dG9ucyBmb3IgYWxsIHRoZSBhY3Rpb25zLlxuICpcbiAqICMjIyBVc2FnZVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgQWN0aW9uSGVhZGVyIH0gZnJvbSAnYWRtaW4tYnJvJ1xuICogYGBgXG4gKlxuICogQGNvbXBvbmVudFxuICogQHN1YmNhdGVnb3J5IEFwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBBY3Rpb25IZWFkZXI6IFJlYWN0LkZDPEFjdGlvbkhlYWRlclByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcmVzb3VyY2UsIHRvZ2dsZUZpbHRlciwgYWN0aW9uUGVyZm9ybWVkLCByZWNvcmQsIGFjdGlvbiwgdGFnLCBvbWl0QWN0aW9ucyxcbiAgfSA9IHByb3BzXG5cbiAgY29uc3QgeyB0cmFuc2xhdGVCdXR0b24gfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCBhY3Rpb25SZXNwb25zZUhhbmRsZXIgPSB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXIoYWN0aW9uUGVyZm9ybWVkKVxuXG4gIGlmIChhY3Rpb24uaGlkZUFjdGlvbkhlYWRlcikge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICBjb25zdCByZXNvdXJjZUlkID0gcmVzb3VyY2UuaWRcbiAgY29uc3QgcGFyYW1zID0geyByZXNvdXJjZUlkLCByZWNvcmRJZDogcmVjb3JkPy5pZCB9XG5cbiAgY29uc3QgaGFuZGxlQWN0aW9uQ2xpY2sgPSAoZXZlbnQsIHNvdXJjZUFjdGlvbjogQWN0aW9uSlNPTik6IHZvaWQgPT4gKFxuICAgIGJ1aWxkQWN0aW9uQ2xpY2tIYW5kbGVyKHtcbiAgICAgIGFjdGlvbjogc291cmNlQWN0aW9uLFxuICAgICAgcGFyYW1zLFxuICAgICAgYWN0aW9uUmVzcG9uc2VIYW5kbGVyLFxuICAgICAgcHVzaDogaGlzdG9yeS5wdXNoLFxuICAgIH0pKGV2ZW50KVxuICApXG5cbiAgY29uc3QgYWN0aW9uQnV0dG9ucyA9IGFjdGlvbnNUb0J1dHRvbkdyb3VwKHtcbiAgICBhY3Rpb25zOiByZWNvcmRcbiAgICAgID8gcmVjb3JkLnJlY29yZEFjdGlvbnMuZmlsdGVyKHJhID0+ICFhY3Rpb24gfHwgYWN0aW9uLm5hbWUgIT09IHJhLm5hbWUpXG4gICAgICAvLyBvbmx5IG5ldyBhY3Rpb24gc2hvdWxkIGJlIHNlZW4gaW4gcmVndWxhciBcIkJpZ1wiIGFjdGlvbnMgcGxhY2VcbiAgICAgIDogcmVzb3VyY2UucmVzb3VyY2VBY3Rpb25zLmZpbHRlcihyYSA9PiByYS5uYW1lID09PSAnbmV3JyAmJiAoIWFjdGlvbiB8fCBhY3Rpb24ubmFtZSAhPT0gcmEubmFtZSkpLFxuICAgIHBhcmFtcyxcbiAgICBoYW5kbGVDbGljazogaGFuZGxlQWN0aW9uQ2xpY2ssXG4gIH0pXG5cbiAgaWYgKHRvZ2dsZUZpbHRlcikge1xuICAgIGFjdGlvbkJ1dHRvbnMucHVzaCh7XG4gICAgICBsYWJlbDogdHJhbnNsYXRlQnV0dG9uKCdmaWx0ZXInLCByZXNvdXJjZS5pZCksXG4gICAgICBvbkNsaWNrOiB0b2dnbGVGaWx0ZXIsXG4gICAgICBpY29uOiAnU2V0dGluZ3NBZGp1c3QnLFxuICAgIH0pXG4gIH1cblxuICAvLyBsaXN0IGFuZCBuZXcgYWN0aW9ucyBhcmUgc3BlY2lhbCBhbmQgYXJlIGFyZSBhbHdheXNcbiAgY29uc3QgY3VzdG9tUmVzb3VyY2VCdXR0b25zID0gYWN0aW9uc1RvQnV0dG9uR3JvdXAoe1xuICAgIGFjdGlvbnM6IHJlc291cmNlLnJlc291cmNlQWN0aW9ucy5maWx0ZXIocmEgPT4gIVsnbGlzdCcsICduZXcnXS5pbmNsdWRlcyhyYS5uYW1lKSksXG4gICAgcGFyYW1zOiB7IHJlc291cmNlSWQgfSxcbiAgICBoYW5kbGVDbGljazogaGFuZGxlQWN0aW9uQ2xpY2ssXG4gIH0pXG5cbiAgY29uc3QgdGl0bGUgPSBhY3Rpb24gPyBhY3Rpb24ubGFiZWwgOiByZXNvdXJjZS5uYW1lXG4gIGNvbnN0IGlzTGlzdCA9IGFjdGlvbiAmJiBhY3Rpb24ubmFtZSA9PT0gJ2xpc3QnXG4gIGNvbnN0IGxpc3RBY3Rpb24gPSByZXNvdXJjZS5yZXNvdXJjZUFjdGlvbnMuZmluZChyYSA9PiByYS5uYW1lID09PSAnbGlzdCcpXG5cbiAgLy8gc3R5bGVkIHdoaWNoIGRpZmZlcnMgaWYgYWN0aW9uIGhlYWRlciBpcyBpbiB0aGUgZHJhd2VyIG9yIG5vdFxuICBjb25zdCBjc3NJc1Jvb3RGbGV4ID0gIWFjdGlvbi5zaG93SW5EcmF3ZXJcbiAgY29uc3QgY3NzSGVhZGVyTVQgPSBhY3Rpb24uc2hvd0luRHJhd2VyID8gJycgOiAnbGcnXG4gIGNvbnN0IGNzc0FjdGlvbnNNQiA9IGFjdGlvbi5zaG93SW5EcmF3ZXIgPyAneGwnIDogJ2RlZmF1bHQnXG4gIGNvbnN0IENzc0hDb21wb25lbnQgPSBhY3Rpb24uc2hvd0luRHJhd2VyID8gSDMgOiBIMlxuXG4gIHJldHVybiAoXG4gICAgPEJveCBjbGFzc05hbWU9e2Nzc0NsYXNzKCdBY3Rpb25IZWFkZXInKX0+XG4gICAgICB7YWN0aW9uLnNob3dJbkRyYXdlciA/ICcnIDogKFxuICAgICAgICA8Qm94IGZsZXggZmxleERpcmVjdGlvbj1cInJvd1wiIHB4PXtbJ2RlZmF1bHQnLCAwXX0+XG4gICAgICAgICAgPEJyZWFkY3J1bWJzIHJlc291cmNlPXtyZXNvdXJjZX0gYWN0aW9uTmFtZT17YWN0aW9uLm5hbWV9IHJlY29yZD17cmVjb3JkfSAvPlxuICAgICAgICAgIDxCb3ggZmxleFNocmluaz17MH0+XG4gICAgICAgICAgICA8QnV0dG9uR3JvdXAgc2l6ZT1cInNtXCIgcm91bmRlZCBidXR0b25zPXtjdXN0b21SZXNvdXJjZUJ1dHRvbnN9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cbiAgICAgIDxCb3ggZGlzcGxheT17WydibG9jaycsIGNzc0lzUm9vdEZsZXggPyAnZmxleCcgOiAnYmxvY2snXX0+XG4gICAgICAgIDxCb3ggbXQ9e2Nzc0hlYWRlck1UfSBmbGV4R3Jvdz17MX0gcHg9e1snZGVmYXVsdCcsIDBdfT5cbiAgICAgICAgICA8Q3NzSENvbXBvbmVudCBtYj1cImxnXCI+XG4gICAgICAgICAgICB7IWlzTGlzdCAmJiBsaXN0QWN0aW9uID8gKFxuICAgICAgICAgICAgICA8U3R5bGVkQmFja0J1dHRvbiByZXNvdXJjZUlkPXtyZXNvdXJjZUlkfSBzaG93SW5EcmF3ZXI9e2FjdGlvbi5zaG93SW5EcmF3ZXJ9IC8+XG4gICAgICAgICAgICApIDogJyd9XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICB7dGFnID8gKDxCYWRnZSB2YXJpYW50PVwicHJpbWFyeVwiIG1sPVwiZGVmYXVsdFwiPnt0YWd9PC9CYWRnZT4pIDogJyd9XG4gICAgICAgICAgPC9Dc3NIQ29tcG9uZW50PlxuICAgICAgICA8L0JveD5cbiAgICAgICAge29taXRBY3Rpb25zID8gJycgOiAoXG4gICAgICAgICAgPEJveCBtdD1cInhsXCIgbWI9e2Nzc0FjdGlvbnNNQn0gZmxleFNocmluaz17MH0+XG4gICAgICAgICAgICA8QnV0dG9uR3JvdXAgYnV0dG9ucz17YWN0aW9uQnV0dG9uc30gLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFjdGlvbkhlYWRlclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICogYXMgRGVzaWduU3lzdGVtIGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCB7IEFjdGlvblByb3BzIH0gZnJvbSAnLi4vYWN0aW9uLnByb3BzJ1xuaW1wb3J0IFByb3BlcnR5VHlwZSBmcm9tICcuLi8uLi9wcm9wZXJ0eS10eXBlJ1xuaW1wb3J0IHsgUHJvcGVydHlQbGFjZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvcHJvcGVydHktanNvbi9wcm9wZXJ0eS1qc29uLmludGVyZmFjZSdcbmltcG9ydCB7IFBhcnNlZExheW91dEVsZW1lbnQgfSBmcm9tICcuLi8uLi8uLi8uLi9iYWNrZW5kL3V0aWxzL2xheW91dC1lbGVtZW50LXBhcnNlcidcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vLi4vcHJvcGVydHktdHlwZS9iYXNlLXByb3BlcnR5LXByb3BzJ1xuXG50eXBlIFByb3BzID0gQWN0aW9uUHJvcHMgJiB7XG4gIGxheW91dEVsZW1lbnQ6IFBhcnNlZExheW91dEVsZW1lbnQ7XG4gIHdoZXJlOiBQcm9wZXJ0eVBsYWNlO1xuICBvbkNoYW5nZT86IEJhc2VQcm9wZXJ0eVByb3BzWydvbkNoYW5nZSddO1xufVxuXG5leHBvcnQgY29uc3QgTGF5b3V0RWxlbWVudFJlbmRlcmVyOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBsYXlvdXRFbGVtZW50LCByZXNvdXJjZSwgd2hlcmUsIHJlY29yZCwgb25DaGFuZ2UgfSA9IHByb3BzXG5cbiAgY29uc3Qge1xuICAgIHByb3BzOiBsYXlvdXRQcm9wcyxcbiAgICBwcm9wZXJ0aWVzOiBwcm9wZXJ0eU5hbWVzLFxuICAgIGxheW91dEVsZW1lbnRzOiBpbm5lckxheW91dEVsZW1lbnRzLFxuICAgIGNvbXBvbmVudCxcbiAgfSA9IGxheW91dEVsZW1lbnRcblxuICBjb25zdCB7IGNoaWxkcmVuLCAuLi5vdGhlciB9ID0gbGF5b3V0UHJvcHNcblxuICBjb25zdCBwcm9wZXJ0aWVzID0gcHJvcGVydHlOYW1lcy5tYXAobmFtZSA9PiByZXNvdXJjZS5wcm9wZXJ0aWVzW25hbWVdKVxuXG4gIGNvbnN0IENvbXBvbmVudCA9IERlc2lnblN5c3RlbVtjb21wb25lbnRdXG4gIGlmICghQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEZXNpZ25TeXN0ZW0uTWVzc2FnZUJveFxuICAgICAgICBzaXplPVwic21cIlxuICAgICAgICBtZXNzYWdlPVwiSmF2YXNjcmlwdCBFcnJvclwiXG4gICAgICAgIHZhcmlhbnQ9XCJkYW5nZXJcIlxuICAgICAgICBweT1cInhsXCJcbiAgICAgID5cbiAgICAgICAgVGhlcmUgaXMgbm8gY29tcG9uZW50IGJ5IHRoZSBuYW1lIG9mXG4gICAgICAgIDxEZXNpZ25TeXN0ZW0uQmFkZ2Ugc2l6ZT1cInNtXCIgdmFyaWFudD1cImRhbmdlclwiIG14PVwiZGVmYXVsdFwiPntjb21wb25lbnR9PC9EZXNpZ25TeXN0ZW0uQmFkZ2U+XG4gICAgICAgIGluIEBhZG1pbi1icm8vZGVzaWduLXN5c3RlbS4gQ2hhbmdlXG4gICAgICAgIDxEZXNpZ25TeXN0ZW0uQmFkZ2Ugc2l6ZT1cInNtXCIgdmFyaWFudD1cImRhbmdlclwiIG14PVwiZGVmYXVsdFwiPntgQCR7Y29tcG9uZW50fWB9PC9EZXNpZ25TeXN0ZW0uQmFkZ2U+XG4gICAgICAgIHRvIGF2YWlsYWJsZSBjb21wb25lbnQgbGlrZSBASGVhZGVyXG4gICAgICA8L0Rlc2lnblN5c3RlbS5NZXNzYWdlQm94PlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbXBvbmVudCB7Li4ub3RoZXIgYXMgYW55fT5cbiAgICAgIHtwcm9wZXJ0aWVzLm1hcChwcm9wZXJ0eSA9PiAoXG4gICAgICAgIDxEZXNpZ25TeXN0ZW0uQm94IGZsZXhHcm93PXsxfSBrZXk9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH0+XG4gICAgICAgICAgPFByb3BlcnR5VHlwZVxuICAgICAgICAgICAga2V5PXtwcm9wZXJ0eS5wcm9wZXJ0eVBhdGh9XG4gICAgICAgICAgICB3aGVyZT17d2hlcmV9XG4gICAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgICByZWNvcmQ9e3JlY29yZH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Rlc2lnblN5c3RlbS5Cb3g+XG4gICAgICApKX1cbiAgICAgIHtpbm5lckxheW91dEVsZW1lbnRzLm1hcCgoaW5uZXJMYXlvdXRFbGVtZW50LCBpKSA9PiAoXG4gICAgICAgIDxMYXlvdXRFbGVtZW50UmVuZGVyZXJcbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICBsYXlvdXRFbGVtZW50PXtpbm5lckxheW91dEVsZW1lbnR9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NvbXBvbmVudD5cbiAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dEVsZW1lbnRSZW5kZXJlclxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBEcmF3ZXJDb250ZW50LCBCb3gsIERyYXdlckZvb3RlciwgQnV0dG9uLCBJY29uIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgUHJvcGVydHlUeXBlIGZyb20gJy4uL3Byb3BlcnR5LXR5cGUnXG5cbmltcG9ydCB7IEFjdGlvblByb3BzIH0gZnJvbSAnLi9hY3Rpb24ucHJvcHMnXG5pbXBvcnQgQWN0aW9uSGVhZGVyIGZyb20gJy4uL2FwcC9hY3Rpb24taGVhZGVyL2FjdGlvbi1oZWFkZXInXG5pbXBvcnQgeyBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB1c2VSZWNvcmQgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXJlY29yZC91c2UtcmVjb3JkJ1xuaW1wb3J0IHsgYXBwZW5kRm9yY2VSZWZyZXNoIH0gZnJvbSAnLi91dGlscy9hcHBlbmQtZm9yY2UtcmVmcmVzaCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MvdXNlLXRyYW5zbGF0aW9uJ1xuaW1wb3J0IExheW91dEVsZW1lbnRSZW5kZXJlciBmcm9tICcuL3V0aWxzL2xheW91dC1lbGVtZW50LXJlbmRlcmVyJ1xuXG5jb25zdCBOZXc6IEZDPEFjdGlvblByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlY29yZDogaW5pdGlhbFJlY29yZCwgcmVzb3VyY2UsIGFjdGlvbiB9ID0gcHJvcHNcbiAgY29uc3Qge1xuICAgIHJlY29yZCxcbiAgICBoYW5kbGVDaGFuZ2UsXG4gICAgc3VibWl0OiBoYW5kbGVTdWJtaXQsXG4gICAgbG9hZGluZyxcbiAgICBzZXRSZWNvcmQsXG4gIH0gPSB1c2VSZWNvcmQoaW5pdGlhbFJlY29yZCwgcmVzb3VyY2UuaWQpXG4gIGNvbnN0IHsgdHJhbnNsYXRlQnV0dG9uIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpbml0aWFsUmVjb3JkKSB7XG4gICAgICBzZXRSZWNvcmQoaW5pdGlhbFJlY29yZClcbiAgICB9XG4gIH0sIFtpbml0aWFsUmVjb3JkXSlcblxuICBjb25zdCBzdWJtaXQgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KTogYm9vbGVhbiA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGhhbmRsZVN1Ym1pdCgpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZWRpcmVjdFVybCkge1xuICAgICAgICBoaXN0b3J5LnB1c2goYXBwZW5kRm9yY2VSZWZyZXNoKHJlc3BvbnNlLmRhdGEucmVkaXJlY3RVcmwpKVxuICAgICAgfVxuICAgICAgLy8gaWYgcmVjb3JkIGhhcyBpZCA9PT0gaGFzIGJlZW4gY3JlYXRlZFxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVjb3JkLmlkKSB7XG4gICAgICAgIGhhbmRsZUNoYW5nZSh7IHBhcmFtczoge30sIHBvcHVsYXRlZDoge30sIGVycm9yczoge30gfSBhcyBSZWNvcmRKU09OKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGFzPVwiZm9ybVwiXG4gICAgICBvblN1Ym1pdD17c3VibWl0fVxuICAgICAgZmxleFxuICAgICAgZmxleEdyb3c9ezF9XG4gICAgICBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCJcbiAgICA+XG4gICAgICA8RHJhd2VyQ29udGVudD5cbiAgICAgICAge2FjdGlvbj8uc2hvd0luRHJhd2VyID8gPEFjdGlvbkhlYWRlciB7Li4ucHJvcHN9IC8+IDogbnVsbH1cbiAgICAgICAge2FjdGlvbi5sYXlvdXQgPyBhY3Rpb24ubGF5b3V0Lm1hcCgobGF5b3V0RWxlbWVudCwgaSkgPT4gKFxuICAgICAgICAgIDxMYXlvdXRFbGVtZW50UmVuZGVyZXJcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgIGxheW91dEVsZW1lbnQ9e2xheW91dEVsZW1lbnR9XG4gICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICB3aGVyZT1cImVkaXRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHJlY29yZD17cmVjb3JkIGFzIFJlY29yZEpTT059XG4gICAgICAgICAgLz5cbiAgICAgICAgKSkgOiByZXNvdXJjZS5lZGl0UHJvcGVydGllcy5tYXAocHJvcGVydHkgPT4gKFxuICAgICAgICAgIDxQcm9wZXJ0eVR5cGVcbiAgICAgICAgICAgIGtleT17cHJvcGVydHkucHJvcGVydHlQYXRofVxuICAgICAgICAgICAgd2hlcmU9XCJlZGl0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgICByZWNvcmQ9e3JlY29yZCBhcyBSZWNvcmRKU09OfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9EcmF3ZXJDb250ZW50PlxuICAgICAgPERyYXdlckZvb3Rlcj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiIHR5cGU9XCJzdWJtaXRcIiBkYXRhLXRlc3RpZD1cImJ1dHRvbi1zYXZlXCI+XG4gICAgICAgICAge2xvYWRpbmcgPyAoPEljb24gaWNvbj1cIkZhZGVcIiBzcGluIC8+KSA6IG51bGx9XG4gICAgICAgICAge3RyYW5zbGF0ZUJ1dHRvbignc2F2ZScsIHJlc291cmNlLmlkKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0RyYXdlckZvb3Rlcj5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQge1xuICBOZXcgYXMgZGVmYXVsdCxcbiAgTmV3LFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBEcmF3ZXJDb250ZW50LCBCb3gsIERyYXdlckZvb3RlciwgQnV0dG9uLCBJY29uIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgUHJvcGVydHlUeXBlIGZyb20gJy4uL3Byb3BlcnR5LXR5cGUnXG5pbXBvcnQgeyBBY3Rpb25Qcm9wcyB9IGZyb20gJy4vYWN0aW9uLnByb3BzJ1xuaW1wb3J0IEFjdGlvbkhlYWRlciBmcm9tICcuLi9hcHAvYWN0aW9uLWhlYWRlci9hY3Rpb24taGVhZGVyJ1xuaW1wb3J0IHVzZVJlY29yZCBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVjb3JkL3VzZS1yZWNvcmQnXG5pbXBvcnQgeyBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IGFwcGVuZEZvcmNlUmVmcmVzaCB9IGZyb20gJy4vdXRpbHMvYXBwZW5kLWZvcmNlLXJlZnJlc2gnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZS10cmFuc2xhdGlvbidcbmltcG9ydCBMYXlvdXRFbGVtZW50UmVuZGVyZXIgZnJvbSAnLi91dGlscy9sYXlvdXQtZWxlbWVudC1yZW5kZXJlcidcblxuY29uc3QgRWRpdDogRkM8QWN0aW9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVjb3JkOiBpbml0aWFsUmVjb3JkLCByZXNvdXJjZSwgYWN0aW9uIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHtcbiAgICByZWNvcmQsXG4gICAgaGFuZGxlQ2hhbmdlLFxuICAgIHN1Ym1pdDogaGFuZGxlU3VibWl0LFxuICAgIGxvYWRpbmcsXG4gICAgc2V0UmVjb3JkLFxuICB9ID0gdXNlUmVjb3JkKGluaXRpYWxSZWNvcmQsIHJlc291cmNlLmlkKVxuICBjb25zdCB7IHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5pdGlhbFJlY29yZCkge1xuICAgICAgc2V0UmVjb3JkKGluaXRpYWxSZWNvcmQpXG4gICAgfVxuICB9LCBbaW5pdGlhbFJlY29yZF0pXG5cbiAgY29uc3Qgc3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pik6IGJvb2xlYW4gPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBoYW5kbGVTdWJtaXQoKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgaGlzdG9yeS5wdXNoKGFwcGVuZEZvcmNlUmVmcmVzaChyZXNwb25zZS5kYXRhLnJlZGlyZWN0VXJsKSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBhcz1cImZvcm1cIlxuICAgICAgb25TdWJtaXQ9e3N1Ym1pdH1cbiAgICAgIGZsZXhcbiAgICAgIGZsZXhHcm93PXsxfVxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgPlxuICAgICAgPERyYXdlckNvbnRlbnQ+XG4gICAgICAgIHthY3Rpb24/LnNob3dJbkRyYXdlciA/IDxBY3Rpb25IZWFkZXIgey4uLnByb3BzfSAvPiA6IG51bGx9XG4gICAgICAgIHthY3Rpb24ubGF5b3V0ID8gYWN0aW9uLmxheW91dC5tYXAoKGxheW91dEVsZW1lbnQsIGkpID0+IChcbiAgICAgICAgICA8TGF5b3V0RWxlbWVudFJlbmRlcmVyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBsYXlvdXRFbGVtZW50PXtsYXlvdXRFbGVtZW50fVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgd2hlcmU9XCJlZGl0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICByZWNvcmQ9e3JlY29yZCBhcyBSZWNvcmRKU09OfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpIDogcmVzb3VyY2UuZWRpdFByb3BlcnRpZXMubWFwKHByb3BlcnR5ID0+IChcbiAgICAgICAgICA8UHJvcGVydHlUeXBlXG4gICAgICAgICAgICBrZXk9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cbiAgICAgICAgICAgIHdoZXJlPVwiZWRpdFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmQgYXMgUmVjb3JkSlNPTn1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvRHJhd2VyQ29udGVudD5cbiAgICAgIDxEcmF3ZXJGb290ZXI+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIiB0eXBlPVwic3VibWl0XCIgZGF0YS10ZXN0aWQ9XCJidXR0b24tc2F2ZVwiPlxuICAgICAgICAgIHtsb2FkaW5nID8gKDxJY29uIGljb249XCJGYWRlXCIgc3BpbiAvPikgOiBudWxsfVxuICAgICAgICAgIHt0cmFuc2xhdGVCdXR0b24oJ3NhdmUnLCByZXNvdXJjZS5pZCl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9EcmF3ZXJGb290ZXI+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IHtcbiAgRWRpdCBhcyBkZWZhdWx0LFxuICBFZGl0LFxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRHJhd2VyQ29udGVudCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFByb3BlcnR5VHlwZSBmcm9tICcuLi9wcm9wZXJ0eS10eXBlJ1xuaW1wb3J0IHsgQWN0aW9uUHJvcHMgfSBmcm9tICcuL2FjdGlvbi5wcm9wcydcbmltcG9ydCBBY3Rpb25IZWFkZXIgZnJvbSAnLi4vYXBwL2FjdGlvbi1oZWFkZXIvYWN0aW9uLWhlYWRlcidcbmltcG9ydCBMYXlvdXRFbGVtZW50UmVuZGVyZXIgZnJvbSAnLi91dGlscy9sYXlvdXQtZWxlbWVudC1yZW5kZXJlcidcblxuLyoqXG4gKiBAbmFtZSBTaG93QWN0aW9uXG4gKiBAY2F0ZWdvcnkgQWN0aW9uc1xuICogQGRlc2NyaXB0aW9uIFNob3dzIGEgZ2l2ZW4gcmVjb3JkLlxuICogQGNvbXBvbmVudFxuICogQHByaXZhdGVcbiAqL1xuY29uc3QgU2hvdzogUmVhY3QuRkM8QWN0aW9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2UsIHJlY29yZCwgYWN0aW9uLCBkYXRhIH0gPSBwcm9wc1xuICBjb25zdCBwcm9wZXJ0aWVzID0gcmVzb3VyY2Uuc2hvd1Byb3BlcnRpZXNcblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXJDb250ZW50PlxuICAgICAge2FjdGlvbj8uc2hvd0luRHJhd2VyID8gPEFjdGlvbkhlYWRlciB7Li4ucHJvcHN9IC8+IDogbnVsbH1cbiAgICAgIHthY3Rpb24ubGF5b3V0ID8gYWN0aW9uLmxheW91dC5tYXAoKGxheW91dEVsZW1lbnQsIGkpID0+IChcbiAgICAgICAgPExheW91dEVsZW1lbnRSZW5kZXJlclxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgbGF5b3V0RWxlbWVudD17bGF5b3V0RWxlbWVudH1cbiAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgd2hlcmU9XCJzaG93XCJcbiAgICAgICAgLz5cbiAgICAgICkpIDogcHJvcGVydGllcy5tYXAocHJvcGVydHkgPT4gKFxuICAgICAgICA8UHJvcGVydHlUeXBlXG4gICAgICAgICAga2V5PXtwcm9wZXJ0eS5wcm9wZXJ0eVBhdGh9XG4gICAgICAgICAgd2hlcmU9XCJzaG93XCJcbiAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIC8+XG4gICAgICApKX1cblxuICAgIDwvRHJhd2VyQ29udGVudD5cbiAgKVxufVxuXG5leHBvcnQge1xuICBTaG93IGFzIGRlZmF1bHQsXG4gIFNob3csXG59XG4iLCJleHBvcnQgY29uc3QgZGlzcGxheSA9IChpc1RpdGxlOiBib29sZWFuKTogQXJyYXk8c3RyaW5nPiA9PiBbXG4gIGlzVGl0bGUgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsXG4gIGlzVGl0bGUgPyAndGFibGUtY2VsbCcgOiAnbm9uZScsXG4gICd0YWJsZS1jZWxsJyxcbiAgJ3RhYmxlLWNlbGwnLFxuXVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7XG4gIFBsYWNlaG9sZGVyLCBUYWJsZVJvdywgVGFibGVDZWxsLCBDaGVja0JveCwgQnV0dG9uR3JvdXAsXG59IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFByb3BlcnR5VHlwZSBmcm9tICcuLi8uLi9wcm9wZXJ0eS10eXBlJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiwgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIsIFJlY29yZEpTT04sIFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSAnLi91dGlscy9kaXNwbGF5J1xuaW1wb3J0IHsgQWN0aW9uUmVzcG9uc2UsIFJlY29yZEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2FjdGlvbi5pbnRlcmZhY2UnXG5pbXBvcnQgbWVyZ2VSZWNvcmRSZXNwb25zZSBmcm9tICcuLi8uLi8uLi9ob29rcy91c2UtcmVjb3JkL21lcmdlLXJlY29yZC1yZXNwb25zZSdcbmltcG9ydCB7IHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xuaW1wb3J0IHsgYWN0aW9uc1RvQnV0dG9uR3JvdXAgfSBmcm9tICcuLi9hY3Rpb24taGVhZGVyL2FjdGlvbnMtdG8tYnV0dG9uLWdyb3VwJ1xuXG5leHBvcnQgdHlwZSBSZWNvcmRJbkxpc3RQcm9wcyA9IHtcbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcbiAgcmVjb3JkOiBSZWNvcmRKU09OO1xuICBhY3Rpb25QZXJmb3JtZWQ/OiAoYWN0aW9uOiBBY3Rpb25SZXNwb25zZSkgPT4gYW55O1xuICBpc0xvYWRpbmc/OiBib29sZWFuO1xuICBvblNlbGVjdD86IChyZWNvcmQ6IFJlY29yZEpTT04pID0+IHZvaWQ7XG4gIGlzU2VsZWN0ZWQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgY29uc3QgUmVjb3JkSW5MaXN0OiBSZWFjdC5GQzxSZWNvcmRJbkxpc3RQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHJlc291cmNlLCByZWNvcmQ6IHJlY29yZEZyb21Qcm9wcywgYWN0aW9uUGVyZm9ybWVkLFxuICAgIGlzTG9hZGluZywgb25TZWxlY3QsIGlzU2VsZWN0ZWQsXG4gIH0gPSBwcm9wc1xuICBjb25zdCBbcmVjb3JkLCBzZXRSZWNvcmRdID0gdXNlU3RhdGU8UmVjb3JkSlNPTj4ocmVjb3JkRnJvbVByb3BzKVxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG5cbiAgY29uc3QgaGFuZGxlQWN0aW9uQ2FsbGJhY2sgPSB1c2VDYWxsYmFjaygoYWN0aW9uUmVzcG9uc2U6IEFjdGlvblJlc3BvbnNlKSA9PiB7XG4gICAgaWYgKGFjdGlvblJlc3BvbnNlLnJlY29yZCAmJiAhYWN0aW9uUmVzcG9uc2UucmVkaXJlY3RVcmwpIHtcbiAgICAgIHNldFJlY29yZChtZXJnZVJlY29yZFJlc3BvbnNlKHJlY29yZCwgYWN0aW9uUmVzcG9uc2UgYXMgUmVjb3JkQWN0aW9uUmVzcG9uc2UpKVxuICAgIH0gZWxzZSBpZiAoYWN0aW9uUGVyZm9ybWVkKSB7XG4gICAgICBhY3Rpb25QZXJmb3JtZWQoYWN0aW9uUmVzcG9uc2UpXG4gICAgfVxuICB9LCBbYWN0aW9uUGVyZm9ybWVkLCByZWNvcmRdKVxuXG4gIGNvbnN0IGFjdGlvblJlc3BvbnNlSGFuZGxlciA9IHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlcihoYW5kbGVBY3Rpb25DYWxsYmFjaylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFJlY29yZChyZWNvcmRGcm9tUHJvcHMpXG4gIH0sIFtyZWNvcmRGcm9tUHJvcHNdKVxuXG4gIGNvbnN0IHsgcmVjb3JkQWN0aW9ucyB9ID0gcmVjb3JkXG5cbiAgY29uc3Qgc2hvdyA9IHJlY29yZC5yZWNvcmRBY3Rpb25zLmZpbmQoKHsgbmFtZSB9KSA9PiBuYW1lID09PSAnc2hvdycpXG4gIGNvbnN0IGVkaXQgPSByZWNvcmQucmVjb3JkQWN0aW9ucy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gJ2VkaXQnKVxuICBjb25zdCBhY3Rpb24gPSBzaG93IHx8IGVkaXRcblxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHRhcmdldFRhZ05hbWUgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS50YWdOYW1lLnRvTG93ZXJDYXNlKClcbiAgICBpZiAoYWN0aW9uXG4gICAgICAmJiB0YXJnZXRUYWdOYW1lICE9PSAnYSdcbiAgICAgICYmIHRhcmdldFRhZ05hbWUgIT09ICdidXR0b24nXG4gICAgICAmJiB0YXJnZXRUYWdOYW1lICE9PSAnc3ZnJ1xuICAgICkge1xuICAgICAgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIoe1xuICAgICAgICBhY3Rpb24sXG4gICAgICAgIHBhcmFtczogeyByZXNvdXJjZUlkOiByZXNvdXJjZS5pZCwgcmVjb3JkSWQ6IHJlY29yZC5pZCB9LFxuICAgICAgICBhY3Rpb25SZXNwb25zZUhhbmRsZXIsXG4gICAgICAgIHB1c2g6IGhpc3RvcnkucHVzaCxcbiAgICAgIH0pKGV2ZW50KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFjdGlvblBhcmFtcyA9IHsgcmVzb3VyY2VJZDogcmVzb3VyY2UuaWQsIHJlY29yZElkOiByZWNvcmQuaWQgfVxuXG4gIGNvbnN0IGhhbmRsZUFjdGlvbkNsaWNrID0gKGV2ZW50LCBzb3VyY2VBY3Rpb246IEFjdGlvbkpTT04pOiB2b2lkID0+IChcbiAgICBidWlsZEFjdGlvbkNsaWNrSGFuZGxlcih7XG4gICAgICBhY3Rpb246IHNvdXJjZUFjdGlvbixcbiAgICAgIHBhcmFtczogYWN0aW9uUGFyYW1zLFxuICAgICAgYWN0aW9uUmVzcG9uc2VIYW5kbGVyLFxuICAgICAgcHVzaDogaGlzdG9yeS5wdXNoLFxuICAgIH0pKGV2ZW50KVxuICApXG5cbiAgY29uc3QgYnV0dG9ucyA9IFt7XG4gICAgaWNvbjogJ092ZXJmbG93TWVudUhvcml6b250YWwnLFxuICAgIHZhcmlhbnQ6ICdsaWdodCcgYXMgY29uc3QsXG4gICAgbGFiZWw6IHVuZGVmaW5lZCxcbiAgICAnZGF0YS10ZXN0aWQnOiAnYWN0aW9ucy1kcm9wZG93bicsXG4gICAgYnV0dG9uczogYWN0aW9uc1RvQnV0dG9uR3JvdXAoe1xuICAgICAgYWN0aW9uczogcmVjb3JkQWN0aW9ucyxcbiAgICAgIHBhcmFtczogYWN0aW9uUGFyYW1zLFxuICAgICAgaGFuZGxlQ2xpY2s6IGhhbmRsZUFjdGlvbkNsaWNrLFxuICAgIH0pLFxuICB9XVxuXG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGVSb3cgb25DbGljaz17aGFuZGxlQ2xpY2t9IGRhdGEtaWQ9e3JlY29yZC5pZH0+XG4gICAgICA8VGFibGVDZWxsIGNsYXNzTmFtZT17aXNTZWxlY3RlZCA/ICdzZWxlY3RlZCcgOiAnbm90LXNlbGVjdGVkJ30+XG4gICAgICAgIHtvblNlbGVjdCAmJiByZWNvcmQuYnVsa0FjdGlvbnMubGVuZ3RoID8gKFxuICAgICAgICAgIDxDaGVja0JveFxuICAgICAgICAgICAgb25DaGFuZ2U9eygpOiB2b2lkID0+IG9uU2VsZWN0KHJlY29yZCl9XG4gICAgICAgICAgICBjaGVja2VkPXtpc1NlbGVjdGVkfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICB7cmVzb3VyY2UubGlzdFByb3BlcnRpZXMubWFwKHByb3BlcnR5ID0+IChcbiAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XG4gICAgICAgICAga2V5PXtwcm9wZXJ0eS5wcm9wZXJ0eVBhdGh9XG4gICAgICAgICAgZGF0YS1wcm9wZXJ0eS1uYW1lPXtwcm9wZXJ0eS5wcm9wZXJ0eVBhdGh9XG4gICAgICAgICAgZGlzcGxheT17ZGlzcGxheShwcm9wZXJ0eS5pc1RpdGxlKX1cbiAgICAgICAgPlxuICAgICAgICAgIHtpc0xvYWRpbmcgPyAoXG4gICAgICAgICAgICA8UGxhY2Vob2xkZXIgc3R5bGU9e3sgaGVpZ2h0OiAxNCB9fSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8UHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgIGtleT17cHJvcGVydHkucHJvcGVydHlQYXRofVxuICAgICAgICAgICAgICB3aGVyZT1cImxpc3RcIlxuICAgICAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgKSl9XG4gICAgICA8VGFibGVDZWxsIGtleT1cIm9wdGlvbnNcIj5cbiAgICAgICAge3JlY29yZEFjdGlvbnMubGVuZ3RoID8gKFxuICAgICAgICAgIDxCdXR0b25Hcm91cCBidXR0b25zPXtidXR0b25zfSAvPlxuICAgICAgICApIDogJyd9XG4gICAgICA8L1RhYmxlQ2VsbD5cbiAgICA8L1RhYmxlUm93PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29yZEluTGlzdFxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmF2TGluaywgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBJY29uLCBjc3NDbGFzcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgQmFzZVByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5cblxuZXhwb3J0IHR5cGUgU29ydExpbmtQcm9wcyA9IHtcbiAgcHJvcGVydHk6IEJhc2VQcm9wZXJ0eUpTT047XG4gIGRpcmVjdGlvbj86ICdhc2MnIHwgJ2Rlc2MnO1xuICBzb3J0Qnk/OiBzdHJpbmc7XG59XG5cbmNsYXNzIFNvcnRMaW5rIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxTb3J0TGlua1Byb3BzICYgUm91dGVDb21wb25lbnRQcm9wcz4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuaXNBY3RpdmUgPSB0aGlzLmlzQWN0aXZlLmJpbmQodGhpcylcbiAgfVxuXG4gIGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHsgc29ydEJ5LCBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiBzb3J0QnkgPT09IHByb3BlcnR5LnByb3BlcnR5UGF0aFxuICB9XG5cbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgbG9jYXRpb24sIGRpcmVjdGlvbiB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpXG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSAodGhpcy5pc0FjdGl2ZSgpICYmIGRpcmVjdGlvbiA9PT0gJ2FzYycpID8gJ2Rlc2MnIDogJ2FzYydcbiAgICBjb25zdCBzb3J0ZWRCeUljb24gPSBgQ2FyZXQke2RpcmVjdGlvbiA9PT0gJ2FzYycgPyAnVXAnIDogJ0Rvd24nfWBcblxuICAgIHF1ZXJ5LnNldCgnZGlyZWN0aW9uJywgb3Bwb3NpdGVEaXJlY3Rpb24pXG4gICAgcXVlcnkuc2V0KCdzb3J0QnknLCBwcm9wZXJ0eS5wcm9wZXJ0eVBhdGgpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPE5hdkxpbmsgdG89e3sgc2VhcmNoOiBxdWVyeS50b1N0cmluZygpIH19IGNsYXNzTmFtZT17Y3NzQ2xhc3MoJ1NvcnRMaW5rJyl9PlxuICAgICAgICB7cHJvcGVydHkubGFiZWx9XG4gICAgICAgIHt0aGlzLmlzQWN0aXZlKCkgPyAoPEljb24gaWNvbj17c29ydGVkQnlJY29ufSBjb2xvcj1cInByaW1hcnkxMDBcIiBtbD1cImRlZmF1bHRcIiAvPikgOiAnJ31cbiAgICAgIDwvTmF2TGluaz5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihTb3J0TGluaylcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRhYmxlQ2VsbCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgQmFzZVByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgU29ydExpbmsgZnJvbSAnLi4vc29ydC1saW5rJ1xuXG5leHBvcnQgdHlwZSBQcm9wZXJ0eUhlYWRlclByb3BzID0ge1xuICBwcm9wZXJ0eTogQmFzZVByb3BlcnR5SlNPTjtcbiAgLyoqXG4gICAqIFByb3BlcnR5IHdoaWNoIHNob3VsZCBiZSB0cmVhdGVkIGFzIG1haW4gcHJvcGVydHkuXG4gICAqL1xuICB0aXRsZVByb3BlcnR5OiBCYXNlUHJvcGVydHlKU09OO1xuICAvKipcbiAgICogY3VycmVudGx5IHNlbGVjdGVkIGRpcmVjdGlvbi4gRWl0aGVyICdhc2MnIG9yICdkZXNjJy5cbiAgICovXG4gIGRpcmVjdGlvbj86ICdhc2MnIHwgJ2Rlc2MnO1xuICAvKipcbiAgICogY3VycmVudGx5IHNlbGVjdGVkIGZpZWxkIGJ5IHdoaWNoIGxpc3QgaXMgc29ydGVkLlxuICAgKi9cbiAgc29ydEJ5Pzogc3RyaW5nO1xuXG4gIGRpc3BsYXk/OiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+O1xufVxuXG5leHBvcnQgY29uc3QgUHJvcGVydHlIZWFkZXI6IFJlYWN0LkZDPFByb3BlcnR5SGVhZGVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIHRpdGxlUHJvcGVydHksIGRpc3BsYXkgfSA9IHByb3BzXG5cbiAgY29uc3QgaXNNYWluID0gcHJvcGVydHkucHJvcGVydHlQYXRoID09PSB0aXRsZVByb3BlcnR5LnByb3BlcnR5UGF0aFxuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQ2VsbFxuICAgICAgY2xhc3NOYW1lPXtpc01haW4gPyAnbWFpbicgOiB1bmRlZmluZWR9XG4gICAgICBkaXNwbGF5PXtkaXNwbGF5fVxuICAgID5cbiAgICAgIHtwcm9wZXJ0eS5pc1NvcnRhYmxlID8gPFNvcnRMaW5rIHsuLi5wcm9wc30gLz4gOiBwcm9wZXJ0eS5sYWJlbH1cbiAgICA8L1RhYmxlQ2VsbD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9wZXJ0eUhlYWRlclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2hlY2tCb3gsIFRhYmxlSGVhZCwgVGFibGVSb3csIFRhYmxlQ2VsbCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFByb3BlcnR5SGVhZGVyIGZyb20gJy4vcHJvcGVydHktaGVhZGVyJ1xuaW1wb3J0IHsgQmFzZVByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBkaXNwbGF5IH0gZnJvbSAnLi91dGlscy9kaXNwbGF5J1xuXG4vKipcbiAqIEBtZW1iZXJvZiBSZWNvcmRzVGFibGVIZWFkZXJcbiAqIEBhbGlhcyBSZWNvcmRzVGFibGVIZWFkZXJQcm9wc1xuICovXG5leHBvcnQgdHlwZSBSZWNvcmRzVGFibGVIZWFkZXJQcm9wcyA9IHtcbiAgLyoqXG4gICAqIFByb3BlcnR5IHdoaWNoIHNob3VsZCBiZSB0cmVhdGVkIGFzIGEgVGl0bGUgUHJvcGVydHlcbiAgICovXG4gIHRpdGxlUHJvcGVydHk6IEJhc2VQcm9wZXJ0eUpTT047XG4gIC8qKlxuICAgKiBBbGwgcHJvcGVydGllcyB3aGljaCBzaG91bGQgYmUgcHJlc2VudGVkXG4gICAqL1xuICBwcm9wZXJ0aWVzOiBBcnJheTxCYXNlUHJvcGVydHlKU09OPjtcbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIHByb3BlcnR5IHdoaWNoIHNob3VsZCBiZSBtYXJrZWQgYXMgY3VycmVudGx5IHNvcnRlZCBieVxuICAgKi9cbiAgc29ydEJ5Pzogc3RyaW5nO1xuICAvKipcbiAgICogU29ydCBkaXJlY3Rpb25cbiAgICovXG4gIGRpcmVjdGlvbj86ICdhc2MnIHwgJ2Rlc2MnO1xuICAvKipcbiAgICogSGFuZGxlciBmdW5jdGlvbiBpbnZva2VkIHdoZW4gY2hlY2tib3ggaXMgY2xpY2tlZC4gSWYgZ2l2ZW4gZXh0cmEgY29sdW1uXG4gICAqIHdpdGggY2hlY2tib3ggd2lsbCBiZSByZW5kZXJlZFxuICAgKi9cbiAgb25TZWxlY3RBbGw/OiAoKSA9PiBhbnk7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgXCJidWxrXCIgY2hlY2tib3ggc2hvdWxkIGJlIGNoZWNrZWRcbiAgICovXG4gIHNlbGVjdGVkQWxsPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBQcmludHMgYHRoZWFkYCBzZWN0aW9uIGZvciB0YWJsZSB3aXRoIHJlY29yZHMuXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBSZWNvcmRzVGFibGVIZWFkZXIgfSBmcm9tICdhZG1pbi1icm8nXG4gKiBgYGBcbiAqXG4gKiBAY29tcG9uZW50XG4gKiBAc3ViY2F0ZWdvcnkgQXBwbGljYXRpb25cbiAqIEBleGFtcGxlIDxjYXB0aW9uPkxpc3Qgd2l0aCAyIHByb3BlcnRpZXM8L2NhcHRpb24+XG4gKiBjb25zdCBwcm9wZXJ0aWVzID0gW3tcbiAqICAgbGFiZWw6ICdGaXJzdCBOYW1lJyxcbiAqICAgbmFtZTogJ2ZpcnN0TmFtZScsXG4gKiAgIGlzU29ydGFibGU6IHRydWUsXG4gKiB9LCB7XG4gKiAgIGxhYmVsOiAnTGFzdCBOYW1lJyxcbiAqICAgbmFtZTogJ2xhc3ROYW1lJyxcbiAqIH1dXG4gKiByZXR1cm4gKFxuICogPEJveCBweT1cInhsXCI+XG4gKiAgIDxUYWJsZT5cbiAqICAgIDxSZWNvcmRzVGFibGVIZWFkZXJcbiAqICAgICAgcHJvcGVydGllcz17cHJvcGVydGllc31cbiAqICAgICAgdGl0bGVQcm9wZXJ0eT17cHJvcGVydGllc1swXX1cbiAqICAgICAgc29ydEJ5PXsnZmlyc3ROYW1lJ31cbiAqICAgICAgZGlyZWN0aW9uPXsnYXNjJ31cbiAqICAgIC8+XG4gKiAgICA8VGFibGVCb2R5PlxuICogICAgICA8VGFibGVSb3c+XG4gKiAgICAgICAgPFRhYmxlQ2VsbD5Kb2huPC9UYWJsZUNlbGw+XG4gKiAgICAgICAgPFRhYmxlQ2VsbD5Eb2U8L1RhYmxlQ2VsbD5cbiAqICAgICAgICA8VGFibGVDZWxsPjwvVGFibGVDZWxsPlxuICogICAgICA8L1RhYmxlUm93PlxuICogICAgICA8VGFibGVSb3c+XG4gKiAgICAgICAgPFRhYmxlQ2VsbD5NYXg8L1RhYmxlQ2VsbD5cbiAqICAgICAgICA8VGFibGVDZWxsPktvZGFseTwvVGFibGVDZWxsPlxuICogICAgICAgIDxUYWJsZUNlbGw+PC9UYWJsZUNlbGw+XG4gKiAgICAgIDwvVGFibGVSb3c+XG4gKiAgICA8L1RhYmxlQm9keT5cbiAqICAgPC9UYWJsZT5cbiAqIDwvQm94PlxuICogKVxuICovXG5leHBvcnQgY29uc3QgUmVjb3Jkc1RhYmxlSGVhZGVyOiBSZWFjdC5GQzxSZWNvcmRzVGFibGVIZWFkZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHRpdGxlUHJvcGVydHksIHByb3BlcnRpZXMsXG4gICAgc29ydEJ5LCBkaXJlY3Rpb24sXG4gICAgb25TZWxlY3RBbGwsIHNlbGVjdGVkQWxsIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIDxUYWJsZUhlYWQ+XG4gICAgICA8VGFibGVSb3c+XG4gICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAge29uU2VsZWN0QWxsID8gKFxuICAgICAgICAgICAgPENoZWNrQm94XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eygpOiB2b2lkID0+IG9uU2VsZWN0QWxsKCl9XG4gICAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkQWxsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgIHtwcm9wZXJ0aWVzLm1hcChwcm9wZXJ0eSA9PiAoXG4gICAgICAgICAgPFByb3BlcnR5SGVhZGVyXG4gICAgICAgICAgICBkaXNwbGF5PXtkaXNwbGF5KHByb3BlcnR5LmlzVGl0bGUpfVxuICAgICAgICAgICAga2V5PXtwcm9wZXJ0eS5wcm9wZXJ0eVBhdGh9XG4gICAgICAgICAgICB0aXRsZVByb3BlcnR5PXt0aXRsZVByb3BlcnR5fVxuICAgICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICAgICAgc29ydEJ5PXtzb3J0Qnl9XG4gICAgICAgICAgICBkaXJlY3Rpb249e2RpcmVjdGlvbn1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgICAgPFRhYmxlQ2VsbCBrZXk9XCJhY3Rpb25zXCIgc3R5bGU9e3sgd2lkdGg6IDgwIH19IC8+XG4gICAgICA8L1RhYmxlUm93PlxuICAgIDwvVGFibGVIZWFkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29yZHNUYWJsZUhlYWRlclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLWFsZXJ0ICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cblxuaW1wb3J0IFJlYWN0LCB7IFJlYWN0RWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi8uLi9iYWNrZW5kL2FjdGlvbnMvYWN0aW9uLmludGVyZmFjZSdcblxuaW1wb3J0IHsgQWN0aW9uSlNPTiwgYnVpbGRBY3Rpb25UZXN0SWQgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgdXNlQWN0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MnXG5cblxuLyoqXG4gKiBAYWxpYXMgQWN0aW9uQnV0dG9uUHJvcHNcbiAqIEBtZW1iZXJvZiBBY3Rpb25CdXR0b25cbiAqL1xuZXhwb3J0IHR5cGUgQWN0aW9uQnV0dG9uUHJvcHMgPSB7XG4gIC8qKiBBY3Rpb24gdG8gd2hpY2ggYnV0dG9uIHNob3VsZCByZWRpcmVjdCAqL1xuICBhY3Rpb246IEFjdGlvbkpTT047XG4gIC8qKiBJZCBvZiBhIHJlc291cmNlIG9mIGFuIGFjdGlvbiAqL1xuICByZXNvdXJjZUlkOiBzdHJpbmc7XG4gIC8qKiBPcHRpb25hbCByZWNvcmRJZCBmb3IgX3JlY29yZF8gYWN0aW9uICovXG4gIHJlY29yZElkPzogc3RyaW5nO1xuICAvKiogT3B0aW9uYWwgcmVjb3JkSWRzIGZvciBfYnVsa18gYWN0aW9uICovXG4gIHJlY29yZElkcz86IEFycmF5PHN0cmluZz47XG4gIC8qKiBvcHRpb25hbCBjYWxsYmFjayBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIHRyaWdnZXJlZCB3aGVuIGFjdGlvbiBpcyBwZXJmb3JtZWQgKi9cbiAgYWN0aW9uUGVyZm9ybWVkPzogKGFjdGlvbjogQWN0aW9uUmVzcG9uc2UpID0+IGFueTtcbn1cblxuLyoqXG4gKiBSZW5kZXJzIEJ1dHRvbiB3aGljaCByZWRpcmVjdHMgdG8gZ2l2ZW4gYWN0aW9uXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBBY3Rpb25CdXR0b24gfSBmcm9tICdhZG1pbi1icm8nXG4gKiBgYGBcbiAqXG4gKiBAY29tcG9uZW50XG4gKiBAc3ViY2F0ZWdvcnkgQXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IEFjdGlvbkJ1dHRvbjogUmVhY3QuRkM8QWN0aW9uQnV0dG9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIGFjdGlvbiwgYWN0aW9uUGVyZm9ybWVkLCByZXNvdXJjZUlkLCByZWNvcmRJZCwgcmVjb3JkSWRzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgaHJlZiwgaGFuZGxlQ2xpY2sgfSA9IHVzZUFjdGlvbihhY3Rpb24sIHtcbiAgICByZXNvdXJjZUlkLCByZWNvcmRJZCwgcmVjb3JkSWRzLFxuICB9LCBhY3Rpb25QZXJmb3JtZWQpXG5cbiAgaWYgKCFhY3Rpb24pIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgZmlyc3RDaGlsZCA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pWzBdXG5cbiAgaWYgKCFmaXJzdENoaWxkXG4gICAgfHwgdHlwZW9mIGZpcnN0Q2hpbGQgPT09ICdzdHJpbmcnXG4gICAgfHwgdHlwZW9mIGZpcnN0Q2hpbGQgPT09ICdudW1iZXInXG4gICAgfHwgdHlwZW9mIGZpcnN0Q2hpbGQgPT09ICdib29sZWFuJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9uQnV0dG9uIGhhcyB0byBoYXZlIG9uZSBjaGlsZCcpXG4gIH1cblxuICBjb25zdCBXcmFwcGVkRWxlbWVudCA9IFJlYWN0LmNsb25lRWxlbWVudChmaXJzdENoaWxkIGFzIFJlYWN0RWxlbWVudDxhbnk+LCB7XG4gICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgJ2RhdGEtdGVzdGlkJzogYnVpbGRBY3Rpb25UZXN0SWQoYWN0aW9uKSxcbiAgICBocmVmLFxuICB9KVxuXG5cbiAgcmV0dXJuIFdyYXBwZWRFbGVtZW50XG59XG5cbi8vIFRPRE8gLSByZW1vdmUgdGhpcyBoYWNrXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25CdXR0b25cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFRleHQsIEJ1dHRvbiwgSWNvbiwgSW5mb0JveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MnXG5pbXBvcnQgYWxsb3dPdmVycmlkZSBmcm9tICcuLi8uLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUnXG5pbXBvcnQgQWN0aW9uQnV0dG9uIGZyb20gJy4uL2FjdGlvbi1idXR0b24vYWN0aW9uLWJ1dHRvbidcblxuZXhwb3J0IHR5cGUgTm9SZWNvcmRzUHJvcHMgPSB7XG4gIHJlc291cmNlOiBSZXNvdXJjZUpTT047XG59XG5cbmNvbnN0IE5vUmVjb3Jkc09yaWdpbmFsOiBSZWFjdC5GQzxOb1JlY29yZHNQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZSB9ID0gcHJvcHNcbiAgY29uc3QgeyB0cmFuc2xhdGVCdXR0b24sIHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICBjb25zdCBjYW5DcmVhdGUgPSByZXNvdXJjZS5yZXNvdXJjZUFjdGlvbnMuZmluZChhID0+IGEubmFtZSA9PT0gJ25ldycpXG5cbiAgcmV0dXJuIChcbiAgICA8SW5mb0JveCB0aXRsZT17dHJhbnNsYXRlTWVzc2FnZSgnbm9SZWNvcmRzJywgcmVzb3VyY2UuaWQpfT5cbiAgICAgIDxUZXh0IG1iPVwieHhsXCI+XG4gICAgICAgIHt0cmFuc2xhdGVNZXNzYWdlKCdub1JlY29yZHNJblJlc291cmNlJywgcmVzb3VyY2UuaWQpfVxuICAgICAgPC9UZXh0PlxuICAgICAge2NhbkNyZWF0ZSA/IChcbiAgICAgICAgPEFjdGlvbkJ1dHRvbiBhY3Rpb249e2NhbkNyZWF0ZX0gcmVzb3VyY2VJZD17cmVzb3VyY2UuaWR9PlxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIj5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJBZGRcIiAvPlxuICAgICAgICAgICAge3RyYW5zbGF0ZUJ1dHRvbignY3JlYXRlRmlyc3RSZWNvcmQnLCByZXNvdXJjZS5pZCl9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQWN0aW9uQnV0dG9uPlxuICAgICAgKSA6ICcnfVxuICAgIDwvSW5mb0JveD5cbiAgKVxufVxuXG4vLyBUaGlzIGhhY2sgcHJldmVudHMgcm9sbHVwIGZyb20gdGhyb3dpbmcgYW4gZXJyb3JcbmNvbnN0IE5vUmVjb3JkcyA9IGFsbG93T3ZlcnJpZGUoTm9SZWNvcmRzT3JpZ2luYWwsICdOb1JlY29yZHMnKVxuXG5leHBvcnQgeyBOb1JlY29yZHMgfVxuZXhwb3J0IGRlZmF1bHQgTm9SZWNvcmRzXG4iLCJpbXBvcnQgeyBBY3Rpb25KU09OLCBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW50ZXJmYWNlcydcblxuY29uc3QgZ2V0QnVsa0FjdGlvbnNGcm9tUmVjb3JkcyA9IChyZWNvcmRzOiBBcnJheTxSZWNvcmRKU09OPik6IEFycmF5PEFjdGlvbkpTT04+ID0+IHtcbiAgY29uc3QgYWN0aW9ucyA9IE9iamVjdC52YWx1ZXMocmVjb3Jkcy5yZWR1Y2UoKG1lbW8sIHJlY29yZCkgPT4gKHtcbiAgICAuLi5tZW1vLFxuICAgIC4uLnJlY29yZC5idWxrQWN0aW9ucy5yZWR1Y2UoKGFjdGlvbnNNZW1vLCBhY3Rpb24pID0+ICh7XG4gICAgICAuLi5hY3Rpb25zTWVtbyxcbiAgICAgIFthY3Rpb24ubmFtZV06IGFjdGlvbixcbiAgICB9KSwge30gYXMgUmVjb3JkPHN0cmluZywgQWN0aW9uSlNPTj4pLFxuICB9KSwge30gYXMgUmVjb3JkPHN0cmluZywgQWN0aW9uSlNPTj4pKVxuICByZXR1cm4gYWN0aW9uc1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRCdWxrQWN0aW9uc0Zyb21SZWNvcmRzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUYWJsZUNhcHRpb24sIFRpdGxlLCBCdXR0b25Hcm91cCwgQm94IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiwgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIsIFJlY29yZEpTT04sIFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgZ2V0QnVsa0FjdGlvbnNGcm9tUmVjb3JkcyBmcm9tICcuL3V0aWxzL2dldC1idWxrLWFjdGlvbnMtZnJvbS1yZWNvcmRzJ1xuaW1wb3J0IHsgdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyLCB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xuaW1wb3J0IHsgYWN0aW9uc1RvQnV0dG9uR3JvdXAgfSBmcm9tICcuLi9hY3Rpb24taGVhZGVyL2FjdGlvbnMtdG8tYnV0dG9uLWdyb3VwJ1xuXG50eXBlIFNlbGVjdGVkUmVjb3Jkc1Byb3BzID0ge1xuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xuICBzZWxlY3RlZFJlY29yZHM/OiBBcnJheTxSZWNvcmRKU09OPjtcbn1cblxuZXhwb3J0IGNvbnN0IFNlbGVjdGVkUmVjb3JkczogUmVhY3QuRkM8U2VsZWN0ZWRSZWNvcmRzUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2UsIHNlbGVjdGVkUmVjb3JkcyB9ID0gcHJvcHNcbiAgY29uc3QgeyB0cmFuc2xhdGVMYWJlbCB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG4gIGNvbnN0IGFjdGlvblJlc3BvbnNlSGFuZGxlciA9IHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlcigpXG5cbiAgaWYgKCFzZWxlY3RlZFJlY29yZHMgfHwgIXNlbGVjdGVkUmVjb3Jkcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgcGFyYW1zID0geyByZXNvdXJjZUlkOiByZXNvdXJjZS5pZCwgcmVjb3JkSWRzOiBzZWxlY3RlZFJlY29yZHMubWFwKHJlY29yZHMgPT4gcmVjb3Jkcy5pZCkgfVxuXG4gIGNvbnN0IGhhbmRsZUFjdGlvbkNsaWNrID0gKGV2ZW50LCBzb3VyY2VBY3Rpb246IEFjdGlvbkpTT04pOiB2b2lkID0+IChcbiAgICBidWlsZEFjdGlvbkNsaWNrSGFuZGxlcih7XG4gICAgICBhY3Rpb246IHNvdXJjZUFjdGlvbixcbiAgICAgIHBhcmFtcyxcbiAgICAgIGFjdGlvblJlc3BvbnNlSGFuZGxlcixcbiAgICAgIHB1c2g6IGhpc3RvcnkucHVzaCxcbiAgICB9KShldmVudClcbiAgKVxuXG4gIGNvbnN0IGJ1bGtCdXR0b25zID0gYWN0aW9uc1RvQnV0dG9uR3JvdXAoe1xuICAgIGFjdGlvbnM6IGdldEJ1bGtBY3Rpb25zRnJvbVJlY29yZHMoc2VsZWN0ZWRSZWNvcmRzKSxcbiAgICBwYXJhbXMsXG4gICAgaGFuZGxlQ2xpY2s6IGhhbmRsZUFjdGlvbkNsaWNrLFxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlQ2FwdGlvbj5cbiAgICAgIDxCb3ggZmxleCBweT1cInNtXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICA8VGl0bGUgbXI9XCJsZ1wiPlxuICAgICAgICAgIHt0cmFuc2xhdGVMYWJlbCgnc2VsZWN0ZWRSZWNvcmRzJywgcmVzb3VyY2UuaWQsIHsgc2VsZWN0ZWQ6IHNlbGVjdGVkUmVjb3Jkcy5sZW5ndGggfSl9XG4gICAgICAgIDwvVGl0bGU+XG4gICAgICAgIDxCdXR0b25Hcm91cCBzaXplPVwic21cIiByb3VuZGVkIGJ1dHRvbnM9e2J1bGtCdXR0b25zfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9UYWJsZUNhcHRpb24+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0ZWRSZWNvcmRzXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUYWJsZSwgVGFibGVCb2R5LCBMb2FkZXIgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBSZWNvcmRJbkxpc3QgZnJvbSAnLi9yZWNvcmQtaW4tbGlzdCdcbmltcG9ydCBSZWNvcmRzVGFibGVIZWFkZXIgZnJvbSAnLi9yZWNvcmRzLXRhYmxlLWhlYWRlcidcbmltcG9ydCBOb1JlY29yZHMgZnJvbSAnLi9uby1yZWNvcmRzJ1xuXG5cbmltcG9ydCB7IFJlY29yZEpTT04sIFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgU2VsZWN0ZWRSZWNvcmRzIGZyb20gJy4vc2VsZWN0ZWQtcmVjb3JkcydcbmltcG9ydCB7IEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2FjdGlvbi5pbnRlcmZhY2UnXG5cbi8qKlxuICogQGFsaWFzIFJlY29yZHNUYWJsZVByb3BzXG4gKiBAbWVtYmVyb2YgUmVjb3Jkc1RhYmxlXG4gKi9cbmV4cG9ydCB0eXBlIFJlY29yZHNUYWJsZVByb3BzID0ge1xuICAvKipcbiAgICogUmVzb3VyY2Ugd2hpY2ggdHlwZSByZWNvcmRzIGFyZSByZW5kZXJlZC4gQmFzZSBvbiB0aGF0IHdlIGRlZmluZSB3aGljaCBjb2x1bW5zIHNob3VsZCBiZSBzZWVuLlxuICAgKi9cbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcbiAgLyoqXG4gICAqIEFycmF5IG9mIHJlY29yZHMgc2VlbiBpbiB0aGUgdGFibGVcbiAgICovXG4gIHJlY29yZHM6IEFycmF5PFJlY29yZEpTT04+O1xuICAvKipcbiAgICogSGFuZGxlciBmdW5jdGlvbiBpbnZva2VkIHdoZW4gc29tZW9uZSBwZXJmb3JtcyBhY3Rpb24gd2l0aG91dCBjb21wb25lbnQgb24gYSBnaXZlbiByZWNvcmQuXG4gICAqIEFjdGlvbiB3aXRob3V0IGNvbXBvbmVudCBpcyBhIGBkZWxldGVgIGFjdGlvbiAtIHlvdSBtaWdodCB3YW50IHRvIHJlZnJlc2ggdGhlIGxpc3QgYWZ0ZXIgdGhhdFxuICAgKi9cbiAgYWN0aW9uUGVyZm9ybWVkPzogKHJlc3BvbnNlOiBBY3Rpb25SZXNwb25zZSkgPT4gYW55O1xuICAvKiogZGVmYXVsdCBzb3J0IGJ5IGNvbHVtbiAqL1xuICBzb3J0Qnk/OiBzdHJpbmc7XG4gIC8qKiBzb3J0IGRpcmVjdGlvbiAqL1xuICBkaXJlY3Rpb24/OiAnYXNjJyB8ICdkZXNjJztcbiAgLyoqIGluZGljYXRlcyBpZiB0aGUgdGFibGUgc2hvdWxkIGJlIGluIGxvYWRpbmcgc3RhdGUgKi9cbiAgaXNMb2FkaW5nPzogYm9vbGVhbjtcbiAgLyoqIGxpc3Qgb2Ygc2VsZWN0ZWQgcmVjb3JkcyAqL1xuICBzZWxlY3RlZFJlY29yZHM/OiBBcnJheTxSZWNvcmRKU09OPjtcbiAgLyoqIGhhbmRsZXIgZnVuY3Rpb24gdHJpZ2dlcmVkIHdoZW4gcmVjb3JkIGlzIHNlbGVjdGVkICovXG4gIG9uU2VsZWN0PzogKHJlY29yZDogUmVjb3JkSlNPTikgPT4gYW55O1xuICAvKiogaGFuZGxlciBmdW5jdGlvbiB0cmlnZ2VyZWQgd2hlbiBhbGwgaXRlbXMgYXJlIHNlbGVjdGVkICovXG4gIG9uU2VsZWN0QWxsPzogKCkgPT4gYW55O1xufVxuXG4vKipcbiAqIEBjbGFzc2Rlc2NcbiAqIFJlbmRlcnMgYW4gZW50aXJlIHJlY29yZHMgdGFibGUuIFRvIGZpbGwgdGhlIGRhdGEgeW91IG1pZ2h0IG5lZWQ6XG4gKlxuICogLSB7QGxpbmsgdXNlUmVjb3Jkc30gYW5kXG4gKiAtIHtAbGluayB1c2VTZWxlY3RlZFJlY29yZHN9IGhvb2tzXG4gKlxuICogc28gbWFrZSBzdXJlIHRvIHNlZSBhdCB0aGUgZG9jdW1lbnRhdGlvbiBwYWdlcyBmb3IgYm90aCBvZiB0aGVtXG4gKlxuICogQGNvbXBvbmVudFxuICogQGNsYXNzXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKiBAc3ViY2F0ZWdvcnkgQXBwbGljYXRpb25cbiAqIEBuZXcgaW4gdmVyc2lvbiAzLjNcbiAqL1xuZXhwb3J0IGNvbnN0IFJlY29yZHNUYWJsZTogUmVhY3QuRkM8UmVjb3Jkc1RhYmxlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICByZXNvdXJjZSwgcmVjb3JkcyxcbiAgICBhY3Rpb25QZXJmb3JtZWQsIHNvcnRCeSxcbiAgICBkaXJlY3Rpb24sIGlzTG9hZGluZyxcbiAgICBvblNlbGVjdCwgc2VsZWN0ZWRSZWNvcmRzLFxuICAgIG9uU2VsZWN0QWxsLFxuICB9ID0gcHJvcHNcbiAgaWYgKCFyZWNvcmRzLmxlbmd0aCkge1xuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgIHJldHVybiAoPExvYWRlciAvPilcbiAgICB9XG4gICAgcmV0dXJuICg8Tm9SZWNvcmRzIHJlc291cmNlPXtyZXNvdXJjZX0gLz4pXG4gIH1cblxuICBjb25zdCBzZWxlY3RlZEFsbCA9IHNlbGVjdGVkUmVjb3JkcyAmJiAhIXJlY29yZHMuZmluZChyZWNvcmQgPT4gKFxuICAgIHNlbGVjdGVkUmVjb3Jkcy5maW5kKHNlbGVjdGVkID0+IHNlbGVjdGVkLmlkID09PSByZWNvcmQuaWQpXG4gICkpXG5cbiAgY29uc3QgcmVjb3Jkc0hhdmVCdWxrQWN0aW9uID0gISFyZWNvcmRzLmZpbmQocmVjb3JkID0+IHJlY29yZC5idWxrQWN0aW9ucy5sZW5ndGgpXG5cbiAgcmV0dXJuIChcbiAgICA8VGFibGU+XG4gICAgICA8U2VsZWN0ZWRSZWNvcmRzXG4gICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgc2VsZWN0ZWRSZWNvcmRzPXtzZWxlY3RlZFJlY29yZHN9XG4gICAgICAvPlxuICAgICAgPFJlY29yZHNUYWJsZUhlYWRlclxuICAgICAgICBwcm9wZXJ0aWVzPXtyZXNvdXJjZS5saXN0UHJvcGVydGllc31cbiAgICAgICAgdGl0bGVQcm9wZXJ0eT17cmVzb3VyY2UudGl0bGVQcm9wZXJ0eX1cbiAgICAgICAgZGlyZWN0aW9uPXtkaXJlY3Rpb259XG4gICAgICAgIHNvcnRCeT17c29ydEJ5fVxuICAgICAgICBvblNlbGVjdEFsbD17cmVjb3Jkc0hhdmVCdWxrQWN0aW9uID8gb25TZWxlY3RBbGwgOiB1bmRlZmluZWR9XG4gICAgICAgIHNlbGVjdGVkQWxsPXtzZWxlY3RlZEFsbH1cbiAgICAgIC8+XG4gICAgICA8VGFibGVCb2R5PlxuICAgICAgICB7cmVjb3Jkcy5tYXAocmVjb3JkID0+IChcbiAgICAgICAgICA8UmVjb3JkSW5MaXN0XG4gICAgICAgICAgICByZWNvcmQ9e3JlY29yZH1cbiAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICAgIGtleT17cmVjb3JkLmlkfVxuICAgICAgICAgICAgYWN0aW9uUGVyZm9ybWVkPXthY3Rpb25QZXJmb3JtZWR9XG4gICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ31cbiAgICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e1xuICAgICAgICAgICAgICBzZWxlY3RlZFJlY29yZHMgJiYgISFzZWxlY3RlZFJlY29yZHMuZmluZChzZWxlY3RlZCA9PiBzZWxlY3RlZC5pZCA9PT0gcmVjb3JkLmlkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpfVxuICAgICAgPC9UYWJsZUJvZHk+XG4gICAgPC9UYWJsZT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNvcmRzVGFibGVcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgUGFnaW5hdGlvbiwgVGV4dCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCB7IHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgUmVjb3Jkc1RhYmxlIGZyb20gJy4uL2FwcC9yZWNvcmRzLXRhYmxlL3JlY29yZHMtdGFibGUnXG5pbXBvcnQgeyBBY3Rpb25Qcm9wcyB9IGZyb20gJy4vYWN0aW9uLnByb3BzJ1xuaW1wb3J0IHVzZVJlY29yZHMgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXJlY29yZHMvdXNlLXJlY29yZHMnXG5pbXBvcnQgdXNlU2VsZWN0ZWRSZWNvcmRzIGZyb20gJy4uLy4uL2hvb2tzL3VzZS1zZWxlY3RlZC1yZWNvcmRzL3VzZS1zZWxlY3RlZC1yZWNvcmRzJ1xuaW1wb3J0IHsgUkVGUkVTSF9LRVkgfSBmcm9tICcuL3V0aWxzL2FwcGVuZC1mb3JjZS1yZWZyZXNoJ1xuXG5jb25zdCBMaXN0OiBSZWFjdC5GQzxBY3Rpb25Qcm9wcz4gPSAoeyByZXNvdXJjZSwgc2V0VGFnIH0pID0+IHtcbiAgY29uc3Qge1xuICAgIHJlY29yZHMsXG4gICAgbG9hZGluZyxcbiAgICBkaXJlY3Rpb24sXG4gICAgc29ydEJ5LFxuICAgIHBhZ2UsXG4gICAgdG90YWwsXG4gICAgZmV0Y2hEYXRhLFxuICAgIHBlclBhZ2UsXG4gIH0gPSB1c2VSZWNvcmRzKHJlc291cmNlLmlkKVxuICBjb25zdCB7XG4gICAgc2VsZWN0ZWRSZWNvcmRzLFxuICAgIGhhbmRsZVNlbGVjdCxcbiAgICBoYW5kbGVTZWxlY3RBbGwsXG4gICAgc2V0U2VsZWN0ZWRSZWNvcmRzLFxuICB9ID0gdXNlU2VsZWN0ZWRSZWNvcmRzKHJlY29yZHMpXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2V0VGFnKSB7XG4gICAgICBzZXRUYWcodG90YWwudG9TdHJpbmcoKSlcbiAgICB9XG4gIH0sIFt0b3RhbF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRTZWxlY3RlZFJlY29yZHMoW10pXG4gIH0sIFtyZXNvdXJjZS5pZF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaClcbiAgICBpZiAoc2VhcmNoLmdldChSRUZSRVNIX0tFWSkpIHtcbiAgICAgIHNldFNlbGVjdGVkUmVjb3JkcyhbXSlcbiAgICB9XG4gIH0sIFtsb2NhdGlvbi5zZWFyY2hdKVxuXG4gIGNvbnN0IGhhbmRsZUFjdGlvblBlcmZvcm1lZCA9ICgpOiBhbnkgPT4gZmV0Y2hEYXRhKClcblxuICBjb25zdCBoYW5kbGVQYWdpbmF0aW9uQ2hhbmdlID0gKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKVxuICAgIHNlYXJjaC5zZXQoJ3BhZ2UnLCBwYWdlTnVtYmVyLnRvU3RyaW5nKCkpXG4gICAgaGlzdG9yeS5wdXNoKHsgc2VhcmNoOiBzZWFyY2gudG9TdHJpbmcoKSB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHZhcmlhbnQ9XCJ3aGl0ZVwiPlxuICAgICAgPFJlY29yZHNUYWJsZVxuICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgIHJlY29yZHM9e3JlY29yZHN9XG4gICAgICAgIGFjdGlvblBlcmZvcm1lZD17aGFuZGxlQWN0aW9uUGVyZm9ybWVkfVxuICAgICAgICBvblNlbGVjdD17aGFuZGxlU2VsZWN0fVxuICAgICAgICBvblNlbGVjdEFsbD17aGFuZGxlU2VsZWN0QWxsfVxuICAgICAgICBzZWxlY3RlZFJlY29yZHM9e3NlbGVjdGVkUmVjb3Jkc31cbiAgICAgICAgZGlyZWN0aW9uPXtkaXJlY3Rpb259XG4gICAgICAgIHNvcnRCeT17c29ydEJ5fVxuICAgICAgICBpc0xvYWRpbmc9e2xvYWRpbmd9XG4gICAgICAvPlxuICAgICAgPFRleHQgbXQ9XCJ4bFwiIHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICA8UGFnaW5hdGlvblxuICAgICAgICAgIHBhZ2U9e3BhZ2V9XG4gICAgICAgICAgcGVyUGFnZT17cGVyUGFnZX1cbiAgICAgICAgICB0b3RhbD17dG90YWx9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVBhZ2luYXRpb25DaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L1RleHQ+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IHtcbiAgTGlzdCBhcyBkZWZhdWx0LFxuICBMaXN0LFxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlICovXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBhZGROb3RpY2UgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2FkZC1ub3RpY2UnXG5cbi8qKlxuICogTm90aWNlTWVzc2FnZSB3aGljaCBjYW4gYmUgcHJlc2VudGVkIGFzIGEgXCJUb2FzdFwiIG1lc3NhZ2UuXG4gKiBAYWxpYXMgTm90aWNlTWVzc2FnZVxuICogQG1lbWJlcm9mIHdpdGhOb3RpY2VcbiAqL1xuZXhwb3J0IHR5cGUgTm90aWNlTWVzc2FnZSA9IHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICB0eXBlPzogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJztcbn1cblxuXG4vKipcbiAqIEFkZGl0aW9uYWwgcHJvcHMgd2hpY2ggYXJlIHBhc3NlZCB0byB5b3VyIGNvbXBvbmVudFxuICogQGFsaWFzIEFkZE5vdGljZVByb3BzXG4gKiBAbWVtYmVyb2Ygd2l0aE5vdGljZVxuICovXG5leHBvcnQgdHlwZSBBZGROb3RpY2VQcm9wcyA9IHtcbiAgLy8gRnVuY3Rpb24gdHJpZ2dlcmluZyBub3RpY2UgbWVzc2FnZXNcbiAgYWRkTm90aWNlOiAobm90aWNlOiBOb3RpY2VNZXNzYWdlKSA9PiB2b2lkO1xufVxuXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCk6IEFkZE5vdGljZVByb3BzID0+ICh7XG4gIGFkZE5vdGljZTogKG5vdGljZTogTm90aWNlTWVzc2FnZSk6IHZvaWQgPT4gZGlzcGF0Y2goYWRkTm90aWNlKG5vdGljZSkpLFxufSlcblxuLyoqXG4gKiBIaWdoZXIgT3JkZXIgQ29tcG9uZW50IHdoaWNoIGFsbG93cyB5b3UgdG8gcG9zdCBub3RpY2UgbWVzc2FnZXMgZnJvbSB5b3VyIGNvbXBvbmVudHNcbiAqXG4gKiBJdCBnaXZlcyB5b3UgdGhlIGFkZGl0aW9uYWwgcHJvcDogYGFkZE5vdGljZShub3RpY2VNZXNzYWdlKWAgdGFraW5nIHtAbGluayBOb3RpY2VNZXNzYWdlfS5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyB3aXRoTm90aWNlIH0gZnJvbSAnYWRtaW4tYnJvL2NvcmUnXG4gKlxuICogY29uc3QgTVlfTUVTU0FHRSA9IHtcbiAqICAgbWVzc2FnZTogJ0kgYW0gdG9hc3QgbWVzc2FnZScsXG4gKiAgIHR5cGU6ICdzdWNjZXNzJyxcbiAqIH1cbiAqIGNvbnN0IE15Q3VzdG9tQ29tcG9uZW50ID0gKHsgYWRkTm90aWNlIH0pID0+IHtcbiAqICAgcmV0dXJuIChcbiAqICAgICA8YSBvbkNsaWNrPXsoKSA9PiBhZGROb3RpY2UoTVlfTUVTU0FHRSl9PkNsaWNrIE1lPC9hPlxuICogICApXG4gKiB9XG4gKiBleHBvcnQgZGVmYXVsdCB3aXRoTm90aWNlKE15Q3VzdG9tQ29tcG9uZW50KVxuICogYGBgXG4gKlxuICogQGNvbXBvbmVudFxuICogQHN1YmNhdGVnb3J5IEhPQ1xuICovXG5jb25zdCB3aXRoTm90aWNlID0gQ29tcG9uZW50ID0+IGNvbm5lY3QobnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb21wb25lbnQpXG5cbmV4cG9ydCB7XG4gIHdpdGhOb3RpY2UgYXMgZGVmYXVsdCxcbiAgd2l0aE5vdGljZSxcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgVGFibGUsIFRhYmxlQm9keSwgVGFibGVSb3csIFRhYmxlQ2VsbCwgVGV4dCxcbiAgRHJhd2VyQ29udGVudCwgRHJhd2VyRm9vdGVyLCBCdXR0b24sIE1lc3NhZ2VCb3gsIEljb24sXG59IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcywgd2l0aFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBQcm9wZXJ0eVR5cGUgZnJvbSAnLi4vcHJvcGVydHktdHlwZSdcbmltcG9ydCB7IEFjdGlvblByb3BzIH0gZnJvbSAnLi9hY3Rpb24ucHJvcHMnXG5pbXBvcnQgQXBpQ2xpZW50IGZyb20gJy4uLy4uL3V0aWxzL2FwaS1jbGllbnQnXG5pbXBvcnQgd2l0aE5vdGljZSwgeyBBZGROb3RpY2VQcm9wcyB9IGZyb20gJy4uLy4uL2hvYy93aXRoLW5vdGljZSdcbmltcG9ydCB7IGFwcGVuZEZvcmNlUmVmcmVzaCB9IGZyb20gJy4vdXRpbHMvYXBwZW5kLWZvcmNlLXJlZnJlc2gnXG5cbmltcG9ydCBBY3Rpb25IZWFkZXIgZnJvbSAnLi4vYXBwL2FjdGlvbi1oZWFkZXIvYWN0aW9uLWhlYWRlcidcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5cbi8qKlxuICogQG5hbWUgU2hvd0FjdGlvblxuICogQGNhdGVnb3J5IEFjdGlvbnNcbiAqIEBkZXNjcmlwdGlvbiBTaG93cyBhIGdpdmVuIHJlY29yZC5cbiAqIEBjb21wb25lbnRcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IEJ1bGtEZWxldGU6IFJlYWN0LkZDPEFjdGlvblByb3BzICYgQWRkTm90aWNlUHJvcHMgJiBSb3V0ZUNvbXBvbmVudFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlc291cmNlLCByZWNvcmRzLCBhY3Rpb24sIGFkZE5vdGljZSwgaGlzdG9yeSB9ID0gcHJvcHNcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgeyB0cmFuc2xhdGVNZXNzYWdlLCB0cmFuc2xhdGVCdXR0b24gfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICBpZiAoIXJlY29yZHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFRleHQ+XG4gICAgICAgIHt0cmFuc2xhdGVNZXNzYWdlKCdwaWNrU29tZUZpcnN0VG9SZW1vdmUnLCByZXNvdXJjZS5pZCl9XG4gICAgICA8L1RleHQ+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXG4gICAgc2V0TG9hZGluZyh0cnVlKVxuICAgIGNvbnN0IHJlY29yZElkcyA9IHJlY29yZHMubWFwKHIgPT4gci5pZClcbiAgICBhcGkuYnVsa0FjdGlvbih7XG4gICAgICByZXNvdXJjZUlkOiByZXNvdXJjZS5pZCxcbiAgICAgIGFjdGlvbk5hbWU6IGFjdGlvbi5uYW1lLFxuICAgICAgcmVjb3JkSWRzLFxuICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgfSkudGhlbigoKHJlc3BvbnNlKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEubm90aWNlKSB7XG4gICAgICAgIGFkZE5vdGljZShyZXNwb25zZS5kYXRhLm5vdGljZSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgIGNvbnN0IHNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcbiAgICAgICAgLy8gYnVsayBmdW5jdGlvbiBoYXZlIHJlY29yZElkcyBpbiB0aGUgVVJMIHNvIGl0IGhhcyB0byBiZSBzdHJpcHBlZCBiZWZvcmUgcmVkaXJlY3RcbiAgICAgICAgc2VhcmNoLmRlbGV0ZSgncmVjb3JkSWRzJylcbiAgICAgICAgaGlzdG9yeS5wdXNoKGFwcGVuZEZvcmNlUmVmcmVzaChyZXNwb25zZS5kYXRhLnJlZGlyZWN0VXJsLCBzZWFyY2gudG9TdHJpbmcoKSkpXG4gICAgICB9XG4gICAgfSkpLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIGFkZE5vdGljZSh7XG4gICAgICAgIG1lc3NhZ2U6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2J1bGtEZWxldGVFcnJvcicsIHJlc291cmNlLmlkKSxcbiAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgIH0pXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxEcmF3ZXJDb250ZW50PlxuICAgICAgICB7YWN0aW9uPy5zaG93SW5EcmF3ZXIgPyA8QWN0aW9uSGVhZGVyIG9taXRBY3Rpb25zIHsuLi5wcm9wc30gLz4gOiBudWxsfVxuICAgICAgICA8TWVzc2FnZUJveFxuICAgICAgICAgIG1iPVwieHhsXCJcbiAgICAgICAgICB2YXJpYW50PVwiZGFuZ2VyXCJcbiAgICAgICAgICBtZXNzYWdlPXt0cmFuc2xhdGVNZXNzYWdlKCd0aGVzZVJlY29yZHNXaWxsQmVSZW1vdmVkJywgcmVzb3VyY2UuaWQsIHsgY291bnQ6IHJlY29yZHMubGVuZ3RoIH0pfVxuICAgICAgICAvPlxuICAgICAgICA8VGFibGU+XG4gICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgIHtyZWNvcmRzLm1hcChyZWNvcmQgPT4gKFxuICAgICAgICAgICAgICA8VGFibGVSb3cga2V5PXtyZWNvcmQuaWR9PlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICA8UHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgICAgICAgIHdoZXJlPVwibGlzdFwiXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5PXtyZXNvdXJjZS50aXRsZVByb3BlcnR5fVxuICAgICAgICAgICAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9EcmF3ZXJDb250ZW50PlxuICAgICAgPERyYXdlckZvb3Rlcj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cbiAgICAgICAgICB7bG9hZGluZyA/ICg8SWNvbiBpY29uPVwiRmFkZVwiIHNwaW4gLz4pIDogbnVsbH1cbiAgICAgICAgICB7dHJhbnNsYXRlQnV0dG9uKCdjb25maXJtUmVtb3ZhbE1hbnknLCByZXNvdXJjZS5pZCwgeyBjb3VudDogcmVjb3Jkcy5sZW5ndGggfSl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9EcmF3ZXJGb290ZXI+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5jb25zdCBGb3JtYXR0ZWRCdWxrRGVsZXRlID0gd2l0aE5vdGljZSh3aXRoUm91dGVyKEJ1bGtEZWxldGUpKVxuXG5leHBvcnQge1xuICBGb3JtYXR0ZWRCdWxrRGVsZXRlIGFzIGRlZmF1bHQsXG4gIEZvcm1hdHRlZEJ1bGtEZWxldGUgYXMgQnVsa0RlbGV0ZSxcbn1cbiIsImltcG9ydCB7IE5ldyB9IGZyb20gJy4vbmV3J1xuaW1wb3J0IHsgRWRpdCB9IGZyb20gJy4vZWRpdCdcbmltcG9ydCB7IFNob3cgfSBmcm9tICcuL3Nob3cnXG5pbXBvcnQgeyBMaXN0IH0gZnJvbSAnLi9saXN0J1xuaW1wb3J0IHsgQnVsa0RlbGV0ZSB9IGZyb20gJy4vYnVsay1kZWxldGUnXG5cbmV4cG9ydCAqIGZyb20gJy4vbmV3J1xuZXhwb3J0ICogZnJvbSAnLi9hY3Rpb24ucHJvcHMnXG5leHBvcnQgKiBmcm9tICcuL2VkaXQnXG5leHBvcnQgKiBmcm9tICcuL3Nob3cnXG5leHBvcnQgKiBmcm9tICcuL2xpc3QnXG5leHBvcnQgKiBmcm9tICcuL2J1bGstZGVsZXRlJ1xuZXhwb3J0ICogZnJvbSAnLi91dGlscydcblxuZXhwb3J0IGNvbnN0IGFjdGlvbnMgPSB7XG4gIG5ldzogTmV3LFxuICBlZGl0OiBFZGl0LFxuICBzaG93OiBTaG93LFxuICBsaXN0OiBMaXN0LFxuICBidWxrRGVsZXRlOiBCdWxrRGVsZXRlLFxufVxuIiwiZXhwb3J0IGNvbnN0IERPQ1MgPSAnaHR0cHM6Ly9hZG1pbmJyby5jb20nXG5leHBvcnQgY29uc3QgREVGQVVMVF9QQVRIUyA9IHtcbiAgcm9vdFBhdGg6ICcvYWRtaW4nLFxuICBsb2dvdXRQYXRoOiAnL2FkbWluL2xvZ291dCcsXG4gIGxvZ2luUGF0aDogJy9hZG1pbi9sb2dpbicsXG59XG5cbi8qIGNzcGVsbDogZGlzYWJsZS1uZXh0LWxpbmUgKi9cbmV4cG9ydCBjb25zdCBBRE1JTl9CUk9fVE1QX0RJUiA9ICcuYWRtaW5icm8nXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUcmFucyB9IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgeyBNZXNzYWdlQm94LCBMaW5rIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuL2Vycm9yLWJvdW5kYXJ5J1xuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMnXG5pbXBvcnQgeyBET0NTIH0gZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgQWN0aW9uUHJvcHMgfSBmcm9tICcuLi9hY3Rpb25zL2FjdGlvbi5wcm9wcydcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5cbmRlY2xhcmUgY29uc3QgQWRtaW5Ccm86IHtcbiAgVXNlckNvbXBvbmVudHM6IEFycmF5PHN0cmluZz47XG59XG5cbi8qKlxuICogQ29tcG9uZW50IHdoaWNoIHJlbmRlcnMgYWxsIHRoZSBkZWZhdWx0IGFuZCBjdXN0b20gYWN0aW9ucyBmb3IgYm90aCB0aGUgUmVzb3VyY2UgYW5kIHRoZSBSZWNvcmQuXG4gKlxuICogSXQgcGFzc2VzIGFsbCBwcm9wcyBkb3duIHRvIHRoZSBhY3R1YWwgQWN0aW9uIGNvbXBvbmVudC5cbiAqXG4gKiBFeGFtcGxlIG9mIGNyZWF0aW5nIHlvdXIgb3duIGFjdGlvbnM6XG4gKiBgYGBcbiAqIC8vIEFkbWluQnJvIG9wdGlvbnNcbiAqIGNvbnN0IEFkbWluQnJvT3B0aW9ucyA9IHtcbiAqICAgcmVzb3VyY2VzOiBbXG4gKiAgICAgIHJlc291cmNlLFxuICogICAgICBvcHRpb25zOiB7XG4gKiAgICAgICAgYWN0aW9uczoge1xuICogICAgICAgICAgIG15TmV3QWN0aW9uOiB7XG4gKiAgICAgICAgICAgICBsYWJlbDogJ2FtYXppbmcgYWN0aW9uJyxcbiAqICAgICAgICAgICAgIGljb246ICdBZGQnLFxuICogICAgICAgICAgICAgaW5WaXNpYmxlOiAocmVzb3VyY2UsIHJlY29yZCkgPT4gcmVjb3JkLnBhcmFtKCdlbWFpbCcpICE9PSAnJyxcbiAqICAgICAgICAgICAgIGFjdGlvblR5cGU6ICdyZWNvcmQnLFxuICogICAgICAgICAgICAgY29tcG9uZW50OiBBZG1pbkJyby5idW5kbGUoJy4vbXktbmV3LWFjdGlvbicpLFxuICogICAgICAgICAgICAgaGFuZGxlcjogKHJlcXVlc3QsIHJlc3BvbnNlLCBkYXRhKSA9PiB7XG4gKiAgICAgICAgICAgICAgIHJldHVybiB7XG4gKiAgICAgICAgICAgICAgICAgIC4uLlxuICogICAgICAgICAgICAgICB9XG4gKiAgICAgICAgICAgICB9XG4gKiAgICAgICAgICAgfVxuICogICAgICAgIH1cbiAqICAgICAgfVxuICogICBdXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBgYGBcbiAqIC8vIC4vbXktbmV3LWFjdGlvbi5qc3hcbiAqIGltcG9ydCB7IEJveCB9IGZyb20gJ2FkbWluLWJybydcbiAqXG4gKiBjb25zdCBNeU5ld0FjdGlvbiA9IChwcm9wcykgPT4ge1xuICogICBjb25zdCB7IHJlc291cmNlLCBhY3Rpb24sIHJlY29yZCB9ID0gcHJvcHNcbiAqICAgLy8gZG8gc29tZXRoaW5nIHdpdGggdGhlIHByb3BzIGFuZCByZW5kZXIgYWN0aW9uXG4gKiAgIHJldHVybiAoXG4gKiAgICAgPEJveD5Tb21lIEFjdGlvbiBDb250ZW50PC9Cb3g+XG4gKiAgIClcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBjb21wb25lbnRcbiAqIEBuYW1lIEJhc2VBY3Rpb25Db21wb25lbnRcbiAqIEBzdWJjYXRlZ29yeSBBcHBsaWNhdGlvblxuICovXG5leHBvcnQgY29uc3QgQmFzZUFjdGlvbkNvbXBvbmVudDogUmVhY3QuRkM8QWN0aW9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2UsIGFjdGlvbiwgcmVjb3JkLCByZWNvcmRzLCBzZXRUYWcsIGRhdGEgfSA9IHByb3BzXG4gIGNvbnN0IGRvY3VtZW50YXRpb25MaW5rID0gW0RPQ1MsICdCYXNlQWN0aW9uLmh0bWwnXS5qb2luKCcvJylcblxuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICBsZXQgQWN0aW9uID0gYWN0aW9uc1thY3Rpb24ubmFtZV1cblxuICBpZiAoYWN0aW9uLmNvbXBvbmVudCkge1xuICAgIEFjdGlvbiA9IEFkbWluQnJvLlVzZXJDb21wb25lbnRzW2FjdGlvbi5jb21wb25lbnRdXG4gIH1cblxuICBpZiAoQWN0aW9uKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICA8QWN0aW9uXG4gICAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxuICAgICAgICAgIHJlY29yZHM9e3JlY29yZHN9XG4gICAgICAgICAgc2V0VGFnPXtzZXRUYWd9XG4gICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgLz5cbiAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICApXG4gIH1cbiAgcmV0dXJuIEFjdGlvbiB8fCAoXG4gICAgPE1lc3NhZ2VCb3ggdmFyaWFudD1cImRhbmdlclwiPlxuICAgICAge3RyYW5zbGF0ZU1lc3NhZ2UoJ25vQWN0aW9uQ29tcG9uZW50Jyl9XG4gICAgICA8VHJhbnMga2V5PVwibWVzc2FnZXMuYnV0dG9ucy5zZWVUaGVEb2N1bWVudGF0aW9uXCI+XG4gICAgICAgIFNlZTpcbiAgICAgICAgPExpbmsgbWw9XCJkZWZhdWx0XCIgaHJlZj17ZG9jdW1lbnRhdGlvbkxpbmt9PnRoZSBkb2N1bWVudGF0aW9uPC9MaW5rPlxuICAgICAgPC9UcmFucz5cbiAgICA8L01lc3NhZ2VCb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZUFjdGlvbkNvbXBvbmVudFxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTWVzc2FnZUJveCwgVGV4dCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5cbi8qKlxuICogQG1lbWJlcm9mIEVycm9yTWVzc2FnZUJveFxuICogQGFsaWFzIEVycm9yTWVzc2FnZUJveFByb3BzXG4gKi9cbmV4cG9ydCB0eXBlIEVycm9yTWVzc2FnZUJveFByb3BzID0ge1xuICB0aXRsZTogc3RyaW5nO1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICB0ZXN0SWQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGNsYXNzXG4gKiBQcmludHMgZXJyb3IgbWVzc2FnZVxuICpcbiAqIEBjb21wb25lbnRcbiAqIEBwcml2YXRlXG4gKiBAZXhhbXBsZVxuICogcmV0dXJuIChcbiAqIDxFcnJvck1lc3NhZ2VCb3ggdGl0bGU9eydTb21lIGVycm9yJ30+XG4gKiAgIDxwPlRleHQgYmVsb3cgdGhlIHRpdGxlPC9wPlxuICogPC9FcnJvck1lc3NhZ2VCb3g+XG4gKiApXG4gKi9cbmNvbnN0IEVycm9yTWVzc2FnZUJveDogUmVhY3QuRkM8RXJyb3JNZXNzYWdlQm94UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHRpdGxlLCB0ZXN0SWQgfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgPE1lc3NhZ2VCb3ggZGF0YS10ZXN0aWQ9e3Rlc3RJZH0gbWVzc2FnZT17dGl0bGV9PlxuICAgICAgPFRleHQ+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvVGV4dD5cbiAgICA8L01lc3NhZ2VCb3g+XG4gIClcbn1cblxuY29uc3QgTm9SZXNvdXJjZUVycm9yOiBSZWFjdC5GQzx7cmVzb3VyY2VJZDogc3RyaW5nfT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZUlkIH0gPSBwcm9wc1xuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgcmV0dXJuIChcbiAgICA8TWVzc2FnZUJveFxuICAgICAgbWVzc2FnZT1cIjQwNCAtIFBBR0UgTk9UIEZPVU5EXCJcbiAgICAgIGRhdGEtdGVzdGlkPVwiTm9SZXNvdXJjZUVycm9yXCJcbiAgICAgIHZhcmlhbnQ9XCJpbmZvXCJcbiAgICAgIG09XCJ4eGxcIlxuICAgID5cbiAgICAgIDxUZXh0PlxuICAgICAgICB7dHJhbnNsYXRlTWVzc2FnZSgnZXJyb3I0MDRSZXNvdXJjZScsIHJlc291cmNlSWQsIHsgcmVzb3VyY2VJZCB9KX1cbiAgICAgIDwvVGV4dD5cbiAgICA8L01lc3NhZ2VCb3g+XG4gIClcbn1cblxuY29uc3QgTm9BY3Rpb25FcnJvcjogUmVhY3QuRkM8e3Jlc291cmNlSWQ6IHN0cmluZzsgYWN0aW9uTmFtZTogc3RyaW5nfT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lIH0gPSBwcm9wc1xuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgcmV0dXJuIChcbiAgICA8TWVzc2FnZUJveFxuICAgICAgbWVzc2FnZT1cIjQwNCAtIFBBR0UgTk9UIEZPVU5EXCJcbiAgICAgIGRhdGEtdGVzdGlkPVwiTm9BY3Rpb25FcnJvclwiXG4gICAgICB2YXJpYW50PVwiaW5mb1wiXG4gICAgICBtPVwieHhsXCJcbiAgICA+XG4gICAgICA8VGV4dD5cbiAgICAgICAge3RyYW5zbGF0ZU1lc3NhZ2UoJ2Vycm9yNDA0QWN0aW9uJywgcmVzb3VyY2VJZCwgeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lIH0pfVxuICAgICAgPC9UZXh0PlxuICAgIDwvTWVzc2FnZUJveD5cbiAgKVxufVxuXG5jb25zdCBOb1JlY29yZEVycm9yOiBSZWFjdC5GQzx7XG4gIHJlc291cmNlSWQ6IHN0cmluZztcbiAgcmVjb3JkSWQ6IHN0cmluZztcbn0+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2VJZCwgcmVjb3JkSWQgfSA9IHByb3BzXG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICByZXR1cm4gKFxuICAgIDxNZXNzYWdlQm94XG4gICAgICBtZXNzYWdlPVwiNDA0IC0gUEFHRSBOT1QgRk9VTkRcIlxuICAgICAgZGF0YS10ZXN0aWQ9XCJOb1JlY29yZEVycm9yXCJcbiAgICAgIHZhcmlhbnQ9XCJpbmZvXCJcbiAgICAgIG09XCJ4eGxcIlxuICAgID5cbiAgICAgIDxUZXh0PlxuICAgICAgICB7dHJhbnNsYXRlTWVzc2FnZSgnZXJyb3I0MDRSZWNvcmQnLCByZXNvdXJjZUlkLCB7IHJlc291cmNlSWQsIHJlY29yZElkIH0pfVxuICAgICAgPC9UZXh0PlxuICAgIDwvTWVzc2FnZUJveD5cbiAgKVxufVxuXG5leHBvcnQge1xuICBOb1Jlc291cmNlRXJyb3IsXG4gIE5vQWN0aW9uRXJyb3IsXG4gIE5vUmVjb3JkRXJyb3IsXG4gIEVycm9yTWVzc2FnZUJveCxcbiAgRXJyb3JNZXNzYWdlQm94IGFzIGRlZmF1bHQsXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBCb3gsIEJveFByb3BzLCBEcmF3ZXJDb250ZW50LCBEcmF3ZXJGb290ZXIgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQoQm94KWBcbiAgJiAke0RyYXdlckNvbnRlbnR9IHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICBwYWRkaW5nOiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuc3BhY2UueHhsfTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuICBcbiAgJiAke0RyYXdlckZvb3Rlcn0ge1xuICAgIGJhY2tncm91bmQ6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5jb2xvcnMud2hpdGV9O1xuICAgIHBhZGRpbmc6IDAgJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLnNwYWNlLnh4bH0gJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLnNwYWNlLnh4bH07XG4gIH1cbmBcblxuY29uc3QgV3JhcHBlcjogUmVhY3QuRkM8Qm94UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgY29uc3QgeyBjaGlsZHJlbiwgdmFyaWFudCwgY29sb3IsIC4uLnJlc3QgfSA9IHByb3BzXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFdyYXBwZXIgey4uLnJlc3R9IHZhcmlhbnQ9XCJncmV5XCIgbXg9XCJhdXRvXCI+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9TdHlsZWRXcmFwcGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFdyYXBwZXJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIFJlYWN0Tm9kZSwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCwgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xuaW1wb3J0IHsgRHJhd2VyLCBERUZBVUxUX0RSQVdFUl9XSURUSCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuLyoqXG4gKiBAYWxpYXMgRHJhd2VyUG9ydGFsUHJvcHNcbiAqIEBtZW1iZXJvZiBEcmF3ZXJQb3J0YWxcbiAqL1xuZXhwb3J0IHR5cGUgRHJhd2VyUG9ydGFsUHJvcHMgPSB7XG4gIC8qKlxuICAgKiBUaGUgZHJhd2VyIGNvbnRlbnRcbiAgICovXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsIGRyYXdlciB3aWR0aFxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmcgfCBBcnJheTxudW1iZXIgfCBzdHJpbmc+O1xufVxuXG5jb25zdCBEUkFXRVJfUE9SVEFMX0lEID0gJ2RyYXdlclBvcnRhbCdcblxuLyoqXG4gKiBTaG93cyBhbGwgb2YgaXRzIGNoaWxkcmVuIGluIGEgRHJhd2VyIG9uIHRoZSByaWdodC5cbiAqIEluc3RlYWQgb2YgcmVuZGVyaW5nIGl0J3Mgb3duIHtAbGluayBEcmF3ZXJ9IGNvbXBvbmVudCBpdCByZXVzZXNcbiAqIHRoZSBnbG9iYWwgRHJhd2VyIHZpYSBSZWFjdCBQb3J0YWwuXG4gKlxuICogIyMjIFVzYWdlXG4gKlxuICogYGBgXG4gKiBpbXBvcnQgeyBEcmF3ZXJQb3J0YWwgfSBmcm9tICdhZG1pbi1icm8nXG4gKiBgYGBcbiAqXG4gKiBAY29tcG9uZW50XG4gKiBAc3ViY2F0ZWdvcnkgQXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IERyYXdlclBvcnRhbDogUmVhY3QuRkM8RHJhd2VyUG9ydGFsUHJvcHM+ID0gKHsgY2hpbGRyZW4sIHdpZHRoIH0pID0+IHtcbiAgY29uc3QgW2RyYXdlckVsZW1lbnQsIHNldERyYXdlckVsZW1lbnRdID0gdXNlU3RhdGU8SFRNTEVsZW1lbnQgfCBudWxsPihcbiAgICB3aW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoRFJBV0VSX1BPUlRBTF9JRCksXG4gIClcbiAgaWYgKCFkcmF3ZXJFbGVtZW50ICYmIHdpbmRvdykge1xuICAgIGNvbnN0IGlubmVyV3JhcHBlciA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IERyYXdlcldyYXBwZXIgPSAoXG4gICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17KHdpbmRvdyBhcyBhbnkpLlRIRU1FfT5cbiAgICAgICAgPERyYXdlciBpZD17RFJBV0VSX1BPUlRBTF9JRH0gY2xhc3NOYW1lPVwiaGlkZGVuXCIgLz5cbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICApXG4gICAgd2luZG93LmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5uZXJXcmFwcGVyKVxuICAgIHJlbmRlcihEcmF3ZXJXcmFwcGVyLCBpbm5lcldyYXBwZXIsICgpID0+IHtcbiAgICAgIHNldERyYXdlckVsZW1lbnQod2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKERSQVdFUl9QT1JUQUxfSUQpKVxuICAgIH0pXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkcmF3ZXJFbGVtZW50KSB7XG4gICAgICBkcmF3ZXJFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgICBpZiAod2lkdGgpIHtcbiAgICAgICAgZHJhd2VyRWxlbWVudC5zdHlsZS53aWR0aCA9IEFycmF5LmlzQXJyYXkod2lkdGgpID8gd2lkdGhbMF0udG9TdHJpbmcoKSA6IHdpZHRoLnRvU3RyaW5nKClcbiAgICAgIH1cbiAgICAgIHJldHVybiAoKTogdm9pZCA9PiB7XG4gICAgICAgIGRyYXdlckVsZW1lbnQuc3R5bGUud2lkdGggPSBERUZBVUxUX0RSQVdFUl9XSURUSFxuICAgICAgICBkcmF3ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoKTogdm9pZCA9PiB1bmRlZmluZWRcbiAgfSwgW2RyYXdlckVsZW1lbnRdKVxuXG4gIGlmICghZHJhd2VyRWxlbWVudCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICByZXR1cm4gY3JlYXRlUG9ydGFsKFxuICAgIGNoaWxkcmVuLFxuICAgIGRyYXdlckVsZW1lbnQsXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRHJhd2VyUG9ydGFsXG4iLCJpbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudCwgU3ludGhldGljRXZlbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uLCB1c2VSb3V0ZU1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7XG4gIEJveCxcbiAgSDMsXG4gIEJ1dHRvbixcbiAgSWNvbixcbiAgRHJhd2VyLFxuICBEcmF3ZXJDb250ZW50LFxuICBEcmF3ZXJGb290ZXIsXG59IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFByb3BlcnR5VHlwZSBmcm9tICcuLi9wcm9wZXJ0eS10eXBlJ1xuaW1wb3J0IHsgUmVjb3JkSlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5cbmV4cG9ydCB0eXBlIEZpbHRlclByb3BzID0ge1xuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xuICB0b2dnbGVGaWx0ZXI6ICgpID0+IHZvaWQ7XG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcbn1cblxudHlwZSBNYXRjaFByb3BzID0ge1xuICByZXNvdXJjZUlkOiBzdHJpbmc7XG59XG5cbmNvbnN0IHBhcnNlUXVlcnkgPSAobG9jYXRpb24pOiBhbnkgPT4ge1xuICBjb25zdCBmaWx0ZXI6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fVxuICBjb25zdCBxdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKVxuICBmb3IgKGNvbnN0IGVudHJ5IG9mIHF1ZXJ5LmVudHJpZXMoKSkge1xuICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5XG4gICAgaWYgKGtleS5tYXRjaCgnZmlsdGVycy4nKSkge1xuICAgICAgZmlsdGVyW2tleS5yZXBsYWNlKCdmaWx0ZXJzLicsICcnKV0gPSB2YWx1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmlsdGVyXG59XG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJEcmF3ZXI6IFJlYWN0LkZDPEZpbHRlclByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlc291cmNlLCBpc1Zpc2libGUsIHRvZ2dsZUZpbHRlciB9ID0gcHJvcHNcbiAgY29uc3QgcHJvcGVydGllcyA9IHJlc291cmNlLmZpbHRlclByb3BlcnRpZXNcblxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgW2ZpbHRlciwgc2V0RmlsdGVyXSA9IHVzZVN0YXRlKHBhcnNlUXVlcnkobG9jYXRpb24pKVxuICBjb25zdCBtYXRjaCA9IHVzZVJvdXRlTWF0Y2g8TWF0Y2hQcm9wcz4oKVxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG4gIGNvbnN0IHsgdHJhbnNsYXRlTGFiZWwsIHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRGaWx0ZXIoe30pLCBbbWF0Y2gucGFyYW1zLnJlc291cmNlSWRdKVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogU3ludGhldGljRXZlbnQpOiBmYWxzZSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IHNlYXJjaCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaClcbiAgICBPYmplY3Qua2V5cyhmaWx0ZXIpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKGZpbHRlcltrZXldICE9PSAnJykge1xuICAgICAgICBzZWFyY2guc2V0KGBmaWx0ZXJzLiR7a2V5fWAsIGZpbHRlcltrZXldKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VhcmNoLmRlbGV0ZShgZmlsdGVycy4ke2tleX1gKVxuICAgICAgfVxuICAgIH0pXG4gICAgc2VhcmNoLnNldCgncGFnZScsICcxJylcbiAgICBoaXN0b3J5LnB1c2goYCR7aGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZX0/JHtzZWFyY2gudG9TdHJpbmcoKX1gKVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgcmVzZXRGaWx0ZXIgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgZmlsdGVyZWRTZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgICBjb25zdCBzZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgZm9yIChjb25zdCBrZXkgb2Ygc2VhcmNoLmtleXMoKSkge1xuICAgICAgaWYgKCFrZXkubWF0Y2goJ2ZpbHRlcnMuJykpIHtcbiAgICAgICAgZmlsdGVyZWRTZWFyY2guc2V0KGtleSwgc2VhcmNoLmdldChrZXkpIGFzIHN0cmluZylcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcXVlcnkgPSBmaWx0ZXJlZFNlYXJjaC50b1N0cmluZygpID09PSAnJyA/IGA/JHtmaWx0ZXJlZFNlYXJjaC50b1N0cmluZygpfWAgOiAnJ1xuICAgIGhpc3RvcnkucHVzaChoaXN0b3J5LmxvY2F0aW9uLnBhdGhuYW1lICsgcXVlcnkpXG4gICAgc2V0RmlsdGVyKHt9KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHByb3BlcnR5TmFtZTogc3RyaW5nIHwgUmVjb3JkSlNPTiwgdmFsdWU6IGFueSk6IHZvaWQgPT4ge1xuICAgIGlmICgocHJvcGVydHlOYW1lIGFzIFJlY29yZEpTT04pLnBhcmFtcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCd5b3UgY2FuIG5vdCBwYXNzIFJlY29yZEpTT04gdG8gZmlsdGVycycpXG4gICAgfVxuICAgIHNldEZpbHRlcih7XG4gICAgICAuLi5maWx0ZXIsXG4gICAgICBbcHJvcGVydHlOYW1lIGFzIHN0cmluZ106IHZhbHVlLFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxEcmF3ZXIgdmFyaWFudD1cImZpbHRlclwiIGlzSGlkZGVuPXshaXNWaXNpYmxlfSBhcz1cImZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgIDxEcmF3ZXJDb250ZW50PlxuICAgICAgICA8SDM+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgICAgICByb3VuZGVkXG4gICAgICAgICAgICBtcj1cImxnXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpOiB2b2lkID0+IHRvZ2dsZUZpbHRlcigpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIGljb249XCJDaGV2cm9uUmlnaHRcIiBjb2xvcj1cIndoaXRlXCIgLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICB7dHJhbnNsYXRlTGFiZWwoJ2ZpbHRlcnMnLCByZXNvdXJjZS5pZCl9XG4gICAgICAgIDwvSDM+XG4gICAgICAgIDxCb3ggbXk9XCJ4M1wiPlxuICAgICAgICAgIHtwcm9wZXJ0aWVzLm1hcChwcm9wZXJ0eSA9PiAoXG4gICAgICAgICAgICA8UHJvcGVydHlUeXBlXG4gICAgICAgICAgICAgIGtleT17cHJvcGVydHkucHJvcGVydHlQYXRofVxuICAgICAgICAgICAgICB3aGVyZT1cImZpbHRlclwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9EcmF3ZXJDb250ZW50PlxuICAgICAgPERyYXdlckZvb3Rlcj5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIHNpemU9XCJsZ1wiPlxuICAgICAgICAgIHt0cmFuc2xhdGVCdXR0b24oJ2FwcGx5Q2hhbmdlcycsIHJlc291cmNlLmlkKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInRleHRcIiBzaXplPVwibGdcIiBvbkNsaWNrPXtyZXNldEZpbHRlcn0gdHlwZT1cImJ1dHRvblwiIGNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAgICB7dHJhbnNsYXRlQnV0dG9uKCdyZXNldEZpbHRlcicsIHJlc291cmNlLmlkKX1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0RyYXdlckZvb3Rlcj5cbiAgICA8L0RyYXdlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJEcmF3ZXJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyB1c2VSb3V0ZU1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgQmFzZUFjdGlvbkNvbXBvbmVudCBmcm9tICcuLi9hcHAvYmFzZS1hY3Rpb24tY29tcG9uZW50J1xuaW1wb3J0IEFwaUNsaWVudCBmcm9tICcuLi8uLi91dGlscy9hcGktY2xpZW50J1xuaW1wb3J0IHsgUmVjb3JkQWN0aW9uUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiwgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQge1xuICAgIE5vUmVzb3VyY2VFcnJvcixcbiAgICBOb0FjdGlvbkVycm9yLFxuICAgIE5vUmVjb3JkRXJyb3IsXG59IGZyb20gJy4uL2FwcC9lcnJvci1tZXNzYWdlJ1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi91dGlscy93cmFwcGVyJ1xuaW1wb3J0IHsgQWN0aW9uSGVhZGVyIH0gZnJvbSAnLi4vYXBwJ1xuaW1wb3J0IHsgdXNlTm90aWNlLCB1c2VSZXNvdXJjZSwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9ob29rcydcbmltcG9ydCBEcmF3ZXJQb3J0YWwgZnJvbSAnLi4vYXBwL2RyYXdlci1wb3J0YWwnXG5pbXBvcnQge1xuICAgIEFjdGlvblJlc3BvbnNlLFxuICAgIFJlY29yZEFjdGlvblJlc3BvbnNlLFxufSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL2FjdGlvbnMvYWN0aW9uLmludGVyZmFjZSdcbmltcG9ydCBtZXJnZVJlY29yZFJlc3BvbnNlIGZyb20gJy4uLy4uL2hvb2tzL3VzZS1yZWNvcmQvbWVyZ2UtcmVjb3JkLXJlc3BvbnNlJ1xuXG5jb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcblxuY29uc3QgUmVjb3JkQWN0aW9uOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTx7XG4gICAgICAgIHJlY29yZDogUmVjb3JkSlNPTlxuICAgICAgICBba2V5OiBzdHJpbmddOiBhbnlcbiAgICB9PigpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBtYXRjaCA9IHVzZVJvdXRlTWF0Y2g8UmVjb3JkQWN0aW9uUGFyYW1zPigpXG4gICAgY29uc3QgYWRkTm90aWNlID0gdXNlTm90aWNlKClcbiAgICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICAgIGNvbnN0IHsgYWN0aW9uTmFtZSwgcmVjb3JkSWQsIHJlc291cmNlSWQgfSA9IG1hdGNoLnBhcmFtc1xuICAgIGNvbnN0IHJlc291cmNlID0gdXNlUmVzb3VyY2UocmVzb3VyY2VJZClcblxuICAgIGNvbnN0IGFjdGlvbiA9XG4gICAgICAgIGRhdGE/LnJlY29yZCAmJlxuICAgICAgICBkYXRhLnJlY29yZC5yZWNvcmRBY3Rpb25zLmZpbmQoKHIpID0+IHIubmFtZSA9PT0gYWN0aW9uTmFtZSlcblxuICAgIGNvbnN0IGZldGNoUmVjb3JkID0gKCk6IHZvaWQgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgIGFwaS5yZWNvcmRBY3Rpb24obWF0Y2gucGFyYW1zKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGFkZE5vdGljZSh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRyYW5zbGF0ZU1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZXJyb3JGZXRjaGluZ1JlY29yZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZUlkXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaFJlY29yZCgpXG4gICAgfSwgW2FjdGlvbk5hbWUsIHJlY29yZElkLCByZXNvdXJjZUlkXSlcblxuICAgIGNvbnN0IGhhbmRsZUFjdGlvblBlcmZvcm1lZCA9IHVzZUNhbGxiYWNrKFxuICAgICAgICAob2xkUmVjb3JkOiBSZWNvcmRKU09OLCByZXNwb25zZTogQWN0aW9uUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZWNvcmQpIHtcbiAgICAgICAgICAgICAgICBzZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkOiBtZXJnZVJlY29yZFJlc3BvbnNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkUmVjb3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UgYXMgUmVjb3JkQWN0aW9uUmVzcG9uc2VcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmZXRjaFJlY29yZCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtmZXRjaFJlY29yZF1cbiAgICApXG5cbiAgICBpZiAoIXJlc291cmNlKSB7XG4gICAgICAgIHJldHVybiA8Tm9SZXNvdXJjZUVycm9yIHJlc291cmNlSWQ9e3Jlc291cmNlSWR9IC8+XG4gICAgfVxuXG4gICAgLy8gV2hlbiB0aGUgdXNlciB2aXNpdHMgdGhpcyByb3V0ZSAocmVjb3JkIGFjdGlvbikgZnJvbSBhIGRpZmZlcmVudCwgdGhhbiB0aGUgY3VycmVudCBvbmUsIHJlY29yZC5cbiAgICAvLyBJdCByZW5kZXJzIGV2ZXJ5dGhpbmcgd2l0aCBhIG5ldyByZXNvdXJjZS4gVGhlIG9sZCByZWNvcmQgcmVtYWlucyB1bnRpbCB1c2VFZmZlY3QgZmV0Y2hlcyBkYXRhXG4gICAgLy8gZnJvbSB0aGUgQVBJLiB0aGF0IGlzIHdoeSB3ZSBoYXZlIHRvIGNoZWNrIGlmIHRoZSBjdXJyZW50IHJlY29yZCBoYXMgY29ycmVjdCByZWNvcmQuaWQuXG4gICAgLy8gQWx0ZXJuYXRpdmUgYXBwcm9hY2ggd291bGQgYmUgdG8gc2V0UmVjb3JkKHVuZGVmaW5lZCkgYmVmb3JlIHRoZSBmZXRjaCwgYnV0IGl0IGlzIGFzeW5jIGFuZFxuICAgIC8vIHdlIGNhbm5vdCBiZSBzdXJlIHRoYXQgdGhlIGNvbXBvbmVudCB3b250IGJlIHJlbmRlcmVkIChpdCB3aWxsIGJlIGF0IGxlYXN0IG9uY2UpIHdpdGggdGhlXG4gICAgLy8gd3JvbmcgZGF0YS5cbiAgICBjb25zdCBoYXNEaWZmZXJlbnRSZWNvcmQgPVxuICAgICAgICBkYXRhPy5yZWNvcmQgJiYgZGF0YS5yZWNvcmQuaWQudG9TdHJpbmcoKSAhPT0gcmVjb3JkSWRcblxuICAgIGlmIChsb2FkaW5nIHx8IGhhc0RpZmZlcmVudFJlY29yZCkge1xuICAgICAgICBjb25zdCBhY3Rpb25Gcm9tUmVzb3VyY2UgPSByZXNvdXJjZS5hY3Rpb25zLmZpbmQoXG4gICAgICAgICAgICAocikgPT4gci5uYW1lID09PSBhY3Rpb25OYW1lXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGFjdGlvbkZyb21SZXNvdXJjZT8uc2hvd0luRHJhd2VyID8gKFxuICAgICAgICAgICAgPERyYXdlclBvcnRhbD5cbiAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICA8L0RyYXdlclBvcnRhbD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiA8Tm9BY3Rpb25FcnJvciByZXNvdXJjZUlkPXtyZXNvdXJjZUlkfSBhY3Rpb25OYW1lPXthY3Rpb25OYW1lfSAvPlxuICAgIH1cblxuICAgIGlmICghZGF0YT8ucmVjb3JkKSB7XG4gICAgICAgIHJldHVybiA8Tm9SZWNvcmRFcnJvciByZXNvdXJjZUlkPXtyZXNvdXJjZUlkfSByZWNvcmRJZD17cmVjb3JkSWR9IC8+XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi5zaG93SW5EcmF3ZXIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEcmF3ZXJQb3J0YWwgd2lkdGg9e2FjdGlvbi5jb250YWluZXJXaWR0aH0+XG4gICAgICAgICAgICAgICAgPEJhc2VBY3Rpb25Db21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXthY3Rpb24gYXMgQWN0aW9uSlNPTn1cbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgICAgICAgICAgICByZWNvcmQ9e2RhdGEucmVjb3JkfVxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0RyYXdlclBvcnRhbD5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVyIHdpZHRoPXthY3Rpb24uY29udGFpbmVyV2lkdGh9PlxuICAgICAgICAgICAgPEFjdGlvbkhlYWRlclxuICAgICAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgICAgICAgICByZWNvcmQ9e2RhdGEucmVjb3JkfVxuICAgICAgICAgICAgICAgIGFjdGlvblBlcmZvcm1lZD17KHJlc3BvbnNlOiBBY3Rpb25SZXNwb25zZSk6IHZvaWQgPT5cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQWN0aW9uUGVyZm9ybWVkKGRhdGEucmVjb3JkLCByZXNwb25zZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJhc2VBY3Rpb25Db21wb25lbnRcbiAgICAgICAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgICAgICAgcmVjb3JkPXtkYXRhLnJlY29yZH1cbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjb3JkQWN0aW9uXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgQmFzZUFjdGlvbkNvbXBvbmVudCBmcm9tICcuLi9hcHAvYmFzZS1hY3Rpb24tY29tcG9uZW50J1xuaW1wb3J0IHsgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IFJlZHV4U3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcbmltcG9ydCB7IE5vUmVzb3VyY2VFcnJvciwgTm9BY3Rpb25FcnJvciB9IGZyb20gJy4uL2FwcC9lcnJvci1tZXNzYWdlJ1xuaW1wb3J0IHsgUmVzb3VyY2VBY3Rpb25QYXJhbXMgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXG5pbXBvcnQgeyBBY3Rpb25IZWFkZXIgfSBmcm9tICcuLi9hcHAnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuL3V0aWxzL3dyYXBwZXInXG5pbXBvcnQgRHJhd2VyUG9ydGFsIGZyb20gJy4uL2FwcC9kcmF3ZXItcG9ydGFsJ1xuXG50eXBlIFByb3BzRnJvbVN0YXRlID0ge1xuICByZXNvdXJjZXM6IEFycmF5PFJlc291cmNlSlNPTj47XG59XG5cbnR5cGUgUHJvcHMgPSBQcm9wc0Zyb21TdGF0ZSAmIFJvdXRlQ29tcG9uZW50UHJvcHM8UmVzb3VyY2VBY3Rpb25QYXJhbXM+XG5cbmNvbnN0IFJlc291cmNlQWN0aW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZXMsIG1hdGNoIH0gPSBwcm9wc1xuICBjb25zdCB7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUgfSA9IG1hdGNoLnBhcmFtc1xuXG4gIGNvbnN0IHJlc291cmNlID0gcmVzb3VyY2VzLmZpbmQociA9PiByLmlkID09PSByZXNvdXJjZUlkKVxuICBpZiAoIXJlc291cmNlKSB7XG4gICAgcmV0dXJuICg8Tm9SZXNvdXJjZUVycm9yIHJlc291cmNlSWQ9e3Jlc291cmNlSWR9IC8+KVxuICB9XG4gIGNvbnN0IGFjdGlvbiA9IHJlc291cmNlLnJlc291cmNlQWN0aW9ucy5maW5kKHIgPT4gci5uYW1lID09PSBhY3Rpb25OYW1lKVxuICBpZiAoIWFjdGlvbikge1xuICAgIHJldHVybiAoPE5vQWN0aW9uRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gYWN0aW9uTmFtZT17YWN0aW9uTmFtZX0gLz4pXG4gIH1cblxuICBpZiAoYWN0aW9uLnNob3dJbkRyYXdlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8RHJhd2VyUG9ydGFsIHdpZHRoPXthY3Rpb24uY29udGFpbmVyV2lkdGh9PlxuICAgICAgICA8QmFzZUFjdGlvbkNvbXBvbmVudFxuICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxuICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgLz5cbiAgICAgIDwvRHJhd2VyUG9ydGFsPlxuICAgIClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFdyYXBwZXIgd2lkdGg9e2FjdGlvbi5jb250YWluZXJXaWR0aH0+XG4gICAgICA8QWN0aW9uSGVhZGVyXG4gICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAvPlxuICAgICAgPEJhc2VBY3Rpb25Db21wb25lbnRcbiAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgIC8+XG4gICAgPC9XcmFwcGVyPlxuICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUmVkdXhTdGF0ZSk6IFByb3BzRnJvbVN0YXRlID0+ICh7XG4gIHJlc291cmNlczogc3RhdGUucmVzb3VyY2VzLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFJlc291cmNlQWN0aW9uKVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcbmltcG9ydCB7IHVzZVJvdXRlTWF0Y2gsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuXG5pbXBvcnQgeyBCdWxrQWN0aW9uUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuXG5pbXBvcnQgQXBpQ2xpZW50IGZyb20gJy4uLy4uL3V0aWxzL2FwaS1jbGllbnQnXG5pbXBvcnQgZ2V0QnVsa0FjdGlvbnNGcm9tUmVjb3JkcyBmcm9tICcuLi9hcHAvcmVjb3Jkcy10YWJsZS91dGlscy9nZXQtYnVsay1hY3Rpb25zLWZyb20tcmVjb3JkcydcbmltcG9ydCB7IEFjdGlvbkpTT04sIFJlY29yZEpTT04sIFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuL3V0aWxzL3dyYXBwZXInXG5pbXBvcnQge1xuICAgIEFjdGlvbkhlYWRlcixcbiAgICBEcmF3ZXJQb3J0YWwsXG4gICAgQmFzZUFjdGlvbkNvbXBvbmVudCxcbiAgICBFcnJvck1lc3NhZ2VCb3gsXG4gICAgTm9SZXNvdXJjZUVycm9yLFxuICAgIE5vQWN0aW9uRXJyb3IsXG59IGZyb20gJy4uL2FwcCdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uLCB1c2VOb3RpY2UsIHVzZVJlc291cmNlIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5cbnR5cGUgUHJvcHNGcm9tU3RhdGUgPSB7XG4gICAgcmVzb3VyY2VzOiBBcnJheTxSZXNvdXJjZUpTT04+XG59XG5cbnR5cGUgTWF0Y2hQYXJhbXMgPSBQaWNrPEJ1bGtBY3Rpb25QYXJhbXMsICdhY3Rpb25OYW1lJyB8ICdyZXNvdXJjZUlkJz5cblxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXG5cbmNvbnN0IEJ1bGtBY3Rpb246IFJlYWN0LkZDID0gKCkgPT4ge1xuICAgIGNvbnN0IG1hdGNoID0gdXNlUm91dGVNYXRjaDxNYXRjaFBhcmFtcz4oKVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlPGFueT4oKVxuICAgIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICAgIGNvbnN0IGFkZE5vdGljZSA9IHVzZU5vdGljZSgpXG4gICAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG5cbiAgICBjb25zdCB7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUgfSA9IG1hdGNoLnBhcmFtc1xuICAgIGNvbnN0IHJlc291cmNlID0gdXNlUmVzb3VyY2UocmVzb3VyY2VJZClcblxuICAgIGNvbnN0IGZldGNoUmVjb3JkcyA9ICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiAgICAgICAgY29uc3QgcmVjb3JkSWRzU3RyaW5nID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpLmdldChcbiAgICAgICAgICAgICdyZWNvcmRJZHMnXG4gICAgICAgIClcbiAgICAgICAgY29uc3QgcmVjb3JkSWRzID0gcmVjb3JkSWRzU3RyaW5nID8gcmVjb3JkSWRzU3RyaW5nLnNwbGl0KCcsJykgOiBbXVxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG5cbiAgICAgICAgcmV0dXJuIGFwaVxuICAgICAgICAgICAgLmJ1bGtBY3Rpb24oe1xuICAgICAgICAgICAgICAgIHJlc291cmNlSWQsXG4gICAgICAgICAgICAgICAgcmVjb3JkSWRzLFxuICAgICAgICAgICAgICAgIGFjdGlvbk5hbWUsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgYWRkTm90aWNlKHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdHJhbnNsYXRlTWVzc2FnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICdlcnJvckZldGNoaW5nUmVjb3JkcycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZUlkXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaFJlY29yZHMoKVxuICAgIH0sIFttYXRjaC5wYXJhbXMucmVzb3VyY2VJZCwgbWF0Y2gucGFyYW1zLmFjdGlvbk5hbWVdKVxuXG4gICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gPE5vUmVzb3VyY2VFcnJvciByZXNvdXJjZUlkPXtyZXNvdXJjZUlkfSAvPlxuICAgIH1cblxuICAgIGlmICghZGF0YT8ucmVjb3JkcyAmJiAhbG9hZGluZykge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEVycm9yTWVzc2FnZUJveCB0aXRsZT1cIk5vIHJlY29yZHNcIj5cbiAgICAgICAgICAgICAgICA8cD57dHJhbnNsYXRlTWVzc2FnZSgnbm9SZWNvcmRzU2VsZWN0ZWQnLCByZXNvdXJjZUlkKX08L3A+XG4gICAgICAgICAgICA8L0Vycm9yTWVzc2FnZUJveD5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvbiA9IGdldEJ1bGtBY3Rpb25zRnJvbVJlY29yZHMoZGF0YT8ucmVjb3JkcyB8fCBbXSkuZmluZChcbiAgICAgICAgKHIpID0+IHIubmFtZSA9PT0gYWN0aW9uTmFtZVxuICAgIClcblxuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIGNvbnN0IGFjdGlvbkZyb21SZXNvdXJjZSA9IHJlc291cmNlLmFjdGlvbnMuZmluZChcbiAgICAgICAgICAgIChyKSA9PiByLm5hbWUgPT09IGFjdGlvbk5hbWVcbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gYWN0aW9uRnJvbVJlc291cmNlPy5zaG93SW5EcmF3ZXIgPyAoXG4gICAgICAgICAgICA8RHJhd2VyUG9ydGFsPlxuICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgIDwvRHJhd2VyUG9ydGFsPlxuICAgICAgICApIDogKFxuICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIDxOb0FjdGlvbkVycm9yIHJlc291cmNlSWQ9e3Jlc291cmNlSWR9IGFjdGlvbk5hbWU9e2FjdGlvbk5hbWV9IC8+XG4gICAgfVxuXG4gICAgaWYgKGFjdGlvbi5zaG93SW5EcmF3ZXIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxEcmF3ZXJQb3J0YWwgd2lkdGg9e2FjdGlvbi5jb250YWluZXJXaWR0aH0+XG4gICAgICAgICAgICAgICAgPEJhc2VBY3Rpb25Db21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uPXthY3Rpb24gYXMgQWN0aW9uSlNPTn1cbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICByZWNvcmRzPXtkYXRhPy5yZWNvcmRzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0RyYXdlclBvcnRhbD5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxXcmFwcGVyIHdpZHRoPXthY3Rpb24uY29udGFpbmVyV2lkdGh9PlxuICAgICAgICAgICAgeyFhY3Rpb24/LnNob3dJbkRyYXdlciA/IChcbiAgICAgICAgICAgICAgICA8QWN0aW9uSGVhZGVyIHJlc291cmNlPXtyZXNvdXJjZX0gYWN0aW9uPXthY3Rpb259IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPEJhc2VBY3Rpb25Db21wb25lbnRcbiAgICAgICAgICAgICAgICBhY3Rpb249e2FjdGlvbiBhcyBBY3Rpb25KU09OfVxuICAgICAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgIHJlY29yZHM9e2RhdGE/LnJlY29yZHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L1dyYXBwZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdWxrQWN0aW9uXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlLCBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi4vYXBwL2Vycm9yLWJvdW5kYXJ5J1xuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IEVycm9yTWVzc2FnZUJveCBmcm9tICcuLi9hcHAvZXJyb3ItbWVzc2FnZSdcblxuZGVjbGFyZSBjb25zdCBBZG1pbkJybzoge1xuICBVc2VyQ29tcG9uZW50czogUmVjb3JkPHN0cmluZywgRnVuY3Rpb25Db21wb25lbnQ+O1xufVxuXG50eXBlIFN0YXRlID0ge1xuICBpc0NsaWVudDogYm9vbGVhbjtcbn1cblxudHlwZSBQcm9wc0Zyb21TdGF0ZSA9IHtcbiAgcGFnZXM6IFJlZHV4U3RhdGVbJ3BhZ2VzJ107XG59XG5cbnR5cGUgUHJvcHMgPSBQcm9wc0Zyb21TdGF0ZSAmIFJvdXRlQ29tcG9uZW50UHJvcHM8e1xuICBwYWdlTmFtZTogc3RyaW5nO1xufT5cblxuY2xhc3MgUGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzQ2xpZW50OiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNDbGllbnQ6IHRydWUgfSlcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcGFnZXMsIG1hdGNoIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBwYXJhbXMgfSA9IG1hdGNoXG4gICAgY29uc3QgeyBwYWdlTmFtZSB9ID0gcGFyYW1zXG4gICAgY29uc3QgeyBpc0NsaWVudCB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBwYWdlcy5maW5kKHBhZ2UgPT4gcGFnZS5uYW1lID09PSBwYWdlTmFtZSlcblxuICAgIGlmICghY3VycmVudFBhZ2UpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxFcnJvck1lc3NhZ2VCb3ggdGl0bGU9XCJUaGVyZSBpcyBubyBwYWdlIG9mIGdpdmVuIG5hbWVcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFBhZ2U6XG4gICAgICAgICAgICA8Yj57YCBcIiR7cGFnZU5hbWV9XCIgYH08L2I+XG4gICAgICAgICAgICBkb2VzIG5vdCBleGlzdC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRXJyb3JNZXNzYWdlQm94PlxuICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IENvbXBvbmVudCA9IEFkbWluQnJvLlVzZXJDb21wb25lbnRzW2N1cnJlbnRQYWdlLmNvbXBvbmVudF1cblxuICAgIGlmICghQ29tcG9uZW50IHx8ICFpc0NsaWVudCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEVycm9yTWVzc2FnZUJveCB0aXRsZT1cIk5vIGNvbXBvbmVudCBzcGVjaWZpZWRcIj5cbiAgICAgICAgICA8cD5Zb3UgaGF2ZSB0byBzcGVjaWZ5IGNvbXBvbmVudCB3aGljaCB3aWxsIHJlbmRlciB0aGlzIFBhZ2U8L3A+XG4gICAgICAgIDwvRXJyb3JNZXNzYWdlQm94PlxuICAgICAgKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgPENvbXBvbmVudCAvPlxuICAgICAgPC9FcnJvckJvdW5kYXJ5PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJlZHV4U3RhdGUpOiBQcm9wc0Zyb21TdGF0ZSA9PiAoe1xuICBwYWdlczogc3RhdGUucGFnZXMsXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUGFnZSlcbiIsImV4cG9ydCBkZWZhdWx0IChxdWVyeVN0cmluZzogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhxdWVyeVN0cmluZylcbiAgZm9yIChjb25zdCBrZXkgb2YgcXVlcnkua2V5cygpKSB7XG4gICAgaWYgKGtleS5tYXRjaCgnZmlsdGVycy4nKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IHVzZVJvdXRlTWF0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEJhc2VBY3Rpb24gZnJvbSAnLi4vYXBwL2Jhc2UtYWN0aW9uLWNvbXBvbmVudCdcbmltcG9ydCBGaWx0ZXJEcmF3ZXIgZnJvbSAnLi4vYXBwL2ZpbHRlci1kcmF3ZXInXG5pbXBvcnQgcXVlcnlIYXNGaWx0ZXIgZnJvbSAnLi91dGlscy9xdWVyeS1oYXMtZmlsdGVyJ1xuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IHsgTm9SZXNvdXJjZUVycm9yLCBOb0FjdGlvbkVycm9yIH0gZnJvbSAnLi4vYXBwL2Vycm9yLW1lc3NhZ2UnXG5pbXBvcnQgVmlld0hlbHBlcnMsIHtcbiAgUmVzb3VyY2VBY3Rpb25QYXJhbXMsIFJlY29yZEFjdGlvblBhcmFtcywgQnVsa0FjdGlvblBhcmFtcyxcbn0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuaW1wb3J0IHsgQWN0aW9uSGVhZGVyIH0gZnJvbSAnLi4vYXBwJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcblxudHlwZSBQcm9wc0Zyb21TdGF0ZSA9IHtcbiAgcmVzb3VyY2VzOiBBcnJheTxSZXNvdXJjZUpTT04+O1xufVxuXG50eXBlIFByb3BzID0gUHJvcHNGcm9tU3RhdGUgJiBSb3V0ZUNvbXBvbmVudFByb3BzPFN0cmluZ2lmaWVkQnVsazxSZXNvdXJjZUFjdGlvblBhcmFtcz4+XG5cbnR5cGUgU3RyaW5naWZpZWRCdWxrPFQ+ID0gT21pdDxULCAncmVjb3Jkc0lkJz4gJiB7XG4gIHJlY29yZHNJZHM/OiBzdHJpbmc7XG59XG5cbmNvbnN0IGdldEFjdGlvbiA9IChyZXNvdXJjZTogUmVzb3VyY2VKU09OKTogQWN0aW9uSlNPTiB8IHVuZGVmaW5lZCA9PiB7XG4gIGNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxuXG4gIGNvbnN0IHJlc291cmNlSWQgPSAnOnJlc291cmNlSWQnXG4gIGNvbnN0IGFjdGlvbk5hbWUgPSAnOmFjdGlvbk5hbWUnXG4gIGNvbnN0IHJlY29yZElkID0gJzpyZWNvcmRJZCdcblxuICBjb25zdCByZWNvcmRBY3Rpb25VcmwgPSBoLnJlY29yZEFjdGlvblVybCh7IHJlc291cmNlSWQsIHJlY29yZElkLCBhY3Rpb25OYW1lIH0pXG4gIGNvbnN0IHJlc291cmNlQWN0aW9uVXJsID0gaC5yZXNvdXJjZUFjdGlvblVybCh7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUgfSlcbiAgY29uc3QgYnVsa0FjdGlvblVybCA9IGguYnVsa0FjdGlvblVybCh7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUgfSlcblxuICBjb25zdCByZXNvdXJjZUFjdGlvbk1hdGNoID0gdXNlUm91dGVNYXRjaDxSZXNvdXJjZUFjdGlvblBhcmFtcz4ocmVzb3VyY2VBY3Rpb25VcmwpXG4gIGNvbnN0IHJlY29yZEFjdGlvbk1hdGNoID0gdXNlUm91dGVNYXRjaDxSZWNvcmRBY3Rpb25QYXJhbXM+KHJlY29yZEFjdGlvblVybClcbiAgY29uc3QgYnVsa0FjdGlvbk1hdGNoID0gdXNlUm91dGVNYXRjaDxQaWNrPEJ1bGtBY3Rpb25QYXJhbXMsICdhY3Rpb25OYW1lJyB8ICdyZXNvdXJjZUlkJz4+KGJ1bGtBY3Rpb25VcmwpXG5cbiAgY29uc3QgYWN0aW9uID0gcmVzb3VyY2VBY3Rpb25NYXRjaD8ucGFyYW1zLmFjdGlvbk5hbWVcbiAgICB8fCByZWNvcmRBY3Rpb25NYXRjaD8ucGFyYW1zLmFjdGlvbk5hbWVcbiAgICB8fCBidWxrQWN0aW9uTWF0Y2g/LnBhcmFtcy5hY3Rpb25OYW1lXG5cbiAgcmV0dXJuIGFjdGlvbiA/IHJlc291cmNlLmFjdGlvbnMuZmluZChhID0+IGEubmFtZSA9PT0gYWN0aW9uKSA6IHVuZGVmaW5lZFxufVxuXG5jb25zdCBSZXNvdXJjZUFjdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2VzLCBtYXRjaCwgbG9jYXRpb24gfSA9IHByb3BzXG4gIGNvbnN0IHsgcmVzb3VyY2VJZCB9ID0gbWF0Y2gucGFyYW1zXG5cbiAgY29uc3QgW2ZpbHRlclZpc2libGUsIHNldEZpbGVyVmlzaWJsZV0gPSB1c2VTdGF0ZShxdWVyeUhhc0ZpbHRlcihsb2NhdGlvbi5zZWFyY2gpKVxuICBjb25zdCBbdGFnLCBzZXRUYWddID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3QgcmVzb3VyY2UgPSByZXNvdXJjZXMuZmluZChyID0+IHIuaWQgPT09IHJlc291cmNlSWQpXG4gIGlmICghcmVzb3VyY2UpIHtcbiAgICByZXR1cm4gKDxOb1Jlc291cmNlRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gLz4pXG4gIH1cblxuICBjb25zdCByZWFsRW5kQWN0aW9uID0gZ2V0QWN0aW9uKHJlc291cmNlKVxuICBpZiAocmVhbEVuZEFjdGlvbiAmJiAhcmVhbEVuZEFjdGlvbi5zaG93SW5EcmF3ZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgbGlzdEFjdGlvbk5hbWUgPSAnbGlzdCdcbiAgY29uc3QgbGlzdEFjdGlvbiA9IHJlc291cmNlLnJlc291cmNlQWN0aW9ucy5maW5kKHIgPT4gci5uYW1lID09PSBsaXN0QWN0aW9uTmFtZSlcblxuICBpZiAoIWxpc3RBY3Rpb24pIHtcbiAgICByZXR1cm4gKDxOb0FjdGlvbkVycm9yIHJlc291cmNlSWQ9e3Jlc291cmNlSWR9IGFjdGlvbk5hbWU9e2xpc3RBY3Rpb25OYW1lfSAvPilcbiAgfVxuXG4gIGNvbnN0IHRvZ2dsZUZpbHRlciA9IGxpc3RBY3Rpb24uc2hvd0ZpbHRlclxuICAgID8gKCgpOiB2b2lkID0+IHNldEZpbGVyVmlzaWJsZSghZmlsdGVyVmlzaWJsZSkpXG4gICAgOiB1bmRlZmluZWRcblxuICByZXR1cm4gKFxuICAgIDxCb3ggdmFyaWFudD1cImdyZXlcIiB3aWR0aD17bGlzdEFjdGlvbi5jb250YWluZXJXaWR0aH0gbXg9XCJhdXRvXCI+XG4gICAgICA8QWN0aW9uSGVhZGVyXG4gICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgYWN0aW9uPXtsaXN0QWN0aW9ufVxuICAgICAgICB0YWc9e3RhZ31cbiAgICAgICAgdG9nZ2xlRmlsdGVyPXt0b2dnbGVGaWx0ZXJ9XG4gICAgICAvPlxuICAgICAgPEJhc2VBY3Rpb24gYWN0aW9uPXtsaXN0QWN0aW9ufSByZXNvdXJjZT17cmVzb3VyY2V9IHNldFRhZz17c2V0VGFnfSAvPlxuICAgICAge2xpc3RBY3Rpb24uc2hvd0ZpbHRlciA/IChcbiAgICAgICAgPEZpbHRlckRyYXdlclxuICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICBpc1Zpc2libGU9e2ZpbHRlclZpc2libGV9XG4gICAgICAgICAgdG9nZ2xlRmlsdGVyPXsoKTogdm9pZCA9PiB7IHNldEZpbGVyVmlzaWJsZSghZmlsdGVyVmlzaWJsZSkgfX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAnJ31cbiAgICA8L0JveD5cbiAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJlZHV4U3RhdGUpOiBQcm9wc0Zyb21TdGF0ZSA9PiAoe1xuICByZXNvdXJjZXM6IHN0YXRlLnJlc291cmNlcyxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShSZXNvdXJjZUFjdGlvbilcbiIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLWNoaWxkcmVuLXByb3AgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTd2l0Y2gsIFJvdXRlIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBCb3gsIE92ZXJsYXksIFJlc2V0IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBWaWV3SGVscGVycyBmcm9tICcuLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuL2FwcC9zaWRlYmFyL3NpZGViYXInXG5pbXBvcnQgVG9wQmFyIGZyb20gJy4vYXBwL3RvcC1iYXInXG5pbXBvcnQgTm90aWNlIGZyb20gJy4vYXBwL25vdGljZSdcblxuaW1wb3J0IHtcbiAgRGFzaGJvYXJkLCBSZXNvdXJjZUFjdGlvbiwgUmVjb3JkQWN0aW9uLCBQYWdlLCBCdWxrQWN0aW9uLCBSZXNvdXJjZSxcbn0gZnJvbSAnLi9yb3V0ZXMnXG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gIGh0bWwsIGJvZHksICNhcHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmNvbG9ycy5ncmV5MTAwfVxuICB9XG5gXG5cbmNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxuXG5jb25zdCBBcHA6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbc2lkZWJhclZpc2libGUsIHRvZ2dsZVNpZGViYXJdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNpZGViYXJWaXNpYmxlKSB7IHRvZ2dsZVNpZGViYXIoZmFsc2UpIH1cbiAgfSwgW2xvY2F0aW9uXSlcblxuICBjb25zdCByZXNvdXJjZUlkID0gJzpyZXNvdXJjZUlkJ1xuICBjb25zdCBhY3Rpb25OYW1lID0gJzphY3Rpb25OYW1lJ1xuICBjb25zdCByZWNvcmRJZCA9ICc6cmVjb3JkSWQnXG4gIGNvbnN0IHBhZ2VOYW1lID0gJzpwYWdlTmFtZSdcblxuICBjb25zdCByZWNvcmRBY3Rpb25VcmwgPSBoLnJlY29yZEFjdGlvblVybCh7IHJlc291cmNlSWQsIHJlY29yZElkLCBhY3Rpb25OYW1lIH0pXG4gIGNvbnN0IHJlc291cmNlQWN0aW9uVXJsID0gaC5yZXNvdXJjZUFjdGlvblVybCh7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUgfSlcbiAgY29uc3QgYnVsa0FjdGlvblVybCA9IGguYnVsa0FjdGlvblVybCh7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUgfSlcbiAgY29uc3QgcmVzb3VyY2VVcmwgPSBoLnJlc291cmNlVXJsKHsgcmVzb3VyY2VJZCB9KVxuICBjb25zdCBwYWdlVXJsID0gaC5wYWdlVXJsKHBhZ2VOYW1lKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPFJlc2V0IC8+XG4gICAgICA8R2xvYmFsU3R5bGUgLz5cbiAgICAgIDxCb3ggaGVpZ2h0PVwiMTAwJVwiIGZsZXg+XG4gICAgICAgIHtzaWRlYmFyVmlzaWJsZSA/IChcbiAgICAgICAgICA8T3ZlcmxheVxuICAgICAgICAgICAgb25DbGljaz17KCk6IHZvaWQgPT4gdG9nZ2xlU2lkZWJhcighc2lkZWJhclZpc2libGUpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8U2lkZWJhciBpc1Zpc2libGU9e3NpZGViYXJWaXNpYmxlfSAvPlxuICAgICAgICA8Qm94IGZsZXggZmxleEdyb3c9ezF9IGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBvdmVyZmxvd1k9XCJhdXRvXCIgYmc9XCJiZ1wiPlxuICAgICAgICAgIDxUb3BCYXIgdG9nZ2xlU2lkZWJhcj17KCk6IHZvaWQgPT4gdG9nZ2xlU2lkZWJhcighc2lkZWJhclZpc2libGUpfSAvPlxuICAgICAgICAgIDxCb3ggcG9zaXRpb249XCJhYnNvbHV0ZVwiIHRvcD17MH0gekluZGV4PVwiMjAwMFwiPlxuICAgICAgICAgICAgPE5vdGljZSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD17aC5kYXNoYm9hcmRVcmwoKX0gZXhhY3QgY29tcG9uZW50PXtEYXNoYm9hcmR9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD17cmVzb3VyY2VVcmx9IGNvbXBvbmVudD17UmVzb3VyY2V9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD17cGFnZVVybH0gZXhhY3QgY29tcG9uZW50PXtQYWdlfSAvPlxuICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD17cmVjb3JkQWN0aW9uVXJsfSBjb21wb25lbnQ9e1JlY29yZEFjdGlvbn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtyZXNvdXJjZUFjdGlvblVybH0gY29tcG9uZW50PXtSZXNvdXJjZUFjdGlvbn0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPXtidWxrQWN0aW9uVXJsfSBjb21wb25lbnQ9e0J1bGtBY3Rpb259IC8+XG4gICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cblxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIiwiaW1wb3J0IHsgQXNzZXRzIH0gZnJvbSAnLi4vLi4vLi4vYWRtaW4tYnJvLW9wdGlvbnMuaW50ZXJmYWNlJ1xuXG5leHBvcnQgY29uc3QgQVNTRVRTX0lOSVRJQUxJWkUgPSAnQVNTRVRTX0lOSVRJQUxJWkUnXG5cbmV4cG9ydCB0eXBlIGluaXRpYWxpemVBc3NldHNSZXNwb25zZSA9IHtcbiAgdHlwZTogc3RyaW5nO1xuICBkYXRhOiBBc3NldHM7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplQXNzZXRzID0gKGRhdGE6IEFzc2V0cyk6IGluaXRpYWxpemVBc3NldHNSZXNwb25zZSA9PiAoe1xuICB0eXBlOiBBU1NFVFNfSU5JVElBTElaRSxcbiAgZGF0YSxcbn0pXG4iLCJpbXBvcnQgeyBCcmFuZGluZ09wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hZG1pbi1icm8tb3B0aW9ucy5pbnRlcmZhY2UnXG5cbmV4cG9ydCBjb25zdCBCUkFORElOR19JTklUSUFMSVpFID0gJ0JSQU5ESU5HX0lOSVRJQUxJWkUnXG5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVCcmFuZGluZ1Jlc3BvbnNlID0ge1xuICB0eXBlOiB0eXBlb2YgQlJBTkRJTkdfSU5JVElBTElaRTtcbiAgZGF0YTogQnJhbmRpbmdPcHRpb25zO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZUJyYW5kaW5nID0gKGRhdGE6IEJyYW5kaW5nT3B0aW9ucyk6IEluaXRpYWxpemVCcmFuZGluZ1Jlc3BvbnNlID0+ICh7XG4gIHR5cGU6IEJSQU5ESU5HX0lOSVRJQUxJWkUsXG4gIGRhdGEsXG59KVxuIiwiaW1wb3J0IHsgRGFzaGJvYXJkSW5TdGF0ZSB9IGZyb20gJy4uL3N0b3JlJ1xuXG5leHBvcnQgY29uc3QgREFTSEJPQVJEX0lOSVRJQUxJWkUgPSAnREFTSEJPQVJEX0lOSVRJQUxJWkUnXG5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVEYXNoYm9hcmRSZXNwb25zZSA9IHtcbiAgdHlwZTogdHlwZW9mIERBU0hCT0FSRF9JTklUSUFMSVpFO1xuICBkYXRhOiBEYXNoYm9hcmRJblN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZURhc2hib2FyZCA9IChkYXRhOiBEYXNoYm9hcmRJblN0YXRlKTogSW5pdGlhbGl6ZURhc2hib2FyZFJlc3BvbnNlID0+ICh7XG4gIHR5cGU6IERBU0hCT0FSRF9JTklUSUFMSVpFLFxuICBkYXRhLFxufSlcbiIsImltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uLy4uLy4uL2xvY2FsZS9jb25maWcnXG5cbmV4cG9ydCBjb25zdCBMT0NBTEVfSU5JVElBTElaRSA9ICdMT0NBTEVfSU5JVElBTElaRSdcblxuZXhwb3J0IHR5cGUgSW5pdGlhbGl6ZUxvY2FsZVJlc3BvbnNlID0ge1xuICB0eXBlOiB0eXBlb2YgTE9DQUxFX0lOSVRJQUxJWkU7XG4gIGRhdGE6IExvY2FsZTtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVMb2NhbGUgPSAoZGF0YTogTG9jYWxlKTogSW5pdGlhbGl6ZUxvY2FsZVJlc3BvbnNlID0+ICh7XG4gIHR5cGU6IExPQ0FMRV9JTklUSUFMSVpFLFxuICBkYXRhLFxufSlcbiIsImltcG9ydCB7IEFkbWluUGFnZSB9IGZyb20gJy4uLy4uLy4uL2FkbWluLWJyby1vcHRpb25zLmludGVyZmFjZSdcblxuZXhwb3J0IGNvbnN0IFBBR0VTX0lOSVRJQUxJWkUgPSAnUEFHRVNfSU5JVElBTElaRSdcblxuZXhwb3J0IHR5cGUgSW5pdGlhbGl6ZVBhZ2VzUmVzcG9uc2UgPSB7XG4gIHR5cGU6IHR5cGVvZiBQQUdFU19JTklUSUFMSVpFO1xuICBkYXRhOiBBcnJheTxBZG1pblBhZ2U+O1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVBhZ2VzID0gKGRhdGE6IEFycmF5PEFkbWluUGFnZT4pOiBJbml0aWFsaXplUGFnZXNSZXNwb25zZSA9PiAoe1xuICB0eXBlOiBQQUdFU19JTklUSUFMSVpFLFxuICBkYXRhLFxufSlcbiIsImltcG9ydCB7IFBhdGhzIH0gZnJvbSAnLi4vc3RvcmUnXG5cbmV4cG9ydCBjb25zdCBQQVRIU19JTklUSUFMSVpFID0gJ1BBVEhTX0lOSVRJQUxJWkUnXG5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVQYXRoc1Jlc3BvbnNlID0ge1xuICB0eXBlOiB0eXBlb2YgUEFUSFNfSU5JVElBTElaRTtcbiAgZGF0YTogUGF0aHM7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplUGF0aHMgPSAoZGF0YTogUGF0aHMpOiBJbml0aWFsaXplUGF0aHNSZXNwb25zZSA9PiAoe1xuICB0eXBlOiBQQVRIU19JTklUSUFMSVpFLFxuICBkYXRhLFxufSlcbiIsImltcG9ydCB7IFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5cbmV4cG9ydCBjb25zdCBSRVNPVVJDRVNfSU5JVElBTElaRSA9ICdSRVNPVVJDRVNfSU5JVElBTElaRSdcblxuZXhwb3J0IHR5cGUgSW5pdGlhbGl6ZVJlc291cmNlc1Jlc3BvbnNlID0ge1xuICB0eXBlOiB0eXBlb2YgUkVTT1VSQ0VTX0lOSVRJQUxJWkU7XG4gIGRhdGE6IEFycmF5PFJlc291cmNlSlNPTj47XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplUmVzb3VyY2VzID0gKGRhdGE6IEFycmF5PFJlc291cmNlSlNPTj4pOiBJbml0aWFsaXplUmVzb3VyY2VzUmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogUkVTT1VSQ0VTX0lOSVRJQUxJWkUsXG4gIGRhdGEsXG59KVxuIiwiaW1wb3J0IHsgVmVyc2lvblByb3BzIH0gZnJvbSAnLi4vLi4vLi4vYWRtaW4tYnJvLW9wdGlvbnMuaW50ZXJmYWNlJ1xuXG5leHBvcnQgY29uc3QgVkVSU0lPTlNfSU5JVElBTElaRSA9ICdWRVJTSU9OU19JTklUSUFMSVpFJ1xuXG5leHBvcnQgdHlwZSBJbml0aWFsaXplVmVyc2lvbnNSZXNwb25zZSA9IHtcbiAgdHlwZTogdHlwZW9mIFZFUlNJT05TX0lOSVRJQUxJWkU7XG4gIGRhdGE6IFZlcnNpb25Qcm9wcztcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVWZXJzaW9ucyA9IChkYXRhOiBWZXJzaW9uUHJvcHMpOiBJbml0aWFsaXplVmVyc2lvbnNSZXNwb25zZSA9PiAoe1xuICB0eXBlOiBWRVJTSU9OU19JTklUSUFMSVpFLFxuICBkYXRhLFxufSlcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHtcbiAgVkVSU0lPTlNfSU5JVElBTElaRSxcbiAgU0VTU0lPTl9JTklUSUFMSVpFLFxuICBEQVNIQk9BUkRfSU5JVElBTElaRSxcbiAgUEFUSFNfSU5JVElBTElaRSxcbiAgQVNTRVRTX0lOSVRJQUxJWkUsXG4gIEJSQU5ESU5HX0lOSVRJQUxJWkUsXG4gIExPQ0FMRV9JTklUSUFMSVpFLFxuICBQQUdFU19JTklUSUFMSVpFLFxuICBSRVNPVVJDRVNfSU5JVElBTElaRSxcbiAgU0VUX05PVElDRV9QUk9HUkVTUyxcbiAgRFJPUF9OT1RJQ0UsXG4gIEFERF9OT1RJQ0UgfSBmcm9tICcuL2FjdGlvbnMnXG5cbmltcG9ydCB7IEFzc2V0cywgQnJhbmRpbmdPcHRpb25zLCBWZXJzaW9uUHJvcHMgfSBmcm9tICcuLi8uLi9hZG1pbi1icm8tb3B0aW9ucy5pbnRlcmZhY2UnXG5pbXBvcnQgeyBQYWdlSlNPTiwgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IERFRkFVTFRfUEFUSFMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMnXG5pbXBvcnQgeyBDdXJyZW50QWRtaW4gfSBmcm9tICcuLi8uLi9jdXJyZW50LWFkbWluLmludGVyZmFjZSdcbmltcG9ydCB7IExvY2FsZSB9IGZyb20gJy4uLy4uL2xvY2FsZS9jb25maWcnXG5pbXBvcnQgeyBOb3RpY2VNZXNzYWdlIH0gZnJvbSAnLi4vaG9jL3dpdGgtbm90aWNlJ1xuXG5leHBvcnQgdHlwZSBEYXNoYm9hcmRJblN0YXRlID0ge1xuICBjb21wb25lbnQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIE5vdGljZU1lc3NhZ2VJblN0YXRlID0gTm90aWNlTWVzc2FnZSAmIHtcbiAgbWVzc2FnZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiBOb3RpY2VNZXNzYWdlWyd0eXBlJ107XG4gIHByb2dyZXNzOiBudW1iZXI7XG59XG5cbmV4cG9ydCB0eXBlIFBhdGhzID0ge1xuICByb290UGF0aDogc3RyaW5nO1xuICBsb2dvdXRQYXRoOiBzdHJpbmc7XG4gIGxvZ2luUGF0aDogc3RyaW5nO1xuICBhc3NldHNDRE4/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHJlc291cmNlc1JlZHVjZXIgPSAoXG4gIHN0YXRlOiBBcnJheTxSZXNvdXJjZUpTT04+ID0gW10sXG4gIGFjdGlvbjoge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBkYXRhOiBBcnJheTxSZXNvdXJjZUpTT04+O1xuICB9LFxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSBSRVNPVVJDRVNfSU5JVElBTElaRTpcbiAgICByZXR1cm4gYWN0aW9uLmRhdGFcbiAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgcGFnZXNSZWR1Y2VyID0gKFxuICBzdGF0ZTogQXJyYXk8UGFnZUpTT04+ID0gW10sXG4gIGFjdGlvbjoge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBkYXRhOiBBcnJheTxQYWdlSlNPTj47XG4gIH0sXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICBjYXNlIFBBR0VTX0lOSVRJQUxJWkU6XG4gICAgcmV0dXJuIGFjdGlvbi5kYXRhXG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IGxvY2FsZXNSZWR1Y2VyID0gKFxuICBzdGF0ZTogTG9jYWxlID0geyBsYW5ndWFnZTogJ2VuJywgdHJhbnNsYXRpb25zOiB7fSB9IGFzIExvY2FsZSxcbiAgYWN0aW9uOiB7XG4gICAgdHlwZTogc3RyaW5nO1xuICAgIGRhdGE6IExvY2FsZTtcbiAgfSxcbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gIGNhc2UgTE9DQUxFX0lOSVRJQUxJWkU6XG4gICAgcmV0dXJuIGFjdGlvbi5kYXRhXG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IGJyYW5kaW5nUmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb246IHtcbiAgdHlwZTogc3RyaW5nO1xuICBkYXRhOiBCcmFuZGluZ09wdGlvbnM7XG59KSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSBCUkFORElOR19JTklUSUFMSVpFOlxuICAgIHJldHVybiBhY3Rpb24uZGF0YVxuICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBhc3NldHNSZWR1Y2VyID0gKHN0YXRlID0ge30sIGFjdGlvbjoge1xuICB0eXBlOiBzdHJpbmc7XG4gIGRhdGE6IEFzc2V0cztcbn0pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICBjYXNlIEFTU0VUU19JTklUSUFMSVpFOlxuICAgIHJldHVybiBhY3Rpb24uZGF0YVxuICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBwYXRoc1JlZHVjZXIgPSAoXG4gIHN0YXRlOiBQYXRocyA9IERFRkFVTFRfUEFUSFMsXG4gIGFjdGlvbjoge3R5cGU6IHN0cmluZzsgZGF0YTogUGF0aHN9LFxuKTogUGF0aHMgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gIGNhc2UgUEFUSFNfSU5JVElBTElaRTpcbiAgICByZXR1cm4gYWN0aW9uLmRhdGFcbiAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgZGFzaGJvYXJkUmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb246IHtcbiAgdHlwZTogc3RyaW5nO1xuICBkYXRhOiBEYXNoYm9hcmRJblN0YXRlO1xufSk6IERhc2hib2FyZEluU3RhdGUgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gIGNhc2UgREFTSEJPQVJEX0lOSVRJQUxJWkU6XG4gICAgcmV0dXJuIGFjdGlvbi5kYXRhXG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IHNlc3Npb25SZWR1Y2VyID0gKFxuICBzdGF0ZTogQ3VycmVudEFkbWluIHwgbnVsbCA9IG51bGwsXG4gIGFjdGlvbjoge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBkYXRhOiBDdXJyZW50QWRtaW4gfCBudWxsO1xuICB9LFxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSBTRVNTSU9OX0lOSVRJQUxJWkU6XG4gICAgcmV0dXJuIGFjdGlvbi5kYXRhXG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IHZlcnNpb25zUmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb246IHtcbiAgdHlwZTogc3RyaW5nO1xuICBkYXRhOiBWZXJzaW9uUHJvcHM7XG59KSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSBWRVJTSU9OU19JTklUSUFMSVpFOlxuICAgIHJldHVybiB7XG4gICAgICBhZG1pbjogYWN0aW9uLmRhdGEuYWRtaW4sXG4gICAgICBhcHA6IGFjdGlvbi5kYXRhLmFwcCxcbiAgICB9XG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxuICB9XG59XG5cbnR5cGUgTm90aWNlQXJncyA9IHsgbm90aWNlSWQ6IHN0cmluZzsgcHJvZ3Jlc3M6IG51bWJlciB9XG5cbmNvbnN0IG5vdGljZXNSZWR1Y2VyID0gKHN0YXRlOiBBcnJheTxOb3RpY2VNZXNzYWdlSW5TdGF0ZT4gPSBbXSwgYWN0aW9uOiB7XG4gIHR5cGU6IHN0cmluZztcbiAgZGF0YTogTm90aWNlTWVzc2FnZUluU3RhdGUgfCBOb3RpY2VBcmdzO1xufSk6IEFycmF5PE5vdGljZU1lc3NhZ2VJblN0YXRlPiA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSBBRERfTk9USUNFOiB7XG4gICAgY29uc3Qgbm90aWNlcyA9IFthY3Rpb24uZGF0YSBhcyBOb3RpY2VNZXNzYWdlSW5TdGF0ZV1cbiAgICByZXR1cm4gbm90aWNlc1xuICB9XG4gIGNhc2UgRFJPUF9OT1RJQ0U6IHtcbiAgICByZXR1cm4gc3RhdGUuZmlsdGVyKG5vdGljZSA9PiBub3RpY2UuaWQgIT09IChhY3Rpb24uZGF0YSBhcyBOb3RpY2VBcmdzKS5ub3RpY2VJZClcbiAgfVxuICBjYXNlIFNFVF9OT1RJQ0VfUFJPR1JFU1M6IHtcbiAgICByZXR1cm4gc3RhdGUubWFwKG5vdGljZSA9PiAoe1xuICAgICAgLi4ubm90aWNlLFxuICAgICAgcHJvZ3Jlc3M6IG5vdGljZS5pZCA9PT0gKGFjdGlvbi5kYXRhIGFzIE5vdGljZUFyZ3MpLm5vdGljZUlkXG4gICAgICAgID8gYWN0aW9uLmRhdGEucHJvZ3Jlc3NcbiAgICAgICAgOiBub3RpY2UucHJvZ3Jlc3MsXG4gICAgfSkpXG4gIH1cbiAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgUmVkdXhTdGF0ZSA9IHtcbiAgcmVzb3VyY2VzOiBBcnJheTxSZXNvdXJjZUpTT04+O1xuICBicmFuZGluZzogQnJhbmRpbmdPcHRpb25zO1xuICBhc3NldHM6IEFzc2V0cztcbiAgcGF0aHM6IFBhdGhzO1xuICBzZXNzaW9uOiBDdXJyZW50QWRtaW4gfCBudWxsO1xuICBkYXNoYm9hcmQ6IERhc2hib2FyZEluU3RhdGU7XG4gIG5vdGljZXM6IEFycmF5PE5vdGljZU1lc3NhZ2VJblN0YXRlPjtcbiAgdmVyc2lvbnM6IFZlcnNpb25Qcm9wcztcbiAgcGFnZXM6IEFycmF5PFBhZ2VKU09OPjtcbiAgbG9jYWxlOiBMb2NhbGU7XG59XG5cbmNvbnN0IHJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnM8UmVkdXhTdGF0ZT4oe1xuICByZXNvdXJjZXM6IHJlc291cmNlc1JlZHVjZXIsXG4gIGJyYW5kaW5nOiBicmFuZGluZ1JlZHVjZXIsXG4gIGFzc2V0czogYXNzZXRzUmVkdWNlcixcbiAgcGF0aHM6IHBhdGhzUmVkdWNlcixcbiAgc2Vzc2lvbjogc2Vzc2lvblJlZHVjZXIsXG4gIGRhc2hib2FyZDogZGFzaGJvYXJkUmVkdWNlcixcbiAgbm90aWNlczogbm90aWNlc1JlZHVjZXIsXG4gIHZlcnNpb25zOiB2ZXJzaW9uc1JlZHVjZXIsXG4gIHBhZ2VzOiBwYWdlc1JlZHVjZXIsXG4gIGxvY2FsZTogbG9jYWxlc1JlZHVjZXIsXG59KVxuXG5leHBvcnQgZGVmYXVsdCAoaW5pdGlhbFN0YXRlID0ge30pID0+IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IGkxOG4gZnJvbSAnaTE4bmV4dCdcblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwbGljYXRpb24nXG5pbXBvcnQgQmFzZVByb3BlcnR5Q29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlJ1xuaW1wb3J0IGNyZWF0ZVN0b3JlIGZyb20gJy4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgVmlld0hlbHBlcnMgZnJvbSAnLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuaW1wb3J0ICogYXMgQXBwQ29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMvYXBwJ1xuaW1wb3J0ICogYXMgSG9va3MgZnJvbSAnLi9ob29rcydcbmltcG9ydCBBcGlDbGllbnQgZnJvbSAnLi91dGlscy9hcGktY2xpZW50J1xuaW1wb3J0IHdpdGhOb3RpY2UgZnJvbSAnLi9ob2Mvd2l0aC1ub3RpY2UnXG5pbXBvcnQgeyBmbGF0IH0gZnJvbSAnLi4vdXRpbHMvZmxhdCdcblxuY29uc3QgZW52ID0ge1xuICBOT0RFX0VOVjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ2RldmVsb3BtZW50Jyxcbn1cblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZSh3aW5kb3cuUkVEVVhfU1RBVEUpXG5jb25zdCB0aGVtZSA9IHdpbmRvdy5USEVNRVxuY29uc3QgeyBsb2NhbGUgfSA9IHdpbmRvdy5SRURVWF9TVEFURVxuXG5pMThuXG4gIC51c2UoaW5pdFJlYWN0STE4bmV4dClcbiAgLmluaXQoe1xuICAgIHJlc291cmNlczoge1xuICAgICAgW2xvY2FsZS5sYW5ndWFnZV06IHtcbiAgICAgICAgdHJhbnNsYXRpb246IGxvY2FsZS50cmFuc2xhdGlvbnMsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbG5nOiBsb2NhbGUubGFuZ3VhZ2UsXG4gICAgaW50ZXJwb2xhdGlvbjogeyBlc2NhcGVWYWx1ZTogZmFsc2UgfSxcbiAgfSlcblxuY29uc3QgQXBwbGljYXRpb24gPSAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgPEFwcCAvPlxuICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgPC9Qcm92aWRlcj5cbilcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG53aW5kb3cucmVnZW5lcmF0b3JSdW50aW1lID0gcmVnZW5lcmF0b3JSdW50aW1lXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgd2l0aE5vdGljZSxcbiAgQXBwbGljYXRpb24sXG4gIFZpZXdIZWxwZXJzLFxuICBVc2VyQ29tcG9uZW50czoge30sXG4gIEFwaUNsaWVudCxcbiAgQmFzZVByb3BlcnR5Q29tcG9uZW50LFxuICBlbnYsXG4gIC4uLkFwcENvbXBvbmVudHMsXG4gIC4uLkhvb2tzLFxuICBmbGF0LFxuICAvLyBUT0RPOiByZW1vdmUgdGhpcyBmcm9tIHRoZSBuZXh0IHJlbGVhc2VcbiAgZmxhdHRlbjogZmxhdC5mbGF0dGVuLFxuICB1bmZsYXR0ZW46IGZsYXQudW5mbGF0dGVuLFxufVxuIl0sIm5hbWVzIjpbInVuZGVmaW5lZCIsInJlcXVpcmUkJDAiLCJnbG9iYWxBbnkiLCJ3aW5kb3ciLCJlcnJvciIsIm1lc3NhZ2UiLCJydW5EYXRlIiwiRGF0ZSIsIlZpZXdIZWxwZXJzIiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwib3B0cyIsImdldFBhdGhzIiwicm9vdFBhdGgiLCJSRURVWF9TVEFURSIsInBhdGhzIiwidXJsQnVpbGRlciIsInNlYXJjaCIsInNlcGFyYXRvciIsInJlcGxhY2UiLCJSZWdFeHAiLCJzdGFydHNXaXRoIiwicGFydHMiLCJqb2luIiwibG9naW5VcmwiLCJsb2dpblBhdGgiLCJsb2dvdXRVcmwiLCJsb2dvdXRQYXRoIiwiZGFzaGJvYXJkVXJsIiwicGFnZVVybCIsInBhZ2VOYW1lIiwiZWRpdFVybCIsInJlc291cmNlSWQiLCJyZWNvcmRJZCIsInJlY29yZEFjdGlvblVybCIsImFjdGlvbk5hbWUiLCJzaG93VXJsIiwiZGVsZXRlVXJsIiwibmV3VXJsIiwicmVzb3VyY2VBY3Rpb25VcmwiLCJsaXN0VXJsIiwiYnVsa0RlbGV0ZVVybCIsInJlY29yZElkcyIsImJ1bGtBY3Rpb25VcmwiLCJyZXNvdXJjZVVybCIsInVybCIsImxlbmd0aCIsInF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwic2V0IiwidG9TdHJpbmciLCJhc3NldFBhdGgiLCJhc3NldCIsImFzc2V0c0NETiIsIlVSTCIsImhyZWYiLCJnZXRUaW1lIiwiYWxsb3dPdmVycmlkZSIsIk9yaWdpbmFsQ29tcG9uZW50IiwibmFtZSIsIldyYXBwZXJDb21wb25lbnQiLCJwcm9wcyIsIkNvbXBvbmVudCIsIkFkbWluQnJvIiwiVXNlckNvbXBvbmVudHMiLCJSZWFjdCIsIlN0eWxlZExvZ28iLCJzdHlsZWQiLCJMaW5rIiwidGhlbWVHZXQiLCJoIiwiU2lkZWJhckJyYW5kaW5nIiwiYnJhbmRpbmciLCJsb2dvIiwiY29tcGFueU5hbWUiLCJjc3NDbGFzcyIsImJhc2VQcm9wZXJ0eU9mIiwiZ2xvYmFsIiwiZnJlZUdsb2JhbCIsIlN5bWJvbCIsInJvb3QiLCJvYmplY3RQcm90byIsIm5hdGl2ZU9iamVjdFRvU3RyaW5nIiwic3ltVG9TdHJpbmdUYWciLCJnZXRSYXdUYWciLCJvYmplY3RUb1N0cmluZyIsImlzT2JqZWN0TGlrZSIsImJhc2VHZXRUYWciLCJpc0FycmF5IiwiYXJyYXlNYXAiLCJpc1N5bWJvbCIsImJhc2VUb1N0cmluZyIsImRlYnVyckxldHRlciIsInJzQ29tYm9NYXJrc1JhbmdlIiwicmVDb21ib0hhbGZNYXJrc1JhbmdlIiwicnNDb21ib1N5bWJvbHNSYW5nZSIsInJzQ29tYm9SYW5nZSIsInJzQ29tYm8iLCJoYXNVbmljb2RlV29yZCIsInVuaWNvZGVXb3JkcyIsImFzY2lpV29yZHMiLCJyc0Fwb3MiLCJhcnJheVJlZHVjZSIsIndvcmRzIiwiZGVidXJyIiwiYmFzZVNsaWNlIiwicnNBc3RyYWxSYW5nZSIsInJzVmFyUmFuZ2UiLCJyc1pXSiIsInJzRml0eiIsInJzTW9kaWZpZXIiLCJyc05vbkFzdHJhbCIsInJzUmVnaW9uYWwiLCJyc1N1cnJQYWlyIiwicmVPcHRNb2QiLCJyc09wdFZhciIsInJzT3B0Sm9pbiIsInJzU2VxIiwiaGFzVW5pY29kZSIsInVuaWNvZGVUb0FycmF5IiwiYXNjaWlUb0FycmF5Iiwic3RyaW5nVG9BcnJheSIsImNhc3RTbGljZSIsImNyZWF0ZUNhc2VGaXJzdCIsImNyZWF0ZUNvbXBvdW5kZXIiLCJ1cHBlckZpcnN0IiwiZm9ybWF0TmFtZSIsInNwbGl0IiwidHJhbnNsYXRlIiwiaTE4biIsImtleSIsInJlYWxPcHRpb25zIiwiZm9ybWF0dGVkTmFtZSIsImtleXMiLCJleGlzdHMiLCJ0IiwiZGVmYXVsdFZhbHVlIiwic3RhcnRDYXNlIiwiY3JlYXRlRnVuY3Rpb25zIiwidHJhbnNsYXRlQWN0aW9uIiwidHJhbnNsYXRlQnV0dG9uIiwiYnV0dG9uTGFiZWwiLCJ0cmFuc2xhdGVMYWJlbCIsImxhYmVsIiwidHJhbnNsYXRlUHJvcGVydHkiLCJwcm9wZXJ0eU5hbWUiLCJ0cmFuc2xhdGVNZXNzYWdlIiwibWVzc2FnZU5hbWUiLCJ0YSIsInRiIiwidGwiLCJ0cCIsInRtIiwidXNlVHJhbnNsYXRpb24iLCJyZXN0Iiwib3JpZ2luYWxVc2VUcmFuc2xhdGlvbiIsInRyYW5zbGF0ZUZ1bmN0aW9ucyIsIlNpZGViYXJQYWdlcyIsInBhZ2VzIiwibG9jYXRpb24iLCJ1c2VMb2NhdGlvbiIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwiaXNBY3RpdmUiLCJwYWdlIiwicGF0aG5hbWUiLCJtYXRjaCIsImVsZW1lbnRzIiwibWFwIiwiaWQiLCJpc1NlbGVjdGVkIiwiaWNvbiIsIm9uQ2xpY2siLCJldmVudCIsImVsZW1lbnQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJOYXZpZ2F0aW9uIiwiU2lkZWJhckZvb3RlciIsIkJveCIsIlNvZnR3YXJlQnJvdGhlcnMiLCJpc09uU2VydmVyIiwiY2hlY2tSZXNwb25zZSIsInJlc3BvbnNlIiwib3JpZ2luIiwicmVxdWVzdCIsInJlc3BvbnNlVVJMIiwiYWxlcnQiLCJhc3NpZ24iLCJBcGlDbGllbnQiLCJiYXNlVVJMIiwiZ2V0QmFzZVVybCIsImNsaWVudCIsImF4aW9zIiwiY3JlYXRlIiwic2VhcmNoUmVjb3JkcyIsInJlc291cmNlQWN0aW9uIiwiZGF0YSIsInJlY29yZHMiLCJheGlvc1BhcmFtcyIsInEiLCJlbmNvZGVVUklDb21wb25lbnQiLCJtZXRob2QiLCJyZWNvcmRBY3Rpb24iLCJidWxrQWN0aW9uIiwicGFyYW1zIiwiZ2V0RGFzaGJvYXJkIiwiZ2V0IiwiZ2V0UGFnZSIsIkZPUk1fVkFMVUVfTlVMTCIsIkZPUk1fVkFMVUVfRU1QVFlfT0JKRUNUIiwiRk9STV9WQUxVRV9FTVBUWV9BUlJBWSIsImlzT2JqZWN0T3JBcnJheSIsInZhbHVlIiwiRmlsZSIsInBhcmFtc1RvRm9ybURhdGEiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsImZvckVhY2giLCJBcnJheSIsIkFERF9OT1RJQ0UiLCJhZGROb3RpY2UiLCJ0eXBlIiwiTWF0aCIsInJhbmRvbSIsInN1YnN0ciIsInByb2dyZXNzIiwidXNlTm90aWNlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm5vdGljZSIsIm1lcmdlUmVjb3JkUmVzcG9uc2UiLCJyZWNvcmQiLCJlcnJvcnMiLCJwb3B1bGF0ZWQiLCJERUxJTUlURVIiLCJwcm9wZXJ0eUtleVJlZ2V4IiwicHJvcGVydHlQYXRoIiwiZGVsaW1pdGVyIiwiZXNjYXBlZERlbGltaXRlciIsImVzY2FwZWREZWxpbWl0ZXJPckluZGV4IiwicGF0aCIsImluY2x1ZGVBbGxTaWJsaW5ncyIsInNlbGVjdFBhcmFtcyIsInByb3BlcnRpZXMiLCJwcm9wZXJ0eUFycmF5Iiwic2VsZWN0ZWQiLCJmaWx0ZXIiLCJyZWR1Y2UiLCJnbG9iYWxNZW1vIiwicmVnZXgiLCJmaWx0ZXJlZCIsIm1lbW8iLCJmaWx0ZXJPdXRQYXJhbXMiLCJnbG9iYWxGaWx0ZXJlZCIsInBhdGhUb1BhcnRzIiwiYWxsUGFydHMiLCJza2lwQXJyYXlJbmRleGVzIiwicGFydCIsImlzTmFOIiwiaXNPYmplY3QiLCJwYXJhbXNDb3B5IiwiZmxhdHRlbmVkIiwiZmxhdHRlbiIsInNsaWNlIiwiaW5jbHVkZXMiLCJURU1QX0hPTERJTkdfS0VZIiwidW5mbGF0dGVuIiwiZmluZCIsInNlbGVjdGVkUGFyYW1zIiwibmVzdGVkUHJvcGVydGllcyIsImluZGV4IiwibmV3S2V5IiwibWVyZ2UiLCJtZXJnZVBhcmFtcyIsImZsYXR0ZW5QYXJhbXMiLCJyZXZlcnNlIiwibWVyZ2VQYXJhbSIsInJlbW92ZVBhdGgiLCJwYXJlbnRQYXRocyIsInBhcmVudFBhdGgiLCJwYXJlbnRJbmRleCIsInBhcmVudCIsInByZXZpb3VzUGF0aHMiLCJwcmV2aW91c1BhdGhJbmRleCIsInNwbGljZSIsImZsYXQiLCJ1cGRhdGVSZWNvcmQiLCJwcm9wZXJ0eSIsInNlbGVjdGVkUmVjb3JkIiwicHJldmlvdXNSZWNvcmQiLCJwb3B1bGF0ZWRNb2RpZmllZCIsInBvcHVsYXRlZENvcHkiLCJpc0VudGlyZVJlY29yZEdpdmVuIiwicHJvcGVydHlPclJlY29yZCIsImZpbHRlclJlY29yZFBhcmFtcyIsImluY2x1ZGVQYXJhbXMiLCJpc1Byb3BlcnR5UGVybWl0dGVkIiwic29tZSIsImFwaSIsInVzZVJlY29yZCIsImluaXRpYWxSZWNvcmQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVN0YXRlIiwiaXNTeW5jZWQiLCJzZXRJc1N5bmNlZCIsInNldFByb2dyZXNzIiwiZmlsdGVyZWRSZWNvcmQiLCJzZXRSZWNvcmQiLCJzZXRGaWx0ZXJlZFJlY29yZCIsInVzZUNhbGxiYWNrIiwibmV3UmVjb3JkIiwiRnVuY3Rpb24iLCJvbk5vdGljZSIsImhhbmRsZUNoYW5nZSIsImluY29taW5nUmVjb3JkIiwiY29uc29sZSIsIndhcm4iLCJoYW5kbGVTdWJtaXQiLCJjdXN0b21QYXJhbXMiLCJzdWJtaXRPcHRpb25zIiwibWVyZ2VkUGFyYW1zIiwib25VcGxvYWRQcm9ncmVzcyIsImUiLCJyb3VuZCIsImxvYWRlZCIsInRvdGFsIiwiaGVhZGVycyIsInByb21pc2UiLCJ0aGVuIiwidXBkYXRlT25TYXZlIiwicHJldiIsImNhdGNoIiwic3VibWl0IiwiYWN0aW9uSGFzQ29tcG9uZW50IiwiYWN0aW9uIiwiY29tcG9uZW50IiwiYWN0aW9uSHJlZiIsImhhc0hhbmRsZXIiLCJocmVmTWFwIiwicmVzb3VyY2UiLCJidWxrIiwiYWN0aW9uVHlwZSIsIkVycm9yIiwiY2FsbEFjdGlvbkFwaSIsImJ1aWxkQWN0aW9uQ2FsbEFwaVRyaWdnZXIiLCJhY3Rpb25SZXNwb25zZUhhbmRsZXIiLCJjYWxsQXBpIiwiYnVpbGRBY3Rpb25UZXN0SWQiLCJidWlsZEFjdGlvbkNsaWNrSGFuZGxlciIsImhhbmRsZUFjdGlvbkNsaWNrIiwic3RvcFByb3BhZ2F0aW9uIiwiZ3VhcmQiLCJjb25maXJtIiwiUkVGUkVTSF9LRVkiLCJhcHBlbmRGb3JjZVJlZnJlc2giLCJzZWFyY2hQYXJhbXNJZHgiLCJsYXN0SW5kZXhPZiIsInVybFNlYXJjaFBhcmFtcyIsInN1YnN0cmluZyIsIm9sZFBhcmFtcyIsIm5ld1BhcmFtcyIsImhhc0ZvcmNlUmVmcmVzaCIsInJlbW92ZUZvcmNlUmVmcmVzaCIsImRlbGV0ZSIsInVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciIsIm9uQWN0aW9uQ2FsbCIsInJlZGlyZWN0VXJsIiwiYXBwZW5kZWQiLCJ1c2VBY3Rpb24iLCJoYW5kbGVDbGljayIsIlNFU1NJT05fSU5JVElBTElaRSIsInNldEN1cnJlbnRBZG1pbiIsInVzZUN1cnJlbnRBZG1pbiIsImN1cnJlbnRBZG1pbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzZXNzaW9uIiwiYWRtaW4iLCJ1c2VMb2NhbFN0b3JhZ2UiLCJpbml0aWFsVmFsdWUiLCJzdG9yZWRWYWx1ZSIsInNldFN0b3JlZFZhbHVlIiwiaXRlbSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJsb2ciLCJzZXRWYWx1ZSIsInZhbHVlVG9TdG9yZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZWdFeHAiLCJ1c2VOYXZpZ2F0aW9uUmVzb3VyY2VzIiwicmVzb3VyY2VzIiwib3BlbkVsZW1lbnRzIiwic2V0T3BlbkVsZW1lbnRzIiwiZW5yaWNoUmVzb3VyY2UiLCJ1c2VNZW1vIiwicmVzIiwibmF2aWdhdGlvbiIsImlzT3BlbiIsInZhbHVlcyIsInVzZVJlY29yZHMiLCJzZXRSZWNvcmRzIiwicGVyUGFnZSIsInNldFBlclBhZ2UiLCJzZXRQYWdlIiwic2V0VG90YWwiLCJkaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJmZXRjaERhdGEiLCJsaXN0QWN0aW9uUmVzcG9uc2UiLCJtZXRhIiwidXNlRWZmZWN0IiwidXNlU2VsZWN0ZWRSZWNvcmRzIiwic2VsZWN0ZWRSZWNvcmRzIiwic2V0U2VsZWN0ZWRSZWNvcmRzIiwiaGFuZGxlU2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsImZpbmRJbmRleCIsIm5ld1NlbGVjdGVkUmVjb3JkcyIsImhhbmRsZVNlbGVjdEFsbCIsIm1pc3NpbmciLCJidWxrQWN0aW9ucyIsInVzZVJlc291cmNlIiwiZm91bmRSZXNvdXJjZSIsIlNpZGViYXJSZXNvdXJjZVNlY3Rpb25PcmlnaW5hbCIsIlNpZGViYXJSZXNvdXJjZVNlY3Rpb24iLCJTdHlsZWRTaWRlYmFyIiwiZGVmYXVsdFByb3BzIiwicG9zaXRpb24iLCJ3aWR0aCIsImJvcmRlclJpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ6SW5kZXgiLCJiZyIsIlNpZGViYXIiLCJpc1Zpc2libGUiLCJzb2Z0d2FyZUJyb3RoZXJzIiwiTG9nZ2VkSW4iLCJkcm9wQWN0aW9ucyIsIkN1cnJlbnRVc2VyTmF2IiwiZW1haWwiLCJ0aXRsZSIsImF2YXRhclVybCIsIk92ZXJyaWRhYmxlTG9nZ2VkSW4iLCJWZXJzaW9uSXRlbSIsIlRleHQiLCJjb2xvciIsIlZlcnNpb24iLCJ2ZXJzaW9ucyIsImFwcCIsInZlcnNpb24iLCJOYXZCYXIiLCJ0aGVtZSIsInNpemVzIiwibmF2YmFySGVpZ2h0IiwiY29sb3JzIiwid2hpdGUiLCJjbGFzc05hbWUiLCJUb3BCYXIiLCJ0b2dnbGVTaWRlYmFyIiwiY3Vyc29yIiwiSWNvbiIsIkRST1BfTk9USUNFIiwiZHJvcE5vdGljZSIsIm5vdGljZUlkIiwiU0VUX05PVElDRV9QUk9HUkVTUyIsInNldE5vdGljZVByb2dyZXNzIiwiVElNRV9UT19ESVNBUFBFQVIiLCJOb3RpY2VFbGVtZW50IiwidGltZXIiLCJjb21wb25lbnREaWRNb3VudCIsImRyb3AiLCJub3RpZnlQcm9ncmVzcyIsInNldEludGVydmFsIiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiTWVzc2FnZUJveCIsIm1pbldpZHRoIiwiTm90aWNlQm94Iiwibm90aWNlcyIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIkNvbm5lY3RlZE5vdGljZUJveCIsImNvbm5lY3QiLCJwYWdlSGVhZGVySGVpZ2h0IiwicGFnZUhlYWRlclBhZGRpbmdZIiwicGFnZUhlYWRlclBhZGRpbmdYIiwiRGFzaGJvYXJkSGVhZGVyIiwiSWxsdXN0cmF0aW9uIiwiSDIiLCJib3hlcyIsInZhcmlhbnQiLCJzdWJ0aXRsZSIsIkNhcmQiLCJmbGV4IiwiZ3JleTEwMCIsInByaW1hcnkxMDAiLCJzaGFkb3dzIiwiY2FyZEhvdmVyIiwiYm94U2hhZG93IiwiRGFzaGJvYXJkIiwiYm94IiwiSDUiLCJINCIsIkJ1dHRvbiIsIkVycm9yTWVzc2FnZSIsIkVycm9yQm91bmRhcnkiLCJjb21wb25lbnREaWRDYXRjaCIsImNoaWxkcmVuIiwiaXNDbGllbnQiLCJkYXNoYm9hcmQiLCJEZWZhdWx0RGFzaGJvYXJkIiwiQWRkTmV3SXRlbUJ1dHRvbiIsIlByb3BlcnR5TGFiZWwiLCJsYWJlbFByb3BzIiwiaGlkZUxhYmVsIiwiTGFiZWwiLCJpc1JlcXVpcmVkIiwiY29udmVydFRvU3ViUHJvcGVydHkiLCJhcnJheVByb3BlcnR5IiwicmVtb3ZlU3ViUHJvcGVydHkiLCJzdWJQcm9wZXJ0eVBhdGgiLCJwb3B1bGF0ZWRLZXlNYXAiLCJwcm9wZXJ0eUtleSIsIm5ld1BvcHVsYXRlZEtleU1hcCIsIm5ld1BvcHVsYXRlZCIsIm5ld1Byb3BlcnR5S2V5Iiwib2xkUHJvcGVydHlLZXkiLCJJdGVtUmVuZGVyZXIiLCJJdGVtQ29tcG9uZW50Iiwib25EZWxldGUiLCJJbnB1dHNJblNlY3Rpb24iLCJvbkNoYW5nZSIsIml0ZW1zIiwiYWRkTmV3IiwibmV3SXRlbXMiLCJzdWJQcm9wZXJ0aWVzIiwicmVtb3ZlSXRlbSIsInN1YlByb3BlcnR5IiwiU2VjdGlvbiIsImkiLCJpdGVtUHJvcGVydHkiLCJFZGl0IiwidGVzdElkIiwiRm9ybUdyb3VwIiwiRm9ybU1lc3NhZ2UiLCJMaXN0IiwiU2hvdyIsIlB1cmVDb21wb25lbnQiLCJWYWx1ZUdyb3VwIiwiaXNJZCIsInN1YlByb3BlcnR5V2l0aFBhdGgiLCJyZW5kZXJJdGVtcyIsInNob3dBY3Rpb24iLCJyZWNvcmRBY3Rpb25zIiwiYSIsInRpdGxlUHJvcGVydHkiLCJEZWZhdWx0UHJvcGVydHlWYWx1ZSIsInJhd1ZhbHVlIiwiZm9udFN0eWxlIiwiYXZhaWxhYmxlVmFsdWVzIiwib3B0aW9uIiwib3B0IiwiQmFkZ2UiLCJyZWNvcmRQcm9wZXJ0eUlzRXF1YWwiLCJwcmV2UHJvcHMiLCJuZXh0UHJvcHMiLCJwcmV2VmFsdWUiLCJuZXh0VmFsdWUiLCJwcmV2RXJyb3IiLCJuZXh0RXJyb3IiLCJCb29sZWFuIiwiU2VsZWN0RWRpdCIsInByb3BWYWx1ZSIsInN0eWxlcyIsInNlbGVjdFN0eWxlcyIsImF2IiwiU2VsZWN0IiwicyIsImlzRGlzYWJsZWQiLCJUZXh0RWRpdCIsIklucHV0IiwidGFyZ2V0Iiwia2V5Q29kZSIsIndpdGhUaGVtZSIsIkZpbHRlciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsImhhbmRsZVNlbGVjdENoYW5nZSIsInJlbmRlcklucHV0IiwiZmlsdGVyS2V5IiwiZmlsdGVyU3R5bGVzIiwicGFyc2VWYWx1ZSIsIkNoZWNrQm94IiwiaW5saW5lIiwiQm9vbGVhblByb3BlcnR5VmFsdWUiLCJiYXNlIiwibWFwVmFsdWUiLCJ0cmFuc2xhdGlvbiIsIm8iLCJEYXRlUGlja2VyIiwicHJvcGVydHlUeXBlIiwiZGF0ZSIsImZvcm1hdERhdGVQcm9wZXJ0eSIsIlBBUkFNX1NFUEFSQVRPUiIsIm5vcm1hbGl6ZUtleXMiLCJmaWx0ZXJzIiwibm9ybWFsaXplZCIsInBvcHVsYXRlIiwicmVmZXJlbmNlUmVzb3VyY2UiLCJkZWNvcmF0ZSIsImdldFByb3BlcnR5QnlLZXkiLCJyZWZlcmVuY2UiLCJmaW5kT25lIiwiY2FsbGJhY2siLCJpbml0aWFsIiwiQmFja2VuZEZpbHRlciIsImZyb21LZXkiLCJ0b0tleSIsImZyb21WYWx1ZSIsInRvVmFsdWUiLCJwcm9wZXJ0eVByb3BzIiwicXVpbGwiLCJjdXN0b21Qcm9wcyIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiRGVmYXVsdFF1aWxsVG9vbGJhck9wdGlvbnMiLCJSaWNoVGV4dCIsImNvbnRlbnQiLCJjb250ZW50UmVmIiwiY3JlYXRlUmVmIiwiY3VycmVudCIsImlubmVySFRNTCIsIm9yaWdpbmFsIiwibG9hZE9wdGlvbnMiLCJpbnB1dFZhbHVlIiwib3B0aW9uUmVjb3JkcyIsIm9wdGlvblJlY29yZCIsInNlbGVjdGVkSWQiLCJsb2FkZWRSZWNvcmQiLCJzZXRMb2FkZWRSZWNvcmQiLCJsb2FkaW5nUmVjb3JkIiwic2V0TG9hZGluZ1JlY29yZCIsInNlbGVjdGVkVmFsdWUiLCJzZWxlY3RlZE9wdGlvbiIsImMiLCJmaW5hbGx5IiwiU3R5bGVkTGluayIsIkJ1dHRvbkNTUyIsInNwYWNlIiwieHMiLCJSZWZlcmVuY2VWYWx1ZSIsInJlZklkIiwiciIsImxpbmUiLCJpc0lucHV0Iiwic2V0SXNJbnB1dCIsIklucHV0R3JvdXAiLCJ0eXBlcyIsInRleHRhcmVhIiwiYm9vbGVhbiIsImRhdGV0aW1lIiwicGFzc3dvcmQiLCJyaWNodGV4dCIsInN0cmluZyIsImRlZmF1bHRUeXBlIiwibnVtYmVyIiwiZmxvYXQiLCJtaXhlZCIsIkJhc2VQcm9wZXJ0eUNvbXBvbmVudCIsImJhc2VQcm9wZXJ0eSIsIndoZXJlIiwiY29tcG9uZW50cyIsIkFycmF5VHlwZSIsIk1peGVkIiwiTWl4ZWRUeXBlIiwiY2FtZWxpemVQcm9wZXJ0eVR5cGUiLCJlZGl0Iiwic2hvdyIsImxpc3QiLCJCYXNlUHJvcGVydHlDb21wb25lbnRFeHRlbmRlZCIsIkRlZmF1bHRUeXBlIiwiRGF0ZVRpbWUiLCJSZWZlcmVuY2UiLCJUZXh0QXJlYSIsIlBhc3N3b3JkIiwiQnJlYWRjcnVtYkxpbmsiLCJncmV5NDAiLCJmb250IiwibGluZUhlaWdodHMiLCJkZWZhdWx0IiwiZm9udFNpemVzIiwiQnJlYWRjcnVtYnMiLCJhY3Rpb25zIiwiYWN0aW9uc1RvQnV0dG9uR3JvdXAiLCJidXR0b25zIiwic291cmNlIiwiYnV0dG9uc01hcCIsImJ1dHRvbiIsImJ0biIsInJvdW5kZWQiLCJSb3V0ZXJMaW5rIiwiU3R5bGVkQmFja0J1dHRvbiIsInNob3dJbkRyYXdlciIsImNzc0Nsb3NlSWNvbiIsIkFjdGlvbkhlYWRlciIsInRvZ2dsZUZpbHRlciIsImFjdGlvblBlcmZvcm1lZCIsInRhZyIsIm9taXRBY3Rpb25zIiwiaGlkZUFjdGlvbkhlYWRlciIsInNvdXJjZUFjdGlvbiIsImFjdGlvbkJ1dHRvbnMiLCJyYSIsInJlc291cmNlQWN0aW9ucyIsImN1c3RvbVJlc291cmNlQnV0dG9ucyIsImlzTGlzdCIsImxpc3RBY3Rpb24iLCJjc3NJc1Jvb3RGbGV4IiwiY3NzSGVhZGVyTVQiLCJjc3NBY3Rpb25zTUIiLCJDc3NIQ29tcG9uZW50IiwiSDMiLCJCdXR0b25Hcm91cCIsIkxheW91dEVsZW1lbnRSZW5kZXJlciIsImxheW91dEVsZW1lbnQiLCJsYXlvdXRQcm9wcyIsInByb3BlcnR5TmFtZXMiLCJsYXlvdXRFbGVtZW50cyIsImlubmVyTGF5b3V0RWxlbWVudHMiLCJvdGhlciIsIkRlc2lnblN5c3RlbSIsIkRlc2lnblN5c3RlbS5NZXNzYWdlQm94IiwiRGVzaWduU3lzdGVtLkJhZGdlIiwiRGVzaWduU3lzdGVtLkJveCIsIlByb3BlcnR5VHlwZSIsImlubmVyTGF5b3V0RWxlbWVudCIsIk5ldyIsIkRyYXdlckNvbnRlbnQiLCJsYXlvdXQiLCJlZGl0UHJvcGVydGllcyIsIkRyYXdlckZvb3RlciIsInNob3dQcm9wZXJ0aWVzIiwiaXNUaXRsZSIsIlJlY29yZEluTGlzdCIsInJlY29yZEZyb21Qcm9wcyIsImlzTG9hZGluZyIsIm9uU2VsZWN0IiwiaGFuZGxlQWN0aW9uQ2FsbGJhY2siLCJhY3Rpb25SZXNwb25zZSIsInRhcmdldFRhZ05hbWUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJhY3Rpb25QYXJhbXMiLCJUYWJsZVJvdyIsIlRhYmxlQ2VsbCIsImxpc3RQcm9wZXJ0aWVzIiwiUGxhY2Vob2xkZXIiLCJoZWlnaHQiLCJTb3J0TGluayIsIm9wcG9zaXRlRGlyZWN0aW9uIiwic29ydGVkQnlJY29uIiwiTmF2TGluayIsIndpdGhSb3V0ZXIiLCJQcm9wZXJ0eUhlYWRlciIsImlzTWFpbiIsImlzU29ydGFibGUiLCJSZWNvcmRzVGFibGVIZWFkZXIiLCJvblNlbGVjdEFsbCIsInNlbGVjdGVkQWxsIiwiVGFibGVIZWFkIiwibWFyZ2luTGVmdCIsIkFjdGlvbkJ1dHRvbiIsImZpcnN0Q2hpbGQiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJXcmFwcGVkRWxlbWVudCIsImNsb25lRWxlbWVudCIsIk5vUmVjb3Jkc09yaWdpbmFsIiwiY2FuQ3JlYXRlIiwiSW5mb0JveCIsIk5vUmVjb3JkcyIsImdldEJ1bGtBY3Rpb25zRnJvbVJlY29yZHMiLCJhY3Rpb25zTWVtbyIsIlNlbGVjdGVkUmVjb3JkcyIsImJ1bGtCdXR0b25zIiwiVGFibGVDYXB0aW9uIiwiVGl0bGUiLCJSZWNvcmRzVGFibGUiLCJMb2FkZXIiLCJyZWNvcmRzSGF2ZUJ1bGtBY3Rpb24iLCJUYWJsZSIsIlRhYmxlQm9keSIsInNldFRhZyIsImhhbmRsZUFjdGlvblBlcmZvcm1lZCIsImhhbmRsZVBhZ2luYXRpb25DaGFuZ2UiLCJwYWdlTnVtYmVyIiwiUGFnaW5hdGlvbiIsIndpdGhOb3RpY2UiLCJCdWxrRGVsZXRlIiwiY291bnQiLCJGb3JtYXR0ZWRCdWxrRGVsZXRlIiwibmV3IiwiYnVsa0RlbGV0ZSIsIkJhc2VBY3Rpb25Db21wb25lbnQiLCJkb2N1bWVudGF0aW9uTGluayIsIkRPQ1MiLCJBY3Rpb24iLCJUcmFucyIsIkVycm9yTWVzc2FnZUJveCIsIk5vUmVzb3VyY2VFcnJvciIsIk5vQWN0aW9uRXJyb3IiLCJOb1JlY29yZEVycm9yIiwiU3R5bGVkV3JhcHBlciIsInh4bCIsIldyYXBwZXIiLCJEUkFXRVJfUE9SVEFMX0lEIiwiRHJhd2VyUG9ydGFsIiwiZHJhd2VyRWxlbWVudCIsInNldERyYXdlckVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJXcmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsIkRyYXdlcldyYXBwZXIiLCJUaGVtZVByb3ZpZGVyIiwiVEhFTUUiLCJEcmF3ZXIiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdHlsZSIsIkRFRkFVTFRfRFJBV0VSX1dJRFRIIiwiYWRkIiwiY3JlYXRlUG9ydGFsIiwicGFyc2VRdWVyeSIsImVudHJ5IiwiRmlsdGVyRHJhd2VyIiwiZmlsdGVyUHJvcGVydGllcyIsInNldEZpbHRlciIsInVzZVJvdXRlTWF0Y2giLCJyZXNldEZpbHRlciIsImZpbHRlcmVkU2VhcmNoIiwiUmVjb3JkQWN0aW9uIiwic2V0RGF0YSIsImZldGNoUmVjb3JkIiwib2xkUmVjb3JkIiwiaGFzRGlmZmVyZW50UmVjb3JkIiwiYWN0aW9uRnJvbVJlc291cmNlIiwiY29udGFpbmVyV2lkdGgiLCJSZXNvdXJjZUFjdGlvbiIsIkJ1bGtBY3Rpb24iLCJmZXRjaFJlY29yZHMiLCJyZWNvcmRJZHNTdHJpbmciLCJQYWdlIiwiY3VycmVudFBhZ2UiLCJxdWVyeVN0cmluZyIsImdldEFjdGlvbiIsInJlc291cmNlQWN0aW9uTWF0Y2giLCJyZWNvcmRBY3Rpb25NYXRjaCIsImJ1bGtBY3Rpb25NYXRjaCIsImZpbHRlclZpc2libGUiLCJzZXRGaWxlclZpc2libGUiLCJxdWVyeUhhc0ZpbHRlciIsInJlYWxFbmRBY3Rpb24iLCJsaXN0QWN0aW9uTmFtZSIsInNob3dGaWx0ZXIiLCJCYXNlQWN0aW9uIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkFwcCIsInNpZGViYXJWaXNpYmxlIiwiUmVzZXQiLCJPdmVybGF5IiwiTm90aWNlIiwiU3dpdGNoIiwiUm91dGUiLCJSZXNvdXJjZSIsIkFTU0VUU19JTklUSUFMSVpFIiwiQlJBTkRJTkdfSU5JVElBTElaRSIsIkRBU0hCT0FSRF9JTklUSUFMSVpFIiwiTE9DQUxFX0lOSVRJQUxJWkUiLCJQQUdFU19JTklUSUFMSVpFIiwiUEFUSFNfSU5JVElBTElaRSIsIlJFU09VUkNFU19JTklUSUFMSVpFIiwiVkVSU0lPTlNfSU5JVElBTElaRSIsInJlc291cmNlc1JlZHVjZXIiLCJwYWdlc1JlZHVjZXIiLCJsb2NhbGVzUmVkdWNlciIsImxhbmd1YWdlIiwidHJhbnNsYXRpb25zIiwiYnJhbmRpbmdSZWR1Y2VyIiwiYXNzZXRzUmVkdWNlciIsInBhdGhzUmVkdWNlciIsIkRFRkFVTFRfUEFUSFMiLCJkYXNoYm9hcmRSZWR1Y2VyIiwic2Vzc2lvblJlZHVjZXIiLCJ2ZXJzaW9uc1JlZHVjZXIiLCJub3RpY2VzUmVkdWNlciIsInJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJhc3NldHMiLCJsb2NhbGUiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVTdG9yZSIsImVudiIsIk5PREVfRU5WIiwic3RvcmUiLCJ1c2UiLCJpbml0UmVhY3RJMThuZXh0IiwiaW5pdCIsImxuZyIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsIkFwcGxpY2F0aW9uIiwiUHJvdmlkZXIiLCJCcm93c2VyUm91dGVyIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiQXBwQ29tcG9uZW50cyIsIkhvb2tzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FDQTtBQUNBO0NBQ0EsSUFBSSxPQUFPLElBQUksVUFBVSxPQUFPLEVBQUU7QUFFbEM7Q0FDQSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7Q0FDNUIsRUFBRSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO0NBQ2pDLEVBQUUsSUFBSUEsV0FBUyxDQUFDO0NBQ2hCLEVBQUUsSUFBSSxPQUFPLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxHQUFHLE1BQU0sR0FBRyxF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QUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUc7Q0FDckQsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztDQUNyRCxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUc7Q0FDM0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUc7Q0FDL0UsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUc7Q0FDL0UsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztDQUNyRCxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHO0NBQ3JELEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHO0NBQ3hDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSTtDQUM1QixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUk7Q0FDNUIsRUFBRSxNQUFNLEVBQUUsSUFBSTtDQUNkO0NBQ0EsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM3RCxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzdELEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzVFLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM1RSxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzdELEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM3RCxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDNUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzVFLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRztDQUMvQixFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDNUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzVFLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM3RCxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzdELEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDM0YsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDM0YsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHO0NBQy9CLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzlDLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzlDLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzlDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSTtDQUNoQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUk7Q0FDaEMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQy9CLENBQUMsQ0FBQztB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
