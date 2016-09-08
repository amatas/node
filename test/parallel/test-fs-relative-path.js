'use strict';
require('../common');
var assert = require('assert');
var path = require('path');

var relative_path = path.relative('.', '\\\\VBOXSRV\\vagrant\\');

assert.strictEqual(relative_path, '\\\\VBOXSRV\\vagrant\\');

relative_path = path.win32.relative('.', '\\\\VBOXSRV\\vagrant\\');

assert.strictEqual(relative_path, '\\\\VBOXSRV\\vagrant\\');
