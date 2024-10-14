import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './style/CertificateCarousel.module.scss'

interface Certificate {
  thumbnail: string;
  fullSize: string;
}

interface CertificateCarouselProps {
  certificates: Certificate[];
}

export const CertificateCarousel: React.FC<CertificateCarouselProps> = ({
  certificates,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <div className="carousel">
      {certificates.map((certificate, index) => (
        <div
          key={index}
          style={{
            width: '100px',
            height: '100px',
            overflow: 'hidden',
            margin: '10px',
            display: 'inline-block',
            cursor: 'pointer',
          }}
          onClick={() => openModal(certificate)}
        >
          <img
            src={certificate.thumbnail}
            alt={`Certificate ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      ))}

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        {selectedCertificate && (
          <img
            src={selectedCertificate.fullSize}
            alt="Selected Certificate"
            style={{ maxWidth: '100%', maxHeight: '80vh', cursor: 'pointer' }}
            onClick={closeModal}
          />
        )}
      </Modal>
    </div>
  );
};
