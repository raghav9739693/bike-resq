import { Form, Input, Button, Select, Card, message } from "antd";
import "./booking.css";

const { Option } = Select;

const Booking = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Data:", values);

    // WhatsApp Integration
    const text = `Name: ${values.name}%0APhone: ${values.phone}%0ALocation: ${values.location}%0AService: ${values.service}`;

    window.open(
      `https://wa.me/919667609610?text=${text}`,
      "_blank"
    );

    message.success("Request Sent Successfully!");
    form.resetFields();
  };

  return (
    <div className="booking-page">

      <Card className="booking-card" title="🚀 Book Bike Service">

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >

          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: "Enter phone number" }]}
          >
            <Input placeholder="Enter phone number" />
          </Form.Item>

          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: "Enter location" }]}
          >
            <Input placeholder="Enter your location" />
          </Form.Item>

          <Form.Item
            label="Select Service"
            name="service"
            rules={[{ required: true, message: "Select a service" }]}
          >
            <Select placeholder="Choose service">
              <Option value="Petrol Delivery">Petrol Delivery</Option>
              <Option value="Bike Towing">Bike Towing</Option>
              <Option value="Jump Start">Jump Start</Option>
              <Option value="Repair">Repair</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit Request 🚀
            </Button>
          </Form.Item>

        </Form>
      </Card>

    </div>
  );
};

export default Booking;