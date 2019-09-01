const fs = require('fs');
const { extname } = require('path');
const DtsCreator = require('typed-css-modules').default;

const execute = async () => {
  const creator = new DtsCreator();

  const folderPath = `${__dirname}/css`;
  const files = fs.readdirSync(folderPath);

  for (const fileName of files) {
    const filePath = `${folderPath}/${fileName}`;

    if (extname(filePath) === '.css') {
      const content = await creator.create(filePath);
      await content.writeFile();

      console.log(`Wrote types for: ${filePath}`);
    }  
  }
}

execute();
