import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default function NewsCard(props) {
    const image = `https://source.unsplash.com/300x2${props.index + 10}`;
    return (
        <div className="col-md-4" style={{ marginBottom: "2rem" }}>
            <div className="recipes__box">
                <img className="recipes__box-img" src={image} />
                <div className="recipe__text">
                    <h5 className="recipes__title">
                        {props.item.item.headline[0].length < 20
                            ? `${props.item.item.headline[0]}`
                            : `${props.item.item.headline[0].substring(
                                  0,
                                  55
                              )}...`}
                    </h5>
                    <p className="recipes__subtitle">
                        Publisher :{" "}
                        <span>{props.item.story["author-name"]}</span>
                    </p>
                </div>
                <button
                    onClick={() => {
                        props.showModalInfo(props.item);
                    }}
                    className="recipe_buttons">
                    View Story
                </button>
                <span className="videoSidebar__button">
                    {props.item.liked ? (
                        <FavoriteIcon
                            fontSize="large"
                            onClick={(e) => props.removePrefer(props.index)}
                        />
                    ) : (
                        <FavoriteBorderIcon
                            fontSize="large"
                            onClick={(e) => props.addPrefer(props.index)}
                        />
                    )}
                </span>
            </div>
        </div>
    );
}
