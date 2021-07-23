const localStorageData = {

  // 存储数据
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  // 获取数据
  get(key) {
    try {
        const value = localStorage.getItem(key);
        if (value === null || value === undefined || value === "") {
            return null;
        }
        return JSON.parse(localStorage.getItem(key));
    } catch (err) {
        return null
    }
  },
  
  // 删除数据
  remove(key) {
      localStorage.removeItem(key);
  }
}

export default localStorageData;