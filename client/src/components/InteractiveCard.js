import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const InteractiveCard = ({ image, title, description }) => {
    const [raised, setRaised] = useState(false);

    return (
        <Card
            sx={{ boxShadow: raised ? 10 : 3, border: '1px solid #ddd', borderRadius: '16px', cursor: 'pointer' }}
            onMouseOver={() => setRaised(true)}
            onMouseOut={() => setRaised(false)}
            onClick={() => console.log(`${title} card clicked`)}
        >
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="Image description"
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: 'purple' }}
                >
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default InteractiveCard;

