import { Component, OnInit } from '@angular/core';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_continentsHigh from "@amcharts/amcharts4-geodata/continentsHigh";

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
  quotations: Array<any>;
  quotations_location: Array<any>;

  i: number = 1;
  quotation_id: number = 1;
  index_quotation: number = 0;
  completionPercent: number;

  chart: am4charts.XYChart;
  mapChart: am4maps.MapChart;
  imageSeries: am4maps.MapImageSeries;
  categoryAxis: am4charts.CategoryAxis;

  array_no_overlap: Array<any> = [];

  cheapestPrices: any = {
    aws: 999999999999999999,
    onprem: 999999999999999999,
    azure: 999999999999999999,
    google: 999999999999999999,
    ovh: 999999999999999999
  };

  ngOnInit() {

    // ---------------- DATA ---------------- //

    var id_of_interval = setInterval(() => {

      this.quotations = [];
      this.quotations_location = [];

      let API_response: any = this.quotationComponent.callAPI(this.i);
      this.completionPercent = API_response.completionPercent;

      API_response.results.forEach((api_result_quotation, index) => {
        if (index >= this.index_quotation)
          this.quotations.push(api_result_quotation);
      });

      if (this.completionPercent < 100) {
        this.index_quotation = API_response.results.length;
        this.nextQuotation();
        this.calculateCheapest();
        this.i++;
      }
      else if (this.completionPercent == 100) {
        this.index_quotation = API_response.results.length;
        this.nextQuotation();
        this.calculateCheapest();
        console.log(this.cheapestPrices);
        /*  this.imageSeries.mapImages.values.forEach((circle: any) => {
           console.log(circle);
           this.animateBullet(circle);
           if (circle.dataItem.dataContext.city == "Eemshaven") {
             this.animateBullet(circle);
           }
         }); */
        clearInterval(id_of_interval);
      }

    }, 1000);

    am4core.ready(() => {

      am4core.useTheme(am4themes_animated);

      // ---------------- ---- ---------------- //

      var container = am4core.create("container", am4core.Container);
      container.width = am4core.percent(100);
      container.height = am4core.percent(100);

      // ---------------- MAP ----------------- //

      this.mapChart = container.createChild(am4maps.MapChart);
      this.mapChart.geodata = am4geodata_continentsHigh;
      this.mapChart.mouseWheelBehavior = "none";
      this.mapChart.background.pixelPerfect = true;
      this.mapChart.background.fill = am4core.color("#91c2dc");
      this.mapChart.background.fillOpacity = 1;
      this.mapChart.chartContainer.wheelable = false;
      this.mapChart.homeZoomLevel = 5;
      this.mapChart.homeGeoPoint = { longitude: -14, latitude: 52 };
      this.mapChart.projection = new am4maps.projections.Miller();

      var polygonSeries = this.mapChart.series.push(new am4maps.MapPolygonSeries());
      polygonSeries.useGeodata = true;
      polygonSeries.exclude = ["antarctica"];

      var desaturateFilter = new am4core.DesaturateFilter();
      desaturateFilter.saturation = 0.25;

      var polygonTemplate = polygonSeries.mapPolygons.template;
      polygonTemplate.strokeOpacity = 1;
      polygonTemplate.filters.push(desaturateFilter);
      polygonTemplate.fillOpacity = 0.5;

      this.imageSeries = this.mapChart.series.push(new am4maps.MapImageSeries());
      this.imageSeries.dataFields.value = "value";
      this.imageSeries.mapImages.template.propertyFields.longitude = "longitude";
      this.imageSeries.mapImages.template.propertyFields.latitude = "latitude";
      this.imageSeries.mapImages.template.propertyFields.fill = "color";

      var imageSeriesTemplate = this.imageSeries.mapImages.template;
      imageSeriesTemplate.layout = "absolute";
      imageSeriesTemplate.isMeasured = true;

      var circle2 = imageSeriesTemplate.createChild(am4core.Circle);
      circle2.radius = 1;
      circle2.propertyFields.fill = "color";
      /* circle2.tooltipText = "{city} - {value}"; */

      var circle = imageSeriesTemplate.createChild(am4core.Circle);
      circle.radius = 1;
      circle.stroke = am4core.color("#FFFFFF");
      circle.fillOpacity = 0.7;
      circle.strokeWidth = 2;
      circle.strokeOpacity = 0.7;
      circle.nonScaling = true;
      circle.tooltipText = "{city} - {value}";

      circle2.events.on("inited", (event: any) => {
        this.animateBullet(event.target);
      })

      this.imageSeries.heatRules.push({
        "target": circle,
        "property": "radius",
        "min": 14,
        "max": 10,
        "dataField": "value"
      });

      // Set fillOpacity to 1 when hovered
      /*    var hoverStateMap = polygonTemplate.states.create("hover");
         hoverStateMap.properties.fillOpacity = 1; */


      // ---------------- BAR CHART ------------ //

      this.chart = container.createChild(am4charts.XYChart);
      this.chart.padding(0, 50, 250, 10);
      this.chart.valign = "bottom";
      this.chart.height = 800;
      this.chart.width = 1000;
      this.chart.zoomOutButton.disabled = true;

      this.chart.scrollbarY = new am4core.Scrollbar();
      this.chart.scrollbarY.startGrip.disabled = true;
      this.chart.scrollbarY.endGrip.disabled = true;
      this.chart.scrollbarY.parent = this.chart.leftAxesContainer;
      this.chart.plotContainer.mouseOptions.sensitivity = 3;
      this.chart.scrollbarY.wheelable = true;
      this.chart.mouseWheelBehavior = "panY";

      this.categoryAxis = this.chart.yAxes.push(new am4charts.CategoryAxis());
      this.categoryAxis.renderer.labels.template.disabled = true;
      this.categoryAxis.dataFields.category = "id";
      this.categoryAxis.renderer.grid.template.location = 0;
      this.categoryAxis.renderer.grid.template.disabled = true;

      let valueAxis = this.chart.xAxes.push(new am4charts.ValueAxis());
      valueAxis.min = 0;
      valueAxis.renderer.ticks.template.disabled = false;
      valueAxis.renderer.labels.template.fill = am4core.color("#303030");
      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.rangeChangeEasing = am4core.ease.linear;
      valueAxis.rangeChangeDuration = 1000;

      let series = this.chart.series.push(new am4charts.ColumnSeries());
      series.columns.template.propertyFields.fill = "color";
      series.columns.template.propertyFields.stroke = "color";
      series.columns.template.focusable = true;
      series.columns.template.column.fillOpacity = .7;
      series.columns.template.column.cornerRadiusTopRight = 3;
      series.columns.template.tooltipText = "{country} - {location}";
      series.columns.template.column.cornerRadiusBottomRight = 3;
      series.columns.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;
      series.dataFields.valueX = "total";
      series.dataFields.categoryY = "id";
      series.clustered = false;
      series.interpolationDuration = 1000;
      series.interpolationEasing = am4core.ease.linear;

      let hoverState = series.columns.template.column.states.create("hover");
      hoverState.properties.cornerRadiusTopLeft = 0;
      hoverState.properties.cornerRadiusTopRight = 0;
      hoverState.properties.fillOpacity = 1;

      this.categoryAxis.sortBySeries = series;

      let bullet = series.bullets.push(new am4charts.Bullet());
      let image = bullet.createChild(am4core.Image);
      image.horizontalCenter = "middle";
      image.verticalCenter = "bottom";
      image.dy = 20;
      image.height = 30;
      image.y = am4core.percent(100);
      image.propertyFields.href = "bullet";
      image.tooltipText = series.columns.template.tooltipText;
      image.propertyFields.fill = "color";
      image.filters.push(new am4core.DropShadowFilter());

      var serieLabel = series.bullets.push(new am4charts.LabelBullet());
      serieLabel.label.text = "[bold]${total}[/b] {scenarioName} - {providerRegionCode}";
      serieLabel.label.hideOversized = false;
      serieLabel.label.horizontalCenter = "right";
      serieLabel.label.dx = -25;
      serieLabel.label.fill = am4core.color("#ffffff");
      serieLabel.label.cursorOverStyle = am4core.MouseCursorStyle.pointer;
      serieLabel.interactionsEnabled = false;

    });
  }

  animateBullet(circle) {
    if (this.cheapestPrices[circle.dataItem.dataContext.name] == circle.dataItem.dataContext.value) {
      var animation = circle.animate([{
        property: "scale",
        from: 1,
        to: 10
      }, {
        property: "opacity",
        from: 1,
        to: 0
      }], 1000, am4core.ease.circleOut);
      animation.events.on("animationended", (event) => {
        this.animateBullet(event.target.object);
      });
    }
    else { circle.disabled = true }
  }

  getLatitudeAndLongitude(cityName: string) {
    let latAndLong: any;
    this.array_no_overlap.forEach(element => {
      if (element.city == cityName) {
        if (element.presences[0] == false) {
          element.presences[0] = true;
          latAndLong = {
            latitude: 0, // y
            longitude: 0.8 // x
          }
        }
        else if (element.presences[1] == false && element.presences[0] == true) {
          element.presences[1] = true;
          latAndLong = {
            latitude: 1,
            longitude: 0
          }
        }
        else if (element.presences[2] == false && element.presences[1] == true) {
          element.presences[2] = true;
          latAndLong = {
            latitude: -0.5,
            longitude: 0.5
          }
        }
        else {
          latAndLong = {
            latitude: -0.5,
            longitude: -0.2
          }
        }
      }
    });
    return latAndLong;
  }

  calculateCheapest() {

    var cheapestAWS = this.cheapestPrices.aws;
    var cheapestOVH = this.cheapestPrices.ovh;
    var cheapestAZU = this.cheapestPrices.azure;
    var cheapestONP = this.cheapestPrices.onprem;
    var cheapestGCP = this.cheapestPrices.google;

    this.quotations.forEach(quot => {
      if (quot.provider == "aws" && quot.pricesSummary.monthlyPriceAverage < cheapestAWS)
        cheapestAWS = quot.pricesSummary.monthlyPriceAverage;
      else if (quot.provider == "azure" && quot.pricesSummary.monthlyPriceAverage < cheapestAZU)
        cheapestAZU = quot.pricesSummary.monthlyPriceAverage;
      else if (quot.provider == "google" && quot.pricesSummary.monthlyPriceAverage < cheapestGCP)
        cheapestGCP = quot.pricesSummary.monthlyPriceAverage;
      else if (quot.provider == "ovh" && quot.pricesSummary.monthlyPriceAverage < cheapestOVH)
        cheapestOVH = quot.pricesSummary.monthlyPriceAverage;
      else if (quot.provider == "onprem" && quot.pricesSummary.monthlyPriceAverage < cheapestONP)
        cheapestONP = quot.pricesSummary.monthlyPriceAverage;
    });

    if (cheapestAWS < this.cheapestPrices.aws)
      this.cheapestPrices.aws = cheapestAWS
    if (cheapestOVH < this.cheapestPrices.ovh)
      this.cheapestPrices.ovh = cheapestOVH;
    if (cheapestAZU < this.cheapestPrices.azure)
      this.cheapestPrices.azure = cheapestAZU;
    if (cheapestONP < this.cheapestPrices.onprem)
      this.cheapestPrices.onprem = cheapestONP
    if (cheapestGCP < this.cheapestPrices.google)
      this.cheapestPrices.google = cheapestGCP;
  }

  nextQuotation() {

    this.quotations.forEach(quotation => {

      var latitude: number = quotation.latitude;
      var longitude: number = quotation.longitude;

      if (this.imageSeries.data.length > 0) {

        this.imageSeries.data.forEach(element => {

          if (element.city == quotation.cityName) {

            var cityAlreadyExistinArray: boolean = false;

            if (this.array_no_overlap.length > 0) {
              this.array_no_overlap.forEach(element => {
                if (element.city == quotation.cityName)
                  cityAlreadyExistinArray = true;
              })
            }

            if (cityAlreadyExistinArray == false) {
              this.array_no_overlap.push({
                city: element.city,
                presences: [false, false, false]
              });
            }

            var latandlong: any = this.getLatitudeAndLongitude(element.city);

            latitude = quotation.latitude + latandlong.latitude;
            longitude = quotation.longitude + latandlong.longitude;
          }
        })
      }

      var newImageSerie = {
        "latitude": latitude,
        "longitude": longitude,
        "icon": quotation.smallIcon,
        "id": quotation.isoCode,
        "name": quotation.provider,
        "value": quotation.pricesSummary.monthlyPriceAverage,
        "city": quotation.cityName,
        "currency": quotation.pricesSummary.currency,
        "color": this.providers[quotation.provider].color
      }

      this.imageSeries.addData(newImageSerie);

      this.chart.addData({
        "id": this.quotation_id,
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
      });

      this.chart.dataSource.load();
      this.chart.validateData();
      this.chart.validateRawData();
      this.categoryAxis.zoomToIndexes(this.chart.data.length - 12, this.chart.data.length);
      this.quotation_id++;
    });

  }
}