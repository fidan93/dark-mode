import {useLocalStorage} from "./useLocalStorage";
import {useMedia } from './useMedia';
export const useDarkMode = (initValues)=>{
    const [darkMode,setDarkMode,setValue]= useLocalStorage(initValues);
    const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');

    const prefersDarkMode = usePrefersDarkMode();
    const enabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

     setValue( e => {
        e.preventDefault();
       setDarkMode(!darkMode);
      }
     )
    return [darkMode,setValue];
}

function usePrefersDarkMode() {
    return useMedia(['(prefers-color-scheme: dark)'], [true], false);
  }