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
	      if (event.ctrlKey) {
	        window.open(href);
	        return;
	      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWJ1bmRsZS5kZXZlbG9wbWVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIi4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycy50cyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCIuLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvc2lkZWJhci9zaWRlYmFyLWJyYW5kaW5nLnRzeCIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5UmVkdWNlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5T2YuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19kZWJ1cnJMZXR0ZXIuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19mcmVlR2xvYmFsLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fcm9vdC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2FycmF5TWFwLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdExpa2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRvU3RyaW5nLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b1N0cmluZy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVidXJyLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlXb3Jkcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1VuaWNvZGVXb3JkLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVdvcmRzLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC93b3Jkcy5qcyIsIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUNvbXBvdW5kZXIuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlU2xpY2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jYXN0U2xpY2UuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNVbmljb2RlLmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlUb0FycmF5LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fdW5pY29kZVRvQXJyYXkuanMiLCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdUb0FycmF5LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ2FzZUZpcnN0LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC91cHBlckZpcnN0LmpzIiwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zdGFydENhc2UuanMiLCIuLi8uLi8uLi91dGlscy90cmFuc2xhdGUtZnVuY3Rpb25zLmZhY3RvcnkudHMiLCIuLi8uLi9ob29rcy91c2UtdHJhbnNsYXRpb24udHMiLCIuLi8uLi9jb21wb25lbnRzL2FwcC9zaWRlYmFyL3NpZGViYXItcGFnZXMudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvc2lkZWJhci9zaWRlYmFyLWZvb3Rlci50c3giLCIuLi8uLi91dGlscy9hcGktY2xpZW50LnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC9wYXJhbXMtdG8tZm9ybS1kYXRhLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9hZGQtbm90aWNlLnRzIiwiLi4vLi4vaG9va3MvdXNlLW5vdGljZS50cyIsIi4uLy4uL2hvb2tzL3VzZS1yZWNvcmQvbWVyZ2UtcmVjb3JkLXJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vdXRpbHMvZmxhdC9jb25zdGFudHMudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L3Byb3BlcnR5LWtleS1yZWdleC50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvc2VsZWN0LXBhcmFtcy50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvZmlsdGVyLW91dC1wYXJhbXMudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L3BhdGgtdG8tcGFydHMudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L3NldC50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvZ2V0LnRzIiwiLi4vLi4vLi4vdXRpbHMvZmxhdC9tZXJnZS50cyIsIi4uLy4uLy4uL3V0aWxzL2ZsYXQvcmVtb3ZlLXBhdGgudHMiLCIuLi8uLi8uLi91dGlscy9mbGF0L2ZsYXQtbW9kdWxlLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC91cGRhdGUtcmVjb3JkLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC9pcy1lbnRpcmUtcmVjb3JkLWdpdmVuLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC9maWx0ZXItcmVjb3JkLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZC91c2UtcmVjb3JkLnRzeCIsIi4uLy4uL2ludGVyZmFjZXMvYWN0aW9uL2FjdGlvbi1oYXMtY29tcG9uZW50LnRzIiwiLi4vLi4vaW50ZXJmYWNlcy9hY3Rpb24vYWN0aW9uLWhyZWYudHMiLCIuLi8uLi9pbnRlcmZhY2VzL2FjdGlvbi9jYWxsLWFjdGlvbi1hcGkudHMiLCIuLi8uLi9pbnRlcmZhY2VzL2FjdGlvbi9idWlsZC1hY3Rpb24tYXBpLWNhbGwtdHJpZ2dlci50cyIsIi4uLy4uL2ludGVyZmFjZXMvYWN0aW9uL2J1aWxkLWFjdGlvbi10ZXN0LWlkLnRzIiwiLi4vLi4vaW50ZXJmYWNlcy9hY3Rpb24vYnVpbGQtYWN0aW9uLWNsaWNrLWhhbmRsZXIudHMiLCIuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvdXRpbHMvYXBwZW5kLWZvcmNlLXJlZnJlc2gudHMiLCIuLi8uLi9ob29rcy91c2UtYWN0aW9uL3VzZS1hY3Rpb24tcmVzcG9uc2UtaGFuZGxlci50cyIsIi4uLy4uL2hvb2tzL3VzZS1hY3Rpb24vdXNlLWFjdGlvbi50cyIsIi4uLy4uL3N0b3JlL2FjdGlvbnMvc2V0LWN1cnJlbnQtYWRtaW4udHMiLCIuLi8uLi9ob29rcy91c2UtY3VycmVudC1hZG1pbi50cyIsIi4uLy4uL2hvb2tzL3VzZS1sb2NhbC1zdG9yYWdlL3VzZS1sb2NhbC1zdG9yYWdlLnRzIiwiLi4vLi4vaG9va3MvdXNlLW5hdmlnYXRpb24tcmVzb3VyY2VzLnRzIiwiLi4vLi4vaG9va3MvdXNlLXJlY29yZHMvdXNlLXJlY29yZHMudHMiLCIuLi8uLi9ob29rcy91c2Utc2VsZWN0ZWQtcmVjb3Jkcy91c2Utc2VsZWN0ZWQtcmVjb3Jkcy50cyIsIi4uLy4uL2hvb2tzL3VzZS1yZXNvdXJjZS91c2UtcmVzb3VyY2UudHMiLCIuLi8uLi9jb21wb25lbnRzL2FwcC9zaWRlYmFyL3NpZGViYXItcmVzb3VyY2Utc2VjdGlvbi50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9zaWRlYmFyL3NpZGViYXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvbG9nZ2VkLWluLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3ZlcnNpb24udHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvdG9wLWJhci50c3giLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2Ryb3Atbm90aWNlLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9zZXQtbm90aWNlLXByb2dyZXNzLnRzIiwiLi4vLi4vY29tcG9uZW50cy9hcHAvbm90aWNlLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2RlZmF1bHQtZGFzaGJvYXJkLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2Vycm9yLWJvdW5kYXJ5LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcm91dGVzL2Rhc2hib2FyZC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvYWRkLW5ldy1pdGVtLXRyYW5zbGF0aW9uLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS91dGlscy9wcm9wZXJ0eS1sYWJlbC9wcm9wZXJ0eS1sYWJlbC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvY29udmVydC10by1zdWItcHJvcGVydHkudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2FycmF5L3JlbW92ZS1zdWItcHJvcGVydHkudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYXJyYXkvaW5kZXgudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvY29udmVydC10by1zdWItcHJvcGVydHkudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvbWl4ZWQvaW5kZXgudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGVmYXVsdC10eXBlL2RlZmF1bHQtcHJvcGVydHktdmFsdWUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RlZmF1bHQtdHlwZS9zaG93LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9yZWNvcmQtcHJvcGVydHktaXMtZXF1YWwudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGVmYXVsdC10eXBlL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RlZmF1bHQtdHlwZS9maWx0ZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RlZmF1bHQtdHlwZS9saXN0LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9ib29sZWFuL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2Jvb2xlYW4vbWFwLXZhbHVlLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9ib29sZWFuL2Jvb2xlYW4tcHJvcGVydHktdmFsdWUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2Jvb2xlYW4vc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYm9vbGVhbi9saXN0LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9ib29sZWFuL2ZpbHRlci50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGF0ZXRpbWUvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvZGF0ZXRpbWUvbWFwLXZhbHVlLnRzIiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RhdGV0aW1lL3Nob3cudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RhdGV0aW1lL2xpc3QudHN4IiwiLi4vLi4vLi4vYmFja2VuZC91dGlscy9maWx0ZXIvZmlsdGVyLnRzIiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2RhdGV0aW1lL2ZpbHRlci50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmljaHRleHQvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmljaHRleHQvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmljaHRleHQvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmVmZXJlbmNlL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL3JlZmVyZW5jZS9yZWZlcmVuY2UtdmFsdWUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL3JlZmVyZW5jZS9zaG93LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZS9yZWZlcmVuY2UvbGlzdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcmVmZXJlbmNlL2ZpbHRlci50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvdGV4dGFyZWEvc2hvdy50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvdGV4dGFyZWEvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcGFzc3dvcmQvZWRpdC50c3giLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvcGFzc3dvcmQvaW5kZXgudHMiLCIuLi8uLi9jb21wb25lbnRzL3Byb3BlcnR5LXR5cGUvYmFzZS1wcm9wZXJ0eS1jb21wb25lbnQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9wcm9wZXJ0eS10eXBlL2luZGV4LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2JyZWFkY3J1bWJzLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2FjdGlvbi1oZWFkZXIvYWN0aW9ucy10by1idXR0b24tZ3JvdXAudHMiLCIuLi8uLi9jb21wb25lbnRzL2FwcC9hY3Rpb24taGVhZGVyL3N0eWxlZC1iYWNrLWJ1dHRvbi50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9hY3Rpb24taGVhZGVyL2FjdGlvbi1oZWFkZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL3V0aWxzL2xheW91dC1lbGVtZW50LXJlbmRlcmVyLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYWN0aW9ucy9uZXcudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL2VkaXQudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL3Nob3cudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvcmVjb3Jkcy10YWJsZS91dGlscy9kaXNwbGF5LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcmVjb3JkLWluLWxpc3QudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvc29ydC1saW5rLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcHJvcGVydHktaGVhZGVyLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcmVjb3Jkcy10YWJsZS1oZWFkZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHAvYWN0aW9uLWJ1dHRvbi9hY3Rpb24tYnV0dG9uLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvbm8tcmVjb3Jkcy50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9yZWNvcmRzLXRhYmxlL3V0aWxzL2dldC1idWxrLWFjdGlvbnMtZnJvbS1yZWNvcmRzLnRzIiwiLi4vLi4vY29tcG9uZW50cy9hcHAvcmVjb3Jkcy10YWJsZS9zZWxlY3RlZC1yZWNvcmRzLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL3JlY29yZHMtdGFibGUvcmVjb3Jkcy10YWJsZS50c3giLCIuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvbGlzdC50c3giLCIuLi8uLi9ob2Mvd2l0aC1ub3RpY2UudHMiLCIuLi8uLi9jb21wb25lbnRzL2FjdGlvbnMvYnVsay1kZWxldGUudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hY3Rpb25zL2luZGV4LnRzIiwiLi4vLi4vLi4vY29uc3RhbnRzLnRzIiwiLi4vLi4vY29tcG9uZW50cy9hcHAvYmFzZS1hY3Rpb24tY29tcG9uZW50LnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2Vycm9yLW1lc3NhZ2UudHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvdXRpbHMvd3JhcHBlci50c3giLCIuLi8uLi9jb21wb25lbnRzL2FwcC9kcmF3ZXItcG9ydGFsLnRzeCIsIi4uLy4uL2NvbXBvbmVudHMvYXBwL2ZpbHRlci1kcmF3ZXIudHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvcmVjb3JkLWFjdGlvbi50c3giLCIuLi8uLi9jb21wb25lbnRzL3JvdXRlcy9yZXNvdXJjZS1hY3Rpb24udHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvYnVsay1hY3Rpb24udHN4IiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvcGFnZS50c3giLCIuLi8uLi9jb21wb25lbnRzL3JvdXRlcy91dGlscy9xdWVyeS1oYXMtZmlsdGVyLnRzIiwiLi4vLi4vY29tcG9uZW50cy9yb3V0ZXMvcmVzb3VyY2UudHN4IiwiLi4vLi4vY29tcG9uZW50cy9hcHBsaWNhdGlvbi50c3giLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtYXNzZXRzLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbml0aWFsaXplLWJyYW5kaW5nLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbml0aWFsaXplLWRhc2hib2FyZC50cyIsIi4uLy4uL3N0b3JlL2FjdGlvbnMvaW5pdGlhbGl6ZS1sb2NhbGUudHMiLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtcGFnZXMudHMiLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtcGF0aHMudHMiLCIuLi8uLi9zdG9yZS9hY3Rpb25zL2luaXRpYWxpemUtcmVzb3VyY2VzLnRzIiwiLi4vLi4vc3RvcmUvYWN0aW9ucy9pbml0aWFsaXplLXZlcnNpb25zLnRzIiwiLi4vLi4vc3RvcmUvc3RvcmUudHMiLCIuLi8uLi9idW5kbGUtZW50cnkuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImltcG9ydCB7IEFkbWluQnJvT3B0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2FkbWluLWJyby1vcHRpb25zLmludGVyZmFjZSdcbmltcG9ydCB7IFBhdGhzIH0gZnJvbSAnLi4vLi4vLi4vZnJvbnRlbmQvc3RvcmUvc3RvcmUnXG5cbmxldCBnbG9iYWxBbnk6IGFueSA9IHt9XG5cbnRyeSB7XG4gIGdsb2JhbEFueSA9IHdpbmRvd1xufSBjYXRjaCAoZXJyb3IpIHtcbiAgaWYgKGVycm9yLm1lc3NhZ2UgIT09ICd3aW5kb3cgaXMgbm90IGRlZmluZWQnKSB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxufVxuXG4vKipcbiAqIEJhc2UgUGFyYW1zIGZvciBhIGFueSBmdW5jdGlvblxuICogQGFsaWFzIEFjdGlvblBhcmFtc1xuICogQG1lbWJlcm9mIFZpZXdIZWxwZXJzXG4gKi9cbmV4cG9ydCB0eXBlIEFjdGlvblBhcmFtcyA9IHtcbiAgLyoqXG4gICAqIFVuaXF1ZSBSZXNvdXJjZSBJRFxuICAgKi9cbiAgcmVzb3VyY2VJZDogc3RyaW5nO1xuICAvKipcbiAgICogQWN0aW9uIG5hbWVcbiAgICovXG4gIGFjdGlvbk5hbWU6IHN0cmluZztcbiAgLyoqXG4gICAqIE9wdGlvbmFsIHF1ZXJ5IHN0cmluZzogPy4uLi5cbiAgICovXG4gIHNlYXJjaD8gOiBzdHJpbmc7XG59XG5cbi8qKlxuICogUGFyYW1zIGZvciBhIHJlY29yZCBhY3Rpb25cbiAqIEBhbGlhcyBSZWNvcmRBY3Rpb25QYXJhbXNcbiAqIEBleHRlbmRzIEFjdGlvblBhcmFtc1xuICogQG1lbWJlcm9mIFZpZXdIZWxwZXJzXG4gKi9cbmV4cG9ydCB0eXBlIFJlY29yZEFjdGlvblBhcmFtcyA9IEFjdGlvblBhcmFtcyAmIHtcbiAgLyoqXG4gICAqIFJlY29yZCBJRFxuICAgKi9cbiAgcmVjb3JkSWQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBQYXJhbXMgZm9yIGEgYnVsayBhY3Rpb25cbiAqIEBhbGlhcyBCdWxrQWN0aW9uUGFyYW1zXG4gKiBAZXh0ZW5kcyBBY3Rpb25QYXJhbXNcbiAqIEBtZW1iZXJvZiBWaWV3SGVscGVyc1xuICovXG5leHBvcnQgdHlwZSBCdWxrQWN0aW9uUGFyYW1zID0gQWN0aW9uUGFyYW1zICYge1xuICAvKipcbiAgICogQXJyYXkgb2YgUmVjb3JkcyBJRFxuICAgKi9cbiAgcmVjb3JkSWRzPzogQXJyYXk8c3RyaW5nPjtcbn1cblxuLyoqXG4gKiBQYXJhbXMgZm9yIGEgcmVzb3VyY2UgYWN0aW9uXG4gKiBAYWxpYXMgUmVzb3VyY2VBY3Rpb25QYXJhbXNcbiAqIEBleHRlbmRzIEFjdGlvblBhcmFtc1xuICogQG1lbWJlcm9mIFZpZXdIZWxwZXJzXG4gKi9cbmV4cG9ydCB0eXBlIFJlc291cmNlQWN0aW9uUGFyYW1zID0gQWN0aW9uUGFyYW1zXG5cbmNvbnN0IHJ1bkRhdGUgPSBuZXcgRGF0ZSgpXG5cbi8qKlxuICogQ29sbGVjdGlvbiBvZiBoZWxwZXIgbWV0aG9kcyBhdmFpbGFibGUgaW4gdGhlIHZpZXdzXG4gKi9cbmV4cG9ydCBjbGFzcyBWaWV3SGVscGVycyB7XG4gIHB1YmxpYyBvcHRpb25zOiBQYXRoc1xuXG4gIGNvbnN0cnVjdG9yKHsgb3B0aW9ucyB9OiB7IG9wdGlvbnM/OiBBZG1pbkJyb09wdGlvbnMgfSA9IHt9KSB7XG4gICAgbGV0IG9wdHM6IFBhdGhzID0gVmlld0hlbHBlcnMuZ2V0UGF0aHMob3B0aW9ucylcblxuICAgIG9wdHMgPSBvcHRzIHx8IHtcbiAgICAgIHJvb3RQYXRoOiAnL2FkbWluJyxcbiAgICB9XG5cbiAgICAvLyB3aGVuIFZpZXdIZWxwZXJzIGFyZSB1c2VkIG9uIHRoZSBmcm9udGVuZCwgcGF0aHMgYXJlIHRha2VuIGZyb20gZ2xvYmFsIFJlZHV4IFN0YXRlXG4gICAgdGhpcy5vcHRpb25zID0gb3B0c1xuICB9XG5cbiAgc3RhdGljIGdldFBhdGhzKG9wdGlvbnM/OiBBZG1pbkJyb09wdGlvbnMpOiBQYXRocyB7XG4gICAgcmV0dXJuIG9wdGlvbnMgfHwgKGdsb2JhbEFueS5SRURVWF9TVEFURT8ucGF0aHMpXG4gIH1cblxuICAvKipcbiAgICogVG8gZWFjaCByZWxhdGVkIHBhdGggYWRkcyByb290UGF0aCBwYXNzZWQgYnkgdGhlIHVzZXIsIGFzIHdlbGwgYXMgYSBxdWVyeSBzdHJpbmdcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtICB7QXJyYXk8c3RyaW5nPn0gW3BhdGhzXSAgICAgIGxpc3Qgb2YgcGFydHMgb2YgdGhlIHVybFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgIHBhdGhcbiAgICogQHJldHVybiB7cXVlcnl9ICAgICAgICBbc2VhcmNoPScnXSBxdWVyeSBzdHJpbmcgd2hpY2ggY2FuIGJlIGZldGNoXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBgbG9jYXRpb24uc2VhcmNoYFxuICAgKi9cbiAgdXJsQnVpbGRlcihwYXRoczogQXJyYXk8c3RyaW5nPiA9IFtdLCBzZWFyY2ggPSAnJyk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2VwYXJhdG9yID0gJy8nXG4gICAgY29uc3QgcmVwbGFjZSA9IG5ldyBSZWdFeHAoYCR7c2VwYXJhdG9yfXsxLH1gLCAnZycpXG5cbiAgICBsZXQgeyByb290UGF0aCB9ID0gdGhpcy5vcHRpb25zXG4gICAgaWYgKCFyb290UGF0aC5zdGFydHNXaXRoKHNlcGFyYXRvcikpIHsgcm9vdFBhdGggPSBgJHtzZXBhcmF0b3J9JHtyb290UGF0aH1gIH1cblxuICAgIGNvbnN0IHBhcnRzID0gW3Jvb3RQYXRoLCAuLi5wYXRoc11cbiAgICByZXR1cm4gYCR7cGFydHMuam9pbihzZXBhcmF0b3IpLnJlcGxhY2UocmVwbGFjZSwgc2VwYXJhdG9yKX0ke3NlYXJjaH1gXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBsb2dpbiBVUkxcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgbG9naW5VcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvZ2luUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgbG9nb3V0IFVSTFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBsb2dvdXRVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxvZ291dFBhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIFVSTCBmb3IgdGhlIGRhc2hib2FyZFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBkYXNoYm9hcmRVcmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLnJvb3RQYXRoXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBVUkwgZm9yIGdpdmVuIHBhZ2UgbmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFnZU5hbWUgICAgICAgcGFnZSBuYW1lIHdoaWNoIGlzIGEgdW5pcXVlIGtleSBzcGVjaWZpZWQgaW5cbiAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtAbGluayBBZG1pbkJyb09wdGlvbnN9XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHBhZ2VVcmwocGFnZU5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudXJsQnVpbGRlcihbJ3BhZ2VzJywgcGFnZU5hbWVdKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdXJsIGZvciBhIGBlZGl0YCBhY3Rpb24gaW4gZ2l2ZW4gUmVzb3VyY2UuIFVzZXMge0BsaW5rIHJlY29yZEFjdGlvblVybH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVjb3JkSWQgICAgaWQgdG8gdGhlIHJlY29yZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlYXJjaF0gICAgICAgIG9wdGlvbmFsIHF1ZXJ5IHN0cmluZ1xuICAgKi9cbiAgZWRpdFVybChyZXNvdXJjZUlkOiBzdHJpbmcsIHJlY29yZElkOiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMucmVjb3JkQWN0aW9uVXJsKHsgcmVzb3VyY2VJZCwgcmVjb3JkSWQsIGFjdGlvbk5hbWU6ICdlZGl0Jywgc2VhcmNoIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB1cmwgZm9yIGEgYHNob3dgIGFjdGlvbiBpbiBnaXZlbiBSZXNvdXJjZS4gVXNlcyB7QGxpbmsgcmVjb3JkQWN0aW9uVXJsfVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVzb3VyY2VJZCAgaWQgdG8gdGhlIHJlc291cmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWNvcmRJZCAgICBpZCB0byB0aGUgcmVjb3JkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VhcmNoXSAgICAgICAgb3B0aW9uYWwgcXVlcnkgc3RyaW5nXG4gICAqL1xuICBzaG93VXJsKHJlc291cmNlSWQ6IHN0cmluZywgcmVjb3JkSWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZWNvcmRBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZTogJ3Nob3cnLCBzZWFyY2ggfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHVybCBmb3IgYSBgZGVsZXRlYCBhY3Rpb24gaW4gZ2l2ZW4gUmVzb3VyY2UuIFVzZXMge0BsaW5rIHJlY29yZEFjdGlvblVybH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVjb3JkSWQgICAgaWQgdG8gdGhlIHJlY29yZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlYXJjaF0gICAgICAgIG9wdGlvbmFsIHF1ZXJ5IHN0cmluZ1xuICAgKi9cbiAgZGVsZXRlVXJsKHJlc291cmNlSWQ6IHN0cmluZywgcmVjb3JkSWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZWNvcmRBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZTogJ2RlbGV0ZScsIHNlYXJjaCB9KVxuICB9XG5cblxuICAvKipcbiAgICogUmV0dXJucyB1cmwgZm9yIGEgYG5ld2AgYWN0aW9uIGluIGdpdmVuIFJlc291cmNlLiBVc2VzIHtAbGluayByZXNvdXJjZUFjdGlvblVybH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3NlYXJjaF0gICAgICAgIG9wdGlvbmFsIHF1ZXJ5IHN0cmluZ1xuICAgKi9cbiAgbmV3VXJsKHJlc291cmNlSWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUFjdGlvblVybCh7IHJlc291cmNlSWQsIGFjdGlvbk5hbWU6ICduZXcnLCBzZWFyY2ggfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHVybCBmb3IgYSBgbmV3YCBhY3Rpb24gaW4gZ2l2ZW4gUmVzb3VyY2UuIFVzZXMge0BsaW5rIHJlc291cmNlQWN0aW9uVXJsfVxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVzb3VyY2VJZCAgaWQgdG8gdGhlIHJlc291cmNlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VhcmNoXSAgICAgICAgb3B0aW9uYWwgcXVlcnkgc3RyaW5nXG4gICAqL1xuICBsaXN0VXJsKHJlc291cmNlSWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUFjdGlvblVybCh7IHJlc291cmNlSWQsIGFjdGlvbk5hbWU6ICdsaXN0Jywgc2VhcmNoIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB1cmwgZm9yIGEgYGJ1bGtEZWxldGVgIGFjdGlvbiBpbiBnaXZlbiBSZXNvdXJjZS4gVXNlcyB7QGxpbmsgYnVsa0FjdGlvblVybH1cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWQgIGlkIHRvIHRoZSByZXNvdXJjZVxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZz59IHJlY29yZElkcyAgIHNlcGFyYXRlZCBieSBjb21tYSByZWNvcmRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbc2VhcmNoXSAgICAgICAgb3B0aW9uYWwgcXVlcnkgc3RyaW5nXG4gICAqL1xuICBidWxrRGVsZXRlVXJsKHJlc291cmNlSWQ6IHN0cmluZywgcmVjb3JkSWRzOiBBcnJheTxzdHJpbmc+LCBzZWFyY2g/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmJ1bGtBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZHMsIGFjdGlvbk5hbWU6ICdidWxrRGVsZXRlJywgc2VhcmNoIH0pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyByZXNvdXJjZUFjdGlvbiB1cmxcbiAgICpcbiAgICogQHBhcmFtICAge1Jlc291cmNlQWN0aW9uUGFyYW1zfSAgb3B0aW9uc1xuICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgb3B0aW9ucy5yZXNvdXJjZUlkXG4gICAqIEBwYXJhbSAgIHtzdHJpbmd9ICBvcHRpb25zLmFjdGlvbk5hbWVcbiAgICogQHBhcmFtICAge3N0cmluZ30gIFtvcHRpb25zLnNlYXJjaF0gICAgICAgIG9wdGlvbmFsIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgKi9cbiAgcmVzb3VyY2VBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lLCBzZWFyY2ggfTogUmVzb3VyY2VBY3Rpb25QYXJhbXMpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnVybEJ1aWxkZXIoWydyZXNvdXJjZXMnLCByZXNvdXJjZUlkLCAnYWN0aW9ucycsIGFjdGlvbk5hbWVdLCBzZWFyY2gpXG4gIH1cblxuICByZXNvdXJjZVVybCh7IHJlc291cmNlSWQsIHNlYXJjaCB9OiBPbWl0PFJlc291cmNlQWN0aW9uUGFyYW1zLCAnYWN0aW9uTmFtZSc+KTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy51cmxCdWlsZGVyKFsncmVzb3VyY2VzJywgcmVzb3VyY2VJZF0sIHNlYXJjaClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHJlY29yZEFjdGlvbiB1cmxcbiAgICpcbiAgICogQHBhcmFtICAge1JlY29yZEFjdGlvblBhcmFtc30gIG9wdGlvbnNcbiAgICogQHBhcmFtICAge3N0cmluZ30gIG9wdGlvbnMucmVzb3VyY2VJZFxuICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgb3B0aW9ucy5yZWNvcmRJZFxuICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgb3B0aW9ucy5hY3Rpb25OYW1lXG4gICAqXG4gICAqIEByZXR1cm4gIHtzdHJpbmd9XG4gICAqL1xuICByZWNvcmRBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZSwgc2VhcmNoIH06IFJlY29yZEFjdGlvblBhcmFtcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudXJsQnVpbGRlcihbJ3Jlc291cmNlcycsIHJlc291cmNlSWQsICdyZWNvcmRzJywgcmVjb3JkSWQsIGFjdGlvbk5hbWVdLCBzZWFyY2gpXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBidWxrQWN0aW9uIHVybFxuICAgKlxuICAgKiBAcGFyYW0gICB7QnVsa0FjdGlvblBhcmFtc30gIG9wdGlvbnNcbiAgICogQHBhcmFtICAge3N0cmluZ30gIG9wdGlvbnMucmVzb3VyY2VJZFxuICAgKiBAcGFyYW0gICB7QXJyYXk8c3RyaW5nPn0gIFtvcHRpb25zLnJlY29yZElkc11cbiAgICogQHBhcmFtICAge3N0cmluZ30gIG9wdGlvbnMuYWN0aW9uTmFtZVxuICAgKlxuICAgKiBAcmV0dXJuICB7c3RyaW5nfVxuICAgKi9cbiAgYnVsa0FjdGlvblVybCh7IHJlc291cmNlSWQsIHJlY29yZElkcywgYWN0aW9uTmFtZSwgc2VhcmNoIH06IEJ1bGtBY3Rpb25QYXJhbXMpOiBzdHJpbmcge1xuICAgIGNvbnN0IHVybCA9IHRoaXMudXJsQnVpbGRlcihbXG4gICAgICAncmVzb3VyY2VzJywgcmVzb3VyY2VJZCwgJ2J1bGsnLCBhY3Rpb25OYW1lLFxuICAgIF0pXG4gICAgaWYgKHJlY29yZElkcyAmJiByZWNvcmRJZHMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKVxuICAgICAgcXVlcnkuc2V0KCdyZWNvcmRJZHMnLCByZWNvcmRJZHMuam9pbignLCcpKVxuICAgICAgcmV0dXJuIGAke3VybH0/JHtxdWVyeS50b1N0cmluZygpfWBcbiAgICB9XG4gICAgcmV0dXJuIGAke3VybH0ke3NlYXJjaCB8fCAnJ31gXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhYnNvbHV0ZSBwYXRoIHRvIGEgZ2l2ZW4gYXNzZXQuXG4gICAqIEBwcml2YXRlXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gYXNzZXRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgYXNzZXRQYXRoKGFzc2V0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuYXNzZXRzQ0ROKSB7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGFzc2V0LCB0aGlzLm9wdGlvbnMuYXNzZXRzQ0ROKS5ocmVmXG5cbiAgICAgIC8vIGFkZGluZyB0aW1lc3RhbXAgdG8gdGhlIGhyZWYgaW52YWxpZGF0ZXMgdGhlIENETiBjYWNoZVxuICAgICAgcmV0dXJuIGAke3VybH0/ZGF0ZT0ke3J1bkRhdGUuZ2V0VGltZSgpfWBcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXJsQnVpbGRlcihbJ2Zyb250ZW5kJywgJ2Fzc2V0cycsIGFzc2V0XSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3SGVscGVyc1xuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBPdmVycmlkYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uL3V0aWxzL292ZXJyaWRhYmxlLWNvbXBvbmVudCdcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICpcbiAqIEBjbGFzc2Rlc2NcbiAqIE92ZXJyaWRlcyBvbmUgb2YgdGhlIGNvbXBvbmVudCBmb3JtIEFkbWluQnJvIGNvcmUgd2hlbiB1c2VyIHBhc3MgaXRzIG5hbWUgdG9cbiAqIHtAbGluayBBZG1pbkJyby5idW5kbGV9IG1ldGhvZC5cbiAqXG4gKiBJZiBjYXNlIG9mIGJlaW5nIG92ZXJyaWRkZW4sIGNvbXBvbmVudCByZWNlaXZlcyBhZGRpdGlvbmFsIHByb3A6IGBPcmlnaW5hbENvbXBvbmVudGBcbiAqXG4gKiBAZXhhbXBsZVxuICogQWRtaW5Ccm8uYnVuZGxlKCcuL3BhdGgvdG8vY29tcG9uZW50JywgJ1NpZGViYXJGb290ZXInKVxuICovXG5mdW5jdGlvbiBhbGxvd092ZXJyaWRlPFA+KFxuICBPcmlnaW5hbENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPixcbiAgbmFtZTogT3ZlcnJpZGFibGVDb21wb25lbnQsXG4pOiBDb21wb25lbnRUeXBlPFAgJiB7T3JpZ2luYWxDb21wb25lbnQ/OiBDb21wb25lbnRUeXBlPFA+fT4ge1xuICAvLyBzc3JcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIE9yaWdpbmFsQ29tcG9uZW50XG4gIH1cblxuICBjb25zdCBXcmFwcGVyQ29tcG9uZW50OiBSZWFjdC5GQzxQPiA9IChwcm9wcykgPT4ge1xuICAgIGxldCBnbG9iYWxBbnk6IGFueSA9IHdpbmRvd1xuICAgIGdsb2JhbEFueSA9IHdpbmRvd1xuXG4gICAgbGV0IENvbXBvbmVudCA9IE9yaWdpbmFsQ29tcG9uZW50XG5cbiAgICBpZiAoZ2xvYmFsQW55LkFkbWluQnJvXG4gICAgICAmJiBnbG9iYWxBbnkuQWRtaW5Ccm8uVXNlckNvbXBvbmVudHNcbiAgICAgICYmIGdsb2JhbEFueS5BZG1pbkJyby5Vc2VyQ29tcG9uZW50c1tuYW1lXVxuICAgICkge1xuICAgICAgQ29tcG9uZW50ID0gZ2xvYmFsQW55LkFkbWluQnJvLlVzZXJDb21wb25lbnRzW25hbWVdXG4gICAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IE9yaWdpbmFsQ29tcG9uZW50PXtPcmlnaW5hbENvbXBvbmVudH0gLz5cbiAgICB9XG5cbiAgICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICByZXR1cm4gV3JhcHBlckNvbXBvbmVudFxufVxuXG5leHBvcnQge1xuICBhbGxvd092ZXJyaWRlIGFzIGRlZmF1bHQsXG4gIGFsbG93T3ZlcnJpZGUsXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjc3NDbGFzcywgdGhlbWVHZXQgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBWaWV3SGVscGVycyBmcm9tICcuLi8uLi8uLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXG5pbXBvcnQgeyBCcmFuZGluZ09wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi8uLi9hZG1pbi1icm8tb3B0aW9ucy5pbnRlcmZhY2UnXG5pbXBvcnQgYWxsb3dPdmVycmlkZSBmcm9tICcuLi8uLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGJyYW5kaW5nOiBCcmFuZGluZ09wdGlvbnM7XG59XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRMb2dvID0gc3R5bGVkKExpbmspYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nOiAke3RoZW1lR2V0KCdzcGFjZScsICdsZycpfSAke3RoZW1lR2V0KCdzcGFjZScsICd4eGwnKX0gJHt0aGVtZUdldCgnc3BhY2UnLCAneHhsJyl9O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJiA+IGgxIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzJywgJ2JvbGRlcicpfTtcbiAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRXZWlnaHRzJywgJ2JvbGRlcicpfTtcbiAgICBjb2xvcjogJHt0aGVtZUdldCgnY29sb3JzJywgJ2dyZXk4MCcpfTtcbiAgICBmb250LXNpemU6ICR7dGhlbWVHZXQoJ2ZvbnRTaXplcycsICd4bCcpfTtcbiAgICBsaW5lLWhlaWdodDogJHt0aGVtZUdldCgnbGluZUhlaWdodHMnLCAneGwnKX07XG4gIH1cblxuICAmID4gaW1nIHtcbiAgICBtYXgtd2lkdGg6IDE3MHB4O1xuICB9XG5cbiAgJjpob3ZlciBoMSB7XG4gICAgY29sb3I6ICR7dGhlbWVHZXQoJ2NvbG9ycycsICdwcmltYXJ5MTAwJyl9O1xuICB9XG5gXG5cbmNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxuXG5jb25zdCBTaWRlYmFyQnJhbmRpbmc6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGJyYW5kaW5nIH0gPSBwcm9wc1xuICBjb25zdCB7IGxvZ28sIGNvbXBhbnlOYW1lIH0gPSBicmFuZGluZ1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRMb2dvXG4gICAgICBjbGFzc05hbWU9e2Nzc0NsYXNzKCdMb2dvJyl9XG4gICAgICB0bz17aC5kYXNoYm9hcmRVcmwoKX1cbiAgICA+XG4gICAgICB7bG9nbyA/IChcbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17bG9nb31cbiAgICAgICAgICBhbHQ9e2NvbXBhbnlOYW1lfVxuICAgICAgICAvPlxuICAgICAgKSA6IDxoMT57Y29tcGFueU5hbWV9PC9oMT59XG4gICAgPC9TdHlsZWRMb2dvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsbG93T3ZlcnJpZGUoU2lkZWJhckJyYW5kaW5nLCAnU2lkZWJhckJyYW5kaW5nJylcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVJlZHVjZTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlPZmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5T2Yob2JqZWN0KSB7XG4gIHJldHVybiBmdW5jdGlvbihrZXkpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHlPZjtcbiIsInZhciBiYXNlUHJvcGVydHlPZiA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eU9mJyk7XG5cbi8qKiBVc2VkIHRvIG1hcCBMYXRpbiBVbmljb2RlIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycy4gKi9cbnZhciBkZWJ1cnJlZExldHRlcnMgPSB7XG4gIC8vIExhdGluLTEgU3VwcGxlbWVudCBibG9jay5cbiAgJ1xceGMwJzogJ0EnLCAgJ1xceGMxJzogJ0EnLCAnXFx4YzInOiAnQScsICdcXHhjMyc6ICdBJywgJ1xceGM0JzogJ0EnLCAnXFx4YzUnOiAnQScsXG4gICdcXHhlMCc6ICdhJywgICdcXHhlMSc6ICdhJywgJ1xceGUyJzogJ2EnLCAnXFx4ZTMnOiAnYScsICdcXHhlNCc6ICdhJywgJ1xceGU1JzogJ2EnLFxuICAnXFx4YzcnOiAnQycsICAnXFx4ZTcnOiAnYycsXG4gICdcXHhkMCc6ICdEJywgICdcXHhmMCc6ICdkJyxcbiAgJ1xceGM4JzogJ0UnLCAgJ1xceGM5JzogJ0UnLCAnXFx4Y2EnOiAnRScsICdcXHhjYic6ICdFJyxcbiAgJ1xceGU4JzogJ2UnLCAgJ1xceGU5JzogJ2UnLCAnXFx4ZWEnOiAnZScsICdcXHhlYic6ICdlJyxcbiAgJ1xceGNjJzogJ0knLCAgJ1xceGNkJzogJ0knLCAnXFx4Y2UnOiAnSScsICdcXHhjZic6ICdJJyxcbiAgJ1xceGVjJzogJ2knLCAgJ1xceGVkJzogJ2knLCAnXFx4ZWUnOiAnaScsICdcXHhlZic6ICdpJyxcbiAgJ1xceGQxJzogJ04nLCAgJ1xceGYxJzogJ24nLFxuICAnXFx4ZDInOiAnTycsICAnXFx4ZDMnOiAnTycsICdcXHhkNCc6ICdPJywgJ1xceGQ1JzogJ08nLCAnXFx4ZDYnOiAnTycsICdcXHhkOCc6ICdPJyxcbiAgJ1xceGYyJzogJ28nLCAgJ1xceGYzJzogJ28nLCAnXFx4ZjQnOiAnbycsICdcXHhmNSc6ICdvJywgJ1xceGY2JzogJ28nLCAnXFx4ZjgnOiAnbycsXG4gICdcXHhkOSc6ICdVJywgICdcXHhkYSc6ICdVJywgJ1xceGRiJzogJ1UnLCAnXFx4ZGMnOiAnVScsXG4gICdcXHhmOSc6ICd1JywgICdcXHhmYSc6ICd1JywgJ1xceGZiJzogJ3UnLCAnXFx4ZmMnOiAndScsXG4gICdcXHhkZCc6ICdZJywgICdcXHhmZCc6ICd5JywgJ1xceGZmJzogJ3knLFxuICAnXFx4YzYnOiAnQWUnLCAnXFx4ZTYnOiAnYWUnLFxuICAnXFx4ZGUnOiAnVGgnLCAnXFx4ZmUnOiAndGgnLFxuICAnXFx4ZGYnOiAnc3MnLFxuICAvLyBMYXRpbiBFeHRlbmRlZC1BIGJsb2NrLlxuICAnXFx1MDEwMCc6ICdBJywgICdcXHUwMTAyJzogJ0EnLCAnXFx1MDEwNCc6ICdBJyxcbiAgJ1xcdTAxMDEnOiAnYScsICAnXFx1MDEwMyc6ICdhJywgJ1xcdTAxMDUnOiAnYScsXG4gICdcXHUwMTA2JzogJ0MnLCAgJ1xcdTAxMDgnOiAnQycsICdcXHUwMTBhJzogJ0MnLCAnXFx1MDEwYyc6ICdDJyxcbiAgJ1xcdTAxMDcnOiAnYycsICAnXFx1MDEwOSc6ICdjJywgJ1xcdTAxMGInOiAnYycsICdcXHUwMTBkJzogJ2MnLFxuICAnXFx1MDEwZSc6ICdEJywgICdcXHUwMTEwJzogJ0QnLCAnXFx1MDEwZic6ICdkJywgJ1xcdTAxMTEnOiAnZCcsXG4gICdcXHUwMTEyJzogJ0UnLCAgJ1xcdTAxMTQnOiAnRScsICdcXHUwMTE2JzogJ0UnLCAnXFx1MDExOCc6ICdFJywgJ1xcdTAxMWEnOiAnRScsXG4gICdcXHUwMTEzJzogJ2UnLCAgJ1xcdTAxMTUnOiAnZScsICdcXHUwMTE3JzogJ2UnLCAnXFx1MDExOSc6ICdlJywgJ1xcdTAxMWInOiAnZScsXG4gICdcXHUwMTFjJzogJ0cnLCAgJ1xcdTAxMWUnOiAnRycsICdcXHUwMTIwJzogJ0cnLCAnXFx1MDEyMic6ICdHJyxcbiAgJ1xcdTAxMWQnOiAnZycsICAnXFx1MDExZic6ICdnJywgJ1xcdTAxMjEnOiAnZycsICdcXHUwMTIzJzogJ2cnLFxuICAnXFx1MDEyNCc6ICdIJywgICdcXHUwMTI2JzogJ0gnLCAnXFx1MDEyNSc6ICdoJywgJ1xcdTAxMjcnOiAnaCcsXG4gICdcXHUwMTI4JzogJ0knLCAgJ1xcdTAxMmEnOiAnSScsICdcXHUwMTJjJzogJ0knLCAnXFx1MDEyZSc6ICdJJywgJ1xcdTAxMzAnOiAnSScsXG4gICdcXHUwMTI5JzogJ2knLCAgJ1xcdTAxMmInOiAnaScsICdcXHUwMTJkJzogJ2knLCAnXFx1MDEyZic6ICdpJywgJ1xcdTAxMzEnOiAnaScsXG4gICdcXHUwMTM0JzogJ0onLCAgJ1xcdTAxMzUnOiAnaicsXG4gICdcXHUwMTM2JzogJ0snLCAgJ1xcdTAxMzcnOiAnaycsICdcXHUwMTM4JzogJ2snLFxuICAnXFx1MDEzOSc6ICdMJywgICdcXHUwMTNiJzogJ0wnLCAnXFx1MDEzZCc6ICdMJywgJ1xcdTAxM2YnOiAnTCcsICdcXHUwMTQxJzogJ0wnLFxuICAnXFx1MDEzYSc6ICdsJywgICdcXHUwMTNjJzogJ2wnLCAnXFx1MDEzZSc6ICdsJywgJ1xcdTAxNDAnOiAnbCcsICdcXHUwMTQyJzogJ2wnLFxuICAnXFx1MDE0Myc6ICdOJywgICdcXHUwMTQ1JzogJ04nLCAnXFx1MDE0Nyc6ICdOJywgJ1xcdTAxNGEnOiAnTicsXG4gICdcXHUwMTQ0JzogJ24nLCAgJ1xcdTAxNDYnOiAnbicsICdcXHUwMTQ4JzogJ24nLCAnXFx1MDE0Yic6ICduJyxcbiAgJ1xcdTAxNGMnOiAnTycsICAnXFx1MDE0ZSc6ICdPJywgJ1xcdTAxNTAnOiAnTycsXG4gICdcXHUwMTRkJzogJ28nLCAgJ1xcdTAxNGYnOiAnbycsICdcXHUwMTUxJzogJ28nLFxuICAnXFx1MDE1NCc6ICdSJywgICdcXHUwMTU2JzogJ1InLCAnXFx1MDE1OCc6ICdSJyxcbiAgJ1xcdTAxNTUnOiAncicsICAnXFx1MDE1Nyc6ICdyJywgJ1xcdTAxNTknOiAncicsXG4gICdcXHUwMTVhJzogJ1MnLCAgJ1xcdTAxNWMnOiAnUycsICdcXHUwMTVlJzogJ1MnLCAnXFx1MDE2MCc6ICdTJyxcbiAgJ1xcdTAxNWInOiAncycsICAnXFx1MDE1ZCc6ICdzJywgJ1xcdTAxNWYnOiAncycsICdcXHUwMTYxJzogJ3MnLFxuICAnXFx1MDE2Mic6ICdUJywgICdcXHUwMTY0JzogJ1QnLCAnXFx1MDE2Nic6ICdUJyxcbiAgJ1xcdTAxNjMnOiAndCcsICAnXFx1MDE2NSc6ICd0JywgJ1xcdTAxNjcnOiAndCcsXG4gICdcXHUwMTY4JzogJ1UnLCAgJ1xcdTAxNmEnOiAnVScsICdcXHUwMTZjJzogJ1UnLCAnXFx1MDE2ZSc6ICdVJywgJ1xcdTAxNzAnOiAnVScsICdcXHUwMTcyJzogJ1UnLFxuICAnXFx1MDE2OSc6ICd1JywgICdcXHUwMTZiJzogJ3UnLCAnXFx1MDE2ZCc6ICd1JywgJ1xcdTAxNmYnOiAndScsICdcXHUwMTcxJzogJ3UnLCAnXFx1MDE3Myc6ICd1JyxcbiAgJ1xcdTAxNzQnOiAnVycsICAnXFx1MDE3NSc6ICd3JyxcbiAgJ1xcdTAxNzYnOiAnWScsICAnXFx1MDE3Nyc6ICd5JywgJ1xcdTAxNzgnOiAnWScsXG4gICdcXHUwMTc5JzogJ1onLCAgJ1xcdTAxN2InOiAnWicsICdcXHUwMTdkJzogJ1onLFxuICAnXFx1MDE3YSc6ICd6JywgICdcXHUwMTdjJzogJ3onLCAnXFx1MDE3ZSc6ICd6JyxcbiAgJ1xcdTAxMzInOiAnSUonLCAnXFx1MDEzMyc6ICdpaicsXG4gICdcXHUwMTUyJzogJ09lJywgJ1xcdTAxNTMnOiAnb2UnLFxuICAnXFx1MDE0OSc6IFwiJ25cIiwgJ1xcdTAxN2YnOiAncydcbn07XG5cbi8qKlxuICogVXNlZCBieSBgXy5kZWJ1cnJgIHRvIGNvbnZlcnQgTGF0aW4tMSBTdXBwbGVtZW50IGFuZCBMYXRpbiBFeHRlbmRlZC1BXG4gKiBsZXR0ZXJzIHRvIGJhc2ljIExhdGluIGxldHRlcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXR0ZXIgVGhlIG1hdGNoZWQgbGV0dGVyIHRvIGRlYnVyci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGRlYnVycmVkIGxldHRlci5cbiAqL1xudmFyIGRlYnVyckxldHRlciA9IGJhc2VQcm9wZXJ0eU9mKGRlYnVycmVkTGV0dGVycyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVidXJyTGV0dGVyO1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3RMaWtlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgU3ltYm9sYCBwcmltaXRpdmUgb3Igb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgc3ltYm9sLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNTeW1ib2woU3ltYm9sLml0ZXJhdG9yKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3ltYm9sKCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3ltYm9sKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N5bWJvbCcgfHxcbiAgICAoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzeW1ib2xUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3ltYm9sO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpLFxuICAgIGFycmF5TWFwID0gcmVxdWlyZSgnLi9fYXJyYXlNYXAnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDA7XG5cbi8qKiBVc2VkIHRvIGNvbnZlcnQgc3ltYm9scyB0byBwcmltaXRpdmVzIGFuZCBzdHJpbmdzLiAqL1xudmFyIHN5bWJvbFByb3RvID0gU3ltYm9sID8gU3ltYm9sLnByb3RvdHlwZSA6IHVuZGVmaW5lZCxcbiAgICBzeW1ib2xUb1N0cmluZyA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udG9TdHJpbmcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udG9TdHJpbmdgIHdoaWNoIGRvZXNuJ3QgY29udmVydCBudWxsaXNoXG4gKiB2YWx1ZXMgdG8gZW1wdHkgc3RyaW5ncy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIC8vIEV4aXQgZWFybHkgZm9yIHN0cmluZ3MgdG8gYXZvaWQgYSBwZXJmb3JtYW5jZSBoaXQgaW4gc29tZSBlbnZpcm9ubWVudHMuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzQXJyYXkodmFsdWUpKSB7XG4gICAgLy8gUmVjdXJzaXZlbHkgY29udmVydCB2YWx1ZXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICByZXR1cm4gYXJyYXlNYXAodmFsdWUsIGJhc2VUb1N0cmluZykgKyAnJztcbiAgfVxuICBpZiAoaXNTeW1ib2wodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN5bWJvbFRvU3RyaW5nID8gc3ltYm9sVG9TdHJpbmcuY2FsbCh2YWx1ZSkgOiAnJztcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG4iLCJ2YXIgZGVidXJyTGV0dGVyID0gcmVxdWlyZSgnLi9fZGVidXJyTGV0dGVyJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIExhdGluIFVuaWNvZGUgbGV0dGVycyAoZXhjbHVkaW5nIG1hdGhlbWF0aWNhbCBvcGVyYXRvcnMpLiAqL1xudmFyIHJlTGF0aW4gPSAvW1xceGMwLVxceGQ2XFx4ZDgtXFx4ZjZcXHhmOC1cXHhmZlxcdTAxMDAtXFx1MDE3Zl0vZztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNoYXJhY3RlciBjbGFzc2VzLiAqL1xudmFyIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXSc7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBbY29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21iaW5pbmdfRGlhY3JpdGljYWxfTWFya3MpIGFuZFxuICogW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrcyBmb3Igc3ltYm9sc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzX2Zvcl9TeW1ib2xzKS5cbiAqL1xudmFyIHJlQ29tYm9NYXJrID0gUmVnRXhwKHJzQ29tYm8sICdnJyk7XG5cbi8qKlxuICogRGVidXJycyBgc3RyaW5nYCBieSBjb252ZXJ0aW5nXG4gKiBbTGF0aW4tMSBTdXBwbGVtZW50XShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbi0xX1N1cHBsZW1lbnRfKFVuaWNvZGVfYmxvY2spI0NoYXJhY3Rlcl90YWJsZSlcbiAqIGFuZCBbTGF0aW4gRXh0ZW5kZWQtQV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGF0aW5fRXh0ZW5kZWQtQSlcbiAqIGxldHRlcnMgdG8gYmFzaWMgTGF0aW4gbGV0dGVycyBhbmQgcmVtb3ZpbmdcbiAqIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3NdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrcykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gZGVidXJyLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgZGVidXJyZWQgc3RyaW5nLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlYnVycignZMOpasOgIHZ1Jyk7XG4gKiAvLyA9PiAnZGVqYSB2dSdcbiAqL1xuZnVuY3Rpb24gZGVidXJyKHN0cmluZykge1xuICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuICByZXR1cm4gc3RyaW5nICYmIHN0cmluZy5yZXBsYWNlKHJlTGF0aW4sIGRlYnVyckxldHRlcikucmVwbGFjZShyZUNvbWJvTWFyaywgJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYnVycjtcbiIsIi8qKiBVc2VkIHRvIG1hdGNoIHdvcmRzIGNvbXBvc2VkIG9mIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXJzLiAqL1xudmFyIHJlQXNjaWlXb3JkID0gL1teXFx4MDAtXFx4MmZcXHgzYS1cXHg0MFxceDViLVxceDYwXFx4N2ItXFx4N2ZdKy9nO1xuXG4vKipcbiAqIFNwbGl0cyBhbiBBU0NJSSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIGFzY2lpV29yZHMoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcubWF0Y2gocmVBc2NpaVdvcmQpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpV29yZHM7XG4iLCIvKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB0aGF0IG5lZWQgYSBtb3JlIHJvYnVzdCByZWdleHAgdG8gbWF0Y2ggd29yZHMuICovXG52YXIgcmVIYXNVbmljb2RlV29yZCA9IC9bYS16XVtBLVpdfFtBLVpdezJ9W2Etel18WzAtOV1bYS16QS1aXXxbYS16QS1aXVswLTldfFteYS16QS1aMC05IF0vO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBhIHdvcmQgY29tcG9zZWQgb2YgVW5pY29kZSBzeW1ib2xzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhIHdvcmQgaXMgZm91bmQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzVW5pY29kZVdvcmQoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGVXb3JkLnRlc3Qoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNVbmljb2RlV29yZDtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc0RpbmdiYXRSYW5nZSA9ICdcXFxcdTI3MDAtXFxcXHUyN2JmJyxcbiAgICByc0xvd2VyUmFuZ2UgPSAnYS16XFxcXHhkZi1cXFxceGY2XFxcXHhmOC1cXFxceGZmJyxcbiAgICByc01hdGhPcFJhbmdlID0gJ1xcXFx4YWNcXFxceGIxXFxcXHhkN1xcXFx4ZjcnLFxuICAgIHJzTm9uQ2hhclJhbmdlID0gJ1xcXFx4MDAtXFxcXHgyZlxcXFx4M2EtXFxcXHg0MFxcXFx4NWItXFxcXHg2MFxcXFx4N2ItXFxcXHhiZicsXG4gICAgcnNQdW5jdHVhdGlvblJhbmdlID0gJ1xcXFx1MjAwMC1cXFxcdTIwNmYnLFxuICAgIHJzU3BhY2VSYW5nZSA9ICcgXFxcXHRcXFxceDBiXFxcXGZcXFxceGEwXFxcXHVmZWZmXFxcXG5cXFxcclxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1MTY4MFxcXFx1MTgwZVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwYVxcXFx1MjAyZlxcXFx1MjA1ZlxcXFx1MzAwMCcsXG4gICAgcnNVcHBlclJhbmdlID0gJ0EtWlxcXFx4YzAtXFxcXHhkNlxcXFx4ZDgtXFxcXHhkZScsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnLFxuICAgIHJzQnJlYWtSYW5nZSA9IHJzTWF0aE9wUmFuZ2UgKyByc05vbkNoYXJSYW5nZSArIHJzUHVuY3R1YXRpb25SYW5nZSArIHJzU3BhY2VSYW5nZTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xudmFyIHJzQXBvcyA9IFwiWydcXHUyMDE5XVwiLFxuICAgIHJzQnJlYWsgPSAnWycgKyByc0JyZWFrUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJyxcbiAgICByc0RpZ2l0cyA9ICdcXFxcZCsnLFxuICAgIHJzRGluZ2JhdCA9ICdbJyArIHJzRGluZ2JhdFJhbmdlICsgJ10nLFxuICAgIHJzTG93ZXIgPSAnWycgKyByc0xvd2VyUmFuZ2UgKyAnXScsXG4gICAgcnNNaXNjID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyByc0JyZWFrUmFuZ2UgKyByc0RpZ2l0cyArIHJzRGluZ2JhdFJhbmdlICsgcnNMb3dlclJhbmdlICsgcnNVcHBlclJhbmdlICsgJ10nLFxuICAgIHJzRml0eiA9ICdcXFxcdWQ4M2NbXFxcXHVkZmZiLVxcXFx1ZGZmZl0nLFxuICAgIHJzTW9kaWZpZXIgPSAnKD86JyArIHJzQ29tYm8gKyAnfCcgKyByc0ZpdHogKyAnKScsXG4gICAgcnNOb25Bc3RyYWwgPSAnW14nICsgcnNBc3RyYWxSYW5nZSArICddJyxcbiAgICByc1JlZ2lvbmFsID0gJyg/OlxcXFx1ZDgzY1tcXFxcdWRkZTYtXFxcXHVkZGZmXSl7Mn0nLFxuICAgIHJzU3VyclBhaXIgPSAnW1xcXFx1ZDgwMC1cXFxcdWRiZmZdW1xcXFx1ZGMwMC1cXFxcdWRmZmZdJyxcbiAgICByc1VwcGVyID0gJ1snICsgcnNVcHBlclJhbmdlICsgJ10nLFxuICAgIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSByZWdleGVzLiAqL1xudmFyIHJzTWlzY0xvd2VyID0gJyg/OicgKyByc0xvd2VyICsgJ3wnICsgcnNNaXNjICsgJyknLFxuICAgIHJzTWlzY1VwcGVyID0gJyg/OicgKyByc1VwcGVyICsgJ3wnICsgcnNNaXNjICsgJyknLFxuICAgIHJzT3B0Q29udHJMb3dlciA9ICcoPzonICsgcnNBcG9zICsgJyg/OmR8bGx8bXxyZXxzfHR8dmUpKT8nLFxuICAgIHJzT3B0Q29udHJVcHBlciA9ICcoPzonICsgcnNBcG9zICsgJyg/OkR8TEx8TXxSRXxTfFR8VkUpKT8nLFxuICAgIHJlT3B0TW9kID0gcnNNb2RpZmllciArICc/JyxcbiAgICByc09wdFZhciA9ICdbJyArIHJzVmFyUmFuZ2UgKyAnXT8nLFxuICAgIHJzT3B0Sm9pbiA9ICcoPzonICsgcnNaV0ogKyAnKD86JyArIFtyc05vbkFzdHJhbCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNPcHRWYXIgKyByZU9wdE1vZCArICcpKicsXG4gICAgcnNPcmRMb3dlciA9ICdcXFxcZCooPzoxc3R8Mm5kfDNyZHwoPyFbMTIzXSlcXFxcZHRoKSg/PVxcXFxifFtBLVpfXSknLFxuICAgIHJzT3JkVXBwZXIgPSAnXFxcXGQqKD86MVNUfDJORHwzUkR8KD8hWzEyM10pXFxcXGRUSCkoPz1cXFxcYnxbYS16X10pJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNFbW9qaSA9ICcoPzonICsgW3JzRGluZ2JhdCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNTZXE7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGNvbXBsZXggb3IgY29tcG91bmQgd29yZHMuICovXG52YXIgcmVVbmljb2RlV29yZCA9IFJlZ0V4cChbXG4gIHJzVXBwZXIgKyAnPycgKyByc0xvd2VyICsgJysnICsgcnNPcHRDb250ckxvd2VyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciwgJyQnXS5qb2luKCd8JykgKyAnKScsXG4gIHJzTWlzY1VwcGVyICsgJysnICsgcnNPcHRDb250clVwcGVyICsgJyg/PScgKyBbcnNCcmVhaywgcnNVcHBlciArIHJzTWlzY0xvd2VyLCAnJCddLmpvaW4oJ3wnKSArICcpJyxcbiAgcnNVcHBlciArICc/JyArIHJzTWlzY0xvd2VyICsgJysnICsgcnNPcHRDb250ckxvd2VyLFxuICByc1VwcGVyICsgJysnICsgcnNPcHRDb250clVwcGVyLFxuICByc09yZFVwcGVyLFxuICByc09yZExvd2VyLFxuICByc0RpZ2l0cyxcbiAgcnNFbW9qaVxuXS5qb2luKCd8JyksICdnJyk7XG5cbi8qKlxuICogU3BsaXRzIGEgVW5pY29kZSBgc3RyaW5nYCBpbnRvIGFuIGFycmF5IG9mIGl0cyB3b3Jkcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgd29yZHMgb2YgYHN0cmluZ2AuXG4gKi9cbmZ1bmN0aW9uIHVuaWNvZGVXb3JkcyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGVXb3JkKSB8fCBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB1bmljb2RlV29yZHM7XG4iLCJ2YXIgYXNjaWlXb3JkcyA9IHJlcXVpcmUoJy4vX2FzY2lpV29yZHMnKSxcbiAgICBoYXNVbmljb2RlV29yZCA9IHJlcXVpcmUoJy4vX2hhc1VuaWNvZGVXb3JkJyksXG4gICAgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3RvU3RyaW5nJyksXG4gICAgdW5pY29kZVdvcmRzID0gcmVxdWlyZSgnLi9fdW5pY29kZVdvcmRzJyk7XG5cbi8qKlxuICogU3BsaXRzIGBzdHJpbmdgIGludG8gYW4gYXJyYXkgb2YgaXRzIHdvcmRzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge1JlZ0V4cHxzdHJpbmd9IFtwYXR0ZXJuXSBUaGUgcGF0dGVybiB0byBtYXRjaCB3b3Jkcy5cbiAqIEBwYXJhbS0ge09iamVjdH0gW2d1YXJkXSBFbmFibGVzIHVzZSBhcyBhbiBpdGVyYXRlZSBmb3IgbWV0aG9kcyBsaWtlIGBfLm1hcGAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHdvcmRzIG9mIGBzdHJpbmdgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLndvcmRzKCdmcmVkLCBiYXJuZXksICYgcGViYmxlcycpO1xuICogLy8gPT4gWydmcmVkJywgJ2Jhcm5leScsICdwZWJibGVzJ11cbiAqXG4gKiBfLndvcmRzKCdmcmVkLCBiYXJuZXksICYgcGViYmxlcycsIC9bXiwgXSsvZyk7XG4gKiAvLyA9PiBbJ2ZyZWQnLCAnYmFybmV5JywgJyYnLCAncGViYmxlcyddXG4gKi9cbmZ1bmN0aW9uIHdvcmRzKHN0cmluZywgcGF0dGVybiwgZ3VhcmQpIHtcbiAgc3RyaW5nID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgcGF0dGVybiA9IGd1YXJkID8gdW5kZWZpbmVkIDogcGF0dGVybjtcblxuICBpZiAocGF0dGVybiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhhc1VuaWNvZGVXb3JkKHN0cmluZykgPyB1bmljb2RlV29yZHMoc3RyaW5nKSA6IGFzY2lpV29yZHMoc3RyaW5nKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nLm1hdGNoKHBhdHRlcm4pIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdvcmRzO1xuIiwidmFyIGFycmF5UmVkdWNlID0gcmVxdWlyZSgnLi9fYXJyYXlSZWR1Y2UnKSxcbiAgICBkZWJ1cnIgPSByZXF1aXJlKCcuL2RlYnVycicpLFxuICAgIHdvcmRzID0gcmVxdWlyZSgnLi93b3JkcycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBcG9zID0gXCJbJ1xcdTIwMTldXCI7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGFwb3N0cm9waGVzLiAqL1xudmFyIHJlQXBvcyA9IFJlZ0V4cChyc0Fwb3MsICdnJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIGxpa2UgYF8uY2FtZWxDYXNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGZ1bmN0aW9uIHRvIGNvbWJpbmUgZWFjaCB3b3JkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgY29tcG91bmRlciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ29tcG91bmRlcihjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgcmV0dXJuIGFycmF5UmVkdWNlKHdvcmRzKGRlYnVycihzdHJpbmcpLnJlcGxhY2UocmVBcG9zLCAnJykpLCBjYWxsYmFjaywgJycpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNvbXBvdW5kZXI7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnNsaWNlYCB3aXRob3V0IGFuIGl0ZXJhdGVlIGNhbGwgZ3VhcmQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBzbGljZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBzbGljZSBvZiBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG4gIH1cbiAgZW5kID0gZW5kID4gbGVuZ3RoID8gbGVuZ3RoIDogZW5kO1xuICBpZiAoZW5kIDwgMCkge1xuICAgIGVuZCArPSBsZW5ndGg7XG4gIH1cbiAgbGVuZ3RoID0gc3RhcnQgPiBlbmQgPyAwIDogKChlbmQgLSBzdGFydCkgPj4+IDApO1xuICBzdGFydCA+Pj49IDA7XG5cbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGFycmF5W2luZGV4ICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVNsaWNlO1xuIiwidmFyIGJhc2VTbGljZSA9IHJlcXVpcmUoJy4vX2Jhc2VTbGljZScpO1xuXG4vKipcbiAqIENhc3RzIGBhcnJheWAgdG8gYSBzbGljZSBpZiBpdCdzIG5lZWRlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIHN0YXJ0IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtlbmQ9YXJyYXkubGVuZ3RoXSBUaGUgZW5kIHBvc2l0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBjYXN0IHNsaWNlLlxuICovXG5mdW5jdGlvbiBjYXN0U2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiBlbmQ7XG4gIHJldHVybiAoIXN0YXJ0ICYmIGVuZCA+PSBsZW5ndGgpID8gYXJyYXkgOiBiYXNlU2xpY2UoYXJyYXksIHN0YXJ0LCBlbmQpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RTbGljZTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB3aXRoIFt6ZXJvLXdpZHRoIGpvaW5lcnMgb3IgY29kZSBwb2ludHMgZnJvbSB0aGUgYXN0cmFsIHBsYW5lc10oaHR0cDovL2Vldi5lZS9ibG9nLzIwMTUvMDkvMTIvZGFyay1jb3JuZXJzLW9mLXVuaWNvZGUvKS4gKi9cbnZhciByZUhhc1VuaWNvZGUgPSBSZWdFeHAoJ1snICsgcnNaV0ogKyByc0FzdHJhbFJhbmdlICArIHJzQ29tYm9SYW5nZSArIHJzVmFyUmFuZ2UgKyAnXScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBVbmljb2RlIHN5bWJvbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgc3ltYm9sIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1VuaWNvZGUoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGUudGVzdChzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1VuaWNvZGU7XG4iLCIvKipcbiAqIENvbnZlcnRzIGFuIEFTQ0lJIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhc2NpaVRvQXJyYXkoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuc3BsaXQoJycpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzY2lpVG9BcnJheTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc0FzdHJhbCA9ICdbJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNDb21ibyA9ICdbJyArIHJzQ29tYm9SYW5nZSArICddJyxcbiAgICByc0ZpdHogPSAnXFxcXHVkODNjW1xcXFx1ZGZmYi1cXFxcdWRmZmZdJyxcbiAgICByc01vZGlmaWVyID0gJyg/OicgKyByc0NvbWJvICsgJ3wnICsgcnNGaXR6ICsgJyknLFxuICAgIHJzTm9uQXN0cmFsID0gJ1teJyArIHJzQXN0cmFsUmFuZ2UgKyAnXScsXG4gICAgcnNSZWdpb25hbCA9ICcoPzpcXFxcdWQ4M2NbXFxcXHVkZGU2LVxcXFx1ZGRmZl0pezJ9JyxcbiAgICByc1N1cnJQYWlyID0gJ1tcXFxcdWQ4MDAtXFxcXHVkYmZmXVtcXFxcdWRjMDAtXFxcXHVkZmZmXScsXG4gICAgcnNaV0ogPSAnXFxcXHUyMDBkJztcblxuLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIHJlZ2V4ZXMuICovXG52YXIgcmVPcHRNb2QgPSByc01vZGlmaWVyICsgJz8nLFxuICAgIHJzT3B0VmFyID0gJ1snICsgcnNWYXJSYW5nZSArICddPycsXG4gICAgcnNPcHRKb2luID0gJyg/OicgKyByc1pXSiArICcoPzonICsgW3JzTm9uQXN0cmFsLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyXS5qb2luKCd8JykgKyAnKScgKyByc09wdFZhciArIHJlT3B0TW9kICsgJykqJyxcbiAgICByc1NlcSA9IHJzT3B0VmFyICsgcmVPcHRNb2QgKyByc09wdEpvaW4sXG4gICAgcnNTeW1ib2wgPSAnKD86JyArIFtyc05vbkFzdHJhbCArIHJzQ29tYm8gKyAnPycsIHJzQ29tYm8sIHJzUmVnaW9uYWwsIHJzU3VyclBhaXIsIHJzQXN0cmFsXS5qb2luKCd8JykgKyAnKSc7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIFtzdHJpbmcgc3ltYm9sc10oaHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtdW5pY29kZSkuICovXG52YXIgcmVVbmljb2RlID0gUmVnRXhwKHJzRml0eiArICcoPz0nICsgcnNGaXR6ICsgJyl8JyArIHJzU3ltYm9sICsgcnNTZXEsICdnJyk7XG5cbi8qKlxuICogQ29udmVydHMgYSBVbmljb2RlIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiB1bmljb2RlVG9BcnJheShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5tYXRjaChyZVVuaWNvZGUpIHx8IFtdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHVuaWNvZGVUb0FycmF5O1xuIiwidmFyIGFzY2lpVG9BcnJheSA9IHJlcXVpcmUoJy4vX2FzY2lpVG9BcnJheScpLFxuICAgIGhhc1VuaWNvZGUgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlJyksXG4gICAgdW5pY29kZVRvQXJyYXkgPSByZXF1aXJlKCcuL191bmljb2RlVG9BcnJheScpO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGFuIGFycmF5LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgY29udmVydGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb0FycmF5KHN0cmluZykge1xuICByZXR1cm4gaGFzVW5pY29kZShzdHJpbmcpXG4gICAgPyB1bmljb2RlVG9BcnJheShzdHJpbmcpXG4gICAgOiBhc2NpaVRvQXJyYXkoc3RyaW5nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHJpbmdUb0FycmF5O1xuIiwidmFyIGNhc3RTbGljZSA9IHJlcXVpcmUoJy4vX2Nhc3RTbGljZScpLFxuICAgIGhhc1VuaWNvZGUgPSByZXF1aXJlKCcuL19oYXNVbmljb2RlJyksXG4gICAgc3RyaW5nVG9BcnJheSA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvQXJyYXknKSxcbiAgICB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5sb3dlckZpcnN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWUgVGhlIG5hbWUgb2YgdGhlIGBTdHJpbmdgIGNhc2UgbWV0aG9kIHRvIHVzZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGNhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhc2VGaXJzdChtZXRob2ROYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICBzdHJpbmcgPSB0b1N0cmluZyhzdHJpbmcpO1xuXG4gICAgdmFyIHN0clN5bWJvbHMgPSBoYXNVbmljb2RlKHN0cmluZylcbiAgICAgID8gc3RyaW5nVG9BcnJheShzdHJpbmcpXG4gICAgICA6IHVuZGVmaW5lZDtcblxuICAgIHZhciBjaHIgPSBzdHJTeW1ib2xzXG4gICAgICA/IHN0clN5bWJvbHNbMF1cbiAgICAgIDogc3RyaW5nLmNoYXJBdCgwKTtcblxuICAgIHZhciB0cmFpbGluZyA9IHN0clN5bWJvbHNcbiAgICAgID8gY2FzdFNsaWNlKHN0clN5bWJvbHMsIDEpLmpvaW4oJycpXG4gICAgICA6IHN0cmluZy5zbGljZSgxKTtcblxuICAgIHJldHVybiBjaHJbbWV0aG9kTmFtZV0oKSArIHRyYWlsaW5nO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNhc2VGaXJzdDtcbiIsInZhciBjcmVhdGVDYXNlRmlyc3QgPSByZXF1aXJlKCcuL19jcmVhdGVDYXNlRmlyc3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIGBzdHJpbmdgIHRvIHVwcGVyIGNhc2UuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udXBwZXJGaXJzdCgnZnJlZCcpO1xuICogLy8gPT4gJ0ZyZWQnXG4gKlxuICogXy51cHBlckZpcnN0KCdGUkVEJyk7XG4gKiAvLyA9PiAnRlJFRCdcbiAqL1xudmFyIHVwcGVyRmlyc3QgPSBjcmVhdGVDYXNlRmlyc3QoJ3RvVXBwZXJDYXNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gdXBwZXJGaXJzdDtcbiIsInZhciBjcmVhdGVDb21wb3VuZGVyID0gcmVxdWlyZSgnLi9fY3JlYXRlQ29tcG91bmRlcicpLFxuICAgIHVwcGVyRmlyc3QgPSByZXF1aXJlKCcuL3VwcGVyRmlyc3QnKTtcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0b1xuICogW3N0YXJ0IGNhc2VdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xldHRlcl9jYXNlI1N0eWxpc3RpY19vcl9zcGVjaWFsaXNlZF91c2FnZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjEuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHBhcmFtIHtzdHJpbmd9IFtzdHJpbmc9JyddIFRoZSBzdHJpbmcgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0YXJ0IGNhc2VkIHN0cmluZy5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5zdGFydENhc2UoJy0tZm9vLWJhci0tJyk7XG4gKiAvLyA9PiAnRm9vIEJhcidcbiAqXG4gKiBfLnN0YXJ0Q2FzZSgnZm9vQmFyJyk7XG4gKiAvLyA9PiAnRm9vIEJhcidcbiAqXG4gKiBfLnN0YXJ0Q2FzZSgnX19GT09fQkFSX18nKTtcbiAqIC8vID0+ICdGT08gQkFSJ1xuICovXG52YXIgc3RhcnRDYXNlID0gY3JlYXRlQ29tcG91bmRlcihmdW5jdGlvbihyZXN1bHQsIHdvcmQsIGluZGV4KSB7XG4gIHJldHVybiByZXN1bHQgKyAoaW5kZXggPyAnICcgOiAnJykgKyB1cHBlckZpcnN0KHdvcmQpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnRDYXNlO1xuIiwiaW1wb3J0IHsgaTE4biBhcyBJMThuLCBURnVuY3Rpb24sIFRPcHRpb25zIH0gZnJvbSAnaTE4bmV4dCdcbmltcG9ydCBzdGFydENhc2UgZnJvbSAnbG9kYXNoL3N0YXJ0Q2FzZSdcblxuLyoqXG4gKiBAbWVtYmVyb2YgVHJhbnNsYXRlRnVuY3Rpb25zXG4gKiBAYWxpYXMgVHJhbnNsYXRlRnVuY3Rpb25cbiAqL1xuZXhwb3J0IHR5cGUgVHJhbnNsYXRlRnVuY3Rpb24gPSAoXG4gIC8qKlxuICAgKiBrd3kgd2hpY2ggc2hvdWxkIGJlIHRyYW5zbGF0ZWQgaW4gYSBnaXZlbiBuYW1lc3BhY2VcbiAgICovXG4gIGtleTogc3RyaW5nLFxuICAvKipcbiAgICogT3B0aW9uYWwgcmVzb3VyY2VJZCBvciBbVHJhbnNsYXRlIG9wdGlvbnNde0BsaW5rIGh0dHBzOi8vd3d3LmkxOG5leHQuY29tL292ZXJ2aWV3L2NvbmZpZ3VyYXRpb24tb3B0aW9uc31cbiAgICovXG4gIHJlc291cmNlSWQ/OiBzdHJpbmcgfCBUT3B0aW9ucyxcbiAgLyoqXG4gICAqIFtUcmFuc2xhdGUgb3B0aW9uc117QGxpbmsgaHR0cHM6Ly93d3cuaTE4bmV4dC5jb20vb3ZlcnZpZXcvY29uZmlndXJhdGlvbi1vcHRpb25zfVxuICAgKi9cbiAgb3B0aW9ucz86IFRPcHRpb25zXG4pID0+IHN0cmluZ1xuXG4vKipcbiAqIFRyYW5zbGF0ZSBGdW5jdGlvbnMgYXJlIHRoZSBoZWxwZXIgZnVuY3Rpb25zIHdoaWNoIHlvdSBjYW4gdXNlIHRvIHRyYW5zbGF0ZVxuICogeW91ciBhcHBsaWNhdGlvbi5cbiAqXG4gKiBPbiB0aGUgZnJvbnRlZCB0aGV5IGNhbiBiZSB1c2VkIHdpdGgge0BsaW5rIHVzZVRyYW5zbGF0aW9ufSBob29rLiBPbiB0aGUgYmFja2VuZFxuICogdGhleSBhcmUgaW5qZWN0ZWQgdG8gYW55IHtAbGluayBBZG1pbkJyb30gaW5zdGFuY2UgYW5kIHtAbGluayBBY3Rpb25Db250ZXh0fS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGVGdW5jdGlvbnMge1xuICAvKipcbiAgICogc2hvcnRjdXQgZm9yIEkxOG4udHJhbnNsYXRlIGZ1bmN0aW9uLlxuICAgKiBAc2VlIGh0dHBzOi8vd3d3LmkxOG5leHQuY29tL292ZXJ2aWV3L2FwaSN0XG4gICAqL1xuICB0OiBURnVuY3Rpb247XG4gIC8qKlxuICAgKiBJMThuLnRyYW5zbGF0ZSBmdW5jdGlvbi5cbiAgICogQHNlZSBodHRwczovL3d3dy5pMThuZXh0LmNvbS9vdmVydmlldy9hcGkjdFxuICAgKi9cbiAgdHJhbnNsYXRlOiBURnVuY3Rpb247XG4gIC8qKlxuICAgKiBTaG9ydGN1dCBmb3Ige0BsaW5rIFRyYW5zbGF0ZUZ1bmN0aW9ucyN0cmFuc2xhdGVBY3Rpb259XG4gICAqL1xuICB0YTogVHJhbnNsYXRlRnVuY3Rpb247XG4gIC8qKlxuICAgKiBUcmFuc2xhdGVzIGFsbCBbYWN0aW9uc117QGxpbmsgQWN0aW9ufSwgdG8gYmUgbW9yZSBzcGVjaWZpYyAtIHRoZWlyIGxhYmVscy5cbiAgICogQnkgZGVmYXVsdCwgaXQgbG9va3MgZm9yIGEgW3RyYW5zbGF0aW9uIGtleV17QGxpbmsgTG9jYWxlVHJhbnNsYXRpb25zfSBpblxuICAgKiBgcmVzb3VyY2Uue3Jlc291cmNlSWR9LmFjdGlvbnMue2FjdGlvbk5hbWV9YCwgd2hlbiBpdCBkb2Vzbid0IGZpbmRcbiAgICogdGhhdCwgdGhlIGxvb2t1cCBpcyBtb3ZlZCB0byBgYWN0aW9ucy57YWN0aW9uTmFtZX1gLlxuICAgKiBGaW5hbGx5LCB3aGVuIHRoYXQgYWxzbyBmYWlscywgaXQgcmV0dXJucyBzdGFydENhc2Ugb2YgdGhlIGFjdGlvbiBuYW1lLlxuICAgKi9cbiAgdHJhbnNsYXRlQWN0aW9uOiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFNob3J0Y3V0IGZvciB7QGxpbmsgVHJhbnNsYXRlRnVuY3Rpb25zI3RyYW5zbGF0ZUJ1dHRvbn1cbiAgICovXG4gIHRiOiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFRyYW5zbGF0ZXMgYWxsIGJ1dHRvbnMuXG4gICAqIEJ5IGRlZmF1bHQsIGl0IGxvb2tzIGZvciBhIFt0cmFuc2xhdGlvbiBrZXlde0BsaW5rIExvY2FsZVRyYW5zbGF0aW9uc30gaW5cbiAgICogYHJlc291cmNlLntyZXNvdXJjZUlkfS5idXR0b25zLnthY3Rpb25OYW1lfWAsIHdoZW4gaXQgZG9lc24ndCBmaW5kXG4gICAqIHRoYXQsIHRoZSBsb29rdXAgaXMgbW92ZWQgdG8gYGJ1dHRvbnMue2FjdGlvbk5hbWV9YC5cbiAgICogRmluYWxseSwgd2hlbiB0aGF0IGFsc28gZmFpbHMsIGl0IHJldHVybnMgc3RhcnRDYXNlIG9mIHRoZSBnaXZlbiBidXR0b24gbmFtZS5cbiAgICovXG4gIHRyYW5zbGF0ZUJ1dHRvbjogVHJhbnNsYXRlRnVuY3Rpb247XG4gIC8qKlxuICAgKiBTaG9ydGN1dCBmb3Ige0BsaW5rIFRyYW5zbGF0ZUZ1bmN0aW9ucyN0cmFuc2xhdGVMYWJlbH1cbiAgICovXG4gIHRsOiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFRyYW5zbGF0ZXMgYWxsIGxhYmVscy4gTW9zdCBvZiBhbGwgYWxsIHJlc291cmNlIG5hbWVzIGFyZSB0cmVhdGVkIGFzIGxhYmVscy5cbiAgICogQWxzbywgbGFiZWxzIGFyZSB0ZXh0cyBpbiB0aGUgdXNlciBpbnRlcmZhY2Ugd2hpY2ggY2Fubm90IGJlIHJlY29nbml6ZWRcbiAgICogYXMgYW55IG90aGVyIHR5cGUuXG4gICAqIEJ5IGRlZmF1bHQsIGl0IGxvb2tzIGZvciBhIFt0cmFuc2xhdGlvbiBrZXlde0BsaW5rIExvY2FsZVRyYW5zbGF0aW9uc30gaW5cbiAgICogYHJlc291cmNlLntyZXNvdXJjZUlkfS5sYWJlbHMue2FjdGlvbk5hbWV9YCwgd2hlbiBpdCBkb2Vzbid0IGZpbmRcbiAgICogdGhhdCwgdGhlIGxvb2t1cCBpcyBtb3ZlZCB0byBgbGFiZWxzLnthY3Rpb25OYW1lfWAuXG4gICAqIEZpbmFsbHksIHdoZW4gdGhhdCBhbHNvIGZhaWxzLCBpdCByZXR1cm5zIHN0YXJ0Q2FzZSBvZiB0aGUgZ2l2ZW4gbGFiZWwuXG4gICAqL1xuICB0cmFuc2xhdGVMYWJlbDogVHJhbnNsYXRlRnVuY3Rpb247XG4gIC8qKlxuICAgKiBTaG9ydGN1dCBmb3Ige0BsaW5rIFRyYW5zbGF0ZUZ1bmN0aW9ucyN0cmFuc2xhdGVQcm9wZXJ0eX1cbiAgICovXG4gIHRwOiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFRyYW5zbGF0ZXMgYWxsIHRoZSBwcm9wZXJ0eSBuYW1lcy5cbiAgICogQnkgZGVmYXVsdCwgaXQgbG9va3MgZm9yIGEgW3RyYW5zbGF0aW9uIGtleV17QGxpbmsgTG9jYWxlVHJhbnNsYXRpb25zfSBpblxuICAgKiBgcmVzb3VyY2Uue3Jlc291cmNlSWR9LnByb3BlcnRpZXMue3Byb3BlcnR5UGF0aH1gLCB3aGVuIGl0IGRvZXNuJ3QgZmluZFxuICAgKiB0aGF0LCB0aGUgbG9va3VwIGlzIG1vdmVkIHRvIGBwcm9wZXJ0aWVzLntwcm9wZXJ0eVBhdGh9YC4gV2hlbiB0aGF0IGZhaWxzLFxuICAgKiBpdCByZXR1cm5zIHN0YXJ0Q2FzZSBvZiB0aGUgZ2l2ZW4gcHJvcGVydHkgbmFtZS5cbiAgICpcbiAgICogV2hhdCBpcyBpbXBvcnRhbnQgaGVyZSBpcyB0aGF0IHlvdSBjYW4gcHV0IG5lc3RlZCBwcm9wZXJ0eSBhcyB3ZWxsLCBJbiB0aGF0XG4gICAqIGNhc2UgeW91IGhhdmUgdG8gcGFzcyBkb3R0ZWQgcGF0aDpcbiAgICpcbiAgICogYGBgamF2YXNjcmlwdFxuICAgKiB7XG4gICAqICAgcHJvcGVydGllczoge1xuICAgKiAgICAgIHBhcmVudDogJ3BhcmVudCBwcm9wZXJ0eScsXG4gICAqICAgICAgJ3BhcmVudC5uZXN0ZWQnOiAnbmVzdGVkIHByb3BlcnR5J1xuICAgKiAgIH1cbiAgICogfVxuICAgKiBgYGBcbiAgICovXG4gIHRyYW5zbGF0ZVByb3BlcnR5OiBUcmFuc2xhdGVGdW5jdGlvbjtcbiAgLyoqXG4gICAqIFNob3J0Y3V0IGZvciB7QGxpbmsgVHJhbnNsYXRlRnVuY3Rpb25zI3RyYW5zbGF0ZU1lc3NhZ2V9XG4gICAqL1xuICB0bTogVHJhbnNsYXRlRnVuY3Rpb247XG4gIC8qKlxuICAgKiBUcmFuc2xhdGVzIGFsbCB0aGUgbWVzc2FnZXMgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICAgKiBCeSBkZWZhdWx0LCBpdCBsb29rcyBmb3IgYSBbdHJhbnNsYXRpb24ga2V5XXtAbGluayBMb2NhbGVUcmFuc2xhdGlvbnN9IGluXG4gICAqIGByZXNvdXJjZS57cmVzb3VyY2VJZH0ubWVzc2FnZXMue21lc3NhZ2VOYW1lfWAsIHdoZW4gaXQgZG9lc24ndCBmaW5kXG4gICAqIHRoYXQsIHRoZSBsb29rdXAgaXMgbW92ZWQgdG8gYG1lc3NhZ2VzLnttZXNzYWdlTmFtZX1gLlxuICAgKiBGaW5hbGx5LCB3aGVuIHRoYXQgYWxzbyBmYWlscywgaXQgcmV0dXJucyBzdGFydENhc2Ugb2YgdGhlIGdpdmVuIG1lc3NhZ2UgbmFtZS5cbiAgICovXG4gIHRyYW5zbGF0ZU1lc3NhZ2U6IFRyYW5zbGF0ZUZ1bmN0aW9uO1xufVxuXG5leHBvcnQgY29uc3QgZm9ybWF0TmFtZSA9IChuYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4gbmFtZS5zcGxpdCgnLicpLmpvaW4oJyYjNDY7JylcblxuY29uc3QgdHJhbnNsYXRlID0gKFxuICBpMThuOiBJMThuLFxuICBrZXk6IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nLFxuICByZXNvdXJjZUlkPzogc3RyaW5nIHwgVE9wdGlvbnMsXG4gIG9wdGlvbnM/OiBUT3B0aW9ucyxcbik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHJlYWxPcHRpb25zOiBUT3B0aW9ucyA9ICh0eXBlb2YgcmVzb3VyY2VJZCA9PT0gJ3N0cmluZycgPyBvcHRpb25zIDogcmVzb3VyY2VJZCkgfHwge31cbiAgY29uc3QgZm9ybWF0dGVkTmFtZSA9IGZvcm1hdE5hbWUobmFtZSlcbiAgbGV0IGtleXMgPSBbYCR7a2V5fS4ke2Zvcm1hdHRlZE5hbWV9YF1cbiAgaWYgKHJlc291cmNlSWQpIHtcbiAgICBrZXlzID0gW2ByZXNvdXJjZXMuJHtyZXNvdXJjZUlkfS4ke2tleX0uJHtmb3JtYXR0ZWROYW1lfWAsIC4uLmtleXNdXG4gIH1cbiAgaWYgKGkxOG4uZXhpc3RzKGtleXMpKSB7XG4gICAgcmV0dXJuIGkxOG4udChrZXlzLCByZWFsT3B0aW9ucylcbiAgfVxuICByZXR1cm4gcmVhbE9wdGlvbnMuZGVmYXVsdFZhbHVlID8/IHN0YXJ0Q2FzZShuYW1lKVxufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlRnVuY3Rpb25zID0gKGkxOG46IEkxOG4pOiBUcmFuc2xhdGVGdW5jdGlvbnMgPT4ge1xuICBjb25zdCB0cmFuc2xhdGVBY3Rpb246IFRyYW5zbGF0ZUZ1bmN0aW9uID0gKGFjdGlvbk5hbWUsIHJlc291cmNlSWQsIG9wdGlvbnMpID0+IChcbiAgICB0cmFuc2xhdGUoaTE4biwgJ2FjdGlvbnMnLCBhY3Rpb25OYW1lIGFzIHN0cmluZywgcmVzb3VyY2VJZCwgb3B0aW9ucylcbiAgKVxuXG4gIGNvbnN0IHRyYW5zbGF0ZUJ1dHRvbjogVHJhbnNsYXRlRnVuY3Rpb24gPSAoXG4gICAgYnV0dG9uTGFiZWwsIHJlc291cmNlSWQsIG9wdGlvbnMsXG4gICkgPT4gKFxuICAgIHRyYW5zbGF0ZShpMThuLCAnYnV0dG9ucycsIGJ1dHRvbkxhYmVsLCByZXNvdXJjZUlkLCBvcHRpb25zKVxuICApXG5cbiAgY29uc3QgdHJhbnNsYXRlTGFiZWw6IFRyYW5zbGF0ZUZ1bmN0aW9uID0gKGxhYmVsLCByZXNvdXJjZUlkLCBvcHRpb25zKSA9PiAoXG4gICAgdHJhbnNsYXRlKGkxOG4sICdsYWJlbHMnLCBsYWJlbCBhcyBzdHJpbmcsIHJlc291cmNlSWQsIG9wdGlvbnMpXG4gIClcblxuICBjb25zdCB0cmFuc2xhdGVQcm9wZXJ0eTogVHJhbnNsYXRlRnVuY3Rpb24gPSAocHJvcGVydHlOYW1lLCByZXNvdXJjZUlkLCBvcHRpb25zKSA9PiAoXG4gICAgdHJhbnNsYXRlKGkxOG4sICdwcm9wZXJ0aWVzJywgcHJvcGVydHlOYW1lLCByZXNvdXJjZUlkLCBvcHRpb25zKVxuICApXG5cbiAgY29uc3QgdHJhbnNsYXRlTWVzc2FnZTogVHJhbnNsYXRlRnVuY3Rpb24gPSAobWVzc2FnZU5hbWUsIHJlc291cmNlSWQsIG9wdGlvbnMpID0+IChcbiAgICB0cmFuc2xhdGUoaTE4biwgJ21lc3NhZ2VzJywgbWVzc2FnZU5hbWUsIHJlc291cmNlSWQsIG9wdGlvbnMpXG4gIClcblxuICByZXR1cm4ge1xuICAgIHRyYW5zbGF0ZUFjdGlvbixcbiAgICB0YTogdHJhbnNsYXRlQWN0aW9uLFxuICAgIHRyYW5zbGF0ZUJ1dHRvbixcbiAgICB0YjogdHJhbnNsYXRlQnV0dG9uLFxuICAgIHRyYW5zbGF0ZUxhYmVsLFxuICAgIHRsOiB0cmFuc2xhdGVMYWJlbCxcbiAgICB0cmFuc2xhdGVQcm9wZXJ0eSxcbiAgICB0cDogdHJhbnNsYXRlUHJvcGVydHksXG4gICAgdHJhbnNsYXRlTWVzc2FnZSxcbiAgICB0bTogdHJhbnNsYXRlTWVzc2FnZSxcbiAgICB0OiBpMThuLnQsXG4gICAgdHJhbnNsYXRlOiBpMThuLnQsXG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIHVzZVRyYW5zbGF0aW9uIGFzIG9yaWdpbmFsVXNlVHJhbnNsYXRpb24sXG59IGZyb20gJ3JlYWN0LWkxOG5leHQnXG5pbXBvcnQgeyBURnVuY3Rpb24sIGkxOG4gfSBmcm9tICdpMThuZXh0J1xuXG5pbXBvcnQgeyBUcmFuc2xhdGVGdW5jdGlvbnMsIGNyZWF0ZUZ1bmN0aW9ucyB9IGZyb20gJy4uLy4uL3V0aWxzL3RyYW5zbGF0ZS1mdW5jdGlvbnMuZmFjdG9yeSdcblxuLyoqXG4gKiBFeHRlbmRzIHtAbGluayBUcmFuc2xhdGVGdW5jdGlvbnN9LiBBcGFydCBmcm9tIHRoYXQgaXQgYWxzbyByZXR1cm5zIGFsbCB0aGUgcHJvcGVydGllc1xuICogZGVmaW5lZCBiZWxvdy5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBpbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ2FkbWluLWJybydcbiAqXG4gKiBjb25zdCBNeUNvbXBvbmVudCA9ICgpID0+IHtcbiAqICAgY29uc3QgeyB0cmFuc2xhdGVCdXR0b24gfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAqXG4gKiAgIHJldHVybiAoXG4gKiAgICAgPEJveD5cbiAqICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBvbkNsaWNrPXsuLi59Pnt0cmFuc2xhdGVCdXR0b24oJ3NhdmUnKX08QnV0dG9uPlxuICogICAgIDwvQm94PlxuICogICApXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAbWVtYmVyb2YgdXNlVHJhbnNsYXRpb25cbiAqIEBhbGlhcyBVc2VUcmFuc2xhdGlvblJlc3BvbnNlXG4gKlxuICogQHByb3BlcnR5IHtUcmFuc2xhdGVGdW5jdGlvbn0gLi4uIEFsbCBmdW5jdGlvbnMgZGVmaW5lZCBpbiB7QGxpbmsgVHJhbnNsYXRlRnVuY3Rpb25zfVxuICovXG5leHBvcnQgdHlwZSBVc2VUcmFuc2xhdGlvblJlc3BvbnNlID0gVHJhbnNsYXRlRnVuY3Rpb25zICYge1xuICB0OiBURnVuY3Rpb247XG4gIC8qKlxuICAgKiBDdXJyZW50IGkxOG4gaW5zdGFuY2UuXG4gICAqL1xuICBpMThuOiBpMThuO1xuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIHRyYW5zbGF0aW9uIHN5c3RlbSBpcyByZWFkeS4gSW4gQWRtaW5Ccm8gaXQgaXMgYWx3YXlzIHJlYWR5IDopLlxuICAgKi9cbiAgcmVhZHk6IGJvb2xlYW47XG59XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogRXh0ZW5kcyB0aGUgdXNlVHJhbnNsYXRpb24gaG9vayBmcm9tIHJlYWN0LWkxOG5leHQgbGlicmFyeS5cbiAqXG4gKiBSZXR1cm5zIGFsbCB0aGUge0BsaW5rIFRyYW5zbGF0ZUZ1bmN0aW9uc30gKyBtZXRob2RzIHJldHVybmVkIGJ5IHRoZSBvcmlnaW5hbFxuICogdXNlVHJhbnNsYXRpb24gbWV0aG9kIGZyb20gcmVhY3QtaTE4bmV4dCBsaWtlOiBgaTE4bmAgaW5zdGFuY2UgYW5kIGByZWFkeWAgZmxhZy5cbiAqXG4gKiBAY2xhc3NcbiAqIEBzdWJjYXRlZ29yeSBIb29rc1xuICogQGJ1bmRsZVxuICogQGhpZGVjb25zdHJ1Y3RvclxuICogQHJldHVybnMge1VzZVRyYW5zbGF0aW9uUmVzcG9uc2V9XG4gKi9cbmV4cG9ydCBjb25zdCB1c2VUcmFuc2xhdGlvbiA9ICgpOiBVc2VUcmFuc2xhdGlvblJlc3BvbnNlID0+IHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNoYWRvd1xuICBjb25zdCB7IGkxOG4sIC4uLnJlc3QgfSA9IG9yaWdpbmFsVXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCB0cmFuc2xhdGVGdW5jdGlvbnMgPSBjcmVhdGVGdW5jdGlvbnMoaTE4bilcblxuICByZXR1cm4ge1xuICAgIC4uLnJlc3QsXG4gICAgaTE4bixcbiAgICAuLi50cmFuc2xhdGVGdW5jdGlvbnMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlVHJhbnNsYXRpb25cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5hdmlnYXRpb24sIE5hdmlnYXRpb25FbGVtZW50UHJvcHMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFZpZXdIZWxwZXJzIGZyb20gJy4uLy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlLXRyYW5zbGF0aW9uJ1xuaW1wb3J0IHsgUmVkdXhTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3N0b3JlJ1xuXG50eXBlIFByb3BzID0ge1xuICBwYWdlcz86IFJlZHV4U3RhdGVbJ3BhZ2VzJ107XG59XG5cbmNvbnN0IGggPSBuZXcgVmlld0hlbHBlcnMoKVxuXG5jb25zdCBTaWRlYmFyUGFnZXM6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHBhZ2VzIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgdHJhbnNsYXRlTGFiZWwgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcblxuICBpZiAoIXBhZ2VzIHx8ICFwYWdlcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gKDw+PC8+KVxuICB9XG5cbiAgY29uc3QgaXNBY3RpdmUgPSAocGFnZSk6IGJvb2xlYW4gPT4gKFxuICAgICEhbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goYC9wYWdlcy8ke3BhZ2UubmFtZX1gKVxuICApXG5cbiAgY29uc3QgZWxlbWVudHM6IEFycmF5PE5hdmlnYXRpb25FbGVtZW50UHJvcHM+ID0gcGFnZXMubWFwKHBhZ2UgPT4gKHtcbiAgICBpZDogcGFnZS5uYW1lLFxuICAgIGxhYmVsOiBwYWdlLm5hbWUsXG4gICAgaXNTZWxlY3RlZDogaXNBY3RpdmUocGFnZSksXG4gICAgaWNvbjogcGFnZS5pY29uLFxuICAgIGhyZWY6IGgucGFnZVVybChwYWdlLm5hbWUpLFxuICAgIG9uQ2xpY2s6IChldmVudCwgZWxlbWVudCk6IHZvaWQgPT4ge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgaWYgKGVsZW1lbnQuaHJlZikge1xuICAgICAgICBoaXN0b3J5LnB1c2goZWxlbWVudC5ocmVmKVxuICAgICAgfVxuICAgIH0sXG4gIH0pKVxuXG4gIHJldHVybiAoXG4gICAgPE5hdmlnYXRpb25cbiAgICAgIGxhYmVsPXt0cmFuc2xhdGVMYWJlbCgncGFnZXMnKX1cbiAgICAgIGVsZW1lbnRzPXtlbGVtZW50c31cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZGViYXJQYWdlc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQm94LCBTb2Z0d2FyZUJyb3RoZXJzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgYWxsb3dPdmVycmlkZSBmcm9tICcuLi8uLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUnXG5cbmNvbnN0IFNpZGViYXJGb290ZXI6IFJlYWN0LkZDID0gKCkgPT4gKFxuICA8Qm94IG10PVwibGdcIj5cbiAgICA8U29mdHdhcmVCcm90aGVycyAvPlxuICA8L0JveD5cbilcblxuZXhwb3J0IGRlZmF1bHQgYWxsb3dPdmVycmlkZShTaWRlYmFyRm9vdGVyLCAnU2lkZWJhckZvb3RlcicpXG4iLCJpbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXNwb25zZSwgQXhpb3NJbnN0YW5jZSwgQXhpb3NSZXF1ZXN0Q29uZmlnIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQge1xuICBSZXNvdXJjZUFjdGlvblBhcmFtcyxcbiAgQnVsa0FjdGlvblBhcmFtcyxcbiAgUmVjb3JkQWN0aW9uUGFyYW1zLFxuICBBY3Rpb25QYXJhbXMsXG59IGZyb20gJy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcblxuLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgUmVjb3JkQWN0aW9uUmVzcG9uc2UsIEFjdGlvblJlc3BvbnNlLCBCdWxrQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi9iYWNrZW5kL2FjdGlvbnMvYWN0aW9uLmludGVyZmFjZSdcblxubGV0IGdsb2JhbEFueTogYW55ID0ge31cblxudHJ5IHtcbiAgZ2xvYmFsQW55ID0gd2luZG93XG59IGNhdGNoIChlcnJvcikge1xuICBpZiAoZXJyb3IubWVzc2FnZSAhPT0gJ3dpbmRvdyBpcyBub3QgZGVmaW5lZCcpIHtcbiAgICB0aHJvdyBlcnJvclxuICB9IGVsc2Uge1xuICAgIGdsb2JhbEFueSA9IHsgaXNPblNlcnZlcjogdHJ1ZSB9XG4gIH1cbn1cblxuLyoqXG4gKiBUeXBlIG9mIGFuIFtheGlvcyByZXF1ZXN0XXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvYmxvYi9tYXN0ZXIvaW5kZXguZC50cyNMNDN9XG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gQXhpb3NSZXF1ZXN0Q29uZmlnXG4gKiBAYWxpYXMgQXhpb3NSZXF1ZXN0Q29uZmlnXG4gKiBAbWVtYmVyb2YgQXBpQ2xpZW50XG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvcy9ibG9iL21hc3Rlci9pbmRleC5kLnRzI0w0M1xuICovXG5cbmNvbnN0IGNoZWNrUmVzcG9uc2UgPSAocmVzcG9uc2U6IEF4aW9zUmVzcG9uc2UpOiB2b2lkID0+IHtcbiAgaWYgKGdsb2JhbEFueS5pc09uU2VydmVyKSB7IHJldHVybiB9XG4gIGNvbnN0IGxvZ2luVXJsID0gW2dsb2JhbEFueS5sb2NhdGlvbi5vcmlnaW4sIGdsb2JhbEFueS5SRURVWF9TVEFURS5wYXRocy5sb2dpblBhdGhdLmpvaW4oJycpXG4gIC8vIGlmIHJlc3BvbnNlIGhhcyByZWRpcmVjdCB0byBsb2dpblVybFxuICBpZiAocmVzcG9uc2UucmVxdWVzdC5yZXNwb25zZVVSTFxuICAgICAgJiYgcmVzcG9uc2UucmVxdWVzdC5yZXNwb25zZVVSTC5tYXRjaChsb2dpblVybClcbiAgKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgYWxlcnQoJ1lvdXIgc2Vzc2lvbiBleHBpcmVkLiBZb3Ugd2lsbCBiZSByZWRpcmVjdGVkIHRvIGxvZ2luIHNjcmVlbicpXG4gICAgZ2xvYmFsQW55LmxvY2F0aW9uLmFzc2lnbihsb2dpblVybClcbiAgfVxufVxuXG4vKipcbiAqIEV4dGVuZHMge0BsaW5rIEF4aW9zUmVxdWVzdENvbmZpZ31cbiAqXG4gKiBAYWxpYXMgQWN0aW9uQVBJUGFyYW1zXG4gKiBAbWVtYmVyb2YgQXBpQ2xpZW50XG4gKiBAcHJvcGVydHkge2FueX0gICAuLi4gICAgYW55IHByb3BlcnR5IHN1cHBvcnRlZCBieSB7QGxpbmsgQXhpb3NSZXF1ZXN0Q29uZmlnfVxuICovXG5leHBvcnQgdHlwZSBBY3Rpb25BUElQYXJhbXMgPSBBeGlvc1JlcXVlc3RDb25maWcgJiBBY3Rpb25QYXJhbXNcblxuLyoqXG4gKiBFeHRlbmRzIHtAbGluayBBY3Rpb25BUElQYXJhbXN9XG4gKlxuICogQGFsaWFzIFJlc291cmNlQWN0aW9uQVBJUGFyYW1zXG4gKiBAbWVtYmVyb2YgQXBpQ2xpZW50XG4gKiBAcHJvcGVydHkge2FueX0gICAuLi4gICAgYW55IHByb3BlcnR5IHN1cHBvcnRlZCBieSB7QGxpbmsgQXhpb3NSZXF1ZXN0Q29uZmlnfVxuICovXG5leHBvcnQgdHlwZSBSZXNvdXJjZUFjdGlvbkFQSVBhcmFtcyA9IEF4aW9zUmVxdWVzdENvbmZpZyAmIFJlc291cmNlQWN0aW9uUGFyYW1zICYge1xuICBxdWVyeT86IHN0cmluZztcbn1cbi8qKlxuICogRXh0ZW5kcyB7QGxpbmsgQWN0aW9uQVBJUGFyYW1zfVxuICpcbiAqIEBhbGlhcyBSZWNvcmRBY3Rpb25BUElQYXJhbXNcbiAqIEBtZW1iZXJvZiBBcGlDbGllbnRcbiAqIEBwcm9wZXJ0eSB7YW55fSAgIC4uLiAgICBhbnkgcHJvcGVydHkgc3VwcG9ydGVkIGJ5IHtAbGluayBBY3Rpb25BUElQYXJhbXN9XG4gKi9cbmV4cG9ydCB0eXBlIFJlY29yZEFjdGlvbkFQSVBhcmFtcyA9IEF4aW9zUmVxdWVzdENvbmZpZyAmIFJlY29yZEFjdGlvblBhcmFtc1xuXG4vKipcbiAqIEV4dGVuZHMge0BsaW5rIEFjdGlvbkFQSVBhcmFtc31cbiAqXG4gKiBAYWxpYXMgQnVsa0FjdGlvbkFQSVBhcmFtc1xuICogQG1lbWJlcm9mIEFwaUNsaWVudFxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MvYmxvYi9tYXN0ZXIvaW5kZXguZC50cyNMNDNcbiAqIEBwcm9wZXJ0eSB7YW55fSAgIC4uLiAgICBhbnkgcHJvcGVydHkgc3VwcG9ydGVkIGJ5IHtAbGluayBBY3Rpb25BUElQYXJhbXN9XG4gKi9cbmV4cG9ydCB0eXBlIEJ1bGtBY3Rpb25BUElQYXJhbXMgPSBBeGlvc1JlcXVlc3RDb25maWcgJiBCdWxrQWN0aW9uUGFyYW1zXG5cblxuLyoqXG4gKiBFeHRlbmRzIHtAbGluayBBeGlvc1JlcXVlc3RDb25maWd9XG4gKlxuICogQGFsaWFzIEdldFBhZ2VBUElQYXJhbXNcbiAqIEBtZW1iZXJvZiBBcGlDbGllbnRcbiAqIEBwcm9wZXJ0eSB7YW55fSAgIC4uLiAgICBhbnkgcHJvcGVydHkgc3VwcG9ydGVkIGJ5IHtAbGluayBBeGlvc1JlcXVlc3RDb25maWd9XG4gKi9cbmV4cG9ydCB0eXBlIEdldFBhZ2VBUElQYXJhbXMgPSBBeGlvc1JlcXVlc3RDb25maWcgJiB7XG4gIC8qKlxuICAgKiBVbmlxdWUgcGFnZSBuYW1lXG4gICAqL1xuICBwYWdlTmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIENsaWVudCB3aGljaCBhY2Nlc3MgdGhlIGFkbWluIEFQSS5cbiAqIFVzZSBpdCB0byBmZXRjaCBkYXRhIGZyb20gYXV0byBnZW5lcmF0ZWQgQWRtaW5Ccm8gQVBJLlxuICpcbiAqIEluIHRoZSBiYWNrZW5kIGl0IHVzZXMgW2F4aW9zXShodHRwczovL2dpdGh1Yi5jb20vYXhpb3MvYXhpb3MpIGNsaWVudFxuICogbGlicmFyeS5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IEFwaUNsaWVudCB9IGZyb20gJ2FkbWluLWJybydcbiAqXG4gKiBjb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcbiAqIC8vIGZldGNoaW5nIGFsbCByZWNvcmRzXG4gKiBhcGkucmVzb3VyY2VBY3Rpb24oeyByZXNvdXJjZUlkOiAnQ29tbWVudHMnLCBhY3Rpb25OYW1lOiAnbGlzdCcgfSkudGhlbihyZXN1bHRzID0+IHsuLi59KVxuICogYGBgXG4gKiBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9heGlvcy9heGlvc1xuICogQGhpZGVjb25zdHJ1Y3RvclxuICovXG5jbGFzcyBBcGlDbGllbnQge1xuICBwcml2YXRlIGJhc2VVUkw6IHN0cmluZ1xuXG4gIHByaXZhdGUgY2xpZW50OiBBeGlvc0luc3RhbmNlXG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5iYXNlVVJMID0gQXBpQ2xpZW50LmdldEJhc2VVcmwoKVxuICAgIHRoaXMuY2xpZW50ID0gYXhpb3MuY3JlYXRlKHtcbiAgICAgIGJhc2VVUkw6IHRoaXMuYmFzZVVSTCxcbiAgICB9KVxuICB9XG5cbiAgc3RhdGljIGdldEJhc2VVcmwoKTogc3RyaW5nIHtcbiAgICBpZiAoZ2xvYmFsQW55LmlzT25TZXJ2ZXIpIHsgcmV0dXJuICcnIH1cbiAgICByZXR1cm4gW2dsb2JhbEFueS5sb2NhdGlvbi5vcmlnaW4sIGdsb2JhbEFueS5SRURVWF9TVEFURT8ucGF0aHMucm9vdFBhdGhdLmpvaW4oJycpXG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGJ5IHF1ZXJ5IHN0cmluZyBmb3IgcmVjb3JkcyBpbiBhIGdpdmVuIHJlc291cmNlLlxuICAgKlxuICAgKiBAcGFyYW0gICB7T2JqZWN0fSAgb3B0aW9uc1xuICAgKiBAcGFyYW0gICB7U3RyaW5nfSAgb3B0aW9ucy5yZXNvdXJjZUlkICBpZCBvZiBhIHtAbGluayBSZXNvdXJjZUpTT059XG4gICAqIEBwYXJhbSAgIHtTdHJpbmd9ICBvcHRpb25zLnF1ZXJ5ICAgICAgIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcmV0dXJuICB7UHJvbWlzZTxTZWFyY2hSZXNwb25zZT59XG4gICAqL1xuICBhc3luYyBzZWFyY2hSZWNvcmRzKHsgcmVzb3VyY2VJZCwgcXVlcnkgfToge1xuICAgIHJlc291cmNlSWQ6IHN0cmluZztcbiAgICBxdWVyeTogc3RyaW5nO1xuICB9KTogUHJvbWlzZTxBcnJheTxSZWNvcmRKU09OPj4ge1xuICAgIGlmIChnbG9iYWxBbnkuaXNPblNlcnZlcikgeyByZXR1cm4gW10gfVxuICAgIGNvbnN0IGFjdGlvbk5hbWUgPSAnc2VhcmNoJ1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5yZXNvdXJjZUFjdGlvbih7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUsIHF1ZXJ5IH0pXG4gICAgY2hlY2tSZXNwb25zZShyZXNwb25zZSlcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5yZWNvcmRzXG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyBnaXZlbiByZXNvdXJjZSB7QGxpbmsgQWN0aW9ufSBvbiB0aGUgYmFja2VuZC5cbiAgICpcbiAgICogQHBhcmFtICAge1Jlc291cmNlQWN0aW9uQVBJUGFyYW1zfSAgICAgb3B0aW9uc1xuICAgKiBAcmV0dXJuICB7UHJvbWlzZTxBY3Rpb25SZXNwb25zZT59ICAgICByZXNwb25zZSBmcm9tIGFuIHtAbGluayBBY3Rpb259XG4gICAqL1xuICBhc3luYyByZXNvdXJjZUFjdGlvbihvcHRpb25zOiBSZXNvdXJjZUFjdGlvbkFQSVBhcmFtcyk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxBY3Rpb25SZXNwb25zZT4+IHtcbiAgICBjb25zdCB7IHJlc291cmNlSWQsIGFjdGlvbk5hbWUsIGRhdGEsIHF1ZXJ5LCAuLi5heGlvc1BhcmFtcyB9ID0gb3B0aW9uc1xuICAgIGxldCB1cmwgPSBgL2FwaS9yZXNvdXJjZXMvJHtyZXNvdXJjZUlkfS9hY3Rpb25zLyR7YWN0aW9uTmFtZX1gXG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICBjb25zdCBxID0gZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KVxuICAgICAgdXJsID0gW3VybCwgcV0uam9pbignLycpXG4gICAgfVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5jbGllbnQucmVxdWVzdCh7XG4gICAgICB1cmwsXG4gICAgICBtZXRob2Q6IGRhdGEgPyAnUE9TVCcgOiAnR0VUJyxcbiAgICAgIC4uLmF4aW9zUGFyYW1zLFxuICAgICAgZGF0YSxcbiAgICB9KVxuICAgIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyBnaXZlbiByZWNvcmQge0BsaW5rIEFjdGlvbn0gb24gdGhlIGJhY2tlbmQuXG4gICAqXG4gICAqIEBwYXJhbSAgIHtSZWNvcmRBY3Rpb25BUElQYXJhbXN9IG9wdGlvbnNcbiAgICogQHJldHVybiAge1Byb21pc2U8UmVjb3JkQWN0aW9uUmVzcG9uc2U+fSAgICAgICAgICAgIHJlc3BvbnNlIGZyb20gYW4ge0BsaW5rIEFjdGlvbn1cbiAgICovXG4gIGFzeW5jIHJlY29yZEFjdGlvbihvcHRpb25zOiBSZWNvcmRBY3Rpb25BUElQYXJhbXMpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8UmVjb3JkQWN0aW9uUmVzcG9uc2U+PiB7XG4gICAgY29uc3QgeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZSwgZGF0YSwgLi4uYXhpb3NQYXJhbXMgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuY2xpZW50LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBgL2FwaS9yZXNvdXJjZXMvJHtyZXNvdXJjZUlkfS9yZWNvcmRzLyR7cmVjb3JkSWR9LyR7YWN0aW9uTmFtZX1gLFxuICAgICAgbWV0aG9kOiBkYXRhID8gJ1BPU1QnIDogJ0dFVCcsXG4gICAgICAuLi5heGlvc1BhcmFtcyxcbiAgICAgIGRhdGEsXG4gICAgfSlcbiAgICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgZ2l2ZW4gYnVsayB7QGxpbmsgQWN0aW9ufSBvbiB0aGUgYmFja2VuZC5cbiAgICpcbiAgICogQHBhcmFtICAge0J1bGtBY3Rpb25BUElQYXJhbXN9IG9wdGlvbnNcbiAgICogQHJldHVybiAge1Byb21pc2U8QnVsa0FjdGlvblJlc3BvbnNlPn0gICAgICAgICAgICByZXNwb25zZSBmcm9tIGFuIHtAbGluayBBY3Rpb259XG4gICAqL1xuICBhc3luYyBidWxrQWN0aW9uKG9wdGlvbnM6IEJ1bGtBY3Rpb25BUElQYXJhbXMpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8QnVsa0FjdGlvblJlc3BvbnNlPj4ge1xuICAgIGNvbnN0IHsgcmVzb3VyY2VJZCwgcmVjb3JkSWRzLCBhY3Rpb25OYW1lLCBkYXRhLCAuLi5heGlvc1BhcmFtcyB9ID0gb3B0aW9uc1xuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gICAgcGFyYW1zLnNldCgncmVjb3JkSWRzJywgKHJlY29yZElkcyB8fCBbXSkuam9pbignLCcpKVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNsaWVudC5yZXF1ZXN0KHtcbiAgICAgIHVybDogYC9hcGkvcmVzb3VyY2VzLyR7cmVzb3VyY2VJZH0vYnVsay8ke2FjdGlvbk5hbWV9YCxcbiAgICAgIG1ldGhvZDogZGF0YSA/ICdQT1NUJyA6ICdHRVQnLFxuICAgICAgLi4uYXhpb3NQYXJhbXMsXG4gICAgICBkYXRhLFxuICAgICAgcGFyYW1zLFxuICAgIH0pXG4gICAgY2hlY2tSZXNwb25zZShyZXNwb25zZSlcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VzIGRhc2hib2FyZCBoYW5kbGVyLlxuICAgKlxuICAgKiBAcGFyYW0gICB7QXhpb3NSZXF1ZXN0Q29uZmlnfSAgICAgICBvcHRpb25zXG4gICAqIEByZXR1cm4gIHtQcm9taXNlPEF4aW9zUmVzcG9uc2U8YW55Pj59IHJlc3BvbnNlIGZyb20gdGhlIGhhbmRsZXIgZnVuY3Rpb24gZGVmaW5lZCBpblxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7QGxpbmsgQWRtaW5Ccm9PcHRpb25zI2Rhc2hib2FyZH1cbiAgICovXG4gIGFzeW5jIGdldERhc2hib2FyZChvcHRpb25zOiBBeGlvc1JlcXVlc3RDb25maWcgPSB7fSk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmNsaWVudC5nZXQoJy9hcGkvZGFzaGJvYXJkJywgb3B0aW9ucylcbiAgICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKVxuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgaGFuZGxlciBmdW5jdGlvbiBvZiBnaXZlbiBwYWdlIGFuZCByZXR1cm5zIGl0cyByZXNwb25zZS5cbiAgICpcbiAgICogQHBhcmFtICAge0dldFBhZ2VBUElQYXJhbXN9ICAgICAgICAgICAgICAgIG9wdGlvbnNcbiAgICogQHJldHVybiAge1Byb21pc2U8QXhpb3NSZXNwb25zZTxhbnk+Pn0gICAgIHJlc3BvbnNlIGZyb20gdGhlIGhhbmRsZXIgb2YgZ2l2ZW4gcGFnZVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmaW5lZCBpbiB7QGxpbmsgQWRtaW5Ccm9PcHRpb25zI3BhZ2VzfVxuICAgKi9cbiAgYXN5bmMgZ2V0UGFnZShvcHRpb25zOiBHZXRQYWdlQVBJUGFyYW1zKTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPGFueT4+IHtcbiAgICBjb25zdCB7IHBhZ2VOYW1lLCAuLi5heGlvc1BhcmFtcyB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5jbGllbnQucmVxdWVzdCh7XG4gICAgICB1cmw6IGAvYXBpL3BhZ2VzLyR7cGFnZU5hbWV9YCxcbiAgICAgIC4uLmF4aW9zUGFyYW1zLFxuICAgIH0pXG4gICAgY2hlY2tSZXNwb25zZShyZXNwb25zZSlcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgfVxufVxuXG5leHBvcnQge1xuICBBcGlDbGllbnQgYXMgZGVmYXVsdCxcbiAgQXBpQ2xpZW50LFxufVxuIiwiZXhwb3J0IGNvbnN0IEZPUk1fVkFMVUVfTlVMTCA9ICdfX0ZPUk1fVkFMVUVfTlVMTF9fJ1xuZXhwb3J0IGNvbnN0IEZPUk1fVkFMVUVfRU1QVFlfT0JKRUNUID0gJ19fRk9STV9WQUxVRV9FTVBUWV9PQkpFQ1RfXydcbmV4cG9ydCBjb25zdCBGT1JNX1ZBTFVFX0VNUFRZX0FSUkFZID0gJ19fRk9STV9WQUxVRV9FTVBUWV9BUlJBWV9fJ1xuXG5jb25zdCBpc09iamVjdE9yQXJyYXkgPSAodmFsdWU6IGFueSk6IGJvb2xlYW4gPT4gKFxuICB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnXG4gICYmICh2YWx1ZSBhcyBvYmplY3QpLmNvbnN0cnVjdG9yICE9PSBGaWxlXG4gICYmICEodmFsdWUgaW5zdGFuY2VvZiBEYXRlKVxuKVxuXG4vKipcbiAqIENoYW5nZXMgUmVjb3JkSlNPTiB0aGF0IGl0IGNhbiBiZSBzZW5kIGFzIGEgRm9ybURhdGEgdG8gdGhlIGJhY2tlbmQuXG4gKlxuICogRm9ybURhdGEgaXMgcmVxdWlyZWQgYmVjYXVzZSB3ZSBhcmUgc2VuZGluZyBmaWxlcyB2aWEgdGhlIHdpcmUuIEJ1dCBpdCBoYXMgbGltaXRhdGlvbnMuXG4gKiBOYW1lbHkgaXQgY2FuIG9ubHkgdHJhbnNwb3J0IGZpbGVzIGFuZCBzdHJpbmdzLiBUaGF0IGlzIHdoeSB3ZSBoYXZlIHRvIGNvbnZlcnQgc29tZVxuICogc3RhbmRhcmQgdHlwZXMgbGlrZSBOVUxMIHRvIGNvbnN0YW50cyBzbyB0aGV5IGNhbiBiZSBwcm9wZXJ0eSBjb252ZXJ0ZWQgYmFjayBieSB0aGUgYmFja2VuZC5cbiAqIEFuZCB0aHVzIHByb3Blcmx5IGhhbmRsZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSAgIHtSZWNvcmRKU09OfSAgcmVjb3JkXG4gKiBAcmV0dXJuICB7Rm9ybURhdGF9XG4gKi9cbmZ1bmN0aW9uIHBhcmFtc1RvRm9ybURhdGEocGFyYW1zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogRm9ybURhdGEge1xuICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cbiAgLy8gQXNzdW1lIHRoYXQgcGFyYW1zIGFyZSBmbGF0dGVkXG4gIE9iamVjdC5lbnRyaWVzKHBhcmFtcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgLy8ge0BsaW5rIHVwZGF0ZVJlY29yZH0gZG9lcyBub3QgY2hhbmdlIGVtcHR5IG9iamVjdHMgXCJ7fVwiIC0gc28gaW4gb3JkZXIgdG8gcHJldmVudCBoYXZpbmdcbiAgICAvLyB0aGVtIGNoYW5nZWQgdG8gXCJbb2JqZWN0IE9iamVjdF1cIiB3ZSBoYXZlIHRvIHNldCB0aGVtIHRvIGVtcHR5IHN0cmluZ3MuXG4gICAgaWYgKHZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gZm9ybURhdGEuc2V0KGtleSwgRk9STV9WQUxVRV9OVUxMKVxuICAgIH1cbiAgICAvLyBGaWxlIG9iamVjdHMgaGFzIHRvIGdvIHRocm91Z2ggYmVjYXVzZSB0aGV5IGFyZSBoYW5kbGVkIGJ5IEZvcm1EYXRhXG4gICAgaWYgKGlzT2JqZWN0T3JBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZm9ybURhdGEuc2V0KGtleSwgRk9STV9WQUxVRV9FTVBUWV9BUlJBWSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtRGF0YS5zZXQoa2V5LCBGT1JNX1ZBTFVFX0VNUFRZX09CSkVDVClcbiAgICB9XG5cbiAgICAvLyBSZXN0IGdvZXMgYXMgYSBzdGFuZGFyZCB2YWx1ZVxuICAgIHJldHVybiBmb3JtRGF0YS5zZXQoa2V5LCB2YWx1ZSBhcyBzdHJpbmcpXG4gIH0pXG4gIHJldHVybiBmb3JtRGF0YVxufVxuXG5leHBvcnQge1xuICBwYXJhbXNUb0Zvcm1EYXRhIGFzIGRlZmF1bHQsXG4gIHBhcmFtc1RvRm9ybURhdGEsXG59XG4iLCJpbXBvcnQgeyBOb3RpY2VNZXNzYWdlSW5TdGF0ZSB9IGZyb20gJy4uL3N0b3JlJ1xuaW1wb3J0IHsgTm90aWNlTWVzc2FnZSB9IGZyb20gJy4uLy4uL2hvYy93aXRoLW5vdGljZSdcblxuZXhwb3J0IGNvbnN0IEFERF9OT1RJQ0UgPSAnQUREX05PVElDRSdcblxuZXhwb3J0IHR5cGUgQWRkTm90aWNlUmVzcG9uc2UgPSB7XG4gIHR5cGU6IHR5cGVvZiBBRERfTk9USUNFO1xuICBkYXRhOiBOb3RpY2VNZXNzYWdlSW5TdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGFkZE5vdGljZSA9IChkYXRhOiBOb3RpY2VNZXNzYWdlID0geyBtZXNzYWdlOiAnJyB9KTogQWRkTm90aWNlUmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogQUREX05PVElDRSxcbiAgZGF0YToge1xuICAgIG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcbiAgICBpZDogTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyKDIsIDkpLFxuICAgIHR5cGU6IGRhdGEudHlwZSB8fCAnc3VjY2VzcycsXG4gICAgcHJvZ3Jlc3M6IDAsXG4gIH0sXG59KVxuIiwiaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IGFkZE5vdGljZSB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvYWRkLW5vdGljZSdcbmltcG9ydCB7IE5vdGljZU1lc3NhZ2UgfSBmcm9tICcuLi9ob2Mvd2l0aC1ub3RpY2UnXG5cbi8qKlxuICogQG1lbWJlcm9mIHVzZU5vdGljZVxuICogQGFsaWFzIEFkZE5vdGljZVxuICovXG5leHBvcnQgdHlwZSBBZGROb3RpY2UgPSAobm90aWNlOiBOb3RpY2VNZXNzYWdlKSA9PiBhbnk7XG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogSG9vayB3aGljaCBhbGxvd3MgeW91IHRvIGFkZCBub3RpY2UgbWVzc2FnZSB0byB0aGUgYXBwLlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IHVzZU5vdGljZSwgQnV0dG9uIH0gZnJvbSAnYWRtaW4tYnJvJ1xuICpcbiAqIGNvbnN0IG15Q29tcG9uZW50ID0gKCkgPT4ge1xuICogICBjb25zdCBzZW5kTm90aWNlID0gdXNlTm90aWNlKClcbiAqICAgcmVuZGVyIChcbiAqICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNlbmROb3RpY2UoeyBtZXNzYWdlOiAnSSBhbSBhd2Vzb21lJyB9KX0+SSBhbSBhd2Vzb21lPC9CdXR0b24+XG4gKiAgIClcbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBjbGFzc1xuICogQHN1YmNhdGVnb3J5IEhvb2tzXG4gKiBAYnVuZGxlXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VOb3RpY2UgPSAoKTogQWRkTm90aWNlID0+IHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gIHJldHVybiAobm90aWNlKTogYW55ID0+IGRpc3BhdGNoKGFkZE5vdGljZShub3RpY2UpKVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VOb3RpY2VcbiIsImltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgUmVjb3JkQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL2FjdGlvbnMvYWN0aW9uLmludGVyZmFjZSdcblxuLyoqXG4gKiBIYW5kbGVycyBvZiBhbGwgW0FjdGlvbnNde0BsaW5rIEFjdGlvbn0gb2YgdHlwZSBgcmVjb3JkYCByZXR1cm5zIHJlY29yZC5cbiAqIERlcGVuZGluZyBvbiBhIHBsYWNlIGFuZCByZXNwb25zZSB3ZSBoYXZlIHRvIG1lcmdlIHdoYXQgd2FzIHJldHVybmVkXG4gKiB0byB0aGUgYWN0dWFsIHN0YXRlLiBJdCBpcyBkb25lIGluIGZvbGxvd2luZyBwbGFjZXM6XG4gKiAtIHtAbGluayB1c2VSZWNvcmR9IGhvb2tcbiAqIC0ge0BsaW5rIFJlY29yZEluTGlzdH0gY29tcG9uZW50XG4gKiAtIHtAbGluayBSZWNvcmRBY3Rpb259IGNvbXBvbmVudFxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IG1lcmdlUmVjb3JkUmVzcG9uc2UgPSAocmVjb3JkOiBSZWNvcmRKU09OLCByZXNwb25zZTogUmVjb3JkQWN0aW9uUmVzcG9uc2UpOiBSZWNvcmRKU09OID0+ICh7XG4gIC8vIHdlIHN0YXJ0IGZyb20gdGhlIHJlc3BvbnNlIGJlY2F1c2UgaXQgY2FuIGhhdmUgZGlmZmVyZW50IHJlY29yZEFjdGlvbnMgb3IgYnVsa0FjdGlvbnNcbiAgLi4uKHJlc3BvbnNlLnJlY29yZCB8fCByZWNvcmQpLFxuICAvLyByZWNvcmRzIGhhcyB0byBiZSByZXNldCBldmVyeSB0aW1lIGJlY2F1c2Ugc28gdGhhdCB1c2VyIHdvbnRcbiAgLy8gc2VlIG9sZCBlcnJvcnMgd2hpY2ggYXJlIG5vdCByZWxldmFudCBhbnltb3JlXG4gIGVycm9yczogcmVzcG9uc2UucmVjb3JkLmVycm9ycyxcbiAgcG9wdWxhdGVkOiB7IC4uLnJlY29yZC5wb3B1bGF0ZWQsIC4uLnJlc3BvbnNlLnJlY29yZC5wb3B1bGF0ZWQgfSxcbiAgcGFyYW1zOiB7IC4uLnJlY29yZC5wYXJhbXMsIC4uLnJlc3BvbnNlLnJlY29yZC5wYXJhbXMgfSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IG1lcmdlUmVjb3JkUmVzcG9uc2VcbiIsImNvbnN0IERFTElNSVRFUiA9ICcuJ1xuXG5cbmV4cG9ydCB7IERFTElNSVRFUiB9XG4iLCJpbXBvcnQgeyBERUxJTUlURVIgfSBmcm9tICcuL2NvbnN0YW50cydcbmltcG9ydCB7IEdldE9wdGlvbnMgfSBmcm9tICcuL2ZsYXQudHlwZXMnXG4vLyB0aGlzIGlzIHRoZSByZWdleCB1c2VkIHRvIGZpbmQgYWxsIGV4aXN0aW5nIHByb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBhIGtleVxuXG5leHBvcnQgY29uc3QgcHJvcGVydHlLZXlSZWdleCA9IChwcm9wZXJ0eVBhdGg6IHN0cmluZywgb3B0aW9ucz86IEdldE9wdGlvbnMpOiBSZWdFeHAgPT4ge1xuICBjb25zdCBkZWxpbWl0ZXIgPSBuZXcgUmVnRXhwKGBcXFxcJHtERUxJTUlURVJ9YCwgJ2cnKVxuICBjb25zdCBlc2NhcGVkRGVsaW1pdGVyID0gYFxcXFwke0RFTElNSVRFUn1gXG4gIC8vIGJ1dCBmb3IgYG5lc3RlZC4xLnByb3BlcnR5LjBgIGl0IHdpbGwgcHJvZHVjZSBgbmVzdGVkKFxcLnxcXC5cXGQrXFwuKTEoXFwufFxcLlxcZCtcXC4pcHJvcGVydHkuMGBcbiAgLy8gYW5kIHRoaXMgaXMgaW50ZW50aW9uYWwgYmVjYXVzZSB1c2VyIGNhbiBnaXZlIGFuIG9uZSBpbmRleCBpbiBwcm9wZXJ0eSBwYXRoIGZvciB3aXRoIGRlZXBseVxuICAvLyBuZXN0ZWQgYXJyYXlzXG4gIGNvbnN0IGVzY2FwZWREZWxpbWl0ZXJPckluZGV4ID0gYCgke2VzY2FwZWREZWxpbWl0ZXJ9fCR7ZXNjYXBlZERlbGltaXRlcn1cXFxcZCske2VzY2FwZWREZWxpbWl0ZXJ9KWBcbiAgY29uc3QgcGF0aCA9IG9wdGlvbnM/LmluY2x1ZGVBbGxTaWJsaW5nc1xuICAgID8gcHJvcGVydHlQYXRoLnJlcGxhY2UoZGVsaW1pdGVyLCBlc2NhcGVkRGVsaW1pdGVyT3JJbmRleClcbiAgICA6IHByb3BlcnR5UGF0aC5yZXBsYWNlKGRlbGltaXRlciwgZXNjYXBlZERlbGltaXRlcilcbiAgcmV0dXJuIG5ldyBSZWdFeHAoYF4ke3BhdGh9KCR8JHtlc2NhcGVkRGVsaW1pdGVyfSlgLCAnJylcbn1cbiIsImltcG9ydCB7IHByb3BlcnR5S2V5UmVnZXggfSBmcm9tICcuL3Byb3BlcnR5LWtleS1yZWdleCdcbmltcG9ydCB7IEZsYXR0ZW5QYXJhbXMsIEdldE9wdGlvbnMgfSBmcm9tICcuL2ZsYXQudHlwZXMnXG5cbi8qKlxuICogQGxvYWQgLi9zZWxlY3QtcGFyYW1zLmRvYy5tZFxuICogQG1lbWJlcm9mIG1vZHVsZTpmbGF0XG4gKiBAcGFyYW0ge0ZsYXR0ZW5QYXJhbXN9IHBhcmFtc1xuICogQHBhcmFtIHtzdHJpbmcgfCBBcnJheTxzdHJpbmc+fSBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0ge0dldE9wdGlvbnN9IFtvcHRpb25zXVxuICogQHJldHVybnMge0ZsYXR0ZW5QYXJhbXN9XG4gKi9cbmNvbnN0IHNlbGVjdFBhcmFtcyA9IChcbiAgcGFyYW1zOiBGbGF0dGVuUGFyYW1zLFxuICBwcm9wZXJ0aWVzOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LFxuICBvcHRpb25zPzogR2V0T3B0aW9ucyxcbik6IEZsYXR0ZW5QYXJhbXMgPT4ge1xuICBjb25zdCBwcm9wZXJ0eUFycmF5ID0gQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzKSA/IHByb3BlcnRpZXMgOiBbcHJvcGVydGllc11cbiAgY29uc3Qgc2VsZWN0ZWQgPSBwcm9wZXJ0eUFycmF5XG4gICAgLmZpbHRlcihwcm9wZXJ0eVBhdGggPT4gISFwcm9wZXJ0eVBhdGgpXG4gICAgLnJlZHVjZSgoZ2xvYmFsTWVtbywgcHJvcGVydHlQYXRoKSA9PiB7XG4gICAgICBjb25zdCByZWdleCA9IHByb3BlcnR5S2V5UmVnZXgocHJvcGVydHlQYXRoLCBvcHRpb25zKVxuICAgICAgY29uc3QgZmlsdGVyZWQgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gICAgICAvLyBmaWx0ZXIgYWxsIGtleXMgd2hpY2ggc3RhcnRzIHdpdGggcHJvcGVydHkgcGF0aFxuICAgICAgICAuZmlsdGVyKGtleSA9PiBrZXkubWF0Y2gocmVnZXgpKVxuICAgICAgICAucmVkdWNlKChtZW1vLCBrZXkpID0+IHtcbiAgICAgICAgICBtZW1vW2tleV0gPSAocGFyYW1zW2tleV0gYXMgc3RyaW5nKVxuICAgICAgICAgIHJldHVybiBtZW1vXG4gICAgICAgIH0sIHt9IGFzIEZsYXR0ZW5QYXJhbXMpXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5nbG9iYWxNZW1vLFxuICAgICAgICAuLi5maWx0ZXJlZCxcbiAgICAgIH1cbiAgICB9LCB7fSBhcyBGbGF0dGVuUGFyYW1zKVxuICByZXR1cm4gc2VsZWN0ZWRcbn1cblxuZXhwb3J0IHsgc2VsZWN0UGFyYW1zIH1cbiIsImltcG9ydCB7IHByb3BlcnR5S2V5UmVnZXggfSBmcm9tICcuL3Byb3BlcnR5LWtleS1yZWdleCdcbmltcG9ydCB7IEZsYXR0ZW5QYXJhbXMgfSBmcm9tICcuL2ZsYXQudHlwZXMnXG5cbi8qKlxuICogQGxvYWQgLi9maWx0ZXItb3V0LXBhcmFtcy5kb2MubWRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZmxhdFxuICogQHBhcmFtIHtGbGF0dGVuUGFyYW1zfSBwYXJhbXNcbiAqIEBwYXJhbSB7c3RyaW5nIHwgQXJyYXk8c3RyaW5nPn0gcHJvcGVydGllc1xuICogQHJldHVybnMge0ZsYXR0ZW5QYXJhbXN9XG4gKi9cbmNvbnN0IGZpbHRlck91dFBhcmFtcyA9IChcbiAgcGFyYW1zOiBGbGF0dGVuUGFyYW1zLFxuICBwcm9wZXJ0aWVzOiBzdHJpbmcgfCBBcnJheTxzdHJpbmc+LFxuKTogRmxhdHRlblBhcmFtcyA9PiB7XG4gIGNvbnN0IHByb3BlcnR5QXJyYXkgPSBBcnJheS5pc0FycmF5KHByb3BlcnRpZXMpID8gcHJvcGVydGllcyA6IFtwcm9wZXJ0aWVzXVxuXG4gIHJldHVybiBwcm9wZXJ0eUFycmF5XG4gICAgLmZpbHRlcihwcm9wZXJ0eVBhdGggPT4gISFwcm9wZXJ0eVBhdGgpXG4gICAgLnJlZHVjZSgoZ2xvYmFsRmlsdGVyZWQsIHByb3BlcnR5UGF0aCkgPT4ge1xuICAgICAgY29uc3QgcmVnZXggPSBwcm9wZXJ0eUtleVJlZ2V4KHByb3BlcnR5UGF0aClcblxuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGdsb2JhbEZpbHRlcmVkKVxuICAgICAgICAuZmlsdGVyKGtleSA9PiAha2V5Lm1hdGNoKHJlZ2V4KSlcbiAgICAgICAgLnJlZHVjZSgobWVtbywga2V5KSA9PiB7XG4gICAgICAgICAgbWVtb1trZXldID0gKHBhcmFtc1trZXldIGFzIHN0cmluZylcbiAgICAgICAgICByZXR1cm4gbWVtb1xuICAgICAgICB9LCB7fSBhcyBGbGF0dGVuUGFyYW1zKVxuICAgIH0sIHBhcmFtcylcbn1cblxuZXhwb3J0IHsgZmlsdGVyT3V0UGFyYW1zIH1cbiIsImltcG9ydCB7IFBhdGhQYXJ0cyB9IGZyb20gJy4vcGF0aC1wYXJ0cy50eXBlJ1xuXG4vKipcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZmxhdFxuICogQGFsaWFzIFBhdGhUb1BhcnRzT3B0aW9uc1xuICovXG5leHBvcnQgdHlwZSBQYXRoVG9QYXJ0c09wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgaWYgYXJyYXkgaW5kZXhlcyBzaG91bGQgYmUgc2tpcHBlZCBmcm9tIHRoZSBvdXRjb21lLlxuICAgKi9cbiAgc2tpcEFycmF5SW5kZXhlcz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQGxvYWQgLi9wYXRoLXRvLXBhcnRzLmRvYy5tZFxuICogQHBhcmFtICAge3N0cmluZ30gICAgICAgICAgICAgIHByb3BlcnR5UGF0aFxuICogQHBhcmFtICAge1BhdGhUb1BhcnRzT3B0aW9uc30gIG9wdGlvbnNcbiAqIEByZXR1cm5zICB7UGF0aFBhcnRzfVxuICpcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZmxhdFxuICogQGFsaWFzIHBhdGhUb1BhcnRzXG4gKi9cbmNvbnN0IHBhdGhUb1BhcnRzID0gKHByb3BlcnR5UGF0aDogc3RyaW5nLCBvcHRpb25zOiBQYXRoVG9QYXJ0c09wdGlvbnMgPSB7fSk6IFBhdGhQYXJ0cyA9PiB7XG4gIGxldCBhbGxQYXJ0cyA9IHByb3BlcnR5UGF0aC5zcGxpdCgnLicpXG4gIGlmIChvcHRpb25zLnNraXBBcnJheUluZGV4ZXMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgYWxsUGFydHMgPSBhbGxQYXJ0cy5maWx0ZXIocGFydCA9PiBpc05hTigrcGFydCkpXG4gIH1cbiAgcmV0dXJuIGFsbFBhcnRzLnJlZHVjZSgobWVtbywgcGFydCkgPT4ge1xuICAgIGlmIChtZW1vLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgLi4ubWVtbyxcbiAgICAgICAgW21lbW9bbWVtby5sZW5ndGggLSAxXSwgcGFydF0uam9pbignLicpLFxuICAgICAgXVxuICAgIH1cbiAgICByZXR1cm4gW3BhcnRdXG4gIH0sIFtdIGFzIEFycmF5PHN0cmluZz4pXG59XG5cbmV4cG9ydCB7IHBhdGhUb1BhcnRzIH1cbiIsImltcG9ydCB7IGZsYXR0ZW4gfSBmcm9tICdmbGF0J1xuaW1wb3J0IHsgREVMSU1JVEVSIH0gZnJvbSAnLi9jb25zdGFudHMnXG5pbXBvcnQgeyBGbGF0dGVuUGFyYW1zIH0gZnJvbSAnLi4vZmxhdCdcbmltcG9ydCB7IHByb3BlcnR5S2V5UmVnZXggfSBmcm9tICcuL3Byb3BlcnR5LWtleS1yZWdleCdcbmltcG9ydCB7IHBhdGhUb1BhcnRzIH0gZnJvbSAnLi9wYXRoLXRvLXBhcnRzJ1xuXG5jb25zdCBpc09iamVjdCA9ICh2YWx1ZTogYW55KTogYm9vbGVhbiA9PiB7XG4gIC8vIE5vZGUgZW52aXJvbm1lbnRcbiAgaWYgKHR5cGVvZiBGaWxlID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICE9PSBudWxsXG4gIH1cbiAgLy8gV2luZG93IGVudmlyb25tZW50XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICEodmFsdWUgaW5zdGFuY2VvZiBGaWxlKSAmJiB2YWx1ZSAhPT0gbnVsbFxufVxuXG4vKipcbiAqIEBsb2FkIC4vc2V0LmRvYy5tZFxuICogQG1lbWJlcm9mIG1vZHVsZTpmbGF0XG4gKiBAcGFyYW0ge0ZsYXR0ZW5QYXJhbXN9IHBhcmFtc1xuICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5UGF0aFxuICogQHBhcmFtIHthbnl9IFt2YWx1ZV0gICAgICAgaWYgbm90IGdpdmUgZnVuY3Rpb24gd2lsbCBvbmx5IHRyeSB0byByZW1vdmUgb2xkIGtleXNcbiAqIEByZXR1cm5zIHtGbGF0dGVuUGFyYW1zfVxuICovXG5jb25zdCBzZXQgPSAocGFyYW1zOiBGbGF0dGVuUGFyYW1zID0ge30sIHByb3BlcnR5UGF0aDogc3RyaW5nLCB2YWx1ZT86IGFueSk6IEZsYXR0ZW5QYXJhbXMgPT4ge1xuICBjb25zdCByZWdleCA9IHByb3BlcnR5S2V5UmVnZXgocHJvcGVydHlQYXRoKVxuXG4gIC8vIHJlbW92ZSBhbGwgZXhpc3Rpbmcga2V5c1xuICBjb25zdCBwYXJhbXNDb3B5ID0gT2JqZWN0LmtleXMocGFyYW1zKVxuICAgIC5maWx0ZXIoa2V5ID0+ICFrZXkubWF0Y2gocmVnZXgpKVxuICAgIC5yZWR1Y2UoKG1lbW8sIGtleSkgPT4ge1xuICAgICAgbWVtb1trZXldID0gcGFyYW1zW2tleV1cblxuICAgICAgcmV0dXJuIG1lbW9cbiAgICB9LCB7fSBhcyBGbGF0dGVuUGFyYW1zKVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKGlzT2JqZWN0KHZhbHVlKSAmJiAhKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgIGNvbnN0IGZsYXR0ZW5lZCA9IGZsYXR0ZW4odmFsdWUpIGFzIGFueVxuXG4gICAgICBpZiAoT2JqZWN0LmtleXMoZmxhdHRlbmVkKS5sZW5ndGgpIHtcbiAgICAgICAgT2JqZWN0LmtleXMoZmxhdHRlbmVkKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICBwYXJhbXNDb3B5W2Ake3Byb3BlcnR5UGF0aH0ke0RFTElNSVRFUn0ke2tleX1gXSA9IGZsYXR0ZW5lZFtrZXldXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHBhcmFtc0NvcHlbcHJvcGVydHlQYXRoXSA9IFtdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJhbXNDb3B5W3Byb3BlcnR5UGF0aF0gPSB7fVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwYXJhbXNDb3B5W3Byb3BlcnR5UGF0aF0gPSB2YWx1ZVxuICAgIH1cblxuICAgIC8vIHdoZW4gdXNlciBnYXZlIHsgXCJuZXN0ZWQudmFsdWVcIjogXCJzb21ldGhpbmdcIiB9IGFuZCBoYWQgXCJuZXN0ZWRcIiBzZXQgdG8gYG51bGxgLCB0aGVuXG4gICAgLy8gbmVzdGVkIHNob3VsZCBiZSByZW1vdmVkXG4gICAgY29uc3QgcGFydHMgPSBwYXRoVG9QYXJ0cyhwcm9wZXJ0eVBhdGgpLnNsaWNlKDAsIC0xKVxuICAgIGlmIChwYXJ0cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyhwYXJhbXNDb3B5KVxuICAgICAgICAuZmlsdGVyKGtleSA9PiAhcGFydHMuaW5jbHVkZXMoa2V5KSlcbiAgICAgICAgLnJlZHVjZSgobWVtbywga2V5KSA9PiB7XG4gICAgICAgICAgbWVtb1trZXldID0gcGFyYW1zQ29weVtrZXldXG5cbiAgICAgICAgICByZXR1cm4gbWVtb1xuICAgICAgICB9LCB7fSBhcyBGbGF0dGVuUGFyYW1zKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcGFyYW1zQ29weVxufVxuXG5leHBvcnQgeyBzZXQgfVxuIiwiaW1wb3J0IHsgdW5mbGF0dGVuIH0gZnJvbSAnZmxhdCdcbmltcG9ydCB7IERFTElNSVRFUiB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgc2VsZWN0UGFyYW1zIH0gZnJvbSAnLi9zZWxlY3QtcGFyYW1zJ1xuaW1wb3J0IHsgRmxhdHRlblBhcmFtcyB9IGZyb20gJy4uL2ZsYXQnXG5pbXBvcnQgeyBwcm9wZXJ0eUtleVJlZ2V4IH0gZnJvbSAnLi9wcm9wZXJ0eS1rZXktcmVnZXgnXG5pbXBvcnQgeyBHZXRPcHRpb25zIH0gZnJvbSAnLi9mbGF0LnR5cGVzJ1xuXG5jb25zdCBURU1QX0hPTERJTkdfS0VZID0gJ1RFTVBfSE9MRElOR19LRVknXG5cbi8qKlxuICogQGxvYWQgLi9nZXQuZG9jLm1kXG4gKiBAbWVtYmVyb2YgbW9kdWxlOmZsYXRcbiAqIEBwYXJhbSB7RmxhdHRlblBhcmFtc30gICBwYXJhbXMgICAgICBmbGF0dGVuIHBhcmFtcyBmcm9tIHdoaWNoIHByb3BlcnR5IGhhcyB0byBiZSB0YWtlblxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgIFtwcm9wZXJ0eVBhdGhdICBuYW1lIG9mIHRoZSBwcm9wZXJ0eVxuICogQHBhcmFtIHtHZXRPcHRpb25zfSAgICAgIG9wdGlvbnMgICAgIG9wdGlvbnNcbiAqIEByZXR1cm5zIHthbnl9ICAgICAgICAgICAgICAgICAgICAgICB3aGVuIHByb3BlcnR5IGtleSBleGlzdHMgZGlyZWN0bHkgaXQgcmV0dXJucyB3aGF0IGlzIGluc2lkZSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdGhlcndpc2UgaXQgdHJpZXMgdG8gZmluZCBhbnkgbmVzdGVkIG9iamVjdHMgYW5kIHJldHVybnNcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtXG4gKi9cbmNvbnN0IGdldCA9IChwYXJhbXM6IEZsYXR0ZW5QYXJhbXMgPSB7fSwgcHJvcGVydHlQYXRoPzogc3RyaW5nLCBvcHRpb25zPzogR2V0T3B0aW9ucyk6IGFueSA9PiB7XG4gIGlmICghcHJvcGVydHlQYXRoKSB7XG4gICAgcmV0dXJuIHVuZmxhdHRlbihwYXJhbXMpXG4gIH1cblxuICAvLyB3aGVuIG9iamVjdCBoYXMgdGhpcyBrZXkgLSBzaW1wbHkgcmV0dXJuIGl0XG4gIC8vIHdlIGNhbm5vdCByZWx5IG9uIHR5cGVvZiBwYXJhbXNbcHJvcGVydHlQYXRoICE9PSAndW5kZWZpbmVkJyBiZWNhdXNlIHBhcmFtcyBjYW4gYWN0dWFsbHkgYmVcbiAgLy8gdW5kZWZpbmVkIGFuZCBpbiBzdWNoIGNhc2UgaWYgd291bGQgcGFzcyBhbmQgZnVuY3Rpb24gd291bGQgcmV0dXJuIFt1bmRlZmluZWRdXG4gIGlmIChPYmplY3Qua2V5cyhwYXJhbXMpLmZpbmQoa2V5ID0+IChrZXkgPT09IHByb3BlcnR5UGF0aCkpKSB7XG4gICAgcmV0dXJuIHBhcmFtc1twcm9wZXJ0eVBhdGhdXG4gIH1cblxuICBjb25zdCByZWdleCA9IHByb3BlcnR5S2V5UmVnZXgocHJvcGVydHlQYXRoLCBvcHRpb25zKVxuICBjb25zdCBzZWxlY3RlZFBhcmFtcyA9IHNlbGVjdFBhcmFtcyhwYXJhbXMsIHByb3BlcnR5UGF0aCwgb3B0aW9ucylcblxuICBjb25zdCBuZXN0ZWRQcm9wZXJ0aWVzID0gT2JqZWN0LmtleXMoc2VsZWN0ZWRQYXJhbXMpLnJlZHVjZSgobWVtbywga2V5LCBpbmRleCkgPT4ge1xuICAgIGxldCBuZXdLZXkgPSBrZXkucmVwbGFjZShyZWdleCwgYCR7VEVNUF9IT0xESU5HX0tFWX0ke0RFTElNSVRFUn1gKVxuXG4gICAgLy8gd2hlbiB1c2VyIHdhbnRzIHRvIHRha2UgYWxsU2libGluZ3Mgd2UgaGF2ZSB0byBmaXggdGhlIGluZGV4ZXMgc28gbmVzdGVkIGl0ZW1zIGZyb21cbiAgICAvLyBkaWZmZXJlbnQgc2libGluZ3MgZG9uJ3Qgb3ZlcmxhcFxuICAgIC8vXG4gICAgLy8gRXhhbXBsZSBmb3Iga2V5IGBuZXN0ZWQuMS5lbGA6XG4gICAgLy8gICduZXN0ZWQuMC5lbC4wLnZhbHVlJzogJ3ZhbDAuMCcsXG4gICAgLy8gICduZXN0ZWQuMC5lbC4xLnZhbHVlJzogJ3ZhbDAuMScsXG4gICAgLy8gICduZXN0ZWQuMS5lbC4wLnZhbHVlJzogJ3ZhbDEnLFxuICAgIC8vICAnbmVzdGVkLjEuZWwuMS52YWx1ZSc6ICd2YWwyJyxcbiAgICAvL1xuICAgIC8vIGhhcyB0byBiZSBjaGFuZ2VkIHRvOlxuICAgIC8vICAnVEVNUF9IT0xESU5HX0tFWS4wLnZhbHVlJzogJ3ZhbDAuMCcsXG4gICAgLy8gICdURU1QX0hPTERJTkdfS0VZLjEudmFsdWUnOiAndmFsMC4xJyxcbiAgICAvLyAgJ1RFTVBfSE9MRElOR19LRVkuMi52YWx1ZSc6ICd2YWwxJyxcbiAgICAvLyAgJ1RFTVBfSE9MRElOR19LRVkuMy52YWx1ZSc6ICd2YWwyJyxcbiAgICBpZiAob3B0aW9ucz8uaW5jbHVkZUFsbFNpYmxpbmdzKSB7XG4gICAgICBuZXdLZXkgPSBuZXdLZXkucmVwbGFjZShcbiAgICAgICAgbmV3IFJlZ0V4cChgJHtURU1QX0hPTERJTkdfS0VZfVxcXFwke0RFTElNSVRFUn0oXFxcXGQqKWApLFxuICAgICAgICBgJHtURU1QX0hPTERJTkdfS0VZfSR7REVMSU1JVEVSfSR7aW5kZXh9YCxcbiAgICAgIClcbiAgICB9XG5cbiAgICBtZW1vW25ld0tleV0gPSBzZWxlY3RlZFBhcmFtc1trZXldXG5cbiAgICByZXR1cm4gbWVtb1xuICB9LCB7fSBhcyBGbGF0dGVuUGFyYW1zKVxuXG4gIGlmIChPYmplY3Qua2V5cyhuZXN0ZWRQcm9wZXJ0aWVzKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gKHVuZmxhdHRlbihuZXN0ZWRQcm9wZXJ0aWVzKSBhcyB7fSlbVEVNUF9IT0xESU5HX0tFWV1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCB7IGdldCB9XG4iLCJpbXBvcnQgeyBmbGF0dGVuIH0gZnJvbSAnZmxhdCdcbmltcG9ydCB7IEZsYXR0ZW5QYXJhbXMgfSBmcm9tICcuL2ZsYXQudHlwZXMnXG5pbXBvcnQgeyBzZXQgfSBmcm9tICcuL3NldCdcblxuLyoqXG4gKiBNZXJnZXMgcGFyYW1zIHRvZ2V0aGVyIGFuZCByZXR1cm5zIGZsYXR0ZW4gcmVzdWx0XG4gKlxuICogQHBhcmFtIHthbnl9IHBhcmFtc1xuICogQHBhcmFtIHtBcnJheTxhbnk+fSAuLi5tZXJnZVBhcmFtc1xuICogQHJldHVybnMge0ZsYXR0ZW5QYXJhbXN9XG4gKiBAbWVtYmVyb2YgbW9kdWxlOmZsYXRcbiAqL1xuY29uc3QgbWVyZ2UgPSAocGFyYW1zOiBhbnkgPSB7fSwgLi4ubWVyZ2VQYXJhbXM6IEFycmF5PGFueT4pOiBGbGF0dGVuUGFyYW1zID0+IHtcbiAgY29uc3QgZmxhdHRlblBhcmFtcyA9IGZsYXR0ZW4ocGFyYW1zKVxuXG4gIC8vIHJldmVyc2UgYmVjYXVzZSB3ZSBtZXJnZSBmcm9tIHJpZ2h0XG4gIHJldHVybiBtZXJnZVBhcmFtcy5yZXZlcnNlKCkucmVkdWNlKChnbG9iYWxNZW1vLCBtZXJnZVBhcmFtKSA9PiAoXG4gICAgT2JqZWN0LmtleXMobWVyZ2VQYXJhbSlcbiAgICAgIC5yZWR1Y2UoKG1lbW8sIGtleSkgPT4gKHNldChtZW1vLCBrZXksIG1lcmdlUGFyYW1ba2V5XSkpLCBnbG9iYWxNZW1vKVxuICApLCBmbGF0dGVuUGFyYW1zIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG59XG5cbmV4cG9ydCB7IG1lcmdlIH1cbiIsImltcG9ydCB7IGZpbHRlck91dFBhcmFtcyB9IGZyb20gJy4vZmlsdGVyLW91dC1wYXJhbXMnXG5pbXBvcnQgeyBGbGF0dGVuUGFyYW1zIH0gZnJvbSAnLi9mbGF0LnR5cGVzJ1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXQnXG5pbXBvcnQgeyBzZXQgfSBmcm9tICcuL3NldCdcbmltcG9ydCB7IHBhdGhUb1BhcnRzIH0gZnJvbSAnLi9wYXRoLXRvLXBhcnRzJ1xuaW1wb3J0IHsgREVMSU1JVEVSIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbi8qKlxuICogQGxvYWQgLi9yZW1vdmUtcGF0aC5kb2MubWRcbiAqIEBtZW1iZXJvZiBtb2R1bGU6ZmxhdFxuICogQHBhcmFtIHtGbGF0dGVuUGFyYW1zfSBwYXJhbXNcbiAqIEBwYXJhbSB7Li4uc3RyaW5nfSBwcm9wZXJ0aWVzXG4gKiBAcmV0dXJucyB7RmxhdHRlblBhcmFtc31cbiAqL1xuY29uc3QgcmVtb3ZlUGF0aCA9IChwYXJhbXM6IEZsYXR0ZW5QYXJhbXMsIHBhdGg6IHN0cmluZyk6IEZsYXR0ZW5QYXJhbXMgPT4ge1xuICAvLyBieSBkZWZhdWx0IHNpbXBseSBmaWx0ZXIgb3V0IGVsZW1lbnRzIGZyb20gdGhlIG9iamVjdFxuICBsZXQgZmlsdGVyZWQgPSBmaWx0ZXJPdXRQYXJhbXMocGFyYW1zLCBwYXRoKVxuXG4gIC8vIHJldmVyc2UgbWVhbnMgdGhhdCB3ZSBpdGVyYXRlIGZyb20gdGhlIGNsb3NlcyBwYXJlbnRcbiAgY29uc3QgcGFyZW50UGF0aHMgPSBwYXRoVG9QYXJ0cyhwYXRoKS5yZXZlcnNlKClcblxuICAvLyBidXQgaWYgb25lIG9mIHRoZSBwYXJlbnQgaXMgYW4gYXJyYXlcbiAgcGFyZW50UGF0aHMuZmluZCgocGFyZW50UGF0aCwgcGFyZW50SW5kZXgpID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBnZXQocGFyYW1zLCBwYXJlbnRQYXRoKVxuICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgIC8vIHByZXZpb3VzIGVsZW1lbnQgaXMgc3RyaW5naWZpZWQgaW5kZXggbGlrZSAncHJvcGVydHkuMSdcbiAgICAgIGNvbnN0IHByZXZpb3VzUGF0aHMgPSBwYXJlbnRQYXRoc1twYXJlbnRJbmRleCAtIDFdLnNwbGl0KERFTElNSVRFUilcbiAgICAgIC8vIHNvIHRoaXMgaXMgdGhlIGluZGV4OiAxXG4gICAgICBjb25zdCBwcmV2aW91c1BhdGhJbmRleCA9IHByZXZpb3VzUGF0aHNbcHJldmlvdXNQYXRocy5sZW5ndGggLSAxXVxuICAgICAgcGFyZW50LnNwbGljZSgrcHJldmlvdXNQYXRoSW5kZXgsIDEpXG4gICAgICBmaWx0ZXJlZCA9IHNldChwYXJhbXMsIHBhcmVudFBhdGgsIHBhcmVudClcbiAgICAgIC8vIHRoaXMgd29ya3MganVzdCBmb3IgdGhlIGZpcnN0bHkgZm91bmQgYXJyYXkgaXRlbSwgYmVjYXVzZSBpbiBjYXNlIG9mIHJlbW92aW5nIHRoZSBsYXN0IG9uZVxuICAgICAgLy8gaXQgbGVhdmVzIGBbXWAgYXMgYSB2YWx1ZS5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiBmaWx0ZXJlZFxufVxuXG5leHBvcnQgeyByZW1vdmVQYXRoIH1cbiIsImltcG9ydCB7IGZsYXR0ZW4sIHVuZmxhdHRlbiB9IGZyb20gJ2ZsYXQnXG5cbmltcG9ydCB7IERFTElNSVRFUiB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgc2VsZWN0UGFyYW1zIH0gZnJvbSAnLi9zZWxlY3QtcGFyYW1zJ1xuaW1wb3J0IHsgZmlsdGVyT3V0UGFyYW1zIH0gZnJvbSAnLi9maWx0ZXItb3V0LXBhcmFtcydcbmltcG9ydCB7IHNldCB9IGZyb20gJy4vc2V0J1xuaW1wb3J0IHsgZ2V0IH0gZnJvbSAnLi9nZXQnXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJy4vbWVyZ2UnXG5pbXBvcnQgeyBwYXRoVG9QYXJ0cyB9IGZyb20gJy4vcGF0aC10by1wYXJ0cydcbmltcG9ydCB7IHJlbW92ZVBhdGggfSBmcm9tICcuL3JlbW92ZS1wYXRoJ1xuXG5leHBvcnQgdHlwZSBGbGF0TW9kdWxlVHlwZSA9IHtcbiAgZmxhdHRlbjogdHlwZW9mIGZsYXR0ZW47XG4gIHVuZmxhdHRlbjogdHlwZW9mIHVuZmxhdHRlbjtcbiAgc2V0OiB0eXBlb2Ygc2V0O1xuICBnZXQ6IHR5cGVvZiBnZXQ7XG4gIHNlbGVjdFBhcmFtczogdHlwZW9mIHNlbGVjdFBhcmFtcztcbiAgZmlsdGVyT3V0UGFyYW1zOiB0eXBlb2YgZmlsdGVyT3V0UGFyYW1zO1xuICBERUxJTUlURVI6IHR5cGVvZiBERUxJTUlURVI7XG4gIHBhdGhUb1BhcnRzOiB0eXBlb2YgcGF0aFRvUGFydHM7XG4gIHJlbW92ZVBhdGg6IHR5cGVvZiByZW1vdmVQYXRoO1xuICBtZXJnZTogdHlwZW9mIG1lcmdlO1xufVxuXG4vKipcbiAqIEBtb2R1bGUgZmxhdFxuICogQG5hbWUgZmxhdFxuICogQG5ldyBpbiB2ZXJzaW9uIDMuM1xuICogQGxvYWQgLi9mbGF0LmRvYy5tZFxuICovXG5leHBvcnQgY29uc3QgZmxhdDogRmxhdE1vZHVsZVR5cGUgPSB7XG4gIC8qKlxuICAgKiBSYXcgYGZsYXR0ZW5gIGZ1bmN0aW9uIGV4cG9ydGVkIGZyb20gb3JpZ2luYWwge0BsaW5rIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2ZsYXQgZmxhdH1cbiAgICogcGFja2FnZS5cbiAgICovXG4gIGZsYXR0ZW4sXG4gIC8qKlxuICAgKiBSYXcgYHVuZmxhdHRlbmAgZnVuY3Rpb24gZXhwb3J0ZWQgZnJvbSBvcmlnaW5hbCB7QGxpbmsgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvZmxhdCBmbGF0fVxuICAgKiBwYWNrYWdlLlxuICAgKi9cbiAgdW5mbGF0dGVuLFxuXG4gIHNldCxcbiAgZ2V0LFxuICBzZWxlY3RQYXJhbXMsXG4gIGZpbHRlck91dFBhcmFtcyxcbiAgcmVtb3ZlUGF0aCxcbiAgREVMSU1JVEVSLFxuICBwYXRoVG9QYXJ0cyxcbiAgbWVyZ2UsXG59XG4iLCJpbXBvcnQgeyBmbGF0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvZmxhdCdcbmltcG9ydCB7IFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuXG4vKipcbiAqIEhPRiByZXR1cm5pbmcgYSBmdW5jdGlvbiB3aGljaCB0YWtlcyBhIHJlY29yZCBhbmQgcmV0dXJucyBhbiB1cGRhdGVkIHJlY29yZC5cbiAqIFRoaXMgd2F5IHdlIGNhbiBwYXNzIHRoaXMgdG8gc2V0U3RhdGUgaW4gcmVhY3QsIHdoaWNoIHRha2VzIG9sZCBzdGF0ZVxuICogKGluIG91ciBjYXNlIHByZXZpb3VzUmVjb3JkKSBhcyBhbiBhcmd1bWVudC5cbiAqXG4gKiBGdW5jdGlvbiBpcyB1c2VkIHdoZW4gdG8gdGhlIHtAbGluayBPblByb3BlcnR5Q2hhbmdlfSBjYWxsYmFjaywgdXNlciBwYXNzZXNcbiAqIGtleSAocHJvcGVydHkgbmFtZSkgYW5kIHRoZSB2YWx1ZSAoZm9sbG93ZWQgYnkgYW4gb3B0aW9uYWwgc2VsZWN0ZWRSZWNvcmQpLlxuICpcbiAqIFRoZSByZXNwb25zaWJpbGl0eSBvZiB0aGUgZnVuY3Rpb24gaXMgdG86XG4gKiAtIGNsZWFyIG9sZCB2YWx1ZXMgdW5kZXIgcGFzc2VkIGtleTogc28gd2hlbiB1c2VyIHBhc3NlcyBwcm9wZXJ0eSA9PT0gYHNvbWUua2V5YFxuICogICBmdW5jdGlvbiByZW1vdmVzIGBzb21lLmtleS4xYCwgYHNvbWUua2V5LjJgIGV0Y1xuICogLSBzZXRzIG5ldyB2YWx1ZSB1bmRlciB0aGUgcGFzc2VkIGtleSBmb3IgcHJpbWl0aXZlIHR5cGVzXG4gKiAtIGluIGNhc2Ugb2Ygb2JqZWN0cyAtIGl0IGZsYXR0ZW5zIHRoZW0gZmlyc3QgYW5kIHRoZW4gc2V0cyBhbGwgdGhlIHJlc3VsdGVkIHZhbHVlc1xuICogICB1bmRlciB0aGUgcGF0aCBwcm92aWRlZCBpbiB0aGUgcHJvcGVydHkgYXJndW1lbnRcbiAqIC0gaXQgZmlsbHMgdmFsdWUgaW4gUmVjb3JkSlNPTiNwb3B1bGF0ZWQgd2hlbiBzZWxlY3RlZFJlY29yZCBpcyBnaXZlblxuICogLSBmaW5hbGx5IGl0IGludmFsaWRhdGVzIHBvcHVsYXRlZCBmb3IgZ2l2ZW4gcHJvcGVydHlcbiAqXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgcHJvcGVydHkgICAgICAgIHByb3BlcnR5IHRoYXQgbXVzdCBiZSB1cGRhdGVkLCBzdXBwb3J0cyBuZXN0aW5nXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCBkb3RzXG4gKiBAcGFyYW0ge2FueX0gICAgICAgICB2YWx1ZSAgICAgICAgICAgdmFsdWUgdGhhdCBtdXN0IGJlIHNldCwgdW5kZWZpbmVkIG9yIG51bGwgaWZcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGluZywgd2lsbCBiZSBmbGF0dGVuZWRcbiAqIEBwYXJhbSB7UmVjb3JkSlNPTn0gIHNlbGVjdGVkUmVjb3JkICBpZiB2YWx1ZSBpcyByZWZlcmVuY2UgSUQsIHRoaXMgbXVzdCBiZSBhIHJlY29yZFxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0J3MgcmVmZXJlbmNpbmcgdG9cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCB1cGRhdGVSZWNvcmQgPSAoXG4gIHByb3BlcnR5OiBzdHJpbmcsXG4gIHZhbHVlOiBhbnksXG4gIHNlbGVjdGVkUmVjb3JkPzogUmVjb3JkSlNPTixcbikgPT4gKHByZXZpb3VzUmVjb3JkOiBSZWNvcmRKU09OKTogUmVjb3JkSlNPTiA9PiB7XG4gIGxldCBwb3B1bGF0ZWRNb2RpZmllZCA9IGZhbHNlXG4gIGNvbnN0IHBvcHVsYXRlZENvcHkgPSB7IC4uLnByZXZpb3VzUmVjb3JkLnBvcHVsYXRlZCB9XG4gIGNvbnN0IHBhcmFtc0NvcHkgPSBmbGF0LnNldChwcmV2aW91c1JlY29yZC5wYXJhbXMsIHByb3BlcnR5LCB2YWx1ZSlcblxuICBpZiAocHJvcGVydHkgaW4gcG9wdWxhdGVkQ29weSkge1xuICAgIGRlbGV0ZSBwb3B1bGF0ZWRDb3B5W3Byb3BlcnR5XVxuICAgIHBvcHVsYXRlZE1vZGlmaWVkID0gdHJ1ZVxuICB9XG5cbiAgaWYgKHNlbGVjdGVkUmVjb3JkKSB7XG4gICAgcG9wdWxhdGVkQ29weVtwcm9wZXJ0eV0gPSBzZWxlY3RlZFJlY29yZFxuICAgIHBvcHVsYXRlZE1vZGlmaWVkID0gdHJ1ZVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5wcmV2aW91c1JlY29yZCxcbiAgICBwYXJhbXM6IHBhcmFtc0NvcHksXG4gICAgcG9wdWxhdGVkOiBwb3B1bGF0ZWRNb2RpZmllZCA/IHBvcHVsYXRlZENvcHkgOiBwcmV2aW91c1JlY29yZC5wb3B1bGF0ZWQsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXBkYXRlUmVjb3JkXG4iLCJpbXBvcnQgeyBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcblxuY29uc3QgaXNFbnRpcmVSZWNvcmRHaXZlbiA9IChcbiAgcHJvcGVydHlPclJlY29yZDogUmVjb3JkSlNPTiB8IHN0cmluZyxcbiAgdmFsdWU/OiBzdHJpbmcsXG4pOiBib29sZWFuID0+ICEhKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCdcbiAgICAvLyB1c2VyIGNhbiBwYXNzIHByb3BlcnR5IGFuZCBvbWl0IHZhbHVlLiBUaGlzIG1ha2VzIHNlbnNlIHdoZW5cbiAgICAvLyB0aGlyZCBhcmd1bWVudCBvZiB0aGUgZnVuY3Rpb24gKHNlbGVjdGVkUmVjb3JkKSBpcyBwYXNzZWQgdG8gb25DaGFuZ2VcbiAgICAvLyBjYWxsYmFja1xuICAgICYmICEodHlwZW9mIHByb3BlcnR5T3JSZWNvcmQgPT09ICdzdHJpbmcnKVxuICAgIC8vIHdlIGFzc3VtZSB0aGF0IG9ubHkgcGFyYW1zIGhhcyB0byBiZSBnaXZlblxuICAgICYmIHByb3BlcnR5T3JSZWNvcmQucGFyYW1zKVxuXG5leHBvcnQge1xuICBpc0VudGlyZVJlY29yZEdpdmVuIGFzIGRlZmF1bHQsXG4gIGlzRW50aXJlUmVjb3JkR2l2ZW4sXG59XG4iLCJpbXBvcnQgeyBmbGF0IH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IFVzZVJlY29yZE9wdGlvbnMgfSBmcm9tICcuL3VzZS1yZWNvcmQudHlwZSdcblxuZXhwb3J0IGNvbnN0IGZpbHRlclJlY29yZFBhcmFtcyA9IGZ1bmN0aW9uPFQgZXh0ZW5kcyBSZWNvcmRKU09OPiAoXG4gIHJlY29yZDogVCxcbiAgb3B0aW9uczogVXNlUmVjb3JkT3B0aW9ucyA9IHt9LFxuKTogVCB7XG4gIGlmIChvcHRpb25zLmluY2x1ZGVQYXJhbXMgJiYgcmVjb3JkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnJlY29yZCxcbiAgICAgIHBhcmFtczogZmxhdC5zZWxlY3RQYXJhbXMocmVjb3JkLnBhcmFtcyB8fCB7fSwgb3B0aW9ucy5pbmNsdWRlUGFyYW1zKSxcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlY29yZFxufVxuXG5leHBvcnQgY29uc3QgaXNQcm9wZXJ0eVBlcm1pdHRlZCA9IChwcm9wZXJ0eU5hbWUsIG9wdGlvbnM6IFVzZVJlY29yZE9wdGlvbnMgPSB7fSk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCB7IGluY2x1ZGVQYXJhbXMgfSA9IG9wdGlvbnNcbiAgaWYgKGluY2x1ZGVQYXJhbXMpIHtcbiAgICBjb25zdCBwYXJ0cyA9IGZsYXQucGF0aFRvUGFydHMocHJvcGVydHlOYW1lLCB7IHNraXBBcnJheUluZGV4ZXM6IHRydWUgfSlcbiAgICByZXR1cm4gcGFydHMuc29tZShwYXJ0ID0+IGluY2x1ZGVQYXJhbXMuaW5jbHVkZXMocGFydCkpXG4gIH1cbiAgcmV0dXJuIHRydWVcbn1cbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgQXBpQ2xpZW50LCB7IFJlY29yZEFjdGlvbkFQSVBhcmFtcyB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS1jbGllbnQnXG5pbXBvcnQgeyBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IHBhcmFtc1RvRm9ybURhdGEgfSBmcm9tICcuL3BhcmFtcy10by1mb3JtLWRhdGEnXG5pbXBvcnQgdXNlTm90aWNlIGZyb20gJy4uL3VzZS1ub3RpY2UnXG5pbXBvcnQgeyBSZWNvcmRBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvYWN0aW9ucy9hY3Rpb24uaW50ZXJmYWNlJ1xuaW1wb3J0IG1lcmdlUmVjb3JkUmVzcG9uc2UgZnJvbSAnLi9tZXJnZS1yZWNvcmQtcmVzcG9uc2UnXG5pbXBvcnQgdXBkYXRlUmVjb3JkIGZyb20gJy4vdXBkYXRlLXJlY29yZCdcbmltcG9ydCB7IFVzZVJlY29yZE9wdGlvbnMsIFVzZVJlY29yZFJlc3VsdCwgVXNlUmVjb3JkU3VibWl0RnVuY3Rpb24gfSBmcm9tICcuL3VzZS1yZWNvcmQudHlwZSdcbmltcG9ydCBpc0VudGlyZVJlY29yZEdpdmVuIGZyb20gJy4vaXMtZW50aXJlLXJlY29yZC1naXZlbidcbmltcG9ydCB7IGZpbHRlclJlY29yZFBhcmFtcywgaXNQcm9wZXJ0eVBlcm1pdHRlZCB9IGZyb20gJy4vZmlsdGVyLXJlY29yZCdcbmltcG9ydCB7IGZsYXQgfSBmcm9tICcuLi8uLi8uLi91dGlscydcblxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXG5cbi8qKlxuICogQGxvYWQgLi91c2UtcmVjb3JkLmRvYy5tZFxuICogQHN1YmNhdGVnb3J5IEhvb2tzXG4gKiBAY2xhc3NcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqIEBidW5kbGVcbiAqIEBwYXJhbSB7UmVjb3JkSlNPTn0gW2luaXRpYWxSZWNvcmRdLFxuICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSWRcbiAqIEBwYXJhbSB7VXNlUmVjb3JkT3B0aW9uc30gW29wdGlvbnNdXG4gKiBAcmV0dXJuIHtVc2VSZWNvcmRSZXN1bHR9XG4gKi9cbmV4cG9ydCBjb25zdCB1c2VSZWNvcmQgPSAoXG4gIGluaXRpYWxSZWNvcmQ6IFJlY29yZEpTT04gfCB1bmRlZmluZWQsXG4gIHJlc291cmNlSWQ6IHN0cmluZyxcbiAgb3B0aW9ucz86IFVzZVJlY29yZE9wdGlvbnMsXG4pOiBVc2VSZWNvcmRSZXN1bHQgPT4ge1xuICAvLyBzZXR0aW5nIHVwIHN0YXRlXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNTeW5jZWQsIHNldElzU3luY2VkXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBmaWx0ZXJlZFJlY29yZCA9IGluaXRpYWxSZWNvcmQgPyBmaWx0ZXJSZWNvcmRQYXJhbXMoaW5pdGlhbFJlY29yZCwgb3B0aW9ucykgOiBudWxsXG5cbiAgY29uc3QgW3JlY29yZCwgc2V0UmVjb3JkXSA9IHVzZVN0YXRlPFJlY29yZEpTT04+KHtcbiAgICAuLi5maWx0ZXJlZFJlY29yZCxcbiAgICBwYXJhbXM6IGZpbHRlcmVkUmVjb3JkPy5wYXJhbXMgPz8ge30sXG4gICAgZXJyb3JzOiBpbml0aWFsUmVjb3JkPy5lcnJvcnMgPz8ge30sXG4gICAgcG9wdWxhdGVkOiBpbml0aWFsUmVjb3JkPy5wb3B1bGF0ZWQgPz8ge30sXG4gIH0gYXMgUmVjb3JkSlNPTilcblxuICAvLyBpdCBrZWVwcyB0aGUgc2FtZSBmb3JtYXQgYXMgdXNlU3RhdGUgZnVuY3Rpb24gd2hpY2ggY2FuIHRha2UgZWl0aGVyIHZhbHVlIG9yIGZ1bmN0aW9uXG4gIGNvbnN0IHNldEZpbHRlcmVkUmVjb3JkOiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxSZWNvcmRKU09OPj4gPSB1c2VDYWxsYmFjaygodmFsdWUpID0+IHtcbiAgICBjb25zdCBuZXdSZWNvcmQgPSB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gdmFsdWUocmVjb3JkKSA6IHZhbHVlXG4gICAgc2V0UmVjb3JkKGZpbHRlclJlY29yZFBhcmFtcyhuZXdSZWNvcmQsIG9wdGlvbnMpKVxuICB9LCBbb3B0aW9ucywgcmVjb3JkXSlcblxuICBjb25zdCBvbk5vdGljZSA9IHVzZU5vdGljZSgpXG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gdXNlQ2FsbGJhY2soKFxuICAgIHByb3BlcnR5T3JSZWNvcmQ6IFJlY29yZEpTT04gfCBzdHJpbmcsXG4gICAgdmFsdWU/OiBhbnksXG4gICAgaW5jb21pbmdSZWNvcmQ/OiBSZWNvcmRKU09OLFxuICApOiB2b2lkID0+IHtcbiAgICBpZiAoaXNFbnRpcmVSZWNvcmRHaXZlbihwcm9wZXJ0eU9yUmVjb3JkLCB2YWx1ZSkpIHtcbiAgICAgIHNldEZpbHRlcmVkUmVjb3JkKHByb3BlcnR5T3JSZWNvcmQgYXMgUmVjb3JkSlNPTilcbiAgICB9IGVsc2UgaWYgKGlzUHJvcGVydHlQZXJtaXR0ZWQocHJvcGVydHlPclJlY29yZCBhcyBzdHJpbmcsIG9wdGlvbnMpKSB7XG4gICAgICBzZXRSZWNvcmQodXBkYXRlUmVjb3JkKHByb3BlcnR5T3JSZWNvcmQgYXMgc3RyaW5nLCB2YWx1ZSwgaW5jb21pbmdSZWNvcmQpKVxuICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oW1xuICAgICAgICBgWW91IGFyZSB0cnlpbmcgdG8gc2V0IHByb3BlcnR5OiBcIiR7cHJvcGVydHlPclJlY29yZCBhcyBzdHJpbmd9XCIgd2hpY2hgLFxuICAgICAgICAnaXMgbm90IHBlcm1pdHRlZC4gVGFrZSBhIGxvb2sgYXQgYHVzZVJlY29yZCguLi4sIHsgaW5jbHVkZVBhcmFtczogWy4uLl19KWAnLFxuICAgICAgXS5qb2luKCdcXG4nKSlcbiAgICB9XG4gICAgc2V0SXNTeW5jZWQoZmFsc2UpXG4gIH0sIFtzZXRSZWNvcmQsIG9wdGlvbnNdKVxuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdDogVXNlUmVjb3JkU3VibWl0RnVuY3Rpb24gPSB1c2VDYWxsYmFjaygoXG4gICAgY3VzdG9tUGFyYW1zID0ge30sIHN1Ym1pdE9wdGlvbnMsXG4gICk6IFByb21pc2U8QXhpb3NSZXNwb25zZTxSZWNvcmRBY3Rpb25SZXNwb25zZT4+ID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG5cbiAgICBjb25zdCBtZXJnZWRQYXJhbXMgPSBmbGF0Lm1lcmdlKHJlY29yZC5wYXJhbXMsIGN1c3RvbVBhcmFtcylcbiAgICBjb25zdCBmb3JtRGF0YSA9IHBhcmFtc1RvRm9ybURhdGEobWVyZ2VkUGFyYW1zKVxuXG4gICAgY29uc3QgcGFyYW1zOiBPbWl0PFJlY29yZEFjdGlvbkFQSVBhcmFtcywgJ2FjdGlvbk5hbWUnIHwgJ3JlY29yZElkJz4gPSB7XG4gICAgICByZXNvdXJjZUlkLFxuICAgICAgb25VcGxvYWRQcm9ncmVzczogKGUpOiB2b2lkID0+IHNldFByb2dyZXNzKE1hdGgucm91bmQoKGUubG9hZGVkICogMTAwKSAvIGUudG90YWwpKSxcbiAgICAgIGRhdGE6IGZvcm1EYXRhLFxuICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnIH0sXG4gICAgfVxuXG4gICAgY29uc3QgcHJvbWlzZSA9IHJlY29yZC5pZFxuICAgICAgPyBhcGkucmVjb3JkQWN0aW9uKHtcbiAgICAgICAgLi4ucGFyYW1zLFxuICAgICAgICBhY3Rpb25OYW1lOiAnZWRpdCcsXG4gICAgICAgIHJlY29yZElkOiByZWNvcmQuaWQsXG4gICAgICB9KVxuICAgICAgOiBhcGkucmVzb3VyY2VBY3Rpb24oe1xuICAgICAgICAuLi5wYXJhbXMsXG4gICAgICAgIGFjdGlvbk5hbWU6ICduZXcnLFxuICAgICAgfSkgYXMgUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPFJlY29yZEFjdGlvblJlc3BvbnNlPj5cblxuICAgIHByb21pc2UudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLm5vdGljZSkge1xuICAgICAgICBvbk5vdGljZShyZXNwb25zZS5kYXRhLm5vdGljZSlcbiAgICAgIH1cbiAgICAgIGlmIChzdWJtaXRPcHRpb25zPy51cGRhdGVPblNhdmUgIT09IGZhbHNlKSB7XG4gICAgICAgIHNldEZpbHRlcmVkUmVjb3JkKHByZXYgPT4gbWVyZ2VSZWNvcmRSZXNwb25zZShwcmV2LCByZXNwb25zZS5kYXRhKSlcbiAgICAgIH1cbiAgICAgIHNldFByb2dyZXNzKDApXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgc2V0SXNTeW5jZWQodHJ1ZSlcbiAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICBvbk5vdGljZSh7XG4gICAgICAgIG1lc3NhZ2U6XG4gICAgICAgICdUaGVyZSB3YXMgYW4gZXJyb3IgdXBkYXRpbmcgcmVjb3JkLCBDaGVjayBvdXQgY29uc29sZSB0byBzZWUgbW9yZSBpbmZvcm1hdGlvbi4nLFxuICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgfSlcbiAgICAgIHNldFByb2dyZXNzKDApXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH0pXG4gICAgcmV0dXJuIHByb21pc2VcbiAgfSwgW3JlY29yZCwgcmVzb3VyY2VJZCwgc2V0TG9hZGluZywgc2V0UHJvZ3Jlc3MsIHNldFJlY29yZF0pXG5cbiAgcmV0dXJuIHtcbiAgICByZWNvcmQsXG4gICAgaGFuZGxlQ2hhbmdlLFxuICAgIHN1Ym1pdDogaGFuZGxlU3VibWl0LFxuICAgIGxvYWRpbmcsXG4gICAgcHJvZ3Jlc3MsXG4gICAgc2V0UmVjb3JkOiBzZXRGaWx0ZXJlZFJlY29yZCxcbiAgICBpc1N5bmNlZCxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VSZWNvcmRcbiIsImltcG9ydCB7IEFjdGlvbkpTT04gfSBmcm9tICcuL2FjdGlvbi1qc29uLmludGVyZmFjZSdcblxuZXhwb3J0IGNvbnN0IGFjdGlvbkhhc0NvbXBvbmVudCA9IChhY3Rpb246IEFjdGlvbkpTT04pOiBib29sZWFuID0+IChcbiAgdHlwZW9mIGFjdGlvbi5jb21wb25lbnQgIT09ICd1bmRlZmluZWQnICYmIGFjdGlvbi5jb21wb25lbnQgPT09IGZhbHNlXG4pXG4iLCJpbXBvcnQgeyBSZWNvcmRBY3Rpb25QYXJhbXMsIFZpZXdIZWxwZXJzIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMnXG5pbXBvcnQgeyBEaWZmZXJlbnRBY3Rpb25QYXJhbXMgfSBmcm9tICcuLi8uLi9ob29rcydcbmltcG9ydCB7IEFjdGlvbkpTT04gfSBmcm9tICcuL2FjdGlvbi1qc29uLmludGVyZmFjZSdcblxuY29uc3QgaCA9IG5ldyBWaWV3SGVscGVycygpXG5cbmV4cG9ydCBjb25zdCBhY3Rpb25IcmVmID0gKFxuICBhY3Rpb246IEFjdGlvbkpTT04sXG4gIHBhcmFtczogRGlmZmVyZW50QWN0aW9uUGFyYW1zLFxuKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gIGNvbnN0IGFjdGlvbk5hbWUgPSBhY3Rpb24ubmFtZVxuXG4gIGlmICghYWN0aW9uLmNvbXBvbmVudCAmJiAhYWN0aW9uLmhhc0hhbmRsZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgaHJlZk1hcCA9IHtcbiAgICByZWNvcmQ6ICgpOiBzdHJpbmcgPT4gaC5yZWNvcmRBY3Rpb25Vcmwoe1xuICAgICAgLi4ucGFyYW1zIGFzIFJlY29yZEFjdGlvblBhcmFtcyxcbiAgICAgIGFjdGlvbk5hbWUsXG4gICAgfSksXG4gICAgcmVzb3VyY2U6ICgpOiBzdHJpbmcgPT4gaC5yZXNvdXJjZUFjdGlvblVybCh7XG4gICAgICByZXNvdXJjZUlkOiBwYXJhbXMucmVzb3VyY2VJZCxcbiAgICAgIGFjdGlvbk5hbWUsXG4gICAgfSksXG4gICAgYnVsazogKCk6IHN0cmluZyA9PiBoLmJ1bGtBY3Rpb25Vcmwoe1xuICAgICAgLi4ucGFyYW1zLFxuICAgICAgYWN0aW9uTmFtZSxcbiAgICB9KSxcbiAgfVxuICBpZiAoaHJlZk1hcFthY3Rpb24uYWN0aW9uVHlwZV0pIHtcbiAgICByZXR1cm4gaHJlZk1hcFthY3Rpb24uYWN0aW9uVHlwZV0oKVxuICB9XG4gIHRocm93IG5ldyBFcnJvcignXCJhY3Rpb25UeXBlXCIgc2hvdWxkIGJlIGVpdGhlciByZWNvcmQsIHJlc291cmNlIG9yIGJ1bGsnKVxufVxuIiwiaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kJ1xuaW1wb3J0IHsgRGlmZmVyZW50QWN0aW9uUGFyYW1zIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgeyBBcGlDbGllbnQgfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IEFjdGlvbkpTT04gfSBmcm9tICcuL2FjdGlvbi1qc29uLmludGVyZmFjZSdcblxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsQWN0aW9uQXBpPEsgZXh0ZW5kcyBBY3Rpb25SZXNwb25zZT4oXG4gIGFjdGlvbjogQWN0aW9uSlNPTixcbiAgcGFyYW1zOiBEaWZmZXJlbnRBY3Rpb25QYXJhbXMsXG4gIHNlYXJjaD86IExvY2F0aW9uWydzZWFyY2gnXSxcbik6IFByb21pc2U8QXhpb3NSZXNwb25zZTxLPj4ge1xuICBsZXQgcHJvbWlzZTogUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPEs+PlxuICBjb25zdCB7IHJlY29yZElkLCByZWNvcmRJZHMsIHJlc291cmNlSWQgfSA9IHBhcmFtc1xuXG4gIHN3aXRjaCAoYWN0aW9uLmFjdGlvblR5cGUpIHtcbiAgY2FzZSAncmVjb3JkJzpcbiAgICBpZiAoIXJlY29yZElkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBoYXZlIHRvIHNwZWNpZnkgXCJyZWNvcmRJZFwiIGZvciByZWNvcmQgYWN0aW9uJylcbiAgICB9XG4gICAgcHJvbWlzZSA9IGFwaS5yZWNvcmRBY3Rpb24oe1xuICAgICAgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZTogYWN0aW9uLm5hbWUsIHJlY29yZElkLCBzZWFyY2gsXG4gICAgfSkgYXMgYW55XG4gICAgYnJlYWtcbiAgY2FzZSAncmVzb3VyY2UnOlxuICAgIHByb21pc2UgPSBhcGkucmVzb3VyY2VBY3Rpb24oe1xuICAgICAgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZTogYWN0aW9uLm5hbWUsXG4gICAgfSkgYXMgYW55XG4gICAgYnJlYWtcbiAgY2FzZSAnYnVsayc6XG4gICAgaWYgKCFyZWNvcmRJZHMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGhhdmUgdG8gc3BlY2lmeSBcInJlY29yZElkc1wiIGZvciBidWxrIGFjdGlvbicpXG4gICAgfVxuICAgIHByb21pc2UgPSBhcGkuYnVsa0FjdGlvbih7XG4gICAgICByZXNvdXJjZUlkLCBhY3Rpb25OYW1lOiBhY3Rpb24ubmFtZSwgcmVjb3JkSWRzLCBzZWFyY2gsXG4gICAgfSkgYXMgYW55XG4gICAgYnJlYWtcbiAgZGVmYXVsdDpcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiYWN0aW9uVHlwZVwiIHNob3VsZCBiZSBlaXRoZXIgcmVjb3JkLCByZXNvdXJjZSBvciBidWxrJylcbiAgfVxuICByZXR1cm4gcHJvbWlzZVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgYXJyb3ctcGFyZW5zICovXG5pbXBvcnQgeyBBeGlvc1Jlc3BvbnNlIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyBBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQnXG5pbXBvcnQgeyBEaWZmZXJlbnRBY3Rpb25QYXJhbXMsIHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuaW1wb3J0IHsgQWN0aW9uSlNPTiB9IGZyb20gJy4vYWN0aW9uLWpzb24uaW50ZXJmYWNlJ1xuaW1wb3J0IHsgY2FsbEFjdGlvbkFwaSB9IGZyb20gJy4vY2FsbC1hY3Rpb24tYXBpJ1xuXG5leHBvcnQgdHlwZSBDYWxsQXBpRnVuY3Rpb248SyBleHRlbmRzIEFjdGlvblJlc3BvbnNlPiA9ICgpID0+IFByb21pc2U8QXhpb3NSZXNwb25zZTxLPj5cblxuZXhwb3J0IHR5cGUgQnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlck9wdGlvbnMgPSB7XG4gIGFjdGlvbjogQWN0aW9uSlNPTjtcbiAgcGFyYW1zOiBEaWZmZXJlbnRBY3Rpb25QYXJhbXM7XG4gIGFjdGlvblJlc3BvbnNlSGFuZGxlcjogUmV0dXJuVHlwZTx0eXBlb2YgdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyPjtcbiAgc2VhcmNoPzogTG9jYXRpb25bJ3NlYXJjaCddO1xufVxuXG5leHBvcnQgY29uc3QgYnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlciA9IDxLPihcbiAgb3B0aW9uczogQnVpbGRBY3Rpb25DYWxsQXBpVHJpZ2dlck9wdGlvbnMsXG4pOiBDYWxsQXBpRnVuY3Rpb248Sz4gPT4ge1xuICBjb25zdCB7IGFjdGlvbiwgcGFyYW1zLCBhY3Rpb25SZXNwb25zZUhhbmRsZXIsIHNlYXJjaCB9ID0gb3B0aW9uc1xuICBjb25zdCBjYWxsQXBpOiBDYWxsQXBpRnVuY3Rpb248Sz4gPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvbWlzZSA9IGNhbGxBY3Rpb25BcGkoYWN0aW9uLCBwYXJhbXMsIHNlYXJjaClcbiAgICBwcm9taXNlLnRoZW4oYWN0aW9uUmVzcG9uc2VIYW5kbGVyKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHRocm93IGVycm9yXG4gICAgfSlcblxuICAgIHJldHVybiBwcm9taXNlIGFzIFByb21pc2U8QXhpb3NSZXNwb25zZTxLPj5cbiAgfVxuICByZXR1cm4gY2FsbEFwaVxufVxuIiwiaW1wb3J0IHsgQWN0aW9uSlNPTiB9IGZyb20gJy4vYWN0aW9uLWpzb24uaW50ZXJmYWNlJ1xuXG5leHBvcnQgY29uc3QgYnVpbGRBY3Rpb25UZXN0SWQgPSAoYWN0aW9uOiBBY3Rpb25KU09OKTogc3RyaW5nID0+IGBhY3Rpb24tJHthY3Rpb24ubmFtZX1gXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLWdsb2JhbHMgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuaW1wb3J0IHsgRGlmZmVyZW50QWN0aW9uUGFyYW1zLCB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXIgfSBmcm9tICcuLi8uLi9ob29rcydcbmltcG9ydCB7IGFjdGlvbkhhc0NvbXBvbmVudCB9IGZyb20gJy4vYWN0aW9uLWhhcy1jb21wb25lbnQnXG5pbXBvcnQgeyBhY3Rpb25IcmVmIH0gZnJvbSAnLi9hY3Rpb24taHJlZidcbmltcG9ydCB7IEFjdGlvbkpTT04gfSBmcm9tICcuL2FjdGlvbi1qc29uLmludGVyZmFjZSdcbmltcG9ydCB7IGJ1aWxkQWN0aW9uQ2FsbEFwaVRyaWdnZXIgfSBmcm9tICcuL2J1aWxkLWFjdGlvbi1hcGktY2FsbC10cmlnZ2VyJ1xuXG5leHBvcnQgdHlwZSBCdWlsZEFjdGlvbkNsaWNrT3B0aW9ucyA9IHtcbiAgICBhY3Rpb246IEFjdGlvbkpTT05cbiAgICBwYXJhbXM6IERpZmZlcmVudEFjdGlvblBhcmFtc1xuICAgIGFjdGlvblJlc3BvbnNlSGFuZGxlcjogUmV0dXJuVHlwZTx0eXBlb2YgdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyPlxuICAgIHB1c2g6IChwYXRoOiBzdHJpbmcsIHN0YXRlPzogYW55KSA9PiB2b2lkXG59XG5cbmV4cG9ydCB0eXBlIEJ1aWxkQWN0aW9uQ2xpY2tSZXR1cm4gPSAoZXZlbnQ6IGFueSkgPT4gYW55XG5cbmV4cG9ydCBjb25zdCBidWlsZEFjdGlvbkNsaWNrSGFuZGxlciA9IChcbiAgICBvcHRpb25zOiBCdWlsZEFjdGlvbkNsaWNrT3B0aW9uc1xuKTogQnVpbGRBY3Rpb25DbGlja1JldHVybiA9PiB7XG4gICAgY29uc3QgeyBhY3Rpb24sIHBhcmFtcywgYWN0aW9uUmVzcG9uc2VIYW5kbGVyLCBwdXNoIH0gPSBvcHRpb25zXG5cbiAgICBjb25zdCBoYW5kbGVBY3Rpb25DbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgICAgIGNvbnN0IGhyZWYgPSBhY3Rpb25IcmVmKGFjdGlvbiwgcGFyYW1zKVxuXG4gICAgICAgIGNvbnN0IGNhbGxBcGkgPSBidWlsZEFjdGlvbkNhbGxBcGlUcmlnZ2VyKHtcbiAgICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICAgIGFjdGlvblJlc3BvbnNlSGFuZGxlcixcbiAgICAgICAgfSlcblxuICAgICAgICBpZiAoYWN0aW9uLmd1YXJkICYmICFjb25maXJtKGFjdGlvbi5ndWFyZCkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChhY3Rpb25IYXNDb21wb25lbnQoYWN0aW9uKSkge1xuICAgICAgICAgICAgY2FsbEFwaSgpXG4gICAgICAgIH0gZWxzZSBpZiAoaHJlZikge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihocmVmKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHVzaChocmVmKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhbmRsZUFjdGlvbkNsaWNrXG59XG4iLCJleHBvcnQgY29uc3QgUkVGUkVTSF9LRVkgPSAncmVmcmVzaCdcblxuLyoqXG4gKiBBZGRzIHJlZnJlc2g9dHJ1ZSB0byB0aGUgdXJsLCB3aGljaCBpbiB0dXJuIHNob3VsZCBjYXVzZSBsaXN0IHRvIHJlbG9hZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsICAgICAgdXJsIHRvIHdoaWNoIGZ1bmN0aW9uIHNob3VsZCBhZGQgYHJlZnJlc2hgXG4gKiBAcGFyYW0ge3N0cmluZ30gW3NlYXJjaF0gb3B0aW9uYWwgc2VhcmNoIHF1ZXJ5IHdoaWNoIHNob3VsZCBiZSB1cGRhdGVkLFxuICogICAgICAgICAgICAgICAgICAgICAgICAgIGlmIG5vdCBnaXZlbiBmdW5jdGlvbiB3aWxsIHVzZSB3aW5kb3cubG9jYXRpb24uc2VhcmNoXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgYXBwZW5kRm9yY2VSZWZyZXNoID0gKHVybDogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBzZWFyY2hQYXJhbXNJZHggPSB1cmwubGFzdEluZGV4T2YoJz8nKVxuICBjb25zdCB1cmxTZWFyY2hQYXJhbXMgPSBzZWFyY2hQYXJhbXNJZHggIT09IC0xXG4gICAgPyB1cmwuc3Vic3RyaW5nKHNlYXJjaFBhcmFtc0lkeCArIDEpXG4gICAgOiBudWxsXG5cbiAgY29uc3Qgb2xkUGFyYW1zID0gc2VhcmNoID8/IHVybFNlYXJjaFBhcmFtcyA/PyB3aW5kb3cubG9jYXRpb24uc2VhcmNoXG4gIGNvbnN0IG5ld1BhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMob2xkUGFyYW1zKVxuXG4gIG5ld1BhcmFtcy5zZXQoUkVGUkVTSF9LRVksICd0cnVlJylcblxuICBjb25zdCBuZXdVcmwgPSBzZWFyY2hQYXJhbXNJZHggIT09IC0xXG4gICAgPyB1cmwuc3Vic3RyaW5nKDAsIHNlYXJjaFBhcmFtc0lkeClcbiAgICA6IHVybFxuXG4gIHJldHVybiBgJHtuZXdVcmx9PyR7bmV3UGFyYW1zLnRvU3RyaW5nKCl9YFxufVxuXG5leHBvcnQgY29uc3QgaGFzRm9yY2VSZWZyZXNoID0gKHNlYXJjaDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKVxuICByZXR1cm4gISFwYXJhbXMuZ2V0KFJFRlJFU0hfS0VZKVxufVxuXG5leHBvcnQgY29uc3QgcmVtb3ZlRm9yY2VSZWZyZXNoID0gKHNlYXJjaDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2gpXG4gIGlmIChwYXJhbXMuZ2V0KFJFRlJFU0hfS0VZKSkge1xuICAgIHBhcmFtcy5kZWxldGUoUkVGUkVTSF9LRVkpXG4gIH1cbiAgcmV0dXJuIHBhcmFtcy50b1N0cmluZygpXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUgKi9cbmltcG9ydCB7IHVzZUhpc3RvcnksIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgQWN0aW9uUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL2FjdGlvbnMvYWN0aW9uLmludGVyZmFjZSdcbmltcG9ydCB7IGFwcGVuZEZvcmNlUmVmcmVzaCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYWN0aW9ucy91dGlscy9hcHBlbmQtZm9yY2UtcmVmcmVzaCdcbmltcG9ydCB7IEFjdGlvbkNhbGxDYWxsYmFjayB9IGZyb20gJy4nXG5pbXBvcnQgeyB1c2VOb3RpY2UgfSBmcm9tICcuLi91c2Utbm90aWNlJ1xuXG5cbmV4cG9ydCBjb25zdCB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXIgPSAob25BY3Rpb25DYWxsPzogQWN0aW9uQ2FsbENhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG4gIGNvbnN0IGFkZE5vdGljZSA9IHVzZU5vdGljZSgpXG5cbiAgcmV0dXJuIChyZXNwb25zZTogQWN0aW9uUmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IHJlc3BvbnNlXG4gICAgaWYgKGRhdGEubm90aWNlKSB7XG4gICAgICBhZGROb3RpY2UoZGF0YS5ub3RpY2UpXG4gICAgfVxuICAgIGlmIChkYXRhLnJlZGlyZWN0VXJsICYmIGxvY2F0aW9uLnBhdGhuYW1lICE9PSBkYXRhLnJlZGlyZWN0VXJsKSB7XG4gICAgICBjb25zdCBhcHBlbmRlZCA9IGFwcGVuZEZvcmNlUmVmcmVzaChkYXRhLnJlZGlyZWN0VXJsKVxuICAgICAgaGlzdG9yeS5wdXNoKGFwcGVuZGVkKVxuICAgIH1cbiAgICBpZiAob25BY3Rpb25DYWxsKSB7XG4gICAgICBvbkFjdGlvbkNhbGwoZGF0YSlcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5cbmltcG9ydCB7IEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2FjdGlvbi5pbnRlcmZhY2UnXG5cbmltcG9ydCB7IEFjdGlvbkpTT04sIGJ1aWxkQWN0aW9uQ2FsbEFwaVRyaWdnZXIsIGJ1aWxkQWN0aW9uQ2xpY2tIYW5kbGVyIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcblxuaW1wb3J0IHsgRGlmZmVyZW50QWN0aW9uUGFyYW1zLCBBY3Rpb25DYWxsQ2FsbGJhY2ssIFVzZUFjdGlvblJlc3VsdCB9IGZyb20gJy4vdXNlLWFjdGlvbi50eXBlcydcbmltcG9ydCB7IGFjdGlvbkhyZWYgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2FjdGlvbi9hY3Rpb24taHJlZidcbmltcG9ydCB7IHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciB9IGZyb20gJy4vdXNlLWFjdGlvbi1yZXNwb25zZS1oYW5kbGVyJ1xuXG4vKipcbiAqIEBsb2FkIC4vdXNlLWFjdGlvbi5kb2MubWRcbiAqIEBzdWJjYXRlZ29yeSBIb29rc1xuICpcbiAqIEBwYXJhbSB7QWN0aW9uSlNPTn0gICBhY3Rpb24gICAgICBhY3Rpb24gb2JqZWN0XG4gKiBAcGFyYW0ge0FjdGlvblBhcmFtc30gcGFyYW1zXG4gKiBAcGFyYW0ge0FjdGlvbkNhbGxDYWxsYmFja30gb25BY3Rpb25DYWxsIC0gY2FsbGJhY2sgdHJpZ2dlcmVkIHdoZW4gYWN0aW9uIGlzIHBlcmZvcm1lZFxuICogQHJldHVybiB7VXNlQWN0aW9uUmVzdWx0fVxuICogQG5ldyBJbiB2ZXJzaW9uIDMuM1xuICogQGNsYXNzXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBY3Rpb248SyBleHRlbmRzIEFjdGlvblJlc3BvbnNlPihcbiAgYWN0aW9uOiBBY3Rpb25KU09OLFxuICBwYXJhbXM6IERpZmZlcmVudEFjdGlvblBhcmFtcyxcbiAgb25BY3Rpb25DYWxsPzogQWN0aW9uQ2FsbENhbGxiYWNrLFxuKTogVXNlQWN0aW9uUmVzdWx0PEs+IHtcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuXG4gIGNvbnN0IGFjdGlvblJlc3BvbnNlSGFuZGxlciA9IHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlcihvbkFjdGlvbkNhbGwpXG5cbiAgY29uc3QgaHJlZiA9IGFjdGlvbkhyZWYoYWN0aW9uLCBwYXJhbXMpXG5cbiAgY29uc3QgY2FsbEFwaSA9IGJ1aWxkQWN0aW9uQ2FsbEFwaVRyaWdnZXI8Sz4oe1xuICAgIGFjdGlvbixcbiAgICBwYXJhbXMsXG4gICAgYWN0aW9uUmVzcG9uc2VIYW5kbGVyLFxuICB9KVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIoe1xuICAgIGFjdGlvbixcbiAgICBwYXJhbXMsXG4gICAgYWN0aW9uUmVzcG9uc2VIYW5kbGVyLFxuICAgIHB1c2g6IGhpc3RvcnkucHVzaCxcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIGhyZWYsXG4gICAgY2FsbEFwaSxcbiAgICBoYW5kbGVDbGljayxcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ3VycmVudEFkbWluIH0gZnJvbSAnLi4vLi4vLi4vY3VycmVudC1hZG1pbi5pbnRlcmZhY2UnXG5cbmV4cG9ydCBjb25zdCBTRVNTSU9OX0lOSVRJQUxJWkUgPSAnU0VTU0lPTl9JTklUSUFMSVpFJ1xuXG5leHBvcnQgdHlwZSBTZXRDdXJyZW50QWRtaW5SZXNwb25zZSA9IHtcbiAgdHlwZTogdHlwZW9mIFNFU1NJT05fSU5JVElBTElaRTtcbiAgZGF0YTogQ3VycmVudEFkbWluIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IHNldEN1cnJlbnRBZG1pbiA9IChkYXRhOiBDdXJyZW50QWRtaW4gfCBudWxsID0gbnVsbCk6IFNldEN1cnJlbnRBZG1pblJlc3BvbnNlID0+ICh7XG4gIHR5cGU6IFNFU1NJT05fSU5JVElBTElaRSxcbiAgZGF0YSxcbn0pXG4iLCJpbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IFJlZHV4U3RhdGUgfSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcbmltcG9ydCB7IHNldEN1cnJlbnRBZG1pbiB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvc2V0LWN1cnJlbnQtYWRtaW4nXG5pbXBvcnQgeyBDdXJyZW50QWRtaW4gfSBmcm9tICcuLi8uLi9jdXJyZW50LWFkbWluLmludGVyZmFjZSdcblxuZXhwb3J0IHR5cGUgVXNlQ3VycmVudEFkbWluUmVzcG9uc2UgPSBbXG4gIEN1cnJlbnRBZG1pbiB8IG51bGwsXG4gIChjdXJyZW50QWRtaW46IEN1cnJlbnRBZG1pbiB8IG51bGwpID0+IEN1cnJlbnRBZG1pbiB8IHt9XG5dXG5cbi8qKlxuICogQGNsYXNzZGVzY1xuICogSG9vayB3aGljaCBhbGxvd3MgeW91IHRvIGdldCBhbmQgc2V0IGN1cnJlbnRBZG1pblxuICpcbiAqICMjIyBVc2FnZVxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGltcG9ydCB7IHVzZUN1cnJlbnRBZG1pbiB9IGZyb20gJ2FkbWluLWJybydcbiAqXG4gKiBjb25zdCBteUNvbXBvbmVudCA9ICgpID0+IHtcbiAqICAgY29uc3QgW2N1cnJlbnRBZG1pbiwgc2V0Q3VycmVudEFkbWluXSA9IHVzZUN1cnJlbnRBZG1pbigpXG4gKiAgIC8vIC4uLlxuICogfVxuICogYGBgXG4gKlxuICogQGNsYXNzXG4gKiBAc3ViY2F0ZWdvcnkgSG9va3NcbiAqIEBidW5kbGVcbiAqIEByZXR1cm5zIHtVc2VDdXJyZW50QWRtaW5SZXNwb25zZX1cbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gdXNlQ3VycmVudEFkbWluKCk6IFVzZUN1cnJlbnRBZG1pblJlc3BvbnNlIHtcbiAgY29uc3QgY3VycmVudEFkbWluID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBSZWR1eFN0YXRlKSA9PiBzdGF0ZS5zZXNzaW9uKVxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgcmV0dXJuIFtcbiAgICBjdXJyZW50QWRtaW4sXG4gICAgKGFkbWluOiBDdXJyZW50QWRtaW4gfCBudWxsKTogYW55ID0+IGRpc3BhdGNoKHNldEN1cnJlbnRBZG1pbihhZG1pbikpLFxuICBdXG59XG5cbmV4cG9ydCB7XG4gIHVzZUN1cnJlbnRBZG1pbixcbiAgdXNlQ3VycmVudEFkbWluIGFzIGRlZmF1bHQsXG59XG5cbi8qKlxuICogUmVzdWx0IG9mIHRoZSB7QGxpbmsgdXNlQ3VycmVudEFkbWlufS5cbiAqIEl0IGlzIGEgdHVwbGUgY29udGFpbmluZyB2YWx1ZSBhbmQgdGhlIHNldHRlclxuICpcbiAqIEB0eXBlZGVmIHtBcnJheX0gVXNlQ3VycmVudEFkbWluUmVzcG9uc2VcbiAqIEBtZW1iZXJvZiB1c2VDdXJyZW50QWRtaW5cbiAqIEBhbGlhcyBVc2VDdXJyZW50QWRtaW5SZXNwb25zZVxuICogQHByb3BlcnR5IHtDdXJyZW50QWRtaW4gfCBudWxsfSBbMF0gICAgY3VycmVudCBhZG1pblxuICogQHByb3BlcnR5IHtSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxDdXJyZW50QWRtaW4+Pn0gWzFdICAgIHZhbHVlIHNldHRlciBjb21wYXRpYmxlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCByZWFjdCB1c2VTdGF0ZVxuICovXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVzZUxvY2FsU3RvcmFnZVJlc3VsdCB9IGZyb20gJy4vdXNlLWxvY2FsLXN0b3JhZ2UtcmVzdWx0LnR5cGUnXG5cbi8qKlxuICogQGxvYWQgLi91c2UtbG9jYWwtc3RvcmFnZS5kb2MubWRcbiAqIEBzdWJjYXRlZ29yeSBIb29rc1xuICogQGNsYXNzXG4gKiBAc2VlIGh0dHBzOi8vdXNlaG9va3MuY29tL3VzZUxvY2FsU3RvcmFnZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgICAgICAgICAga2V5IHVuZGVyIHdoaWNoIGhvb2sgd2lsbCBzdG9yZSB0aGUgZGF0YVxuICogQHBhcmFtIHtUfSAgICAgIGluaXRpYWxWYWx1ZSAgICB2YWx1ZSB3aGljaCB3aWxsIGJlIHN0cmluZ2lmaWVkIGFuZCBzdG9yZWRcbiAqIEByZXR1cm4ge1VzZUxvY2FsU3RvcmFnZVJlc3VsdDxUPn1cbiAqIEBuZXcgSW4gdmVyc2lvbiAzLjNcbiAqIEBidW5kbGVcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUxvY2FsU3RvcmFnZTxUPihrZXk6IHN0cmluZywgaW5pdGlhbFZhbHVlOiBUKTogVXNlTG9jYWxTdG9yYWdlUmVzdWx0PFQ+IHtcbiAgLy8gU3RhdGUgdG8gc3RvcmUgb3VyIHZhbHVlXG4gIC8vIFBhc3MgaW5pdGlhbCBzdGF0ZSBmdW5jdGlvbiB0byB1c2VTdGF0ZSBzbyBsb2dpYyBpcyBvbmx5IGV4ZWN1dGVkIG9uY2VcbiAgY29uc3QgW3N0b3JlZFZhbHVlLCBzZXRTdG9yZWRWYWx1ZV0gPSB1c2VTdGF0ZTxUPigoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIEdldCBmcm9tIGxvY2FsIHN0b3JhZ2UgYnkga2V5XG4gICAgICBjb25zdCBpdGVtID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSlcbiAgICAgIC8vIFBhcnNlIHN0b3JlZCBqc29uIG9yIGlmIG5vbmUgcmV0dXJuIGluaXRpYWxWYWx1ZVxuICAgICAgcmV0dXJuIGl0ZW0gPyBKU09OLnBhcnNlKGl0ZW0pIDogaW5pdGlhbFZhbHVlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIElmIGVycm9yIGFsc28gcmV0dXJuIGluaXRpYWxWYWx1ZVxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICByZXR1cm4gaW5pdGlhbFZhbHVlXG4gICAgfVxuICB9KVxuXG4gIC8vIFJldHVybiBhIHdyYXBwZWQgdmVyc2lvbiBvZiB1c2VTdGF0ZSdzIHNldHRlciBmdW5jdGlvbiB0aGF0IC4uLlxuICAvLyAuLi4gcGVyc2lzdHMgdGhlIG5ldyB2YWx1ZSB0byBsb2NhbFN0b3JhZ2UuXG4gIGNvbnN0IHNldFZhbHVlOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxUPj4gPSAodmFsdWUpID0+IHtcbiAgICB0cnkge1xuICAgICAgLy8gQWxsb3cgdmFsdWUgdG8gYmUgYSBmdW5jdGlvbiBzbyB3ZSBoYXZlIHNhbWUgQVBJIGFzIHVzZVN0YXRlXG4gICAgICBjb25zdCB2YWx1ZVRvU3RvcmUgPSB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gdmFsdWUoc3RvcmVkVmFsdWUpIDogdmFsdWVcbiAgICAgIC8vIFNhdmUgc3RhdGVcbiAgICAgIHNldFN0b3JlZFZhbHVlKHZhbHVlVG9TdG9yZSlcbiAgICAgIC8vIFNhdmUgdG8gbG9jYWwgc3RvcmFnZVxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWVUb1N0b3JlKSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gQSBtb3JlIGFkdmFuY2VkIGltcGxlbWVudGF0aW9uIHdvdWxkIGhhbmRsZSB0aGUgZXJyb3IgY2FzZVxuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFtzdG9yZWRWYWx1ZSwgc2V0VmFsdWVdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUxvY2FsU3RvcmFnZVxuIiwiaW1wb3J0IHsgdXNlSGlzdG9yeSwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuaW1wb3J0IHtcbiAgTmF2aWdhdGlvblByb3BzLFxuICBOYXZpZ2F0aW9uRWxlbWVudFByb3BzLFxuICBOYXZpZ2F0aW9uRWxlbWVudFdpdGhDaGlsZHJlblByb3BzLFxufSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHVzZUxvY2FsU3RvcmFnZSBmcm9tICcuL3VzZS1sb2NhbC1zdG9yYWdlL3VzZS1sb2NhbC1zdG9yYWdlJ1xuXG5jb25zdCBpc1NlbGVjdGVkID0gKGhyZWYsIGxvY2F0aW9uKTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoYCR7aHJlZn0oJHwvKWApXG4gIHJldHVybiAhIWxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKHJlZ0V4cClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZU5hdmlnYXRpb25SZXNvdXJjZXMoXG4gIHJlc291cmNlczogQXJyYXk8UmVzb3VyY2VKU09OPixcbik6IE5hdmlnYXRpb25Qcm9wc1snZWxlbWVudHMnXSB7XG4gIGNvbnN0IFtvcGVuRWxlbWVudHMsIHNldE9wZW5FbGVtZW50c10gPSB1c2VMb2NhbFN0b3JhZ2U8UmVjb3JkPHN0cmluZywgYm9vbGVhbj4+KFxuICAgICdzaWRlYmFyRWxlbWVudHMnLCB7fSxcbiAgKVxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG4gIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuXG4gIGNvbnN0IGVucmljaFJlc291cmNlID0gdXNlTWVtbygoKSA9PiAoXG4gICAgcmVzb3VyY2U6IFJlc291cmNlSlNPTixcbiAgICBpY29uPzogc3RyaW5nLFxuICApOiBOYXZpZ2F0aW9uRWxlbWVudFdpdGhDaGlsZHJlblByb3BzID0+ICh7XG4gICAgaHJlZjogcmVzb3VyY2UuaHJlZiB8fCB1bmRlZmluZWQsXG4gICAgaWNvbixcbiAgICBpc1NlbGVjdGVkOiBpc1NlbGVjdGVkKHJlc291cmNlLmhyZWYsIGxvY2F0aW9uKSxcbiAgICBsYWJlbDogcmVzb3VyY2UubmFtZSxcbiAgICBpZDogcmVzb3VyY2UuaWQsXG4gICAgb25DbGljazogKGV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBpZiAocmVzb3VyY2UuaHJlZikge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGhpc3RvcnkucHVzaChyZXNvdXJjZS5ocmVmKVxuICAgICAgfVxuICAgIH0sXG4gIH0pLCBbbG9jYXRpb24sIGhpc3RvcnldKVxuXG4gIC8vIGdyb3VwaW5nIHJlc291cmNlcyBpbnRvIHBhcmVudHNcbiAgY29uc3QgbWFwID0gcmVzb3VyY2VzXG4gICAgLmZpbHRlcihyZXMgPT4gcmVzLmhyZWYpIC8vIGZpcnN0IGZpbHRlciBvdXQgcmVzb3VyY2Ugd2hpY2ggYXJlIG5vdCB2aXNpYmxlXG4gICAgLnJlZHVjZSgobWVtbywgcmVzb3VyY2UpID0+IHtcbiAgICAgIC8vIGluIGNhc2UgcmVzb3VyY2UgaGFzIHRoZSBzYW1lIG5hbWUgYXMgcGFyZW50IHdlIG5hbWVzcGFjZSBpdCB3aXQgXCJyZXNvdXJjZS1cIlwiXG4gICAgICBjb25zdCBrZXkgPSByZXNvdXJjZS5uYXZpZ2F0aW9uPy5uYW1lIHx8IFsncmVzb3VyY2UnLCByZXNvdXJjZS5uYW1lXS5qb2luKCctJylcblxuICAgICAgaWYgKCFyZXNvdXJjZS5uYXZpZ2F0aW9uIHx8IHJlc291cmNlLm5hdmlnYXRpb24ubmFtZSA9PT0gbnVsbCkge1xuICAgICAgICBtZW1vW2tleV0gPSBlbnJpY2hSZXNvdXJjZShyZXNvdXJjZSwgcmVzb3VyY2UubmF2aWdhdGlvbj8uaWNvbilcbiAgICAgIH0gZWxzZSBpZiAobWVtb1trZXldICYmIG1lbW9ba2V5XS5lbGVtZW50cyAmJiByZXNvdXJjZS5uYXZpZ2F0aW9uPy5uYW1lKSB7XG4gICAgICAgIChtZW1vW2tleV0uZWxlbWVudHMgYXMgQXJyYXk8TmF2aWdhdGlvbkVsZW1lbnRQcm9wcz4pLnB1c2goZW5yaWNoUmVzb3VyY2UocmVzb3VyY2UpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWVtb1trZXldID0ge1xuICAgICAgICAgIGVsZW1lbnRzOiBbZW5yaWNoUmVzb3VyY2UocmVzb3VyY2UpXSxcbiAgICAgICAgICBsYWJlbDogcmVzb3VyY2UubmF2aWdhdGlvbj8ubmFtZSxcbiAgICAgICAgICBpY29uOiByZXNvdXJjZS5uYXZpZ2F0aW9uPy5pY29uLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpOiB2b2lkID0+IHNldE9wZW5FbGVtZW50cyh7XG4gICAgICAgICAgICAuLi5vcGVuRWxlbWVudHMsXG4gICAgICAgICAgICBba2V5XTogIW9wZW5FbGVtZW50c1trZXldLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGlzT3BlbjogISFvcGVuRWxlbWVudHNba2V5XSxcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG1lbW9cbiAgICB9LCB7fSBhcyBSZWNvcmQ8c3RyaW5nLCBOYXZpZ2F0aW9uRWxlbWVudFdpdGhDaGlsZHJlblByb3BzPilcblxuICByZXR1cm4gT2JqZWN0LnZhbHVlcyhtYXApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU5hdmlnYXRpb25SZXNvdXJjZXNcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgQXhpb3NSZXNwb25zZSB9IGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlTG9jYXRpb24sIHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgeyBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB1c2VOb3RpY2UgZnJvbSAnLi4vdXNlLW5vdGljZSdcbmltcG9ydCBBcGlDbGllbnQgZnJvbSAnLi4vLi4vdXRpbHMvYXBpLWNsaWVudCdcbmltcG9ydCB7IExpc3RBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvYWN0aW9ucy9saXN0L2xpc3QtYWN0aW9uJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi91c2UtdHJhbnNsYXRpb24nXG5pbXBvcnQgeyBoYXNGb3JjZVJlZnJlc2gsIHJlbW92ZUZvcmNlUmVmcmVzaCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYWN0aW9ucy91dGlscy9hcHBlbmQtZm9yY2UtcmVmcmVzaCdcbmltcG9ydCB7IFVzZVJlY29yZHNSZXN1bHQgfSBmcm9tICcuL3VzZS1yZWNvcmRzLXJlc3VsdC50eXBlJ1xuXG5jb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcblxuLyoqXG4gKiBAbG9hZCAuL3VzZS1yZWNvcmRzLmRvYy5tZFxuICogQHN1YmNhdGVnb3J5IEhvb2tzXG4gKiBAY2xhc3NcbiAqIEBoaWRlY29uc3RydWN0b3JcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVzb3VyY2VJZCAgICAgIGlkIG9mIGEgcmVzb3VyY2UgZm9yIHdoaWNoIHlvdSB3YW50IHRvIGZldGNoIHJlY29yZHNcbiAqIEByZXR1cm4ge1VzZVJlY29yZHNSZXN1bHR9XG4gKiBAbmV3IEluIHZlcnNpb24gMy4zXG4gKiBAYnVuZGxlXG4gKiBAdHlwZSB7RnVuY3Rpb259XG4gKi9cbmZ1bmN0aW9uIHVzZVJlY29yZHMocmVzb3VyY2VJZDogc3RyaW5nKTogVXNlUmVjb3Jkc1Jlc3VsdCB7XG4gIGNvbnN0IFtyZWNvcmRzLCBzZXRSZWNvcmRzXSA9IHVzZVN0YXRlPEFycmF5PFJlY29yZEpTT04+PihbXSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtwZXJQYWdlLCBzZXRQZXJQYWdlXSA9IHVzZVN0YXRlKDEwKVxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgxKVxuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtkaXJlY3Rpb24sIHNldERpcmVjdGlvbl0gPSB1c2VTdGF0ZTwnYXNjJ3wgJ2Rlc2MnPignYXNjJylcbiAgY29uc3QgW3NvcnRCeSwgc2V0U29ydEJ5XSA9IHVzZVN0YXRlPHN0cmluZyB8IHVuZGVmaW5lZD4oKVxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCBhZGROb3RpY2UgPSB1c2VOb3RpY2UoKVxuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3Qgb25Ob3RpY2UgPSB1c2VOb3RpY2UoKVxuXG4gIGNvbnN0IGZldGNoRGF0YSA9ICgpOiBQcm9taXNlPEF4aW9zUmVzcG9uc2U8TGlzdEFjdGlvblJlc3BvbnNlPj4gPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBjb25zdCBxdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKVxuXG4gICAgY29uc3QgcHJvbWlzZSA9IGFwaS5yZXNvdXJjZUFjdGlvbih7XG4gICAgICBhY3Rpb25OYW1lOiAnbGlzdCcsIHJlc291cmNlSWQsIHBhcmFtczogcXVlcnksXG4gICAgfSkgYXMgUHJvbWlzZTxBeGlvc1Jlc3BvbnNlPExpc3RBY3Rpb25SZXNwb25zZT4+XG5cbiAgICBwcm9taXNlLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBjb25zdCBsaXN0QWN0aW9uUmVzcG9uc2UgPSByZXNwb25zZS5kYXRhIGFzIExpc3RBY3Rpb25SZXNwb25zZVxuICAgICAgaWYgKGxpc3RBY3Rpb25SZXNwb25zZS5ub3RpY2UpIHtcbiAgICAgICAgb25Ob3RpY2UobGlzdEFjdGlvblJlc3BvbnNlLm5vdGljZSlcbiAgICAgIH1cbiAgICAgIGlmIChsaXN0QWN0aW9uUmVzcG9uc2UucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgaGlzdG9yeS5wdXNoKGxpc3RBY3Rpb25SZXNwb25zZS5yZWRpcmVjdFVybClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHNldFJlY29yZHMobGlzdEFjdGlvblJlc3BvbnNlLnJlY29yZHMpXG4gICAgICBzZXRQYWdlKGxpc3RBY3Rpb25SZXNwb25zZS5tZXRhLnBhZ2UpXG4gICAgICBzZXRQZXJQYWdlKGxpc3RBY3Rpb25SZXNwb25zZS5tZXRhLnBlclBhZ2UpXG4gICAgICBzZXRUb3RhbChsaXN0QWN0aW9uUmVzcG9uc2UubWV0YS50b3RhbClcbiAgICAgIHNldERpcmVjdGlvbihsaXN0QWN0aW9uUmVzcG9uc2UubWV0YS5kaXJlY3Rpb24pXG4gICAgICBzZXRTb3J0QnkobGlzdEFjdGlvblJlc3BvbnNlLm1ldGEuc29ydEJ5KVxuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICBhZGROb3RpY2Uoe1xuICAgICAgICBtZXNzYWdlOiB0cmFuc2xhdGVNZXNzYWdlKCdlcnJvckZldGNoaW5nUmVjb3JkcycsIHJlc291cmNlSWQpLFxuICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiBwcm9taXNlXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChoYXNGb3JjZVJlZnJlc2gobG9jYXRpb24uc2VhcmNoKSkge1xuICAgICAgaGlzdG9yeS5yZXBsYWNlKFtcbiAgICAgICAgbG9jYXRpb24ucGF0aG5hbWUsIHJlbW92ZUZvcmNlUmVmcmVzaChsb2NhdGlvbi5zZWFyY2gpLnRvU3RyaW5nKCksXG4gICAgICBdLmpvaW4oJz8nKSlcbiAgICB9IGVsc2Uge1xuICAgICAgZmV0Y2hEYXRhKClcbiAgICB9XG4gIH0sIFtyZXNvdXJjZUlkLCBsb2NhdGlvbi5zZWFyY2hdKVxuXG4gIHJldHVybiB7XG4gICAgcmVjb3JkcyxcbiAgICBsb2FkaW5nLFxuICAgIHBhZ2UsXG4gICAgdG90YWwsXG4gICAgZGlyZWN0aW9uLFxuICAgIHNvcnRCeSxcbiAgICBwZXJQYWdlLFxuICAgIGZldGNoRGF0YSxcbiAgfVxufVxuXG5leHBvcnQge1xuICB1c2VSZWNvcmRzIGFzIGRlZmF1bHQsXG4gIHVzZVJlY29yZHMsXG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBVc2VTZWxlY3RlZFJlY29yZHNSZXN1bHQgfSBmcm9tICcuL3VzZS1zZWxlY3RlZC1yZWNvcmRzLXJlc3VsdC50eXBlJ1xuXG4vKipcbiAqIEBsb2FkIC4vdXNlLXNlbGVjdGVkLXJlY29yZHMuZG9jLm1kXG4gKiBAc3ViY2F0ZWdvcnkgSG9va3NcbiAqIEBjbGFzc1xuICogQGhpZGVjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheTxSZWNvcmRKU09OPn0gcmVjb3JkcyAgICAgTGlzdCBvZiByZWNvcmRzIG9uIHdoaWNoIHlvdSBjYW4gcGVyZm9ybSBgc2VsZWN0YCBhY3Rpb25cbiAqIEByZXR1cm4ge1VzZVNlbGVjdGVkUmVjb3Jkc1Jlc3VsdH1cbiAqIEBuZXcgSW4gdmVyc2lvbiAzLjNcbiAqIEBidW5kbGVcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqL1xuZnVuY3Rpb24gdXNlU2VsZWN0ZWRSZWNvcmRzKHJlY29yZHM6IEFycmF5PFJlY29yZEpTT04+KTogVXNlU2VsZWN0ZWRSZWNvcmRzUmVzdWx0IHtcbiAgY29uc3QgW3NlbGVjdGVkUmVjb3Jkcywgc2V0U2VsZWN0ZWRSZWNvcmRzXSA9IHVzZVN0YXRlPEFycmF5PFJlY29yZEpTT04+PihbXSlcblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAocmVjb3JkOiBSZWNvcmRKU09OKTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHNlbGVjdGVkUmVjb3Jkcy5maW5kSW5kZXgoc2VsZWN0ZWQgPT4gc2VsZWN0ZWQuaWQgPT09IHJlY29yZC5pZClcbiAgICBpZiAoc2VsZWN0ZWRJbmRleCA8IDApIHtcbiAgICAgIHNldFNlbGVjdGVkUmVjb3JkcyhbLi4uc2VsZWN0ZWRSZWNvcmRzLCByZWNvcmRdKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdTZWxlY3RlZFJlY29yZHMgPSBbLi4uc2VsZWN0ZWRSZWNvcmRzXVxuICAgICAgbmV3U2VsZWN0ZWRSZWNvcmRzLnNwbGljZShzZWxlY3RlZEluZGV4LCAxKVxuICAgICAgc2V0U2VsZWN0ZWRSZWNvcmRzKG5ld1NlbGVjdGVkUmVjb3JkcylcbiAgICB9XG4gIH1cblxuICBjb25zdCBoYW5kbGVTZWxlY3RBbGwgPSAoKTogdm9pZCA9PiB7XG4gICAgY29uc3QgbWlzc2luZyA9IHJlY29yZHMuZmlsdGVyKHJlY29yZCA9PiAoXG4gICAgICAhc2VsZWN0ZWRSZWNvcmRzLmZpbmQoc2VsZWN0ZWQgPT4gc2VsZWN0ZWQuaWQgPT09IHJlY29yZC5pZClcbiAgICAgICYmIHJlY29yZC5idWxrQWN0aW9ucy5sZW5ndGhcbiAgICApKVxuICAgIGlmIChtaXNzaW5nLmxlbmd0aCkge1xuICAgICAgc2V0U2VsZWN0ZWRSZWNvcmRzKFsuLi5zZWxlY3RlZFJlY29yZHMsIC4uLm1pc3NpbmddKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdTZWxlY3RlZFJlY29yZHMgPSBzZWxlY3RlZFJlY29yZHMuZmlsdGVyKHNlbGVjdGVkID0+IChcbiAgICAgICAgIXJlY29yZHMuZmluZChyZWNvcmQgPT4gcmVjb3JkLmlkID09PSBzZWxlY3RlZC5pZClcbiAgICAgICkpXG4gICAgICBzZXRTZWxlY3RlZFJlY29yZHMobmV3U2VsZWN0ZWRSZWNvcmRzKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGFuZGxlU2VsZWN0LFxuICAgIGhhbmRsZVNlbGVjdEFsbCxcbiAgICBzZWxlY3RlZFJlY29yZHMsXG4gICAgc2V0U2VsZWN0ZWRSZWNvcmRzLFxuICB9XG59XG5cbmV4cG9ydCB7XG4gIHVzZVNlbGVjdGVkUmVjb3JkcyBhcyBkZWZhdWx0LFxuICB1c2VTZWxlY3RlZFJlY29yZHMsXG59XG4iLCJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgUmVzb3VyY2VKU09OIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9yZXNvdXJjZS1qc29uLmludGVyZmFjZSdcbmltcG9ydCB7IFJlZHV4U3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcblxuLyoqXG4gKiBAbG9hZCAuL3VzZS1yZXNvdXJjZS5kb2MubWRcbiAqIEBzdWJjYXRlZ29yeSBIb29rc1xuICogQGNsYXNzXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKiBAbmV3IGluIHZlcnNpb24gMy4zXG4gKiBAYnVuZGxlXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVzb3VyY2VJZCAgICBJZCBvZiBhIHJlc291cmNlIHlvdSB3YW50IHRvIGdldFxuICovXG5jb25zdCB1c2VSZXNvdXJjZSA9IChyZXNvdXJjZUlkOiBzdHJpbmcpOiBSZXNvdXJjZUpTT04gfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCByZXNvdXJjZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IFJlZHV4U3RhdGUpID0+IHN0YXRlLnJlc291cmNlcylcblxuICBjb25zdCBmb3VuZFJlc291cmNlID0gcmVzb3VyY2VzLmZpbmQocmVzb3VyY2UgPT4gcmVzb3VyY2UuaWQgPT09IHJlc291cmNlSWQpXG5cbiAgcmV0dXJuIGZvdW5kUmVzb3VyY2Vcbn1cblxuZXhwb3J0IHtcbiAgdXNlUmVzb3VyY2UgYXMgZGVmYXVsdCxcbiAgdXNlUmVzb3VyY2UsXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5hdmlnYXRpb24gfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2hvb2tzL3VzZS10cmFuc2xhdGlvbidcbmltcG9ydCB7IFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgYWxsb3dPdmVycmlkZSBmcm9tICcuLi8uLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUnXG5pbXBvcnQgeyB1c2VOYXZpZ2F0aW9uUmVzb3VyY2VzIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MnXG5cbi8qKlxuICogQGFsaWFzIFNpZGViYXJSZXNvdXJjZVNlY3Rpb25Qcm9wc1xuICogQG1lbWJlcm9mIFNpZGViYXJSZXNvdXJjZVNlY3Rpb25cbiAqL1xuZXhwb3J0IHR5cGUgU2lkZWJhclJlc291cmNlU2VjdGlvblByb3BzID0ge1xuICAvKiogTGlzdCBvZiB0aGUgcmVzb3VyY2VzIHdoaWNoIHNob3VsZCBiZSByZW5kZXJlZCAqL1xuICByZXNvdXJjZXM6IEFycmF5PFJlc291cmNlSlNPTj47XG59XG5cbi8qKlxuICogR3JvdXBzIHJlc291cmNlcyBieSBzZWN0aW9ucyBhbmQgcmVuZGVycyB0aGUgbGlzdCBpbiB7QGxpbmsgU2lkZWJhcn1cbiAqXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IFNpZGViYXJSZXNvdXJjZVNlY3Rpb24gfSBmcm9tICdhZG1pbi1icm9gXG4gKiBgYGBcbiAqXG4gKiBAY29tcG9uZW50XG4gKiBAc3ViY2F0ZWdvcnkgQXBwbGljYXRpb25cbiAqIEBuYW1lIFNpZGViYXJSZXNvdXJjZVNlY3Rpb25cbiAqL1xuY29uc3QgU2lkZWJhclJlc291cmNlU2VjdGlvbk9yaWdpbmFsOiBGQzxTaWRlYmFyUmVzb3VyY2VTZWN0aW9uUHJvcHM+ID0gKHsgcmVzb3VyY2VzIH0pID0+IHtcbiAgY29uc3QgZWxlbWVudHMgPSB1c2VOYXZpZ2F0aW9uUmVzb3VyY2VzKHJlc291cmNlcylcblxuICBjb25zdCB7IHRyYW5zbGF0ZUxhYmVsIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgcmV0dXJuIChcbiAgICA8TmF2aWdhdGlvblxuICAgICAgbGFiZWw9e3RyYW5zbGF0ZUxhYmVsKCduYXZpZ2F0aW9uJyl9XG4gICAgICBlbGVtZW50cz17ZWxlbWVudHN9XG4gICAgLz5cbiAgKVxufVxuXG4vLyBSb2xsdXAgY2Fubm90IGhhbmRsZSB0eXBlIGV4cG9ydHMgd2VsbCAtIHRoYXQgaXMgd2h5IHdlIG5lZWQgdG8gZG8gdGhpcyBoYWNrIHdpdGhcbi8vIGV4cG9ydGluZyBkZWZhdWx0IGFuZCBuYW1lZCBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uXG5jb25zdCBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uID0gYWxsb3dPdmVycmlkZShTaWRlYmFyUmVzb3VyY2VTZWN0aW9uT3JpZ2luYWwsICdTaWRlYmFyUmVzb3VyY2VTZWN0aW9uJylcblxuZXhwb3J0IHsgU2lkZWJhclJlc291cmNlU2VjdGlvbiB9XG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCB7IEJveCwgY3NzQ2xhc3MsIHRoZW1lR2V0IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBCcmFuZGluZ09wdGlvbnMgfSBmcm9tICdzcmMvYWRtaW4tYnJvLW9wdGlvbnMuaW50ZXJmYWNlJ1xuaW1wb3J0IHsgUmVzb3VyY2VKU09OLCBQYWdlSlNPTiB9IGZyb20gJ3NyYy9mcm9udGVuZC9pbnRlcmZhY2VzJ1xuaW1wb3J0IFNpZGViYXJCcmFuZGluZyBmcm9tICcuL3NpZGViYXItYnJhbmRpbmcnXG5pbXBvcnQgU2lkZWJhclBhZ2VzIGZyb20gJy4vc2lkZWJhci1wYWdlcydcbmltcG9ydCB7IFJlZHV4U3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zdG9yZSdcbmltcG9ydCBTaWRlYmFyRm9vdGVyIGZyb20gJy4vc2lkZWJhci1mb290ZXInXG5cbmltcG9ydCBTaWRlYmFyUmVzb3VyY2VTZWN0aW9uIGZyb20gJy4vc2lkZWJhci1yZXNvdXJjZS1zZWN0aW9uJ1xuXG50eXBlIFByb3BzID0ge1xuICBpc1Zpc2libGU6IGJvb2xlYW47XG59XG5cbmNvbnN0IFN0eWxlZFNpZGViYXIgPSBzdHlsZWQoQm94KWBcbiAgdHJhbnNpdGlvbjogbGVmdCAwLjNzO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgJi5oaWRkZW4ge1xuICAgIGxlZnQ6IC0ke3RoZW1lR2V0KCdzaXplcycsICdzaWRlYmFyV2lkdGgnKX07XG4gIH1cbiAgJi52aXNpYmxlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG5gXG5cblN0eWxlZFNpZGViYXIuZGVmYXVsdFByb3BzID0ge1xuICBwb3NpdGlvbjogWydhYnNvbHV0ZScsICdhYnNvbHV0ZScsICdhYnNvbHV0ZScsICdhYnNvbHV0ZScsICdpbmhlcml0J10sXG4gIHdpZHRoOiAnc2lkZWJhcldpZHRoJyxcbiAgYm9yZGVyUmlnaHQ6ICdkZWZhdWx0JyxcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcbiAgekluZGV4OiA1MCxcbiAgYmc6ICd3aGl0ZScsXG59XG5cbmNvbnN0IFNpZGViYXI6IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGlzVmlzaWJsZSB9ID0gcHJvcHNcbiAgY29uc3QgW2JyYW5kaW5nLCByZXNvdXJjZXMsIHBhZ2VzXTogW0JyYW5kaW5nT3B0aW9ucywgUmVzb3VyY2VKU09OW10sIFBhZ2VKU09OW11dID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0YXRlOiBSZWR1eFN0YXRlKSA9PiBbXG4gICAgICBzdGF0ZS5icmFuZGluZywgc3RhdGUucmVzb3VyY2VzLCBzdGF0ZS5wYWdlcyxcbiAgICBdLFxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkU2lkZWJhclxuICAgICAgY2xhc3NOYW1lPXtpc1Zpc2libGUgPyAndmlzaWJsZScgOiAnaGlkZGVuJ31cbiAgICA+XG4gICAgICA8U2lkZWJhckJyYW5kaW5nIGJyYW5kaW5nPXticmFuZGluZ30gLz5cbiAgICAgIDxCb3ggZmxleEdyb3c9ezF9IGNsYXNzTmFtZT17Y3NzQ2xhc3MoJ1Jlc291cmNlcycpfT5cbiAgICAgICAgPFNpZGViYXJSZXNvdXJjZVNlY3Rpb24gcmVzb3VyY2VzPXtyZXNvdXJjZXN9IC8+XG4gICAgICA8L0JveD5cbiAgICAgIDxTaWRlYmFyUGFnZXMgcGFnZXM9e3BhZ2VzfSAvPlxuICAgICAge2JyYW5kaW5nPy5zb2Z0d2FyZUJyb3RoZXJzICYmIDxTaWRlYmFyRm9vdGVyIC8+fVxuICAgIDwvU3R5bGVkU2lkZWJhcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDdXJyZW50VXNlck5hdiwgQm94LCBDdXJyZW50VXNlck5hdlByb3BzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBDdXJyZW50QWRtaW4gfSBmcm9tICcuLi8uLi8uLi9jdXJyZW50LWFkbWluLmludGVyZmFjZSdcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgYWxsb3dPdmVycmlkZSBmcm9tICcuLi8uLi9ob2MvYWxsb3ctb3ZlcnJpZGUnXG5cbmV4cG9ydCB0eXBlIExvZ2dlZEluUHJvcHMgPSB7XG4gIHNlc3Npb246IEN1cnJlbnRBZG1pbjtcbiAgcGF0aHM6IHtcbiAgICBsb2dvdXRQYXRoOiBzdHJpbmc7XG4gIH07XG59XG5cbmNvbnN0IExvZ2dlZEluOiBSZWFjdC5GQzxMb2dnZWRJblByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHNlc3Npb24sIHBhdGhzIH0gPSBwcm9wc1xuICBjb25zdCB7IHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gIGNvbnN0IGRyb3BBY3Rpb25zOiBDdXJyZW50VXNlck5hdlByb3BzWydkcm9wQWN0aW9ucyddID0gW3tcbiAgICBsYWJlbDogdHJhbnNsYXRlQnV0dG9uKCdsb2dvdXQnKSxcbiAgICBvbkNsaWNrOiAoZXZlbnQ6IEV2ZW50KTogdm9pZCA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHBhdGhzLmxvZ291dFBhdGhcbiAgICB9LFxuICAgIGljb246ICdMb2dvdXQnLFxuICB9XVxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleFNocmluaz17MH0+XG4gICAgICA8Q3VycmVudFVzZXJOYXZcbiAgICAgICAgbmFtZT17c2Vzc2lvbi5lbWFpbH1cbiAgICAgICAgdGl0bGU9e3Nlc3Npb24udGl0bGV9XG4gICAgICAgIGF2YXRhclVybD17c2Vzc2lvbi5hdmF0YXJVcmx9XG4gICAgICAgIGRyb3BBY3Rpb25zPXtkcm9wQWN0aW9uc31cbiAgICAgIC8+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuY29uc3QgT3ZlcnJpZGFibGVMb2dnZWRJbiA9IGFsbG93T3ZlcnJpZGUoTG9nZ2VkSW4sICdMb2dnZWRJbicpXG5cbmV4cG9ydCB7XG4gIE92ZXJyaWRhYmxlTG9nZ2VkSW4gYXMgZGVmYXVsdCxcbiAgT3ZlcnJpZGFibGVMb2dnZWRJbiBhcyBMb2dnZWRJbixcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBjc3NDbGFzcywgVGV4dCwgQm94IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBWZXJzaW9uUHJvcHMgfSBmcm9tICcuLi8uLi8uLi9hZG1pbi1icm8tb3B0aW9ucy5pbnRlcmZhY2UnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuXG5leHBvcnQgdHlwZSBQcm9wcyA9IHtcbiAgdmVyc2lvbnM6IFZlcnNpb25Qcm9wcztcbn1cblxuY29uc3QgVmVyc2lvbkl0ZW0gPSBzdHlsZWQoVGV4dClgXG4gIHBhZGRpbmc6IDEycHggMjRweCAxMnB4IDA7XG5gXG5cblZlcnNpb25JdGVtLmRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzcGxheTogWydub25lJywgJ2Jsb2NrJ10sXG4gIGNvbG9yOiAnZ3JleTEwMCcsXG59XG5cbmV4cG9ydCBjb25zdCBWZXJzaW9uOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB2ZXJzaW9ucyB9ID0gcHJvcHNcbiAgY29uc3QgeyBhZG1pbiwgYXBwIH0gPSB2ZXJzaW9uc1xuXG4gIGNvbnN0IHsgdHJhbnNsYXRlTGFiZWwgfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICByZXR1cm4gKFxuICAgIDxCb3ggZmxleCBmbGV4R3Jvdz17MX0gcHk9XCJkZWZhdWx0XCIgcHg9XCJ4eGxcIiBjbGFzc05hbWU9e2Nzc0NsYXNzKCdWZXJzaW9uJyl9PlxuICAgICAge2FkbWluICYmIChcbiAgICAgICAgPFZlcnNpb25JdGVtPlxuICAgICAgICAgIHt0cmFuc2xhdGVMYWJlbCgnYWRtaW5WZXJzaW9uJywgeyB2ZXJzaW9uOiBhZG1pbiB9KX1cbiAgICAgICAgPC9WZXJzaW9uSXRlbT5cbiAgICAgICl9XG4gICAgICB7YXBwICYmIChcbiAgICAgICAgPFZlcnNpb25JdGVtPlxuICAgICAgICAgIHt0cmFuc2xhdGVMYWJlbCgnYXBwVmVyc2lvbicsIHsgdmVyc2lvbjogYXBwIH0pfVxuICAgICAgICA8L1ZlcnNpb25JdGVtPlxuICAgICAgKX1cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBWZXJzaW9uXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IGNzc0NsYXNzLCBCb3gsIEljb24sIHRoZW1lR2V0IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgTG9nZ2VkSW4gZnJvbSAnLi9sb2dnZWQtaW4nXG5pbXBvcnQgVmVyc2lvbiBmcm9tICcuL3ZlcnNpb24nXG5cbmltcG9ydCB7IFJlZHV4U3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcblxuXG5jb25zdCBOYXZCYXIgPSBzdHlsZWQoQm94KWBcbiAgaGVpZ2h0OiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuc2l6ZXMubmF2YmFySGVpZ2h0fTtcbiAgYm9yZGVyLWJvdHRvbTogJHt0aGVtZUdldCgnYm9yZGVycycsICdkZWZhdWx0Jyl9O1xuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC1zaHJpbms6IDA7XG5gXG5cbk5hdkJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGNsYXNzTmFtZTogY3NzQ2xhc3MoJ05hdkJhcicpLFxufVxuXG50eXBlIFByb3BzID0ge1xuICB0b2dnbGVTaWRlYmFyOiAoYW55KSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgVG9wQmFyOiBSZWFjdC5GQzxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyB0b2dnbGVTaWRlYmFyIH0gPSBwcm9wc1xuICBjb25zdCBbc2Vzc2lvbiwgcGF0aHMsIHZlcnNpb25zXSA9IHVzZVNlbGVjdG9yKFxuICAgIChzdGF0ZTogUmVkdXhTdGF0ZSkgPT4gW3N0YXRlLnNlc3Npb24sIHN0YXRlLnBhdGhzLCBzdGF0ZS52ZXJzaW9uc10sXG4gIClcbiAgcmV0dXJuIChcbiAgICA8TmF2QmFyPlxuICAgICAgPEJveFxuICAgICAgICBweT1cImxnXCJcbiAgICAgICAgcHg9e1snZGVmYXVsdCcsICdsZyddfVxuICAgICAgICBvbkNsaWNrPXt0b2dnbGVTaWRlYmFyfVxuICAgICAgICBkaXNwbGF5PXtbJ2Jsb2NrJywgJ2Jsb2NrJywgJ2Jsb2NrJywgJ2Jsb2NrJywgJ25vbmUnXX1cbiAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgID5cbiAgICAgICAgPEljb24gaWNvbj1cIk1lbnVcIiBzaXplPXszMn0gY29sb3I9XCJncmV5MTAwXCIgLz5cbiAgICAgIDwvQm94PlxuICAgICAgPFZlcnNpb24gdmVyc2lvbnM9e3ZlcnNpb25zfSAvPlxuICAgICAge3Nlc3Npb24gJiYgc2Vzc2lvbi5lbWFpbCA/IDxMb2dnZWRJbiBzZXNzaW9uPXtzZXNzaW9ufSBwYXRocz17cGF0aHN9IC8+IDogJyd9XG4gICAgPC9OYXZCYXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyXG4iLCJleHBvcnQgY29uc3QgRFJPUF9OT1RJQ0UgPSAnRFJPUF9OT1RJQ0UnXG5cbmV4cG9ydCB0eXBlIERyb3BOb3RpY2VSZXNwb25zZSA9IHtcbiAgdHlwZTogdHlwZW9mIERST1BfTk9USUNFO1xuICBkYXRhOiB7XG4gICAgbm90aWNlSWQ6IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGRyb3BOb3RpY2UgPSAobm90aWNlSWQ6IHN0cmluZyk6IERyb3BOb3RpY2VSZXNwb25zZSA9PiAoe1xuICB0eXBlOiAnRFJPUF9OT1RJQ0UnLFxuICBkYXRhOiB7IG5vdGljZUlkIH0sXG59KVxuIiwiXG5leHBvcnQgY29uc3QgU0VUX05PVElDRV9QUk9HUkVTUyA9ICdTRVRfTk9USUNFX1BST0dSRVNTJ1xuXG5leHBvcnQgdHlwZSBTZXROb3RpY2VQcm9ncmVzcyA9IHtcbiAgbm90aWNlSWQ6IHN0cmluZztcbiAgcHJvZ3Jlc3M6IG51bWJlcjtcbn1cblxuZXhwb3J0IHR5cGUgU2V0Tm90aWNlUHJvZ3Jlc3NSZXNwb25zZSA9IHtcbiAgdHlwZTogdHlwZW9mIFNFVF9OT1RJQ0VfUFJPR1JFU1M7XG4gIGRhdGE6IFNldE5vdGljZVByb2dyZXNzO1xufVxuXG5leHBvcnQgY29uc3Qgc2V0Tm90aWNlUHJvZ3Jlc3MgPSAoZGF0YTogU2V0Tm90aWNlUHJvZ3Jlc3MpOiBTZXROb3RpY2VQcm9ncmVzc1Jlc3BvbnNlID0+ICh7XG4gIHR5cGU6IFNFVF9OT1RJQ0VfUFJPR1JFU1MsXG4gIGRhdGEsXG59KVxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgTWVzc2FnZUJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgTm90aWNlTWVzc2FnZUluU3RhdGUsIFJlZHV4U3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcbmltcG9ydCB7IGRyb3BOb3RpY2UgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL2Ryb3Atbm90aWNlJ1xuaW1wb3J0IHsgc2V0Tm90aWNlUHJvZ3Jlc3MgfSBmcm9tICcuLi8uLi9zdG9yZS9hY3Rpb25zL3NldC1ub3RpY2UtcHJvZ3Jlc3MnXG5cbmNvbnN0IFRJTUVfVE9fRElTQVBQRUFSID0gM1xuXG5leHBvcnQgdHlwZSBOb3RpZnlQcm9ncmVzcyA9IChvcHRpb25zOiB7XG4gIG5vdGljZUlkOiBzdHJpbmc7IHByb2dyZXNzOiBudW1iZXI7XG59KSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE5vdGljZUVsZW1lbnRQcm9wcyA9IHtcbiAgbm90aWNlOiBOb3RpY2VNZXNzYWdlSW5TdGF0ZTtcbiAgZHJvcDogKCkgPT4gYW55O1xuICBub3RpZnlQcm9ncmVzczogTm90aWZ5UHJvZ3Jlc3M7XG59XG5cbmV4cG9ydCB0eXBlIE5vdGljZUVsZW1lbnRTdGF0ZSA9IHtcbiAgcHJvZ3Jlc3M6IG51bWJlcjtcbn1cblxuZXhwb3J0IGNsYXNzIE5vdGljZUVsZW1lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Tm90aWNlRWxlbWVudFByb3BzLCBOb3RpY2VFbGVtZW50U3RhdGU+IHtcbiAgcHJpdmF0ZSB0aW1lcjogTm9kZUpTLlRpbWVvdXQgfCBudWxsXG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBjb25zdCB7IG5vdGljZSB9ID0gcHJvcHNcbiAgICB0aGlzLnRpbWVyID0gbnVsbFxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwcm9ncmVzczogbm90aWNlLnByb2dyZXNzIHx8IDAsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgY29uc3QgeyBkcm9wLCBub3RpY2UsIG5vdGlmeVByb2dyZXNzIH0gPSB0aGlzLnByb3BzXG5cbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSgoc3RhdGUpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBzdGF0ZS5wcm9ncmVzcyArIDEwMCAvIFRJTUVfVE9fRElTQVBQRUFSXG4gICAgICAgIG5vdGlmeVByb2dyZXNzKHsgbm90aWNlSWQ6IG5vdGljZS5pZCwgcHJvZ3Jlc3MgfSlcbiAgICAgICAgcmV0dXJuIHsgcHJvZ3Jlc3MgfVxuICAgICAgfSlcbiAgICB9LCAxMDAwKVxuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpXG4gICAgICB9XG4gICAgICBkcm9wKClcbiAgICB9LCAxMDAwICogKFRJTUVfVE9fRElTQVBQRUFSICsgMSkpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50aW1lcikge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgbm90aWNlLCBkcm9wIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxNZXNzYWdlQm94XG4gICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAnNDgwcHgnIH19XG4gICAgICAgIG1lc3NhZ2U9e25vdGljZS5tZXNzYWdlfVxuICAgICAgICB2YXJpYW50PXtub3RpY2UudHlwZSA9PT0gJ3N1Y2Nlc3MnID8gJ3N1Y2Nlc3MnIDogJ2Rhbmdlcid9XG4gICAgICAgIG9uQ2xvc2VDbGljaz17ZHJvcH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbnR5cGUgTm90aWNlQm94UHJvcHNGcm9tU3RhdGUgPSB7XG4gIG5vdGljZXM6IEFycmF5PE5vdGljZU1lc3NhZ2VJblN0YXRlPjtcbn1cblxudHlwZSBOb3RpY2VCb3hEaXNwYXRjaEZyb21TdGF0ZSA9IHtcbiAgZHJvcDogKG5vdGljZUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG5vdGlmeVByb2dyZXNzOiBOb3RpZnlQcm9ncmVzcztcbn1cblxuY29uc3QgTm90aWNlQm94OiBSZWFjdC5GQzxOb3RpY2VCb3hQcm9wc0Zyb21TdGF0ZSAmIE5vdGljZUJveERpc3BhdGNoRnJvbVN0YXRlPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGRyb3AsIG5vdGljZXMsIG5vdGlmeVByb2dyZXNzIH0gPSBwcm9wc1xuICBjb25zdCBub3RpY2UgPSBub3RpY2VzLmxlbmd0aCA/IG5vdGljZXNbbm90aWNlcy5sZW5ndGggLSAxXSA6IG51bGxcbiAgaWYgKG5vdGljZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwibm90aWNlLXdyYXBwZXJcIj5cbiAgICAgICAgPE5vdGljZUVsZW1lbnRcbiAgICAgICAgICBrZXk9e25vdGljZS5pZH1cbiAgICAgICAgICBub3RpY2U9e25vdGljZX1cbiAgICAgICAgICBkcm9wPXsoKTogdm9pZCA9PiBkcm9wKG5vdGljZS5pZCl9XG4gICAgICAgICAgbm90aWZ5UHJvZ3Jlc3M9e25vdGlmeVByb2dyZXNzfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiAvPlxuICApXG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUmVkdXhTdGF0ZSk6IE5vdGljZUJveFByb3BzRnJvbVN0YXRlID0+ICh7XG4gIG5vdGljZXM6IHN0YXRlLm5vdGljZXMsXG59KVxuXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCk6IE5vdGljZUJveERpc3BhdGNoRnJvbVN0YXRlID0+ICh7XG4gIGRyb3A6IChub3RpY2VJZDogc3RyaW5nKTogdm9pZCA9PiBkaXNwYXRjaChkcm9wTm90aWNlKG5vdGljZUlkKSksXG4gIG5vdGlmeVByb2dyZXNzOiAoe1xuICAgIG5vdGljZUlkLCBwcm9ncmVzcyxcbiAgfSk6IHZvaWQgPT4gZGlzcGF0Y2goc2V0Tm90aWNlUHJvZ3Jlc3MoeyBub3RpY2VJZCwgcHJvZ3Jlc3MgfSkpLFxufSlcblxuY29uc3QgQ29ubmVjdGVkTm90aWNlQm94ID0gY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKE5vdGljZUJveClcblxuZXhwb3J0IHtcbiAgQ29ubmVjdGVkTm90aWNlQm94IGFzIGRlZmF1bHQsXG4gIENvbm5lY3RlZE5vdGljZUJveCBhcyBOb3RpY2VCb3gsXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHtcbiAgQm94LFxuICBIMixcbiAgSDUsXG4gIEg0LFxuICBUZXh0LFxuICBJbGx1c3RyYXRpb24sXG4gIElsbHVzdHJhdGlvblByb3BzLFxuICBCdXR0b24sXG59IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9ob29rcydcblxuY29uc3QgcGFnZUhlYWRlckhlaWdodCA9IDI4NFxuY29uc3QgcGFnZUhlYWRlclBhZGRpbmdZID0gNzRcbmNvbnN0IHBhZ2VIZWFkZXJQYWRkaW5nWCA9IDI1MFxuXG5leHBvcnQgY29uc3QgRGFzaGJvYXJkSGVhZGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgeyB0cmFuc2xhdGVNZXNzYWdlIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIHJldHVybiAoXG4gICAgPEJveCBwb3NpdGlvbj1cInJlbGF0aXZlXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cbiAgICAgIDxCb3hcbiAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgIHRvcD17NTB9XG4gICAgICAgIGxlZnQ9ey0xMH1cbiAgICAgICAgb3BhY2l0eT17WzAuMiwgMC40LCAxXX1cbiAgICAgICAgYW5pbWF0ZVxuICAgICAgPlxuICAgICAgICA8SWxsdXN0cmF0aW9uIHZhcmlhbnQ9XCJSb2NrZXRcIiAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94XG4gICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICB0b3A9ey03MH1cbiAgICAgICAgcmlnaHQ9ey0xNX1cbiAgICAgICAgb3BhY2l0eT17WzAuMiwgMC40LCAxXX1cbiAgICAgICAgYW5pbWF0ZVxuICAgICAgPlxuICAgICAgICA8SWxsdXN0cmF0aW9uIHZhcmlhbnQ9XCJNb29uXCIgLz5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveFxuICAgICAgICBiZz1cImdyZXkxMDBcIlxuICAgICAgICBoZWlnaHQ9e3BhZ2VIZWFkZXJIZWlnaHR9XG4gICAgICAgIHB5PXtwYWdlSGVhZGVyUGFkZGluZ1l9XG4gICAgICAgIHB4PXtbJ2RlZmF1bHQnLCAnbGcnLCBwYWdlSGVhZGVyUGFkZGluZ1hdfVxuICAgICAgPlxuICAgICAgICA8VGV4dCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgPEgyPnt0cmFuc2xhdGVNZXNzYWdlKCd3ZWxjb21lT25Cb2FyZF90aXRsZScpfTwvSDI+XG4gICAgICAgICAgPFRleHQgb3BhY2l0eT17MC44fT5cbiAgICAgICAgICAgIHt0cmFuc2xhdGVNZXNzYWdlKCd3ZWxjb21lT25Cb2FyZF9zdWJ0aXRsZScpfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxudHlwZSBCb3hUeXBlID0ge1xuICB2YXJpYW50OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHN1YnRpdGxlOiBzdHJpbmc7XG4gIGhyZWY6IHN0cmluZztcbn1cblxuY29uc3QgYm94ZXMgPSAoeyB0cmFuc2xhdGVNZXNzYWdlIH0pOiBBcnJheTxCb3hUeXBlPiA9PiBbe1xuICB2YXJpYW50OiAnUGxhbmV0JyxcbiAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2FkZGluZ1Jlc291cmNlc190aXRsZScpLFxuICBzdWJ0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgnYWRkaW5nUmVzb3VyY2VzX3N1YnRpdGxlJyksXG4gIGhyZWY6ICdodHRwczovL2FkbWluYnJvLmNvbS90dXRvcmlhbC1wYXNzaW5nLXJlc291cmNlcy5odG1sJyxcbn0sIHtcbiAgdmFyaWFudDogJ0RvY3VtZW50Q2hlY2snLFxuICB0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgnY3VzdG9taXplUmVzb3VyY2VzX3RpdGxlJyksXG4gIHN1YnRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdjdXN0b21pemVSZXNvdXJjZXNfc3VidGl0bGUnKSxcbiAgaHJlZjogJ2h0dHBzOi8vYWRtaW5icm8uY29tL3R1dG9yaWFsLWN1c3RvbWl6aW5nLXJlc291cmNlcy5odG1sJyxcbn0sIHtcbiAgdmFyaWFudDogJ0RvY3VtZW50U2VhcmNoJyxcbiAgdGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2N1c3RvbWl6ZUFjdGlvbnNfdGl0bGUnKSxcbiAgc3VidGl0bGU6IHRyYW5zbGF0ZU1lc3NhZ2UoJ2N1c3RvbWl6ZUFjdGlvbnNfc3VidGl0bGUnKSxcbiAgaHJlZjogJ2h0dHBzOi8vYWRtaW5icm8uY29tL3R1dG9yaWFsLWFjdGlvbnMuaHRtbCcsXG59LCB7XG4gIHZhcmlhbnQ6ICdGbGFnSW5Db2cnLFxuICB0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgnd3JpdGVPd25Db21wb25lbnRzX3RpdGxlJyksXG4gIHN1YnRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCd3cml0ZU93bkNvbXBvbmVudHNfc3VidGl0bGUnKSxcbiAgaHJlZjogJ2h0dHBzOi8vYWRtaW5icm8uY29tL3R1dG9yaWFsLXdyaXRpbmctcmVhY3QtY29tcG9uZW50cy5odG1sJyxcbn0sIHtcbiAgdmFyaWFudDogJ0ZvbGRlcnMnLFxuICB0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgnY3VzdG9tRGFzaGJvYXJkX3RpdGxlJyksXG4gIHN1YnRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdjdXN0b21EYXNoYm9hcmRfc3VidGl0bGUnKSxcbiAgaHJlZjogJ2h0dHBzOi8vYWRtaW5icm8uY29tL3R1dG9yaWFsLWN1c3RvbS1kYXNoYm9hcmQuaHRtbCcsXG59LCB7XG4gIHZhcmlhbnQ6ICdBc3Ryb25hdXQnLFxuICB0aXRsZTogdHJhbnNsYXRlTWVzc2FnZSgncm9sZUJhc2VkQWNjZXNzX3RpdGxlJyksXG4gIHN1YnRpdGxlOiB0cmFuc2xhdGVNZXNzYWdlKCdyb2xlQmFzZWRBY2Nlc3Nfc3VidGl0bGUnKSxcbiAgaHJlZjogJ2h0dHBzOi8vYWRtaW5icm8uY29tL3R1dG9yaWFsLXJiYWMuaHRtbCcsXG59XVxuXG5jb25zdCBDYXJkID0gc3R5bGVkKEJveClgXG4gIGRpc3BsYXk6ICR7KHsgZmxleCB9KTogc3RyaW5nID0+IChmbGV4ID8gJ2ZsZXgnIDogJ2Jsb2NrJyl9O1xuICBjb2xvcjogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmNvbG9ycy5ncmV5MTAwfTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgJjpob3ZlciB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5MTAwfTtcbiAgICBib3gtc2hhZG93OiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuc2hhZG93cy5jYXJkSG92ZXJ9O1xuICB9XG5gXG5cbkNhcmQuZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiAnd2hpdGUnLFxuICBib3hTaGFkb3c6ICdjYXJkJyxcbn1cblxuZXhwb3J0IGNvbnN0IERhc2hib2FyZDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSwgdHJhbnNsYXRlQnV0dG9uIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIHJldHVybiAoXG4gICAgPEJveD5cbiAgICAgIDxEYXNoYm9hcmRIZWFkZXIgLz5cbiAgICAgIDxCb3hcbiAgICAgICAgbXQ9e1sneGwnLCAneGwnLCAnLTEwMHB4J119XG4gICAgICAgIG1iPVwieGxcIlxuICAgICAgICBteD17WzAsIDAsIDAsICdhdXRvJ119XG4gICAgICAgIHB4PXtbJ2RlZmF1bHQnLCAnbGcnLCAneHhsJywgJzAnXX1cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGZsZXhcbiAgICAgICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgICAgIGZsZXhXcmFwPVwid3JhcFwiXG4gICAgICAgIHdpZHRoPXtbMSwgMSwgMSwgMTAyNF19XG4gICAgICA+XG4gICAgICAgIHtib3hlcyh7IHRyYW5zbGF0ZU1lc3NhZ2UgfSkubWFwKChib3gsIGluZGV4KSA9PiAoXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgICAgIDxCb3gga2V5PXtpbmRleH0gd2lkdGg9e1sxLCAxIC8gMiwgMSAvIDIsIDEgLyAzXX0gcD1cImxnXCI+XG4gICAgICAgICAgICA8Q2FyZCBhcz1cImFcIiBocmVmPXtib3guaHJlZn0+XG4gICAgICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxJbGx1c3RyYXRpb25cbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e2JveC52YXJpYW50IGFzIElsbHVzdHJhdGlvblByb3BzWyd2YXJpYW50J119XG4gICAgICAgICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs3MH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxINSBtdD1cImxnXCI+e2JveC50aXRsZX08L0g1PlxuICAgICAgICAgICAgICAgIDxUZXh0Pntib3guc3VidGl0bGV9PC9UZXh0PlxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICkpfVxuICAgICAgICA8Qm94IHdpZHRoPXtbMSwgMSwgMSAvIDJdfSBwPVwibGdcIj5cbiAgICAgICAgICA8Q2FyZCBhcz1cImFcIiBmbGV4IGhyZWY9XCJodHRwczovL2pvaW4uc2xhY2suY29tL3QvYWRtaW5icm8vc2hhcmVkX2ludml0ZS96dC1kanNxeHhwei1fWUNTOFVNdFE5QWRlNkRQdUxSN1p3XCI+XG4gICAgICAgICAgICA8Qm94IGZsZXhTaHJpbms9ezB9PjxJbGx1c3RyYXRpb24gdmFyaWFudD1cIlNsYWNrTG9nb1wiIC8+PC9Cb3g+XG4gICAgICAgICAgICA8Qm94IG1sPVwieGxcIj5cbiAgICAgICAgICAgICAgPEg0Pnt0cmFuc2xhdGVNZXNzYWdlKCdjb21tdW5pdHlfdGl0bGUnKX08L0g0PlxuICAgICAgICAgICAgICA8VGV4dD57dHJhbnNsYXRlTWVzc2FnZSgnY29tbXVuaXR5X3N1YnRpdGxlJyl9PC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCB3aWR0aD17WzEsIDEsIDEgLyAyXX0gcD1cImxnXCI+XG4gICAgICAgICAgPENhcmQgYXM9XCJhXCIgZmxleCBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1NvZnR3YXJlQnJvdGhlcnMvYWRtaW4tYnJvL2lzc3Vlc1wiPlxuICAgICAgICAgICAgPEJveCBmbGV4U2hyaW5rPXswfT48SWxsdXN0cmF0aW9uIHZhcmlhbnQ9XCJHaXRodWJMb2dvXCIgLz48L0JveD5cbiAgICAgICAgICAgIDxCb3ggbWw9XCJ4bFwiPlxuICAgICAgICAgICAgICA8SDQ+e3RyYW5zbGF0ZU1lc3NhZ2UoJ2ZvdW5kQnVnX3RpdGxlJyl9PC9IND5cbiAgICAgICAgICAgICAgPFRleHQ+e3RyYW5zbGF0ZU1lc3NhZ2UoJ2ZvdW5kQnVnX3N1YnRpdGxlJyl9PC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCB2YXJpYW50PVwid2hpdGVcIiBib3hTaGFkb3c9XCJjYXJkXCIgd2lkdGg9ezF9IG09XCJsZ1wiPlxuICAgICAgICAgIDxUZXh0IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgPElsbHVzdHJhdGlvbiB2YXJpYW50PVwiU29mdHdhcmVCcm90aGVyc0xvZ29cIiAvPlxuICAgICAgICAgICAgPEg0Pnt0cmFuc2xhdGVNZXNzYWdlKCduZWVkTW9yZVNvbHV0aW9uc190aXRsZScpfTwvSDQ+XG4gICAgICAgICAgICA8VGV4dD57dHJhbnNsYXRlTWVzc2FnZSgnbmVlZE1vcmVTb2x1dGlvbnNfc3VidGl0bGUnKX08L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCBtdD1cInh4bFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgYXM9XCJhXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vc29mdHdhcmVicm90aGVycy5jby9zZXJ2aWNlc1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7dHJhbnNsYXRlQnV0dG9uKCdjb250YWN0VXMnKX1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGV4dCwgTWVzc2FnZUJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9ob29rcydcblxudHlwZSBTdGF0ZSA9IHtcbiAgZXJyb3I6IGFueTtcbn1cblxuY29uc3QgRXJyb3JNZXNzYWdlOiBSZWFjdC5GQzxTdGF0ZT4gPSAoeyBlcnJvciB9KSA9PiB7XG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICByZXR1cm4gKFxuICAgIDxNZXNzYWdlQm94IG09XCJ4eGxcIiB2YXJpYW50PVwiZGFuZ2VyXCIgbWVzc2FnZT1cIkphdmFzY3JpcHQgRXJyb3JcIj5cbiAgICAgIDxUZXh0PntlcnJvci50b1N0cmluZygpfTwvVGV4dD5cbiAgICAgIDxUZXh0IG10PVwiZGVmYXVsdFwiPnt0cmFuc2xhdGVNZXNzYWdlKCdzZWVDb25zb2xlRm9yTW9yZScpfTwvVGV4dD5cbiAgICA8L01lc3NhZ2VCb3g+XG4gIClcbn1cblxuZXhwb3J0IGNsYXNzIEVycm9yQm91bmRhcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8YW55LCBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlcnJvcjogbnVsbCxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaChlcnJvcik6IHZvaWQge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBlcnJvciB9KVxuICB9XG5cbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgeyBlcnJvciB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgaWYgKGVycm9yICE9PSBudWxsKSB7XG4gICAgICByZXR1cm4gKDxFcnJvck1lc3NhZ2UgZXJyb3I9e2Vycm9yfSAvPilcbiAgICB9XG5cbiAgICByZXR1cm4gY2hpbGRyZW4gfHwgbnVsbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yQm91bmRhcnlcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUsIEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmltcG9ydCBEZWZhdWx0RGFzaGJvYXJkIGZyb20gJy4uL2FwcC9kZWZhdWx0LWRhc2hib2FyZCdcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4uL2FwcC9lcnJvci1ib3VuZGFyeSdcbmltcG9ydCB7IFJlZHV4U3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcblxuZGVjbGFyZSBjb25zdCBBZG1pbkJybzoge1xuICBVc2VyQ29tcG9uZW50czogUmVjb3JkPHN0cmluZywgRnVuY3Rpb25Db21wb25lbnQ+O1xufVxuXG50eXBlIFN0YXRlID0ge1xuICBpc0NsaWVudDogYm9vbGVhbjtcbn1cblxudHlwZSBQcm9wc0Zyb21TdGF0ZSA9IHtcbiAgZGFzaGJvYXJkOiB7XG4gICAgY29tcG9uZW50Pzogc3RyaW5nO1xuICB9O1xufVxuXG5jbGFzcyBEYXNoYm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHNGcm9tU3RhdGUsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wc0Zyb21TdGF0ZSkge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0NsaWVudDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQ2xpZW50OiB0cnVlIH0pXG4gIH1cblxuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IGRhc2hib2FyZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgaXNDbGllbnQgfSA9IHRoaXMuc3RhdGVcbiAgICBsZXQgQ29tcG9uZW50XG4gICAgaWYgKGRhc2hib2FyZCAmJiBkYXNoYm9hcmQuY29tcG9uZW50ICYmIGlzQ2xpZW50XG4gICAgICAgICYmIEFkbWluQnJvLlVzZXJDb21wb25lbnRzW2Rhc2hib2FyZC5jb21wb25lbnRdXG4gICAgKSB7XG4gICAgICBDb21wb25lbnQgPSBBZG1pbkJyby5Vc2VyQ29tcG9uZW50c1tkYXNoYm9hcmQuY29tcG9uZW50XSBhcyBGdW5jdGlvbkNvbXBvbmVudFxuICAgIH0gZWxzZSB7XG4gICAgICBDb21wb25lbnQgPSBEZWZhdWx0RGFzaGJvYXJkXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgICA8Q29tcG9uZW50IC8+XG4gICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgKVxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogUmVkdXhTdGF0ZSk6IFByb3BzRnJvbVN0YXRlID0+ICh7XG4gIGRhc2hib2FyZDogc3RhdGUuZGFzaGJvYXJkLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKERhc2hib2FyZClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEljb24gfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MnXG5pbXBvcnQgeyBSZXNvdXJjZUpTT04sIFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5cbnR5cGUgQWRkTmV3SXRlbUJ1dHRvblByb3BzID0ge1xuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xuICBwcm9wZXJ0eTogUHJvcGVydHlKU09OO1xufVxuXG5jb25zdCBBZGROZXdJdGVtQnV0dG9uOiBSZWFjdC5GQzxBZGROZXdJdGVtQnV0dG9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2UsIHByb3BlcnR5IH0gPSBwcm9wc1xuICBjb25zdCB7IHRyYW5zbGF0ZVByb3BlcnR5LCB0cmFuc2xhdGVCdXR0b24gfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgbGFiZWwgPSB0cmFuc2xhdGVQcm9wZXJ0eShcbiAgICBgJHtwcm9wZXJ0eS5wYXRofS5hZGROZXdJdGVtYCxcbiAgICByZXNvdXJjZS5pZCwge1xuICAgICAgZGVmYXVsdFZhbHVlOiB0cmFuc2xhdGVCdXR0b24oJ2FkZE5ld0l0ZW0nLCByZXNvdXJjZS5pZCksXG4gICAgfSxcbiAgKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJY29uIGljb249XCJBZGRcIiAvPlxuICAgICAge2xhYmVsfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZE5ld0l0ZW1CdXR0b25cbiIsImltcG9ydCB7IExhYmVsLCBMYWJlbFByb3BzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vLi4vaW50ZXJmYWNlcydcblxuZXhwb3J0IHR5cGUgUHJvcGVydHlMYWJlbFByb3BzID0ge1xuICBwcm9wZXJ0eTogUHJvcGVydHlKU09OO1xuICBwcm9wcz86IExhYmVsUHJvcHM7XG59XG5cbmNvbnN0IFByb3BlcnR5TGFiZWw6IFJlYWN0LkZDPFByb3BlcnR5TGFiZWxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcHJvcHM6IGxhYmVsUHJvcHMgfSA9IHByb3BzXG5cbiAgaWYgKHByb3BlcnR5LmhpZGVMYWJlbCkgeyByZXR1cm4gbnVsbCB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGFiZWxcbiAgICAgIGh0bWxGb3I9e3Byb3BlcnR5LnBhdGh9XG4gICAgICByZXF1aXJlZD17cHJvcGVydHkuaXNSZXF1aXJlZH1cbiAgICAgIHsuLi5sYWJlbFByb3BzfVxuICAgID5cbiAgICAgIHtwcm9wZXJ0eS5sYWJlbH1cbiAgICA8L0xhYmVsPlxuICApXG59XG5cbmV4cG9ydCB7XG4gIFByb3BlcnR5TGFiZWwgYXMgZGVmYXVsdCxcbiAgUHJvcGVydHlMYWJlbCxcbn1cbiIsImltcG9ydCB7IERFTElNSVRFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2ZsYXQvY29uc3RhbnRzJ1xuaW1wb3J0IHsgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcblxuLyoqXG4gKiBDb252ZXJ0cyBwcm9wZXJ0eTogUHJvcGVydHlKU09OIGZyb20gYW4gYXJyYXkgdG8gYSBzdWItcHJvcGVydHkgZm9yIGFuIGFjdHVhbCBpdGVtIGluIHRoZSBhcnJheVxuICogSXQgY2hhbmdlIHBhdGggdGhhdCBpdCBoYXMgaW5kZXggaW5zaWRlIGFsb25nIHdpdGggdGhlIGxhYmVsLiBGdXRoZXJtb3JlIGZsYXQgaXNBcnJheSBpcyByZW1vdmVkXG4gKiAsYmVjYXVzZSBpdCB3YXMgYWxyZWFkeSBoYW5kbGVkLCBzbyB0aGF0IGl0ZW1SZW5kZXJlciBjYW4gcmVuZGVyIHByb3BlcnR5IGFzIGEgcmVndWxhciBvbmVcbiAqXG4gKiBAcGFyYW0ge1Byb3BlcnR5SlNPTn0gIGFycmF5UHJvcGVydHkgcHJvcGVydHkgd2l0aCBwYXRoIHNldCB0byBhbiByb290IEFycmF5IHR5cGUgcHJvcGVydHksXG4gKiBAcGFyYW0ge051bWJlcn0gICAgICAgIGluZGV4ICAgICAgICAgaW5kZXggdW5kZXIgd2hpY2ggc3ViLXByb3BlcnR5IHNob3VsZCBiZSBwbGFjZWRcbiAqIEBwcml2YXRlXG4gKiBAaGlkZVxuICovXG5leHBvcnQgY29uc3QgY29udmVydFRvU3ViUHJvcGVydHkgPSAoYXJyYXlQcm9wZXJ0eTogUHJvcGVydHlKU09OLCBpbmRleDogbnVtYmVyKTogUHJvcGVydHlKU09OID0+IChcbiAge1xuICAgIC4uLmFycmF5UHJvcGVydHksXG4gICAgcGF0aDogW2FycmF5UHJvcGVydHkucGF0aCwgaW5kZXhdLmpvaW4oREVMSU1JVEVSKSxcbiAgICBsYWJlbDogYFske2luZGV4ICsgMX1dYCxcbiAgICBpc0FycmF5OiBmYWxzZSxcbiAgfVxuKVxuIiwiaW1wb3J0IHsgZmxhdCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5cbi8qKlxuICogUmVtb3ZlcyBzZWxlY3RlZCBhcnJheSBpdGVtIGZyb20gZ2l2ZW4gcmVjb3JkLiBJdCBwZXJmb3JtcyBmb2xsb3dpbmcgdGFza3M6XG4gKiAxLiByZW1vdmVzIGFycmF5IGl0ZW0gZnJvbSB0aGUgYXJyYXlcbiAqIDIuIHJlb3JkZXJzIGtleXMgaW4gbmV3IGFycmF5IGl0ZW1cbiAqIDMuIGlmIHByb3BlcnR5IGhhcyBwb3B1bGF0ZWQgZmllbGRzIGl0IGFsc28gcmVvcmRlcnMgdGhlbVxuICogaXQgdXNlcyB7QGxpbmsgZmxhdCB9IG1vZHVsZSBhbmQgaXRzIHJlbW92ZVBhdGggbWV0aG9kXG4gKlxuICogQHBhcmFtIHtSZWNvcmRKU09OfSByZWNvcmRcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgc3ViUHJvcGVydHlQYXRoICAgICAgICAgICAgd2hpY2ggaGFzIHRvIGJlIHJlbW92ZWQuIEl0IGhhcyB0byBiZSBmbGF0dGVuZWRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW4gbm90YXRpb24sIGFuZCBlbmRpbmcgd2l0aCBhcnJheSBpbmRleFxuICogQHByaXZhdGVcbiAqIEBoaWRlXG4gKi9cbmV4cG9ydCBjb25zdCByZW1vdmVTdWJQcm9wZXJ0eSA9IChyZWNvcmQ6IFJlY29yZEpTT04sIHN1YlByb3BlcnR5UGF0aDogc3RyaW5nKTogUmVjb3JkSlNPTiA9PiB7XG4gIC8vIGJ5IGRlZmF1bHQgcG9wdWxhdGVkIGlzIGZsYXR0ZW4ganVzdCB0byB0aGUgcGF0aCBsZXZlbCAtIG9iamVjdCBpdHNlbGYgaXMgbm90IGZsYXR0ZW4uIFRoYXQgaXNcbiAgLy8gd2h5IHdlIGhhdmUgdG8gcmV0cmlldmUgdGhlIG9yaWdpbmFsIHN0YXRlLiBUaGF0IGlzIHdoeSB3ZSBoYXZlIHRvIHJlcGxhY2UgcmVjb3JkLnBvcHVsYXRlZCB0b1xuICAvLyBmcm9tIHsgJ3NvbWUubmVzdGVkLjEua2V5JzogUmVjb3JkSlNPTiB9IHRvIHsgJ3NvbWUubmVzdGVkLjEua2V5JzogJ3NvbWUubmVzdGVkLjEua2V5JyB9LFxuICAvLyB0aGVuIHJlbW92ZSBrZXlzLCBhbmQgcmVmaWxsIGJhY2sgc29tZS5uZXN0ZWQuMS5rZXkgdG8gdGhlIHZhbHVlIGZyb20gdGhlIG9yaWdpbmFsIHBvcHVsYXRlZFxuICAvLyBvYmplY3QuXG4gIGNvbnN0IHBvcHVsYXRlZEtleU1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IE9iamVjdC5rZXlzKHJlY29yZC5wb3B1bGF0ZWQpLnJlZHVjZShcbiAgICAobWVtbywgcHJvcGVydHlLZXkpID0+ICh7XG4gICAgICAuLi5tZW1vLFxuICAgICAgW3Byb3BlcnR5S2V5XTogcHJvcGVydHlLZXksXG4gICAgfSksXG4gICAge30sXG4gIClcblxuICBjb25zdCBuZXdQb3B1bGF0ZWRLZXlNYXAgPSBmbGF0LnJlbW92ZVBhdGgocG9wdWxhdGVkS2V5TWFwLCBzdWJQcm9wZXJ0eVBhdGgpXG4gIGNvbnN0IG5ld1BvcHVsYXRlZCA9IE9iamVjdC5lbnRyaWVzKG5ld1BvcHVsYXRlZEtleU1hcCkucmVkdWNlKFxuICAgIChtZW1vLCBbbmV3UHJvcGVydHlLZXksIG9sZFByb3BlcnR5S2V5XSkgPT4gKHtcbiAgICAgIC4uLm1lbW8sXG4gICAgICBbbmV3UHJvcGVydHlLZXldOiBvbGRQcm9wZXJ0eUtleSAmJiByZWNvcmQucG9wdWxhdGVkW29sZFByb3BlcnR5S2V5Py50b1N0cmluZygpXSxcbiAgICB9KSwge30sXG4gIClcblxuICByZXR1cm4ge1xuICAgIC4uLnJlY29yZCxcbiAgICBwYXJhbXM6IGZsYXQucmVtb3ZlUGF0aChyZWNvcmQucGFyYW1zLCBzdWJQcm9wZXJ0eVBhdGgpLFxuICAgIHBvcHVsYXRlZDogbmV3UG9wdWxhdGVkLFxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgTW91c2VFdmVudCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJ1dHRvbiwgU2VjdGlvbiwgRm9ybUdyb3VwLCBGb3JtTWVzc2FnZSwgSWNvbiwgQm94IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgQWRkTmV3SXRlbUJ1dHRvbiBmcm9tICcuL2FkZC1uZXctaXRlbS10cmFuc2xhdGlvbidcbmltcG9ydCB7IGZsYXQgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscydcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzSW5BcnJheSB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyBQcm9wZXJ0eUxhYmVsIH0gZnJvbSAnLi4vdXRpbHMvcHJvcGVydHktbGFiZWwnXG5pbXBvcnQgeyBjb252ZXJ0VG9TdWJQcm9wZXJ0eSB9IGZyb20gJy4vY29udmVydC10by1zdWItcHJvcGVydHknXG5pbXBvcnQgeyBQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgcmVtb3ZlU3ViUHJvcGVydHkgfSBmcm9tICcuL3JlbW92ZS1zdWItcHJvcGVydHknXG5cbnR5cGUgRWRpdFByb3BzID0gUmVxdWlyZWQ8RWRpdFByb3BlcnR5UHJvcHNJbkFycmF5PlxuXG50eXBlIEl0ZW1SZW5kZXJlclByb3BzID0ge1xuICBvbkRlbGV0ZTogKGV2ZW50OiBNb3VzZUV2ZW50LCBwcm9wZXJ0eTogUHJvcGVydHlKU09OKSA9PiBib29sZWFuO1xufVxuXG5jb25zdCBJdGVtUmVuZGVyZXI6IFJlYWN0LkZDPEVkaXRQcm9wcyAmIEl0ZW1SZW5kZXJlclByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IEl0ZW1Db21wb25lbnQsIHByb3BlcnR5LCBvbkRlbGV0ZSB9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXggZmxleERpcmVjdGlvbj1cInJvd1wiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBkYXRhLXRlc3RpZD17cHJvcGVydHkucGF0aH0+XG4gICAgICA8Qm94IGZsZXhHcm93PXsxfT5cbiAgICAgICAgPEl0ZW1Db21wb25lbnQgey4uLnByb3BzfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IGZsZXhTaHJpbms9ezB9IG1sPVwibGdcIj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHJvdW5kZWRcbiAgICAgICAgICBtbD1cImRlZmF1bHRcIlxuICAgICAgICAgIGRhdGEtdGVzdGlkPVwiZGVsZXRlLWl0ZW1cIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHNpemU9XCJpY29uXCJcbiAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpOiBib29sZWFuID0+IG9uRGVsZXRlKGV2ZW50LCBwcm9wZXJ0eSl9XG4gICAgICAgICAgdmFyaWFudD1cImRhbmdlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBpY29uPVwiVHJhc2hDYW5cIiAvPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG5cbmNvbnN0IElucHV0c0luU2VjdGlvbjogUmVhY3QuRkM8RWRpdFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQsIHJlc291cmNlLCBvbkNoYW5nZSB9ID0gcHJvcHNcbiAgY29uc3QgaXRlbXMgPSBmbGF0LmdldChyZWNvcmQucGFyYW1zLCBwcm9wZXJ0eS5wYXRoKSB8fCBbXVxuXG4gIGNvbnN0IGFkZE5ldyA9IHVzZUNhbGxiYWNrKChldmVudDogTW91c2VFdmVudCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IG5ld0l0ZW1zID0gW1xuICAgICAgLi4uaXRlbXMsXG4gICAgICBwcm9wZXJ0eS5zdWJQcm9wZXJ0aWVzLmxlbmd0aCA/IHt9IDogJycsXG4gICAgXVxuICAgIG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIG5ld0l0ZW1zKVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICByZXR1cm4gZmFsc2VcbiAgfSwgW3JlY29yZCwgb25DaGFuZ2UsIHByb3BlcnR5XSlcblxuICBjb25zdCByZW1vdmVJdGVtID0gdXNlQ2FsbGJhY2soKGV2ZW50OiBNb3VzZUV2ZW50LCBzdWJQcm9wZXJ0eTogUHJvcGVydHlKU09OKTogYm9vbGVhbiA9PiB7XG4gICAgY29uc3QgbmV3UmVjb3JkID0gcmVtb3ZlU3ViUHJvcGVydHkocmVjb3JkLCBzdWJQcm9wZXJ0eS5wYXRoKVxuICAgIG9uQ2hhbmdlKG5ld1JlY29yZClcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH0sIFtyZWNvcmQsIG9uQ2hhbmdlLCBwcm9wZXJ0eV0pXG5cbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbiBtdD1cInhsXCI+XG4gICAgICB7aXRlbXMubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1Qcm9wZXJ0eSA9IGNvbnZlcnRUb1N1YlByb3BlcnR5KHByb3BzLnByb3BlcnR5LCBpKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxJdGVtUmVuZGVyZXJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHByb3BlcnR5PXtpdGVtUHJvcGVydHl9XG4gICAgICAgICAgICBrZXk9e2l0ZW1Qcm9wZXJ0eS5wYXRofVxuICAgICAgICAgICAgb25EZWxldGU9e3JlbW92ZUl0ZW19XG4gICAgICAgICAgLz5cbiAgICAgICAgKVxuICAgICAgfSl9XG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FkZE5ld30gdHlwZT1cImJ1dHRvblwiIHJvdW5kZWQ+XG4gICAgICAgIDxBZGROZXdJdGVtQnV0dG9uIHJlc291cmNlPXtyZXNvdXJjZX0gcHJvcGVydHk9e3Byb3BlcnR5fSAvPlxuICAgICAgPC9CdXR0b24+XG4gICAgPC9TZWN0aW9uPlxuICApXG59XG5cbmNvbnN0IEVkaXQ6IFJlYWN0LkZDPEVkaXRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkLCB0ZXN0SWQgfSA9IHByb3BzXG4gIGNvbnN0IGVycm9yID0gcmVjb3JkLmVycm9ycyAmJiByZWNvcmQuZXJyb3JzW3Byb3BlcnR5LnByb3BlcnR5UGF0aF1cblxuICByZXR1cm4gKFxuICAgIDxGb3JtR3JvdXAgZXJyb3I9eyEhZXJyb3J9IGRhdGEtdGVzdGlkPXt0ZXN0SWR9PlxuICAgICAgPFByb3BlcnR5TGFiZWwgcHJvcGVydHk9e3Byb3BlcnR5fSAvPlxuICAgICAgPElucHV0c0luU2VjdGlvbiB7Li4ucHJvcHN9IC8+XG4gICAgICA8Rm9ybU1lc3NhZ2U+e2Vycm9yICYmIGVycm9yLm1lc3NhZ2V9PC9Gb3JtTWVzc2FnZT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQge1xuICBFZGl0IGFzIGRlZmF1bHQsXG4gIEVkaXQsXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmbGF0IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMnXG5cbmltcG9ydCB7IFJlY29yZEpTT04sIFJlc291cmNlSlNPTiwgUHJvcGVydHlKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IFNob3dQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcHJvcGVydHk6IFByb3BlcnR5SlNPTjtcbiAgcmVjb3JkOiBSZWNvcmRKU09OO1xuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xufVxuXG5jb25zdCBMaXN0OiBSZWFjdC5GQzxTaG93UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSBwcm9wc1xuICBjb25zdCB2YWx1ZXMgPSBmbGF0LmdldChyZWNvcmQucGFyYW1zLCBwcm9wZXJ0eS5wYXRoKSB8fCBbXVxuXG4gIHJldHVybiAoXG4gICAgPHNwYW4+e2BsZW5ndGg6ICR7dmFsdWVzLmxlbmd0aH1gfTwvc3Bhbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTZWN0aW9uLCBWYWx1ZUdyb3VwIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBSZWNvcmRKU09OLCBQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgZmxhdCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgY29udmVydFRvU3ViUHJvcGVydHkgfSBmcm9tICcuL2NvbnZlcnQtdG8tc3ViLXByb3BlcnR5J1xuXG50eXBlIFByb3BzID0ge1xuICBwcm9wZXJ0eTogUHJvcGVydHlKU09OO1xuICByZWNvcmQ6IFJlY29yZEpTT047XG4gIEl0ZW1Db21wb25lbnQ6IHR5cGVvZiBSZWFjdC5Db21wb25lbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCwgSXRlbUNvbXBvbmVudCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgaXRlbXMgPSBmbGF0LmdldChyZWNvcmQucGFyYW1zLCBwcm9wZXJ0eS5wYXRoKSB8fCBbXVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxWYWx1ZUdyb3VwIGxhYmVsPXtwcm9wZXJ0eS5sYWJlbH0+XG4gICAgICAgIDxTZWN0aW9uPlxuICAgICAgICAgIHsoaXRlbXMgfHwgW10pLm1hcCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbVByb3BlcnR5ID0gY29udmVydFRvU3ViUHJvcGVydHkocHJvcGVydHksIGkpXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8SXRlbUNvbXBvbmVudFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIGtleT17aXRlbVByb3BlcnR5LnBhdGh9XG4gICAgICAgICAgICAgICAgcHJvcGVydHk9e2l0ZW1Qcm9wZXJ0eX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9TZWN0aW9uPlxuICAgICAgPC9WYWx1ZUdyb3VwPlxuICAgIClcbiAgfVxufVxuIiwiLy8gaW1wb3J0IFNob3cgZnJvbSAnLi9zaG93J1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9lZGl0J1xuaW1wb3J0IExpc3QgZnJvbSAnLi9saXN0J1xuaW1wb3J0IFNob3cgZnJvbSAnLi9zaG93J1xuXG5leHBvcnQge1xuICBTaG93IGFzIHNob3csXG4gIEVkaXQgYXMgZWRpdCxcbiAgTGlzdCBhcyBsaXN0LFxufVxuIiwiaW1wb3J0IHsgREVMSU1JVEVSIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbHMvZmxhdC9jb25zdGFudHMnXG5pbXBvcnQgeyBQcm9wZXJ0eUpTT04sIEJhc2VQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvU3ViUHJvcGVydHkoXG4gIHByb3BlcnR5OiBQcm9wZXJ0eUpTT04sXG4gIHN1YlByb3BlcnR5OiBCYXNlUHJvcGVydHlKU09OLFxuKTogUHJvcGVydHlKU09OIHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdWJQcm9wZXJ0eSxcbiAgICBwYXRoOiBbcHJvcGVydHkucGF0aCwgc3ViUHJvcGVydHkubmFtZV0uam9pbihERUxJTUlURVIpLFxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTZWN0aW9uLCBGb3JtR3JvdXAsIEZvcm1NZXNzYWdlIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyBQcm9wZXJ0eUxhYmVsIH0gZnJvbSAnLi4vdXRpbHMvcHJvcGVydHktbGFiZWwnXG5pbXBvcnQgeyBjb252ZXJ0VG9TdWJQcm9wZXJ0eSB9IGZyb20gJy4vY29udmVydC10by1zdWItcHJvcGVydHknXG5cbnR5cGUgUHJvcHMgPSB7XG4gIEl0ZW1Db21wb25lbnQ6IHR5cGVvZiBSZWFjdC5Db21wb25lbnQ7XG59XG5cbmNvbnN0IEVkaXQ6IFJlYWN0LkZDPFByb3BzICYgRWRpdFByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCwgSXRlbUNvbXBvbmVudCB9ID0gcHJvcHNcbiAgY29uc3QgZXJyb3IgPSByZWNvcmQuZXJyb3JzICYmIHJlY29yZC5lcnJvcnNbcHJvcGVydHkucGF0aF1cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUdyb3VwIGVycm9yPXshIWVycm9yfT5cbiAgICAgIDxQcm9wZXJ0eUxhYmVsIHByb3BlcnR5PXtwcm9wZXJ0eX0gLz5cbiAgICAgIDxTZWN0aW9uIHsuLi5wcm9wZXJ0eS5wcm9wc30+XG4gICAgICAgIHtwcm9wZXJ0eS5zdWJQcm9wZXJ0aWVzLmZpbHRlcihzdWJQcm9wZXJ0eSA9PiAhc3ViUHJvcGVydHkuaXNJZCkubWFwKChzdWJQcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1YlByb3BlcnR5V2l0aFBhdGggPSBjb252ZXJ0VG9TdWJQcm9wZXJ0eShwcm9wZXJ0eSwgc3ViUHJvcGVydHkpXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxJdGVtQ29tcG9uZW50XG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgICAga2V5PXtzdWJQcm9wZXJ0eVdpdGhQYXRoLnBhdGh9XG4gICAgICAgICAgICAgIHByb3BlcnR5PXtzdWJQcm9wZXJ0eVdpdGhQYXRofVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApXG4gICAgICAgIH0pfVxuICAgICAgPC9TZWN0aW9uPlxuICAgICAgPEZvcm1NZXNzYWdlPntlcnJvciAmJiBlcnJvci5tZXNzYWdlfTwvRm9ybU1lc3NhZ2U+XG4gICAgPC9Gb3JtR3JvdXA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU2VjdGlvbiwgVmFsdWVHcm91cCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgQmFzZVByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IHsgY29udmVydFRvU3ViUHJvcGVydHkgfSBmcm9tICcuL2NvbnZlcnQtdG8tc3ViLXByb3BlcnR5J1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBJdGVtQ29tcG9uZW50OiB0eXBlb2YgUmVhY3QuQ29tcG9uZW50O1xufVxuXG5jb25zdCBTaG93OiBSZWFjdC5GQzxQcm9wcyAmIEJhc2VQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCBJdGVtQ29tcG9uZW50IH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIDxWYWx1ZUdyb3VwIGxhYmVsPXtwcm9wZXJ0eS5sYWJlbH0+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgICAge3Byb3BlcnR5LnN1YlByb3BlcnRpZXMuZmlsdGVyKHN1YlByb3BlcnR5ID0+ICFzdWJQcm9wZXJ0eS5pc0lkKS5tYXAoKHN1YlByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3ViUHJvcGVydHlXaXRoUGF0aCA9IGNvbnZlcnRUb1N1YlByb3BlcnR5KHByb3BlcnR5LCBzdWJQcm9wZXJ0eSlcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEl0ZW1Db21wb25lbnRcbiAgICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgICBrZXk9e3N1YlByb3BlcnR5V2l0aFBhdGgucGF0aH1cbiAgICAgICAgICAgICAgcHJvcGVydHk9e3N1YlByb3BlcnR5V2l0aFBhdGh9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L1NlY3Rpb24+XG4gICAgPC9WYWx1ZUdyb3VwPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3dcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBWaWV3SGVscGVycyBmcm9tICcuLi8uLi8uLi8uLi9iYWNrZW5kL3V0aWxzL3ZpZXctaGVscGVycy92aWV3LWhlbHBlcnMnXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyBjb252ZXJ0VG9TdWJQcm9wZXJ0eSB9IGZyb20gJy4vY29udmVydC10by1zdWItcHJvcGVydHknXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIEl0ZW1Db21wb25lbnQ6IHR5cGVvZiBSZWFjdC5Db21wb25lbnQ7XG59XG5cbi8vIFRPRE86IGRlZmluZSBJdGVtQ29tcG9uZW50IGludGVyZmFjZVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHMgJiBFZGl0UHJvcGVydHlQcm9wcz4ge1xuICByZW5kZXJJdGVtcygpOiBSZWFjdC5SZWFjdENoaWxkIHtcbiAgICBjb25zdCB7IHByb3BlcnR5LCBJdGVtQ29tcG9uZW50IH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAge3Byb3BlcnR5LnN1YlByb3BlcnRpZXMuZmlsdGVyKHN1YlByb3BlcnR5ID0+ICFzdWJQcm9wZXJ0eS5pc0lkKS5tYXAoKHN1YlByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3ViUHJvcGVydHlXaXRoUGF0aCA9IGNvbnZlcnRUb1N1YlByb3BlcnR5KHByb3BlcnR5LCBzdWJQcm9wZXJ0eSlcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e3N1YlByb3BlcnR5V2l0aFBhdGgucGF0aH0+XG4gICAgICAgICAgICAgIDxMYWJlbCBpbmxpbmU+e2Ake3N1YlByb3BlcnR5LmxhYmVsfTogYH08L0xhYmVsPlxuICAgICAgICAgICAgICA8SXRlbUNvbXBvbmVudFxuICAgICAgICAgICAgICAgIHsuLi50aGlzLnByb3BzfVxuICAgICAgICAgICAgICAgIHByb3BlcnR5PXtzdWJQcm9wZXJ0eVdpdGhQYXRofVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KX1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxuICB9XG5cbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Q2hpbGQge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCwgcmVzb3VyY2UgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBzaG93QWN0aW9uID0gcmVjb3JkLnJlY29yZEFjdGlvbnMuZmluZChhID0+IGEubmFtZSA9PT0gJ3Nob3cnKVxuXG4gICAgaWYgKHJlc291cmNlLnRpdGxlUHJvcGVydHkucHJvcGVydHlQYXRoID09PSBwcm9wZXJ0eS5wcm9wZXJ0eVBhdGggJiYgc2hvd0FjdGlvbikge1xuICAgICAgY29uc3QgaCA9IG5ldyBWaWV3SGVscGVycygpXG4gICAgICBjb25zdCBocmVmID0gaC5yZWNvcmRBY3Rpb25Vcmwoe1xuICAgICAgICByZXNvdXJjZUlkOiByZXNvdXJjZS5pZCwgcmVjb3JkSWQ6IHJlY29yZC5pZCwgYWN0aW9uTmFtZTogJ3Nob3cnLFxuICAgICAgfSlcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxMaW5rIHRvPXtocmVmfT57dGhpcy5yZW5kZXJJdGVtcygpfTwvTGluaz5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVuZGVySXRlbXMoKVxuICB9XG59XG4iLCIvLyBpbXBvcnQgU2hvdyBmcm9tICcuL3Nob3cnXG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQnXG5pbXBvcnQgU2hvdyBmcm9tICcuL3Nob3cnXG5pbXBvcnQgTGlzdCBmcm9tICcuL2xpc3QnXG5cbmV4cG9ydCB7XG4gIFNob3cgYXMgc2hvdyxcbiAgRWRpdCBhcyBlZGl0LFxuICBMaXN0IGFzIGxpc3QsXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCYWRnZSwgQm94IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuaW1wb3J0IHsgU2hvd1Byb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuXG5jb25zdCBEZWZhdWx0UHJvcGVydHlWYWx1ZTogUmVhY3QuRkM8U2hvd1Byb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgcmF3VmFsdWUgPSByZWNvcmQ/LnBhcmFtc1twcm9wZXJ0eS5wYXRoXVxuXG4gICAgaWYgKHR5cGVvZiByYXdWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIDxCb3ggc3R5bGU9e3sgZm9udFN0eWxlOiAnaXRhbGljJyB9fT5ub3Qgc2V0PC9Cb3g+XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5LmF2YWlsYWJsZVZhbHVlcykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBwcm9wZXJ0eS5hdmFpbGFibGVWYWx1ZXMuZmluZChcbiAgICAgICAgICAgIChvcHQpID0+IG9wdC52YWx1ZSA9PT0gcmF3VmFsdWVcbiAgICAgICAgKVxuXG4gICAgICAgIGlmICghb3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gcmF3VmFsdWVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiA8QmFkZ2U+e29wdGlvbj8ubGFiZWwgfHwgcmF3VmFsdWV9PC9CYWRnZT5cbiAgICB9XG5cbiAgICByZXR1cm4gcmF3VmFsdWVcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVmYXVsdFByb3BlcnR5VmFsdWVcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFZhbHVlR3JvdXAgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IFNob3dQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCBEZWZhdWx0UHJvcGVydHlWYWx1ZSBmcm9tICcuL2RlZmF1bHQtcHJvcGVydHktdmFsdWUnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFNob3dQcm9wZXJ0eVByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHkgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFZhbHVlR3JvdXAgbGFiZWw9e3Byb3BlcnR5LmxhYmVsfT5cbiAgICAgICAgPERlZmF1bHRQcm9wZXJ0eVZhbHVlIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgPC9WYWx1ZUdyb3VwPlxuICAgIClcbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMsIFNob3dQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuXG4vKipcbiAqIEZ1bmN0aW9uIHVzZWQgaW4gUmVhY3QgbWVtbyB0byBjb21wYXJlIGlmIHByZXZpb3VzIHByb3BlcnR5IHZhbHVlIGFuZCBuZXh0XG4gKiBwcm9wZXJ0eSB2YWx1ZSBhcmUgdGhlIHNhbWUuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IHJlY29yZFByb3BlcnR5SXNFcXVhbCA9IChcbiAgcHJldlByb3BzOiBFZGl0UHJvcGVydHlQcm9wcyB8IFNob3dQcm9wZXJ0eVByb3BzLFxuICBuZXh0UHJvcHM6IEVkaXRQcm9wZXJ0eVByb3BzIHwgU2hvd1Byb3BlcnR5UHJvcHMsXG4pOiBib29sZWFuID0+IHtcbiAgY29uc3QgcHJldlZhbHVlID0gcHJldlByb3BzLnJlY29yZC5wYXJhbXNbcHJldlByb3BzLnByb3BlcnR5LnBhdGhdXG4gIGNvbnN0IG5leHRWYWx1ZSA9IG5leHRQcm9wcy5yZWNvcmQucGFyYW1zW25leHRQcm9wcy5wcm9wZXJ0eS5wYXRoXVxuXG4gIGNvbnN0IHByZXZFcnJvciA9IHByZXZQcm9wcy5yZWNvcmQuZXJyb3JzW3ByZXZQcm9wcy5wcm9wZXJ0eS5wYXRoXVxuICBjb25zdCBuZXh0RXJyb3IgPSBuZXh0UHJvcHMucmVjb3JkLmVycm9yc1tuZXh0UHJvcHMucHJvcGVydHkucGF0aF1cblxuICByZXR1cm4gcHJldlZhbHVlID09PSBuZXh0VmFsdWUgJiYgcHJldkVycm9yID09PSBuZXh0RXJyb3Jcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSwgbWVtbywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdCdcbmltcG9ydCB7IHdpdGhUaGVtZSwgRGVmYXVsdFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBJbnB1dCwgRm9ybU1lc3NhZ2UsIEZvcm1Hcm91cCwgc2VsZWN0U3R5bGVzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyByZWNvcmRQcm9wZXJ0eUlzRXF1YWwgfSBmcm9tICcuLi9yZWNvcmQtcHJvcGVydHktaXMtZXF1YWwnXG5pbXBvcnQgeyBQcm9wZXJ0eUxhYmVsIH0gZnJvbSAnLi4vdXRpbHMvcHJvcGVydHktbGFiZWwnXG5cbnR5cGUgQ29tYmluZWRQcm9wcyA9IEVkaXRQcm9wZXJ0eVByb3BzICYge3RoZW1lOiBEZWZhdWx0VGhlbWV9XG5cbmNvbnN0IEVkaXQ6IEZDPENvbWJpbmVkUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gcHJvcHNcbiAgY29uc3QgZXJyb3IgPSByZWNvcmQuZXJyb3JzPy5bcHJvcGVydHkucGF0aF1cblxuICByZXR1cm4gKFxuICAgIDxGb3JtR3JvdXAgZXJyb3I9e0Jvb2xlYW4oZXJyb3IpfT5cbiAgICAgIDxQcm9wZXJ0eUxhYmVsIHByb3BlcnR5PXtwcm9wZXJ0eX0gLz5cbiAgICAgIHtwcm9wZXJ0eS5hdmFpbGFibGVWYWx1ZXMgPyA8U2VsZWN0RWRpdCB7Li4ucHJvcHN9IC8+IDogPFRleHRFZGl0IHsuLi5wcm9wc30gLz59XG4gICAgICA8Rm9ybU1lc3NhZ2U+e2Vycm9yICYmIGVycm9yLm1lc3NhZ2V9PC9Gb3JtTWVzc2FnZT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5jb25zdCBTZWxlY3RFZGl0OiBGQzxDb21iaW5lZFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHRoZW1lLCByZWNvcmQsIHByb3BlcnR5LCBvbkNoYW5nZSB9ID0gcHJvcHNcbiAgaWYgKCFwcm9wZXJ0eS5hdmFpbGFibGVWYWx1ZXMpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG4gIGNvbnN0IHByb3BWYWx1ZSA9IHJlY29yZC5wYXJhbXM/Lltwcm9wZXJ0eS5wYXRoXSA/PyAnJ1xuICBjb25zdCBzdHlsZXMgPSBzZWxlY3RTdHlsZXModGhlbWUpXG4gIGNvbnN0IHNlbGVjdGVkID0gcHJvcGVydHkuYXZhaWxhYmxlVmFsdWVzLmZpbmQoYXYgPT4gYXYudmFsdWUgPT09IHByb3BWYWx1ZSlcblxuICByZXR1cm4gKFxuICAgIDxTZWxlY3RcbiAgICAgIGlzQ2xlYXJhYmxlXG4gICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICAgIHZhbHVlPXtzZWxlY3RlZH1cbiAgICAgIG9wdGlvbnM9e3Byb3BlcnR5LmF2YWlsYWJsZVZhbHVlc31cbiAgICAgIG9uQ2hhbmdlPXtzID0+IG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIHM/LnZhbHVlID8/ICcnKX1cbiAgICAgIGlzRGlzYWJsZWQ9e3Byb3BlcnR5LmlzRGlzYWJsZWR9XG4gICAgICB7Li4ucHJvcGVydHkucHJvcHN9XG4gICAgLz5cbiAgKVxufVxuXG5jb25zdCBUZXh0RWRpdDogRkM8Q29tYmluZWRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9ID0gcHJvcHNcbiAgY29uc3QgcHJvcFZhbHVlID0gcmVjb3JkLnBhcmFtcz8uW3Byb3BlcnR5LnBhdGhdID8/ICcnXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUocHJvcFZhbHVlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlICE9PSBwcm9wVmFsdWUpIHtcbiAgICAgIHNldFZhbHVlKHByb3BWYWx1ZSlcbiAgICB9XG4gIH0sIFtwcm9wVmFsdWVdKVxuXG4gIHJldHVybiAoXG4gICAgPElucHV0XG4gICAgICBpZD17cHJvcGVydHkucGF0aH1cbiAgICAgIG5hbWU9e3Byb3BlcnR5LnBhdGh9XG4gICAgICBvbkNoYW5nZT17ZSA9PiBzZXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICBvbkJsdXI9eygpID0+IG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIHZhbHVlKX1cbiAgICAgIC8vIGhhbmRsZSBjbGlja2luZyBFTlRFUlxuICAgICAgb25LZXlEb3duPXtlID0+IGUua2V5Q29kZSA9PT0gMTMgJiYgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgdmFsdWUpfVxuICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgZGlzYWJsZWQ9e3Byb3BlcnR5LmlzRGlzYWJsZWR9XG4gICAgICB7Li4ucHJvcGVydHkucHJvcHN9XG4gICAgLz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUobWVtbyhFZGl0LCByZWNvcmRQcm9wZXJ0eUlzRXF1YWwpKVxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXG5pbXBvcnQgeyB3aXRoVGhlbWUsIFRoZW1lUHJvcHMsIERlZmF1bHRUaGVtZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBMYWJlbCwgSW5wdXQsIGZpbHRlclN0eWxlcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgRmlsdGVyUHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmNsYXNzIEZpbHRlciBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RmlsdGVyUHJvcGVydHlQcm9wcyAmIFRoZW1lUHJvcHM8RGVmYXVsdFRoZW1lPj4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UgPSB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcylcbiAgICB0aGlzLmhhbmRsZVNlbGVjdENoYW5nZSA9IHRoaXMuaGFuZGxlU2VsZWN0Q2hhbmdlLmJpbmQodGhpcylcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHkgfSA9IHRoaXMucHJvcHNcbiAgICBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCBldmVudC50YXJnZXQudmFsdWUpXG4gIH1cblxuICBoYW5kbGVTZWxlY3RDaGFuZ2Uoc2VsZWN0ZWQpOiB2b2lkIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0ZWQgPyBzZWxlY3RlZC52YWx1ZSA6ICcnXG4gICAgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgdmFsdWUpXG4gIH1cblxuICByZW5kZXJJbnB1dCgpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIGZpbHRlciwgdGhlbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBmaWx0ZXJLZXkgPSBgZmlsdGVyLSR7cHJvcGVydHkucGF0aH1gXG4gICAgY29uc3QgdmFsdWUgPSBmaWx0ZXJbcHJvcGVydHkucGF0aF0gfHwgJydcbiAgICBpZiAocHJvcGVydHkuYXZhaWxhYmxlVmFsdWVzKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZCA9IHByb3BlcnR5LmF2YWlsYWJsZVZhbHVlcy5maW5kKGF2ID0+IGF2LnZhbHVlID09PSB2YWx1ZSlcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICB2YWx1ZT17dHlwZW9mIHNlbGVjdGVkID09PSAndW5kZWZpbmVkJyA/ICcnIDogc2VsZWN0ZWR9XG4gICAgICAgICAgaXNDbGVhcmFibGVcbiAgICAgICAgICBvcHRpb25zPXtwcm9wZXJ0eS5hdmFpbGFibGVWYWx1ZXN9XG4gICAgICAgICAgc3R5bGVzPXtmaWx0ZXJTdHlsZXModGhlbWUpfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlbGVjdENoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxJbnB1dFxuICAgICAgICBuYW1lPXtmaWx0ZXJLZXl9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAvPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHkgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1Hcm91cCB2YXJpYW50PVwiZmlsdGVyXCI+XG4gICAgICAgIDxMYWJlbD57cHJvcGVydHkubGFiZWx9PC9MYWJlbD5cbiAgICAgICAge3RoaXMucmVuZGVySW5wdXQoKX1cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgIClcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEZpbHRlcilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgUmVjb3JkSlNPTiwgUmVzb3VyY2VKU09OLCBQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IERlZmF1bHRQcm9wZXJ0eVZhbHVlIGZyb20gJy4vZGVmYXVsdC1wcm9wZXJ0eS12YWx1ZSdcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcHJvcGVydHk6IFByb3BlcnR5SlNPTjtcbiAgcmVjb3JkOiBSZWNvcmRKU09OO1xuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKTogUmVhY3QuUmVhY3RDaGlsZCB7XG4gICAgcmV0dXJuICg8RGVmYXVsdFByb3BlcnR5VmFsdWUgey4uLnRoaXMucHJvcHN9IC8+KVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgbWVtbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2hlY2tCb3gsIEZvcm1Hcm91cCwgRm9ybU1lc3NhZ2UgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IHJlY29yZFByb3BlcnR5SXNFcXVhbCB9IGZyb20gJy4uL3JlY29yZC1wcm9wZXJ0eS1pcy1lcXVhbCdcbmltcG9ydCB7IFByb3BlcnR5TGFiZWwgfSBmcm9tICcuLi91dGlscy9wcm9wZXJ0eS1sYWJlbCdcblxuY29uc3QgcGFyc2VWYWx1ZSA9ICh2YWx1ZSk6IGJvb2xlYW4gPT4gISghdmFsdWUgfHwgdmFsdWUgPT09ICdmYWxzZScpXG5cbmNvbnN0IEVkaXQ6IFJlYWN0LkZDPEVkaXRQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCBvbkNoYW5nZSwgcmVjb3JkIH0gPSBwcm9wc1xuICBjb25zdCB2YWx1ZSA9IHBhcnNlVmFsdWUocmVjb3JkLnBhcmFtcyAmJiByZWNvcmQucGFyYW1zW3Byb3BlcnR5LnBhdGhdKVxuICBjb25zdCBlcnJvciA9IHJlY29yZC5lcnJvcnMgJiYgcmVjb3JkLmVycm9yc1twcm9wZXJ0eS5wYXRoXVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICgpOiB2b2lkID0+IHtcbiAgICBpZiAoIXByb3BlcnR5LmlzRGlzYWJsZWQpIHtcbiAgICAgIG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsICF2YWx1ZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxGb3JtR3JvdXAgZXJyb3I9eyEhZXJyb3J9PlxuICAgICAgPENoZWNrQm94XG4gICAgICAgIGlkPXtwcm9wZXJ0eS5wYXRofVxuICAgICAgICBuYW1lPXtwcm9wZXJ0eS5wYXRofVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICBjaGVja2VkPXt2YWx1ZX1cbiAgICAgICAgZGlzYWJsZWQ9e3Byb3BlcnR5LmlzRGlzYWJsZWR9XG4gICAgICAgIHsuLi5wcm9wZXJ0eS5wcm9wc31cbiAgICAgIC8+XG4gICAgICA8UHJvcGVydHlMYWJlbCBwcm9wZXJ0eT17cHJvcGVydHl9IHByb3BzPXt7IGlubGluZTogdHJ1ZSB9fSAvPlxuICAgICAgPEZvcm1NZXNzYWdlPntlcnJvciAmJiBlcnJvci5tZXNzYWdlfTwvRm9ybU1lc3NhZ2U+XG4gICAgPC9Gb3JtR3JvdXA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhFZGl0LCByZWNvcmRQcm9wZXJ0eUlzRXF1YWwpXG4iLCJleHBvcnQgZGVmYXVsdCAodmFsdWUpOiAnWWVzJyB8ICdObycgfCAnJyA9PiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbiAgcmV0dXJuIHZhbHVlID8gJ1llcycgOiAnTm8nXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCYWRnZSB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgU2hvd1Byb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9ob29rcydcbmltcG9ydCBtYXBWYWx1ZSBmcm9tICcuL21hcC12YWx1ZSdcblxuY29uc3QgQm9vbGVhblByb3BlcnR5VmFsdWU6IFJlYWN0LkZDPFNob3dQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlY29yZCwgcHJvcGVydHksIHJlc291cmNlIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgdHJhbnNsYXRlUHJvcGVydHkgfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICBjb25zdCByYXdWYWx1ZSA9IHJlY29yZD8ucGFyYW1zW3Byb3BlcnR5LnBhdGhdXG5cbiAgaWYgKHR5cGVvZiByYXdWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcmF3VmFsdWUgPT09ICcnKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuICBjb25zdCBiYXNlID0gbWFwVmFsdWUocmF3VmFsdWUpXG4gIGNvbnN0IHRyYW5zbGF0aW9uID0gdHJhbnNsYXRlUHJvcGVydHkoYCR7cHJvcGVydHkucGF0aH0uJHtyYXdWYWx1ZX1gLCByZXNvdXJjZS5pZCwge1xuICAgIGRlZmF1bHRWYWx1ZTogYmFzZSxcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxCYWRnZSBvdXRsaW5lIHNpemU9XCJzbVwiPnt0cmFuc2xhdGlvbn08L0JhZGdlPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2xlYW5Qcm9wZXJ0eVZhbHVlXG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBWYWx1ZUdyb3VwIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgQm9vbGVhblByb3BlcnR5VmFsdWUgZnJvbSAnLi9ib29sZWFuLXByb3BlcnR5LXZhbHVlJ1xuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxFZGl0UHJvcGVydHlQcm9wcz4ge1xuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZhbHVlR3JvdXAgbGFiZWw9e3Byb3BlcnR5LmxhYmVsfT5cbiAgICAgICAgPEJvb2xlYW5Qcm9wZXJ0eVZhbHVlIHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgPC9WYWx1ZUdyb3VwPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBSZWNvcmRKU09OLCBQcm9wZXJ0eUpTT04sIFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgQm9vbGVhblByb3BlcnR5VmFsdWUgZnJvbSAnLi9ib29sZWFuLXByb3BlcnR5LXZhbHVlJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBwcm9wZXJ0eTogUHJvcGVydHlKU09OO1xuICByZWNvcmQ6IFJlY29yZEpTT047XG4gIHJlc291cmNlOiBSZXNvdXJjZUpTT047XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdENoaWxkIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJvb2xlYW5Qcm9wZXJ0eVZhbHVlIHsuLi50aGlzLnByb3BzfSAvPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFNlbGVjdCBmcm9tICdyZWFjdC1zZWxlY3QnXG5pbXBvcnQgeyB3aXRoVGhlbWUsIERlZmF1bHRUaGVtZSwgVGhlbWVQcm9wcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgRm9ybUdyb3VwLCBMYWJlbCwgZmlsdGVyU3R5bGVzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgbWFwVmFsdWUgZnJvbSAnLi9tYXAtdmFsdWUnXG5pbXBvcnQgeyBGaWx0ZXJQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxuY2xhc3MgRmlsdGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxGaWx0ZXJQcm9wZXJ0eVByb3BzICYgVGhlbWVQcm9wczxEZWZhdWx0VGhlbWU+PiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2Uoc2VsZWN0ZWQpOiB2b2lkIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBwcm9wZXJ0eSB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZhbHVlID0gc2VsZWN0ZWQgPyBzZWxlY3RlZC52YWx1ZSA6ICcnXG4gICAgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgdmFsdWUpXG4gIH1cblxuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IHByb3BlcnR5LCBmaWx0ZXIgPSB7fSwgdGhlbWUgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBmaWx0ZXJbcHJvcGVydHkucGF0aF0gPT09ICd1bmRlZmluZWQnID8gJycgOiBmaWx0ZXJbcHJvcGVydHkucGF0aF1cbiAgICBjb25zdCBvcHRpb25zID0gW1xuICAgICAgeyB2YWx1ZTogdHJ1ZSwgbGFiZWw6IG1hcFZhbHVlKHRydWUpIH0sXG4gICAgICB7IHZhbHVlOiBmYWxzZSwgbGFiZWw6IG1hcFZhbHVlKGZhbHNlKSB9LFxuICAgIF1cbiAgICBjb25zdCBzZWxlY3RlZCA9IG9wdGlvbnMuZmluZChvID0+IG8udmFsdWUgPT09IHZhbHVlKVxuICAgIHJldHVybiAoXG4gICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICA8TGFiZWw+e3Byb3BlcnR5LmxhYmVsfTwvTGFiZWw+XG4gICAgICAgIDxTZWxlY3RcbiAgICAgICAgICB2YWx1ZT17dHlwZW9mIHNlbGVjdGVkID09PSAndW5kZWZpbmVkJyA/ICcnIDogc2VsZWN0ZWR9XG4gICAgICAgICAgaXNDbGVhcmFibGVcbiAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgICAgIHN0eWxlcz17ZmlsdGVyU3R5bGVzKHRoZW1lKX1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEZpbHRlciBhcyBuZXZlcilcbiIsImltcG9ydCBSZWFjdCwgeyBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBEYXRlUGlja2VyLCBGb3JtR3JvdXAsIEZvcm1NZXNzYWdlIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyByZWNvcmRQcm9wZXJ0eUlzRXF1YWwgfSBmcm9tICcuLi9yZWNvcmQtcHJvcGVydHktaXMtZXF1YWwnXG5pbXBvcnQgeyBQcm9wZXJ0eUxhYmVsIH0gZnJvbSAnLi4vdXRpbHMvcHJvcGVydHktbGFiZWwnXG5cbmNvbnN0IEVkaXQ6IFJlYWN0LkZDPEVkaXRQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCBvbkNoYW5nZSwgcmVjb3JkIH0gPSBwcm9wc1xuICBjb25zdCB2YWx1ZSA9IChyZWNvcmQucGFyYW1zICYmIHJlY29yZC5wYXJhbXNbcHJvcGVydHkucGF0aF0pIHx8ICcnXG4gIGNvbnN0IGVycm9yID0gcmVjb3JkLmVycm9ycyAmJiByZWNvcmQuZXJyb3JzW3Byb3BlcnR5LnBhdGhdXG5cbiAgcmV0dXJuIChcbiAgICA8Rm9ybUdyb3VwIGVycm9yPXshIWVycm9yfT5cbiAgICAgIDxQcm9wZXJ0eUxhYmVsIHByb3BlcnR5PXtwcm9wZXJ0eX0gLz5cbiAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgZGlzYWJsZWQ9e3Byb3BlcnR5LmlzRGlzYWJsZWR9XG4gICAgICAgIG9uQ2hhbmdlPXsoZGF0YTogc3RyaW5nKTogdm9pZCA9PiBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCBkYXRhKX1cbiAgICAgICAgcHJvcGVydHlUeXBlPXtwcm9wZXJ0eS50eXBlfVxuICAgICAgICB7Li4ucHJvcGVydHkucHJvcHN9XG4gICAgICAvPlxuICAgICAgPEZvcm1NZXNzYWdlPntlcnJvciAmJiBlcnJvci5tZXNzYWdlfTwvRm9ybU1lc3NhZ2U+XG4gICAgPC9Gb3JtR3JvdXA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhFZGl0LCByZWNvcmRQcm9wZXJ0eUlzRXF1YWwpXG4iLCJpbXBvcnQgeyBmb3JtYXREYXRlUHJvcGVydHkgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyBQcm9wZXJ0eVR5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9iYWNrZW5kL2FkYXB0ZXJzL3Byb3BlcnR5L2Jhc2UtcHJvcGVydHknXG5cbmV4cG9ydCBkZWZhdWx0ICh2YWx1ZTogRGF0ZSwgcHJvcGVydHlUeXBlOiBQcm9wZXJ0eVR5cGUpOiBzdHJpbmcgPT4ge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKVxuICBpZiAoZGF0ZSkge1xuICAgIHJldHVybiBmb3JtYXREYXRlUHJvcGVydHkoZGF0ZSwgcHJvcGVydHlUeXBlKVxuICB9XG4gIHJldHVybiAnJ1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVmFsdWVHcm91cCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IG1hcFZhbHVlIGZyb20gJy4vbWFwLXZhbHVlJ1xuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxFZGl0UHJvcGVydHlQcm9wcz4ge1xuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB2YWx1ZSA9IG1hcFZhbHVlKHJlY29yZC5wYXJhbXNbcHJvcGVydHkucGF0aF0sIHByb3BlcnR5LnR5cGUpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZhbHVlR3JvdXAgbGFiZWw9e3Byb3BlcnR5LmxhYmVsfT5cbiAgICAgICAge3ZhbHVlfVxuICAgICAgPC9WYWx1ZUdyb3VwPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgbWFwVmFsdWUgZnJvbSAnLi9tYXAtdmFsdWUnXG5pbXBvcnQgeyBSZXNvdXJjZUpTT04sIFJlY29yZEpTT04sIFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHByb3BlcnR5OiBQcm9wZXJ0eUpTT047XG4gIHJlY29yZDogUmVjb3JkSlNPTjtcbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Q2hpbGQge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZhbHVlID0gbWFwVmFsdWUocmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXSwgcHJvcGVydHkudHlwZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8c3Bhbj57dmFsdWV9PC9zcGFuPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgZmxhdCBmcm9tICdmbGF0J1xuaW1wb3J0IEJhc2VQcm9wZXJ0eSBmcm9tICcuLi8uLi9hZGFwdGVycy9wcm9wZXJ0eS9iYXNlLXByb3BlcnR5J1xuaW1wb3J0IEJhc2VSZXNvdXJjZSBmcm9tICcuLi8uLi9hZGFwdGVycy9yZXNvdXJjZS9iYXNlLXJlc291cmNlJ1xuaW1wb3J0IEJhc2VSZWNvcmQgZnJvbSAnLi4vLi4vYWRhcHRlcnMvcmVjb3JkL2Jhc2UtcmVjb3JkJ1xuXG5leHBvcnQgY29uc3QgUEFSQU1fU0VQQVJBVE9SID0gJ35+J1xuXG5leHBvcnQgdHlwZSBGaWx0ZXJFbGVtZW50ID0ge1xuICBwYXRoOiBzdHJpbmc7XG4gIHByb3BlcnR5OiBCYXNlUHJvcGVydHk7XG4gIHZhbHVlOiBzdHJpbmcgfCB7XG4gICAgZnJvbTogc3RyaW5nO1xuICAgIHRvOiBzdHJpbmc7XG4gIH07XG4gIHBvcHVsYXRlZD86IEJhc2VSZWNvcmQgfCBudWxsO1xufVxuXG5pbnRlcmZhY2UgUmVkdWNlQ2FsbGJhY2s8VD4ge1xuICAobWVtbzogVCwgZWxlbWVudDogRmlsdGVyRWxlbWVudCk6IFQ7XG59XG5cbi8qKlxuICogRmlsdGVyIG9iamVjdCB3cmFwcGluZyB1cCBzZWxlY3RlZCBmaWx0ZXJzLlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIEZpbHRlciB7XG4gIHB1YmxpYyBmaWx0ZXJzOiB7W2tleTogc3RyaW5nXTogRmlsdGVyRWxlbWVudH1cblxuICBwcml2YXRlIHJlc291cmNlOiBCYXNlUmVzb3VyY2VcblxuICAvKipcbiAgICogQ2hhbmdlcyByYXcgbmVzdGVkIGZpbHRlcnMgdG8gZm9ybSBPYmplY3Q8cGF0aCwgdmFsdWU+LlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKiBjb25zdCBmaWx0ZXJzID0ge1xuICAgKiAgbmVzdGVkOiB7ZmllbGQ6ICdhbGEnfSxcbiAgICogICdkYXRhRmllbGR+fmZyb20nOiAnMjAxOS0wOC0xNCdcbiAgICogfVxuICAgKlxuICAgKiBjb25zdCBub3JtYWxpemVkID0gRmlsdGVyLm5vcm1hbGl6ZUZpbHRlcnMoZmlsdGVycylcbiAgICogLy8ge1xuICAgKiAvLyAgICduZXN0ZWQuZmlsdGVyJzogJ2FsYScsXG4gICAqIC8vICAgJ2RhdGFGaWVsZCc6IHtmcm9tOiAnMjAxOS0wOC0xNCd9XG4gICAqIC8vIH1cbiAgICpcbiAgICpcbiAgICogQHBhcmFtICAge09iamVjdH0gIGZpbHRlcnNcbiAgICpcbiAgICogQHJldHVybiAge09iamVjdH1cbiAgICovXG4gIHN0YXRpYyBub3JtYWxpemVLZXlzKGZpbHRlcnMpOiBNYXA8c3RyaW5nLCBhbnk+IHtcbiAgICByZXR1cm4gZmxhdC51bmZsYXR0ZW4oZmxhdC5mbGF0dGVuKGZpbHRlcnMpLCB7IGRlbGltaXRlcjogUEFSQU1fU0VQQVJBVE9SIH0pXG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtICAge09iamVjdDxTdHJpbmcsT2JqZWN0IHwgU3RyaW5nPn0gIGZpbHRlcnMgICBzZWxlY3RlZCBmaWx0ZXJzXG4gICAqIEBwYXJhbSAgIHtCYXNlUmVzb3VyY2V9ICAgICAgICAgICAgICAgICAgICByZXNvdXJjZSAgICByZXNvdXJjZSB3aGljaCBpcyBmaWx0ZXJlZFxuICAgKi9cbiAgY29uc3RydWN0b3IoZmlsdGVycyA9IHt9LCByZXNvdXJjZSkge1xuICAgIHRoaXMucmVzb3VyY2UgPSByZXNvdXJjZVxuICAgIGNvbnN0IG5vcm1hbGl6ZWQgPSBGaWx0ZXIubm9ybWFsaXplS2V5cyhmaWx0ZXJzKVxuICAgIHRoaXMuZmlsdGVycyA9IE9iamVjdC5rZXlzKG5vcm1hbGl6ZWQpLnJlZHVjZSgobWVtbywgcGF0aCkgPT4ge1xuICAgICAgbWVtb1twYXRoXSA9IHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgcHJvcGVydHk6IHRoaXMucmVzb3VyY2UucHJvcGVydHkocGF0aC5zcGxpdCgnLicpWzBdKSxcbiAgICAgICAgdmFsdWU6IG5vcm1hbGl6ZWRbcGF0aF0sXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZW1vXG4gICAgfSwge30pXG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBmaWx0ZXIgZm9yIGEgZ2l2ZW4gcHJvcGVydHkga2V5XG4gICAqXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBrZXkgICAgICBwcm9wZXJ0eSBrZXlcbiAgICogQHJldHVybnMge0ZpbHRlci5Qcm9wZXJ0eSB8IHVuZGVmaW5lZH1cbiAgICovXG4gIGdldChrZXk6IHN0cmluZyk6IEZpbHRlckVsZW1lbnQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5maWx0ZXJzW2tleV1cbiAgfVxuXG4gIC8qKlxuICAgKiBQb3B1bGF0ZXMgYWxsIGZpbHRlcmVkIHByb3BlcnRpZXMgd2hpY2ggcmVmZXJzIHRvIG90aGVyIHJlc291cmNlc1xuICAgKi9cbiAgYXN5bmMgcG9wdWxhdGUoKTogUHJvbWlzZTxGaWx0ZXI+IHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5maWx0ZXJzKVxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBrZXlzLmxlbmd0aDsgaW5kZXggKz0gMSkge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpbmRleF1cbiAgICAgIGNvbnN0IHJlZmVyZW5jZVJlc291cmNlID0gdGhpcy5yZXNvdXJjZS5kZWNvcmF0ZSgpLmdldFByb3BlcnR5QnlLZXkoa2V5KT8ucmVmZXJlbmNlKClcbiAgICAgIGlmIChyZWZlcmVuY2VSZXNvdXJjZSkge1xuICAgICAgICB0aGlzLmZpbHRlcnNba2V5XS5wb3B1bGF0ZWQgPSBhd2FpdCByZWZlcmVuY2VSZXNvdXJjZS5maW5kT25lKFxuICAgICAgICAgIHRoaXMuZmlsdGVyc1trZXldLnZhbHVlIGFzIHN0cmluZyxcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgcmVkdWNlPFQ+KGNhbGxiYWNrOiBSZWR1Y2VDYWxsYmFjazxUPiwgaW5pdGlhbDogVCk6IFQge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuZmlsdGVycykucmVkdWNlKGNhbGxiYWNrLCBpbml0aWFsIHx8IHt9IGFzIFQpXG4gIH1cblxuICBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhT2JqZWN0LmtleXModGhpcy5maWx0ZXJzKS5sZW5ndGhcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvcm1Hcm91cCwgTGFiZWwsIERhdGVQaWNrZXIgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCAqIGFzIEJhY2tlbmRGaWx0ZXIgZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC91dGlscy9maWx0ZXIvZmlsdGVyJ1xuaW1wb3J0IHsgRmlsdGVyUHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmNvbnN0IHsgUEFSQU1fU0VQQVJBVE9SIH0gPSBCYWNrZW5kRmlsdGVyXG5cblxuY29uc3QgRmlsdGVyOiBSZWFjdC5GQzxGaWx0ZXJQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCBmaWx0ZXIsIG9uQ2hhbmdlIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGZyb21LZXkgPSBgJHtwcm9wZXJ0eS5wYXRofSR7UEFSQU1fU0VQQVJBVE9SfWZyb21gXG4gIGNvbnN0IHRvS2V5ID0gYCR7cHJvcGVydHkucGF0aH0ke1BBUkFNX1NFUEFSQVRPUn10b2BcbiAgY29uc3QgZnJvbVZhbHVlID0gZmlsdGVyW2Zyb21LZXldXG4gIGNvbnN0IHRvVmFsdWUgPSBmaWx0ZXJbdG9LZXldXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8Rm9ybUdyb3VwIHZhcmlhbnQ9XCJmaWx0ZXJcIj5cbiAgICAgICAgPExhYmVsPntwcm9wZXJ0eS5sYWJlbH08L0xhYmVsPlxuICAgICAgICA8TGFiZWw+LSBGcm9tOiA8L0xhYmVsPlxuICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgIHZhbHVlPXtmcm9tVmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhkYXRhOiBzdHJpbmcpOiB2b2lkID0+IG9uQ2hhbmdlKGZyb21LZXksIGRhdGEpfVxuICAgICAgICAgIHByb3BlcnR5VHlwZT17cHJvcGVydHkudHlwZX1cbiAgICAgICAgLz5cbiAgICAgICAgPExhYmVsIG10PVwiZGVmYXVsdFwiPi0gVG86IDwvTGFiZWw+XG4gICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgdmFsdWU9e3RvVmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhkYXRhOiBzdHJpbmcpOiB2b2lkID0+IG9uQ2hhbmdlKHRvS2V5LCBkYXRhKX1cbiAgICAgICAgICBwcm9wZXJ0eVR5cGU9e3Byb3BlcnR5LnR5cGV9XG4gICAgICAgIC8+XG4gICAgICA8L0Zvcm1Hcm91cD5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlclxuIiwiLyogZXNsaW50LWRpc2FibGUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVzZS1iZWZvcmUtZGVmaW5lICovXG4vKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC1leHByZXNzaW9ucyAqL1xuaW1wb3J0IFJlYWN0LCB7IEZDLCBtZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBGb3JtR3JvdXAsXG4gIEZvcm1NZXNzYWdlLFxuICBSaWNoVGV4dCxcbiAgUXVpbGxPcHRpb25zLFxuICBEZWZhdWx0UXVpbGxUb29sYmFyT3B0aW9ucyxcbn0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyByZWNvcmRQcm9wZXJ0eUlzRXF1YWwgfSBmcm9tICcuLi9yZWNvcmQtcHJvcGVydHktaXMtZXF1YWwnXG5pbXBvcnQgeyBQcm9wZXJ0eUxhYmVsIH0gZnJvbSAnLi4vdXRpbHMvcHJvcGVydHktbGFiZWwnXG5cbnR5cGUgQ3VzdG9tVHlwZSA9IHtcbiAgYm9yZGVybGVzcz86IGJvb2xlYW47XG4gIHF1aWxsPzogUXVpbGxPcHRpb25zO1xufVxuXG5jb25zdCBFZGl0OiBGQzxFZGl0UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkLCBvbkNoYW5nZSB9ID0gcHJvcHNcbiAgY29uc3QgdmFsdWUgPSByZWNvcmQucGFyYW1zPy5bcHJvcGVydHkucGF0aF0gPz8gJydcbiAgY29uc3QgZXJyb3IgPSByZWNvcmQuZXJyb3JzICYmIHJlY29yZC5lcnJvcnNbcHJvcGVydHkucGF0aF1cblxuICBjb25zdCB7IHByb3BzOiBwcm9wZXJ0eVByb3BzIH0gPSBwcm9wZXJ0eVxuXG4gIGNvbnN0IHsgcXVpbGwgPSB7fSwgLi4uY3VzdG9tUHJvcHMgfSA9IHByb3BlcnR5UHJvcHMgYXMgQ3VzdG9tVHlwZSB8fCB7fVxuICBxdWlsbC50aGVtZSA9IHF1aWxsLnRoZW1lIHx8ICdzbm93J1xuICBxdWlsbC5tb2R1bGVzID0ge1xuICAgIHRvb2xiYXI6IERlZmF1bHRRdWlsbFRvb2xiYXJPcHRpb25zLFxuICAgIC4uLihxdWlsbC5tb2R1bGVzIHx8IHt9KSxcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17Qm9vbGVhbihlcnJvcil9PlxuICAgICAgPFByb3BlcnR5TGFiZWwgcHJvcGVydHk9e3Byb3BlcnR5fSAvPlxuICAgICAgPFJpY2hUZXh0XG4gICAgICAgIHsuLi5jdXN0b21Qcm9wc31cbiAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17Y29udGVudCA9PiBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCBjb250ZW50KX1cbiAgICAgICAgcXVpbGw9e3F1aWxsfVxuICAgICAgLz5cbiAgICAgIDxGb3JtTWVzc2FnZT57ZXJyb3I/Lm1lc3NhZ2V9PC9Gb3JtTWVzc2FnZT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbClcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFZhbHVlR3JvdXAsIFRleHQsIEJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaG93IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxFZGl0UHJvcGVydHlQcm9wcz4ge1xuICBwcml2YXRlIGNvbnRlbnRSZWY6IFJlYWN0LlJlZk9iamVjdDxhbnk+XG5cbiAgY29uc3RydWN0b3IocHJvcHM6IEVkaXRQcm9wZXJ0eVByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5jb250ZW50UmVmID0gUmVhY3QuY3JlYXRlUmVmKClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHZhbHVlID0gcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXVxuICAgIHRoaXMuY29udGVudFJlZi5jdXJyZW50LmlubmVySFRNTCA9IHZhbHVlXG4gIH1cblxuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZhbHVlR3JvdXAgbGFiZWw9e3Byb3BlcnR5LmxhYmVsfT5cbiAgICAgICAgPEJveCB2YXJpYW50PVwiZ3JleVwiIGJvcmRlcj1cImRlZmF1bHRcIj5cbiAgICAgICAgICA8VGV4dCByZWY9e3RoaXMuY29udGVudFJlZn0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1ZhbHVlR3JvdXA+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBTaG93UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmNvbnN0IExpc3Q6IFJlYWN0LkZDPFNob3dQcm9wZXJ0eVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCByZWNvcmQgfSA9IHByb3BzXG4gIGNvbnN0IG9yaWdpbmFsID0gcmVjb3JkLnBhcmFtc1twcm9wZXJ0eS5wYXRoXSB8fCAnJ1xuICBjb25zdCB2YWx1ZSA9IG9yaWdpbmFsLnN1YnN0cmluZygwLCAxNSkgKyAob3JpZ2luYWwubGVuZ3RoID4gMTUgPyAnLi4uJyA6ICcnKVxuXG4gIHJldHVybiAoXG4gICAgPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0XG4iLCJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0L2FzeW5jJ1xuaW1wb3J0IHsgd2l0aFRoZW1lLCBEZWZhdWx0VGhlbWUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybU1lc3NhZ2UsIHNlbGVjdFN0eWxlcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IEFwaUNsaWVudCBmcm9tICcuLi8uLi8uLi91dGlscy9hcGktY2xpZW50J1xuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMsIFNlbGVjdFJlY29yZCB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyBSZWNvcmRKU09OIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IFByb3BlcnR5TGFiZWwgfSBmcm9tICcuLi91dGlscy9wcm9wZXJ0eS1sYWJlbCdcblxudHlwZSBDb21iaW5lZFByb3BzID0gRWRpdFByb3BlcnR5UHJvcHMgJiB7dGhlbWU6IERlZmF1bHRUaGVtZX1cbnR5cGUgU2VsZWN0UmVjb3JkRW5oYW5jZWQgPSBTZWxlY3RSZWNvcmQgJiB7XG4gIHJlY29yZDogUmVjb3JkSlNPTjtcbn1cblxuY29uc3QgRWRpdDogRkM8Q29tYmluZWRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHksIHJlY29yZCwgdGhlbWUgfSA9IHByb3BzXG4gIGNvbnN0IHsgcmVmZXJlbmNlOiByZXNvdXJjZUlkIH0gPSBwcm9wZXJ0eVxuXG4gIGlmICghcmVzb3VyY2VJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHJlZmVyZW5jZSByZXNvdXJjZSBpbiBwcm9wZXJ0eSAnJHtwcm9wZXJ0eS5wYXRofSdgKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHNlbGVjdGVkOiBTZWxlY3RSZWNvcmRFbmhhbmNlZCk6IHZvaWQgPT4ge1xuICAgIGlmIChzZWxlY3RlZCkge1xuICAgICAgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgc2VsZWN0ZWQudmFsdWUsIHNlbGVjdGVkLnJlY29yZClcbiAgICB9IGVsc2Uge1xuICAgICAgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgbnVsbClcbiAgICB9XG4gIH1cblxuICBjb25zdCBsb2FkT3B0aW9ucyA9IGFzeW5jIChpbnB1dFZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPFNlbGVjdFJlY29yZEVuaGFuY2VkW10+ID0+IHtcbiAgICBjb25zdCBhcGkgPSBuZXcgQXBpQ2xpZW50KClcblxuICAgIGNvbnN0IG9wdGlvblJlY29yZHMgPSBhd2FpdCBhcGkuc2VhcmNoUmVjb3Jkcyh7XG4gICAgICByZXNvdXJjZUlkLFxuICAgICAgcXVlcnk6IGlucHV0VmFsdWUsXG4gICAgfSlcbiAgICByZXR1cm4gb3B0aW9uUmVjb3Jkcy5tYXAoKG9wdGlvblJlY29yZDogUmVjb3JkSlNPTikgPT4gKHtcbiAgICAgIHZhbHVlOiBvcHRpb25SZWNvcmQuaWQsXG4gICAgICBsYWJlbDogb3B0aW9uUmVjb3JkLnRpdGxlLFxuICAgICAgcmVjb3JkOiBvcHRpb25SZWNvcmQsXG4gICAgfSkpXG4gIH1cbiAgY29uc3QgZXJyb3IgPSByZWNvcmQ/LmVycm9yc1twcm9wZXJ0eS5wYXRoXVxuXG4gIGNvbnN0IHNlbGVjdGVkSWQgPSByZWNvcmQ/LnBhcmFtc1twcm9wZXJ0eS5wYXRoXSBhcyBzdHJpbmcgfCB1bmRlZmluZWRcbiAgY29uc3QgW2xvYWRlZFJlY29yZCwgc2V0TG9hZGVkUmVjb3JkXSA9IHVzZVN0YXRlPFJlY29yZEpTT04gfCB1bmRlZmluZWQ+KClcbiAgY29uc3QgW2xvYWRpbmdSZWNvcmQsIHNldExvYWRpbmdSZWNvcmRdID0gdXNlU3RhdGUoMClcbiAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHJlY29yZD8ucG9wdWxhdGVkW3Byb3BlcnR5LnBhdGhdID8/IGxvYWRlZFJlY29yZFxuICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IChzZWxlY3RlZElkICYmIHNlbGVjdGVkVmFsdWUpID8ge1xuICAgIHZhbHVlOiBzZWxlY3RlZFZhbHVlLmlkLFxuICAgIGxhYmVsOiBzZWxlY3RlZFZhbHVlLnRpdGxlLFxuICB9IDoge1xuICAgIHZhbHVlOiAnJyxcbiAgICBsYWJlbDogJycsXG4gIH1cbiAgY29uc3Qgc3R5bGVzID0gc2VsZWN0U3R5bGVzKHRoZW1lKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZFZhbHVlICYmIHNlbGVjdGVkSWQpIHtcbiAgICAgIHNldExvYWRpbmdSZWNvcmQoYyA9PiBjICsgMSlcbiAgICAgIGNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxuICAgICAgYXBpLnJlY29yZEFjdGlvbih7XG4gICAgICAgIGFjdGlvbk5hbWU6ICdzaG93JyxcbiAgICAgICAgcmVzb3VyY2VJZCxcbiAgICAgICAgcmVjb3JkSWQ6IHNlbGVjdGVkSWQsXG4gICAgICB9KS50aGVuKCh7IGRhdGEgfTogYW55KSA9PiB7XG4gICAgICAgIHNldExvYWRlZFJlY29yZChkYXRhLnJlY29yZClcbiAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nUmVjb3JkKGMgPT4gYyAtIDEpXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW3NlbGVjdGVkVmFsdWUsIHNlbGVjdGVkSWQsIHJlc291cmNlSWRdKVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17Qm9vbGVhbihlcnJvcil9PlxuICAgICAgPFByb3BlcnR5TGFiZWwgcHJvcGVydHk9e3Byb3BlcnR5fSAvPlxuICAgICAgPFNlbGVjdFxuICAgICAgICBjYWNoZU9wdGlvbnNcbiAgICAgICAgdmFsdWU9e3NlbGVjdGVkT3B0aW9ufVxuICAgICAgICBzdHlsZXM9e3N0eWxlc31cbiAgICAgICAgZGVmYXVsdE9wdGlvbnNcbiAgICAgICAgbG9hZE9wdGlvbnM9e2xvYWRPcHRpb25zfVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICBpc0Rpc2FibGVkPXtwcm9wZXJ0eS5pc0Rpc2FibGVkfVxuICAgICAgICBpc0xvYWRpbmc9e2xvYWRpbmdSZWNvcmR9XG4gICAgICAgIHsuLi5wcm9wZXJ0eS5wcm9wc31cbiAgICAgIC8+XG4gICAgICA8Rm9ybU1lc3NhZ2U+e2Vycm9yPy5tZXNzYWdlfTwvRm9ybU1lc3NhZ2U+XG4gICAgPC9Gb3JtR3JvdXA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKEVkaXQpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBCdXR0b25DU1MsIEJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFZpZXdIZWxwZXJzIGZyb20gJy4uLy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcbmltcG9ydCB7IFJlY29yZEpTT04sIFByb3BlcnR5SlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgcHJvcGVydHk6IFByb3BlcnR5SlNPTlxuICAgIHJlY29yZDogUmVjb3JkSlNPTlxufVxuXG5jb25zdCBTdHlsZWRMaW5rID0gc3R5bGVkPGFueT4oTGluaylgXG4gICAgJHtCdXR0b25DU1N9O1xuICAgIHBhZGRpbmctbGVmdDogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLnNwYWNlLnhzfTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuc3BhY2UueHN9O1xuYFxuXG5jb25zdCBSZWZlcmVuY2VWYWx1ZTogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgaCA9IG5ldyBWaWV3SGVscGVycygpXG4gICAgY29uc3QgcmVmSWQgPSByZWNvcmQucGFyYW1zW3Byb3BlcnR5LnBhdGhdXG4gICAgY29uc3QgcG9wdWxhdGVkID0gcmVjb3JkLnBvcHVsYXRlZFtwcm9wZXJ0eS5wYXRoXVxuICAgIGNvbnN0IHZhbHVlID0gKHBvcHVsYXRlZCAmJiBwb3B1bGF0ZWQudGl0bGUpIHx8IHJlZklkXG5cbiAgICBpZiAoIXByb3BlcnR5LnJlZmVyZW5jZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgcHJvcGVydHk6IFwiJHtwcm9wZXJ0eS5wYXRofVwiIGRvZXMgbm90IGhhdmUgYSByZWZlcmVuY2VgXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAgIHBvcHVsYXRlZCAmJlxuICAgICAgICBwb3B1bGF0ZWQucmVjb3JkQWN0aW9ucyAmJlxuICAgICAgICBwb3B1bGF0ZWQucmVjb3JkQWN0aW9ucy5maW5kKChhKSA9PiBhLm5hbWUgPT09ICdzaG93JylcbiAgICApIHtcbiAgICAgICAgY29uc3QgaHJlZiA9IGgucmVjb3JkQWN0aW9uVXJsKHtcbiAgICAgICAgICAgIHJlc291cmNlSWQ6IHByb3BlcnR5LnJlZmVyZW5jZSxcbiAgICAgICAgICAgIHJlY29yZElkOiByZWZJZCxcbiAgICAgICAgICAgIGFjdGlvbk5hbWU6ICdzaG93JyxcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxTdHlsZWRMaW5rIHZhcmlhbnQ9XCJ0ZXh0XCIgdG89e2hyZWZ9PlxuICAgICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgIDwvU3R5bGVkTGluaz5cbiAgICAgICAgKVxuICAgIH1cbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybiA8Qm94IHN0eWxlPXt7IGZvbnRTdHlsZTogJ2l0YWxpYycgfX0+bm90IHNldDwvQm94PlxuICAgIH1cbiAgICByZXR1cm4gPHNwYW4+e3ZhbHVlfTwvc3Bhbj5cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVmZXJlbmNlVmFsdWVcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFZhbHVlR3JvdXAgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBSZWZlcmVuY2VWYWx1ZSBmcm9tICcuL3JlZmVyZW5jZS12YWx1ZSdcbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hvdyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8RWRpdFByb3BlcnR5UHJvcHM+IHtcbiAgcmVuZGVyKCk6IFJlYWN0Tm9kZSB7XG4gICAgY29uc3QgeyBwcm9wZXJ0eSwgcmVjb3JkIH0gPSB0aGlzLnByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZhbHVlR3JvdXAgbGFiZWw9e3Byb3BlcnR5LmxhYmVsfT5cbiAgICAgICAgPFJlZmVyZW5jZVZhbHVlXG4gICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxuICAgICAgICAvPlxuICAgICAgPC9WYWx1ZUdyb3VwPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgUmVmZXJlbmNlVmFsdWUgZnJvbSAnLi9yZWZlcmVuY2UtdmFsdWUnXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3QgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEVkaXRQcm9wZXJ0eVByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UmVmZXJlbmNlVmFsdWVcbiAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICByZWNvcmQ9e3JlY29yZH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC9hc3luYydcbmltcG9ydCB7IFRoZW1lUHJvcHMsIERlZmF1bHRUaGVtZSwgd2l0aFRoZW1lIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBGb3JtR3JvdXAsIExhYmVsLCBmaWx0ZXJTdHlsZXMgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBBcGlDbGllbnQgZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXBpLWNsaWVudCdcbmltcG9ydCB7IEZpbHRlclByb3BlcnR5UHJvcHMsIFNlbGVjdFJlY29yZCB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbnR5cGUgQ29tYmluZWRQcm9wcyA9IEZpbHRlclByb3BlcnR5UHJvcHMgJiBUaGVtZVByb3BzPERlZmF1bHRUaGVtZT5cblxuY2xhc3MgRmlsdGVyIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxDb21iaW5lZFByb3BzPiB7XG4gIHByaXZhdGUgYXBpOiBBcGlDbGllbnRcblxuICBwcml2YXRlIG9wdGlvbnM6IEFycmF5PFNlbGVjdFJlY29yZD5cblxuICBjb25zdHJ1Y3Rvcihwcm9wczogQ29tYmluZWRQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuYXBpID0gbmV3IEFwaUNsaWVudCgpXG4gICAgdGhpcy5vcHRpb25zID0gW11cbiAgICB0aGlzLmxvYWRPcHRpb25zID0gdGhpcy5sb2FkT3B0aW9ucy5iaW5kKHRoaXMpXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpXG4gIH1cblxuICBoYW5kbGVDaGFuZ2Uoc2VsZWN0ZWQ6IFNlbGVjdFJlY29yZCk6IHZvaWQge1xuICAgIGNvbnN0IHsgb25DaGFuZ2UsIHByb3BlcnR5IH0gPSB0aGlzLnByb3BzXG4gICAgb25DaGFuZ2UocHJvcGVydHkucGF0aCwgc2VsZWN0ZWQgPyBzZWxlY3RlZC52YWx1ZSA6ICcnKVxuICB9XG5cbiAgYXN5bmMgbG9hZE9wdGlvbnMoaW5wdXRWYWx1ZTogc3RyaW5nKTogUHJvbWlzZTxBcnJheTx7dmFsdWU6IHN0cmluZzsgbGFiZWw6IHN0cmluZyB9Pj4ge1xuICAgIGNvbnN0IHsgcHJvcGVydHkgfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCByZWNvcmRzID0gYXdhaXQgdGhpcy5hcGkuc2VhcmNoUmVjb3Jkcyh7XG4gICAgICByZXNvdXJjZUlkOiBwcm9wZXJ0eS5yZWZlcmVuY2UgYXMgc3RyaW5nLFxuICAgICAgcXVlcnk6IGlucHV0VmFsdWUsXG4gICAgfSlcbiAgICB0aGlzLm9wdGlvbnMgPSByZWNvcmRzLm1hcChyID0+ICh7IHZhbHVlOiByLmlkLCBsYWJlbDogci50aXRsZSB9KSlcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zXG4gIH1cblxuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IHByb3BlcnR5LCBmaWx0ZXIsIHRoZW1lIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgZmlsdGVyW3Byb3BlcnR5LnBhdGhdID09PSAndW5kZWZpbmVkJyA/ICcnIDogZmlsdGVyW3Byb3BlcnR5LnBhdGhdXG4gICAgY29uc3Qgc2VsZWN0ZWQgPSAodGhpcy5vcHRpb25zIHx8IFtdKS5maW5kKG8gPT4gby52YWx1ZSA9PT0gdmFsdWUpXG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgIDxMYWJlbD57cHJvcGVydHkubGFiZWx9PC9MYWJlbD5cbiAgICAgICAgPFNlbGVjdFxuICAgICAgICAgIHZhbHVlPXt0eXBlb2Ygc2VsZWN0ZWQgPT09ICd1bmRlZmluZWQnID8gJycgOiBzZWxlY3RlZH1cbiAgICAgICAgICBpc0NsZWFyYWJsZVxuICAgICAgICAgIGNhY2hlT3B0aW9uc1xuICAgICAgICAgIHN0eWxlcz17ZmlsdGVyU3R5bGVzKHRoZW1lKX1cbiAgICAgICAgICBsb2FkT3B0aW9ucz17dGhpcy5sb2FkT3B0aW9uc31cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgZGVmYXVsdE9wdGlvbnNcbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybUdyb3VwPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoRmlsdGVyKVxuIiwiXG5pbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBWYWx1ZUdyb3VwIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBFZGl0UHJvcGVydHlQcm9wcyB9IGZyb20gJy4uL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNob3cgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PEVkaXRQcm9wZXJ0eVByb3BzPiB7XG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdmFsdWUgPSByZWNvcmQucGFyYW1zW3Byb3BlcnR5LnBhdGhdIHx8ICcnXG5cbiAgICByZXR1cm4gKFxuICAgICAgPFZhbHVlR3JvdXAgbGFiZWw9e3Byb3BlcnR5LmxhYmVsfT5cbiAgICAgICAge3ZhbHVlLnNwbGl0KC8oPzpcXHJcXG58XFxyfFxcbikvZykubWFwKChsaW5lLCBpKSA9PiAoXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PlxuICAgICAgICAgICAge2xpbmV9XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICApKX1cbiAgICAgIDwvVmFsdWVHcm91cD5cbiAgICApXG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xuaW1wb3J0IFJlYWN0LCB7IG1lbW8sIHVzZVN0YXRlLCBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJbnB1dCwgRm9ybUdyb3VwLCBGb3JtTWVzc2FnZSB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgRWRpdFByb3BlcnR5UHJvcHMgfSBmcm9tICcuLi9iYXNlLXByb3BlcnR5LXByb3BzJ1xuaW1wb3J0IHsgcmVjb3JkUHJvcGVydHlJc0VxdWFsIH0gZnJvbSAnLi4vcmVjb3JkLXByb3BlcnR5LWlzLWVxdWFsJ1xuaW1wb3J0IHsgUHJvcGVydHlMYWJlbCB9IGZyb20gJy4uL3V0aWxzL3Byb3BlcnR5LWxhYmVsJ1xuXG5jb25zdCBFZGl0OiBGQzxFZGl0UHJvcGVydHlQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBvbkNoYW5nZSwgcHJvcGVydHksIHJlY29yZCB9ID0gcHJvcHNcbiAgY29uc3QgcHJvcFZhbHVlID0gcmVjb3JkLnBhcmFtcz8uW3Byb3BlcnR5LnBhdGhdID8/ICcnXG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUocHJvcFZhbHVlKVxuICBjb25zdCBlcnJvciA9IHJlY29yZC5lcnJvcnM/Lltwcm9wZXJ0eS5wYXRoXVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlICE9PSBwcm9wVmFsdWUpIHtcbiAgICAgIHNldFZhbHVlKHByb3BWYWx1ZSlcbiAgICB9XG4gIH0sIFtwcm9wVmFsdWVdKVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17Qm9vbGVhbihlcnJvcil9PlxuICAgICAgPFByb3BlcnR5TGFiZWwgcHJvcGVydHk9e3Byb3BlcnR5fSAvPlxuICAgICAgPElucHV0XG4gICAgICAgIGFzPVwidGV4dGFyZWFcIlxuICAgICAgICByb3dzPXsodmFsdWUubWF0Y2goL1xcbi9nKSB8fCBbXSkubGVuZ3RoICsgMX1cbiAgICAgICAgaWQ9e3Byb3BlcnR5LnBhdGh9XG4gICAgICAgIG5hbWU9e3Byb3BlcnR5LnBhdGh9XG4gICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgb25CbHVyPXsoKSA9PiBvbkNoYW5nZShwcm9wZXJ0eS5wYXRoLCB2YWx1ZSl9XG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgZGlzYWJsZWQ9e3Byb3BlcnR5LmlzRGlzYWJsZWR9XG4gICAgICAgIHsuLi5wcm9wZXJ0eS5wcm9wc31cbiAgICAgIC8+XG4gICAgICA8Rm9ybU1lc3NhZ2U+e2Vycm9yICYmIGVycm9yLm1lc3NhZ2V9PC9Gb3JtTWVzc2FnZT5cbiAgICA8L0Zvcm1Hcm91cD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vKEVkaXQsIHJlY29yZFByb3BlcnR5SXNFcXVhbClcbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBtZW1vLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IElucHV0LCBGb3JtR3JvdXAsIElucHV0R3JvdXAsIEZvcm1NZXNzYWdlLCBCdXR0b24sIEljb24gfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEVkaXRQcm9wZXJ0eVByb3BzIH0gZnJvbSAnLi4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmltcG9ydCB7IHJlY29yZFByb3BlcnR5SXNFcXVhbCB9IGZyb20gJy4uL3JlY29yZC1wcm9wZXJ0eS1pcy1lcXVhbCdcbmltcG9ydCB7IFByb3BlcnR5TGFiZWwgfSBmcm9tICcuLi91dGlscy9wcm9wZXJ0eS1sYWJlbCdcblxuY29uc3QgRWRpdDogUmVhY3QuRkM8RWRpdFByb3BlcnR5UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHksIHJlY29yZCwgb25DaGFuZ2UgfSA9IHByb3BzXG4gIGNvbnN0IHByb3BWYWx1ZSA9IHJlY29yZC5wYXJhbXNbcHJvcGVydHkucGF0aF1cbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShwcm9wVmFsdWUpXG4gIGNvbnN0IGVycm9yID0gcmVjb3JkLmVycm9ycyAmJiByZWNvcmQuZXJyb3JzW3Byb3BlcnR5LnBhdGhdXG4gIGNvbnN0IFtpc0lucHV0LCBzZXRJc0lucHV0XSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHZhbHVlICE9PSBwcm9wVmFsdWUpIHtcbiAgICAgIHNldFZhbHVlKHByb3BWYWx1ZSlcbiAgICB9XG4gIH0sIFtwcm9wVmFsdWVdKVxuXG4gIHJldHVybiAoXG4gICAgPEZvcm1Hcm91cCBlcnJvcj17ISFlcnJvcn0+XG4gICAgICA8UHJvcGVydHlMYWJlbCBwcm9wZXJ0eT17cHJvcGVydHl9IC8+XG4gICAgICA8SW5wdXRHcm91cD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT17aXNJbnB1dCA/ICdpbnB1dCcgOiAncGFzc3dvcmQnfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0XCJcbiAgICAgICAgICBpZD17cHJvcGVydHkucGF0aH1cbiAgICAgICAgICBuYW1lPXtwcm9wZXJ0eS5wYXRofVxuICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRWYWx1ZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIG9uQmx1cj17KCkgPT4gb25DaGFuZ2UocHJvcGVydHkucGF0aCwgdmFsdWUpfVxuICAgICAgICAgIG9uS2V5RG93bj17ZSA9PiBlLmtleUNvZGUgPT09IDEzICYmIG9uQ2hhbmdlKHByb3BlcnR5LnBhdGgsIHZhbHVlKX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWUgPz8gJyd9XG4gICAgICAgICAgZGlzYWJsZWQ9e3Byb3BlcnR5LmlzRGlzYWJsZWR9XG4gICAgICAgICAgey4uLnByb3BlcnR5LnByb3BzfVxuICAgICAgICAvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgdmFyaWFudD17aXNJbnB1dCA/ICdwcmltYXJ5JyA6ICd0ZXh0J31cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBzaXplPVwiaWNvblwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNJbnB1dCghaXNJbnB1dCl9XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvbiBpY29uPVwiVmlld1wiIC8+XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9JbnB1dEdyb3VwPlxuICAgICAgPEZvcm1NZXNzYWdlPntlcnJvciAmJiBlcnJvci5tZXNzYWdlfTwvRm9ybU1lc3NhZ2U+XG4gICAgPC9Gb3JtR3JvdXA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhFZGl0LCByZWNvcmRQcm9wZXJ0eUlzRXF1YWwpXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgRWRpdCBmcm9tICcuL2VkaXQnXG5cbmV4cG9ydCB7XG4gIEVkaXQgYXMgZWRpdCxcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBSZWFjdENvbXBvbmVudExpa2UgfSBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgRXJyb3JCb3VuZGFyeSBmcm9tICcuLi9hcHAvZXJyb3ItYm91bmRhcnknXG5cbmltcG9ydCAqIGFzIEFycmF5VHlwZSBmcm9tICcuL2FycmF5J1xuaW1wb3J0ICogYXMgTWl4ZWRUeXBlIGZyb20gJy4vbWl4ZWQnXG5cbmltcG9ydCAqIGFzIGRlZmF1bHRUeXBlIGZyb20gJy4vZGVmYXVsdC10eXBlJ1xuaW1wb3J0ICogYXMgYm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgKiBhcyBkYXRldGltZSBmcm9tICcuL2RhdGV0aW1lJ1xuaW1wb3J0ICogYXMgcmljaHRleHQgZnJvbSAnLi9yaWNodGV4dCdcbmltcG9ydCAqIGFzIHJlZmVyZW5jZSBmcm9tICcuL3JlZmVyZW5jZSdcbmltcG9ydCAqIGFzIHRleHRhcmVhIGZyb20gJy4vdGV4dGFyZWEnXG5pbXBvcnQgKiBhcyBwYXNzd29yZCBmcm9tICcuL3Bhc3N3b3JkJ1xuaW1wb3J0IHsgQmFzZVByb3BlcnR5Q29tcG9uZW50UHJvcHMgfSBmcm9tICcuL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5pbXBvcnQgeyBQcm9wZXJ0eVR5cGUgfSBmcm9tICcuLi8uLi8uLi9iYWNrZW5kL2FkYXB0ZXJzL3Byb3BlcnR5L2Jhc2UtcHJvcGVydHknXG5pbXBvcnQgeyBQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuXG5sZXQgZ2xvYmFsQW55OiBhbnkgPSB7fVxuXG50cnkge1xuICBnbG9iYWxBbnkgPSB3aW5kb3dcbn0gY2F0Y2ggKGVycm9yKSB7XG4gIGlmIChlcnJvci5tZXNzYWdlICE9PSAnd2luZG93IGlzIG5vdCBkZWZpbmVkJykge1xuICAgIHRocm93IGVycm9yXG4gIH1cbn1cblxuY29uc3QgdHlwZXM6IFJlY29yZDxQcm9wZXJ0eVR5cGUsIGFueT4gPSB7XG4gIHRleHRhcmVhLFxuICBib29sZWFuLFxuICBkYXRldGltZSxcbiAgcmVmZXJlbmNlLFxuICBwYXNzd29yZCxcbiAgZGF0ZTogZGF0ZXRpbWUsXG4gIHJpY2h0ZXh0LFxuICBzdHJpbmc6IGRlZmF1bHRUeXBlLFxuICBudW1iZXI6IGRlZmF1bHRUeXBlLFxuICBmbG9hdDogZGVmYXVsdFR5cGUsXG4gIG1peGVkOiBudWxsLFxufVxuXG4vKipcbiAqIEBsb2FkIC4vYmFzZS1wcm9wZXJ0eS1jb21wb25lbnQuZG9jLm1kXG4gKiBAY29tcG9uZW50XG4gKiBAbmFtZSBCYXNlUHJvcGVydHlDb21wb25lbnRcbiAqIEBzdWJjYXRlZ29yeSBBcHBsaWNhdGlvblxuICogQGNsYXNzXG4gKiBAaGlkZWNvbnN0cnVjdG9yXG4gKi9cbmNvbnN0IEJhc2VQcm9wZXJ0eUNvbXBvbmVudDogUmVhY3QuRkM8QmFzZVByb3BlcnR5Q29tcG9uZW50UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcHJvcGVydHk6IGJhc2VQcm9wZXJ0eSwgcmVzb3VyY2UsIHJlY29yZCwgZmlsdGVyLCB3aGVyZSwgb25DaGFuZ2UsIGRhdGEgfSA9IHByb3BzXG5cbiAgY29uc3QgcHJvcGVydHk6IFByb3BlcnR5SlNPTiA9IHVzZU1lbW8oKCkgPT4gKHtcbiAgICAuLi5iYXNlUHJvcGVydHksXG4gICAgLy8gd2UgZmlsbCB0aGUgcGF0aCBpZiBpdCBpcyBub3QgdGhlcmUuIFRoYXQgaXMgd2h5IGFsbCB0aGUgYWN0dWFsIENvbXBvbmVudCBSZW5kZXJlcnMgYXJlXG4gICAgLy8gY2FsbGVkIHdpdGggdGhlIHBhdGggc2V0IHRvIHRoaXMgcm9vdCBwYXRoLiBOZXh0IG1peGVkIGFuZCBhcnJheSBjb21wb25lbnRzIGFkZHMgdG8gdGhpc1xuICAgIC8vIHBhdGggZWl0aGVyIGluZGV4IChmb3IgYXJyYXkpIG9yIHN1YlByb3BlcnR5IG5hbWUuXG4gICAgcGF0aDogKGJhc2VQcm9wZXJ0eSBhcyBQcm9wZXJ0eUpTT04pLnBhdGggfHwgYmFzZVByb3BlcnR5LnByb3BlcnR5UGF0aCxcbiAgfSksIFtiYXNlUHJvcGVydHldKVxuXG4gIGNvbnN0IHRlc3RJZCA9IGBwcm9wZXJ0eS0ke3doZXJlfS0ke3Byb3BlcnR5LnBhdGh9YFxuXG4gIGxldCBDb21wb25lbnQ6IFJlYWN0Q29tcG9uZW50TGlrZSA9ICh0eXBlc1twcm9wZXJ0eS50eXBlXSAmJiB0eXBlc1twcm9wZXJ0eS50eXBlXVt3aGVyZV0pXG4gIHx8IGRlZmF1bHRUeXBlW3doZXJlXVxuXG4gIGlmIChwcm9wZXJ0eS5jb21wb25lbnRzICYmIHByb3BlcnR5LmNvbXBvbmVudHNbd2hlcmVdKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gcHJvcGVydHkuY29tcG9uZW50c1t3aGVyZV1cbiAgICBpZiAoIWNvbXBvbmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB0aGVyZSBpcyBubyBcIiR7cHJvcGVydHkucGF0aH0uY29tcG9uZW50cy4ke3doZXJlfVwiYClcbiAgICB9XG4gICAgQ29tcG9uZW50ID0gZ2xvYmFsQW55LkFkbWluQnJvLlVzZXJDb21wb25lbnRzW2NvbXBvbmVudF1cbiAgICByZXR1cm4gKFxuICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgIDxCb3ggZGF0YS10ZXN0aWQ9e3Rlc3RJZH0+XG4gICAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAgICAgICBmaWx0ZXI9e2ZpbHRlcn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgIHdoZXJlPXt3aGVyZX1cbiAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgKVxuICB9XG5cbiAgY29uc3QgQXJyYXkgPSBBcnJheVR5cGVbd2hlcmVdXG4gIGNvbnN0IE1peGVkID0gTWl4ZWRUeXBlW3doZXJlXVxuXG4gIGlmIChiYXNlUHJvcGVydHkuaXNBcnJheSkge1xuICAgIGlmICghQXJyYXkpIHsgcmV0dXJuICg8ZGl2IC8+KSB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxBcnJheVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgSXRlbUNvbXBvbmVudD17QmFzZVByb3BlcnR5Q29tcG9uZW50fVxuICAgICAgICB0ZXN0SWQ9e3Rlc3RJZH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG5cbiAgaWYgKGJhc2VQcm9wZXJ0eS50eXBlID09PSAnbWl4ZWQnKSB7XG4gICAgaWYgKCFNaXhlZCkgeyByZXR1cm4gKDxkaXYgLz4pIH1cbiAgICByZXR1cm4gKFxuICAgICAgPE1peGVkXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICBJdGVtQ29tcG9uZW50PXtCYXNlUHJvcGVydHlDb21wb25lbnR9XG4gICAgICAgIHRlc3RJZD17dGVzdElkfVxuICAgICAgLz5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxFcnJvckJvdW5kYXJ5PlxuICAgICAgPEJveCBkYXRhLXRlc3RpZD17dGVzdElkfT5cbiAgICAgICAgPENvbXBvbmVudFxuICAgICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAgICAgZmlsdGVyPXtmaWx0ZXJ9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIHdoZXJlPXt3aGVyZX1cbiAgICAgICAgLz5cbiAgICAgIDwvQm94PlxuICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgKVxufVxuZXhwb3J0IHtcbiAgQmFzZVByb3BlcnR5Q29tcG9uZW50IGFzIGRlZmF1bHQsXG4gIEJhc2VQcm9wZXJ0eUNvbXBvbmVudCxcbn1cbiIsImltcG9ydCBCYXNlUHJvcGVydHlDb21wb25lbnQgZnJvbSAnLi9iYXNlLXByb3BlcnR5LWNvbXBvbmVudCdcbmltcG9ydCAqIGFzIGRlZmF1bHRUeXBlIGZyb20gJy4vZGVmYXVsdC10eXBlJ1xuaW1wb3J0ICogYXMgYm9vbGVhbiBmcm9tICcuL2Jvb2xlYW4nXG5pbXBvcnQgKiBhcyBkYXRldGltZSBmcm9tICcuL2RhdGV0aW1lJ1xuaW1wb3J0ICogYXMgcmljaHRleHQgZnJvbSAnLi9yaWNodGV4dCdcbmltcG9ydCAqIGFzIHJlZmVyZW5jZSBmcm9tICcuL3JlZmVyZW5jZSdcbmltcG9ydCAqIGFzIHRleHRhcmVhIGZyb20gJy4vdGV4dGFyZWEnXG5pbXBvcnQgKiBhcyBwYXNzd29yZCBmcm9tICcuL3Bhc3N3b3JkJ1xuaW1wb3J0IHsgQmFzZVByb3BlcnR5Q29tcG9uZW50UHJvcHMgfSBmcm9tICcuL2Jhc2UtcHJvcGVydHktcHJvcHMnXG5cbnR5cGUgQmFzZVByb3BlcnR5Q29tcG9uZW50VHlwZSA9IFJlYWN0LkZDPEJhc2VQcm9wZXJ0eUNvbXBvbmVudFByb3BzPiAmIHtcbiAgRGVmYXVsdFR5cGU6IGFueTtcbiAgQm9vbGVhbjogYW55O1xuICBEYXRlVGltZTogYW55O1xuICBSaWNoVGV4dDogYW55O1xuICBSZWZlcmVuY2U6IGFueTtcbiAgVGV4dEFyZWE6IGFueTtcbiAgUGFzc3dvcmQ6IGFueTtcbn1cblxuZnVuY3Rpb24gY2FtZWxpemVQcm9wZXJ0eVR5cGU8VD4odHlwZToge1trZXk6IHN0cmluZ106IFR9KToge1trZXk6IHN0cmluZ106IFR9IHtcbiAgcmV0dXJuIHtcbiAgICBFZGl0OiB0eXBlLmVkaXQsXG4gICAgU2hvdzogdHlwZS5zaG93LFxuICAgIExpc3Q6IHR5cGUubGlzdCxcbiAgICBGaWx0ZXI6IHR5cGUuZmlsdGVyLFxuICB9XG59XG5cbmNvbnN0IEJhc2VQcm9wZXJ0eUNvbXBvbmVudEV4dGVuZGVkOiBCYXNlUHJvcGVydHlDb21wb25lbnRUeXBlID0gT2JqZWN0LmFzc2lnbihcbiAgQmFzZVByb3BlcnR5Q29tcG9uZW50LCB7XG4gICAgRGVmYXVsdFR5cGU6IGNhbWVsaXplUHJvcGVydHlUeXBlKGRlZmF1bHRUeXBlKSxcbiAgICBCb29sZWFuOiBjYW1lbGl6ZVByb3BlcnR5VHlwZShib29sZWFuKSxcbiAgICBEYXRlVGltZTogY2FtZWxpemVQcm9wZXJ0eVR5cGUoZGF0ZXRpbWUpLFxuICAgIFJpY2hUZXh0OiBjYW1lbGl6ZVByb3BlcnR5VHlwZShyaWNodGV4dCksXG4gICAgUmVmZXJlbmNlOiBjYW1lbGl6ZVByb3BlcnR5VHlwZShyZWZlcmVuY2UpLFxuICAgIFRleHRBcmVhOiBjYW1lbGl6ZVByb3BlcnR5VHlwZSh0ZXh0YXJlYSksXG4gICAgUGFzc3dvcmQ6IGNhbWVsaXplUHJvcGVydHlUeXBlKHBhc3N3b3JkKSxcbiAgfSxcbilcblxuXG5leHBvcnQge1xuICBCYXNlUHJvcGVydHlDb21wb25lbnRFeHRlbmRlZCBhcyBkZWZhdWx0LFxuICBCYXNlUHJvcGVydHlDb21wb25lbnRFeHRlbmRlZCBhcyBCYXNlUHJvcGVydHlDb21wb25lbnQsXG59XG5cbmV4cG9ydCAqIGZyb20gJy4vYmFzZS1wcm9wZXJ0eS1wcm9wcydcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBCb3gsIGNzc0NsYXNzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgeyBSZWNvcmRKU09OLCBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IFZpZXdIZWxwZXJzIGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcblxuZXhwb3J0IGNvbnN0IEJyZWFkY3J1bWJMaW5rID0gc3R5bGVkKExpbmspYFxuICBjb2xvcjogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmNvbG9ycy5ncmV5NDB9O1xuICBmb250LWZhbWlseTogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmZvbnR9O1xuICBsaW5lLWhlaWdodDogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmxpbmVIZWlnaHRzLmRlZmF1bHR9O1xuICBmb250LXNpemU6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5mb250U2l6ZXMuZGVmYXVsdH07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmNvbG9ycy5wcmltYXJ5MTAwfTtcbiAgfVxuXG4gICY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcvJztcbiAgICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5zcGFjZS5kZWZhdWx0fTtcbiAgfVxuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICB9XG4gIH1cbmBcblxuLyoqXG4gKiBAbWVtYmVyb2YgQnJlYWRjcnVtYnNcbiAqL1xuZXhwb3J0IHR5cGUgQnJlYWRjcnVtYlByb3BzID0ge1xuICAvKipcbiAgICogUmVzb3VyY2VcbiAgICovXG4gIHJlc291cmNlOiBSZXNvdXJjZUpTT047XG4gIC8qKlxuICAgKiByZWNvcmRcbiAgICovXG4gIHJlY29yZD86IFJlY29yZEpTT04gfCBudWxsO1xuICAvKipcbiAgICogTmFtZSBvZiBhbiBhY3Rpb25cbiAgICovXG4gIGFjdGlvbk5hbWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAY29tcG9uZW50XG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgQnJlYWRjcnVtYnM6IFJlYWN0LkZDPEJyZWFkY3J1bWJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZSwgcmVjb3JkLCBhY3Rpb25OYW1lIH0gPSBwcm9wc1xuXG4gIGNvbnN0IGFjdGlvbiA9IHJlc291cmNlLmFjdGlvbnMuZmluZChhID0+IGEubmFtZSA9PT0gYWN0aW9uTmFtZSlcbiAgY29uc3QgaCA9IG5ldyBWaWV3SGVscGVycygpXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IGZsZXhHcm93PXsxfSBjbGFzc05hbWU9e2Nzc0NsYXNzKCdCcmVhZGNydW1icycpfT5cbiAgICAgIDxCcmVhZGNydW1iTGluayB0bz17aC5kYXNoYm9hcmRVcmwoKX0+RGFzaGJvYXJkPC9CcmVhZGNydW1iTGluaz5cbiAgICAgIDxCcmVhZGNydW1iTGluayB0bz17cmVzb3VyY2UuaHJlZiA/IHJlc291cmNlLmhyZWYgOiAnLyd9IGNsYXNzTmFtZT17cmVjb3JkID8gJ2lzLWFjdGl2ZScgOiAnJ30+XG4gICAgICAgIHtyZXNvdXJjZS5uYW1lfVxuICAgICAgPC9CcmVhZGNydW1iTGluaz5cbiAgICAgIHsgYWN0aW9uICYmIGFjdGlvbi5uYW1lICE9PSAnbGlzdCcgJiYgPEJyZWFkY3J1bWJMaW5rIHRvPVwiI1wiPnthY3Rpb24ubGFiZWx9PC9CcmVhZGNydW1iTGluaz59XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnJlYWRjcnVtYnNcbiIsImltcG9ydCB7IEJ1dHRvbkdyb3VwUHJvcHMsIEJ1dHRvbkluR3JvdXBQcm9wcyB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgYWN0aW9uSHJlZiwgQWN0aW9uSlNPTiwgYnVpbGRBY3Rpb25UZXN0SWQgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgRGlmZmVyZW50QWN0aW9uUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vaG9va3MnXG5cbmV4cG9ydCB0eXBlIGFjdGlvbnNUb0J1dHRvbkdyb3VwT3B0aW9ucyA9IHtcbiAgYWN0aW9uczogQXJyYXk8QWN0aW9uSlNPTj47XG4gIHBhcmFtczogRGlmZmVyZW50QWN0aW9uUGFyYW1zO1xuICBoYW5kbGVDbGljazogQnV0dG9uSW5Hcm91cFByb3BzWydvbkNsaWNrJ107XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb25zVG9CdXR0b25Hcm91cCA9IChcbiAgb3B0aW9uczogYWN0aW9uc1RvQnV0dG9uR3JvdXBPcHRpb25zLFxuKTogQnV0dG9uR3JvdXBQcm9wc1snYnV0dG9ucyddID0+IHtcbiAgY29uc3QgeyBhY3Rpb25zLCBwYXJhbXMsIGhhbmRsZUNsaWNrIH0gPSBvcHRpb25zXG4gIGNvbnN0IGJ1dHRvbnMgPSBhY3Rpb25zLm1hcCgoYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgaHJlZiA9IGFjdGlvbkhyZWYoYWN0aW9uLCBwYXJhbXMpXG4gICAgcmV0dXJuIHtcbiAgICAgIGljb246IGFjdGlvbi5pY29uLFxuICAgICAgbGFiZWw6IGFjdGlvbi5sYWJlbCxcbiAgICAgIHZhcmlhbnQ6IGFjdGlvbi52YXJpYW50LFxuICAgICAgc291cmNlOiBhY3Rpb24sXG4gICAgICBocmVmOiBocmVmIHx8IHVuZGVmaW5lZCxcbiAgICAgIC8vIHdoZW4gaHJlZiBpcyBub3QgZGVmaW5lZCAtIGhhbmRsZSBjbGljayBzaG91bGQgYWxzbyBiZSBub3QgZGVmaW5lZFxuICAgICAgLy8gVGhpcyBwcmV2ZW50cyBmcm9tIFwiY3Vyc29yOiBwb2ludGVyO1wiXG4gICAgICBvbkNsaWNrOiBocmVmID8gaGFuZGxlQ2xpY2sgOiB1bmRlZmluZWQsXG4gICAgICAnZGF0YS10ZXN0aWQnOiBidWlsZEFjdGlvblRlc3RJZChhY3Rpb24pLFxuICAgICAgYnV0dG9uczogW10sXG4gICAgfVxuICB9KVxuXG4gIC8vIG5lc3RpbmcgYnV0dG9uc1xuICBjb25zdCBidXR0b25zTWFwID0gYnV0dG9ucy5yZWR1Y2UoKG1lbW8sIGJ1dHRvbikgPT4ge1xuICAgIGNvbnN0IGFjdGlvbiA9IGJ1dHRvbi5zb3VyY2VcbiAgICBpZiAoYWN0aW9uLnBhcmVudCkge1xuICAgICAgY29uc3QgcGFyZW50OiBCdXR0b25Jbkdyb3VwUHJvcHMgPSBtZW1vW2FjdGlvbi5wYXJlbnRdXG4gICAgICAgIHx8IGJ1dHRvbnMuZmluZChidG4gPT4gYnRuLnNvdXJjZS5uYW1lID09PSBhY3Rpb24ucGFyZW50KVxuICAgICAgICB8fCB7XG4gICAgICAgICAgbGFiZWw6IGFjdGlvbi5wYXJlbnQsXG4gICAgICAgIH1cblxuICAgICAgcGFyZW50LmJ1dHRvbnMgPSBwYXJlbnQuYnV0dG9ucyB8fCBbXVxuICAgICAgcGFyZW50LmJ1dHRvbnMucHVzaChidXR0b24pXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5tZW1vLFxuICAgICAgICBbYWN0aW9uLnBhcmVudF06IHBhcmVudCxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm1lbW8sXG4gICAgICBbYnV0dG9uLnNvdXJjZS5uYW1lXTogYnV0dG9uLFxuICAgIH1cbiAgfSwge30gYXMgUmVjb3JkPHN0cmluZywgQnV0dG9uSW5Hcm91cFByb3BzPilcbiAgcmV0dXJuIE9iamVjdC52YWx1ZXMoYnV0dG9uc01hcClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBMaW5rIGFzIFJvdXRlckxpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IHtcbiAgQnV0dG9uQ1NTLFxuICBCdXR0b25Qcm9wcyxcbiAgSWNvbixcbn0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgVmlld0hlbHBlcnMgZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IFN0eWxlZExpbmsgPSBzdHlsZWQoKHsgcm91bmRlZCwgLi4ucmVzdCB9KSA9PiA8Um91dGVyTGluayB7Li4ucmVzdH0gLz4pPEJ1dHRvblByb3BzPmAke0J1dHRvbkNTU31gXG5jb25zdCBoID0gbmV3IFZpZXdIZWxwZXJzKClcblxuZXhwb3J0IHR5cGUgU3R5bGVkQmFja0J1dHRvblByb3BzID0ge1xuICByZXNvdXJjZUlkOiBzdHJpbmc7XG4gIHNob3dJbkRyYXdlcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFN0eWxlZEJhY2tCdXR0b246IFJlYWN0LkZDPFN0eWxlZEJhY2tCdXR0b25Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZUlkLCBzaG93SW5EcmF3ZXIgfSA9IHByb3BzXG4gIGNvbnN0IGNzc0Nsb3NlSWNvbiA9IHNob3dJbkRyYXdlciA/ICdDaGV2cm9uUmlnaHQnIDogJ0NoZXZyb25MZWZ0J1xuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZExpbmtcbiAgICAgIHNpemU9XCJpY29uXCJcbiAgICAgIHRvPXtoLnJlc291cmNlVXJsKHsgcmVzb3VyY2VJZCwgc2VhcmNoOiB3aW5kb3cubG9jYXRpb24uc2VhcmNoIH0pfVxuICAgICAgcm91bmRlZFxuICAgICAgbXI9XCJsZ1wiXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICA+XG4gICAgICA8SWNvbiBpY29uPXtjc3NDbG9zZUljb259IC8+XG4gICAgPC9TdHlsZWRMaW5rPlxuICApXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hbmNob3ItaXMtdmFsaWQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEJveCwgQmFkZ2UsIEgzLCBIMiwgQnV0dG9uR3JvdXAsIGNzc0NsYXNzIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJy4uL2JyZWFkY3J1bWJzJ1xuaW1wb3J0IHsgQWN0aW9uSGVhZGVyUHJvcHMgfSBmcm9tICcuL2FjdGlvbi1oZWFkZXItcHJvcHMnXG5pbXBvcnQgeyBhY3Rpb25zVG9CdXR0b25Hcm91cCB9IGZyb20gJy4vYWN0aW9ucy10by1idXR0b24tZ3JvdXAnXG5pbXBvcnQgeyBTdHlsZWRCYWNrQnV0dG9uIH0gZnJvbSAnLi9zdHlsZWQtYmFjay1idXR0b24nXG5cbmltcG9ydCB7IHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9ob29rcydcbmltcG9ydCB7IEFjdGlvbkpTT04sIGJ1aWxkQWN0aW9uQ2xpY2tIYW5kbGVyIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9hY3Rpb24nXG5cbi8qKlxuICogSGVhZGVyIG9mIGFuIGFjdGlvbi4gSXQgcmVuZGVycyBBY3Rpb24gbmFtZSB3aXRoIGJ1dHRvbnMgZm9yIGFsbCB0aGUgYWN0aW9ucy5cbiAqXG4gKiAjIyMgVXNhZ2VcbiAqXG4gKiBgYGBcbiAqIGltcG9ydCB7IEFjdGlvbkhlYWRlciB9IGZyb20gJ2FkbWluLWJybydcbiAqIGBgYFxuICpcbiAqIEBjb21wb25lbnRcbiAqIEBzdWJjYXRlZ29yeSBBcHBsaWNhdGlvblxuICovXG5leHBvcnQgY29uc3QgQWN0aW9uSGVhZGVyOiBSZWFjdC5GQzxBY3Rpb25IZWFkZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHJlc291cmNlLCB0b2dnbGVGaWx0ZXIsIGFjdGlvblBlcmZvcm1lZCwgcmVjb3JkLCBhY3Rpb24sIHRhZywgb21pdEFjdGlvbnMsXG4gIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHsgdHJhbnNsYXRlQnV0dG9uIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KClcbiAgY29uc3QgYWN0aW9uUmVzcG9uc2VIYW5kbGVyID0gdXNlQWN0aW9uUmVzcG9uc2VIYW5kbGVyKGFjdGlvblBlcmZvcm1lZClcblxuICBpZiAoYWN0aW9uLmhpZGVBY3Rpb25IZWFkZXIpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgY29uc3QgcmVzb3VyY2VJZCA9IHJlc291cmNlLmlkXG4gIGNvbnN0IHBhcmFtcyA9IHsgcmVzb3VyY2VJZCwgcmVjb3JkSWQ6IHJlY29yZD8uaWQgfVxuXG4gIGNvbnN0IGhhbmRsZUFjdGlvbkNsaWNrID0gKGV2ZW50LCBzb3VyY2VBY3Rpb246IEFjdGlvbkpTT04pOiB2b2lkID0+IChcbiAgICBidWlsZEFjdGlvbkNsaWNrSGFuZGxlcih7XG4gICAgICBhY3Rpb246IHNvdXJjZUFjdGlvbixcbiAgICAgIHBhcmFtcyxcbiAgICAgIGFjdGlvblJlc3BvbnNlSGFuZGxlcixcbiAgICAgIHB1c2g6IGhpc3RvcnkucHVzaCxcbiAgICB9KShldmVudClcbiAgKVxuXG4gIGNvbnN0IGFjdGlvbkJ1dHRvbnMgPSBhY3Rpb25zVG9CdXR0b25Hcm91cCh7XG4gICAgYWN0aW9uczogcmVjb3JkXG4gICAgICA/IHJlY29yZC5yZWNvcmRBY3Rpb25zLmZpbHRlcihyYSA9PiAhYWN0aW9uIHx8IGFjdGlvbi5uYW1lICE9PSByYS5uYW1lKVxuICAgICAgLy8gb25seSBuZXcgYWN0aW9uIHNob3VsZCBiZSBzZWVuIGluIHJlZ3VsYXIgXCJCaWdcIiBhY3Rpb25zIHBsYWNlXG4gICAgICA6IHJlc291cmNlLnJlc291cmNlQWN0aW9ucy5maWx0ZXIocmEgPT4gcmEubmFtZSA9PT0gJ25ldycgJiYgKCFhY3Rpb24gfHwgYWN0aW9uLm5hbWUgIT09IHJhLm5hbWUpKSxcbiAgICBwYXJhbXMsXG4gICAgaGFuZGxlQ2xpY2s6IGhhbmRsZUFjdGlvbkNsaWNrLFxuICB9KVxuXG4gIGlmICh0b2dnbGVGaWx0ZXIpIHtcbiAgICBhY3Rpb25CdXR0b25zLnB1c2goe1xuICAgICAgbGFiZWw6IHRyYW5zbGF0ZUJ1dHRvbignZmlsdGVyJywgcmVzb3VyY2UuaWQpLFxuICAgICAgb25DbGljazogdG9nZ2xlRmlsdGVyLFxuICAgICAgaWNvbjogJ1NldHRpbmdzQWRqdXN0JyxcbiAgICB9KVxuICB9XG5cbiAgLy8gbGlzdCBhbmQgbmV3IGFjdGlvbnMgYXJlIHNwZWNpYWwgYW5kIGFyZSBhcmUgYWx3YXlzXG4gIGNvbnN0IGN1c3RvbVJlc291cmNlQnV0dG9ucyA9IGFjdGlvbnNUb0J1dHRvbkdyb3VwKHtcbiAgICBhY3Rpb25zOiByZXNvdXJjZS5yZXNvdXJjZUFjdGlvbnMuZmlsdGVyKHJhID0+ICFbJ2xpc3QnLCAnbmV3J10uaW5jbHVkZXMocmEubmFtZSkpLFxuICAgIHBhcmFtczogeyByZXNvdXJjZUlkIH0sXG4gICAgaGFuZGxlQ2xpY2s6IGhhbmRsZUFjdGlvbkNsaWNrLFxuICB9KVxuXG4gIGNvbnN0IHRpdGxlID0gYWN0aW9uID8gYWN0aW9uLmxhYmVsIDogcmVzb3VyY2UubmFtZVxuICBjb25zdCBpc0xpc3QgPSBhY3Rpb24gJiYgYWN0aW9uLm5hbWUgPT09ICdsaXN0J1xuICBjb25zdCBsaXN0QWN0aW9uID0gcmVzb3VyY2UucmVzb3VyY2VBY3Rpb25zLmZpbmQocmEgPT4gcmEubmFtZSA9PT0gJ2xpc3QnKVxuXG4gIC8vIHN0eWxlZCB3aGljaCBkaWZmZXJzIGlmIGFjdGlvbiBoZWFkZXIgaXMgaW4gdGhlIGRyYXdlciBvciBub3RcbiAgY29uc3QgY3NzSXNSb290RmxleCA9ICFhY3Rpb24uc2hvd0luRHJhd2VyXG4gIGNvbnN0IGNzc0hlYWRlck1UID0gYWN0aW9uLnNob3dJbkRyYXdlciA/ICcnIDogJ2xnJ1xuICBjb25zdCBjc3NBY3Rpb25zTUIgPSBhY3Rpb24uc2hvd0luRHJhd2VyID8gJ3hsJyA6ICdkZWZhdWx0J1xuICBjb25zdCBDc3NIQ29tcG9uZW50ID0gYWN0aW9uLnNob3dJbkRyYXdlciA/IEgzIDogSDJcblxuICByZXR1cm4gKFxuICAgIDxCb3ggY2xhc3NOYW1lPXtjc3NDbGFzcygnQWN0aW9uSGVhZGVyJyl9PlxuICAgICAge2FjdGlvbi5zaG93SW5EcmF3ZXIgPyAnJyA6IChcbiAgICAgICAgPEJveCBmbGV4IGZsZXhEaXJlY3Rpb249XCJyb3dcIiBweD17WydkZWZhdWx0JywgMF19PlxuICAgICAgICAgIDxCcmVhZGNydW1icyByZXNvdXJjZT17cmVzb3VyY2V9IGFjdGlvbk5hbWU9e2FjdGlvbi5uYW1lfSByZWNvcmQ9e3JlY29yZH0gLz5cbiAgICAgICAgICA8Qm94IGZsZXhTaHJpbms9ezB9PlxuICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIHNpemU9XCJzbVwiIHJvdW5kZWQgYnV0dG9ucz17Y3VzdG9tUmVzb3VyY2VCdXR0b25zfSAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICl9XG4gICAgICA8Qm94IGRpc3BsYXk9e1snYmxvY2snLCBjc3NJc1Jvb3RGbGV4ID8gJ2ZsZXgnIDogJ2Jsb2NrJ119PlxuICAgICAgICA8Qm94IG10PXtjc3NIZWFkZXJNVH0gZmxleEdyb3c9ezF9IHB4PXtbJ2RlZmF1bHQnLCAwXX0+XG4gICAgICAgICAgPENzc0hDb21wb25lbnQgbWI9XCJsZ1wiPlxuICAgICAgICAgICAgeyFpc0xpc3QgJiYgbGlzdEFjdGlvbiA/IChcbiAgICAgICAgICAgICAgPFN0eWxlZEJhY2tCdXR0b24gcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gc2hvd0luRHJhd2VyPXthY3Rpb24uc2hvd0luRHJhd2VyfSAvPlxuICAgICAgICAgICAgKSA6ICcnfVxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAge3RhZyA/ICg8QmFkZ2UgdmFyaWFudD1cInByaW1hcnlcIiBtbD1cImRlZmF1bHRcIj57dGFnfTwvQmFkZ2U+KSA6ICcnfVxuICAgICAgICAgIDwvQ3NzSENvbXBvbmVudD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHtvbWl0QWN0aW9ucyA/ICcnIDogKFxuICAgICAgICAgIDxCb3ggbXQ9XCJ4bFwiIG1iPXtjc3NBY3Rpb25zTUJ9IGZsZXhTaHJpbms9ezB9PlxuICAgICAgICAgICAgPEJ1dHRvbkdyb3VwIGJ1dHRvbnM9e2FjdGlvbkJ1dHRvbnN9IC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBY3Rpb25IZWFkZXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIERlc2lnblN5c3RlbSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyBBY3Rpb25Qcm9wcyB9IGZyb20gJy4uL2FjdGlvbi5wcm9wcydcbmltcG9ydCBQcm9wZXJ0eVR5cGUgZnJvbSAnLi4vLi4vcHJvcGVydHktdHlwZSdcbmltcG9ydCB7IFByb3BlcnR5UGxhY2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL3Byb3BlcnR5LWpzb24vcHJvcGVydHktanNvbi5pbnRlcmZhY2UnXG5pbXBvcnQgeyBQYXJzZWRMYXlvdXRFbGVtZW50IH0gZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC91dGlscy9sYXlvdXQtZWxlbWVudC1wYXJzZXInXG5pbXBvcnQgeyBCYXNlUHJvcGVydHlQcm9wcyB9IGZyb20gJy4uLy4uL3Byb3BlcnR5LXR5cGUvYmFzZS1wcm9wZXJ0eS1wcm9wcydcblxudHlwZSBQcm9wcyA9IEFjdGlvblByb3BzICYge1xuICBsYXlvdXRFbGVtZW50OiBQYXJzZWRMYXlvdXRFbGVtZW50O1xuICB3aGVyZTogUHJvcGVydHlQbGFjZTtcbiAgb25DaGFuZ2U/OiBCYXNlUHJvcGVydHlQcm9wc1snb25DaGFuZ2UnXTtcbn1cblxuZXhwb3J0IGNvbnN0IExheW91dEVsZW1lbnRSZW5kZXJlcjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgbGF5b3V0RWxlbWVudCwgcmVzb3VyY2UsIHdoZXJlLCByZWNvcmQsIG9uQ2hhbmdlIH0gPSBwcm9wc1xuXG4gIGNvbnN0IHtcbiAgICBwcm9wczogbGF5b3V0UHJvcHMsXG4gICAgcHJvcGVydGllczogcHJvcGVydHlOYW1lcyxcbiAgICBsYXlvdXRFbGVtZW50czogaW5uZXJMYXlvdXRFbGVtZW50cyxcbiAgICBjb21wb25lbnQsXG4gIH0gPSBsYXlvdXRFbGVtZW50XG5cbiAgY29uc3QgeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSA9IGxheW91dFByb3BzXG5cbiAgY29uc3QgcHJvcGVydGllcyA9IHByb3BlcnR5TmFtZXMubWFwKG5hbWUgPT4gcmVzb3VyY2UucHJvcGVydGllc1tuYW1lXSlcblxuICBjb25zdCBDb21wb25lbnQgPSBEZXNpZ25TeXN0ZW1bY29tcG9uZW50XVxuICBpZiAoIUNvbXBvbmVudCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RGVzaWduU3lzdGVtLk1lc3NhZ2VCb3hcbiAgICAgICAgc2l6ZT1cInNtXCJcbiAgICAgICAgbWVzc2FnZT1cIkphdmFzY3JpcHQgRXJyb3JcIlxuICAgICAgICB2YXJpYW50PVwiZGFuZ2VyXCJcbiAgICAgICAgcHk9XCJ4bFwiXG4gICAgICA+XG4gICAgICAgIFRoZXJlIGlzIG5vIGNvbXBvbmVudCBieSB0aGUgbmFtZSBvZlxuICAgICAgICA8RGVzaWduU3lzdGVtLkJhZGdlIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJkYW5nZXJcIiBteD1cImRlZmF1bHRcIj57Y29tcG9uZW50fTwvRGVzaWduU3lzdGVtLkJhZGdlPlxuICAgICAgICBpbiBAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0uIENoYW5nZVxuICAgICAgICA8RGVzaWduU3lzdGVtLkJhZGdlIHNpemU9XCJzbVwiIHZhcmlhbnQ9XCJkYW5nZXJcIiBteD1cImRlZmF1bHRcIj57YEAke2NvbXBvbmVudH1gfTwvRGVzaWduU3lzdGVtLkJhZGdlPlxuICAgICAgICB0byBhdmFpbGFibGUgY29tcG9uZW50IGxpa2UgQEhlYWRlclxuICAgICAgPC9EZXNpZ25TeXN0ZW0uTWVzc2FnZUJveD5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb21wb25lbnQgey4uLm90aGVyIGFzIGFueX0+XG4gICAgICB7cHJvcGVydGllcy5tYXAocHJvcGVydHkgPT4gKFxuICAgICAgICA8RGVzaWduU3lzdGVtLkJveCBmbGV4R3Jvdz17MX0ga2V5PXtwcm9wZXJ0eS5wcm9wZXJ0eVBhdGh9PlxuICAgICAgICAgIDxQcm9wZXJ0eVR5cGVcbiAgICAgICAgICAgIGtleT17cHJvcGVydHkucHJvcGVydHlQYXRofVxuICAgICAgICAgICAgd2hlcmU9e3doZXJlfVxuICAgICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9EZXNpZ25TeXN0ZW0uQm94PlxuICAgICAgKSl9XG4gICAgICB7aW5uZXJMYXlvdXRFbGVtZW50cy5tYXAoKGlubmVyTGF5b3V0RWxlbWVudCwgaSkgPT4gKFxuICAgICAgICA8TGF5b3V0RWxlbWVudFJlbmRlcmVyXG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1hcnJheS1pbmRleC1rZXlcbiAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgbGF5b3V0RWxlbWVudD17aW5uZXJMYXlvdXRFbGVtZW50fVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db21wb25lbnQ+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRFbGVtZW50UmVuZGVyZXJcbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgRHJhd2VyQ29udGVudCwgQm94LCBEcmF3ZXJGb290ZXIsIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFByb3BlcnR5VHlwZSBmcm9tICcuLi9wcm9wZXJ0eS10eXBlJ1xuXG5pbXBvcnQgeyBBY3Rpb25Qcm9wcyB9IGZyb20gJy4vYWN0aW9uLnByb3BzJ1xuaW1wb3J0IEFjdGlvbkhlYWRlciBmcm9tICcuLi9hcHAvYWN0aW9uLWhlYWRlci9hY3Rpb24taGVhZGVyJ1xuaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgdXNlUmVjb3JkIGZyb20gJy4uLy4uL2hvb2tzL3VzZS1yZWNvcmQvdXNlLXJlY29yZCdcbmltcG9ydCB7IGFwcGVuZEZvcmNlUmVmcmVzaCB9IGZyb20gJy4vdXRpbHMvYXBwZW5kLWZvcmNlLXJlZnJlc2gnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzL3VzZS10cmFuc2xhdGlvbidcbmltcG9ydCBMYXlvdXRFbGVtZW50UmVuZGVyZXIgZnJvbSAnLi91dGlscy9sYXlvdXQtZWxlbWVudC1yZW5kZXJlcidcblxuY29uc3QgTmV3OiBGQzxBY3Rpb25Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZWNvcmQ6IGluaXRpYWxSZWNvcmQsIHJlc291cmNlLCBhY3Rpb24gfSA9IHByb3BzXG4gIGNvbnN0IHtcbiAgICByZWNvcmQsXG4gICAgaGFuZGxlQ2hhbmdlLFxuICAgIHN1Ym1pdDogaGFuZGxlU3VibWl0LFxuICAgIGxvYWRpbmcsXG4gICAgc2V0UmVjb3JkLFxuICB9ID0gdXNlUmVjb3JkKGluaXRpYWxSZWNvcmQsIHJlc291cmNlLmlkKVxuICBjb25zdCB7IHRyYW5zbGF0ZUJ1dHRvbiB9ID0gdXNlVHJhbnNsYXRpb24oKVxuICBjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaW5pdGlhbFJlY29yZCkge1xuICAgICAgc2V0UmVjb3JkKGluaXRpYWxSZWNvcmQpXG4gICAgfVxuICB9LCBbaW5pdGlhbFJlY29yZF0pXG5cbiAgY29uc3Qgc3VibWl0ID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50Pik6IGJvb2xlYW4gPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBoYW5kbGVTdWJtaXQoKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLmRhdGEucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgaGlzdG9yeS5wdXNoKGFwcGVuZEZvcmNlUmVmcmVzaChyZXNwb25zZS5kYXRhLnJlZGlyZWN0VXJsKSlcbiAgICAgIH1cbiAgICAgIC8vIGlmIHJlY29yZCBoYXMgaWQgPT09IGhhcyBiZWVuIGNyZWF0ZWRcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlY29yZC5pZCkge1xuICAgICAgICBoYW5kbGVDaGFuZ2UoeyBwYXJhbXM6IHt9LCBwb3B1bGF0ZWQ6IHt9LCBlcnJvcnM6IHt9IH0gYXMgUmVjb3JkSlNPTilcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBhcz1cImZvcm1cIlxuICAgICAgb25TdWJtaXQ9e3N1Ym1pdH1cbiAgICAgIGZsZXhcbiAgICAgIGZsZXhHcm93PXsxfVxuICAgICAgZmxleERpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgPlxuICAgICAgPERyYXdlckNvbnRlbnQ+XG4gICAgICAgIHthY3Rpb24/LnNob3dJbkRyYXdlciA/IDxBY3Rpb25IZWFkZXIgey4uLnByb3BzfSAvPiA6IG51bGx9XG4gICAgICAgIHthY3Rpb24ubGF5b3V0ID8gYWN0aW9uLmxheW91dC5tYXAoKGxheW91dEVsZW1lbnQsIGkpID0+IChcbiAgICAgICAgICA8TGF5b3V0RWxlbWVudFJlbmRlcmVyXG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBsYXlvdXRFbGVtZW50PXtsYXlvdXRFbGVtZW50fVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgICAgd2hlcmU9XCJlZGl0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICByZWNvcmQ9e3JlY29yZCBhcyBSZWNvcmRKU09OfVxuICAgICAgICAgIC8+XG4gICAgICAgICkpIDogcmVzb3VyY2UuZWRpdFByb3BlcnRpZXMubWFwKHByb3BlcnR5ID0+IChcbiAgICAgICAgICA8UHJvcGVydHlUeXBlXG4gICAgICAgICAgICBrZXk9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cbiAgICAgICAgICAgIHdoZXJlPVwiZWRpdFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmQgYXMgUmVjb3JkSlNPTn1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvRHJhd2VyQ29udGVudD5cbiAgICAgIDxEcmF3ZXJGb290ZXI+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIiB0eXBlPVwic3VibWl0XCIgZGF0YS10ZXN0aWQ9XCJidXR0b24tc2F2ZVwiPlxuICAgICAgICAgIHtsb2FkaW5nID8gKDxJY29uIGljb249XCJGYWRlXCIgc3BpbiAvPikgOiBudWxsfVxuICAgICAgICAgIHt0cmFuc2xhdGVCdXR0b24oJ3NhdmUnLCByZXNvdXJjZS5pZCl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9EcmF3ZXJGb290ZXI+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IHtcbiAgTmV3IGFzIGRlZmF1bHQsXG4gIE5ldyxcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgRHJhd2VyQ29udGVudCwgQm94LCBEcmF3ZXJGb290ZXIsIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IFByb3BlcnR5VHlwZSBmcm9tICcuLi9wcm9wZXJ0eS10eXBlJ1xuaW1wb3J0IHsgQWN0aW9uUHJvcHMgfSBmcm9tICcuL2FjdGlvbi5wcm9wcydcbmltcG9ydCBBY3Rpb25IZWFkZXIgZnJvbSAnLi4vYXBwL2FjdGlvbi1oZWFkZXIvYWN0aW9uLWhlYWRlcidcbmltcG9ydCB1c2VSZWNvcmQgZnJvbSAnLi4vLi4vaG9va3MvdXNlLXJlY29yZC91c2UtcmVjb3JkJ1xuaW1wb3J0IHsgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBhcHBlbmRGb3JjZVJlZnJlc2ggfSBmcm9tICcuL3V0aWxzL2FwcGVuZC1mb3JjZS1yZWZyZXNoJ1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi9ob29rcy91c2UtdHJhbnNsYXRpb24nXG5pbXBvcnQgTGF5b3V0RWxlbWVudFJlbmRlcmVyIGZyb20gJy4vdXRpbHMvbGF5b3V0LWVsZW1lbnQtcmVuZGVyZXInXG5cbmNvbnN0IEVkaXQ6IEZDPEFjdGlvblByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlY29yZDogaW5pdGlhbFJlY29yZCwgcmVzb3VyY2UsIGFjdGlvbiB9ID0gcHJvcHNcblxuICBjb25zdCB7XG4gICAgcmVjb3JkLFxuICAgIGhhbmRsZUNoYW5nZSxcbiAgICBzdWJtaXQ6IGhhbmRsZVN1Ym1pdCxcbiAgICBsb2FkaW5nLFxuICAgIHNldFJlY29yZCxcbiAgfSA9IHVzZVJlY29yZChpbml0aWFsUmVjb3JkLCByZXNvdXJjZS5pZClcbiAgY29uc3QgeyB0cmFuc2xhdGVCdXR0b24gfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluaXRpYWxSZWNvcmQpIHtcbiAgICAgIHNldFJlY29yZChpbml0aWFsUmVjb3JkKVxuICAgIH1cbiAgfSwgW2luaXRpYWxSZWNvcmRdKVxuXG4gIGNvbnN0IHN1Ym1pdCA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pOiBib29sZWFuID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgaGFuZGxlU3VibWl0KCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnJlZGlyZWN0VXJsKSB7XG4gICAgICAgIGhpc3RvcnkucHVzaChhcHBlbmRGb3JjZVJlZnJlc2gocmVzcG9uc2UuZGF0YS5yZWRpcmVjdFVybCkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgYXM9XCJmb3JtXCJcbiAgICAgIG9uU3VibWl0PXtzdWJtaXR9XG4gICAgICBmbGV4XG4gICAgICBmbGV4R3Jvdz17MX1cbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgID5cbiAgICAgIDxEcmF3ZXJDb250ZW50PlxuICAgICAgICB7YWN0aW9uPy5zaG93SW5EcmF3ZXIgPyA8QWN0aW9uSGVhZGVyIHsuLi5wcm9wc30gLz4gOiBudWxsfVxuICAgICAgICB7YWN0aW9uLmxheW91dCA/IGFjdGlvbi5sYXlvdXQubWFwKChsYXlvdXRFbGVtZW50LCBpKSA9PiAoXG4gICAgICAgICAgPExheW91dEVsZW1lbnRSZW5kZXJlclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWFycmF5LWluZGV4LWtleVxuICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgbGF5b3V0RWxlbWVudD17bGF5b3V0RWxlbWVudH1cbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgICAgIHdoZXJlPVwiZWRpdFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmQgYXMgUmVjb3JkSlNPTn1cbiAgICAgICAgICAvPlxuICAgICAgICApKSA6IHJlc291cmNlLmVkaXRQcm9wZXJ0aWVzLm1hcChwcm9wZXJ0eSA9PiAoXG4gICAgICAgICAgPFByb3BlcnR5VHlwZVxuICAgICAgICAgICAga2V5PXtwcm9wZXJ0eS5wcm9wZXJ0eVBhdGh9XG4gICAgICAgICAgICB3aGVyZT1cImVkaXRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICAgIHJlY29yZD17cmVjb3JkIGFzIFJlY29yZEpTT059XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L0RyYXdlckNvbnRlbnQ+XG4gICAgICA8RHJhd2VyRm9vdGVyPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCIgc2l6ZT1cImxnXCIgdHlwZT1cInN1Ym1pdFwiIGRhdGEtdGVzdGlkPVwiYnV0dG9uLXNhdmVcIj5cbiAgICAgICAgICB7bG9hZGluZyA/ICg8SWNvbiBpY29uPVwiRmFkZVwiIHNwaW4gLz4pIDogbnVsbH1cbiAgICAgICAgICB7dHJhbnNsYXRlQnV0dG9uKCdzYXZlJywgcmVzb3VyY2UuaWQpfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRHJhd2VyRm9vdGVyPlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCB7XG4gIEVkaXQgYXMgZGVmYXVsdCxcbiAgRWRpdCxcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IERyYXdlckNvbnRlbnQgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBQcm9wZXJ0eVR5cGUgZnJvbSAnLi4vcHJvcGVydHktdHlwZSdcbmltcG9ydCB7IEFjdGlvblByb3BzIH0gZnJvbSAnLi9hY3Rpb24ucHJvcHMnXG5pbXBvcnQgQWN0aW9uSGVhZGVyIGZyb20gJy4uL2FwcC9hY3Rpb24taGVhZGVyL2FjdGlvbi1oZWFkZXInXG5pbXBvcnQgTGF5b3V0RWxlbWVudFJlbmRlcmVyIGZyb20gJy4vdXRpbHMvbGF5b3V0LWVsZW1lbnQtcmVuZGVyZXInXG5cbi8qKlxuICogQG5hbWUgU2hvd0FjdGlvblxuICogQGNhdGVnb3J5IEFjdGlvbnNcbiAqIEBkZXNjcmlwdGlvbiBTaG93cyBhIGdpdmVuIHJlY29yZC5cbiAqIEBjb21wb25lbnRcbiAqIEBwcml2YXRlXG4gKi9cbmNvbnN0IFNob3c6IFJlYWN0LkZDPEFjdGlvblByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlc291cmNlLCByZWNvcmQsIGFjdGlvbiwgZGF0YSB9ID0gcHJvcHNcbiAgY29uc3QgcHJvcGVydGllcyA9IHJlc291cmNlLnNob3dQcm9wZXJ0aWVzXG5cbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyQ29udGVudD5cbiAgICAgIHthY3Rpb24/LnNob3dJbkRyYXdlciA/IDxBY3Rpb25IZWFkZXIgey4uLnByb3BzfSAvPiA6IG51bGx9XG4gICAgICB7YWN0aW9uLmxheW91dCA/IGFjdGlvbi5sYXlvdXQubWFwKChsYXlvdXRFbGVtZW50LCBpKSA9PiAoXG4gICAgICAgIDxMYXlvdXRFbGVtZW50UmVuZGVyZXJcbiAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gICAgICAgICAga2V5PXtpfVxuICAgICAgICAgIGxheW91dEVsZW1lbnQ9e2xheW91dEVsZW1lbnR9XG4gICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAgIHdoZXJlPVwic2hvd1wiXG4gICAgICAgIC8+XG4gICAgICApKSA6IHByb3BlcnRpZXMubWFwKHByb3BlcnR5ID0+IChcbiAgICAgICAgPFByb3BlcnR5VHlwZVxuICAgICAgICAgIGtleT17cHJvcGVydHkucHJvcGVydHlQYXRofVxuICAgICAgICAgIHdoZXJlPVwic2hvd1wiXG4gICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICByZWNvcmQ9e3JlY29yZH1cbiAgICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICAvPlxuICAgICAgKSl9XG5cbiAgICA8L0RyYXdlckNvbnRlbnQ+XG4gIClcbn1cblxuZXhwb3J0IHtcbiAgU2hvdyBhcyBkZWZhdWx0LFxuICBTaG93LFxufVxuIiwiZXhwb3J0IGNvbnN0IGRpc3BsYXkgPSAoaXNUaXRsZTogYm9vbGVhbik6IEFycmF5PHN0cmluZz4gPT4gW1xuICBpc1RpdGxlID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLFxuICBpc1RpdGxlID8gJ3RhYmxlLWNlbGwnIDogJ25vbmUnLFxuICAndGFibGUtY2VsbCcsXG4gICd0YWJsZS1jZWxsJyxcbl1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQge1xuICBQbGFjZWhvbGRlciwgVGFibGVSb3csIFRhYmxlQ2VsbCwgQ2hlY2tCb3gsIEJ1dHRvbkdyb3VwLFxufSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBQcm9wZXJ0eVR5cGUgZnJvbSAnLi4vLi4vcHJvcGVydHktdHlwZSdcbmltcG9ydCB7IEFjdGlvbkpTT04sIGJ1aWxkQWN0aW9uQ2xpY2tIYW5kbGVyLCBSZWNvcmRKU09OLCBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gJy4vdXRpbHMvZGlzcGxheSdcbmltcG9ydCB7IEFjdGlvblJlc3BvbnNlLCBSZWNvcmRBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uLy4uL2JhY2tlbmQvYWN0aW9ucy9hY3Rpb24uaW50ZXJmYWNlJ1xuaW1wb3J0IG1lcmdlUmVjb3JkUmVzcG9uc2UgZnJvbSAnLi4vLi4vLi4vaG9va3MvdXNlLXJlY29yZC9tZXJnZS1yZWNvcmQtcmVzcG9uc2UnXG5pbXBvcnQgeyB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXIgfSBmcm9tICcuLi8uLi8uLi9ob29rcydcbmltcG9ydCB7IGFjdGlvbnNUb0J1dHRvbkdyb3VwIH0gZnJvbSAnLi4vYWN0aW9uLWhlYWRlci9hY3Rpb25zLXRvLWJ1dHRvbi1ncm91cCdcblxuZXhwb3J0IHR5cGUgUmVjb3JkSW5MaXN0UHJvcHMgPSB7XG4gIHJlc291cmNlOiBSZXNvdXJjZUpTT047XG4gIHJlY29yZDogUmVjb3JkSlNPTjtcbiAgYWN0aW9uUGVyZm9ybWVkPzogKGFjdGlvbjogQWN0aW9uUmVzcG9uc2UpID0+IGFueTtcbiAgaXNMb2FkaW5nPzogYm9vbGVhbjtcbiAgb25TZWxlY3Q/OiAocmVjb3JkOiBSZWNvcmRKU09OKSA9PiB2b2lkO1xuICBpc1NlbGVjdGVkPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IFJlY29yZEluTGlzdDogUmVhY3QuRkM8UmVjb3JkSW5MaXN0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICByZXNvdXJjZSwgcmVjb3JkOiByZWNvcmRGcm9tUHJvcHMsIGFjdGlvblBlcmZvcm1lZCxcbiAgICBpc0xvYWRpbmcsIG9uU2VsZWN0LCBpc1NlbGVjdGVkLFxuICB9ID0gcHJvcHNcbiAgY29uc3QgW3JlY29yZCwgc2V0UmVjb3JkXSA9IHVzZVN0YXRlPFJlY29yZEpTT04+KHJlY29yZEZyb21Qcm9wcylcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuXG4gIGNvbnN0IGhhbmRsZUFjdGlvbkNhbGxiYWNrID0gdXNlQ2FsbGJhY2soKGFjdGlvblJlc3BvbnNlOiBBY3Rpb25SZXNwb25zZSkgPT4ge1xuICAgIGlmIChhY3Rpb25SZXNwb25zZS5yZWNvcmQgJiYgIWFjdGlvblJlc3BvbnNlLnJlZGlyZWN0VXJsKSB7XG4gICAgICBzZXRSZWNvcmQobWVyZ2VSZWNvcmRSZXNwb25zZShyZWNvcmQsIGFjdGlvblJlc3BvbnNlIGFzIFJlY29yZEFjdGlvblJlc3BvbnNlKSlcbiAgICB9IGVsc2UgaWYgKGFjdGlvblBlcmZvcm1lZCkge1xuICAgICAgYWN0aW9uUGVyZm9ybWVkKGFjdGlvblJlc3BvbnNlKVxuICAgIH1cbiAgfSwgW2FjdGlvblBlcmZvcm1lZCwgcmVjb3JkXSlcblxuICBjb25zdCBhY3Rpb25SZXNwb25zZUhhbmRsZXIgPSB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXIoaGFuZGxlQWN0aW9uQ2FsbGJhY2spXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRSZWNvcmQocmVjb3JkRnJvbVByb3BzKVxuICB9LCBbcmVjb3JkRnJvbVByb3BzXSlcblxuICBjb25zdCB7IHJlY29yZEFjdGlvbnMgfSA9IHJlY29yZFxuXG4gIGNvbnN0IHNob3cgPSByZWNvcmQucmVjb3JkQWN0aW9ucy5maW5kKCh7IG5hbWUgfSkgPT4gbmFtZSA9PT0gJ3Nob3cnKVxuICBjb25zdCBlZGl0ID0gcmVjb3JkLnJlY29yZEFjdGlvbnMuZmluZCgoeyBuYW1lIH0pID0+IG5hbWUgPT09ICdlZGl0JylcbiAgY29uc3QgYWN0aW9uID0gc2hvdyB8fCBlZGl0XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB0YXJnZXRUYWdOYW1lID0gKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgaWYgKGFjdGlvblxuICAgICAgJiYgdGFyZ2V0VGFnTmFtZSAhPT0gJ2EnXG4gICAgICAmJiB0YXJnZXRUYWdOYW1lICE9PSAnYnV0dG9uJ1xuICAgICAgJiYgdGFyZ2V0VGFnTmFtZSAhPT0gJ3N2ZydcbiAgICApIHtcbiAgICAgIGJ1aWxkQWN0aW9uQ2xpY2tIYW5kbGVyKHtcbiAgICAgICAgYWN0aW9uLFxuICAgICAgICBwYXJhbXM6IHsgcmVzb3VyY2VJZDogcmVzb3VyY2UuaWQsIHJlY29yZElkOiByZWNvcmQuaWQgfSxcbiAgICAgICAgYWN0aW9uUmVzcG9uc2VIYW5kbGVyLFxuICAgICAgICBwdXNoOiBoaXN0b3J5LnB1c2gsXG4gICAgICB9KShldmVudClcbiAgICB9XG4gIH1cblxuICBjb25zdCBhY3Rpb25QYXJhbXMgPSB7IHJlc291cmNlSWQ6IHJlc291cmNlLmlkLCByZWNvcmRJZDogcmVjb3JkLmlkIH1cblxuICBjb25zdCBoYW5kbGVBY3Rpb25DbGljayA9IChldmVudCwgc291cmNlQWN0aW9uOiBBY3Rpb25KU09OKTogdm9pZCA9PiAoXG4gICAgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIoe1xuICAgICAgYWN0aW9uOiBzb3VyY2VBY3Rpb24sXG4gICAgICBwYXJhbXM6IGFjdGlvblBhcmFtcyxcbiAgICAgIGFjdGlvblJlc3BvbnNlSGFuZGxlcixcbiAgICAgIHB1c2g6IGhpc3RvcnkucHVzaCxcbiAgICB9KShldmVudClcbiAgKVxuXG4gIGNvbnN0IGJ1dHRvbnMgPSBbe1xuICAgIGljb246ICdPdmVyZmxvd01lbnVIb3Jpem9udGFsJyxcbiAgICB2YXJpYW50OiAnbGlnaHQnIGFzIGNvbnN0LFxuICAgIGxhYmVsOiB1bmRlZmluZWQsXG4gICAgJ2RhdGEtdGVzdGlkJzogJ2FjdGlvbnMtZHJvcGRvd24nLFxuICAgIGJ1dHRvbnM6IGFjdGlvbnNUb0J1dHRvbkdyb3VwKHtcbiAgICAgIGFjdGlvbnM6IHJlY29yZEFjdGlvbnMsXG4gICAgICBwYXJhbXM6IGFjdGlvblBhcmFtcyxcbiAgICAgIGhhbmRsZUNsaWNrOiBoYW5kbGVBY3Rpb25DbGljayxcbiAgICB9KSxcbiAgfV1cblxuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlUm93IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBkYXRhLWlkPXtyZWNvcmQuaWR9PlxuICAgICAgPFRhYmxlQ2VsbCBjbGFzc05hbWU9e2lzU2VsZWN0ZWQgPyAnc2VsZWN0ZWQnIDogJ25vdC1zZWxlY3RlZCd9PlxuICAgICAgICB7b25TZWxlY3QgJiYgcmVjb3JkLmJ1bGtBY3Rpb25zLmxlbmd0aCA/IChcbiAgICAgICAgICA8Q2hlY2tCb3hcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoKTogdm9pZCA9PiBvblNlbGVjdChyZWNvcmQpfVxuICAgICAgICAgICAgY2hlY2tlZD17aXNTZWxlY3RlZH1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvVGFibGVDZWxsPlxuICAgICAge3Jlc291cmNlLmxpc3RQcm9wZXJ0aWVzLm1hcChwcm9wZXJ0eSA9PiAoXG4gICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICAgIGtleT17cHJvcGVydHkucHJvcGVydHlQYXRofVxuICAgICAgICAgIGRhdGEtcHJvcGVydHktbmFtZT17cHJvcGVydHkucHJvcGVydHlQYXRofVxuICAgICAgICAgIGRpc3BsYXk9e2Rpc3BsYXkocHJvcGVydHkuaXNUaXRsZSl9XG4gICAgICAgID5cbiAgICAgICAgICB7aXNMb2FkaW5nID8gKFxuICAgICAgICAgICAgPFBsYWNlaG9sZGVyIHN0eWxlPXt7IGhlaWdodDogMTQgfX0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFByb3BlcnR5VHlwZVxuICAgICAgICAgICAgICBrZXk9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cbiAgICAgICAgICAgICAgd2hlcmU9XCJsaXN0XCJcbiAgICAgICAgICAgICAgcHJvcGVydHk9e3Byb3BlcnR5fVxuICAgICAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgICAgIHJlY29yZD17cmVjb3JkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICkpfVxuICAgICAgPFRhYmxlQ2VsbCBrZXk9XCJvcHRpb25zXCI+XG4gICAgICAgIHtyZWNvcmRBY3Rpb25zLmxlbmd0aCA/IChcbiAgICAgICAgICA8QnV0dG9uR3JvdXAgYnV0dG9ucz17YnV0dG9uc30gLz5cbiAgICAgICAgKSA6ICcnfVxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgPC9UYWJsZVJvdz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNvcmRJbkxpc3RcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5hdkxpbmssIHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IHsgSWNvbiwgY3NzQ2xhc3MgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEJhc2VQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuXG5cbmV4cG9ydCB0eXBlIFNvcnRMaW5rUHJvcHMgPSB7XG4gIHByb3BlcnR5OiBCYXNlUHJvcGVydHlKU09OO1xuICBkaXJlY3Rpb24/OiAnYXNjJyB8ICdkZXNjJztcbiAgc29ydEJ5Pzogc3RyaW5nO1xufVxuXG5jbGFzcyBTb3J0TGluayBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8U29ydExpbmtQcm9wcyAmIFJvdXRlQ29tcG9uZW50UHJvcHM+IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLmlzQWN0aXZlID0gdGhpcy5pc0FjdGl2ZS5iaW5kKHRoaXMpXG4gIH1cblxuICBpc0FjdGl2ZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCB7IHNvcnRCeSwgcHJvcGVydHkgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gc29ydEJ5ID09PSBwcm9wZXJ0eS5wcm9wZXJ0eVBhdGhcbiAgfVxuXG4gIHJlbmRlcigpOiBSZWFjdE5vZGUge1xuICAgIGNvbnN0IHsgcHJvcGVydHksIGxvY2F0aW9uLCBkaXJlY3Rpb24gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCBxdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKVxuICAgIGNvbnN0IG9wcG9zaXRlRGlyZWN0aW9uID0gKHRoaXMuaXNBY3RpdmUoKSAmJiBkaXJlY3Rpb24gPT09ICdhc2MnKSA/ICdkZXNjJyA6ICdhc2MnXG4gICAgY29uc3Qgc29ydGVkQnlJY29uID0gYENhcmV0JHtkaXJlY3Rpb24gPT09ICdhc2MnID8gJ1VwJyA6ICdEb3duJ31gXG5cbiAgICBxdWVyeS5zZXQoJ2RpcmVjdGlvbicsIG9wcG9zaXRlRGlyZWN0aW9uKVxuICAgIHF1ZXJ5LnNldCgnc29ydEJ5JywgcHJvcGVydHkucHJvcGVydHlQYXRoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxOYXZMaW5rIHRvPXt7IHNlYXJjaDogcXVlcnkudG9TdHJpbmcoKSB9fSBjbGFzc05hbWU9e2Nzc0NsYXNzKCdTb3J0TGluaycpfT5cbiAgICAgICAge3Byb3BlcnR5LmxhYmVsfVxuICAgICAgICB7dGhpcy5pc0FjdGl2ZSgpID8gKDxJY29uIGljb249e3NvcnRlZEJ5SWNvbn0gY29sb3I9XCJwcmltYXJ5MTAwXCIgbWw9XCJkZWZhdWx0XCIgLz4pIDogJyd9XG4gICAgICA8L05hdkxpbms+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoU29ydExpbmspXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUYWJsZUNlbGwgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IEJhc2VQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IFNvcnRMaW5rIGZyb20gJy4uL3NvcnQtbGluaydcblxuZXhwb3J0IHR5cGUgUHJvcGVydHlIZWFkZXJQcm9wcyA9IHtcbiAgcHJvcGVydHk6IEJhc2VQcm9wZXJ0eUpTT047XG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB3aGljaCBzaG91bGQgYmUgdHJlYXRlZCBhcyBtYWluIHByb3BlcnR5LlxuICAgKi9cbiAgdGl0bGVQcm9wZXJ0eTogQmFzZVByb3BlcnR5SlNPTjtcbiAgLyoqXG4gICAqIGN1cnJlbnRseSBzZWxlY3RlZCBkaXJlY3Rpb24uIEVpdGhlciAnYXNjJyBvciAnZGVzYycuXG4gICAqL1xuICBkaXJlY3Rpb24/OiAnYXNjJyB8ICdkZXNjJztcbiAgLyoqXG4gICAqIGN1cnJlbnRseSBzZWxlY3RlZCBmaWVsZCBieSB3aGljaCBsaXN0IGlzIHNvcnRlZC5cbiAgICovXG4gIHNvcnRCeT86IHN0cmluZztcblxuICBkaXNwbGF5Pzogc3RyaW5nIHwgQXJyYXk8c3RyaW5nPjtcbn1cblxuZXhwb3J0IGNvbnN0IFByb3BlcnR5SGVhZGVyOiBSZWFjdC5GQzxQcm9wZXJ0eUhlYWRlclByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHByb3BlcnR5LCB0aXRsZVByb3BlcnR5LCBkaXNwbGF5IH0gPSBwcm9wc1xuXG4gIGNvbnN0IGlzTWFpbiA9IHByb3BlcnR5LnByb3BlcnR5UGF0aCA9PT0gdGl0bGVQcm9wZXJ0eS5wcm9wZXJ0eVBhdGhcblxuICByZXR1cm4gKFxuICAgIDxUYWJsZUNlbGxcbiAgICAgIGNsYXNzTmFtZT17aXNNYWluID8gJ21haW4nIDogdW5kZWZpbmVkfVxuICAgICAgZGlzcGxheT17ZGlzcGxheX1cbiAgICA+XG4gICAgICB7cHJvcGVydHkuaXNTb3J0YWJsZSA/IDxTb3J0TGluayB7Li4ucHJvcHN9IC8+IDogcHJvcGVydHkubGFiZWx9XG4gICAgPC9UYWJsZUNlbGw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvcGVydHlIZWFkZXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENoZWNrQm94LCBUYWJsZUhlYWQsIFRhYmxlUm93LCBUYWJsZUNlbGwgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBQcm9wZXJ0eUhlYWRlciBmcm9tICcuL3Byb3BlcnR5LWhlYWRlcidcbmltcG9ydCB7IEJhc2VQcm9wZXJ0eUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHsgZGlzcGxheSB9IGZyb20gJy4vdXRpbHMvZGlzcGxheSdcblxuLyoqXG4gKiBAbWVtYmVyb2YgUmVjb3Jkc1RhYmxlSGVhZGVyXG4gKiBAYWxpYXMgUmVjb3Jkc1RhYmxlSGVhZGVyUHJvcHNcbiAqL1xuZXhwb3J0IHR5cGUgUmVjb3Jkc1RhYmxlSGVhZGVyUHJvcHMgPSB7XG4gIC8qKlxuICAgKiBQcm9wZXJ0eSB3aGljaCBzaG91bGQgYmUgdHJlYXRlZCBhcyBhIFRpdGxlIFByb3BlcnR5XG4gICAqL1xuICB0aXRsZVByb3BlcnR5OiBCYXNlUHJvcGVydHlKU09OO1xuICAvKipcbiAgICogQWxsIHByb3BlcnRpZXMgd2hpY2ggc2hvdWxkIGJlIHByZXNlbnRlZFxuICAgKi9cbiAgcHJvcGVydGllczogQXJyYXk8QmFzZVByb3BlcnR5SlNPTj47XG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBwcm9wZXJ0eSB3aGljaCBzaG91bGQgYmUgbWFya2VkIGFzIGN1cnJlbnRseSBzb3J0ZWQgYnlcbiAgICovXG4gIHNvcnRCeT86IHN0cmluZztcbiAgLyoqXG4gICAqIFNvcnQgZGlyZWN0aW9uXG4gICAqL1xuICBkaXJlY3Rpb24/OiAnYXNjJyB8ICdkZXNjJztcbiAgLyoqXG4gICAqIEhhbmRsZXIgZnVuY3Rpb24gaW52b2tlZCB3aGVuIGNoZWNrYm94IGlzIGNsaWNrZWQuIElmIGdpdmVuIGV4dHJhIGNvbHVtblxuICAgKiB3aXRoIGNoZWNrYm94IHdpbGwgYmUgcmVuZGVyZWRcbiAgICovXG4gIG9uU2VsZWN0QWxsPzogKCkgPT4gYW55O1xuICAvKipcbiAgICogSW5kaWNhdGVzIGlmIFwiYnVsa1wiIGNoZWNrYm94IHNob3VsZCBiZSBjaGVja2VkXG4gICAqL1xuICBzZWxlY3RlZEFsbD86IGJvb2xlYW47XG59XG5cbi8qKlxuICogUHJpbnRzIGB0aGVhZGAgc2VjdGlvbiBmb3IgdGFibGUgd2l0aCByZWNvcmRzLlxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgUmVjb3Jkc1RhYmxlSGVhZGVyIH0gZnJvbSAnYWRtaW4tYnJvJ1xuICogYGBgXG4gKlxuICogQGNvbXBvbmVudFxuICogQHN1YmNhdGVnb3J5IEFwcGxpY2F0aW9uXG4gKiBAZXhhbXBsZSA8Y2FwdGlvbj5MaXN0IHdpdGggMiBwcm9wZXJ0aWVzPC9jYXB0aW9uPlxuICogY29uc3QgcHJvcGVydGllcyA9IFt7XG4gKiAgIGxhYmVsOiAnRmlyc3QgTmFtZScsXG4gKiAgIG5hbWU6ICdmaXJzdE5hbWUnLFxuICogICBpc1NvcnRhYmxlOiB0cnVlLFxuICogfSwge1xuICogICBsYWJlbDogJ0xhc3QgTmFtZScsXG4gKiAgIG5hbWU6ICdsYXN0TmFtZScsXG4gKiB9XVxuICogcmV0dXJuIChcbiAqIDxCb3ggcHk9XCJ4bFwiPlxuICogICA8VGFibGU+XG4gKiAgICA8UmVjb3Jkc1RhYmxlSGVhZGVyXG4gKiAgICAgIHByb3BlcnRpZXM9e3Byb3BlcnRpZXN9XG4gKiAgICAgIHRpdGxlUHJvcGVydHk9e3Byb3BlcnRpZXNbMF19XG4gKiAgICAgIHNvcnRCeT17J2ZpcnN0TmFtZSd9XG4gKiAgICAgIGRpcmVjdGlvbj17J2FzYyd9XG4gKiAgICAvPlxuICogICAgPFRhYmxlQm9keT5cbiAqICAgICAgPFRhYmxlUm93PlxuICogICAgICAgIDxUYWJsZUNlbGw+Sm9objwvVGFibGVDZWxsPlxuICogICAgICAgIDxUYWJsZUNlbGw+RG9lPC9UYWJsZUNlbGw+XG4gKiAgICAgICAgPFRhYmxlQ2VsbD48L1RhYmxlQ2VsbD5cbiAqICAgICAgPC9UYWJsZVJvdz5cbiAqICAgICAgPFRhYmxlUm93PlxuICogICAgICAgIDxUYWJsZUNlbGw+TWF4PC9UYWJsZUNlbGw+XG4gKiAgICAgICAgPFRhYmxlQ2VsbD5Lb2RhbHk8L1RhYmxlQ2VsbD5cbiAqICAgICAgICA8VGFibGVDZWxsPjwvVGFibGVDZWxsPlxuICogICAgICA8L1RhYmxlUm93PlxuICogICAgPC9UYWJsZUJvZHk+XG4gKiAgIDwvVGFibGU+XG4gKiA8L0JveD5cbiAqIClcbiAqL1xuZXhwb3J0IGNvbnN0IFJlY29yZHNUYWJsZUhlYWRlcjogUmVhY3QuRkM8UmVjb3Jkc1RhYmxlSGVhZGVyUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZVByb3BlcnR5LCBwcm9wZXJ0aWVzLFxuICAgIHNvcnRCeSwgZGlyZWN0aW9uLFxuICAgIG9uU2VsZWN0QWxsLCBzZWxlY3RlZEFsbCB9ID0gcHJvcHNcbiAgcmV0dXJuIChcbiAgICA8VGFibGVIZWFkPlxuICAgICAgPFRhYmxlUm93PlxuICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgIHtvblNlbGVjdEFsbCA/IChcbiAgICAgICAgICAgIDxDaGVja0JveFxuICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5MZWZ0OiA1IH19XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKTogdm9pZCA9PiBvblNlbGVjdEFsbCgpfVxuICAgICAgICAgICAgICBjaGVja2VkPXtzZWxlY3RlZEFsbH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICB7cHJvcGVydGllcy5tYXAocHJvcGVydHkgPT4gKFxuICAgICAgICAgIDxQcm9wZXJ0eUhlYWRlclxuICAgICAgICAgICAgZGlzcGxheT17ZGlzcGxheShwcm9wZXJ0eS5pc1RpdGxlKX1cbiAgICAgICAgICAgIGtleT17cHJvcGVydHkucHJvcGVydHlQYXRofVxuICAgICAgICAgICAgdGl0bGVQcm9wZXJ0eT17dGl0bGVQcm9wZXJ0eX1cbiAgICAgICAgICAgIHByb3BlcnR5PXtwcm9wZXJ0eX1cbiAgICAgICAgICAgIHNvcnRCeT17c29ydEJ5fVxuICAgICAgICAgICAgZGlyZWN0aW9uPXtkaXJlY3Rpb259XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICAgIDxUYWJsZUNlbGwga2V5PVwiYWN0aW9uc1wiIHN0eWxlPXt7IHdpZHRoOiA4MCB9fSAvPlxuICAgICAgPC9UYWJsZVJvdz5cbiAgICA8L1RhYmxlSGVhZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNvcmRzVGFibGVIZWFkZXJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1hbGVydCAqL1xuLyogZXNsaW50LWRpc2FibGUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzICovXG5cbmltcG9ydCBSZWFjdCwgeyBSZWFjdEVsZW1lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEFjdGlvblJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2FjdGlvbi5pbnRlcmZhY2UnXG5cbmltcG9ydCB7IEFjdGlvbkpTT04sIGJ1aWxkQWN0aW9uVGVzdElkIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcydcbmltcG9ydCB7IHVzZUFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xuXG5cbi8qKlxuICogQGFsaWFzIEFjdGlvbkJ1dHRvblByb3BzXG4gKiBAbWVtYmVyb2YgQWN0aW9uQnV0dG9uXG4gKi9cbmV4cG9ydCB0eXBlIEFjdGlvbkJ1dHRvblByb3BzID0ge1xuICAvKiogQWN0aW9uIHRvIHdoaWNoIGJ1dHRvbiBzaG91bGQgcmVkaXJlY3QgKi9cbiAgYWN0aW9uOiBBY3Rpb25KU09OO1xuICAvKiogSWQgb2YgYSByZXNvdXJjZSBvZiBhbiBhY3Rpb24gKi9cbiAgcmVzb3VyY2VJZDogc3RyaW5nO1xuICAvKiogT3B0aW9uYWwgcmVjb3JkSWQgZm9yIF9yZWNvcmRfIGFjdGlvbiAqL1xuICByZWNvcmRJZD86IHN0cmluZztcbiAgLyoqIE9wdGlvbmFsIHJlY29yZElkcyBmb3IgX2J1bGtfIGFjdGlvbiAqL1xuICByZWNvcmRJZHM/OiBBcnJheTxzdHJpbmc+O1xuICAvKiogb3B0aW9uYWwgY2FsbGJhY2sgZnVuY3Rpb24gd2hpY2ggd2lsbCBiZSB0cmlnZ2VyZWQgd2hlbiBhY3Rpb24gaXMgcGVyZm9ybWVkICovXG4gIGFjdGlvblBlcmZvcm1lZD86IChhY3Rpb246IEFjdGlvblJlc3BvbnNlKSA9PiBhbnk7XG59XG5cbi8qKlxuICogUmVuZGVycyBCdXR0b24gd2hpY2ggcmVkaXJlY3RzIHRvIGdpdmVuIGFjdGlvblxuICpcbiAqICMjIyBVc2FnZVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgQWN0aW9uQnV0dG9uIH0gZnJvbSAnYWRtaW4tYnJvJ1xuICogYGBgXG4gKlxuICogQGNvbXBvbmVudFxuICogQHN1YmNhdGVnb3J5IEFwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBBY3Rpb25CdXR0b246IFJlYWN0LkZDPEFjdGlvbkJ1dHRvblByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBhY3Rpb24sIGFjdGlvblBlcmZvcm1lZCwgcmVzb3VyY2VJZCwgcmVjb3JkSWQsIHJlY29yZElkcyB9ID0gcHJvcHNcblxuICBjb25zdCB7IGhyZWYsIGhhbmRsZUNsaWNrIH0gPSB1c2VBY3Rpb24oYWN0aW9uLCB7XG4gICAgcmVzb3VyY2VJZCwgcmVjb3JkSWQsIHJlY29yZElkcyxcbiAgfSwgYWN0aW9uUGVyZm9ybWVkKVxuXG4gIGlmICghYWN0aW9uKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGZpcnN0Q2hpbGQgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKVswXVxuXG4gIGlmICghZmlyc3RDaGlsZFxuICAgIHx8IHR5cGVvZiBmaXJzdENoaWxkID09PSAnc3RyaW5nJ1xuICAgIHx8IHR5cGVvZiBmaXJzdENoaWxkID09PSAnbnVtYmVyJ1xuICAgIHx8IHR5cGVvZiBmaXJzdENoaWxkID09PSAnYm9vbGVhbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbkJ1dHRvbiBoYXMgdG8gaGF2ZSBvbmUgY2hpbGQnKVxuICB9XG5cbiAgY29uc3QgV3JhcHBlZEVsZW1lbnQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoZmlyc3RDaGlsZCBhcyBSZWFjdEVsZW1lbnQ8YW55Piwge1xuICAgIG9uQ2xpY2s6IGhhbmRsZUNsaWNrLFxuICAgICdkYXRhLXRlc3RpZCc6IGJ1aWxkQWN0aW9uVGVzdElkKGFjdGlvbiksXG4gICAgaHJlZixcbiAgfSlcblxuXG4gIHJldHVybiBXcmFwcGVkRWxlbWVudFxufVxuXG4vLyBUT0RPIC0gcmVtb3ZlIHRoaXMgaGFja1xuZXhwb3J0IGRlZmF1bHQgQWN0aW9uQnV0dG9uXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBUZXh0LCBCdXR0b24sIEljb24sIEluZm9Cb3ggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uLy4uL2hvb2tzJ1xuaW1wb3J0IGFsbG93T3ZlcnJpZGUgZnJvbSAnLi4vLi4vLi4vaG9jL2FsbG93LW92ZXJyaWRlJ1xuaW1wb3J0IEFjdGlvbkJ1dHRvbiBmcm9tICcuLi9hY3Rpb24tYnV0dG9uL2FjdGlvbi1idXR0b24nXG5cbmV4cG9ydCB0eXBlIE5vUmVjb3Jkc1Byb3BzID0ge1xuICByZXNvdXJjZTogUmVzb3VyY2VKU09OO1xufVxuXG5jb25zdCBOb1JlY29yZHNPcmlnaW5hbDogUmVhY3QuRkM8Tm9SZWNvcmRzUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2UgfSA9IHByb3BzXG4gIGNvbnN0IHsgdHJhbnNsYXRlQnV0dG9uLCB0cmFuc2xhdGVNZXNzYWdlIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgY29uc3QgY2FuQ3JlYXRlID0gcmVzb3VyY2UucmVzb3VyY2VBY3Rpb25zLmZpbmQoYSA9PiBhLm5hbWUgPT09ICduZXcnKVxuXG4gIHJldHVybiAoXG4gICAgPEluZm9Cb3ggdGl0bGU9e3RyYW5zbGF0ZU1lc3NhZ2UoJ25vUmVjb3JkcycsIHJlc291cmNlLmlkKX0+XG4gICAgICA8VGV4dCBtYj1cInh4bFwiPlxuICAgICAgICB7dHJhbnNsYXRlTWVzc2FnZSgnbm9SZWNvcmRzSW5SZXNvdXJjZScsIHJlc291cmNlLmlkKX1cbiAgICAgIDwvVGV4dD5cbiAgICAgIHtjYW5DcmVhdGUgPyAoXG4gICAgICAgIDxBY3Rpb25CdXR0b24gYWN0aW9uPXtjYW5DcmVhdGV9IHJlc291cmNlSWQ9e3Jlc291cmNlLmlkfT5cbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICA8SWNvbiBpY29uPVwiQWRkXCIgLz5cbiAgICAgICAgICAgIHt0cmFuc2xhdGVCdXR0b24oJ2NyZWF0ZUZpcnN0UmVjb3JkJywgcmVzb3VyY2UuaWQpfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0FjdGlvbkJ1dHRvbj5cbiAgICAgICkgOiAnJ31cbiAgICA8L0luZm9Cb3g+XG4gIClcbn1cblxuLy8gVGhpcyBoYWNrIHByZXZlbnRzIHJvbGx1cCBmcm9tIHRocm93aW5nIGFuIGVycm9yXG5jb25zdCBOb1JlY29yZHMgPSBhbGxvd092ZXJyaWRlKE5vUmVjb3Jkc09yaWdpbmFsLCAnTm9SZWNvcmRzJylcblxuZXhwb3J0IHsgTm9SZWNvcmRzIH1cbmV4cG9ydCBkZWZhdWx0IE5vUmVjb3Jkc1xuIiwiaW1wb3J0IHsgQWN0aW9uSlNPTiwgUmVjb3JkSlNPTiB9IGZyb20gJy4uLy4uLy4uLy4uL2ludGVyZmFjZXMnXG5cbmNvbnN0IGdldEJ1bGtBY3Rpb25zRnJvbVJlY29yZHMgPSAocmVjb3JkczogQXJyYXk8UmVjb3JkSlNPTj4pOiBBcnJheTxBY3Rpb25KU09OPiA9PiB7XG4gIGNvbnN0IGFjdGlvbnMgPSBPYmplY3QudmFsdWVzKHJlY29yZHMucmVkdWNlKChtZW1vLCByZWNvcmQpID0+ICh7XG4gICAgLi4ubWVtbyxcbiAgICAuLi5yZWNvcmQuYnVsa0FjdGlvbnMucmVkdWNlKChhY3Rpb25zTWVtbywgYWN0aW9uKSA9PiAoe1xuICAgICAgLi4uYWN0aW9uc01lbW8sXG4gICAgICBbYWN0aW9uLm5hbWVdOiBhY3Rpb24sXG4gICAgfSksIHt9IGFzIFJlY29yZDxzdHJpbmcsIEFjdGlvbkpTT04+KSxcbiAgfSksIHt9IGFzIFJlY29yZDxzdHJpbmcsIEFjdGlvbkpTT04+KSlcbiAgcmV0dXJuIGFjdGlvbnNcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QnVsa0FjdGlvbnNGcm9tUmVjb3Jkc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGFibGVDYXB0aW9uLCBUaXRsZSwgQnV0dG9uR3JvdXAsIEJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IEFjdGlvbkpTT04sIGJ1aWxkQWN0aW9uQ2xpY2tIYW5kbGVyLCBSZWNvcmRKU09OLCBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IGdldEJ1bGtBY3Rpb25zRnJvbVJlY29yZHMgZnJvbSAnLi91dGlscy9nZXQtYnVsay1hY3Rpb25zLWZyb20tcmVjb3JkcydcbmltcG9ydCB7IHVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciwgdXNlVHJhbnNsYXRpb24gfSBmcm9tICcuLi8uLi8uLi9ob29rcydcbmltcG9ydCB7IGFjdGlvbnNUb0J1dHRvbkdyb3VwIH0gZnJvbSAnLi4vYWN0aW9uLWhlYWRlci9hY3Rpb25zLXRvLWJ1dHRvbi1ncm91cCdcblxudHlwZSBTZWxlY3RlZFJlY29yZHNQcm9wcyA9IHtcbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcbiAgc2VsZWN0ZWRSZWNvcmRzPzogQXJyYXk8UmVjb3JkSlNPTj47XG59XG5cbmV4cG9ydCBjb25zdCBTZWxlY3RlZFJlY29yZHM6IFJlYWN0LkZDPFNlbGVjdGVkUmVjb3Jkc1Byb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlc291cmNlLCBzZWxlY3RlZFJlY29yZHMgfSA9IHByb3BzXG4gIGNvbnN0IHsgdHJhbnNsYXRlTGFiZWwgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCBhY3Rpb25SZXNwb25zZUhhbmRsZXIgPSB1c2VBY3Rpb25SZXNwb25zZUhhbmRsZXIoKVxuXG4gIGlmICghc2VsZWN0ZWRSZWNvcmRzIHx8ICFzZWxlY3RlZFJlY29yZHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IHBhcmFtcyA9IHsgcmVzb3VyY2VJZDogcmVzb3VyY2UuaWQsIHJlY29yZElkczogc2VsZWN0ZWRSZWNvcmRzLm1hcChyZWNvcmRzID0+IHJlY29yZHMuaWQpIH1cblxuICBjb25zdCBoYW5kbGVBY3Rpb25DbGljayA9IChldmVudCwgc291cmNlQWN0aW9uOiBBY3Rpb25KU09OKTogdm9pZCA9PiAoXG4gICAgYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIoe1xuICAgICAgYWN0aW9uOiBzb3VyY2VBY3Rpb24sXG4gICAgICBwYXJhbXMsXG4gICAgICBhY3Rpb25SZXNwb25zZUhhbmRsZXIsXG4gICAgICBwdXNoOiBoaXN0b3J5LnB1c2gsXG4gICAgfSkoZXZlbnQpXG4gIClcblxuICBjb25zdCBidWxrQnV0dG9ucyA9IGFjdGlvbnNUb0J1dHRvbkdyb3VwKHtcbiAgICBhY3Rpb25zOiBnZXRCdWxrQWN0aW9uc0Zyb21SZWNvcmRzKHNlbGVjdGVkUmVjb3JkcyksXG4gICAgcGFyYW1zLFxuICAgIGhhbmRsZUNsaWNrOiBoYW5kbGVBY3Rpb25DbGljayxcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxUYWJsZUNhcHRpb24+XG4gICAgICA8Qm94IGZsZXggcHk9XCJzbVwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIj5cbiAgICAgICAgPFRpdGxlIG1yPVwibGdcIj5cbiAgICAgICAgICB7dHJhbnNsYXRlTGFiZWwoJ3NlbGVjdGVkUmVjb3JkcycsIHJlc291cmNlLmlkLCB7IHNlbGVjdGVkOiBzZWxlY3RlZFJlY29yZHMubGVuZ3RoIH0pfVxuICAgICAgICA8L1RpdGxlPlxuICAgICAgICA8QnV0dG9uR3JvdXAgc2l6ZT1cInNtXCIgcm91bmRlZCBidXR0b25zPXtidWxrQnV0dG9uc30gLz5cbiAgICAgIDwvQm94PlxuICAgIDwvVGFibGVDYXB0aW9uPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGVkUmVjb3Jkc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVGFibGUsIFRhYmxlQm9keSwgTG9hZGVyIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5pbXBvcnQgUmVjb3JkSW5MaXN0IGZyb20gJy4vcmVjb3JkLWluLWxpc3QnXG5pbXBvcnQgUmVjb3Jkc1RhYmxlSGVhZGVyIGZyb20gJy4vcmVjb3Jkcy10YWJsZS1oZWFkZXInXG5pbXBvcnQgTm9SZWNvcmRzIGZyb20gJy4vbm8tcmVjb3JkcydcblxuXG5pbXBvcnQgeyBSZWNvcmRKU09OLCBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IFNlbGVjdGVkUmVjb3JkcyBmcm9tICcuL3NlbGVjdGVkLXJlY29yZHMnXG5pbXBvcnQgeyBBY3Rpb25SZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uLy4uL2JhY2tlbmQvYWN0aW9ucy9hY3Rpb24uaW50ZXJmYWNlJ1xuXG4vKipcbiAqIEBhbGlhcyBSZWNvcmRzVGFibGVQcm9wc1xuICogQG1lbWJlcm9mIFJlY29yZHNUYWJsZVxuICovXG5leHBvcnQgdHlwZSBSZWNvcmRzVGFibGVQcm9wcyA9IHtcbiAgLyoqXG4gICAqIFJlc291cmNlIHdoaWNoIHR5cGUgcmVjb3JkcyBhcmUgcmVuZGVyZWQuIEJhc2Ugb24gdGhhdCB3ZSBkZWZpbmUgd2hpY2ggY29sdW1ucyBzaG91bGQgYmUgc2Vlbi5cbiAgICovXG4gIHJlc291cmNlOiBSZXNvdXJjZUpTT047XG4gIC8qKlxuICAgKiBBcnJheSBvZiByZWNvcmRzIHNlZW4gaW4gdGhlIHRhYmxlXG4gICAqL1xuICByZWNvcmRzOiBBcnJheTxSZWNvcmRKU09OPjtcbiAgLyoqXG4gICAqIEhhbmRsZXIgZnVuY3Rpb24gaW52b2tlZCB3aGVuIHNvbWVvbmUgcGVyZm9ybXMgYWN0aW9uIHdpdGhvdXQgY29tcG9uZW50IG9uIGEgZ2l2ZW4gcmVjb3JkLlxuICAgKiBBY3Rpb24gd2l0aG91dCBjb21wb25lbnQgaXMgYSBgZGVsZXRlYCBhY3Rpb24gLSB5b3UgbWlnaHQgd2FudCB0byByZWZyZXNoIHRoZSBsaXN0IGFmdGVyIHRoYXRcbiAgICovXG4gIGFjdGlvblBlcmZvcm1lZD86IChyZXNwb25zZTogQWN0aW9uUmVzcG9uc2UpID0+IGFueTtcbiAgLyoqIGRlZmF1bHQgc29ydCBieSBjb2x1bW4gKi9cbiAgc29ydEJ5Pzogc3RyaW5nO1xuICAvKiogc29ydCBkaXJlY3Rpb24gKi9cbiAgZGlyZWN0aW9uPzogJ2FzYycgfCAnZGVzYyc7XG4gIC8qKiBpbmRpY2F0ZXMgaWYgdGhlIHRhYmxlIHNob3VsZCBiZSBpbiBsb2FkaW5nIHN0YXRlICovXG4gIGlzTG9hZGluZz86IGJvb2xlYW47XG4gIC8qKiBsaXN0IG9mIHNlbGVjdGVkIHJlY29yZHMgKi9cbiAgc2VsZWN0ZWRSZWNvcmRzPzogQXJyYXk8UmVjb3JkSlNPTj47XG4gIC8qKiBoYW5kbGVyIGZ1bmN0aW9uIHRyaWdnZXJlZCB3aGVuIHJlY29yZCBpcyBzZWxlY3RlZCAqL1xuICBvblNlbGVjdD86IChyZWNvcmQ6IFJlY29yZEpTT04pID0+IGFueTtcbiAgLyoqIGhhbmRsZXIgZnVuY3Rpb24gdHJpZ2dlcmVkIHdoZW4gYWxsIGl0ZW1zIGFyZSBzZWxlY3RlZCAqL1xuICBvblNlbGVjdEFsbD86ICgpID0+IGFueTtcbn1cblxuLyoqXG4gKiBAY2xhc3NkZXNjXG4gKiBSZW5kZXJzIGFuIGVudGlyZSByZWNvcmRzIHRhYmxlLiBUbyBmaWxsIHRoZSBkYXRhIHlvdSBtaWdodCBuZWVkOlxuICpcbiAqIC0ge0BsaW5rIHVzZVJlY29yZHN9IGFuZFxuICogLSB7QGxpbmsgdXNlU2VsZWN0ZWRSZWNvcmRzfSBob29rc1xuICpcbiAqIHNvIG1ha2Ugc3VyZSB0byBzZWUgYXQgdGhlIGRvY3VtZW50YXRpb24gcGFnZXMgZm9yIGJvdGggb2YgdGhlbVxuICpcbiAqIEBjb21wb25lbnRcbiAqIEBjbGFzc1xuICogQGhpZGVjb25zdHJ1Y3RvclxuICogQHN1YmNhdGVnb3J5IEFwcGxpY2F0aW9uXG4gKiBAbmV3IGluIHZlcnNpb24gMy4zXG4gKi9cbmV4cG9ydCBjb25zdCBSZWNvcmRzVGFibGU6IFJlYWN0LkZDPFJlY29yZHNUYWJsZVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgcmVzb3VyY2UsIHJlY29yZHMsXG4gICAgYWN0aW9uUGVyZm9ybWVkLCBzb3J0QnksXG4gICAgZGlyZWN0aW9uLCBpc0xvYWRpbmcsXG4gICAgb25TZWxlY3QsIHNlbGVjdGVkUmVjb3JkcyxcbiAgICBvblNlbGVjdEFsbCxcbiAgfSA9IHByb3BzXG4gIGlmICghcmVjb3Jkcy5sZW5ndGgpIHtcbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICByZXR1cm4gKDxMb2FkZXIgLz4pXG4gICAgfVxuICAgIHJldHVybiAoPE5vUmVjb3JkcyByZXNvdXJjZT17cmVzb3VyY2V9IC8+KVxuICB9XG5cbiAgY29uc3Qgc2VsZWN0ZWRBbGwgPSBzZWxlY3RlZFJlY29yZHMgJiYgISFyZWNvcmRzLmZpbmQocmVjb3JkID0+IChcbiAgICBzZWxlY3RlZFJlY29yZHMuZmluZChzZWxlY3RlZCA9PiBzZWxlY3RlZC5pZCA9PT0gcmVjb3JkLmlkKVxuICApKVxuXG4gIGNvbnN0IHJlY29yZHNIYXZlQnVsa0FjdGlvbiA9ICEhcmVjb3Jkcy5maW5kKHJlY29yZCA9PiByZWNvcmQuYnVsa0FjdGlvbnMubGVuZ3RoKVxuXG4gIHJldHVybiAoXG4gICAgPFRhYmxlPlxuICAgICAgPFNlbGVjdGVkUmVjb3Jkc1xuICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgIHNlbGVjdGVkUmVjb3Jkcz17c2VsZWN0ZWRSZWNvcmRzfVxuICAgICAgLz5cbiAgICAgIDxSZWNvcmRzVGFibGVIZWFkZXJcbiAgICAgICAgcHJvcGVydGllcz17cmVzb3VyY2UubGlzdFByb3BlcnRpZXN9XG4gICAgICAgIHRpdGxlUHJvcGVydHk9e3Jlc291cmNlLnRpdGxlUHJvcGVydHl9XG4gICAgICAgIGRpcmVjdGlvbj17ZGlyZWN0aW9ufVxuICAgICAgICBzb3J0Qnk9e3NvcnRCeX1cbiAgICAgICAgb25TZWxlY3RBbGw9e3JlY29yZHNIYXZlQnVsa0FjdGlvbiA/IG9uU2VsZWN0QWxsIDogdW5kZWZpbmVkfVxuICAgICAgICBzZWxlY3RlZEFsbD17c2VsZWN0ZWRBbGx9XG4gICAgICAvPlxuICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAge3JlY29yZHMubWFwKHJlY29yZCA9PiAoXG4gICAgICAgICAgPFJlY29yZEluTGlzdFxuICAgICAgICAgICAgcmVjb3JkPXtyZWNvcmR9XG4gICAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgICBrZXk9e3JlY29yZC5pZH1cbiAgICAgICAgICAgIGFjdGlvblBlcmZvcm1lZD17YWN0aW9uUGVyZm9ybWVkfVxuICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9XG4gICAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgICAgICAgICBpc1NlbGVjdGVkPXtcbiAgICAgICAgICAgICAgc2VsZWN0ZWRSZWNvcmRzICYmICEhc2VsZWN0ZWRSZWNvcmRzLmZpbmQoc2VsZWN0ZWQgPT4gc2VsZWN0ZWQuaWQgPT09IHJlY29yZC5pZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvVGFibGVCb2R5PlxuICAgIDwvVGFibGU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjb3Jkc1RhYmxlXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBCb3gsIFBhZ2luYXRpb24sIFRleHQgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyB1c2VIaXN0b3J5LCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IFJlY29yZHNUYWJsZSBmcm9tICcuLi9hcHAvcmVjb3Jkcy10YWJsZS9yZWNvcmRzLXRhYmxlJ1xuaW1wb3J0IHsgQWN0aW9uUHJvcHMgfSBmcm9tICcuL2FjdGlvbi5wcm9wcydcbmltcG9ydCB1c2VSZWNvcmRzIGZyb20gJy4uLy4uL2hvb2tzL3VzZS1yZWNvcmRzL3VzZS1yZWNvcmRzJ1xuaW1wb3J0IHVzZVNlbGVjdGVkUmVjb3JkcyBmcm9tICcuLi8uLi9ob29rcy91c2Utc2VsZWN0ZWQtcmVjb3Jkcy91c2Utc2VsZWN0ZWQtcmVjb3JkcydcbmltcG9ydCB7IFJFRlJFU0hfS0VZIH0gZnJvbSAnLi91dGlscy9hcHBlbmQtZm9yY2UtcmVmcmVzaCdcblxuY29uc3QgTGlzdDogUmVhY3QuRkM8QWN0aW9uUHJvcHM+ID0gKHsgcmVzb3VyY2UsIHNldFRhZyB9KSA9PiB7XG4gIGNvbnN0IHtcbiAgICByZWNvcmRzLFxuICAgIGxvYWRpbmcsXG4gICAgZGlyZWN0aW9uLFxuICAgIHNvcnRCeSxcbiAgICBwYWdlLFxuICAgIHRvdGFsLFxuICAgIGZldGNoRGF0YSxcbiAgICBwZXJQYWdlLFxuICB9ID0gdXNlUmVjb3JkcyhyZXNvdXJjZS5pZClcbiAgY29uc3Qge1xuICAgIHNlbGVjdGVkUmVjb3JkcyxcbiAgICBoYW5kbGVTZWxlY3QsXG4gICAgaGFuZGxlU2VsZWN0QWxsLFxuICAgIHNldFNlbGVjdGVkUmVjb3JkcyxcbiAgfSA9IHVzZVNlbGVjdGVkUmVjb3JkcyhyZWNvcmRzKVxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHNldFRhZykge1xuICAgICAgc2V0VGFnKHRvdGFsLnRvU3RyaW5nKCkpXG4gICAgfVxuICB9LCBbdG90YWxdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRSZWNvcmRzKFtdKVxuICB9LCBbcmVzb3VyY2UuaWRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbi5zZWFyY2gpXG4gICAgaWYgKHNlYXJjaC5nZXQoUkVGUkVTSF9LRVkpKSB7XG4gICAgICBzZXRTZWxlY3RlZFJlY29yZHMoW10pXG4gICAgfVxuICB9LCBbbG9jYXRpb24uc2VhcmNoXSlcblxuICBjb25zdCBoYW5kbGVBY3Rpb25QZXJmb3JtZWQgPSAoKTogYW55ID0+IGZldGNoRGF0YSgpXG5cbiAgY29uc3QgaGFuZGxlUGFnaW5hdGlvbkNoYW5nZSA9IChwYWdlTnVtYmVyOiBudW1iZXIpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaClcbiAgICBzZWFyY2guc2V0KCdwYWdlJywgcGFnZU51bWJlci50b1N0cmluZygpKVxuICAgIGhpc3RvcnkucHVzaCh7IHNlYXJjaDogc2VhcmNoLnRvU3RyaW5nKCkgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEJveCB2YXJpYW50PVwid2hpdGVcIj5cbiAgICAgIDxSZWNvcmRzVGFibGVcbiAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICByZWNvcmRzPXtyZWNvcmRzfVxuICAgICAgICBhY3Rpb25QZXJmb3JtZWQ9e2hhbmRsZUFjdGlvblBlcmZvcm1lZH1cbiAgICAgICAgb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH1cbiAgICAgICAgb25TZWxlY3RBbGw9e2hhbmRsZVNlbGVjdEFsbH1cbiAgICAgICAgc2VsZWN0ZWRSZWNvcmRzPXtzZWxlY3RlZFJlY29yZHN9XG4gICAgICAgIGRpcmVjdGlvbj17ZGlyZWN0aW9ufVxuICAgICAgICBzb3J0Qnk9e3NvcnRCeX1cbiAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nfVxuICAgICAgLz5cbiAgICAgIDxUZXh0IG10PVwieGxcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgPFBhZ2luYXRpb25cbiAgICAgICAgICBwYWdlPXtwYWdlfVxuICAgICAgICAgIHBlclBhZ2U9e3BlclBhZ2V9XG4gICAgICAgICAgdG90YWw9e3RvdGFsfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVQYWdpbmF0aW9uQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9UZXh0PlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCB7XG4gIExpc3QgYXMgZGVmYXVsdCxcbiAgTGlzdCxcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1mdW5jdGlvbi1yZXR1cm4tdHlwZSAqL1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYWRkTm90aWNlIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9hZGQtbm90aWNlJ1xuXG4vKipcbiAqIE5vdGljZU1lc3NhZ2Ugd2hpY2ggY2FuIGJlIHByZXNlbnRlZCBhcyBhIFwiVG9hc3RcIiBtZXNzYWdlLlxuICogQGFsaWFzIE5vdGljZU1lc3NhZ2VcbiAqIEBtZW1iZXJvZiB3aXRoTm90aWNlXG4gKi9cbmV4cG9ydCB0eXBlIE5vdGljZU1lc3NhZ2UgPSB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgdHlwZT86ICdzdWNjZXNzJyB8ICdlcnJvcic7XG59XG5cblxuLyoqXG4gKiBBZGRpdGlvbmFsIHByb3BzIHdoaWNoIGFyZSBwYXNzZWQgdG8geW91ciBjb21wb25lbnRcbiAqIEBhbGlhcyBBZGROb3RpY2VQcm9wc1xuICogQG1lbWJlcm9mIHdpdGhOb3RpY2VcbiAqL1xuZXhwb3J0IHR5cGUgQWRkTm90aWNlUHJvcHMgPSB7XG4gIC8vIEZ1bmN0aW9uIHRyaWdnZXJpbmcgbm90aWNlIG1lc3NhZ2VzXG4gIGFkZE5vdGljZTogKG5vdGljZTogTm90aWNlTWVzc2FnZSkgPT4gdm9pZDtcbn1cblxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpOiBBZGROb3RpY2VQcm9wcyA9PiAoe1xuICBhZGROb3RpY2U6IChub3RpY2U6IE5vdGljZU1lc3NhZ2UpOiB2b2lkID0+IGRpc3BhdGNoKGFkZE5vdGljZShub3RpY2UpKSxcbn0pXG5cbi8qKlxuICogSGlnaGVyIE9yZGVyIENvbXBvbmVudCB3aGljaCBhbGxvd3MgeW91IHRvIHBvc3Qgbm90aWNlIG1lc3NhZ2VzIGZyb20geW91ciBjb21wb25lbnRzXG4gKlxuICogSXQgZ2l2ZXMgeW91IHRoZSBhZGRpdGlvbmFsIHByb3A6IGBhZGROb3RpY2Uobm90aWNlTWVzc2FnZSlgIHRha2luZyB7QGxpbmsgTm90aWNlTWVzc2FnZX0uXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogaW1wb3J0IHsgd2l0aE5vdGljZSB9IGZyb20gJ2FkbWluLWJyby9jb3JlJ1xuICpcbiAqIGNvbnN0IE1ZX01FU1NBR0UgPSB7XG4gKiAgIG1lc3NhZ2U6ICdJIGFtIHRvYXN0IG1lc3NhZ2UnLFxuICogICB0eXBlOiAnc3VjY2VzcycsXG4gKiB9XG4gKiBjb25zdCBNeUN1c3RvbUNvbXBvbmVudCA9ICh7IGFkZE5vdGljZSB9KSA9PiB7XG4gKiAgIHJldHVybiAoXG4gKiAgICAgPGEgb25DbGljaz17KCkgPT4gYWRkTm90aWNlKE1ZX01FU1NBR0UpfT5DbGljayBNZTwvYT5cbiAqICAgKVxuICogfVxuICogZXhwb3J0IGRlZmF1bHQgd2l0aE5vdGljZShNeUN1c3RvbUNvbXBvbmVudClcbiAqIGBgYFxuICpcbiAqIEBjb21wb25lbnRcbiAqIEBzdWJjYXRlZ29yeSBIT0NcbiAqL1xuY29uc3Qgd2l0aE5vdGljZSA9IENvbXBvbmVudCA9PiBjb25uZWN0KG51bGwsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ29tcG9uZW50KVxuXG5leHBvcnQge1xuICB3aXRoTm90aWNlIGFzIGRlZmF1bHQsXG4gIHdpdGhOb3RpY2UsXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIFRhYmxlLCBUYWJsZUJvZHksIFRhYmxlUm93LCBUYWJsZUNlbGwsIFRleHQsXG4gIERyYXdlckNvbnRlbnQsIERyYXdlckZvb3RlciwgQnV0dG9uLCBNZXNzYWdlQm94LCBJY29uLFxufSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCB7IFJvdXRlQ29tcG9uZW50UHJvcHMsIHdpdGhSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgUHJvcGVydHlUeXBlIGZyb20gJy4uL3Byb3BlcnR5LXR5cGUnXG5pbXBvcnQgeyBBY3Rpb25Qcm9wcyB9IGZyb20gJy4vYWN0aW9uLnByb3BzJ1xuaW1wb3J0IEFwaUNsaWVudCBmcm9tICcuLi8uLi91dGlscy9hcGktY2xpZW50J1xuaW1wb3J0IHdpdGhOb3RpY2UsIHsgQWRkTm90aWNlUHJvcHMgfSBmcm9tICcuLi8uLi9ob2Mvd2l0aC1ub3RpY2UnXG5pbXBvcnQgeyBhcHBlbmRGb3JjZVJlZnJlc2ggfSBmcm9tICcuL3V0aWxzL2FwcGVuZC1mb3JjZS1yZWZyZXNoJ1xuXG5pbXBvcnQgQWN0aW9uSGVhZGVyIGZyb20gJy4uL2FwcC9hY3Rpb24taGVhZGVyL2FjdGlvbi1oZWFkZXInXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuXG4vKipcbiAqIEBuYW1lIFNob3dBY3Rpb25cbiAqIEBjYXRlZ29yeSBBY3Rpb25zXG4gKiBAZGVzY3JpcHRpb24gU2hvd3MgYSBnaXZlbiByZWNvcmQuXG4gKiBAY29tcG9uZW50XG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBCdWxrRGVsZXRlOiBSZWFjdC5GQzxBY3Rpb25Qcm9wcyAmIEFkZE5vdGljZVByb3BzICYgUm91dGVDb21wb25lbnRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZSwgcmVjb3JkcywgYWN0aW9uLCBhZGROb3RpY2UsIGhpc3RvcnkgfSA9IHByb3BzXG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IHsgdHJhbnNsYXRlTWVzc2FnZSwgdHJhbnNsYXRlQnV0dG9uIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgaWYgKCFyZWNvcmRzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0PlxuICAgICAgICB7dHJhbnNsYXRlTWVzc2FnZSgncGlja1NvbWVGaXJzdFRvUmVtb3ZlJywgcmVzb3VyY2UuaWQpfVxuICAgICAgPC9UZXh0PlxuICAgIClcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBjb25zdCByZWNvcmRJZHMgPSByZWNvcmRzLm1hcChyID0+IHIuaWQpXG4gICAgYXBpLmJ1bGtBY3Rpb24oe1xuICAgICAgcmVzb3VyY2VJZDogcmVzb3VyY2UuaWQsXG4gICAgICBhY3Rpb25OYW1lOiBhY3Rpb24ubmFtZSxcbiAgICAgIHJlY29yZElkcyxcbiAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIH0pLnRoZW4oKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLm5vdGljZSkge1xuICAgICAgICBhZGROb3RpY2UocmVzcG9uc2UuZGF0YS5ub3RpY2UpXG4gICAgICB9XG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS5yZWRpcmVjdFVybCkge1xuICAgICAgICBjb25zdCBzZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgICAgIC8vIGJ1bGsgZnVuY3Rpb24gaGF2ZSByZWNvcmRJZHMgaW4gdGhlIFVSTCBzbyBpdCBoYXMgdG8gYmUgc3RyaXBwZWQgYmVmb3JlIHJlZGlyZWN0XG4gICAgICAgIHNlYXJjaC5kZWxldGUoJ3JlY29yZElkcycpXG4gICAgICAgIGhpc3RvcnkucHVzaChhcHBlbmRGb3JjZVJlZnJlc2gocmVzcG9uc2UuZGF0YS5yZWRpcmVjdFVybCwgc2VhcmNoLnRvU3RyaW5nKCkpKVxuICAgICAgfVxuICAgIH0pKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICBhZGROb3RpY2Uoe1xuICAgICAgICBtZXNzYWdlOiB0cmFuc2xhdGVNZXNzYWdlKCdidWxrRGVsZXRlRXJyb3InLCByZXNvdXJjZS5pZCksXG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICB9KVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8RHJhd2VyQ29udGVudD5cbiAgICAgICAge2FjdGlvbj8uc2hvd0luRHJhd2VyID8gPEFjdGlvbkhlYWRlciBvbWl0QWN0aW9ucyB7Li4ucHJvcHN9IC8+IDogbnVsbH1cbiAgICAgICAgPE1lc3NhZ2VCb3hcbiAgICAgICAgICBtYj1cInh4bFwiXG4gICAgICAgICAgdmFyaWFudD1cImRhbmdlclwiXG4gICAgICAgICAgbWVzc2FnZT17dHJhbnNsYXRlTWVzc2FnZSgndGhlc2VSZWNvcmRzV2lsbEJlUmVtb3ZlZCcsIHJlc291cmNlLmlkLCB7IGNvdW50OiByZWNvcmRzLmxlbmd0aCB9KX1cbiAgICAgICAgLz5cbiAgICAgICAgPFRhYmxlPlxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICB7cmVjb3Jkcy5tYXAocmVjb3JkID0+IChcbiAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cmVjb3JkLmlkfT5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgPFByb3BlcnR5VHlwZVxuICAgICAgICAgICAgICAgICAgICB3aGVyZT1cImxpc3RcIlxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eT17cmVzb3VyY2UudGl0bGVQcm9wZXJ0eX1cbiAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgICAgICAgICAgICByZWNvcmQ9e3JlY29yZH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvRHJhd2VyQ29udGVudD5cbiAgICAgIDxEcmF3ZXJGb290ZXI+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XG4gICAgICAgICAge2xvYWRpbmcgPyAoPEljb24gaWNvbj1cIkZhZGVcIiBzcGluIC8+KSA6IG51bGx9XG4gICAgICAgICAge3RyYW5zbGF0ZUJ1dHRvbignY29uZmlybVJlbW92YWxNYW55JywgcmVzb3VyY2UuaWQsIHsgY291bnQ6IHJlY29yZHMubGVuZ3RoIH0pfVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRHJhd2VyRm9vdGVyPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuY29uc3QgRm9ybWF0dGVkQnVsa0RlbGV0ZSA9IHdpdGhOb3RpY2Uod2l0aFJvdXRlcihCdWxrRGVsZXRlKSlcblxuZXhwb3J0IHtcbiAgRm9ybWF0dGVkQnVsa0RlbGV0ZSBhcyBkZWZhdWx0LFxuICBGb3JtYXR0ZWRCdWxrRGVsZXRlIGFzIEJ1bGtEZWxldGUsXG59XG4iLCJpbXBvcnQgeyBOZXcgfSBmcm9tICcuL25ldydcbmltcG9ydCB7IEVkaXQgfSBmcm9tICcuL2VkaXQnXG5pbXBvcnQgeyBTaG93IH0gZnJvbSAnLi9zaG93J1xuaW1wb3J0IHsgTGlzdCB9IGZyb20gJy4vbGlzdCdcbmltcG9ydCB7IEJ1bGtEZWxldGUgfSBmcm9tICcuL2J1bGstZGVsZXRlJ1xuXG5leHBvcnQgKiBmcm9tICcuL25ldydcbmV4cG9ydCAqIGZyb20gJy4vYWN0aW9uLnByb3BzJ1xuZXhwb3J0ICogZnJvbSAnLi9lZGl0J1xuZXhwb3J0ICogZnJvbSAnLi9zaG93J1xuZXhwb3J0ICogZnJvbSAnLi9saXN0J1xuZXhwb3J0ICogZnJvbSAnLi9idWxrLWRlbGV0ZSdcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCBjb25zdCBhY3Rpb25zID0ge1xuICBuZXc6IE5ldyxcbiAgZWRpdDogRWRpdCxcbiAgc2hvdzogU2hvdyxcbiAgbGlzdDogTGlzdCxcbiAgYnVsa0RlbGV0ZTogQnVsa0RlbGV0ZSxcbn1cbiIsImV4cG9ydCBjb25zdCBET0NTID0gJ2h0dHBzOi8vYWRtaW5icm8uY29tJ1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUEFUSFMgPSB7XG4gIHJvb3RQYXRoOiAnL2FkbWluJyxcbiAgbG9nb3V0UGF0aDogJy9hZG1pbi9sb2dvdXQnLFxuICBsb2dpblBhdGg6ICcvYWRtaW4vbG9naW4nLFxufVxuXG4vKiBjc3BlbGw6IGRpc2FibGUtbmV4dC1saW5lICovXG5leHBvcnQgY29uc3QgQURNSU5fQlJPX1RNUF9ESVIgPSAnLmFkbWluYnJvJ1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVHJhbnMgfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHsgTWVzc2FnZUJveCwgTGluayB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IEVycm9yQm91bmRhcnkgZnJvbSAnLi9lcnJvci1ib3VuZGFyeSdcbmltcG9ydCB7IGFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zJ1xuaW1wb3J0IHsgRE9DUyB9IGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cydcbmltcG9ydCB7IEFjdGlvblByb3BzIH0gZnJvbSAnLi4vYWN0aW9ucy9hY3Rpb24ucHJvcHMnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuXG5kZWNsYXJlIGNvbnN0IEFkbWluQnJvOiB7XG4gIFVzZXJDb21wb25lbnRzOiBBcnJheTxzdHJpbmc+O1xufVxuXG4vKipcbiAqIENvbXBvbmVudCB3aGljaCByZW5kZXJzIGFsbCB0aGUgZGVmYXVsdCBhbmQgY3VzdG9tIGFjdGlvbnMgZm9yIGJvdGggdGhlIFJlc291cmNlIGFuZCB0aGUgUmVjb3JkLlxuICpcbiAqIEl0IHBhc3NlcyBhbGwgcHJvcHMgZG93biB0byB0aGUgYWN0dWFsIEFjdGlvbiBjb21wb25lbnQuXG4gKlxuICogRXhhbXBsZSBvZiBjcmVhdGluZyB5b3VyIG93biBhY3Rpb25zOlxuICogYGBgXG4gKiAvLyBBZG1pbkJybyBvcHRpb25zXG4gKiBjb25zdCBBZG1pbkJyb09wdGlvbnMgPSB7XG4gKiAgIHJlc291cmNlczogW1xuICogICAgICByZXNvdXJjZSxcbiAqICAgICAgb3B0aW9uczoge1xuICogICAgICAgIGFjdGlvbnM6IHtcbiAqICAgICAgICAgICBteU5ld0FjdGlvbjoge1xuICogICAgICAgICAgICAgbGFiZWw6ICdhbWF6aW5nIGFjdGlvbicsXG4gKiAgICAgICAgICAgICBpY29uOiAnQWRkJyxcbiAqICAgICAgICAgICAgIGluVmlzaWJsZTogKHJlc291cmNlLCByZWNvcmQpID0+IHJlY29yZC5wYXJhbSgnZW1haWwnKSAhPT0gJycsXG4gKiAgICAgICAgICAgICBhY3Rpb25UeXBlOiAncmVjb3JkJyxcbiAqICAgICAgICAgICAgIGNvbXBvbmVudDogQWRtaW5Ccm8uYnVuZGxlKCcuL215LW5ldy1hY3Rpb24nKSxcbiAqICAgICAgICAgICAgIGhhbmRsZXI6IChyZXF1ZXN0LCByZXNwb25zZSwgZGF0YSkgPT4ge1xuICogICAgICAgICAgICAgICByZXR1cm4ge1xuICogICAgICAgICAgICAgICAgICAuLi5cbiAqICAgICAgICAgICAgICAgfVxuICogICAgICAgICAgICAgfVxuICogICAgICAgICAgIH1cbiAqICAgICAgICB9XG4gKiAgICAgIH1cbiAqICAgXVxuICogfVxuICogYGBgXG4gKlxuICogYGBgXG4gKiAvLyAuL215LW5ldy1hY3Rpb24uanN4XG4gKiBpbXBvcnQgeyBCb3ggfSBmcm9tICdhZG1pbi1icm8nXG4gKlxuICogY29uc3QgTXlOZXdBY3Rpb24gPSAocHJvcHMpID0+IHtcbiAqICAgY29uc3QgeyByZXNvdXJjZSwgYWN0aW9uLCByZWNvcmQgfSA9IHByb3BzXG4gKiAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHRoZSBwcm9wcyBhbmQgcmVuZGVyIGFjdGlvblxuICogICByZXR1cm4gKFxuICogICAgIDxCb3g+U29tZSBBY3Rpb24gQ29udGVudDwvQm94PlxuICogICApXG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAY29tcG9uZW50XG4gKiBAbmFtZSBCYXNlQWN0aW9uQ29tcG9uZW50XG4gKiBAc3ViY2F0ZWdvcnkgQXBwbGljYXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IEJhc2VBY3Rpb25Db21wb25lbnQ6IFJlYWN0LkZDPEFjdGlvblByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlc291cmNlLCBhY3Rpb24sIHJlY29yZCwgcmVjb3Jkcywgc2V0VGFnLCBkYXRhIH0gPSBwcm9wc1xuICBjb25zdCBkb2N1bWVudGF0aW9uTGluayA9IFtET0NTLCAnQmFzZUFjdGlvbi5odG1sJ10uam9pbignLycpXG5cbiAgY29uc3QgeyB0cmFuc2xhdGVNZXNzYWdlIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgbGV0IEFjdGlvbiA9IGFjdGlvbnNbYWN0aW9uLm5hbWVdXG5cbiAgaWYgKGFjdGlvbi5jb21wb25lbnQpIHtcbiAgICBBY3Rpb24gPSBBZG1pbkJyby5Vc2VyQ29tcG9uZW50c1thY3Rpb24uY29tcG9uZW50XVxuICB9XG5cbiAgaWYgKEFjdGlvbikge1xuICAgIHJldHVybiAoXG4gICAgICA8RXJyb3JCb3VuZGFyeT5cbiAgICAgICAgPEFjdGlvblxuICAgICAgICAgIGFjdGlvbj17YWN0aW9ufVxuICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICByZWNvcmQ9e3JlY29yZH1cbiAgICAgICAgICByZWNvcmRzPXtyZWNvcmRzfVxuICAgICAgICAgIHNldFRhZz17c2V0VGFnfVxuICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIC8+XG4gICAgICA8L0Vycm9yQm91bmRhcnk+XG4gICAgKVxuICB9XG4gIHJldHVybiBBY3Rpb24gfHwgKFxuICAgIDxNZXNzYWdlQm94IHZhcmlhbnQ9XCJkYW5nZXJcIj5cbiAgICAgIHt0cmFuc2xhdGVNZXNzYWdlKCdub0FjdGlvbkNvbXBvbmVudCcpfVxuICAgICAgPFRyYW5zIGtleT1cIm1lc3NhZ2VzLmJ1dHRvbnMuc2VlVGhlRG9jdW1lbnRhdGlvblwiPlxuICAgICAgICBTZWU6XG4gICAgICAgIDxMaW5rIG1sPVwiZGVmYXVsdFwiIGhyZWY9e2RvY3VtZW50YXRpb25MaW5rfT50aGUgZG9jdW1lbnRhdGlvbjwvTGluaz5cbiAgICAgIDwvVHJhbnM+XG4gICAgPC9NZXNzYWdlQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2VBY3Rpb25Db21wb25lbnRcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1lc3NhZ2VCb3gsIFRleHQgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuXG4vKipcbiAqIEBtZW1iZXJvZiBFcnJvck1lc3NhZ2VCb3hcbiAqIEBhbGlhcyBFcnJvck1lc3NhZ2VCb3hQcm9wc1xuICovXG5leHBvcnQgdHlwZSBFcnJvck1lc3NhZ2VCb3hQcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZztcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgdGVzdElkPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBjbGFzc1xuICogUHJpbnRzIGVycm9yIG1lc3NhZ2VcbiAqXG4gKiBAY29tcG9uZW50XG4gKiBAcHJpdmF0ZVxuICogQGV4YW1wbGVcbiAqIHJldHVybiAoXG4gKiA8RXJyb3JNZXNzYWdlQm94IHRpdGxlPXsnU29tZSBlcnJvcid9PlxuICogICA8cD5UZXh0IGJlbG93IHRoZSB0aXRsZTwvcD5cbiAqIDwvRXJyb3JNZXNzYWdlQm94PlxuICogKVxuICovXG5jb25zdCBFcnJvck1lc3NhZ2VCb3g6IFJlYWN0LkZDPEVycm9yTWVzc2FnZUJveFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCB0aXRsZSwgdGVzdElkIH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIDxNZXNzYWdlQm94IGRhdGEtdGVzdGlkPXt0ZXN0SWR9IG1lc3NhZ2U9e3RpdGxlfT5cbiAgICAgIDxUZXh0PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L1RleHQ+XG4gICAgPC9NZXNzYWdlQm94PlxuICApXG59XG5cbmNvbnN0IE5vUmVzb3VyY2VFcnJvcjogUmVhY3QuRkM8e3Jlc291cmNlSWQ6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2VJZCB9ID0gcHJvcHNcbiAgY29uc3QgeyB0cmFuc2xhdGVNZXNzYWdlIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIHJldHVybiAoXG4gICAgPE1lc3NhZ2VCb3hcbiAgICAgIG1lc3NhZ2U9XCI0MDQgLSBQQUdFIE5PVCBGT1VORFwiXG4gICAgICBkYXRhLXRlc3RpZD1cIk5vUmVzb3VyY2VFcnJvclwiXG4gICAgICB2YXJpYW50PVwiaW5mb1wiXG4gICAgICBtPVwieHhsXCJcbiAgICA+XG4gICAgICA8VGV4dD5cbiAgICAgICAge3RyYW5zbGF0ZU1lc3NhZ2UoJ2Vycm9yNDA0UmVzb3VyY2UnLCByZXNvdXJjZUlkLCB7IHJlc291cmNlSWQgfSl9XG4gICAgICA8L1RleHQ+XG4gICAgPC9NZXNzYWdlQm94PlxuICApXG59XG5cbmNvbnN0IE5vQWN0aW9uRXJyb3I6IFJlYWN0LkZDPHtyZXNvdXJjZUlkOiBzdHJpbmc7IGFjdGlvbk5hbWU6IHN0cmluZ30+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZSB9ID0gcHJvcHNcbiAgY29uc3QgeyB0cmFuc2xhdGVNZXNzYWdlIH0gPSB1c2VUcmFuc2xhdGlvbigpXG4gIHJldHVybiAoXG4gICAgPE1lc3NhZ2VCb3hcbiAgICAgIG1lc3NhZ2U9XCI0MDQgLSBQQUdFIE5PVCBGT1VORFwiXG4gICAgICBkYXRhLXRlc3RpZD1cIk5vQWN0aW9uRXJyb3JcIlxuICAgICAgdmFyaWFudD1cImluZm9cIlxuICAgICAgbT1cInh4bFwiXG4gICAgPlxuICAgICAgPFRleHQ+XG4gICAgICAgIHt0cmFuc2xhdGVNZXNzYWdlKCdlcnJvcjQwNEFjdGlvbicsIHJlc291cmNlSWQsIHsgcmVzb3VyY2VJZCwgYWN0aW9uTmFtZSB9KX1cbiAgICAgIDwvVGV4dD5cbiAgICA8L01lc3NhZ2VCb3g+XG4gIClcbn1cblxuY29uc3QgTm9SZWNvcmRFcnJvcjogUmVhY3QuRkM8e1xuICByZXNvdXJjZUlkOiBzdHJpbmc7XG4gIHJlY29yZElkOiBzdHJpbmc7XG59PiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlc291cmNlSWQsIHJlY29yZElkIH0gPSBwcm9wc1xuICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgcmV0dXJuIChcbiAgICA8TWVzc2FnZUJveFxuICAgICAgbWVzc2FnZT1cIjQwNCAtIFBBR0UgTk9UIEZPVU5EXCJcbiAgICAgIGRhdGEtdGVzdGlkPVwiTm9SZWNvcmRFcnJvclwiXG4gICAgICB2YXJpYW50PVwiaW5mb1wiXG4gICAgICBtPVwieHhsXCJcbiAgICA+XG4gICAgICA8VGV4dD5cbiAgICAgICAge3RyYW5zbGF0ZU1lc3NhZ2UoJ2Vycm9yNDA0UmVjb3JkJywgcmVzb3VyY2VJZCwgeyByZXNvdXJjZUlkLCByZWNvcmRJZCB9KX1cbiAgICAgIDwvVGV4dD5cbiAgICA8L01lc3NhZ2VCb3g+XG4gIClcbn1cblxuZXhwb3J0IHtcbiAgTm9SZXNvdXJjZUVycm9yLFxuICBOb0FjdGlvbkVycm9yLFxuICBOb1JlY29yZEVycm9yLFxuICBFcnJvck1lc3NhZ2VCb3gsXG4gIEVycm9yTWVzc2FnZUJveCBhcyBkZWZhdWx0LFxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgQm94LCBCb3hQcm9wcywgRHJhd2VyQ29udGVudCwgRHJhd2VyRm9vdGVyIH0gZnJvbSAnQGFkbWluLWJyby9kZXNpZ24tc3lzdGVtJ1xuXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkKEJveClgXG4gICYgJHtEcmF3ZXJDb250ZW50fSB7XG4gICAgYmFja2dyb3VuZDogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLmNvbG9ycy53aGl0ZX07XG4gICAgcGFkZGluZzogJHsoeyB0aGVtZSB9KTogc3RyaW5nID0+IHRoZW1lLnNwYWNlLnh4bH07XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cbiAgXG4gICYgJHtEcmF3ZXJGb290ZXJ9IHtcbiAgICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pOiBzdHJpbmcgPT4gdGhlbWUuY29sb3JzLndoaXRlfTtcbiAgICBwYWRkaW5nOiAwICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5zcGFjZS54eGx9ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5zcGFjZS54eGx9O1xuICB9XG5gXG5cbmNvbnN0IFdyYXBwZXI6IFJlYWN0LkZDPEJveFByb3BzPiA9IChwcm9wcykgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gIGNvbnN0IHsgY2hpbGRyZW4sIHZhcmlhbnQsIGNvbG9yLCAuLi5yZXN0IH0gPSBwcm9wc1xuICByZXR1cm4gKFxuICAgIDxTdHlsZWRXcmFwcGVyIHsuLi5yZXN0fSB2YXJpYW50PVwiZ3JleVwiIG14PVwiYXV0b1wiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU3R5bGVkV3JhcHBlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwsIHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7IERyYXdlciwgREVGQVVMVF9EUkFXRVJfV0lEVEggfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbi8qKlxuICogQGFsaWFzIERyYXdlclBvcnRhbFByb3BzXG4gKiBAbWVtYmVyb2YgRHJhd2VyUG9ydGFsXG4gKi9cbmV4cG9ydCB0eXBlIERyYXdlclBvcnRhbFByb3BzID0ge1xuICAvKipcbiAgICogVGhlIGRyYXdlciBjb250ZW50XG4gICAqL1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbCBkcmF3ZXIgd2lkdGhcbiAgICovXG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nIHwgQXJyYXk8bnVtYmVyIHwgc3RyaW5nPjtcbn1cblxuY29uc3QgRFJBV0VSX1BPUlRBTF9JRCA9ICdkcmF3ZXJQb3J0YWwnXG5cbi8qKlxuICogU2hvd3MgYWxsIG9mIGl0cyBjaGlsZHJlbiBpbiBhIERyYXdlciBvbiB0aGUgcmlnaHQuXG4gKiBJbnN0ZWFkIG9mIHJlbmRlcmluZyBpdCdzIG93biB7QGxpbmsgRHJhd2VyfSBjb21wb25lbnQgaXQgcmV1c2VzXG4gKiB0aGUgZ2xvYmFsIERyYXdlciB2aWEgUmVhY3QgUG9ydGFsLlxuICpcbiAqICMjIyBVc2FnZVxuICpcbiAqIGBgYFxuICogaW1wb3J0IHsgRHJhd2VyUG9ydGFsIH0gZnJvbSAnYWRtaW4tYnJvJ1xuICogYGBgXG4gKlxuICogQGNvbXBvbmVudFxuICogQHN1YmNhdGVnb3J5IEFwcGxpY2F0aW9uXG4gKi9cbmV4cG9ydCBjb25zdCBEcmF3ZXJQb3J0YWw6IFJlYWN0LkZDPERyYXdlclBvcnRhbFByb3BzPiA9ICh7IGNoaWxkcmVuLCB3aWR0aCB9KSA9PiB7XG4gIGNvbnN0IFtkcmF3ZXJFbGVtZW50LCBzZXREcmF3ZXJFbGVtZW50XSA9IHVzZVN0YXRlPEhUTUxFbGVtZW50IHwgbnVsbD4oXG4gICAgd2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKERSQVdFUl9QT1JUQUxfSUQpLFxuICApXG4gIGlmICghZHJhd2VyRWxlbWVudCAmJiB3aW5kb3cpIHtcbiAgICBjb25zdCBpbm5lcldyYXBwZXIgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBEcmF3ZXJXcmFwcGVyID0gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9eyh3aW5kb3cgYXMgYW55KS5USEVNRX0+XG4gICAgICAgIDxEcmF3ZXIgaWQ9e0RSQVdFUl9QT1JUQUxfSUR9IGNsYXNzTmFtZT1cImhpZGRlblwiIC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgKVxuICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlubmVyV3JhcHBlcilcbiAgICByZW5kZXIoRHJhd2VyV3JhcHBlciwgaW5uZXJXcmFwcGVyLCAoKSA9PiB7XG4gICAgICBzZXREcmF3ZXJFbGVtZW50KHdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChEUkFXRVJfUE9SVEFMX0lEKSlcbiAgICB9KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZHJhd2VyRWxlbWVudCkge1xuICAgICAgZHJhd2VyRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgIGRyYXdlckVsZW1lbnQuc3R5bGUud2lkdGggPSBBcnJheS5pc0FycmF5KHdpZHRoKSA/IHdpZHRoWzBdLnRvU3RyaW5nKCkgOiB3aWR0aC50b1N0cmluZygpXG4gICAgICB9XG4gICAgICByZXR1cm4gKCk6IHZvaWQgPT4ge1xuICAgICAgICBkcmF3ZXJFbGVtZW50LnN0eWxlLndpZHRoID0gREVGQVVMVF9EUkFXRVJfV0lEVEhcbiAgICAgICAgZHJhd2VyRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCk6IHZvaWQgPT4gdW5kZWZpbmVkXG4gIH0sIFtkcmF3ZXJFbGVtZW50XSlcblxuICBpZiAoIWRyYXdlckVsZW1lbnQpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVBvcnRhbChcbiAgICBjaGlsZHJlbixcbiAgICBkcmF3ZXJFbGVtZW50LFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERyYXdlclBvcnRhbFxuIiwiaW1wb3J0IFJlYWN0LCB7IE1vdXNlRXZlbnQsIFN5bnRoZXRpY0V2ZW50LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VIaXN0b3J5LCB1c2VMb2NhdGlvbiwgdXNlUm91dGVNYXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQge1xuICBCb3gsXG4gIEgzLFxuICBCdXR0b24sXG4gIEljb24sXG4gIERyYXdlcixcbiAgRHJhd2VyQ29udGVudCxcbiAgRHJhd2VyRm9vdGVyLFxufSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5cbmltcG9ydCBQcm9wZXJ0eVR5cGUgZnJvbSAnLi4vcHJvcGVydHktdHlwZSdcbmltcG9ydCB7IFJlY29yZEpTT04sIFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuXG5leHBvcnQgdHlwZSBGaWx0ZXJQcm9wcyA9IHtcbiAgcmVzb3VyY2U6IFJlc291cmNlSlNPTjtcbiAgdG9nZ2xlRmlsdGVyOiAoKSA9PiB2b2lkO1xuICBpc1Zpc2libGU6IGJvb2xlYW47XG59XG5cbnR5cGUgTWF0Y2hQcm9wcyA9IHtcbiAgcmVzb3VyY2VJZDogc3RyaW5nO1xufVxuXG5jb25zdCBwYXJzZVF1ZXJ5ID0gKGxvY2F0aW9uKTogYW55ID0+IHtcbiAgY29uc3QgZmlsdGVyOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge31cbiAgY29uc3QgcXVlcnkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGxvY2F0aW9uLnNlYXJjaClcbiAgZm9yIChjb25zdCBlbnRyeSBvZiBxdWVyeS5lbnRyaWVzKCkpIHtcbiAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeVxuICAgIGlmIChrZXkubWF0Y2goJ2ZpbHRlcnMuJykpIHtcbiAgICAgIGZpbHRlcltrZXkucmVwbGFjZSgnZmlsdGVycy4nLCAnJyldID0gdmFsdWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZpbHRlclxufVxuXG5leHBvcnQgY29uc3QgRmlsdGVyRHJhd2VyOiBSZWFjdC5GQzxGaWx0ZXJQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyByZXNvdXJjZSwgaXNWaXNpYmxlLCB0b2dnbGVGaWx0ZXIgfSA9IHByb3BzXG4gIGNvbnN0IHByb3BlcnRpZXMgPSByZXNvdXJjZS5maWx0ZXJQcm9wZXJ0aWVzXG5cbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZShwYXJzZVF1ZXJ5KGxvY2F0aW9uKSlcbiAgY29uc3QgbWF0Y2ggPSB1c2VSb3V0ZU1hdGNoPE1hdGNoUHJvcHM+KClcbiAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKVxuICBjb25zdCB7IHRyYW5zbGF0ZUxhYmVsLCB0cmFuc2xhdGVCdXR0b24gfSA9IHVzZVRyYW5zbGF0aW9uKClcblxuICB1c2VFZmZlY3QoKCkgPT4gc2V0RmlsdGVyKHt9KSwgW21hdGNoLnBhcmFtcy5yZXNvdXJjZUlkXSlcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50KTogZmFsc2UgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCBzZWFyY2ggPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG4gICAgT2JqZWN0LmtleXMoZmlsdGVyKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChmaWx0ZXJba2V5XSAhPT0gJycpIHtcbiAgICAgICAgc2VhcmNoLnNldChgZmlsdGVycy4ke2tleX1gLCBmaWx0ZXJba2V5XSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlYXJjaC5kZWxldGUoYGZpbHRlcnMuJHtrZXl9YClcbiAgICAgIH1cbiAgICB9KVxuICAgIHNlYXJjaC5zZXQoJ3BhZ2UnLCAnMScpXG4gICAgaGlzdG9yeS5wdXNoKGAke2hpc3RvcnkubG9jYXRpb24ucGF0aG5hbWV9PyR7c2VhcmNoLnRvU3RyaW5nKCl9YClcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IHJlc2V0RmlsdGVyID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgIGNvbnN0IGZpbHRlcmVkU2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gICAgY29uc3Qgc2VhcmNoID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKVxuICAgIGZvciAoY29uc3Qga2V5IG9mIHNlYXJjaC5rZXlzKCkpIHtcbiAgICAgIGlmICgha2V5Lm1hdGNoKCdmaWx0ZXJzLicpKSB7XG4gICAgICAgIGZpbHRlcmVkU2VhcmNoLnNldChrZXksIHNlYXJjaC5nZXQoa2V5KSBhcyBzdHJpbmcpXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHF1ZXJ5ID0gZmlsdGVyZWRTZWFyY2gudG9TdHJpbmcoKSA9PT0gJycgPyBgPyR7ZmlsdGVyZWRTZWFyY2gudG9TdHJpbmcoKX1gIDogJydcbiAgICBoaXN0b3J5LnB1c2goaGlzdG9yeS5sb2NhdGlvbi5wYXRobmFtZSArIHF1ZXJ5KVxuICAgIHNldEZpbHRlcih7fSlcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChwcm9wZXJ0eU5hbWU6IHN0cmluZyB8IFJlY29yZEpTT04sIHZhbHVlOiBhbnkpOiB2b2lkID0+IHtcbiAgICBpZiAoKHByb3BlcnR5TmFtZSBhcyBSZWNvcmRKU09OKS5wYXJhbXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigneW91IGNhbiBub3QgcGFzcyBSZWNvcmRKU09OIHRvIGZpbHRlcnMnKVxuICAgIH1cbiAgICBzZXRGaWx0ZXIoe1xuICAgICAgLi4uZmlsdGVyLFxuICAgICAgW3Byb3BlcnR5TmFtZSBhcyBzdHJpbmddOiB2YWx1ZSxcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RHJhd2VyIHZhcmlhbnQ9XCJmaWx0ZXJcIiBpc0hpZGRlbj17IWlzVmlzaWJsZX0gYXM9XCJmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8RHJhd2VyQ29udGVudD5cbiAgICAgICAgPEgzPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgc2l6ZT1cImljb25cIlxuICAgICAgICAgICAgcm91bmRlZFxuICAgICAgICAgICAgbXI9XCJsZ1wiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKTogdm9pZCA9PiB0b2dnbGVGaWx0ZXIoKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBpY29uPVwiQ2hldnJvblJpZ2h0XCIgY29sb3I9XCJ3aGl0ZVwiIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAge3RyYW5zbGF0ZUxhYmVsKCdmaWx0ZXJzJywgcmVzb3VyY2UuaWQpfVxuICAgICAgICA8L0gzPlxuICAgICAgICA8Qm94IG15PVwieDNcIj5cbiAgICAgICAgICB7cHJvcGVydGllcy5tYXAocHJvcGVydHkgPT4gKFxuICAgICAgICAgICAgPFByb3BlcnR5VHlwZVxuICAgICAgICAgICAgICBrZXk9e3Byb3BlcnR5LnByb3BlcnR5UGF0aH1cbiAgICAgICAgICAgICAgd2hlcmU9XCJmaWx0ZXJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICBwcm9wZXJ0eT17cHJvcGVydHl9XG4gICAgICAgICAgICAgIGZpbHRlcj17ZmlsdGVyfVxuICAgICAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L0JveD5cbiAgICAgIDwvRHJhd2VyQ29udGVudD5cbiAgICAgIDxEcmF3ZXJGb290ZXI+XG4gICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiBzaXplPVwibGdcIj5cbiAgICAgICAgICB7dHJhbnNsYXRlQnV0dG9uKCdhcHBseUNoYW5nZXMnLCByZXNvdXJjZS5pZCl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgc2l6ZT1cImxnXCIgb25DbGljaz17cmVzZXRGaWx0ZXJ9IHR5cGU9XCJidXR0b25cIiBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAge3RyYW5zbGF0ZUJ1dHRvbigncmVzZXRGaWx0ZXInLCByZXNvdXJjZS5pZCl9XG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9EcmF3ZXJGb290ZXI+XG4gICAgPC9EcmF3ZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyRHJhd2VyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgdXNlUm91dGVNYXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IEJhc2VBY3Rpb25Db21wb25lbnQgZnJvbSAnLi4vYXBwL2Jhc2UtYWN0aW9uLWNvbXBvbmVudCdcbmltcG9ydCBBcGlDbGllbnQgZnJvbSAnLi4vLi4vdXRpbHMvYXBpLWNsaWVudCdcbmltcG9ydCB7IFJlY29yZEFjdGlvblBhcmFtcyB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcbmltcG9ydCB7IEFjdGlvbkpTT04sIFJlY29yZEpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IHtcbiAgICBOb1Jlc291cmNlRXJyb3IsXG4gICAgTm9BY3Rpb25FcnJvcixcbiAgICBOb1JlY29yZEVycm9yLFxufSBmcm9tICcuLi9hcHAvZXJyb3ItbWVzc2FnZSdcbmltcG9ydCBXcmFwcGVyIGZyb20gJy4vdXRpbHMvd3JhcHBlcidcbmltcG9ydCB7IEFjdGlvbkhlYWRlciB9IGZyb20gJy4uL2FwcCdcbmltcG9ydCB7IHVzZU5vdGljZSwgdXNlUmVzb3VyY2UsIHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnXG5pbXBvcnQgRHJhd2VyUG9ydGFsIGZyb20gJy4uL2FwcC9kcmF3ZXItcG9ydGFsJ1xuaW1wb3J0IHtcbiAgICBBY3Rpb25SZXNwb25zZSxcbiAgICBSZWNvcmRBY3Rpb25SZXNwb25zZSxcbn0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC9hY3Rpb25zL2FjdGlvbi5pbnRlcmZhY2UnXG5pbXBvcnQgbWVyZ2VSZWNvcmRSZXNwb25zZSBmcm9tICcuLi8uLi9ob29rcy91c2UtcmVjb3JkL21lcmdlLXJlY29yZC1yZXNwb25zZSdcblxuY29uc3QgYXBpID0gbmV3IEFwaUNsaWVudCgpXG5cbmNvbnN0IFJlY29yZEFjdGlvbjogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGU8e1xuICAgICAgICByZWNvcmQ6IFJlY29yZEpTT05cbiAgICAgICAgW2tleTogc3RyaW5nXTogYW55XG4gICAgfT4oKVxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgbWF0Y2ggPSB1c2VSb3V0ZU1hdGNoPFJlY29yZEFjdGlvblBhcmFtcz4oKVxuICAgIGNvbnN0IGFkZE5vdGljZSA9IHVzZU5vdGljZSgpXG4gICAgY29uc3QgeyB0cmFuc2xhdGVNZXNzYWdlIH0gPSB1c2VUcmFuc2xhdGlvbigpXG5cbiAgICBjb25zdCB7IGFjdGlvbk5hbWUsIHJlY29yZElkLCByZXNvdXJjZUlkIH0gPSBtYXRjaC5wYXJhbXNcbiAgICBjb25zdCByZXNvdXJjZSA9IHVzZVJlc291cmNlKHJlc291cmNlSWQpXG5cbiAgICBjb25zdCBhY3Rpb24gPVxuICAgICAgICBkYXRhPy5yZWNvcmQgJiZcbiAgICAgICAgZGF0YS5yZWNvcmQucmVjb3JkQWN0aW9ucy5maW5kKChyKSA9PiByLm5hbWUgPT09IGFjdGlvbk5hbWUpXG5cbiAgICBjb25zdCBmZXRjaFJlY29yZCA9ICgpOiB2b2lkID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICBhcGkucmVjb3JkQWN0aW9uKG1hdGNoLnBhcmFtcylcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBhZGROb3RpY2Uoe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0cmFuc2xhdGVNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2Vycm9yRmV0Y2hpbmdSZWNvcmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VJZFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hSZWNvcmQoKVxuICAgIH0sIFthY3Rpb25OYW1lLCByZWNvcmRJZCwgcmVzb3VyY2VJZF0pXG5cbiAgICBjb25zdCBoYW5kbGVBY3Rpb25QZXJmb3JtZWQgPSB1c2VDYWxsYmFjayhcbiAgICAgICAgKG9sZFJlY29yZDogUmVjb3JkSlNPTiwgcmVzcG9uc2U6IEFjdGlvblJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UucmVjb3JkKSB7XG4gICAgICAgICAgICAgICAgc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZDogbWVyZ2VSZWNvcmRSZXNwb25zZShcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFJlY29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlIGFzIFJlY29yZEFjdGlvblJlc3BvbnNlXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmV0Y2hSZWNvcmQoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbZmV0Y2hSZWNvcmRdXG4gICAgKVxuXG4gICAgaWYgKCFyZXNvdXJjZSkge1xuICAgICAgICByZXR1cm4gPE5vUmVzb3VyY2VFcnJvciByZXNvdXJjZUlkPXtyZXNvdXJjZUlkfSAvPlxuICAgIH1cblxuICAgIC8vIFdoZW4gdGhlIHVzZXIgdmlzaXRzIHRoaXMgcm91dGUgKHJlY29yZCBhY3Rpb24pIGZyb20gYSBkaWZmZXJlbnQsIHRoYW4gdGhlIGN1cnJlbnQgb25lLCByZWNvcmQuXG4gICAgLy8gSXQgcmVuZGVycyBldmVyeXRoaW5nIHdpdGggYSBuZXcgcmVzb3VyY2UuIFRoZSBvbGQgcmVjb3JkIHJlbWFpbnMgdW50aWwgdXNlRWZmZWN0IGZldGNoZXMgZGF0YVxuICAgIC8vIGZyb20gdGhlIEFQSS4gdGhhdCBpcyB3aHkgd2UgaGF2ZSB0byBjaGVjayBpZiB0aGUgY3VycmVudCByZWNvcmQgaGFzIGNvcnJlY3QgcmVjb3JkLmlkLlxuICAgIC8vIEFsdGVybmF0aXZlIGFwcHJvYWNoIHdvdWxkIGJlIHRvIHNldFJlY29yZCh1bmRlZmluZWQpIGJlZm9yZSB0aGUgZmV0Y2gsIGJ1dCBpdCBpcyBhc3luYyBhbmRcbiAgICAvLyB3ZSBjYW5ub3QgYmUgc3VyZSB0aGF0IHRoZSBjb21wb25lbnQgd29udCBiZSByZW5kZXJlZCAoaXQgd2lsbCBiZSBhdCBsZWFzdCBvbmNlKSB3aXRoIHRoZVxuICAgIC8vIHdyb25nIGRhdGEuXG4gICAgY29uc3QgaGFzRGlmZmVyZW50UmVjb3JkID1cbiAgICAgICAgZGF0YT8ucmVjb3JkICYmIGRhdGEucmVjb3JkLmlkLnRvU3RyaW5nKCkgIT09IHJlY29yZElkXG5cbiAgICBpZiAobG9hZGluZyB8fCBoYXNEaWZmZXJlbnRSZWNvcmQpIHtcbiAgICAgICAgY29uc3QgYWN0aW9uRnJvbVJlc291cmNlID0gcmVzb3VyY2UuYWN0aW9ucy5maW5kKFxuICAgICAgICAgICAgKHIpID0+IHIubmFtZSA9PT0gYWN0aW9uTmFtZVxuICAgICAgICApXG4gICAgICAgIHJldHVybiBhY3Rpb25Gcm9tUmVzb3VyY2U/LnNob3dJbkRyYXdlciA/IChcbiAgICAgICAgICAgIDxEcmF3ZXJQb3J0YWw+XG4gICAgICAgICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICAgICAgPC9EcmF3ZXJQb3J0YWw+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICByZXR1cm4gPE5vQWN0aW9uRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gYWN0aW9uTmFtZT17YWN0aW9uTmFtZX0gLz5cbiAgICB9XG5cbiAgICBpZiAoIWRhdGE/LnJlY29yZCkge1xuICAgICAgICByZXR1cm4gPE5vUmVjb3JkRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gcmVjb3JkSWQ9e3JlY29yZElkfSAvPlxuICAgIH1cblxuICAgIGlmIChhY3Rpb24uc2hvd0luRHJhd2VyKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RHJhd2VyUG9ydGFsIHdpZHRoPXthY3Rpb24uY29udGFpbmVyV2lkdGh9PlxuICAgICAgICAgICAgICAgIDxCYXNlQWN0aW9uQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj17YWN0aW9uIGFzIEFjdGlvbkpTT059XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkPXtkYXRhLnJlY29yZH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9EcmF3ZXJQb3J0YWw+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlciB3aWR0aD17YWN0aW9uLmNvbnRhaW5lcldpZHRofT5cbiAgICAgICAgICAgIDxBY3Rpb25IZWFkZXJcbiAgICAgICAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgICAgICAgICAgcmVjb3JkPXtkYXRhLnJlY29yZH1cbiAgICAgICAgICAgICAgICBhY3Rpb25QZXJmb3JtZWQ9eyhyZXNwb25zZTogQWN0aW9uUmVzcG9uc2UpOiB2b2lkID0+XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUFjdGlvblBlcmZvcm1lZChkYXRhLnJlY29yZCwgcmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCYXNlQWN0aW9uQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgYWN0aW9uPXthY3Rpb259XG4gICAgICAgICAgICAgICAgcmVzb3VyY2U9e3Jlc291cmNlfVxuICAgICAgICAgICAgICAgIHJlY29yZD17ZGF0YS5yZWNvcmR9XG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29yZEFjdGlvblxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuXG5pbXBvcnQgeyBSb3V0ZUNvbXBvbmVudFByb3BzIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IEJhc2VBY3Rpb25Db21wb25lbnQgZnJvbSAnLi4vYXBwL2Jhc2UtYWN0aW9uLWNvbXBvbmVudCdcbmltcG9ydCB7IFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBSZWR1eFN0YXRlIH0gZnJvbSAnLi4vLi4vc3RvcmUvc3RvcmUnXG5pbXBvcnQgeyBOb1Jlc291cmNlRXJyb3IsIE5vQWN0aW9uRXJyb3IgfSBmcm9tICcuLi9hcHAvZXJyb3ItbWVzc2FnZSdcbmltcG9ydCB7IFJlc291cmNlQWN0aW9uUGFyYW1zIH0gZnJvbSAnLi4vLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuaW1wb3J0IHsgQWN0aW9uSGVhZGVyIH0gZnJvbSAnLi4vYXBwJ1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi91dGlscy93cmFwcGVyJ1xuaW1wb3J0IERyYXdlclBvcnRhbCBmcm9tICcuLi9hcHAvZHJhd2VyLXBvcnRhbCdcblxudHlwZSBQcm9wc0Zyb21TdGF0ZSA9IHtcbiAgcmVzb3VyY2VzOiBBcnJheTxSZXNvdXJjZUpTT04+O1xufVxuXG50eXBlIFByb3BzID0gUHJvcHNGcm9tU3RhdGUgJiBSb3V0ZUNvbXBvbmVudFByb3BzPFJlc291cmNlQWN0aW9uUGFyYW1zPlxuXG5jb25zdCBSZXNvdXJjZUFjdGlvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcmVzb3VyY2VzLCBtYXRjaCB9ID0gcHJvcHNcbiAgY29uc3QgeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lIH0gPSBtYXRjaC5wYXJhbXNcblxuICBjb25zdCByZXNvdXJjZSA9IHJlc291cmNlcy5maW5kKHIgPT4gci5pZCA9PT0gcmVzb3VyY2VJZClcbiAgaWYgKCFyZXNvdXJjZSkge1xuICAgIHJldHVybiAoPE5vUmVzb3VyY2VFcnJvciByZXNvdXJjZUlkPXtyZXNvdXJjZUlkfSAvPilcbiAgfVxuICBjb25zdCBhY3Rpb24gPSByZXNvdXJjZS5yZXNvdXJjZUFjdGlvbnMuZmluZChyID0+IHIubmFtZSA9PT0gYWN0aW9uTmFtZSlcbiAgaWYgKCFhY3Rpb24pIHtcbiAgICByZXR1cm4gKDxOb0FjdGlvbkVycm9yIHJlc291cmNlSWQ9e3Jlc291cmNlSWR9IGFjdGlvbk5hbWU9e2FjdGlvbk5hbWV9IC8+KVxuICB9XG5cbiAgaWYgKGFjdGlvbi5zaG93SW5EcmF3ZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERyYXdlclBvcnRhbCB3aWR0aD17YWN0aW9uLmNvbnRhaW5lcldpZHRofT5cbiAgICAgICAgPEJhc2VBY3Rpb25Db21wb25lbnRcbiAgICAgICAgICBhY3Rpb249e2FjdGlvbn1cbiAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgIC8+XG4gICAgICA8L0RyYXdlclBvcnRhbD5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxXcmFwcGVyIHdpZHRoPXthY3Rpb24uY29udGFpbmVyV2lkdGh9PlxuICAgICAgPEFjdGlvbkhlYWRlclxuICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgIGFjdGlvbj17YWN0aW9ufVxuICAgICAgLz5cbiAgICAgIDxCYXNlQWN0aW9uQ29tcG9uZW50XG4gICAgICAgIGFjdGlvbj17YWN0aW9ufVxuICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAvPlxuICAgIDwvV3JhcHBlcj5cbiAgKVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IFJlZHV4U3RhdGUpOiBQcm9wc0Zyb21TdGF0ZSA9PiAoe1xuICByZXNvdXJjZXM6IHN0YXRlLnJlc291cmNlcyxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShSZXNvdXJjZUFjdGlvbilcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICdAYWRtaW4tYnJvL2Rlc2lnbi1zeXN0ZW0nXG5pbXBvcnQgeyB1c2VSb3V0ZU1hdGNoLCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlcidcblxuaW1wb3J0IHsgQnVsa0FjdGlvblBhcmFtcyB9IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcblxuaW1wb3J0IEFwaUNsaWVudCBmcm9tICcuLi8uLi91dGlscy9hcGktY2xpZW50J1xuaW1wb3J0IGdldEJ1bGtBY3Rpb25zRnJvbVJlY29yZHMgZnJvbSAnLi4vYXBwL3JlY29yZHMtdGFibGUvdXRpbHMvZ2V0LWJ1bGstYWN0aW9ucy1mcm9tLXJlY29yZHMnXG5pbXBvcnQgeyBBY3Rpb25KU09OLCBSZWNvcmRKU09OLCBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuaW1wb3J0IFdyYXBwZXIgZnJvbSAnLi91dGlscy93cmFwcGVyJ1xuaW1wb3J0IHtcbiAgICBBY3Rpb25IZWFkZXIsXG4gICAgRHJhd2VyUG9ydGFsLFxuICAgIEJhc2VBY3Rpb25Db21wb25lbnQsXG4gICAgRXJyb3JNZXNzYWdlQm94LFxuICAgIE5vUmVzb3VyY2VFcnJvcixcbiAgICBOb0FjdGlvbkVycm9yLFxufSBmcm9tICcuLi9hcHAnXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiwgdXNlTm90aWNlLCB1c2VSZXNvdXJjZSB9IGZyb20gJy4uLy4uL2hvb2tzJ1xuXG50eXBlIFByb3BzRnJvbVN0YXRlID0ge1xuICAgIHJlc291cmNlczogQXJyYXk8UmVzb3VyY2VKU09OPlxufVxuXG50eXBlIE1hdGNoUGFyYW1zID0gUGljazxCdWxrQWN0aW9uUGFyYW1zLCAnYWN0aW9uTmFtZScgfCAncmVzb3VyY2VJZCc+XG5cbmNvbnN0IGFwaSA9IG5ldyBBcGlDbGllbnQoKVxuXG5jb25zdCBCdWxrQWN0aW9uOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBtYXRjaCA9IHVzZVJvdXRlTWF0Y2g8TWF0Y2hQYXJhbXM+KClcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxhbnk+KClcbiAgICBjb25zdCB7IHRyYW5zbGF0ZU1lc3NhZ2UgfSA9IHVzZVRyYW5zbGF0aW9uKClcbiAgICBjb25zdCBhZGROb3RpY2UgPSB1c2VOb3RpY2UoKVxuICAgIGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKVxuXG4gICAgY29uc3QgeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lIH0gPSBtYXRjaC5wYXJhbXNcbiAgICBjb25zdCByZXNvdXJjZSA9IHVzZVJlc291cmNlKHJlc291cmNlSWQpXG5cbiAgICBjb25zdCBmZXRjaFJlY29yZHMgPSAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gICAgICAgIGNvbnN0IHJlY29yZElkc1N0cmluZyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKS5nZXQoXG4gICAgICAgICAgICAncmVjb3JkSWRzJ1xuICAgICAgICApXG4gICAgICAgIGNvbnN0IHJlY29yZElkcyA9IHJlY29yZElkc1N0cmluZyA/IHJlY29yZElkc1N0cmluZy5zcGxpdCgnLCcpIDogW11cbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuXG4gICAgICAgIHJldHVybiBhcGlcbiAgICAgICAgICAgIC5idWxrQWN0aW9uKHtcbiAgICAgICAgICAgICAgICByZXNvdXJjZUlkLFxuICAgICAgICAgICAgICAgIHJlY29yZElkcyxcbiAgICAgICAgICAgICAgICBhY3Rpb25OYW1lLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgICAgIGFkZE5vdGljZSh7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHRyYW5zbGF0ZU1lc3NhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZXJyb3JGZXRjaGluZ1JlY29yZHMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VJZFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hSZWNvcmRzKClcbiAgICB9LCBbbWF0Y2gucGFyYW1zLnJlc291cmNlSWQsIG1hdGNoLnBhcmFtcy5hY3Rpb25OYW1lXSlcblxuICAgIGlmICghcmVzb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIDxOb1Jlc291cmNlRXJyb3IgcmVzb3VyY2VJZD17cmVzb3VyY2VJZH0gLz5cbiAgICB9XG5cbiAgICBpZiAoIWRhdGE/LnJlY29yZHMgJiYgIWxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VCb3ggdGl0bGU9XCJObyByZWNvcmRzXCI+XG4gICAgICAgICAgICAgICAgPHA+e3RyYW5zbGF0ZU1lc3NhZ2UoJ25vUmVjb3Jkc1NlbGVjdGVkJywgcmVzb3VyY2VJZCl9PC9wPlxuICAgICAgICAgICAgPC9FcnJvck1lc3NhZ2VCb3g+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb24gPSBnZXRCdWxrQWN0aW9uc0Zyb21SZWNvcmRzKGRhdGE/LnJlY29yZHMgfHwgW10pLmZpbmQoXG4gICAgICAgIChyKSA9PiByLm5hbWUgPT09IGFjdGlvbk5hbWVcbiAgICApXG5cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgICBjb25zdCBhY3Rpb25Gcm9tUmVzb3VyY2UgPSByZXNvdXJjZS5hY3Rpb25zLmZpbmQoXG4gICAgICAgICAgICAocikgPT4gci5uYW1lID09PSBhY3Rpb25OYW1lXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuIGFjdGlvbkZyb21SZXNvdXJjZT8uc2hvd0luRHJhd2VyID8gKFxuICAgICAgICAgICAgPERyYXdlclBvcnRhbD5cbiAgICAgICAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgICAgICA8L0RyYXdlclBvcnRhbD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgKVxuICAgIH1cblxuICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiA8Tm9BY3Rpb25FcnJvciByZXNvdXJjZUlkPXtyZXNvdXJjZUlkfSBhY3Rpb25OYW1lPXthY3Rpb25OYW1lfSAvPlxuICAgIH1cblxuICAgIGlmIChhY3Rpb24uc2hvd0luRHJhd2VyKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RHJhd2VyUG9ydGFsIHdpZHRoPXthY3Rpb24uY29udGFpbmVyV2lkdGh9PlxuICAgICAgICAgICAgICAgIDxCYXNlQWN0aW9uQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj17YWN0aW9uIGFzIEFjdGlvbkpTT059XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlPXtyZXNvdXJjZX1cbiAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgcmVjb3Jkcz17ZGF0YT8ucmVjb3Jkc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9EcmF3ZXJQb3J0YWw+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8V3JhcHBlciB3aWR0aD17YWN0aW9uLmNvbnRhaW5lcldpZHRofT5cbiAgICAgICAgICAgIHshYWN0aW9uPy5zaG93SW5EcmF3ZXIgPyAoXG4gICAgICAgICAgICAgICAgPEFjdGlvbkhlYWRlciByZXNvdXJjZT17cmVzb3VyY2V9IGFjdGlvbj17YWN0aW9ufSAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxCYXNlQWN0aW9uQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgYWN0aW9uPXthY3Rpb24gYXMgQWN0aW9uSlNPTn1cbiAgICAgICAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICByZWNvcmRzPXtkYXRhPy5yZWNvcmRzfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9XcmFwcGVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnVsa0FjdGlvblxuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSwgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCdcblxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBFcnJvckJvdW5kYXJ5IGZyb20gJy4uL2FwcC9lcnJvci1ib3VuZGFyeSdcbmltcG9ydCB7IFJlZHV4U3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcbmltcG9ydCBFcnJvck1lc3NhZ2VCb3ggZnJvbSAnLi4vYXBwL2Vycm9yLW1lc3NhZ2UnXG5cbmRlY2xhcmUgY29uc3QgQWRtaW5Ccm86IHtcbiAgVXNlckNvbXBvbmVudHM6IFJlY29yZDxzdHJpbmcsIEZ1bmN0aW9uQ29tcG9uZW50Pjtcbn1cblxudHlwZSBTdGF0ZSA9IHtcbiAgaXNDbGllbnQ6IGJvb2xlYW47XG59XG5cbnR5cGUgUHJvcHNGcm9tU3RhdGUgPSB7XG4gIHBhZ2VzOiBSZWR1eFN0YXRlWydwYWdlcyddO1xufVxuXG50eXBlIFByb3BzID0gUHJvcHNGcm9tU3RhdGUgJiBSb3V0ZUNvbXBvbmVudFByb3BzPHtcbiAgcGFnZU5hbWU6IHN0cmluZztcbn0+XG5cbmNsYXNzIFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0NsaWVudDogZmFsc2UsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQ2xpZW50OiB0cnVlIH0pXG4gIH1cblxuICByZW5kZXIoKTogUmVhY3ROb2RlIHtcbiAgICBjb25zdCB7IHBhZ2VzLCBtYXRjaCB9ID0gdGhpcy5wcm9wc1xuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBtYXRjaFxuICAgIGNvbnN0IHsgcGFnZU5hbWUgfSA9IHBhcmFtc1xuICAgIGNvbnN0IHsgaXNDbGllbnQgfSA9IHRoaXMuc3RhdGVcblxuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gcGFnZXMuZmluZChwYWdlID0+IHBhZ2UubmFtZSA9PT0gcGFnZU5hbWUpXG5cbiAgICBpZiAoIWN1cnJlbnRQYWdlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RXJyb3JNZXNzYWdlQm94IHRpdGxlPVwiVGhlcmUgaXMgbm8gcGFnZSBvZiBnaXZlbiBuYW1lXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBQYWdlOlxuICAgICAgICAgICAgPGI+e2AgXCIke3BhZ2VOYW1lfVwiIGB9PC9iPlxuICAgICAgICAgICAgZG9lcyBub3QgZXhpc3QuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0Vycm9yTWVzc2FnZUJveD5cbiAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCBDb21wb25lbnQgPSBBZG1pbkJyby5Vc2VyQ29tcG9uZW50c1tjdXJyZW50UGFnZS5jb21wb25lbnRdXG5cbiAgICBpZiAoIUNvbXBvbmVudCB8fCAhaXNDbGllbnQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxFcnJvck1lc3NhZ2VCb3ggdGl0bGU9XCJObyBjb21wb25lbnQgc3BlY2lmaWVkXCI+XG4gICAgICAgICAgPHA+WW91IGhhdmUgdG8gc3BlY2lmeSBjb21wb25lbnQgd2hpY2ggd2lsbCByZW5kZXIgdGhpcyBQYWdlPC9wPlxuICAgICAgICA8L0Vycm9yTWVzc2FnZUJveD5cbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEVycm9yQm91bmRhcnk+XG4gICAgICAgIDxDb21wb25lbnQgLz5cbiAgICAgIDwvRXJyb3JCb3VuZGFyeT5cbiAgICApXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSZWR1eFN0YXRlKTogUHJvcHNGcm9tU3RhdGUgPT4gKHtcbiAgcGFnZXM6IHN0YXRlLnBhZ2VzLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFBhZ2UpXG4iLCJleHBvcnQgZGVmYXVsdCAocXVlcnlTdHJpbmc6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICBjb25zdCBxdWVyeSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMocXVlcnlTdHJpbmcpXG4gIGZvciAoY29uc3Qga2V5IG9mIHF1ZXJ5LmtleXMoKSkge1xuICAgIGlmIChrZXkubWF0Y2goJ2ZpbHRlcnMuJykpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyB1c2VSb3V0ZU1hdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCB7IEJveCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgUm91dGVDb21wb25lbnRQcm9wcyB9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBCYXNlQWN0aW9uIGZyb20gJy4uL2FwcC9iYXNlLWFjdGlvbi1jb21wb25lbnQnXG5pbXBvcnQgRmlsdGVyRHJhd2VyIGZyb20gJy4uL2FwcC9maWx0ZXItZHJhd2VyJ1xuaW1wb3J0IHF1ZXJ5SGFzRmlsdGVyIGZyb20gJy4vdXRpbHMvcXVlcnktaGFzLWZpbHRlcidcbmltcG9ydCB7IFJlZHV4U3RhdGUgfSBmcm9tICcuLi8uLi9zdG9yZS9zdG9yZSdcbmltcG9ydCB7IE5vUmVzb3VyY2VFcnJvciwgTm9BY3Rpb25FcnJvciB9IGZyb20gJy4uL2FwcC9lcnJvci1tZXNzYWdlJ1xuaW1wb3J0IFZpZXdIZWxwZXJzLCB7XG4gIFJlc291cmNlQWN0aW9uUGFyYW1zLCBSZWNvcmRBY3Rpb25QYXJhbXMsIEJ1bGtBY3Rpb25QYXJhbXMsXG59IGZyb20gJy4uLy4uLy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcbmltcG9ydCB7IEFjdGlvbkhlYWRlciB9IGZyb20gJy4uL2FwcCdcbmltcG9ydCB7IEFjdGlvbkpTT04sIFJlc291cmNlSlNPTiB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnXG5cbnR5cGUgUHJvcHNGcm9tU3RhdGUgPSB7XG4gIHJlc291cmNlczogQXJyYXk8UmVzb3VyY2VKU09OPjtcbn1cblxudHlwZSBQcm9wcyA9IFByb3BzRnJvbVN0YXRlICYgUm91dGVDb21wb25lbnRQcm9wczxTdHJpbmdpZmllZEJ1bGs8UmVzb3VyY2VBY3Rpb25QYXJhbXM+PlxuXG50eXBlIFN0cmluZ2lmaWVkQnVsazxUPiA9IE9taXQ8VCwgJ3JlY29yZHNJZCc+ICYge1xuICByZWNvcmRzSWRzPzogc3RyaW5nO1xufVxuXG5jb25zdCBnZXRBY3Rpb24gPSAocmVzb3VyY2U6IFJlc291cmNlSlNPTik6IEFjdGlvbkpTT04gfCB1bmRlZmluZWQgPT4ge1xuICBjb25zdCBoID0gbmV3IFZpZXdIZWxwZXJzKClcblxuICBjb25zdCByZXNvdXJjZUlkID0gJzpyZXNvdXJjZUlkJ1xuICBjb25zdCBhY3Rpb25OYW1lID0gJzphY3Rpb25OYW1lJ1xuICBjb25zdCByZWNvcmRJZCA9ICc6cmVjb3JkSWQnXG5cbiAgY29uc3QgcmVjb3JkQWN0aW9uVXJsID0gaC5yZWNvcmRBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZSB9KVxuICBjb25zdCByZXNvdXJjZUFjdGlvblVybCA9IGgucmVzb3VyY2VBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lIH0pXG4gIGNvbnN0IGJ1bGtBY3Rpb25VcmwgPSBoLmJ1bGtBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lIH0pXG5cbiAgY29uc3QgcmVzb3VyY2VBY3Rpb25NYXRjaCA9IHVzZVJvdXRlTWF0Y2g8UmVzb3VyY2VBY3Rpb25QYXJhbXM+KHJlc291cmNlQWN0aW9uVXJsKVxuICBjb25zdCByZWNvcmRBY3Rpb25NYXRjaCA9IHVzZVJvdXRlTWF0Y2g8UmVjb3JkQWN0aW9uUGFyYW1zPihyZWNvcmRBY3Rpb25VcmwpXG4gIGNvbnN0IGJ1bGtBY3Rpb25NYXRjaCA9IHVzZVJvdXRlTWF0Y2g8UGljazxCdWxrQWN0aW9uUGFyYW1zLCAnYWN0aW9uTmFtZScgfCAncmVzb3VyY2VJZCc+PihidWxrQWN0aW9uVXJsKVxuXG4gIGNvbnN0IGFjdGlvbiA9IHJlc291cmNlQWN0aW9uTWF0Y2g/LnBhcmFtcy5hY3Rpb25OYW1lXG4gICAgfHwgcmVjb3JkQWN0aW9uTWF0Y2g/LnBhcmFtcy5hY3Rpb25OYW1lXG4gICAgfHwgYnVsa0FjdGlvbk1hdGNoPy5wYXJhbXMuYWN0aW9uTmFtZVxuXG4gIHJldHVybiBhY3Rpb24gPyByZXNvdXJjZS5hY3Rpb25zLmZpbmQoYSA9PiBhLm5hbWUgPT09IGFjdGlvbikgOiB1bmRlZmluZWRcbn1cblxuY29uc3QgUmVzb3VyY2VBY3Rpb246IFJlYWN0LkZDPFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHJlc291cmNlcywgbWF0Y2gsIGxvY2F0aW9uIH0gPSBwcm9wc1xuICBjb25zdCB7IHJlc291cmNlSWQgfSA9IG1hdGNoLnBhcmFtc1xuXG4gIGNvbnN0IFtmaWx0ZXJWaXNpYmxlLCBzZXRGaWxlclZpc2libGVdID0gdXNlU3RhdGUocXVlcnlIYXNGaWx0ZXIobG9jYXRpb24uc2VhcmNoKSlcbiAgY29uc3QgW3RhZywgc2V0VGFnXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IHJlc291cmNlID0gcmVzb3VyY2VzLmZpbmQociA9PiByLmlkID09PSByZXNvdXJjZUlkKVxuICBpZiAoIXJlc291cmNlKSB7XG4gICAgcmV0dXJuICg8Tm9SZXNvdXJjZUVycm9yIHJlc291cmNlSWQ9e3Jlc291cmNlSWR9IC8+KVxuICB9XG5cbiAgY29uc3QgcmVhbEVuZEFjdGlvbiA9IGdldEFjdGlvbihyZXNvdXJjZSlcbiAgaWYgKHJlYWxFbmRBY3Rpb24gJiYgIXJlYWxFbmRBY3Rpb24uc2hvd0luRHJhd2VyKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGNvbnN0IGxpc3RBY3Rpb25OYW1lID0gJ2xpc3QnXG4gIGNvbnN0IGxpc3RBY3Rpb24gPSByZXNvdXJjZS5yZXNvdXJjZUFjdGlvbnMuZmluZChyID0+IHIubmFtZSA9PT0gbGlzdEFjdGlvbk5hbWUpXG5cbiAgaWYgKCFsaXN0QWN0aW9uKSB7XG4gICAgcmV0dXJuICg8Tm9BY3Rpb25FcnJvciByZXNvdXJjZUlkPXtyZXNvdXJjZUlkfSBhY3Rpb25OYW1lPXtsaXN0QWN0aW9uTmFtZX0gLz4pXG4gIH1cblxuICBjb25zdCB0b2dnbGVGaWx0ZXIgPSBsaXN0QWN0aW9uLnNob3dGaWx0ZXJcbiAgICA/ICgoKTogdm9pZCA9PiBzZXRGaWxlclZpc2libGUoIWZpbHRlclZpc2libGUpKVxuICAgIDogdW5kZWZpbmVkXG5cbiAgcmV0dXJuIChcbiAgICA8Qm94IHZhcmlhbnQ9XCJncmV5XCIgd2lkdGg9e2xpc3RBY3Rpb24uY29udGFpbmVyV2lkdGh9IG14PVwiYXV0b1wiPlxuICAgICAgPEFjdGlvbkhlYWRlclxuICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgIGFjdGlvbj17bGlzdEFjdGlvbn1cbiAgICAgICAgdGFnPXt0YWd9XG4gICAgICAgIHRvZ2dsZUZpbHRlcj17dG9nZ2xlRmlsdGVyfVxuICAgICAgLz5cbiAgICAgIDxCYXNlQWN0aW9uIGFjdGlvbj17bGlzdEFjdGlvbn0gcmVzb3VyY2U9e3Jlc291cmNlfSBzZXRUYWc9e3NldFRhZ30gLz5cbiAgICAgIHtsaXN0QWN0aW9uLnNob3dGaWx0ZXIgPyAoXG4gICAgICAgIDxGaWx0ZXJEcmF3ZXJcbiAgICAgICAgICByZXNvdXJjZT17cmVzb3VyY2V9XG4gICAgICAgICAgaXNWaXNpYmxlPXtmaWx0ZXJWaXNpYmxlfVxuICAgICAgICAgIHRvZ2dsZUZpbHRlcj17KCk6IHZvaWQgPT4geyBzZXRGaWxlclZpc2libGUoIWZpbHRlclZpc2libGUpIH19XG4gICAgICAgIC8+XG4gICAgICApIDogJyd9XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBSZWR1eFN0YXRlKTogUHJvcHNGcm9tU3RhdGUgPT4gKHtcbiAgcmVzb3VyY2VzOiBzdGF0ZS5yZXNvdXJjZXMsXG59KVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUmVzb3VyY2VBY3Rpb24pXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1jaGlsZHJlbi1wcm9wICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgU3dpdGNoLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgQm94LCBPdmVybGF5LCBSZXNldCB9IGZyb20gJ0BhZG1pbi1icm8vZGVzaWduLXN5c3RlbSdcblxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgVmlld0hlbHBlcnMgZnJvbSAnLi4vLi4vYmFja2VuZC91dGlscy92aWV3LWhlbHBlcnMvdmlldy1oZWxwZXJzJ1xuaW1wb3J0IFNpZGViYXIgZnJvbSAnLi9hcHAvc2lkZWJhci9zaWRlYmFyJ1xuaW1wb3J0IFRvcEJhciBmcm9tICcuL2FwcC90b3AtYmFyJ1xuaW1wb3J0IE5vdGljZSBmcm9tICcuL2FwcC9ub3RpY2UnXG5cbmltcG9ydCB7XG4gIERhc2hib2FyZCwgUmVzb3VyY2VBY3Rpb24sIFJlY29yZEFjdGlvbiwgUGFnZSwgQnVsa0FjdGlvbiwgUmVzb3VyY2UsXG59IGZyb20gJy4vcm91dGVzJ1xuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBodG1sLCBib2R5LCAjYXBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSk6IHN0cmluZyA9PiB0aGVtZS5jb2xvcnMuZ3JleTEwMH1cbiAgfVxuYFxuXG5jb25zdCBoID0gbmV3IFZpZXdIZWxwZXJzKClcblxuY29uc3QgQXBwOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3NpZGViYXJWaXNpYmxlLCB0b2dnbGVTaWRlYmFyXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzaWRlYmFyVmlzaWJsZSkgeyB0b2dnbGVTaWRlYmFyKGZhbHNlKSB9XG4gIH0sIFtsb2NhdGlvbl0pXG5cbiAgY29uc3QgcmVzb3VyY2VJZCA9ICc6cmVzb3VyY2VJZCdcbiAgY29uc3QgYWN0aW9uTmFtZSA9ICc6YWN0aW9uTmFtZSdcbiAgY29uc3QgcmVjb3JkSWQgPSAnOnJlY29yZElkJ1xuICBjb25zdCBwYWdlTmFtZSA9ICc6cGFnZU5hbWUnXG5cbiAgY29uc3QgcmVjb3JkQWN0aW9uVXJsID0gaC5yZWNvcmRBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCByZWNvcmRJZCwgYWN0aW9uTmFtZSB9KVxuICBjb25zdCByZXNvdXJjZUFjdGlvblVybCA9IGgucmVzb3VyY2VBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lIH0pXG4gIGNvbnN0IGJ1bGtBY3Rpb25VcmwgPSBoLmJ1bGtBY3Rpb25VcmwoeyByZXNvdXJjZUlkLCBhY3Rpb25OYW1lIH0pXG4gIGNvbnN0IHJlc291cmNlVXJsID0gaC5yZXNvdXJjZVVybCh7IHJlc291cmNlSWQgfSlcbiAgY29uc3QgcGFnZVVybCA9IGgucGFnZVVybChwYWdlTmFtZSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxSZXNldCAvPlxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgICA8Qm94IGhlaWdodD1cIjEwMCVcIiBmbGV4PlxuICAgICAgICB7c2lkZWJhclZpc2libGUgPyAoXG4gICAgICAgICAgPE92ZXJsYXlcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpOiB2b2lkID0+IHRvZ2dsZVNpZGViYXIoIXNpZGViYXJWaXNpYmxlKX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPFNpZGViYXIgaXNWaXNpYmxlPXtzaWRlYmFyVmlzaWJsZX0gLz5cbiAgICAgICAgPEJveCBmbGV4IGZsZXhHcm93PXsxfSBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIgb3ZlcmZsb3dZPVwiYXV0b1wiIGJnPVwiYmdcIj5cbiAgICAgICAgICA8VG9wQmFyIHRvZ2dsZVNpZGViYXI9eygpOiB2b2lkID0+IHRvZ2dsZVNpZGViYXIoIXNpZGViYXJWaXNpYmxlKX0gLz5cbiAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiB0b3A9ezB9IHpJbmRleD1cIjIwMDBcIj5cbiAgICAgICAgICAgIDxOb3RpY2UgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9e2guZGFzaGJvYXJkVXJsKCl9IGV4YWN0IGNvbXBvbmVudD17RGFzaGJvYXJkfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9e3Jlc291cmNlVXJsfSBjb21wb25lbnQ9e1Jlc291cmNlfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9e3BhZ2VVcmx9IGV4YWN0IGNvbXBvbmVudD17UGFnZX0gLz5cbiAgICAgICAgICA8L1N3aXRjaD5cbiAgICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9e3JlY29yZEFjdGlvblVybH0gY29tcG9uZW50PXtSZWNvcmRBY3Rpb259IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD17cmVzb3VyY2VBY3Rpb25Vcmx9IGNvbXBvbmVudD17UmVzb3VyY2VBY3Rpb259IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD17YnVsa0FjdGlvblVybH0gY29tcG9uZW50PXtCdWxrQWN0aW9ufSAvPlxuICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiIsImltcG9ydCB7IEFzc2V0cyB9IGZyb20gJy4uLy4uLy4uL2FkbWluLWJyby1vcHRpb25zLmludGVyZmFjZSdcblxuZXhwb3J0IGNvbnN0IEFTU0VUU19JTklUSUFMSVpFID0gJ0FTU0VUU19JTklUSUFMSVpFJ1xuXG5leHBvcnQgdHlwZSBpbml0aWFsaXplQXNzZXRzUmVzcG9uc2UgPSB7XG4gIHR5cGU6IHN0cmluZztcbiAgZGF0YTogQXNzZXRzO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZUFzc2V0cyA9IChkYXRhOiBBc3NldHMpOiBpbml0aWFsaXplQXNzZXRzUmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogQVNTRVRTX0lOSVRJQUxJWkUsXG4gIGRhdGEsXG59KVxuIiwiaW1wb3J0IHsgQnJhbmRpbmdPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vYWRtaW4tYnJvLW9wdGlvbnMuaW50ZXJmYWNlJ1xuXG5leHBvcnQgY29uc3QgQlJBTkRJTkdfSU5JVElBTElaRSA9ICdCUkFORElOR19JTklUSUFMSVpFJ1xuXG5leHBvcnQgdHlwZSBJbml0aWFsaXplQnJhbmRpbmdSZXNwb25zZSA9IHtcbiAgdHlwZTogdHlwZW9mIEJSQU5ESU5HX0lOSVRJQUxJWkU7XG4gIGRhdGE6IEJyYW5kaW5nT3B0aW9ucztcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVCcmFuZGluZyA9IChkYXRhOiBCcmFuZGluZ09wdGlvbnMpOiBJbml0aWFsaXplQnJhbmRpbmdSZXNwb25zZSA9PiAoe1xuICB0eXBlOiBCUkFORElOR19JTklUSUFMSVpFLFxuICBkYXRhLFxufSlcbiIsImltcG9ydCB7IERhc2hib2FyZEluU3RhdGUgfSBmcm9tICcuLi9zdG9yZSdcblxuZXhwb3J0IGNvbnN0IERBU0hCT0FSRF9JTklUSUFMSVpFID0gJ0RBU0hCT0FSRF9JTklUSUFMSVpFJ1xuXG5leHBvcnQgdHlwZSBJbml0aWFsaXplRGFzaGJvYXJkUmVzcG9uc2UgPSB7XG4gIHR5cGU6IHR5cGVvZiBEQVNIQk9BUkRfSU5JVElBTElaRTtcbiAgZGF0YTogRGFzaGJvYXJkSW5TdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVEYXNoYm9hcmQgPSAoZGF0YTogRGFzaGJvYXJkSW5TdGF0ZSk6IEluaXRpYWxpemVEYXNoYm9hcmRSZXNwb25zZSA9PiAoe1xuICB0eXBlOiBEQVNIQk9BUkRfSU5JVElBTElaRSxcbiAgZGF0YSxcbn0pXG4iLCJpbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi8uLi8uLi9sb2NhbGUvY29uZmlnJ1xuXG5leHBvcnQgY29uc3QgTE9DQUxFX0lOSVRJQUxJWkUgPSAnTE9DQUxFX0lOSVRJQUxJWkUnXG5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVMb2NhbGVSZXNwb25zZSA9IHtcbiAgdHlwZTogdHlwZW9mIExPQ0FMRV9JTklUSUFMSVpFO1xuICBkYXRhOiBMb2NhbGU7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplTG9jYWxlID0gKGRhdGE6IExvY2FsZSk6IEluaXRpYWxpemVMb2NhbGVSZXNwb25zZSA9PiAoe1xuICB0eXBlOiBMT0NBTEVfSU5JVElBTElaRSxcbiAgZGF0YSxcbn0pXG4iLCJpbXBvcnQgeyBBZG1pblBhZ2UgfSBmcm9tICcuLi8uLi8uLi9hZG1pbi1icm8tb3B0aW9ucy5pbnRlcmZhY2UnXG5cbmV4cG9ydCBjb25zdCBQQUdFU19JTklUSUFMSVpFID0gJ1BBR0VTX0lOSVRJQUxJWkUnXG5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVQYWdlc1Jlc3BvbnNlID0ge1xuICB0eXBlOiB0eXBlb2YgUEFHRVNfSU5JVElBTElaRTtcbiAgZGF0YTogQXJyYXk8QWRtaW5QYWdlPjtcbn1cblxuZXhwb3J0IGNvbnN0IGluaXRpYWxpemVQYWdlcyA9IChkYXRhOiBBcnJheTxBZG1pblBhZ2U+KTogSW5pdGlhbGl6ZVBhZ2VzUmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogUEFHRVNfSU5JVElBTElaRSxcbiAgZGF0YSxcbn0pXG4iLCJpbXBvcnQgeyBQYXRocyB9IGZyb20gJy4uL3N0b3JlJ1xuXG5leHBvcnQgY29uc3QgUEFUSFNfSU5JVElBTElaRSA9ICdQQVRIU19JTklUSUFMSVpFJ1xuXG5leHBvcnQgdHlwZSBJbml0aWFsaXplUGF0aHNSZXNwb25zZSA9IHtcbiAgdHlwZTogdHlwZW9mIFBBVEhTX0lOSVRJQUxJWkU7XG4gIGRhdGE6IFBhdGhzO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVBhdGhzID0gKGRhdGE6IFBhdGhzKTogSW5pdGlhbGl6ZVBhdGhzUmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogUEFUSFNfSU5JVElBTElaRSxcbiAgZGF0YSxcbn0pXG4iLCJpbXBvcnQgeyBSZXNvdXJjZUpTT04gfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJ1xuXG5leHBvcnQgY29uc3QgUkVTT1VSQ0VTX0lOSVRJQUxJWkUgPSAnUkVTT1VSQ0VTX0lOSVRJQUxJWkUnXG5cbmV4cG9ydCB0eXBlIEluaXRpYWxpemVSZXNvdXJjZXNSZXNwb25zZSA9IHtcbiAgdHlwZTogdHlwZW9mIFJFU09VUkNFU19JTklUSUFMSVpFO1xuICBkYXRhOiBBcnJheTxSZXNvdXJjZUpTT04+O1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVJlc291cmNlcyA9IChkYXRhOiBBcnJheTxSZXNvdXJjZUpTT04+KTogSW5pdGlhbGl6ZVJlc291cmNlc1Jlc3BvbnNlID0+ICh7XG4gIHR5cGU6IFJFU09VUkNFU19JTklUSUFMSVpFLFxuICBkYXRhLFxufSlcbiIsImltcG9ydCB7IFZlcnNpb25Qcm9wcyB9IGZyb20gJy4uLy4uLy4uL2FkbWluLWJyby1vcHRpb25zLmludGVyZmFjZSdcblxuZXhwb3J0IGNvbnN0IFZFUlNJT05TX0lOSVRJQUxJWkUgPSAnVkVSU0lPTlNfSU5JVElBTElaRSdcblxuZXhwb3J0IHR5cGUgSW5pdGlhbGl6ZVZlcnNpb25zUmVzcG9uc2UgPSB7XG4gIHR5cGU6IHR5cGVvZiBWRVJTSU9OU19JTklUSUFMSVpFO1xuICBkYXRhOiBWZXJzaW9uUHJvcHM7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsaXplVmVyc2lvbnMgPSAoZGF0YTogVmVyc2lvblByb3BzKTogSW5pdGlhbGl6ZVZlcnNpb25zUmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogVkVSU0lPTlNfSU5JVElBTElaRSxcbiAgZGF0YSxcbn0pXG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtZnVuY3Rpb24tcmV0dXJuLXR5cGUgKi9cbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycywgY3JlYXRlU3RvcmUgfSBmcm9tICdyZWR1eCdcbmltcG9ydCB7XG4gIFZFUlNJT05TX0lOSVRJQUxJWkUsXG4gIFNFU1NJT05fSU5JVElBTElaRSxcbiAgREFTSEJPQVJEX0lOSVRJQUxJWkUsXG4gIFBBVEhTX0lOSVRJQUxJWkUsXG4gIEFTU0VUU19JTklUSUFMSVpFLFxuICBCUkFORElOR19JTklUSUFMSVpFLFxuICBMT0NBTEVfSU5JVElBTElaRSxcbiAgUEFHRVNfSU5JVElBTElaRSxcbiAgUkVTT1VSQ0VTX0lOSVRJQUxJWkUsXG4gIFNFVF9OT1RJQ0VfUFJPR1JFU1MsXG4gIERST1BfTk9USUNFLFxuICBBRERfTk9USUNFIH0gZnJvbSAnLi9hY3Rpb25zJ1xuXG5pbXBvcnQgeyBBc3NldHMsIEJyYW5kaW5nT3B0aW9ucywgVmVyc2lvblByb3BzIH0gZnJvbSAnLi4vLi4vYWRtaW4tYnJvLW9wdGlvbnMuaW50ZXJmYWNlJ1xuaW1wb3J0IHsgUGFnZUpTT04sIFJlc291cmNlSlNPTiB9IGZyb20gJy4uL2ludGVyZmFjZXMnXG5pbXBvcnQgeyBERUZBVUxUX1BBVEhTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgQ3VycmVudEFkbWluIH0gZnJvbSAnLi4vLi4vY3VycmVudC1hZG1pbi5pbnRlcmZhY2UnXG5pbXBvcnQgeyBMb2NhbGUgfSBmcm9tICcuLi8uLi9sb2NhbGUvY29uZmlnJ1xuaW1wb3J0IHsgTm90aWNlTWVzc2FnZSB9IGZyb20gJy4uL2hvYy93aXRoLW5vdGljZSdcblxuZXhwb3J0IHR5cGUgRGFzaGJvYXJkSW5TdGF0ZSA9IHtcbiAgY29tcG9uZW50Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBOb3RpY2VNZXNzYWdlSW5TdGF0ZSA9IE5vdGljZU1lc3NhZ2UgJiB7XG4gIG1lc3NhZ2U6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogTm90aWNlTWVzc2FnZVsndHlwZSddO1xuICBwcm9ncmVzczogbnVtYmVyO1xufVxuXG5leHBvcnQgdHlwZSBQYXRocyA9IHtcbiAgcm9vdFBhdGg6IHN0cmluZztcbiAgbG9nb3V0UGF0aDogc3RyaW5nO1xuICBsb2dpblBhdGg6IHN0cmluZztcbiAgYXNzZXRzQ0ROPzogc3RyaW5nO1xufVxuXG5jb25zdCByZXNvdXJjZXNSZWR1Y2VyID0gKFxuICBzdGF0ZTogQXJyYXk8UmVzb3VyY2VKU09OPiA9IFtdLFxuICBhY3Rpb246IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgZGF0YTogQXJyYXk8UmVzb3VyY2VKU09OPjtcbiAgfSxcbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gIGNhc2UgUkVTT1VSQ0VTX0lOSVRJQUxJWkU6XG4gICAgcmV0dXJuIGFjdGlvbi5kYXRhXG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IHBhZ2VzUmVkdWNlciA9IChcbiAgc3RhdGU6IEFycmF5PFBhZ2VKU09OPiA9IFtdLFxuICBhY3Rpb246IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgZGF0YTogQXJyYXk8UGFnZUpTT04+O1xuICB9LFxuKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSBQQUdFU19JTklUSUFMSVpFOlxuICAgIHJldHVybiBhY3Rpb24uZGF0YVxuICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBsb2NhbGVzUmVkdWNlciA9IChcbiAgc3RhdGU6IExvY2FsZSA9IHsgbGFuZ3VhZ2U6ICdlbicsIHRyYW5zbGF0aW9uczoge30gfSBhcyBMb2NhbGUsXG4gIGFjdGlvbjoge1xuICAgIHR5cGU6IHN0cmluZztcbiAgICBkYXRhOiBMb2NhbGU7XG4gIH0sXG4pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICBjYXNlIExPQ0FMRV9JTklUSUFMSVpFOlxuICAgIHJldHVybiBhY3Rpb24uZGF0YVxuICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBicmFuZGluZ1JlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uOiB7XG4gIHR5cGU6IHN0cmluZztcbiAgZGF0YTogQnJhbmRpbmdPcHRpb25zO1xufSkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gIGNhc2UgQlJBTkRJTkdfSU5JVElBTElaRTpcbiAgICByZXR1cm4gYWN0aW9uLmRhdGFcbiAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgYXNzZXRzUmVkdWNlciA9IChzdGF0ZSA9IHt9LCBhY3Rpb246IHtcbiAgdHlwZTogc3RyaW5nO1xuICBkYXRhOiBBc3NldHM7XG59KSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSBBU1NFVFNfSU5JVElBTElaRTpcbiAgICByZXR1cm4gYWN0aW9uLmRhdGFcbiAgZGVmYXVsdDogcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuY29uc3QgcGF0aHNSZWR1Y2VyID0gKFxuICBzdGF0ZTogUGF0aHMgPSBERUZBVUxUX1BBVEhTLFxuICBhY3Rpb246IHt0eXBlOiBzdHJpbmc7IGRhdGE6IFBhdGhzfSxcbik6IFBhdGhzID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICBjYXNlIFBBVEhTX0lOSVRJQUxJWkU6XG4gICAgcmV0dXJuIGFjdGlvbi5kYXRhXG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmNvbnN0IGRhc2hib2FyZFJlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uOiB7XG4gIHR5cGU6IHN0cmluZztcbiAgZGF0YTogRGFzaGJvYXJkSW5TdGF0ZTtcbn0pOiBEYXNoYm9hcmRJblN0YXRlID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICBjYXNlIERBU0hCT0FSRF9JTklUSUFMSVpFOlxuICAgIHJldHVybiBhY3Rpb24uZGF0YVxuICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCBzZXNzaW9uUmVkdWNlciA9IChcbiAgc3RhdGU6IEN1cnJlbnRBZG1pbiB8IG51bGwgPSBudWxsLFxuICBhY3Rpb246IHtcbiAgICB0eXBlOiBzdHJpbmc7XG4gICAgZGF0YTogQ3VycmVudEFkbWluIHwgbnVsbDtcbiAgfSxcbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gIGNhc2UgU0VTU0lPTl9JTklUSUFMSVpFOlxuICAgIHJldHVybiBhY3Rpb24uZGF0YVxuICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCB2ZXJzaW9uc1JlZHVjZXIgPSAoc3RhdGUgPSB7fSwgYWN0aW9uOiB7XG4gIHR5cGU6IHN0cmluZztcbiAgZGF0YTogVmVyc2lvblByb3BzO1xufSkgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gIGNhc2UgVkVSU0lPTlNfSU5JVElBTElaRTpcbiAgICByZXR1cm4ge1xuICAgICAgYWRtaW46IGFjdGlvbi5kYXRhLmFkbWluLFxuICAgICAgYXBwOiBhY3Rpb24uZGF0YS5hcHAsXG4gICAgfVxuICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG50eXBlIE5vdGljZUFyZ3MgPSB7IG5vdGljZUlkOiBzdHJpbmc7IHByb2dyZXNzOiBudW1iZXIgfVxuXG5jb25zdCBub3RpY2VzUmVkdWNlciA9IChzdGF0ZTogQXJyYXk8Tm90aWNlTWVzc2FnZUluU3RhdGU+ID0gW10sIGFjdGlvbjoge1xuICB0eXBlOiBzdHJpbmc7XG4gIGRhdGE6IE5vdGljZU1lc3NhZ2VJblN0YXRlIHwgTm90aWNlQXJncztcbn0pOiBBcnJheTxOb3RpY2VNZXNzYWdlSW5TdGF0ZT4gPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gIGNhc2UgQUREX05PVElDRToge1xuICAgIGNvbnN0IG5vdGljZXMgPSBbYWN0aW9uLmRhdGEgYXMgTm90aWNlTWVzc2FnZUluU3RhdGVdXG4gICAgcmV0dXJuIG5vdGljZXNcbiAgfVxuICBjYXNlIERST1BfTk9USUNFOiB7XG4gICAgcmV0dXJuIHN0YXRlLmZpbHRlcihub3RpY2UgPT4gbm90aWNlLmlkICE9PSAoYWN0aW9uLmRhdGEgYXMgTm90aWNlQXJncykubm90aWNlSWQpXG4gIH1cbiAgY2FzZSBTRVRfTk9USUNFX1BST0dSRVNTOiB7XG4gICAgcmV0dXJuIHN0YXRlLm1hcChub3RpY2UgPT4gKHtcbiAgICAgIC4uLm5vdGljZSxcbiAgICAgIHByb2dyZXNzOiBub3RpY2UuaWQgPT09IChhY3Rpb24uZGF0YSBhcyBOb3RpY2VBcmdzKS5ub3RpY2VJZFxuICAgICAgICA/IGFjdGlvbi5kYXRhLnByb2dyZXNzXG4gICAgICAgIDogbm90aWNlLnByb2dyZXNzLFxuICAgIH0pKVxuICB9XG4gIGRlZmF1bHQ6IHJldHVybiBzdGF0ZVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIFJlZHV4U3RhdGUgPSB7XG4gIHJlc291cmNlczogQXJyYXk8UmVzb3VyY2VKU09OPjtcbiAgYnJhbmRpbmc6IEJyYW5kaW5nT3B0aW9ucztcbiAgYXNzZXRzOiBBc3NldHM7XG4gIHBhdGhzOiBQYXRocztcbiAgc2Vzc2lvbjogQ3VycmVudEFkbWluIHwgbnVsbDtcbiAgZGFzaGJvYXJkOiBEYXNoYm9hcmRJblN0YXRlO1xuICBub3RpY2VzOiBBcnJheTxOb3RpY2VNZXNzYWdlSW5TdGF0ZT47XG4gIHZlcnNpb25zOiBWZXJzaW9uUHJvcHM7XG4gIHBhZ2VzOiBBcnJheTxQYWdlSlNPTj47XG4gIGxvY2FsZTogTG9jYWxlO1xufVxuXG5jb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzPFJlZHV4U3RhdGU+KHtcbiAgcmVzb3VyY2VzOiByZXNvdXJjZXNSZWR1Y2VyLFxuICBicmFuZGluZzogYnJhbmRpbmdSZWR1Y2VyLFxuICBhc3NldHM6IGFzc2V0c1JlZHVjZXIsXG4gIHBhdGhzOiBwYXRoc1JlZHVjZXIsXG4gIHNlc3Npb246IHNlc3Npb25SZWR1Y2VyLFxuICBkYXNoYm9hcmQ6IGRhc2hib2FyZFJlZHVjZXIsXG4gIG5vdGljZXM6IG5vdGljZXNSZWR1Y2VyLFxuICB2ZXJzaW9uczogdmVyc2lvbnNSZWR1Y2VyLFxuICBwYWdlczogcGFnZXNSZWR1Y2VyLFxuICBsb2NhbGU6IGxvY2FsZXNSZWR1Y2VyLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgKGluaXRpYWxTdGF0ZSA9IHt9KSA9PiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBpbml0UmVhY3RJMThuZXh0IH0gZnJvbSAncmVhY3QtaTE4bmV4dCdcbmltcG9ydCBpMThuIGZyb20gJ2kxOG5leHQnXG5cbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL2FwcGxpY2F0aW9uJ1xuaW1wb3J0IEJhc2VQcm9wZXJ0eUNvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMvcHJvcGVydHktdHlwZSdcbmltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuL3N0b3JlL3N0b3JlJ1xuaW1wb3J0IFZpZXdIZWxwZXJzIGZyb20gJy4uL2JhY2tlbmQvdXRpbHMvdmlldy1oZWxwZXJzL3ZpZXctaGVscGVycydcbmltcG9ydCAqIGFzIEFwcENvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzL2FwcCdcbmltcG9ydCAqIGFzIEhvb2tzIGZyb20gJy4vaG9va3MnXG5pbXBvcnQgQXBpQ2xpZW50IGZyb20gJy4vdXRpbHMvYXBpLWNsaWVudCdcbmltcG9ydCB3aXRoTm90aWNlIGZyb20gJy4vaG9jL3dpdGgtbm90aWNlJ1xuaW1wb3J0IHsgZmxhdCB9IGZyb20gJy4uL3V0aWxzL2ZsYXQnXG5cbmNvbnN0IGVudiA9IHtcbiAgTk9ERV9FTlY6IHByb2Nlc3MuZW52Lk5PREVfRU5WIHx8ICdkZXZlbG9wbWVudCcsXG59XG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUod2luZG93LlJFRFVYX1NUQVRFKVxuY29uc3QgdGhlbWUgPSB3aW5kb3cuVEhFTUVcbmNvbnN0IHsgbG9jYWxlIH0gPSB3aW5kb3cuUkVEVVhfU1RBVEVcblxuaTE4blxuICAudXNlKGluaXRSZWFjdEkxOG5leHQpXG4gIC5pbml0KHtcbiAgICByZXNvdXJjZXM6IHtcbiAgICAgIFtsb2NhbGUubGFuZ3VhZ2VdOiB7XG4gICAgICAgIHRyYW5zbGF0aW9uOiBsb2NhbGUudHJhbnNsYXRpb25zLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxuZzogbG9jYWxlLmxhbmd1YWdlLFxuICAgIGludGVycG9sYXRpb246IHsgZXNjYXBlVmFsdWU6IGZhbHNlIH0sXG4gIH0pXG5cbmNvbnN0IEFwcGxpY2F0aW9uID0gKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPEJyb3dzZXJSb3V0ZXI+XG4gICAgICAgIDxBcHAgLz5cbiAgICAgIDwvQnJvd3NlclJvdXRlcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gIDwvUHJvdmlkZXI+XG4pXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxud2luZG93LnJlZ2VuZXJhdG9yUnVudGltZSA9IHJlZ2VuZXJhdG9yUnVudGltZVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHdpdGhOb3RpY2UsXG4gIEFwcGxpY2F0aW9uLFxuICBWaWV3SGVscGVycyxcbiAgVXNlckNvbXBvbmVudHM6IHt9LFxuICBBcGlDbGllbnQsXG4gIEJhc2VQcm9wZXJ0eUNvbXBvbmVudCxcbiAgZW52LFxuICAuLi5BcHBDb21wb25lbnRzLFxuICAuLi5Ib29rcyxcbiAgZmxhdCxcbiAgLy8gVE9ETzogcmVtb3ZlIHRoaXMgZnJvbSB0aGUgbmV4dCByZWxlYXNlXG4gIGZsYXR0ZW46IGZsYXQuZmxhdHRlbixcbiAgdW5mbGF0dGVuOiBmbGF0LnVuZmxhdHRlbixcbn1cbiJdLCJuYW1lcyI6WyJ1bmRlZmluZWQiLCJyZXF1aXJlJCQwIiwiZ2xvYmFsQW55Iiwid2luZG93IiwiZXJyb3IiLCJtZXNzYWdlIiwicnVuRGF0ZSIsIkRhdGUiLCJWaWV3SGVscGVycyIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsIm9wdHMiLCJnZXRQYXRocyIsInJvb3RQYXRoIiwiUkVEVVhfU1RBVEUiLCJwYXRocyIsInVybEJ1aWxkZXIiLCJzZWFyY2giLCJzZXBhcmF0b3IiLCJyZXBsYWNlIiwiUmVnRXhwIiwic3RhcnRzV2l0aCIsInBhcnRzIiwiam9pbiIsImxvZ2luVXJsIiwibG9naW5QYXRoIiwibG9nb3V0VXJsIiwibG9nb3V0UGF0aCIsImRhc2hib2FyZFVybCIsInBhZ2VVcmwiLCJwYWdlTmFtZSIsImVkaXRVcmwiLCJyZXNvdXJjZUlkIiwicmVjb3JkSWQiLCJyZWNvcmRBY3Rpb25VcmwiLCJhY3Rpb25OYW1lIiwic2hvd1VybCIsImRlbGV0ZVVybCIsIm5ld1VybCIsInJlc291cmNlQWN0aW9uVXJsIiwibGlzdFVybCIsImJ1bGtEZWxldGVVcmwiLCJyZWNvcmRJZHMiLCJidWxrQWN0aW9uVXJsIiwicmVzb3VyY2VVcmwiLCJ1cmwiLCJsZW5ndGgiLCJxdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsInNldCIsInRvU3RyaW5nIiwiYXNzZXRQYXRoIiwiYXNzZXQiLCJhc3NldHNDRE4iLCJVUkwiLCJocmVmIiwiZ2V0VGltZSIsImFsbG93T3ZlcnJpZGUiLCJPcmlnaW5hbENvbXBvbmVudCIsIm5hbWUiLCJXcmFwcGVyQ29tcG9uZW50IiwicHJvcHMiLCJDb21wb25lbnQiLCJBZG1pbkJybyIsIlVzZXJDb21wb25lbnRzIiwiUmVhY3QiLCJTdHlsZWRMb2dvIiwic3R5bGVkIiwiTGluayIsInRoZW1lR2V0IiwiaCIsIlNpZGViYXJCcmFuZGluZyIsImJyYW5kaW5nIiwibG9nbyIsImNvbXBhbnlOYW1lIiwiY3NzQ2xhc3MiLCJiYXNlUHJvcGVydHlPZiIsImdsb2JhbCIsImZyZWVHbG9iYWwiLCJTeW1ib2wiLCJyb290Iiwib2JqZWN0UHJvdG8iLCJuYXRpdmVPYmplY3RUb1N0cmluZyIsInN5bVRvU3RyaW5nVGFnIiwiZ2V0UmF3VGFnIiwib2JqZWN0VG9TdHJpbmciLCJpc09iamVjdExpa2UiLCJiYXNlR2V0VGFnIiwiaXNBcnJheSIsImFycmF5TWFwIiwiaXNTeW1ib2wiLCJiYXNlVG9TdHJpbmciLCJkZWJ1cnJMZXR0ZXIiLCJyc0NvbWJvTWFya3NSYW5nZSIsInJlQ29tYm9IYWxmTWFya3NSYW5nZSIsInJzQ29tYm9TeW1ib2xzUmFuZ2UiLCJyc0NvbWJvUmFuZ2UiLCJyc0NvbWJvIiwiaGFzVW5pY29kZVdvcmQiLCJ1bmljb2RlV29yZHMiLCJhc2NpaVdvcmRzIiwicnNBcG9zIiwiYXJyYXlSZWR1Y2UiLCJ3b3JkcyIsImRlYnVyciIsImJhc2VTbGljZSIsInJzQXN0cmFsUmFuZ2UiLCJyc1ZhclJhbmdlIiwicnNaV0oiLCJyc0ZpdHoiLCJyc01vZGlmaWVyIiwicnNOb25Bc3RyYWwiLCJyc1JlZ2lvbmFsIiwicnNTdXJyUGFpciIsInJlT3B0TW9kIiwicnNPcHRWYXIiLCJyc09wdEpvaW4iLCJyc1NlcSIsImhhc1VuaWNvZGUiLCJ1bmljb2RlVG9BcnJheSIsImFzY2lpVG9BcnJheSIsInN0cmluZ1RvQXJyYXkiLCJjYXN0U2xpY2UiLCJjcmVhdGVDYXNlRmlyc3QiLCJjcmVhdGVDb21wb3VuZGVyIiwidXBwZXJGaXJzdCIsImZvcm1hdE5hbWUiLCJzcGxpdCIsInRyYW5zbGF0ZSIsImkxOG4iLCJrZXkiLCJyZWFsT3B0aW9ucyIsImZvcm1hdHRlZE5hbWUiLCJrZXlzIiwiZXhpc3RzIiwidCIsImRlZmF1bHRWYWx1ZSIsInN0YXJ0Q2FzZSIsImNyZWF0ZUZ1bmN0aW9ucyIsInRyYW5zbGF0ZUFjdGlvbiIsInRyYW5zbGF0ZUJ1dHRvbiIsImJ1dHRvbkxhYmVsIiwidHJhbnNsYXRlTGFiZWwiLCJsYWJlbCIsInRyYW5zbGF0ZVByb3BlcnR5IiwicHJvcGVydHlOYW1lIiwidHJhbnNsYXRlTWVzc2FnZSIsIm1lc3NhZ2VOYW1lIiwidGEiLCJ0YiIsInRsIiwidHAiLCJ0bSIsInVzZVRyYW5zbGF0aW9uIiwicmVzdCIsIm9yaWdpbmFsVXNlVHJhbnNsYXRpb24iLCJ0cmFuc2xhdGVGdW5jdGlvbnMiLCJTaWRlYmFyUGFnZXMiLCJwYWdlcyIsImxvY2F0aW9uIiwidXNlTG9jYXRpb24iLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImlzQWN0aXZlIiwicGFnZSIsInBhdGhuYW1lIiwibWF0Y2giLCJlbGVtZW50cyIsIm1hcCIsImlkIiwiaXNTZWxlY3RlZCIsImljb24iLCJvbkNsaWNrIiwiZXZlbnQiLCJlbGVtZW50IiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiTmF2aWdhdGlvbiIsIlNpZGViYXJGb290ZXIiLCJCb3giLCJTb2Z0d2FyZUJyb3RoZXJzIiwiaXNPblNlcnZlciIsImNoZWNrUmVzcG9uc2UiLCJyZXNwb25zZSIsIm9yaWdpbiIsInJlcXVlc3QiLCJyZXNwb25zZVVSTCIsImFsZXJ0IiwiYXNzaWduIiwiQXBpQ2xpZW50IiwiYmFzZVVSTCIsImdldEJhc2VVcmwiLCJjbGllbnQiLCJheGlvcyIsImNyZWF0ZSIsInNlYXJjaFJlY29yZHMiLCJyZXNvdXJjZUFjdGlvbiIsImRhdGEiLCJyZWNvcmRzIiwiYXhpb3NQYXJhbXMiLCJxIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibWV0aG9kIiwicmVjb3JkQWN0aW9uIiwiYnVsa0FjdGlvbiIsInBhcmFtcyIsImdldERhc2hib2FyZCIsImdldCIsImdldFBhZ2UiLCJGT1JNX1ZBTFVFX05VTEwiLCJGT1JNX1ZBTFVFX0VNUFRZX09CSkVDVCIsIkZPUk1fVkFMVUVfRU1QVFlfQVJSQVkiLCJpc09iamVjdE9yQXJyYXkiLCJ2YWx1ZSIsIkZpbGUiLCJwYXJhbXNUb0Zvcm1EYXRhIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwiQXJyYXkiLCJBRERfTk9USUNFIiwiYWRkTm90aWNlIiwidHlwZSIsIk1hdGgiLCJyYW5kb20iLCJzdWJzdHIiLCJwcm9ncmVzcyIsInVzZU5vdGljZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJub3RpY2UiLCJtZXJnZVJlY29yZFJlc3BvbnNlIiwicmVjb3JkIiwiZXJyb3JzIiwicG9wdWxhdGVkIiwiREVMSU1JVEVSIiwicHJvcGVydHlLZXlSZWdleCIsInByb3BlcnR5UGF0aCIsImRlbGltaXRlciIsImVzY2FwZWREZWxpbWl0ZXIiLCJlc2NhcGVkRGVsaW1pdGVyT3JJbmRleCIsInBhdGgiLCJpbmNsdWRlQWxsU2libGluZ3MiLCJzZWxlY3RQYXJhbXMiLCJwcm9wZXJ0aWVzIiwicHJvcGVydHlBcnJheSIsInNlbGVjdGVkIiwiZmlsdGVyIiwicmVkdWNlIiwiZ2xvYmFsTWVtbyIsInJlZ2V4IiwiZmlsdGVyZWQiLCJtZW1vIiwiZmlsdGVyT3V0UGFyYW1zIiwiZ2xvYmFsRmlsdGVyZWQiLCJwYXRoVG9QYXJ0cyIsImFsbFBhcnRzIiwic2tpcEFycmF5SW5kZXhlcyIsInBhcnQiLCJpc05hTiIsImlzT2JqZWN0IiwicGFyYW1zQ29weSIsImZsYXR0ZW5lZCIsImZsYXR0ZW4iLCJzbGljZSIsImluY2x1ZGVzIiwiVEVNUF9IT0xESU5HX0tFWSIsInVuZmxhdHRlbiIsImZpbmQiLCJzZWxlY3RlZFBhcmFtcyIsIm5lc3RlZFByb3BlcnRpZXMiLCJpbmRleCIsIm5ld0tleSIsIm1lcmdlIiwibWVyZ2VQYXJhbXMiLCJmbGF0dGVuUGFyYW1zIiwicmV2ZXJzZSIsIm1lcmdlUGFyYW0iLCJyZW1vdmVQYXRoIiwicGFyZW50UGF0aHMiLCJwYXJlbnRQYXRoIiwicGFyZW50SW5kZXgiLCJwYXJlbnQiLCJwcmV2aW91c1BhdGhzIiwicHJldmlvdXNQYXRoSW5kZXgiLCJzcGxpY2UiLCJmbGF0IiwidXBkYXRlUmVjb3JkIiwicHJvcGVydHkiLCJzZWxlY3RlZFJlY29yZCIsInByZXZpb3VzUmVjb3JkIiwicG9wdWxhdGVkTW9kaWZpZWQiLCJwb3B1bGF0ZWRDb3B5IiwiaXNFbnRpcmVSZWNvcmRHaXZlbiIsInByb3BlcnR5T3JSZWNvcmQiLCJmaWx0ZXJSZWNvcmRQYXJhbXMiLCJpbmNsdWRlUGFyYW1zIiwiaXNQcm9wZXJ0eVBlcm1pdHRlZCIsInNvbWUiLCJhcGkiLCJ1c2VSZWNvcmQiLCJpbml0aWFsUmVjb3JkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsImlzU3luY2VkIiwic2V0SXNTeW5jZWQiLCJzZXRQcm9ncmVzcyIsImZpbHRlcmVkUmVjb3JkIiwic2V0UmVjb3JkIiwic2V0RmlsdGVyZWRSZWNvcmQiLCJ1c2VDYWxsYmFjayIsIm5ld1JlY29yZCIsIkZ1bmN0aW9uIiwib25Ob3RpY2UiLCJoYW5kbGVDaGFuZ2UiLCJpbmNvbWluZ1JlY29yZCIsImNvbnNvbGUiLCJ3YXJuIiwiaGFuZGxlU3VibWl0IiwiY3VzdG9tUGFyYW1zIiwic3VibWl0T3B0aW9ucyIsIm1lcmdlZFBhcmFtcyIsIm9uVXBsb2FkUHJvZ3Jlc3MiLCJlIiwicm91bmQiLCJsb2FkZWQiLCJ0b3RhbCIsImhlYWRlcnMiLCJwcm9taXNlIiwidGhlbiIsInVwZGF0ZU9uU2F2ZSIsInByZXYiLCJjYXRjaCIsInN1Ym1pdCIsImFjdGlvbkhhc0NvbXBvbmVudCIsImFjdGlvbiIsImNvbXBvbmVudCIsImFjdGlvbkhyZWYiLCJoYXNIYW5kbGVyIiwiaHJlZk1hcCIsInJlc291cmNlIiwiYnVsayIsImFjdGlvblR5cGUiLCJFcnJvciIsImNhbGxBY3Rpb25BcGkiLCJidWlsZEFjdGlvbkNhbGxBcGlUcmlnZ2VyIiwiYWN0aW9uUmVzcG9uc2VIYW5kbGVyIiwiY2FsbEFwaSIsImJ1aWxkQWN0aW9uVGVzdElkIiwiYnVpbGRBY3Rpb25DbGlja0hhbmRsZXIiLCJoYW5kbGVBY3Rpb25DbGljayIsInN0b3BQcm9wYWdhdGlvbiIsImd1YXJkIiwiY29uZmlybSIsImN0cmxLZXkiLCJvcGVuIiwiUkVGUkVTSF9LRVkiLCJhcHBlbmRGb3JjZVJlZnJlc2giLCJzZWFyY2hQYXJhbXNJZHgiLCJsYXN0SW5kZXhPZiIsInVybFNlYXJjaFBhcmFtcyIsInN1YnN0cmluZyIsIm9sZFBhcmFtcyIsIm5ld1BhcmFtcyIsImhhc0ZvcmNlUmVmcmVzaCIsInJlbW92ZUZvcmNlUmVmcmVzaCIsImRlbGV0ZSIsInVzZUFjdGlvblJlc3BvbnNlSGFuZGxlciIsIm9uQWN0aW9uQ2FsbCIsInJlZGlyZWN0VXJsIiwiYXBwZW5kZWQiLCJ1c2VBY3Rpb24iLCJoYW5kbGVDbGljayIsIlNFU1NJT05fSU5JVElBTElaRSIsInNldEN1cnJlbnRBZG1pbiIsInVzZUN1cnJlbnRBZG1pbiIsImN1cnJlbnRBZG1pbiIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJzZXNzaW9uIiwiYWRtaW4iLCJ1c2VMb2NhbFN0b3JhZ2UiLCJpbml0aWFsVmFsdWUiLCJzdG9yZWRWYWx1ZSIsInNldFN0b3JlZFZhbHVlIiwiaXRlbSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJsb2ciLCJzZXRWYWx1ZSIsInZhbHVlVG9TdG9yZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJyZWdFeHAiLCJ1c2VOYXZpZ2F0aW9uUmVzb3VyY2VzIiwicmVzb3VyY2VzIiwib3BlbkVsZW1lbnRzIiwic2V0T3BlbkVsZW1lbnRzIiwiZW5yaWNoUmVzb3VyY2UiLCJ1c2VNZW1vIiwicmVzIiwibmF2aWdhdGlvbiIsImlzT3BlbiIsInZhbHVlcyIsInVzZVJlY29yZHMiLCJzZXRSZWNvcmRzIiwicGVyUGFnZSIsInNldFBlclBhZ2UiLCJzZXRQYWdlIiwic2V0VG90YWwiLCJkaXJlY3Rpb24iLCJzZXREaXJlY3Rpb24iLCJzb3J0QnkiLCJzZXRTb3J0QnkiLCJmZXRjaERhdGEiLCJsaXN0QWN0aW9uUmVzcG9uc2UiLCJtZXRhIiwidXNlRWZmZWN0IiwidXNlU2VsZWN0ZWRSZWNvcmRzIiwic2VsZWN0ZWRSZWNvcmRzIiwic2V0U2VsZWN0ZWRSZWNvcmRzIiwiaGFuZGxlU2VsZWN0Iiwic2VsZWN0ZWRJbmRleCIsImZpbmRJbmRleCIsIm5ld1NlbGVjdGVkUmVjb3JkcyIsImhhbmRsZVNlbGVjdEFsbCIsIm1pc3NpbmciLCJidWxrQWN0aW9ucyIsInVzZVJlc291cmNlIiwiZm91bmRSZXNvdXJjZSIsIlNpZGViYXJSZXNvdXJjZVNlY3Rpb25PcmlnaW5hbCIsIlNpZGViYXJSZXNvdXJjZVNlY3Rpb24iLCJTdHlsZWRTaWRlYmFyIiwiZGVmYXVsdFByb3BzIiwicG9zaXRpb24iLCJ3aWR0aCIsImJvcmRlclJpZ2h0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJ6SW5kZXgiLCJiZyIsIlNpZGViYXIiLCJpc1Zpc2libGUiLCJzb2Z0d2FyZUJyb3RoZXJzIiwiTG9nZ2VkSW4iLCJkcm9wQWN0aW9ucyIsIkN1cnJlbnRVc2VyTmF2IiwiZW1haWwiLCJ0aXRsZSIsImF2YXRhclVybCIsIk92ZXJyaWRhYmxlTG9nZ2VkSW4iLCJWZXJzaW9uSXRlbSIsIlRleHQiLCJjb2xvciIsIlZlcnNpb24iLCJ2ZXJzaW9ucyIsImFwcCIsInZlcnNpb24iLCJOYXZCYXIiLCJ0aGVtZSIsInNpemVzIiwibmF2YmFySGVpZ2h0IiwiY29sb3JzIiwid2hpdGUiLCJjbGFzc05hbWUiLCJUb3BCYXIiLCJ0b2dnbGVTaWRlYmFyIiwiY3Vyc29yIiwiSWNvbiIsIkRST1BfTk9USUNFIiwiZHJvcE5vdGljZSIsIm5vdGljZUlkIiwiU0VUX05PVElDRV9QUk9HUkVTUyIsInNldE5vdGljZVByb2dyZXNzIiwiVElNRV9UT19ESVNBUFBFQVIiLCJOb3RpY2VFbGVtZW50IiwidGltZXIiLCJjb21wb25lbnREaWRNb3VudCIsImRyb3AiLCJub3RpZnlQcm9ncmVzcyIsInNldEludGVydmFsIiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0IiwiY2xlYXJJbnRlcnZhbCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiTWVzc2FnZUJveCIsIm1pbldpZHRoIiwiTm90aWNlQm94Iiwibm90aWNlcyIsIm1hcFN0YXRlVG9Qcm9wcyIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsIkNvbm5lY3RlZE5vdGljZUJveCIsImNvbm5lY3QiLCJwYWdlSGVhZGVySGVpZ2h0IiwicGFnZUhlYWRlclBhZGRpbmdZIiwicGFnZUhlYWRlclBhZGRpbmdYIiwiRGFzaGJvYXJkSGVhZGVyIiwiSWxsdXN0cmF0aW9uIiwiSDIiLCJib3hlcyIsInZhcmlhbnQiLCJzdWJ0aXRsZSIsIkNhcmQiLCJmbGV4IiwiZ3JleTEwMCIsInByaW1hcnkxMDAiLCJzaGFkb3dzIiwiY2FyZEhvdmVyIiwiYm94U2hhZG93IiwiRGFzaGJvYXJkIiwiYm94IiwiSDUiLCJINCIsIkJ1dHRvbiIsIkVycm9yTWVzc2FnZSIsIkVycm9yQm91bmRhcnkiLCJjb21wb25lbnREaWRDYXRjaCIsImNoaWxkcmVuIiwiaXNDbGllbnQiLCJkYXNoYm9hcmQiLCJEZWZhdWx0RGFzaGJvYXJkIiwiQWRkTmV3SXRlbUJ1dHRvbiIsIlByb3BlcnR5TGFiZWwiLCJsYWJlbFByb3BzIiwiaGlkZUxhYmVsIiwiTGFiZWwiLCJpc1JlcXVpcmVkIiwiY29udmVydFRvU3ViUHJvcGVydHkiLCJhcnJheVByb3BlcnR5IiwicmVtb3ZlU3ViUHJvcGVydHkiLCJzdWJQcm9wZXJ0eVBhdGgiLCJwb3B1bGF0ZWRLZXlNYXAiLCJwcm9wZXJ0eUtleSIsIm5ld1BvcHVsYXRlZEtleU1hcCIsIm5ld1BvcHVsYXRlZCIsIm5ld1Byb3BlcnR5S2V5Iiwib2xkUHJvcGVydHlLZXkiLCJJdGVtUmVuZGVyZXIiLCJJdGVtQ29tcG9uZW50Iiwib25EZWxldGUiLCJJbnB1dHNJblNlY3Rpb24iLCJvbkNoYW5nZSIsIml0ZW1zIiwiYWRkTmV3IiwibmV3SXRlbXMiLCJzdWJQcm9wZXJ0aWVzIiwicmVtb3ZlSXRlbSIsInN1YlByb3BlcnR5IiwiU2VjdGlvbiIsImkiLCJpdGVtUHJvcGVydHkiLCJFZGl0IiwidGVzdElkIiwiRm9ybUdyb3VwIiwiRm9ybU1lc3NhZ2UiLCJMaXN0IiwiU2hvdyIsIlB1cmVDb21wb25lbnQiLCJWYWx1ZUdyb3VwIiwiaXNJZCIsInN1YlByb3BlcnR5V2l0aFBhdGgiLCJyZW5kZXJJdGVtcyIsInNob3dBY3Rpb24iLCJyZWNvcmRBY3Rpb25zIiwiYSIsInRpdGxlUHJvcGVydHkiLCJEZWZhdWx0UHJvcGVydHlWYWx1ZSIsInJhd1ZhbHVlIiwiZm9udFN0eWxlIiwiYXZhaWxhYmxlVmFsdWVzIiwib3B0aW9uIiwib3B0IiwiQmFkZ2UiLCJyZWNvcmRQcm9wZXJ0eUlzRXF1YWwiLCJwcmV2UHJvcHMiLCJuZXh0UHJvcHMiLCJwcmV2VmFsdWUiLCJuZXh0VmFsdWUiLCJwcmV2RXJyb3IiLCJuZXh0RXJyb3IiLCJCb29sZWFuIiwiU2VsZWN0RWRpdCIsInByb3BWYWx1ZSIsInN0eWxlcyIsInNlbGVjdFN0eWxlcyIsImF2IiwiU2VsZWN0IiwicyIsImlzRGlzYWJsZWQiLCJUZXh0RWRpdCIsIklucHV0IiwidGFyZ2V0Iiwia2V5Q29kZSIsIndpdGhUaGVtZSIsIkZpbHRlciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiYmluZCIsImhhbmRsZVNlbGVjdENoYW5nZSIsInJlbmRlcklucHV0IiwiZmlsdGVyS2V5IiwiZmlsdGVyU3R5bGVzIiwicGFyc2VWYWx1ZSIsIkNoZWNrQm94IiwiaW5saW5lIiwiQm9vbGVhblByb3BlcnR5VmFsdWUiLCJiYXNlIiwibWFwVmFsdWUiLCJ0cmFuc2xhdGlvbiIsIm8iLCJEYXRlUGlja2VyIiwicHJvcGVydHlUeXBlIiwiZGF0ZSIsImZvcm1hdERhdGVQcm9wZXJ0eSIsIlBBUkFNX1NFUEFSQVRPUiIsIm5vcm1hbGl6ZUtleXMiLCJmaWx0ZXJzIiwibm9ybWFsaXplZCIsInBvcHVsYXRlIiwicmVmZXJlbmNlUmVzb3VyY2UiLCJkZWNvcmF0ZSIsImdldFByb3BlcnR5QnlLZXkiLCJyZWZlcmVuY2UiLCJmaW5kT25lIiwiY2FsbGJhY2siLCJpbml0aWFsIiwiQmFja2VuZEZpbHRlciIsImZyb21LZXkiLCJ0b0tleSIsImZyb21WYWx1ZSIsInRvVmFsdWUiLCJwcm9wZXJ0eVByb3BzIiwicXVpbGwiLCJjdXN0b21Qcm9wcyIsIm1vZHVsZXMiLCJ0b29sYmFyIiwiRGVmYXVsdFF1aWxsVG9vbGJhck9wdGlvbnMiLCJSaWNoVGV4dCIsImNvbnRlbnQiLCJjb250ZW50UmVmIiwiY3JlYXRlUmVmIiwiY3VycmVudCIsImlubmVySFRNTCIsIm9yaWdpbmFsIiwibG9hZE9wdGlvbnMiLCJpbnB1dFZhbHVlIiwib3B0aW9uUmVjb3JkcyIsIm9wdGlvblJlY29yZCIsInNlbGVjdGVkSWQiLCJsb2FkZWRSZWNvcmQiLCJzZXRMb2FkZWRSZWNvcmQiLCJsb2FkaW5nUmVjb3JkIiwic2V0TG9hZGluZ1JlY29yZCIsInNlbGVjdGVkVmFsdWUiLCJzZWxlY3RlZE9wdGlvbiIsImMiLCJmaW5hbGx5IiwiU3R5bGVkTGluayIsIkJ1dHRvbkNTUyIsInNwYWNlIiwieHMiLCJSZWZlcmVuY2VWYWx1ZSIsInJlZklkIiwiciIsImxpbmUiLCJpc0lucHV0Iiwic2V0SXNJbnB1dCIsIklucHV0R3JvdXAiLCJ0eXBlcyIsInRleHRhcmVhIiwiYm9vbGVhbiIsImRhdGV0aW1lIiwicGFzc3dvcmQiLCJyaWNodGV4dCIsInN0cmluZyIsImRlZmF1bHRUeXBlIiwibnVtYmVyIiwiZmxvYXQiLCJtaXhlZCIsIkJhc2VQcm9wZXJ0eUNvbXBvbmVudCIsImJhc2VQcm9wZXJ0eSIsIndoZXJlIiwiY29tcG9uZW50cyIsIkFycmF5VHlwZSIsIk1peGVkIiwiTWl4ZWRUeXBlIiwiY2FtZWxpemVQcm9wZXJ0eVR5cGUiLCJlZGl0Iiwic2hvdyIsImxpc3QiLCJCYXNlUHJvcGVydHlDb21wb25lbnRFeHRlbmRlZCIsIkRlZmF1bHRUeXBlIiwiRGF0ZVRpbWUiLCJSZWZlcmVuY2UiLCJUZXh0QXJlYSIsIlBhc3N3b3JkIiwiQnJlYWRjcnVtYkxpbmsiLCJncmV5NDAiLCJmb250IiwibGluZUhlaWdodHMiLCJkZWZhdWx0IiwiZm9udFNpemVzIiwiQnJlYWRjcnVtYnMiLCJhY3Rpb25zIiwiYWN0aW9uc1RvQnV0dG9uR3JvdXAiLCJidXR0b25zIiwic291cmNlIiwiYnV0dG9uc01hcCIsImJ1dHRvbiIsImJ0biIsInJvdW5kZWQiLCJSb3V0ZXJMaW5rIiwiU3R5bGVkQmFja0J1dHRvbiIsInNob3dJbkRyYXdlciIsImNzc0Nsb3NlSWNvbiIsIkFjdGlvbkhlYWRlciIsInRvZ2dsZUZpbHRlciIsImFjdGlvblBlcmZvcm1lZCIsInRhZyIsIm9taXRBY3Rpb25zIiwiaGlkZUFjdGlvbkhlYWRlciIsInNvdXJjZUFjdGlvbiIsImFjdGlvbkJ1dHRvbnMiLCJyYSIsInJlc291cmNlQWN0aW9ucyIsImN1c3RvbVJlc291cmNlQnV0dG9ucyIsImlzTGlzdCIsImxpc3RBY3Rpb24iLCJjc3NJc1Jvb3RGbGV4IiwiY3NzSGVhZGVyTVQiLCJjc3NBY3Rpb25zTUIiLCJDc3NIQ29tcG9uZW50IiwiSDMiLCJCdXR0b25Hcm91cCIsIkxheW91dEVsZW1lbnRSZW5kZXJlciIsImxheW91dEVsZW1lbnQiLCJsYXlvdXRQcm9wcyIsInByb3BlcnR5TmFtZXMiLCJsYXlvdXRFbGVtZW50cyIsImlubmVyTGF5b3V0RWxlbWVudHMiLCJvdGhlciIsIkRlc2lnblN5c3RlbSIsIkRlc2lnblN5c3RlbS5NZXNzYWdlQm94IiwiRGVzaWduU3lzdGVtLkJhZGdlIiwiRGVzaWduU3lzdGVtLkJveCIsIlByb3BlcnR5VHlwZSIsImlubmVyTGF5b3V0RWxlbWVudCIsIk5ldyIsIkRyYXdlckNvbnRlbnQiLCJsYXlvdXQiLCJlZGl0UHJvcGVydGllcyIsIkRyYXdlckZvb3RlciIsInNob3dQcm9wZXJ0aWVzIiwiaXNUaXRsZSIsIlJlY29yZEluTGlzdCIsInJlY29yZEZyb21Qcm9wcyIsImlzTG9hZGluZyIsIm9uU2VsZWN0IiwiaGFuZGxlQWN0aW9uQ2FsbGJhY2siLCJhY3Rpb25SZXNwb25zZSIsInRhcmdldFRhZ05hbWUiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJhY3Rpb25QYXJhbXMiLCJUYWJsZVJvdyIsIlRhYmxlQ2VsbCIsImxpc3RQcm9wZXJ0aWVzIiwiUGxhY2Vob2xkZXIiLCJoZWlnaHQiLCJTb3J0TGluayIsIm9wcG9zaXRlRGlyZWN0aW9uIiwic29ydGVkQnlJY29uIiwiTmF2TGluayIsIndpdGhSb3V0ZXIiLCJQcm9wZXJ0eUhlYWRlciIsImlzTWFpbiIsImlzU29ydGFibGUiLCJSZWNvcmRzVGFibGVIZWFkZXIiLCJvblNlbGVjdEFsbCIsInNlbGVjdGVkQWxsIiwiVGFibGVIZWFkIiwibWFyZ2luTGVmdCIsIkFjdGlvbkJ1dHRvbiIsImZpcnN0Q2hpbGQiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJXcmFwcGVkRWxlbWVudCIsImNsb25lRWxlbWVudCIsIk5vUmVjb3Jkc09yaWdpbmFsIiwiY2FuQ3JlYXRlIiwiSW5mb0JveCIsIk5vUmVjb3JkcyIsImdldEJ1bGtBY3Rpb25zRnJvbVJlY29yZHMiLCJhY3Rpb25zTWVtbyIsIlNlbGVjdGVkUmVjb3JkcyIsImJ1bGtCdXR0b25zIiwiVGFibGVDYXB0aW9uIiwiVGl0bGUiLCJSZWNvcmRzVGFibGUiLCJMb2FkZXIiLCJyZWNvcmRzSGF2ZUJ1bGtBY3Rpb24iLCJUYWJsZSIsIlRhYmxlQm9keSIsInNldFRhZyIsImhhbmRsZUFjdGlvblBlcmZvcm1lZCIsImhhbmRsZVBhZ2luYXRpb25DaGFuZ2UiLCJwYWdlTnVtYmVyIiwiUGFnaW5hdGlvbiIsIndpdGhOb3RpY2UiLCJCdWxrRGVsZXRlIiwiY291bnQiLCJGb3JtYXR0ZWRCdWxrRGVsZXRlIiwibmV3IiwiYnVsa0RlbGV0ZSIsIkJhc2VBY3Rpb25Db21wb25lbnQiLCJkb2N1bWVudGF0aW9uTGluayIsIkRPQ1MiLCJBY3Rpb24iLCJUcmFucyIsIkVycm9yTWVzc2FnZUJveCIsIk5vUmVzb3VyY2VFcnJvciIsIk5vQWN0aW9uRXJyb3IiLCJOb1JlY29yZEVycm9yIiwiU3R5bGVkV3JhcHBlciIsInh4bCIsIldyYXBwZXIiLCJEUkFXRVJfUE9SVEFMX0lEIiwiRHJhd2VyUG9ydGFsIiwiZHJhd2VyRWxlbWVudCIsInNldERyYXdlckVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJXcmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsIkRyYXdlcldyYXBwZXIiLCJUaGVtZVByb3ZpZGVyIiwiVEhFTUUiLCJEcmF3ZXIiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzdHlsZSIsIkRFRkFVTFRfRFJBV0VSX1dJRFRIIiwiYWRkIiwiY3JlYXRlUG9ydGFsIiwicGFyc2VRdWVyeSIsImVudHJ5IiwiRmlsdGVyRHJhd2VyIiwiZmlsdGVyUHJvcGVydGllcyIsInNldEZpbHRlciIsInVzZVJvdXRlTWF0Y2giLCJyZXNldEZpbHRlciIsImZpbHRlcmVkU2VhcmNoIiwiUmVjb3JkQWN0aW9uIiwic2V0RGF0YSIsImZldGNoUmVjb3JkIiwib2xkUmVjb3JkIiwiaGFzRGlmZmVyZW50UmVjb3JkIiwiYWN0aW9uRnJvbVJlc291cmNlIiwiY29udGFpbmVyV2lkdGgiLCJSZXNvdXJjZUFjdGlvbiIsIkJ1bGtBY3Rpb24iLCJmZXRjaFJlY29yZHMiLCJyZWNvcmRJZHNTdHJpbmciLCJQYWdlIiwiY3VycmVudFBhZ2UiLCJxdWVyeVN0cmluZyIsImdldEFjdGlvbiIsInJlc291cmNlQWN0aW9uTWF0Y2giLCJyZWNvcmRBY3Rpb25NYXRjaCIsImJ1bGtBY3Rpb25NYXRjaCIsImZpbHRlclZpc2libGUiLCJzZXRGaWxlclZpc2libGUiLCJxdWVyeUhhc0ZpbHRlciIsInJlYWxFbmRBY3Rpb24iLCJsaXN0QWN0aW9uTmFtZSIsInNob3dGaWx0ZXIiLCJCYXNlQWN0aW9uIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSIsIkFwcCIsInNpZGViYXJWaXNpYmxlIiwiUmVzZXQiLCJPdmVybGF5IiwiTm90aWNlIiwiU3dpdGNoIiwiUm91dGUiLCJSZXNvdXJjZSIsIkFTU0VUU19JTklUSUFMSVpFIiwiQlJBTkRJTkdfSU5JVElBTElaRSIsIkRBU0hCT0FSRF9JTklUSUFMSVpFIiwiTE9DQUxFX0lOSVRJQUxJWkUiLCJQQUdFU19JTklUSUFMSVpFIiwiUEFUSFNfSU5JVElBTElaRSIsIlJFU09VUkNFU19JTklUSUFMSVpFIiwiVkVSU0lPTlNfSU5JVElBTElaRSIsInJlc291cmNlc1JlZHVjZXIiLCJwYWdlc1JlZHVjZXIiLCJsb2NhbGVzUmVkdWNlciIsImxhbmd1YWdlIiwidHJhbnNsYXRpb25zIiwiYnJhbmRpbmdSZWR1Y2VyIiwiYXNzZXRzUmVkdWNlciIsInBhdGhzUmVkdWNlciIsIkRFRkFVTFRfUEFUSFMiLCJkYXNoYm9hcmRSZWR1Y2VyIiwic2Vzc2lvblJlZHVjZXIiLCJ2ZXJzaW9uc1JlZHVjZXIiLCJub3RpY2VzUmVkdWNlciIsInJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJhc3NldHMiLCJsb2NhbGUiLCJpbml0aWFsU3RhdGUiLCJjcmVhdGVTdG9yZSIsImVudiIsIk5PREVfRU5WIiwic3RvcmUiLCJ1c2UiLCJpbml0UmVhY3RJMThuZXh0IiwiaW5pdCIsImxuZyIsImludGVycG9sYXRpb24iLCJlc2NhcGVWYWx1ZSIsIkFwcGxpY2F0aW9uIiwiUHJvdmlkZXIiLCJCcm93c2VyUm91dGVyIiwicmVnZW5lcmF0b3JSdW50aW1lIiwiQXBwQ29tcG9uZW50cyIsIkhvb2tzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBO0NBQ0E7Q0FDQTtDQUNBO0NBQ0E7Q0FD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QUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUc7Q0FDM0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztDQUNyRCxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHO0NBQ3JELEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUc7Q0FDckQsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztDQUNyRCxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUc7Q0FDM0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUc7Q0FDL0UsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUc7Q0FDL0UsRUFBRSxNQUFNLEVBQUUsR0FBRyxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRztDQUNyRCxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHO0NBQ3JELEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHO0NBQ3hDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSTtDQUM1QixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUk7Q0FDNUIsRUFBRSxNQUFNLEVBQUUsSUFBSTtDQUNkO0NBQ0EsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM3RCxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzdELEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzVFLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM1RSxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzdELEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM3RCxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDNUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzVFLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRztDQUMvQixFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDNUUsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzVFLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM3RCxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRztDQUM5QyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzdELEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDN0QsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDOUMsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDM0YsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUc7Q0FDM0YsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLFFBQVEsRUFBRSxHQUFHO0NBQy9CLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHO0NBQzlDLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFB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
