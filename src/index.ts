/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/* eslint-disable no-undef, @typescript-eslint/no-unused-vars, no-unused-vars */
import "./style.css";

import {data} from './data.js';
import {gawi} from './gawi.js'



// This example requires the Visualization library. Include the libraries=visualization
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

let map: google.maps.Map, heatmap: google.maps.visualization.HeatmapLayer;

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    zoom: 14.2,
    center: { lat: -2.9019809, lng: 112.3259529 },
    mapTypeId: "satellite"
  });

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPointsTest(),
    map: map
  });



  document
    .getElementById("toggle-heatmap")!
    .addEventListener("click", toggleHeatmap);
  document
    .getElementById("change-gradient")!
    .addEventListener("click", changeGradient);
  document
    .getElementById("change-opacity")!
    .addEventListener("click", changeOpacity);
  document
    .getElementById("change-radius")!
    .addEventListener("click", changeRadius);
}

function toggleHeatmap(): void {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient(): void {
  const gradient = [
    "rgba(0, 255, 255, 0)",
    "rgba(0, 255, 255, 1)",
    "rgba(0, 191, 255, 1)",
    "rgba(0, 127, 255, 1)"
  ];

  heatmap.set("gradient", heatmap.get("gradient") ? null : gradient);
}

function changeRadius(): void {
  console.log('tesss')
  heatmap.set("radius", heatmap.get("radius") ? null : 18);
}

function changeOpacity(): void {
  heatmap.set("opacity", heatmap.get("opacity") ? null : 0.5);
}


// mengambil titik tengah
// function getPoints() {

//   return [new google.maps.LatLng(-2.89853295, 112.3197654),
//     new google.maps.LatLng(-2.898546, 112.31958465),
//     new google.maps.LatLng(-2.89496775, 112.31695099999999),
//     new google.maps.LatLng(-2.89364695,112.31679255),
//     new google.maps.LatLng(-2.9006356, 112.32617705),
//     new google.maps.LatLng( -2.9006771000000002, 112.32563335)]
  
// }



// mengambil titik awal/akhir
// function getPoints() {
//   return [
//     new google.maps.LatLng(-2.893642, 112.3170515),
//     new google.maps.LatLng(-2.8963125, 112.3169192),
//     new google.maps.LatLng(-2.8980188,112.3196067),
//     new google.maps.LatLng(-2.8990332,112.3195407),
//     new google.maps.LatLng(-2.8993505,112.3255331),
//     new google.maps.LatLng(-2.9019533,112.3255119)
//   ]
// }

// semua titik ditampilkan
function getPoints() {
  return data.map(dt => {
    return new google.maps.LatLng(dt.USER_LAT,dt.USER_LONG)
   })
}


// data all gawi oct-nov
function getPointsTest() {
  return gawi.map(dt => {
    return new google.maps.LatLng(dt.lat,dt.long)
   })
}


export { initMap };
