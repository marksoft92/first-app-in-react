import React from 'react';
import styles from './Column.scss';
import Card from '../Card/Card.js';

import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import {settings, pageContents, listData} from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';
import Icon from '../Icon.js';
class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
      }
      static propTypes = {
        title: PropTypes.node,
       icon: PropTypes.node,
        description: PropTypes.node,
        cards: PropTypes.array,
       
      }
      static defaultProps = {
       description: settings.defaultColumnDescription,
      }
      addCard(title){
        this.setState(state => (
          {
            cards: [
              ...state.cards,
              {
                key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
                title,
               card:[]
              }
            ]
          }
        ));
      }
    
      render() {
        return (
            <section className={styles.component}>
            
        <h3 className={styles.title}><span className={styles.icon}><i className={`fas fa-${this.props.icon}`}></i></span>{this.props.title}</h3>
          
    <div className={styles.cards}>
    {this.state.cards.map(({key, ...cardProps}) => (
      <Card key={key} {...cardProps} />
    ))}
    </div>
    <div className={styles.creator}>
      <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
    </div>
    </section>
        )
      }
    }

export default Column;
