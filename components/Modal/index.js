/* eslint-disable react/require-default-props */
/* eslint-disable react/no-typos */
import * as React from "react";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Modal from "@material-ui/core/Modal";
import PropTypes from "prop-types";
import CloseIcon from "@material-ui/icons/Close";

const defaultStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: 900,
  width: "100%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "12px",
};

function Component({ handleClose, noteOpen, title, children, style }) {
  //   const classes = styles()

  return (
    <div>
      <Modal
        open={noteOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...defaultStyle, ...style }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "10px",
              }}
              id="modal-modal-title"
              variant="h4"
              component="h6"
            >
              {title}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Button onClick={handleClose}>
                <CloseIcon />
              </Button>
            </Typography>
          </Box>
          {children}
        </Box>
      </Modal>
    </div>
  );
}

Component.propTypes = {
  csvOpen: PropTypes.bool.isRequired,
  //   handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.shape({}),
};
export const AddModel = Component;

export default AddModel;
