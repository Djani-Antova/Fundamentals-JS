function extractFile(path) {

    const dir = path.split('\\');
    const file = dir.pop();

    const lastComma = file.lastIndexOf('.')
    const fileName = file.substring(0, lastComma);
    const extension = file.substring(lastComma + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')