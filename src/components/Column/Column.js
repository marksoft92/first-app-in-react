import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card.js';

//import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import {settings, pageContents, listData} from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';

class Column extends React.Component {
   
      static propTypes = {
        title: PropTypes.node,
       icon: PropTypes.node,
        description: PropTypes.node,
        cards: PropTypes.array,
       
      }
      static defaultProps = {
       description: settings.defaultColumnDescription,
      }
     
    
      render() {
          const {cards,title,icon} = this.props;
        return (
            <section className={styles.component}>
            
        <h3 className={styles.title}><span className={styles.icon}><i className={`fas fa-${icon}`}></i></span>{title}</h3>
          
    <div className={styles.cards}>
    {cards.map(cardData => (
      <Card key={cardData.id} {...cardData} />
    ))}
     </div>
          {/*                       
    <div className={styles.creator}>
      <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
          </div>*/}
    </section>
        )
      }
    }

export default Column;
