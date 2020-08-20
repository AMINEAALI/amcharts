export class Quotation {

  // Fake API call, i represents each second of interval in app component

  callAPI(i) {
    if (i == 1) {
      return {
        "status": "pending",
        "statusReason": "",
        "completionPercent": 12,
        "results": [
          {
            "provider": "aws",
            "location": "europe.uk.london",
            "providerRegionCode": "eu-west-2",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 209.45,
              "TCO3years": 7540.2,
              "monthlyPriceAverage": 209.45,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 8,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 113.15,
                  "TCO3years": 4073.4,
                  "monthlyPriceAverage": 113.15,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 96.3,
                  "TCO3years": 3466.8,
                  "monthlyPriceAverage": 96.3,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 0,
            "continent": "europe",
            "country": "uk",
            "city": "london",
            "cityName": "London",
            "countryName": "United Kingdom",
            "latitude": 51.50722,
            "longitude": -0.1275,
            "isoCode": "GB",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          },
          {
            "provider": "aws",
            "location": "europe.germany.frankfurt",
            "providerRegionCode": "eu-central-1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 206.16,
              "TCO3years": 7421.76,
              "monthlyPriceAverage": 206.16,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 107.31,
                  "TCO3years": 3863.16,
                  "monthlyPriceAverage": 107.31,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 98.85,
                  "TCO3years": 3558.6,
                  "monthlyPriceAverage": 98.85,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 1,
            "continent": "europe",
            "country": "germany",
            "city": "frankfurt",
            "cityName": "Frankfurt",
            "countryName": "Germany",
            "latitude": 50.11361,
            "longitude": 8.67972,
            "isoCode": "DE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          },
          {
            "provider": "aws",
            "location": "europe.sweden.stockholm",
            "providerRegionCode": "eu-north-1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 195.5,
              "TCO3years": 7038.18,
              "monthlyPriceAverage": 195.5,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 108.77,
                  "TCO3years": 3915.72,
                  "monthlyPriceAverage": 108.77,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 86.74,
                  "TCO3years": 3122.46,
                  "monthlyPriceAverage": 86.74,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 2,
            "continent": "europe",
            "country": "sweden",
            "city": "stockholm",
            "cityName": "Stockholm",
            "countryName": "Sweden",
            "latitude": 59.32944,
            "longitude": 18.06861,
            "isoCode": "SE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          }
        ]
      }
    }
    else if (i == 2) {
      return {
        "status": "pending",
        "statusReason": "",
        "completionPercent": 58,
        "results": [
          {
            "provider": "aws",
            "location": "europe.uk.london",
            "providerRegionCode": "eu-west-2",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 209.45,
              "TCO3years": 7540.2,
              "monthlyPriceAverage": 209.45,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 8,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 113.15,
                  "TCO3years": 4073.4,
                  "monthlyPriceAverage": 113.15,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 96.3,
                  "TCO3years": 3466.8,
                  "monthlyPriceAverage": 96.3,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 0,
            "continent": "europe",
            "country": "uk",
            "city": "london",
            "cityName": "London",
            "countryName": "United Kingdom",
            "latitude": 51.50722,
            "longitude": -0.1275,
            "isoCode": "GB",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          },
          {
            "provider": "aws",
            "location": "europe.germany.frankfurt",
            "providerRegionCode": "eu-central-1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 206.16,
              "TCO3years": 7421.76,
              "monthlyPriceAverage": 206.16,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 107.31,
                  "TCO3years": 3863.16,
                  "monthlyPriceAverage": 107.31,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 98.85,
                  "TCO3years": 3558.6,
                  "monthlyPriceAverage": 98.85,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 1,
            "continent": "europe",
            "country": "germany",
            "city": "frankfurt",
            "cityName": "Frankfurt",
            "countryName": "Germany",
            "latitude": 50.11361,
            "longitude": 8.67972,
            "isoCode": "DE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          },
          {
            "provider": "aws",
            "location": "europe.sweden.stockholm",
            "providerRegionCode": "eu-north-1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 195.5,
              "TCO3years": 7038.18,
              "monthlyPriceAverage": 195.5,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 108.77,
                  "TCO3years": 3915.72,
                  "monthlyPriceAverage": 108.77,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 86.74,
                  "TCO3years": 3122.46,
                  "monthlyPriceAverage": 86.74,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 2,
            "continent": "europe",
            "country": "sweden",
            "city": "stockholm",
            "cityName": "Stockholm",
            "countryName": "Sweden",
            "latitude": 59.32944,
            "longitude": 18.06861,
            "isoCode": "SE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          },
          {
            "provider": "aws",
            "location": "europe.france.paris",
            "providerRegionCode": "eu-west-3",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 210.18,
              "TCO3years": 7566.48,
              "monthlyPriceAverage": 210.18,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 113.88,
                  "TCO3years": 4099.68,
                  "monthlyPriceAverage": 113.88,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 96.3,
                  "TCO3years": 3466.8,
                  "monthlyPriceAverage": 96.3,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 3,
            "continent": "europe",
            "country": "france",
            "city": "paris",
            "cityName": "Paris",
            "countryName": "France",
            "latitude": 48.859489,
            "longitude": 2.320582,
            "isoCode": "FR",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          },
          {
            "provider": "aws",
            "location": "europe.ireland.dublin",
            "providerRegionCode": "eu-west-1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 197.88,
              "TCO3years": 7123.68,
              "monthlyPriceAverage": 197.88,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 106.58,
                  "TCO3years": 3836.88,
                  "monthlyPriceAverage": 106.58,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 91.3,
                  "TCO3years": 3286.8,
                  "monthlyPriceAverage": 91.3,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 4,
            "continent": "europe",
            "country": "ireland",
            "city": "dublin",
            "cityName": "Dublin",
            "countryName": "Ireland",
            "latitude": 53.34929607,
            "longitude": -6.26036167,
            "isoCode": "IE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.uk.london",
            "providerRegionCode": "united-kingdom-south",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 140.11,
              "TCO3years": 5044.02,
              "monthlyPriceAverage": 140.11,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 110.83,
                  "TCO3years": 3989.83,
                  "monthlyPriceAverage": 110.83,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 29.28,
                  "TCO3years": 1054.19,
                  "monthlyPriceAverage": 29.28,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 5,
            "continent": "europe",
            "country": "uk",
            "city": "london",
            "cityName": "London",
            "countryName": "United Kingdom",
            "latitude": 51.50722,
            "longitude": -0.1275,
            "isoCode": "GB",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.uk.cardiff",
            "providerRegionCode": "united-kingdom-west",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 140.19,
              "TCO3years": 5046.91,
              "monthlyPriceAverage": 140.19,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 110.91,
                  "TCO3years": 3992.72,
                  "monthlyPriceAverage": 110.91,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 29.28,
                  "TCO3years": 1054.19,
                  "monthlyPriceAverage": 29.28,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 6,
            "continent": "europe",
            "country": "uk",
            "city": "cardiff",
            "cityName": "Cardiff",
            "countryName": "United Kingdom",
            "latitude": 51.4817,
            "longitude": -3.1792,
            "isoCode": "GB",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.netherlands.amsterdam",
            "providerRegionCode": "europe-west",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 135.71,
              "TCO3years": 4885.62,
              "monthlyPriceAverage": 135.71,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 109.08,
                  "TCO3years": 3926.76,
                  "monthlyPriceAverage": 109.08,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 26.64,
                  "TCO3years": 958.86,
                  "monthlyPriceAverage": 26.64,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 7,
            "continent": "europe",
            "country": "netherlands",
            "city": "amsterdam",
            "cityName": "Amsterdam",
            "countryName": "Netherlands",
            "latitude": 52.378,
            "longitude": 4.9,
            "isoCode": "NL",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.germany.frankfurt",
            "providerRegionCode": "germany-central",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 185.12,
              "TCO3years": 6664.49,
              "monthlyPriceAverage": 185.12,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 155.05,
                  "TCO3years": 5581.87,
                  "monthlyPriceAverage": 155.05,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 256
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 30.07,
                  "TCO3years": 1082.62,
                  "monthlyPriceAverage": 30.07,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 8,
            "continent": "europe",
            "country": "germany",
            "city": "frankfurt",
            "cityName": "Frankfurt",
            "countryName": "Germany",
            "latitude": 50.11361,
            "longitude": 8.67972,
            "isoCode": "DE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.germany.magdebourg",
            "providerRegionCode": "germany-northeast",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 192.13,
              "TCO3years": 6916.78,
              "monthlyPriceAverage": 192.13,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 162.06,
                  "TCO3years": 5834.16,
                  "monthlyPriceAverage": 162.06,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 256
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 30.07,
                  "TCO3years": 1082.62,
                  "monthlyPriceAverage": 30.07,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 9,
            "continent": "europe",
            "country": "germany",
            "city": "magdebourg",
            "cityName": "Magdebourg",
            "countryName": "Germany",
            "latitude": 52.13333,
            "longitude": 11.61667,
            "isoCode": "DE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.france.paris",
            "providerRegionCode": "france-central",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 140.11,
              "TCO3years": 5044.02,
              "monthlyPriceAverage": 140.11,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 110.83,
                  "TCO3years": 3989.83,
                  "monthlyPriceAverage": 110.83,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 29.28,
                  "TCO3years": 1054.19,
                  "monthlyPriceAverage": 29.28,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 10,
            "continent": "europe",
            "country": "france",
            "city": "paris",
            "cityName": "Paris",
            "countryName": "France",
            "latitude": 48.859489,
            "longitude": 2.320582,
            "isoCode": "FR",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.france.marseille",
            "providerRegionCode": "france-south",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 158.85,
              "TCO3years": 5718.64,
              "monthlyPriceAverage": 158.85,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 8,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 120.83,
                  "TCO3years": 4349.87,
                  "monthlyPriceAverage": 120.83,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 38.02,
                  "TCO3years": 1368.77,
                  "monthlyPriceAverage": 38.02,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 11,
            "continent": "europe",
            "country": "france",
            "city": "marseille",
            "cityName": "Marseille",
            "countryName": "France",
            "latitude": 43.29667,
            "longitude": 5.37639,
            "isoCode": "FR",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.ireland.dublin",
            "providerRegionCode": "europe-north",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 133.33,
              "TCO3years": 4799.72,
              "monthlyPriceAverage": 133.33,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 108.66,
                  "TCO3years": 3911.78,
                  "monthlyPriceAverage": 108.66,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 24.67,
                  "TCO3years": 887.94,
                  "monthlyPriceAverage": 24.67,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 12,
            "continent": "europe",
            "country": "ireland",
            "city": "dublin",
            "cityName": "Dublin",
            "countryName": "Ireland",
            "latitude": 53.34929607,
            "longitude": -6.26036167,
            "isoCode": "IE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "google",
            "location": "europe.uk.london",
            "providerRegionCode": "europe-west2",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 133.92,
              "TCO3years": 4821.3,
              "monthlyPriceAverage": 133.92,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 111.12,
                  "TCO3years": 4000.5,
                  "monthlyPriceAverage": 111.12,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 22.8,
                  "TCO3years": 820.8,
                  "monthlyPriceAverage": 22.8,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 13,
            "continent": "europe",
            "country": "uk",
            "city": "london",
            "cityName": "London",
            "countryName": "United Kingdom",
            "latitude": 51.50722,
            "longitude": -0.1275,
            "isoCode": "GB",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/GCP-small.png"
          }
        ]
      }
    }
    else if (i == 3) {
      return {
        "status": "pending",
        "statusReason": "",
        "completionPercent": 95,
        "results": [
          {
            "provider": "aws",
            "location": "europe.uk.london",
            "providerRegionCode": "eu-west-2",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 209.45,
              "TCO3years": 7540.2,
              "monthlyPriceAverage": 209.45,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 8,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 113.15,
                  "TCO3years": 4073.4,
                  "monthlyPriceAverage": 113.15,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 96.3,
                  "TCO3years": 3466.8,
                  "monthlyPriceAverage": 96.3,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 0,
            "continent": "europe",
            "country": "uk",
            "city": "london",
            "cityName": "London",
            "countryName": "United Kingdom",
            "latitude": 51.50722,
            "longitude": -0.1275,
            "isoCode": "GB",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          },
          {
            "provider": "aws",
            "location": "europe.germany.frankfurt",
            "providerRegionCode": "eu-central-1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 206.16,
              "TCO3years": 7421.76,
              "monthlyPriceAverage": 206.16,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 107.31,
                  "TCO3years": 3863.16,
                  "monthlyPriceAverage": 107.31,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 98.85,
                  "TCO3years": 3558.6,
                  "monthlyPriceAverage": 98.85,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 1,
            "continent": "europe",
            "country": "germany",
            "city": "frankfurt",
            "cityName": "Frankfurt",
            "countryName": "Germany",
            "latitude": 50.11361,
            "longitude": 8.67972,
            "isoCode": "DE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          },
          {
            "provider": "aws",
            "location": "europe.sweden.stockholm",
            "providerRegionCode": "eu-north-1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 195.5,
              "TCO3years": 7038.18,
              "monthlyPriceAverage": 195.5,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 108.77,
                  "TCO3years": 3915.72,
                  "monthlyPriceAverage": 108.77,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 86.74,
                  "TCO3years": 3122.46,
                  "monthlyPriceAverage": 86.74,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 2,
            "continent": "europe",
            "country": "sweden",
            "city": "stockholm",
            "cityName": "Stockholm",
            "countryName": "Sweden",
            "latitude": 59.32944,
            "longitude": 18.06861,
            "isoCode": "SE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          },
          {
            "provider": "aws",
            "location": "europe.france.paris",
            "providerRegionCode": "eu-west-3",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 210.18,
              "TCO3years": 7566.48,
              "monthlyPriceAverage": 210.18,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 113.88,
                  "TCO3years": 4099.68,
                  "monthlyPriceAverage": 113.88,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 96.3,
                  "TCO3years": 3466.8,
                  "monthlyPriceAverage": 96.3,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 3,
            "continent": "europe",
            "country": "france",
            "city": "paris",
            "cityName": "Paris",
            "countryName": "France",
            "latitude": 48.859489,
            "longitude": 2.320582,
            "isoCode": "FR",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          },
          {
            "provider": "aws",
            "location": "europe.ireland.dublin",
            "providerRegionCode": "eu-west-1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 197.88,
              "TCO3years": 7123.68,
              "monthlyPriceAverage": 197.88,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 106.58,
                  "TCO3years": 3836.88,
                  "monthlyPriceAverage": 106.58,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 91.3,
                  "TCO3years": 3286.8,
                  "monthlyPriceAverage": 91.3,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 4,
            "continent": "europe",
            "country": "ireland",
            "city": "dublin",
            "cityName": "Dublin",
            "countryName": "Ireland",
            "latitude": 53.34929607,
            "longitude": -6.26036167,
            "isoCode": "IE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.uk.london",
            "providerRegionCode": "united-kingdom-south",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 140.11,
              "TCO3years": 5044.02,
              "monthlyPriceAverage": 140.11,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 110.83,
                  "TCO3years": 3989.83,
                  "monthlyPriceAverage": 110.83,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 29.28,
                  "TCO3years": 1054.19,
                  "monthlyPriceAverage": 29.28,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 5,
            "continent": "europe",
            "country": "uk",
            "city": "london",
            "cityName": "London",
            "countryName": "United Kingdom",
            "latitude": 51.50722,
            "longitude": -0.1275,
            "isoCode": "GB",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.uk.cardiff",
            "providerRegionCode": "united-kingdom-west",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 140.19,
              "TCO3years": 5046.91,
              "monthlyPriceAverage": 140.19,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 110.91,
                  "TCO3years": 3992.72,
                  "monthlyPriceAverage": 110.91,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 29.28,
                  "TCO3years": 1054.19,
                  "monthlyPriceAverage": 29.28,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 6,
            "continent": "europe",
            "country": "uk",
            "city": "cardiff",
            "cityName": "Cardiff",
            "countryName": "United Kingdom",
            "latitude": 51.4817,
            "longitude": -3.1792,
            "isoCode": "GB",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.netherlands.amsterdam",
            "providerRegionCode": "europe-west",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 135.71,
              "TCO3years": 4885.62,
              "monthlyPriceAverage": 135.71,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 109.08,
                  "TCO3years": 3926.76,
                  "monthlyPriceAverage": 109.08,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 26.64,
                  "TCO3years": 958.86,
                  "monthlyPriceAverage": 26.64,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 7,
            "continent": "europe",
            "country": "netherlands",
            "city": "amsterdam",
            "cityName": "Amsterdam",
            "countryName": "Netherlands",
            "latitude": 52.378,
            "longitude": 4.9,
            "isoCode": "NL",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.germany.frankfurt",
            "providerRegionCode": "germany-central",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 185.12,
              "TCO3years": 6664.49,
              "monthlyPriceAverage": 185.12,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 155.05,
                  "TCO3years": 5581.87,
                  "monthlyPriceAverage": 155.05,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 256
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 30.07,
                  "TCO3years": 1082.62,
                  "monthlyPriceAverage": 30.07,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 8,
            "continent": "europe",
            "country": "germany",
            "city": "frankfurt",
            "cityName": "Frankfurt",
            "countryName": "Germany",
            "latitude": 50.11361,
            "longitude": 8.67972,
            "isoCode": "DE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.germany.magdebourg",
            "providerRegionCode": "germany-northeast",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 192.13,
              "TCO3years": 6916.78,
              "monthlyPriceAverage": 192.13,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 162.06,
                  "TCO3years": 5834.16,
                  "monthlyPriceAverage": 162.06,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 256
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 30.07,
                  "TCO3years": 1082.62,
                  "monthlyPriceAverage": 30.07,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 9,
            "continent": "europe",
            "country": "germany",
            "city": "magdebourg",
            "cityName": "Magdebourg",
            "countryName": "Germany",
            "latitude": 52.13333,
            "longitude": 11.61667,
            "isoCode": "DE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.france.paris",
            "providerRegionCode": "france-central",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 140.11,
              "TCO3years": 5044.02,
              "monthlyPriceAverage": 140.11,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 110.83,
                  "TCO3years": 3989.83,
                  "monthlyPriceAverage": 110.83,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 29.28,
                  "TCO3years": 1054.19,
                  "monthlyPriceAverage": 29.28,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 10,
            "continent": "europe",
            "country": "france",
            "city": "paris",
            "cityName": "Paris",
            "countryName": "France",
            "latitude": 48.859489,
            "longitude": 2.320582,
            "isoCode": "FR",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.france.marseille",
            "providerRegionCode": "france-south",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 158.85,
              "TCO3years": 5718.64,
              "monthlyPriceAverage": 158.85,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 8,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 120.83,
                  "TCO3years": 4349.87,
                  "monthlyPriceAverage": 120.83,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 38.02,
                  "TCO3years": 1368.77,
                  "monthlyPriceAverage": 38.02,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 11,
            "continent": "europe",
            "country": "france",
            "city": "marseille",
            "cityName": "Marseille",
            "countryName": "France",
            "latitude": 43.29667,
            "longitude": 5.37639,
            "isoCode": "FR",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.ireland.dublin",
            "providerRegionCode": "europe-north",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 133.33,
              "TCO3years": 4799.72,
              "monthlyPriceAverage": 133.33,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 108.66,
                  "TCO3years": 3911.78,
                  "monthlyPriceAverage": 108.66,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 24.67,
                  "TCO3years": 887.94,
                  "monthlyPriceAverage": 24.67,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 12,
            "continent": "europe",
            "country": "ireland",
            "city": "dublin",
            "cityName": "Dublin",
            "countryName": "Ireland",
            "latitude": 53.34929607,
            "longitude": -6.26036167,
            "isoCode": "IE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "google",
            "location": "europe.uk.london",
            "providerRegionCode": "europe-west2",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 133.92,
              "TCO3years": 4821.3,
              "monthlyPriceAverage": 133.92,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 111.12,
                  "TCO3years": 4000.5,
                  "monthlyPriceAverage": 111.12,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 22.8,
                  "TCO3years": 820.8,
                  "monthlyPriceAverage": 22.8,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 13,
            "continent": "europe",
            "country": "uk",
            "city": "london",
            "cityName": "London",
            "countryName": "United Kingdom",
            "latitude": 51.50722,
            "longitude": -0.1275,
            "isoCode": "GB",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/GCP-small.png"
          },
          {
            "provider": "google",
            "location": "europe.belgium.st-ghislain",
            "providerRegionCode": "europe-west1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 124.69,
              "TCO3years": 4488.88,
              "monthlyPriceAverage": 124.69,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 105.69,
                  "TCO3years": 3804.88,
                  "monthlyPriceAverage": 105.69,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 19,
                  "TCO3years": 684,
                  "monthlyPriceAverage": 19,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 14,
            "continent": "europe",
            "country": "belgium",
            "city": "st-ghislain",
            "cityName": "St-Ghislain",
            "countryName": "Belgium",
            "latitude": 50.458435,
            "longitude": 3.818476,
            "isoCode": "BE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/GCP-small.png"
          },
          {
            "provider": "google",
            "location": "europe.netherlands.eemshaven",
            "providerRegionCode": "europe-west4",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 124.4,
              "TCO3years": 4478.43,
              "monthlyPriceAverage": 124.4,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 103.5,
                  "TCO3years": 3726.03,
                  "monthlyPriceAverage": 103.5,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 20.9,
                  "TCO3years": 752.4,
                  "monthlyPriceAverage": 20.9,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 15,
            "continent": "europe",
            "country": "netherlands",
            "city": "eemshaven",
            "cityName": "Eemshaven",
            "countryName": "Netherlands",
            "latitude": 53.44,
            "longitude": 6.85,
            "isoCode": "NL",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/GCP-small.png"
          },
          {
            "provider": "google",
            "location": "europe.germany.frankfurt",
            "providerRegionCode": "europe-west3",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 133.93,
              "TCO3years": 4821.59,
              "monthlyPriceAverage": 133.93,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 111.13,
                  "TCO3years": 4000.79,
                  "monthlyPriceAverage": 111.13,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 22.8,
                  "TCO3years": 820.8,
                  "monthlyPriceAverage": 22.8,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 16,
            "continent": "europe",
            "country": "germany",
            "city": "frankfurt",
            "cityName": "Frankfurt",
            "countryName": "Germany",
            "latitude": 50.11361,
            "longitude": 8.67972,
            "isoCode": "DE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/GCP-small.png"
          },
          {
            "provider": "google",
            "location": "europe.finland.hamina",
            "providerRegionCode": "europe-north1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 124.4,
              "TCO3years": 4478.43,
              "monthlyPriceAverage": 124.4,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 103.5,
                  "TCO3years": 3726.03,
                  "monthlyPriceAverage": 103.5,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 20.9,
                  "TCO3years": 752.4,
                  "monthlyPriceAverage": 20.9,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 17,
            "continent": "europe",
            "country": "finland",
            "city": "hamina",
            "cityName": "Hamina",
            "countryName": "Finland",
            "latitude": 60.56972,
            "longitude": 27.19806,
            "isoCode": "FI",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/GCP-small.png"
          },
          {
            "provider": "onprem",
            "location": "onprem.onprem.onprem",
            "providerRegionCode": "onprem",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 143.88,
              "TCO3years": 5179.51,
              "monthlyPriceAverage": 143.88,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 95.16,
                  "TCO3years": 3425.59,
                  "monthlyPriceAverage": 95.16,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 48.72,
                  "TCO3years": 1753.92,
                  "monthlyPriceAverage": 48.72,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 18,
            "continent": "onprem",
            "country": "onprem",
            "city": "onprem",
            "cityName": "On Premise",
            "countryName": "On Premise",
            "latitude": null,
            "longitude": null,
            "isoCode": null,
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/privateDC-small.png"
          },
          {
            "provider": "ovh",
            "location": "europe.uk.london",
            "providerRegionCode": "UK1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 66.08,
              "TCO3years": 2378.95,
              "monthlyPriceAverage": 66.08,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 7,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 57.38,
                  "TCO3years": 2065.75,
                  "monthlyPriceAverage": 57.38,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 8.7,
                  "TCO3years": 313.2,
                  "monthlyPriceAverage": 8.7,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 19,
            "continent": "europe",
            "country": "uk",
            "city": "london",
            "cityName": "London",
            "countryName": "United Kingdom",
            "latitude": 51.50722,
            "longitude": -0.1275,
            "isoCode": "GB",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/OVH-small.png"
          },
          {
            "provider": "ovh",
            "location": "europe.germany.frankfurt",
            "providerRegionCode": "DE1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 66.08,
              "TCO3years": 2378.95,
              "monthlyPriceAverage": 66.08,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 7,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 57.38,
                  "TCO3years": 2065.75,
                  "monthlyPriceAverage": 57.38,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 8.7,
                  "TCO3years": 313.2,
                  "monthlyPriceAverage": 8.7,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 20,
            "continent": "europe",
            "country": "germany",
            "city": "frankfurt",
            "cityName": "Frankfurt",
            "countryName": "Germany",
            "latitude": 50.11361,
            "longitude": 8.67972,
            "isoCode": "DE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/OVH-small.png"
          },
          {
            "provider": "ovh",
            "location": "europe.poland.warsaw",
            "providerRegionCode": "WAW1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 66.08,
              "TCO3years": 2378.95,
              "monthlyPriceAverage": 66.08,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 7,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 57.38,
                  "TCO3years": 2065.75,
                  "monthlyPriceAverage": 57.38,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 8.7,
                  "TCO3years": 313.2,
                  "monthlyPriceAverage": 8.7,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 21,
            "continent": "europe",
            "country": "poland",
            "city": "warsaw",
            "cityName": "Warsaw",
            "countryName": "Poland",
            "latitude": 52.233333,
            "longitude": 21.016667,
            "isoCode": "PL",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/OVH-small.png"
          },
          {
            "provider": "ovh",
            "location": "europe.france.gravelines",
            "providerRegionCode": "GRA1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 66.08,
              "TCO3years": 2378.95,
              "monthlyPriceAverage": 66.08,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 7,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 57.38,
                  "TCO3years": 2065.75,
                  "monthlyPriceAverage": 57.38,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 8.7,
                  "TCO3years": 313.2,
                  "monthlyPriceAverage": 8.7,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 22,
            "continent": "europe",
            "country": "france",
            "city": "gravelines",
            "cityName": "Gravelines",
            "countryName": "France",
            "latitude": 50.9858,
            "longitude": 2.1283,
            "isoCode": "FR",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/OVH-small.png"
          }
        ]
      }
    }
    else if (i == 4) {
      return {
        "status": "success",
        "statusReason": "",
        "completionPercent": 100,
        "results": [
          {
            "provider": "aws",
            "location": "europe.uk.london",
            "providerRegionCode": "eu-west-2",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 209.45,
              "TCO3years": 7540.2,
              "monthlyPriceAverage": 209.45,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 8,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 113.15,
                  "TCO3years": 4073.4,
                  "monthlyPriceAverage": 113.15,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 96.3,
                  "TCO3years": 3466.8,
                  "monthlyPriceAverage": 96.3,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 0,
            "continent": "europe",
            "country": "uk",
            "city": "london",
            "cityName": "London",
            "countryName": "United Kingdom",
            "latitude": 51.50722,
            "longitude": -0.1275,
            "isoCode": "GB",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          },
          {
            "provider": "aws",
            "location": "europe.germany.frankfurt",
            "providerRegionCode": "eu-central-1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 206.16,
              "TCO3years": 7421.76,
              "monthlyPriceAverage": 206.16,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 107.31,
                  "TCO3years": 3863.16,
                  "monthlyPriceAverage": 107.31,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 98.85,
                  "TCO3years": 3558.6,
                  "monthlyPriceAverage": 98.85,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 1,
            "continent": "europe",
            "country": "germany",
            "city": "frankfurt",
            "cityName": "Frankfurt",
            "countryName": "Germany",
            "latitude": 50.11361,
            "longitude": 8.67972,
            "isoCode": "DE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          },
          {
            "provider": "aws",
            "location": "europe.sweden.stockholm",
            "providerRegionCode": "eu-north-1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 195.5,
              "TCO3years": 7038.18,
              "monthlyPriceAverage": 195.5,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 108.77,
                  "TCO3years": 3915.72,
                  "monthlyPriceAverage": 108.77,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 86.74,
                  "TCO3years": 3122.46,
                  "monthlyPriceAverage": 86.74,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 2,
            "continent": "europe",
            "country": "sweden",
            "city": "stockholm",
            "cityName": "Stockholm",
            "countryName": "Sweden",
            "latitude": 59.32944,
            "longitude": 18.06861,
            "isoCode": "SE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          },
          {
            "provider": "aws",
            "location": "europe.france.paris",
            "providerRegionCode": "eu-west-3",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 210.18,
              "TCO3years": 7566.48,
              "monthlyPriceAverage": 210.18,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 113.88,
                  "TCO3years": 4099.68,
                  "monthlyPriceAverage": 113.88,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 96.3,
                  "TCO3years": 3466.8,
                  "monthlyPriceAverage": 96.3,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 3,
            "continent": "europe",
            "country": "france",
            "city": "paris",
            "cityName": "Paris",
            "countryName": "France",
            "latitude": 48.859489,
            "longitude": 2.320582,
            "isoCode": "FR",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          },
          {
            "provider": "aws",
            "location": "europe.ireland.dublin",
            "providerRegionCode": "eu-west-1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 197.88,
              "TCO3years": 7123.68,
              "monthlyPriceAverage": 197.88,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 106.58,
                  "TCO3years": 3836.88,
                  "monthlyPriceAverage": 106.58,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 91.3,
                  "TCO3years": 3286.8,
                  "monthlyPriceAverage": 91.3,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 4,
            "continent": "europe",
            "country": "ireland",
            "city": "dublin",
            "cityName": "Dublin",
            "countryName": "Ireland",
            "latitude": 53.34929607,
            "longitude": -6.26036167,
            "isoCode": "IE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/AWS-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.uk.london",
            "providerRegionCode": "united-kingdom-south",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 140.11,
              "TCO3years": 5044.02,
              "monthlyPriceAverage": 140.11,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 110.83,
                  "TCO3years": 3989.83,
                  "monthlyPriceAverage": 110.83,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 29.28,
                  "TCO3years": 1054.19,
                  "monthlyPriceAverage": 29.28,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 5,
            "continent": "europe",
            "country": "uk",
            "city": "london",
            "cityName": "London",
            "countryName": "United Kingdom",
            "latitude": 51.50722,
            "longitude": -0.1275,
            "isoCode": "GB",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.uk.cardiff",
            "providerRegionCode": "united-kingdom-west",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 140.19,
              "TCO3years": 5046.91,
              "monthlyPriceAverage": 140.19,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 110.91,
                  "TCO3years": 3992.72,
                  "monthlyPriceAverage": 110.91,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 29.28,
                  "TCO3years": 1054.19,
                  "monthlyPriceAverage": 29.28,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 6,
            "continent": "europe",
            "country": "uk",
            "city": "cardiff",
            "cityName": "Cardiff",
            "countryName": "United Kingdom",
            "latitude": 51.4817,
            "longitude": -3.1792,
            "isoCode": "GB",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.netherlands.amsterdam",
            "providerRegionCode": "europe-west",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 135.71,
              "TCO3years": 4885.62,
              "monthlyPriceAverage": 135.71,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 109.08,
                  "TCO3years": 3926.76,
                  "monthlyPriceAverage": 109.08,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 26.64,
                  "TCO3years": 958.86,
                  "monthlyPriceAverage": 26.64,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 7,
            "continent": "europe",
            "country": "netherlands",
            "city": "amsterdam",
            "cityName": "Amsterdam",
            "countryName": "Netherlands",
            "latitude": 52.378,
            "longitude": 4.9,
            "isoCode": "NL",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.germany.frankfurt",
            "providerRegionCode": "germany-central",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 185.12,
              "TCO3years": 6664.49,
              "monthlyPriceAverage": 185.12,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 155.05,
                  "TCO3years": 5581.87,
                  "monthlyPriceAverage": 155.05,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 256
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 30.07,
                  "TCO3years": 1082.62,
                  "monthlyPriceAverage": 30.07,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 8,
            "continent": "europe",
            "country": "germany",
            "city": "frankfurt",
            "cityName": "Frankfurt",
            "countryName": "Germany",
            "latitude": 50.11361,
            "longitude": 8.67972,
            "isoCode": "DE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.germany.magdebourg",
            "providerRegionCode": "germany-northeast",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 192.13,
              "TCO3years": 6916.78,
              "monthlyPriceAverage": 192.13,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 162.06,
                  "TCO3years": 5834.16,
                  "monthlyPriceAverage": 162.06,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 256
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 30.07,
                  "TCO3years": 1082.62,
                  "monthlyPriceAverage": 30.07,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 9,
            "continent": "europe",
            "country": "germany",
            "city": "magdebourg",
            "cityName": "Magdebourg",
            "countryName": "Germany",
            "latitude": 52.13333,
            "longitude": 11.61667,
            "isoCode": "DE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.france.paris",
            "providerRegionCode": "france-central",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 140.11,
              "TCO3years": 5044.02,
              "monthlyPriceAverage": 140.11,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 110.83,
                  "TCO3years": 3989.83,
                  "monthlyPriceAverage": 110.83,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 29.28,
                  "TCO3years": 1054.19,
                  "monthlyPriceAverage": 29.28,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 10,
            "continent": "europe",
            "country": "france",
            "city": "paris",
            "cityName": "Paris",
            "countryName": "France",
            "latitude": 48.859489,
            "longitude": 2.320582,
            "isoCode": "FR",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.france.marseille",
            "providerRegionCode": "france-south",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 158.85,
              "TCO3years": 5718.64,
              "monthlyPriceAverage": 158.85,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 8,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 120.83,
                  "TCO3years": 4349.87,
                  "monthlyPriceAverage": 120.83,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 38.02,
                  "TCO3years": 1368.77,
                  "monthlyPriceAverage": 38.02,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 11,
            "continent": "europe",
            "country": "france",
            "city": "marseille",
            "cityName": "Marseille",
            "countryName": "France",
            "latitude": 43.29667,
            "longitude": 5.37639,
            "isoCode": "FR",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "azure",
            "location": "europe.ireland.dublin",
            "providerRegionCode": "europe-north",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 133.33,
              "TCO3years": 4799.72,
              "monthlyPriceAverage": 133.33,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 108.66,
                  "TCO3years": 3911.78,
                  "monthlyPriceAverage": 108.66,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 192
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 24.67,
                  "TCO3years": 887.94,
                  "monthlyPriceAverage": 24.67,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 12,
            "continent": "europe",
            "country": "ireland",
            "city": "dublin",
            "cityName": "Dublin",
            "countryName": "Ireland",
            "latitude": 53.34929607,
            "longitude": -6.26036167,
            "isoCode": "IE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/Azure-small.png"
          },
          {
            "provider": "google",
            "location": "europe.uk.london",
            "providerRegionCode": "europe-west2",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 133.92,
              "TCO3years": 4821.3,
              "monthlyPriceAverage": 133.92,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 111.12,
                  "TCO3years": 4000.5,
                  "monthlyPriceAverage": 111.12,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 22.8,
                  "TCO3years": 820.8,
                  "monthlyPriceAverage": 22.8,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 13,
            "continent": "europe",
            "country": "uk",
            "city": "london",
            "cityName": "London",
            "countryName": "United Kingdom",
            "latitude": 51.50722,
            "longitude": -0.1275,
            "isoCode": "GB",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/GCP-small.png"
          },
          {
            "provider": "google",
            "location": "europe.belgium.st-ghislain",
            "providerRegionCode": "europe-west1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 124.69,
              "TCO3years": 4488.88,
              "monthlyPriceAverage": 124.69,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 105.69,
                  "TCO3years": 3804.88,
                  "monthlyPriceAverage": 105.69,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 19,
                  "TCO3years": 684,
                  "monthlyPriceAverage": 19,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 14,
            "continent": "europe",
            "country": "belgium",
            "city": "st-ghislain",
            "cityName": "St-Ghislain",
            "countryName": "Belgium",
            "latitude": 50.458435,
            "longitude": 3.818476,
            "isoCode": "BE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/GCP-small.png"
          },
          {
            "provider": "google",
            "location": "europe.netherlands.eemshaven",
            "providerRegionCode": "europe-west4",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 124.4,
              "TCO3years": 4478.43,
              "monthlyPriceAverage": 124.4,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 103.5,
                  "TCO3years": 3726.03,
                  "monthlyPriceAverage": 103.5,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 20.9,
                  "TCO3years": 752.4,
                  "monthlyPriceAverage": 20.9,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 15,
            "continent": "europe",
            "country": "netherlands",
            "city": "eemshaven",
            "cityName": "Eemshaven",
            "countryName": "Netherlands",
            "latitude": 53.44,
            "longitude": 6.85,
            "isoCode": "NL",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/GCP-small.png"
          },
          {
            "provider": "google",
            "location": "europe.germany.frankfurt",
            "providerRegionCode": "europe-west3",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 133.93,
              "TCO3years": 4821.59,
              "monthlyPriceAverage": 133.93,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 111.13,
                  "TCO3years": 4000.79,
                  "monthlyPriceAverage": 111.13,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 22.8,
                  "TCO3years": 820.8,
                  "monthlyPriceAverage": 22.8,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 16,
            "continent": "europe",
            "country": "germany",
            "city": "frankfurt",
            "cityName": "Frankfurt",
            "countryName": "Germany",
            "latitude": 50.11361,
            "longitude": 8.67972,
            "isoCode": "DE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/GCP-small.png"
          },
          {
            "provider": "google",
            "location": "europe.finland.hamina",
            "providerRegionCode": "europe-north1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 124.4,
              "TCO3years": 4478.43,
              "monthlyPriceAverage": 124.4,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 103.5,
                  "TCO3years": 3726.03,
                  "monthlyPriceAverage": 103.5,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 20.9,
                  "TCO3years": 752.4,
                  "monthlyPriceAverage": 20.9,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 17,
            "continent": "europe",
            "country": "finland",
            "city": "hamina",
            "cityName": "Hamina",
            "countryName": "Finland",
            "latitude": 60.56972,
            "longitude": 27.19806,
            "isoCode": "FI",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/GCP-small.png"
          },
          {
            "provider": "onprem",
            "location": "onprem.onprem.onprem",
            "providerRegionCode": "onprem",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 143.88,
              "TCO3years": 5179.51,
              "monthlyPriceAverage": 143.88,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 4,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 95.16,
                  "TCO3years": 3425.59,
                  "monthlyPriceAverage": 95.16,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 48.72,
                  "TCO3years": 1753.92,
                  "monthlyPriceAverage": 48.72,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 18,
            "continent": "onprem",
            "country": "onprem",
            "city": "onprem",
            "cityName": "On Premise",
            "countryName": "On Premise",
            "latitude": null,
            "longitude": null,
            "isoCode": null,
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/privateDC-small.png"
          },
          {
            "provider": "ovh",
            "location": "europe.uk.london",
            "providerRegionCode": "UK1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 66.08,
              "TCO3years": 2378.95,
              "monthlyPriceAverage": 66.08,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 7,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 57.38,
                  "TCO3years": 2065.75,
                  "monthlyPriceAverage": 57.38,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 8.7,
                  "TCO3years": 313.2,
                  "monthlyPriceAverage": 8.7,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 19,
            "continent": "europe",
            "country": "uk",
            "city": "london",
            "cityName": "London",
            "countryName": "United Kingdom",
            "latitude": 51.50722,
            "longitude": -0.1275,
            "isoCode": "GB",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/OVH-small.png"
          },
          {
            "provider": "ovh",
            "location": "europe.germany.frankfurt",
            "providerRegionCode": "DE1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 66.08,
              "TCO3years": 2378.95,
              "monthlyPriceAverage": 66.08,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 7,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 57.38,
                  "TCO3years": 2065.75,
                  "monthlyPriceAverage": 57.38,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 8.7,
                  "TCO3years": 313.2,
                  "monthlyPriceAverage": 8.7,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 20,
            "continent": "europe",
            "country": "germany",
            "city": "frankfurt",
            "cityName": "Frankfurt",
            "countryName": "Germany",
            "latitude": 50.11361,
            "longitude": 8.67972,
            "isoCode": "DE",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/OVH-small.png"
          },
          {
            "provider": "ovh",
            "location": "europe.poland.warsaw",
            "providerRegionCode": "WAW1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 66.08,
              "TCO3years": 2378.95,
              "monthlyPriceAverage": 66.08,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 7,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 57.38,
                  "TCO3years": 2065.75,
                  "monthlyPriceAverage": 57.38,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 8.7,
                  "TCO3years": 313.2,
                  "monthlyPriceAverage": 8.7,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 21,
            "continent": "europe",
            "country": "poland",
            "city": "warsaw",
            "cityName": "Warsaw",
            "countryName": "Poland",
            "latitude": 52.233333,
            "longitude": 21.016667,
            "isoCode": "PL",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/OVH-small.png"
          },
          {
            "provider": "ovh",
            "location": "europe.france.gravelines",
            "providerRegionCode": "GRA1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 66.08,
              "TCO3years": 2378.95,
              "monthlyPriceAverage": 66.08,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 7,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 57.38,
                  "TCO3years": 2065.75,
                  "monthlyPriceAverage": 57.38,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 8.7,
                  "TCO3years": 313.2,
                  "monthlyPriceAverage": 8.7,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 22,
            "continent": "europe",
            "country": "france",
            "city": "gravelines",
            "cityName": "Gravelines",
            "countryName": "France",
            "latitude": 50.9858,
            "longitude": 2.1283,
            "isoCode": "FR",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/OVH-small.png"
          },
          {
            "provider": "ovh",
            "location": "europe.france.strasbourg",
            "providerRegionCode": "SBG1",
            "scenario": {
              "id": 0,
              "name": "Base scenario"
            },
            "warnings": [],
            "pricesSummary": {
              "upfrontYear1": 0,
              "upfrontYear2": 0,
              "upfrontYear3": 0,
              "monthlyPrice": 66.08,
              "TCO3years": 2378.95,
              "monthlyPriceAverage": 66.08,
              "currency": "USD"
            },
            "resourcesSummary": {
              "compute": {
                "resourceProperties": {
                  "cpu": 2,
                  "ram": 7,
                  "localNvme": 0
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 57.38,
                  "TCO3years": 2065.75,
                  "monthlyPriceAverage": 57.38,
                  "currency": null
                }
              },
              "blockstorage": {
                "resourceProperties": {
                  "size": 150
                },
                "resourceTotalPrices": {
                  "upfrontYear1": 0,
                  "upfrontYear2": 0,
                  "upfrontYear3": 0,
                  "monthlyPrice": 8.7,
                  "TCO3years": 313.2,
                  "monthlyPriceAverage": 8.7,
                  "currency": null
                }
              }
            },
            "scenarioName": "",
            "scenarioId": 0,
            "id": 23,
            "continent": "europe",
            "country": "france",
            "city": "strasbourg",
            "cityName": "Strasbourg",
            "countryName": "France",
            "latitude": 48.583333,
            "longitude": 7.745833,
            "isoCode": "FR",
            "display": [
              true,
              true,
              true
            ],
            "smallIcon": "../../assets/images/OVH-small.png"
          }
        ]
      }
    }
  }
}