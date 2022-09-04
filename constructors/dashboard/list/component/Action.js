import React from "react";
import PropTypes from "prop-types";
import TextButton from "@components/TextButton";
import Modal from "@components/Modal";
import ModelContent from "./ModelContent";
import { Tooltip } from "@material-ui/core";
import CreateButton from "@components/CreateButton";
import { Add } from "@material-ui/icons";

function Component(props) {
  const { row } = props;
  const [noteOpen, setnoteOpen] = React.useState(false);
  const [addnote, setAddNote] = React.useState(false);
  const handleOpenNote = () => setnoteOpen(true);
  const handleCloseNote = () => {
    setnoteOpen(false);
  };
  const handleEdit = (add) => {
    setAddNote(add);
    handleOpenNote();
  };

  return (
    <>
      <Modal
        handleOpen={handleOpenNote}
        handleClose={handleCloseNote}
        noteOpen={noteOpen}
        style={{}}
        title="Showing Notes Information"
      >
        <ModelContent
          handleClose={handleCloseNote}
          row={row}
          addNote={addnote}
          {...props}
        />
      </Modal>
      <Tooltip title="Show Notes" placement="top" arrow>
        <div style={{ display: "inline-flex" }}>
          <TextButton
            fontSize={12}
            icon={
              <img
                src="/assets/note.png"
                width={20}
                height={20}
                alt="Edit"
                onClick={() => handleEdit(false)}
              />
            }
          />
        </div>
      </Tooltip>
      <CreateButton
        label="Add Note"
        color="#FFFFFF"
        backgroundColor="#810BCF"
        hoverBackground="#C085E7"
        customRoute={() => handleEdit(true)}
        Icon={<Add />}
      />
    </>
  );
}

Component.propTypes = {
  row: PropTypes.shape({}).isRequired,
};

export default Component;
