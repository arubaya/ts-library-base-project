import omit from '..';

describe('omit', () => {
  it('should omit a single key from an object', () => {
    const object = { a: 1, b: 2, c: 3 };
    const result = omit(object, 'b');
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it('should omit multiple keys from an object', () => {
    const object = { a: 1, b: 2, c: 3, d: 4 };
    const result = omit(object, 'b', 'd');
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it('should return the original object if no keys are omitted', () => {
    const object = { a: 1, b: 2, c: 3 };
    const result = omit(object);
    expect(result).toEqual(object);
  });

  it('should return an empty object if all keys are omitted', () => {
    const object = { a: 1, b: 2 };
    const result = omit(object, 'a', 'b');
    expect(result).toEqual({});
  });

  it('should handle non-existent keys gracefully', () => {
    const object = { a: 1, b: 2 };
    const result = omit(object, 'c');
    expect(result).toEqual(object);
  });

  it('should handle symbols as keys', () => {
    const symbolKey = Symbol('key');
    const object = { a: 1, [symbolKey]: 2 };
    const result = omit(object, symbolKey);
    expect(result).toEqual({ a: 1 });
  });

  it('should handle numeric keys', () => {
    const object = { 1: 'a', 2: 'b', 3: 'c' };
    const result = omit(object, 2);
    expect(result).toEqual({ 1: 'a', 3: 'c' });
  });

  it('should handle keys as an array', () => {
    const object = { a: 1, b: 2, c: 3, d: 4 };
    const keysArray = ['b', 'd'];
    const result = omit(object, ...keysArray);
    expect(result).toEqual({ a: 1, c: 3 });
  });
});
