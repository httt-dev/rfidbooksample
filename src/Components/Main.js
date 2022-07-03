import react, { useState } from "react";
import Card from "./Card";
import axios from "axios";
const Main = () => {
    const [search, setSearch] = useState("");
    const [bookData, setData] = useState([]);

    const searchBook = (evt) => {
        if (evt.key === "Enter") {

            axios.get('http://localhost:8000/books')
                .then(res => {
                    console.log('res data return============================');
                    console.log(res.data);
                    if (res.data) {
                        res.data.forEach(book => {

                            //get book cover
                            axios.get('https://api.openbd.jp/v1/get?isbn=' + book.dpp_isbn)
                                .then(res => {
                                    console.log('cover book============================');
                                    console.log(res.data[0].summary.cover);
                                    if (res.data[0]) {
                                        book.thumbnail = res.data[0].summary.cover;
                                    }
                                })
                                .catch(err => console.log(err))

                        });

                        setData(res.data);
                    }

                })
                .catch(err => console.log(err))


        }
    }
    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br /> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                            value={search} onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook} />
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            <div className="container">
                {
                    <Card book={bookData} />
                }
            </div>
        </>
    )
}
export default Main;