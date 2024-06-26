// 음식을 주문하는 상황
function oredrFood(callback){
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food,callback){
setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
}, 2000)
}

function freezeFood(food,callback){
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500);
}

oredrFood((food)=>{
  console.log(food);

  cooldownFood(food, (cooldownedFood)=>{
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    })
  });
});

console.log("로그인 기능 생성");g