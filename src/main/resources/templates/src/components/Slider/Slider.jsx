import s from "./Slider.module.css"
import slide1 from "../../assets/images/slide1.jpg"
import slide2 from "../../assets/images/slide2.jpg"
import slide3 from "../../assets/images/slide3.jpg"
import {useEffect} from "react";

export default function Slider(){
    useEffect(() => {
        let sliderCount = 0
        const sliderImages = document.querySelectorAll(`.${s.slider__img}`)
        const sliderLine = document.querySelector(`.${s.slider__line}`)
        const sliderWidth = document.querySelector(`.${s.slider}`).offsetWidth

        function rollSlider(){
            sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`
        }

        document.querySelector(`.${s.slider__btn_prev}`).addEventListener("click", () => {
            sliderCount--
            if (sliderCount < 0){
                sliderCount = sliderImages.length - 1
            }
            rollSlider()
        })
        document.querySelector(`.${s.slider__btn_next}`).addEventListener("click", () => {
            sliderCount++
            if (sliderCount >= sliderImages.length){
                sliderCount = 0
            }
            rollSlider()
        })
        setInterval(() => {
            sliderCount++
            if (sliderCount >= sliderImages.length){
                sliderCount = 0
            }
            rollSlider()
        }, 4500)
    }, []);

    return (
        <div>
            <div className={s.slider__title}>
                Our airport
            </div>
            <div className={s.slider}>
                <div className={s.slider__line}>
                    <img className={s.slider__img} src={slide1} alt="img"/>
                    <img className={s.slider__img} src={slide2} alt="img"/>
                    <img className={s.slider__img} src={slide3} alt="img"/>
                </div>
                <button className={s.slider__btn_prev}>
                    &#10148;
                </button>
                <button className={s.slider__btn_next}>
                    &#10148;
                </button>
            </div>
        </div>
    )
}