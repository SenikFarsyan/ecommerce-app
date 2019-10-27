import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

//selectors
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
//HOC
import WithSpinner from '../../components/with-spinner/with-spinner.component';
//components
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
