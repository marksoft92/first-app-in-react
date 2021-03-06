import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import Container from '../Container/Container';

import {settings} from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';
class List extends React.Component {

  static propTypes = {
    title: PropTypes.node,
    image: PropTypes.string,
    description: PropTypes.node,
    columns: PropTypes.array,
    icon: PropTypes.node,
    addColumn: PropTypes.func,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }


  render() {
    const {addColumn,columns,title, image, description} = this.props;
    return (
      <section className={styles.component}>
        <Container>
          <Hero title={title} image={image}  />
          <h3 className={styles.title}>Sekcja z Kolumnami</h3>
          <div className={styles.description}>
          
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn}/>
          </div></Container>
      </section>
    );
  }
}

export default List;
