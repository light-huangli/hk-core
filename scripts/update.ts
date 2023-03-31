import fs from 'fs-extra';

import { generateMetadata, updateImport } from './update/';

async function run() {
  // 生成 meta 数据: meta.json
  const metadata = await generateMetadata();
  fs.writeJSON('meta/meta.json', metadata, { spaces: 2 });

  await Promise.all([updateImport(metadata)]);
}

run();
