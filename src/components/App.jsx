import { users } from 'data/users';
import { User } from 'components/User/User';
import { UsersList } from './UsersList/Userslist';
import { Section } from './Section/Section';

export const App = () => {
  return (
    <>
      <Section>
        <User user={users[0]} />
      </Section>
      <Section title="List of users">
        <UsersList users={users} />
      </Section>
    </>
  );
};
