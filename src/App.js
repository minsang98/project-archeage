/* LIBRARY */
import { React, lazy, Suspense, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

/* COMPONENT */
import Navigation from './components/Navigation';
import Loading from './components/Loading';
const TradeContainer = lazy(() => import('./container/TradeContainer'));
const CoordinateContainer = lazy(() =>
  import('./container/CoordinateContainer'),
);
const Timer = lazy(() => import('./container/TimerContainer'));

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" exact />
        <Route
          path="/trade"
          element={
            <Suspense fallback={<Loading />}>
              <TradeContainer />
            </Suspense>
          }
        />
        <Route
          path="/coordinate"
          exact
          element={
            <Suspense fallback={<Loading />}>
              <CoordinateContainer />
            </Suspense>
          }
        />
        <Route
          path="/timer"
          exact
          element={
            <Suspense fallback={<Loading />}>
              <Timer />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
