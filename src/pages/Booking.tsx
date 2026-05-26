import { Form, Input, Button, Card, message } from "antd";
import { useState } from "react";
import "./booking.css";

const Booking = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  // 📍 GET LIVE LOCATION
  const getLocation = () => {
    setLoading(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const location = `https://www.google.com/maps?q=${latitude},${longitude}`;

        form.setFieldsValue({ location });

        message.success("Location fetched!");
        setLoading(false);
      },
      () => {
        message.error("Unable to fetch location");
        setLoading(false);
      }
    );
  };

  const onFinish = (values: any) => {
    const text = `Name: ${values.name}%0APhone: ${values.phone}%0ALocation: ${values.location}`;

    window.open(`https://wa.me/919667609610?text=${text}`);
  };

  return (
    <div className="booking-page">
      <Card className="booking-card" title="🚀 Book Service">

        <Form form={form} layout="vertical" onFinish={onFinish}>

          <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="location" label="Location" rules={[{ required: true }]}>
            <Input placeholder="Enter or fetch location" />
          </Form.Item>

          {/* 📍 LOCATION BUTTON */}
          <Button onClick={getLocation} loading={loading} block>
            📍 Use My Live Location
          </Button>

          <br />

          <Button type="primary" htmlType="submit" block>
            Submit 🚀
          </Button>

        </Form>
      </Card>
    </div>
  );
};

export default Booking;