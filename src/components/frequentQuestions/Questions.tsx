import { useState } from 'react';
import { ReactComponent as Arrow } from '../../assets/img/select-arrow.svg';
import classNames from 'classnames';
import styles from './style/Questions.module.scss';

export const Questions = () => {
  const [visibleTooltipId, setVisibleTooltipId] = useState(null);

  const handleToggleTooltip = (id: any) => {
    setVisibleTooltipId(visibleTooltipId === id ? null : id);
  };

  const cardQuestion = [
    {
      id: 1,
      title: 'Какие есть противопоказания для массажа?',
      description:
        'Обычно массаж не назначается больным с онкологическими заболеваниями, тяжелыми патологиями сердца и сосудов, почек и печени. Свежие травмы, раны, ожоги, высыпания на коже также являются противопоказаниями для процедуры. Сеанс необходимо отложить при повышении температуры тела, остром воспалительном процессе, а также во время менструации для женщин.',
    },
    {
      id: 2,
      title: 'Можно ли сочетать массаж с физическими нагрузками?',
      description:
        'Можно и нужно, поскольку массаж увеличивает эффективность тренировок и позволяет организму быстрее восстановиться после нагрузок. Сеанс спортивного массажа после тренировки может полностью убрать боли в мышцах, возникающие из-за застоя молочной кислоты',
    },
    {
      id: 3,
      title: 'Когда появятся результаты массажа?',
      description:
        'Это зависит от тяжести проблемы, но обычно к 4-5 сеансу результаты уже заметны. Что касается улучшения эмоционального состояния, то даже один сеанс уже эффективен',
    },
    {
      id: 4,
      title: 'Могу ли я поесть перед массажем?',
      description:
        'На массаж необходимо приходить на голодный желудок, либо через 2,5-3 часа после последнего приема пищи',
    },
    {
      id: 5,
      title: 'Можно ли делать массаж беременным?',
      description:
        'Да, если врач-гинеколог не видит для этого противопоказаний. Массаж помогает справиться с болями в спине, уменьшить отечность, снять напряжение, а также позволяет повысить эластичность тканей перед родами. Не стоит рисковать и посещать сеансы при угрозе выкидыша, повышении тонуса матки, гестационном диабете и болезнях почек',
    },
    {
      id: 6,
      title: 'Синяки после массажа, нормально ли это?',
      description:
        'Синяки частое явление и особенно им подвержены люди с чувствительной кожей. Если Вы редко ходите на массаж или мастер делает Вам глубокотканный массаж с приминением сильного давления на мышцу, то к сожалению, чаще всего синяков не избежать',
    },
    {
      id: 7,
      title: 'Можно ли похудить от массажа?',
      description:
        'Массаж не зря называют пассивной гимнастикой, т. к. он способен одновременно укрепить мышцы, уменьшить отечность, ускорить метаболизм и подтянуть кожу. Конечно, сбросить 10-15 кг таким образом не получится, но сочетание массажа с занятиями физкультурой ускорит наступление эффекта в 2 раза',
    },
  ];

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Частые вопросы</h1>
      <div className={styles.container}>
        {cardQuestion.map((block) => (
          <div className={styles.block_wrapper}>
            <div key={block.id}>
              <div
                className={styles.block_top}
                onClick={() => handleToggleTooltip(block.id)}
              >
                <h3 className={styles.title_block}>{block.title}</h3>
                <div className={styles.block_arrow}>
                  <Arrow
                    onClick={() => handleToggleTooltip(block.id)}
                    className={classNames(styles.arrow, {
                      [styles.open]: visibleTooltipId === block.id,
                    })}
                  />
                </div>
              </div>
              {visibleTooltipId === block.id && (
                <div
                  className={classNames(styles.description, {
                    [styles.open]: visibleTooltipId === block.id,
                  })}
                >
                  <p className={styles.block_description}>
                    {block.description}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
