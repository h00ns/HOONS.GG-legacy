import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

//  components
import TextInput from '@components/_atoms/TextInput';
import Button from '@components/_atoms/Button';

//  constants
import { mq } from '@utils/style';

const Layout = styled.form`
  margin-top: 24px;
  display: flex;
  column-gap: 12px;

  ${mq['sm']} {
    flex-direction: column;
    row-gap: 8px;
  }
`;

export default function SearchForm() {
  const router = useRouter();
  const { t } = useTranslation('search');

  const [form, setForm] = useState('');

  // form change
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(value);
  };

  // search submit
  const handleFormSubmit = () => {
    router.push(`/search?name=${form}`, undefined, { shallow: true });
  };

  return (
    <Layout
      onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmit();
      }}>
      <TextInput name="form" value={form} placeholder={t('placeholder')} onChange={handleFormChange} />
      <Button label={t('search-button')} />
    </Layout>
  );
}
