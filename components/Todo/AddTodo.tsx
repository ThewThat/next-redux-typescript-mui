import { Button, TextField, Grid } from '@mui/material';
import * as React from 'react'

type Props = {
    saveArticle: (article: IArticle | any) => void;
}

const AddTodo: React.FC<Props> = ({ saveArticle }) => {
    const [article, setArticle] = React.useState<IArticle | {}>();
    const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
        setArticle({
            ...article,
            [e.currentTarget.id]: e.currentTarget.value
        });
    };

    const addNewArticle = (e: React.FormEvent) => {
        e.preventDefault();
        saveArticle(article);
    };

    return (
        <form onSubmit={addNewArticle} >
            <Grid container spacing={2}>
                <Grid item sm={6}>
                    <TextField
                        fullWidth
                        type="text"
                        id="title"
                        placeholder="Title"
                        onChange={handleArticleData}
                    />
                </Grid>
                <Grid item sm={6}>
                    <TextField
                        fullWidth
                        type="text"
                        id="body"
                        placeholder="Description"
                        onChange={handleArticleData}
                    />
                </Grid>
            </Grid>
            <Button sx={{ my: 2 }} variant='contained' color='primary' disabled={article === undefined ? true : false}>
                Add article
            </Button>
        </form >
    );
};

export default AddTodo