import { Modal, Form, Input, Select, Button, message } from "antd";

const { Option } = Select;

const BookingModal = ({ open, onClose }: any) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const text = `Name: ${values.name}%0APhone: ${values.phone}%0ALocation: ${values.location}%0AService: ${values.service}`;

    window.open(`https://wa.me/919667609610?text=${text}`, "_blank");

    message.success("Request Sent!");
    form.resetFields();
    onClose();
  };

  return (
    <Modal
      title="🚀 Book Bike Service"
      open={open}
      onCancel={onClose}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        
        <Form.Item
          name="name"
          label="Full Name"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter phone number" />
        </Form.Item>

        <Form.Item
          name="location"
          label="Location"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter your location" />
        </Form.Item>

        <Form.Item
          name="service"
          label="Service"
          rules={[{ required: true }]}
        >
          <Select placeholder="Select service">
            <Option value="Petrol Delivery">Petrol Delivery</Option>
            <Option value="Bike Towing">Bike Towing</Option>
            <Option value="Jump Start">Jump Start</Option>
            <Option value="Repair">Repair</Option>
          </Select>
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Submit Request 🚀
        </Button>

      </Form>
    </Modal>
  );
};

export default BookingModal;