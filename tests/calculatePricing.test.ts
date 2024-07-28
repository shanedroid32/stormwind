import { expect, test } from 'vitest';
import { calculatePricing } from '../src/util/calculatePricing';

test('price for 2 bays for 2 hours on a Sunday is $120', () => {
  expect(calculatePricing(new Date(), 2, 2, 11)).toBe(120);
});

test('price for 2 bays for 2 hours on a Saturday is $200', () => {
  expect(calculatePricing(new Date('2024/07/27'), 2, 2, 11)).toBe(160);
});

test('price for 3 bays for 2 hours on a Saturday is $480', () => {
  expect(calculatePricing(new Date('2024/07/27'), 3, 2, 11)).toBe(480);
});

test('price for 3 bays for 2 hours on a Monday is $384', () => {
  expect(calculatePricing(new Date('2024/07/29'), 3, 2, 11)).toBe(384);
});
