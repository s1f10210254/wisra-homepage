import React from 'react';
import styles from './index.module.css'; // スタイルシートをインポート
import Layout from '@theme/Layout';

const LEDComponent: React.FC = () => {
  return (
    <Layout title='LED'>
    <div className={styles.Container}>
      <h2 className={styles.ledTitle}>LEDを制御する</h2>

      {/* <div className={styles.gazou} /> */}
      <h3 className={styles.ledSubtitle}>LED を制御するためのインスタンスの作成</h3>
      <pre className={styles.codeBlock}>
        <code>const led = LED(13); // ピン13を制御するインスタンスの作成</code>
      </pre>

      <h3 className={styles.ledSubtitle}>LEDをオンにする</h3>
      <pre className={styles.codeBlock}>
        <code>led.on();</code>
      </pre>

      <h3 className={styles.ledSubtitle}>LEDをオフにする</h3>
      <pre className={styles.codeBlock}>
        <code>led.off();</code>
      </pre>

      <h3 className={styles.ledSubtitle}>LEDを点滅させる</h3>
      <pre className={styles.codeBlock}>
        <code>
          led.blink(); // デフォルトでは1秒間隔で点滅します。
          <br />
          led.blink(2000); // 2秒間隔で点滅します。
        </code>
      </pre>

      <p className={styles.note}>
        注意: onやblinkメソッドを使用すると、エンターキーを押すまでLEDの制御が継続されます。
      </p>
    </div>
    </Layout>
    
  );
};

export default LEDComponent;
