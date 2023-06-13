
import React from 'react';
import styled from 'styled-components';

import TitleM from '../small/TitleM'
import SmallBlueButton from '../small/SmallBlueButton'
import NoBorderBlueButton from '../small/NoBorderBlueButton'


const ConfirmationOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ConfirmationModal = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 4px;
  text-align: center;
`

const Row = styled.div`
display: flex;
flex-direction: row;
gap: 8px;
justify-content: flex-end;
`


function DeleteConfirmation({closeAction, deletePost}) {

    return (
      <>
          <ConfirmationOverlay>
            <ConfirmationModal>
              <TitleM>Are you sure you want to delete this post?</TitleM>
              <div>
                <Row>
                <NoBorderBlueButton
                onClick={deletePost}
                >Yes</NoBorderBlueButton>
                <SmallBlueButton
                onClick={closeAction}
                text={"Cancel"}
                />
                </Row>
              </div>
            </ConfirmationModal>
          </ConfirmationOverlay>
        </>
    );
  }

export default DeleteConfirmation;
