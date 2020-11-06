import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import TagButton  from '../../Buttons/TagButton';
import Modal  from '../Modal';

export const STATUS = {
  default: {
    inactive: {
      tooltip: 'No access or just created',
      color: 'red',
      backgroundColor: 'rgb(255, 234, 231)'
    },
    delivered: {
      tooltip: 'Created and activation email delivered',
      color: 'magenta',
      backgroundColor: '#fbf2fb'
    },
    opened: {
      tooltip: 'Created and activation email opened',
      color: 'green',
      backgroundColor: '#ecf7ec'
    },
    clicked: {
      tooltip: 'Created and activation email link clicked',
      color: 'orange',
      backgroundColor: '#f9efde'
    },
    login: {
      tooltip: 'Created and first login successful',
      color: 'cyan',
      backgroundColor: 'rgba(249,251, 251, 1)'
    },
    new: {
      tooltip: 'Created, first login successful and onboarding complete',
      color: '#f82712',
      backgroundColor: '#ffeae7'
    },
    active: {
      tooltip: 'Created and active',
      color: '#1fc826',
      backgroundColor: '#e9ffea'
    }
  },
  patient: {
    inactive: {
      tooltip: 'No access or just created',
      color: 'red'
    },
    delivered: {
      tooltip: 'Created and intake email delivered',
      color: 'magenta'
    },
    opened: {
      tooltip: 'Intake email opened',
      color: 'volcano'
    },
    clicked: {
      tooltip: 'Intake / onboarding form started',
      color: 'orange'
    },
    completed: {
      tooltip: 'Intake / onboarding form completed',
      color: 'gold'
    },
    login: {
      tooltip: 'Created and first login successful',
      color: 'cyan'
    },
    new: {
      tooltip: 'First login successful and accepted user agreement',
      color: 'green'
    },
    active: {
      tooltip: 'Onboarding complete and active',
      color: 'blue'
    },
    limited: {
      tooltip: 'Limited Access',
      color: 'red'
    }
  }
};


function ActivationState({ value, type }) {
  const [modal, setModal] = useState(false);

  const handleClose = () => {
    setModal(false);
  };

  const STATUS_MAP = STATUS[type];
  const status = STATUS_MAP[value] || {};
  const STATUS_LIST = Object.keys(STATUS_MAP);
  return (
    <>
      <TagButton color={status.color} background={status.backgroundColor} onClick={()=>setModal(true)}>{value}</TagButton>
      <Modal
        handleClose={handleClose}
        open={modal}
        style={{width: '600px'}}
        title={'Activation Status'}
      >
        <Stepper
          activeStep={STATUS_LIST.indexOf(value)}
          orientation="vertical"
        >
          {STATUS_LIST.map(s => (
            <Step
              key={s}
            >
              <StepLabel>
                <TagButton background={STATUS_MAP[s].backgroundColor} color={STATUS_MAP[s].color}>{s}</TagButton>
              </StepLabel>
              <StepContent>
                <Typography style={{color: 'rgba(0, 0, 0, 0.45)'}}>
                  {STATUS_MAP[s].tooltip}
                </Typography>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Modal>
    </>
  );
}

ActivationState.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string
};

ActivationState.defaultProps = {
  type: 'default'
};

export default ActivationState;