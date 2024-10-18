import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './style/CertificateCarousel.module.scss';
import { useIsMobile } from '../../media/MediaQueryProvider';
import { ReactComponent as Arrow } from '../../assets/img/select-arrow.svg';

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

  const isMobile = useIsMobile();

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCertificate(null);
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <>
      <div className={styles.carouselWrapper}>
      <Arrow className={styles.arrow} onClick={handlePrevClick} />
        <div className={styles.gallery}>
          <ul
            className={styles.carouselList}
            style={{
              transform: isMobile
                ? `translateX(-${currentIndex * 222}px)`
                : `translateX(-${currentIndex * 190}px)`,
              width: `${certificates.length * 220}px`,
            }}
          >
            {certificates.map((certificate, index) => (
              <li key={index} className={styles.carouselItem}>
                <div
                  className={styles.certificateContainer}
                  onClick={() => openModal(certificate)}
                >
                  <img
                    src={certificate.thumbnail}
                    alt={`Certificate ${index + 1}`}
                    className={styles.certificateImage}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Arrow className={styles.arrow2} onClick={handleNextClick} />

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
      <div className={styles.progressBarContainer}>
        <div
          className={styles.progressBar}
          style={{
            width: `${(currentIndex / (certificates.length - 1)) * 100}%`,
          }}
        ></div>
      </div>
    </>
  );
};
