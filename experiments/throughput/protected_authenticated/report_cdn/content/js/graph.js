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
        data: {"result": {"minY": 179.0, "minX": 0.0, "maxY": 3228.0, "series": [{"data": [[0.0, 179.0], [0.1, 181.0], [0.2, 181.0], [0.3, 181.0], [0.4, 181.0], [0.5, 181.0], [0.6, 182.0], [0.7, 182.0], [0.8, 182.0], [0.9, 182.0], [1.0, 182.0], [1.1, 182.0], [1.2, 182.0], [1.3, 182.0], [1.4, 182.0], [1.5, 182.0], [1.6, 182.0], [1.7, 183.0], [1.8, 183.0], [1.9, 183.0], [2.0, 183.0], [2.1, 183.0], [2.2, 183.0], [2.3, 183.0], [2.4, 183.0], [2.5, 183.0], [2.6, 183.0], [2.7, 183.0], [2.8, 183.0], [2.9, 183.0], [3.0, 183.0], [3.1, 183.0], [3.2, 183.0], [3.3, 183.0], [3.4, 184.0], [3.5, 184.0], [3.6, 184.0], [3.7, 184.0], [3.8, 184.0], [3.9, 184.0], [4.0, 184.0], [4.1, 184.0], [4.2, 184.0], [4.3, 184.0], [4.4, 184.0], [4.5, 184.0], [4.6, 184.0], [4.7, 184.0], [4.8, 184.0], [4.9, 184.0], [5.0, 184.0], [5.1, 184.0], [5.2, 185.0], [5.3, 185.0], [5.4, 185.0], [5.5, 185.0], [5.6, 185.0], [5.7, 185.0], [5.8, 185.0], [5.9, 185.0], [6.0, 185.0], [6.1, 185.0], [6.2, 185.0], [6.3, 185.0], [6.4, 185.0], [6.5, 185.0], [6.6, 185.0], [6.7, 185.0], [6.8, 185.0], [6.9, 185.0], [7.0, 185.0], [7.1, 185.0], [7.2, 186.0], [7.3, 186.0], [7.4, 186.0], [7.5, 186.0], [7.6, 186.0], [7.7, 186.0], [7.8, 186.0], [7.9, 186.0], [8.0, 186.0], [8.1, 186.0], [8.2, 186.0], [8.3, 186.0], [8.4, 186.0], [8.5, 186.0], [8.6, 186.0], [8.7, 186.0], [8.8, 186.0], [8.9, 186.0], [9.0, 186.0], [9.1, 186.0], [9.2, 186.0], [9.3, 186.0], [9.4, 187.0], [9.5, 187.0], [9.6, 187.0], [9.7, 187.0], [9.8, 187.0], [9.9, 187.0], [10.0, 187.0], [10.1, 187.0], [10.2, 187.0], [10.3, 187.0], [10.4, 187.0], [10.5, 187.0], [10.6, 187.0], [10.7, 187.0], [10.8, 187.0], [10.9, 187.0], [11.0, 187.0], [11.1, 187.0], [11.2, 187.0], [11.3, 187.0], [11.4, 187.0], [11.5, 187.0], [11.6, 187.0], [11.7, 187.0], [11.8, 188.0], [11.9, 188.0], [12.0, 188.0], [12.1, 188.0], [12.2, 188.0], [12.3, 188.0], [12.4, 188.0], [12.5, 188.0], [12.6, 188.0], [12.7, 188.0], [12.8, 188.0], [12.9, 188.0], [13.0, 188.0], [13.1, 188.0], [13.2, 188.0], [13.3, 188.0], [13.4, 188.0], [13.5, 188.0], [13.6, 188.0], [13.7, 188.0], [13.8, 188.0], [13.9, 188.0], [14.0, 188.0], [14.1, 188.0], [14.2, 188.0], [14.3, 189.0], [14.4, 189.0], [14.5, 189.0], [14.6, 189.0], [14.7, 189.0], [14.8, 189.0], [14.9, 189.0], [15.0, 189.0], [15.1, 189.0], [15.2, 189.0], [15.3, 189.0], [15.4, 189.0], [15.5, 189.0], [15.6, 189.0], [15.7, 189.0], [15.8, 189.0], [15.9, 189.0], [16.0, 189.0], [16.1, 189.0], [16.2, 189.0], [16.3, 189.0], [16.4, 189.0], [16.5, 189.0], [16.6, 189.0], [16.7, 189.0], [16.8, 189.0], [16.9, 190.0], [17.0, 190.0], [17.1, 190.0], [17.2, 190.0], [17.3, 190.0], [17.4, 190.0], [17.5, 190.0], [17.6, 190.0], [17.7, 190.0], [17.8, 190.0], [17.9, 190.0], [18.0, 190.0], [18.1, 190.0], [18.2, 190.0], [18.3, 190.0], [18.4, 190.0], [18.5, 190.0], [18.6, 190.0], [18.7, 190.0], [18.8, 190.0], [18.9, 190.0], [19.0, 190.0], [19.1, 190.0], [19.2, 190.0], [19.3, 190.0], [19.4, 190.0], [19.5, 190.0], [19.6, 191.0], [19.7, 191.0], [19.8, 191.0], [19.9, 191.0], [20.0, 191.0], [20.1, 191.0], [20.2, 191.0], [20.3, 191.0], [20.4, 191.0], [20.5, 191.0], [20.6, 191.0], [20.7, 191.0], [20.8, 191.0], [20.9, 191.0], [21.0, 191.0], [21.1, 191.0], [21.2, 191.0], [21.3, 191.0], [21.4, 191.0], [21.5, 191.0], [21.6, 191.0], [21.7, 192.0], [21.8, 192.0], [21.9, 192.0], [22.0, 192.0], [22.1, 192.0], [22.2, 192.0], [22.3, 192.0], [22.4, 192.0], [22.5, 192.0], [22.6, 192.0], [22.7, 192.0], [22.8, 192.0], [22.9, 192.0], [23.0, 192.0], [23.1, 192.0], [23.2, 192.0], [23.3, 192.0], [23.4, 192.0], [23.5, 192.0], [23.6, 193.0], [23.7, 193.0], [23.8, 193.0], [23.9, 193.0], [24.0, 193.0], [24.1, 193.0], [24.2, 193.0], [24.3, 193.0], [24.4, 193.0], [24.5, 193.0], [24.6, 193.0], [24.7, 193.0], [24.8, 193.0], [24.9, 193.0], [25.0, 193.0], [25.1, 193.0], [25.2, 193.0], [25.3, 193.0], [25.4, 194.0], [25.5, 194.0], [25.6, 194.0], [25.7, 194.0], [25.8, 194.0], [25.9, 194.0], [26.0, 194.0], [26.1, 194.0], [26.2, 194.0], [26.3, 194.0], [26.4, 194.0], [26.5, 194.0], [26.6, 194.0], [26.7, 194.0], [26.8, 194.0], [26.9, 194.0], [27.0, 195.0], [27.1, 195.0], [27.2, 195.0], [27.3, 195.0], [27.4, 195.0], [27.5, 195.0], [27.6, 195.0], [27.7, 195.0], [27.8, 195.0], [27.9, 195.0], [28.0, 195.0], [28.1, 195.0], [28.2, 195.0], [28.3, 195.0], [28.4, 195.0], [28.5, 196.0], [28.6, 196.0], [28.7, 196.0], [28.8, 196.0], [28.9, 196.0], [29.0, 196.0], [29.1, 196.0], [29.2, 196.0], [29.3, 196.0], [29.4, 196.0], [29.5, 196.0], [29.6, 196.0], [29.7, 196.0], [29.8, 196.0], [29.9, 197.0], [30.0, 197.0], [30.1, 197.0], [30.2, 197.0], [30.3, 197.0], [30.4, 197.0], [30.5, 197.0], [30.6, 197.0], [30.7, 197.0], [30.8, 197.0], [30.9, 197.0], [31.0, 197.0], [31.1, 197.0], [31.2, 197.0], [31.3, 197.0], [31.4, 198.0], [31.5, 198.0], [31.6, 198.0], [31.7, 198.0], [31.8, 198.0], [31.9, 198.0], [32.0, 198.0], [32.1, 198.0], [32.2, 198.0], [32.3, 198.0], [32.4, 198.0], [32.5, 198.0], [32.6, 198.0], [32.7, 198.0], [32.8, 198.0], [32.9, 199.0], [33.0, 199.0], [33.1, 199.0], [33.2, 199.0], [33.3, 199.0], [33.4, 199.0], [33.5, 199.0], [33.6, 199.0], [33.7, 199.0], [33.8, 199.0], [33.9, 199.0], [34.0, 199.0], [34.1, 199.0], [34.2, 200.0], [34.3, 200.0], [34.4, 200.0], [34.5, 200.0], [34.6, 200.0], [34.7, 200.0], [34.8, 200.0], [34.9, 200.0], [35.0, 200.0], [35.1, 200.0], [35.2, 200.0], [35.3, 200.0], [35.4, 200.0], [35.5, 201.0], [35.6, 201.0], [35.7, 201.0], [35.8, 201.0], [35.9, 201.0], [36.0, 201.0], [36.1, 201.0], [36.2, 201.0], [36.3, 201.0], [36.4, 201.0], [36.5, 201.0], [36.6, 201.0], [36.7, 202.0], [36.8, 202.0], [36.9, 202.0], [37.0, 202.0], [37.1, 202.0], [37.2, 202.0], [37.3, 202.0], [37.4, 202.0], [37.5, 202.0], [37.6, 202.0], [37.7, 202.0], [37.8, 202.0], [37.9, 202.0], [38.0, 202.0], [38.1, 202.0], [38.2, 202.0], [38.3, 203.0], [38.4, 203.0], [38.5, 203.0], [38.6, 203.0], [38.7, 203.0], [38.8, 203.0], [38.9, 203.0], [39.0, 203.0], [39.1, 203.0], [39.2, 203.0], [39.3, 203.0], [39.4, 203.0], [39.5, 203.0], [39.6, 203.0], [39.7, 203.0], [39.8, 203.0], [39.9, 203.0], [40.0, 203.0], [40.1, 203.0], [40.2, 203.0], [40.3, 203.0], [40.4, 203.0], [40.5, 203.0], [40.6, 203.0], [40.7, 203.0], [40.8, 204.0], [40.9, 204.0], [41.0, 204.0], [41.1, 204.0], [41.2, 204.0], [41.3, 204.0], [41.4, 204.0], [41.5, 204.0], [41.6, 204.0], [41.7, 204.0], [41.8, 204.0], [41.9, 204.0], [42.0, 204.0], [42.1, 204.0], [42.2, 204.0], [42.3, 204.0], [42.4, 204.0], [42.5, 204.0], [42.6, 204.0], [42.7, 204.0], [42.8, 204.0], [42.9, 204.0], [43.0, 204.0], [43.1, 204.0], [43.2, 204.0], [43.3, 204.0], [43.4, 205.0], [43.5, 205.0], [43.6, 205.0], [43.7, 205.0], [43.8, 205.0], [43.9, 205.0], [44.0, 205.0], [44.1, 205.0], [44.2, 205.0], [44.3, 205.0], [44.4, 205.0], [44.5, 205.0], [44.6, 205.0], [44.7, 205.0], [44.8, 205.0], [44.9, 205.0], [45.0, 205.0], [45.1, 205.0], [45.2, 205.0], [45.3, 205.0], [45.4, 205.0], [45.5, 205.0], [45.6, 205.0], [45.7, 205.0], [45.8, 205.0], [45.9, 205.0], [46.0, 206.0], [46.1, 206.0], [46.2, 206.0], [46.3, 206.0], [46.4, 206.0], [46.5, 206.0], [46.6, 206.0], [46.7, 206.0], [46.8, 206.0], [46.9, 206.0], [47.0, 206.0], [47.1, 206.0], [47.2, 206.0], [47.3, 206.0], [47.4, 206.0], [47.5, 206.0], [47.6, 206.0], [47.7, 206.0], [47.8, 206.0], [47.9, 206.0], [48.0, 206.0], [48.1, 206.0], [48.2, 206.0], [48.3, 206.0], [48.4, 206.0], [48.5, 206.0], [48.6, 207.0], [48.7, 207.0], [48.8, 207.0], [48.9, 207.0], [49.0, 207.0], [49.1, 207.0], [49.2, 207.0], [49.3, 207.0], [49.4, 207.0], [49.5, 207.0], [49.6, 207.0], [49.7, 207.0], [49.8, 207.0], [49.9, 207.0], [50.0, 207.0], [50.1, 207.0], [50.2, 207.0], [50.3, 207.0], [50.4, 207.0], [50.5, 207.0], [50.6, 207.0], [50.7, 207.0], [50.8, 207.0], [50.9, 207.0], [51.0, 207.0], [51.1, 207.0], [51.2, 208.0], [51.3, 208.0], [51.4, 208.0], [51.5, 208.0], [51.6, 208.0], [51.7, 208.0], [51.8, 208.0], [51.9, 208.0], [52.0, 208.0], [52.1, 208.0], [52.2, 208.0], [52.3, 208.0], [52.4, 208.0], [52.5, 208.0], [52.6, 208.0], [52.7, 208.0], [52.8, 208.0], [52.9, 208.0], [53.0, 208.0], [53.1, 208.0], [53.2, 208.0], [53.3, 208.0], [53.4, 208.0], [53.5, 209.0], [53.6, 209.0], [53.7, 209.0], [53.8, 209.0], [53.9, 209.0], [54.0, 209.0], [54.1, 209.0], [54.2, 209.0], [54.3, 209.0], [54.4, 209.0], [54.5, 209.0], [54.6, 209.0], [54.7, 209.0], [54.8, 209.0], [54.9, 209.0], [55.0, 209.0], [55.1, 209.0], [55.2, 209.0], [55.3, 209.0], [55.4, 209.0], [55.5, 209.0], [55.6, 209.0], [55.7, 209.0], [55.8, 209.0], [55.9, 210.0], [56.0, 210.0], [56.1, 210.0], [56.2, 210.0], [56.3, 210.0], [56.4, 210.0], [56.5, 210.0], [56.6, 210.0], [56.7, 210.0], [56.8, 210.0], [56.9, 210.0], [57.0, 210.0], [57.1, 210.0], [57.2, 210.0], [57.3, 210.0], [57.4, 210.0], [57.5, 210.0], [57.6, 210.0], [57.7, 210.0], [57.8, 210.0], [57.9, 210.0], [58.0, 210.0], [58.1, 211.0], [58.2, 211.0], [58.3, 211.0], [58.4, 211.0], [58.5, 211.0], [58.6, 211.0], [58.7, 211.0], [58.8, 211.0], [58.9, 211.0], [59.0, 211.0], [59.1, 211.0], [59.2, 211.0], [59.3, 211.0], [59.4, 211.0], [59.5, 211.0], [59.6, 211.0], [59.7, 211.0], [59.8, 211.0], [59.9, 211.0], [60.0, 211.0], [60.1, 211.0], [60.2, 211.0], [60.3, 211.0], [60.4, 211.0], [60.5, 212.0], [60.6, 212.0], [60.7, 212.0], [60.8, 212.0], [60.9, 212.0], [61.0, 212.0], [61.1, 212.0], [61.2, 212.0], [61.3, 212.0], [61.4, 212.0], [61.5, 212.0], [61.6, 212.0], [61.7, 212.0], [61.8, 212.0], [61.9, 212.0], [62.0, 212.0], [62.1, 212.0], [62.2, 212.0], [62.3, 212.0], [62.4, 212.0], [62.5, 212.0], [62.6, 212.0], [62.7, 212.0], [62.8, 212.0], [62.9, 213.0], [63.0, 213.0], [63.1, 213.0], [63.2, 213.0], [63.3, 213.0], [63.4, 213.0], [63.5, 213.0], [63.6, 213.0], [63.7, 213.0], [63.8, 213.0], [63.9, 213.0], [64.0, 213.0], [64.1, 213.0], [64.2, 213.0], [64.3, 213.0], [64.4, 213.0], [64.5, 213.0], [64.6, 213.0], [64.7, 213.0], [64.8, 213.0], [64.9, 213.0], [65.0, 213.0], [65.1, 213.0], [65.2, 213.0], [65.3, 214.0], [65.4, 214.0], [65.5, 214.0], [65.6, 214.0], [65.7, 214.0], [65.8, 214.0], [65.9, 214.0], [66.0, 214.0], [66.1, 214.0], [66.2, 214.0], [66.3, 214.0], [66.4, 214.0], [66.5, 214.0], [66.6, 214.0], [66.7, 214.0], [66.8, 214.0], [66.9, 214.0], [67.0, 214.0], [67.1, 214.0], [67.2, 214.0], [67.3, 214.0], [67.4, 214.0], [67.5, 214.0], [67.6, 215.0], [67.7, 215.0], [67.8, 215.0], [67.9, 215.0], [68.0, 215.0], [68.1, 215.0], [68.2, 215.0], [68.3, 215.0], [68.4, 215.0], [68.5, 215.0], [68.6, 215.0], [68.7, 215.0], [68.8, 215.0], [68.9, 215.0], [69.0, 215.0], [69.1, 215.0], [69.2, 215.0], [69.3, 215.0], [69.4, 215.0], [69.5, 215.0], [69.6, 215.0], [69.7, 215.0], [69.8, 216.0], [69.9, 216.0], [70.0, 216.0], [70.1, 216.0], [70.2, 216.0], [70.3, 216.0], [70.4, 216.0], [70.5, 216.0], [70.6, 216.0], [70.7, 216.0], [70.8, 216.0], [70.9, 216.0], [71.0, 216.0], [71.1, 216.0], [71.2, 216.0], [71.3, 216.0], [71.4, 216.0], [71.5, 216.0], [71.6, 216.0], [71.7, 216.0], [71.8, 216.0], [71.9, 216.0], [72.0, 217.0], [72.1, 217.0], [72.2, 217.0], [72.3, 217.0], [72.4, 217.0], [72.5, 217.0], [72.6, 217.0], [72.7, 217.0], [72.8, 217.0], [72.9, 217.0], [73.0, 217.0], [73.1, 217.0], [73.2, 217.0], [73.3, 217.0], [73.4, 217.0], [73.5, 217.0], [73.6, 217.0], [73.7, 217.0], [73.8, 217.0], [73.9, 217.0], [74.0, 217.0], [74.1, 217.0], [74.2, 217.0], [74.3, 218.0], [74.4, 218.0], [74.5, 218.0], [74.6, 218.0], [74.7, 218.0], [74.8, 218.0], [74.9, 218.0], [75.0, 218.0], [75.1, 218.0], [75.2, 218.0], [75.3, 218.0], [75.4, 218.0], [75.5, 218.0], [75.6, 218.0], [75.7, 218.0], [75.8, 218.0], [75.9, 218.0], [76.0, 218.0], [76.1, 218.0], [76.2, 218.0], [76.3, 219.0], [76.4, 219.0], [76.5, 219.0], [76.6, 219.0], [76.7, 219.0], [76.8, 219.0], [76.9, 219.0], [77.0, 219.0], [77.1, 219.0], [77.2, 219.0], [77.3, 219.0], [77.4, 219.0], [77.5, 219.0], [77.6, 219.0], [77.7, 219.0], [77.8, 219.0], [77.9, 219.0], [78.0, 219.0], [78.1, 219.0], [78.2, 219.0], [78.3, 220.0], [78.4, 220.0], [78.5, 220.0], [78.6, 220.0], [78.7, 220.0], [78.8, 220.0], [78.9, 220.0], [79.0, 220.0], [79.1, 220.0], [79.2, 220.0], [79.3, 220.0], [79.4, 220.0], [79.5, 220.0], [79.6, 220.0], [79.7, 220.0], [79.8, 220.0], [79.9, 221.0], [80.0, 221.0], [80.1, 221.0], [80.2, 221.0], [80.3, 221.0], [80.4, 221.0], [80.5, 221.0], [80.6, 221.0], [80.7, 221.0], [80.8, 221.0], [80.9, 221.0], [81.0, 221.0], [81.1, 222.0], [81.2, 222.0], [81.3, 222.0], [81.4, 222.0], [81.5, 222.0], [81.6, 222.0], [81.7, 222.0], [81.8, 222.0], [81.9, 222.0], [82.0, 222.0], [82.1, 222.0], [82.2, 223.0], [82.3, 223.0], [82.4, 223.0], [82.5, 223.0], [82.6, 223.0], [82.7, 223.0], [82.8, 223.0], [82.9, 223.0], [83.0, 223.0], [83.1, 223.0], [83.2, 224.0], [83.3, 224.0], [83.4, 224.0], [83.5, 224.0], [83.6, 224.0], [83.7, 224.0], [83.8, 224.0], [83.9, 224.0], [84.0, 225.0], [84.1, 225.0], [84.2, 225.0], [84.3, 225.0], [84.4, 225.0], [84.5, 225.0], [84.6, 225.0], [84.7, 225.0], [84.8, 226.0], [84.9, 226.0], [85.0, 226.0], [85.1, 226.0], [85.2, 226.0], [85.3, 226.0], [85.4, 226.0], [85.5, 227.0], [85.6, 227.0], [85.7, 227.0], [85.8, 227.0], [85.9, 227.0], [86.0, 228.0], [86.1, 228.0], [86.2, 228.0], [86.3, 228.0], [86.4, 229.0], [86.5, 229.0], [86.6, 229.0], [86.7, 230.0], [86.8, 230.0], [86.9, 230.0], [87.0, 231.0], [87.1, 231.0], [87.2, 231.0], [87.3, 232.0], [87.4, 232.0], [87.5, 233.0], [87.6, 234.0], [87.7, 235.0], [87.8, 236.0], [87.9, 238.0], [88.0, 241.0], [88.1, 245.0], [88.2, 248.0], [88.3, 253.0], [88.4, 258.0], [88.5, 262.0], [88.6, 268.0], [88.7, 273.0], [88.8, 278.0], [88.9, 281.0], [89.0, 283.0], [89.1, 286.0], [89.2, 289.0], [89.3, 292.0], [89.4, 295.0], [89.5, 298.0], [89.6, 300.0], [89.7, 303.0], [89.8, 306.0], [89.9, 308.0], [90.0, 309.0], [90.1, 311.0], [90.2, 313.0], [90.3, 314.0], [90.4, 316.0], [90.5, 318.0], [90.6, 319.0], [90.7, 321.0], [90.8, 322.0], [90.9, 323.0], [91.0, 325.0], [91.1, 326.0], [91.2, 328.0], [91.3, 329.0], [91.4, 331.0], [91.5, 332.0], [91.6, 333.0], [91.7, 334.0], [91.8, 335.0], [91.9, 336.0], [92.0, 338.0], [92.1, 339.0], [92.2, 341.0], [92.3, 342.0], [92.4, 343.0], [92.5, 345.0], [92.6, 347.0], [92.7, 349.0], [92.8, 351.0], [92.9, 353.0], [93.0, 355.0], [93.1, 357.0], [93.2, 360.0], [93.3, 362.0], [93.4, 365.0], [93.5, 369.0], [93.6, 372.0], [93.7, 376.0], [93.8, 380.0], [93.9, 385.0], [94.0, 390.0], [94.1, 394.0], [94.2, 401.0], [94.3, 406.0], [94.4, 412.0], [94.5, 416.0], [94.6, 421.0], [94.7, 424.0], [94.8, 427.0], [94.9, 430.0], [95.0, 433.0], [95.1, 434.0], [95.2, 437.0], [95.3, 439.0], [95.4, 442.0], [95.5, 443.0], [95.6, 444.0], [95.7, 446.0], [95.8, 448.0], [95.9, 449.0], [96.0, 450.0], [96.1, 451.0], [96.2, 453.0], [96.3, 455.0], [96.4, 456.0], [96.5, 458.0], [96.6, 459.0], [96.7, 460.0], [96.8, 462.0], [96.9, 463.0], [97.0, 464.0], [97.1, 465.0], [97.2, 466.0], [97.3, 468.0], [97.4, 469.0], [97.5, 471.0], [97.6, 473.0], [97.7, 475.0], [97.8, 477.0], [97.9, 480.0], [98.0, 484.0], [98.1, 488.0], [98.2, 493.0], [98.3, 512.0], [98.4, 556.0], [98.5, 581.0], [98.6, 612.0], [98.7, 635.0], [98.8, 664.0], [98.9, 759.0], [99.0, 786.0], [99.1, 802.0], [99.2, 817.0], [99.3, 850.0], [99.4, 925.0], [99.5, 978.0], [99.6, 1009.0], [99.7, 1048.0], [99.8, 1179.0], [99.9, 1418.0], [100.0, 3228.0]], "isOverall": false, "label": "GET_protected_authenticated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 16064.0, "series": [{"data": [[600.0, 90.0], [700.0, 74.0], [800.0, 84.0], [900.0, 57.0], [1000.0, 56.0], [1100.0, 14.0], [1200.0, 4.0], [1300.0, 16.0], [1400.0, 13.0], [1500.0, 6.0], [100.0, 9909.0], [1600.0, 2.0], [1700.0, 1.0], [1800.0, 3.0], [1900.0, 1.0], [2100.0, 1.0], [2400.0, 1.0], [2800.0, 3.0], [2900.0, 1.0], [3000.0, 1.0], [200.0, 16064.0], [3200.0, 1.0], [300.0, 1345.0], [400.0, 1185.0], [500.0, 73.0]], "isOverall": false, "label": "GET_protected_authenticated", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 21.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 28504.0, "series": [{"data": [[0.0, 28504.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 480.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 21.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 124.25004205686042, "minX": 1.77315816E12, "maxY": 149.00179018975996, "series": [{"data": [[1.77315822E12, 149.00179018975996], [1.77315816E12, 124.25004205686042]], "isOverall": false, "label": "TG_resize_150_threads", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315822E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 214.06249999999997, "minX": 1.0, "maxY": 1485.0, "series": [{"data": [[2.0, 1414.0], [3.0, 786.0], [4.0, 1485.0], [5.0, 796.0], [6.0, 828.0], [7.0, 751.0], [8.0, 635.2], [9.0, 475.25], [10.0, 364.7142857142857], [11.0, 352.8], [12.0, 429.8571428571429], [13.0, 575.5555555555555], [14.0, 378.33333333333326], [15.0, 302.6363636363636], [16.0, 246.33333333333331], [17.0, 303.42857142857144], [18.0, 252.33333333333337], [19.0, 256.4], [20.0, 316.69230769230774], [21.0, 240.25], [22.0, 268.3333333333333], [23.0, 318.1904761904762], [24.0, 217.45000000000002], [25.0, 222.41176470588232], [26.0, 284.5454545454545], [27.0, 238.875], [28.0, 256.29166666666674], [29.0, 238.85185185185185], [30.0, 241.41666666666666], [31.0, 233.34782608695653], [32.0, 255.95833333333334], [33.0, 270.47826086956525], [34.0, 230.92857142857142], [35.0, 308.0606060606061], [36.0, 229.22222222222223], [37.0, 249.5806451612903], [38.0, 232.58823529411768], [39.0, 216.29999999999998], [40.0, 277.3428571428572], [41.0, 216.2941176470589], [42.0, 243.15625000000003], [43.0, 253.65714285714284], [44.0, 246.1351351351351], [45.0, 230.08333333333337], [46.0, 268.9473684210527], [47.0, 253.95454545454544], [48.0, 225.075], [49.0, 236.67567567567565], [50.0, 288.5909090909091], [51.0, 220.86666666666667], [52.0, 233.22727272727278], [53.0, 217.95555555555558], [54.0, 223.60869565217396], [55.0, 264.77272727272725], [56.0, 224.6222222222222], [57.0, 265.0816326530612], [58.0, 226.20833333333331], [59.0, 224.19230769230768], [60.0, 237.56140350877197], [61.0, 278.7037037037038], [62.0, 223.6491228070175], [63.0, 220.60000000000005], [64.0, 231.72222222222217], [65.0, 225.96610169491527], [66.0, 246.91071428571422], [67.0, 221.83333333333334], [68.0, 239.4067796610169], [69.0, 231.36842105263156], [70.0, 230.01724137931035], [71.0, 225.42105263157893], [72.0, 240.28571428571428], [73.0, 257.0666666666667], [74.0, 217.85483870967744], [75.0, 227.85937499999997], [76.0, 231.93846153846152], [77.0, 229.47692307692313], [78.0, 254.3749999999999], [79.0, 261.19999999999993], [80.0, 232.44444444444446], [81.0, 271.463768115942], [82.0, 245.9], [83.0, 231.38571428571436], [84.0, 265.42465753424653], [85.0, 228.1714285714286], [86.0, 237.39189189189193], [87.0, 229.98648648648646], [88.0, 248.38461538461544], [89.0, 233.70270270270274], [90.0, 227.99999999999997], [91.0, 229.45000000000005], [92.0, 237.6794871794872], [93.0, 222.51898734177223], [94.0, 250.2125], [95.0, 236.2222222222223], [96.0, 238.00000000000006], [97.0, 231.7901234567901], [98.0, 222.81690140845066], [99.0, 252.27272727272737], [100.0, 217.37349397590367], [101.0, 269.551724137931], [102.0, 231.28888888888892], [103.0, 245.94505494505492], [104.0, 226.51111111111118], [105.0, 225.69565217391298], [106.0, 253.7731958762886], [107.0, 227.65116279069764], [108.0, 236.13541666666669], [109.0, 226.48979591836738], [110.0, 221.51648351648348], [111.0, 225.0416666666667], [112.0, 232.97894736842113], [113.0, 236.38613861386133], [114.0, 214.06249999999997], [115.0, 238.3627450980392], [116.0, 218.5049504950495], [117.0, 239.84693877551027], [118.0, 232.46153846153834], [119.0, 227.86734693877557], [120.0, 237.56074766355133], [121.0, 217.14141414141412], [122.0, 270.0540540540543], [123.0, 221.02884615384616], [124.0, 233.4537037037037], [125.0, 216.4807692307693], [126.0, 238.56637168141594], [127.0, 241.1603773584905], [128.0, 234.51785714285703], [129.0, 224.58333333333334], [130.0, 245.373831775701], [131.0, 238.65178571428567], [132.0, 237.22123893805315], [133.0, 234.6465517241379], [134.0, 233.46491228070178], [135.0, 244.14782608695643], [136.0, 230.72033898305088], [137.0, 227.69026548672562], [138.0, 232.16666666666669], [139.0, 239.12396694214877], [140.0, 228.3644067796611], [141.0, 223.74400000000003], [142.0, 234.63414634146332], [143.0, 223.59016393442622], [144.0, 228.63636363636357], [145.0, 231.24800000000005], [146.0, 222.8474576271187], [147.0, 246.03100775193795], [148.0, 239.94827586206895], [149.0, 234.20155038759685], [150.0, 230.43961501049486], [1.0, 875.0]], "isOverall": false, "label": "GET_protected_authenticated", "isController": false}, {"data": [[133.78379589725884, 232.97752111704852]], "isOverall": false, "label": "GET_protected_authenticated-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 62004.6, "minX": 1.77315816E12, "maxY": 244039.61666666667, "series": [{"data": [[1.77315822E12, 152872.16666666666], [1.77315816E12, 244039.61666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77315822E12, 62004.6], [1.77315816E12, 98973.15]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315822E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 231.22171500178948, "minX": 1.77315816E12, "maxY": 234.07749677564, "series": [{"data": [[1.77315822E12, 231.22171500178948], [1.77315816E12, 234.07749677564]], "isOverall": false, "label": "GET_protected_authenticated", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315822E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 231.21876118868573, "minX": 1.77315816E12, "maxY": 234.07076767790065, "series": [{"data": [[1.77315822E12, 231.21876118868573], [1.77315816E12, 234.07076767790065]], "isOverall": false, "label": "GET_protected_authenticated", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315822E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.77315816E12, "maxY": 0.633824931307131, "series": [{"data": [[1.77315822E12, 0.0], [1.77315816E12, 0.633824931307131]], "isOverall": false, "label": "GET_protected_authenticated", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315822E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 179.0, "minX": 1.77315816E12, "maxY": 3228.0, "series": [{"data": [[1.77315822E12, 2896.0], [1.77315816E12, 3228.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.77315822E12, 179.0], [1.77315816E12, 179.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.77315822E12, 310.0], [1.77315816E12, 309.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.77315822E12, 787.0], [1.77315816E12, 785.6399999999994]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.77315822E12, 207.0], [1.77315816E12, 207.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.77315822E12, 427.0], [1.77315816E12, 436.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315822E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 206.0, "minX": 14.0, "maxY": 562.0, "series": [{"data": [[523.0, 207.0], [539.0, 207.0], [555.0, 207.0], [36.0, 217.0], [586.0, 207.0], [621.0, 206.0], [623.0, 207.0], [639.0, 208.0], [637.0, 208.0], [653.0, 207.0], [660.0, 209.0], [663.0, 206.0], [652.0, 207.0], [643.0, 208.0], [641.0, 207.0], [655.0, 207.0], [657.0, 208.0], [651.0, 207.0], [649.0, 207.0], [650.0, 207.0], [658.0, 207.0], [646.0, 207.0], [647.0, 206.0], [58.0, 211.0], [88.0, 210.5], [111.0, 210.0], [119.0, 209.0], [125.0, 210.0], [149.0, 206.0], [164.0, 209.5], [192.0, 207.0], [212.0, 207.0], [14.0, 562.0], [240.0, 208.0], [268.0, 206.5], [282.0, 207.0], [296.0, 208.5], [315.0, 208.0], [342.0, 208.0], [365.0, 207.0], [388.0, 208.0], [396.0, 207.0], [440.0, 207.0], [461.0, 208.0], [473.0, 207.0], [500.0, 206.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 663.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 206.0, "minX": 14.0, "maxY": 562.0, "series": [{"data": [[523.0, 207.0], [539.0, 207.0], [555.0, 207.0], [36.0, 217.0], [586.0, 207.0], [621.0, 206.0], [623.0, 207.0], [639.0, 208.0], [637.0, 208.0], [653.0, 207.0], [660.0, 209.0], [663.0, 206.0], [652.0, 207.0], [643.0, 208.0], [641.0, 207.0], [655.0, 207.0], [657.0, 208.0], [651.0, 207.0], [649.0, 207.0], [650.0, 207.0], [658.0, 207.0], [646.0, 207.0], [647.0, 206.0], [58.0, 211.0], [88.0, 210.5], [111.0, 210.0], [119.0, 209.0], [125.0, 210.0], [149.0, 206.0], [164.0, 209.5], [192.0, 207.0], [212.0, 207.0], [14.0, 562.0], [240.0, 208.0], [268.0, 206.5], [282.0, 207.0], [296.0, 208.5], [315.0, 208.0], [342.0, 208.0], [365.0, 207.0], [388.0, 208.0], [396.0, 207.0], [440.0, 207.0], [461.0, 208.0], [473.0, 207.0], [500.0, 206.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 663.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 183.7, "minX": 1.77315816E12, "maxY": 299.71666666666664, "series": [{"data": [[1.77315822E12, 183.7], [1.77315816E12, 299.71666666666664]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315822E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 186.2, "minX": 1.77315816E12, "maxY": 297.21666666666664, "series": [{"data": [[1.77315822E12, 186.2], [1.77315816E12, 297.21666666666664]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77315822E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 186.2, "minX": 1.77315816E12, "maxY": 297.21666666666664, "series": [{"data": [[1.77315822E12, 186.2], [1.77315816E12, 297.21666666666664]], "isOverall": false, "label": "GET_protected_authenticated-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315822E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 186.2, "minX": 1.77315816E12, "maxY": 297.21666666666664, "series": [{"data": [[1.77315822E12, 186.2], [1.77315816E12, 297.21666666666664]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77315822E12, "title": "Total Transactions Per Second"}},
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

