import image from './../../assets/mr-cup-fabien-barral-Fo5dTm6ID1Y-unsplash.jpg';
import style from './Header.module.scss';
export const Header = () => {
    return (
        <>
            <header className={style.header}>
                <img src={image} alt="History" />
                <div>
                    <hgroup>
                    <h1>On this day</h1>
                    <p>What happened on this day - historical events, deaths and births thoughout time</p>
                    </hgroup>
                    <span className={`${style.circle}  ${style.topLeft}`} ></span>
                    <span className={`${style.circle}  ${style.topRight}`}></span>
                    <span className={`${style.circle}  ${style.bottomLeft}`}></span>
                    <span className={`${style.circle}  ${style.bottomRight}`}></span> 
                </div>
            </header>
        </>
    )
}