"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var mapData = (function () {
    function mapData() {
        this.names = [];
        this.values = [];
    }
    mapData = __decorate([
        core_1.Component({
            selector: 'map',
            templateUrl: 'app/app.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], mapData);
    return mapData;
}());
var AppComponent2 = (function (_super) {
    __extends(AppComponent2, _super);
    function AppComponent2() {
        _super.apply(this, arguments);
        this.coord = [{
                name: "서울", lon: 126.9779690, lat: 37.5665350
            }, {
                name: "경기", lon: 127.5183000, lat: 37.4138000
            }, {
                name: "부산", lon: 129.0756420, lat: 35.1795540
            }, {
                name: "광주", lon: 126.8526010, lat: 35.1595450
            }, {
                name: "제주", lon: 126.4983020, lat: 33.4890110
            }];
    }
    AppComponent2.prototype.map = function () {
        var _this = this;
        function ajax(url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    callback(JSON.parse(xhr.responseText));
                }
            };
            xhr.open('get', url, false);
            xhr.send();
        }
        this.coord.map(function (v, i) {
            if (_this.names.length < _this.coord.length) {
                ajax("http://apis.skplanetx.com/weather/dust?lon=" + _this.coord[i].lon + "&lat=" + _this.coord[i].lat + "&version=1&appKey=e6f67852-f0e3-3f67-a3cd-592ef90b323f", function (response) {
                    if (_this.values.length <= _this.coord.length)
                        _this.values.push(response.weather.dust[i].pm10.value);
                });
                _this.names.push(_this.coord[i].name);
            }
        });
    };
    return AppComponent2;
}(mapData));
exports.AppComponent2 = AppComponent2;
//# sourceMappingURL=app.componentMap.js.map