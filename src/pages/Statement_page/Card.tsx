import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

type ActionCardProps = {
    item: {
        title: string,
        image: string,
        description: string
    }
}

function ActionAreaCard(props: ActionCardProps) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.item.image}
                    alt={props.item.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontFamily='Elina' fontWeight={600}>
                        {props.item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" fontFamily='Elina' fontWeight={600}>
                        {props.item.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ActionAreaCard;
