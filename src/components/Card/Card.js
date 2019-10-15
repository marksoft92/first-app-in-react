import React from 'react';
import styles from './Card.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore.js';
import ReactHtmlParser from 'react-html-parser';
class Card extends React.Component {
  state = {
    cards: this.props.cards || [],
  }
  static propTypes = {
    title: PropTypes.node,
    image: PropTypes.string,
    description: PropTypes.node,
    cards: PropTypes.array,
  }
  static defaultProps = {
   description: settings.defaultCardDescription,
  }
  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.column.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'Card-alt',
            cards: []
          }
        ]
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        
    
        <div className={styles.description}>
          
  {ReactHtmlParser(this.props.description)}
</div>
<div className={styles.cards}>
{this.state.cards.map(({key, ...columnProps}) => (
  <Card key={key} {...columnProps} />
))}
</div>
<div className={styles.creator}>
  <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
</div>
        </section>
    )
  }
}

export default Card;
