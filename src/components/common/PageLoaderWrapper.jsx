import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

/**
 * @param {JSX.Element} children - Main content
 * @param {boolean} loading - Toggle loading manually if needed
 * @param {number} delay - Optional delay for smoother transitions
 * @param {ReactNode} skeleton - Optional custom skeleton UI
 */
const PageLoaderWrapper = ({
  children,
  loading = false,
  delay = 1000,
  skeleton = null,
}) => {
  const [showContent, setShowContent] = useState(!loading);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setShowContent(true), delay);
      return () => clearTimeout(timer);
    }
  }, [loading, delay]);

  if (!showContent) {
    return (
      skeleton || (
        <div className="px-4 py-5 space-y-5">
          <Skeleton height={40} width={200} />
          <Skeleton height={140} />
          <div className="flex gap-3">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} height={30} width={80} borderRadius={16} />
            ))}
          </div>
          <Skeleton height={20} width={120} />
          <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} height={320} borderRadius={24} />
            ))}
          </div>
          <Skeleton height={80} borderRadius={20} />
        </div>
      )
    );
  }

  return children;
};

export default PageLoaderWrapper;
