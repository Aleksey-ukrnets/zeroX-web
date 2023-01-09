import css from './IconCopy.module.scss';
import variables from '../../styles/variables.scss';

const copyClipBoard = (text) => {
  navigator.clipboard.writeText(text);
  // toast.success('Text copied', {
  //   style: {
  //     backgroundColor: 'rgb(255 255 255 / 20%)',
  //     color: '#fff',
  //     backdropFilter: variables.blur10,
  //   },
  // });
};

function IconCopy({ mx, textClipBoard }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      className={css.IconCopy}
      style={{ marginLeft: mx, marginRight: mx }}
      onClick={() => copyClipBoard(textClipBoard)}
    >
      <path
        fill="inherit"
        d="M10.914 0H1.717C.874 0 .184.573.184 1.273v8.909h1.533v-8.91h9.197V0zm2.299 2.545h-8.43c-.844 0-1.533.573-1.533 1.273v8.91c0 .7.69 1.272 1.532 1.272h8.43c.844 0 1.534-.573 1.534-1.273V3.818c0-.7-.69-1.273-1.533-1.273zm0 10.182h-8.43V3.818h8.43v8.91z"
      ></path>
    </svg>
  );
}

export default IconCopy;
