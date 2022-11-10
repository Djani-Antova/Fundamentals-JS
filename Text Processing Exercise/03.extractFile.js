function extractFile(string) {

    let stringArr = string.split("\\");
    let lastSection = stringArr[(stringArr.length - 1)];

    let indexOfLastDot = lastSection.lastIndexOf(".");
    let name = lastSection.substring(0, indexOfLastDot);
    let extension = lastSection.substring(indexOfLastDot + 1);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
    
}

extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')