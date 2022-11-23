import { TransactionHistory } from "./TransactionHistory";

export const TransactionItems = ({ items }) => {
    return (
        <tbody>
            {items.map(item =>
                <tr key={item.id}>
                    <TransactionHistory item={item} />
                </tr>)}
        </tbody>
    );
};
