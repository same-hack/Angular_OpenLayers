import { Component, OnInit } from '@angular/core';
import { Map, View } from 'ol';
import { fromLonLat } from 'ol/proj';
import { Tile } from 'ol/layer';
import OsmSource from 'ol/source/OSM';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  map!: Map;

  ngOnInit() {
    this.map = new Map({
      // HTMLのidを指定して描画
      target: 'map',
      layers: [
        new Tile({
          // 表示するマップ
          source: new OsmSource(),
        }),
      ],
      view: new View({
        //　表示する座標
        center: fromLonLat([139.7017, 35.6581]),
        //　ズーム倍率
        zoom: 18,
      }),
    });
  }
}
