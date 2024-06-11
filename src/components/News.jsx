import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { getNews } from "../services/News";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const News = () => {
  const contextData = useContext(DataContext);
  const { news, setNews } = contextData;
  const [filtro, setFiltro] = useState('Cine')

  const searchNews = useCallback(async (categoria) => {
    const datosEnv = await getNews(categoria);
    setNews(datosEnv.data);
  }, [filtro])



useMemo(() => console.log('Me ejecute '), [])

  useEffect(() => {
    searchNews(filtro);
  }, [filtro])


  return (
    <>
      <div>
       
        <ButtonGroup size="lg" className="mt-3 mb-3 d-flex justify-content-center align-items-center">
          <Button value='Tecnologia' onClick={(e) => setFiltro(e.target.value)}>Tecnologia</Button>
          <Button value='Deportes' onClick={(e) => setFiltro(e.target.value)}>Deportes</Button>
          <Button value='Negocios' onClick={(e) => setFiltro(e.target.value)}>Negocios</Button>
        </ButtonGroup>
        <h1>Noticias de { filtro }</h1>
        <Row>
          {news.map((e, index) => {
            return (
              <Col key={index}>
                <Card style={{ width: "18rem", maxWidth: '540px' }} className="mt-3">
                  <Card.Img variant="top" src={e.thumbnail} />
                  <Card.Body>
                    <Card.Title>{e.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{e.authors[0]}</Card.Subtitle>
                    <Card.Text>{e.excerpt.substring(0, 70)}...</Card.Text>
                    <Button href={e.url} target="_blank" rel="noreferrer" variant="primary">Ver Articulo</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default News;
