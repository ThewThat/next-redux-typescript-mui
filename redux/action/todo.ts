import * as types from "./types";

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: types.ADD_ARTICLE,
    article
  };

  return simulateHttpRequest(action);
}

export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: types.REMOVE_ARTICLE,
    article
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: ArticleAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}
