import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import AdminNavbar from "./AdminNavbar";
import AdminOrderItem from "./AdminOrderItem";
import moment from "moment";
import doubleLeft from "../../images/double-left.png";
import { Link } from "react-router-dom";
import axios from "axios";

const RecentOrder = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [recentOrder, setRecentOrder] = useState();
  const pickupObj = recentOrder?.pickup;
  const TOKEN = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root"))?.user || "{}"
  )?.currentUser?.accessToken;

  const currentDate = moment().toISOString();
  const [doordashToken, setDoordashToken] = useState();

  useEffect(() => {
    fetch(`https://tortasbackend.herokuapp.com/api/orders/find/order/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + TOKEN,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecentOrder(data);
      });

    fetch(`https://tortasbackend.herokuapp.com/api/admin/doordashPatch`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: "Bearer " + TOKEN,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDoordashToken(data);
      });
  }, [id]);

  const handlePrepTime = (e) => {
    console.log(e.target.value);
    const timeAdded = e.target.value;
    const externalDDid = String(recentOrder._id);

    if (e.target.value === 0) {
      const body = JSON.stringify({
        pickup_time: moment().toISOString(),
      });

      axios
        .patch(
          `https://openapi.doordash.com/drive/v2/deliveries/${externalDDid}`,
          body,
          {
            method: "PATCH",
            headers: {
              Authorization: "Bearer " + doordashToken,
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      const body = JSON.stringify({
        pickup_time: moment(currentDate)
          .add(timeAdded, "m")
          .toDate()
          .toISOString(),
      });

      axios
        .patch(
          `https://openapi.doordash.com/drive/v2/deliveries/${externalDDid}`,
          body,
          {
            method: "PATCH",
            headers: {
              Authorization: "Bearer " + doordashToken,
              "Content-Type": "application/json",
            },
          }
        )
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <>
      <AdminNavbar />
      <AdminContainer>
        <AdminOrderContainer>
          <AdminOrderBackButton>
            <Link
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              to={"/admin-home"}
            >
              <img src={doubleLeft}></img>
            </Link>
            <h2>Back to Orders</h2>
          </AdminOrderBackButton>
          <AdminOrderWrapper>
            <AdminOrderTitle>ORDER DETAILS</AdminOrderTitle>
            <AdminOrderName>
              {`NAME: ${recentOrder?.dropoff_contact_given_name.toUpperCase()}`}
            </AdminOrderName>
            <AdminOrderTime>
              {`ORDER CREATED AT: ${moment(recentOrder?.createdAt)
                .format("YYYY-MM-DD hh:mm")
                .toUpperCase()}`}
            </AdminOrderTime>
            <AdminOrderAddress>{recentOrder?.address}</AdminOrderAddress>
            <AdminOrderPhone>{recentOrder?.phone}</AdminOrderPhone>
            {pickupObj ? (
              <h2 id="pickupobj">PICKUP</h2>
            ) : (
              <h2 id="pickupobj">DELIVERY</h2>
            )}

            {pickupObj ? (
              <>
                <h2>PICKUP DATE: {recentOrder?.pickup_date.toUpperCase()}</h2>
                <h2>PICKUP TIME: {recentOrder?.pickup_time.toUpperCase()}</h2>
              </>
            ) : (
              <h2>
                ORDER READY BY:{" "}
                {moment(recentOrder?.pickup_time)
                  .format("YYYY-MM-DD hh:mm A")
                  .toUpperCase()}
              </h2>
            )}

            <AdminOrderPrepTime onClick={handlePrepTime}>
              <button value={0}>NOW</button>
              <button value={15}>15 MIN</button>
              <button value={30}>30 MIN</button>
              <button value={45}>45 MIN</button>
              <button value={60}>60 MIN</button>
            </AdminOrderPrepTime>

            <AdminOrderItemsContainer>
              {recentOrder?.products.map((item, index) => {
                return <AdminOrderItem key={index} item={item} />;
              })}
            </AdminOrderItemsContainer>
            <AdminOrderTotal>{`TOTAL: $ ${recentOrder?.total.toFixed(
              2
            )}`}</AdminOrderTotal>
        {recentOrder?.tip && recentOrder.tip !== 0 && (
          <AdminOrderTotal>{`TIP: $ ${recentOrder.tip}`}</AdminOrderTotal>
        )}
            {recentOrder?.doordashTrackingLink ? (
              <DoordashSupportId>
                {pickupObj ? null : "Tracking Link: "}
                {pickupObj ? null : (
                  <a href={`${recentOrder?.doordashTrackingLink}`}>
                    {recentOrder?.doordashTrackingLink}
                  </a>
                )}
              </DoordashSupportId>
            ) : (
              <h1>
                Doordash Driver has not been dispatched please call Admin.
              </h1>
            )}

            {recentOrder?.doordashSupportId ? (
              <DoordashSupportId>
                {pickupObj ? null : "Doordash Reference: #"}
                {pickupObj ? null : Number(recentOrder?.doordashSupportId)}
              </DoordashSupportId>
            ) : (
              <h1>
                Doordash Driver has not been dispatched please call Admin.
              </h1>
            )}
          </AdminOrderWrapper>
        </AdminOrderContainer>
      </AdminContainer>
    </>
  );
};

const AdminContainer = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 25px;
`;
const AdminOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  min-height: 30vh;
  border: 1px solid black;
  width: 100%;
  #pickupobj {
    padding-bottom: 20px;
  }
`;
const AdminOrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  #pickupobj {
    font-size: 2rem;
  }
`;

const AdminOrderPhone = styled.span`
  font-size: 2rem;
  padding-bottom: 10px;
`;

const AdminOrderBackButton = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 70px;
    height: 70px;
  }
  h2 {
    font-size: 2.5rem;
    padding-left: 3%;
  }
  padding-bottom: 3%;
`;

const AdminOrderTitle = styled.h2`
  font-size: 2rem;
  padding-bottom: 10px;
`;

const AdminOrderName = styled.span`
  font-size: 2rem;
  padding-bottom: 10px;
`;
const AdminOrderTime = styled.span`
  font-size: 2rem;
  padding-bottom: 10px;
`;
const AdminOrderAddress = styled.span`
  font-size: 2rem;
  padding-bottom: 10px;
`;

const AdminOrderPrepTime = styled.div`
  padding: 3% 0;
  display: flex;
  justify-content: space-evenly;
  button {
    border-radius: 20px;
    cursor: pointer;
    padding: 1em;
    font-size: 1.5rem;
    transition: all 0.5s ease-in-out;
    &:hover {
      background-color: teal;
      color: white;
    }
    &:after {
      background-color: teal;
      color: white;
    }
  }
`;
const AdminOrderItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3%;
  gap: 25px;
`;
const AdminOrderTotal = styled.span`
  font-size: 2rem;
  margin-top: 3%;
`;
const AdminOrderTip = styled.span`
  font-size: 2rem;
  margin-top: 3%;
`;
const DoordashSupportId = styled.span`
  font-size: 2rem;
  margin-top: 3%;
`;

export default RecentOrder;
