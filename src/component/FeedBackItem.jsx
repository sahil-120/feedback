
import Card from './shared/Card.jsx'
function FeedBackItem({item}) {
    console.log(item);
  return (
    <div className="card" reverse={true}>
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </div>
  );
}

export default FeedBackItem;
