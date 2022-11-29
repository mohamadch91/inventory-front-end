import { useEffect, useState } from "react";
import { Translation,Trans } from "react-i18next";

import {
  MapContainer,
  useMap,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
// import tileLayer from '../util/tileLayer';
// import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
const center = [52.22977, 21.01178];
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});
function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
      map.invalidateSize();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
const GetCoordinates = (props) => {
  const map = useMap();
  const handleClick = (e) => {
    props.change(e);
  };

  useEffect(() => {
    if (!map) return;
    const info = L.DomUtil.create("div", "legend");

    const positon = L.Control.extend({
      options: {
        position: "bottomleft",
      },

      onAdd: function () {
  
         
          <Translation>
            {(t, { i18n }) =>
              info.textContent=t("Click on map too add location")
            }
          </Translation>
        
        return info;
      },
    });
    map.on("load", (e) => {
      console.log("salam");
    });
    map.on("click", (e) => {
      window.navigator.geolocation.getCurrentPosition(console.log, console.log);
      info.textContent = e.latlng;
      handleClick(e);
    });

    map.addControl(new positon());
  }, [map]);

  return null;
};

const MapWrapper = (props) => {
  const [map, setMap] = useState(null);
  const [Current, sercurrent] = useState([]);
  const [x1, setx1] = useState(
    JSON.parse(localStorage.getItem("country")) === null
      ? 35
      : JSON.parse(localStorage.getItem("country"))["mainlocation"] ===
        undefined
      ? 35
      : JSON.parse(localStorage.getItem("country"))
          ["mainlocation"]?.split("(")[1]
          ?.split(",")[0]
  );
  const [x2, setx2] = useState(
    JSON.parse(localStorage.getItem("country")) === null
      ? 51
      : JSON.parse(localStorage.getItem("country"))["mainlocation"] ===
        undefined
      ? 51
      : JSON.parse(localStorage.getItem("country"))
          ["mainlocation"]?.split(",")[1]
          ?.split(")")[0]
  );

  const handl = (e) => {
    props.handleChange(e);
    setMap(e.latlng);
  };
  useEffect(() => {
    const country =
      JSON.parse(localStorage.getItem("country")) === null
        ? undefined
        : JSON.parse(localStorage.getItem("country"))["mainlocation"];
    console.log(country);
    let ans = [];
    if (country === undefined) {
      ans = [50, 50];
    } else {
      console.log(country);
      let temp = country?.split("(")[1]?.split(",")[0];
      let temp1 = country?.split("(")[1]?.split(",")[1]?.split(")")[0];
      if (temp === undefined || temp1 === undefined) {
        setx1(35);
        setx2(51);
      } else {
        setx1(parseFloat(temp));
        setx2(parseFloat(temp1));
        setMap([parseFloat(temp), parseFloat(temp1)]);
      }
    }
    console.log(ans);
    sercurrent(ans);
  }, []);
  return (
    <div className="map">
      {Current !== null && x1 && x2 && (
        <MapContainer
          center={[x1, x2]}
          zoom={5}
          scrollWheelZoom={true}
          style={{ width: "100%", height: "450px", zIndex: "1" }}

          //   onClick={this.handlemapclick}
        >
          <TileLayer
            {...{
              url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
              width: 500,
            }}
          />

          <GetCoordinates change={handl} />
          <>
            {map && (
              <Marker position={map} draggable={true}>
                <Popup position={map}>
                  Current location: <pre>{JSON.stringify(map, null, 2)}</pre>
                </Popup>
              </Marker>
            )}
          </>
          <LocationMarker
            className="salam"
            style={{ width: "100px !important", zIndex: "2" }}
          />
        </MapContainer>
      )}
      <button
        className="btn btn-primary mt-2 w-50"
        onClick={(e) => {
          e.preventDefault();
          navigator.geolocation.getCurrentPosition(
            (pos) => {
              const { latitude, longitude } = pos.coords;
              console.log(pos);
              const data = {
                latlng: {
                  lat: latitude,
                  lng: longitude,
                },
              };
              setMap(data.latlng);
              handl(data);
            },
            () => {},
            { enableHighAccuracy: true }
          );
        }}
      >
        <Trans>Get current location</Trans>
      </button>
    </div>
  );
};

export default MapWrapper;
