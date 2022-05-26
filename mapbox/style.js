
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleSatellite_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "MeanOrganicCarbon15to30cm_1": {
            "type": "geojson",
            "data": json_MeanOrganicCarbon15to30cm_1
        }
                    ,
        "MeanOrganicCarbon5to15cm_2": {
            "type": "geojson",
            "data": json_MeanOrganicCarbon5to15cm_2
        }
                    ,
        "MeanOrganicCarbon0to5cm_3": {
            "type": "geojson",
            "data": json_MeanOrganicCarbon0to5cm_3
        }
                    ,
        "OrganicCarbonByPropertyArea_4": {
            "type": "geojson",
            "data": json_OrganicCarbonByPropertyArea_4
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleSatellite_0_0",
            "type": "raster",
            "source": "GoogleSatellite_0"
        },
        {
            "id": "lyr_MeanOrganicCarbon15to30cm_1_0",
            "type": "fill",
            "source": "MeanOrganicCarbon15to30cm_1",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'mean15_30'], 0.0], ['<=', ['get', 'mean15_30'], 0.547057]], 1.0, ['all', ['>', ['get', 'mean15_30'], 0.547057], ['<=', ['get', 'mean15_30'], 0.655615]], 1.0, ['all', ['>', ['get', 'mean15_30'], 0.655615], ['<=', ['get', 'mean15_30'], 0.731334]], 1.0, ['all', ['>', ['get', 'mean15_30'], 0.731334], ['<=', ['get', 'mean15_30'], 0.802732]], 1.0, ['all', ['>', ['get', 'mean15_30'], 0.802732], ['<=', ['get', 'mean15_30'], 4.914072]], 1.0, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'mean15_30'], 0.0], ['<=', ['get', 'mean15_30'], 0.547057]], '#ffffb2', ['all', ['>', ['get', 'mean15_30'], 0.547057], ['<=', ['get', 'mean15_30'], 0.655615]], '#fecc5c', ['all', ['>', ['get', 'mean15_30'], 0.655615], ['<=', ['get', 'mean15_30'], 0.731334]], '#fd8d3c', ['all', ['>', ['get', 'mean15_30'], 0.731334], ['<=', ['get', 'mean15_30'], 0.802732]], '#f03b20', ['all', ['>', ['get', 'mean15_30'], 0.802732], ['<=', ['get', 'mean15_30'], 4.914072]], '#bd0026', '#ffffff']}
        }
,
        {
            "id": "lyr_MeanOrganicCarbon5to15cm_2_0",
            "type": "fill",
            "source": "MeanOrganicCarbon5to15cm_2",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'mean5_15'], 0.0], ['<=', ['get', 'mean5_15'], 0.714]], 1.0, ['all', ['>', ['get', 'mean5_15'], 0.714], ['<=', ['get', 'mean5_15'], 0.928]], 1.0, ['all', ['>', ['get', 'mean5_15'], 0.928], ['<=', ['get', 'mean5_15'], 1.061]], 1.0, ['all', ['>', ['get', 'mean5_15'], 1.061], ['<=', ['get', 'mean5_15'], 1.319]], 1.0, ['all', ['>', ['get', 'mean5_15'], 1.319], ['<=', ['get', 'mean5_15'], 5.685]], 1.0, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'mean5_15'], 0.0], ['<=', ['get', 'mean5_15'], 0.714]], '#ffffb2', ['all', ['>', ['get', 'mean5_15'], 0.714], ['<=', ['get', 'mean5_15'], 0.928]], '#fecc5c', ['all', ['>', ['get', 'mean5_15'], 0.928], ['<=', ['get', 'mean5_15'], 1.061]], '#fd8d3c', ['all', ['>', ['get', 'mean5_15'], 1.061], ['<=', ['get', 'mean5_15'], 1.319]], '#f03b20', ['all', ['>', ['get', 'mean5_15'], 1.319], ['<=', ['get', 'mean5_15'], 5.685]], '#bd0026', '#ffffff']}
        }
,
        {
            "id": "lyr_MeanOrganicCarbon0to5cm_3_0",
            "type": "fill",
            "source": "MeanOrganicCarbon0to5cm_3",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'mean0_5'], 0.0], ['<=', ['get', 'mean0_5'], 0.819179]], 1.0, ['all', ['>', ['get', 'mean0_5'], 0.819179], ['<=', ['get', 'mean0_5'], 1.072826]], 1.0, ['all', ['>', ['get', 'mean0_5'], 1.072826], ['<=', ['get', 'mean0_5'], 1.245817]], 1.0, ['all', ['>', ['get', 'mean0_5'], 1.245817], ['<=', ['get', 'mean0_5'], 1.574832]], 1.0, ['all', ['>', ['get', 'mean0_5'], 1.574832], ['<=', ['get', 'mean0_5'], 6.204702]], 1.0, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'mean0_5'], 0.0], ['<=', ['get', 'mean0_5'], 0.819179]], '#ffffb2', ['all', ['>', ['get', 'mean0_5'], 0.819179], ['<=', ['get', 'mean0_5'], 1.072826]], '#fecc5c', ['all', ['>', ['get', 'mean0_5'], 1.072826], ['<=', ['get', 'mean0_5'], 1.245817]], '#fd8d3c', ['all', ['>', ['get', 'mean0_5'], 1.245817], ['<=', ['get', 'mean0_5'], 1.574832]], '#f03b20', ['all', ['>', ['get', 'mean0_5'], 1.574832], ['<=', ['get', 'mean0_5'], 6.204702]], '#bd0026', '#ffffff']}
        }
,
        {
            "id": "lyr_OrganicCarbonByPropertyArea_4_0",
            "type": "fill",
            "source": "OrganicCarbonByPropertyArea_4",
            "layout": {},
            "paint": {'fill-opacity': ['case', ['all', ['>=', ['get', 'pcttotcarb'], 0.0], ['<=', ['get', 'pcttotcarb'], 0.021]], 1.0, ['all', ['>', ['get', 'pcttotcarb'], 0.021], ['<=', ['get', 'pcttotcarb'], 0.034]], 1.0, ['all', ['>', ['get', 'pcttotcarb'], 0.034], ['<=', ['get', 'pcttotcarb'], 0.041]], 1.0, ['all', ['>', ['get', 'pcttotcarb'], 0.041], ['<=', ['get', 'pcttotcarb'], 0.058]], 1.0, ['all', ['>', ['get', 'pcttotcarb'], 0.058], ['<=', ['get', 'pcttotcarb'], 41715.385]], 1.0, 0], 'fill-color': ['case', ['all', ['>=', ['get', 'pcttotcarb'], 0.0], ['<=', ['get', 'pcttotcarb'], 0.021]], '#ffffb2', ['all', ['>', ['get', 'pcttotcarb'], 0.021], ['<=', ['get', 'pcttotcarb'], 0.034]], '#fecc5c', ['all', ['>', ['get', 'pcttotcarb'], 0.034], ['<=', ['get', 'pcttotcarb'], 0.041]], '#fd8d3c', ['all', ['>', ['get', 'pcttotcarb'], 0.041], ['<=', ['get', 'pcttotcarb'], 0.058]], '#f03b20', ['all', ['>', ['get', 'pcttotcarb'], 0.058], ['<=', ['get', 'pcttotcarb'], 41715.385]], '#bd0026', '#ffffff']}
        }
],
}