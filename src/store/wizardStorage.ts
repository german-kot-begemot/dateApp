const KEY = 'create-card-draft';

export const wizardStorage = {
  save(data: unknown) {
    localStorage.setItem(KEY, JSON.stringify(data));
  },

  load<T>() {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as T) : null;
  },

  clear() {
    localStorage.removeItem(KEY);
  },
};
