import * as React from "react";
import PropTypes from "prop-types";
import { ContainerFull, ContainerItem } from "@components/index";
import { makeStyles, Grid, Typography, TextField } from "@material-ui/core";
import { CreateButton } from "@components/index";
const styles = makeStyles((theme) => ({
  Wrapper: {
    paddingTop: "60px",
  },
  inputValue: {
    color: "#444444",
    fontSize: 16,
    fontWeight: 400,
    textTransform: "capitalize",
  },
  inputField: {
    padding: "10px 17px",
    borderRadius: "5px",
    border: "1px solid rgba(201, 201, 201, 0.6)",
    disableUnderline: true,
    height: 42,
    fontSize: 14,
    color: "#1A203D",
    "&:hover": {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 6,
    color: "#666666",
  },
}));

function Component({ data, row, addNote, handler, handleClose }) {
  const classes = styles();
  const disabled = !data?.noteContent;
  const submitNote = () => {
    handler.submit();
    handleClose(true);
  };

  return (
    <div className={classes.Wrapper}>
      <Grid container spacing={3}>
        {addNote && (
          <React.Fragment>
            <Grid item xs={12}>
              <Typography className={`required ${classes.inputLabel}`}>
                Add Note
              </Typography>
              <TextField
                value={data?.noteContent}
                className={classes.parentInputField}
                onChange={(e) => handler.onNoteChange(e.target.value, row?.id)}
                placeholder="Enter Note Details"
                id="note"
                fullWidth
                InputProps={{
                  className: classes.inputField,
                  disableUnderline: true,
                  inputProps: { maxLength: 40 },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CreateButton
                label="Add Note"
                color="#FFFFFF"
                backgroundColor="#810BCF"
                hoverBackground="#440c68"
                fullWidth
                customRoute={submitNote}
                disabled={disabled}
              />
            </Grid>
          </React.Fragment>
        )}
        {!addNote && (
          <ContainerFull>
            <ContainerItem xs={12} md={6}>
              <Typography className={classes.inputLabel}>CALL NOTES</Typography>
            </ContainerItem>
            <ContainerItem xs={12} md={6}>
              {row.notes.length ? (
                row.notes.map((note, index) => (
                  <Typography className={classes.inputValue} key={index}>
                    {note.content}
                  </Typography>
                ))
              ) : (
                <Typography className={classes.inputLabel}>
                  No Notes Exist For This Call
                </Typography>
              )}

              <Typography className={classes.inputLabel}>{}</Typography>
            </ContainerItem>
          </ContainerFull>
        )}
      </Grid>
    </div>
  );
}

Component.propTypes = {
  row: PropTypes.shape({
    notes: PropTypes.arrayOf(
      PropTypes.shape({
        content: PropTypes.string,
      })
    ),
  }).isRequired,
};
export const ModelContent = Component;

export default ModelContent;
