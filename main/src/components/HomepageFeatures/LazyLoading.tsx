import React, { Suspense } from 'react';
import { MDXProvider } from '@mdx-js/react';

interface LazyMDXLoaderProps {
  fileName: string;
}

const LazyMDXLoader: React.FC<LazyMDXLoaderProps> = ({ fileName }) => {
  let LazyLoadedComponent: React.LazyExoticComponent<any> | null = null;

  switch (fileName) {
    case 'BlinkIdMultiSideRecognizerOutput':
      LazyLoadedComponent = React.lazy(() => import(`../../lazyLoading/BlinkIdMultiSideRecognizerOutput.md`));
      break;
      case 'barcode-document-verification':
        LazyLoadedComponent = React.lazy(() => import(`../../lazyLoading/barcode-document-verification.md`));
        break;  
    default:
      return <div>File not found</div>;
  }
  return (
    <MDXProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLoadedComponent />
      </Suspense>
    </MDXProvider>
  );
};

export default LazyMDXLoader;
