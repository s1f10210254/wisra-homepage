import Layout from '@theme/Layout';
import React from 'react';
import styles from './index.module.css';


const SERVOComponent: React.FC = () => {
  return (
    <Layout title='Continuous Servo'>
      <div className={styles.Container}>
        <h2 className={styles.servoTitle}>連続回転サーボモーターを制御する</h2>

        <h3 className={styles.servoSubtitle}>連続回転サーボモーター インスタンスの作成と初期化</h3>
        <pre className={styles.codeBlock}>
          <code>
            const port = await setup();
            <br />
            const rotateServo = port.Rotateservo(9, 55, 4);
          </code>
        </pre>

        <h3 className={styles.servoSubtitle}>連続回転サーボモーターを特定の距離（メートル）で動かす</h3>
        <pre className={styles.codeBlock}>
          <code>
            await rotateServo.ForwardM(10); // サーボモーターを10メートル前進させます
          </code>
        </pre>

        <p className={styles.note}>
          注意: `ForwardM`メソッドを使用すると、サーボモーターは指定された距離（メートル）で前進します。非同期操作が行われるため、`await`を使用してください。
        </p>
      </div>
    </Layout>
  );
};
export default SERVOComponent;
