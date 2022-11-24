import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ item: { type, amount, currency, id } }) => {
    return (
        <table className={css.transaction}>
  <thead className={css.thead}>
    <tr className={css.tr}>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
    </thead>
<tbody>
    <tr key={id} className={css.trr}>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </tr>
  </tbody>  
</table>
    );
};