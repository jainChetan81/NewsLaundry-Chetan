// import Modal from "../components/Modal/Modal";
import React, { useState } from "react";
import Auxillary from "../hoc/Auxillary";
import NewsCard from "./NewsCard/NewsCard";
import NewsModal from "./NewsModal/NewsModal";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
    const top = 50;
    const left = 50;
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
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const NewsList = ({
    news,
    addPrefer,
    removePrefer,
    preferNews,
    filteredNews,
    searchString,
}) => {
    const [modalStyle] = React.useState(getModalStyle);
    const [show, showModal] = useState(false);
    const [modal, setModal] = useState(null);
    const classes = useStyles();
    const showModalInfo = (item) => {
        setModal(item);
        showModal(true);
    };
    const closeModal = () => {
        showModal(false);
    };
    return (
        <Auxillary>
            <Modal open={show} onClose={closeModal}>
                <div style={modalStyle} className={classes.paper}>
                    <NewsModal activeNews={modal} />
                </div>
            </Modal>
            <Auxillary>
                <div className="container">
                    {searchString !== "" ? (
                        <Auxillary>
                            <h3 className="text-center">Filtered News</h3>
                            <div className="row">
                                {filteredNews.map((item, index) => (
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
                        </Auxillary>
                    ) : (
                        <Auxillary>
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
                        </Auxillary>
                    )}
                </div>
            </Auxillary>
        </Auxillary>
    );
};

export default NewsList;
