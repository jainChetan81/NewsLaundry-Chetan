import React, { Component } from "react";

export default class NewsModal extends Component {
    render() {
        const news = this.props.activeNews;
        return (
            <div>
                {news ? (
                    <div>
                        {news.length !== 0 && (
                            <div className="active-recipe">
                                <img
                                    src={`https://source.unsplash.com/300x299`}
                                    alt={news.headline}
                                    className="active-recipe__img"
                                />
                                <h3 className="active-recipe__title">
                                    {news.story.headline}
                                </h3>
                                <p>
                                    <b>{news.story["subheadline"]}</b>
                                </p>
                                <p className="lead active-website">
                                    Website :
                                    <span>
                                        <a
                                            target="_blank"
                                            href={news.story.url}>
                                            Read More
                                        </a>
                                    </span>
                                </p>
                                <h5 className="active-recipe__publisher">
                                    Publisher:
                                    <span>{news.story["author-name"]}</span>
                                </h5>
                            </div>
                        )}{" "}
                    </div>
                ) : (
                    <h1>Loading...</h1>
                )}
            </div>
        );
    }
}
