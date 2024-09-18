
const {areaCirculo, primo } = require('./PrimerParcial');

test('Caso de prueba 1: Radio positivo  radio = 5', () => {
  expect(areaCirculo(5)).toBe(78.539816339744830961566084581988);
});
test('Caso de prueba 2: Radio cero      radio = 0', () => {
  expect(areaCirculo(0)).toBe(0);
});
test('Caso de prueba 3: Radio negativo  radio = -3', () => {
  expect(areaCirculo(-3)).toBe(NaN);
});
test('Caso de prueba 4: Radio grande    radio = 1000', () => {
  expect(areaCirculo(1000)).toBe(3141592.6535897932384626433832795);
});
test('Caso de prueba 5: Radio decimal   radio decimal = 3.5', () => {
  expect(areaCirculo(3.5)).toBe(38.484510006474964171167381445174);
});


test('Caso de prueba 1: Número primo      7', () => {
  expect(primo(7)).toBe(true);
});


test('Caso de prueba 2: Número no primo   6', () => {
  expect(primo(6)).toBe(false);
});


test('Caso de prueba 3: Número negativo   -3', () => {
  expect(primo(-3)).toBe(NaN);
});


test('Caso de prueba 4: Número grande     997', () => {
  expect(primo(997)).toBe(true);
});


test('Caso de prueba 5: Número cero    0', () => {
  expect(primo(0)).toBe(true);
});


