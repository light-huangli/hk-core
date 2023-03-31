import { expect, describe, it } from 'vitest';
import GlobalStorage from '.';

describe('GlobalStorage test', () => {
  it('The device should return 1313123123213213', () => {
    const Storage: GlobalStorage = GlobalStorage.instance('hk-core');
    console.log(Storage);
    Storage.setItem('test', '1313123123213213');
    const testInput: any = Storage.getItem('test');
    expect(testInput).toEqual('1313123123213213');
  });
});
