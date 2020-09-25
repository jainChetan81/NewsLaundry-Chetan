import React, { Component } from "react";

export default class NewsModal extends Component {
    render() {
        const news = this.props.activeNews;
        return (
            <div>
                {news ? (
                    <div>
                        {news.length !== 0 && (
                            <div className="active-news">
                                <img
                                    src={`https://source.unsplash.com/300x299`}
                                    alt={news.headline}
                                    className="active-news__img"
                                />
                                <h3 className="active-news__title">
                                    {news.story.headline}
                                </h3>
                                <p>
                                    <b>{news.story["subheadline"]}</b>
                                </p>
                                <p className="lead active-website">
                                    Website :
                                    <span>
                                        <a
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            href={news.story.url}>
                                            Read More
                                        </a>
                                    </span>
                                </p>
                                <h5 className="active-news__publisher">
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
