import React from 'react';

const ProductsRemote = React.lazy(() => import('products/App'));

const App: React.FC = (): JSX.Element => {
  const [isCalled, setIsCalled] = React.useState(false);

  return (
    <div>
      <h1>{`Test`}</h1>
      <button onClick={() => setIsCalled(!isCalled)}>Calling</button>
      {isCalled && (
        <React.Suspense fallback={<div>{`loading...`}</div>}>
          <ProductsRemote />
        </React.Suspense>
      )}
    </div>
  );
};

export default App;
