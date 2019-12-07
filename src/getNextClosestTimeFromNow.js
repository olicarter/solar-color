import { getEarliestTime, getSolarTimes, getTimestamp } from ".";

/**
 * Get next closest time from now
 * @param {Object} obj Object with Date properties
 */
export default obj => {
  const now = Date.now();

  return Object.entries(obj).reduce((prev, curr) => {
    const prevTime = getTimestamp(prev);
    const currTime = getTimestamp(curr[1]);
    if (currTime - now < 0 && prevTime - now < 0) {
      const tomorrow = getSolarTimes(
        new Date().setDate(new Date().getDate() + 1),
        51.5074,
        0.1278
      );
      return getEarliestTime(tomorrow);
    }
    return currTime < prevTime ? curr : prev;
  });
};
