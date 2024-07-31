
import styles from './App.module.css';
import { RouteSectionProps } from '@solidjs/router';

const App = (props: RouteSectionProps) => {
  return (
    <div class={styles.App}>
      {props.children}
    </div>
  );
};

export default App;
