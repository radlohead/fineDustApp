import {Component} from '@angular/core';

@Component({
    selector: 'map',
    templateUrl: 'app/app.component.html'
})

class mapData {
    names = [];
    values = [];
}
export class AppComponent2 extends mapData {
    coord = [{
        name: "서울", lon: 126.9779690, lat: 37.5665350
    },{
        name: "경기", lon: 127.5183000, lat: 37.4138000
    },{
        name: "부산", lon: 129.0756420, lat: 35.1795540
    },{
        name: "광주", lon: 126.8526010, lat: 35.1595450
    },{
        name: "제주", lon: 126.4983020, lat: 33.4890110
    }];
    private map(){
        function ajax(url, callback) {
            const xhr = new XMLHttpRequest();

            xhr.onreadystatechange = () => {
                if(xhr.readyState === 4 && xhr.status === 200){
                    callback(JSON.parse(xhr.responseText));
                }
            };

            xhr.open('get', url, false);
            xhr.send();
        }

        this.coord.map((v, i)=> {
            if(this.names.length < this.coord.length){
                ajax(`http://apis.skplanetx.com/weather/dust?lon=${this.coord[i].lon}&lat=${this.coord[i].lat}&version=1&appKey=e6f67852-f0e3-3f67-a3cd-592ef90b323f`, response=> {
                    this.values.push( parseInt(response.weather.dust[0].pm10.value) );
                });
                this.names.push(this.coord[i].name);
            }
        });
    }
}