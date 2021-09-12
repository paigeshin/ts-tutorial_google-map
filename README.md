# ts-tutorial_google-map

# Installation

```bash
npm install -g typescript ts-node
```

# Run ts

```bash
ts-node index.ts 
```

# Tutorial Overview

- Understand basic types in TS
- Function typing + annotations
- Type definition files
- Arrays in TS
- Modules systems
- Classes + Refresher on OOP
- Projects

# Run TS on browser

```bash
npm i -g parcel-bundler
```

# How to use `parcel-bundler`

```bash
parcel index.html
```

```TSX

/// <reference types="@types/google.maps" />

// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}



```
