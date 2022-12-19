import { useEffect, useState } from "react";
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
// delete L.Icon.Default.prototype._getIconUrl;

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

  return position === null ? null : <></>;
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
        info.textContent = "Click on map too add location";
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
    const LeafIcon = L.Icon.extend({
      options: {},
    });

    const blueIcon = new LeafIcon({
        iconUrl:
          "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
      }),
      greenIcon = new LeafIcon({
        iconUrl:
          "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ecc71&chf=a,s,ee00FFFF",
      }),
      redIcon = new LeafIcon({
        iconUrl:
          "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2ccc22&chf=a,s,ee00FFFF",
      }),
      yellowIcon = new LeafIcon({
        iconUrl:
          "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|4acc71&chf=a,s,ee00FFFF",
      }),purpleIcon = new LeafIcon({
        iconUrl:
          "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|7dcc71&chf=a,s,ee00FFFF",
      }),blackIcon = new LeafIcon({
        iconUrl:
          "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|3ccc71&chf=a,s,ee00FFFF",
      }),roseIcon = new LeafIcon({
        iconUrl:
          "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2dcc71&chf=a,s,ee00FFFF",
      }),pupIcon = new LeafIcon({
        iconUrl:
          "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|2eee71&chf=a,s,ee00FFFF",
      });
    const levels = {
      1: blueIcon,
      2: greenIcon,
      3: redIcon,
      4: yellowIcon,
      5: purpleIcon,
      6: blackIcon,
      7: roseIcon,
      8: pupIcon,
    };
  const { locations } = props;
  const [map, setMap] = useState(null);
  const [Current, sercurrent] = useState([]);
    // const [icon, setIcon] = useState(blueIcon);

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
      }
    }
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

          {/* <GetCoordinates change={handl} /> */}
          <>
          {console.log(locations)}
            {locations?.map((e, i) => {
              return (
                <Marker key={i} position={e.cordinates} icon={levels[e.level] ?levels[e.level] :blueIcon } >
                  <Popup>
                    <span>{e.cordinates}</span>
                  </Popup>
                </Marker>
              );
            })}
          </>

          <LocationMarker />
        </MapContainer>
      )}
    </div>
  );
};

export default MapWrapper;
