/* eslint-disable camelcase */

// Importation des fonctions à tester
import {
  my_alpha_number_t,
  sum,
  my_size_alpha_t,
  my_display_alpha_t,
  my_array_alpha_t,
  my_is_posi_neg_t,
  fibo,
  my_display_alpha_reverse_t,
  my_length_array_t,
  my_display_unicode_t,
  quickSort,
  tspBrutForce,
  resoudreSudoku
} from '../src/unitTest.class';

describe('Unit tests for my_alpha_number_t', () => {
  it('Should return "123" for the argument "123"', () => {
    expect(my_alpha_number_t(123)).toBe('123');
  });
});

describe('Unit tests for sum', () => {
  it('Should return the sum of 2 and 3', () => {
    expect(sum(2, 3)).toBe(5);
  });

  it('Should return 0 if one of the arguments is not a number', () => {
    expect(sum(2, '3')).toBe(0);
    expect(sum('2', 3)).toBe(0);
  });
});

describe('Unit tests for my_size_alpha_t', () => {
  it('Should return 0 for an empty string', () => {
    expect(my_size_alpha_t('')).toBe(0);
  });

  it('Should return 0 when called without arguments', () => {
    expect(my_size_alpha_t()).toBe(0);
  });

  it('Should return the correct length for a non-empty string', () => {
    expect(my_size_alpha_t('bonjour')).toBe(7);
  });

  it('Should return 0 for a non-string argument', () => {
    expect(my_size_alpha_t(123)).toBe(0);
  });
});

describe('Unit tests for my_display_alpha_t', () => {
  it('Should return the full alphabet', () => {
    expect(my_display_alpha_t()).toBe('abcdefghijklmnopqrstuvwxyz');
  });
});

describe('Unit tests for my_array_alpha_t', () => {
  it('Should return an array of characters for "bonjour"', () => {
    expect(my_array_alpha_t('bonjour')).toEqual(['b', 'o', 'n', 'j', 'o', 'u', 'r']);
  });

  it('Should return an empty array for an empty string', () => {
    expect(my_array_alpha_t('')).toEqual([]);
  });
});

describe('Unit tests for my_is_posi_neg_t', () => {
  it('Should return "POSITIF" for a positive number', () => {
    expect(my_is_posi_neg_t(5)).toBe('POSITIF');
  });

  it('Should return "NEGATIVE" for a negative number or zero', () => {
    expect(my_is_posi_neg_t(-5)).toBe('NEGATIVE');
    expect(my_is_posi_neg_t(0)).toBe('NEGATIVE');
  });
});

describe('Unit tests for fibo', () => {
  it('Should return 1 for indices 1 and 2', () => {
    expect(fibo(1)).toBe(1);
    expect(fibo(2)).toBe(1);
  });

  it('Should return the correct term for an index greater than 2', () => {
    expect(fibo(3)).toBe(2);
    expect(fibo(4)).toBe(3);
    expect(fibo(5)).toBe(5);
  });

  it('Should return 0 for indices less than or equal to 0', () => {
    expect(fibo(0)).toBe(0);
    expect(fibo(-1)).toBe(0);
  });
});

describe('Unit tests for my_display_alpha_reverse_t', () => {
  it('Should return the reversed alphabet', () => {
    expect(my_display_alpha_reverse_t()).toBe('zyxwvutsrqponmlkjihgfedcba');
  });
});

describe('Unit tests for my_length_array_t', () => {
  it('Should return 0 for an empty array', () => {
    expect(my_length_array_t([])).toBe(0);
  });

  it('Should return the correct length for a non-empty array', () => {
    expect(my_length_array_t([1, 2, 3])).toBe(3);
  });
});

describe('Unit tests for my_display_unicode_t', () => {
  it('Should return characters for valid decimal codes', () => {
    const input = [65, 66, 67, 97, 98, 99, 48, 49, 50, 32];
    const expected = 'ABCabc012 ';
    expect(my_display_unicode_t(input)).toBe(expected);
  });

  it('Should handle an empty array', () => {
    const input = [];
    const expected = '';
    expect(my_display_unicode_t(input)).toBe(expected);
  });

  it('Should handle an array with mixed valid and invalid codes', () => {
    const input = [65, 100, 97, 123, 50, 32, 300];
    const expected = 'Ada2 ';
    expect(my_display_unicode_t(input)).toBe(expected);
  });

  it('Should return a string with only valid characters', () => {
    const input = [48, 49, 50, 51, 65, 66, 67, 97, 98, 99];
    const expected = '0123ABCabc';
    expect(my_display_unicode_t(input)).toBe(expected);
  });

  it('Should handle characters outside valid ranges and ignore them', () => {
    const input = [1000, 123, -1, 65, 32];
    const expected = 'A '; // Only 'A' (65) and space (32) are valid
    expect(my_display_unicode_t(input)).toBe(expected);
  });
});

describe('Unit tests for quickSort', () => {
  it('Should sort an array of integers', () => {
    expect(quickSort([3, 1, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });

  it('Should return a sorted array with a single element', () => {
    expect(quickSort([1])).toEqual([1]);
  });

  it('Should return an empty array if no elements are present', () => {
    expect(quickSort([])).toEqual([]);
  });
});

describe('Unit tests for tspBrutForce', () => {
  it('Should return the best permutation and the minimum distance', () => {
    const distances = {
      A: { B: 10, C: 15 },
      B: { A: 10, C: 25 },
      C: { A: 15, B: 25 }
    };

    const result = tspBrutForce(distances);
    expect(result.minDistance).toBe(50);
    expect(result.meilleurePermutation).toEqual(['A', 'B', 'C']);
  });
});

describe('Unit tests for resoudreSudoku', () => {
  it('Should solve a valid Sudoku puzzle', () => {
    const grille = [
      [5, 3, 0, 0, 7, 0, 0, 0, 0],
      [6, 0, 0, 1, 9, 5, 0, 0, 0],
      [0, 9, 8, 0, 0, 0, 0, 6, 0],
      [8, 0, 0, 0, 6, 0, 0, 0, 3],
      [4, 0, 0, 8, 0, 3, 0, 0, 1],
      [7, 0, 0, 0, 2, 0, 0, 0, 6],
      [0, 6, 0, 0, 0, 0, 2, 8, 0],
      [0, 0, 0, 4, 1, 9, 0, 0, 5],
      [0, 0, 0, 0, 8, 0, 0, 7, 9]
    ];

    const result = resoudreSudoku(grille);
    expect(result).toBe(true);
  });
});
