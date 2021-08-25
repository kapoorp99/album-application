/* eslint-disable */
import React, { useEffect, useState } from 'react'
import { useStyles } from "../globalStyles";

function Home({ albums, photos }) {
    const classes = useStyles();
    const [tempAlbums, setTempAlbums] = useState(albums)
    const [query, setQuery] = useState('')
    const [result, setResult] = useState([])
    const randomInteger = () => {
        return Math.floor(Math.random() * (250 - 50 + 1)) + 50;
    }
    let temp = []
    let db = []
    for (let i = 0; i < 5; i++) {
        let t = []
        photos.filter((p, k) => p.albumId === tempAlbums[i].id).map(x => t.push({
            "albumId": x.albumId,
            "id": x.id,
            "title": x.title,
            "url": x.url,
            "thumbnailUrl": x.thumbnailUrl,
            "randomNumber": randomInteger()
        }));
        t = t.slice(0, 10)
        // console.log('t',t)
        // temp = [...temp, ...t]
        temp = [...temp, t]
        db = [...db, ...t]
    }
    console.log(db)
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
        setResult(ps =>
            ps = db.filter(item =>
                item.title.includes(q)),
        );
    }
    useEffect(() => {
        setTempAlbums(albums)
    }, [])

    return (
        <>
            {/* SearchBar Component */}
            <form onSubmit={handleSearchFormSubmit} className={classes.searchBarContainer}>
                <input className={classes.searchInput} type="text" name='searchQuery' placeholder="See you financial report"
                    value={query}
                    onChange={handleQueryChange} autoFocus />
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
                ) : (
                    temp.map((a, i) => {
                        return (
                            <>
                                <h2 key={i} className={classes.albumHeading}>{tempAlbums[i]?.title}</h2>
                                {a.map((p, j) => {
                                    return (
                                        <div key={j} className={classes.resContainer}>
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
                                                <div>{p.randomNumber > 75 ? (<span style={{ color: "green" }}>${p.randomNumber}</span>) : (<span style={{ color: "red" }}>${p.randomNumber}</span>)}</div>
                                                <div>10:00 A.M.</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </>
                        )
                    })
                )}
            </div>
        </>
    )
}

export default Home
