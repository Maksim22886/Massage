export const Feedback = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div
        style={{
          width: '560px',
          height: '800px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <iframe
          style={{
            width: '100%',
            height: '100%',
            border: '1px solid #e6e6e6',
            borderRadius: '8px',
            boxSizing: 'border-box',
          }}
          src="https://yandex.ru/maps-reviews-widget/238287830447?comments"
        ></iframe>
        <a
          href="https://yandex.com.tr/harita/org/sculptor_of_your_body/238287830447/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            boxSizing: 'border-box',
            textDecoration: 'none',
            color: '#b3b3b3',
            fontSize: '10px',
            fontFamily: 'YS Text, sans-serif',
            padding: '0 16px',
            position: 'absolute',
            bottom: '8px',
            width: '100%',
            textAlign: 'center',
            left: 0,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: 'block',
            maxHeight: '14px',
            whiteSpace: 'nowrap',
          }}
        >
          Усадьба Измайлово на карте Москвы — Яндекс Карты
        </a>
      </div>
    </div>
  );
};
    