import { getLatestTime } from './getLatestTime';
import { getSolarTimes } from './getSolarTimes';
import { getTimestamp } from './getTimestamp';

/**
 * Get previous closest time from now
 * @param {Object} obj Object with Date properties
 */
export const getPreviousClosestTimeFromNow = obj => {
  const now = Date.now();

  return Object.entries(obj).reduce((prev, curr) => {
    const prevTime = getTimestamp(prev);
    const currTime = getTimestamp(curr[1]);
    if (currTime - now > 0 && prevTime - now > 0) {
      const yesterday = getSolarTimes(
        new Date().setDate(new Date().getDate() - 1),
        51.5074,
        0.1278
      );
      return getLatestTime(yesterday);
    }
    return currTime > prevTime ? curr : prev;
  });
};
