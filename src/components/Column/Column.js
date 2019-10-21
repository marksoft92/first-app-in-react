import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore.js';


class Column extends React.Component {
   
      static propTypes = {
        title: PropTypes.node,
        icon: PropTypes.node,
        description: PropTypes.node,
        cards: PropTypes.array,
        addCard: PropTypes.func,
      }
      static defaultProps = {
        description: settings.defaultColumnDescription,
        icon: settings.defaultColumnIcon,
      }
      
    
      render() {
        const {addCard,cards,title,icon} = this.props;
        return (
          <section className={styles.component}>
            
            <h3 className={styles.title}><span className={styles.icon}><Icon icon={`fas fa-${icon}`}/></span>{title}</h3>
          
            <div className={styles.cards}>
              {cards.map(cardData => (
                <Card key={cardData.id} {...cardData} />
              ))}
            </div>
                              
            <div className={styles.creator}>
              <Creator text={settings.cardCreatorText} action={addCard}/>
            </div>
          </section>
        );
      }
}

export default Column;
