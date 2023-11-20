import css from './Backdrop.module.css';

const Backdrop = () => {
  return (
    <div className={css.conteiner}>
      <div className={css.lamp}>
        <div className={css.lava}>
          <div className={css.blob}></div>
          <div className={css.blob}></div>
          <div className={css.blob}></div>
          <div className={css.blob}></div>
          <div className={css.blob}></div>
          <div className={css.blob}></div>
          <div className={css.blob}></div>
          <div className={css.blob}></div>
          <div className={css.blob}></div>
          <div className={css.blobTop}></div>
          <div className={css.blobBottom}></div>
        </div>
      </div>
    </div>
  );
};

export default Backdrop;
