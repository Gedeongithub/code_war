function countVegetables(str){
    const validVegetables = [
    "cabbage", "carrot", "celery", "cucumber", "mushroom",
    "onion", "pepper", "potato", "tofu", "turnip"
  ];
  let vegList = str.split(' ').filter(item=>validVegetables.includes(item));
  
  const countMap={};
  for(let veg of vegList){
      countMap[veg]=(countMap[veg] || 0) + 1;
      
  }
  const result = Object.entries(countMap).map(([veg,count])=>[count,veg]);
  result.sort((a,b)=>{
      if(b[1]!==a[1]){
          return b[0]-a[0];
      }
      return b[1].localeCompare(a[1]);
  });
  return result;
}
console.log(countVegetables("carrot carrot tofu onion pepper potato cabbage cucumber mushroom banana onion"))