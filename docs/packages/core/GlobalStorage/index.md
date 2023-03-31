# GlobalStorage

GlobalStorage全局缓存事件封装

## Usage

```ts
import { GlobalStorage } from '@hk-core/core';

// 单例模式，传入缓存前缀 初始化
const Storage = GlobalStorage.instance('hk-core');

// 添加缓存
Storage.setItem('test', 123123123)

// 获取缓存
Storage.setItem('test')

// 移除单个缓存
Storage.remove('test')

// 清楚所有缓存
Storage.clear()
```




