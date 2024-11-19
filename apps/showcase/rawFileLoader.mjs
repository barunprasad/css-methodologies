import fs from 'fs';

export default function loader() {
  const callback = this.async();

  fs.readFile(this.resourcePath, 'utf8', (err, content) => {
    if (err) {
      return callback(err);
    }
    callback(null, `export default ${JSON.stringify(content)};`);
  });
}
