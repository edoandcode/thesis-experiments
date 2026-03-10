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
        data: {"result": {"minY": 207.0, "minX": 0.0, "maxY": 1598.0, "series": [{"data": [[0.0, 207.0], [0.1, 210.0], [0.2, 210.0], [0.3, 211.0], [0.4, 211.0], [0.5, 212.0], [0.6, 212.0], [0.7, 212.0], [0.8, 213.0], [0.9, 213.0], [1.0, 213.0], [1.1, 214.0], [1.2, 214.0], [1.3, 215.0], [1.4, 215.0], [1.5, 216.0], [1.6, 216.0], [1.7, 216.0], [1.8, 217.0], [1.9, 217.0], [2.0, 218.0], [2.1, 219.0], [2.2, 219.0], [2.3, 219.0], [2.4, 220.0], [2.5, 220.0], [2.6, 221.0], [2.7, 221.0], [2.8, 222.0], [2.9, 223.0], [3.0, 223.0], [3.1, 224.0], [3.2, 225.0], [3.3, 226.0], [3.4, 227.0], [3.5, 227.0], [3.6, 228.0], [3.7, 229.0], [3.8, 230.0], [3.9, 231.0], [4.0, 232.0], [4.1, 233.0], [4.2, 234.0], [4.3, 235.0], [4.4, 236.0], [4.5, 238.0], [4.6, 239.0], [4.7, 240.0], [4.8, 241.0], [4.9, 242.0], [5.0, 244.0], [5.1, 245.0], [5.2, 247.0], [5.3, 248.0], [5.4, 251.0], [5.5, 254.0], [5.6, 256.0], [5.7, 257.0], [5.8, 259.0], [5.9, 261.0], [6.0, 262.0], [6.1, 263.0], [6.2, 265.0], [6.3, 266.0], [6.4, 267.0], [6.5, 269.0], [6.6, 272.0], [6.7, 273.0], [6.8, 274.0], [6.9, 276.0], [7.0, 278.0], [7.1, 280.0], [7.2, 282.0], [7.3, 283.0], [7.4, 284.0], [7.5, 288.0], [7.6, 291.0], [7.7, 293.0], [7.8, 295.0], [7.9, 297.0], [8.0, 298.0], [8.1, 300.0], [8.2, 303.0], [8.3, 305.0], [8.4, 306.0], [8.5, 308.0], [8.6, 309.0], [8.7, 310.0], [8.8, 311.0], [8.9, 313.0], [9.0, 315.0], [9.1, 315.0], [9.2, 318.0], [9.3, 320.0], [9.4, 321.0], [9.5, 322.0], [9.6, 323.0], [9.7, 325.0], [9.8, 328.0], [9.9, 330.0], [10.0, 331.0], [10.1, 334.0], [10.2, 336.0], [10.3, 337.0], [10.4, 339.0], [10.5, 342.0], [10.6, 346.0], [10.7, 348.0], [10.8, 350.0], [10.9, 353.0], [11.0, 355.0], [11.1, 356.0], [11.2, 359.0], [11.3, 362.0], [11.4, 368.0], [11.5, 378.0], [11.6, 379.0], [11.7, 383.0], [11.8, 386.0], [11.9, 389.0], [12.0, 390.0], [12.1, 392.0], [12.2, 394.0], [12.3, 396.0], [12.4, 397.0], [12.5, 398.0], [12.6, 400.0], [12.7, 401.0], [12.8, 402.0], [12.9, 403.0], [13.0, 406.0], [13.1, 407.0], [13.2, 408.0], [13.3, 408.0], [13.4, 409.0], [13.5, 410.0], [13.6, 412.0], [13.7, 413.0], [13.8, 413.0], [13.9, 414.0], [14.0, 415.0], [14.1, 415.0], [14.2, 416.0], [14.3, 417.0], [14.4, 418.0], [14.5, 419.0], [14.6, 420.0], [14.7, 421.0], [14.8, 422.0], [14.9, 423.0], [15.0, 424.0], [15.1, 426.0], [15.2, 427.0], [15.3, 428.0], [15.4, 430.0], [15.5, 433.0], [15.6, 435.0], [15.7, 438.0], [15.8, 441.0], [15.9, 444.0], [16.0, 445.0], [16.1, 446.0], [16.2, 448.0], [16.3, 450.0], [16.4, 451.0], [16.5, 453.0], [16.6, 454.0], [16.7, 456.0], [16.8, 456.0], [16.9, 458.0], [17.0, 459.0], [17.1, 461.0], [17.2, 462.0], [17.3, 466.0], [17.4, 468.0], [17.5, 470.0], [17.6, 476.0], [17.7, 480.0], [17.8, 483.0], [17.9, 488.0], [18.0, 494.0], [18.1, 496.0], [18.2, 498.0], [18.3, 502.0], [18.4, 505.0], [18.5, 507.0], [18.6, 508.0], [18.7, 510.0], [18.8, 513.0], [18.9, 516.0], [19.0, 517.0], [19.1, 522.0], [19.2, 523.0], [19.3, 525.0], [19.4, 528.0], [19.5, 531.0], [19.6, 533.0], [19.7, 536.0], [19.8, 539.0], [19.9, 542.0], [20.0, 545.0], [20.1, 549.0], [20.2, 553.0], [20.3, 555.0], [20.4, 556.0], [20.5, 559.0], [20.6, 562.0], [20.7, 565.0], [20.8, 565.0], [20.9, 567.0], [21.0, 568.0], [21.1, 570.0], [21.2, 572.0], [21.3, 575.0], [21.4, 577.0], [21.5, 579.0], [21.6, 581.0], [21.7, 582.0], [21.8, 584.0], [21.9, 586.0], [22.0, 587.0], [22.1, 589.0], [22.2, 590.0], [22.3, 591.0], [22.4, 593.0], [22.5, 594.0], [22.6, 595.0], [22.7, 598.0], [22.8, 600.0], [22.9, 600.0], [23.0, 602.0], [23.1, 604.0], [23.2, 607.0], [23.3, 610.0], [23.4, 612.0], [23.5, 614.0], [23.6, 616.0], [23.7, 618.0], [23.8, 621.0], [23.9, 623.0], [24.0, 626.0], [24.1, 630.0], [24.2, 635.0], [24.3, 640.0], [24.4, 643.0], [24.5, 646.0], [24.6, 648.0], [24.7, 650.0], [24.8, 653.0], [24.9, 655.0], [25.0, 656.0], [25.1, 658.0], [25.2, 664.0], [25.3, 666.0], [25.4, 669.0], [25.5, 672.0], [25.6, 674.0], [25.7, 676.0], [25.8, 677.0], [25.9, 680.0], [26.0, 682.0], [26.1, 685.0], [26.2, 686.0], [26.3, 688.0], [26.4, 690.0], [26.5, 693.0], [26.6, 696.0], [26.7, 697.0], [26.8, 699.0], [26.9, 702.0], [27.0, 703.0], [27.1, 704.0], [27.2, 706.0], [27.3, 709.0], [27.4, 711.0], [27.5, 713.0], [27.6, 716.0], [27.7, 717.0], [27.8, 719.0], [27.9, 721.0], [28.0, 723.0], [28.1, 726.0], [28.2, 730.0], [28.3, 736.0], [28.4, 740.0], [28.5, 742.0], [28.6, 746.0], [28.7, 749.0], [28.8, 752.0], [28.9, 757.0], [29.0, 759.0], [29.1, 762.0], [29.2, 766.0], [29.3, 770.0], [29.4, 772.0], [29.5, 773.0], [29.6, 775.0], [29.7, 776.0], [29.8, 779.0], [29.9, 783.0], [30.0, 784.0], [30.1, 786.0], [30.2, 788.0], [30.3, 790.0], [30.4, 792.0], [30.5, 796.0], [30.6, 799.0], [30.7, 803.0], [30.8, 808.0], [30.9, 813.0], [31.0, 817.0], [31.1, 821.0], [31.2, 825.0], [31.3, 829.0], [31.4, 835.0], [31.5, 839.0], [31.6, 840.0], [31.7, 848.0], [31.8, 854.0], [31.9, 858.0], [32.0, 863.0], [32.1, 866.0], [32.2, 869.0], [32.3, 874.0], [32.4, 877.0], [32.5, 878.0], [32.6, 882.0], [32.7, 884.0], [32.8, 887.0], [32.9, 890.0], [33.0, 894.0], [33.1, 896.0], [33.2, 901.0], [33.3, 902.0], [33.4, 905.0], [33.5, 907.0], [33.6, 910.0], [33.7, 912.0], [33.8, 917.0], [33.9, 922.0], [34.0, 924.0], [34.1, 934.0], [34.2, 941.0], [34.3, 948.0], [34.4, 951.0], [34.5, 954.0], [34.6, 956.0], [34.7, 959.0], [34.8, 962.0], [34.9, 965.0], [35.0, 968.0], [35.1, 971.0], [35.2, 973.0], [35.3, 976.0], [35.4, 979.0], [35.5, 981.0], [35.6, 984.0], [35.7, 985.0], [35.8, 986.0], [35.9, 987.0], [36.0, 988.0], [36.1, 990.0], [36.2, 992.0], [36.3, 993.0], [36.4, 994.0], [36.5, 995.0], [36.6, 996.0], [36.7, 997.0], [36.8, 999.0], [36.9, 1000.0], [37.0, 1001.0], [37.1, 1002.0], [37.2, 1003.0], [37.3, 1006.0], [37.4, 1006.0], [37.5, 1009.0], [37.6, 1009.0], [37.7, 1010.0], [37.8, 1011.0], [37.9, 1013.0], [38.0, 1014.0], [38.1, 1015.0], [38.2, 1017.0], [38.3, 1018.0], [38.4, 1019.0], [38.5, 1021.0], [38.6, 1023.0], [38.7, 1025.0], [38.8, 1025.0], [38.9, 1027.0], [39.0, 1029.0], [39.1, 1030.0], [39.2, 1031.0], [39.3, 1032.0], [39.4, 1034.0], [39.5, 1035.0], [39.6, 1036.0], [39.7, 1037.0], [39.8, 1038.0], [39.9, 1039.0], [40.0, 1040.0], [40.1, 1040.0], [40.2, 1042.0], [40.3, 1043.0], [40.4, 1044.0], [40.5, 1045.0], [40.6, 1047.0], [40.7, 1048.0], [40.8, 1049.0], [40.9, 1050.0], [41.0, 1051.0], [41.1, 1053.0], [41.2, 1054.0], [41.3, 1055.0], [41.4, 1057.0], [41.5, 1058.0], [41.6, 1060.0], [41.7, 1063.0], [41.8, 1065.0], [41.9, 1069.0], [42.0, 1072.0], [42.1, 1072.0], [42.2, 1075.0], [42.3, 1079.0], [42.4, 1081.0], [42.5, 1083.0], [42.6, 1086.0], [42.7, 1088.0], [42.8, 1090.0], [42.9, 1098.0], [43.0, 1101.0], [43.1, 1103.0], [43.2, 1106.0], [43.3, 1108.0], [43.4, 1112.0], [43.5, 1114.0], [43.6, 1119.0], [43.7, 1122.0], [43.8, 1124.0], [43.9, 1126.0], [44.0, 1129.0], [44.1, 1131.0], [44.2, 1133.0], [44.3, 1136.0], [44.4, 1138.0], [44.5, 1139.0], [44.6, 1140.0], [44.7, 1142.0], [44.8, 1144.0], [44.9, 1146.0], [45.0, 1148.0], [45.1, 1149.0], [45.2, 1151.0], [45.3, 1152.0], [45.4, 1153.0], [45.5, 1154.0], [45.6, 1154.0], [45.7, 1155.0], [45.8, 1156.0], [45.9, 1156.0], [46.0, 1158.0], [46.1, 1159.0], [46.2, 1160.0], [46.3, 1161.0], [46.4, 1161.0], [46.5, 1162.0], [46.6, 1163.0], [46.7, 1163.0], [46.8, 1164.0], [46.9, 1165.0], [47.0, 1166.0], [47.1, 1166.0], [47.2, 1167.0], [47.3, 1167.0], [47.4, 1168.0], [47.5, 1168.0], [47.6, 1169.0], [47.7, 1169.0], [47.8, 1169.0], [47.9, 1170.0], [48.0, 1171.0], [48.1, 1171.0], [48.2, 1171.0], [48.3, 1172.0], [48.4, 1172.0], [48.5, 1173.0], [48.6, 1173.0], [48.7, 1173.0], [48.8, 1174.0], [48.9, 1174.0], [49.0, 1174.0], [49.1, 1175.0], [49.2, 1175.0], [49.3, 1175.0], [49.4, 1176.0], [49.5, 1176.0], [49.6, 1176.0], [49.7, 1176.0], [49.8, 1176.0], [49.9, 1177.0], [50.0, 1177.0], [50.1, 1177.0], [50.2, 1178.0], [50.3, 1178.0], [50.4, 1178.0], [50.5, 1179.0], [50.6, 1179.0], [50.7, 1179.0], [50.8, 1179.0], [50.9, 1179.0], [51.0, 1179.0], [51.1, 1180.0], [51.2, 1180.0], [51.3, 1181.0], [51.4, 1181.0], [51.5, 1181.0], [51.6, 1181.0], [51.7, 1181.0], [51.8, 1182.0], [51.9, 1182.0], [52.0, 1182.0], [52.1, 1182.0], [52.2, 1183.0], [52.3, 1183.0], [52.4, 1183.0], [52.5, 1184.0], [52.6, 1184.0], [52.7, 1184.0], [52.8, 1184.0], [52.9, 1185.0], [53.0, 1185.0], [53.1, 1185.0], [53.2, 1185.0], [53.3, 1185.0], [53.4, 1185.0], [53.5, 1186.0], [53.6, 1186.0], [53.7, 1186.0], [53.8, 1186.0], [53.9, 1186.0], [54.0, 1187.0], [54.1, 1187.0], [54.2, 1187.0], [54.3, 1187.0], [54.4, 1188.0], [54.5, 1188.0], [54.6, 1188.0], [54.7, 1188.0], [54.8, 1188.0], [54.9, 1188.0], [55.0, 1189.0], [55.1, 1189.0], [55.2, 1189.0], [55.3, 1189.0], [55.4, 1189.0], [55.5, 1190.0], [55.6, 1190.0], [55.7, 1190.0], [55.8, 1190.0], [55.9, 1190.0], [56.0, 1190.0], [56.1, 1190.0], [56.2, 1190.0], [56.3, 1191.0], [56.4, 1191.0], [56.5, 1191.0], [56.6, 1191.0], [56.7, 1191.0], [56.8, 1192.0], [56.9, 1192.0], [57.0, 1192.0], [57.1, 1192.0], [57.2, 1192.0], [57.3, 1193.0], [57.4, 1193.0], [57.5, 1193.0], [57.6, 1193.0], [57.7, 1193.0], [57.8, 1193.0], [57.9, 1194.0], [58.0, 1194.0], [58.1, 1194.0], [58.2, 1194.0], [58.3, 1194.0], [58.4, 1194.0], [58.5, 1195.0], [58.6, 1195.0], [58.7, 1195.0], [58.8, 1195.0], [58.9, 1195.0], [59.0, 1195.0], [59.1, 1195.0], [59.2, 1195.0], [59.3, 1196.0], [59.4, 1196.0], [59.5, 1196.0], [59.6, 1196.0], [59.7, 1196.0], [59.8, 1196.0], [59.9, 1196.0], [60.0, 1196.0], [60.1, 1197.0], [60.2, 1197.0], [60.3, 1197.0], [60.4, 1197.0], [60.5, 1197.0], [60.6, 1197.0], [60.7, 1197.0], [60.8, 1198.0], [60.9, 1198.0], [61.0, 1198.0], [61.1, 1198.0], [61.2, 1198.0], [61.3, 1198.0], [61.4, 1198.0], [61.5, 1198.0], [61.6, 1199.0], [61.7, 1199.0], [61.8, 1199.0], [61.9, 1199.0], [62.0, 1199.0], [62.1, 1199.0], [62.2, 1199.0], [62.3, 1200.0], [62.4, 1200.0], [62.5, 1200.0], [62.6, 1200.0], [62.7, 1200.0], [62.8, 1200.0], [62.9, 1200.0], [63.0, 1200.0], [63.1, 1201.0], [63.2, 1201.0], [63.3, 1201.0], [63.4, 1201.0], [63.5, 1201.0], [63.6, 1201.0], [63.7, 1201.0], [63.8, 1201.0], [63.9, 1202.0], [64.0, 1202.0], [64.1, 1202.0], [64.2, 1202.0], [64.3, 1202.0], [64.4, 1202.0], [64.5, 1202.0], [64.6, 1202.0], [64.7, 1202.0], [64.8, 1203.0], [64.9, 1203.0], [65.0, 1203.0], [65.1, 1203.0], [65.2, 1203.0], [65.3, 1203.0], [65.4, 1203.0], [65.5, 1203.0], [65.6, 1203.0], [65.7, 1203.0], [65.8, 1203.0], [65.9, 1204.0], [66.0, 1204.0], [66.1, 1204.0], [66.2, 1204.0], [66.3, 1204.0], [66.4, 1204.0], [66.5, 1204.0], [66.6, 1204.0], [66.7, 1204.0], [66.8, 1204.0], [66.9, 1205.0], [67.0, 1205.0], [67.1, 1205.0], [67.2, 1205.0], [67.3, 1205.0], [67.4, 1205.0], [67.5, 1205.0], [67.6, 1205.0], [67.7, 1205.0], [67.8, 1205.0], [67.9, 1205.0], [68.0, 1206.0], [68.1, 1206.0], [68.2, 1206.0], [68.3, 1206.0], [68.4, 1206.0], [68.5, 1206.0], [68.6, 1206.0], [68.7, 1206.0], [68.8, 1206.0], [68.9, 1207.0], [69.0, 1207.0], [69.1, 1207.0], [69.2, 1207.0], [69.3, 1207.0], [69.4, 1207.0], [69.5, 1207.0], [69.6, 1207.0], [69.7, 1207.0], [69.8, 1208.0], [69.9, 1208.0], [70.0, 1208.0], [70.1, 1208.0], [70.2, 1208.0], [70.3, 1208.0], [70.4, 1208.0], [70.5, 1208.0], [70.6, 1208.0], [70.7, 1209.0], [70.8, 1209.0], [70.9, 1209.0], [71.0, 1209.0], [71.1, 1209.0], [71.2, 1209.0], [71.3, 1209.0], [71.4, 1209.0], [71.5, 1209.0], [71.6, 1209.0], [71.7, 1210.0], [71.8, 1210.0], [71.9, 1210.0], [72.0, 1210.0], [72.1, 1210.0], [72.2, 1210.0], [72.3, 1210.0], [72.4, 1210.0], [72.5, 1210.0], [72.6, 1210.0], [72.7, 1210.0], [72.8, 1211.0], [72.9, 1211.0], [73.0, 1211.0], [73.1, 1211.0], [73.2, 1211.0], [73.3, 1211.0], [73.4, 1211.0], [73.5, 1211.0], [73.6, 1211.0], [73.7, 1211.0], [73.8, 1212.0], [73.9, 1212.0], [74.0, 1212.0], [74.1, 1212.0], [74.2, 1212.0], [74.3, 1212.0], [74.4, 1212.0], [74.5, 1212.0], [74.6, 1212.0], [74.7, 1212.0], [74.8, 1213.0], [74.9, 1213.0], [75.0, 1213.0], [75.1, 1213.0], [75.2, 1213.0], [75.3, 1213.0], [75.4, 1213.0], [75.5, 1213.0], [75.6, 1214.0], [75.7, 1214.0], [75.8, 1214.0], [75.9, 1214.0], [76.0, 1214.0], [76.1, 1214.0], [76.2, 1214.0], [76.3, 1214.0], [76.4, 1215.0], [76.5, 1215.0], [76.6, 1215.0], [76.7, 1215.0], [76.8, 1215.0], [76.9, 1215.0], [77.0, 1215.0], [77.1, 1215.0], [77.2, 1215.0], [77.3, 1215.0], [77.4, 1216.0], [77.5, 1216.0], [77.6, 1216.0], [77.7, 1216.0], [77.8, 1216.0], [77.9, 1216.0], [78.0, 1216.0], [78.1, 1217.0], [78.2, 1217.0], [78.3, 1217.0], [78.4, 1217.0], [78.5, 1217.0], [78.6, 1217.0], [78.7, 1217.0], [78.8, 1217.0], [78.9, 1217.0], [79.0, 1218.0], [79.1, 1218.0], [79.2, 1218.0], [79.3, 1218.0], [79.4, 1218.0], [79.5, 1218.0], [79.6, 1219.0], [79.7, 1219.0], [79.8, 1219.0], [79.9, 1219.0], [80.0, 1219.0], [80.1, 1219.0], [80.2, 1220.0], [80.3, 1220.0], [80.4, 1220.0], [80.5, 1220.0], [80.6, 1220.0], [80.7, 1220.0], [80.8, 1220.0], [80.9, 1220.0], [81.0, 1220.0], [81.1, 1221.0], [81.2, 1221.0], [81.3, 1221.0], [81.4, 1221.0], [81.5, 1221.0], [81.6, 1221.0], [81.7, 1221.0], [81.8, 1221.0], [81.9, 1222.0], [82.0, 1222.0], [82.1, 1222.0], [82.2, 1222.0], [82.3, 1222.0], [82.4, 1222.0], [82.5, 1223.0], [82.6, 1223.0], [82.7, 1223.0], [82.8, 1223.0], [82.9, 1223.0], [83.0, 1223.0], [83.1, 1223.0], [83.2, 1223.0], [83.3, 1224.0], [83.4, 1224.0], [83.5, 1224.0], [83.6, 1224.0], [83.7, 1224.0], [83.8, 1224.0], [83.9, 1225.0], [84.0, 1225.0], [84.1, 1225.0], [84.2, 1225.0], [84.3, 1225.0], [84.4, 1225.0], [84.5, 1225.0], [84.6, 1226.0], [84.7, 1226.0], [84.8, 1226.0], [84.9, 1226.0], [85.0, 1226.0], [85.1, 1227.0], [85.2, 1227.0], [85.3, 1227.0], [85.4, 1227.0], [85.5, 1227.0], [85.6, 1228.0], [85.7, 1228.0], [85.8, 1228.0], [85.9, 1228.0], [86.0, 1228.0], [86.1, 1229.0], [86.2, 1229.0], [86.3, 1229.0], [86.4, 1229.0], [86.5, 1229.0], [86.6, 1230.0], [86.7, 1230.0], [86.8, 1230.0], [86.9, 1230.0], [87.0, 1230.0], [87.1, 1231.0], [87.2, 1231.0], [87.3, 1231.0], [87.4, 1231.0], [87.5, 1231.0], [87.6, 1231.0], [87.7, 1232.0], [87.8, 1232.0], [87.9, 1232.0], [88.0, 1232.0], [88.1, 1232.0], [88.2, 1233.0], [88.3, 1233.0], [88.4, 1233.0], [88.5, 1233.0], [88.6, 1233.0], [88.7, 1234.0], [88.8, 1234.0], [88.9, 1234.0], [89.0, 1234.0], [89.1, 1234.0], [89.2, 1235.0], [89.3, 1235.0], [89.4, 1235.0], [89.5, 1236.0], [89.6, 1236.0], [89.7, 1236.0], [89.8, 1237.0], [89.9, 1237.0], [90.0, 1237.0], [90.1, 1238.0], [90.2, 1238.0], [90.3, 1238.0], [90.4, 1239.0], [90.5, 1239.0], [90.6, 1239.0], [90.7, 1239.0], [90.8, 1239.0], [90.9, 1240.0], [91.0, 1240.0], [91.1, 1240.0], [91.2, 1240.0], [91.3, 1241.0], [91.4, 1241.0], [91.5, 1242.0], [91.6, 1242.0], [91.7, 1242.0], [91.8, 1242.0], [91.9, 1242.0], [92.0, 1243.0], [92.1, 1243.0], [92.2, 1243.0], [92.3, 1244.0], [92.4, 1244.0], [92.5, 1244.0], [92.6, 1245.0], [92.7, 1246.0], [92.8, 1246.0], [92.9, 1246.0], [93.0, 1247.0], [93.1, 1247.0], [93.2, 1247.0], [93.3, 1247.0], [93.4, 1248.0], [93.5, 1248.0], [93.6, 1249.0], [93.7, 1249.0], [93.8, 1250.0], [93.9, 1250.0], [94.0, 1251.0], [94.1, 1251.0], [94.2, 1252.0], [94.3, 1252.0], [94.4, 1252.0], [94.5, 1253.0], [94.6, 1253.0], [94.7, 1254.0], [94.8, 1254.0], [94.9, 1254.0], [95.0, 1255.0], [95.1, 1255.0], [95.2, 1255.0], [95.3, 1256.0], [95.4, 1256.0], [95.5, 1257.0], [95.6, 1257.0], [95.7, 1258.0], [95.8, 1259.0], [95.9, 1259.0], [96.0, 1260.0], [96.1, 1260.0], [96.2, 1261.0], [96.3, 1261.0], [96.4, 1262.0], [96.5, 1263.0], [96.6, 1263.0], [96.7, 1264.0], [96.8, 1265.0], [96.9, 1266.0], [97.0, 1267.0], [97.1, 1267.0], [97.2, 1268.0], [97.3, 1269.0], [97.4, 1270.0], [97.5, 1271.0], [97.6, 1271.0], [97.7, 1272.0], [97.8, 1272.0], [97.9, 1274.0], [98.0, 1275.0], [98.1, 1275.0], [98.2, 1276.0], [98.3, 1277.0], [98.4, 1278.0], [98.5, 1279.0], [98.6, 1280.0], [98.7, 1282.0], [98.8, 1285.0], [98.9, 1286.0], [99.0, 1288.0], [99.1, 1295.0], [99.2, 1298.0], [99.3, 1310.0], [99.4, 1358.0], [99.5, 1385.0], [99.6, 1430.0], [99.7, 1453.0], [99.8, 1513.0], [99.9, 1553.0]], "isOverall": false, "label": "GET_images_small", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 15.0, "minX": 200.0, "maxY": 2650.0, "series": [{"data": [[600.0, 292.0], [700.0, 270.0], [800.0, 183.0], [200.0, 577.0], [900.0, 266.0], [1000.0, 434.0], [1100.0, 1381.0], [1200.0, 2650.0], [300.0, 322.0], [1300.0, 22.0], [1400.0, 18.0], [1500.0, 15.0], [400.0, 408.0], [500.0, 323.0]], "isOverall": false, "label": "GET_images_small", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 15.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 5838.0, "series": [{"data": [[0.0, 1308.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 5838.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 15.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 86.20091324200952, "minX": 1.77315624E12, "maxY": 146.94503691550446, "series": [{"data": [[1.7731563E12, 146.94503691550446], [1.77315624E12, 86.20091324200952]], "isOverall": false, "label": "TG_resize_150_threads", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7731563E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 260.4166666666667, "minX": 1.0, "maxY": 1214.5617916891497, "series": [{"data": [[2.0, 1143.0], [3.0, 1129.0], [4.0, 1139.0], [5.0, 1137.0], [6.0, 1129.0], [7.0, 1131.5], [8.0, 1085.0], [9.0, 511.1666666666667], [10.0, 445.7142857142857], [11.0, 423.00000000000006], [12.0, 390.6666666666667], [13.0, 375.79999999999995], [14.0, 355.0], [15.0, 409.2727272727273], [16.0, 344.75], [17.0, 330.7857142857143], [18.0, 283.5333333333333], [19.0, 318.1333333333334], [20.0, 306.764705882353], [21.0, 333.0526315789474], [22.0, 305.35294117647055], [23.0, 298.3684210526316], [24.0, 269.19047619047615], [25.0, 302.31578947368416], [26.0, 286.00000000000006], [27.0, 306.8260869565218], [28.0, 260.4166666666667], [29.0, 305.4090909090909], [30.0, 284.91666666666663], [31.0, 314.8461538461539], [32.0, 291.7037037037037], [33.0, 298.04545454545456], [34.0, 302.53846153846155], [35.0, 297.85185185185185], [36.0, 331.55555555555554], [37.0, 316.18518518518516], [38.0, 326.43999999999994], [39.0, 327.00000000000006], [40.0, 305.44000000000005], [41.0, 390.15384615384613], [42.0, 338.55555555555554], [43.0, 354.23076923076917], [44.0, 356.9642857142857], [45.0, 357.6296296296296], [46.0, 380.46666666666664], [47.0, 371.33333333333337], [48.0, 383.44444444444446], [49.0, 392.7142857142857], [50.0, 377.62962962962956], [51.0, 418.8571428571429], [52.0, 432.4800000000001], [53.0, 429.30769230769226], [54.0, 447.2222222222222], [55.0, 453.0], [56.0, 464.62962962962956], [57.0, 436.92], [58.0, 489.74074074074076], [59.0, 465.5], [60.0, 506.1612903225806], [61.0, 485.96], [62.0, 519.3199999999999], [63.0, 496.19354838709677], [64.0, 487.2592592592593], [65.0, 480.2142857142857], [66.0, 519.1249999999999], [67.0, 529.9285714285716], [68.0, 537.1785714285716], [69.0, 527.6071428571429], [70.0, 521.3000000000001], [71.0, 544.7368421052631], [72.0, 589.2758620689657], [73.0, 602.6923076923077], [74.0, 568.3225806451615], [75.0, 588.5714285714286], [76.0, 606.5555555555555], [77.0, 626.4642857142857], [78.0, 601.5517241379309], [79.0, 590.9310344827587], [80.0, 610.3599999999999], [81.0, 635.9999999999999], [82.0, 639.2666666666667], [83.0, 671.7142857142857], [84.0, 671.7241379310345], [85.0, 666.75], [86.0, 649.9999999999999], [87.0, 672.103448275862], [88.0, 671.5925925925925], [89.0, 681.64], [90.0, 705.3846153846154], [91.0, 697.84375], [92.0, 670.1904761904764], [93.0, 703.8275862068966], [94.0, 723.9655172413794], [95.0, 726.4545454545454], [96.0, 747.1851851851852], [97.0, 749.2307692307692], [98.0, 789.4814814814814], [99.0, 767.5416666666666], [100.0, 786.2592592592592], [101.0, 812.6956521739131], [102.0, 821.2413793103449], [103.0, 797.76], [104.0, 845.5200000000001], [105.0, 818.8965517241381], [106.0, 822.48], [107.0, 831.3703703703703], [108.0, 818.8518518518518], [109.0, 830.64], [110.0, 870.0833333333334], [111.0, 845.6249999999999], [112.0, 877.1904761904761], [113.0, 902.4799999999998], [114.0, 872.0666666666666], [115.0, 899.409090909091], [116.0, 917.2272727272727], [117.0, 975.7500000000001], [118.0, 960.3448275862067], [119.0, 985.6315789473684], [120.0, 976.5151515151515], [121.0, 938.1666666666666], [122.0, 979.5263157894738], [123.0, 1019.1111111111113], [124.0, 1019.3333333333335], [125.0, 1013.9583333333334], [126.0, 1064.04], [127.0, 1042.2758620689656], [128.0, 1003.4347826086959], [129.0, 1028.0400000000002], [130.0, 1032.7083333333333], [131.0, 1036.96], [132.0, 1050.7037037037035], [133.0, 1059.68], [134.0, 1057.92], [135.0, 1064.6666666666665], [136.0, 1064.9999999999998], [137.0, 1066.185185185185], [138.0, 1075.9199999999998], [139.0, 1087.0384615384614], [140.0, 1095.695652173913], [141.0, 1100.7307692307693], [142.0, 1109.36], [143.0, 1124.64], [144.0, 1137.8], [145.0, 1144.7916666666665], [146.0, 1153.92], [147.0, 1161.9565217391305], [148.0, 1174.3750000000002], [149.0, 1196.4583333333335], [150.0, 1214.5617916891497], [1.0, 1127.0]], "isOverall": false, "label": "GET_images_small", "isController": false}, {"data": [[117.22189638318721, 951.6419494484002]], "isOverall": false, "label": "GET_images_small-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 150.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 20615.2, "minX": 1.77315624E12, "maxY": 973005.8, "series": [{"data": [[1.7731563E12, 973005.8], [1.77315624E12, 932297.6]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7731563E12, 21515.35], [1.77315624E12, 20615.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7731563E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 677.6372716894978, "minX": 1.77315624E12, "maxY": 1214.1829368334704, "series": [{"data": [[1.7731563E12, 1214.1829368334704], [1.77315624E12, 677.6372716894978]], "isOverall": false, "label": "GET_images_small", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7731563E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 595.9212328767128, "minX": 1.77315624E12, "maxY": 1020.2745419742984, "series": [{"data": [[1.7731563E12, 1020.2745419742984], [1.77315624E12, 595.9212328767128]], "isOverall": false, "label": "GET_images_small", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7731563E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.10910582444626743, "minX": 1.77315624E12, "maxY": 17.824486301369827, "series": [{"data": [[1.7731563E12, 0.10910582444626743], [1.77315624E12, 17.824486301369827]], "isOverall": false, "label": "GET_images_small", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7731563E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 207.0, "minX": 1.77315624E12, "maxY": 1598.0, "series": [{"data": [[1.7731563E12, 1577.0], [1.77315624E12, 1598.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7731563E12, 1127.0], [1.77315624E12, 207.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7731563E12, 1251.0], [1.77315624E12, 1132.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7731563E12, 1284.42], [1.77315624E12, 1384.9499999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7731563E12, 1211.0], [1.77315624E12, 645.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.7731563E12, 1264.0], [1.77315624E12, 1174.75]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7731563E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 217.0, "minX": 4.0, "maxY": 1256.0, "series": [{"data": [[131.0, 439.0], [129.0, 557.0], [128.0, 1194.5], [52.0, 218.0], [4.0, 1131.5], [79.0, 979.5], [97.0, 217.0], [114.0, 228.0], [29.0, 233.0], [116.0, 1014.0], [117.0, 1195.0], [119.0, 1256.0], [121.0, 1009.0], [123.0, 1123.0], [122.0, 1200.5], [120.0, 1237.0], [126.0, 791.5], [125.0, 1205.0], [124.0, 1207.0], [127.0, 882.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 131.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 217.0, "minX": 4.0, "maxY": 1063.0, "series": [{"data": [[131.0, 433.0], [129.0, 542.0], [128.0, 1000.0], [52.0, 217.0], [4.0, 1024.5], [79.0, 793.5], [97.0, 217.0], [114.0, 227.5], [29.0, 230.0], [116.0, 819.0], [117.0, 1000.0], [119.0, 1063.0], [121.0, 815.0], [123.0, 930.0], [122.0, 1007.0], [120.0, 1043.0], [126.0, 698.5], [125.0, 1012.0], [124.0, 1013.0], [127.0, 708.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 131.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 58.45, "minX": 1.77315624E12, "maxY": 60.9, "series": [{"data": [[1.7731563E12, 58.45], [1.77315624E12, 60.9]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7731563E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 58.4, "minX": 1.77315624E12, "maxY": 60.95, "series": [{"data": [[1.7731563E12, 60.95], [1.77315624E12, 58.4]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7731563E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 58.4, "minX": 1.77315624E12, "maxY": 60.95, "series": [{"data": [[1.7731563E12, 60.95], [1.77315624E12, 58.4]], "isOverall": false, "label": "GET_images_small-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7731563E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 58.4, "minX": 1.77315624E12, "maxY": 60.95, "series": [{"data": [[1.7731563E12, 60.95], [1.77315624E12, 58.4]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7731563E12, "title": "Total Transactions Per Second"}},
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

