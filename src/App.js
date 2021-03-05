import React, {Component, PureComponent} from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '19921107',
  'gender' : '남자',
  'job' : '직장인'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '김유빈',
  'birthday' : '19921107',
  'gender' : '남자',
  'job' : '직장인'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '최건희',
  'birthday' : '19921107',
  'gender' : '남자',
  'job' : '직장인'
}]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
