import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

// Определяем тип для контекста
type MediaQueryContextType = boolean;

// Создаем контекст с начальным значением false
const MediaQueryContext = createContext<MediaQueryContextType>(false);

interface MediaQueryProviderProps {
  children: ReactNode;
}

export const MediaQueryProvider: React.FC<MediaQueryProviderProps> = ({
  children,
}) => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 768px)').matches,
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(max-width: 768px)');
    const documentChangeHandler = (e: MediaQueryListEvent) =>
      setIsMobile(e.matches);

    mediaQueryList.addEventListener('change', documentChangeHandler);

    return () => {
      mediaQueryList.removeEventListener('change', documentChangeHandler);
    };
  }, []);

  return (
    <MediaQueryContext.Provider value={isMobile}>
      {children}
    </MediaQueryContext.Provider>
  );
};

// Кастомный хук для использования контекста
export const useIsMobile = (): boolean => {
  return useContext(MediaQueryContext);
};
