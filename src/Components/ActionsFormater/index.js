import clsx from 'clsx';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { usePopper } from 'react-popper';
import { useState } from 'react';

const StyledCellAction = styled.div`
  float: right;
`;

const CellActionLast = styled.div`
  margin-right: -8px;
`;

const CellActionButton = styled.div`
  width: 35px;
  height: auto;
  text-align: center;
  position: relative;
  display: table;
  color: #4a9de2;
  > span {
    display: table-cell;
    vertical-align: middle;
  }
`;

const CellActionMenu = styled.div`
  position: absolute;
  top: 100%;
  z-index: 1000;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ccc;
  box-shadow: 0 0 3px 0 #ccc;
  > span {
    display: block;
    padding: 3px 10px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
    cursor: pointer;
    &:hover {
      color: #262626;
      text-decoration: none;
      background-color: #f5f5f5;
    }
  }
`;

function CellAction({ icon, actions, callback, isFirst, row }) {
  const [isOpen, setIsOpen] = useState(false);
  const [reference, setReference] = useState(null);
  const [popper, setPopper] = useState(null);
  const { styles } = usePopper(reference, popper, {
    placement: 'bottom-start',
    modifiers: [{ name: 'offset', options: { offset: [0, -8] } }],
  });

  const cellActionClasses = clsx(StyledCellAction, {
    [CellActionLast]: isFirst,
  });

  function onActionIconClick() {
    if (typeof callback === 'function') {
      callback(row);
    }

    if (actions && actions.length > 0) {
      setIsOpen((isOpen) => !isOpen);
    }
  }

  return (
    <div className={cellActionClasses} onMouseLeave={() => setIsOpen(false)}>
      <CellActionButton ref={setReference} onClick={onActionIconClick}>
        {icon}
      </CellActionButton>
      {isOpen &&
        actions &&
        actions.length &&
        createPortal(
          <cellActionMenu ref={setPopper} style={styles.popper}>
            {actions.map((action, index) => (
              <span key={index} onClick={action.callback}>
                {action.text}
              </span>
            ))}
          </cellActionMenu>,
          document.body
        )}
    </div>
  );
}

export function CellActionsFormatter({ actions, row }) {
  const actionButtons = actions.map((action, index) => {
    return <CellAction key={index} isFirst={index === 0} {...action} row={row} />;
  });

  return <>{actionButtons}</>;
}
