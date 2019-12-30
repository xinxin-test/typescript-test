import React from 'react';
import withRouter from 'umi/withRouter';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './index.css';

const BasicLayout: React.FC = props => {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>test</h1>
      {props.children}
    </div>
  );
};

export default BasicLayout;

// export default withRouter(
//   ({ location }) =>(
//     <TransitionGroup>
//       <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
//         {BasicLayout}
//       </CSSTransition>
//     </TransitionGroup>
//   )
// )
