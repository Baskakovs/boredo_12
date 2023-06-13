import styled from 'styled-components'
import TitleM from './TitleM'

// Importing redux
import { useSelector } from 'react-redux'

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  background-color: #f8d7da;
  border: 1px solid #ef4444;
  margin: 16px 0;
`

const Title = styled(TitleM)`
  padding-left: 16px;
`

const ErrorsList = styled.ul`
  font-size: 16px;
  padding: 16px;
`

function Errors(props) {
  const errors = useSelector(state => state.errors.errors)

  const renderErrorMessages = () => {
    const errorList = [];
    for (const field in errors) {
      const fieldErrors = errors[field];
      fieldErrors.forEach((error) => {
        errorList.push(<li key={`${field}-${error}`}>{`${field} ${error}`}</li>);
      });
    }
    return errorList;
  }

  return (
    <>
    {
      errors && Object.keys(errors).length > 0 ?
      <Box>
      <Title>{`Something went wrong :(`}</Title>
      <ErrorsList>
        {renderErrorMessages()}
      </ErrorsList>
      <Title>{`Hope that helps 🤔 :)`}</Title>
    </Box>
    : null
    }
    </>
  )
}

export default Errors
