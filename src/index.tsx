/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
import App from './App';
import {
  Router, Route
} from "@solidjs/router";
import { lazy } from 'solid-js';
const root = document.getElementById('root');

const Home = lazy(() => import('./Home'));
const Basics = lazy(() => import('./experiences/01-basics/basics'));
const Flow = lazy(() => import('./experiences/02-flow/flow'));
const Lifecycle = lazy(() => import('./experiences/03-lifecycle/lifecycle'));
const Bindings = lazy(() => import('./experiences/04-bindings/bindings'));

render(() => <Router root={App}>
  <Route path="/" component={Home} />
  <Route path="/01-basics" component={Basics} />
  <Route path="/02-flow" component={Flow} />
  <Route path="/03-lifecycle" component={Lifecycle} />
  <Route path="/04-bindings" component={Bindings} />
</Router>, root!);
