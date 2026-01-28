'use strict';

const vue = require('vue');

function useLastChanged(source, options = {}) {
  const ms = vue.shallowRef(options.initialValue ?? null);
  vue.watch(
    source,
    () => ms.value = timestamp(),
    options
  );
  return vue.shallowReadonly(ms);
}

exports.useLastChanged = useLastChanged;
