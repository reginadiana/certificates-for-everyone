import React from 'react';
import { List, Divider, Tag } from 'antd';
import './style.js';
import * as Styled from './style';

const InfoEvent = ({ evento }) => {
  const dataEvent = [
    {
      data: evento.company,
      description: 'Comunidade',
    },
    {
      data: evento.startDate,
      description: 'Data de Inicio',
    },
    {
      data: evento.finishDate,
      description: 'Data de Encerramento',
    },
    {
      data: evento.workload,
      description: 'Carga Horária',
    },
  ];

  return (
    <>
      <Styled.UpInfo></Styled.UpInfo>
      <Styled.ListInfo>
        <Divider orientation="left">{evento.course}</Divider>
        <List
          header={<div>Informações do evento</div>}
          bordered
          dataSource={dataEvent}
          renderItem={({ description, data }) => (
            <List.Item>
              <Tag color="default">{description}</Tag>
              {data}
            </List.Item>
          )}
        />
      </Styled.ListInfo>
    </>
  );
};

export default InfoEvent;
