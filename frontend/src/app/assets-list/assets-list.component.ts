import { Component, OnInit } from '@angular/core';
import { Asset } from '../asset';
import { AssetService } from '../asset.service';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.css']
})
export class AssetsListComponent implements OnInit {

  assets: Asset[] = [];
  constructor(private assetService: AssetService) { }

  ngOnInit(): void {
    this.getAssets()
  }

  getAssets(): void {
    this.assetService.getAssets()
    .subscribe(assets => {
      this.assets = assets;
      console.log(assets);
    });

  }

}
