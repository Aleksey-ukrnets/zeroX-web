export const scores = (trend_score,icon) => {
  let finish = [];
  
//   console.log(fire)
  for (let i = 0; i < trend_score; i++) {
    finish.push(icon);
  }
  return finish.join('');
};
