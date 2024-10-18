import React, { useEffect } from 'react';
import './style/Maps.scss';
import Icon from '../../assets/img/icon-map.svg';
import WhatsApp from '../../assets/img/whatsApp.svg';



declare global {
  interface Window {
    ymaps: any;
  }
}

function Maps(): JSX.Element {
  useEffect(() => {
    if (window.ymaps) {
      window.ymaps.ready(() => {
        const mapElement = document.getElementById('map');
        if (mapElement && !mapElement.dataset.initialized) {
          const map = new window.ymaps.Map('map', {
            center: [57.149626, 65.596285],
            zoom: 15,
            controls: ['routeButtonControl'],
          });

          const control = map.controls.get('routeButtonControl');

          control.routePanel.state.set({
            type: 'taxi',
            fromEnabled: false,
            from: [57.149626, 65.596285],
          });

          const placemark = new window.ymaps.Placemark(
            [57.149626, 65.596285],
            {
              balloonContentHeader: `<div style="font-size: 18px; font-weight: bold; color: #333;">
                                       Скульптор вашего тела
                                     </div>`,
              balloonContentBody: `
                                     <div style="display: flex; flex-direction: column; font-size: 14px; color: #555;">
                                       <p><strong>Адрес:</strong> 
                                         <a href="https://yandex.com.tr/harita/org/skulptor_vashego_tela/238287830447/?l=carparks&ll=65.596172%2C57.149334&z=17" target="_blank">
                                           ул. Мельникайте, 57/2, этаж 2
                                         </a>
                                       </p>
                                       <p style="display: flex; align-items: center;">
                                         <strong>Телефон:</strong> 
                                         <a href="tel:+79123896810">+7 (982)934-80-77</a>
                                         <a href="https://wa.me/79829348077" target="_blank" style="margin-left: 10px;">
                                           <img src="${WhatsApp}" alt="WhatsApp" style="width: 25px; height: 25px;" />
                                         </a>
                                       </p>
                                       <p>По предварительной записи по телефону, вайбер, ватсап</p>
                                     </div>
                                   
              `,
              balloonContentFooter: `<div style="text-align: right; font-size: 12px; color: #999;">
                                       Будем рады вас видеть!
                                     </div>`,
            },
            {
              iconLayout: 'default#image',
              iconImageHref: `${Icon}`,
              iconImageSize: [48, 48],
              iconImageOffset: [-15, -42],
            },
          );

          map.geoObjects.add(placemark);

          // Add click event listener to the map to close the balloon
          map.events.add('click', () => {
            placemark.balloon.close();
          });

          mapElement.dataset.initialized = 'true';

          const gototechLink = document.querySelector('.ymaps-2-1-79-gototech');
          if (gototechLink) {
            gototechLink.remove();
          }
          const gototechLink2 = document.querySelector(
            '.ymaps-2-1-79-copyright__content',
          );
          if (gototechLink2) {
            gototechLink2.remove();
          }
        }
      });
    }
  }, []);

  return (
    <div
      id="map"
      className="maps_block"
      style={{ width: '100%', height: '400px' }}
    ></div>
  );
}

export default Maps;
