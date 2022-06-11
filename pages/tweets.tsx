import React from 'react';
import Tweets from '../components/tweets';
import styles from "../styles/Home.module.css";

const TweetsPage: React.FC = () => {
  return <div className={styles.tweets}><Tweets /></div>
}

export default TweetsPage;