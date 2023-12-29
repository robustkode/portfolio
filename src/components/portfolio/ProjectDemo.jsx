import ReactPlayer from "react-player";
import Modal from "react-modal";
import React, { useEffect } from "react";
import "./player.css";
import PLAY from "../../assets/play.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "80%",
    transform: "translate(-50%, -50%)",
    padding: 0,
  },
};
Modal.setAppElement("#root");

const ProjectDemo = ({ image, title }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalIsOpen]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="portfolio__item-image">
      {/* <img src={image} alt={title} /> */}
      {/* <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" /> */}
      <div>
        <div className="thumbnail__container" onClick={openModal}>
          <img src={image} alt={title} />
          <img src={PLAY} className="play__button" />
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div>
            <div className="wrapper">
              <ReactPlayer
                className="player"
                url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                playing={true}
                muted={true}
              />
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ProjectDemo;
