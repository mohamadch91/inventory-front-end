import { useEffect,useState } from 'react';
import { MapContainer, useMap, TileLayer, Marker, Popup ,useMapEvents} from "react-leaflet";
import L from 'leaflet';
// import tileLayer from '../util/tileLayer';
// import "leaflet/dist/leaflet.css";
import './map.css'
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
  <></>
  );
}
const GetCoordinates = (props) => {
  const map = useMap();
    const handleClick = (e) => {
        props.change(e);
    }
   
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
    map.on("load", (e)=>{
console.log("salam")
    })
    map.on("click", (e) => {
        window.navigator.geolocation.getCurrentPosition(console.log, console.log);
      info.textContent = e.latlng;
        handleClick(e);
    });

    map.addControl(new positon());
  }, [map]);

  return null
};

const MapWrapper = (props) => {
    const [map, setMap] = useState(null);
    const [Current,sercurrent] = useState([])
    const [x1, setx1] = useState(
      parseFloat(
        JSON.parse(localStorage.getItem("country"))
          ["mainlocation"].split("(")[1]
          .split(",")[0]
      )
    );
    const [x2, setx2] = useState(
      parseFloat(
        JSON.parse(localStorage.getItem("country"))
          ["mainlocation"].split("(")[1].split(",")[1].split(")")[0]
      )
    );

    const handl = (e)=>{
        props.handleChange(e)
        setMap(e.latlng)
    }
    useEffect(
      ()=>{
        const country=JSON.parse(localStorage.getItem("country"))['mainlocation']
        console.log(country)
        let ans=[]
        if(country===undefined){
          ans=[50,50]
        }
        else{
          let temp=country.split("(")[1].split(",")[0]
          let temp1 = country.split("(")[1].split(",")[1].split(")")[0];
          ans=[temp,temp1]
          setx1(parseFloat(temp))
          setx2(parseFloat(temp1))

        }
        console.log(ans)
        sercurrent(ans)

      },[]
    )
  return (
    <div className="map" >
      {Current !== null && (
        <MapContainer
          center={[x1, x2]}
          zoom={10}
          scrollWheelZoom={true}
          style={{ width: "100%", height: "450px" }}

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
          <LocationMarker />
        </MapContainer>
      )}
    </div>
  );
};

export default MapWrapper;