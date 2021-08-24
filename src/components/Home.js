import React, { useState } from 'react'
import { useStyles } from "../globalStyles";
import SearchBar from './SearchBar';

function Home({ albums, photos }) {
    const classes = useStyles();
    const [newAlbum, setNewAlbum] = useState(albums)
    const randomInteger = () => {
        return Math.floor(Math.random() * (250 - 50 + 1)) + 50;
    }
    let temp = []
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 10; j++)
            photos.filter(x => x.albumId === albums[i].id).map(x => temp.push({
                "albumId": x.albumId,
                "id": x.id,
                "title": x.title,
                "url": x.url,
                "thumbnailUrl": x.thumbnailUrl,
                "randomNumber": randomInteger()
            }));
    }
    const [query, setQuery] = useState('')
    const [result, setResult] = useState([])
    const handleSearchFormSubmit = (e) => {
        e.preventDefault()
        let q = e.target.searchQuery.value
        console.log(q)
    }
    function handleQueryChange(e) {
        setQuery(e.target.value);
        filterResults(e.target.value)
    }
    const filterResults = (q) => {
        let filtered = []
        setResult(ps =>
            ps = temp.filter(item =>
                item.title.includes(q)),
        );
    }
    console.log(result)

    return (
        <>
            {/* SearchBar Component */}
            <form onSubmit={handleSearchFormSubmit} className={classes.searchBarContainer}>
                <input className={classes.searchInput} type="text" name='searchQuery' placeholder="See you financial report"
                    value={query}
                    onChange={handleQueryChange} />
                <input type="submit" hidden />
                <span>{">"}</span>
            </form>
            <div className={classes.homeContainer}>
                {result.length > 0 ? (
                    result.map((p, i) => {
                        return (
                            <div key={i} className={classes.resContainer}>
                                <div className={classes.resLeft}>
                                    <div className={classes.resLeftPhotoContainer}>
                                        <img src={p.thumbnailUrl} alt='' />
                                    </div>
                                    <div className={classes.resLeftDetailsContainer}>
                                        <div className={classes.resLeftDetailsContainerTop}>{p.title}</div>
                                        <a href={p.url} className={classes.resLeftDetailsContainerBottom}>{p.url}</a>
                                    </div>
                                </div>
                                <div className={classes.resRight}>
                                    <div>{p.randomNumber > 75 ? (<span style={{ color: "green" }}>{p.randomNumber}</span>) : (<span style={{ color: "red" }}>{p.randomNumber}</span>)}</div>
                                    <div>10:00 A.M.</div>
                                </div>
                            </div>
                        )
                    })
                ) : (" ")}
                {temp.map((p, i) => {
                    return (
                        <div key={i} className={classes.resContainer}>
                            <div className={classes.resLeft}>
                                <div className={classes.resLeftPhotoContainer}>
                                    <img src={p.thumbnailUrl} alt='' />
                                </div>
                                <div className={classes.resLeftDetailsContainer}>
                                    <div className={classes.resLeftDetailsContainerTop}>{p.title}</div>
                                    <a href={p.url} className={classes.resLeftDetailsContainerBottom}>{p.url}</a>
                                </div>
                            </div>
                            <div className={classes.resRight}>
                                <div>{p.randomNumber > 75 ? (<span style={{ color: "green" }}>{p.randomNumber}</span>) : (<span style={{ color: "red" }}>{p.randomNumber}</span>)}</div>
                                <div>10:00 A.M.</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Home
