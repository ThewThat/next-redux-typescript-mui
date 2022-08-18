import React from "react";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { Button, Paper } from "@mui/material";

type Props = {
  article: IArticle;
  removeArticle: (article: IArticle) => void;
};

const TodoList: React.FC<Props> = ({ article, removeArticle }) => {
  const dispatch: Dispatch<any> = useDispatch();

  const deleteArticle = React.useCallback(
    (article: IArticle) => dispatch(removeArticle(article)),
    [dispatch, removeArticle]
  );

  return (
    <Paper sx={{p:2,my:2}}>
      <div>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
      <Button variant="contained" color="error" onClick={() => deleteArticle(article)}>Delete</Button>
    </Paper>
  );
};

export default TodoList