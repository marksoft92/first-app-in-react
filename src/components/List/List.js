import React from 'react';
import styles from './List.scss'
import Hero from '../Hero/Hero.js'
import Column from '../Column/Column.js'
import PropTypes from 'prop-types';
class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    image: PropTypes.string,
    children: PropTypes.node.isRequired,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} titleImage={this.props.image}  />
    <h3 className={styles.title}>Sekcja z Kolumnami</h3>
        <div className={styles.description}>
          
  {this.props.children}
</div>
<div className={styles.columns}>
  <Column title="Animals" />
  <Column title="Plants" />
  <Column title="Minerals" />
</div>
        </section>
    )
  }
}

export default List;
