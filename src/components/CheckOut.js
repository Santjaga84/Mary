import { Button, Modal } from 'antd';
import { useState } from 'react';

const Checkout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Check out
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <h3>Check out</h3>
        <hr />
        <p>Do you confirm check out?</p>
      
      </Modal>
    </>
  );
};
export default Checkout;