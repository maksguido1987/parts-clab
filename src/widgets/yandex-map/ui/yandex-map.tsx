import getConfig from 'next/config';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';
import {
  YMaps,
  Map,
  ObjectManager,
  ObjectManagerFeatures,
} from 'react-yandex-maps';

const { publicRuntimeConfig } = getConfig();
const { YANDEX_MAP_KEY } = publicRuntimeConfig;

interface IProps {
  center: number[];
  zoom: number;
  className?: string;
}

/** Данные с сервера */
interface IPlacemarks {
  id: number;
  name: string;
  address: string;
  worktime: string;
  lat: string;
  lng: string;
  cityId: string;
}

/** Обработанные данные */
interface IMapPointData {
  type: string;
  id: number;
  geometry: {
    type: string;
    coordinates: number[];
  };
  properties: {
    balloonContentHeader: string;
    balloonContentBody: string;
    balloonContentFooter: string;
    hintContent: string;
  };
}

export const YandexMap: React.FC<IProps> = ({ center, zoom, className }) => {
  const [points, setPoints] = useState<{
    type: string;
    features: IMapPointData[];
  }>({
    type: 'FeatureCollection',
    features: [],
  });

  // useEffect(() => {
  //   const getPlacemarks = async () => {
  //     const response = await fetch('https://api.partsclub.ru/shipping/points');
  //     const data: IPlacemarks[] = await response.json();
  //     const newData = data.map((item: IPlacemarks) => {
  //       const { id, name, address, worktime, lat, lng } = item;
  //       return {
  //         type: 'Feature',
  //         id,
  //         geometry: { type: 'Point', coordinates: [+lat, +lng] },
  //         properties: {
  //           balloonContentHeader: `<h4>${name}</h4>`,
  //           balloonContentBody: `${address}`,
  //           balloonContentFooter: `${worktime}`,
  //           hintContent: name,
  //         },
  //       };
  //     });
  //     setPoints((prevState) => {
  //       return { ...prevState, features: newData };
  //     });
  //   };
  //   getPlacemarks();
  // }, []);

  return (
    <>
      <Script
        src={`https://api-maps.yandex.ru/2.1/?apikey=${YANDEX_MAP_KEY}&lang=ru_RU`}
        type='text/javascript'
      ></Script>
      <YMaps query={{ load: 'control.ZoomControl', lang: 'ru_RU' }}>
        <Map
          className={`${className ? className : ''} w-full`}
          defaultState={{
            center,
            zoom,
            controls: ['zoomControl'],
          }}
          modules={[
            'control.ZoomControl',
            'geoObject.addon.balloon',
            'geoObject.addon.hint',
          ]}
        >
          <ObjectManager
            options={{
              clusterize: true,
              gridSize: 70,
              clusterOpenBalloonOnClick: true,
              openBalloonOnClick: true,
            }}
            objects={{
              preset: 'islands#greenDotIcon',
            }}
            clusters={{
              preset: 'islands#greenClusterIcons',
            }}
            modules={[
              'objectManager.addon.objectsBalloon',
              'objectManager.addon.objectsHint',
            ]}
            features={points.features as ObjectManagerFeatures}
          />
        </Map>
      </YMaps>
    </>
  );
};
