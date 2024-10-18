import classic from '../../assets/img/classic.jpg';
import massageBukkal from '../../assets/img/massage-bukol.jpg';
import relax from '../../assets/img/relax.jpg';
import classicFace from '../../assets/img/classicFace.webp';
import faceBlack from '../../assets/img/face-black.jpg';
import face from '../../assets/img/face.jpg';
import body from '../../assets/img/body.jpg';
import bodyBlack from '../../assets/img/body_black.jpg';
import fix from '../../assets/img/fix.jpg';
import fixBlack from '../../assets/img/fix_black.jpg';

export type Block = {
  id: number;
  src: string;
  face: string;
  alt: string;
  modalCards: number[];
};

export const blocks: Block[] = [
  { id: 1, src: faceBlack, face: face, alt: 'лицо', modalCards: [1, 2, 3, 4] },
  { id: 2, src: bodyBlack, face: body, alt: 'тело', modalCards: [3, 4] },
  {
    id: 3,
    src: fixBlack,
    face: fix,
    alt: 'коррекция фигуры',
    modalCards: [1, 4],
  },
];

export type ModalCard = {
  id: number;
  imgSrc: string;
  title: string;
  alt: string;
  description: string;
  benefit?: string[];
};

export const modalCards: ModalCard[] = [
  {
    id: 1,
    imgSrc: classicFace,
    title: 'Классический',
    alt: 'лицо',
    description: `
        Эффективен для улучшения общего вида кожи, предупреждения преждевременного старения,
        устранения сухости кожи, уменьшения выраженности морщин, устранения складок, борозд,
        избавления от отёчности, усиление лимфодренажной функции, снятия мышечного напряжения,
        мягкой стимуляции нервных окончаний, что способствует быстрому восстановлению тканей
        и оказывает положительное психоэмоциональное действие.
        <br />
        <strong>В сеанс входит: </strong>
        демакияж, массаж, тонизация и нанесение завершающего средства.
      `,
    benefit: ['Омоложение', 'Подтяжка'],
  },
  {
    id: 2,
    imgSrc: massageBukkal,
    title: 'Скульптурно-буккальный',
    alt: 'лицо',
    description: `
      Эффективная методика по восстановлению естественного мышечного корсета лица, 
      <br />
      <strong>Данный массаж обеспечивает: </strong>
      устранение отёчности, коррекцию морщин, лифтинг, коррекцию носогубных складок, устранение «второго» подбородка.
      `,
    benefit: ['Омоложение', 'Подтяжка'],
  },
  {
    id: 3,
    imgSrc: relax,
    title: 'Расслабляющий',
    alt: 'лицо',
    description: `
      Направлен на снятие напряжения и стресса, стимулирование выработки коллагена и эластина.
      <br />
      <strong>Целью данного массажа</strong>
      является максимальное расслабление и достижение состояния психоэмоциональной разгрузки. 
      <br />
      Релакс массаж лица может быть проведен как самостоятельная процедура, так и включен в комплексные программы ухода.
      `,
    benefit: ['Омоложение', 'Подтяжка', 'что угодно'],
  },
  {
    id: 4,
    imgSrc: classic,
    title: 'ewq',
    alt: 'тело',
    description: `
        Эффективен для улучшения общего вида кожи, предупреждения преждевременного старения,
        устранения сухости кожи, уменьшения выраженности морщин, устранения складок, борозд,
        избавления от отёчности, усиление лимфодренажной функции, снятия мышечного напряжения,
        мягкой стимуляции нервных окончаний, что способствует быстрому восстановлению тканей
        и оказывает положительное психоэмоциональное действие.
        <br />
        <strong>В сеанс входит: </strong>
        демакияж, массаж, тонизация и нанесение завершающего средства.
      `,
  },
  {
    id: 5,
    imgSrc: classic,
    title: 'qwe',
    alt: 'тело',
    description: `
        Эффективен для улучшения общего вида кожи, предупреждения преждевременного старения,
        устранения сухости кожи, уменьшения выраженности морщин, устранения складок, борозд,
        избавления от отёчности, усиление лимфодренажной функции, снятия мышечного напряжения,
        мягкой стимуляции нервных окончаний, что способствует быстрому восстановлению тканей
        и оказывает положительное психоэмоциональное действие.
        <br />
        <strong>В сеанс входит: </strong>
        демакияж, массаж, тонизация и нанесение завершающего средства.
      `,
  },
];
