import { useEffect } from 'react';

export const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]);
};

/**
 * useKeyPress
 * @param {string} keys - a list of keys to respond to, compared against event.key
 * @param {function} action - the action to perform on key press
 */
export const useKeypress = (keys, action) => {
  useEffect(() => {
    function onKeyup(e) {
      keys.forEach((key) => {
        if (e.key === key) action()
      });
    }
    window.addEventListener('keyup', onKeyup);
    return () => window.removeEventListener('keyup', onKeyup);
  }, []);
};
