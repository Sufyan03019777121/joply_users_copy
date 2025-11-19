import React from "react";
import { Row, Col, Typography, Image, Card } from "antd";
import "./servicesOverview.css";

import Mask_group from "../../assets/images/Mask_group.png"
import Find_the_Service from "../../assets/images/Find_the_Service.png"
import rating_pic from "../../assets/images/rating_pic.png"
import change_pic from "../../assets/images/change_pic.png"


const { Title, Paragraph } = Typography;

const ServicesOverview = () => {
  const services = [
    {
      img: Find_the_Service,
      title: "Find the Service Providers You Need",
      desc: (
        <>
          Post your job for free to connect with service providers. <br />
          Providers interested in your job will send you a request.
        </>
      ),
    },
    {
      img: rating_pic,
      title: "Connect with Professionals",
      desc: (
        <>
         Our rating system lets you read genuine reviews from previous
         <br /> customers, helping you make informed decisions.
        </>
      ),
    },
    {
      img: change_pic,
      title: "Hire with Confidence",
      desc: (
        <>
         Review profiles, previous work, and ratings before deciding whom to <br /> contact. Only service providers you've selected can reach out to you.
        </>
      ),
    },
  ];

  return (
    <div className="services-overview">
      <Row
        gutter={[40, 40]}
        align="middle"
        justify="center"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Left Side */}
        <Col xs={24} md={12} className="left-section">
          <Paragraph className="highlight-text">Now You Can</Paragraph>
          
          <h1 className="main-title">
            Find Perfect Workers with <br /> Confidence
          </h1>
          
          <p className="description">
             Finding the right worker isn't always easy. Joply is the dependable
            solution <br /> to hire a suitable worker for your needs.
          </p>

          {/* Services Rows */}
          {services.map((item, index) => (
            <div key={index} className="service-row">
              <div className="image-wrapper">
                <Image
                  src={item.img}
                  alt={item.title}
                  style={{ objectFit: "cover" }}
                  preview={false}
                />
              </div>
              <div className="service-text">
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </Col>

        {/* Right Side */}
        <Col xs={24} md={12} className="right-section">
          <Card
            className="card-image"
          >
            <div className="services_image">
              <img
                src={Mask_group}
                alt="Workers"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
                <div className="services-badge">50+ <br /> Services</div>
            </div>
           
          </Card>

         
        </Col>
      </Row>
    </div>
  );
};

export default ServicesOverview;
