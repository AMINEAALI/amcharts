import { Component, OnInit } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { Quotation } from "./quotation";
import { Providers } from './providers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Quotation, Providers]
})
export class AppComponent implements OnInit {

  constructor(public quotationComponent: Quotation, public providersComponent: Providers) { }

  providers: any = this.providersComponent.providers;

  barchartsData: Set<any>;
  quotations: Set<any>;
  i: number = 1;
  j: number = 0;
  k: number = 0;

  chart: am4charts.XYChart;
  completionPercent: number;

  charts_data: Set<any>;

  names = ["Instagram", "TikTok", "Twitter", "Tumblr"]

  ngOnInit() {

    am4core.useTheme(am4themes_animated);

    this.charts_data = new Set<any>();
    this.quotations = new Set<any>();
    this.barchartsData = new Set<any>();
  
    var id_of_interval = setInterval(() => {

      let API_response = this.quotationComponent.callAPI(this.i);
      this.completionPercent = API_response.completionPercent;

      API_response.results.forEach(result => {
        this.quotations.add(result);
      })

      if (this.completionPercent < 100) {
        this.i++;
        this.nextQuotation();
      }
      else if (this.completionPercent == 100) {
        clearInterval(id_of_interval);
      }
    }, 1000);

    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.padding(40, 40, 40, 40);

    var itemsWithNonZero = 0;
    for (var i = 0; i < chart.data.length; i++) {
      if (chart.data[i].MAU > 0) {
        itemsWithNonZero++;
      }
    }

    let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "network";
    categoryAxis.renderer.minGridDistance = 1;
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.grid.template.disabled = true;

    let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.rangeChangeEasing = am4core.ease.linear;
    valueAxis.rangeChangeDuration = 1000;

    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "network";
    series.dataFields.valueX = "MAU";
    series.tooltipText = "{valueX.value}"
    series.columns.template.strokeOpacity = 0;
    series.columns.template.column.cornerRadiusBottomRight = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;
    series.interpolationDuration = 1000;
    series.interpolationEasing = am4core.ease.linear;

    categoryAxis.sortBySeries = series;
    chart.data = [
      {
        "network": "Facebook",
        "MAU": 0
      },
      {
        "network": "Flickr",
        "MAU": 0
      },
      {
        "network": "Google Buzz",
        "MAU": 0
      },
      {
        "network": "Friendster",
        "MAU": 0
      }
    ];
    
    let labelBullet = series.bullets.push(new am4charts.LabelBullet());
    labelBullet.label.horizontalCenter = "left";
    labelBullet.label.dx = 10;
    labelBullet.label.text = "{values.valueX.workingValue.formatNumber('#.0as')}";
    labelBullet.locationX = 1;

    chart.zoomOutButton.disabled = true;

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function (fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });

    let id_interval = setInterval(() => {
      if (this.j == 4) {
        clearInterval(id_interval);
      }
      else {
        chart.data[this.j].MAU = (this.j+1*this.j)+1*4;
        chart.invalidateRawData();
        this.j++;
      }
    }, 1000);

    let encore_un_autre_id = setInterval(() => {
      if (this.k == 4) {
        clearInterval(encore_un_autre_id);
      }
      else {
        var nouvelleValeur = chart.data[chart.data.length-1].MAU + 3;
        chart.addData({
          network: this.names[this.k],
          MAU: nouvelleValeur
        });
        this.k++;
        chart.invalidateRawData();
      }
    }, 1000);
  }

  nextQuotation() {

    console.log(Array.from(this.quotations));

    this.quotations.forEach(quotation => {

      var c = {
        "id": quotation.id,
        "total": quotation.pricesSummary.monthlyPriceAverage,
        "location": quotation.cityName,
        "providerRegionCode": quotation.providerRegionCode.charAt(0).toUpperCase() + quotation.providerRegionCode.slice(1),
        "country": quotation.countryName,
        "provider": this.providers[quotation.provider].smallIcon,
        "providerName": quotation.provider,
        "color": this.providers[quotation.provider].color,
        "bullet": this.providers[quotation.provider].smallIcon,
        "opacity": 1,
        "scenarioName": quotation.scenarioName
      }

      this.barchartsData.add(c);

      this.chart.data = Array.from(this.barchartsData);

      this.chart.invalidateRawData();
    });
  }
}