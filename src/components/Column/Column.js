import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import CardItem from '../CardItem/CardItem';
import CardForm from '../CardForm/CardForm';

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: '#f6f5f5'
  },
  addNewCardButton: {
    textTransform: 'capitalize'
  },
  cardFooter: {
    marginTop: '15px'
  }
}));

const Column = ({ columnProp, addNewCardToBoard }) => {
  const classes = useStyles();

  const [cardFormEdit, setCardFormEdit] = useState(false);
  const renderForm = () => (cardFormEdit
    ? (
      <CardForm
        handleCancelButton={setCardFormEdit}
        handleAddCard={addNewCardToBoard}
        colId={columnProp.id}
      />
    )
    : (
      <Button
        onClick={() => setCardFormEdit(!cardFormEdit)}
        className={classes.addNewCardButton}
        size="medium"
        startIcon={<AddIcon />}
      >
        Add a card
      </Button>
    ));
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {columnProp.title}
        </Typography>

        {columnProp.cards.map((card) => <CardItem key={card.id} cardProp={card} />)}

        <div className={classes.cardFooter}>
          {renderForm()}
        </div>
      </CardContent>
    </Card>
  );
};

const columnType = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  cards: PropTypes.array
});

Column.propTypes = {
  columnProp: columnType.isRequired,
  addNewCardToBoard: PropTypes.func.isRequired
};

export default Column;
