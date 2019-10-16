import {connect} from 'react-redux';
import Column from './Column';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
export default connect(mapStateToProps)(Column);