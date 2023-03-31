/**
 * window.localStorage 浏览器永久缓存
 * @method set 设置永久缓存
 * @method get 获取永久缓存
 * @method remove 移除永久缓存
 * @method clear 移除全部永久缓存
 */
class GlobalStorage {
  static projectEn: string;

  private constructor() {}
  private static _storageUtil: GlobalStorage;

  static instance(projectEn: string): GlobalStorage {
    if (this._storageUtil === undefined) {
      this._storageUtil = new GlobalStorage();
      GlobalStorage.projectEn = projectEn;
    }

    return this._storageUtil;
  }

  // 设置永久缓存
  setItem(key: String, val: any) {
    window.localStorage.setItem(`${key}-${GlobalStorage.projectEn}`, JSON.stringify(val));
  }
  // 获取永久缓存
  getItem(key: String) {
    let json: any = window.localStorage.getItem(`${key}-${GlobalStorage.projectEn}`);
    return JSON.parse(json);
  }
  // 移除永久缓存
  remove(key: String) {
    window.localStorage.removeItem(`${key}-${GlobalStorage.projectEn}`);
  }
  // 移除全部永久缓存
  clear() {
    window.localStorage.clear();
  }
}

export default GlobalStorage;
