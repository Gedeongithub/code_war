const getSize = (width, height, length) => {
    let surfaceArea = 2 * (length * width + length * height + width * height);
     let volume = length * width * height;
     return [surfaceArea, volume];
   }