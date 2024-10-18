import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './style/MassageTypes.module.scss';

import { modalCards, blocks, Block } from './modalCardsValue';
import { ModalCardComponent } from './ModalCard';
import { useIsMobile } from '../../media/MediaQueryProvider';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type ModalProps = {
  show: boolean;
  onClose: () => void;
  children: React.ReactNode;
  handleContainerClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleScroll2: any;
};

const Modal: React.FC<ModalProps> = ({
  show,
  onClose,
  children,
  handleContainerClick,
  handleScroll2,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalOverlay} onClick={handleContainerClick}>
      <div
        className={styles.modalContent}
        ref={modalRef}
        onScroll={handleScroll2}
      >
        {children}
      </div>
    </div>
  );
};

export const MassageTypes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedBlock, setSelectedBlock] = useState<Block | null>(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const [shouldScroll, setShouldScroll] = useState(false);
  const lastCardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
    setShouldScroll(true); // Устанавливаем флаг для скроллинга
  };

  useEffect(() => {
    if (shouldScroll && lastCardRef.current) {
      lastCardRef.current.scrollIntoView({ behavior: 'smooth' });
      setShouldScroll(false); // Сбрасываем флаг после скроллинга
    }
  }, [visibleCount, shouldScroll]);

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove(`${styles.no_scroll}`);
  };

  const handleMouseEnter = (index: number) => setHoveredIndex(index);
  const handleMouseLeave = () => setHoveredIndex(null);

  const handleScroll2 = useCallback(() => {
    setTimeout(() => {
      setShowTooltip(false);
    }, 1000);
  }, []);

  const openModal = (block: Block) => {
    setSelectedBlock(block);
    setIsModalOpen(true);
    document.body.classList.add(styles.no_scroll);
    setVisibleCount(3);
    setShowTooltip(true);
  };

  const filteredModalCards = selectedBlock
    ? modalCards.filter((card) => selectedBlock.modalCards.includes(card.id))
    : [];

  const cardsToShow = filteredModalCards.slice(0, visibleCount);

  const handleContainerClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;

    // Проверяем, был ли клик внутри карточки или контейнера кнопки
    if (
      target.closest(`.${styles.block_modalCard}`) ||
      target.closest(`.${styles.container_button_more}`)
    ) {
      return;
    }

    closeModal();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {!isMobile && (
        <div className={styles.mainContainer}>
          <div className={styles.headerContainer}>
            <h1 className={styles.hederTitle}>Виды массажа</h1>
          </div>
          <div className={styles.block_img}>
            {blocks.map((block, index) => (
              <div key={block.id} className={styles.block_imgModal}>
                <img
                  onClick={() => openModal(block)}
                  src={hoveredIndex === index ? block.face : block.src}
                  alt=""
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={styles.transition_image}
                />
                <span
                  onClick={() => openModal(block)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={styles.block_textModal}
                >
                  <p className={styles.block_textTitle}>{block.alt}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      {isMobile && (
        <div className={styles.mainContainer}>
          <div className={styles.headerContainer}>
            <h1 className={styles.hederTitle}>Виды массажа</h1>
          </div>
          <Slider {...settings}>
            {blocks.map((block, index) => (
              <div key={block.id} className={styles.block_imgModal}>
                <img
                  onClick={() => openModal(block)}
                  src={hoveredIndex === index ? block.face : block.src}
                  alt=""
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                />
                <span
                  onClick={() => openModal(block)}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  className={styles.block_textModal}
                >
                  <p className={styles.block_textTitle}>{block.alt}</p>
                </span>
              </div>
            ))}
          </Slider>
        </div>
      )}
      <div>
        <Modal
          show={isModalOpen}
          onClose={closeModal}
          handleContainerClick={handleContainerClick}
          handleScroll2={handleScroll2}
        >
          <div className={styles.cl_btn_3} onClick={closeModal}>
            <span className={styles.top}></span>
            <span className={styles.bot}></span>
          </div>
          {showTooltip && isMobile && (
            <div className={styles.arrow_7}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          <div className={styles.block_cards}>
            {cardsToShow.map((card, index) => (
              <div
                key={card.id}
                ref={index === cardsToShow.length - 1 ? lastCardRef : null}
                className={styles.block_modalCard}
              >
                <ModalCardComponent card={card} />
              </div>
            ))}
          </div>
          <div className={styles.container_button_more}>
            {visibleCount < filteredModalCards.length && (
              <button className={styles.button_more} onClick={handleShowMore}>
                Ещё
              </button>
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default MassageTypes;
