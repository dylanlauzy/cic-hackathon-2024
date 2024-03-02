import { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ResultBody = () => {
    const [open, setOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);

    const handleOpen = (cardContent) => {
        setSelectedCard(cardContent);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const cards = new Array(16).fill(null).map((_, index) => ({
        id: index + 1,
        title: `This is the content for card ${index + 1}.`,
        image: `/images/image-placeholder-${index + 1}.jpg`
    }));

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem' }}>
                {cards.map((card) => (
                    <Card key={card.id} onClick={() => handleOpen(card.title)} style={{ cursor: 'pointer' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={card.image}
                            alt={card.title}
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {card.title}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Selected Card
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {selectedCard}
                    </Typography>
                </Box>
            </Modal>
        </>
    );
}

export default ResultBody;
