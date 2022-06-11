import React from 'react';
import MenuComponent from '../../components/menu-1/index';
import ListEvents from '../../components/list-events/index';
import Footer from '../../components/footer/index';

const ListOfEvents = ({ organizador }) => (
  <>
    <MenuComponent />
    <ListEvents organizador={organizador} />
    <Footer />
  </>
);

export default ListOfEvents;
