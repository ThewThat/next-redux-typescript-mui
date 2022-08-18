import React, { useEffect } from 'react'

import TodoList from '../components/Todo/TodoList'
import Container from '@mui/material/Container'

import { useSelector, shallowEqual, useDispatch } from "react-redux";

// import { AddArticle } from "./components/AddArticle";
import { addArticle, removeArticle } from "../redux/action/todo";
import { Dispatch } from "redux";
import AddTodo from '../components/Todo/AddTodo';

import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import { Grid,Paper } from '@mui/material';

const TodoPage = () => {
    const articles: readonly IArticle[] = useSelector(
        (state: ArticleState) => state.articles,
        shallowEqual
    );

    const dispatch: Dispatch<any> = useDispatch();

    const saveArticle = React.useCallback(
        (article: IArticle) => dispatch(addArticle(article)),
        [dispatch]
    );
    return (
        <Container maxWidth={'md'}>
            <AddTodo saveArticle={saveArticle} />
            {articles.map((article: IArticle) => (
                <TodoList
                    key={article.id}
                    article={article}
                    removeArticle={removeArticle}
                />
            ))}
        </Container>
    )
}

TodoPage.getLayout = function getLayout(page) {
    return (
        <Layout>
            <Grid item xs={6}>
                <Sidebar />
            </Grid>
            <Grid item xs={6}>
                {page}
            </Grid>
        </Layout>
    )
}

export default TodoPage