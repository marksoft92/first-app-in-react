import React from 'react';
import styles from './List.scss'
import Hero from '../Hero/Hero.js'
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
        <Hero titleText={this.props.title} />
        <Hero titleImage={this.props.image} />
        <div className={styles.description}>
  {this.props.children}
</div>
        </section>
    )
  }
}

export default List;
