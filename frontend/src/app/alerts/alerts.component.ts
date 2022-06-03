import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import { Alert } from '../alert';
import { AssetService } from '../asset.service';
import { Asset } from '../asset';
import { Currency } from '../currency';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  alerts: Alert[] = [];
  assets: Asset[] = [];
  currencies: Currency[] = [];
  constructor(private alertService: AlertService, private assetService: AssetService) { }

  ngOnInit(): void {
    this.getAssets()
    this.getAlerts()
    this.getCurrencies()
  }

  getAlerts(): void {
    this.alertService.getAlerts()
    .subscribe(alerts => {
      this.alerts = alerts;
      console.log(alerts);
    });
  }

  getCurrencies(): void {
    this.assetService.getCurrencies()
    .subscribe(currencies => {
      this.currencies = currencies;
      console.log(currencies);
    });
  }

  getAssets(): void {
    this.assetService.getAssetsNames()
    .subscribe(assets => {
      this.assets = assets;
      console.log(assets);
    });
  }

  delete(alert: Alert): void {
    this.alerts = this.alerts.filter(a => a !== alert);
    this.alertService.deleteAlert(alert.id).subscribe();
  }

  save(alert: Alert): void {
      this.alertService.updateAlert(alert).subscribe();
  }

  add(): void {
    const alert = {} as Alert
    alert.currency = 'EUR'
    alert.asset_name = 'BTC'
    this.alertService.addAlert(alert)
      .subscribe(alert => {
        this.alerts.push(alert);
      });
  }


}
