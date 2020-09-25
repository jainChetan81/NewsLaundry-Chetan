import React, { Component } from "react";
import NewsList from "../components/NewsList";
import axios from "axios";
import Form from "../components/Form";
import Spinner from "../components/Spinner/Spinner";
import {
    getFromStorage,
    setInStorage,
    removeFromStorage,
} from "../utils/localStorage";
export default class App extends Component {
    state = {
        news: [],
        preferencedNews: [],
        loading: false,
    };
    getNews = (e) => {
        e.preventDefault();
        const newsName = e.target.elements.news.value;
        console.log(newsName);
    };
    componentDidMount() {
        window.title = "News Laundry";
        const json = localStorage.getItem("news");
        const news = JSON.parse(json);
        if (news)
            this.setState({
                news,
            });
    }
    setLocalStorage(news, preference) {
        removeFromStorage("news");
        removeFromStorage("preference");
        setInStorage("news", news);
        setInStorage("preference", preference);
    }
    addPreferencedNews = (id) => {
        console.log(id);
        let updatedPreferencedNews = [...this.state.preferencedNews];
        let updatedNews = [...this.state.news];
        let spliced = updatedNews.splice(id, 1);
        spliced[0].liked = true;
        updatedPreferencedNews.push(spliced[0]);
        // console.log("spliced", updatedPreferencedNews);
        this.setState({
            news: updatedNews,
            preferencedNews: updatedPreferencedNews,
        });
        this.setLocalStorage(updatedNews, updatedPreferencedNews);
    };
    removePreferencedNews = (id) => {
        console.log(id);
        let updatedPreferencedNews = [...this.state.preferencedNews];
        let updatedNews = [...this.state.news];
        let spliced = updatedPreferencedNews.splice(id, 1);
        spliced[0].liked = false;
        updatedNews.unshift(spliced[0]);
        this.setState({
            news: updatedNews,
            preferencedNews: updatedPreferencedNews,
        });
        this.setLocalStorage(updatedNews, updatedPreferencedNews);
    };
    async componentDidMount() {
        this.setState({ loading: true });
        const news = await getFromStorage("news");
        const preference = await getFromStorage("preference");
        if (!news) return this.getNewsItems();
        return this.setState({
            news: news,
            preferencedNews: preference,
            loading: false,
        });
    }

    getNewsItems() {
        console.log("getNewsItems");
        axios
            .get(
                "https://nl-static-site-assets.s3.ap-south-1.amazonaws.com/reports.json"
            )
            .then((res) => {
                let updatedNews = [];
                res.data.items.forEach((item) =>
                    updatedNews.push({ ...item, liked: false })
                );
                this.setState({
                    news: updatedNews,
                    loading: false,
                });
                this.setLocalStorage(updatedNews, this.state.preferencedNews);
            })
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false });
            });
    }

    // componentDidUpdate() {
    //     if (this.state.news) {
    //         const news = JSON.stringify(this.state.newss);
    //         localStorage.setItem("newzs", news);
    //     }
    // }

    render() {
        const { news } = this.state;
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">News Search</h1>
                    </header>
                    <Form getNews={this.getNews} />
                    {this.state.loading ? (
                        <Spinner />
                    ) : this.state.news.length < 1 ? (
                        <p>News can't be loaded</p>
                    ) : (
                        <NewsList
                            news={news}
                            preferNews={this.state.preferencedNews}
                            addPrefer={this.addPreferencedNews}
                            removePrefer={this.removePreferencedNews}
                        />
                    )}
                </div>
            </div>
        );
    }
}