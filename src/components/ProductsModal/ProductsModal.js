import { createPortal } from 'react-dom';

function ProductModal({ isOpenModal, setIsOpenModal }) {
  if (!isOpenModal) return null;
  return createPortal(
    <>
      <div>This is modal window</div>
      <button onClick={() => setIsOpenModal(false)}>kapat</button>
    </>,
    document.getElementById('details'),
  );
}

export default ProductModal;
