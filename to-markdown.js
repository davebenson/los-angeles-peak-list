"use strict";

const fs = require('fs');
const regions = JSON.parse(fs.readFileSync('la-list.json', 'utf8'));
regions.forEach((region) => {
  console.log(`# ${region.name}`);
  console.log('| Name | Elevation | Prominence | Map | Link |');
  console.log('| --- | --- | --- | --- | --- |');
  region.peaks.forEach((peak) => {
    console.log(`| ${peak.name} | ${peak.elevation} | ${peak.prominence} | ${peak.quadrangles.join(', ')} | [caltopo](http://http://caltopo.com/map.html#ll=${peak.latitude},${peak.longitude}&z=12&b=t) |`);
  });
});
