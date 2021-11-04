/**
 *
 * @param timer debounce timer by useRef
 * @param delay debounce delay time
 * @param setInputStateCallBack callback when input changed
 * @returns (e) => setInputState(e.target.value)
 *
 *
 * Create a debounced setinputstate callback for your input onChange
 *
 * ex :
 *
 *    const [searchInput, setSearchInput] = useState("");
 *    const ref_DebounceTimer = useRef<any>(null);
 *    debouncedInputChanged = useDebouncedInput(ref_DebounceTimer, 200, setInput)
 *
 *    return(
 *      <input type="text" onChange={debouncedInputChanged} />
 *    )
 */
export const useDebouncedInput = (
  timer: any,
  delay: number,
  setInputStateCallBack: React.Dispatch<React.SetStateAction<string>>
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timer?.current !== null) {
      clearTimeout(timer.current);
    }
    try {
      timer.current = setTimeout(() => {
        let val = e.target.value || "";
        setInputStateCallBack.call(this, val);
      }, delay);
    } catch (error) {
      throw new Error("useDebouncedInput Error");
    }
  };
};
