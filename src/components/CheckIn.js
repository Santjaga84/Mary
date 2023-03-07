import { Button, Modal, DatePicker, Input  } from 'antd';
import { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';


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
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Check in
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <h3>Check in</h3>
        <hr />
        <p>Do you confirm check in?</p>
        <>
            <Input placeholder="Guest's name" prefix={<UserOutlined />} /> 
        </>
        <p>Please, enter apropriate date of guest checkout</p>
        <>
            <DatePicker onChange={onChange} />
        </>
      
      </Modal>
    </>
  );
};
export default Checkout;