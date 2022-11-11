export const setData = (
  name: string,
  data: Record<string, unknown> | string
) => {
  const convertedData = typeof data === 'string' ? data : JSON.stringify(data);
  localStorage.setItem(name, convertedData);
};

export const getData = (name: string) => {
  const data = localStorage.getItem(name);
  if (!data) return '';
  try {
    return JSON.parse(data);
  } catch (_e) {
    return data;
  }
};

export const deleteData = (name: string) => {
  localStorage.removeItem(name);
};
