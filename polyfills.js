/* eslint no-extend-native: 0 */
// core-js comes with Next.js. So, you can import it like below
// import React from 'react';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/object';
import 'core-js/es6/array';
import 'core-js/es6/string';
import 'raf/polyfill';
import 'classlist-polyfill';
// import PropTypes from 'prop-types';

// import 'html5-history-api';

// React.PropTypes = PropTypes;
// React.createClass = CreateClass;

// Avoid `console` errors in browsers that lack a console.
typeof window === 'object'
	? (function() {
			var method;
			var noop = function() {};
			var methods = [
				'assert',
				'clear',
				'count',
				'debug',
				'dir',
				'dirxml',
				'error',
				'exception',
				'group',
				'groupCollapsed',
				'groupEnd',
				'info',
				'log',
				'markTimeline',
				'profile',
				'profileEnd',
				'table',
				'time',
				'timeEnd',
				'timeStamp',
				'trace',
				'warn'
			];
			var length = methods.length;
			var console = (window.console = window.console || {});

			while (length--) {
				method = methods[length];

				// Only stub undefined methods.
				if (!console[method]) {
					console[method] = noop;
				}
			}
	  })()
	: null;
// Add your polyfills
// This files runs at the very beginning (even before React and Next.js core)
