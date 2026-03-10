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
        data: {"result": {"minY": 190.0, "minX": 0.0, "maxY": 1066.0, "series": [{"data": [[0.0, 190.0], [0.1, 191.0], [0.2, 191.0], [0.3, 191.0], [0.4, 191.0], [0.5, 191.0], [0.6, 191.0], [0.7, 191.0], [0.8, 191.0], [0.9, 191.0], [1.0, 191.0], [1.1, 191.0], [1.2, 191.0], [1.3, 191.0], [1.4, 191.0], [1.5, 191.0], [1.6, 191.0], [1.7, 191.0], [1.8, 191.0], [1.9, 191.0], [2.0, 191.0], [2.1, 191.0], [2.2, 191.0], [2.3, 191.0], [2.4, 192.0], [2.5, 192.0], [2.6, 192.0], [2.7, 192.0], [2.8, 192.0], [2.9, 192.0], [3.0, 192.0], [3.1, 192.0], [3.2, 192.0], [3.3, 192.0], [3.4, 192.0], [3.5, 192.0], [3.6, 192.0], [3.7, 192.0], [3.8, 192.0], [3.9, 192.0], [4.0, 192.0], [4.1, 192.0], [4.2, 192.0], [4.3, 192.0], [4.4, 192.0], [4.5, 192.0], [4.6, 192.0], [4.7, 192.0], [4.8, 192.0], [4.9, 192.0], [5.0, 192.0], [5.1, 192.0], [5.2, 192.0], [5.3, 192.0], [5.4, 192.0], [5.5, 192.0], [5.6, 192.0], [5.7, 192.0], [5.8, 192.0], [5.9, 192.0], [6.0, 192.0], [6.1, 192.0], [6.2, 192.0], [6.3, 192.0], [6.4, 192.0], [6.5, 192.0], [6.6, 192.0], [6.7, 192.0], [6.8, 192.0], [6.9, 192.0], [7.0, 192.0], [7.1, 192.0], [7.2, 192.0], [7.3, 192.0], [7.4, 192.0], [7.5, 192.0], [7.6, 192.0], [7.7, 192.0], [7.8, 192.0], [7.9, 192.0], [8.0, 192.0], [8.1, 192.0], [8.2, 192.0], [8.3, 192.0], [8.4, 193.0], [8.5, 193.0], [8.6, 193.0], [8.7, 193.0], [8.8, 193.0], [8.9, 193.0], [9.0, 193.0], [9.1, 193.0], [9.2, 193.0], [9.3, 193.0], [9.4, 193.0], [9.5, 193.0], [9.6, 193.0], [9.7, 193.0], [9.8, 193.0], [9.9, 193.0], [10.0, 193.0], [10.1, 193.0], [10.2, 193.0], [10.3, 193.0], [10.4, 193.0], [10.5, 193.0], [10.6, 193.0], [10.7, 193.0], [10.8, 193.0], [10.9, 193.0], [11.0, 193.0], [11.1, 193.0], [11.2, 193.0], [11.3, 193.0], [11.4, 193.0], [11.5, 193.0], [11.6, 193.0], [11.7, 193.0], [11.8, 193.0], [11.9, 193.0], [12.0, 193.0], [12.1, 193.0], [12.2, 193.0], [12.3, 193.0], [12.4, 193.0], [12.5, 193.0], [12.6, 193.0], [12.7, 193.0], [12.8, 193.0], [12.9, 193.0], [13.0, 193.0], [13.1, 193.0], [13.2, 193.0], [13.3, 193.0], [13.4, 193.0], [13.5, 193.0], [13.6, 193.0], [13.7, 193.0], [13.8, 193.0], [13.9, 193.0], [14.0, 193.0], [14.1, 193.0], [14.2, 193.0], [14.3, 193.0], [14.4, 193.0], [14.5, 193.0], [14.6, 193.0], [14.7, 193.0], [14.8, 193.0], [14.9, 193.0], [15.0, 193.0], [15.1, 193.0], [15.2, 193.0], [15.3, 193.0], [15.4, 193.0], [15.5, 193.0], [15.6, 193.0], [15.7, 193.0], [15.8, 193.0], [15.9, 193.0], [16.0, 193.0], [16.1, 193.0], [16.2, 193.0], [16.3, 193.0], [16.4, 193.0], [16.5, 193.0], [16.6, 193.0], [16.7, 193.0], [16.8, 193.0], [16.9, 193.0], [17.0, 193.0], [17.1, 193.0], [17.2, 193.0], [17.3, 193.0], [17.4, 193.0], [17.5, 193.0], [17.6, 193.0], [17.7, 193.0], [17.8, 193.0], [17.9, 194.0], [18.0, 194.0], [18.1, 194.0], [18.2, 194.0], [18.3, 194.0], [18.4, 194.0], [18.5, 194.0], [18.6, 194.0], [18.7, 194.0], [18.8, 194.0], [18.9, 194.0], [19.0, 194.0], [19.1, 194.0], [19.2, 194.0], [19.3, 194.0], [19.4, 194.0], [19.5, 194.0], [19.6, 194.0], [19.7, 194.0], [19.8, 194.0], [19.9, 194.0], [20.0, 194.0], [20.1, 194.0], [20.2, 194.0], [20.3, 194.0], [20.4, 194.0], [20.5, 194.0], [20.6, 194.0], [20.7, 194.0], [20.8, 194.0], [20.9, 194.0], [21.0, 194.0], [21.1, 194.0], [21.2, 194.0], [21.3, 194.0], [21.4, 194.0], [21.5, 194.0], [21.6, 194.0], [21.7, 194.0], [21.8, 194.0], [21.9, 194.0], [22.0, 194.0], [22.1, 194.0], [22.2, 194.0], [22.3, 194.0], [22.4, 194.0], [22.5, 194.0], [22.6, 194.0], [22.7, 194.0], [22.8, 194.0], [22.9, 194.0], [23.0, 194.0], [23.1, 194.0], [23.2, 194.0], [23.3, 194.0], [23.4, 194.0], [23.5, 194.0], [23.6, 194.0], [23.7, 194.0], [23.8, 194.0], [23.9, 194.0], [24.0, 194.0], [24.1, 194.0], [24.2, 194.0], [24.3, 194.0], [24.4, 194.0], [24.5, 194.0], [24.6, 194.0], [24.7, 194.0], [24.8, 194.0], [24.9, 194.0], [25.0, 194.0], [25.1, 194.0], [25.2, 194.0], [25.3, 194.0], [25.4, 194.0], [25.5, 194.0], [25.6, 194.0], [25.7, 194.0], [25.8, 194.0], [25.9, 194.0], [26.0, 194.0], [26.1, 194.0], [26.2, 194.0], [26.3, 194.0], [26.4, 194.0], [26.5, 194.0], [26.6, 194.0], [26.7, 194.0], [26.8, 194.0], [26.9, 194.0], [27.0, 194.0], [27.1, 194.0], [27.2, 194.0], [27.3, 194.0], [27.4, 194.0], [27.5, 194.0], [27.6, 194.0], [27.7, 194.0], [27.8, 194.0], [27.9, 194.0], [28.0, 194.0], [28.1, 194.0], [28.2, 194.0], [28.3, 194.0], [28.4, 194.0], [28.5, 194.0], [28.6, 195.0], [28.7, 195.0], [28.8, 195.0], [28.9, 195.0], [29.0, 195.0], [29.1, 195.0], [29.2, 195.0], [29.3, 195.0], [29.4, 195.0], [29.5, 195.0], [29.6, 195.0], [29.7, 195.0], [29.8, 195.0], [29.9, 195.0], [30.0, 195.0], [30.1, 195.0], [30.2, 195.0], [30.3, 195.0], [30.4, 195.0], [30.5, 195.0], [30.6, 195.0], [30.7, 195.0], [30.8, 195.0], [30.9, 195.0], [31.0, 195.0], [31.1, 195.0], [31.2, 195.0], [31.3, 195.0], [31.4, 195.0], [31.5, 195.0], [31.6, 195.0], [31.7, 195.0], [31.8, 195.0], [31.9, 195.0], [32.0, 195.0], [32.1, 195.0], [32.2, 195.0], [32.3, 195.0], [32.4, 195.0], [32.5, 195.0], [32.6, 195.0], [32.7, 195.0], [32.8, 195.0], [32.9, 195.0], [33.0, 195.0], [33.1, 195.0], [33.2, 195.0], [33.3, 195.0], [33.4, 195.0], [33.5, 195.0], [33.6, 195.0], [33.7, 195.0], [33.8, 195.0], [33.9, 195.0], [34.0, 195.0], [34.1, 195.0], [34.2, 195.0], [34.3, 195.0], [34.4, 195.0], [34.5, 195.0], [34.6, 195.0], [34.7, 195.0], [34.8, 195.0], [34.9, 195.0], [35.0, 195.0], [35.1, 195.0], [35.2, 195.0], [35.3, 195.0], [35.4, 195.0], [35.5, 195.0], [35.6, 195.0], [35.7, 195.0], [35.8, 195.0], [35.9, 195.0], [36.0, 195.0], [36.1, 195.0], [36.2, 195.0], [36.3, 195.0], [36.4, 195.0], [36.5, 195.0], [36.6, 195.0], [36.7, 195.0], [36.8, 195.0], [36.9, 195.0], [37.0, 195.0], [37.1, 195.0], [37.2, 195.0], [37.3, 195.0], [37.4, 195.0], [37.5, 195.0], [37.6, 195.0], [37.7, 195.0], [37.8, 195.0], [37.9, 195.0], [38.0, 195.0], [38.1, 195.0], [38.2, 195.0], [38.3, 195.0], [38.4, 195.0], [38.5, 195.0], [38.6, 195.0], [38.7, 195.0], [38.8, 195.0], [38.9, 195.0], [39.0, 195.0], [39.1, 195.0], [39.2, 195.0], [39.3, 195.0], [39.4, 195.0], [39.5, 195.0], [39.6, 195.0], [39.7, 195.0], [39.8, 195.0], [39.9, 195.0], [40.0, 195.0], [40.1, 195.0], [40.2, 195.0], [40.3, 195.0], [40.4, 195.0], [40.5, 195.0], [40.6, 195.0], [40.7, 195.0], [40.8, 195.0], [40.9, 195.0], [41.0, 195.0], [41.1, 195.0], [41.2, 195.0], [41.3, 195.0], [41.4, 195.0], [41.5, 195.0], [41.6, 195.0], [41.7, 195.0], [41.8, 195.0], [41.9, 195.0], [42.0, 195.0], [42.1, 195.0], [42.2, 195.0], [42.3, 195.0], [42.4, 195.0], [42.5, 195.0], [42.6, 195.0], [42.7, 195.0], [42.8, 195.0], [42.9, 195.0], [43.0, 195.0], [43.1, 196.0], [43.2, 196.0], [43.3, 196.0], [43.4, 196.0], [43.5, 196.0], [43.6, 196.0], [43.7, 196.0], [43.8, 196.0], [43.9, 196.0], [44.0, 196.0], [44.1, 196.0], [44.2, 196.0], [44.3, 196.0], [44.4, 196.0], [44.5, 196.0], [44.6, 196.0], [44.7, 196.0], [44.8, 196.0], [44.9, 196.0], [45.0, 196.0], [45.1, 196.0], [45.2, 196.0], [45.3, 196.0], [45.4, 196.0], [45.5, 196.0], [45.6, 196.0], [45.7, 196.0], [45.8, 196.0], [45.9, 196.0], [46.0, 196.0], [46.1, 196.0], [46.2, 196.0], [46.3, 196.0], [46.4, 196.0], [46.5, 196.0], [46.6, 196.0], [46.7, 196.0], [46.8, 196.0], [46.9, 196.0], [47.0, 196.0], [47.1, 196.0], [47.2, 196.0], [47.3, 196.0], [47.4, 196.0], [47.5, 196.0], [47.6, 196.0], [47.7, 196.0], [47.8, 196.0], [47.9, 196.0], [48.0, 196.0], [48.1, 196.0], [48.2, 196.0], [48.3, 196.0], [48.4, 196.0], [48.5, 196.0], [48.6, 196.0], [48.7, 196.0], [48.8, 196.0], [48.9, 196.0], [49.0, 196.0], [49.1, 196.0], [49.2, 196.0], [49.3, 196.0], [49.4, 196.0], [49.5, 196.0], [49.6, 196.0], [49.7, 196.0], [49.8, 196.0], [49.9, 196.0], [50.0, 196.0], [50.1, 196.0], [50.2, 196.0], [50.3, 196.0], [50.4, 196.0], [50.5, 196.0], [50.6, 196.0], [50.7, 196.0], [50.8, 196.0], [50.9, 196.0], [51.0, 196.0], [51.1, 196.0], [51.2, 196.0], [51.3, 196.0], [51.4, 196.0], [51.5, 196.0], [51.6, 196.0], [51.7, 196.0], [51.8, 196.0], [51.9, 196.0], [52.0, 196.0], [52.1, 196.0], [52.2, 196.0], [52.3, 196.0], [52.4, 196.0], [52.5, 196.0], [52.6, 196.0], [52.7, 196.0], [52.8, 196.0], [52.9, 196.0], [53.0, 196.0], [53.1, 196.0], [53.2, 196.0], [53.3, 196.0], [53.4, 196.0], [53.5, 196.0], [53.6, 196.0], [53.7, 196.0], [53.8, 196.0], [53.9, 196.0], [54.0, 196.0], [54.1, 196.0], [54.2, 196.0], [54.3, 196.0], [54.4, 196.0], [54.5, 196.0], [54.6, 196.0], [54.7, 196.0], [54.8, 196.0], [54.9, 196.0], [55.0, 196.0], [55.1, 196.0], [55.2, 196.0], [55.3, 196.0], [55.4, 196.0], [55.5, 196.0], [55.6, 196.0], [55.7, 196.0], [55.8, 196.0], [55.9, 196.0], [56.0, 196.0], [56.1, 196.0], [56.2, 196.0], [56.3, 196.0], [56.4, 196.0], [56.5, 196.0], [56.6, 196.0], [56.7, 196.0], [56.8, 196.0], [56.9, 196.0], [57.0, 196.0], [57.1, 196.0], [57.2, 196.0], [57.3, 196.0], [57.4, 196.0], [57.5, 196.0], [57.6, 196.0], [57.7, 196.0], [57.8, 196.0], [57.9, 196.0], [58.0, 197.0], [58.1, 197.0], [58.2, 197.0], [58.3, 197.0], [58.4, 197.0], [58.5, 197.0], [58.6, 197.0], [58.7, 197.0], [58.8, 197.0], [58.9, 197.0], [59.0, 197.0], [59.1, 197.0], [59.2, 197.0], [59.3, 197.0], [59.4, 197.0], [59.5, 197.0], [59.6, 197.0], [59.7, 197.0], [59.8, 197.0], [59.9, 197.0], [60.0, 197.0], [60.1, 197.0], [60.2, 197.0], [60.3, 197.0], [60.4, 197.0], [60.5, 197.0], [60.6, 197.0], [60.7, 197.0], [60.8, 197.0], [60.9, 197.0], [61.0, 197.0], [61.1, 197.0], [61.2, 197.0], [61.3, 197.0], [61.4, 197.0], [61.5, 197.0], [61.6, 197.0], [61.7, 197.0], [61.8, 197.0], [61.9, 197.0], [62.0, 197.0], [62.1, 197.0], [62.2, 197.0], [62.3, 197.0], [62.4, 197.0], [62.5, 197.0], [62.6, 197.0], [62.7, 197.0], [62.8, 197.0], [62.9, 197.0], [63.0, 197.0], [63.1, 197.0], [63.2, 197.0], [63.3, 197.0], [63.4, 197.0], [63.5, 197.0], [63.6, 197.0], [63.7, 197.0], [63.8, 197.0], [63.9, 197.0], [64.0, 197.0], [64.1, 197.0], [64.2, 197.0], [64.3, 197.0], [64.4, 197.0], [64.5, 197.0], [64.6, 197.0], [64.7, 197.0], [64.8, 197.0], [64.9, 197.0], [65.0, 197.0], [65.1, 197.0], [65.2, 197.0], [65.3, 197.0], [65.4, 197.0], [65.5, 197.0], [65.6, 197.0], [65.7, 197.0], [65.8, 197.0], [65.9, 197.0], [66.0, 197.0], [66.1, 197.0], [66.2, 197.0], [66.3, 197.0], [66.4, 197.0], [66.5, 197.0], [66.6, 197.0], [66.7, 197.0], [66.8, 197.0], [66.9, 197.0], [67.0, 197.0], [67.1, 197.0], [67.2, 197.0], [67.3, 197.0], [67.4, 197.0], [67.5, 197.0], [67.6, 197.0], [67.7, 197.0], [67.8, 197.0], [67.9, 198.0], [68.0, 198.0], [68.1, 198.0], [68.2, 198.0], [68.3, 198.0], [68.4, 198.0], [68.5, 198.0], [68.6, 198.0], [68.7, 198.0], [68.8, 198.0], [68.9, 198.0], [69.0, 198.0], [69.1, 198.0], [69.2, 198.0], [69.3, 198.0], [69.4, 198.0], [69.5, 198.0], [69.6, 198.0], [69.7, 198.0], [69.8, 198.0], [69.9, 198.0], [70.0, 198.0], [70.1, 198.0], [70.2, 198.0], [70.3, 198.0], [70.4, 198.0], [70.5, 198.0], [70.6, 198.0], [70.7, 198.0], [70.8, 198.0], [70.9, 198.0], [71.0, 198.0], [71.1, 198.0], [71.2, 198.0], [71.3, 198.0], [71.4, 198.0], [71.5, 198.0], [71.6, 198.0], [71.7, 198.0], [71.8, 198.0], [71.9, 198.0], [72.0, 198.0], [72.1, 198.0], [72.2, 198.0], [72.3, 198.0], [72.4, 198.0], [72.5, 198.0], [72.6, 198.0], [72.7, 198.0], [72.8, 198.0], [72.9, 198.0], [73.0, 198.0], [73.1, 198.0], [73.2, 198.0], [73.3, 198.0], [73.4, 198.0], [73.5, 198.0], [73.6, 198.0], [73.7, 198.0], [73.8, 198.0], [73.9, 198.0], [74.0, 198.0], [74.1, 198.0], [74.2, 198.0], [74.3, 198.0], [74.4, 198.0], [74.5, 198.0], [74.6, 198.0], [74.7, 198.0], [74.8, 198.0], [74.9, 198.0], [75.0, 198.0], [75.1, 198.0], [75.2, 198.0], [75.3, 198.0], [75.4, 198.0], [75.5, 198.0], [75.6, 198.0], [75.7, 198.0], [75.8, 198.0], [75.9, 198.0], [76.0, 198.0], [76.1, 198.0], [76.2, 198.0], [76.3, 198.0], [76.4, 198.0], [76.5, 198.0], [76.6, 198.0], [76.7, 198.0], [76.8, 198.0], [76.9, 198.0], [77.0, 198.0], [77.1, 198.0], [77.2, 198.0], [77.3, 198.0], [77.4, 199.0], [77.5, 199.0], [77.6, 199.0], [77.7, 199.0], [77.8, 199.0], [77.9, 199.0], [78.0, 199.0], [78.1, 199.0], [78.2, 199.0], [78.3, 199.0], [78.4, 199.0], [78.5, 199.0], [78.6, 199.0], [78.7, 199.0], [78.8, 199.0], [78.9, 199.0], [79.0, 199.0], [79.1, 199.0], [79.2, 199.0], [79.3, 199.0], [79.4, 199.0], [79.5, 199.0], [79.6, 199.0], [79.7, 199.0], [79.8, 199.0], [79.9, 199.0], [80.0, 199.0], [80.1, 199.0], [80.2, 199.0], [80.3, 199.0], [80.4, 199.0], [80.5, 199.0], [80.6, 199.0], [80.7, 199.0], [80.8, 199.0], [80.9, 199.0], [81.0, 199.0], [81.1, 199.0], [81.2, 199.0], [81.3, 199.0], [81.4, 199.0], [81.5, 199.0], [81.6, 199.0], [81.7, 199.0], [81.8, 199.0], [81.9, 199.0], [82.0, 199.0], [82.1, 199.0], [82.2, 199.0], [82.3, 199.0], [82.4, 199.0], [82.5, 199.0], [82.6, 199.0], [82.7, 199.0], [82.8, 199.0], [82.9, 199.0], [83.0, 199.0], [83.1, 199.0], [83.2, 199.0], [83.3, 199.0], [83.4, 199.0], [83.5, 199.0], [83.6, 199.0], [83.7, 199.0], [83.8, 199.0], [83.9, 199.0], [84.0, 199.0], [84.1, 199.0], [84.2, 199.0], [84.3, 199.0], [84.4, 199.0], [84.5, 199.0], [84.6, 199.0], [84.7, 199.0], [84.8, 199.0], [84.9, 199.0], [85.0, 199.0], [85.1, 200.0], [85.2, 200.0], [85.3, 200.0], [85.4, 200.0], [85.5, 200.0], [85.6, 200.0], [85.7, 200.0], [85.8, 200.0], [85.9, 200.0], [86.0, 200.0], [86.1, 200.0], [86.2, 200.0], [86.3, 200.0], [86.4, 200.0], [86.5, 200.0], [86.6, 200.0], [86.7, 200.0], [86.8, 200.0], [86.9, 200.0], [87.0, 200.0], [87.1, 200.0], [87.2, 200.0], [87.3, 200.0], [87.4, 200.0], [87.5, 200.0], [87.6, 200.0], [87.7, 200.0], [87.8, 200.0], [87.9, 200.0], [88.0, 200.0], [88.1, 200.0], [88.2, 200.0], [88.3, 200.0], [88.4, 200.0], [88.5, 200.0], [88.6, 200.0], [88.7, 200.0], [88.8, 200.0], [88.9, 200.0], [89.0, 200.0], [89.1, 200.0], [89.2, 200.0], [89.3, 200.0], [89.4, 201.0], [89.5, 201.0], [89.6, 201.0], [89.7, 201.0], [89.8, 201.0], [89.9, 201.0], [90.0, 201.0], [90.1, 201.0], [90.2, 201.0], [90.3, 201.0], [90.4, 201.0], [90.5, 201.0], [90.6, 201.0], [90.7, 201.0], [90.8, 201.0], [90.9, 201.0], [91.0, 201.0], [91.1, 201.0], [91.2, 201.0], [91.3, 201.0], [91.4, 201.0], [91.5, 201.0], [91.6, 201.0], [91.7, 201.0], [91.8, 201.0], [91.9, 201.0], [92.0, 201.0], [92.1, 202.0], [92.2, 202.0], [92.3, 202.0], [92.4, 202.0], [92.5, 202.0], [92.6, 202.0], [92.7, 202.0], [92.8, 202.0], [92.9, 202.0], [93.0, 202.0], [93.1, 202.0], [93.2, 202.0], [93.3, 202.0], [93.4, 202.0], [93.5, 202.0], [93.6, 202.0], [93.7, 203.0], [93.8, 203.0], [93.9, 203.0], [94.0, 203.0], [94.1, 203.0], [94.2, 203.0], [94.3, 203.0], [94.4, 203.0], [94.5, 203.0], [94.6, 203.0], [94.7, 203.0], [94.8, 203.0], [94.9, 203.0], [95.0, 204.0], [95.1, 204.0], [95.2, 204.0], [95.3, 204.0], [95.4, 204.0], [95.5, 204.0], [95.6, 204.0], [95.7, 204.0], [95.8, 204.0], [95.9, 204.0], [96.0, 205.0], [96.1, 205.0], [96.2, 205.0], [96.3, 205.0], [96.4, 205.0], [96.5, 205.0], [96.6, 205.0], [96.7, 205.0], [96.8, 206.0], [96.9, 206.0], [97.0, 206.0], [97.1, 206.0], [97.2, 206.0], [97.3, 206.0], [97.4, 207.0], [97.5, 207.0], [97.6, 207.0], [97.7, 207.0], [97.8, 208.0], [97.9, 208.0], [98.0, 208.0], [98.1, 209.0], [98.2, 209.0], [98.3, 210.0], [98.4, 210.0], [98.5, 211.0], [98.6, 211.0], [98.7, 212.0], [98.8, 213.0], [98.9, 213.0], [99.0, 214.0], [99.1, 215.0], [99.2, 217.0], [99.3, 219.0], [99.4, 222.0], [99.5, 226.0], [99.6, 592.0], [99.7, 606.0], [99.8, 616.0], [99.9, 630.0]], "isOverall": false, "label": "GET_protected_authenticated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 28911.0, "series": [{"data": [[600.0, 113.0], [700.0, 1.0], [100.0, 28911.0], [200.0, 4917.0], [900.0, 1.0], [1000.0, 1.0], [500.0, 36.0]], "isOverall": false, "label": "GET_protected_authenticated", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 152.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 33828.0, "series": [{"data": [[0.0, 33828.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 152.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 39.9585987261147, "minX": 1.77315636E12, "maxY": 138.21400802221635, "series": [{"data": [[1.77315642E12, 138.21400802221635], [1.77315636E12, 39.9585987261147]], "isOverall": false, "label": "TG_resize_150_threads", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315642E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 193.0, "minX": 1.0, "maxY": 749.5, "series": [{"data": [[2.0, 194.0], [3.0, 196.0], [4.0, 196.0], [5.0, 193.0], [6.0, 749.5], [7.0, 284.8], [8.0, 272.16666666666663], [9.0, 262.42857142857144], [10.0, 255.37500000000003], [11.0, 247.66666666666663], [12.0, 241.99999999999997], [13.0, 239.27272727272728], [14.0, 236.0], [15.0, 227.0], [16.0, 235.46153846153845], [17.0, 229.25], [18.0, 224.9411764705882], [19.0, 243.72222222222223], [20.0, 201.05555555555554], [21.0, 219.81818181818178], [22.0, 222.4736842105263], [23.0, 220.45], [24.0, 238.77272727272734], [25.0, 219.30434782608697], [26.0, 219.91304347826085], [27.0, 215.8846153846154], [28.0, 214.55172413793102], [29.0, 217.79999999999998], [30.0, 214.78571428571428], [31.0, 212.09090909090904], [32.0, 210.47058823529412], [33.0, 211.90625000000003], [34.0, 213.15624999999997], [35.0, 212.4848484848485], [36.0, 211.85714285714286], [37.0, 221.94871794871787], [38.0, 202.6875], [39.0, 213.9459459459459], [40.0, 210.00000000000006], [41.0, 208.97435897435903], [42.0, 207.92499999999998], [43.0, 207.58139534883716], [44.0, 216.38636363636365], [45.0, 198.20454545454544], [46.0, 209.00000000000009], [47.0, 207.9583333333333], [48.0, 207.41304347826087], [49.0, 208.38775510204079], [50.0, 208.46153846153845], [51.0, 212.811320754717], [52.0, 199.46153846153848], [53.0, 205.1320754716981], [54.0, 205.5272727272727], [55.0, 210.6034482758621], [56.0, 203.2666666666667], [57.0, 203.73437499999997], [58.0, 196.35294117647058], [59.0, 205.18644067796612], [60.0, 204.96610169491527], [61.0, 206.0169491525424], [62.0, 204.015873015873], [63.0, 205.41935483870967], [64.0, 204.2222222222222], [65.0, 208.67164179104478], [66.0, 197.2878787878788], [67.0, 202.77272727272728], [68.0, 203.45454545454547], [69.0, 207.65714285714282], [70.0, 201.6619718309859], [71.0, 198.61764705882354], [72.0, 202.33802816901417], [73.0, 202.40845070422532], [74.0, 207.47297297297297], [75.0, 201.2948717948718], [76.0, 197.01250000000005], [77.0, 201.08974358974362], [78.0, 201.21052631578945], [79.0, 202.00000000000006], [80.0, 201.3924050632911], [81.0, 206.3658536585366], [82.0, 196.84146341463412], [83.0, 204.89156626506025], [84.0, 200.68235294117645], [85.0, 199.80681818181813], [86.0, 196.58823529411762], [87.0, 199.92391304347828], [88.0, 200.1460674157302], [89.0, 200.64705882352942], [90.0, 200.54838709677418], [91.0, 200.16483516483513], [92.0, 200.63440860215053], [93.0, 203.91578947368424], [94.0, 203.81632653061223], [95.0, 196.03191489361703], [96.0, 199.54255319148922], [97.0, 200.10309278350516], [98.0, 200.59793814432996], [99.0, 201.66326530612244], [100.0, 204.00970873786403], [101.0, 201.56349206349208], [102.0, 195.93589743589743], [103.0, 204.14851485148523], [104.0, 199.09523809523816], [105.0, 204.6132075471698], [106.0, 201.7545454545455], [107.0, 196.4485981308412], [108.0, 203.44954128440372], [109.0, 201.38888888888897], [110.0, 199.22881355932208], [111.0, 200.65094339622644], [112.0, 200.1181818181817], [113.0, 200.27433628318587], [114.0, 203.28695652173926], [115.0, 196.18421052631584], [116.0, 201.97391304347823], [117.0, 200.20689655172416], [118.0, 202.1101694915254], [119.0, 198.70491803278685], [120.0, 206.43089430894312], [121.0, 200.21100917431187], [122.0, 199.25000000000003], [123.0, 199.04000000000008], [124.0, 200.45528455284548], [125.0, 204.30399999999995], [126.0, 198.84126984126985], [127.0, 198.5833333333334], [128.0, 199.5275590551181], [129.0, 198.4488188976378], [130.0, 198.44961240310084], [131.0, 199.984375], [132.0, 200.124031007752], [133.0, 198.79545454545448], [134.0, 198.11278195488728], [135.0, 198.02985074626866], [136.0, 198.70588235294113], [137.0, 199.24444444444438], [138.0, 200.6571428571429], [139.0, 195.88970588235293], [140.0, 199.65942028985506], [141.0, 198.46715328467155], [142.0, 197.9712230215828], [143.0, 198.5971223021582], [144.0, 199.645390070922], [145.0, 199.78014184397162], [146.0, 198.95744680851075], [147.0, 198.13043478260863], [148.0, 198.69014084507046], [149.0, 199.27777777777763], [150.0, 196.5306826117319], [1.0, 201.0]], "isOverall": false, "label": "GET_protected_authenticated", "isController": false}, {"data": [[133.67424955856313, 198.47392583872818]], "isOverall": false, "label": "GET_protected_authenticated-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 8713.5, "minX": 1.77315636E12, "maxY": 186897.66666666666, "series": [{"data": [[1.77315642E12, 186897.66666666666], [1.77315636E12, 9053.666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77315642E12, 179875.5], [1.77315636E12, 8713.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315642E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 197.68602283246028, "minX": 1.77315636E12, "maxY": 214.73885350318463, "series": [{"data": [[1.77315642E12, 197.68602283246028], [1.77315636E12, 214.73885350318463]], "isOverall": false, "label": "GET_protected_authenticated", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315642E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 197.68235112619362, "minX": 1.77315636E12, "maxY": 214.710828025478, "series": [{"data": [[1.77315642E12, 197.68235112619362], [1.77315636E12, 214.710828025478]], "isOverall": false, "label": "GET_protected_authenticated", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315642E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.198642394322738, "minX": 1.77315636E12, "maxY": 15.54267515923569, "series": [{"data": [[1.77315642E12, 1.198642394322738], [1.77315636E12, 15.54267515923569]], "isOverall": false, "label": "GET_protected_authenticated", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315642E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 190.0, "minX": 1.77315636E12, "maxY": 1066.0, "series": [{"data": [[1.77315642E12, 633.0], [1.77315636E12, 1066.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77315642E12, 190.0], [1.77315636E12, 191.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77315642E12, 200.0], [1.77315636E12, 206.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77315642E12, 211.0], [1.77315636E12, 640.29]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77315642E12, 196.0], [1.77315636E12, 198.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77315642E12, 203.0], [1.77315636E12, 210.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315642E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 195.0, "minX": 15.0, "maxY": 206.0, "series": [{"data": [[520.0, 196.0], [548.0, 197.0], [567.0, 196.0], [599.0, 196.0], [624.0, 196.0], [651.0, 196.0], [681.0, 195.0], [45.0, 199.0], [706.0, 195.0], [721.0, 196.0], [767.0, 197.0], [757.0, 195.0], [760.0, 196.0], [761.0, 196.0], [759.0, 196.0], [758.0, 197.0], [755.0, 196.0], [763.0, 196.0], [766.0, 196.0], [765.0, 196.0], [753.0, 196.0], [743.0, 197.0], [768.0, 195.0], [773.0, 195.0], [772.0, 196.0], [769.0, 195.0], [774.0, 196.0], [71.0, 200.0], [93.0, 201.0], [120.0, 200.0], [145.0, 199.0], [154.0, 198.0], [195.0, 197.0], [216.0, 198.0], [15.0, 206.0], [246.0, 198.0], [270.0, 196.0], [296.0, 197.0], [314.0, 196.0], [323.0, 197.0], [342.0, 196.0], [370.0, 196.0], [399.0, 196.0], [420.0, 196.0], [457.0, 196.0], [469.0, 195.0], [499.0, 196.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 774.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 195.0, "minX": 15.0, "maxY": 206.0, "series": [{"data": [[520.0, 196.0], [548.0, 197.0], [567.0, 196.0], [599.0, 196.0], [624.0, 196.0], [651.0, 196.0], [681.0, 195.0], [45.0, 199.0], [706.0, 195.0], [721.0, 196.0], [767.0, 197.0], [757.0, 195.0], [760.0, 196.0], [761.0, 196.0], [759.0, 196.0], [758.0, 197.0], [755.0, 196.0], [763.0, 196.0], [766.0, 196.0], [765.0, 196.0], [753.0, 196.0], [743.0, 197.0], [768.0, 195.0], [773.0, 195.0], [772.0, 196.0], [769.0, 195.0], [774.0, 196.0], [71.0, 200.0], [93.0, 201.0], [120.0, 200.0], [145.0, 199.0], [154.0, 198.0], [195.0, 197.0], [216.0, 198.0], [15.0, 206.0], [246.0, 198.0], [270.0, 196.0], [296.0, 197.0], [314.0, 196.0], [323.0, 197.0], [342.0, 196.0], [370.0, 196.0], [399.0, 196.0], [420.0, 196.0], [457.0, 196.0], [469.0, 195.0], [499.0, 196.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 774.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 27.133333333333333, "minX": 1.77315636E12, "maxY": 539.2, "series": [{"data": [[1.77315642E12, 539.2], [1.77315636E12, 27.133333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315642E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 26.166666666666668, "minX": 1.77315636E12, "maxY": 540.1666666666666, "series": [{"data": [[1.77315642E12, 540.1666666666666], [1.77315636E12, 26.166666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315642E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 26.166666666666668, "minX": 1.77315636E12, "maxY": 540.1666666666666, "series": [{"data": [[1.77315642E12, 540.1666666666666], [1.77315636E12, 26.166666666666668]], "isOverall": false, "label": "GET_protected_authenticated-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315642E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 26.166666666666668, "minX": 1.77315636E12, "maxY": 540.1666666666666, "series": [{"data": [[1.77315642E12, 540.1666666666666], [1.77315636E12, 26.166666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315642E12, "title": "Total Transactions Per Second"}},
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

