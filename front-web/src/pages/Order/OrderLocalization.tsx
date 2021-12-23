import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import AsyncSelect from "react-select/async";
import { OrderLocationData } from "./types";
import { fetchLocalMapBox } from "./api";
import { useState } from "react";

const initialPosition = {
  lat: -22.8920565,
  lng: -47.2079821
}

type Place = {
  label?: string; // nome que vai aparecer no select
  value?: string;
  position: {
    lat: number,
    lng: number;
  };
}

type Props = {
  onChangeLocation: (location: OrderLocationData) => void;
}

const OrderLocalization = ({onChangeLocation} : Props) => {
  const [address, setAddress] = useState<Place>({
    position: initialPosition
  });

  //codigo do select
  const loadOptions = async (
    inputValue: string,
    callback: (places: Place[]) => void
  ) => {
    const response = await fetchLocalMapBox(inputValue);

    const places = response.data.features.map((item: any) => {
      return {
        label: item.place_name,
        value: item.place_name,
        position: {
          lat: item.center[1],
          lng: item.center[0],
        },
        place: item.place_name,
      };
    });

    callback(places);
  };

  const handleChangeSelect = (place: Place) => {
    setAddress(place);
    onChangeLocation({
      latitude: place.position.lat,
      longitude: place.position.lng,
      address: place.label!,
    });
  };

  return (
    <div className="orderLocalization-container">
      <div className="orderLocalization-content">
        <h3>Selecione onde o pedido deve ser entregue:</h3>
        <div className="orderLocalization-filter">
          <AsyncSelect 
              placeholder="Digite Um Endereço para Entregar o Pedido"
              className="orderLocalization-select-filter"
              loadOptions={loadOptions}
              onChange={value => handleChangeSelect(value as Place)}
              
          />
        </div>
        <MapContainer
          center = {address.position}
          zoom = {8}
          key={address.position.lat}
          scrollWheelZoom = {false}
          className = "map"
        >
          <TileLayer
            attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position = {address.position}>
            <Popup>
              {address.label}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default OrderLocalization;
