import css from './Statistics.module.css';

export const Statistics = (props) => {
    return (<section className={css.statistics}>
        {props.title ? (<h2 className={css.title}>Upload stats</h2>) : ''}


        <ul className={css.statList}>
            {props.stats.map(prop => {
                return (
                    <li key={prop.id}
                        className={css.item}>
                        <span className={css.label}>{prop.label}</span>
                        <span className={css.percentage}>{prop.percentage}%</span>
                    </li>)
            })}


        </ul>
    </section>);
}