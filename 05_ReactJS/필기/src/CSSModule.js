import styles from "./css/CSSModule.module.css";

// 클래스 이름이 멤버변수로 인식되기에, 카멜표기법을 사용하자.
/** 클래스 이름을 두개 이상 적용시 아래와 같이 ``를 활용하거나
 *  className={[styles.wrapper, styles.inverted].join(' ')} 같이 join() 함수를 활용하면 된다.
 */

const CSSModule = () => {
  return (
    <div className={`${styles.wrapper} ${styles.inverted}`}>
      안녕하세요, 저는 <span className="something">CSS Module!</span>
    </div>
  );
};

export default CSSModule;
