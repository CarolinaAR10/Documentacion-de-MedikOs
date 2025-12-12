import { useState, useEffect, ReactNode } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

interface ViewWrapperProps {
  children: ReactNode;
  loadingTime?: number;
  viewKey?: string | number | null;
}

export function ViewWrapper({ children, loadingTime = 600, viewKey }: ViewWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, loadingTime);

    return () => clearTimeout(timer);
  }, [viewKey, loadingTime]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
}