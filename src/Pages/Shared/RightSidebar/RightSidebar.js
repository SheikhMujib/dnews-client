import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle, FaGithub, FaFacebook, FaYoutube, FaTwitter, FaWhatsapp, FaInstagram } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousels from "../BrandCarousels/BrandCarousels";




const RightSidebar = () => {
  return (
    <div>
      <ButtonGroup vertical>
        <Button variant="outline-primary" className="mb-2">
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login With Github
        </Button>
      </ButtonGroup>
      <div>
        <h5 className="mt-4 mb-2">Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2"><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaYoutube></FaYoutube> YouTube</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
          <ListGroup.Item className="mb-2"><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousels></BrandCarousels>
      </div>
    </div>
  );
};

export default RightSidebar;
