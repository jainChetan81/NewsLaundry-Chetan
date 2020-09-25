// import Modal from "../components/Modal/Modal";
import React, { useState } from "react";
import Auxillary from "../hoc/Auxillary";
import NewsCard from "./NewsCard/NewsCard";
import NewsModal from "./NewsModal/NewsModal";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStyles = makeStyles((theme) => ({
    paper: {
        position: "absolute",
        backgroundColor: "white",
        display: "block",
        "margin-left": "auto",
        "margin-top": "10px",
        "margin-right": "auto",
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const NewsList = ({ news, addPrefer, removePrefer, preferNews }) => {
    const [modalStyle] = React.useState(getModalStyle);
    const [show, showModal] = useState(false);
    const [modal, setModal] = useState(null);
    const classes = useStyles();
    const showModalInfo = (item) => {
        setModal(item);
        console.log(item);
        showModal(true);
    };
    const closeModal = () => {
        showModal(false);
    };
    return (
        <Auxillary>
            {/* <Modal show={show} modalClosed={closeModal}>
                <NewsModal activeNews={modal} />
            </Modal> */}
            <Modal open={show} onClose={closeModal}>
                <div style={modalStyle} className={classes.paper}>
                    <NewsModal activeNews={modal} />
                </div>
            </Modal>
            <Auxillary>
                <div className="container">
                    {preferNews[0] && (
                        <h3 className="text-center">Prefered News</h3>
                    )}
                    <div className="row">
                        {preferNews.map((item, index) => (
                            <NewsCard
                                key={item.id}
                                index={index}
                                item={item}
                                showModalInfo={showModalInfo}
                                addPrefer={addPrefer}
                                removePrefer={removePrefer}
                            />
                        ))}
                    </div>
                    <h3 className="text-center">Simple News</h3>
                    <div className="row">
                        {news.map((item, index) => (
                            <NewsCard
                                key={item.id}
                                index={index}
                                item={item}
                                showModalInfo={showModalInfo}
                                addPrefer={addPrefer}
                                removePrefer={removePrefer}
                            />
                        ))}
                    </div>
                </div>
            </Auxillary>
        </Auxillary>
    );
};

export default NewsList;
