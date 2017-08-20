import React from 'react';
import { connect } from 'react-redux';
import { withHandlers, compose } from 'recompose';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import { setDisplay, toggleDisplayMenu } from '../../store/actions/ui';

import styles from './style.css';

const MenuItm = ({ menuOption, action }) => (
  <MenuItem>
    <div
      className={styles.option}
      onClick={() => action(menuOption)}>
      {menuOption}
    </div>
  </MenuItem>
)
const Display = ({
  clickMenuOption,
  display,
  show,
  onToggleDisplayMenu
}) => (
  <div className={styles.wrapper}>
    <DropdownButton id='display-menu' title={`Showing: ${display}`} >
     <MenuItm menuOption={'all'} action={clickMenuOption} />
     <MenuItm menuOption={'active'}  action={clickMenuOption}  />
     <MenuItm menuOption={'complete'}  action={clickMenuOption}  />
    </DropdownButton >
  </div>
);

const mapStateToProps = ({ uiReducer }) => ({
  show: uiReducer.displayMenu
});

export default compose(
  connect(
    mapStateToProps,
    {
      onSetDisplay: setDisplay,
      onToggleDisplayMenu: toggleDisplayMenu
    }
  ),
  withHandlers({
    clickMenuOption: ({ onSetDisplay, onToggleDisplayMenu }) => x => {
      onSetDisplay(x);
      onToggleDisplayMenu();
    }
  })
)(Display);
