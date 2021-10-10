import { useState, useEffect, useMemo } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { List, Avatar, Row, Col, Button } from "antd";
import getRestaurants from "../firebase/getRestaurants";
import Map from "./Map";

const Restaurants = () => {
  const { data, isLoading } = useQuery("restaurants", getRestaurants);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);

  useEffect(() => {
    if (data && data.length) {
      setSelectedRestaurantId(data[0].id);
    }
  }, [data]);

  const selectedRestaurant = useMemo(() => {
    if (!Array.isArray(data)) {
      return null;
    }

    return data.find((r) => r.id === selectedRestaurantId);
  }, [data, selectedRestaurantId]);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Row style={{ height: "100%" }}>
        <Col span='8'>
          <List
            style={{ padding: "5px 10px" }}
            loading={isLoading}
            dataSource={data?.sort(function (a, b) {
  return b.rate - a.rate;
})}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  avatar={<Avatar src={item.image} />}
                  title={
                    <Button
                      onClick={() => setSelectedRestaurantId(item.id)}
                      type={item.id === selectedRestaurantId ? "link" : "text"}
                    >
                      {item.name}
                    </Button>
                  }
                />
                <Button type='ghost'>
                  <Link to={`/${item.id}`}>View Restaurant</Link>
                </Button>
              </List.Item>
            )}
          ></List>
        </Col>
        <Col span='16'>
          <Map selectedRestaurant={selectedRestaurant} />
        </Col>
      </Row>
    </div>
  );
};

export default Restaurants;
