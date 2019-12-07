import { getTimestamp } from ".";

/**
 * Get latest time
 * @param {Object} obj Object with Date properties
 */
export default obj =>
  Object.entries(obj).reduce((prev, curr) => {
    const prevTime = getTimestamp(prev);
    const currTime = getTimestamp(curr[1]);
    return currTime > prevTime ? curr : prev;
  });
