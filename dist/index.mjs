import { shallowRef, watch, shallowReadonly } from 'vue';

function useLastChanged(source, options = {}) {
  const ms = shallowRef(options.initialValue ?? null);
  watch(
    source,
    () => ms.value = timestamp(),
    options
  );
  return shallowReadonly(ms);
}

export { useLastChanged };
