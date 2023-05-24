import styled from '@emotion/styled';

//  components
import Title from './Title';
import SearchForm from './SearchForm';
import Content from './Content';

const Layout = styled.div``;

export default function SearchContent() {
  return (
    <Layout>
      <Title />
      <SearchForm />
      <Content />
    </Layout>
  );
}
