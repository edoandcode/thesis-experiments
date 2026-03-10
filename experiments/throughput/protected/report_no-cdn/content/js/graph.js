/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 190.0, "minX": 0.0, "maxY": 1159.0, "series": [{"data": [[0.0, 190.0], [0.1, 190.0], [0.2, 190.0], [0.3, 190.0], [0.4, 190.0], [0.5, 190.0], [0.6, 190.0], [0.7, 190.0], [0.8, 190.0], [0.9, 190.0], [1.0, 190.0], [1.1, 190.0], [1.2, 190.0], [1.3, 190.0], [1.4, 191.0], [1.5, 191.0], [1.6, 191.0], [1.7, 191.0], [1.8, 191.0], [1.9, 191.0], [2.0, 191.0], [2.1, 191.0], [2.2, 191.0], [2.3, 191.0], [2.4, 191.0], [2.5, 191.0], [2.6, 191.0], [2.7, 191.0], [2.8, 191.0], [2.9, 191.0], [3.0, 191.0], [3.1, 191.0], [3.2, 191.0], [3.3, 191.0], [3.4, 191.0], [3.5, 191.0], [3.6, 191.0], [3.7, 191.0], [3.8, 191.0], [3.9, 191.0], [4.0, 191.0], [4.1, 191.0], [4.2, 191.0], [4.3, 191.0], [4.4, 191.0], [4.5, 191.0], [4.6, 191.0], [4.7, 191.0], [4.8, 191.0], [4.9, 191.0], [5.0, 191.0], [5.1, 191.0], [5.2, 192.0], [5.3, 192.0], [5.4, 192.0], [5.5, 192.0], [5.6, 192.0], [5.7, 192.0], [5.8, 192.0], [5.9, 192.0], [6.0, 192.0], [6.1, 192.0], [6.2, 192.0], [6.3, 192.0], [6.4, 192.0], [6.5, 192.0], [6.6, 192.0], [6.7, 192.0], [6.8, 192.0], [6.9, 192.0], [7.0, 192.0], [7.1, 192.0], [7.2, 192.0], [7.3, 192.0], [7.4, 192.0], [7.5, 192.0], [7.6, 192.0], [7.7, 192.0], [7.8, 192.0], [7.9, 192.0], [8.0, 192.0], [8.1, 192.0], [8.2, 192.0], [8.3, 192.0], [8.4, 192.0], [8.5, 192.0], [8.6, 192.0], [8.7, 192.0], [8.8, 192.0], [8.9, 192.0], [9.0, 192.0], [9.1, 192.0], [9.2, 192.0], [9.3, 192.0], [9.4, 192.0], [9.5, 192.0], [9.6, 192.0], [9.7, 192.0], [9.8, 192.0], [9.9, 192.0], [10.0, 192.0], [10.1, 192.0], [10.2, 192.0], [10.3, 192.0], [10.4, 192.0], [10.5, 192.0], [10.6, 192.0], [10.7, 192.0], [10.8, 192.0], [10.9, 192.0], [11.0, 192.0], [11.1, 192.0], [11.2, 192.0], [11.3, 192.0], [11.4, 192.0], [11.5, 192.0], [11.6, 192.0], [11.7, 192.0], [11.8, 192.0], [11.9, 192.0], [12.0, 192.0], [12.1, 192.0], [12.2, 192.0], [12.3, 192.0], [12.4, 192.0], [12.5, 192.0], [12.6, 192.0], [12.7, 192.0], [12.8, 192.0], [12.9, 192.0], [13.0, 192.0], [13.1, 192.0], [13.2, 192.0], [13.3, 192.0], [13.4, 192.0], [13.5, 192.0], [13.6, 192.0], [13.7, 193.0], [13.8, 193.0], [13.9, 193.0], [14.0, 193.0], [14.1, 193.0], [14.2, 193.0], [14.3, 193.0], [14.4, 193.0], [14.5, 193.0], [14.6, 193.0], [14.7, 193.0], [14.8, 193.0], [14.9, 193.0], [15.0, 193.0], [15.1, 193.0], [15.2, 193.0], [15.3, 193.0], [15.4, 193.0], [15.5, 193.0], [15.6, 193.0], [15.7, 193.0], [15.8, 193.0], [15.9, 193.0], [16.0, 193.0], [16.1, 193.0], [16.2, 193.0], [16.3, 193.0], [16.4, 193.0], [16.5, 193.0], [16.6, 193.0], [16.7, 193.0], [16.8, 193.0], [16.9, 193.0], [17.0, 193.0], [17.1, 193.0], [17.2, 193.0], [17.3, 193.0], [17.4, 193.0], [17.5, 193.0], [17.6, 193.0], [17.7, 193.0], [17.8, 193.0], [17.9, 193.0], [18.0, 193.0], [18.1, 193.0], [18.2, 193.0], [18.3, 193.0], [18.4, 193.0], [18.5, 193.0], [18.6, 193.0], [18.7, 193.0], [18.8, 193.0], [18.9, 193.0], [19.0, 193.0], [19.1, 193.0], [19.2, 193.0], [19.3, 193.0], [19.4, 193.0], [19.5, 193.0], [19.6, 193.0], [19.7, 193.0], [19.8, 193.0], [19.9, 193.0], [20.0, 193.0], [20.1, 193.0], [20.2, 193.0], [20.3, 193.0], [20.4, 193.0], [20.5, 193.0], [20.6, 193.0], [20.7, 193.0], [20.8, 193.0], [20.9, 193.0], [21.0, 193.0], [21.1, 193.0], [21.2, 193.0], [21.3, 193.0], [21.4, 193.0], [21.5, 193.0], [21.6, 193.0], [21.7, 193.0], [21.8, 193.0], [21.9, 193.0], [22.0, 193.0], [22.1, 193.0], [22.2, 193.0], [22.3, 193.0], [22.4, 193.0], [22.5, 193.0], [22.6, 193.0], [22.7, 193.0], [22.8, 193.0], [22.9, 193.0], [23.0, 193.0], [23.1, 193.0], [23.2, 193.0], [23.3, 193.0], [23.4, 193.0], [23.5, 193.0], [23.6, 193.0], [23.7, 193.0], [23.8, 194.0], [23.9, 194.0], [24.0, 194.0], [24.1, 194.0], [24.2, 194.0], [24.3, 194.0], [24.4, 194.0], [24.5, 194.0], [24.6, 194.0], [24.7, 194.0], [24.8, 194.0], [24.9, 194.0], [25.0, 194.0], [25.1, 194.0], [25.2, 194.0], [25.3, 194.0], [25.4, 194.0], [25.5, 194.0], [25.6, 194.0], [25.7, 194.0], [25.8, 194.0], [25.9, 194.0], [26.0, 194.0], [26.1, 194.0], [26.2, 194.0], [26.3, 194.0], [26.4, 194.0], [26.5, 194.0], [26.6, 194.0], [26.7, 194.0], [26.8, 194.0], [26.9, 194.0], [27.0, 194.0], [27.1, 194.0], [27.2, 194.0], [27.3, 194.0], [27.4, 194.0], [27.5, 194.0], [27.6, 194.0], [27.7, 194.0], [27.8, 194.0], [27.9, 194.0], [28.0, 194.0], [28.1, 194.0], [28.2, 194.0], [28.3, 194.0], [28.4, 194.0], [28.5, 194.0], [28.6, 194.0], [28.7, 194.0], [28.8, 194.0], [28.9, 194.0], [29.0, 194.0], [29.1, 194.0], [29.2, 194.0], [29.3, 194.0], [29.4, 194.0], [29.5, 194.0], [29.6, 194.0], [29.7, 194.0], [29.8, 194.0], [29.9, 194.0], [30.0, 194.0], [30.1, 194.0], [30.2, 194.0], [30.3, 194.0], [30.4, 194.0], [30.5, 194.0], [30.6, 194.0], [30.7, 194.0], [30.8, 194.0], [30.9, 194.0], [31.0, 194.0], [31.1, 194.0], [31.2, 194.0], [31.3, 194.0], [31.4, 194.0], [31.5, 194.0], [31.6, 194.0], [31.7, 194.0], [31.8, 194.0], [31.9, 194.0], [32.0, 194.0], [32.1, 194.0], [32.2, 194.0], [32.3, 194.0], [32.4, 194.0], [32.5, 194.0], [32.6, 194.0], [32.7, 194.0], [32.8, 194.0], [32.9, 194.0], [33.0, 194.0], [33.1, 194.0], [33.2, 194.0], [33.3, 194.0], [33.4, 194.0], [33.5, 194.0], [33.6, 194.0], [33.7, 194.0], [33.8, 194.0], [33.9, 194.0], [34.0, 194.0], [34.1, 194.0], [34.2, 194.0], [34.3, 194.0], [34.4, 194.0], [34.5, 194.0], [34.6, 194.0], [34.7, 194.0], [34.8, 194.0], [34.9, 194.0], [35.0, 194.0], [35.1, 194.0], [35.2, 195.0], [35.3, 195.0], [35.4, 195.0], [35.5, 195.0], [35.6, 195.0], [35.7, 195.0], [35.8, 195.0], [35.9, 195.0], [36.0, 195.0], [36.1, 195.0], [36.2, 195.0], [36.3, 195.0], [36.4, 195.0], [36.5, 195.0], [36.6, 195.0], [36.7, 195.0], [36.8, 195.0], [36.9, 195.0], [37.0, 195.0], [37.1, 195.0], [37.2, 195.0], [37.3, 195.0], [37.4, 195.0], [37.5, 195.0], [37.6, 195.0], [37.7, 195.0], [37.8, 195.0], [37.9, 195.0], [38.0, 195.0], [38.1, 195.0], [38.2, 195.0], [38.3, 195.0], [38.4, 195.0], [38.5, 195.0], [38.6, 195.0], [38.7, 195.0], [38.8, 195.0], [38.9, 195.0], [39.0, 195.0], [39.1, 195.0], [39.2, 195.0], [39.3, 195.0], [39.4, 195.0], [39.5, 195.0], [39.6, 195.0], [39.7, 195.0], [39.8, 195.0], [39.9, 195.0], [40.0, 195.0], [40.1, 195.0], [40.2, 195.0], [40.3, 195.0], [40.4, 195.0], [40.5, 195.0], [40.6, 195.0], [40.7, 195.0], [40.8, 195.0], [40.9, 195.0], [41.0, 195.0], [41.1, 195.0], [41.2, 195.0], [41.3, 195.0], [41.4, 195.0], [41.5, 195.0], [41.6, 195.0], [41.7, 195.0], [41.8, 195.0], [41.9, 195.0], [42.0, 195.0], [42.1, 195.0], [42.2, 195.0], [42.3, 195.0], [42.4, 195.0], [42.5, 195.0], [42.6, 195.0], [42.7, 195.0], [42.8, 195.0], [42.9, 195.0], [43.0, 195.0], [43.1, 195.0], [43.2, 195.0], [43.3, 195.0], [43.4, 195.0], [43.5, 195.0], [43.6, 195.0], [43.7, 195.0], [43.8, 195.0], [43.9, 195.0], [44.0, 195.0], [44.1, 195.0], [44.2, 195.0], [44.3, 195.0], [44.4, 195.0], [44.5, 195.0], [44.6, 195.0], [44.7, 195.0], [44.8, 195.0], [44.9, 195.0], [45.0, 195.0], [45.1, 195.0], [45.2, 195.0], [45.3, 195.0], [45.4, 195.0], [45.5, 195.0], [45.6, 195.0], [45.7, 195.0], [45.8, 195.0], [45.9, 195.0], [46.0, 195.0], [46.1, 195.0], [46.2, 195.0], [46.3, 195.0], [46.4, 195.0], [46.5, 195.0], [46.6, 195.0], [46.7, 195.0], [46.8, 195.0], [46.9, 195.0], [47.0, 195.0], [47.1, 195.0], [47.2, 195.0], [47.3, 195.0], [47.4, 195.0], [47.5, 195.0], [47.6, 195.0], [47.7, 195.0], [47.8, 195.0], [47.9, 195.0], [48.0, 195.0], [48.1, 195.0], [48.2, 195.0], [48.3, 195.0], [48.4, 195.0], [48.5, 195.0], [48.6, 195.0], [48.7, 195.0], [48.8, 195.0], [48.9, 195.0], [49.0, 195.0], [49.1, 195.0], [49.2, 195.0], [49.3, 195.0], [49.4, 195.0], [49.5, 195.0], [49.6, 195.0], [49.7, 195.0], [49.8, 195.0], [49.9, 195.0], [50.0, 195.0], [50.1, 195.0], [50.2, 195.0], [50.3, 195.0], [50.4, 195.0], [50.5, 195.0], [50.6, 195.0], [50.7, 195.0], [50.8, 195.0], [50.9, 195.0], [51.0, 195.0], [51.1, 195.0], [51.2, 195.0], [51.3, 195.0], [51.4, 195.0], [51.5, 195.0], [51.6, 195.0], [51.7, 195.0], [51.8, 195.0], [51.9, 195.0], [52.0, 195.0], [52.1, 195.0], [52.2, 195.0], [52.3, 195.0], [52.4, 195.0], [52.5, 195.0], [52.6, 195.0], [52.7, 195.0], [52.8, 195.0], [52.9, 195.0], [53.0, 195.0], [53.1, 195.0], [53.2, 195.0], [53.3, 195.0], [53.4, 195.0], [53.5, 195.0], [53.6, 195.0], [53.7, 195.0], [53.8, 195.0], [53.9, 195.0], [54.0, 195.0], [54.1, 195.0], [54.2, 195.0], [54.3, 195.0], [54.4, 195.0], [54.5, 195.0], [54.6, 195.0], [54.7, 195.0], [54.8, 195.0], [54.9, 195.0], [55.0, 195.0], [55.1, 195.0], [55.2, 195.0], [55.3, 195.0], [55.4, 196.0], [55.5, 196.0], [55.6, 196.0], [55.7, 196.0], [55.8, 196.0], [55.9, 196.0], [56.0, 196.0], [56.1, 196.0], [56.2, 196.0], [56.3, 196.0], [56.4, 196.0], [56.5, 196.0], [56.6, 196.0], [56.7, 196.0], [56.8, 196.0], [56.9, 196.0], [57.0, 196.0], [57.1, 196.0], [57.2, 196.0], [57.3, 196.0], [57.4, 196.0], [57.5, 196.0], [57.6, 196.0], [57.7, 196.0], [57.8, 196.0], [57.9, 196.0], [58.0, 196.0], [58.1, 196.0], [58.2, 196.0], [58.3, 196.0], [58.4, 196.0], [58.5, 196.0], [58.6, 196.0], [58.7, 196.0], [58.8, 196.0], [58.9, 196.0], [59.0, 196.0], [59.1, 196.0], [59.2, 196.0], [59.3, 196.0], [59.4, 196.0], [59.5, 196.0], [59.6, 196.0], [59.7, 196.0], [59.8, 196.0], [59.9, 196.0], [60.0, 196.0], [60.1, 196.0], [60.2, 196.0], [60.3, 196.0], [60.4, 196.0], [60.5, 196.0], [60.6, 196.0], [60.7, 196.0], [60.8, 196.0], [60.9, 196.0], [61.0, 196.0], [61.1, 196.0], [61.2, 196.0], [61.3, 196.0], [61.4, 196.0], [61.5, 196.0], [61.6, 196.0], [61.7, 196.0], [61.8, 196.0], [61.9, 196.0], [62.0, 196.0], [62.1, 196.0], [62.2, 196.0], [62.3, 196.0], [62.4, 196.0], [62.5, 196.0], [62.6, 196.0], [62.7, 196.0], [62.8, 196.0], [62.9, 196.0], [63.0, 196.0], [63.1, 196.0], [63.2, 196.0], [63.3, 196.0], [63.4, 196.0], [63.5, 196.0], [63.6, 196.0], [63.7, 196.0], [63.8, 196.0], [63.9, 196.0], [64.0, 196.0], [64.1, 196.0], [64.2, 196.0], [64.3, 196.0], [64.4, 196.0], [64.5, 196.0], [64.6, 196.0], [64.7, 196.0], [64.8, 196.0], [64.9, 196.0], [65.0, 196.0], [65.1, 196.0], [65.2, 196.0], [65.3, 196.0], [65.4, 196.0], [65.5, 196.0], [65.6, 196.0], [65.7, 196.0], [65.8, 196.0], [65.9, 196.0], [66.0, 196.0], [66.1, 196.0], [66.2, 196.0], [66.3, 196.0], [66.4, 196.0], [66.5, 196.0], [66.6, 196.0], [66.7, 196.0], [66.8, 196.0], [66.9, 196.0], [67.0, 196.0], [67.1, 196.0], [67.2, 196.0], [67.3, 196.0], [67.4, 196.0], [67.5, 196.0], [67.6, 196.0], [67.7, 196.0], [67.8, 196.0], [67.9, 196.0], [68.0, 196.0], [68.1, 196.0], [68.2, 196.0], [68.3, 196.0], [68.4, 196.0], [68.5, 196.0], [68.6, 196.0], [68.7, 196.0], [68.8, 196.0], [68.9, 196.0], [69.0, 196.0], [69.1, 196.0], [69.2, 196.0], [69.3, 196.0], [69.4, 196.0], [69.5, 196.0], [69.6, 196.0], [69.7, 196.0], [69.8, 196.0], [69.9, 196.0], [70.0, 196.0], [70.1, 196.0], [70.2, 196.0], [70.3, 196.0], [70.4, 196.0], [70.5, 196.0], [70.6, 196.0], [70.7, 196.0], [70.8, 196.0], [70.9, 196.0], [71.0, 196.0], [71.1, 196.0], [71.2, 196.0], [71.3, 196.0], [71.4, 196.0], [71.5, 196.0], [71.6, 196.0], [71.7, 196.0], [71.8, 196.0], [71.9, 196.0], [72.0, 197.0], [72.1, 197.0], [72.2, 197.0], [72.3, 197.0], [72.4, 197.0], [72.5, 197.0], [72.6, 197.0], [72.7, 197.0], [72.8, 197.0], [72.9, 197.0], [73.0, 197.0], [73.1, 197.0], [73.2, 197.0], [73.3, 197.0], [73.4, 197.0], [73.5, 197.0], [73.6, 197.0], [73.7, 197.0], [73.8, 197.0], [73.9, 197.0], [74.0, 197.0], [74.1, 197.0], [74.2, 197.0], [74.3, 197.0], [74.4, 197.0], [74.5, 197.0], [74.6, 197.0], [74.7, 197.0], [74.8, 197.0], [74.9, 197.0], [75.0, 197.0], [75.1, 197.0], [75.2, 197.0], [75.3, 197.0], [75.4, 197.0], [75.5, 197.0], [75.6, 197.0], [75.7, 197.0], [75.8, 197.0], [75.9, 197.0], [76.0, 197.0], [76.1, 197.0], [76.2, 197.0], [76.3, 197.0], [76.4, 197.0], [76.5, 197.0], [76.6, 197.0], [76.7, 197.0], [76.8, 197.0], [76.9, 197.0], [77.0, 197.0], [77.1, 197.0], [77.2, 197.0], [77.3, 197.0], [77.4, 197.0], [77.5, 197.0], [77.6, 197.0], [77.7, 197.0], [77.8, 197.0], [77.9, 197.0], [78.0, 197.0], [78.1, 197.0], [78.2, 197.0], [78.3, 197.0], [78.4, 197.0], [78.5, 197.0], [78.6, 197.0], [78.7, 197.0], [78.8, 197.0], [78.9, 197.0], [79.0, 197.0], [79.1, 197.0], [79.2, 197.0], [79.3, 197.0], [79.4, 197.0], [79.5, 197.0], [79.6, 197.0], [79.7, 197.0], [79.8, 197.0], [79.9, 197.0], [80.0, 197.0], [80.1, 197.0], [80.2, 197.0], [80.3, 197.0], [80.4, 197.0], [80.5, 197.0], [80.6, 197.0], [80.7, 197.0], [80.8, 197.0], [80.9, 197.0], [81.0, 197.0], [81.1, 197.0], [81.2, 197.0], [81.3, 197.0], [81.4, 197.0], [81.5, 197.0], [81.6, 197.0], [81.7, 197.0], [81.8, 197.0], [81.9, 197.0], [82.0, 197.0], [82.1, 197.0], [82.2, 197.0], [82.3, 197.0], [82.4, 197.0], [82.5, 197.0], [82.6, 197.0], [82.7, 198.0], [82.8, 198.0], [82.9, 198.0], [83.0, 198.0], [83.1, 198.0], [83.2, 198.0], [83.3, 198.0], [83.4, 198.0], [83.5, 198.0], [83.6, 198.0], [83.7, 198.0], [83.8, 198.0], [83.9, 198.0], [84.0, 198.0], [84.1, 198.0], [84.2, 198.0], [84.3, 198.0], [84.4, 198.0], [84.5, 198.0], [84.6, 198.0], [84.7, 198.0], [84.8, 198.0], [84.9, 198.0], [85.0, 198.0], [85.1, 198.0], [85.2, 198.0], [85.3, 198.0], [85.4, 198.0], [85.5, 198.0], [85.6, 198.0], [85.7, 198.0], [85.8, 198.0], [85.9, 198.0], [86.0, 198.0], [86.1, 198.0], [86.2, 198.0], [86.3, 198.0], [86.4, 198.0], [86.5, 198.0], [86.6, 198.0], [86.7, 198.0], [86.8, 198.0], [86.9, 198.0], [87.0, 198.0], [87.1, 198.0], [87.2, 198.0], [87.3, 198.0], [87.4, 198.0], [87.5, 198.0], [87.6, 198.0], [87.7, 198.0], [87.8, 198.0], [87.9, 198.0], [88.0, 198.0], [88.1, 198.0], [88.2, 198.0], [88.3, 198.0], [88.4, 198.0], [88.5, 198.0], [88.6, 198.0], [88.7, 198.0], [88.8, 198.0], [88.9, 198.0], [89.0, 198.0], [89.1, 198.0], [89.2, 198.0], [89.3, 198.0], [89.4, 198.0], [89.5, 198.0], [89.6, 198.0], [89.7, 198.0], [89.8, 198.0], [89.9, 198.0], [90.0, 198.0], [90.1, 198.0], [90.2, 198.0], [90.3, 198.0], [90.4, 198.0], [90.5, 198.0], [90.6, 198.0], [90.7, 198.0], [90.8, 198.0], [90.9, 198.0], [91.0, 198.0], [91.1, 198.0], [91.2, 198.0], [91.3, 198.0], [91.4, 198.0], [91.5, 198.0], [91.6, 198.0], [91.7, 199.0], [91.8, 199.0], [91.9, 199.0], [92.0, 199.0], [92.1, 199.0], [92.2, 199.0], [92.3, 199.0], [92.4, 199.0], [92.5, 199.0], [92.6, 199.0], [92.7, 199.0], [92.8, 199.0], [92.9, 199.0], [93.0, 199.0], [93.1, 199.0], [93.2, 199.0], [93.3, 199.0], [93.4, 199.0], [93.5, 199.0], [93.6, 199.0], [93.7, 199.0], [93.8, 199.0], [93.9, 199.0], [94.0, 199.0], [94.1, 199.0], [94.2, 199.0], [94.3, 199.0], [94.4, 199.0], [94.5, 199.0], [94.6, 199.0], [94.7, 199.0], [94.8, 199.0], [94.9, 199.0], [95.0, 199.0], [95.1, 199.0], [95.2, 199.0], [95.3, 199.0], [95.4, 199.0], [95.5, 199.0], [95.6, 200.0], [95.7, 200.0], [95.8, 200.0], [95.9, 200.0], [96.0, 200.0], [96.1, 200.0], [96.2, 200.0], [96.3, 200.0], [96.4, 200.0], [96.5, 200.0], [96.6, 200.0], [96.7, 200.0], [96.8, 200.0], [96.9, 200.0], [97.0, 200.0], [97.1, 200.0], [97.2, 201.0], [97.3, 201.0], [97.4, 201.0], [97.5, 201.0], [97.6, 201.0], [97.7, 201.0], [97.8, 201.0], [97.9, 201.0], [98.0, 202.0], [98.1, 202.0], [98.2, 202.0], [98.3, 202.0], [98.4, 203.0], [98.5, 203.0], [98.6, 203.0], [98.7, 204.0], [98.8, 204.0], [98.9, 204.0], [99.0, 205.0], [99.1, 205.0], [99.2, 206.0], [99.3, 208.0], [99.4, 209.0], [99.5, 212.0], [99.6, 590.0], [99.7, 604.0], [99.8, 612.0], [99.9, 621.0]], "isOverall": false, "label": "GET_protected", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 32684.0, "series": [{"data": [[1100.0, 1.0], [600.0, 118.0], [800.0, 1.0], [200.0, 1358.0], [100.0, 32684.0], [1000.0, 1.0], [500.0, 30.0]], "isOverall": false, "label": "GET_protected", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 34193.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 34193.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 34193.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 87.51597405717018, "minX": 1.77315648E12, "maxY": 148.55255731240499, "series": [{"data": [[1.77315654E12, 148.55255731240499], [1.77315648E12, 87.51597405717018]], "isOverall": false, "label": "TG_resize_150_threads", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315654E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 192.0, "minX": 1.0, "maxY": 785.4, "series": [{"data": [[2.0, 198.0], [3.0, 195.0], [4.0, 197.0], [5.0, 200.0], [6.0, 192.0], [7.0, 785.4], [8.0, 274.5], [9.0, 268.85714285714283], [10.0, 261.5], [11.0, 247.77777777777777], [12.0, 244.6], [13.0, 243.0909090909091], [14.0, 236.91666666666666], [15.0, 230.3076923076923], [16.0, 230.6428571428571], [17.0, 235.13333333333338], [18.0, 227.76470588235296], [19.0, 246.94444444444446], [20.0, 216.00000000000006], [21.0, 198.95454545454547], [22.0, 221.89473684210526], [23.0, 219.85714285714283], [24.0, 218.7391304347826], [25.0, 217.86363636363635], [26.0, 214.32142857142856], [27.0, 220.81578947368416], [28.0, 196.82608695652175], [29.0, 212.10714285714283], [30.0, 221.81818181818187], [31.0, 196.24137931034483], [32.0, 222.87096774193543], [33.0, 196.2258064516129], [34.0, 211.63636363636365], [35.0, 208.57142857142858], [36.0, 207.48571428571432], [37.0, 217.39024390243904], [38.0, 195.6060606060606], [39.0, 207.86486486486487], [40.0, 206.65000000000003], [41.0, 205.79999999999998], [42.0, 206.3170731707317], [43.0, 205.3720930232558], [44.0, 205.78571428571425], [45.0, 204.55319148936167], [46.0, 204.82608695652178], [47.0, 212.58333333333337], [48.0, 203.66666666666666], [49.0, 195.72916666666663], [50.0, 204.27083333333331], [51.0, 204.22448979591837], [52.0, 203.01818181818183], [53.0, 204.01923076923075], [54.0, 204.34545454545457], [55.0, 202.92857142857142], [56.0, 202.91379310344834], [57.0, 203.5], [58.0, 202.3548387096774], [59.0, 208.65573770491798], [60.0, 195.3833333333333], [61.0, 216.5833333333333], [62.0, 195.65573770491807], [63.0, 210.1904761904762], [64.0, 201.21212121212122], [65.0, 194.51562499999991], [66.0, 200.92537313432842], [67.0, 202.18749999999997], [68.0, 201.66176470588235], [69.0, 206.19718309859152], [70.0, 201.26388888888889], [71.0, 200.8732394366197], [72.0, 195.7916666666667], [73.0, 201.9701492537314], [74.0, 204.1232876712329], [75.0, 205.34177215189877], [76.0, 195.64556962025324], [77.0, 201.34210526315792], [78.0, 201.38461538461536], [79.0, 201.11538461538464], [80.0, 200.76190476190473], [81.0, 201.36363636363643], [82.0, 201.35714285714286], [83.0, 201.40963855421688], [84.0, 200.90361445783128], [85.0, 203.9444444444444], [86.0, 200.25882352941176], [87.0, 197.82352941176467], [88.0, 200.54838709677418], [89.0, 200.54022988505747], [90.0, 203.48936170212772], [91.0, 195.31914893617022], [92.0, 204.42391304347825], [93.0, 195.60869565217396], [94.0, 199.5257731958763], [95.0, 200.16129032258067], [96.0, 200.92708333333334], [97.0, 199.84536082474233], [98.0, 200.20618556701027], [99.0, 199.86999999999998], [100.0, 199.46601941747568], [101.0, 199.36999999999998], [102.0, 200.52380952380955], [103.0, 201.02970297029705], [104.0, 199.42718446601944], [105.0, 198.91743119266053], [106.0, 203.16037735849065], [107.0, 194.98076923076925], [108.0, 198.5089285714286], [109.0, 199.07692307692307], [110.0, 198.9464285714285], [111.0, 199.36936936936937], [112.0, 199.56779661016955], [113.0, 198.95535714285708], [114.0, 202.67567567567573], [115.0, 195.82300884955754], [116.0, 199.19827586206895], [117.0, 202.50847457627117], [118.0, 198.55932203389844], [119.0, 195.32773109243703], [120.0, 198.98319327731087], [121.0, 199.13709677419357], [122.0, 198.65833333333336], [123.0, 199.59504132231402], [124.0, 199.00000000000003], [125.0, 199.77777777777786], [126.0, 201.0606060606061], [127.0, 195.15079365079353], [128.0, 198.81599999999995], [129.0, 198.54687500000009], [130.0, 198.75193798449612], [131.0, 198.45038167938927], [132.0, 198.0692307692308], [133.0, 201.0909090909091], [134.0, 195.2671755725191], [135.0, 201.46268656716413], [136.0, 194.91851851851854], [137.0, 199.12592592592588], [138.0, 200.23741007194243], [139.0, 194.820895522388], [140.0, 198.04347826086968], [141.0, 197.61744966442967], [142.0, 198.37878787878782], [143.0, 198.67857142857147], [144.0, 198.06382978723414], [145.0, 197.8936170212765], [146.0, 197.98591549295767], [147.0, 199.49999999999994], [148.0, 197.5102040816326], [149.0, 198.0], [150.0, 195.1793249859189], [1.0, 198.0]], "isOverall": false, "label": "GET_protected", "isController": false}, {"data": [[133.69014125698263, 197.17486035153587]], "isOverall": false, "label": "GET_protected-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 38577.13333333333, "minX": 1.77315648E12, "maxY": 143130.73333333334, "series": [{"data": [[1.77315654E12, 119850.43333333333], [1.77315648E12, 38577.13333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77315654E12, 143130.73333333334], [1.77315648E12, 46070.53333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315654E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 195.47949124367085, "minX": 1.77315648E12, "maxY": 202.4419889502766, "series": [{"data": [[1.77315654E12, 195.47949124367085], [1.77315648E12, 202.4419889502766]], "isOverall": false, "label": "GET_protected", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315654E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 195.47663045579174, "minX": 1.77315648E12, "maxY": 202.43141964929225, "series": [{"data": [[1.77315654E12, 195.47663045579174], [1.77315648E12, 202.43141964929225]], "isOverall": false, "label": "GET_protected", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315654E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.35771446244249444, "minX": 1.77315648E12, "maxY": 6.472015373528722, "series": [{"data": [[1.77315654E12, 0.35771446244249444], [1.77315648E12, 6.472015373528722]], "isOverall": false, "label": "GET_protected", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315654E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 195.0, "minX": 30.0, "maxY": 205.0, "series": [{"data": [[515.0, 195.0], [532.0, 195.0], [566.0, 196.0], [590.0, 195.0], [611.0, 196.0], [642.0, 195.0], [663.0, 195.0], [688.0, 195.0], [717.0, 195.0], [740.0, 195.0], [761.0, 195.0], [762.0, 195.0], [767.0, 195.0], [765.0, 195.0], [763.0, 195.0], [766.0, 195.0], [759.0, 195.0], [769.0, 195.0], [777.0, 195.0], [774.0, 195.0], [770.0, 195.0], [771.0, 195.0], [772.0, 195.0], [776.0, 195.0], [768.0, 195.0], [778.0, 195.0], [773.0, 195.0], [55.0, 201.0], [80.0, 200.0], [105.0, 200.0], [130.0, 197.0], [157.0, 197.0], [179.0, 196.0], [204.0, 196.0], [233.0, 196.0], [256.0, 196.0], [277.0, 196.0], [308.0, 196.0], [335.0, 195.0], [359.0, 196.0], [379.0, 196.0], [407.0, 196.0], [439.0, 196.0], [459.0, 195.0], [478.0, 196.0], [30.0, 205.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 778.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 195.0, "minX": 30.0, "maxY": 205.0, "series": [{"data": [[515.0, 195.0], [532.0, 195.0], [566.0, 196.0], [590.0, 195.0], [611.0, 196.0], [642.0, 195.0], [663.0, 195.0], [688.0, 195.0], [717.0, 195.0], [740.0, 195.0], [761.0, 195.0], [762.0, 195.0], [767.0, 195.0], [765.0, 195.0], [763.0, 195.0], [766.0, 195.0], [759.0, 195.0], [769.0, 195.0], [777.0, 195.0], [774.0, 195.0], [770.0, 195.0], [771.0, 195.0], [772.0, 195.0], [776.0, 195.0], [768.0, 195.0], [778.0, 195.0], [773.0, 195.0], [55.0, 201.0], [80.0, 200.0], [105.0, 200.0], [130.0, 197.0], [157.0, 197.0], [179.0, 196.0], [204.0, 196.0], [233.0, 196.0], [256.0, 196.0], [277.0, 196.0], [308.0, 196.0], [335.0, 195.0], [359.0, 196.0], [379.0, 196.0], [407.0, 196.0], [439.0, 196.0], [459.0, 195.0], [478.0, 196.0], [30.0, 205.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 778.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 140.93333333333334, "minX": 1.77315648E12, "maxY": 428.95, "series": [{"data": [[1.77315654E12, 428.95], [1.77315648E12, 140.93333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315654E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 138.76666666666668, "minX": 1.77315648E12, "maxY": 431.1166666666667, "series": [{"data": [[1.77315654E12, 431.1166666666667], [1.77315648E12, 138.76666666666668]], "isOverall": false, "label": "400", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315654E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 138.76666666666668, "minX": 1.77315648E12, "maxY": 431.1166666666667, "series": [{"data": [[1.77315654E12, 431.1166666666667], [1.77315648E12, 138.76666666666668]], "isOverall": false, "label": "GET_protected-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315654E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 138.76666666666668, "minX": 1.77315648E12, "maxY": 431.1166666666667, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.77315654E12, 431.1166666666667], [1.77315648E12, 138.76666666666668]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315654E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

