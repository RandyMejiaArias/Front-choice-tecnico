import { useEffect } from 'react';
import { Container, Navbar, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles } from '../../store/file';

export const ListFilesPage = () => {

  const dispatch = useDispatch();

  const { isLoading, files = [] } = useSelector( state => state.files);

  useEffect(() => {
    dispatch(getFiles());
  }, []);

  return (
    <>
      <Navbar variant='light' bg='light'>
        <Container>
          <Navbar.Brand>React test app</Navbar.Brand>
        </Container>
      </Navbar>
      { isLoading ? 
        <Container className='d-flex justify-content-center align-items-center p-5'>
          <span>Loading...</span>
        </Container>
        : <Container className='p-5'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Text</th>
                <th>Number</th>
                <th>Hex</th>
              </tr>
            </thead>
            <tbody>
              {
                files.map( ({file, lines}, index) => (
                  <>
                  { 
                    lines.map( (line, index) => (
                      <tr key={index}>
                        <td>{file}</td>
                        <td>{line.text}</td>
                        <td>{line.number}</td>
                        <td>{line.hex}</td>
                      </tr>
                    ))
                  }
                  </>
                ))
              }
            </tbody>
          </Table>
        </Container>
      }
    </>
  )
}