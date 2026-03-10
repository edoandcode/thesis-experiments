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
        data: {"result": {"minY": 190.0, "minX": 0.0, "maxY": 1148.0, "series": [{"data": [[0.0, 190.0], [0.1, 190.0], [0.2, 190.0], [0.3, 190.0], [0.4, 190.0], [0.5, 191.0], [0.6, 191.0], [0.7, 191.0], [0.8, 191.0], [0.9, 191.0], [1.0, 191.0], [1.1, 191.0], [1.2, 191.0], [1.3, 191.0], [1.4, 191.0], [1.5, 191.0], [1.6, 191.0], [1.7, 191.0], [1.8, 191.0], [1.9, 191.0], [2.0, 191.0], [2.1, 191.0], [2.2, 191.0], [2.3, 191.0], [2.4, 191.0], [2.5, 191.0], [2.6, 191.0], [2.7, 192.0], [2.8, 192.0], [2.9, 192.0], [3.0, 192.0], [3.1, 192.0], [3.2, 192.0], [3.3, 192.0], [3.4, 192.0], [3.5, 192.0], [3.6, 192.0], [3.7, 192.0], [3.8, 192.0], [3.9, 192.0], [4.0, 192.0], [4.1, 192.0], [4.2, 192.0], [4.3, 192.0], [4.4, 192.0], [4.5, 192.0], [4.6, 192.0], [4.7, 192.0], [4.8, 192.0], [4.9, 192.0], [5.0, 192.0], [5.1, 192.0], [5.2, 192.0], [5.3, 192.0], [5.4, 192.0], [5.5, 192.0], [5.6, 192.0], [5.7, 192.0], [5.8, 192.0], [5.9, 192.0], [6.0, 192.0], [6.1, 192.0], [6.2, 192.0], [6.3, 192.0], [6.4, 192.0], [6.5, 192.0], [6.6, 192.0], [6.7, 192.0], [6.8, 192.0], [6.9, 192.0], [7.0, 192.0], [7.1, 192.0], [7.2, 192.0], [7.3, 192.0], [7.4, 192.0], [7.5, 192.0], [7.6, 192.0], [7.7, 192.0], [7.8, 192.0], [7.9, 192.0], [8.0, 192.0], [8.1, 192.0], [8.2, 192.0], [8.3, 192.0], [8.4, 192.0], [8.5, 192.0], [8.6, 192.0], [8.7, 192.0], [8.8, 192.0], [8.9, 192.0], [9.0, 192.0], [9.1, 192.0], [9.2, 192.0], [9.3, 192.0], [9.4, 192.0], [9.5, 192.0], [9.6, 192.0], [9.7, 192.0], [9.8, 192.0], [9.9, 192.0], [10.0, 192.0], [10.1, 192.0], [10.2, 192.0], [10.3, 192.0], [10.4, 192.0], [10.5, 192.0], [10.6, 192.0], [10.7, 192.0], [10.8, 192.0], [10.9, 192.0], [11.0, 193.0], [11.1, 193.0], [11.2, 193.0], [11.3, 193.0], [11.4, 193.0], [11.5, 193.0], [11.6, 193.0], [11.7, 193.0], [11.8, 193.0], [11.9, 193.0], [12.0, 193.0], [12.1, 193.0], [12.2, 193.0], [12.3, 193.0], [12.4, 193.0], [12.5, 193.0], [12.6, 193.0], [12.7, 193.0], [12.8, 193.0], [12.9, 193.0], [13.0, 193.0], [13.1, 193.0], [13.2, 193.0], [13.3, 193.0], [13.4, 193.0], [13.5, 193.0], [13.6, 193.0], [13.7, 193.0], [13.8, 193.0], [13.9, 193.0], [14.0, 193.0], [14.1, 193.0], [14.2, 193.0], [14.3, 193.0], [14.4, 193.0], [14.5, 193.0], [14.6, 193.0], [14.7, 193.0], [14.8, 193.0], [14.9, 193.0], [15.0, 193.0], [15.1, 193.0], [15.2, 193.0], [15.3, 193.0], [15.4, 193.0], [15.5, 193.0], [15.6, 193.0], [15.7, 193.0], [15.8, 193.0], [15.9, 193.0], [16.0, 193.0], [16.1, 193.0], [16.2, 193.0], [16.3, 193.0], [16.4, 193.0], [16.5, 193.0], [16.6, 193.0], [16.7, 193.0], [16.8, 193.0], [16.9, 193.0], [17.0, 193.0], [17.1, 193.0], [17.2, 193.0], [17.3, 193.0], [17.4, 193.0], [17.5, 193.0], [17.6, 193.0], [17.7, 193.0], [17.8, 193.0], [17.9, 193.0], [18.0, 193.0], [18.1, 193.0], [18.2, 193.0], [18.3, 193.0], [18.4, 193.0], [18.5, 193.0], [18.6, 193.0], [18.7, 193.0], [18.8, 193.0], [18.9, 193.0], [19.0, 193.0], [19.1, 193.0], [19.2, 193.0], [19.3, 193.0], [19.4, 193.0], [19.5, 193.0], [19.6, 193.0], [19.7, 193.0], [19.8, 193.0], [19.9, 193.0], [20.0, 193.0], [20.1, 193.0], [20.2, 193.0], [20.3, 193.0], [20.4, 193.0], [20.5, 193.0], [20.6, 193.0], [20.7, 193.0], [20.8, 193.0], [20.9, 193.0], [21.0, 193.0], [21.1, 193.0], [21.2, 193.0], [21.3, 193.0], [21.4, 193.0], [21.5, 193.0], [21.6, 193.0], [21.7, 193.0], [21.8, 193.0], [21.9, 194.0], [22.0, 194.0], [22.1, 194.0], [22.2, 194.0], [22.3, 194.0], [22.4, 194.0], [22.5, 194.0], [22.6, 194.0], [22.7, 194.0], [22.8, 194.0], [22.9, 194.0], [23.0, 194.0], [23.1, 194.0], [23.2, 194.0], [23.3, 194.0], [23.4, 194.0], [23.5, 194.0], [23.6, 194.0], [23.7, 194.0], [23.8, 194.0], [23.9, 194.0], [24.0, 194.0], [24.1, 194.0], [24.2, 194.0], [24.3, 194.0], [24.4, 194.0], [24.5, 194.0], [24.6, 194.0], [24.7, 194.0], [24.8, 194.0], [24.9, 194.0], [25.0, 194.0], [25.1, 194.0], [25.2, 194.0], [25.3, 194.0], [25.4, 194.0], [25.5, 194.0], [25.6, 194.0], [25.7, 194.0], [25.8, 194.0], [25.9, 194.0], [26.0, 194.0], [26.1, 194.0], [26.2, 194.0], [26.3, 194.0], [26.4, 194.0], [26.5, 194.0], [26.6, 194.0], [26.7, 194.0], [26.8, 194.0], [26.9, 194.0], [27.0, 194.0], [27.1, 194.0], [27.2, 194.0], [27.3, 194.0], [27.4, 194.0], [27.5, 194.0], [27.6, 194.0], [27.7, 194.0], [27.8, 194.0], [27.9, 194.0], [28.0, 194.0], [28.1, 194.0], [28.2, 194.0], [28.3, 194.0], [28.4, 194.0], [28.5, 194.0], [28.6, 194.0], [28.7, 194.0], [28.8, 194.0], [28.9, 194.0], [29.0, 194.0], [29.1, 194.0], [29.2, 194.0], [29.3, 194.0], [29.4, 194.0], [29.5, 194.0], [29.6, 194.0], [29.7, 194.0], [29.8, 194.0], [29.9, 194.0], [30.0, 194.0], [30.1, 194.0], [30.2, 194.0], [30.3, 194.0], [30.4, 194.0], [30.5, 194.0], [30.6, 194.0], [30.7, 194.0], [30.8, 194.0], [30.9, 194.0], [31.0, 194.0], [31.1, 194.0], [31.2, 194.0], [31.3, 194.0], [31.4, 194.0], [31.5, 194.0], [31.6, 194.0], [31.7, 194.0], [31.8, 194.0], [31.9, 194.0], [32.0, 194.0], [32.1, 194.0], [32.2, 194.0], [32.3, 194.0], [32.4, 194.0], [32.5, 194.0], [32.6, 194.0], [32.7, 194.0], [32.8, 194.0], [32.9, 194.0], [33.0, 194.0], [33.1, 194.0], [33.2, 194.0], [33.3, 194.0], [33.4, 194.0], [33.5, 194.0], [33.6, 194.0], [33.7, 194.0], [33.8, 195.0], [33.9, 195.0], [34.0, 195.0], [34.1, 195.0], [34.2, 195.0], [34.3, 195.0], [34.4, 195.0], [34.5, 195.0], [34.6, 195.0], [34.7, 195.0], [34.8, 195.0], [34.9, 195.0], [35.0, 195.0], [35.1, 195.0], [35.2, 195.0], [35.3, 195.0], [35.4, 195.0], [35.5, 195.0], [35.6, 195.0], [35.7, 195.0], [35.8, 195.0], [35.9, 195.0], [36.0, 195.0], [36.1, 195.0], [36.2, 195.0], [36.3, 195.0], [36.4, 195.0], [36.5, 195.0], [36.6, 195.0], [36.7, 195.0], [36.8, 195.0], [36.9, 195.0], [37.0, 195.0], [37.1, 195.0], [37.2, 195.0], [37.3, 195.0], [37.4, 195.0], [37.5, 195.0], [37.6, 195.0], [37.7, 195.0], [37.8, 195.0], [37.9, 195.0], [38.0, 195.0], [38.1, 195.0], [38.2, 195.0], [38.3, 195.0], [38.4, 195.0], [38.5, 195.0], [38.6, 195.0], [38.7, 195.0], [38.8, 195.0], [38.9, 195.0], [39.0, 195.0], [39.1, 195.0], [39.2, 195.0], [39.3, 195.0], [39.4, 195.0], [39.5, 195.0], [39.6, 195.0], [39.7, 195.0], [39.8, 195.0], [39.9, 195.0], [40.0, 195.0], [40.1, 195.0], [40.2, 195.0], [40.3, 195.0], [40.4, 195.0], [40.5, 195.0], [40.6, 195.0], [40.7, 195.0], [40.8, 195.0], [40.9, 195.0], [41.0, 195.0], [41.1, 195.0], [41.2, 195.0], [41.3, 195.0], [41.4, 195.0], [41.5, 195.0], [41.6, 195.0], [41.7, 195.0], [41.8, 195.0], [41.9, 195.0], [42.0, 195.0], [42.1, 195.0], [42.2, 195.0], [42.3, 195.0], [42.4, 195.0], [42.5, 195.0], [42.6, 195.0], [42.7, 195.0], [42.8, 195.0], [42.9, 195.0], [43.0, 195.0], [43.1, 195.0], [43.2, 195.0], [43.3, 195.0], [43.4, 195.0], [43.5, 195.0], [43.6, 195.0], [43.7, 195.0], [43.8, 195.0], [43.9, 195.0], [44.0, 195.0], [44.1, 195.0], [44.2, 195.0], [44.3, 195.0], [44.4, 195.0], [44.5, 195.0], [44.6, 195.0], [44.7, 195.0], [44.8, 195.0], [44.9, 195.0], [45.0, 195.0], [45.1, 195.0], [45.2, 195.0], [45.3, 195.0], [45.4, 195.0], [45.5, 195.0], [45.6, 195.0], [45.7, 195.0], [45.8, 195.0], [45.9, 195.0], [46.0, 195.0], [46.1, 195.0], [46.2, 195.0], [46.3, 195.0], [46.4, 195.0], [46.5, 195.0], [46.6, 195.0], [46.7, 195.0], [46.8, 195.0], [46.9, 195.0], [47.0, 195.0], [47.1, 195.0], [47.2, 195.0], [47.3, 195.0], [47.4, 195.0], [47.5, 195.0], [47.6, 195.0], [47.7, 195.0], [47.8, 195.0], [47.9, 195.0], [48.0, 195.0], [48.1, 195.0], [48.2, 195.0], [48.3, 195.0], [48.4, 195.0], [48.5, 195.0], [48.6, 195.0], [48.7, 195.0], [48.8, 195.0], [48.9, 195.0], [49.0, 195.0], [49.1, 195.0], [49.2, 195.0], [49.3, 195.0], [49.4, 195.0], [49.5, 195.0], [49.6, 195.0], [49.7, 195.0], [49.8, 195.0], [49.9, 195.0], [50.0, 195.0], [50.1, 195.0], [50.2, 195.0], [50.3, 195.0], [50.4, 195.0], [50.5, 195.0], [50.6, 195.0], [50.7, 195.0], [50.8, 195.0], [50.9, 195.0], [51.0, 195.0], [51.1, 195.0], [51.2, 195.0], [51.3, 195.0], [51.4, 195.0], [51.5, 195.0], [51.6, 195.0], [51.7, 195.0], [51.8, 195.0], [51.9, 195.0], [52.0, 195.0], [52.1, 195.0], [52.2, 195.0], [52.3, 195.0], [52.4, 195.0], [52.5, 195.0], [52.6, 195.0], [52.7, 195.0], [52.8, 195.0], [52.9, 195.0], [53.0, 195.0], [53.1, 195.0], [53.2, 195.0], [53.3, 195.0], [53.4, 195.0], [53.5, 195.0], [53.6, 195.0], [53.7, 195.0], [53.8, 195.0], [53.9, 195.0], [54.0, 195.0], [54.1, 195.0], [54.2, 195.0], [54.3, 195.0], [54.4, 195.0], [54.5, 196.0], [54.6, 196.0], [54.7, 196.0], [54.8, 196.0], [54.9, 196.0], [55.0, 196.0], [55.1, 196.0], [55.2, 196.0], [55.3, 196.0], [55.4, 196.0], [55.5, 196.0], [55.6, 196.0], [55.7, 196.0], [55.8, 196.0], [55.9, 196.0], [56.0, 196.0], [56.1, 196.0], [56.2, 196.0], [56.3, 196.0], [56.4, 196.0], [56.5, 196.0], [56.6, 196.0], [56.7, 196.0], [56.8, 196.0], [56.9, 196.0], [57.0, 196.0], [57.1, 196.0], [57.2, 196.0], [57.3, 196.0], [57.4, 196.0], [57.5, 196.0], [57.6, 196.0], [57.7, 196.0], [57.8, 196.0], [57.9, 196.0], [58.0, 196.0], [58.1, 196.0], [58.2, 196.0], [58.3, 196.0], [58.4, 196.0], [58.5, 196.0], [58.6, 196.0], [58.7, 196.0], [58.8, 196.0], [58.9, 196.0], [59.0, 196.0], [59.1, 196.0], [59.2, 196.0], [59.3, 196.0], [59.4, 196.0], [59.5, 196.0], [59.6, 196.0], [59.7, 196.0], [59.8, 196.0], [59.9, 196.0], [60.0, 196.0], [60.1, 196.0], [60.2, 196.0], [60.3, 196.0], [60.4, 196.0], [60.5, 196.0], [60.6, 196.0], [60.7, 196.0], [60.8, 196.0], [60.9, 196.0], [61.0, 196.0], [61.1, 196.0], [61.2, 196.0], [61.3, 196.0], [61.4, 196.0], [61.5, 196.0], [61.6, 196.0], [61.7, 196.0], [61.8, 196.0], [61.9, 196.0], [62.0, 196.0], [62.1, 196.0], [62.2, 196.0], [62.3, 196.0], [62.4, 196.0], [62.5, 196.0], [62.6, 196.0], [62.7, 196.0], [62.8, 196.0], [62.9, 196.0], [63.0, 196.0], [63.1, 196.0], [63.2, 196.0], [63.3, 196.0], [63.4, 196.0], [63.5, 196.0], [63.6, 196.0], [63.7, 196.0], [63.8, 196.0], [63.9, 196.0], [64.0, 196.0], [64.1, 196.0], [64.2, 196.0], [64.3, 196.0], [64.4, 196.0], [64.5, 196.0], [64.6, 196.0], [64.7, 196.0], [64.8, 196.0], [64.9, 196.0], [65.0, 196.0], [65.1, 196.0], [65.2, 196.0], [65.3, 196.0], [65.4, 196.0], [65.5, 196.0], [65.6, 196.0], [65.7, 196.0], [65.8, 196.0], [65.9, 196.0], [66.0, 196.0], [66.1, 196.0], [66.2, 196.0], [66.3, 196.0], [66.4, 196.0], [66.5, 196.0], [66.6, 196.0], [66.7, 196.0], [66.8, 196.0], [66.9, 196.0], [67.0, 196.0], [67.1, 196.0], [67.2, 196.0], [67.3, 196.0], [67.4, 196.0], [67.5, 196.0], [67.6, 196.0], [67.7, 196.0], [67.8, 196.0], [67.9, 196.0], [68.0, 196.0], [68.1, 196.0], [68.2, 196.0], [68.3, 196.0], [68.4, 196.0], [68.5, 196.0], [68.6, 196.0], [68.7, 196.0], [68.8, 196.0], [68.9, 196.0], [69.0, 196.0], [69.1, 196.0], [69.2, 196.0], [69.3, 196.0], [69.4, 196.0], [69.5, 196.0], [69.6, 196.0], [69.7, 196.0], [69.8, 196.0], [69.9, 196.0], [70.0, 196.0], [70.1, 196.0], [70.2, 196.0], [70.3, 196.0], [70.4, 196.0], [70.5, 196.0], [70.6, 196.0], [70.7, 196.0], [70.8, 196.0], [70.9, 196.0], [71.0, 196.0], [71.1, 196.0], [71.2, 196.0], [71.3, 196.0], [71.4, 196.0], [71.5, 196.0], [71.6, 196.0], [71.7, 196.0], [71.8, 196.0], [71.9, 197.0], [72.0, 197.0], [72.1, 197.0], [72.2, 197.0], [72.3, 197.0], [72.4, 197.0], [72.5, 197.0], [72.6, 197.0], [72.7, 197.0], [72.8, 197.0], [72.9, 197.0], [73.0, 197.0], [73.1, 197.0], [73.2, 197.0], [73.3, 197.0], [73.4, 197.0], [73.5, 197.0], [73.6, 197.0], [73.7, 197.0], [73.8, 197.0], [73.9, 197.0], [74.0, 197.0], [74.1, 197.0], [74.2, 197.0], [74.3, 197.0], [74.4, 197.0], [74.5, 197.0], [74.6, 197.0], [74.7, 197.0], [74.8, 197.0], [74.9, 197.0], [75.0, 197.0], [75.1, 197.0], [75.2, 197.0], [75.3, 197.0], [75.4, 197.0], [75.5, 197.0], [75.6, 197.0], [75.7, 197.0], [75.8, 197.0], [75.9, 197.0], [76.0, 197.0], [76.1, 197.0], [76.2, 197.0], [76.3, 197.0], [76.4, 197.0], [76.5, 197.0], [76.6, 197.0], [76.7, 197.0], [76.8, 197.0], [76.9, 197.0], [77.0, 197.0], [77.1, 197.0], [77.2, 197.0], [77.3, 197.0], [77.4, 197.0], [77.5, 197.0], [77.6, 197.0], [77.7, 197.0], [77.8, 197.0], [77.9, 197.0], [78.0, 197.0], [78.1, 197.0], [78.2, 197.0], [78.3, 197.0], [78.4, 197.0], [78.5, 197.0], [78.6, 197.0], [78.7, 197.0], [78.8, 197.0], [78.9, 197.0], [79.0, 197.0], [79.1, 197.0], [79.2, 197.0], [79.3, 197.0], [79.4, 197.0], [79.5, 197.0], [79.6, 197.0], [79.7, 197.0], [79.8, 197.0], [79.9, 197.0], [80.0, 197.0], [80.1, 197.0], [80.2, 197.0], [80.3, 197.0], [80.4, 197.0], [80.5, 197.0], [80.6, 197.0], [80.7, 197.0], [80.8, 197.0], [80.9, 197.0], [81.0, 197.0], [81.1, 197.0], [81.2, 197.0], [81.3, 197.0], [81.4, 197.0], [81.5, 197.0], [81.6, 197.0], [81.7, 197.0], [81.8, 197.0], [81.9, 197.0], [82.0, 197.0], [82.1, 198.0], [82.2, 198.0], [82.3, 198.0], [82.4, 198.0], [82.5, 198.0], [82.6, 198.0], [82.7, 198.0], [82.8, 198.0], [82.9, 198.0], [83.0, 198.0], [83.1, 198.0], [83.2, 198.0], [83.3, 198.0], [83.4, 198.0], [83.5, 198.0], [83.6, 198.0], [83.7, 198.0], [83.8, 198.0], [83.9, 198.0], [84.0, 198.0], [84.1, 198.0], [84.2, 198.0], [84.3, 198.0], [84.4, 198.0], [84.5, 198.0], [84.6, 198.0], [84.7, 198.0], [84.8, 198.0], [84.9, 198.0], [85.0, 198.0], [85.1, 198.0], [85.2, 198.0], [85.3, 198.0], [85.4, 198.0], [85.5, 198.0], [85.6, 198.0], [85.7, 198.0], [85.8, 198.0], [85.9, 198.0], [86.0, 198.0], [86.1, 198.0], [86.2, 198.0], [86.3, 198.0], [86.4, 198.0], [86.5, 198.0], [86.6, 198.0], [86.7, 198.0], [86.8, 198.0], [86.9, 198.0], [87.0, 198.0], [87.1, 198.0], [87.2, 198.0], [87.3, 198.0], [87.4, 198.0], [87.5, 198.0], [87.6, 198.0], [87.7, 198.0], [87.8, 198.0], [87.9, 198.0], [88.0, 198.0], [88.1, 198.0], [88.2, 198.0], [88.3, 198.0], [88.4, 198.0], [88.5, 198.0], [88.6, 198.0], [88.7, 198.0], [88.8, 198.0], [88.9, 198.0], [89.0, 198.0], [89.1, 198.0], [89.2, 198.0], [89.3, 198.0], [89.4, 198.0], [89.5, 198.0], [89.6, 198.0], [89.7, 198.0], [89.8, 198.0], [89.9, 198.0], [90.0, 198.0], [90.1, 199.0], [90.2, 199.0], [90.3, 199.0], [90.4, 199.0], [90.5, 199.0], [90.6, 199.0], [90.7, 199.0], [90.8, 199.0], [90.9, 199.0], [91.0, 199.0], [91.1, 199.0], [91.2, 199.0], [91.3, 199.0], [91.4, 199.0], [91.5, 199.0], [91.6, 199.0], [91.7, 199.0], [91.8, 199.0], [91.9, 199.0], [92.0, 199.0], [92.1, 199.0], [92.2, 199.0], [92.3, 199.0], [92.4, 199.0], [92.5, 199.0], [92.6, 199.0], [92.7, 199.0], [92.8, 199.0], [92.9, 199.0], [93.0, 199.0], [93.1, 199.0], [93.2, 199.0], [93.3, 199.0], [93.4, 199.0], [93.5, 199.0], [93.6, 199.0], [93.7, 199.0], [93.8, 199.0], [93.9, 199.0], [94.0, 199.0], [94.1, 199.0], [94.2, 199.0], [94.3, 199.0], [94.4, 199.0], [94.5, 200.0], [94.6, 200.0], [94.7, 200.0], [94.8, 200.0], [94.9, 200.0], [95.0, 200.0], [95.1, 200.0], [95.2, 200.0], [95.3, 200.0], [95.4, 200.0], [95.5, 200.0], [95.6, 200.0], [95.7, 200.0], [95.8, 200.0], [95.9, 200.0], [96.0, 200.0], [96.1, 201.0], [96.2, 201.0], [96.3, 201.0], [96.4, 201.0], [96.5, 201.0], [96.6, 201.0], [96.7, 201.0], [96.8, 201.0], [96.9, 201.0], [97.0, 202.0], [97.1, 202.0], [97.2, 202.0], [97.3, 202.0], [97.4, 202.0], [97.5, 202.0], [97.6, 203.0], [97.7, 203.0], [97.8, 203.0], [97.9, 203.0], [98.0, 204.0], [98.1, 204.0], [98.2, 204.0], [98.3, 205.0], [98.4, 205.0], [98.5, 206.0], [98.6, 206.0], [98.7, 207.0], [98.8, 208.0], [98.9, 209.0], [99.0, 210.0], [99.1, 212.0], [99.2, 214.0], [99.3, 216.0], [99.4, 219.0], [99.5, 222.0], [99.6, 594.0], [99.7, 605.0], [99.8, 613.0], [99.9, 621.0], [100.0, 1148.0]], "isOverall": false, "label": "GET_welcome", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 32252.0, "series": [{"data": [[1100.0, 1.0], [600.0, 116.0], [800.0, 1.0], [100.0, 32252.0], [200.0, 1756.0], [1000.0, 1.0], [500.0, 31.0]], "isOverall": false, "label": "GET_welcome", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 150.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 34008.0, "series": [{"data": [[0.0, 34008.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 150.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 128.8551161622021, "minX": 1.7731566E12, "maxY": 148.65544697792248, "series": [{"data": [[1.7731566E12, 128.8551161622021], [1.77315666E12, 148.65544697792248]], "isOverall": false, "label": "TG_resize_150_threads", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315666E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 192.0, "minX": 1.0, "maxY": 928.25, "series": [{"data": [[2.0, 194.0], [3.0, 195.0], [4.0, 195.0], [5.0, 192.0], [6.0, 195.0], [7.0, 928.25], [8.0, 261.5714285714286], [9.0, 264.85714285714283], [10.0, 255.25], [11.0, 252.88888888888889], [12.0, 244.0], [13.0, 237.0909090909091], [14.0, 234.25000000000003], [15.0, 235.23076923076923], [16.0, 234.07142857142858], [17.0, 231.66666666666669], [18.0, 231.6875], [19.0, 226.52941176470588], [20.0, 227.66666666666674], [21.0, 225.3684210526316], [22.0, 221.3], [23.0, 215.39999999999998], [24.0, 216.63636363636363], [25.0, 227.77777777777777], [26.0, 202.0], [27.0, 221.5142857142857], [28.0, 198.4375], [29.0, 213.53571428571428], [30.0, 226.96666666666667], [31.0, 211.03448275862067], [32.0, 196.58064516129033], [33.0, 210.19354838709674], [34.0, 211.15151515151516], [35.0, 209.3030303030303], [36.0, 208.74999999999997], [37.0, 219.47368421052633], [38.0, 195.94117647058823], [39.0, 207.69444444444443], [40.0, 206.475], [41.0, 215.1904761904762], [42.0, 195.74999999999997], [43.0, 204.91489361702128], [44.0, 205.4318181818182], [45.0, 205.97674418604652], [46.0, 204.42553191489358], [47.0, 204.65957446808503], [48.0, 211.9166666666666], [49.0, 203.57692307692312], [50.0, 203.21568627450978], [51.0, 195.3529411764706], [52.0, 204.3], [53.0, 203.4150943396226], [54.0, 204.01886792452837], [55.0, 210.0535714285715], [56.0, 202.78947368421058], [57.0, 195.86206896551724], [58.0, 203.06779661016947], [59.0, 202.5762711864407], [60.0, 202.4333333333334], [61.0, 202.08064516129033], [62.0, 202.37096774193543], [63.0, 203.12307692307695], [64.0, 202.640625], [65.0, 207.13235294117652], [66.0, 200.927536231884], [67.0, 201.3088235294117], [68.0, 195.3582089552238], [69.0, 201.29411764705887], [70.0, 206.22972972972977], [71.0, 200.36619718309862], [72.0, 195.1549295774647], [73.0, 201.93243243243242], [74.0, 201.5277777777778], [75.0, 200.8356164383562], [76.0, 200.84415584415586], [77.0, 205.66250000000002], [78.0, 200.58749999999998], [79.0, 195.24675324675326], [80.0, 200.36249999999998], [81.0, 204.39772727272728], [82.0, 195.28915662650599], [83.0, 200.670731707317], [84.0, 199.67058823529408], [85.0, 199.80232558139542], [86.0, 199.84523809523807], [87.0, 199.62222222222223], [88.0, 200.40229885057465], [89.0, 199.6555555555556], [90.0, 199.6404494382022], [91.0, 199.23762376237624], [92.0, 200.7011494252873], [93.0, 199.70999999999998], [94.0, 202.20192307692315], [95.0, 199.96385542168667], [96.0, 200.36842105263156], [97.0, 199.77358490566033], [98.0, 200.0217391304349], [99.0, 200.71717171717168], [100.0, 199.80582524271844], [101.0, 200.74489795918365], [102.0, 199.9504950495049], [103.0, 200.20999999999998], [104.0, 199.3398058252427], [105.0, 199.21359223300976], [106.0, 199.28571428571425], [107.0, 204.44859813084108], [108.0, 198.82300884955754], [109.0, 195.52293577981658], [110.0, 199.80555555555551], [111.0, 200.54128440366966], [112.0, 199.30357142857147], [113.0, 199.38738738738743], [114.0, 199.60526315789468], [115.0, 199.71052631578948], [116.0, 199.8571428571429], [117.0, 199.11016949152543], [118.0, 205.30172413793105], [119.0, 199.72499999999997], [120.0, 199.52100840336138], [121.0, 198.95967741935488], [122.0, 198.88888888888883], [123.0, 198.37704918032787], [124.0, 198.89344262295083], [125.0, 198.7333333333334], [126.0, 200.90076335877865], [127.0, 195.29365079365076], [128.0, 199.13445378151258], [129.0, 200.23622047244095], [130.0, 197.906976744186], [131.0, 199.36923076923074], [132.0, 199.29999999999995], [133.0, 198.75000000000009], [134.0, 197.75757575757572], [135.0, 199.99248120300751], [136.0, 199.1417910447761], [137.0, 198.94074074074067], [138.0, 198.43065693430657], [139.0, 208.4014598540147], [140.0, 202.304347826087], [141.0, 199.23776223776227], [142.0, 198.25899280575538], [143.0, 198.1], [144.0, 197.77304964539002], [145.0, 198.9090909090909], [146.0, 197.888888888889], [147.0, 198.23611111111117], [148.0, 199.25694444444457], [149.0, 197.62162162162167], [150.0, 195.36546725118188], [1.0, 195.0]], "isOverall": false, "label": "GET_welcome", "isController": false}, {"data": [[133.6600210785178, 197.40775221031618]], "isOverall": false, "label": "GET_welcome-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 16163.55, "minX": 1.7731566E12, "maxY": 159094.35, "series": [{"data": [[1.7731566E12, 159094.35], [1.77315666E12, 50977.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7731566E12, 50444.55], [1.77315666E12, 16163.55]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315666E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 195.33610809506635, "minX": 1.7731566E12, "maxY": 198.07155282384267, "series": [{"data": [[1.7731566E12, 198.07155282384267], [1.77315666E12, 195.33610809506635]], "isOverall": false, "label": "GET_welcome", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315666E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 195.33345397514816, "minX": 1.7731566E12, "maxY": 198.0665275039627, "series": [{"data": [[1.7731566E12, 198.0665275039627], [1.77315666E12, 195.33345397514816]], "isOverall": false, "label": "GET_welcome", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315666E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.7731566E12, "maxY": 2.4458231860528112, "series": [{"data": [[1.7731566E12, 2.4458231860528112], [1.77315666E12, 0.0]], "isOverall": false, "label": "GET_welcome", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315666E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 190.0, "minX": 1.7731566E12, "maxY": 1148.0, "series": [{"data": [[1.7731566E12, 1148.0], [1.77315666E12, 218.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7731566E12, 190.0], [1.77315666E12, 190.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7731566E12, 198.0], [1.77315666E12, 198.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7731566E12, 210.0], [1.77315666E12, 203.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7731566E12, 195.0], [1.77315666E12, 195.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7731566E12, 199.0], [1.77315666E12, 199.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315666E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 195.0, "minX": 4.0, "maxY": 955.5, "series": [{"data": [[540.0, 196.0], [35.0, 202.0], [566.0, 196.0], [597.0, 196.0], [600.0, 195.0], [615.0, 195.0], [641.0, 195.0], [667.0, 196.0], [692.0, 196.0], [722.0, 195.0], [750.0, 195.0], [765.0, 195.0], [767.0, 195.0], [762.0, 195.0], [758.0, 195.0], [760.0, 195.0], [761.0, 195.0], [766.0, 195.0], [770.0, 195.0], [768.0, 195.0], [772.0, 195.0], [778.0, 195.0], [775.0, 195.0], [771.0, 195.0], [785.0, 195.0], [769.0, 195.0], [776.0, 195.0], [60.0, 202.0], [4.0, 955.5], [85.0, 203.0], [110.0, 198.0], [135.0, 198.0], [160.0, 197.0], [189.0, 196.0], [211.0, 196.0], [238.0, 195.0], [260.0, 196.0], [288.0, 196.0], [304.0, 195.0], [345.0, 195.0], [366.0, 195.0], [392.0, 195.0], [414.0, 195.0], [436.0, 195.0], [465.0, 196.0], [489.0, 196.0], [511.0, 196.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 785.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 195.0, "minX": 4.0, "maxY": 950.0, "series": [{"data": [[540.0, 196.0], [35.0, 202.0], [566.0, 196.0], [597.0, 196.0], [600.0, 195.0], [615.0, 195.0], [641.0, 195.0], [667.0, 196.0], [692.0, 196.0], [722.0, 195.0], [750.0, 195.0], [765.0, 195.0], [767.0, 195.0], [762.0, 195.0], [758.0, 195.0], [760.0, 195.0], [761.0, 195.0], [766.0, 195.0], [770.0, 195.0], [768.0, 195.0], [772.0, 195.0], [778.0, 195.0], [775.0, 195.0], [771.0, 195.0], [785.0, 195.0], [769.0, 195.0], [776.0, 195.0], [60.0, 202.0], [4.0, 950.0], [85.0, 203.0], [110.0, 198.0], [135.0, 198.0], [160.0, 197.0], [189.0, 196.0], [211.0, 196.0], [238.0, 195.0], [260.0, 196.0], [288.0, 196.0], [304.0, 195.0], [345.0, 195.0], [366.0, 195.0], [392.0, 195.0], [414.0, 195.0], [436.0, 195.0], [465.0, 196.0], [489.0, 196.0], [511.0, 196.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 785.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 135.65, "minX": 1.7731566E12, "maxY": 433.65, "series": [{"data": [[1.7731566E12, 433.65], [1.77315666E12, 135.65]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315666E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 138.15, "minX": 1.7731566E12, "maxY": 431.15, "series": [{"data": [[1.7731566E12, 431.15], [1.77315666E12, 138.15]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315666E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 138.15, "minX": 1.7731566E12, "maxY": 431.15, "series": [{"data": [[1.7731566E12, 431.15], [1.77315666E12, 138.15]], "isOverall": false, "label": "GET_welcome-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315666E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 138.15, "minX": 1.7731566E12, "maxY": 431.15, "series": [{"data": [[1.7731566E12, 431.15], [1.77315666E12, 138.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315666E12, "title": "Total Transactions Per Second"}},
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

