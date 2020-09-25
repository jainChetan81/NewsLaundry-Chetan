import React, { Component } from "react";
import NewsList from "../components/NewsList";
import axios from "axios";
import Form from "../components/Form";
import Spinner from "../components/Spinner/Spinner";
import { getFromStorage, setInStorage } from "../utils/localStorage";
export default class App extends Component {
    state = {
        news: [],
        preferencedNews: [],
        loading: false,
    };
    getNews = (e) => {
        e.preventDefault();
        const recipeName = e.target.elements.news.value;
        console.log(recipeName); 
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
    };
    removePreferencedNews = (id) => {
        console.log(id);
        let updatedPreferencedNews = [...this.state.preferencedNews];
        let updatedNews = [...this.state.news];
        let spliced = updatedPreferencedNews.splice(id, 1);
        spliced[0].liked = false;
        updatedNews.unshift(spliced[0]);
        // console.log("spliced", spliced[0], updatedPreferencedNews);
        this.setState({
            news: updatedNews,
            preferencedNews: updatedPreferencedNews,
        });
    };
    componentWillMount() {
        this.setState({ loading: true });
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
                setInStorage("news,", updatedNews);
            })
            .catch((err) => {
                console.log(err);
                this.setState({ loading: false });
            });
    }

    // componentDidUpdate() {
    //     if (this.state.news) {
    //         const news = JSON.stringify(this.state.recipes);
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
