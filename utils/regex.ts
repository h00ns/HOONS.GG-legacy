// 숫자를 (,)형 string으로 반환
export const returnNumberWithComma = (value: number) => {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
