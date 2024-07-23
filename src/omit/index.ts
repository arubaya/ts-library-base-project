/**
 * Omits specified properties from an object.
 *
 * @template T - The type of the original object.
 * @template K - The keys to be omitted from the object.
 *
 * @param {T} object - The original object from which properties will be omitted.
 * @param {...Array<string | number | symbol>} paths - The properties to omit from the object.
 * @returns {Pick<T, Exclude<keyof T, K[number]>>} - A new object with the specified properties omitted.
 *
 * @description
 * This function creates a new object by omitting the specified properties from the original object.
 * It iterates over the keys of the original object and excludes the keys specified in the `paths` parameter.
 */
const omit = <
  T extends object,
  K extends Array<string | number | symbol | (string | number | symbol)[]>
>(
  object: T,
  ...paths: K
): Pick<T, Exclude<keyof T, K[number]>> => {
  const keysToOmit = paths.flat().map((key) => key.toString()); // Flatten and convert keys to strings
  return (Object.keys(object) as (keyof T)[]).reduce((result, key) => {
    if (!keysToOmit.includes(key.toString())) {
      // eslint-disable-next-line no-param-reassign
      (result as T)[key] = object[key];
    }
    return result;
  }, {} as T);
};

export default omit;
