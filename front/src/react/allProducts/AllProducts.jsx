import React from "react";
import styled from 'styled-components';

export default ({product}) => {
  console.log(product)
    const CardGame = styled.div`
        width: 200px;
        padding-bottom: 10px;
        box-shadow: 0px 4px 5px 2px rgba(189,189,189,1);
        margin-top: 30px;
        margin-right: 20px;
    `;

    const CardGameImg = styled.img`
        width: 200px;
    `;
    const CardContentP = styled.p`
        padding: 10px;
        text-align: center;
    `;
    const CardLink = styled.a`
        color: #000000;
        text-decoration: none;
    `;
    const PriceGame = styled.span`
        font-weight: 700;
        display: block;
        text-align: center;
    `;
    const Section = styled.section`
        padding: 20px 100px;
    `;
    const Article = styled.article`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    `;
    const Aside = styled.aside`
      height: 300px;
      width: 300px;
      margin-top: 50px;
      margin-left: 20px;
      float: left;
    `;
    const AsideSearch = styled.h2`
      font-size: 25px;
      padding: 30px;
      text-align: center;
    `;
    const CategoriaAside = styled.div`
      padding: 0px 30px;
    `;
    const CategoriaAsideH = styled.h3`
      color: #212832;
      font-size: 20px;
      margin-bottom: 10px;
    `;
    const Ul = styled.ul`
      margin: 0px;
      padding: 0px;
    `;
    const Li = styled.li`
      list-style: none;
      margin: 5px 0px;
    `;
    const A = styled.a`
      color: #777777;
      text-decoration: none;
    `;

  return (
    <div>
      <Aside>
        <AsideSearch>Busqueda: </AsideSearch>
        <CategoriaAside>
            <CategoriaAsideH>Categorías:</CategoriaAsideH>
            <Ul>
                <Li><A href="">Acción</A></Li>
                <Li><A href="">Terror</A></Li>
                <Li><A href="">Aventura</A></Li>
            </Ul>
        </CategoriaAside>
    </Aside>

    <Section>
        <Article>
            
          <CardGame>
            <CardLink href="">
                <CardGameImg src="https://i11c.3djuegos.com/juegos/12333/resident_evil_2__2015_/fotos/ficha/resident_evil_2__2015_-4765182.jpg"/>
                <div class="cardContent">
                    <CardContentP>
                        <CardLink href="">Resident Evil 2</CardLink>
                    </CardContentP>
                    <PriceGame>1700 <span>Ars</span></PriceGame>
                </div>
            </CardLink>
          </CardGame>

          <CardGame>
            <CardLink href="">
                <CardGameImg src="https://i11c.3djuegos.com/juegos/12333/resident_evil_2__2015_/fotos/ficha/resident_evil_2__2015_-4765182.jpg"/>
                <div class="cardContent">
                    <CardContentP>
                        <CardLink href="">Resident Evil 2</CardLink>
                    </CardContentP>
                    <PriceGame>1700 <span>Ars</span></PriceGame>
                </div>
            </CardLink>
          </CardGame>
            
          </Article>
      </Section>
    </div>
  );
};

/*
<div>
      <h1>Bienvenido a todos los Productos</h1>

      <div>
    <ul>
      {product.length >1 ? (product.map(product=>{
          
          return (
            <li key={product.name}> 
              
             
              
            </li>
          )
      })): (<li>Bienvenido!</li>) }
    </ul>
    </div>

    </div>
*/