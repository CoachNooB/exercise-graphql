import React, { FC } from 'react'
import {
    Avatar,
    Grid,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    CardActionArea,
    Button,
    Typography,
    makeStyles,
    createStyles,
    Theme,
} from '@material-ui/core'
import { idText } from 'typescript';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
        },
        avatar: {
            backgroundColor: 'red',
            },
    }),
);

interface Props {
    data: any
}


const Post:FC<Props> = (props: {data:any}) => {
    const classes = useStyles()
    const { title, body, creaetedAt, user } = props.data


    return (
        <Grid item xs={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardHeader
                        avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            {user.name[0]}
                        </Avatar>
                        }
                        title={title}
                        subheader={creaetedAt}
                    />
                    <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
}

export default Post
