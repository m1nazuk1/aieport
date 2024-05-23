import s from "./Slogan.module.css"

export default function Slogan(){
    return (
        <section className={s.slogan}>
            <div className={s.slogan__title}>
                Flights around the world
            </div>
            <div className={s.slogan__text}>
                We have been carrying out safe flights since 2015. Your choice is our job!
            </div>
        </section>
    )
}