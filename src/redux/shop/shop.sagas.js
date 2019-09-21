import { takeLatest, call, put, all } from 'redux-saga/effects';

//takeEvery - liston for action fire
//call - for some function that returnes new value if it takes too long
//put - fires action like dispatch

//utils
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

//actions
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionAsync() {
  yield console.log('I am fired');
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchCollectionsFailure(err.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
}

export function* shopSaga() {
  yield all([call(fetchCollectionsStart)]);
}
