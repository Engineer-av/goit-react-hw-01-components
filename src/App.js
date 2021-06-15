import Container from './components/Container/Container';
import { Profile } from './components/Profile';
import user from './components/Profile/user.json';
import { Statistics } from './components/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import { FriendsList } from './components/FriendsList';
import friends from './components/FriendsList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';
import { TransactionHistory } from './components/TransactionHistory';

function App() {
  return (
    <Container>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}

export default App;
