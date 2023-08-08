import { useRef, useState, useEffect, } from 'react';
import { useDispatch } from 'react-redux'

import { _getRandomImg } from "./Utils/Unsplash";

import InfiniteScroll from 'react-infinite-scroll-component';
import Card from "./Components/Card";

const Home = (props) => {

    const dispatch  = useDispatch();
    const params    = new URLSearchParams(window.location.search.slice(1));

    const [ cards, setCards ] = useState([]);

    const first = async () => {
        const _cards = await _getRandomImg(24); 
        setCards(_cards);
    }

    const next = async () => {
        const _cards = await _getRandomImg(24); 
        setCards(cards.concat(_cards));
    }

    useEffect(() => first(), []);

    return (
        <div className="home container-fluid">
            <InfiniteScroll
                dataLength={cards.length}
                next={next}
                hasMore={(cards.length) % 12 === 0}
                loader={
                    <div className="col-12 text-center">
                        <img 
                            style={{objectFit:"cover", height:"150px", width:"150px",}}
                            src="https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw700"/>
                    </div>
                }
                pullDownToRefresh={true}
                refreshFunction={first}
                className="row cards bg-light py-1" >
                {
                    cards.map((_, idx) => (
                        <div key={idx} className="col-6 col-md-4 col-xl-3 col-xxl-2 p-1">
                            <Card img={_.img} text={_.text}/>
                        </div>
                    ))  
                }
            </InfiniteScroll>
        </div>
    )
}

export default Home;
