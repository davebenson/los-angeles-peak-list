"use strict";

const fs = require('fs');
const regions = JSON.parse(fs.readFileSync('la-list.json', 'utf8'));
regions.forEach((region) => {
  console.log(`# ${region.name}`);
  console.log('| Name | Elevation | Prominence | Map | Links |');
  console.log('| --- | --- | --- | --- | --- |');
  region.peaks.forEach((peak) => {
    let links = [];
    if (peak.latitude)
      links.push(["caltopo", `http://caltopo.com/map.html#ll=${peak.latitude},${peak.longitude}&z=12&b=t`]);
    if (peak.hps)
      links.push(["hps", `http://www.hundredpeaks.org/guides/${peak.hps.section}${peak.hps.peak}.htm`]);
    let linksStr = links.map((info) => {
      return `[${info[0]}](${info[1]})`;
    }).join(', ');
    console.log(`| ${peak.name} | ${peak.elevation}' | ${peak.prominence}' | ${peak.quadrangles.join(', ')} | ${linksStr} |`);
  });
});
