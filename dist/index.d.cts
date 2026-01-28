import { WatchOptions, ShallowRef, WatchSource } from 'vue';

interface UseLastChangedOptions<Immediate extends boolean, InitialValue extends number | null | undefined = undefined> extends WatchOptions<Immediate> {
    initialValue?: InitialValue;
}
type UseLastChangedReturn = Readonly<ShallowRef<number | null>> | Readonly<ShallowRef<number>>;
/**
 * Records the timestamp of the last change
 *
 * @see https://vueuse.org/useLastChanged
 */
declare function useLastChanged(source: WatchSource, options?: UseLastChangedOptions<false>): Readonly<ShallowRef<number | null>>;
declare function useLastChanged(source: WatchSource, options: UseLastChangedOptions<true> | UseLastChangedOptions<boolean, number>): Readonly<ShallowRef<number>>;

export { useLastChanged };
export type { UseLastChangedOptions, UseLastChangedReturn };
