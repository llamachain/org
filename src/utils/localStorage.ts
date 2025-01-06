export function loadState(key: string) {
    if (typeof window === 'undefined') return;
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (error) {
      window.console.log(error);
      return undefined;
    }
  }
  
  export function saveState(key: string, state: any) {
    try {
      if (typeof window === 'undefined') return;
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      window.console.log(error);
      return error;
    }
  }
  
  export function removeState({
    items,
    key,
  }: {
    items?: string[];
    key?: string;
  }) {
    try {
      if (items) items.forEach((item) => localStorage.removeItem(item));
      else if (key) localStorage.removeItem(key);
    } catch (error) {
      window.console.log(error);
    }
  }
  
  export function clearState() {
    try {
      localStorage.clear();
    } catch (error) {
      window.console.log(error);
    }
  }
  