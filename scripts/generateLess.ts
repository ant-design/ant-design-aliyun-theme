import fs from 'fs';
import { join } from 'path';
import vars from '..';

let lessContent = '// Generated by @ant-design/aliyun-theme\n\n';

Object.keys(vars).forEach((key: string): void => {
  const value = (vars as any)[key];
  lessContent += `${key}: ${value};\n`;
});

fs.writeFileSync(join(process.cwd(), 'index.less'), lessContent);
console.log('✨ Generated index.less successfully!');
