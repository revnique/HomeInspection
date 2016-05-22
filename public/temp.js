
$scope.hi = {
    "templates": [
        {
            "templateId": 1,
            "title": "DTown's Template",
            "date": "4/14/2014",
            "time": "4:14 pm",
            "firstDetailName": "Inspections",
            "firstDetailCount": "33",
            "secondDetailName": "Categories",
            "secondDetailCount": "55",
            "chk": {
                "isDisabled": false,
                "id": "chk1",
                "label": "Template",
                "hideLabel": true,
                "useCircles": true,
                "isChecked": false
            },
            "categories": [
                {
                    "categoryId": 1,
                    "title": "Exterior",
                    "date": "5/14/2014",
                    "time": "5:14 pm",
                    "firstDetailName": "Items",
                    get firstDetailCount() {
                        return this.categoryItems.length;
                    },
                    "chk": {
                        "isDisabled": false,
                        "id": "chkCategories1",
                        "hideLabel": true,
                        "useCircles": true,
                        "isChecked": false
                    },
                    "categoryItems": [
                        {
                            "categoryItemId": 101,
                            "title": "Component Items",
                            "date": "05\/14\/2016",
                            "time": "11:38 pm",
                            "chk": {
                                "isDisabled": false,
                                "id": "chk102",
                                "hideLabel": true,
                                "useCircles": true,
                                "isChecked": false
                            },
                            "isComponentList": true,
                            "componentList": [
                                "Acceptable",
                                "Marginal",
                                "Unacceptable"
                            ],
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "categoryItemOptions": [
                                {
                                    "categoryItemOptionId": 103,
                                    "title": "Siding",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk104",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 105,
                                    "title": "Shingles",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk106",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 107,
                                    "title": "Veneer",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk108",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 109,
                                    "title": "Stucco\/EIFS",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk110",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 111,
                                    "title": "Trim Work",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk112",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 113,
                                    "title": "Primary Windows",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk114",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 115,
                                    "title": "Exterior Doors",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk116",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 117,
                                    "title": "Front Porch\/Steps",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk118",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 119,
                                    "title": "Side Porch\/Steps",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk120",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 121,
                                    "title": "Rear Porch\/Steps",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk122",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 123,
                                    "title": "Railings",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk124",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 125,
                                    "title": "Sidewalks",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk126",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 127,
                                    "title": "Driveway\/Carport",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk128",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 129,
                                    "title": "Attached Garage",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk130",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 131,
                                    "title": "Detached Garage",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk132",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 133,
                                    "title": "Garage Doors and Openers",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk134",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 135,
                                    "title": "Deck",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk136",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 137,
                                    "title": "Patio",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk138",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 139,
                                    "title": "Balcony",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk140",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 141,
                                    "title": "Retaining Wall",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk142",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                }
                            ]
                        },
                        {
                            "categoryItemId": 151,
                            "title": "Architectural Style",
                            "date": "05\/15\/2016",
                            "time": "12:17 am",
                            "chk": {
                                "isDisabled": false,
                                "id": "chk152",
                                "hideLabel": true,
                                "useCircles": true,
                                "isChecked": false
                            },
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "categoryItemOptions": [
                                {
                                    "categoryItemOptionId": 153,
                                    "title": "Ranch Colonial",
                                    "date": "05\/15\/2016",
                                    "time": "12:17 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk154",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 155,
                                    "title": "Split\/Bi-Level",
                                    "date": "05\/15\/2016",
                                    "time": "12:17 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk156",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 157,
                                    "title": "Bungalow",
                                    "date": "05\/15\/2016",
                                    "time": "12:17 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk158",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 159,
                                    "title": "Eclectic",
                                    "date": "05\/15\/2016",
                                    "time": "12:17 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk160",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 161,
                                    "title": "Other",
                                    "date": "05\/15\/2016",
                                    "time": "12:17 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk162",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                }
                            ]
                        },
                        {
                            "categoryItemId": 181,
                            "title": "Exterior Coverings",
                            "date": "05\/15\/2016",
                            "time": "12:23 am",
                            "chk": {
                                "isDisabled": false,
                                "id": "chk182",
                                "hideLabel": true,
                                "useCircles": true,
                                "isChecked": false
                            },
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "categoryItemOptions": [
                                {
                                    "categoryItemOptionId": 183,
                                    "title": "Wood Lap Siding",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk184",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 185,
                                    "title": "Aluminum Siding",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk186",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 187,
                                    "title": "Vinyl Siding",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk188",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 189,
                                    "title": "EIFS",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk190",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 191,
                                    "title": "Wood Drop Siding",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk192",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 193,
                                    "title": "Board & Batten Siding",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk194",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 195,
                                    "title": "Wood Shingles\/Shakes",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk196",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 197,
                                    "title": "Asbestos Cement Shingles",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk198",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 199,
                                    "title": "Brick Veneer",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk200",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 201,
                                    "title": "Stone Veneer",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk202",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 203,
                                    "title": "Stucco",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk204",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 205,
                                    "title": "Fiberboard Siding",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk206",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 207,
                                    "title": "Plywood Siding",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk208",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                }
                            ]
                        },
                        {
                            "categoryItemId": 226,
                            "title": "Window Types",
                            "date": "05\/15\/2016",
                            "time": "12:29 am",
                            "chk": {
                                "isDisabled": false,
                                "id": "chk227",
                                "hideLabel": true,
                                "useCircles": true,
                                "isChecked": false
                            },
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "categoryItemOptions": [
                                {
                                    "categoryItemOptionId": 228,
                                    "title": "Single\/Double-hung",
                                    "date": "05\/15\/2016",
                                    "time": "12:29 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk229",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 230,
                                    "title": "Sliding",
                                    "date": "05\/15\/2016",
                                    "time": "12:29 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk231",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 232,
                                    "title": "Casement",
                                    "date": "05\/15\/2016",
                                    "time": "12:29 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk233",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 234,
                                    "title": "Awning\/Hopper",
                                    "date": "05\/15\/2016",
                                    "time": "12:29 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk235",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 236,
                                    "title": "Fixed",
                                    "date": "05\/15\/2016",
                                    "time": "12:29 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk237",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 238,
                                    "title": "w\/Storm windows",
                                    "date": "05\/15\/2016",
                                    "time": "12:29 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk239",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                }
                            ]
                        },
                        {
                            "categoryItemId": 251,
                            "title": "Foundation",
                            "date": "05\/15\/2016",
                            "time": "12:39 am",
                            "chk": {
                                "isDisabled": false,
                                "id": "chk252",
                                "hideLabel": true,
                                "useCircles": true,
                                "isChecked": false
                            },
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "categoryItemOptions": [
                              {
                                  "categoryItemOptionId": 253,
                                  "title": "Grading around Foundation",
                                  "date": "05\/15\/2016",
                                  "time": "12:39 am",
                                  "chk": {
                                      "isDisabled": false,
                                      "id": "chk254",
                                      "hideLabel": true,
                                      "useCircles": true,
                                      "isChecked": false
                                  },
                                  "componentItemValue": null,
                                  "isSelected": null,
                                  "comment": null,
                                  "value": null
                              },
                              {
                                  "categoryItemOptionId": 255,
                                  "title": "Wood to Ground Distance",
                                  "date": "05\/15\/2016",
                                  "time": "12:39 am",
                                  "chk": {
                                      "isDisabled": false,
                                      "id": "chk256",
                                      "hideLabel": true,
                                      "useCircles": true,
                                      "isChecked": false
                                  },
                                  "componentItemValue": null,
                                  "isSelected": null,
                                  "comment": null,
                                  "value": null
                              }
                            ]
                        },
                        {
                            "categoryItemId": 261,
                            "title": "Storm Drainage",
                            "date": "05\/15\/2016",
                            "time": "12:44 am",
                            "chk": {
                                "isDisabled": false,
                                "id": "chk262",
                                "hideLabel": true,
                                "useCircles": true,
                                "isChecked": false
                            },
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "categoryItemOptions": [
                              {
                                  "categoryItemOptionId": 263,
                                  "title": "Below Ground Drainage",
                                  "date": "05\/15\/2016",
                                  "time": "12:44 am",
                                  "chk": {
                                      "isDisabled": false,
                                      "id": "chk264",
                                      "hideLabel": true,
                                      "useCircles": true,
                                      "isChecked": false
                                  },
                                  "componentItemValue": null,
                                  "isSelected": null,
                                  "comment": null,
                                  "value": null
                              },
                              {
                                  "categoryItemOptionId": 265,
                                  "title": "Above Ground Drainage",
                                  "date": "05\/15\/2016",
                                  "time": "12:44 am",
                                  "chk": {
                                      "isDisabled": false,
                                      "id": "chk266",
                                      "hideLabel": true,
                                      "useCircles": true,
                                      "isChecked": false
                                  },
                                  "componentItemValue": null,
                                  "isSelected": null,
                                  "comment": null,
                                  "value": null
                              }
                            ]
                        },
                        {
                            "categoryItemId": 275,
                            "title": "General Comments",
                            "date": "05\/15\/2016",
                            "time": "12:50 am",
                            "chk": {
                                "isDisabled": false,
                                "id": "chk276",
                                "hideLabel": true,
                                "useCircles": true,
                                "isChecked": false
                            },
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "categoryItemOptions": [
                              {
                                  "categoryItemOptionId": 277,
                                  "title": "Repair all Loose or Cracked Caulking",
                                  "date": "05\/15\/2016",
                                  "time": "12:50 am",
                                  "chk": {
                                      "isDisabled": false,
                                      "id": "chk278",
                                      "hideLabel": true,
                                      "useCircles": true,
                                      "isChecked": false
                                  },
                                  "componentItemValue": null,
                                  "isSelected": null,
                                  "comment": null,
                                  "value": null
                              },
                              {
                                  "categoryItemOptionId": 279,
                                  "title": "Weep Holes are not in all Storm Windows\/Brick Veneer",
                                  "date": "05\/15\/2016",
                                  "time": "12:50 am",
                                  "chk": {
                                      "isDisabled": false,
                                      "id": "chk280",
                                      "hideLabel": true,
                                      "useCircles": true,
                                      "isChecked": false
                                  },
                                  "componentItemValue": null,
                                  "isSelected": null,
                                  "comment": null,
                                  "value": null
                              },
                              {
                                  "categoryItemOptionId": 281,
                                  "title": "Repair all Damaged Exterior Covering\/Trim",
                                  "date": "05\/15\/2016",
                                  "time": "12:50 am",
                                  "chk": {
                                      "isDisabled": false,
                                      "id": "chk282",
                                      "hideLabel": true,
                                      "useCircles": true,
                                      "isChecked": false
                                  },
                                  "componentItemValue": null,
                                  "isSelected": null,
                                  "comment": null,
                                  "value": null
                              },
                              {
                                  "categoryItemOptionId": 283,
                                  "title": "Replace all Loose Glazing Compound",
                                  "date": "05\/15\/2016",
                                  "time": "12:50 am",
                                  "chk": {
                                      "isDisabled": false,
                                      "id": "chk284",
                                      "hideLabel": true,
                                      "useCircles": true,
                                      "isChecked": false
                                  },
                                  "componentItemValue": null,
                                  "isSelected": null,
                                  "comment": null,
                                  "value": null
                              },
                              {
                                  "categoryItemOptionId": 285,
                                  "title": "Cut back Vegetation away from Buildings",
                                  "date": "05\/15\/2016",
                                  "time": "12:50 am",
                                  "chk": {
                                      "isDisabled": false,
                                      "id": "chk286",
                                      "hideLabel": true,
                                      "useCircles": true,
                                      "isChecked": false
                                  },
                                  "componentItemValue": null,
                                  "isSelected": null,
                                  "comment": null,
                                  "value": null
                              },
                              {
                                  "categoryItemOptionId": 287,
                                  "title": "Re-point all Loose\/Cracked Mortar",
                                  "date": "05\/15\/2016",
                                  "time": "12:50 am",
                                  "chk": {
                                      "isDisabled": false,
                                      "id": "chk288",
                                      "hideLabel": true,
                                      "useCircles": true,
                                      "isChecked": false
                                  },
                                  "componentItemValue": null,
                                  "isSelected": null,
                                  "comment": null,
                                  "value": null
                              },
                              {
                                  "categoryItemOptionId": 289,
                                  "title": "Weatherproof all Openings\/Penetrations",
                                  "date": "05\/15\/2016",
                                  "time": "12:50 am",
                                  "chk": {
                                      "isDisabled": false,
                                      "id": "chk290",
                                      "hideLabel": true,
                                      "useCircles": true,
                                      "isChecked": false
                                  },
                                  "componentItemValue": null,
                                  "isSelected": null,
                                  "comment": null,
                                  "value": null
                              },
                              {
                                  "categoryItemOptionId": 291,
                                  "title": "Replace all Damaged Door Weatherstripping",
                                  "date": "05\/15\/2016",
                                  "time": "12:50 am",
                                  "chk": {
                                      "isDisabled": false,
                                      "id": "chk292",
                                      "hideLabel": true,
                                      "useCircles": true,
                                      "isChecked": false
                                  },
                                  "componentItemValue": null,
                                  "isSelected": null,
                                  "comment": null,
                                  "value": null
                              },
                              {
                                  "categoryItemOptionId": 293,
                                  "title": "Paint\/Stain all exposed Wood",
                                  "date": "05\/15\/2016",
                                  "time": "12:50 am",
                                  "chk": {
                                      "isDisabled": false,
                                      "id": "chk294",
                                      "hideLabel": true,
                                      "useCircles": true,
                                      "isChecked": false
                                  },
                                  "componentItemValue": null,
                                  "isSelected": null,
                                  "comment": null,
                                  "value": null
                              },
                              {
                                  "categoryItemOptionId": 295,
                                  "title": "Remove Rotted Wood\/Firewood around Property or in Garage",
                                  "date": "05\/15\/2016",
                                  "time": "12:50 am",
                                  "chk": {
                                      "isDisabled": false,
                                      "id": "chk296",
                                      "hideLabel": true,
                                      "useCircles": true,
                                      "isChecked": false
                                  },
                                  "componentItemValue": null,
                                  "isSelected": null,
                                  "comment": null,
                                  "value": null
                              },
                              {
                                  "categoryItemOptionId": 297,
                                  "title": "Remove Insect\/Vermin Nests",
                                  "date": "05\/15\/2016",
                                  "time": "12:50 am",
                                  "chk": {
                                      "isDisabled": false,
                                      "id": "chk298",
                                      "hideLabel": true,
                                      "useCircles": true,
                                      "isChecked": false
                                  },
                                  "componentItemValue": null,
                                  "isSelected": null,
                                  "comment": null,
                                  "value": null
                              },
                              {
                                  "categoryItemOptionId": 299,
                                  "title": "Regrade to Slope Soil\/Slabs away from Foundation",
                                  "date": "05\/15\/2016",
                                  "time": "12:50 am",
                                  "chk": {
                                      "isDisabled": false,
                                      "id": "chk300",
                                      "hideLabel": true,
                                      "useCircles": true,
                                      "isChecked": false
                                  },
                                  "componentItemValue": null,
                                  "isSelected": null,
                                  "comment": null,
                                  "value": null
                              }
                            ]
                        }
                    ]

                },
                {
                    "categoryId": 2,
                    "title": "Roof and Attic",
                    "date": "6/5/2008",
                    "time": "6:05 pm",
                    "firstDetailName": "Items",
                    get firstDetailCount() {
                        return this.categoryItems.length;
                    },
                    "chk": {
                        "isDisabled": false,
                        "id": "chkCategories2",
                        "hideLabel": true,
                        "useCircles": true,
                        "isChecked": false
                    },
                    "categoryItems": [
                        { "categoryItemId": 301, "title": "Component Items", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk302", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "isComponentList": true,
                            "componentList": [
                                "Acceptable",
                                "Marginal",
                                "Unacceptable"
                            ],
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            }, "categoryItemOptions": [{ "categoryItemOptionId": 303, "title": "Roofing Material", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk304", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 305, "title": "Flashing", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk306", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 307, "title": "Masonry Chimneys", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk308", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 309, "title": "Metal Chimneys/Enclosures", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk310", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 311, "title": "Roof Vents", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk312", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 313, "title": "Powered Roof Vent", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk314", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 315, "title": "Whole House Fan", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk316", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 317, "title": "Soffit Vents", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk318", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 319, "title": "Soffits and Fascias", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk320", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 321, "title": "Gutters", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk322", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 323, "title": "Downspouts", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk324", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 325, "title": "Wood Decking", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk326", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 327, "title": "Plywood Decking", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk328", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 329, "title": "OSB Decking", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk330", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 331, "title": "Rafters", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk332", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 333, "title": "Trusses", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk334", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 335, "title": "Insulation", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk336", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 337, "title": "Ventilation", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk338", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 339, "title": "Skylights", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk340", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 341, "title": "Garage Roofing", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk342", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 343, "title": "Garage Roof Deck/Framing", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk344", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 356, "title": "Type",
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            }, "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk357", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 358, "title": "Gable", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk359", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 360, "title": "Hip", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk361", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 362, "title": "Shed", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk363", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 364, "title": "Gambrel", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk365", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 366, "title": "Mansard", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk367", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 368, "title": "Salt Box", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk369", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 370, "title": "Flat", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk371", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 372, "title": "w/Shed Dormers", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk373", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 374, "title": "w/Gable Dormers", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk375", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 376, "title": "w/Hip Dormers", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk377", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 386, "title": "Roofing Material",
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            }, "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk387", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 388, "title": "Asphalt Shingles", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk389", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 390, "title": "Fiberglass Asphalt Shingles", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk391", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 392, "title": "Slate Shingles", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk393", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 394, "title": "Clay Tiles", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk395", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 396, "title": "Wood Shingles/Shakes", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk397", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 398, "title": "Built-up Roofing", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk399", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 400, "title": "Asphalt Rolls", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk401", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 402, "title": "Metal", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk403", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 404, "title": "Single Ply", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk405", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 406, "title": "Asphalt Interlocking Shingles", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk407", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 408, "title": "Asbestos/Cement Shingles", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk409", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 410, "title": "Cement Tiles", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk411", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 412, "title": "EPDM", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk413", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 414, "title": "No. of Layers", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk415", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 416, "title": "Pitch in 12\" (approx.)", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk417", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 418, "title": "Color", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk419", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 420, "title": "Observed from Ground", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk421", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 422, "title": "Observed from Ladder at Eaves", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk423", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 424, "title": "Observed from Window or Balcony", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk425", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 426, "title": "Observed from Roof", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk427", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 428, "title": "Observed from Attic", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk429", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 430, "title": "Observed from Ground", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk431", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 446, "title": "Condition",
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            }, "date": "05/15/2016", "time": "10:04 am", "chk": { "isDisabled": false, "id": "chk447", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 448, "title": "Buckling or Curling", "date": "05/15/2016", "time": "10:04 am", "chk": { "isDisabled": false, "id": "chk449", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 450, "title": "Cracked or Missing Shingles", "date": "05/15/2016", "time": "10:04 am", "chk": { "isDisabled": false, "id": "chk451", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 452, "title": "Erosion", "date": "05/15/2016", "time": "10:04 am", "chk": { "isDisabled": false, "id": "chk453", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 454, "title": "Ponding", "date": "05/15/2016", "time": "10:04 am", "chk": { "isDisabled": false, "id": "chk455", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 456, "title": "Moss", "date": "05/15/2016", "time": "10:04 am", "chk": { "isDisabled": false, "id": "chk457", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 458, "title": "Evidence of Prior Leakage or Repair", "date": "05/15/2016", "time": "10:04 am", "chk": { "isDisabled": false, "id": "chk459", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 460, "title": "Mold/Mildew on Attic Decking/Framing", "date": "05/15/2016", "time": "10:04 am", "chk": { "isDisabled": false, "id": "chk461", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 462, "title": "Algae", "date": "05/15/2016", "time": "10:04 am", "chk": { "isDisabled": false, "id": "chk463", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 476, "title": "Attic Insulation",
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            }, "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk477", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 478, "title": "Thickness: (approx.)", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk479", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 480, "title": "Batts or Blankets", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk481", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 482, "title": "Blown-in", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk483", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 484, "title": "Boards", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk485", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 486, "title": "w/Vapor Barrier", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk487", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 488, "title": "Glass/Mineral Fiber", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk489", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 490, "title": "Cellulose/Wood Fiber", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk491", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 492, "title": "Mineral Fills", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk493", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 494, "title": "Insulating Foams", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk495", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 496, "title": "Insulation Not Always on \"House Side\"", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk497", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 498, "title": "Pull Back Insulation where Touching Roof Deck", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk499", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 511, "title": "Building Exhausts",
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            }, "date": "05/15/2016", "time": "10:12 am", "chk": { "isDisabled": false, "id": "chk512", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 513, "title": "Vented to Outside", "date": "05/15/2016", "time": "10:12 am", "chk": { "isDisabled": false, "id": "chk514", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 515, "title": "Discharge into Roof/Soffit Vents", "date": "05/15/2016", "time": "10:12 am", "chk": { "isDisabled": false, "id": "chk516", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 517, "title": "Discharge into Attic", "date": "05/15/2016", "time": "10:12 am", "chk": { "isDisabled": false, "id": "chk518", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 527, "title": "Gutters/Downspouts",
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            }, "date": "05/15/2016", "time": "10:13 am", "chk": { "isDisabled": false, "id": "chk528", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 529, "title": "Aluminum", "date": "05/15/2016", "time": "10:13 am", "chk": { "isDisabled": false, "id": "chk530", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 531, "title": "Galvanized", "date": "05/15/2016", "time": "10:13 am", "chk": { "isDisabled": false, "id": "chk532", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 533, "title": "Copper", "date": "05/15/2016", "time": "10:13 am", "chk": { "isDisabled": false, "id": "chk534", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 535, "title": "Vinyl", "date": "05/15/2016", "time": "10:13 am", "chk": { "isDisabled": false, "id": "chk536", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 537, "title": "Wood Box", "date": "05/15/2016", "time": "10:13 am", "chk": { "isDisabled": false, "id": "chk538", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        }
                    ]
                },
                {
                    "categoryId": 3,
                    "title": "Foundation, Basement and Structural",
                    "date": "7/15/2011",
                    "time": "7:35 am",
                    "firstDetailName": "Items",
                    get firstDetailCount() {
                        return this.categoryItems.length;
                    },
                    "chk": {
                        "isDisabled": false,
                        "id": "chkCategories3",
                        "hideLabel": true,
                        "useCircles": true,
                        "isChecked": false
                    },
                    "categoryItems": [
                        {
                            "categoryItemId": 551, "title": "Component Items",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk552", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 553, "title": "Foundation Walls", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk554", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 555, "title": "Sill Anchors", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk556", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 557, "title": "Floor Slab", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk558", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 559, "title": "Chimney Foundations", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk560", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 561, "title": "Wood Girders", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk562", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 563, "title": "Steel Girders", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk564", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 565, "title": "Floor Joists", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk566", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 567, "title": "Wood Posts", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk568", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 569, "title": "Steel Columns", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk570", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 571, "title": "Masonry Columns", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk572", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 573, "title": "Wood Sub Floor", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk574", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 575, "title": "Plywood Sub Floor", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk576", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 577, "title": "OSB Sub Floor", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk578", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 579, "title": "Cross Bridging/Blocking", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk580", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 581, "title": "Basement Ventilation", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk582", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 583, "title": "Crawl Space Ventilation", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk584", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 585, "title": "Crawl Space Vapor Barrier", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk586", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 587, "title": "Sump Pump", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk588", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 596, "title": "Type of Structure",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "5:37 pm", "chk": { "isDisabled": false, "id": "chk597", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 598, "title": "Frame", "date": "05/15/2016", "time": "5:37 pm", "chk": { "isDisabled": false, "id": "chk599", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 600, "title": "Masonry", "date": "05/15/2016", "time": "5:37 pm", "chk": { "isDisabled": false, "id": "chk601", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 602, "title": "Balloon Frame", "date": "05/15/2016", "time": "5:37 pm", "chk": { "isDisabled": false, "id": "chk603", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 611, "title": "Foundation Type",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "5:39 pm", "chk": { "isDisabled": false, "id": "chk612", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 613, "title": "Slab", "date": "05/15/2016", "time": "5:39 pm", "chk": { "isDisabled": false, "id": "chk614", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 615, "title": "Basement", "date": "05/15/2016", "time": "5:39 pm", "chk": { "isDisabled": false, "id": "chk616", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 617, "title": "Posts/Piers", "date": "05/15/2016", "time": "5:39 pm", "chk": { "isDisabled": false, "id": "chk618", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 619, "title": "Crawl Space", "date": "05/15/2016", "time": "5:39 pm", "chk": { "isDisabled": false, "id": "chk620", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 621, "title": "Entered Crawl Space", "date": "05/15/2016", "time": "5:39 pm", "chk": { "isDisabled": false, "id": "chk622", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 627, "title": "Foundation Walls",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk628", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 629, "title": "Block", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk630", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 631, "title": "Concrete", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk632", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 633, "title": "Brick", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk634", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 635, "title": "Clay Tile", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk636", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 637, "title": "Stone", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk638", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 639, "title": "Horizontal Cracks", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk640", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 641, "title": "Vertical Cracks", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk642", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 643, "title": "Step Cracks", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk644", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 645, "title": "Open Wall Penetrations", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk646", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 647, "title": "Loose Mortar", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk648", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 649, "title": "Excessive Movement", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk650", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 651, "title": "Mold/Mildew", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk652", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 659, "title": "Moisture/Staining",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "5:44 pm", "chk": { "isDisabled": false, "id": "chk660", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 661, "title": "Staining On Lower Portion of Walls Only", "date": "05/15/2016", "time": "5:44 pm", "chk": { "isDisabled": false, "id": "chk662", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 663, "title": "Moderate Staining", "date": "05/15/2016", "time": "5:44 pm", "chk": { "isDisabled": false, "id": "chk664", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 665, "title": "Excessive Staining", "date": "05/15/2016", "time": "5:44 pm", "chk": { "isDisabled": false, "id": "chk666", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 667, "title": "Walls Dry at this Time", "date": "05/15/2016", "time": "5:44 pm", "chk": { "isDisabled": false, "id": "chk668", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 669, "title": "Moderate Dampness in Walls", "date": "05/15/2016", "time": "5:44 pm", "chk": { "isDisabled": false, "id": "chk670", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 671, "title": "Excessive Dampness in Walls", "date": "05/15/2016", "time": "5:44 pm", "chk": { "isDisabled": false, "id": "chk672", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 673, "title": "Evidence of Prior Water Penetration/Seepage", "date": "05/15/2016", "time": "5:44 pm", "chk": { "isDisabled": false, "id": "chk674", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 675, "title": "Active Water Penetration/Seepage", "date": "05/15/2016", "time": "5:44 pm", "chk": { "isDisabled": false, "id": "chk676", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 687, "title": "Floor Framing",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "5:47 pm", "chk": { "isDisabled": false, "id": "chk688", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 689, "title": "Floor Joists Size: _x_on_ centers", "date": "05/15/2016", "time": "5:47 pm", "chk": { "isDisabled": false, "id": "chk690", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 691, "title": "Excessive Deflection", "date": "05/15/2016", "time": "5:47 pm", "chk": { "isDisabled": false, "id": "chk692", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 693, "title": "Plumbing/Wiring Cut through Lower Third of Beams", "date": "05/15/2016", "time": "5:47 pm", "chk": { "isDisabled": false, "id": "chk694", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 695, "title": "Splitting", "date": "05/15/2016", "time": "5:47 pm", "chk": { "isDisabled": false, "id": "chk696", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 697, "title": "Mold/Fungus", "date": "05/15/2016", "time": "5:47 pm", "chk": { "isDisabled": false, "id": "chk698", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 699, "title": "Rot/Insect Damage", "date": "05/15/2016", "time": "5:47 pm", "chk": { "isDisabled": false, "id": "chk700", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 701, "title": "Excessive Dampness", "date": "05/15/2016", "time": "5:47 pm", "chk": { "isDisabled": false, "id": "chk702", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 703, "title": "Lack of Fire-stops", "date": "05/15/2016", "time": "5:47 pm", "chk": { "isDisabled": false, "id": "chk704", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        }
                    ]
                },
                {
                    "categoryId": 4,
                    "title": "Interior",
                    "date": "7/15/2011",
                    "time": "7:35 am",
                    "firstDetailName": "Items",
                    get firstDetailCount() {
                        return this.categoryItems.length;
                    },
                    "chk": {
                        "isDisabled": false,
                        "id": "chkCategories4",
                        "hideLabel": true,
                        "useCircles": true,
                        "isChecked": false
                    },
                    "categoryItems": [
                        {
                            "categoryItemId": 711, "title": "Component Items",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk712", "hideLabel": true, "useCircles": true, "isChecked": false }, "isComponentList": true, "componentList": ["Acceptable", "Marginal", "Unsatisfactory"], "categoryItemOptions": [{ "categoryItemOptionId": 713, "title": "Walls", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk714", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 715, "title": "Ceilings", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk716", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 717, "title": "Windows", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk718", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 719, "title": "Floors", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk720", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 721, "title": "Stairways", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk722", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 723, "title": "Handrails", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk724", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 725, "title": "Balcony", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk726", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 727, "title": "Interior Doors", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk728", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 729, "title": "Closet Doors", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk730", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 731, "title": "Bathroom Vanities", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk732", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 733, "title": "Bathroom Floor Coverings", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk734", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 735, "title": "Tub/Shower Surrounds", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk736", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 737, "title": "Shower Stalls", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk738", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 739, "title": "Bathroom Fans", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk740", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 741, "title": "Kitchen Cabinets", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk742", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 743, "title": "Kitchen Countertops", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk744", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 745, "title": "Kitchen Floor Covering", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk746", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 747, "title": "Kitchen Fan", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk748", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 749, "title": "Fireplace", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk750", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 751, "title": "Woodburner", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk752", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 753, "title": "Dryer Vent", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk754", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 771, "title": "Wall Coverings",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "5:55 pm", "chk": { "isDisabled": false, "id": "chk772", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 773, "title": "Drywall/Plaster", "date": "05/15/2016", "time": "5:55 pm", "chk": { "isDisabled": false, "id": "chk774", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 775, "title": "Paneling", "date": "05/15/2016", "time": "5:55 pm", "chk": { "isDisabled": false, "id": "chk776", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 777, "title": "Brick/Stone", "date": "05/15/2016", "time": "5:55 pm", "chk": { "isDisabled": false, "id": "chk778", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 779, "title": "Stucco", "date": "05/15/2016", "time": "5:55 pm", "chk": { "isDisabled": false, "id": "chk780", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 787, "title": "Floors",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:11 pm", "chk": { "isDisabled": false, "id": "chk788", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 789, "title": "Hardwood", "date": "05/15/2016", "time": "6:11 pm", "chk": { "isDisabled": false, "id": "chk790", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 791, "title": "Plywood", "date": "05/15/2016", "time": "6:11 pm", "chk": { "isDisabled": false, "id": "chk792", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 793, "title": "Concrete", "date": "05/15/2016", "time": "6:11 pm", "chk": { "isDisabled": false, "id": "chk794", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 795, "title": "Waferboard/OSB", "date": "05/15/2016", "time": "6:11 pm", "chk": { "isDisabled": false, "id": "chk796", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 797, "title": "Wood Laminate", "date": "05/15/2016", "time": "6:11 pm", "chk": { "isDisabled": false, "id": "chk798", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 800, "title": "Windows",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:00 pm", "chk": { "isDisabled": false, "id": "chk801", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 802, "title": "Wood", "date": "05/15/2016", "time": "6:00 pm", "chk": { "isDisabled": false, "id": "chk803", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 804, "title": "Metal", "date": "05/15/2016", "time": "6:00 pm", "chk": { "isDisabled": false, "id": "chk805", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 806, "title": "Vinyl", "date": "05/15/2016", "time": "6:00 pm", "chk": { "isDisabled": false, "id": "chk807", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 808, "title": "Double/Triple Glazing", "date": "05/15/2016", "time": "6:00 pm", "chk": { "isDisabled": false, "id": "chk809", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 810, "title": "Air/Gas Filled", "date": "05/15/2016", "time": "6:00 pm", "chk": { "isDisabled": false, "id": "chk811", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 815, "title": "Misc",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:02 pm", "chk": { "isDisabled": false, "id": "chk816", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 817, "title": "No. of Floor Levels:_", "date": "05/15/2016", "time": "6:02 pm", "chk": { "isDisabled": false, "id": "chk818", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 819, "title": "Working Smoke Detectors are Not Installed on Each Level and Each Bedroom", "date": "05/15/2016", "time": "6:02 pm", "chk": { "isDisabled": false, "id": "chk820", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 823, "title": "Bathroom Fans",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:04 pm", "chk": { "isDisabled": false, "id": "chk824", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 825, "title": "Vent to Outside", "date": "05/15/2016", "time": "6:04 pm", "chk": { "isDisabled": false, "id": "chk826", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 827, "title": "Vent to Inside", "date": "05/15/2016", "time": "6:04 pm", "chk": { "isDisabled": false, "id": "chk828", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 829, "title": "Vent to Attic", "date": "05/15/2016", "time": "6:04 pm", "chk": { "isDisabled": false, "id": "chk830", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 835, "title": "Kitchen Fan",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:05 pm", "chk": { "isDisabled": false, "id": "chk836", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 837, "title": "Vent to Outside", "date": "05/15/2016", "time": "6:05 pm", "chk": { "isDisabled": false, "id": "chk838", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 839, "title": "Vent to Inside", "date": "05/15/2016", "time": "6:05 pm", "chk": { "isDisabled": false, "id": "chk840", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 841, "title": "Vent to Attic", "date": "05/15/2016", "time": "6:05 pm", "chk": { "isDisabled": false, "id": "chk842", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 850, "title": "Separation Wall",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:07 pm", "chk": { "isDisabled": false, "id": "chk851", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 852, "title": "Door to Attached Garage/Party may not be 1 HR. Fire Resistant", "date": "05/15/2016", "time": "6:07 pm", "chk": { "isDisabled": false, "id": "chk853", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 854, "title": "Acceptable", "date": "05/15/2016", "time": "6:07 pm", "chk": { "isDisabled": false, "id": "chk855", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 856, "title": "Walls/Ceiling of Attached Garage/Party may not be 1 HR. Fire Resistant", "date": "05/15/2016", "time": "6:07 pm", "chk": { "isDisabled": false, "id": "chk857", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 858, "title": "No Separation Wall above Attached Garage/Party", "date": "05/15/2016", "time": "6:07 pm", "chk": { "isDisabled": false, "id": "chk859", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        }
                    ]
                },
                {
                    "categoryId": 5,
                    "title": "Central Heating and Cooling Systems",
                    "date": "7/15/2011",
                    "time": "7:35 am",
                    "firstDetailName": "Items",
                    get firstDetailCount() {
                        return this.categoryItems.length;
                    },
                    "chk": {
                        "isDisabled": false,
                        "id": "chkCategories4",
                        "hideLabel": true,
                        "useCircles": true,
                        "isChecked": false
                    },
                    "categoryItems": [
                        {
                            "categoryItemId": 877, "title": "Component Items",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk878", "hideLabel": true, "useCircles": true, "isChecked": false }, "isComponentList": true, "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"], "categoryItemOptions": [{ "categoryItemOptionId": 879, "title": "Controls", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk880", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 881, "title": "Burner", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk882", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 883, "title": "Flue and Chimney", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk884", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 885, "title": "Pipe/Ductwork Insulation", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk886", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 887, "title": "Fresh Air Vents", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk888", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 889, "title": "Boiler *WBS (Water Based System)", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk890", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 891, "title": "Boiler Water Drain *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk892", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 893, "title": "Water Fill/Level Control *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk894", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 895, "title": "Safety Relief Valve *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk896", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 897, "title": "Expansion Tank *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk898", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 899, "title": "Air Vents *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk900", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 901, "title": "Circulating Pump *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk902", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 903, "title": "Supply/Return Piping *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk904", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 905, "title": "Radiators *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk906", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 907, "title": "Fin Tube/Baseboard *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk908", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 909, "title": "Furnace *ABS (Air Based System)", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk910", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 911, "title": "Heat Pump *ABS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk912", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 913, "title": "Blower and Motor *ABS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk914", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 915, "title": "Condensate Drain *ABS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk916", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 917, "title": "Air Filter *ABS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk918", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 919, "title": "Ductwork *ABS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk920", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 921, "title": "Supply Registers/Diffusers *ABS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk922", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 923, "title": "Return Grilles *ABS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk924", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 925, "title": "Outdoor A/C or Heat Pump *ABS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk926", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 927, "title": "Heating Energy Source",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:26 pm", "chk": { "isDisabled": false, "id": "chk928", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 929, "title": "Gas", "date": "05/15/2016", "time": "6:26 pm", "chk": { "isDisabled": false, "id": "chk930", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 931, "title": "Electric", "date": "05/15/2016", "time": "6:26 pm", "chk": { "isDisabled": false, "id": "chk932", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 933, "title": "Fuel Oil", "date": "05/15/2016", "time": "6:26 pm", "chk": { "isDisabled": false, "id": "chk934", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 935, "title": "LP Gas", "date": "05/15/2016", "time": "6:26 pm", "chk": { "isDisabled": false, "id": "chk936", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 944, "title": "Heating Equipment",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk945", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 946, "title": "Forced Air Furnace", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk947", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 948, "title": "Heat Pump", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk949", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 950, "title": "Gravity Furnace", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk951", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 952, "title": "w/Humidifier", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk953", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 954, "title": "Steam Boiler", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk955", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 956, "title": "Water Boiler", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk957", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 958, "title": "w/Standing Pilot", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk959", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 960, "title": "w/Heat Saver Flue Damper", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk961", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 962, "title": "Manufacturer:_", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk963", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 964, "title": "Capacity:_ (approx.)", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk965", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 966, "title": "Approximate Age:_", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk967", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 975, "title": "Cooling Equipment",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:31 pm", "chk": { "isDisabled": false, "id": "chk976", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 977, "title": "None", "date": "05/15/2016", "time": "6:31 pm", "chk": { "isDisabled": false, "id": "chk978", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 979, "title": "Direct Expansion Cooling", "date": "05/15/2016", "time": "6:31 pm", "chk": { "isDisabled": false, "id": "chk980", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 981, "title": "Heat Pump", "date": "05/15/2016", "time": "6:31 pm", "chk": { "isDisabled": false, "id": "chk982", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 983, "title": "Gas Absorption Chiller", "date": "05/15/2016", "time": "6:31 pm", "chk": { "isDisabled": false, "id": "chk984", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 985, "title": "Manufacturer:_", "date": "05/15/2016", "time": "6:31 pm", "chk": { "isDisabled": false, "id": "chk986", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 987, "title": "Capacity:_ (approx.)", "date": "05/15/2016", "time": "6:31 pm", "chk": { "isDisabled": false, "id": "chk988", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 989, "title": "Approximate Age:_", "date": "05/15/2016", "time": "6:31 pm", "chk": { "isDisabled": false, "id": "chk990", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 995, "title": "Heating/Cooling Distribution",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk996", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 997, "title": "Steel Ductwork", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk998", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 999, "title": "Plastic Ductwork", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1000", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1001, "title": "Cement/Asbestos Ductwork", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1002", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1003, "title": "Registers", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1004", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1005, "title": "Fin Tube/Baseboard", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1006", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1007, "title": "Water Circulation", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1008", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1009, "title": "Radiators", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1010", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1011, "title": "Steam/Condensate Piping", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1012", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1013, "title": "One Pipe Steam System", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1014", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1015, "title": "Zone Valves/Dampers", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1016", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1017, "title": "\"Open Return\" System", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1018", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1021, "title": "Presence of Heating/Cooling Source in each Habitable Room",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:34 pm", "chk": { "isDisabled": false, "id": "chk1022", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 1023, "title": "Yes", "date": "05/15/2016", "time": "6:34 pm", "chk": { "isDisabled": false, "id": "chk1024", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        }
                    ]
                },
                {
                    "categoryId": 6,
                    "title": "Plumbing System",
                    "date": "7/15/2011",
                    "time": "7:35 am",
                    "firstDetailName": "Items",
                    get firstDetailCount() {
                        return this.categoryItems.length;
                    },
                    "chk": {
                        "isDisabled": false,
                        "id": "chkCategories4",
                        "hideLabel": true,
                        "useCircles": true,
                        "isChecked": false
                    },
                    "categoryItems": [
                        {
                            "categoryItemId": 1027, "title": "Component Items",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1028", "hideLabel": true, "useCircles": true, "isChecked": false }, "isComponentList": true, "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"], "categoryItemOptions": [{ "categoryItemOptionId": 1029, "title": "Interior Water Piping", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1030", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1031, "title": "BFP/Vacuum Breakers", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1032", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1033, "title": "Piping Insulation", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1034", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1035, "title": "Interior DWV Piping", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1036", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1037, "title": "Interior Gas Piping", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1038", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1039, "title": "Interior CSST Gas Lines", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1040", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1041, "title": "Water Heater", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1042", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1043, "title": "w/Safety Relief Valve", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1044", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1045, "title": "Water Heater Flue", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1046", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1047, "title": "Shut-off Valves", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1048", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1049, "title": "Laundry Tub", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1050", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1051, "title": "Floor Drains", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1052", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1053, "title": "Clean-outs", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1054", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1055, "title": "Bathroom Faucets/Fixtures", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1056", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1057, "title": "Tub and Shower Fixtures", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1058", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1059, "title": "Water Closets", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1060", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1061, "title": "Bidet", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1062", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1063, "title": "Kitchen Faucet", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1064", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1065, "title": "Garbage Disposal", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1066", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1067, "title": "Bar Sink", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1068", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1069, "title": "Sanitary Sump Pump", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1070", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1071, "title": "Frost Proof Hose Bibs", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1072", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1077, "title": "Water Supply",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:46 pm", "chk": { "isDisabled": false, "id": "chk1078", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 1079, "title": "Municipal", "date": "05/15/2016", "time": "6:46 pm", "chk": { "isDisabled": false, "id": "chk1080", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1081, "title": "Well", "date": "05/15/2016", "time": "6:46 pm", "chk": { "isDisabled": false, "id": "chk1082", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1083, "title": "Private", "date": "05/15/2016", "time": "6:46 pm", "chk": { "isDisabled": false, "id": "chk1084", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1085, "title": "w/Water Softener", "date": "05/15/2016", "time": "6:46 pm", "chk": { "isDisabled": false, "id": "chk1086", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1087, "title": "w/Pressure Regulator", "date": "05/15/2016", "time": "6:46 pm", "chk": { "isDisabled": false, "id": "chk1088", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1095, "title": "Waste Disposal",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:48 pm", "chk": { "isDisabled": false, "id": "chk1096", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 1097, "title": "Municipal", "date": "05/15/2016", "time": "6:48 pm", "chk": { "isDisabled": false, "id": "chk1098", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1099, "title": "Septic System", "date": "05/15/2016", "time": "6:48 pm", "chk": { "isDisabled": false, "id": "chk1100", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1101, "title": "Have Local Health Officials Check for Compliance with Local Regulations?", "date": "05/15/2016", "time": "6:48 pm", "chk": { "isDisabled": false, "id": "chk1102", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1107, "title": "Water Piping",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:50 pm", "chk": { "isDisabled": false, "id": "chk1108", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 1109, "title": "Copper", "date": "05/15/2016", "time": "6:50 pm", "chk": { "isDisabled": false, "id": "chk1110", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1111, "title": "Galvanized", "date": "05/15/2016", "time": "6:50 pm", "chk": { "isDisabled": false, "id": "chk1112", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1113, "title": "PVC/CPVC", "date": "05/15/2016", "time": "6:50 pm", "chk": { "isDisabled": false, "id": "chk1114", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1115, "title": "Brass", "date": "05/15/2016", "time": "6:50 pm", "chk": { "isDisabled": false, "id": "chk1116", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1117, "title": "PB", "date": "05/15/2016", "time": "6:50 pm", "chk": { "isDisabled": false, "id": "chk1118", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1119, "title": "PEX", "date": "05/15/2016", "time": "6:50 pm", "chk": { "isDisabled": false, "id": "chk1120", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1125, "title": "Water Pressure",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:53 pm", "chk": { "isDisabled": false, "id": "chk1126", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 1127, "title": "Psi (Static):_", "date": "05/15/2016", "time": "6:53 pm", "chk": { "isDisabled": false, "id": "chk1128", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1129, "title": "Psi (Tub Flowing):_", "date": "05/15/2016", "time": "6:53 pm", "chk": { "isDisabled": false, "id": "chk1130", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1131, "title": "Not Measured", "date": "05/15/2016", "time": "6:53 pm", "chk": { "isDisabled": false, "id": "chk1132", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1139, "title": "DWV Piping",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:55 pm", "chk": { "isDisabled": false, "id": "chk1140", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 1141, "title": "Cast Iron", "date": "05/15/2016", "time": "6:55 pm", "chk": { "isDisabled": false, "id": "chk1142", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1143, "title": "Copper", "date": "05/15/2016", "time": "6:55 pm", "chk": { "isDisabled": false, "id": "chk1144", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1145, "title": "PVC", "date": "05/15/2016", "time": "6:55 pm", "chk": { "isDisabled": false, "id": "chk1146", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1147, "title": "ABS", "date": "05/15/2016", "time": "6:55 pm", "chk": { "isDisabled": false, "id": "chk1148", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1149, "title": "Lead", "date": "05/15/2016", "time": "6:55 pm", "chk": { "isDisabled": false, "id": "chk1150", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1151, "title": "Galvanized", "date": "05/15/2016", "time": "6:55 pm", "chk": { "isDisabled": false, "id": "chk1152", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1155, "title": "Hot Water Heater - Type",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1156", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 1157, "title": "Gas", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1158", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1159, "title": "Electric", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1160", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1161, "title": "Fuel Oil", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1162", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1163, "title": "LP Gas", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1164", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1165, "title": "Integral w/ Heating System", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1166", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1167, "title": "Manufacturer:_", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1168", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1169, "title": "Approximate Age:_", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1170", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1171, "title": "Capacity:_ (Gallons)", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1172", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1173, "title": "w/Expansion Tank", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1174", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1177, "title": "Bathrooms",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "6:59 pm", "chk": { "isDisabled": false, "id": "chk1178", "hideLabel": true, "useCircles": true, "isChecked": false }, "categoryItemOptions": [{ "categoryItemOptionId": 1179, "title": "Number of Bathrooms:_", "date": "05/15/2016", "time": "6:59 pm", "chk": { "isDisabled": false, "id": "chk1180", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1181, "title": "Functional Flow", "date": "05/15/2016", "time": "6:59 pm", "chk": { "isDisabled": false, "id": "chk1182", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1183, "title": "Functional Drainage", "date": "05/15/2016", "time": "6:59 pm", "chk": { "isDisabled": false, "id": "chk1184", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        }
                    ]
                },
                {
                    "categoryId": 7,
                    "title": "Electrical System",
                    "date": "7/15/2011",
                    "time": "7:35 am",
                    "firstDetailName": "Items",
                    get firstDetailCount() {
                        return this.categoryItems.length;
                    },
                    "chk": {
                        "isDisabled": false,
                        "id": "chkCategories4",
                        "hideLabel": true,
                        "useCircles": true,
                        "isChecked": false
                    },
                    "categoryItems": [
                        {
                            "categoryItemId": 1195, "title": "Component Items", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1196", "hideLabel": true, "useCircles": true, "isChecked": false }, "isComponentList": true,
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"], "categoryItemOptions": [{ "categoryItemOptionId": 1197, "title": "Main Service to Building", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1198", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1199, "title": "Exterior Wiring", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1200", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1201, "title": "Garage Wiring", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1202", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1203, "title": "Service Entrance Panel", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1204", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1205, "title": "Main Distribution Panel", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1206", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1207, "title": "Interior Wiring", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1208", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1209, "title": "Light Fixtures", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1210", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1211, "title": "Wall Switches", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1212", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1213, "title": "Receptacles (3-prong)", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1214", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1215, "title": "Receptacles (2-prong)", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1216", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1217, "title": "Polarity/Proper Ground", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1218", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1219, "title": "Water Meter Ground Jumper", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1220", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1221, "title": "GFCI's", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1222", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1223, "title": "AFCI's", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1224", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1225, "title": "Sub-panel No. 1", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1226", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1227, "title": "Sub-panel No. 2", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1228", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1229, "title": "Sub-panel No. 3", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1230", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1236, "title": "Main Service to Building",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "7:10 pm", "chk": { "isDisabled": false, "id": "chk1237", "hideLabel": true, "useCircles": true, "isChecked": false }, "isComponentList": true, "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"], "categoryItemOptions": [{ "categoryItemOptionId": 1238, "title": "Overhead", "date": "05/15/2016", "time": "7:10 pm", "chk": { "isDisabled": false, "id": "chk1239", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1240, "title": "Underground", "date": "05/15/2016", "time": "7:10 pm", "chk": { "isDisabled": false, "id": "chk1241", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1242, "title": "Copper", "date": "05/15/2016", "time": "7:10 pm", "chk": { "isDisabled": false, "id": "chk1243", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1244, "title": "Aluminum", "date": "05/15/2016", "time": "7:10 pm", "chk": { "isDisabled": false, "id": "chk1245", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1251, "title": "Service Entrance Panel",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "7:12 pm", "chk": { "isDisabled": false, "id": "chk1252", "hideLabel": true, "useCircles": true, "isChecked": false }, "isComponentList": true, "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"], "categoryItemOptions": [{ "categoryItemOptionId": 1253, "title": "Amps Service:_", "date": "05/15/2016", "time": "7:12 pm", "chk": { "isDisabled": false, "id": "chk1254", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1255, "title": "120/240 Volt", "date": "05/15/2016", "time": "7:12 pm", "chk": { "isDisabled": false, "id": "chk1256", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1257, "title": "120 Volt", "date": "05/15/2016", "time": "7:12 pm", "chk": { "isDisabled": false, "id": "chk1258", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1259, "title": "Circuit Breakers", "date": "05/15/2016", "time": "7:12 pm", "chk": { "isDisabled": false, "id": "chk1260", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1261, "title": "Fuses", "date": "05/15/2016", "time": "7:12 pm", "chk": { "isDisabled": false, "id": "chk1262", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1263, "title": "Grounded to Water Pipe/Ground Rod", "date": "05/15/2016", "time": "7:12 pm", "chk": { "isDisabled": false, "id": "chk1264", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1265, "title": "Combination Service Entrance/Main Distribution Panel", "date": "05/15/2016", "time": "7:12 pm", "chk": { "isDisabled": false, "id": "chk1266", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1271, "title": "Main Distribution Panel",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "7:14 pm", "chk": { "isDisabled": false, "id": "chk1272", "hideLabel": true, "useCircles": true, "isChecked": false }, "isComponentList": true, "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"], "categoryItemOptions": [{ "categoryItemOptionId": 1273, "title": "Amps. (approx.):_", "date": "05/15/2016", "time": "7:14 pm", "chk": { "isDisabled": false, "id": "chk1274", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1275, "title": "120/240 Volt", "date": "05/15/2016", "time": "7:14 pm", "chk": { "isDisabled": false, "id": "chk1276", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1277, "title": "120 Volt", "date": "05/15/2016", "time": "7:14 pm", "chk": { "isDisabled": false, "id": "chk1278", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1279, "title": "Circuit Breakers", "date": "05/15/2016", "time": "7:14 pm", "chk": { "isDisabled": false, "id": "chk1280", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1281, "title": "Fuses", "date": "05/15/2016", "time": "7:14 pm", "chk": { "isDisabled": false, "id": "chk1282", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1283, "title": "Grounded to Water Pipe/Ground Rod", "date": "05/15/2016", "time": "7:14 pm", "chk": { "isDisabled": false, "id": "chk1284", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1291, "title": "Circuits/Disconnects",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "7:16 pm", "chk": { "isDisabled": false, "id": "chk1292", "hideLabel": true, "useCircles": true, "isChecked": false }, "isComponentList": true, "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"], "categoryItemOptions": [{ "categoryItemOptionId": 1293, "title": "No. of Disconnects to Cut All Power:_", "date": "05/15/2016", "time": "7:16 pm", "chk": { "isDisabled": false, "id": "chk1294", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1295, "title": "No. of 120 Volt Branch Circuits (approx.):_", "date": "05/15/2016", "time": "7:16 pm", "chk": { "isDisabled": false, "id": "chk1296", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1299, "title": "240 Volt Circuits",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "7:18 pm", "chk": { "isDisabled": false, "id": "chk1300", "hideLabel": true, "useCircles": true, "isChecked": false }, "isComponentList": true, "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"], "categoryItemOptions": [{ "categoryItemOptionId": 1301, "title": "Heating", "date": "05/15/2016", "time": "7:18 pm", "chk": { "isDisabled": false, "id": "chk1302", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1303, "title": "Cooling", "date": "05/15/2016", "time": "7:18 pm", "chk": { "isDisabled": false, "id": "chk1304", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1305, "title": "Water Heater", "date": "05/15/2016", "time": "7:18 pm", "chk": { "isDisabled": false, "id": "chk1306", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1307, "title": "Dryer", "date": "05/15/2016", "time": "7:18 pm", "chk": { "isDisabled": false, "id": "chk1308", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1309, "title": "Kitchen", "date": "05/15/2016", "time": "7:18 pm", "chk": { "isDisabled": false, "id": "chk1310", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1317, "title": "Internal Wiring",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "7:19 pm", "chk": { "isDisabled": false, "id": "chk1318", "hideLabel": true, "useCircles": true, "isChecked": false }, "isComponentList": true, "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"], "categoryItemOptions": [{ "categoryItemOptionId": 1319, "title": "Copper", "date": "05/15/2016", "time": "7:19 pm", "chk": { "isDisabled": false, "id": "chk1320", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1321, "title": "Copperclad", "date": "05/15/2016", "time": "7:19 pm", "chk": { "isDisabled": false, "id": "chk1322", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1323, "title": "Aluminum", "date": "05/15/2016", "time": "7:19 pm", "chk": { "isDisabled": false, "id": "chk1324", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1325, "title": "w/ Multiwire Branch Circuits", "date": "05/15/2016", "time": "7:19 pm", "chk": { "isDisabled": false, "id": "chk1326", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1327, "title": "Conduit", "date": "05/15/2016", "time": "7:19 pm", "chk": { "isDisabled": false, "id": "chk1328", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1329, "title": "Knob & Tube", "date": "05/15/2016", "time": "7:19 pm", "chk": { "isDisabled": false, "id": "chk1330", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1331, "title": "Nonmetallic Cable", "date": "05/15/2016", "time": "7:19 pm", "chk": { "isDisabled": false, "id": "chk1332", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1333, "title": "Armored Cable", "date": "05/15/2016", "time": "7:19 pm", "chk": { "isDisabled": false, "id": "chk1334", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1341, "title": "General Comments",
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItems.length;
                            }, "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1342", "hideLabel": true, "useCircles": true, "isChecked": false }, "isComponentList": true, "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"], "categoryItemOptions": [{ "categoryItemOptionId": 1343, "title": "Panel Knockouts not Protected", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1344", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1345, "title": "Wire Splices not Installed in Junction Boxes", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1346", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1347, "title": "Double-Tapping of Fuses/Breakers", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1348", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1349, "title": "Wiring jury-rigged across Attic/Basement Joists", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1350", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1351, "title": "Oversized Fuses/Breakers", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1352", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1353, "title": "GFCI's are not Installed in all \"Wet\" Areas", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1354", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1355, "title": "Junction Boxes without Covers", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1356", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1357, "title": "Common Grounds/Neutrals in Sub-panels", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1358", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1359, "title": "Circuits are not all Labeled", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1360", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1361, "title": "Wiring is exposed along garage/basement/interior walls", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1362", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        }
                    ]
                }
            ]
        },
        {
            "templateId": 2,
            "title": "Griffen's Template",
            "date": "5/5/2008",
            "time": "5:05 pm",
            "firstDetailName": "Inspections",
            "firstDetailCount": "33",
            "secondDetailName": "Categories",
            "secondDetailCount": "55",
            "chk": {
                "isDisabled": false,
                "id": "chk2",
                "label": "Template",
                "hideLabel": true,
                "useCircles": true,
                "isChecked": false
            }
        },
        {
            "templateId": 3,
            "title": "Template for the fun of it",
            "date": "5/15/2011",
            "time": "5:35 am",
            "firstDetailName": "Inspections",
            "firstDetailCount": "2133",
            "secondDetailName": "Categories",
            "secondDetailCount": "545",
            "chk": {
                "isDisabled": false,
                "id": "chk3",
                "label": "Template",
                "hideLabel": true,
                "useCircles": true,
                "isChecked": false
            }
        }
    ],
    "inspections": [
    ]
};





































$scope.hi = {
    "templates": [
        {
            "templateId": 1,
            "title": "DTown's Template",
            "date": "4/14/2014",
            "time": "4:14 pm",
            "firstDetailName": "Inspections",
            "firstDetailCount": "33",
            "secondDetailName": "Categories",
            "secondDetailCount": "55",
            "chk": {
                "isDisabled": false,
                "id": "chk1",
                "label": "Template",
                "hideLabel": true,
                "useCircles": true,
                "isChecked": false
            },
            "comment": null,
            "categories": [
                {
                    "categoryId": 1,
                    "title": "Exterior",
                    "date": "5/14/2014",
                    "time": "5:14 pm",
                    "comment": null,
                    "firstDetailName": "Items",
                    get firstDetailCount() {
                        return this.categoryItems.length;
                    },
                    "chk": {
                        "isDisabled": false,
                        "id": "chkCategories1",
                        "hideLabel": true,
                        "useCircles": true,
                        "isChecked": false
                    },
                    "categoryItems": [
                        {
                            "categoryItemId": 151,
                            "title": "Architectural Style",
                            "date": "05\/15\/2016",
                            "time": "12:17 am",
                            "chk": {
                                "isDisabled": false,
                                "id": "chk152",
                                "hideLabel": true,
                                "useCircles": true,
                                "isChecked": false
                            },
                            "comment": null,
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "categoryItemOptions": [
                                {
                                    "categoryItemOptionId": 153,
                                    "title": "Ranch Colonial",
                                    "date": "05\/15\/2016",
                                    "time": "12:17 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk154",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 155,
                                    "title": "Split\/Bi-Level",
                                    "date": "05\/15\/2016",
                                    "time": "12:17 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk156",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 157,
                                    "title": "Bungalow",
                                    "date": "05\/15\/2016",
                                    "time": "12:17 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk158",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 159,
                                    "title": "Eclectic",
                                    "date": "05\/15\/2016",
                                    "time": "12:17 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk160",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 161,
                                    "title": "Other",
                                    "date": "05\/15\/2016",
                                    "time": "12:17 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk162",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                }
                            ]
                        },
                        {
                            "categoryItemId": 181,
                            "title": "Exterior Coverings",
                            "date": "05\/15\/2016",
                            "time": "12:23 am",
                            "chk": {
                                "isDisabled": false,
                                "id": "chk182",
                                "hideLabel": true,
                                "useCircles": true,
                                "isChecked": false
                            },
                            "comment": null,
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "categoryItemOptions": [
                                {
                                    "categoryItemOptionId": 183,
                                    "title": "Wood Lap Siding",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk184",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 185,
                                    "title": "Aluminum Siding",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk186",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 187,
                                    "title": "Vinyl Siding",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk188",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 189,
                                    "title": "EIFS",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk190",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 191,
                                    "title": "Wood Drop Siding",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk192",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 193,
                                    "title": "Board & Batten Siding",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk194",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 195,
                                    "title": "Wood Shingles\/Shakes",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk196",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 197,
                                    "title": "Asbestos Cement Shingles",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk198",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 199,
                                    "title": "Brick Veneer",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk200",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 201,
                                    "title": "Stone Veneer",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk202",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 203,
                                    "title": "Stucco",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk204",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 205,
                                    "title": "Fiberboard Siding",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk206",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 207,
                                    "title": "Plywood Siding",
                                    "date": "05\/15\/2016",
                                    "time": "12:23 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk208",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                }
                            ]
                        },
                        {
                            "categoryItemId": 226,
                            "title": "Window Types",
                            "date": "05\/15\/2016",
                            "time": "12:29 am",
                            "chk": {
                                "isDisabled": false,
                                "id": "chk227",
                                "hideLabel": true,
                                "useCircles": true,
                                "isChecked": false
                            },
                            "comment": null,
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "categoryItemOptions": [
                                {
                                    "categoryItemOptionId": 228,
                                    "title": "Single\/Double-hung",
                                    "date": "05\/15\/2016",
                                    "time": "12:29 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk229",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 230,
                                    "title": "Sliding",
                                    "date": "05\/15\/2016",
                                    "time": "12:29 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk231",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 232,
                                    "title": "Casement",
                                    "date": "05\/15\/2016",
                                    "time": "12:29 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk233",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 234,
                                    "title": "Awning\/Hopper",
                                    "date": "05\/15\/2016",
                                    "time": "12:29 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk235",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 236,
                                    "title": "Fixed",
                                    "date": "05\/15\/2016",
                                    "time": "12:29 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk237",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 238,
                                    "title": "w\/Storm windows",
                                    "date": "05\/15\/2016",
                                    "time": "12:29 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk239",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                }
                            ]
                        },
                        {
                            "categoryItemId": 251,
                            "title": "Foundation",
                            "date": "05\/15\/2016",
                            "time": "12:39 am",
                            "chk": {
                                "isDisabled": false,
                                "id": "chk252",
                                "hideLabel": true,
                                "useCircles": true,
                                "isChecked": false
                            },
                            "comment": null,
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "categoryItemOptions": [
                                {
                                    "categoryItemOptionId": 253,
                                    "title": "Grading around Foundation",
                                    "date": "05\/15\/2016",
                                    "time": "12:39 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk254",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 255,
                                    "title": "Wood to Ground Distance",
                                    "date": "05\/15\/2016",
                                    "time": "12:39 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk256",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                }
                            ]
                        },
                        {
                            "categoryItemId": 261,
                            "title": "Storm Drainage",
                            "date": "05\/15\/2016",
                            "time": "12:44 am",
                            "chk": {
                                "isDisabled": false,
                                "id": "chk262",
                                "hideLabel": true,
                                "useCircles": true,
                                "isChecked": false
                            },
                            "comment": null,
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "categoryItemOptions": [
                                {
                                    "categoryItemOptionId": 263,
                                    "title": "Below Ground Drainage",
                                    "date": "05\/15\/2016",
                                    "time": "12:44 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk264",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 265,
                                    "title": "Above Ground Drainage",
                                    "date": "05\/15\/2016",
                                    "time": "12:44 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk266",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                }
                            ]
                        },
                        {
                            "categoryItemId": 275,
                            "title": "General Comments",
                            "date": "05\/15\/2016",
                            "time": "12:50 am",
                            "chk": {
                                "isDisabled": false,
                                "id": "chk276",
                                "hideLabel": true,
                                "useCircles": true,
                                "isChecked": false
                            },
                            "comment": null,
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "categoryItemOptions": [
                                {
                                    "categoryItemOptionId": 277,
                                    "title": "Repair all Loose or Cracked Caulking",
                                    "date": "05\/15\/2016",
                                    "time": "12:50 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk278",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 279,
                                    "title": "Weep Holes are not in all Storm Windows\/Brick Veneer",
                                    "date": "05\/15\/2016",
                                    "time": "12:50 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk280",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 281,
                                    "title": "Repair all Damaged Exterior Covering\/Trim",
                                    "date": "05\/15\/2016",
                                    "time": "12:50 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk282",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 283,
                                    "title": "Replace all Loose Glazing Compound",
                                    "date": "05\/15\/2016",
                                    "time": "12:50 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk284",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 285,
                                    "title": "Cut back Vegetation away from Buildings",
                                    "date": "05\/15\/2016",
                                    "time": "12:50 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk286",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 287,
                                    "title": "Re-point all Loose\/Cracked Mortar",
                                    "date": "05\/15\/2016",
                                    "time": "12:50 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk288",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 289,
                                    "title": "Weatherproof all Openings\/Penetrations",
                                    "date": "05\/15\/2016",
                                    "time": "12:50 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk290",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 291,
                                    "title": "Replace all Damaged Door Weatherstripping",
                                    "date": "05\/15\/2016",
                                    "time": "12:50 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk292",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 293,
                                    "title": "Paint\/Stain all exposed Wood",
                                    "date": "05\/15\/2016",
                                    "time": "12:50 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk294",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 295,
                                    "title": "Remove Rotted Wood\/Firewood around Property or in Garage",
                                    "date": "05\/15\/2016",
                                    "time": "12:50 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk296",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 297,
                                    "title": "Remove Insect\/Vermin Nests",
                                    "date": "05\/15\/2016",
                                    "time": "12:50 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk298",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                },
                                {
                                    "categoryItemOptionId": 299,
                                    "title": "Regrade to Slope Soil\/Slabs away from Foundation",
                                    "date": "05\/15\/2016",
                                    "time": "12:50 am",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk300",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "isSelected": null,
                                    "comment": null,
                                    "value": null
                                }
                            ]
                        },
                        {
                            "categoryItemId": 101,
                            "title": "Component Items",
                            "date": "05\/14\/2016",
                            "time": "11:38 pm",
                            "chk": {
                                "isDisabled": false,
                                "id": "chk102",
                                "hideLabel": true,
                                "useCircles": true,
                                "isChecked": false
                            },
                            "comment": null,
                            "isComponentList": true,
                            "componentList": [
                                "Acceptable",
                                "Marginal",
                                "Unacceptable"
                            ],
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "categoryItemOptions": [
                                {
                                    "categoryItemOptionId": 103,
                                    "title": "Siding",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk104",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 105,
                                    "title": "Shingles",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk106",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 107,
                                    "title": "Veneer",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk108",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 109,
                                    "title": "Stucco\/EIFS",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk110",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 111,
                                    "title": "Trim Work",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk112",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 113,
                                    "title": "Primary Windows",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk114",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 115,
                                    "title": "Exterior Doors",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk116",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 117,
                                    "title": "Front Porch\/Steps",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk118",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 119,
                                    "title": "Side Porch\/Steps",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk120",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 121,
                                    "title": "Rear Porch\/Steps",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk122",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 123,
                                    "title": "Railings",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk124",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 125,
                                    "title": "Sidewalks",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk126",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 127,
                                    "title": "Driveway\/Carport",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk128",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 129,
                                    "title": "Attached Garage",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk130",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 131,
                                    "title": "Detached Garage",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk132",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 133,
                                    "title": "Garage Doors and Openers",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk134",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 135,
                                    "title": "Deck",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk136",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 137,
                                    "title": "Patio",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk138",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 139,
                                    "title": "Balcony",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk140",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                },
                                {
                                    "categoryItemOptionId": 141,
                                    "title": "Retaining Wall",
                                    "date": "05\/14\/2016",
                                    "time": "11:38 pm",
                                    "chk": {
                                        "isDisabled": false,
                                        "id": "chk142",
                                        "hideLabel": true,
                                        "useCircles": true,
                                        "isChecked": false
                                    },
                                    "componentItemValue": null,
                                    "comment": null,
                                    "value": null,
                                    "isSelected": null
                                }
                            ]
                        }
                    ]

                },
                {
                    "categoryId": 2,
                    "title": "Roof and Attic",
                    "date": "6/5/2008",
                    "time": "6:05 pm",
                    "firstDetailName": "Items",
                    get firstDetailCount() {
                        return this.categoryItems.length;
                    },
                    "chk": {
                        "isDisabled": false,
                        "id": "chkCategories2",
                        "hideLabel": true,
                        "useCircles": true,
                        "isChecked": false
                    },
                    "comment": null,
                    "categoryItems": [
                        {
                            "categoryItemId": 356,
                            "title": "Type",
                            "comment": null,
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "9:43 am",
                            "chk": { "isDisabled": false, "id": "chk357", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 358, "title": "Gable", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk359", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 360, "title": "Hip", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk361", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 362, "title": "Shed", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk363", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 364, "title": "Gambrel", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk365", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 366, "title": "Mansard", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk367", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 368, "title": "Salt Box", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk369", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 370, "title": "Flat", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk371", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 372, "title": "w/Shed Dormers", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk373", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 374, "title": "w/Gable Dormers", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk375", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 376, "title": "w/Hip Dormers", "date": "05/15/2016", "time": "9:43 am", "chk": { "isDisabled": false, "id": "chk377", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 386,
                            "title": "Roofing Material",
                            "comment": null,
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "9:59 am",
                            "chk": { "isDisabled": false, "id": "chk387", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 388, "title": "Asphalt Shingles", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk389", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 390, "title": "Fiberglass Asphalt Shingles", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk391", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 392, "title": "Slate Shingles", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk393", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 394, "title": "Clay Tiles", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk395", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 396, "title": "Wood Shingles/Shakes", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk397", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 398, "title": "Built-up Roofing", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk399", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 400, "title": "Asphalt Rolls", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk401", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 402, "title": "Metal", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk403", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 404, "title": "Single Ply", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk405", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 406, "title": "Asphalt Interlocking Shingles", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk407", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 408, "title": "Asbestos/Cement Shingles", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk409", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 410, "title": "Cement Tiles", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk411", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 412, "title": "EPDM", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk413", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 414, "title": "No. of Layers", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk415", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 416, "title": "Pitch in 12\" (approx.)", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk417", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 418, "title": "Color", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk419", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 420, "title": "Observed from Ground", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk421", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 422, "title": "Observed from Ladder at Eaves", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk423", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 424, "title": "Observed from Window or Balcony", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk425", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 426, "title": "Observed from Roof", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk427", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 428, "title": "Observed from Attic", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk429", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 430, "title": "Observed from Ground", "date": "05/15/2016", "time": "9:59 am", "chk": { "isDisabled": false, "id": "chk431", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 446,
                            "title": "Condition",
                            "comment": null,
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "10:04 am",
                            "chk": { "isDisabled": false, "id": "chk447", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 448, "title": "Buckling or Curling", "date": "05/15/2016", "time": "10:04 am", "chk": { "isDisabled": false, "id": "chk449", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 450, "title": "Cracked or Missing Shingles", "date": "05/15/2016", "time": "10:04 am", "chk": { "isDisabled": false, "id": "chk451", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 452, "title": "Erosion", "date": "05/15/2016", "time": "10:04 am", "chk": { "isDisabled": false, "id": "chk453", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 454, "title": "Ponding", "date": "05/15/2016", "time": "10:04 am", "chk": { "isDisabled": false, "id": "chk455", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 456, "title": "Moss", "date": "05/15/2016", "time": "10:04 am", "chk": { "isDisabled": false, "id": "chk457", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 458, "title": "Evidence of Prior Leakage or Repair", "date": "05/15/2016", "time": "10:04 am", "chk": { "isDisabled": false, "id": "chk459", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 460, "title": "Mold/Mildew on Attic Decking/Framing", "date": "05/15/2016", "time": "10:04 am", "chk": { "isDisabled": false, "id": "chk461", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 462, "title": "Algae", "date": "05/15/2016", "time": "10:04 am", "chk": { "isDisabled": false, "id": "chk463", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 476,
                            "title": "Attic Insulation",
                            "comment": null,
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "10:09 am",
                            "chk": { "isDisabled": false, "id": "chk477", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 478, "title": "Thickness: (approx.)", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk479", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 480, "title": "Batts or Blankets", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk481", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 482, "title": "Blown-in", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk483", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 484, "title": "Boards", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk485", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 486, "title": "w/Vapor Barrier", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk487", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 488, "title": "Glass/Mineral Fiber", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk489", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 490, "title": "Cellulose/Wood Fiber", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk491", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 492, "title": "Mineral Fills", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk493", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 494, "title": "Insulating Foams", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk495", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 496, "title": "Insulation Not Always on \"House Side\"", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk497", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 498, "title": "Pull Back Insulation where Touching Roof Deck", "date": "05/15/2016", "time": "10:09 am", "chk": { "isDisabled": false, "id": "chk499", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 511,
                            "title": "Building Exhausts",
                            "comment": null,
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "10:12 am",
                            "chk": { "isDisabled": false, "id": "chk512", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 513, "title": "Vented to Outside", "date": "05/15/2016", "time": "10:12 am", "chk": { "isDisabled": false, "id": "chk514", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 515, "title": "Discharge into Roof/Soffit Vents", "date": "05/15/2016", "time": "10:12 am", "chk": { "isDisabled": false, "id": "chk516", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 517, "title": "Discharge into Attic", "date": "05/15/2016", "time": "10:12 am", "chk": { "isDisabled": false, "id": "chk518", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 527,
                            "title": "Gutters/Downspouts",
                            "comment": null,
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "10:13 am",
                            "chk": { "isDisabled": false, "id": "chk528", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 529, "title": "Aluminum", "date": "05/15/2016", "time": "10:13 am", "chk": { "isDisabled": false, "id": "chk530", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 531, "title": "Galvanized", "date": "05/15/2016", "time": "10:13 am", "chk": { "isDisabled": false, "id": "chk532", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 533, "title": "Copper", "date": "05/15/2016", "time": "10:13 am", "chk": { "isDisabled": false, "id": "chk534", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 535, "title": "Vinyl", "date": "05/15/2016", "time": "10:13 am", "chk": { "isDisabled": false, "id": "chk536", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 537, "title": "Wood Box", "date": "05/15/2016", "time": "10:13 am", "chk": { "isDisabled": false, "id": "chk538", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 301,
                            "title": "Component Items",
                            "date": "05/15/2016",
                            "time": "7:57 am",
                            "chk": { "isDisabled": false, "id": "chk302", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "isComponentList": true,
                            "componentList": [
                                "Acceptable",
                                "Marginal",
                                "Unacceptable"
                            ],
                            "comment": null,
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "categoryItemOptions": [{ "categoryItemOptionId": 303, "title": "Roofing Material", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk304", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 305, "title": "Flashing", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk306", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 307, "title": "Masonry Chimneys", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk308", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 309, "title": "Metal Chimneys/Enclosures", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk310", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 311, "title": "Roof Vents", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk312", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 313, "title": "Powered Roof Vent", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk314", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 315, "title": "Whole House Fan", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk316", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 317, "title": "Soffit Vents", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk318", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 319, "title": "Soffits and Fascias", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk320", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 321, "title": "Gutters", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk322", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 323, "title": "Downspouts", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk324", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 325, "title": "Wood Decking", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk326", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 327, "title": "Plywood Decking", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk328", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 329, "title": "OSB Decking", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk330", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 331, "title": "Rafters", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk332", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 333, "title": "Trusses", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk334", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 335, "title": "Insulation", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk336", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 337, "title": "Ventilation", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk338", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 339, "title": "Skylights", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk340", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 341, "title": "Garage Roofing", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk342", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 343, "title": "Garage Roof Deck/Framing", "date": "05/15/2016", "time": "7:57 am", "chk": { "isDisabled": false, "id": "chk344", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        }
                    ]
                },
                {
                    "categoryId": 3,
                    "title": "Foundation, Basement and Structural",
                    "date": "7/15/2011",
                    "time": "7:35 am",
                    "firstDetailName": "Items",
                    get firstDetailCount() {
                        return this.categoryItems.length;
                    },
                    "chk": {
                        "isDisabled": false,
                        "id": "chkCategories3",
                        "hideLabel": true,
                        "useCircles": true,
                        "isChecked": false
                    },
                    "comment": null,
                    "categoryItems": [
                        {
                            "categoryItemId": 596,
                            "title": "Type of Structure",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "5:37 pm",
                            "chk": { "isDisabled": false, "id": "chk597", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 598, "title": "Frame", "date": "05/15/2016", "time": "5:37 pm", "chk": { "isDisabled": false, "id": "chk599", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 600, "title": "Masonry", "date": "05/15/2016", "time": "5:37 pm", "chk": { "isDisabled": false, "id": "chk601", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 602, "title": "Balloon Frame", "date": "05/15/2016", "time": "5:37 pm", "chk": { "isDisabled": false, "id": "chk603", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 611,
                            "title": "Foundation Type",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "5:39 pm",
                            "chk": { "isDisabled": false, "id": "chk612", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 613, "title": "Slab", "date": "05/15/2016", "time": "5:39 pm", "chk": { "isDisabled": false, "id": "chk614", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 615, "title": "Basement", "date": "05/15/2016", "time": "5:39 pm", "chk": { "isDisabled": false, "id": "chk616", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 617, "title": "Posts/Piers", "date": "05/15/2016", "time": "5:39 pm", "chk": { "isDisabled": false, "id": "chk618", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 619, "title": "Crawl Space", "date": "05/15/2016", "time": "5:39 pm", "chk": { "isDisabled": false, "id": "chk620", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 621, "title": "Entered Crawl Space", "date": "05/15/2016", "time": "5:39 pm", "chk": { "isDisabled": false, "id": "chk622", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 627,
                            "title": "Foundation Walls",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "5:41 pm",
                            "chk": { "isDisabled": false, "id": "chk628", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 629, "title": "Block", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk630", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 631, "title": "Concrete", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk632", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 633, "title": "Brick", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk634", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 635, "title": "Clay Tile", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk636", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 637, "title": "Stone", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk638", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 639, "title": "Horizontal Cracks", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk640", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 641, "title": "Vertical Cracks", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk642", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 643, "title": "Step Cracks", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk644", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 645, "title": "Open Wall Penetrations", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk646", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 647, "title": "Loose Mortar", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk648", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 649, "title": "Excessive Movement", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk650", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 651, "title": "Mold/Mildew", "date": "05/15/2016", "time": "5:41 pm", "chk": { "isDisabled": false, "id": "chk652", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 659,
                            "title": "Moisture/Staining",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "5:44 pm",
                            "chk": { "isDisabled": false, "id": "chk660", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 661, "title": "Staining On Lower Portion of Walls Only", "date": "05/15/2016", "time": "5:44 pm", "chk": { "isDisabled": false, "id": "chk662", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 663, "title": "Moderate Staining", "date": "05/15/2016", "time": "5:44 pm", "chk": { "isDisabled": false, "id": "chk664", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 665, "title": "Excessive Staining", "date": "05/15/2016", "time": "5:44 pm", "chk": { "isDisabled": false, "id": "chk666", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 667, "title": "Walls Dry at this Time", "date": "05/15/2016", "time": "5:44 pm", "chk": { "isDisabled": false, "id": "chk668", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 669, "title": "Moderate Dampness in Walls", "date": "05/15/2016", "time": "5:44 pm", "chk": { "isDisabled": false, "id": "chk670", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 671, "title": "Excessive Dampness in Walls", "date": "05/15/2016", "time": "5:44 pm", "chk": { "isDisabled": false, "id": "chk672", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 673, "title": "Evidence of Prior Water Penetration/Seepage", "date": "05/15/2016", "time": "5:44 pm", "chk": { "isDisabled": false, "id": "chk674", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 675, "title": "Active Water Penetration/Seepage", "date": "05/15/2016", "time": "5:44 pm", "chk": { "isDisabled": false, "id": "chk676", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 687,
                            "title": "Floor Framing",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "5:47 pm",
                            "chk": { "isDisabled": false, "id": "chk688", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 689, "title": "Floor Joists Size: _x_on_ centers", "date": "05/15/2016", "time": "5:47 pm", "chk": { "isDisabled": false, "id": "chk690", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 691, "title": "Excessive Deflection", "date": "05/15/2016", "time": "5:47 pm", "chk": { "isDisabled": false, "id": "chk692", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 693, "title": "Plumbing/Wiring Cut through Lower Third of Beams", "date": "05/15/2016", "time": "5:47 pm", "chk": { "isDisabled": false, "id": "chk694", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 695, "title": "Splitting", "date": "05/15/2016", "time": "5:47 pm", "chk": { "isDisabled": false, "id": "chk696", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 697, "title": "Mold/Fungus", "date": "05/15/2016", "time": "5:47 pm", "chk": { "isDisabled": false, "id": "chk698", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 699, "title": "Rot/Insect Damage", "date": "05/15/2016", "time": "5:47 pm", "chk": { "isDisabled": false, "id": "chk700", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 701, "title": "Excessive Dampness", "date": "05/15/2016", "time": "5:47 pm", "chk": { "isDisabled": false, "id": "chk702", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 703, "title": "Lack of Fire-stops", "date": "05/15/2016", "time": "5:47 pm", "chk": { "isDisabled": false, "id": "chk704", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 551,
                            "title": "Component Items",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "5:34 pm",
                            "chk": { "isDisabled": false, "id": "chk552", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 553, "title": "Foundation Walls", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk554", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 555, "title": "Sill Anchors", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk556", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 557, "title": "Floor Slab", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk558", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 559, "title": "Chimney Foundations", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk560", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 561, "title": "Wood Girders", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk562", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 563, "title": "Steel Girders", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk564", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 565, "title": "Floor Joists", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk566", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 567, "title": "Wood Posts", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk568", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 569, "title": "Steel Columns", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk570", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 571, "title": "Masonry Columns", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk572", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 573, "title": "Wood Sub Floor", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk574", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 575, "title": "Plywood Sub Floor", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk576", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 577, "title": "OSB Sub Floor", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk578", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 579, "title": "Cross Bridging/Blocking", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk580", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 581, "title": "Basement Ventilation", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk582", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 583, "title": "Crawl Space Ventilation", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk584", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 585, "title": "Crawl Space Vapor Barrier", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk586", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 587, "title": "Sump Pump", "date": "05/15/2016", "time": "5:34 pm", "chk": { "isDisabled": false, "id": "chk588", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        }
                    ]
                },
                {
                    "categoryId": 4,
                    "title": "Interior",
                    "date": "7/15/2011",
                    "time": "7:35 am",
                    "comment": null,
                    "firstDetailName": "Items",
                    get firstDetailCount() {
                        return this.categoryItems.length;
                    },
                    "chk": {
                        "isDisabled": false,
                        "id": "chkCategories4",
                        "hideLabel": true,
                        "useCircles": true,
                        "isChecked": false
                    },
                    "categoryItems": [
                        {
                            "categoryItemId": 771,
                            "title": "Wall Coverings",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "5:55 pm",
                            "chk": { "isDisabled": false, "id": "chk772", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 773, "title": "Drywall/Plaster", "date": "05/15/2016", "time": "5:55 pm", "chk": { "isDisabled": false, "id": "chk774", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 775, "title": "Paneling", "date": "05/15/2016", "time": "5:55 pm", "chk": { "isDisabled": false, "id": "chk776", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 777, "title": "Brick/Stone", "date": "05/15/2016", "time": "5:55 pm", "chk": { "isDisabled": false, "id": "chk778", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 779, "title": "Stucco", "date": "05/15/2016", "time": "5:55 pm", "chk": { "isDisabled": false, "id": "chk780", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 787,
                            "title": "Floors",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:11 pm",
                            "chk": { "isDisabled": false, "id": "chk788", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 789, "title": "Hardwood", "date": "05/15/2016", "time": "6:11 pm", "chk": { "isDisabled": false, "id": "chk790", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 791, "title": "Plywood", "date": "05/15/2016", "time": "6:11 pm", "chk": { "isDisabled": false, "id": "chk792", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 793, "title": "Concrete", "date": "05/15/2016", "time": "6:11 pm", "chk": { "isDisabled": false, "id": "chk794", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 795, "title": "Waferboard/OSB", "date": "05/15/2016", "time": "6:11 pm", "chk": { "isDisabled": false, "id": "chk796", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 797, "title": "Wood Laminate", "date": "05/15/2016", "time": "6:11 pm", "chk": { "isDisabled": false, "id": "chk798", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 800,
                            "title": "Windows",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:00 pm",
                            "chk": { "isDisabled": false, "id": "chk801", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 802, "title": "Wood", "date": "05/15/2016", "time": "6:00 pm", "chk": { "isDisabled": false, "id": "chk803", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 804, "title": "Metal", "date": "05/15/2016", "time": "6:00 pm", "chk": { "isDisabled": false, "id": "chk805", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 806, "title": "Vinyl", "date": "05/15/2016", "time": "6:00 pm", "chk": { "isDisabled": false, "id": "chk807", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 808, "title": "Double/Triple Glazing", "date": "05/15/2016", "time": "6:00 pm", "chk": { "isDisabled": false, "id": "chk809", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 810, "title": "Air/Gas Filled", "date": "05/15/2016", "time": "6:00 pm", "chk": { "isDisabled": false, "id": "chk811", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 815,
                            "title": "Misc",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:02 pm",
                            "chk": { "isDisabled": false, "id": "chk816", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 817, "title": "No. of Floor Levels:_", "date": "05/15/2016", "time": "6:02 pm", "chk": { "isDisabled": false, "id": "chk818", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 819, "title": "Working Smoke Detectors are Not Installed on Each Level and Each Bedroom", "date": "05/15/2016", "time": "6:02 pm", "chk": { "isDisabled": false, "id": "chk820", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 823,
                            "title": "Bathroom Fans",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:04 pm",
                            "chk": { "isDisabled": false, "id": "chk824", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 825, "title": "Vent to Outside", "date": "05/15/2016", "time": "6:04 pm", "chk": { "isDisabled": false, "id": "chk826", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 827, "title": "Vent to Inside", "date": "05/15/2016", "time": "6:04 pm", "chk": { "isDisabled": false, "id": "chk828", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 829, "title": "Vent to Attic", "date": "05/15/2016", "time": "6:04 pm", "chk": { "isDisabled": false, "id": "chk830", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 835,
                            "title": "Kitchen Fan",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:05 pm",
                            "chk": { "isDisabled": false, "id": "chk836", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 837, "title": "Vent to Outside", "date": "05/15/2016", "time": "6:05 pm", "chk": { "isDisabled": false, "id": "chk838", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 839, "title": "Vent to Inside", "date": "05/15/2016", "time": "6:05 pm", "chk": { "isDisabled": false, "id": "chk840", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 841, "title": "Vent to Attic", "date": "05/15/2016", "time": "6:05 pm", "chk": { "isDisabled": false, "id": "chk842", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 850,
                            "title": "Separation Wall",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:07 pm",
                            "chk": { "isDisabled": false, "id": "chk851", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 852, "title": "Door to Attached Garage/Party may not be 1 HR. Fire Resistant", "date": "05/15/2016", "time": "6:07 pm", "chk": { "isDisabled": false, "id": "chk853", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 854, "title": "Acceptable", "date": "05/15/2016", "time": "6:07 pm", "chk": { "isDisabled": false, "id": "chk855", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 856, "title": "Walls/Ceiling of Attached Garage/Party may not be 1 HR. Fire Resistant", "date": "05/15/2016", "time": "6:07 pm", "chk": { "isDisabled": false, "id": "chk857", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 858, "title": "No Separation Wall above Attached Garage/Party", "date": "05/15/2016", "time": "6:07 pm", "chk": { "isDisabled": false, "id": "chk859", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 711,
                            "title": "Component Items",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "5:52 pm",
                            "chk": { "isDisabled": false, "id": "chk712", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "isComponentList": true,
                            "componentList": ["Acceptable", "Marginal", "Unsatisfactory"],
                            "categoryItemOptions": [{ "categoryItemOptionId": 713, "title": "Walls", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk714", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 715, "title": "Ceilings", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk716", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 717, "title": "Windows", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk718", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 719, "title": "Floors", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk720", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 721, "title": "Stairways", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk722", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 723, "title": "Handrails", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk724", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 725, "title": "Balcony", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk726", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 727, "title": "Interior Doors", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk728", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 729, "title": "Closet Doors", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk730", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 731, "title": "Bathroom Vanities", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk732", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 733, "title": "Bathroom Floor Coverings", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk734", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 735, "title": "Tub/Shower Surrounds", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk736", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 737, "title": "Shower Stalls", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk738", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 739, "title": "Bathroom Fans", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk740", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 741, "title": "Kitchen Cabinets", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk742", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 743, "title": "Kitchen Countertops", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk744", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 745, "title": "Kitchen Floor Covering", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk746", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 747, "title": "Kitchen Fan", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk748", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 749, "title": "Fireplace", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk750", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 751, "title": "Woodburner", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk752", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 753, "title": "Dryer Vent", "date": "05/15/2016", "time": "5:52 pm", "chk": { "isDisabled": false, "id": "chk754", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        }
                    ]
                },
                {
                    "categoryId": 5,
                    "title": "Central Heating and Cooling Systems",
                    "date": "7/15/2011",
                    "time": "7:35 am",
                    "comment": null,
                    "firstDetailName": "Items",
                    get firstDetailCount() {
                        return this.categoryItems.length;
                    },
                    "chk": {
                        "isDisabled": false,
                        "id": "chkCategories4",
                        "hideLabel": true,
                        "useCircles": true,
                        "isChecked": false
                    },
                    "categoryItems": [
                        {
                            "categoryItemId": 927,
                            "title": "Heating Energy Source",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:26 pm",
                            "chk": { "isDisabled": false, "id": "chk928", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 929, "title": "Gas", "date": "05/15/2016", "time": "6:26 pm", "chk": { "isDisabled": false, "id": "chk930", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 931, "title": "Electric", "date": "05/15/2016", "time": "6:26 pm", "chk": { "isDisabled": false, "id": "chk932", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 933, "title": "Fuel Oil", "date": "05/15/2016", "time": "6:26 pm", "chk": { "isDisabled": false, "id": "chk934", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 935, "title": "LP Gas", "date": "05/15/2016", "time": "6:26 pm", "chk": { "isDisabled": false, "id": "chk936", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 944,
                            "title": "Heating Equipment",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:29 pm",
                            "chk": { "isDisabled": false, "id": "chk945", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 946, "title": "Forced Air Furnace", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk947", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 948, "title": "Heat Pump", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk949", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 950, "title": "Gravity Furnace", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk951", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 952, "title": "w/Humidifier", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk953", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 954, "title": "Steam Boiler", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk955", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 956, "title": "Water Boiler", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk957", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 958, "title": "w/Standing Pilot", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk959", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 960, "title": "w/Heat Saver Flue Damper", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk961", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 962, "title": "Manufacturer:_", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk963", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 964, "title": "Capacity:_ (approx.)", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk965", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 966, "title": "Approximate Age:_", "date": "05/15/2016", "time": "6:29 pm", "chk": { "isDisabled": false, "id": "chk967", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 975,
                            "title": "Cooling Equipment",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:31 pm",
                            "chk": { "isDisabled": false, "id": "chk976", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 977, "title": "None", "date": "05/15/2016", "time": "6:31 pm", "chk": { "isDisabled": false, "id": "chk978", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 979, "title": "Direct Expansion Cooling", "date": "05/15/2016", "time": "6:31 pm", "chk": { "isDisabled": false, "id": "chk980", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 981, "title": "Heat Pump", "date": "05/15/2016", "time": "6:31 pm", "chk": { "isDisabled": false, "id": "chk982", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 983, "title": "Gas Absorption Chiller", "date": "05/15/2016", "time": "6:31 pm", "chk": { "isDisabled": false, "id": "chk984", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 985, "title": "Manufacturer:_", "date": "05/15/2016", "time": "6:31 pm", "chk": { "isDisabled": false, "id": "chk986", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 987, "title": "Capacity:_ (approx.)", "date": "05/15/2016", "time": "6:31 pm", "chk": { "isDisabled": false, "id": "chk988", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 989, "title": "Approximate Age:_", "date": "05/15/2016", "time": "6:31 pm", "chk": { "isDisabled": false, "id": "chk990", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 995,
                            "title": "Heating/Cooling Distribution",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:32 pm",
                            "chk": { "isDisabled": false, "id": "chk996", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 997, "title": "Steel Ductwork", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk998", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 999, "title": "Plastic Ductwork", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1000", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1001, "title": "Cement/Asbestos Ductwork", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1002", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1003, "title": "Registers", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1004", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1005, "title": "Fin Tube/Baseboard", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1006", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1007, "title": "Water Circulation", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1008", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1009, "title": "Radiators", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1010", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1011, "title": "Steam/Condensate Piping", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1012", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1013, "title": "One Pipe Steam System", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1014", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1015, "title": "Zone Valves/Dampers", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1016", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1017, "title": "\"Open Return\" System", "date": "05/15/2016", "time": "6:32 pm", "chk": { "isDisabled": false, "id": "chk1018", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1021,
                            "title": "Presence of Heating/Cooling Source in each Habitable Room",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:34 pm",
                            "chk": { "isDisabled": false, "id": "chk1022", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 1023, "title": "Yes", "date": "05/15/2016", "time": "6:34 pm", "chk": { "isDisabled": false, "id": "chk1024", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 877,
                            "title": "Component Items",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:24 pm",
                            "chk": { "isDisabled": false, "id": "chk878", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "isComponentList": true,
                            "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"],
                            "categoryItemOptions": [{ "categoryItemOptionId": 879, "title": "Controls", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk880", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 881, "title": "Burner", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk882", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 883, "title": "Flue and Chimney", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk884", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 885, "title": "Pipe/Ductwork Insulation", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk886", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 887, "title": "Fresh Air Vents", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk888", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 889, "title": "Boiler *WBS (Water Based System)", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk890", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 891, "title": "Boiler Water Drain *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk892", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 893, "title": "Water Fill/Level Control *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk894", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 895, "title": "Safety Relief Valve *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk896", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 897, "title": "Expansion Tank *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk898", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 899, "title": "Air Vents *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk900", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 901, "title": "Circulating Pump *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk902", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 903, "title": "Supply/Return Piping *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk904", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 905, "title": "Radiators *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk906", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 907, "title": "Fin Tube/Baseboard *WBS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk908", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 909, "title": "Furnace *ABS (Air Based System)", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk910", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 911, "title": "Heat Pump *ABS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk912", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 913, "title": "Blower and Motor *ABS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk914", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 915, "title": "Condensate Drain *ABS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk916", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 917, "title": "Air Filter *ABS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk918", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 919, "title": "Ductwork *ABS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk920", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 921, "title": "Supply Registers/Diffusers *ABS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk922", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 923, "title": "Return Grilles *ABS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk924", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 925, "title": "Outdoor A/C or Heat Pump *ABS", "date": "05/15/2016", "time": "6:24 pm", "chk": { "isDisabled": false, "id": "chk926", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        }
                    ]
                },
                {
                    "categoryId": 6,
                    "title": "Plumbing System",
                    "date": "7/15/2011",
                    "time": "7:35 am",
                    "comment": null,
                    "firstDetailName": "Items",
                    get firstDetailCount() {
                        return this.categoryItems.length;
                    },
                    "chk": {
                        "isDisabled": false,
                        "id": "chkCategories4",
                        "hideLabel": true,
                        "useCircles": true,
                        "isChecked": false
                    },
                    "categoryItems": [
                        {
                            "categoryItemId": 1077,
                            "title": "Water Supply",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:46 pm",
                            "chk": { "isDisabled": false, "id": "chk1078", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 1079, "title": "Municipal", "date": "05/15/2016", "time": "6:46 pm", "chk": { "isDisabled": false, "id": "chk1080", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1081, "title": "Well", "date": "05/15/2016", "time": "6:46 pm", "chk": { "isDisabled": false, "id": "chk1082", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1083, "title": "Private", "date": "05/15/2016", "time": "6:46 pm", "chk": { "isDisabled": false, "id": "chk1084", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1085, "title": "w/Water Softener", "date": "05/15/2016", "time": "6:46 pm", "chk": { "isDisabled": false, "id": "chk1086", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1087, "title": "w/Pressure Regulator", "date": "05/15/2016", "time": "6:46 pm", "chk": { "isDisabled": false, "id": "chk1088", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1095,
                            "title": "Waste Disposal",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:48 pm",
                            "chk": { "isDisabled": false, "id": "chk1096", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 1097, "title": "Municipal", "date": "05/15/2016", "time": "6:48 pm", "chk": { "isDisabled": false, "id": "chk1098", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1099, "title": "Septic System", "date": "05/15/2016", "time": "6:48 pm", "chk": { "isDisabled": false, "id": "chk1100", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1101, "title": "Have Local Health Officials Check for Compliance with Local Regulations?", "date": "05/15/2016", "time": "6:48 pm", "chk": { "isDisabled": false, "id": "chk1102", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1107,
                            "title": "Water Piping",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:50 pm",
                            "chk": { "isDisabled": false, "id": "chk1108", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 1109, "title": "Copper", "date": "05/15/2016", "time": "6:50 pm", "chk": { "isDisabled": false, "id": "chk1110", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1111, "title": "Galvanized", "date": "05/15/2016", "time": "6:50 pm", "chk": { "isDisabled": false, "id": "chk1112", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1113, "title": "PVC/CPVC", "date": "05/15/2016", "time": "6:50 pm", "chk": { "isDisabled": false, "id": "chk1114", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1115, "title": "Brass", "date": "05/15/2016", "time": "6:50 pm", "chk": { "isDisabled": false, "id": "chk1116", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1117, "title": "PB", "date": "05/15/2016", "time": "6:50 pm", "chk": { "isDisabled": false, "id": "chk1118", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1119, "title": "PEX", "date": "05/15/2016", "time": "6:50 pm", "chk": { "isDisabled": false, "id": "chk1120", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1125,
                            "title": "Water Pressure",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:53 pm",
                            "chk": { "isDisabled": false, "id": "chk1126", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 1127, "title": "Psi (Static):_", "date": "05/15/2016", "time": "6:53 pm", "chk": { "isDisabled": false, "id": "chk1128", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1129, "title": "Psi (Tub Flowing):_", "date": "05/15/2016", "time": "6:53 pm", "chk": { "isDisabled": false, "id": "chk1130", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1131, "title": "Not Measured", "date": "05/15/2016", "time": "6:53 pm", "chk": { "isDisabled": false, "id": "chk1132", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1139,
                            "title": "DWV Piping",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:55 pm",
                            "chk": { "isDisabled": false, "id": "chk1140", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 1141, "title": "Cast Iron", "date": "05/15/2016", "time": "6:55 pm", "chk": { "isDisabled": false, "id": "chk1142", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1143, "title": "Copper", "date": "05/15/2016", "time": "6:55 pm", "chk": { "isDisabled": false, "id": "chk1144", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1145, "title": "PVC", "date": "05/15/2016", "time": "6:55 pm", "chk": { "isDisabled": false, "id": "chk1146", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1147, "title": "ABS", "date": "05/15/2016", "time": "6:55 pm", "chk": { "isDisabled": false, "id": "chk1148", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1149, "title": "Lead", "date": "05/15/2016", "time": "6:55 pm", "chk": { "isDisabled": false, "id": "chk1150", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1151, "title": "Galvanized", "date": "05/15/2016", "time": "6:55 pm", "chk": { "isDisabled": false, "id": "chk1152", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1155,
                            "title": "Hot Water Heater - Type",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:57 pm",
                            "chk": { "isDisabled": false, "id": "chk1156", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 1157, "title": "Gas", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1158", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1159, "title": "Electric", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1160", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1161, "title": "Fuel Oil", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1162", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1163, "title": "LP Gas", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1164", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1165, "title": "Integral w/ Heating System", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1166", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1167, "title": "Manufacturer:_", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1168", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1169, "title": "Approximate Age:_", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1170", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1171, "title": "Capacity:_ (Gallons)", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1172", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1173, "title": "w/Expansion Tank", "date": "05/15/2016", "time": "6:57 pm", "chk": { "isDisabled": false, "id": "chk1174", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1177,
                            "title": "Bathrooms",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:59 pm",
                            "chk": { "isDisabled": false, "id": "chk1178", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "categoryItemOptions": [{ "categoryItemOptionId": 1179, "title": "Number of Bathrooms:_", "date": "05/15/2016", "time": "6:59 pm", "chk": { "isDisabled": false, "id": "chk1180", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1181, "title": "Functional Flow", "date": "05/15/2016", "time": "6:59 pm", "chk": { "isDisabled": false, "id": "chk1182", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1183, "title": "Functional Drainage", "date": "05/15/2016", "time": "6:59 pm", "chk": { "isDisabled": false, "id": "chk1184", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1027,
                            "title": "Component Items",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "6:44 pm",
                            "chk": { "isDisabled": false, "id": "chk1028", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "isComponentList": true,
                            "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"],
                            "categoryItemOptions": [{ "categoryItemOptionId": 1029, "title": "Interior Water Piping", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1030", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1031, "title": "BFP/Vacuum Breakers", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1032", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1033, "title": "Piping Insulation", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1034", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1035, "title": "Interior DWV Piping", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1036", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1037, "title": "Interior Gas Piping", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1038", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1039, "title": "Interior CSST Gas Lines", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1040", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1041, "title": "Water Heater", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1042", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1043, "title": "w/Safety Relief Valve", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1044", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1045, "title": "Water Heater Flue", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1046", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1047, "title": "Shut-off Valves", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1048", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1049, "title": "Laundry Tub", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1050", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1051, "title": "Floor Drains", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1052", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1053, "title": "Clean-outs", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1054", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1055, "title": "Bathroom Faucets/Fixtures", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1056", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1057, "title": "Tub and Shower Fixtures", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1058", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1059, "title": "Water Closets", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1060", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1061, "title": "Bidet", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1062", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1063, "title": "Kitchen Faucet", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1064", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1065, "title": "Garbage Disposal", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1066", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1067, "title": "Bar Sink", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1068", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1069, "title": "Sanitary Sump Pump", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1070", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1071, "title": "Frost Proof Hose Bibs", "date": "05/15/2016", "time": "6:44 pm", "chk": { "isDisabled": false, "id": "chk1072", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        }
                    ]
                },
                {
                    "categoryId": 7,
                    "title": "Electrical System",
                    "date": "7/15/2011",
                    "time": "7:35 am",
                    "comment": null,
                    "firstDetailName": "Items",
                    get firstDetailCount() {
                        return this.categoryItems.length;
                    },
                    "chk": {
                        "isDisabled": false,
                        "id": "chkCategories4",
                        "hideLabel": true,
                        "useCircles": true,
                        "isChecked": false
                    },
                    "categoryItems": [
                        {
                            "categoryItemId": 1236,
                            "title": "Main Service to Building",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "7:10 pm",
                            "chk": { "isDisabled": false, "id": "chk1237", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "isComponentList": true,
                            "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"],
                            "categoryItemOptions": [{ "categoryItemOptionId": 1238, "title": "Overhead", "date": "05/15/2016", "time": "7:10 pm", "chk": { "isDisabled": false, "id": "chk1239", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1240, "title": "Underground", "date": "05/15/2016", "time": "7:10 pm", "chk": { "isDisabled": false, "id": "chk1241", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1242, "title": "Copper", "date": "05/15/2016", "time": "7:10 pm", "chk": { "isDisabled": false, "id": "chk1243", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1244, "title": "Aluminum", "date": "05/15/2016", "time": "7:10 pm", "chk": { "isDisabled": false, "id": "chk1245", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1251,
                            "title": "Service Entrance Panel",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "7:12 pm",
                            "chk": { "isDisabled": false, "id": "chk1252", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "isComponentList": true,
                            "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"],
                            "categoryItemOptions": [{ "categoryItemOptionId": 1253, "title": "Amps Service:_", "date": "05/15/2016", "time": "7:12 pm", "chk": { "isDisabled": false, "id": "chk1254", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1255, "title": "120/240 Volt", "date": "05/15/2016", "time": "7:12 pm", "chk": { "isDisabled": false, "id": "chk1256", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1257, "title": "120 Volt", "date": "05/15/2016", "time": "7:12 pm", "chk": { "isDisabled": false, "id": "chk1258", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1259, "title": "Circuit Breakers", "date": "05/15/2016", "time": "7:12 pm", "chk": { "isDisabled": false, "id": "chk1260", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1261, "title": "Fuses", "date": "05/15/2016", "time": "7:12 pm", "chk": { "isDisabled": false, "id": "chk1262", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1263, "title": "Grounded to Water Pipe/Ground Rod", "date": "05/15/2016", "time": "7:12 pm", "chk": { "isDisabled": false, "id": "chk1264", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1265, "title": "Combination Service Entrance/Main Distribution Panel", "date": "05/15/2016", "time": "7:12 pm", "chk": { "isDisabled": false, "id": "chk1266", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1271,
                            "title": "Main Distribution Panel",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "7:14 pm",
                            "chk": { "isDisabled": false, "id": "chk1272", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "isComponentList": true,
                            "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"],
                            "categoryItemOptions": [{ "categoryItemOptionId": 1273, "title": "Amps. (approx.):_", "date": "05/15/2016", "time": "7:14 pm", "chk": { "isDisabled": false, "id": "chk1274", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1275, "title": "120/240 Volt", "date": "05/15/2016", "time": "7:14 pm", "chk": { "isDisabled": false, "id": "chk1276", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1277, "title": "120 Volt", "date": "05/15/2016", "time": "7:14 pm", "chk": { "isDisabled": false, "id": "chk1278", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1279, "title": "Circuit Breakers", "date": "05/15/2016", "time": "7:14 pm", "chk": { "isDisabled": false, "id": "chk1280", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1281, "title": "Fuses", "date": "05/15/2016", "time": "7:14 pm", "chk": { "isDisabled": false, "id": "chk1282", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1283, "title": "Grounded to Water Pipe/Ground Rod", "date": "05/15/2016", "time": "7:14 pm", "chk": { "isDisabled": false, "id": "chk1284", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1291,
                            "title": "Circuits/Disconnects",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "7:16 pm",
                            "chk": { "isDisabled": false, "id": "chk1292", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "isComponentList": true,
                            "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"],
                            "categoryItemOptions": [{ "categoryItemOptionId": 1293, "title": "No. of Disconnects to Cut All Power:_", "date": "05/15/2016", "time": "7:16 pm", "chk": { "isDisabled": false, "id": "chk1294", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1295, "title": "No. of 120 Volt Branch Circuits (approx.):_", "date": "05/15/2016", "time": "7:16 pm", "chk": { "isDisabled": false, "id": "chk1296", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1299,
                            "title": "240 Volt Circuits",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "7:18 pm",
                            "chk": { "isDisabled": false, "id": "chk1300", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "isComponentList": true,
                            "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"],
                            "categoryItemOptions": [{ "categoryItemOptionId": 1301, "title": "Heating", "date": "05/15/2016", "time": "7:18 pm", "chk": { "isDisabled": false, "id": "chk1302", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1303, "title": "Cooling", "date": "05/15/2016", "time": "7:18 pm", "chk": { "isDisabled": false, "id": "chk1304", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1305, "title": "Water Heater", "date": "05/15/2016", "time": "7:18 pm", "chk": { "isDisabled": false, "id": "chk1306", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1307, "title": "Dryer", "date": "05/15/2016", "time": "7:18 pm", "chk": { "isDisabled": false, "id": "chk1308", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1309, "title": "Kitchen", "date": "05/15/2016", "time": "7:18 pm", "chk": { "isDisabled": false, "id": "chk1310", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1317,
                            "title": "Internal Wiring",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "7:19 pm",
                            "chk": { "isDisabled": false, "id": "chk1318", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "isComponentList": true,
                            "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"],
                            "categoryItemOptions": [{ "categoryItemOptionId": 1319, "title": "Copper", "date": "05/15/2016", "time": "7:19 pm", "chk": { "isDisabled": false, "id": "chk1320", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1321, "title": "Copperclad", "date": "05/15/2016", "time": "7:19 pm", "chk": { "isDisabled": false, "id": "chk1322", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1323, "title": "Aluminum", "date": "05/15/2016", "time": "7:19 pm", "chk": { "isDisabled": false, "id": "chk1324", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1325, "title": "w/ Multiwire Branch Circuits", "date": "05/15/2016", "time": "7:19 pm", "chk": { "isDisabled": false, "id": "chk1326", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1327, "title": "Conduit", "date": "05/15/2016", "time": "7:19 pm", "chk": { "isDisabled": false, "id": "chk1328", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1329, "title": "Knob & Tube", "date": "05/15/2016", "time": "7:19 pm", "chk": { "isDisabled": false, "id": "chk1330", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1331, "title": "Nonmetallic Cable", "date": "05/15/2016", "time": "7:19 pm", "chk": { "isDisabled": false, "id": "chk1332", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1333, "title": "Armored Cable", "date": "05/15/2016", "time": "7:19 pm", "chk": { "isDisabled": false, "id": "chk1334", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1341,
                            "title": "General Comments",
                            "comment": null,
                            "firstDetailName": "Items",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "date": "05/15/2016",
                            "time": "7:21 pm",
                            "chk": { "isDisabled": false, "id": "chk1342", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "isComponentList": true,
                            "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"],
                            "categoryItemOptions": [{ "categoryItemOptionId": 1343, "title": "Panel Knockouts not Protected", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1344", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1345, "title": "Wire Splices not Installed in Junction Boxes", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1346", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1347, "title": "Double-Tapping of Fuses/Breakers", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1348", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1349, "title": "Wiring jury-rigged across Attic/Basement Joists", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1350", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1351, "title": "Oversized Fuses/Breakers", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1352", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1353, "title": "GFCI's are not Installed in all \"Wet\" Areas", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1354", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1355, "title": "Junction Boxes without Covers", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1356", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1357, "title": "Common Grounds/Neutrals in Sub-panels", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1358", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1359, "title": "Circuits are not all Labeled", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1360", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1361, "title": "Wiring is exposed along garage/basement/interior walls", "date": "05/15/2016", "time": "7:21 pm", "chk": { "isDisabled": false, "id": "chk1362", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        },
                        {
                            "categoryItemId": 1195,
                            "title": "Component Items",
                            "date": "05/15/2016",
                            "time": "7:09 pm",
                            "chk": { "isDisabled": false, "id": "chk1196", "hideLabel": true, "useCircles": true, "isChecked": false },
                            "isComponentList": true,
                            "comment": null,
                            "firstDetailName": "Options",
                            get firstDetailCount() {
                                return this.categoryItemOptions.length;
                            },
                            "componentList": ["Acceptable", "Marginal", "Unsatisfactory", "Not Operational"],
                            "categoryItemOptions": [{ "categoryItemOptionId": 1197, "title": "Main Service to Building", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1198", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1199, "title": "Exterior Wiring", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1200", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1201, "title": "Garage Wiring", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1202", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1203, "title": "Service Entrance Panel", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1204", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1205, "title": "Main Distribution Panel", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1206", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1207, "title": "Interior Wiring", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1208", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1209, "title": "Light Fixtures", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1210", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1211, "title": "Wall Switches", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1212", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1213, "title": "Receptacles (3-prong)", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1214", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1215, "title": "Receptacles (2-prong)", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1216", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1217, "title": "Polarity/Proper Ground", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1218", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1219, "title": "Water Meter Ground Jumper", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1220", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1221, "title": "GFCI's", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1222", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1223, "title": "AFCI's", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1224", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1225, "title": "Sub-panel No. 1", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1226", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1227, "title": "Sub-panel No. 2", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1228", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }, { "categoryItemOptionId": 1229, "title": "Sub-panel No. 3", "date": "05/15/2016", "time": "7:09 pm", "chk": { "isDisabled": false, "id": "chk1230", "hideLabel": true, "useCircles": true, "isChecked": false }, "componentItemValue": null, "isSelected": null, "comment": null, "value": null }]
                        }
                    ]
                }
            ]
        },
        {
            "templateId": 2,
            "title": "Griffen's Template",
            "date": "5/5/2008",
            "time": "5:05 pm",
            "comment": null,
            "firstDetailName": "Inspections",
            "firstDetailCount": "33",
            "secondDetailName": "Categories",
            "secondDetailCount": "55",
            "chk": {
                "isDisabled": false,
                "id": "chk2",
                "label": "Template",
                "hideLabel": true,
                "useCircles": true,
                "isChecked": false
            }
        },
        {
            "templateId": 3,
            "title": "Template for the fun of it",
            "date": "5/15/2011",
            "time": "5:35 am",
            "comment": null,
            "firstDetailName": "Inspections",
            "firstDetailCount": "2133",
            "secondDetailName": "Categories",
            "secondDetailCount": "545",
            "chk": {
                "isDisabled": false,
                "id": "chk3",
                "label": "Template",
                "hideLabel": true,
                "useCircles": true,
                "isChecked": false
            }
        }
    ],
    "inspections": [
    ]
};


