import SunCalc from "suncalc";

export default (time, latitude, longitude) =>
  (({ nadir, dawn, sunriseEnd, solarNoon, sunsetStart, dusk }) => ({
    nadir,
    dawn,
    sunriseEnd,
    solarNoon,
    sunsetStart,
    dusk
  }))(SunCalc.getTimes(time, latitude, longitude));
