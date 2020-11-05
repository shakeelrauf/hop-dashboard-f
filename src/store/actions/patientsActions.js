import { 
  GET_PATIENTS_META
} from '../../services/constants/types';

export function getPatientsMeta() {
  return {
    type: GET_PATIENTS_META
  };
}