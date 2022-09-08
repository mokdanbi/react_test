import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { slideid: 1, content: "01 slide title", des: "01 slide content", link: "/1" },
    { slideid: 2, content: "02 slide title", des: "02 slide content", link: "/2" },
    { slideid: 3, content: "03 slide title", des: "03 slide content", link: "/3" },
]

const MainSlider = () => {
    // useState : 리액트 변수선언
    const [num, setNum] = useState();

    // useRef : 리액트 선택자
    const slideRef = useRef();

    // useEffect : [] > 처음 실행시 한번만 / []가 X > 업데이트 될 때마다
    useEffect(() => { setNum(0) }, [])

    const slideSet = {
        dots: true,
        afterChange: index => setNum(index),
    }

    return (
        // 가장 바깥쪽 부모가 하나, 그 안에 형제들
        // ref = 참조
        <>
            <Slider {...slideSet} ref={slideRef}>
                {
                    // map: 모든 배열을 가져옴 > slide라는 이름을 주고 idx(번호)를 준다 > figure안에 slide배열 속 slideid, content, des, link를 가져옴
                    SLIDE.map((slide, idx) =>
                        <figure className={`item0${slide.slideid} ${idx === num ? 'on' : ''}`} key={slide.slideid}>
                            <div className='slideBox'>
                                <h2>{slide.content}</h2>
                                <p>{slide.des}</p>
                                <a href='{slide.link}'>more</a>
                            </div>
                        </figure>
                    )
                }
            </Slider>
            {console.log(slideRef.current)}
            <div>
                0{num + 1} / <span>0{SLIDE.length}</span>
            </div>
            <div className="arrows">
                <button onClick={() => slideRef.current.slickPrev()}>prev</button>
                <button onClick={() => slideRef.current.slickNext()}>next</button>
            </div>
            <ul className="dots">
                {
                    SLIDE.map((dots, idx) =>
                        <li className={idx === num ? 'on' : ''}
                            onClick={() => slideRef.current.slickGoTo(idx)}
                            key={dots.slideid}>
                            {dots.slideid}
                        </li>
                    )
                }
            </ul>
            <div className="content">
                <div>
                    {/* ?. 문법 이해하기 / Null 병합 연산자 / 옵셔널 체이닝(?.) */}
                    {SLIDE[num]?.des}
                </div>
            </div>
        </>
    )
}

export default MainSlider;