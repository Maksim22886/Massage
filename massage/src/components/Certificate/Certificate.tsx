import React from 'react';
import { CertificateCarousel } from './CertificateCarousel';
import Sertificate from '../../assets/img/sertificate.jpg';
import Sertificate2 from '../../assets/img/sertificate2.jpg';
import Sertificate3 from '../../assets/img/sertificate3.jpg';
import Sertificate4 from '../../assets/img/sertificate4.jpg';
import Sertificate5 from '../../assets/img/sertificate5.jpg';
import Sertificate6 from '../../assets/img/sertificate6.jpg';
import Sertificate7 from '../../assets/img/sertificate7.jpg';
import Sertificate8 from '../../assets/img/sertificate8.jpg';
import Sertificate9 from '../../assets/img/sertificate9.jpg';
import Sertificate10 from '../../assets/img/sertificate10.jpg';
import Sertificate11 from '../../assets/img/sertificate11.jpg';
import Sertificate12 from '../../assets/img/sertificate12.jpg';

export const Certificate = () => {
  const certificates = [
    { thumbnail: Sertificate, fullSize: Sertificate },
    { thumbnail: Sertificate2, fullSize: Sertificate2 },
    { thumbnail: Sertificate3, fullSize: Sertificate3 },
    { thumbnail: Sertificate4, fullSize: Sertificate4 },
    { thumbnail: Sertificate5, fullSize: Sertificate5 },
    { thumbnail: Sertificate6, fullSize: Sertificate6 },
    { thumbnail: Sertificate7, fullSize: Sertificate7 },
    { thumbnail: Sertificate8, fullSize: Sertificate8 },
    { thumbnail: Sertificate9, fullSize: Sertificate9 },
    { thumbnail: Sertificate10, fullSize: Sertificate10 },
    { thumbnail: Sertificate11, fullSize: Sertificate11 },
    { thumbnail: Sertificate12, fullSize: Sertificate12 },
  ];

  return (
    <div>
      <h1>Наши Сертификаты</h1>
      <CertificateCarousel certificates={certificates} />
    </div>
  );
};
