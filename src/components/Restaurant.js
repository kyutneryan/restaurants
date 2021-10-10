import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {
  Input,
  Rate,
  Button,
  Row,
  Col,
  Divider,
  Typography,
  message,
  Spin,
} from "antd";
import { useState } from "react";
import updateRestaurant from "../firebase/updateRestaurant";
import getRestaurant from "../firebase/getRestaurant";
import NotFound from "./NotFound";

const Restaurant = () => {
  const [feedback, setFeedback] = useState();
  const [rate, setRate] = useState(3);
  const { restaurantId } = useParams();
  const { data } = useQuery("restaurant", () => getRestaurant(restaurantId));

  function handleSubmit() {
    const updates = {
      rate,
      feedback,
    };
    updateRestaurant(restaurantId, updates);
    message.success("Feedback Sent!");
  }

  if (data === undefined) {
    return (
      <Row style={{ height: "100vh" }} align='middle' justify='center'>
        <Spin size='large' />
      </Row>
    );
  } else if (data === null) {
    return <NotFound />;
  } else {
    return (
      <Row>
        <Col span='16'>
          <div
            style={{ display: "flex", justifyContent: "center", padding: 20 }}
          >
            <img
              src={data?.image}
              style={{
                width: "80%",
                height: "650px",
              }}
              alt='RestaurantImage'
            />
          </div>
        </Col>
        <Col style={{ padding: 15 }} span='8'>
          <Divider orientation='center'>
            <Typography.Title level={3}>{data?.name}</Typography.Title>
          </Divider>
          <p>{data?.description}</p>

          <Input.TextArea
            placeholder='Seed Feedback'
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          <Row style={{ marginTop: 15 }} justify='space-between'>
            <Rate value={rate} onChange={setRate} />
            <Button onClick={handleSubmit}>Submit</Button>
          </Row>
        </Col>
      </Row>
    );
  }
};

export default Restaurant;
