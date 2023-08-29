
import './App.css'

function Star(){
  return (
    <>
        <li>
            <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
            <path d="M0 0h18v18H0z" fill="none"/>
            </svg>
        </li>
    </>
);
}
function Stars(props){
  const { count } = props;
  let checkValue = false;
  let rating = [];    
  if (count > 0 && count < 6) {
      checkValue = true;
      for (let i = 1; i <= count; i++) {
          rating.push(i);
      }
  }
  return (
      <>
          {
              !(count && checkValue)
              ||
              <ul className={'card-body-stars u-clearfix'}>
              {rating.map(o => <Star key={o}/>)}
              </ul>
          }
      </>
  );
}

function App() {
 

  return (
    <>
     <Stars count={5}/>
    </>
  )
}

export default App
