function hardWords(input) {
    let text = input[0];
    let words = input[1];
    let dashes = [];
  
    for (let word of words) {
      let dash = "_".repeat(word.length);
      dashes.push(dash);
    }
  
    words.sort((a, b) => b.length - a.length);
    dashes.sort((a, b) => b.length - a.length);
  
    for (let i = 0; i < dashes.length; i++) {
      text = text.replace(dashes[i], words[i]);
    }
    console.log(text);
  }
  hardWords([
    "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
    ["pie", "bring", "glad", "During", "amazing", "pharmacist", "sprained"],
  ]);