import {connect} from 'react-redux';
import Column from './Column';
import { getCardsForColumn, createAction_addCard } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});
export const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createAction_addCard({
    columnId: props.id,
    title,
  })),
});
export default connect(mapStateToProps,mapDispatchToProps)(Column);







