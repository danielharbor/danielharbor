import { useEffect } from 'react';
/**
 * useKeyPress
 * @param {string} keys - a list of keys to respond to, compared against event.key
 * @param {function} action - the action to perform on key press
 */
export default function useKeypress(keys, action) {
  useEffect(() => {
    function onKeyup(e) {
      keys.forEach((key) => {
        if (e.key === key) action()
      });
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, []);
}
