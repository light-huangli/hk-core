import { join } from 'path';
import fs from 'fs-extra';
import type { PackageIndexes } from '../../meta/types';

export async function updateImport({ packages, functions }: PackageIndexes) {
  for (const { name, dir } of Object.values(packages)) {
    const imports = functions
      .filter((i) => i.package === name)
      .map((f) => f.name)
      .sort()
      .map((name) => `export * from './${name}'`);

    // 在 @hk-core/core 中自动导出 @hk-core/shared
    name === 'core' && imports.push("export * from '@hk-core/shared'");

    await fs.writeFile(join(dir, 'index.ts'), `${imports.join('\n')}\n`);
  }
}
