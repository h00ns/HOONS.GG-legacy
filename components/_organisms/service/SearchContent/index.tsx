import Button from '@components/_atoms/Button';
import TextInput from '@components/_atoms/TextInput';
import styled from '@emotion/styled';
import { useGetSummonerInfoByNameFetch } from '@hooks/fetch/useSummonerFetch';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Layout = styled.div``;

const SearchBox = styled.div`
  display: flex;
  column-gap: 12px;
`;

export default function SearchContent() {
  const router = useRouter();
  const { name: summonerName } = router.query as { name: string };

  const { getSummonerInfoByNameData: summonerData } = useGetSummonerInfoByNameFetch({ summonerName });

  const [form, setForm] = useState('');

  // form change
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(value);
  };

  // search submit
  const handleFormSubmit = () => {
    console.log(123);
    router.push(`/search?name=${form}`, undefined, { shallow: true });
  };

  return (
    <Layout>
      <SearchBox>
        <TextInput name="form" value={form} onChange={handleFormChange} />
        <Button label="클릭" onClick={handleFormSubmit} />
      </SearchBox>
    </Layout>
  );
}
