import styled from '@emotion/styled';

//  components
import Icon from '@components/_atoms/Icon';
import LanguageModal from './LanguageModal';

//  constants
import { primary, white } from '@styles/Colors';
import { useRef, useState } from 'react';

//  hooks
import useHandleOutsideClick from '@hooks/interaction/useHandleOutsideClick';

type Props = {
  isHomeTop: boolean;
};

const Layout = styled.div``;

const IconWrapper = styled.div`
  cursor: pointer;
`;

export default function LanguageBox({ isHomeTop }: Props) {
  const iconRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal((prev) => !prev);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // 외부클릭 처리
  useHandleOutsideClick([iconRef, modalRef], handleCloseModal);

  return (
    <Layout>
      <IconWrapper ref={iconRef} onClick={handleOpenModal}>
        <Icon name="global" fill={isHomeTop ? white : primary.gray} />
      </IconWrapper>

      <LanguageModal openModal={openModal} ref={modalRef} />
    </Layout>
  );
}
