import React from 'react';
import styles from './index.module.css'; // スタイルシートをインポート
import Layout from '@theme/Layout';

const ServoComponent: React.FC = () => {
  return (
    <Layout title='Servo'>
      <div className={styles.Container}>
        <h2 className={styles.servoTitle}>サーボモーターを制御する</h2>

        <h3 className={styles.servoSubtitle}>サーボモーター インスタンスの作成と初期化</h3>
        <pre className={styles.codeBlock}>
          <code>
            const port = await setup(); // 初期設定
            <br />
            const servo = port.servo(10);  // ピン10を制御するサーボモーターのインスタンスを作成
          </code>
        </pre>

        <h3 className={styles.servoSubtitle}>サーボモーターを特定の角度に回転させる</h3>
        <pre className={styles.codeBlock}>
          <code>
            await servo.rotate(90); // 90度に回転
            <br />
            await servo.rotate(180); // 180度に回転
            <br />
            await servo.rotate(90); // 90度に回転
            <br />
            await servo.rotate(0); // 0度に回転
          </code>
        </pre>

        <p className={styles.note}>
          注意: `rotate`メソッドを使用する際には、非同期操作が行われるため`await`を使用してください。
        </p>
      </div>
    </Layout>
  );
};

export default ServoComponent;
